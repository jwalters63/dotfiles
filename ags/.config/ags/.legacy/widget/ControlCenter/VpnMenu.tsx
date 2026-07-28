import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { activeTab } from "./state"

interface VpnConnection {
  name: string
  type: string
  state: string
}

function VpnItem({ name, type, isActive, onToggle }: { name: string, type: string, isActive: boolean, onToggle: (active: boolean) => void }) {
  const icon = type.includes("wireguard") ? "network-vpn-symbolic" : (type === "tailscale" ? "network-server-symbolic" : "security-high-symbolic")
  
  const img = new Gtk.Image({ iconName: icon, pixelSize: 24 })
  const lbl = new Gtk.Label({ label: `<span color='white'>${name}</span>`, useMarkup: true, hexpand: true, halign: Gtk.Align.START })
  
  const sw = new Gtk.Switch({
    valign: Gtk.Align.CENTER,
    active: isActive
  })
  sw.connect("notify::active", () => {
    if (sw.active !== isActive) {
      onToggle(sw.active)
    }
  })

  const box = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 12,
    cssClasses: ["vpn-item"],
  })

  box.append(img)
  box.append(lbl)
  box.append(sw)

  return box
}

export default function VpnMenu() {
  const mainBox = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 8,
    marginTop: 12,
    cssClasses: ["vpn-menu"]
  })

  activeTab.subscribe((tab) => {
    if (tab !== "vpn") return
    update()
  })

  async function update() {
    try {
      let nm: VpnConnection[] = []
      try {
        const out = await execAsync(["bash", "-c", "nmcli -t -f NAME,TYPE,STATE connection show | grep -iE 'vpn|wireguard' || true"]).catch(() => "")
        if (out.trim()) {
          nm = out.trim().split("\n").map(line => {
            const parts = line.split(":")
            return { name: parts[0] || "", type: parts[1] || "", state: parts[2] || "" }
          })
        }
      } catch {}

      let tailscale = "down"
      try {
        const tsOut = await execAsync(["tailscale", "status"]).catch(() => "")
        if (tsOut && !tsOut.includes("Tailscale is stopped")) {
          tailscale = "up"
        }
      } catch {}

      // Clear old items
      let child = mainBox.get_first_child()
      while (child) {
        const next = child.get_next_sibling()
        mainBox.remove(child)
        child = next
      }

      // Add Tailscale
      mainBox.append(VpnItem({
        name: "Tailscale",
        type: "tailscale",
        isActive: tailscale === "up",
        onToggle: (active) => {
          execAsync(["pkexec", "tailscale", active ? "up" : "down"]).catch(() => {}).finally(() => setTimeout(update, 2500))
        }
      }))

      // Add NetworkManager VPNs
      nm.forEach(vpn => {
        mainBox.append(VpnItem({
          name: vpn.name,
          type: vpn.type,
          isActive: vpn.state === "activated",
          onToggle: (active) => {
            execAsync(["nmcli", "connection", active ? "up" : "down", vpn.name]).catch(() => {}).finally(() => setTimeout(update, 2500))
          }
        }))
      })

      if (nm.length === 0) {
        const lbl = new Gtk.Label({
          label: "<span color='white'>No NetworkManager VPNs found.\nAdd one in System Settings.</span>",
          useMarkup: true,
          cssClasses: ["dim-label"],
          justify: Gtk.Justification.CENTER,
          marginTop: 12
        })
        mainBox.append(lbl)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return mainBox
}
