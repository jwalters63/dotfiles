declare module 'gi://SpiceClientGLib?version=2.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
export namespace SpiceClientGLib {
    export namespace ChannelEvent {
        export const $gtype: GObject.GType<ChannelEvent>;
    }
    enum ChannelEvent {
        NONE,
        OPENED,
        SWITCHING,
        CLOSED,
        ERROR_CONNECT,
        ERROR_TLS,
        ERROR_LINK,
        ERROR_AUTH,
        ERROR_IO,
    }
    class ClientError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static USB_DEVICE_REJECTED: number;
        static USB_DEVICE_LOST: number;
        static AUTH_NEEDS_PASSWORD: number;
        static AUTH_NEEDS_USERNAME: number;
        static AUTH_NEEDS_PASSWORD_AND_USERNAME: number;
        static USB_SERVICE: number;
        constructor(options: { message: string; code: number });
    }
    enum QmpPortVmAction {
        QUIT,
        RESET,
        POWER_DOWN,
        PAUSE,
        CONTINUE,
        LAST,
    }
    export namespace SessionMigration {
        export const $gtype: GObject.GType<SessionMigration>;
    }
    enum SessionMigration {
        NONE,
        SWITCHING,
        MIGRATING,
        CONNECTING,
    }
    const GTK_MAJOR_VERSION: number;
    const GTK_MICRO_VERSION: number;
    const GTK_MINOR_VERSION: number;
    const WEBDAV_CLIPBOARD_FOLDER_PATH: string;
    function client_error_quark(): GLib.Quark;
    function display_get_gl_scanout(channel: DisplayChannel): GlScanout;
    function display_gl_draw_done(channel: DisplayChannel): void;
    function get_option_group(): GLib.OptionGroup;
    function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void;
    function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void;
    function inputs_key_press(channel: InputsChannel, scancode: number): void;
    function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void;
    function inputs_key_release(channel: InputsChannel, scancode: number): void;
    function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void;
    function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void;
    function inputs_set_key_locks(channel: InputsChannel, locks: number): void;
    function main_agent_test_capability(channel: MainChannel, cap: number): boolean;
    function main_clipboard_grab(channel: MainChannel, types: number[]): void;
    function main_clipboard_notify(channel: MainChannel, type: number, data: Uint8Array | string): void;
    function main_clipboard_release(channel: MainChannel): void;
    function main_clipboard_request(channel: MainChannel, type: number): void;
    function main_clipboard_selection_grab(channel: MainChannel, selection: number, types: number[]): void;
    function main_clipboard_selection_notify(channel: MainChannel, selection: number, type: number, data: Uint8Array | string): void;
    function main_clipboard_selection_release(channel: MainChannel, selection: number): void;
    function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void;
    function main_file_copy_async(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>;
    function main_file_copy_async(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<MainChannel> | null): void;
    function main_file_copy_async(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<MainChannel> | null): globalThis.Promise<boolean> | void;
    function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean;
    function main_request_mouse_mode(channel: MainChannel, mode: number): void;
    function main_send_monitor_config(channel: MainChannel): boolean;
    function main_set_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void;
    function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void;
    function main_update_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void;
    function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void;
    function port_event(port: PortChannel, event: number): void;
    function port_write_async(port: PortChannel, buffer: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<number>;
    function port_write_async(port: PortChannel, buffer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PortChannel> | null): void;
    function port_write_async(port: PortChannel, buffer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PortChannel> | null): globalThis.Promise<number> | void;
    function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number;
    function record_send_data(channel: RecordChannel, data: null, bytes: bigint | number, time: number): void;
    function set_session_option(session: Session): void;
    function util_get_debug(): boolean;
    function util_get_version_string(): string;
    function util_set_debug(enabled: boolean): void;
    function uuid_to_string(uuid: Uint8Array | string): string;
    interface msg_handler {
        (channel: Channel, _in: MsgIn): void;
    }
    type VReader = object | null;
    export namespace InputsLock {
        export const $gtype: GObject.GType<InputsLock>;
    }
    enum InputsLock {
        SCROLL_LOCK,
        NUM_LOCK,
        CAPS_LOCK,
    }
    export namespace SessionVerify {
        export const $gtype: GObject.GType<SessionVerify>;
    }
    enum SessionVerify {
        PUBKEY,
        HOSTNAME,
        SUBJECT,
    }
    namespace Audio {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::main-context": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_context: GLib.MainContext;
            mainContext: GLib.MainContext;
            session: Session;
        }
    }
    abstract class Audio extends GObject.Object {
        static $gtype: GObject.GType<Audio>;
        get main_context(): GLib.MainContext;
        get mainContext(): GLib.MainContext;
        get session(): Session;
        $signals: Audio.SignalSignatures;
        constructor(properties?: Partial<Audio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](session: Session, context: GLib.MainContext | null, name: string | null): Audio;
        connect<K extends keyof Audio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Audio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Audio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Audio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Audio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(session: Session, context: GLib.MainContext | null): Audio;
        vfunc_connect_channel(channel: Channel): boolean;
        vfunc_get_playback_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_get_playback_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean;
        vfunc_get_record_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_get_record_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean;
    }
    namespace Channel {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "channel-event": (arg0: ChannelEvent) => void;
            "open-fd": (arg0: number) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel_id: number;
            channelId: number;
            channel_type: number;
            channelType: number;
            socket: Gio.Socket;
            spice_session: Session;
            spiceSession: Session;
            total_read_bytes: bigint | number;
            totalReadBytes: bigint | number;
        }
    }
    class Channel extends GObject.Object {
        static $gtype: GObject.GType<Channel>;
        get channel_id(): number;
        get channelId(): number;
        get channel_type(): number;
        get channelType(): number;
        get socket(): Gio.Socket;
        get spice_session(): Session;
        get spiceSession(): Session;
        get total_read_bytes(): number;
        get totalReadBytes(): number;
        $signals: Channel.SignalSignatures;
        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](s: Session, type: number, id: number): Channel;
        connect<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Channel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static string_to_type(str: string): number;
        static type_to_string(type: number): string;
        vfunc_channel_event(event: ChannelEvent): void;
        vfunc_channel_reset(migrating: boolean): void;
        vfunc_channel_send_migration_handshake(): void;
        vfunc_channel_up(): void;
        vfunc_handle_msg(msg: MsgIn): void;
        vfunc_iterate_read(): void;
        vfunc_iterate_write(): void;
        vfunc_open_fd(with_tls: number): void;
        connect(): boolean;
        connect(...args: never[]): any;
        destroy(): void;
        disconnect(reason: ChannelEvent): void;
        disconnect(...args: never[]): any;
        flush_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        flush_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        flush_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        flush_finish(result: Gio.AsyncResult): boolean;
        get_error(): GLib.Error;
        open_fd(fd: number): boolean;
        set_capability(cap: number): void;
        test_capability(cap: number): boolean;
        test_common_capability(cap: number): boolean;
    }
    namespace CursorChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "cursor-hide": () => void;
            "cursor-move": (arg0: number, arg1: number) => void;
            "cursor-reset": () => void;
            "cursor-set": (arg0: number, arg1: number, arg2: number, arg3: number, arg4: null) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            cursor: CursorShape;
        }
    }
    class CursorChannel extends Channel {
        static $gtype: GObject.GType<CursorChannel>;
        get cursor(): CursorShape;
        $signals: CursorChannel.SignalSignatures;
        constructor(properties?: Partial<CursorChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof CursorChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CursorChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CursorChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CursorChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_cursor_hide(): void;
        vfunc_cursor_move(x: number, y: number): void;
        vfunc_cursor_reset(): void;
        vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba: null): void;
    }
    namespace DisplayChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "display-invalidate": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            "display-mark": (arg0: number) => void;
            "display-primary-create": (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: null) => void;
            "display-primary-destroy": () => void;
            "gl-draw": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            "gst-video-overlay": (arg0: Gst.Pipeline) => boolean | void;
            "streaming-mode": (arg0: boolean) => null;
            "notify::gl-scanout": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::monitors": (pspec: GObject.ParamSpec) => void;
            "notify::monitors-max": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            gl_scanout: GlScanout;
            glScanout: GlScanout;
            height: number;
            monitors: DisplayMonitorConfig[];
            monitors_max: number;
            monitorsMax: number;
            width: number;
        }
    }
    class DisplayChannel extends Channel {
        static $gtype: GObject.GType<DisplayChannel>;
        get gl_scanout(): GlScanout;
        get glScanout(): GlScanout;
        get height(): number;
        get monitors(): DisplayMonitorConfig[];
        get monitors_max(): number;
        get monitorsMax(): number;
        get width(): number;
        $signals: DisplayChannel.SignalSignatures;
        constructor(properties?: Partial<DisplayChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof DisplayChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DisplayChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DisplayChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DisplayChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        display_change_preferred_compression(compression: number): void;
        display_change_preferred_video_codec_type(codec_type: number): void;
        display_channel_change_preferred_compression(compression: number): void;
        display_channel_change_preferred_video_codec_type(codec_type: number): void;
        display_channel_change_preferred_video_codec_types(codecs: number[]): boolean;
        display_channel_get_primary(surface_id: number, primary: DisplayPrimary): boolean;
        display_get_primary(surface_id: number, primary: DisplayPrimary): boolean;
        get_gl_scanout(): GlScanout;
        gl_draw_done(): void;
    }
    namespace FileTransferTask {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            finished: (arg0: GLib.Error) => void;
            "notify::cancellable": (pspec: GObject.ParamSpec) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::total-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::transferred-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cancellable: Gio.Cancellable;
            channel: MainChannel;
            file: Gio.File;
            id: number;
            progress: number;
            total_bytes: bigint | number;
            totalBytes: bigint | number;
            transferred_bytes: bigint | number;
            transferredBytes: bigint | number;
        }
    }
    class FileTransferTask extends GObject.Object {
        static $gtype: GObject.GType<FileTransferTask>;
        get cancellable(): Gio.Cancellable;
        get channel(): MainChannel;
        get file(): Gio.File;
        get id(): number;
        get progress(): number;
        get total_bytes(): number;
        get totalBytes(): number;
        get transferred_bytes(): number;
        get transferredBytes(): number;
        $signals: FileTransferTask.SignalSignatures;
        constructor(properties?: Partial<FileTransferTask.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FileTransferTask.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileTransferTask.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileTransferTask.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileTransferTask.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileTransferTask.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileTransferTask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel(): void;
        get_filename(): string;
        get_progress(): number;
        get_total_bytes(): number;
        get_transferred_bytes(): number;
    }
    namespace InputsChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "inputs-modifiers": () => void;
            "notify::key-modifiers": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            key_modifiers: number;
            keyModifiers: number;
        }
    }
    class InputsChannel extends Channel {
        static $gtype: GObject.GType<InputsChannel>;
        get key_modifiers(): number;
        get keyModifiers(): number;
        $signals: InputsChannel.SignalSignatures;
        constructor(properties?: Partial<InputsChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof InputsChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputsChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputsChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputsChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        button_press(button: number, button_state: number): void;
        button_release(button: number, button_state: number): void;
        key_press(scancode: number): void;
        key_press_and_release(scancode: number): void;
        key_release(scancode: number): void;
        motion(dx: number, dy: number, button_state: number): void;
        position(x: number, y: number, display: number, button_state: number): void;
        set_key_locks(locks: number): void;
    }
    namespace MainChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "main-agent-update": () => void;
            "main-clipboard": (arg0: number, arg1: Uint8Array) => void;
            "main-clipboard-grab": (arg0: number[]) => boolean | void;
            "main-clipboard-release": () => void;
            "main-clipboard-request": (arg0: number) => boolean | void;
            "main-clipboard-selection": (arg0: number, arg1: number, arg2: Uint8Array) => void;
            "main-clipboard-selection-grab": (arg0: number, arg1: number[]) => boolean | void;
            "main-clipboard-selection-release": (arg0: number) => void;
            "main-clipboard-selection-request": (arg0: number, arg1: number) => boolean | void;
            "main-mouse-update": () => void;
            "migration-started": (arg0: GObject.Object) => void;
            "new-file-transfer": (arg0: GObject.Object) => void;
            "notify::agent-caps-0": (pspec: GObject.ParamSpec) => void;
            "notify::agent-caps0": (pspec: GObject.ParamSpec) => void;
            "notify::agent-connected": (pspec: GObject.ParamSpec) => void;
            "notify::color-depth": (pspec: GObject.ParamSpec) => void;
            "notify::disable-animation": (pspec: GObject.ParamSpec) => void;
            "notify::disable-display-align": (pspec: GObject.ParamSpec) => void;
            "notify::disable-display-position": (pspec: GObject.ParamSpec) => void;
            "notify::disable-font-smooth": (pspec: GObject.ParamSpec) => void;
            "notify::disable-wallpaper": (pspec: GObject.ParamSpec) => void;
            "notify::max-clipboard": (pspec: GObject.ParamSpec) => void;
            "notify::mouse-mode": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            agent_caps_0: number;
            agentCaps0: number;
            agent_connected: boolean;
            agentConnected: boolean;
            color_depth: number;
            colorDepth: number;
            disable_animation: boolean;
            disableAnimation: boolean;
            disable_display_align: boolean;
            disableDisplayAlign: boolean;
            disable_display_position: boolean;
            disableDisplayPosition: boolean;
            disable_font_smooth: boolean;
            disableFontSmooth: boolean;
            disable_wallpaper: boolean;
            disableWallpaper: boolean;
            max_clipboard: number;
            maxClipboard: number;
            mouse_mode: number;
            mouseMode: number;
        }
    }
    class MainChannel extends Channel {
        static $gtype: GObject.GType<MainChannel>;
        get agent_caps_0(): number;
        get agentCaps0(): number;
        get agent_connected(): boolean;
        get agentConnected(): boolean;
        get color_depth(): number;
        set color_depth(val: number);
        get colorDepth(): number;
        set colorDepth(val: number);
        get disable_animation(): boolean;
        set disable_animation(val: boolean);
        get disableAnimation(): boolean;
        set disableAnimation(val: boolean);
        get disable_display_align(): boolean;
        set disable_display_align(val: boolean);
        get disableDisplayAlign(): boolean;
        set disableDisplayAlign(val: boolean);
        get disable_display_position(): boolean;
        set disable_display_position(val: boolean);
        get disableDisplayPosition(): boolean;
        set disableDisplayPosition(val: boolean);
        get disable_font_smooth(): boolean;
        set disable_font_smooth(val: boolean);
        get disableFontSmooth(): boolean;
        set disableFontSmooth(val: boolean);
        get disable_wallpaper(): boolean;
        set disable_wallpaper(val: boolean);
        get disableWallpaper(): boolean;
        set disableWallpaper(val: boolean);
        get max_clipboard(): number;
        set max_clipboard(val: number);
        get maxClipboard(): number;
        set maxClipboard(val: number);
        get mouse_mode(): number;
        get mouseMode(): number;
        $signals: MainChannel.SignalSignatures;
        constructor(properties?: Partial<MainChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof MainChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MainChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        agent_test_capability(cap: number): boolean;
        clipboard_selection_grab(selection: number, types: number[]): void;
        clipboard_selection_notify(selection: number, type: number, data: Uint8Array | string): void;
        clipboard_selection_release(selection: number): void;
        clipboard_selection_request(selection: number, type: number): void;
        file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>;
        file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        file_copy_finish(result: Gio.AsyncResult): boolean;
        request_mouse_mode(mode: number): void;
        send_monitor_config(): boolean;
        update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void;
        update_display_enabled(id: number, enabled: boolean, update: boolean): void;
        update_display_mm(id: number, width_mm: number, height_mm: number, update: boolean): void;
    }
    namespace PlaybackChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "playback-data": (arg0: null, arg1: number) => void;
            "playback-get-delay": () => void;
            "playback-start": (arg0: number, arg1: number, arg2: number) => void;
            "playback-stop": () => void;
            "notify::min-latency": (pspec: GObject.ParamSpec) => void;
            "notify::mute": (pspec: GObject.ParamSpec) => void;
            "notify::nchannels": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            min_latency: number;
            minLatency: number;
            mute: boolean;
            nchannels: number;
            volume: never;
        }
    }
    class PlaybackChannel extends Channel {
        static $gtype: GObject.GType<PlaybackChannel>;
        get min_latency(): number;
        set min_latency(val: number);
        get minLatency(): number;
        set minLatency(val: number);
        get mute(): boolean;
        set mute(val: boolean);
        get nchannels(): number;
        set nchannels(val: number);
        get volume(): null;
        set volume(val: never);
        $signals: PlaybackChannel.SignalSignatures;
        constructor(properties?: Partial<PlaybackChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof PlaybackChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaybackChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlaybackChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaybackChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_playback_data(data: null, size: number): void;
        vfunc_playback_start(format: number, channels: number, freq: number): void;
        vfunc_playback_stop(): void;
        set_delay(delay_ms: number): void;
    }
    namespace PortChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "port-data": (arg0: null, arg1: number) => void;
            "port-event": (arg0: number) => void;
            "notify::port-name": (pspec: GObject.ParamSpec) => void;
            "notify::port-opened": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            port_name: string;
            portName: string;
            port_opened: boolean;
            portOpened: boolean;
        }
    }
    class PortChannel extends Channel {
        static $gtype: GObject.GType<PortChannel>;
        get port_name(): string;
        get portName(): string;
        get port_opened(): boolean;
        get portOpened(): boolean;
        $signals: PortChannel.SignalSignatures;
        constructor(properties?: Partial<PortChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof PortChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PortChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PortChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PortChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        event(event: number): void;
        write_async(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<number>;
        write_async(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        write_async(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;
        write_finish(result: Gio.AsyncResult): number;
    }
    namespace QmpPort {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            event: (arg0: string, arg1: null) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::ready": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel: PortChannel;
            ready: boolean;
        }
    }
    class QmpPort extends GObject.Object {
        static $gtype: GObject.GType<QmpPort>;
        get channel(): PortChannel;
        get ready(): boolean;
        $signals: QmpPort.SignalSignatures;
        constructor(properties?: Partial<QmpPort.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof QmpPort.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QmpPort.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof QmpPort.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QmpPort.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof QmpPort.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<QmpPort.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(channel: PortChannel): QmpPort;
        query_status_async(cancellable: Gio.Cancellable | null): globalThis.Promise<QmpStatus>;
        query_status_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        query_status_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<QmpStatus> | void;
        query_status_finish(result: Gio.AsyncResult): QmpStatus;
        vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        vm_action_finish(result: Gio.AsyncResult): boolean;
    }
    namespace RecordChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "record-start": (arg0: number, arg1: number, arg2: number) => void;
            "record-stop": () => void;
            "notify::mute": (pspec: GObject.ParamSpec) => void;
            "notify::nchannels": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {
            mute: boolean;
            nchannels: number;
            volume: never;
        }
    }
    class RecordChannel extends Channel {
        static $gtype: GObject.GType<RecordChannel>;
        get mute(): boolean;
        set mute(val: boolean);
        get nchannels(): number;
        set nchannels(val: number);
        get volume(): null;
        set volume(val: never);
        $signals: RecordChannel.SignalSignatures;
        constructor(properties?: Partial<RecordChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof RecordChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RecordChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RecordChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RecordChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_record_data(data: null, size: number): void;
        vfunc_record_start(format: number, channels: number, freq: number): void;
        vfunc_record_stop(): void;
        send_data(data: null, bytes: bigint | number, time: number): void;
    }
    namespace Session {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "channel-destroy": (arg0: Channel) => void;
            "channel-new": (arg0: Channel) => void;
            disconnected: () => void;
            "mm-time-reset": () => void;
            "notify::ca": (pspec: GObject.ParamSpec) => void;
            "notify::ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::cache-size": (pspec: GObject.ParamSpec) => void;
            "notify::cert-subject": (pspec: GObject.ParamSpec) => void;
            "notify::ciphers": (pspec: GObject.ParamSpec) => void;
            "notify::client-sockets": (pspec: GObject.ParamSpec) => void;
            "notify::color-depth": (pspec: GObject.ParamSpec) => void;
            "notify::disable-effects": (pspec: GObject.ParamSpec) => void;
            "notify::enable-audio": (pspec: GObject.ParamSpec) => void;
            "notify::enable-smartcard": (pspec: GObject.ParamSpec) => void;
            "notify::enable-usbredir": (pspec: GObject.ParamSpec) => void;
            "notify::gl-scanout": (pspec: GObject.ParamSpec) => void;
            "notify::glz-window-size": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::inhibit-keyboard-grab": (pspec: GObject.ParamSpec) => void;
            "notify::migration-state": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::proxy": (pspec: GObject.ParamSpec) => void;
            "notify::pubkey": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::secure-channels": (pspec: GObject.ParamSpec) => void;
            "notify::share-dir-ro": (pspec: GObject.ParamSpec) => void;
            "notify::shared-dir": (pspec: GObject.ParamSpec) => void;
            "notify::smartcard-certificates": (pspec: GObject.ParamSpec) => void;
            "notify::smartcard-db": (pspec: GObject.ParamSpec) => void;
            "notify::tls-port": (pspec: GObject.ParamSpec) => void;
            "notify::unix-path": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
            "notify::uuid": (pspec: GObject.ParamSpec) => void;
            "notify::verify": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ca: Uint8Array | string;
            ca_file: string;
            caFile: string;
            cache_size: number;
            cacheSize: number;
            cert_subject: string;
            certSubject: string;
            ciphers: string;
            client_sockets: boolean;
            clientSockets: boolean;
            color_depth: number;
            colorDepth: number;
            disable_effects: string[];
            disableEffects: string[];
            enable_audio: boolean;
            enableAudio: boolean;
            enable_smartcard: boolean;
            enableSmartcard: boolean;
            enable_usbredir: boolean;
            enableUsbredir: boolean;
            gl_scanout: boolean;
            glScanout: boolean;
            glz_window_size: number;
            glzWindowSize: number;
            host: string;
            inhibit_keyboard_grab: boolean;
            inhibitKeyboardGrab: boolean;
            migration_state: SessionMigration;
            migrationState: SessionMigration;
            name: string;
            password: string;
            port: string;
            protocol: number;
            proxy: string;
            pubkey: Uint8Array | string;
            read_only: boolean;
            readOnly: boolean;
            secure_channels: string[];
            secureChannels: string[];
            share_dir_ro: boolean;
            shareDirRo: boolean;
            shared_dir: string;
            sharedDir: string;
            smartcard_certificates: string[];
            smartcardCertificates: string[];
            smartcard_db: string;
            smartcardDb: string;
            tls_port: string;
            tlsPort: string;
            unix_path: string;
            unixPath: string;
            uri: string;
            username: string;
            uuid: never;
            verify: SessionVerify;
        }
    }
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        get ca(): Uint8Array;
        set ca(val: Uint8Array | string);
        get ca_file(): string;
        set ca_file(val: string);
        get caFile(): string;
        set caFile(val: string);
        get cache_size(): number;
        set cache_size(val: number);
        get cacheSize(): number;
        set cacheSize(val: number);
        get cert_subject(): string;
        set cert_subject(val: string);
        get certSubject(): string;
        set certSubject(val: string);
        get ciphers(): string;
        set ciphers(val: string);
        get client_sockets(): boolean;
        set client_sockets(val: boolean);
        get clientSockets(): boolean;
        set clientSockets(val: boolean);
        get color_depth(): number;
        set color_depth(val: number);
        get colorDepth(): number;
        set colorDepth(val: number);
        get disable_effects(): string[];
        set disable_effects(val: string[]);
        get disableEffects(): string[];
        set disableEffects(val: string[]);
        get enable_audio(): boolean;
        set enable_audio(val: boolean);
        get enableAudio(): boolean;
        set enableAudio(val: boolean);
        get enable_smartcard(): boolean;
        set enable_smartcard(val: boolean);
        get enableSmartcard(): boolean;
        set enableSmartcard(val: boolean);
        get enable_usbredir(): boolean;
        set enable_usbredir(val: boolean);
        get enableUsbredir(): boolean;
        set enableUsbredir(val: boolean);
        get gl_scanout(): boolean;
        set gl_scanout(val: boolean);
        get glScanout(): boolean;
        set glScanout(val: boolean);
        get glz_window_size(): number;
        set glz_window_size(val: number);
        get glzWindowSize(): number;
        set glzWindowSize(val: number);
        get host(): string;
        set host(val: string);
        get inhibit_keyboard_grab(): boolean;
        set inhibit_keyboard_grab(val: boolean);
        get inhibitKeyboardGrab(): boolean;
        set inhibitKeyboardGrab(val: boolean);
        get migration_state(): SessionMigration;
        get migrationState(): SessionMigration;
        get name(): string;
        get password(): string;
        set password(val: string);
        get port(): string;
        set port(val: string);
        get protocol(): number;
        set protocol(val: number);
        get proxy(): string;
        set proxy(val: string);
        get pubkey(): Uint8Array;
        set pubkey(val: Uint8Array | string);
        get read_only(): boolean;
        set read_only(val: boolean);
        get readOnly(): boolean;
        set readOnly(val: boolean);
        get secure_channels(): string[];
        set secure_channels(val: string[]);
        get secureChannels(): string[];
        set secureChannels(val: string[]);
        get share_dir_ro(): boolean;
        set share_dir_ro(val: boolean);
        get shareDirRo(): boolean;
        set shareDirRo(val: boolean);
        get shared_dir(): string;
        set shared_dir(val: string);
        get sharedDir(): string;
        set sharedDir(val: string);
        get smartcard_certificates(): string[];
        set smartcard_certificates(val: string[]);
        get smartcardCertificates(): string[];
        set smartcardCertificates(val: string[]);
        get smartcard_db(): string;
        set smartcard_db(val: string);
        get smartcardDb(): string;
        set smartcardDb(val: string);
        get tls_port(): string;
        set tls_port(val: string);
        get tlsPort(): string;
        set tlsPort(val: string);
        get unix_path(): string;
        set unix_path(val: string);
        get unixPath(): string;
        set unixPath(val: string);
        get uri(): string;
        set uri(val: string);
        get username(): string;
        set username(val: string);
        get uuid(): null;
        get verify(): SessionVerify;
        set verify(val: SessionVerify);
        $signals: Session.SignalSignatures;
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Session;
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_channel_destroy(channel: Channel): void;
        vfunc_channel_new(channel: Channel): void;
        connect(): boolean;
        connect(...args: never[]): any;
        disconnect(): void;
        get_channels(): Channel[];
        get_proxy_uri(): URI;
        get_read_only(): boolean;
        has_channel_type(type: number): boolean;
        is_for_migration(): boolean;
        open_fd(fd: number): boolean;
    }
    namespace SmartcardChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {}
    }
    class SmartcardChannel extends Channel {
        static $gtype: GObject.GType<SmartcardChannel>;
        $signals: SmartcardChannel.SignalSignatures;
        constructor(properties?: Partial<SmartcardChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof SmartcardChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SmartcardChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SmartcardChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SmartcardChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SmartcardManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "card-inserted": (arg0: VReader) => void;
            "card-removed": (arg0: VReader) => void;
            "reader-added": (arg0: VReader) => void;
            "reader-removed": (arg0: VReader) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SmartcardManager extends GObject.Object {
        static $gtype: GObject.GType<SmartcardManager>;
        $signals: SmartcardManager.SignalSignatures;
        constructor(properties?: Partial<SmartcardManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SmartcardManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SmartcardManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SmartcardManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SmartcardManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SmartcardManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SmartcardManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(): SmartcardManager;
        vfunc_card_inserted(reader: SmartcardReader): void;
        vfunc_card_removed(reader: SmartcardReader): void;
        vfunc_reader_added(reader: SmartcardReader): void;
        vfunc_reader_removed(reader: SmartcardReader): void;
        get_readers(): SmartcardReader[];
        insert_card(): boolean;
        remove_card(): boolean;
    }
    namespace URI {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::hostname": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::scheme": (pspec: GObject.ParamSpec) => void;
            "notify::user": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hostname: string;
            password: string;
            port: number;
            scheme: string;
            user: string;
        }
    }
    class URI extends GObject.Object {
        static $gtype: GObject.GType<URI>;
        get hostname(): string;
        set hostname(val: string);
        get password(): string;
        set password(val: string);
        get port(): number;
        set port(val: number);
        get scheme(): string;
        set scheme(val: string);
        get user(): string;
        set user(val: string);
        $signals: URI.SignalSignatures;
        constructor(properties?: Partial<URI.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof URI.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URI.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URI.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URI.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URI.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URI.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_hostname(): string;
        get_password(): string;
        get_port(): number;
        get_scheme(): string;
        get_user(): string;
        set_hostname(hostname: string): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_scheme(scheme: string): void;
        set_user(user: string): void;
        to_string(): string;
    }
    namespace UsbDeviceManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "auto-connect-failed": (arg0: UsbDevice, arg1: GLib.Error) => void;
            "device-added": (arg0: UsbDevice) => void;
            "device-error": (arg0: UsbDevice, arg1: GLib.Error) => void;
            "device-removed": (arg0: UsbDevice) => void;
            "notify::auto-connect": (pspec: GObject.ParamSpec) => void;
            "notify::auto-connect-filter": (pspec: GObject.ParamSpec) => void;
            "notify::free-channels": (pspec: GObject.ParamSpec) => void;
            "notify::redirect-on-connect": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            auto_connect: boolean;
            autoConnect: boolean;
            auto_connect_filter: string;
            autoConnectFilter: string;
            free_channels: number;
            freeChannels: number;
            redirect_on_connect: string;
            redirectOnConnect: string;
            session: Session;
        }
    }
    class UsbDeviceManager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<UsbDeviceManager>;
        get auto_connect(): boolean;
        set auto_connect(val: boolean);
        get autoConnect(): boolean;
        set autoConnect(val: boolean);
        get auto_connect_filter(): string;
        set auto_connect_filter(val: string);
        get autoConnectFilter(): string;
        set autoConnectFilter(val: string);
        get free_channels(): number;
        get freeChannels(): number;
        get redirect_on_connect(): string;
        set redirect_on_connect(val: string);
        get redirectOnConnect(): string;
        set redirectOnConnect(val: string);
        get session(): Session;
        $signals: UsbDeviceManager.SignalSignatures;
        constructor(properties?: Partial<UsbDeviceManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof UsbDeviceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UsbDeviceManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UsbDeviceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UsbDeviceManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UsbDeviceManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UsbDeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(session: Session): UsbDeviceManager;
        vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void;
        vfunc_device_added(device: UsbDevice): void;
        vfunc_device_error(device: UsbDevice, error: GLib.Error): void;
        vfunc_device_removed(device: UsbDevice): void;
        allocate_device_for_file_descriptor(file_descriptor: number): UsbDevice | null;
        can_redirect_device(device: UsbDevice): boolean;
        connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect_device_finish(res: Gio.AsyncResult): boolean;
        create_shared_cd_device(filename: string): boolean;
        disconnect_device(device: UsbDevice): void;
        disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disconnect_device_finish(res: Gio.AsyncResult): boolean;
        get_devices(): UsbDevice[];
        get_devices_with_filter(filter: string | null): UsbDevice[];
        is_device_connected(device: UsbDevice): boolean;
        is_device_shared_cd(device: UsbDevice): boolean;
        is_redirecting(): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace UsbredirChannel {
        interface SignalSignatures extends Channel.SignalSignatures {
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Channel.ConstructorProps {}
    }
    class UsbredirChannel extends Channel {
        static $gtype: GObject.GType<UsbredirChannel>;
        $signals: UsbredirChannel.SignalSignatures;
        constructor(properties?: Partial<UsbredirChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof UsbredirChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UsbredirChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UsbredirChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UsbredirChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebdavChannel {
        interface SignalSignatures extends PortChannel.SignalSignatures {
            "notify::port-name": (pspec: GObject.ParamSpec) => void;
            "notify::port-opened": (pspec: GObject.ParamSpec) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::channel-type": (pspec: GObject.ParamSpec) => void;
            "notify::socket": (pspec: GObject.ParamSpec) => void;
            "notify::spice-session": (pspec: GObject.ParamSpec) => void;
            "notify::total-read-bytes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PortChannel.ConstructorProps {}
    }
    class WebdavChannel extends PortChannel {
        static $gtype: GObject.GType<WebdavChannel>;
        $signals: WebdavChannel.SignalSignatures;
        constructor(properties?: Partial<WebdavChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect_after<K extends keyof WebdavChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebdavChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebdavChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebdavChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type AudioClass = typeof Audio;
    abstract class AudioPrivate {
        static $gtype: GObject.GType<AudioPrivate>;
    }
    type ChannelClass = typeof Channel;
    abstract class ChannelClassPrivate {
        static $gtype: GObject.GType<ChannelClassPrivate>;
    }
    abstract class ChannelPrivate {
        static $gtype: GObject.GType<ChannelPrivate>;
    }
    type CursorChannelClass = typeof CursorChannel;
    abstract class CursorChannelPrivate {
        static $gtype: GObject.GType<CursorChannelPrivate>;
    }
    class CursorShape {
        static $gtype: GObject.GType<CursorShape>;
        width: number;
        height: number;
        hot_spot_x: number;
        hot_spot_y: number;
        data: null;
        constructor(properties?: Partial<{
            type: unknown;
            width: number;
            height: number;
            hot_spot_x: number;
            hot_spot_y: number;
            data: null;
        }>);
    }
    type DisplayChannelClass = typeof DisplayChannel;
    abstract class DisplayChannelPrivate {
        static $gtype: GObject.GType<DisplayChannelPrivate>;
    }
    class DisplayMonitorConfig {
        static $gtype: GObject.GType<DisplayMonitorConfig>;
        id: number;
        surface_id: number;
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(properties?: Partial<{
            id: number;
            surface_id: number;
            x: number;
            y: number;
            width: number;
            height: number;
        }>);
    }
    class DisplayPrimary {
        static $gtype: GObject.GType<DisplayPrimary>;
        format: null;
        width: number;
        height: number;
        stride: number;
        shmid: number;
        data: number;
        marked: boolean;
        constructor(properties?: Partial<{
            format: null;
            width: number;
            height: number;
            stride: number;
            shmid: number;
            data: number;
            marked: boolean;
        }>);
    }
    type FileTransferTaskClass = typeof FileTransferTask;
    class GlScanout {
        static $gtype: GObject.GType<GlScanout>;
        fd: number;
        width: number;
        height: number;
        stride: number;
        format: number;
        y0top: boolean;
        constructor(properties?: Partial<{
            fd: number;
            width: number;
            height: number;
            stride: number;
            format: number;
            y0top: boolean;
        }>);
        free(): void;
    }
    type InputsChannelClass = typeof InputsChannel;
    abstract class InputsChannelPrivate {
        static $gtype: GObject.GType<InputsChannelPrivate>;
    }
    type MainChannelClass = typeof MainChannel;
    abstract class MainChannelPrivate {
        static $gtype: GObject.GType<MainChannelPrivate>;
    }
    abstract class MsgIn {
        static $gtype: GObject.GType<MsgIn>;
    }
    abstract class MsgOut {
        static $gtype: GObject.GType<MsgOut>;
    }
    type PlaybackChannelClass = typeof PlaybackChannel;
    abstract class PlaybackChannelPrivate {
        static $gtype: GObject.GType<PlaybackChannelPrivate>;
    }
    type PortChannelClass = typeof PortChannel;
    abstract class PortChannelPrivate {
        static $gtype: GObject.GType<PortChannelPrivate>;
    }
    type QmpPortClass = typeof QmpPort;
    class QmpStatus {
        static $gtype: GObject.GType<QmpStatus>;
        version: number;
        running: boolean;
        singlestep: boolean;
        status: string;
        constructor(properties?: Partial<{
            version: number;
            running: boolean;
            singlestep: boolean;
            status: string;
        }>);
        ref(): QmpStatus;
        unref(): void;
    }
    type RecordChannelClass = typeof RecordChannel;
    abstract class RecordChannelPrivate {
        static $gtype: GObject.GType<RecordChannelPrivate>;
    }
    type SessionClass = typeof Session;
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;
    }
    type SmartcardChannelClass = typeof SmartcardChannel;
    abstract class SmartcardChannelPrivate {
        static $gtype: GObject.GType<SmartcardChannelPrivate>;
    }
    type SmartcardManagerClass = typeof SmartcardManager;
    abstract class SmartcardManagerPrivate {
        static $gtype: GObject.GType<SmartcardManagerPrivate>;
    }
    abstract class SmartcardReader {
        static $gtype: GObject.GType<SmartcardReader>;
        insert_card(): boolean;
        is_software(): boolean;
        remove_card(): boolean;
    }
    type URIClass = typeof URI;
    abstract class URIPrivate {
        static $gtype: GObject.GType<URIPrivate>;
    }
    abstract class UsbDevice {
        static $gtype: GObject.GType<UsbDevice>;
        get_description(format: string | null): string;
        get_libusb_device(): null;
    }
    type UsbDeviceManagerClass = typeof UsbDeviceManager;
    abstract class UsbDeviceManagerPrivate {
        static $gtype: GObject.GType<UsbDeviceManagerPrivate>;
    }
    type UsbredirChannelClass = typeof UsbredirChannel;
    abstract class UsbredirChannelPrivate {
        static $gtype: GObject.GType<UsbredirChannelPrivate>;
    }
    type WebdavChannelClass = typeof WebdavChannel;
    abstract class WebdavChannelPrivate {
        static $gtype: GObject.GType<WebdavChannelPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default SpiceClientGLib;
}
declare module 'gi://SpiceClientGLib' {
    import SpiceClientGLib20 from 'gi://SpiceClientGLib?version=2.0';
    export default SpiceClientGLib20;
}
