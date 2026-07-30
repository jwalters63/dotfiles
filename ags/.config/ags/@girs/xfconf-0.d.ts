declare module 'gi://Xfconf?version=0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Xfconf {
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN: number;
        static CHANNELNOTFOUND: number;
        static PROPERTYNOTFOUND: number;
        static READFAILURE: number;
        static WRITEFAILURE: number;
        static PERMISSIONDENIED: number;
        static INTERNALERROR: number;
        static NOBACKEND: number;
        static INVALIDPROPERTY: number;
        static INVALIDCHANNEL: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    function array_free(arr: (GObject.Value | any)[]): void;
    function error_quark(): GLib.Quark;
    function init(): boolean;
    function list_channels(): string[];
    function named_struct_register(struct_name: string, n_members: number, member_types: GObject.GType): void;
    function property_bind(channel: Channel, xfconf_property: string, xfconf_property_type: GObject.GType, object: never, object_property: string): number;
    function property_bind_gdkcolor(channel: Channel, xfconf_property: string, object: never, object_property: string): number;
    function property_bind_gdkrgba(channel: Channel, xfconf_property: string, object: never, object_property: string): number;
    function property_unbind(id: bigint | number): void;
    function property_unbind_all(channel_or_object: never): void;
    function property_unbind_by_property(channel: Channel, xfconf_property: string, object: never, object_property: string): void;
    function shutdown(): void;
    function value_get_int16(value: GObject.Value | any): number;
    function value_get_uint16(value: GObject.Value | any): number;
    function value_set_int16(value: GObject.Value | any, v_int16: number): void;
    function value_set_uint16(value: GObject.Value | any, v_uint16: number): void;
    namespace Channel {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "property-changed": (arg0: string, arg1: unknown) => void;
            "notify::channel-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-singleton": (pspec: GObject.ParamSpec) => void;
            "notify::property-base": (pspec: GObject.ParamSpec) => void;
            "property-changed::channel-name": (arg0: string, arg1: unknown) => void;
            "property-changed::is-singleton": (arg0: string, arg1: unknown) => void;
            "property-changed::property-base": (arg0: string, arg1: unknown) => void;
            [key: `property-changed::${string}`]: (arg0: string, arg1: unknown) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel_name: string;
            channelName: string;
            is_singleton: boolean;
            isSingleton: boolean;
            property_base: string;
            propertyBase: string;
        }
    }
    class Channel extends GObject.Object {
        static $gtype: GObject.GType<Channel>;
        get channel_name(): string;
        get channelName(): string;
        get is_singleton(): boolean;
        get isSingleton(): boolean;
        get property_base(): string;
        get propertyBase(): string;
        $signals: Channel.SignalSignatures;
        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static get(channel_name: string): Channel;
        static ["new"](channel_name: string): Channel;
        static new_with_property_base(channel_name: string, property_base: string): Channel;
        connect<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Channel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_arrayv(property: string): unknown[] | null;
        get_bool(property: string, default_value: boolean): boolean;
        get_double(property: string, default_value: number): number;
        get_int(property: string, default_value: number): number;
        get_named_struct(property: string, struct_name: string, value_struct: null): boolean;
        get_properties(property_base: string | null): { [key: string]: GObject.Value };
        get_property(property: string, value: GObject.Value | any): boolean;
        get_property(...args: never[]): any;
        get_string(property: string, default_value: string | null): string | null;
        get_string_list(property: string): string[];
        get_structv(property: string, value_struct: null, n_members: number, member_types: GObject.GType): boolean;
        get_uint(property: string, default_value: number): number;
        get_uint64(property: string, default_value: bigint | number): number;
        has_property(property: string): boolean;
        is_property_locked(property: string): boolean;
        reset_property(property_base: string, recursive: boolean): void;
        set_arrayv(property: string, values: (GObject.Value | any)[]): boolean;
        set_bool(property: string, value: boolean): boolean;
        set_double(property: string, value: number): boolean;
        set_int(property: string, value: number): boolean;
        set_named_struct(property: string, struct_name: string, value_struct: null): boolean;
        set_property(property: string, value: GObject.Value | any): boolean;
        set_property(...args: never[]): any;
        set_string(property: string, value: string): boolean;
        set_string_list(property: string, values: string): boolean;
        set_structv(property: string, value_struct: null, n_members: number, member_types: GObject.GType): boolean;
        set_uint(property: string, value: number): boolean;
        set_uint64(property: string, value: bigint | number): boolean;
    }
    namespace Int16 {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Int16 {
        static $gtype: GObject.GType<Int16>;
        _init(...args: any[]): void;
        connect<K extends keyof Int16.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Int16.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int16.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Int16.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int16.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Int16.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Uint16 {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Uint16 {
        static $gtype: GObject.GType<Uint16>;
        _init(...args: any[]): void;
        connect<K extends keyof Uint16.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Uint16.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Uint16.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Uint16.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Uint16.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Uint16.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    const __name__: string;
    const __version__: string;
}
export default Xfconf;
}
declare module 'gi://Xfconf' {
    import Xfconf0 from 'gi://Xfconf?version=0';
    export default Xfconf0;
}
