declare module 'gi://Tsparql?version=3.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Tsparql {
    export namespace DeserializeFlags {
        export const $gtype: GObject.GType<DeserializeFlags>;
    }
    enum DeserializeFlags {
        NONE,
    }
    export namespace NotifierEventType {
        export const $gtype: GObject.GType<NotifierEventType>;
    }
    enum NotifierEventType {
        CREATE,
        DELETE,
        UPDATE,
    }
    export namespace RdfFormat {
        export const $gtype: GObject.GType<RdfFormat>;
    }
    enum RdfFormat {
        TURTLE,
        TRIG,
        JSON_LD,
        LAST,
    }
    export namespace SerializeFlags {
        export const $gtype: GObject.GType<SerializeFlags>;
    }
    enum SerializeFlags {
        NONE,
    }
    class SparqlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static CONSTRAINT: number;
        static INTERNAL: number;
        static NO_SPACE: number;
        static ONTOLOGY_NOT_FOUND: number;
        static OPEN_ERROR: number;
        static PARSE: number;
        static QUERY_FAILED: number;
        static TYPE: number;
        static UNKNOWN_CLASS: number;
        static UNKNOWN_GRAPH: number;
        static UNKNOWN_PROPERTY: number;
        static UNSUPPORTED: number;
        static MISSING_LAST_MODIFIED_HEADER: number;
        static INCOMPLETE_PROPERTY_DEFINITION: number;
        static CORRUPT: number;
        static LAST: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    enum SparqlValueType {
        UNBOUND,
        URI,
        STRING,
        INTEGER,
        DOUBLE,
        DATETIME,
        BLANK_NODE,
        BOOLEAN,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PREFIX_DC: string;
    const PREFIX_MFO: string;
    const PREFIX_NAO: string;
    const PREFIX_NCO: string;
    const PREFIX_NFO: string;
    const PREFIX_NIE: string;
    const PREFIX_NMM: string;
    const PREFIX_NRL: string;
    const PREFIX_OSINFO: string;
    const PREFIX_RDF: string;
    const PREFIX_RDFS: string;
    const PREFIX_SLO: string;
    const PREFIX_TRACKER: string;
    const PREFIX_XSD: string;
    function check_version(required_major: number, required_minor: number, required_micro: number): string;
    function sparql_error_quark(): GLib.Quark;
    function sparql_escape_string(literal: string): string;
    function sparql_escape_uri(uri: string): string;
    function sparql_get_ontology_nepomuk(): Gio.File;
    function sparql_get_uuid_urn(): string;
    export namespace SparqlConnectionFlags {
        export const $gtype: GObject.GType<SparqlConnectionFlags>;
    }
    enum SparqlConnectionFlags {
        NONE,
        READONLY,
        FTS_ENABLE_STEMMER,
        FTS_ENABLE_UNACCENT,
        FTS_ENABLE_STOP_WORDS,
        FTS_IGNORE_NUMBERS,
        ANONYMOUS_BNODES,
        DISABLE_SYNTAX_EXTENSIONS,
        SPARQL_STRICT,
    }
    namespace Batch {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
        }
    }
    abstract class Batch extends GObject.Object {
        static $gtype: GObject.GType<Batch>;
        get connection(): SparqlConnection;
        $signals: Batch.SignalSignatures;
        constructor(properties?: Partial<Batch.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Batch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Batch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Batch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Batch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Batch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Batch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_rdf(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream): void;
        add_resource(graph: string | null, resource: Resource): void;
        add_sparql(sparql: string): void;
        add_statement(stmt: SparqlStatement, variable_names: string[], values: (GObject.Value | any)[]): void;
        execute(cancellable: Gio.Cancellable | null): boolean;
        execute_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        execute_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        execute_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        execute_finish(res: Gio.AsyncResult): boolean;
        get_connection(): SparqlConnection;
    }
    namespace Endpoint {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::allowed-graphs": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-services": (pspec: GObject.ParamSpec) => void;
            "notify::readonly": (pspec: GObject.ParamSpec) => void;
            "notify::sparql-connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allowed_graphs: string[];
            allowedGraphs: string[];
            allowed_services: string[];
            allowedServices: string[];
            readonly: boolean;
            sparql_connection: SparqlConnection;
            sparqlConnection: SparqlConnection;
        }
    }
    abstract class Endpoint extends GObject.Object {
        static $gtype: GObject.GType<Endpoint>;
        get allowed_graphs(): string[];
        set allowed_graphs(val: string[]);
        get allowedGraphs(): string[];
        set allowedGraphs(val: string[]);
        get allowed_services(): string[];
        set allowed_services(val: string[]);
        get allowedServices(): string[];
        set allowedServices(val: string[]);
        get readonly(): boolean;
        set readonly(val: boolean);
        get sparql_connection(): SparqlConnection;
        get sparqlConnection(): SparqlConnection;
        $signals: Endpoint.SignalSignatures;
        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Endpoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Endpoint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Endpoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Endpoint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Endpoint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Endpoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_allowed_graphs(): string[];
        get_allowed_services(): string[];
        get_readonly(): boolean;
        get_sparql_connection(): SparqlConnection;
        set_allowed_graphs(graphs: string): void;
        set_allowed_services(services: string): void;
        set_readonly(readonly: boolean): void;
    }
    namespace EndpointDBus {
        interface SignalSignatures extends Endpoint.SignalSignatures {
            "block-call": (arg0: string) => boolean | void;
            "notify::dbus-connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-graphs": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-services": (pspec: GObject.ParamSpec) => void;
            "notify::readonly": (pspec: GObject.ParamSpec) => void;
            "notify::sparql-connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Endpoint.ConstructorProps, Gio.Initable.ConstructorProps {
            dbus_connection: Gio.DBusConnection;
            dbusConnection: Gio.DBusConnection;
            object_path: string;
            objectPath: string;
        }
    }
    class EndpointDBus extends Endpoint implements Gio.Initable {
        static $gtype: GObject.GType<EndpointDBus>;
        get dbus_connection(): Gio.DBusConnection;
        get dbusConnection(): Gio.DBusConnection;
        get object_path(): string;
        get objectPath(): string;
        $signals: EndpointDBus.SignalSignatures;
        constructor(properties?: Partial<EndpointDBus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path: string | null, cancellable: Gio.Cancellable | null): EndpointDBus;
        connect<K extends keyof EndpointDBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EndpointDBus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EndpointDBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EndpointDBus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EndpointDBus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EndpointDBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace EndpointHttp {
        interface SignalSignatures extends Endpoint.SignalSignatures {
            "block-remote-address": (arg0: Gio.SocketAddress) => boolean | void;
            "notify::http-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::http-port": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-graphs": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-services": (pspec: GObject.ParamSpec) => void;
            "notify::readonly": (pspec: GObject.ParamSpec) => void;
            "notify::sparql-connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Endpoint.ConstructorProps, Gio.Initable.ConstructorProps {
            http_certificate: Gio.TlsCertificate;
            httpCertificate: Gio.TlsCertificate;
            http_port: number;
            httpPort: number;
        }
    }
    class EndpointHttp extends Endpoint implements Gio.Initable {
        static $gtype: GObject.GType<EndpointHttp>;
        get http_certificate(): Gio.TlsCertificate;
        get httpCertificate(): Gio.TlsCertificate;
        get http_port(): number;
        get httpPort(): number;
        $signals: EndpointHttp.SignalSignatures;
        constructor(properties?: Partial<EndpointHttp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sparql_connection: SparqlConnection, port: number, certificate: Gio.TlsCertificate | null, cancellable: Gio.Cancellable | null): EndpointHttp;
        connect<K extends keyof EndpointHttp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EndpointHttp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EndpointHttp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EndpointHttp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EndpointHttp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EndpointHttp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace NamespaceManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class NamespaceManager extends GObject.Object {
        static $gtype: GObject.GType<NamespaceManager>;
        $signals: NamespaceManager.SignalSignatures;
        constructor(properties?: Partial<NamespaceManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): NamespaceManager;
        connect<K extends keyof NamespaceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NamespaceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NamespaceManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NamespaceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): NamespaceManager;
        add_prefix(prefix: string, ns: string): void;
        compress_uri(uri: string): string;
        expand_uri(compact_uri: string): string;
        foreach(func: GLib.HFunc): void;
        has_prefix(prefix: string): boolean;
        lookup_prefix(prefix: string): string | null;
        print_turtle(): string;
    }
    namespace Notifier {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            events: (arg0: string, arg1: string, arg2: NotifierEvent[]) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
        }
    }
    class Notifier extends GObject.Object {
        static $gtype: GObject.GType<Notifier>;
        get connection(): SparqlConnection;
        $signals: Notifier.SignalSignatures;
        constructor(properties?: Partial<Notifier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Notifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Notifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Notifier.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        signal_subscribe(connection: Gio.DBusConnection, service: string | null, object_path: string | null, graph: string | null): number;
        signal_unsubscribe(handler_id: number): void;
    }
    namespace Resource {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::identifier": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            identifier: string | null;
        }
    }
    class Resource extends GObject.Object {
        static $gtype: GObject.GType<Resource>;
        get identifier(): string | null;
        set identifier(val: string | null);
        $signals: Resource.SignalSignatures;
        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](identifier: string | null): Resource;
        connect<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Resource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static deserialize(variant: GLib.Variant): Resource | null;
        add_boolean(property_uri: string, value: boolean): void;
        add_datetime(property_uri: string, value: GLib.DateTime): void;
        add_double(property_uri: string, value: number): void;
        add_gvalue(property_uri: string, value: GObject.Value | any): void;
        add_int(property_uri: string, value: number): void;
        add_int64(property_uri: string, value: bigint | number): void;
        add_relation(property_uri: string, resource: Resource): void;
        add_string(property_uri: string, value: string): void;
        add_take_relation(property_uri: string, resource: Resource): void;
        add_uri(property_uri: string, value: string): void;
        get_first_boolean(property_uri: string): boolean;
        get_first_datetime(property_uri: string): GLib.DateTime | null;
        get_first_double(property_uri: string): number;
        get_first_int(property_uri: string): number;
        get_first_int64(property_uri: string): number;
        get_first_relation(property_uri: string): Resource | null;
        get_first_string(property_uri: string): string | null;
        get_first_uri(property_uri: string): string | null;
        get_identifier(): string | null;
        get_properties(): string[];
        get_property_overwrite(property_uri: string): boolean;
        get_values(property_uri: string): unknown[] | null;
        identifier_compare_func(identifier: string): number;
        print_jsonld(namespaces: NamespaceManager | null): string;
        print_rdf(namespaces: NamespaceManager, format: RdfFormat, graph: string | null): string;
        print_sparql_update(namespaces: NamespaceManager | null, graph_id: string | null): string;
        print_turtle(namespaces: NamespaceManager | null): string;
        serialize(): GLib.Variant | null;
        set_boolean(property_uri: string, value: boolean): void;
        set_datetime(property_uri: string, value: GLib.DateTime): void;
        set_double(property_uri: string, value: number): void;
        set_gvalue(property_uri: string, value: GObject.Value | any): void;
        set_identifier(identifier: string | null): void;
        set_int(property_uri: string, value: number): void;
        set_int64(property_uri: string, value: bigint | number): void;
        set_relation(property_uri: string, resource: Resource): void;
        set_string(property_uri: string, value: string): void;
        set_take_relation(property_uri: string, resource: Resource): void;
        set_uri(property_uri: string, value: string): void;
    }
    namespace SparqlConnection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class SparqlConnection extends GObject.Object {
        static $gtype: GObject.GType<SparqlConnection>;
        $signals: SparqlConnection.SignalSignatures;
        constructor(properties?: Partial<SparqlConnection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static bus_new(service_name: string, object_path: string | null, dbus_connection: Gio.DBusConnection | null): SparqlConnection;
        static bus_new_finish(result: Gio.AsyncResult): SparqlConnection;
        static ["new"](flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): SparqlConnection;
        static new_finish(result: Gio.AsyncResult): SparqlConnection;
        static new_from_rdf(flags: SparqlConnectionFlags, store: Gio.File | null, deserialize_flags: DeserializeFlags, rdf_format: RdfFormat, rdf_stream: Gio.InputStream, cancellable: Gio.Cancellable | null): SparqlConnection;
        static new_from_rdf_finish(result: Gio.AsyncResult): SparqlConnection;
        static remote_new(uri_base: string): SparqlConnection;
        connect<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static bus_new_async(service_name: string, object_path: string | null, dbus_connection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SparqlConnection> | null): void;
        static new_async(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SparqlConnection> | null): void;
        static new_from_rdf_async(flags: SparqlConnectionFlags, store: Gio.File | null, deserialize_flags: DeserializeFlags, rdf_format: RdfFormat, rdf_stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SparqlConnection> | null): void;
        close(): void;
        close_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        close_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        close_finish(res: Gio.AsyncResult): boolean;
        create_batch(): Batch;
        create_notifier(): Notifier | null;
        deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        deserialize_finish(result: Gio.AsyncResult): boolean;
        get_namespace_manager(): NamespaceManager;
        load_statement_from_gresource(resource_path: string, cancellable: Gio.Cancellable | null): SparqlStatement;
        map_connection(handle_name: string, service_connection: SparqlConnection): void;
        query(sparql: string, cancellable: Gio.Cancellable | null): SparqlCursor;
        query_async(sparql: string, cancellable: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>;
        query_async(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        query_async(sparql: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SparqlCursor> | void;
        query_finish(res: Gio.AsyncResult): SparqlCursor;
        query_statement(sparql: string, cancellable: Gio.Cancellable | null): SparqlStatement;
        serialize_async(flags: SerializeFlags, format: RdfFormat, query: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        serialize_async(flags: SerializeFlags, format: RdfFormat, query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        serialize_async(flags: SerializeFlags, format: RdfFormat, query: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream> | void;
        serialize_finish(result: Gio.AsyncResult): Gio.InputStream;
        update(sparql: string, cancellable: Gio.Cancellable | null): void;
        update_array_async(sparql: string, sparql_length: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        update_array_async(sparql: string, sparql_length: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_array_async(sparql: string, sparql_length: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        update_array_finish(res: Gio.AsyncResult): boolean;
        update_async(sparql: string, cancellable: Gio.Cancellable | null): globalThis.Promise<void>;
        update_async(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_async(sparql: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        update_blank(sparql: string, cancellable: Gio.Cancellable | null): GLib.Variant;
        update_blank_async(sparql: string, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;
        update_blank_async(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_blank_async(sparql: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;
        update_blank_finish(res: Gio.AsyncResult): GLib.Variant;
        update_finish(res: Gio.AsyncResult): void;
        update_resource(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null): boolean;
        update_resource_async(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        update_resource_async(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_resource_async(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        update_resource_finish(res: Gio.AsyncResult): boolean;
        update_statement(sparql: string, cancellable: Gio.Cancellable | null): SparqlStatement;
    }
    namespace SparqlCursor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::n-columns": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
            n_columns: number;
            nColumns: number;
        }
    }
    abstract class SparqlCursor extends GObject.Object {
        static $gtype: GObject.GType<SparqlCursor>;
        get connection(): SparqlConnection;
        get n_columns(): number;
        get nColumns(): number;
        $signals: SparqlCursor.SignalSignatures;
        constructor(properties?: Partial<SparqlCursor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlCursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        close(): void;
        get_boolean(column: number): boolean;
        get_connection(): SparqlConnection;
        get_datetime(column: number): GLib.DateTime | null;
        get_double(column: number): number;
        get_integer(column: number): number;
        get_langstring(column: number): [string | null, string, number];
        get_n_columns(): number;
        get_string(column: number): [string | null, number];
        get_value_type(column: number): SparqlValueType;
        get_variable_name(column: number): string | null;
        is_bound(column: number): boolean;
        next(cancellable: Gio.Cancellable | null): boolean;
        next_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        next_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        next_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        next_finish(res: Gio.AsyncResult): boolean;
        rewind(): void;
    }
    namespace SparqlStatement {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::sparql": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
            sparql: string;
        }
    }
    abstract class SparqlStatement extends GObject.Object {
        static $gtype: GObject.GType<SparqlStatement>;
        get connection(): SparqlConnection;
        get sparql(): string;
        $signals: SparqlStatement.SignalSignatures;
        constructor(properties?: Partial<SparqlStatement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SparqlStatement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SparqlStatement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SparqlStatement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlStatement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind_boolean(name: string, value: boolean): void;
        bind_datetime(name: string, value: GLib.DateTime): void;
        bind_double(name: string, value: number): void;
        bind_int(name: string, value: bigint | number): void;
        bind_langstring(name: string, value: string, langtag: string): void;
        bind_string(name: string, value: string): void;
        clear_bindings(): void;
        execute(cancellable: Gio.Cancellable | null): SparqlCursor;
        execute_async(cancellable: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>;
        execute_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        execute_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SparqlCursor> | void;
        execute_finish(res: Gio.AsyncResult): SparqlCursor;
        get_connection(): SparqlConnection;
        get_sparql(): string;
        serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream> | void;
        serialize_finish(result: Gio.AsyncResult): Gio.InputStream;
        update(cancellable: Gio.Cancellable | null): boolean;
        update_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        update_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        update_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        update_finish(result: Gio.AsyncResult): boolean;
    }
    type BatchClass = typeof Batch;
    type EndpointClass = typeof Endpoint;
    type NamespaceManagerClass = typeof NamespaceManager;
    type NotifierClass = typeof Notifier;
    abstract class NotifierEvent {
        static $gtype: GObject.GType<NotifierEvent>;
        get_event_type(): NotifierEventType;
        get_id(): number;
        get_urn(): string;
    }
    type ResourceClass = typeof Resource;
    type SparqlConnectionClass = typeof SparqlConnection;
    type SparqlCursorClass = typeof SparqlCursor;
    type SparqlStatementClass = typeof SparqlStatement;
    const __name__: string;
    const __version__: string;
}
export default Tsparql;
}
declare module 'gi://Tsparql' {
    import Tsparql30 from 'gi://Tsparql?version=3.0';
    export default Tsparql30;
}
