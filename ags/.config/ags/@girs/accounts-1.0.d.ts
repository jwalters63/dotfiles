declare module 'gi://Accounts?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Accounts {
    class AccountsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static DB: number;
        static DISPOSED: number;
        static DELETED: number;
        static DB_LOCKED: number;
        static ACCOUNT_NOT_FOUND: number;
        static STORE_IN_PROGRESS: number;
        static READONLY: number;
        constructor(options: { message: string; code: number });
    }
    enum Error {
        DB,
        DISPOSED,
        DELETED,
        DB_LOCKED,
        ACCOUNT_NOT_FOUND,
    }
    enum SettingSource {
        NONE,
        ACCOUNT,
        PROFILE,
    }
    const MANAGER_INTERFACE: string;
    const MANAGER_OBJECT_PATH: string;
    const MANAGER_SERVICE_NAME: string;
    function accounts_error_quark(): GLib.Quark;
    function errors_quark(): GLib.Quark;
    function provider_list_free(list: Provider[]): void;
    function service_list_free(list: Service[]): void;
    function service_type_list_free(list: ServiceType[]): void;
    interface AccountNotifyCb {
        (account: Account, key: string): void;
    }
    interface AccountStoreCb {
        (account: Account, error: GLib.Error): void;
    }
    namespace Account {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            deleted: () => void;
            "display-name-changed": () => void;
            enabled: (arg0: string, arg1: boolean) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::foreign": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::manager": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            display_name: string;
            displayName: string;
            enabled: boolean;
            foreign: boolean;
            id: number;
            manager: Manager;
            provider: string;
        }
    }
    class Account extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Account>;
        get display_name(): string;
        get displayName(): string;
        get enabled(): boolean;
        set foreign(val: boolean);
        get id(): number;
        get manager(): Manager;
        get provider(): string;
        $signals: Account.SignalSignatures;
        constructor(properties?: Partial<Account.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Account.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Account.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](): void;
        get_display_name(): string;
        get_enabled(): boolean;
        get_manager(): Manager;
        get_provider_name(): string;
        get_selected_service(): Service;
        get_settings_iter(key_prefix: string | null): AccountSettingIter;
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        list_enabled_services(): Service[];
        list_services(): Service[];
        list_services_by_type(service_type: string): Service[];
        remove_watch(watch: AccountWatch): void;
        select_service(service: Service | null): void;
        set_display_name(display_name: string): void;
        set_enabled(enabled: boolean): void;
        set_value(key: string, value: GObject.Value | any | null): void;
        set_variant(key: string, value: GLib.Variant | null): void;
        settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
        sign(key: string, token: string): void;
        store(callback: AccountStoreCb): void;
        store_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        store_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        store_blocking(): boolean;
        store_finish(res: Gio.AsyncResult): boolean;
        supports_service(service_type: string): boolean;
        verify(key: string, token: string): boolean;
        verify_with_tokens(key: string, tokens: string): boolean;
        watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch;
        watch_key(key: string, callback: AccountNotifyCb): AccountWatch;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace AccountService {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            enabled: (arg0: boolean) => void;
            "notify::account": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::service": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            account: Account;
            enabled: boolean;
            service: Service;
        }
    }
    class AccountService extends GObject.Object {
        static $gtype: GObject.GType<AccountService>;
        get account(): Account;
        get enabled(): boolean;
        get service(): Service;
        $signals: AccountService.SignalSignatures;
        constructor(properties?: Partial<AccountService.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](account: Account, service: Service | null): AccountService;
        connect<K extends keyof AccountService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountService.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccountService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountService.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccountService.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AccountService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static settings_iter_next(iter: AccountSettingIter): [boolean, string, unknown];
        get_account(): Account;
        get_auth_data(): AuthData;
        get_changed_fields(): string[];
        get_enabled(): boolean;
        get_service(): Service;
        get_settings_iter(key_prefix: string | null): AccountSettingIter;
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        set_value(key: string, value: GObject.Value | any | null): void;
        set_variant(key: string, value: GLib.Variant | null): void;
        settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
    }
    namespace Manager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "account-created": (arg0: number) => void;
            "account-deleted": (arg0: number) => void;
            "account-updated": (arg0: number) => void;
            "enabled-event": (arg0: number) => void;
            "notify::abort-on-db-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::db-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::use-dbus": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            abort_on_db_timeout: boolean;
            abortOnDbTimeout: boolean;
            db_timeout: number;
            dbTimeout: number;
            service_type: string;
            serviceType: string;
            use_dbus: boolean;
            useDbus: boolean;
        }
    }
    class Manager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Manager>;
        get abort_on_db_timeout(): boolean;
        set abort_on_db_timeout(val: boolean);
        get abortOnDbTimeout(): boolean;
        set abortOnDbTimeout(val: boolean);
        get db_timeout(): number;
        set db_timeout(val: number);
        get dbTimeout(): number;
        set dbTimeout(val: number);
        get service_type(): string;
        get serviceType(): string;
        get use_dbus(): boolean;
        get useDbus(): boolean;
        $signals: Manager.SignalSignatures;
        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Manager;
        static new_for_service_type(service_type: string): Manager;
        connect<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Manager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static list_free(list: AccountId[]): void;
        vfunc_account_deleted(id: AccountId): void;
        create_account(provider_name: string): Account;
        get_abort_on_db_timeout(): boolean;
        get_account(account_id: AccountId): Account;
        get_account_services(): AccountService[];
        get_application(application_name: string): Application;
        get_db_timeout(): number;
        get_enabled_account_services(): AccountService[];
        get_provider(provider_name: string): Provider;
        get_service(service_name: string): Service;
        get_service_type(): string;
        list(): AccountId[];
        list_applications_by_service(service: Service): Application[];
        list_by_service_type(service_type: string): AccountId[];
        list_enabled(): AccountId[];
        list_enabled_by_service_type(service_type: string): AccountId[];
        list_providers(): Provider[];
        list_service_types(): ServiceType[];
        list_services(): Service[];
        list_services_by_application(application: Application): Service[];
        list_services_by_type(service_type: string): Service[];
        load_account(account_id: AccountId): Account;
        load_service_type(service_type: string): ServiceType;
        set_abort_on_db_timeout(abort: boolean): void;
        set_db_timeout(timeout_ms: number): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    type AccountClass = typeof Account;
    abstract class AccountPrivate {
        static $gtype: GObject.GType<AccountPrivate>;
    }
    type AccountServiceClass = typeof AccountService;
    abstract class AccountServicePrivate {
        static $gtype: GObject.GType<AccountServicePrivate>;
    }
    class AccountSettingIter {
        static $gtype: GObject.GType<AccountSettingIter>;
        account: Account;
        free(): void;
        get_next(): [boolean, string, GLib.Variant];
        next(): [boolean, string, unknown];
    }
    abstract class AccountWatch {
        static $gtype: GObject.GType<AccountWatch>;
    }
    abstract class Application {
        static $gtype: GObject.GType<Application>;
        get_description(): string;
        get_desktop_app_info(): never;
        get_i18n_domain(): string;
        get_name(): string;
        get_service_usage(service: Service): string;
        ref(): Application;
        supports_service(service: Service): boolean;
        unref(): void;
    }
    abstract class AuthData {
        static $gtype: GObject.GType<AuthData>;
        get_credentials_id(): number;
        get_login_parameters(extra_parameters: GLib.Variant | null): GLib.Variant;
        get_mechanism(): string;
        get_method(): string;
        get_parameters(): { [key: string]: GObject.Value };
        insert_parameters(parameters: { [key: string]: GObject.Value }): void;
        ref(): AuthData;
        unref(): void;
    }
    type ManagerClass = typeof Manager;
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;
    }
    abstract class Provider {
        static $gtype: GObject.GType<Provider>;
        static list_free(list: Provider[]): void;
        get_description(): string;
        get_display_name(): string;
        get_domains_regex(): string;
        get_file_contents(contents: string): void;
        get_i18n_domain(): string;
        get_icon_name(): string;
        get_name(): string;
        get_plugin_name(): string;
        get_single_account(): boolean;
        get_tags(): string[];
        match_domain(domain: string): boolean;
        ref(): Provider;
        unref(): void;
    }
    abstract class Service {
        static $gtype: GObject.GType<Service>;
        static list_free(list: Service[]): void;
        get_description(): string;
        get_display_name(): string;
        get_file_contents(contents: string, data_offset: bigint | number): void;
        get_i18n_domain(): string;
        get_icon_name(): string;
        get_name(): string;
        get_provider(): string;
        get_service_type(): string;
        get_tags(): string[];
        has_tag(tag: string): boolean;
        ref(): Service;
        unref(): void;
    }
    abstract class ServiceType {
        static $gtype: GObject.GType<ServiceType>;
        static list_free(list: ServiceType[]): void;
        get_description(): string;
        get_display_name(): string;
        get_file_contents(contents: string, len: bigint | number): void;
        get_i18n_domain(): string;
        get_icon_name(): string;
        get_name(): string;
        get_tags(): string[];
        has_tag(tag: string): boolean;
        ref(): ServiceType;
        unref(): void;
    }
    type AccountId = number;
    const __name__: string;
    const __version__: string;
}
export default Accounts;
}
declare module 'gi://Accounts' {
    import Accounts10 from 'gi://Accounts?version=1.0';
    export default Accounts10;
}
