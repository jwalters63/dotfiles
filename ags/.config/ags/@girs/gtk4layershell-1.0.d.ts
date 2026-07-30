declare module 'gi://Gtk4LayerShell?version=1.0' {
import type Gtk from 'gi://Gtk?version=4.0';
import type Gsk from 'gi://Gsk?version=4.0';
import type Graphene from 'gi://Graphene?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Gdk from 'gi://Gdk?version=4.0';
import type cairo from 'cairo';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
export namespace Gtk4LayerShell {
    enum Edge {
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
        ENTRY_NUMBER,
    }
    enum KeyboardMode {
        NONE,
        EXCLUSIVE,
        ON_DEMAND,
        ENTRY_NUMBER,
    }
    enum Layer {
        BACKGROUND,
        BOTTOM,
        TOP,
        OVERLAY,
        ENTRY_NUMBER,
    }
    function auto_exclusive_zone_enable(window: Gtk.Window): void;
    function auto_exclusive_zone_is_enabled(window: Gtk.Window): boolean;
    function get_anchor(window: Gtk.Window, edge: Edge): boolean;
    function get_exclusive_zone(window: Gtk.Window): number;
    function get_keyboard_mode(window: Gtk.Window): KeyboardMode;
    function get_layer(window: Gtk.Window): Layer;
    function get_major_version(): number;
    function get_margin(window: Gtk.Window, edge: Edge): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_monitor(window: Gtk.Window): Gdk.Monitor | null;
    function get_namespace(window: Gtk.Window): string;
    function get_protocol_version(): number;
    function get_respect_close(window: Gtk.Window): boolean;
    function get_zwlr_layer_surface_v1(window: Gtk.Window): null;
    function init_for_window(window: Gtk.Window): void;
    function is_layer_window(window: Gtk.Window): boolean;
    function is_supported(): boolean;
    function set_anchor(window: Gtk.Window, edge: Edge, anchor_to_edge: boolean): void;
    function set_exclusive_zone(window: Gtk.Window, exclusive_zone: number): void;
    function set_keyboard_mode(window: Gtk.Window, mode: KeyboardMode): void;
    function set_layer(window: Gtk.Window, layer: Layer): void;
    function set_margin(window: Gtk.Window, edge: Edge, margin_size: number): void;
    function set_monitor(window: Gtk.Window, monitor: Gdk.Monitor | null): void;
    function set_namespace(window: Gtk.Window, name_space: string | null): void;
    function set_respect_close(window: Gtk.Window, respect_close: boolean): void;
    const __name__: string;
    const __version__: string;
}
export default Gtk4LayerShell;
}
declare module 'gi://Gtk4LayerShell' {
    import Gtk4LayerShell10 from 'gi://Gtk4LayerShell?version=1.0';
    export default Gtk4LayerShell10;
}
