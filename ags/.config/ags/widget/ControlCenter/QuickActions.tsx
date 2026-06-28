import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import { execAsync } from "ags/process"
import { activeTab } from "./state"

function doNothing() {
  // The user requested the button to do nothing
}

// ── Screenshot via hyprshot / grim fallback ──
async function takeScreenshot() {
  try {
    await execAsync(["bash", "-c", "hyprshot -m output &"])
  } catch {
    try {
      await execAsync(["bash", "-c", "grim ~/Pictures/screenshot-$(date +%s).png &"])
    } catch {}
  }
}

// ── Color picker ──
async function openColorPicker() {
  try {
    await execAsync(["bash", "-c", "hyprpicker -a &"])
  } catch {}
}

// ── Lock screen ──
async function lockScreen() {
  try {
    await execAsync(["bash", "-c", "hyprlock &"])
  } catch {
    try {
      await execAsync(["bash", "-c", "swaylock &"])
    } catch {}
  }
}

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

  const pickBtn = new Gtk.Button({
    cssClasses: ["quick-btn"],
    tooltipText: "Pick Color",
    child: new Gtk.Image({ iconName: "color-select-symbolic", pixelSize: 20 })
  })
  pickBtn.connect("clicked", openColorPicker)

  const shotBtn = new Gtk.Button({
    cssClasses: ["quick-btn"],
    tooltipText: "Screenshot",
    child: new Gtk.Image({ iconName: "camera-photo-symbolic", pixelSize: 20 })
  })
  shotBtn.connect("clicked", takeScreenshot)

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
  mainBox.append(pickBtn)
  mainBox.append(shotBtn)
  mainBox.append(powerBtn)

  return mainBox
}
