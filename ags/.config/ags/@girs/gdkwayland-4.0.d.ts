declare module 'gi://GdkWayland?version=4.0' {
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
export namespace GdkWayland {
    interface WaylandToplevelExported {
        (toplevel: WaylandToplevel, handle: string): void;
    }
    namespace WaylandDevice {
        interface SignalSignatures extends Gdk.Device.SignalSignatures {
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
        interface ConstructorProps extends Gdk.Device.ConstructorProps {}
    }
    class WaylandDevice extends Gdk.Device {
        static $gtype: GObject.GType<WaylandDevice>;
        $signals: WaylandDevice.SignalSignatures;
        constructor(properties?: Partial<WaylandDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_node_path(): string | null;
        get_xkb_keymap(): null;
    }
    namespace WaylandDisplay {
        interface SignalSignatures extends Gdk.Display.SignalSignatures {
            "notify::composited": (pspec: GObject.ParamSpec) => void;
            "notify::dmabuf-formats": (pspec: GObject.ParamSpec) => void;
            "notify::input-shapes": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Display.ConstructorProps {}
    }
    class WaylandDisplay extends Gdk.Display {
        static $gtype: GObject.GType<WaylandDisplay>;
        $signals: WaylandDisplay.SignalSignatures;
        constructor(properties?: Partial<WaylandDisplay.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_egl_display(): null;
        get_startup_notification_id(): string | null;
        query_registry(global: string): boolean;
        set_cursor_theme(name: string, size: number): void;
        set_startup_notification_id(startup_id: string): void;
    }
    namespace WaylandGLContext {
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            "notify::allowed-apis": (pspec: GObject.ParamSpec) => void;
            "notify::api": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
    }
    class WaylandGLContext extends Gdk.GLContext {
        static $gtype: GObject.GType<WaylandGLContext>;
        $signals: WaylandGLContext.SignalSignatures;
        constructor(properties?: Partial<WaylandGLContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandGLContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandGLContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandGLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WaylandMonitor {
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
    class WaylandMonitor extends Gdk.Monitor {
        static $gtype: GObject.GType<WaylandMonitor>;
        $signals: WaylandMonitor.SignalSignatures;
        constructor(properties?: Partial<WaylandMonitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WaylandPopup {
        interface SignalSignatures extends WaylandSurface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::autohide": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Popup.ConstructorProps {}
    }
    class WaylandPopup extends WaylandSurface implements Gdk.Popup {
        static $gtype: GObject.GType<WaylandPopup>;
        $signals: WaylandPopup.SignalSignatures;
        constructor(properties?: Partial<WaylandPopup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandPopup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandPopup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandPopup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandPopup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandPopup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandPopup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get autohide(): boolean;
        get parent(): Gdk.Surface | null;
        get_autohide(): boolean;
        get_parent(): Gdk.Surface | null;
        get_position_x(): number;
        get_position_y(): number;
        get_rect_anchor(): Gdk.Gravity;
        get_surface_anchor(): Gdk.Gravity;
        present(width: number, height: number, layout: Gdk.PopupLayout): boolean;
    }
    namespace WaylandSeat {
        interface SignalSignatures extends Gdk.Seat.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gdk.Seat.ConstructorProps {}
    }
    class WaylandSeat extends Gdk.Seat {
        static $gtype: GObject.GType<WaylandSeat>;
        $signals: WaylandSeat.SignalSignatures;
        constructor(properties?: Partial<WaylandSeat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandSeat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSeat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandSeat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSeat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandSeat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandSeat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WaylandSurface {
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
    class WaylandSurface extends Gdk.Surface {
        static $gtype: GObject.GType<WaylandSurface>;
        $signals: WaylandSurface.SignalSignatures;
        constructor(properties?: Partial<WaylandSurface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandSurface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandSurface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandSurface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandSurface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        force_next_commit(): void;
    }
    namespace WaylandToplevel {
        interface SignalSignatures extends WaylandSurface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen-mode": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::icon-list": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::shortcuts-inhibited": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Toplevel.ConstructorProps {}
    }
    class WaylandToplevel extends WaylandSurface implements Gdk.Toplevel {
        static $gtype: GObject.GType<WaylandToplevel>;
        $signals: WaylandToplevel.SignalSignatures;
        constructor(properties?: Partial<WaylandToplevel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandToplevel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandToplevel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandToplevel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        drop_exported_handle(handle: string): void;
        export_handle(callback: WaylandToplevelExported): boolean;
        set_application_id(application_id: string): void;
        set_transient_for_exported(parent_handle_str: string): boolean;
        unexport_handle(): void;
        get capabilities(): Gdk.ToplevelCapabilities;
        get decorated(): boolean;
        set decorated(val: boolean);
        get deletable(): boolean;
        set deletable(val: boolean);
        get fullscreen_mode(): Gdk.FullscreenMode;
        set fullscreen_mode(val: Gdk.FullscreenMode);
        get fullscreenMode(): Gdk.FullscreenMode;
        set fullscreenMode(val: Gdk.FullscreenMode);
        get gravity(): Gdk.Gravity;
        set gravity(val: Gdk.Gravity);
        get icon_list(): null;
        set icon_list(val: never);
        get iconList(): null;
        set iconList(val: never);
        get modal(): boolean;
        set modal(val: boolean);
        get shortcuts_inhibited(): boolean;
        get shortcutsInhibited(): boolean;
        get startup_id(): string;
        set startup_id(val: string);
        get startupId(): string;
        set startupId(val: string);
        get state(): Gdk.ToplevelState;
        get title(): string;
        set title(val: string);
        get transient_for(): Gdk.Surface;
        set transient_for(val: Gdk.Surface);
        get transientFor(): Gdk.Surface;
        set transientFor(val: Gdk.Surface);
        begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void;
        begin_resize(edge: Gdk.SurfaceEdge, device: Gdk.Device | null, button: number, x: number, y: number, timestamp: number): void;
        focus(timestamp: number): void;
        get_capabilities(): Gdk.ToplevelCapabilities;
        get_gravity(): Gdk.Gravity;
        get_state(): Gdk.ToplevelState;
        inhibit_system_shortcuts(event: Gdk.Event | null): void;
        lower(): boolean;
        minimize(): boolean;
        present(layout: Gdk.ToplevelLayout): void;
        restore_system_shortcuts(): void;
        set_decorated(decorated: boolean): void;
        set_deletable(deletable: boolean): void;
        set_gravity(gravity: Gdk.Gravity): void;
        set_icon_list(surfaces: Gdk.Texture[]): void;
        set_modal(modal: boolean): void;
        set_startup_id(startup_id: string): void;
        set_title(title: string): void;
        set_transient_for(parent: Gdk.Surface): void;
        show_window_menu(event: Gdk.Event): boolean;
        supports_edge_constraints(): boolean;
        titlebar_gesture(gesture: Gdk.TitlebarGesture): boolean;
    }
    type WaylandDeviceClass = typeof WaylandDevice;
    type WaylandDisplayClass = typeof WaylandDisplay;
    type WaylandGLContextClass = typeof WaylandGLContext;
    type WaylandMonitorClass = typeof WaylandMonitor;
    type WaylandSeatClass = typeof WaylandSeat;
    const __name__: string;
    const __version__: string;
}
export default GdkWayland;
}
declare module 'gi://GdkWayland' {
    import GdkWayland40 from 'gi://GdkWayland?version=4.0';
    export default GdkWayland40;
}
