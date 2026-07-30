declare module 'gi://Json?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Json {
    export namespace NodeType {
        export const $gtype: GObject.GType<NodeType>;
    }
    enum NodeType {
        OBJECT,
        ARRAY,
        VALUE,
        NULL,
    }
    class ParserError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static PARSE: number;
        static TRAILING_COMMA: number;
        static MISSING_COMMA: number;
        static MISSING_COLON: number;
        static INVALID_BAREWORD: number;
        static EMPTY_MEMBER_NAME: number;
        static INVALID_DATA: number;
        static UNKNOWN: number;
        static NESTING: number;
        static INVALID_STRUCTURE: number;
        static INVALID_ASSIGNMENT: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class PathError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static QUERY: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class ReaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_ARRAY: number;
        static INVALID_INDEX: number;
        static NO_OBJECT: number;
        static INVALID_MEMBER: number;
        static INVALID_NODE: number;
        static NO_VALUE: number;
        static INVALID_TYPE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PARSER_MAX_RECURSION_DEPTH: number;
    const VERSION_S: string;
    function boxed_can_deserialize(gboxed_type: GObject.GType, node_type: NodeType): boolean;
    function boxed_can_serialize(gboxed_type: GObject.GType): [boolean, NodeType | null];
    function boxed_deserialize(gboxed_type: GObject.GType, node: Node): null;
    function boxed_serialize(gboxed_type: GObject.GType, boxed: null): Node | null;
    function construct_gobject<T = GObject.Object>(gtype: GObject.GType, data: string, length: bigint | number): T;
    function from_string(str: string): Node | null;
    function gobject_deserialize<T = GObject.Object>(gtype: GObject.GType, node: Node): T;
    function gobject_from_data<T = GObject.Object>(gtype: GObject.GType, data: string, length: bigint | number): T;
    function gobject_serialize(gobject: GObject.Object): Node;
    function gobject_to_data(gobject: GObject.Object): [string, number];
    function gvariant_deserialize(json_node: Node, signature: string | null): GLib.Variant | null;
    function gvariant_deserialize_data(json: string, length: bigint | number, signature: string | null): GLib.Variant | null;
    function gvariant_serialize(variant: GLib.Variant): Node;
    function gvariant_serialize_data(variant: GLib.Variant): [string, number];
    function parser_error_quark(): GLib.Quark;
    function path_error_quark(): GLib.Quark;
    function reader_error_quark(): GLib.Quark;
    function serialize_gobject(gobject: GObject.Object): [string, number];
    function string_compare(a: string, b: string): number;
    function string_equal(a: string, b: string): boolean;
    function string_hash(key: string): number;
    function to_string(node: Node, pretty: boolean): string;
    interface ArrayForeach {
        (array: Array, index_: number, element_node: Node): void;
    }
    interface BoxedDeserializeFunc {
        (node: Node): null;
    }
    interface BoxedSerializeFunc {
        (boxed: null): Node;
    }
    interface ObjectForeach {
        (object: Object, member_name: string, member_node: Node): void;
    }
    namespace Builder {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::immutable": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            immutable: boolean;
        }
    }
    class Builder extends GObject.Object {
        static $gtype: GObject.GType<Builder>;
        get immutable(): boolean;
        $signals: Builder.SignalSignatures;
        constructor(properties?: Partial<Builder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Builder;
        static new_immutable(): Builder;
        connect<K extends keyof Builder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Builder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Builder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Builder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Builder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Builder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_boolean_value(value: boolean): Builder | null;
        add_double_value(value: number): Builder | null;
        add_int_value(value: bigint | number): Builder | null;
        add_null_value(): Builder | null;
        add_string_value(value: string): Builder | null;
        add_value(node: Node): Builder | null;
        begin_array(): Builder | null;
        begin_object(): Builder | null;
        end_array(): Builder | null;
        end_object(): Builder | null;
        get_root(): Node | null;
        reset(): void;
        set_member_name(member_name: string): Builder | null;
    }
    namespace Generator {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::indent-char": (pspec: GObject.ParamSpec) => void;
            "notify::pretty": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            indent: number;
            indent_char: number;
            indentChar: number;
            pretty: boolean;
            root: Node | null;
        }
    }
    class Generator extends GObject.Object {
        static $gtype: GObject.GType<Generator>;
        get indent(): number;
        set indent(val: number);
        get indent_char(): number;
        set indent_char(val: number);
        get indentChar(): number;
        set indentChar(val: number);
        get pretty(): boolean;
        set pretty(val: boolean);
        get root(): Node | null;
        set root(val: Node | null);
        $signals: Generator.SignalSignatures;
        constructor(properties?: Partial<Generator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Generator;
        connect<K extends keyof Generator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Generator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Generator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Generator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Generator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Generator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_indent(): number;
        get_indent_char(): string;
        get_pretty(): boolean;
        get_root(): Node | null;
        set_indent(indent_level: number): void;
        set_indent_char(indent_char: string): void;
        set_pretty(is_pretty: boolean): void;
        set_root(node: Node): void;
        take_root(node: Node | null): void;
        to_data(): [string, number];
        to_file(filename: string): boolean;
        to_gstring(string: GLib.String): GLib.String;
        to_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Parser {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "array-element": (arg0: Array, arg1: number) => void;
            "array-end": (arg0: Array) => void;
            "array-start": () => void;
            error: (arg0: null) => void;
            "object-end": (arg0: Object) => void;
            "object-member": (arg0: Object, arg1: string) => void;
            "object-start": () => void;
            "parse-end": () => void;
            "parse-start": () => void;
            "notify::immutable": (pspec: GObject.ParamSpec) => void;
            "notify::strict": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            immutable: boolean;
            strict: boolean;
        }
    }
    class Parser extends GObject.Object {
        static $gtype: GObject.GType<Parser>;
        get immutable(): boolean;
        get strict(): boolean;
        set strict(val: boolean);
        $signals: Parser.SignalSignatures;
        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Parser;
        static new_immutable(): Parser;
        connect<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_array_element(array: Array, index_: number): void;
        vfunc_array_end(array: Array): void;
        vfunc_array_start(): void;
        vfunc_error(error: GLib.Error): void;
        vfunc_object_end(object: Object): void;
        vfunc_object_member(object: Object, member_name: string): void;
        vfunc_object_start(): void;
        vfunc_parse_end(): void;
        vfunc_parse_start(): void;
        get_current_line(): number;
        get_current_pos(): number;
        get_root(): Node | null;
        get_strict(): boolean;
        has_assignment(): [boolean, string];
        load_from_data(data: string, length: bigint | number): boolean;
        load_from_file(filename: string): boolean;
        load_from_mapped_file(filename: string): boolean;
        load_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
        load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        load_from_stream_finish(result: Gio.AsyncResult): boolean;
        set_strict(strict: boolean): void;
        steal_root(): Node | null;
    }
    namespace Path {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Path extends GObject.Object {
        static $gtype: GObject.GType<Path>;
        $signals: Path.SignalSignatures;
        constructor(properties?: Partial<Path.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Path;
        connect<K extends keyof Path.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Path.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Path.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Path.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Path.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Path.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static query(expression: string, root: Node): Node;
        compile(expression: string): boolean;
        match(root: Node): Node;
    }
    namespace Reader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::root": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            root: Node;
        }
    }
    class Reader extends GObject.Object {
        static $gtype: GObject.GType<Reader>;
        get root(): Node;
        set root(val: Node);
        $signals: Reader.SignalSignatures;
        constructor(properties?: Partial<Reader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](node: Node | null): Reader;
        connect<K extends keyof Reader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Reader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Reader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Reader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        count_elements(): number;
        count_members(): number;
        end_element(): void;
        end_member(): void;
        get_boolean_value(): boolean;
        get_current_node(): Node | null;
        get_double_value(): number;
        get_error(): GLib.Error | null;
        get_int_value(): number;
        get_member_name(): string | null;
        get_null_value(): boolean;
        get_string_value(): string;
        get_value(): Node | null;
        is_array(): boolean;
        is_object(): boolean;
        is_value(): boolean;
        list_members(): string[];
        read_element(index_: number): boolean;
        read_member(member_name: string): boolean;
        set_root(root: Node | null): void;
    }
    class Array {
        static $gtype: GObject.GType<Array>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Array;
        static sized_new(n_elements: number): Array;
        add_array_element(value: Array | null): void;
        add_boolean_element(value: boolean): void;
        add_double_element(value: number): void;
        add_element(node: Node): void;
        add_int_element(value: bigint | number): void;
        add_null_element(): void;
        add_object_element(value: Object | null): void;
        add_string_element(value: string): void;
        dup_element(index_: number): Node;
        equal(b: Array): boolean;
        foreach_element(func: ArrayForeach): void;
        get_array_element(index_: number): Array;
        get_boolean_element(index_: number): boolean;
        get_double_element(index_: number): number;
        get_element(index_: number): Node;
        get_elements(): Node[] | null;
        get_int_element(index_: number): number;
        get_length(): number;
        get_null_element(index_: number): boolean;
        get_object_element(index_: number): Object;
        get_string_element(index_: number): string;
        hash(): number;
        is_immutable(): boolean;
        ref(): Array;
        remove_element(index_: number): void;
        seal(): void;
        unref(): void;
    }
    type BuilderClass = typeof Builder;
    abstract class BuilderPrivate {
        static $gtype: GObject.GType<BuilderPrivate>;
    }
    type GeneratorClass = typeof Generator;
    abstract class GeneratorPrivate {
        static $gtype: GObject.GType<GeneratorPrivate>;
    }
    class Node {
        static $gtype: GObject.GType<Node>;
        constructor(properties?: Partial<{}>);
        static alloc(): Node;
        static ["new"](type: NodeType): Node;
        copy(): Node;
        dup_array(): Array | null;
        dup_object(): Object | null;
        dup_string(): string | null;
        equal(b: Node): boolean;
        free(): void;
        get_array(): Array | null;
        get_boolean(): boolean;
        get_double(): number;
        get_int(): number;
        get_node_type(): NodeType;
        get_object(): Object | null;
        get_parent(): Node | null;
        get_string(): string | null;
        get_value(): unknown;
        get_value_type(): GObject.GType;
        hash(): number;
        init(type: NodeType): Node;
        init_array(array: Array | null): Node;
        init_boolean(value: boolean): Node;
        init_double(value: number): Node;
        init_int(value: bigint | number): Node;
        init_null(): Node;
        init_object(object: Object | null): Node;
        init_string(value: string | null): Node;
        is_immutable(): boolean;
        is_null(): boolean;
        ref(): Node;
        seal(): void;
        set_array(array: Array): void;
        set_boolean(value: boolean): void;
        set_double(value: number): void;
        set_int(value: bigint | number): void;
        set_object(object: Object | null): void;
        set_parent(parent: Node | null): void;
        set_string(value: string): void;
        set_value(value: GObject.Value | any): void;
        take_array(array: Array): void;
        take_object(object: Object): void;
        type_name(): string;
        unref(): void;
    }
    class Object {
        static $gtype: GObject.GType<Object>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Object;
        add_member(member_name: string, node: Node): void;
        dup_member(member_name: string): Node | null;
        equal(b: Object): boolean;
        foreach_member(func: ObjectForeach): void;
        get_array_member(member_name: string): Array | null;
        get_boolean_member(member_name: string): boolean;
        get_boolean_member_with_default(member_name: string, default_value: boolean): boolean;
        get_double_member(member_name: string): number;
        get_double_member_with_default(member_name: string, default_value: number): number;
        get_int_member(member_name: string): number;
        get_int_member_with_default(member_name: string, default_value: bigint | number): number;
        get_member(member_name: string): Node | null;
        get_members(): string[] | null;
        get_null_member(member_name: string): boolean;
        get_object_member(member_name: string): Object | null;
        get_size(): number;
        get_string_member(member_name: string): string;
        get_string_member_with_default(member_name: string, default_value: string): string;
        get_values(): Node[] | null;
        has_member(member_name: string): boolean;
        hash(): number;
        is_immutable(): boolean;
        ref(): Object;
        remove_member(member_name: string): void;
        seal(): void;
        set_array_member(member_name: string, value: Array): void;
        set_boolean_member(member_name: string, value: boolean): void;
        set_double_member(member_name: string, value: number): void;
        set_int_member(member_name: string, value: bigint | number): void;
        set_member(member_name: string, node: Node): void;
        set_null_member(member_name: string): void;
        set_object_member(member_name: string, value: Object): void;
        set_string_member(member_name: string, value: string): void;
        unref(): void;
    }
    class ObjectIter {
        static $gtype: GObject.GType<ObjectIter>;
        constructor(properties?: Partial<{}>);
        init(object: Object): void;
        init_ordered(object: Object): void;
        next(): [boolean, string, Node | null];
        next_ordered(): [boolean, string, Node | null];
    }
    type ParserClass = typeof Parser;
    abstract class ParserPrivate {
        static $gtype: GObject.GType<ParserPrivate>;
    }
    type PathClass = typeof Path;
    type ReaderClass = typeof Reader;
    abstract class ReaderPrivate {
        static $gtype: GObject.GType<ReaderPrivate>;
    }
    type SerializableIface = typeof Serializable;
    namespace Serializable {
        interface Interface {
            vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, GObject.Value | any];
            vfunc_find_property(name: string): GObject.ParamSpec | null;
            vfunc_get_property(pspec: GObject.ParamSpec): GObject.Value | any;
            vfunc_get_property(...args: never[]): any;
            vfunc_serialize_property(property_name: string, value: unknown, pspec: GObject.ParamSpec): Node | null;
            vfunc_set_property(pspec: GObject.ParamSpec, value: unknown): void;
            vfunc_set_property(...args: never[]): any;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SerializableNamespace {
        $gtype: GObject.GType<Serializable>;
        prototype: Serializable;
    }
    interface Serializable extends GObject.Object {
        default_deserialize_property(property_name: string, value: GObject.Value | any, pspec: GObject.ParamSpec, property_node: Node): boolean;
        default_serialize_property(property_name: string, value: GObject.Value | any, pspec: GObject.ParamSpec): Node | null;
        deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, unknown];
        find_property(name: string): GObject.ParamSpec | null;
        get_property(pspec: GObject.ParamSpec): unknown;
        get_property(...args: never[]): any;
        list_properties(): GObject.ParamSpec[];
        serialize_property(property_name: string, value: GObject.Value | any, pspec: GObject.ParamSpec): Node | null;
        set_property(pspec: GObject.ParamSpec, value: GObject.Value | any): void;
        set_property(...args: never[]): any;
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, GObject.Value | any];
    vfunc_find_property(name: string): GObject.ParamSpec | null;
    vfunc_get_property(pspec: GObject.ParamSpec): GObject.Value | any;
    vfunc_get_property(property_id: number, value: unknown, pspec: GObject.ParamSpec): void;
    vfunc_serialize_property(property_name: string, value: unknown, pspec: GObject.ParamSpec): Node | null;
    vfunc_set_property(pspec: GObject.ParamSpec, value: unknown): void;
    vfunc_set_property(property_id: number, value: unknown, pspec: GObject.ParamSpec): void;
    }
    export const Serializable: SerializableNamespace & {
        new (): Serializable; 
    };
    const __name__: string;
    const __version__: string;
}
export default Json;
}
declare module 'gi://Json' {
    import Json10 from 'gi://Json?version=1.0';
    export default Json10;
}
