import app from "ags/gtk4/app";
import ControlCenter from "./widget/ControlCenter/index";
try {
  const win = ControlCenter();
  console.log("SUCCESS:", win.name);
} catch (e) {
  console.log("ERROR:", e);
}
