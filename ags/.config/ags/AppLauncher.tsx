import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import AstalApps from "gi://AstalApps"

const appsService = AstalApps.Apps.new()

export default function AppLauncher() {
    let listContainer: any;
    let entry: any;

    const updateList = (text: string) => {
        if (!listContainer) return;
        
        let child = listContainer.get_first_child();
        while (child) {
            let next = child.get_next_sibling();
            listContainer.remove(child);
            child = next;
        }
        
        const results = appsService.fuzzy_query(text).slice(0, 5);
        
        results.forEach((appItem) => {
            const item = (
                <button
                    cssClasses={["app-item"]}
                    onClicked={() => {
                        appItem.launch();
                        const win = listContainer.get_root();
                        if (win) win.visible = false;
                        if (entry) entry.text = "";
                    }}
                >
                    <box>
                        <image cssClasses={["app-icon"]} iconName={appItem.iconName} pixelSize={24} />
                        <label cssClasses={["app-name"]} label={appItem.name} />
                        <label cssClasses={["app-desc"]} label={appItem.description ? `(${appItem.description})` : ""} />
                    </box>
                </button>
            );
            listContainer.append(item);
        });
    }

    return (
        <window
            name="app-launcher"
            cssClasses={["app-launcher-window"]}
            application={app}
            anchor={0} // Center
            keymode={Astal.Keymode.EXCLUSIVE}
            visible={false} // Hidden by default, toggled via ags request
        >
            <box orientation={Gtk.Orientation.VERTICAL}>
                <box cssClasses={["search-box"]}>
                    <image iconName="system-search-symbolic" pixelSize={20} />
                    <entry
                        hexpand={true}
                        placeholderText="Search apps..."
                        $={(self) => { entry = self; self.grab_focus(); }}
                        onChanged={(self) => updateList(self.text)}
                        onActivate={() => {
                            const res = appsService.fuzzy_query(entry.text);
                            if (res.length > 0) {
                                res[0].launch();
                                const win = entry.get_root();
                                if (win) win.visible = false;
                                entry.text = "";
                            }
                        }}
                    />
                </box>
                <box cssClasses={["separator"]} />
                <scrolledwindow vexpand={true} maxContentHeight={400} hscrollbarPolicy={Gtk.PolicyType.NEVER}>
                    <box
                        cssClasses={["app-list"]}
                        orientation={Gtk.Orientation.VERTICAL}
                        $={(self) => { 
                            listContainer = self;
                            updateList(""); 
                        }}
                    />
                </scrolledwindow>
            </box>
        </window>
    )
}
