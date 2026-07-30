declare module 'gi://Granite?version=7.0' {
import type Pango from 'gi://Pango?version=1.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gdk from 'gi://Gdk?version=4.0';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gtk from 'gi://Gtk?version=4.0';
import type Gsk from 'gi://Gsk?version=4.0';
import type Graphene from 'gi://Graphene?version=1.0';
import type Gee from 'gi://Gee?version=0.8';
export namespace Granite {
export namespace GraniteServicesSettingsSerializable {
    export interface ConstructorProps extends ServicesSettingsSerializable.ConstructorProps {}
}
export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
    class ServicesContractorError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static SERVICE_NOT_AVAILABLE: number;
        constructor(options: { message: string; code: number });
    }
    export namespace SettingsPageStatusType {
        export const $gtype: GObject.GType<SettingsPageStatusType>;
    }
    enum SettingsPageStatusType {
        ERROR,
        OFFLINE,
        SUCCESS,
        WARNING,
        NONE,
    }
    export namespace BoxSpacing {
        export const $gtype: GObject.GType<BoxSpacing>;
    }
    enum BoxSpacing {
        NONE,
        HALF,
        SINGLE,
        DOUBLE,
        LINKED,
    }
    export namespace HeaderLabelSize {
        export const $gtype: GObject.GType<HeaderLabelSize>;
    }
    enum HeaderLabelSize {
        H1,
        H2,
        H3,
        H4,
    }
    export namespace SettingsColorScheme {
        export const $gtype: GObject.GType<SettingsColorScheme>;
    }
    enum SettingsColorScheme {
        NO_PREFERENCE,
        DARK,
        LIGHT,
    }
    export namespace ToastDismissReason {
        export const $gtype: GObject.GType<ToastDismissReason>;
    }
    enum ToastDismissReason {
        EXPIRED,
        CLOSED,
        WITHDRAWN,
    }
    const CssClassACCENT: string;
    const CssClassCARD: string;
    const CssClassCHECKERBOARD: string;
    const CssClassCIRCULAR: string;
    const CssClassDESTRUCTIVE: string;
    const CssClassDIM: string;
    const CssClassERROR: string;
    const CssClassNUMERIC: string;
    const CssClassSMALL: string;
    const CssClassSUGGESTED: string;
    const CssClassSUCCESS: string;
    const CssClassWARNING: string;
    const CssClassMONOSPACE: string;
    const SettingsUriLOCATION: string;
    const SettingsUriONLINE_ACCOUNTS: string;
    const SettingsUriNETWORK: string;
    const SettingsUriPERMISSIONS: string;
    const SettingsUriNOTIFICATIONS: string;
    const SettingsUriSOUND_INPUT: string;
    const SettingsUriSHORTCUTS: string;
    const STYLE_CLASS_ACCENT: string;
    const STYLE_CLASS_BACK_BUTTON: string;
    const STYLE_CLASS_BACKGROUND: string;
    const STYLE_CLASS_BADGE: string;
    const STYLE_CLASS_CARD: string;
    const STYLE_CLASS_CHECKERBOARD: string;
    const STYLE_CLASS_CIRCULAR: string;
    const STYLE_CLASS_COLOR_BUTTON: string;
    const STYLE_CLASS_DEFAULT_DECORATION: string;
    const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
    const STYLE_CLASS_DIALOG_CONTENT_AREA: string;
    const STYLE_CLASS_FRAME: string;
    const STYLE_CLASS_H1_LABEL: string;
    const STYLE_CLASS_H2_LABEL: string;
    const STYLE_CLASS_H3_LABEL: string;
    const STYLE_CLASS_H4_LABEL: string;
    const STYLE_CLASS_KEYCAP: string;
    const STYLE_CLASS_LARGE_ICONS: string;
    const STYLE_CLASS_MODE_SWITCH: string;
    const STYLE_CLASS_OSD: string;
    const STYLE_CLASS_ROUNDED: string;
    const STYLE_CLASS_SIDEBAR: string;
    const STYLE_CLASS_SMALL_LABEL: string;
    const STYLE_CLASS_SUCCESS: string;
    const STYLE_CLASS_TERMINAL: string;
    const STYLE_CLASS_TITLE_LABEL: string;
    const STYLE_CLASS_WARMTH: string;
    const STYLE_CLASS_TEMPERATURE: string;
    const STYLE_CLASS_LINKED: string;
    const STYLE_CLASS_MENU: string;
    const STYLE_CLASS_MENUITEM: string;
    const STYLE_CLASS_DIM_LABEL: string;
    const STYLE_CLASS_ERROR: string;
    const STYLE_CLASS_FLAT: string;
    const STYLE_CLASS_MESSAGE_DIALOG: string;
    const STYLE_CLASS_RICH_LIST: string;
    const STYLE_CLASS_SUGGESTED_ACTION: string;
    const STYLE_CLASS_VIEW: string;
    const STYLE_CLASS_WARNING: string;
    const TRANSITION_DURATION_CLOSE: number;
    const TRANSITION_DURATION_IN_PLACE: number;
    const TRANSITION_DURATION_OPEN: number;
    const TOOLTIP_SECONDARY_TEXT_MARKUP: string;
    function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;
    function date_time_get_relative_datetime(date_time: GLib.DateTime): string;
    function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;
    function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;
    function date_time_seconds_to_time(seconds: number): string;
    function services_application_set_badge(count: bigint | number): globalThis.Promise<boolean>;
    function services_application_set_badge(count: bigint | number, _callback_: Gio.AsyncReadyCallback<bigint | number> | null): void;
    function services_application_set_badge(count: bigint | number, _callback_: Gio.AsyncReadyCallback<bigint | number> | null): globalThis.Promise<boolean> | void;
    function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_badge_visible(visible: boolean): globalThis.Promise<boolean>;
    function services_application_set_badge_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback<boolean> | null): void;
    function services_application_set_badge_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback<boolean> | null): globalThis.Promise<boolean> | void;
    function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress(progress: number): globalThis.Promise<boolean>;
    function services_application_set_progress(progress: number, _callback_: Gio.AsyncReadyCallback<number> | null): void;
    function services_application_set_progress(progress: number, _callback_: Gio.AsyncReadyCallback<number> | null): globalThis.Promise<boolean> | void;
    function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress_visible(visible: boolean): globalThis.Promise<boolean>;
    function services_application_set_progress_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback<boolean> | null): void;
    function services_application_set_progress_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback<boolean> | null): globalThis.Promise<boolean> | void;
    function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;
    function widgets_utils_set_color_primary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null;
    function box_spacing_to_string(self: BoxSpacing): string;
    function header_label_size_to_string(self: HeaderLabelSize): string;
    function init(): void;
    function accel_to_string(accel: string | null): string;
    function markup_accel_tooltip(accels: string[] | null, description: string | null): string;
    function contrasting_foreground_color(bg_color: Gdk.RGBA): Gdk.RGBA;
    namespace ServicesContractorProxy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "contracts-changed": () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ServicesContractorProxy extends GObject.Object {
        static $gtype: GObject.GType<ServicesContractorProxy>;
        $signals: ServicesContractorProxy.SignalSignatures;
        constructor(properties?: Partial<ServicesContractorProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ServicesContractorProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesContractorProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesContractorProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServicesContractorProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_instance(): ServicesContractorProxy;
        static get_all_contracts(): Gee.List;
        static get_contracts_by_mime(mime_type: string): Gee.List;
        static get_contracts_by_mimelist(mime_types: string[]): Gee.List;
        static get_contracts_for_file(file: Gio.File): Gee.List;
        static get_contracts_for_files(files: Gio.File[]): Gee.List;
    }
    namespace ServicesSystem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ServicesSystem extends GObject.Object {
        static $gtype: GObject.GType<ServicesSystem>;
        $signals: ServicesSystem.SignalSignatures;
        constructor(properties?: Partial<ServicesSystem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ServicesSystem;
        connect<K extends keyof ServicesSystem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesSystem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesSystem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServicesSystem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static history_is_enabled(): boolean;
    }
    namespace StyleManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_scheme: SettingsColorScheme;
            colorScheme: SettingsColorScheme;
            display: Gdk.Display;
        }
    }
    class StyleManager extends GObject.Object {
        static $gtype: GObject.GType<StyleManager>;
        get color_scheme(): SettingsColorScheme;
        set color_scheme(val: SettingsColorScheme);
        get colorScheme(): SettingsColorScheme;
        set colorScheme(val: SettingsColorScheme);
        get display(): Gdk.Display;
        $signals: StyleManager.SignalSignatures;
        constructor(properties?: Partial<StyleManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): StyleManager;
        static get_for_display(display: Gdk.Display): StyleManager;
        get_color_scheme(): SettingsColorScheme;
        set_color_scheme(value: SettingsColorScheme): void;
        get_display(): Gdk.Display;
    }
    namespace SettingsPage {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::status-type": (pspec: GObject.ParamSpec) => void;
            "notify::display-widget": (pspec: GObject.ParamSpec) => void;
            "notify::header": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
            status_type: SettingsPageStatusType;
            statusType: SettingsPageStatusType;
            display_widget: Gtk.Widget | null;
            displayWidget: Gtk.Widget;
            header: string | null;
            status: string;
            icon_name: string | null;
            iconName: string;
            title: string;
            child: Gtk.Widget;
        }
    }
    abstract class SettingsPage extends Gtk.Box {
        static $gtype: GObject.GType<SettingsPage>;
        get status_type(): SettingsPageStatusType;
        set status_type(val: SettingsPageStatusType);
        get statusType(): SettingsPageStatusType;
        set statusType(val: SettingsPageStatusType);
        get display_widget(): Gtk.Widget | null;
        get displayWidget(): Gtk.Widget;
        get header(): string | null;
        get status(): string;
        set status(val: string);
        get icon_name(): string | null;
        set icon_name(val: string | null);
        get iconName(): string;
        set iconName(val: string);
        get title(): string;
        set title(val: string);
        get child(): Gtk.Widget;
        set child(val: Gtk.Widget);
        $signals: SettingsPage.SignalSignatures;
        constructor(properties?: Partial<SettingsPage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SettingsPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SettingsPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SettingsPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_status_type(): SettingsPageStatusType;
        set_status_type(value: SettingsPageStatusType): void;
        get_display_widget(): Gtk.Widget | null;
        get_header(): string | null;
        get_status(): string;
        set_status(value: string): void;
        get_icon_name(): string | null;
        set_icon_name(value: string | null): void;
        get_title(): string;
        set_title(value: string): void;
        get_child(): Gtk.Widget;
        set_child(value: Gtk.Widget): void;
    }
    namespace SimpleSettingsPage {
        interface SignalSignatures extends SettingsPage.SignalSignatures {
            "notify::action-area": (pspec: GObject.ParamSpec) => void;
            "notify::content-area": (pspec: GObject.ParamSpec) => void;
            "notify::status-switch": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::status-type": (pspec: GObject.ParamSpec) => void;
            "notify::display-widget": (pspec: GObject.ParamSpec) => void;
            "notify::header": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends SettingsPage.ConstructorProps {
            action_area: Gtk.Box;
            actionArea: Gtk.Box;
            content_area: Gtk.Grid;
            contentArea: Gtk.Grid;
            status_switch: Gtk.Switch | null;
            statusSwitch: Gtk.Switch;
            activatable: boolean;
            description: string;
        }
    }
    abstract class SimpleSettingsPage extends SettingsPage {
        static $gtype: GObject.GType<SimpleSettingsPage>;
        get action_area(): Gtk.Box;
        get actionArea(): Gtk.Box;
        get content_area(): Gtk.Grid;
        get contentArea(): Gtk.Grid;
        get status_switch(): Gtk.Switch | null;
        get statusSwitch(): Gtk.Switch;
        get activatable(): boolean;
        get description(): string;
        set description(val: string);
        $signals: SimpleSettingsPage.SignalSignatures;
        constructor(properties?: Partial<SimpleSettingsPage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SimpleSettingsPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleSettingsPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleSettingsPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleSettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action_area(): Gtk.Box;
        get_content_area(): Gtk.Grid;
        get_status_switch(): Gtk.Switch | null;
        get_activatable(): boolean;
        get_description(): string;
        set_description(value: string): void;
    }
    namespace AccelLabel {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::accel-string": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
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
            action_name: string;
            actionName: string;
            accel_string: string | null;
            accelString: string;
            label: string;
        }
    }
    class AccelLabel extends Gtk.Box {
        static $gtype: GObject.GType<AccelLabel>;
        get action_name(): string;
        set action_name(val: string);
        get actionName(): string;
        set actionName(val: string);
        get accel_string(): string | null;
        set accel_string(val: string | null);
        get accelString(): string;
        set accelString(val: string);
        get label(): string;
        set label(val: string);
        $signals: AccelLabel.SignalSignatures;
        constructor(properties?: Partial<AccelLabel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](label: string, accel_string: string | null): AccelLabel;
        static ["new"](...args: never[]): any;
        static from_action_name(label: string, action_name: string): AccelLabel;
        connect<K extends keyof AccelLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccelLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccelLabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AccelLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action_name(): string;
        set_action_name(value: string): void;
        get_accel_string(): string | null;
        set_accel_string(value: string | null): void;
        get_label(): string;
        set_label(value: string): void;
    }
    namespace BackButton {
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::can-shrink": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Button.ConstructorProps {
            label: string | any;
        }
    }
    class BackButton extends Gtk.Button {
        static $gtype: GObject.GType<BackButton>;
        get label(): string | any;
        set label(val: string | any);
        $signals: BackButton.SignalSignatures;
        constructor(properties?: Partial<BackButton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](label: string): BackButton;
        static ["new"](...args: never[]): any;
        connect<K extends keyof BackButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BackButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_label(): string;
        get_label(...args: never[]): any;
        set_label(value: string): void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            child: Gtk.Widget | null;
        }
    }
    class Bin extends Gtk.Widget {
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
    }
    namespace Box {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::child-spacing": (pspec: GObject.ParamSpec) => void;
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
            child_spacing: BoxSpacing;
            childSpacing: BoxSpacing;
        }
    }
    class Box extends Gtk.Box {
        static $gtype: GObject.GType<Box>;
        get child_spacing(): BoxSpacing;
        set child_spacing(val: BoxSpacing);
        get childSpacing(): BoxSpacing;
        set childSpacing(val: BoxSpacing);
        $signals: Box.SignalSignatures;
        constructor(properties?: Partial<Box.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](orientation: Gtk.Orientation, child_spacing: BoxSpacing): Box;
        static ["new"](...args: never[]): any;
        connect<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Box.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Box.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child_spacing(): BoxSpacing;
        set_child_spacing(value: BoxSpacing): void;
    }
    namespace DatePicker {
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::date": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-primary-text": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-secondary-text": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Gtk.Buildable.ConstructorProps {
            format: string;
            date: GLib.DateTime;
        }
    }
    class DatePicker extends Gtk.Entry implements Gtk.Buildable {
        static $gtype: GObject.GType<DatePicker>;
        get format(): string;
        get date(): GLib.DateTime;
        set date(val: GLib.DateTime);
        $signals: DatePicker.SignalSignatures;
        constructor(properties?: Partial<DatePicker.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static with_format(format: string): DatePicker;
        static ["new"](): DatePicker;
        connect<K extends keyof DatePicker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DatePicker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DatePicker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DatePicker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DatePicker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DatePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_format(): string;
        get_date(): GLib.DateTime;
        set_date(value: GLib.DateTime): void;
    }
    namespace Dialog {
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {}
    }
    class Dialog extends Gtk.Dialog {
        static $gtype: GObject.GType<Dialog>;
        $signals: Dialog.SignalSignatures;
        constructor(properties?: Partial<Dialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Dialog;
        connect<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Dialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_button(button_text: string, response_id: number): Gtk.Widget;
    }
    namespace HeaderLabel {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonic-widget": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-text": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            label: string;
            mnemonic_widget: Gtk.Widget | null;
            mnemonicWidget: Gtk.Widget;
            size: HeaderLabelSize;
            ellipsize: Pango.EllipsizeMode;
            secondary_text: string | null;
            secondaryText: string;
        }
    }
    class HeaderLabel extends Gtk.Widget {
        static $gtype: GObject.GType<HeaderLabel>;
        get label(): string;
        set label(val: string);
        get mnemonic_widget(): Gtk.Widget | null;
        set mnemonic_widget(val: Gtk.Widget | null);
        get mnemonicWidget(): Gtk.Widget;
        set mnemonicWidget(val: Gtk.Widget);
        get size(): HeaderLabelSize;
        set size(val: HeaderLabelSize);
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);
        get secondary_text(): string | null;
        set secondary_text(val: string | null);
        get secondaryText(): string;
        set secondaryText(val: string);
        $signals: HeaderLabel.SignalSignatures;
        constructor(properties?: Partial<HeaderLabel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](label: string): HeaderLabel;
        connect<K extends keyof HeaderLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HeaderLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HeaderLabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HeaderLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_label(): string;
        set_label(value: string): void;
        get_mnemonic_widget(): Gtk.Widget | null;
        set_mnemonic_widget(value: Gtk.Widget | null): void;
        get_size(): HeaderLabelSize;
        get_size(...args: never[]): any;
        set_size(value: HeaderLabelSize): void;
        get_ellipsize(): Pango.EllipsizeMode;
        set_ellipsize(value: Pango.EllipsizeMode): void;
        get_secondary_text(): string | null;
        set_secondary_text(value: string | null): void;
    }
    namespace HyperTextView {
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.TextView.ConstructorProps {}
    }
    class HyperTextView extends Gtk.TextView {
        static $gtype: GObject.GType<HyperTextView>;
        $signals: HyperTextView.SignalSignatures;
        constructor(properties?: Partial<HyperTextView.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): HyperTextView;
        connect<K extends keyof HyperTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HyperTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HyperTextView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HyperTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ListItem {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            text: string;
            description: string | null;
            child: Gtk.Widget | null;
            menu_model: Gio.MenuModel | null;
            menuModel: Gio.MenuModel;
        }
    }
    class ListItem extends Gtk.Widget {
        static $gtype: GObject.GType<ListItem>;
        get text(): string;
        set text(val: string);
        get description(): string | null;
        set description(val: string | null);
        get child(): Gtk.Widget | null;
        set child(val: Gtk.Widget | null);
        get menu_model(): Gio.MenuModel | null;
        set menu_model(val: Gio.MenuModel | null);
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);
        $signals: ListItem.SignalSignatures;
        constructor(properties?: Partial<ListItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ListItem;
        connect<K extends keyof ListItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ListItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ListItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ListItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_text(): string;
        set_text(value: string): void;
        get_description(): string | null;
        set_description(value: string | null): void;
        get_child(): Gtk.Widget | null;
        set_child(value: Gtk.Widget | null): void;
        get_menu_model(): Gio.MenuModel | null;
        set_menu_model(value: Gio.MenuModel | null): void;
    }
    namespace MessageDialog {
        interface SignalSignatures extends Dialog.SignalSignatures {
            "notify::primary-text": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-text": (pspec: GObject.ParamSpec) => void;
            "notify::image-icon": (pspec: GObject.ParamSpec) => void;
            "notify::badge-icon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-label": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-label": (pspec: GObject.ParamSpec) => void;
            "notify::buttons": (pspec: GObject.ParamSpec) => void;
            "notify::custom-bin": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Dialog.ConstructorProps {
            primary_text: string;
            primaryText: string;
            secondary_text: string;
            secondaryText: string;
            image_icon: Gio.Icon;
            imageIcon: Gio.Icon;
            badge_icon: Gio.Icon;
            badgeIcon: Gio.Icon;
            primary_label: Gtk.Label;
            primaryLabel: Gtk.Label;
            secondary_label: Gtk.Label;
            secondaryLabel: Gtk.Label;
            buttons: Gtk.ButtonsType;
            custom_bin: Gtk.Box;
            customBin: Gtk.Box;
        }
    }
    class MessageDialog extends Dialog {
        static $gtype: GObject.GType<MessageDialog>;
        get primary_text(): string;
        set primary_text(val: string);
        get primaryText(): string;
        set primaryText(val: string);
        get secondary_text(): string;
        set secondary_text(val: string);
        get secondaryText(): string;
        set secondaryText(val: string);
        get image_icon(): Gio.Icon;
        set image_icon(val: Gio.Icon);
        get imageIcon(): Gio.Icon;
        set imageIcon(val: Gio.Icon);
        get badge_icon(): Gio.Icon;
        set badge_icon(val: Gio.Icon);
        get badgeIcon(): Gio.Icon;
        set badgeIcon(val: Gio.Icon);
        get primary_label(): Gtk.Label;
        get primaryLabel(): Gtk.Label;
        get secondary_label(): Gtk.Label;
        get secondaryLabel(): Gtk.Label;
        set buttons(val: Gtk.ButtonsType);
        get custom_bin(): Gtk.Box;
        get customBin(): Gtk.Box;
        $signals: MessageDialog.SignalSignatures;
        constructor(properties?: Partial<MessageDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType): MessageDialog;
        static ["new"](...args: never[]): any;
        static with_image_from_icon_name(primary_text: string, secondary_text: string, image_icon_name: string, buttons: Gtk.ButtonsType): MessageDialog;
        connect<K extends keyof MessageDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MessageDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_primary_text(): string;
        set_primary_text(value: string): void;
        get_secondary_text(): string;
        set_secondary_text(value: string): void;
        get_image_icon(): Gio.Icon;
        set_image_icon(value: Gio.Icon): void;
        get_badge_icon(): Gio.Icon;
        set_badge_icon(value: Gio.Icon): void;
        get_primary_label(): Gtk.Label;
        get_secondary_label(): Gtk.Label;
        get_custom_bin(): Gtk.Box;
        show_error_details(error_message: string): void;
    }
    namespace ModeSwitch {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
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
            active: boolean;
            primary_icon_gicon: Gio.Icon;
            primaryIconGicon: Gio.Icon;
            primary_icon_name: string;
            primaryIconName: string;
            primary_icon_tooltip_text: string;
            primaryIconTooltipText: string;
            secondary_icon_gicon: Gio.Icon;
            secondaryIconGicon: Gio.Icon;
            secondary_icon_name: string;
            secondaryIconName: string;
            secondary_icon_tooltip_text: string;
            secondaryIconTooltipText: string;
        }
    }
    class ModeSwitch extends Gtk.Box {
        static $gtype: GObject.GType<ModeSwitch>;
        get active(): boolean;
        set active(val: boolean);
        get primary_icon_gicon(): Gio.Icon;
        set primary_icon_gicon(val: Gio.Icon);
        get primaryIconGicon(): Gio.Icon;
        set primaryIconGicon(val: Gio.Icon);
        get primary_icon_name(): string;
        set primary_icon_name(val: string);
        get primaryIconName(): string;
        set primaryIconName(val: string);
        get primary_icon_tooltip_text(): string;
        set primary_icon_tooltip_text(val: string);
        get primaryIconTooltipText(): string;
        set primaryIconTooltipText(val: string);
        get secondary_icon_gicon(): Gio.Icon;
        set secondary_icon_gicon(val: Gio.Icon);
        get secondaryIconGicon(): Gio.Icon;
        set secondaryIconGicon(val: Gio.Icon);
        get secondary_icon_name(): string;
        set secondary_icon_name(val: string);
        get secondaryIconName(): string;
        set secondaryIconName(val: string);
        get secondary_icon_tooltip_text(): string;
        set secondary_icon_tooltip_text(val: string);
        get secondaryIconTooltipText(): string;
        set secondaryIconTooltipText(val: string);
        $signals: ModeSwitch.SignalSignatures;
        constructor(properties?: Partial<ModeSwitch.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;
        static ["new"](...args: never[]): any;
        static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;
        connect<K extends keyof ModeSwitch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModeSwitch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModeSwitch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModeSwitch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_active(): boolean;
        set_active(value: boolean): void;
        get_primary_icon_gicon(): Gio.Icon;
        set_primary_icon_gicon(value: Gio.Icon): void;
        get_primary_icon_name(): string;
        set_primary_icon_name(value: string): void;
        get_primary_icon_tooltip_text(): string;
        set_primary_icon_tooltip_text(value: string): void;
        get_secondary_icon_gicon(): Gio.Icon;
        set_secondary_icon_gicon(value: Gio.Icon): void;
        get_secondary_icon_name(): string;
        set_secondary_icon_name(value: string): void;
        get_secondary_icon_tooltip_text(): string;
        set_secondary_icon_tooltip_text(value: string): void;
    }
    namespace OverlayBar {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::overlay": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            overlay: Gtk.Overlay | null;
            label: string;
            active: boolean;
        }
    }
    class OverlayBar extends Gtk.Widget {
        static $gtype: GObject.GType<OverlayBar>;
        get overlay(): Gtk.Overlay | null;
        get label(): string;
        set label(val: string);
        get active(): boolean;
        set active(val: boolean);
        $signals: OverlayBar.SignalSignatures;
        constructor(properties?: Partial<OverlayBar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](overlay: Gtk.Overlay | null): OverlayBar;
        connect<K extends keyof OverlayBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OverlayBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OverlayBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OverlayBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OverlayBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OverlayBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_overlay(): Gtk.Overlay | null;
        get_label(): string;
        set_label(value: string): void;
        get_active(): boolean;
        set_active(value: boolean): void;
    }
    namespace Placeholder {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            title: string;
            description: string;
            icon: Gio.Icon;
        }
    }
    class Placeholder extends Gtk.Widget {
        static $gtype: GObject.GType<Placeholder>;
        get title(): string;
        set title(val: string);
        get description(): string;
        set description(val: string);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        $signals: Placeholder.SignalSignatures;
        constructor(properties?: Partial<Placeholder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](title: string): Placeholder;
        connect<K extends keyof Placeholder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Placeholder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Placeholder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Placeholder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        append_button(icon: Gio.Icon, label: string, description: string): Gtk.Button;
    }
    namespace SettingsSidebar {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::stack": (pspec: GObject.ParamSpec) => void;
            "notify::visible-child-name": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            stack: Gtk.Stack;
            visible_child_name: string | null;
            visibleChildName: string;
        }
    }
    class SettingsSidebar extends Gtk.Widget {
        static $gtype: GObject.GType<SettingsSidebar>;
        get stack(): Gtk.Stack;
        get visible_child_name(): string | null;
        set visible_child_name(val: string | null);
        get visibleChildName(): string;
        set visibleChildName(val: string);
        $signals: SettingsSidebar.SignalSignatures;
        constructor(properties?: Partial<SettingsSidebar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](stack: Gtk.Stack): SettingsSidebar;
        connect<K extends keyof SettingsSidebar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SettingsSidebar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SettingsSidebar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SettingsSidebar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_stack(): Gtk.Stack;
        get_visible_child_name(): string | null;
        set_visible_child_name(value: string | null): void;
    }
    namespace Settings {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::accent-color": (pspec: GObject.ParamSpec) => void;
            "notify::prefers-color-scheme": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accent_color: Gdk.RGBA;
            accentColor: Gdk.RGBA;
            prefers_color_scheme: SettingsColorScheme;
            prefersColorScheme: SettingsColorScheme;
        }
    }
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;
        get accent_color(): Gdk.RGBA;
        set accent_color(val: Gdk.RGBA);
        get accentColor(): Gdk.RGBA;
        set accentColor(val: Gdk.RGBA);
        get prefers_color_scheme(): SettingsColorScheme;
        set prefers_color_scheme(val: SettingsColorScheme);
        get prefersColorScheme(): SettingsColorScheme;
        set prefersColorScheme(val: SettingsColorScheme);
        $signals: Settings.SignalSignatures;
        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): Settings;
        get_accent_color(): Gdk.RGBA;
        get_prefers_color_scheme(): SettingsColorScheme;
    }
    namespace SwitchModelButton {
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::group": (pspec: GObject.ParamSpec) => void;
            "notify::can-shrink": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps {
            text: string;
            description: string | null;
        }
    }
    class SwitchModelButton extends Gtk.ToggleButton {
        static $gtype: GObject.GType<SwitchModelButton>;
        get text(): string;
        set text(val: string);
        get description(): string | null;
        set description(val: string | null);
        $signals: SwitchModelButton.SignalSignatures;
        constructor(properties?: Partial<SwitchModelButton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](text: string): SwitchModelButton;
        static ["new"](...args: never[]): any;
        connect<K extends keyof SwitchModelButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwitchModelButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwitchModelButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SwitchModelButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_text(): string;
        set_text(value: string): void;
        get_description(): string | null;
        set_description(value: string | null): void;
    }
    namespace TimePicker {
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            "time-changed": () => void;
            "notify::format-12": (pspec: GObject.ParamSpec) => void;
            "notify::format12": (pspec: GObject.ParamSpec) => void;
            "notify::format-24": (pspec: GObject.ParamSpec) => void;
            "notify::format24": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-primary-text": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-secondary-text": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            format_12: string;
            format12: string;
            format_24: string;
            format24: string;
            time: GLib.DateTime;
        }
    }
    class TimePicker extends Gtk.Entry {
        static $gtype: GObject.GType<TimePicker>;
        get format_12(): string;
        get format12(): string;
        get format_24(): string;
        get format24(): string;
        get time(): GLib.DateTime;
        set time(val: GLib.DateTime);
        $signals: TimePicker.SignalSignatures;
        constructor(properties?: Partial<TimePicker.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static with_format(format_12: string, format_24: string): TimePicker;
        static ["new"](): TimePicker;
        connect<K extends keyof TimePicker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimePicker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TimePicker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimePicker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TimePicker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_format_12(): string;
        get_format_24(): string;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
    }
    namespace ToolBox {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::content": (pspec: GObject.ParamSpec) => void;
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
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps {
            content: Gtk.Widget;
        }
    }
    class ToolBox extends Gtk.Widget implements Gtk.Accessible {
        static $gtype: GObject.GType<ToolBox>;
        get content(): Gtk.Widget;
        set content(val: Gtk.Widget);
        $signals: ToolBox.SignalSignatures;
        constructor(properties?: Partial<ToolBox.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ToolBox;
        connect<K extends keyof ToolBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ToolBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ToolBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ToolBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ToolBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ToolBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content(): Gtk.Widget;
        set_content(value: Gtk.Widget): void;
        add_top_bar(widget: Gtk.Widget): void;
        add_bottom_bar(widget: Gtk.Widget): void;
        remove(widget: Gtk.Widget): void;
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        get_accessible_id(): string | null;
        get_accessible_parent(): Gtk.Accessible | null;
        get_accessible_role(): Gtk.AccessibleRole;
        get_at_context(): Gtk.ATContext;
        get_bounds(): [boolean, number, number, number, number];
        get_first_accessible_child(): Gtk.Accessible | null;
        get_next_accessible_sibling(): Gtk.Accessible | null;
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        reset_property(property: Gtk.AccessibleProperty): void;
        reset_relation(relation: Gtk.AccessibleRelation): void;
        reset_state(state: Gtk.AccessibleState): void;
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;
        update_platform_state(state: Gtk.AccessiblePlatformState): void;
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        vfunc_get_accessible_id(): string | null;
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        vfunc_get_at_context(): Gtk.ATContext | null;
        vfunc_get_bounds(): [boolean, number, number, number, number];
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
    }
    namespace Toast {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            closed: () => void;
            dismissed: (arg0: ToastDismissReason) => void;
            "default-action": () => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            title: string;
        }
    }
    class Toast extends Gtk.Widget {
        static $gtype: GObject.GType<Toast>;
        get title(): string;
        set title(val: string);
        $signals: Toast.SignalSignatures;
        constructor(properties?: Partial<Toast.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](title: string): Toast;
        connect<K extends keyof Toast.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Toast.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Toast.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Toast.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Toast.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Toast.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_title(): string;
        set_title(value: string): void;
        set_default_action(label: string | null): void;
        send_notification(): void;
        withdraw(): void;
    }
    namespace ValidatedEntry {
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            "notify::is-valid": (pspec: GObject.ParamSpec) => void;
            "notify::min-length": (pspec: GObject.ParamSpec) => void;
            "notify::regex": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-primary-text": (pspec: GObject.ParamSpec) => void;
            "notify::menu-entry-icon-secondary-text": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            is_valid: boolean;
            isValid: boolean;
            min_length: number;
            minLength: number;
            regex: GLib.Regex;
        }
    }
    class ValidatedEntry extends Gtk.Entry {
        static $gtype: GObject.GType<ValidatedEntry>;
        get is_valid(): boolean;
        set is_valid(val: boolean);
        get isValid(): boolean;
        set isValid(val: boolean);
        get min_length(): number;
        set min_length(val: number);
        get minLength(): number;
        set minLength(val: number);
        get regex(): GLib.Regex;
        set regex(val: GLib.Regex);
        $signals: ValidatedEntry.SignalSignatures;
        constructor(properties?: Partial<ValidatedEntry.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static from_regex(regex_arg: GLib.Regex): ValidatedEntry;
        static ["new"](): ValidatedEntry;
        connect<K extends keyof ValidatedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValidatedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValidatedEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValidatedEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_is_valid(): boolean;
        set_is_valid(value: boolean): void;
        get_min_length(): number;
        set_min_length(value: number): void;
        get_regex(): GLib.Regex;
        set_regex(value: GLib.Regex): void;
    }
    type ServicesContractorProxyClass = typeof ServicesContractorProxy;
    abstract class ServicesContractorProxyPrivate {
        static $gtype: GObject.GType<ServicesContractorProxyPrivate>;
    }
    type ServicesSystemClass = typeof ServicesSystem;
    abstract class ServicesSystemPrivate {
        static $gtype: GObject.GType<ServicesSystemPrivate>;
    }
    type ServicesContractIface = typeof ServicesContract;
    type ServicesSettingsSerializableIface = typeof ServicesSettingsSerializable;
    type StyleManagerClass = typeof StyleManager;
    abstract class StyleManagerPrivate {
        static $gtype: GObject.GType<StyleManagerPrivate>;
    }
    type SettingsPageClass = typeof SettingsPage;
    abstract class SettingsPagePrivate {
        static $gtype: GObject.GType<SettingsPagePrivate>;
    }
    type SimpleSettingsPageClass = typeof SimpleSettingsPage;
    abstract class SimpleSettingsPagePrivate {
        static $gtype: GObject.GType<SimpleSettingsPagePrivate>;
    }
    type AccelLabelClass = typeof AccelLabel;
    abstract class AccelLabelPrivate {
        static $gtype: GObject.GType<AccelLabelPrivate>;
    }
    type BackButtonClass = typeof BackButton;
    abstract class BackButtonPrivate {
        static $gtype: GObject.GType<BackButtonPrivate>;
    }
    type BinClass = typeof Bin;
    abstract class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;
    }
    type BoxClass = typeof Box;
    abstract class BoxPrivate {
        static $gtype: GObject.GType<BoxPrivate>;
    }
    type DatePickerClass = typeof DatePicker;
    abstract class DatePickerPrivate {
        static $gtype: GObject.GType<DatePickerPrivate>;
    }
    type DialogClass = typeof Dialog;
    abstract class DialogPrivate {
        static $gtype: GObject.GType<DialogPrivate>;
    }
    type HeaderLabelClass = typeof HeaderLabel;
    abstract class HeaderLabelPrivate {
        static $gtype: GObject.GType<HeaderLabelPrivate>;
    }
    type HyperTextViewClass = typeof HyperTextView;
    abstract class HyperTextViewPrivate {
        static $gtype: GObject.GType<HyperTextViewPrivate>;
    }
    type ListItemClass = typeof ListItem;
    abstract class ListItemPrivate {
        static $gtype: GObject.GType<ListItemPrivate>;
    }
    type MessageDialogClass = typeof MessageDialog;
    abstract class MessageDialogPrivate {
        static $gtype: GObject.GType<MessageDialogPrivate>;
    }
    type ModeSwitchClass = typeof ModeSwitch;
    abstract class ModeSwitchPrivate {
        static $gtype: GObject.GType<ModeSwitchPrivate>;
    }
    type OverlayBarClass = typeof OverlayBar;
    abstract class OverlayBarPrivate {
        static $gtype: GObject.GType<OverlayBarPrivate>;
    }
    type PlaceholderClass = typeof Placeholder;
    abstract class PlaceholderPrivate {
        static $gtype: GObject.GType<PlaceholderPrivate>;
    }
    type SettingsSidebarClass = typeof SettingsSidebar;
    abstract class SettingsSidebarPrivate {
        static $gtype: GObject.GType<SettingsSidebarPrivate>;
    }
    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
    }
    type SwitchModelButtonClass = typeof SwitchModelButton;
    abstract class SwitchModelButtonPrivate {
        static $gtype: GObject.GType<SwitchModelButtonPrivate>;
    }
    type TimePickerClass = typeof TimePicker;
    abstract class TimePickerPrivate {
        static $gtype: GObject.GType<TimePickerPrivate>;
    }
    type ToolBoxClass = typeof ToolBox;
    abstract class ToolBoxPrivate {
        static $gtype: GObject.GType<ToolBoxPrivate>;
    }
    type ToastClass = typeof Toast;
    abstract class ToastPrivate {
        static $gtype: GObject.GType<ToastPrivate>;
    }
    type ValidatedEntryClass = typeof ValidatedEntry;
    abstract class ValidatedEntryPrivate {
        static $gtype: GObject.GType<ValidatedEntryPrivate>;
    }
    namespace ServicesContract {
        interface Interface {
            vfunc_get_display_name(): string;
            vfunc_get_description(): string;
            vfunc_get_icon(): Gio.Icon;
            vfunc_execute_with_file(file: Gio.File): void;
            vfunc_execute_with_files(files: Gio.File[]): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ServicesContractNamespace {
        $gtype: GObject.GType<ServicesContract>;
        prototype: ServicesContract;
    }
    interface ServicesContract extends GObject.Object, ServicesContract.Interface {
        get_display_name(): string;
        get_description(): string;
        get_icon(): Gio.Icon;
        execute_with_file(file: Gio.File): void;
        execute_with_files(files: Gio.File[]): void;
    }
    export const ServicesContract: ServicesContractNamespace & {
        new (): ServicesContract; 
    };
    namespace ServicesSettingsSerializable {
        interface Interface {
            vfunc_settings_serialize(): string;
            vfunc_settings_deserialize(s: string): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ServicesSettingsSerializableNamespace {
        $gtype: GObject.GType<ServicesSettingsSerializable>;
        prototype: ServicesSettingsSerializable;
    }
    interface ServicesSettingsSerializable extends GObject.Object, ServicesSettingsSerializable.Interface {
        settings_serialize(): string;
        settings_deserialize(s: string): void;
    }
    export const ServicesSettingsSerializable: ServicesSettingsSerializableNamespace & {
        new (): ServicesSettingsSerializable; 
    };
    const __name__: string;
    const __version__: string;
}
export default Granite;
}
declare module 'gi://Granite' {
    import Granite70 from 'gi://Granite?version=7.0';
    export default Granite70;
}
