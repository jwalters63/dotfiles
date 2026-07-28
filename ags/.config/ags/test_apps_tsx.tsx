import { Gtk } from "ags/gtk4"
import AstalApps from "gi://AstalApps"

export default function Test() {
    const apps = AstalApps.Apps.new()
    const results = apps.fuzzy_query("")
    return (
        <window>
            <box>
                <label label={results[0]?.name || "None"} />
            </box>
        </window>
    )
}
