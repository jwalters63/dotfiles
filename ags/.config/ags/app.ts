import app from "ags/gtk4/app"
import ControlCenter from "./widget/ControlCenter"
import { activeTab } from "./widget/ControlCenter/state"
import style from "./style.scss"

app.start({
  css: style,
  requestHandler(request, res) {
    print("Received request:", request)
    if (request === "power-menu") {
      activeTab.set("power")
      const win = app.get_window("control-center")
      if (win) win.visible = true
      res("OK")
    }
  },
  main() {
    app.add_window(ControlCenter() as any)
  },
})