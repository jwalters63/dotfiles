declare module 'gi://Astal?version=3.0' {
import type AstalIO from 'gi://AstalIO?version=0.1';
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace Astal {
    export namespace MouseButton {
        export const $gtype: GObject.GType<MouseButton>;
    }
    enum MouseButton {
        PRIMARY,
        MIDDLE,
        SECONDARY,
        BACK,
        FORWARD,
    }
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
    function widget_set_css(widget: Gtk.Widget, css: string): void;
    function widget_get_css(widget: Gtk.Widget): string;
    function widget_set_class_names(widget: Gtk.Widget, class_names: string[]): void;
    function widget_get_class_names(widget: Gtk.Widget): string[];
    function widget_toggle_class_name(widget: Gtk.Widget, class_name: string, condition: boolean): void;
    function widget_set_cursor(widget: Gtk.Widget, cursor: string): void;
    function widget_get_cursor(widget: Gtk.Widget): string;
    function widget_set_click_through(widget: Gtk.Widget, click_through: boolean): void;
    function widget_get_click_through(widget: Gtk.Widget): boolean;
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
    namespace Box {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::vertical": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            vertical: boolean;
            children: Gtk.Widget[];
            child: Gtk.Widget;
        }
    }
    class Box extends Gtk.Box {
        static $gtype: GObject.GType<Box>;
        get vertical(): boolean;
        set vertical(val: boolean);
        get children(): Gtk.Widget[];
        set children(val: Gtk.Widget[]);
        get child(): Gtk.Widget;
        set child(val: Gtk.Widget);
        $signals: Box.SignalSignatures;
        constructor(properties?: Partial<Box.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](vertical: boolean, children: Gtk.Widget[]): Box;
        static ["new"](...args: never[]): any;
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
        get_child(): Gtk.Widget;
        set_child(value: Gtk.Widget): void;
    }
    namespace Button {
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            hover: (arg0: HoverEvent) => void;
            "hover-lost": (arg0: HoverEvent) => void;
            click: (arg0: ClickEvent) => void;
            "click-release": (arg0: ClickEvent) => void;
            scroll: (arg0: ScrollEvent) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Button.ConstructorProps {}
    }
    class Button extends Gtk.Button {
        static $gtype: GObject.GType<Button>;
        $signals: Button.SignalSignatures;
        constructor(properties?: Partial<Button.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Button;
        connect<K extends keyof Button.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Button.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Button.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Button.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace CenterBox {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::vertical": (pspec: GObject.ParamSpec) => void;
            "notify::start-widget": (pspec: GObject.ParamSpec) => void;
            "notify::end-widget": (pspec: GObject.ParamSpec) => void;
            "notify::center-widget": (pspec: GObject.ParamSpec) => void;
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
        }
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Buildable.ConstructorProps {
            vertical: boolean;
            start_widget: Gtk.Widget;
            startWidget: Gtk.Widget;
            end_widget: Gtk.Widget;
            endWidget: Gtk.Widget;
            center_widget: Gtk.Widget;
            centerWidget: Gtk.Widget;
        }
    }
    class CenterBox extends Gtk.Box implements Gtk.Buildable {
        static $gtype: GObject.GType<CenterBox>;
        get vertical(): boolean;
        set vertical(val: boolean);
        get start_widget(): Gtk.Widget;
        set start_widget(val: Gtk.Widget);
        get startWidget(): Gtk.Widget;
        set startWidget(val: Gtk.Widget);
        get end_widget(): Gtk.Widget;
        set end_widget(val: Gtk.Widget);
        get endWidget(): Gtk.Widget;
        set endWidget(val: Gtk.Widget);
        get center_widget(): Gtk.Widget;
        set center_widget(val: Gtk.Widget);
        get centerWidget(): Gtk.Widget;
        set centerWidget(val: Gtk.Widget);
        $signals: CenterBox.SignalSignatures;
        constructor(properties?: Partial<CenterBox.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CenterBox;
        connect<K extends keyof CenterBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CenterBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CenterBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CenterBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CenterBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CenterBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_vertical(): boolean;
        set_vertical(value: boolean): void;
        get_start_widget(): Gtk.Widget;
        set_start_widget(value: Gtk.Widget): void;
        get_end_widget(): Gtk.Widget;
        set_end_widget(value: Gtk.Widget): void;
        get_center_widget(): Gtk.Widget;
        get_center_widget(...args: never[]): any;
        set_center_widget(value: Gtk.Widget): void;
        set_center_widget(...args: never[]): any;
    }
    namespace CircularProgress {
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::start-at": (pspec: GObject.ParamSpec) => void;
            "notify::end-at": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::rounded": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps {
            start_at: number;
            startAt: number;
            end_at: number;
            endAt: number;
            value: number;
            inverted: boolean;
            rounded: boolean;
        }
    }
    class CircularProgress extends Gtk.Bin {
        static $gtype: GObject.GType<CircularProgress>;
        get start_at(): number;
        set start_at(val: number);
        get startAt(): number;
        set startAt(val: number);
        get end_at(): number;
        set end_at(val: number);
        get endAt(): number;
        set endAt(val: number);
        get value(): number;
        set value(val: number);
        get inverted(): boolean;
        set inverted(val: boolean);
        get rounded(): boolean;
        set rounded(val: boolean);
        $signals: CircularProgress.SignalSignatures;
        constructor(properties?: Partial<CircularProgress.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CircularProgress;
        connect<K extends keyof CircularProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CircularProgress.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CircularProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CircularProgress.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CircularProgress.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CircularProgress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_start_at(): number;
        set_start_at(value: number): void;
        get_end_at(): number;
        set_end_at(value: number): void;
        get_value(): number;
        set_value(value: number): void;
        get_inverted(): boolean;
        set_inverted(value: boolean): void;
        get_rounded(): boolean;
        set_rounded(value: boolean): void;
    }
    namespace EventBox {
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            hover: (arg0: HoverEvent) => void;
            "hover-lost": (arg0: HoverEvent) => void;
            click: (arg0: ClickEvent) => void;
            "click-release": (arg0: ClickEvent) => void;
            scroll: (arg0: ScrollEvent) => void;
            motion: (arg0: MotionEvent) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {}
    }
    class EventBox extends Gtk.EventBox {
        static $gtype: GObject.GType<EventBox>;
        $signals: EventBox.SignalSignatures;
        constructor(properties?: Partial<EventBox.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): EventBox;
        connect<K extends keyof EventBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EventBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EventBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EventBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Icon {
        interface SignalSignatures extends Gtk.Image.SignalSignatures {
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::g-icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-set": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-animation": (pspec: GObject.ParamSpec) => void;
            "notify::pixel-size": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::stock": (pspec: GObject.ParamSpec) => void;
            "notify::storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
            "notify::use-fallback": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Image.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf | any;
            g_icon: Gio.Icon;
            gIcon: Gio.Icon;
            icon: string;
        }
    }
    class Icon extends Gtk.Image {
        static $gtype: GObject.GType<Icon>;
        get pixbuf(): GdkPixbuf.Pixbuf | any;
        set pixbuf(val: GdkPixbuf.Pixbuf | any);
        get g_icon(): Gio.Icon;
        set g_icon(val: Gio.Icon);
        get gIcon(): Gio.Icon;
        set gIcon(val: Gio.Icon);
        get icon(): string;
        set icon(val: string);
        $signals: Icon.SignalSignatures;
        constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Icon;
        connect<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Icon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static lookup_icon(icon: string): Gtk.IconInfo | null;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_pixbuf(...args: never[]): any;
        set_pixbuf(value: GdkPixbuf.Pixbuf): void;
        get_g_icon(): Gio.Icon;
        set_g_icon(value: Gio.Icon): void;
        get_icon(): string;
        set_icon(value: string): void;
    }
    namespace Label {
        interface SignalSignatures extends Gtk.Label.SignalSignatures {
            "notify::truncate": (pspec: GObject.ParamSpec) => void;
            "notify::justify-fill": (pspec: GObject.ParamSpec) => void;
            "notify::angle": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::justify": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::lines": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonic-keyval": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonic-widget": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::single-line-mode": (pspec: GObject.ParamSpec) => void;
            "notify::track-visited-links": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Label.ConstructorProps {
            truncate: boolean;
            justify_fill: boolean;
            justifyFill: boolean;
        }
    }
    class Label extends Gtk.Label {
        static $gtype: GObject.GType<Label>;
        get truncate(): boolean;
        set truncate(val: boolean);
        get justify_fill(): boolean;
        set justify_fill(val: boolean);
        get justifyFill(): boolean;
        set justifyFill(val: boolean);
        $signals: Label.SignalSignatures;
        constructor(properties?: Partial<Label.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Label;
        connect<K extends keyof Label.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Label.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Label.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Label.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Label.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Label.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_truncate(): boolean;
        set_truncate(value: boolean): void;
        get_justify_fill(): boolean;
        set_justify_fill(value: boolean): void;
    }
    namespace LevelBar {
        interface SignalSignatures extends Gtk.LevelBar.SignalSignatures {
            "notify::vertical": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::max-value": (pspec: GObject.ParamSpec) => void;
            "notify::min-value": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.LevelBar.ConstructorProps {
            vertical: boolean;
        }
    }
    class LevelBar extends Gtk.LevelBar {
        static $gtype: GObject.GType<LevelBar>;
        get vertical(): boolean;
        set vertical(val: boolean);
        $signals: LevelBar.SignalSignatures;
        constructor(properties?: Partial<LevelBar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): LevelBar;
        connect<K extends keyof LevelBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LevelBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LevelBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LevelBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LevelBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LevelBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_vertical(): boolean;
        set_vertical(value: boolean): void;
    }
    namespace Overlay {
        interface SignalSignatures extends Gtk.Overlay.SignalSignatures {
            "notify::pass-through": (pspec: GObject.ParamSpec) => void;
            "notify::overlay": (pspec: GObject.ParamSpec) => void;
            "notify::overlays": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Overlay.ConstructorProps {
            pass_through: boolean;
            passThrough: boolean;
            overlay: Gtk.Widget | null;
            overlays: Gtk.Widget[];
            child: Gtk.Widget | null | any;
        }
    }
    class Overlay extends Gtk.Overlay {
        static $gtype: GObject.GType<Overlay>;
        get pass_through(): boolean;
        set pass_through(val: boolean);
        get passThrough(): boolean;
        set passThrough(val: boolean);
        get overlay(): Gtk.Widget | null;
        set overlay(val: Gtk.Widget | null);
        get overlays(): Gtk.Widget[];
        set overlays(val: Gtk.Widget[]);
        get child(): Gtk.Widget | null | any;
        set child(val: Gtk.Widget | null | any);
        $signals: Overlay.SignalSignatures;
        constructor(properties?: Partial<Overlay.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Overlay;
        connect<K extends keyof Overlay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Overlay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Overlay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Overlay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Overlay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Overlay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_overlay(widget: Gtk.Widget): void;
        get_pass_through(): boolean;
        set_pass_through(value: boolean): void;
        get_overlay(): Gtk.Widget | null;
        set_overlay(value: Gtk.Widget | null): void;
        get_overlays(): Gtk.Widget[];
        set_overlays(value: Gtk.Widget[]): void;
        get_child(): Gtk.Widget | null;
        set_child(value: Gtk.Widget | null): void;
    }
    namespace Scrollable {
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            "notify::hscroll": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::kinetic-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::overlay-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement-set": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps {
            hscroll: Gtk.PolicyType;
            vscroll: Gtk.PolicyType;
        }
    }
    class Scrollable extends Gtk.ScrolledWindow {
        static $gtype: GObject.GType<Scrollable>;
        get hscroll(): Gtk.PolicyType;
        set hscroll(val: Gtk.PolicyType);
        get vscroll(): Gtk.PolicyType;
        set vscroll(val: Gtk.PolicyType);
        $signals: Scrollable.SignalSignatures;
        constructor(properties?: Partial<Scrollable.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Scrollable;
        connect<K extends keyof Scrollable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scrollable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scrollable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scrollable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scrollable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Scrollable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): Gtk.Widget;
        get_child(...args: never[]): any;
        get_hscroll(): Gtk.PolicyType;
        set_hscroll(value: Gtk.PolicyType): void;
        get_vscroll(): Gtk.PolicyType;
        set_vscroll(value: Gtk.PolicyType): void;
    }
    namespace Slider {
        interface SignalSignatures extends Gtk.Scale.SignalSignatures {
            dragged: () => void;
            "notify::vertical": (pspec: GObject.ParamSpec) => void;
            "notify::dragging": (pspec: GObject.ParamSpec) => void;
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
            "notify::lower-stepper-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::restrict-to-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::round-digits": (pspec: GObject.ParamSpec) => void;
            "notify::show-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::upper-stepper-sensitivity": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Scale.ConstructorProps {
            vertical: boolean;
            dragging: boolean;
            value: number;
            min: number;
            max: number;
            step: number;
            page: number;
        }
    }
    class Slider extends Gtk.Scale {
        static $gtype: GObject.GType<Slider>;
        get vertical(): boolean;
        set vertical(val: boolean);
        get dragging(): boolean;
        set dragging(val: boolean);
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
        get_vertical(): boolean;
        set_vertical(value: boolean): void;
        get_dragging(): boolean;
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
    namespace Stack {
        interface SignalSignatures extends Gtk.Stack.SignalSignatures {
            "notify::shown": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::hhomogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::interpolate-size": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-running": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
            "notify::vhomogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Stack.ConstructorProps {
            shown: string;
            children: Gtk.Widget[];
        }
    }
    class Stack extends Gtk.Stack {
        static $gtype: GObject.GType<Stack>;
        get shown(): string;
        set shown(val: string);
        get children(): Gtk.Widget[];
        set children(val: Gtk.Widget[]);
        $signals: Stack.SignalSignatures;
        constructor(properties?: Partial<Stack.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Stack;
        connect<K extends keyof Stack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Stack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_shown(): string;
        set_shown(value: string): void;
        get_children(): Gtk.Widget[];
        set_children(value: Gtk.Widget[]): void;
    }
    namespace Window {
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::inhibit": (pspec: GObject.ParamSpec) => void;
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
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps {
            inhibit: boolean;
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
        get inhibit(): boolean;
        set inhibit(val: boolean);
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
        get_inhibit(): boolean;
        set_inhibit(value: boolean): void;
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
            "monitor-added": (arg0: Gdk.Monitor) => void;
            "monitor-removed": (arg0: Gdk.Monitor) => void;
            "window-toggled": (arg0: Gtk.Window) => void;
            "notify::monitors": (pspec: GObject.ParamSpec) => void;
            "notify::windows": (pspec: GObject.ParamSpec) => void;
            "notify::gtk-theme": (pspec: GObject.ParamSpec) => void;
            "notify::icon-theme": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-theme": (pspec: GObject.ParamSpec) => void;
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::app-menu": (pspec: GObject.ParamSpec) => void;
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
    type BoxClass = typeof Box;
    abstract class BoxPrivate {
        static $gtype: GObject.GType<BoxPrivate>;
    }
    type ButtonClass = typeof Button;
    abstract class ButtonPrivate {
        static $gtype: GObject.GType<ButtonPrivate>;
    }
    type CenterBoxClass = typeof CenterBox;
    abstract class CenterBoxPrivate {
        static $gtype: GObject.GType<CenterBoxPrivate>;
    }
    type CircularProgressClass = typeof CircularProgress;
    abstract class CircularProgressPrivate {
        static $gtype: GObject.GType<CircularProgressPrivate>;
    }
    type EventBoxClass = typeof EventBox;
    abstract class EventBoxPrivate {
        static $gtype: GObject.GType<EventBoxPrivate>;
    }
    type IconClass = typeof Icon;
    abstract class IconPrivate {
        static $gtype: GObject.GType<IconPrivate>;
    }
    type LabelClass = typeof Label;
    abstract class LabelPrivate {
        static $gtype: GObject.GType<LabelPrivate>;
    }
    type LevelBarClass = typeof LevelBar;
    abstract class LevelBarPrivate {
        static $gtype: GObject.GType<LevelBarPrivate>;
    }
    type OverlayClass = typeof Overlay;
    abstract class OverlayPrivate {
        static $gtype: GObject.GType<OverlayPrivate>;
    }
    type ScrollableClass = typeof Scrollable;
    abstract class ScrollablePrivate {
        static $gtype: GObject.GType<ScrollablePrivate>;
    }
    type SliderClass = typeof Slider;
    abstract class SliderPrivate {
        static $gtype: GObject.GType<SliderPrivate>;
    }
    type StackClass = typeof Stack;
    abstract class StackPrivate {
        static $gtype: GObject.GType<StackPrivate>;
    }
    type WindowClass = typeof Window;
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
    }
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }
    class ClickEvent {
        static $gtype: GObject.GType<ClickEvent>;
        release: boolean;
        time: number;
        x: number;
        y: number;
        modifier: Gdk.ModifierType;
        button: MouseButton;
        init(event: Gdk.EventButton): void;
    }
    class HoverEvent {
        static $gtype: GObject.GType<HoverEvent>;
        lost: boolean;
        time: number;
        x: number;
        y: number;
        modifier: Gdk.ModifierType;
        mode: Gdk.CrossingMode;
        detail: Gdk.NotifyType;
        init(event: Gdk.EventCrossing): void;
    }
    class ScrollEvent {
        static $gtype: GObject.GType<ScrollEvent>;
        time: number;
        x: number;
        y: number;
        modifier: Gdk.ModifierType;
        direction: Gdk.ScrollDirection;
        delta_x: number;
        delta_y: number;
        init(event: Gdk.EventScroll): void;
    }
    class MotionEvent {
        static $gtype: GObject.GType<MotionEvent>;
        time: number;
        x: number;
        y: number;
        modifier: Gdk.ModifierType;
        init(event: Gdk.EventMotion): void;
    }
    const __name__: string;
    const __version__: string;
}
export default Astal;
}
declare module 'gi://Astal' {
    import Astal30 from 'gi://Astal?version=3.0';
    export default Astal30;
}
