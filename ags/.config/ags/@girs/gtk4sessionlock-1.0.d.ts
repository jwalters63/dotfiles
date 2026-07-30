declare module 'gi://Gtk4SessionLock?version=1.0' {
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
export namespace Gtk4SessionLock {
    function is_supported(): boolean;
    namespace Instance {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            failed: () => void;
            locked: () => void;
            monitor: (arg0: Gdk.Monitor) => void;
            unlocked: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Instance extends GObject.Object {
        static $gtype: GObject.GType<Instance>;
        $signals: Instance.SignalSignatures;
        constructor(properties?: Partial<Instance.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Instance;
        connect<K extends keyof Instance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Instance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Instance.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Instance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        assign_window_to_monitor(window: Gtk.Window, monitor: Gdk.Monitor): void;
        is_locked(): boolean;
        lock(): boolean;
        unlock(): void;
    }
    type InstanceClass = typeof Instance;
    const __name__: string;
    const __version__: string;
}
export default Gtk4SessionLock;
}
declare module 'gi://Gtk4SessionLock' {
    import Gtk4SessionLock10 from 'gi://Gtk4SessionLock?version=1.0';
    export default Gtk4SessionLock10;
}
