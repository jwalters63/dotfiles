declare module 'gi://GtkVnc?version=2.0' {
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
import type GVnc from 'gi://GVnc?version=1.0';
export namespace GtkVnc {
    export namespace DisplayCredential {
        export const $gtype: GObject.GType<DisplayCredential>;
    }
    enum DisplayCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
        CA_CERT_DATA,
    }
    export namespace DisplayDepthColor {
        export const $gtype: GObject.GType<DisplayDepthColor>;
    }
    enum DisplayDepthColor {
        DEFAULT,
        FULL,
        MEDIUM,
        LOW,
        ULTRA_LOW,
    }
    export namespace DisplayKeyEvent {
        export const $gtype: GObject.GType<DisplayKeyEvent>;
    }
    enum DisplayKeyEvent {
        PRESS,
        RELEASE,
        CLICK,
    }
    namespace CairoFramebuffer {
        interface SignalSignatures extends GVnc.BaseFramebuffer.SignalSignatures {
            "notify::surface": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::color-map": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::local-format": (pspec: GObject.ParamSpec) => void;
            "notify::remote-format": (pspec: GObject.ParamSpec) => void;
            "notify::rowstride": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GVnc.BaseFramebuffer.ConstructorProps, GVnc.Framebuffer.ConstructorProps {
            surface: never;
        }
    }
    class CairoFramebuffer extends GVnc.BaseFramebuffer implements GVnc.Framebuffer {
        static $gtype: GObject.GType<CairoFramebuffer>;
        get surface(): null;
        $signals: CairoFramebuffer.SignalSignatures;
        constructor(properties?: Partial<CairoFramebuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](width: number, height: number, remoteFormat: GVnc.PixelFormat): CairoFramebuffer;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CairoFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoFramebuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CairoFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoFramebuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CairoFramebuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CairoFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_surface(): cairo.Surface;
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        get_buffer(): Uint8Array;
        get_height(): number;
        get_local_format(): GVnc.PixelFormat;
        get_remote_format(): GVnc.PixelFormat;
        get_rowstride(): number;
        get_width(): number;
        perfect_format_match(): boolean;
        rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;
        set_color_map(map: GVnc.ColorMap): void;
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;
        vfunc_get_buffer(): number;
        vfunc_get_height(): number;
        vfunc_get_local_format(): GVnc.PixelFormat;
        vfunc_get_remote_format(): GVnc.PixelFormat;
        vfunc_get_rowstride(): number;
        vfunc_get_width(): number;
        vfunc_perfect_format_match(): boolean;
        vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;
        vfunc_set_color_map(map: GVnc.ColorMap): void;
        vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
    }
    namespace Display {
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "vnc-auth-credential": (arg0: GObject.ValueArray) => void;
            "vnc-auth-failure": (arg0: string) => void;
            "vnc-auth-unsupported": (arg0: number) => void;
            "vnc-bell": () => void;
            "vnc-connected": () => void;
            "vnc-desktop-rename": (arg0: string) => void;
            "vnc-desktop-resize": (arg0: number, arg1: number) => void;
            "vnc-disconnected": () => void;
            "vnc-error": (arg0: string) => void;
            "vnc-initialized": () => void;
            "vnc-keyboard-grab": () => void;
            "vnc-keyboard-ungrab": () => void;
            "vnc-pointer-grab": () => void;
            "vnc-pointer-ungrab": () => void;
            "vnc-power-control-failed": () => void;
            "vnc-power-control-initialized": () => void;
            "vnc-server-cut-text": (arg0: string) => void;
            "notify::allow-resize": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::depth": (pspec: GObject.ParamSpec) => void;
            "notify::force-size": (pspec: GObject.ParamSpec) => void;
            "notify::grab-keyboard": (pspec: GObject.ParamSpec) => void;
            "notify::grab-keys": (pspec: GObject.ParamSpec) => void;
            "notify::grab-pointer": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::keep-aspect-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::local-pointer": (pspec: GObject.ParamSpec) => void;
            "notify::lossy-encoding": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::scaling": (pspec: GObject.ParamSpec) => void;
            "notify::shared-flag": (pspec: GObject.ParamSpec) => void;
            "notify::smoothing": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::zoom-level": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            allow_resize: boolean;
            allowResize: boolean;
            connection: GVnc.Connection;
            depth: DisplayDepthColor;
            force_size: boolean;
            forceSize: boolean;
            grab_keyboard: boolean;
            grabKeyboard: boolean;
            grab_keys: GrabSequence;
            grabKeys: GrabSequence;
            grab_pointer: boolean;
            grabPointer: boolean;
            height: number;
            keep_aspect_ratio: boolean;
            keepAspectRatio: boolean;
            local_pointer: boolean;
            localPointer: boolean;
            lossy_encoding: boolean;
            lossyEncoding: boolean;
            name: string;
            read_only: boolean;
            readOnly: boolean;
            rotation: number;
            scaling: boolean;
            shared_flag: boolean;
            sharedFlag: boolean;
            smoothing: boolean;
            width: number;
            zoom_level: number;
            zoomLevel: number;
        }
    }
    class Display extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Display>;
        get allow_resize(): boolean;
        set allow_resize(val: boolean);
        get allowResize(): boolean;
        set allowResize(val: boolean);
        get connection(): GVnc.Connection;
        get depth(): DisplayDepthColor;
        set depth(val: DisplayDepthColor);
        get force_size(): boolean;
        set force_size(val: boolean);
        get forceSize(): boolean;
        set forceSize(val: boolean);
        get grab_keyboard(): boolean;
        set grab_keyboard(val: boolean);
        get grabKeyboard(): boolean;
        set grabKeyboard(val: boolean);
        get grab_keys(): GrabSequence;
        set grab_keys(val: GrabSequence);
        get grabKeys(): GrabSequence;
        set grabKeys(val: GrabSequence);
        get grab_pointer(): boolean;
        set grab_pointer(val: boolean);
        get grabPointer(): boolean;
        set grabPointer(val: boolean);
        get height(): number;
        get keep_aspect_ratio(): boolean;
        set keep_aspect_ratio(val: boolean);
        get keepAspectRatio(): boolean;
        set keepAspectRatio(val: boolean);
        get local_pointer(): boolean;
        set local_pointer(val: boolean);
        get localPointer(): boolean;
        set localPointer(val: boolean);
        get lossy_encoding(): boolean;
        set lossy_encoding(val: boolean);
        get lossyEncoding(): boolean;
        set lossyEncoding(val: boolean);
        get name(): string;
        get read_only(): boolean;
        set read_only(val: boolean);
        get readOnly(): boolean;
        set readOnly(val: boolean);
        get rotation(): number;
        set rotation(val: number);
        get scaling(): boolean;
        set scaling(val: boolean);
        get shared_flag(): boolean;
        set shared_flag(val: boolean);
        get sharedFlag(): boolean;
        set sharedFlag(val: boolean);
        get smoothing(): boolean;
        set smoothing(val: boolean);
        get width(): number;
        get zoom_level(): number;
        set zoom_level(val: number);
        get zoomLevel(): number;
        set zoomLevel(val: number);
        $signals: Display.SignalSignatures;
        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Display;
        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_option_entries(): GLib.OptionEntry[];
        static get_option_group(): GLib.OptionGroup;
        vfunc_vnc_auth_credential(credList: GObject.ValueArray): void;
        vfunc_vnc_connected(): void;
        vfunc_vnc_disconnected(): void;
        vfunc_vnc_initialized(): void;
        client_cut_text(text: string): void;
        close(): void;
        force_grab(enable: boolean): void;
        get_allow_resize(): boolean;
        get_connection(): GVnc.Connection;
        get_depth(): DisplayDepthColor;
        get_force_size(): boolean;
        get_grab_keys(): GrabSequence;
        get_height(): number;
        get_keep_aspect_ratio(): boolean;
        get_keyboard_grab(): boolean;
        get_lossy_encoding(): boolean;
        get_name(): string;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_pointer_force_visible(): boolean;
        get_pointer_grab(): boolean;
        get_pointer_local(): boolean;
        get_read_only(): boolean;
        get_rotation(): number;
        get_scaling(): boolean;
        get_shared_flag(): boolean;
        get_smoothing(): boolean;
        get_width(): number;
        get_zoom_level(): number;
        is_open(): boolean;
        is_pointer_absolute(): boolean;
        open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean;
        open_fd(fd: number): boolean;
        open_fd_with_hostname(fd: number, hostname: string | null): boolean;
        open_host(host: string, port: string): boolean;
        request_update(): boolean;
        send_keys(keyvals: number[]): void;
        send_keys_ex(keyvals: number[], kind: DisplayKeyEvent): void;
        send_pointer(x: number, y: number, button_mask: number): void;
        set_allow_resize(enable: boolean): void;
        set_credential(type: number, data: string): boolean;
        set_depth(depth: DisplayDepthColor): void;
        set_force_size(enable: boolean): void;
        set_grab_keys(seq: GrabSequence): void;
        set_keep_aspect_ratio(enable: boolean): void;
        set_keyboard_grab(enable: boolean): void;
        set_lossy_encoding(enable: boolean): void;
        set_pointer_force_visible(enable: boolean): void;
        set_pointer_grab(enable: boolean): void;
        set_pointer_local(enable: boolean): void;
        set_read_only(enable: boolean): void;
        set_rotation(rotation: number): void;
        set_scaling(enable: boolean): boolean;
        set_shared_flag(shared: boolean): void;
        set_smoothing(enable: boolean): void;
        set_zoom_level(zoom: number): void;
    }
    type CairoFramebufferClass = typeof CairoFramebuffer;
    abstract class CairoFramebufferPrivate {
        static $gtype: GObject.GType<CairoFramebufferPrivate>;
    }
    type DisplayClass = typeof Display;
    abstract class DisplayPrivate {
        static $gtype: GObject.GType<DisplayPrivate>;
    }
    class GrabSequence {
        static $gtype: GObject.GType<GrabSequence>;
        nkeysyms: number;
        keysyms: number;
        constructor(properties?: Partial<{
            nkeysyms: number;
            keysyms: number;
        }>);
        static ["new"](keysyms: number[]): GrabSequence;
        static new_from_string(str: string): GrabSequence;
        as_string(): string;
        copy(): GrabSequence;
        free(): void;
        get_nth(n: number): number;
    }
    const __name__: string;
    const __version__: string;
}
export default GtkVnc;
}
declare module 'gi://GtkVnc' {
    import GtkVnc20 from 'gi://GtkVnc?version=2.0';
    export default GtkVnc20;
}
