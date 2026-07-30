declare module 'gi://DBusGLib?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace DBusGLib {
    namespace Proxy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;
        $signals: Proxy.SignalSignatures;
        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Connection {
        static $gtype: GObject.GType<Connection>;
    }
    class MethodInvocation {
        static $gtype: GObject.GType<MethodInvocation>;
    }
    class ProxyClass {
        static $gtype: GObject.GType<ProxyClass>;
    }
    const __name__: string;
    const __version__: string;
}
export default DBusGLib;
}
declare module 'gi://DBusGLib' {
    import DBusGLib10 from 'gi://DBusGLib?version=1.0';
    export default DBusGLib10;
}
