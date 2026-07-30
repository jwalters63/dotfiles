declare module 'gi://Qrtr?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Qrtr {
    const BUS_LOOKUP_TIMEOUT: string;
    const BUS_SIGNAL_NODE_ADDED: string;
    const BUS_SIGNAL_NODE_REMOVED: string;
    const CLIENT_NODE: string;
    const CLIENT_PORT: string;
    const CLIENT_SIGNAL_MESSAGE: string;
    const NODE_BUS: string;
    const NODE_ID: string;
    const NODE_SIGNAL_REMOVED: string;
    const NODE_SIGNAL_SERVICE_ADDED: string;
    const NODE_SIGNAL_SERVICE_REMOVED: string;
    function get_node_for_uri(uri: string): [boolean, number];
    function get_uri_for_node(node_id: number): string;
    namespace Bus {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "node-added": (arg0: number) => void;
            "node-removed": (arg0: number) => void;
            "notify::lookup-timeout": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            lookup_timeout: number;
            lookupTimeout: number;
        }
    }
    class Bus extends GObject.Object implements Gio.AsyncInitable<Bus> {
        static $gtype: GObject.GType<Bus>;
        get lookup_timeout(): number;
        get lookupTimeout(): number;
        $signals: Bus.SignalSignatures;
        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): Bus;
        static new_finish(...args: never[]): any;
        connect<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](lookup_timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Bus> | null): void;
        get_node(node_id: number): Node;
        get_nodes(): Node[] | null;
        peek_node(node_id: number): Node;
        peek_nodes(): Node[] | null;
        wait_for_node(node_id: number, timeout_ms: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Node>;
        wait_for_node(node_id: number, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        wait_for_node(node_id: number, timeout_ms: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Node> | void;
        wait_for_node_finish(res: Gio.AsyncResult): Node;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Bus;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "client-message": (arg0: Uint8Array) => void;
            "notify::client-node": (pspec: GObject.ParamSpec) => void;
            "notify::client-port": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            client_node: Node;
            clientNode: Node;
            client_port: number;
            clientPort: number;
        }
    }
    class Client extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Client>;
        get client_node(): Node;
        get clientNode(): Node;
        get client_port(): number;
        get clientPort(): number;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](node: Node, port: number, cancellable: Gio.Cancellable | null): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_node(): Node;
        get_port(): number;
        peek_node(): Node;
        send(message: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Node {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "node-removed": () => void;
            "service-added": (arg0: number) => void;
            "service-removed": (arg0: number) => void;
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::node-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus: Bus;
            node_id: number;
            nodeId: number;
        }
    }
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;
        get bus(): Bus;
        get node_id(): number;
        get nodeId(): number;
        $signals: Node.SignalSignatures;
        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_service_info(service: number, port: number, version: number, instance: number): void;
        get_bus(): Bus;
        get_id(): number;
        get_service_info_list(): NodeServiceInfo[];
        lookup_port(service: number): number;
        lookup_service(port: number): number;
        peek_bus(): Bus;
        peek_service_info_list(): NodeServiceInfo[];
        remove_service_info(service: number, port: number, version: number, instance: number): void;
        wait_for_services(services: number[], timeout_ms: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        wait_for_services(services: number[], timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        wait_for_services(services: number[], timeout_ms: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        wait_for_services_finish(result: Gio.AsyncResult): boolean;
    }
    type BusClass = typeof Bus;
    abstract class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;
    }
    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type NodeClass = typeof Node;
    abstract class NodePrivate {
        static $gtype: GObject.GType<NodePrivate>;
    }
    abstract class NodeServiceInfo {
        static $gtype: GObject.GType<NodeServiceInfo>;
        free(): void;
        get_instance(): number;
        get_port(): number;
        get_service(): number;
        get_version(): number;
    }
    const __name__: string;
    const __version__: string;
}
export default Qrtr;
}
declare module 'gi://Qrtr' {
    import Qrtr10 from 'gi://Qrtr?version=1.0';
    export default Qrtr10;
}
