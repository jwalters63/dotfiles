import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"

export default function Test() {
    return (
        <window>
            <box $={(self) => {
                if ('set_css' in self) console.log("Has set_css");
                if ('css' in self) console.log("Has css");
            }} />
        </window>
    )
}
