import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"

type BluetoothDevice = {
  mac: string
  name: string
  iconName: string
  connected: boolean
}

function BluetoothPill({ dev, onToggle }: { dev: BluetoothDevice; onToggle: () => void }) {
  const box = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    cssClasses: ["wifi-network-pill"], // Reuse Wi-Fi pill styling
    spacing: 12,
  })

  if (dev.connected) box.add_css_class("active-network")

  let iconName = dev.iconName || "bluetooth-active-symbolic"
  // Map some common bluetoothctl icons to GNOME standard symbolic icons
  if (iconName === "audio-headset") iconName = "audio-headset-symbolic"
  else if (iconName === "audio-card") iconName = "audio-card-symbolic"
  else if (iconName === "input-mouse") iconName = "input-mouse-symbolic"
  else if (iconName === "input-keyboard") iconName = "input-keyboard-symbolic"
  else if (iconName === "phone") iconName = "phone-symbolic"
  else if (iconName === "computer") iconName = "computer-symbolic"
  else iconName = "bluetooth-active-symbolic"

  box.append(new Gtk.Image({ iconName, pixelSize: 24 }))
  
  const nameLbl = new Gtk.Label({ 
    label: dev.name || "Unknown Device",
    cssClasses: ["network-name"],
    halign: Gtk.Align.START,
    hexpand: true,
    ellipsize: 3,
  })
  box.append(nameLbl)

  if (dev.connected) {
    box.append(new Gtk.Label({ label: "Connected", cssClasses: ["wifi-connected-label"] }))
  }

  // Click to connect/disconnect
  const clickCtrl = new Gtk.GestureClick()
  clickCtrl.connect("pressed", () => {
    onToggle()
  })
  box.add_controller(clickCtrl)

  return box
}

export default function BluetoothMenu() {
  const container = new Gtk.Box({
    cssClasses: ["app-launcher"],
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 12,
    marginTop: 8
  })

  const scanBtn = new Gtk.Button({
    label: "Scan for Devices",
    cssClasses: ["wifi-scan-btn"],
    halign: Gtk.Align.CENTER,
  })

  const listContainer = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 8,
  })

  const scroll = new Gtk.ScrolledWindow({
    hscrollbarPolicy: Gtk.PolicyType.NEVER,
    vscrollbarPolicy: Gtk.PolicyType.AUTOMATIC,
    heightRequest: 650,
    cssClasses: ["app-scroll"],
    child: listContainer
  })

  async function populateList() {
    listContainer.set_valign(Gtk.Align.START)
    let child = listContainer.get_first_child()
    while (child) {
      const next = child.get_next_sibling()
      listContainer.remove(child)
      child = next
    }

    try {
      // Get list of devices
      const out = await execAsync(["bash", "-c", "bluetoothctl devices"]).catch(() => "")
      
      const devices: BluetoothDevice[] = []
      
      for (const line of out.split("\n")) {
        if (!line.trim()) continue
        // Format: Device MAC Name...
        const parts = line.split(" ")
        if (parts.length < 3) continue
        const mac = parts[1]
        const name = parts.slice(2).join(" ")

        // Fetch detailed info
        const info = await execAsync(["bash", "-c", `bluetoothctl info ${mac}`]).catch(() => "")
        const connected = info.includes("Connected: yes")
        const iconMatch = info.match(/Icon: ([^\n]+)/)
        const iconName = iconMatch ? iconMatch[1].trim() : ""

        devices.push({ mac, name, iconName, connected })
      }

      // Sort: connected first
      devices.sort((a, b) => {
        if (a.connected && !b.connected) return -1
        if (!a.connected && b.connected) return 1
        return 0
      })

      for (const dev of devices) {
        listContainer.append(BluetoothPill({
          dev,
          onToggle: async () => {
            scanBtn.set_label(dev.connected ? "Disconnecting..." : "Connecting...")
            try {
              if (dev.connected) {
                await execAsync(["bluetoothctl", "disconnect", dev.mac])
              } else {
                await execAsync(["bluetoothctl", "connect", dev.mac])
              }
              scanBtn.set_label(dev.connected ? "Disconnected!" : "Connected!")
              setTimeout(() => populateList(), 1000)
            } catch (e) {
              // Ignore print
              scanBtn.set_label(dev.connected ? "Disconnect Failed" : "Connection Failed")
            }
            setTimeout(() => {
              scanBtn.set_label("Scan for Devices")
              scanBtn.set_sensitive(true)
            }, 3000)
          }
        }))
      }
    } catch(e) {
      print("BT List error:", e)
    }
  }

  async function scanAndPopulate() {
    scanBtn.set_label("Scanning... (~15s)")
    scanBtn.set_sensitive(false)
    listContainer.set_valign(Gtk.Align.CENTER)
    
    // Clear list
    let child = listContainer.get_first_child()
    while (child) {
      const next = child.get_next_sibling()
      listContainer.remove(child)
      child = next
    }
    
    listContainer.append(new Gtk.Spinner({ spinning: true, widthRequest: 32, heightRequest: 32, cssClasses: ["white-spinner"] }))

    try {
      execAsync(["bluetoothctl", "scan", "on"]).catch(() => {})
      await new Promise(r => setTimeout(r, 15000))
      execAsync(["bluetoothctl", "scan", "off"]).catch(() => {})
    } catch(e) {
      // Ignored
    }

    await populateList()
    scanBtn.set_label("Scan for Devices")
    scanBtn.set_sensitive(true)
  }

  scanBtn.connect("clicked", scanAndPopulate)

  container.append(scanBtn)
  container.append(scroll)
  
  // Initial populate
  setTimeout(() => populateList(), 50)

  return container
}
