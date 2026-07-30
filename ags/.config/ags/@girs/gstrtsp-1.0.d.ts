declare module 'gi://GstRtsp?version=1.0' {
import type GstSdp from 'gi://GstSdp?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
export namespace GstRtsp {
    export namespace RTSPAuthMethod {
        export const $gtype: GObject.GType<RTSPAuthMethod>;
    }
    enum RTSPAuthMethod {
        NONE,
        BASIC,
        DIGEST,
    }
    export namespace RTSPFamily {
        export const $gtype: GObject.GType<RTSPFamily>;
    }
    enum RTSPFamily {
        NONE,
        INET,
        INET6,
    }
    export namespace RTSPHeaderField {
        export const $gtype: GObject.GType<RTSPHeaderField>;
    }
    enum RTSPHeaderField {
        INVALID,
        ACCEPT,
        ACCEPT_ENCODING,
        ACCEPT_LANGUAGE,
        ALLOW,
        AUTHORIZATION,
        BANDWIDTH,
        BLOCKSIZE,
        CACHE_CONTROL,
        CONFERENCE,
        CONNECTION,
        CONTENT_BASE,
        CONTENT_ENCODING,
        CONTENT_LANGUAGE,
        CONTENT_LENGTH,
        CONTENT_LOCATION,
        CONTENT_TYPE,
        CSEQ,
        DATE,
        EXPIRES,
        FROM,
        IF_MODIFIED_SINCE,
        LAST_MODIFIED,
        PROXY_AUTHENTICATE,
        PROXY_REQUIRE,
        PUBLIC,
        RANGE,
        REFERER,
        REQUIRE,
        RETRY_AFTER,
        RTP_INFO,
        SCALE,
        SESSION,
        SERVER,
        SPEED,
        TRANSPORT,
        UNSUPPORTED,
        USER_AGENT,
        VIA,
        WWW_AUTHENTICATE,
        CLIENT_CHALLENGE,
        REAL_CHALLENGE1,
        REAL_CHALLENGE2,
        REAL_CHALLENGE3,
        SUBSCRIBE,
        ALERT,
        CLIENT_ID,
        COMPANY_ID,
        GUID,
        REGION_DATA,
        MAX_ASM_WIDTH,
        LANGUAGE,
        PLAYER_START_TIME,
        LOCATION,
        ETAG,
        IF_MATCH,
        ACCEPT_CHARSET,
        SUPPORTED,
        VARY,
        X_ACCELERATE_STREAMING,
        X_ACCEPT_AUTHENT,
        X_ACCEPT_PROXY_AUTHENT,
        X_BROADCAST_ID,
        X_BURST_STREAMING,
        X_NOTICE,
        X_PLAYER_LAG_TIME,
        X_PLAYLIST,
        X_PLAYLIST_CHANGE_NOTICE,
        X_PLAYLIST_GEN_ID,
        X_PLAYLIST_SEEK_ID,
        X_PROXY_CLIENT_AGENT,
        X_PROXY_CLIENT_VERB,
        X_RECEDING_PLAYLISTCHANGE,
        X_RTP_INFO,
        X_STARTUPPROFILE,
        TIMESTAMP,
        AUTHENTICATION_INFO,
        HOST,
        PRAGMA,
        X_SERVER_IP_ADDRESS,
        X_SESSIONCOOKIE,
        RTCP_INTERVAL,
        KEYMGMT,
        PIPELINED_REQUESTS,
        MEDIA_PROPERTIES,
        SEEK_STYLE,
        ACCEPT_RANGES,
        FRAMES,
        RATE_CONTROL,
        LAST,
    }
    export namespace RTSPMsgType {
        export const $gtype: GObject.GType<RTSPMsgType>;
    }
    enum RTSPMsgType {
        INVALID,
        REQUEST,
        RESPONSE,
        HTTP_REQUEST,
        HTTP_RESPONSE,
        DATA,
    }
    export namespace RTSPRangeUnit {
        export const $gtype: GObject.GType<RTSPRangeUnit>;
    }
    enum RTSPRangeUnit {
        SMPTE,
        SMPTE_30_DROP,
        SMPTE_25,
        NPT,
        CLOCK,
    }
    export namespace RTSPResult {
        export const $gtype: GObject.GType<RTSPResult>;
    }
    enum RTSPResult {
        OK,
        OK_REDIRECT,
        ERROR,
        EINVAL,
        EINTR,
        ENOMEM,
        ERESOLV,
        ENOTIMPL,
        ESYS,
        EPARSE,
        EWSASTART,
        EWSAVERSION,
        EEOF,
        ENET,
        ENOTIP,
        ETIMEOUT,
        ETGET,
        ETPOST,
        ELAST,
    }
    export namespace RTSPState {
        export const $gtype: GObject.GType<RTSPState>;
    }
    enum RTSPState {
        INVALID,
        INIT,
        READY,
        SEEKING,
        PLAYING,
        RECORDING,
    }
    export namespace RTSPStatusCode {
        export const $gtype: GObject.GType<RTSPStatusCode>;
    }
    enum RTSPStatusCode {
        INVALID,
        CONTINUE,
        OK,
        CREATED,
        LOW_ON_STORAGE,
        MULTIPLE_CHOICES,
        MOVED_PERMANENTLY,
        MOVE_TEMPORARILY,
        SEE_OTHER,
        NOT_MODIFIED,
        USE_PROXY,
        REDIRECT_TEMPORARILY,
        REDIRECT_PERMANENTLY,
        BAD_REQUEST,
        UNAUTHORIZED,
        PAYMENT_REQUIRED,
        FORBIDDEN,
        NOT_FOUND,
        METHOD_NOT_ALLOWED,
        NOT_ACCEPTABLE,
        PROXY_AUTH_REQUIRED,
        REQUEST_TIMEOUT,
        GONE,
        LENGTH_REQUIRED,
        PRECONDITION_FAILED,
        REQUEST_ENTITY_TOO_LARGE,
        REQUEST_URI_TOO_LARGE,
        UNSUPPORTED_MEDIA_TYPE,
        PARAMETER_NOT_UNDERSTOOD,
        CONFERENCE_NOT_FOUND,
        NOT_ENOUGH_BANDWIDTH,
        SESSION_NOT_FOUND,
        METHOD_NOT_VALID_IN_THIS_STATE,
        HEADER_FIELD_NOT_VALID_FOR_RESOURCE,
        INVALID_RANGE,
        PARAMETER_IS_READONLY,
        AGGREGATE_OPERATION_NOT_ALLOWED,
        ONLY_AGGREGATE_OPERATION_ALLOWED,
        UNSUPPORTED_TRANSPORT,
        DESTINATION_UNREACHABLE,
        KEY_MANAGEMENT_FAILURE,
        INTERNAL_SERVER_ERROR,
        NOT_IMPLEMENTED,
        BAD_GATEWAY,
        SERVICE_UNAVAILABLE,
        GATEWAY_TIMEOUT,
        RTSP_VERSION_NOT_SUPPORTED,
        OPTION_NOT_SUPPORTED,
    }
    export namespace RTSPTimeType {
        export const $gtype: GObject.GType<RTSPTimeType>;
    }
    enum RTSPTimeType {
        SECONDS,
        NOW,
        END,
        FRAMES,
        UTC,
    }
    export namespace RTSPVersion {
        export const $gtype: GObject.GType<RTSPVersion>;
    }
    enum RTSPVersion {
        INVALID,
        "1_0",
        "1_1",
        "2_0",
    }
    const RTSP_DEFAULT_PORT: number;
    function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void;
    function rtsp_connection_accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection | null];
    function rtsp_connection_create(url: RTSPUrl): [RTSPResult, RTSPConnection];
    function rtsp_connection_create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection | null];
    function rtsp_find_header_field(header: string): RTSPHeaderField;
    function rtsp_find_method(method: string): RTSPMethod;
    function rtsp_generate_digest_auth_response(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string | null;
    function rtsp_generate_digest_auth_response_from_md5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string | null;
    function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean;
    function rtsp_header_as_text(field: RTSPHeaderField): string | null;
    function rtsp_message_new(): [RTSPResult, RTSPMessage];
    function rtsp_message_new_data(channel: number): [RTSPResult, RTSPMessage];
    function rtsp_message_new_request(method: RTSPMethod, uri: string): [RTSPResult, RTSPMessage];
    function rtsp_message_new_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): [RTSPResult, RTSPMessage];
    function rtsp_method_as_text(method: RTSPMethod): string | null;
    function rtsp_options_as_text(options: RTSPMethod): string;
    function rtsp_options_from_text(options: string): RTSPMethod;
    function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
    function rtsp_range_free(range: RTSPTimeRange): void;
    function rtsp_range_get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
    function rtsp_range_parse(rangestr: string): [RTSPResult, RTSPTimeRange];
    function rtsp_range_to_string(range: RTSPTimeRange): string;
    function rtsp_status_as_text(code: RTSPStatusCode): string;
    function rtsp_strresult(result: RTSPResult): string;
    function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
    function rtsp_transport_get_mime(trans: RTSPTransMode): [RTSPResult, string];
    function rtsp_transport_init(): [RTSPResult, RTSPTransport];
    function rtsp_transport_new(): [RTSPResult, RTSPTransport];
    function rtsp_transport_parse(str: string): [RTSPResult, RTSPTransport];
    function rtsp_url_parse(urlstr: string): [RTSPResult, RTSPUrl | null];
    function rtsp_version_as_text(version: RTSPVersion): string;
    interface RTSPConnectionAcceptCertificateFunc {
        (conn: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
    }
    export namespace RTSPEvent {
        export const $gtype: GObject.GType<RTSPEvent>;
    }
    enum RTSPEvent {
        READ,
        WRITE,
    }
    export namespace RTSPLowerTrans {
        export const $gtype: GObject.GType<RTSPLowerTrans>;
    }
    enum RTSPLowerTrans {
        UNKNOWN,
        UDP,
        UDP_MCAST,
        TCP,
        HTTP,
        TLS,
    }
    export namespace RTSPMethod {
        export const $gtype: GObject.GType<RTSPMethod>;
    }
    enum RTSPMethod {
        INVALID,
        DESCRIBE,
        ANNOUNCE,
        GET_PARAMETER,
        OPTIONS,
        PAUSE,
        PLAY,
        RECORD,
        REDIRECT,
        SETUP,
        SET_PARAMETER,
        TEARDOWN,
        GET,
        POST,
    }
    export namespace RTSPProfile {
        export const $gtype: GObject.GType<RTSPProfile>;
    }
    enum RTSPProfile {
        UNKNOWN,
        AVP,
        SAVP,
        AVPF,
        SAVPF,
    }
    export namespace RTSPTransMode {
        export const $gtype: GObject.GType<RTSPTransMode>;
    }
    enum RTSPTransMode {
        UNKNOWN,
        RTP,
        RDT,
    }
    class RTSPAuthCredential {
        static $gtype: GObject.GType<RTSPAuthCredential>;
        scheme: RTSPAuthMethod;
        params: RTSPAuthParam;
        authorization: string;
    }
    class RTSPAuthParam {
        static $gtype: GObject.GType<RTSPAuthParam>;
        name: string;
        value: string;
        constructor(properties?: Partial<{
            name: string;
            value: string;
        }>);
        copy(): RTSPAuthParam;
        free(): void;
    }
    abstract class RTSPConnection {
        static $gtype: GObject.GType<RTSPConnection>;
        static accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection | null];
        static create(url: RTSPUrl): [RTSPResult, RTSPConnection];
        static create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection | null];
        add_extra_http_request_header(key: string, value: string): void;
        clear_auth_params(): void;
        close(): RTSPResult;
        connect(timeout: GLib.TimeVal): RTSPResult;
        connect_usec(timeout: bigint | number): RTSPResult;
        connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult;
        connect_with_response_usec(timeout: bigint | number, response: RTSPMessage): RTSPResult;
        do_tunnel(conn2: RTSPConnection | null): RTSPResult;
        flush(flush: boolean): RTSPResult;
        free(): RTSPResult;
        get_ignore_x_server_reply(): boolean;
        get_ip(): string | null;
        get_read_socket(): Gio.Socket | null;
        get_remember_session_id(): boolean;
        get_tls(): Gio.TlsConnection;
        get_tls_database(): Gio.TlsDatabase | null;
        get_tls_interaction(): Gio.TlsInteraction | null;
        get_tls_validation_flags(): Gio.TlsCertificateFlags;
        get_tunnelid(): string | null;
        get_url(): RTSPUrl;
        get_write_socket(): Gio.Socket | null;
        is_tunneled(): boolean;
        next_timeout(timeout: GLib.TimeVal): RTSPResult;
        next_timeout_usec(): number;
        poll(events: RTSPEvent, timeout: GLib.TimeVal): [RTSPResult, RTSPEvent];
        poll_usec(events: RTSPEvent, timeout: bigint | number): [RTSPResult, RTSPEvent];
        read(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
        read_usec(data: Uint8Array | string, timeout: bigint | number): RTSPResult;
        receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
        receive_usec(message: RTSPMessage, timeout: bigint | number): RTSPResult;
        reset_timeout(): RTSPResult;
        send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
        send_messages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult;
        send_messages_usec(messages: RTSPMessage[], timeout: bigint | number): RTSPResult;
        send_usec(message: RTSPMessage, timeout: bigint | number): RTSPResult;
        set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc): void;
        set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult;
        set_auth_param(param: string, value: string): void;
        set_content_length_limit(limit: number): void;
        set_http_mode(enable: boolean): void;
        set_ignore_x_server_reply(ignore: boolean): void;
        set_ip(ip: string): void;
        set_proxy(host: string, port: number): RTSPResult;
        set_qos_dscp(qos_dscp: number): RTSPResult;
        set_remember_session_id(remember: boolean): void;
        set_tls_database(database: Gio.TlsDatabase | null): void;
        set_tls_interaction(interaction: Gio.TlsInteraction | null): void;
        set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean;
        set_tunneled(tunneled: boolean): void;
        write(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
        write_usec(data: Uint8Array | string, timeout: bigint | number): RTSPResult;
    }
    type RTSPExtensionInterface = typeof RTSPExtension;
    class RTSPMessage {
        static $gtype: GObject.GType<RTSPMessage>;
        type: RTSPMsgType;
        add_header(field: RTSPHeaderField, value: string): RTSPResult;
        add_header_by_name(header: string, value: string): RTSPResult;
        append_headers(str: GLib.String): RTSPResult;
        copy(): [RTSPResult, RTSPMessage | null];
        dump(): RTSPResult;
        free(): RTSPResult;
        get_body(): [RTSPResult, Uint8Array];
        get_body_buffer(): [RTSPResult, Gst.Buffer];
        get_header(field: RTSPHeaderField, indx: number): [RTSPResult, string];
        get_header_by_name(header: string, index: number): [RTSPResult, string];
        get_type(): RTSPMsgType;
        has_body_buffer(): boolean;
        init(): RTSPResult;
        init_data(channel: number): RTSPResult;
        init_request(method: RTSPMethod, uri: string): RTSPResult;
        init_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): RTSPResult;
        parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[];
        parse_data(): [RTSPResult, number];
        parse_request(): [RTSPResult, RTSPMethod | null, string, RTSPVersion | null];
        parse_response(): [RTSPResult, RTSPStatusCode | null, string, RTSPVersion | null];
        remove_header(field: RTSPHeaderField, indx: number): RTSPResult;
        remove_header_by_name(header: string, index: number): RTSPResult;
        set_body(data: Uint8Array | string): RTSPResult;
        set_body_buffer(buffer: Gst.Buffer): RTSPResult;
        steal_body(): [RTSPResult, Uint8Array];
        steal_body_buffer(): [RTSPResult, Gst.Buffer];
        take_body(data: Uint8Array | string): RTSPResult;
        take_body_buffer(buffer: Gst.Buffer): RTSPResult;
        take_header(field: RTSPHeaderField, value: string): RTSPResult;
        take_header_by_name(header: string, value: string): RTSPResult;
        unset(): RTSPResult;
    }
    class RTSPRange {
        static $gtype: GObject.GType<RTSPRange>;
        min: number;
        max: number;
        constructor(properties?: Partial<{
            min: number;
            max: number;
        }>);
        static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
        static free(range: RTSPTimeRange): void;
        static get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
        static parse(rangestr: string): [RTSPResult, RTSPTimeRange];
        static to_string(range: RTSPTimeRange): string;
    }
    class RTSPTime {
        static $gtype: GObject.GType<RTSPTime>;
        type: RTSPTimeType;
        seconds: number;
    }
    class RTSPTime2 {
        static $gtype: GObject.GType<RTSPTime2>;
        frames: number;
        year: number;
        month: number;
        day: number;
        constructor(properties?: Partial<{
            frames: number;
            year: number;
            month: number;
            day: number;
        }>);
    }
    class RTSPTimeRange {
        static $gtype: GObject.GType<RTSPTimeRange>;
        unit: RTSPRangeUnit;
        min2: RTSPTime2;
        max2: RTSPTime2;
    }
    class RTSPTransport {
        static $gtype: GObject.GType<RTSPTransport>;
        trans: RTSPTransMode;
        profile: RTSPProfile;
        lower_transport: RTSPLowerTrans;
        destination: string;
        source: string;
        layers: number;
        mode_play: boolean;
        mode_record: boolean;
        append: boolean;
        interleaved: RTSPRange;
        ttl: number;
        port: RTSPRange;
        client_port: RTSPRange;
        server_port: RTSPRange;
        ssrc: number;
        static get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
        static get_mime(trans: RTSPTransMode): [RTSPResult, string];
        static init(): [RTSPResult, RTSPTransport];
        static ["new"](): [RTSPResult, RTSPTransport];
        static parse(str: string): [RTSPResult, RTSPTransport];
        as_text(): string | null;
        free(): RTSPResult;
        get_media_type(): [RTSPResult, string];
    }
    class RTSPUrl {
        static $gtype: GObject.GType<RTSPUrl>;
        transports: RTSPLowerTrans;
        family: RTSPFamily;
        user: string;
        passwd: string;
        host: string;
        port: number;
        abspath: string;
        query: string;
        static parse(urlstr: string): [RTSPResult, RTSPUrl | null];
        copy(): RTSPUrl;
        decode_path_components(): string[];
        free(): void;
        get_port(): [RTSPResult, number];
        get_request_uri(): string;
        get_request_uri_with_control(control_path: string): string;
        set_port(port: number): RTSPResult;
    }
    abstract class RTSPWatch {
        static $gtype: GObject.GType<RTSPWatch>;
        attach(context: GLib.MainContext | null): number;
        get_send_backlog(): [number, number];
        reset(): void;
        send_message(message: RTSPMessage): [RTSPResult, number];
        send_messages(messages: RTSPMessage[]): [RTSPResult, number];
        set_flushing(flushing: boolean): void;
        set_send_backlog(bytes: bigint | number, messages: number): void;
        unref(): void;
        wait_backlog(timeout: GLib.TimeVal): RTSPResult;
        wait_backlog_usec(timeout: bigint | number): RTSPResult;
        write_data(data: Uint8Array | string): [RTSPResult, number];
    }
    class RTSPWatchFuncs {
        static $gtype: GObject.GType<RTSPWatchFuncs>;
        constructor(properties?: Partial<{}>);
    }
    namespace RTSPExtension {
        interface Interface {
            vfunc_after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            vfunc_before_send(req: RTSPMessage): RTSPResult;
            vfunc_configure_stream(caps: Gst.Caps): boolean;
            vfunc_detect_server(resp: RTSPMessage): boolean;
            vfunc_get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
            vfunc_parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
            vfunc_receive_request(req: RTSPMessage): RTSPResult;
            vfunc_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
            vfunc_setup_media(media: GstSdp.SDPMedia): RTSPResult;
            vfunc_stream_select(url: RTSPUrl): RTSPResult;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface RTSPExtensionNamespace {
        $gtype: GObject.GType<RTSPExtension>;
        prototype: RTSPExtension;
    }
    interface RTSPExtension extends GObject.Object, RTSPExtension.Interface {
        after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
        before_send(req: RTSPMessage): RTSPResult;
        configure_stream(caps: Gst.Caps): boolean;
        detect_server(resp: RTSPMessage): boolean;
        get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
        parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
        receive_request(req: RTSPMessage): RTSPResult;
        send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
        setup_media(media: GstSdp.SDPMedia): RTSPResult;
        stream_select(url: RTSPUrl): RTSPResult;
    }
    export const RTSPExtension: RTSPExtensionNamespace & {
        new (): RTSPExtension; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstRtsp;
}
declare module 'gi://GstRtsp' {
    import GstRtsp10 from 'gi://GstRtsp?version=1.0';
    export default GstRtsp10;
}
