import app from "ags/gtk4/app";
import ControlCenter, { ClickAway } from "./widget/ControlCenter/index";
try {
  ClickAway();
  const win = ControlCenter();
  console.log("SUCCESS:", win.name);
} catch (e) {
  console.log("ERROR:", e);
}
