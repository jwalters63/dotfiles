import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"
import Astal from "gi://Astal?version=4.0"

// Try brightnessctl first, fall back to xbacklight or a dummy 50%
async function getBrightness(): Promise<number> {
  try {
    const cur = parseFloat(await execAsync(["brightnessctl", "g"]))
    const max = parseFloat(await execAsync(["brightnessctl", "m"]))
    if (!isNaN(cur) && !isNaN(max) && max > 0) return cur / max
  } catch {}
  try {
    const xb = parseFloat(await execAsync(["xbacklight", "-get"]))
    if (!isNaN(xb)) return xb / 100
  } catch {}
  return 0.5
}

async function setBrightness(v: number) {
  const pct = Math.round(Math.max(0, Math.min(100, v * 100)))
  try {
    await execAsync(["brightnessctl", "s", `${pct}%`])
    return
  } catch {}
  try {
    await execAsync(["xbacklight", "-set", `${pct}`])
  } catch {}
}

const brightness = createPoll(0.5, 3000, getBrightness)

export default function BrightnessSlider() {
  return (
    <box class="slider-module" orientation={Gtk.Orientation.VERTICAL} widthRequest={312} heightRequest={72}>
      <box css="padding: 10px 14px 9px 14px;" orientation={Gtk.Orientation.VERTICAL} spacing={6} hexpand vexpand>
        <label label="Display" class="slider-label" halign={Gtk.Align.START} />
      <box orientation={Gtk.Orientation.HORIZONTAL} spacing={10} valign={Gtk.Align.CENTER}>
        <image iconName="weather-clear-symbolic" pixelSize={15} class="slider-icon" />
        <slider
          hexpand
          drawValue={false}
          class="tahoe-slider"
          min={0}
          max={1}
          step={0.01}
          $={(self: Astal.Slider) => {
            // fromPoll guards against the poll update triggering setBrightness
            let fromPoll = false

            // Set initial value
            self.value = brightness.get()

            // Keep in sync with backend polls
            brightness.subscribe(() => {
              fromPoll = true
              self.value = brightness.get()
              fromPoll = false
            })

            // value-changed fires on every user drag step (Gtk.Range signal)
            self.connect("value-changed", () => {
              if (!fromPoll) setBrightness(self.value)
            })
          }}
        />
          <image iconName="display-brightness-symbolic" pixelSize={18} class="slider-icon" />
        </box>
      </box>
    </box>
  )
}
