declare module 'gi://GModule?version=2.0' {
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
export namespace GModule {
    class ModuleError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static CHECK_FAILED: number;
        constructor(options: { message: string; code: number });
    }
    const MODULE_IMPL_AR: number;
    const MODULE_IMPL_DL: number;
    const MODULE_IMPL_NONE: number;
    const MODULE_IMPL_WIN32: number;
    function module_build_path(directory: string | null, module_name: string): string;
    function module_error(): string;
    function module_error_quark(): GLib.Quark;
    function module_supported(): boolean;
    interface ModuleCheckInit {
        (module: Module): string;
    }
    interface ModuleUnload {
        (module: Module): void;
    }
    enum ModuleFlags {
        LAZY,
        LOCAL,
        MASK,
    }
    abstract class Module {
        static $gtype: GObject.GType<Module>;
        static build_path(directory: string | null, module_name: string): string;
        static error(): string;
        static error_quark(): GLib.Quark;
        static supported(): boolean;
        close(): boolean;
        make_resident(): void;
        name(): string;
        symbol(symbol_name: string): [boolean, null];
    }
    const __name__: string;
    const __version__: string;
}
export default GModule;
}
declare module 'gi://GModule' {
    import GModule20 from 'gi://GModule?version=2.0';
    export default GModule20;
}
