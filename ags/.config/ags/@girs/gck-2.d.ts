declare module 'gi://Gck?version=2' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Gck {
    export namespace BuilderFlags {
        export const $gtype: GObject.GType<BuilderFlags>;
    }
    enum BuilderFlags {
        NONE,
        SECURE_MEMORY,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static PROBLEM: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class UriError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static BAD_SCHEME: number;
        static BAD_ENCODING: number;
        static BAD_SYNTAX: number;
        static BAD_VERSION: number;
        static NOT_FOUND: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    const INVALID: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const URI_FOR_MODULE_WITH_VERSION: number;
    const URI_FOR_OBJECT_ON_TOKEN: number;
    const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number;
    const VENDOR_CODE: number;
    function error_quark(): GLib.Quark;
    function message_from_rv(rv: bigint | number): string;
    function modules_enumerate_objects(modules: Module[], attrs: Attributes, session_options: SessionOptions): Enumerator;
    function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions): Enumerator;
    function modules_get_slots(modules: Module[], token_present: boolean): Slot[];
    function modules_initialize_registered(cancellable: Gio.Cancellable | null): Module[];
    function modules_initialize_registered_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Module[]>;
    function modules_initialize_registered_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null): void;
    function modules_initialize_registered_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null): globalThis.Promise<Module[]> | void;
    function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[];
    function modules_object_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object | null;
    function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object[];
    function modules_token_for_uri(modules: Module[], uri: string): Slot;
    function modules_tokens_for_uri(modules: Module[], uri: string): Slot[];
    function objects_from_handle_array(session: Session, object_handles: (bigint | number)[]): Object[];
    function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator;
    function uri_data_parse(string: string, flags: UriFlags): UriData;
    function uri_error_quark(): GLib.Quark;
    function value_to_boolean(value: Uint8Array | string): [boolean, boolean];
    function value_to_ulong(value: Uint8Array | string): [boolean, number];
    interface Allocator {
        (data: null, length: number): null;
    }
    export namespace SessionOptions {
        export const $gtype: GObject.GType<SessionOptions>;
    }
    enum SessionOptions {
        READ_ONLY,
        READ_WRITE,
        LOGIN_USER,
        AUTHENTICATE,
    }
    export namespace UriFlags {
        export const $gtype: GObject.GType<UriFlags>;
    }
    enum UriFlags {
        FOR_OBJECT,
        FOR_TOKEN,
        FOR_MODULE,
        WITH_VERSION,
        FOR_ANY,
    }
    namespace Enumerator {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::chained": (pspec: GObject.ParamSpec) => void;
            "notify::interaction": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chained: Enumerator | null;
            interaction: Gio.TlsInteraction | null;
        }
    }
    class Enumerator extends GObject.Object {
        static $gtype: GObject.GType<Enumerator>;
        get chained(): Enumerator | null;
        set chained(val: Enumerator | null);
        get interaction(): Gio.TlsInteraction | null;
        set interaction(val: Gio.TlsInteraction | null);
        $signals: Enumerator.SignalSignatures;
        constructor(properties?: Partial<Enumerator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Enumerator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Enumerator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Enumerator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Enumerator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Enumerator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Enumerator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_chained(): Enumerator | null;
        get_interaction(): Gio.TlsInteraction | null;
        get_object_type(): GObject.GType;
        next(cancellable: Gio.Cancellable | null): Object | null;
        next_async(max_objects: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Object[]>;
        next_async(max_objects: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        next_async(max_objects: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Object[]> | void;
        next_finish(result: Gio.AsyncResult): Object[];
        next_n(max_objects: number, cancellable: Gio.Cancellable | null): Object[];
        set_chained(chained: Enumerator | null): void;
        set_interaction(interaction: Gio.TlsInteraction | null): void;
        set_object_type(object_type: GObject.GType, attr_types: (bigint | number)[]): void;
    }
    namespace Module {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::functions": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            functions: never;
            path: string;
        }
    }
    class Module extends GObject.Object {
        static $gtype: GObject.GType<Module>;
        get functions(): null;
        get path(): string;
        $signals: Module.SignalSignatures;
        constructor(properties?: Partial<Module.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Module.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Module.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Module.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Module.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Module.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Module.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static initialize(path: string, cancellable: Gio.Cancellable | null): Module;
        static initialize_async(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Module> | null): void;
        static initialize_finish(result: Gio.AsyncResult): Module | null;
        vfunc_authenticate_object(object: Object, label: string, password: string): boolean;
        vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean;
        equal(module2: Module): boolean;
        get_info(): ModuleInfo;
        get_path(): string;
        get_slots(token_present: boolean): Slot[];
        hash(): number;
        match(uri: UriData): boolean;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::module": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: bigint | number;
            module: Module;
            session: Session;
        }
    }
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        get handle(): number;
        get module(): Module;
        get session(): Session;
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static from_handle(session: Session, object_handle: bigint | number): Object;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cache_lookup(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): Attributes;
        cache_lookup_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): globalThis.Promise<Attributes>;
        cache_lookup_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        cache_lookup_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Attributes> | void;
        cache_lookup_finish(result: Gio.AsyncResult): Attributes;
        destroy(cancellable: Gio.Cancellable | null): boolean;
        destroy_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        destroy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        destroy_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        destroy_finish(result: Gio.AsyncResult): boolean;
        equal(object2: Object): boolean;
        get_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): globalThis.Promise<Attributes>;
        get_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Attributes> | void;
        get_data(attr_type: bigint | number, cancellable: Gio.Cancellable | null): Uint8Array;
        get_data(...args: never[]): any;
        get_data_async(attr_type: bigint | number, allocator: Allocator, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        get_data_async(attr_type: bigint | number, allocator: Allocator, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_data_async(attr_type: bigint | number, allocator: Allocator, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        get_data_finish(result: Gio.AsyncResult): Uint8Array;
        get_finish(result: Gio.AsyncResult): Attributes;
        get_full(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): Attributes;
        get_handle(): number;
        get_module(): Module;
        get_session(): Session;
        get_template(attr_type: bigint | number, cancellable: Gio.Cancellable | null): Attributes;
        get_template_async(attr_type: bigint | number, cancellable: Gio.Cancellable | null): globalThis.Promise<Attributes>;
        get_template_async(attr_type: bigint | number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_template_async(attr_type: bigint | number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Attributes> | void;
        get_template_finish(result: Gio.AsyncResult): Attributes;
        hash(): number;
        set(attrs: Attributes, cancellable: Gio.Cancellable | null): boolean;
        set(...args: never[]): any;
        set_async(attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_finish(result: Gio.AsyncResult): boolean;
        set_template(attr_type: bigint | number, attrs: Attributes, cancellable: Gio.Cancellable | null): boolean;
        set_template_async(attr_type: bigint | number, attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_template_async(attr_type: bigint | number, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_template_async(attr_type: bigint | number, attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_template_finish(result: Gio.AsyncResult): boolean;
    }
    namespace Password {
        interface SignalSignatures extends Gio.TlsPassword.SignalSignatures {
            "notify::key": (pspec: GObject.ParamSpec) => void;
            "notify::module": (pspec: GObject.ParamSpec) => void;
            "notify::token": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::warning": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.TlsPassword.ConstructorProps {
            key: Object;
            module: Module;
            token: Slot;
        }
    }
    class Password extends Gio.TlsPassword {
        static $gtype: GObject.GType<Password>;
        get key(): Object;
        get module(): Module;
        get token(): Slot;
        $signals: Password.SignalSignatures;
        constructor(properties?: Partial<Password.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Password.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Password.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Password.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Password.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Password.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Password.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key(): Object;
        get_module(): Module;
        get_token(): Slot;
    }
    namespace Session {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "discard-handle": (arg0: number) => boolean | void;
            "notify::app-data": (pspec: GObject.ParamSpec) => void;
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::interaction": (pspec: GObject.ParamSpec) => void;
            "notify::module": (pspec: GObject.ParamSpec) => void;
            "notify::opening-flags": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::slot": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            app_data: never;
            appData: never;
            handle: bigint | number;
            interaction: Gio.TlsInteraction | null;
            module: Module;
            opening_flags: bigint | number;
            openingFlags: bigint | number;
            options: SessionOptions;
            slot: Slot;
        }
    }
    class Session extends GObject.Object implements Gio.AsyncInitable<Session>, Gio.Initable {
        static $gtype: GObject.GType<Session>;
        set app_data(val: never);
        set appData(val: never);
        get handle(): number;
        get interaction(): Gio.TlsInteraction | null;
        set interaction(val: Gio.TlsInteraction | null);
        get module(): Module;
        set opening_flags(val: bigint | number);
        set openingFlags(val: bigint | number);
        get options(): SessionOptions;
        get slot(): Slot;
        $signals: Session.SignalSignatures;
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_handle(slot: Slot, session_handle: bigint | number, options: SessionOptions): Session;
        static open(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): Session;
        static open_async(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Session> | null): void;
        static open_finish(result: Gio.AsyncResult): Session;
        create_object(attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
        create_object_async(attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<Object>;
        create_object_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_object_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Object> | void;
        create_object_finish(result: Gio.AsyncResult): Object;
        decrypt(key: Object, mech_type: bigint | number, input: Uint8Array | string, cancellable: Gio.Cancellable | null): Uint8Array;
        decrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        decrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        decrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        decrypt_finish(result: Gio.AsyncResult): Uint8Array;
        decrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null): Uint8Array;
        derive_key(base: Object, mech_type: bigint | number, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
        derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<Object>;
        derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Object> | void;
        derive_key_finish(result: Gio.AsyncResult): Object;
        derive_key_full(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
        encrypt(key: Object, mech_type: bigint | number, input: Uint8Array | string, cancellable: Gio.Cancellable | null): Uint8Array;
        encrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        encrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        encrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        encrypt_finish(result: Gio.AsyncResult): Uint8Array;
        encrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null): Uint8Array;
        enumerate_objects(match: Attributes): Enumerator;
        find_handles(match: Attributes, cancellable: Gio.Cancellable | null): number[] | null;
        find_handles_async(match: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<number[] | null>;
        find_handles_async(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_handles_async(match: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[] | null> | void;
        find_handles_finish(result: Gio.AsyncResult): number[] | null;
        find_objects(match: Attributes, cancellable: Gio.Cancellable | null): Object[];
        find_objects_async(match: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<Object[]>;
        find_objects_async(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_objects_async(match: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Object[]> | void;
        find_objects_finish(result: Gio.AsyncResult): Object[];
        generate_key_pair(mech_type: bigint | number, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null): [boolean, Object | null, Object | null];
        generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<[Object | null, Object | null]>;
        generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Object | null, Object | null]> | void;
        generate_key_pair_finish(result: Gio.AsyncResult): [boolean, Object | null, Object | null];
        generate_key_pair_full(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null): [boolean, Object | null, Object | null];
        get_handle(): number;
        get_info(): SessionInfo;
        get_interaction(): Gio.TlsInteraction | null;
        get_module(): Module;
        get_options(): SessionOptions;
        get_slot(): Slot;
        get_state(): number;
        init_pin(pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): boolean;
        init_pin_async(pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_pin_async(pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_pin_async(pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_pin_finish(result: Gio.AsyncResult): boolean;
        login(user_type: bigint | number, pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): boolean;
        login_async(user_type: bigint | number, pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        login_async(user_type: bigint | number, pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        login_async(user_type: bigint | number, pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        login_finish(result: Gio.AsyncResult): boolean;
        login_interactive(user_type: bigint | number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): boolean;
        login_interactive_async(user_type: bigint | number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        login_interactive_async(user_type: bigint | number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        login_interactive_async(user_type: bigint | number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        login_interactive_finish(result: Gio.AsyncResult): boolean;
        logout(cancellable: Gio.Cancellable | null): boolean;
        logout_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        logout_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        logout_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        logout_finish(result: Gio.AsyncResult): boolean;
        set_interaction(interaction: Gio.TlsInteraction | null): void;
        set_pin(old_pin: Uint8Array | string | null, new_pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): boolean;
        set_pin_async(old_pin: Uint8Array | string | null, n_old_pin: bigint | number, new_pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_pin_async(old_pin: Uint8Array | string | null, n_old_pin: bigint | number, new_pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_pin_async(old_pin: Uint8Array | string | null, n_old_pin: bigint | number, new_pin: Uint8Array | string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_pin_finish(result: Gio.AsyncResult): boolean;
        sign(key: Object, mech_type: bigint | number, input: Uint8Array | string, cancellable: Gio.Cancellable | null): Uint8Array;
        sign_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        sign_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        sign_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        sign_finish(result: Gio.AsyncResult): Uint8Array;
        sign_full(key: Object, mechanism: Mechanism, input: Uint8Array | string, n_result: bigint | number, cancellable: Gio.Cancellable | null): number;
        unwrap_key(wrapper: Object, mech_type: bigint | number, input: Uint8Array | string, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
        unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: Uint8Array | string, attrs: Attributes, cancellable: Gio.Cancellable | null): globalThis.Promise<Object>;
        unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: Uint8Array | string, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: Uint8Array | string, attrs: Attributes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Object> | void;
        unwrap_key_finish(result: Gio.AsyncResult): Object;
        unwrap_key_full(wrapper: Object, mechanism: Mechanism, input: Uint8Array | string, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
        verify(key: Object, mech_type: bigint | number, input: Uint8Array | string, signature: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        verify_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, signature: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        verify_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, signature: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        verify_async(key: Object, mechanism: Mechanism, input: Uint8Array | string, signature: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        verify_finish(result: Gio.AsyncResult): boolean;
        verify_full(key: Object, mechanism: Mechanism, input: Uint8Array | string, signature: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        wrap_key(wrapper: Object, mech_type: bigint | number, wrapped: Object, cancellable: Gio.Cancellable | null): Uint8Array;
        wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        wrap_key_finish(result: Gio.AsyncResult): Uint8Array;
        wrap_key_full(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null): Uint8Array;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Session;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Slot {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::module": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: bigint | number;
            module: Module;
        }
    }
    class Slot extends GObject.Object {
        static $gtype: GObject.GType<Slot>;
        get handle(): number;
        get module(): Module;
        $signals: Slot.SignalSignatures;
        constructor(properties?: Partial<Slot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Slot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Slot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Slot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Slot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_handle(module: Module, slot_id: bigint | number): Slot;
        enumerate_objects(match: Attributes, options: SessionOptions): Enumerator;
        equal(slot2: Slot): boolean;
        get_handle(): number;
        get_info(): SlotInfo;
        get_mechanism_info(mech_type: bigint | number): MechanismInfo;
        get_mechanisms(): number[];
        get_module(): Module;
        get_token_info(): TokenInfo;
        has_flags(flags: bigint | number): boolean;
        hash(): number;
        match(uri: UriData): boolean;
        open_session(options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): Session;
        open_session_async(options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Session>;
        open_session_async(options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_session_async(options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Session> | void;
        open_session_finish(result: Gio.AsyncResult): Session;
    }
    class Attribute {
        static $gtype: GObject.GType<Attribute>;
        type: number;
        value: Uint8Array;
        length: number;
        constructor(attr_type: bigint | number, value: number, length: bigint | number);
        static ["new"](attr_type: bigint | number, value: number, length: bigint | number): Attribute;
        static new_boolean(attr_type: bigint | number, value: boolean): Attribute;
        static new_date(attr_type: bigint | number, value: GLib.Date): Attribute;
        static new_empty(attr_type: bigint | number): Attribute;
        static new_invalid(attr_type: bigint | number): Attribute;
        static new_string(attr_type: bigint | number, value: string): Attribute;
        static new_ulong(attr_type: bigint | number, value: bigint | number): Attribute;
        clear(): void;
        dump(): void;
        dup(): Attribute;
        equal(attr2: Attribute): boolean;
        free(): void;
        get_boolean(): boolean;
        get_data(): Uint8Array;
        get_date(value: GLib.Date): void;
        get_string(): string | null;
        get_ulong(): number;
        hash(): number;
        init_copy(src: Attribute): void;
        is_invalid(): boolean;
    }
    class Attributes {
        static $gtype: GObject.GType<Attributes>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Attributes;
        at(index: number): Attribute;
        contains(match: Attribute): boolean;
        count(): number;
        dump(): void;
        find(attr_type: bigint | number): Attribute;
        find_boolean(attr_type: bigint | number): [boolean, boolean];
        find_date(attr_type: bigint | number): [boolean, GLib.Date];
        find_string(attr_type: bigint | number): [boolean, string];
        find_ulong(attr_type: bigint | number): [boolean, number];
        ref(): Attributes;
        to_string(): string;
        unref(): void;
    }
    class Builder {
        static $gtype: GObject.GType<Builder>;
        constructor(flags: BuilderFlags);
        static ["new"](flags: BuilderFlags): Builder;
        add_all(attrs: Attributes): void;
        add_attribute(attr: Attribute): void;
        add_boolean(attr_type: bigint | number, value: boolean): void;
        add_data(attr_type: bigint | number, value: Uint8Array | string | null): void;
        add_date(attr_type: bigint | number, value: GLib.Date): void;
        add_empty(attr_type: bigint | number): void;
        add_invalid(attr_type: bigint | number): void;
        add_only(attrs: Attributes, only_types: (bigint | number)[]): void;
        add_string(attr_type: bigint | number, value: string | null): void;
        add_ulong(attr_type: bigint | number, value: bigint | number): void;
        clear(): void;
        copy(): Builder;
        end(): Attributes;
        find(attr_type: bigint | number): Attribute;
        find_boolean(attr_type: bigint | number): [boolean, boolean];
        find_date(attr_type: bigint | number): [boolean, GLib.Date];
        find_string(attr_type: bigint | number): [boolean, string];
        find_ulong(attr_type: bigint | number): [boolean, number];
        init(): void;
        init_full(flags: BuilderFlags): void;
        ref(): Builder;
        set_all(attrs: Attributes): void;
        set_boolean(attr_type: bigint | number, value: boolean): void;
        set_data(attr_type: bigint | number, value: Uint8Array | string | null): void;
        set_date(attr_type: bigint | number, value: GLib.Date): void;
        set_empty(attr_type: bigint | number): void;
        set_invalid(attr_type: bigint | number): void;
        set_string(attr_type: bigint | number, value: string): void;
        set_ulong(attr_type: bigint | number, value: bigint | number): void;
        take_data(attr_type: bigint | number, value: Uint8Array | string | null): void;
        unref(): void;
    }
    type EnumeratorClass = typeof Enumerator;
    class Mechanism {
        static $gtype: GObject.GType<Mechanism>;
        type: number;
        parameter: null;
        n_parameter: number;
    }
    class MechanismInfo {
        static $gtype: GObject.GType<MechanismInfo>;
        min_key_size: number;
        max_key_size: number;
        flags: number;
        copy(): MechanismInfo;
        free(): void;
    }
    type ModuleClass = typeof Module;
    class ModuleInfo {
        static $gtype: GObject.GType<ModuleInfo>;
        pkcs11_version_major: number;
        pkcs11_version_minor: number;
        manufacturer_id: string;
        flags: number;
        library_description: string;
        library_version_major: number;
        library_version_minor: number;
        copy(): ModuleInfo;
        free(): void;
    }
    type ObjectCacheInterface = typeof ObjectCache;
    type ObjectClass = typeof Object;
    type PasswordClass = typeof Password;
    type SessionClass = typeof Session;
    class SessionInfo {
        static $gtype: GObject.GType<SessionInfo>;
        slot_id: number;
        state: number;
        flags: number;
        device_error: number;
        copy(): SessionInfo;
        free(): void;
    }
    type SlotClass = typeof Slot;
    class SlotInfo {
        static $gtype: GObject.GType<SlotInfo>;
        slot_description: string;
        manufacturer_id: string;
        flags: number;
        hardware_version_major: number;
        hardware_version_minor: number;
        firmware_version_major: number;
        firmware_version_minor: number;
        copy(): SlotInfo;
        free(): void;
    }
    class TokenInfo {
        static $gtype: GObject.GType<TokenInfo>;
        label: string;
        manufacturer_id: string;
        model: string;
        serial_number: string;
        flags: number;
        max_session_count: number;
        session_count: number;
        max_rw_session_count: number;
        rw_session_count: number;
        max_pin_len: number;
        min_pin_len: number;
        total_public_memory: number;
        free_public_memory: number;
        total_private_memory: number;
        free_private_memory: number;
        hardware_version_major: number;
        hardware_version_minor: number;
        firmware_version_major: number;
        firmware_version_minor: number;
        copy(): TokenInfo;
        free(): void;
    }
    class UriData {
        static $gtype: GObject.GType<UriData>;
        any_unrecognized: boolean;
        constructor(properties?: Partial<{
            any_unrecognized: boolean;
        }>);
        static ["new"](): UriData;
        static parse(string: string, flags: UriFlags): UriData;
        build(flags: UriFlags): string;
        copy(): UriData;
        free(): void;
    }
    namespace ObjectCache {
        interface Interface {
            vfunc_fill(attrs: Attributes): void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            attributes: Attributes | null;
        }
    }
    export interface ObjectCacheNamespace {
        $gtype: GObject.GType<ObjectCache>;
        prototype: ObjectCache;
    }
    interface ObjectCache extends Object, ObjectCache.Interface {
        get attributes(): Attributes | null;
        set attributes(val: Attributes | null);
        fill(attrs: Attributes): void;
        set_attributes(attrs: Attributes | null): void;
        update(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): boolean;
        update_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        update_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_async(attr_types: (bigint | number)[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        update_finish(result: Gio.AsyncResult): boolean;
    }
    export const ObjectCache: ObjectCacheNamespace & {
        new (): ObjectCache; 
    };
    const __name__: string;
    const __version__: string;
}
export default Gck;
}
declare module 'gi://Gck' {
    import Gck2 from 'gi://Gck?version=2';
    export default Gck2;
}
