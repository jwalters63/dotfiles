import { createPoll } from "ags/time"
import GLib from "gi://GLib"

const p2 = createPoll("init", 1000, async () => {
    return "async_works"
})

p2.subscribe(v => console.log("p2: " + v))

GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2500, () => {
    console.log("DONE")
    imports.gi.Gtk.Application.get_default()?.quit()
    return GLib.SOURCE_REMOVE
})
