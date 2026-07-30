declare module 'gi://Libxfce4ui?version=2.0' {
import type Libxfce4util from 'gi://Libxfce4util?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace Libxfce4ui {
    enum GtkMenuItem {
        MENU_ITEM,
        IMAGE_MENU_ITEM,
        CHECK_MENU_ITEM,
        RADIO_MENU_ITEM,
    }
    enum SMClientPriority {
        HIGHEST,
        WM,
        CORE,
        DESKTOP,
        DEFAULT,
        LOWEST,
    }
    enum SMClientRestartStyle {
        NORMAL,
        IMMEDIATELY,
    }
    enum SMClientShutdownHint {
        ASK,
        LOGOUT,
        HALT,
        REBOOT,
    }
    enum SmCLientErrorEnum {
        FAILED,
        INVALID_CLIENT,
    }
    const BUTTON_TYPE_MIXED: string;
    const BUTTON_TYPE_PIXBUF: string;
    function dialog_confirm_close_tabs(parent: Gtk.Window | null, num_tabs: number, show_confirm_box: boolean, confirm_box_checked: boolean | null): number;
    function dialog_show_help(parent: Gtk.Window | null, component: string | null, page: string | null, offset: string | null): void;
    function dialog_show_help_with_version(parent: Gtk.Window | null, component: string | null, page: string | null, offset: string | null, version: string | null): void;
    function gdk_device_grab(seat: Gdk.Seat, window: Gdk.Window, capabilities: Gdk.SeatCapabilities, cursor: Gdk.Cursor | null): boolean;
    function gdk_screen_get_active(): [Gdk.Screen, number];
    function gdk_screen_get_geometry(): Gdk.Rectangle;
    function gicon_from_name(name: string): Gio.Icon;
    function gtk_accel_group_connect_action_entries(accel_group: Gtk.AccelGroup, action_entries: GtkActionEntry, n_action_entries: number, callback_data: null): void;
    function gtk_accel_group_disconnect_action_entries(accel_group: Gtk.AccelGroup, action_entries: GtkActionEntry, n_action_entries: number): void;
    function gtk_accel_map_add_entries(action_entries: GtkActionEntry, n_action_entries: number): void;
    function gtk_button_new_mixed(stock_id: string | null, label: string | null): Gtk.Widget;
    function gtk_check_menu_item_new(label_text: string, tooltip_text: string | null, accel_path: string | null, callback: GObject.Callback | null, callback_param: GObject.Object | null, active: boolean, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget;
    function gtk_execute_tab_accel(accel_path: string, data: null, entries: GtkActionEntry, entry_count: bigint | number): boolean;
    function gtk_frame_box_new(label: string): [Gtk.Widget, Gtk.Widget | null];
    function gtk_frame_box_new_with_content(label: string, content: Gtk.Widget): Gtk.Widget;
    function gtk_get_action_entry_by_id(action_entries: GtkActionEntry, n_action_entries: number, id: number): GtkActionEntry | null;
    function gtk_handle_tab_accels(key_event: Gdk.EventKey, accel_group: Gtk.AccelGroup, data: null, entries: GtkActionEntry, entry_count: bigint | number): boolean;
    function gtk_image_menu_item_new(label_text: string, tooltip_text: string | null, accel_path: string | null, callback: GObject.Callback | null, callback_param: GObject.Object | null, image: Gtk.Widget | null, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget;
    function gtk_image_menu_item_new_from_icon_name(label_text: string, tooltip_text: string | null, accel_path: string | null, callback: GObject.Callback | null, callback_param: GObject.Object | null, icon_name: string | null, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget;
    function gtk_label_set_a11y_relation(label: Gtk.Label, widget: Gtk.Widget): void;
    function gtk_menu_append_separator(menu: Gtk.MenuShell): void;
    function gtk_menu_append_seperator(menu: Gtk.MenuShell): void;
    function gtk_menu_item_new(label_text: string, tooltip_text: string | null, accel_path: string | null, callback: GObject.Callback | null, callback_param: GObject.Object | null, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget;
    function gtk_menu_item_new_from_action_entry(action_entry: GtkActionEntry, callback_param: GObject.Object | null, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget | null;
    function gtk_menu_item_set_accel_label(menu_item: Gtk.MenuItem, accel_path: string | null): void;
    function gtk_menu_popup_until_mapped(menu: Gtk.Menu, parent_menu_shell: Gtk.Widget | null, parent_menu_item: Gtk.Widget | null, func: Gtk.MenuPositionFunc | null, button: number, activate_time: number): boolean;
    function gtk_radio_menu_item_new(label_text: string, tooltip_text: string | null, accel_path: string | null, callback: GObject.Callback | null, callback_param: GObject.Object | null, active: boolean, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget;
    function gtk_toggle_menu_item_new_from_action_entry(action_entry: GtkActionEntry, callback_param: GObject.Object | null, active: boolean, menu_to_append_item: Gtk.MenuShell | null): Gtk.Widget | null;
    function gtk_toggle_tool_button_new_from_action_entry(action_entry: GtkActionEntry, callback_param: GObject.Object | null, active: boolean, toolbar_to_append_item: Gtk.Toolbar): Gtk.Widget;
    function gtk_tool_button_new_from_action_entry(action_entry: GtkActionEntry, callback_param: GObject.Object | null, toolbar_to_append_item: Gtk.Toolbar): Gtk.Widget;
    function gtk_translate_action_entries(action_entries: GtkActionEntry, n_action_entries: number): void;
    function gtk_window_center_on_active_screen(window: Gtk.Window): void;
    function has_gtk_frame_extents(window: Gdk.Window, extents: Gtk.Border): boolean;
    function icon_name_from_desktop_id(desktop_id: string): string;
    function spawn(screen: Gdk.Screen | null, working_directory: string | null, argv: string, envp: string | null, flags: GLib.SpawnFlags, startup_notify: boolean, startup_timestamp: number, startup_icon_name: string | null, child_process: boolean): boolean;
    function spawn_command_line(screen: Gdk.Screen | null, command_line: string, in_terminal: boolean, startup_notify: boolean, child_process: boolean): boolean;
    function spawn_command_line_on_screen(screen: Gdk.Screen | null, command_line: string, in_terminal: boolean, startup_notify: boolean): boolean;
    function spawn_on_screen(screen: Gdk.Screen | null, working_directory: string | null, argv: string, envp: string | null, flags: GLib.SpawnFlags, startup_notify: boolean, startup_timestamp: number, startup_icon_name: string | null): boolean;
    function spawn_on_screen_with_child_watch(screen: Gdk.Screen | null, working_directory: string | null, argv: string, envp: string | null, flags: GLib.SpawnFlags, startup_notify: boolean, startup_timestamp: number, startup_icon_name: string | null, child_watch_closure: GObject.Closure | null): boolean;
    function widget_reparent(widget: Gtk.Widget, new_parent: Gtk.Widget): boolean;
    namespace ClipboardManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ClipboardManager extends GObject.Object {
        static $gtype: GObject.GType<ClipboardManager>;
        $signals: ClipboardManager.SignalSignatures;
        constructor(properties?: Partial<ClipboardManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](replace: boolean): ClipboardManager;
        connect<K extends keyof ClipboardManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipboardManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipboardManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipboardManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipboardManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClipboardManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace FilenameInput {
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "text-invalid": () => void;
            "text-valid": () => void;
            "notify::max-text-length": (pspec: GObject.ParamSpec) => void;
            "notify::original-filename": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            max_text_length: number;
            maxTextLength: number;
            original_filename: string;
            originalFilename: string;
        }
    }
    class FilenameInput extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<FilenameInput>;
        set max_text_length(val: number);
        set maxTextLength(val: number);
        set original_filename(val: string);
        set originalFilename(val: string);
        $signals: FilenameInput.SignalSignatures;
        constructor(properties?: Partial<FilenameInput.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FilenameInput.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilenameInput.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilenameInput.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilenameInput.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilenameInput.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FilenameInput.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static desensitise_widget(widget: Gtk.Widget): void;
        static sensitise_widget(widget: Gtk.Widget): void;
        check(): void;
        get_entry(): Gtk.Entry;
        get_text(): string;
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        get_orientation(): Gtk.Orientation;
        set_orientation(orientation: Gtk.Orientation): void;
    }
    namespace SMClient {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            quit: () => void;
            "quit-cancelled": () => void;
            "quit-requested": () => boolean | void;
            "save-state": () => void;
            "save-state-extended": () => void;
            "notify::argc": (pspec: GObject.ParamSpec) => void;
            "notify::argv": (pspec: GObject.ParamSpec) => void;
            "notify::client-id": (pspec: GObject.ParamSpec) => void;
            "notify::current-directory": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-file": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::restart-command": (pspec: GObject.ParamSpec) => void;
            "notify::resumed": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            argc: number;
            argv: string[];
            client_id: string;
            clientId: string;
            current_directory: string;
            currentDirectory: string;
            desktop_file: string;
            desktopFile: string;
            priority: number;
            restart_command: string[];
            restartCommand: string[];
            resumed: boolean;
        }
    }
    class SMClient extends GObject.Object {
        static $gtype: GObject.GType<SMClient>;
        set argc(val: number);
        set argv(val: string[]);
        get client_id(): string;
        get clientId(): string;
        get current_directory(): string;
        set current_directory(val: string);
        get currentDirectory(): string;
        set currentDirectory(val: string);
        get desktop_file(): string;
        set desktop_file(val: string);
        get desktopFile(): string;
        set desktopFile(val: string);
        get priority(): number;
        set priority(val: number);
        get restart_command(): string[];
        set restart_command(val: string[]);
        get restartCommand(): string[];
        set restartCommand(val: string[]);
        get resumed(): boolean;
        $signals: SMClient.SignalSignatures;
        constructor(properties?: Partial<SMClient.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static get(): SMClient;
        static get_full(restart_style: SMClientRestartStyle, priority: number, resumed_client_id: string, current_directory: string, restart_command: string, desktop_file: string): SMClient;
        static get_with_argv(argc: number, argv: string, restart_style: SMClientRestartStyle, priority: number): SMClient;
        connect<K extends keyof SMClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SMClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SMClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SMClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SMClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SMClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        static get_option_group(argc: number, argv: string): GLib.OptionGroup;
        connect(): boolean;
        connect(...args: never[]): any;
        disconnect(): void;
        get_client_id(): string;
        get_current_directory(): string;
        get_priority(): number;
        get_restart_command(): string[];
        get_restart_style(): SMClientRestartStyle;
        get_state_file(): string;
        is_connected(): boolean;
        is_resumed(): boolean;
        request_shutdown(shutdown_hint: SMClientShutdownHint): void;
        set_current_directory(current_directory: string): void;
        set_desktop_file(desktop_file: string): void;
        set_priority(priority: number): void;
        set_restart_command(restart_command: string): void;
        set_restart_style(restart_style: SMClientRestartStyle): void;
    }
    namespace Screensaver {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::heartbeat-command": (pspec: GObject.ParamSpec) => void;
            "notify::lock-command": (pspec: GObject.ParamSpec) => void;
            "notify::lock-on-sleep": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            heartbeat_command: string;
            heartbeatCommand: string;
            lock_command: string;
            lockCommand: string;
            lock_on_sleep: boolean;
            lockOnSleep: boolean;
        }
    }
    class Screensaver extends GObject.Object {
        static $gtype: GObject.GType<Screensaver>;
        get heartbeat_command(): string;
        set heartbeat_command(val: string);
        get heartbeatCommand(): string;
        set heartbeatCommand(val: string);
        get lock_command(): string;
        set lock_command(val: string);
        get lockCommand(): string;
        set lockCommand(val: string);
        get lock_on_sleep(): boolean;
        set lock_on_sleep(val: boolean);
        get lockOnSleep(): boolean;
        set lockOnSleep(val: boolean);
        $signals: Screensaver.SignalSignatures;
        constructor(properties?: Partial<Screensaver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Screensaver;
        connect<K extends keyof Screensaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screensaver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Screensaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screensaver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Screensaver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screensaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        inhibit(inhibit: boolean): void;
        lock(): boolean;
    }
    namespace TitledDialog {
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
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
        }
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            subtitle: string;
        }
    }
    class TitledDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<TitledDialog>;
        get subtitle(): string;
        set subtitle(val: string);
        $signals: TitledDialog.SignalSignatures;
        constructor(properties?: Partial<TitledDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): TitledDialog;
        connect<K extends keyof TitledDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TitledDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TitledDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TitledDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TitledDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TitledDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_action_widget(child: Gtk.Widget, response_id: number): void;
        add_button(button_text: string, response_id: number): Gtk.Widget;
        create_action_area(): void;
        get_subtitle(): string;
        set_default_response(response_id: number): void;
        set_subtitle(subtitle: string | null): void;
    }
    type ClipboardManagerClass = typeof ClipboardManager;
    type FilenameInputClass = typeof FilenameInput;
    class GtkActionEntry {
        static $gtype: GObject.GType<GtkActionEntry>;
        id: number;
        accel_path: string;
        default_accelerator: string;
        menu_item_type: GtkMenuItem;
        menu_item_label_text: string;
        menu_item_tooltip_text: string;
        menu_item_icon_name: string;
        callback: GObject.Callback;
    }
    type ScreensaverClass = typeof Screensaver;
    type TitledDialogClass = typeof TitledDialog;
    abstract class TitledDialogPrivate {
        static $gtype: GObject.GType<TitledDialogPrivate>;
    }
    type ScreenSaver = Screensaver;
    const __name__: string;
    const __version__: string;
}
export default Libxfce4ui;
}
declare module 'gi://Libxfce4ui' {
    import Libxfce4ui20 from 'gi://Libxfce4ui?version=2.0';
    export default Libxfce4ui20;
}
