declare module 'gi://GLibUnix?version=2.0' {
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
export namespace GLibUnix {
    enum PipeEnd {
        READ,
        WRITE,
    }
    function closefrom(lowfd: number): number;
    function error_quark(): GLib.Quark;
    function fd_add_full(priority: number, fd: number, condition: GLib.IOCondition, _function: FDSourceFunc): number;
    function fd_query_path(fd: number): string;
    function fd_source_new(fd: number, condition: GLib.IOCondition): GLib.Source;
    function fdwalk_set_cloexec(lowfd: number): number;
    function get_passwd_entry(user_name: string): null;
    function open_pipe(fds: number[], flags: number): boolean;
    function set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
    function signal_add(priority: number, signum: number, handler: GLib.SourceFunc): number;
    function signal_source_new(signum: number): GLib.Source;
    interface FDSourceFunc {
        (fd: number, condition: GLib.IOCondition): boolean;
    }
    class Pipe {
        static $gtype: GObject.GType<Pipe>;
        fds: number[];
        constructor(properties?: Partial<{
            fds: number[];
        }>);
    }
    const __name__: string;
    const __version__: string;
}
export default GLibUnix;
}
declare module 'gi://GLibUnix' {
    import GLibUnix20 from 'gi://GLibUnix?version=2.0';
    export default GLibUnix20;
}
