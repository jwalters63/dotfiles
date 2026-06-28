import app from "ags/gtk4/app"
import Gtk from "gi://Gtk?version=4.0"
import Astal from "gi://Astal?version=4.0"

// Subcomponente: Plantilla para módulos cuadrados pequeños (1x1)
const Module1x1 = ({ iconName }: { iconName: string }) => (
    <button class="module module-1x1">
        <image iconName={iconName} pixelSize={24} />
    </button>
)

export default function ControlCenterMenu() {
    return (
        <window
            name="menu"
            application={app}
            // Anclamos arriba y a la derecha al estilo macOS
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
            marginRight={0}
            marginTop={12}
            keymode={Astal.Keymode.NONE}
            layer={Astal.Layer.OVERLAY}
        >
            <box class="cc-box" orientation={Gtk.Orientation.VERTICAL} spacing={12}>

                {/* ── Sección Superior: Conectividad y Multimedia ── */}
                <box orientation={Gtk.Orientation.HORIZONTAL} spacing={12}>
                    {/* Columna Izquierda */}
                    <box orientation={Gtk.Orientation.VERTICAL} spacing={12}>

                        {/* Wi-Fi (2x1) */}
                        <button class="module module-2x1">
                            <box orientation={Gtk.Orientation.HORIZONTAL} spacing={12} valign={Gtk.Align.CENTER}>
                                <image iconName="network-wireless-signal-excellent-symbolic" pixelSize={24} />
                                <label label="Wi-Fi" class="font-bold" />
                            </box>
                        </button>

                        {/* Fila Bluetooth / Dock (1x1 + 1x1) */}
                        <box orientation={Gtk.Orientation.HORIZONTAL} spacing={12}>
                            <Module1x1 iconName="bluetooth-active-symbolic" />
                            <Module1x1 iconName="computer-symbolic" />
                        </box>
                    </box>

                    {/* Columna Derecha: Música (2x2) */}
                    <button class="module module-2x2">
                        <box orientation={Gtk.Orientation.VERTICAL} valign={Gtk.Align.CENTER} halign={Gtk.Align.CENTER}>
                            <image iconName="multimedia-audio-player-symbolic" pixelSize={48} />
                            <label label="Sin reproducir" marginTop={8} />
                        </box>
                    </button>
                </box>

                {/* ── Sección Central: Sliders ── */}
                {/* Volumen (4x1) */}
                <box class="module module-4x1" orientation={Gtk.Orientation.HORIZONTAL} spacing={16} valign={Gtk.Align.CENTER}>
                    <image iconName="audio-volume-high-symbolic" pixelSize={20} />
                    <slider hexpand drawValue={false} class="tahoe-slider" />
                </box>

                {/* Brillo (4x1) */}
                <box class="module module-4x1" orientation={Gtk.Orientation.HORIZONTAL} spacing={16} valign={Gtk.Align.CENTER}>
                    <image iconName="display-brightness-symbolic" pixelSize={20} />
                    <slider hexpand drawValue={false} class="tahoe-slider" />
                </box>

                {/* ── Sección Inferior: Módulos de Acción ── */}
                <box orientation={Gtk.Orientation.HORIZONTAL} spacing={12}>
                    <Module1x1 iconName="system-shutdown-symbolic" />
                    <Module1x1 iconName="preferences-system-symbolic" />
                    <Module1x1 iconName="weather-clear-symbolic" />
                    <Module1x1 iconName="camera-photo-symbolic" />
                </box>

            </box>
        </window>
    )
}