import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"
import { activeTab } from "./state"

function doNothing() {}

export default function QuickActions() {
  const appsBtn = new Gtk.Button({
    cssClasses: ["quick-btn"],
    tooltipText: "Apps",
    child: new Gtk.Image({ iconName: "view-app-grid-symbolic", pixelSize: 20 })
  })
  appsBtn.connect("clicked", () => activeTab.set("apps"))
  activeTab.subscribe(v => {
    if (v === "apps") appsBtn.add_css_class("active-tab")
    else appsBtn.remove_css_class("active-tab")
  })

  const vpnBtn = new Gtk.Button({
    cssClasses: ["quick-btn"],
    tooltipText: "VPN Menu (Disabled)",
    sensitive: false,
    child: new Gtk.Image({ iconName: "network-vpn-symbolic", pixelSize: 20 })
  })
  // vpnBtn.connect("clicked", () => activeTab.set("vpn"))
  activeTab.subscribe(v => {
    if (v === "vpn") vpnBtn.add_css_class("active-tab")
    else vpnBtn.remove_css_class("active-tab")
  })

  const mirrorBtn = new Gtk.Button({
    cssClasses: ["quick-btn"],
    tooltipText: "Screen Mirror (Disabled)",
    sensitive: false,
    child: new Gtk.Image({ iconName: "phone-symbolic", pixelSize: 20 })
  })
  // mirrorBtn.connect("clicked", () => activeTab.set("mirror"))
  activeTab.subscribe(v => {
    if (v === "mirror") mirrorBtn.add_css_class("active-tab")
    else mirrorBtn.remove_css_class("active-tab")
  })

  const powerBtn = new Gtk.Button({
    cssClasses: ["quick-btn", "power-btn"],
    tooltipText: "Power Menu",
    child: new Gtk.Image({ iconName: "system-shutdown-symbolic", pixelSize: 20 })
  })
  powerBtn.connect("clicked", () => activeTab.set("power"))
  activeTab.subscribe(v => {
    if (v === "power") powerBtn.add_css_class("active-power-tab")
    else powerBtn.remove_css_class("active-power-tab")
  })

  const mainBox = new Gtk.Box({
    cssClasses: ["quick-actions"],
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 8,
    halign: Gtk.Align.CENTER
  })

  mainBox.append(appsBtn)
  mainBox.append(vpnBtn)
  mainBox.append(mirrorBtn)
  mainBox.append(powerBtn)

  return mainBox
}
