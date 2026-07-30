declare module 'gi://Thunarx?version=3.0' {
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
export namespace Thunarx {
    const FILESYSTEM_INFO_NAMESPACE: string;
    const FILE_INFO_NAMESPACE: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function check_version(required_major: number, required_minor: number, required_micro: number): string;
    function file_info_list_copy(file_infos: FileInfo[]): FileInfo[];
    function file_info_list_free(file_infos: FileInfo[]): void;
    type FileInfoList = object | null;
    namespace Menu {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Menu extends GObject.Object {
        static $gtype: GObject.GType<Menu>;
        $signals: Menu.SignalSignatures;
        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Menu;
        connect<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Menu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append_item(item: MenuItem): void;
        get_items(): MenuItem[];
        prepend_item(item: MenuItem): void;
    }
    namespace MenuItem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activate: () => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::menu": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string;
            label: string;
            menu: Menu;
            name: string;
            priority: boolean;
            sensitive: boolean;
            tooltip: string;
        }
    }
    class MenuItem extends GObject.Object {
        static $gtype: GObject.GType<MenuItem>;
        get icon(): string;
        set icon(val: string);
        get label(): string;
        set label(val: string);
        get menu(): Menu;
        set menu(val: Menu);
        get name(): string;
        get priority(): boolean;
        set priority(val: boolean);
        get sensitive(): boolean;
        set sensitive(val: boolean);
        get tooltip(): string;
        set tooltip(val: string);
        $signals: MenuItem.SignalSignatures;
        constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, label: string, tooltip: string, icon: string): MenuItem;
        connect<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static list_free(items: MenuItem[]): void;
        vfunc_activate(): void;
        activate(): boolean;
        get_sensitive(): boolean;
        set_menu(menu: Menu): void;
        set_sensitive(sensitive: boolean): void;
    }
    namespace PropertyPage {
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::label-widget": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            label: string;
            label_widget: Gtk.Widget;
            labelWidget: Gtk.Widget;
        }
    }
    class PropertyPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PropertyPage>;
        get label(): string;
        set label(val: string);
        get label_widget(): Gtk.Widget;
        set label_widget(val: Gtk.Widget);
        get labelWidget(): Gtk.Widget;
        set labelWidget(val: Gtk.Widget);
        $signals: PropertyPage.SignalSignatures;
        constructor(properties?: Partial<PropertyPage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](label: string): PropertyPage;
        static new_with_label_widget(label_widget: Gtk.Widget): PropertyPage;
        connect<K extends keyof PropertyPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertyPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropertyPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropertyPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_label(): string;
        get_label_widget(): Gtk.Widget;
        set_label(label: string): void;
        set_label_widget(label_widget: Gtk.Widget): void;
    }
    namespace ProviderFactory {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ProviderFactory extends GObject.Object {
        static $gtype: GObject.GType<ProviderFactory>;
        $signals: ProviderFactory.SignalSignatures;
        constructor(properties?: Partial<ProviderFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ProviderFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProviderFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProviderFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): ProviderFactory;
        list_providers(type: GObject.GType): GObject.Object[];
    }
    namespace ProviderModule {
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {
            "notify::resident": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps, ProviderPlugin.ConstructorProps {}
    }
    class ProviderModule extends GObject.TypeModule implements GObject.TypePlugin, ProviderPlugin {
        static $gtype: GObject.GType<ProviderModule>;
        $signals: ProviderModule.SignalSignatures;
        constructor(properties?: Partial<ProviderModule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string): ProviderModule;
        connect<K extends keyof ProviderModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderModule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProviderModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderModule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProviderModule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        list_types(types: GObject.GType, n_types: number): void;
        unuse(): void;
        get resident(): boolean;
        set resident(val: boolean);
        complete_interface_info(instance_type: GObject.GType, interface_type: GObject.GType, info: GObject.InterfaceInfo): void;
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        use(): void;
        use(...args: never[]): any;
        add_interface(instance_type: GObject.GType, interface_type: GObject.GType, interface_info: GObject.InterfaceInfo): void;
        get_resident(): boolean;
        register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        register_enum(...args: never[]): any;
        register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        register_flags(...args: never[]): any;
        register_type(type_parent: GObject.GType, type_name: string, type_info: GObject.TypeInfo, type_flags: GObject.TypeFlags): GObject.GType;
        set_resident(resident: boolean): void;
        vfunc_add_interface(instance_type: GObject.GType, interface_type: GObject.GType, interface_info: GObject.InterfaceInfo): void;
        vfunc_get_resident(): boolean;
        vfunc_register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        vfunc_register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        vfunc_register_type(type_parent: GObject.GType, type_name: string, type_info: GObject.TypeInfo, type_flags: GObject.TypeFlags): GObject.GType;
        vfunc_set_resident(resident: boolean): void;
    }
    namespace Renamer {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            changed: () => void;
            "notify::help-url": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
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
            help_url: string;
            helpUrl: string;
            name: string;
        }
    }
    abstract class Renamer extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Renamer>;
        get help_url(): string;
        set help_url(val: string);
        get helpUrl(): string;
        set helpUrl(val: string);
        get name(): string;
        $signals: Renamer.SignalSignatures;
        constructor(properties?: Partial<Renamer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Renamer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renamer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renamer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renamer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renamer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Renamer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(): void;
        vfunc_get_menu_items(window: Gtk.Window, files: FileInfo[]): MenuItem[];
        vfunc_load(settings: never): void;
        vfunc_process(file: FileInfo, text: string, index: number): string;
        vfunc_save(settings: never): void;
        changed(): void;
        get_help_url(): string;
        get_menu_items(window: Gtk.Window, files: FileInfo[]): MenuItem[];
        get_name(): string;
        load(settings: never): void;
        process(file: FileInfo, text: string, index: number): string;
        save(settings: never): void;
        set_help_url(help_url: string): void;
        set_name(name: string): void;
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        get_orientation(): Gtk.Orientation;
        set_orientation(orientation: Gtk.Orientation): void;
    }
    type FileInfoIface = typeof FileInfo;
    type MenuClass = typeof Menu;
    type MenuItemClass = typeof MenuItem;
    abstract class MenuItemPrivate {
        static $gtype: GObject.GType<MenuItemPrivate>;
    }
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
    }
    type MenuProviderIface = typeof MenuProvider;
    type PreferencesProviderIface = typeof PreferencesProvider;
    type PropertyPageClass = typeof PropertyPage;
    abstract class PropertyPagePrivate {
        static $gtype: GObject.GType<PropertyPagePrivate>;
    }
    type PropertyPageProviderIface = typeof PropertyPageProvider;
    type ProviderFactoryClass = typeof ProviderFactory;
    type ProviderModuleClass = typeof ProviderModule;
    type ProviderPluginIface = typeof ProviderPlugin;
    type RenamerClass = typeof Renamer;
    abstract class RenamerPrivate {
        static $gtype: GObject.GType<RenamerPrivate>;
    }
    type RenamerProviderIface = typeof RenamerProvider;
    namespace FileInfo {
        interface Interface {
            vfunc_changed(): void;
            vfunc_get_file_info(): Gio.FileInfo;
            vfunc_get_filesystem_info(): Gio.FileInfo;
            vfunc_get_location(): Gio.File;
            vfunc_get_mime_type(): string;
            vfunc_get_name(): string;
            vfunc_get_parent_uri(): string;
            vfunc_get_uri(): string;
            vfunc_get_uri_scheme(): string;
            vfunc_has_mime_type(mime_type: string): boolean;
            vfunc_is_directory(): boolean;
            vfunc_renamed(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface FileInfoNamespace {
        $gtype: GObject.GType<FileInfo>;
        prototype: FileInfo;
    }
    interface FileInfo extends GObject.Object, FileInfo.Interface {
        changed(): void;
        get_file_info(): Gio.FileInfo;
        get_filesystem_info(): Gio.FileInfo;
        get_location(): Gio.File;
        get_mime_type(): string;
        get_name(): string;
        get_parent_uri(): string;
        get_uri(): string;
        get_uri_scheme(): string;
        has_mime_type(mime_type: string): boolean;
        is_directory(): boolean;
        renamed(): void;
    }
    export const FileInfo: FileInfoNamespace & {
        new (): FileInfo; 
    };
    namespace MenuProvider {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    interface MenuProvider extends GObject.Object {
    }
    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; 
    };
    namespace PreferencesProvider {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PreferencesProviderNamespace {
        $gtype: GObject.GType<PreferencesProvider>;
        prototype: PreferencesProvider;
    }
    interface PreferencesProvider extends GObject.Object {
    }
    export const PreferencesProvider: PreferencesProviderNamespace & {
        new (): PreferencesProvider; 
    };
    namespace PropertyPageProvider {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PropertyPageProviderNamespace {
        $gtype: GObject.GType<PropertyPageProvider>;
        prototype: PropertyPageProvider;
    }
    interface PropertyPageProvider extends GObject.Object {
    }
    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; 
    };
    namespace ProviderPlugin {
        interface Interface {
            vfunc_add_interface(instance_type: GObject.GType, interface_type: GObject.GType, interface_info: GObject.InterfaceInfo): void;
            vfunc_get_resident(): boolean;
            vfunc_register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
            vfunc_register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
            vfunc_register_type(type_parent: GObject.GType, type_name: string, type_info: GObject.TypeInfo, type_flags: GObject.TypeFlags): GObject.GType;
            vfunc_set_resident(resident: boolean): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            resident: boolean;
        }
    }
    export interface ProviderPluginNamespace {
        $gtype: GObject.GType<ProviderPlugin>;
        prototype: ProviderPlugin;
    }
    interface ProviderPlugin extends GObject.Object, ProviderPlugin.Interface {
        get resident(): boolean;
        set resident(val: boolean);
        add_interface(instance_type: GObject.GType, interface_type: GObject.GType, interface_info: GObject.InterfaceInfo): void;
        get_resident(): boolean;
        register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        register_type(type_parent: GObject.GType, type_name: string, type_info: GObject.TypeInfo, type_flags: GObject.TypeFlags): GObject.GType;
        set_resident(resident: boolean): void;
    }
    export const ProviderPlugin: ProviderPluginNamespace & {
        new (): ProviderPlugin; 
    };
    namespace RenamerProvider {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface RenamerProviderNamespace {
        $gtype: GObject.GType<RenamerProvider>;
        prototype: RenamerProvider;
    }
    interface RenamerProvider extends GObject.Object {
    }
    export const RenamerProvider: RenamerProviderNamespace & {
        new (): RenamerProvider; 
    };
    const __name__: string;
    const __version__: string;
}
export default Thunarx;
}
declare module 'gi://Thunarx' {
    import Thunarx30 from 'gi://Thunarx?version=3.0';
    export default Thunarx30;
}
