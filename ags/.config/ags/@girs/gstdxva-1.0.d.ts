declare module 'gi://GstDxva?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstCodecs from 'gi://GstCodecs?version=1.0';
import type GstCodecParsers from 'gi://GstCodecParsers?version=1.0';
export namespace GstDxva {
    enum DxvaCodec {
        NONE,
        MPEG2,
        H264,
        H265,
        VP8,
        VP9,
        AV1,
        LAST,
    }
    function dxva_codec_to_string(codec: DxvaCodec): string;
    namespace DxvaAV1Decoder {
        interface SignalSignatures extends GstCodecs.AV1Decoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstCodecs.AV1Decoder.ConstructorProps {}
    }
    abstract class DxvaAV1Decoder extends GstCodecs.AV1Decoder {
        static $gtype: GObject.GType<DxvaAV1Decoder>;
        $signals: DxvaAV1Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaAV1Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaAV1Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaAV1Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaAV1Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaAV1Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaAV1Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaAV1Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_duplicate_picture(src: GstCodecs.CodecPicture, dst: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_duplicate_picture(...args: never[]): any;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
    }
    namespace DxvaH264Decoder {
        interface SignalSignatures extends GstCodecs.H264Decoder.SignalSignatures {
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
        interface ConstructorProps extends GstCodecs.H264Decoder.ConstructorProps {}
    }
    abstract class DxvaH264Decoder extends GstCodecs.H264Decoder {
        static $gtype: GObject.GType<DxvaH264Decoder>;
        $signals: DxvaH264Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaH264Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaH264Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaH264Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaH264Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaH264Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaH264Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaH264Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_duplicate_picture(src: GstCodecs.CodecPicture, dst: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
    }
    namespace DxvaH265Decoder {
        interface SignalSignatures extends GstCodecs.H265Decoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstCodecs.H265Decoder.ConstructorProps {}
    }
    abstract class DxvaH265Decoder extends GstCodecs.H265Decoder {
        static $gtype: GObject.GType<DxvaH265Decoder>;
        $signals: DxvaH265Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaH265Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaH265Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaH265Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaH265Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaH265Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaH265Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaH265Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
    }
    namespace DxvaMpeg2Decoder {
        interface SignalSignatures extends GstCodecs.Mpeg2Decoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstCodecs.Mpeg2Decoder.ConstructorProps {}
    }
    abstract class DxvaMpeg2Decoder extends GstCodecs.Mpeg2Decoder {
        static $gtype: GObject.GType<DxvaMpeg2Decoder>;
        $signals: DxvaMpeg2Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaMpeg2Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaMpeg2Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaMpeg2Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaMpeg2Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_duplicate_picture(src: GstCodecs.CodecPicture, dst: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
        disable_postproc(): void;
    }
    namespace DxvaVp8Decoder {
        interface SignalSignatures extends GstCodecs.Vp8Decoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstCodecs.Vp8Decoder.ConstructorProps {}
    }
    abstract class DxvaVp8Decoder extends GstCodecs.Vp8Decoder {
        static $gtype: GObject.GType<DxvaVp8Decoder>;
        $signals: DxvaVp8Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaVp8Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaVp8Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaVp8Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaVp8Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaVp8Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaVp8Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaVp8Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
    }
    namespace DxvaVp9Decoder {
        interface SignalSignatures extends GstCodecs.Vp9Decoder.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstCodecs.Vp9Decoder.ConstructorProps {}
    }
    abstract class DxvaVp9Decoder extends GstCodecs.Vp9Decoder {
        static $gtype: GObject.GType<DxvaVp9Decoder>;
        $signals: DxvaVp9Decoder.SignalSignatures;
        constructor(properties?: Partial<DxvaVp9Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DxvaVp9Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaVp9Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DxvaVp9Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DxvaVp9Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DxvaVp9Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DxvaVp9Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(input_state: GstVideo.VideoCodecState, info: GstVideo.VideoInfo, crop_x: number, crop_y: number, coded_width: number, coded_height: number, max_dpb_size: number): Gst.FlowReturn;
        vfunc_duplicate_picture(src: GstCodecs.CodecPicture, dst: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_duplicate_picture(...args: never[]): any;
        vfunc_get_picture_id(picture: GstCodecs.CodecPicture): number;
        vfunc_new_picture(picture: GstCodecs.CodecPicture): Gst.FlowReturn;
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: GstCodecs.CodecPicture, buffer_flags: GstVideo.VideoBufferFlags, display_width: number, display_height: number): Gst.FlowReturn;
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: GstCodecs.CodecPicture, picture_id: number): Gst.FlowReturn;
        vfunc_start_picture(...args: never[]): any;
    }
    type DxvaAV1DecoderClass = typeof DxvaAV1Decoder;
    abstract class DxvaAV1DecoderPrivate {
        static $gtype: GObject.GType<DxvaAV1DecoderPrivate>;
    }
    class DxvaDecodingArgs {
        static $gtype: GObject.GType<DxvaDecodingArgs>;
        picture_params: null;
        picture_params_size: number;
        slice_control: null;
        slice_control_size: number;
        bitstream: null;
        bitstream_size: number;
        inverse_quantization_matrix: null;
        inverse_quantization_matrix_size: number;
    }
    type DxvaH264DecoderClass = typeof DxvaH264Decoder;
    abstract class DxvaH264DecoderPrivate {
        static $gtype: GObject.GType<DxvaH264DecoderPrivate>;
    }
    type DxvaH265DecoderClass = typeof DxvaH265Decoder;
    abstract class DxvaH265DecoderPrivate {
        static $gtype: GObject.GType<DxvaH265DecoderPrivate>;
    }
    type DxvaMpeg2DecoderClass = typeof DxvaMpeg2Decoder;
    abstract class DxvaMpeg2DecoderPrivate {
        static $gtype: GObject.GType<DxvaMpeg2DecoderPrivate>;
    }
    class DxvaResolution {
        static $gtype: GObject.GType<DxvaResolution>;
        width: number;
        height: number;
        constructor(properties?: Partial<{
            width: number;
            height: number;
        }>);
    }
    type DxvaVp8DecoderClass = typeof DxvaVp8Decoder;
    abstract class DxvaVp8DecoderPrivate {
        static $gtype: GObject.GType<DxvaVp8DecoderPrivate>;
    }
    type DxvaVp9DecoderClass = typeof DxvaVp9Decoder;
    abstract class DxvaVp9DecoderPrivate {
        static $gtype: GObject.GType<DxvaVp9DecoderPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstDxva;
}
declare module 'gi://GstDxva' {
    import GstDxva10 from 'gi://GstDxva?version=1.0';
    export default GstDxva10;
}
