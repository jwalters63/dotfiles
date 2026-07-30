declare module 'gi://ZBar?version=1.0' {
import Gtk__ from 'gi://Gtk?version=3.0';
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
export namespace ZBar {
    namespace Gtk {
        interface SignalSignatures extends Gtk__.Widget.SignalSignatures {
            decoded: (arg0: number, arg1: string) => void;
            "decoded-text": (arg0: string) => void;
            "notify::video-device": (pspec: GObject.ParamSpec) => void;
            "notify::video-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::video-opened": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk__.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk__.Buildable.ConstructorProps {
            video_device: string;
            videoDevice: string;
            video_enabled: boolean;
            videoEnabled: boolean;
            video_opened: boolean;
            videoOpened: boolean;
        }
    }
    class Gtk extends Gtk__.Widget implements Atk.ImplementorIface, Gtk__.Buildable {
        static $gtype: GObject.GType<Gtk>;
        get video_device(): string;
        set video_device(val: string);
        get videoDevice(): string;
        set videoDevice(val: string);
        get video_enabled(): boolean;
        set video_enabled(val: boolean);
        get videoEnabled(): boolean;
        set videoEnabled(val: boolean);
        get video_opened(): boolean;
        get videoOpened(): boolean;
        $signals: Gtk.SignalSignatures;
        widget: Gtk__.Widget;
        constructor(properties?: Partial<Gtk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Gtk;
        connect<K extends keyof Gtk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gtk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Gtk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gtk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Gtk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Gtk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static image_from_pixbuf(image: null, pixbuf: GdkPixbuf.Pixbuf): boolean;
        vfunc_decoded_text(text: string): void;
        vfunc_scan_image(image: GdkPixbuf.Pixbuf): void;
        get_video_device(): string;
        get_video_enabled(): boolean;
        get_video_opened(): boolean;
        request_video_size(width: number, height: number): void;
        scan_image(image: GdkPixbuf.Pixbuf): void;
        set_video_device(video_device: string | null): void;
        set_video_enabled(video_enabled: boolean): void;
        add_child(builder: Gtk__.Builder, child: GObject.Object, type: string | null): void;
        construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;
        custom_finished(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_end(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_start(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];
        get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;
        get_name(): string;
        parser_finished(builder: Gtk__.Builder): void;
        set_buildable_property(builder: Gtk__.Builder, name: string, value: GObject.Value | any): void;
        set_name(name: string): void;
        vfunc_add_child(builder: Gtk__.Builder, child: GObject.Object, type: string | null): void;
        vfunc_construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;
        vfunc_custom_finished(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_end(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_start(builder: Gtk__.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;
        vfunc_get_name(): string;
        vfunc_parser_finished(builder: Gtk__.Builder): void;
        vfunc_set_buildable_property(builder: Gtk__.Builder, name: string, value: unknown): void;
        vfunc_set_name(name: string): void;
    }
    type GtkClass = typeof Gtk;
    const __name__: string;
    const __version__: string;
}
export default ZBar;
}
declare module 'gi://ZBar' {
    import ZBar10 from 'gi://ZBar?version=1.0';
    export default ZBar10;
}
