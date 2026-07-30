declare module 'gi://LibvirtGLib?version=1.0' {
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
export namespace LibvirtGLib {
    function error_new_literal(domain: GLib.Quark, code: number, message: string): GLib.Error;
    function event_register(): void;
    function init(argv: string[] | null): string[] | null;
    function init_check(argv: string[] | null): [boolean, string[] | null];
    function set_error_literal(error: GLib.Error, domain: GLib.Quark, code: number, message: string): void;
    const __name__: string;
    const __version__: string;
}
export default LibvirtGLib;
}
declare module 'gi://LibvirtGLib' {
    import LibvirtGLib10 from 'gi://LibvirtGLib?version=1.0';
    export default LibvirtGLib10;
}
