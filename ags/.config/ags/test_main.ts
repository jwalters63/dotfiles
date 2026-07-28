import app from "ags/gtk4/app"
import AppLauncher from "./test_window.tsx"

app.start({
  main() {
    AppLauncher()
  }
})
