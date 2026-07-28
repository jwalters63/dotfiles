import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"

function PowerButton({ label, icon, action }: { label: string, icon: string, action: string }) {
  let confirming = false
  let timeout: any = null

  const img = new Gtk.Image({ iconName: icon, pixelSize: 24 })
  const lbl = new Gtk.Label({ label, cssClasses: ["power-action-label"] })

  const box = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 16,
    halign: Gtk.Align.START
  })
  box.append(img)
  box.append(lbl)

  const btn = new Gtk.Button({
    cssClasses: ["power-action-btn"],
    child: box
  })

  btn.connect("clicked", () => {
    if (!confirming) {
      confirming = true
      btn.add_css_class("confirm")
      lbl.set_label("Are you sure?")
      
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        confirming = false
        btn.remove_css_class("confirm")
        lbl.set_label(label)
      }, 3000)
    } else {
      execAsync(["bash", "-c", action]).catch(print)
      confirming = false
      btn.remove_css_class("confirm")
      lbl.set_label(label)
    }
  })

  return btn
}

export default function PowerMenu() {
  const box = new Gtk.Box({
    cssClasses: ["power-menu"],
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 12,
    marginTop: 12
  })

  box.append(PowerButton({ label: "Shut down", icon: "system-shutdown-symbolic", action: "systemctl poweroff" }))
  box.append(PowerButton({ label: "Reboot", icon: "system-reboot-symbolic", action: "systemctl reboot" }))
  box.append(PowerButton({ label: "Suspend", icon: "weather-clear-night-symbolic", action: "systemctl suspend" }))
  box.append(PowerButton({ label: "Close Session", icon: "system-log-out-symbolic", action: "hyprctl dispatch exit" }))

  return box
}
