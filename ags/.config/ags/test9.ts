import app from "ags/gtk4/app";
import { Gdk } from "astal/gtk4";

app.start({
  main() {
    const display = Gdk.Display.get_default();
    const monitors = display?.get_monitors();
    if (monitors && monitors.get_n_items() > 0) {
      const monitor = monitors.get_item(0) as Gdk.Monitor;
      const geom = monitor.get_geometry();
      console.log("Monitor geometry:", geom.x, geom.y, geom.width, geom.height);
      // Gdk4 Monitor doesn't have get_workarea? Wait, Gtk.Window has no direct way. Let's see if Gdk.Monitor has anything for workarea?
    }
  }
});
