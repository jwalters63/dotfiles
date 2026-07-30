declare module 'gi://AstalIO?version=0.1' {
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace AstalIO {
    class AppError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NAME_OCCUPIED: number;
        static TAKEOVER_FAILED: number;
        constructor(options: { message: string; code: number });
    }
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const MICRO_VERSION: number;
    const VERSION: string;
    function acquire_socket(app: Application): [Gio.SocketService, string];
    function get_instances(): string[];
    function quit_instance(instance: string): void;
    function open_inspector(instance: string): void;
    function toggle_window_by_name(instance: string, window: string): void;
    function send_message(instance: string, request: string): string;
    function send_request(instance: string, request: string): string;
    function read_sock(conn: Gio.SocketConnection): globalThis.Promise<string>;
    function read_sock(conn: Gio.SocketConnection, _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null): void;
    function read_sock(conn: Gio.SocketConnection, _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null): globalThis.Promise<string> | void;
    function read_sock_finish(_res_: Gio.AsyncResult): string;
    function write_sock(conn: Gio.SocketConnection, response: string): globalThis.Promise<void>;
    function write_sock(conn: Gio.SocketConnection, response: string, _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null): void;
    function write_sock(conn: Gio.SocketConnection, response: string, _callback_: Gio.AsyncReadyCallback<Gio.SocketConnection> | null): globalThis.Promise<void> | void;
    function write_sock_finish(_res_: Gio.AsyncResult): void;
    function read_file(path: string): string;
    function read_file_async(path: string): globalThis.Promise<string>;
    function read_file_async(path: string, _callback_: Gio.AsyncReadyCallback<string> | null): void;
    function read_file_async(path: string, _callback_: Gio.AsyncReadyCallback<string> | null): globalThis.Promise<string> | void;
    function read_file_finish(_res_: Gio.AsyncResult): string;
    function write_file(path: string, content: string): void;
    function write_file_async(path: string, content: string): globalThis.Promise<void>;
    function write_file_async(path: string, content: string, _callback_: Gio.AsyncReadyCallback<string> | null): void;
    function write_file_async(path: string, content: string, _callback_: Gio.AsyncReadyCallback<string> | null): globalThis.Promise<void> | void;
    function write_file_finish(_res_: Gio.AsyncResult): void;
    function monitor_file(path: string, callback: GObject.Closure): Gio.FileMonitor | null;
    namespace Daemon {
        interface SignalSignatures extends Gio.Application.SignalSignatures {
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::inactivity-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::is-busy": (pspec: GObject.ParamSpec) => void;
            "notify::is-registered": (pspec: GObject.ParamSpec) => void;
            "notify::is-remote": (pspec: GObject.ParamSpec) => void;
            "notify::resource-base-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::instance-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.Application.ConstructorProps, Application.ConstructorProps {}
    }
    class Daemon extends Gio.Application implements Application {
        static $gtype: GObject.GType<Daemon>;
        $signals: Daemon.SignalSignatures;
        constructor(properties?: Partial<Daemon.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Daemon;
        connect<K extends keyof Daemon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Daemon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Daemon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Daemon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Daemon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Daemon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_request(request: string, conn: Gio.SocketConnection): void;
        request(request: string, conn: Gio.SocketConnection): void;
        get instance_name(): string;
        set instance_name(val: string);
        get instanceName(): string;
        set instanceName(val: string);
        quit(): void;
        inspector(): void;
        toggle_window(window: string): void;
        acquire_socket(): void;
        get_instance_name(): string;
        set_instance_name(value: string): void;
        vfunc_quit(): void;
        vfunc_inspector(): void;
        vfunc_toggle_window(window: string): void;
        vfunc_acquire_socket(): void;
        vfunc_get_instance_name(): string;
        vfunc_set_instance_name(value: string): void;
    }
    namespace Process {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            stdout: (arg0: string) => void;
            stderr: (arg0: string) => void;
            exit: (arg0: number, arg1: boolean) => void;
            "notify::argv": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            argv: string[];
        }
    }
    class Process extends GObject.Object {
        static $gtype: GObject.GType<Process>;
        get argv(): string[];
        $signals: Process.SignalSignatures;
        constructor(properties?: Partial<Process.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](cmd: string[]): Process;
        connect<K extends keyof Process.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Process.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Process.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Process.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Process.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Process.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static subprocessv(cmd: string[]): Process;
        static subprocess(cmd: string): Process;
        static execv(cmd: string[]): string;
        static exec(cmd: string): string;
        static exec_asyncv(cmd: string[], _callback_: Gio.AsyncReadyCallback<Process> | null): void;
        static exec_asyncv_finish(_res_: Gio.AsyncResult): string;
        static exec_async(cmd: string, _callback_: Gio.AsyncReadyCallback<Process> | null): void;
        static exec_finish(_res_: Gio.AsyncResult): string;
        kill(): void;
        signal(signal_num: number): void;
        write(_in: string): void;
        write_async(_in: string): globalThis.Promise<void>;
        write_async(_in: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        write_async(_in: string, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        write_finish(_res_: Gio.AsyncResult): void;
        get_argv(): string[];
    }
    namespace Time {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            now: () => void;
            cancelled: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Time extends GObject.Object {
        static $gtype: GObject.GType<Time>;
        $signals: Time.SignalSignatures;
        constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static interval_prio(interval: number, prio: number, fn: GObject.Closure | null): Time;
        static timeout_prio(timeout: number, prio: number, fn: GObject.Closure | null): Time;
        static idle_prio(prio: number, fn: GObject.Closure | null): Time;
        static ["new"](): Time;
        connect<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Time.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Time.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static interval(interval: number, fn: GObject.Closure | null): Time;
        static timeout(timeout: number, fn: GObject.Closure | null): Time;
        static idle(fn: GObject.Closure | null): Time;
        cancel(): void;
    }
    namespace VariableBase {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            dropped: () => void;
            error: (arg0: string) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class VariableBase extends GObject.Object {
        static $gtype: GObject.GType<VariableBase>;
        $signals: VariableBase.SignalSignatures;
        constructor(properties?: Partial<VariableBase.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VariableBase;
        connect<K extends keyof VariableBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VariableBase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VariableBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VariableBase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VariableBase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VariableBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        emit_changed(): void;
        emit_dropped(): void;
        emit_error(err: string): void;
    }
    namespace Variable {
        interface SignalSignatures extends VariableBase.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VariableBase.ConstructorProps {
            value: GObject.Value | any;
        }
    }
    class Variable extends VariableBase {
        static $gtype: GObject.GType<Variable>;
        get value(): unknown;
        set value(val: GObject.Value | any);
        $signals: Variable.SignalSignatures;
        constructor(properties?: Partial<Variable.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](init: GObject.Value | any): Variable;
        static ["new"](...args: never[]): any;
        connect<K extends keyof Variable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Variable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Variable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Variable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Variable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Variable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        poll(interval: number, exec: string, transform: GObject.Closure | null): Variable;
        pollv(interval: number, execv: string[], transform: GObject.Closure | null): Variable;
        pollfn(interval: number, fn: GObject.Closure): Variable;
        watch(exec: string, transform: GObject.Closure | null): Variable;
        watchv(execv: string[], transform: GObject.Closure | null): Variable;
        start_poll(): void;
        start_watch(): void;
        stop_poll(): void;
        stop_watch(): void;
        is_polling(): boolean;
        is_watching(): boolean;
        get_value(): unknown;
        set_value(value: GObject.Value | any): void;
    }
    type DaemonClass = typeof Daemon;
    abstract class DaemonPrivate {
        static $gtype: GObject.GType<DaemonPrivate>;
    }
    type ProcessClass = typeof Process;
    abstract class ProcessPrivate {
        static $gtype: GObject.GType<ProcessPrivate>;
    }
    type TimeClass = typeof Time;
    abstract class TimePrivate {
        static $gtype: GObject.GType<TimePrivate>;
    }
    type VariableBaseClass = typeof VariableBase;
    abstract class VariableBasePrivate {
        static $gtype: GObject.GType<VariableBasePrivate>;
    }
    type VariableClass = typeof Variable;
    abstract class VariablePrivate {
        static $gtype: GObject.GType<VariablePrivate>;
    }
    type ApplicationIface = typeof Application;
    namespace Application {
        interface Interface {
            vfunc_quit(): void;
            vfunc_inspector(): void;
            vfunc_toggle_window(window: string): void;
            vfunc_acquire_socket(): void;
            vfunc_request(request: string, conn: Gio.SocketConnection): void;
            vfunc_get_instance_name(): string;
            vfunc_set_instance_name(value: string): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            instance_name: string;
            instanceName: string;
        }
    }
    export interface ApplicationNamespace {
        $gtype: GObject.GType<Application>;
        prototype: Application;
    }
    interface Application extends GObject.Object, Application.Interface {
        get instance_name(): string;
        set instance_name(val: string);
        get instanceName(): string;
        set instanceName(val: string);
        quit(): void;
        inspector(): void;
        toggle_window(window: string): void;
        acquire_socket(): void;
        request(request: string, conn: Gio.SocketConnection): void;
        get_instance_name(): string;
        set_instance_name(value: string): void;
    }
    export const Application: ApplicationNamespace & {
        new (): Application; 
    };
    const __name__: string;
    const __version__: string;
}
export default AstalIO;
}
declare module 'gi://AstalIO' {
    import AstalIO01 from 'gi://AstalIO?version=0.1';
    export default AstalIO01;
}
