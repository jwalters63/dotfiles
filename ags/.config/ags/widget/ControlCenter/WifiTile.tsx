import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"
import { activeTab } from "./state"


const ssid = createPoll("Connecting...", 5000, async () => {
    try {
        const out = await execAsync([
            "bash", "-c",
            "nmcli -t -f NAME,TYPE,STATE con show --active 2>/dev/null | grep ':802-11-wireless:activated' | cut -d: -f1 | head -1 || echo ''"
        ])
        return out.trim() || "Disconnected"
    } catch {
        return "Disconnected"
    }
})

const isConnected = createPoll(false, 5000, async () => {
  try {
    const out = await execAsync([
      "bash", "-c",
      "nmcli -t -f TYPE,STATE con show --active 2>/dev/null | grep '^802-11-wireless:activated' | wc -l",
    ])
    return parseInt(out.trim()) > 0
  } catch {
    return false
  }
})

export default function WifiTile() {
  let labelRef: Gtk.Label

  function attachMarquee(scrolled: Gtk.ScrolledWindow) {
    scrolled.connect("realize", () => {
      const adj = scrolled.hadjustment
      if (!adj || !labelRef) return

      type Phase = "scroll" | "pauseEnd" | "fadeOut" | "fadeIn" | "pauseStart"
      let phase: Phase = "scroll"
      let pause = 0

      const STEP = 1.0
      const PAUSE_END_TICKS = 20    // ~1s detenido al final del texto
      const FADE_TICKS = 6          // ~300ms — debe matchear el transition del CSS
      const PAUSE_START_TICKS = 6   // respiro con el texto ya visible desde el inicio

      function setFadedOut(faded: boolean) {
        const classes = labelRef.cssClasses.filter((c) => c !== "fade-out")
        labelRef.cssClasses = faded ? [...classes, "fade-out"] : classes
      }

      function tick() {
        const max = adj.upper - adj.page_size

        if (max <= 0.5) {
          // el SSID entra entero, no hace falta animar nada
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
              adj.value = 0 // se reposiciona mientras está invisible
              setFadedOut(false) // dispara el fade-in vía CSS transition
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
        phase = "scroll"
        pause = 0
      })

      scrolled.connect("destroy", () => clearInterval(timerId))
    })
  }

  return (
      <button
          cssClasses={["tile", "wifi-btn"]}
          widthRequest={152}
          heightRequest={72}
          onClicked={() => {
              if (activeTab.get() === "wifi") {
                  activeTab.set("apps")
              } else {
                  activeTab.set("wifi")
              }
          }}
          $={(self) => {
              const updateCSS = () => {
                  const connected = isConnected.get()
                  const active = activeTab.get() === "wifi"

                  if (connected) {
                      self.add_css_class("connected-wifi-tab")
                      if (active) self.add_css_class("active-wifi-tab")
                      else self.remove_css_class("active-wifi-tab")
                  } else {
                      self.remove_css_class("connected-wifi-tab")
                      self.remove_css_class("active-wifi-tab")
                  }
              }

              activeTab.subscribe(updateCSS)
              isConnected.subscribe(updateCSS)
              updateCSS()
          }}
      >
        <box
            orientation={Gtk.Orientation.HORIZONTAL}
            spacing={8}
            valign={Gtk.Align.CENTER}
            marginStart={14}
            marginEnd={14}
        >
          <image
              iconName="network-wireless-signal-excellent-symbolic"
              pixelSize={22}
              valign={Gtk.Align.CENTER}
          />
          <scrolledwindow
              hscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
              vscrollbarPolicy={Gtk.PolicyType.NEVER}
              propagateNaturalWidth={false}
              minContentWidth={92}
              maxContentWidth={92}
              cssClasses={["ssid-scroll"]}
              $={(self) => attachMarquee(self)}
          >
            <label
                label={ssid}
                cssClasses={["tile-title"]}
                halign={Gtk.Align.START}
                xalign={0}
                ellipsize={0}
                wrap={false}
                hexpand={false}
                $={(self) => (labelRef = self)}
            />
          </scrolledwindow>
        </box>
      </button>
  )
}