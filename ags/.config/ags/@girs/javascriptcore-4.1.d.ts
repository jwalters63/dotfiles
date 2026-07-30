declare module 'gi://JavaScriptCore?version=4.1' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace JavaScriptCore {
    enum CheckSyntaxMode {
        SCRIPT,
        MODULE,
    }
    enum CheckSyntaxResult {
        SUCCESS,
        RECOVERABLE_ERROR,
        IRRECOVERABLE_ERROR,
        UNTERMINATED_LITERAL_ERROR,
        OUT_OF_MEMORY_ERROR,
        STACK_OVERFLOW_ERROR,
    }
    enum OptionType {
        BOOLEAN,
        INT,
        UINT,
        SIZE,
        DOUBLE,
        STRING,
        RANGE_STRING,
    }
    enum TypedArrayType {
        NONE,
        INT8,
        INT16,
        INT32,
        INT64,
        UINT8,
        UINT8_CLAMPED,
        UINT16,
        UINT32,
        UINT64,
        FLOAT32,
        FLOAT64,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const OPTIONS_USE_DFG: string;
    const OPTIONS_USE_FTL: string;
    const OPTIONS_USE_JIT: string;
    const OPTIONS_USE_LLINT: string;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function options_foreach(_function: OptionsFunc): void;
    function options_get_boolean(option: string): [boolean, boolean];
    function options_get_double(option: string): [boolean, number];
    function options_get_int(option: string): [boolean, number];
    function options_get_option_group(): GLib.OptionGroup;
    function options_get_range_string(option: string): [boolean, string];
    function options_get_size(option: string): [boolean, number];
    function options_get_string(option: string): [boolean, string];
    function options_get_uint(option: string): [boolean, number];
    function options_set_boolean(option: string, value: boolean): boolean;
    function options_set_double(option: string, value: number): boolean;
    function options_set_int(option: string, value: number): boolean;
    function options_set_range_string(option: string, value: string): boolean;
    function options_set_size(option: string, value: bigint | number): boolean;
    function options_set_string(option: string, value: string): boolean;
    function options_set_uint(option: string, value: number): boolean;
    interface ClassDeletePropertyFunction {
        (jsc_class: Class, context: Context, instance: null, name: string): boolean;
    }
    interface ClassEnumeratePropertiesFunction {
        (jsc_class: Class, context: Context, instance: null): string[] | null;
    }
    interface ClassGetPropertyFunction {
        (jsc_class: Class, context: Context, instance: null, name: string): Value | null;
    }
    interface ClassHasPropertyFunction {
        (jsc_class: Class, context: Context, instance: null, name: string): boolean;
    }
    interface ClassSetPropertyFunction {
        (jsc_class: Class, context: Context, instance: null, name: string, value: Value): boolean;
    }
    interface ExceptionHandler {
        (context: Context, exception: Exception): void;
    }
    interface Executor {
        (resolve: Value, reject: Value): void;
    }
    interface OptionsFunc {
        (option: string, type: OptionType, description: string | null): boolean;
    }
    enum ValuePropertyFlags {
        CONFIGURABLE,
        ENUMERABLE,
        WRITABLE,
    }
    namespace Class {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            name: string;
            parent: Class;
        }
    }
    class Class extends GObject.Object {
        static $gtype: GObject.GType<Class>;
        set context(val: Context);
        get name(): string;
        get parent(): Class;
        $signals: Class.SignalSignatures;
        constructor(properties?: Partial<Class.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Class.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Class.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Class.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Class.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Class.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Class.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_constructor_variadic(name: string | null, callback: GObject.Callback, return_type: GObject.GType): Value;
        add_constructor(name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): Value;
        add_method_variadic(name: string, callback: GObject.Callback, return_type: GObject.GType): void;
        add_method(name: string, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): void;
        add_property(name: string, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void;
        get_name(): string;
        get_parent(): Class;
    }
    namespace Context {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::virtual-machine": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            virtual_machine: VirtualMachine;
            virtualMachine: VirtualMachine;
        }
    }
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;
        get virtual_machine(): VirtualMachine;
        get virtualMachine(): VirtualMachine;
        $signals: Context.SignalSignatures;
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Context;
        static new_with_virtual_machine(vm: VirtualMachine): Context;
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_current(): Context | null;
        check_syntax(code: string, length: bigint | number, mode: CheckSyntaxMode, uri: string, line_number: number): [CheckSyntaxResult, Exception | null];
        clear_exception(): void;
        evaluate(code: string, length: bigint | number): Value;
        evaluate_in_object(code: string, length: bigint | number, object_instance: null, object_class: Class | null, uri: string, line_number: number): [Value, Value];
        evaluate_with_source_uri(code: string, length: bigint | number, uri: string, line_number: number): Value;
        get_exception(): Exception | null;
        get_global_object(): Value;
        get_value(name: string): Value;
        get_virtual_machine(): VirtualMachine;
        pop_exception_handler(): void;
        push_exception_handler(handler: ExceptionHandler): void;
        register_class(name: string, parent_class: Class | null, vtable: ClassVTable | null): Class;
        set_value(name: string, value: Value): void;
        ["throw"](error_message: string): void;
        throw_exception(exception: Exception): void;
        throw_with_name(error_name: string, error_message: string): void;
    }
    namespace Exception {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Exception extends GObject.Object {
        static $gtype: GObject.GType<Exception>;
        $signals: Exception.SignalSignatures;
        constructor(properties?: Partial<Exception.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: Context, message: string): Exception;
        static new_with_name(context: Context, name: string, message: string): Exception;
        connect<K extends keyof Exception.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Exception.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Exception.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Exception.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Exception.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Exception.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_backtrace_string(): string | null;
        get_column_number(): number;
        get_line_number(): number;
        get_message(): string;
        get_name(): string;
        get_source_uri(): string | null;
        report(): string;
        to_string(): string;
    }
    namespace Value {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
        }
    }
    class Value extends GObject.Object {
        static $gtype: GObject.GType<Value>;
        get context(): Context;
        $signals: Value.SignalSignatures;
        constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_array_buffer(context: Context, data: null, size: bigint | number, destroy_notify: GLib.DestroyNotify | null): Value;
        static new_array_from_garray(context: Context, array: Value[] | null): Value;
        static new_array_from_strv(context: Context, strv: string[]): Value;
        static new_boolean(context: Context, value: boolean): Value;
        static new_from_json(context: Context, json: string): Value;
        static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.GType): Value;
        static new_function(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): Value;
        static new_null(context: Context): Value;
        static new_number(context: Context, number: number): Value;
        static new_object(context: Context, instance: null, jsc_class: Class | null): Value;
        static new_promise(context: Context, executor: Executor): Value;
        static new_string(context: Context, string: string | null): Value;
        static new_string_from_bytes(context: Context, bytes: GLib.Bytes | Uint8Array | null): Value;
        static new_typed_array(context: Context, type: TypedArrayType, length: bigint | number): Value;
        static new_undefined(context: Context): Value;
        connect<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Value.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Value.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        array_buffer_get_data(): Uint8Array;
        array_buffer_get_size(): number;
        constructor_call(parameters: Value[] | null): Value;
        function_call(parameters: Value[] | null): Value;
        get_context(): Context;
        is_array(): boolean;
        is_array_buffer(): boolean;
        is_boolean(): boolean;
        is_constructor(): boolean;
        is_function(): boolean;
        is_null(): boolean;
        is_number(): boolean;
        is_object(): boolean;
        is_string(): boolean;
        is_typed_array(): boolean;
        is_undefined(): boolean;
        new_typed_array_with_buffer(type: TypedArrayType, offset: bigint | number, length: bigint | number): Value;
        object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void;
        object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value: Value | null): void;
        object_delete_property(name: string): boolean;
        object_enumerate_properties(): string[] | null;
        object_get_property(name: string): Value;
        object_get_property_at_index(index: number): Value;
        object_has_property(name: string): boolean;
        object_invoke_method(name: string, parameters: Value[] | null): Value;
        object_is_instance_of(name: string): boolean;
        object_set_property(name: string, property: Value): void;
        object_set_property_at_index(index: number, property: Value): void;
        to_boolean(): boolean;
        to_double(): number;
        to_int32(): number;
        to_json(indent: number): string;
        to_string(): string;
        to_string_as_bytes(): GLib.Bytes;
        typed_array_get_buffer(): Value;
        typed_array_get_data(): [null, number];
        typed_array_get_length(): number;
        typed_array_get_offset(): number;
        typed_array_get_size(): number;
        typed_array_get_type(): TypedArrayType;
    }
    namespace VirtualMachine {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class VirtualMachine extends GObject.Object {
        static $gtype: GObject.GType<VirtualMachine>;
        $signals: VirtualMachine.SignalSignatures;
        constructor(properties?: Partial<VirtualMachine.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VirtualMachine;
        connect<K extends keyof VirtualMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VirtualMachine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VirtualMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VirtualMachine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VirtualMachine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VirtualMachine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WeakValue {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            cleared: () => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            value: Value;
        }
    }
    class WeakValue extends GObject.Object {
        static $gtype: GObject.GType<WeakValue>;
        set value(val: Value);
        $signals: WeakValue.SignalSignatures;
        constructor(properties?: Partial<WeakValue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](value: Value): WeakValue;
        connect<K extends keyof WeakValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WeakValue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WeakValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WeakValue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WeakValue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WeakValue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): Value;
    }
    type ClassClass = typeof Class;
    abstract class ClassPrivate {
        static $gtype: GObject.GType<ClassPrivate>;
    }
    class ClassVTable {
        static $gtype: GObject.GType<ClassVTable>;
        get_property: ClassGetPropertyFunction;
        set_property: ClassSetPropertyFunction;
        has_property: ClassHasPropertyFunction;
        delete_property: ClassDeletePropertyFunction;
        enumerate_properties: ClassEnumeratePropertiesFunction;
    }
    type ContextClass = typeof Context;
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;
    }
    type ExceptionClass = typeof Exception;
    abstract class ExceptionPrivate {
        static $gtype: GObject.GType<ExceptionPrivate>;
    }
    type ValueClass = typeof Value;
    abstract class ValuePrivate {
        static $gtype: GObject.GType<ValuePrivate>;
    }
    type VirtualMachineClass = typeof VirtualMachine;
    abstract class VirtualMachinePrivate {
        static $gtype: GObject.GType<VirtualMachinePrivate>;
    }
    type WeakValueClass = typeof WeakValue;
    abstract class WeakValuePrivate {
        static $gtype: GObject.GType<WeakValuePrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default JavaScriptCore;
}
declare module 'gi://JavaScriptCore' {
    import JavaScriptCore41 from 'gi://JavaScriptCore?version=4.1';
    export default JavaScriptCore41;
}
