declare module 'gi://GstSdp?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstSdp {
    enum MIKEYCacheType {
        NONE,
        ALWAYS,
        FOR_CSB,
    }
    enum MIKEYEncAlg {
        NULL,
        AES_CM_128,
        AES_KW_128,
        AES_GCM_128,
    }
    enum MIKEYKVType {
        NULL,
        SPI,
        INTERVAL,
    }
    enum MIKEYKeyDataType {
        TGK,
        TEK,
    }
    enum MIKEYMacAlg {
        NULL,
        HMAC_SHA_1_160,
    }
    enum MIKEYMapType {
        MIKEY_MAP_TYPE_SRTP,
    }
    enum MIKEYPRFFunc {
        MIKEY_PRF_MIKEY_1,
    }
    enum MIKEYPayloadType {
        LAST,
        KEMAC,
        PKE,
        DH,
        SIGN,
        T,
        ID,
        CERT,
        CHASH,
        V,
        SP,
        RAND,
        ERR,
        KEY_DATA,
        GEN_EXT,
    }
    enum MIKEYSecProto {
        MIKEY_SEC_PROTO_SRTP,
    }
    enum MIKEYSecSRTP {
        ENC_ALG,
        ENC_KEY_LEN,
        AUTH_ALG,
        AUTH_KEY_LEN,
        SALT_KEY_LEN,
        PRF,
        KEY_DERIV_RATE,
        SRTP_ENC,
        SRTCP_ENC,
        FEC_ORDER,
        SRTP_AUTH,
        AUTH_TAG_LEN,
        SRTP_PREFIX_LEN,
        AEAD_AUTH_TAG_LEN,
    }
    enum MIKEYTSType {
        NTP_UTC,
        NTP,
        COUNTER,
    }
    enum MIKEYType {
        INVALID,
        PSK_INIT,
        PSK_VERIFY,
        PK_INIT,
        PK_VERIFY,
        DH_INIT,
        DH_RESP,
        ERROR,
    }
    enum SDPResult {
        OK,
        EINVAL,
    }
    const MIKEY_VERSION: number;
    const SDP_BWTYPE_AS: string;
    const SDP_BWTYPE_CT: string;
    const SDP_BWTYPE_EXT_PREFIX: string;
    const SDP_BWTYPE_RR: string;
    const SDP_BWTYPE_RS: string;
    const SDP_BWTYPE_TIAS: string;
    function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean;
    function sdp_make_keymgmt(uri: string, base64: string): string;
    function sdp_media_add_media_from_structure(structure: Gst.Structure): [SDPResult, SDPMedia];
    function sdp_media_init(): [SDPResult, SDPMedia];
    function sdp_media_new(): [SDPResult, SDPMedia];
    function sdp_media_set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];
    function sdp_message_as_uri(scheme: string, msg: SDPMessage): string;
    function sdp_message_init(): [SDPResult, SDPMessage];
    function sdp_message_new(): [SDPResult, SDPMessage];
    function sdp_message_new_from_text(text: string): [SDPResult, SDPMessage];
    function sdp_message_parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
    function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult;
    abstract class MIKEYDecryptInfo {
        static $gtype: GObject.GType<MIKEYDecryptInfo>;
    }
    abstract class MIKEYEncryptInfo {
        static $gtype: GObject.GType<MIKEYEncryptInfo>;
    }
    class MIKEYMapSRTP {
        static $gtype: GObject.GType<MIKEYMapSRTP>;
        policy: number;
        ssrc: number;
        roc: number;
        constructor(properties?: Partial<{
            policy: number;
            ssrc: number;
            roc: number;
        }>);
    }
    class MIKEYMessage {
        static $gtype: GObject.GType<MIKEYMessage>;
        version: number;
        type: MIKEYType;
        V: boolean;
        prf_func: MIKEYPRFFunc;
        CSB_id: number;
        map_type: MIKEYMapType;
        map_info: null[];
        payloads: null[];
        constructor(properties?: Partial<{
            version: number;
            type: MIKEYType;
            V: boolean;
            prf_func: MIKEYPRFFunc;
            CSB_id: number;
            map_type: MIKEYMapType;
            map_info: null[];
            payloads: null[];
        }>);
        static ["new"](): MIKEYMessage;
        static new_from_bytes(bytes: GLib.Bytes | Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage;
        static new_from_caps(caps: Gst.Caps): MIKEYMessage;
        static new_from_data(data: Uint8Array | string, info: MIKEYDecryptInfo): MIKEYMessage;
        add_cs_srtp(policy: number, ssrc: number, roc: number): boolean;
        add_payload(payload: MIKEYPayload): boolean;
        add_pke(C: MIKEYCacheType, data: Uint8Array | string): boolean;
        add_rand(rand: Uint8Array | string): boolean;
        add_rand_len(len: number): boolean;
        add_t(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
        add_t_now_ntp_utc(): boolean;
        base64_encode(): string;
        find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload | null;
        get_cs_srtp(idx: number): MIKEYMapSRTP | null;
        get_n_cs(): number;
        get_n_payloads(): number;
        get_payload(idx: number): MIKEYPayload | null;
        insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
        insert_payload(idx: number, payload: MIKEYPayload): boolean;
        remove_cs_srtp(idx: number): boolean;
        remove_payload(idx: number): boolean;
        replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
        replace_payload(idx: number, payload: MIKEYPayload): boolean;
        set_info(version: number, type: MIKEYType, V: boolean, prf_func: MIKEYPRFFunc, CSB_id: number, map_type: MIKEYMapType): boolean;
        to_bytes(info: MIKEYEncryptInfo): GLib.Bytes;
        to_caps(caps: Gst.Caps): boolean;
    }
    class MIKEYPayload {
        static $gtype: GObject.GType<MIKEYPayload>;
        type: MIKEYPayloadType;
        len: number;
        constructor(type: MIKEYPayloadType);
        static ["new"](type: MIKEYPayloadType): MIKEYPayload;
        kemac_add_sub(newpay: MIKEYPayload): boolean;
        kemac_get_n_sub(): number;
        kemac_get_sub(idx: number): MIKEYPayload | null;
        kemac_remove_sub(idx: number): boolean;
        kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean;
        key_data_set_interval(vf_data: Uint8Array | string, vt_data: Uint8Array | string): boolean;
        key_data_set_key(key_type: MIKEYKeyDataType, key_data: Uint8Array | string): boolean;
        key_data_set_salt(salt_data: Uint8Array | string | null): boolean;
        key_data_set_spi(spi_data: Uint8Array | string): boolean;
        pke_set(C: MIKEYCacheType, data: Uint8Array | string): boolean;
        rand_set(rand: Uint8Array | string): boolean;
        sp_add_param(type: number, val: Uint8Array | string): boolean;
        sp_get_n_params(): number;
        sp_get_param(idx: number): MIKEYPayloadSPParam | null;
        sp_remove_param(idx: number): boolean;
        sp_set(policy: number, proto: MIKEYSecProto): boolean;
        t_set(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
    }
    class MIKEYPayloadKEMAC {
        static $gtype: GObject.GType<MIKEYPayloadKEMAC>;
        enc_alg: MIKEYEncAlg;
        mac_alg: MIKEYMacAlg;
        subpayloads: null[];
    }
    class MIKEYPayloadKeyData {
        static $gtype: GObject.GType<MIKEYPayloadKeyData>;
        key_type: MIKEYKeyDataType;
        key_len: number;
        key_data: number;
        salt_len: number;
        salt_data: number;
        kv_type: MIKEYKVType;
        kv_len: Uint8Array;
        kv_data: Uint8Array;
    }
    class MIKEYPayloadPKE {
        static $gtype: GObject.GType<MIKEYPayloadPKE>;
        C: MIKEYCacheType;
        data_len: number;
        data: number;
    }
    class MIKEYPayloadRAND {
        static $gtype: GObject.GType<MIKEYPayloadRAND>;
        len: number;
        rand: number;
    }
    class MIKEYPayloadSP {
        static $gtype: GObject.GType<MIKEYPayloadSP>;
        policy: number;
        proto: MIKEYSecProto;
        params: null[];
    }
    class MIKEYPayloadSPParam {
        static $gtype: GObject.GType<MIKEYPayloadSPParam>;
        type: number;
        len: number;
        val: number;
        constructor(properties?: Partial<{
            type: number;
            len: number;
            val: number;
        }>);
    }
    class MIKEYPayloadT {
        static $gtype: GObject.GType<MIKEYPayloadT>;
        type: MIKEYTSType;
        ts_value: number;
    }
    class SDPAttribute {
        static $gtype: GObject.GType<SDPAttribute>;
        key: string;
        value: string;
        constructor(properties?: Partial<{
            key: string;
            value: string;
        }>);
        clear(): SDPResult;
        set(key: string, value: string | null): SDPResult;
    }
    class SDPBandwidth {
        static $gtype: GObject.GType<SDPBandwidth>;
        bwtype: string;
        bandwidth: number;
        constructor(properties?: Partial<{
            bwtype: string;
            bandwidth: number;
        }>);
        clear(): SDPResult;
        set(bwtype: string, bandwidth: number): SDPResult;
    }
    class SDPConnection {
        static $gtype: GObject.GType<SDPConnection>;
        nettype: string;
        addrtype: string;
        address: string;
        ttl: number;
        addr_number: number;
        constructor(properties?: Partial<{
            nettype: string;
            addrtype: string;
            address: string;
            ttl: number;
            addr_number: number;
        }>);
        clear(): SDPResult;
        set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
    }
    class SDPKey {
        static $gtype: GObject.GType<SDPKey>;
        type: string;
        data: string;
        constructor(properties?: Partial<{
            type: string;
            data: string;
        }>);
    }
    class SDPMedia {
        static $gtype: GObject.GType<SDPMedia>;
        media: string;
        port: number;
        num_ports: number;
        proto: string;
        fmts: null[];
        information: string;
        connections: null[];
        bandwidths: null[];
        key: SDPKey;
        attributes: null[];
        constructor(properties?: Partial<{
            media: string;
            port: number;
            num_ports: number;
            proto: string;
            fmts: null[];
            information: string;
            connections: null[];
            bandwidths: null[];
            key: SDPKey;
            attributes: null[];
        }>);
        static add_media_from_structure(structure: Gst.Structure): [SDPResult, SDPMedia];
        static init(): [SDPResult, SDPMedia];
        static ["new"](): [SDPResult, SDPMedia];
        static set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];
        add_attribute(key: string, value: string | null): SDPResult;
        add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
        add_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
        add_format(format: string): SDPResult;
        as_text(): string;
        attributes_len(): number;
        attributes_to_caps(caps: Gst.Caps): SDPResult;
        bandwidths_len(): number;
        connections_len(): number;
        copy(): [SDPResult, SDPMedia];
        formats_len(): number;
        free(): SDPResult;
        get_attribute(idx: number): SDPAttribute;
        get_attribute_val(key: string): string | null;
        get_attribute_val_n(key: string, nth: number): string | null;
        get_bandwidth(idx: number): SDPBandwidth;
        get_caps_from_media(pt: number): Gst.Caps | null;
        get_connection(idx: number): SDPConnection;
        get_format(idx: number): string;
        get_information(): string;
        get_key(): SDPKey;
        get_media(): string;
        get_num_ports(): number;
        get_port(): number;
        get_proto(): string;
        insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
        insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
        insert_connection(idx: number, conn: SDPConnection): SDPResult;
        insert_format(idx: number, format: string): SDPResult;
        parse_keymgmt(): [SDPResult, MIKEYMessage];
        remove_attribute(idx: number): SDPResult;
        remove_bandwidth(idx: number): SDPResult;
        remove_connection(idx: number): SDPResult;
        remove_format(idx: number): SDPResult;
        replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
        replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
        replace_connection(idx: number, conn: SDPConnection): SDPResult;
        replace_format(idx: number, format: string): SDPResult;
        set_information(information: string): SDPResult;
        set_key(type: string, data: string): SDPResult;
        set_media(med: string): SDPResult;
        set_port_info(port: number, num_ports: number): SDPResult;
        set_proto(proto: string): SDPResult;
        uninit(): SDPResult;
    }
    class SDPMessage {
        static $gtype: GObject.GType<SDPMessage>;
        version: string;
        origin: SDPOrigin;
        session_name: string;
        information: string;
        uri: string;
        emails: null[];
        phones: null[];
        connection: SDPConnection;
        bandwidths: null[];
        times: null[];
        zones: null[];
        key: SDPKey;
        attributes: null[];
        medias: null[];
        constructor(properties?: Partial<{
            version: string;
            origin: SDPOrigin;
            session_name: string;
            information: string;
            uri: string;
            emails: null[];
            phones: null[];
            connection: SDPConnection;
            bandwidths: null[];
            times: null[];
            zones: null[];
            key: SDPKey;
            attributes: null[];
            medias: null[];
        }>);
        static as_uri(scheme: string, msg: SDPMessage): string;
        static init(): [SDPResult, SDPMessage];
        static ["new"](): [SDPResult, SDPMessage];
        static new_from_text(text: string): [SDPResult, SDPMessage];
        static parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
        static parse_uri(uri: string, msg: SDPMessage): SDPResult;
        add_attribute(key: string, value: string | null): SDPResult;
        add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
        add_email(email: string): SDPResult;
        add_media(media: SDPMedia): SDPResult;
        add_phone(phone: string): SDPResult;
        add_time(start: string, stop: string, repeat: string[]): SDPResult;
        add_zone(adj_time: string, typed_time: string): SDPResult;
        as_text(): string;
        attributes_len(): number;
        attributes_to_caps(caps: Gst.Caps): SDPResult;
        bandwidths_len(): number;
        copy(): [SDPResult, SDPMessage];
        dump(): SDPResult;
        emails_len(): number;
        free(): SDPResult;
        get_attribute(idx: number): SDPAttribute;
        get_attribute_val(key: string): string | null;
        get_attribute_val_n(key: string, nth: number): string | null;
        get_bandwidth(idx: number): SDPBandwidth;
        get_connection(): SDPConnection;
        get_email(idx: number): string;
        get_information(): string;
        get_key(): SDPKey;
        get_media(idx: number): SDPMedia;
        get_origin(): SDPOrigin;
        get_phone(idx: number): string;
        get_session_name(): string;
        get_time(idx: number): SDPTime;
        get_uri(): string;
        get_version(): string;
        get_zone(idx: number): SDPZone;
        insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
        insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
        insert_email(idx: number, email: string): SDPResult;
        insert_phone(idx: number, phone: string): SDPResult;
        insert_time(idx: number, t: SDPTime): SDPResult;
        insert_zone(idx: number, zone: SDPZone): SDPResult;
        medias_len(): number;
        parse_keymgmt(): [SDPResult, MIKEYMessage];
        phones_len(): number;
        remove_attribute(idx: number): SDPResult;
        remove_bandwidth(idx: number): SDPResult;
        remove_email(idx: number): SDPResult;
        remove_media(idx: number): SDPResult;
        remove_phone(idx: number): SDPResult;
        remove_time(idx: number): SDPResult;
        remove_zone(idx: number): SDPResult;
        replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
        replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
        replace_email(idx: number, email: string): SDPResult;
        replace_phone(idx: number, phone: string): SDPResult;
        replace_time(idx: number, t: SDPTime): SDPResult;
        replace_zone(idx: number, zone: SDPZone): SDPResult;
        set_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
        set_information(information: string): SDPResult;
        set_key(type: string, data: string): SDPResult;
        set_origin(username: string, sess_id: string, sess_version: string, nettype: string, addrtype: string, addr: string): SDPResult;
        set_session_name(session_name: string): SDPResult;
        set_uri(uri: string): SDPResult;
        set_version(version: string): SDPResult;
        times_len(): number;
        uninit(): SDPResult;
        zones_len(): number;
    }
    class SDPOrigin {
        static $gtype: GObject.GType<SDPOrigin>;
        username: string;
        sess_id: string;
        sess_version: string;
        nettype: string;
        addrtype: string;
        addr: string;
        constructor(properties?: Partial<{
            username: string;
            sess_id: string;
            sess_version: string;
            nettype: string;
            addrtype: string;
            addr: string;
        }>);
    }
    class SDPTime {
        static $gtype: GObject.GType<SDPTime>;
        start: string;
        stop: string;
        repeat: null[];
        constructor(properties?: Partial<{
            start: string;
            stop: string;
            repeat: null[];
        }>);
        clear(): SDPResult;
        set(start: string, stop: string, repeat: string[]): SDPResult;
    }
    class SDPZone {
        static $gtype: GObject.GType<SDPZone>;
        time: string;
        typed_time: string;
        constructor(properties?: Partial<{
            time: string;
            typed_time: string;
        }>);
        clear(): SDPResult;
        set(adj_time: string, typed_time: string): SDPResult;
    }
    const __name__: string;
    const __version__: string;
}
export default GstSdp;
}
declare module 'gi://GstSdp' {
    import GstSdp10 from 'gi://GstSdp?version=1.0';
    export default GstSdp10;
}
