declare module 'gi://GstVideo?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstVideo {
    export namespace AncillaryMetaField {
        export const $gtype: GObject.GType<AncillaryMetaField>;
    }
    enum AncillaryMetaField {
        PROGRESSIVE,
        INTERLACED_FIRST,
        INTERLACED_SECOND,
    }
    export namespace ColorBalanceType {
        export const $gtype: GObject.GType<ColorBalanceType>;
    }
    enum ColorBalanceType {
        HARDWARE,
        SOFTWARE,
    }
    export namespace NavigationCommand {
        export const $gtype: GObject.GType<NavigationCommand>;
    }
    enum NavigationCommand {
        INVALID,
        MENU1,
        MENU2,
        MENU3,
        MENU4,
        MENU5,
        MENU6,
        MENU7,
        LEFT,
        RIGHT,
        UP,
        DOWN,
        ACTIVATE,
        PREV_ANGLE,
        NEXT_ANGLE,
    }
    export namespace NavigationEventType {
        export const $gtype: GObject.GType<NavigationEventType>;
    }
    enum NavigationEventType {
        INVALID,
        KEY_PRESS,
        KEY_RELEASE,
        MOUSE_BUTTON_PRESS,
        MOUSE_BUTTON_RELEASE,
        MOUSE_MOVE,
        COMMAND,
        MOUSE_SCROLL,
        TOUCH_DOWN,
        TOUCH_MOTION,
        TOUCH_UP,
        TOUCH_FRAME,
        TOUCH_CANCEL,
        MOUSE_DOUBLE_CLICK,
    }
    export namespace NavigationMessageType {
        export const $gtype: GObject.GType<NavigationMessageType>;
    }
    enum NavigationMessageType {
        INVALID,
        MOUSE_OVER,
        COMMANDS_CHANGED,
        ANGLES_CHANGED,
        EVENT,
    }
    export namespace NavigationQueryType {
        export const $gtype: GObject.GType<NavigationQueryType>;
    }
    enum NavigationQueryType {
        INVALID,
        COMMANDS,
        ANGLES,
    }
    export namespace VideoAFDSpec {
        export const $gtype: GObject.GType<VideoAFDSpec>;
    }
    enum VideoAFDSpec {
        DVB_ETSI,
        ATSC_A53,
        SMPTE_ST2016_1,
    }
    export namespace VideoAFDValue {
        export const $gtype: GObject.GType<VideoAFDValue>;
    }
    enum VideoAFDValue {
        UNAVAILABLE,
        "16_9_TOP_ALIGNED",
        "14_9_TOP_ALIGNED",
        GREATER_THAN_16_9,
        "4_3_FULL_16_9_FULL",
        "4_3_FULL_4_3_PILLAR",
        "16_9_LETTER_16_9_FULL",
        "14_9_LETTER_14_9_PILLAR",
        "4_3_FULL_14_9_CENTER",
        "16_9_LETTER_14_9_CENTER",
        "16_9_LETTER_4_3_CENTER",
    }
    export namespace VideoAlphaMode {
        export const $gtype: GObject.GType<VideoAlphaMode>;
    }
    enum VideoAlphaMode {
        COPY,
        SET,
        MULT,
    }
    export namespace VideoAncillaryDID {
        export const $gtype: GObject.GType<VideoAncillaryDID>;
    }
    enum VideoAncillaryDID {
        UNDEFINED,
        DELETION,
        HANC_3G_AUDIO_DATA_FIRST,
        HANC_3G_AUDIO_DATA_LAST,
        HANC_HDTV_AUDIO_DATA_FIRST,
        HANC_HDTV_AUDIO_DATA_LAST,
        HANC_SDTV_AUDIO_DATA_1_FIRST,
        HANC_SDTV_AUDIO_DATA_1_LAST,
        CAMERA_POSITION,
        HANC_ERROR_DETECTION,
        HANC_SDTV_AUDIO_DATA_2_FIRST,
        HANC_SDTV_AUDIO_DATA_2_LAST,
    }
    export namespace VideoAncillaryDID16 {
        export const $gtype: GObject.GType<VideoAncillaryDID16>;
    }
    enum VideoAncillaryDID16 {
        S334_EIA_708,
        S334_EIA_608,
        S2016_3_AFD_BAR,
    }
    export namespace VideoCaptionType {
        export const $gtype: GObject.GType<VideoCaptionType>;
    }
    enum VideoCaptionType {
        UNKNOWN,
        CEA608_RAW,
        CEA608_S334_1A,
        CEA708_RAW,
        CEA708_CDP,
    }
    export namespace VideoChromaMethod {
        export const $gtype: GObject.GType<VideoChromaMethod>;
    }
    enum VideoChromaMethod {
        NEAREST,
        LINEAR,
    }
    export namespace VideoChromaMode {
        export const $gtype: GObject.GType<VideoChromaMode>;
    }
    enum VideoChromaMode {
        FULL,
        UPSAMPLE_ONLY,
        DOWNSAMPLE_ONLY,
        NONE,
    }
    export namespace VideoColorMatrix {
        export const $gtype: GObject.GType<VideoColorMatrix>;
    }
    enum VideoColorMatrix {
        UNKNOWN,
        RGB,
        FCC,
        BT709,
        BT601,
        SMPTE240M,
        BT2020,
    }
    export namespace VideoColorPrimaries {
        export const $gtype: GObject.GType<VideoColorPrimaries>;
    }
    enum VideoColorPrimaries {
        UNKNOWN,
        BT709,
        BT470M,
        BT470BG,
        SMPTE170M,
        SMPTE240M,
        FILM,
        BT2020,
        ADOBERGB,
        SMPTEST428,
        SMPTERP431,
        SMPTEEG432,
        EBU3213,
    }
    export namespace VideoColorRange {
        export const $gtype: GObject.GType<VideoColorRange>;
    }
    enum VideoColorRange {
        UNKNOWN,
        "0_255",
        "16_235",
    }
    export namespace VideoDitherMethod {
        export const $gtype: GObject.GType<VideoDitherMethod>;
    }
    enum VideoDitherMethod {
        NONE,
        VERTERR,
        FLOYD_STEINBERG,
        SIERRA_LITE,
        BAYER,
    }
    export namespace VideoFieldOrder {
        export const $gtype: GObject.GType<VideoFieldOrder>;
    }
    enum VideoFieldOrder {
        UNKNOWN,
        TOP_FIELD_FIRST,
        BOTTOM_FIELD_FIRST,
    }
    export namespace VideoFormat {
        export const $gtype: GObject.GType<VideoFormat>;
    }
    enum VideoFormat {
        UNKNOWN,
        ENCODED,
        I420,
        YV12,
        YUY2,
        UYVY,
        AYUV,
        RGBX,
        BGRX,
        XRGB,
        XBGR,
        RGBA,
        BGRA,
        ARGB,
        ABGR,
        RGB,
        BGR,
        Y41B,
        Y42B,
        YVYU,
        Y444,
        V210,
        V216,
        NV12,
        NV21,
        GRAY8,
        GRAY16_BE,
        GRAY16_LE,
        V308,
        RGB16,
        BGR16,
        RGB15,
        BGR15,
        UYVP,
        A420,
        RGB8P,
        YUV9,
        YVU9,
        IYU1,
        ARGB64,
        AYUV64,
        R210,
        I420_10BE,
        I420_10LE,
        I422_10BE,
        I422_10LE,
        Y444_10BE,
        Y444_10LE,
        GBR,
        GBR_10BE,
        GBR_10LE,
        NV16,
        NV24,
        NV12_64Z32,
        A420_10BE,
        A420_10LE,
        A422_10BE,
        A422_10LE,
        A444_10BE,
        A444_10LE,
        NV61,
        P010_10BE,
        P010_10LE,
        IYU2,
        VYUY,
        GBRA,
        GBRA_10BE,
        GBRA_10LE,
        GBR_12BE,
        GBR_12LE,
        GBRA_12BE,
        GBRA_12LE,
        I420_12BE,
        I420_12LE,
        I422_12BE,
        I422_12LE,
        Y444_12BE,
        Y444_12LE,
        GRAY10_LE32,
        NV12_10LE32,
        NV16_10LE32,
        NV12_10LE40,
        Y210,
        Y410,
        VUYA,
        BGR10A2_LE,
        RGB10A2_LE,
        Y444_16BE,
        Y444_16LE,
        P016_BE,
        P016_LE,
        P012_BE,
        P012_LE,
        Y212_BE,
        Y212_LE,
        Y412_BE,
        Y412_LE,
        NV12_4L4,
        NV12_32L32,
        RGBP,
        BGRP,
        AV12,
        ARGB64_LE,
        ARGB64_BE,
        RGBA64_LE,
        RGBA64_BE,
        BGRA64_LE,
        BGRA64_BE,
        ABGR64_LE,
        ABGR64_BE,
        NV12_16L32S,
        NV12_8L128,
        NV12_10BE_8L128,
        NV12_10LE40_4L4,
        DMA_DRM,
        MT2110T,
        MT2110R,
        A422,
        A444,
        A444_12LE,
        A444_12BE,
        A422_12LE,
        A422_12BE,
        A420_12LE,
        A420_12BE,
        A444_16LE,
        A444_16BE,
        A422_16LE,
        A422_16BE,
        A420_16LE,
        A420_16BE,
        GBR_16LE,
        GBR_16BE,
        RBGA,
        Y216_LE,
        Y216_BE,
        Y416_LE,
        Y416_BE,
        GRAY10_LE16,
        NV16_10LE40,
        BGR10X2_LE,
        RGB10X2_LE,
    }
    export namespace VideoGLTextureOrientation {
        export const $gtype: GObject.GType<VideoGLTextureOrientation>;
    }
    enum VideoGLTextureOrientation {
        NORMAL_Y_NORMAL,
        NORMAL_Y_FLIP,
        FLIP_Y_NORMAL,
        FLIP_Y_FLIP,
    }
    export namespace VideoGLTextureType {
        export const $gtype: GObject.GType<VideoGLTextureType>;
    }
    enum VideoGLTextureType {
        LUMINANCE,
        LUMINANCE_ALPHA,
        RGB16,
        RGB,
        RGBA,
        R,
        RG,
    }
    export namespace VideoGammaMode {
        export const $gtype: GObject.GType<VideoGammaMode>;
    }
    enum VideoGammaMode {
        NONE,
        REMAP,
    }
    export namespace VideoInterlaceMode {
        export const $gtype: GObject.GType<VideoInterlaceMode>;
    }
    enum VideoInterlaceMode {
        PROGRESSIVE,
        INTERLEAVED,
        MIXED,
        FIELDS,
        ALTERNATE,
    }
    export namespace VideoMatrixMode {
        export const $gtype: GObject.GType<VideoMatrixMode>;
    }
    enum VideoMatrixMode {
        FULL,
        INPUT_ONLY,
        OUTPUT_ONLY,
        NONE,
    }
    export namespace VideoMultiviewFramePacking {
        export const $gtype: GObject.GType<VideoMultiviewFramePacking>;
    }
    enum VideoMultiviewFramePacking {
        NONE,
        MONO,
        LEFT,
        RIGHT,
        SIDE_BY_SIDE,
        SIDE_BY_SIDE_QUINCUNX,
        COLUMN_INTERLEAVED,
        ROW_INTERLEAVED,
        TOP_BOTTOM,
        CHECKERBOARD,
    }
    export namespace VideoMultiviewMode {
        export const $gtype: GObject.GType<VideoMultiviewMode>;
    }
    enum VideoMultiviewMode {
        NONE,
        MONO,
        LEFT,
        RIGHT,
        SIDE_BY_SIDE,
        SIDE_BY_SIDE_QUINCUNX,
        COLUMN_INTERLEAVED,
        ROW_INTERLEAVED,
        TOP_BOTTOM,
        CHECKERBOARD,
        FRAME_BY_FRAME,
        MULTIVIEW_FRAME_BY_FRAME,
        SEPARATED,
    }
    class VideoOrientationMethod {
        static $gtype: GObject.GType<VideoOrientationMethod>;
        static IDENTITY: number;
        static "90R": number;
        static "180": number;
        static "90L": number;
        static HORIZ: number;
        static VERT: number;
        static UL_LR: number;
        static UR_LL: number;
        static AUTO: number;
        static CUSTOM: number;
    }
    export namespace VideoPrimariesMode {
        export const $gtype: GObject.GType<VideoPrimariesMode>;
    }
    enum VideoPrimariesMode {
        NONE,
        MERGE_ONLY,
        FAST,
    }
    export namespace VideoResamplerMethod {
        export const $gtype: GObject.GType<VideoResamplerMethod>;
    }
    enum VideoResamplerMethod {
        NEAREST,
        LINEAR,
        CUBIC,
        SINC,
        LANCZOS,
    }
    export namespace VideoTileMode {
        export const $gtype: GObject.GType<VideoTileMode>;
    }
    enum VideoTileMode {
        UNKNOWN,
        ZFLIPZ_2X2,
        LINEAR,
    }
    export namespace VideoTileType {
        export const $gtype: GObject.GType<VideoTileType>;
    }
    enum VideoTileType {
        INDEXED,
    }
    export namespace VideoTransferFunction {
        export const $gtype: GObject.GType<VideoTransferFunction>;
    }
    enum VideoTransferFunction {
        UNKNOWN,
        GAMMA10,
        GAMMA18,
        GAMMA20,
        GAMMA22,
        BT709,
        SMPTE240M,
        SRGB,
        GAMMA28,
        LOG100,
        LOG316,
        BT2020_12,
        ADOBERGB,
        BT2020_10,
        SMPTE2084,
        ARIB_STD_B67,
        BT601,
    }
    export namespace VideoVBIParserResult {
        export const $gtype: GObject.GType<VideoVBIParserResult>;
    }
    enum VideoVBIParserResult {
        DONE,
        OK,
        ERROR,
    }
    const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string;
    const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string;
    const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string;
    const BUFFER_POOL_OPTION_VIDEO_META: string;
    const CAPS_FEATURE_FORMAT_INTERLACED: string;
    const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string;
    const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string;
    const CAPS_FEATURE_META_GST_VIDEO_META: string;
    const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string;
    const META_TAG_VIDEO_COLORSPACE_STR: string;
    const META_TAG_VIDEO_ORIENTATION_STR: string;
    const META_TAG_VIDEO_SIZE_STR: string;
    const META_TAG_VIDEO_STR: string;
    const VIDEO_COLORIMETRY_BT2020: string;
    const VIDEO_COLORIMETRY_BT2020_10: string;
    const VIDEO_COLORIMETRY_BT2100_HLG: string;
    const VIDEO_COLORIMETRY_BT2100_PQ: string;
    const VIDEO_COLORIMETRY_BT601: string;
    const VIDEO_COLORIMETRY_BT709: string;
    const VIDEO_COLORIMETRY_SMPTE240M: string;
    const VIDEO_COLORIMETRY_SRGB: string;
    const VIDEO_COMP_A: number;
    const VIDEO_COMP_B: number;
    const VIDEO_COMP_G: number;
    const VIDEO_COMP_INDEX: number;
    const VIDEO_COMP_PALETTE: number;
    const VIDEO_COMP_R: number;
    const VIDEO_COMP_U: number;
    const VIDEO_COMP_V: number;
    const VIDEO_COMP_Y: number;
    const VIDEO_CONVERTER_OPT_ALPHA_MODE: string;
    const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string;
    const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string;
    const VIDEO_CONVERTER_OPT_BORDER_ARGB: string;
    const VIDEO_CONVERTER_OPT_CHROMA_MODE: string;
    const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string;
    const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string;
    const VIDEO_CONVERTER_OPT_DEST_WIDTH: string;
    const VIDEO_CONVERTER_OPT_DEST_X: string;
    const VIDEO_CONVERTER_OPT_DEST_Y: string;
    const VIDEO_CONVERTER_OPT_DITHER_METHOD: string;
    const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string;
    const VIDEO_CONVERTER_OPT_FILL_BORDER: string;
    const VIDEO_CONVERTER_OPT_GAMMA_MODE: string;
    const VIDEO_CONVERTER_OPT_MATRIX_MODE: string;
    const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string;
    const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string;
    const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string;
    const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string;
    const VIDEO_CONVERTER_OPT_SRC_WIDTH: string;
    const VIDEO_CONVERTER_OPT_SRC_X: string;
    const VIDEO_CONVERTER_OPT_SRC_Y: string;
    const VIDEO_CONVERTER_OPT_THREADS: string;
    const VIDEO_DECODER_MAX_ERRORS: number;
    const VIDEO_DECODER_SINK_NAME: string;
    const VIDEO_DECODER_SRC_NAME: string;
    const VIDEO_DMA_DRM_CAPS_MAKE: string;
    const VIDEO_ENCODER_SINK_NAME: string;
    const VIDEO_ENCODER_SRC_NAME: string;
    const VIDEO_FORMATS_ALL: string;
    const VIDEO_FORMATS_ALL_STR: string;
    const VIDEO_FORMATS_ANY: string;
    const VIDEO_FORMATS_ANY_STR: string;
    const VIDEO_FORMAT_LAST: number;
    const VIDEO_FPS_RANGE: string;
    const VIDEO_MAX_COMPONENTS: number;
    const VIDEO_MAX_PLANES: number;
    const VIDEO_RESAMPLER_OPT_CUBIC_B: string;
    const VIDEO_RESAMPLER_OPT_CUBIC_C: string;
    const VIDEO_RESAMPLER_OPT_ENVELOPE: string;
    const VIDEO_RESAMPLER_OPT_MAX_TAPS: string;
    const VIDEO_RESAMPLER_OPT_SHARPEN: string;
    const VIDEO_RESAMPLER_OPT_SHARPNESS: string;
    const VIDEO_SCALER_OPT_DITHER_METHOD: string;
    const VIDEO_SIZE_RANGE: string;
    const VIDEO_TILE_TYPE_MASK: number;
    const VIDEO_TILE_TYPE_SHIFT: number;
    const VIDEO_TILE_X_TILES_MASK: number;
    const VIDEO_TILE_Y_TILES_SHIFT: number;
    function ancillary_meta_api_get_type(): GObject.GType;
    function ancillary_meta_get_info(): Gst.MetaInfo;
    function buffer_add_ancillary_meta(buffer: Gst.Buffer): AncillaryMeta;
    function buffer_add_video_afd_meta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta;
    function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta;
    function buffer_add_video_bar_meta(buffer: Gst.Buffer, field: number, is_letterbox: boolean, bar_data1: number, bar_data2: number): VideoBarMeta;
    function buffer_add_video_caption_meta(buffer: Gst.Buffer, caption_type: VideoCaptionType, data: Uint8Array | string): VideoCaptionMeta;
    function buffer_add_video_codec_alpha_meta(buffer: Gst.Buffer, alpha_buffer: Gst.Buffer): VideoCodecAlphaMeta;
    function buffer_add_video_gl_texture_upload_meta(buffer: Gst.Buffer, texture_orientation: VideoGLTextureOrientation, n_textures: number, texture_type: VideoGLTextureType, upload: VideoGLTextureUpload, user_data_copy: GObject.BoxedCopyFunc, user_data_free: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta;
    function buffer_add_video_meta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta;
    function buffer_add_video_meta_full(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, n_planes: number, offset: (bigint | number)[], stride: number[]): VideoMeta;
    function buffer_add_video_overlay_composition_meta(buf: Gst.Buffer, comp: VideoOverlayComposition | null): VideoOverlayCompositionMeta;
    function buffer_add_video_region_of_interest_meta(buffer: Gst.Buffer, roi_type: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta;
    function buffer_add_video_region_of_interest_meta_id(buffer: Gst.Buffer, roi_type: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta;
    function buffer_add_video_sei_user_data_unregistered_meta(buffer: Gst.Buffer, uuid: Uint8Array | string, data: Uint8Array | string | null): VideoSEIUserDataUnregisteredMeta;
    function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null;
    function buffer_add_video_time_code_meta_full(buffer: Gst.Buffer, fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCodeMeta | null;
    function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta | null;
    function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta | null;
    function buffer_get_video_region_of_interest_meta_id(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta | null;
    function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean;
    function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void;
    function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean;
    function navigation_event_get_coordinates(event: Gst.Event): [boolean, number, number];
    function navigation_event_get_type(event: Gst.Event): NavigationEventType;
    function navigation_event_new_command(command: NavigationCommand): Gst.Event;
    function navigation_event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_mouse_button_press(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_mouse_button_release(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_mouse_double_click(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_mouse_scroll(x: number, y: number, delta_x: number, delta_y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
    function navigation_event_new_touch_down(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_touch_frame(state: NavigationModifierType): Gst.Event;
    function navigation_event_new_touch_motion(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_new_touch_up(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    function navigation_event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
    function navigation_event_parse_key_event(event: Gst.Event): [boolean, string];
    function navigation_event_parse_modifier_state(event: Gst.Event): [boolean, NavigationModifierType];
    function navigation_event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
    function navigation_event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
    function navigation_event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
    function navigation_event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
    function navigation_event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
    function navigation_event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
    function navigation_message_get_type(message: Gst.Message): NavigationMessageType;
    function navigation_message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message;
    function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message;
    function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
    function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
    function navigation_message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
    function navigation_message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
    function navigation_message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
    function navigation_query_get_type(query: Gst.Query): NavigationQueryType;
    function navigation_query_new_angles(): Gst.Query;
    function navigation_query_new_commands(): Gst.Query;
    function navigation_query_parse_angles(query: Gst.Query): [boolean, number, number];
    function navigation_query_parse_commands_length(query: Gst.Query): [boolean, number];
    function navigation_query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
    function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
    function navigation_query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
    function video_afd_meta_api_get_type(): GObject.GType;
    function video_afd_meta_get_info(): Gst.MetaInfo;
    function video_affine_transformation_meta_api_get_type(): GObject.GType;
    function video_affine_transformation_meta_get_info(): Gst.MetaInfo;
    function video_bar_meta_api_get_type(): GObject.GType;
    function video_bar_meta_get_info(): Gst.MetaInfo;
    function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean;
    function video_blend_scale_linear_RGBA(src: VideoInfo, src_buffer: Gst.Buffer, dest_height: number, dest_width: number): [VideoInfo, Gst.Buffer];
    function video_calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [boolean, number, number];
    function video_caption_meta_api_get_type(): GObject.GType;
    function video_caption_meta_get_info(): Gst.MetaInfo;
    function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType;
    function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps;
    function video_center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;
    function video_chroma_from_string(s: string): VideoChromaSite;
    function video_chroma_resample(resample: VideoChromaResample, lines: null, width: number): void;
    function video_chroma_site_from_string(s: string): VideoChromaSite;
    function video_chroma_site_to_string(site: VideoChromaSite): string | null;
    function video_chroma_to_string(site: VideoChromaSite): string;
    function video_codec_alpha_meta_api_get_type(): GObject.GType;
    function video_codec_alpha_meta_get_info(): Gst.MetaInfo;
    function video_color_matrix_from_iso(value: number): VideoColorMatrix;
    function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [boolean, number, number];
    function video_color_matrix_to_iso(matrix: VideoColorMatrix): number;
    function video_color_primaries_from_iso(value: number): VideoColorPrimaries;
    function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo;
    function video_color_primaries_is_equivalent(primaries: VideoColorPrimaries, other: VideoColorPrimaries): boolean;
    function video_color_primaries_to_iso(primaries: VideoColorPrimaries): number;
    function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [number[], number[]];
    function video_color_transfer_decode(func: VideoTransferFunction, val: number): number;
    function video_color_transfer_encode(func: VideoTransferFunction, val: number): number;
    function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample | null;
    function video_convert_sample_async(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void;
    function video_crop_meta_api_get_type(): GObject.GType;
    function video_crop_meta_get_info(): Gst.MetaInfo;
    function video_dma_drm_format_from_gst_format(format: VideoFormat): [number, number];
    function video_dma_drm_format_to_gst_format(fourcc: number, modifier: bigint | number): VideoFormat;
    function video_dma_drm_fourcc_from_format(format: VideoFormat): number;
    function video_dma_drm_fourcc_from_string(format_str: string): [number, number];
    function video_dma_drm_fourcc_to_format(fourcc: number): VideoFormat;
    function video_dma_drm_fourcc_to_string(fourcc: number, modifier: bigint | number): string | null;
    function video_event_is_force_key_unit(event: Gst.Event): boolean;
    function video_event_new_downstream_force_key_unit(timestamp: Gst.ClockTime, stream_time: Gst.ClockTime, running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event;
    function video_event_new_still_frame(in_still: boolean): Gst.Event;
    function video_event_new_upstream_force_key_unit(running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event;
    function video_event_parse_downstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime, Gst.ClockTime, Gst.ClockTime, boolean, number];
    function video_event_parse_still_frame(event: Gst.Event): [boolean, boolean];
    function video_event_parse_upstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime, boolean, number];
    function video_field_order_from_string(order: string): VideoFieldOrder;
    function video_field_order_to_string(order: VideoFieldOrder): string;
    function video_format_from_fourcc(fourcc: number): VideoFormat;
    function video_format_from_masks(depth: number, bpp: number, endianness: number, red_mask: number, green_mask: number, blue_mask: number, alpha_mask: number): VideoFormat;
    function video_format_from_string(format: string): VideoFormat;
    function video_format_get_info(format: VideoFormat): VideoFormatInfo;
    function video_format_get_palette(format: VideoFormat): [null, number];
    function video_format_to_fourcc(format: VideoFormat): number;
    function video_format_to_string(format: VideoFormat): string;
    function video_formats_any(): VideoFormat[];
    function video_formats_raw(): VideoFormat[];
    function video_frame_map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
    function video_frame_map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [boolean, VideoFrame];
    function video_gl_texture_upload_meta_api_get_type(): GObject.GType;
    function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo;
    function video_guess_framerate(duration: Gst.ClockTime): [boolean, number, number];
    function video_info_dma_drm_from_caps(caps: Gst.Caps): [boolean, VideoInfoDmaDrm];
    function video_info_dma_drm_from_video_info(info: VideoInfo, modifier: bigint | number): [boolean, VideoInfoDmaDrm];
    function video_info_dma_drm_init(): VideoInfoDmaDrm;
    function video_info_from_caps(caps: Gst.Caps): [boolean, VideoInfo];
    function video_info_init(): VideoInfo;
    function video_interlace_mode_from_string(mode: string): VideoInterlaceMode;
    function video_interlace_mode_to_string(mode: VideoInterlaceMode): string;
    function video_is_common_aspect_ratio(width: number, height: number, par_n: number, par_d: number): boolean;
    function video_is_dma_drm_caps(caps: Gst.Caps): boolean;
    function video_make_raw_caps(formats: VideoFormat[] | null): Gst.Caps;
    function video_make_raw_caps_with_features(formats: VideoFormat[] | null, features: Gst.CapsFeatures | null): Gst.Caps;
    function video_mastering_display_info_from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];
    function video_meta_api_get_type(): GObject.GType;
    function video_meta_get_info(): Gst.MetaInfo;
    function video_meta_transform_matrix_get_quark(): GLib.Quark;
    function video_meta_transform_scale_get_quark(): GLib.Quark;
    function video_multiview_get_doubled_height_modes(): unknown;
    function video_multiview_get_doubled_size_modes(): unknown;
    function video_multiview_get_doubled_width_modes(): unknown;
    function video_multiview_get_mono_modes(): unknown;
    function video_multiview_get_unpacked_modes(): unknown;
    function video_multiview_guess_half_aspect(mv_mode: VideoMultiviewMode, width: number, height: number, par_n: number, par_d: number): boolean;
    function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode;
    function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string | null;
    function video_multiview_video_info_change_mode(info: VideoInfo, out_mview_mode: VideoMultiviewMode, out_mview_flags: VideoMultiviewFlags): void;
    function video_orientation_from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
    function video_overlay_composition_meta_api_get_type(): GObject.GType;
    function video_overlay_composition_meta_get_info(): Gst.MetaInfo;
    function video_overlay_install_properties(oclass: typeof GObject.Object, last_prop_id: number): void;
    function video_overlay_set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: GObject.Value | any): boolean;
    function video_region_of_interest_meta_api_get_type(): GObject.GType;
    function video_region_of_interest_meta_get_info(): Gst.MetaInfo;
    function video_sei_user_data_unregistered_meta_api_get_type(): GObject.GType;
    function video_sei_user_data_unregistered_meta_get_info(): Gst.MetaInfo;
    function video_sei_user_data_unregistered_parse_precision_time_stamp(user_data: VideoSEIUserDataUnregisteredMeta): [boolean, number, number];
    function video_tile_get_index(mode: VideoTileMode, x: number, y: number, x_tiles: number, y_tiles: number): number;
    function video_time_code_meta_api_get_type(): GObject.GType;
    function video_time_code_meta_get_info(): Gst.MetaInfo;
    function video_transfer_function_decode(func: VideoTransferFunction, val: number): number;
    function video_transfer_function_encode(func: VideoTransferFunction, val: number): number;
    function video_transfer_function_from_iso(value: number): VideoTransferFunction;
    function video_transfer_function_is_equivalent(from_func: VideoTransferFunction, from_bpp: number, to_func: VideoTransferFunction, to_bpp: number): boolean;
    function video_transfer_function_to_iso(func: VideoTransferFunction): number;
    interface VideoAffineTransformationGetMatrix {
        (meta: VideoAffineTransformationMeta, matrix: number): boolean;
    }
    interface VideoConvertSampleCallback {
        (sample: Gst.Sample, error: GLib.Error): void;
    }
    interface VideoFormatPack {
        (info: VideoFormatInfo, flags: VideoPackFlags, src: null, sstride: number, data: null, stride: number, chroma_site: VideoChromaSite, y: number, width: number): void;
    }
    interface VideoFormatUnpack {
        (info: VideoFormatInfo, flags: VideoPackFlags, dest: null, data: null, stride: number, x: number, y: number, width: number): void;
    }
    interface VideoGLTextureUpload {
        (meta: VideoGLTextureUploadMeta, texture_id: number): boolean;
    }
    export namespace NavigationModifierType {
        export const $gtype: GObject.GType<NavigationModifierType>;
    }
    enum NavigationModifierType {
        NONE,
        SHIFT_MASK,
        LOCK_MASK,
        CONTROL_MASK,
        MOD1_MASK,
        MOD2_MASK,
        MOD3_MASK,
        MOD4_MASK,
        MOD5_MASK,
        BUTTON1_MASK,
        BUTTON2_MASK,
        BUTTON3_MASK,
        BUTTON4_MASK,
        BUTTON5_MASK,
        SUPER_MASK,
        HYPER_MASK,
        META_MASK,
        MASK,
    }
    export namespace VideoBufferFlags {
        export const $gtype: GObject.GType<VideoBufferFlags>;
    }
    enum VideoBufferFlags {
        INTERLACED,
        TFF,
        RFF,
        ONEFIELD,
        MULTIPLE_VIEW,
        FIRST_IN_BUNDLE,
        TOP_FIELD,
        BOTTOM_FIELD,
        MARKER,
        LAST,
    }
    export namespace VideoChromaFlags {
        export const $gtype: GObject.GType<VideoChromaFlags>;
    }
    enum VideoChromaFlags {
        NONE,
        INTERLACED,
    }
    export namespace VideoChromaSite {
        export const $gtype: GObject.GType<VideoChromaSite>;
    }
    enum VideoChromaSite {
        UNKNOWN,
        NONE,
        H_COSITED,
        V_COSITED,
        ALT_LINE,
        COSITED,
        JPEG,
        MPEG2,
        DV,
    }
    export namespace VideoCodecFrameFlags {
        export const $gtype: GObject.GType<VideoCodecFrameFlags>;
    }
    enum VideoCodecFrameFlags {
        DECODE_ONLY,
        SYNC_POINT,
        FORCE_KEYFRAME,
        FORCE_KEYFRAME_HEADERS,
        CORRUPTED,
    }
    export namespace VideoDecoderRequestSyncPointFlags {
        export const $gtype: GObject.GType<VideoDecoderRequestSyncPointFlags>;
    }
    enum VideoDecoderRequestSyncPointFlags {
        DISCARD_INPUT,
        CORRUPT_OUTPUT,
    }
    export namespace VideoDitherFlags {
        export const $gtype: GObject.GType<VideoDitherFlags>;
    }
    enum VideoDitherFlags {
        NONE,
        INTERLACED,
        QUANTIZE,
    }
    export namespace VideoFlags {
        export const $gtype: GObject.GType<VideoFlags>;
    }
    enum VideoFlags {
        NONE,
        VARIABLE_FPS,
        PREMULTIPLIED_ALPHA,
    }
    export namespace VideoFormatFlags {
        export const $gtype: GObject.GType<VideoFormatFlags>;
    }
    enum VideoFormatFlags {
        YUV,
        RGB,
        GRAY,
        ALPHA,
        LE,
        PALETTE,
        COMPLEX,
        UNPACK,
        TILED,
        SUBTILES,
    }
    export namespace VideoFrameFlags {
        export const $gtype: GObject.GType<VideoFrameFlags>;
    }
    enum VideoFrameFlags {
        NONE,
        INTERLACED,
        TFF,
        RFF,
        ONEFIELD,
        MULTIPLE_VIEW,
        FIRST_IN_BUNDLE,
        TOP_FIELD,
        BOTTOM_FIELD,
    }
    export namespace VideoFrameMapFlags {
        export const $gtype: GObject.GType<VideoFrameMapFlags>;
    }
    enum VideoFrameMapFlags {
        NO_REF,
        LAST,
    }
    export namespace VideoMultiviewFlags {
        export const $gtype: GObject.GType<VideoMultiviewFlags>;
    }
    enum VideoMultiviewFlags {
        NONE,
        RIGHT_VIEW_FIRST,
        LEFT_FLIPPED,
        LEFT_FLOPPED,
        RIGHT_FLIPPED,
        RIGHT_FLOPPED,
        HALF_ASPECT,
        MIXED_MONO,
    }
    export namespace VideoOverlayFormatFlags {
        export const $gtype: GObject.GType<VideoOverlayFormatFlags>;
    }
    enum VideoOverlayFormatFlags {
        NONE,
        PREMULTIPLIED_ALPHA,
        GLOBAL_ALPHA,
    }
    export namespace VideoPackFlags {
        export const $gtype: GObject.GType<VideoPackFlags>;
    }
    enum VideoPackFlags {
        NONE,
        TRUNCATE_RANGE,
        INTERLACED,
    }
    export namespace VideoResamplerFlags {
        export const $gtype: GObject.GType<VideoResamplerFlags>;
    }
    enum VideoResamplerFlags {
        NONE,
        HALF_TAPS,
    }
    export namespace VideoScalerFlags {
        export const $gtype: GObject.GType<VideoScalerFlags>;
    }
    enum VideoScalerFlags {
        NONE,
        INTERLACED,
    }
    export namespace VideoTimeCodeFlags {
        export const $gtype: GObject.GType<VideoTimeCodeFlags>;
    }
    enum VideoTimeCodeFlags {
        NONE,
        DROP_FRAME,
        INTERLACED,
    }
    namespace ColorBalanceChannel {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "value-changed": (arg0: number) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ColorBalanceChannel extends GObject.Object {
        static $gtype: GObject.GType<ColorBalanceChannel>;
        $signals: ColorBalanceChannel.SignalSignatures;
        label: string;
        min_value: number;
        max_value: number;
        constructor(properties?: Partial<ColorBalanceChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ColorBalanceChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorBalanceChannel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorBalanceChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorBalanceChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorBalanceChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorBalanceChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_value_changed(value: number): void;
    }
    namespace VideoAggregator {
        interface SignalSignatures extends GstBase.Aggregator.SignalSignatures {
            "notify::force-live": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-upstream-latency": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::start-time-selection": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.Aggregator.ConstructorProps {
            force_live: boolean;
            forceLive: boolean;
        }
    }
    abstract class VideoAggregator extends GstBase.Aggregator {
        static $gtype: GObject.GType<VideoAggregator>;
        get force_live(): boolean;
        get forceLive(): boolean;
        $signals: VideoAggregator.SignalSignatures;
        aggregator: GstBase.Aggregator;
        constructor(properties?: Partial<VideoAggregator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoAggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoAggregator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoAggregator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoAggregator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_aggregate_frames(outbuffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_create_output_buffer(outbuffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_find_best_format(downstream_caps: Gst.Caps, best_info: VideoInfo): boolean;
        vfunc_update_caps(caps: Gst.Caps): Gst.Caps;
        get_execution_task_pool(): Gst.TaskPool;
    }
    namespace VideoAggregatorConvertPad {
        interface SignalSignatures extends VideoAggregatorPad.SignalSignatures {
            "notify::converter-config": (pspec: GObject.ParamSpec) => void;
            "notify::max-last-buffer-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-after-eos": (pspec: GObject.ParamSpec) => void;
            "notify::zorder": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends VideoAggregatorPad.ConstructorProps {
            converter_config: Gst.Structure;
            converterConfig: Gst.Structure;
        }
    }
    class VideoAggregatorConvertPad extends VideoAggregatorPad {
        static $gtype: GObject.GType<VideoAggregatorConvertPad>;
        get converter_config(): Gst.Structure;
        set converter_config(val: Gst.Structure);
        get converterConfig(): Gst.Structure;
        set converterConfig(val: Gst.Structure);
        $signals: VideoAggregatorConvertPad.SignalSignatures;
        constructor(properties?: Partial<VideoAggregatorConvertPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoAggregatorConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorConvertPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoAggregatorConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorConvertPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoAggregatorConvertPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoAggregatorConvertPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void;
        update_conversion_info(): void;
    }
    namespace VideoAggregatorPad {
        interface SignalSignatures extends GstBase.AggregatorPad.SignalSignatures {
            "notify::max-last-buffer-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-after-eos": (pspec: GObject.ParamSpec) => void;
            "notify::zorder": (pspec: GObject.ParamSpec) => void;
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
            max_last_buffer_repeat: bigint | number;
            maxLastBufferRepeat: bigint | number;
            repeat_after_eos: boolean;
            repeatAfterEos: boolean;
            zorder: number;
        }
    }
    class VideoAggregatorPad extends GstBase.AggregatorPad {
        static $gtype: GObject.GType<VideoAggregatorPad>;
        get max_last_buffer_repeat(): number;
        set max_last_buffer_repeat(val: bigint | number);
        get maxLastBufferRepeat(): number;
        set maxLastBufferRepeat(val: bigint | number);
        get repeat_after_eos(): boolean;
        set repeat_after_eos(val: boolean);
        get repeatAfterEos(): boolean;
        set repeatAfterEos(val: boolean);
        get zorder(): number;
        set zorder(val: number);
        $signals: VideoAggregatorPad.SignalSignatures;
        constructor(properties?: Partial<VideoAggregatorPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoAggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoAggregatorPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoAggregatorPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoAggregatorPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
        vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean;
        vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
        vfunc_prepare_frame_start(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): void;
        vfunc_update_conversion_info(): void;
        get_current_buffer(): Gst.Buffer;
        get_prepared_frame(): VideoFrame;
        has_current_buffer(): boolean;
        set_needs_alpha(needs_alpha: boolean): void;
    }
    namespace VideoAggregatorParallelConvertPad {
        interface SignalSignatures extends VideoAggregatorConvertPad.SignalSignatures {
            "notify::converter-config": (pspec: GObject.ParamSpec) => void;
            "notify::max-last-buffer-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-after-eos": (pspec: GObject.ParamSpec) => void;
            "notify::zorder": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends VideoAggregatorConvertPad.ConstructorProps {}
    }
    class VideoAggregatorParallelConvertPad extends VideoAggregatorConvertPad {
        static $gtype: GObject.GType<VideoAggregatorParallelConvertPad>;
        $signals: VideoAggregatorParallelConvertPad.SignalSignatures;
        constructor(properties?: Partial<VideoAggregatorParallelConvertPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoAggregatorParallelConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorParallelConvertPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoAggregatorParallelConvertPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoAggregatorParallelConvertPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoAggregatorParallelConvertPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoAggregatorParallelConvertPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VideoBufferPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class VideoBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VideoBufferPool>;
        $signals: VideoBufferPool.SignalSignatures;
        bufferpool: Gst.BufferPool;
        constructor(properties?: Partial<VideoBufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VideoBufferPool;
        connect<K extends keyof VideoBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoBufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoBufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoBufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VideoDecoder {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::automatic-request-sync-point-flags": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-request-sync-points": (pspec: GObject.ParamSpec) => void;
            "notify::discard-corrupted-frames": (pspec: GObject.ParamSpec) => void;
            "notify::max-errors": (pspec: GObject.ParamSpec) => void;
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            automatic_request_sync_point_flags: VideoDecoderRequestSyncPointFlags;
            automaticRequestSyncPointFlags: VideoDecoderRequestSyncPointFlags;
            automatic_request_sync_points: boolean;
            automaticRequestSyncPoints: boolean;
            discard_corrupted_frames: boolean;
            discardCorruptedFrames: boolean;
            max_errors: number;
            maxErrors: number;
            min_force_key_unit_interval: bigint | number;
            minForceKeyUnitInterval: bigint | number;
            qos: boolean;
        }
    }
    abstract class VideoDecoder extends Gst.Element {
        static $gtype: GObject.GType<VideoDecoder>;
        get automatic_request_sync_point_flags(): VideoDecoderRequestSyncPointFlags;
        set automatic_request_sync_point_flags(val: VideoDecoderRequestSyncPointFlags);
        get automaticRequestSyncPointFlags(): VideoDecoderRequestSyncPointFlags;
        set automaticRequestSyncPointFlags(val: VideoDecoderRequestSyncPointFlags);
        get automatic_request_sync_points(): boolean;
        set automatic_request_sync_points(val: boolean);
        get automaticRequestSyncPoints(): boolean;
        set automaticRequestSyncPoints(val: boolean);
        get discard_corrupted_frames(): boolean;
        set discard_corrupted_frames(val: boolean);
        get discardCorruptedFrames(): boolean;
        set discardCorruptedFrames(val: boolean);
        get max_errors(): number;
        set max_errors(val: number);
        get maxErrors(): number;
        set maxErrors(val: number);
        get min_force_key_unit_interval(): number;
        set min_force_key_unit_interval(val: bigint | number);
        get minForceKeyUnitInterval(): number;
        set minForceKeyUnitInterval(val: bigint | number);
        get qos(): boolean;
        set qos(val: boolean);
        $signals: VideoDecoder.SignalSignatures;
        constructor(properties?: Partial<VideoDecoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoDecoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoDecoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoDecoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoDecoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_drain(): Gst.FlowReturn;
        vfunc_finish(): Gst.FlowReturn;
        vfunc_flush(): boolean;
        vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
        vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        vfunc_handle_missing_data(timestamp: Gst.ClockTime, duration: Gst.ClockTime): boolean;
        vfunc_negotiate(): boolean;
        vfunc_open(): boolean;
        vfunc_parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_reset(hard: boolean): boolean;
        vfunc_set_format(state: VideoCodecState): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_sink_query(query: Gst.Query): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;
        add_to_frame(n_bytes: number): void;
        allocate_output_buffer(): Gst.Buffer | null;
        allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        allocate_output_frame_with_params(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn;
        drop_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        drop_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
        finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_buffer_pool(): Gst.BufferPool | null;
        get_estimate_rate(): number;
        get_frame(frame_number: number): VideoCodecFrame | null;
        get_frames(): VideoCodecFrame[];
        get_input_subframe_index(frame: VideoCodecFrame): number;
        get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
        get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
        get_max_errors(): number;
        get_needs_format(): boolean;
        get_needs_sync_point(): boolean;
        get_oldest_frame(): VideoCodecFrame | null;
        get_output_state(): VideoCodecState | null;
        get_packetized(): boolean;
        get_pending_frame_size(): number;
        get_processed_subframe_index(frame: VideoCodecFrame): number;
        get_qos_proportion(): number;
        get_subframe_mode(): boolean;
        have_frame(): Gst.FlowReturn;
        have_last_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        negotiate(): boolean;
        proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
        release_frame(frame: VideoCodecFrame): void;
        request_sync_point(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void;
        set_estimate_rate(enabled: boolean): void;
        set_interlaced_output_state(fmt: VideoFormat, interlace_mode: VideoInterlaceMode, width: number, height: number, reference: VideoCodecState | null): VideoCodecState | null;
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        set_max_errors(num: number): void;
        set_needs_format(enabled: boolean): void;
        set_needs_sync_point(enabled: boolean): void;
        set_output_state(fmt: VideoFormat, width: number, height: number, reference: VideoCodecState | null): VideoCodecState | null;
        set_packetized(packetized: boolean): void;
        set_subframe_mode(subframe_mode: boolean): void;
        set_use_default_pad_acceptcaps(use: boolean): void;
    }
    namespace VideoDmabufPool {
        interface SignalSignatures extends VideoBufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VideoBufferPool.ConstructorProps {}
    }
    class VideoDmabufPool extends VideoBufferPool {
        static $gtype: GObject.GType<VideoDmabufPool>;
        $signals: VideoDmabufPool.SignalSignatures;
        constructor(properties?: Partial<VideoDmabufPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VideoDmabufPool;
        connect<K extends keyof VideoDmabufPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoDmabufPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoDmabufPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoDmabufPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoDmabufPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoDmabufPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VideoEncoder {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::min-force-key-unit-interval": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.Preset.ConstructorProps {
            min_force_key_unit_interval: bigint | number;
            minForceKeyUnitInterval: bigint | number;
            qos: boolean;
        }
    }
    abstract class VideoEncoder extends Gst.Element implements Gst.Preset {
        static $gtype: GObject.GType<VideoEncoder>;
        get min_force_key_unit_interval(): number;
        set min_force_key_unit_interval(val: bigint | number);
        get minForceKeyUnitInterval(): number;
        set minForceKeyUnitInterval(val: bigint | number);
        get qos(): boolean;
        set qos(val: boolean);
        $signals: VideoEncoder.SignalSignatures;
        constructor(properties?: Partial<VideoEncoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoEncoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoEncoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoEncoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoEncoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoEncoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoEncoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): boolean;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_finish(): Gst.FlowReturn;
        vfunc_flush(): boolean;
        vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
        vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        vfunc_negotiate(): boolean;
        vfunc_open(): boolean;
        vfunc_pre_push(frame: VideoCodecFrame): Gst.FlowReturn;
        vfunc_propose_allocation(query: Gst.Query): boolean;
        vfunc_reset(hard: boolean): boolean;
        vfunc_set_format(state: VideoCodecState): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_sink_query(query: Gst.Query): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        vfunc_src_query(query: Gst.Query): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;
        allocate_output_buffer(size: bigint | number): Gst.Buffer;
        allocate_output_frame(frame: VideoCodecFrame, size: bigint | number): Gst.FlowReturn;
        drop_frame(frame: VideoCodecFrame): void;
        finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
        finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        get_frame(frame_number: number): VideoCodecFrame | null;
        get_frames(): VideoCodecFrame[];
        get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
        get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
        get_min_force_key_unit_interval(): Gst.ClockTime;
        get_oldest_frame(): VideoCodecFrame | null;
        get_output_state(): VideoCodecState | null;
        is_qos_enabled(): boolean;
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        negotiate(): boolean;
        proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
        release_frame(frame: VideoCodecFrame): void;
        set_headers(headers: Gst.Buffer[]): void;
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        set_min_force_key_unit_interval(interval: Gst.ClockTime): void;
        set_min_pts(min_pts: Gst.ClockTime): void;
        set_output_state(caps: Gst.Caps, reference: VideoCodecState | null): VideoCodecState | null;
        set_qos_enabled(enabled: boolean): void;
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
    namespace VideoFilter {
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
    }
    abstract class VideoFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<VideoFilter>;
        $signals: VideoFilter.SignalSignatures;
        element: GstBase.BaseTransform;
        negotiated: boolean;
        constructor(properties?: Partial<VideoFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_set_info(incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo): boolean;
        vfunc_transform_frame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn;
        vfunc_transform_frame_ip(frame: VideoFrame): Gst.FlowReturn;
    }
    namespace VideoMultiviewFlagsSet {
        interface SignalSignatures extends Gst.FlagSet.SignalSignatures {}
    }
    class VideoMultiviewFlagsSet extends Gst.FlagSet {
        static $gtype: GObject.GType<VideoMultiviewFlagsSet>;
        _init(...args: any[]): void;
        connect<K extends keyof VideoMultiviewFlagsSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoMultiviewFlagsSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoMultiviewFlagsSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoMultiviewFlagsSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoMultiviewFlagsSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoMultiviewFlagsSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VideoSink {
        interface SignalSignatures extends GstBase.BaseSink.SignalSignatures {
            "notify::show-preroll-frame": (pspec: GObject.ParamSpec) => void;
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
            show_preroll_frame: boolean;
            showPrerollFrame: boolean;
        }
    }
    class VideoSink extends GstBase.BaseSink {
        static $gtype: GObject.GType<VideoSink>;
        get show_preroll_frame(): boolean;
        set show_preroll_frame(val: boolean);
        get showPrerollFrame(): boolean;
        set showPrerollFrame(val: boolean);
        $signals: VideoSink.SignalSignatures;
        element: GstBase.BaseSink;
        width: number;
        height: number;
        constructor(properties?: Partial<VideoSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VideoSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VideoSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VideoSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;
        vfunc_set_info(caps: Gst.Caps, info: VideoInfo): boolean;
        vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn;
    }
    class AncillaryMeta {
        static $gtype: GObject.GType<AncillaryMeta>;
        field: AncillaryMetaField;
        c_not_y_channel: boolean;
        line: number;
        offset: number;
        DID: number;
        SDID_block_number: number;
        data_count: number;
        data: number[];
        checksum: number;
        static get_info(): Gst.MetaInfo;
    }
    type ColorBalanceChannelClass = typeof ColorBalanceChannel;
    type ColorBalanceInterface = typeof ColorBalance;
    type NavigationInterface = typeof Navigation;
    class VideoAFDMeta {
        static $gtype: GObject.GType<VideoAFDMeta>;
        field: number;
        spec: VideoAFDSpec;
        afd: VideoAFDValue;
        static get_info(): Gst.MetaInfo;
    }
    class VideoAffineTransformationMeta {
        static $gtype: GObject.GType<VideoAffineTransformationMeta>;
        matrix: number[];
        static get_info(): Gst.MetaInfo;
        apply_matrix(matrix: number[]): void;
    }
    type VideoAggregatorClass = typeof VideoAggregator;
    type VideoAggregatorConvertPadClass = typeof VideoAggregatorConvertPad;
    abstract class VideoAggregatorConvertPadPrivate {
        static $gtype: GObject.GType<VideoAggregatorConvertPadPrivate>;
    }
    type VideoAggregatorPadClass = typeof VideoAggregatorPad;
    abstract class VideoAggregatorPadPrivate {
        static $gtype: GObject.GType<VideoAggregatorPadPrivate>;
    }
    type VideoAggregatorParallelConvertPadClass = typeof VideoAggregatorParallelConvertPad;
    abstract class VideoAggregatorPrivate {
        static $gtype: GObject.GType<VideoAggregatorPrivate>;
    }
    class VideoAlignment {
        static $gtype: GObject.GType<VideoAlignment>;
        padding_top: number;
        padding_bottom: number;
        padding_left: number;
        padding_right: number;
        stride_align: number[];
        constructor(properties?: Partial<{
            padding_top: number;
            padding_bottom: number;
            padding_left: number;
            padding_right: number;
            stride_align: number[];
        }>);
        reset(): void;
    }
    class VideoAncillary {
        static $gtype: GObject.GType<VideoAncillary>;
        DID: number;
        SDID_block_number: number;
        data_count: number;
        data: Uint8Array;
        constructor(properties?: Partial<{
            DID: number;
            SDID_block_number: number;
            data_count: number;
            data: Uint8Array;
        }>);
    }
    class VideoBarMeta {
        static $gtype: GObject.GType<VideoBarMeta>;
        field: number;
        is_letterbox: boolean;
        bar_data1: number;
        bar_data2: number;
        static get_info(): Gst.MetaInfo;
    }
    type VideoBufferPoolClass = typeof VideoBufferPool;
    abstract class VideoBufferPoolPrivate {
        static $gtype: GObject.GType<VideoBufferPoolPrivate>;
    }
    class VideoCaptionMeta {
        static $gtype: GObject.GType<VideoCaptionMeta>;
        caption_type: VideoCaptionType;
        data: Uint8Array;
        size: number;
        static get_info(): Gst.MetaInfo;
    }
    abstract class VideoChromaResample {
        static $gtype: GObject.GType<VideoChromaResample>;
        free(): void;
        get_info(): [number, number];
    }
    class VideoCodecAlphaMeta {
        static $gtype: GObject.GType<VideoCodecAlphaMeta>;
        static get_info(): Gst.MetaInfo;
    }
    class VideoCodecFrame {
        static $gtype: GObject.GType<VideoCodecFrame>;
        system_frame_number: number;
        dts: Gst.ClockTime;
        pts: Gst.ClockTime;
        duration: Gst.ClockTime;
        distance_from_sync: number;
        deadline: Gst.ClockTime;
        get_user_data(): null;
        ref(): VideoCodecFrame;
        set_user_data(user_data: null): void;
        unref(): void;
    }
    class VideoCodecState {
        static $gtype: GObject.GType<VideoCodecState>;
        mastering_display_info: VideoMasteringDisplayInfo;
        content_light_level: VideoContentLightLevel;
        ref(): VideoCodecState;
        unref(): void;
    }
    class VideoColorPrimariesInfo {
        static $gtype: GObject.GType<VideoColorPrimariesInfo>;
        primaries: VideoColorPrimaries;
        Wx: number;
        Wy: number;
        Rx: number;
        Ry: number;
        Gx: number;
        Gy: number;
        Bx: number;
        By: number;
    }
    class VideoColorimetry {
        static $gtype: GObject.GType<VideoColorimetry>;
        range: VideoColorRange;
        matrix: VideoColorMatrix;
        transfer: VideoTransferFunction;
        primaries: VideoColorPrimaries;
        from_string(color: string): boolean;
        is_equal(other: VideoColorimetry): boolean;
        is_equivalent(bitdepth: number, other: VideoColorimetry, other_bitdepth: number): boolean;
        matches(color: string): boolean;
        to_string(): string | null;
    }
    class VideoContentLightLevel {
        static $gtype: GObject.GType<VideoContentLightLevel>;
        max_content_light_level: number;
        max_frame_average_light_level: number;
        constructor(properties?: Partial<{
            max_content_light_level: number;
            max_frame_average_light_level: number;
        }>);
        add_to_caps(caps: Gst.Caps): boolean;
        from_caps(caps: Gst.Caps): boolean;
        from_string(level: string): boolean;
        init(): void;
        is_equal(other: VideoContentLightLevel): boolean;
        to_string(): string;
    }
    abstract class VideoConverter {
        static $gtype: GObject.GType<VideoConverter>;
        frame(src: VideoFrame, dest: VideoFrame): void;
        frame_finish(): void;
        free(): void;
        get_config(): Gst.Structure;
        get_in_info(): VideoInfo;
        get_out_info(): VideoInfo;
        set_config(config: Gst.Structure): boolean;
        transform_metas(src: Gst.Buffer, dest: Gst.Buffer): boolean;
    }
    class VideoCropMeta {
        static $gtype: GObject.GType<VideoCropMeta>;
        x: number;
        y: number;
        width: number;
        height: number;
        static get_info(): Gst.MetaInfo;
    }
    type VideoDecoderClass = typeof VideoDecoder;
    abstract class VideoDecoderPrivate {
        static $gtype: GObject.GType<VideoDecoderPrivate>;
    }
    type VideoDirectionInterface = typeof VideoDirection;
    abstract class VideoDither {
        static $gtype: GObject.GType<VideoDither>;
        free(): void;
        line(line: null, x: number, y: number, width: number): void;
    }
    type VideoDmabufPoolClass = typeof VideoDmabufPool;
    type VideoEncoderClass = typeof VideoEncoder;
    abstract class VideoEncoderPrivate {
        static $gtype: GObject.GType<VideoEncoderPrivate>;
    }
    type VideoFilterClass = typeof VideoFilter;
    class VideoFormatInfo {
        static $gtype: GObject.GType<VideoFormatInfo>;
        format: VideoFormat;
        name: string;
        description: string;
        flags: VideoFormatFlags;
        bits: number;
        n_components: number;
        shift: number[];
        depth: number[];
        pixel_stride: number[];
        n_planes: number;
        plane: number[];
        poffset: number[];
        w_sub: number[];
        h_sub: number[];
        unpack_format: VideoFormat;
        unpack_func: VideoFormatUnpack;
        pack_lines: number;
        pack_func: VideoFormatPack;
        tile_mode: VideoTileMode;
        tile_ws: number;
        tile_hs: number;
        tile_info: VideoTileInfo[];
        component(plane: number): number;
        extrapolate_stride(plane: number, stride: number): number;
    }
    class VideoFrame {
        static $gtype: GObject.GType<VideoFrame>;
        flags: VideoFrameFlags;
        meta: null;
        id: number;
        data: null[];
        map: Gst.MapInfo[];
        static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
        static map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [boolean, VideoFrame];
        copy(src: VideoFrame): boolean;
        copy_plane(src: VideoFrame, plane: number): boolean;
        unmap(): void;
    }
    class VideoGLTextureUploadMeta {
        static $gtype: GObject.GType<VideoGLTextureUploadMeta>;
        texture_orientation: VideoGLTextureOrientation;
        n_textures: number;
        texture_type: VideoGLTextureType[];
        static get_info(): Gst.MetaInfo;
        upload(texture_id: number): boolean;
    }
    class VideoInfo {
        static $gtype: GObject.GType<VideoInfo>;
        interlace_mode: VideoInterlaceMode;
        flags: VideoFlags;
        width: number;
        height: number;
        size: number;
        views: number;
        chroma_site: VideoChromaSite;
        par_n: number;
        par_d: number;
        fps_n: number;
        fps_d: number;
        offset: number[];
        stride: number[];
        constructor(properties?: Partial<{
            interlace_mode: VideoInterlaceMode;
            flags: VideoFlags;
            width: number;
            height: number;
            size: number;
            views: number;
            chroma_site: VideoChromaSite;
            colorimetry: VideoColorimetry;
            par_n: number;
            par_d: number;
            fps_n: number;
            fps_d: number;
            offset: number[];
            stride: number[];
        }>);
        static ["new"](): VideoInfo;
        static new_from_caps(caps: Gst.Caps): VideoInfo;
        static from_caps(caps: Gst.Caps): [boolean, VideoInfo];
        static init(): VideoInfo;
        align(align: VideoAlignment): boolean;
        align_full(align: VideoAlignment): [boolean, number];
        convert(src_format: Gst.Format, src_value: bigint | number, dest_format: Gst.Format): [boolean, number];
        copy(): VideoInfo;
        free(): void;
        is_equal(other: VideoInfo): boolean;
        set_format(format: VideoFormat, width: number, height: number): boolean;
        set_interlaced_format(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean;
        to_caps(): Gst.Caps;
    }
    class VideoInfoDmaDrm {
        static $gtype: GObject.GType<VideoInfoDmaDrm>;
        drm_fourcc: number;
        drm_modifier: number;
        constructor(properties?: Partial<{
            vinfo: VideoInfo;
            drm_fourcc: number;
            drm_modifier: number;
        }>);
        static ["new"](): VideoInfoDmaDrm;
        static new_from_caps(caps: Gst.Caps): VideoInfoDmaDrm;
        static from_caps(caps: Gst.Caps): [boolean, VideoInfoDmaDrm];
        static from_video_info(info: VideoInfo, modifier: bigint | number): [boolean, VideoInfoDmaDrm];
        static init(): VideoInfoDmaDrm;
        free(): void;
        to_caps(): Gst.Caps | null;
        to_video_info(): [boolean, VideoInfo];
    }
    class VideoMasteringDisplayInfo {
        static $gtype: GObject.GType<VideoMasteringDisplayInfo>;
        display_primaries: VideoMasteringDisplayInfoCoordinates[];
        white_point: VideoMasteringDisplayInfoCoordinates;
        max_display_mastering_luminance: number;
        min_display_mastering_luminance: number;
        constructor(properties?: Partial<{
            display_primaries: VideoMasteringDisplayInfoCoordinates[];
            white_point: VideoMasteringDisplayInfoCoordinates;
            max_display_mastering_luminance: number;
            min_display_mastering_luminance: number;
        }>);
        static from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];
        add_to_caps(caps: Gst.Caps): boolean;
        from_caps(caps: Gst.Caps): boolean;
        init(): void;
        is_equal(other: VideoMasteringDisplayInfo): boolean;
        to_string(): string;
    }
    class VideoMasteringDisplayInfoCoordinates {
        static $gtype: GObject.GType<VideoMasteringDisplayInfoCoordinates>;
        x: number;
        y: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
    }
    class VideoMeta {
        static $gtype: GObject.GType<VideoMeta>;
        flags: VideoFrameFlags;
        format: VideoFormat;
        id: number;
        width: number;
        height: number;
        n_planes: number;
        offset: number[];
        stride: number[];
        alignment: VideoAlignment;
        static get_info(): Gst.MetaInfo;
        get_plane_height(): [boolean, number[]];
        get_plane_size(): [boolean, number[]];
        map(plane: number, info: Gst.MapInfo, flags: Gst.MapFlags): [boolean, null, number];
        set_alignment(alignment: VideoAlignment): boolean;
        set_alignment_full(alignment: VideoAlignment): boolean;
        unmap(plane: number, info: Gst.MapInfo): boolean;
    }
    class VideoMetaTransform {
        static $gtype: GObject.GType<VideoMetaTransform>;
        static scale_get_quark(): GLib.Quark;
    }
    class VideoMetaTransformMatrix {
        static $gtype: GObject.GType<VideoMetaTransformMatrix>;
        in_rectangle: VideoRectangle;
        out_rectangle: VideoRectangle;
        matrix: number[];
        static get_quark(): GLib.Quark;
        init(in_info: VideoInfo, in_rectangle: VideoRectangle, out_info: VideoInfo, out_rectangle: VideoRectangle): void;
        point(x: number, y: number): [boolean, number, number];
        point_clipped(x: number, y: number): [boolean, number, number];
        rectangle(rect: VideoRectangle): [boolean, VideoRectangle];
        rectangle_clipped(rect: VideoRectangle): [boolean, VideoRectangle];
    }
    type VideoOrientationInterface = typeof VideoOrientation;
    class VideoOverlayComposition {
        static $gtype: GObject.GType<VideoOverlayComposition>;
        constructor(rectangle: VideoOverlayRectangle | null);
        static ["new"](rectangle: VideoOverlayRectangle | null): VideoOverlayComposition;
        add_rectangle(rectangle: VideoOverlayRectangle): void;
        blend(video_buf: VideoFrame): boolean;
        copy(): VideoOverlayComposition;
        get_rectangle(n: number): VideoOverlayRectangle | null;
        get_seqnum(): number;
        make_writable(): VideoOverlayComposition;
        n_rectangles(): number;
    }
    class VideoOverlayCompositionMeta {
        static $gtype: GObject.GType<VideoOverlayCompositionMeta>;
        static get_info(): Gst.MetaInfo;
    }
    type VideoOverlayInterface = typeof VideoOverlay;
    class VideoOverlayRectangle {
        static $gtype: GObject.GType<VideoOverlayRectangle>;
        constructor(pixels: Gst.Buffer, render_x: number, render_y: number, render_width: number, render_height: number, flags: VideoOverlayFormatFlags);
        static new_raw(pixels: Gst.Buffer, render_x: number, render_y: number, render_width: number, render_height: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle;
        copy(): VideoOverlayRectangle;
        get_flags(): VideoOverlayFormatFlags;
        get_global_alpha(): number;
        get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
        get_render_rectangle(): [boolean, number, number, number, number];
        get_seqnum(): number;
        set_global_alpha(global_alpha: number): void;
        set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void;
    }
    class VideoRectangle {
        static $gtype: GObject.GType<VideoRectangle>;
        x: number;
        y: number;
        w: number;
        h: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
            w: number;
            h: number;
        }>);
    }
    class VideoRegionOfInterestMeta {
        static $gtype: GObject.GType<VideoRegionOfInterestMeta>;
        roi_type: GLib.Quark;
        id: number;
        parent_id: number;
        x: number;
        y: number;
        w: number;
        h: number;
        params: null[];
        static get_info(): Gst.MetaInfo;
        add_param(s: Gst.Structure): void;
        get_param(name: string): Gst.Structure | null;
    }
    class VideoResampler {
        static $gtype: GObject.GType<VideoResampler>;
        in_size: number;
        out_size: number;
        max_taps: number;
        n_phases: number;
        offset: number;
        phase: number;
        n_taps: number;
        taps: number;
        constructor(properties?: Partial<{
            in_size: number;
            out_size: number;
            max_taps: number;
            n_phases: number;
            offset: number;
            phase: number;
            n_taps: number;
            taps: number;
        }>);
        clear(): void;
        init(method: VideoResamplerMethod, flags: VideoResamplerFlags, n_phases: number, n_taps: number, shift: number, in_size: number, out_size: number, options: Gst.Structure): boolean;
    }
    class VideoSEIUserDataUnregisteredMeta {
        static $gtype: GObject.GType<VideoSEIUserDataUnregisteredMeta>;
        uuid: Uint8Array;
        data: number;
        size: number;
        static get_info(): Gst.MetaInfo;
    }
    abstract class VideoScaler {
        static $gtype: GObject.GType<VideoScaler>;
        ["2d"](vscale: VideoScaler, format: VideoFormat, src: null, src_stride: number, dest: null, dest_stride: number, x: number, y: number, width: number, height: number): void;
        free(): void;
        get_coeff(out_offset: number): [number[], number];
        get_max_taps(): number;
        horizontal(format: VideoFormat, src: null, dest: null, dest_offset: number, width: number): void;
        vertical(format: VideoFormat, src_lines: null, dest: null, dest_offset: number, width: number): void;
    }
    type VideoSinkClass = typeof VideoSink;
    abstract class VideoSinkPrivate {
        static $gtype: GObject.GType<VideoSinkPrivate>;
    }
    class VideoTileInfo {
        static $gtype: GObject.GType<VideoTileInfo>;
        width: number;
        height: number;
        stride: number;
        size: number;
        constructor(properties?: Partial<{
            width: number;
            height: number;
            stride: number;
            size: number;
        }>);
    }
    class VideoTimeCode {
        static $gtype: GObject.GType<VideoTimeCode>;
        hours: number;
        minutes: number;
        seconds: number;
        frames: number;
        field_count: number;
        constructor(properties?: Partial<{
            config: VideoTimeCodeConfig;
            hours: number;
            minutes: number;
            seconds: number;
            frames: number;
            field_count: number;
        }>);
        static ["new"](fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCode;
        static new_empty(): VideoTimeCode;
        static new_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode;
        static new_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode;
        static new_from_string(tc_str: string): VideoTimeCode;
        add_frames(frames: bigint | number): void;
        add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null;
        clear(): void;
        compare(tc2: VideoTimeCode): number;
        copy(): VideoTimeCode;
        frames_since_daily_jam(): number;
        free(): void;
        increment_frame(): void;
        init(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): void;
        init_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): void;
        init_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): boolean;
        is_valid(): boolean;
        nsec_since_daily_jam(): number;
        to_date_time(): GLib.DateTime | null;
        to_string(): string;
    }
    class VideoTimeCodeConfig {
        static $gtype: GObject.GType<VideoTimeCodeConfig>;
        fps_n: number;
        fps_d: number;
        flags: VideoTimeCodeFlags;
    }
    class VideoTimeCodeInterval {
        static $gtype: GObject.GType<VideoTimeCodeInterval>;
        hours: number;
        minutes: number;
        seconds: number;
        frames: number;
        constructor(properties?: Partial<{
            hours: number;
            minutes: number;
            seconds: number;
            frames: number;
        }>);
        static ["new"](hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval;
        static new_from_string(tc_inter_str: string): VideoTimeCodeInterval;
        clear(): void;
        copy(): VideoTimeCodeInterval;
        free(): void;
        init(hours: number, minutes: number, seconds: number, frames: number): void;
    }
    class VideoTimeCodeMeta {
        static $gtype: GObject.GType<VideoTimeCodeMeta>;
        tc: VideoTimeCode;
        static get_info(): Gst.MetaInfo;
    }
    class VideoVBIEncoder {
        static $gtype: GObject.GType<VideoVBIEncoder>;
        constructor(format: VideoFormat, pixel_width: number);
        static ["new"](format: VideoFormat, pixel_width: number): VideoVBIEncoder;
        add_ancillary(composite: boolean, DID: number, SDID_block_number: number, data: Uint8Array | string): boolean;
        copy(): VideoVBIEncoder;
        free(): void;
        write_line(data: Uint8Array | string): void;
    }
    class VideoVBIParser {
        static $gtype: GObject.GType<VideoVBIParser>;
        constructor(format: VideoFormat, pixel_width: number);
        static ["new"](format: VideoFormat, pixel_width: number): VideoVBIParser;
        add_line(data: Uint8Array | string): void;
        copy(): VideoVBIParser;
        free(): void;
        get_ancillary(): [VideoVBIParserResult, VideoAncillary];
    }
    namespace ColorBalance {
        interface Interface {
            vfunc_get_balance_type(): ColorBalanceType;
            vfunc_get_value(channel: ColorBalanceChannel): number;
            vfunc_list_channels(): ColorBalanceChannel[];
            vfunc_set_value(channel: ColorBalanceChannel, value: number): void;
            vfunc_value_changed(channel: ColorBalanceChannel, value: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ColorBalanceNamespace {
        $gtype: GObject.GType<ColorBalance>;
        prototype: ColorBalance;
    }
    interface ColorBalance extends GObject.Object, ColorBalance.Interface {
        get_balance_type(): ColorBalanceType;
        get_value(channel: ColorBalanceChannel): number;
        list_channels(): ColorBalanceChannel[];
        set_value(channel: ColorBalanceChannel, value: number): void;
        value_changed(channel: ColorBalanceChannel, value: number): void;
    }
    export const ColorBalance: ColorBalanceNamespace & {
        new (): ColorBalance; 
    };
    namespace Navigation {
        interface Interface {
            vfunc_send_event(structure: Gst.Structure): void;
            vfunc_send_event_simple(event: Gst.Event): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface NavigationNamespace {
        $gtype: GObject.GType<Navigation>;
        prototype: Navigation;
        event_get_coordinates(event: Gst.Event): [boolean, number, number];
        event_get_type(event: Gst.Event): NavigationEventType;
        event_new_command(command: NavigationCommand): Gst.Event;
        event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
        event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
        event_new_mouse_button_press(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
        event_new_mouse_button_release(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
        event_new_mouse_double_click(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
        event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
        event_new_mouse_scroll(x: number, y: number, delta_x: number, delta_y: number, state: NavigationModifierType): Gst.Event;
        event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
        event_new_touch_down(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event;
        event_new_touch_frame(state: NavigationModifierType): Gst.Event;
        event_new_touch_motion(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event;
        event_new_touch_up(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
        event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
        event_parse_key_event(event: Gst.Event): [boolean, string];
        event_parse_modifier_state(event: Gst.Event): [boolean, NavigationModifierType];
        event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
        event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
        event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
        event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
        event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
        event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
        message_get_type(message: Gst.Message): NavigationMessageType;
        message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message;
        message_new_commands_changed(src: Gst.Object): Gst.Message;
        message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
        message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
        message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
        message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
        message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
        query_get_type(query: Gst.Query): NavigationQueryType;
        query_new_angles(): Gst.Query;
        query_new_commands(): Gst.Query;
        query_parse_angles(query: Gst.Query): [boolean, number, number];
        query_parse_commands_length(query: Gst.Query): [boolean, number];
        query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
        query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
        query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
    }
    interface Navigation extends GObject.Object, Navigation.Interface {
        send_command(command: NavigationCommand): void;
        send_event(structure: Gst.Structure): void;
        send_event_simple(event: Gst.Event): void;
        send_key_event(event: string, key: string): void;
        send_mouse_event(event: string, button: number, x: number, y: number): void;
        send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;
    }
    export const Navigation: NavigationNamespace & {
        new (): Navigation; 
    };
    namespace VideoDirection {
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            video_direction: VideoOrientationMethod;
            videoDirection: VideoOrientationMethod;
        }
    }
    export interface VideoDirectionNamespace {
        $gtype: GObject.GType<VideoDirection>;
        prototype: VideoDirection;
    }
    interface VideoDirection extends GObject.Object {
        get video_direction(): VideoOrientationMethod;
        set video_direction(val: VideoOrientationMethod);
        get videoDirection(): VideoOrientationMethod;
        set videoDirection(val: VideoOrientationMethod);
    }
    export const VideoDirection: VideoDirectionNamespace & {
        new (): VideoDirection; 
    };
    namespace VideoOrientation {
        interface Interface {
            vfunc_get_hcenter(): [boolean, number];
            vfunc_get_hflip(): [boolean, boolean];
            vfunc_get_vcenter(): [boolean, number];
            vfunc_get_vflip(): [boolean, boolean];
            vfunc_set_hcenter(center: number): boolean;
            vfunc_set_hflip(flip: boolean): boolean;
            vfunc_set_vcenter(center: number): boolean;
            vfunc_set_vflip(flip: boolean): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface VideoOrientationNamespace {
        $gtype: GObject.GType<VideoOrientation>;
        prototype: VideoOrientation;
        from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
    }
    interface VideoOrientation extends GObject.Object, VideoOrientation.Interface {
        get_hcenter(): [boolean, number];
        get_hflip(): [boolean, boolean];
        get_vcenter(): [boolean, number];
        get_vflip(): [boolean, boolean];
        set_hcenter(center: number): boolean;
        set_hflip(flip: boolean): boolean;
        set_vcenter(center: number): boolean;
        set_vflip(flip: boolean): boolean;
    }
    export const VideoOrientation: VideoOrientationNamespace & {
        new (): VideoOrientation; 
    };
    namespace VideoOverlay {
        interface Interface {
            vfunc_expose(): void;
            vfunc_handle_events(handle_events: boolean): void;
            vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void;
            vfunc_set_window_handle(handle: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface VideoOverlayNamespace {
        $gtype: GObject.GType<VideoOverlay>;
        prototype: VideoOverlay;
        install_properties(oclass: typeof GObject.Object, last_prop_id: number): void;
        install_properties(...args: never[]): any;
        set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: GObject.Value | any): boolean;
    }
    interface VideoOverlay extends GObject.Object, VideoOverlay.Interface {
        expose(): void;
        got_window_handle(handle: bigint | number): void;
        handle_events(handle_events: boolean): void;
        prepare_window_handle(): void;
        set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        set_window_handle(handle: bigint | number): void;
    }
    export const VideoOverlay: VideoOverlayNamespace & {
        new (): VideoOverlay; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstVideo;
}
declare module 'gi://GstVideo' {
    import GstVideo10 from 'gi://GstVideo?version=1.0';
    export default GstVideo10;
}
