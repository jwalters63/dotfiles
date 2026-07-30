declare module 'gi://GstAudio?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstAudio {
    export namespace AudioBaseSinkDiscontReason {
        export const $gtype: GObject.GType<AudioBaseSinkDiscontReason>;
    }
    enum AudioBaseSinkDiscontReason {
        NO_DISCONT,
        NEW_CAPS,
        FLUSH,
        SYNC_LATENCY,
        ALIGNMENT,
        DEVICE_FAILURE,
    }
    export namespace AudioBaseSinkSlaveMethod {
        export const $gtype: GObject.GType<AudioBaseSinkSlaveMethod>;
    }
    enum AudioBaseSinkSlaveMethod {
        RESAMPLE,
        SKEW,
        NONE,
        CUSTOM,
    }
    export namespace AudioBaseSrcSlaveMethod {
        export const $gtype: GObject.GType<AudioBaseSrcSlaveMethod>;
    }
    enum AudioBaseSrcSlaveMethod {
        RESAMPLE,
        RE_TIMESTAMP,
        SKEW,
        NONE,
    }
    export namespace AudioCdSrcMode {
        export const $gtype: GObject.GType<AudioCdSrcMode>;
    }
    enum AudioCdSrcMode {
        NORMAL,
        CONTINUOUS,
    }
    export namespace AudioChannelPosition {
        export const $gtype: GObject.GType<AudioChannelPosition>;
    }
    enum AudioChannelPosition {
        NONE,
        MONO,
        INVALID,
        FRONT_LEFT,
        FRONT_RIGHT,
        FRONT_CENTER,
        LFE1,
        REAR_LEFT,
        REAR_RIGHT,
        FRONT_LEFT_OF_CENTER,
        FRONT_RIGHT_OF_CENTER,
        REAR_CENTER,
        LFE2,
        SIDE_LEFT,
        SIDE_RIGHT,
        TOP_FRONT_LEFT,
        TOP_FRONT_RIGHT,
        TOP_FRONT_CENTER,
        TOP_CENTER,
        TOP_REAR_LEFT,
        TOP_REAR_RIGHT,
        TOP_SIDE_LEFT,
        TOP_SIDE_RIGHT,
        TOP_REAR_CENTER,
        BOTTOM_FRONT_CENTER,
        BOTTOM_FRONT_LEFT,
        BOTTOM_FRONT_RIGHT,
        WIDE_LEFT,
        WIDE_RIGHT,
        SURROUND_LEFT,
        SURROUND_RIGHT,
        TOP_SURROUND_LEFT,
        TOP_SURROUND_RIGHT,
    }
    export namespace AudioDitherMethod {
        export const $gtype: GObject.GType<AudioDitherMethod>;
    }
    enum AudioDitherMethod {
        NONE,
        RPDF,
        TPDF,
        TPDF_HF,
    }
    export namespace AudioFormat {
        export const $gtype: GObject.GType<AudioFormat>;
    }
    enum AudioFormat {
        UNKNOWN,
        ENCODED,
        S8,
        U8,
        S16LE,
        S16BE,
        U16LE,
        U16BE,
        S24_32LE,
        S24_32BE,
        U24_32LE,
        U24_32BE,
        S32LE,
        S32BE,
        U32LE,
        U32BE,
        S24LE,
        S24BE,
        U24LE,
        U24BE,
        S20LE,
        S20BE,
        U20LE,
        U20BE,
        S18LE,
        S18BE,
        U18LE,
        U18BE,
        F32LE,
        F32BE,
        F64LE,
        F64BE,
        S20_32LE,
        S20_32BE,
        U20_32LE,
        U20_32BE,
        S16,
        U16,
        S24_32,
        U24_32,
        S32,
        U32,
        S24,
        U24,
        S20,
        U20,
        S20_32,
        U20_32,
        S18,
        U18,
        F32,
        F64,
    }
    export namespace AudioLayout {
        export const $gtype: GObject.GType<AudioLayout>;
    }
    enum AudioLayout {
        INTERLEAVED,
        NON_INTERLEAVED,
    }
    export namespace AudioNoiseShapingMethod {
        export const $gtype: GObject.GType<AudioNoiseShapingMethod>;
    }
    enum AudioNoiseShapingMethod {
        NONE,
        ERROR_FEEDBACK,
        SIMPLE,
        MEDIUM,
        HIGH,
    }
    export namespace AudioResamplerFilterInterpolation {
        export const $gtype: GObject.GType<AudioResamplerFilterInterpolation>;
    }
    enum AudioResamplerFilterInterpolation {
        NONE,
        LINEAR,
        CUBIC,
    }
    export namespace AudioResamplerFilterMode {
        export const $gtype: GObject.GType<AudioResamplerFilterMode>;
    }
    enum AudioResamplerFilterMode {
        INTERPOLATED,
        FULL,
        AUTO,
    }
    export namespace AudioResamplerMethod {
        export const $gtype: GObject.GType<AudioResamplerMethod>;
    }
    enum AudioResamplerMethod {
        NEAREST,
        LINEAR,
        CUBIC,
        BLACKMAN_NUTTALL,
        KAISER,
    }
    export namespace AudioRingBufferFormatType {
        export const $gtype: GObject.GType<AudioRingBufferFormatType>;
    }
    enum AudioRingBufferFormatType {
        RAW,
        MU_LAW,
        A_LAW,
        IMA_ADPCM,
        MPEG,
        GSM,
        IEC958,
        AC3,
        EAC3,
        DTS,
        MPEG2_AAC,
        MPEG4_AAC,
        MPEG2_AAC_RAW,
        MPEG4_AAC_RAW,
        FLAC,
        DSD,
    }
    export namespace AudioRingBufferState {
        export const $gtype: GObject.GType<AudioRingBufferState>;
    }
    enum AudioRingBufferState {
        STOPPED,
        PAUSED,
        STARTED,
        ERROR,
    }
    export namespace DsdFormat {
        export const $gtype: GObject.GType<DsdFormat>;
    }
    enum DsdFormat {
        DSD_FORMAT_UNKNOWN,
        DSD_FORMAT_U8,
        DSD_FORMAT_U16LE,
        DSD_FORMAT_U16BE,
        DSD_FORMAT_U32LE,
        DSD_FORMAT_U32BE,
        NUM_DSD_FORMATS,
        DSD_FORMAT_U16,
        DSD_FORMAT_U32,
    }
    enum StreamVolumeFormat {
        LINEAR,
        CUBIC,
        DB,
    }
    const AUDIO_CHANNELS_RANGE: string;
    const AUDIO_CONVERTER_OPT_DITHER_METHOD: string;
    const AUDIO_CONVERTER_OPT_DITHER_THRESHOLD: string;
    const AUDIO_CONVERTER_OPT_MIX_MATRIX: string;
    const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string;
    const AUDIO_CONVERTER_OPT_QUANTIZATION: string;
    const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string;
    const AUDIO_DECODER_MAX_ERRORS: number;
    const AUDIO_DECODER_SINK_NAME: string;
    const AUDIO_DECODER_SRC_NAME: string;
    const AUDIO_DEF_CHANNELS: number;
    const AUDIO_DEF_FORMAT: string;
    const AUDIO_DEF_RATE: number;
    const AUDIO_ENCODER_SINK_NAME: string;
    const AUDIO_ENCODER_SRC_NAME: string;
    const AUDIO_FORMATS_ALL: string;
    const AUDIO_FORMAT_LAST: number;
    const AUDIO_RATE_RANGE: string;
    const AUDIO_RESAMPLER_OPT_CUBIC_B: string;
    const AUDIO_RESAMPLER_OPT_CUBIC_C: string;
    const AUDIO_RESAMPLER_OPT_CUTOFF: string;
    const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string;
    const AUDIO_RESAMPLER_OPT_FILTER_MODE: string;
    const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string;
    const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string;
    const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string;
    const AUDIO_RESAMPLER_OPT_N_TAPS: string;
    const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string;
    const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string;
    const AUDIO_RESAMPLER_QUALITY_DEFAULT: number;
    const AUDIO_RESAMPLER_QUALITY_MAX: number;
    const AUDIO_RESAMPLER_QUALITY_MIN: number;
    const DSD_FORMATS_ALL: string;
    const DSD_MEDIA_TYPE: string;
    const DSD_SILENCE_PATTERN_BYTE: number;
    const META_TAG_AUDIO_CHANNELS_STR: string;
    const META_TAG_AUDIO_RATE_STR: string;
    const META_TAG_AUDIO_STR: string;
    const META_TAG_DSD_PLANE_OFFSETS_STR: string;
    function audio_buffer_clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null;
    function audio_buffer_map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, AudioBuffer];
    function audio_buffer_reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
    function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: bigint | number, samples: bigint | number): Gst.Buffer;
    function audio_channel_get_fallback_mask(channels: number): number;
    function audio_channel_positions_from_mask(channel_mask: bigint | number, position: AudioChannelPosition[]): boolean;
    function audio_channel_positions_to_mask(position: AudioChannelPosition[], force_order: boolean): [boolean, number];
    function audio_channel_positions_to_string(position: AudioChannelPosition[]): string;
    function audio_channel_positions_to_valid_order(position: AudioChannelPosition[]): boolean;
    function audio_check_valid_channel_positions(position: AudioChannelPosition[], force_order: boolean): boolean;
    function audio_clipping_meta_api_get_type(): GObject.GType;
    function audio_clipping_meta_get_info(): Gst.MetaInfo;
    function audio_downmix_meta_api_get_type(): GObject.GType;
    function audio_downmix_meta_get_info(): Gst.MetaInfo;
    function audio_format_build_integer(sign: boolean, endianness: number, width: number, depth: number): AudioFormat;
    function audio_format_fill_silence(info: AudioFormatInfo, dest: Uint8Array | string): void;
    function audio_format_from_string(format: string): AudioFormat;
    function audio_format_get_info(format: AudioFormat): AudioFormatInfo;
    function audio_format_to_string(format: AudioFormat): string;
    function audio_formats_raw(): AudioFormat[];
    function audio_get_channel_reorder_map(from: AudioChannelPosition[], to: AudioChannelPosition[], reorder_map: number[]): boolean;
    function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number;
    function audio_iec61937_payload(src: Uint8Array | string, dst: Uint8Array | string, spec: AudioRingBufferSpec, endianness: number): boolean;
    function audio_info_from_caps(caps: Gst.Caps): [boolean, AudioInfo];
    function audio_info_init(): AudioInfo;
    function audio_level_meta_api_get_type(): GObject.GType;
    function audio_level_meta_get_info(): Gst.MetaInfo;
    function audio_make_raw_caps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps;
    function audio_meta_api_get_type(): GObject.GType;
    function audio_meta_get_info(): Gst.MetaInfo;
    function audio_reorder_channels(data: Uint8Array | string, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
    function audio_reorder_channels_with_reorder_map(data: Uint8Array | string, bps: number, reorder_map: number[]): void;
    function audio_resampler_new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler;
    function audio_resampler_options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void;
    function buffer_add_audio_clipping_meta(buffer: Gst.Buffer, format: Gst.Format, start: bigint | number, end: bigint | number): AudioClippingMeta;
    function buffer_add_audio_level_meta(buffer: Gst.Buffer, level: number, voice_activity: boolean): AudioLevelMeta | null;
    function buffer_add_audio_meta(buffer: Gst.Buffer, info: AudioInfo, samples: bigint | number, offsets: (bigint | number)[] | null): AudioMeta;
    function buffer_add_dsd_plane_offset_meta(buffer: Gst.Buffer, num_bytes_per_channel: bigint | number, offsets: (bigint | number)[] | null): DsdPlaneOffsetMeta;
    function buffer_get_audio_downmix_meta_for_channels(buffer: Gst.Buffer, to_position: AudioChannelPosition[]): AudioDownmixMeta;
    function buffer_get_audio_level_meta(buffer: Gst.Buffer): AudioLevelMeta | null;
    function dsd_convert(input_data: Uint8Array | string, output_data: Uint8Array | string, input_format: DsdFormat, output_format: DsdFormat, input_layout: AudioLayout, output_layout: AudioLayout, input_plane_offsets: (bigint | number)[] | null, output_plane_offsets: (bigint | number)[] | null, num_dsd_bytes: bigint | number, reverse_byte_bits: boolean): void;
    function dsd_format_from_string(str: string): DsdFormat;
    function dsd_format_get_width(format: DsdFormat): number;
    function dsd_format_to_string(format: DsdFormat): string;
    function dsd_info_from_caps(caps: Gst.Caps): [boolean, DsdInfo];
    function dsd_info_init(): DsdInfo;
    function dsd_plane_offset_meta_api_get_type(): GObject.GType;
    function dsd_plane_offset_meta_get_info(): Gst.MetaInfo;
    function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
    interface AudioBaseSinkCustomSlavingCallback {
        (sink: AudioBaseSink, etime: Gst.ClockTime, itime: Gst.ClockTime, requested_skew: Gst.ClockTimeDiff, discont_reason: AudioBaseSinkDiscontReason): void;
    }
    interface AudioClockGetTimeFunc {
        (clock: Gst.Clock): Gst.ClockTime;
    }
    interface AudioFormatPack {
        (info: AudioFormatInfo, flags: AudioPackFlags, src: Uint8Array, data: Uint8Array, length: number): void;
    }
    interface AudioFormatUnpack {
        (info: AudioFormatInfo, flags: AudioPackFlags, dest: Uint8Array, data: Uint8Array, length: number): void;
    }
    interface AudioRingBufferCallback {
        (rbuf: AudioRingBuffer, data: Uint8Array): void;
    }
    export namespace AudioChannelMixerFlags {
        export const $gtype: GObject.GType<AudioChannelMixerFlags>;
    }
    enum AudioChannelMixerFlags {
        NONE,
        NON_INTERLEAVED_IN,
        NON_INTERLEAVED_OUT,
        UNPOSITIONED_IN,
        UNPOSITIONED_OUT,
    }
    export namespace AudioConverterFlags {
        export const $gtype: GObject.GType<AudioConverterFlags>;
    }
    enum AudioConverterFlags {
        NONE,
        IN_WRITABLE,
        VARIABLE_RATE,
    }
    export namespace AudioFlags {
        export const $gtype: GObject.GType<AudioFlags>;
    }
    enum AudioFlags {
        NONE,
        UNPOSITIONED,
    }
    export namespace AudioFormatFlags {
        export const $gtype: GObject.GType<AudioFormatFlags>;
    }
    enum AudioFormatFlags {
        INTEGER,
        FLOAT,
        SIGNED,
        COMPLEX,
        UNPACK,
    }
    export namespace AudioPackFlags {
        export const $gtype: GObject.GType<AudioPackFlags>;
    }
    enum AudioPackFlags {
        NONE,
        TRUNCATE_RANGE,
    }
    export namespace AudioQuantizeFlags {
        export const $gtype: GObject.GType<AudioQuantizeFlags>;
    }
    enum AudioQuantizeFlags {
        NONE,
        NON_INTERLEAVED,
    }
    export namespace AudioResamplerFlags {
        export const $gtype: GObject.GType<AudioResamplerFlags>;
    }
    enum AudioResamplerFlags {
        NONE,
        NON_INTERLEAVED_IN,
        NON_INTERLEAVED_OUT,
        VARIABLE_RATE,
    }
    namespace AudioAggregator {
        interface SignalSignatures extends GstBase.Aggregator.SignalSignatures {
            "notify::alignment-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::discont-wait": (pspec: GObject.ParamSpec) => void;
            "notify::force-live": (pspec: GObject.ParamSpec) => void;
            "notify::ignore-inactive-pads": (pspec: GObject.ParamSpec) => void;
            "notify::output-buffer-duration": (pspec: GObject.ParamSpec) => void;
            "notify::output-buffer-duration-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-upstream-latency": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::start-time-selection": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.Aggregator.ConstructorProps {
            alignment_threshold: bigint | number;
            alignmentThreshold: bigint | number;
            discont_wait: bigint | number;
            discontWait: bigint | number;
            force_live: boolean;
            forceLive: boolean;
            ignore_inactive_pads: boolean;
            ignoreInactivePads: boolean;
            output_buffer_duration: bigint | number;
            outputBufferDuration: bigint | number;
            output_buffer_duration_fraction: Gst.Fraction;
            outputBufferDurationFraction: Gst.Fraction;
        }
    }
    abstract class AudioAggregator extends GstBase.Aggregator {
        static $gtype: GObject.GType<AudioAggregator>;
        get alignment_threshold(): number;
        set alignment_threshold(val: bigint | number);
        get alignmentThreshold(): number;
        set alignmentThreshold(val: bigint | number);
        get discont_wait(): number;
        set discont_wait(val: bigint | number);
        get discontWait(): number;
        set discontWait(val: bigint | number);
        get force_live(): boolean;
        get forceLive(): boolean;
        get ignore_inactive_pads(): boolean;
        set ignore_inactive_pads(val: boolean);
        get ignoreInactivePads(): boolean;
        set ignoreInactivePads(val: boolean);
        get output_buffer_duration(): number;
        set output_buffer_duration(val: bigint | number);
        get outputBufferDuration(): number;
        set outputBufferDuration(val: bigint | number);
        get output_buffer_duration_fraction(): Gst.Fraction;
        set output_buffer_duration_fraction(val: Gst.Fraction);
        get outputBufferDurationFraction(): Gst.Fraction;
        set outputBufferDurationFraction(val: Gst.Fraction);
        $signals: AudioAggregator.SignalSignatures;
        constructor(properties?: Partial<AudioAggregator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioAggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioAggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioAggregator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioAggregator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_aggregate_one_buffer(pad: AudioAggregatorPad, inbuf: Gst.Buffer, in_offset: number, outbuf: Gst.Buffer, out_offset: number, num_frames: number): boolean;
        vfunc_create_output_buffer(num_frames: number): Gst.Buffer;
        set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void;
    }
    namespace AudioAggregatorConvertPad {
        interface SignalSignatures extends AudioAggregatorPad.SignalSignatures {
            "notify::converter-config": (pspec: GObject.ParamSpec) => void;
            "notify::qos-messages": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends AudioAggregatorPad.ConstructorProps {
            converter_config: Gst.Structure;
            converterConfig: Gst.Structure;
        }
    }
    class AudioAggregatorConvertPad extends AudioAggregatorPad {
        static $gtype: GObject.GType<AudioAggregatorConvertPad>;
        get converter_config(): Gst.Structure;
        set converter_config(val: Gst.Structure);
        get converterConfig(): Gst.Structure;
        set converterConfig(val: Gst.Structure);
        $signals: AudioAggregatorConvertPad.SignalSignatures;
        constructor(properties?: Partial<AudioAggregatorConvertPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioAggregatorConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregatorConvertPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioAggregatorConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregatorConvertPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioAggregatorConvertPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioAggregatorConvertPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace AudioAggregatorPad {
        interface SignalSignatures extends GstBase.AggregatorPad.SignalSignatures {
            "notify::qos-messages": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends GstBase.AggregatorPad.ConstructorProps {
            qos_messages: boolean;
            qosMessages: boolean;
        }
    }
    class AudioAggregatorPad extends GstBase.AggregatorPad {
        static $gtype: GObject.GType<AudioAggregatorPad>;
        get qos_messages(): boolean;
        set qos_messages(val: boolean);
        get qosMessages(): boolean;
        set qosMessages(val: boolean);
        $signals: AudioAggregatorPad.SignalSignatures;
        constructor(properties?: Partial<AudioAggregatorPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioAggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregatorPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioAggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioAggregatorPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioAggregatorPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioAggregatorPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_convert_buffer(in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer): Gst.Buffer;
        vfunc_update_conversion_info(): void;
    }
    namespace AudioBaseSink {
        interface SignalSignatures extends GstBase.BaseSink.SignalSignatures {
            "notify::alignment-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::can-activate-pull": (pspec: GObject.ParamSpec) => void;
            "notify::discont-wait": (pspec: GObject.ParamSpec) => void;
            "notify::drift-tolerance": (pspec: GObject.ParamSpec) => void;
            "notify::latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::provide-clock": (pspec: GObject.ParamSpec) => void;
            "notify::slave-method": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps {
            alignment_threshold: bigint | number;
            alignmentThreshold: bigint | number;
            buffer_time: bigint | number;
            bufferTime: bigint | number;
            can_activate_pull: boolean | any;
            canActivatePull: boolean;
            discont_wait: bigint | number;
            discontWait: bigint | number;
            drift_tolerance: bigint | number;
            driftTolerance: bigint | number;
            latency_time: bigint | number;
            latencyTime: bigint | number;
            provide_clock: boolean | any;
            provideClock: boolean;
            slave_method: AudioBaseSinkSlaveMethod;
            slaveMethod: AudioBaseSinkSlaveMethod;
        }
    }
    class AudioBaseSink extends GstBase.BaseSink {
        static $gtype: GObject.GType<AudioBaseSink>;
        get alignment_threshold(): number;
        set alignment_threshold(val: bigint | number);
        get alignmentThreshold(): number;
        set alignmentThreshold(val: bigint | number);
        get buffer_time(): number;
        set buffer_time(val: bigint | number);
        get bufferTime(): number;
        set bufferTime(val: bigint | number);
         can_activate_pull: boolean | any;
        get canActivatePull(): boolean;
        set canActivatePull(val: boolean);
        get discont_wait(): number;
        set discont_wait(val: bigint | number);
        get discontWait(): number;
        set discontWait(val: bigint | number);
        get drift_tolerance(): number;
        set drift_tolerance(val: bigint | number);
        get driftTolerance(): number;
        set driftTolerance(val: bigint | number);
        get latency_time(): number;
        set latency_time(val: bigint | number);
        get latencyTime(): number;
        set latencyTime(val: bigint | number);
         provide_clock: boolean | any;
        get provideClock(): boolean;
        set provideClock(val: boolean);
        get slave_method(): AudioBaseSinkSlaveMethod;
        set slave_method(val: AudioBaseSinkSlaveMethod);
        get slaveMethod(): AudioBaseSinkSlaveMethod;
        set slaveMethod(val: AudioBaseSinkSlaveMethod);
        $signals: AudioBaseSink.SignalSignatures;
        element: GstBase.BaseSink;
        ringbuffer: AudioRingBuffer;
        next_sample: number;
        provided_clock: Gst.Clock;
        eos_rendering: boolean;
        constructor(properties?: Partial<AudioBaseSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioBaseSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioBaseSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioBaseSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioBaseSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioBaseSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioBaseSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_ringbuffer(): AudioRingBuffer | null;
        vfunc_payload(buffer: Gst.Buffer): Gst.Buffer;
        create_ringbuffer(): AudioRingBuffer | null;
        get_alignment_threshold(): Gst.ClockTime;
        get_discont_wait(): Gst.ClockTime;
        get_drift_tolerance(): number;
        get_provide_clock(): boolean;
        get_slave_method(): AudioBaseSinkSlaveMethod;
        report_device_failure(): void;
        set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
        set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void;
        set_discont_wait(discont_wait: Gst.ClockTime): void;
        set_drift_tolerance(drift_tolerance: bigint | number): void;
        set_provide_clock(provide: boolean): void;
        set_slave_method(method: AudioBaseSinkSlaveMethod): void;
    }
    namespace AudioBaseSrc {
        interface SignalSignatures extends GstBase.PushSrc.SignalSignatures {
            "notify::actual-buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::actual-latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::provide-clock": (pspec: GObject.ParamSpec) => void;
            "notify::slave-method": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.PushSrc.ConstructorProps {
            actual_buffer_time: bigint | number;
            actualBufferTime: bigint | number;
            actual_latency_time: bigint | number;
            actualLatencyTime: bigint | number;
            buffer_time: bigint | number;
            bufferTime: bigint | number;
            latency_time: bigint | number;
            latencyTime: bigint | number;
            provide_clock: boolean | any;
            provideClock: boolean;
            slave_method: AudioBaseSrcSlaveMethod;
            slaveMethod: AudioBaseSrcSlaveMethod;
        }
    }
    class AudioBaseSrc extends GstBase.PushSrc {
        static $gtype: GObject.GType<AudioBaseSrc>;
        get actual_buffer_time(): number;
        get actualBufferTime(): number;
        get actual_latency_time(): number;
        get actualLatencyTime(): number;
        get buffer_time(): number;
        set buffer_time(val: bigint | number);
        get bufferTime(): number;
        set bufferTime(val: bigint | number);
        get latency_time(): number;
        set latency_time(val: bigint | number);
        get latencyTime(): number;
        set latencyTime(val: bigint | number);
         provide_clock: boolean | any;
        get provideClock(): boolean;
        set provideClock(val: boolean);
        get slave_method(): AudioBaseSrcSlaveMethod;
        set slave_method(val: AudioBaseSrcSlaveMethod);
        get slaveMethod(): AudioBaseSrcSlaveMethod;
        set slaveMethod(val: AudioBaseSrcSlaveMethod);
        $signals: AudioBaseSrc.SignalSignatures;
        element: GstBase.PushSrc;
        ringbuffer: AudioRingBuffer;
        next_sample: number;
        clock: Gst.Clock;
        constructor(properties?: Partial<AudioBaseSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioBaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioBaseSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioBaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioBaseSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioBaseSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioBaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_ringbuffer(): AudioRingBuffer | null;
        create_ringbuffer(): AudioRingBuffer | null;
        get_provide_clock(): boolean;
        get_slave_method(): AudioBaseSrcSlaveMethod;
        set_provide_clock(provide: boolean): void;
        set_slave_method(method: AudioBaseSrcSlaveMethod): void;
    }
    namespace AudioCdSrc {
        interface SignalSignatures extends GstBase.PushSrc.SignalSignatures {
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::track": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.PushSrc.ConstructorProps, Gst.URIHandler.ConstructorProps {
            device: string;
            mode: AudioCdSrcMode;
            track: number;
        }
    }
    class AudioCdSrc extends GstBase.PushSrc implements Gst.URIHandler {
        static $gtype: GObject.GType<AudioCdSrc>;
        get device(): string;
        set device(val: string);
        get mode(): AudioCdSrcMode;
        set mode(val: AudioCdSrcMode);
        get track(): number;
        set track(val: number);
        $signals: AudioCdSrc.SignalSignatures;
        pushsrc: GstBase.PushSrc;
        constructor(properties?: Partial<AudioCdSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioCdSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioCdSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioCdSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioCdSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioCdSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioCdSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): void;
        vfunc_open(device: string): boolean;
        vfunc_read_sector(sector: number): Gst.Buffer;
        add_track(track: AudioCdSrcTrack): boolean;
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
    namespace AudioClock {
        interface SignalSignatures extends Gst.SystemClock.SignalSignatures {
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.SystemClock.ConstructorProps {}
    }
    class AudioClock extends Gst.SystemClock {
        static $gtype: GObject.GType<AudioClock>;
        $signals: AudioClock.SignalSignatures;
        clock: Gst.SystemClock;
        func: AudioClockGetTimeFunc;
        user_data: null;
        destroy_notify: GLib.DestroyNotify;
        constructor(properties?: Partial<AudioClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, func: AudioClockGetTimeFunc): AudioClock;
        connect<K extends keyof AudioClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        adjust(time: Gst.ClockTime): Gst.ClockTime;
        get_time(): Gst.ClockTime;
        invalidate(): void;
        reset(time: Gst.ClockTime): void;
    }
    namespace AudioDecoder {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-latency": (pspec: GObject.ParamSpec) => void;
            "notify::plc": (pspec: GObject.ParamSpec) => void;
            "notify::tolerance": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            max_errors: number;
            maxErrors: number;
            min_latency: bigint | number;
            minLatency: bigint | number;
            plc: boolean;
            tolerance: bigint | number;
        }
    }
    abstract class AudioDecoder extends Gst.Element {
        static $gtype: GObject.GType<AudioDecoder>;
        get max_errors(): number;
        set max_errors(val: number);
        get maxErrors(): number;
        set maxErrors(val: number);
        get min_latency(): number;
        set min_latency(val: bigint | number);
        get minLatency(): number;
        set minLatency(val: bigint | number);
        get plc(): boolean;
        set plc(val: boolean);
        get tolerance(): number;
        set tolerance(val: bigint | number);
        $signals: AudioDecoder.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        constructor(properties?: Partial<AudioDecoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioDecoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioDecoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioDecoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioDecoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_flush(hard: boolean): void;
        vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
        vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_negotiate(): boolean;
        vfunc_open(): boolean;
        vfunc_parse(adapter: GstBase.Adapter): [Gst.FlowReturn, number, number];
        vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_set_format(caps: Gst.Caps): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_sink_query(query: Gst.Query): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
        allocate_output_buffer(size: bigint | number): Gst.Buffer;
        finish_frame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn;
        finish_subframe(buf: Gst.Buffer | null): Gst.FlowReturn;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_audio_info(): AudioInfo;
        get_delay(): number;
        get_drainable(): boolean;
        get_estimate_rate(): number;
        get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
        get_max_errors(): number;
        get_min_latency(): Gst.ClockTime;
        get_needs_format(): boolean;
        get_parse_state(): [boolean, boolean];
        get_plc(): boolean;
        get_plc_aware(): number;
        get_tolerance(): Gst.ClockTime;
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        negotiate(): boolean;
        proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
        set_allocation_caps(allocation_caps: Gst.Caps | null): void;
        set_drainable(enabled: boolean): void;
        set_estimate_rate(enabled: boolean): void;
        set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
        set_max_errors(num: number): void;
        set_min_latency(num: Gst.ClockTime): void;
        set_needs_format(enabled: boolean): void;
        set_output_caps(caps: Gst.Caps): boolean;
        set_output_format(info: AudioInfo): boolean;
        set_plc(enabled: boolean): void;
        set_plc_aware(plc: boolean): void;
        set_tolerance(tolerance: Gst.ClockTime): void;
        set_use_default_pad_acceptcaps(use: boolean): void;
    }
    namespace AudioEncoder {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::hard-resync": (pspec: GObject.ParamSpec) => void;
            "notify::mark-granule": (pspec: GObject.ParamSpec) => void;
            "notify::perfect-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::tolerance": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.Preset.ConstructorProps {
            hard_resync: boolean;
            hardResync: boolean;
            mark_granule: boolean;
            markGranule: boolean;
            perfect_timestamp: boolean;
            perfectTimestamp: boolean;
            tolerance: bigint | number;
        }
    }
    abstract class AudioEncoder extends Gst.Element implements Gst.Preset {
        static $gtype: GObject.GType<AudioEncoder>;
        get hard_resync(): boolean;
        set hard_resync(val: boolean);
        get hardResync(): boolean;
        set hardResync(val: boolean);
        get mark_granule(): boolean;
        get markGranule(): boolean;
        get perfect_timestamp(): boolean;
        set perfect_timestamp(val: boolean);
        get perfectTimestamp(): boolean;
        set perfectTimestamp(val: boolean);
        get tolerance(): number;
        set tolerance(val: bigint | number);
        $signals: AudioEncoder.SignalSignatures;
        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        constructor(properties?: Partial<AudioEncoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioEncoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioEncoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioEncoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioEncoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioEncoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioEncoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_flush(): void;
        vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
        vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_negotiate(): boolean;
        vfunc_open(): boolean;
        vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_set_format(info: AudioInfo): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_sink_query(query: Gst.Query): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
        allocate_output_buffer(size: bigint | number): Gst.Buffer;
        finish_frame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_audio_info(): AudioInfo;
        get_drainable(): boolean;
        get_frame_max(): number;
        get_frame_samples_max(): number;
        get_frame_samples_min(): number;
        get_hard_min(): boolean;
        get_hard_resync(): boolean;
        get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
        get_lookahead(): number;
        get_mark_granule(): boolean;
        get_perfect_timestamp(): boolean;
        get_tolerance(): Gst.ClockTime;
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        negotiate(): boolean;
        proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
        set_allocation_caps(allocation_caps: Gst.Caps | null): void;
        set_drainable(enabled: boolean): void;
        set_frame_max(num: number): void;
        set_frame_samples_max(num: number): void;
        set_frame_samples_min(num: number): void;
        set_hard_min(enabled: boolean): void;
        set_hard_resync(enabled: boolean): void;
        set_headers(headers: Gst.Buffer[]): void;
        set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
        set_lookahead(num: number): void;
        set_mark_granule(enabled: boolean): void;
        set_output_format(caps: Gst.Caps): boolean;
        set_perfect_timestamp(enabled: boolean): void;
        set_tolerance(tolerance: Gst.ClockTime): void;
        delete_preset(name: string): boolean;
        get_meta(name: string, tag: string): [boolean, string];
        get_preset_names(): string[];
        get_property_names(): string[];
        is_editable(): boolean;
        load_preset(name: string): boolean;
        rename_preset(old_name: string, new_name: string): boolean;
        save_preset(name: string): boolean;
        set_meta(name: string, tag: string, value: string | null): boolean;
        vfunc_delete_preset(name: string): boolean;
        vfunc_get_meta(name: string, tag: string): [boolean, string];
        vfunc_get_preset_names(): string[];
        vfunc_get_property_names(): string[];
        vfunc_load_preset(name: string): boolean;
        vfunc_rename_preset(old_name: string, new_name: string): boolean;
        vfunc_save_preset(name: string): boolean;
        vfunc_set_meta(name: string, tag: string, value: string | null): boolean;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    namespace AudioFilter {
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
    }
    abstract class AudioFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<AudioFilter>;
        $signals: AudioFilter.SignalSignatures;
        basetransform: GstBase.BaseTransform;
        constructor(properties?: Partial<AudioFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static add_pad_templates(allowed_caps: Gst.Caps): void;
        vfunc_setup(info: AudioInfo): boolean;
    }
    namespace AudioRingBuffer {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    abstract class AudioRingBuffer extends Gst.Object {
        static $gtype: GObject.GType<AudioRingBuffer>;
        $signals: AudioRingBuffer.SignalSignatures;
        object: Gst.Object;
        open: boolean;
        acquired: boolean;
        memory: number;
        size: number;
        samples_per_seg: number;
        empty_seg: number;
        state: number;
        segdone: number;
        segbase: number;
        waiting: number;
        constructor(properties?: Partial<AudioRingBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioRingBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioRingBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioRingBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioRingBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioRingBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioRingBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static debug_spec_buff(spec: AudioRingBufferSpec): void;
        static debug_spec_caps(spec: AudioRingBufferSpec): void;
        static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean;
        vfunc_acquire(spec: AudioRingBufferSpec): boolean;
        vfunc_activate(active: boolean): boolean;
        vfunc_clear_all(): void;
        vfunc_close_device(): boolean;
        vfunc_commit(sample: number, data: Uint8Array, out_samples: number, accum: number): [number, bigint | number, number];
        vfunc_delay(): number;
        vfunc_open_device(): boolean;
        vfunc_pause(): boolean;
        vfunc_release(): boolean;
        vfunc_resume(): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        acquire(spec: AudioRingBufferSpec): boolean;
        activate(active: boolean): boolean;
        advance(advance: number): void;
        clear(segment: number): void;
        clear_all(): void;
        close_device(): boolean;
        commit(sample: bigint | number, data: Uint8Array | string, out_samples: number, accum: number): [number, number, number];
        convert(src_fmt: Gst.Format, src_val: bigint | number, dest_fmt: Gst.Format): [boolean, number];
        delay(): number;
        device_is_open(): boolean;
        get_segbase(): number;
        get_segdone(): number;
        is_acquired(): boolean;
        is_active(): boolean;
        is_flushing(): boolean;
        may_start(allowed: boolean): void;
        open_device(): boolean;
        pause(): boolean;
        prepare_read(): [boolean, number, Uint8Array];
        read(sample: bigint | number, data: Uint8Array | string): [number, Gst.ClockTime];
        release(): boolean;
        samples_done(): number;
        set_callback(cb: AudioRingBufferCallback | null): void;
        set_channel_positions(position: AudioChannelPosition[]): void;
        set_errored(): void;
        set_flushing(flushing: boolean): void;
        set_sample(sample: bigint | number): void;
        set_segdone(segdone: bigint | number): void;
        set_timestamp(readseg: number, timestamp: Gst.ClockTime): void;
        start(): boolean;
        stop(): boolean;
    }
    namespace AudioSink {
        interface SignalSignatures extends AudioBaseSink.SignalSignatures {
            "notify::alignment-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::can-activate-pull": (pspec: GObject.ParamSpec) => void;
            "notify::discont-wait": (pspec: GObject.ParamSpec) => void;
            "notify::drift-tolerance": (pspec: GObject.ParamSpec) => void;
            "notify::latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::provide-clock": (pspec: GObject.ParamSpec) => void;
            "notify::slave-method": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends AudioBaseSink.ConstructorProps {}
    }
    class AudioSink extends AudioBaseSink {
        static $gtype: GObject.GType<AudioSink>;
        $signals: AudioSink.SignalSignatures;
        element: AudioBaseSink;
        constructor(properties?: Partial<AudioSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_delay(): number;
        vfunc_open(): boolean;
        vfunc_pause(): void;
        vfunc_prepare(spec: AudioRingBufferSpec): boolean;
        vfunc_prepare(...args: never[]): any;
        vfunc_reset(): void;
        vfunc_resume(): void;
        vfunc_stop(): void;
        vfunc_stop(...args: never[]): any;
        vfunc_unprepare(): boolean;
        vfunc_write(data: Uint8Array): number;
    }
    namespace AudioSrc {
        interface SignalSignatures extends AudioBaseSrc.SignalSignatures {
            "notify::actual-buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::actual-latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::buffer-time": (pspec: GObject.ParamSpec) => void;
            "notify::latency-time": (pspec: GObject.ParamSpec) => void;
            "notify::provide-clock": (pspec: GObject.ParamSpec) => void;
            "notify::slave-method": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AudioBaseSrc.ConstructorProps {}
    }
    class AudioSrc extends AudioBaseSrc {
        static $gtype: GObject.GType<AudioSrc>;
        $signals: AudioSrc.SignalSignatures;
        element: AudioBaseSrc;
        constructor(properties?: Partial<AudioSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_delay(): number;
        vfunc_open(): boolean;
        vfunc_prepare(spec: AudioRingBufferSpec): boolean;
        vfunc_read(data: Uint8Array): [number, Gst.ClockTime];
        vfunc_reset(): void;
        vfunc_unprepare(): boolean;
    }
    type AudioAggregatorClass = typeof AudioAggregator;
    type AudioAggregatorConvertPadClass = typeof AudioAggregatorConvertPad;
    abstract class AudioAggregatorConvertPadPrivate {
        static $gtype: GObject.GType<AudioAggregatorConvertPadPrivate>;
    }
    type AudioAggregatorPadClass = typeof AudioAggregatorPad;
    abstract class AudioAggregatorPadPrivate {
        static $gtype: GObject.GType<AudioAggregatorPadPrivate>;
    }
    abstract class AudioAggregatorPrivate {
        static $gtype: GObject.GType<AudioAggregatorPrivate>;
    }
    type AudioBaseSinkClass = typeof AudioBaseSink;
    abstract class AudioBaseSinkPrivate {
        static $gtype: GObject.GType<AudioBaseSinkPrivate>;
    }
    type AudioBaseSrcClass = typeof AudioBaseSrc;
    abstract class AudioBaseSrcPrivate {
        static $gtype: GObject.GType<AudioBaseSrcPrivate>;
    }
    class AudioBuffer {
        static $gtype: GObject.GType<AudioBuffer>;
        n_samples: number;
        n_planes: number;
        planes: null;
        static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null;
        static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, AudioBuffer];
        static reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
        static truncate(buffer: Gst.Buffer, bpf: number, trim: bigint | number, samples: bigint | number): Gst.Buffer;
        unmap(): void;
    }
    type AudioCdSrcClass = typeof AudioCdSrc;
    abstract class AudioCdSrcPrivate {
        static $gtype: GObject.GType<AudioCdSrcPrivate>;
    }
    class AudioCdSrcTrack {
        static $gtype: GObject.GType<AudioCdSrcTrack>;
        is_audio: boolean;
        num: number;
        start: number;
        end: number;
    }
    abstract class AudioChannelMixer {
        static $gtype: GObject.GType<AudioChannelMixer>;
        free(): void;
        is_passthrough(): boolean;
    }
    class AudioClippingMeta {
        static $gtype: GObject.GType<AudioClippingMeta>;
        format: Gst.Format;
        start: number;
        end: number;
        static get_info(): Gst.MetaInfo;
    }
    type AudioClockClass = typeof AudioClock;
    class AudioConverter {
        static $gtype: GObject.GType<AudioConverter>;
        constructor(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config: Gst.Structure | null);
        static ["new"](flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config: Gst.Structure | null): AudioConverter;
        convert(flags: AudioConverterFlags, _in: Uint8Array | string): [boolean, Uint8Array];
        free(): void;
        get_config(): [Gst.Structure, number, number];
        get_in_frames(out_frames: bigint | number): number;
        get_max_latency(): number;
        get_out_frames(in_frames: bigint | number): number;
        is_passthrough(): boolean;
        reset(): void;
        supports_inplace(): boolean;
        update_config(in_rate: number, out_rate: number, config: Gst.Structure | null): boolean;
    }
    type AudioDecoderClass = typeof AudioDecoder;
    abstract class AudioDecoderPrivate {
        static $gtype: GObject.GType<AudioDecoderPrivate>;
    }
    class AudioDownmixMeta {
        static $gtype: GObject.GType<AudioDownmixMeta>;
        from_position: AudioChannelPosition[];
        to_position: AudioChannelPosition[];
        from_channels: number;
        to_channels: number;
        matrix: number[];
        static get_info(): Gst.MetaInfo;
    }
    type AudioEncoderClass = typeof AudioEncoder;
    abstract class AudioEncoderPrivate {
        static $gtype: GObject.GType<AudioEncoderPrivate>;
    }
    type AudioFilterClass = typeof AudioFilter;
    class AudioFormatInfo {
        static $gtype: GObject.GType<AudioFormatInfo>;
        format: AudioFormat;
        name: string;
        description: string;
        flags: AudioFormatFlags;
        endianness: number;
        width: number;
        depth: number;
        silence: Uint8Array;
        unpack_format: AudioFormat;
        unpack_func: AudioFormatUnpack;
        pack_func: AudioFormatPack;
        fill_silence(dest: Uint8Array | string): void;
    }
    class AudioInfo {
        static $gtype: GObject.GType<AudioInfo>;
        flags: AudioFlags;
        layout: AudioLayout;
        rate: number;
        channels: number;
        bpf: number;
        position: AudioChannelPosition[];
        constructor(properties?: Partial<{
            flags: AudioFlags;
            layout: AudioLayout;
            rate: number;
            channels: number;
            bpf: number;
            position: AudioChannelPosition[];
        }>);
        static ["new"](): AudioInfo;
        static new_from_caps(caps: Gst.Caps): AudioInfo;
        static from_caps(caps: Gst.Caps): [boolean, AudioInfo];
        static init(): AudioInfo;
        convert(src_fmt: Gst.Format, src_val: bigint | number, dest_fmt: Gst.Format): [boolean, number];
        copy(): AudioInfo;
        free(): void;
        is_equal(other: AudioInfo): boolean;
        set_format(format: AudioFormat, rate: number, channels: number, position: AudioChannelPosition[] | null): void;
        to_caps(): Gst.Caps;
    }
    class AudioLevelMeta {
        static $gtype: GObject.GType<AudioLevelMeta>;
        level: number;
        voice_activity: boolean;
        static get_info(): Gst.MetaInfo;
    }
    class AudioMeta {
        static $gtype: GObject.GType<AudioMeta>;
        samples: number;
        offsets: number[];
        static get_info(): Gst.MetaInfo;
    }
    abstract class AudioQuantize {
        static $gtype: GObject.GType<AudioQuantize>;
        free(): void;
        reset(): void;
    }
    abstract class AudioResampler {
        static $gtype: GObject.GType<AudioResampler>;
        static ["new"](method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler;
        static options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void;
        free(): void;
        get_in_frames(out_frames: bigint | number): number;
        get_max_latency(): number;
        get_out_frames(in_frames: bigint | number): number;
        resample(_in: null, in_frames: bigint | number, out: null, out_frames: bigint | number): void;
        reset(): void;
        update(in_rate: number, out_rate: number, options: Gst.Structure): boolean;
    }
    type AudioRingBufferClass = typeof AudioRingBuffer;
    abstract class AudioRingBufferPrivate {
        static $gtype: GObject.GType<AudioRingBufferPrivate>;
    }
    class AudioRingBufferSpec {
        static $gtype: GObject.GType<AudioRingBufferSpec>;
        type: AudioRingBufferFormatType;
        latency_time: number;
        buffer_time: number;
        segsize: number;
        segtotal: number;
        seglatency: number;
    }
    type AudioSinkClass = typeof AudioSink;
    class AudioSinkClassExtension {
        static $gtype: GObject.GType<AudioSinkClassExtension>;
    }
    type AudioSrcClass = typeof AudioSrc;
    class AudioStreamAlign {
        static $gtype: GObject.GType<AudioStreamAlign>;
        constructor(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime);
        static ["new"](rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign;
        copy(): AudioStreamAlign;
        free(): void;
        get_alignment_threshold(): Gst.ClockTime;
        get_discont_wait(): Gst.ClockTime;
        get_rate(): number;
        get_samples_since_discont(): number;
        get_timestamp_at_discont(): Gst.ClockTime;
        mark_discont(): void;
        process(discont: boolean, timestamp: Gst.ClockTime, n_samples: number): [boolean, Gst.ClockTime, Gst.ClockTime, number];
        set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
        set_discont_wait(discont_wait: Gst.ClockTime): void;
        set_rate(rate: number): void;
    }
    class DsdInfo {
        static $gtype: GObject.GType<DsdInfo>;
        format: DsdFormat;
        rate: number;
        channels: number;
        layout: AudioLayout;
        reversed_bytes: boolean;
        positions: AudioChannelPosition[];
        flags: AudioFlags;
        constructor(properties?: Partial<{
            format: DsdFormat;
            rate: number;
            channels: number;
            layout: AudioLayout;
            reversed_bytes: boolean;
            positions: AudioChannelPosition[];
            flags: AudioFlags;
        }>);
        static ["new"](): DsdInfo;
        static new_from_caps(caps: Gst.Caps): DsdInfo;
        static from_caps(caps: Gst.Caps): [boolean, DsdInfo];
        static init(): DsdInfo;
        copy(): DsdInfo;
        free(): void;
        is_equal(other: DsdInfo): boolean;
        set_format(format: DsdFormat, rate: number, channels: number, positions: AudioChannelPosition[] | null): void;
        to_caps(): Gst.Caps;
    }
    class DsdPlaneOffsetMeta {
        static $gtype: GObject.GType<DsdPlaneOffsetMeta>;
        num_channels: number;
        num_bytes_per_channel: number;
        offsets: number;
        static get_info(): Gst.MetaInfo;
    }
    type StreamVolumeInterface = typeof StreamVolume;
    namespace StreamVolume {
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mute: boolean;
            volume: number;
        }
    }
    export interface StreamVolumeNamespace {
        $gtype: GObject.GType<StreamVolume>;
        prototype: StreamVolume;
        convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
    }
    interface StreamVolume extends GObject.Object {
        get mute(): boolean;
        set mute(val: boolean);
        get volume(): number;
        set volume(val: number);
        get_mute(): boolean;
        get_volume(format: StreamVolumeFormat): number;
        set_mute(mute: boolean): void;
        set_volume(format: StreamVolumeFormat, val: number): void;
    }
    export const StreamVolume: StreamVolumeNamespace & {
        new (): StreamVolume; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstAudio;
}
declare module 'gi://GstAudio' {
    import GstAudio10 from 'gi://GstAudio?version=1.0';
    export default GstAudio10;
}
