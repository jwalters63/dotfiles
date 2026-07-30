declare module 'gi://SoupGNOME?version=2.4' {
import type Soup from 'gi://Soup?version=2.4';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace SoupGNOME {
    const COOKIE_JAR_SQLITE_FILENAME: string;
    function gnome_features_2_26_get_type(): GObject.GType;
    namespace CookieJarSqlite {
        interface SignalSignatures extends Soup.CookieJarDB.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::accept-policy": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Soup.CookieJarDB.ConstructorProps, Soup.SessionFeature.ConstructorProps {}
    }
    class CookieJarSqlite extends Soup.CookieJarDB implements Soup.SessionFeature {
        static $gtype: GObject.GType<CookieJarSqlite>;
        $signals: CookieJarSqlite.SignalSignatures;
        constructor(properties?: Partial<CookieJarSqlite.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string, read_only: boolean): CookieJarSqlite;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarSqlite.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarSqlite.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieJarSqlite.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieJarSqlite.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace PasswordManagerGNOME {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, Soup.SessionFeature.ConstructorProps {}
    }
    class PasswordManagerGNOME extends GObject.Object implements Soup.SessionFeature {
        static $gtype: GObject.GType<PasswordManagerGNOME>;
        $signals: PasswordManagerGNOME.SignalSignatures;
        constructor(properties?: Partial<PasswordManagerGNOME.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasswordManagerGNOME.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasswordManagerGNOME.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PasswordManagerGNOME.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PasswordManagerGNOME.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Soup.Session): void;
        detach(session: Soup.Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Soup.Session): void;
        vfunc_detach(session: Soup.Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;
        vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;
        vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
    }
    namespace ProxyResolverGNOME {
        interface SignalSignatures extends Soup.ProxyResolverDefault.SignalSignatures {
            "notify::gproxy-resolver": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Soup.ProxyResolverDefault.ConstructorProps, Soup.ProxyURIResolver.ConstructorProps, Soup.SessionFeature.ConstructorProps {}
    }
    class ProxyResolverGNOME extends Soup.ProxyResolverDefault implements Soup.ProxyURIResolver, Soup.SessionFeature {
        static $gtype: GObject.GType<ProxyResolverGNOME>;
        $signals: ProxyResolverGNOME.SignalSignatures;
        constructor(properties?: Partial<ProxyResolverGNOME.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverGNOME.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverGNOME.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProxyResolverGNOME.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProxyResolverGNOME.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void;
        get_proxy_uri_sync(uri: Soup.URI, cancellable: Gio.Cancellable | null): [number, Soup.URI];
        vfunc_get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void;
        vfunc_get_proxy_uri_sync(uri: Soup.URI, cancellable: Gio.Cancellable | null): [number, Soup.URI];
        add_feature(type: GObject.GType): boolean;
        attach(session: Soup.Session): void;
        detach(session: Soup.Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Soup.Session): void;
        vfunc_detach(session: Soup.Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void;
        vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void;
        vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void;
    }
    type CookieJarSqliteClass = typeof CookieJarSqlite;
    const __name__: string;
    const __version__: string;
}
export default SoupGNOME;
}
declare module 'gi://SoupGNOME' {
    import SoupGNOME24 from 'gi://SoupGNOME?version=2.4';
    export default SoupGNOME24;
}
