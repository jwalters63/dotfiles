declare module 'gi://Manette?version=0.2' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GUdev from 'gi://GUdev?version=1.0';
export namespace Manette {
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }
    enum DeviceType {
        GENERIC,
        STEAM_DECK,
    }
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }
    enum EventType {
        EVENT_NOTHING,
        EVENT_BUTTON_PRESS,
        EVENT_BUTTON_RELEASE,
        EVENT_ABSOLUTE,
        EVENT_HAT,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const VERSION_S: string;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_resource(): Gio.Resource;
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "absolute-axis-event": (arg0: Event) => void;
            "button-press-event": (arg0: Event) => void;
            "button-release-event": (arg0: Event) => void;
            disconnected: () => void;
            event: (arg0: Event) => void;
            "hat-axis-event": (arg0: Event) => void;
        }
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
        get_device_type(): DeviceType;
        get_guid(): string;
        get_mapping(): string | null;
        get_name(): string;
        has_input(type: number, code: number): boolean;
        has_rumble(): boolean;
        has_user_mapping(): boolean;
        remove_user_mapping(): void;
        rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean;
        save_user_mapping(mapping_string: string): void;
        supports_mapping(): boolean;
    }
    namespace Monitor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "device-connected": (arg0: Device) => void;
            "device-disconnected": (arg0: Device) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;
        $signals: Monitor.SignalSignatures;
        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Monitor;
        connect<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Monitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        iterate(): MonitorIter;
    }
    type DeviceClass = typeof Device;
    type MonitorClass = typeof Monitor;
    abstract class MonitorIter {
        static $gtype: GObject.GType<MonitorIter>;
        free(): void;
        next(): [boolean, Device | null];
    }
    class Event {
        static $gtype: GObject.GType<Event>;
        copy(): Event;
        free(): void;
        get_absolute(): [boolean, number, number];
        get_button(): [boolean, number];
        get_device(): Device;
        get_event_type(): EventType;
        get_hardware_code(): number;
        get_hardware_index(): number;
        get_hardware_type(): number;
        get_hardware_value(): number;
        get_hat(): [boolean, number, number];
        get_time(): number;
    }
    const __name__: string;
    const __version__: string;
}
export default Manette;
}
declare module 'gi://Manette' {
    import Manette02 from 'gi://Manette?version=0.2';
    export default Manette02;
}
