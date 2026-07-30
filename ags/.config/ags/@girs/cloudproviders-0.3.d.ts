declare module 'gi://CloudProviders?version=0.3' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace CloudProviders {
    enum AccountStatus {
        INVALID,
        IDLE,
        SYNCING,
        ERROR,
    }
    const ACCOUNT_DBUS_IFACE: string;
    const PROVIDER_DBUS_IFACE: string;
    function dbus_account_interface_info(): Gio.DBusInterfaceInfo;
    function dbus_account_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function dbus_provider_interface_info(): Gio.DBusInterfaceInfo;
    function dbus_provider_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    namespace Account {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            icon: Gio.Icon;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            name: string;
            path: string;
            status_details: string;
            statusDetails: string;
        }
    }
    class Account extends GObject.Object {
        static $gtype: GObject.GType<Account>;
        get action_group(): Gio.ActionGroup;
        get actionGroup(): Gio.ActionGroup;
        get icon(): Gio.Icon;
        get menu_model(): Gio.MenuModel;
        get menuModel(): Gio.MenuModel;
        get name(): string;
        get path(): string;
        get status_details(): string;
        get statusDetails(): string;
        $signals: Account.SignalSignatures;
        constructor(properties?: Partial<Account.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](proxy: Gio.DBusProxy): Account;
        connect<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Account.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Account.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action_group(): Gio.ActionGroup;
        get_icon(): Gio.Icon;
        get_menu_model(): Gio.MenuModel;
        get_name(): string;
        get_path(): string;
        get_status(): AccountStatus;
        get_status_details(): string;
    }
    namespace AccountExporter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            bus_name: string;
            busName: string;
            icon: Gio.Icon;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            name: string;
            path: string;
            provider: ProviderExporter;
            status_details: string;
            statusDetails: string;
        }
    }
    class AccountExporter extends GObject.Object {
        static $gtype: GObject.GType<AccountExporter>;
        get action_group(): Gio.ActionGroup;
        set action_group(val: Gio.ActionGroup);
        get actionGroup(): Gio.ActionGroup;
        set actionGroup(val: Gio.ActionGroup);
        get bus_name(): string;
        get busName(): string;
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        get menu_model(): Gio.MenuModel;
        set menu_model(val: Gio.MenuModel);
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);
        get name(): string;
        set name(val: string);
        get path(): string;
        set path(val: string);
        get provider(): ProviderExporter;
        get status_details(): string;
        set status_details(val: string);
        get statusDetails(): string;
        set statusDetails(val: string);
        $signals: AccountExporter.SignalSignatures;
        constructor(properties?: Partial<AccountExporter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](provider: ProviderExporter, bus_name: string): AccountExporter;
        connect<K extends keyof AccountExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountExporter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccountExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountExporter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccountExporter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AccountExporter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_action_group(action_group: Gio.ActionGroup): void;
        set_icon(icon: Gio.Icon): void;
        set_menu_model(menu_model: Gio.MenuModel): void;
        set_name(name: string): void;
        set_path(path: string): void;
        set_status(status: AccountStatus): void;
        set_status_details(status_details: string): void;
    }
    namespace Collector {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "providers-changed": () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Collector extends GObject.Object {
        static $gtype: GObject.GType<Collector>;
        $signals: Collector.SignalSignatures;
        constructor(properties?: Partial<Collector.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Collector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Collector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Collector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Collector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static dup_singleton(): Collector;
        get_providers(): Provider[];
        update(): void;
    }
    namespace DbusAccountProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, DbusAccount.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class DbusAccountProxy extends Gio.DBusProxy implements DbusAccount, Gio.AsyncInitable<DbusAccountProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<DbusAccountProxy>;
        $signals: DbusAccountProxy.SignalSignatures;
        constructor(properties?: Partial<DbusAccountProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): DbusAccountProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusAccountProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get icon(): string | null;
        set icon(val: string | null);
        get name(): string | null;
        set name(val: string | null);
        get path(): string | null;
        set path(val: string | null);
        get status(): number;
        set status(val: number);
        get status_details(): string | null;
        set status_details(val: string | null);
        get statusDetails(): string | null;
        set statusDetails(val: string | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): DbusAccountProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace DbusAccountSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, DbusAccount.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }
    class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton implements DbusAccount, Gio.DBusInterface {
        static $gtype: GObject.GType<DbusAccountSkeleton>;
        $signals: DbusAccountSkeleton.SignalSignatures;
        constructor(properties?: Partial<DbusAccountSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DbusAccountSkeleton;
        connect<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusAccountSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get icon(): string | null;
        set icon(val: string | null);
        get name(): string | null;
        set name(val: string | null);
        get path(): string | null;
        set path(val: string | null);
        get status(): number;
        set status(val: number);
        get status_details(): string | null;
        set status_details(val: string | null);
        get statusDetails(): string | null;
        set statusDetails(val: string | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }
    namespace DbusObjectManagerClient {
        interface SignalSignatures extends Gio.DBusObjectManagerClient.SignalSignatures {
            "notify::bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-destroy-notify": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-func": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-user-data": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectManagerClient.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusObjectManager.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class DbusObjectManagerClient extends Gio.DBusObjectManagerClient implements Gio.AsyncInitable<DbusObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
        static $gtype: GObject.GType<DbusObjectManagerClient>;
        $signals: DbusObjectManagerClient.SignalSignatures;
        constructor(properties?: Partial<DbusObjectManagerClient.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient;
        static new_sync(...args: never[]): any;
        connect<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectManagerClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectManagerClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectManagerClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: null): GObject.GType;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void;
        static new_for_bus(...args: never[]): any;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        get_object(object_path: string): Gio.DBusObject | null;
        get_object_path(): string;
        get_objects(): Gio.DBusObject[];
        vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        vfunc_get_object(object_path: string): Gio.DBusObject | null;
        vfunc_get_object_path(): string;
        vfunc_get_objects(): Gio.DBusObject[];
        vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        vfunc_object_added(object: Gio.DBusObject): void;
        vfunc_object_removed(object: Gio.DBusObject): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace DbusObjectProxy {
        interface SignalSignatures extends Gio.DBusObjectProxy.SignalSignatures {
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::account": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectProxy.ConstructorProps, DbusObject.ConstructorProps, Gio.DBusObject.ConstructorProps {}
    }
    class DbusObjectProxy extends Gio.DBusObjectProxy implements DbusObject, Gio.DBusObject {
        static $gtype: GObject.GType<DbusObjectProxy>;
        $signals: DbusObjectProxy.SignalSignatures;
        constructor(properties?: Partial<DbusObjectProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, object_path: string): DbusObjectProxy;
        connect<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);
        get_account(): DbusAccount | null;
        get_provider(): DbusProvider | null;
        get_interface(interface_name: string): Gio.DBusInterface | null;
        get_interfaces(): Gio.DBusInterface[];
        get_object_path(): string;
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        vfunc_get_interfaces(): Gio.DBusInterface[];
        vfunc_get_object_path(): string;
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    }
    namespace DbusObjectSkeleton {
        interface SignalSignatures extends Gio.DBusObjectSkeleton.SignalSignatures {
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::account": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectSkeleton.ConstructorProps, DbusObject.ConstructorProps, Gio.DBusObject.ConstructorProps {}
    }
    class DbusObjectSkeleton extends Gio.DBusObjectSkeleton implements DbusObject, Gio.DBusObject {
        static $gtype: GObject.GType<DbusObjectSkeleton>;
        $signals: DbusObjectSkeleton.SignalSignatures;
        constructor(properties?: Partial<DbusObjectSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object_path: string): DbusObjectSkeleton;
        connect<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_account(interface_: DbusAccount | null): void;
        set_provider(interface_: DbusProvider | null): void;
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);
        get_account(): DbusAccount | null;
        get_provider(): DbusProvider | null;
        get_interface(interface_name: string): Gio.DBusInterface | null;
        get_interfaces(): Gio.DBusInterface[];
        get_object_path(): string;
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        vfunc_get_interfaces(): Gio.DBusInterface[];
        vfunc_get_object_path(): string;
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    }
    namespace DbusProviderProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, DbusProvider.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class DbusProviderProxy extends Gio.DBusProxy implements DbusProvider, Gio.AsyncInitable<DbusProviderProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<DbusProviderProxy>;
        $signals: DbusProviderProxy.SignalSignatures;
        constructor(properties?: Partial<DbusProviderProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): DbusProviderProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusProviderProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get name(): string | null;
        set name(val: string | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): DbusProviderProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace DbusProviderSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, DbusProvider.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }
    class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton implements DbusProvider, Gio.DBusInterface {
        static $gtype: GObject.GType<DbusProviderSkeleton>;
        $signals: DbusProviderSkeleton.SignalSignatures;
        constructor(properties?: Partial<DbusProviderSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DbusProviderSkeleton;
        connect<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusProviderSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get name(): string | null;
        set name(val: string | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }
    namespace Provider {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "accounts-changed": () => void;
            removed: () => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }
    class Provider extends GObject.Object {
        static $gtype: GObject.GType<Provider>;
        get name(): string;
        $signals: Provider.SignalSignatures;
        constructor(properties?: Partial<Provider.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](bus_name: string, object_path: string): Provider;
        connect<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Provider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Provider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_accounts(): Account[];
        get_name(): string;
    }
    namespace ProviderExporter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::bus-path": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus: Gio.DBusConnection;
            bus_name: string;
            busName: string;
            bus_path: string;
            busPath: string;
            name: string;
        }
    }
    class ProviderExporter extends GObject.Object {
        static $gtype: GObject.GType<ProviderExporter>;
        get bus(): Gio.DBusConnection;
        get bus_name(): string;
        get busName(): string;
        get bus_path(): string;
        get busPath(): string;
        get name(): string;
        set name(val: string);
        $signals: ProviderExporter.SignalSignatures;
        constructor(properties?: Partial<ProviderExporter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter;
        connect<K extends keyof ProviderExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderExporter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProviderExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderExporter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProviderExporter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderExporter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        remove_account(account: AccountExporter): void;
        set_name(name: string): void;
    }
    type AccountClass = typeof Account;
    type AccountExporterClass = typeof AccountExporter;
    type CollectorClass = typeof Collector;
    type DbusAccountIface = typeof DbusAccount;
    type DbusAccountProxyClass = typeof DbusAccountProxy;
    abstract class DbusAccountProxyPrivate {
        static $gtype: GObject.GType<DbusAccountProxyPrivate>;
    }
    type DbusAccountSkeletonClass = typeof DbusAccountSkeleton;
    abstract class DbusAccountSkeletonPrivate {
        static $gtype: GObject.GType<DbusAccountSkeletonPrivate>;
    }
    type DbusObjectIface = typeof DbusObject;
    type DbusObjectManagerClientClass = typeof DbusObjectManagerClient;
    abstract class DbusObjectManagerClientPrivate {
        static $gtype: GObject.GType<DbusObjectManagerClientPrivate>;
    }
    type DbusObjectProxyClass = typeof DbusObjectProxy;
    abstract class DbusObjectProxyPrivate {
        static $gtype: GObject.GType<DbusObjectProxyPrivate>;
    }
    type DbusObjectSkeletonClass = typeof DbusObjectSkeleton;
    abstract class DbusObjectSkeletonPrivate {
        static $gtype: GObject.GType<DbusObjectSkeletonPrivate>;
    }
    type DbusProviderIface = typeof DbusProvider;
    type DbusProviderProxyClass = typeof DbusProviderProxy;
    abstract class DbusProviderProxyPrivate {
        static $gtype: GObject.GType<DbusProviderProxyPrivate>;
    }
    type DbusProviderSkeletonClass = typeof DbusProviderSkeleton;
    abstract class DbusProviderSkeletonPrivate {
        static $gtype: GObject.GType<DbusProviderSkeletonPrivate>;
    }
    type ProviderClass = typeof Provider;
    type ProviderExporterClass = typeof ProviderExporter;
    abstract class _AccountClass {
        static $gtype: GObject.GType<_AccountClass>;
    }
    abstract class _AccountExporterClass {
        static $gtype: GObject.GType<_AccountExporterClass>;
    }
    abstract class _CollectorClass {
        static $gtype: GObject.GType<_CollectorClass>;
    }
    abstract class _ProviderExporterClass {
        static $gtype: GObject.GType<_ProviderExporterClass>;
    }
    namespace DbusAccount {
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string | null;
            name: string | null;
            path: string | null;
            status: number;
            status_details: string | null;
            statusDetails: string | null;
        }
    }
    export interface DbusAccountNamespace {
        $gtype: GObject.GType<DbusAccount>;
        prototype: DbusAccount;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface DbusAccount extends GObject.Object {
        get icon(): string | null;
        set icon(val: string | null);
        get name(): string | null;
        set name(val: string | null);
        get path(): string | null;
        set path(val: string | null);
        get status(): number;
        set status(val: number);
        get status_details(): string | null;
        set status_details(val: string | null);
        get statusDetails(): string | null;
        set statusDetails(val: string | null);
    }
    export const DbusAccount: DbusAccountNamespace & {
        new (): DbusAccount; 
    };
    namespace DbusObject {
        interface ConstructorProps extends Gio.DBusObject.ConstructorProps {
            account: DbusAccount | null;
            provider: DbusProvider | null;
        }
    }
    export interface DbusObjectNamespace {
        $gtype: GObject.GType<DbusObject>;
        prototype: DbusObject;
    }
    interface DbusObject extends Gio.DBusObject {
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);
        get_account(): DbusAccount | null;
        get_provider(): DbusProvider | null;
    }
    export const DbusObject: DbusObjectNamespace & {
        new (): DbusObject; 
    };
    namespace DbusProvider {
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string | null;
        }
    }
    export interface DbusProviderNamespace {
        $gtype: GObject.GType<DbusProvider>;
        prototype: DbusProvider;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface DbusProvider extends GObject.Object {
        get name(): string | null;
        set name(val: string | null);
    }
    export const DbusProvider: DbusProviderNamespace & {
        new (): DbusProvider; 
    };
    const __name__: string;
    const __version__: string;
}
export default CloudProviders;
}
declare module 'gi://CloudProviders' {
    import CloudProviders03 from 'gi://CloudProviders?version=0.3';
    export default CloudProviders03;
}
