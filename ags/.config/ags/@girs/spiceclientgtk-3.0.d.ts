declare module 'gi://SpiceClientGtk?version=3.0' {
import type SpiceClientGLib from 'gi://SpiceClientGLib?version=2.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace SpiceClientGtk {
    export namespace DisplayKeyEvent {
        export const $gtype: GObject.GType<DisplayKeyEvent>;
    }
    enum DisplayKeyEvent {
        PRESS,
        RELEASE,
        CLICK,
    }
    namespace Display {
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "grab-keys-pressed": () => void;
            "keyboard-grab": (arg0: number) => void;
            "mouse-grab": (arg0: number) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::disable-inputs": (pspec: GObject.ParamSpec) => void;
            "notify::grab-keyboard": (pspec: GObject.ParamSpec) => void;
            "notify::grab-mouse": (pspec: GObject.ParamSpec) => void;
            "notify::keypress-delay": (pspec: GObject.ParamSpec) => void;
            "notify::monitor-id": (pspec: GObject.ParamSpec) => void;
            "notify::only-downscale": (pspec: GObject.ParamSpec) => void;
            "notify::ready": (pspec: GObject.ParamSpec) => void;
            "notify::resize-guest": (pspec: GObject.ParamSpec) => void;
            "notify::scaling": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::zoom-level": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            channel_id: number;
            channelId: number;
            disable_inputs: boolean;
            disableInputs: boolean;
            grab_keyboard: boolean;
            grabKeyboard: boolean;
            grab_mouse: boolean;
            grabMouse: boolean;
            keypress_delay: number;
            keypressDelay: number;
            monitor_id: number;
            monitorId: number;
            only_downscale: boolean;
            onlyDownscale: boolean;
            ready: boolean;
            resize_guest: boolean;
            resizeGuest: boolean;
            scaling: boolean;
            session: SpiceClientGLib.Session;
            zoom_level: number;
            zoomLevel: number;
        }
    }
    class Display extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;
        get channel_id(): number;
        get channelId(): number;
        get disable_inputs(): boolean;
        set disable_inputs(val: boolean);
        get disableInputs(): boolean;
        set disableInputs(val: boolean);
        get grab_keyboard(): boolean;
        set grab_keyboard(val: boolean);
        get grabKeyboard(): boolean;
        set grabKeyboard(val: boolean);
        get grab_mouse(): boolean;
        set grab_mouse(val: boolean);
        get grabMouse(): boolean;
        set grabMouse(val: boolean);
        get keypress_delay(): number;
        set keypress_delay(val: number);
        get keypressDelay(): number;
        set keypressDelay(val: number);
        get monitor_id(): number;
        set monitor_id(val: number);
        get monitorId(): number;
        set monitorId(val: number);
        get only_downscale(): boolean;
        set only_downscale(val: boolean);
        get onlyDownscale(): boolean;
        set onlyDownscale(val: boolean);
        get ready(): boolean;
        get resize_guest(): boolean;
        set resize_guest(val: boolean);
        get resizeGuest(): boolean;
        set resizeGuest(val: boolean);
        get scaling(): boolean;
        set scaling(val: boolean);
        get session(): SpiceClientGLib.Session;
        get zoom_level(): number;
        set zoom_level(val: number);
        get zoomLevel(): number;
        set zoomLevel(val: number);
        $signals: Display.SignalSignatures;
        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](session: SpiceClientGLib.Session, channel_id: number): Display;
        static ["new"](...args: never[]): any;
        static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;
        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_grab_keys(): GrabSequence;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        keyboard_ungrab(): void;
        mouse_ungrab(): void;
        send_keys(keyvals: number[], kind: DisplayKeyEvent): void;
        set_grab_keys(seq: GrabSequence): void;
    }
    namespace GtkSession {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::auto-clipboard": (pspec: GObject.ParamSpec) => void;
            "notify::auto-usbredir": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-grabbed": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::sync-modifiers": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auto_clipboard: boolean;
            autoClipboard: boolean;
            auto_usbredir: boolean;
            autoUsbredir: boolean;
            pointer_grabbed: boolean;
            pointerGrabbed: boolean;
            session: SpiceClientGLib.Session;
            sync_modifiers: boolean;
            syncModifiers: boolean;
        }
    }
    class GtkSession extends GObject.Object {
        static $gtype: GObject.GType<GtkSession>;
        get auto_clipboard(): boolean;
        set auto_clipboard(val: boolean);
        get autoClipboard(): boolean;
        set autoClipboard(val: boolean);
        get auto_usbredir(): boolean;
        set auto_usbredir(val: boolean);
        get autoUsbredir(): boolean;
        set autoUsbredir(val: boolean);
        get pointer_grabbed(): boolean;
        get pointerGrabbed(): boolean;
        get session(): SpiceClientGLib.Session;
        get sync_modifiers(): boolean;
        set sync_modifiers(val: boolean);
        get syncModifiers(): boolean;
        set syncModifiers(val: boolean);
        $signals: GtkSession.SignalSignatures;
        constructor(properties?: Partial<GtkSession.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GtkSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GtkSession.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GtkSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GtkSession.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GtkSession.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GtkSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(session: SpiceClientGLib.Session): GtkSession;
        copy_to_guest(): void;
        paste_from_guest(): void;
    }
    namespace UsbDeviceWidget {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "connect-failed": (arg0: SpiceClientGLib.UsbDevice, arg1: GLib.Error) => void;
            "notify::device-format-string": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            device_format_string: string;
            deviceFormatString: string;
            session: SpiceClientGLib.Session;
        }
    }
    class UsbDeviceWidget extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<UsbDeviceWidget>;
        get device_format_string(): string;
        get deviceFormatString(): string;
        get session(): SpiceClientGLib.Session;
        $signals: UsbDeviceWidget.SignalSignatures;
        constructor(properties?: Partial<UsbDeviceWidget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](session: SpiceClientGLib.Session, device_format_string: string | null): UsbDeviceWidget;
        static ["new"](...args: never[]): any;
        connect<K extends keyof UsbDeviceWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UsbDeviceWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UsbDeviceWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UsbDeviceWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UsbDeviceWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UsbDeviceWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        get_orientation(): Gtk.Orientation;
        set_orientation(orientation: Gtk.Orientation): void;
    }
    type DisplayClass = typeof Display;
    class GrabSequence {
        static $gtype: GObject.GType<GrabSequence>;
        constructor(keysyms: number[]);
        static ["new"](keysyms: number[]): GrabSequence;
        static new_from_string(str: string): GrabSequence;
        as_string(): string;
        copy(): GrabSequence;
        free(): void;
    }
    type GtkSessionClass = typeof GtkSession;
    type UsbDeviceWidgetClass = typeof UsbDeviceWidget;
    abstract class UsbDeviceWidgetPrivate {
        static $gtype: GObject.GType<UsbDeviceWidgetPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default SpiceClientGtk;
}
declare module 'gi://SpiceClientGtk' {
    import SpiceClientGtk30 from 'gi://SpiceClientGtk?version=3.0';
    export default SpiceClientGtk30;
}
