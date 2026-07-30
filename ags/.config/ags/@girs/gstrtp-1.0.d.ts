declare module 'gi://GstRtp?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstRtp {
    export namespace RTCPFBType {
        export const $gtype: GObject.GType<RTCPFBType>;
    }
    enum RTCPFBType {
        FB_TYPE_INVALID,
        RTPFB_TYPE_NACK,
        RTPFB_TYPE_TMMBR,
        RTPFB_TYPE_TMMBN,
        RTPFB_TYPE_RTCP_SR_REQ,
        RTPFB_TYPE_TWCC,
        PSFB_TYPE_PLI,
        PSFB_TYPE_SLI,
        PSFB_TYPE_RPSI,
        PSFB_TYPE_AFB,
        PSFB_TYPE_FIR,
        PSFB_TYPE_TSTR,
        PSFB_TYPE_TSTN,
        PSFB_TYPE_VBCN,
    }
    export namespace RTCPSDESType {
        export const $gtype: GObject.GType<RTCPSDESType>;
    }
    enum RTCPSDESType {
        INVALID,
        END,
        CNAME,
        NAME,
        EMAIL,
        PHONE,
        LOC,
        TOOL,
        NOTE,
        PRIV,
        H323_CADDR,
        APSI,
        RGRP,
        RTP_STREAM_ID,
        REPAIRED_RTP_STREAM_ID,
        CCID,
        MID,
    }
    export namespace RTCPType {
        export const $gtype: GObject.GType<RTCPType>;
    }
    enum RTCPType {
        INVALID,
        SR,
        RR,
        SDES,
        BYE,
        APP,
        RTPFB,
        PSFB,
        XR,
    }
    export namespace RTCPXRType {
        export const $gtype: GObject.GType<RTCPXRType>;
    }
    enum RTCPXRType {
        INVALID,
        LRLE,
        DRLE,
        PRT,
        RRT,
        DLRR,
        SSUMM,
        VOIP_METRICS,
    }
    class RTPPayload {
        static $gtype: GObject.GType<RTPPayload>;
        static PCMU: number;
        static "1016": number;
        static G721: number;
        static GSM: number;
        static G723: number;
        static DVI4_8000: number;
        static DVI4_16000: number;
        static LPC: number;
        static PCMA: number;
        static G722: number;
        static L16_STEREO: number;
        static L16_MONO: number;
        static QCELP: number;
        static CN: number;
        static MPA: number;
        static G728: number;
        static DVI4_11025: number;
        static DVI4_22050: number;
        static G729: number;
        static CELLB: number;
        static JPEG: number;
        static NV: number;
        static H261: number;
        static MPV: number;
        static MP2T: number;
        static H263: number;
    }
    export namespace RTPProfile {
        export const $gtype: GObject.GType<RTPProfile>;
    }
    enum RTPProfile {
        UNKNOWN,
        AVP,
        SAVP,
        AVPF,
        SAVPF,
    }
    const RTCP_MAX_BYE_SSRC_COUNT: number;
    const RTCP_MAX_RB_COUNT: number;
    const RTCP_MAX_SDES: number;
    const RTCP_MAX_SDES_ITEM_COUNT: number;
    const RTCP_REDUCED_SIZE_VALID_MASK: number;
    const RTCP_VALID_MASK: number;
    const RTCP_VALID_VALUE: number;
    const RTCP_VERSION: number;
    const RTP_HDREXT_BASE: string;
    const RTP_HDREXT_ELEMENT_CLASS: string;
    const RTP_HDREXT_NTP_56: string;
    const RTP_HDREXT_NTP_56_SIZE: number;
    const RTP_HDREXT_NTP_64: string;
    const RTP_HDREXT_NTP_64_SIZE: number;
    const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string;
    const RTP_PAYLOAD_1016_STRING: string;
    const RTP_PAYLOAD_CELLB_STRING: string;
    const RTP_PAYLOAD_CN_STRING: string;
    const RTP_PAYLOAD_DVI4_11025_STRING: string;
    const RTP_PAYLOAD_DVI4_16000_STRING: string;
    const RTP_PAYLOAD_DVI4_22050_STRING: string;
    const RTP_PAYLOAD_DVI4_8000_STRING: string;
    const RTP_PAYLOAD_DYNAMIC_STRING: string;
    const RTP_PAYLOAD_G721_STRING: string;
    const RTP_PAYLOAD_G722_STRING: string;
    const RTP_PAYLOAD_G723_53: number;
    const RTP_PAYLOAD_G723_53_STRING: string;
    const RTP_PAYLOAD_G723_63: number;
    const RTP_PAYLOAD_G723_63_STRING: string;
    const RTP_PAYLOAD_G723_STRING: string;
    const RTP_PAYLOAD_G728_STRING: string;
    const RTP_PAYLOAD_G729_STRING: string;
    const RTP_PAYLOAD_GSM_STRING: string;
    const RTP_PAYLOAD_H261_STRING: string;
    const RTP_PAYLOAD_H263_STRING: string;
    const RTP_PAYLOAD_JPEG_STRING: string;
    const RTP_PAYLOAD_L16_MONO_STRING: string;
    const RTP_PAYLOAD_L16_STEREO_STRING: string;
    const RTP_PAYLOAD_LPC_STRING: string;
    const RTP_PAYLOAD_MP2T_STRING: string;
    const RTP_PAYLOAD_MPA_STRING: string;
    const RTP_PAYLOAD_MPV_STRING: string;
    const RTP_PAYLOAD_NV_STRING: string;
    const RTP_PAYLOAD_PCMA_STRING: string;
    const RTP_PAYLOAD_PCMU_STRING: string;
    const RTP_PAYLOAD_QCELP_STRING: string;
    const RTP_PAYLOAD_TS41: number;
    const RTP_PAYLOAD_TS41_STRING: string;
    const RTP_PAYLOAD_TS48: number;
    const RTP_PAYLOAD_TS48_STRING: string;
    const RTP_SOURCE_META_MAX_CSRC_COUNT: number;
    const RTP_VERSION: number;
    function buffer_add_rtp_source_meta(buffer: Gst.Buffer, ssrc: number | null, csrc: number[] | null): RTPSourceMeta;
    function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta | null;
    function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
    function rtcp_buffer_new(mtu: number): Gst.Buffer;
    function rtcp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
    function rtcp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
    function rtcp_buffer_validate(buffer: Gst.Buffer): boolean;
    function rtcp_buffer_validate_data(data: Uint8Array | string): boolean;
    function rtcp_buffer_validate_data_reduced(data: Uint8Array | string): boolean;
    function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean;
    function rtcp_ntp_to_unix(ntptime: bigint | number): number;
    function rtcp_sdes_name_to_type(name: string): RTCPSDESType;
    function rtcp_sdes_type_to_name(type: RTCPSDESType): string;
    function rtcp_unix_to_ntp(unixtime: bigint | number): number;
    function rtp_buffer_allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
    function rtp_buffer_calc_header_len(csrc_count: number): number;
    function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
    function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
    function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number;
    function rtp_buffer_default_clock_rate(payload_type: number): number;
    function rtp_buffer_ext_timestamp(exttimestamp: bigint | number, timestamp: number): [number, number];
    function rtp_buffer_get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes | Uint8Array, bit_pattern: number, id: number, nth: number): [boolean, Uint8Array];
    function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
    function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    function rtp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
    function rtp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
    function rtp_get_header_extension_list(): Gst.ElementFactory[];
    function rtp_hdrext_get_ntp_56(data: Uint8Array | string): [boolean, number];
    function rtp_hdrext_get_ntp_64(data: Uint8Array | string): [boolean, number];
    function rtp_hdrext_set_ntp_56(data: null, size: number, ntptime: bigint | number): boolean;
    function rtp_hdrext_set_ntp_64(data: null, size: number, ntptime: bigint | number): boolean;
    function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
    function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo | null;
    function rtp_source_meta_api_get_type(): GObject.GType;
    function rtp_source_meta_get_info(): Gst.MetaInfo;
    export namespace RTPBufferFlags {
        export const $gtype: GObject.GType<RTPBufferFlags>;
    }
    enum RTPBufferFlags {
        RETRANSMISSION,
        REDUNDANT,
        LAST,
    }
    export namespace RTPBufferMapFlags {
        export const $gtype: GObject.GType<RTPBufferMapFlags>;
    }
    enum RTPBufferMapFlags {
        SKIP_PADDING,
        LAST,
    }
    export namespace RTPHeaderExtensionDirection {
        export const $gtype: GObject.GType<RTPHeaderExtensionDirection>;
    }
    enum RTPHeaderExtensionDirection {
        INACTIVE,
        SENDONLY,
        RECVONLY,
        SENDRECV,
        INHERITED,
    }
    export namespace RTPHeaderExtensionFlags {
        export const $gtype: GObject.GType<RTPHeaderExtensionFlags>;
    }
    enum RTPHeaderExtensionFlags {
        ONE_BYTE,
        TWO_BYTE,
    }
    namespace RTPBaseAudioPayload {
        interface SignalSignatures extends RTPBasePayload.SignalSignatures {
            "notify::buffer-list": (pspec: GObject.ParamSpec) => void;
            "notify::auto-header-extension": (pspec: GObject.ParamSpec) => void;
            "notify::extensions": (pspec: GObject.ParamSpec) => void;
            "notify::max-ptime": (pspec: GObject.ParamSpec) => void;
            "notify::min-ptime": (pspec: GObject.ParamSpec) => void;
            "notify::mtu": (pspec: GObject.ParamSpec) => void;
            "notify::onvif-no-rate-control": (pspec: GObject.ParamSpec) => void;
            "notify::perfect-rtptime": (pspec: GObject.ParamSpec) => void;
            "notify::pt": (pspec: GObject.ParamSpec) => void;
            "notify::ptime-multiple": (pspec: GObject.ParamSpec) => void;
            "notify::scale-rtptime": (pspec: GObject.ParamSpec) => void;
            "notify::seqnum": (pspec: GObject.ParamSpec) => void;
            "notify::seqnum-offset": (pspec: GObject.ParamSpec) => void;
            "notify::source-info": (pspec: GObject.ParamSpec) => void;
            "notify::ssrc": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp-offset": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends RTPBasePayload.ConstructorProps {
            buffer_list: boolean;
            bufferList: boolean;
        }
    }
    class RTPBaseAudioPayload extends RTPBasePayload {
        static $gtype: GObject.GType<RTPBaseAudioPayload>;
        get buffer_list(): boolean;
        set buffer_list(val: boolean);
        get bufferList(): boolean;
        set bufferList(val: boolean);
        $signals: RTPBaseAudioPayload.SignalSignatures;
        payload: RTPBasePayload;
        base_ts: Gst.ClockTime;
        frame_size: number;
        frame_duration: number;
        sample_size: number;
        constructor(properties?: Partial<RTPBaseAudioPayload.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RTPBaseAudioPayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBaseAudioPayload.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RTPBaseAudioPayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBaseAudioPayload.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RTPBaseAudioPayload.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RTPBaseAudioPayload.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn;
        get_adapter(): GstBase.Adapter;
        push(data: Uint8Array | string, timestamp: Gst.ClockTime): Gst.FlowReturn;
        push(...args: never[]): any;
        set_frame_based(): void;
        set_frame_options(frame_duration: number, frame_size: number): void;
        set_sample_based(): void;
        set_sample_options(sample_size: number): void;
        set_samplebits_options(sample_size: number): void;
    }
    namespace RTPBaseDepayload {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "add-extension": (arg0: RTPHeaderExtension) => void;
            "clear-extensions": () => void;
            "request-extension": (arg0: number, arg1: string | null) => RTPHeaderExtension | null;
            "notify::auto-header-extension": (pspec: GObject.ParamSpec) => void;
            "notify::extensions": (pspec: GObject.ParamSpec) => void;
            "notify::max-reorder": (pspec: GObject.ParamSpec) => void;
            "notify::source-info": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            auto_header_extension: boolean;
            autoHeaderExtension: boolean;
            extensions: Gst.ValueArray;
            max_reorder: number;
            maxReorder: number;
            source_info: boolean;
            sourceInfo: boolean;
            stats: Gst.Structure;
        }
    }
    abstract class RTPBaseDepayload extends Gst.Element {
        static $gtype: GObject.GType<RTPBaseDepayload>;
        get auto_header_extension(): boolean;
        set auto_header_extension(val: boolean);
        get autoHeaderExtension(): boolean;
        set autoHeaderExtension(val: boolean);
        get extensions(): Gst.ValueArray;
        get max_reorder(): number;
        set max_reorder(val: number);
        get maxReorder(): number;
        set maxReorder(val: number);
        get source_info(): boolean;
        set source_info(val: boolean);
        get sourceInfo(): boolean;
        set sourceInfo(val: boolean);
        get stats(): Gst.Structure;
        $signals: RTPBaseDepayload.SignalSignatures;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        clock_rate: number;
        need_newsegment: boolean;
        constructor(properties?: Partial<RTPBaseDepayload.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RTPBaseDepayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBaseDepayload.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RTPBaseDepayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBaseDepayload.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RTPBaseDepayload.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RTPBaseDepayload.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_handle_event(event: Gst.Event): boolean;
        vfunc_packet_lost(event: Gst.Event): boolean;
        vfunc_process(_in: Gst.Buffer): Gst.Buffer;
        vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer;
        vfunc_set_caps(caps: Gst.Caps): boolean;
        delayed(): void;
        dropped(): void;
        flush(keep_current: boolean): void;
        is_aggregate_hdrext_enabled(): boolean;
        is_source_info_enabled(): boolean;
        push(out_buf: Gst.Buffer): Gst.FlowReturn;
        push_list(out_list: Gst.BufferList): Gst.FlowReturn;
        set_aggregate_hdrext_enabled(enable: boolean): void;
        set_source_info_enabled(enable: boolean): void;
    }
    namespace RTPBasePayload {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "add-extension": (arg0: RTPHeaderExtension) => void;
            "clear-extensions": () => void;
            "request-extension": (arg0: number, arg1: string) => RTPHeaderExtension | null;
            "notify::auto-header-extension": (pspec: GObject.ParamSpec) => void;
            "notify::extensions": (pspec: GObject.ParamSpec) => void;
            "notify::max-ptime": (pspec: GObject.ParamSpec) => void;
            "notify::min-ptime": (pspec: GObject.ParamSpec) => void;
            "notify::mtu": (pspec: GObject.ParamSpec) => void;
            "notify::onvif-no-rate-control": (pspec: GObject.ParamSpec) => void;
            "notify::perfect-rtptime": (pspec: GObject.ParamSpec) => void;
            "notify::pt": (pspec: GObject.ParamSpec) => void;
            "notify::ptime-multiple": (pspec: GObject.ParamSpec) => void;
            "notify::scale-rtptime": (pspec: GObject.ParamSpec) => void;
            "notify::seqnum": (pspec: GObject.ParamSpec) => void;
            "notify::seqnum-offset": (pspec: GObject.ParamSpec) => void;
            "notify::source-info": (pspec: GObject.ParamSpec) => void;
            "notify::ssrc": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp-offset": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            auto_header_extension: boolean;
            autoHeaderExtension: boolean;
            extensions: Gst.ValueArray;
            max_ptime: bigint | number;
            maxPtime: bigint | number;
            min_ptime: bigint | number;
            minPtime: bigint | number;
            mtu: number;
            onvif_no_rate_control: boolean;
            onvifNoRateControl: boolean;
            perfect_rtptime: boolean;
            perfectRtptime: boolean;
            pt: number;
            ptime_multiple: bigint | number;
            ptimeMultiple: bigint | number;
            scale_rtptime: boolean;
            scaleRtptime: boolean;
            seqnum: number;
            seqnum_offset: number;
            seqnumOffset: number;
            source_info: boolean;
            sourceInfo: boolean;
            ssrc: number;
            stats: Gst.Structure;
            timestamp: number;
            timestamp_offset: number;
            timestampOffset: number;
        }
    }
    abstract class RTPBasePayload extends Gst.Element {
        static $gtype: GObject.GType<RTPBasePayload>;
        get auto_header_extension(): boolean;
        set auto_header_extension(val: boolean);
        get autoHeaderExtension(): boolean;
        set autoHeaderExtension(val: boolean);
        get extensions(): Gst.ValueArray;
        get max_ptime(): number;
        set max_ptime(val: bigint | number);
        get maxPtime(): number;
        set maxPtime(val: bigint | number);
        get min_ptime(): number;
        set min_ptime(val: bigint | number);
        get minPtime(): number;
        set minPtime(val: bigint | number);
        get mtu(): number;
        set mtu(val: number);
        get onvif_no_rate_control(): boolean;
        set onvif_no_rate_control(val: boolean);
        get onvifNoRateControl(): boolean;
        set onvifNoRateControl(val: boolean);
        get perfect_rtptime(): boolean;
        set perfect_rtptime(val: boolean);
        get perfectRtptime(): boolean;
        set perfectRtptime(val: boolean);
        get pt(): number;
        set pt(val: number);
        get ptime_multiple(): number;
        set ptime_multiple(val: bigint | number);
        get ptimeMultiple(): number;
        set ptimeMultiple(val: bigint | number);
        get scale_rtptime(): boolean;
        set scale_rtptime(val: boolean);
        get scaleRtptime(): boolean;
        set scaleRtptime(val: boolean);
        get seqnum(): number;
        get seqnum_offset(): number;
        set seqnum_offset(val: number);
        get seqnumOffset(): number;
        set seqnumOffset(val: number);
        get source_info(): boolean;
        set source_info(val: boolean);
        get sourceInfo(): boolean;
        set sourceInfo(val: boolean);
        get ssrc(): number;
        set ssrc(val: number);
        get stats(): Gst.Structure;
        get timestamp(): number;
        get timestamp_offset(): number;
        set timestamp_offset(val: number);
        get timestampOffset(): number;
        set timestampOffset(val: number);
        $signals: RTPBasePayload.SignalSignatures;
        element: Gst.Element;
        constructor(properties?: Partial<RTPBasePayload.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RTPBasePayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBasePayload.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RTPBasePayload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPBasePayload.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RTPBasePayload.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RTPBasePayload.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps;
        vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean;
        vfunc_query(...args: never[]): any;
        vfunc_set_caps(caps: Gst.Caps): boolean;
        vfunc_sink_event(event: Gst.Event): boolean;
        vfunc_src_event(event: Gst.Event): boolean;
        allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
        get_source_count(buffer: Gst.Buffer): number;
        is_filled(size: number, duration: Gst.ClockTime): boolean;
        is_source_info_enabled(): boolean;
        push(buffer: Gst.Buffer): Gst.FlowReturn;
        push_list(list: Gst.BufferList): Gst.FlowReturn;
        set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void;
        set_outcaps_structure(s: Gst.Structure | null): boolean;
        set_source_info_enabled(enable: boolean): void;
    }
    namespace RTPHeaderExtension {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }
    abstract class RTPHeaderExtension extends Gst.Element {
        static $gtype: GObject.GType<RTPHeaderExtension>;
        $signals: RTPHeaderExtension.SignalSignatures;
        constructor(properties?: Partial<RTPHeaderExtension.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RTPHeaderExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPHeaderExtension.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RTPHeaderExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RTPHeaderExtension.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RTPHeaderExtension.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RTPHeaderExtension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static create_from_uri(uri: string): RTPHeaderExtension | null;
        static set_uri(uri: string): void;
        vfunc_get_max_size(input_meta: Gst.Buffer): bigint | number;
        vfunc_get_supported_flags(): RTPHeaderExtensionFlags;
        vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean;
        vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string): boolean;
        vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean;
        vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
        vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean;
        vfunc_write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): bigint | number;
        get_direction(): RTPHeaderExtensionDirection;
        get_id(): number;
        get_max_size(input_meta: Gst.Buffer): number;
        get_sdp_caps_field_name(): string;
        get_supported_flags(): RTPHeaderExtensionFlags;
        get_uri(): string | null;
        read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array | string, buffer: Gst.Buffer): boolean;
        set_attributes_from_caps(caps: Gst.Caps): boolean;
        set_caps_from_attributes(caps: Gst.Caps): boolean;
        set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string): boolean;
        set_direction(direction: RTPHeaderExtensionDirection): void;
        set_id(ext_id: number): void;
        set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
        set_wants_update_non_rtp_src_caps(state: boolean): void;
        update_non_rtp_src_caps(caps: Gst.Caps): boolean;
        wants_update_non_rtp_src_caps(): boolean;
        write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array | string): number;
    }
    class RTCPBuffer {
        static $gtype: GObject.GType<RTCPBuffer>;
        static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
        static ["new"](mtu: number): Gst.Buffer;
        static new_copy_data(data: Uint8Array | string): Gst.Buffer;
        static new_take_data(data: Uint8Array | string): Gst.Buffer;
        static validate(buffer: Gst.Buffer): boolean;
        static validate_data(data: Uint8Array | string): boolean;
        static validate_data_reduced(data: Uint8Array | string): boolean;
        static validate_reduced(buffer: Gst.Buffer): boolean;
        add_packet(type: RTCPType, packet: RTCPPacket): boolean;
        get_first_packet(packet: RTCPPacket): boolean;
        get_packet_count(): number;
        unmap(): boolean;
    }
    class RTCPPacket {
        static $gtype: GObject.GType<RTCPPacket>;
        offset: number;
        add_profile_specific_ext(data: Uint8Array | string): boolean;
        add_rb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean;
        app_get_data(): number;
        app_get_data_length(): number;
        app_get_name(): string;
        app_get_ssrc(): number;
        app_get_subtype(): number;
        app_set_data_length(wordlen: number): boolean;
        app_set_name(name: string): void;
        app_set_ssrc(ssrc: number): void;
        app_set_subtype(subtype: number): void;
        bye_add_ssrc(ssrc: number): boolean;
        bye_add_ssrcs(ssrc: number[]): boolean;
        bye_get_nth_ssrc(nth: number): number;
        bye_get_reason(): string | null;
        bye_get_reason_len(): number;
        bye_get_ssrc_count(): number;
        bye_set_reason(reason: string): boolean;
        copy_profile_specific_ext(): [boolean, Uint8Array];
        fb_get_fci(): number;
        fb_get_fci_length(): number;
        fb_get_media_ssrc(): number;
        fb_get_sender_ssrc(): number;
        fb_get_type(): RTCPFBType;
        fb_set_fci_length(wordlen: number): boolean;
        fb_set_media_ssrc(ssrc: number): void;
        fb_set_sender_ssrc(ssrc: number): void;
        fb_set_type(type: RTCPFBType): void;
        get_count(): number;
        get_length(): number;
        get_padding(): boolean;
        get_profile_specific_ext(): [boolean, Uint8Array];
        get_profile_specific_ext_length(): number;
        get_rb(nth: number): [number, number, number, number, number, number, number];
        get_rb_count(): number;
        get_type(): RTCPType;
        move_to_next(): boolean;
        remove(): boolean;
        rr_get_ssrc(): number;
        rr_set_ssrc(ssrc: number): void;
        sdes_add_entry(type: RTCPSDESType, data: Uint8Array | string): boolean;
        sdes_add_item(ssrc: number): boolean;
        sdes_copy_entry(type: RTCPSDESType): [boolean, Uint8Array];
        sdes_first_entry(): boolean;
        sdes_first_item(): boolean;
        sdes_get_entry(type: RTCPSDESType): [boolean, Uint8Array];
        sdes_get_item_count(): number;
        sdes_get_ssrc(): number;
        sdes_next_entry(): boolean;
        sdes_next_item(): boolean;
        set_rb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void;
        sr_get_sender_info(): [number, number, number, number, number];
        sr_set_sender_info(ssrc: number, ntptime: bigint | number, rtptime: number, packet_count: number, octet_count: number): void;
        xr_first_rb(): boolean;
        xr_get_block_length(): number;
        xr_get_block_type(): RTCPXRType;
        xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean;
        xr_get_prt_by_seq(seq: number, receipt_time: number): boolean;
        xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean;
        xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean;
        xr_get_rle_nth_chunk(nth: number, chunk: number): boolean;
        xr_get_rrt(timestamp: bigint | number): boolean;
        xr_get_ssrc(): number;
        xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean;
        xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean;
        xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean;
        xr_get_summary_ttl(is_ipv4: boolean, min_ttl: number, max_ttl: number, mean_ttl: number, dev_ttl: number): boolean;
        xr_get_voip_burst_metrics(burst_density: number, gap_density: number, burst_duration: number, gap_duration: number): boolean;
        xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean;
        xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean;
        xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean;
        xr_get_voip_metrics_ssrc(ssrc: number): boolean;
        xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean;
        xr_get_voip_quality_metrics(r_factor: number, ext_r_factor: number, mos_lq: number, mos_cq: number): boolean;
        xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean;
        xr_next_rb(): boolean;
    }
    type RTPBaseAudioPayloadClass = typeof RTPBaseAudioPayload;
    abstract class RTPBaseAudioPayloadPrivate {
        static $gtype: GObject.GType<RTPBaseAudioPayloadPrivate>;
    }
    type RTPBaseDepayloadClass = typeof RTPBaseDepayload;
    abstract class RTPBaseDepayloadPrivate {
        static $gtype: GObject.GType<RTPBaseDepayloadPrivate>;
    }
    type RTPBasePayloadClass = typeof RTPBasePayload;
    abstract class RTPBasePayloadPrivate {
        static $gtype: GObject.GType<RTPBasePayloadPrivate>;
    }
    class RTPBuffer {
        static $gtype: GObject.GType<RTPBuffer>;
        state: number;
        data: null[];
        size: number[];
        map: Gst.MapInfo[];
        static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
        static calc_header_len(csrc_count: number): number;
        static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
        static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
        static compare_seqnum(seqnum1: number, seqnum2: number): number;
        static default_clock_rate(payload_type: number): number;
        static ext_timestamp(exttimestamp: bigint | number, timestamp: number): [number, number];
        static get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes | Uint8Array, bit_pattern: number, id: number, nth: number): [boolean, Uint8Array];
        static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
        static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
        static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
        static new_copy_data(data: Uint8Array | string): Gst.Buffer;
        static new_take_data(data: Uint8Array | string): Gst.Buffer;
        add_extension_onebyte_header(id: number, data: Uint8Array | string): boolean;
        add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array | string): boolean;
        get_csrc(idx: number): number;
        get_csrc_count(): number;
        get_extension(): boolean;
        get_extension_data(): [GLib.Bytes | null, number];
        get_extension_onebyte_header(id: number, nth: number): [boolean, Uint8Array | null];
        get_extension_twobytes_header(id: number, nth: number): [boolean, number, Uint8Array | null];
        get_header_len(): number;
        get_marker(): boolean;
        get_packet_len(): number;
        get_padding(): boolean;
        get_payload_buffer(): Gst.Buffer;
        get_payload(): GLib.Bytes | null;
        get_payload_len(): number;
        get_payload_subbuffer(offset: number, len: number): Gst.Buffer;
        get_payload_type(): number;
        get_seq(): number;
        get_ssrc(): number;
        get_timestamp(): number;
        get_version(): number;
        pad_to(len: number): void;
        remove_extension_data(): void;
        set_csrc(idx: number, csrc: number): void;
        set_extension(extension: boolean): void;
        set_extension_data(bits: number, length: number): boolean;
        set_marker(marker: boolean): void;
        set_packet_len(len: number): void;
        set_padding(padding: boolean): void;
        set_payload_type(payload_type: number): void;
        set_seq(seq: number): void;
        set_ssrc(ssrc: number): void;
        set_timestamp(timestamp: number): void;
        set_version(version: number): void;
        unmap(): void;
    }
    type RTPHeaderExtensionClass = typeof RTPHeaderExtension;
    class RTPPayloadInfo {
        static $gtype: GObject.GType<RTPPayloadInfo>;
        payload_type: number;
        media: string;
        encoding_name: string;
        clock_rate: number;
        encoding_parameters: string;
        bitrate: number;
        constructor(properties?: Partial<{
            payload_type: number;
            media: string;
            encoding_name: string;
            clock_rate: number;
            encoding_parameters: string;
            bitrate: number;
        }>);
        static for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
        static for_pt(payload_type: number): RTPPayloadInfo | null;
    }
    class RTPSourceMeta {
        static $gtype: GObject.GType<RTPSourceMeta>;
        ssrc: number;
        ssrc_valid: boolean;
        csrc: number[];
        csrc_count: number;
        static get_info(): Gst.MetaInfo;
        append_csrc(csrc: number[]): boolean;
        get_source_count(): number;
        set_ssrc(ssrc: number | null): boolean;
    }
    const __name__: string;
    const __version__: string;
}
export default GstRtp;
}
declare module 'gi://GstRtp' {
    import GstRtp10 from 'gi://GstRtp?version=1.0';
    export default GstRtp10;
}
