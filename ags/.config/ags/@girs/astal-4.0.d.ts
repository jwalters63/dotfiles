declare module 'gi://Astal?version=4.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type AstalIO from 'gi://AstalIO?version=0.1';
import type Gdk from 'gi://Gdk?version=4.0';
import type cairo from 'cairo';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gtk from 'gi://Gtk?version=4.0';
import type Gsk from 'gi://Gsk?version=4.0';
import type Graphene from 'gi://Graphene?version=1.0';
export namespace Astal {
    export namespace Exclusivity {
        export const $gtype: GObject.GType<Exclusivity>;
    }
    enum Exclusivity {
        NORMAL,
        EXCLUSIVE,
        IGNORE,
    }
    export namespace Layer {
        export const $gtype: GObject.GType<Layer>;
    }
    enum Layer {
        BACKGROUND,
        BOTTOM,
        TOP,
        OVERLAY,
    }
    export namespace Keymode {
        export const $gtype: GObject.GType<Keymode>;
    }
    enum Keymode {
        NONE,
        EXCLUSIVE,
        ON_DEMAND,
    }
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const MICRO_VERSION: number;
    const VERSION: string;
    export namespace WindowAnchor {
        export const $gtype: GObject.GType<WindowAnchor>;
    }
    enum WindowAnchor {
        NONE,
        TOP,
        RIGHT,
        LEFT,
        BOTTOM,
    }
    namespace Bin {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Buildable.ConstructorProps {
            child: Gtk.Widget | null;
        }
    }
    class Bin extends Gtk.Widget implements Gtk.Buildable {
        static $gtype: GObject.GType<Bin>;
        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);
        $signals: Bin.SignalSignatures;
        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Bin;
        connect<K extends keyof Bin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): Gtk.Widget | null;
        set_child(value: Gtk.Widget | null): void;
        get_buildable_id(): string | null;
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];
        vfunc_get_id(): string;
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        vfunc_parser_finished(builder: Gtk.Builder): void;
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        vfunc_set_id(id: string): void;
    }
    namespace Box {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::vertical": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            vertical: boolean;
            children: Gtk.Widget[];
            child: Gtk.Widget | null;
        }
    }
    class Box extends Gtk.Box {
        static $gtype: GObject.GType<Box>;
        get vertical(): boolean;
        set vertical(val: boolean);
        get children(): Gtk.Widget[];
        set children(val: Gtk.Widget[]);
        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);
        $signals: Box.SignalSignatures;
        constructor(properties?: Partial<Box.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Box;
        connect<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Box.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Box.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_vertical(): boolean;
        set_vertical(value: boolean): void;
        get_children(): Gtk.Widget[];
        set_children(value: Gtk.Widget[]): void;
        get_child(): Gtk.Widget | null;
        set_child(value: Gtk.Widget | null): void;
    }
    namespace Slider {
        interface SignalSignatures extends Gtk.Scale.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::min": (pspec: GObject.ParamSpec) => void;
            "notify::max": (pspec: GObject.ParamSpec) => void;
            "notify::step": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::draw-value": (pspec: GObject.ParamSpec) => void;
            "notify::has-origin": (pspec: GObject.ParamSpec) => void;
            "notify::value-pos": (pspec: GObject.ParamSpec) => void;
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::restrict-to-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::round-digits": (pspec: GObject.ParamSpec) => void;
            "notify::show-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Scale.ConstructorProps {
            value: number;
            min: number;
            max: number;
            step: number;
            page: number;
        }
    }
    class Slider extends Gtk.Scale {
        static $gtype: GObject.GType<Slider>;
        get value(): number;
        set value(val: number);
        get min(): number;
        set min(val: number);
        get max(): number;
        set max(val: number);
        get step(): number;
        set step(val: number);
        get page(): number;
        set page(val: number);
        $signals: Slider.SignalSignatures;
        constructor(properties?: Partial<Slider.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Slider;
        connect<K extends keyof Slider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Slider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Slider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Slider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): number;
        set_value(value: number): void;
        get_min(): number;
        set_min(value: number): void;
        get_max(): number;
        set_max(value: number): void;
        get_step(): number;
        set_step(value: number): void;
        get_page(): number;
        set_page(value: number): void;
    }
    namespace Window {
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::namespace": (pspec: GObject.ParamSpec) => void;
            "notify::anchor": (pspec: GObject.ParamSpec) => void;
            "notify::exclusivity": (pspec: GObject.ParamSpec) => void;
            "notify::layer": (pspec: GObject.ParamSpec) => void;
            "notify::keymode": (pspec: GObject.ParamSpec) => void;
            "notify::gdkmonitor": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Window.ConstructorProps {
            namespace: string;
            anchor: WindowAnchor;
            exclusivity: Exclusivity;
            layer: Layer;
            keymode: Keymode;
            gdkmonitor: Gdk.Monitor;
            margin_top: number;
            marginTop: number;
            margin_bottom: number;
            marginBottom: number;
            margin_left: number;
            marginLeft: number;
            margin_right: number;
            marginRight: number;
            margin: number;
            monitor: number;
        }
    }
    class Window extends Gtk.Window {
        static $gtype: GObject.GType<Window>;
        get namespace(): string;
        set namespace(val: string);
        get anchor(): WindowAnchor;
        set anchor(val: WindowAnchor);
        get exclusivity(): Exclusivity;
        set exclusivity(val: Exclusivity);
        get layer(): Layer;
        set layer(val: Layer);
        get keymode(): Keymode;
        set keymode(val: Keymode);
        get gdkmonitor(): Gdk.Monitor;
        set gdkmonitor(val: Gdk.Monitor);
        get margin_top(): number;
        set margin_top(val: number);
        get marginTop(): number;
        set marginTop(val: number);
        get margin_bottom(): number;
        set margin_bottom(val: number);
        get marginBottom(): number;
        set marginBottom(val: number);
        get margin_left(): number;
        set margin_left(val: number);
        get marginLeft(): number;
        set marginLeft(val: number);
        get margin_right(): number;
        set margin_right(val: number);
        get marginRight(): number;
        set marginRight(val: number);
        set margin(val: number);
        get monitor(): number;
        set monitor(val: number);
        $signals: Window.SignalSignatures;
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Window;
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_current_monitor(): Gdk.Monitor;
        get_namespace(): string;
        set_namespace(value: string): void;
        get_anchor(): WindowAnchor;
        set_anchor(value: WindowAnchor): void;
        get_exclusivity(): Exclusivity;
        set_exclusivity(value: Exclusivity): void;
        get_layer(): Layer;
        set_layer(value: Layer): void;
        get_keymode(): Keymode;
        set_keymode(value: Keymode): void;
        get_gdkmonitor(): Gdk.Monitor;
        set_gdkmonitor(value: Gdk.Monitor): void;
        get_margin_top(): number;
        set_margin_top(value: number): void;
        get_margin_bottom(): number;
        set_margin_bottom(value: number): void;
        get_margin_left(): number;
        set_margin_left(value: number): void;
        get_margin_right(): number;
        set_margin_right(value: number): void;
        set_margin(value: number): void;
        get_monitor(): number;
        set_monitor(value: number): void;
    }
    namespace Application {
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            "window-toggled": (arg0: Gtk.Window) => void;
            "notify::monitors": (pspec: GObject.ParamSpec) => void;
            "notify::windows": (pspec: GObject.ParamSpec) => void;
            "notify::gtk-theme": (pspec: GObject.ParamSpec) => void;
            "notify::icon-theme": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-theme": (pspec: GObject.ParamSpec) => void;
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::menubar": (pspec: GObject.ParamSpec) => void;
            "notify::register-session": (pspec: GObject.ParamSpec) => void;
            "notify::screensaver-active": (pspec: GObject.ParamSpec) => void;
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::inactivity-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::is-busy": (pspec: GObject.ParamSpec) => void;
            "notify::is-registered": (pspec: GObject.ParamSpec) => void;
            "notify::is-remote": (pspec: GObject.ParamSpec) => void;
            "notify::resource-base-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::instance-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Application.ConstructorProps, AstalIO.Application.ConstructorProps {
            monitors: Gdk.Monitor[];
            windows: Gtk.Window[];
            gtk_theme: string;
            gtkTheme: string;
            icon_theme: string;
            iconTheme: string;
            cursor_theme: string;
            cursorTheme: string;
        }
    }
    class Application extends Gtk.Application implements AstalIO.Application {
        static $gtype: GObject.GType<Application>;
        get monitors(): Gdk.Monitor[];
        get windows(): Gtk.Window[];
        get gtk_theme(): string;
        set gtk_theme(val: string);
        get gtkTheme(): string;
        set gtkTheme(val: string);
        get icon_theme(): string;
        set icon_theme(val: string);
        get iconTheme(): string;
        set iconTheme(val: string);
        get cursor_theme(): string;
        set cursor_theme(val: string);
        get cursorTheme(): string;
        set cursorTheme(val: string);
        $signals: Application.SignalSignatures;
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Application;
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_request(request: string, conn: Gio.SocketConnection): void;
        reset_css(): void;
        get_window(name: string): Gtk.Window | null;
        apply_css(style: string, reset: boolean): void;
        add_icons(path: string | null): void;
        request(request: string, conn: Gio.SocketConnection): void;
        get_monitors(): Gdk.Monitor[];
        get_windows(): Gtk.Window[];
        get_gtk_theme(): string;
        set_gtk_theme(value: string): void;
        get_icon_theme(): string;
        set_icon_theme(value: string): void;
        get_cursor_theme(): string;
        set_cursor_theme(value: string): void;
        get instance_name(): string;
        set instance_name(val: string);
        get instanceName(): string;
        set instanceName(val: string);
        quit(): void;
        inspector(): void;
        toggle_window(window: string): void;
        acquire_socket(): void;
        get_instance_name(): string;
        set_instance_name(value: string): void;
        vfunc_quit(): void;
        vfunc_inspector(): void;
        vfunc_toggle_window(window: string): void;
        vfunc_acquire_socket(): void;
        vfunc_get_instance_name(): string;
        vfunc_set_instance_name(value: string): void;
    }
    type BinClass = typeof Bin;
    abstract class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;
    }
    type BoxClass = typeof Box;
    abstract class BoxPrivate {
        static $gtype: GObject.GType<BoxPrivate>;
    }
    type SliderClass = typeof Slider;
    abstract class SliderPrivate {
        static $gtype: GObject.GType<SliderPrivate>;
    }
    type WindowClass = typeof Window;
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
    }
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default Astal;
}
declare module 'gi://Astal' {
    import Astal40 from 'gi://Astal?version=4.0';
    export default Astal40;
}
