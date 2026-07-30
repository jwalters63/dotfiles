declare module 'gi://GstCodecParsers?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstCodecParsers {
    enum AV1BitWriterResult {
        OK,
        INVALID_DATA,
        NO_MORE_SPACE,
        ERROR,
    }
    enum AV1ChromaSamplePositions {
        UNKNOWN,
        VERTICAL,
        COLOCATED,
        RESERVED,
    }
    enum AV1ColorPrimaries {
        BT_709,
        UNSPECIFIED,
        BT_470_M,
        BT_470_B_G,
        BT_601,
        SMPTE_240,
        GENERIC_FILM,
        BT_2020,
        XYZ,
        SMPTE_431,
        SMPTE_432,
        EBU_3213,
    }
    enum AV1FrameRestorationType {
        NONE,
        WIENER,
        SGRPROJ,
        SWITCHABLE,
    }
    enum AV1FrameType {
        KEY_FRAME,
        INTER_FRAME,
        INTRA_ONLY_FRAME,
        SWITCH_FRAME,
    }
    enum AV1InterpolationFilter {
        EIGHTTAP,
        EIGHTTAP_SMOOTH,
        EIGHTTAP_SHARP,
        BILINEAR,
        SWITCHABLE,
    }
    enum AV1MatrixCoefficients {
        IDENTITY,
        BT_709,
        UNSPECIFIED,
        RESERVED_3,
        FCC,
        BT_470_B_G,
        BT_601,
        SMPTE_240,
        SMPTE_YCGCO,
        BT_2020_NCL,
        BT_2020_CL,
        SMPTE_2085,
        CHROMAT_NCL,
        CHROMAT_CL,
        ICTCP,
    }
    enum AV1MetadataType {
        RESERVED_0,
        HDR_CLL,
        HDR_MDCV,
        SCALABILITY,
        ITUT_T35,
        TIMECODE,
    }
    enum AV1OBUType {
        RESERVED_0,
        SEQUENCE_HEADER,
        TEMPORAL_DELIMITER,
        FRAME_HEADER,
        TILE_GROUP,
        METADATA,
        FRAME,
        REDUNDANT_FRAME_HEADER,
        TILE_LIST,
        RESERVED_9,
        RESERVED_10,
        RESERVED_11,
        RESERVED_12,
        RESERVED_13,
        RESERVED_14,
        PADDING,
    }
    enum AV1ParserResult {
        OK,
        NO_MORE_DATA,
        DROP,
        BITSTREAM_ERROR,
        MISSING_OBU_REFERENCE,
        INVALID_OPERATION,
    }
    class AV1Profile {
        static $gtype: GObject.GType<AV1Profile>;
        static "0": number;
        static "1": number;
        static "2": number;
        static UNDEFINED: number;
    }
    enum AV1ReferenceFrame {
        REF_INTRA_FRAME,
        REF_LAST_FRAME,
        REF_LAST2_FRAME,
        REF_LAST3_FRAME,
        REF_GOLDEN_FRAME,
        REF_BWDREF_FRAME,
        REF_ALTREF2_FRAME,
        REF_ALTREF_FRAME,
        NUM_REF_FRAMES,
    }
    enum AV1ScalabilityModes {
        L1T2,
        L1T3,
        L2T1,
        L2T2,
        L2T3,
        S2T1,
        S2T2,
        S2T3,
        L2T1H,
        L2T2H,
        L2T3H,
        S2T1H,
        S2T2H,
        S2T3H,
        SS,
    }
    enum AV1SeqLevels {
        LEVEL_2_0,
        LEVEL_2_1,
        LEVEL_2_2,
        LEVEL_2_3,
        LEVEL_3_0,
        LEVEL_3_1,
        LEVEL_3_2,
        LEVEL_3_3,
        LEVEL_4_0,
        LEVEL_4_1,
        LEVEL_4_2,
        LEVEL_4_3,
        LEVEL_5_0,
        LEVEL_5_1,
        LEVEL_5_2,
        LEVEL_5_3,
        LEVEL_6_0,
        LEVEL_6_1,
        LEVEL_6_2,
        LEVEL_6_3,
        LEVEL_7_0,
        LEVEL_7_1,
        LEVEL_7_2,
        LEVEL_7_3,
        LEVELS,
        LEVEL_MAX,
    }
    enum AV1TXModes {
        ONLY_4X4,
        LARGEST,
        SELECT,
    }
    enum AV1TransferCharacteristics {
        RESERVED_0,
        BT_709,
        UNSPECIFIED,
        RESERVED_3,
        BT_470_M,
        BT_470_B_G,
        BT_601,
        SMPTE_240,
        LINEAR,
        LOG_100,
        LOG_100_SQRT10,
        IEC_61966,
        BT_1361,
        SRGB,
        BT_2020_10_BIT,
        BT_2020_12_BIT,
        SMPTE_2084,
        SMPTE_428,
        HLG,
    }
    enum AV1WarpModelType {
        IDENTITY,
        TRANSLATION,
        ROTZOOM,
        AFFINE,
    }
    enum CtType {
        PROGRESSIVE,
        INTERLACED,
        UNKNOWN,
    }
    enum H264BitWriterResult {
        OK,
        INVALID_DATA,
        NO_MORE_SPACE,
        ERROR,
    }
    enum H264FramePackingType {
        FRAME_PACKING_NONE,
        FRAME_PACKING_CHECKERBOARD_INTERLEAVING,
        FRAME_PACKING_COLUMN_INTERLEAVING,
        FRAME_PACKING_ROW_INTERLEAVING,
        FRAME_PACKING_SIDE_BY_SIDE,
        FRMAE_PACKING_TOP_BOTTOM,
        FRAME_PACKING_TOP_BOTTOM,
        FRAME_PACKING_TEMPORAL_INTERLEAVING,
    }
    enum H264Level {
        L1,
        L1B,
        L1_1,
        L1_2,
        L1_3,
        L2,
        L2_1,
        L2_2,
        L3,
        L3_1,
        L3_2,
        L4,
        L4_1,
        L4_2,
        L5,
        L5_1,
        L5_2,
        L6,
        L6_1,
        L6_2,
    }
    enum H264NalUnitExtensionType {
        NONE,
        SVC,
        MVC,
    }
    enum H264NalUnitType {
        UNKNOWN,
        SLICE,
        SLICE_DPA,
        SLICE_DPB,
        SLICE_DPC,
        SLICE_IDR,
        SEI,
        SPS,
        PPS,
        AU_DELIMITER,
        SEQ_END,
        STREAM_END,
        FILLER_DATA,
        SPS_EXT,
        PREFIX_UNIT,
        SUBSET_SPS,
        DEPTH_SPS,
        RSV_1,
        RSV_2,
        SLICE_AUX,
        SLICE_EXT,
        SLICE_DEPTH,
    }
    enum H264ParserResult {
        OK,
        BROKEN_DATA,
        BROKEN_LINK,
        ERROR,
        NO_NAL,
        NO_NAL_END,
    }
    enum H264Profile {
        BASELINE,
        MAIN,
        EXTENDED,
        HIGH,
        HIGH10,
        HIGH_422,
        HIGH_444,
        MULTIVIEW_HIGH,
        STEREO_HIGH,
        SCALABLE_BASELINE,
        SCALABLE_HIGH,
        INVALID,
    }
    enum H264SEIPayloadType {
        BUF_PERIOD,
        PIC_TIMING,
        REGISTERED_USER_DATA,
        USER_DATA_UNREGISTERED,
        RECOVERY_POINT,
        STEREO_VIDEO_INFO,
        FRAME_PACKING,
        MASTERING_DISPLAY_COLOUR_VOLUME,
        CONTENT_LIGHT_LEVEL,
        UNHANDLED_PAYLOAD,
    }
    enum H264SEIPicStructType {
        FRAME,
        TOP_FIELD,
        BOTTOM_FIELD,
        TOP_BOTTOM,
        BOTTOM_TOP,
        TOP_BOTTOM_TOP,
        BOTTOM_TOP_BOTTOM,
        FRAME_DOUBLING,
        FRAME_TRIPLING,
    }
    enum H264SliceType {
        P_SLICE,
        B_SLICE,
        I_SLICE,
        SP_SLICE,
        SI_SLICE,
        S_P_SLICE,
        S_B_SLICE,
        S_I_SLICE,
        S_SP_SLICE,
        S_SI_SLICE,
    }
    enum H265Level {
        L1,
        L2,
        L2_1,
        L3,
        L3_1,
        L4,
        L4_1,
        L5,
        L5_1,
        L5_2,
        L6,
        L6_1,
        L6_2,
    }
    enum H265NalUnitType {
        SLICE_TRAIL_N,
        SLICE_TRAIL_R,
        SLICE_TSA_N,
        SLICE_TSA_R,
        SLICE_STSA_N,
        SLICE_STSA_R,
        SLICE_RADL_N,
        SLICE_RADL_R,
        SLICE_RASL_N,
        SLICE_RASL_R,
        SLICE_BLA_W_LP,
        SLICE_BLA_W_RADL,
        SLICE_BLA_N_LP,
        SLICE_IDR_W_RADL,
        SLICE_IDR_N_LP,
        SLICE_CRA_NUT,
        VPS,
        SPS,
        PPS,
        AUD,
        EOS,
        EOB,
        FD,
        PREFIX_SEI,
        SUFFIX_SEI,
    }
    enum H265ParserResult {
        OK,
        BROKEN_DATA,
        BROKEN_LINK,
        ERROR,
        NO_NAL,
        NO_NAL_END,
    }
    enum H265Profile {
        INVALID,
        MAIN,
        MAIN_10,
        MAIN_STILL_PICTURE,
        MONOCHROME,
        MONOCHROME_12,
        MONOCHROME_16,
        MAIN_12,
        MAIN_422_10,
        MAIN_422_12,
        MAIN_444,
        MAIN_444_10,
        MAIN_444_12,
        MAIN_INTRA,
        MAIN_10_INTRA,
        MAIN_12_INTRA,
        MAIN_422_10_INTRA,
        MAIN_422_12_INTRA,
        MAIN_444_INTRA,
        MAIN_444_10_INTRA,
        MAIN_444_12_INTRA,
        MAIN_444_16_INTRA,
        MAIN_444_STILL_PICTURE,
        MAIN_444_16_STILL_PICTURE,
        MONOCHROME_10,
        HIGH_THROUGHPUT_444,
        HIGH_THROUGHPUT_444_10,
        HIGH_THROUGHPUT_444_14,
        HIGH_THROUGHPUT_444_16_INTRA,
        SCREEN_EXTENDED_MAIN,
        SCREEN_EXTENDED_MAIN_10,
        SCREEN_EXTENDED_MAIN_444,
        SCREEN_EXTENDED_MAIN_444_10,
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444,
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444_10,
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444_14,
        MULTIVIEW_MAIN,
        SCALABLE_MAIN,
        SCALABLE_MAIN_10,
        SCALABLE_MONOCHROME,
        SCALABLE_MONOCHROME_12,
        SCALABLE_MONOCHROME_16,
        SCALABLE_MAIN_444,
        "3D_MAIN",
        MAX,
    }
    enum H265ProfileIDC {
        MAIN,
        MAIN_10,
        MAIN_STILL_PICTURE,
        FORMAT_RANGE_EXTENSION,
        HIGH_THROUGHPUT,
        MULTIVIEW_MAIN,
        SCALABLE_MAIN,
        "3D_MAIN",
        SCREEN_CONTENT_CODING,
        SCALABLE_FORMAT_RANGE_EXTENSION,
        HIGH_THROUGHPUT_SCREEN_CONTENT_CODING_EXTENSION,
    }
    enum H265QuantMatrixSize {
        "4X4",
        "8X8",
        "16X16",
        "32X32",
    }
    enum H265SEIPayloadType {
        BUF_PERIOD,
        PIC_TIMING,
        REGISTERED_USER_DATA,
        USER_DATA_UNREGISTERED,
        RECOVERY_POINT,
        TIME_CODE,
        MASTERING_DISPLAY_COLOUR_VOLUME,
        CONTENT_LIGHT_LEVEL,
    }
    enum H265SEIPicStructType {
        FRAME,
        TOP_FIELD,
        BOTTOM_FIELD,
        TOP_BOTTOM,
        BOTTOM_TOP,
        TOP_BOTTOM_TOP,
        BOTTOM_TOP_BOTTOM,
        FRAME_DOUBLING,
        FRAME_TRIPLING,
        TOP_PAIRED_PREVIOUS_BOTTOM,
        BOTTOM_PAIRED_PREVIOUS_TOP,
        TOP_PAIRED_NEXT_BOTTOM,
        BOTTOM_PAIRED_NEXT_TOP,
    }
    enum H265SliceType {
        B_SLICE,
        P_SLICE,
        I_SLICE,
    }
    enum H266APSType {
        ALF_APS,
        LMCS_APS,
        SCALING_APS,
        APS_TYPE_MAX,
    }
    enum H266Level {
        L1_0,
        L2_0,
        L2_1,
        L3_0,
        L3_1,
        L4_0,
        L4_1,
        L5_0,
        L5_1,
        L5_2,
        L6_0,
        L6_1,
        L6_2,
        L6_3,
    }
    enum H266NalUnitType {
        SLICE_TRAIL,
        SLICE_STSA,
        SLICE_RADL,
        SLICE_RASL,
        SLICE_IDR_W_RADL,
        SLICE_IDR_N_LP,
        SLICE_CRA,
        SLICE_GDR,
        OPI,
        DCI,
        VPS,
        SPS,
        PPS,
        PREFIX_APS,
        SUFFIX_APS,
        PH,
        AUD,
        EOS,
        EOB,
        PREFIX_SEI,
        SUFFIX_SEI,
        FD,
    }
    enum H266ParserResult {
        OK,
        BROKEN_DATA,
        BROKEN_LINK,
        ERROR,
        NO_NAL,
        NO_NAL_END,
    }
    enum H266Profile {
        INVALID,
        NONE,
        INTRA,
        STILL_PICTURE,
        MAIN_10,
        MAIN_10_STILL_PICTURE,
        MULTILAYER_MAIN_10,
        MULTILAYER_MAIN_10_STILL_PICTURE,
        MAIN_10_444,
        MAIN_10_444_STILL_PICTURE,
        MULTILAYER_MAIN_10_444,
        MULTILAYER_MAIN_10_444_STILL_PICTURE,
        MAIN_12,
        MAIN_12_444,
        MAIN_16_444,
        MAIN_12_INTRA,
        MAIN_12_444_INTRA,
        MAIN_16_444_INTRA,
        MAIN_12_STILL_PICTURE,
        MAIN_12_444_STILL_PICTURE,
        MAIN_16_444_STILL_PICTURE,
        MAX,
    }
    enum H266SEIPayloadType {
        BUF_PERIOD,
        PIC_TIMING,
        REGISTERED_USER_DATA,
        USER_DATA_UNREGISTERED,
        DU_INFO,
        SCALABLE_NESTING,
        FRAME_FIELD_INFO,
        SUBPIC_LEVEL_INFO,
    }
    enum H266SliceType {
        B_SLICE,
        P_SLICE,
        I_SLICE,
    }
    enum JPEG2000Colorspace {
        NONE,
        RGB,
        YUV,
        GRAY,
    }
    enum JPEG2000Sampling {
        NONE,
        RGB,
        BGR,
        RGBA,
        BGRA,
        YBR444,
        YBR422,
        YBR420,
        YBR410,
        GRAYSCALE,
        YBRA4444_EXT,
        YBR411,
    }
    enum JpegBitWriterResult {
        OK,
        INVALID_DATA,
        NO_MORE_SPACE,
        ERROR,
    }
    enum JpegEntropyCodingMode {
        HUFFMAN,
        ARITHMETIC,
    }
    enum JpegMarker {
        SOF0,
        SOF1,
        SOF2,
        SOF3,
        SOF5,
        SOF6,
        SOF7,
        SOF9,
        SOF10,
        SOF11,
        SOF13,
        SOF14,
        SOF15,
        DHT,
        DAC,
        RST0,
        RST1,
        RST2,
        RST3,
        RST4,
        RST5,
        RST6,
        RST7,
        SOI,
        EOI,
        SOS,
        DQT,
        DNL,
        DRI,
        APP0,
        APP1,
        APP2,
        APP3,
        APP4,
        APP5,
        APP6,
        APP7,
        APP8,
        APP9,
        APP10,
        APP11,
        APP12,
        APP13,
        APP14,
        APP15,
        COM,
    }
    enum JpegProfile {
        BASELINE,
        EXTENDED,
        PROGRESSIVE,
        LOSSLESS,
    }
    enum Mpeg4AspectRatioInfo {
        SQUARE,
        "625_TYPE_4_3",
        "525_TYPE_4_3",
        "625_TYPE_16_9",
        "525_TYPE_16_9",
        EXTENDED_PAR,
    }
    enum Mpeg4ChromaFormat {
        MPEG4_CHROMA_4_2_0,
    }
    enum Mpeg4Level {
        LEVEL0,
        LEVEL1,
        LEVEL2,
        LEVEL3,
        LEVEL3B,
        LEVEL4,
        LEVEL5,
        LEVEL_RESERVED,
    }
    enum Mpeg4ParseResult {
        OK,
        BROKEN_DATA,
        NO_PACKET,
        NO_PACKET_END,
        ERROR,
    }
    enum Mpeg4Profile {
        CORE,
        MAIN,
        N_BIT,
        SIMPLE,
        HYBRID,
        RESERVED,
        SIMPLE_FBA,
        CORE_STUDIO,
        SIMPLE_STUDIO,
        CORE_SCALABLE,
        ADVANCED_CORE,
        ADVANCED_SIMPLE,
        SIMPLE_SCALABLE,
        SCALABLE_TEXTURE,
        SIMPLE_FACE_ANIMATION,
        BASIC_ANIMATED_TEXTURE,
        ADVANCED_REALTIME_SIMPLE,
        ADVANCED_SCALABLE_TEXTURE,
        FINE_GRANULARITY_SCALABLE,
        ADVANCED_CODING_EFFICIENCY,
    }
    enum Mpeg4SpriteEnable {
        UNUSED,
        STATIC,
        GMG,
    }
    enum Mpeg4StartCode {
        VIDEO_OBJ_FIRST,
        VIDEO_OBJ_LAST,
        VIDEO_LAYER_FIRST,
        VIDEO_LAYER_LAST,
        VISUAL_OBJ_SEQ_START,
        VISUAL_OBJ_SEQ_END,
        USER_DATA,
        GROUP_OF_VOP,
        VIDEO_SESSION_ERR,
        VISUAL_OBJ,
        VIDEO_OBJ_PLANE,
        FBA,
        FBA_PLAN,
        MESH,
        MESH_PLAN,
        STILL_TEXTURE_OBJ,
        TEXTURE_SPATIAL,
        TEXTURE_SNR_LAYER,
        TEXTURE_TILE,
        SHAPE_LAYER,
        STUFFING,
        SYSTEM_FIRST,
        SYSTEM_LAST,
        RESYNC,
    }
    enum Mpeg4VideoObjectCodingType {
        I_VOP,
        P_VOP,
        B_VOP,
        S_VOP,
    }
    enum Mpeg4VideoObjectLayerShape {
        RECTANGULAR,
        BINARY,
        BINARY_ONLY,
        GRAYSCALE,
    }
    enum Mpeg4VisualObjectType {
        VIDEO_ID,
        STILL_TEXTURE_ID,
        STILL_MESH_ID,
        STILL_FBA_ID,
        STILL_3D_MESH_ID,
    }
    class MpegVideoChromaFormat {
        static $gtype: GObject.GType<MpegVideoChromaFormat>;
        static RES: number;
        static "420": number;
        static "422": number;
        static "444": number;
    }
    enum MpegVideoLevel {
        HIGH_P,
        HIGH,
        HIGH_1440,
        MAIN,
        LOW,
    }
    enum MpegVideoPacketExtensionCode {
        SEQUENCE,
        SEQUENCE_DISPLAY,
        QUANT_MATRIX,
        SEQUENCE_SCALABLE,
        PICTURE,
    }
    enum MpegVideoPacketTypeCode {
        PICTURE,
        SLICE_MIN,
        SLICE_MAX,
        USER_DATA,
        SEQUENCE,
        EXTENSION,
        SEQUENCE_END,
        GOP,
        NONE,
    }
    enum MpegVideoPictureStructure {
        TOP_FIELD,
        BOTTOM_FIELD,
        FRAME,
    }
    enum MpegVideoPictureType {
        I,
        P,
        B,
        D,
    }
    class MpegVideoProfile {
        static $gtype: GObject.GType<MpegVideoProfile>;
        static "422": number;
        static HIGH: number;
        static SPATIALLY_SCALABLE: number;
        static SNR_SCALABLE: number;
        static MAIN: number;
        static SIMPLE: number;
    }
    enum MpegVideoSequenceScalableMode {
        DATA_PARTITIONING,
        SPATIAL,
        SNR,
        TEMPORAL,
    }
    enum VC1Condover {
        NONE,
        ALL,
        SELECT,
    }
    enum VC1DQProfile {
        FOUR_EDGES,
        DOUBLE_EDGES,
        SINGLE_EDGE,
        ALL_MBS,
    }
    enum VC1FrameCodingMode {
        FRAME_PROGRESSIVE,
        FRAME_INTERLACE,
        FIELD_INTERLACE,
    }
    enum VC1Level {
        LOW,
        MEDIUM,
        HIGH,
        L0,
        L1,
        L2,
        L3,
        L4,
        UNKNOWN,
    }
    enum VC1MvMode {
        "1MV_HPEL_BILINEAR",
        "1MV",
        "1MV_HPEL",
        MIXED_MV,
        INTENSITY_COMP,
    }
    enum VC1ParserResult {
        OK,
        BROKEN_DATA,
        NO_BDU,
        NO_BDU_END,
        ERROR,
    }
    enum VC1PictureType {
        P,
        B,
        I,
        BI,
        SKIPPED,
    }
    enum VC1Profile {
        SIMPLE,
        MAIN,
        RESERVED,
        ADVANCED,
    }
    enum VC1QuantizerSpec {
        IMPLICITLY,
        EXPLICITLY,
        NON_UNIFORM,
        UNIFORM,
    }
    enum VC1StartCode {
        END_OF_SEQ,
        SLICE,
        FIELD,
        FRAME,
        ENTRYPOINT,
        SEQUENCE,
        SLICE_USER,
        FIELD_USER,
        FRAME_USER,
        ENTRY_POINT_USER,
        SEQUENCE_USER,
    }
    class VP9Profile {
        static $gtype: GObject.GType<VP9Profile>;
        static "0": number;
        static "1": number;
        static "2": number;
        static "3": number;
        static UNDEFINED: number;
    }
    enum Vp8FrameType {
        KEY_FRAME,
        INTER_FRAME,
    }
    enum Vp8ParserResult {
        OK,
        BROKEN_DATA,
        ERROR,
    }
    enum Vp8RefFrameType {
        INTRA,
        LAST,
        GOLDEN,
        ALTREF,
        MAX,
    }
    class Vp9BitDepth {
        static $gtype: GObject.GType<Vp9BitDepth>;
        static "8": number;
        static "10": number;
        static "12": number;
    }
    enum Vp9ColorRange {
        LIMITED,
        FULL,
    }
    enum Vp9ColorSpace {
        UNKNOWN,
        BT_601,
        BT_709,
        SMPTE_170,
        SMPTE_240,
        BT_2020,
        RESERVED_2,
        SRGB,
    }
    enum Vp9FrameType {
        KEY_FRAME,
        INTER_FRAME,
    }
    enum Vp9InterpolationFilter {
        EIGHTTAP,
        EIGHTTAP_SMOOTH,
        EIGHTTAP_SHARP,
        BILINEAR,
        SWITCHABLE,
    }
    enum Vp9ParserResult {
        OK,
        BROKEN_DATA,
        ERROR,
    }
    enum Vp9RefFrameType {
        INTRA,
        LAST,
        GOLDEN,
        ALTREF,
        MAX,
    }
    const AV1_CDEF_MAX: number;
    const AV1_DIV_LUT_BITS: number;
    const AV1_DIV_LUT_NUM: number;
    const AV1_DIV_LUT_PREC_BITS: number;
    const AV1_GM_ABS_ALPHA_BITS: number;
    const AV1_GM_ABS_TRANS_BITS: number;
    const AV1_GM_ABS_TRANS_ONLY_BITS: number;
    const AV1_GM_ALPHA_PREC_BITS: number;
    const AV1_GM_TRANS_ONLY_PREC_BITS: number;
    const AV1_GM_TRANS_PREC_BITS: number;
    const AV1_MAX_LOOP_FILTER: number;
    const AV1_MAX_NUM_CB_POINTS: number;
    const AV1_MAX_NUM_CR_POINTS: number;
    const AV1_MAX_NUM_PLANES: number;
    const AV1_MAX_NUM_POS_LUMA: number;
    const AV1_MAX_NUM_SPATIAL_LAYERS: number;
    const AV1_MAX_NUM_TEMPORAL_LAYERS: number;
    const AV1_MAX_NUM_Y_POINTS: number;
    const AV1_MAX_OPERATING_POINTS: number;
    const AV1_MAX_SEGMENTS: number;
    const AV1_MAX_TEMPORAL_GROUP_REFERENCES: number;
    const AV1_MAX_TEMPORAL_GROUP_SIZE: number;
    const AV1_MAX_TILE_AREA: number;
    const AV1_MAX_TILE_COLS: number;
    const AV1_MAX_TILE_COUNT: number;
    const AV1_MAX_TILE_ROWS: number;
    const AV1_MAX_TILE_WIDTH: number;
    const AV1_PRIMARY_REF_NONE: number;
    const AV1_REFS_PER_FRAME: number;
    const AV1_RESTORATION_TILESIZE_MAX: number;
    const AV1_SEG_LVL_ALT_Q: number;
    const AV1_SEG_LVL_MAX: number;
    const AV1_SEG_LVL_REF_FRAME: number;
    const AV1_SELECT_INTEGER_MV: number;
    const AV1_SELECT_SCREEN_CONTENT_TOOLS: number;
    const AV1_SUPERRES_DENOM_BITS: number;
    const AV1_SUPERRES_DENOM_MIN: number;
    const AV1_SUPERRES_NUM: number;
    const AV1_TOTAL_REFS_PER_FRAME: number;
    const AV1_WARPEDMODEL_PREC_BITS: number;
    const AV1_WARP_PARAM_REDUCE_BITS: number;
    const CAPS_FEATURE_META_GST_LCEVC_META: string;
    const H264_MAX_PPS_COUNT: number;
    const H264_MAX_SPS_COUNT: number;
    const H264_MAX_VIEW_COUNT: number;
    const H264_MAX_VIEW_ID: number;
    const H265_MAX_PPS_COUNT: number;
    const H265_MAX_SPS_COUNT: number;
    const H265_MAX_SUB_LAYERS: number;
    const H265_MAX_VPS_COUNT: number;
    const H265_RESERVED_IRAP_NAL_TYPE_MAX: number;
    const H265_RESERVED_IRAP_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_IRAP_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_IRAP_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_IRAP_SUBLAYER_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_IRAP_SUBLAYER_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_VCL_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_VCL_NAL_TYPE_MIN: number;
    const H265_UNSPECIFIED_NON_VCL_NAL_TYPE_MAX: number;
    const H265_UNSPECIFIED_NON_VCL_NAL_TYPE_MIN: number;
    const H266_MAX_APS_COUNT: number;
    const H266_MAX_CPB_CNT: number;
    const H266_MAX_CTUS_IN_PICTURE: number;
    const H266_MAX_DECODING_UNITS_IN_PIC_TIMING: number;
    const H266_MAX_DPB_SIZE: number;
    const H266_MAX_ENTRY_POINTS: number;
    const H266_MAX_HEIGHT: number;
    const H266_MAX_LAYERS: number;
    const H266_MAX_LUMA_PS: number;
    const H266_MAX_POINTS_IN_QP_TABLE: number;
    const H266_MAX_PPS_COUNT: number;
    const H266_MAX_REF_ENTRIES: number;
    const H266_MAX_REF_PIC_LISTS: number;
    const H266_MAX_SAMPLE_ARRAYS: number;
    const H266_MAX_SLICES_PER_AU: number;
    const H266_MAX_SLI_REF_LEVELS: number;
    const H266_MAX_SPS_COUNT: number;
    const H266_MAX_SUBLAYERS: number;
    const H266_MAX_SUB_PROFILES: number;
    const H266_MAX_TILES_PER_AU: number;
    const H266_MAX_TILE_COLUMNS: number;
    const H266_MAX_TOTAL_NUM_OLSS: number;
    const H266_MAX_VPS_COUNT: number;
    const H266_MAX_WIDTH: number;
    const H266_NUM_ALF_FILTERS: number;
    const JPEG2000_COLORSPACE_LIST: string;
    const JPEG2000_SAMPLING_LIST: string;
    const JPEG_MAX_FRAME_COMPONENTS: number;
    const JPEG_MAX_QUANT_ELEMENTS: number;
    const JPEG_MAX_SCAN_COMPONENTS: number;
    const VC1_BFRACTION_BASIS: number;
    const VC1_BFRACTION_PTYPE_BI: number;
    const VC1_BFRACTION_RESERVED: number;
    const VC1_MAX_HRD_NUM_LEAKY_BUCKETS: number;
    const VP8_MAX_REF_FRAMES: number;
    const VP9_FRAME_CONTEXTS_LOG2: number;
    const VP9_FRAME_MARKER: number;
    const VP9_MAX_FRAMES_IN_SUPERFRAME: number;
    const VP9_MAX_LOOP_FILTER: number;
    const VP9_MAX_MODE_LF_DELTAS: number;
    const VP9_MAX_PROB: number;
    const VP9_MAX_REF_LF_DELTAS: number;
    const VP9_MAX_SEGMENTS: number;
    const VP9_MAX_SHARPNESS: number;
    const VP9_PREDICTION_PROBS: number;
    const VP9_REFS_PER_FRAME: number;
    const VP9_REF_FRAMES: number;
    const VP9_REF_FRAMES_LOG2: number;
    const VP9_SEGMENT_ABSDATA: number;
    const VP9_SEGMENT_DELTADATA: number;
    const VP9_SEG_TREE_PROBS: number;
    const VP9_SUPERFRAME_MARKER: number;
    const VP9_SYNC_CODE: number;
    function av1_bit_writer_frame_header_obu(frame_hdr: AV1FrameHeaderOBU, seq_hdr: AV1SequenceHeaderOBU, temporal_id: number, spatial_id: number, size_field: boolean, size: number): [AV1BitWriterResult, number, number];
    function av1_bit_writer_frame_header_obu_with_offsets(frame_hdr: AV1FrameHeaderOBU, seq_hdr: AV1SequenceHeaderOBU, temporal_id: number, spatial_id: number, size_field: boolean, size_field_size: number, size: number): [AV1BitWriterResult, number, number, number, number, number, number, number];
    function av1_bit_writer_metadata_obu(metadata: AV1MetadataOBU, temporal_id: number, spatial_id: number, size_field: boolean, size: number): [AV1BitWriterResult, number, number];
    function av1_bit_writer_sequence_header_obu(seq_hdr: AV1SequenceHeaderOBU, size_field: boolean, size: number): [AV1BitWriterResult, number, number];
    function av1_bit_writer_temporal_delimiter_obu(size_field: boolean, size: number): [AV1BitWriterResult, number, number];
    function buffer_add_lcevc_meta(buffer: Gst.Buffer, enhancement_data: Gst.Buffer): LcevcMeta;
    function buffer_add_mpeg_video_meta(buffer: Gst.Buffer, seq_hdr: MpegVideoSequenceHdr, seq_ext: MpegVideoSequenceExt, disp_ext: MpegVideoSequenceDisplayExt, pic_hdr: MpegVideoPictureHdr, pic_ext: MpegVideoPictureExt, quant_ext: MpegVideoQuantMatrixExt): MpegVideoMeta;
    function buffer_get_lcevc_meta(buffer: Gst.Buffer): LcevcMeta | null;
    function buffer_get_lcevc_meta_id(buffer: Gst.Buffer, id: number): LcevcMeta | null;
    function h263_parse(packet: Mpeg4Packet, data: number, offset: number, size: bigint | number): Mpeg4ParseResult;
    function h264_bit_writer_aud(primary_pic_type: number, start_code: boolean, size: number): [H264BitWriterResult, number, number];
    function h264_bit_writer_convert_to_nal(nal_prefix_size: number, packetized: boolean, has_startcode: boolean, add_trailings: boolean, raw_data: number, raw_size: bigint | number, nal_size: number): [H264BitWriterResult, number, number];
    function h264_bit_writer_filler(start_code: boolean, num: number, data: number, size: number): [H264BitWriterResult, number, number];
    function h264_bit_writer_pps(pps: H264PPS, start_code: boolean, size: number): [H264BitWriterResult, number, number];
    function h264_bit_writer_sei(sei_messages: H264SEIMessage[], start_code: boolean, size: number): [H264BitWriterResult, number, number];
    function h264_bit_writer_slice_hdr(slice: H264SliceHdr, start_code: boolean, nal_type: H264NalUnitType, is_ref: boolean, size: number): [H264BitWriterResult, number, number, number];
    function h264_bit_writer_sps(sps: H264SPS, start_code: boolean, size: number): [H264BitWriterResult, number, number];
    function h264_create_sei_memory(start_code_prefix_length: number, messages: H264SEIMessage[]): Gst.Memory;
    function h264_create_sei_memory_avc(nal_length_size: number, messages: H264SEIMessage[]): Gst.Memory;
    function h264_parse_pps(nalparser: H264NalParser, nalu: H264NalUnit, pps: H264PPS): H264ParserResult;
    function h264_parse_sps(nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    function h264_parse_subset_sps(nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    function h264_parser_identify_and_split_nalu_avc(nalparser: H264NalParser, data: number, offset: number, size: bigint | number, nal_length_size: number, nalus: H264NalUnit[]): [H264ParserResult, number];
    function h264_parser_identify_nalu(nalparser: H264NalParser, data: number, offset: number, size: bigint | number, nalu: H264NalUnit): H264ParserResult;
    function h264_parser_identify_nalu_avc(nalparser: H264NalParser, data: number, offset: number, size: bigint | number, nal_length_size: number, nalu: H264NalUnit): H264ParserResult;
    function h264_parser_identify_nalu_unchecked(nalparser: H264NalParser, data: number, offset: number, size: bigint | number, nalu: H264NalUnit): H264ParserResult;
    function h264_parser_insert_sei(nalparser: H264NalParser, au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
    function h264_parser_insert_sei_avc(nalparser: H264NalParser, nal_length_size: number, au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
    function h264_parser_parse_decoder_config_record(nalparser: H264NalParser, data: number, size: bigint | number): [H264ParserResult, H264DecoderConfigRecord];
    function h264_parser_parse_nal(nalparser: H264NalParser, nalu: H264NalUnit): H264ParserResult;
    function h264_parser_parse_pps(nalparser: H264NalParser, nalu: H264NalUnit, pps: H264PPS): H264ParserResult;
    function h264_parser_parse_sei(nalparser: H264NalParser, nalu: H264NalUnit, messages: H264SEIMessage[]): H264ParserResult;
    function h264_parser_parse_slice_hdr(nalparser: H264NalParser, nalu: H264NalUnit, slice: H264SliceHdr, parse_pred_weight_table: boolean, parse_dec_ref_pic_marking: boolean): H264ParserResult;
    function h264_parser_parse_sps(nalparser: H264NalParser, nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    function h264_parser_parse_subset_sps(nalparser: H264NalParser, nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    function h264_parser_update_pps(nalparser: H264NalParser, pps: H264PPS): H264ParserResult;
    function h264_parser_update_sps(nalparser: H264NalParser, sps: H264SPS): H264ParserResult;
    function h264_profile_from_string(profile: string): H264Profile;
    function h264_quant_matrix_4x4_get_raster_from_zigzag(quant: number): number;
    function h264_quant_matrix_4x4_get_zigzag_from_raster(quant: number): number;
    function h264_quant_matrix_8x8_get_raster_from_zigzag(quant: number): number;
    function h264_quant_matrix_8x8_get_zigzag_from_raster(quant: number): number;
    function h264_sei_clear(sei: H264SEIMessage): void;
    function h264_slice_type_to_string(slice_type: H264SliceType): string | null;
    function h264_video_calculate_framerate(sps: H264SPS, field_pic_flag: number, pic_struct: number): [number, number];
    function h265_create_sei_memory(layer_id: number, temporal_id_plus1: number, start_code_prefix_length: number, messages: H265SEIMessage[]): Gst.Memory;
    function h265_create_sei_memory_hevc(layer_id: number, temporal_id_plus1: number, nal_length_size: number, messages: H265SEIMessage[]): Gst.Memory;
    function h265_get_profile_from_sps(sps: H265SPS): H265Profile;
    function h265_parse_pps(parser: H265Parser, nalu: H265NalUnit, pps: H265PPS): H265ParserResult;
    function h265_parse_sps(parser: H265Parser, nalu: H265NalUnit, sps: H265SPS, parse_vui_params: boolean): H265ParserResult;
    function h265_parse_sps_ext(parser: H265Parser, nalu: H265NalUnit, sps: H265SPS, sps_ext: H265SPSEXT, parse_vui_params: boolean): H265ParserResult;
    function h265_parse_vps(nalu: H265NalUnit, vps: H265VPS): H265ParserResult;
    function h265_profile_from_string(string: string): H265Profile;
    function h265_profile_to_string(profile: H265Profile): string | null;
    function h265_quant_matrix_4x4_get_raster_from_uprightdiagonal(quant: number): number;
    function h265_quant_matrix_4x4_get_raster_from_zigzag(quant: number): number;
    function h265_quant_matrix_4x4_get_uprightdiagonal_from_raster(quant: number): number;
    function h265_quant_matrix_4x4_get_zigzag_from_raster(quant: number): number;
    function h265_quant_matrix_8x8_get_raster_from_uprightdiagonal(quant: number): number;
    function h265_quant_matrix_8x8_get_raster_from_zigzag(quant: number): number;
    function h265_quant_matrix_8x8_get_uprightdiagonal_from_raster(quant: number): number;
    function h265_quant_matrix_8x8_get_zigzag_from_raster(quant: number): number;
    function h265_sei_copy(dest_sei: H265SEIMessage, src_sei: H265SEIMessage): boolean;
    function h265_sei_free(sei: H265SEIMessage): void;
    function h265_slice_type_to_string(slice_type: H265SliceType): string | null;
    function h266_parse_aps(parser: H266Parser, nalu: H266NalUnit, aps: H266APS): H266ParserResult;
    function h266_parse_pps(parser: H266Parser, nalu: H266NalUnit, pps: H266PPS): H266ParserResult;
    function h266_parse_sps(parser: H266Parser, nalu: H266NalUnit, sps: H266SPS): H266ParserResult;
    function h266_parse_vps(nalu: H266NalUnit, vps: H266VPS): H266ParserResult;
    function h266_profile_from_string(string: string): H266Profile;
    function h266_profile_to_string(profile: H266Profile): string | null;
    function jpeg2000_colorspace_from_string(colorspace_string: string): JPEG2000Colorspace;
    function jpeg2000_colorspace_to_string(colorspace: JPEG2000Colorspace): string;
    function jpeg2000_sampling_from_string(sampling_string: string): JPEG2000Sampling;
    function jpeg2000_sampling_is_mono(sampling: JPEG2000Sampling): boolean;
    function jpeg2000_sampling_is_rgb(sampling: JPEG2000Sampling): boolean;
    function jpeg2000_sampling_is_yuv(sampling: JPEG2000Sampling): boolean;
    function jpeg2000_sampling_to_string(sampling: JPEG2000Sampling): string;
    function jpeg_bit_writer_frame_header(frame_hdr: JpegFrameHdr, marker: JpegMarker, size: number): [JpegBitWriterResult, number, number];
    function jpeg_bit_writer_huffman_table(huff_tables: JpegHuffmanTables, size: number): [JpegBitWriterResult, number, number];
    function jpeg_bit_writer_quantization_table(quant_tables: JpegQuantTables, size: number): [JpegBitWriterResult, number, number];
    function jpeg_bit_writer_restart_interval(interval: number, size: number): [JpegBitWriterResult, number, number];
    function jpeg_bit_writer_scan_header(scan_hdr: JpegScanHdr, size: number): [JpegBitWriterResult, number, number];
    function jpeg_bit_writer_segment_with_data(marker: JpegMarker, seg_data: number | null, seg_size: number, size: number): [JpegBitWriterResult, number, number];
    function jpeg_get_default_huffman_tables(): JpegHuffmanTables;
    function jpeg_get_default_quantization_tables(quant_tables: JpegQuantTables): void;
    function jpeg_parse(data: number, size: bigint | number, offset: number): [boolean, JpegSegment];
    function lcevc_meta_api_get_type(): GObject.GType;
    function lcevc_meta_get_info(): Gst.MetaInfo;
    function mpeg4_parse(packet: Mpeg4Packet, skip_user_data: boolean, vop: Mpeg4VideoObjectPlane, data: number, offset: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_group_of_vop(gov: Mpeg4GroupOfVOP, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_video_object_layer(vol: Mpeg4VideoObjectLayer, vo: Mpeg4VisualObject, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_video_object_plane(vop: Mpeg4VideoObjectPlane, sprite_trajectory: Mpeg4SpriteTrajectory, vol: Mpeg4VideoObjectLayer, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_video_packet_header(videopackethdr: Mpeg4VideoPacketHdr, vol: Mpeg4VideoObjectLayer, vop: Mpeg4VideoObjectPlane, sprite_trajectory: Mpeg4SpriteTrajectory, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_video_plane_short_header(shorthdr: Mpeg4VideoPlaneShortHdr, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_visual_object(vo: Mpeg4VisualObject, signal_type: Mpeg4VideoSignalType, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg4_parse_visual_object_sequence(vos: Mpeg4VisualObjectSequence, data: number, size: bigint | number): Mpeg4ParseResult;
    function mpeg_video_finalise_mpeg2_sequence_header(hdr: MpegVideoSequenceHdr, seqext: MpegVideoSequenceExt, displayext: MpegVideoSequenceDisplayExt): boolean;
    function mpeg_video_meta_api_get_type(): GObject.GType;
    function mpeg_video_meta_get_info(): Gst.MetaInfo;
    function mpeg_video_parse(packet: MpegVideoPacket, data: number, size: bigint | number, offset: number): boolean;
    function mpeg_video_quant_matrix_get_raster_from_zigzag(quant: number): number;
    function mpeg_video_quant_matrix_get_zigzag_from_raster(quant: number): number;
    function vc1_bitplanes_ensure_size(bitplanes: VC1BitPlanes, seqhdr: VC1SeqHdr): boolean;
    function vc1_bitplanes_free(bitplanes: VC1BitPlanes): void;
    function vc1_bitplanes_free_1(bitplanes: VC1BitPlanes): void;
    function vc1_identify_next_bdu(data: number, size: bigint | number): [VC1ParserResult, VC1BDU];
    function vc1_parse_entry_point_header(data: number, size: bigint | number, seqhdr: VC1SeqHdr): [VC1ParserResult, VC1EntryPointHdr];
    function vc1_parse_field_header(data: number, size: bigint | number, fieldhdr: VC1FrameHdr, seqhdr: VC1SeqHdr, bitplanes: VC1BitPlanes): VC1ParserResult;
    function vc1_parse_frame_header(data: number, size: bigint | number, framehdr: VC1FrameHdr, seqhdr: VC1SeqHdr, bitplanes: VC1BitPlanes): VC1ParserResult;
    function vc1_parse_frame_layer(data: number, size: bigint | number, framelayer: VC1FrameLayer): VC1ParserResult;
    function vc1_parse_sequence_header(data: number, size: bigint | number, seqhdr: VC1SeqHdr): VC1ParserResult;
    function vc1_parse_sequence_header_struct_a(data: number, size: bigint | number, structa: VC1SeqStructA): VC1ParserResult;
    function vc1_parse_sequence_header_struct_b(data: number, size: bigint | number, structb: VC1SeqStructB): VC1ParserResult;
    function vc1_parse_sequence_header_struct_c(data: number, size: bigint | number, structc: VC1SeqStructC): VC1ParserResult;
    function vc1_parse_sequence_layer(data: number, size: bigint | number, seqlayer: VC1SeqLayer): VC1ParserResult;
    function vc1_parse_slice_header(data: number, size: bigint | number, slicehdr: VC1SliceHdr, seqhdr: VC1SeqHdr): VC1ParserResult;
    class AV1CDEFParams {
        static $gtype: GObject.GType<AV1CDEFParams>;
        cdef_damping: number;
        cdef_bits: number;
        cdef_y_pri_strength: Uint8Array;
        cdef_y_sec_strength: Uint8Array;
        cdef_uv_pri_strength: Uint8Array;
        cdef_uv_sec_strength: Uint8Array;
        constructor(properties?: Partial<{
            cdef_damping: number;
            cdef_bits: number;
            cdef_y_pri_strength: Uint8Array;
            cdef_y_sec_strength: Uint8Array;
            cdef_uv_pri_strength: Uint8Array;
            cdef_uv_sec_strength: Uint8Array;
        }>);
    }
    class AV1ColorConfig {
        static $gtype: GObject.GType<AV1ColorConfig>;
        high_bitdepth: boolean;
        twelve_bit: boolean;
        mono_chrome: boolean;
        color_description_present_flag: boolean;
        color_primaries: AV1ColorPrimaries;
        transfer_characteristics: AV1TransferCharacteristics;
        matrix_coefficients: AV1MatrixCoefficients;
        color_range: boolean;
        subsampling_x: number;
        subsampling_y: number;
        chroma_sample_position: AV1ChromaSamplePositions;
        separate_uv_delta_q: boolean;
    }
    class AV1DecoderModelInfo {
        static $gtype: GObject.GType<AV1DecoderModelInfo>;
        buffer_delay_length_minus_1: number;
        num_units_in_decoding_tick: number;
        buffer_removal_time_length_minus_1: number;
        frame_presentation_time_length_minus_1: number;
        constructor(properties?: Partial<{
            buffer_delay_length_minus_1: number;
            num_units_in_decoding_tick: number;
            buffer_removal_time_length_minus_1: number;
            frame_presentation_time_length_minus_1: number;
        }>);
    }
    class AV1FilmGrainParams {
        static $gtype: GObject.GType<AV1FilmGrainParams>;
        apply_grain: boolean;
        grain_seed: number;
        update_grain: boolean;
        film_grain_params_ref_idx: number;
        num_y_points: number;
        point_y_value: Uint8Array;
        point_y_scaling: Uint8Array;
        chroma_scaling_from_luma: number;
        num_cb_points: number;
        point_cb_value: Uint8Array;
        point_cb_scaling: Uint8Array;
        num_cr_points: number;
        point_cr_value: Uint8Array;
        point_cr_scaling: Uint8Array;
        grain_scaling_minus_8: number;
        ar_coeff_lag: number;
        ar_coeffs_y_plus_128: Uint8Array;
        ar_coeffs_cb_plus_128: Uint8Array;
        ar_coeffs_cr_plus_128: Uint8Array;
        ar_coeff_shift_minus_6: number;
        grain_scale_shift: number;
        cb_mult: number;
        cb_luma_mult: number;
        cb_offset: number;
        cr_mult: number;
        cr_luma_mult: number;
        cr_offset: number;
        overlap_flag: boolean;
        clip_to_restricted_range: boolean;
        constructor(properties?: Partial<{
            apply_grain: boolean;
            grain_seed: number;
            update_grain: boolean;
            film_grain_params_ref_idx: number;
            num_y_points: number;
            point_y_value: Uint8Array;
            point_y_scaling: Uint8Array;
            chroma_scaling_from_luma: number;
            num_cb_points: number;
            point_cb_value: Uint8Array;
            point_cb_scaling: Uint8Array;
            num_cr_points: number;
            point_cr_value: Uint8Array;
            point_cr_scaling: Uint8Array;
            grain_scaling_minus_8: number;
            ar_coeff_lag: number;
            ar_coeffs_y_plus_128: Uint8Array;
            ar_coeffs_cb_plus_128: Uint8Array;
            ar_coeffs_cr_plus_128: Uint8Array;
            ar_coeff_shift_minus_6: number;
            grain_scale_shift: number;
            cb_mult: number;
            cb_luma_mult: number;
            cb_offset: number;
            cr_mult: number;
            cr_luma_mult: number;
            cr_offset: number;
            overlap_flag: boolean;
            clip_to_restricted_range: boolean;
        }>);
    }
    class AV1FrameHeaderOBU {
        static $gtype: GObject.GType<AV1FrameHeaderOBU>;
        show_existing_frame: boolean;
        frame_to_show_map_idx: number;
        frame_presentation_time: number;
        tu_presentation_delay: number;
        display_frame_id: number;
        frame_type: AV1FrameType;
        show_frame: boolean;
        showable_frame: boolean;
        error_resilient_mode: boolean;
        disable_cdf_update: boolean;
        allow_screen_content_tools: number;
        force_integer_mv: boolean;
        current_frame_id: number;
        frame_size_override_flag: boolean;
        order_hint: number;
        primary_ref_frame: number;
        buffer_removal_time_present_flag: boolean;
        buffer_removal_time: number[];
        refresh_frame_flags: number;
        ref_order_hint: number[];
        allow_intrabc: boolean;
        frame_refs_short_signaling: boolean;
        last_frame_idx: number;
        gold_frame_idx: number;
        ref_frame_idx: Uint8Array;
        allow_high_precision_mv: boolean;
        is_motion_mode_switchable: boolean;
        use_ref_frame_mvs: boolean;
        disable_frame_end_update_cdf: boolean;
        allow_warped_motion: boolean;
        reduced_tx_set: boolean;
        render_and_frame_size_different: boolean;
        use_superres: boolean;
        is_filter_switchable: boolean;
        interpolation_filter: AV1InterpolationFilter;
        loop_filter_params: AV1LoopFilterParams;
        quantization_params: AV1QuantizationParams;
        segmentation_params: AV1SegmentationParams;
        tile_info: AV1TileInfo;
        cdef_params: AV1CDEFParams;
        tx_mode_select: boolean;
        skip_mode_present: boolean;
        reference_select: boolean;
        film_grain_params: AV1FilmGrainParams;
        superres_denom: number;
        frame_is_intra: number;
        order_hints: number[];
        ref_frame_sign_bias: number[];
        coded_lossless: number;
        all_lossless: number;
        lossless_array: Uint8Array;
        seg_qm_Level: Uint8Array;
        upscaled_width: number;
        frame_width: number;
        frame_height: number;
        render_width: number;
        render_height: number;
        tx_mode: AV1TXModes;
        skip_mode_frame: Uint8Array;
        expected_frame_id: number[];
    }
    class AV1FrameOBU {
        static $gtype: GObject.GType<AV1FrameOBU>;
        tile_group: AV1TileGroupOBU;
    }
    class AV1GlobalMotionParams {
        static $gtype: GObject.GType<AV1GlobalMotionParams>;
        is_global: boolean[];
        is_rot_zoom: boolean[];
        is_translation: boolean[];
        gm_params: number[];
        gm_type: AV1WarpModelType[];
        invalid: boolean[];
    }
    class AV1LoopFilterParams {
        static $gtype: GObject.GType<AV1LoopFilterParams>;
        loop_filter_level: Uint8Array;
        loop_filter_sharpness: number;
        loop_filter_delta_enabled: boolean;
        loop_filter_delta_update: boolean;
        loop_filter_ref_deltas: Uint8Array;
        loop_filter_mode_deltas: Uint8Array;
        delta_lf_present: boolean;
        delta_lf_res: number;
        delta_lf_multi: number;
        constructor(properties?: Partial<{
            loop_filter_level: Uint8Array;
            loop_filter_sharpness: number;
            loop_filter_delta_enabled: boolean;
            loop_filter_delta_update: boolean;
            loop_filter_ref_deltas: Uint8Array;
            loop_filter_mode_deltas: Uint8Array;
            delta_lf_present: boolean;
            delta_lf_res: number;
            delta_lf_multi: number;
        }>);
    }
    class AV1LoopRestorationParams {
        static $gtype: GObject.GType<AV1LoopRestorationParams>;
        lr_unit_shift: number;
        lr_uv_shift: boolean;
        frame_restoration_type: AV1FrameRestorationType[];
        loop_restoration_size: number[];
        uses_lr: number;
    }
    class AV1MetadataHdrCll {
        static $gtype: GObject.GType<AV1MetadataHdrCll>;
        max_cll: number;
        max_fall: number;
        constructor(properties?: Partial<{
            max_cll: number;
            max_fall: number;
        }>);
    }
    class AV1MetadataHdrMdcv {
        static $gtype: GObject.GType<AV1MetadataHdrMdcv>;
        primary_chromaticity_x: number[];
        primary_chromaticity_y: number[];
        white_point_chromaticity_x: number;
        white_point_chromaticity_y: number;
        luminance_max: number;
        luminance_min: number;
        constructor(properties?: Partial<{
            primary_chromaticity_x: number[];
            primary_chromaticity_y: number[];
            white_point_chromaticity_x: number;
            white_point_chromaticity_y: number;
            luminance_max: number;
            luminance_min: number;
        }>);
    }
    class AV1MetadataITUT_T35 {
        static $gtype: GObject.GType<AV1MetadataITUT_T35>;
        itu_t_t35_country_code: number;
        itu_t_t35_country_code_extention_byte: number;
        itu_t_t35_payload_bytes: number;
        constructor(properties?: Partial<{
            itu_t_t35_country_code: number;
            itu_t_t35_country_code_extention_byte: number;
            itu_t_t35_payload_bytes: number;
        }>);
    }
    class AV1MetadataOBU {
        static $gtype: GObject.GType<AV1MetadataOBU>;
        metadata_type: AV1MetadataType;
    }
    class AV1MetadataScalability {
        static $gtype: GObject.GType<AV1MetadataScalability>;
        scalability_mode_idc: AV1ScalabilityModes;
        spatial_layers_cnt_minus_1: number;
        spatial_layer_dimensions_present_flag: boolean;
        spatial_layer_description_present_flag: boolean;
        temporal_group_description_present_flag: boolean;
        spatial_layer_max_width: number[];
        spatial_layer_max_height: number[];
        spatial_layer_ref_id: Uint8Array;
        temporal_group_size: number;
        temporal_group_temporal_id: Uint8Array;
        temporal_group_temporal_switching_up_point_flag: Uint8Array;
        temporal_group_spatial_switching_up_point_flag: Uint8Array;
        temporal_group_ref_cnt: Uint8Array;
        temporal_group_ref_pic_diff: Uint8Array;
    }
    class AV1MetadataTimecode {
        static $gtype: GObject.GType<AV1MetadataTimecode>;
        counting_type: number;
        full_timestamp_flag: boolean;
        discontinuity_flag: boolean;
        cnt_dropped_flag: boolean;
        n_frames: number;
        seconds_flag: boolean;
        seconds_value: number;
        minutes_flag: boolean;
        minutes_value: number;
        hours_flag: boolean;
        hours_value: number;
        time_offset_length: number;
        time_offset_value: number;
        constructor(properties?: Partial<{
            counting_type: number;
            full_timestamp_flag: boolean;
            discontinuity_flag: boolean;
            cnt_dropped_flag: boolean;
            n_frames: number;
            seconds_flag: boolean;
            seconds_value: number;
            minutes_flag: boolean;
            minutes_value: number;
            hours_flag: boolean;
            hours_value: number;
            time_offset_length: number;
            time_offset_value: number;
        }>);
    }
    class AV1OBU {
        static $gtype: GObject.GType<AV1OBU>;
        obu_type: AV1OBUType;
        data: number;
        obu_size: number;
    }
    class AV1OBUHeader {
        static $gtype: GObject.GType<AV1OBUHeader>;
        obu_type: AV1OBUType;
        obu_extention_flag: boolean;
        obu_has_size_field: boolean;
        obu_temporal_id: number;
        obu_spatial_id: number;
    }
    class AV1OperatingPoint {
        static $gtype: GObject.GType<AV1OperatingPoint>;
        seq_level_idx: number;
        seq_tier: number;
        idc: number;
        decoder_model_present_for_this_op: boolean;
        decoder_buffer_delay: number;
        encoder_buffer_delay: number;
        low_delay_mode_flag: boolean;
        initial_display_delay_present_for_this_op: boolean;
        initial_display_delay_minus_1: number;
        constructor(properties?: Partial<{
            seq_level_idx: number;
            seq_tier: number;
            idc: number;
            decoder_model_present_for_this_op: boolean;
            decoder_buffer_delay: number;
            encoder_buffer_delay: number;
            low_delay_mode_flag: boolean;
            initial_display_delay_present_for_this_op: boolean;
            initial_display_delay_minus_1: number;
        }>);
    }
    class AV1Parser {
        static $gtype: GObject.GType<AV1Parser>;
        free(): void;
        identify_one_obu(data: number, size: number, obu: AV1OBU): [AV1ParserResult, number];
        parse_frame_header_obu(obu: AV1OBU, frame_header: AV1FrameHeaderOBU): AV1ParserResult;
        parse_frame_obu(obu: AV1OBU, frame: AV1FrameOBU): AV1ParserResult;
        parse_metadata_obu(obu: AV1OBU, metadata: AV1MetadataOBU): AV1ParserResult;
        parse_sequence_header_obu(obu: AV1OBU, seq_header: AV1SequenceHeaderOBU): AV1ParserResult;
        parse_temporal_delimiter_obu(obu: AV1OBU): AV1ParserResult;
        parse_tile_group_obu(obu: AV1OBU, tile_group: AV1TileGroupOBU): AV1ParserResult;
        parse_tile_list_obu(obu: AV1OBU, tile_list: AV1TileListOBU): AV1ParserResult;
        reference_frame_update(frame_header: AV1FrameHeaderOBU): AV1ParserResult;
        reset(annex_b: boolean): void;
        reset_annex_b(): void;
        set_operating_point(operating_point: number): AV1ParserResult;
    }
    class AV1ParserState {
        static $gtype: GObject.GType<AV1ParserState>;
        operating_point: number;
        seen_frame_header: number;
        operating_point_idc: number;
        sequence_changed: boolean;
        begin_first_frame: boolean;
        upscaled_width: number;
        frame_width: number;
        frame_height: number;
        mi_cols: number;
        mi_rows: number;
        render_width: number;
        render_height: number;
        prev_frame_id: number;
        current_frame_id: number;
        mi_col_starts: number[];
        mi_row_starts: number[];
        tile_cols_log2: number;
        tile_cols: number;
        tile_rows_log2: number;
        tile_rows: number;
        tile_size_bytes: number;
    }
    class AV1QuantizationParams {
        static $gtype: GObject.GType<AV1QuantizationParams>;
        base_q_idx: number;
        diff_uv_delta: boolean;
        using_qmatrix: boolean;
        qm_y: number;
        qm_u: number;
        qm_v: number;
        delta_q_present: boolean;
        delta_q_res: number;
        delta_q_y_dc: number;
        delta_q_u_dc: number;
        delta_q_u_ac: number;
        delta_q_v_dc: number;
        delta_q_v_ac: number;
        constructor(properties?: Partial<{
            base_q_idx: number;
            diff_uv_delta: boolean;
            using_qmatrix: boolean;
            qm_y: number;
            qm_u: number;
            qm_v: number;
            delta_q_present: boolean;
            delta_q_res: number;
            delta_q_y_dc: number;
            delta_q_u_dc: number;
            delta_q_u_ac: number;
            delta_q_v_dc: number;
            delta_q_v_ac: number;
        }>);
    }
    class AV1ReferenceFrameInfo {
        static $gtype: GObject.GType<AV1ReferenceFrameInfo>;
        entry: AV1ReferenceFrameInfoEntry[];
    }
    class AV1ReferenceFrameInfoEntry {
        static $gtype: GObject.GType<AV1ReferenceFrameInfoEntry>;
        ref_valid: boolean;
        ref_frame_id: number;
        ref_upscaled_width: number;
        ref_frame_width: number;
        ref_frame_height: number;
        ref_render_width: number;
        ref_render_height: number;
        ref_mi_cols: number;
        ref_mi_rows: number;
        ref_frame_type: AV1FrameType;
        ref_subsampling_x: number;
        ref_subsampling_y: number;
        ref_bit_depth: number;
        ref_order_hint: number;
        ref_segmentation_params: AV1SegmentationParams;
        ref_lf_params: AV1LoopFilterParams;
        ref_film_grain_params: AV1FilmGrainParams;
        ref_tile_info: AV1TileInfo;
    }
    class AV1SegmentationParams {
        static $gtype: GObject.GType<AV1SegmentationParams>;
        segmentation_enabled: boolean;
        segmentation_update_map: number;
        segmentation_temporal_update: number;
        segmentation_update_data: number;
        feature_enabled: Uint8Array;
        feature_data: number[];
        seg_id_pre_skip: number;
        last_active_seg_id: number;
        constructor(properties?: Partial<{
            segmentation_enabled: boolean;
            segmentation_update_map: number;
            segmentation_temporal_update: number;
            segmentation_update_data: number;
            feature_enabled: Uint8Array;
            feature_data: number[];
            seg_id_pre_skip: number;
            last_active_seg_id: number;
        }>);
    }
    class AV1SequenceHeaderOBU {
        static $gtype: GObject.GType<AV1SequenceHeaderOBU>;
        seq_profile: AV1Profile;
        still_picture: boolean;
        reduced_still_picture_header: number;
        frame_width_bits_minus_1: number;
        frame_height_bits_minus_1: number;
        max_frame_width_minus_1: number;
        max_frame_height_minus_1: number;
        frame_id_numbers_present_flag: boolean;
        delta_frame_id_length_minus_2: number;
        additional_frame_id_length_minus_1: number;
        use_128x128_superblock: boolean;
        enable_filter_intra: boolean;
        enable_intra_edge_filter: boolean;
        enable_interintra_compound: boolean;
        enable_masked_compound: boolean;
        enable_warped_motion: boolean;
        enable_order_hint: boolean;
        enable_dual_filter: boolean;
        enable_jnt_comp: boolean;
        enable_ref_frame_mvs: boolean;
        seq_choose_screen_content_tools: boolean;
        seq_force_screen_content_tools: number;
        seq_choose_integer_mv: boolean;
        seq_force_integer_mv: number;
        order_hint_bits_minus_1: number;
        enable_superres: boolean;
        enable_cdef: boolean;
        enable_restoration: boolean;
        film_grain_params_present: number;
        operating_points_cnt_minus_1: number;
        operating_points: AV1OperatingPoint[];
        decoder_model_info_present_flag: boolean;
        decoder_model_info: AV1DecoderModelInfo;
        initial_display_delay_present_flag: number;
        timing_info_present_flag: boolean;
        timing_info: AV1TimingInfo;
        order_hint_bits: number;
        bit_depth: number;
        num_planes: number;
    }
    class AV1TileGroupOBU {
        static $gtype: GObject.GType<AV1TileGroupOBU>;
        tile_start_and_end_present_flag: boolean;
        tg_start: number;
        tg_end: number;
        entry: AV1TileGroupOBUEntry[];
        num_tiles: number;
        constructor(properties?: Partial<{
            tile_start_and_end_present_flag: boolean;
            tg_start: number;
            tg_end: number;
            entry: AV1TileGroupOBUEntry[];
            num_tiles: number;
        }>);
    }
    class AV1TileGroupOBUEntry {
        static $gtype: GObject.GType<AV1TileGroupOBUEntry>;
        tile_offset: number;
        tile_size: number;
        tile_row: number;
        tile_col: number;
        mi_row_start: number;
        mi_row_end: number;
        mi_col_start: number;
        mi_col_end: number;
        constructor(properties?: Partial<{
            tile_offset: number;
            tile_size: number;
            tile_row: number;
            tile_col: number;
            mi_row_start: number;
            mi_row_end: number;
            mi_col_start: number;
            mi_col_end: number;
        }>);
    }
    class AV1TileInfo {
        static $gtype: GObject.GType<AV1TileInfo>;
        uniform_tile_spacing_flag: number;
        increment_tile_rows_log2: number;
        width_in_sbs_minus_1: number[];
        height_in_sbs_minus_1: number[];
        tile_size_bytes_minus_1: number;
        context_update_tile_id: number;
        mi_col_starts: number[];
        mi_row_starts: number[];
        tile_cols_log2: number;
        tile_cols: number;
        tile_rows_log2: number;
        tile_rows: number;
        tile_size_bytes: number;
        constructor(properties?: Partial<{
            uniform_tile_spacing_flag: number;
            increment_tile_rows_log2: number;
            width_in_sbs_minus_1: number[];
            height_in_sbs_minus_1: number[];
            tile_size_bytes_minus_1: number;
            context_update_tile_id: number;
            mi_col_starts: number[];
            mi_row_starts: number[];
            tile_cols_log2: number;
            tile_cols: number;
            tile_rows_log2: number;
            tile_rows: number;
            tile_size_bytes: number;
        }>);
    }
    class AV1TileListOBU {
        static $gtype: GObject.GType<AV1TileListOBU>;
        output_frame_width_in_tiles_minus_1: number;
        output_frame_height_in_tiles_minus_1: number;
        tile_count_minus_1: number;
        entry: AV1TileListOBUEntry[];
        constructor(properties?: Partial<{
            output_frame_width_in_tiles_minus_1: number;
            output_frame_height_in_tiles_minus_1: number;
            tile_count_minus_1: number;
            entry: AV1TileListOBUEntry[];
        }>);
    }
    class AV1TileListOBUEntry {
        static $gtype: GObject.GType<AV1TileListOBUEntry>;
        anchor_frame_idx: number;
        anchor_tile_row: number;
        anchor_tile_col: number;
        tile_data_size_minus_1: number;
        coded_tile_data: number;
        constructor(properties?: Partial<{
            anchor_frame_idx: number;
            anchor_tile_row: number;
            anchor_tile_col: number;
            tile_data_size_minus_1: number;
            coded_tile_data: number;
        }>);
    }
    class AV1TimingInfo {
        static $gtype: GObject.GType<AV1TimingInfo>;
        num_units_in_display_tick: number;
        time_scale: number;
        equal_picture_interval: boolean;
        num_ticks_per_picture_minus_1: number;
        constructor(properties?: Partial<{
            num_units_in_display_tick: number;
            time_scale: number;
            equal_picture_interval: boolean;
            num_ticks_per_picture_minus_1: number;
        }>);
    }
    class H264BufferingPeriod {
        static $gtype: GObject.GType<H264BufferingPeriod>;
        sps: H264SPS;
        nal_initial_cpb_removal_delay: number[];
        nal_initial_cpb_removal_delay_offset: number[];
        vcl_initial_cpb_removal_delay: number[];
        vcl_initial_cpb_removal_delay_offset: number[];
        constructor(properties?: Partial<{
            nal_initial_cpb_removal_delay: number[];
            nal_initial_cpb_removal_delay_offset: number[];
            vcl_initial_cpb_removal_delay: number[];
            vcl_initial_cpb_removal_delay_offset: number[];
        }>);
    }
    class H264ClockTimestamp {
        static $gtype: GObject.GType<H264ClockTimestamp>;
        ct_type: number;
        nuit_field_based_flag: number;
        counting_type: number;
        full_timestamp_flag: number;
        discontinuity_flag: number;
        cnt_dropped_flag: number;
        n_frames: number;
        seconds_flag: number;
        seconds_value: number;
        minutes_flag: number;
        minutes_value: number;
        hours_flag: number;
        hours_value: number;
        time_offset: number;
        constructor(properties?: Partial<{
            ct_type: number;
            nuit_field_based_flag: number;
            counting_type: number;
            full_timestamp_flag: number;
            discontinuity_flag: number;
            cnt_dropped_flag: number;
            n_frames: number;
            seconds_flag: number;
            seconds_value: number;
            minutes_flag: number;
            minutes_value: number;
            hours_flag: number;
            hours_value: number;
            time_offset: number;
        }>);
    }
    class H264ContentLightLevel {
        static $gtype: GObject.GType<H264ContentLightLevel>;
        max_content_light_level: number;
        max_pic_average_light_level: number;
        constructor(properties?: Partial<{
            max_content_light_level: number;
            max_pic_average_light_level: number;
        }>);
    }
    class H264DecRefPicMarking {
        static $gtype: GObject.GType<H264DecRefPicMarking>;
        no_output_of_prior_pics_flag: number;
        long_term_reference_flag: number;
        adaptive_ref_pic_marking_mode_flag: number;
        ref_pic_marking: H264RefPicMarking[];
        n_ref_pic_marking: number;
        bit_size: number;
        constructor(properties?: Partial<{
            no_output_of_prior_pics_flag: number;
            long_term_reference_flag: number;
            adaptive_ref_pic_marking_mode_flag: number;
            ref_pic_marking: H264RefPicMarking[];
            n_ref_pic_marking: number;
            bit_size: number;
        }>);
    }
    class H264DecoderConfigRecord {
        static $gtype: GObject.GType<H264DecoderConfigRecord>;
        configuration_version: number;
        profile_indication: number;
        profile_compatibility: number;
        level_indication: number;
        length_size_minus_one: number;
        sps: null[];
        pps: null[];
        chroma_format_present: boolean;
        chroma_format: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        sps_ext: null[];
        constructor(properties?: Partial<{
            configuration_version: number;
            profile_indication: number;
            profile_compatibility: number;
            level_indication: number;
            length_size_minus_one: number;
            sps: null[];
            pps: null[];
            chroma_format_present: boolean;
            chroma_format: number;
            bit_depth_luma_minus8: number;
            bit_depth_chroma_minus8: number;
            sps_ext: null[];
        }>);
        free(): void;
    }
    class H264FramePacking {
        static $gtype: GObject.GType<H264FramePacking>;
        frame_packing_id: number;
        frame_packing_cancel_flag: number;
        frame_packing_type: number;
        quincunx_sampling_flag: number;
        content_interpretation_type: number;
        spatial_flipping_flag: number;
        frame0_flipped_flag: number;
        field_views_flag: number;
        current_frame_is_frame0_flag: number;
        frame0_self_contained_flag: number;
        frame1_self_contained_flag: number;
        frame0_grid_position_x: number;
        frame0_grid_position_y: number;
        frame1_grid_position_x: number;
        frame1_grid_position_y: number;
        frame_packing_repetition_period: number;
        constructor(properties?: Partial<{
            frame_packing_id: number;
            frame_packing_cancel_flag: number;
            frame_packing_type: number;
            quincunx_sampling_flag: number;
            content_interpretation_type: number;
            spatial_flipping_flag: number;
            frame0_flipped_flag: number;
            field_views_flag: number;
            current_frame_is_frame0_flag: number;
            frame0_self_contained_flag: number;
            frame1_self_contained_flag: number;
            frame0_grid_position_x: number;
            frame0_grid_position_y: number;
            frame1_grid_position_x: number;
            frame1_grid_position_y: number;
            frame_packing_repetition_period: number;
        }>);
    }
    class H264HRDParams {
        static $gtype: GObject.GType<H264HRDParams>;
        cpb_cnt_minus1: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cbr_flag: Uint8Array;
        initial_cpb_removal_delay_length_minus1: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        time_offset_length: number;
        constructor(properties?: Partial<{
            cpb_cnt_minus1: number;
            bit_rate_scale: number;
            cpb_size_scale: number;
            bit_rate_value_minus1: number[];
            cpb_size_value_minus1: number[];
            cbr_flag: Uint8Array;
            initial_cpb_removal_delay_length_minus1: number;
            cpb_removal_delay_length_minus1: number;
            dpb_output_delay_length_minus1: number;
            time_offset_length: number;
        }>);
    }
    class H264MasteringDisplayColourVolume {
        static $gtype: GObject.GType<H264MasteringDisplayColourVolume>;
        display_primaries_x: number[];
        display_primaries_y: number[];
        white_point_x: number;
        white_point_y: number;
        max_display_mastering_luminance: number;
        min_display_mastering_luminance: number;
        constructor(properties?: Partial<{
            display_primaries_x: number[];
            display_primaries_y: number[];
            white_point_x: number;
            white_point_y: number;
            max_display_mastering_luminance: number;
            min_display_mastering_luminance: number;
        }>);
    }
    class H264NalParser {
        static $gtype: GObject.GType<H264NalParser>;
        constructor(properties?: Partial<{}>);
        free(): void;
    }
    class H264NalUnit {
        static $gtype: GObject.GType<H264NalUnit>;
        ref_idc: number;
        type: number;
        idr_pic_flag: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;
        extension_type: number;
        constructor(properties?: Partial<{
            ref_idc: number;
            type: number;
            idr_pic_flag: number;
            size: number;
            offset: number;
            sc_offset: number;
            valid: boolean;
            data: number;
            header_bytes: number;
            extension_type: number;
        }>);
    }
    class H264NalUnitExtensionMVC {
        static $gtype: GObject.GType<H264NalUnitExtensionMVC>;
        non_idr_flag: number;
        priority_id: number;
        view_id: number;
        temporal_id: number;
        anchor_pic_flag: number;
        inter_view_flag: number;
        constructor(properties?: Partial<{
            non_idr_flag: number;
            priority_id: number;
            view_id: number;
            temporal_id: number;
            anchor_pic_flag: number;
            inter_view_flag: number;
        }>);
    }
    class H264PPS {
        static $gtype: GObject.GType<H264PPS>;
        id: number;
        sequence: H264SPS;
        entropy_coding_mode_flag: number;
        pic_order_present_flag: number;
        num_slice_groups_minus1: number;
        slice_group_map_type: number;
        run_length_minus1: number[];
        top_left: number[];
        bottom_right: number[];
        slice_group_change_direction_flag: number;
        slice_group_change_rate_minus1: number;
        pic_size_in_map_units_minus1: number;
        slice_group_id: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        weighted_pred_flag: number;
        weighted_bipred_idc: number;
        pic_init_qp_minus26: number;
        pic_init_qs_minus26: number;
        chroma_qp_index_offset: number;
        deblocking_filter_control_present_flag: number;
        constrained_intra_pred_flag: number;
        redundant_pic_cnt_present_flag: number;
        transform_8x8_mode_flag: number;
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        second_chroma_qp_index_offset: number;
        valid: boolean;
        pic_scaling_matrix_present_flag: number;
        sps_id: number;
        constructor(properties?: Partial<{
            id: number;
            entropy_coding_mode_flag: number;
            pic_order_present_flag: number;
            num_slice_groups_minus1: number;
            slice_group_map_type: number;
            run_length_minus1: number[];
            top_left: number[];
            bottom_right: number[];
            slice_group_change_direction_flag: number;
            slice_group_change_rate_minus1: number;
            pic_size_in_map_units_minus1: number;
            slice_group_id: number;
            num_ref_idx_l0_active_minus1: number;
            num_ref_idx_l1_active_minus1: number;
            weighted_pred_flag: number;
            weighted_bipred_idc: number;
            pic_init_qp_minus26: number;
            pic_init_qs_minus26: number;
            chroma_qp_index_offset: number;
            deblocking_filter_control_present_flag: number;
            constrained_intra_pred_flag: number;
            redundant_pic_cnt_present_flag: number;
            transform_8x8_mode_flag: number;
            scaling_lists_4x4: Uint8Array;
            scaling_lists_8x8: Uint8Array;
            second_chroma_qp_index_offset: number;
            valid: boolean;
            pic_scaling_matrix_present_flag: number;
            sps_id: number;
        }>);
        clear(): void;
    }
    class H264PicTiming {
        static $gtype: GObject.GType<H264PicTiming>;
        CpbDpbDelaysPresentFlag: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        cpb_removal_delay: number;
        dpb_output_delay: number;
        pic_struct_present_flag: number;
        pic_struct: number;
        clock_timestamp_flag: Uint8Array;
        clock_timestamp: H264ClockTimestamp[];
        time_offset_length: number;
        constructor(properties?: Partial<{
            CpbDpbDelaysPresentFlag: number;
            cpb_removal_delay_length_minus1: number;
            dpb_output_delay_length_minus1: number;
            cpb_removal_delay: number;
            dpb_output_delay: number;
            pic_struct_present_flag: number;
            pic_struct: number;
            clock_timestamp_flag: Uint8Array;
            clock_timestamp: H264ClockTimestamp[];
            time_offset_length: number;
        }>);
    }
    class H264PredWeightTable {
        static $gtype: GObject.GType<H264PredWeightTable>;
        luma_log2_weight_denom: number;
        chroma_log2_weight_denom: number;
        luma_weight_l0: number[];
        luma_offset_l0: Uint8Array;
        chroma_weight_l0: number[];
        chroma_offset_l0: Uint8Array;
        luma_weight_l1: number[];
        luma_offset_l1: Uint8Array;
        chroma_weight_l1: number[];
        chroma_offset_l1: Uint8Array;
        constructor(properties?: Partial<{
            luma_log2_weight_denom: number;
            chroma_log2_weight_denom: number;
            luma_weight_l0: number[];
            luma_offset_l0: Uint8Array;
            chroma_weight_l0: number[];
            chroma_offset_l0: Uint8Array;
            luma_weight_l1: number[];
            luma_offset_l1: Uint8Array;
            chroma_weight_l1: number[];
            chroma_offset_l1: Uint8Array;
        }>);
    }
    class H264RecoveryPoint {
        static $gtype: GObject.GType<H264RecoveryPoint>;
        recovery_frame_cnt: number;
        exact_match_flag: number;
        broken_link_flag: number;
        changing_slice_group_idc: number;
        constructor(properties?: Partial<{
            recovery_frame_cnt: number;
            exact_match_flag: number;
            broken_link_flag: number;
            changing_slice_group_idc: number;
        }>);
    }
    class H264RefPicListModification {
        static $gtype: GObject.GType<H264RefPicListModification>;
        modification_of_pic_nums_idc: number;
        constructor(properties?: Partial<{
            modification_of_pic_nums_idc: number;
        }>);
    }
    class H264RefPicMarking {
        static $gtype: GObject.GType<H264RefPicMarking>;
        memory_management_control_operation: number;
        difference_of_pic_nums_minus1: number;
        long_term_pic_num: number;
        long_term_frame_idx: number;
        max_long_term_frame_idx_plus1: number;
        constructor(properties?: Partial<{
            memory_management_control_operation: number;
            difference_of_pic_nums_minus1: number;
            long_term_pic_num: number;
            long_term_frame_idx: number;
            max_long_term_frame_idx_plus1: number;
        }>);
    }
    class H264RegisteredUserData {
        static $gtype: GObject.GType<H264RegisteredUserData>;
        country_code: number;
        country_code_extension: number;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            country_code: number;
            country_code_extension: number;
            data: number;
            size: number;
        }>);
    }
    class H264SEIMessage {
        static $gtype: GObject.GType<H264SEIMessage>;
        payloadType: H264SEIPayloadType;
    }
    class H264SEIUnhandledPayload {
        static $gtype: GObject.GType<H264SEIUnhandledPayload>;
        payloadType: number;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            payloadType: number;
            data: number;
            size: number;
        }>);
    }
    class H264SPS {
        static $gtype: GObject.GType<H264SPS>;
        id: number;
        profile_idc: number;
        constraint_set0_flag: number;
        constraint_set1_flag: number;
        constraint_set2_flag: number;
        constraint_set3_flag: number;
        constraint_set4_flag: number;
        constraint_set5_flag: number;
        level_idc: number;
        chroma_format_idc: number;
        separate_colour_plane_flag: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        qpprime_y_zero_transform_bypass_flag: number;
        scaling_matrix_present_flag: number;
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        log2_max_frame_num_minus4: number;
        pic_order_cnt_type: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        delta_pic_order_always_zero_flag: number;
        offset_for_non_ref_pic: number;
        offset_for_top_to_bottom_field: number;
        num_ref_frames_in_pic_order_cnt_cycle: number;
        offset_for_ref_frame: number[];
        num_ref_frames: number;
        gaps_in_frame_num_value_allowed_flag: number;
        pic_width_in_mbs_minus1: number;
        pic_height_in_map_units_minus1: number;
        frame_mbs_only_flag: number;
        mb_adaptive_frame_field_flag: number;
        direct_8x8_inference_flag: number;
        frame_cropping_flag: number;
        frame_crop_left_offset: number;
        frame_crop_right_offset: number;
        frame_crop_top_offset: number;
        frame_crop_bottom_offset: number;
        vui_parameters_present_flag: number;
        vui_parameters: H264VUIParams;
        chroma_array_type: number;
        max_frame_num: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num_removed: number;
        fps_den_removed: number;
        valid: boolean;
        extension_type: number;
        constructor(properties?: Partial<{
            id: number;
            profile_idc: number;
            constraint_set0_flag: number;
            constraint_set1_flag: number;
            constraint_set2_flag: number;
            constraint_set3_flag: number;
            constraint_set4_flag: number;
            constraint_set5_flag: number;
            level_idc: number;
            chroma_format_idc: number;
            separate_colour_plane_flag: number;
            bit_depth_luma_minus8: number;
            bit_depth_chroma_minus8: number;
            qpprime_y_zero_transform_bypass_flag: number;
            scaling_matrix_present_flag: number;
            scaling_lists_4x4: Uint8Array;
            scaling_lists_8x8: Uint8Array;
            log2_max_frame_num_minus4: number;
            pic_order_cnt_type: number;
            log2_max_pic_order_cnt_lsb_minus4: number;
            delta_pic_order_always_zero_flag: number;
            offset_for_non_ref_pic: number;
            offset_for_top_to_bottom_field: number;
            num_ref_frames_in_pic_order_cnt_cycle: number;
            offset_for_ref_frame: number[];
            num_ref_frames: number;
            gaps_in_frame_num_value_allowed_flag: number;
            pic_width_in_mbs_minus1: number;
            pic_height_in_map_units_minus1: number;
            frame_mbs_only_flag: number;
            mb_adaptive_frame_field_flag: number;
            direct_8x8_inference_flag: number;
            frame_cropping_flag: number;
            frame_crop_left_offset: number;
            frame_crop_right_offset: number;
            frame_crop_top_offset: number;
            frame_crop_bottom_offset: number;
            vui_parameters_present_flag: number;
            vui_parameters: H264VUIParams;
            chroma_array_type: number;
            max_frame_num: number;
            width: number;
            height: number;
            crop_rect_width: number;
            crop_rect_height: number;
            crop_rect_x: number;
            crop_rect_y: number;
            fps_num_removed: number;
            fps_den_removed: number;
            valid: boolean;
            extension_type: number;
        }>);
        clear(): void;
    }
    class H264SPSExtMVC {
        static $gtype: GObject.GType<H264SPSExtMVC>;
        num_views_minus1: number;
        view: H264SPSExtMVCView;
        num_level_values_signalled_minus1: number;
        level_value: H264SPSExtMVCLevelValue;
        constructor(properties?: Partial<{
            num_views_minus1: number;
            num_level_values_signalled_minus1: number;
        }>);
    }
    class H264SPSExtMVCLevelValue {
        static $gtype: GObject.GType<H264SPSExtMVCLevelValue>;
        level_idc: number;
        num_applicable_ops_minus1: number;
        applicable_op: H264SPSExtMVCLevelValueOp;
        constructor(properties?: Partial<{
            level_idc: number;
            num_applicable_ops_minus1: number;
        }>);
    }
    class H264SPSExtMVCLevelValueOp {
        static $gtype: GObject.GType<H264SPSExtMVCLevelValueOp>;
        temporal_id: number;
        num_target_views_minus1: number;
        target_view_id: number;
        num_views_minus1: number;
        constructor(properties?: Partial<{
            temporal_id: number;
            num_target_views_minus1: number;
            target_view_id: number;
            num_views_minus1: number;
        }>);
    }
    class H264SPSExtMVCView {
        static $gtype: GObject.GType<H264SPSExtMVCView>;
        view_id: number;
        num_anchor_refs_l0: number;
        anchor_ref_l0: number[];
        num_anchor_refs_l1: number;
        anchor_ref_l1: number[];
        num_non_anchor_refs_l0: number;
        non_anchor_ref_l0: number[];
        num_non_anchor_refs_l1: number;
        non_anchor_ref_l1: number[];
        constructor(properties?: Partial<{
            view_id: number;
            num_anchor_refs_l0: number;
            anchor_ref_l0: number[];
            num_anchor_refs_l1: number;
            anchor_ref_l1: number[];
            num_non_anchor_refs_l0: number;
            non_anchor_ref_l0: number[];
            num_non_anchor_refs_l1: number;
            non_anchor_ref_l1: number[];
        }>);
    }
    class H264SliceHdr {
        static $gtype: GObject.GType<H264SliceHdr>;
        first_mb_in_slice: number;
        type: number;
        pps: H264PPS;
        colour_plane_id: number;
        frame_num: number;
        field_pic_flag: number;
        bottom_field_flag: number;
        idr_pic_id: number;
        pic_order_cnt_lsb: number;
        delta_pic_order_cnt_bottom: number;
        delta_pic_order_cnt: number[];
        redundant_pic_cnt: number;
        direct_spatial_mv_pred_flag: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        ref_pic_list_modification_flag_l0: number;
        n_ref_pic_list_modification_l0: number;
        ref_pic_list_modification_l0: H264RefPicListModification[];
        ref_pic_list_modification_flag_l1: number;
        n_ref_pic_list_modification_l1: number;
        ref_pic_list_modification_l1: H264RefPicListModification[];
        pred_weight_table: H264PredWeightTable;
        dec_ref_pic_marking: H264DecRefPicMarking;
        cabac_init_idc: number;
        slice_qp_delta: number;
        slice_qs_delta: number;
        disable_deblocking_filter_idc: number;
        slice_alpha_c0_offset_div2: number;
        slice_beta_offset_div2: number;
        slice_group_change_cycle: number;
        max_pic_num: number;
        valid: boolean;
        header_size: number;
        n_emulation_prevention_bytes: number;
        num_ref_idx_active_override_flag: number;
        sp_for_switch_flag: number;
        pic_order_cnt_bit_size: number;
        pps_id: number;
        constructor(properties?: Partial<{
            first_mb_in_slice: number;
            type: number;
            colour_plane_id: number;
            frame_num: number;
            field_pic_flag: number;
            bottom_field_flag: number;
            idr_pic_id: number;
            pic_order_cnt_lsb: number;
            delta_pic_order_cnt_bottom: number;
            delta_pic_order_cnt: number[];
            redundant_pic_cnt: number;
            direct_spatial_mv_pred_flag: number;
            num_ref_idx_l0_active_minus1: number;
            num_ref_idx_l1_active_minus1: number;
            ref_pic_list_modification_flag_l0: number;
            n_ref_pic_list_modification_l0: number;
            ref_pic_list_modification_l0: H264RefPicListModification[];
            ref_pic_list_modification_flag_l1: number;
            n_ref_pic_list_modification_l1: number;
            ref_pic_list_modification_l1: H264RefPicListModification[];
            pred_weight_table: H264PredWeightTable;
            dec_ref_pic_marking: H264DecRefPicMarking;
            cabac_init_idc: number;
            slice_qp_delta: number;
            slice_qs_delta: number;
            disable_deblocking_filter_idc: number;
            slice_alpha_c0_offset_div2: number;
            slice_beta_offset_div2: number;
            slice_group_change_cycle: number;
            max_pic_num: number;
            valid: boolean;
            header_size: number;
            n_emulation_prevention_bytes: number;
            num_ref_idx_active_override_flag: number;
            sp_for_switch_flag: number;
            pic_order_cnt_bit_size: number;
            pps_id: number;
        }>);
    }
    class H264StereoVideoInfo {
        static $gtype: GObject.GType<H264StereoVideoInfo>;
        field_views_flag: number;
        top_field_is_left_view_flag: number;
        current_frame_is_left_view_flag: number;
        next_frame_is_second_view_flag: number;
        left_view_self_contained_flag: number;
        right_view_self_contained_flag: number;
        constructor(properties?: Partial<{
            field_views_flag: number;
            top_field_is_left_view_flag: number;
            current_frame_is_left_view_flag: number;
            next_frame_is_second_view_flag: number;
            left_view_self_contained_flag: number;
            right_view_self_contained_flag: number;
        }>);
    }
    class H264UserDataUnregistered {
        static $gtype: GObject.GType<H264UserDataUnregistered>;
        uuid: Uint8Array;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            uuid: Uint8Array;
            data: number;
            size: number;
        }>);
    }
    class H264VUIParams {
        static $gtype: GObject.GType<H264VUIParams>;
        aspect_ratio_info_present_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        video_signal_type_present_flag: number;
        video_format: number;
        video_full_range_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        fixed_frame_rate_flag: number;
        nal_hrd_parameters_present_flag: number;
        nal_hrd_parameters: H264HRDParams;
        vcl_hrd_parameters_present_flag: number;
        vcl_hrd_parameters: H264HRDParams;
        low_delay_hrd_flag: number;
        pic_struct_present_flag: number;
        bitstream_restriction_flag: number;
        motion_vectors_over_pic_boundaries_flag: number;
        max_bytes_per_pic_denom: number;
        max_bits_per_mb_denom: number;
        log2_max_mv_length_horizontal: number;
        log2_max_mv_length_vertical: number;
        num_reorder_frames: number;
        max_dec_frame_buffering: number;
        par_n: number;
        par_d: number;
        constructor(properties?: Partial<{
            aspect_ratio_info_present_flag: number;
            aspect_ratio_idc: number;
            sar_width: number;
            sar_height: number;
            overscan_info_present_flag: number;
            overscan_appropriate_flag: number;
            video_signal_type_present_flag: number;
            video_format: number;
            video_full_range_flag: number;
            colour_description_present_flag: number;
            colour_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
            chroma_loc_info_present_flag: number;
            chroma_sample_loc_type_top_field: number;
            chroma_sample_loc_type_bottom_field: number;
            timing_info_present_flag: number;
            num_units_in_tick: number;
            time_scale: number;
            fixed_frame_rate_flag: number;
            nal_hrd_parameters_present_flag: number;
            nal_hrd_parameters: H264HRDParams;
            vcl_hrd_parameters_present_flag: number;
            vcl_hrd_parameters: H264HRDParams;
            low_delay_hrd_flag: number;
            pic_struct_present_flag: number;
            bitstream_restriction_flag: number;
            motion_vectors_over_pic_boundaries_flag: number;
            max_bytes_per_pic_denom: number;
            max_bits_per_mb_denom: number;
            log2_max_mv_length_horizontal: number;
            log2_max_mv_length_vertical: number;
            num_reorder_frames: number;
            max_dec_frame_buffering: number;
            par_n: number;
            par_d: number;
        }>);
    }
    class H265BufferingPeriod {
        static $gtype: GObject.GType<H265BufferingPeriod>;
        sps: H265SPS;
        irap_cpb_params_present_flag: number;
        cpb_delay_offset: number;
        dpb_delay_offset: number;
        concatenation_flag: number;
        au_cpb_removal_delay_delta_minus1: number;
        nal_initial_cpb_removal_delay: Uint8Array;
        nal_initial_cpb_removal_offset: Uint8Array;
        nal_initial_alt_cpb_removal_delay: Uint8Array;
        nal_initial_alt_cpb_removal_offset: Uint8Array;
        vcl_initial_cpb_removal_delay: Uint8Array;
        vcl_initial_cpb_removal_offset: Uint8Array;
        vcl_initial_alt_cpb_removal_delay: Uint8Array;
        vcl_initial_alt_cpb_removal_offset: Uint8Array;
        constructor(properties?: Partial<{
            irap_cpb_params_present_flag: number;
            cpb_delay_offset: number;
            dpb_delay_offset: number;
            concatenation_flag: number;
            au_cpb_removal_delay_delta_minus1: number;
            nal_initial_cpb_removal_delay: Uint8Array;
            nal_initial_cpb_removal_offset: Uint8Array;
            nal_initial_alt_cpb_removal_delay: Uint8Array;
            nal_initial_alt_cpb_removal_offset: Uint8Array;
            vcl_initial_cpb_removal_delay: Uint8Array;
            vcl_initial_cpb_removal_offset: Uint8Array;
            vcl_initial_alt_cpb_removal_delay: Uint8Array;
            vcl_initial_alt_cpb_removal_offset: Uint8Array;
        }>);
    }
    class H265ContentLightLevel {
        static $gtype: GObject.GType<H265ContentLightLevel>;
        max_content_light_level: number;
        max_pic_average_light_level: number;
        constructor(properties?: Partial<{
            max_content_light_level: number;
            max_pic_average_light_level: number;
        }>);
    }
    class H265DecoderConfigRecord {
        static $gtype: GObject.GType<H265DecoderConfigRecord>;
        configuration_version: number;
        general_profile_space: number;
        general_tier_flag: number;
        general_profile_idc: number;
        general_profile_compatibility_flags: Uint8Array;
        general_progressive_source_flag: number;
        general_interlaced_source_flag: number;
        general_non_packed_constraint_flag: number;
        general_frame_only_constraint_flag: number;
        general_max_12bit_constraint_flag: number;
        general_max_10bit_constraint_flag: number;
        general_max_8bit_constraint_flag: number;
        general_max_422chroma_constraint_flag: number;
        general_max_420chroma_constraint_flag: number;
        general_max_monochrome_constraint_flag: number;
        general_intra_constraint_flag: number;
        general_one_picture_only_constraint_flag: number;
        general_lower_bit_rate_constraint_flag: number;
        general_max_14bit_constraint_flag: number;
        general_inbld_flag: number;
        general_level_idc: number;
        min_spatial_segmentation_idc: number;
        parallelism_type: number;
        chroma_format_idc: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        avg_frame_rate: number;
        constant_frame_rate: number;
        num_temporal_layers: number;
        temporal_id_nested: number;
        length_size_minus_one: number;
        nalu_array: null[];
        constructor(properties?: Partial<{
            configuration_version: number;
            general_profile_space: number;
            general_tier_flag: number;
            general_profile_idc: number;
            general_profile_compatibility_flags: Uint8Array;
            general_progressive_source_flag: number;
            general_interlaced_source_flag: number;
            general_non_packed_constraint_flag: number;
            general_frame_only_constraint_flag: number;
            general_max_12bit_constraint_flag: number;
            general_max_10bit_constraint_flag: number;
            general_max_8bit_constraint_flag: number;
            general_max_422chroma_constraint_flag: number;
            general_max_420chroma_constraint_flag: number;
            general_max_monochrome_constraint_flag: number;
            general_intra_constraint_flag: number;
            general_one_picture_only_constraint_flag: number;
            general_lower_bit_rate_constraint_flag: number;
            general_max_14bit_constraint_flag: number;
            general_inbld_flag: number;
            general_level_idc: number;
            min_spatial_segmentation_idc: number;
            parallelism_type: number;
            chroma_format_idc: number;
            bit_depth_luma_minus8: number;
            bit_depth_chroma_minus8: number;
            avg_frame_rate: number;
            constant_frame_rate: number;
            num_temporal_layers: number;
            temporal_id_nested: number;
            length_size_minus_one: number;
            nalu_array: null[];
        }>);
        free(): void;
    }
    class H265DecoderConfigRecordNalUnitArray {
        static $gtype: GObject.GType<H265DecoderConfigRecordNalUnitArray>;
        array_completeness: number;
        nal_unit_type: H265NalUnitType;
        nalu: null[];
    }
    class H265HRDParams {
        static $gtype: GObject.GType<H265HRDParams>;
        nal_hrd_parameters_present_flag: number;
        vcl_hrd_parameters_present_flag: number;
        sub_pic_hrd_params_present_flag: number;
        tick_divisor_minus2: number;
        du_cpb_removal_delay_increment_length_minus1: number;
        sub_pic_cpb_params_in_pic_timing_sei_flag: number;
        dpb_output_delay_du_length_minus1: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        cpb_size_du_scale: number;
        initial_cpb_removal_delay_length_minus1: number;
        au_cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        fixed_pic_rate_general_flag: Uint8Array;
        fixed_pic_rate_within_cvs_flag: Uint8Array;
        elemental_duration_in_tc_minus1: number[];
        low_delay_hrd_flag: Uint8Array;
        cpb_cnt_minus1: Uint8Array;
        sublayer_hrd_params: H265SubLayerHRDParams[];
        constructor(properties?: Partial<{
            nal_hrd_parameters_present_flag: number;
            vcl_hrd_parameters_present_flag: number;
            sub_pic_hrd_params_present_flag: number;
            tick_divisor_minus2: number;
            du_cpb_removal_delay_increment_length_minus1: number;
            sub_pic_cpb_params_in_pic_timing_sei_flag: number;
            dpb_output_delay_du_length_minus1: number;
            bit_rate_scale: number;
            cpb_size_scale: number;
            cpb_size_du_scale: number;
            initial_cpb_removal_delay_length_minus1: number;
            au_cpb_removal_delay_length_minus1: number;
            dpb_output_delay_length_minus1: number;
            fixed_pic_rate_general_flag: Uint8Array;
            fixed_pic_rate_within_cvs_flag: Uint8Array;
            elemental_duration_in_tc_minus1: number[];
            low_delay_hrd_flag: Uint8Array;
            cpb_cnt_minus1: Uint8Array;
            sublayer_hrd_params: H265SubLayerHRDParams[];
        }>);
    }
    class H265MasteringDisplayColourVolume {
        static $gtype: GObject.GType<H265MasteringDisplayColourVolume>;
        display_primaries_x: number[];
        display_primaries_y: number[];
        white_point_x: number;
        white_point_y: number;
        max_display_mastering_luminance: number;
        min_display_mastering_luminance: number;
        constructor(properties?: Partial<{
            display_primaries_x: number[];
            display_primaries_y: number[];
            white_point_x: number;
            white_point_y: number;
            max_display_mastering_luminance: number;
            min_display_mastering_luminance: number;
        }>);
    }
    class H265NalUnit {
        static $gtype: GObject.GType<H265NalUnit>;
        type: number;
        layer_id: number;
        temporal_id_plus1: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;
        constructor(properties?: Partial<{
            type: number;
            layer_id: number;
            temporal_id_plus1: number;
            size: number;
            offset: number;
            sc_offset: number;
            valid: boolean;
            data: number;
            header_bytes: number;
        }>);
    }
    class H265PPS {
        static $gtype: GObject.GType<H265PPS>;
        id: number;
        sps_id: number;
        sps: H265SPS;
        dependent_slice_segments_enabled_flag: number;
        output_flag_present_flag: number;
        num_extra_slice_header_bits: number;
        sign_data_hiding_enabled_flag: number;
        cabac_init_present_flag: number;
        num_ref_idx_l0_default_active_minus1: number;
        num_ref_idx_l1_default_active_minus1: number;
        init_qp_minus26: number;
        constrained_intra_pred_flag: number;
        transform_skip_enabled_flag: number;
        cu_qp_delta_enabled_flag: number;
        diff_cu_qp_delta_depth: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        slice_chroma_qp_offsets_present_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        transquant_bypass_enabled_flag: number;
        tiles_enabled_flag: number;
        entropy_coding_sync_enabled_flag: number;
        num_tile_columns_minus1: number;
        num_tile_rows_minus1: number;
        uniform_spacing_flag: number;
        column_width_minus1: number[];
        row_height_minus1: number[];
        loop_filter_across_tiles_enabled_flag: number;
        loop_filter_across_slices_enabled_flag: number;
        deblocking_filter_control_present_flag: number;
        deblocking_filter_override_enabled_flag: number;
        deblocking_filter_disabled_flag: number;
        beta_offset_div2: number;
        tc_offset_div2: number;
        scaling_list_data_present_flag: number;
        scaling_list: H265ScalingList;
        lists_modification_present_flag: number;
        log2_parallel_merge_level_minus2: number;
        slice_segment_header_extension_present_flag: number;
        pps_extension_flag: number;
        pps_range_extension_flag: number;
        pps_multilayer_extension_flag: number;
        pps_3d_extension_flag: number;
        pps_scc_extension_flag: number;
        pps_extension_4bits: number;
        pps_extension_params: H265PPSExtensionParams;
        pps_scc_extension_params: H265PPSSccExtensionParams;
        PicWidthInCtbsY: number;
        PicHeightInCtbsY: number;
        valid: boolean;
        constructor(properties?: Partial<{
            id: number;
            sps_id: number;
            dependent_slice_segments_enabled_flag: number;
            output_flag_present_flag: number;
            num_extra_slice_header_bits: number;
            sign_data_hiding_enabled_flag: number;
            cabac_init_present_flag: number;
            num_ref_idx_l0_default_active_minus1: number;
            num_ref_idx_l1_default_active_minus1: number;
            init_qp_minus26: number;
            constrained_intra_pred_flag: number;
            transform_skip_enabled_flag: number;
            cu_qp_delta_enabled_flag: number;
            diff_cu_qp_delta_depth: number;
            cb_qp_offset: number;
            cr_qp_offset: number;
            slice_chroma_qp_offsets_present_flag: number;
            weighted_pred_flag: number;
            weighted_bipred_flag: number;
            transquant_bypass_enabled_flag: number;
            tiles_enabled_flag: number;
            entropy_coding_sync_enabled_flag: number;
            num_tile_columns_minus1: number;
            num_tile_rows_minus1: number;
            uniform_spacing_flag: number;
            column_width_minus1: number[];
            row_height_minus1: number[];
            loop_filter_across_tiles_enabled_flag: number;
            loop_filter_across_slices_enabled_flag: number;
            deblocking_filter_control_present_flag: number;
            deblocking_filter_override_enabled_flag: number;
            deblocking_filter_disabled_flag: number;
            beta_offset_div2: number;
            tc_offset_div2: number;
            scaling_list_data_present_flag: number;
            scaling_list: H265ScalingList;
            lists_modification_present_flag: number;
            log2_parallel_merge_level_minus2: number;
            slice_segment_header_extension_present_flag: number;
            pps_extension_flag: number;
            pps_range_extension_flag: number;
            pps_multilayer_extension_flag: number;
            pps_3d_extension_flag: number;
            pps_scc_extension_flag: number;
            pps_extension_4bits: number;
            pps_extension_params: H265PPSExtensionParams;
            pps_scc_extension_params: H265PPSSccExtensionParams;
            PicWidthInCtbsY: number;
            PicHeightInCtbsY: number;
            valid: boolean;
        }>);
    }
    class H265PPSExtensionParams {
        static $gtype: GObject.GType<H265PPSExtensionParams>;
        log2_max_transform_skip_block_size_minus2: number;
        cross_component_prediction_enabled_flag: number;
        chroma_qp_offset_list_enabled_flag: number;
        diff_cu_chroma_qp_offset_depth: number;
        chroma_qp_offset_list_len_minus1: number;
        cb_qp_offset_list: Uint8Array;
        cr_qp_offset_list: Uint8Array;
        log2_sao_offset_scale_luma: number;
        log2_sao_offset_scale_chroma: number;
        constructor(properties?: Partial<{
            log2_max_transform_skip_block_size_minus2: number;
            cross_component_prediction_enabled_flag: number;
            chroma_qp_offset_list_enabled_flag: number;
            diff_cu_chroma_qp_offset_depth: number;
            chroma_qp_offset_list_len_minus1: number;
            cb_qp_offset_list: Uint8Array;
            cr_qp_offset_list: Uint8Array;
            log2_sao_offset_scale_luma: number;
            log2_sao_offset_scale_chroma: number;
        }>);
    }
    class H265PPSSccExtensionParams {
        static $gtype: GObject.GType<H265PPSSccExtensionParams>;
        pps_curr_pic_ref_enabled_flag: number;
        residual_adaptive_colour_transform_enabled_flag: number;
        pps_slice_act_qp_offsets_present_flag: number;
        pps_act_y_qp_offset_plus5: number;
        pps_act_cb_qp_offset_plus5: number;
        pps_act_cr_qp_offset_plus3: number;
        pps_palette_predictor_initializers_present_flag: number;
        pps_num_palette_predictor_initializer: number;
        monochrome_palette_flag: number;
        luma_bit_depth_entry_minus8: number;
        chroma_bit_depth_entry_minus8: number;
        pps_palette_predictor_initializer: number[];
        constructor(properties?: Partial<{
            pps_curr_pic_ref_enabled_flag: number;
            residual_adaptive_colour_transform_enabled_flag: number;
            pps_slice_act_qp_offsets_present_flag: number;
            pps_act_y_qp_offset_plus5: number;
            pps_act_cb_qp_offset_plus5: number;
            pps_act_cr_qp_offset_plus3: number;
            pps_palette_predictor_initializers_present_flag: number;
            pps_num_palette_predictor_initializer: number;
            monochrome_palette_flag: number;
            luma_bit_depth_entry_minus8: number;
            chroma_bit_depth_entry_minus8: number;
            pps_palette_predictor_initializer: number[];
        }>);
    }
    class H265Parser {
        static $gtype: GObject.GType<H265Parser>;
        constructor(properties?: Partial<{}>);
        free(): void;
        identify_and_split_nalu_hevc(data: number, offset: number, size: bigint | number, nal_length_size: number, nalus: H265NalUnit[], consumed: bigint | number): H265ParserResult;
        identify_nalu(data: number, offset: number, size: bigint | number, nalu: H265NalUnit): H265ParserResult;
        identify_nalu_hevc(data: number, offset: number, size: bigint | number, nal_length_size: number, nalu: H265NalUnit): H265ParserResult;
        identify_nalu_unchecked(data: number, offset: number, size: bigint | number, nalu: H265NalUnit): H265ParserResult;
        insert_sei(au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
        insert_sei_hevc(nal_length_size: number, au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
        link_slice_hdr(slice: H265SliceHdr): H265ParserResult;
        parse_decoder_config_record(data: number, size: bigint | number): [H265ParserResult, H265DecoderConfigRecord];
        parse_nal(nalu: H265NalUnit): H265ParserResult;
        parse_pps(nalu: H265NalUnit, pps: H265PPS): H265ParserResult;
        parse_sei(nalu: H265NalUnit, messages: H265SEIMessage[]): H265ParserResult;
        parse_slice_hdr(nalu: H265NalUnit, slice: H265SliceHdr): H265ParserResult;
        parse_slice_hdr_ext(nalu: H265NalUnit, slice: H265SliceHdr, sps_ext: H265SPSEXT): H265ParserResult;
        parse_sps(nalu: H265NalUnit, sps: H265SPS, parse_vui_params: boolean): H265ParserResult;
        parse_sps_ext(nalu: H265NalUnit, sps: H265SPS, sps_ext: H265SPSEXT, parse_vui_params: boolean): H265ParserResult;
        parse_vps(nalu: H265NalUnit, vps: H265VPS): H265ParserResult;
        update_pps(pps: H265PPS): H265ParserResult;
        update_sps(sps: H265SPS): H265ParserResult;
        update_vps(vps: H265VPS): H265ParserResult;
    }
    class H265PicTiming {
        static $gtype: GObject.GType<H265PicTiming>;
        pic_struct: number;
        source_scan_type: number;
        duplicate_flag: number;
        au_cpb_removal_delay_minus1: number;
        pic_dpb_output_delay: number;
        pic_dpb_output_du_delay: number;
        num_decoding_units_minus1: number;
        du_common_cpb_removal_delay_flag: number;
        du_common_cpb_removal_delay_increment_minus1: number;
        num_nalus_in_du_minus1: number;
        du_cpb_removal_delay_increment_minus1: number;
        constructor(properties?: Partial<{
            pic_struct: number;
            source_scan_type: number;
            duplicate_flag: number;
            au_cpb_removal_delay_minus1: number;
            pic_dpb_output_delay: number;
            pic_dpb_output_du_delay: number;
            num_decoding_units_minus1: number;
            du_common_cpb_removal_delay_flag: number;
            du_common_cpb_removal_delay_increment_minus1: number;
            num_nalus_in_du_minus1: number;
            du_cpb_removal_delay_increment_minus1: number;
        }>);
    }
    class H265PredWeightTable {
        static $gtype: GObject.GType<H265PredWeightTable>;
        luma_log2_weight_denom: number;
        delta_chroma_log2_weight_denom: number;
        luma_weight_l0_flag: Uint8Array;
        chroma_weight_l0_flag: Uint8Array;
        delta_luma_weight_l0: Uint8Array;
        luma_offset_l0: Uint8Array;
        delta_chroma_weight_l0: Uint8Array;
        delta_chroma_offset_l0: number[];
        luma_weight_l1_flag: Uint8Array;
        chroma_weight_l1_flag: Uint8Array;
        delta_luma_weight_l1: Uint8Array;
        luma_offset_l1: Uint8Array;
        delta_chroma_weight_l1: Uint8Array;
        delta_chroma_offset_l1: number[];
        constructor(properties?: Partial<{
            luma_log2_weight_denom: number;
            delta_chroma_log2_weight_denom: number;
            luma_weight_l0_flag: Uint8Array;
            chroma_weight_l0_flag: Uint8Array;
            delta_luma_weight_l0: Uint8Array;
            luma_offset_l0: Uint8Array;
            delta_chroma_weight_l0: Uint8Array;
            delta_chroma_offset_l0: number[];
            luma_weight_l1_flag: Uint8Array;
            chroma_weight_l1_flag: Uint8Array;
            delta_luma_weight_l1: Uint8Array;
            luma_offset_l1: Uint8Array;
            delta_chroma_weight_l1: Uint8Array;
            delta_chroma_offset_l1: number[];
        }>);
    }
    class H265ProfileTierLevel {
        static $gtype: GObject.GType<H265ProfileTierLevel>;
        profile_space: number;
        tier_flag: number;
        profile_idc: number;
        profile_compatibility_flag: Uint8Array;
        progressive_source_flag: number;
        interlaced_source_flag: number;
        non_packed_constraint_flag: number;
        frame_only_constraint_flag: number;
        max_12bit_constraint_flag: number;
        max_10bit_constraint_flag: number;
        max_8bit_constraint_flag: number;
        max_422chroma_constraint_flag: number;
        max_420chroma_constraint_flag: number;
        max_monochrome_constraint_flag: number;
        intra_constraint_flag: number;
        one_picture_only_constraint_flag: number;
        lower_bit_rate_constraint_flag: number;
        max_14bit_constraint_flag: number;
        level_idc: number;
        sub_layer_profile_present_flag: Uint8Array;
        sub_layer_level_present_flag: Uint8Array;
        sub_layer_profile_space: Uint8Array;
        sub_layer_tier_flag: Uint8Array;
        sub_layer_profile_idc: Uint8Array;
        sub_layer_profile_compatibility_flag: Uint8Array;
        sub_layer_progressive_source_flag: Uint8Array;
        sub_layer_interlaced_source_flag: Uint8Array;
        sub_layer_non_packed_constraint_flag: Uint8Array;
        sub_layer_frame_only_constraint_flag: Uint8Array;
        sub_layer_level_idc: Uint8Array;
        constructor(properties?: Partial<{
            profile_space: number;
            tier_flag: number;
            profile_idc: number;
            profile_compatibility_flag: Uint8Array;
            progressive_source_flag: number;
            interlaced_source_flag: number;
            non_packed_constraint_flag: number;
            frame_only_constraint_flag: number;
            max_12bit_constraint_flag: number;
            max_10bit_constraint_flag: number;
            max_8bit_constraint_flag: number;
            max_422chroma_constraint_flag: number;
            max_420chroma_constraint_flag: number;
            max_monochrome_constraint_flag: number;
            intra_constraint_flag: number;
            one_picture_only_constraint_flag: number;
            lower_bit_rate_constraint_flag: number;
            max_14bit_constraint_flag: number;
            level_idc: number;
            sub_layer_profile_present_flag: Uint8Array;
            sub_layer_level_present_flag: Uint8Array;
            sub_layer_profile_space: Uint8Array;
            sub_layer_tier_flag: Uint8Array;
            sub_layer_profile_idc: Uint8Array;
            sub_layer_profile_compatibility_flag: Uint8Array;
            sub_layer_progressive_source_flag: Uint8Array;
            sub_layer_interlaced_source_flag: Uint8Array;
            sub_layer_non_packed_constraint_flag: Uint8Array;
            sub_layer_frame_only_constraint_flag: Uint8Array;
            sub_layer_level_idc: Uint8Array;
        }>);
        get_profile(): H265Profile;
    }
    class H265RecoveryPoint {
        static $gtype: GObject.GType<H265RecoveryPoint>;
        recovery_poc_cnt: number;
        exact_match_flag: number;
        broken_link_flag: number;
        constructor(properties?: Partial<{
            recovery_poc_cnt: number;
            exact_match_flag: number;
            broken_link_flag: number;
        }>);
    }
    class H265RefPicListModification {
        static $gtype: GObject.GType<H265RefPicListModification>;
        ref_pic_list_modification_flag_l0: number;
        list_entry_l0: number[];
        ref_pic_list_modification_flag_l1: number;
        list_entry_l1: number[];
        constructor(properties?: Partial<{
            ref_pic_list_modification_flag_l0: number;
            list_entry_l0: number[];
            ref_pic_list_modification_flag_l1: number;
            list_entry_l1: number[];
        }>);
    }
    class H265RegisteredUserData {
        static $gtype: GObject.GType<H265RegisteredUserData>;
        country_code: number;
        country_code_extension: number;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            country_code: number;
            country_code_extension: number;
            data: number;
            size: number;
        }>);
    }
    class H265SEIMessage {
        static $gtype: GObject.GType<H265SEIMessage>;
        payloadType: H265SEIPayloadType;
    }
    class H265SPS {
        static $gtype: GObject.GType<H265SPS>;
        id: number;
        vps_id: number;
        vps: H265VPS;
        max_sub_layers_minus1: number;
        temporal_id_nesting_flag: number;
        profile_tier_level: H265ProfileTierLevel;
        chroma_format_idc: number;
        separate_colour_plane_flag: number;
        pic_width_in_luma_samples: number;
        pic_height_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        sub_layer_ordering_info_present_flag: number;
        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: Uint8Array;
        log2_min_luma_coding_block_size_minus3: number;
        log2_diff_max_min_luma_coding_block_size: number;
        log2_min_transform_block_size_minus2: number;
        log2_diff_max_min_transform_block_size: number;
        max_transform_hierarchy_depth_inter: number;
        max_transform_hierarchy_depth_intra: number;
        scaling_list_enabled_flag: number;
        scaling_list_data_present_flag: number;
        scaling_list: H265ScalingList;
        amp_enabled_flag: number;
        sample_adaptive_offset_enabled_flag: number;
        pcm_enabled_flag: number;
        pcm_sample_bit_depth_luma_minus1: number;
        pcm_sample_bit_depth_chroma_minus1: number;
        log2_min_pcm_luma_coding_block_size_minus3: number;
        log2_diff_max_min_pcm_luma_coding_block_size: number;
        pcm_loop_filter_disabled_flag: number;
        num_short_term_ref_pic_sets: number;
        short_term_ref_pic_set: H265ShortTermRefPicSet[];
        long_term_ref_pics_present_flag: number;
        num_long_term_ref_pics_sps: number;
        lt_ref_pic_poc_lsb_sps: number[];
        used_by_curr_pic_lt_sps_flag: Uint8Array;
        temporal_mvp_enabled_flag: number;
        strong_intra_smoothing_enabled_flag: number;
        vui_parameters_present_flag: number;
        vui_params: H265VUIParams;
        sps_extension_flag: number;
        sps_range_extension_flag: number;
        sps_multilayer_extension_flag: number;
        sps_3d_extension_flag: number;
        sps_scc_extension_flag: number;
        sps_extension_4bits: number;
        sps_extension_params: H265SPSExtensionParams;
        sps_scc_extension_params: H265SPSSccExtensionParams;
        chroma_array_type: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num: number;
        fps_den: number;
        valid: boolean;
        constructor(properties?: Partial<{
            id: number;
            vps_id: number;
            max_sub_layers_minus1: number;
            temporal_id_nesting_flag: number;
            profile_tier_level: H265ProfileTierLevel;
            chroma_format_idc: number;
            separate_colour_plane_flag: number;
            pic_width_in_luma_samples: number;
            pic_height_in_luma_samples: number;
            conformance_window_flag: number;
            conf_win_left_offset: number;
            conf_win_right_offset: number;
            conf_win_top_offset: number;
            conf_win_bottom_offset: number;
            bit_depth_luma_minus8: number;
            bit_depth_chroma_minus8: number;
            log2_max_pic_order_cnt_lsb_minus4: number;
            sub_layer_ordering_info_present_flag: number;
            max_dec_pic_buffering_minus1: Uint8Array;
            max_num_reorder_pics: Uint8Array;
            max_latency_increase_plus1: Uint8Array;
            log2_min_luma_coding_block_size_minus3: number;
            log2_diff_max_min_luma_coding_block_size: number;
            log2_min_transform_block_size_minus2: number;
            log2_diff_max_min_transform_block_size: number;
            max_transform_hierarchy_depth_inter: number;
            max_transform_hierarchy_depth_intra: number;
            scaling_list_enabled_flag: number;
            scaling_list_data_present_flag: number;
            scaling_list: H265ScalingList;
            amp_enabled_flag: number;
            sample_adaptive_offset_enabled_flag: number;
            pcm_enabled_flag: number;
            pcm_sample_bit_depth_luma_minus1: number;
            pcm_sample_bit_depth_chroma_minus1: number;
            log2_min_pcm_luma_coding_block_size_minus3: number;
            log2_diff_max_min_pcm_luma_coding_block_size: number;
            pcm_loop_filter_disabled_flag: number;
            num_short_term_ref_pic_sets: number;
            short_term_ref_pic_set: H265ShortTermRefPicSet[];
            long_term_ref_pics_present_flag: number;
            num_long_term_ref_pics_sps: number;
            lt_ref_pic_poc_lsb_sps: number[];
            used_by_curr_pic_lt_sps_flag: Uint8Array;
            temporal_mvp_enabled_flag: number;
            strong_intra_smoothing_enabled_flag: number;
            vui_parameters_present_flag: number;
            vui_params: H265VUIParams;
            sps_extension_flag: number;
            sps_range_extension_flag: number;
            sps_multilayer_extension_flag: number;
            sps_3d_extension_flag: number;
            sps_scc_extension_flag: number;
            sps_extension_4bits: number;
            sps_extension_params: H265SPSExtensionParams;
            sps_scc_extension_params: H265SPSSccExtensionParams;
            chroma_array_type: number;
            width: number;
            height: number;
            crop_rect_width: number;
            crop_rect_height: number;
            crop_rect_x: number;
            crop_rect_y: number;
            fps_num: number;
            fps_den: number;
            valid: boolean;
        }>);
    }
    class H265SPSEXT {
        static $gtype: GObject.GType<H265SPSEXT>;
        short_term_ref_pic_set_ext: H265ShortTermRefPicSetExt[];
        constructor(properties?: Partial<{
            short_term_ref_pic_set_ext: H265ShortTermRefPicSetExt[];
        }>);
    }
    class H265SPSExtensionParams {
        static $gtype: GObject.GType<H265SPSExtensionParams>;
        transform_skip_rotation_enabled_flag: number;
        transform_skip_context_enabled_flag: number;
        implicit_rdpcm_enabled_flag: number;
        explicit_rdpcm_enabled_flag: number;
        extended_precision_processing_flag: number;
        intra_smoothing_disabled_flag: number;
        high_precision_offsets_enabled_flag: number;
        persistent_rice_adaptation_enabled_flag: number;
        cabac_bypass_alignment_enabled_flag: number;
        constructor(properties?: Partial<{
            transform_skip_rotation_enabled_flag: number;
            transform_skip_context_enabled_flag: number;
            implicit_rdpcm_enabled_flag: number;
            explicit_rdpcm_enabled_flag: number;
            extended_precision_processing_flag: number;
            intra_smoothing_disabled_flag: number;
            high_precision_offsets_enabled_flag: number;
            persistent_rice_adaptation_enabled_flag: number;
            cabac_bypass_alignment_enabled_flag: number;
        }>);
    }
    class H265SPSSccExtensionParams {
        static $gtype: GObject.GType<H265SPSSccExtensionParams>;
        sps_curr_pic_ref_enabled_flag: number;
        palette_mode_enabled_flag: number;
        palette_max_size: number;
        delta_palette_max_predictor_size: number;
        sps_palette_predictor_initializers_present_flag: number;
        sps_num_palette_predictor_initializer_minus1: number;
        sps_palette_predictor_initializer: number[];
        motion_vector_resolution_control_idc: number;
        intra_boundary_filtering_disabled_flag: number;
        constructor(properties?: Partial<{
            sps_curr_pic_ref_enabled_flag: number;
            palette_mode_enabled_flag: number;
            palette_max_size: number;
            delta_palette_max_predictor_size: number;
            sps_palette_predictor_initializers_present_flag: number;
            sps_num_palette_predictor_initializer_minus1: number;
            sps_palette_predictor_initializer: number[];
            motion_vector_resolution_control_idc: number;
            intra_boundary_filtering_disabled_flag: number;
        }>);
    }
    class H265ScalingList {
        static $gtype: GObject.GType<H265ScalingList>;
        scaling_list_dc_coef_minus8_16x16: number[];
        scaling_list_dc_coef_minus8_32x32: number[];
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        scaling_lists_16x16: Uint8Array;
        scaling_lists_32x32: Uint8Array;
        constructor(properties?: Partial<{
            scaling_list_dc_coef_minus8_16x16: number[];
            scaling_list_dc_coef_minus8_32x32: number[];
            scaling_lists_4x4: Uint8Array;
            scaling_lists_8x8: Uint8Array;
            scaling_lists_16x16: Uint8Array;
            scaling_lists_32x32: Uint8Array;
        }>);
    }
    class H265ShortTermRefPicSet {
        static $gtype: GObject.GType<H265ShortTermRefPicSet>;
        inter_ref_pic_set_prediction_flag: number;
        delta_idx_minus1: number;
        delta_rps_sign: number;
        abs_delta_rps_minus1: number;
        NumDeltaPocs: number;
        NumNegativePics: number;
        NumPositivePics: number;
        UsedByCurrPicS0: Uint8Array;
        UsedByCurrPicS1: Uint8Array;
        DeltaPocS0: number[];
        DeltaPocS1: number[];
        NumDeltaPocsOfRefRpsIdx: number;
        constructor(properties?: Partial<{
            inter_ref_pic_set_prediction_flag: number;
            delta_idx_minus1: number;
            delta_rps_sign: number;
            abs_delta_rps_minus1: number;
            NumDeltaPocs: number;
            NumNegativePics: number;
            NumPositivePics: number;
            UsedByCurrPicS0: Uint8Array;
            UsedByCurrPicS1: Uint8Array;
            DeltaPocS0: number[];
            DeltaPocS1: number[];
            NumDeltaPocsOfRefRpsIdx: number;
        }>);
    }
    class H265ShortTermRefPicSetExt {
        static $gtype: GObject.GType<H265ShortTermRefPicSetExt>;
        use_delta_flag: Uint8Array;
        used_by_curr_pic_flag: Uint8Array;
        delta_poc_s0_minus1: number[];
        delta_poc_s1_minus1: number[];
        constructor(properties?: Partial<{
            use_delta_flag: Uint8Array;
            used_by_curr_pic_flag: Uint8Array;
            delta_poc_s0_minus1: number[];
            delta_poc_s1_minus1: number[];
        }>);
    }
    class H265SliceHdr {
        static $gtype: GObject.GType<H265SliceHdr>;
        first_slice_segment_in_pic_flag: number;
        no_output_of_prior_pics_flag: number;
        pps: H265PPS;
        dependent_slice_segment_flag: number;
        segment_address: number;
        type: number;
        pic_output_flag: number;
        colour_plane_id: number;
        pic_order_cnt_lsb: number;
        short_term_ref_pic_set_sps_flag: number;
        short_term_ref_pic_sets: H265ShortTermRefPicSet;
        short_term_ref_pic_set_idx: number;
        num_long_term_sps: number;
        num_long_term_pics: number;
        lt_idx_sps: Uint8Array;
        poc_lsb_lt: number[];
        used_by_curr_pic_lt_flag: Uint8Array;
        delta_poc_msb_present_flag: Uint8Array;
        delta_poc_msb_cycle_lt: number[];
        temporal_mvp_enabled_flag: number;
        sao_luma_flag: number;
        sao_chroma_flag: number;
        num_ref_idx_active_override_flag: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        ref_pic_list_modification: H265RefPicListModification;
        mvd_l1_zero_flag: number;
        cabac_init_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        pred_weight_table: H265PredWeightTable;
        five_minus_max_num_merge_cand: number;
        use_integer_mv_flag: number;
        qp_delta: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        slice_act_y_qp_offset: number;
        slice_act_cb_qp_offset: number;
        slice_act_cr_qp_offset: number;
        cu_chroma_qp_offset_enabled_flag: number;
        deblocking_filter_override_flag: number;
        deblocking_filter_disabled_flag: number;
        beta_offset_div2: number;
        tc_offset_div2: number;
        loop_filter_across_slices_enabled_flag: number;
        num_entry_point_offsets: number;
        offset_len_minus1: number;
        entry_point_offset_minus1: number;
        NumPocTotalCurr: number;
        header_size: number;
        n_emulation_prevention_bytes: number;
        short_term_ref_pic_set_size: number;
        long_term_ref_pic_set_size: number;
        pps_id: number;
        constructor(properties?: Partial<{
            first_slice_segment_in_pic_flag: number;
            no_output_of_prior_pics_flag: number;
            dependent_slice_segment_flag: number;
            segment_address: number;
            type: number;
            pic_output_flag: number;
            colour_plane_id: number;
            pic_order_cnt_lsb: number;
            short_term_ref_pic_set_sps_flag: number;
            short_term_ref_pic_sets: H265ShortTermRefPicSet;
            short_term_ref_pic_set_idx: number;
            num_long_term_sps: number;
            num_long_term_pics: number;
            lt_idx_sps: Uint8Array;
            poc_lsb_lt: number[];
            used_by_curr_pic_lt_flag: Uint8Array;
            delta_poc_msb_present_flag: Uint8Array;
            delta_poc_msb_cycle_lt: number[];
            temporal_mvp_enabled_flag: number;
            sao_luma_flag: number;
            sao_chroma_flag: number;
            num_ref_idx_active_override_flag: number;
            num_ref_idx_l0_active_minus1: number;
            num_ref_idx_l1_active_minus1: number;
            ref_pic_list_modification: H265RefPicListModification;
            mvd_l1_zero_flag: number;
            cabac_init_flag: number;
            collocated_from_l0_flag: number;
            collocated_ref_idx: number;
            pred_weight_table: H265PredWeightTable;
            five_minus_max_num_merge_cand: number;
            use_integer_mv_flag: number;
            qp_delta: number;
            cb_qp_offset: number;
            cr_qp_offset: number;
            slice_act_y_qp_offset: number;
            slice_act_cb_qp_offset: number;
            slice_act_cr_qp_offset: number;
            cu_chroma_qp_offset_enabled_flag: number;
            deblocking_filter_override_flag: number;
            deblocking_filter_disabled_flag: number;
            beta_offset_div2: number;
            tc_offset_div2: number;
            loop_filter_across_slices_enabled_flag: number;
            num_entry_point_offsets: number;
            offset_len_minus1: number;
            entry_point_offset_minus1: number;
            NumPocTotalCurr: number;
            header_size: number;
            n_emulation_prevention_bytes: number;
            short_term_ref_pic_set_size: number;
            long_term_ref_pic_set_size: number;
            pps_id: number;
        }>);
        copy(src_slice: H265SliceHdr): boolean;
        free(): void;
    }
    class H265SubLayerHRDParams {
        static $gtype: GObject.GType<H265SubLayerHRDParams>;
        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cpb_size_du_value_minus1: number[];
        bit_rate_du_value_minus1: number[];
        cbr_flag: Uint8Array;
        constructor(properties?: Partial<{
            bit_rate_value_minus1: number[];
            cpb_size_value_minus1: number[];
            cpb_size_du_value_minus1: number[];
            bit_rate_du_value_minus1: number[];
            cbr_flag: Uint8Array;
        }>);
    }
    class H265TimeCode {
        static $gtype: GObject.GType<H265TimeCode>;
        num_clock_ts: number;
        clock_timestamp_flag: Uint8Array;
        units_field_based_flag: Uint8Array;
        counting_type: Uint8Array;
        full_timestamp_flag: Uint8Array;
        discontinuity_flag: Uint8Array;
        cnt_dropped_flag: Uint8Array;
        n_frames: number[];
        seconds_flag: Uint8Array;
        seconds_value: Uint8Array;
        minutes_flag: Uint8Array;
        minutes_value: Uint8Array;
        hours_flag: Uint8Array;
        hours_value: Uint8Array;
        time_offset_length: Uint8Array;
        time_offset_value: number[];
        constructor(properties?: Partial<{
            num_clock_ts: number;
            clock_timestamp_flag: Uint8Array;
            units_field_based_flag: Uint8Array;
            counting_type: Uint8Array;
            full_timestamp_flag: Uint8Array;
            discontinuity_flag: Uint8Array;
            cnt_dropped_flag: Uint8Array;
            n_frames: number[];
            seconds_flag: Uint8Array;
            seconds_value: Uint8Array;
            minutes_flag: Uint8Array;
            minutes_value: Uint8Array;
            hours_flag: Uint8Array;
            hours_value: Uint8Array;
            time_offset_length: Uint8Array;
            time_offset_value: number[];
        }>);
    }
    class H265UserDataUnregistered {
        static $gtype: GObject.GType<H265UserDataUnregistered>;
        uuid: Uint8Array;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            uuid: Uint8Array;
            data: number;
            size: number;
        }>);
    }
    class H265VPS {
        static $gtype: GObject.GType<H265VPS>;
        id: number;
        base_layer_internal_flag: number;
        base_layer_available_flag: number;
        max_layers_minus1: number;
        max_sub_layers_minus1: number;
        temporal_id_nesting_flag: number;
        profile_tier_level: H265ProfileTierLevel;
        sub_layer_ordering_info_present_flag: number;
        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: number[];
        max_layer_id: number;
        num_layer_sets_minus1: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        poc_proportional_to_timing_flag: number;
        num_ticks_poc_diff_one_minus1: number;
        num_hrd_parameters: number;
        hrd_layer_set_idx: number;
        cprms_present_flag: number;
        hrd_params: H265HRDParams;
        vps_extension: number;
        valid: boolean;
        constructor(properties?: Partial<{
            id: number;
            base_layer_internal_flag: number;
            base_layer_available_flag: number;
            max_layers_minus1: number;
            max_sub_layers_minus1: number;
            temporal_id_nesting_flag: number;
            profile_tier_level: H265ProfileTierLevel;
            sub_layer_ordering_info_present_flag: number;
            max_dec_pic_buffering_minus1: Uint8Array;
            max_num_reorder_pics: Uint8Array;
            max_latency_increase_plus1: number[];
            max_layer_id: number;
            num_layer_sets_minus1: number;
            timing_info_present_flag: number;
            num_units_in_tick: number;
            time_scale: number;
            poc_proportional_to_timing_flag: number;
            num_ticks_poc_diff_one_minus1: number;
            num_hrd_parameters: number;
            hrd_layer_set_idx: number;
            cprms_present_flag: number;
            hrd_params: H265HRDParams;
            vps_extension: number;
            valid: boolean;
        }>);
    }
    class H265VUIParams {
        static $gtype: GObject.GType<H265VUIParams>;
        parsed: boolean;
        aspect_ratio_info_present_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        video_signal_type_present_flag: number;
        video_format: number;
        video_full_range_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        neutral_chroma_indication_flag: number;
        field_seq_flag: number;
        frame_field_info_present_flag: number;
        default_display_window_flag: number;
        def_disp_win_left_offset: number;
        def_disp_win_right_offset: number;
        def_disp_win_top_offset: number;
        def_disp_win_bottom_offset: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        poc_proportional_to_timing_flag: number;
        num_ticks_poc_diff_one_minus1: number;
        hrd_parameters_present_flag: number;
        hrd_params: H265HRDParams;
        bitstream_restriction_flag: number;
        tiles_fixed_structure_flag: number;
        motion_vectors_over_pic_boundaries_flag: number;
        restricted_ref_pic_lists_flag: number;
        min_spatial_segmentation_idc: number;
        max_bytes_per_pic_denom: number;
        max_bits_per_min_cu_denom: number;
        log2_max_mv_length_horizontal: number;
        log2_max_mv_length_vertical: number;
        par_n: number;
        par_d: number;
        constructor(properties?: Partial<{
            parsed: boolean;
            aspect_ratio_info_present_flag: number;
            aspect_ratio_idc: number;
            sar_width: number;
            sar_height: number;
            overscan_info_present_flag: number;
            overscan_appropriate_flag: number;
            video_signal_type_present_flag: number;
            video_format: number;
            video_full_range_flag: number;
            colour_description_present_flag: number;
            colour_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
            chroma_loc_info_present_flag: number;
            chroma_sample_loc_type_top_field: number;
            chroma_sample_loc_type_bottom_field: number;
            neutral_chroma_indication_flag: number;
            field_seq_flag: number;
            frame_field_info_present_flag: number;
            default_display_window_flag: number;
            def_disp_win_left_offset: number;
            def_disp_win_right_offset: number;
            def_disp_win_top_offset: number;
            def_disp_win_bottom_offset: number;
            timing_info_present_flag: number;
            num_units_in_tick: number;
            time_scale: number;
            poc_proportional_to_timing_flag: number;
            num_ticks_poc_diff_one_minus1: number;
            hrd_parameters_present_flag: number;
            hrd_params: H265HRDParams;
            bitstream_restriction_flag: number;
            tiles_fixed_structure_flag: number;
            motion_vectors_over_pic_boundaries_flag: number;
            restricted_ref_pic_lists_flag: number;
            min_spatial_segmentation_idc: number;
            max_bytes_per_pic_denom: number;
            max_bits_per_min_cu_denom: number;
            log2_max_mv_length_horizontal: number;
            log2_max_mv_length_vertical: number;
            par_n: number;
            par_d: number;
        }>);
    }
    class H266ALF {
        static $gtype: GObject.GType<H266ALF>;
        luma_filter_signal_flag: number;
        chroma_filter_signal_flag: number;
        cc_cb_filter_signal_flag: number;
        cc_cr_filter_signal_flag: number;
        luma_clip_flag: number;
        luma_num_filters_signalled_minus1: number;
        luma_coeff_delta_idx: Uint8Array;
        luma_coeff_abs: Uint8Array;
        luma_coeff_sign: Uint8Array;
        luma_clip_idx: Uint8Array;
        chroma_clip_flag: number;
        chroma_num_alt_filters_minus1: number;
        chroma_coeff_abs: Uint8Array;
        chroma_coeff_sign: Uint8Array;
        chroma_clip_idx: Uint8Array;
        cc_cb_filters_signalled_minus1: number;
        cc_cb_mapped_coeff_abs: Uint8Array;
        cc_cb_coeff_sign: Uint8Array;
        cc_cr_filters_signalled_minus1: number;
        cc_cr_mapped_coeff_abs: Uint8Array;
        cc_cr_coeff_sign: Uint8Array;
        constructor(properties?: Partial<{
            luma_filter_signal_flag: number;
            chroma_filter_signal_flag: number;
            cc_cb_filter_signal_flag: number;
            cc_cr_filter_signal_flag: number;
            luma_clip_flag: number;
            luma_num_filters_signalled_minus1: number;
            luma_coeff_delta_idx: Uint8Array;
            luma_coeff_abs: Uint8Array;
            luma_coeff_sign: Uint8Array;
            luma_clip_idx: Uint8Array;
            chroma_clip_flag: number;
            chroma_num_alt_filters_minus1: number;
            chroma_coeff_abs: Uint8Array;
            chroma_coeff_sign: Uint8Array;
            chroma_clip_idx: Uint8Array;
            cc_cb_filters_signalled_minus1: number;
            cc_cb_mapped_coeff_abs: Uint8Array;
            cc_cb_coeff_sign: Uint8Array;
            cc_cr_filters_signalled_minus1: number;
            cc_cr_mapped_coeff_abs: Uint8Array;
            cc_cr_coeff_sign: Uint8Array;
        }>);
    }
    class H266APS {
        static $gtype: GObject.GType<H266APS>;
        params_type: H266APSType;
        aps_id: number;
        chroma_present_flag: number;
        extension_flag: number;
        extension_data_flag: number;
        valid: boolean;
    }
    class H266AUD {
        static $gtype: GObject.GType<H266AUD>;
        irap_or_gdr_flag: number;
        pic_type: number;
        constructor(properties?: Partial<{
            irap_or_gdr_flag: number;
            pic_type: number;
        }>);
    }
    class H266BufferingPeriod {
        static $gtype: GObject.GType<H266BufferingPeriod>;
        nal_hrd_params_present_flag: number;
        vcl_hrd_params_present_flag: number;
        cpb_initial_removal_delay_length_minus1: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        du_hrd_params_present_flag: number;
        du_cpb_removal_delay_increment_length_minus1: number;
        dpb_output_delay_du_length_minus1: number;
        du_cpb_params_in_pic_timing_sei_flag: number;
        du_dpb_params_in_pic_timing_sei_flag: number;
        concatenation_flag: number;
        additional_concatenation_info_present_flag: number;
        max_initial_removal_delay_for_concatenation: number;
        cpb_removal_delay_delta_minus1: number;
        max_sublayers_minus1: number;
        cpb_removal_delay_deltas_present_flag: number;
        num_cpb_removal_delay_deltas_minus1: number;
        cpb_removal_delay_delta_val: Uint8Array;
        cpb_cnt_minus1: number;
        sublayer_initial_cpb_removal_delay_present_flag: number;
        nal_initial_cpb_removal_delay: Uint8Array;
        nal_initial_cpb_removal_offset: Uint8Array;
        nal_initial_alt_cpb_removal_delay: Uint8Array;
        nal_initial_alt_cpb_removal_offset: Uint8Array;
        vcl_initial_cpb_removal_delay: Uint8Array;
        vcl_initial_cpb_removal_offset: Uint8Array;
        vcl_initial_alt_cpb_removal_delay: Uint8Array;
        vcl_initial_alt_cpb_removal_offset: Uint8Array;
        sublayer_dpb_output_offsets_present_flag: number;
        dpb_output_tid_offset: number[];
        alt_cpb_params_present_flag: number;
        use_alt_cpb_params_flag: number;
        constructor(properties?: Partial<{
            nal_hrd_params_present_flag: number;
            vcl_hrd_params_present_flag: number;
            cpb_initial_removal_delay_length_minus1: number;
            cpb_removal_delay_length_minus1: number;
            dpb_output_delay_length_minus1: number;
            du_hrd_params_present_flag: number;
            du_cpb_removal_delay_increment_length_minus1: number;
            dpb_output_delay_du_length_minus1: number;
            du_cpb_params_in_pic_timing_sei_flag: number;
            du_dpb_params_in_pic_timing_sei_flag: number;
            concatenation_flag: number;
            additional_concatenation_info_present_flag: number;
            max_initial_removal_delay_for_concatenation: number;
            cpb_removal_delay_delta_minus1: number;
            max_sublayers_minus1: number;
            cpb_removal_delay_deltas_present_flag: number;
            num_cpb_removal_delay_deltas_minus1: number;
            cpb_removal_delay_delta_val: Uint8Array;
            cpb_cnt_minus1: number;
            sublayer_initial_cpb_removal_delay_present_flag: number;
            nal_initial_cpb_removal_delay: Uint8Array;
            nal_initial_cpb_removal_offset: Uint8Array;
            nal_initial_alt_cpb_removal_delay: Uint8Array;
            nal_initial_alt_cpb_removal_offset: Uint8Array;
            vcl_initial_cpb_removal_delay: Uint8Array;
            vcl_initial_cpb_removal_offset: Uint8Array;
            vcl_initial_alt_cpb_removal_delay: Uint8Array;
            vcl_initial_alt_cpb_removal_offset: Uint8Array;
            sublayer_dpb_output_offsets_present_flag: number;
            dpb_output_tid_offset: number[];
            alt_cpb_params_present_flag: number;
            use_alt_cpb_params_flag: number;
        }>);
    }
    class H266DCI {
        static $gtype: GObject.GType<H266DCI>;
        num_ptls_minus1: number;
        profile_tier_level: H266ProfileTierLevel[];
        extension_flag: number;
        extension_data_flag: number;
    }
    class H266DPBParameters {
        static $gtype: GObject.GType<H266DPBParameters>;
        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: Uint8Array;
        constructor(properties?: Partial<{
            max_dec_pic_buffering_minus1: Uint8Array;
            max_num_reorder_pics: Uint8Array;
            max_latency_increase_plus1: Uint8Array;
        }>);
    }
    class H266DUInfo {
        static $gtype: GObject.GType<H266DUInfo>;
        decoding_unit_idx: number;
        sublayer_delays_present_flag: Uint8Array;
        du_cpb_removal_delay_increment: Uint8Array;
        dpb_output_du_delay_present_flag: number;
        dpb_output_du_delay: number;
        constructor(properties?: Partial<{
            decoding_unit_idx: number;
            sublayer_delays_present_flag: Uint8Array;
            du_cpb_removal_delay_increment: Uint8Array;
            dpb_output_du_delay_present_flag: number;
            dpb_output_du_delay: number;
        }>);
    }
    class H266DecoderConfigRecord {
        static $gtype: GObject.GType<H266DecoderConfigRecord>;
        length_size_minus_one: number;
        ptl_present_flag: number;
        ols_idx: number;
        num_sublayers: number;
        constant_frame_rate: number;
        chroma_format_idc: number;
        bit_depth_minus8: number;
        native_ptl: H266PTLRecord;
        max_picture_width: number;
        max_picture_height: number;
        avg_frame_rate: number;
        nalu_array: null[];
        constructor(properties?: Partial<{
            length_size_minus_one: number;
            ptl_present_flag: number;
            ols_idx: number;
            num_sublayers: number;
            constant_frame_rate: number;
            chroma_format_idc: number;
            bit_depth_minus8: number;
            native_ptl: H266PTLRecord;
            max_picture_width: number;
            max_picture_height: number;
            avg_frame_rate: number;
            nalu_array: null[];
        }>);
        free(): void;
    }
    class H266DecoderConfigRecordNalUnitArray {
        static $gtype: GObject.GType<H266DecoderConfigRecordNalUnitArray>;
        array_completeness: number;
        nal_unit_type: H266NalUnitType;
        nalu: null[];
    }
    class H266FrameFieldInfo {
        static $gtype: GObject.GType<H266FrameFieldInfo>;
        field_pic_flag: number;
        bottom_field_flag: number;
        pairing_indicated_flag: number;
        paired_with_next_field_flag: number;
        display_fields_from_frame_flag: number;
        top_field_first_flag: number;
        display_elemental_periods_minus1: number;
        source_scan_type: number;
        duplicate_flag: number;
        valid: boolean;
        constructor(properties?: Partial<{
            field_pic_flag: number;
            bottom_field_flag: number;
            pairing_indicated_flag: number;
            paired_with_next_field_flag: number;
            display_fields_from_frame_flag: number;
            top_field_first_flag: number;
            display_elemental_periods_minus1: number;
            source_scan_type: number;
            duplicate_flag: number;
            valid: boolean;
        }>);
    }
    class H266GeneralConstraintsInfo {
        static $gtype: GObject.GType<H266GeneralConstraintsInfo>;
        present_flag: number;
        intra_only_constraint_flag: number;
        all_layers_independent_constraint_flag: number;
        one_au_only_constraint_flag: number;
        sixteen_minus_max_bitdepth_constraint_idc: number;
        three_minus_max_chroma_format_constraint_idc: number;
        no_mixed_nalu_types_in_pic_constraint_flag: number;
        no_trail_constraint_flag: number;
        no_stsa_constraint_flag: number;
        no_rasl_constraint_flag: number;
        no_radl_constraint_flag: number;
        no_idr_constraint_flag: number;
        no_cra_constraint_flag: number;
        no_gdr_constraint_flag: number;
        no_aps_constraint_flag: number;
        no_idr_rpl_constraint_flag: number;
        one_tile_per_pic_constraint_flag: number;
        pic_header_in_slice_header_constraint_flag: number;
        one_slice_per_pic_constraint_flag: number;
        no_rectangular_slice_constraint_flag: number;
        one_slice_per_subpic_constraint_flag: number;
        no_subpic_info_constraint_flag: number;
        three_minus_max_log2_ctu_size_constraint_idc: number;
        no_partition_constraints_override_constraint_flag: number;
        no_mtt_constraint_flag: number;
        no_qtbtt_dual_tree_intra_constraint_flag: number;
        no_palette_constraint_flag: number;
        no_ibc_constraint_flag: number;
        no_isp_constraint_flag: number;
        no_mrl_constraint_flag: number;
        no_mip_constraint_flag: number;
        no_cclm_constraint_flag: number;
        no_ref_pic_resampling_constraint_flag: number;
        no_res_change_in_clvs_constraint_flag: number;
        no_weighted_prediction_constraint_flag: number;
        no_ref_wraparound_constraint_flag: number;
        no_temporal_mvp_constraint_flag: number;
        no_sbtmvp_constraint_flag: number;
        no_amvr_constraint_flag: number;
        no_bdof_constraint_flag: number;
        no_smvd_constraint_flag: number;
        no_dmvr_constraint_flag: number;
        no_mmvd_constraint_flag: number;
        no_affine_motion_constraint_flag: number;
        no_prof_constraint_flag: number;
        no_bcw_constraint_flag: number;
        no_ciip_constraint_flag: number;
        no_gpm_constraint_flag: number;
        no_luma_transform_size_64_constraint_flag: number;
        no_transform_skip_constraint_flag: number;
        no_bdpcm_constraint_flag: number;
        no_mts_constraint_flag: number;
        no_lfnst_constraint_flag: number;
        no_joint_cbcr_constraint_flag: number;
        no_sbt_constraint_flag: number;
        no_act_constraint_flag: number;
        no_explicit_scaling_list_constraint_flag: number;
        no_dep_quant_constraint_flag: number;
        no_sign_data_hiding_constraint_flag: number;
        no_cu_qp_delta_constraint_flag: number;
        no_chroma_qp_offset_constraint_flag: number;
        no_sao_constraint_flag: number;
        no_alf_constraint_flag: number;
        no_ccalf_constraint_flag: number;
        no_lmcs_constraint_flag: number;
        no_ladf_constraint_flag: number;
        no_virtual_boundaries_constraint_flag: number;
        all_rap_pictures_constraint_flag: number;
        no_extended_precision_processing_constraint_flag: number;
        no_ts_residual_coding_rice_constraint_flag: number;
        no_rrc_rice_extension_constraint_flag: number;
        no_persistent_rice_adaptation_constraint_flag: number;
        no_reverse_last_sig_coeff_constraint_flag: number;
        reserved_zero_bit: Uint8Array;
        constructor(properties?: Partial<{
            present_flag: number;
            intra_only_constraint_flag: number;
            all_layers_independent_constraint_flag: number;
            one_au_only_constraint_flag: number;
            sixteen_minus_max_bitdepth_constraint_idc: number;
            three_minus_max_chroma_format_constraint_idc: number;
            no_mixed_nalu_types_in_pic_constraint_flag: number;
            no_trail_constraint_flag: number;
            no_stsa_constraint_flag: number;
            no_rasl_constraint_flag: number;
            no_radl_constraint_flag: number;
            no_idr_constraint_flag: number;
            no_cra_constraint_flag: number;
            no_gdr_constraint_flag: number;
            no_aps_constraint_flag: number;
            no_idr_rpl_constraint_flag: number;
            one_tile_per_pic_constraint_flag: number;
            pic_header_in_slice_header_constraint_flag: number;
            one_slice_per_pic_constraint_flag: number;
            no_rectangular_slice_constraint_flag: number;
            one_slice_per_subpic_constraint_flag: number;
            no_subpic_info_constraint_flag: number;
            three_minus_max_log2_ctu_size_constraint_idc: number;
            no_partition_constraints_override_constraint_flag: number;
            no_mtt_constraint_flag: number;
            no_qtbtt_dual_tree_intra_constraint_flag: number;
            no_palette_constraint_flag: number;
            no_ibc_constraint_flag: number;
            no_isp_constraint_flag: number;
            no_mrl_constraint_flag: number;
            no_mip_constraint_flag: number;
            no_cclm_constraint_flag: number;
            no_ref_pic_resampling_constraint_flag: number;
            no_res_change_in_clvs_constraint_flag: number;
            no_weighted_prediction_constraint_flag: number;
            no_ref_wraparound_constraint_flag: number;
            no_temporal_mvp_constraint_flag: number;
            no_sbtmvp_constraint_flag: number;
            no_amvr_constraint_flag: number;
            no_bdof_constraint_flag: number;
            no_smvd_constraint_flag: number;
            no_dmvr_constraint_flag: number;
            no_mmvd_constraint_flag: number;
            no_affine_motion_constraint_flag: number;
            no_prof_constraint_flag: number;
            no_bcw_constraint_flag: number;
            no_ciip_constraint_flag: number;
            no_gpm_constraint_flag: number;
            no_luma_transform_size_64_constraint_flag: number;
            no_transform_skip_constraint_flag: number;
            no_bdpcm_constraint_flag: number;
            no_mts_constraint_flag: number;
            no_lfnst_constraint_flag: number;
            no_joint_cbcr_constraint_flag: number;
            no_sbt_constraint_flag: number;
            no_act_constraint_flag: number;
            no_explicit_scaling_list_constraint_flag: number;
            no_dep_quant_constraint_flag: number;
            no_sign_data_hiding_constraint_flag: number;
            no_cu_qp_delta_constraint_flag: number;
            no_chroma_qp_offset_constraint_flag: number;
            no_sao_constraint_flag: number;
            no_alf_constraint_flag: number;
            no_ccalf_constraint_flag: number;
            no_lmcs_constraint_flag: number;
            no_ladf_constraint_flag: number;
            no_virtual_boundaries_constraint_flag: number;
            all_rap_pictures_constraint_flag: number;
            no_extended_precision_processing_constraint_flag: number;
            no_ts_residual_coding_rice_constraint_flag: number;
            no_rrc_rice_extension_constraint_flag: number;
            no_persistent_rice_adaptation_constraint_flag: number;
            no_reverse_last_sig_coeff_constraint_flag: number;
            reserved_zero_bit: Uint8Array;
        }>);
    }
    class H266GeneralHRDParameters {
        static $gtype: GObject.GType<H266GeneralHRDParameters>;
        num_units_in_tick: number;
        time_scale: number;
        general_nal_hrd_params_present_flag: number;
        general_vcl_hrd_params_present_flag: number;
        general_same_pic_timing_in_all_ols_flag: number;
        general_du_hrd_params_present_flag: number;
        tick_divisor_minus2: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        cpb_size_du_scale: number;
        hrd_cpb_cnt_minus1: number;
        constructor(properties?: Partial<{
            num_units_in_tick: number;
            time_scale: number;
            general_nal_hrd_params_present_flag: number;
            general_vcl_hrd_params_present_flag: number;
            general_same_pic_timing_in_all_ols_flag: number;
            general_du_hrd_params_present_flag: number;
            tick_divisor_minus2: number;
            bit_rate_scale: number;
            cpb_size_scale: number;
            cpb_size_du_scale: number;
            hrd_cpb_cnt_minus1: number;
        }>);
    }
    abstract class H266HRDParams {
        static $gtype: GObject.GType<H266HRDParams>;
    }
    class H266LMCS {
        static $gtype: GObject.GType<H266LMCS>;
        min_bin_idx: number;
        delta_max_bin_idx: number;
        delta_cw_prec_minus1: number;
        delta_abs_cw: Uint8Array;
        delta_sign_cw_flag: Uint8Array;
        delta_abs_crs: number;
        delta_sign_crs_flag: number;
        constructor(properties?: Partial<{
            min_bin_idx: number;
            delta_max_bin_idx: number;
            delta_cw_prec_minus1: number;
            delta_abs_cw: Uint8Array;
            delta_sign_cw_flag: Uint8Array;
            delta_abs_crs: number;
            delta_sign_crs_flag: number;
        }>);
    }
    class H266NalUnit {
        static $gtype: GObject.GType<H266NalUnit>;
        type: number;
        layer_id: number;
        temporal_id_plus1: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;
        constructor(properties?: Partial<{
            type: number;
            layer_id: number;
            temporal_id_plus1: number;
            size: number;
            offset: number;
            sc_offset: number;
            valid: boolean;
            data: number;
            header_bytes: number;
        }>);
    }
    class H266OLSHRDParameters {
        static $gtype: GObject.GType<H266OLSHRDParameters>;
        fixed_pic_rate_general_flag: Uint8Array;
        fixed_pic_rate_within_cvs_flag: Uint8Array;
        elemental_duration_in_tc_minus1: number[];
        low_delay_hrd_flag: Uint8Array;
        nal_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
        vcl_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
        constructor(properties?: Partial<{
            fixed_pic_rate_general_flag: Uint8Array;
            fixed_pic_rate_within_cvs_flag: Uint8Array;
            elemental_duration_in_tc_minus1: number[];
            low_delay_hrd_flag: Uint8Array;
            nal_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
            vcl_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
        }>);
    }
    class H266OPI {
        static $gtype: GObject.GType<H266OPI>;
        ols_info_present_flag: number;
        htid_info_present_flag: number;
        ols_idx: number;
        htid_plus1: number;
        extension_flag: number;
        extension_data_flag: number;
        constructor(properties?: Partial<{
            ols_info_present_flag: number;
            htid_info_present_flag: number;
            ols_idx: number;
            htid_plus1: number;
            extension_flag: number;
            extension_data_flag: number;
        }>);
    }
    class H266PPS {
        static $gtype: GObject.GType<H266PPS>;
        pps_id: number;
        sps_id: number;
        mixed_nalu_types_in_pic_flag: number;
        pic_width_in_luma_samples: number;
        pic_height_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        scaling_window_explicit_signalling_flag: number;
        scaling_win_left_offset: number;
        scaling_win_right_offset: number;
        scaling_win_top_offset: number;
        scaling_win_bottom_offset: number;
        output_flag_present_flag: number;
        no_pic_partition_flag: number;
        subpic_id_mapping_present_flag: number;
        num_subpics_minus1: number;
        subpic_id_len_minus1: number;
        subpic_id: number[];
        log2_ctu_size_minus5: number;
        num_exp_tile_columns_minus1: number;
        num_exp_tile_rows_minus1: number;
        tile_column_width_minus1: number[];
        tile_row_height_minus1: number[];
        loop_filter_across_tiles_enabled_flag: number;
        rect_slice_flag: number;
        single_slice_per_subpic_flag: number;
        num_slices_in_pic_minus1: number;
        tile_idx_delta_present_flag: number;
        slice_width_in_tiles_minus1: number[];
        slice_height_in_tiles_minus1: number[];
        num_exp_slices_in_tile: number[];
        exp_slice_height_in_ctus_minus1: number[];
        tile_idx_delta_val: number[];
        loop_filter_across_slices_enabled_flag: number;
        cabac_init_present_flag: number;
        num_ref_idx_default_active_minus1: Uint8Array;
        rpl1_idx_present_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        ref_wraparound_enabled_flag: number;
        pic_width_minus_wraparound_offset: number;
        init_qp_minus26: number;
        cu_qp_delta_enabled_flag: number;
        chroma_tool_offsets_present_flag: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        joint_cbcr_qp_offset_present_flag: number;
        joint_cbcr_qp_offset_value: number;
        slice_chroma_qp_offsets_present_flag: number;
        cu_chroma_qp_offset_list_enabled_flag: number;
        chroma_qp_offset_list_len_minus1: number;
        cb_qp_offset_list: Uint8Array;
        cr_qp_offset_list: Uint8Array;
        joint_cbcr_qp_offset_list: Uint8Array;
        deblocking_filter_control_present_flag: number;
        deblocking_filter_override_enabled_flag: number;
        deblocking_filter_disabled_flag: number;
        dbf_info_in_ph_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        rpl_info_in_ph_flag: number;
        sao_info_in_ph_flag: number;
        alf_info_in_ph_flag: number;
        wp_info_in_ph_flag: number;
        qp_delta_info_in_ph_flag: number;
        picture_header_extension_present_flag: number;
        slice_header_extension_present_flag: number;
        extension_flag: number;
        extension_data_flag: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        pic_width_in_ctbs_y: number;
        pic_height_in_ctbs_y: number;
        pic_size_in_ctbs_y: number;
        num_tile_columns: number;
        num_tile_rows: number;
        num_tiles_in_pic: number;
        tile_col_bd_val: number[];
        tile_row_bd_val: number[];
        slice_top_left_tile_idx: number[];
        slice_top_left_ctu_x: number[];
        slice_top_left_ctu_y: number[];
        slice_height_in_ctus: number[];
        num_slices_in_subpic: number[];
        valid: boolean;
    }
    class H266PTLRecord {
        static $gtype: GObject.GType<H266PTLRecord>;
        num_bytes_constraint_info: number;
        general_profile_idc: number;
        general_tier_flag: number;
        general_level_idc: number;
        ptl_frame_only_constraint_flag: number;
        ptl_multilayer_enabled_flag: number;
        general_constraint_info: Uint8Array;
        ptl_sublayer_level_present_flag: Uint8Array;
        sublayer_level_idc: Uint8Array;
        ptl_num_sub_profiles: number;
        general_sub_profile_idc: number[];
        constructor(properties?: Partial<{
            num_bytes_constraint_info: number;
            general_profile_idc: number;
            general_tier_flag: number;
            general_level_idc: number;
            ptl_frame_only_constraint_flag: number;
            ptl_multilayer_enabled_flag: number;
            general_constraint_info: Uint8Array;
            ptl_sublayer_level_present_flag: Uint8Array;
            sublayer_level_idc: Uint8Array;
            ptl_num_sub_profiles: number;
            general_sub_profile_idc: number[];
        }>);
    }
    class H266Parser {
        static $gtype: GObject.GType<H266Parser>;
        free(): void;
        identify_and_split_nalu_vvc(data: number, offset: number, size: bigint | number, nal_length_size: number, nalus: H266NalUnit[], consumed: bigint | number): H266ParserResult;
        identify_nalu(data: number, offset: number, size: bigint | number, nalu: H266NalUnit): H266ParserResult;
        identify_nalu_unchecked(data: number, offset: number, size: bigint | number, nalu: H266NalUnit): H266ParserResult;
        identify_nalu_vvc(data: number, offset: number, size: bigint | number, nal_length_size: number, nalu: H266NalUnit): H266ParserResult;
        parse_aps(nalu: H266NalUnit, aps: H266APS): H266ParserResult;
        parse_aud(nalu: H266NalUnit, aud: H266AUD): H266ParserResult;
        parse_dci(nalu: H266NalUnit, dci: H266DCI): H266ParserResult;
        parse_decoder_config_record(data: number, size: bigint | number): [H266ParserResult, H266DecoderConfigRecord];
        parse_nal(nalu: H266NalUnit): H266ParserResult;
        parse_opi(nalu: H266NalUnit, opi: H266OPI): H266ParserResult;
        parse_picture_hdr(nalu: H266NalUnit, picture: H266PicHdr): H266ParserResult;
        parse_pps(nalu: H266NalUnit, pps: H266PPS): H266ParserResult;
        parse_sei(nalu: H266NalUnit, messages: H266SEIMessage[]): H266ParserResult;
        parse_slice_hdr(nalu: H266NalUnit, slice: H266SliceHdr): H266ParserResult;
        parse_sps(nalu: H266NalUnit, sps: H266SPS): H266ParserResult;
        parse_vps(nalu: H266NalUnit, vps: H266VPS): H266ParserResult;
    }
    class H266PicHdr {
        static $gtype: GObject.GType<H266PicHdr>;
        gdr_or_irap_pic_flag: number;
        non_ref_pic_flag: number;
        gdr_pic_flag: number;
        inter_slice_allowed_flag: number;
        intra_slice_allowed_flag: number;
        pps_id: number;
        pic_order_cnt_lsb: number;
        recovery_poc_cnt: number;
        extra_bit: Uint8Array;
        poc_msb_cycle_present_flag: number;
        poc_msb_cycle_val: number;
        alf_enabled_flag: number;
        num_alf_aps_ids_luma: number;
        alf_aps_id_luma: Uint8Array;
        alf_cb_enabled_flag: number;
        alf_cr_enabled_flag: number;
        alf_aps_id_chroma: number;
        alf_cc_cb_enabled_flag: number;
        alf_cc_cb_aps_id: number;
        alf_cc_cr_enabled_flag: number;
        alf_cc_cr_aps_id: number;
        lmcs_enabled_flag: number;
        lmcs_aps_id: number;
        chroma_residual_scale_flag: number;
        explicit_scaling_list_enabled_flag: number;
        scaling_list_aps_id: number;
        virtual_boundaries_present_flag: number;
        num_ver_virtual_boundaries: number;
        virtual_boundary_pos_x_minus1: number[];
        num_hor_virtual_boundaries: number;
        virtual_boundary_pos_y_minus1: number[];
        pic_output_flag: number;
        ref_pic_lists: H266RefPicLists;
        partition_constraints_override_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_luma: number;
        max_mtt_hierarchy_depth_intra_slice_luma: number;
        log2_diff_max_bt_min_qt_intra_slice_luma: number;
        log2_diff_max_tt_min_qt_intra_slice_luma: number;
        log2_diff_min_qt_min_cb_intra_slice_chroma: number;
        max_mtt_hierarchy_depth_intra_slice_chroma: number;
        log2_diff_max_bt_min_qt_intra_slice_chroma: number;
        log2_diff_max_tt_min_qt_intra_slice_chroma: number;
        cu_qp_delta_subdiv_intra_slice: number;
        cu_chroma_qp_offset_subdiv_intra_slice: number;
        log2_diff_min_qt_min_cb_inter_slice: number;
        max_mtt_hierarchy_depth_inter_slice: number;
        log2_diff_max_bt_min_qt_inter_slice: number;
        log2_diff_max_tt_min_qt_inter_slice: number;
        cu_qp_delta_subdiv_inter_slice: number;
        cu_chroma_qp_offset_subdiv_inter_slice: number;
        temporal_mvp_enabled_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        mmvd_fullpel_only_flag: number;
        mvd_l1_zero_flag: number;
        bdof_disabled_flag: number;
        dmvr_disabled_flag: number;
        prof_disabled_flag: number;
        pred_weight_table: H266PredWeightTable;
        qp_delta: number;
        joint_cbcr_sign_flag: number;
        sao_luma_enabled_flag: number;
        sao_chroma_enabled_flag: number;
        deblocking_params_present_flag: number;
        deblocking_filter_disabled_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        extension_length: number;
        extension_data_byte: Uint8Array;
        valid: boolean;
    }
    class H266PicTiming {
        static $gtype: GObject.GType<H266PicTiming>;
        cpb_removal_delay_minus: number;
        sublayer_delays_present_flag: Uint8Array;
        cpb_removal_delay_delta_enabled_flag: Uint8Array;
        cpb_removal_delay_delta_idx: Uint8Array;
        cpb_removal_delay_minus1: Uint8Array;
        dpb_output_delay: number;
        cpb_alt_timing_info_present_flag: number;
        nal_cpb_alt_initial_removal_delay_delta: Uint8Array;
        nal_cpb_alt_initial_removal_offset_delta: Uint8Array;
        nal_cpb_delay_offset: Uint8Array;
        nal_dpb_delay_offset: Uint8Array;
        vcl_cpb_alt_initial_removal_delay_delta: Uint8Array;
        vcl_cpb_alt_initial_removal_offset_delta: Uint8Array;
        vcl_cpb_delay_offset: Uint8Array;
        vcl_dpb_delay_offset: Uint8Array;
        dpb_output_du_delay: number;
        num_decoding_units_minus1: number;
        du_common_cpb_removal_delay_flag: number;
        du_common_cpb_removal_delay_increment_minus1: Uint8Array;
        num_nalus_in_du_minus1: number[];
        du_cpb_removal_delay_increment_minus1: Uint8Array;
        delay_for_concatenation_ensured_flag: number;
        display_elemental_periods_minus1: number;
        constructor(properties?: Partial<{
            cpb_removal_delay_minus: number;
            sublayer_delays_present_flag: Uint8Array;
            cpb_removal_delay_delta_enabled_flag: Uint8Array;
            cpb_removal_delay_delta_idx: Uint8Array;
            cpb_removal_delay_minus1: Uint8Array;
            dpb_output_delay: number;
            cpb_alt_timing_info_present_flag: number;
            nal_cpb_alt_initial_removal_delay_delta: Uint8Array;
            nal_cpb_alt_initial_removal_offset_delta: Uint8Array;
            nal_cpb_delay_offset: Uint8Array;
            nal_dpb_delay_offset: Uint8Array;
            vcl_cpb_alt_initial_removal_delay_delta: Uint8Array;
            vcl_cpb_alt_initial_removal_offset_delta: Uint8Array;
            vcl_cpb_delay_offset: Uint8Array;
            vcl_dpb_delay_offset: Uint8Array;
            dpb_output_du_delay: number;
            num_decoding_units_minus1: number;
            du_common_cpb_removal_delay_flag: number;
            du_common_cpb_removal_delay_increment_minus1: Uint8Array;
            num_nalus_in_du_minus1: number[];
            du_cpb_removal_delay_increment_minus1: Uint8Array;
            delay_for_concatenation_ensured_flag: number;
            display_elemental_periods_minus1: number;
        }>);
    }
    class H266PredWeightTable {
        static $gtype: GObject.GType<H266PredWeightTable>;
        luma_log2_weight_denom: number;
        delta_chroma_log2_weight_denom: number;
        num_l0_weights: number;
        luma_weight_l0_flag: Uint8Array;
        chroma_weight_l0_flag: Uint8Array;
        delta_luma_weight_l0: Uint8Array;
        luma_offset_l0: Uint8Array;
        delta_chroma_weight_l0: Uint8Array;
        delta_chroma_offset_l0: number[];
        num_l1_weights: number;
        luma_weight_l1_flag: Uint8Array;
        chroma_weight_l1_flag: Uint8Array;
        delta_luma_weight_l1: Uint8Array;
        luma_offset_l1: Uint8Array;
        delta_chroma_weight_l1: Uint8Array;
        delta_chroma_offset_l1: number[];
        constructor(properties?: Partial<{
            luma_log2_weight_denom: number;
            delta_chroma_log2_weight_denom: number;
            num_l0_weights: number;
            luma_weight_l0_flag: Uint8Array;
            chroma_weight_l0_flag: Uint8Array;
            delta_luma_weight_l0: Uint8Array;
            luma_offset_l0: Uint8Array;
            delta_chroma_weight_l0: Uint8Array;
            delta_chroma_offset_l0: number[];
            num_l1_weights: number;
            luma_weight_l1_flag: Uint8Array;
            chroma_weight_l1_flag: Uint8Array;
            delta_luma_weight_l1: Uint8Array;
            luma_offset_l1: Uint8Array;
            delta_chroma_weight_l1: Uint8Array;
            delta_chroma_offset_l1: number[];
        }>);
    }
    class H266ProfileTierLevel {
        static $gtype: GObject.GType<H266ProfileTierLevel>;
        profile_idc: H266Profile;
        tier_flag: number;
        level_idc: number;
        frame_only_constraint_flag: number;
        multilayer_enabled_flag: number;
        general_constraints_info: H266GeneralConstraintsInfo;
        sublayer_level_present_flag: Uint8Array;
        sublayer_level_idc: Uint8Array;
        num_sub_profiles: number;
        sub_profile_idc: H266Profile[];
        ptl_reserved_zero_bit: number;
    }
    class H266RefPicListStruct {
        static $gtype: GObject.GType<H266RefPicListStruct>;
        num_ref_entries: number;
        ltrp_in_header_flag: number;
        inter_layer_ref_pic_flag: Uint8Array;
        st_ref_pic_flag: Uint8Array;
        abs_delta_poc_st: number[];
        strp_entry_sign_flag: Uint8Array;
        rpls_poc_lsb_lt: Uint8Array;
        ilrp_idx: Uint8Array;
        num_short_term_pic: number;
        num_long_term_pic: number;
        num_inter_layer_pic: number;
        delta_poc_val_st: number[];
        constructor(properties?: Partial<{
            num_ref_entries: number;
            ltrp_in_header_flag: number;
            inter_layer_ref_pic_flag: Uint8Array;
            st_ref_pic_flag: Uint8Array;
            abs_delta_poc_st: number[];
            strp_entry_sign_flag: Uint8Array;
            rpls_poc_lsb_lt: Uint8Array;
            ilrp_idx: Uint8Array;
            num_short_term_pic: number;
            num_long_term_pic: number;
            num_inter_layer_pic: number;
            delta_poc_val_st: number[];
        }>);
    }
    class H266RefPicLists {
        static $gtype: GObject.GType<H266RefPicLists>;
        rpl_sps_flag: Uint8Array;
        rpl_idx: Uint8Array;
        rpl_ref_list: H266RefPicListStruct[];
        poc_lsb_lt: number[];
        delta_poc_msb_cycle_present_flag: Uint8Array;
        delta_poc_msb_cycle_lt: number[];
        constructor(properties?: Partial<{
            rpl_sps_flag: Uint8Array;
            rpl_idx: Uint8Array;
            rpl_ref_list: H266RefPicListStruct[];
            poc_lsb_lt: number[];
            delta_poc_msb_cycle_present_flag: Uint8Array;
            delta_poc_msb_cycle_lt: number[];
        }>);
    }
    class H266RegisteredUserData {
        static $gtype: GObject.GType<H266RegisteredUserData>;
        country_code: number;
        country_code_extension: number;
        size: number;
        data: number;
        constructor(properties?: Partial<{
            country_code: number;
            country_code_extension: number;
            size: number;
            data: number;
        }>);
    }
    class H266SEIMessage {
        static $gtype: GObject.GType<H266SEIMessage>;
        payloadType: H266SEIPayloadType;
    }
    class H266SPS {
        static $gtype: GObject.GType<H266SPS>;
        nuh_layer_id: number;
        sps_id: number;
        vps_id: number;
        max_sublayers_minus1: number;
        chroma_format_idc: number;
        log2_ctu_size_minus5: number;
        ctu_size: number;
        ptl_dpb_hrd_params_present_flag: number;
        dpb: H266DPBParameters;
        general_hrd_params: H266GeneralHRDParameters;
        ols_hrd_params: H266OLSHRDParameters;
        gdr_enabled_flag: number;
        res_change_in_clvs_allowed_flag: number;
        ref_pic_resampling_enabled_flag: number;
        pic_width_max_in_luma_samples: number;
        pic_height_max_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        subpic_info_present_flag: number;
        num_subpics_minus1: number;
        independent_subpics_flag: number;
        subpic_same_size_flag: number;
        subpic_ctu_top_left_x: number[];
        subpic_ctu_top_left_y: number[];
        subpic_width_minus1: number[];
        subpic_height_minus1: number[];
        subpic_treated_as_pic_flag: Uint8Array;
        loop_filter_across_subpic_enabled_flag: Uint8Array;
        subpic_id: number[];
        subpic_id_len_minus1: number;
        subpic_id_mapping_explicitly_signalled_flag: number;
        subpic_id_mapping_present_flag: number;
        bitdepth_minus8: number;
        entropy_coding_sync_enabled_flag: number;
        entry_point_offsets_present_flag: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        poc_msb_cycle_flag: number;
        poc_msb_cycle_len_minus1: number;
        num_extra_ph_bytes: number;
        extra_ph_bit_present_flag: Uint8Array;
        num_extra_sh_bytes: number;
        extra_sh_bit_present_flag: Uint8Array;
        sublayer_dpb_params_flag: number;
        log2_min_luma_coding_block_size_minus2: number;
        partition_constraints_override_enabled_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_luma: number;
        max_mtt_hierarchy_depth_intra_slice_luma: number;
        log2_diff_max_bt_min_qt_intra_slice_luma: number;
        log2_diff_max_tt_min_qt_intra_slice_luma: number;
        qtbtt_dual_tree_intra_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_chroma: number;
        max_mtt_hierarchy_depth_intra_slice_chroma: number;
        log2_diff_max_bt_min_qt_intra_slice_chroma: number;
        log2_diff_max_tt_min_qt_intra_slice_chroma: number;
        log2_diff_min_qt_min_cb_inter_slice: number;
        max_mtt_hierarchy_depth_inter_slice: number;
        log2_diff_max_bt_min_qt_inter_slice: number;
        log2_diff_max_tt_min_qt_inter_slice: number;
        max_luma_transform_size_64_flag: number;
        transform_skip_enabled_flag: number;
        log2_transform_skip_max_size_minus2: number;
        bdpcm_enabled_flag: number;
        mts_enabled_flag: number;
        explicit_mts_intra_enabled_flag: number;
        explicit_mts_inter_enabled_flag: number;
        lfnst_enabled_flag: number;
        joint_cbcr_enabled_flag: number;
        same_qp_table_for_chroma_flag: number;
        qp_table_start_minus26: Uint8Array;
        num_points_in_qp_table_minus1: Uint8Array;
        delta_qp_in_val_minus1: Uint8Array;
        delta_qp_diff_val: Uint8Array;
        sao_enabled_flag: number;
        alf_enabled_flag: number;
        ccalf_enabled_flag: number;
        lmcs_enabled_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        long_term_ref_pics_flag: number;
        inter_layer_prediction_enabled_flag: number;
        idr_rpl_present_flag: number;
        rpl1_same_as_rpl0_flag: number;
        num_ref_pic_lists: Uint8Array;
        ref_pic_list_struct: H266RefPicListStruct[];
        ref_wraparound_enabled_flag: number;
        temporal_mvp_enabled_flag: number;
        sbtmvp_enabled_flag: number;
        amvr_enabled_flag: number;
        bdof_enabled_flag: number;
        bdof_control_present_in_ph_flag: number;
        smvd_enabled_flag: number;
        dmvr_enabled_flag: number;
        dmvr_control_present_in_ph_flag: number;
        mmvd_enabled_flag: number;
        mmvd_fullpel_only_enabled_flag: number;
        six_minus_max_num_merge_cand: number;
        sbt_enabled_flag: number;
        affine_enabled_flag: number;
        five_minus_max_num_subblock_merge_cand: number;
        sps_6param_affine_enabled_flag: number;
        affine_amvr_enabled_flag: number;
        affine_prof_enabled_flag: number;
        prof_control_present_in_ph_flag: number;
        bcw_enabled_flag: number;
        ciip_enabled_flag: number;
        gpm_enabled_flag: number;
        max_num_merge_cand_minus_max_num_gpm_cand: number;
        log2_parallel_merge_level_minus2: number;
        isp_enabled_flag: number;
        mrl_enabled_flag: number;
        mip_enabled_flag: number;
        cclm_enabled_flag: number;
        chroma_horizontal_collocated_flag: number;
        chroma_vertical_collocated_flag: number;
        palette_enabled_flag: number;
        act_enabled_flag: number;
        min_qp_prime_ts: number;
        ibc_enabled_flag: number;
        six_minus_max_num_ibc_merge_cand: number;
        ladf_enabled_flag: number;
        num_ladf_intervals_minus2: number;
        ladf_lowest_interval_qp_offset: number;
        ladf_qp_offset: Uint8Array;
        ladf_delta_threshold_minus1: number[];
        explicit_scaling_list_enabled_flag: number;
        scaling_matrix_for_lfnst_disabled_flag: number;
        scaling_matrix_for_alternative_colour_space_disabled_flag: number;
        scaling_matrix_designated_colour_space_flag: number;
        dep_quant_enabled_flag: number;
        sign_data_hiding_enabled_flag: number;
        virtual_boundaries_enabled_flag: number;
        virtual_boundaries_present_flag: number;
        num_ver_virtual_boundaries: number;
        virtual_boundary_pos_x_minus1: number[];
        num_hor_virtual_boundaries: number;
        virtual_boundary_pos_y_minus1: number[];
        timing_hrd_params_present_flag: number;
        sublayer_cpb_params_present_flag: number;
        field_seq_flag: number;
        vui_parameters_present_flag: number;
        vui_payload_size_minus1: number;
        vui_params: H266VUIParams;
        extension_flag: number;
        range_extension_flag: number;
        extension_7_flags: Uint8Array;
        range_params: H266SPSRangeExtensionParams;
        max_width: number;
        max_height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num: number;
        fps_den: number;
        chroma_qp_table: number[];
        valid: boolean;
    }
    class H266SPSRangeExtensionParams {
        static $gtype: GObject.GType<H266SPSRangeExtensionParams>;
        extended_precision_flag: number;
        ts_residual_coding_rice_present_in_sh_flag: number;
        rrc_rice_extension_flag: number;
        persistent_rice_adaptation_enabled_flag: number;
        reverse_last_sig_coeff_enabled_flag: number;
        constructor(properties?: Partial<{
            extended_precision_flag: number;
            ts_residual_coding_rice_present_in_sh_flag: number;
            rrc_rice_extension_flag: number;
            persistent_rice_adaptation_enabled_flag: number;
            reverse_last_sig_coeff_enabled_flag: number;
        }>);
    }
    class H266ScalableNesting {
        static $gtype: GObject.GType<H266ScalableNesting>;
        ols_flag: number;
        subpic_flag: number;
        num_olss_minus1: number;
        ols_idx_delta_minus1: Uint8Array;
        all_layers_flag: number;
        num_layers_minus1: number;
        layer_id: Uint8Array;
        num_subpics_minus1: number;
        subpic_id_len_minus1: number;
        subpic_id: Uint8Array;
        num_seis_minus1: number;
        constructor(properties?: Partial<{
            ols_flag: number;
            subpic_flag: number;
            num_olss_minus1: number;
            ols_idx_delta_minus1: Uint8Array;
            all_layers_flag: number;
            num_layers_minus1: number;
            layer_id: Uint8Array;
            num_subpics_minus1: number;
            subpic_id_len_minus1: number;
            subpic_id: Uint8Array;
            num_seis_minus1: number;
        }>);
    }
    class H266ScalingList {
        static $gtype: GObject.GType<H266ScalingList>;
        copy_mode_flag: Uint8Array;
        pred_mode_flag: Uint8Array;
        pred_id_delta: Uint8Array;
        dc_coef: Uint8Array;
        delta_coef: Uint8Array;
        scaling_list_DC: Uint8Array;
        scaling_list: Uint8Array;
        constructor(properties?: Partial<{
            copy_mode_flag: Uint8Array;
            pred_mode_flag: Uint8Array;
            pred_id_delta: Uint8Array;
            dc_coef: Uint8Array;
            delta_coef: Uint8Array;
            scaling_list_DC: Uint8Array;
            scaling_list: Uint8Array;
        }>);
    }
    class H266SliceHdr {
        static $gtype: GObject.GType<H266SliceHdr>;
        picture_header_in_slice_header_flag: number;
        subpic_id: number;
        slice_address: number;
        extra_bit: Uint8Array;
        num_tiles_in_slice_minus1: number;
        slice_type: number;
        no_output_of_prior_pics_flag: number;
        alf_enabled_flag: number;
        num_alf_aps_ids_luma: number;
        alf_aps_id_luma: Uint8Array;
        alf_cb_enabled_flag: number;
        alf_cr_enabled_flag: number;
        alf_aps_id_chroma: number;
        alf_cc_cb_enabled_flag: number;
        alf_cc_cb_aps_id: number;
        alf_cc_cr_enabled_flag: number;
        alf_cc_cr_aps_id: number;
        lmcs_used_flag: number;
        explicit_scaling_list_used_flag: number;
        ref_pic_lists: H266RefPicLists;
        num_ref_idx_active_override_flag: number;
        num_ref_idx_active_minus1: Uint8Array;
        num_ref_idx_active: Uint8Array;
        cabac_init_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        pred_weight_table: H266PredWeightTable;
        slice_qp_y: number;
        qp_delta: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        joint_cbcr_qp_offset: number;
        cu_chroma_qp_offset_enabled_flag: number;
        sao_luma_used_flag: number;
        sao_chroma_used_flag: number;
        deblocking_params_present_flag: number;
        deblocking_filter_disabled_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        dep_quant_used_flag: number;
        sign_data_hiding_used_flag: number;
        ts_residual_coding_disabled_flag: number;
        ts_residual_coding_rice_idx_minus1: number;
        reverse_last_sig_coeff_flag: number;
        slice_header_extension_length: number;
        slice_header_extension_data_byte: Uint8Array;
        num_entry_points: number;
        entry_point_start_ctu: number[];
        entry_offset_len_minus1: number;
        entry_point_offset_minus1: number[];
        header_size: number;
        n_emulation_prevention_bytes: number;
    }
    class H266SubLayerHRDParameters {
        static $gtype: GObject.GType<H266SubLayerHRDParameters>;
        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cpb_size_du_value_minus1: number[];
        bit_rate_du_value_minus1: number[];
        cbr_flag: Uint8Array;
        bit_rate: number[];
        cpb_size: number[];
        constructor(properties?: Partial<{
            bit_rate_value_minus1: number[];
            cpb_size_value_minus1: number[];
            cpb_size_du_value_minus1: number[];
            bit_rate_du_value_minus1: number[];
            cbr_flag: Uint8Array;
            bit_rate: number[];
            cpb_size: number[];
        }>);
    }
    class H266SubPicLevelInfo {
        static $gtype: GObject.GType<H266SubPicLevelInfo>;
        num_ref_levels_minus1: number;
        cbr_constraint_flag: number;
        explicit_fraction_present_flag: number;
        num_subpics_minus1: number;
        max_sublayers_minus1: number;
        sublayer_info_present_flag: number;
        non_subpic_layers_fraction: Uint8Array;
        ref_level_idc: Uint8Array;
        ref_level_fraction_minus1: Uint8Array;
        constructor(properties?: Partial<{
            num_ref_levels_minus1: number;
            cbr_constraint_flag: number;
            explicit_fraction_present_flag: number;
            num_subpics_minus1: number;
            max_sublayers_minus1: number;
            sublayer_info_present_flag: number;
            non_subpic_layers_fraction: Uint8Array;
            ref_level_idc: Uint8Array;
            ref_level_fraction_minus1: Uint8Array;
        }>);
    }
    class H266VPS {
        static $gtype: GObject.GType<H266VPS>;
        vps_id: number;
        max_layers_minus1: number;
        max_sublayers_minus1: number;
        default_ptl_dpb_hrd_max_tid_flag: number;
        all_independent_layers_flag: number;
        layer_id: Uint8Array;
        independent_layer_flag: Uint8Array;
        max_tid_ref_present_flag: Uint8Array;
        direct_ref_layer_flag: Uint8Array;
        max_tid_il_ref_pics_plus1: Uint8Array;
        each_layer_is_an_ols_flag: number;
        ols_mode_idc: number;
        total_num_olss: number;
        num_multi_layer_olss: number;
        multi_layer_ols_idx: number[];
        num_layers_in_ols: number[];
        layer_id_in_ols: Uint8Array;
        num_output_layer_sets_minus2: number;
        ols_output_layer_flag: Uint8Array;
        num_output_layers_in_ols: number[];
        output_layer_id_in_ols: Uint8Array;
        num_sub_layers_in_layer_in_ols: Uint8Array;
        num_ptls_minus1: number;
        pt_present_flag: Uint8Array;
        ptl_max_tid: Uint8Array;
        profile_tier_level: H266ProfileTierLevel[];
        ols_ptl_idx: Uint8Array;
        num_dpb_params_minus1: number;
        sublayer_dpb_params_present_flag: number;
        dpb_max_tid: Uint8Array;
        dpb: H266DPBParameters[];
        ols_dpb_pic_width: number[];
        ols_dpb_pic_height: number[];
        ols_dpb_chroma_format: Uint8Array;
        ols_dpb_bitdepth_minus8: Uint8Array;
        ols_dpb_params_idx: Uint8Array;
        timing_hrd_params_present_flag: number;
        general_hrd_params: H266GeneralHRDParameters;
        sublayer_cpb_params_present_flag: number;
        num_ols_timing_hrd_params_minus1: number;
        hrd_max_tid: Uint8Array;
        ols_hrd_params: H266OLSHRDParameters[];
        ols_timing_hrd_idx: Uint8Array;
        extension_flag: number;
        extension_data: Uint8Array;
        valid: boolean;
    }
    class H266VUIParams {
        static $gtype: GObject.GType<H266VUIParams>;
        progressive_source_flag: number;
        interlaced_source_flag: number;
        non_packed_constraint_flag: number;
        non_projected_constraint_flag: number;
        aspect_ratio_info_present_flag: number;
        aspect_ratio_constant_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coeffs: number;
        full_range_flag: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_frame: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        par_n: number;
        par_d: number;
        constructor(properties?: Partial<{
            progressive_source_flag: number;
            interlaced_source_flag: number;
            non_packed_constraint_flag: number;
            non_projected_constraint_flag: number;
            aspect_ratio_info_present_flag: number;
            aspect_ratio_constant_flag: number;
            aspect_ratio_idc: number;
            sar_width: number;
            sar_height: number;
            overscan_info_present_flag: number;
            overscan_appropriate_flag: number;
            colour_description_present_flag: number;
            colour_primaries: number;
            transfer_characteristics: number;
            matrix_coeffs: number;
            full_range_flag: number;
            chroma_loc_info_present_flag: number;
            chroma_sample_loc_type_frame: number;
            chroma_sample_loc_type_top_field: number;
            chroma_sample_loc_type_bottom_field: number;
            par_n: number;
            par_d: number;
        }>);
    }
    class JpegFrameComponent {
        static $gtype: GObject.GType<JpegFrameComponent>;
        identifier: number;
        horizontal_factor: number;
        vertical_factor: number;
        quant_table_selector: number;
        constructor(properties?: Partial<{
            identifier: number;
            horizontal_factor: number;
            vertical_factor: number;
            quant_table_selector: number;
        }>);
    }
    class JpegFrameHdr {
        static $gtype: GObject.GType<JpegFrameHdr>;
        sample_precision: number;
        width: number;
        height: number;
        num_components: number;
        components: JpegFrameComponent[];
        constructor(properties?: Partial<{
            sample_precision: number;
            width: number;
            height: number;
            num_components: number;
            components: JpegFrameComponent[];
        }>);
    }
    class JpegHuffmanTable {
        static $gtype: GObject.GType<JpegHuffmanTable>;
        huf_bits: Uint8Array;
        huf_values: Uint8Array;
        valid: boolean;
        constructor(properties?: Partial<{
            huf_bits: Uint8Array;
            huf_values: Uint8Array;
            valid: boolean;
        }>);
    }
    class JpegHuffmanTables {
        static $gtype: GObject.GType<JpegHuffmanTables>;
        dc_tables: JpegHuffmanTable[];
        ac_tables: JpegHuffmanTable[];
        constructor(properties?: Partial<{
            dc_tables: JpegHuffmanTable[];
            ac_tables: JpegHuffmanTable[];
        }>);
    }
    class JpegQuantTable {
        static $gtype: GObject.GType<JpegQuantTable>;
        quant_precision: number;
        quant_table: number[];
        valid: boolean;
        constructor(properties?: Partial<{
            quant_precision: number;
            quant_table: number[];
            valid: boolean;
        }>);
    }
    class JpegQuantTables {
        static $gtype: GObject.GType<JpegQuantTables>;
        quant_tables: JpegQuantTable[];
        constructor(properties?: Partial<{
            quant_tables: JpegQuantTable[];
        }>);
    }
    class JpegScanComponent {
        static $gtype: GObject.GType<JpegScanComponent>;
        component_selector: number;
        dc_selector: number;
        ac_selector: number;
        constructor(properties?: Partial<{
            component_selector: number;
            dc_selector: number;
            ac_selector: number;
        }>);
    }
    class JpegScanHdr {
        static $gtype: GObject.GType<JpegScanHdr>;
        num_components: number;
        components: JpegScanComponent[];
        constructor(properties?: Partial<{
            num_components: number;
            components: JpegScanComponent[];
        }>);
    }
    class JpegSegment {
        static $gtype: GObject.GType<JpegSegment>;
        marker: JpegMarker;
        data: number;
        offset: number;
        size: number;
        parse_frame_header(): [boolean, JpegFrameHdr];
        parse_huffman_table(): [boolean, JpegHuffmanTables];
        parse_quantization_table(): [boolean, JpegQuantTables];
        parse_restart_interval(): [boolean, number];
        parse_scan_header(): [boolean, JpegScanHdr];
    }
    class LcevcMeta {
        static $gtype: GObject.GType<LcevcMeta>;
        id: number;
        static get_info(): Gst.MetaInfo;
    }
    class Mpeg4GroupOfVOP {
        static $gtype: GObject.GType<Mpeg4GroupOfVOP>;
        hours: number;
        minutes: number;
        seconds: number;
        closed: number;
        broken_link: number;
        constructor(properties?: Partial<{
            hours: number;
            minutes: number;
            seconds: number;
            closed: number;
            broken_link: number;
        }>);
    }
    class Mpeg4Packet {
        static $gtype: GObject.GType<Mpeg4Packet>;
        data: number;
        offset: number;
        size: number;
        marker_size: number;
        type: Mpeg4StartCode;
    }
    class Mpeg4SpriteTrajectory {
        static $gtype: GObject.GType<Mpeg4SpriteTrajectory>;
        vop_ref_points: number[];
        sprite_ref_points: number[];
        constructor(properties?: Partial<{
            vop_ref_points: number[];
            sprite_ref_points: number[];
        }>);
    }
    class Mpeg4VideoObjectLayer {
        static $gtype: GObject.GType<Mpeg4VideoObjectLayer>;
        random_accessible_vol: number;
        video_object_type_indication: number;
        is_object_layer_identifier: number;
        verid: number;
        priority: number;
        aspect_ratio_info: Mpeg4AspectRatioInfo;
        par_width: number;
        par_height: number;
        control_parameters: number;
        chroma_format: Mpeg4ChromaFormat;
        low_delay: number;
        vbv_parameters: number;
        first_half_bitrate: number;
        latter_half_bitrate: number;
        first_half_vbv_buffer_size: number;
        latter_half_vbv_buffer_size: number;
        first_half_vbv_occupancy: number;
        latter_half_vbv_occupancy: number;
        bit_rate: number;
        vbv_buffer_size: number;
        shape: Mpeg4VideoObjectLayerShape;
        shape_extension: number;
        vop_time_increment_resolution: number;
        vop_time_increment_bits: number;
        fixed_vop_rate: number;
        fixed_vop_time_increment: number;
        width: number;
        height: number;
        interlaced: number;
        obmc_disable: number;
        sprite_enable: Mpeg4SpriteEnable;
        sprite_width: number;
        sprite_height: number;
        sprite_left_coordinate: number;
        sprite_top_coordinate: number;
        no_of_sprite_warping_points: number;
        sprite_warping_accuracy: number;
        sprite_brightness_change: number;
        low_latency_sprite_enable: number;
        sadct_disable: number;
        not_8_bit: number;
        quant_precision: number;
        bits_per_pixel: number;
        no_gray_quant_update: number;
        composition_method: number;
        linear_composition: number;
        quant_type: number;
        load_intra_quant_mat: number;
        intra_quant_mat: Uint8Array;
        load_non_intra_quant_mat: number;
        non_intra_quant_mat: Uint8Array;
        quarter_sample: number;
        complexity_estimation_disable: number;
        resync_marker_disable: number;
        data_partitioned: number;
        reversible_vlc: number;
        newpred_enable: number;
        reduced_resolution_vop_enable: number;
        scalability: number;
        enhancement_type: number;
        short_hdr: Mpeg4VideoPlaneShortHdr;
    }
    class Mpeg4VideoObjectPlane {
        static $gtype: GObject.GType<Mpeg4VideoObjectPlane>;
        coding_type: Mpeg4VideoObjectCodingType;
        modulo_time_base: number;
        time_increment: number;
        coded: number;
        id: number;
        id_for_prediction_indication: number;
        id_for_prediction: number;
        width: number;
        height: number;
        horizontal_mc_spatial_ref: number;
        vertical_mc_spatial_ref: number;
        rounding_type: number;
        background_composition: number;
        change_conv_ratio_disable: number;
        constant_alpha: number;
        constant_alpha_value: number;
        reduced_resolution: number;
        intra_dc_vlc_thr: number;
        top_field_first: number;
        alternate_vertical_scan_flag: number;
        quant: number;
        fcode_forward: number;
        fcode_backward: number;
        shape_coding_type: number;
        load_backward_shape: number;
        ref_select_code: number;
        mb_height: number;
        mb_width: number;
        mb_num: number;
        size: number;
    }
    class Mpeg4VideoPacketHdr {
        static $gtype: GObject.GType<Mpeg4VideoPacketHdr>;
        header_extension_code: number;
        macroblock_number: number;
        quant_scale: number;
        size: number;
        constructor(properties?: Partial<{
            header_extension_code: number;
            macroblock_number: number;
            quant_scale: number;
            size: number;
        }>);
    }
    class Mpeg4VideoPlaneShortHdr {
        static $gtype: GObject.GType<Mpeg4VideoPlaneShortHdr>;
        temporal_reference: number;
        split_screen_indicator: number;
        document_camera_indicator: number;
        full_picture_freeze_release: number;
        source_format: number;
        picture_coding_type: number;
        vop_quant: number;
        pei: number;
        psupp: number;
        gob_header_empty: number;
        gob_number: number;
        gob_frame_id: number;
        quant_scale: number;
        vop_width: number;
        vop_height: number;
        num_macroblocks_in_gob: number;
        num_gobs_in_vop: number;
        size: number;
        constructor(properties?: Partial<{
            temporal_reference: number;
            split_screen_indicator: number;
            document_camera_indicator: number;
            full_picture_freeze_release: number;
            source_format: number;
            picture_coding_type: number;
            vop_quant: number;
            pei: number;
            psupp: number;
            gob_header_empty: number;
            gob_number: number;
            gob_frame_id: number;
            quant_scale: number;
            vop_width: number;
            vop_height: number;
            num_macroblocks_in_gob: number;
            num_gobs_in_vop: number;
            size: number;
        }>);
    }
    class Mpeg4VideoSignalType {
        static $gtype: GObject.GType<Mpeg4VideoSignalType>;
        type: number;
        format: number;
        range: number;
        color_description: number;
        color_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        constructor(properties?: Partial<{
            type: number;
            format: number;
            range: number;
            color_description: number;
            color_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
        }>);
    }
    class Mpeg4VisualObject {
        static $gtype: GObject.GType<Mpeg4VisualObject>;
        is_identifier: number;
        verid: number;
        priority: number;
        type: Mpeg4VisualObjectType;
    }
    class Mpeg4VisualObjectSequence {
        static $gtype: GObject.GType<Mpeg4VisualObjectSequence>;
        profile_and_level_indication: number;
        level: Mpeg4Level;
        profile: Mpeg4Profile;
    }
    class MpegVideoGop {
        static $gtype: GObject.GType<MpegVideoGop>;
        drop_frame_flag: number;
        hour: number;
        minute: number;
        second: number;
        frame: number;
        closed_gop: number;
        broken_link: number;
        constructor(properties?: Partial<{
            drop_frame_flag: number;
            hour: number;
            minute: number;
            second: number;
            frame: number;
            closed_gop: number;
            broken_link: number;
        }>);
    }
    class MpegVideoMeta {
        static $gtype: GObject.GType<MpegVideoMeta>;
        sequencehdr: MpegVideoSequenceHdr;
        sequenceext: MpegVideoSequenceExt;
        sequencedispext: MpegVideoSequenceDisplayExt;
        pichdr: MpegVideoPictureHdr;
        picext: MpegVideoPictureExt;
        quantext: MpegVideoQuantMatrixExt;
        num_slices: number;
        slice_offset: number;
        static get_info(): Gst.MetaInfo;
    }
    class MpegVideoPacket {
        static $gtype: GObject.GType<MpegVideoPacket>;
        data: number;
        type: number;
        offset: number;
        size: number;
        constructor(properties?: Partial<{
            data: number;
            type: number;
            offset: number;
            size: number;
        }>);
        parse_gop(): [boolean, MpegVideoGop];
        parse_picture_extension(): [boolean, MpegVideoPictureExt];
        parse_picture_header(): [boolean, MpegVideoPictureHdr];
        parse_quant_matrix_extension(): [boolean, MpegVideoQuantMatrixExt];
        parse_sequence_display_extension(): [boolean, MpegVideoSequenceDisplayExt];
        parse_sequence_extension(): [boolean, MpegVideoSequenceExt];
        parse_sequence_header(): [boolean, MpegVideoSequenceHdr];
        parse_sequence_scalable_extension(): [boolean, MpegVideoSequenceScalableExt];
        parse_slice_header(seq_hdr: MpegVideoSequenceHdr, seqscaleext: MpegVideoSequenceScalableExt): [boolean, MpegVideoSliceHdr];
    }
    class MpegVideoPictureExt {
        static $gtype: GObject.GType<MpegVideoPictureExt>;
        f_code: Uint8Array;
        intra_dc_precision: number;
        picture_structure: number;
        top_field_first: number;
        frame_pred_frame_dct: number;
        concealment_motion_vectors: number;
        q_scale_type: number;
        intra_vlc_format: number;
        alternate_scan: number;
        repeat_first_field: number;
        chroma_420_type: number;
        progressive_frame: number;
        composite_display: number;
        v_axis: number;
        field_sequence: number;
        sub_carrier: number;
        burst_amplitude: number;
        sub_carrier_phase: number;
        constructor(properties?: Partial<{
            f_code: Uint8Array;
            intra_dc_precision: number;
            picture_structure: number;
            top_field_first: number;
            frame_pred_frame_dct: number;
            concealment_motion_vectors: number;
            q_scale_type: number;
            intra_vlc_format: number;
            alternate_scan: number;
            repeat_first_field: number;
            chroma_420_type: number;
            progressive_frame: number;
            composite_display: number;
            v_axis: number;
            field_sequence: number;
            sub_carrier: number;
            burst_amplitude: number;
            sub_carrier_phase: number;
        }>);
    }
    class MpegVideoPictureHdr {
        static $gtype: GObject.GType<MpegVideoPictureHdr>;
        tsn: number;
        pic_type: number;
        vbv_delay: number;
        full_pel_forward_vector: number;
        full_pel_backward_vector: number;
        f_code: Uint8Array;
        constructor(properties?: Partial<{
            tsn: number;
            pic_type: number;
            vbv_delay: number;
            full_pel_forward_vector: number;
            full_pel_backward_vector: number;
            f_code: Uint8Array;
        }>);
    }
    class MpegVideoQuantMatrixExt {
        static $gtype: GObject.GType<MpegVideoQuantMatrixExt>;
        load_intra_quantiser_matrix: number;
        intra_quantiser_matrix: Uint8Array;
        load_non_intra_quantiser_matrix: number;
        non_intra_quantiser_matrix: Uint8Array;
        load_chroma_intra_quantiser_matrix: number;
        chroma_intra_quantiser_matrix: Uint8Array;
        load_chroma_non_intra_quantiser_matrix: number;
        chroma_non_intra_quantiser_matrix: Uint8Array;
        constructor(properties?: Partial<{
            load_intra_quantiser_matrix: number;
            intra_quantiser_matrix: Uint8Array;
            load_non_intra_quantiser_matrix: number;
            non_intra_quantiser_matrix: Uint8Array;
            load_chroma_intra_quantiser_matrix: number;
            chroma_intra_quantiser_matrix: Uint8Array;
            load_chroma_non_intra_quantiser_matrix: number;
            chroma_non_intra_quantiser_matrix: Uint8Array;
        }>);
    }
    class MpegVideoSequenceDisplayExt {
        static $gtype: GObject.GType<MpegVideoSequenceDisplayExt>;
        video_format: number;
        colour_description_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        display_horizontal_size: number;
        display_vertical_size: number;
        constructor(properties?: Partial<{
            video_format: number;
            colour_description_flag: number;
            colour_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
            display_horizontal_size: number;
            display_vertical_size: number;
        }>);
    }
    class MpegVideoSequenceExt {
        static $gtype: GObject.GType<MpegVideoSequenceExt>;
        profile: number;
        level: number;
        progressive: number;
        chroma_format: number;
        horiz_size_ext: number;
        vert_size_ext: number;
        bitrate_ext: number;
        vbv_buffer_size_extension: number;
        low_delay: number;
        fps_n_ext: number;
        fps_d_ext: number;
        profile_level_escape_bit: number;
        constructor(properties?: Partial<{
            profile: number;
            level: number;
            progressive: number;
            chroma_format: number;
            horiz_size_ext: number;
            vert_size_ext: number;
            bitrate_ext: number;
            vbv_buffer_size_extension: number;
            low_delay: number;
            fps_n_ext: number;
            fps_d_ext: number;
            profile_level_escape_bit: number;
        }>);
    }
    class MpegVideoSequenceHdr {
        static $gtype: GObject.GType<MpegVideoSequenceHdr>;
        width: number;
        height: number;
        aspect_ratio_info: number;
        frame_rate_code: number;
        bitrate_value: number;
        vbv_buffer_size_value: number;
        constrained_parameters_flag: number;
        load_intra_quantiser_matrix: number;
        intra_quantizer_matrix: Uint8Array;
        load_non_intra_quantiser_matrix: number;
        non_intra_quantizer_matrix: Uint8Array;
        par_w: number;
        par_h: number;
        fps_n: number;
        fps_d: number;
        bitrate: number;
        constructor(properties?: Partial<{
            width: number;
            height: number;
            aspect_ratio_info: number;
            frame_rate_code: number;
            bitrate_value: number;
            vbv_buffer_size_value: number;
            constrained_parameters_flag: number;
            load_intra_quantiser_matrix: number;
            intra_quantizer_matrix: Uint8Array;
            load_non_intra_quantiser_matrix: number;
            non_intra_quantizer_matrix: Uint8Array;
            par_w: number;
            par_h: number;
            fps_n: number;
            fps_d: number;
            bitrate: number;
        }>);
    }
    class MpegVideoSequenceScalableExt {
        static $gtype: GObject.GType<MpegVideoSequenceScalableExt>;
        scalable_mode: number;
        layer_id: number;
        lower_layer_prediction_horizontal_size: number;
        lower_layer_prediction_vertical_size: number;
        horizontal_subsampling_factor_m: number;
        horizontal_subsampling_factor_n: number;
        vertical_subsampling_factor_m: number;
        vertical_subsampling_factor_n: number;
        picture_mux_enable: number;
        mux_to_progressive_sequence: number;
        picture_mux_order: number;
        picture_mux_factor: number;
        constructor(properties?: Partial<{
            scalable_mode: number;
            layer_id: number;
            lower_layer_prediction_horizontal_size: number;
            lower_layer_prediction_vertical_size: number;
            horizontal_subsampling_factor_m: number;
            horizontal_subsampling_factor_n: number;
            vertical_subsampling_factor_m: number;
            vertical_subsampling_factor_n: number;
            picture_mux_enable: number;
            mux_to_progressive_sequence: number;
            picture_mux_order: number;
            picture_mux_factor: number;
        }>);
    }
    class MpegVideoSliceHdr {
        static $gtype: GObject.GType<MpegVideoSliceHdr>;
        vertical_position: number;
        vertical_position_ext: number;
        priority_breakpoint: number;
        quantiser_scale_code: number;
        slice_ext_flag: number;
        intra_slice: number;
        slice_picture_id_enable: number;
        slice_picture_id: number;
        header_size: number;
        mb_row: number;
        mb_column: number;
        constructor(properties?: Partial<{
            vertical_position: number;
            vertical_position_ext: number;
            priority_breakpoint: number;
            quantiser_scale_code: number;
            slice_ext_flag: number;
            intra_slice: number;
            slice_picture_id_enable: number;
            slice_picture_id: number;
            header_size: number;
            mb_row: number;
            mb_column: number;
        }>);
    }
    class VC1AdvancedSeqHdr {
        static $gtype: GObject.GType<VC1AdvancedSeqHdr>;
        level: VC1Level;
        frmrtq_postproc: number;
        bitrtq_postproc: number;
        postprocflag: number;
        max_coded_width: number;
        max_coded_height: number;
        pulldown: number;
        interlace: number;
        tfcntrflag: number;
        finterpflag: number;
        psf: number;
        display_ext: number;
        disp_horiz_size: number;
        disp_vert_size: number;
        aspect_ratio_flag: number;
        aspect_ratio: number;
        aspect_horiz_size: number;
        aspect_vert_size: number;
        framerate_flag: number;
        framerateind: number;
        frameratenr: number;
        frameratedr: number;
        framerateexp: number;
        color_format_flag: number;
        color_prim: number;
        transfer_char: number;
        matrix_coef: number;
        hrd_param_flag: number;
        colordiff_format: number;
        hrd_param: VC1HrdParam;
        framerate: number;
        bitrate: number;
        par_n: number;
        par_d: number;
        fps_n: number;
        fps_d: number;
        entrypoint: VC1EntryPointHdr;
    }
    class VC1BDU {
        static $gtype: GObject.GType<VC1BDU>;
        type: VC1StartCode;
        size: number;
        sc_offset: number;
        offset: number;
        data: number;
    }
    class VC1BitPlanes {
        static $gtype: GObject.GType<VC1BitPlanes>;
        acpred: number;
        fieldtx: number;
        overflags: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;
        forwardmb: number;
        size: number;
        constructor(properties?: Partial<{
            acpred: number;
            fieldtx: number;
            overflags: number;
            mvtypemb: number;
            skipmb: number;
            directmb: number;
            forwardmb: number;
            size: number;
        }>);
    }
    class VC1EntryPointHdr {
        static $gtype: GObject.GType<VC1EntryPointHdr>;
        broken_link: number;
        closed_entry: number;
        panscan_flag: number;
        refdist_flag: number;
        loopfilter: number;
        fastuvmc: number;
        extended_mv: number;
        dquant: number;
        vstransform: number;
        overlap: number;
        quantizer: number;
        coded_size_flag: number;
        coded_width: number;
        coded_height: number;
        extended_dmv: number;
        range_mapy_flag: number;
        range_mapy: number;
        range_mapuv_flag: number;
        range_mapuv: number;
        hrd_full: Uint8Array;
        constructor(properties?: Partial<{
            broken_link: number;
            closed_entry: number;
            panscan_flag: number;
            refdist_flag: number;
            loopfilter: number;
            fastuvmc: number;
            extended_mv: number;
            dquant: number;
            vstransform: number;
            overlap: number;
            quantizer: number;
            coded_size_flag: number;
            coded_width: number;
            coded_height: number;
            extended_dmv: number;
            range_mapy_flag: number;
            range_mapy: number;
            range_mapuv_flag: number;
            range_mapuv: number;
            hrd_full: Uint8Array;
        }>);
    }
    class VC1FrameHdr {
        static $gtype: GObject.GType<VC1FrameHdr>;
        ptype: VC1PictureType;
        interpfrm: number;
        halfqp: number;
        transacfrm: number;
        transdctab: number;
        pqindex: number;
        pquantizer: number;
        pquant: number;
        profile: number;
        dquant: number;
        vopdquant: VC1VopDquant;
        header_size: number;
    }
    class VC1FrameLayer {
        static $gtype: GObject.GType<VC1FrameLayer>;
        key: number;
        framesize: number;
        timestamp: number;
        next_framelayer_offset: number;
        skiped_p_frame: number;
        constructor(properties?: Partial<{
            key: number;
            framesize: number;
            timestamp: number;
            next_framelayer_offset: number;
            skiped_p_frame: number;
        }>);
    }
    class VC1HrdParam {
        static $gtype: GObject.GType<VC1HrdParam>;
        hrd_num_leaky_buckets: number;
        bit_rate_exponent: number;
        buffer_size_exponent: number;
        hrd_rate: number[];
        hrd_buffer: number[];
        constructor(properties?: Partial<{
            hrd_num_leaky_buckets: number;
            bit_rate_exponent: number;
            buffer_size_exponent: number;
            hrd_rate: number[];
            hrd_buffer: number[];
        }>);
    }
    class VC1PicAdvanced {
        static $gtype: GObject.GType<VC1PicAdvanced>;
        fcm: VC1FrameCodingMode;
        tfcntr: number;
        rptfrm: number;
        tff: number;
        rff: number;
        ps_present: number;
        ps_hoffset: number;
        ps_voffset: number;
        ps_width: number;
        ps_height: number;
        rndctrl: number;
        uvsamp: number;
        postproc: number;
        mvrange: number;
        mvmode: number;
        mvtab: number;
        cbptab: number;
        ttmbf: number;
        ttfrm: number;
        bfraction: number;
        mvmode2: number;
        lumscale: number;
        lumshift: number;
        bf: number;
        condover: number;
        transacfrm2: number;
        acpred: number;
        overflags: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;
        forwardmb: number;
        fieldtx: number;
        intcomp: number;
        dmvrange: number;
        mbmodetab: number;
        imvtab: number;
        icbptab: number;
        mvbptab2: number;
        mvbptab4: number;
        mvswitch4: number;
        refdist: number;
        fptype: number;
        numref: number;
        reffield: number;
        lumscale2: number;
        lumshift2: number;
        intcompfield: number;
    }
    class VC1PicSimpleMain {
        static $gtype: GObject.GType<VC1PicSimpleMain>;
        frmcnt: number;
        mvrange: number;
        rangeredfrm: number;
        respic: number;
        transacfrm2: number;
        bf: number;
        mvmode: number;
        mvtab: number;
        ttmbf: number;
        mvmode2: number;
        lumscale: number;
        lumshift: number;
        cbptab: number;
        ttfrm: number;
        bfraction: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;
        constructor(properties?: Partial<{
            frmcnt: number;
            mvrange: number;
            rangeredfrm: number;
            respic: number;
            transacfrm2: number;
            bf: number;
            mvmode: number;
            mvtab: number;
            ttmbf: number;
            mvmode2: number;
            lumscale: number;
            lumshift: number;
            cbptab: number;
            ttfrm: number;
            bfraction: number;
            mvtypemb: number;
            skipmb: number;
            directmb: number;
        }>);
    }
    abstract class VC1Picture {
        static $gtype: GObject.GType<VC1Picture>;
    }
    class VC1SeqHdr {
        static $gtype: GObject.GType<VC1SeqHdr>;
        profile: VC1Profile;
        mb_height: number;
        mb_width: number;
        mb_stride: number;
    }
    class VC1SeqLayer {
        static $gtype: GObject.GType<VC1SeqLayer>;
        numframes: number;
        struct_a: VC1SeqStructA;
    }
    class VC1SeqStructA {
        static $gtype: GObject.GType<VC1SeqStructA>;
        vert_size: number;
        horiz_size: number;
        constructor(properties?: Partial<{
            vert_size: number;
            horiz_size: number;
        }>);
    }
    class VC1SeqStructB {
        static $gtype: GObject.GType<VC1SeqStructB>;
        level: VC1Level;
        cbr: number;
        framerate: number;
        hrd_buffer: number;
        hrd_rate: number;
    }
    class VC1SeqStructC {
        static $gtype: GObject.GType<VC1SeqStructC>;
        profile: VC1Profile;
        frmrtq_postproc: number;
        bitrtq_postproc: number;
        res_sprite: number;
        loop_filter: number;
        multires: number;
        fastuvmc: number;
        extended_mv: number;
        dquant: number;
        vstransform: number;
        overlap: number;
        syncmarker: number;
        rangered: number;
        maxbframes: number;
        quantizer: number;
        finterpflag: number;
        framerate: number;
        bitrate: number;
        coded_width: number;
        coded_height: number;
        wmvp: number;
        slice_code: number;
    }
    class VC1SliceHdr {
        static $gtype: GObject.GType<VC1SliceHdr>;
        slice_addr: number;
        header_size: number;
        constructor(properties?: Partial<{
            slice_addr: number;
            header_size: number;
        }>);
    }
    class VC1VopDquant {
        static $gtype: GObject.GType<VC1VopDquant>;
        pqdiff: number;
        abspq: number;
        altpquant: number;
        dquantfrm: number;
        dqprofile: number;
        dqbedge: number;
        unused: number;
        dqbilevel: number;
        constructor(properties?: Partial<{
            pqdiff: number;
            abspq: number;
            altpquant: number;
            dquantfrm: number;
            dqprofile: number;
            dqbedge: number;
            unused: number;
            dqbilevel: number;
        }>);
    }
    class Vp8FrameHdr {
        static $gtype: GObject.GType<Vp8FrameHdr>;
        key_frame: number;
        version: number;
        show_frame: number;
        data_chunk_size: number;
        first_part_size: number;
        width: number;
        height: number;
        horiz_scale_code: number;
        vert_scale_code: number;
        color_space: number;
        clamping_type: number;
        filter_type: number;
        loop_filter_level: number;
        sharpness_level: number;
        log2_nbr_of_dct_partitions: number;
        partition_size: number[];
        quant_indices: Vp8QuantIndices;
        token_probs: Vp8TokenProbs;
        mv_probs: Vp8MvProbs;
        mode_probs: Vp8ModeProbs;
        refresh_entropy_probs: number;
        refresh_last: number;
        refresh_golden_frame: number;
        refresh_alternate_frame: number;
        copy_buffer_to_golden: number;
        copy_buffer_to_alternate: number;
        sign_bias_golden: number;
        sign_bias_alternate: number;
        mb_no_skip_coeff: number;
        prob_skip_false: number;
        prob_intra: number;
        prob_last: number;
        prob_gf: number;
        rd_range: number;
        rd_value: number;
        rd_count: number;
        header_size: number;
        constructor(properties?: Partial<{
            key_frame: number;
            version: number;
            show_frame: number;
            data_chunk_size: number;
            first_part_size: number;
            width: number;
            height: number;
            horiz_scale_code: number;
            vert_scale_code: number;
            color_space: number;
            clamping_type: number;
            filter_type: number;
            loop_filter_level: number;
            sharpness_level: number;
            log2_nbr_of_dct_partitions: number;
            partition_size: number[];
            quant_indices: Vp8QuantIndices;
            token_probs: Vp8TokenProbs;
            mv_probs: Vp8MvProbs;
            mode_probs: Vp8ModeProbs;
            refresh_entropy_probs: number;
            refresh_last: number;
            refresh_golden_frame: number;
            refresh_alternate_frame: number;
            copy_buffer_to_golden: number;
            copy_buffer_to_alternate: number;
            sign_bias_golden: number;
            sign_bias_alternate: number;
            mb_no_skip_coeff: number;
            prob_skip_false: number;
            prob_intra: number;
            prob_last: number;
            prob_gf: number;
            rd_range: number;
            rd_value: number;
            rd_count: number;
            header_size: number;
        }>);
    }
    class Vp8MbLfAdjustments {
        static $gtype: GObject.GType<Vp8MbLfAdjustments>;
        loop_filter_adj_enable: number;
        mode_ref_lf_delta_update: number;
        ref_frame_delta: Uint8Array;
        mb_mode_delta: Uint8Array;
        constructor(properties?: Partial<{
            loop_filter_adj_enable: number;
            mode_ref_lf_delta_update: number;
            ref_frame_delta: Uint8Array;
            mb_mode_delta: Uint8Array;
        }>);
    }
    class Vp8ModeProbs {
        static $gtype: GObject.GType<Vp8ModeProbs>;
        y_prob: Uint8Array;
        uv_prob: Uint8Array;
        constructor(properties?: Partial<{
            y_prob: Uint8Array;
            uv_prob: Uint8Array;
        }>);
    }
    class Vp8MvProbs {
        static $gtype: GObject.GType<Vp8MvProbs>;
        prob: Uint8Array;
        constructor(properties?: Partial<{
            prob: Uint8Array;
        }>);
    }
    class Vp8Parser {
        static $gtype: GObject.GType<Vp8Parser>;
        segmentation: Vp8Segmentation;
        mb_lf_adjust: Vp8MbLfAdjustments;
        token_probs: Vp8TokenProbs;
        mv_probs: Vp8MvProbs;
        mode_probs: Vp8ModeProbs;
        constructor(properties?: Partial<{
            segmentation: Vp8Segmentation;
            mb_lf_adjust: Vp8MbLfAdjustments;
            token_probs: Vp8TokenProbs;
            mv_probs: Vp8MvProbs;
            mode_probs: Vp8ModeProbs;
        }>);
        init(): void;
        parse_frame_header(frame_hdr: Vp8FrameHdr, data: number, size: bigint | number): Vp8ParserResult;
    }
    class Vp8QuantIndices {
        static $gtype: GObject.GType<Vp8QuantIndices>;
        y_ac_qi: number;
        y_dc_delta: number;
        y2_dc_delta: number;
        y2_ac_delta: number;
        uv_dc_delta: number;
        uv_ac_delta: number;
        constructor(properties?: Partial<{
            y_ac_qi: number;
            y_dc_delta: number;
            y2_dc_delta: number;
            y2_ac_delta: number;
            uv_dc_delta: number;
            uv_ac_delta: number;
        }>);
    }
    class Vp8RangeDecoder {
        static $gtype: GObject.GType<Vp8RangeDecoder>;
        buf: number;
        buf_size: number;
        constructor(properties?: Partial<{
            buf: number;
            buf_size: number;
        }>);
        get_pos(): number;
        get_state(state: Vp8RangeDecoderState): void;
        init(buf: number, buf_size: number): boolean;
        read(prob: number): number;
        read_literal(bits: number): number;
    }
    class Vp8RangeDecoderState {
        static $gtype: GObject.GType<Vp8RangeDecoderState>;
        range: number;
        value: number;
        count: number;
        constructor(properties?: Partial<{
            range: number;
            value: number;
            count: number;
        }>);
    }
    class Vp8Segmentation {
        static $gtype: GObject.GType<Vp8Segmentation>;
        segmentation_enabled: number;
        update_mb_segmentation_map: number;
        update_segment_feature_data: number;
        segment_feature_mode: number;
        quantizer_update_value: Uint8Array;
        lf_update_value: Uint8Array;
        segment_prob: Uint8Array;
        constructor(properties?: Partial<{
            segmentation_enabled: number;
            update_mb_segmentation_map: number;
            update_segment_feature_data: number;
            segment_feature_mode: number;
            quantizer_update_value: Uint8Array;
            lf_update_value: Uint8Array;
            segment_prob: Uint8Array;
        }>);
    }
    class Vp8TokenProbs {
        static $gtype: GObject.GType<Vp8TokenProbs>;
        prob: Uint8Array;
        constructor(properties?: Partial<{
            prob: Uint8Array;
        }>);
    }
    class Vp9FrameHdr {
        static $gtype: GObject.GType<Vp9FrameHdr>;
        profile: number;
        show_existing_frame: number;
        frame_to_show: number;
        frame_type: number;
        show_frame: number;
        error_resilient_mode: number;
        width: number;
        height: number;
        display_size_enabled: number;
        display_width: number;
        display_height: number;
        frame_context_idx: number;
        intra_only: number;
        reset_frame_context: number;
        refresh_frame_flags: number;
        ref_frame_indices: number[];
        ref_frame_sign_bias: number[];
        allow_high_precision_mv: number;
        mcomp_filter_type: number;
        refresh_frame_context: number;
        frame_parallel_decoding_mode: number;
        loopfilter: Vp9LoopFilter;
        quant_indices: Vp9QuantIndices;
        segmentation: Vp9SegmentationInfo;
        log2_tile_rows: number;
        log2_tile_columns: number;
        first_partition_size: number;
        lossless_flag: number;
        frame_header_length_in_bytes: number;
        constructor(properties?: Partial<{
            profile: number;
            show_existing_frame: number;
            frame_to_show: number;
            frame_type: number;
            show_frame: number;
            error_resilient_mode: number;
            width: number;
            height: number;
            display_size_enabled: number;
            display_width: number;
            display_height: number;
            frame_context_idx: number;
            intra_only: number;
            reset_frame_context: number;
            refresh_frame_flags: number;
            ref_frame_indices: number[];
            ref_frame_sign_bias: number[];
            allow_high_precision_mv: number;
            mcomp_filter_type: number;
            refresh_frame_context: number;
            frame_parallel_decoding_mode: number;
            loopfilter: Vp9LoopFilter;
            quant_indices: Vp9QuantIndices;
            segmentation: Vp9SegmentationInfo;
            log2_tile_rows: number;
            log2_tile_columns: number;
            first_partition_size: number;
            lossless_flag: number;
            frame_header_length_in_bytes: number;
        }>);
    }
    class Vp9LoopFilter {
        static $gtype: GObject.GType<Vp9LoopFilter>;
        filter_level: number;
        sharpness_level: number;
        mode_ref_delta_enabled: number;
        mode_ref_delta_update: number;
        update_ref_deltas: Uint8Array;
        ref_deltas: Uint8Array;
        update_mode_deltas: Uint8Array;
        mode_deltas: Uint8Array;
        constructor(properties?: Partial<{
            filter_level: number;
            sharpness_level: number;
            mode_ref_delta_enabled: number;
            mode_ref_delta_update: number;
            update_ref_deltas: Uint8Array;
            ref_deltas: Uint8Array;
            update_mode_deltas: Uint8Array;
            mode_deltas: Uint8Array;
        }>);
    }
    class Vp9Parser {
        static $gtype: GObject.GType<Vp9Parser>;
        priv: null;
        subsampling_x: number;
        subsampling_y: number;
        bit_depth: number;
        color_space: number;
        color_range: number;
        mb_segment_tree_probs: Uint8Array;
        segment_pred_probs: Uint8Array;
        segmentation: Vp9Segmentation[];
        constructor(properties?: Partial<{
            priv: null;
            subsampling_x: number;
            subsampling_y: number;
            bit_depth: number;
            color_space: number;
            color_range: number;
            mb_segment_tree_probs: Uint8Array;
            segment_pred_probs: Uint8Array;
            segmentation: Vp9Segmentation[];
        }>);
        free(): void;
        parse_frame_header(frame_hdr: Vp9FrameHdr, data: number, size: bigint | number): Vp9ParserResult;
        parse_superframe_info(superframe_info: Vp9SuperframeInfo, data: number, size: bigint | number): Vp9ParserResult;
    }
    class Vp9QuantIndices {
        static $gtype: GObject.GType<Vp9QuantIndices>;
        y_ac_qi: number;
        y_dc_delta: number;
        uv_dc_delta: number;
        uv_ac_delta: number;
        constructor(properties?: Partial<{
            y_ac_qi: number;
            y_dc_delta: number;
            uv_dc_delta: number;
            uv_ac_delta: number;
        }>);
    }
    class Vp9Segmentation {
        static $gtype: GObject.GType<Vp9Segmentation>;
        filter_level: Uint8Array;
        luma_ac_quant_scale: number;
        luma_dc_quant_scale: number;
        chroma_ac_quant_scale: number;
        chroma_dc_quant_scale: number;
        reference_frame_enabled: number;
        reference_frame: number;
        reference_skip: number;
        constructor(properties?: Partial<{
            filter_level: Uint8Array;
            luma_ac_quant_scale: number;
            luma_dc_quant_scale: number;
            chroma_ac_quant_scale: number;
            chroma_dc_quant_scale: number;
            reference_frame_enabled: number;
            reference_frame: number;
            reference_skip: number;
        }>);
    }
    class Vp9SegmentationInfo {
        static $gtype: GObject.GType<Vp9SegmentationInfo>;
        enabled: number;
        update_map: number;
        update_tree_probs: Uint8Array;
        tree_probs: Uint8Array;
        update_pred_probs: Uint8Array;
        pred_probs: Uint8Array;
        abs_delta: number;
        temporal_update: number;
        update_data: number;
        data: Vp9SegmentationInfoData[];
        constructor(properties?: Partial<{
            enabled: number;
            update_map: number;
            update_tree_probs: Uint8Array;
            tree_probs: Uint8Array;
            update_pred_probs: Uint8Array;
            pred_probs: Uint8Array;
            abs_delta: number;
            temporal_update: number;
            update_data: number;
            data: Vp9SegmentationInfoData[];
        }>);
    }
    class Vp9SegmentationInfoData {
        static $gtype: GObject.GType<Vp9SegmentationInfoData>;
        alternate_quantizer_enabled: number;
        alternate_quantizer: number;
        alternate_loop_filter_enabled: number;
        alternate_loop_filter: number;
        reference_frame_enabled: number;
        reference_frame: number;
        reference_skip: number;
        constructor(properties?: Partial<{
            alternate_quantizer_enabled: number;
            alternate_quantizer: number;
            alternate_loop_filter_enabled: number;
            alternate_loop_filter: number;
            reference_frame_enabled: number;
            reference_frame: number;
            reference_skip: number;
        }>);
    }
    class Vp9SuperframeInfo {
        static $gtype: GObject.GType<Vp9SuperframeInfo>;
        bytes_per_framesize: number;
        frames_in_superframe: number;
        frame_sizes: number[];
        superframe_index_size: number;
        constructor(properties?: Partial<{
            bytes_per_framesize: number;
            frames_in_superframe: number;
            frame_sizes: number[];
            superframe_index_size: number;
        }>);
    }
    const __name__: string;
    const __version__: string;
}
export default GstCodecParsers;
}
declare module 'gi://GstCodecParsers' {
    import GstCodecParsers10 from 'gi://GstCodecParsers?version=1.0';
    export default GstCodecParsers10;
}
