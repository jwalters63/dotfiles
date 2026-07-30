declare module 'gi://NMA4?version=1.0' {
import type NM from 'gi://NM?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gtk from 'gi://Gtk?version=4.0';
import type Gsk from 'gi://Gsk?version=4.0';
import type Graphene from 'gi://Graphene?version=1.0';
import type Gdk from 'gi://Gdk?version=4.0';
import type cairo from 'cairo';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
export namespace NMA4 {
    enum CertChooserFlags {
        NONE,
        CERT,
        PASSWORDS,
        PEM,
        NO_PASSWORDS,
    }
    enum MobileFamily {
        UNKNOWN,
        "3GPP",
        CDMA,
    }
    const BAR_CODE_SIZE: string;
    const BAR_CODE_TEXT: string;
    const BAR_CODE_WIDGET_CONNECTION: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string, string];
    function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;
    function utils_setup_password_storage(passwd_entry: Gtk.Widget, initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
    function utils_update_password_storage(passwd_entry: Gtk.Widget, secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
    interface MobileWizardCallback {
        (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod): void;
    }
    namespace BarCode {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            text: string;
        }
    }
    class BarCode extends GObject.Object {
        static $gtype: GObject.GType<BarCode>;
        get size(): number;
        set text(val: string);
        $signals: BarCode.SignalSignatures;
        constructor(properties?: Partial<BarCode.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](text: string): BarCode;
        connect<K extends keyof BarCode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BarCode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BarCode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BarCode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        draw(cr: cairo.Context): void;
        get_size(): number;
        set_text(text: string): void;
    }
    namespace BarCodeWidget {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            connection: NM.Connection;
        }
    }
    class BarCodeWidget extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<BarCodeWidget>;
        get connection(): NM.Connection;
        set connection(val: NM.Connection);
        $signals: BarCodeWidget.SignalSignatures;
        constructor(properties?: Partial<BarCodeWidget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCodeWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BarCodeWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BarCodeWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BarCodeWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        get_orientation(): Gtk.Orientation;
        set_orientation(orientation: Gtk.Orientation): void;
    }
    namespace CertChooser {
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "cert-password-validate": () => GLib.Error;
            "cert-validate": () => GLib.Error;
            changed: () => void;
            "key-password-validate": () => GLib.Error;
            "key-validate": () => GLib.Error;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            flags: number;
            title: string;
        }
    }
    class CertChooser extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<CertChooser>;
        set flags(val: number);
        set title(val: string);
        $signals: CertChooser.SignalSignatures;
        constructor(properties?: Partial<CertChooser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](title: string, flags: CertChooserFlags): CertChooser;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CertChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_to_size_group(group: Gtk.SizeGroup): void;
        get_cert(): [string | null, NM.Setting8021xCKScheme];
        get_cert_password(): string;
        get_cert_password_flags(): NM.SettingSecretFlags;
        get_cert_uri(): string | null;
        get_key(): [string | null, NM.Setting8021xCKScheme];
        get_key_password(): string;
        get_key_password_flags(): NM.SettingSecretFlags;
        get_key_uri(): string | null;
        set_cert(value: string, scheme: NM.Setting8021xCKScheme): void;
        set_cert_password(password: string): void;
        set_cert_uri(uri: string): void;
        set_key(value: string, scheme: NM.Setting8021xCKScheme): void;
        set_key_password(password: string): void;
        set_key_uri(uri: string): void;
        setup_cert_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
        setup_key_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
        update_cert_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
        update_key_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
        validate(): boolean;
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        get_orientation(): Gtk.Orientation;
        set_orientation(orientation: Gtk.Orientation): void;
    }
    namespace MobileProvidersDatabase {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::country-codes": (pspec: GObject.ParamSpec) => void;
            "notify::service-providers": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            country_codes: string;
            countryCodes: string;
            service_providers: string;
            serviceProviders: string;
        }
    }
    class MobileProvidersDatabase extends GObject.Object implements Gio.AsyncInitable<MobileProvidersDatabase>, Gio.Initable {
        static $gtype: GObject.GType<MobileProvidersDatabase>;
        get country_codes(): string;
        get countryCodes(): string;
        get service_providers(): string;
        get serviceProviders(): string;
        $signals: MobileProvidersDatabase.SignalSignatures;
        constructor(properties?: Partial<MobileProvidersDatabase.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
        static new_finish(...args: never[]): any;
        static new_sync(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null): MobileProvidersDatabase;
        connect<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileProvidersDatabase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileProvidersDatabase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MobileProvidersDatabase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MobileProvidersDatabase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MobileProvidersDatabase> | null): void;
        dump(): void;
        get_countries(): { [key: string]: CountryInfo };
        lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
        lookup_cdma_sid(sid: number): MobileProvider;
        lookup_country(country_code: string): CountryInfo;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace MobileWizard {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class MobileWizard extends GObject.Object {
        static $gtype: GObject.GType<MobileWizard>;
        $signals: MobileWizard.SignalSignatures;
        constructor(properties?: Partial<MobileWizard.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MobileWizard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileWizard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MobileWizard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MobileWizard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MobileWizard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MobileWizard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        destroy(): void;
        present(): void;
    }
    namespace VpnPasswordDialog {
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
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {}
    }
    class VpnPasswordDialog extends Gtk.Dialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<VpnPasswordDialog>;
        $signals: VpnPasswordDialog.SignalSignatures;
        constructor(properties?: Partial<VpnPasswordDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](title: string, message: string, password: string): VpnPasswordDialog;
        static ["new"](...args: never[]): any;
        connect<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VpnPasswordDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VpnPasswordDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VpnPasswordDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VpnPasswordDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        focus_password(): void;
        focus_password_secondary(): void;
        focus_password_ternary(): void;
        get_password(): string;
        get_password_secondary(): string;
        get_password_ternary(): string;
        run_and_block(): boolean;
        set_password(password: string): void;
        set_password_label(label: string): void;
        set_password_secondary(password_secondary: string): void;
        set_password_secondary_label(label: string): void;
        set_password_ternary(password_ternary: string): void;
        set_password_ternary_label(label: string): void;
        set_show_password(show: boolean): void;
        set_show_password_secondary(show: boolean): void;
        set_show_password_ternary(show: boolean): void;
    }
    namespace WifiDialog {
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
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {}
    }
    class WifiDialog extends Gtk.Dialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<WifiDialog>;
        $signals: WifiDialog.SignalSignatures;
        constructor(properties?: Partial<WifiDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](client: NM.Client, connection: NM.Connection, device: NM.Device, ap: NM.AccessPoint, secrets_only: boolean): WifiDialog;
        static ["new"](...args: never[]): any;
        static new_for_create(client: NM.Client): WifiDialog;
        static new_for_hidden(client: NM.Client): WifiDialog;
        static new_for_other(client: NM.Client): WifiDialog;
        static new_for_secrets(client: NM.Client, connection: NM.Connection, secrets_setting_name: string, secrets_hints: string): WifiDialog;
        connect<K extends keyof WifiDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WifiDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WifiDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WifiDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WifiDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WifiDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_connection(): [NM.Connection, NM.Device, NM.AccessPoint];
        get_nag_ignored(): boolean;
        nag_user(): Gtk.Widget;
        set_nag_ignored(ignored: boolean): void;
    }
    type BarCodeClass = typeof BarCode;
    type BarCodeWidgetClass = typeof BarCodeWidget;
    type CertChooserClass = typeof CertChooser;
    abstract class CountryInfo {
        static $gtype: GObject.GType<CountryInfo>;
        get_country_code(): string;
        get_country_name(): string;
        get_providers(): MobileProvider[];
        ref(): CountryInfo;
        unref(): void;
    }
    abstract class MobileAccessMethod {
        static $gtype: GObject.GType<MobileAccessMethod>;
        get_3gpp_apn(): string;
        get_dns(): string[];
        get_family(): MobileFamily;
        get_gateway(): string;
        get_name(): string;
        get_password(): string;
        get_username(): string;
        ref(): MobileAccessMethod;
        unref(): void;
    }
    abstract class MobileProvider {
        static $gtype: GObject.GType<MobileProvider>;
        get_3gpp_mcc_mnc(): string[];
        get_cdma_sid(): number[];
        get_methods(): MobileAccessMethod[];
        get_name(): string;
        ref(): MobileProvider;
        unref(): void;
    }
    type MobileProvidersDatabaseClass = typeof MobileProvidersDatabase;
    abstract class MobileProvidersDatabasePrivate {
        static $gtype: GObject.GType<MobileProvidersDatabasePrivate>;
    }
    class MobileWizardAccessMethod {
        static $gtype: GObject.GType<MobileWizardAccessMethod>;
        provider_name: string;
        plan_name: string;
        devtype: NM.DeviceModemCapabilities;
        username: string;
        password: string;
        gsm_apn: string;
    }
    type MobileWizardClass = typeof MobileWizard;
    type VpnPasswordDialogClass = typeof VpnPasswordDialog;
    type WifiDialogClass = typeof WifiDialog;
    abstract class Ws {
        static $gtype: GObject.GType<Ws>;
        adhoc_compatible(): boolean;
        hotspot_compatible(): boolean;
        validate(): boolean;
    }
    abstract class Ws8021x {
        static $gtype: GObject.GType<Ws8021x>;
    }
    abstract class Ws8021xClass {
        static $gtype: GObject.GType<Ws8021xClass>;
    }
    abstract class WsDynamicWep {
        static $gtype: GObject.GType<WsDynamicWep>;
    }
    abstract class WsDynamicWepClass {
        static $gtype: GObject.GType<WsDynamicWepClass>;
    }
    abstract class WsInterface {
        static $gtype: GObject.GType<WsInterface>;
    }
    abstract class WsLeap {
        static $gtype: GObject.GType<WsLeap>;
    }
    abstract class WsLeapClass {
        static $gtype: GObject.GType<WsLeapClass>;
    }
    abstract class WsOwe {
        static $gtype: GObject.GType<WsOwe>;
    }
    abstract class WsOweClass {
        static $gtype: GObject.GType<WsOweClass>;
    }
    abstract class WsSae {
        static $gtype: GObject.GType<WsSae>;
    }
    abstract class WsSaeClass {
        static $gtype: GObject.GType<WsSaeClass>;
    }
    abstract class WsWepKey {
        static $gtype: GObject.GType<WsWepKey>;
    }
    abstract class WsWepKeyClass {
        static $gtype: GObject.GType<WsWepKeyClass>;
    }
    abstract class WsWpaEap {
        static $gtype: GObject.GType<WsWpaEap>;
    }
    abstract class WsWpaEapClass {
        static $gtype: GObject.GType<WsWpaEapClass>;
    }
    abstract class WsWpaPsk {
        static $gtype: GObject.GType<WsWpaPsk>;
    }
    abstract class WsWpaPskClass {
        static $gtype: GObject.GType<WsWpaPskClass>;
    }
    const __name__: string;
    const __version__: string;
}
export default NMA4;
}
declare module 'gi://NMA4' {
    import NMA410 from 'gi://NMA4?version=1.0';
    export default NMA410;
}
