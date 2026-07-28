import { Gtk } from "ags/gtk4"
import Gio from "gi://Gio"
import { activeTab } from "./state"
import { loadUsage, getUsage, recordUsage } from "./usage"

export default function AppLauncher() {
  const allApps = Gio.AppInfo.get_all().filter(app => app.should_show())
  let sortByUsage = true

  const listContainer = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 6
  })

  const appWidgets = new Map<string, Gtk.Button>()

  // Pre-create all widgets
  allApps.forEach(app => {
    const id = app.get_id() || app.get_name()
    if (!id) return

    const btn = new Gtk.Button({ cssClasses: ["app-item", "hidden-app"] })
    btn.connect("clicked", () => {
      recordUsage(id)
      app.launch([], null)
      import("ags/gtk4/app").then(m => m.default.get_window("control-center")?.set_visible(false))
    })

    const hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 12 })
    const icon = new Gtk.Image({
      iconName: app.get_icon()?.to_string() || "application-x-executable",
      pixelSize: 48
    })
    const vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, valign: Gtk.Align.CENTER })
    const title = new Gtk.Label({
      label: app.get_name() || "",
      halign: Gtk.Align.START,
      cssClasses: ["app-title"],
      ellipsize: 3
    })
    const descText = app.get_description() || ""
    const desc = new Gtk.Label({
      label: descText,
      halign: Gtk.Align.START,
      cssClasses: ["app-desc"],
      wrap: true,
      wrapMode: 2,
      ellipsize: 3,
      lines: 2
    })

    vbox.append(title)
    if (descText) vbox.append(desc)
    hbox.append(icon)
    hbox.append(vbox)
    btn.set_child(hbox)
    
    appWidgets.set(id, btn)
    listContainer.append(btn)
  })

  // Preload usage data
  loadUsage()

  let lastFilterStr = ""
  let currentVisibleApps: Gio.AppInfo[] = []

  const populate = (query: string = "") => {
    lastFilterStr = query
    const q = query.toLowerCase()

    let visibleApps = allApps.filter(app => {
      const name = (app.get_name() || "").toLowerCase()
      const desc = (app.get_description() || "").toLowerCase()
      return name.includes(q) || desc.includes(q)
    })

    if (sortByUsage) {
      visibleApps.sort((a, b) => {
        const usageA = getUsage(a.get_id() || a.get_name())
        const usageB = getUsage(b.get_id() || b.get_name())
        if (usageA !== usageB) return usageB - usageA
        return (a.get_name() || "").localeCompare(b.get_name() || "")
      })
    } else {
      visibleApps.sort((a, b) => (a.get_name() || "").localeCompare(b.get_name() || ""))
    }

    currentVisibleApps = visibleApps

    // Hide all first
    appWidgets.forEach(btn => {
      btn.visible = false
      btn.remove_css_class("revealed-app")
    })

    // Reorder and animate in
    let prev: Gtk.Widget | null = null
    visibleApps.forEach((app, index) => {
      const id = app.get_id() || app.get_name()
      if (!id) return
      const btn = appWidgets.get(id)
      if (!btn) return

      btn.visible = true
      listContainer.reorder_child_after(btn, prev)
      prev = btn

      // Cascade animation
      setTimeout(() => {
        if (lastFilterStr === query && btn.visible) {
          btn.add_css_class("revealed-app")
        }
      }, index * 15) // Staggered fade in
    })
  }

  const searchEntry = new Gtk.Entry({
    cssClasses: ["app-search"],
    placeholderText: "Search applications...",
    primaryIconName: "system-search-symbolic",
    hexpand: true
  })
  
  searchEntry.connect("changed", () => {
    populate(searchEntry.get_text())
  })

  searchEntry.connect("activate", () => {
    if (currentVisibleApps.length > 0) {
      const appInfo = currentVisibleApps[0]
      const id = appInfo.get_id() || appInfo.get_name()
      if (id) recordUsage(id)
      appInfo.launch([], null)
      import("ags/gtk4/app").then(m => m.default.get_window("control-center")?.set_visible(false))
    }
  })

  searchEntry.connect("realize", () => {
    searchEntry.grab_focus()
  })

  searchEntry.connect("map", () => {
    searchEntry.grab_focus()
  })

  const sortBtn = new Gtk.Button({
    cssClasses: ["app-sort-btn"],
    iconName: "preferences-system-time-symbolic",
    tooltipText: "Sort by: Recent",
    valign: Gtk.Align.CENTER
  })

  sortBtn.connect("clicked", () => {
    sortByUsage = !sortByUsage
    sortBtn.set_icon_name(sortByUsage ? "preferences-system-time-symbolic" : "format-text-direction-ltr-symbolic")
    sortBtn.set_tooltip_text(sortByUsage ? "Sort by: Recent" : "Sort by: Alphabetical")
    
    // Quick fade out animation before sorting
    appWidgets.forEach(btn => btn.remove_css_class("revealed-app"))
    setTimeout(() => populate(searchEntry.get_text()), 150)
  })

  const searchBox = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 8
  })
  searchBox.append(searchEntry)
  searchBox.append(sortBtn)

  const scroll = new Gtk.ScrolledWindow({
    hscrollbarPolicy: Gtk.PolicyType.NEVER,
    vscrollbarPolicy: Gtk.PolicyType.AUTOMATIC,
    heightRequest: 650,
    cssClasses: ["app-scroll"],
    child: listContainer
  })

  const mainBox = Object.assign(new Gtk.Box({
    cssClasses: ["app-launcher"],
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 12,
    marginTop: 8
  }), {
    focusSearch: () => {
      searchEntry.grab_focus()
    },
    clearSearch: () => {
      searchEntry.text = ""
    }
  })
  
  mainBox.append(searchBox)
  mainBox.append(scroll)

  // Initial population delayed slightly to allow widget tree to map
  setTimeout(() => populate(), 50)

  return mainBox
}
