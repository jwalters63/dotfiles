declare module 'gi://GstBadAudio?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstAudio from 'gi://GstAudio?version=1.0';
export namespace GstBadAudio {
    enum NonstreamAudioOutputMode {
        LOOPING,
        STEADY,
    }
    enum NonstreamAudioSubsongMode {
        SINGLE,
        ALL,
        DECODER_DEFAULT,
    }
    const NONSTREAM_AUDIO_DECODER_SINK_NAME: string;
    const NONSTREAM_AUDIO_DECODER_SRC_NAME: string;
    namespace NonstreamAudioDecoder {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::current-subsong": (pspec: GObject.ParamSpec) => void;
            "notify::num-loops": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            current_subsong: number;
            currentSubsong: number;
            num_loops: number;
            numLoops: number;
        }
    }
    abstract class NonstreamAudioDecoder extends Gst.Element {
        static $gtype: GObject.GType<NonstreamAudioDecoder>;
        get current_subsong(): number;
        set current_subsong(val: number);
        get currentSubsong(): number;
        set currentSubsong(val: number);
        get num_loops(): number;
        set num_loops(val: number);
        get numLoops(): number;
        set numLoops(val: number);
        $signals: NonstreamAudioDecoder.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        upstream_size: number;
        loaded_mode: boolean;
        input_data_adapter: GstBase.Adapter;
        subsong_duration: Gst.ClockTime;
        output_format_changed: boolean;
        cur_pos_in_samples: number;
        num_decoded_samples: number;
        discont: boolean;
        allocator: Gst.Allocator;
        constructor(properties?: Partial<NonstreamAudioDecoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NonstreamAudioDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NonstreamAudioDecoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NonstreamAudioDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NonstreamAudioDecoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NonstreamAudioDecoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NonstreamAudioDecoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_decode(buffer: Gst.Buffer, num_samples: number): boolean;
        vfunc_get_current_subsong(): number;
        vfunc_get_main_tags(): Gst.TagList;
        vfunc_get_num_loops(): number;
        vfunc_get_num_subsongs(): number;
        vfunc_get_subsong_duration(subsong: number): Gst.ClockTime;
        vfunc_get_subsong_tags(subsong: number): Gst.TagList;
        vfunc_get_supported_output_modes(): number;
        vfunc_load_from_buffer(source_data: Gst.Buffer, initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number): boolean;
        vfunc_load_from_custom(initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number): boolean;
        vfunc_negotiate(): boolean;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_seek(new_position: Gst.ClockTime): boolean;
        vfunc_set_current_subsong(subsong: number, initial_position: Gst.ClockTime): boolean;
        vfunc_set_num_loops(num_loops: number): boolean;
        vfunc_set_output_mode(mode: NonstreamAudioOutputMode, current_position: Gst.ClockTime): boolean;
        vfunc_set_subsong_mode(mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime): boolean;
        vfunc_tell(): Gst.ClockTime;
        allocate_output_buffer(size: bigint | number): Gst.Buffer | null;
        get_downstream_info(format: GstAudio.AudioFormat, sample_rate: number, num_channels: number): void;
        handle_loop(new_position: Gst.ClockTime): void;
        set_output_format(audio_info: GstAudio.AudioInfo): boolean;
        set_output_format_simple(sample_rate: number, sample_format: GstAudio.AudioFormat, num_channels: number): boolean;
    }
    namespace PlanarAudioAdapter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PlanarAudioAdapter extends GObject.Object {
        static $gtype: GObject.GType<PlanarAudioAdapter>;
        $signals: PlanarAudioAdapter.SignalSignatures;
        constructor(properties?: Partial<PlanarAudioAdapter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): PlanarAudioAdapter;
        connect<K extends keyof PlanarAudioAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlanarAudioAdapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlanarAudioAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlanarAudioAdapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlanarAudioAdapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlanarAudioAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        available(): number;
        clear(): void;
        configure(info: GstAudio.AudioInfo): void;
        distance_from_discont(): number;
        dts_at_discont(): Gst.ClockTime;
        flush(to_flush: bigint | number): void;
        get_buffer(nsamples: bigint | number, flags: Gst.MapFlags): Gst.Buffer | null;
        offset_at_discont(): number;
        prev_dts(): [Gst.ClockTime, number];
        prev_offset(): [number, number];
        prev_pts(): [Gst.ClockTime, number];
        pts_at_discont(): Gst.ClockTime;
        push(buf: Gst.Buffer): void;
        take_buffer(nsamples: bigint | number, flags: Gst.MapFlags): Gst.Buffer | null;
    }
    type NonstreamAudioDecoderClass = typeof NonstreamAudioDecoder;
    type PlanarAudioAdapterClass = typeof PlanarAudioAdapter;
    const __name__: string;
    const __version__: string;
}
export default GstBadAudio;
}
declare module 'gi://GstBadAudio' {
    import GstBadAudio10 from 'gi://GstBadAudio?version=1.0';
    export default GstBadAudio10;
}
