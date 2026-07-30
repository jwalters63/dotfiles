declare module 'gi://Nice?version=0.1' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Nice {
    enum CandidateTransport {
        UDP,
        TCP_ACTIVE,
        TCP_PASSIVE,
        TCP_SO,
    }
    enum CandidateType {
        HOST,
        SERVER_REFLEXIVE,
        PEER_REFLEXIVE,
        RELAYED,
    }
    enum Compatibility {
        RFC5245,
        DRAFT19,
        GOOGLE,
        MSN,
        WLM2009,
        OC2007,
        OC2007R2,
        LAST,
    }
    enum ComponentState {
        DISCONNECTED,
        GATHERING,
        CONNECTING,
        CONNECTED,
        READY,
        FAILED,
        LAST,
    }
    enum ComponentType {
        RTP,
        RTCP,
    }
    enum NominationMode {
        REGULAR,
        AGGRESSIVE,
    }
    enum ProxyType {
        NONE,
        SOCKS5,
        HTTP,
        LAST,
    }
    enum PseudoTcpDebugLevel {
        NONE,
        NORMAL,
        VERBOSE,
    }
    enum PseudoTcpShutdown {
        RD,
        WR,
        RDWR,
    }
    enum PseudoTcpState {
        LISTEN,
        SYN_SENT,
        SYN_RECEIVED,
        ESTABLISHED,
        CLOSED,
        FIN_WAIT_1,
        FIN_WAIT_2,
        CLOSING,
        TIME_WAIT,
        CLOSE_WAIT,
        LAST_ACK,
    }
    enum PseudoTcpWriteResult {
        SUCCESS,
        TOO_LARGE,
        FAIL,
    }
    enum RelayType {
        UDP,
        TCP,
        TLS,
    }
    const AGENT_MAX_REMOTE_CANDIDATES: number;
    const CANDIDATE_MAX_FOUNDATION: number;
    const CANDIDATE_MAX_LOCAL_ADDRESSES: number;
    const CANDIDATE_MAX_TURN_SERVERS: number;
    function candidate_transport_to_string(transport: CandidateTransport): string;
    function candidate_type_to_string(type: CandidateType): string;
    function component_state_to_string(state: ComponentState): string;
    function debug_disable(with_stun: boolean): void;
    function debug_enable(with_stun: boolean): void;
    function interfaces_get_if_index_by_addr(addr: Address): number;
    function interfaces_get_ip_for_interface(interface_name: string): string | null;
    function interfaces_get_local_interfaces(): string[];
    function interfaces_get_local_ips(include_loopback: boolean): string[];
    function pseudo_tcp_set_debug_level(level: PseudoTcpDebugLevel): void;
    interface AgentRecvFunc {
        (agent: Agent, stream_id: number, component_id: number, len: number, buf: string): void;
    }
    enum AgentOption {
        NONE,
        REGULAR_NOMINATION,
        RELIABLE,
        LITE_MODE,
        ICE_TRICKLE,
        SUPPORT_RENOMINATION,
        CONSENT_FRESHNESS,
        BYTESTREAM_TCP,
        CLOSE_FORCED,
    }
    namespace Agent {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "candidate-gathering-done": (arg0: number) => void;
            "component-state-changed": (arg0: number, arg1: number, arg2: number) => void;
            "initial-binding-request-received": (arg0: number) => void;
            "new-candidate": (arg0: number, arg1: number, arg2: string) => void;
            "new-candidate-full": (arg0: Candidate) => void;
            "new-remote-candidate": (arg0: number, arg1: number, arg2: string) => void;
            "new-remote-candidate-full": (arg0: Candidate) => void;
            "new-selected-pair": (arg0: number, arg1: number, arg2: string, arg3: string) => void;
            "new-selected-pair-full": (arg0: number, arg1: number, arg2: Candidate, arg3: Candidate) => void;
            "reliable-transport-writable": (arg0: number, arg1: number) => void;
            "streams-removed": (arg0: number[]) => void;
            "notify::bytestream-tcp": (pspec: GObject.ParamSpec) => void;
            "notify::close-forced": (pspec: GObject.ParamSpec) => void;
            "notify::compatibility": (pspec: GObject.ParamSpec) => void;
            "notify::consent-freshness": (pspec: GObject.ParamSpec) => void;
            "notify::controlling-mode": (pspec: GObject.ParamSpec) => void;
            "notify::force-relay": (pspec: GObject.ParamSpec) => void;
            "notify::full-mode": (pspec: GObject.ParamSpec) => void;
            "notify::ice-tcp": (pspec: GObject.ParamSpec) => void;
            "notify::ice-trickle": (pspec: GObject.ParamSpec) => void;
            "notify::ice-udp": (pspec: GObject.ParamSpec) => void;
            "notify::idle-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::keepalive-conncheck": (pspec: GObject.ParamSpec) => void;
            "notify::main-context": (pspec: GObject.ParamSpec) => void;
            "notify::max-connectivity-checks": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-extra-headers": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-ip": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-password": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-port": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-type": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-username": (pspec: GObject.ParamSpec) => void;
            "notify::reliable": (pspec: GObject.ParamSpec) => void;
            "notify::stun-initial-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::stun-max-retransmissions": (pspec: GObject.ParamSpec) => void;
            "notify::stun-pacing-timer": (pspec: GObject.ParamSpec) => void;
            "notify::stun-reliable-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::stun-server": (pspec: GObject.ParamSpec) => void;
            "notify::stun-server-port": (pspec: GObject.ParamSpec) => void;
            "notify::support-renomination": (pspec: GObject.ParamSpec) => void;
            "notify::upnp": (pspec: GObject.ParamSpec) => void;
            "notify::upnp-timeout": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bytestream_tcp: boolean;
            bytestreamTcp: boolean;
            close_forced: boolean;
            closeForced: boolean;
            compatibility: number;
            consent_freshness: boolean;
            consentFreshness: boolean;
            controlling_mode: boolean;
            controllingMode: boolean;
            force_relay: boolean;
            forceRelay: boolean;
            full_mode: boolean;
            fullMode: boolean;
            ice_tcp: boolean;
            iceTcp: boolean;
            ice_trickle: boolean;
            iceTrickle: boolean;
            ice_udp: boolean;
            iceUdp: boolean;
            idle_timeout: number;
            idleTimeout: number;
            keepalive_conncheck: boolean;
            keepaliveConncheck: boolean;
            main_context: never;
            mainContext: never;
            max_connectivity_checks: number;
            maxConnectivityChecks: number;
            proxy_extra_headers: { [key: string]: string };
            proxyExtraHeaders: { [key: string]: string };
            proxy_ip: string;
            proxyIp: string;
            proxy_password: string;
            proxyPassword: string;
            proxy_port: number;
            proxyPort: number;
            proxy_type: number;
            proxyType: number;
            proxy_username: string;
            proxyUsername: string;
            reliable: boolean;
            stun_initial_timeout: number;
            stunInitialTimeout: number;
            stun_max_retransmissions: number;
            stunMaxRetransmissions: number;
            stun_pacing_timer: number;
            stunPacingTimer: number;
            stun_reliable_timeout: number;
            stunReliableTimeout: number;
            stun_server: string;
            stunServer: string;
            stun_server_port: number;
            stunServerPort: number;
            support_renomination: boolean;
            supportRenomination: boolean;
            upnp: boolean;
            upnp_timeout: number;
            upnpTimeout: number;
        }
    }
    class Agent extends GObject.Object {
        static $gtype: GObject.GType<Agent>;
        get bytestream_tcp(): boolean;
        set bytestream_tcp(val: boolean);
        get bytestreamTcp(): boolean;
        set bytestreamTcp(val: boolean);
        get close_forced(): boolean;
        get closeForced(): boolean;
        get compatibility(): number;
        get consent_freshness(): boolean;
        set consent_freshness(val: boolean);
        get consentFreshness(): boolean;
        set consentFreshness(val: boolean);
        get controlling_mode(): boolean;
        set controlling_mode(val: boolean);
        get controllingMode(): boolean;
        set controllingMode(val: boolean);
        get force_relay(): boolean;
        set force_relay(val: boolean);
        get forceRelay(): boolean;
        set forceRelay(val: boolean);
        get full_mode(): boolean;
        get fullMode(): boolean;
        get ice_tcp(): boolean;
        set ice_tcp(val: boolean);
        get iceTcp(): boolean;
        set iceTcp(val: boolean);
        get ice_trickle(): boolean;
        set ice_trickle(val: boolean);
        get iceTrickle(): boolean;
        set iceTrickle(val: boolean);
        get ice_udp(): boolean;
        set ice_udp(val: boolean);
        get iceUdp(): boolean;
        set iceUdp(val: boolean);
        get idle_timeout(): number;
        set idle_timeout(val: number);
        get idleTimeout(): number;
        set idleTimeout(val: number);
        get keepalive_conncheck(): boolean;
        set keepalive_conncheck(val: boolean);
        get keepaliveConncheck(): boolean;
        set keepaliveConncheck(val: boolean);
        get main_context(): null;
        get mainContext(): null;
        get max_connectivity_checks(): number;
        set max_connectivity_checks(val: number);
        get maxConnectivityChecks(): number;
        set maxConnectivityChecks(val: number);
        get proxy_extra_headers(): { [key: string]: string };
        set proxy_extra_headers(val: { [key: string]: string });
        get proxyExtraHeaders(): { [key: string]: string };
        set proxyExtraHeaders(val: { [key: string]: string });
        get proxy_ip(): string;
        set proxy_ip(val: string);
        get proxyIp(): string;
        set proxyIp(val: string);
        get proxy_password(): string;
        set proxy_password(val: string);
        get proxyPassword(): string;
        set proxyPassword(val: string);
        get proxy_port(): number;
        set proxy_port(val: number);
        get proxyPort(): number;
        set proxyPort(val: number);
        get proxy_type(): number;
        set proxy_type(val: number);
        get proxyType(): number;
        set proxyType(val: number);
        get proxy_username(): string;
        set proxy_username(val: string);
        get proxyUsername(): string;
        set proxyUsername(val: string);
        get reliable(): boolean;
        get stun_initial_timeout(): number;
        set stun_initial_timeout(val: number);
        get stunInitialTimeout(): number;
        set stunInitialTimeout(val: number);
        get stun_max_retransmissions(): number;
        set stun_max_retransmissions(val: number);
        get stunMaxRetransmissions(): number;
        set stunMaxRetransmissions(val: number);
        get stun_pacing_timer(): number;
        set stun_pacing_timer(val: number);
        get stunPacingTimer(): number;
        set stunPacingTimer(val: number);
        get stun_reliable_timeout(): number;
        set stun_reliable_timeout(val: number);
        get stunReliableTimeout(): number;
        set stunReliableTimeout(val: number);
        get stun_server(): string;
        set stun_server(val: string);
        get stunServer(): string;
        set stunServer(val: string);
        get stun_server_port(): number;
        set stun_server_port(val: number);
        get stunServerPort(): number;
        set stunServerPort(val: number);
        get support_renomination(): boolean;
        set support_renomination(val: boolean);
        get supportRenomination(): boolean;
        set supportRenomination(val: boolean);
        get upnp(): boolean;
        set upnp(val: boolean);
        get upnp_timeout(): number;
        set upnp_timeout(val: number);
        get upnpTimeout(): number;
        set upnpTimeout(val: number);
        $signals: Agent.SignalSignatures;
        constructor(properties?: Partial<Agent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](ctx: GLib.MainContext, compat: Compatibility): Agent;
        static new_full(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent;
        static new_reliable(ctx: GLib.MainContext, compat: Compatibility): Agent;
        connect<K extends keyof Agent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Agent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Agent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Agent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_local_address(addr: Address): boolean;
        add_stream(n_components: number): number;
        close_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        consent_lost(stream_id: number, component_id: number): boolean;
        forget_relays(stream_id: number, component_id: number): boolean;
        gather_candidates(stream_id: number): boolean;
        generate_local_candidate_sdp(candidate: Candidate): string;
        generate_local_sdp(): string;
        generate_local_stream_sdp(stream_id: number, include_non_ice: boolean): string;
        get_component_state(stream_id: number, component_id: number): ComponentState;
        get_default_local_candidate(stream_id: number, component_id: number): Candidate;
        get_io_stream(stream_id: number, component_id: number): Gio.IOStream;
        get_local_candidates(stream_id: number, component_id: number): Candidate[];
        get_local_credentials(stream_id: number): [boolean, string, string];
        get_remote_candidates(stream_id: number, component_id: number): Candidate[];
        get_selected_pair(stream_id: number, component_id: number, local: Candidate, remote: Candidate): boolean;
        get_selected_socket(stream_id: number, component_id: number): Gio.Socket | null;
        get_sockets(stream_id: number, component_id: number): Gio.Socket[];
        get_stream_name(stream_id: number): string;
        parse_remote_candidate_sdp(stream_id: number, sdp: string): Candidate;
        parse_remote_sdp(sdp: string): number;
        parse_remote_stream_sdp(stream_id: number, sdp: string, ufrag: string, pwd: string): Candidate[];
        peer_candidate_gathering_done(stream_id: number): boolean;
        recv(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, Uint8Array];
        recv_messages(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, InputMessage[]];
        recv_messages_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, InputMessage[]];
        recv_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, Uint8Array];
        remove_stream(stream_id: number): void;
        restart(): boolean;
        restart_stream(stream_id: number): boolean;
        send(stream_id: number, component_id: number, len: number, buf: string): number;
        send_messages_nonblocking(stream_id: number, component_id: number, messages: OutputMessage[], cancellable: Gio.Cancellable | null): number;
        set_local_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
        set_port_range(stream_id: number, component_id: number, min_port: number, max_port: number): void;
        set_relay_info(stream_id: number, component_id: number, server_ip: string, server_port: number, username: string, password: string, type: RelayType): boolean;
        set_remote_candidates(stream_id: number, component_id: number, candidates: Candidate[]): number;
        set_remote_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
        set_selected_pair(stream_id: number, component_id: number, lfoundation: string, rfoundation: string): boolean;
        set_selected_remote_candidate(stream_id: number, component_id: number, candidate: Candidate): boolean;
        set_software(software: string): void;
        set_stream_name(stream_id: number, name: string): boolean;
        set_stream_tos(stream_id: number, tos: number): void;
    }
    namespace PseudoTcpSocket {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::ack-delay": (pspec: GObject.ParamSpec) => void;
            "notify::callbacks": (pspec: GObject.ParamSpec) => void;
            "notify::conversation": (pspec: GObject.ParamSpec) => void;
            "notify::no-delay": (pspec: GObject.ParamSpec) => void;
            "notify::rcv-buf": (pspec: GObject.ParamSpec) => void;
            "notify::snd-buf": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::support-fin-ack": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ack_delay: number;
            ackDelay: number;
            callbacks: never;
            conversation: number;
            no_delay: boolean;
            noDelay: boolean;
            rcv_buf: number;
            rcvBuf: number;
            snd_buf: number;
            sndBuf: number;
            state: number;
            support_fin_ack: boolean;
            supportFinAck: boolean;
        }
    }
    class PseudoTcpSocket extends GObject.Object {
        static $gtype: GObject.GType<PseudoTcpSocket>;
        get ack_delay(): number;
        set ack_delay(val: number);
        get ackDelay(): number;
        set ackDelay(val: number);
        get callbacks(): null;
        set callbacks(val: never);
        get conversation(): number;
        get no_delay(): boolean;
        set no_delay(val: boolean);
        get noDelay(): boolean;
        set noDelay(val: boolean);
        get rcv_buf(): number;
        set rcv_buf(val: number);
        get rcvBuf(): number;
        set rcvBuf(val: number);
        get snd_buf(): number;
        set snd_buf(val: number);
        get sndBuf(): number;
        set sndBuf(val: number);
        get state(): number;
        get support_fin_ack(): boolean;
        get supportFinAck(): boolean;
        $signals: PseudoTcpSocket.SignalSignatures;
        constructor(properties?: Partial<PseudoTcpSocket.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket;
        connect<K extends keyof PseudoTcpSocket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PseudoTcpSocket.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PseudoTcpSocket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PseudoTcpSocket.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PseudoTcpSocket.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PseudoTcpSocket.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        can_send(): boolean;
        close(force: boolean): void;
        connect(): boolean;
        connect(...args: never[]): any;
        get_available_bytes(): number;
        get_available_send_space(): number;
        get_error(): number;
        get_next_clock(timeout: bigint | number): boolean;
        is_closed(): boolean;
        is_closed_remotely(): boolean;
        notify_clock(): void;
        notify_message(message: InputMessage): boolean;
        notify_mtu(mtu: number): void;
        notify_packet(buffer: string, len: number): boolean;
        recv(buffer: string, len: bigint | number): number;
        send(buffer: string, len: number): number;
        set_time(current_time: number): void;
        shutdown(how: PseudoTcpShutdown): void;
    }
    class Address {
        static $gtype: GObject.GType<Address>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Address;
        copy_to_sockaddr(sin: null): void;
        dup(): Address;
        dup_string(): string;
        equal(b: Address): boolean;
        equal_no_port(b: Address): boolean;
        free(): void;
        get_port(): number;
        init(): void;
        ip_version(): number;
        is_linklocal(): boolean;
        is_private(): boolean;
        is_valid(): boolean;
        set_from_sockaddr(sin: null): void;
        set_from_string(str: string): boolean;
        set_ipv4(addr_ipv4: number): void;
        set_ipv6(addr_ipv6: number): void;
        set_port(port: number): void;
    }
    type AgentClass = typeof Agent;
    class Candidate {
        static $gtype: GObject.GType<Candidate>;
        type: CandidateType;
        transport: CandidateTransport;
        priority: number;
        stream_id: number;
        component_id: number;
        foundation: number[];
        username: string;
        password: string;
        constructor(type: CandidateType);
        static ["new"](type: CandidateType): Candidate;
        static transport_to_string(transport: CandidateTransport): string;
        static type_to_string(type: CandidateType): string;
        copy(): Candidate;
        equal_target(candidate2: Candidate): boolean;
        free(): void;
        relay_address(addr: Address): void;
        stun_server_address(addr: Address): boolean;
    }
    class InputMessage {
        static $gtype: GObject.GType<InputMessage>;
        buffers: Gio.InputVector[];
        n_buffers: number;
        length: number;
    }
    class OutputMessage {
        static $gtype: GObject.GType<OutputMessage>;
        buffers: Gio.OutputVector[];
        n_buffers: number;
    }
    class PseudoTcpCallbacks {
        static $gtype: GObject.GType<PseudoTcpCallbacks>;
        user_data: null;
        constructor(properties?: Partial<{
            user_data: null;
        }>);
    }
    type PseudoTcpSocketClass = typeof PseudoTcpSocket;
    const __name__: string;
    const __version__: string;
}
export default Nice;
}
declare module 'gi://Nice' {
    import Nice01 from 'gi://Nice?version=0.1';
    export default Nice01;
}
