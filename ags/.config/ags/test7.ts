import app from "ags/gtk4/app";
import ControlCenter, { ClickAway } from "./widget/ControlCenter/index";
try {
  app.start({
    main() {
      app.add_window(ClickAway() as any);
      app.add_window(ControlCenter() as any);
      
      const mainWin = app.get_window("control-center");
      console.log("Main window exists:", !!mainWin);
      if (mainWin) {
         mainWin.connect("notify::visible", () => {
           const closer = app.get_window("control-center-closer");
           console.log("notify::visible fired. Closer exists:", !!closer, "visible:", mainWin.visible);
         });
         console.log("Setting visible to true");
         mainWin.set_visible(true);
      }
    }
  });
} catch (e) {
  console.log("ERROR:", e);
}
