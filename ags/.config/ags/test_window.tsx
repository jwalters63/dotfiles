import { Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

export default function AppLauncher() {
    return (
        <window name="app-launcher" application={app} visible={true}>
            <box>
                <label label="Hello AGS GTK4" />
            </box>
        </window>
    )
}
