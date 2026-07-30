declare module 'gi://Xmlb?version=2.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Xmlb {
    enum OpcodeKind {
        UNKNOWN,
        INTEGER,
        TEXT,
        FUNCTION,
        BOUND_UNSET,
        BOUND_INTEGER,
        BOUND_TEXT,
        INDEXED_TEXT,
        BOOLEAN,
        BOUND_INDEXED_TEXT,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function opcode_kind_from_string(str: string): OpcodeKind;
    function opcode_kind_to_string(kind: OpcodeKind): string;
    function string_escape(str: string): string;
    function version_string(): string;
    interface BuilderFixupFunc {
        (self: BuilderFixup, bn: BuilderNode): boolean;
    }
    interface BuilderNodeSortFunc {
        (bn1: BuilderNode, bn2: BuilderNode): number;
    }
    interface BuilderNodeTraverseFunc {
        (bn: BuilderNode): boolean;
    }
    interface BuilderSourceNodeFunc {
        (self: BuilderSource, bn: BuilderNode): boolean;
    }
    interface MachineMethodFunc {
        (self: Machine, stack: Stack, result_unused: boolean, exec_data: null): boolean;
    }
    interface MachineOpcodeFixupFunc {
        (self: Machine, opcodes: Stack): boolean;
    }
    interface MachineTextHandlerFunc {
        (self: Machine, opcodes: Stack, text: string, handled: boolean): boolean;
    }
    interface NodeTransmogrifyFunc {
        (self: Node): boolean;
    }
    enum BuilderCompileFlags {
        NONE,
        NATIVE_LANGS,
        IGNORE_INVALID,
        SINGLE_LANG,
        WATCH_BLOB,
        IGNORE_GUID,
        SINGLE_ROOT,
    }
    enum BuilderNodeFlags {
        NONE,
        IGNORE,
        LITERAL_TEXT,
        HAS_TEXT,
        HAS_TAIL,
        TOKENIZE_TEXT,
        STRIP_TEXT,
    }
    enum BuilderSourceFlags {
        NONE,
        LITERAL_TEXT,
        WATCH_FILE,
        WATCH_DIRECTORY,
    }
    enum MachineDebugFlags {
        NONE,
        SHOW_STACK,
        SHOW_PARSING,
        SHOW_OPTIMIZER,
        SHOW_SLOW_PATH,
    }
    enum MachineParseFlags {
        NONE,
        OPTIMIZE,
    }
    enum NodeExportFlags {
        NONE,
        ADD_HEADER,
        FORMAT_MULTILINE,
        FORMAT_INDENT,
        INCLUDE_SIBLINGS,
        ONLY_CHILDREN,
        COLLAPSE_EMPTY,
    }
    enum OpcodeFlags {
        UNKNOWN,
        INTEGER,
        TEXT,
        FUNCTION,
        BOUND,
        BOOLEAN,
        TOKENIZED,
    }
    enum QueryFlags {
        NONE,
        OPTIMIZE,
        USE_INDEXES,
        REVERSE,
        FORCE_NODE_CACHE,
    }
    enum SiloLoadFlags {
        NONE,
        NO_MAGIC,
        WATCH_BLOB,
    }
    enum SiloProfileFlags {
        NONE,
        DEBUG,
        APPEND,
        XPATH,
        OPTIMIZER,
    }
    namespace Builder {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Builder extends GObject.Object {
        static $gtype: GObject.GType<Builder>;
        $signals: Builder.SignalSignatures;
        constructor(properties?: Partial<Builder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Builder;
        connect<K extends keyof Builder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Builder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Builder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Builder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Builder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Builder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_fixup(fixup: BuilderFixup): void;
        add_locale(locale: string): void;
        append_guid(guid: string): void;
        compile(flags: BuilderCompileFlags, cancellable: Gio.Cancellable | null): Silo;
        ensure(file: Gio.File, flags: BuilderCompileFlags, cancellable: Gio.Cancellable | null): Silo;
        import_node(bn: BuilderNode): void;
        import_source(source: BuilderSource): void;
        set_profile_flags(profile_flags: SiloProfileFlags): void;
    }
    namespace BuilderFixup {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BuilderFixup extends GObject.Object {
        static $gtype: GObject.GType<BuilderFixup>;
        $signals: BuilderFixup.SignalSignatures;
        constructor(properties?: Partial<BuilderFixup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, func: BuilderFixupFunc): BuilderFixup;
        connect<K extends keyof BuilderFixup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderFixup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BuilderFixup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderFixup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BuilderFixup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BuilderFixup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_max_depth(): number;
        set_max_depth(max_depth: number): void;
    }
    namespace BuilderNode {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BuilderNode extends GObject.Object {
        static $gtype: GObject.GType<BuilderNode>;
        $signals: BuilderNode.SignalSignatures;
        constructor(properties?: Partial<BuilderNode.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](element: string): BuilderNode;
        connect<K extends keyof BuilderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BuilderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BuilderNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BuilderNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_child(child: BuilderNode): void;
        add_flag(flag: BuilderNodeFlags): void;
        add_token(token: string): void;
        depth(): number;
        ["export"](flags: NodeExportFlags): string;
        get_attr(name: string): string;
        get_attr_as_uint(name: string): number;
        get_child(element: string, text: string | null): BuilderNode;
        get_children(): BuilderNode[];
        get_element(): string;
        get_first_child(): BuilderNode;
        get_last_child(): BuilderNode;
        get_parent(): BuilderNode;
        get_tail(): string;
        get_text(): string;
        get_text_as_uint(): number;
        get_tokens(): string[] | null;
        has_flag(flag: BuilderNodeFlags): boolean;
        remove_attr(name: string): void;
        remove_child(child: BuilderNode): void;
        set_attr(name: string, value: string): void;
        set_element(element: string): void;
        set_tail(tail: string | null, tail_len: bigint | number): void;
        set_text(text: string | null, text_len: bigint | number): void;
        sort_children(func: BuilderNodeSortFunc): void;
        tokenize_text(): void;
        traverse(order: GLib.TraverseType, flags: GLib.TraverseFlags, max_depth: number, func: BuilderNodeTraverseFunc): void;
        unlink(): void;
    }
    namespace BuilderSource {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BuilderSource extends GObject.Object {
        static $gtype: GObject.GType<BuilderSource>;
        $signals: BuilderSource.SignalSignatures;
        constructor(properties?: Partial<BuilderSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BuilderSource;
        connect<K extends keyof BuilderSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BuilderSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BuilderSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BuilderSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_fixup(fixup: BuilderFixup): void;
        load_bytes(bytes: GLib.Bytes | Uint8Array, flags: BuilderSourceFlags): boolean;
        load_file(file: Gio.File, flags: BuilderSourceFlags, cancellable: Gio.Cancellable | null): boolean;
        load_xml(xml: string, flags: BuilderSourceFlags): boolean;
        set_info(info: BuilderNode | null): void;
        set_prefix(prefix: string | null): void;
    }
    namespace BuilderSourceCtx {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BuilderSourceCtx extends GObject.Object {
        static $gtype: GObject.GType<BuilderSourceCtx>;
        $signals: BuilderSourceCtx.SignalSignatures;
        constructor(properties?: Partial<BuilderSourceCtx.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BuilderSourceCtx.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderSourceCtx.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BuilderSourceCtx.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BuilderSourceCtx.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BuilderSourceCtx.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BuilderSourceCtx.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bytes(cancellable: Gio.Cancellable | null): GLib.Bytes;
        get_filename(): string | null;
        get_stream(): Gio.InputStream;
    }
    namespace Machine {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Machine extends GObject.Object {
        static $gtype: GObject.GType<Machine>;
        $signals: Machine.SignalSignatures;
        constructor(properties?: Partial<Machine.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Machine;
        connect<K extends keyof Machine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Machine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Machine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Machine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Machine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Machine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_method(name: string, n_opcodes: number, method_cb: MachineMethodFunc): void;
        add_opcode_fixup(opcodes_sig: string, fixup_cb: MachineOpcodeFixupFunc): void;
        add_operator(str: string, name: string): void;
        add_text_handler(handler_cb: MachineTextHandlerFunc): void;
        get_stack_size(): number;
        opcode_func_init(func_name: string): [boolean, Opcode];
        parse(text: string, text_len: bigint | number): Stack;
        parse_full(text: string, text_len: bigint | number, flags: MachineParseFlags): Stack;
        run(opcodes: Stack, exec_data: null): [boolean, boolean];
        run_with_bindings(opcodes: Stack, bindings: ValueBindings | null, exec_data: null): [boolean, boolean];
        set_debug_flags(flags: MachineDebugFlags): void;
        set_stack_size(stack_size: number): void;
        stack_pop(stack: Stack): [boolean, Opcode | null];
        stack_push(stack: Stack): [boolean, Opcode | null];
        stack_push_integer(stack: Stack, val: number): boolean;
        stack_push_text(stack: Stack, str: string): boolean;
        stack_push_text_static(stack: Stack, str: string): boolean;
        stack_push_text_steal(stack: Stack, str: string): boolean;
    }
    namespace Node {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;
        $signals: Node.SignalSignatures;
        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["export"](flags: NodeExportFlags): string;
        get_attr(name: string): string;
        get_attr_as_uint(name: string): number;
        get_child(): Node;
        get_children(): Node[];
        get_data(key: string): GLib.Bytes;
        get_data(...args: never[]): any;
        get_depth(): number;
        get_element(): string;
        get_next(): Node;
        get_parent(): Node;
        get_root(): Node;
        get_silo(): Silo;
        get_tail(): string;
        get_text(): string;
        get_text_as_uint(): number;
        query(xpath: string, limit: number): Node[];
        query_attr(xpath: string, name: string): string;
        query_attr_as_uint(xpath: string, name: string): number;
        query_export(xpath: string): string;
        query_first(xpath: string): Node;
        query_first_full(query: Query): Node;
        query_first_with_context(query: Query, context: QueryContext | null): Node;
        query_full(query: Query): Node[];
        query_text(xpath: string): string;
        query_text_as_uint(xpath: string): number;
        query_with_context(query: Query, context: QueryContext | null): Node[];
        set_data(key: string, data: GLib.Bytes | Uint8Array): void;
        set_data(...args: never[]): any;
        transmogrify(func_text: NodeTransmogrifyFunc, func_tail: NodeTransmogrifyFunc): boolean;
    }
    namespace Query {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Query extends GObject.Object {
        static $gtype: GObject.GType<Query>;
        $signals: Query.SignalSignatures;
        constructor(properties?: Partial<Query.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](silo: Silo, xpath: string): Query;
        static new_full(silo: Silo, xpath: string, flags: QueryFlags): Query;
        connect<K extends keyof Query.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Query.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Query.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Query.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind_str(idx: number, str: string): boolean;
        bind_val(idx: number, val: number): boolean;
        get_flags(): QueryFlags;
        get_limit(): number;
        get_xpath(): string;
        set_flags(flags: QueryFlags): void;
        set_limit(limit: number): void;
    }
    namespace Silo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enable-node-cache": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::valid": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_node_cache: boolean;
            enableNodeCache: boolean;
            guid: string;
            valid: boolean;
        }
    }
    class Silo extends GObject.Object {
        static $gtype: GObject.GType<Silo>;
        get enable_node_cache(): boolean;
        set enable_node_cache(val: boolean);
        get enableNodeCache(): boolean;
        set enableNodeCache(val: boolean);
        get guid(): string;
        set guid(val: string);
        get valid(): boolean;
        $signals: Silo.SignalSignatures;
        constructor(properties?: Partial<Silo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Silo;
        static new_from_xml(xml: string): Silo;
        connect<K extends keyof Silo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Silo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Silo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Silo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Silo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Silo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["export"](flags: NodeExportFlags): string;
        export_file(file: Gio.File, flags: NodeExportFlags, cancellable: Gio.Cancellable | null): boolean;
        get_bytes(): GLib.Bytes;
        get_enable_node_cache(): boolean;
        get_guid(): string;
        get_profile_string(): string;
        get_root(): Node;
        get_size(): number;
        invalidate(): void;
        is_valid(): boolean;
        load_from_bytes(blob: GLib.Bytes | Uint8Array, flags: SiloLoadFlags): boolean;
        load_from_file(file: Gio.File, flags: SiloLoadFlags, cancellable: Gio.Cancellable | null): boolean;
        lookup_query(xpath: string): Query;
        lookup_query_full(xpath: string): Query;
        query(xpath: string, limit: number): Node[];
        query_build_index(xpath: string, attr: string | null): boolean;
        query_first(xpath: string): Node;
        query_first_full(query: Query): Node;
        query_first_with_context(query: Query, context: QueryContext | null): Node;
        query_full(query: Query): Node[];
        query_with_context(query: Query, context: QueryContext | null): Node[];
        save_to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
        set_enable_node_cache(enable_node_cache: boolean): void;
        set_profile_flags(profile_flags: SiloProfileFlags): void;
        to_string(): string;
        watch_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    }
    type BuilderClass = typeof Builder;
    type BuilderFixupClass = typeof BuilderFixup;
    type BuilderNodeClass = typeof BuilderNode;
    type BuilderSourceClass = typeof BuilderSource;
    type BuilderSourceCtxClass = typeof BuilderSourceCtx;
    type MachineClass = typeof Machine;
    class NodeAttrIter {
        static $gtype: GObject.GType<NodeAttrIter>;
        constructor(properties?: Partial<{}>);
        init(self: Node): void;
        next(): [boolean, string, string];
    }
    class NodeChildIter {
        static $gtype: GObject.GType<NodeChildIter>;
        constructor(properties?: Partial<{}>);
        init(self: Node): void;
        next(): [boolean, Node | null];
    }
    type NodeClass = typeof Node;
    abstract class Opcode {
        static $gtype: GObject.GType<Opcode>;
        static kind_from_string(str: string): OpcodeKind;
        static kind_to_string(kind: OpcodeKind): string;
        cmp_str(): boolean;
        cmp_val(): boolean;
        func_init(func: number): void;
        get_kind(): OpcodeKind;
        get_str(): string;
        get_val(): number;
        integer_init(val: number): void;
        text_init(str: string): void;
        text_init_static(str: string): void;
        text_init_steal(str: string): void;
        to_string(): string;
    }
    type QueryClass = typeof Query;
    class QueryContext {
        static $gtype: GObject.GType<QueryContext>;
        constructor(properties?: Partial<{}>);
        clear(): void;
        copy(): QueryContext;
        free(): void;
        get_bindings(): ValueBindings;
        get_flags(): QueryFlags;
        get_limit(): number;
        init(): void;
        set_flags(flags: QueryFlags): void;
        set_limit(limit: number): void;
    }
    type SiloClass = typeof Silo;
    abstract class Stack {
        static $gtype: GObject.GType<Stack>;
        pop(): [boolean, Opcode | null];
        push(): [boolean, Opcode | null];
        to_string(): string;
    }
    class ValueBindings {
        static $gtype: GObject.GType<ValueBindings>;
        constructor(properties?: Partial<{}>);
        bind_str(idx: number, str: string): void;
        bind_val(idx: number, val: number): void;
        clear(): void;
        copy(): ValueBindings;
        copy_binding(idx: number, dest: ValueBindings, dest_idx: number): boolean;
        free(): void;
        init(): void;
        is_bound(idx: number): boolean;
        lookup_opcode(idx: number): [boolean, Opcode];
    }
    const __name__: string;
    const __version__: string;
}
export default Xmlb;
}
declare module 'gi://Xmlb' {
    import Xmlb20 from 'gi://Xmlb?version=2.0';
    export default Xmlb20;
}
