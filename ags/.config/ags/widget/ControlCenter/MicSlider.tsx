import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"
import Astal from "gi://Astal?version=4.0"

// Parse pactl volume output → 0.0–1.0
async function getVolume(): Promise<number> {
  try {
    const out = await execAsync(["pactl", "get-source-volume", "@DEFAULT_SOURCE@"]).catch(() => "")
    const match = out.match(/(\d+)%/)
    if (match) return Math.min(1, parseInt(match[1]) / 100)
  } catch {}
  return 0.5
}

async function getMuted(): Promise<boolean> {
  try {
    const out = await execAsync(["pactl", "get-source-mute", "@DEFAULT_SOURCE@"]).catch(() => "")
    return out.includes("yes")
  } catch {}
  return false
}

const volume = createPoll(0.5, 2000, getVolume)
const muted = createPoll(false, 2000, getMuted)

const volIcon = createPoll("audio-input-microphone-symbolic", 2000, async () => {
  try {
    const mute = (await execAsync(["pactl", "get-source-mute", "@DEFAULT_SOURCE@"]).catch(() => "")).includes("yes")
    return mute ? "audio-input-microphone-muted-symbolic" : "audio-input-microphone-symbolic"
  } catch {
    return "audio-input-microphone-symbolic"
  }
})

export default function MicSlider() {
  return (
    <box class="slider-module" orientation={Gtk.Orientation.VERTICAL} widthRequest={312} heightRequest={72}>
      <box css="padding: 10px 14px 9px 14px;" orientation={Gtk.Orientation.VERTICAL} spacing={6} hexpand vexpand>
        <label label="Microphone" class="slider-label" halign={Gtk.Align.START} />
      <box orientation={Gtk.Orientation.HORIZONTAL} spacing={10} valign={Gtk.Align.CENTER}>
        {/* Mute toggle button with dynamic icon */}
        <button
          class="slider-icon-btn"
          onClicked={() =>
            execAsync(["pactl", "set-source-mute", "@DEFAULT_SOURCE@", "toggle"]).catch(() => {})
          }
        >
          <image iconName={volIcon} pixelSize={16} />
        </button>

        <slider
          hexpand
          drawValue={false}
          class="tahoe-slider"
          min={0}
          max={1}
          step={0.01}
          $={(self: Astal.Slider) => {
            // fromPoll guards against poll updates triggering pactl set-sink-volume
            let fromPoll = false

            // Set initial value
            self.value = volume.get()

            // Keep in sync with backend polls
            volume.subscribe(() => {
              fromPoll = true
              self.value = volume.get()
              fromPoll = false
            })

            // value-changed fires on every user drag step (Gtk.Range signal)
            self.connect("value-changed", () => {
              if (!fromPoll) {
                const pct = Math.round(self.value * 100)
                execAsync(["pactl", "set-source-volume", "@DEFAULT_SOURCE@", `${pct}%`]).catch(() => {})
              }
            })
          }}
        />

          <image iconName="microphone-sensitivity-high-symbolic" pixelSize={16} class="slider-icon" />
        </box>
      </box>
    </box>
  )
}
