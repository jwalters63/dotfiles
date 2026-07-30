declare module 'gi://Libproxy?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Libproxy {
    function proxy_factory_free_proxies(proxies: string[]): void;
    class ProxyFactory {
        static $gtype: GObject.GType<ProxyFactory>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ProxyFactory;
        static free_proxies(proxies: string[]): void;
        free(): void;
        get_proxies(url: string): string[];
    }
    const __name__: string;
    const __version__: string;
}
export default Libproxy;
}
declare module 'gi://Libproxy' {
    import Libproxy10 from 'gi://Libproxy?version=1.0';
    export default Libproxy10;
}
