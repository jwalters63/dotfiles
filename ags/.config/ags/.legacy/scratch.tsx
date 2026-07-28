import app from "ags/gtk4/app"
import { Astal, Gtk } from "ags/gtk4"

export default function Test() {
  return (
    <window name="t1" application={app} visible>
      <box css="min-width: 200px; min-height: 200px; background: red; animation: slide-in 0.5s ease;"/>
    </window>
  )
}
