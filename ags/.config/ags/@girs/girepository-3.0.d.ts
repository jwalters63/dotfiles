declare module 'gi://GIRepository?version=3.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GIRepository {
    enum ArrayType {
        C,
        ARRAY,
        PTR_ARRAY,
        BYTE_ARRAY,
    }
    enum Direction {
        IN,
        OUT,
        INOUT,
    }
    class InvokeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static SYMBOL_NOT_FOUND: number;
        static ARGUMENT_MISMATCH: number;
        constructor(options: { message: string; code: number });
    }
    enum RepositoryError {
        TYPELIB_NOT_FOUND,
        NAMESPACE_MISMATCH,
        NAMESPACE_VERSION_CONFLICT,
        LIBRARY_NOT_FOUND,
    }
    enum ScopeType {
        INVALID,
        CALL,
        ASYNC,
        NOTIFIED,
        FOREVER,
    }
    enum Transfer {
        NOTHING,
        CONTAINER,
        EVERYTHING,
    }
    enum TypeTag {
        VOID,
        BOOLEAN,
        INT8,
        UINT8,
        INT16,
        UINT16,
        INT32,
        UINT32,
        INT64,
        UINT64,
        FLOAT,
        DOUBLE,
        GTYPE,
        UTF8,
        FILENAME,
        ARRAY,
        INTERFACE,
        GLIST,
        GSLIST,
        GHASH,
        ERROR,
        UNICHAR,
    }
    const TYPE_TAG_N_TYPES: number;
    function invoke_error_quark(): GLib.Quark;
    function type_tag_argument_from_hash_pointer(storage_type: TypeTag, hash_pointer: null): Argument;
    function type_tag_hash_pointer_from_argument(storage_type: TypeTag, arg: Argument): null;
    function type_tag_to_string(type: TypeTag): string;
    enum FieldInfoFlags {
        INFO_FLAGS_NONE,
        IS_READABLE,
        IS_WRITABLE,
    }
    enum FunctionInfoFlags {
        INFO_FLAGS_NONE,
        IS_METHOD,
        IS_CONSTRUCTOR,
        IS_GETTER,
        IS_SETTER,
        WRAPS_VFUNC,
        IS_ASYNC,
    }
    enum RepositoryLoadFlags {
        NONE,
        LAZY,
    }
    enum VFuncInfoFlags {
        INFO_FLAGS_NONE,
        MUST_CHAIN_UP,
        MUST_OVERRIDE,
        MUST_NOT_OVERRIDE,
    }
    namespace ArgInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class ArgInfo extends BaseInfo {
        static $gtype: GObject.GType<ArgInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof ArgInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArgInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ArgInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArgInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ArgInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ArgInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_closure_index(): [boolean, number];
        get_destroy_index(): [boolean, number];
        get_direction(): Direction;
        get_ownership_transfer(): Transfer;
        get_scope(): ScopeType;
        get_type_info(): TypeInfo;
        is_caller_allocates(): boolean;
        is_optional(): boolean;
        is_return_value(): boolean;
        is_skip(): boolean;
        load_type_info(): TypeInfo;
        may_be_null(): boolean;
    }
    namespace BaseInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    abstract class BaseInfo {
        static $gtype: GObject.GType<BaseInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof BaseInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clear(): void;
        equal(info2: BaseInfo): boolean;
        get_attribute(name: string): string | null;
        get_container(): BaseInfo;
        get_name(): string | null;
        get_namespace(): string;
        get_typelib(): Typelib;
        is_deprecated(): boolean;
        iterate_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
        ref(): BaseInfo;
        unref(): void;
    }
    namespace CallableInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    abstract class CallableInfo extends BaseInfo {
        static $gtype: GObject.GType<CallableInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof CallableInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallableInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CallableInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallableInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CallableInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CallableInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        can_throw_gerror(): boolean;
        get_arg(n: number): ArgInfo;
        get_async_function(): CallableInfo | null;
        get_caller_owns(): Transfer;
        get_finish_function(): CallableInfo | null;
        get_instance_ownership_transfer(): Transfer;
        get_n_args(): number;
        get_return_attribute(name: string): string | null;
        get_return_type(): TypeInfo;
        get_sync_function(): CallableInfo | null;
        invoke(_function: null, in_args: Argument[], out_args: Argument[]): [boolean, Argument];
        is_async(): boolean;
        is_method(): boolean;
        iterate_return_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
        load_arg(n: number): ArgInfo;
        load_return_type(): TypeInfo;
        may_return_null(): boolean;
        skip_return(): boolean;
    }
    namespace CallbackInfo {
        interface SignalSignatures extends CallableInfo.SignalSignatures {}
    }
    class CallbackInfo extends CallableInfo {
        static $gtype: GObject.GType<CallbackInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof CallbackInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallbackInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CallbackInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallbackInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CallbackInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CallbackInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ConstantInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class ConstantInfo extends BaseInfo {
        static $gtype: GObject.GType<ConstantInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof ConstantInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConstantInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ConstantInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConstantInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ConstantInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ConstantInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_type_info(): TypeInfo;
    }
    namespace EnumInfo {
        interface SignalSignatures extends RegisteredTypeInfo.SignalSignatures {}
    }
    class EnumInfo extends RegisteredTypeInfo {
        static $gtype: GObject.GType<EnumInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof EnumInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EnumInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EnumInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_error_domain(): string | null;
        get_method(n: number): FunctionInfo;
        get_n_methods(): number;
        get_n_values(): number;
        get_storage_type(): TypeTag;
        get_value(n: number): ValueInfo;
    }
    namespace FieldInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class FieldInfo extends BaseInfo {
        static $gtype: GObject.GType<FieldInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof FieldInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FieldInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FieldInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FieldInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FieldInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FieldInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_flags(): FieldInfoFlags;
        get_offset(): number;
        get_size(): number;
        get_type_info(): TypeInfo;
    }
    namespace FlagsInfo {
        interface SignalSignatures extends EnumInfo.SignalSignatures {}
    }
    class FlagsInfo extends EnumInfo {
        static $gtype: GObject.GType<FlagsInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof FlagsInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlagsInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FlagsInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlagsInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FlagsInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FlagsInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace FunctionInfo {
        interface SignalSignatures extends CallableInfo.SignalSignatures {}
    }
    class FunctionInfo extends CallableInfo {
        static $gtype: GObject.GType<FunctionInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof FunctionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FunctionInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FunctionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FunctionInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FunctionInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FunctionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_flags(): FunctionInfoFlags;
        get_property(): PropertyInfo | null;
        get_symbol(): string;
        get_vfunc(): VFuncInfo | null;
    }
    namespace InterfaceInfo {
        interface SignalSignatures extends RegisteredTypeInfo.SignalSignatures {}
    }
    class InterfaceInfo extends RegisteredTypeInfo {
        static $gtype: GObject.GType<InterfaceInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof InterfaceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterfaceInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InterfaceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterfaceInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InterfaceInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InterfaceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_method(name: string): FunctionInfo | null;
        find_signal(name: string): SignalInfo | null;
        find_vfunc(name: string): VFuncInfo | null;
        get_constant(n: number): ConstantInfo;
        get_iface_struct(): StructInfo | null;
        get_method(n: number): FunctionInfo;
        get_n_constants(): number;
        get_n_methods(): number;
        get_n_prerequisites(): number;
        get_n_properties(): number;
        get_n_signals(): number;
        get_n_vfuncs(): number;
        get_prerequisite(n: number): BaseInfo;
        get_property(n: number): PropertyInfo;
        get_signal(n: number): SignalInfo;
        get_vfunc(n: number): VFuncInfo;
    }
    namespace ObjectInfo {
        interface SignalSignatures extends RegisteredTypeInfo.SignalSignatures {}
    }
    class ObjectInfo extends RegisteredTypeInfo {
        static $gtype: GObject.GType<ObjectInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof ObjectInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_method(name: string): FunctionInfo | null;
        find_method_using_interfaces(name: string): [FunctionInfo | null, BaseInfo | null];
        find_signal(name: string): SignalInfo | null;
        find_vfunc(name: string): VFuncInfo | null;
        find_vfunc_using_interfaces(name: string): [VFuncInfo | null, BaseInfo | null];
        get_abstract(): boolean;
        get_class_struct(): StructInfo | null;
        get_constant(n: number): ConstantInfo;
        get_field(n: number): FieldInfo;
        get_final(): boolean;
        get_fundamental(): boolean;
        get_get_value_function_name(): string | null;
        get_interface(n: number): InterfaceInfo;
        get_method(n: number): FunctionInfo;
        get_n_constants(): number;
        get_n_fields(): number;
        get_n_interfaces(): number;
        get_n_methods(): number;
        get_n_properties(): number;
        get_n_signals(): number;
        get_n_vfuncs(): number;
        get_parent(): ObjectInfo | null;
        get_property(n: number): PropertyInfo;
        get_ref_function_name(): string | null;
        get_set_value_function_name(): string | null;
        get_signal(n: number): SignalInfo;
        get_type_init_function_name(): string;
        get_type_init_function_name(...args: never[]): any;
        get_type_name(): string;
        get_type_name(...args: never[]): any;
        get_unref_function_name(): string | null;
        get_vfunc(n: number): VFuncInfo;
    }
    namespace PropertyInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class PropertyInfo extends BaseInfo {
        static $gtype: GObject.GType<PropertyInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof PropertyInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertyInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropertyInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropertyInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_flags(): GObject.ParamFlags;
        get_getter(): FunctionInfo | null;
        get_ownership_transfer(): Transfer;
        get_setter(): FunctionInfo | null;
        get_type_info(): TypeInfo;
    }
    namespace RegisteredTypeInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    abstract class RegisteredTypeInfo extends BaseInfo {
        static $gtype: GObject.GType<RegisteredTypeInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof RegisteredTypeInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RegisteredTypeInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RegisteredTypeInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RegisteredTypeInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RegisteredTypeInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RegisteredTypeInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_g_type(): GObject.GType;
        get_type_init_function_name(): string | null;
        get_type_name(): string | null;
        is_boxed(): boolean;
    }
    namespace Repository {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Repository extends GObject.Object {
        static $gtype: GObject.GType<Repository>;
        $signals: Repository.SignalSignatures;
        constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Repository;
        connect<K extends keyof Repository.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Repository.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Repository.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Repository.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static dump(input_filename: string, output_filename: string): boolean;
        static dup_default(): Repository;
        static error_quark(): GLib.Quark;
        static get_option_group(): GLib.OptionGroup;
        enumerate_versions(namespace_: string): string[];
        find_by_error_domain(domain: GLib.Quark): EnumInfo | null;
        find_by_gtype(gtype: GObject.GType): BaseInfo | null;
        find_by_name(namespace_: string, name: string): BaseInfo | null;
        get_c_prefix(namespace_: string): string | null;
        get_dependencies(namespace_: string): string[];
        get_immediate_dependencies(namespace_: string): string[];
        get_info(namespace_: string, idx: number): BaseInfo;
        get_library_path(): string[];
        get_loaded_namespaces(): string[];
        get_n_infos(namespace_: string): number;
        get_object_gtype_interfaces(gtype: GObject.GType): InterfaceInfo[];
        get_search_path(): string[];
        get_shared_libraries(namespace_: string): string[] | null;
        get_typelib_path(namespace_: string): string | null;
        get_version(namespace_: string): string;
        is_registered(namespace_: string, version: string | null): boolean;
        load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string;
        prepend_library_path(directory: string): void;
        prepend_search_path(directory: string): void;
        require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
        require_private(typelib_dir: string, namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
    }
    namespace SignalInfo {
        interface SignalSignatures extends CallableInfo.SignalSignatures {}
    }
    class SignalInfo extends CallableInfo {
        static $gtype: GObject.GType<SignalInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof SignalInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SignalInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SignalInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SignalInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_class_closure(): VFuncInfo | null;
        get_flags(): GObject.SignalFlags;
        true_stops_emit(): boolean;
    }
    namespace StructInfo {
        interface SignalSignatures extends RegisteredTypeInfo.SignalSignatures {}
    }
    class StructInfo extends RegisteredTypeInfo {
        static $gtype: GObject.GType<StructInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof StructInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StructInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StructInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StructInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_field(name: string): FieldInfo | null;
        find_method(name: string): FunctionInfo | null;
        get_alignment(): number;
        get_copy_function_name(): string | null;
        get_field(n: number): FieldInfo;
        get_free_function_name(): string | null;
        get_method(n: number): FunctionInfo;
        get_n_fields(): number;
        get_n_methods(): number;
        get_size(): number;
        is_foreign(): boolean;
        is_gtype_struct(): boolean;
    }
    namespace TypeInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class TypeInfo extends BaseInfo {
        static $gtype: GObject.GType<TypeInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof TypeInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TypeInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TypeInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TypeInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TypeInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TypeInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        argument_from_hash_pointer(hash_pointer: null): Argument;
        get_array_fixed_size(): [boolean, number];
        get_array_length_index(): [boolean, number];
        get_array_type(): ArrayType;
        get_interface(): BaseInfo | null;
        get_param_type(n: number): TypeInfo | null;
        get_storage_type(): TypeTag;
        get_tag(): TypeTag;
        hash_pointer_from_argument(arg: Argument): null;
        is_pointer(): boolean;
        is_zero_terminated(): boolean;
    }
    namespace UnionInfo {
        interface SignalSignatures extends RegisteredTypeInfo.SignalSignatures {}
    }
    class UnionInfo extends RegisteredTypeInfo {
        static $gtype: GObject.GType<UnionInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof UnionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnionInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UnionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnionInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UnionInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_method(name: string): FunctionInfo | null;
        get_alignment(): number;
        get_copy_function_name(): string | null;
        get_discriminator(n: bigint | number): ConstantInfo | null;
        get_discriminator_offset(): [boolean, number];
        get_discriminator_type(): TypeInfo | null;
        get_field(n: number): FieldInfo;
        get_free_function_name(): string | null;
        get_method(n: number): FunctionInfo;
        get_n_fields(): number;
        get_n_methods(): number;
        get_size(): number;
        is_discriminated(): boolean;
    }
    namespace UnresolvedInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class UnresolvedInfo extends BaseInfo {
        static $gtype: GObject.GType<UnresolvedInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof UnresolvedInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnresolvedInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UnresolvedInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnresolvedInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UnresolvedInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnresolvedInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VFuncInfo {
        interface SignalSignatures extends CallableInfo.SignalSignatures {}
    }
    class VFuncInfo extends CallableInfo {
        static $gtype: GObject.GType<VFuncInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof VFuncInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VFuncInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VFuncInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VFuncInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VFuncInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VFuncInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_address(implementor_gtype: GObject.GType): null;
        get_flags(): VFuncInfoFlags;
        get_invoker(): FunctionInfo | null;
        get_offset(): number;
        get_signal(): SignalInfo | null;
    }
    namespace ValueInfo {
        interface SignalSignatures extends BaseInfo.SignalSignatures {}
    }
    class ValueInfo extends BaseInfo {
        static $gtype: GObject.GType<ValueInfo>;
        _init(...args: any[]): void;
        connect<K extends keyof ValueInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValueInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValueInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValueInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): number;
    }
    class AttributeIter {
        static $gtype: GObject.GType<AttributeIter>;
        constructor(properties?: Partial<{}>);
    }
    type BaseInfoClass = typeof BaseInfo;
    class BaseInfoStack {
        static $gtype: GObject.GType<BaseInfoStack>;
    }
    type RepositoryClass = typeof Repository;
    class Typelib {
        static $gtype: GObject.GType<Typelib>;
        constructor(bytes: GLib.Bytes | Uint8Array);
        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Typelib;
        get_namespace(): string;
        ref(): Typelib;
        symbol(symbol_name: string): [boolean, null];
        unref(): void;
    }
    class Argument {
        static $gtype: GObject.GType<Argument>;
        v_boolean: boolean;
        v_int8: number;
        v_uint8: number;
        v_int16: number;
        v_uint16: number;
        v_int32: number;
        v_uint32: number;
        v_int64: number;
        v_uint64: number;
        v_float: number;
        v_double: number;
        v_short: number;
        v_ushort: number;
        v_int: number;
        v_uint: number;
        v_long: number;
        v_ulong: number;
        v_ssize: number;
        v_size: number;
        v_string: string;
        v_pointer: null;
    }
    const __name__: string;
    const __version__: string;
}
export default GIRepository;
}
declare module 'gi://GIRepository' {
    import GIRepository30 from 'gi://GIRepository?version=3.0';
    export default GIRepository30;
}
