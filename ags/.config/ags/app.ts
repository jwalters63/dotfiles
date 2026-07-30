import app from "ags/gtk4/app"
import style from "./style.scss"
import AppLauncher from "./AppLauncher.tsx"
app.start({
  css: style,
  requestHandler(request, res) {
    if (request[0] === "toggle-launcher") {
      console.log("Toggling launcher visibility...");
      const win = app.get_window("app-launcher")
      if (win) {
        win.visible = !win.visible
        console.log("Window is now", win.visible ? "visible" : "hidden");
      } else {
        console.log("Window 'app-launcher' not found!");
      }
      res("OK")
    }
  },
  main() {
    AppLauncher()
  },
})
