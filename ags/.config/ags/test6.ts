import app from "ags/gtk4/app";
import ControlCenter, { ClickAway } from "./widget/ControlCenter/index";
try {
  app.start({
    main() {
      app.add_window(ClickAway() as any);
      app.add_window(ControlCenter() as any);
      
      const closer = app.get_window("control-center-closer");
      console.log("Closer window exists?", !!closer);
      
      const mainWin = app.get_window("control-center");
      if (mainWin) {
         mainWin.set_visible(true); // Should trigger notify::visible
      }
    }
  });
} catch (e) {
  console.log("ERROR:", e);
}
