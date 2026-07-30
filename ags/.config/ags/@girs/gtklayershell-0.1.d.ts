declare module 'gi://GtkLayerShell?version=0.1' {
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace GtkLayerShell {
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
    function get_keyboard_interactivity(window: Gtk.Window): boolean;
    function get_keyboard_mode(window: Gtk.Window): KeyboardMode;
    function get_layer(window: Gtk.Window): Layer;
    function get_major_version(): number;
    function get_margin(window: Gtk.Window, edge: Edge): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_monitor(window: Gtk.Window): Gdk.Monitor;
    function get_namespace(window: Gtk.Window): string;
    function get_protocol_version(): number;
    function get_respect_close(window: Gtk.Window): boolean;
    function get_zwlr_layer_surface_v1(window: Gtk.Window): null;
    function init_for_window(window: Gtk.Window): void;
    function is_layer_window(window: Gtk.Window): boolean;
    function is_supported(): boolean;
    function set_anchor(window: Gtk.Window, edge: Edge, anchor_to_edge: boolean): void;
    function set_exclusive_zone(window: Gtk.Window, exclusive_zone: number): void;
    function set_keyboard_interactivity(window: Gtk.Window, interactivity: boolean): void;
    function set_keyboard_mode(window: Gtk.Window, mode: KeyboardMode): void;
    function set_layer(window: Gtk.Window, layer: Layer): void;
    function set_margin(window: Gtk.Window, edge: Edge, margin_size: number): void;
    function set_monitor(window: Gtk.Window, monitor: Gdk.Monitor): void;
    function set_namespace(window: Gtk.Window, name_space: string): void;
    function set_respect_close(window: Gtk.Window, respect_close: boolean): void;
    function try_force_commit(window: Gtk.Window): void;
    const __name__: string;
    const __version__: string;
}
export default GtkLayerShell;
}
declare module 'gi://GtkLayerShell' {
    import GtkLayerShell01 from 'gi://GtkLayerShell?version=0.1';
    export default GtkLayerShell01;
}
