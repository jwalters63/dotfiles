declare module 'gi://GdkX11?version=4.0' {
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=4.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
export namespace GdkX11 {
    enum X11DeviceType {
        LOGICAL,
        PHYSICAL,
        FLOATING,
    }
    function x11_device_get_id(device: X11DeviceXI2): number;
    function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null;
    function x11_free_compound_text(ctext: number): void;
    function x11_free_text_list(list: string): void;
    function x11_get_server_time(surface: X11Surface): number;
    function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
    function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
    function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
    function x11_set_sm_client_id(sm_client_id: string | null): void;
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
    namespace X11DeviceManagerXI2 {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::major": (pspec: GObject.ParamSpec) => void;
            "notify::minor": (pspec: GObject.ParamSpec) => void;
            "notify::opcode": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Gdk.Display;
            major: number;
            minor: number;
            opcode: number;
        }
    }
    class X11DeviceManagerXI2 extends GObject.Object {
        static $gtype: GObject.GType<X11DeviceManagerXI2>;
        get display(): Gdk.Display;
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
            "notify::active-layout-index": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-bidi-layouts": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::layout-names": (pspec: GObject.ParamSpec) => void;
            "notify::modifier-state": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
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
        interface SignalSignatures extends Gdk.Display.SignalSignatures {
            xevent: (arg0: null) => boolean | void;
            "notify::composited": (pspec: GObject.ParamSpec) => void;
            "notify::dmabuf-formats": (pspec: GObject.ParamSpec) => void;
            "notify::input-shapes": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-width": (pspec: GObject.ParamSpec) => void;
        }
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
        static open(display_name: string | null): Gdk.Display | null;
        static set_program_class(display: Gdk.Display, program_class: string): void;
        error_trap_pop(): number;
        error_trap_pop_ignored(): void;
        error_trap_push(): void;
        get_default_group(): Gdk.Surface;
        get_egl_display(): null;
        get_egl_version(): [boolean, number, number];
        get_glx_version(): [boolean, number, number];
        get_primary_monitor(): Gdk.Monitor;
        get_screen(): X11Screen;
        get_startup_notification_id(): string;
        get_startup_notification_id(...args: never[]): any;
        get_user_time(): number;
        get_xcursor(cursor: Gdk.Cursor): xlib.Cursor;
        get_xdisplay(): xlib.Display;
        get_xrootwindow(): xlib.Window;
        get_xscreen(): xlib.Screen;
        grab(): void;
        set_cursor_theme(theme: string | null, size: number): void;
        set_startup_notification_id(startup_id: string): void;
        set_surface_scale(scale: number): void;
        string_to_compound_text(str: string): [number, string, number, Uint8Array];
        text_property_to_text_list(encoding: string, format: number, text: number, length: number, list: string): number;
        ungrab(): void;
        utf8_to_compound_text(str: string): [boolean, string, number, Uint8Array];
    }
    namespace X11Drag {
        interface SignalSignatures extends Gdk.Drag.SignalSignatures {
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::formats": (pspec: GObject.ParamSpec) => void;
            "notify::selected-action": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Drag.ConstructorProps {}
    }
    class X11Drag extends Gdk.Drag {
        static $gtype: GObject.GType<X11Drag>;
        $signals: X11Drag.SignalSignatures;
        constructor(properties?: Partial<X11Drag.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Drag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Drag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Drag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Drag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Drag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Drag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace X11GLContext {
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            "notify::allowed-apis": (pspec: GObject.ParamSpec) => void;
            "notify::api": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
    }
    abstract class X11GLContext extends Gdk.GLContext {
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
    namespace X11Monitor {
        interface SignalSignatures extends Gdk.Monitor.SignalSignatures {
            "notify::connector": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::height-mm": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel-layout": (pspec: GObject.ParamSpec) => void;
            "notify::valid": (pspec: GObject.ParamSpec) => void;
            "notify::width-mm": (pspec: GObject.ParamSpec) => void;
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
        get_output(): xlib.XID;
        get_workarea(): Gdk.Rectangle;
    }
    namespace X11Screen {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "window-manager-changed": () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class X11Screen extends GObject.Object {
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
        supports_net_wm_hint(property_name: string): boolean;
    }
    namespace X11Surface {
        interface SignalSignatures extends Gdk.Surface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Surface.ConstructorProps {}
    }
    class X11Surface extends Gdk.Surface {
        static $gtype: GObject.GType<X11Surface>;
        $signals: X11Surface.SignalSignatures;
        constructor(properties?: Partial<X11Surface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof X11Surface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Surface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Surface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, X11Surface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Surface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<X11Surface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface;
        get_desktop(): number;
        get_group(): Gdk.Surface | null;
        get_xid(): xlib.Window;
        move_to_current_desktop(): void;
        move_to_desktop(desktop: number): void;
        set_frame_sync_enabled(frame_sync_enabled: boolean): void;
        set_group(leader: Gdk.Surface): void;
        set_skip_pager_hint(skips_pager: boolean): void;
        set_skip_taskbar_hint(skips_taskbar: boolean): void;
        set_theme_variant(variant: string): void;
        set_urgency_hint(urgent: boolean): void;
        set_user_time(timestamp: number): void;
        set_utf8_property(name: string, value: string | null): void;
    }
    type X11AppLaunchContextClass = typeof X11AppLaunchContext;
    type X11DeviceManagerXI2Class = typeof X11DeviceManagerXI2;
    type X11DeviceXI2Class = typeof X11DeviceXI2;
    type X11DisplayClass = typeof X11Display;
    type X11DragClass = typeof X11Drag;
    type X11GLContextClass = typeof X11GLContext;
    type X11MonitorClass = typeof X11Monitor;
    type X11ScreenClass = typeof X11Screen;
    type X11SurfaceClass = typeof X11Surface;
    const __name__: string;
    const __version__: string;
}
export default GdkX11;
}
declare module 'gi://GdkX11' {
    import GdkX1140 from 'gi://GdkX11?version=4.0';
    export default GdkX1140;
}
