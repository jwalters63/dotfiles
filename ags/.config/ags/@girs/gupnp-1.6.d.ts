declare module 'gi://GUPnP?version=1.6' {
import type libxml2 from 'gi://libxml2?version=2.0';
import type Soup from 'gi://Soup?version=3.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GSSDP from 'gi://GSSDP?version=1.6';
export namespace GUPnP {
    class ControlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_ACTION: number;
        static INVALID_ARGS: number;
        static OUT_OF_SYNC: number;
        static ACTION_FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class EventingError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static SUBSCRIPTION_FAILED: number;
        static SUBSCRIPTION_LOST: number;
        static NOTIFY_FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class RootdeviceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_CONTEXT: number;
        static NO_DESCRIPTION_PATH: number;
        static NO_DESCRIPTION_FOLDER: number;
        static NO_NETWORK: number;
        static FAIL: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class ServerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INTERNAL_SERVER_ERROR: number;
        static NOT_FOUND: number;
        static NOT_IMPLEMENTED: number;
        static INVALID_RESPONSE: number;
        static INVALID_URL: number;
        static OTHER: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace ServiceActionArgDirection {
        export const $gtype: GObject.GType<ServiceActionArgDirection>;
    }
    enum ServiceActionArgDirection {
        IN,
        OUT,
    }
    class ServiceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static AUTOCONNECT: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class ServiceIntrospectionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static OTHER: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class XMLError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static PARSE: number;
        static NO_NODE: number;
        static EMPTY_NODE: number;
        static INVALID_ATTRIBUTE: number;
        static OTHER: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    function control_error_quark(): GLib.Quark;
    function eventing_error_quark(): GLib.Quark;
    function get_uuid(): string;
    function rootdevice_error_quark(): GLib.Quark;
    function server_error_quark(): GLib.Quark;
    function service_error_quark(): GLib.Quark;
    function service_introspection_error_quark(): GLib.Quark;
    function xml_error_quark(): GLib.Quark;
    interface ServiceProxyActionCallback {
        (proxy: ServiceProxy, action: ServiceProxyAction): void;
    }
    interface ServiceProxyNotifyCallback {
        (proxy: ServiceProxy, variable: string, value: unknown): void;
    }
    type BinBase64 = object | null;
    type BinHex = object | null;
    type Date = object | null;
    type DateTime = object | null;
    type DateTimeTZ = object | null;
    type Time = object | null;
    type TimeTZ = object | null;
    type URI = object | null;
    type UUID = object | null;
    namespace Context {
        interface SignalSignatures extends GSSDP.Client.SignalSignatures {
            "notify::acl": (pspec: GObject.ParamSpec) => void;
            "notify::default-language": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::subscription-timeout": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends GSSDP.Client.ConstructorProps, Gio.Initable.ConstructorProps {
            acl: Acl;
            default_language: string;
            defaultLanguage: string;
            server: Soup.Server;
            session: Soup.Session;
            subscription_timeout: number;
            subscriptionTimeout: number;
        }
    }
    class Context extends GSSDP.Client implements Gio.Initable {
        static $gtype: GObject.GType<Context>;
        get acl(): Acl;
        set acl(val: Acl);
        get default_language(): string;
        set default_language(val: string);
        get defaultLanguage(): string;
        set defaultLanguage(val: string);
        get server(): Soup.Server;
        get session(): Soup.Session;
        get subscription_timeout(): number;
        get subscriptionTimeout(): number;
        $signals: Context.SignalSignatures;
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](iface: string | null, port: number): Context;
        static ["new"](...args: never[]): any;
        static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context;
        static new_full(iface: string | null, addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context;
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback): void;
        get_acl(): Acl;
        get_default_language(): string;
        get_port(): number;
        get_server(): Soup.Server;
        get_session(): Soup.Session;
        get_subscription_timeout(): number;
        host_path(local_path: string, server_path: string): void;
        host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;
        remove_server_handler(path: string): void;
        rewrite_uri(uri: string): string;
        set_acl(acl: Acl | null): void;
        set_default_language(language: string): void;
        set_subscription_timeout(timeout: number): void;
        unhost_path(server_path: string): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace ContextFilter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled: boolean;
            entries: string[] | null;
        }
    }
    class ContextFilter extends GObject.Object {
        static $gtype: GObject.GType<ContextFilter>;
        get enabled(): boolean;
        set enabled(val: boolean);
        get entries(): string[] | null;
        $signals: ContextFilter.SignalSignatures;
        constructor(properties?: Partial<ContextFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ContextFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_entry(entry: string): boolean;
        add_entryv(entries: string[]): void;
        check_context(context: Context): boolean;
        clear(): void;
        get_enabled(): boolean;
        get_entries(): string[] | null;
        is_empty(): boolean;
        remove_entry(entry: string): boolean;
        set_enabled(enable: boolean): void;
    }
    namespace ContextManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "context-available": (arg0: Context) => void;
            "context-unavailable": (arg0: Context) => void;
            "notify::context-filter": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::uda-version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context_filter: ContextFilter;
            contextFilter: ContextFilter;
            family: Gio.SocketFamily;
            port: number;
            uda_version: GSSDP.UDAVersion;
            udaVersion: GSSDP.UDAVersion;
        }
    }
    abstract class ContextManager extends GObject.Object {
        static $gtype: GObject.GType<ContextManager>;
        get context_filter(): ContextFilter;
        get contextFilter(): ContextFilter;
        get family(): Gio.SocketFamily;
        get port(): number;
        get uda_version(): GSSDP.UDAVersion;
        get udaVersion(): GSSDP.UDAVersion;
        $signals: ContextManager.SignalSignatures;
        constructor(properties?: Partial<ContextManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ContextManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static create(port: number): ContextManager;
        static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;
        get_context_filter(): ContextFilter;
        get_port(): number;
        get_socket_family(): Gio.SocketFamily;
        get_uda_version(): GSSDP.UDAVersion;
        manage_control_point(control_point: ControlPoint): void;
        manage_root_device(root_device: RootDevice): void;
        rescan_control_points(): void;
    }
    namespace ControlPoint {
        interface SignalSignatures extends GSSDP.ResourceBrowser.SignalSignatures {
            "device-proxy-available": (arg0: DeviceProxy) => void;
            "device-proxy-unavailable": (arg0: DeviceProxy) => void;
            "service-proxy-available": (arg0: ServiceProxy) => void;
            "service-proxy-unavailable": (arg0: ServiceProxy) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::mx": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GSSDP.ResourceBrowser.ConstructorProps {
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
        }
    }
    class ControlPoint extends GSSDP.ResourceBrowser {
        static $gtype: GObject.GType<ControlPoint>;
        get resource_factory(): ResourceFactory;
        get resourceFactory(): ResourceFactory;
        $signals: ControlPoint.SignalSignatures;
        constructor(properties?: Partial<ControlPoint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: Context, target: string): ControlPoint;
        static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;
        connect<K extends keyof ControlPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlPoint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlPoint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlPoint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlPoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_device_proxy_available(proxy: DeviceProxy): void;
        vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;
        vfunc_service_proxy_available(proxy: ServiceProxy): void;
        vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;
        get_context(): Context;
        get_resource_factory(): ResourceFactory;
        list_device_proxies(): DeviceProxy[];
        list_service_proxies(): ServiceProxy[];
    }
    namespace Device {
        interface SignalSignatures extends DeviceInfo.SignalSignatures {
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DeviceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }
    class Device extends DeviceInfo {
        static $gtype: GObject.GType<Device>;
        get root_device(): RootDevice;
        get rootDevice(): RootDevice;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DeviceInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            device_type: string;
            deviceType: string;
            document: XMLDoc;
            element: never;
            location: string;
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
            udn: string;
            url_base: GLib.Uri;
            urlBase: GLib.Uri;
        }
    }
    abstract class DeviceInfo extends GObject.Object {
        static $gtype: GObject.GType<DeviceInfo>;
        get context(): Context;
        get device_type(): string;
        get deviceType(): string;
        get document(): XMLDoc;
        set document(val: XMLDoc);
        set element(val: never);
        get location(): string;
        set location(val: string);
        get resource_factory(): ResourceFactory;
        get resourceFactory(): ResourceFactory;
        get udn(): string;
        get url_base(): GLib.Uri;
        set url_base(val: GLib.Uri);
        get urlBase(): GLib.Uri;
        set urlBase(val: GLib.Uri);
        $signals: DeviceInfo.SignalSignatures;
        constructor(properties?: Partial<DeviceInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_context(): Context;
        get_description_value(element: string): string | null;
        get_device(type: string): DeviceInfo | null;
        get_device_type(): string;
        get_friendly_name(): string | null;
        get_icon_async(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<[GLib.Bytes, string, number, number, number]>;
        get_icon_async(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_icon_async(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[GLib.Bytes, string, number, number, number]> | void;
        get_icon_finish(res: Gio.AsyncResult): [GLib.Bytes, string, number, number, number];
        get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [string | null, string, number, number, number];
        get_location(): string;
        get_manufacturer(): string | null;
        get_manufacturer_url(): string | null;
        get_model_description(): string | null;
        get_model_name(): string | null;
        get_model_number(): string | null;
        get_model_url(): string | null;
        get_presentation_url(): string | null;
        get_resource_factory(): ResourceFactory;
        get_serial_number(): string | null;
        get_service(type: string): ServiceInfo | null;
        get_udn(): string;
        get_upc(): string | null;
        get_url_base(): GLib.Uri;
        list_device_types(): string[] | null;
        list_devices(): DeviceInfo[] | null;
        list_dlna_capabilities(): string[] | null;
        list_dlna_device_class_identifier(): string[] | null;
        list_service_types(): string[] | null;
        list_services(): ServiceInfo[] | null;
    }
    namespace DeviceProxy {
        interface SignalSignatures extends DeviceInfo.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DeviceInfo.ConstructorProps {}
    }
    class DeviceProxy extends DeviceInfo {
        static $gtype: GObject.GType<DeviceProxy>;
        $signals: DeviceProxy.SignalSignatures;
        constructor(properties?: Partial<DeviceProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ResourceFactory {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ResourceFactory extends GObject.Object {
        static $gtype: GObject.GType<ResourceFactory>;
        $signals: ResourceFactory.SignalSignatures;
        constructor(properties?: Partial<ResourceFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ResourceFactory;
        connect<K extends keyof ResourceFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResourceFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResourceFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): ResourceFactory;
        register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;
        register_resource_type(upnp_type: string, type: GObject.GType): void;
        unregister_resource_proxy_type(upnp_type: string): boolean;
        unregister_resource_type(upnp_type: string): boolean;
    }
    namespace RootDevice {
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::description-dir": (pspec: GObject.ParamSpec) => void;
            "notify::description-path": (pspec: GObject.ParamSpec) => void;
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Device.ConstructorProps, Gio.Initable.ConstructorProps {
            available: boolean;
            description_dir: string;
            descriptionDir: string;
            description_path: string;
            descriptionPath: string;
        }
    }
    class RootDevice extends Device implements Gio.Initable {
        static $gtype: GObject.GType<RootDevice>;
        get available(): boolean;
        set available(val: boolean);
        get description_dir(): string;
        get descriptionDir(): string;
        get description_path(): string;
        get descriptionPath(): string;
        $signals: RootDevice.SignalSignatures;
        constructor(properties?: Partial<RootDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: Context, description_path: string, description_folder: string): RootDevice;
        static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_folder: string): RootDevice;
        connect<K extends keyof RootDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RootDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RootDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RootDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_available(): boolean;
        get_description_dir(): string;
        get_description_document_name(): string;
        get_description_path(): string;
        get_ssdp_resource_group(): GSSDP.ResourceGroup;
        set_available(available: boolean): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Service {
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            "action-invoked": (arg0: ServiceAction) => void;
            "notify-failed": (arg0: GLib.Uri[], arg1: GLib.Error) => void;
            "query-variable": (arg0: string, arg1: unknown) => void;
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
            "action-invoked::root-device": (arg0: ServiceAction) => void;
            "action-invoked::context": (arg0: ServiceAction) => void;
            "action-invoked::document": (arg0: ServiceAction) => void;
            "action-invoked::element": (arg0: ServiceAction) => void;
            "action-invoked::location": (arg0: ServiceAction) => void;
            "action-invoked::service-type": (arg0: ServiceAction) => void;
            "action-invoked::udn": (arg0: ServiceAction) => void;
            "action-invoked::url-base": (arg0: ServiceAction) => void;
            [key: `action-invoked::${string}`]: (arg0: ServiceAction) => void;
            "query-variable::root-device": (arg0: string, arg1: unknown) => void;
            "query-variable::context": (arg0: string, arg1: unknown) => void;
            "query-variable::document": (arg0: string, arg1: unknown) => void;
            "query-variable::element": (arg0: string, arg1: unknown) => void;
            "query-variable::location": (arg0: string, arg1: unknown) => void;
            "query-variable::service-type": (arg0: string, arg1: unknown) => void;
            "query-variable::udn": (arg0: string, arg1: unknown) => void;
            "query-variable::url-base": (arg0: string, arg1: unknown) => void;
            [key: `query-variable::${string}`]: (arg0: string, arg1: unknown) => void;
        }
        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }
    class Service extends ServiceInfo {
        static $gtype: GObject.GType<Service>;
        get root_device(): RootDevice;
        get rootDevice(): RootDevice;
        $signals: Service.SignalSignatures;
        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Service.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_action_invoked(action: ServiceAction): void;
        vfunc_notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;
        vfunc_query_variable(variable: string, value: unknown): void;
        action_invoked(action: ServiceAction): void;
        freeze_notify(): void;
        notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;
        notify_value(variable: string, value: GObject.Value | any): void;
        query_variable(variable: string, value: GObject.Value | any): void;
        thaw_notify(): void;
    }
    namespace ServiceInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            document: XMLDoc;
            element: never;
            location: string;
            service_type: string;
            serviceType: string;
            udn: string;
            url_base: GLib.Uri;
            urlBase: GLib.Uri;
        }
    }
    abstract class ServiceInfo extends GObject.Object {
        static $gtype: GObject.GType<ServiceInfo>;
        get context(): Context;
        set document(val: XMLDoc);
        set element(val: never);
        get location(): string;
        get service_type(): string;
        get serviceType(): string;
        get udn(): string;
        get url_base(): GLib.Uri;
        get urlBase(): GLib.Uri;
        $signals: ServiceInfo.SignalSignatures;
        constructor(properties?: Partial<ServiceInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ServiceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_context(): Context;
        get_control_url(): string;
        get_event_subscription_url(): string;
        get_id(): string;
        get_location(): string;
        get_scpd_url(): string;
        get_service_type(): string;
        get_udn(): string;
        get_url_base(): GLib.Uri;
        introspect_async(cancellable: Gio.Cancellable | null): globalThis.Promise<ServiceIntrospection | null>;
        introspect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        introspect_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ServiceIntrospection | null> | void;
        introspect_finish(res: Gio.AsyncResult): ServiceIntrospection | null;
    }
    namespace ServiceIntrospection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scpd": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            scpd: never;
        }
    }
    class ServiceIntrospection extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<ServiceIntrospection>;
        set scpd(val: never);
        $signals: ServiceIntrospection.SignalSignatures;
        constructor(properties?: Partial<ServiceIntrospection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceIntrospection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceIntrospection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceIntrospection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(action_name: string): ServiceActionInfo | null;
        get_state_variable(variable_name: string): ServiceStateVariableInfo | null;
        list_action_names(): string[];
        list_actions(): ServiceActionInfo[];
        list_state_variable_names(): string[];
        list_state_variables(): ServiceStateVariableInfo[];
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace ServiceProxy {
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            "subscription-lost": (arg0: GLib.Error) => void;
            "notify::subscribed": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            subscribed: boolean;
        }
    }
    class ServiceProxy extends ServiceInfo {
        static $gtype: GObject.GType<ServiceProxy>;
        get subscribed(): boolean;
        set subscribed(val: boolean);
        $signals: ServiceProxy.SignalSignatures;
        constructor(properties?: Partial<ServiceProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ServiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_subscription_lost(reason: GLib.Error): void;
        add_notify(variable: string, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean;
        add_raw_notify(callback: ServiceProxyNotifyCallback): boolean;
        call_action(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): ServiceProxyAction | null;
        call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): globalThis.Promise<ServiceProxyAction | null>;
        call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ServiceProxyAction | null> | void;
        call_action_finish(result: Gio.AsyncResult): ServiceProxyAction | null;
        get_subscribed(): boolean;
        remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;
        remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;
        set_credentials(user: string, password: string): void;
        set_subscribed(subscribed: boolean): void;
    }
    namespace ServiceProxyActionIter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ServiceProxyActionIter extends GObject.Object {
        static $gtype: GObject.GType<ServiceProxyActionIter>;
        $signals: ServiceProxyActionIter.SignalSignatures;
        constructor(properties?: Partial<ServiceProxyActionIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ServiceProxyActionIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxyActionIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceProxyActionIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxyActionIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceProxyActionIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceProxyActionIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_value(): [boolean, unknown];
        get_value_as(type: GObject.GType): [boolean, unknown];
        next(): boolean;
    }
    namespace XMLDoc {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::doc": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            doc: never;
            path: string;
        }
    }
    class XMLDoc extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<XMLDoc>;
        set doc(val: never);
        set path(val: string);
        $signals: XMLDoc.SignalSignatures;
        constructor(properties?: Partial<XMLDoc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](xml_doc: libxml2.Doc): XMLDoc;
        static new_from_path(path: string): XMLDoc;
        connect<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLDoc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLDoc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XMLDoc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XMLDoc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_doc(): libxml2.Doc;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    type AclInterface = typeof Acl;
    type ContextClass = typeof Context;
    type ContextFilterClass = typeof ContextFilter;
    type ContextManagerClass = typeof ContextManager;
    type ControlPointClass = typeof ControlPoint;
    type DeviceClass = typeof Device;
    type DeviceInfoClass = typeof DeviceInfo;
    type DeviceProxyClass = typeof DeviceProxy;
    type ResourceFactoryClass = typeof ResourceFactory;
    type RootDeviceClass = typeof RootDevice;
    abstract class ServiceAction {
        static $gtype: GObject.GType<ServiceAction>;
        get_argument_count(): number;
        get_value(argument: string, type: GObject.GType): unknown;
        get_locales(): string[];
        get_message(): Soup.ServerMessage;
        get_name(): string;
        get_values(arg_names: string[], arg_types: GObject.GType[]): unknown[];
        return_error(error_code: number, error_description: string): void;
        return_success(): void;
        set_value(argument: string, value: GObject.Value | any): void;
        set_values(arg_names: string[], arg_values: (GObject.Value | any)[]): void;
    }
    class ServiceActionArgInfo {
        static $gtype: GObject.GType<ServiceActionArgInfo>;
        name: string;
        direction: ServiceActionArgDirection;
        related_state_variable: string;
        retval: boolean;
    }
    class ServiceActionInfo {
        static $gtype: GObject.GType<ServiceActionInfo>;
        name: string;
        "arguments": ServiceActionArgInfo[];
    }
    type ServiceClass = typeof Service;
    type ServiceInfoClass = typeof ServiceInfo;
    type ServiceIntrospectionClass = typeof ServiceIntrospection;
    class ServiceProxyAction {
        static $gtype: GObject.GType<ServiceProxyAction>;
        constructor(action: string, ___: any[]);
        static new_from_list(action: string, in_names: string[], in_values: (GObject.Value | any)[]): ServiceProxyAction;
        static new_plain(action: string): ServiceProxyAction;
        add_argument(name: string, value: GObject.Value | any): ServiceProxyAction;
        get_result_hash(out_hash: { [key: string]: GObject.Value }): [boolean, { [key: string]: GObject.Value }];
        get_result_list(out_names: string[], out_types: GObject.GType[]): [boolean, unknown[]];
        iterate(): ServiceProxyActionIter | null;
        ref(): ServiceProxyAction | null;
        set(key: string, value: GObject.Value | any): boolean;
        unref(): void;
    }
    type ServiceProxyActionIterClass = typeof ServiceProxyActionIter;
    type ServiceProxyClass = typeof ServiceProxy;
    class ServiceStateVariableInfo {
        static $gtype: GObject.GType<ServiceStateVariableInfo>;
        name: string;
        send_events: boolean;
        is_numeric: boolean;
        type: GObject.GType;
        allowed_values: string[];
    }
    type XMLDocClass = typeof XMLDoc;
    namespace Acl {
        interface Interface {
            vfunc_can_sync(): boolean;
            vfunc_is_allowed(device: Device | null, service: Service | null, path: string, address: string, agent: string | null): boolean;
            vfunc_is_allowed_async(device: Device | null, service: Service | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface AclNamespace {
        $gtype: GObject.GType<Acl>;
        prototype: Acl;
    }
    interface Acl extends GObject.Object, Acl.Interface {
        can_sync(): boolean;
        is_allowed(device: Device | null, service: Service | null, path: string, address: string, agent: string | null): boolean;
        is_allowed_async(device: Device | null, service: Service | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        is_allowed_async(device: Device | null, service: Service | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        is_allowed_async(device: Device | null, service: Service | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        is_allowed_finish(res: Gio.AsyncResult): boolean;
    }
    export const Acl: AclNamespace & {
        new (): Acl; 
    };
    const __name__: string;
    const __version__: string;
}
export default GUPnP;
}
declare module 'gi://GUPnP' {
    import GUPnP16 from 'gi://GUPnP?version=1.6';
    export default GUPnP16;
}
