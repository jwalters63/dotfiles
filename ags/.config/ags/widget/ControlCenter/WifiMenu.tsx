import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"

type Network = {
  ssid: string
  signal: number
  security: string
  active: boolean
}

function NetworkPill({ net, onConnect }: { net: Network; onConnect: (pw: string) => void }) {
  const box = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    cssClasses: ["wifi-network-pill"],
    spacing: 8,
  })

  if (net.active) box.add_css_class("active-network")

  // Top header with Icon, SSID, and Status
  const header = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 12,
  })

  let iconName = "network-wireless-signal-excellent-symbolic"
  if (net.signal < 25) iconName = "network-wireless-signal-weak-symbolic"
  else if (net.signal < 50) iconName = "network-wireless-signal-ok-symbolic"
  else if (net.signal < 75) iconName = "network-wireless-signal-good-symbolic"

  header.append(new Gtk.Image({ iconName, pixelSize: 24 }))
  
  const nameLbl = new Gtk.Label({ 
    label: net.ssid || "Hidden Network",
    cssClasses: ["network-name"],
    halign: Gtk.Align.START,
    hexpand: true,
  })
  header.append(nameLbl)

  if (net.active) {
    header.append(new Gtk.Label({ label: "Connected", cssClasses: ["wifi-connected-label"] }))
  } else if (net.security !== "") {
    header.append(new Gtk.Image({ iconName: "changes-prevent-symbolic", pixelSize: 16, cssClasses: ["wifi-lock-icon"] }))
  }

  box.append(header)

  // Expandable password section (Gtk.Revealer)
  const revealer = new Gtk.Revealer({
    transitionType: Gtk.RevealerTransitionType.SLIDE_DOWN,
    transitionDuration: 200,
  })

  const pwBox = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 8,
    marginTop: 12,
  })

  const pwEntry = new Gtk.PasswordEntry({
    cssClasses: ["wifi-password-entry"],
    hexpand: true,
    placeholderText: "Password",
  })
  
  const connectBtn = new Gtk.Button({
    label: "Connect",
    cssClasses: ["wifi-scan-btn"], // Reuse scan btn style
  })
  
  connectBtn.connect("clicked", () => {
    onConnect(pwEntry.get_text())
    pwEntry.set_text("")
    revealer.set_reveal_child(false)
  })

  pwBox.append(pwEntry)
  pwBox.append(connectBtn)
  revealer.set_child(pwBox)
  box.append(revealer)

  // Click to expand (only if not active, or just let them expand it anyway)
  const clickCtrl = new Gtk.GestureClick()
  clickCtrl.connect("pressed", () => {
    if (!net.active && net.security !== "") {
      revealer.set_reveal_child(!revealer.get_reveal_child())
    } else if (!net.active && net.security === "") {
      // Connect directly if no password
      onConnect("")
    }
  })
  box.add_controller(clickCtrl)

  return box
}

export default function WifiMenu() {
  const container = new Gtk.Box({
    cssClasses: ["app-launcher"],
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 12,
    marginTop: 8
  })

  const scanBtn = new Gtk.Button({
    label: "Scan for Networks",
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
      const out = await execAsync(["bash", "-c", "nmcli -t -f SSID,SIGNAL,SECURITY,ACTIVE dev wifi"])
      
      const networks: Network[] = []
      const seen = new Set<string>()

      for (const line of out.split("\n")) {
        if (!line.trim()) continue
        const parts = line.split(":")
        const active = parts.pop() === "yes"
        const security = parts.pop() || ""
        const signal = parseInt(parts.pop() || "0", 10)
        const ssid = parts.join(":")

        // Deduplicate by SSID (keep the strongest signal/active one first)
        if (ssid && !seen.has(ssid)) {
          seen.add(ssid)
          networks.push({ ssid, signal, security, active })
        }
      }

      networks.sort((a, b) => {
        if (a.active && !b.active) return -1
        if (!a.active && b.active) return 1
        return b.signal - a.signal
      })

      for (const net of networks) {
        listContainer.append(NetworkPill({
          net,
          onConnect: async (pw) => {
            scanBtn.set_label("Connecting...")
            try {
              if (pw) {
                await execAsync(["nmcli", "dev", "wifi", "connect", net.ssid, "password", pw])
              } else {
                await execAsync(["nmcli", "dev", "wifi", "connect", net.ssid])
              }
              scanBtn.set_label("Connected!")
              setTimeout(() => populateList(), 1500)
            } catch (e) {
              print("Connect error:", e)
              scanBtn.set_label("Connection Failed")
            }
            setTimeout(() => {
              scanBtn.set_label("Scan for Networks")
              scanBtn.set_sensitive(true)
            }, 3000)
          }
        }))
      }
    } catch(e) {
      print("List error:", e)
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
      await execAsync(["nmcli", "dev", "wifi", "rescan"])
      await new Promise(r => setTimeout(r, 1000))
    } catch(e) {
      print("Rescan error:", e)
    }

    await populateList()
    scanBtn.set_label("Scan for Networks")
    scanBtn.set_sensitive(true)
  }

  scanBtn.connect("clicked", scanAndPopulate)

  container.append(scanBtn)
  container.append(scroll)
  
  // Initial populate (quick, no rescan)
  setTimeout(() => populateList(), 50)

  return container
}
