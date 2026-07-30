declare module 'gi://Dbusmenu?version=0.4' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace Dbusmenu {
    enum Status {
        NORMAL,
        NOTICE,
    }
    enum TextDirection {
        NONE,
        LTR,
        RTL,
    }
    const CLIENT_PROP_DBUS_NAME: string;
    const CLIENT_PROP_DBUS_OBJECT: string;
    const CLIENT_PROP_GROUP_EVENTS: string;
    const CLIENT_PROP_STATUS: string;
    const CLIENT_PROP_TEXT_DIRECTION: string;
    const CLIENT_SIGNAL_EVENT_RESULT: string;
    const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
    const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
    const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
    const CLIENT_SIGNAL_NEW_MENUITEM: string;
    const CLIENT_SIGNAL_ROOT_CHANGED: string;
    const CLIENT_TYPES_DEFAULT: string;
    const CLIENT_TYPES_IMAGE: string;
    const CLIENT_TYPES_SEPARATOR: string;
    const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
    const MENUITEM_DISPOSITION_ALERT: string;
    const MENUITEM_DISPOSITION_INFORMATIVE: string;
    const MENUITEM_DISPOSITION_NORMAL: string;
    const MENUITEM_DISPOSITION_WARNING: string;
    const MENUITEM_EVENT_ACTIVATED: string;
    const MENUITEM_EVENT_CLOSED: string;
    const MENUITEM_EVENT_OPENED: string;
    const MENUITEM_ICON_NAME_BLANK: string;
    const MENUITEM_PROP_ACCESSIBLE_DESC: string;
    const MENUITEM_PROP_CHILD_DISPLAY: string;
    const MENUITEM_PROP_DISPOSITION: string;
    const MENUITEM_PROP_ENABLED: string;
    const MENUITEM_PROP_ICON_DATA: string;
    const MENUITEM_PROP_ICON_NAME: string;
    const MENUITEM_PROP_LABEL: string;
    const MENUITEM_PROP_SHORTCUT: string;
    const MENUITEM_PROP_TOGGLE_STATE: string;
    const MENUITEM_PROP_TOGGLE_TYPE: string;
    const MENUITEM_PROP_TYPE: string;
    const MENUITEM_PROP_VISIBLE: string;
    const MENUITEM_SHORTCUT_ALT: string;
    const MENUITEM_SHORTCUT_CONTROL: string;
    const MENUITEM_SHORTCUT_SHIFT: string;
    const MENUITEM_SHORTCUT_SUPER: string;
    const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
    const MENUITEM_SIGNAL_CHILD_ADDED: string;
    const MENUITEM_SIGNAL_CHILD_MOVED: string;
    const MENUITEM_SIGNAL_CHILD_REMOVED: string;
    const MENUITEM_SIGNAL_EVENT: string;
    const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
    const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
    const MENUITEM_SIGNAL_REALIZED: string;
    const MENUITEM_SIGNAL_SHOW_TO_USER: string;
    const MENUITEM_TOGGLE_CHECK: string;
    const MENUITEM_TOGGLE_RADIO: string;
    const MENUITEM_TOGGLE_STATE_CHECKED: number;
    const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
    const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
    const SERVER_PROP_DBUS_OBJECT: string;
    const SERVER_PROP_ROOT_NODE: string;
    const SERVER_PROP_STATUS: string;
    const SERVER_PROP_TEXT_DIRECTION: string;
    const SERVER_PROP_VERSION: string;
    const SERVER_SIGNAL_ID_PROP_UPDATE: string;
    const SERVER_SIGNAL_ID_UPDATE: string;
    const SERVER_SIGNAL_ITEM_ACTIVATION: string;
    const SERVER_SIGNAL_LAYOUT_UPDATED: string;
    interface ClientTypeHandler {
        (newitem: Menuitem, parent: Menuitem, client: Client): boolean;
    }
    interface menuitem_about_to_show_cb {
        (mi: Menuitem): void;
    }
    interface menuitem_buildvariant_slot_t {
        (mi: Menuitem, properties: string | null): GLib.Variant;
    }
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "event-result": (arg0: GObject.Object, arg1: string, arg2: GLib.Variant, arg3: number, arg4: null) => void;
            "icon-theme-dirs-changed": (arg0: null) => void;
            "item-activate": (arg0: GObject.Object, arg1: number) => void;
            "layout-updated": () => void;
            "new-menuitem": (arg0: GObject.Object) => void;
            "root-changed": (arg0: GObject.Object) => void;
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::group-events": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_object: string;
            dbusObject: string;
            group_events: boolean;
            groupEvents: boolean;
        }
    }
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        get dbus_name(): string;
        get dbusName(): string;
        get dbus_object(): string;
        get dbusObject(): string;
        get group_events(): boolean;
        set group_events(val: boolean);
        get groupEvents(): boolean;
        set groupEvents(val: boolean);
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, object: string): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;
        add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean;
        get_icon_paths(): string[];
        get_root(): Menuitem;
        get_status(): Status;
        get_text_direction(): TextDirection;
    }
    namespace Menuitem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "about-to-show": () => boolean | void;
            "child-added": (arg0: GObject.Object, arg1: number) => void;
            "child-moved": (arg0: GObject.Object, arg1: number, arg2: number) => void;
            "child-removed": (arg0: GObject.Object) => void;
            event: (arg0: string, arg1: GLib.Variant, arg2: number) => boolean | void;
            "item-activated": (arg0: number) => void;
            "property-changed": (arg0: string, arg1: GLib.Variant) => void;
            realized: () => void;
            "show-to-user": (arg0: number) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "event::id": (arg0: string, arg1: GLib.Variant, arg2: number) => boolean | void;
            [key: `event::${string}`]: (arg0: string, arg1: GLib.Variant, arg2: number) => boolean | void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
        }
    }
    class Menuitem extends GObject.Object {
        static $gtype: GObject.GType<Menuitem>;
        get id(): number;
        $signals: Menuitem.SignalSignatures;
        constructor(properties?: Partial<Menuitem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Menuitem;
        static new_with_id(id: number): Menuitem;
        connect<K extends keyof Menuitem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menuitem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Menuitem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menuitem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Menuitem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menuitem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_child_added(position: number): void;
        vfunc_child_moved(newpos: number, oldpos: number): void;
        vfunc_child_removed(): void;
        vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
        vfunc_show_to_user(timestamp: number, cb_data: null): void;
        child_add_position(child: Menuitem, position: number): boolean;
        child_append(child: Menuitem): boolean;
        child_delete(child: Menuitem): boolean;
        child_find(id: number): Menuitem;
        child_prepend(child: Menuitem): boolean;
        child_reorder(child: Menuitem, position: number): boolean;
        find_id(id: number): Menuitem;
        foreach(func: null, data: null): void;
        get_children(): Menuitem[];
        get_id(): number;
        get_parent(): Menuitem;
        get_position(parent: Menuitem): number;
        get_position_realized(parent: Menuitem): number;
        get_root(): boolean;
        handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
        properties_copy(): never;
        properties_list(): string[];
        property_exist(property: string): boolean;
        property_get(property: string): string;
        property_get_bool(property: string): boolean;
        property_get_byte_array(property: string): Uint8Array;
        property_get_int(property: string): number;
        property_get_variant(property: string): GLib.Variant;
        property_remove(property: string): void;
        property_set(property: string, value: string): boolean;
        property_set_bool(property: string, value: boolean): boolean;
        property_set_byte_array(property: string, value: number, nelements: bigint | number): boolean;
        property_set_int(property: string, value: number): boolean;
        property_set_variant(property: string, value: GLib.Variant): boolean;
        send_about_to_show(cb: null, cb_data: null): void;
        set_parent(parent: Menuitem): boolean;
        set_root(root: boolean): void;
        show_to_user(timestamp: number): void;
        take_children(): Menuitem[];
        unparent(): boolean;
    }
    namespace MenuitemProxy {
        interface SignalSignatures extends Menuitem.SignalSignatures {
            "notify::menu-item": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Menuitem.ConstructorProps {
            menu_item: Menuitem;
            menuItem: Menuitem;
        }
    }
    class MenuitemProxy extends Menuitem {
        static $gtype: GObject.GType<MenuitemProxy>;
        get menu_item(): Menuitem;
        get menuItem(): Menuitem;
        $signals: MenuitemProxy.SignalSignatures;
        constructor(properties?: Partial<MenuitemProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](mi: Menuitem): MenuitemProxy;
        static ["new"](...args: never[]): any;
        connect<K extends keyof MenuitemProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuitemProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MenuitemProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuitemProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MenuitemProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuitemProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_wrapped(): Menuitem;
    }
    namespace Server {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "item-activation-requested": (arg0: number, arg1: number) => void;
            "item-property-updated": (arg0: number, arg1: string, arg2: GLib.Variant) => void;
            "item-updated": (arg0: number) => void;
            "layout-updated": (arg0: number, arg1: number) => void;
            "notify::dbus-object": (pspec: GObject.ParamSpec) => void;
            "notify::root-node": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dbus_object: string;
            dbusObject: string;
            root_node: Menuitem;
            rootNode: Menuitem;
            version: number;
        }
    }
    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;
        get dbus_object(): string;
        get dbusObject(): string;
        get root_node(): Menuitem;
        set root_node(val: Menuitem);
        get rootNode(): Menuitem;
        set rootNode(val: Menuitem);
        get version(): number;
        $signals: Server.SignalSignatures;
        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object: string): Server;
        connect<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Server.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_icon_paths(): string[];
        get_status(): Status;
        get_text_direction(): TextDirection;
        set_icon_paths(icon_paths: string[]): void;
        set_root(root: Menuitem): void;
        set_status(status: Status): void;
        set_text_direction(dir: TextDirection): void;
    }
    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type MenuitemClass = typeof Menuitem;
    abstract class MenuitemPrivate {
        static $gtype: GObject.GType<MenuitemPrivate>;
    }
    type MenuitemProxyClass = typeof MenuitemProxy;
    abstract class MenuitemProxyPrivate {
        static $gtype: GObject.GType<MenuitemProxyPrivate>;
    }
    type ServerClass = typeof Server;
    abstract class ServerPrivate {
        static $gtype: GObject.GType<ServerPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default Dbusmenu;
}
declare module 'gi://Dbusmenu' {
    import Dbusmenu04 from 'gi://Dbusmenu?version=0.4';
    export default Dbusmenu04;
}
