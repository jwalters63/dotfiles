declare module 'gi://GstBase?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstBase {
    export namespace AggregatorStartTimeSelection {
        export const $gtype: GObject.GType<AggregatorStartTimeSelection>;
    }
    enum AggregatorStartTimeSelection {
        ZERO,
        FIRST,
        SET,
        NOW,
    }
    const BASE_PARSE_FLAG_DRAINING: number;
    const BASE_PARSE_FLAG_LOST_SYNC: number;
    const BASE_TRANSFORM_SINK_NAME: string;
    const BASE_TRANSFORM_SRC_NAME: string;
    function type_find_helper(src: Gst.Pad, size: bigint | number): Gst.Caps | null;
    function type_find_helper_for_buffer(obj: Gst.Object | null, buf: Gst.Buffer): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_buffer_with_caps(obj: Gst.Object | null, buf: Gst.Buffer, caps: Gst.Caps): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_buffer_with_extension(obj: Gst.Object | null, buf: Gst.Buffer, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_data(obj: Gst.Object | null, data: Uint8Array | string): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_data_with_caps(obj: Gst.Object | null, data: Uint8Array | string, caps: Gst.Caps): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_data_with_extension(obj: Gst.Object | null, data: Uint8Array | string, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null;
    function type_find_helper_get_range(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: bigint | number, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
    function type_find_helper_get_range_full(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: bigint | number, extension: string | null): [Gst.FlowReturn, Gst.Caps, Gst.TypeFindProbability | null];
    function type_find_list_factories_for_caps(obj: Gst.Object | null, caps: Gst.Caps): Gst.TypeFindFactory[] | null;
    interface CollectDataDestroyNotify {
        (data: CollectData): void;
    }
    interface CollectPadsBufferFunction {
        (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn;
    }
    interface CollectPadsClipFunction {
        (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn;
    }
    interface CollectPadsCompareFunction {
        (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime): number;
    }
    interface CollectPadsEventFunction {
        (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean;
    }
    interface CollectPadsFlushFunction {
        (pads: CollectPads): void;
    }
    interface CollectPadsFunction {
        (pads: CollectPads): Gst.FlowReturn;
    }
    interface CollectPadsQueryFunction {
        (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean;
    }
    interface DataQueueEmptyCallback {
        (queue: DataQueue, checkdata: null): void;
    }
    interface DataQueueFullCallback {
        (queue: DataQueue, checkdata: null): void;
    }
    interface TypeFindHelperGetRangeFunction {
        (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn;
    }
    enum BaseParseFrameFlags {
        NONE,
        NEW_FRAME,
        NO_FRAME,
        CLIP,
        DROP,
        QUEUE,
    }
    enum BaseSrcFlags {
        STARTING,
        STARTED,
        LAST,
    }
    enum CollectPadsStateFlags {
        EOS,
        FLUSHING,
        NEW_SEGMENT,
        WAITING,
        LOCKED,
    }
    namespace Adapter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;
        $signals: Adapter.SignalSignatures;
        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Adapter;
        connect<K extends keyof Adapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Adapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Adapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Adapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        available(): number;
        available_fast(): number;
        clear(): void;
        copy(offset: bigint | number, size: bigint | number): GLib.Bytes;
        distance_from_discont(): number;
        dts_at_discont(): Gst.ClockTime;
        flush(flush: bigint | number): void;
        get_buffer(nbytes: bigint | number): Gst.Buffer | null;
        get_buffer_fast(nbytes: bigint | number): Gst.Buffer | null;
        get_buffer_list(nbytes: bigint | number): Gst.BufferList | null;
        get_list(nbytes: bigint | number): Gst.Buffer[] | null;
        map(): Uint8Array | null;
        masked_scan_uint32(mask: number, pattern: number, offset: bigint | number, size: bigint | number): number;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: bigint | number, size: bigint | number): [number, number];
        offset_at_discont(): number;
        prev_dts(): [Gst.ClockTime, number];
        prev_dts_at_offset(offset: bigint | number): [Gst.ClockTime, number];
        prev_offset(): [number, number];
        prev_pts(): [Gst.ClockTime, number];
        prev_pts_at_offset(offset: bigint | number): [Gst.ClockTime, number];
        pts_at_discont(): Gst.ClockTime;
        push(buf: Gst.Buffer): void;
        take(): Uint8Array | null;
        take_buffer(nbytes: bigint | number): Gst.Buffer | null;
        take_buffer_fast(nbytes: bigint | number): Gst.Buffer | null;
        take_buffer_list(nbytes: bigint | number): Gst.BufferList | null;
        take_list(nbytes: bigint | number): Gst.Buffer[] | null;
        unmap(): void;
    }
    namespace Aggregator {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "samples-selected": (arg0: Gst.Segment, arg1: number, arg2: number, arg3: number, arg4: Gst.Structure | null) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-upstream-latency": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::start-time-selection": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            emit_signals: boolean;
            emitSignals: boolean;
            latency: bigint | number;
            min_upstream_latency: bigint | number;
            minUpstreamLatency: bigint | number;
            start_time: bigint | number | any;
            startTime: bigint | number;
            start_time_selection: AggregatorStartTimeSelection;
            startTimeSelection: AggregatorStartTimeSelection;
        }
    }
    abstract class Aggregator extends Gst.Element {
        static $gtype: GObject.GType<Aggregator>;
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        get latency(): number;
        set latency(val: bigint | number);
        get min_upstream_latency(): number;
        set min_upstream_latency(val: bigint | number);
        get minUpstreamLatency(): number;
        set minUpstreamLatency(val: bigint | number);
         start_time: bigint | number | any;
        get startTime(): number;
        set startTime(val: bigint | number);
        get start_time_selection(): AggregatorStartTimeSelection;
        set start_time_selection(val: AggregatorStartTimeSelection);
        get startTimeSelection(): AggregatorStartTimeSelection;
        set startTimeSelection(val: AggregatorStartTimeSelection);
        $signals: Aggregator.SignalSignatures;
        srcpad: Gst.Pad;
        constructor(properties?: Partial<Aggregator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Aggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Aggregator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Aggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Aggregator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Aggregator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Aggregator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_aggregate(timeout: boolean): Gst.FlowReturn;
        vfunc_clip(aggregator_pad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer | null;
        vfunc_create_new_pad(templ: Gst.PadTemplate, req_name: string | null, caps: Gst.Caps | null): AggregatorPad;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
        vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps;
        vfunc_flush(): Gst.FlowReturn;
        vfunc_get_next_time(): Gst.ClockTime;
        vfunc_negotiate(): boolean;
        vfunc_negotiated_src_caps(caps: Gst.Caps): boolean;
        vfunc_peek_next_sample(aggregator_pad: AggregatorPad): Gst.Sample | null;
        vfunc_propose_allocation(pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean;
        vfunc_sink_event(aggregator_pad: AggregatorPad, event: Gst.Event): boolean;
        vfunc_sink_event_pre_queue(aggregator_pad: AggregatorPad, event: Gst.Event): Gst.FlowReturn;
        vfunc_sink_query(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
        vfunc_sink_query_pre_queue(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
        vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_update_src_caps(caps: Gst.Caps): [Gst.FlowReturn, Gst.Caps | null];
        finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_buffer_pool(): Gst.BufferPool | null;
        get_force_live(): boolean;
        get_ignore_inactive_pads(): boolean;
        get_latency(): Gst.ClockTime;
        negotiate(): boolean;
        peek_next_sample(pad: AggregatorPad): Gst.Sample | null;
        push_src_event(event: Gst.Event): boolean;
        selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info: Gst.Structure | null): void;
        set_force_live(force_live: boolean): void;
        set_ignore_inactive_pads(ignore: boolean): void;
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        set_src_caps(caps: Gst.Caps): void;
        simple_get_next_time(): Gst.ClockTime;
        update_segment(segment: Gst.Segment): void;
    }
    namespace AggregatorPad {
        interface SignalSignatures extends Gst.Pad.SignalSignatures {
            "buffer-consumed": (arg0: Gst.Buffer) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Pad.ConstructorProps {
            current_level_buffers: bigint | number;
            currentLevelBuffers: bigint | number;
            current_level_bytes: bigint | number;
            currentLevelBytes: bigint | number;
            current_level_time: bigint | number;
            currentLevelTime: bigint | number;
            emit_signals: boolean;
            emitSignals: boolean;
        }
    }
    class AggregatorPad extends Gst.Pad {
        static $gtype: GObject.GType<AggregatorPad>;
        get current_level_buffers(): number;
        get currentLevelBuffers(): number;
        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        $signals: AggregatorPad.SignalSignatures;
        constructor(properties?: Partial<AggregatorPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AggregatorPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AggregatorPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_flush(aggregator: Aggregator): Gst.FlowReturn;
        vfunc_skip_buffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean;
        drop_buffer(): boolean;
        has_buffer(): boolean;
        is_eos(): boolean;
        is_inactive(): boolean;
        peek_buffer(): Gst.Buffer | null;
        pop_buffer(): Gst.Buffer | null;
    }
    namespace BaseParse {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::disable-clip": (pspec: GObject.ParamSpec) => void;
            "notify::disable-passthrough": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            disable_clip: boolean;
            disableClip: boolean;
            disable_passthrough: boolean;
            disablePassthrough: boolean;
        }
    }
    abstract class BaseParse extends Gst.Element {
        static $gtype: GObject.GType<BaseParse>;
        get disable_clip(): boolean;
        set disable_clip(val: boolean);
        get disableClip(): boolean;
        set disableClip(val: boolean);
        get disable_passthrough(): boolean;
        set disable_passthrough(val: boolean);
        get disablePassthrough(): boolean;
        set disablePassthrough(val: boolean);
        $signals: BaseParse.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        flags: number;
        constructor(properties?: Partial<BaseParse.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BaseParse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseParse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseParse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseParse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseParse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseParse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number): boolean;
        vfunc_detect(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_get_sink_caps(filter: Gst.Caps): Gst.Caps;
        vfunc_handle_frame(frame: BaseParseFrame): [Gst.FlowReturn, number];
        vfunc_pre_push_frame(frame: BaseParseFrame): Gst.FlowReturn;
        vfunc_set_sink_caps(caps: Gst.Caps): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_sink_query(query: Gst.Query): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        add_index_entry(offset: bigint | number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean;
        convert_default(src_format: Gst.Format, src_value: bigint | number, dest_format: Gst.Format): [boolean, number];
        drain(): void;
        finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn;
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        push_frame(frame: BaseParseFrame): Gst.FlowReturn;
        set_average_bitrate(bitrate: number): void;
        set_duration(fmt: Gst.Format, duration: bigint | number, interval: number): void;
        set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void;
        set_has_timing_info(has_timing: boolean): void;
        set_infer_ts(infer_ts: boolean): void;
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        set_min_frame_size(min_size: number): void;
        set_passthrough(passthrough: boolean): void;
        set_pts_interpolation(pts_interpolate: boolean): void;
        set_syncable(syncable: boolean): void;
        set_ts_at_offset(offset: bigint | number): void;
    }
    namespace BaseSink {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
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
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            async: boolean;
            blocksize: number;
            enable_last_sample: boolean;
            enableLastSample: boolean;
            last_sample: Gst.Sample | null;
            lastSample: Gst.Sample | null;
            max_bitrate: bigint | number;
            maxBitrate: bigint | number;
            max_lateness: bigint | number;
            maxLateness: bigint | number;
            processing_deadline: bigint | number;
            processingDeadline: bigint | number;
            qos: boolean;
            render_delay: bigint | number;
            renderDelay: bigint | number;
            stats: Gst.Structure;
            sync: boolean;
            throttle_time: bigint | number;
            throttleTime: bigint | number;
            ts_offset: bigint | number;
            tsOffset: bigint | number;
        }
    }
    abstract class BaseSink extends Gst.Element {
        static $gtype: GObject.GType<BaseSink>;
        get async(): boolean;
        set async(val: boolean);
        get blocksize(): number;
        set blocksize(val: number);
        get enable_last_sample(): boolean;
        set enable_last_sample(val: boolean);
        get enableLastSample(): boolean;
        set enableLastSample(val: boolean);
        get last_sample(): Gst.Sample | null;
        get lastSample(): Gst.Sample | null;
        get max_bitrate(): number;
        set max_bitrate(val: bigint | number);
        get maxBitrate(): number;
        set maxBitrate(val: bigint | number);
        get max_lateness(): number;
        set max_lateness(val: bigint | number);
        get maxLateness(): number;
        set maxLateness(val: bigint | number);
        get processing_deadline(): number;
        set processing_deadline(val: bigint | number);
        get processingDeadline(): number;
        set processingDeadline(val: bigint | number);
        get qos(): boolean;
        set qos(val: boolean);
        get render_delay(): number;
        set render_delay(val: bigint | number);
        get renderDelay(): number;
        set renderDelay(val: bigint | number);
        get stats(): Gst.Structure;
        get sync(): boolean;
        set sync(val: boolean);
        get throttle_time(): number;
        set throttle_time(val: bigint | number);
        get throttleTime(): number;
        set throttleTime(val: bigint | number);
        get ts_offset(): number;
        set ts_offset(val: bigint | number);
        get tsOffset(): number;
        set tsOffset(val: bigint | number);
        $signals: BaseSink.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        pad_mode: Gst.PadMode;
        offset: number;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        eos: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;
        constructor(properties?: Partial<BaseSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BaseSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_activate_pull(active: boolean): boolean;
        vfunc_event(event: Gst.Event): boolean;
        vfunc_fixate(caps: Gst.Caps): Gst.Caps;
        vfunc_get_caps(filter: Gst.Caps | null): Gst.Caps;
        vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
        vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_query(query: Gst.Query): boolean;
        vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        vfunc_set_caps(caps: Gst.Caps): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_unlock(): boolean;
        vfunc_unlock_stop(): boolean;
        vfunc_wait_event(event: Gst.Event): Gst.FlowReturn;
        do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
        get_blocksize(): number;
        get_drop_out_of_segment(): boolean;
        get_last_sample(): Gst.Sample | null;
        get_latency(): Gst.ClockTime;
        get_max_bitrate(): number;
        get_max_lateness(): number;
        get_processing_deadline(): Gst.ClockTime;
        get_render_delay(): Gst.ClockTime;
        get_stats(): Gst.Structure;
        get_sync(): boolean;
        get_throttle_time(): number;
        get_ts_offset(): Gst.ClockTimeDiff;
        is_async_enabled(): boolean;
        is_last_sample_enabled(): boolean;
        is_qos_enabled(): boolean;
        query_latency(): [boolean, boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
        set_async_enabled(enabled: boolean): void;
        set_blocksize(blocksize: number): void;
        set_drop_out_of_segment(drop_out_of_segment: boolean): void;
        set_last_sample_enabled(enabled: boolean): void;
        set_max_bitrate(max_bitrate: bigint | number): void;
        set_max_lateness(max_lateness: bigint | number): void;
        set_processing_deadline(processing_deadline: Gst.ClockTime): void;
        set_qos_enabled(enabled: boolean): void;
        set_render_delay(delay: Gst.ClockTime): void;
        set_sync(sync: boolean): void;
        set_throttle_time(throttle: bigint | number): void;
        set_ts_offset(offset: Gst.ClockTimeDiff): void;
        wait(time: Gst.ClockTime): [Gst.FlowReturn, Gst.ClockTimeDiff | null];
        wait_clock(time: Gst.ClockTime): [Gst.ClockReturn, Gst.ClockTimeDiff | null];
        wait_preroll(): Gst.FlowReturn;
    }
    namespace BaseSrc {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            automatic_eos: boolean;
            automaticEos: boolean;
            blocksize: number;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }
    abstract class BaseSrc extends Gst.Element {
        static $gtype: GObject.GType<BaseSrc>;
        get automatic_eos(): boolean;
        set automatic_eos(val: boolean);
        get automaticEos(): boolean;
        set automaticEos(val: boolean);
        get blocksize(): number;
        set blocksize(val: number);
        get do_timestamp(): boolean;
        set do_timestamp(val: boolean);
        get doTimestamp(): boolean;
        set doTimestamp(val: boolean);
        get num_buffers(): number;
        set num_buffers(val: number);
        get numBuffers(): number;
        set numBuffers(val: number);
        get typefind(): boolean;
        set typefind(val: boolean);
        $signals: BaseSrc.SignalSignatures;
        element: Gst.Element;
        srcpad: Gst.Pad;
        live_running: boolean;
        can_activate_push: boolean;
        random_access: boolean;
        clock_id: Gst.ClockID;
        need_newsegment: boolean;
        num_buffers_left: number;
        running: boolean;
        constructor(properties?: Partial<BaseSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_alloc(offset: number, size: number): [Gst.FlowReturn, Gst.Buffer | null];
        vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_do_seek(segment: Gst.Segment): boolean;
        vfunc_event(event: Gst.Event): boolean;
        vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn;
        vfunc_fixate(caps: Gst.Caps): Gst.Caps;
        vfunc_get_caps(filter: Gst.Caps | null): Gst.Caps;
        vfunc_get_size(): [boolean, bigint | number];
        vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
        vfunc_is_seekable(): boolean;
        vfunc_negotiate(): boolean;
        vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean;
        vfunc_query(query: Gst.Query): boolean;
        vfunc_set_caps(caps: Gst.Caps): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_unlock(): boolean;
        vfunc_unlock_stop(): boolean;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_blocksize(): number;
        get_buffer_pool(): Gst.BufferPool | null;
        get_do_timestamp(): boolean;
        is_async(): boolean;
        is_live(): boolean;
        negotiate(): boolean;
        new_seamless_segment(start: bigint | number, stop: bigint | number, time: bigint | number): boolean;
        new_segment(segment: Gst.Segment): boolean;
        push_segment(segment: Gst.Segment): boolean;
        query_latency(): [boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
        set_async(async: boolean): void;
        set_automatic_eos(automatic_eos: boolean): void;
        set_blocksize(blocksize: number): void;
        set_caps(caps: Gst.Caps): boolean;
        set_do_timestamp(timestamp: boolean): void;
        set_dynamic_size(dynamic: boolean): void;
        set_format(format: Gst.Format): void;
        set_live(live: boolean): void;
        start_complete(ret: Gst.FlowReturn): void;
        start_wait(): Gst.FlowReturn;
        submit_buffer_list(buffer_list: Gst.BufferList): void;
        wait_playing(): Gst.FlowReturn;
    }
    namespace BaseTransform {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            qos: boolean;
        }
    }
    abstract class BaseTransform extends Gst.Element {
        static $gtype: GObject.GType<BaseTransform>;
        get qos(): boolean;
        set qos(val: boolean);
        $signals: BaseTransform.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        have_segment: boolean;
        constructor(properties?: Partial<BaseTransform.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BaseTransform.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BaseTransform.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BaseTransform.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseTransform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean;
        vfunc_before_transform(buffer: Gst.Buffer): void;
        vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_filter_meta(query: Gst.Query, api: GObject.GType, params: Gst.Structure): boolean;
        vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        vfunc_generate_output(): [Gst.FlowReturn, Gst.Buffer];
        vfunc_get_unit_size(caps: Gst.Caps): [boolean, bigint | number];
        vfunc_prepare_output_buffer(input: Gst.Buffer): [Gst.FlowReturn, Gst.Buffer];
        vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean;
        vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean;
        vfunc_query(...args: never[]): any;
        vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
        vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn;
        vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
        vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn;
        vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
        vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [boolean, bigint | number];
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_buffer_pool(): Gst.BufferPool | null;
        is_in_place(): boolean;
        is_passthrough(): boolean;
        is_qos_enabled(): boolean;
        reconfigure(): boolean;
        reconfigure_sink(): void;
        reconfigure_src(): void;
        set_gap_aware(gap_aware: boolean): void;
        set_in_place(in_place: boolean): void;
        set_passthrough(passthrough: boolean): void;
        set_prefer_passthrough(prefer_passthrough: boolean): void;
        set_qos_enabled(enabled: boolean): void;
        update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
        update_src_caps(updated_caps: Gst.Caps): boolean;
    }
    namespace CollectPads {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class CollectPads extends Gst.Object {
        static $gtype: GObject.GType<CollectPads>;
        $signals: CollectPads.SignalSignatures;
        object: Gst.Object;
        data: CollectData[];
        constructor(properties?: Partial<CollectPads.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CollectPads;
        connect<K extends keyof CollectPads.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CollectPads.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CollectPads.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CollectPads.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_pad(pad: Gst.Pad, size: number, destroy_notify: CollectDataDestroyNotify, lock: boolean): CollectData | null;
        available(): number;
        clip_running_time(cdata: CollectData, buf: Gst.Buffer, user_data: null): [Gst.FlowReturn, Gst.Buffer | null];
        event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean;
        flush(data: CollectData, size: number): number;
        peek(data: CollectData): Gst.Buffer | null;
        pop(data: CollectData): Gst.Buffer | null;
        query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean;
        read_buffer(data: CollectData, size: number): Gst.Buffer | null;
        remove_pad(pad: Gst.Pad): boolean;
        set_buffer_function(func: CollectPadsBufferFunction): void;
        set_clip_function(clipfunc: CollectPadsClipFunction): void;
        set_compare_function(func: CollectPadsCompareFunction): void;
        set_event_function(func: CollectPadsEventFunction): void;
        set_flush_function(func: CollectPadsFlushFunction): void;
        set_flushing(flushing: boolean): void;
        set_function(func: CollectPadsFunction): void;
        set_query_function(func: CollectPadsQueryFunction): void;
        set_waiting(data: CollectData, waiting: boolean): void;
        src_event_default(pad: Gst.Pad, event: Gst.Event): boolean;
        start(): void;
        stop(): void;
        take_buffer(data: CollectData, size: number): Gst.Buffer | null;
    }
    namespace DataQueue {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            empty: () => void;
            full: () => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-visible": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            current_level_bytes: number;
            currentLevelBytes: number;
            current_level_time: bigint | number;
            currentLevelTime: bigint | number;
            current_level_visible: number;
            currentLevelVisible: number;
        }
    }
    class DataQueue extends GObject.Object {
        static $gtype: GObject.GType<DataQueue>;
        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get current_level_visible(): number;
        get currentLevelVisible(): number;
        $signals: DataQueue.SignalSignatures;
        object: GObject.Object;
        constructor(properties?: Partial<DataQueue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DataQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DataQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DataQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_empty(): void;
        vfunc_full(): void;
    }
    namespace PushSrc {
        interface SignalSignatures extends BaseSrc.SignalSignatures {
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends BaseSrc.ConstructorProps {}
    }
    class PushSrc extends BaseSrc {
        static $gtype: GObject.GType<PushSrc>;
        $signals: PushSrc.SignalSignatures;
        constructor(properties?: Partial<PushSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PushSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PushSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PushSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PushSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_alloc(): [Gst.FlowReturn, Gst.Buffer | null];
        vfunc_create(buf: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
        vfunc_create(...args: never[]): any;
        vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn;
        vfunc_fill(...args: never[]): any;
    }
    type AdapterClass = typeof Adapter;
    type AggregatorClass = typeof Aggregator;
    type AggregatorPadClass = typeof AggregatorPad;
    abstract class AggregatorPadPrivate {
        static $gtype: GObject.GType<AggregatorPadPrivate>;
    }
    abstract class AggregatorPrivate {
        static $gtype: GObject.GType<AggregatorPrivate>;
    }
    type BaseParseClass = typeof BaseParse;
    class BaseParseFrame {
        static $gtype: GObject.GType<BaseParseFrame>;
        flags: number;
        offset: number;
        overhead: number;
        constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number);
        static ["new"](buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame;
        copy(): BaseParseFrame;
        free(): void;
        init(): void;
    }
    abstract class BaseParsePrivate {
        static $gtype: GObject.GType<BaseParsePrivate>;
    }
    type BaseSinkClass = typeof BaseSink;
    abstract class BaseSinkPrivate {
        static $gtype: GObject.GType<BaseSinkPrivate>;
    }
    type BaseSrcClass = typeof BaseSrc;
    abstract class BaseSrcPrivate {
        static $gtype: GObject.GType<BaseSrcPrivate>;
    }
    type BaseTransformClass = typeof BaseTransform;
    abstract class BaseTransformPrivate {
        static $gtype: GObject.GType<BaseTransformPrivate>;
    }
    class BitReader {
        static $gtype: GObject.GType<BitReader>;
        data: Uint8Array;
        size: number;
        "byte": number;
        bit: number;
        constructor(properties?: Partial<{
            data: Uint8Array;
            size: number;
            "byte": number;
            bit: number;
        }>);
        free(): void;
        get_bits_uint16(nbits: number): [boolean, number];
        get_bits_uint32(nbits: number): [boolean, number];
        get_bits_uint64(nbits: number): [boolean, number];
        get_bits_uint8(nbits: number): [boolean, number];
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        init(data: Uint8Array | string): void;
        peek_bits_uint16(nbits: number): [boolean, number];
        peek_bits_uint32(nbits: number): [boolean, number];
        peek_bits_uint64(nbits: number): [boolean, number];
        peek_bits_uint8(nbits: number): [boolean, number];
        set_pos(pos: number): boolean;
        skip(nbits: number): boolean;
        skip_to_byte(): boolean;
    }
    class BitWriter {
        static $gtype: GObject.GType<BitWriter>;
        data: number;
        bit_size: number;
        constructor(properties?: Partial<{
            data: number;
            bit_size: number;
        }>);
        align_bytes(trailing_bit: number): boolean;
        free(): void;
        free_and_get_buffer(): Gst.Buffer;
        free_and_get_data(): Uint8Array;
        get_data(): Uint8Array;
        get_remaining(): number;
        get_size(): number;
        put_bits_uint16(value: number, nbits: number): boolean;
        put_bits_uint32(value: number, nbits: number): boolean;
        put_bits_uint64(value: bigint | number, nbits: number): boolean;
        put_bits_uint8(value: number, nbits: number): boolean;
        put_bytes(data: Uint8Array | string, nbytes: number): boolean;
        reset(): void;
        reset_and_get_buffer(): Gst.Buffer;
        reset_and_get_data(): Uint8Array;
        set_pos(pos: number): boolean;
    }
    class ByteReader {
        static $gtype: GObject.GType<ByteReader>;
        data: Uint8Array;
        size: number;
        "byte": number;
        constructor(properties?: Partial<{
            data: Uint8Array;
            size: number;
            "byte": number;
        }>);
        dup_data(): [boolean, Uint8Array];
        dup_string_utf16(): [boolean, number[]];
        dup_string_utf32(): [boolean, number[]];
        dup_string_utf8(): [boolean, string[]];
        free(): void;
        get_data(): [boolean, Uint8Array];
        get_float32_be(): [boolean, number];
        get_float32_le(): [boolean, number];
        get_float64_be(): [boolean, number];
        get_float64_le(): [boolean, number];
        get_int16_be(): [boolean, number];
        get_int16_le(): [boolean, number];
        get_int24_be(): [boolean, number];
        get_int24_le(): [boolean, number];
        get_int32_be(): [boolean, number];
        get_int32_le(): [boolean, number];
        get_int64_be(): [boolean, number];
        get_int64_le(): [boolean, number];
        get_int8(): [boolean, number];
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        get_string_utf8(): [boolean, string[]];
        get_uint16_be(): [boolean, number];
        get_uint16_le(): [boolean, number];
        get_uint24_be(): [boolean, number];
        get_uint24_le(): [boolean, number];
        get_uint32_be(): [boolean, number];
        get_uint32_le(): [boolean, number];
        get_uint64_be(): [boolean, number];
        get_uint64_le(): [boolean, number];
        get_uint8(): [boolean, number];
        init(data: Uint8Array | string): void;
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
        peek_data(): [boolean, Uint8Array];
        peek_float32_be(): [boolean, number];
        peek_float32_le(): [boolean, number];
        peek_float64_be(): [boolean, number];
        peek_float64_le(): [boolean, number];
        peek_int16_be(): [boolean, number];
        peek_int16_le(): [boolean, number];
        peek_int24_be(): [boolean, number];
        peek_int24_le(): [boolean, number];
        peek_int32_be(): [boolean, number];
        peek_int32_le(): [boolean, number];
        peek_int64_be(): [boolean, number];
        peek_int64_le(): [boolean, number];
        peek_int8(): [boolean, number];
        peek_string_utf8(): [boolean, string[]];
        peek_uint16_be(): [boolean, number];
        peek_uint16_le(): [boolean, number];
        peek_uint24_be(): [boolean, number];
        peek_uint24_le(): [boolean, number];
        peek_uint32_be(): [boolean, number];
        peek_uint32_le(): [boolean, number];
        peek_uint64_be(): [boolean, number];
        peek_uint64_le(): [boolean, number];
        peek_uint8(): [boolean, number];
        set_pos(pos: number): boolean;
        skip(nbytes: number): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        skip_string_utf8(): boolean;
    }
    class ByteWriter {
        static $gtype: GObject.GType<ByteWriter>;
        alloc_size: number;
        fixed: boolean;
        owned: boolean;
        constructor(properties?: Partial<{
            parent: ByteReader;
            alloc_size: number;
            fixed: boolean;
            owned: boolean;
        }>);
        ensure_free_space(size: number): boolean;
        fill(value: number, size: number): boolean;
        free(): void;
        free_and_get_buffer(): Gst.Buffer;
        free_and_get_data(): Uint8Array;
        get_remaining(): number;
        init(): void;
        init_with_data(data: Uint8Array | string, initialized: boolean): void;
        init_with_size(size: number, fixed: boolean): void;
        put_buffer(buffer: Gst.Buffer, offset: bigint | number, size: bigint | number): boolean;
        put_data(data: Uint8Array | string): boolean;
        put_float32_be(val: number): boolean;
        put_float32_le(val: number): boolean;
        put_float64_be(val: number): boolean;
        put_float64_le(val: number): boolean;
        put_int16_be(val: number): boolean;
        put_int16_le(val: number): boolean;
        put_int24_be(val: number): boolean;
        put_int24_le(val: number): boolean;
        put_int32_be(val: number): boolean;
        put_int32_le(val: number): boolean;
        put_int64_be(val: bigint | number): boolean;
        put_int64_le(val: bigint | number): boolean;
        put_int8(val: number): boolean;
        put_string_utf16(data: number[]): boolean;
        put_string_utf32(data: number[]): boolean;
        put_string_utf8(data: string): boolean;
        put_uint16_be(val: number): boolean;
        put_uint16_le(val: number): boolean;
        put_uint24_be(val: number): boolean;
        put_uint24_le(val: number): boolean;
        put_uint32_be(val: number): boolean;
        put_uint32_le(val: number): boolean;
        put_uint64_be(val: bigint | number): boolean;
        put_uint64_le(val: bigint | number): boolean;
        put_uint8(val: number): boolean;
        reset(): void;
        reset_and_get_buffer(): Gst.Buffer;
        reset_and_get_data(): Uint8Array;
    }
    class CollectData {
        static $gtype: GObject.GType<CollectData>;
        collect: CollectPads;
        pad: Gst.Pad;
        pos: number;
    }
    abstract class CollectDataPrivate {
        static $gtype: GObject.GType<CollectDataPrivate>;
    }
    type CollectPadsClass = typeof CollectPads;
    abstract class CollectPadsPrivate {
        static $gtype: GObject.GType<CollectPadsPrivate>;
    }
    type DataQueueClass = typeof DataQueue;
    abstract class DataQueuePrivate {
        static $gtype: GObject.GType<DataQueuePrivate>;
    }
    class FlowCombiner {
        static $gtype: GObject.GType<FlowCombiner>;
        constructor(properties?: Partial<{}>);
        static ["new"](): FlowCombiner;
        add_pad(pad: Gst.Pad): void;
        clear(): void;
        free(): void;
        ref(): FlowCombiner;
        remove_pad(pad: Gst.Pad): void;
        reset(): void;
        unref(): void;
        update_flow(fret: Gst.FlowReturn): Gst.FlowReturn;
        update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn;
    }
    type PushSrcClass = typeof PushSrc;
    abstract class TypeFindData {
        static $gtype: GObject.GType<TypeFindData>;
        free(): void;
    }
    const __name__: string;
    const __version__: string;
}
export default GstBase;
}
declare module 'gi://GstBase' {
    import GstBase10 from 'gi://GstBase?version=1.0';
    export default GstBase10;
}
