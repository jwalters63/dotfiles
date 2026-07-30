declare module 'gi://DbusmenuGtk3?version=0.4' {
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
import type Dbusmenu from 'gi://Dbusmenu?version=0.4';
export namespace DbusmenuGtk3 {
    const GTK_MENUITEM_H__: number;
    function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem;
    function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem;
    function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf;
    function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [number, Gdk.ModifierType];
    function menuitem_property_set_image(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean;
    function menuitem_property_set_shortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean;
    function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean;
    function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean;
    namespace Client {
        interface SignalSignatures extends Dbusmenu.Client.SignalSignatures {
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::group-events": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Dbusmenu.Client.ConstructorProps {}
    }
    class Client extends Dbusmenu.Client {
        static $gtype: GObject.GType<Client>;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](dbus_name: string, dbus_object: string): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_accel_group(): Gtk.AccelGroup;
        menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem;
        menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu;
        newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void;
        set_accel_group(agroup: Gtk.AccelGroup): void;
    }
    namespace Menu {
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::accel-group": (pspec: GObject.ParamSpec) => void;
            "notify::accel-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-hints": (pspec: GObject.ParamSpec) => void;
            "notify::attach-widget": (pspec: GObject.ParamSpec) => void;
            "notify::menu-type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dx": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dy": (pspec: GObject.ParamSpec) => void;
            "notify::reserve-toggle-size": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-state": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::take-focus": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_object: string;
            dbusObject: string;
        }
    }
    class Menu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Menu>;
        get dbus_name(): string;
        get dbusName(): string;
        get dbus_object(): string;
        get dbusObject(): string;
        $signals: Menu.SignalSignatures;
        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](dbus_name: string, dbus_object: string): Menu;
        static ["new"](...args: never[]): any;
        connect<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Menu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_client(): Client;
    }
    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type MenuClass = typeof Menu;
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default DbusmenuGtk3;
}
declare module 'gi://DbusmenuGtk3' {
    import DbusmenuGtk304 from 'gi://DbusmenuGtk3?version=0.4';
    export default DbusmenuGtk304;
}
