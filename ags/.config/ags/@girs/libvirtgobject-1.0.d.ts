declare module 'gi://LibvirtGObject?version=1.0' {
import type LibvirtGLib from 'gi://LibvirtGLib?version=1.0';
import type GLib from 'gi://GLib?version=2.0';
import type LibvirtGConfig from 'gi://LibvirtGConfig?version=1.0';
import type libxml2 from 'gi://libxml2?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace LibvirtGObject {
    export namespace DomainDeleteFlags {
        export const $gtype: GObject.GType<DomainDeleteFlags>;
    }
    enum DomainDeleteFlags {
        NONE,
        SAVED_STATE,
        SNAPSHOTS_METADATA,
        REMOVE_NVRAM,
        KEEP_NVRAM,
    }
    export namespace DomainRebootFlags {
        export const $gtype: GObject.GType<DomainRebootFlags>;
    }
    enum DomainRebootFlags {
        NONE,
        ACPI_POWER_BTN,
        GUEST_AGENT,
    }
    export namespace DomainShutdownFlags {
        export const $gtype: GObject.GType<DomainShutdownFlags>;
    }
    enum DomainShutdownFlags {
        NONE,
        ACPI_POWER_BTN,
        GUEST_AGENT,
    }
    export namespace DomainSnapshotCreateFlags {
        export const $gtype: GObject.GType<DomainSnapshotCreateFlags>;
    }
    enum DomainSnapshotCreateFlags {
        NONE,
        REDEFINE,
        CURRENT,
        NO_METADATA,
        HALT,
        DISK_ONLY,
        REUSE_EXT,
        QUIESCE,
        ATOMIC,
    }
    export namespace DomainSnapshotDeleteFlags {
        export const $gtype: GObject.GType<DomainSnapshotDeleteFlags>;
    }
    enum DomainSnapshotDeleteFlags {
        CHILDREN,
        METADATA_ONLY,
        CHILDREN_ONLY,
    }
    export namespace DomainSnapshotListFlags {
        export const $gtype: GObject.GType<DomainSnapshotListFlags>;
    }
    enum DomainSnapshotListFlags {
        ALL,
        DESCENDANTS,
        ROOTS,
        METADATA,
        LEAVES,
        NO_LEAVES,
        NO_METADATA,
        INACTIVE,
        ACTIVE,
        DISK_ONLY,
        INTERNAL,
        EXTERNAL,
    }
    export namespace DomainSnapshotRevertFlags {
        export const $gtype: GObject.GType<DomainSnapshotRevertFlags>;
    }
    enum DomainSnapshotRevertFlags {
        RUNNING,
        PAUSED,
        FORCE,
    }
    export namespace DomainState {
        export const $gtype: GObject.GType<DomainState>;
    }
    enum DomainState {
        NONE,
        RUNNING,
        BLOCKED,
        PAUSED,
        SHUTDOWN,
        SHUTOFF,
        CRASHED,
        PMSUSPENDED,
    }
    export namespace DomainUpdateDeviceFlags {
        export const $gtype: GObject.GType<DomainUpdateDeviceFlags>;
    }
    enum DomainUpdateDeviceFlags {
        CURRENT,
        LIVE,
        CONFIG,
    }
    export namespace DomainXMLFlags {
        export const $gtype: GObject.GType<DomainXMLFlags>;
    }
    enum DomainXMLFlags {
        NONE,
        SECURE,
        INACTIVE,
        UPDATE_CPU,
    }
    export namespace IPAddrType {
        export const $gtype: GObject.GType<IPAddrType>;
    }
    enum IPAddrType {
        IPV4,
        IPV6,
    }
    export namespace StoragePoolState {
        export const $gtype: GObject.GType<StoragePoolState>;
    }
    enum StoragePoolState {
        INACTIVE,
        BUILDING,
        RUNNING,
        DEGRADED,
        INACCESSIBLE,
    }
    export namespace StorageVolResizeFlags {
        export const $gtype: GObject.GType<StorageVolResizeFlags>;
    }
    enum StorageVolResizeFlags {
        NONE,
        ALLOCATE,
        DELTA,
        SHRINK,
    }
    export namespace StorageVolType {
        export const $gtype: GObject.GType<StorageVolType>;
    }
    enum StorageVolType {
        FILE,
        BLOCK,
        DIR,
    }
    function init_object(argv: string[] | null): string[] | null;
    function init_object_check(argv: string[] | null): [boolean, string[] | null];
    interface StreamIOFunc {
        (stream: Stream, cond: StreamIOCondition, opaque: null): boolean;
    }
    interface StreamSinkFunc {
        (stream: Stream): number;
    }
    interface StreamSourceFunc {
        (stream: Stream): number;
    }
    type ConnectionHandle = object | null;
    type DomainHandle = object | null;
    type DomainSnapshotHandle = object | null;
    type InterfaceHandle = object | null;
    type NetworkFilterHandle = object | null;
    type NetworkHandle = object | null;
    type NodeDeviceHandle = object | null;
    type SecretHandle = object | null;
    type StoragePoolHandle = object | null;
    type StorageVolHandle = object | null;
    type StreamHandle = object | null;
    export namespace DomainStartFlags {
        export const $gtype: GObject.GType<DomainStartFlags>;
    }
    enum DomainStartFlags {
        NONE,
        PAUSED,
        AUTODESTROY,
        BYPASS_CACHE,
        FORCE_BOOT,
    }
    export namespace StreamIOCondition {
        export const $gtype: GObject.GType<StreamIOCondition>;
    }
    enum StreamIOCondition {
        READABLE,
        WRITABLE,
        HANGUP,
        ERROR,
    }
    namespace Connection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "connection-closed": () => void;
            "connection-opened": () => void;
            "domain-added": (arg0: Domain) => void;
            "domain-removed": (arg0: Domain) => void;
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: ConnectionHandle;
            uri: string;
        }
    }
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;
        get handle(): ConnectionHandle;
        get uri(): string;
        $signals: Connection.SignalSignatures;
        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](uri: string): Connection;
        connect<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Connection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_connection_closed(): void;
        vfunc_connection_opened(): void;
        vfunc_domain_added(dom: Domain): void;
        vfunc_domain_removed(dom: Domain): void;
        close(): void;
        create_domain(conf: LibvirtGConfig.Domain): Domain;
        create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool;
        fetch_domains(cancellable: Gio.Cancellable | null): boolean;
        fetch_domains_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        fetch_domains_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_domains_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_domains_finish(result: Gio.AsyncResult): boolean;
        fetch_interfaces(cancellable: Gio.Cancellable | null): boolean;
        fetch_interfaces_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        fetch_interfaces_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_interfaces_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_interfaces_finish(result: Gio.AsyncResult): boolean;
        fetch_networks(cancellable: Gio.Cancellable | null): boolean;
        fetch_networks_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        fetch_networks_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_networks_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_networks_finish(result: Gio.AsyncResult): boolean;
        fetch_storage_pools(cancellable: Gio.Cancellable | null): boolean;
        fetch_storage_pools_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        fetch_storage_pools_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_storage_pools_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_storage_pools_finish(result: Gio.AsyncResult): boolean;
        find_domain_by_id(id: number): Domain;
        find_domain_by_name(name: string): Domain;
        find_interface_by_mac(macaddr: string): Interface;
        find_network_by_name(name: string): Network;
        find_storage_pool_by_name(name: string): StoragePool;
        get_capabilities(): LibvirtGConfig.Capabilities;
        get_capabilities_async(cancellable: Gio.Cancellable | null): globalThis.Promise<LibvirtGConfig.Capabilities>;
        get_capabilities_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_capabilities_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<LibvirtGConfig.Capabilities> | void;
        get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities;
        get_domain(uuid: string): Domain;
        get_domain_capabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities;
        get_domain_capabilities_async(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<LibvirtGConfig.DomainCapabilities>;
        get_domain_capabilities_async(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_domain_capabilities_async(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<LibvirtGConfig.DomainCapabilities> | void;
        get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities;
        get_domains(): Domain[];
        get_hypervisor_name(): string;
        get_interface(name: string): Interface;
        get_interfaces(): Interface[];
        get_network(uuid: string): Network;
        get_networks(): Network[];
        get_node_info(): NodeInfo;
        get_storage_pool(uuid: string): StoragePool;
        get_storage_pools(): StoragePool[];
        get_stream(flags: number): Stream;
        get_uri(): string;
        get_version(): number;
        is_open(): boolean;
        is_read_only(): boolean;
        open(cancellable: Gio.Cancellable | null): boolean;
        open_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        open_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        open_finish(result: Gio.AsyncResult): boolean;
        open_read_only(cancellable: Gio.Cancellable | null): boolean;
        open_read_only_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        open_read_only_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_read_only_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        open_read_only_finish(result: Gio.AsyncResult): boolean;
        restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        restore_domain_from_file_finish(result: Gio.AsyncResult): boolean;
        start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain;
    }
    namespace Domain {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            pmsuspended: () => void;
            resumed: () => void;
            started: () => void;
            stopped: () => void;
            suspended: () => void;
            updated: () => void;
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::persistent": (pspec: GObject.ParamSpec) => void;
            "pmsuspended::handle": () => void;
            "pmsuspended::persistent": () => void;
            [key: `pmsuspended::${string}`]: () => void;
            "resumed::handle": () => void;
            "resumed::persistent": () => void;
            [key: `resumed::${string}`]: () => void;
            "started::handle": () => void;
            "started::persistent": () => void;
            [key: `started::${string}`]: () => void;
            "stopped::handle": () => void;
            "stopped::persistent": () => void;
            [key: `stopped::${string}`]: () => void;
            "suspended::handle": () => void;
            "suspended::persistent": () => void;
            [key: `suspended::${string}`]: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainHandle;
            persistent: boolean;
        }
    }
    class Domain extends GObject.Object {
        static $gtype: GObject.GType<Domain>;
        get handle(): DomainHandle;
        get persistent(): boolean;
        $signals: Domain.SignalSignatures;
        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Domain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Domain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Domain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Domain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_pmsuspended(): void;
        vfunc_resumed(): void;
        vfunc_started(): void;
        vfunc_stopped(): void;
        vfunc_suspended(): void;
        vfunc_updated(): void;
        create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot;
        create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<DomainSnapshot>;
        create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DomainSnapshot> | void;
        create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot;
        ["delete"](flags: number): boolean;
        fetch_snapshots(list_flags: number, cancellable: Gio.Cancellable | null): boolean;
        fetch_snapshots_async(list_flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        fetch_snapshots_async(list_flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_snapshots_async(list_flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_snapshots_finish(res: Gio.AsyncResult): boolean;
        get_config(flags: number): LibvirtGConfig.Domain;
        get_devices(): DomainDevice[];
        get_has_current_snapshot(flags: number): [boolean, boolean];
        get_id(): number;
        get_info(): DomainInfo;
        get_info_async(cancellable: Gio.Cancellable | null): globalThis.Promise<DomainInfo>;
        get_info_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_info_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DomainInfo> | void;
        get_info_finish(result: Gio.AsyncResult): DomainInfo;
        get_name(): string;
        get_persistent(): boolean;
        get_saved(): boolean;
        get_snapshots(): DomainSnapshot[];
        get_uuid(): string;
        open_console(stream: Stream, devname: string | null, flags: number): boolean;
        open_graphics(idx: number, fd: number, flags: number): boolean;
        open_graphics_fd(idx: number, flags: number): number;
        reboot(flags: number): boolean;
        resume(): boolean;
        resume_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        resume_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resume_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        resume_finish(result: Gio.AsyncResult): boolean;
        save(flags: number): boolean;
        save_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        save_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        save_finish(result: Gio.AsyncResult): boolean;
        save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        screenshot(stream: Stream, monitor_id: number, flags: number): string;
        set_config(conf: LibvirtGConfig.Domain): boolean;
        set_time(date_time: GLib.DateTime | null, flags: number): boolean;
        set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_time_finish(result: Gio.AsyncResult): boolean;
        shutdown(flags: number): boolean;
        start(flags: number): boolean;
        start_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(flags: number): boolean;
        suspend(): boolean;
        update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean;
        wakeup(flags: number): boolean;
        wakeup_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        wakeup_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        wakeup_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        wakeup_finish(result: Gio.AsyncResult): boolean;
    }
    namespace DomainDevice {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: LibvirtGConfig.DomainDevice;
            domain: Domain;
        }
    }
    abstract class DomainDevice extends GObject.Object {
        static $gtype: GObject.GType<DomainDevice>;
        get config(): LibvirtGConfig.DomainDevice;
        get domain(): Domain;
        $signals: DomainDevice.SignalSignatures;
        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_config(): LibvirtGConfig.DomainDevice;
        get_domain(): Domain;
    }
    namespace DomainDisk {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;
        $signals: DomainDisk.SignalSignatures;
        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainDisk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_stats(): DomainDiskStats;
        resize(size: bigint | number, flags: number): boolean;
    }
    namespace DomainInterface {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainInterface extends DomainDevice {
        static $gtype: GObject.GType<DomainInterface>;
        $signals: DomainInterface.SignalSignatures;
        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainInterface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_stats(): DomainInterfaceStats;
    }
    namespace DomainSnapshot {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainSnapshotHandle;
        }
    }
    class DomainSnapshot extends GObject.Object {
        static $gtype: GObject.GType<DomainSnapshot>;
        get handle(): DomainSnapshotHandle;
        $signals: DomainSnapshot.SignalSignatures;
        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSnapshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](flags: number): boolean;
        delete_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(res: Gio.AsyncResult): boolean;
        get_config(flags: number): LibvirtGConfig.DomainSnapshot;
        get_is_current(flags: number): [boolean, boolean];
        get_name(): string;
        revert_to(flags: number): boolean;
        revert_to_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        revert_to_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        revert_to_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        revert_to_finish(result: Gio.AsyncResult): boolean;
        set_config(conf: LibvirtGConfig.DomainSnapshot): boolean;
    }
    namespace Interface {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: InterfaceHandle;
        }
    }
    class Interface extends GObject.Object {
        static $gtype: GObject.GType<Interface>;
        get handle(): InterfaceHandle;
        $signals: Interface.SignalSignatures;
        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Interface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Interface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Interface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Interface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_config(flags: number): LibvirtGConfig.Interface;
        get_mac(): string;
        get_name(): string;
    }
    namespace Manager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "connection-added": (arg0: Connection) => void;
            "connection-removed": (arg0: Connection) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;
        $signals: Manager.SignalSignatures;
        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Manager;
        connect<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Manager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_connection_added(conn: Connection): void;
        vfunc_connection_removed(conn: Connection): void;
        add_connection(conn: Connection): void;
        find_connection_by_uri(uri: string): Connection | null;
        get_connections(): Connection[];
        remove_connection(conn: Connection): void;
    }
    namespace Network {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkHandle;
        }
    }
    class Network extends GObject.Object {
        static $gtype: GObject.GType<Network>;
        get handle(): NetworkHandle;
        $signals: Network.SignalSignatures;
        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Network.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Network.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Network.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Network.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_started(): void;
        vfunc_stopped(): void;
        get_config(flags: number): LibvirtGConfig.Network;
        get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[];
        get_name(): string;
        get_uuid(): string;
    }
    namespace NetworkDHCPLease {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: never;
        }
    }
    class NetworkDHCPLease extends GObject.Object {
        static $gtype: GObject.GType<NetworkDHCPLease>;
        get handle(): null;
        $signals: NetworkDHCPLease.SignalSignatures;
        constructor(properties?: Partial<NetworkDHCPLease.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NetworkDHCPLease.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkDHCPLease.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkDHCPLease.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkDHCPLease.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkDHCPLease.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkDHCPLease.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_client_id(): string;
        get_expiry_time(): number;
        get_hostname(): string;
        get_iaid(): string;
        get_iface(): string;
        get_ip(): string;
        get_ip_type(): number;
        get_mac(): string;
        get_prefix(): number;
    }
    namespace NetworkFilter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkFilterHandle;
        }
    }
    class NetworkFilter extends GObject.Object {
        static $gtype: GObject.GType<NetworkFilter>;
        get handle(): NetworkFilterHandle;
        $signals: NetworkFilter.SignalSignatures;
        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NetworkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_config(flags: number): LibvirtGConfig.NetworkFilter;
        get_name(): string;
        get_uuid(): string;
    }
    namespace NodeDevice {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NodeDeviceHandle;
        }
    }
    class NodeDevice extends GObject.Object {
        static $gtype: GObject.GType<NodeDevice>;
        get handle(): NodeDeviceHandle;
        $signals: NodeDevice.SignalSignatures;
        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NodeDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NodeDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NodeDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NodeDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_config(flags: number): LibvirtGConfig.NodeDevice;
        get_name(): string;
    }
    namespace Secret {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: SecretHandle;
        }
    }
    class Secret extends GObject.Object {
        static $gtype: GObject.GType<Secret>;
        get handle(): SecretHandle;
        $signals: Secret.SignalSignatures;
        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Secret.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Secret.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Secret.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Secret.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_config(flags: number): LibvirtGConfig.Secret;
        get_name(): string;
        get_uuid(): string;
    }
    namespace StoragePool {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StoragePoolHandle;
        }
    }
    class StoragePool extends GObject.Object {
        static $gtype: GObject.GType<StoragePool>;
        get handle(): StoragePoolHandle;
        $signals: StoragePool.SignalSignatures;
        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StoragePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StoragePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StoragePool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StoragePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        build(flags: number): boolean;
        build_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        build_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        build_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        build_finish(result: Gio.AsyncResult): boolean;
        create_volume(conf: LibvirtGConfig.StorageVol): StorageVol;
        ["delete"](flags: number): boolean;
        delete_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(result: Gio.AsyncResult): boolean;
        get_active(): boolean;
        get_autostart(): boolean;
        get_config(flags: number): LibvirtGConfig.StoragePool;
        get_info(): StoragePoolInfo;
        get_name(): string;
        get_persistent(): boolean;
        get_uuid(): string;
        get_volume(name: string): StorageVol;
        get_volumes(): StorageVol[];
        refresh(cancellable: Gio.Cancellable | null): boolean;
        refresh_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        refresh_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        refresh_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        refresh_finish(result: Gio.AsyncResult): boolean;
        set_autostart(autostart: boolean): boolean;
        start(flags: number): boolean;
        start_async(flags: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_async(flags: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(): boolean;
        stop_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        stop_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        stop_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        stop_finish(result: Gio.AsyncResult): boolean;
        undefine(): boolean;
        undefine_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        undefine_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        undefine_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        undefine_finish(result: Gio.AsyncResult): boolean;
    }
    namespace StorageVol {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StorageVolHandle;
            pool: StoragePool;
        }
    }
    class StorageVol extends GObject.Object {
        static $gtype: GObject.GType<StorageVol>;
        get handle(): StorageVolHandle;
        get pool(): StoragePool;
        $signals: StorageVol.SignalSignatures;
        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StorageVol.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StorageVol.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StorageVol.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StorageVol.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](flags: number): boolean;
        download(stream: Stream, offset: bigint | number, length: bigint | number, flags: number): boolean;
        get_config(flags: number): LibvirtGConfig.StorageVol;
        get_info(): StorageVolInfo;
        get_name(): string;
        get_path(): string;
        resize(capacity: bigint | number, flags: StorageVolResizeFlags): boolean;
        upload(stream: Stream, offset: bigint | number, length: bigint | number, flags: number): boolean;
    }
    namespace Stream {
        interface SignalSignatures extends Gio.IOStream.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::closed": (pspec: GObject.ParamSpec) => void;
            "notify::input-stream": (pspec: GObject.ParamSpec) => void;
            "notify::output-stream": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.IOStream.ConstructorProps {
            handle: StreamHandle;
        }
    }
    class Stream extends Gio.IOStream {
        static $gtype: GObject.GType<Stream>;
        get handle(): StreamHandle;
        $signals: Stream.SignalSignatures;
        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Stream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_watch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number;
        receive(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null): number;
        receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number;
        send(buffer: string, size: bigint | number, cancellable: Gio.Cancellable | null): number;
        send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number;
    }
    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }
    type DomainClass = typeof Domain;
    type DomainDeviceClass = typeof DomainDevice;
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;
    }
    type DomainDiskClass = typeof DomainDisk;
    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;
    }
    class DomainDiskStats {
        static $gtype: GObject.GType<DomainDiskStats>;
        rd_req: number;
        rd_bytes: number;
        wr_req: number;
        wr_bytes: number;
        errs: number;
    }
    class DomainInfo {
        static $gtype: GObject.GType<DomainInfo>;
        state: DomainState;
        maxMem: number;
        memory: number;
        nrVirtCpu: number;
        cpuTime: number;
    }
    type DomainInterfaceClass = typeof DomainInterface;
    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;
    }
    class DomainInterfaceStats {
        static $gtype: GObject.GType<DomainInterfaceStats>;
        rx_bytes: number;
        rx_packets: number;
        rx_errs: number;
        rx_drop: number;
        tx_bytes: number;
        tx_packets: number;
        tx_errs: number;
        tx_drop: number;
    }
    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;
    }
    type DomainSnapshotClass = typeof DomainSnapshot;
    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;
    }
    type InterfaceClass = typeof Interface;
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;
    }
    type ManagerClass = typeof Manager;
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;
    }
    type NetworkClass = typeof Network;
    type NetworkDHCPLeaseClass = typeof NetworkDHCPLease;
    abstract class NetworkDHCPLeasePrivate {
        static $gtype: GObject.GType<NetworkDHCPLeasePrivate>;
    }
    type NetworkFilterClass = typeof NetworkFilter;
    abstract class NetworkFilterPrivate {
        static $gtype: GObject.GType<NetworkFilterPrivate>;
    }
    abstract class NetworkPrivate {
        static $gtype: GObject.GType<NetworkPrivate>;
    }
    type NodeDeviceClass = typeof NodeDevice;
    abstract class NodeDevicePrivate {
        static $gtype: GObject.GType<NodeDevicePrivate>;
    }
    class NodeInfo {
        static $gtype: GObject.GType<NodeInfo>;
        model: number[];
        memory: number;
        cpus: number;
        mhz: number;
        nodes: number;
        sockets: number;
        cores: number;
        threads: number;
    }
    type SecretClass = typeof Secret;
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;
    }
    type StoragePoolClass = typeof StoragePool;
    class StoragePoolInfo {
        static $gtype: GObject.GType<StoragePoolInfo>;
        state: StoragePoolState;
        capacity: number;
        allocation: number;
        available: number;
    }
    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;
    }
    type StorageVolClass = typeof StorageVol;
    class StorageVolInfo {
        static $gtype: GObject.GType<StorageVolInfo>;
        type: StorageVolType;
        capacity: number;
        allocation: number;
    }
    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;
    }
    type StreamClass = typeof Stream;
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default LibvirtGObject;
}
declare module 'gi://LibvirtGObject' {
    import LibvirtGObject10 from 'gi://LibvirtGObject?version=1.0';
    export default LibvirtGObject10;
}
