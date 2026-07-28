import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { activeTab } from "./state"

export default function MirrorMenu() {
  const mainBox = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 8,
    marginTop: 12,
    cssClasses: ["mirror-menu"]
  })

  // Add global CSS provider to mainBox for white text
  const provider = new Gtk.CssProvider()
  provider.load_from_string(".force-white { color: white; }")
  mainBox.get_style_context().add_provider(provider, Gtk.STYLE_PROVIDER_PRIORITY_USER)

  activeTab.subscribe((tab) => {
    if (tab !== "mirror") return
    update()
  })

  async function update() {
    try {
      // Clear old items
      let child = mainBox.get_first_child()
      while (child) {
        const next = child.get_next_sibling()
        mainBox.remove(child)
        child = next
      }

      // Refresh Button
      const refreshBtn = new Gtk.Button({
        label: "Scan for Devices",
        cssClasses: ["action-btn", "force-white"]
      })
      refreshBtn.connect("clicked", update)
      mainBox.append(refreshBtn)

      // Manual IP Entry
      const manualBox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 8, marginTop: 8 })
      const ipEntry = new Gtk.Entry({
        placeholderText: "192.168.1.100:5555",
        hexpand: true,
        cssClasses: ["force-white"]
      })
      const connectBtn = new Gtk.Button({
        iconName: "network-wireless-symbolic",
        cssClasses: ["action-btn", "force-white"]
      })
      connectBtn.connect("clicked", () => {
        const ip = ipEntry.get_text()
        if (ip) {
          execAsync(["bash", "-c", `adb connect ${ip} && scrcpy -s ${ip} &`]).catch(() => {})
        }
      })
      manualBox.append(ipEntry)
      manualBox.append(connectBtn)
      mainBox.append(manualBox)

      // Device List
      const out = await execAsync(["bash", "-c", "adb devices | grep -v 'List of devices' | grep 'device'"]).catch(() => "")
      const lines = out.trim().split("\n").filter(l => l.length > 0)

      if (lines.length > 0) {
        lines.forEach(line => {
          const id = line.split("\t")[0]
          
          const devBox = new Gtk.Box({
            orientation: Gtk.Orientation.HORIZONTAL,
            spacing: 12,
            marginTop: 8
          })
          
          const icon = new Gtk.Image({ iconName: "phone-symbolic", pixelSize: 24 })
          const lbl = new Gtk.Label({ label: `<span color='white'>${id}</span>`, useMarkup: true, hexpand: true, halign: Gtk.Align.START })
          const playBtn = new Gtk.Button({
            iconName: "media-playback-start-symbolic",
            cssClasses: ["circular-btn", "force-white"]
          })
          
          playBtn.connect("clicked", () => {
            execAsync(["bash", "-c", `scrcpy -s ${id} &`]).catch(() => {})
          })
          
          devBox.append(icon)
          devBox.append(lbl)
          devBox.append(playBtn)
          mainBox.append(devBox)
        })
      } else {
        const noDev = new Gtk.Label({
          label: "<span color='white'>No devices found.\nConnect via USB first to pair, or enter IP above.</span>",
          useMarkup: true,
          cssClasses: ["dim-label"],
          justify: Gtk.Justification.CENTER,
          marginTop: 12
        })
        mainBox.append(noDev)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return mainBox
}
