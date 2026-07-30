declare module 'gi://Wp?version=0.5' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Wp {
    export namespace ConstraintType {
        export const $gtype: GObject.GType<ConstraintType>;
    }
    enum ConstraintType {
        NONE,
        PW_GLOBAL_PROPERTY,
        PW_PROPERTY,
        G_PROPERTY,
    }
    export namespace ConstraintVerb {
        export const $gtype: GObject.GType<ConstraintVerb>;
    }
    enum ConstraintVerb {
        EQUALS,
        NOT_EQUALS,
        IN_LIST,
        IN_RANGE,
        MATCHES,
        IS_PRESENT,
        IS_ABSENT,
    }
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }
    enum Direction {
        INPUT,
        OUTPUT,
    }
    export namespace LibraryErrorEnum {
        export const $gtype: GObject.GType<LibraryErrorEnum>;
    }
    enum LibraryErrorEnum {
        INVARIANT,
        INVALID_ARGUMENT,
        OPERATION_FAILED,
        SERVICE_UNAVAILABLE,
    }
    export namespace LinkState {
        export const $gtype: GObject.GType<LinkState>;
    }
    enum LinkState {
        ERROR,
        UNLINKED,
        INIT,
        NEGOTIATING,
        ALLOCATING,
        PAUSED,
        ACTIVE,
    }
    export namespace NodeState {
        export const $gtype: GObject.GType<NodeState>;
    }
    enum NodeState {
        ERROR,
        CREATING,
        SUSPENDED,
        IDLE,
        RUNNING,
    }
    export namespace SettingsSpecType {
        export const $gtype: GObject.GType<SettingsSpecType>;
    }
    enum SettingsSpecType {
        UNKNOWN,
        BOOL,
        INT,
        FLOAT,
        STRING,
        ARRAY,
        OBJECT,
    }
    export namespace SiAdapterPortsState {
        export const $gtype: GObject.GType<SiAdapterPortsState>;
    }
    enum SiAdapterPortsState {
        NONE,
        CONFIGURING,
        CONFIGURED,
    }
    export namespace TransitionStep {
        export const $gtype: GObject.GType<TransitionStep>;
    }
    enum TransitionStep {
        NONE,
        ERROR,
        CUSTOM_START,
    }
    const ITERATOR_METHODS_VERSION: number;
    const LOG_LEVEL_TRACE: number;
    const OBJECT_FEATURES_ALL: ObjectFeatures;
    const OBJECT_FORMAT: string;
    const SETTINGS_PERSISTENT_METADATA_NAME_PREFIX: string;
    const SETTINGS_SCHEMA_METADATA_NAME_PREFIX: string;
    const SPA_TYPE_INVALID: number;
    function base_dirs_find_file(flags: BaseDirsFlags, subdir: string | null, filename: string): string | null;
    function base_dirs_new_files_iterator(flags: BaseDirsFlags, subdir: string | null, suffix: string | null): Iterator;
    function domain_library_quark(): GLib.Quark;
    function get_library_api_version(): string;
    function get_library_version(): string;
    function init(flags: InitFlags): void;
    function json_utils_match_rules(json: SpaJson, match_props: Properties, callback: RuleMatchCallback): boolean;
    function json_utils_match_rules_update_properties(json: SpaJson, props: Properties): number;
    function json_utils_merge_containers(a: SpaJson, b: SpaJson): SpaJson;
    function log_set_level(log_level: string): boolean;
    function log_writer_default(log_level: GLib.LogLevelFlags, fields: GLib.LogField, n_fields: bigint | number, user_data: null): GLib.LogWriterOutput;
    function proc_utils_get_proc_info(pid: never): ProcInfo;
    function spa_dynamic_id_table_register(name: string, values: null): SpaIdTable;
    function spa_dynamic_type_deinit(): void;
    function spa_dynamic_type_init(): void;
    function spa_dynamic_type_register(name: string, parent: SpaType, values: null): SpaType;
    function spa_id_table_find_value(table: SpaIdTable, value: number): SpaIdValue | null;
    function spa_id_table_find_value_from_name(table: SpaIdTable, name: string): SpaIdValue | null;
    function spa_id_table_find_value_from_short_name(table: SpaIdTable, short_name: string): SpaIdValue | null;
    function spa_id_table_from_name(name: string): SpaIdTable | null;
    function spa_id_table_get_type(): GObject.GType;
    function spa_id_table_new_iterator(table: SpaIdTable): Iterator;
    function spa_id_value_array_get_item_type(id: SpaIdValue): [SpaType, SpaIdTable | null];
    function spa_id_value_from_name(name: string): SpaIdValue;
    function spa_id_value_from_number(table_name: string, id: number): SpaIdValue;
    function spa_id_value_from_short_name(table_name: string, short_name: string): SpaIdValue;
    function spa_id_value_get_type(): GObject.GType;
    function spa_id_value_get_value_type(id: SpaIdValue): [SpaType, SpaIdTable | null];
    function spa_id_value_name(id: SpaIdValue): string;
    function spa_id_value_number(id: SpaIdValue): number;
    function spa_id_value_short_name(id: SpaIdValue): string;
    function spa_log_get_instance(): null;
    interface IteratorFoldFunc {
        (item: unknown, ret: unknown, data: null): boolean;
    }
    interface IteratorForeachFunc {
        (item: unknown, data: null): void;
    }
    interface PermissionMatchCallback {
        (self: PermissionManager, client: Client, object: GlobalProxy): number;
    }
    interface RuleMatchCallback {
        (data: null, action: string, value: SpaJson): boolean;
    }
    interface SettingsChangedCallback {
        (obj: Settings, setting: string, value: SpaJson): void;
    }
    export namespace BaseDirsFlags {
        export const $gtype: GObject.GType<BaseDirsFlags>;
    }
    enum BaseDirsFlags {
        ENV_CONFIG,
        ENV_DATA,
        ENV_MODULE,
        XDG_CONFIG_HOME,
        XDG_DATA_HOME,
        XDG_CONFIG_DIRS,
        BUILD_SYSCONFDIR,
        XDG_DATA_DIRS,
        BUILD_DATADIR,
        BUILD_LIBDIR,
        FLAG_MODULE,
        FLAG_SUBDIR_WIREPLUMBER,
        CONFIGURATION,
        DATA,
        MODULE,
    }
    export namespace CoreFeatures {
        export const $gtype: GObject.GType<CoreFeatures>;
    }
    enum CoreFeatures {
        CONNECTED,
        COMPONENTS,
    }
    export namespace InitFlags {
        export const $gtype: GObject.GType<InitFlags>;
    }
    enum InitFlags {
        PIPEWIRE,
        SPA_TYPES,
        SET_PW_LOG,
        SET_GLIB_LOG,
        ALL,
    }
    export namespace InterestMatch {
        export const $gtype: GObject.GType<InterestMatch>;
    }
    enum InterestMatch {
        NONE,
        GTYPE,
        PW_GLOBAL_PROPERTIES,
        PW_PROPERTIES,
        G_PROPERTIES,
        ALL,
    }
    export namespace InterestMatchFlags {
        export const $gtype: GObject.GType<InterestMatchFlags>;
    }
    enum InterestMatchFlags {
        NONE,
        CHECK_ALL,
    }
    export namespace LogTopicFlags {
        export const $gtype: GObject.GType<LogTopicFlags>;
    }
    enum LogTopicFlags {
        LEVEL_MASK,
        FLAG_STATIC,
        FLAG_INITIALIZED,
    }
    export namespace MetadataFeatures {
        export const $gtype: GObject.GType<MetadataFeatures>;
    }
    enum MetadataFeatures {
        DATA,
    }
    export namespace NodeFeatures {
        export const $gtype: GObject.GType<NodeFeatures>;
    }
    enum NodeFeatures {
        PORTS,
    }
    export namespace PermissionManagerFeatures {
        export const $gtype: GObject.GType<PermissionManagerFeatures>;
    }
    enum PermissionManagerFeatures {
        LOADED,
    }
    export namespace PluginFeatures {
        export const $gtype: GObject.GType<PluginFeatures>;
    }
    enum PluginFeatures {
        ENABLED,
    }
    export namespace ProxyFeatures {
        export const $gtype: GObject.GType<ProxyFeatures>;
    }
    enum ProxyFeatures {
        PROXY_FEATURE_BOUND,
        PIPEWIRE_OBJECT_FEATURE_INFO,
        PIPEWIRE_OBJECT_FEATURE_PARAM_PROPS,
        PIPEWIRE_OBJECT_FEATURE_PARAM_FORMAT,
        PIPEWIRE_OBJECT_FEATURE_PARAM_PROFILE,
        PIPEWIRE_OBJECT_FEATURE_PARAM_PORT_CONFIG,
        PIPEWIRE_OBJECT_FEATURE_PARAM_ROUTE,
        PIPEWIRE_OBJECT_FEATURES_MINIMAL,
        PIPEWIRE_OBJECT_FEATURES_ALL,
    }
    export namespace SessionItemFeatures {
        export const $gtype: GObject.GType<SessionItemFeatures>;
    }
    enum SessionItemFeatures {
        ACTIVE,
        EXPORTED,
    }
    export namespace SettingsFeatures {
        export const $gtype: GObject.GType<SettingsFeatures>;
    }
    enum SettingsFeatures {
        LOADED,
    }
    export namespace SpaDeviceFeatures {
        export const $gtype: GObject.GType<SpaDeviceFeatures>;
    }
    enum SpaDeviceFeatures {
        ENABLED,
    }
    export namespace StateMetadataFeatures {
        export const $gtype: GObject.GType<StateMetadataFeatures>;
    }
    enum StateMetadataFeatures {
        LOADED,
    }
    namespace AsyncEventHook {
        interface SignalSignatures extends InterestEventHook.SignalSignatures {
            "notify::execute-step": (pspec: GObject.ParamSpec) => void;
            "notify::get-next-step": (pspec: GObject.ParamSpec) => void;
            "notify::dispatcher": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::runs-after-hooks": (pspec: GObject.ParamSpec) => void;
            "notify::runs-before-hooks": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends InterestEventHook.ConstructorProps {
            execute_step: GObject.Closure;
            executeStep: GObject.Closure;
            get_next_step: GObject.Closure;
            getNextStep: GObject.Closure;
        }
    }
    class AsyncEventHook extends InterestEventHook {
        static $gtype: GObject.GType<AsyncEventHook>;
        set execute_step(val: GObject.Closure);
        set executeStep(val: GObject.Closure);
        set get_next_step(val: GObject.Closure);
        set getNextStep(val: GObject.Closure);
        $signals: AsyncEventHook.SignalSignatures;
        constructor(properties?: Partial<AsyncEventHook.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, before: string, after: string, get_next_step: GObject.Closure, execute_step: GObject.Closure): AsyncEventHook;
        connect<K extends keyof AsyncEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncEventHook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncEventHook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncEventHook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncEventHook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Client {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
    }
    class Client extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Client>;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        attach_permission_manager(pm: PermissionManager | null): void;
        get_permission_manager(): PermissionManager | null;
        send_error(id: number, res: number, message: string): void;
        update_properties(updates: Properties): void;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace Conf {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            properties: Properties;
        }
    }
    class Conf extends GObject.Object {
        static $gtype: GObject.GType<Conf>;
        get name(): string;
        get properties(): Properties;
        $signals: Conf.SignalSignatures;
        constructor(properties?: Partial<Conf.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, properties: Properties | null): Conf;
        static new_open(name: string, properties: Properties | null): Conf;
        connect<K extends keyof Conf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Conf.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Conf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Conf.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Conf.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Conf.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        close(): void;
        get_name(): string;
        get_section(section: string): SpaJson | null;
        is_open(): boolean;
        open(): boolean;
        parse_pw_context_sections(context: null): void;
        section_update_props(section: string, props: Properties): number;
    }
    namespace Core {
        interface SignalSignatures extends Object.SignalSignatures {
            connected: () => void;
            disconnected: () => void;
            "notify::conf": (pspec: GObject.ParamSpec) => void;
            "notify::g-main-context": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::pw-context": (pspec: GObject.ParamSpec) => void;
            "notify::pw-core": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            conf: Conf | null;
            g_main_context: GLib.MainContext | null;
            gMainContext: GLib.MainContext | null;
            properties: Properties;
            pw_context: never;
            pwContext: never;
            pw_core: never;
            pwCore: never;
        }
    }
    class Core extends Object {
        static $gtype: GObject.GType<Core>;
        get conf(): Conf | null;
        get g_main_context(): GLib.MainContext | null;
        get gMainContext(): GLib.MainContext | null;
        get properties(): Properties;
        get pw_context(): null;
        get pwContext(): null;
        get pw_core(): null;
        get pwCore(): null;
        $signals: Core.SignalSignatures;
        constructor(properties?: Partial<Core.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLib.MainContext | null, conf: Conf | null, properties: Properties | null): Core;
        connect<K extends keyof Core.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Core.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Core.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Core.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): Core;
        connect(): boolean;
        connect(...args: never[]): any;
        connect_fd(fd: number): boolean;
        disconnect(): void;
        find_object<T = GObject.Object>(func: GLib.EqualFunc): T;
        get_conf(): Conf | null;
        get_export_core(): Core;
        get_g_main_context(): GLib.MainContext | null;
        get_own_bound_id(): number;
        get_properties(): Properties;
        get_pw_context(): null;
        get_pw_core(): null;
        get_remote_cookie(): number;
        get_remote_host_name(): string;
        get_remote_name(): string;
        get_remote_properties(): Properties;
        get_remote_user_name(): string;
        get_remote_version(): string;
        get_vm_type(): string | null;
        idle_add(_function: GLib.SourceFunc): GLib.Source | null;
        idle_add_closure(closure: GObject.Closure): GLib.Source | null;
        install_object_manager(om: ObjectManager): void;
        is_connected(): boolean;
        load_component(component: string | null, type: string, args: SpaJson | null, provides: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        load_component(component: string | null, type: string, args: SpaJson | null, provides: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_component(component: string | null, type: string, args: SpaJson | null, provides: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        load_component_finish(res: Gio.AsyncResult): boolean;
        register_object(obj: GObject.Object): void;
        remove_object(obj: GObject.Object): void;
        sync(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        sync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        sync(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        sync_closure(cancellable: Gio.Cancellable | null, closure: GObject.Closure): boolean;
        sync_finish(res: Gio.AsyncResult): boolean;
        test_feature(feature: string): boolean;
        timeout_add(timeout_ms: number, _function: GLib.SourceFunc): GLib.Source | null;
        timeout_add_closure(timeout_ms: number, closure: GObject.Closure): GLib.Source | null;
        update_properties(updates: Properties): void;
    }
    namespace Device {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
    }
    class Device extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Device>;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_factory(core: Core, factory_name: string, properties: Properties | null): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace EventDispatcher {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class EventDispatcher extends GObject.Object {
        static $gtype: GObject.GType<EventDispatcher>;
        $signals: EventDispatcher.SignalSignatures;
        constructor(properties?: Partial<EventDispatcher.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EventDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventDispatcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EventDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventDispatcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EventDispatcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EventDispatcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_instance(core: Core): EventDispatcher;
        new_hooks_for_event_type_iterator(event_type: string): Iterator;
        new_hooks_iterator(): Iterator;
        push_event(event: Event): void;
        register_hook(hook: EventHook): void;
        unregister_hook(hook: EventHook): void;
    }
    namespace EventHook {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::dispatcher": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::runs-after-hooks": (pspec: GObject.ParamSpec) => void;
            "notify::runs-before-hooks": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dispatcher: EventDispatcher | null;
            name: string;
            runs_after_hooks: string[];
            runsAfterHooks: string[];
            runs_before_hooks: string[];
            runsBeforeHooks: string[];
        }
    }
    abstract class EventHook extends GObject.Object {
        static $gtype: GObject.GType<EventHook>;
        get dispatcher(): EventDispatcher | null;
        get name(): string;
        get runs_after_hooks(): string[];
        get runsAfterHooks(): string[];
        get runs_before_hooks(): string[];
        get runsBeforeHooks(): string[];
        $signals: EventHook.SignalSignatures;
        constructor(properties?: Partial<EventHook.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventHook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventHook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EventHook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EventHook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_finish(res: Gio.AsyncResult): boolean;
        vfunc_get_matching_event_types(): string[] | null;
        vfunc_run(event: Event, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_runs_for_event(event: Event): boolean;
        finish(res: Gio.AsyncResult): boolean;
        get_matching_event_types(): string[] | null;
        get_name(): string;
        get_runs_after_hooks(): string[];
        get_runs_before_hooks(): string[];
        run(event: Event, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        runs_for_event(event: Event): boolean;
    }
    namespace Factory {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
    }
    class Factory extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Factory>;
        $signals: Factory.SignalSignatures;
        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Factory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Factory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace FeatureActivationTransition {
        interface SignalSignatures extends Transition.SignalSignatures {
            "notify::completed": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Transition.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }
    class FeatureActivationTransition extends Transition implements Gio.AsyncResult {
        static $gtype: GObject.GType<FeatureActivationTransition>;
        $signals: FeatureActivationTransition.SignalSignatures;
        constructor(properties?: Partial<FeatureActivationTransition.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FeatureActivationTransition.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FeatureActivationTransition.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FeatureActivationTransition.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FeatureActivationTransition.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FeatureActivationTransition.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FeatureActivationTransition.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_requested_features(): ObjectFeatures;
        get_source_object<T = GObject.Object>(): T;
        get_user_data(): null;
        is_tagged(source_tag: null): boolean;
        legacy_propagate_error(): boolean;
        vfunc_get_source_object<T = GObject.Object>(): T;
        vfunc_get_user_data(): null;
        vfunc_is_tagged(source_tag: null): boolean;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set_data(key: string, data: null): void;
        set_data(...args: never[]): any;
    }
    namespace GlobalProxy {
        interface SignalSignatures extends Proxy.SignalSignatures {
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Proxy.ConstructorProps {
            factory_name: string;
            factoryName: string;
            global_properties: Properties;
            globalProperties: Properties;
            permissions: number;
        }
    }
    class GlobalProxy extends Proxy {
        static $gtype: GObject.GType<GlobalProxy>;
        set factory_name(val: string);
        set factoryName(val: string);
        get global_properties(): Properties;
        get globalProperties(): Properties;
        get permissions(): number;
        $signals: GlobalProxy.SignalSignatures;
        constructor(properties?: Partial<GlobalProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GlobalProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GlobalProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GlobalProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GlobalProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GlobalProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GlobalProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind(): boolean;
        get_global_properties(): Properties;
        get_permissions(): number;
        request_destroy(): void;
    }
    namespace ImplMetadata {
        interface SignalSignatures extends Metadata.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Metadata.ConstructorProps {
            name: string;
            properties: Properties;
        }
    }
    class ImplMetadata extends Metadata {
        static $gtype: GObject.GType<ImplMetadata>;
        get name(): string;
        get properties(): Properties;
        $signals: ImplMetadata.SignalSignatures;
        constructor(properties?: Partial<ImplMetadata.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](core: Core): ImplMetadata;
        static new_full(core: Core, name: string | null, properties: Properties | null): ImplMetadata;
        connect<K extends keyof ImplMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplMetadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImplMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplMetadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImplMetadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImplMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ImplModule {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::arguments": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::pw-impl-module": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            "arguments": string;
            core: never;
            name: string;
            properties: Properties;
            pw_impl_module: never;
            pwImplModule: never;
        }
    }
    class ImplModule extends GObject.Object {
        static $gtype: GObject.GType<ImplModule>;
        get "arguments"(): string;
        get core(): null;
        get name(): string;
        get properties(): Properties;
        set properties(val: Properties);
        get pw_impl_module(): null;
        get pwImplModule(): null;
        $signals: ImplModule.SignalSignatures;
        constructor(properties?: Partial<ImplModule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ImplModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplModule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImplModule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplModule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImplModule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImplModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static load(core: Core, name: string, _arguments: string | null, properties: Properties | null): ImplModule | null;
    }
    namespace ImplNode {
        interface SignalSignatures extends Proxy.SignalSignatures {
            "notify::pw-impl-node": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Proxy.ConstructorProps, PipewireObject.ConstructorProps {
            pw_impl_node: never;
            pwImplNode: never;
        }
    }
    class ImplNode extends Proxy implements PipewireObject {
        static $gtype: GObject.GType<ImplNode>;
        get pw_impl_node(): null;
        get pwImplNode(): null;
        $signals: ImplNode.SignalSignatures;
        constructor(properties?: Partial<ImplNode.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_pw_factory(core: Core, factory_name: string, properties: Properties | null): ImplNode;
        static new_wrap(core: Core, node: null): ImplNode;
        connect<K extends keyof ImplNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImplNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImplNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImplNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImplNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace InterestEventHook {
        interface SignalSignatures extends EventHook.SignalSignatures {
            "notify::dispatcher": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::runs-after-hooks": (pspec: GObject.ParamSpec) => void;
            "notify::runs-before-hooks": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends EventHook.ConstructorProps {}
    }
    abstract class InterestEventHook extends EventHook {
        static $gtype: GObject.GType<InterestEventHook>;
        $signals: InterestEventHook.SignalSignatures;
        constructor(properties?: Partial<InterestEventHook.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof InterestEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterestEventHook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InterestEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterestEventHook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InterestEventHook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InterestEventHook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_interest_full(interest: ObjectInterest): void;
    }
    namespace Link {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "state-changed": (arg0: LinkState, arg1: LinkState) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {
            state: LinkState;
        }
    }
    class Link extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Link>;
        get state(): LinkState;
        $signals: Link.SignalSignatures;
        constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_factory(core: Core, factory_name: string, properties: Properties | null): Link;
        connect<K extends keyof Link.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Link.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Link.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Link.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Link.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_linked_object_ids(): [number, number, number, number];
        get_state(): [LinkState, string];
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace Metadata {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            changed: (arg0: number, arg1: string, arg2: string, arg3: string) => void;
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps {}
    }
    class Metadata extends GlobalProxy {
        static $gtype: GObject.GType<Metadata>;
        $signals: Metadata.SignalSignatures;
        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Metadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clear(): void;
        find(subject: number, key: string): [string, string];
        new_iterator(subject: number): Iterator;
        set(subject: number, key: string | null, type: string | null, value: string | null): void;
        set(...args: never[]): any;
    }
    namespace Node {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "ports-changed": () => void;
            "state-changed": (arg0: NodeState, arg1: NodeState) => void;
            "notify::max-input-ports": (pspec: GObject.ParamSpec) => void;
            "notify::max-output-ports": (pspec: GObject.ParamSpec) => void;
            "notify::n-input-ports": (pspec: GObject.ParamSpec) => void;
            "notify::n-output-ports": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {
            max_input_ports: number;
            maxInputPorts: number;
            max_output_ports: number;
            maxOutputPorts: number;
            n_input_ports: number;
            nInputPorts: number;
            n_output_ports: number;
            nOutputPorts: number;
            state: NodeState;
        }
    }
    class Node extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Node>;
        get max_input_ports(): number;
        get maxInputPorts(): number;
        get max_output_ports(): number;
        get maxOutputPorts(): number;
        get n_input_ports(): number;
        get nInputPorts(): number;
        get n_output_ports(): number;
        get nOutputPorts(): number;
        get state(): NodeState;
        $signals: Node.SignalSignatures;
        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_factory(core: Core, factory_name: string, properties: Properties | null): Node;
        connect<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_n_input_ports(): [number, number];
        get_n_output_ports(): [number, number];
        get_n_ports(): number;
        get_state(): [NodeState, string];
        lookup_port_full(interest: ObjectInterest): Port | null;
        new_ports_filtered_iterator_full(interest: ObjectInterest): Iterator;
        new_ports_iterator(): Iterator;
        send_command(command: string): void;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_features: number;
            activeFeatures: number;
            core: Core;
            id: number;
            supported_features: number;
            supportedFeatures: number;
        }
    }
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        get active_features(): number;
        get activeFeatures(): number;
        get core(): Core;
        get id(): number;
        get supported_features(): number;
        get supportedFeatures(): number;
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_activate_execute_step(transition: FeatureActivationTransition, step: number, missing: ObjectFeatures): void;
        vfunc_activate_get_next_step(transition: FeatureActivationTransition, step: number, missing: ObjectFeatures): number;
        vfunc_deactivate(features: ObjectFeatures): void;
        vfunc_get_supported_features(): ObjectFeatures;
        abort_activation(msg: string): void;
        activate(features: ObjectFeatures, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        activate(features: ObjectFeatures, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate(features: ObjectFeatures, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        activate_closure(features: ObjectFeatures, cancellable: Gio.Cancellable | null, closure: GObject.Closure): void;
        activate_finish(res: Gio.AsyncResult): boolean;
        deactivate(features: ObjectFeatures): void;
        get_active_features(): ObjectFeatures;
        get_core(): Core;
        get_id(): number;
        get_supported_features(): ObjectFeatures;
        test_active_features(features: ObjectFeatures): boolean;
        test_supported_features(features: ObjectFeatures): boolean;
        update_features(activated: ObjectFeatures, deactivated: ObjectFeatures): void;
    }
    namespace ObjectManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            installed: () => void;
            "object-added": (arg0: GObject.Object) => void;
            "object-removed": (arg0: GObject.Object) => void;
            "objects-changed": () => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            core: Core;
        }
    }
    class ObjectManager extends GObject.Object {
        static $gtype: GObject.GType<ObjectManager>;
        get core(): Core;
        $signals: ObjectManager.SignalSignatures;
        constructor(properties?: Partial<ObjectManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ObjectManager;
        connect<K extends keyof ObjectManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_interest_full(interest: ObjectInterest): void;
        get_n_objects(): number;
        is_installed(): boolean;
        lookup_full<T = GObject.Object>(interest: ObjectInterest): T;
        new_filtered_iterator_full(interest: ObjectInterest): Iterator;
        new_iterator(): Iterator;
        request_object_features(object_type: GObject.GType, wanted_features: ObjectFeatures): void;
    }
    namespace PermissionManager {
        interface SignalSignatures extends Object.SignalSignatures {
            "client-properties-changed": (arg0: Client) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class PermissionManager extends Object {
        static $gtype: GObject.GType<PermissionManager>;
        $signals: PermissionManager.SignalSignatures;
        constructor(properties?: Partial<PermissionManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](core: Core): PermissionManager;
        connect<K extends keyof PermissionManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PermissionManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PermissionManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PermissionManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PermissionManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PermissionManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_interest_match(callback: PermissionMatchCallback, interest: ObjectInterest): number;
        add_interest_match_closure(closure: GObject.Closure, interest: ObjectInterest): number;
        add_interest_match_simple(permissions: number, interest: ObjectInterest): number;
        add_rules_match(rules: SpaJson): number;
        get_default_permissions(): number;
        remove_match(match_id: number): void;
        set_core_permissions(permissions: number): void;
        set_default_permissions(permissions: number): void;
        update_permissions(): void;
    }
    namespace Plugin {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            name: string;
        }
    }
    abstract class Plugin extends Object {
        static $gtype: GObject.GType<Plugin>;
        get name(): string;
        $signals: Plugin.SignalSignatures;
        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(core: Core, plugin_name: string): Plugin | null;
        vfunc_disable(): void;
        vfunc_enable(transition: Transition): void;
        get_name(): string;
    }
    namespace Port {
        interface SignalSignatures extends GlobalProxy.SignalSignatures {
            "notify::factory-name": (pspec: GObject.ParamSpec) => void;
            "notify::global-properties": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
            "notify::native-info": (pspec: GObject.ParamSpec) => void;
            "notify::param-info": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
    }
    class Port extends GlobalProxy implements PipewireObject {
        static $gtype: GObject.GType<Port>;
        $signals: Port.SignalSignatures;
        constructor(properties?: Partial<Port.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Port.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Port.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Port.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Port.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Port.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Port.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_direction(): Direction;
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        vfunc_get_native_info(): null;
        vfunc_get_param_info(): GLib.Variant | null;
        vfunc_get_properties(): Properties;
        vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    namespace Proxy {
        interface SignalSignatures extends Object.SignalSignatures {
            bound: (arg0: number) => void;
            error: (arg0: number, arg1: number, arg2: string) => void;
            "pw-proxy-created": (arg0: null) => void;
            "pw-proxy-destroyed": () => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            bound_id: number;
            boundId: number;
            pw_proxy: never;
            pwProxy: never;
        }
    }
    abstract class Proxy extends Object {
        static $gtype: GObject.GType<Proxy>;
        get bound_id(): number;
        get boundId(): number;
        get pw_proxy(): null;
        get pwProxy(): null;
        $signals: Proxy.SignalSignatures;
        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bound(id: number): void;
        vfunc_error(seq: number, res: number, message: string): void;
        vfunc_pw_proxy_created(proxy: null): void;
        vfunc_pw_proxy_destroyed(): void;
        get_bound_id(): number;
        get_interface_type(): [string, number];
        get_pw_proxy(): null;
        set_pw_proxy(proxy: null): void;
    }
    namespace SessionItem {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            properties: Properties;
        }
    }
    abstract class SessionItem extends Object {
        static $gtype: GObject.GType<SessionItem>;
        get properties(): Properties;
        $signals: SessionItem.SignalSignatures;
        constructor(properties?: Partial<SessionItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SessionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SessionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SessionItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SessionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static handle_proxy_destroyed(proxy: Proxy, item: SessionItem): void;
        static make(core: Core, factory_name: string): SessionItem | null;
        vfunc_configure(props: Properties): boolean;
        vfunc_disable_active(): void;
        vfunc_disable_exported(): void;
        vfunc_enable_active(transition: Transition): void;
        vfunc_enable_exported(transition: Transition): void;
        vfunc_get_associated_proxy(proxy_type: GObject.GType): null;
        vfunc_reset(): void;
        configure(props: Properties): boolean;
        get_associated_proxy(proxy_type: GObject.GType): Proxy | null;
        get_associated_proxy_id(proxy_type: GObject.GType): number;
        get_properties(): Properties;
        get_property(key: string): string;
        get_property(...args: never[]): any;
        is_configured(): boolean;
        register(): void;
        remove(): void;
        reset(): void;
        set_properties(props: Properties): void;
    }
    namespace Settings {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::metadata-name": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            metadata_name: string;
            metadataName: string;
        }
    }
    class Settings extends Object {
        static $gtype: GObject.GType<Settings>;
        get metadata_name(): string;
        get metadataName(): string;
        $signals: Settings.SignalSignatures;
        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](core: Core, metadata_name: string | null): Settings;
        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(core: Core, metadata_name: string | null): Settings | null;
        ["delete"](name: string): boolean;
        delete_all(): void;
        get(name: string): SpaJson | null;
        get_saved(name: string): SpaJson | null;
        get_spec(name: string): SettingsSpec | null;
        new_iterator(): Iterator;
        reset(name: string): boolean;
        reset_all(): void;
        save(name: string): boolean;
        save_all(): void;
        set(name: string, value: SpaJson): boolean;
        set(...args: never[]): any;
        subscribe(pattern: string, callback: SettingsChangedCallback): number;
        subscribe_closure(pattern: string, closure: GObject.Closure | null): number;
        unsubscribe(subscription_id: bigint | number): boolean;
    }
    namespace SiFactory {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }
    abstract class SiFactory extends GObject.Object {
        static $gtype: GObject.GType<SiFactory>;
        get name(): string;
        $signals: SiFactory.SignalSignatures;
        constructor(properties?: Partial<SiFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_simple(factory_name: string, si_type: GObject.GType): SiFactory;
        connect<K extends keyof SiFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SiFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SiFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SiFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SiFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SiFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(core: Core, factory_name: string): SiFactory | null;
        vfunc_construct(core: Core): SessionItem;
        construct(core: Core): SessionItem;
        get_name(): string;
    }
    namespace SimpleEventHook {
        interface SignalSignatures extends InterestEventHook.SignalSignatures {
            "notify::closure": (pspec: GObject.ParamSpec) => void;
            "notify::dispatcher": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::runs-after-hooks": (pspec: GObject.ParamSpec) => void;
            "notify::runs-before-hooks": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends InterestEventHook.ConstructorProps {
            closure: GObject.Closure;
        }
    }
    class SimpleEventHook extends InterestEventHook {
        static $gtype: GObject.GType<SimpleEventHook>;
        set closure(val: GObject.Closure);
        $signals: SimpleEventHook.SignalSignatures;
        constructor(properties?: Partial<SimpleEventHook.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, before: string, after: string, closure: GObject.Closure): SimpleEventHook;
        connect<K extends keyof SimpleEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleEventHook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleEventHook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleEventHook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleEventHook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleEventHook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SpaDevice {
        interface SignalSignatures extends Proxy.SignalSignatures {
            "create-object": (arg0: number, arg1: string, arg2: string, arg3: Properties) => void;
            event: (arg0: SpaPod) => void;
            "object-removed": (arg0: number) => void;
            "params-changed": (arg0: string) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::spa-device-handle": (pspec: GObject.ParamSpec) => void;
            "notify::bound-id": (pspec: GObject.ParamSpec) => void;
            "notify::pw-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Proxy.ConstructorProps {
            properties: Properties;
            spa_device_handle: never;
            spaDeviceHandle: never;
        }
    }
    class SpaDevice extends Proxy {
        static $gtype: GObject.GType<SpaDevice>;
        get properties(): Properties;
        get spa_device_handle(): null;
        get spaDeviceHandle(): null;
        $signals: SpaDevice.SignalSignatures;
        constructor(properties?: Partial<SpaDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_spa_factory(core: Core, factory_name: string, properties: Properties | null): SpaDevice;
        static new_wrap(core: Core, spa_device_handle: null, properties: Properties | null): SpaDevice;
        connect<K extends keyof SpaDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpaDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpaDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpaDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_managed_object<T = GObject.Object>(id: number): T;
        get_properties(): Properties;
        new_managed_object_iterator(): Iterator;
        set_managed_pending(id: number): void;
        set_param(id: string, flags: number, param: SpaPod): boolean;
        store_managed_object(id: number, object: GObject.Object | null): void;
    }
    namespace SpaType {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class SpaType {
        static $gtype: GObject.GType<SpaType>;
        _init(...args: any[]): void;
        connect<K extends keyof SpaType.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaType.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpaType.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaType.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpaType.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpaType.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_name(name: string): SpaType;
        get_object_id_values_table(): SpaIdTable;
        get_values_table(): SpaIdTable;
        is_fundamental(): boolean;
        is_id(): boolean;
        is_object(): boolean;
        name(): string;
        parent(): SpaType;
    }
    namespace State {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            timeout: number;
        }
    }
    class State extends GObject.Object {
        static $gtype: GObject.GType<State>;
        get name(): string;
        get timeout(): number;
        set timeout(val: number);
        $signals: State.SignalSignatures;
        constructor(properties?: Partial<State.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string): State;
        connect<K extends keyof State.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, State.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof State.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, State.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof State.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<State.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clear(): void;
        get_location(): string;
        get_name(): string;
        load(): Properties;
        save(props: Properties): boolean;
        save_after_timeout(core: Core, props: Properties): void;
    }
    namespace StateMetadata {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::active-features": (pspec: GObject.ParamSpec) => void;
            "notify::core": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::supported-features": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            name: string;
            timeout: number;
        }
    }
    class StateMetadata extends Object {
        static $gtype: GObject.GType<StateMetadata>;
        get name(): string;
        get timeout(): number;
        set timeout(val: number);
        $signals: StateMetadata.SignalSignatures;
        constructor(properties?: Partial<StateMetadata.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](core: Core, name: string): StateMetadata;
        connect<K extends keyof StateMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMetadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StateMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMetadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StateMetadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StateMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clear(): void;
        get(key: string): string;
        get_location(): string;
        get_name(): string;
        set(key: string, value: string | null): void;
        set(...args: never[]): any;
    }
    namespace Transition {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::completed": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {
            completed: boolean;
        }
    }
    abstract class Transition extends GObject.Object implements Gio.AsyncResult {
        static $gtype: GObject.GType<Transition>;
        get completed(): boolean;
        $signals: Transition.SignalSignatures;
        constructor(properties?: Partial<Transition.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](type: GObject.GType, source_object: GObject.Object | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): Transition;
        static new_closure(type: GObject.GType, source_object: GObject.Object | null, cancellable: Gio.Cancellable | null, closure: GObject.Closure | null): Transition;
        connect<K extends keyof Transition.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transition.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Transition.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transition.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Transition.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Transition.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static finish(res: Gio.AsyncResult): boolean;
        vfunc_execute_step(step: number): void;
        vfunc_get_next_step(step: number): number;
        advance(): void;
        get_completed(): boolean;
        get_data(): null;
        get_source_object<T = GObject.Object>(): T;
        get_source_tag(): null;
        had_error(): boolean;
        is_tagged(tag: null): boolean;
        return_error(error: GLib.Error): void;
        set_data(data: null): void;
        set_data(...args: never[]): any;
        set_source_tag(tag: null): void;
        get_user_data(): null;
        legacy_propagate_error(): boolean;
        vfunc_get_source_object<T = GObject.Object>(): T;
        vfunc_get_user_data(): null;
        vfunc_is_tagged(source_tag: null): boolean;
    }
    type AsyncEventHookClass = typeof AsyncEventHook;
    type ClientClass = typeof Client;
    type ComponentLoaderInterface = typeof ComponentLoader;
    type ConfClass = typeof Conf;
    type CoreClass = typeof Core;
    type DeviceClass = typeof Device;
    class Event {
        static $gtype: GObject.GType<Event>;
        constructor(type: string, priority: number, properties: Properties | null, source: GObject.Object, subject: GObject.Object | null);
        static ["new"](type: string, priority: number, properties: Properties | null, source: GObject.Object, subject: GObject.Object | null): Event;
        collect_hooks(dispatcher: EventDispatcher): boolean;
        get_cancellable(): Gio.Cancellable;
        get_data(key: string): unknown | null;
        get_name(): string;
        get_priority(): number;
        get_properties(): Properties;
        get_source<T = GObject.Object>(): T;
        get_subject<T = GObject.Object>(): T;
        new_hooks_iterator(): Iterator;
        ref(): Event;
        set_data(key: string, data: GObject.Value | any | null): void;
        stop_processing(): void;
        unref(): void;
    }
    type EventDispatcherClass = typeof EventDispatcher;
    type EventHookClass = typeof EventHook;
    type FactoryClass = typeof Factory;
    type FeatureActivationTransitionClass = typeof FeatureActivationTransition;
    abstract class Global {
        static $gtype: GObject.GType<Global>;
    }
    type GlobalProxyClass = typeof GlobalProxy;
    type ImplMetadataClass = typeof ImplMetadata;
    type ImplModuleClass = typeof ImplModule;
    type ImplNodeClass = typeof ImplNode;
    type InterestEventHookClass = typeof InterestEventHook;
    class Iterator {
        static $gtype: GObject.GType<Iterator>;
        constructor(methods: IteratorMethods, user_size: bigint | number);
        static ["new"](methods: IteratorMethods, user_size: bigint | number): Iterator;
        fold(func: IteratorFoldFunc, ret: GObject.Value | any): [boolean, unknown];
        foreach(func: IteratorForeachFunc): boolean;
        get_user_data(): null;
        next(): [boolean, unknown];
        ref(): Iterator;
        reset(): void;
        unref(): void;
    }
    class IteratorMethods {
        static $gtype: GObject.GType<IteratorMethods>;
        version: number;
        constructor(properties?: Partial<{
            version: number;
        }>);
    }
    type LinkClass = typeof Link;
    class LogTopic {
        static $gtype: GObject.GType<LogTopic>;
        topic_name: string;
        flags: LogTopicFlags;
        init(): void;
        register(): void;
        unregister(): void;
    }
    type MetadataClass = typeof Metadata;
    abstract class MetadataItem {
        static $gtype: GObject.GType<MetadataItem>;
        get_key(): string;
        get_subject(): number;
        get_value(): string;
        get_value_type(): string;
        ref(): MetadataItem;
        unref(): void;
    }
    type NodeClass = typeof Node;
    type ObjectClass = typeof Object;
    class ObjectInterest {
        static $gtype: GObject.GType<ObjectInterest>;
        constructor(gtype: GObject.GType, ___: any[]);
        static new_type(gtype: GObject.GType): ObjectInterest;
        add_constraint(type: ConstraintType, subject: string, verb: ConstraintVerb, value: GLib.Variant | null): void;
        find_defined_constraint_values(type: ConstraintType, subject: string): GLib.Variant[] | null;
        matches(object: null): boolean;
        matches_full(flags: InterestMatchFlags, object_type: GObject.GType, object: GObject.Object | null, pw_props: Properties | null, pw_global_props: Properties | null): InterestMatch;
        ref(): ObjectInterest;
        unref(): void;
        validate(): boolean;
    }
    type ObjectManagerClass = typeof ObjectManager;
    type PermissionManagerClass = typeof PermissionManager;
    type PipewireObjectInterface = typeof PipewireObject;
    type PluginClass = typeof Plugin;
    type PortClass = typeof Port;
    abstract class ProcInfo {
        static $gtype: GObject.GType<ProcInfo>;
        get_arg(index: number): string;
        get_cgroup(): string;
        get_n_args(): number;
        get_parent_pid(): never;
        get_pid(): never;
        ref(): ProcInfo;
        unref(): void;
    }
    class Properties {
        static $gtype: GObject.GType<Properties>;
        constructor(properties?: Partial<{}>);
        static new_copy(props: null): Properties;
        static new_copy_dict(dict: null): Properties;
        static new_empty(): Properties;
        static new_json(json: SpaJson): Properties;
        static new_string(str: string): Properties;
        static new_take(props: null): Properties;
        static new_wrap(props: null): Properties;
        static new_wrap_dict(dict: null): Properties;
        add(props: Properties): number;
        add_from_dict(dict: null): number;
        add_keys_array(props: Properties, keys: string[]): number;
        clear(): void;
        copy(): Properties;
        ensure_unique_owner(): Properties;
        get(key: string): string | null;
        get_count(): number;
        matches(other: Properties): boolean;
        new_iterator(): Iterator;
        peek_dict(): null;
        ref(): Properties;
        set(key: string, value: string | null): number;
        sort(): void;
        to_pw_properties(): null;
        unref(): void;
        unref_and_take_pw_properties(): null;
        update(props: Properties): number;
        update_from_dict(dict: null): number;
        update_from_json(json: SpaJson): number;
        update_keys_array(props: Properties, keys: string[]): number;
    }
    abstract class PropertiesItem {
        static $gtype: GObject.GType<PropertiesItem>;
        get_key(): string;
        get_value(): string;
        ref(): PropertiesItem;
        unref(): void;
    }
    type ProxyClass = typeof Proxy;
    type SessionItemClass = typeof SessionItem;
    type SettingsClass = typeof Settings;
    abstract class SettingsItem {
        static $gtype: GObject.GType<SettingsItem>;
        get_key(): string;
        get_value(): SpaJson;
        ref(): SettingsItem;
        unref(): void;
    }
    abstract class SettingsSpec {
        static $gtype: GObject.GType<SettingsSpec>;
        check_value(value: SpaJson): boolean;
        get_default_value(): SpaJson;
        get_description(): string;
        get_max_value(): SpaJson | null;
        get_min_value(): SpaJson | null;
        get_name(): string | null;
        get_value_type(): SettingsSpecType;
        ref(): SettingsSpec;
        unref(): void;
    }
    type SiAcquisitionInterface = typeof SiAcquisition;
    type SiAdapterInterface = typeof SiAdapter;
    type SiFactoryClass = typeof SiFactory;
    type SiLinkInterface = typeof SiLink;
    type SiLinkableInterface = typeof SiLinkable;
    type SimpleEventHookClass = typeof SimpleEventHook;
    type SpaDeviceClass = typeof SpaDevice;
    class SpaJson {
        static $gtype: GObject.GType<SpaJson>;
        constructor(properties?: Partial<{}>);
        static new_boolean(value: boolean): SpaJson;
        static new_float(value: number): SpaJson;
        static new_from_string(json_str: string): SpaJson;
        static new_from_stringn(json_str: string, len: bigint | number): SpaJson;
        static new_int(value: number): SpaJson;
        static new_null(): SpaJson;
        static new_string(value: string): SpaJson;
        static new_wrap(json: null): SpaJson;
        static new_wrap_string(json_str: string): SpaJson;
        static new_wrap_stringn(json_str: string, len: bigint | number): SpaJson;
        copy(): SpaJson;
        ensure_unique_owner(): SpaJson;
        get_data(): string;
        get_size(): number;
        get_spa_json(): null;
        is_array(): boolean;
        is_boolean(): boolean;
        is_container(): boolean;
        is_float(): boolean;
        is_int(): boolean;
        is_null(): boolean;
        is_object(): boolean;
        is_string(): boolean;
        is_unique_owner(): boolean;
        new_iterator(): Iterator;
        parse_boolean(): [boolean, boolean];
        parse_float(): [boolean, number];
        parse_int(): [boolean, number];
        parse_string(): string;
        ref(): SpaJson;
        to_string(): string;
        unref(): void;
    }
    class SpaJsonBuilder {
        static $gtype: GObject.GType<SpaJsonBuilder>;
        constructor(properties?: Partial<{}>);
        static new_array(): SpaJsonBuilder;
        static new_object(): SpaJsonBuilder;
        add_boolean(value: boolean): void;
        add_float(value: number): void;
        add_from_string(json_str: string): void;
        add_from_stringn(json_str: string, len: bigint | number): void;
        add_int(value: number): void;
        add_json(json: SpaJson): void;
        add_null(): void;
        add_property(key: string): void;
        add_string(value: string): void;
        end(): SpaJson;
        ref(): SpaJsonBuilder;
        unref(): void;
    }
    class SpaJsonParser {
        static $gtype: GObject.GType<SpaJsonParser>;
        constructor(json: SpaJson);
        static new_array(json: SpaJson): SpaJsonParser;
        static new_object(json: SpaJson): SpaJsonParser;
        static new_undefined(json: SpaJson): SpaJsonParser;
        end(): void;
        get_boolean(): [boolean, boolean];
        get_float(): [boolean, number];
        get_int(): [boolean, number];
        get_json(): SpaJson;
        get_null(): boolean;
        get_string(): string;
        ref(): SpaJsonParser;
        unref(): void;
    }
    class SpaPod {
        static $gtype: GObject.GType<SpaPod>;
        constructor(properties?: Partial<{}>);
        static new_boolean(value: boolean): SpaPod;
        static new_bytes(value: null, len: number): SpaPod;
        static new_double(value: number): SpaPod;
        static new_fd(value: bigint | number): SpaPod;
        static new_float(value: number): SpaPod;
        static new_fraction(num: number, denom: number): SpaPod;
        static new_id(value: number): SpaPod;
        static new_int(value: number): SpaPod;
        static new_long(value: bigint | number): SpaPod;
        static new_none(): SpaPod;
        static new_pointer(type_name: string, value: null): SpaPod;
        static new_rectangle(width: number, height: number): SpaPod;
        static new_string(value: string): SpaPod;
        static new_wrap(pod: null): SpaPod;
        static new_wrap_const(pod: null): SpaPod;
        copy(): SpaPod;
        ensure_unique_owner(): SpaPod;
        equal(pod: SpaPod): boolean;
        filter(filter: SpaPod): SpaPod;
        fixate(): boolean;
        get_array_child(): SpaPod;
        get_boolean(): [boolean, boolean];
        get_bytes(): [boolean, null, number];
        get_choice_child(): SpaPod;
        get_choice_type(): SpaIdValue;
        get_control(): [boolean, number, string, SpaPod | null];
        get_double(): [boolean, number];
        get_fd(): [boolean, number];
        get_float(): [boolean, number];
        get_fraction(): [boolean, number, number];
        get_id(): [boolean, number];
        get_int(): [boolean, number];
        get_long(): [boolean, number];
        get_pointer(): [boolean, null];
        get_property(): [boolean, string, SpaPod | null];
        get_rectangle(): [boolean, number, number];
        get_spa_pod(): null;
        get_spa_type(): SpaType;
        get_string(): [boolean, string];
        is_array(): boolean;
        is_boolean(): boolean;
        is_bytes(): boolean;
        is_choice(): boolean;
        is_control(): boolean;
        is_double(): boolean;
        is_fd(): boolean;
        is_float(): boolean;
        is_fraction(): boolean;
        is_id(): boolean;
        is_int(): boolean;
        is_long(): boolean;
        is_none(): boolean;
        is_object(): boolean;
        is_pointer(): boolean;
        is_property(): boolean;
        is_rectangle(): boolean;
        is_sequence(): boolean;
        is_string(): boolean;
        is_struct(): boolean;
        is_unique_owner(): boolean;
        new_iterator(): Iterator;
        ref(): SpaPod;
        set_boolean(value: boolean): boolean;
        set_double(value: number): boolean;
        set_fd(value: bigint | number): boolean;
        set_float(value: number): boolean;
        set_fraction(num: number, denom: number): boolean;
        set_id(value: number): boolean;
        set_int(value: number): boolean;
        set_long(value: bigint | number): boolean;
        set_pod(pod: SpaPod): boolean;
        set_pointer(type_name: string, value: null): boolean;
        set_rectangle(width: number, height: number): boolean;
        unref(): void;
    }
    class SpaPodBuilder {
        static $gtype: GObject.GType<SpaPodBuilder>;
        constructor(properties?: Partial<{}>);
        static new_array(): SpaPodBuilder;
        static new_choice(choice_type: string): SpaPodBuilder;
        static new_object(type_name: string, id_name: string): SpaPodBuilder;
        static new_sequence(unit: number): SpaPodBuilder;
        static new_struct(): SpaPodBuilder;
        add_boolean(value: boolean): void;
        add_bytes(value: null, len: number): void;
        add_control(offset: number, ctl_type: string): void;
        add_double(value: number): void;
        add_fd(value: bigint | number): void;
        add_float(value: number): void;
        add_fraction(num: number, denom: number): void;
        add_id(value: number): void;
        add_int(value: number): void;
        add_long(value: bigint | number): void;
        add_none(): void;
        add_pod(pod: SpaPod): void;
        add_pointer(type_name: string, value: null): void;
        add_property(key: string): void;
        add_property_id(id: number): void;
        add_rectangle(width: number, height: number): void;
        add_string(value: string): void;
        end(): SpaPod;
        ref(): SpaPodBuilder;
        unref(): void;
    }
    class SpaPodParser {
        static $gtype: GObject.GType<SpaPodParser>;
        constructor(pod: SpaPod, id_name: string);
        static new_object(pod: SpaPod, id_name: string): SpaPodParser;
        static new_struct(pod: SpaPod): SpaPodParser;
        end(): void;
        get_boolean(): [boolean, boolean];
        get_bytes(): [boolean, null, number];
        get_double(): [boolean, number];
        get_fd(): [boolean, number];
        get_float(): [boolean, number];
        get_fraction(): [boolean, number, number];
        get_id(): [boolean, number];
        get_int(): [boolean, number];
        get_long(): [boolean, number];
        get_pod(): SpaPod;
        get_pointer(): [boolean, null];
        get_rectangle(): [boolean, number, number];
        get_string(): [boolean, string];
        ref(): SpaPodParser;
        unref(): void;
    }
    type StateClass = typeof State;
    type StateMetadataClass = typeof StateMetadata;
    type TransitionClass = typeof Transition;
    namespace ComponentLoader {
        interface Interface {
            vfunc_load(core: Core, component: string, type: string, args: SpaJson, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_supports_type(type: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ComponentLoaderNamespace {
        $gtype: GObject.GType<ComponentLoader>;
        prototype: ComponentLoader;
    }
    interface ComponentLoader extends GObject.Object, ComponentLoader.Interface {
    }
    export const ComponentLoader: ComponentLoaderNamespace & {
        new (): ComponentLoader; 
    };
    namespace PipewireObject {
        interface Interface {
            vfunc_enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            vfunc_enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
            vfunc_get_native_info(): null;
            vfunc_get_param_info(): GLib.Variant | null;
            vfunc_get_properties(): Properties;
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
        }
        interface ConstructorProps extends Proxy.ConstructorProps {
            native_info: never;
            nativeInfo: never;
            param_info: GLib.Variant | null;
            paramInfo: GLib.Variant | null;
            properties: Properties;
        }
    }
    export interface PipewireObjectNamespace {
        $gtype: GObject.GType<PipewireObject>;
        prototype: PipewireObject;
    }
    interface PipewireObject extends Proxy, PipewireObject.Interface {
        get native_info(): null;
        get nativeInfo(): null;
        get param_info(): GLib.Variant | null;
        get paramInfo(): GLib.Variant | null;
        get properties(): Properties;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Iterator | null>;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enum_params(id: string | null, filter: SpaPod | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Iterator | null> | void;
        enum_params_finish(res: Gio.AsyncResult): Iterator | null;
        enum_params_sync(id: string, filter: SpaPod | null): Iterator | null;
        get_native_info(): null;
        get_param_info(): GLib.Variant | null;
        get_properties(): Properties;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        new_properties_iterator(): Iterator;
        set_param(id: string, flags: number, param: SpaPod): boolean;
    }
    export const PipewireObject: PipewireObjectNamespace & {
        new (): PipewireObject; 
    };
    namespace SiAcquisition {
        interface Interface {
            vfunc_acquire(acquisitor: SiLink, item: SiLinkable, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_acquire_finish(res: Gio.AsyncResult): boolean;
            vfunc_release(acquisitor: SiLink, item: SiLinkable): void;
        }
        interface ConstructorProps extends SessionItem.ConstructorProps {}
    }
    export interface SiAcquisitionNamespace {
        $gtype: GObject.GType<SiAcquisition>;
        prototype: SiAcquisition;
    }
    interface SiAcquisition extends SessionItem, SiAcquisition.Interface {
        acquire(acquisitor: SiLink, item: SiLinkable): globalThis.Promise<boolean>;
        acquire(acquisitor: SiLink, item: SiLinkable, callback: Gio.AsyncReadyCallback<this> | null): void;
        acquire(acquisitor: SiLink, item: SiLinkable, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        acquire_finish(res: Gio.AsyncResult): boolean;
        release(acquisitor: SiLink, item: SiLinkable): void;
    }
    export const SiAcquisition: SiAcquisitionNamespace & {
        new (): SiAcquisition; 
    };
    namespace SiAdapter {
        interface Interface {
            vfunc_get_ports_format(): [SpaPod, string];
            vfunc_get_ports_state(): SiAdapterPortsState;
            vfunc_set_ports_format(format: SpaPod | null, mode: string | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_set_ports_format_finish(res: Gio.AsyncResult): boolean;
        }
        interface ConstructorProps extends SessionItem.ConstructorProps {}
    }
    export interface SiAdapterNamespace {
        $gtype: GObject.GType<SiAdapter>;
        prototype: SiAdapter;
    }
    interface SiAdapter extends SessionItem, SiAdapter.Interface {
        get_ports_format(): [SpaPod, string];
        get_ports_state(): SiAdapterPortsState;
        set_ports_format(format: SpaPod | null, mode: string | null): globalThis.Promise<boolean>;
        set_ports_format(format: SpaPod | null, mode: string | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_ports_format(format: SpaPod | null, mode: string | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_ports_format_finish(res: Gio.AsyncResult): boolean;
    }
    export const SiAdapter: SiAdapterNamespace & {
        new (): SiAdapter; 
    };
    namespace SiLink {
        interface Interface {
            vfunc_get_in_item(): SiLinkable;
            vfunc_get_out_item(): SiLinkable;
            vfunc_get_properties(): Properties | null;
            vfunc_get_registration_info(): GLib.Variant;
        }
        interface ConstructorProps extends SessionItem.ConstructorProps {}
    }
    export interface SiLinkNamespace {
        $gtype: GObject.GType<SiLink>;
        prototype: SiLink;
    }
    interface SiLink extends SessionItem, SiLink.Interface {
        get_in_item(): SiLinkable;
        get_out_item(): SiLinkable;
        get_properties(): Properties | null;
        get_properties(...args: never[]): any;
        get_registration_info(): GLib.Variant;
    }
    export const SiLink: SiLinkNamespace & {
        new (): SiLink; 
    };
    namespace SiLinkable {
        interface Interface {
            vfunc_get_acquisition(): SiAcquisition | null;
            vfunc_get_ports(context: string | null): GLib.Variant;
        }
        interface ConstructorProps extends SessionItem.ConstructorProps {}
    }
    export interface SiLinkableNamespace {
        $gtype: GObject.GType<SiLinkable>;
        prototype: SiLinkable;
    }
    interface SiLinkable extends SessionItem, SiLinkable.Interface {
        get_acquisition(): SiAcquisition | null;
        get_ports(context: string | null): GLib.Variant;
    }
    export const SiLinkable: SiLinkableNamespace & {
        new (): SiLinkable; 
    };
    type ObjectFeatures = number;
    type SpaIdTable = never;
    type SpaIdValue = never;
    const __name__: string;
    const __version__: string;
}
export default Wp;
}
declare module 'gi://Wp' {
    import Wp05 from 'gi://Wp?version=0.5';
    export default Wp05;
}
