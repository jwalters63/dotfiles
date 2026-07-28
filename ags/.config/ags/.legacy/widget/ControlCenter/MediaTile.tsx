import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import Mpris from "gi://AstalMpris"

export default function MediaTile() {
  let labelRef: Gtk.Label
  let bgBoxRef: Gtk.Box
  let titleRef: Gtk.Label
  let artistRef: Gtk.Label
  let playBtnRef: Gtk.Button
  let playIconRef: Gtk.Image
  let prevBtnRef: Gtk.Button
  let nextBtnRef: Gtk.Button

  const m = Mpris.get_default()
  let playerHooks: Map<Mpris.Player, number[]> = new Map()
  let currentActive: Mpris.Player | null = null

  const state = {
    title: "Not playing",
    artist: "",
    status: "Stopped",
    artUrl: "",
    player: null as Mpris.Player | null
  }
  let lastTrackId = ""

  let cssProvider: Gtk.CssProvider | null = null

  function applyCss(widget: Gtk.Widget, css: string) {
    const ctx = widget.get_style_context()
    if (!css.includes("{")) css = `* { ${css} }`
    if (cssProvider) ctx.remove_provider(cssProvider)
    cssProvider = new Gtk.CssProvider()
    cssProvider.load_from_string(css)
    ctx.add_provider(cssProvider, Gtk.STYLE_PROVIDER_PRIORITY_USER)
  }

  function syncUI() {
    if (titleRef) titleRef.label = state.title
    if (artistRef) artistRef.label = state.artist
    if (bgBoxRef) {
      if (state.artUrl) {
        bgBoxRef.cssClasses = ["tile-media", "has-art"]
        applyCss(bgBoxRef, `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.65)), url('file://${state.artUrl}'); background-size: cover; background-position: center; border-radius: 20px;`)
      } else {
        bgBoxRef.cssClasses = ["tile-media"]
        applyCss(bgBoxRef, `border-radius: 20px;`)
      }
    }
    if (playIconRef) {
      playIconRef.iconName = state.status === "Playing" ? "media-playback-pause-symbolic" : "media-playback-start-symbolic"
    }
    // Set skip buttons sensitive if player can skip
    if (prevBtnRef) prevBtnRef.sensitive = state.player ? state.player.canGoPrevious : false
    if (nextBtnRef) nextBtnRef.sensitive = state.player ? state.player.canGoNext : false
  }

  async function processFallbackArt(p: Mpris.Player) {
    const title = p.title || "Not playing"
    const artist = p.artist || ""
    const album = p.album || ""
    let finalArtUrl = p.coverArt || ""
    const trackId = `${title}|${artist}`

    // 1. Siempre intentar YouTube Thumbnail si es un enlace de YouTube, ignorando el coverArt nativo (que a menudo es un favicon transparente del navegador)
    const playerName = p.busName.replace("org.mpris.MediaPlayer2.", "")
    const xesamUrl = await execAsync(["playerctl", "-p", playerName, "metadata", "xesam:url"]).catch(() => "")
    if (xesamUrl && (xesamUrl.includes("youtube.com/watch?v=") || xesamUrl.includes("youtu.be/"))) {
      const videoId = xesamUrl.includes("v=") ? xesamUrl.split("v=")[1]?.split("&")[0] : xesamUrl.split("youtu.be/")[1]?.split("?")[0]
      if (videoId) {
        const maxres = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        const mq = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
        const dl = await execAsync(["wget", "--spider", "-q", maxres]).catch(() => null)
        finalArtUrl = (dl !== null) ? maxres : mq
      }
    }
    
    // 2. Fallback de iTunes (solo si sigue sin haber carátula)
    if (!finalArtUrl && title && artist) {
      const query = encodeURIComponent(`${artist} ${album || title}`)
        const itunesJson = await execAsync(["curl", "-s", `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`]).catch(() => null)
        if (itunesJson) {
          try {
            const data = JSON.parse(itunesJson)
            if (data.results?.[0]?.artworkUrl100) {
              finalArtUrl = data.results[0].artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg").replace("100x100bb.png", "600x600bb.png")
            }
          } catch {}
        }
      }

    // Procesar la imagen (recortar a cuadrado)
    let processedPath = ""
    if (finalArtUrl.startsWith("file://")) {
      const originalPath = decodeURIComponent(finalArtUrl.replace("file://", ""))
      const hash = Date.now()
      const path = `/tmp/ags-media-art-${hash}.jpg`
      await execAsync(["bash", "-c", "rm /tmp/ags-media-art-*.jpg 2>/dev/null || true"]).catch(() => null)
      
      if (await execAsync(["cp", originalPath, path]).catch(() => null) !== null) {
        if (await execAsync(["magick", path, "-set", "option:distort:viewport", "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]", "-filter", "point", "-distort", "SRT", "0", "+repage", path]).catch(() => null) !== null) {
          processedPath = path
        }
      }
    } else if (finalArtUrl.startsWith("http")) {
      const hash = Date.now()
      const path = `/tmp/ags-media-art-${hash}.jpg`
      await execAsync(["bash", "-c", "rm /tmp/ags-media-art-*.jpg 2>/dev/null || true"]).catch(() => null)
      
      if (await execAsync(["wget", "-q", "-O", path, finalArtUrl]).catch(() => null) !== null) {
        if (await execAsync(["magick", path, "-set", "option:distort:viewport", "%[fx:min(w,h)]x%[fx:min(w,h)]+%[fx:max((w-h)/2,0)]+%[fx:max((h-w)/2,0)]", "-filter", "point", "-distort", "SRT", "0", "+repage", path]).catch(() => null) !== null) {
          processedPath = path
        }
      }
    }

    // Actualizar el estado solo si la canción no ha cambiado durante la descarga
    if (state.title === title && state.artist === artist) {
      state.artUrl = processedPath
      syncUI()
    }
  }

  function evaluateActive() {
    const players = m.get_players()
    const BLACKLIST = ["whatsapp", "reddit", "twitter", "facebook", "instagram", "discord", "telegram"]
    const validPlayers = players.filter(p => {
       const bName = (p.busName || "").toLowerCase()
       const title = (p.title || "").toLowerCase()
       const identity = (p.identity || "").toLowerCase()
       return !BLACKLIST.some(b => bName.includes(b) || title.includes(b) || identity.includes(b))
    })

    currentActive = validPlayers.find(p => p.playbackStatus === Mpris.PlaybackStatus.PLAYING) || validPlayers[0] || null

    if (!currentActive) {
      state.title = "Not playing"
      state.artist = ""
      state.status = "Stopped"
      state.artUrl = ""
      state.player = null
      syncUI()
      return
    }

    const title = currentActive.title || "Not playing"
    const artist = currentActive.artist || ""
    const trackId = `${title}|${artist}`

    state.title = title
    state.artist = artist
    state.status = currentActive.playbackStatus === Mpris.PlaybackStatus.PLAYING ? "Playing" : "Paused"
    state.player = currentActive

    if (trackId !== lastTrackId) {
      lastTrackId = trackId
      processFallbackArt(currentActive)
    }
    
    syncUI()
  }

  function syncPlayers() {
    const players = m.get_players()
    
    // Desconectar jugadores que ya no existen
    for (const [p, hooks] of playerHooks.entries()) {
      if (!players.includes(p)) {
        hooks.forEach(id => p.disconnect(id))
        playerHooks.delete(p)
      }
    }
    
    // Conectar nuevos jugadores
    for (const p of players) {
      if (!playerHooks.has(p)) {
        const hooks = [
          p.connect("notify::playback-status", evaluateActive),
          p.connect("notify::title", evaluateActive),
          p.connect("notify::artist", evaluateActive),
          p.connect("notify::cover-art", evaluateActive)
        ]
        playerHooks.set(p, hooks)
      }
    }
    evaluateActive()
  }

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
        if (!labelRef) return
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
      $={(self) => {
        bgBoxRef = self;
        m.connect("notify::players", syncPlayers);
        syncPlayers(); // Llamada inicial
      }}
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
              class="media-title"
              halign={Gtk.Align.START}
              xalign={0}
              ellipsize={0}
              wrap={false}
              hexpand={false}
              $={(self) => { 
                titleRef = self; 
                labelRef = self; 
              }}
            />
          </scrolledwindow>
          <label
            class="media-artist"
            halign={Gtk.Align.FILL}
            xalign={0}
            hexpand={true}
            ellipsize={3}
            maxWidthChars={1}
            lines={1}
            $={(self) => { artistRef = self; }}
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
            $={(self) => { prevBtnRef = self; }}
            onClicked={() => {
              if (state.player && state.player.canGoPrevious) {
                state.player.previous()
              }
            }}
          >
            <image iconName="media-skip-backward-symbolic" pixelSize={18} />
          </button>

          <button
            class="media-btn"
            $={(self) => { playBtnRef = self; }}
            onClicked={() => {
              if (state.player) {
                state.player.play_pause()
              }
            }}
          >
            <image 
              pixelSize={22} 
              $={(self) => { playIconRef = self; }}
            />
          </button>

          <button
            class="media-btn"
            $={(self) => { nextBtnRef = self; }}
            onClicked={() => {
              if (state.player && state.player.canGoNext) {
                state.player.next()
              }
            }}
          >
            <image iconName="media-skip-forward-symbolic" pixelSize={18} />
          </button>
        </box>

      </box>
    </box>
  )
}
