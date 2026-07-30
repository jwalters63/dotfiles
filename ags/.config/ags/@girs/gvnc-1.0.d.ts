declare module 'gi://GVnc?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GVnc {
    enum AudioFormatType {
        U8,
        S8,
        U16,
        S16,
        U32,
        S32,
    }
    export namespace ConnectionAuth {
        export const $gtype: GObject.GType<ConnectionAuth>;
    }
    enum ConnectionAuth {
        INVALID,
        NONE,
        VNC,
        RA2,
        RA2NE,
        TIGHT,
        ULTRA,
        TLS,
        VENCRYPT,
        SASL,
        ARD,
        MSLOGONII,
        MSLOGON,
    }
    export namespace ConnectionAuthVencrypt {
        export const $gtype: GObject.GType<ConnectionAuthVencrypt>;
    }
    enum ConnectionAuthVencrypt {
        PLAIN,
        TLSNONE,
        TLSVNC,
        TLSPLAIN,
        X509NONE,
        X509VNC,
        X509PLAIN,
        X509SASL,
        TLSSASL,
    }
    export namespace ConnectionCredential {
        export const $gtype: GObject.GType<ConnectionCredential>;
    }
    enum ConnectionCredential {
        PASSWORD,
        USERNAME,
        CLIENTNAME,
        CA_CERT_DATA,
    }
    export namespace ConnectionEncoding {
        export const $gtype: GObject.GType<ConnectionEncoding>;
    }
    enum ConnectionEncoding {
        RAW,
        COPY_RECT,
        RRE,
        CORRE,
        HEXTILE,
        TIGHT,
        ZRLE,
        TIGHT_JPEG0,
        TIGHT_JPEG1,
        TIGHT_JPEG2,
        TIGHT_JPEG3,
        TIGHT_JPEG4,
        TIGHT_JPEG5,
        TIGHT_JPEG6,
        TIGHT_JPEG7,
        TIGHT_JPEG8,
        TIGHT_JPEG9,
        DESKTOP_RESIZE,
        LAST_RECT,
        WMVI,
        CURSOR_POS,
        RICH_CURSOR,
        XCURSOR,
        POINTER_CHANGE,
        EXT_KEY_EVENT,
        AUDIO,
        LED_STATE,
        DESKTOP_NAME,
        EXTENDED_DESKTOP_RESIZE,
        XVP,
        ALPHA_CURSOR,
    }
    export namespace ConnectionPowerAction {
        export const $gtype: GObject.GType<ConnectionPowerAction>;
    }
    enum ConnectionPowerAction {
        SHUTDOWN,
        REBOOT,
        RESET,
    }
    export namespace ConnectionResizeStatus {
        export const $gtype: GObject.GType<ConnectionResizeStatus>;
    }
    enum ConnectionResizeStatus {
        UNSUPPORTED,
        OK,
        ADMIN_PROHIBITED,
        OUT_OF_RESOURCES,
        INVALID_LAOUT,
        FORWARDED,
    }
    const LEDSTATE_CAPS_LOCK: number;
    const LEDSTATE_NUM_LOCK: number;
    const LEDSTATE_SCROLL_LOCK: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PADDING: number;
    const PADDING_LARGE: number;
    function util_check_version(major: number, minor: number, micro: number): boolean;
    function util_get_debug(): boolean;
    function util_get_version(): number;
    function util_get_version_string(): string;
    function util_set_debug(enabled: boolean): void;
    namespace BaseAudio {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "vnc-audio-playback-data": (arg0: AudioSample) => void;
            "vnc-audio-playback-start": (arg0: AudioFormat) => void;
            "vnc-audio-playback-stop": () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Audio.ConstructorProps {}
    }
    class BaseAudio extends GObject.Object implements Audio {
        static $gtype: GObject.GType<BaseAudio>;
        $signals: BaseAudio.SignalSignatures;
        constructor(properties?: Partial<BaseAudio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BaseAudio;
        connect<K extends keyof BaseAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseAudio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseAudio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseAudio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseAudio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_playback_data(sample: AudioSample): boolean;
        vfunc_playback_start(format: AudioFormat): boolean;
        vfunc_playback_stop(): boolean;
        playback_data(sample: AudioSample): void;
        playback_start(format: AudioFormat): void;
        playback_stop(): void;
    }
    namespace BaseFramebuffer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::color-map": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::local-format": (pspec: GObject.ParamSpec) => void;
            "notify::remote-format": (pspec: GObject.ParamSpec) => void;
            "notify::rowstride": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Framebuffer.ConstructorProps {
            buffer: never;
            color_map: ColorMap;
            colorMap: ColorMap;
            height: number;
            local_format: PixelFormat;
            localFormat: PixelFormat;
            remote_format: PixelFormat;
            remoteFormat: PixelFormat;
            rowstride: number;
            width: number;
        }
    }
    class BaseFramebuffer extends GObject.Object implements Framebuffer {
        static $gtype: GObject.GType<BaseFramebuffer>;
        get buffer(): null;
        get color_map(): ColorMap;
        set color_map(val: ColorMap);
        get colorMap(): ColorMap;
        set colorMap(val: ColorMap);
        get height(): number;
        get local_format(): PixelFormat;
        get localFormat(): PixelFormat;
        get remote_format(): PixelFormat;
        get remoteFormat(): PixelFormat;
        get rowstride(): number;
        get width(): number;
        $signals: BaseFramebuffer.SignalSignatures;
        constructor(properties?: Partial<BaseFramebuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Uint8Array | string, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer;
        connect<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseFramebuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseFramebuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        get_buffer(): Uint8Array;
        get_height(): number;
        get_local_format(): PixelFormat;
        get_remote_format(): PixelFormat;
        get_rowstride(): number;
        get_width(): number;
        perfect_format_match(): boolean;
        rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;
        set_color_map(map: ColorMap): void;
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
        vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;
        vfunc_get_buffer(): number;
        vfunc_get_height(): number;
        vfunc_get_local_format(): PixelFormat;
        vfunc_get_remote_format(): PixelFormat;
        vfunc_get_rowstride(): number;
        vfunc_get_width(): number;
        vfunc_perfect_format_match(): boolean;
        vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;
        vfunc_set_color_map(map: ColorMap): void;
        vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
    }
    namespace Connection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "vnc-auth-choose-subtype": (arg0: number, arg1: GObject.ValueArray) => void;
            "vnc-auth-choose-type": (arg0: GObject.ValueArray) => void;
            "vnc-auth-credential": (arg0: GObject.ValueArray) => void;
            "vnc-auth-failure": (arg0: string) => void;
            "vnc-auth-unsupported": (arg0: number) => void;
            "vnc-bell": () => void;
            "vnc-connected": () => void;
            "vnc-cursor-changed": (arg0: Cursor | null) => void;
            "vnc-desktop-rename": (arg0: string) => void;
            "vnc-desktop-resize": (arg0: number, arg1: number) => void;
            "vnc-disconnected": () => void;
            "vnc-error": (arg0: string) => void;
            "vnc-framebuffer-update": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            "vnc-initialized": () => void;
            "vnc-led-state": () => void;
            "vnc-pixel-format-changed": (arg0: PixelFormat) => void;
            "vnc-pointer-mode-changed": (arg0: boolean) => void;
            "vnc-power-control-failed": () => void;
            "vnc-power-control-initialized": () => void;
            "vnc-server-cut-text": (arg0: string) => void;
            "notify::framebuffer": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            framebuffer: Framebuffer;
        }
    }
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;
        get framebuffer(): Framebuffer;
        set framebuffer(val: Framebuffer);
        $signals: Connection.SignalSignatures;
        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Connection;
        connect<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Connection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void;
        vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void;
        vfunc_vnc_auth_credential(creds: GObject.ValueArray): void;
        vfunc_vnc_auth_failure(reason: string): void;
        vfunc_vnc_auth_unsupported(authType: number): void;
        vfunc_vnc_bell(): void;
        vfunc_vnc_connected(): void;
        vfunc_vnc_cursor_changed(cursor: Cursor): void;
        vfunc_vnc_desktop_rename(name: string): void;
        vfunc_vnc_desktop_resize(width: number, height: number): void;
        vfunc_vnc_disconnected(): void;
        vfunc_vnc_error(message: string): void;
        vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void;
        vfunc_vnc_initialized(): void;
        vfunc_vnc_led_state(): void;
        vfunc_vnc_pixel_format_changed(format: PixelFormat): void;
        vfunc_vnc_pointer_mode_changed(absPointer: boolean): void;
        vfunc_vnc_power_control_failed(): void;
        vfunc_vnc_power_control_initialized(): void;
        vfunc_vnc_server_cut_text(text: GLib.String): void;
        audio_disable(): boolean;
        audio_enable(): boolean;
        client_cut_text(data: null, length: bigint | number): boolean;
        framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean;
        get_abs_pointer(): boolean;
        get_audio_format(): AudioFormat;
        get_cursor(): Cursor;
        get_ext_key_event(): boolean;
        get_height(): number;
        get_ledstate(): number;
        get_name(): string;
        get_pixel_format(): PixelFormat;
        get_power_control(): boolean;
        get_shared(): boolean;
        get_width(): number;
        has_error(): boolean;
        is_initialized(): boolean;
        is_open(): boolean;
        key_event(down_flag: boolean, key: number, scancode: number): boolean;
        open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean;
        open_fd(fd: number): boolean;
        open_fd_with_hostname(fd: number, hostname: string | null): boolean;
        open_host(host: string, port: string): boolean;
        pointer_event(button_mask: number, x: number, y: number): boolean;
        power_control(action: ConnectionPowerAction): boolean;
        set_audio(audio: Audio): boolean;
        set_audio_format(fmt: AudioFormat): boolean;
        set_auth_subtype(type: number): boolean;
        set_auth_type(type: number): boolean;
        set_credential(type: number, data: string): boolean;
        set_encodings(encoding: number[]): boolean;
        set_framebuffer(fb: Framebuffer): boolean;
        set_pixel_format(fmt: PixelFormat): boolean;
        set_shared(shared: boolean): boolean;
        set_size(width: number, height: number): ConnectionResizeStatus;
        shutdown(): void;
    }
    namespace Cursor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::hotx": (pspec: GObject.ParamSpec) => void;
            "notify::hoty": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: never;
            height: number;
            hotx: number;
            hoty: number;
            width: number;
        }
    }
    class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;
        get data(): null;
        set data(val: never);
        get height(): number;
        set height(val: number);
        get hotx(): number;
        set hotx(val: number);
        get hoty(): number;
        set hoty(val: number);
        get width(): number;
        set width(val: number);
        $signals: Cursor.SignalSignatures;
        constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](data: Uint8Array | string, hotx: number, hoty: number, width: number, height: number): Cursor;
        connect<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(): Uint8Array;
        get_data(...args: never[]): any;
        get_height(): number;
        get_hotx(): number;
        get_hoty(): number;
        get_width(): number;
        is_visible(): boolean;
    }
    class AudioFormat {
        static $gtype: GObject.GType<AudioFormat>;
        format: number;
        nchannels: number;
        frequency: number;
        constructor(properties?: Partial<{
            format: number;
            nchannels: number;
            frequency: number;
        }>);
        static ["new"](): AudioFormat;
        copy(): AudioFormat;
        free(): void;
    }
    type AudioInterface = typeof Audio;
    class AudioSample {
        static $gtype: GObject.GType<AudioSample>;
        data: number;
        length: number;
        capacity: number;
        constructor(properties?: Partial<{
            data: number;
            length: number;
            capacity: number;
        }>);
        static ["new"](capacity: number): AudioSample;
        copy(): AudioSample;
        free(): void;
    }
    type BaseAudioClass = typeof BaseAudio;
    abstract class BaseAudioPrivate {
        static $gtype: GObject.GType<BaseAudioPrivate>;
    }
    type BaseFramebufferClass = typeof BaseFramebuffer;
    abstract class BaseFramebufferPrivate {
        static $gtype: GObject.GType<BaseFramebufferPrivate>;
    }
    class ColorMap {
        static $gtype: GObject.GType<ColorMap>;
        offset: number;
        size: number;
        colors: ColorMapEntry;
        constructor(properties?: Partial<{
            offset: number;
            size: number;
        }>);
        static ["new"](offset: number, size: number): ColorMap;
        copy(): ColorMap;
        free(): void;
        lookup(idx: number): [boolean, number, number, number];
        set(idx: number, red: number, green: number, blue: number): boolean;
    }
    class ColorMapEntry {
        static $gtype: GObject.GType<ColorMapEntry>;
        red: number;
        green: number;
        blue: number;
        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
        }>);
    }
    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }
    type CursorClass = typeof Cursor;
    abstract class CursorPrivate {
        static $gtype: GObject.GType<CursorPrivate>;
    }
    type FramebufferInterface = typeof Framebuffer;
    class PixelFormat {
        static $gtype: GObject.GType<PixelFormat>;
        bits_per_pixel: number;
        depth: number;
        byte_order: number;
        true_color_flag: number;
        red_max: number;
        green_max: number;
        blue_max: number;
        red_shift: number;
        green_shift: number;
        blue_shift: number;
        constructor(properties?: Partial<{
            bits_per_pixel: number;
            depth: number;
            byte_order: number;
            true_color_flag: number;
            red_max: number;
            green_max: number;
            blue_max: number;
            red_shift: number;
            green_shift: number;
            blue_shift: number;
        }>);
        static ["new"](): PixelFormat;
        copy(): PixelFormat;
        free(): void;
        match(other: PixelFormat): boolean;
    }
    namespace Audio {
        interface Interface {
            vfunc_playback_data(sample: AudioSample): boolean;
            vfunc_playback_start(format: AudioFormat): boolean;
            vfunc_playback_stop(): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface AudioNamespace {
        $gtype: GObject.GType<Audio>;
        prototype: Audio;
    }
    interface Audio extends GObject.Object, Audio.Interface {
        playback_data(sample: AudioSample): void;
        playback_start(format: AudioFormat): void;
        playback_stop(): void;
    }
    export const Audio: AudioNamespace & {
        new (): Audio; 
    };
    namespace Framebuffer {
        interface Interface {
            vfunc_blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
            vfunc_copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
            vfunc_fill(src: Uint8Array, x: number, y: number, width: number, height: number): void;
            vfunc_get_buffer(): number;
            vfunc_get_height(): number;
            vfunc_get_local_format(): PixelFormat;
            vfunc_get_remote_format(): PixelFormat;
            vfunc_get_rowstride(): number;
            vfunc_get_width(): number;
            vfunc_perfect_format_match(): boolean;
            vfunc_rgb24_blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void;
            vfunc_set_color_map(map: ColorMap): void;
            vfunc_set_pixel_at(src: Uint8Array, x: number, y: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface FramebufferNamespace {
        $gtype: GObject.GType<Framebuffer>;
        prototype: Framebuffer;
    }
    interface Framebuffer extends GObject.Object, Framebuffer.Interface {
        blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
        copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
        fill(src: Uint8Array | string, x: number, y: number, width: number, height: number): void;
        get_buffer(): Uint8Array;
        get_height(): number;
        get_local_format(): PixelFormat;
        get_remote_format(): PixelFormat;
        get_rowstride(): number;
        get_width(): number;
        perfect_format_match(): boolean;
        rgb24_blt(src: Uint8Array | string, rowstride: number, x: number, y: number, width: number, height: number): void;
        set_color_map(map: ColorMap): void;
        set_pixel_at(src: Uint8Array | string, x: number, y: number): void;
    }
    export const Framebuffer: FramebufferNamespace & {
        new (): Framebuffer; 
    };
    const __name__: string;
    const __version__: string;
}
export default GVnc;
}
declare module 'gi://GVnc' {
    import GVnc10 from 'gi://GVnc?version=1.0';
    export default GVnc10;
}
