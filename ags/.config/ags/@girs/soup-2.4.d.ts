declare module 'gi://Soup?version=2.4' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Soup {
    export namespace AddressFamily {
        export const $gtype: GObject.GType<AddressFamily>;
    }
    enum AddressFamily {
        INVALID,
        IPV4,
        IPV6,
    }
    export namespace CacheResponse {
        export const $gtype: GObject.GType<CacheResponse>;
    }
    enum CacheResponse {
        FRESH,
        NEEDS_VALIDATION,
        STALE,
    }
    export namespace CacheType {
        export const $gtype: GObject.GType<CacheType>;
    }
    enum CacheType {
        SINGLE_USER,
        SHARED,
    }
    export namespace ConnectionState {
        export const $gtype: GObject.GType<ConnectionState>;
    }
    enum ConnectionState {
        NEW,
        CONNECTING,
        IDLE,
        IN_USE,
        REMOTE_DISCONNECTED,
        DISCONNECTED,
    }
    export namespace CookieJarAcceptPolicy {
        export const $gtype: GObject.GType<CookieJarAcceptPolicy>;
    }
    enum CookieJarAcceptPolicy {
        ALWAYS,
        NEVER,
        NO_THIRD_PARTY,
        GRANDFATHERED_THIRD_PARTY,
    }
    export namespace DateFormat {
        export const $gtype: GObject.GType<DateFormat>;
    }
    enum DateFormat {
        HTTP,
        COOKIE,
        RFC2822,
        ISO8601_COMPACT,
        ISO8601_FULL,
        ISO8601,
        ISO8601_XMLRPC,
    }
    export namespace Encoding {
        export const $gtype: GObject.GType<Encoding>;
    }
    enum Encoding {
        UNRECOGNIZED,
        NONE,
        CONTENT_LENGTH,
        EOF,
        CHUNKED,
        BYTERANGES,
    }
    export namespace HTTPVersion {
        export const $gtype: GObject.GType<HTTPVersion>;
    }
    enum HTTPVersion {
        HTTP_1_0,
        HTTP_1_1,
    }
    export namespace KnownStatusCode {
        export const $gtype: GObject.GType<KnownStatusCode>;
    }
    enum KnownStatusCode {
        NONE,
        CANCELLED,
        CANT_RESOLVE,
        CANT_RESOLVE_PROXY,
        CANT_CONNECT,
        CANT_CONNECT_PROXY,
        SSL_FAILED,
        IO_ERROR,
        MALFORMED,
        TRY_AGAIN,
        TOO_MANY_REDIRECTS,
        TLS_FAILED,
        CONTINUE,
        SWITCHING_PROTOCOLS,
        PROCESSING,
        OK,
        CREATED,
        ACCEPTED,
        NON_AUTHORITATIVE,
        NO_CONTENT,
        RESET_CONTENT,
        PARTIAL_CONTENT,
        MULTI_STATUS,
        MULTIPLE_CHOICES,
        MOVED_PERMANENTLY,
        FOUND,
        MOVED_TEMPORARILY,
        SEE_OTHER,
        NOT_MODIFIED,
        USE_PROXY,
        NOT_APPEARING_IN_THIS_PROTOCOL,
        TEMPORARY_REDIRECT,
        BAD_REQUEST,
        UNAUTHORIZED,
        PAYMENT_REQUIRED,
        FORBIDDEN,
        NOT_FOUND,
        METHOD_NOT_ALLOWED,
        NOT_ACCEPTABLE,
        PROXY_AUTHENTICATION_REQUIRED,
        PROXY_UNAUTHORIZED,
        REQUEST_TIMEOUT,
        CONFLICT,
        GONE,
        LENGTH_REQUIRED,
        PRECONDITION_FAILED,
        REQUEST_ENTITY_TOO_LARGE,
        REQUEST_URI_TOO_LONG,
        UNSUPPORTED_MEDIA_TYPE,
        REQUESTED_RANGE_NOT_SATISFIABLE,
        INVALID_RANGE,
        EXPECTATION_FAILED,
        UNPROCESSABLE_ENTITY,
        LOCKED,
        FAILED_DEPENDENCY,
        INTERNAL_SERVER_ERROR,
        NOT_IMPLEMENTED,
        BAD_GATEWAY,
        SERVICE_UNAVAILABLE,
        GATEWAY_TIMEOUT,
        HTTP_VERSION_NOT_SUPPORTED,
        INSUFFICIENT_STORAGE,
        NOT_EXTENDED,
    }
    export namespace LoggerLogLevel {
        export const $gtype: GObject.GType<LoggerLogLevel>;
    }
    enum LoggerLogLevel {
        NONE,
        MINIMAL,
        HEADERS,
        BODY,
    }
    export namespace MemoryUse {
        export const $gtype: GObject.GType<MemoryUse>;
    }
    enum MemoryUse {
        STATIC,
        TAKE,
        COPY,
        TEMPORARY,
    }
    export namespace MessageHeadersType {
        export const $gtype: GObject.GType<MessageHeadersType>;
    }
    enum MessageHeadersType {
        REQUEST,
        RESPONSE,
        MULTIPART,
    }
    export namespace MessagePriority {
        export const $gtype: GObject.GType<MessagePriority>;
    }
    enum MessagePriority {
        VERY_LOW,
        LOW,
        NORMAL,
        HIGH,
        VERY_HIGH,
    }
    class RequestError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static BAD_URI: number;
        static UNSUPPORTED_URI_SCHEME: number;
        static PARSING: number;
        static ENCODING: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class RequesterError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static BAD_URI: number;
        static UNSUPPORTED_URI_SCHEME: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace SameSitePolicy {
        export const $gtype: GObject.GType<SameSitePolicy>;
    }
    enum SameSitePolicy {
        NONE,
        LAX,
        STRICT,
    }
    export namespace SocketIOStatus {
        export const $gtype: GObject.GType<SocketIOStatus>;
    }
    enum SocketIOStatus {
        OK,
        WOULD_BLOCK,
        EOF,
        ERROR,
    }
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }
    enum Status {
        NONE,
        CANCELLED,
        CANT_RESOLVE,
        CANT_RESOLVE_PROXY,
        CANT_CONNECT,
        CANT_CONNECT_PROXY,
        SSL_FAILED,
        IO_ERROR,
        MALFORMED,
        TRY_AGAIN,
        TOO_MANY_REDIRECTS,
        TLS_FAILED,
        CONTINUE,
        SWITCHING_PROTOCOLS,
        PROCESSING,
        OK,
        CREATED,
        ACCEPTED,
        NON_AUTHORITATIVE,
        NO_CONTENT,
        RESET_CONTENT,
        PARTIAL_CONTENT,
        MULTI_STATUS,
        MULTIPLE_CHOICES,
        MOVED_PERMANENTLY,
        FOUND,
        MOVED_TEMPORARILY,
        SEE_OTHER,
        NOT_MODIFIED,
        USE_PROXY,
        NOT_APPEARING_IN_THIS_PROTOCOL,
        TEMPORARY_REDIRECT,
        PERMANENT_REDIRECT,
        BAD_REQUEST,
        UNAUTHORIZED,
        PAYMENT_REQUIRED,
        FORBIDDEN,
        NOT_FOUND,
        METHOD_NOT_ALLOWED,
        NOT_ACCEPTABLE,
        PROXY_AUTHENTICATION_REQUIRED,
        PROXY_UNAUTHORIZED,
        REQUEST_TIMEOUT,
        CONFLICT,
        GONE,
        LENGTH_REQUIRED,
        PRECONDITION_FAILED,
        REQUEST_ENTITY_TOO_LARGE,
        REQUEST_URI_TOO_LONG,
        UNSUPPORTED_MEDIA_TYPE,
        REQUESTED_RANGE_NOT_SATISFIABLE,
        INVALID_RANGE,
        EXPECTATION_FAILED,
        UNPROCESSABLE_ENTITY,
        LOCKED,
        FAILED_DEPENDENCY,
        INTERNAL_SERVER_ERROR,
        NOT_IMPLEMENTED,
        BAD_GATEWAY,
        SERVICE_UNAVAILABLE,
        GATEWAY_TIMEOUT,
        HTTP_VERSION_NOT_SUPPORTED,
        INSUFFICIENT_STORAGE,
        NOT_EXTENDED,
    }
    class TLDError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_HOSTNAME: number;
        static IS_IP_ADDRESS: number;
        static NOT_ENOUGH_DOMAINS: number;
        static NO_BASE_DOMAIN: number;
        static NO_PSL_DATA: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace WebsocketCloseCode {
        export const $gtype: GObject.GType<WebsocketCloseCode>;
    }
    enum WebsocketCloseCode {
        NORMAL,
        GOING_AWAY,
        PROTOCOL_ERROR,
        UNSUPPORTED_DATA,
        NO_STATUS,
        ABNORMAL,
        BAD_DATA,
        POLICY_VIOLATION,
        TOO_BIG,
        NO_EXTENSION,
        SERVER_ERROR,
        TLS_HANDSHAKE,
    }
    export namespace WebsocketConnectionType {
        export const $gtype: GObject.GType<WebsocketConnectionType>;
    }
    enum WebsocketConnectionType {
        UNKNOWN,
        CLIENT,
        SERVER,
    }
    export namespace WebsocketDataType {
        export const $gtype: GObject.GType<WebsocketDataType>;
    }
    enum WebsocketDataType {
        TEXT,
        BINARY,
    }
    export namespace WebsocketError {
        export const $gtype: GObject.GType<WebsocketError>;
    }
    enum WebsocketError {
        FAILED,
        NOT_WEBSOCKET,
        BAD_HANDSHAKE,
        BAD_ORIGIN,
    }
    export namespace WebsocketState {
        export const $gtype: GObject.GType<WebsocketState>;
    }
    enum WebsocketState {
        OPEN,
        CLOSING,
        CLOSED,
    }
    class XMLRPCError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static ARGUMENTS: number;
        static RETVAL: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace XMLRPCFault {
        export const $gtype: GObject.GType<XMLRPCFault>;
    }
    enum XMLRPCFault {
        PARSE_ERROR_NOT_WELL_FORMED,
        PARSE_ERROR_UNSUPPORTED_ENCODING,
        PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
        SERVER_ERROR_INVALID_XML_RPC,
        SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
        SERVER_ERROR_INVALID_METHOD_PARAMETERS,
        SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
        APPLICATION_ERROR,
        SYSTEM_ERROR,
        TRANSPORT_ERROR,
    }
    const ADDRESS_ANY_PORT: number;
    const ADDRESS_FAMILY: string;
    const ADDRESS_NAME: string;
    const ADDRESS_PHYSICAL: string;
    const ADDRESS_PORT: string;
    const ADDRESS_PROTOCOL: string;
    const ADDRESS_SOCKADDR: string;
    const AUTH_DOMAIN_ADD_PATH: string;
    const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string;
    const AUTH_DOMAIN_BASIC_AUTH_DATA: string;
    const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string;
    const AUTH_DOMAIN_DIGEST_AUTH_DATA: string;
    const AUTH_DOMAIN_FILTER: string;
    const AUTH_DOMAIN_FILTER_DATA: string;
    const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string;
    const AUTH_DOMAIN_GENERIC_AUTH_DATA: string;
    const AUTH_DOMAIN_PROXY: string;
    const AUTH_DOMAIN_REALM: string;
    const AUTH_DOMAIN_REMOVE_PATH: string;
    const AUTH_HOST: string;
    const AUTH_IS_AUTHENTICATED: string;
    const AUTH_IS_FOR_PROXY: string;
    const AUTH_REALM: string;
    const AUTH_SCHEME_NAME: string;
    const CHAR_HTTP_CTL: number;
    const CHAR_HTTP_SEPARATOR: number;
    const CHAR_URI_GEN_DELIMS: number;
    const CHAR_URI_PERCENT_ENCODED: number;
    const CHAR_URI_SUB_DELIMS: number;
    const COOKIE_JAR_ACCEPT_POLICY: string;
    const COOKIE_JAR_DB_FILENAME: string;
    const COOKIE_JAR_READ_ONLY: string;
    const COOKIE_JAR_TEXT_FILENAME: string;
    const COOKIE_MAX_AGE_ONE_DAY: number;
    const COOKIE_MAX_AGE_ONE_HOUR: number;
    const COOKIE_MAX_AGE_ONE_WEEK: number;
    const COOKIE_MAX_AGE_ONE_YEAR: number;
    const FORM_MIME_TYPE_MULTIPART: string;
    const FORM_MIME_TYPE_URLENCODED: string;
    const HSTS_ENFORCER_DB_FILENAME: string;
    const HSTS_POLICY_MAX_AGE_PAST: number;
    const LOGGER_LEVEL: string;
    const LOGGER_MAX_BODY_SIZE: string;
    const MAJOR_VERSION: number;
    const MESSAGE_FIRST_PARTY: string;
    const MESSAGE_FLAGS: string;
    const MESSAGE_HTTP_VERSION: string;
    const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string;
    const MESSAGE_METHOD: string;
    const MESSAGE_PRIORITY: string;
    const MESSAGE_REASON_PHRASE: string;
    const MESSAGE_REQUEST_BODY: string;
    const MESSAGE_REQUEST_BODY_DATA: string;
    const MESSAGE_REQUEST_HEADERS: string;
    const MESSAGE_RESPONSE_BODY: string;
    const MESSAGE_RESPONSE_BODY_DATA: string;
    const MESSAGE_RESPONSE_HEADERS: string;
    const MESSAGE_SERVER_SIDE: string;
    const MESSAGE_SITE_FOR_COOKIES: string;
    const MESSAGE_STATUS_CODE: string;
    const MESSAGE_TLS_CERTIFICATE: string;
    const MESSAGE_TLS_ERRORS: string;
    const MESSAGE_URI: string;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const REQUEST_SESSION: string;
    const REQUEST_URI: string;
    const SERVER_ASYNC_CONTEXT: string;
    const SERVER_HTTPS_ALIASES: string;
    const SERVER_HTTP_ALIASES: string;
    const SERVER_INTERFACE: string;
    const SERVER_PORT: string;
    const SERVER_RAW_PATHS: string;
    const SERVER_SERVER_HEADER: string;
    const SERVER_SSL_CERT_FILE: string;
    const SERVER_SSL_KEY_FILE: string;
    const SERVER_TLS_CERTIFICATE: string;
    const SESSION_ACCEPT_LANGUAGE: string;
    const SESSION_ACCEPT_LANGUAGE_AUTO: string;
    const SESSION_ASYNC_CONTEXT: string;
    const SESSION_HTTPS_ALIASES: string;
    const SESSION_HTTP_ALIASES: string;
    const SESSION_IDLE_TIMEOUT: string;
    const SESSION_LOCAL_ADDRESS: string;
    const SESSION_MAX_CONNS: string;
    const SESSION_MAX_CONNS_PER_HOST: string;
    const SESSION_PROXY_RESOLVER: string;
    const SESSION_PROXY_URI: string;
    const SESSION_SSL_CA_FILE: string;
    const SESSION_SSL_STRICT: string;
    const SESSION_SSL_USE_SYSTEM_CA_FILE: string;
    const SESSION_TIMEOUT: string;
    const SESSION_TLS_DATABASE: string;
    const SESSION_TLS_INTERACTION: string;
    const SESSION_USER_AGENT: string;
    const SESSION_USE_NTLM: string;
    const SESSION_USE_THREAD_CONTEXT: string;
    const SOCKET_ASYNC_CONTEXT: string;
    const SOCKET_FLAG_NONBLOCKING: string;
    const SOCKET_IS_SERVER: string;
    const SOCKET_LOCAL_ADDRESS: string;
    const SOCKET_REMOTE_ADDRESS: string;
    const SOCKET_SSL_CREDENTIALS: string;
    const SOCKET_SSL_FALLBACK: string;
    const SOCKET_SSL_STRICT: string;
    const SOCKET_TIMEOUT: string;
    const SOCKET_TLS_CERTIFICATE: string;
    const SOCKET_TLS_ERRORS: string;
    const SOCKET_TRUSTED_CERTIFICATE: string;
    const SOCKET_USE_THREAD_CONTEXT: string;
    const VERSION_MIN_REQUIRED: number;
    function check_version(major: number, minor: number, micro: number): boolean;
    function cookie_parse(header: string, origin: URI): Cookie | null;
    function cookies_from_request(msg: Message): Cookie[];
    function cookies_from_response(msg: Message): Cookie[];
    function cookies_to_cookie_header(cookies: Cookie[]): string;
    function cookies_to_request(cookies: Cookie[], msg: Message): void;
    function cookies_to_response(cookies: Cookie[], msg: Message): void;
    function form_decode(encoded_form: string): { [key: string]: string };
    function form_decode_multipart(msg: Message, file_control_name: string | null): [{ [key: string]: string } | null, string, string, Buffer | null];
    function form_encode_datalist(form_data_set: GLib.Data): string;
    function form_encode_hash(form_data_set: { [key: string]: string }): string;
    function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message;
    function form_request_new_from_hash(method: string, uri: string, form_data_set: { [key: string]: string }): Message;
    function form_request_new_from_multipart(uri: string, multipart: Multipart): Message;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_resource(): Gio.Resource;
    function header_contains(header: string, token: string): boolean;
    function header_free_param_list(param_list: { [key: string]: string }): void;
    function header_g_string_append_param(string: GLib.String, name: string, value: string): void;
    function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
    function header_parse_list(header: string): string[];
    function header_parse_param_list(header: string): { [key: string]: string };
    function header_parse_param_list_strict(header: string): { [key: string]: string } | null;
    function header_parse_quality_list(header: string): [string[], string[] | null];
    function header_parse_semi_param_list(header: string): { [key: string]: string };
    function header_parse_semi_param_list_strict(header: string): { [key: string]: string } | null;
    function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
    function headers_parse_request(str: string, len: number, req_headers: MessageHeaders): [number, string, string, HTTPVersion | null];
    function headers_parse_response(str: string, len: number, headers: MessageHeaders): [boolean, HTTPVersion | null, number, string];
    function headers_parse_status_line(status_line: string): [boolean, HTTPVersion | null, number, string];
    function http_error_quark(): GLib.Quark;
    function message_headers_iter_init(hdrs: MessageHeaders): MessageHeadersIter;
    function message_headers_iter_next(iter: MessageHeadersIter): [boolean, MessageHeadersIter, string, string];
    function request_error_quark(): GLib.Quark;
    function requester_error_quark(): GLib.Quark;
    function status_get_phrase(status_code: number): string;
    function status_proxify(status_code: number): number;
    function str_case_equal(v1: null, v2: null): boolean;
    function str_case_hash(key: null): number;
    function tld_domain_is_public_suffix(domain: string): boolean;
    function tld_error_quark(): GLib.Quark;
    function tld_get_base_domain(hostname: string): string;
    function uri_decode(part: string): string;
    function uri_encode(part: string, escape_extra: string | null): string;
    function uri_normalize(part: string, unescape_extra: string | null): string;
    function value_array_new(): GObject.ValueArray;
    function value_hash_insert_value(hash: { [key: string]: GObject.Value }, key: string, value: GObject.Value | any): void;
    function value_hash_new(): { [key: string]: GObject.Value };
    function websocket_client_prepare_handshake(msg: Message, origin: string | null, protocols: string[] | null): void;
    function websocket_client_prepare_handshake_with_extensions(msg: Message, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): void;
    function websocket_client_verify_handshake(msg: Message): boolean;
    function websocket_client_verify_handshake_with_extensions(msg: Message, supported_extensions: GObject.TypeClass[] | null): [boolean, WebsocketExtension[] | null];
    function websocket_error_get_quark(): GLib.Quark;
    function websocket_server_check_handshake(msg: Message, origin: string | null, protocols: string[] | null): boolean;
    function websocket_server_check_handshake_with_extensions(msg: Message, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): boolean;
    function websocket_server_process_handshake(msg: Message, expected_origin: string | null, protocols: string[] | null): boolean;
    function websocket_server_process_handshake_with_extensions(msg: Message, expected_origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): [boolean, WebsocketExtension[] | null];
    function xmlrpc_build_method_call(method_name: string, params: (GObject.Value | any)[]): string | null;
    function xmlrpc_build_method_response(value: GObject.Value | any): string | null;
    function xmlrpc_build_request(method_name: string, params: GLib.Variant): string;
    function xmlrpc_build_response(value: GLib.Variant): string;
    function xmlrpc_error_quark(): GLib.Quark;
    function xmlrpc_fault_quark(): GLib.Quark;
    function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message;
    function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean;
    function xmlrpc_parse_method_call(method_call: string, length: number): [boolean, string, GObject.ValueArray];
    function xmlrpc_parse_method_response(method_response: string, length: number): [boolean, unknown];
    function xmlrpc_parse_request(method_call: string, length: number): [string, XMLRPCParams];
    function xmlrpc_parse_response(method_response: string, length: number, signature: string | null): GLib.Variant;
    function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date;
    function xmlrpc_variant_new_datetime(date: Date): GLib.Variant;
    interface AddressCallback {
        (addr: Address, status: number): void;
    }
    interface AuthDomainBasicAuthCallback {
        (domain: AuthDomainBasic, msg: Message, username: string, password: string): boolean;
    }
    interface AuthDomainDigestAuthCallback {
        (domain: AuthDomainDigest, msg: Message, username: string): string | null;
    }
    interface AuthDomainFilter {
        (domain: AuthDomain, msg: Message): boolean;
    }
    interface AuthDomainGenericAuthCallback {
        (domain: AuthDomain, msg: Message, username: string): boolean;
    }
    interface ChunkAllocator {
        (msg: Message, max_len: number): Buffer | null;
    }
    interface LoggerFilter {
        (logger: Logger, msg: Message): LoggerLogLevel;
    }
    interface LoggerPrinter {
        (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void;
    }
    interface MessageHeadersForeachFunc {
        (name: string, value: string): void;
    }
    interface PasswordManagerCallback {
        (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void;
    }
    interface ProxyResolverCallback {
        (proxy_resolver: ProxyResolver, msg: Message, arg: number, addr: Address): void;
    }
    interface ProxyURIResolverCallback {
        (resolver: ProxyURIResolver, status: number, proxy_uri: URI): void;
    }
    interface ServerCallback {
        (server: Server, msg: Message, path: string, query: { [key: string]: string } | null, client: ClientContext): void;
    }
    interface ServerWebsocketCallback {
        (server: Server, connection: WebsocketConnection, path: string, client: ClientContext): void;
    }
    interface SessionCallback {
        (session: Session, msg: Message): void;
    }
    interface SessionConnectProgressCallback {
        (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
    }
    interface SocketCallback {
        (sock: Socket, status: number): void;
    }
    type ByteArray = object | null;
    export namespace Cacheability {
        export const $gtype: GObject.GType<Cacheability>;
    }
    enum Cacheability {
        CACHEABLE,
        UNCACHEABLE,
        INVALIDATES,
        VALIDATES,
    }
    export namespace Expectation {
        export const $gtype: GObject.GType<Expectation>;
    }
    enum Expectation {
        UNRECOGNIZED,
        CONTINUE,
    }
    export namespace MessageFlags {
        export const $gtype: GObject.GType<MessageFlags>;
    }
    enum MessageFlags {
        NO_REDIRECT,
        CAN_REBUILD,
        OVERWRITE_CHUNKS,
        CONTENT_DECODED,
        CERTIFICATE_TRUSTED,
        NEW_CONNECTION,
        IDEMPOTENT,
        IGNORE_CONNECTION_LIMITS,
        DO_NOT_USE_AUTH_CACHE,
    }
    export namespace ServerListenOptions {
        export const $gtype: GObject.GType<ServerListenOptions>;
    }
    enum ServerListenOptions {
        HTTPS,
        IPV4_ONLY,
        IPV6_ONLY,
    }
    namespace Address {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::physical": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::sockaddr": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.SocketConnectable.ConstructorProps {
            family: AddressFamily;
            name: string | null;
            physical: string | null;
            port: number;
            protocol: string;
            sockaddr: never;
        }
    }
    class Address extends GObject.Object implements Gio.SocketConnectable {
        static $gtype: GObject.GType<Address>;
        get family(): AddressFamily;
        get name(): string | null;
        get physical(): string | null;
        get port(): number;
        get protocol(): string;
        get sockaddr(): null;
        $signals: Address.SignalSignatures;
        constructor(properties?: Partial<Address.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, port: number): Address;
        static new_any(family: AddressFamily, port: number): Address;
        static new_from_sockaddr(sa: null, len: number): Address;
        connect<K extends keyof Address.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Address.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Address.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Address.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Address.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Address.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        equal_by_ip(addr2: Address): boolean;
        equal_by_name(addr2: Address): boolean;
        get_gsockaddr(): Gio.SocketAddress;
        get_name(): string | null;
        get_physical(): string | null;
        get_port(): number;
        get_sockaddr(): [null, number];
        hash_by_ip(): number;
        hash_by_name(): number;
        is_resolved(): boolean;
        resolve_async(async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback): void;
        resolve_sync(cancellable: Gio.Cancellable | null): number;
        enumerate(): Gio.SocketAddressEnumerator;
        proxy_enumerate(): Gio.SocketAddressEnumerator;
        to_string(): string;
        vfunc_enumerate(): Gio.SocketAddressEnumerator;
        vfunc_proxy_enumerate(): Gio.SocketAddressEnumerator;
        vfunc_to_string(): string;
    }
    namespace Auth {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::is-authenticated": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::scheme-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            host: string;
            is_authenticated: boolean;
            isAuthenticated: boolean;
            is_for_proxy: boolean;
            isForProxy: boolean;
            realm: string;
            scheme_name: string;
            schemeName: string;
        }
    }
    abstract class Auth extends GObject.Object {
        static $gtype: GObject.GType<Auth>;
        get host(): string;
        set host(val: string);
        get is_authenticated(): boolean;
        get isAuthenticated(): boolean;
        get is_for_proxy(): boolean;
        set is_for_proxy(val: boolean);
        get isForProxy(): boolean;
        set isForProxy(val: boolean);
        get realm(): string;
        set realm(val: string);
        get scheme_name(): string;
        get schemeName(): string;
        $signals: Auth.SignalSignatures;
        constructor(properties?: Partial<Auth.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](type: GObject.GType, msg: Message, auth_header: string): Auth;
        connect<K extends keyof Auth.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Auth.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Auth.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Auth.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Auth.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Auth.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_authenticate(username: string, password: string): void;
        vfunc_can_authenticate(): boolean;
        vfunc_get_authorization(msg: Message): string;
        vfunc_get_protection_space(source_uri: URI): string[];
        vfunc_is_authenticated(): boolean;
        vfunc_is_ready(msg: Message): boolean;
        vfunc_update(msg: Message, auth_header: never): boolean;
        authenticate(username: string, password: string): void;
        can_authenticate(): boolean;
        get_authorization(msg: Message): string;
        get_host(): string;
        get_info(): string;
        get_protection_space(source_uri: URI): string[];
        get_realm(): string;
        get_saved_password(user: string): string;
        get_saved_users(): string[];
        get_scheme_name(): string;
        has_saved_password(username: string, password: string): void;
        is_ready(msg: Message): boolean;
        save_password(username: string, password: string): void;
        update(msg: Message, auth_header: string): boolean;
    }
    namespace AuthBasic {
        interface SignalSignatures extends Auth.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::is-authenticated": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::scheme-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Auth.ConstructorProps {}
    }
    class AuthBasic extends Auth {
        static $gtype: GObject.GType<AuthBasic>;
        $signals: AuthBasic.SignalSignatures;
        constructor(properties?: Partial<AuthBasic.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthBasic.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthBasic.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthBasic.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthBasic.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthBasic.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthBasic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace AuthDigest {
        interface SignalSignatures extends Auth.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::is-authenticated": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::scheme-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Auth.ConstructorProps {}
    }
    class AuthDigest extends Auth {
        static $gtype: GObject.GType<AuthDigest>;
        $signals: AuthDigest.SignalSignatures;
        constructor(properties?: Partial<AuthDigest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthDigest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDigest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthDigest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDigest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthDigest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthDigest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace AuthDomain {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::add-path": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::filter-data": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-callback": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-data": (pspec: GObject.ParamSpec) => void;
            "notify::proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::remove-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            add_path: string;
            addPath: string;
            filter: AuthDomainFilter;
            filter_data: never;
            filterData: never;
            generic_auth_callback: AuthDomainGenericAuthCallback;
            genericAuthCallback: AuthDomainGenericAuthCallback;
            generic_auth_data: never;
            genericAuthData: never;
            proxy: boolean;
            realm: string;
            remove_path: string;
            removePath: string;
        }
    }
    abstract class AuthDomain extends GObject.Object {
        static $gtype: GObject.GType<AuthDomain>;
        set add_path(val: string);
        set addPath(val: string);
        get filter(): AuthDomainFilter;
        set filter(val: AuthDomainFilter);
        get filter_data(): null;
        set filter_data(val: never);
        get filterData(): null;
        set filterData(val: never);
        get generic_auth_callback(): AuthDomainGenericAuthCallback;
        set generic_auth_callback(val: AuthDomainGenericAuthCallback);
        get genericAuthCallback(): AuthDomainGenericAuthCallback;
        set genericAuthCallback(val: AuthDomainGenericAuthCallback);
        get generic_auth_data(): null;
        set generic_auth_data(val: never);
        get genericAuthData(): null;
        set genericAuthData(val: never);
        get proxy(): boolean;
        get realm(): string;
        set remove_path(val: string);
        set removePath(val: string);
        $signals: AuthDomain.SignalSignatures;
        constructor(properties?: Partial<AuthDomain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthDomain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthDomain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_accepts(msg: Message, header: string): string;
        vfunc_challenge(msg: Message): string;
        vfunc_check_password(msg: Message, username: string, password: string): boolean;
        accepts(msg: Message): string | null;
        challenge(msg: Message): void;
        check_password(msg: Message, username: string, password: string): boolean;
        covers(msg: Message): boolean;
        get_realm(): string;
        set_filter(filter: AuthDomainFilter): void;
        set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void;
        try_generic_auth_callback(msg: Message, username: string): boolean;
    }
    namespace AuthDomainBasic {
        interface SignalSignatures extends AuthDomain.SignalSignatures {
            "notify::auth-callback": (pspec: GObject.ParamSpec) => void;
            "notify::auth-data": (pspec: GObject.ParamSpec) => void;
            "notify::add-path": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::filter-data": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-callback": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-data": (pspec: GObject.ParamSpec) => void;
            "notify::proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::remove-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AuthDomain.ConstructorProps {
            auth_callback: AuthDomainBasicAuthCallback;
            authCallback: AuthDomainBasicAuthCallback;
            auth_data: never;
            authData: never;
        }
    }
    class AuthDomainBasic extends AuthDomain {
        static $gtype: GObject.GType<AuthDomainBasic>;
        get auth_callback(): AuthDomainBasicAuthCallback;
        set auth_callback(val: AuthDomainBasicAuthCallback);
        get authCallback(): AuthDomainBasicAuthCallback;
        set authCallback(val: AuthDomainBasicAuthCallback);
        get auth_data(): null;
        set auth_data(val: never);
        get authData(): null;
        set authData(val: never);
        $signals: AuthDomainBasic.SignalSignatures;
        constructor(properties?: Partial<AuthDomainBasic.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthDomainBasic.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomainBasic.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthDomainBasic.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomainBasic.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthDomainBasic.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthDomainBasic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_auth_callback(callback: AuthDomainBasicAuthCallback): void;
    }
    namespace AuthDomainDigest {
        interface SignalSignatures extends AuthDomain.SignalSignatures {
            "notify::auth-callback": (pspec: GObject.ParamSpec) => void;
            "notify::auth-data": (pspec: GObject.ParamSpec) => void;
            "notify::add-path": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::filter-data": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-callback": (pspec: GObject.ParamSpec) => void;
            "notify::generic-auth-data": (pspec: GObject.ParamSpec) => void;
            "notify::proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::remove-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AuthDomain.ConstructorProps {
            auth_callback: AuthDomainDigestAuthCallback;
            authCallback: AuthDomainDigestAuthCallback;
            auth_data: never;
            authData: never;
        }
    }
    class AuthDomainDigest extends AuthDomain {
        static $gtype: GObject.GType<AuthDomainDigest>;
        get auth_callback(): AuthDomainDigestAuthCallback;
        set auth_callback(val: AuthDomainDigestAuthCallback);
        get authCallback(): AuthDomainDigestAuthCallback;
        set authCallback(val: AuthDomainDigestAuthCallback);
        get auth_data(): null;
        set auth_data(val: never);
        get authData(): null;
        set authData(val: never);
        $signals: AuthDomainDigest.SignalSignatures;
        constructor(properties?: Partial<AuthDomainDigest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthDomainDigest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomainDigest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthDomainDigest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthDomainDigest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthDomainDigest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthDomainDigest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static encode_password(username: string, realm: string, password: string): string;
        set_auth_callback(callback: AuthDomainDigestAuthCallback): void;
    }
    namespace AuthManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticate: (arg0: Message, arg1: Auth, arg2: boolean) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class AuthManager extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<AuthManager>;
        $signals: AuthManager.SignalSignatures;
        constructor(properties?: Partial<AuthManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;
        clear_cached_credentials(): void;
        use_auth(uri: URI, auth: Auth): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace AuthNTLM {
        interface SignalSignatures extends Auth.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::is-authenticated": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::scheme-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Auth.ConstructorProps {}
    }
    class AuthNTLM extends Auth {
        static $gtype: GObject.GType<AuthNTLM>;
        $signals: AuthNTLM.SignalSignatures;
        constructor(properties?: Partial<AuthNTLM.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthNTLM.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthNTLM.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthNTLM.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthNTLM.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthNTLM.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthNTLM.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace AuthNegotiate {
        interface SignalSignatures extends Auth.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::is-authenticated": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::realm": (pspec: GObject.ParamSpec) => void;
            "notify::scheme-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Auth.ConstructorProps {}
    }
    class AuthNegotiate extends Auth {
        static $gtype: GObject.GType<AuthNegotiate>;
        $signals: AuthNegotiate.SignalSignatures;
        constructor(properties?: Partial<AuthNegotiate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthNegotiate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthNegotiate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthNegotiate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthNegotiate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthNegotiate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthNegotiate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static supported(): boolean;
    }
    namespace Cache {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::cache-dir": (pspec: GObject.ParamSpec) => void;
            "notify::cache-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
            cache_dir: string;
            cacheDir: string;
            cache_type: CacheType;
            cacheType: CacheType;
        }
    }
    class Cache extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<Cache>;
        get cache_dir(): string;
        get cacheDir(): string;
        get cache_type(): CacheType;
        get cacheType(): CacheType;
        $signals: Cache.SignalSignatures;
        constructor(properties?: Partial<Cache.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](cache_dir: string | null, cache_type: CacheType): Cache;
        connect<K extends keyof Cache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cache.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cache.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cache.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_cacheability(msg: Message): Cacheability;
        clear(): void;
        dump(): void;
        flush(): void;
        get_max_size(): number;
        load(): void;
        set_max_size(max_size: number): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace ContentDecoder {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class ContentDecoder extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<ContentDecoder>;
        $signals: ContentDecoder.SignalSignatures;
        constructor(properties?: Partial<ContentDecoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ContentDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentDecoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentDecoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentDecoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentDecoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentDecoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace ContentSniffer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class ContentSniffer extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<ContentSniffer>;
        $signals: ContentSniffer.SignalSignatures;
        constructor(properties?: Partial<ContentSniffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ContentSniffer;
        connect<K extends keyof ContentSniffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentSniffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentSniffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentSniffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentSniffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentSniffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_buffer_size(): bigint | number;
        vfunc_sniff(msg: Message, buffer: Buffer): [string, { [key: string]: string } | null];
        get_buffer_size(): number;
        sniff(msg: Message, buffer: Buffer): [string, { [key: string]: string } | null];
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace CookieJar {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: Cookie, arg1: Cookie) => void;
            "notify::accept-policy": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
            accept_policy: CookieJarAcceptPolicy;
            acceptPolicy: CookieJarAcceptPolicy;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    class CookieJar extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<CookieJar>;
        get accept_policy(): CookieJarAcceptPolicy;
        set accept_policy(val: CookieJarAcceptPolicy);
        get acceptPolicy(): CookieJarAcceptPolicy;
        set acceptPolicy(val: CookieJarAcceptPolicy);
        get read_only(): boolean;
        get readOnly(): boolean;
        $signals: CookieJar.SignalSignatures;
        constructor(properties?: Partial<CookieJar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CookieJar;
        connect<K extends keyof CookieJar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieJar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieJar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieJar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void;
        vfunc_is_persistent(): boolean;
        vfunc_save(): void;
        add_cookie(cookie: Cookie): void;
        add_cookie_full(cookie: Cookie, uri: URI | null, first_party: URI | null): void;
        add_cookie_with_first_party(first_party: URI, cookie: Cookie): void;
        all_cookies(): Cookie[];
        delete_cookie(cookie: Cookie): void;
        get_accept_policy(): CookieJarAcceptPolicy;
        get_cookie_list(uri: URI, for_http: boolean): Cookie[];
        get_cookie_list_with_same_site_info(uri: URI, top_level: URI | null, site_for_cookies: URI | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[];
        get_cookies(uri: URI, for_http: boolean): string | null;
        is_persistent(): boolean;
        save(): void;
        set_accept_policy(policy: CookieJarAcceptPolicy): void;
        set_cookie(uri: URI, cookie: string): void;
        set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace CookieJarDB {
        interface SignalSignatures extends CookieJar.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::accept-policy": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CookieJar.ConstructorProps, SessionFeature.ConstructorProps {
            filename: string;
        }
    }
    class CookieJarDB extends CookieJar implements SessionFeature {
        static $gtype: GObject.GType<CookieJarDB>;
        get filename(): string;
        $signals: CookieJarDB.SignalSignatures;
        constructor(properties?: Partial<CookieJarDB.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string, read_only: boolean): CookieJarDB;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CookieJarDB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarDB.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieJarDB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarDB.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieJarDB.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieJarDB.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace CookieJarText {
        interface SignalSignatures extends CookieJar.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::accept-policy": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CookieJar.ConstructorProps, SessionFeature.ConstructorProps {
            filename: string;
        }
    }
    class CookieJarText extends CookieJar implements SessionFeature {
        static $gtype: GObject.GType<CookieJarText>;
        get filename(): string;
        $signals: CookieJarText.SignalSignatures;
        constructor(properties?: Partial<CookieJarText.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string, read_only: boolean): CookieJarText;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CookieJarText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieJarText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieJarText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieJarText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieJarText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace HSTSEnforcer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: HSTSPolicy, arg1: HSTSPolicy) => void;
            "hsts-enforced": (arg0: Message) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class HSTSEnforcer extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<HSTSEnforcer>;
        $signals: HSTSEnforcer.SignalSignatures;
        constructor(properties?: Partial<HSTSEnforcer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): HSTSEnforcer;
        connect<K extends keyof HSTSEnforcer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HSTSEnforcer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HSTSEnforcer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HSTSEnforcer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HSTSEnforcer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HSTSEnforcer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
        vfunc_has_valid_policy(domain: string): boolean;
        vfunc_hsts_enforced(message: Message): void;
        vfunc_is_persistent(): boolean;
        get_domains(session_policies: boolean): string[];
        get_policies(session_policies: boolean): HSTSPolicy[];
        has_valid_policy(domain: string): boolean;
        is_persistent(): boolean;
        set_policy(policy: HSTSPolicy): void;
        set_session_policy(domain: string, include_subdomains: boolean): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace HSTSEnforcerDB {
        interface SignalSignatures extends HSTSEnforcer.SignalSignatures {
            "notify::filename": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends HSTSEnforcer.ConstructorProps, SessionFeature.ConstructorProps {
            filename: string;
        }
    }
    class HSTSEnforcerDB extends HSTSEnforcer implements SessionFeature {
        static $gtype: GObject.GType<HSTSEnforcerDB>;
        get filename(): string;
        $signals: HSTSEnforcerDB.SignalSignatures;
        constructor(properties?: Partial<HSTSEnforcerDB.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string): HSTSEnforcerDB;
        static ["new"](...args: never[]): any;
        connect<K extends keyof HSTSEnforcerDB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HSTSEnforcerDB.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HSTSEnforcerDB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HSTSEnforcerDB.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HSTSEnforcerDB.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HSTSEnforcerDB.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace Logger {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::level": (pspec: GObject.ParamSpec) => void;
            "notify::max-body-size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {
            level: LoggerLogLevel;
            max_body_size: number;
            maxBodySize: number;
        }
    }
    class Logger extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<Logger>;
        get level(): LoggerLogLevel;
        set level(val: LoggerLogLevel);
        get max_body_size(): number;
        set max_body_size(val: number);
        get maxBodySize(): number;
        set maxBodySize(val: number);
        $signals: Logger.SignalSignatures;
        constructor(properties?: Partial<Logger.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](level: LoggerLogLevel, max_body_size: number): Logger;
        connect<K extends keyof Logger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Logger.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Logger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Logger.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Logger.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Logger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        attach(session: Session): void;
        detach(session: Session): void;
        set_printer(printer: LoggerPrinter): void;
        set_request_filter(request_filter: LoggerFilter): void;
        set_response_filter(response_filter: LoggerFilter): void;
        add_feature(type: GObject.GType): boolean;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace Message {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "content-sniffed": (arg0: string, arg1: { [key: string]: string }) => void;
            finished: () => void;
            "got-body": () => void;
            "got-chunk": (arg0: Buffer) => void;
            "got-headers": () => void;
            "got-informational": () => void;
            "network-event": (arg0: Gio.SocketClientEvent, arg1: Gio.IOStream) => void;
            restarted: () => void;
            starting: () => void;
            "wrote-body": () => void;
            "wrote-body-data": (arg0: Buffer) => void;
            "wrote-chunk": () => void;
            "wrote-headers": () => void;
            "wrote-informational": () => void;
            "notify::first-party": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::http-version": (pspec: GObject.ParamSpec) => void;
            "notify::is-top-level-navigation": (pspec: GObject.ParamSpec) => void;
            "notify::method": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::reason-phrase": (pspec: GObject.ParamSpec) => void;
            "notify::request-body": (pspec: GObject.ParamSpec) => void;
            "notify::request-body-data": (pspec: GObject.ParamSpec) => void;
            "notify::request-headers": (pspec: GObject.ParamSpec) => void;
            "notify::response-body": (pspec: GObject.ParamSpec) => void;
            "notify::response-body-data": (pspec: GObject.ParamSpec) => void;
            "notify::response-headers": (pspec: GObject.ParamSpec) => void;
            "notify::server-side": (pspec: GObject.ParamSpec) => void;
            "notify::site-for-cookies": (pspec: GObject.ParamSpec) => void;
            "notify::status-code": (pspec: GObject.ParamSpec) => void;
            "notify::tls-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::tls-errors": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            first_party: URI;
            firstParty: URI;
            flags: MessageFlags;
            http_version: HTTPVersion;
            httpVersion: HTTPVersion;
            is_top_level_navigation: boolean;
            isTopLevelNavigation: boolean;
            method: string;
            priority: MessagePriority;
            reason_phrase: string;
            reasonPhrase: string;
            request_body: MessageBody;
            requestBody: MessageBody;
            request_body_data: GLib.Bytes | Uint8Array;
            requestBodyData: GLib.Bytes | Uint8Array;
            request_headers: MessageHeaders;
            requestHeaders: MessageHeaders;
            response_body: MessageBody;
            responseBody: MessageBody;
            response_body_data: GLib.Bytes | Uint8Array;
            responseBodyData: GLib.Bytes | Uint8Array;
            response_headers: MessageHeaders;
            responseHeaders: MessageHeaders;
            server_side: boolean;
            serverSide: boolean;
            site_for_cookies: URI;
            siteForCookies: URI;
            status_code: number;
            statusCode: number;
            tls_certificate: Gio.TlsCertificate;
            tlsCertificate: Gio.TlsCertificate;
            tls_errors: Gio.TlsCertificateFlags;
            tlsErrors: Gio.TlsCertificateFlags;
            uri: URI;
        }
    }
    class Message extends GObject.Object {
        static $gtype: GObject.GType<Message>;
        get first_party(): URI;
        set first_party(val: URI);
        get firstParty(): URI;
        set firstParty(val: URI);
        get flags(): MessageFlags;
        set flags(val: MessageFlags);
        get http_version(): HTTPVersion;
        set http_version(val: HTTPVersion);
        get httpVersion(): HTTPVersion;
        set httpVersion(val: HTTPVersion);
        get is_top_level_navigation(): boolean;
        set is_top_level_navigation(val: boolean);
        get isTopLevelNavigation(): boolean;
        set isTopLevelNavigation(val: boolean);
        get method(): string;
        set method(val: string);
        get priority(): MessagePriority;
        set priority(val: MessagePriority);
        get reason_phrase(): string;
        set reason_phrase(val: string);
        get reasonPhrase(): string;
        set reasonPhrase(val: string);
        get request_body(): MessageBody;
        get requestBody(): MessageBody;
        get request_body_data(): GLib.Bytes;
        get requestBodyData(): GLib.Bytes;
        get request_headers(): MessageHeaders;
        get requestHeaders(): MessageHeaders;
        get response_body(): MessageBody;
        get responseBody(): MessageBody;
        get response_body_data(): GLib.Bytes;
        get responseBodyData(): GLib.Bytes;
        get response_headers(): MessageHeaders;
        get responseHeaders(): MessageHeaders;
        get server_side(): boolean;
        get serverSide(): boolean;
        get site_for_cookies(): URI;
        set site_for_cookies(val: URI);
        get siteForCookies(): URI;
        set siteForCookies(val: URI);
        get status_code(): number;
        set status_code(val: number);
        get statusCode(): number;
        set statusCode(val: number);
        get tls_certificate(): Gio.TlsCertificate;
        set tls_certificate(val: Gio.TlsCertificate);
        get tlsCertificate(): Gio.TlsCertificate;
        set tlsCertificate(val: Gio.TlsCertificate);
        get tls_errors(): Gio.TlsCertificateFlags;
        set tls_errors(val: Gio.TlsCertificateFlags);
        get tlsErrors(): Gio.TlsCertificateFlags;
        set tlsErrors(val: Gio.TlsCertificateFlags);
        get uri(): URI;
        set uri(val: URI);
        $signals: Message.SignalSignatures;
        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](method: string, uri_string: string): Message;
        static new_from_uri(method: string, uri: URI): Message;
        connect<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Message.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_finished(): void;
        vfunc_got_body(): void;
        vfunc_got_chunk(chunk: Buffer): void;
        vfunc_got_headers(): void;
        vfunc_got_informational(): void;
        vfunc_restarted(): void;
        vfunc_starting(): void;
        vfunc_wrote_body(): void;
        vfunc_wrote_chunk(): void;
        vfunc_wrote_headers(): void;
        vfunc_wrote_informational(): void;
        content_sniffed(content_type: string, params: never): void;
        disable_feature(feature_type: GObject.GType): void;
        finished(): void;
        get_address(): Address;
        get_first_party(): URI;
        get_flags(): MessageFlags;
        get_http_version(): HTTPVersion;
        get_https_status(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];
        get_is_top_level_navigation(): boolean;
        get_priority(): MessagePriority;
        get_site_for_cookies(): URI;
        get_soup_request(): Request;
        get_uri(): URI;
        got_body(): void;
        got_chunk(chunk: Buffer): void;
        got_headers(): void;
        got_informational(): void;
        is_feature_disabled(feature_type: GObject.GType): boolean;
        is_keepalive(): boolean;
        restarted(): void;
        set_chunk_allocator(allocator: ChunkAllocator): void;
        set_first_party(first_party: URI): void;
        set_flags(flags: MessageFlags): void;
        set_http_version(version: HTTPVersion): void;
        set_is_top_level_navigation(is_top_level_navigation: boolean): void;
        set_priority(priority: MessagePriority): void;
        set_redirect(status_code: number, redirect_uri: string): void;
        set_request(content_type: string | null, req_use: MemoryUse, req_body: Uint8Array | string | null): void;
        set_response(content_type: string | null, resp_use: MemoryUse, resp_body: Uint8Array | string | null): void;
        set_site_for_cookies(site_for_cookies: URI | null): void;
        set_status(status_code: number): void;
        set_status_full(status_code: number, reason_phrase: string): void;
        set_uri(uri: URI): void;
        starting(): void;
        wrote_body(): void;
        wrote_body_data(chunk: Buffer): void;
        wrote_chunk(): void;
        wrote_headers(): void;
        wrote_informational(): void;
    }
    namespace MultipartInputStream {
        interface SignalSignatures extends Gio.FilterInputStream.SignalSignatures {
            "notify::message": (pspec: GObject.ParamSpec) => void;
            "notify::base-stream": (pspec: GObject.ParamSpec) => void;
            "notify::close-base-stream": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.FilterInputStream.ConstructorProps, Gio.PollableInputStream.ConstructorProps {
            message: Message;
        }
    }
    class MultipartInputStream extends Gio.FilterInputStream implements Gio.PollableInputStream {
        static $gtype: GObject.GType<MultipartInputStream>;
        get message(): Message;
        $signals: MultipartInputStream.SignalSignatures;
        constructor(properties?: Partial<MultipartInputStream.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](msg: Message, base_stream: Gio.InputStream): MultipartInputStream;
        connect<K extends keyof MultipartInputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultipartInputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MultipartInputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultipartInputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MultipartInputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MultipartInputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_headers(): MessageHeaders | null;
        next_part(cancellable: Gio.Cancellable | null): Gio.InputStream | null;
        next_part_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream | null>;
        next_part_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        next_part_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream | null> | void;
        next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;
        can_poll(): boolean;
        create_source(cancellable: Gio.Cancellable | null): GLib.Source;
        is_readable(): boolean;
        read_nonblocking(cancellable: Gio.Cancellable | null): [number, Uint8Array];
        vfunc_can_poll(): boolean;
        vfunc_create_source(cancellable: Gio.Cancellable | null): GLib.Source;
        vfunc_is_readable(): boolean;
        vfunc_read_nonblocking(): [bigint | number, Uint8Array | string | null];
    }
    namespace ProxyResolverDefault {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::gproxy-resolver": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, ProxyURIResolver.ConstructorProps, SessionFeature.ConstructorProps {
            gproxy_resolver: Gio.ProxyResolver;
            gproxyResolver: Gio.ProxyResolver;
        }
    }
    class ProxyResolverDefault extends GObject.Object implements ProxyURIResolver, SessionFeature {
        static $gtype: GObject.GType<ProxyResolverDefault>;
        set gproxy_resolver(val: Gio.ProxyResolver);
        set gproxyResolver(val: Gio.ProxyResolver);
        $signals: ProxyResolverDefault.SignalSignatures;
        constructor(properties?: Partial<ProxyResolverDefault.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ProxyResolverDefault.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverDefault.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProxyResolverDefault.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyResolverDefault.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProxyResolverDefault.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProxyResolverDefault.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void;
        get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
        vfunc_get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void;
        vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace Request {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            session: Session;
            uri: URI;
        }
    }
    class Request extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Request>;
        get session(): Session;
        get uri(): URI;
        $signals: Request.SignalSignatures;
        constructor(properties?: Partial<Request.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Request.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Request.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Request.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Request.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Request.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Request.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_check_uri(uri: URI): boolean;
        vfunc_get_content_length(): bigint | number;
        vfunc_get_content_type(): string | null;
        vfunc_send(cancellable: Gio.Cancellable | null): Gio.InputStream;
        vfunc_send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_send_finish(result: Gio.AsyncResult): Gio.InputStream;
        get_content_length(): number;
        get_content_type(): string | null;
        get_session(): Session;
        get_uri(): URI;
        send(cancellable: Gio.Cancellable | null): Gio.InputStream;
        send_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream> | void;
        send_finish(result: Gio.AsyncResult): Gio.InputStream;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace RequestData {
        interface SignalSignatures extends Request.SignalSignatures {
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class RequestData extends Request implements Gio.Initable {
        static $gtype: GObject.GType<RequestData>;
        $signals: RequestData.SignalSignatures;
        constructor(properties?: Partial<RequestData.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RequestData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RequestData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RequestData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RequestData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace RequestFile {
        interface SignalSignatures extends Request.SignalSignatures {
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class RequestFile extends Request implements Gio.Initable {
        static $gtype: GObject.GType<RequestFile>;
        $signals: RequestFile.SignalSignatures;
        constructor(properties?: Partial<RequestFile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RequestFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RequestFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RequestFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RequestFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_file(): Gio.File;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace RequestHTTP {
        interface SignalSignatures extends Request.SignalSignatures {
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Request.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class RequestHTTP extends Request implements Gio.Initable {
        static $gtype: GObject.GType<RequestHTTP>;
        $signals: RequestHTTP.SignalSignatures;
        constructor(properties?: Partial<RequestHTTP.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RequestHTTP.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestHTTP.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RequestHTTP.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RequestHTTP.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RequestHTTP.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RequestHTTP.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_message(): Message;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Requester {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class Requester extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<Requester>;
        $signals: Requester.SignalSignatures;
        constructor(properties?: Partial<Requester.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Requester;
        connect<K extends keyof Requester.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Requester.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Requester.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Requester.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Requester.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Requester.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        request(uri_string: string): Request;
        request_uri(uri: URI): Request;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    namespace Server {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "request-aborted": (arg0: Message, arg1: ClientContext) => void;
            "request-finished": (arg0: Message, arg1: ClientContext) => void;
            "request-read": (arg0: Message, arg1: ClientContext) => void;
            "request-started": (arg0: Message, arg1: ClientContext) => void;
            "notify::async-context": (pspec: GObject.ParamSpec) => void;
            "notify::http-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::https-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::raw-paths": (pspec: GObject.ParamSpec) => void;
            "notify::server-header": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-cert-file": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-key-file": (pspec: GObject.ParamSpec) => void;
            "notify::tls-certificate": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            async_context: null;
            asyncContext: null;
            http_aliases: string[];
            httpAliases: string[];
            https_aliases: string[];
            httpsAliases: string[];
            "interface": Address;
            port: number;
            raw_paths: boolean;
            rawPaths: boolean;
            server_header: string;
            serverHeader: string;
            ssl_cert_file: string;
            sslCertFile: string;
            ssl_key_file: string;
            sslKeyFile: string;
            tls_certificate: Gio.TlsCertificate;
            tlsCertificate: Gio.TlsCertificate;
        }
    }
    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;
        get async_context(): null;
        get asyncContext(): null;
        get http_aliases(): string[];
        set http_aliases(val: string[]);
        get httpAliases(): string[];
        set httpAliases(val: string[]);
        get https_aliases(): string[];
        set https_aliases(val: string[]);
        get httpsAliases(): string[];
        set httpsAliases(val: string[]);
        get "interface"(): Address;
        get port(): number;
        get raw_paths(): boolean;
        get rawPaths(): boolean;
        get server_header(): string;
        set server_header(val: string);
        get serverHeader(): string;
        set serverHeader(val: string);
        get ssl_cert_file(): string;
        get sslCertFile(): string;
        get ssl_key_file(): string;
        get sslKeyFile(): string;
        get tls_certificate(): Gio.TlsCertificate;
        get tlsCertificate(): Gio.TlsCertificate;
        $signals: Server.SignalSignatures;
        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Server.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_request_aborted(msg: Message, client: ClientContext): void;
        vfunc_request_finished(msg: Message, client: ClientContext): void;
        vfunc_request_read(msg: Message, client: ClientContext): void;
        vfunc_request_started(msg: Message, client: ClientContext): void;
        accept_iostream(stream: Gio.IOStream, local_addr: Gio.SocketAddress | null, remote_addr: Gio.SocketAddress | null): boolean;
        add_auth_domain(auth_domain: AuthDomain): void;
        add_early_handler(path: string | null, callback: ServerCallback): void;
        add_handler(path: string | null, callback: ServerCallback): void;
        add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void;
        disconnect(): void;
        get_async_context(): GLib.MainContext | null;
        get_listener(): Socket;
        get_listeners(): Gio.Socket[];
        get_port(): number;
        get_uris(): URI[];
        is_https(): boolean;
        listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
        listen_all(port: number, options: ServerListenOptions): boolean;
        listen_fd(fd: number, options: ServerListenOptions): boolean;
        listen_local(port: number, options: ServerListenOptions): boolean;
        listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
        pause_message(msg: Message): void;
        quit(): void;
        remove_auth_domain(auth_domain: AuthDomain): void;
        remove_handler(path: string): void;
        run(): void;
        run_async(): void;
        set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean;
        unpause_message(msg: Message): void;
    }
    namespace Session {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticate: (arg0: Message, arg1: Auth, arg2: boolean) => void;
            "connection-created": (arg0: GObject.Object) => void;
            "request-queued": (arg0: Message) => void;
            "request-started": (arg0: Message, arg1: Socket) => void;
            "request-unqueued": (arg0: Message) => void;
            tunneling: (arg0: GObject.Object) => void;
            "notify::accept-language": (pspec: GObject.ParamSpec) => void;
            "notify::accept-language-auto": (pspec: GObject.ParamSpec) => void;
            "notify::async-context": (pspec: GObject.ParamSpec) => void;
            "notify::http-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::https-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::idle-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::local-address": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns-per-host": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-resolver": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-uri": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-strict": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-use-system-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::tls-database": (pspec: GObject.ParamSpec) => void;
            "notify::tls-interaction": (pspec: GObject.ParamSpec) => void;
            "notify::use-ntlm": (pspec: GObject.ParamSpec) => void;
            "notify::use-thread-context": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accept_language: string;
            acceptLanguage: string;
            accept_language_auto: boolean;
            acceptLanguageAuto: boolean;
            async_context: null;
            asyncContext: null;
            http_aliases: string[];
            httpAliases: string[];
            https_aliases: string[];
            httpsAliases: string[];
            idle_timeout: number;
            idleTimeout: number;
            local_address: Address;
            localAddress: Address;
            max_conns: number;
            maxConns: number;
            max_conns_per_host: number;
            maxConnsPerHost: number;
            proxy_resolver: Gio.ProxyResolver;
            proxyResolver: Gio.ProxyResolver;
            proxy_uri: URI;
            proxyUri: URI;
            ssl_ca_file: string;
            sslCaFile: string;
            ssl_strict: boolean;
            sslStrict: boolean;
            ssl_use_system_ca_file: boolean;
            sslUseSystemCaFile: boolean;
            timeout: number;
            tls_database: Gio.TlsDatabase;
            tlsDatabase: Gio.TlsDatabase;
            tls_interaction: Gio.TlsInteraction;
            tlsInteraction: Gio.TlsInteraction;
            use_ntlm: boolean;
            useNtlm: boolean;
            use_thread_context: boolean;
            useThreadContext: boolean;
            user_agent: string;
            userAgent: string;
        }
    }
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        get accept_language(): string;
        set accept_language(val: string);
        get acceptLanguage(): string;
        set acceptLanguage(val: string);
        get accept_language_auto(): boolean;
        set accept_language_auto(val: boolean);
        get acceptLanguageAuto(): boolean;
        set acceptLanguageAuto(val: boolean);
        get async_context(): null;
        get asyncContext(): null;
        get http_aliases(): string[];
        set http_aliases(val: string[]);
        get httpAliases(): string[];
        set httpAliases(val: string[]);
        get https_aliases(): string[];
        set https_aliases(val: string[]);
        get httpsAliases(): string[];
        set httpsAliases(val: string[]);
        get idle_timeout(): number;
        set idle_timeout(val: number);
        get idleTimeout(): number;
        set idleTimeout(val: number);
        get local_address(): Address;
        get localAddress(): Address;
        get max_conns(): number;
        set max_conns(val: number);
        get maxConns(): number;
        set maxConns(val: number);
        get max_conns_per_host(): number;
        set max_conns_per_host(val: number);
        get maxConnsPerHost(): number;
        set maxConnsPerHost(val: number);
        get proxy_resolver(): Gio.ProxyResolver;
        set proxy_resolver(val: Gio.ProxyResolver);
        get proxyResolver(): Gio.ProxyResolver;
        set proxyResolver(val: Gio.ProxyResolver);
        get proxy_uri(): URI;
        set proxy_uri(val: URI);
        get proxyUri(): URI;
        set proxyUri(val: URI);
        get ssl_ca_file(): string;
        set ssl_ca_file(val: string);
        get sslCaFile(): string;
        set sslCaFile(val: string);
        get ssl_strict(): boolean;
        set ssl_strict(val: boolean);
        get sslStrict(): boolean;
        set sslStrict(val: boolean);
        get ssl_use_system_ca_file(): boolean;
        set ssl_use_system_ca_file(val: boolean);
        get sslUseSystemCaFile(): boolean;
        set sslUseSystemCaFile(val: boolean);
        get timeout(): number;
        set timeout(val: number);
        get tls_database(): Gio.TlsDatabase;
        set tls_database(val: Gio.TlsDatabase);
        get tlsDatabase(): Gio.TlsDatabase;
        set tlsDatabase(val: Gio.TlsDatabase);
        get tls_interaction(): Gio.TlsInteraction;
        set tls_interaction(val: Gio.TlsInteraction);
        get tlsInteraction(): Gio.TlsInteraction;
        set tlsInteraction(val: Gio.TlsInteraction);
        get use_ntlm(): boolean;
        set use_ntlm(val: boolean);
        get useNtlm(): boolean;
        set useNtlm(val: boolean);
        get use_thread_context(): boolean;
        set use_thread_context(val: boolean);
        get useThreadContext(): boolean;
        set useThreadContext(val: boolean);
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);
        $signals: Session.SignalSignatures;
        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Session;
        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void;
        vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;
        vfunc_cancel_message(msg: Message, status_code: number): void;
        vfunc_flush_queue(): void;
        vfunc_kick(): void;
        vfunc_queue_message(msg: Message, callback: SessionCallback | null): void;
        vfunc_request_started(msg: Message, socket: Socket): void;
        vfunc_requeue_message(msg: Message): void;
        vfunc_send_message(msg: Message): number;
        abort(): void;
        cancel_message(msg: Message, status_code: number): void;
        connect_async(uri: URI, cancellable: Gio.Cancellable | null, progress_callback: SessionConnectProgressCallback | null): globalThis.Promise<Gio.IOStream>;
        connect_async(uri: URI, cancellable: Gio.Cancellable | null, progress_callback: SessionConnectProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect_async(uri: URI, cancellable: Gio.Cancellable | null, progress_callback: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.IOStream> | void;
        connect_finish(result: Gio.AsyncResult): Gio.IOStream;
        get_async_context(): GLib.MainContext | null;
        get_feature(feature_type: GObject.GType): SessionFeature | null;
        get_feature_for_message(feature_type: GObject.GType, msg: Message): SessionFeature | null;
        get_features(feature_type: GObject.GType): SessionFeature[];
        has_feature(feature_type: GObject.GType): boolean;
        pause_message(msg: Message): void;
        prefetch_dns(hostname: string, cancellable: Gio.Cancellable | null, callback: AddressCallback | null): void;
        prepare_for_uri(uri: URI): void;
        queue_message(msg: Message, callback: SessionCallback | null): void;
        redirect_message(msg: Message): boolean;
        remove_feature(feature: SessionFeature): void;
        request(uri_string: string): Request;
        request_http(method: string, uri_string: string): RequestHTTP;
        request_http_uri(method: string, uri: URI): RequestHTTP;
        request_uri(uri: URI): Request;
        requeue_message(msg: Message): void;
        send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream;
        send_async(msg: Message, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_async(msg: Message, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream> | void;
        send_finish(result: Gio.AsyncResult): Gio.InputStream;
        send_message(msg: Message): number;
        steal_connection(msg: Message): Gio.IOStream;
        unpause_message(msg: Message): void;
        websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null): globalThis.Promise<WebsocketConnection>;
        websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<WebsocketConnection> | void;
        websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
        would_redirect(msg: Message): boolean;
    }
    namespace SessionAsync {
        interface SignalSignatures extends Session.SignalSignatures {
            "notify::accept-language": (pspec: GObject.ParamSpec) => void;
            "notify::accept-language-auto": (pspec: GObject.ParamSpec) => void;
            "notify::async-context": (pspec: GObject.ParamSpec) => void;
            "notify::http-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::https-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::idle-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::local-address": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns-per-host": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-resolver": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-uri": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-strict": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-use-system-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::tls-database": (pspec: GObject.ParamSpec) => void;
            "notify::tls-interaction": (pspec: GObject.ParamSpec) => void;
            "notify::use-ntlm": (pspec: GObject.ParamSpec) => void;
            "notify::use-thread-context": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Session.ConstructorProps {}
    }
    class SessionAsync extends Session {
        static $gtype: GObject.GType<SessionAsync>;
        $signals: SessionAsync.SignalSignatures;
        constructor(properties?: Partial<SessionAsync.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SessionAsync;
        connect<K extends keyof SessionAsync.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionAsync.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SessionAsync.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionAsync.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SessionAsync.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SessionAsync.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SessionSync {
        interface SignalSignatures extends Session.SignalSignatures {
            "notify::accept-language": (pspec: GObject.ParamSpec) => void;
            "notify::accept-language-auto": (pspec: GObject.ParamSpec) => void;
            "notify::async-context": (pspec: GObject.ParamSpec) => void;
            "notify::http-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::https-aliases": (pspec: GObject.ParamSpec) => void;
            "notify::idle-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::local-address": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns": (pspec: GObject.ParamSpec) => void;
            "notify::max-conns-per-host": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-resolver": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-uri": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-strict": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-use-system-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::tls-database": (pspec: GObject.ParamSpec) => void;
            "notify::tls-interaction": (pspec: GObject.ParamSpec) => void;
            "notify::use-ntlm": (pspec: GObject.ParamSpec) => void;
            "notify::use-thread-context": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Session.ConstructorProps {}
    }
    class SessionSync extends Session {
        static $gtype: GObject.GType<SessionSync>;
        $signals: SessionSync.SignalSignatures;
        constructor(properties?: Partial<SessionSync.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SessionSync;
        connect<K extends keyof SessionSync.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionSync.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SessionSync.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SessionSync.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SessionSync.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SessionSync.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Socket {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            disconnected: () => void;
            event: (arg0: Gio.SocketClientEvent, arg1: Gio.IOStream) => void;
            "new-connection": (arg0: Socket) => void;
            readable: () => void;
            writable: () => void;
            "notify::async-context": (pspec: GObject.ParamSpec) => void;
            "notify::fd": (pspec: GObject.ParamSpec) => void;
            "notify::gsocket": (pspec: GObject.ParamSpec) => void;
            "notify::iostream": (pspec: GObject.ParamSpec) => void;
            "notify::ipv6-only": (pspec: GObject.ParamSpec) => void;
            "notify::is-server": (pspec: GObject.ParamSpec) => void;
            "notify::local-address": (pspec: GObject.ParamSpec) => void;
            "notify::non-blocking": (pspec: GObject.ParamSpec) => void;
            "notify::remote-address": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-creds": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-fallback": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-strict": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::tls-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::tls-errors": (pspec: GObject.ParamSpec) => void;
            "notify::trusted-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::use-thread-context": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            async_context: never;
            asyncContext: never;
            fd: number;
            gsocket: Gio.Socket;
            iostream: Gio.IOStream;
            ipv6_only: boolean;
            ipv6Only: boolean;
            is_server: boolean;
            isServer: boolean;
            local_address: Address;
            localAddress: Address;
            non_blocking: boolean;
            nonBlocking: boolean;
            remote_address: Address;
            remoteAddress: Address;
            ssl_creds: never;
            sslCreds: never;
            ssl_fallback: boolean;
            sslFallback: boolean;
            ssl_strict: boolean;
            sslStrict: boolean;
            timeout: number;
            tls_certificate: Gio.TlsCertificate;
            tlsCertificate: Gio.TlsCertificate;
            tls_errors: Gio.TlsCertificateFlags;
            tlsErrors: Gio.TlsCertificateFlags;
            trusted_certificate: boolean;
            trustedCertificate: boolean;
            use_thread_context: boolean;
            useThreadContext: boolean;
        }
    }
    class Socket extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Socket>;
        get async_context(): null;
        get asyncContext(): null;
        get fd(): number;
        set gsocket(val: Gio.Socket);
        set iostream(val: Gio.IOStream);
        get ipv6_only(): boolean;
        set ipv6_only(val: boolean);
        get ipv6Only(): boolean;
        set ipv6Only(val: boolean);
        get is_server(): boolean;
        get isServer(): boolean;
        get local_address(): Address;
        get localAddress(): Address;
        get non_blocking(): boolean;
        set non_blocking(val: boolean);
        get nonBlocking(): boolean;
        set nonBlocking(val: boolean);
        get remote_address(): Address;
        get remoteAddress(): Address;
        get ssl_creds(): null;
        set ssl_creds(val: never);
        get sslCreds(): null;
        set sslCreds(val: never);
        get ssl_fallback(): boolean;
        get sslFallback(): boolean;
        get ssl_strict(): boolean;
        get sslStrict(): boolean;
        get timeout(): number;
        set timeout(val: number);
        get tls_certificate(): Gio.TlsCertificate;
        get tlsCertificate(): Gio.TlsCertificate;
        get tls_errors(): Gio.TlsCertificateFlags;
        get tlsErrors(): Gio.TlsCertificateFlags;
        get trusted_certificate(): boolean;
        get trustedCertificate(): boolean;
        get use_thread_context(): boolean;
        get useThreadContext(): boolean;
        $signals: Socket.SignalSignatures;
        constructor(properties?: Partial<Socket.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Socket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Socket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Socket.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Socket.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_disconnected(): void;
        vfunc_new_connection(new_sock: Socket): void;
        vfunc_readable(): void;
        vfunc_writable(): void;
        connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback): void;
        connect_sync(cancellable: Gio.Cancellable | null): number;
        disconnect(): void;
        get_fd(): number;
        get_local_address(): Address;
        get_remote_address(): Address;
        is_connected(): boolean;
        is_ssl(): boolean;
        listen(): boolean;
        read(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null): [SocketIOStatus, number];
        read_until(buffer: Uint8Array | string, boundary: null, boundary_len: bigint | number, cancellable: Gio.Cancellable | null): [SocketIOStatus, number, boolean];
        start_proxy_ssl(ssl_host: string, cancellable: Gio.Cancellable | null): boolean;
        start_ssl(cancellable: Gio.Cancellable | null): boolean;
        write(buffer: Uint8Array | string, cancellable: Gio.Cancellable | null): [SocketIOStatus, number];
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace WebsocketConnection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            closed: () => void;
            closing: () => void;
            error: (arg0: GLib.Error) => void;
            message: (arg0: number, arg1: GLib.Bytes) => void;
            pong: (arg0: GLib.Bytes) => void;
            "notify::connection-type": (pspec: GObject.ParamSpec) => void;
            "notify::extensions": (pspec: GObject.ParamSpec) => void;
            "notify::io-stream": (pspec: GObject.ParamSpec) => void;
            "notify::keepalive-interval": (pspec: GObject.ParamSpec) => void;
            "notify::max-incoming-payload-size": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection_type: WebsocketConnectionType;
            connectionType: WebsocketConnectionType;
            extensions: never;
            io_stream: Gio.IOStream;
            ioStream: Gio.IOStream;
            keepalive_interval: number;
            keepaliveInterval: number;
            max_incoming_payload_size: bigint | number;
            maxIncomingPayloadSize: bigint | number;
            origin: string | null;
            protocol: string | null;
            state: WebsocketState;
            uri: URI;
        }
    }
    class WebsocketConnection extends GObject.Object {
        static $gtype: GObject.GType<WebsocketConnection>;
        get connection_type(): WebsocketConnectionType;
        get connectionType(): WebsocketConnectionType;
        get extensions(): null;
        get io_stream(): Gio.IOStream;
        get ioStream(): Gio.IOStream;
        get keepalive_interval(): number;
        set keepalive_interval(val: number);
        get keepaliveInterval(): number;
        set keepaliveInterval(val: number);
        get max_incoming_payload_size(): number;
        set max_incoming_payload_size(val: bigint | number);
        get maxIncomingPayloadSize(): number;
        set maxIncomingPayloadSize(val: bigint | number);
        get origin(): string | null;
        get protocol(): string | null;
        get state(): WebsocketState;
        get uri(): URI;
        $signals: WebsocketConnection.SignalSignatures;
        constructor(properties?: Partial<WebsocketConnection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null): WebsocketConnection;
        static new_with_extensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection;
        connect<K extends keyof WebsocketConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsocketConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsocketConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsocketConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_closed(): void;
        vfunc_closing(): void;
        vfunc_error(error: GLib.Error): void;
        vfunc_message(type: WebsocketDataType, message: GLib.Bytes): void;
        vfunc_pong(message: GLib.Bytes): void;
        close(code: number, data: string | null): void;
        get_close_code(): number;
        get_close_data(): string;
        get_connection_type(): WebsocketConnectionType;
        get_extensions(): WebsocketExtension[];
        get_io_stream(): Gio.IOStream;
        get_keepalive_interval(): number;
        get_max_incoming_payload_size(): number;
        get_origin(): string | null;
        get_protocol(): string | null;
        get_state(): WebsocketState;
        get_uri(): URI;
        send_binary(data: Uint8Array | string | null): void;
        send_message(type: WebsocketDataType, message: GLib.Bytes | Uint8Array): void;
        send_text(text: string): void;
        set_keepalive_interval(interval: number): void;
        set_max_incoming_payload_size(max_incoming_payload_size: bigint | number): void;
    }
    namespace WebsocketExtension {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class WebsocketExtension extends GObject.Object {
        static $gtype: GObject.GType<WebsocketExtension>;
        $signals: WebsocketExtension.SignalSignatures;
        constructor(properties?: Partial<WebsocketExtension.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebsocketExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtension.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsocketExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtension.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsocketExtension.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsocketExtension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_configure(connection_type: WebsocketConnectionType, params: never | null): boolean;
        vfunc_get_request_params(): string | null;
        vfunc_get_response_params(): string | null;
        vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [GLib.Bytes | Uint8Array, number];
        vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [GLib.Bytes | Uint8Array, number];
        configure(connection_type: WebsocketConnectionType, params: never | null): boolean;
        get_request_params(): string | null;
        get_response_params(): string | null;
        process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
        process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    }
    namespace WebsocketExtensionDeflate {
        interface SignalSignatures extends WebsocketExtension.SignalSignatures {}
        interface ConstructorProps extends WebsocketExtension.ConstructorProps {}
    }
    class WebsocketExtensionDeflate extends WebsocketExtension {
        static $gtype: GObject.GType<WebsocketExtensionDeflate>;
        $signals: WebsocketExtensionDeflate.SignalSignatures;
        constructor(properties?: Partial<WebsocketExtensionDeflate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebsocketExtensionDeflate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtensionDeflate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsocketExtensionDeflate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtensionDeflate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsocketExtensionDeflate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsocketExtensionDeflate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebsocketExtensionManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, SessionFeature.ConstructorProps {}
    }
    class WebsocketExtensionManager extends GObject.Object implements SessionFeature {
        static $gtype: GObject.GType<WebsocketExtensionManager>;
        $signals: WebsocketExtensionManager.SignalSignatures;
        constructor(properties?: Partial<WebsocketExtensionManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebsocketExtensionManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtensionManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsocketExtensionManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsocketExtensionManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsocketExtensionManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsocketExtensionManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
        vfunc_add_feature(type: GObject.GType): boolean;
        vfunc_attach(session: Session): void;
        vfunc_detach(session: Session): void;
        vfunc_has_feature(type: GObject.GType): boolean;
        vfunc_remove_feature(type: GObject.GType): boolean;
        vfunc_request_queued(session: Session, msg: Message): void;
        vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
        vfunc_request_unqueued(session: Session, msg: Message): void;
    }
    type AddressClass = typeof Address;
    type AuthClass = typeof Auth;
    type AuthDomainBasicClass = typeof AuthDomainBasic;
    type AuthDomainClass = typeof AuthDomain;
    type AuthDomainDigestClass = typeof AuthDomainDigest;
    type AuthManagerClass = typeof AuthManager;
    abstract class AuthManagerPrivate {
        static $gtype: GObject.GType<AuthManagerPrivate>;
    }
    class Buffer {
        static $gtype: GObject.GType<Buffer>;
        data: null;
        length: number;
        constructor(use: MemoryUse, data: Uint8Array | string);
        static ["new"](data: Uint8Array | string): Buffer;
        static new_with_owner(data: Uint8Array | string, owner: null): Buffer;
        copy(): Buffer;
        free(): void;
        get_as_bytes(): GLib.Bytes;
        get_data(): Uint8Array;
        get_owner(): null;
        new_subbuffer(offset: bigint | number, length: bigint | number): Buffer;
    }
    type CacheClass = typeof Cache;
    abstract class CachePrivate {
        static $gtype: GObject.GType<CachePrivate>;
    }
    abstract class ClientContext {
        static $gtype: GObject.GType<ClientContext>;
        get_address(): Address | null;
        get_auth_domain(): AuthDomain | null;
        get_auth_user(): string | null;
        get_gsocket(): Gio.Socket | null;
        get_host(): string | null;
        get_local_address(): Gio.SocketAddress | null;
        get_remote_address(): Gio.SocketAddress | null;
        get_socket(): Socket;
        steal_connection(): Gio.IOStream;
    }
    abstract class Connection {
        static $gtype: GObject.GType<Connection>;
    }
    type ContentDecoderClass = typeof ContentDecoder;
    abstract class ContentDecoderPrivate {
        static $gtype: GObject.GType<ContentDecoderPrivate>;
    }
    type ContentSnifferClass = typeof ContentSniffer;
    abstract class ContentSnifferPrivate {
        static $gtype: GObject.GType<ContentSnifferPrivate>;
    }
    class Cookie {
        static $gtype: GObject.GType<Cookie>;
        name: string;
        value: string;
        domain: string;
        path: string;
        expires: Date;
        secure: boolean;
        http_only: boolean;
        constructor(properties?: Partial<{
            name: string;
            value: string;
            domain: string;
            path: string;
            secure: boolean;
            http_only: boolean;
        }>);
        static ["new"](name: string, value: string, domain: string, path: string, max_age: number): Cookie;
        static parse(header: string, origin: URI): Cookie | null;
        applies_to_uri(uri: URI): boolean;
        copy(): Cookie;
        domain_matches(host: string): boolean;
        equal(cookie2: Cookie): boolean;
        free(): void;
        get_domain(): string;
        get_expires(): Date | null;
        get_http_only(): boolean;
        get_name(): string;
        get_path(): string;
        get_same_site_policy(): SameSitePolicy;
        get_secure(): boolean;
        get_value(): string;
        set_domain(domain: string): void;
        set_expires(expires: Date): void;
        set_http_only(http_only: boolean): void;
        set_max_age(max_age: number): void;
        set_name(name: string): void;
        set_path(path: string): void;
        set_same_site_policy(policy: SameSitePolicy): void;
        set_secure(secure: boolean): void;
        set_value(value: string): void;
        to_cookie_header(): string;
        to_set_cookie_header(): string;
    }
    type CookieJarClass = typeof CookieJar;
    type CookieJarDBClass = typeof CookieJarDB;
    type CookieJarTextClass = typeof CookieJarText;
    class Date {
        static $gtype: GObject.GType<Date>;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        utc: boolean;
        offset: number;
        constructor(properties?: Partial<{
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            utc: boolean;
            offset: number;
        }>);
        static ["new"](year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
        static new_from_now(offset_seconds: number): Date;
        static new_from_string(date_string: string): Date;
        static new_from_time_t(when: bigint | number): Date;
        copy(): Date;
        free(): void;
        get_day(): number;
        get_hour(): number;
        get_minute(): number;
        get_month(): number;
        get_offset(): number;
        get_second(): number;
        get_utc(): number;
        get_year(): number;
        is_past(): boolean;
        to_string(format: DateFormat): string;
        to_time_t(): number;
        to_timeval(): GLib.TimeVal;
    }
    type HSTSEnforcerClass = typeof HSTSEnforcer;
    type HSTSEnforcerDBClass = typeof HSTSEnforcerDB;
    abstract class HSTSEnforcerDBPrivate {
        static $gtype: GObject.GType<HSTSEnforcerDBPrivate>;
    }
    abstract class HSTSEnforcerPrivate {
        static $gtype: GObject.GType<HSTSEnforcerPrivate>;
    }
    class HSTSPolicy {
        static $gtype: GObject.GType<HSTSPolicy>;
        domain: string;
        max_age: number;
        expires: Date;
        include_subdomains: boolean;
        constructor(domain: string, max_age: bigint | number, include_subdomains: boolean);
        static ["new"](domain: string, max_age: bigint | number, include_subdomains: boolean): HSTSPolicy;
        static new_from_response(msg: Message): HSTSPolicy;
        static new_full(domain: string, max_age: bigint | number, expires: Date, include_subdomains: boolean): HSTSPolicy;
        static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;
        copy(): HSTSPolicy;
        equal(policy2: HSTSPolicy): boolean;
        free(): void;
        get_domain(): string;
        includes_subdomains(): boolean;
        is_expired(): boolean;
        is_session_policy(): boolean;
    }
    type LoggerClass = typeof Logger;
    class MessageBody {
        static $gtype: GObject.GType<MessageBody>;
        data: string;
        length: number;
        constructor(properties?: Partial<{
            data: string;
            length: number;
        }>);
        static ["new"](): MessageBody;
        append_buffer(buffer: Buffer): void;
        append(data: Uint8Array | string): void;
        complete(): void;
        flatten(): Buffer;
        free(): void;
        get_accumulate(): boolean;
        get_chunk(offset: bigint | number): Buffer | null;
        got_chunk(chunk: Buffer): void;
        set_accumulate(accumulate: boolean): void;
        truncate(): void;
        wrote_chunk(chunk: Buffer): void;
    }
    type MessageClass = typeof Message;
    class MessageHeaders {
        static $gtype: GObject.GType<MessageHeaders>;
        constructor(type: MessageHeadersType);
        static ["new"](type: MessageHeadersType): MessageHeaders;
        append(name: string, value: string): void;
        clean_connection_headers(): void;
        clear(): void;
        foreach(func: MessageHeadersForeachFunc): void;
        free(): void;
        free_ranges(ranges: Range): void;
        get(name: string): string | null;
        get_content_disposition(): [boolean, string, { [key: string]: string }];
        get_content_length(): number;
        get_content_range(): [boolean, number, number, number];
        get_content_type(): [string | null, { [key: string]: string } | null];
        get_encoding(): Encoding;
        get_expectations(): Expectation;
        get_headers_type(): MessageHeadersType;
        get_list(name: string): string | null;
        get_one(name: string): string | null;
        get_ranges(total_length: bigint | number): [boolean, Range[]];
        header_contains(name: string, token: string): boolean;
        header_equals(name: string, value: string): boolean;
        remove(name: string): void;
        replace(name: string, value: string): void;
        set_content_disposition(disposition: string, params: { [key: string]: string } | null): void;
        set_content_length(content_length: bigint | number): void;
        set_content_range(start: bigint | number, end: bigint | number, total_length: bigint | number): void;
        set_content_type(content_type: string, params: { [key: string]: string } | null): void;
        set_encoding(encoding: Encoding): void;
        set_expectations(expectations: Expectation): void;
        set_range(start: bigint | number, end: bigint | number): void;
        set_ranges(ranges: Range, length: number): void;
    }
    class MessageHeadersIter {
        static $gtype: GObject.GType<MessageHeadersIter>;
        constructor(properties?: Partial<{}>);
        static init(hdrs: MessageHeaders): MessageHeadersIter;
        static next(iter: MessageHeadersIter): [boolean, MessageHeadersIter, string, string];
    }
    abstract class MessageQueue {
        static $gtype: GObject.GType<MessageQueue>;
    }
    abstract class MessageQueueItem {
        static $gtype: GObject.GType<MessageQueueItem>;
    }
    class Multipart {
        static $gtype: GObject.GType<Multipart>;
        constructor(mime_type: string);
        static ["new"](mime_type: string): Multipart;
        static new_from_message(headers: MessageHeaders, body: MessageBody): Multipart;
        append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void;
        append_form_string(control_name: string, data: string): void;
        append_part(headers: MessageHeaders, body: Buffer): void;
        free(): void;
        get_length(): number;
        get_part(part: number): [boolean, MessageHeaders, Buffer];
        to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void;
    }
    type MultipartInputStreamClass = typeof MultipartInputStream;
    abstract class MultipartInputStreamPrivate {
        static $gtype: GObject.GType<MultipartInputStreamPrivate>;
    }
    type PasswordManagerInterface = typeof PasswordManager;
    type ProxyResolverDefaultClass = typeof ProxyResolverDefault;
    type ProxyResolverInterface = typeof ProxyResolver;
    type ProxyURIResolverInterface = typeof ProxyURIResolver;
    class Range {
        static $gtype: GObject.GType<Range>;
        start: number;
        end: number;
    }
    type RequestClass = typeof Request;
    type RequestDataClass = typeof RequestData;
    abstract class RequestDataPrivate {
        static $gtype: GObject.GType<RequestDataPrivate>;
    }
    type RequestFileClass = typeof RequestFile;
    abstract class RequestFilePrivate {
        static $gtype: GObject.GType<RequestFilePrivate>;
    }
    type RequestHTTPClass = typeof RequestHTTP;
    abstract class RequestHTTPPrivate {
        static $gtype: GObject.GType<RequestHTTPPrivate>;
    }
    abstract class RequestPrivate {
        static $gtype: GObject.GType<RequestPrivate>;
    }
    type RequesterClass = typeof Requester;
    abstract class RequesterPrivate {
        static $gtype: GObject.GType<RequesterPrivate>;
    }
    type ServerClass = typeof Server;
    type SessionAsyncClass = typeof SessionAsync;
    type SessionClass = typeof Session;
    type SessionFeatureInterface = typeof SessionFeature;
    type SessionSyncClass = typeof SessionSync;
    type SocketClass = typeof Socket;
    class URI {
        static $gtype: GObject.GType<URI>;
        scheme: string;
        user: string;
        password: string;
        host: string;
        port: number;
        path: string;
        query: string;
        fragment: string;
        constructor(properties?: Partial<{
            scheme: string;
            user: string;
            password: string;
            host: string;
            port: number;
            path: string;
            query: string;
            fragment: string;
        }>);
        static ["new"](uri_string: string | null): URI;
        static new_with_base(base: URI, uri_string: string): URI;
        static decode(part: string): string;
        static encode(part: string, escape_extra: string | null): string;
        static normalize(part: string, unescape_extra: string | null): string;
        copy(): URI;
        copy_host(): URI;
        equal(uri2: URI): boolean;
        free(): void;
        get_fragment(): string;
        get_host(): string;
        get_password(): string;
        get_path(): string;
        get_port(): number;
        get_query(): string;
        get_scheme(): string;
        get_user(): string;
        host_equal(v2: URI): boolean;
        host_hash(): number;
        set_fragment(fragment: string | null): void;
        set_host(host: string | null): void;
        set_password(password: string | null): void;
        set_path(path: string): void;
        set_port(port: number): void;
        set_query(query: string | null): void;
        set_query_from_form(form: { [key: string]: string }): void;
        set_scheme(scheme: string): void;
        set_user(user: string | null): void;
        to_string(just_path_and_query: boolean): string;
        uses_default_port(): boolean;
    }
    type WebsocketConnectionClass = typeof WebsocketConnection;
    abstract class WebsocketConnectionPrivate {
        static $gtype: GObject.GType<WebsocketConnectionPrivate>;
    }
    type WebsocketExtensionClass = typeof WebsocketExtension;
    type WebsocketExtensionDeflateClass = typeof WebsocketExtensionDeflate;
    type WebsocketExtensionManagerClass = typeof WebsocketExtensionManager;
    abstract class XMLRPCParams {
        static $gtype: GObject.GType<XMLRPCParams>;
        free(): void;
        parse(signature: string | null): GLib.Variant;
    }
    namespace PasswordManager {
        interface Interface extends SessionFeature.Interface {
            vfunc_get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void;
            vfunc_get_passwords_sync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void;
        }
        interface ConstructorProps extends SessionFeature.ConstructorProps {}
    }
    export interface PasswordManagerNamespace {
        $gtype: GObject.GType<PasswordManager>;
        prototype: PasswordManager;
    }
    interface PasswordManager extends SessionFeature, PasswordManager.Interface {
        get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void;
        get_passwords_sync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void;
    }
    export const PasswordManager: PasswordManagerNamespace & {
        new (): PasswordManager; 
    };
    namespace ProxyResolver {
        interface Interface extends SessionFeature.Interface {
            vfunc_get_proxy_async(msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void;
            vfunc_get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
        }
        interface ConstructorProps extends SessionFeature.ConstructorProps {}
    }
    export interface ProxyResolverNamespace {
        $gtype: GObject.GType<ProxyResolver>;
        prototype: ProxyResolver;
    }
    interface ProxyResolver extends SessionFeature, ProxyResolver.Interface {
        get_proxy_async(msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void;
        get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
    }
    export const ProxyResolver: ProxyResolverNamespace & {
        new (): ProxyResolver; 
    };
    namespace ProxyURIResolver {
        interface Interface extends SessionFeature.Interface {
            vfunc_get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void;
            vfunc_get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
        }
        interface ConstructorProps extends SessionFeature.ConstructorProps {}
    }
    export interface ProxyURIResolverNamespace {
        $gtype: GObject.GType<ProxyURIResolver>;
        prototype: ProxyURIResolver;
    }
    interface ProxyURIResolver extends SessionFeature, ProxyURIResolver.Interface {
        get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void;
        get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
    }
    export const ProxyURIResolver: ProxyURIResolverNamespace & {
        new (): ProxyURIResolver; 
    };
    namespace SessionFeature {
        interface Interface {
            vfunc_add_feature(type: GObject.GType): boolean;
            vfunc_attach(session: Session): void;
            vfunc_detach(session: Session): void;
            vfunc_has_feature(type: GObject.GType): boolean;
            vfunc_remove_feature(type: GObject.GType): boolean;
            vfunc_request_queued(session: Session, msg: Message): void;
            vfunc_request_started(session: Session, msg: Message, socket: Socket): void;
            vfunc_request_unqueued(session: Session, msg: Message): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SessionFeatureNamespace {
        $gtype: GObject.GType<SessionFeature>;
        prototype: SessionFeature;
    }
    interface SessionFeature extends GObject.Object, SessionFeature.Interface {
        add_feature(type: GObject.GType): boolean;
        attach(session: Session): void;
        detach(session: Session): void;
        has_feature(type: GObject.GType): boolean;
        remove_feature(type: GObject.GType): boolean;
    }
    export const SessionFeature: SessionFeatureNamespace & {
        new (): SessionFeature; 
    };
    const __name__: string;
    const __version__: string;
}
export default Soup;
}
declare module 'gi://Soup' {
    import Soup24 from 'gi://Soup?version=2.4';
    export default Soup24;
}
