import app from "ags/gtk4/app"
import ControlCenter from "./widget/ControlCenter"
import style from "./style.scss"

app.start({
  css: style,
  main() {
    app.add_window(ControlCenter() as any)
  },
})