import app from "ags/gtk4/app"
import AppLauncher from "./AppLauncher.tsx"

app.start({
  main() {
    AppLauncher()
    const win = app.get_window("app-launcher")
    console.log("Window is: " + win)
    app.quit()
  }
})
