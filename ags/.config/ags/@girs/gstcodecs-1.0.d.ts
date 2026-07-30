declare module 'gi://GstCodecs?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstCodecParsers from 'gi://GstCodecParsers?version=1.0';
export namespace GstCodecs {
    export namespace H264DecoderCompliance {
        export const $gtype: GObject.GType<H264DecoderCompliance>;
    }
    enum H264DecoderCompliance {
        AUTO,
        STRICT,
        NORMAL,
        FLEXIBLE,
    }
    enum H264DpbBumpMode {
        NORMAL_LATENCY,
        LOW_LATENCY,
        VERY_LOW_LATENCY,
    }
    enum H264PictureField {
        FRAME,
        TOP_FIELD,
        BOTTOM_FIELD,
    }
    enum H264PictureReference {
        NONE,
        SHORT_TERM,
        LONG_TERM,
    }
    enum Vp9ReferenceMode {
        SINGLE_REFERENCE,
        COMPOUND_REFERENCE,
        SELECT,
    }
    enum Vp9TxMode {
        ONLY_4X4,
        ALLOW_8X8,
        ALLOW_16X16,
        ALLOW_32X32,
        SELECT,
    }
    enum Vp9TxSize {
        "4X4",
        "8X8",
        "16X16",
        "32X32",
    }
    const H264_DPB_MAX_SIZE: number;
    const H265_DPB_MAX_SIZE: number;
    const VP9_BLOCK_SIZE_GROUPS: number;
    const VP9_CLASS0_SIZE: number;
    const VP9_COMP_MODE_CONTEXTS: number;
    const VP9_INTERP_FILTER_CONTEXTS: number;
    const VP9_INTER_MODES: number;
    const VP9_INTER_MODE_CONTEXTS: number;
    const VP9_INTRA_MODES: number;
    const VP9_IS_INTER_CONTEXTS: number;
    const VP9_MV_CLASSES: number;
    const VP9_MV_FR_SIZE: number;
    const VP9_MV_JOINTS: number;
    const VP9_MV_OFFSET_BITS: number;
    const VP9_PARTITION_CONTEXTS: number;
    const VP9_PARTITION_TYPES: number;
    const VP9_REF_CONTEXTS: number;
    const VP9_SEG_LVL_ALT_L: number;
    const VP9_SEG_LVL_ALT_Q: number;
    const VP9_SEG_LVL_MAX: number;
    const VP9_SEG_LVL_REF_FRAME: number;
    const VP9_SEG_SEG_LVL_SKIP: number;
    const VP9_SKIP_CONTEXTS: number;
    const VP9_SWITCHABLE_FILTERS: number;
    const VP9_TX_MODES: number;
    const VP9_TX_SIZES: number;
    const VP9_TX_SIZE_CONTEXTS: number;
    function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number;
    function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number;
    function vp9_get_qindex(segmentation_params: Vp9SegmentationParams, quantization_params: Vp9QuantizationParams, segment_id: number): number;
    function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean;
    namespace AV1Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class AV1Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<AV1Decoder>;
        $signals: AV1Decoder.SignalSignatures;
        constructor(properties?: Partial<AV1Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AV1Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AV1Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AV1Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AV1Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AV1Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AV1Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_tile(picture: AV1Picture, tile: AV1Tile): Gst.FlowReturn;
        vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): AV1Picture;
        vfunc_end_picture(picture: AV1Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(live: boolean): number;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
        vfunc_new_sequence(seq_hdr: GstCodecParsers.AV1SequenceHeaderOBU, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: AV1Picture, dpb: AV1Dpb): Gst.FlowReturn;
    }
    namespace H264Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::compliance": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {
            compliance: H264DecoderCompliance;
        }
    }
    abstract class H264Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<H264Decoder>;
        get compliance(): H264DecoderCompliance;
        set compliance(val: H264DecoderCompliance);
        $signals: H264Decoder.SignalSignatures;
        constructor(properties?: Partial<H264Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof H264Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H264Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof H264Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H264Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof H264Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<H264Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_slice(picture: H264Picture, slice: H264Slice, ref_pic_list0: H264Picture[], ref_pic_list1: H264Picture[]): Gst.FlowReturn;
        vfunc_end_picture(picture: H264Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(live: boolean): number;
        vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): Gst.FlowReturn;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
        vfunc_new_sequence(sps: GstCodecParsers.H264SPS, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): Gst.FlowReturn;
        get_picture(system_frame_number: number): H264Picture | null;
        set_process_ref_pic_lists(process: boolean): void;
    }
    namespace H265Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class H265Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<H265Decoder>;
        $signals: H265Decoder.SignalSignatures;
        constructor(properties?: Partial<H265Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof H265Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H265Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof H265Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H265Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof H265Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<H265Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_slice(picture: H265Picture, slice: H265Slice, ref_pic_list0: H265Picture[], ref_pic_list1: H265Picture[]): Gst.FlowReturn;
        vfunc_end_picture(picture: H265Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(live: boolean): number;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
        vfunc_new_sequence(sps: GstCodecParsers.H265SPS, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): Gst.FlowReturn;
        get_picture(system_frame_number: number): H265Picture | null;
        get_sps_ext(sps: GstCodecParsers.H265SPS): GstCodecParsers.H265SPSEXT | null;
        set_process_ref_pic_lists(process: boolean): void;
    }
    namespace H266Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class H266Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<H266Decoder>;
        $signals: H266Decoder.SignalSignatures;
        constructor(properties?: Partial<H266Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof H266Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H266Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof H266Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, H266Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof H266Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<H266Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_slice(picture: H266Picture, slice: H266Slice): Gst.FlowReturn;
        vfunc_end_picture(picture: H266Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(live: boolean): number;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H266Picture): Gst.FlowReturn;
        vfunc_new_sequence(sps: GstCodecParsers.H266SPS, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H266Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: H266Picture, slice: H266Slice, dpb: H266Dpb): Gst.FlowReturn;
    }
    namespace Mpeg2Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class Mpeg2Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Mpeg2Decoder>;
        $signals: Mpeg2Decoder.SignalSignatures;
        constructor(properties?: Partial<Mpeg2Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Mpeg2Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpeg2Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Mpeg2Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpeg2Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Mpeg2Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mpeg2Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): Gst.FlowReturn;
        vfunc_end_picture(picture: Mpeg2Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): Gst.FlowReturn;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
        vfunc_new_sequence(seq: GstCodecParsers.MpegVideoSequenceHdr, seq_ext: GstCodecParsers.MpegVideoSequenceExt, seq_display_ext: GstCodecParsers.MpegVideoSequenceDisplayExt, seq_scalable_ext: GstCodecParsers.MpegVideoSequenceScalableExt, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: Mpeg2Picture, slice: Mpeg2Slice, prev_picture: Mpeg2Picture, next_picture: Mpeg2Picture): Gst.FlowReturn;
    }
    namespace Vp8Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class Vp8Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Vp8Decoder>;
        $signals: Vp8Decoder.SignalSignatures;
        constructor(properties?: Partial<Vp8Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Vp8Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vp8Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Vp8Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vp8Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Vp8Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Vp8Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_picture(picture: Vp8Picture, parser: GstCodecParsers.Vp8Parser): Gst.FlowReturn;
        vfunc_end_picture(picture: Vp8Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
        vfunc_new_sequence(frame_hdr: GstCodecParsers.Vp8FrameHdr, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: Vp8Picture): Gst.FlowReturn;
    }
    namespace Vp9Decoder {
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }
    abstract class Vp9Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Vp9Decoder>;
        $signals: Vp9Decoder.SignalSignatures;
        constructor(properties?: Partial<Vp9Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Vp9Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vp9Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Vp9Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vp9Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Vp9Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Vp9Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): Gst.FlowReturn;
        vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Vp9Picture | null;
        vfunc_end_picture(picture: Vp9Picture): Gst.FlowReturn;
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
        vfunc_new_sequence(frame_hdr: Vp9FrameHeader, max_dpb_size: number): Gst.FlowReturn;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
        vfunc_start_picture(picture: Vp9Picture): Gst.FlowReturn;
        set_non_keyframe_format_change_support(support: boolean): void;
    }
    type AV1DecoderClass = typeof AV1Decoder;
    abstract class AV1DecoderPrivate {
        static $gtype: GObject.GType<AV1DecoderPrivate>;
    }
    class AV1Dpb {
        static $gtype: GObject.GType<AV1Dpb>;
        pic_list: AV1Picture[];
        add(picture: AV1Picture): void;
        clear(): void;
        free(): void;
    }
    class AV1Picture {
        static $gtype: GObject.GType<AV1Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): AV1Picture;
    }
    class AV1Tile {
        static $gtype: GObject.GType<AV1Tile>;
        tile_group: GstCodecParsers.AV1TileGroupOBU;
    }
    class CodecPicture {
        static $gtype: GObject.GType<CodecPicture>;
        get_user_data(): null;
        set_discont_state(discont_state: GstVideo.VideoCodecState | null): void;
        set_user_data(user_data: null): void;
    }
    type H264DecoderClass = typeof H264Decoder;
    abstract class H264DecoderPrivate {
        static $gtype: GObject.GType<H264DecoderPrivate>;
    }
    abstract class H264Dpb {
        static $gtype: GObject.GType<H264Dpb>;
        add(picture: H264Picture): void;
        bump(drain: boolean): H264Picture | null;
        clear(): void;
        delete_unused(): void;
        free(): void;
        get_interlaced(): boolean;
        get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null;
        get_lowest_frame_num_short_ref(): H264Picture | null;
        get_max_num_frames(): number;
        get_max_num_reorder_frames(): number;
        get_picture(system_frame_number: number): H264Picture | null;
        get_pictures_all(): H264Picture[];
        get_pictures_long_term_ref(include_second_field: boolean): H264Picture[];
        get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): H264Picture[];
        get_short_ref_by_pic_num(pic_num: number): H264Picture | null;
        get_size(): number;
        has_empty_frame_buffer(): boolean;
        mark_all_non_ref(): void;
        needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode): boolean;
        num_ref_frames(): number;
        perform_memory_management_control_operation(ref_pic_marking: GstCodecParsers.H264RefPicMarking, picture: H264Picture): boolean;
        set_interlaced(interlaced: boolean): void;
        set_last_output(picture: H264Picture): void;
        set_max_num_frames(max_num_frames: number): void;
        set_max_num_reorder_frames(max_num_reorder_frames: number): void;
    }
    class H264Picture {
        static $gtype: GObject.GType<H264Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): H264Picture;
    }
    class H264Slice {
        static $gtype: GObject.GType<H264Slice>;
        header: GstCodecParsers.H264SliceHdr;
        nalu: GstCodecParsers.H264NalUnit;
        constructor(properties?: Partial<{
            header: GstCodecParsers.H264SliceHdr;
            nalu: GstCodecParsers.H264NalUnit;
        }>);
    }
    type H265DecoderClass = typeof H265Decoder;
    abstract class H265DecoderPrivate {
        static $gtype: GObject.GType<H265DecoderPrivate>;
    }
    abstract class H265Dpb {
        static $gtype: GObject.GType<H265Dpb>;
        add(picture: H265Picture): void;
        bump(drain: boolean): H265Picture | null;
        clear(): void;
        delete_unused(): void;
        free(): void;
        get_long_ref_by_poc(poc: number): H265Picture | null;
        get_max_num_pics(): number;
        get_picture(system_frame_number: number): H265Picture | null;
        get_pictures_all(): H265Picture[];
        get_ref_by_poc(poc: number): H265Picture | null;
        get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null;
        get_short_ref_by_poc(poc: number): H265Picture | null;
        get_size(): number;
        mark_all_non_ref(): void;
        needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean;
        num_ref_pictures(): number;
        set_max_num_pics(max_num_pics: number): void;
    }
    class H265Picture {
        static $gtype: GObject.GType<H265Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): H265Picture;
    }
    class H265Slice {
        static $gtype: GObject.GType<H265Slice>;
        header: GstCodecParsers.H265SliceHdr;
        nalu: GstCodecParsers.H265NalUnit;
        constructor(properties?: Partial<{
            header: GstCodecParsers.H265SliceHdr;
            nalu: GstCodecParsers.H265NalUnit;
        }>);
    }
    type H266DecoderClass = typeof H266Decoder;
    abstract class H266DecoderPrivate {
        static $gtype: GObject.GType<H266DecoderPrivate>;
    }
    abstract class H266Dpb {
        static $gtype: GObject.GType<H266Dpb>;
        add(picture: H266Picture): void;
        bump(drain: boolean): H266Picture | null;
        clear(): void;
        delete_unused(): void;
        free(): void;
        get_max_num_pics(): number;
        get_picture_by_poc(poc: number): H266Picture | null;
        get_picture_by_poc_lsb(poc_lsb: number): H266Picture | null;
        get_pictures_all(): H266Picture[];
        get_size(): number;
        mark_all_non_output(): void;
        mark_all_non_ref(): void;
        needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean;
        num_ref_pictures(): number;
        set_max_num_pics(max_num_pics: number): void;
    }
    class H266Picture {
        static $gtype: GObject.GType<H266Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): H266Picture;
    }
    class H266Slice {
        static $gtype: GObject.GType<H266Slice>;
        nalu: GstCodecParsers.H266NalUnit;
    }
    type Mpeg2DecoderClass = typeof Mpeg2Decoder;
    abstract class Mpeg2DecoderPrivate {
        static $gtype: GObject.GType<Mpeg2DecoderPrivate>;
    }
    abstract class Mpeg2Dpb {
        static $gtype: GObject.GType<Mpeg2Dpb>;
        add(picture: Mpeg2Picture): void;
        bump(): Mpeg2Picture | null;
        clear(): void;
        free(): void;
        get_neighbours(picture: Mpeg2Picture): [Mpeg2Picture | null, Mpeg2Picture | null];
        need_bump(): boolean;
    }
    class Mpeg2Picture {
        static $gtype: GObject.GType<Mpeg2Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Mpeg2Picture;
    }
    class Mpeg2Slice {
        static $gtype: GObject.GType<Mpeg2Slice>;
        constructor(properties?: Partial<{}>);
    }
    type Vp8DecoderClass = typeof Vp8Decoder;
    abstract class Vp8DecoderPrivate {
        static $gtype: GObject.GType<Vp8DecoderPrivate>;
    }
    class Vp8Picture {
        static $gtype: GObject.GType<Vp8Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Vp8Picture;
    }
    type Vp9DecoderClass = typeof Vp9Decoder;
    abstract class Vp9DecoderPrivate {
        static $gtype: GObject.GType<Vp9DecoderPrivate>;
    }
    class Vp9DeltaProbabilities {
        static $gtype: GObject.GType<Vp9DeltaProbabilities>;
        constructor(properties?: Partial<{}>);
    }
    class Vp9Dpb {
        static $gtype: GObject.GType<Vp9Dpb>;
        pic_list: Vp9Picture[];
        add(picture: Vp9Picture): void;
        clear(): void;
        free(): void;
    }
    class Vp9FrameHeader {
        static $gtype: GObject.GType<Vp9FrameHeader>;
        profile: number;
        bit_depth: number;
        subsampling_x: number;
        subsampling_y: number;
        color_space: number;
        color_range: number;
        show_existing_frame: number;
        frame_to_show_map_idx: number;
        frame_type: number;
        show_frame: number;
        error_resilient_mode: number;
        width: number;
        height: number;
        render_and_frame_size_different: number;
        render_width: number;
        render_height: number;
        intra_only: number;
        reset_frame_context: number;
        refresh_frame_flags: number;
        ref_frame_idx: Uint8Array;
        ref_frame_sign_bias: Uint8Array;
        allow_high_precision_mv: number;
        interpolation_filter: number;
        refresh_frame_context: number;
        frame_parallel_decoding_mode: number;
        frame_context_idx: number;
        loop_filter_params: Vp9LoopFilterParams;
        quantization_params: Vp9QuantizationParams;
        segmentation_params: Vp9SegmentationParams;
        tile_cols_log2: number;
        tile_rows_log2: number;
        header_size_in_bytes: number;
        tx_mode: Vp9TxMode;
        reference_mode: Vp9ReferenceMode;
        lossless_flag: number;
        frame_header_length_in_bytes: number;
    }
    class Vp9LoopFilterParams {
        static $gtype: GObject.GType<Vp9LoopFilterParams>;
        loop_filter_level: number;
        loop_filter_sharpness: number;
        loop_filter_delta_enabled: number;
        loop_filter_delta_update: number;
        update_ref_delta: Uint8Array;
        loop_filter_ref_deltas: Uint8Array;
        update_mode_delta: Uint8Array;
        loop_filter_mode_deltas: Uint8Array;
        constructor(properties?: Partial<{
            loop_filter_level: number;
            loop_filter_sharpness: number;
            loop_filter_delta_enabled: number;
            loop_filter_delta_update: number;
            update_ref_delta: Uint8Array;
            loop_filter_ref_deltas: Uint8Array;
            update_mode_delta: Uint8Array;
            loop_filter_mode_deltas: Uint8Array;
        }>);
    }
    class Vp9MvDeltaProbs {
        static $gtype: GObject.GType<Vp9MvDeltaProbs>;
        constructor(properties?: Partial<{}>);
    }
    class Vp9Picture {
        static $gtype: GObject.GType<Vp9Picture>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Vp9Picture;
    }
    class Vp9QuantizationParams {
        static $gtype: GObject.GType<Vp9QuantizationParams>;
        base_q_idx: number;
        delta_q_y_dc: number;
        delta_q_uv_dc: number;
        delta_q_uv_ac: number;
        constructor(properties?: Partial<{
            base_q_idx: number;
            delta_q_y_dc: number;
            delta_q_uv_dc: number;
            delta_q_uv_ac: number;
        }>);
    }
    class Vp9SegmentationParams {
        static $gtype: GObject.GType<Vp9SegmentationParams>;
        segmentation_enabled: number;
        segmentation_update_map: number;
        segmentation_tree_probs: Uint8Array;
        segmentation_pred_prob: Uint8Array;
        segmentation_temporal_update: number;
        segmentation_update_data: number;
        segmentation_abs_or_delta_update: number;
        feature_enabled: Uint8Array;
        feature_data: number[];
        constructor(properties?: Partial<{
            segmentation_enabled: number;
            segmentation_update_map: number;
            segmentation_tree_probs: Uint8Array;
            segmentation_pred_prob: Uint8Array;
            segmentation_temporal_update: number;
            segmentation_update_data: number;
            segmentation_abs_or_delta_update: number;
            feature_enabled: Uint8Array;
            feature_data: number[];
        }>);
    }
    class Vp9StatefulParser {
        static $gtype: GObject.GType<Vp9StatefulParser>;
        reference: null[];
        constructor(properties?: Partial<{
            reference: null[];
        }>);
        free(): void;
        parse_compressed_frame_header(header: Vp9FrameHeader, data: number, size: bigint | number): GstCodecParsers.Vp9ParserResult;
        parse_uncompressed_frame_header(header: Vp9FrameHeader, data: number, size: bigint | number): GstCodecParsers.Vp9ParserResult;
    }
    const __name__: string;
    const __version__: string;
}
export default GstCodecs;
}
declare module 'gi://GstCodecs' {
    import GstCodecs10 from 'gi://GstCodecs?version=1.0';
    export default GstCodecs10;
}
