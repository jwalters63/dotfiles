declare module 'gi://GstMse?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstMse {
    export namespace MediaSourceEOSError {
        export const $gtype: GObject.GType<MediaSourceEOSError>;
    }
    enum MediaSourceEOSError {
        NONE,
        NETWORK,
        DECODE,
    }
    class MediaSourceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_STATE: number;
        static TYPE: number;
        static NOT_SUPPORTED: number;
        static NOT_FOUND: number;
        static QUOTA_EXCEEDED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace MediaSourceReadyState {
        export const $gtype: GObject.GType<MediaSourceReadyState>;
    }
    enum MediaSourceReadyState {
        CLOSED,
        OPEN,
        ENDED,
    }
    export namespace MseSrcReadyState {
        export const $gtype: GObject.GType<MseSrcReadyState>;
    }
    enum MseSrcReadyState {
        NOTHING,
        METADATA,
        CURRENT_DATA,
        FUTURE_DATA,
        ENOUGH_DATA,
    }
    export namespace SourceBufferAppendMode {
        export const $gtype: GObject.GType<SourceBufferAppendMode>;
    }
    enum SourceBufferAppendMode {
        SEGMENTS,
        SEQUENCE,
    }
    function media_source_error_quark(): GLib.Quark;
    namespace MediaSource {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "on-source-close": () => void;
            "on-source-ended": () => void;
            "on-source-open": () => void;
            "notify::active-source-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::source-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            active_source_buffers: SourceBufferList;
            activeSourceBuffers: SourceBufferList;
            duration: bigint | number;
            position: bigint | number;
            ready_state: MediaSourceReadyState;
            readyState: MediaSourceReadyState;
            source_buffers: SourceBufferList;
            sourceBuffers: SourceBufferList;
        }
    }
    class MediaSource extends Gst.Object {
        static $gtype: GObject.GType<MediaSource>;
        get active_source_buffers(): SourceBufferList;
        get activeSourceBuffers(): SourceBufferList;
        get duration(): number;
        set duration(val: bigint | number);
        get position(): number;
        set position(val: bigint | number);
        get ready_state(): MediaSourceReadyState;
        get readyState(): MediaSourceReadyState;
        get source_buffers(): SourceBufferList;
        get sourceBuffers(): SourceBufferList;
        $signals: MediaSource.SignalSignatures;
        constructor(properties?: Partial<MediaSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MediaSource;
        connect<K extends keyof MediaSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static is_type_supported(type: string): boolean;
        add_source_buffer(type: string): SourceBuffer;
        attach(element: MseSrc): void;
        clear_live_seekable_range(): boolean;
        detach(): void;
        end_of_stream(eos_error: MediaSourceEOSError): boolean;
        get_active_source_buffers(): SourceBufferList;
        get_duration(): Gst.ClockTime;
        get_live_seekable_range(): MediaSourceRange;
        get_position(): Gst.ClockTime;
        get_ready_state(): MediaSourceReadyState;
        get_source_buffers(): SourceBufferList;
        remove_source_buffer(buffer: SourceBuffer): boolean;
        set_duration(duration: Gst.ClockTime): boolean;
        set_live_seekable_range(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
    }
    namespace MseSrc {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::n-audio": (pspec: GObject.ParamSpec) => void;
            "notify::n-text": (pspec: GObject.ParamSpec) => void;
            "notify::n-video": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.URIHandler.ConstructorProps {
            duration: bigint | number;
            n_audio: number;
            nAudio: number;
            n_text: number;
            nText: number;
            n_video: number;
            nVideo: number;
            position: bigint | number;
            ready_state: MseSrcReadyState;
            readyState: MseSrcReadyState;
        }
    }
    class MseSrc extends Gst.Element implements Gst.URIHandler {
        static $gtype: GObject.GType<MseSrc>;
        get duration(): number;
        set duration(val: bigint | number);
        get n_audio(): number;
        get nAudio(): number;
        get n_text(): number;
        get nText(): number;
        get n_video(): number;
        get nVideo(): number;
        get position(): number;
        get ready_state(): MseSrcReadyState;
        get readyState(): MseSrcReadyState;
        $signals: MseSrc.SignalSignatures;
        constructor(properties?: Partial<MseSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MseSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_duration(): Gst.ClockTime;
        get_n_audio(): number;
        get_n_text(): number;
        get_n_video(): number;
        get_position(): Gst.ClockTime;
        get_ready_state(): MseSrcReadyState;
        get_protocols(): string[] | null;
        get_uri(): string | null;
        get_uri_type(): Gst.URIType;
        set_uri(uri: string): boolean;
        vfunc_get_uri(): string | null;
        vfunc_set_uri(uri: string): boolean;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    namespace MseSrcPad {
        interface SignalSignatures extends Gst.Pad.SignalSignatures {
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Pad.ConstructorProps {}
    }
    class MseSrcPad extends Gst.Pad {
        static $gtype: GObject.GType<MseSrcPad>;
        $signals: MseSrcPad.SignalSignatures;
        constructor(properties?: Partial<MseSrcPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MseSrcPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MseSrcPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MseSrcPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MseSrcPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MseSrcPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SourceBuffer {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "on-abort": () => void;
            "on-error": () => void;
            "on-update": () => void;
            "on-update-end": () => void;
            "on-update-start": () => void;
            "notify::append-mode": (pspec: GObject.ParamSpec) => void;
            "notify::append-window-end": (pspec: GObject.ParamSpec) => void;
            "notify::append-window-start": (pspec: GObject.ParamSpec) => void;
            "notify::buffered": (pspec: GObject.ParamSpec) => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp-offset": (pspec: GObject.ParamSpec) => void;
            "notify::updating": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            append_mode: SourceBufferAppendMode;
            appendMode: SourceBufferAppendMode;
            append_window_end: bigint | number;
            appendWindowEnd: bigint | number;
            append_window_start: bigint | number;
            appendWindowStart: bigint | number;
            buffered: never[];
            content_type: string;
            contentType: string;
            timestamp_offset: bigint | number;
            timestampOffset: bigint | number;
            updating: boolean;
        }
    }
    class SourceBuffer extends Gst.Object {
        static $gtype: GObject.GType<SourceBuffer>;
        get append_mode(): SourceBufferAppendMode;
        set append_mode(val: SourceBufferAppendMode);
        get appendMode(): SourceBufferAppendMode;
        set appendMode(val: SourceBufferAppendMode);
        get append_window_end(): number;
        get appendWindowEnd(): number;
        get append_window_start(): number;
        get appendWindowStart(): number;
        get buffered(): null[];
        get content_type(): string;
        set content_type(val: string);
        get contentType(): string;
        set contentType(val: string);
        get timestamp_offset(): number;
        set timestamp_offset(val: bigint | number);
        get timestampOffset(): number;
        set timestampOffset(val: bigint | number);
        get updating(): boolean;
        $signals: SourceBuffer.SignalSignatures;
        constructor(properties?: Partial<SourceBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SourceBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SourceBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SourceBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SourceBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        abort(): boolean;
        append_buffer(buf: Gst.Buffer): boolean;
        change_content_type(type: string): boolean;
        get_append_mode(): SourceBufferAppendMode;
        get_append_window_end(): Gst.ClockTime;
        get_append_window_start(): Gst.ClockTime;
        get_buffered(): MediaSourceRange[];
        get_content_type(): string;
        get_timestamp_offset(): Gst.ClockTime;
        get_updating(): boolean;
        remove(start: Gst.ClockTime, end: Gst.ClockTime): boolean;
        set_append_mode(mode: SourceBufferAppendMode): boolean;
        set_append_window_end(end: Gst.ClockTime): boolean;
        set_append_window_start(start: Gst.ClockTime): boolean;
        set_timestamp_offset(offset: Gst.ClockTime): boolean;
    }
    namespace SourceBufferList {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "on-sourcebuffer-added": () => void;
            "on-sourcebuffer-removed": () => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            length: bigint | number;
        }
    }
    class SourceBufferList extends Gst.Object {
        static $gtype: GObject.GType<SourceBufferList>;
        get length(): number;
        $signals: SourceBufferList.SignalSignatures;
        constructor(properties?: Partial<SourceBufferList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SourceBufferList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SourceBufferList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SourceBufferList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SourceBufferList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SourceBufferList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        index(index: number): SourceBuffer | null;
    }
    type MediaSourceClass = typeof MediaSource;
    class MediaSourceRange {
        static $gtype: GObject.GType<MediaSourceRange>;
        start: Gst.ClockTime;
        end: Gst.ClockTime;
    }
    type MseSrcClass = typeof MseSrc;
    type MseSrcPadClass = typeof MseSrcPad;
    type SourceBufferClass = typeof SourceBuffer;
    class SourceBufferInterval {
        static $gtype: GObject.GType<SourceBufferInterval>;
        start: Gst.ClockTime;
        end: Gst.ClockTime;
    }
    type SourceBufferListClass = typeof SourceBufferList;
    const __name__: string;
    const __version__: string;
}
export default GstMse;
}
declare module 'gi://GstMse' {
    import GstMse10 from 'gi://GstMse?version=1.0';
    export default GstMse10;
}
