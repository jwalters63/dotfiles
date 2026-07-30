declare module 'gi://Malcontent?version=0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Malcontent {
    export namespace AppFilterOarsValue {
        export const $gtype: GObject.GType<AppFilterOarsValue>;
    }
    enum AppFilterOarsValue {
        UNKNOWN,
        NONE,
        MILD,
        MODERATE,
        INTENSE,
    }
    class ManagerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_USER: number;
        static PERMISSION_DENIED: number;
        static INVALID_DATA: number;
        static DISABLED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace UserType {
        export const $gtype: GObject.GType<UserType>;
    }
    enum UserType {
        UNKNOWN,
        SYSTEM,
        CHILD,
        PARENT,
    }
    export namespace WebFilterType {
        export const $gtype: GObject.GType<WebFilterType>;
    }
    enum WebFilterType {
        NONE,
        BLOCKLIST,
        ALLOWLIST,
    }
    function app_filter_deserialize(variant: GLib.Variant, user_id: never): AppFilter;
    function app_filter_error_quark(): GLib.Quark;
    function manager_error_quark(): GLib.Quark;
    function session_limits_deserialize(variant: GLib.Variant, user_id: never): SessionLimits;
    function web_filter_deserialize(variant: GLib.Variant, user_id: never): WebFilter;
    function web_filter_validate_domain_name(domain_name: string): boolean;
    function web_filter_validate_domain_name_len(domain_name: string, max_len: bigint | number): boolean;
    function web_filter_validate_filter_id(id: string): boolean;
    function web_filter_validate_hostname(hostname: string): boolean;
    function web_filter_validate_hostname_len(hostname: string, max_len: bigint | number): boolean;
    export namespace ManagerGetValueFlags {
        export const $gtype: GObject.GType<ManagerGetValueFlags>;
    }
    enum ManagerGetValueFlags {
        NONE,
        INTERACTIVE,
    }
    export namespace ManagerSetValueFlags {
        export const $gtype: GObject.GType<ManagerSetValueFlags>;
    }
    enum ManagerSetValueFlags {
        NONE,
        INTERACTIVE,
    }
    namespace Manager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "app-filter-changed": (arg0: number) => void;
            "session-limits-changed": (arg0: number) => void;
            "web-filter-changed": (arg0: number) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: Gio.DBusConnection;
        }
    }
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;
        get connection(): Gio.DBusConnection;
        $signals: Manager.SignalSignatures;
        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection): Manager;
        connect<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Manager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_app_filter(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): AppFilter;
        get_app_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<AppFilter>;
        get_app_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_app_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<AppFilter> | void;
        get_app_filter_finish(result: Gio.AsyncResult): AppFilter;
        get_session_limits(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): SessionLimits;
        get_session_limits_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<SessionLimits>;
        get_session_limits_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_session_limits_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SessionLimits> | void;
        get_session_limits_finish(result: Gio.AsyncResult): SessionLimits;
        get_web_filter(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): WebFilter;
        get_web_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<WebFilter>;
        get_web_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_web_filter_async(user_id: never, flags: ManagerGetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<WebFilter> | void;
        get_web_filter_finish(result: Gio.AsyncResult): WebFilter;
        set_app_filter(user_id: never, app_filter: AppFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): boolean;
        set_app_filter_async(user_id: never, app_filter: AppFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_app_filter_async(user_id: never, app_filter: AppFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_app_filter_async(user_id: never, app_filter: AppFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_app_filter_finish(result: Gio.AsyncResult): boolean;
        set_session_limits(user_id: never, session_limits: SessionLimits, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): boolean;
        set_session_limits_async(user_id: never, session_limits: SessionLimits, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_session_limits_async(user_id: never, session_limits: SessionLimits, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_session_limits_async(user_id: never, session_limits: SessionLimits, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_session_limits_finish(result: Gio.AsyncResult): boolean;
        set_web_filter(user_id: never, web_filter: WebFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): boolean;
        set_web_filter_async(user_id: never, web_filter: WebFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_web_filter_async(user_id: never, web_filter: WebFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_web_filter_async(user_id: never, web_filter: WebFilter, flags: ManagerSetValueFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_web_filter_finish(result: Gio.AsyncResult): boolean;
    }
    namespace User {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-path": (pspec: GObject.ParamSpec) => void;
            "notify::locale": (pspec: GObject.ParamSpec) => void;
            "notify::login-time": (pspec: GObject.ParamSpec) => void;
            "notify::real-name": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
            "notify::user-type": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display_name: string;
            displayName: string;
            icon_path: string | null;
            iconPath: string | null;
            locale: string | null;
            login_time: bigint | number;
            loginTime: bigint | number;
            real_name: string | null;
            realName: string | null;
            uid: number;
            user_type: UserType;
            userType: UserType;
            username: string;
        }
    }
    class User extends GObject.Object {
        static $gtype: GObject.GType<User>;
        get display_name(): string;
        get displayName(): string;
        get icon_path(): string | null;
        get iconPath(): string | null;
        get locale(): string | null;
        get login_time(): number;
        get loginTime(): number;
        get real_name(): string | null;
        get realName(): string | null;
        get uid(): number;
        get user_type(): UserType;
        get userType(): UserType;
        get username(): string;
        $signals: User.SignalSignatures;
        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof User.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, User.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof User.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, User.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof User.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        equal(b: User): boolean;
        get_display_name(): string;
        get_icon_path(): string | null;
        get_locale(): string | null;
        get_login_time(): number;
        get_real_name(): string | null;
        get_uid(): never;
        get_user_type(): UserType;
        get_username(): string;
        is_in_same_family(other: User): boolean;
        is_parent_of(other: User): boolean;
    }
    namespace UserManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "user-added": (arg0: User) => void;
            "user-removed": (arg0: User) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::is-loaded": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: Gio.DBusConnection;
            is_loaded: boolean;
            isLoaded: boolean;
        }
    }
    class UserManager extends GObject.Object {
        static $gtype: GObject.GType<UserManager>;
        get connection(): Gio.DBusConnection;
        get is_loaded(): boolean;
        get isLoaded(): boolean;
        $signals: UserManager.SignalSignatures;
        constructor(properties?: Partial<UserManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection): UserManager;
        connect<K extends keyof UserManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_all_users_async(cancellable: Gio.Cancellable | null): globalThis.Promise<User[]>;
        get_all_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_all_users_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<User[]> | void;
        get_all_users_finish(result: Gio.AsyncResult): User[];
        get_family_members_for_user_async(user: User, cancellable: Gio.Cancellable | null): globalThis.Promise<User[]>;
        get_family_members_for_user_async(user: User, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_family_members_for_user_async(user: User, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<User[]> | void;
        get_family_members_for_user_finish(result: Gio.AsyncResult): User[];
        get_is_loaded(): boolean;
        get_user_by_uid_async(uid: never, cancellable: Gio.Cancellable | null): globalThis.Promise<User | null>;
        get_user_by_uid_async(uid: never, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_user_by_uid_async(uid: never, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<User | null> | void;
        get_user_by_uid_finish(result: Gio.AsyncResult): User | null;
        get_user_by_username_async(username: string, cancellable: Gio.Cancellable | null): globalThis.Promise<User | null>;
        get_user_by_username_async(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_user_by_username_async(username: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<User | null> | void;
        get_user_by_username_finish(result: Gio.AsyncResult): User | null;
        load_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        load_finish(result: Gio.AsyncResult): boolean;
    }
    abstract class AppFilter {
        static $gtype: GObject.GType<AppFilter>;
        static deserialize(variant: GLib.Variant, user_id: never): AppFilter;
        static error_quark(): GLib.Quark;
        equal(b: AppFilter): boolean;
        get_oars_sections(): string[];
        get_oars_value(oars_section: string): AppFilterOarsValue;
        get_user_id(): never;
        is_appinfo_allowed(app_info: Gio.AppInfo): boolean;
        is_content_type_allowed(content_type: string): boolean;
        is_enabled(): boolean;
        is_flatpak_app_allowed(app_id: string): boolean;
        is_flatpak_ref_allowed(app_ref: string): boolean;
        is_path_allowed(path: string): boolean;
        is_system_installation_allowed(): boolean;
        is_user_installation_allowed(): boolean;
        ref(): AppFilter;
        serialize(): GLib.Variant;
        unref(): void;
    }
    class AppFilterBuilder {
        static $gtype: GObject.GType<AppFilterBuilder>;
        constructor(properties?: Partial<{}>);
        static ["new"](): AppFilterBuilder;
        blocklist_content_type(content_type: string): void;
        blocklist_flatpak_ref(app_ref: string): void;
        blocklist_path(path: string): void;
        clear(): void;
        copy(): AppFilterBuilder;
        end(): AppFilter;
        free(): void;
        init(): void;
        set_allow_system_installation(allow_system_installation: boolean): void;
        set_allow_user_installation(allow_user_installation: boolean): void;
        set_oars_value(oars_section: string, value: AppFilterOarsValue): void;
    }
    type ManagerClass = typeof Manager;
    abstract class SessionLimits {
        static $gtype: GObject.GType<SessionLimits>;
        static deserialize(variant: GLib.Variant, user_id: never): SessionLimits;
        check_time_remaining(now_dt: GLib.DateTime, active_session_time_today_secs: bigint | number): [boolean, number, boolean, boolean];
        equal(b: SessionLimits): boolean;
        get_active_extension(now_dt: GLib.DateTime): [boolean, number, number];
        get_daily_limit(): [boolean, number];
        get_daily_schedule(): [boolean, number, number];
        get_user_id(): never;
        is_enabled(): boolean;
        ref(): SessionLimits;
        serialize(): GLib.Variant;
        unref(): void;
    }
    class SessionLimitsBuilder {
        static $gtype: GObject.GType<SessionLimitsBuilder>;
        constructor(properties?: Partial<{}>);
        static ["new"](): SessionLimitsBuilder;
        clear(): void;
        copy(): SessionLimitsBuilder;
        end(): SessionLimits;
        free(): void;
        init(): void;
        set_active_extension(start_time_secs: bigint | number, duration_secs: number): void;
        set_daily_limit(enforced: boolean, daily_limit_secs: number): void;
        set_daily_schedule(enforced: boolean, start_time_secs: number, end_time_secs: number): void;
        set_from_instance(limits: SessionLimits): void;
        set_none(): void;
    }
    type UserClass = typeof User;
    type UserManagerClass = typeof UserManager;
    abstract class WebFilter {
        static $gtype: GObject.GType<WebFilter>;
        static deserialize(variant: GLib.Variant, user_id: never): WebFilter;
        static validate_domain_name(domain_name: string): boolean;
        static validate_domain_name_len(domain_name: string, max_len: bigint | number): boolean;
        static validate_filter_id(id: string): boolean;
        static validate_hostname(hostname: string): boolean;
        static validate_hostname_len(hostname: string, max_len: bigint | number): boolean;
        equal(b: WebFilter): boolean;
        get_allow_lists(): { [key: string]: string } | null;
        get_block_lists(): { [key: string]: string } | null;
        get_custom_allow_list(): string[] | null;
        get_custom_block_list(): string[] | null;
        get_filter_type(): WebFilterType;
        get_force_safe_search(): boolean;
        get_user_id(): never;
        is_enabled(): boolean;
        ref(): WebFilter;
        serialize(): GLib.Variant;
        unref(): void;
    }
    class WebFilterBuilder {
        static $gtype: GObject.GType<WebFilterBuilder>;
        constructor(properties?: Partial<{}>);
        static ["new"](): WebFilterBuilder;
        add_allow_list(id: string, filter_uri: string): void;
        add_block_list(id: string, filter_uri: string): void;
        add_custom_allow_list_entry(hostname: string): void;
        add_custom_block_list_entry(hostname: string): void;
        clear(): void;
        copy(): WebFilterBuilder;
        end(): WebFilter;
        free(): void;
        init(): void;
        set_filter_type(filter_type: WebFilterType): void;
        set_force_safe_search(force_safe_search: boolean): void;
    }
    type AppFilterError = ManagerError;
    type GetAppFilterFlags = ManagerGetValueFlags;
    type SetAppFilterFlags = ManagerSetValueFlags;
    type UserArray = User;
    const __name__: string;
    const __version__: string;
}
export default Malcontent;
}
declare module 'gi://Malcontent' {
    import Malcontent0 from 'gi://Malcontent?version=0';
    export default Malcontent0;
}
