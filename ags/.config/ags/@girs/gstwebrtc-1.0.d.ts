declare module 'gi://GstWebRTC?version=1.0' {
import type GstSdp from 'gi://GstSdp?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstWebRTC {
    export namespace WebRTCBundlePolicy {
        export const $gtype: GObject.GType<WebRTCBundlePolicy>;
    }
    enum WebRTCBundlePolicy {
        NONE,
        BALANCED,
        MAX_COMPAT,
        MAX_BUNDLE,
    }
    export namespace WebRTCDTLSRole {
        export const $gtype: GObject.GType<WebRTCDTLSRole>;
    }
    enum WebRTCDTLSRole {
        CLIENT,
        SERVER,
        UNKNOWN,
    }
    export namespace WebRTCDTLSSetup {
        export const $gtype: GObject.GType<WebRTCDTLSSetup>;
    }
    enum WebRTCDTLSSetup {
        NONE,
        ACTPASS,
        ACTIVE,
        PASSIVE,
    }
    export namespace WebRTCDTLSTransportState {
        export const $gtype: GObject.GType<WebRTCDTLSTransportState>;
    }
    enum WebRTCDTLSTransportState {
        NEW,
        CLOSED,
        FAILED,
        CONNECTING,
        CONNECTED,
    }
    export namespace WebRTCDataChannelState {
        export const $gtype: GObject.GType<WebRTCDataChannelState>;
    }
    enum WebRTCDataChannelState {
        CONNECTING,
        OPEN,
        CLOSING,
        CLOSED,
    }
    class WebRTCError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static DATA_CHANNEL_FAILURE: number;
        static DTLS_FAILURE: number;
        static FINGERPRINT_FAILURE: number;
        static SCTP_FAILURE: number;
        static SDP_SYNTAX_ERROR: number;
        static HARDWARE_ENCODER_NOT_AVAILABLE: number;
        static ENCODER_ERROR: number;
        static INVALID_STATE: number;
        static INTERNAL_FAILURE: number;
        static INVALID_MODIFICATION: number;
        static TYPE_ERROR: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace WebRTCFECType {
        export const $gtype: GObject.GType<WebRTCFECType>;
    }
    enum WebRTCFECType {
        NONE,
        ULP_RED,
    }
    export namespace WebRTCICECandidateProtocolType {
        export const $gtype: GObject.GType<WebRTCICECandidateProtocolType>;
    }
    enum WebRTCICECandidateProtocolType {
        TCP,
        UDP,
    }
    export namespace WebRTCICECandidateType {
        export const $gtype: GObject.GType<WebRTCICECandidateType>;
    }
    enum WebRTCICECandidateType {
        HOST,
        SERVER_REFLEXIVE,
        PEER_REFLEXIVE,
        RELAYED,
    }
    export namespace WebRTCICEComponent {
        export const $gtype: GObject.GType<WebRTCICEComponent>;
    }
    enum WebRTCICEComponent {
        RTP,
        RTCP,
    }
    export namespace WebRTCICEConnectionState {
        export const $gtype: GObject.GType<WebRTCICEConnectionState>;
    }
    enum WebRTCICEConnectionState {
        NEW,
        CHECKING,
        CONNECTED,
        COMPLETED,
        FAILED,
        DISCONNECTED,
        CLOSED,
    }
    export namespace WebRTCICEGatheringState {
        export const $gtype: GObject.GType<WebRTCICEGatheringState>;
    }
    enum WebRTCICEGatheringState {
        NEW,
        GATHERING,
        COMPLETE,
    }
    export namespace WebRTCICERole {
        export const $gtype: GObject.GType<WebRTCICERole>;
    }
    enum WebRTCICERole {
        CONTROLLED,
        CONTROLLING,
    }
    export namespace WebRTCICETcpCandidateType {
        export const $gtype: GObject.GType<WebRTCICETcpCandidateType>;
    }
    enum WebRTCICETcpCandidateType {
        ACTIVE,
        PASSIVE,
        SO,
        NONE,
    }
    export namespace WebRTCICETransportPolicy {
        export const $gtype: GObject.GType<WebRTCICETransportPolicy>;
    }
    enum WebRTCICETransportPolicy {
        ALL,
        RELAY,
    }
    export namespace WebRTCKind {
        export const $gtype: GObject.GType<WebRTCKind>;
    }
    enum WebRTCKind {
        UNKNOWN,
        AUDIO,
        VIDEO,
    }
    export namespace WebRTCPeerConnectionState {
        export const $gtype: GObject.GType<WebRTCPeerConnectionState>;
    }
    enum WebRTCPeerConnectionState {
        NEW,
        CONNECTING,
        CONNECTED,
        DISCONNECTED,
        FAILED,
        CLOSED,
    }
    export namespace WebRTCPriorityType {
        export const $gtype: GObject.GType<WebRTCPriorityType>;
    }
    enum WebRTCPriorityType {
        VERY_LOW,
        LOW,
        MEDIUM,
        HIGH,
    }
    export namespace WebRTCRTPTransceiverDirection {
        export const $gtype: GObject.GType<WebRTCRTPTransceiverDirection>;
    }
    enum WebRTCRTPTransceiverDirection {
        NONE,
        INACTIVE,
        SENDONLY,
        RECVONLY,
        SENDRECV,
    }
    export namespace WebRTCSCTPTransportState {
        export const $gtype: GObject.GType<WebRTCSCTPTransportState>;
    }
    enum WebRTCSCTPTransportState {
        NEW,
        CONNECTING,
        CONNECTED,
        CLOSED,
    }
    export namespace WebRTCSDPType {
        export const $gtype: GObject.GType<WebRTCSDPType>;
    }
    enum WebRTCSDPType {
        OFFER,
        PRANSWER,
        ANSWER,
        ROLLBACK,
    }
    export namespace WebRTCSignalingState {
        export const $gtype: GObject.GType<WebRTCSignalingState>;
    }
    enum WebRTCSignalingState {
        STABLE,
        CLOSED,
        HAVE_LOCAL_OFFER,
        HAVE_REMOTE_OFFER,
        HAVE_LOCAL_PRANSWER,
        HAVE_REMOTE_PRANSWER,
    }
    export namespace WebRTCStatsType {
        export const $gtype: GObject.GType<WebRTCStatsType>;
    }
    enum WebRTCStatsType {
        CODEC,
        INBOUND_RTP,
        OUTBOUND_RTP,
        REMOTE_INBOUND_RTP,
        REMOTE_OUTBOUND_RTP,
        CSRC,
        PEER_CONNECTION,
        DATA_CHANNEL,
        STREAM,
        TRANSPORT,
        CANDIDATE_PAIR,
        LOCAL_CANDIDATE,
        REMOTE_CANDIDATE,
        CERTIFICATE,
    }
    function webrtc_error_quark(): GLib.Quark;
    function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;
    interface WebRTCICEOnCandidateFunc {
        (ice: WebRTCICE, stream_id: number, candidate: string): void;
    }
    namespace WebRTCDTLSTransport {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::certificate": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::remote-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            certificate: string;
            client: boolean;
            remote_certificate: string;
            remoteCertificate: string;
            session_id: number;
            sessionId: number;
            state: WebRTCDTLSTransportState;
            transport: WebRTCICETransport;
        }
    }
    class WebRTCDTLSTransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCDTLSTransport>;
        get certificate(): string;
        set certificate(val: string);
        get client(): boolean;
        set client(val: boolean);
        get remote_certificate(): string;
        get remoteCertificate(): string;
        get session_id(): number;
        get sessionId(): number;
        get state(): WebRTCDTLSTransportState;
        get transport(): WebRTCICETransport;
        $signals: WebRTCDTLSTransport.SignalSignatures;
        constructor(properties?: Partial<WebRTCDTLSTransport.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCDTLSTransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebRTCDataChannel {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            close: () => void;
            "on-buffered-amount-low": () => void;
            "on-close": () => void;
            "on-error": (arg0: GLib.Error) => void;
            "on-message-data": (arg0: GLib.Bytes | null) => void;
            "on-message-string": (arg0: string | null) => void;
            "on-open": () => void;
            "send-data": (arg0: GLib.Bytes | null) => void;
            "send-string": (arg0: string | null) => void;
            "notify::buffered-amount": (pspec: GObject.ParamSpec) => void;
            "notify::buffered-amount-low-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::max-packet-lifetime": (pspec: GObject.ParamSpec) => void;
            "notify::max-retransmits": (pspec: GObject.ParamSpec) => void;
            "notify::negotiated": (pspec: GObject.ParamSpec) => void;
            "notify::ordered": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffered_amount: bigint | number;
            bufferedAmount: bigint | number;
            buffered_amount_low_threshold: bigint | number;
            bufferedAmountLowThreshold: bigint | number;
            id: number;
            label: string;
            max_packet_lifetime: number;
            maxPacketLifetime: number;
            max_retransmits: number;
            maxRetransmits: number;
            negotiated: boolean;
            ordered: boolean;
            priority: WebRTCPriorityType;
            protocol: string;
            ready_state: WebRTCDataChannelState;
            readyState: WebRTCDataChannelState;
        }
    }
    abstract class WebRTCDataChannel extends GObject.Object {
        static $gtype: GObject.GType<WebRTCDataChannel>;
        get buffered_amount(): number;
        get bufferedAmount(): number;
        get buffered_amount_low_threshold(): number;
        set buffered_amount_low_threshold(val: bigint | number);
        get bufferedAmountLowThreshold(): number;
        set bufferedAmountLowThreshold(val: bigint | number);
        get id(): number;
        get label(): string;
        get max_packet_lifetime(): number;
        get maxPacketLifetime(): number;
        get max_retransmits(): number;
        get maxRetransmits(): number;
        get negotiated(): boolean;
        get ordered(): boolean;
        get priority(): WebRTCPriorityType;
        get protocol(): string;
        get ready_state(): WebRTCDataChannelState;
        get readyState(): WebRTCDataChannelState;
        $signals: WebRTCDataChannel.SignalSignatures;
        constructor(properties?: Partial<WebRTCDataChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCDataChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        close(): void;
        send_data(data: GLib.Bytes | Uint8Array | null): void;
        send_data_full(data: GLib.Bytes | Uint8Array | null): boolean;
        send_string(str: string | null): void;
        send_string_full(str: string | null): boolean;
    }
    namespace WebRTCICE {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "add-local-ip-address": (arg0: string) => boolean | void;
            "notify::max-rtp-port": (pspec: GObject.ParamSpec) => void;
            "notify::min-rtp-port": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            max_rtp_port: number;
            maxRtpPort: number;
            min_rtp_port: number;
            minRtpPort: number;
        }
    }
    abstract class WebRTCICE extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICE>;
        get max_rtp_port(): number;
        set max_rtp_port(val: number);
        get maxRtpPort(): number;
        set maxRtpPort(val: number);
        get min_rtp_port(): number;
        set min_rtp_port(val: number);
        get minRtpPort(): number;
        set minRtpPort(val: number);
        $signals: WebRTCICE.SignalSignatures;
        ice_gathering_state: WebRTCICEGatheringState;
        ice_connection_state: WebRTCICEConnectionState;
        constructor(properties?: Partial<WebRTCICE.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCICE.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCICE.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCICE.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICE.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_add_candidate(stream: WebRTCICEStream, candidate: string, promise: Gst.Promise | null): void;
        vfunc_add_stream(session_id: number): WebRTCICEStream | null;
        vfunc_add_turn_server(uri: string): boolean;
        vfunc_close(promise: Gst.Promise | null): void;
        vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
        vfunc_gather_candidates(stream: WebRTCICEStream): boolean;
        vfunc_get_http_proxy(): string;
        vfunc_get_is_controller(): boolean;
        vfunc_get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
        vfunc_get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
        vfunc_get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
        vfunc_get_stun_server(): string | null;
        vfunc_get_turn_server(): string | null;
        vfunc_set_force_relay(force_relay: boolean): void;
        vfunc_set_http_proxy(uri: string): void;
        vfunc_set_is_controller(controller: boolean): void;
        vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
        vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        vfunc_set_stun_server(uri: string | null): void;
        vfunc_set_tos(stream: WebRTCICEStream, tos: number): void;
        vfunc_set_turn_server(uri: string | null): void;
        add_candidate(stream: WebRTCICEStream, candidate: string, promise: Gst.Promise | null): void;
        add_stream(session_id: number): WebRTCICEStream | null;
        add_turn_server(uri: string): boolean;
        close(promise: Gst.Promise | null): void;
        find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
        gather_candidates(stream: WebRTCICEStream): boolean;
        get_http_proxy(): string;
        get_is_controller(): boolean;
        get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
        get_stun_server(): string | null;
        get_turn_server(): string | null;
        set_force_relay(force_relay: boolean): void;
        set_http_proxy(uri: string): void;
        set_is_controller(controller: boolean): void;
        set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
        set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        set_stun_server(uri: string | null): void;
        set_tos(stream: WebRTCICEStream, tos: number): void;
        set_turn_server(uri: string | null): void;
    }
    namespace WebRTCICEStream {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::stream-id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            stream_id: number;
            streamId: number;
        }
    }
    abstract class WebRTCICEStream extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICEStream>;
        get stream_id(): number;
        get streamId(): number;
        $signals: WebRTCICEStream.SignalSignatures;
        constructor(properties?: Partial<WebRTCICEStream.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICEStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
        vfunc_gather_candidates(): boolean;
        find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
        gather_candidates(): boolean;
    }
    namespace WebRTCICETransport {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "on-new-candidate": (arg0: string) => void;
            "on-selected-candidate-pair-change": () => void;
            "notify::component": (pspec: GObject.ParamSpec) => void;
            "notify::gathering-state": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            component: WebRTCICEComponent;
            gathering_state: WebRTCICEGatheringState;
            gatheringState: WebRTCICEGatheringState;
            state: WebRTCICEConnectionState;
        }
    }
    abstract class WebRTCICETransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICETransport>;
        get component(): WebRTCICEComponent;
        get gathering_state(): WebRTCICEGatheringState;
        get gatheringState(): WebRTCICEGatheringState;
        get state(): WebRTCICEConnectionState;
        $signals: WebRTCICETransport.SignalSignatures;
        role: WebRTCICERole;
        src: Gst.Element;
        sink: Gst.Element;
        constructor(properties?: Partial<WebRTCICETransport.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICETransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_gather_candidates(): boolean;
        vfunc_get_selected_candidate_pair(): WebRTCICECandidatePair | null;
        connection_state_change(new_state: WebRTCICEConnectionState): void;
        gathering_state_change(new_state: WebRTCICEGatheringState): void;
        get_selected_candidate_pair(): WebRTCICECandidatePair | null;
        new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;
        selected_pair_change(): void;
    }
    namespace WebRTCRTPReceiver {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            transport: WebRTCDTLSTransport;
        }
    }
    class WebRTCRTPReceiver extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPReceiver>;
        get transport(): WebRTCDTLSTransport;
        $signals: WebRTCRTPReceiver.SignalSignatures;
        constructor(properties?: Partial<WebRTCRTPReceiver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPReceiver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebRTCRTPSender {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            priority: WebRTCPriorityType;
            transport: WebRTCDTLSTransport;
        }
    }
    class WebRTCRTPSender extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPSender>;
        get priority(): WebRTCPriorityType;
        set priority(val: WebRTCPriorityType);
        get transport(): WebRTCDTLSTransport;
        $signals: WebRTCRTPSender.SignalSignatures;
        constructor(properties?: Partial<WebRTCRTPSender.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPSender.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_priority(priority: WebRTCPriorityType): void;
    }
    namespace WebRTCRTPTransceiver {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::codec-preferences": (pspec: GObject.ParamSpec) => void;
            "notify::current-direction": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::mid": (pspec: GObject.ParamSpec) => void;
            "notify::mlineindex": (pspec: GObject.ParamSpec) => void;
            "notify::receiver": (pspec: GObject.ParamSpec) => void;
            "notify::sender": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            codec_preferences: Gst.Caps;
            codecPreferences: Gst.Caps;
            current_direction: WebRTCRTPTransceiverDirection;
            currentDirection: WebRTCRTPTransceiverDirection;
            direction: WebRTCRTPTransceiverDirection;
            kind: WebRTCKind;
            mid: string;
            mlineindex: number;
            receiver: WebRTCRTPReceiver;
            sender: WebRTCRTPSender;
        }
    }
    abstract class WebRTCRTPTransceiver extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPTransceiver>;
        get codec_preferences(): Gst.Caps;
        set codec_preferences(val: Gst.Caps);
        get codecPreferences(): Gst.Caps;
        set codecPreferences(val: Gst.Caps);
        get current_direction(): WebRTCRTPTransceiverDirection;
        get currentDirection(): WebRTCRTPTransceiverDirection;
        get direction(): WebRTCRTPTransceiverDirection;
        set direction(val: WebRTCRTPTransceiverDirection);
        get kind(): WebRTCKind;
        get mid(): string;
        get mlineindex(): number;
        get receiver(): WebRTCRTPReceiver;
        get sender(): WebRTCRTPSender;
        $signals: WebRTCRTPTransceiver.SignalSignatures;
        constructor(properties?: Partial<WebRTCRTPTransceiver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPTransceiver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebRTCSCTPTransport {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::max-channels": (pspec: GObject.ParamSpec) => void;
            "notify::max-message-size": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            max_channels: number;
            maxChannels: number;
            max_message_size: bigint | number;
            maxMessageSize: bigint | number;
            state: WebRTCSCTPTransportState;
            transport: WebRTCDTLSTransport;
        }
    }
    abstract class WebRTCSCTPTransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCSCTPTransport>;
        get max_channels(): number;
        get maxChannels(): number;
        get max_message_size(): number;
        get maxMessageSize(): number;
        get state(): WebRTCSCTPTransportState;
        get transport(): WebRTCDTLSTransport;
        $signals: WebRTCSCTPTransport.SignalSignatures;
        constructor(properties?: Partial<WebRTCSCTPTransport.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCSCTPTransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type WebRTCDTLSTransportClass = typeof WebRTCDTLSTransport;
    type WebRTCDataChannelClass = typeof WebRTCDataChannel;
    class WebRTCICECandidate {
        static $gtype: GObject.GType<WebRTCICECandidate>;
        candidate: string;
        component: number;
        sdp_mid: string;
        sdp_mline_index: number;
        stats: WebRTCICECandidateStats;
        constructor(properties?: Partial<{
            candidate: string;
            component: number;
            sdp_mid: string;
            sdp_mline_index: number;
            _gst_reserved: null[];
        }>);
        copy(): WebRTCICECandidate;
        free(): void;
    }
    class WebRTCICECandidatePair {
        static $gtype: GObject.GType<WebRTCICECandidatePair>;
        local: WebRTCICECandidate;
        remote: WebRTCICECandidate;
        constructor(properties?: Partial<{}>);
        copy(): WebRTCICECandidatePair;
        free(): void;
    }
    class WebRTCICECandidateStats {
        static $gtype: GObject.GType<WebRTCICECandidateStats>;
        ipaddr: string;
        port: number;
        stream_id: number;
        type: string;
        proto: string;
        relay_proto: string;
        prio: number;
        url: string;
        constructor(properties?: Partial<{
            ipaddr: string;
            port: number;
            stream_id: number;
            type: string;
            proto: string;
            relay_proto: string;
            prio: number;
            url: string;
        }>);
        copy(): WebRTCICECandidateStats;
        free(): void;
    }
    type WebRTCICEClass = typeof WebRTCICE;
    type WebRTCICEStreamClass = typeof WebRTCICEStream;
    type WebRTCICETransportClass = typeof WebRTCICETransport;
    type WebRTCRTPReceiverClass = typeof WebRTCRTPReceiver;
    type WebRTCRTPSenderClass = typeof WebRTCRTPSender;
    type WebRTCRTPTransceiverClass = typeof WebRTCRTPTransceiver;
    type WebRTCSCTPTransportClass = typeof WebRTCSCTPTransport;
    class WebRTCSessionDescription {
        static $gtype: GObject.GType<WebRTCSessionDescription>;
        type: WebRTCSDPType;
        sdp: GstSdp.SDPMessage;
        constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage);
        static ["new"](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;
        copy(): WebRTCSessionDescription;
        free(): void;
    }
    const __name__: string;
    const __version__: string;
}
export default GstWebRTC;
}
declare module 'gi://GstWebRTC' {
    import GstWebRTC10 from 'gi://GstWebRTC?version=1.0';
    export default GstWebRTC10;
}
