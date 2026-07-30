declare module 'gi://GstNet?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
export namespace GstNet {
    const NET_TIME_PACKET_SIZE: number;
    const PTP_CLOCK_ID_NONE: number;
    const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;
    const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;
    const PTP_STATISTICS_PATH_DELAY_MEASURED: string;
    const PTP_STATISTICS_TIME_UPDATED: string;
    function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;
    function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta;
    function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta | null;
    function net_address_meta_api_get_type(): GObject.GType;
    function net_address_meta_get_info(): Gst.MetaInfo;
    function net_control_message_meta_api_get_type(): GObject.GType;
    function net_control_message_meta_get_info(): Gst.MetaInfo;
    function net_time_packet_receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];
    function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean;
    function ptp_deinit(): void;
    function ptp_init(clock_id: bigint | number, interfaces: string[] | null): boolean;
    function ptp_init_full(config: Gst.Structure): boolean;
    function ptp_is_initialized(): boolean;
    function ptp_is_supported(): boolean;
    function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number;
    function ptp_statistics_callback_remove(id: bigint | number): void;
    interface PtpStatisticsCallback {
        (domain: number, stats: Gst.Structure): boolean;
    }
    namespace NetClientClock {
        interface SignalSignatures extends Gst.SystemClock.SignalSignatures {
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::base-time": (pspec: GObject.ParamSpec) => void;
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-update-interval": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::round-trip-limit": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
            address: string;
            base_time: bigint | number;
            baseTime: bigint | number;
            bus: Gst.Bus;
            internal_clock: Gst.Clock;
            internalClock: Gst.Clock;
            minimum_update_interval: bigint | number;
            minimumUpdateInterval: bigint | number;
            port: number;
            qos_dscp: number;
            qosDscp: number;
            round_trip_limit: bigint | number;
            roundTripLimit: bigint | number;
        }
    }
    class NetClientClock extends Gst.SystemClock {
        static $gtype: GObject.GType<NetClientClock>;
        get address(): string;
        set address(val: string);
        get base_time(): number;
        get baseTime(): number;
        get bus(): Gst.Bus;
        set bus(val: Gst.Bus);
        get internal_clock(): Gst.Clock;
        get internalClock(): Gst.Clock;
        get minimum_update_interval(): number;
        set minimum_update_interval(val: bigint | number);
        get minimumUpdateInterval(): number;
        set minimumUpdateInterval(val: bigint | number);
        get port(): number;
        set port(val: number);
        get qos_dscp(): number;
        set qos_dscp(val: number);
        get qosDscp(): number;
        set qosDscp(val: number);
        get round_trip_limit(): number;
        set round_trip_limit(val: bigint | number);
        get roundTripLimit(): number;
        set roundTripLimit(val: bigint | number);
        $signals: NetClientClock.SignalSignatures;
        clock: Gst.SystemClock;
        constructor(properties?: Partial<NetClientClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock;
        connect<K extends keyof NetClientClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetClientClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetClientClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetClientClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetClientClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetClientClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static deinit(): void;
    }
    namespace NetTimeProvider {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::clock": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            active: boolean;
            address: string;
            clock: Gst.Clock;
            port: number;
            qos_dscp: number;
            qosDscp: number;
        }
    }
    class NetTimeProvider extends Gst.Object implements Gio.Initable {
        static $gtype: GObject.GType<NetTimeProvider>;
        get active(): boolean;
        set active(val: boolean);
        get address(): string;
        get clock(): Gst.Clock;
        get port(): number;
        get qos_dscp(): number;
        set qos_dscp(val: number);
        get qosDscp(): number;
        set qosDscp(val: number);
        $signals: NetTimeProvider.SignalSignatures;
        constructor(properties?: Partial<NetTimeProvider.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](clock: Gst.Clock, address: string | null, port: number): NetTimeProvider;
        connect<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetTimeProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetTimeProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetTimeProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    namespace NtpClock {
        interface SignalSignatures extends NetClientClock.SignalSignatures {
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::base-time": (pspec: GObject.ParamSpec) => void;
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-update-interval": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::round-trip-limit": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends NetClientClock.ConstructorProps {}
    }
    class NtpClock extends NetClientClock {
        static $gtype: GObject.GType<NtpClock>;
        $signals: NtpClock.SignalSignatures;
        clock: Gst.SystemClock;
        constructor(properties?: Partial<NtpClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock;
        connect<K extends keyof NtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NtpClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NtpClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NtpClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NtpClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace PtpClock {
        interface SignalSignatures extends Gst.SystemClock.SignalSignatures {
            "notify::domain": (pspec: GObject.ParamSpec) => void;
            "notify::grandmaster-clock-id": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::master-clock-id": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
            domain: number;
            grandmaster_clock_id: bigint | number;
            grandmasterClockId: bigint | number;
            internal_clock: Gst.Clock;
            internalClock: Gst.Clock;
            master_clock_id: bigint | number;
            masterClockId: bigint | number;
        }
    }
    class PtpClock extends Gst.SystemClock {
        static $gtype: GObject.GType<PtpClock>;
        get domain(): number;
        get grandmaster_clock_id(): number;
        get grandmasterClockId(): number;
        get internal_clock(): Gst.Clock;
        get internalClock(): Gst.Clock;
        get master_clock_id(): number;
        get masterClockId(): number;
        $signals: PtpClock.SignalSignatures;
        clock: Gst.SystemClock;
        constructor(properties?: Partial<PtpClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, domain: number): PtpClock;
        connect<K extends keyof PtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PtpClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PtpClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PtpClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PtpClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    class NetAddressMeta {
        static $gtype: GObject.GType<NetAddressMeta>;
        addr: Gio.SocketAddress;
        static get_info(): Gst.MetaInfo;
    }
    type NetClientClockClass = typeof NetClientClock;
    abstract class NetClientClockPrivate {
        static $gtype: GObject.GType<NetClientClockPrivate>;
    }
    class NetControlMessageMeta {
        static $gtype: GObject.GType<NetControlMessageMeta>;
        message: Gio.SocketControlMessage;
        static get_info(): Gst.MetaInfo;
    }
    class NetTimePacket {
        static $gtype: GObject.GType<NetTimePacket>;
        local_time: Gst.ClockTime;
        remote_time: Gst.ClockTime;
        constructor(buffer: Uint8Array | string | null);
        static ["new"](buffer: Uint8Array | string | null): NetTimePacket;
        static receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];
        copy(): NetTimePacket;
        free(): void;
        send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;
        serialize(): Uint8Array;
    }
    type NetTimeProviderClass = typeof NetTimeProvider;
    abstract class NetTimeProviderPrivate {
        static $gtype: GObject.GType<NetTimeProviderPrivate>;
    }
    type NtpClockClass = typeof NtpClock;
    type PtpClockClass = typeof PtpClock;
    abstract class PtpClockPrivate {
        static $gtype: GObject.GType<PtpClockPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstNet;
}
declare module 'gi://GstNet' {
    import GstNet10 from 'gi://GstNet?version=1.0';
    export default GstNet10;
}
