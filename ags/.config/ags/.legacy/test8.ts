import app from "ags/gtk4/app";
import ControlCenter from "./widget/ControlCenter/index";
try {
  app.start({
    main() {
      app.add_window(ControlCenter() as any);
      console.log("Main window exists:", !!app.get_window("control-center"));
    }
  });
} catch (e) {
  console.log("ERROR:", e);
}
