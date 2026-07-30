declare module 'gi://GstCheck?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstCheck {
    function buffer_straw_get_buffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer;
    function buffer_straw_start_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
    function buffer_straw_stop_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
    function check_abi_list(list: CheckABIStruct, have_abi_sizes: boolean): void;
    function check_buffer_data(buffer: Gst.Buffer, data: null, size: bigint | number): void;
    function check_caps_equal(caps1: Gst.Caps, caps2: Gst.Caps): void;
    function check_chain_func(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn;
    function check_clear_log_filter(): void;
    function check_drop_buffers(): void;
    function check_element_push_buffer(element_name: string, buffer_in: Gst.Buffer, caps_in: Gst.Caps, buffer_out: Gst.Buffer, caps_out: Gst.Caps): void;
    function check_element_push_buffer_list(element_name: string, buffer_in: Gst.Buffer[], caps_in: Gst.Caps, buffer_out: Gst.Buffer[], caps_out: Gst.Caps, last_flow_return: Gst.FlowReturn): void;
    function check_init(argc: number, argv: string): void;
    function check_message_error(message: Gst.Message, type: Gst.MessageType, domain: GLib.Quark, code: number): void;
    function check_object_destroyed_on_unref(object_to_unref: null): void;
    function check_remove_log_filter(filter: CheckLogFilter): void;
    function check_setup_element(factory: string): Gst.Element;
    function check_setup_events(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format): void;
    function check_setup_events_with_stream_id(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format, stream_id: string): void;
    function check_setup_sink_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
    function check_setup_sink_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
    function check_setup_sink_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad;
    function check_setup_sink_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
    function check_setup_src_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
    function check_setup_src_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
    function check_setup_src_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad;
    function check_setup_src_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
    function check_teardown_element(element: Gst.Element): void;
    function check_teardown_pad_by_name(element: Gst.Element, name: string): void;
    function check_teardown_sink_pad(element: Gst.Element): void;
    function check_teardown_src_pad(element: Gst.Element): void;
    function consistency_checker_add_pad(consist: StreamConsistency, pad: Gst.Pad): boolean;
    function consistency_checker_free(consist: StreamConsistency): void;
    function consistency_checker_reset(consist: StreamConsistency): void;
    function harness_stress_thread_stop(t: HarnessThread): number;
    interface CheckLogFilterFunc {
        (log_domain: string, log_level: GLib.LogLevelFlags, message: string): boolean;
    }
    interface HarnessPrepareBufferFunc {
        (h: Harness, data: null): Gst.Buffer;
    }
    interface HarnessPrepareEventFunc {
        (h: Harness, data: null): Gst.Event;
    }
    namespace TestClock {
        interface SignalSignatures extends Gst.Clock.SignalSignatures {
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Clock.ConstructorProps {
            clock_type: Gst.ClockType;
            clockType: Gst.ClockType;
            start_time: bigint | number;
            startTime: bigint | number;
        }
    }
    class TestClock extends Gst.Clock {
        static $gtype: GObject.GType<TestClock>;
        get clock_type(): Gst.ClockType;
        set clock_type(val: Gst.ClockType);
        get clockType(): Gst.ClockType;
        set clockType(val: Gst.ClockType);
        get start_time(): number;
        get startTime(): number;
        $signals: TestClock.SignalSignatures;
        constructor(properties?: Partial<TestClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): TestClock;
        static new_with_start_time(start_time: Gst.ClockTime): TestClock;
        connect<K extends keyof TestClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TestClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TestClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TestClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TestClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TestClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static id_list_get_latest_time(pending_list: Gst.ClockID[] | null): Gst.ClockTime;
        advance_time(delta: Gst.ClockTimeDiff): void;
        crank(): boolean;
        get_next_entry_time(): Gst.ClockTime;
        has_id(id: Gst.ClockID): boolean;
        peek_id_count(): number;
        peek_next_pending_id(): [boolean, Gst.ClockID | null];
        process_id(pending_id: Gst.ClockID): boolean;
        process_id_list(pending_list: Gst.ClockID[] | null): number;
        process_next_clock_id(): Gst.ClockID | null;
        set_time(new_time: Gst.ClockTime): void;
        timed_wait_for_multiple_pending_ids(count: number, timeout_ms: number): [boolean, Gst.ClockID[] | null];
        wait_for_multiple_pending_ids(count: number): Gst.ClockID[] | null;
        wait_for_next_pending_id(): Gst.ClockID | null;
        wait_for_pending_id_count(count: number): void;
    }
    class CheckABIStruct {
        static $gtype: GObject.GType<CheckABIStruct>;
        name: string;
        size: number;
        abi_size: number;
        constructor(properties?: Partial<{
            name: string;
            size: number;
            abi_size: number;
        }>);
    }
    abstract class CheckLogFilter {
        static $gtype: GObject.GType<CheckLogFilter>;
    }
    class Harness {
        static $gtype: GObject.GType<Harness>;
        element: Gst.Element;
        srcpad: Gst.Pad;
        sinkpad: Gst.Pad;
        static stress_thread_stop(t: HarnessThread): number;
        add_element_sink_pad(sinkpad: Gst.Pad): void;
        add_element_src_pad(srcpad: Gst.Pad): void;
        add_probe(element_name: string, pad_name: string, mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): void;
        add_propose_allocation_meta(api: GObject.GType, params: Gst.Structure | null): void;
        add_sink(sink_element_name: string): void;
        add_sink_harness(sink_harness: Harness): void;
        add_sink_parse(launchline: string): void;
        add_src(src_element_name: string, has_clock_wait: boolean): void;
        add_src_harness(src_harness: Harness, has_clock_wait: boolean): void;
        add_src_parse(launchline: string, has_clock_wait: boolean): void;
        buffers_in_queue(): number;
        buffers_received(): number;
        crank_multiple_clock_waits(waits: number): boolean;
        crank_single_clock_wait(): boolean;
        create_buffer(size: bigint | number): Gst.Buffer;
        dump_to_file(filename: string): void;
        events_in_queue(): number;
        events_received(): number;
        find_element(element_name: string): Gst.Element | null;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_last_pushed_timestamp(): Gst.ClockTime;
        get_testclock(): TestClock | null;
        play(): void;
        pull(): Gst.Buffer | null;
        pull_event(): Gst.Event | null;
        pull_until_eos(): [boolean, Gst.Buffer | null];
        pull_upstream_event(): Gst.Event | null;
        push(buffer: Gst.Buffer): Gst.FlowReturn;
        push_and_pull(buffer: Gst.Buffer): Gst.Buffer | null;
        push_event(event: Gst.Event): boolean;
        push_from_src(): Gst.FlowReturn;
        push_to_sink(): Gst.FlowReturn;
        push_upstream_event(event: Gst.Event): boolean;
        query_latency(): Gst.ClockTime;
        set_blocking_push_mode(): void;
        set_caps(_in: Gst.Caps, out: Gst.Caps): void;
        set_caps_str(_in: string, out: string): void;
        set_drop_buffers(drop_buffers: boolean): void;
        set_forwarding(forwarding: boolean): void;
        set_live(is_live: boolean): void;
        set_propose_allocator(allocator: Gst.Allocator | null, params: Gst.AllocationParams | null): void;
        set_sink_caps(caps: Gst.Caps): void;
        set_sink_caps_str(str: string): void;
        set_src_caps(caps: Gst.Caps): void;
        set_src_caps_str(str: string): void;
        set_time(time: Gst.ClockTime): boolean;
        set_upstream_latency(latency: Gst.ClockTime): void;
        sink_push_many(pushes: number): Gst.FlowReturn;
        src_crank_and_push_many(cranks: number, pushes: number): Gst.FlowReturn;
        src_push_event(): boolean;
        take_all_data_as_buffer(): Gst.Buffer;
        take_all_data(): GLib.Bytes;
        teardown(): void;
        try_pull(): Gst.Buffer | null;
        try_pull_event(): Gst.Event | null;
        try_pull_upstream_event(): Gst.Event | null;
        upstream_events_in_queue(): number;
        upstream_events_received(): number;
        use_systemclock(): void;
        use_testclock(): void;
        wait_for_clock_id_waits(waits: number, timeout: number): boolean;
    }
    abstract class HarnessPrivate {
        static $gtype: GObject.GType<HarnessPrivate>;
    }
    abstract class HarnessThread {
        static $gtype: GObject.GType<HarnessThread>;
    }
    abstract class StreamConsistency {
        static $gtype: GObject.GType<StreamConsistency>;
    }
    type TestClockClass = typeof TestClock;
    abstract class TestClockPrivate {
        static $gtype: GObject.GType<TestClockPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstCheck;
}
declare module 'gi://GstCheck' {
    import GstCheck10 from 'gi://GstCheck?version=1.0';
    export default GstCheck10;
}
