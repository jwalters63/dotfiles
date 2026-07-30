declare module 'gi://GUPnPIgd?version=1.6' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace GUPnPIgd {
    enum SimpleIgdError {
        SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
    }
    namespace SimpleIgd {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "context-available": (arg0: GObject.Object) => boolean | void;
            "error-mapping-port": (arg0: GLib.Error, arg1: string, arg2: number, arg3: string, arg4: number, arg5: string) => void;
            "mapped-external-port": (arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: number, arg6: string) => void;
            "notify::main-context": (pspec: GObject.ParamSpec) => void;
            "error-mapping-port::main-context": (arg0: GLib.Error, arg1: string, arg2: number, arg3: string, arg4: number, arg5: string) => void;
            [key: `error-mapping-port::${string}`]: (arg0: GLib.Error, arg1: string, arg2: number, arg3: string, arg4: number, arg5: string) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_context: never;
            mainContext: never;
        }
    }
    class SimpleIgd extends GObject.Object {
        static $gtype: GObject.GType<SimpleIgd>;
        get main_context(): null;
        get mainContext(): null;
        $signals: SimpleIgd.SignalSignatures;
        constructor(properties?: Partial<SimpleIgd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SimpleIgd;
        connect<K extends keyof SimpleIgd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleIgd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleIgd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleIgd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleIgd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleIgd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void;
        delete_all_mappings(): boolean;
        remove_port(protocol: string, external_port: number): void;
        remove_port_local(protocol: string, local_ip: string, local_port: number): void;
    }
    namespace SimpleIgdThread {
        interface SignalSignatures extends SimpleIgd.SignalSignatures {
            "notify::main-context": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends SimpleIgd.ConstructorProps {}
    }
    class SimpleIgdThread extends SimpleIgd {
        static $gtype: GObject.GType<SimpleIgdThread>;
        $signals: SimpleIgdThread.SignalSignatures;
        constructor(properties?: Partial<SimpleIgdThread.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SimpleIgdThread;
        connect<K extends keyof SimpleIgdThread.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleIgdThread.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleIgdThread.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleIgdThread.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleIgdThread.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleIgdThread.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type SimpleIgdClass = typeof SimpleIgd;
    abstract class SimpleIgdPrivate {
        static $gtype: GObject.GType<SimpleIgdPrivate>;
    }
    type SimpleIgdThreadClass = typeof SimpleIgdThread;
    abstract class SimpleIgdThreadPrivate {
        static $gtype: GObject.GType<SimpleIgdThreadPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GUPnPIgd;
}
declare module 'gi://GUPnPIgd' {
    import GUPnPIgd16 from 'gi://GUPnPIgd?version=1.6';
    export default GUPnPIgd16;
}
