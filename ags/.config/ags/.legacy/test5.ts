import app from "ags/gtk4/app";
import ControlCenter, { ClickAway } from "./widget/ControlCenter/index";
try {
  const c = ClickAway();
  const m = ControlCenter();
  app.add_window(c as any);
  app.add_window(m as any);
  console.log("c.name:", c.name);
  console.log("m.name:", m.name);
  console.log("app.windows:", app.windows.map(w => w.name));
} catch (e) {
  console.log("ERROR:", e);
}
