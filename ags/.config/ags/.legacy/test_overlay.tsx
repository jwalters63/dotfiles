import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"

export default function Test() {
    return (
        <window>
            <overlay>
                <box css="background: red; min-width: 100px; min-height: 100px;" />
                <box halign={Gtk.Align.FILL} valign={Gtk.Align.FILL} css="background: rgba(0,255,0,0.5);">
                    <box css="background: blue; min-width: 20px;" />
                    <box hexpand={true} />
                    <box css="background: blue; min-width: 20px;" />
                </box>
            </overlay>
        </window>
    )
}
