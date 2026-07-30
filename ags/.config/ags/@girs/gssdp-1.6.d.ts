declare module 'gi://GSSDP?version=1.6' {
import type Soup from 'gi://Soup?version=3.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GSSDP {
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_IP_ADDRESS: number;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace UDAVersion {
        export const $gtype: GObject.GType<UDAVersion>;
    }
    enum UDAVersion {
        VERSION_UNSPECIFIED,
        VERSION_1_0,
        VERSION_1_1,
    }
    const ALL_RESOURCES: string;
    function error_quark(): GLib.Quark;
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "message-received": (arg0: string, arg1: number, arg2: number, arg3: Soup.MessageHeaders) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::address-family": (pspec: GObject.ParamSpec) => void;
            "notify::allocate-tcp-socket": (pspec: GObject.ParamSpec) => void;
            "notify::boot-id": (pspec: GObject.ParamSpec) => void;
            "notify::config-id": (pspec: GObject.ParamSpec) => void;
            "notify::host-ip": (pspec: GObject.ParamSpec) => void;
            "notify::host-mask": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::msearch-port": (pspec: GObject.ParamSpec) => void;
            "notify::network": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::server-id": (pspec: GObject.ParamSpec) => void;
            "notify::socket-ttl": (pspec: GObject.ParamSpec) => void;
            "notify::tcp-socket": (pspec: GObject.ParamSpec) => void;
            "notify::uda-version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            active: boolean;
            address: Gio.InetAddress;
            address_family: Gio.SocketFamily;
            addressFamily: Gio.SocketFamily;
            allocate_tcp_socket: boolean;
            allocateTcpSocket: boolean;
            boot_id: number;
            bootId: number;
            config_id: number;
            configId: number;
            host_ip: string;
            hostIp: string;
            host_mask: Gio.InetAddressMask;
            hostMask: Gio.InetAddressMask;
            "interface": string;
            msearch_port: number;
            msearchPort: number;
            network: string;
            port: number;
            server_id: string;
            serverId: string;
            socket_ttl: number;
            socketTtl: number;
            tcp_socket: Gio.Socket;
            tcpSocket: Gio.Socket;
            uda_version: UDAVersion;
            udaVersion: UDAVersion;
        }
    }
    class Client extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Client>;
        get active(): boolean;
        set active(val: boolean);
        get address(): Gio.InetAddress;
        get address_family(): Gio.SocketFamily;
        get addressFamily(): Gio.SocketFamily;
        get allocate_tcp_socket(): boolean;
        set allocate_tcp_socket(val: boolean);
        get allocateTcpSocket(): boolean;
        set allocateTcpSocket(val: boolean);
        get boot_id(): number;
        set boot_id(val: number);
        get bootId(): number;
        set bootId(val: number);
        get config_id(): number;
        set config_id(val: number);
        get configId(): number;
        set configId(val: number);
        get host_ip(): string;
        get hostIp(): string;
        get host_mask(): Gio.InetAddressMask;
        get hostMask(): Gio.InetAddressMask;
        get "interface"(): string;
        get msearch_port(): number;
        get msearchPort(): number;
        get network(): string;
        get port(): number;
        get server_id(): string;
        set server_id(val: string);
        get serverId(): string;
        set serverId(val: string);
        get socket_ttl(): number;
        get socketTtl(): number;
        get tcp_socket(): Gio.Socket;
        get tcpSocket(): Gio.Socket;
        get uda_version(): UDAVersion;
        get udaVersion(): UDAVersion;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](iface: string | null): Client;
        static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: UDAVersion): Client;
        static new_full(iface: string | null, addr: Gio.InetAddress | null, port: number, uda_version: UDAVersion): Client;
        static new_with_port(iface: string | null, msearch_port: number): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_cache_entry(ip_address: string, user_agent: string): void;
        append_header(name: string, value: string | null): void;
        can_reach(address: Gio.InetSocketAddress): boolean;
        clear_headers(): void;
        get_active(): boolean;
        get_address(): Gio.InetAddress;
        get_address_mask(): Gio.InetAddressMask;
        get_family(): Gio.SocketFamily;
        get_host_ip(): string;
        get_index(): number;
        get_interface(): string;
        get_network(): string;
        get_port(): number;
        get_server_id(): string;
        get_tcp_socket(): Gio.Socket;
        get_uda_version(): UDAVersion;
        guess_user_agent(ip_address: string): string;
        remove_header(name: string): void;
        set_boot_id(boot_id: number): void;
        set_config_id(config_id: number): void;
        set_network(network: string): void;
        set_server_id(server_id: string): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace ResourceBrowser {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "resource-available": (arg0: string, arg1: string[]) => void;
            "resource-unavailable": (arg0: string) => void;
            "resource-update": (arg0: string, arg1: number, arg2: number) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::mx": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            client: Client;
            mx: number;
            target: string;
        }
    }
    class ResourceBrowser extends GObject.Object {
        static $gtype: GObject.GType<ResourceBrowser>;
        get active(): boolean;
        set active(val: boolean);
        get client(): Client;
        get mx(): number;
        set mx(val: number);
        get target(): string;
        set target(val: string);
        $signals: ResourceBrowser.SignalSignatures;
        constructor(properties?: Partial<ResourceBrowser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](client: Client, target: string): ResourceBrowser;
        connect<K extends keyof ResourceBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceBrowser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResourceBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceBrowser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResourceBrowser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_resource_unavailable(usn: string): void;
        vfunc_resource_update(usn: string, boot_id: number, next_boot_id: number): void;
        get_active(): boolean;
        get_client(): Client;
        get_mx(): number;
        get_target(): string;
        rescan(): boolean;
        set_active(active: boolean): void;
        set_mx(mx: number): void;
        set_target(target: string): void;
    }
    namespace ResourceGroup {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::max-age": (pspec: GObject.ParamSpec) => void;
            "notify::message-delay": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            available: boolean;
            client: Client;
            max_age: number;
            maxAge: number;
            message_delay: number;
            messageDelay: number;
        }
    }
    class ResourceGroup extends GObject.Object {
        static $gtype: GObject.GType<ResourceGroup>;
        get available(): boolean;
        set available(val: boolean);
        get client(): Client;
        get max_age(): number;
        set max_age(val: number);
        get maxAge(): number;
        set maxAge(val: number);
        get message_delay(): number;
        set message_delay(val: number);
        get messageDelay(): number;
        set messageDelay(val: number);
        $signals: ResourceGroup.SignalSignatures;
        constructor(properties?: Partial<ResourceGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](client: Client): ResourceGroup;
        connect<K extends keyof ResourceGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResourceGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResourceGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_resource(target: string, usn: string, locations: string[]): number;
        add_resource_simple(target: string, usn: string, location: string): number;
        get_available(): boolean;
        get_client(): Client;
        get_max_age(): number;
        get_message_delay(): number;
        remove_resource(resource_id: number): void;
        set_available(available: boolean): void;
        set_max_age(max_age: number): void;
        set_message_delay(message_delay: number): void;
        update(new_boot_id: number): void;
    }
    type ClientClass = typeof Client;
    type ResourceBrowserClass = typeof ResourceBrowser;
    type ResourceGroupClass = typeof ResourceGroup;
    const __name__: string;
    const __version__: string;
}
export default GSSDP;
}
declare module 'gi://GSSDP' {
    import GSSDP16 from 'gi://GSSDP?version=1.6';
    export default GSSDP16;
}
