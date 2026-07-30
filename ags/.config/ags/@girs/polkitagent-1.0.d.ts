declare module 'gi://PolkitAgent?version=1.0' {
import type Polkit from 'gi://Polkit?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace PolkitAgent {
    function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;
    export namespace RegisterFlags {
        export const $gtype: GObject.GType<RegisterFlags>;
    }
    enum RegisterFlags {
        NONE,
        RUN_IN_THREAD,
    }
    namespace Listener {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class Listener extends GObject.Object {
        static $gtype: GObject.GType<Listener>;
        $signals: Listener.SignalSignatures;
        constructor(properties?: Partial<Listener.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Listener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Listener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Listener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Listener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Listener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Listener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static unregister(registration_handle: null): void;
        vfunc_initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean;
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        initiate_authentication_finish(res: Gio.AsyncResult): boolean;
        register(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, cancellable: Gio.Cancellable | null): null;
        register_with_options(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): null;
    }
    namespace Session {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            completed: (arg0: boolean) => void;
            request: (arg0: string, arg1: boolean) => void;
            "show-error": (arg0: string) => void;
            "show-info": (arg0: string) => void;
            "notify::cookie": (pspec: GObject.ParamSpec) => void;
            "notify::identity": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cookie: string;
            identity: Polkit.Identity;
        }
    }
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        get cookie(): string;
        get identity(): Polkit.Identity;
        $signals: Session.SignalSignatures;
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](identity: Polkit.Identity, cookie: string): Session;
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel(): void;
        initiate(): void;
        response(response: string): void;
    }
    namespace TextListener {
        interface SignalSignatures extends Listener.SignalSignatures {
            "tty-attrs-changed": (arg0: boolean) => void;
            "notify::delay": (pspec: GObject.ParamSpec) => void;
            "notify::use-alternate-buffer": (pspec: GObject.ParamSpec) => void;
            "notify::use-color": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Listener.ConstructorProps, Gio.Initable.ConstructorProps {
            delay: number;
            use_alternate_buffer: boolean;
            useAlternateBuffer: boolean;
            use_color: boolean;
            useColor: boolean;
        }
    }
    class TextListener extends Listener implements Gio.Initable {
        static $gtype: GObject.GType<TextListener>;
        get delay(): number;
        get use_alternate_buffer(): boolean;
        get useAlternateBuffer(): boolean;
        get use_color(): boolean;
        get useColor(): boolean;
        $signals: TextListener.SignalSignatures;
        constructor(properties?: Partial<TextListener.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](cancellable: Gio.Cancellable | null): TextListener;
        connect<K extends keyof TextListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextListener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextListener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextListener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextListener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    type ListenerClass = typeof Listener;
    type SessionClass = typeof Session;
    const __name__: string;
    const __version__: string;
}
export default PolkitAgent;
}
declare module 'gi://PolkitAgent' {
    import PolkitAgent10 from 'gi://PolkitAgent?version=1.0';
    export default PolkitAgent10;
}
