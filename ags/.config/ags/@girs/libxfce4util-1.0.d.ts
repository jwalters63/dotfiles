declare module 'gi://Libxfce4util?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Libxfce4util {
    enum LicenseTextType {
        BSD,
        GPL,
        LGPL,
    }
    enum ResourceType {
        DATA,
        CONFIG,
        CACHE,
        ICONS,
        THEMES,
    }
    const LOCALE_FULL_MATCH: number;
    const LOCALE_NO_MATCH: number;
    function append_quoted(string: GLib.String, unquoted: string): void;
    function create_shared_thumbnail_path(uri: string, size: string): string;
    function expand_desktop_entry_field_codes(command: string, uri_list: string[], icon: string, name: string, uri: string, requires_terminal: boolean): string;
    function expand_variables(command: string, envp: string): string;
    function g_file_create_checksum(file: Gio.File, cancellable: Gio.Cancellable | null): string | null;
    function g_file_is_trusted(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    function g_file_metadata_is_supported(file: Gio.File): boolean;
    function g_file_set_trusted(file: Gio.File, is_trusted: boolean, cancellable: Gio.Cancellable | null): boolean;
    function g_string_append_quoted(string: GLib.String, unquoted: string): void;
    function get_dir_localized(directory: string): string;
    function get_dir_localized_r(buffer: string, length: bigint | number, directory: string): string;
    function get_file_localized(filename: string): string;
    function get_file_localized_r(buffer: string, length: bigint | number, filename: string): string;
    function get_homedir(): string;
    function get_license_text(license_type: LicenseTextType): string;
    function get_path_localized(dst: string, size: bigint | number, paths: string, filename: string, test: GLib.FileTest): string;
    function get_userdir(): string;
    function gethostname(): string;
    function locale_match(locale1: string, locale2: string): number;
    function mkdirhier(whole_path: string, mode: bigint | number): boolean;
    function posix_signal_handler_init(): boolean;
    function posix_signal_handler_restore_handler(signal: number): void;
    function posix_signal_handler_set_handler(signal: number, handler: PosixSignalHandler): boolean;
    function posix_signal_handler_shutdown(): void;
    function rc_config_open(type: ResourceType, resource: string, readonly: boolean): Rc;
    function rc_simple_open(filename: string, readonly: boolean): Rc;
    function resource_dirs(type: ResourceType): string[];
    function resource_lookup(type: ResourceType, filename: string): string;
    function resource_lookup_all(type: ResourceType, filename: string): string[];
    function resource_match(type: ResourceType, pattern: string, unique: boolean): string[];
    function resource_match_custom(type: ResourceType, unique: boolean, func: MatchFunc): string[];
    function resource_pop_path(type: ResourceType): void;
    function resource_push_path(type: ResourceType, path: string): void;
    function resource_save_location(type: ResourceType, relpath: string, create: boolean): string;
    function str_replace(str: string, pattern: string, replacement: string): string | null;
    function textdomain(_package: string, localedir: string, encoding: string): void;
    function unescape_desktop_entry_value(value: string): string;
    function utf8_remove_controls(str: string, max_len: bigint | number, end: string): string;
    function utf8_strndup(src: string, max_len: bigint | number): string;
    function version_string(): string;
    interface MatchFunc {
        (basedir: string, relpath: string): boolean;
    }
    interface PosixSignalHandler {
        (signal: number): void;
    }
    namespace Consolekit {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Consolekit extends GObject.Object {
        static $gtype: GObject.GType<Consolekit>;
        $signals: Consolekit.SignalSignatures;
        constructor(properties?: Partial<Consolekit.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Consolekit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Consolekit.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Consolekit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Consolekit.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Consolekit.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Consolekit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(): Consolekit;
        can_hibernate(): [boolean, boolean, boolean];
        can_hybrid_sleep(): [boolean, boolean, boolean];
        can_power_off(): [boolean, boolean, boolean];
        can_reboot(): [boolean, boolean, boolean];
        can_suspend(): [boolean, boolean, boolean];
        hibernate(polkit_interactive: boolean): boolean;
        hybrid_sleep(polkit_interactive: boolean): boolean;
        power_off(polkit_interactive: boolean): boolean;
        reboot(polkit_interactive: boolean): boolean;
        suspend(polkit_interactive: boolean): boolean;
    }
    namespace Kiosk {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Kiosk extends GObject.Object {
        static $gtype: GObject.GType<Kiosk>;
        $signals: Kiosk.SignalSignatures;
        constructor(properties?: Partial<Kiosk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](module: string): Kiosk;
        connect<K extends keyof Kiosk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Kiosk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Kiosk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Kiosk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Kiosk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Kiosk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        free(): void;
        query(capability: string): boolean;
    }
    namespace Systemd {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Systemd extends GObject.Object {
        static $gtype: GObject.GType<Systemd>;
        $signals: Systemd.SignalSignatures;
        constructor(properties?: Partial<Systemd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Systemd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Systemd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Systemd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Systemd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Systemd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Systemd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(): Systemd;
        can_hibernate(): [boolean, boolean, boolean];
        can_hybrid_sleep(): [boolean, boolean, boolean];
        can_power_off(): [boolean, boolean, boolean];
        can_reboot(): [boolean, boolean, boolean];
        can_suspend(): [boolean, boolean, boolean];
        hibernate(polkit_interactive: boolean): boolean;
        hybrid_sleep(polkit_interactive: boolean): boolean;
        power_off(polkit_interactive: boolean): boolean;
        reboot(polkit_interactive: boolean): boolean;
        suspend(polkit_interactive: boolean): boolean;
    }
    type ConsolekitClass = typeof Consolekit;
    type KioskClass = typeof Kiosk;
    abstract class Rc {
        static $gtype: GObject.GType<Rc>;
        static config_open(type: ResourceType, resource: string, readonly: boolean): Rc;
        static simple_open(filename: string, readonly: boolean): Rc;
        close(): void;
        delete_entry(key: string, global: boolean): void;
        delete_group(group: string, global: boolean): void;
        flush(): void;
        get_entries(group: string): string[];
        get_group(): string;
        get_groups(): string[];
        get_locale(): string;
        has_entry(key: string): boolean;
        has_group(group: string): boolean;
        is_dirty(): boolean;
        is_readonly(): boolean;
        read_bool_entry(key: string, fallback: boolean): boolean;
        read_entry(key: string, fallback: string): string;
        read_entry_untranslated(key: string, fallback: string): string;
        read_int_entry(key: string, fallback: number): number;
        read_list_entry(key: string, delimiter: string): string[];
        rollback(): void;
        set_group(group: string): void;
        write_bool_entry(key: string, value: boolean): void;
        write_entry(key: string, value: string): void;
        write_int_entry(key: string, value: number): void;
        write_list_entry(key: string, value: string, separator: string): void;
    }
    type SystemdClass = typeof Systemd;
    const __name__: string;
    const __version__: string;
}
export default Libxfce4util;
}
declare module 'gi://Libxfce4util' {
    import Libxfce4util10 from 'gi://Libxfce4util?version=1.0';
    export default Libxfce4util10;
}
