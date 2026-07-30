declare module 'gi://GstMpegts?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstMpegts {
    enum ATSCDescriptorType {
        STUFFING,
        AC3,
        CAPTION_SERVICE,
        CONTENT_ADVISORY,
        EXTENDED_CHANNEL_NAME,
        SERVICE_LOCATION,
        TIME_SHIFTED_SERVICE,
        COMPONENT_NAME,
        DCC_DEPARTING_REQUEST,
        DCC_ARRIVING_REQUEST,
        REDISTRIBUTION_CONTROL,
        GENRE,
        PRIVATE_INFORMATION,
        EAC3,
        ENHANCED_SIGNALING,
        DATA_SERVICE,
        PID_COUNT,
        DOWNLOAD_DESCRIPTOR,
        MULTIPROTOCOL_ENCAPSULATION,
        MODULE_LINK,
        CRC32,
        GROUP_LINK,
    }
    enum ATSCStreamType {
        DCII_VIDEO,
        AUDIO_AC3,
        SUBTITLING,
        ISOCH_DATA,
        SIT,
        AUDIO_EAC3,
        AUDIO_DTS_HD,
    }
    enum AtscMGTTableType {
        EIT0,
        EIT127,
        ETT0,
        ETT127,
    }
    enum CableOuterFECScheme {
        UNDEFINED,
        NONE,
        RS_204_188,
    }
    enum ComponentStreamContent {
        MPEG2_VIDEO,
        MPEG1_LAYER2_AUDIO,
        TELETEXT_OR_SUBTITLE,
        AC_3,
        AVC,
        AAC,
        DTS,
        SRM_CPCM,
    }
    enum ContentNibbleHi {
        MOVIE_DRAMA,
        NEWS_CURRENT_AFFAIRS,
        SHOW_GAME_SHOW,
        SPORTS,
        CHILDREN_YOUTH_PROGRAM,
        MUSIC_BALLET_DANCE,
        ARTS_CULTURE,
        SOCIAL_POLITICAL_ECONOMICS,
        EDUCATION_SCIENCE_FACTUAL,
        LEISURE_HOBBIES,
        SPECIAL_CHARACTERISTICS,
    }
    enum DVBCodeRate {
        NONE,
        "1_2",
        "2_3",
        "3_4",
        "4_5",
        "5_6",
        "6_7",
        "7_8",
        "8_9",
        AUTO,
        "3_5",
        "9_10",
        "2_5",
    }
    enum DVBDescriptorType {
        NETWORK_NAME,
        SERVICE_LIST,
        STUFFING,
        SATELLITE_DELIVERY_SYSTEM,
        CABLE_DELIVERY_SYSTEM,
        VBI_DATA,
        VBI_TELETEXT,
        BOUQUET_NAME,
        SERVICE,
        COUNTRY_AVAILABILITY,
        LINKAGE,
        NVOD_REFERENCE,
        TIME_SHIFTED_SERVICE,
        SHORT_EVENT,
        EXTENDED_EVENT,
        TIME_SHIFTED_EVENT,
        COMPONENT,
        MOSAIC,
        STREAM_IDENTIFIER,
        CA_IDENTIFIER,
        CONTENT,
        PARENTAL_RATING,
        TELETEXT,
        TELEPHONE,
        LOCAL_TIME_OFFSET,
        SUBTITLING,
        TERRESTRIAL_DELIVERY_SYSTEM,
        MULTILINGUAL_NETWORK_NAME,
        MULTILINGUAL_BOUQUET_NAME,
        MULTILINGUAL_SERVICE_NAME,
        MULTILINGUAL_COMPONENT,
        PRIVATE_DATA_SPECIFIER,
        SERVICE_MOVE,
        SHORT_SMOOTHING_BUFFER,
        FREQUENCY_LIST,
        PARTIAL_TRANSPORT_STREAM,
        DATA_BROADCAST,
        SCRAMBLING,
        DATA_BROADCAST_ID,
        TRANSPORT_STREAM,
        DSNG,
        PDC,
        AC3,
        ANCILLARY_DATA,
        CELL_LIST,
        CELL_FREQUENCY_LINK,
        ANNOUNCEMENT_SUPPORT,
        APPLICATION_SIGNALLING,
        ADAPTATION_FIELD_DATA,
        SERVICE_IDENTIFIER,
        SERVICE_AVAILABILITY,
        DEFAULT_AUTHORITY,
        RELATED_CONTENT,
        TVA_ID,
        CONTENT_IDENTIFIER,
        TIMESLICE_FEC_IDENTIFIER,
        ECM_REPETITION_RATE,
        S2_SATELLITE_DELIVERY_SYSTEM,
        ENHANCED_AC3,
        DTS,
        AAC,
        XAIT_LOCATION,
        FTA_CONTENT_MANAGEMENT,
        EXTENSION,
    }
    enum DVBExtendedDescriptorType {
        IMAGE_ICON,
        CPCM_DELIVERY_SIGNALLING,
        CP,
        CP_IDENTIFIER,
        T2_DELIVERY_SYSTEM,
        SH_DELIVERY_SYSTEM,
        SUPPLEMENTARY_AUDIO,
        NETWORK_CHANGE_NOTIFY,
        MESSAGE,
        TARGET_REGION,
        TARGET_REGION_NAME,
        SERVICE_RELOCATED,
        XAIT_PID,
        C2_DELIVERY_SYSTEM,
        DTS_HD_AUDIO_STREAM,
        DTS_NEUTRAL,
        VIDEO_DEPTH_RANGE,
        T2MI,
        URI_LINKAGE,
        AC4,
        AUDIO_PRESELECTION,
    }
    enum DVBLinkageHandOverType {
        RESERVED,
        IDENTICAL,
        LOCAL_VARIATION,
        ASSOCIATED,
    }
    enum DVBLinkageType {
        RESERVED_00,
        INFORMATION,
        EPG,
        CA_REPLACEMENT,
        TS_CONTAINING_COMPLETE_SI,
        SERVICE_REPLACEMENT,
        DATA_BROADCAST,
        RCS_MAP,
        MOBILE_HAND_OVER,
        SYSTEM_SOFTWARE_UPDATE,
        TS_CONTAINING_SSU,
        IP_MAC_NOTIFICATION,
        TS_CONTAINING_INT,
        EVENT,
        EXTENDED_EVENT,
    }
    enum DVBScramblingModeType {
        RESERVED,
        CSA1,
        CSA2,
        CSA3_STANDARD,
        CSA3_MINIMAL_ENHANCED,
        CSA3_FULL_ENHANCED,
        CISSA,
        ATIS_0,
        ATIS_F,
    }
    enum DVBServiceType {
        RESERVED_00,
        DIGITAL_TELEVISION,
        DIGITAL_RADIO_SOUND,
        TELETEXT,
        NVOD_REFERENCE,
        NVOD_TIME_SHIFTED,
        MOSAIC,
        FM_RADIO,
        DVB_SRM,
        RESERVED_09,
        ADVANCED_CODEC_DIGITAL_RADIO_SOUND,
        ADVANCED_CODEC_MOSAIC,
        DATA_BROADCAST,
        RESERVED_0D_COMMON_INTERFACE,
        RCS_MAP,
        RCS_FLS,
        DVB_MHP,
        MPEG2_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_SD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_SD_NVOD_REFERENCE,
        ADVANCED_CODEC_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_HD_NVOD_REFERENCE,
        ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE,
        RESERVED_FF,
    }
    enum DVBTeletextType {
        NITIAL_PAGE,
        UBTITLE_PAGE,
        DDITIONAL_INFO_PAGE,
        ROGRAMME_SCHEDULE_PAGE,
        EARING_IMPAIRED_PAGE,
    }
    enum DescriptorType {
        RESERVED_00,
        RESERVED_01,
        VIDEO_STREAM,
        AUDIO_STREAM,
        HIERARCHY,
        REGISTRATION,
        DATA_STREAM_ALIGNMENT,
        TARGET_BACKGROUND_GRID,
        VIDEO_WINDOW,
        CA,
        ISO_639_LANGUAGE,
        SYSTEM_CLOCK,
        MULTIPLEX_BUFFER_UTILISATION,
        COPYRIGHT,
        MAXIMUM_BITRATE,
        PRIVATE_DATA_INDICATOR,
        SMOOTHING_BUFFER,
        STD,
        IBP,
        DSMCC_CAROUSEL_IDENTIFIER,
        DSMCC_ASSOCIATION_TAG,
        DSMCC_DEFERRED_ASSOCIATION_TAG,
        DSMCC_NPT_REFERENCE,
        DSMCC_NPT_ENDPOINT,
        DSMCC_STREAM_MODE,
        DSMCC_STREAM_EVENT,
        MPEG4_VIDEO,
        MPEG4_AUDIO,
        IOD,
        SL,
        FMC,
        EXTERNAL_ES_ID,
        MUX_CODE,
        FMX_BUFFER_SIZE,
        MULTIPLEX_BUFFER,
        CONTENT_LABELING,
        METADATA_POINTER,
        METADATA,
        METADATA_STD,
        AVC_VIDEO,
        IPMP,
        AVC_TIMING_AND_HRD,
        MPEG2_AAC_AUDIO,
        FLEX_MUX_TIMING,
        MPEG4_TEXT,
        MPEG4_AUDIO_EXTENSION,
        AUXILIARY_VIDEO_STREAM,
        SVC_EXTENSION,
        MVC_EXTENSION,
        J2K_VIDEO,
        MVC_OPERATION_POINT,
        MPEG2_STEREOSCOPIC_VIDEO_FORMAT,
        STEREOSCOPIC_PROGRAM_INFO,
        STEREOSCOPIC_VIDEO_INFO,
        EXTENSION,
    }
    enum ExtendedDescriptorType {
        MTS_DESC_EXT_JXS_VIDEO,
    }
    enum HdmvStreamType {
        AUDIO_LPCM,
        AUDIO_AC3,
        AUDIO_DTS,
        AUDIO_AC3_TRUE_HD,
        AUDIO_AC3_PLUS,
        AUDIO_DTS_HD,
        AUDIO_DTS_HD_MASTER_AUDIO,
        AUDIO_EAC3,
        SUBPICTURE_PGS,
        IGS,
        SUBTITLE,
        AUDIO_AC3_PLUS_SECONDARY,
        AUDIO_DTS_HD_SECONDARY,
    }
    enum ISDBDescriptorType {
        HIERARCHICAL_TRANSMISSION,
        DIGITAL_COPY_CONTROL,
        NETWORK_IDENTIFICATION,
        PARTIAL_TS_TIME,
        AUDIO_COMPONENT,
        HYPERLINK,
        TARGET_REGION,
        DATA_CONTENT,
        VIDEO_DECODE_CONTROL,
        DOWNLOAD_CONTENT,
        CA_EMM_TS,
        CA_CONTRACT_INFORMATION,
        CA_SERVICE,
        TS_INFORMATION,
        EXTENDED_BROADCASTER,
        LOGO_TRANSMISSION,
        BASIC_LOCAL_EVENT,
        REFERENCE,
        NODE_RELATION,
        SHORT_NODE_INFORMATION,
        STC_REFERENCE,
        SERIES,
        EVENT_GROUP,
        SI_PARAMETER,
        BROADCASTER_NAME,
        COMPONENT_GROUP,
        SI_PRIME_TS,
        BOARD_INFORMATION,
        LDT_LINKAGE,
        CONNECTED_TRANSMISSION,
        CONTENT_AVAILABILITY,
        SERVICE_GROUP,
    }
    enum Iso639AudioType {
        UNDEFINED,
        CLEAN_EFFECTS,
        HEARING_IMPAIRED,
        VISUAL_IMPAIRED_COMMENTARY,
    }
    enum MetadataApplicationFormat {
        ISAN,
        VSAN,
        IDENTIFIER_FIELD,
    }
    enum MetadataFormat {
        TEM,
        BIM,
        APPLICATION_FORMAT,
        IDENTIFIER_FIELD,
    }
    enum MiscDescriptorType {
        MTS_DESC_DTG_LOGICAL_CHANNEL,
    }
    enum ModulationType {
        QPSK,
        QAM_16,
        QAM_32,
        QAM_64,
        QAM_128,
        QAM_256,
        QAM_AUTO,
        VSB_8,
        VSB_16,
        PSK_8,
        APSK_16,
        APSK_32,
        DQPSK,
        QAM_4_NR_,
        NONE,
    }
    enum RunningStatus {
        UNDEFINED,
        NOT_RUNNING,
        STARTS_IN_FEW_SECONDS,
        PAUSING,
        RUNNING,
        OFF_AIR,
    }
    enum SCTEDescriptorType {
        STUFFING,
        AC3,
        FRAME_RATE,
        EXTENDED_VIDEO,
        COMPONENT_NAME,
        FREQUENCY_SPEC,
        MODULATION_PARAMS,
        TRANSPORT_STREAM_ID,
    }
    enum SCTESpliceCommandType {
        NULL,
        SCHEDULE,
        INSERT,
        TIME,
        BANDWIDTH,
        PRIVATE,
    }
    enum SCTESpliceDescriptor {
        AVAIL,
        DTMF,
        SEGMENTATION,
        TIME,
        AUDIO,
    }
    enum SatellitePolarizationType {
        LINEAR_HORIZONTAL,
        LINEAR_VERTICAL,
        CIRCULAR_LEFT,
        CIRCULAR_RIGHT,
    }
    class SatelliteRolloff {
        static $gtype: GObject.GType<SatelliteRolloff>;
        static "35": number;
        static "20": number;
        static "25": number;
        static RESERVED: number;
        static AUTO: number;
    }
    enum ScteStreamType {
        SUBTITLING,
        ISOCH_DATA,
        SIT,
        DST_NRT,
        DSMCC_DCB,
        SIGNALING,
        SYNC_DATA,
        ASYNC_DATA,
    }
    enum SectionATSCTableID {
        MASTER_GUIDE,
        TERRESTRIAL_VIRTUAL_CHANNEL,
        CABLE_VIRTUAL_CHANNEL,
        RATING_REGION,
        EVENT_INFORMATION,
        CHANNEL_OR_EVENT_EXTENDED_TEXT,
        SYSTEM_TIME,
        DATA_EVENT,
        DATA_SERVICE,
        PROGRAM_IDENTIFIER,
        NETWORK_RESOURCE,
        LONG_TERM_SERVICE,
        DIRECTED_CHANNEL_CHANGE,
        DIRECTED_CHANNEL_CHANGE_SECTION_CODE,
        AGGREGATE_EVENT_INFORMATION,
        AGGREGATE_EXTENDED_TEXT,
        AGGREGATE_DATA_EVENT,
        SATELLITE_VIRTUAL_CHANNEL,
    }
    enum SectionDVBTableID {
        NETWORK_INFORMATION_ACTUAL_NETWORK,
        NETWORK_INFORMATION_OTHER_NETWORK,
        SERVICE_DESCRIPTION_ACTUAL_TS,
        SERVICE_DESCRIPTION_OTHER_TS,
        BOUQUET_ASSOCIATION,
        UPDATE_NOTIFICATION,
        DOWNLOADABLE_FONT_INFO,
        EVENT_INFORMATION_ACTUAL_TS_PRESENT,
        EVENT_INFORMATION_OTHER_TS_PRESENT,
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1,
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N,
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_1,
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_N,
        TIME_DATE,
        RUNNING_STATUS,
        STUFFING,
        TIME_OFFSET,
        APPLICATION_INFORMATION_TABLE,
        CONTAINER,
        RELATED_CONTENT,
        CONTENT_IDENTIFIER,
        MPE_FEC,
        RESOLUTION_NOTIFICATION,
        MPE_IFEC,
        PROTECTION_MESSAGE,
        DISCONTINUITY_INFORMATION,
        SELECTION_INFORMATION,
        CA_MESSAGE_ECM_0,
        CA_MESSAGE_ECM_1,
        CA_MESSAGE_SYSTEM_PRIVATE_1,
        CA_MESSAGE_SYSTEM_PRIVATE_N,
        SCT,
        FCT,
        TCT,
        SPT,
        CMT,
        TBTP,
        PCR_PACKET_PAYLOAD,
        TRANSMISSION_MODE_SUPPORT_PAYLOAD,
        TIM,
        LL_FEC_PARITY_DATA_TABLE,
    }
    enum SectionSCTETableID {
        EAS,
        EBIF,
        RESERVED,
        EISS,
        DII,
        DDB,
        SPLICE,
    }
    enum SectionTableID {
        PROGRAM_ASSOCIATION,
        CONDITIONAL_ACCESS,
        TS_PROGRAM_MAP,
        TS_DESCRIPTION,
        "14496_SCENE_DESCRIPTION",
        "14496_OBJET_DESCRIPTOR",
        METADATA,
        IPMP_CONTROL_INFORMATION,
        "14496_SECTION",
        "23001_11_SECTION",
        "23001_10_SECTION",
        DSM_CC_MULTIPROTO_ENCAPSULATED_DATA,
        DSM_CC_U_N_MESSAGES,
        DSM_CC_DOWNLOAD_DATA_MESSAGES,
        DSM_CC_STREAM_DESCRIPTORS,
        DSM_CC_PRIVATE_DATA,
        DSM_CC_ADDRESSABLE_SECTIONS,
        UNSET,
    }
    enum SectionType {
        UNKNOWN,
        PAT,
        PMT,
        CAT,
        TSDT,
        EIT,
        NIT,
        BAT,
        SDT,
        TDT,
        TOT,
        SIT,
        ATSC_TVCT,
        ATSC_CVCT,
        ATSC_MGT,
        ATSC_ETT,
        ATSC_EIT,
        ATSC_STT,
        ATSC_RRT,
        SCTE_SIT,
    }
    enum StreamType {
        RESERVED_00,
        VIDEO_MPEG1,
        VIDEO_MPEG2,
        AUDIO_MPEG1,
        AUDIO_MPEG2,
        PRIVATE_SECTIONS,
        PRIVATE_PES_PACKETS,
        MHEG,
        DSM_CC,
        H_222_1,
        DSMCC_A,
        DSMCC_B,
        DSMCC_C,
        DSMCC_D,
        AUXILIARY,
        AUDIO_AAC_ADTS,
        VIDEO_MPEG4,
        AUDIO_AAC_LATM,
        SL_FLEXMUX_PES_PACKETS,
        SL_FLEXMUX_SECTIONS,
        SYNCHRONIZED_DOWNLOAD,
        METADATA_PES_PACKETS,
        METADATA_SECTIONS,
        METADATA_DATA_CAROUSEL,
        METADATA_OBJECT_CAROUSEL,
        METADATA_SYNCHRONIZED_DOWNLOAD,
        MPEG2_IPMP,
        VIDEO_H264,
        AUDIO_AAC_CLEAN,
        MPEG4_TIMED_TEXT,
        VIDEO_RVC,
        VIDEO_H264_SVC_SUB_BITSTREAM,
        VIDEO_H264_MVC_SUB_BITSTREAM,
        VIDEO_JP2K,
        VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW,
        VIDEO_H264_STEREO_ADDITIONAL_VIEW,
        VIDEO_HEVC,
        VIDEO_JPEG_XS,
        VIDEO_VVC,
        IPMP_STREAM,
        USER_PRIVATE_EA,
    }
    enum TerrestrialGuardInterval {
        "1_32",
        "1_16",
        "1_8",
        "1_4",
        AUTO,
        "1_128",
        "19_128",
        "19_256",
        PN420,
        PN595,
        PN945,
    }
    class TerrestrialHierarchy {
        static $gtype: GObject.GType<TerrestrialHierarchy>;
        static NONE: number;
        static "1": number;
        static "2": number;
        static "4": number;
        static AUTO: number;
    }
    enum TerrestrialTransmissionMode {
        "2K",
        "8K",
        AUTO,
        "4K",
        "1K",
        "16K",
        "32K",
        C1,
        C3780,
    }
    function buffer_add_mpegts_pes_metadata_meta(buffer: Gst.Buffer): PESMetadataMeta;
    function descriptor_from_custom(tag: number, data: Uint8Array | string): Descriptor | null;
    function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array | string): Descriptor;
    function descriptor_from_dvb_network_name(name: string): Descriptor | null;
    function descriptor_from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor | null;
    function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
    function descriptor_from_iso_639_language(language: string): Descriptor;
    function descriptor_from_jpeg_xs(jpegxs: JpegXsDescriptor): Descriptor;
    function descriptor_from_metadata(metadata_descriptor: MetadataDescriptor): Descriptor;
    function descriptor_from_metadata_pointer(metadata_pointer_descriptor: MetadataPointerDescriptor): Descriptor;
    function descriptor_from_registration(format_identifier: string, additional_info: Uint8Array | string | null): Descriptor;
    function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
    function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;
    function dvb_component_descriptor_free(source: ComponentDescriptor): void;
    function event_new_mpegts_section(section: Section): Gst.Event;
    function event_parse_mpegts_section(event: Gst.Event): Section | null;
    function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor | null;
    function find_descriptor_with_extension(descriptors: Descriptor[], tag: number, tag_extension: number): Descriptor | null;
    function initialize(): void;
    function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message | null;
    function message_parse_mpegts_section(message: Gst.Message): Section | null;
    function parse_descriptors(buffer: number, buf_len: bigint | number): Descriptor[] | null;
    function pat_new(): PatProgram[];
    function pes_metadata_meta_api_get_type(): GObject.GType;
    function pes_metadata_meta_get_info(): Gst.MetaInfo;
    function scte_cancel_new(event_id: number): SCTESIT;
    function scte_null_new(): SCTESIT;
    function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT;
    function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT;
    function section_from_atsc_mgt(mgt: AtscMGT): Section | null;
    function section_from_atsc_rrt(rrt: AtscRRT): Section;
    function section_from_atsc_stt(stt: AtscSTT): Section;
    function section_from_nit(nit: NIT): Section | null;
    function section_from_pat(programs: PatProgram[], ts_id: number): Section;
    function section_from_pmt(pmt: PMT, pid: number): Section | null;
    function section_from_scte_sit(sit: SCTESIT, pid: number): Section | null;
    function section_from_sdt(sdt: SDT): Section | null;
    interface PacketizeFunc {
        (section: Section): boolean;
    }
    class RegistrationId {
        static $gtype: GObject.GType<RegistrationId>;
        static "0": number;
        static AC_3: number;
        static CUEI: number;
        static DRAC: number;
        static DTS1: number;
        static DTS2: number;
        static DTS3: number;
        static BSSD: number;
        static EAC3: number;
        static ETV1: number;
        static GA94: number;
        static HDMV: number;
        static KLVA: number;
        static OPUS: number;
        static TSHV: number;
        static VC_1: number;
        static AC_4: number;
        static OTHER_HEVC: number;
    }
    class AtscEIT {
        static $gtype: GObject.GType<AtscEIT>;
        source_id: number;
        protocol_version: number;
        events: AtscEITEvent[];
        constructor(properties?: Partial<{
            source_id: number;
            protocol_version: number;
            events: AtscEITEvent[];
        }>);
    }
    class AtscEITEvent {
        static $gtype: GObject.GType<AtscEITEvent>;
        event_id: number;
        start_time: number;
        etm_location: number;
        length_in_seconds: number;
        titles: AtscMultString[];
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            event_id: number;
            start_time: number;
            etm_location: number;
            length_in_seconds: number;
            titles: AtscMultString[];
            descriptors: Descriptor[];
        }>);
    }
    class AtscETT {
        static $gtype: GObject.GType<AtscETT>;
        ett_table_id_extension: number;
        protocol_version: number;
        etm_id: number;
        messages: AtscMultString[];
        constructor(properties?: Partial<{
            ett_table_id_extension: number;
            protocol_version: number;
            etm_id: number;
            messages: AtscMultString[];
        }>);
    }
    class AtscMGT {
        static $gtype: GObject.GType<AtscMGT>;
        protocol_version: number;
        tables_defined: number;
        tables: AtscMGTTable[];
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            protocol_version: number;
            tables_defined: number;
            tables: AtscMGTTable[];
            descriptors: Descriptor[];
        }>);
        static ["new"](): AtscMGT;
    }
    class AtscMGTTable {
        static $gtype: GObject.GType<AtscMGTTable>;
        table_type: number;
        pid: number;
        version_number: number;
        number_bytes: number;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            table_type: number;
            pid: number;
            version_number: number;
            number_bytes: number;
            descriptors: Descriptor[];
        }>);
    }
    class AtscMultString {
        static $gtype: GObject.GType<AtscMultString>;
        iso_639_langcode: number[];
        segments: AtscStringSegment[];
        constructor(properties?: Partial<{
            iso_639_langcode: number[];
            segments: AtscStringSegment[];
        }>);
    }
    class AtscRRT {
        static $gtype: GObject.GType<AtscRRT>;
        protocol_version: number;
        names: AtscMultString[];
        dimensions_defined: number;
        dimensions: AtscRRTDimension[];
        descriptors: null[];
        constructor(properties?: Partial<{
            protocol_version: number;
            names: AtscMultString[];
            dimensions_defined: number;
            dimensions: AtscRRTDimension[];
            descriptors: null[];
        }>);
        static ["new"](): AtscRRT;
    }
    class AtscRRTDimension {
        static $gtype: GObject.GType<AtscRRTDimension>;
        names: AtscMultString[];
        graduated_scale: boolean;
        values_defined: number;
        values: AtscRRTDimensionValue[];
        constructor(properties?: Partial<{
            names: AtscMultString[];
            graduated_scale: boolean;
            values_defined: number;
            values: AtscRRTDimensionValue[];
        }>);
        static ["new"](): AtscRRTDimension;
    }
    class AtscRRTDimensionValue {
        static $gtype: GObject.GType<AtscRRTDimensionValue>;
        abbrev_ratings: AtscMultString[];
        ratings: AtscMultString[];
        constructor(properties?: Partial<{
            abbrev_ratings: AtscMultString[];
            ratings: AtscMultString[];
        }>);
        static ["new"](): AtscRRTDimensionValue;
    }
    class AtscSTT {
        static $gtype: GObject.GType<AtscSTT>;
        protocol_version: number;
        system_time: number;
        gps_utc_offset: number;
        ds_status: boolean;
        ds_dayofmonth: number;
        ds_hour: number;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            protocol_version: number;
            system_time: number;
            gps_utc_offset: number;
            ds_status: boolean;
            ds_dayofmonth: number;
            ds_hour: number;
            descriptors: Descriptor[];
        }>);
        static ["new"](): AtscSTT;
        get_datetime_utc(): Gst.DateTime;
    }
    class AtscStringSegment {
        static $gtype: GObject.GType<AtscStringSegment>;
        compression_type: number;
        mode: number;
        compressed_data_size: number;
        compressed_data: number;
        cached_string: string;
        constructor(properties?: Partial<{
            compression_type: number;
            mode: number;
            compressed_data_size: number;
            compressed_data: number;
            cached_string: string;
        }>);
        get_string(): string;
        set_string(string: string, compression_type: number, mode: number): boolean;
    }
    class AtscVCT {
        static $gtype: GObject.GType<AtscVCT>;
        transport_stream_id: number;
        protocol_version: number;
        sources: AtscVCTSource[];
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            transport_stream_id: number;
            protocol_version: number;
            sources: AtscVCTSource[];
            descriptors: Descriptor[];
        }>);
    }
    class AtscVCTSource {
        static $gtype: GObject.GType<AtscVCTSource>;
        short_name: string;
        major_channel_number: number;
        minor_channel_number: number;
        modulation_mode: number;
        carrier_frequency: number;
        channel_TSID: number;
        program_number: number;
        ETM_location: number;
        access_controlled: boolean;
        hidden: boolean;
        path_select: boolean;
        out_of_band: boolean;
        hide_guide: boolean;
        service_type: number;
        source_id: number;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            short_name: string;
            major_channel_number: number;
            minor_channel_number: number;
            modulation_mode: number;
            carrier_frequency: number;
            channel_TSID: number;
            program_number: number;
            ETM_location: number;
            access_controlled: boolean;
            hidden: boolean;
            path_select: boolean;
            out_of_band: boolean;
            hide_guide: boolean;
            service_type: number;
            source_id: number;
            descriptors: Descriptor[];
        }>);
    }
    class AudioPreselectionDescriptor {
        static $gtype: GObject.GType<AudioPreselectionDescriptor>;
        preselection_id: number;
        audio_rendering_indication: number;
        audio_description: boolean;
        spoken_subtitles: boolean;
        dialogue_enhancement: boolean;
        interactivity_enabled: boolean;
        language_code_present: boolean;
        text_label_present: boolean;
        multi_stream_info_present: boolean;
        future_extension: boolean;
        language_code: string;
        message_id: number;
        constructor(properties?: Partial<{
            preselection_id: number;
            audio_rendering_indication: number;
            audio_description: boolean;
            spoken_subtitles: boolean;
            dialogue_enhancement: boolean;
            interactivity_enabled: boolean;
            language_code_present: boolean;
            text_label_present: boolean;
            multi_stream_info_present: boolean;
            future_extension: boolean;
            language_code: string;
            message_id: number;
        }>);
    }
    class BAT {
        static $gtype: GObject.GType<BAT>;
        descriptors: Descriptor[];
        streams: BATStream[];
        constructor(properties?: Partial<{
            descriptors: Descriptor[];
            streams: BATStream[];
        }>);
    }
    class BATStream {
        static $gtype: GObject.GType<BATStream>;
        transport_stream_id: number;
        original_network_id: number;
        descriptors: null[];
        constructor(properties?: Partial<{
            transport_stream_id: number;
            original_network_id: number;
            descriptors: null[];
        }>);
    }
    class CableDeliverySystemDescriptor {
        static $gtype: GObject.GType<CableDeliverySystemDescriptor>;
        frequency: number;
        outer_fec: CableOuterFECScheme;
        modulation: ModulationType;
        symbol_rate: number;
        fec_inner: DVBCodeRate;
        free(): void;
    }
    class ComponentDescriptor {
        static $gtype: GObject.GType<ComponentDescriptor>;
        stream_content: number;
        component_type: number;
        component_tag: number;
        language_code: string;
        text: string;
        constructor(properties?: Partial<{
            stream_content: number;
            component_type: number;
            component_tag: number;
            language_code: string;
            text: string;
        }>);
    }
    class Content {
        static $gtype: GObject.GType<Content>;
        content_nibble_1: ContentNibbleHi;
        content_nibble_2: number;
        user_byte: number;
    }
    class DVBLinkageDescriptor {
        static $gtype: GObject.GType<DVBLinkageDescriptor>;
        transport_stream_id: number;
        original_network_id: number;
        service_id: number;
        linkage_type: DVBLinkageType;
        private_data_length: number;
        private_data_bytes: number;
        free(): void;
        get_event(): DVBLinkageEvent | null;
        get_extended_event(): DVBLinkageExtendedEvent[] | null;
        get_mobile_hand_over(): DVBLinkageMobileHandOver | null;
    }
    class DVBLinkageEvent {
        static $gtype: GObject.GType<DVBLinkageEvent>;
        target_event_id: number;
        target_listed: boolean;
        event_simulcast: boolean;
        constructor(properties?: Partial<{
            target_event_id: number;
            target_listed: boolean;
            event_simulcast: boolean;
        }>);
    }
    class DVBLinkageExtendedEvent {
        static $gtype: GObject.GType<DVBLinkageExtendedEvent>;
        target_event_id: number;
        target_listed: boolean;
        event_simulcast: boolean;
        link_type: number;
        target_id_type: number;
        original_network_id_flag: boolean;
        service_id_flag: boolean;
        user_defined_id: number;
        target_transport_stream_id: number;
        target_original_network_id: number;
        target_service_id: number;
        constructor(properties?: Partial<{
            target_event_id: number;
            target_listed: boolean;
            event_simulcast: boolean;
            link_type: number;
            target_id_type: number;
            original_network_id_flag: boolean;
            service_id_flag: boolean;
            user_defined_id: number;
            target_transport_stream_id: number;
            target_original_network_id: number;
            target_service_id: number;
        }>);
    }
    class DVBLinkageMobileHandOver {
        static $gtype: GObject.GType<DVBLinkageMobileHandOver>;
        hand_over_type: DVBLinkageHandOverType;
        origin_type: boolean;
        network_id: number;
        initial_service_id: number;
    }
    class DVBParentalRatingItem {
        static $gtype: GObject.GType<DVBParentalRatingItem>;
        country_code: string;
        rating: number;
        constructor(properties?: Partial<{
            country_code: string;
            rating: number;
        }>);
    }
    class DVBServiceListItem {
        static $gtype: GObject.GType<DVBServiceListItem>;
        service_id: number;
        type: DVBServiceType;
    }
    class DataBroadcastDescriptor {
        static $gtype: GObject.GType<DataBroadcastDescriptor>;
        data_broadcast_id: number;
        component_tag: number;
        length: number;
        selector_bytes: number;
        language_code: string;
        text: string;
        constructor(properties?: Partial<{
            data_broadcast_id: number;
            component_tag: number;
            length: number;
            selector_bytes: number;
            language_code: string;
            text: string;
        }>);
        free(): void;
    }
    class Descriptor {
        static $gtype: GObject.GType<Descriptor>;
        tag: number;
        tag_extension: number;
        length: number;
        data: number;
        constructor(properties?: Partial<{
            tag: number;
            tag_extension: number;
            length: number;
            data: number;
        }>);
        static from_custom(tag: number, data: Uint8Array | string): Descriptor | null;
        static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array | string): Descriptor;
        static from_dvb_network_name(name: string): Descriptor | null;
        static from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor | null;
        static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
        static from_iso_639_language(language: string): Descriptor;
        static from_jpeg_xs(jpegxs: JpegXsDescriptor): Descriptor;
        static from_metadata(metadata_descriptor: MetadataDescriptor): Descriptor;
        static from_metadata_pointer(metadata_pointer_descriptor: MetadataPointerDescriptor): Descriptor;
        static from_registration(format_identifier: string, additional_info: Uint8Array | string | null): Descriptor;
        static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
        static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;
        copy(): Descriptor;
        free(): void;
        parse_audio_preselection_list(): [boolean, AudioPreselectionDescriptor[]];
        parse_ca(): [boolean, number, number, Uint8Array | null];
        parse_cable_delivery_system(): [boolean, CableDeliverySystemDescriptor];
        parse_dvb_bouquet_name(): [boolean, string];
        parse_dvb_ca_identifier(): [boolean, number[]];
        parse_dvb_component(): [boolean, ComponentDescriptor];
        parse_dvb_content(): [boolean, Content[]];
        parse_dvb_data_broadcast(): [boolean, DataBroadcastDescriptor];
        parse_dvb_data_broadcast_id(): [boolean, number, Uint8Array];
        parse_dvb_extended_event(): [boolean, ExtendedEventDescriptor];
        parse_dvb_frequency_list(): [boolean, boolean, number[]];
        parse_dvb_linkage(): [boolean, DVBLinkageDescriptor];
        parse_dvb_multilingual_bouquet_name(): [boolean, DvbMultilingualBouquetNameItem[]];
        parse_dvb_multilingual_component(): [boolean, number, DvbMultilingualComponentItem[]];
        parse_dvb_multilingual_network_name(): [boolean, DvbMultilingualNetworkNameItem[]];
        parse_dvb_multilingual_service_name(): [boolean, DvbMultilingualServiceNameItem[]];
        parse_dvb_network_name(): [boolean, string];
        parse_dvb_parental_rating(): [boolean, DVBParentalRatingItem[]];
        parse_dvb_private_data_specifier(): [boolean, number, Uint8Array | null];
        parse_dvb_scrambling(): [boolean, DVBScramblingModeType];
        parse_dvb_service(): [boolean, DVBServiceType | null, string, string];
        parse_dvb_service_list(): [boolean, DVBServiceListItem[]];
        parse_dvb_short_event(): [boolean, string, string, string];
        parse_dvb_stream_identifier(): [boolean, number];
        parse_dvb_stuffing(): [boolean, number];
        parse_dvb_subtitling_idx(idx: number): [boolean, string, number, number, number];
        parse_dvb_subtitling_nb(): number;
        parse_dvb_t2_delivery_system(): [boolean, T2DeliverySystemDescriptor];
        parse_dvb_teletext_idx(idx: number): [boolean, string, DVBTeletextType | null, number, number];
        parse_dvb_teletext_nb(): number;
        parse_iso_639_language(): [boolean, ISO639LanguageDescriptor];
        parse_iso_639_language_idx(idx: number): [boolean, string, Iso639AudioType | null];
        parse_iso_639_language_nb(): number;
        parse_jpeg_xs(): [boolean, JpegXsDescriptor];
        parse_logical_channel(): [boolean, LogicalChannelDescriptor];
        parse_metadata(): [boolean, MetadataDescriptor];
        parse_metadata_std(metadata_input_leak_rate: number, metadata_buffer_size: number, metadata_output_leak_rate: number): boolean;
        parse_registration(): [boolean, number, Uint8Array | null];
        parse_satellite_delivery_system(): [boolean, SatelliteDeliverySystemDescriptor];
        parse_terrestrial_delivery_system(): [boolean, TerrestrialDeliverySystemDescriptor];
    }
    class DvbMultilingualBouquetNameItem {
        static $gtype: GObject.GType<DvbMultilingualBouquetNameItem>;
        language_code: string;
        bouquet_name: string;
        constructor(properties?: Partial<{
            language_code: string;
            bouquet_name: string;
        }>);
    }
    class DvbMultilingualComponentItem {
        static $gtype: GObject.GType<DvbMultilingualComponentItem>;
        language_code: string;
        description: string;
        constructor(properties?: Partial<{
            language_code: string;
            description: string;
        }>);
    }
    class DvbMultilingualNetworkNameItem {
        static $gtype: GObject.GType<DvbMultilingualNetworkNameItem>;
        language_code: string;
        network_name: string;
        constructor(properties?: Partial<{
            language_code: string;
            network_name: string;
        }>);
    }
    class DvbMultilingualServiceNameItem {
        static $gtype: GObject.GType<DvbMultilingualServiceNameItem>;
        language_code: string;
        provider_name: string;
        service_name: string;
        constructor(properties?: Partial<{
            language_code: string;
            provider_name: string;
            service_name: string;
        }>);
    }
    class EIT {
        static $gtype: GObject.GType<EIT>;
        transport_stream_id: number;
        original_network_id: number;
        segment_last_section_number: number;
        last_table_id: number;
        actual_stream: boolean;
        present_following: boolean;
        events: EITEvent[];
    }
    class EITEvent {
        static $gtype: GObject.GType<EITEvent>;
        event_id: number;
        duration: number;
        running_status: RunningStatus;
        free_CA_mode: boolean;
        descriptors: Descriptor[];
    }
    class ExtendedEventDescriptor {
        static $gtype: GObject.GType<ExtendedEventDescriptor>;
        descriptor_number: number;
        last_descriptor_number: number;
        language_code: string;
        items: ExtendedEventItem[];
        text: string;
        constructor(properties?: Partial<{
            descriptor_number: number;
            last_descriptor_number: number;
            language_code: string;
            items: ExtendedEventItem[];
            text: string;
        }>);
        free(): void;
    }
    class ExtendedEventItem {
        static $gtype: GObject.GType<ExtendedEventItem>;
        item_description: string;
        item: string;
        constructor(properties?: Partial<{
            item_description: string;
            item: string;
        }>);
    }
    class ISO639LanguageDescriptor {
        static $gtype: GObject.GType<ISO639LanguageDescriptor>;
        nb_language: number;
        language: string[];
        audio_type: Iso639AudioType[];
        descriptor_free(): void;
    }
    class JpegXsDescriptor {
        static $gtype: GObject.GType<JpegXsDescriptor>;
        descriptor_version: number;
        horizontal_size: number;
        vertical_size: number;
        brat: number;
        frat: number;
        schar: number;
        Ppih: number;
        Plev: number;
        max_buffer_size: number;
        buffer_model_type: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        video_full_range_flag: boolean;
        still_mode: boolean;
        mdm_flag: boolean;
        X_c0: number;
        Y_c0: number;
        X_c1: number;
        Y_c1: number;
        X_c2: number;
        Y_c2: number;
        X_wp: number;
        Y_wp: number;
        L_max: number;
        L_min: number;
        MaxCLL: number;
        MaxFALL: number;
        constructor(properties?: Partial<{
            descriptor_version: number;
            horizontal_size: number;
            vertical_size: number;
            brat: number;
            frat: number;
            schar: number;
            Ppih: number;
            Plev: number;
            max_buffer_size: number;
            buffer_model_type: number;
            colour_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
            video_full_range_flag: boolean;
            still_mode: boolean;
            mdm_flag: boolean;
            X_c0: number;
            Y_c0: number;
            X_c1: number;
            Y_c1: number;
            X_c2: number;
            Y_c2: number;
            X_wp: number;
            Y_wp: number;
            L_max: number;
            L_min: number;
            MaxCLL: number;
            MaxFALL: number;
        }>);
    }
    class LogicalChannel {
        static $gtype: GObject.GType<LogicalChannel>;
        service_id: number;
        visible_service: boolean;
        logical_channel_number: number;
        constructor(properties?: Partial<{
            service_id: number;
            visible_service: boolean;
            logical_channel_number: number;
        }>);
    }
    class LogicalChannelDescriptor {
        static $gtype: GObject.GType<LogicalChannelDescriptor>;
        nb_channels: number;
        channels: LogicalChannel[];
        constructor(properties?: Partial<{
            nb_channels: number;
            channels: LogicalChannel[];
        }>);
    }
    class MetadataDescriptor {
        static $gtype: GObject.GType<MetadataDescriptor>;
        metadata_application_format: MetadataApplicationFormat;
        metadata_format: MetadataFormat;
        metadata_format_identifier: number;
        metadata_service_id: number;
        decoder_config_flags: number;
        dsm_cc_flag: boolean;
    }
    class MetadataPointerDescriptor {
        static $gtype: GObject.GType<MetadataPointerDescriptor>;
        metadata_application_format: MetadataApplicationFormat;
        metadata_format: MetadataFormat;
        metadata_format_identifier: number;
        metadata_service_id: number;
        program_number: number;
    }
    class NIT {
        static $gtype: GObject.GType<NIT>;
        actual_network: boolean;
        network_id: number;
        descriptors: Descriptor[];
        streams: NITStream[];
        constructor(properties?: Partial<{
            actual_network: boolean;
            network_id: number;
            descriptors: Descriptor[];
            streams: NITStream[];
        }>);
        static ["new"](): NIT;
    }
    class NITStream {
        static $gtype: GObject.GType<NITStream>;
        transport_stream_id: number;
        original_network_id: number;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            transport_stream_id: number;
            original_network_id: number;
            descriptors: Descriptor[];
        }>);
        static ["new"](): NITStream;
    }
    class PESMetadataMeta {
        static $gtype: GObject.GType<PESMetadataMeta>;
        metadata_service_id: number;
        flags: number;
        static get_info(): Gst.MetaInfo;
    }
    class PMT {
        static $gtype: GObject.GType<PMT>;
        pcr_pid: number;
        program_number: number;
        descriptors: Descriptor[];
        streams: PMTStream[];
        constructor(properties?: Partial<{
            pcr_pid: number;
            program_number: number;
            descriptors: Descriptor[];
            streams: PMTStream[];
        }>);
        static ["new"](): PMT;
    }
    class PMTStream {
        static $gtype: GObject.GType<PMTStream>;
        stream_type: number;
        pid: number;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            stream_type: number;
            pid: number;
            descriptors: Descriptor[];
        }>);
        static ["new"](): PMTStream;
    }
    class PatProgram {
        static $gtype: GObject.GType<PatProgram>;
        program_number: number;
        network_or_program_map_PID: number;
        constructor(properties?: Partial<{
            program_number: number;
            network_or_program_map_PID: number;
        }>);
        static ["new"](): PatProgram;
    }
    class SCTESIT {
        static $gtype: GObject.GType<SCTESIT>;
        encrypted_packet: boolean;
        encryption_algorithm: number;
        pts_adjustment: number;
        cw_index: number;
        tier: number;
        splice_command_length: number;
        splice_command_type: SCTESpliceCommandType;
        splice_time_specified: boolean;
        splice_time: number;
        splices: null[];
        descriptors: null[];
        fully_parsed: boolean;
        is_running_time: boolean;
        constructor(properties?: Partial<{
            encrypted_packet: boolean;
            encryption_algorithm: number;
            pts_adjustment: number;
            cw_index: number;
            tier: number;
            splice_command_length: number;
            splice_command_type: SCTESpliceCommandType;
            splice_time_specified: boolean;
            splice_time: number;
            splices: null[];
            descriptors: null[];
            fully_parsed: boolean;
            is_running_time: boolean;
        }>);
        static ["new"](): SCTESIT;
    }
    class SCTESpliceComponent {
        static $gtype: GObject.GType<SCTESpliceComponent>;
        tag: number;
        splice_time_specified: boolean;
        splice_time: number;
        utc_splice_time: number;
        constructor(tag: number);
        static ["new"](tag: number): SCTESpliceComponent;
    }
    class SCTESpliceEvent {
        static $gtype: GObject.GType<SCTESpliceEvent>;
        insert_event: boolean;
        splice_event_id: number;
        splice_event_cancel_indicator: boolean;
        out_of_network_indicator: boolean;
        program_splice_flag: boolean;
        duration_flag: boolean;
        splice_immediate_flag: boolean;
        program_splice_time_specified: boolean;
        program_splice_time: number;
        utc_splice_time: number;
        components: null[];
        break_duration_auto_return: boolean;
        break_duration: number;
        unique_program_id: number;
        avail_num: number;
        avails_expected: number;
        constructor(properties?: Partial<{
            insert_event: boolean;
            splice_event_id: number;
            splice_event_cancel_indicator: boolean;
            out_of_network_indicator: boolean;
            program_splice_flag: boolean;
            duration_flag: boolean;
            splice_immediate_flag: boolean;
            program_splice_time_specified: boolean;
            program_splice_time: number;
            utc_splice_time: number;
            components: null[];
            break_duration_auto_return: boolean;
            break_duration: number;
            unique_program_id: number;
            avail_num: number;
            avails_expected: number;
        }>);
        static ["new"](): SCTESpliceEvent;
    }
    class SDT {
        static $gtype: GObject.GType<SDT>;
        original_network_id: number;
        actual_ts: boolean;
        transport_stream_id: number;
        services: SDTService[];
        constructor(properties?: Partial<{
            original_network_id: number;
            actual_ts: boolean;
            transport_stream_id: number;
            services: SDTService[];
        }>);
        static ["new"](): SDT;
    }
    class SDTService {
        static $gtype: GObject.GType<SDTService>;
        service_id: number;
        EIT_schedule_flag: boolean;
        EIT_present_following_flag: boolean;
        running_status: RunningStatus;
        free_CA_mode: boolean;
        descriptors: Descriptor[];
        constructor(properties?: Partial<{
            service_id: number;
            EIT_schedule_flag: boolean;
            EIT_present_following_flag: boolean;
            running_status: RunningStatus;
            free_CA_mode: boolean;
            descriptors: Descriptor[];
        }>);
        static ["new"](): SDTService;
    }
    class SIT {
        static $gtype: GObject.GType<SIT>;
        descriptors: Descriptor[];
        services: SITService[];
    }
    class SITService {
        static $gtype: GObject.GType<SITService>;
        service_id: number;
        running_status: RunningStatus;
        descriptors: Descriptor[];
    }
    class SatelliteDeliverySystemDescriptor {
        static $gtype: GObject.GType<SatelliteDeliverySystemDescriptor>;
        frequency: number;
        orbital_position: number;
        west_east: boolean;
        polarization: SatellitePolarizationType;
        roll_off: SatelliteRolloff;
        modulation_system: boolean;
        modulation_type: ModulationType;
        symbol_rate: number;
        fec_inner: DVBCodeRate;
    }
    class Section {
        static $gtype: GObject.GType<Section>;
        section_type: SectionType;
        pid: number;
        table_id: number;
        subtable_extension: number;
        version_number: number;
        current_next_indicator: boolean;
        section_number: number;
        last_section_number: number;
        crc: number;
        constructor(pid: number, data: Uint8Array | string);
        static ["new"](pid: number, data: Uint8Array | string): Section;
        static from_atsc_mgt(mgt: AtscMGT): Section | null;
        static from_atsc_rrt(rrt: AtscRRT): Section;
        static from_atsc_stt(stt: AtscSTT): Section;
        static from_nit(nit: NIT): Section | null;
        static from_pat(programs: PatProgram[], ts_id: number): Section;
        static from_pmt(pmt: PMT, pid: number): Section | null;
        static from_scte_sit(sit: SCTESIT, pid: number): Section | null;
        static from_sdt(sdt: SDT): Section | null;
        get_atsc_cvct(): AtscVCT | null;
        get_atsc_eit(): AtscEIT;
        get_atsc_ett(): AtscETT;
        get_atsc_mgt(): AtscMGT | null;
        get_atsc_rrt(): AtscRRT;
        get_atsc_stt(): AtscSTT;
        get_atsc_tvct(): AtscVCT | null;
        get_bat(): BAT | null;
        get_cat(): Descriptor[] | null;
        get_data(): GLib.Bytes;
        get_eit(): EIT | null;
        get_nit(): NIT | null;
        get_pat(): PatProgram[] | null;
        get_pmt(): PMT | null;
        get_scte_sit(): SCTESIT | null;
        get_sdt(): SDT | null;
        get_sit(): SIT | null;
        get_tdt(): Gst.DateTime | null;
        get_tot(): TOT | null;
        get_tsdt(): Descriptor[] | null;
        packetize(): [number, number];
        send_event(element: Gst.Element): boolean;
    }
    class T2DeliverySystemCell {
        static $gtype: GObject.GType<T2DeliverySystemCell>;
        cell_id: number;
        centre_frequencies: number[];
        sub_cells: T2DeliverySystemCellExtension[];
        constructor(properties?: Partial<{
            cell_id: number;
            centre_frequencies: number[];
            sub_cells: T2DeliverySystemCellExtension[];
        }>);
    }
    class T2DeliverySystemCellExtension {
        static $gtype: GObject.GType<T2DeliverySystemCellExtension>;
        cell_id_extension: number;
        transposer_frequency: number;
        constructor(properties?: Partial<{
            cell_id_extension: number;
            transposer_frequency: number;
        }>);
    }
    class T2DeliverySystemDescriptor {
        static $gtype: GObject.GType<T2DeliverySystemDescriptor>;
        plp_id: number;
        t2_system_id: number;
        siso_miso: number;
        bandwidth: number;
        guard_interval: TerrestrialGuardInterval;
        transmission_mode: TerrestrialTransmissionMode;
        other_frequency: boolean;
        tfs: boolean;
        cells: T2DeliverySystemCell[];
        free(): void;
    }
    class TOT {
        static $gtype: GObject.GType<TOT>;
        descriptors: Descriptor[];
    }
    class TerrestrialDeliverySystemDescriptor {
        static $gtype: GObject.GType<TerrestrialDeliverySystemDescriptor>;
        frequency: number;
        bandwidth: number;
        priority: boolean;
        time_slicing: boolean;
        mpe_fec: boolean;
        constellation: ModulationType;
        hierarchy: TerrestrialHierarchy;
        code_rate_hp: DVBCodeRate;
        code_rate_lp: DVBCodeRate;
        guard_interval: TerrestrialGuardInterval;
        transmission_mode: TerrestrialTransmissionMode;
        other_frequency: boolean;
    }
    const __name__: string;
    const __version__: string;
}
export default GstMpegts;
}
declare module 'gi://GstMpegts' {
    import GstMpegts10 from 'gi://GstMpegts?version=1.0';
    export default GstMpegts10;
}
