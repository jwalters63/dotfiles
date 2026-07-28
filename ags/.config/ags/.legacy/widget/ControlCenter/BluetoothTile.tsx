import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"

import { activeTab } from "./state"

const btPowered = createPoll(false, 4000, async () => {
  try {
    const out = await execAsync([
      "bash", "-c",
      "bluetoothctl show 2>/dev/null | grep -i 'powered:' | awk '{print $2}'",
    ])
    return out.trim().toLowerCase() === "yes"
  } catch {
    return false
  }
})

export default function BluetoothTile() {
  return (
    <button
      cssClasses={["tile", "tile-circle", "bt-btn"]}
      widthRequest={72}
      heightRequest={72}
      onClicked={() => {
          if (activeTab.get() === "bluetooth") {
              activeTab.set("apps")
          } else {
              activeTab.set("bluetooth")
          }
      }}
      $={(self) => {
        const updateCSS = () => {
          const powered = btPowered.get()
          const active = activeTab.get() === "bluetooth"

          if (powered) {
              self.add_css_class("connected-bt-tab")
              if (active) self.add_css_class("active-bt-tab")
              else self.remove_css_class("active-bt-tab")
          } else {
              self.remove_css_class("connected-bt-tab")
              self.remove_css_class("active-bt-tab")
          }
        }
        btPowered.subscribe(updateCSS)
        activeTab.subscribe(updateCSS)
        updateCSS()
      }}
    >
      <image
        iconName="bluetooth-active-symbolic"
        pixelSize={24}
        halign={Gtk.Align.CENTER}
        valign={Gtk.Align.CENTER}
      />
    </button>
  )
}
