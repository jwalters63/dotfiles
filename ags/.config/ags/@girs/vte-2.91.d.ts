declare module 'gi://Vte?version=2.91' {
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace Vte {
    export namespace Align {
        export const $gtype: GObject.GType<Align>;
    }
    enum Align {
        START,
        CENTER,
        END,
    }
    export namespace CursorBlinkMode {
        export const $gtype: GObject.GType<CursorBlinkMode>;
    }
    enum CursorBlinkMode {
        SYSTEM,
        ON,
        OFF,
    }
    export namespace CursorShape {
        export const $gtype: GObject.GType<CursorShape>;
    }
    enum CursorShape {
        BLOCK,
        IBEAM,
        UNDERLINE,
    }
    export namespace EraseBinding {
        export const $gtype: GObject.GType<EraseBinding>;
    }
    enum EraseBinding {
        AUTO,
        ASCII_BACKSPACE,
        ASCII_DELETE,
        DELETE_SEQUENCE,
        TTY,
    }
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }
    enum Format {
        TEXT,
        HTML,
    }
    export namespace ProgressHint {
        export const $gtype: GObject.GType<ProgressHint>;
    }
    enum ProgressHint {
        INACTIVE,
        ACTIVE,
        ERROR,
        INDETERMINATE,
        PAUSED,
    }
    export namespace PropertyId {
        export const $gtype: GObject.GType<PropertyId>;
    }
    enum PropertyId {
        CURRENT_DIRECTORY_URI,
        CURRENT_FILE_URI,
        XTERM_TITLE,
        CONTAINER_NAME,
        CONTAINER_RUNTIME,
        CONTAINER_UID,
        SHELL_PRECMD,
        SHELL_PREEXEC,
        SHELL_POSTEXEC,
        PROGRESS_HINT,
        PROGRESS_VALUE,
        ICON_COLOR,
        ICON_IMAGE,
    }
    export namespace PropertyType {
        export const $gtype: GObject.GType<PropertyType>;
    }
    enum PropertyType {
        VALUELESS,
        BOOL,
        INT,
        UINT,
        DOUBLE,
        RGB,
        RGBA,
        STRING,
        DATA,
        UUID,
        URI,
        IMAGE,
    }
    class PtyError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static PTY_HELPER_FAILED: number;
        static PTY98_FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class RegexError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INCOMPATIBLE: number;
        static NOT_SUPPORTED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace TextBlinkMode {
        export const $gtype: GObject.GType<TextBlinkMode>;
    }
    enum TextBlinkMode {
        NEVER,
        FOCUSED,
        UNFOCUSED,
        ALWAYS,
    }
    export namespace WriteFlags {
        export const $gtype: GObject.GType<WriteFlags>;
    }
    enum WriteFlags {
        DEFAULT,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const REGEX_FLAGS_DEFAULT: number;
    const SPAWN_NO_PARENT_ENVV: number;
    const SPAWN_NO_SYSTEMD_SCOPE: number;
    const SPAWN_REQUIRE_SYSTEMD_SCOPE: number;
    const TERMPROP_CONTAINER_NAME: string;
    const TERMPROP_CONTAINER_RUNTIME: string;
    const TERMPROP_CONTAINER_UID: string;
    const TERMPROP_CURRENT_DIRECTORY_URI: string;
    const TERMPROP_CURRENT_FILE_URI: string;
    const TERMPROP_ICON_COLOR: string;
    const TERMPROP_ICON_IMAGE: string;
    const TERMPROP_NAME_PREFIX: string;
    const TERMPROP_PROGRESS_HINT: string;
    const TERMPROP_PROGRESS_VALUE: string;
    const TERMPROP_SHELL_POSTEXEC: string;
    const TERMPROP_SHELL_PRECMD: string;
    const TERMPROP_SHELL_PREEXEC: string;
    const TERMPROP_XTERM_TITLE: string;
    const TEST_FLAGS_ALL: number;
    const TEST_FLAGS_NONE: number;
    function get_encoding_supported(encoding: string): boolean;
    function get_encodings(include_aliases: boolean): string[];
    function get_feature_flags(): FeatureFlags;
    function get_features(): string;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_termprops(): string[] | null;
    function get_user_shell(): string;
    function install_termprop(name: string, type: PropertyType, flags: PropertyFlags): number;
    function install_termprop_alias(name: string, target_name: string): number;
    function pty_error_quark(): GLib.Quark;
    function query_termprop(name: string): [boolean, string, number, PropertyType | null, PropertyFlags | null];
    function query_termprop_by_id(prop: number): [boolean, string, PropertyType | null, PropertyFlags | null];
    function regex_error_quark(): GLib.Quark;
    function uuid_validate_string(str: string, len: bigint | number, fmt: UuidFormat): boolean;
    interface SelectionFunc {
        (terminal: Terminal, column: number, row: number): boolean;
    }
    interface TerminalSpawnAsyncCallback {
        (terminal: Terminal, pid: GLib.Pid, error: GLib.Error | null): void;
    }
    enum FeatureFlags {
        FLAG_BIDI,
        FLAG_ICU,
        FLAG_SYSTEMD,
        FLAG_SIXEL,
        FLAGS_MASK,
    }
    export namespace PropertyFlags {
        export const $gtype: GObject.GType<PropertyFlags>;
    }
    enum PropertyFlags {
        NONE,
        EPHEMERAL,
    }
    export namespace PtyFlags {
        export const $gtype: GObject.GType<PtyFlags>;
    }
    enum PtyFlags {
        NO_LASTLOG,
        NO_UTMP,
        NO_WTMP,
        NO_HELPER,
        NO_FALLBACK,
        NO_SESSION,
        NO_CTTY,
        DEFAULT,
    }
    export namespace UuidFormat {
        export const $gtype: GObject.GType<UuidFormat>;
    }
    enum UuidFormat {
        SIMPLE,
        BRACED,
        URN,
        ANY,
    }
    namespace Pty {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fd": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            fd: number;
            flags: PtyFlags;
        }
    }
    class Pty extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Pty>;
        get fd(): number;
        get flags(): PtyFlags;
        $signals: Pty.SignalSignatures;
        constructor(properties?: Partial<Pty.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_foreign_sync(fd: number, cancellable: Gio.Cancellable | null): Pty;
        static new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty;
        connect<K extends keyof Pty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pty.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        child_setup(): void;
        close(): void;
        get_fd(): number;
        get_size(): [boolean, number, number];
        set_size(rows: number, columns: number): boolean;
        set_utf8(utf8: boolean): boolean;
        spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Pid | null>;
        spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Pid | null> | void;
        spawn_finish(result: Gio.AsyncResult): [boolean, GLib.Pid | null];
        spawn_with_fds_async(working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Terminal {
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            bell: () => void;
            "char-size-changed": (arg0: number, arg1: number) => void;
            "child-exited": (arg0: number) => void;
            commit: (arg0: string, arg1: number) => void;
            "contents-changed": () => void;
            "copy-clipboard": () => void;
            "current-directory-uri-changed": () => void;
            "current-file-uri-changed": () => void;
            "cursor-moved": () => void;
            "decrease-font-size": () => void;
            "deiconify-window": () => void;
            "encoding-changed": () => void;
            eof: () => void;
            "hyperlink-hover-uri-changed": (arg0: string, arg1: Gdk.Rectangle) => void;
            "icon-title-changed": () => void;
            "iconify-window": () => void;
            "increase-font-size": () => void;
            "lower-window": () => void;
            "maximize-window": () => void;
            "move-window": (arg0: number, arg1: number) => void;
            "paste-clipboard": () => void;
            "raise-window": () => void;
            "refresh-window": () => void;
            "resize-window": (arg0: number, arg1: number) => void;
            "restore-window": () => void;
            "selection-changed": () => void;
            "setup-context-menu": (arg0: EventContext | null) => void;
            "termprop-changed": (arg0: string) => void;
            "termprops-changed": (arg0: number[]) => boolean | void;
            "text-deleted": () => void;
            "text-inserted": () => void;
            "text-modified": () => void;
            "text-scrolled": (arg0: number) => void;
            "window-title-changed": () => void;
            "notify::allow-bold": (pspec: GObject.ParamSpec) => void;
            "notify::allow-hyperlink": (pspec: GObject.ParamSpec) => void;
            "notify::audible-bell": (pspec: GObject.ParamSpec) => void;
            "notify::backspace-binding": (pspec: GObject.ParamSpec) => void;
            "notify::bold-is-bright": (pspec: GObject.ParamSpec) => void;
            "notify::cell-height-scale": (pspec: GObject.ParamSpec) => void;
            "notify::cell-width-scale": (pspec: GObject.ParamSpec) => void;
            "notify::cjk-ambiguous-width": (pspec: GObject.ParamSpec) => void;
            "notify::context-menu": (pspec: GObject.ParamSpec) => void;
            "notify::context-menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::current-directory-uri": (pspec: GObject.ParamSpec) => void;
            "notify::current-file-uri": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-blink-mode": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-shape": (pspec: GObject.ParamSpec) => void;
            "notify::delete-binding": (pspec: GObject.ParamSpec) => void;
            "notify::enable-a11y": (pspec: GObject.ParamSpec) => void;
            "notify::enable-bidi": (pspec: GObject.ParamSpec) => void;
            "notify::enable-fallback-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::enable-legacy-osc777": (pspec: GObject.ParamSpec) => void;
            "notify::enable-shaping": (pspec: GObject.ParamSpec) => void;
            "notify::enable-sixel": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::font-options": (pspec: GObject.ParamSpec) => void;
            "notify::font-scale": (pspec: GObject.ParamSpec) => void;
            "notify::hyperlink-hover-uri": (pspec: GObject.ParamSpec) => void;
            "notify::icon-title": (pspec: GObject.ParamSpec) => void;
            "notify::input-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-autohide": (pspec: GObject.ParamSpec) => void;
            "notify::pty": (pspec: GObject.ParamSpec) => void;
            "notify::rewrap-on-resize": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-on-insert": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-on-keystroke": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-on-output": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-unit-is-pixels": (pspec: GObject.ParamSpec) => void;
            "notify::scrollback-lines": (pspec: GObject.ParamSpec) => void;
            "notify::text-blink-mode": (pspec: GObject.ParamSpec) => void;
            "notify::window-title": (pspec: GObject.ParamSpec) => void;
            "notify::word-char-exceptions": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xfill": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::yfill": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
            "termprop-changed::allow-bold": (arg0: string) => void;
            "termprop-changed::allow-hyperlink": (arg0: string) => void;
            "termprop-changed::audible-bell": (arg0: string) => void;
            "termprop-changed::backspace-binding": (arg0: string) => void;
            "termprop-changed::bold-is-bright": (arg0: string) => void;
            "termprop-changed::cell-height-scale": (arg0: string) => void;
            "termprop-changed::cell-width-scale": (arg0: string) => void;
            "termprop-changed::cjk-ambiguous-width": (arg0: string) => void;
            "termprop-changed::context-menu": (arg0: string) => void;
            "termprop-changed::context-menu-model": (arg0: string) => void;
            "termprop-changed::current-directory-uri": (arg0: string) => void;
            "termprop-changed::current-file-uri": (arg0: string) => void;
            "termprop-changed::cursor-blink-mode": (arg0: string) => void;
            "termprop-changed::cursor-shape": (arg0: string) => void;
            "termprop-changed::delete-binding": (arg0: string) => void;
            "termprop-changed::enable-a11y": (arg0: string) => void;
            "termprop-changed::enable-bidi": (arg0: string) => void;
            "termprop-changed::enable-fallback-scrolling": (arg0: string) => void;
            "termprop-changed::enable-legacy-osc777": (arg0: string) => void;
            "termprop-changed::enable-shaping": (arg0: string) => void;
            "termprop-changed::enable-sixel": (arg0: string) => void;
            "termprop-changed::encoding": (arg0: string) => void;
            "termprop-changed::font-desc": (arg0: string) => void;
            "termprop-changed::font-options": (arg0: string) => void;
            "termprop-changed::font-scale": (arg0: string) => void;
            "termprop-changed::hyperlink-hover-uri": (arg0: string) => void;
            "termprop-changed::icon-title": (arg0: string) => void;
            "termprop-changed::input-enabled": (arg0: string) => void;
            "termprop-changed::pointer-autohide": (arg0: string) => void;
            "termprop-changed::pty": (arg0: string) => void;
            "termprop-changed::rewrap-on-resize": (arg0: string) => void;
            "termprop-changed::scroll-on-insert": (arg0: string) => void;
            "termprop-changed::scroll-on-keystroke": (arg0: string) => void;
            "termprop-changed::scroll-on-output": (arg0: string) => void;
            "termprop-changed::scroll-unit-is-pixels": (arg0: string) => void;
            "termprop-changed::scrollback-lines": (arg0: string) => void;
            "termprop-changed::text-blink-mode": (arg0: string) => void;
            "termprop-changed::window-title": (arg0: string) => void;
            "termprop-changed::word-char-exceptions": (arg0: string) => void;
            "termprop-changed::xalign": (arg0: string) => void;
            "termprop-changed::xfill": (arg0: string) => void;
            "termprop-changed::yalign": (arg0: string) => void;
            "termprop-changed::yfill": (arg0: string) => void;
            "termprop-changed::app-paintable": (arg0: string) => void;
            "termprop-changed::can-default": (arg0: string) => void;
            "termprop-changed::can-focus": (arg0: string) => void;
            "termprop-changed::composite-child": (arg0: string) => void;
            "termprop-changed::double-buffered": (arg0: string) => void;
            "termprop-changed::events": (arg0: string) => void;
            "termprop-changed::expand": (arg0: string) => void;
            "termprop-changed::focus-on-click": (arg0: string) => void;
            "termprop-changed::halign": (arg0: string) => void;
            "termprop-changed::has-default": (arg0: string) => void;
            "termprop-changed::has-focus": (arg0: string) => void;
            "termprop-changed::has-tooltip": (arg0: string) => void;
            "termprop-changed::height-request": (arg0: string) => void;
            "termprop-changed::hexpand": (arg0: string) => void;
            "termprop-changed::hexpand-set": (arg0: string) => void;
            "termprop-changed::is-focus": (arg0: string) => void;
            "termprop-changed::margin": (arg0: string) => void;
            "termprop-changed::margin-bottom": (arg0: string) => void;
            "termprop-changed::margin-end": (arg0: string) => void;
            "termprop-changed::margin-left": (arg0: string) => void;
            "termprop-changed::margin-right": (arg0: string) => void;
            "termprop-changed::margin-start": (arg0: string) => void;
            "termprop-changed::margin-top": (arg0: string) => void;
            "termprop-changed::name": (arg0: string) => void;
            "termprop-changed::no-show-all": (arg0: string) => void;
            "termprop-changed::opacity": (arg0: string) => void;
            "termprop-changed::parent": (arg0: string) => void;
            "termprop-changed::receives-default": (arg0: string) => void;
            "termprop-changed::scale-factor": (arg0: string) => void;
            "termprop-changed::sensitive": (arg0: string) => void;
            "termprop-changed::style": (arg0: string) => void;
            "termprop-changed::tooltip-markup": (arg0: string) => void;
            "termprop-changed::tooltip-text": (arg0: string) => void;
            "termprop-changed::valign": (arg0: string) => void;
            "termprop-changed::vexpand": (arg0: string) => void;
            "termprop-changed::vexpand-set": (arg0: string) => void;
            "termprop-changed::visible": (arg0: string) => void;
            "termprop-changed::width-request": (arg0: string) => void;
            "termprop-changed::window": (arg0: string) => void;
            "termprop-changed::hadjustment": (arg0: string) => void;
            "termprop-changed::hscroll-policy": (arg0: string) => void;
            "termprop-changed::vadjustment": (arg0: string) => void;
            "termprop-changed::vscroll-policy": (arg0: string) => void;
            [key: `termprop-changed::${string}`]: (arg0: string) => void;
        }
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            allow_bold: boolean;
            allowBold: boolean;
            allow_hyperlink: boolean;
            allowHyperlink: boolean;
            audible_bell: boolean;
            audibleBell: boolean;
            backspace_binding: EraseBinding;
            backspaceBinding: EraseBinding;
            bold_is_bright: boolean;
            boldIsBright: boolean;
            cell_height_scale: number;
            cellHeightScale: number;
            cell_width_scale: number;
            cellWidthScale: number;
            cjk_ambiguous_width: number;
            cjkAmbiguousWidth: number;
            context_menu: Gtk.Menu | null;
            contextMenu: Gtk.Menu | null;
            context_menu_model: Gio.MenuModel | null;
            contextMenuModel: Gio.MenuModel | null;
            current_directory_uri: string | null;
            currentDirectoryUri: string | null;
            current_file_uri: string | null;
            currentFileUri: string | null;
            cursor_blink_mode: CursorBlinkMode;
            cursorBlinkMode: CursorBlinkMode;
            cursor_shape: CursorShape;
            cursorShape: CursorShape;
            delete_binding: EraseBinding;
            deleteBinding: EraseBinding;
            enable_a11y: boolean;
            enableA11y: boolean;
            enable_bidi: boolean;
            enableBidi: boolean;
            enable_fallback_scrolling: boolean;
            enableFallbackScrolling: boolean;
            enable_legacy_osc777: boolean;
            enableLegacyOsc777: boolean;
            enable_shaping: boolean;
            enableShaping: boolean;
            enable_sixel: boolean;
            enableSixel: boolean;
            encoding: string | null;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_options: cairo.FontOptions | null;
            fontOptions: cairo.FontOptions | null;
            font_scale: number;
            fontScale: number;
            hyperlink_hover_uri: string;
            hyperlinkHoverUri: string;
            icon_title: string | null;
            iconTitle: string | null;
            input_enabled: boolean;
            inputEnabled: boolean;
            pointer_autohide: boolean;
            pointerAutohide: boolean;
            pty: Pty | null;
            rewrap_on_resize: boolean;
            rewrapOnResize: boolean;
            scroll_on_insert: boolean;
            scrollOnInsert: boolean;
            scroll_on_keystroke: boolean;
            scrollOnKeystroke: boolean;
            scroll_on_output: boolean;
            scrollOnOutput: boolean;
            scroll_unit_is_pixels: boolean;
            scrollUnitIsPixels: boolean;
            scrollback_lines: number;
            scrollbackLines: number;
            text_blink_mode: TextBlinkMode;
            textBlinkMode: TextBlinkMode;
            window_title: string | null;
            windowTitle: string | null;
            word_char_exceptions: string | null;
            wordCharExceptions: string | null;
            xalign: Align;
            xfill: boolean;
            yalign: Align;
            yfill: boolean;
        }
    }
    class Terminal extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<Terminal>;
        get allow_bold(): boolean;
        set allow_bold(val: boolean);
        get allowBold(): boolean;
        set allowBold(val: boolean);
        get allow_hyperlink(): boolean;
        set allow_hyperlink(val: boolean);
        get allowHyperlink(): boolean;
        set allowHyperlink(val: boolean);
        get audible_bell(): boolean;
        set audible_bell(val: boolean);
        get audibleBell(): boolean;
        set audibleBell(val: boolean);
        get backspace_binding(): EraseBinding;
        set backspace_binding(val: EraseBinding);
        get backspaceBinding(): EraseBinding;
        set backspaceBinding(val: EraseBinding);
        get bold_is_bright(): boolean;
        set bold_is_bright(val: boolean);
        get boldIsBright(): boolean;
        set boldIsBright(val: boolean);
        get cell_height_scale(): number;
        set cell_height_scale(val: number);
        get cellHeightScale(): number;
        set cellHeightScale(val: number);
        get cell_width_scale(): number;
        set cell_width_scale(val: number);
        get cellWidthScale(): number;
        set cellWidthScale(val: number);
        get cjk_ambiguous_width(): number;
        set cjk_ambiguous_width(val: number);
        get cjkAmbiguousWidth(): number;
        set cjkAmbiguousWidth(val: number);
        get context_menu(): Gtk.Menu | null;
        set context_menu(val: Gtk.Menu | null);
        get contextMenu(): Gtk.Menu | null;
        set contextMenu(val: Gtk.Menu | null);
        get context_menu_model(): Gio.MenuModel | null;
        set context_menu_model(val: Gio.MenuModel | null);
        get contextMenuModel(): Gio.MenuModel | null;
        set contextMenuModel(val: Gio.MenuModel | null);
        get current_directory_uri(): string | null;
        get currentDirectoryUri(): string | null;
        get current_file_uri(): string | null;
        get currentFileUri(): string | null;
        get cursor_blink_mode(): CursorBlinkMode;
        set cursor_blink_mode(val: CursorBlinkMode);
        get cursorBlinkMode(): CursorBlinkMode;
        set cursorBlinkMode(val: CursorBlinkMode);
        get cursor_shape(): CursorShape;
        set cursor_shape(val: CursorShape);
        get cursorShape(): CursorShape;
        set cursorShape(val: CursorShape);
        get delete_binding(): EraseBinding;
        set delete_binding(val: EraseBinding);
        get deleteBinding(): EraseBinding;
        set deleteBinding(val: EraseBinding);
        get enable_a11y(): boolean;
        set enable_a11y(val: boolean);
        get enableA11y(): boolean;
        set enableA11y(val: boolean);
        get enable_bidi(): boolean;
        set enable_bidi(val: boolean);
        get enableBidi(): boolean;
        set enableBidi(val: boolean);
        get enable_fallback_scrolling(): boolean;
        set enable_fallback_scrolling(val: boolean);
        get enableFallbackScrolling(): boolean;
        set enableFallbackScrolling(val: boolean);
        get enable_legacy_osc777(): boolean;
        set enable_legacy_osc777(val: boolean);
        get enableLegacyOsc777(): boolean;
        set enableLegacyOsc777(val: boolean);
        get enable_shaping(): boolean;
        set enable_shaping(val: boolean);
        get enableShaping(): boolean;
        set enableShaping(val: boolean);
        get enable_sixel(): boolean;
        set enable_sixel(val: boolean);
        get enableSixel(): boolean;
        set enableSixel(val: boolean);
        get encoding(): string | null;
        set encoding(val: string | null);
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        get font_options(): cairo.FontOptions | null;
        set font_options(val: cairo.FontOptions | null);
        get fontOptions(): cairo.FontOptions | null;
        set fontOptions(val: cairo.FontOptions | null);
        get font_scale(): number;
        set font_scale(val: number);
        get fontScale(): number;
        set fontScale(val: number);
        get hyperlink_hover_uri(): string;
        get hyperlinkHoverUri(): string;
        get icon_title(): string | null;
        get iconTitle(): string | null;
        get input_enabled(): boolean;
        set input_enabled(val: boolean);
        get inputEnabled(): boolean;
        set inputEnabled(val: boolean);
        get pointer_autohide(): boolean;
        set pointer_autohide(val: boolean);
        get pointerAutohide(): boolean;
        set pointerAutohide(val: boolean);
        get pty(): Pty | null;
        set pty(val: Pty | null);
        get rewrap_on_resize(): boolean;
        set rewrap_on_resize(val: boolean);
        get rewrapOnResize(): boolean;
        set rewrapOnResize(val: boolean);
        get scroll_on_insert(): boolean;
        set scroll_on_insert(val: boolean);
        get scrollOnInsert(): boolean;
        set scrollOnInsert(val: boolean);
        get scroll_on_keystroke(): boolean;
        set scroll_on_keystroke(val: boolean);
        get scrollOnKeystroke(): boolean;
        set scrollOnKeystroke(val: boolean);
        get scroll_on_output(): boolean;
        set scroll_on_output(val: boolean);
        get scrollOnOutput(): boolean;
        set scrollOnOutput(val: boolean);
        get scroll_unit_is_pixels(): boolean;
        set scroll_unit_is_pixels(val: boolean);
        get scrollUnitIsPixels(): boolean;
        set scrollUnitIsPixels(val: boolean);
        get scrollback_lines(): number;
        set scrollback_lines(val: number);
        get scrollbackLines(): number;
        set scrollbackLines(val: number);
        get text_blink_mode(): TextBlinkMode;
        set text_blink_mode(val: TextBlinkMode);
        get textBlinkMode(): TextBlinkMode;
        set textBlinkMode(val: TextBlinkMode);
        get window_title(): string | null;
        get windowTitle(): string | null;
        get word_char_exceptions(): string | null;
        get wordCharExceptions(): string | null;
        get xalign(): Align;
        set xalign(val: Align);
        get xfill(): boolean;
        set xfill(val: boolean);
        get yalign(): Align;
        set yalign(val: Align);
        get yfill(): boolean;
        set yfill(val: boolean);
        $signals: Terminal.SignalSignatures;
        widget: Gtk.Widget;
        constructor(properties?: Partial<Terminal.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Terminal;
        connect<K extends keyof Terminal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Terminal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Terminal.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Terminal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bell(): void;
        vfunc_char_size_changed(char_width: number, char_height: number): void;
        vfunc_child_exited(status: number): void;
        vfunc_commit(text: string, size: number): void;
        vfunc_contents_changed(): void;
        vfunc_copy_clipboard(): void;
        vfunc_cursor_moved(): void;
        vfunc_decrease_font_size(): void;
        vfunc_deiconify_window(): void;
        vfunc_encoding_changed(): void;
        vfunc_eof(): void;
        vfunc_icon_title_changed(): void;
        vfunc_iconify_window(): void;
        vfunc_increase_font_size(): void;
        vfunc_lower_window(): void;
        vfunc_maximize_window(): void;
        vfunc_move_window(x: number, y: number): void;
        vfunc_paste_clipboard(): void;
        vfunc_raise_window(): void;
        vfunc_refresh_window(): void;
        vfunc_resize_window(width: number, height: number): void;
        vfunc_restore_window(): void;
        vfunc_selection_changed(): void;
        vfunc_setup_context_menu(context: EventContext): void;
        vfunc_termprop_changed(prop: string): void;
        vfunc_termprops_changed(props: number, n_props: number): boolean;
        vfunc_text_deleted(): void;
        vfunc_text_inserted(): void;
        vfunc_text_modified(): void;
        vfunc_text_scrolled(delta: number): void;
        vfunc_window_title_changed(): void;
        copy_clipboard(): void;
        copy_clipboard_format(format: Format): void;
        copy_primary(): void;
        dup_termprop_string(prop: string): [string | null, number];
        dup_termprop_string_by_id(prop: number): [string | null, number];
        dup_termprop_uuid(prop: string): Uuid | null;
        dup_termprop_uuid_by_id(prop: number): Uuid | null;
        event_check_gregex_simple(event: Gdk.Event, regexes: GLib.Regex[], match_flags: GLib.RegexMatchFlags): [boolean, string[]];
        event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): string[] | null;
        feed(data: Uint8Array | string | null): void;
        feed_child(text: Uint8Array | string | null): void;
        feed_child_binary(data: Uint8Array | string | null): void;
        get_allow_bold(): boolean;
        get_allow_hyperlink(): boolean;
        get_audible_bell(): boolean;
        get_bold_is_bright(): boolean;
        get_cell_height_scale(): number;
        get_cell_width_scale(): number;
        get_char_height(): number;
        get_char_width(): number;
        get_cjk_ambiguous_width(): number;
        get_color_background_for_draw(): Gdk.RGBA;
        get_column_count(): number;
        get_context_menu(): Gtk.Widget | null;
        get_context_menu_model(): Gio.MenuModel | null;
        get_current_directory_uri(): string | null;
        get_current_file_uri(): string | null;
        get_cursor_blink_mode(): CursorBlinkMode;
        get_cursor_position(): [number, number];
        get_cursor_shape(): CursorShape;
        get_enable_a11y(): boolean;
        get_enable_bidi(): boolean;
        get_enable_fallback_scrolling(): boolean;
        get_enable_legacy_osc777(): boolean;
        get_enable_shaping(): boolean;
        get_enable_sixel(): boolean;
        get_encoding(): string | null;
        get_font(): Pango.FontDescription;
        get_font_options(): cairo.FontOptions | null;
        get_font_scale(): number;
        get_geometry_hints(min_rows: number, min_columns: number): Gdk.Geometry;
        get_has_selection(): boolean;
        get_icon_title(): string | null;
        get_input_enabled(): boolean;
        get_mouse_autohide(): boolean;
        get_pty(): Pty | null;
        get_rewrap_on_resize(): boolean;
        get_row_count(): number;
        get_scroll_on_insert(): boolean;
        get_scroll_on_keystroke(): boolean;
        get_scroll_on_output(): boolean;
        get_scroll_unit_is_pixels(): boolean;
        get_scrollback_lines(): number;
        get_termprop_bool(prop: string): [boolean, boolean];
        get_termprop_bool_by_id(prop: number): [boolean, boolean];
        get_termprop_data(prop: string): Uint8Array | null;
        get_termprop_data_by_id(prop: number): Uint8Array | null;
        get_termprop_double(prop: string): [boolean, number];
        get_termprop_double_by_id(prop: number): [boolean, number];
        get_termprop_enum(prop: string, gtype: GObject.GType): [boolean, number];
        get_termprop_enum_by_id(prop: number, gtype: GObject.GType): [boolean, number];
        get_termprop_flags(prop: string, gtype: GObject.GType, ignore_unknown_flags: boolean): [boolean, number];
        get_termprop_flags_by_id(prop: number, gtype: GObject.GType, ignore_unknown_flags: boolean): [boolean, number];
        get_termprop_int(prop: string): [boolean, number];
        get_termprop_int_by_id(prop: number): [boolean, number];
        get_termprop_rgba(prop: string): [boolean, Gdk.RGBA | null];
        get_termprop_rgba_by_id(prop: number): [boolean, Gdk.RGBA | null];
        get_termprop_string(prop: string): [string | null, number];
        get_termprop_string_by_id(prop: number): [string | null, number];
        get_termprop_uint(prop: string): [boolean, number];
        get_termprop_uint_by_id(prop: number): [boolean, number];
        get_termprop_value(prop: string): [boolean, unknown | null];
        get_termprop_value_by_id(prop: number): [boolean, unknown | null];
        get_text(is_selected: SelectionFunc | null): [string | null, CharAttributes[] | null];
        get_text_blink_mode(): TextBlinkMode;
        get_text_format(format: Format): string | null;
        get_text_include_trailing_spaces(is_selected: SelectionFunc | null): [string, CharAttributes[] | null];
        get_text_range(start_row: bigint | number, start_col: bigint | number, end_row: bigint | number, end_col: bigint | number, is_selected: SelectionFunc | null): [string | null, CharAttributes[] | null];
        get_text_range_format(format: Format, start_row: bigint | number, start_col: bigint | number, end_row: bigint | number, end_col: bigint | number): [string | null, number];
        get_text_selected(format: Format): string | null;
        get_text_selected_full(format: Format): [string | null, number];
        get_window_title(): string | null;
        get_word_char_exceptions(): string | null;
        get_xalign(): Align;
        get_xfill(): boolean;
        get_yalign(): Align;
        get_yfill(): boolean;
        hyperlink_check_event(event: Gdk.Event): string | null;
        match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number;
        match_add_regex(regex: Regex, flags: number): number;
        match_check(column: bigint | number, row: bigint | number): [string | null, number];
        match_check_event(event: Gdk.Event): [string | null, number];
        match_remove(tag: number): void;
        match_remove_all(): void;
        match_set_cursor(tag: number, cursor: Gdk.Cursor | null): void;
        match_set_cursor_name(tag: number, cursor_name: string): void;
        match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType): void;
        paste_clipboard(): void;
        paste_primary(): void;
        paste_text(text: string): void;
        pty_new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty;
        ref_termprop_data_bytes(prop: string): GLib.Bytes | null;
        ref_termprop_data_bytes_by_id(prop: number): GLib.Bytes | null;
        ref_termprop_image_pixbuf(prop: string): GdkPixbuf.Pixbuf | null;
        ref_termprop_image_pixbuf_by_id(prop: number): GdkPixbuf.Pixbuf | null;
        ref_termprop_image_surface(prop: string): cairo.Surface | null;
        ref_termprop_image_surface_by_id(prop: number): cairo.Surface | null;
        ref_termprop_uri(prop: string): GLib.Uri | null;
        ref_termprop_uri_by_id(prop: number): GLib.Uri | null;
        ref_termprop_variant(prop: string): GLib.Variant | null;
        ref_termprop_variant_by_id(prop: number): GLib.Variant | null;
        reset(clear_tabstops: boolean, clear_history: boolean): void;
        reset_termprop(prop: string): void;
        reset_termprop_by_id(prop: number): void;
        search_find_next(): boolean;
        search_find_previous(): boolean;
        search_get_gregex(): GLib.Regex;
        search_get_regex(): Regex;
        search_get_wrap_around(): boolean;
        search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void;
        search_set_regex(regex: Regex | null, flags: number): void;
        search_set_wrap_around(wrap_around: boolean): void;
        select_all(): void;
        set_allow_bold(allow_bold: boolean): void;
        set_allow_hyperlink(allow_hyperlink: boolean): void;
        set_audible_bell(is_audible: boolean): void;
        set_backspace_binding(binding: EraseBinding): void;
        set_bold_is_bright(bold_is_bright: boolean): void;
        set_cell_height_scale(scale: number): void;
        set_cell_width_scale(scale: number): void;
        set_cjk_ambiguous_width(width: number): void;
        set_clear_background(setting: boolean): void;
        set_color_background(background: Gdk.RGBA): void;
        set_color_bold(bold: Gdk.RGBA | null): void;
        set_color_cursor(cursor_background: Gdk.RGBA | null): void;
        set_color_cursor_foreground(cursor_foreground: Gdk.RGBA | null): void;
        set_color_foreground(foreground: Gdk.RGBA): void;
        set_color_highlight(highlight_background: Gdk.RGBA | null): void;
        set_color_highlight_foreground(highlight_foreground: Gdk.RGBA | null): void;
        set_colors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void;
        set_context_menu(menu: Gtk.Widget | null): void;
        set_context_menu_model(model: Gio.MenuModel | null): void;
        set_cursor_blink_mode(mode: CursorBlinkMode): void;
        set_cursor_shape(shape: CursorShape): void;
        set_default_colors(): void;
        set_delete_binding(binding: EraseBinding): void;
        set_enable_a11y(enable_a11y: boolean): void;
        set_enable_bidi(enable_bidi: boolean): void;
        set_enable_fallback_scrolling(enable: boolean): void;
        set_enable_legacy_osc777(enable: boolean): void;
        set_enable_shaping(enable_shaping: boolean): void;
        set_enable_sixel(enabled: boolean): void;
        set_encoding(codeset: string | null): boolean;
        set_font(font_desc: Pango.FontDescription | null): void;
        set_font_options(font_options: cairo.FontOptions | null): void;
        set_font_scale(scale: number): void;
        set_geometry_hints_for_window(window: Gtk.Window): void;
        set_input_enabled(enabled: boolean): void;
        set_mouse_autohide(setting: boolean): void;
        set_pty(pty: Pty | null): void;
        set_rewrap_on_resize(rewrap: boolean): void;
        set_scroll_on_insert(scroll: boolean): void;
        set_scroll_on_keystroke(scroll: boolean): void;
        set_scroll_on_output(scroll: boolean): void;
        set_scroll_unit_is_pixels(enable: boolean): void;
        set_scrollback_lines(lines: bigint | number): void;
        set_size(columns: bigint | number, rows: bigint | number): void;
        set_suppress_legacy_signals(): void;
        set_text_blink_mode(text_blink_mode: TextBlinkMode): void;
        set_word_char_exceptions(exceptions: string): void;
        set_xalign(align: Align): void;
        set_xfill(fill: boolean): void;
        set_yalign(align: Align): void;
        set_yfill(fill: boolean): void;
        spawn_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null, callback: TerminalSpawnAsyncCallback | null): void;
        spawn_sync(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Pid | null];
        spawn_with_fds_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, timeout: number, cancellable: Gio.Cancellable | null, callback: TerminalSpawnAsyncCallback | null): void;
        unselect_all(): void;
        watch_child(child_pid: GLib.Pid): void;
        write_contents_sync(stream: Gio.OutputStream, flags: WriteFlags, cancellable: Gio.Cancellable | null): boolean;
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        get_name(): string;
        parser_finished(builder: Gtk.Builder): void;
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        set_name(name: string): void;
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        vfunc_get_name(): string;
        vfunc_parser_finished(builder: Gtk.Builder): void;
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        vfunc_set_name(name: string): void;
        get_border(): [boolean, Gtk.Border];
        get_hadjustment(): Gtk.Adjustment;
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        get_vadjustment(): Gtk.Adjustment;
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
        vfunc_get_border(): [boolean, Gtk.Border];
    }
    class CharAttributes {
        static $gtype: GObject.GType<CharAttributes>;
    }
    abstract class EventContext {
        static $gtype: GObject.GType<EventContext>;
        get_event(): Gdk.Event;
    }
    type PtyClass = typeof Pty;
    class Regex {
        static $gtype: GObject.GType<Regex>;
        constructor(pattern: string, pattern_length: bigint | number, flags: number);
        static new_for_match(pattern: string, pattern_length: bigint | number, flags: number): Regex;
        static new_for_match_full(pattern: string, pattern_length: bigint | number, flags: number, extra_flags: number): Regex;
        static new_for_search(pattern: string, pattern_length: bigint | number, flags: number): Regex;
        static new_for_search_full(pattern: string, pattern_length: bigint | number, flags: number, extra_flags: number): Regex;
        jit(flags: number): boolean;
        ref(): Regex;
        substitute(subject: string, replacement: string, flags: number): string;
        unref(): Regex;
    }
    type TerminalClass = typeof Terminal;
    abstract class TerminalClassPrivate {
        static $gtype: GObject.GType<TerminalClassPrivate>;
    }
    class Uuid {
        static $gtype: GObject.GType<Uuid>;
        constructor(properties?: Partial<{}>);
        static new_from_string(str: string, len: bigint | number, fmt: UuidFormat): Uuid;
        static new_v4(): Uuid;
        static validate_string(str: string, len: bigint | number, fmt: UuidFormat): boolean;
        dup(): Uuid;
        equal(other: Uuid): boolean;
        free(): void;
        free_to_string(fmt: UuidFormat, len: bigint | number): string;
        new_v5(data: string, len: bigint | number): Uuid;
        to_string(fmt: UuidFormat): [string, number];
    }
    const __name__: string;
    const __version__: string;
}
export default Vte;
}
declare module 'gi://Vte' {
    import Vte291 from 'gi://Vte?version=2.91';
    export default Vte291;
}
