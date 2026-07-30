declare module 'gi://UPowerGlib?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace UPowerGlib {
    enum DeviceKind {
        UNKNOWN,
        LINE_POWER,
        BATTERY,
        UPS,
        MONITOR,
        MOUSE,
        KEYBOARD,
        PDA,
        PHONE,
        MEDIA_PLAYER,
        TABLET,
        COMPUTER,
        GAMING_INPUT,
        PEN,
        TOUCHPAD,
        MODEM,
        NETWORK,
        HEADSET,
        SPEAKERS,
        HEADPHONES,
        VIDEO,
        OTHER_AUDIO,
        REMOTE_CONTROL,
        PRINTER,
        SCANNER,
        CAMERA,
        WEARABLE,
        TOY,
        BLUETOOTH_GENERIC,
        LAST,
    }
    enum DeviceLevel {
        UNKNOWN,
        NONE,
        DISCHARGING,
        LOW,
        CRITICAL,
        ACTION,
        NORMAL,
        HIGH,
        FULL,
        LAST,
    }
    enum DeviceState {
        UNKNOWN,
        CHARGING,
        DISCHARGING,
        EMPTY,
        FULLY_CHARGED,
        PENDING_CHARGE,
        PENDING_DISCHARGE,
        LAST,
    }
    enum DeviceTechnology {
        UNKNOWN,
        LITHIUM_ION,
        LITHIUM_POLYMER,
        LITHIUM_IRON_PHOSPHATE,
        LEAD_ACID,
        NICKEL_CADMIUM,
        NICKEL_METAL_HYDRIDE,
        LAST,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "device-added": (arg0: Device) => void;
            "device-removed": (arg0: string) => void;
            "notify::daemon-version": (pspec: GObject.ParamSpec) => void;
            "notify::lid-is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::lid-is-present": (pspec: GObject.ParamSpec) => void;
            "notify::on-battery": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            daemon_version: string;
            daemonVersion: string;
            lid_is_closed: boolean;
            lidIsClosed: boolean;
            lid_is_present: boolean;
            lidIsPresent: boolean;
            on_battery: boolean;
            onBattery: boolean;
        }
    }
    class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
        static $gtype: GObject.GType<Client>;
        get daemon_version(): string;
        get daemonVersion(): string;
        get lid_is_closed(): boolean;
        get lidIsClosed(): boolean;
        get lid_is_present(): boolean;
        get lidIsPresent(): boolean;
        get on_battery(): boolean;
        get onBattery(): boolean;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Client;
        static new_finish(res: Gio.AsyncResult): Client;
        static new_finish(...args: never[]): any;
        static new_full(cancellable: Gio.Cancellable | null): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Client> | null): void;
        vfunc_device_added(device: Device): void;
        vfunc_device_removed(object_path: string): void;
        get_critical_action(): string;
        get_daemon_version(): string;
        get_devices(): Device[];
        get_devices2(): Device[];
        get_devices_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        get_devices_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_devices_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;
        get_devices_finish(res: Gio.AsyncResult): Device[];
        get_display_device(): Device;
        get_lid_is_closed(): boolean;
        get_lid_is_present(): boolean;
        get_on_battery(): boolean;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Client;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::battery-level": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::capacity-level": (pspec: GObject.ParamSpec) => void;
            "notify::charge-cycles": (pspec: GObject.ParamSpec) => void;
            "notify::charge-end-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::charge-start-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::charge-threshold-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::charge-threshold-supported": (pspec: GObject.ParamSpec) => void;
            "notify::energy": (pspec: GObject.ParamSpec) => void;
            "notify::energy-empty": (pspec: GObject.ParamSpec) => void;
            "notify::energy-full": (pspec: GObject.ParamSpec) => void;
            "notify::energy-full-design": (pspec: GObject.ParamSpec) => void;
            "notify::energy-rate": (pspec: GObject.ParamSpec) => void;
            "notify::has-history": (pspec: GObject.ParamSpec) => void;
            "notify::has-statistics": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-present": (pspec: GObject.ParamSpec) => void;
            "notify::is-rechargeable": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::luminosity": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::native-path": (pspec: GObject.ParamSpec) => void;
            "notify::online": (pspec: GObject.ParamSpec) => void;
            "notify::percentage": (pspec: GObject.ParamSpec) => void;
            "notify::power-supply": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::technology": (pspec: GObject.ParamSpec) => void;
            "notify::temperature": (pspec: GObject.ParamSpec) => void;
            "notify::time-to-empty": (pspec: GObject.ParamSpec) => void;
            "notify::time-to-full": (pspec: GObject.ParamSpec) => void;
            "notify::update-time": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::voltage": (pspec: GObject.ParamSpec) => void;
            "notify::voltage-max-design": (pspec: GObject.ParamSpec) => void;
            "notify::voltage-min-design": (pspec: GObject.ParamSpec) => void;
            "notify::warning-level": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            battery_level: number;
            batteryLevel: number;
            capacity: number;
            capacity_level: string;
            capacityLevel: string;
            charge_cycles: number;
            chargeCycles: number;
            charge_end_threshold: number;
            chargeEndThreshold: number;
            charge_start_threshold: number;
            chargeStartThreshold: number;
            charge_threshold_enabled: boolean;
            chargeThresholdEnabled: boolean;
            charge_threshold_supported: boolean;
            chargeThresholdSupported: boolean;
            energy: number;
            energy_empty: number;
            energyEmpty: number;
            energy_full: number;
            energyFull: number;
            energy_full_design: number;
            energyFullDesign: number;
            energy_rate: number;
            energyRate: number;
            has_history: boolean;
            hasHistory: boolean;
            has_statistics: boolean;
            hasStatistics: boolean;
            icon_name: string;
            iconName: string;
            is_present: boolean;
            isPresent: boolean;
            is_rechargeable: boolean;
            isRechargeable: boolean;
            kind: number;
            luminosity: number;
            model: string;
            native_path: string;
            nativePath: string;
            online: boolean;
            percentage: number;
            power_supply: boolean;
            powerSupply: boolean;
            serial: string;
            state: number;
            technology: number;
            temperature: number;
            time_to_empty: bigint | number;
            timeToEmpty: bigint | number;
            time_to_full: bigint | number;
            timeToFull: bigint | number;
            update_time: bigint | number;
            updateTime: bigint | number;
            vendor: string;
            voltage: number;
            voltage_max_design: number;
            voltageMaxDesign: number;
            voltage_min_design: number;
            voltageMinDesign: number;
            warning_level: number;
            warningLevel: number;
        }
    }
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;
        get battery_level(): number;
        set battery_level(val: number);
        get batteryLevel(): number;
        set batteryLevel(val: number);
        get capacity(): number;
        set capacity(val: number);
        get capacity_level(): string;
        set capacity_level(val: string);
        get capacityLevel(): string;
        set capacityLevel(val: string);
        get charge_cycles(): number;
        set charge_cycles(val: number);
        get chargeCycles(): number;
        set chargeCycles(val: number);
        get charge_end_threshold(): number;
        set charge_end_threshold(val: number);
        get chargeEndThreshold(): number;
        set chargeEndThreshold(val: number);
        get charge_start_threshold(): number;
        set charge_start_threshold(val: number);
        get chargeStartThreshold(): number;
        set chargeStartThreshold(val: number);
        get charge_threshold_enabled(): boolean;
        set charge_threshold_enabled(val: boolean);
        get chargeThresholdEnabled(): boolean;
        set chargeThresholdEnabled(val: boolean);
        get charge_threshold_supported(): boolean;
        set charge_threshold_supported(val: boolean);
        get chargeThresholdSupported(): boolean;
        set chargeThresholdSupported(val: boolean);
        get energy(): number;
        set energy(val: number);
        get energy_empty(): number;
        set energy_empty(val: number);
        get energyEmpty(): number;
        set energyEmpty(val: number);
        get energy_full(): number;
        set energy_full(val: number);
        get energyFull(): number;
        set energyFull(val: number);
        get energy_full_design(): number;
        set energy_full_design(val: number);
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        get energy_rate(): number;
        set energy_rate(val: number);
        get energyRate(): number;
        set energyRate(val: number);
        get has_history(): boolean;
        set has_history(val: boolean);
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get is_present(): boolean;
        set is_present(val: boolean);
        get isPresent(): boolean;
        set isPresent(val: boolean);
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        get kind(): number;
        set kind(val: number);
        get luminosity(): number;
        set luminosity(val: number);
        get model(): string;
        set model(val: string);
        get native_path(): string;
        set native_path(val: string);
        get nativePath(): string;
        set nativePath(val: string);
        get online(): boolean;
        set online(val: boolean);
        get percentage(): number;
        set percentage(val: number);
        get power_supply(): boolean;
        set power_supply(val: boolean);
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        get serial(): string;
        set serial(val: string);
        get state(): number;
        set state(val: number);
        get technology(): number;
        set technology(val: number);
        get temperature(): number;
        set temperature(val: number);
        get time_to_empty(): number;
        set time_to_empty(val: bigint | number);
        get timeToEmpty(): number;
        set timeToEmpty(val: bigint | number);
        get time_to_full(): number;
        set time_to_full(val: bigint | number);
        get timeToFull(): number;
        set timeToFull(val: bigint | number);
        get update_time(): number;
        set update_time(val: bigint | number);
        get updateTime(): number;
        set updateTime(val: bigint | number);
        get vendor(): string;
        set vendor(val: string);
        get voltage(): number;
        set voltage(val: number);
        get voltage_max_design(): number;
        set voltage_max_design(val: number);
        get voltageMaxDesign(): number;
        set voltageMaxDesign(val: number);
        get voltage_min_design(): number;
        set voltage_min_design(val: number);
        get voltageMinDesign(): number;
        set voltageMinDesign(val: number);
        get warning_level(): number;
        set warning_level(val: number);
        get warningLevel(): number;
        set warningLevel(val: number);
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static kind_from_string(type: string): DeviceKind;
        static kind_to_string(type_enum: DeviceKind): string;
        static level_from_string(level: string): DeviceLevel;
        static level_to_string(level_enum: DeviceLevel): string;
        static state_from_string(state: string): DeviceState;
        static state_to_string(state_enum: DeviceState): string;
        static technology_from_string(technology: string): DeviceTechnology;
        static technology_to_string(technology_enum: DeviceTechnology): string;
        get_history_sync(type: string, timespec: number, resolution: number, cancellable: Gio.Cancellable | null): HistoryItem[];
        get_object_path(): string;
        get_statistics_sync(type: string, cancellable: Gio.Cancellable | null): StatsItem[];
        refresh_sync(cancellable: Gio.Cancellable | null): boolean;
        set_object_path_sync(object_path: string, cancellable: Gio.Cancellable | null): boolean;
        to_text(): string;
    }
    namespace HistoryItem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: number;
            time: number;
            value: number;
        }
    }
    class HistoryItem extends GObject.Object {
        static $gtype: GObject.GType<HistoryItem>;
        get state(): number;
        set state(val: number);
        get time(): number;
        set time(val: number);
        get value(): number;
        set value(val: number);
        $signals: HistoryItem.SignalSignatures;
        constructor(properties?: Partial<HistoryItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): HistoryItem;
        connect<K extends keyof HistoryItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HistoryItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HistoryItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HistoryItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_state(): DeviceState;
        get_time(): number;
        get_value(): number;
        set_from_string(text: string): boolean;
        set_state(state: DeviceState): void;
        set_time(time: number): void;
        set_time_to_present(): void;
        set_value(value: number): void;
        to_string(): string;
    }
    namespace StatsItem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::accuracy": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accuracy: number;
            value: number;
        }
    }
    class StatsItem extends GObject.Object {
        static $gtype: GObject.GType<StatsItem>;
        get accuracy(): number;
        set accuracy(val: number);
        get value(): number;
        set value(val: number);
        $signals: StatsItem.SignalSignatures;
        constructor(properties?: Partial<StatsItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StatsItem;
        connect<K extends keyof StatsItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StatsItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StatsItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatsItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_accuracy(): number;
        get_value(): number;
        set_accuracy(accuracy: number): void;
        set_value(value: number): void;
    }
    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type DeviceClass = typeof Device;
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    type HistoryItemClass = typeof HistoryItem;
    abstract class HistoryItemPrivate {
        static $gtype: GObject.GType<HistoryItemPrivate>;
    }
    type StatsItemClass = typeof StatsItem;
    abstract class StatsItemPrivate {
        static $gtype: GObject.GType<StatsItemPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default UPowerGlib;
}
declare module 'gi://UPowerGlib' {
    import UPowerGlib10 from 'gi://UPowerGlib?version=1.0';
    export default UPowerGlib10;
}
