declare module 'gi://GUdev?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace GUdev {
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }
    enum DeviceType {
        NONE,
        BLOCK,
        CHAR,
    }
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            uevent: (arg0: string, arg1: Device) => void;
            "notify::subsystems": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            subsystems: string[];
        }
    }
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        get subsystems(): string[];
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](subsystems: string[] | null): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_uevent(action: string, device: Device): void;
        query_by_device_file(device_file: string): Device | null;
        query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null;
        query_by_subsystem(subsystem: string | null): Device[] | null;
        query_by_subsystem_and_name(subsystem: string, name: string): Device | null;
        query_by_sysfs_path(sysfs_path: string): Device | null;
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(): string;
        get_current_tags(): string[];
        get_device_file(): string | null;
        get_device_file_symlinks(): string[];
        get_device_number(): DeviceNumber;
        get_device_type(): DeviceType;
        get_devtype(): string;
        get_driver(): string | null;
        get_is_initialized(): boolean;
        get_name(): string;
        get_number(): string;
        get_parent(): Device | null;
        get_parent_with_subsystem(subsystem: string, devtype: string | null): Device | null;
        get_property(key: string): string | null;
        get_property(...args: never[]): any;
        get_property_as_boolean(key: string): boolean;
        get_property_as_double(key: string): number;
        get_property_as_int(key: string): number;
        get_property_as_strv(key: string): string[] | null;
        get_property_as_uint64(key: string): number;
        get_property_keys(): string[];
        get_seqnum(): number;
        get_subsystem(): string;
        get_sysfs_attr(name: string): string | null;
        get_sysfs_attr_as_boolean(name: string): boolean;
        get_sysfs_attr_as_boolean_uncached(name: string): boolean;
        get_sysfs_attr_as_double(name: string): number;
        get_sysfs_attr_as_double_uncached(name: string): number;
        get_sysfs_attr_as_int(name: string): number;
        get_sysfs_attr_as_int_uncached(name: string): number;
        get_sysfs_attr_as_strv(name: string): string[] | null;
        get_sysfs_attr_as_strv_uncached(name: string): string[] | null;
        get_sysfs_attr_as_uint64(name: string): number;
        get_sysfs_attr_as_uint64_uncached(name: string): number;
        get_sysfs_attr_keys(): string[];
        get_sysfs_attr_uncached(name: string): string | null;
        get_sysfs_path(): string;
        get_tags(): string[];
        get_usec_since_initialized(): number;
        has_property(key: string): boolean;
        has_sysfs_attr(key: string): boolean;
        has_sysfs_attr_uncached(key: string): boolean;
    }
    namespace Enumerator {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::client": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: Client;
        }
    }
    class Enumerator extends GObject.Object {
        static $gtype: GObject.GType<Enumerator>;
        get client(): Client;
        $signals: Enumerator.SignalSignatures;
        constructor(properties?: Partial<Enumerator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](client: Client): Enumerator;
        connect<K extends keyof Enumerator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Enumerator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Enumerator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Enumerator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Enumerator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Enumerator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_match_is_initialized(): Enumerator;
        add_match_name(name: string): Enumerator;
        add_match_property(name: string, value: string): Enumerator;
        add_match_subsystem(subsystem: string): Enumerator;
        add_match_sysfs_attr(name: string, value: string): Enumerator;
        add_match_tag(tag: string): Enumerator;
        add_nomatch_subsystem(subsystem: string): Enumerator;
        add_nomatch_sysfs_attr(name: string, value: string): Enumerator;
        add_sysfs_path(sysfs_path: string): Enumerator;
        execute(): Device[];
    }
    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type DeviceClass = typeof Device;
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    type EnumeratorClass = typeof Enumerator;
    abstract class EnumeratorPrivate {
        static $gtype: GObject.GType<EnumeratorPrivate>;
    }
    type DeviceNumber = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default GUdev;
}
declare module 'gi://GUdev' {
    import GUdev10 from 'gi://GUdev?version=1.0';
    export default GUdev10;
}
