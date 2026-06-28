import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"

let lastUrl = ""
let lastPath = ""
let lastTrackId = ""

const mediaState = createPoll({
  title: "Not playing",
  artist: "",
  artUrl: "",
  status: "Stopped",
  player: ""
}, 500, async () => {
  try {
    const playersStr = await execAsync(["playerctl", "-l"]).catch(() => "")
    const players = playersStr.trim().split("\n")
    
    let validPlayer = ""
    for (const p of players) {
      if (!p) continue;
      const url = await execAsync(["playerctl", "-p", p, "metadata", "xesam:url"]).catch(() => "")
      const lower = url.toLowerCase()
      if (lower.includes("instagram.com") || lower.includes("whatsapp.com") || lower.includes("reddit.com")) {
        continue
      }
      validPlayer = p
      break
    }

    if (!validPlayer) {
      return { title: "Not playing", artist: "", artUrl: "", status: "Stopped", player: "" }
    }

    const data = await execAsync([
      "playerctl", "-p", validPlayer, "metadata", "--format",
      "{{title}}|~|{{artist}}|~|{{status}}|~|{{mpris:artUrl}}|~|{{xesam:url}}|~|{{album}}"
    ]).catch(() => "")
    
    if (!data.trim()) {
      return { title: "Not playing", artist: "", artUrl: "", status: "Stopped", player: validPlayer }
    }

    const [title, artist, status, mprisArtUrl, xesamUrl, album] = data.split("|~|")
    const trackId = `${title}|${artist}`
    
    let finalArtUrl = mprisArtUrl || ""
    
    // YouTube thumbnail fallback
    if (!finalArtUrl && xesamUrl) {
      if (xesamUrl.includes("youtube.com/watch?v=") || xesamUrl.includes("youtu.be/")) {
        const videoId = xesamUrl.includes("v=") ? xesamUrl.split("v=")[1]?.split("&")[0] : xesamUrl.split("youtu.be/")[1]?.split("?")[0]
        if (videoId) {
          const maxres = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
          const mq = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
          try {
            await execAsync(["wget", "--spider", "-q", maxres])
            finalArtUrl = maxres
          } catch {
            finalArtUrl = mq
          }
        }
      } 
      
      // Universal iTunes fallback for missing cover art
      if (!finalArtUrl && title && artist) {
        try {
          const query = encodeURIComponent(`${artist} ${album || title}`)
          const itunesJson = await execAsync(["curl", "-s", `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`])
          const itunesData = JSON.parse(itunesJson)
          if (itunesData.results && itunesData.results.length > 0) {
            const artworkUrl = itunesData.results[0].artworkUrl100
            if (artworkUrl) {
              finalArtUrl = artworkUrl.replace("100x100bb.jpg", "600x600bb.jpg")
              finalArtUrl = finalArtUrl.replace("100x100bb.png", "600x600bb.png")
            }
          }
        } catch {}
      }
    }

    let processedPath = ""
    if (finalArtUrl.startsWith("file://")) {
      const originalPath = decodeURIComponent(finalArtUrl.replace("file://", ""))
      if (trackId === lastTrackId && lastPath !== "") {
        processedPath = lastPath
      } else {
        lastTrackId = trackId
        lastUrl = finalArtUrl
        const hash = Date.now()
        const path = `/tmp/ags-media-art-${hash}.jpg`
        try { await execAsync(["bash", "-c", "rm /tmp/ags-media-art-*.jpg 2>/dev/null || true"]) } catch {}
        try { await execAsync(["cp", originalPath, path]) } catch {}
        try {
          await execAsync([
            "magick", path,
            "-set", "option:distort:viewport", "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]",
            "-filter", "point", "-distort", "SRT", "0", "+repage",
            path
          ])
        } catch (e) {}
        lastPath = path
        processedPath = path
      }
    } else if (finalArtUrl.startsWith("http")) {
      if (trackId === lastTrackId && lastPath !== "") {
        processedPath = lastPath
      } else {
        lastTrackId = trackId
        lastUrl = finalArtUrl
        const hash = Date.now()
        const path = `/tmp/ags-media-art-${hash}.jpg`
        try { await execAsync(["bash", "-c", "rm /tmp/ags-media-art-*.jpg 2>/dev/null || true"]) } catch {}
        await execAsync(["wget", "-q", "-O", path, finalArtUrl])
        try {
          await execAsync([
            "magick", path,
            "-set", "option:distort:viewport", "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]",
            "-filter", "point", "-distort", "SRT", "0", "+repage",
            path
          ])
        } catch (e) {}
        lastPath = path
        processedPath = path
      }
    }

    return {
      title: title || "Not playing",
      artist: artist || "",
      status: status || "Stopped",
      artUrl: processedPath,
      player: validPlayer
    }
  } catch {
    return { title: "Not playing", artist: "", artUrl: "", status: "Stopped", player: "" }
  }
})

export default function MediaTile() {
  let labelRef: Gtk.Label

  function attachMarquee(scrolled: Gtk.ScrolledWindow) {
    scrolled.connect("realize", () => {
      const adj = scrolled.hadjustment
      if (!adj || !labelRef) return

      type Phase = "scroll" | "pauseEnd" | "fadeOut" | "fadeIn" | "pauseStart"
      const STEP = 1.0
      const PAUSE_END_TICKS = 30
      const FADE_TICKS = 6
      const PAUSE_START_TICKS = 30

      let phase: Phase = "pauseStart"
      let pause = PAUSE_START_TICKS

      function setFadedOut(faded: boolean) {
        const classes = labelRef.cssClasses.filter((c) => c !== "fade-out")
        labelRef.cssClasses = faded ? [...classes, "fade-out"] : classes
      }

      function tick() {
        const max = adj.upper - adj.page_size

        if (max <= 0.5) {
          if (adj.value !== 0) adj.value = 0
          phase = "scroll"
          return
        }

        switch (phase) {
          case "scroll": {
            const next = adj.value + STEP
            if (next >= max) {
              adj.value = max
              phase = "pauseEnd"
              pause = PAUSE_END_TICKS
            } else {
              adj.value = next
            }
            break
          }
          case "pauseEnd": {
            if (--pause <= 0) {
              setFadedOut(true)
              phase = "fadeOut"
              pause = FADE_TICKS
            }
            break
          }
          case "fadeOut": {
            if (--pause <= 0) {
              adj.value = 0
              setFadedOut(false)
              phase = "fadeIn"
              pause = FADE_TICKS
            }
            break
          }
          case "fadeIn": {
            if (--pause <= 0) {
              phase = "pauseStart"
              pause = PAUSE_START_TICKS
            }
            break
          }
          case "pauseStart": {
            if (--pause <= 0) phase = "scroll"
            break
          }
        }
      }

      const timerId = setInterval(tick, 50)

      adj.connect("notify::upper", () => {
        adj.value = 0
        setFadedOut(false)
        phase = "pauseStart"
        pause = PAUSE_START_TICKS
      })

      scrolled.connect("destroy", () => clearInterval(timerId))
    })
  }

  return (
    <box
      widthRequest={152}
      heightRequest={152}
      orientation={Gtk.Orientation.VERTICAL}
      cssClasses={mediaState.as(s => s.artUrl ? ["tile-media", "has-art"] : ["tile-media"])}
      css={mediaState.as(s => s.artUrl ? `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.65)), url('file://${s.artUrl}'); background-size: cover; background-position: center;` : "")}
    >
      <box orientation={Gtk.Orientation.VERTICAL} css="padding: 14px 13px 11px 13px;" hexpand vexpand>
        
        {/* Top: Title & Artist */}
        <box
          orientation={Gtk.Orientation.VERTICAL}
          valign={Gtk.Align.START}
          hexpand
          spacing={2}
          class="media-info"
        >
          <scrolledwindow
              hscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
              vscrollbarPolicy={Gtk.PolicyType.NEVER}
              propagateNaturalWidth={false}
              minContentWidth={126}
              maxContentWidth={126}
              cssClasses={["ssid-scroll"]}
              $={(self) => attachMarquee(self)}
          >
            <label
              label={mediaState.as(s => s.title)}
              class="media-title"
              halign={Gtk.Align.START}
              xalign={0}
              ellipsize={0}
              wrap={false}
              hexpand={false}
              $={(self) => (labelRef = self)}
            />
          </scrolledwindow>
          <label
            label={mediaState.as(s => s.artist)}
            class="media-artist"
            halign={Gtk.Align.FILL}
            xalign={0}
            hexpand={true}
            ellipsize={3}
            maxWidthChars={1}
            lines={1}
          />
        </box>

        <box vexpand />

        {/* Bottom: Playback Controls */}
        <box
          class="media-controls"
          orientation={Gtk.Orientation.HORIZONTAL}
          halign={Gtk.Align.CENTER}
          spacing={6}
        >
          <button
            class="media-btn"
            onClicked={() => {
              const current = mediaState.get()
              if (current.player) execAsync(["playerctl", "-p", current.player, "previous"]).catch(() => {})
            }}
          >
            <image iconName="media-skip-backward-symbolic" pixelSize={18} />
          </button>

          <button
            class="media-btn"
            onClicked={(self) => {
              const current = mediaState.get()
              if (!current.player) return

              // Instant visual feedback
              const img = self.get_child() as any
              if (img && img.iconName) {
                img.iconName = img.iconName.includes("pause") ? "media-playback-start-symbolic" : "media-playback-pause-symbolic"
              }
              execAsync(["playerctl", "-p", current.player, "play-pause"]).catch(() => {})
            }}
          >
            <image iconName={mediaState.as(s => s.status === "Playing" ? "media-playback-pause-symbolic" : "media-playback-start-symbolic")} pixelSize={22} />
          </button>

          <button
            class="media-btn"
            onClicked={() => {
              const current = mediaState.get()
              if (current.player) execAsync(["playerctl", "-p", current.player, "next"]).catch(() => {})
            }}
          >
            <image iconName="media-skip-forward-symbolic" pixelSize={18} />
          </button>
        </box>

      </box>
    </box>
  )
}
