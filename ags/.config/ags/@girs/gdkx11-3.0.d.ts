declare module 'gi://GdkX11?version=3.0' {
import type xlib from 'gi://xlib?version=2.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
export namespace GdkX11 {
    function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
    function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom;
    function x11_device_get_id(device: X11DeviceCore): number;
    function x11_device_manager_lookup(device_manager: X11DeviceManagerCore, device_id: number): X11DeviceCore | null;
    function x11_free_compound_text(ctext: number): void;
    function x11_free_text_list(list: string): void;
    function x11_get_default_root_xwindow(): xlib.Window;
    function x11_get_default_screen(): number;
    function x11_get_default_xdisplay(): xlib.Display;
    function x11_get_parent_relative_pattern(): cairo.Pattern;
    function x11_get_server_time(window: X11Window): number;
    function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
    function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
    function x11_get_xatom_name(xatom: xlib.Atom): string;
    function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
    function x11_grab_server(): void;
    function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
    function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void;
    function x11_set_sm_client_id(sm_client_id: string | null): void;
    function x11_ungrab_server(): void;
    function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom;
    function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom;
    namespace X11AppLaunchContext {
        interface SignalSignatures extends Gdk.AppLaunchContext.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.AppLaunchContext.ConstructorProps {}
    }
    class X11AppLaunchContext extends Gdk.AppLaunchContext {
        static $gtype: GObject.GType<X11AppLaunchContext>;
        $signals: X11AppLaunchContext.SignalSignatures;
        constructor(properties?: Partial<X11AppLaunchContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11AppLaunchContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11AppLaunchContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11AppLaunchContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11AppLaunchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11Cursor {
        interface SignalSignatures extends Gdk.Cursor.SignalSignatures {
            "notify::cursor-type": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Cursor.ConstructorProps {}
    }
    class X11Cursor extends Gdk.Cursor {
        static $gtype: GObject.GType<X11Cursor>;
        $signals: X11Cursor.SignalSignatures;
        constructor(properties?: Partial<X11Cursor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Cursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Cursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Cursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_xcursor(): xlib.Cursor;
        get_xdisplay(): xlib.Display;
    }
    namespace X11DeviceCore {
        interface SignalSignatures extends Gdk.Device.SignalSignatures {
            "notify::associated-device": (pspec: GObject.ParamSpec) => void;
            "notify::axes": (pspec: GObject.ParamSpec) => void;
            "notify::device-manager": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::input-mode": (pspec: GObject.ParamSpec) => void;
            "notify::input-source": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::vendor-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Device.ConstructorProps {}
    }
    class X11DeviceCore extends Gdk.Device {
        static $gtype: GObject.GType<X11DeviceCore>;
        $signals: X11DeviceCore.SignalSignatures;
        constructor(properties?: Partial<X11DeviceCore.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DeviceCore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceCore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DeviceCore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceCore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DeviceCore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DeviceCore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11DeviceManagerCore {
        interface SignalSignatures extends Gdk.DeviceManager.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.DeviceManager.ConstructorProps {}
    }
    class X11DeviceManagerCore extends Gdk.DeviceManager {
        static $gtype: GObject.GType<X11DeviceManagerCore>;
        $signals: X11DeviceManagerCore.SignalSignatures;
        constructor(properties?: Partial<X11DeviceManagerCore.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DeviceManagerCore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceManagerCore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DeviceManagerCore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceManagerCore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DeviceManagerCore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DeviceManagerCore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11DeviceManagerXI2 {
        interface SignalSignatures extends X11DeviceManagerCore.SignalSignatures {
            "notify::major": (pspec: GObject.ParamSpec) => void;
            "notify::minor": (pspec: GObject.ParamSpec) => void;
            "notify::opcode": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends X11DeviceManagerCore.ConstructorProps {
            major: number;
            minor: number;
            opcode: number;
        }
    }
    class X11DeviceManagerXI2 extends X11DeviceManagerCore {
        static $gtype: GObject.GType<X11DeviceManagerXI2>;
        get major(): number;
        get minor(): number;
        get opcode(): number;
        $signals: X11DeviceManagerXI2.SignalSignatures;
        constructor(properties?: Partial<X11DeviceManagerXI2.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DeviceManagerXI2.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceManagerXI2.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DeviceManagerXI2.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceManagerXI2.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DeviceManagerXI2.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DeviceManagerXI2.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11DeviceXI2 {
        interface SignalSignatures extends Gdk.Device.SignalSignatures {
            "notify::device-id": (pspec: GObject.ParamSpec) => void;
            "notify::associated-device": (pspec: GObject.ParamSpec) => void;
            "notify::axes": (pspec: GObject.ParamSpec) => void;
            "notify::device-manager": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::input-mode": (pspec: GObject.ParamSpec) => void;
            "notify::input-source": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::vendor-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Device.ConstructorProps {
            device_id: number;
            deviceId: number;
        }
    }
    class X11DeviceXI2 extends Gdk.Device {
        static $gtype: GObject.GType<X11DeviceXI2>;
        get device_id(): number;
        get deviceId(): number;
        $signals: X11DeviceXI2.SignalSignatures;
        constructor(properties?: Partial<X11DeviceXI2.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DeviceXI2.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceXI2.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DeviceXI2.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DeviceXI2.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DeviceXI2.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DeviceXI2.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11Display {
        interface SignalSignatures extends Gdk.Display.SignalSignatures {}
        interface ConstructorProps extends Gdk.Display.ConstructorProps {}
    }
    class X11Display extends Gdk.Display {
        static $gtype: GObject.GType<X11Display>;
        $signals: X11Display.SignalSignatures;
        constructor(properties?: Partial<X11Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_glx_version(display: Gdk.Display): [boolean, number, number];
        error_trap_pop(): number;
        error_trap_pop_ignored(): void;
        error_trap_push(): void;
        get_startup_notification_id(): string;
        get_user_time(): number;
        get_xdisplay(): xlib.Display;
        grab(): void;
        set_cursor_theme(theme: string | null, size: number): void;
        set_startup_notification_id(startup_id: string): void;
        set_window_scale(scale: number): void;
        string_to_compound_text(str: string): [number, Gdk.Atom, number, Uint8Array];
        text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number;
        ungrab(): void;
        utf8_to_compound_text(str: string): [boolean, Gdk.Atom, number, Uint8Array];
    }
    namespace X11DisplayManager {
        interface SignalSignatures extends Gdk.DisplayManager.SignalSignatures {
            "notify::default-display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.DisplayManager.ConstructorProps {}
    }
    class X11DisplayManager extends Gdk.DisplayManager {
        static $gtype: GObject.GType<X11DisplayManager>;
        $signals: X11DisplayManager.SignalSignatures;
        constructor(properties?: Partial<X11DisplayManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DisplayManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DisplayManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DisplayManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DisplayManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11DragContext {
        interface SignalSignatures extends Gdk.DragContext.SignalSignatures {}
        interface ConstructorProps extends Gdk.DragContext.ConstructorProps {}
    }
    class X11DragContext extends Gdk.DragContext {
        static $gtype: GObject.GType<X11DragContext>;
        $signals: X11DragContext.SignalSignatures;
        constructor(properties?: Partial<X11DragContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DragContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11DragContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11DragContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11DragContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11GLContext {
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
    }
    class X11GLContext extends Gdk.GLContext {
        static $gtype: GObject.GType<X11GLContext>;
        $signals: X11GLContext.SignalSignatures;
        constructor(properties?: Partial<X11GLContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11GLContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11GLContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11GLContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11Keymap {
        interface SignalSignatures extends Gdk.Keymap.SignalSignatures {}
        interface ConstructorProps extends Gdk.Keymap.ConstructorProps {}
    }
    class X11Keymap extends Gdk.Keymap {
        static $gtype: GObject.GType<X11Keymap>;
        $signals: X11Keymap.SignalSignatures;
        constructor(properties?: Partial<X11Keymap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Keymap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Keymap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Keymap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Keymap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_group_for_state(state: number): number;
        key_is_modifier(keycode: number): boolean;
    }
    namespace X11Monitor {
        interface SignalSignatures extends Gdk.Monitor.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::height-mm": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel-layout": (pspec: GObject.ParamSpec) => void;
            "notify::width-mm": (pspec: GObject.ParamSpec) => void;
            "notify::workarea": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Monitor.ConstructorProps {}
    }
    class X11Monitor extends Gdk.Monitor {
        static $gtype: GObject.GType<X11Monitor>;
        $signals: X11Monitor.SignalSignatures;
        constructor(properties?: Partial<X11Monitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Monitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Monitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Monitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_output(monitor: Gdk.Monitor): xlib.XID;
    }
    namespace X11Screen {
        interface SignalSignatures extends Gdk.Screen.SignalSignatures {
            "window-manager-changed": () => void;
            "notify::font-options": (pspec: GObject.ParamSpec) => void;
            "notify::resolution": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Screen.ConstructorProps {}
    }
    class X11Screen extends Gdk.Screen {
        static $gtype: GObject.GType<X11Screen>;
        $signals: X11Screen.SignalSignatures;
        constructor(properties?: Partial<X11Screen.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_current_desktop(): number;
        get_monitor_output(monitor_num: number): xlib.XID;
        get_number_of_desktops(): number;
        get_screen_number(): number;
        get_window_manager_name(): string;
        get_xscreen(): xlib.Screen;
        lookup_visual(xvisualid: xlib.VisualID): X11Visual;
        supports_net_wm_hint(property: Gdk.Atom): boolean;
    }
    namespace X11Visual {
        interface SignalSignatures extends Gdk.Visual.SignalSignatures {}
        interface ConstructorProps extends Gdk.Visual.ConstructorProps {}
    }
    class X11Visual extends Gdk.Visual {
        static $gtype: GObject.GType<X11Visual>;
        $signals: X11Visual.SignalSignatures;
        constructor(properties?: Partial<X11Visual.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Visual.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Visual.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Visual.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Visual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_xvisual(): xlib.Visual;
    }
    namespace X11Window {
        interface SignalSignatures extends Gdk.Window.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Window.ConstructorProps {}
    }
    class X11Window extends Gdk.Window {
        static $gtype: GObject.GType<X11Window>;
        $signals: X11Window.SignalSignatures;
        constructor(properties?: Partial<X11Window.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static foreign_new_for_display(display: X11Display, window: xlib.Window): X11Window;
        connect<K extends keyof X11Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static lookup_for_display(display: X11Display, window: xlib.Window): X11Window;
        get_desktop(): number;
        get_xid(): xlib.Window;
        move_to_current_desktop(): void;
        move_to_desktop(desktop: number): void;
        set_frame_extents(left: number, right: number, top: number, bottom: number): void;
        set_frame_sync_enabled(frame_sync_enabled: boolean): void;
        set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void;
        set_theme_variant(variant: string): void;
        set_user_time(timestamp: number): void;
        set_utf8_property(name: string, value: string | null): void;
    }
    type X11AppLaunchContextClass = typeof X11AppLaunchContext;
    type X11CursorClass = typeof X11Cursor;
    type X11DeviceCoreClass = typeof X11DeviceCore;
    type X11DeviceManagerCoreClass = typeof X11DeviceManagerCore;
    type X11DeviceManagerXI2Class = typeof X11DeviceManagerXI2;
    type X11DeviceXI2Class = typeof X11DeviceXI2;
    type X11DisplayClass = typeof X11Display;
    type X11DisplayManagerClass = typeof X11DisplayManager;
    type X11DragContextClass = typeof X11DragContext;
    type X11GLContextClass = typeof X11GLContext;
    type X11KeymapClass = typeof X11Keymap;
    type X11MonitorClass = typeof X11Monitor;
    type X11ScreenClass = typeof X11Screen;
    type X11VisualClass = typeof X11Visual;
    type X11WindowClass = typeof X11Window;
    const __name__: string;
    const __version__: string;
}
export default GdkX11;
}
declare module 'gi://GdkX11' {
    import GdkX1130 from 'gi://GdkX11?version=3.0';
    export default GdkX1130;
}
