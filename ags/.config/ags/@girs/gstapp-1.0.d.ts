declare module 'gi://GstApp?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstApp {
    export namespace AppLeakyType {
        export const $gtype: GObject.GType<AppLeakyType>;
    }
    enum AppLeakyType {
        NONE,
        UPSTREAM,
        DOWNSTREAM,
    }
    export namespace AppStreamType {
        export const $gtype: GObject.GType<AppStreamType>;
    }
    enum AppStreamType {
        STREAM,
        SEEKABLE,
        RANDOM_ACCESS,
    }
    interface AppSinkEosCallback {
        (appsink: AppSink): void;
    }
    interface AppSinkNewEventCallback {
        (appsink: AppSink): boolean;
    }
    interface AppSinkNewPrerollCallback {
        (appsink: AppSink): Gst.FlowReturn;
    }
    interface AppSinkNewSampleCallback {
        (appsink: AppSink): Gst.FlowReturn;
    }
    interface AppSinkProposeAllocationCallback {
        (appsink: AppSink, query: Gst.Query): boolean;
    }
    interface AppSrcEnoughDataCallback {
        (appsrc: AppSrc): void;
    }
    interface AppSrcNeedDataCallback {
        (appsrc: AppSrc, length: number): void;
    }
    interface AppSrcSeekDataCallback {
        (appsrc: AppSrc, offset: number): boolean;
    }
    namespace AppSink {
        interface SignalSignatures extends GstBase.BaseSink.SignalSignatures {
            eos: () => void;
            "new-preroll": () => Gst.FlowReturn;
            "new-sample": () => Gst.FlowReturn;
            "new-serialized-event": () => boolean | void;
            "propose-allocation": (arg0: Gst.Query) => boolean | void;
            "pull-preroll": () => Gst.Sample | null;
            "pull-sample": () => Gst.Sample | null;
            "try-pull-object": (arg0: number) => Gst.MiniObject | null;
            "try-pull-preroll": (arg0: number) => Gst.Sample | null;
            "try-pull-sample": (arg0: number) => Gst.Sample | null;
            "notify::buffer-list": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::drop": (pspec: GObject.ParamSpec) => void;
            "notify::dropped": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::eos": (pspec: GObject.ParamSpec) => void;
            "notify::in": (pspec: GObject.ParamSpec) => void;
            "notify::leaky-type": (pspec: GObject.ParamSpec) => void;
            "notify::max-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::max-time": (pspec: GObject.ParamSpec) => void;
            "notify::out": (pspec: GObject.ParamSpec) => void;
            "notify::silent": (pspec: GObject.ParamSpec) => void;
            "notify::wait-on-eos": (pspec: GObject.ParamSpec) => void;
            "notify::async": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::enable-last-sample": (pspec: GObject.ParamSpec) => void;
            "notify::last-sample": (pspec: GObject.ParamSpec) => void;
            "notify::max-bitrate": (pspec: GObject.ParamSpec) => void;
            "notify::max-lateness": (pspec: GObject.ParamSpec) => void;
            "notify::processing-deadline": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::render-delay": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::sync": (pspec: GObject.ParamSpec) => void;
            "notify::throttle-time": (pspec: GObject.ParamSpec) => void;
            "notify::ts-offset": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps, Gst.URIHandler.ConstructorProps {
            buffer_list: boolean;
            bufferList: boolean;
            caps: Gst.Caps | null;
            current_level_buffers: bigint | number;
            currentLevelBuffers: bigint | number;
            current_level_bytes: bigint | number;
            currentLevelBytes: bigint | number;
            current_level_time: bigint | number;
            currentLevelTime: bigint | number;
            drop: boolean;
            dropped: bigint | number;
            emit_signals: boolean;
            emitSignals: boolean;
            eos: boolean | any;
            "in": bigint | number;
            leaky_type: AppLeakyType;
            leakyType: AppLeakyType;
            max_buffers: number;
            maxBuffers: number;
            max_bytes: bigint | number;
            maxBytes: bigint | number;
            max_time: bigint | number;
            maxTime: bigint | number;
            out: bigint | number;
            silent: boolean;
            wait_on_eos: boolean;
            waitOnEos: boolean;
        }
    }
    class AppSink extends GstBase.BaseSink implements Gst.URIHandler {
        static $gtype: GObject.GType<AppSink>;
        get buffer_list(): boolean;
        set buffer_list(val: boolean);
        get bufferList(): boolean;
        set bufferList(val: boolean);
        get caps(): Gst.Caps | null;
        set caps(val: Gst.Caps | null);
        get current_level_buffers(): number;
        get currentLevelBuffers(): number;
        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get drop(): boolean;
        set drop(val: boolean);
        get dropped(): number;
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
         eos: boolean | any;
        get "in"(): number;
        get leaky_type(): AppLeakyType;
        set leaky_type(val: AppLeakyType);
        get leakyType(): AppLeakyType;
        set leakyType(val: AppLeakyType);
        get max_buffers(): number;
        set max_buffers(val: number);
        get maxBuffers(): number;
        set maxBuffers(val: number);
        get max_bytes(): number;
        set max_bytes(val: bigint | number);
        get maxBytes(): number;
        set maxBytes(val: bigint | number);
        get max_time(): number;
        set max_time(val: bigint | number);
        get maxTime(): number;
        set maxTime(val: bigint | number);
        get out(): number;
        get silent(): boolean;
        set silent(val: boolean);
        get wait_on_eos(): boolean;
        set wait_on_eos(val: boolean);
        get waitOnEos(): boolean;
        set waitOnEos(val: boolean);
        $signals: AppSink.SignalSignatures;
        basesink: GstBase.BaseSink;
        constructor(properties?: Partial<AppSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AppSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_eos(): void;
        vfunc_new_preroll(): Gst.FlowReturn;
        vfunc_new_sample(): Gst.FlowReturn;
        vfunc_pull_preroll(): Gst.Sample | null;
        vfunc_pull_sample(): Gst.Sample | null;
        vfunc_try_pull_object(timeout: Gst.ClockTime): Gst.MiniObject | null;
        vfunc_try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
        vfunc_try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;
        get_buffer_list_support(): boolean;
        get_caps(): Gst.Caps | null;
        get_current_level_buffers(): number;
        get_current_level_bytes(): number;
        get_current_level_time(): Gst.ClockTime;
        get_drop(): boolean;
        get_emit_signals(): boolean;
        get_leaky_type(): AppLeakyType;
        get_max_buffers(): number;
        get_max_bytes(): number;
        get_max_time(): Gst.ClockTime;
        get_wait_on_eos(): boolean;
        is_eos(): boolean;
        pull_object(): Gst.MiniObject | null;
        pull_preroll(): Gst.Sample | null;
        pull_sample(): Gst.Sample | null;
        set_buffer_list_support(enable_lists: boolean): void;
        set_caps(caps: Gst.Caps | null): void;
        set_drop(drop: boolean): void;
        set_emit_signals(emit: boolean): void;
        set_leaky_type(leaky: AppLeakyType): void;
        set_max_buffers(max: number): void;
        set_max_bytes(max: bigint | number): void;
        set_max_time(max: Gst.ClockTime): void;
        set_simple_callbacks(cb: AppSinkSimpleCallbacks | null): void;
        set_wait_on_eos(wait: boolean): void;
        try_pull_object(timeout: Gst.ClockTime): Gst.MiniObject | null;
        try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
        try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;
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
    namespace AppSrc {
        interface SignalSignatures extends GstBase.BaseSrc.SignalSignatures {
            "end-of-stream": () => Gst.FlowReturn;
            "enough-data": () => void;
            "need-data": (arg0: number) => void;
            "push-buffer": (arg0: Gst.Buffer) => Gst.FlowReturn;
            "push-buffer-list": (arg0: Gst.BufferList) => Gst.FlowReturn;
            "push-sample": (arg0: Gst.Sample) => Gst.FlowReturn;
            "seek-data": (arg0: number) => boolean | void;
            "notify::block": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::dropped": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::handle-segment-change": (pspec: GObject.ParamSpec) => void;
            "notify::in": (pspec: GObject.ParamSpec) => void;
            "notify::is-live": (pspec: GObject.ParamSpec) => void;
            "notify::leaky-type": (pspec: GObject.ParamSpec) => void;
            "notify::max-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::max-latency": (pspec: GObject.ParamSpec) => void;
            "notify::max-time": (pspec: GObject.ParamSpec) => void;
            "notify::min-latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-percent": (pspec: GObject.ParamSpec) => void;
            "notify::out": (pspec: GObject.ParamSpec) => void;
            "notify::silent": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::stream-type": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseSrc.ConstructorProps, Gst.URIHandler.ConstructorProps {
            block: boolean;
            caps: Gst.Caps | null;
            current_level_buffers: bigint | number;
            currentLevelBuffers: bigint | number;
            current_level_bytes: bigint | number;
            currentLevelBytes: bigint | number;
            current_level_time: bigint | number;
            currentLevelTime: bigint | number;
            dropped: bigint | number;
            duration: bigint | number;
            emit_signals: boolean;
            emitSignals: boolean;
            format: Gst.Format;
            handle_segment_change: boolean;
            handleSegmentChange: boolean;
            "in": bigint | number;
            is_live: boolean | any;
            isLive: boolean;
            leaky_type: AppLeakyType;
            leakyType: AppLeakyType;
            max_buffers: bigint | number;
            maxBuffers: bigint | number;
            max_bytes: bigint | number;
            maxBytes: bigint | number;
            max_latency: bigint | number;
            maxLatency: bigint | number;
            max_time: bigint | number;
            maxTime: bigint | number;
            min_latency: bigint | number;
            minLatency: bigint | number;
            min_percent: number;
            minPercent: number;
            out: bigint | number;
            silent: boolean;
            size: bigint | number;
            stream_type: AppStreamType;
            streamType: AppStreamType;
        }
    }
    class AppSrc extends GstBase.BaseSrc implements Gst.URIHandler {
        static $gtype: GObject.GType<AppSrc>;
        get block(): boolean;
        set block(val: boolean);
        get caps(): Gst.Caps | null;
        set caps(val: Gst.Caps | null);
        get current_level_buffers(): number;
        get currentLevelBuffers(): number;
        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get dropped(): number;
        get duration(): number;
        set duration(val: bigint | number);
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        get format(): Gst.Format;
        set format(val: Gst.Format);
        get handle_segment_change(): boolean;
        set handle_segment_change(val: boolean);
        get handleSegmentChange(): boolean;
        set handleSegmentChange(val: boolean);
        get "in"(): number;
         is_live: boolean | any;
        get isLive(): boolean;
        set isLive(val: boolean);
        get leaky_type(): AppLeakyType;
        set leaky_type(val: AppLeakyType);
        get leakyType(): AppLeakyType;
        set leakyType(val: AppLeakyType);
        get max_buffers(): number;
        set max_buffers(val: bigint | number);
        get maxBuffers(): number;
        set maxBuffers(val: bigint | number);
        get max_bytes(): number;
        set max_bytes(val: bigint | number);
        get maxBytes(): number;
        set maxBytes(val: bigint | number);
        get max_latency(): number;
        set max_latency(val: bigint | number);
        get maxLatency(): number;
        set maxLatency(val: bigint | number);
        get max_time(): number;
        set max_time(val: bigint | number);
        get maxTime(): number;
        set maxTime(val: bigint | number);
        get min_latency(): number;
        set min_latency(val: bigint | number);
        get minLatency(): number;
        set minLatency(val: bigint | number);
        get min_percent(): number;
        set min_percent(val: number);
        get minPercent(): number;
        set minPercent(val: number);
        get out(): number;
        get silent(): boolean;
        set silent(val: boolean);
        get size(): number;
        set size(val: bigint | number);
        get stream_type(): AppStreamType;
        set stream_type(val: AppStreamType);
        get streamType(): AppStreamType;
        set streamType(val: AppStreamType);
        $signals: AppSrc.SignalSignatures;
        basesrc: GstBase.BaseSrc;
        constructor(properties?: Partial<AppSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AppSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_end_of_stream(): Gst.FlowReturn;
        vfunc_enough_data(): void;
        vfunc_need_data(length: number): void;
        vfunc_push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        vfunc_push_sample(sample: Gst.Sample): Gst.FlowReturn;
        vfunc_seek_data(offset: number): boolean;
        end_of_stream(): Gst.FlowReturn;
        get_caps(): Gst.Caps | null;
        get_current_level_buffers(): number;
        get_current_level_bytes(): number;
        get_current_level_time(): Gst.ClockTime;
        get_duration(): Gst.ClockTime;
        get_emit_signals(): boolean;
        get_latency(): [number, number];
        get_leaky_type(): AppLeakyType;
        get_max_buffers(): number;
        get_max_bytes(): number;
        get_max_time(): Gst.ClockTime;
        get_size(): number;
        get_stream_type(): AppStreamType;
        push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        push_sample(sample: Gst.Sample): Gst.FlowReturn;
        set_caps(caps: Gst.Caps | null): void;
        set_caps(...args: never[]): any;
        set_duration(duration: Gst.ClockTime): void;
        set_emit_signals(emit: boolean): void;
        set_latency(min: bigint | number, max: bigint | number): void;
        set_leaky_type(leaky: AppLeakyType): void;
        set_max_buffers(max: bigint | number): void;
        set_max_bytes(max: bigint | number): void;
        set_max_time(max: Gst.ClockTime): void;
        set_simple_callbacks(cb: AppSrcSimpleCallbacks | null): void;
        set_size(size: bigint | number): void;
        set_stream_type(type: AppStreamType): void;
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
    type AppSinkClass = typeof AppSink;
    abstract class AppSinkPrivate {
        static $gtype: GObject.GType<AppSinkPrivate>;
    }
    class AppSinkSimpleCallbacks {
        static $gtype: GObject.GType<AppSinkSimpleCallbacks>;
        constructor(properties?: Partial<{}>);
        static ["new"](): AppSinkSimpleCallbacks;
        ref(): AppSinkSimpleCallbacks;
        set_eos(eos_cb: AppSinkEosCallback): void;
        set_new_event(new_event_cb: AppSinkNewEventCallback): void;
        set_new_preroll(new_preroll_cb: AppSinkNewPrerollCallback): void;
        set_new_sample(new_sample_cb: AppSinkNewSampleCallback): void;
        set_propose_allocation(propose_allocation_cb: AppSinkProposeAllocationCallback): void;
        unref(): void;
    }
    type AppSrcClass = typeof AppSrc;
    abstract class AppSrcPrivate {
        static $gtype: GObject.GType<AppSrcPrivate>;
    }
    class AppSrcSimpleCallbacks {
        static $gtype: GObject.GType<AppSrcSimpleCallbacks>;
        constructor(properties?: Partial<{}>);
        static ["new"](): AppSrcSimpleCallbacks;
        ref(): AppSrcSimpleCallbacks;
        set_enough_data(enough_data_cb: AppSrcEnoughDataCallback): void;
        set_need_data(need_data_cb: AppSrcNeedDataCallback): void;
        set_seek_data(seek_data_cb: AppSrcSeekDataCallback): void;
        unref(): void;
    }
    const __name__: string;
    const __version__: string;
}
export default GstApp;
}
declare module 'gi://GstApp' {
    import GstApp10 from 'gi://GstApp?version=1.0';
    export default GstApp10;
}
