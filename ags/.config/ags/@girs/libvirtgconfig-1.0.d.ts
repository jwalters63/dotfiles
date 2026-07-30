declare module 'gi://LibvirtGConfig?version=1.0' {
import type libxml2 from 'gi://libxml2?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace LibvirtGConfig {
    export namespace DomainAudioBackend {
        export const $gtype: GObject.GType<DomainAudioBackend>;
    }
    enum DomainAudioBackend {
        NONE,
        ALSA,
        COREAUDIO,
        JACK,
        OSS,
        PULSEAUDIO,
        SDL,
        SPICE,
        FILE,
    }
    export namespace DomainChannelTargetType {
        export const $gtype: GObject.GType<DomainChannelTargetType>;
    }
    enum DomainChannelTargetType {
        GUESTFWD,
        VIRTIO,
        SPICEPORT,
    }
    export namespace DomainClockOffset {
        export const $gtype: GObject.GType<DomainClockOffset>;
    }
    enum DomainClockOffset {
        UTC,
        LOCALTIME,
        TIMEZONE,
        VARIABLE,
    }
    export namespace DomainConsoleTargetType {
        export const $gtype: GObject.GType<DomainConsoleTargetType>;
    }
    enum DomainConsoleTargetType {
        XEN,
        SERIAL,
        UML,
        VIRTIO,
        LXC,
        OPENVZ,
    }
    export namespace DomainControllerUsbModel {
        export const $gtype: GObject.GType<DomainControllerUsbModel>;
    }
    enum DomainControllerUsbModel {
        PIIX3_UHCI,
        PIIX4_UHCI,
        EHCI,
        ICH9_EHCI1,
        ICH9_UHCI1,
        ICH9_UHCI2,
        ICH9_UHCI3,
        VT82C686B_UHCI,
        PCI_OHCI,
        QEMU_XHCI,
    }
    export namespace DomainCpuFeaturePolicy {
        export const $gtype: GObject.GType<DomainCpuFeaturePolicy>;
    }
    enum DomainCpuFeaturePolicy {
        FORCE,
        REQUIRE,
        OPTIONAL,
        DISABLE,
        FORBID,
    }
    export namespace DomainCpuMatchPolicy {
        export const $gtype: GObject.GType<DomainCpuMatchPolicy>;
    }
    enum DomainCpuMatchPolicy {
        MINIMUM,
        EXACT,
        STRICT,
    }
    export namespace DomainCpuMode {
        export const $gtype: GObject.GType<DomainCpuMode>;
    }
    enum DomainCpuMode {
        CUSTOM,
        HOST_MODEL,
        HOST_PASSTHROUGH,
    }
    export namespace DomainDiskBus {
        export const $gtype: GObject.GType<DomainDiskBus>;
    }
    enum DomainDiskBus {
        IDE,
        FDC,
        SCSI,
        VIRTIO,
        XEN,
        USB,
        UML,
        SATA,
    }
    export namespace DomainDiskCacheType {
        export const $gtype: GObject.GType<DomainDiskCacheType>;
    }
    enum DomainDiskCacheType {
        DEFAULT,
        NONE,
        WRITETHROUGH,
        WRITEBACK,
        DIRECTSYNC,
        UNSAFE,
    }
    export namespace DomainDiskDriverDiscard {
        export const $gtype: GObject.GType<DomainDiskDriverDiscard>;
    }
    enum DomainDiskDriverDiscard {
        UNMAP,
        IGNORE,
    }
    export namespace DomainDiskDriverErrorPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverErrorPolicy>;
    }
    enum DomainDiskDriverErrorPolicy {
        STOP,
        REPORT,
        IGNORE,
        ENOSPACE,
    }
    export namespace DomainDiskDriverIoPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverIoPolicy>;
    }
    enum DomainDiskDriverIoPolicy {
        THREADS,
        NATIVE,
    }
    export namespace DomainDiskFormat {
        export const $gtype: GObject.GType<DomainDiskFormat>;
    }
    enum DomainDiskFormat {
        RAW,
        DIR,
        BOCHS,
        CLOOP,
        COW,
        DMG,
        ISO,
        QCOW,
        QCOW2,
        QED,
        VMDK,
        VPC,
        FAT,
        VHD,
    }
    export namespace DomainDiskGuestDeviceType {
        export const $gtype: GObject.GType<DomainDiskGuestDeviceType>;
    }
    enum DomainDiskGuestDeviceType {
        DISK,
        FLOPPY,
        CDROM,
    }
    export namespace DomainDiskSnapshotType {
        export const $gtype: GObject.GType<DomainDiskSnapshotType>;
    }
    enum DomainDiskSnapshotType {
        NO,
        INTERNAL,
        EXTERNAL,
    }
    export namespace DomainDiskStartupPolicy {
        export const $gtype: GObject.GType<DomainDiskStartupPolicy>;
    }
    enum DomainDiskStartupPolicy {
        MANDATORY,
        REQUISITE,
        OPTIONAL,
    }
    export namespace DomainDiskType {
        export const $gtype: GObject.GType<DomainDiskType>;
    }
    enum DomainDiskType {
        FILE,
        BLOCK,
        DIR,
        NETWORK,
    }
    export namespace DomainFilesysAccessType {
        export const $gtype: GObject.GType<DomainFilesysAccessType>;
    }
    enum DomainFilesysAccessType {
        PASSTHROUGH,
        MAPPED,
        SQUASH,
    }
    export namespace DomainFilesysDriverType {
        export const $gtype: GObject.GType<DomainFilesysDriverType>;
    }
    enum DomainFilesysDriverType {
        DEFAULT,
        PATH,
        HANDLE,
        LOOP,
        NBD,
        PLOOP,
    }
    export namespace DomainFilesysType {
        export const $gtype: GObject.GType<DomainFilesysType>;
    }
    enum DomainFilesysType {
        MOUNT,
        BLOCK,
        FILE,
        TEMPLATE,
        RAM,
        BIND,
    }
    export namespace DomainGraphicsSpiceImageCompression {
        export const $gtype: GObject.GType<DomainGraphicsSpiceImageCompression>;
    }
    enum DomainGraphicsSpiceImageCompression {
        AUTO_GLZ,
        AUTO_LZ,
        QUIC,
        GLZ,
        LZ,
        OFF,
    }
    export namespace DomainInputBus {
        export const $gtype: GObject.GType<DomainInputBus>;
    }
    enum DomainInputBus {
        PS2,
        USB,
        XEN,
    }
    export namespace DomainInputDeviceType {
        export const $gtype: GObject.GType<DomainInputDeviceType>;
    }
    enum DomainInputDeviceType {
        MOUSE,
        TABLET,
        KEYBOARD,
    }
    export namespace DomainInterfaceLinkState {
        export const $gtype: GObject.GType<DomainInterfaceLinkState>;
    }
    enum DomainInterfaceLinkState {
        DEFAULT,
        UP,
        DOWN,
    }
    export namespace DomainLifecycleAction {
        export const $gtype: GObject.GType<DomainLifecycleAction>;
    }
    enum DomainLifecycleAction {
        DESTROY,
        RESTART,
        PRESERVE,
        RENAME_RESTART,
        COREDUMP_DESTROY,
        COREDUMP_RESTART,
    }
    export namespace DomainLifecycleEvent {
        export const $gtype: GObject.GType<DomainLifecycleEvent>;
    }
    enum DomainLifecycleEvent {
        ON_POWEROFF,
        ON_REBOOT,
        ON_CRASH,
    }
    export namespace DomainMemballoonModel {
        export const $gtype: GObject.GType<DomainMemballoonModel>;
    }
    enum DomainMemballoonModel {
        NONE,
        VIRTIO,
    }
    export namespace DomainOsBootDevice {
        export const $gtype: GObject.GType<DomainOsBootDevice>;
    }
    enum DomainOsBootDevice {
        FD,
        HD,
        CDROM,
        NETWORK,
    }
    export namespace DomainOsFirmware {
        export const $gtype: GObject.GType<DomainOsFirmware>;
    }
    enum DomainOsFirmware {
        BIOS,
        EFI,
    }
    export namespace DomainOsSmBiosMode {
        export const $gtype: GObject.GType<DomainOsSmBiosMode>;
    }
    enum DomainOsSmBiosMode {
        EMULATE,
        HOST,
        SYSINFO,
    }
    export namespace DomainOsType {
        export const $gtype: GObject.GType<DomainOsType>;
    }
    enum DomainOsType {
        HVM,
        LINUX,
        EXE,
        XEN,
        UML,
    }
    export namespace DomainRedirdevBus {
        export const $gtype: GObject.GType<DomainRedirdevBus>;
    }
    enum DomainRedirdevBus {
        USB,
    }
    export namespace DomainSeclabelType {
        export const $gtype: GObject.GType<DomainSeclabelType>;
    }
    enum DomainSeclabelType {
        DYNAMIC,
        STATIC,
    }
    export namespace DomainSnapshotDomainState {
        export const $gtype: GObject.GType<DomainSnapshotDomainState>;
    }
    enum DomainSnapshotDomainState {
        NOSTATE,
        RUNNING,
        BLOCKED,
        PAUSED,
        SHUTDOWN,
        SHUTOFF,
        CRASHED,
        PMSUSPENDED,
        DISK_SNAPSHOT,
    }
    export namespace DomainSnapshotMemoryState {
        export const $gtype: GObject.GType<DomainSnapshotMemoryState>;
    }
    enum DomainSnapshotMemoryState {
        NONE,
        INTERNAL,
        EXTERNAL,
    }
    export namespace DomainSoundModel {
        export const $gtype: GObject.GType<DomainSoundModel>;
    }
    enum DomainSoundModel {
        SB16,
        ES1370,
        PCSPK,
        AC97,
        ICH6,
        ICH9,
    }
    export namespace DomainTimerTickPolicy {
        export const $gtype: GObject.GType<DomainTimerTickPolicy>;
    }
    enum DomainTimerTickPolicy {
        DELAY,
        CATCHUP,
        MERGE,
        DISCARD,
    }
    export namespace DomainVideoModel {
        export const $gtype: GObject.GType<DomainVideoModel>;
    }
    enum DomainVideoModel {
        VGA,
        CIRRUS,
        VMVGA,
        XEN,
        VBOX,
        QXL,
        VIRTIO,
        BOCHS,
    }
    export namespace DomainVirtType {
        export const $gtype: GObject.GType<DomainVirtType>;
    }
    enum DomainVirtType {
        QEMU,
        KQEMU,
        KVM,
        XEN,
        LXC,
        UML,
        OPENVZ,
        VSERVER,
        LDOM,
        TEST,
        VMWARE,
        HYPERV,
        VBOX,
        ONE,
        PHYP,
    }
    export namespace StoragePoolType {
        export const $gtype: GObject.GType<StoragePoolType>;
    }
    enum StoragePoolType {
        DIR,
        FS,
        NETFS,
        LOGICAL,
        DISK,
        ISCSI,
        SCSI,
        MPATH,
    }
    function init(argv: string[] | null): string[] | null;
    function init_check(argv: string[] | null): [boolean, string[] | null];
    export namespace StorageVolTargetFeatures {
        export const $gtype: GObject.GType<StorageVolTargetFeatures>;
    }
    enum StorageVolTargetFeatures {
        REFCOUNT,
    }
    namespace Capabilities {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Capabilities extends Object {
        static $gtype: GObject.GType<Capabilities>;
        $signals: Capabilities.SignalSignatures;
        constructor(properties?: Partial<Capabilities.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Capabilities;
        static new_from_xml(xml: string): Capabilities;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof Capabilities.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Capabilities.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Capabilities.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Capabilities.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Capabilities.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Capabilities.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_guests(): CapabilitiesGuest[];
        get_host(): CapabilitiesHost;
    }
    namespace CapabilitiesCpu {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesCpu extends Object {
        static $gtype: GObject.GType<CapabilitiesCpu>;
        $signals: CapabilitiesCpu.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesCpu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesCpu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesCpu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesCpu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesCpu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_features(): CapabilitiesCpuFeature[];
        add_feature(feature: CapabilitiesCpuFeature): void;
        get_arch(): string;
        get_features(): CapabilitiesCpuFeature[];
        get_model(): CapabilitiesCpuModel;
        get_topology(): CapabilitiesCpuTopology;
        set_topology(topology: CapabilitiesCpuTopology): void;
    }
    namespace CapabilitiesCpuFeature {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesCpuFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuFeature>;
        $signals: CapabilitiesCpuFeature.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesCpuFeature.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuFeature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuFeature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesCpuFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        set_name(name: string): void;
    }
    namespace CapabilitiesCpuModel {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesCpuModel extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuModel>;
        $signals: CapabilitiesCpuModel.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesCpuModel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CapabilitiesCpuModel;
        static new_from_xml(xml: string): CapabilitiesCpuModel;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof CapabilitiesCpuModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesCpuModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesCpuModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesCpuModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        set_name(name: string): void;
    }
    namespace CapabilitiesCpuTopology {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesCpuTopology extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuTopology>;
        $signals: CapabilitiesCpuTopology.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesCpuTopology.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CapabilitiesCpuTopology;
        static new_from_xml(xml: string): CapabilitiesCpuTopology;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuTopology.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesCpuTopology.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesCpuTopology.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cores(): number;
        get_sockets(): number;
        get_threads(): number;
        set_cores(cores: bigint | number): void;
        set_sockets(sockets: bigint | number): void;
        set_threads(threads: bigint | number): void;
    }
    namespace CapabilitiesGuest {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesGuest extends Object {
        static $gtype: GObject.GType<CapabilitiesGuest>;
        $signals: CapabilitiesGuest.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesGuest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesGuest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesGuest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesGuest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesGuest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_arch(): CapabilitiesGuestArch;
        get_features(): CapabilitiesGuestFeature[];
        get_os_type(): DomainOsType;
    }
    namespace CapabilitiesGuestArch {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesGuestArch extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestArch>;
        $signals: CapabilitiesGuestArch.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesGuestArch.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesGuestArch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestArch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesGuestArch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestArch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesGuestArch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesGuestArch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_domains(): CapabilitiesGuestDomain[];
        get_emulator(): string;
        get_name(): string;
    }
    namespace CapabilitiesGuestDomain {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesGuestDomain extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestDomain>;
        $signals: CapabilitiesGuestDomain.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesGuestDomain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestDomain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestDomain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesGuestDomain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_emulator(): string;
        get_virt_type(): DomainVirtType;
    }
    namespace CapabilitiesGuestFeature {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesGuestFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestFeature>;
        $signals: CapabilitiesGuestFeature.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesGuestFeature.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestFeature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesGuestFeature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesGuestFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
    }
    namespace CapabilitiesHost {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesHost extends Object {
        static $gtype: GObject.GType<CapabilitiesHost>;
        $signals: CapabilitiesHost.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesHost.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesHost.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesHost.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesHost.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesHost.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesHost.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesHost.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cpu(): CapabilitiesCpu;
        get_secmodels(): CapabilitiesHostSecModel[];
        get_uuid(): string;
    }
    namespace CapabilitiesHostSecModel {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CapabilitiesHostSecModel extends Object {
        static $gtype: GObject.GType<CapabilitiesHostSecModel>;
        $signals: CapabilitiesHostSecModel.SignalSignatures;
        constructor(properties?: Partial<CapabilitiesHostSecModel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesHostSecModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CapabilitiesHostSecModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CapabilitiesHostSecModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_doi(): string;
        get_model(): string;
    }
    namespace Domain {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::current-memory": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::features": (pspec: GObject.ParamSpec) => void;
            "notify::memory": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::uuid": (pspec: GObject.ParamSpec) => void;
            "notify::vcpu": (pspec: GObject.ParamSpec) => void;
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            current_memory: bigint | number;
            currentMemory: bigint | number;
            description: string;
            features: string[];
            memory: bigint | number;
            name: string;
            title: string;
            uuid: string;
            vcpu: bigint | number;
        }
    }
    class Domain extends Object {
        static $gtype: GObject.GType<Domain>;
        get current_memory(): number;
        set current_memory(val: bigint | number);
        get currentMemory(): number;
        set currentMemory(val: bigint | number);
        get description(): string;
        set description(val: string);
        get features(): string[];
        set features(val: string[]);
        get memory(): number;
        set memory(val: bigint | number);
        get name(): string;
        set name(val: string);
        get title(): string;
        set title(val: string);
        get uuid(): string;
        set uuid(val: string);
        get vcpu(): number;
        set vcpu(val: bigint | number);
        $signals: Domain.SignalSignatures;
        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Domain;
        static new_from_xml(xml: string): Domain;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof Domain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Domain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Domain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Domain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_device(device: DomainDevice): void;
        get_clock(): DomainClock;
        get_cpu(): DomainCpu;
        get_current_memory(): number;
        get_custom_xml(ns_uri: string): string;
        get_description(): string;
        get_devices(): DomainDevice[];
        get_features(): string[];
        get_memory(): number;
        get_name(): string;
        get_os(): DomainOs;
        get_title(): string;
        get_uuid(): string;
        get_vcpus(): number;
        get_virt_type(): DomainVirtType;
        set_clock(klock: DomainClock | null): void;
        set_cpu(cpu: DomainCpu | null): void;
        set_current_memory(memory: bigint | number): void;
        set_custom_xml(xml: string, ns: string, ns_uri: string): boolean;
        set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean;
        set_description(description: string | null): void;
        set_devices(devices: DomainDevice[]): void;
        set_features(features: string[]): void;
        set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void;
        set_memory(memory: bigint | number): void;
        set_name(name: string | null): void;
        set_os(os: DomainOs | null): void;
        set_power_management(pm: DomainPowerManagement | null): void;
        set_seclabel(seclabel: DomainSeclabel | null): void;
        set_title(title: string | null): void;
        set_uuid(uuid: string | null): void;
        set_vcpus(vcpu_count: bigint | number): void;
        set_virt_type(type: DomainVirtType): void;
    }
    namespace DomainAddress {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class DomainAddress extends Object {
        static $gtype: GObject.GType<DomainAddress>;
        $signals: DomainAddress.SignalSignatures;
        constructor(properties?: Partial<DomainAddress.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainAddress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddress.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainAddress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddress.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainAddress.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainAddress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainAddressPci {
        interface SignalSignatures extends DomainAddress.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }
    class DomainAddressPci extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressPci>;
        $signals: DomainAddressPci.SignalSignatures;
        constructor(properties?: Partial<DomainAddressPci.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainAddressPci;
        static new_from_xml(xml: string): DomainAddressPci;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainAddressPci.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddressPci.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainAddressPci.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddressPci.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainAddressPci.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainAddressPci.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bus(): number;
        get_domain(): number;
        get_function(): number;
        get_multifunction(): boolean;
        get_slot(): number;
        set_bus(bus: number): void;
        set_domain(pci_domain: number): void;
        set_function(_function: number): void;
        set_multifunction(multifunction: boolean): void;
        set_slot(slot: number): void;
    }
    namespace DomainAddressUsb {
        interface SignalSignatures extends DomainAddress.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }
    class DomainAddressUsb extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressUsb>;
        $signals: DomainAddressUsb.SignalSignatures;
        constructor(properties?: Partial<DomainAddressUsb.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainAddressUsb;
        static new_from_xml(xml: string): DomainAddressUsb;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainAddressUsb.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddressUsb.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainAddressUsb.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAddressUsb.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainAddressUsb.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainAddressUsb.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_bus(bus: number): void;
        set_port(port: string): void;
    }
    namespace DomainAudio {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainAudio extends DomainDevice {
        static $gtype: GObject.GType<DomainAudio>;
        $signals: DomainAudio.SignalSignatures;
        constructor(properties?: Partial<DomainAudio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainAudio;
        static new_from_xml(xml: string): DomainAudio;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAudio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainAudio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainAudio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainAudio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_backend(backend: DomainAudioBackend): void;
        set_server_name(server_name: string): void;
    }
    namespace DomainCapabilities {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainCapabilities extends Object {
        static $gtype: GObject.GType<DomainCapabilities>;
        $signals: DomainCapabilities.SignalSignatures;
        constructor(properties?: Partial<DomainCapabilities.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainCapabilities;
        static new_from_xml(xml: string): DomainCapabilities;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainCapabilities.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCapabilities.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainCapabilities.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCapabilities.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainCapabilities.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainCapabilities.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_os(): DomainCapabilitiesOs;
    }
    namespace DomainCapabilitiesOs {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainCapabilitiesOs extends Object {
        static $gtype: GObject.GType<DomainCapabilitiesOs>;
        $signals: DomainCapabilitiesOs.SignalSignatures;
        constructor(properties?: Partial<DomainCapabilitiesOs.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainCapabilitiesOs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCapabilitiesOs.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainCapabilitiesOs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCapabilitiesOs.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainCapabilitiesOs.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainCapabilitiesOs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_firmwares(): DomainOsFirmware[];
        get_firmwares(): DomainOsFirmware[];
    }
    namespace DomainChannel {
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }
    class DomainChannel extends DomainChardev {
        static $gtype: GObject.GType<DomainChannel>;
        $signals: DomainChannel.SignalSignatures;
        constructor(properties?: Partial<DomainChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainChannel;
        static new_from_xml(xml: string): DomainChannel;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChannel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_target_name(): string;
        get_target_type(): DomainChannelTargetType;
        set_target_name(name: string): void;
        set_target_type(type: DomainChannelTargetType): void;
    }
    namespace DomainChardev {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainChardev extends DomainDevice {
        static $gtype: GObject.GType<DomainChardev>;
        $signals: DomainChardev.SignalSignatures;
        constructor(properties?: Partial<DomainChardev.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainChardev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardev.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardev.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardev.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_source(): DomainChardevSource;
        set_source(source: DomainChardevSource): void;
    }
    namespace DomainChardevSource {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class DomainChardevSource extends Object {
        static $gtype: GObject.GType<DomainChardevSource>;
        $signals: DomainChardevSource.SignalSignatures;
        constructor(properties?: Partial<DomainChardevSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainChardevSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardevSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardevSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardevSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainChardevSourcePty {
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }
    class DomainChardevSourcePty extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourcePty>;
        $signals: DomainChardevSourcePty.SignalSignatures;
        constructor(properties?: Partial<DomainChardevSourcePty.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainChardevSourcePty;
        static new_from_xml(xml: string): DomainChardevSourcePty;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainChardevSourcePty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourcePty.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardevSourcePty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourcePty.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardevSourcePty.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardevSourcePty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_path(): string;
        set_path(path: string): void;
    }
    namespace DomainChardevSourceSpicePort {
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }
    class DomainChardevSourceSpicePort extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpicePort>;
        $signals: DomainChardevSourceSpicePort.SignalSignatures;
        constructor(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainChardevSourceSpicePort;
        static new_from_xml(xml: string): DomainChardevSourceSpicePort;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceSpicePort.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceSpicePort.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardevSourceSpicePort.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_channel(): string;
        set_channel(channel: string): void;
    }
    namespace DomainChardevSourceSpiceVmc {
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }
    class DomainChardevSourceSpiceVmc extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>;
        $signals: DomainChardevSourceSpiceVmc.SignalSignatures;
        constructor(properties?: Partial<DomainChardevSourceSpiceVmc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainChardevSourceSpiceVmc;
        static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceSpiceVmc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceSpiceVmc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardevSourceSpiceVmc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainChardevSourceUnix {
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }
    class DomainChardevSourceUnix extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceUnix>;
        $signals: DomainChardevSourceUnix.SignalSignatures;
        constructor(properties?: Partial<DomainChardevSourceUnix.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainChardevSourceUnix;
        static new_from_xml(xml: string): DomainChardevSourceUnix;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainChardevSourceUnix.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceUnix.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainChardevSourceUnix.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainChardevSourceUnix.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainChardevSourceUnix.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainChardevSourceUnix.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainClock {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainClock extends Object {
        static $gtype: GObject.GType<DomainClock>;
        $signals: DomainClock.SignalSignatures;
        constructor(properties?: Partial<DomainClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainClock;
        static new_from_xml(xml: string): DomainClock;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_timer(timer: DomainTimer): void;
        get_offset(): DomainClockOffset;
        get_timezone(): string;
        get_variable_offset(): number;
        set_offset(offset: DomainClockOffset): void;
        set_timezone(tz: string): void;
        set_variable_offset(seconds: number): void;
    }
    namespace DomainConsole {
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }
    class DomainConsole extends DomainChardev {
        static $gtype: GObject.GType<DomainConsole>;
        $signals: DomainConsole.SignalSignatures;
        constructor(properties?: Partial<DomainConsole.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainConsole;
        static new_from_xml(xml: string): DomainConsole;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainConsole.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainConsole.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainConsole.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainConsole.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainConsole.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainConsole.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_target_type(type: DomainConsoleTargetType): void;
    }
    namespace DomainController {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainController extends DomainDevice {
        static $gtype: GObject.GType<DomainController>;
        $signals: DomainController.SignalSignatures;
        constructor(properties?: Partial<DomainController.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainController.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainController.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainController.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_index(): number;
        get_ports(): number;
        set_address(address: DomainAddress | null): void;
        set_index(index: number): void;
        set_ports(ports: number): void;
    }
    namespace DomainControllerUsb {
        interface SignalSignatures extends DomainController.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainController.ConstructorProps {}
    }
    class DomainControllerUsb extends DomainController {
        static $gtype: GObject.GType<DomainControllerUsb>;
        $signals: DomainControllerUsb.SignalSignatures;
        constructor(properties?: Partial<DomainControllerUsb.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainControllerUsb;
        static new_from_xml(xml: string): DomainControllerUsb;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainControllerUsb.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainControllerUsb.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainControllerUsb.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainControllerUsb.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainControllerUsb.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainControllerUsb.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_master(master: DomainControllerUsb, startport: number): void;
        set_model(model: DomainControllerUsbModel): void;
    }
    namespace DomainCpu {
        interface SignalSignatures extends CapabilitiesCpu.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CapabilitiesCpu.ConstructorProps {}
    }
    class DomainCpu extends CapabilitiesCpu {
        static $gtype: GObject.GType<DomainCpu>;
        $signals: DomainCpu.SignalSignatures;
        constructor(properties?: Partial<DomainCpu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainCpu;
        static new_from_xml(xml: string): DomainCpu;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainCpu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainCpu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainCpu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainCpu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_match_policy(): DomainCpuMatchPolicy;
        get_mode(): DomainCpuMode;
        set_match_policy(policy: DomainCpuMatchPolicy): void;
        set_mode(mode: DomainCpuMode): void;
        set_model(model: DomainCpuModel): void;
    }
    namespace DomainCpuFeature {
        interface SignalSignatures extends CapabilitiesCpuFeature.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CapabilitiesCpuFeature.ConstructorProps {}
    }
    class DomainCpuFeature extends CapabilitiesCpuFeature {
        static $gtype: GObject.GType<DomainCpuFeature>;
        $signals: DomainCpuFeature.SignalSignatures;
        constructor(properties?: Partial<DomainCpuFeature.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainCpuFeature;
        static new_from_xml(xml: string): DomainCpuFeature;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainCpuFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpuFeature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainCpuFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpuFeature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainCpuFeature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainCpuFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_policy(): DomainCpuFeaturePolicy;
        set_policy(policy: DomainCpuFeaturePolicy): void;
    }
    namespace DomainCpuModel {
        interface SignalSignatures extends CapabilitiesCpuModel.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CapabilitiesCpuModel.ConstructorProps {}
    }
    class DomainCpuModel extends CapabilitiesCpuModel {
        static $gtype: GObject.GType<DomainCpuModel>;
        $signals: DomainCpuModel.SignalSignatures;
        constructor(properties?: Partial<DomainCpuModel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainCpuModel;
        static new_from_xml(xml: string): DomainCpuModel;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainCpuModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpuModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainCpuModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainCpuModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainCpuModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainCpuModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainDevice {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainDevice extends Object {
        static $gtype: GObject.GType<DomainDevice>;
        $signals: DomainDevice.SignalSignatures;
        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_alias(): string;
    }
    namespace DomainDisk {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;
        $signals: DomainDisk.SignalSignatures;
        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainDisk;
        static new_from_xml(xml: string): DomainDisk;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainDisk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_disk_type(): DomainDiskType;
        get_driver(): DomainDiskDriver;
        get_driver_cache(): DomainDiskCacheType;
        get_driver_format(): DomainDiskFormat;
        get_driver_name(): string;
        get_driver_type(): string;
        get_guest_device_type(): DomainDiskGuestDeviceType;
        get_snapshot_type(): DomainDiskSnapshotType;
        get_source(): string;
        get_startup_policy(): DomainDiskStartupPolicy;
        get_target_bus(): DomainDiskBus;
        get_target_dev(): string;
        set_driver(driver: DomainDiskDriver | null): void;
        set_driver_cache(cache_type: DomainDiskCacheType): void;
        set_driver_format(format: DomainDiskFormat): void;
        set_driver_name(driver_name: string): void;
        set_driver_type(driver_type: string): void;
        set_guest_device_type(type: DomainDiskGuestDeviceType): void;
        set_readonly(readonly: boolean): void;
        set_snapshot_type(type: DomainDiskSnapshotType): void;
        set_source(source: string): void;
        set_startup_policy(policy: DomainDiskStartupPolicy): void;
        set_target_bus(bus: DomainDiskBus): void;
        set_target_dev(dev: string): void;
        set_type(type: DomainDiskType): void;
    }
    namespace DomainDiskDriver {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainDiskDriver extends Object {
        static $gtype: GObject.GType<DomainDiskDriver>;
        $signals: DomainDiskDriver.SignalSignatures;
        constructor(properties?: Partial<DomainDiskDriver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainDiskDriver;
        static new_from_xml(xml: string): DomainDiskDriver;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainDiskDriver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDiskDriver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainDiskDriver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainDiskDriver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainDiskDriver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainDiskDriver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cache(): DomainDiskCacheType;
        get_copy_on_read(): boolean;
        get_discard(): DomainDiskDriverDiscard;
        get_error_policy(): DomainDiskDriverErrorPolicy;
        get_format(): DomainDiskFormat;
        get_io_policy(): DomainDiskDriverIoPolicy;
        get_name(): string;
        set_cache(cache_type: DomainDiskCacheType): void;
        set_copy_on_read(copy_on_read: boolean): void;
        set_discard(discard: DomainDiskDriverDiscard): void;
        set_error_policy(policy: DomainDiskDriverErrorPolicy): void;
        set_format(format: DomainDiskFormat): void;
        set_io_policy(policy: DomainDiskDriverIoPolicy): void;
        set_name(name: string): void;
    }
    namespace DomainFilesys {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainFilesys extends DomainDevice {
        static $gtype: GObject.GType<DomainFilesys>;
        $signals: DomainFilesys.SignalSignatures;
        constructor(properties?: Partial<DomainFilesys.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainFilesys;
        static new_from_xml(xml: string): DomainFilesys;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainFilesys.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainFilesys.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainFilesys.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainFilesys.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainFilesys.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainFilesys.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_access_type(type: DomainFilesysAccessType): void;
        set_driver_format(format: DomainDiskFormat): void;
        set_driver_type(type: DomainFilesysDriverType): void;
        set_ram_usage(bytes: bigint | number): void;
        set_readonly(readonly: boolean): void;
        set_source(source: string): void;
        set_target(target: string): void;
        set_type(type: DomainFilesysType): void;
    }
    namespace DomainGraphics {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainGraphics extends DomainDevice {
        static $gtype: GObject.GType<DomainGraphics>;
        $signals: DomainGraphics.SignalSignatures;
        constructor(properties?: Partial<DomainGraphics.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainGraphics.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphics.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphics.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphics.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphics.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainGraphicsDBus {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsDBus extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDBus>;
        $signals: DomainGraphicsDBus.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsDBus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsDBus;
        static new_from_xml(xml: string): DomainGraphicsDBus;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsDBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsDBus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsDBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsDBus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsDBus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsDBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_address(): string;
        set_address(address: string): void;
        set_gl(gl: boolean): void;
    }
    namespace DomainGraphicsDesktop {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsDesktop extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDesktop>;
        $signals: DomainGraphicsDesktop.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsDesktop.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsDesktop;
        static new_from_xml(xml: string): DomainGraphicsDesktop;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsDesktop.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsDesktop.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsDesktop.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsDesktop.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsDesktop.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsDesktop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_display(): string;
        get_fullscreen(): boolean;
        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
    }
    namespace DomainGraphicsRdp {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsRdp extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsRdp>;
        $signals: DomainGraphicsRdp.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsRdp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsRdp;
        static new_from_xml(xml: string): DomainGraphicsRdp;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsRdp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsRdp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsRdp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsRdp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsRdp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsRdp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_multi_user(): boolean;
        get_port(): number;
        get_replace_user(): boolean;
        set_autoport(autoport: boolean): void;
        set_multi_user(multi_user: boolean): void;
        set_port(port: number): void;
        set_replace_user(replace_user: boolean): void;
    }
    namespace DomainGraphicsSdl {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsSdl extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSdl>;
        $signals: DomainGraphicsSdl.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsSdl.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsSdl;
        static new_from_xml(xml: string): DomainGraphicsSdl;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsSdl.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsSdl.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsSdl.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsSdl.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsSdl.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsSdl.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
        set_xauthority(path: string): void;
    }
    namespace DomainGraphicsSpice {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsSpice extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSpice>;
        $signals: DomainGraphicsSpice.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsSpice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsSpice;
        static new_from_xml(xml: string): DomainGraphicsSpice;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsSpice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsSpice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsSpice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsSpice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsSpice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsSpice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_image_compression(): DomainGraphicsSpiceImageCompression;
        get_port(): number;
        set_autoport(autoport: boolean): void;
        set_gl(gl: boolean): void;
        set_image_compression(compression: DomainGraphicsSpiceImageCompression): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_tls_port(port: number): void;
    }
    namespace DomainGraphicsVnc {
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }
    class DomainGraphicsVnc extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsVnc>;
        $signals: DomainGraphicsVnc.SignalSignatures;
        constructor(properties?: Partial<DomainGraphicsVnc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainGraphicsVnc;
        static new_from_xml(xml: string): DomainGraphicsVnc;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainGraphicsVnc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsVnc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainGraphicsVnc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainGraphicsVnc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainGraphicsVnc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainGraphicsVnc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_port(): number;
        get_socket(): string;
        set_autoport(autoport: boolean): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_socket(socket: string): void;
    }
    namespace DomainHostdev {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainHostdev extends DomainDevice {
        static $gtype: GObject.GType<DomainHostdev>;
        $signals: DomainHostdev.SignalSignatures;
        constructor(properties?: Partial<DomainHostdev.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainHostdev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainHostdev.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainHostdev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainHostdev.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainHostdev.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainHostdev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_boot_order(): number;
        get_readonly(): boolean;
        get_shareable(): boolean;
        set_boot_order(order: number): void;
        set_readonly(readonly: boolean): void;
        set_shareable(shareable: boolean): void;
    }
    namespace DomainHostdevPci {
        interface SignalSignatures extends DomainHostdev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainHostdev.ConstructorProps {}
    }
    class DomainHostdevPci extends DomainHostdev {
        static $gtype: GObject.GType<DomainHostdevPci>;
        $signals: DomainHostdevPci.SignalSignatures;
        constructor(properties?: Partial<DomainHostdevPci.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainHostdevPci;
        static new_from_xml(xml: string): DomainHostdevPci;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainHostdevPci.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainHostdevPci.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainHostdevPci.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainHostdevPci.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainHostdevPci.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainHostdevPci.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_address(): DomainAddressPci;
        get_managed(): boolean;
        get_rom_bar(): boolean;
        get_rom_file(): string;
        set_address(address: DomainAddressPci): void;
        set_managed(managed: boolean): void;
        set_rom_bar(bar: boolean): void;
        set_rom_file(file: string): void;
    }
    namespace DomainInput {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainInput extends DomainDevice {
        static $gtype: GObject.GType<DomainInput>;
        $signals: DomainInput.SignalSignatures;
        constructor(properties?: Partial<DomainInput.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInput;
        static new_from_xml(xml: string): DomainInput;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInput.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInput.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInput.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInput.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInput.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInput.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bus(): DomainInputBus;
        get_device_type(): DomainInputDeviceType;
        set_bus(bus: DomainInputBus): void;
        set_device_type(type: DomainInputDeviceType): void;
    }
    namespace DomainInterface {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainInterface extends DomainDevice {
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
        get_filterref(): DomainInterfaceFilterref;
        get_ifname(): string;
        get_link_state(): DomainInterfaceLinkState;
        get_mac(): string;
        get_model(): string;
        set_filterref(filterref: DomainInterfaceFilterref | null): void;
        set_ifname(ifname: string): void;
        set_link_state(state: DomainInterfaceLinkState): void;
        set_mac(mac_address: string): void;
        set_model(model: string): void;
    }
    namespace DomainInterfaceBridge {
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }
    class DomainInterfaceBridge extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceBridge>;
        $signals: DomainInterfaceBridge.SignalSignatures;
        constructor(properties?: Partial<DomainInterfaceBridge.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInterfaceBridge;
        static new_from_xml(xml: string): DomainInterfaceBridge;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInterfaceBridge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceBridge.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterfaceBridge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceBridge.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterfaceBridge.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterfaceBridge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_source(brname: string): void;
    }
    namespace DomainInterfaceFilterref {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainInterfaceFilterref extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterref>;
        $signals: DomainInterfaceFilterref.SignalSignatures;
        constructor(properties?: Partial<DomainInterfaceFilterref.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInterfaceFilterref;
        static new_from_xml(xml: string): DomainInterfaceFilterref;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInterfaceFilterref.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceFilterref.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterfaceFilterref.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceFilterref.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterfaceFilterref.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterfaceFilterref.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_parameter(parameter: DomainInterfaceFilterrefParameter): void;
        get_name(): string;
        get_parameters(): DomainInterfaceFilterrefParameter[];
        set_name(filter: string): void;
    }
    namespace DomainInterfaceFilterrefParameter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainInterfaceFilterrefParameter extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>;
        $signals: DomainInterfaceFilterrefParameter.SignalSignatures;
        constructor(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInterfaceFilterrefParameter;
        static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceFilterrefParameter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceFilterrefParameter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterfaceFilterrefParameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_value(): string;
        set_name(name: string): void;
        set_value(value: string): void;
    }
    namespace DomainInterfaceNetwork {
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }
    class DomainInterfaceNetwork extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceNetwork>;
        $signals: DomainInterfaceNetwork.SignalSignatures;
        constructor(properties?: Partial<DomainInterfaceNetwork.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInterfaceNetwork;
        static new_from_xml(xml: string): DomainInterfaceNetwork;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInterfaceNetwork.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceNetwork.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterfaceNetwork.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceNetwork.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterfaceNetwork.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterfaceNetwork.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_source(source: string): void;
    }
    namespace DomainInterfaceUser {
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }
    class DomainInterfaceUser extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceUser>;
        $signals: DomainInterfaceUser.SignalSignatures;
        constructor(properties?: Partial<DomainInterfaceUser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainInterfaceUser;
        static new_from_xml(xml: string): DomainInterfaceUser;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainInterfaceUser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceUser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainInterfaceUser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainInterfaceUser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainInterfaceUser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainInterfaceUser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainMemballoon {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainMemballoon extends DomainDevice {
        static $gtype: GObject.GType<DomainMemballoon>;
        $signals: DomainMemballoon.SignalSignatures;
        constructor(properties?: Partial<DomainMemballoon.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainMemballoon;
        static new_from_xml(xml: string): DomainMemballoon;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainMemballoon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainMemballoon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainMemballoon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainMemballoon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainMemballoon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainMemballoon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_model(model: DomainMemballoonModel): void;
    }
    namespace DomainOs {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainOs extends Object {
        static $gtype: GObject.GType<DomainOs>;
        $signals: DomainOs.SignalSignatures;
        constructor(properties?: Partial<DomainOs.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainOs;
        static new_from_xml(xml: string): DomainOs;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainOs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainOs.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainOs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainOs.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainOs.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainOs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bios_enable_serial(enable: boolean): void;
        enable_boot_menu(enable: boolean): void;
        enable_firmware_feature(name: string, enable: boolean): void;
        get_arch(): string;
        get_boot_devices(): DomainOsBootDevice[];
        get_firmware(): DomainOsFirmware;
        get_machine(): string;
        get_os_type(): DomainOsType;
        set_arch(arch: string): void;
        set_boot_devices(boot_devices: DomainOsBootDevice[]): void;
        set_cmdline(cmdline: string | null): void;
        set_firmware(firmware: DomainOsFirmware): void;
        set_init(init: string | null): void;
        set_kernel(kernel: string | null): void;
        set_loader(loader: string | null): void;
        set_machine(machine: string): void;
        set_os_type(type: DomainOsType): void;
        set_ramdisk(ramdisk: string | null): void;
        set_smbios_mode(mode: DomainOsSmBiosMode): void;
    }
    namespace DomainParallel {
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }
    class DomainParallel extends DomainChardev {
        static $gtype: GObject.GType<DomainParallel>;
        $signals: DomainParallel.SignalSignatures;
        constructor(properties?: Partial<DomainParallel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainParallel;
        static new_from_xml(xml: string): DomainParallel;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainParallel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainParallel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainParallel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainParallel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainParallel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainParallel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainPowerManagement {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainPowerManagement extends Object {
        static $gtype: GObject.GType<DomainPowerManagement>;
        $signals: DomainPowerManagement.SignalSignatures;
        constructor(properties?: Partial<DomainPowerManagement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainPowerManagement;
        static new_from_xml(xml: string): DomainPowerManagement;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainPowerManagement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainPowerManagement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainPowerManagement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainPowerManagement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainPowerManagement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainPowerManagement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_disk_suspend_enabled(enabled: boolean): void;
        set_mem_suspend_enabled(enabled: boolean): void;
    }
    namespace DomainRedirdev {
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }
    class DomainRedirdev extends DomainChardev {
        static $gtype: GObject.GType<DomainRedirdev>;
        $signals: DomainRedirdev.SignalSignatures;
        constructor(properties?: Partial<DomainRedirdev.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainRedirdev;
        static new_from_xml(xml: string): DomainRedirdev;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainRedirdev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainRedirdev.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainRedirdev.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainRedirdev.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainRedirdev.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainRedirdev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_address(address: DomainAddress | null): void;
        set_bus(bus: DomainRedirdevBus): void;
    }
    namespace DomainSeclabel {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainSeclabel extends Object {
        static $gtype: GObject.GType<DomainSeclabel>;
        $signals: DomainSeclabel.SignalSignatures;
        constructor(properties?: Partial<DomainSeclabel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSeclabel;
        static new_from_xml(xml: string): DomainSeclabel;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSeclabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSeclabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSeclabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSeclabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSeclabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSeclabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_baselabel(label: string | null): void;
        set_label(label: string | null): void;
        set_model(model: string): void;
        set_type(type: DomainSeclabelType): void;
    }
    namespace DomainSerial {
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }
    class DomainSerial extends DomainChardev {
        static $gtype: GObject.GType<DomainSerial>;
        $signals: DomainSerial.SignalSignatures;
        constructor(properties?: Partial<DomainSerial.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSerial;
        static new_from_xml(xml: string): DomainSerial;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSerial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSerial.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSerial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSerial.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSerial.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSerial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainSmartcard {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    abstract class DomainSmartcard extends DomainDevice {
        static $gtype: GObject.GType<DomainSmartcard>;
        $signals: DomainSmartcard.SignalSignatures;
        constructor(properties?: Partial<DomainSmartcard.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainSmartcard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSmartcard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSmartcard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSmartcard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static set_address(redirdev: DomainRedirdev, address: DomainAddress | null): void;
    }
    namespace DomainSmartcardHost {
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }
    class DomainSmartcardHost extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHost>;
        $signals: DomainSmartcardHost.SignalSignatures;
        constructor(properties?: Partial<DomainSmartcardHost.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSmartcardHost;
        static new_from_xml(xml: string): DomainSmartcardHost;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSmartcardHost.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardHost.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSmartcardHost.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardHost.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSmartcardHost.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSmartcardHost.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainSmartcardHostCertificates {
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }
    class DomainSmartcardHostCertificates extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHostCertificates>;
        $signals: DomainSmartcardHostCertificates.SignalSignatures;
        constructor(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSmartcardHostCertificates;
        static new_from_xml(xml: string): DomainSmartcardHostCertificates;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardHostCertificates.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardHostCertificates.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSmartcardHostCertificates.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_certificates(cert1: string | null, cert2: string | null, cert3: string | null): void;
        set_database(path: string | null): void;
    }
    namespace DomainSmartcardPassthrough {
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }
    class DomainSmartcardPassthrough extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardPassthrough>;
        $signals: DomainSmartcardPassthrough.SignalSignatures;
        constructor(properties?: Partial<DomainSmartcardPassthrough.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSmartcardPassthrough;
        static new_from_xml(xml: string): DomainSmartcardPassthrough;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardPassthrough.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSmartcardPassthrough.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSmartcardPassthrough.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_source(source: DomainChardevSource): void;
    }
    namespace DomainSnapshot {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainSnapshot extends Object {
        static $gtype: GObject.GType<DomainSnapshot>;
        $signals: DomainSnapshot.SignalSignatures;
        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSnapshot;
        static new_from_xml(xml: string): DomainSnapshot;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSnapshot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSnapshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_disk(disk: DomainSnapshotDisk): void;
        get_creation_time(): number;
        get_description(): string;
        get_disks(): DomainSnapshotDisk[];
        get_domain(): Domain;
        get_memory_file(): string;
        get_memory_state(): DomainSnapshotMemoryState;
        get_name(): string;
        get_parent(): string;
        get_state(): DomainSnapshotDomainState;
        set_description(description: string): void;
        set_disks(disks: DomainSnapshotDisk[]): void;
        set_memory_file(filename: string): void;
        set_memory_state(state: DomainSnapshotMemoryState): void;
        set_name(name: string): void;
    }
    namespace DomainSnapshotDisk {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class DomainSnapshotDisk extends Object {
        static $gtype: GObject.GType<DomainSnapshotDisk>;
        $signals: DomainSnapshotDisk.SignalSignatures;
        constructor(properties?: Partial<DomainSnapshotDisk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSnapshotDisk;
        static new_from_xml(xml: string): DomainSnapshotDisk;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSnapshotDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshotDisk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSnapshotDisk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSnapshotDisk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSnapshotDisk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSnapshotDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_driver_format(): DomainDiskFormat;
        get_name(): string;
        get_snapshot_type(): DomainDiskSnapshotType;
        get_source_file(): string;
        set_driver_format(format: DomainDiskFormat): void;
        set_name(name: string): void;
        set_snapshot_type(type: DomainDiskSnapshotType): void;
        set_source_file(filename: string): void;
    }
    namespace DomainSound {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainSound extends DomainDevice {
        static $gtype: GObject.GType<DomainSound>;
        $signals: DomainSound.SignalSignatures;
        constructor(properties?: Partial<DomainSound.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainSound;
        static new_from_xml(xml: string): DomainSound;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainSound.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSound.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainSound.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainSound.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainSound.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainSound.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_model(model: DomainSoundModel): void;
    }
    namespace DomainTimer {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class DomainTimer extends Object {
        static $gtype: GObject.GType<DomainTimer>;
        $signals: DomainTimer.SignalSignatures;
        constructor(properties?: Partial<DomainTimer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DomainTimer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainTimer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainTimer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainTimer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_present(): boolean;
        get_tick_policy(): DomainTimerTickPolicy;
        set_present(present: boolean): void;
        set_tick_policy(policy: DomainTimerTickPolicy): void;
    }
    namespace DomainTimerHpet {
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }
    class DomainTimerHpet extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerHpet>;
        $signals: DomainTimerHpet.SignalSignatures;
        constructor(properties?: Partial<DomainTimerHpet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainTimerHpet;
        static new_from_xml(xml: string): DomainTimerHpet;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainTimerHpet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerHpet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainTimerHpet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerHpet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainTimerHpet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainTimerHpet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainTimerPit {
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }
    class DomainTimerPit extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerPit>;
        $signals: DomainTimerPit.SignalSignatures;
        constructor(properties?: Partial<DomainTimerPit.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainTimerPit;
        static new_from_xml(xml: string): DomainTimerPit;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainTimerPit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerPit.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainTimerPit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerPit.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainTimerPit.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainTimerPit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainTimerRtc {
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }
    class DomainTimerRtc extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerRtc>;
        $signals: DomainTimerRtc.SignalSignatures;
        constructor(properties?: Partial<DomainTimerRtc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainTimerRtc;
        static new_from_xml(xml: string): DomainTimerRtc;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainTimerRtc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerRtc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainTimerRtc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainTimerRtc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainTimerRtc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainTimerRtc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DomainVideo {
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }
    class DomainVideo extends DomainDevice {
        static $gtype: GObject.GType<DomainVideo>;
        $signals: DomainVideo.SignalSignatures;
        constructor(properties?: Partial<DomainVideo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DomainVideo;
        static new_from_xml(xml: string): DomainVideo;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof DomainVideo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainVideo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DomainVideo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DomainVideo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DomainVideo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DomainVideo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_model(): DomainVideoModel;
        set_accel3d(accel3d: boolean): void;
        set_heads(head_count: number): void;
        set_model(model: DomainVideoModel): void;
        set_ram(kbytes: number): void;
        set_vgamem(kbytes: number): void;
        set_vram(kbytes: number): void;
    }
    namespace Interface {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Interface extends Object {
        static $gtype: GObject.GType<Interface>;
        $signals: Interface.SignalSignatures;
        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Interface;
        static new_from_xml(xml: string): Interface;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof Interface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Interface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Interface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Interface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Network {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Network extends Object {
        static $gtype: GObject.GType<Network>;
        $signals: Network.SignalSignatures;
        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Network;
        static new_from_xml(xml: string): Network;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof Network.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Network.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Network.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Network.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace NetworkFilter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class NetworkFilter extends Object {
        static $gtype: GObject.GType<NetworkFilter>;
        $signals: NetworkFilter.SignalSignatures;
        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): NetworkFilter;
        static new_from_xml(xml: string): NetworkFilter;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof NetworkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace NodeDevice {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class NodeDevice extends Object {
        static $gtype: GObject.GType<NodeDevice>;
        $signals: NodeDevice.SignalSignatures;
        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): NodeDevice;
        static new_from_xml(xml: string): NodeDevice;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof NodeDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NodeDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NodeDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NodeDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: never;
            schema: string;
        }
    }
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        get node(): null;
        get schema(): string;
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](type: GObject.GType, root_name: string, schema: string): Object;
        static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        get_schema(): string;
        to_xml(): string;
        validate(): void;
    }
    namespace Secret {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Secret extends Object {
        static $gtype: GObject.GType<Secret>;
        $signals: Secret.SignalSignatures;
        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Secret;
        static new_from_xml(xml: string): Secret;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof Secret.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Secret.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Secret.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Secret.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace StoragePermissions {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StoragePermissions extends Object {
        static $gtype: GObject.GType<StoragePermissions>;
        $signals: StoragePermissions.SignalSignatures;
        constructor(properties?: Partial<StoragePermissions.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StoragePermissions;
        static new_from_xml(xml: string): StoragePermissions;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StoragePermissions.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePermissions.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StoragePermissions.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePermissions.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StoragePermissions.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StoragePermissions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_group(): number;
        get_label(): string;
        get_mode(): number;
        get_owner(): number;
        set_group(group: number): void;
        set_label(label: string | null): void;
        set_mode(mode: number): void;
        set_owner(owner: number): void;
    }
    namespace StoragePool {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StoragePool extends Object {
        static $gtype: GObject.GType<StoragePool>;
        $signals: StoragePool.SignalSignatures;
        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StoragePool;
        static new_from_xml(xml: string): StoragePool;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StoragePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StoragePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StoragePool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StoragePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_allocation(): number;
        get_available(): number;
        get_capacity(): number;
        get_name(): string;
        get_pool_type(): StoragePoolType;
        get_source(): StoragePoolSource;
        get_target(): StoragePoolTarget;
        get_uuid(): string;
        set_allocation(allocation: bigint | number): void;
        set_available(available: bigint | number): void;
        set_capacity(capacity: bigint | number): void;
        set_name(name: string | null): void;
        set_pool_type(type: StoragePoolType): void;
        set_source(source: StoragePoolSource | null): void;
        set_target(target: StoragePoolTarget | null): void;
        set_uuid(uuid: string | null): void;
    }
    namespace StoragePoolSource {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StoragePoolSource extends Object {
        static $gtype: GObject.GType<StoragePoolSource>;
        $signals: StoragePoolSource.SignalSignatures;
        constructor(properties?: Partial<StoragePoolSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StoragePoolSource;
        static new_from_xml(xml: string): StoragePoolSource;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StoragePoolSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePoolSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StoragePoolSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePoolSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StoragePoolSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StoragePoolSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_adapter(): string;
        get_device_path(): string;
        get_directory(): string;
        get_format(): string;
        get_host(): string;
        get_name(): string;
        get_product(): string;
        get_vendor(): string;
        set_adapter(adapter: string): void;
        set_device_path(device_path: string): void;
        set_directory(directory: string): void;
        set_format(format: string): void;
        set_host(host: string): void;
        set_name(name: string | null): void;
        set_product(product: string): void;
        set_vendor(vendor: string): void;
    }
    namespace StoragePoolTarget {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StoragePoolTarget extends Object {
        static $gtype: GObject.GType<StoragePoolTarget>;
        $signals: StoragePoolTarget.SignalSignatures;
        constructor(properties?: Partial<StoragePoolTarget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StoragePoolTarget;
        static new_from_xml(xml: string): StoragePoolTarget;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StoragePoolTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePoolTarget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StoragePoolTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StoragePoolTarget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StoragePoolTarget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StoragePoolTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_path(): string;
        get_permissions(): StoragePermissions;
        set_path(path: string | null): void;
        set_permissions(perms: StoragePermissions): void;
    }
    namespace StorageVol {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StorageVol extends Object {
        static $gtype: GObject.GType<StorageVol>;
        $signals: StorageVol.SignalSignatures;
        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StorageVol;
        static new_from_xml(xml: string): StorageVol;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StorageVol.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StorageVol.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StorageVol.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StorageVol.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_allocation(allocation: bigint | number): void;
        set_backing_store(backing_store: StorageVolBackingStore | null): void;
        set_capacity(capacity: bigint | number): void;
        set_name(name: string | null): void;
        set_target(target: StorageVolTarget | null): void;
    }
    namespace StorageVolBackingStore {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StorageVolBackingStore extends Object {
        static $gtype: GObject.GType<StorageVolBackingStore>;
        $signals: StorageVolBackingStore.SignalSignatures;
        constructor(properties?: Partial<StorageVolBackingStore.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StorageVolBackingStore;
        static new_from_xml(xml: string): StorageVolBackingStore;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StorageVolBackingStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVolBackingStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StorageVolBackingStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVolBackingStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StorageVolBackingStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StorageVolBackingStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_format(format: string): void;
        set_path(path: string | null): void;
    }
    namespace StorageVolTarget {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StorageVolTarget extends Object {
        static $gtype: GObject.GType<StorageVolTarget>;
        $signals: StorageVolTarget.SignalSignatures;
        constructor(properties?: Partial<StorageVolTarget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StorageVolTarget;
        static new_from_xml(xml: string): StorageVolTarget;
        static new_from_xml(...args: never[]): any;
        connect<K extends keyof StorageVolTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVolTarget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StorageVolTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageVolTarget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StorageVolTarget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StorageVolTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_compat(compat: string | null): void;
        set_features(features: bigint | number): void;
        set_format(format: string): void;
        set_permissions(perms: StoragePermissions | null): void;
    }
    type CapabilitiesClass = typeof Capabilities;
    type CapabilitiesCpuClass = typeof CapabilitiesCpu;
    type CapabilitiesCpuFeatureClass = typeof CapabilitiesCpuFeature;
    abstract class CapabilitiesCpuFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesCpuFeaturePrivate>;
    }
    type CapabilitiesCpuModelClass = typeof CapabilitiesCpuModel;
    abstract class CapabilitiesCpuModelPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuModelPrivate>;
    }
    abstract class CapabilitiesCpuPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuPrivate>;
    }
    type CapabilitiesCpuTopologyClass = typeof CapabilitiesCpuTopology;
    abstract class CapabilitiesCpuTopologyPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuTopologyPrivate>;
    }
    type CapabilitiesGuestArchClass = typeof CapabilitiesGuestArch;
    abstract class CapabilitiesGuestArchPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestArchPrivate>;
    }
    type CapabilitiesGuestClass = typeof CapabilitiesGuest;
    type CapabilitiesGuestDomainClass = typeof CapabilitiesGuestDomain;
    abstract class CapabilitiesGuestDomainPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestDomainPrivate>;
    }
    type CapabilitiesGuestFeatureClass = typeof CapabilitiesGuestFeature;
    abstract class CapabilitiesGuestFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesGuestFeaturePrivate>;
    }
    abstract class CapabilitiesGuestPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestPrivate>;
    }
    type CapabilitiesHostClass = typeof CapabilitiesHost;
    abstract class CapabilitiesHostPrivate {
        static $gtype: GObject.GType<CapabilitiesHostPrivate>;
    }
    type CapabilitiesHostSecModelClass = typeof CapabilitiesHostSecModel;
    abstract class CapabilitiesHostSecModelPrivate {
        static $gtype: GObject.GType<CapabilitiesHostSecModelPrivate>;
    }
    abstract class CapabilitiesPrivate {
        static $gtype: GObject.GType<CapabilitiesPrivate>;
    }
    type DomainAddressClass = typeof DomainAddress;
    type DomainAddressPciClass = typeof DomainAddressPci;
    abstract class DomainAddressPciPrivate {
        static $gtype: GObject.GType<DomainAddressPciPrivate>;
    }
    abstract class DomainAddressPrivate {
        static $gtype: GObject.GType<DomainAddressPrivate>;
    }
    type DomainAddressUsbClass = typeof DomainAddressUsb;
    abstract class DomainAddressUsbPrivate {
        static $gtype: GObject.GType<DomainAddressUsbPrivate>;
    }
    type DomainAudioClass = typeof DomainAudio;
    abstract class DomainAudioPrivate {
        static $gtype: GObject.GType<DomainAudioPrivate>;
    }
    type DomainCapabilitiesClass = typeof DomainCapabilities;
    type DomainCapabilitiesOsClass = typeof DomainCapabilitiesOs;
    abstract class DomainCapabilitiesOsPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesOsPrivate>;
    }
    abstract class DomainCapabilitiesPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesPrivate>;
    }
    type DomainChannelClass = typeof DomainChannel;
    abstract class DomainChannelPrivate {
        static $gtype: GObject.GType<DomainChannelPrivate>;
    }
    type DomainChardevClass = typeof DomainChardev;
    abstract class DomainChardevPrivate {
        static $gtype: GObject.GType<DomainChardevPrivate>;
    }
    type DomainChardevSourceClass = typeof DomainChardevSource;
    abstract class DomainChardevSourcePrivate {
        static $gtype: GObject.GType<DomainChardevSourcePrivate>;
    }
    type DomainChardevSourcePtyClass = typeof DomainChardevSourcePty;
    abstract class DomainChardevSourcePtyPrivate {
        static $gtype: GObject.GType<DomainChardevSourcePtyPrivate>;
    }
    type DomainChardevSourceSpicePortClass = typeof DomainChardevSourceSpicePort;
    abstract class DomainChardevSourceSpicePortPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpicePortPrivate>;
    }
    type DomainChardevSourceSpiceVmcClass = typeof DomainChardevSourceSpiceVmc;
    abstract class DomainChardevSourceSpiceVmcPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmcPrivate>;
    }
    type DomainChardevSourceUnixClass = typeof DomainChardevSourceUnix;
    abstract class DomainChardevSourceUnixPrivate {
        static $gtype: GObject.GType<DomainChardevSourceUnixPrivate>;
    }
    type DomainClass = typeof Domain;
    type DomainClockClass = typeof DomainClock;
    abstract class DomainClockPrivate {
        static $gtype: GObject.GType<DomainClockPrivate>;
    }
    type DomainConsoleClass = typeof DomainConsole;
    abstract class DomainConsolePrivate {
        static $gtype: GObject.GType<DomainConsolePrivate>;
    }
    type DomainControllerClass = typeof DomainController;
    abstract class DomainControllerPrivate {
        static $gtype: GObject.GType<DomainControllerPrivate>;
    }
    type DomainControllerUsbClass = typeof DomainControllerUsb;
    abstract class DomainControllerUsbPrivate {
        static $gtype: GObject.GType<DomainControllerUsbPrivate>;
    }
    type DomainCpuClass = typeof DomainCpu;
    type DomainCpuFeatureClass = typeof DomainCpuFeature;
    abstract class DomainCpuFeaturePrivate {
        static $gtype: GObject.GType<DomainCpuFeaturePrivate>;
    }
    type DomainCpuModelClass = typeof DomainCpuModel;
    abstract class DomainCpuModelPrivate {
        static $gtype: GObject.GType<DomainCpuModelPrivate>;
    }
    abstract class DomainCpuPrivate {
        static $gtype: GObject.GType<DomainCpuPrivate>;
    }
    type DomainDeviceClass = typeof DomainDevice;
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;
    }
    type DomainDiskClass = typeof DomainDisk;
    type DomainDiskDriverClass = typeof DomainDiskDriver;
    abstract class DomainDiskDriverPrivate {
        static $gtype: GObject.GType<DomainDiskDriverPrivate>;
    }
    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;
    }
    type DomainFilesysClass = typeof DomainFilesys;
    abstract class DomainFilesysPrivate {
        static $gtype: GObject.GType<DomainFilesysPrivate>;
    }
    type DomainGraphicsClass = typeof DomainGraphics;
    type DomainGraphicsDBusClass = typeof DomainGraphicsDBus;
    abstract class DomainGraphicsDBusPrivate {
        static $gtype: GObject.GType<DomainGraphicsDBusPrivate>;
    }
    type DomainGraphicsDesktopClass = typeof DomainGraphicsDesktop;
    abstract class DomainGraphicsDesktopPrivate {
        static $gtype: GObject.GType<DomainGraphicsDesktopPrivate>;
    }
    abstract class DomainGraphicsPrivate {
        static $gtype: GObject.GType<DomainGraphicsPrivate>;
    }
    type DomainGraphicsRdpClass = typeof DomainGraphicsRdp;
    abstract class DomainGraphicsRdpPrivate {
        static $gtype: GObject.GType<DomainGraphicsRdpPrivate>;
    }
    type DomainGraphicsSdlClass = typeof DomainGraphicsSdl;
    abstract class DomainGraphicsSdlPrivate {
        static $gtype: GObject.GType<DomainGraphicsSdlPrivate>;
    }
    type DomainGraphicsSpiceClass = typeof DomainGraphicsSpice;
    abstract class DomainGraphicsSpicePrivate {
        static $gtype: GObject.GType<DomainGraphicsSpicePrivate>;
    }
    type DomainGraphicsVncClass = typeof DomainGraphicsVnc;
    abstract class DomainGraphicsVncPrivate {
        static $gtype: GObject.GType<DomainGraphicsVncPrivate>;
    }
    type DomainHostdevClass = typeof DomainHostdev;
    type DomainHostdevPciClass = typeof DomainHostdevPci;
    abstract class DomainHostdevPciPrivate {
        static $gtype: GObject.GType<DomainHostdevPciPrivate>;
    }
    abstract class DomainHostdevPrivate {
        static $gtype: GObject.GType<DomainHostdevPrivate>;
    }
    type DomainInputClass = typeof DomainInput;
    abstract class DomainInputPrivate {
        static $gtype: GObject.GType<DomainInputPrivate>;
    }
    type DomainInterfaceBridgeClass = typeof DomainInterfaceBridge;
    abstract class DomainInterfaceBridgePrivate {
        static $gtype: GObject.GType<DomainInterfaceBridgePrivate>;
    }
    type DomainInterfaceClass = typeof DomainInterface;
    type DomainInterfaceFilterrefClass = typeof DomainInterfaceFilterref;
    type DomainInterfaceFilterrefParameterClass = typeof DomainInterfaceFilterrefParameter;
    abstract class DomainInterfaceFilterrefParameterPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameterPrivate>;
    }
    abstract class DomainInterfaceFilterrefPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefPrivate>;
    }
    type DomainInterfaceNetworkClass = typeof DomainInterfaceNetwork;
    abstract class DomainInterfaceNetworkPrivate {
        static $gtype: GObject.GType<DomainInterfaceNetworkPrivate>;
    }
    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;
    }
    type DomainInterfaceUserClass = typeof DomainInterfaceUser;
    abstract class DomainInterfaceUserPrivate {
        static $gtype: GObject.GType<DomainInterfaceUserPrivate>;
    }
    type DomainMemballoonClass = typeof DomainMemballoon;
    abstract class DomainMemballoonPrivate {
        static $gtype: GObject.GType<DomainMemballoonPrivate>;
    }
    type DomainOsClass = typeof DomainOs;
    abstract class DomainOsPrivate {
        static $gtype: GObject.GType<DomainOsPrivate>;
    }
    type DomainParallelClass = typeof DomainParallel;
    abstract class DomainParallelPrivate {
        static $gtype: GObject.GType<DomainParallelPrivate>;
    }
    type DomainPowerManagementClass = typeof DomainPowerManagement;
    abstract class DomainPowerManagementPrivate {
        static $gtype: GObject.GType<DomainPowerManagementPrivate>;
    }
    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;
    }
    type DomainRedirdevClass = typeof DomainRedirdev;
    abstract class DomainRedirdevPrivate {
        static $gtype: GObject.GType<DomainRedirdevPrivate>;
    }
    type DomainSeclabelClass = typeof DomainSeclabel;
    abstract class DomainSeclabelPrivate {
        static $gtype: GObject.GType<DomainSeclabelPrivate>;
    }
    type DomainSerialClass = typeof DomainSerial;
    abstract class DomainSerialPrivate {
        static $gtype: GObject.GType<DomainSerialPrivate>;
    }
    type DomainSmartcardClass = typeof DomainSmartcard;
    type DomainSmartcardHostCertificatesClass = typeof DomainSmartcardHostCertificates;
    abstract class DomainSmartcardHostCertificatesPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostCertificatesPrivate>;
    }
    type DomainSmartcardHostClass = typeof DomainSmartcardHost;
    abstract class DomainSmartcardHostPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostPrivate>;
    }
    type DomainSmartcardPassthroughClass = typeof DomainSmartcardPassthrough;
    abstract class DomainSmartcardPassthroughPrivate {
        static $gtype: GObject.GType<DomainSmartcardPassthroughPrivate>;
    }
    abstract class DomainSmartcardPrivate {
        static $gtype: GObject.GType<DomainSmartcardPrivate>;
    }
    type DomainSnapshotClass = typeof DomainSnapshot;
    type DomainSnapshotDiskClass = typeof DomainSnapshotDisk;
    abstract class DomainSnapshotDiskPrivate {
        static $gtype: GObject.GType<DomainSnapshotDiskPrivate>;
    }
    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;
    }
    type DomainSoundClass = typeof DomainSound;
    abstract class DomainSoundPrivate {
        static $gtype: GObject.GType<DomainSoundPrivate>;
    }
    type DomainTimerClass = typeof DomainTimer;
    type DomainTimerHpetClass = typeof DomainTimerHpet;
    abstract class DomainTimerHpetPrivate {
        static $gtype: GObject.GType<DomainTimerHpetPrivate>;
    }
    type DomainTimerPitClass = typeof DomainTimerPit;
    abstract class DomainTimerPitPrivate {
        static $gtype: GObject.GType<DomainTimerPitPrivate>;
    }
    abstract class DomainTimerPrivate {
        static $gtype: GObject.GType<DomainTimerPrivate>;
    }
    type DomainTimerRtcClass = typeof DomainTimerRtc;
    abstract class DomainTimerRtcPrivate {
        static $gtype: GObject.GType<DomainTimerRtcPrivate>;
    }
    type DomainVideoClass = typeof DomainVideo;
    abstract class DomainVideoPrivate {
        static $gtype: GObject.GType<DomainVideoPrivate>;
    }
    type InterfaceClass = typeof Interface;
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;
    }
    type NetworkClass = typeof Network;
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
    type ObjectClass = typeof Object;
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;
    }
    type SecretClass = typeof Secret;
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;
    }
    type StoragePermissionsClass = typeof StoragePermissions;
    abstract class StoragePermissionsPrivate {
        static $gtype: GObject.GType<StoragePermissionsPrivate>;
    }
    type StoragePoolClass = typeof StoragePool;
    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;
    }
    type StoragePoolSourceClass = typeof StoragePoolSource;
    abstract class StoragePoolSourcePrivate {
        static $gtype: GObject.GType<StoragePoolSourcePrivate>;
    }
    type StoragePoolTargetClass = typeof StoragePoolTarget;
    abstract class StoragePoolTargetPrivate {
        static $gtype: GObject.GType<StoragePoolTargetPrivate>;
    }
    type StorageVolBackingStoreClass = typeof StorageVolBackingStore;
    abstract class StorageVolBackingStorePrivate {
        static $gtype: GObject.GType<StorageVolBackingStorePrivate>;
    }
    type StorageVolClass = typeof StorageVol;
    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;
    }
    type StorageVolTargetClass = typeof StorageVolTarget;
    abstract class StorageVolTargetPrivate {
        static $gtype: GObject.GType<StorageVolTargetPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default LibvirtGConfig;
}
declare module 'gi://LibvirtGConfig' {
    import LibvirtGConfig10 from 'gi://LibvirtGConfig?version=1.0';
    export default LibvirtGConfig10;
}
