declare module 'gi://WebKit2?version=4.1' {
import type Soup from 'gi://Soup?version=3.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type JavaScriptCore from 'gi://JavaScriptCore?version=4.1';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace WebKit2 {
    export namespace AuthenticationScheme {
        export const $gtype: GObject.GType<AuthenticationScheme>;
    }
    enum AuthenticationScheme {
        DEFAULT,
        HTTP_BASIC,
        HTTP_DIGEST,
        HTML_FORM,
        NTLM,
        NEGOTIATE,
        CLIENT_CERTIFICATE_REQUESTED,
        SERVER_TRUST_EVALUATION_REQUESTED,
        CLIENT_CERTIFICATE_PIN_REQUESTED,
        UNKNOWN,
    }
    export namespace AutomationBrowsingContextPresentation {
        export const $gtype: GObject.GType<AutomationBrowsingContextPresentation>;
    }
    enum AutomationBrowsingContextPresentation {
        WINDOW,
        TAB,
    }
    export namespace AutoplayPolicy {
        export const $gtype: GObject.GType<AutoplayPolicy>;
    }
    enum AutoplayPolicy {
        ALLOW,
        ALLOW_WITHOUT_SOUND,
        DENY,
    }
    export namespace CacheModel {
        export const $gtype: GObject.GType<CacheModel>;
    }
    enum CacheModel {
        DOCUMENT_VIEWER,
        WEB_BROWSER,
        DOCUMENT_BROWSER,
    }
    export namespace ContextMenuAction {
        export const $gtype: GObject.GType<ContextMenuAction>;
    }
    enum ContextMenuAction {
        NO_ACTION,
        OPEN_LINK,
        OPEN_LINK_IN_NEW_WINDOW,
        DOWNLOAD_LINK_TO_DISK,
        COPY_LINK_TO_CLIPBOARD,
        OPEN_IMAGE_IN_NEW_WINDOW,
        DOWNLOAD_IMAGE_TO_DISK,
        COPY_IMAGE_TO_CLIPBOARD,
        COPY_IMAGE_URL_TO_CLIPBOARD,
        OPEN_FRAME_IN_NEW_WINDOW,
        GO_BACK,
        GO_FORWARD,
        STOP,
        RELOAD,
        COPY,
        CUT,
        PASTE,
        DELETE,
        SELECT_ALL,
        INPUT_METHODS,
        UNICODE,
        SPELLING_GUESS,
        NO_GUESSES_FOUND,
        IGNORE_SPELLING,
        LEARN_SPELLING,
        IGNORE_GRAMMAR,
        FONT_MENU,
        BOLD,
        ITALIC,
        UNDERLINE,
        OUTLINE,
        INSPECT_ELEMENT,
        OPEN_VIDEO_IN_NEW_WINDOW,
        OPEN_AUDIO_IN_NEW_WINDOW,
        COPY_VIDEO_LINK_TO_CLIPBOARD,
        COPY_AUDIO_LINK_TO_CLIPBOARD,
        TOGGLE_MEDIA_CONTROLS,
        TOGGLE_MEDIA_LOOP,
        ENTER_VIDEO_FULLSCREEN,
        MEDIA_PLAY,
        MEDIA_PAUSE,
        MEDIA_MUTE,
        DOWNLOAD_VIDEO_TO_DISK,
        DOWNLOAD_AUDIO_TO_DISK,
        INSERT_EMOJI,
        PASTE_AS_PLAIN_TEXT,
        CUSTOM,
    }
    export namespace CookieAcceptPolicy {
        export const $gtype: GObject.GType<CookieAcceptPolicy>;
    }
    enum CookieAcceptPolicy {
        ALWAYS,
        NEVER,
        NO_THIRD_PARTY,
    }
    export namespace CookiePersistentStorage {
        export const $gtype: GObject.GType<CookiePersistentStorage>;
    }
    enum CookiePersistentStorage {
        TEXT,
        SQLITE,
    }
    export namespace CredentialPersistence {
        export const $gtype: GObject.GType<CredentialPersistence>;
    }
    enum CredentialPersistence {
        NONE,
        FOR_SESSION,
        PERMANENT,
    }
    class DownloadError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NETWORK: number;
        static CANCELLED_BY_USER: number;
        static DESTINATION: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class FaviconDatabaseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NOT_INITIALIZED: number;
        static FAVICON_NOT_FOUND: number;
        static FAVICON_UNKNOWN: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace FeatureStatus {
        export const $gtype: GObject.GType<FeatureStatus>;
    }
    enum FeatureStatus {
        EMBEDDER,
        UNSTABLE,
        INTERNAL,
        DEVELOPER,
        TESTABLE,
        PREVIEW,
        STABLE,
        MATURE,
    }
    export namespace HardwareAccelerationPolicy {
        export const $gtype: GObject.GType<HardwareAccelerationPolicy>;
    }
    enum HardwareAccelerationPolicy {
        ON_DEMAND,
        ALWAYS,
        NEVER,
    }
    export namespace InputPurpose {
        export const $gtype: GObject.GType<InputPurpose>;
    }
    enum InputPurpose {
        FREE_FORM,
        DIGITS,
        NUMBER,
        PHONE,
        URL,
        EMAIL,
        PASSWORD,
    }
    export namespace InsecureContentEvent {
        export const $gtype: GObject.GType<InsecureContentEvent>;
    }
    enum InsecureContentEvent {
        RUN,
        DISPLAYED,
    }
    class JavascriptError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static SCRIPT_FAILED: number;
        static INVALID_PARAMETER: number;
        static INVALID_RESULT: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace LoadEvent {
        export const $gtype: GObject.GType<LoadEvent>;
    }
    enum LoadEvent {
        STARTED,
        REDIRECTED,
        COMMITTED,
        FINISHED,
    }
    export namespace MediaCaptureState {
        export const $gtype: GObject.GType<MediaCaptureState>;
    }
    enum MediaCaptureState {
        NONE,
        ACTIVE,
        MUTED,
    }
    export namespace NavigationType {
        export const $gtype: GObject.GType<NavigationType>;
    }
    enum NavigationType {
        LINK_CLICKED,
        FORM_SUBMITTED,
        BACK_FORWARD,
        RELOAD,
        FORM_RESUBMITTED,
        OTHER,
    }
    class NetworkError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static TRANSPORT: number;
        static UNKNOWN_PROTOCOL: number;
        static CANCELLED: number;
        static FILE_DOES_NOT_EXIST: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace NetworkProxyMode {
        export const $gtype: GObject.GType<NetworkProxyMode>;
    }
    enum NetworkProxyMode {
        DEFAULT,
        NO_PROXY,
        CUSTOM,
    }
    export namespace PermissionState {
        export const $gtype: GObject.GType<PermissionState>;
    }
    enum PermissionState {
        GRANTED,
        DENIED,
        PROMPT,
    }
    class PluginError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static CANNOT_FIND_PLUGIN: number;
        static CANNOT_LOAD_PLUGIN: number;
        static JAVA_UNAVAILABLE: number;
        static CONNECTION_CANCELLED: number;
        static WILL_HANDLE_LOAD: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace PolicyDecisionType {
        export const $gtype: GObject.GType<PolicyDecisionType>;
    }
    enum PolicyDecisionType {
        NAVIGATION_ACTION,
        NEW_WINDOW_ACTION,
        RESPONSE,
    }
    class PolicyError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static CANNOT_SHOW_MIME_TYPE: number;
        static CANNOT_SHOW_URI: number;
        static FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE: number;
        static CANNOT_USE_RESTRICTED_PORT: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class PrintError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static GENERAL: number;
        static PRINTER_NOT_FOUND: number;
        static INVALID_PAGE_RANGE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace PrintOperationResponse {
        export const $gtype: GObject.GType<PrintOperationResponse>;
    }
    enum PrintOperationResponse {
        PRINT,
        CANCEL,
    }
    export namespace ProcessModel {
        export const $gtype: GObject.GType<ProcessModel>;
    }
    enum ProcessModel {
        SHARED_SECONDARY_PROCESS,
        MULTIPLE_SECONDARY_PROCESSES,
    }
    export namespace SaveMode {
        export const $gtype: GObject.GType<SaveMode>;
    }
    enum SaveMode {
        MHTML,
    }
    export namespace ScriptDialogType {
        export const $gtype: GObject.GType<ScriptDialogType>;
    }
    enum ScriptDialogType {
        ALERT,
        CONFIRM,
        PROMPT,
        BEFORE_UNLOAD_CONFIRM,
    }
    class SnapshotError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static CREATE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace SnapshotRegion {
        export const $gtype: GObject.GType<SnapshotRegion>;
    }
    enum SnapshotRegion {
        VISIBLE,
        FULL_DOCUMENT,
    }
    export namespace TLSErrorsPolicy {
        export const $gtype: GObject.GType<TLSErrorsPolicy>;
    }
    enum TLSErrorsPolicy {
        IGNORE,
        FAIL,
    }
    class UserContentFilterError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_SOURCE: number;
        static NOT_FOUND: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace UserContentInjectedFrames {
        export const $gtype: GObject.GType<UserContentInjectedFrames>;
    }
    enum UserContentInjectedFrames {
        ALL_FRAMES,
        TOP_FRAME,
    }
    class UserMessageError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static MESSAGE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace UserScriptInjectionTime {
        export const $gtype: GObject.GType<UserScriptInjectionTime>;
    }
    enum UserScriptInjectionTime {
        START,
        END,
    }
    export namespace UserStyleLevel {
        export const $gtype: GObject.GType<UserStyleLevel>;
    }
    enum UserStyleLevel {
        USER,
        AUTHOR,
    }
    class WebExtensionMatchPatternError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN: number;
        static INVALID_SCHEME: number;
        static INVALID_HOST: number;
        static INVALID_PATH: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace WebExtensionMode {
        export const $gtype: GObject.GType<WebExtensionMode>;
    }
    enum WebExtensionMode {
        NONE,
        MANIFESTV2,
        MANIFESTV3,
    }
    export namespace WebProcessTerminationReason {
        export const $gtype: GObject.GType<WebProcessTerminationReason>;
    }
    enum WebProcessTerminationReason {
        CRASHED,
        EXCEEDED_MEMORY_LIMIT,
        TERMINATED_BY_API,
    }
    export namespace XRSessionMode {
        export const $gtype: GObject.GType<XRSessionMode>;
    }
    enum XRSessionMode {
        INLINE,
        IMMERSIVE_VR,
        IMMERSIVE_AR,
    }
    const EDITING_COMMAND_COPY: string;
    const EDITING_COMMAND_CREATE_LINK: string;
    const EDITING_COMMAND_CUT: string;
    const EDITING_COMMAND_INSERT_IMAGE: string;
    const EDITING_COMMAND_PASTE: string;
    const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string;
    const EDITING_COMMAND_REDO: string;
    const EDITING_COMMAND_SELECT_ALL: string;
    const EDITING_COMMAND_UNDO: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function download_error_quark(): GLib.Quark;
    function favicon_database_error_quark(): GLib.Quark;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function javascript_error_quark(): GLib.Quark;
    function media_key_system_permission_get_name(request: MediaKeySystemPermissionRequest): string;
    function network_error_quark(): GLib.Quark;
    function plugin_error_quark(): GLib.Quark;
    function policy_error_quark(): GLib.Quark;
    function print_error_quark(): GLib.Quark;
    function snapshot_error_quark(): GLib.Quark;
    function uri_for_display(uri: string): string | null;
    function user_content_filter_error_quark(): GLib.Quark;
    function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;
    function user_media_permission_is_for_display_device(request: UserMediaPermissionRequest): boolean;
    function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;
    function user_message_error_quark(): GLib.Quark;
    function web_extension_match_pattern_error_quark(): GLib.Quark;
    interface URISchemeRequestCallback {
        (request: URISchemeRequest): void;
    }
    export namespace EditorTypingAttributes {
        export const $gtype: GObject.GType<EditorTypingAttributes>;
    }
    enum EditorTypingAttributes {
        NONE,
        BOLD,
        ITALIC,
        UNDERLINE,
        STRIKETHROUGH,
    }
    export namespace FindOptions {
        export const $gtype: GObject.GType<FindOptions>;
    }
    enum FindOptions {
        NONE,
        CASE_INSENSITIVE,
        AT_WORD_STARTS,
        TREAT_MEDIAL_CAPITAL_AS_WORD_START,
        BACKWARDS,
        WRAP_AROUND,
    }
    export namespace HitTestResultContext {
        export const $gtype: GObject.GType<HitTestResultContext>;
    }
    enum HitTestResultContext {
        DOCUMENT,
        LINK,
        IMAGE,
        MEDIA,
        EDITABLE,
        SCROLLBAR,
        SELECTION,
    }
    export namespace InputHints {
        export const $gtype: GObject.GType<InputHints>;
    }
    enum InputHints {
        NONE,
        SPELLCHECK,
        LOWERCASE,
        UPPERCASE_CHARS,
        UPPERCASE_WORDS,
        UPPERCASE_SENTENCES,
        INHIBIT_OSK,
    }
    export namespace SnapshotOptions {
        export const $gtype: GObject.GType<SnapshotOptions>;
    }
    enum SnapshotOptions {
        NONE,
        INCLUDE_SELECTION_HIGHLIGHTING,
        TRANSPARENT_BACKGROUND,
    }
    export namespace WebsiteDataTypes {
        export const $gtype: GObject.GType<WebsiteDataTypes>;
    }
    enum WebsiteDataTypes {
        MEMORY_CACHE,
        DISK_CACHE,
        OFFLINE_APPLICATION_CACHE,
        SESSION_STORAGE,
        LOCAL_STORAGE,
        WEBSQL_DATABASES,
        INDEXEDDB_DATABASES,
        PLUGIN_DATA,
        COOKIES,
        DEVICE_ID_HASH_SALT,
        HSTS_CACHE,
        ITP,
        SERVICE_WORKER_REGISTRATIONS,
        DOM_CACHE,
        ALL,
    }
    export namespace XRSessionFeatures {
        export const $gtype: GObject.GType<XRSessionFeatures>;
    }
    enum XRSessionFeatures {
        VIEWER,
        LOCAL,
        LOCAL_FLOOR,
        BOUNDED_FLOOR,
        UNBOUNDED,
        HAND_TRACKING,
        HIT_TEST,
        LAYERS,
    }
    namespace AuthenticationRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticated: (arg0: Credential) => void;
            cancelled: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class AuthenticationRequest extends GObject.Object {
        static $gtype: GObject.GType<AuthenticationRequest>;
        $signals: AuthenticationRequest.SignalSignatures;
        constructor(properties?: Partial<AuthenticationRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AuthenticationRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthenticationRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthenticationRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthenticationRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthenticationRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthenticationRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        authenticate(credential: Credential | null): void;
        can_save_credentials(): boolean;
        cancel(): void;
        get_certificate_pin_flags(): Gio.TlsPasswordFlags;
        get_host(): string;
        get_port(): number;
        get_proposed_credential(): Credential;
        get_realm(): string;
        get_scheme(): AuthenticationScheme;
        get_security_origin(): SecurityOrigin;
        is_for_proxy(): boolean;
        is_retry(): boolean;
        set_can_save_credentials(enabled: boolean): void;
        set_proposed_credential(credential: Credential): void;
    }
    namespace AutomationSession {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "create-web-view": () => WebView;
            "will-close": () => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "create-web-view::id": () => WebView;
            [key: `create-web-view::${string}`]: () => WebView;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
        }
    }
    class AutomationSession extends GObject.Object {
        static $gtype: GObject.GType<AutomationSession>;
        get id(): string;
        $signals: AutomationSession.SignalSignatures;
        constructor(properties?: Partial<AutomationSession.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AutomationSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AutomationSession.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AutomationSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AutomationSession.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AutomationSession.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AutomationSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_application_info(): ApplicationInfo;
        get_id(): string;
        set_application_info(info: ApplicationInfo): void;
    }
    namespace BackForwardList {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: BackForwardListItem | null, arg1: null) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BackForwardList extends GObject.Object {
        static $gtype: GObject.GType<BackForwardList>;
        $signals: BackForwardList.SignalSignatures;
        constructor(properties?: Partial<BackForwardList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BackForwardList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackForwardList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackForwardList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackForwardList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackForwardList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BackForwardList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_back_item(): BackForwardListItem | null;
        get_back_list(): BackForwardListItem[];
        get_back_list_with_limit(limit: number): BackForwardListItem[];
        get_current_item(): BackForwardListItem | null;
        get_forward_item(): BackForwardListItem | null;
        get_forward_list(): BackForwardListItem[];
        get_forward_list_with_limit(limit: number): BackForwardListItem[];
        get_length(): number;
        get_nth_item(index: number): BackForwardListItem | null;
    }
    namespace BackForwardListItem {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }
    class BackForwardListItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<BackForwardListItem>;
        $signals: BackForwardListItem.SignalSignatures;
        constructor(properties?: Partial<BackForwardListItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BackForwardListItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackForwardListItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackForwardListItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BackForwardListItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackForwardListItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BackForwardListItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_original_uri(): string;
        get_title(): string;
        get_uri(): string;
    }
    namespace ClipboardPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class ClipboardPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<ClipboardPermissionRequest>;
        $signals: ClipboardPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<ClipboardPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClipboardPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipboardPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipboardPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipboardPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipboardPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClipboardPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace ColorChooserRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            finished: () => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rgba: Gdk.RGBA;
        }
    }
    class ColorChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<ColorChooserRequest>;
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);
        $signals: ColorChooserRequest.SignalSignatures;
        constructor(properties?: Partial<ColorChooserRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ColorChooserRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorChooserRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorChooserRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorChooserRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorChooserRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorChooserRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel(): void;
        finish(): void;
        get_element_rectangle(): Gdk.Rectangle;
        get_rgba(): Gdk.RGBA;
        set_rgba(rgba: Gdk.RGBA): void;
    }
    namespace ContextMenu {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ContextMenu extends GObject.Object {
        static $gtype: GObject.GType<ContextMenu>;
        $signals: ContextMenu.SignalSignatures;
        constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ContextMenu;
        static new_with_items(items: ContextMenuItem[]): ContextMenu;
        connect<K extends keyof ContextMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append(item: ContextMenuItem): void;
        first(): ContextMenuItem;
        get_event(): Gdk.Event;
        get_item_at_position(position: number): ContextMenuItem;
        get_items(): ContextMenuItem[];
        get_n_items(): number;
        get_position(): [boolean, number, number];
        get_user_data(): GLib.Variant;
        insert(item: ContextMenuItem, position: number): void;
        last(): ContextMenuItem;
        move_item(item: ContextMenuItem, position: number): void;
        prepend(item: ContextMenuItem): void;
        remove(item: ContextMenuItem): void;
        remove_all(): void;
        set_user_data(user_data: GLib.Variant): void;
    }
    namespace ContextMenuItem {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }
    class ContextMenuItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ContextMenuItem>;
        $signals: ContextMenuItem.SignalSignatures;
        constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](action: Gtk.Action): ContextMenuItem;
        static new_from_gaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem;
        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;
        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;
        static new_separator(): ContextMenuItem;
        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;
        connect<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(): Gtk.Action;
        get_gaction(): Gio.Action;
        get_gaction_target(): GLib.Variant | null;
        get_stock_action(): ContextMenuAction;
        get_submenu(): ContextMenu;
        get_title(): string;
        is_separator(): boolean;
        set_submenu(submenu: ContextMenu | null): void;
    }
    namespace CookieManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CookieManager extends GObject.Object {
        static $gtype: GObject.GType<CookieManager>;
        $signals: CookieManager.SignalSignatures;
        constructor(properties?: Partial<CookieManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CookieManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CookieManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CookieManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        add_cookie_finish(result: Gio.AsyncResult): boolean;
        delete_all_cookies(): void;
        delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_cookie_finish(result: Gio.AsyncResult): boolean;
        delete_cookies_for_domain(domain: string): void;
        get_accept_policy(cancellable: Gio.Cancellable | null): globalThis.Promise<CookieAcceptPolicy>;
        get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_accept_policy(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<CookieAcceptPolicy> | void;
        get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
        get_all_cookies(cancellable: Gio.Cancellable | null): globalThis.Promise<Soup.Cookie[]>;
        get_all_cookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_all_cookies(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Soup.Cookie[]> | void;
        get_all_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];
        get_cookies(uri: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Soup.Cookie[]>;
        get_cookies(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_cookies(uri: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Soup.Cookie[]> | void;
        get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];
        get_domains_with_cookies(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>;
        get_domains_with_cookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_domains_with_cookies(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;
        get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
        replace_cookies(cookies: Soup.Cookie[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        replace_cookies(cookies: Soup.Cookie[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        replace_cookies(cookies: Soup.Cookie[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        replace_cookies_finish(result: Gio.AsyncResult): boolean;
        set_accept_policy(policy: CookieAcceptPolicy): void;
        set_persistent_storage(filename: string, storage: CookiePersistentStorage): void;
    }
    namespace DeviceInfoPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class DeviceInfoPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<DeviceInfoPermissionRequest>;
        $signals: DeviceInfoPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<DeviceInfoPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfoPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfoPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceInfoPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace Download {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "created-destination": (arg0: string) => void;
            "decide-destination": (arg0: string) => boolean | void;
            failed: (arg0: GLib.Error) => void;
            finished: () => void;
            "received-data": (arg0: number) => void;
            "notify::allow-overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::destination": (pspec: GObject.ParamSpec) => void;
            "notify::estimated-progress": (pspec: GObject.ParamSpec) => void;
            "notify::response": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_overwrite: boolean;
            allowOverwrite: boolean;
            destination: string | null;
            estimated_progress: number;
            estimatedProgress: number;
            response: URIResponse;
        }
    }
    class Download extends GObject.Object {
        static $gtype: GObject.GType<Download>;
        get allow_overwrite(): boolean;
        set allow_overwrite(val: boolean);
        get allowOverwrite(): boolean;
        set allowOverwrite(val: boolean);
        get destination(): string | null;
        get estimated_progress(): number;
        get estimatedProgress(): number;
        get response(): URIResponse;
        $signals: Download.SignalSignatures;
        constructor(properties?: Partial<Download.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Download.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Download.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Download.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Download.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Download.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Download.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decide_destination(suggested_filename: string): boolean;
        cancel(): void;
        get_allow_overwrite(): boolean;
        get_destination(): string | null;
        get_elapsed_time(): number;
        get_estimated_progress(): number;
        get_received_data_length(): number;
        get_request(): URIRequest;
        get_response(): URIResponse;
        get_web_view(): WebView;
        set_allow_overwrite(allowed: boolean): void;
        set_destination(destination: string): void;
    }
    namespace EditorState {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            "notify::typing-attributes": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            typing_attributes: number;
            typingAttributes: number;
        }
    }
    class EditorState extends GObject.Object {
        static $gtype: GObject.GType<EditorState>;
        get typing_attributes(): number;
        get typingAttributes(): number;
        $signals: EditorState.SignalSignatures;
        constructor(properties?: Partial<EditorState.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EditorState.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorState.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EditorState.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorState.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EditorState.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EditorState.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_typing_attributes(): number;
        is_copy_available(): boolean;
        is_cut_available(): boolean;
        is_paste_available(): boolean;
        is_redo_available(): boolean;
        is_undo_available(): boolean;
    }
    namespace FaviconDatabase {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "favicon-changed": (arg0: string, arg1: string) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FaviconDatabase extends GObject.Object {
        static $gtype: GObject.GType<FaviconDatabase>;
        $signals: FaviconDatabase.SignalSignatures;
        constructor(properties?: Partial<FaviconDatabase.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FaviconDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FaviconDatabase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FaviconDatabase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FaviconDatabase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FaviconDatabase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FaviconDatabase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clear(): void;
        get_favicon(page_uri: string, cancellable: Gio.Cancellable | null): globalThis.Promise<cairo.Surface>;
        get_favicon(page_uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_favicon(page_uri: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<cairo.Surface> | void;
        get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
        get_favicon_uri(page_uri: string): string;
    }
    namespace FileChooserRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::mime-types": (pspec: GObject.ParamSpec) => void;
            "notify::select-multiple": (pspec: GObject.ParamSpec) => void;
            "notify::selected-files": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filter: Gtk.FileFilter;
            mime_types: string[];
            mimeTypes: string[];
            select_multiple: boolean;
            selectMultiple: boolean;
            selected_files: string[];
            selectedFiles: string[];
        }
    }
    class FileChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<FileChooserRequest>;
        get filter(): Gtk.FileFilter;
        get mime_types(): string[];
        get mimeTypes(): string[];
        get select_multiple(): boolean;
        get selectMultiple(): boolean;
        get selected_files(): string[];
        get selectedFiles(): string[];
        $signals: FileChooserRequest.SignalSignatures;
        constructor(properties?: Partial<FileChooserRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FileChooserRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileChooserRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileChooserRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileChooserRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel(): void;
        get_mime_types(): string[];
        get_mime_types_filter(): Gtk.FileFilter;
        get_select_multiple(): boolean;
        get_selected_files(): string[];
        select_files(files: string[]): void;
    }
    namespace FindController {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "counted-matches": (arg0: number) => void;
            "failed-to-find-text": () => void;
            "found-text": (arg0: number) => void;
            "notify::max-match-count": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::web-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_match_count: number;
            maxMatchCount: number;
            options: FindOptions;
            text: string;
            web_view: WebView;
            webView: WebView;
        }
    }
    class FindController extends GObject.Object {
        static $gtype: GObject.GType<FindController>;
        get max_match_count(): number;
        get maxMatchCount(): number;
        get options(): FindOptions;
        get text(): string;
        get web_view(): WebView;
        get webView(): WebView;
        $signals: FindController.SignalSignatures;
        constructor(properties?: Partial<FindController.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FindController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FindController.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FindController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FindController.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FindController.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FindController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        count_matches(search_text: string, find_options: number, max_match_count: number): void;
        get_max_match_count(): number;
        get_options(): number;
        get_search_text(): string;
        get_web_view(): WebView;
        search(search_text: string, find_options: number, max_match_count: number): void;
        search_finish(): void;
        search_next(): void;
        search_previous(): void;
    }
    namespace FormSubmissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FormSubmissionRequest extends GObject.Object {
        static $gtype: GObject.GType<FormSubmissionRequest>;
        $signals: FormSubmissionRequest.SignalSignatures;
        constructor(properties?: Partial<FormSubmissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FormSubmissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormSubmissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormSubmissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormSubmissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FormSubmissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormSubmissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_text_fields(): never | null;
        list_text_fields(): [boolean, string[] | null, string[] | null];
        submit(): void;
    }
    namespace GeolocationManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            start: () => boolean | void;
            stop: () => void;
            "notify::enable-high-accuracy": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_high_accuracy: boolean;
            enableHighAccuracy: boolean;
        }
    }
    class GeolocationManager extends GObject.Object {
        static $gtype: GObject.GType<GeolocationManager>;
        get enable_high_accuracy(): boolean;
        get enableHighAccuracy(): boolean;
        $signals: GeolocationManager.SignalSignatures;
        constructor(properties?: Partial<GeolocationManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GeolocationManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeolocationManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeolocationManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeolocationManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeolocationManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GeolocationManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        failed(error_message: string): void;
        get_enable_high_accuracy(): boolean;
        update_position(position: GeolocationPosition): void;
    }
    namespace GeolocationPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class GeolocationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<GeolocationPermissionRequest>;
        $signals: GeolocationPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<GeolocationPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GeolocationPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeolocationPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeolocationPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeolocationPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeolocationPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GeolocationPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace HitTestResult {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::image-uri": (pspec: GObject.ParamSpec) => void;
            "notify::link-label": (pspec: GObject.ParamSpec) => void;
            "notify::link-title": (pspec: GObject.ParamSpec) => void;
            "notify::link-uri": (pspec: GObject.ParamSpec) => void;
            "notify::media-uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: number;
            image_uri: string;
            imageUri: string;
            link_label: string;
            linkLabel: string;
            link_title: string;
            linkTitle: string;
            link_uri: string;
            linkUri: string;
            media_uri: string;
            mediaUri: string;
        }
    }
    class HitTestResult extends GObject.Object {
        static $gtype: GObject.GType<HitTestResult>;
        get context(): number;
        get image_uri(): string;
        get imageUri(): string;
        get link_label(): string;
        get linkLabel(): string;
        get link_title(): string;
        get linkTitle(): string;
        get link_uri(): string;
        get linkUri(): string;
        get media_uri(): string;
        get mediaUri(): string;
        $signals: HitTestResult.SignalSignatures;
        constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof HitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HitTestResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        context_is_editable(): boolean;
        context_is_image(): boolean;
        context_is_link(): boolean;
        context_is_media(): boolean;
        context_is_scrollbar(): boolean;
        context_is_selection(): boolean;
        get_context(): number;
        get_image_uri(): string;
        get_link_label(): string;
        get_link_title(): string;
        get_link_uri(): string;
        get_media_uri(): string;
    }
    namespace InputMethodContext {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            committed: (arg0: string) => void;
            "delete-surrounding": (arg0: number, arg1: number) => void;
            "preedit-changed": () => void;
            "preedit-finished": () => void;
            "preedit-started": () => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input_hints: InputHints;
            inputHints: InputHints;
            input_purpose: InputPurpose;
            inputPurpose: InputPurpose;
        }
    }
    abstract class InputMethodContext extends GObject.Object {
        static $gtype: GObject.GType<InputMethodContext>;
        get input_hints(): InputHints;
        set input_hints(val: InputHints);
        get inputHints(): InputHints;
        set inputHints(val: InputHints);
        get input_purpose(): InputPurpose;
        set input_purpose(val: InputPurpose);
        get inputPurpose(): InputPurpose;
        set inputPurpose(val: InputPurpose);
        $signals: InputMethodContext.SignalSignatures;
        constructor(properties?: Partial<InputMethodContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof InputMethodContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputMethodContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputMethodContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputMethodContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputMethodContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputMethodContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_committed(text: string): void;
        vfunc_delete_surrounding(offset: number, n_chars: number): void;
        vfunc_filter_key_event(key_event: Gdk.EventKey): boolean;
        vfunc_get_preedit(): [string, InputMethodUnderline[] | null, number];
        vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void;
        vfunc_notify_focus_in(): void;
        vfunc_notify_focus_out(): void;
        vfunc_notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
        vfunc_preedit_changed(): void;
        vfunc_preedit_finished(): void;
        vfunc_preedit_started(): void;
        vfunc_reset(): void;
        vfunc_set_enable_preedit(enabled: boolean): void;
        filter_key_event(key_event: Gdk.EventKey): boolean;
        get_input_hints(): InputHints;
        get_input_purpose(): InputPurpose;
        get_preedit(): [string, InputMethodUnderline[] | null, number];
        notify_cursor_area(x: number, y: number, width: number, height: number): void;
        notify_focus_in(): void;
        notify_focus_out(): void;
        notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
        reset(): void;
        set_enable_preedit(enabled: boolean): void;
        set_input_hints(hints: InputHints): void;
        set_input_purpose(purpose: InputPurpose): void;
    }
    namespace InstallMissingMediaPluginsPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class InstallMissingMediaPluginsPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequest>;
        $signals: InstallMissingMediaPluginsPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<InstallMissingMediaPluginsPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(): string;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace MediaKeySystemPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class MediaKeySystemPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequest>;
        $signals: MediaKeySystemPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<MediaKeySystemPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaKeySystemPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaKeySystemPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaKeySystemPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace NavigationPolicyDecision {
        interface SignalSignatures extends PolicyDecision.SignalSignatures {
            "notify::frame-name": (pspec: GObject.ParamSpec) => void;
            "notify::modifiers": (pspec: GObject.ParamSpec) => void;
            "notify::mouse-button": (pspec: GObject.ParamSpec) => void;
            "notify::navigation-action": (pspec: GObject.ParamSpec) => void;
            "notify::navigation-type": (pspec: GObject.ParamSpec) => void;
            "notify::request": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PolicyDecision.ConstructorProps {
            frame_name: string;
            frameName: string;
            modifiers: number;
            mouse_button: number;
            mouseButton: number;
            navigation_action: NavigationAction;
            navigationAction: NavigationAction;
            navigation_type: NavigationType;
            navigationType: NavigationType;
            request: URIRequest;
        }
    }
    class NavigationPolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<NavigationPolicyDecision>;
        get frame_name(): string;
        get frameName(): string;
        get modifiers(): number;
        get mouse_button(): number;
        get mouseButton(): number;
        get navigation_action(): NavigationAction;
        get navigationAction(): NavigationAction;
        get navigation_type(): NavigationType;
        get navigationType(): NavigationType;
        get request(): URIRequest;
        $signals: NavigationPolicyDecision.SignalSignatures;
        constructor(properties?: Partial<NavigationPolicyDecision.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NavigationPolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NavigationPolicyDecision.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NavigationPolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NavigationPolicyDecision.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NavigationPolicyDecision.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NavigationPolicyDecision.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_frame_name(): string;
        get_modifiers(): number;
        get_mouse_button(): number;
        get_navigation_action(): NavigationAction;
        get_navigation_type(): NavigationType;
        get_request(): URIRequest;
    }
    namespace Notification {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            clicked: () => void;
            closed: () => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::tag": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            body: string;
            id: bigint | number;
            tag: string | null;
            title: string;
        }
    }
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;
        get body(): string;
        get id(): number;
        get tag(): string | null;
        get title(): string;
        $signals: Notification.SignalSignatures;
        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Notification.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clicked(): void;
        close(): void;
        get_body(): string;
        get_id(): number;
        get_tag(): string | null;
        get_title(): string;
    }
    namespace NotificationPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class NotificationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<NotificationPermissionRequest>;
        $signals: NotificationPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<NotificationPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NotificationPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NotificationPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NotificationPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NotificationPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NotificationPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NotificationPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace OptionMenu {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            close: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class OptionMenu extends GObject.Object {
        static $gtype: GObject.GType<OptionMenu>;
        $signals: OptionMenu.SignalSignatures;
        constructor(properties?: Partial<OptionMenu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof OptionMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionMenu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OptionMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionMenu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OptionMenu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OptionMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        activate_item(index: number): void;
        close(): void;
        get_event(): Gdk.Event;
        get_item(index: number): OptionMenuItem;
        get_n_items(): number;
        select_item(index: number): void;
    }
    namespace Plugin {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;
        $signals: Plugin.SignalSignatures;
        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(): string | null;
        get_mime_info_list(): MimeInfo[];
        get_name(): string | null;
        get_path(): string | null;
    }
    namespace PointerLockPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class PointerLockPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<PointerLockPermissionRequest>;
        $signals: PointerLockPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<PointerLockPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PointerLockPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PointerLockPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PointerLockPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PointerLockPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PointerLockPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PointerLockPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace PolicyDecision {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class PolicyDecision extends GObject.Object {
        static $gtype: GObject.GType<PolicyDecision>;
        $signals: PolicyDecision.SignalSignatures;
        constructor(properties?: Partial<PolicyDecision.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PolicyDecision.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PolicyDecision.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PolicyDecision.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PolicyDecision.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        download(): void;
        ignore(): void;
        use(): void;
        use_with_policies(policies: WebsitePolicies): void;
    }
    namespace PrintCustomWidget {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            apply: () => void;
            update: (arg0: Gtk.PageSetup, arg1: Gtk.PrintSettings) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            title: string;
            widget: Gtk.Widget;
        }
    }
    class PrintCustomWidget extends GObject.Object {
        static $gtype: GObject.GType<PrintCustomWidget>;
        get title(): string;
        get widget(): Gtk.Widget;
        $signals: PrintCustomWidget.SignalSignatures;
        constructor(properties?: Partial<PrintCustomWidget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](widget: Gtk.Widget, title: string): PrintCustomWidget;
        connect<K extends keyof PrintCustomWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCustomWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintCustomWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCustomWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintCustomWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintCustomWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_apply(widget: Gtk.Widget): void;
        vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;
        get_title(): string;
        get_widget(): Gtk.Widget;
    }
    namespace PrintOperation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "create-custom-widget": () => PrintCustomWidget;
            failed: (arg0: GLib.Error) => void;
            finished: () => void;
            "notify::page-setup": (pspec: GObject.ParamSpec) => void;
            "notify::print-settings": (pspec: GObject.ParamSpec) => void;
            "notify::web-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            page_setup: Gtk.PageSetup;
            pageSetup: Gtk.PageSetup;
            print_settings: Gtk.PrintSettings;
            printSettings: Gtk.PrintSettings;
            web_view: WebView;
            webView: WebView;
        }
    }
    class PrintOperation extends GObject.Object {
        static $gtype: GObject.GType<PrintOperation>;
        get page_setup(): Gtk.PageSetup;
        set page_setup(val: Gtk.PageSetup);
        get pageSetup(): Gtk.PageSetup;
        set pageSetup(val: Gtk.PageSetup);
        get print_settings(): Gtk.PrintSettings;
        set print_settings(val: Gtk.PrintSettings);
        get printSettings(): Gtk.PrintSettings;
        set printSettings(val: Gtk.PrintSettings);
        get web_view(): WebView;
        get webView(): WebView;
        $signals: PrintOperation.SignalSignatures;
        constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](web_view: WebView): PrintOperation;
        connect<K extends keyof PrintOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintOperation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_page_setup(): Gtk.PageSetup;
        get_print_settings(): Gtk.PrintSettings;
        print(): void;
        run_dialog(parent: Gtk.Window | null): PrintOperationResponse;
        set_page_setup(page_setup: Gtk.PageSetup): void;
        set_print_settings(print_settings: Gtk.PrintSettings): void;
    }
    namespace ResponsePolicyDecision {
        interface SignalSignatures extends PolicyDecision.SignalSignatures {
            "notify::request": (pspec: GObject.ParamSpec) => void;
            "notify::response": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PolicyDecision.ConstructorProps {
            request: URIRequest;
            response: URIResponse;
        }
    }
    class ResponsePolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<ResponsePolicyDecision>;
        get request(): URIRequest;
        get response(): URIResponse;
        $signals: ResponsePolicyDecision.SignalSignatures;
        constructor(properties?: Partial<ResponsePolicyDecision.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ResponsePolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResponsePolicyDecision.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResponsePolicyDecision.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResponsePolicyDecision.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResponsePolicyDecision.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResponsePolicyDecision.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_request(): URIRequest;
        get_response(): URIResponse;
        is_main_frame_main_resource(): boolean;
        is_mime_type_supported(): boolean;
    }
    namespace SecurityManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SecurityManager extends GObject.Object {
        static $gtype: GObject.GType<SecurityManager>;
        $signals: SecurityManager.SignalSignatures;
        constructor(properties?: Partial<SecurityManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SecurityManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecurityManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecurityManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecurityManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecurityManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SecurityManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        register_uri_scheme_as_cors_enabled(scheme: string): void;
        register_uri_scheme_as_display_isolated(scheme: string): void;
        register_uri_scheme_as_empty_document(scheme: string): void;
        register_uri_scheme_as_local(scheme: string): void;
        register_uri_scheme_as_no_access(scheme: string): void;
        register_uri_scheme_as_secure(scheme: string): void;
        uri_scheme_is_cors_enabled(scheme: string): boolean;
        uri_scheme_is_display_isolated(scheme: string): boolean;
        uri_scheme_is_empty_document(scheme: string): boolean;
        uri_scheme_is_local(scheme: string): boolean;
        uri_scheme_is_no_access(scheme: string): boolean;
        uri_scheme_is_secure(scheme: string): boolean;
    }
    namespace Settings {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::allow-file-access-from-file-urls": (pspec: GObject.ParamSpec) => void;
            "notify::allow-modal-dialogs": (pspec: GObject.ParamSpec) => void;
            "notify::allow-top-navigation-to-data-urls": (pspec: GObject.ParamSpec) => void;
            "notify::allow-universal-access-from-file-urls": (pspec: GObject.ParamSpec) => void;
            "notify::auto-load-images": (pspec: GObject.ParamSpec) => void;
            "notify::cursive-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::default-charset": (pspec: GObject.ParamSpec) => void;
            "notify::default-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::default-font-size": (pspec: GObject.ParamSpec) => void;
            "notify::default-monospace-font-size": (pspec: GObject.ParamSpec) => void;
            "notify::disable-web-security": (pspec: GObject.ParamSpec) => void;
            "notify::draw-compositing-indicators": (pspec: GObject.ParamSpec) => void;
            "notify::enable-2d-canvas-acceleration": (pspec: GObject.ParamSpec) => void;
            "notify::enable2d-canvas-acceleration": (pspec: GObject.ParamSpec) => void;
            "notify::enable-accelerated-2d-canvas": (pspec: GObject.ParamSpec) => void;
            "notify::enable-accelerated2d-canvas": (pspec: GObject.ParamSpec) => void;
            "notify::enable-back-forward-navigation-gestures": (pspec: GObject.ParamSpec) => void;
            "notify::enable-caret-browsing": (pspec: GObject.ParamSpec) => void;
            "notify::enable-developer-extras": (pspec: GObject.ParamSpec) => void;
            "notify::enable-dns-prefetching": (pspec: GObject.ParamSpec) => void;
            "notify::enable-encrypted-media": (pspec: GObject.ParamSpec) => void;
            "notify::enable-frame-flattening": (pspec: GObject.ParamSpec) => void;
            "notify::enable-fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::enable-html5-database": (pspec: GObject.ParamSpec) => void;
            "notify::enable-html5-local-storage": (pspec: GObject.ParamSpec) => void;
            "notify::enable-hyperlink-auditing": (pspec: GObject.ParamSpec) => void;
            "notify::enable-java": (pspec: GObject.ParamSpec) => void;
            "notify::enable-javascript": (pspec: GObject.ParamSpec) => void;
            "notify::enable-javascript-markup": (pspec: GObject.ParamSpec) => void;
            "notify::enable-media": (pspec: GObject.ParamSpec) => void;
            "notify::enable-media-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::enable-media-stream": (pspec: GObject.ParamSpec) => void;
            "notify::enable-mediasource": (pspec: GObject.ParamSpec) => void;
            "notify::enable-mock-capture-devices": (pspec: GObject.ParamSpec) => void;
            "notify::enable-offline-web-application-cache": (pspec: GObject.ParamSpec) => void;
            "notify::enable-page-cache": (pspec: GObject.ParamSpec) => void;
            "notify::enable-plugins": (pspec: GObject.ParamSpec) => void;
            "notify::enable-private-browsing": (pspec: GObject.ParamSpec) => void;
            "notify::enable-resizable-text-areas": (pspec: GObject.ParamSpec) => void;
            "notify::enable-site-specific-quirks": (pspec: GObject.ParamSpec) => void;
            "notify::enable-smooth-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::enable-spatial-navigation": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tabs-to-links": (pspec: GObject.ParamSpec) => void;
            "notify::enable-webaudio": (pspec: GObject.ParamSpec) => void;
            "notify::enable-webgl": (pspec: GObject.ParamSpec) => void;
            "notify::enable-webrtc": (pspec: GObject.ParamSpec) => void;
            "notify::enable-write-console-messages-to-stdout": (pspec: GObject.ParamSpec) => void;
            "notify::enable-xss-auditor": (pspec: GObject.ParamSpec) => void;
            "notify::fantasy-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-acceleration-policy": (pspec: GObject.ParamSpec) => void;
            "notify::javascript-can-access-clipboard": (pspec: GObject.ParamSpec) => void;
            "notify::javascript-can-open-windows-automatically": (pspec: GObject.ParamSpec) => void;
            "notify::load-icons-ignoring-image-load-setting": (pspec: GObject.ParamSpec) => void;
            "notify::math-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::media-content-types-requiring-hardware-support": (pspec: GObject.ParamSpec) => void;
            "notify::media-playback-allows-inline": (pspec: GObject.ParamSpec) => void;
            "notify::media-playback-requires-user-gesture": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-font-size": (pspec: GObject.ParamSpec) => void;
            "notify::monospace-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::pictograph-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::print-backgrounds": (pspec: GObject.ParamSpec) => void;
            "notify::sans-serif-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::serif-font-family": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
            "notify::webrtc-udp-ports-range": (pspec: GObject.ParamSpec) => void;
            "notify::zoom-text-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_file_access_from_file_urls: boolean;
            allowFileAccessFromFileUrls: boolean;
            allow_modal_dialogs: boolean;
            allowModalDialogs: boolean;
            allow_top_navigation_to_data_urls: boolean;
            allowTopNavigationToDataUrls: boolean;
            allow_universal_access_from_file_urls: boolean;
            allowUniversalAccessFromFileUrls: boolean;
            auto_load_images: boolean;
            autoLoadImages: boolean;
            cursive_font_family: string;
            cursiveFontFamily: string;
            default_charset: string;
            defaultCharset: string;
            default_font_family: string;
            defaultFontFamily: string;
            default_font_size: number;
            defaultFontSize: number;
            default_monospace_font_size: number;
            defaultMonospaceFontSize: number;
            disable_web_security: boolean;
            disableWebSecurity: boolean;
            draw_compositing_indicators: boolean;
            drawCompositingIndicators: boolean;
            enable_2d_canvas_acceleration: boolean;
            enable2dCanvasAcceleration: boolean;
            enable_accelerated_2d_canvas: boolean;
            enableAccelerated2dCanvas: boolean;
            enable_back_forward_navigation_gestures: boolean;
            enableBackForwardNavigationGestures: boolean;
            enable_caret_browsing: boolean;
            enableCaretBrowsing: boolean;
            enable_developer_extras: boolean;
            enableDeveloperExtras: boolean;
            enable_dns_prefetching: boolean;
            enableDnsPrefetching: boolean;
            enable_encrypted_media: boolean;
            enableEncryptedMedia: boolean;
            enable_frame_flattening: boolean;
            enableFrameFlattening: boolean;
            enable_fullscreen: boolean;
            enableFullscreen: boolean;
            enable_html5_database: boolean;
            enableHtml5Database: boolean;
            enable_html5_local_storage: boolean;
            enableHtml5LocalStorage: boolean;
            enable_hyperlink_auditing: boolean;
            enableHyperlinkAuditing: boolean;
            enable_java: boolean;
            enableJava: boolean;
            enable_javascript: boolean;
            enableJavascript: boolean;
            enable_javascript_markup: boolean;
            enableJavascriptMarkup: boolean;
            enable_media: boolean;
            enableMedia: boolean;
            enable_media_capabilities: boolean;
            enableMediaCapabilities: boolean;
            enable_media_stream: boolean;
            enableMediaStream: boolean;
            enable_mediasource: boolean;
            enableMediasource: boolean;
            enable_mock_capture_devices: boolean;
            enableMockCaptureDevices: boolean;
            enable_offline_web_application_cache: boolean;
            enableOfflineWebApplicationCache: boolean;
            enable_page_cache: boolean;
            enablePageCache: boolean;
            enable_plugins: boolean;
            enablePlugins: boolean;
            enable_private_browsing: boolean;
            enablePrivateBrowsing: boolean;
            enable_resizable_text_areas: boolean;
            enableResizableTextAreas: boolean;
            enable_site_specific_quirks: boolean;
            enableSiteSpecificQuirks: boolean;
            enable_smooth_scrolling: boolean;
            enableSmoothScrolling: boolean;
            enable_spatial_navigation: boolean;
            enableSpatialNavigation: boolean;
            enable_tabs_to_links: boolean;
            enableTabsToLinks: boolean;
            enable_webaudio: boolean;
            enableWebaudio: boolean;
            enable_webgl: boolean;
            enableWebgl: boolean;
            enable_webrtc: boolean;
            enableWebrtc: boolean;
            enable_write_console_messages_to_stdout: boolean;
            enableWriteConsoleMessagesToStdout: boolean;
            enable_xss_auditor: boolean;
            enableXssAuditor: boolean;
            fantasy_font_family: string;
            fantasyFontFamily: string;
            hardware_acceleration_policy: HardwareAccelerationPolicy;
            hardwareAccelerationPolicy: HardwareAccelerationPolicy;
            javascript_can_access_clipboard: boolean;
            javascriptCanAccessClipboard: boolean;
            javascript_can_open_windows_automatically: boolean;
            javascriptCanOpenWindowsAutomatically: boolean;
            load_icons_ignoring_image_load_setting: boolean;
            loadIconsIgnoringImageLoadSetting: boolean;
            math_font_family: string | null;
            mathFontFamily: string | null;
            media_content_types_requiring_hardware_support: string;
            mediaContentTypesRequiringHardwareSupport: string;
            media_playback_allows_inline: boolean;
            mediaPlaybackAllowsInline: boolean;
            media_playback_requires_user_gesture: boolean;
            mediaPlaybackRequiresUserGesture: boolean;
            minimum_font_size: number;
            minimumFontSize: number;
            monospace_font_family: string;
            monospaceFontFamily: string;
            pictograph_font_family: string;
            pictographFontFamily: string;
            print_backgrounds: boolean;
            printBackgrounds: boolean;
            sans_serif_font_family: string;
            sansSerifFontFamily: string;
            serif_font_family: string;
            serifFontFamily: string;
            user_agent: string;
            userAgent: string;
            webrtc_udp_ports_range: string;
            webrtcUdpPortsRange: string;
            zoom_text_only: boolean;
            zoomTextOnly: boolean;
        }
    }
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;
        get allow_file_access_from_file_urls(): boolean;
        set allow_file_access_from_file_urls(val: boolean);
        get allowFileAccessFromFileUrls(): boolean;
        set allowFileAccessFromFileUrls(val: boolean);
        get allow_modal_dialogs(): boolean;
        set allow_modal_dialogs(val: boolean);
        get allowModalDialogs(): boolean;
        set allowModalDialogs(val: boolean);
        get allow_top_navigation_to_data_urls(): boolean;
        set allow_top_navigation_to_data_urls(val: boolean);
        get allowTopNavigationToDataUrls(): boolean;
        set allowTopNavigationToDataUrls(val: boolean);
        get allow_universal_access_from_file_urls(): boolean;
        set allow_universal_access_from_file_urls(val: boolean);
        get allowUniversalAccessFromFileUrls(): boolean;
        set allowUniversalAccessFromFileUrls(val: boolean);
        get auto_load_images(): boolean;
        set auto_load_images(val: boolean);
        get autoLoadImages(): boolean;
        set autoLoadImages(val: boolean);
        get cursive_font_family(): string;
        set cursive_font_family(val: string);
        get cursiveFontFamily(): string;
        set cursiveFontFamily(val: string);
        get default_charset(): string;
        set default_charset(val: string);
        get defaultCharset(): string;
        set defaultCharset(val: string);
        get default_font_family(): string;
        set default_font_family(val: string);
        get defaultFontFamily(): string;
        set defaultFontFamily(val: string);
        get default_font_size(): number;
        set default_font_size(val: number);
        get defaultFontSize(): number;
        set defaultFontSize(val: number);
        get default_monospace_font_size(): number;
        set default_monospace_font_size(val: number);
        get defaultMonospaceFontSize(): number;
        set defaultMonospaceFontSize(val: number);
        get disable_web_security(): boolean;
        set disable_web_security(val: boolean);
        get disableWebSecurity(): boolean;
        set disableWebSecurity(val: boolean);
        get draw_compositing_indicators(): boolean;
        set draw_compositing_indicators(val: boolean);
        get drawCompositingIndicators(): boolean;
        set drawCompositingIndicators(val: boolean);
        get enable_2d_canvas_acceleration(): boolean;
        set enable_2d_canvas_acceleration(val: boolean);
        get enable2dCanvasAcceleration(): boolean;
        set enable2dCanvasAcceleration(val: boolean);
        get enable_accelerated_2d_canvas(): boolean;
        set enable_accelerated_2d_canvas(val: boolean);
        get enableAccelerated2dCanvas(): boolean;
        set enableAccelerated2dCanvas(val: boolean);
        get enable_back_forward_navigation_gestures(): boolean;
        set enable_back_forward_navigation_gestures(val: boolean);
        get enableBackForwardNavigationGestures(): boolean;
        set enableBackForwardNavigationGestures(val: boolean);
        get enable_caret_browsing(): boolean;
        set enable_caret_browsing(val: boolean);
        get enableCaretBrowsing(): boolean;
        set enableCaretBrowsing(val: boolean);
        get enable_developer_extras(): boolean;
        set enable_developer_extras(val: boolean);
        get enableDeveloperExtras(): boolean;
        set enableDeveloperExtras(val: boolean);
        get enable_dns_prefetching(): boolean;
        set enable_dns_prefetching(val: boolean);
        get enableDnsPrefetching(): boolean;
        set enableDnsPrefetching(val: boolean);
        get enable_encrypted_media(): boolean;
        set enable_encrypted_media(val: boolean);
        get enableEncryptedMedia(): boolean;
        set enableEncryptedMedia(val: boolean);
        get enable_frame_flattening(): boolean;
        set enable_frame_flattening(val: boolean);
        get enableFrameFlattening(): boolean;
        set enableFrameFlattening(val: boolean);
        get enable_fullscreen(): boolean;
        set enable_fullscreen(val: boolean);
        get enableFullscreen(): boolean;
        set enableFullscreen(val: boolean);
        get enable_html5_database(): boolean;
        set enable_html5_database(val: boolean);
        get enableHtml5Database(): boolean;
        set enableHtml5Database(val: boolean);
        get enable_html5_local_storage(): boolean;
        set enable_html5_local_storage(val: boolean);
        get enableHtml5LocalStorage(): boolean;
        set enableHtml5LocalStorage(val: boolean);
        get enable_hyperlink_auditing(): boolean;
        set enable_hyperlink_auditing(val: boolean);
        get enableHyperlinkAuditing(): boolean;
        set enableHyperlinkAuditing(val: boolean);
        get enable_java(): boolean;
        set enable_java(val: boolean);
        get enableJava(): boolean;
        set enableJava(val: boolean);
        get enable_javascript(): boolean;
        set enable_javascript(val: boolean);
        get enableJavascript(): boolean;
        set enableJavascript(val: boolean);
        get enable_javascript_markup(): boolean;
        set enable_javascript_markup(val: boolean);
        get enableJavascriptMarkup(): boolean;
        set enableJavascriptMarkup(val: boolean);
        get enable_media(): boolean;
        set enable_media(val: boolean);
        get enableMedia(): boolean;
        set enableMedia(val: boolean);
        get enable_media_capabilities(): boolean;
        set enable_media_capabilities(val: boolean);
        get enableMediaCapabilities(): boolean;
        set enableMediaCapabilities(val: boolean);
        get enable_media_stream(): boolean;
        set enable_media_stream(val: boolean);
        get enableMediaStream(): boolean;
        set enableMediaStream(val: boolean);
        get enable_mediasource(): boolean;
        set enable_mediasource(val: boolean);
        get enableMediasource(): boolean;
        set enableMediasource(val: boolean);
        get enable_mock_capture_devices(): boolean;
        set enable_mock_capture_devices(val: boolean);
        get enableMockCaptureDevices(): boolean;
        set enableMockCaptureDevices(val: boolean);
        get enable_offline_web_application_cache(): boolean;
        set enable_offline_web_application_cache(val: boolean);
        get enableOfflineWebApplicationCache(): boolean;
        set enableOfflineWebApplicationCache(val: boolean);
        get enable_page_cache(): boolean;
        set enable_page_cache(val: boolean);
        get enablePageCache(): boolean;
        set enablePageCache(val: boolean);
        get enable_plugins(): boolean;
        set enable_plugins(val: boolean);
        get enablePlugins(): boolean;
        set enablePlugins(val: boolean);
        get enable_private_browsing(): boolean;
        set enable_private_browsing(val: boolean);
        get enablePrivateBrowsing(): boolean;
        set enablePrivateBrowsing(val: boolean);
        get enable_resizable_text_areas(): boolean;
        set enable_resizable_text_areas(val: boolean);
        get enableResizableTextAreas(): boolean;
        set enableResizableTextAreas(val: boolean);
        get enable_site_specific_quirks(): boolean;
        set enable_site_specific_quirks(val: boolean);
        get enableSiteSpecificQuirks(): boolean;
        set enableSiteSpecificQuirks(val: boolean);
        get enable_smooth_scrolling(): boolean;
        set enable_smooth_scrolling(val: boolean);
        get enableSmoothScrolling(): boolean;
        set enableSmoothScrolling(val: boolean);
        get enable_spatial_navigation(): boolean;
        set enable_spatial_navigation(val: boolean);
        get enableSpatialNavigation(): boolean;
        set enableSpatialNavigation(val: boolean);
        get enable_tabs_to_links(): boolean;
        set enable_tabs_to_links(val: boolean);
        get enableTabsToLinks(): boolean;
        set enableTabsToLinks(val: boolean);
        get enable_webaudio(): boolean;
        set enable_webaudio(val: boolean);
        get enableWebaudio(): boolean;
        set enableWebaudio(val: boolean);
        get enable_webgl(): boolean;
        set enable_webgl(val: boolean);
        get enableWebgl(): boolean;
        set enableWebgl(val: boolean);
        get enable_webrtc(): boolean;
        set enable_webrtc(val: boolean);
        get enableWebrtc(): boolean;
        set enableWebrtc(val: boolean);
        get enable_write_console_messages_to_stdout(): boolean;
        set enable_write_console_messages_to_stdout(val: boolean);
        get enableWriteConsoleMessagesToStdout(): boolean;
        set enableWriteConsoleMessagesToStdout(val: boolean);
        get enable_xss_auditor(): boolean;
        set enable_xss_auditor(val: boolean);
        get enableXssAuditor(): boolean;
        set enableXssAuditor(val: boolean);
        get fantasy_font_family(): string;
        set fantasy_font_family(val: string);
        get fantasyFontFamily(): string;
        set fantasyFontFamily(val: string);
        get hardware_acceleration_policy(): HardwareAccelerationPolicy;
        set hardware_acceleration_policy(val: HardwareAccelerationPolicy);
        get hardwareAccelerationPolicy(): HardwareAccelerationPolicy;
        set hardwareAccelerationPolicy(val: HardwareAccelerationPolicy);
        get javascript_can_access_clipboard(): boolean;
        set javascript_can_access_clipboard(val: boolean);
        get javascriptCanAccessClipboard(): boolean;
        set javascriptCanAccessClipboard(val: boolean);
        get javascript_can_open_windows_automatically(): boolean;
        set javascript_can_open_windows_automatically(val: boolean);
        get javascriptCanOpenWindowsAutomatically(): boolean;
        set javascriptCanOpenWindowsAutomatically(val: boolean);
        get load_icons_ignoring_image_load_setting(): boolean;
        set load_icons_ignoring_image_load_setting(val: boolean);
        get loadIconsIgnoringImageLoadSetting(): boolean;
        set loadIconsIgnoringImageLoadSetting(val: boolean);
        get math_font_family(): string | null;
        set math_font_family(val: string | null);
        get mathFontFamily(): string | null;
        set mathFontFamily(val: string | null);
        get media_content_types_requiring_hardware_support(): string;
        set media_content_types_requiring_hardware_support(val: string);
        get mediaContentTypesRequiringHardwareSupport(): string;
        set mediaContentTypesRequiringHardwareSupport(val: string);
        get media_playback_allows_inline(): boolean;
        set media_playback_allows_inline(val: boolean);
        get mediaPlaybackAllowsInline(): boolean;
        set mediaPlaybackAllowsInline(val: boolean);
        get media_playback_requires_user_gesture(): boolean;
        set media_playback_requires_user_gesture(val: boolean);
        get mediaPlaybackRequiresUserGesture(): boolean;
        set mediaPlaybackRequiresUserGesture(val: boolean);
        get minimum_font_size(): number;
        set minimum_font_size(val: number);
        get minimumFontSize(): number;
        set minimumFontSize(val: number);
        get monospace_font_family(): string;
        set monospace_font_family(val: string);
        get monospaceFontFamily(): string;
        set monospaceFontFamily(val: string);
        get pictograph_font_family(): string;
        set pictograph_font_family(val: string);
        get pictographFontFamily(): string;
        set pictographFontFamily(val: string);
        get print_backgrounds(): boolean;
        set print_backgrounds(val: boolean);
        get printBackgrounds(): boolean;
        set printBackgrounds(val: boolean);
        get sans_serif_font_family(): string;
        set sans_serif_font_family(val: string);
        get sansSerifFontFamily(): string;
        set sansSerifFontFamily(val: string);
        get serif_font_family(): string;
        set serif_font_family(val: string);
        get serifFontFamily(): string;
        set serifFontFamily(val: string);
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);
        get webrtc_udp_ports_range(): string;
        set webrtc_udp_ports_range(val: string);
        get webrtcUdpPortsRange(): string;
        set webrtcUdpPortsRange(val: string);
        get zoom_text_only(): boolean;
        set zoom_text_only(val: boolean);
        get zoomTextOnly(): boolean;
        set zoomTextOnly(val: boolean);
        $signals: Settings.SignalSignatures;
        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Settings;
        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static font_size_to_pixels(points: number): number;
        static font_size_to_points(pixels: number): number;
        static get_all_features(): FeatureList;
        static get_development_features(): FeatureList;
        static get_experimental_features(): FeatureList;
        apply_from_key_file(key_file: GLib.KeyFile, group_name: string): boolean;
        get_allow_file_access_from_file_urls(): boolean;
        get_allow_modal_dialogs(): boolean;
        get_allow_top_navigation_to_data_urls(): boolean;
        get_allow_universal_access_from_file_urls(): boolean;
        get_auto_load_images(): boolean;
        get_cursive_font_family(): string;
        get_default_charset(): string;
        get_default_font_family(): string;
        get_default_font_size(): number;
        get_default_monospace_font_size(): number;
        get_disable_web_security(): boolean;
        get_draw_compositing_indicators(): boolean;
        get_enable_2d_canvas_acceleration(): boolean;
        get_enable_accelerated_2d_canvas(): boolean;
        get_enable_back_forward_navigation_gestures(): boolean;
        get_enable_caret_browsing(): boolean;
        get_enable_developer_extras(): boolean;
        get_enable_dns_prefetching(): boolean;
        get_enable_encrypted_media(): boolean;
        get_enable_frame_flattening(): boolean;
        get_enable_fullscreen(): boolean;
        get_enable_html5_database(): boolean;
        get_enable_html5_local_storage(): boolean;
        get_enable_hyperlink_auditing(): boolean;
        get_enable_java(): boolean;
        get_enable_javascript(): boolean;
        get_enable_javascript_markup(): boolean;
        get_enable_media(): boolean;
        get_enable_media_capabilities(): boolean;
        get_enable_media_stream(): boolean;
        get_enable_mediasource(): boolean;
        get_enable_mock_capture_devices(): boolean;
        get_enable_offline_web_application_cache(): boolean;
        get_enable_page_cache(): boolean;
        get_enable_plugins(): boolean;
        get_enable_private_browsing(): boolean;
        get_enable_resizable_text_areas(): boolean;
        get_enable_site_specific_quirks(): boolean;
        get_enable_smooth_scrolling(): boolean;
        get_enable_spatial_navigation(): boolean;
        get_enable_tabs_to_links(): boolean;
        get_enable_webaudio(): boolean;
        get_enable_webgl(): boolean;
        get_enable_webrtc(): boolean;
        get_enable_write_console_messages_to_stdout(): boolean;
        get_enable_xss_auditor(): boolean;
        get_fantasy_font_family(): string;
        get_feature_enabled(feature: Feature): boolean;
        get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
        get_javascript_can_access_clipboard(): boolean;
        get_javascript_can_open_windows_automatically(): boolean;
        get_load_icons_ignoring_image_load_setting(): boolean;
        get_math_font_family(): string | null;
        get_media_content_types_requiring_hardware_support(): string;
        get_media_playback_allows_inline(): boolean;
        get_media_playback_requires_user_gesture(): boolean;
        get_minimum_font_size(): number;
        get_monospace_font_family(): string;
        get_pictograph_font_family(): string;
        get_print_backgrounds(): boolean;
        get_sans_serif_font_family(): string;
        get_serif_font_family(): string;
        get_user_agent(): string;
        get_webrtc_udp_ports_range(): string;
        get_zoom_text_only(): boolean;
        set_allow_file_access_from_file_urls(allowed: boolean): void;
        set_allow_modal_dialogs(allowed: boolean): void;
        set_allow_top_navigation_to_data_urls(allowed: boolean): void;
        set_allow_universal_access_from_file_urls(allowed: boolean): void;
        set_auto_load_images(enabled: boolean): void;
        set_cursive_font_family(cursive_font_family: string): void;
        set_default_charset(default_charset: string): void;
        set_default_font_family(default_font_family: string): void;
        set_default_font_size(font_size: number): void;
        set_default_monospace_font_size(font_size: number): void;
        set_disable_web_security(disabled: boolean): void;
        set_draw_compositing_indicators(enabled: boolean): void;
        set_enable_2d_canvas_acceleration(enabled: boolean): void;
        set_enable_accelerated_2d_canvas(enabled: boolean): void;
        set_enable_back_forward_navigation_gestures(enabled: boolean): void;
        set_enable_caret_browsing(enabled: boolean): void;
        set_enable_developer_extras(enabled: boolean): void;
        set_enable_dns_prefetching(enabled: boolean): void;
        set_enable_encrypted_media(enabled: boolean): void;
        set_enable_frame_flattening(enabled: boolean): void;
        set_enable_fullscreen(enabled: boolean): void;
        set_enable_html5_database(enabled: boolean): void;
        set_enable_html5_local_storage(enabled: boolean): void;
        set_enable_hyperlink_auditing(enabled: boolean): void;
        set_enable_java(enabled: boolean): void;
        set_enable_javascript(enabled: boolean): void;
        set_enable_javascript_markup(enabled: boolean): void;
        set_enable_media(enabled: boolean): void;
        set_enable_media_capabilities(enabled: boolean): void;
        set_enable_media_stream(enabled: boolean): void;
        set_enable_mediasource(enabled: boolean): void;
        set_enable_mock_capture_devices(enabled: boolean): void;
        set_enable_offline_web_application_cache(enabled: boolean): void;
        set_enable_page_cache(enabled: boolean): void;
        set_enable_plugins(enabled: boolean): void;
        set_enable_private_browsing(enabled: boolean): void;
        set_enable_resizable_text_areas(enabled: boolean): void;
        set_enable_site_specific_quirks(enabled: boolean): void;
        set_enable_smooth_scrolling(enabled: boolean): void;
        set_enable_spatial_navigation(enabled: boolean): void;
        set_enable_tabs_to_links(enabled: boolean): void;
        set_enable_webaudio(enabled: boolean): void;
        set_enable_webgl(enabled: boolean): void;
        set_enable_webrtc(enabled: boolean): void;
        set_enable_write_console_messages_to_stdout(enabled: boolean): void;
        set_enable_xss_auditor(enabled: boolean): void;
        set_fantasy_font_family(fantasy_font_family: string): void;
        set_feature_enabled(feature: Feature, enabled: boolean): void;
        set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void;
        set_javascript_can_access_clipboard(enabled: boolean): void;
        set_javascript_can_open_windows_automatically(enabled: boolean): void;
        set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
        set_math_font_family(math_font_family: string | null): void;
        set_media_content_types_requiring_hardware_support(content_types: string | null): void;
        set_media_playback_allows_inline(enabled: boolean): void;
        set_media_playback_requires_user_gesture(enabled: boolean): void;
        set_minimum_font_size(font_size: number): void;
        set_monospace_font_family(monospace_font_family: string): void;
        set_pictograph_font_family(pictograph_font_family: string): void;
        set_print_backgrounds(print_backgrounds: boolean): void;
        set_sans_serif_font_family(sans_serif_font_family: string): void;
        set_serif_font_family(serif_font_family: string): void;
        set_user_agent(user_agent: string | null): void;
        set_user_agent_with_application_details(application_name: string | null, application_version: string | null): void;
        set_webrtc_udp_ports_range(udp_port_range: string): void;
        set_zoom_text_only(zoom_text_only: boolean): void;
    }
    namespace URIRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }
    class URIRequest extends GObject.Object {
        static $gtype: GObject.GType<URIRequest>;
        get uri(): string;
        set uri(val: string);
        $signals: URIRequest.SignalSignatures;
        constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](uri: string): URIRequest;
        connect<K extends keyof URIRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URIRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_http_headers(): Soup.MessageHeaders;
        get_http_method(): string;
        get_uri(): string;
        set_uri(uri: string): void;
    }
    namespace URIResponse {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::content-length": (pspec: GObject.ParamSpec) => void;
            "notify::http-headers": (pspec: GObject.ParamSpec) => void;
            "notify::mime-type": (pspec: GObject.ParamSpec) => void;
            "notify::status-code": (pspec: GObject.ParamSpec) => void;
            "notify::suggested-filename": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_length: bigint | number;
            contentLength: bigint | number;
            http_headers: Soup.MessageHeaders;
            httpHeaders: Soup.MessageHeaders;
            mime_type: string;
            mimeType: string;
            status_code: number;
            statusCode: number;
            suggested_filename: string;
            suggestedFilename: string;
            uri: string;
        }
    }
    class URIResponse extends GObject.Object {
        static $gtype: GObject.GType<URIResponse>;
        get content_length(): number;
        get contentLength(): number;
        get http_headers(): Soup.MessageHeaders;
        get httpHeaders(): Soup.MessageHeaders;
        get mime_type(): string;
        get mimeType(): string;
        get status_code(): number;
        get statusCode(): number;
        get suggested_filename(): string;
        get suggestedFilename(): string;
        get uri(): string;
        $signals: URIResponse.SignalSignatures;
        constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof URIResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIResponse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URIResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content_length(): number;
        get_http_headers(): Soup.MessageHeaders;
        get_mime_type(): string;
        get_status_code(): number;
        get_suggested_filename(): string;
        get_uri(): string;
    }
    namespace URISchemeRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class URISchemeRequest extends GObject.Object {
        static $gtype: GObject.GType<URISchemeRequest>;
        $signals: URISchemeRequest.SignalSignatures;
        constructor(properties?: Partial<URISchemeRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof URISchemeRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URISchemeRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URISchemeRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URISchemeRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URISchemeRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URISchemeRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        finish(stream: Gio.InputStream, stream_length: bigint | number, content_type: string | null): void;
        finish_error(error: GLib.Error): void;
        finish_with_response(response: URISchemeResponse): void;
        get_http_body(): Gio.InputStream;
        get_http_headers(): Soup.MessageHeaders;
        get_http_method(): string;
        get_path(): string;
        get_scheme(): string;
        get_uri(): string;
        get_web_view(): WebView;
    }
    namespace URISchemeResponse {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::stream": (pspec: GObject.ParamSpec) => void;
            "notify::stream-length": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: Gio.InputStream;
            stream_length: bigint | number;
            streamLength: bigint | number;
        }
    }
    class URISchemeResponse extends GObject.Object {
        static $gtype: GObject.GType<URISchemeResponse>;
        set stream(val: Gio.InputStream);
        set stream_length(val: bigint | number);
        set streamLength(val: bigint | number);
        $signals: URISchemeResponse.SignalSignatures;
        constructor(properties?: Partial<URISchemeResponse.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](input_stream: Gio.InputStream, stream_length: bigint | number): URISchemeResponse;
        connect<K extends keyof URISchemeResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URISchemeResponse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URISchemeResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URISchemeResponse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URISchemeResponse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URISchemeResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_content_type(content_type: string): void;
        set_http_headers(headers: Soup.MessageHeaders): void;
        set_status(status_code: number, reason_phrase: string | null): void;
    }
    namespace UserContentFilterStore {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
        }
    }
    class UserContentFilterStore extends GObject.Object {
        static $gtype: GObject.GType<UserContentFilterStore>;
        get path(): string;
        $signals: UserContentFilterStore.SignalSignatures;
        constructor(properties?: Partial<UserContentFilterStore.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](storage_path: string): UserContentFilterStore;
        connect<K extends keyof UserContentFilterStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserContentFilterStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserContentFilterStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserContentFilterStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserContentFilterStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserContentFilterStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        fetch_identifiers(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>;
        fetch_identifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch_identifiers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;
        fetch_identifiers_finish(result: Gio.AsyncResult): string[];
        get_path(): string;
        load(identifier: string, cancellable: Gio.Cancellable | null): globalThis.Promise<UserContentFilter>;
        load(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load(identifier: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserContentFilter> | void;
        load_finish(result: Gio.AsyncResult): UserContentFilter;
        remove(identifier: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        remove(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        remove(identifier: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        remove_finish(result: Gio.AsyncResult): boolean;
        save(identifier: string, source: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): globalThis.Promise<UserContentFilter>;
        save(identifier: string, source: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save(identifier: string, source: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserContentFilter> | void;
        save_finish(result: Gio.AsyncResult): UserContentFilter;
        save_from_file(identifier: string, file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<UserContentFilter>;
        save_from_file(identifier: string, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save_from_file(identifier: string, file: Gio.File, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserContentFilter> | void;
        save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
    }
    namespace UserContentManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "script-message-received": (arg0: JavascriptResult) => void;
            "script-message-with-reply-received": (arg0: JavaScriptCore.Value, arg1: ScriptMessageReply) => boolean | void;
            [key: `script-message-received::${string}`]: (arg0: JavascriptResult) => void;
            [key: `script-message-with-reply-received::${string}`]: (arg0: JavaScriptCore.Value, arg1: ScriptMessageReply) => boolean | void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class UserContentManager extends GObject.Object {
        static $gtype: GObject.GType<UserContentManager>;
        $signals: UserContentManager.SignalSignatures;
        constructor(properties?: Partial<UserContentManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): UserContentManager;
        connect<K extends keyof UserContentManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserContentManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserContentManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserContentManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserContentManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserContentManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_filter(filter: UserContentFilter): void;
        add_script(script: UserScript): void;
        add_style_sheet(stylesheet: UserStyleSheet): void;
        register_script_message_handler(name: string): boolean;
        register_script_message_handler_in_world(name: string, world_name: string): boolean;
        register_script_message_handler_with_reply(name: string, world_name: string | null): boolean;
        remove_all_filters(): void;
        remove_all_scripts(): void;
        remove_all_style_sheets(): void;
        remove_filter(filter: UserContentFilter): void;
        remove_filter_by_id(filter_id: string): void;
        remove_script(script: UserScript): void;
        remove_style_sheet(stylesheet: UserStyleSheet): void;
        unregister_script_message_handler(name: string): void;
        unregister_script_message_handler_in_world(name: string, world_name: string): void;
    }
    namespace UserMediaPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::is-for-audio-device": (pspec: GObject.ParamSpec) => void;
            "notify::is-for-video-device": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {
            is_for_audio_device: boolean;
            isForAudioDevice: boolean;
            is_for_video_device: boolean;
            isForVideoDevice: boolean;
        }
    }
    class UserMediaPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<UserMediaPermissionRequest>;
        get is_for_audio_device(): boolean;
        get isForAudioDevice(): boolean;
        get is_for_video_device(): boolean;
        get isForVideoDevice(): boolean;
        $signals: UserMediaPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<UserMediaPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof UserMediaPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMediaPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserMediaPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMediaPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserMediaPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserMediaPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace UserMessage {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::fd-list": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parameters": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            fd_list: Gio.UnixFDList | null;
            fdList: Gio.UnixFDList | null;
            name: string;
            parameters: GLib.Variant | null;
        }
    }
    class UserMessage extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<UserMessage>;
        get fd_list(): Gio.UnixFDList | null;
        get fdList(): Gio.UnixFDList | null;
        get name(): string;
        get parameters(): GLib.Variant | null;
        $signals: UserMessage.SignalSignatures;
        constructor(properties?: Partial<UserMessage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, parameters: GLib.Variant | null): UserMessage;
        static new_with_fd_list(name: string, parameters: GLib.Variant | null, fd_list: Gio.UnixFDList | null): UserMessage;
        connect<K extends keyof UserMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserMessage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_fd_list(): Gio.UnixFDList | null;
        get_name(): string;
        get_parameters(): GLib.Variant | null;
        send_reply(reply: UserMessage): void;
    }
    namespace WebContext {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "automation-started": (arg0: AutomationSession) => void;
            "download-started": (arg0: Download) => void;
            "initialize-notification-permissions": () => void;
            "initialize-web-extensions": () => void;
            "user-message-received": (arg0: UserMessage) => boolean | void;
            "notify::local-storage-directory": (pspec: GObject.ParamSpec) => void;
            "notify::memory-pressure-settings": (pspec: GObject.ParamSpec) => void;
            "notify::process-swap-on-cross-site-navigation-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::time-zone-override": (pspec: GObject.ParamSpec) => void;
            "notify::use-system-appearance-for-scrollbars": (pspec: GObject.ParamSpec) => void;
            "notify::website-data-manager": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            local_storage_directory: string;
            localStorageDirectory: string;
            memory_pressure_settings: MemoryPressureSettings;
            memoryPressureSettings: MemoryPressureSettings;
            process_swap_on_cross_site_navigation_enabled: boolean;
            processSwapOnCrossSiteNavigationEnabled: boolean;
            time_zone_override: string;
            timeZoneOverride: string;
            use_system_appearance_for_scrollbars: boolean;
            useSystemAppearanceForScrollbars: boolean;
            website_data_manager: WebsiteDataManager;
            websiteDataManager: WebsiteDataManager;
        }
    }
    class WebContext extends GObject.Object {
        static $gtype: GObject.GType<WebContext>;
        get local_storage_directory(): string;
        get localStorageDirectory(): string;
        set memory_pressure_settings(val: MemoryPressureSettings);
        set memoryPressureSettings(val: MemoryPressureSettings);
        get process_swap_on_cross_site_navigation_enabled(): boolean;
        get processSwapOnCrossSiteNavigationEnabled(): boolean;
        get time_zone_override(): string;
        get timeZoneOverride(): string;
        get use_system_appearance_for_scrollbars(): boolean;
        set use_system_appearance_for_scrollbars(val: boolean);
        get useSystemAppearanceForScrollbars(): boolean;
        set useSystemAppearanceForScrollbars(val: boolean);
        get website_data_manager(): WebsiteDataManager;
        get websiteDataManager(): WebsiteDataManager;
        $signals: WebContext.SignalSignatures;
        constructor(properties?: Partial<WebContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): WebContext;
        static new_ephemeral(): WebContext;
        static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;
        connect<K extends keyof WebContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): WebContext;
        vfunc_automation_started(session: AutomationSession): void;
        vfunc_download_started(download: Download): void;
        vfunc_initialize_notification_permissions(): void;
        vfunc_initialize_web_extensions(): void;
        vfunc_user_message_received(message: UserMessage): boolean;
        add_path_to_sandbox(path: string, read_only: boolean): void;
        allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;
        clear_cache(): void;
        download_uri(uri: string): Download;
        get_cache_model(): CacheModel;
        get_cookie_manager(): CookieManager;
        get_favicon_database(): FaviconDatabase;
        get_favicon_database_directory(): string;
        get_geolocation_manager(): GeolocationManager;
        get_plugins(cancellable: Gio.Cancellable | null): globalThis.Promise<Plugin[]>;
        get_plugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_plugins(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Plugin[]> | void;
        get_plugins_finish(result: Gio.AsyncResult): Plugin[];
        get_process_model(): ProcessModel;
        get_sandbox_enabled(): boolean;
        get_security_manager(): SecurityManager;
        get_spell_checking_enabled(): boolean;
        get_spell_checking_languages(): string[];
        get_time_zone_override(): string;
        get_tls_errors_policy(): TLSErrorsPolicy;
        get_use_system_appearance_for_scrollbars(): boolean;
        get_web_process_count_limit(): number;
        get_website_data_manager(): WebsiteDataManager;
        initialize_notification_permissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void;
        is_automation_allowed(): boolean;
        is_ephemeral(): boolean;
        prefetch_dns(hostname: string): void;
        register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void;
        send_message_to_all_extensions(message: UserMessage): void;
        set_additional_plugins_directory(directory: string): void;
        set_automation_allowed(allowed: boolean): void;
        set_cache_model(cache_model: CacheModel): void;
        set_disk_cache_directory(directory: string): void;
        set_favicon_database_directory(path: string | null): void;
        set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings | null): void;
        set_preferred_languages(languages: string[] | null): void;
        set_process_model(process_model: ProcessModel): void;
        set_sandbox_enabled(enabled: boolean): void;
        set_spell_checking_enabled(enabled: boolean): void;
        set_spell_checking_languages(languages: string[]): void;
        set_tls_errors_policy(policy: TLSErrorsPolicy): void;
        set_use_system_appearance_for_scrollbars(enabled: boolean): void;
        set_web_extensions_directory(directory: string): void;
        set_web_extensions_initialization_user_data(user_data: GLib.Variant): void;
        set_web_process_count_limit(limit: number): void;
    }
    namespace WebInspector {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            attach: () => boolean | void;
            "bring-to-front": () => boolean | void;
            closed: () => void;
            detach: () => boolean | void;
            "open-window": () => boolean | void;
            "notify::attached-height": (pspec: GObject.ParamSpec) => void;
            "notify::can-attach": (pspec: GObject.ParamSpec) => void;
            "notify::inspected-uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attached_height: number;
            attachedHeight: number;
            can_attach: boolean;
            canAttach: boolean;
            inspected_uri: string;
            inspectedUri: string;
        }
    }
    class WebInspector extends GObject.Object {
        static $gtype: GObject.GType<WebInspector>;
        get attached_height(): number;
        get attachedHeight(): number;
        get can_attach(): boolean;
        get canAttach(): boolean;
        get inspected_uri(): string;
        get inspectedUri(): string;
        $signals: WebInspector.SignalSignatures;
        constructor(properties?: Partial<WebInspector.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebInspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebInspector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebInspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebInspector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebInspector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebInspector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        attach(): void;
        close(): void;
        detach(): void;
        get_attached_height(): number;
        get_can_attach(): boolean;
        get_inspected_uri(): string;
        get_web_view(): WebViewBase;
        is_attached(): boolean;
        show(): void;
    }
    namespace WebResource {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            failed: (arg0: GLib.Error) => void;
            "failed-with-tls-errors": (arg0: Gio.TlsCertificate, arg1: Gio.TlsCertificateFlags) => void;
            finished: () => void;
            "received-data": (arg0: number) => void;
            "sent-request": (arg0: URIRequest, arg1: URIResponse) => void;
            "notify::response": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            response: URIResponse;
            uri: string;
        }
    }
    class WebResource extends GObject.Object {
        static $gtype: GObject.GType<WebResource>;
        get response(): URIResponse;
        get uri(): string;
        $signals: WebResource.SignalSignatures;
        constructor(properties?: Partial<WebResource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebResource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebResource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebResource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebResource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebResource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebResource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_data(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        get_data(...args: never[]): any;
        get_data_finish(result: Gio.AsyncResult): Uint8Array;
        get_response(): URIResponse;
        get_uri(): string;
    }
    namespace WebView {
        interface SignalSignatures extends WebViewBase.SignalSignatures {
            authenticate: (arg0: AuthenticationRequest) => boolean | void;
            close: () => void;
            "context-menu": (arg0: ContextMenu, arg1: Gdk.Event, arg2: HitTestResult) => boolean | void;
            "context-menu-dismissed": () => void;
            create: (arg0: NavigationAction) => Gtk.Widget;
            "decide-policy": (arg0: PolicyDecision, arg1: PolicyDecisionType) => boolean | void;
            "enter-fullscreen": () => boolean | void;
            "insecure-content-detected": (arg0: InsecureContentEvent) => void;
            "leave-fullscreen": () => boolean | void;
            "load-changed": (arg0: LoadEvent) => void;
            "load-failed": (arg0: LoadEvent, arg1: string, arg2: GLib.Error) => boolean | void;
            "load-failed-with-tls-errors": (arg0: string, arg1: Gio.TlsCertificate, arg2: Gio.TlsCertificateFlags) => boolean | void;
            "mouse-target-changed": (arg0: HitTestResult, arg1: number) => void;
            "permission-request": (arg0: PermissionRequest) => boolean | void;
            print: (arg0: PrintOperation) => boolean | void;
            "query-permission-state": (arg0: PermissionStateQuery) => boolean | void;
            "ready-to-show": () => void;
            "resource-load-started": (arg0: WebResource, arg1: URIRequest) => void;
            "run-as-modal": () => void;
            "run-color-chooser": (arg0: ColorChooserRequest) => boolean | void;
            "run-file-chooser": (arg0: FileChooserRequest) => boolean | void;
            "script-dialog": (arg0: ScriptDialog) => boolean | void;
            "show-notification": (arg0: Notification) => boolean | void;
            "show-option-menu": (arg0: OptionMenu, arg1: Gdk.Event, arg2: Gdk.Rectangle) => boolean | void;
            "submit-form": (arg0: FormSubmissionRequest) => void;
            "user-message-received": (arg0: UserMessage) => boolean | void;
            "web-process-crashed": () => boolean | void;
            "web-process-terminated": (arg0: WebProcessTerminationReason) => void;
            "notify::automation-presentation-type": (pspec: GObject.ParamSpec) => void;
            "notify::camera-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::default-content-security-policy": (pspec: GObject.ParamSpec) => void;
            "notify::display-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::estimated-load-progress": (pspec: GObject.ParamSpec) => void;
            "notify::favicon": (pspec: GObject.ParamSpec) => void;
            "notify::is-controlled-by-automation": (pspec: GObject.ParamSpec) => void;
            "notify::is-ephemeral": (pspec: GObject.ParamSpec) => void;
            "notify::is-immersive-mode-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::is-loading": (pspec: GObject.ParamSpec) => void;
            "notify::is-muted": (pspec: GObject.ParamSpec) => void;
            "notify::is-playing-audio": (pspec: GObject.ParamSpec) => void;
            "notify::is-web-process-responsive": (pspec: GObject.ParamSpec) => void;
            "notify::microphone-capture-state": (pspec: GObject.ParamSpec) => void;
            "notify::page-id": (pspec: GObject.ParamSpec) => void;
            "notify::related-view": (pspec: GObject.ParamSpec) => void;
            "notify::settings": (pspec: GObject.ParamSpec) => void;
            "notify::theme-color": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::user-content-manager": (pspec: GObject.ParamSpec) => void;
            "notify::web-context": (pspec: GObject.ParamSpec) => void;
            "notify::web-extension-mode": (pspec: GObject.ParamSpec) => void;
            "notify::website-policies": (pspec: GObject.ParamSpec) => void;
            "notify::zoom-level": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends WebViewBase.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            automation_presentation_type: AutomationBrowsingContextPresentation;
            automationPresentationType: AutomationBrowsingContextPresentation;
            camera_capture_state: MediaCaptureState;
            cameraCaptureState: MediaCaptureState;
            default_content_security_policy: string | null;
            defaultContentSecurityPolicy: string | null;
            display_capture_state: MediaCaptureState;
            displayCaptureState: MediaCaptureState;
            editable: boolean;
            estimated_load_progress: number;
            estimatedLoadProgress: number;
            favicon: never;
            is_controlled_by_automation: boolean;
            isControlledByAutomation: boolean;
            is_ephemeral: boolean;
            isEphemeral: boolean;
            is_immersive_mode_enabled: boolean;
            isImmersiveModeEnabled: boolean;
            is_loading: boolean;
            isLoading: boolean;
            is_muted: boolean;
            isMuted: boolean;
            is_playing_audio: boolean;
            isPlayingAudio: boolean;
            is_web_process_responsive: boolean;
            isWebProcessResponsive: boolean;
            microphone_capture_state: MediaCaptureState;
            microphoneCaptureState: MediaCaptureState;
            page_id: bigint | number;
            pageId: bigint | number;
            related_view: WebView;
            relatedView: WebView;
            settings: Settings;
            theme_color: Gdk.RGBA;
            themeColor: Gdk.RGBA;
            title: string;
            uri: string;
            user_content_manager: UserContentManager;
            userContentManager: UserContentManager;
            web_context: WebContext;
            webContext: WebContext;
            web_extension_mode: WebExtensionMode;
            webExtensionMode: WebExtensionMode;
            website_policies: WebsitePolicies;
            websitePolicies: WebsitePolicies;
            zoom_level: number;
            zoomLevel: number;
        }
    }
    class WebView extends WebViewBase implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WebView>;
        get automation_presentation_type(): AutomationBrowsingContextPresentation;
        get automationPresentationType(): AutomationBrowsingContextPresentation;
        get camera_capture_state(): MediaCaptureState;
        set camera_capture_state(val: MediaCaptureState);
        get cameraCaptureState(): MediaCaptureState;
        set cameraCaptureState(val: MediaCaptureState);
        get default_content_security_policy(): string | null;
        get defaultContentSecurityPolicy(): string | null;
        get display_capture_state(): MediaCaptureState;
        set display_capture_state(val: MediaCaptureState);
        get displayCaptureState(): MediaCaptureState;
        set displayCaptureState(val: MediaCaptureState);
        get editable(): boolean;
        set editable(val: boolean);
        get estimated_load_progress(): number;
        get estimatedLoadProgress(): number;
        get favicon(): null;
        get is_controlled_by_automation(): boolean;
        get isControlledByAutomation(): boolean;
        get is_ephemeral(): boolean;
        get isEphemeral(): boolean;
        get is_immersive_mode_enabled(): boolean;
        get isImmersiveModeEnabled(): boolean;
        get is_loading(): boolean;
        get isLoading(): boolean;
        get is_muted(): boolean;
        set is_muted(val: boolean);
        get isMuted(): boolean;
        set isMuted(val: boolean);
        get is_playing_audio(): boolean;
        get isPlayingAudio(): boolean;
        get is_web_process_responsive(): boolean;
        get isWebProcessResponsive(): boolean;
        get microphone_capture_state(): MediaCaptureState;
        set microphone_capture_state(val: MediaCaptureState);
        get microphoneCaptureState(): MediaCaptureState;
        set microphoneCaptureState(val: MediaCaptureState);
        get page_id(): number;
        get pageId(): number;
        set related_view(val: WebView);
        set relatedView(val: WebView);
        set settings(val: Settings);
        get theme_color(): Gdk.RGBA;
        get themeColor(): Gdk.RGBA;
        get title(): string;
        get uri(): string;
        get user_content_manager(): UserContentManager;
        get userContentManager(): UserContentManager;
        get web_context(): WebContext;
        get webContext(): WebContext;
        get web_extension_mode(): WebExtensionMode;
        get webExtensionMode(): WebExtensionMode;
        get website_policies(): WebsitePolicies;
        get websitePolicies(): WebsitePolicies;
        get zoom_level(): number;
        set zoom_level(val: number);
        get zoomLevel(): number;
        set zoomLevel(val: number);
        $signals: WebView.SignalSignatures;
        constructor(properties?: Partial<WebView.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): WebView;
        static new_with_context(context: WebContext): WebView;
        static new_with_related_view(web_view: WebView): WebView;
        static new_with_settings(settings: Settings): WebView;
        static new_with_user_content_manager(user_content_manager: UserContentManager): WebView;
        connect<K extends keyof WebView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_authenticate(request: AuthenticationRequest): boolean;
        vfunc_close(): void;
        vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;
        vfunc_context_menu_dismissed(): void;
        vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
        vfunc_enter_fullscreen(): boolean;
        vfunc_insecure_content_detected(event: InsecureContentEvent): void;
        vfunc_leave_fullscreen(): boolean;
        vfunc_load_changed(load_event: LoadEvent): void;
        vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;
        vfunc_load_failed_with_tls_errors(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
        vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;
        vfunc_permission_request(permission_request: PermissionRequest): boolean;
        vfunc_print(print_operation: PrintOperation): boolean;
        vfunc_query_permission_state(query: PermissionStateQuery): boolean;
        vfunc_ready_to_show(): void;
        vfunc_resource_load_started(resource: WebResource, request: URIRequest): void;
        vfunc_run_as_modal(): void;
        vfunc_run_color_chooser(request: ColorChooserRequest): boolean;
        vfunc_run_file_chooser(request: FileChooserRequest): boolean;
        vfunc_script_dialog(dialog: ScriptDialog): boolean;
        vfunc_show_notification(notification: Notification): boolean;
        vfunc_show_option_menu(menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): boolean;
        vfunc_submit_form(request: FormSubmissionRequest): void;
        vfunc_user_message_received(message: UserMessage): boolean;
        vfunc_web_process_crashed(): boolean;
        vfunc_web_process_terminated(reason: WebProcessTerminationReason): void;
        call_async_javascript_function(body: string, length: bigint | number, _arguments: GLib.Variant | null, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<JavaScriptCore.Value>;
        call_async_javascript_function(body: string, length: bigint | number, _arguments: GLib.Variant | null, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_async_javascript_function(body: string, length: bigint | number, _arguments: GLib.Variant | null, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<JavaScriptCore.Value> | void;
        call_async_javascript_function_finish(result: Gio.AsyncResult): JavaScriptCore.Value;
        can_execute_editing_command(command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        can_execute_editing_command(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        can_execute_editing_command(command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
        can_go_back(): boolean;
        can_go_forward(): boolean;
        can_show_mime_type(mime_type: string): boolean;
        download_uri(uri: string): Download;
        evaluate_javascript(script: string, length: bigint | number, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<JavaScriptCore.Value>;
        evaluate_javascript(script: string, length: bigint | number, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        evaluate_javascript(script: string, length: bigint | number, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<JavaScriptCore.Value> | void;
        evaluate_javascript_finish(result: Gio.AsyncResult): JavaScriptCore.Value;
        execute_editing_command(command: string): void;
        execute_editing_command_with_argument(command: string, argument: string): void;
        get_automation_presentation_type(): AutomationBrowsingContextPresentation;
        get_back_forward_list(): BackForwardList;
        get_background_color(): Gdk.RGBA;
        get_camera_capture_state(): MediaCaptureState;
        get_context(): WebContext;
        get_custom_charset(): string;
        get_default_content_security_policy(): string | null;
        get_display_capture_state(): MediaCaptureState;
        get_editor_state(): EditorState;
        get_estimated_load_progress(): number;
        get_favicon(): cairo.Surface;
        get_find_controller(): FindController;
        get_input_method_context(): InputMethodContext | null;
        get_inspector(): WebInspector;
        get_is_muted(): boolean;
        get_is_web_process_responsive(): boolean;
        get_main_resource(): WebResource;
        get_microphone_capture_state(): MediaCaptureState;
        get_page_id(): number;
        get_session_state(): WebViewSessionState;
        get_settings(): Settings;
        get_settings(...args: never[]): any;
        get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null): globalThis.Promise<cairo.Surface>;
        get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<cairo.Surface> | void;
        get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
        get_theme_color(): [boolean, Gdk.RGBA];
        get_title(): string;
        get_tls_info(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];
        get_uri(): string;
        get_user_content_manager(): UserContentManager;
        get_web_extension_mode(): WebExtensionMode;
        get_website_data_manager(): WebsiteDataManager;
        get_website_policies(): WebsitePolicies;
        get_window_properties(): WindowProperties;
        get_zoom_level(): number;
        go_back(): void;
        go_forward(): void;
        go_to_back_forward_list_item(list_item: BackForwardListItem): void;
        is_editable(): boolean;
        leave_immersive_mode(): void;
        load_alternate_html(content: string, content_uri: string, base_uri: string | null): void;
        load_bytes(bytes: GLib.Bytes | Uint8Array, mime_type: string | null, encoding: string | null, base_uri: string | null): void;
        load_html(content: string, base_uri: string | null): void;
        load_plain_text(plain_text: string): void;
        load_request(request: URIRequest): void;
        load_uri(uri: string): void;
        reload(): void;
        reload_bypass_cache(): void;
        restore_session_state(state: WebViewSessionState): void;
        run_async_javascript_function_in_world(body: string, _arguments: GLib.Variant, world_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        run_javascript(script: string, cancellable: Gio.Cancellable | null): globalThis.Promise<JavascriptResult>;
        run_javascript(script: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        run_javascript(script: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<JavascriptResult> | void;
        run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
        run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable | null): globalThis.Promise<JavascriptResult>;
        run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<JavascriptResult> | void;
        run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;
        run_javascript_in_world(script: string, world_name: string, cancellable: Gio.Cancellable | null): globalThis.Promise<JavascriptResult>;
        run_javascript_in_world(script: string, world_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        run_javascript_in_world(script: string, world_name: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<JavascriptResult> | void;
        run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
        save(save_mode: SaveMode, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        save(save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save(save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.InputStream> | void;
        save_finish(result: Gio.AsyncResult): Gio.InputStream;
        save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        send_message_to_page(message: UserMessage, cancellable: Gio.Cancellable | null): globalThis.Promise<UserMessage>;
        send_message_to_page(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_message_to_page(message: UserMessage, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserMessage> | void;
        send_message_to_page_finish(result: Gio.AsyncResult): UserMessage;
        set_background_color(rgba: Gdk.RGBA): void;
        set_camera_capture_state(state: MediaCaptureState): void;
        set_cors_allowlist(allowlist: string[] | null): void;
        set_custom_charset(charset: string | null): void;
        set_display_capture_state(state: MediaCaptureState): void;
        set_editable(editable: boolean): void;
        set_input_method_context(context: InputMethodContext | null): void;
        set_is_muted(muted: boolean): void;
        set_microphone_capture_state(state: MediaCaptureState): void;
        set_settings(settings: Settings): void;
        set_zoom_level(zoom_level: number): void;
        stop_loading(): void;
        terminate_web_process(): void;
        try_close(): void;
    }
    namespace WebViewBase {
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }
    class WebViewBase extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WebViewBase>;
        $signals: WebViewBase.SignalSignatures;
        constructor(properties?: Partial<WebViewBase.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebViewBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebViewBase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebViewBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebViewBase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebViewBase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebViewBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace WebsiteDataAccessPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class WebsiteDataAccessPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>;
        $signals: WebsiteDataAccessPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<WebsiteDataAccessPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsiteDataAccessPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsiteDataAccessPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsiteDataAccessPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_current_domain(): string;
        get_requesting_domain(): string;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    namespace WebsiteDataManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::base-cache-directory": (pspec: GObject.ParamSpec) => void;
            "notify::base-data-directory": (pspec: GObject.ParamSpec) => void;
            "notify::disk-cache-directory": (pspec: GObject.ParamSpec) => void;
            "notify::dom-cache-directory": (pspec: GObject.ParamSpec) => void;
            "notify::hsts-cache-directory": (pspec: GObject.ParamSpec) => void;
            "notify::indexeddb-directory": (pspec: GObject.ParamSpec) => void;
            "notify::is-ephemeral": (pspec: GObject.ParamSpec) => void;
            "notify::itp-directory": (pspec: GObject.ParamSpec) => void;
            "notify::local-storage-directory": (pspec: GObject.ParamSpec) => void;
            "notify::offline-application-cache-directory": (pspec: GObject.ParamSpec) => void;
            "notify::origin-storage-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::service-worker-registrations-directory": (pspec: GObject.ParamSpec) => void;
            "notify::total-storage-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::websql-directory": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_cache_directory: string | null;
            baseCacheDirectory: string | null;
            base_data_directory: string | null;
            baseDataDirectory: string | null;
            disk_cache_directory: string | null;
            diskCacheDirectory: string | null;
            dom_cache_directory: string | null;
            domCacheDirectory: string | null;
            hsts_cache_directory: string | null;
            hstsCacheDirectory: string | null;
            indexeddb_directory: string | null;
            indexeddbDirectory: string | null;
            is_ephemeral: boolean;
            isEphemeral: boolean;
            itp_directory: string | null;
            itpDirectory: string | null;
            local_storage_directory: string | null;
            localStorageDirectory: string | null;
            offline_application_cache_directory: string | null;
            offlineApplicationCacheDirectory: string | null;
            origin_storage_ratio: number;
            originStorageRatio: number;
            service_worker_registrations_directory: string | null;
            serviceWorkerRegistrationsDirectory: string | null;
            total_storage_ratio: number;
            totalStorageRatio: number;
            websql_directory: string | null;
            websqlDirectory: string | null;
        }
    }
    class WebsiteDataManager extends GObject.Object {
        static $gtype: GObject.GType<WebsiteDataManager>;
        get base_cache_directory(): string | null;
        get baseCacheDirectory(): string | null;
        get base_data_directory(): string | null;
        get baseDataDirectory(): string | null;
        get disk_cache_directory(): string | null;
        get diskCacheDirectory(): string | null;
        get dom_cache_directory(): string | null;
        get domCacheDirectory(): string | null;
        get hsts_cache_directory(): string | null;
        get hstsCacheDirectory(): string | null;
        get indexeddb_directory(): string | null;
        get indexeddbDirectory(): string | null;
        get is_ephemeral(): boolean;
        get isEphemeral(): boolean;
        get itp_directory(): string | null;
        get itpDirectory(): string | null;
        get local_storage_directory(): string | null;
        get localStorageDirectory(): string | null;
        get offline_application_cache_directory(): string | null;
        get offlineApplicationCacheDirectory(): string | null;
        set origin_storage_ratio(val: number);
        set originStorageRatio(val: number);
        get service_worker_registrations_directory(): string | null;
        get serviceWorkerRegistrationsDirectory(): string | null;
        set total_storage_ratio(val: number);
        set totalStorageRatio(val: number);
        get websql_directory(): string | null;
        get websqlDirectory(): string | null;
        $signals: WebsiteDataManager.SignalSignatures;
        constructor(properties?: Partial<WebsiteDataManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_ephemeral(): WebsiteDataManager;
        connect<K extends keyof WebsiteDataManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsiteDataManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsiteDataManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsiteDataManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsiteDataManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsiteDataManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static set_memory_pressure_settings(settings: MemoryPressureSettings): void;
        clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        clear_finish(result: Gio.AsyncResult): boolean;
        fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null): globalThis.Promise<WebsiteData[]>;
        fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<WebsiteData[]> | void;
        fetch_finish(result: Gio.AsyncResult): WebsiteData[];
        get_base_cache_directory(): string | null;
        get_base_data_directory(): string | null;
        get_cookie_manager(): CookieManager;
        get_disk_cache_directory(): string | null;
        get_dom_cache_directory(): string | null;
        get_hsts_cache_directory(): string | null;
        get_indexeddb_directory(): string | null;
        get_itp_directory(): string | null;
        get_itp_enabled(): boolean;
        get_itp_summary(cancellable: Gio.Cancellable | null): globalThis.Promise<ITPThirdParty[]>;
        get_itp_summary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_itp_summary(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ITPThirdParty[]> | void;
        get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[];
        get_local_storage_directory(): string | null;
        get_offline_application_cache_directory(): string | null;
        get_persistent_credential_storage_enabled(): boolean;
        get_service_worker_registrations_directory(): string | null;
        get_tls_errors_policy(): TLSErrorsPolicy;
        get_websql_directory(): string | null;
        remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        remove_finish(result: Gio.AsyncResult): boolean;
        set_itp_enabled(enabled: boolean): void;
        set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings | null): void;
        set_persistent_credential_storage_enabled(enabled: boolean): void;
        set_tls_errors_policy(policy: TLSErrorsPolicy): void;
    }
    namespace WebsitePolicies {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::autoplay": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            autoplay: AutoplayPolicy;
        }
    }
    class WebsitePolicies extends GObject.Object {
        static $gtype: GObject.GType<WebsitePolicies>;
        get autoplay(): AutoplayPolicy;
        $signals: WebsitePolicies.SignalSignatures;
        constructor(properties?: Partial<WebsitePolicies.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): WebsitePolicies;
        connect<K extends keyof WebsitePolicies.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsitePolicies.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsitePolicies.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebsitePolicies.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsitePolicies.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebsitePolicies.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_autoplay_policy(): AutoplayPolicy;
    }
    namespace WindowProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::locationbar-visible": (pspec: GObject.ParamSpec) => void;
            "notify::menubar-visible": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::scrollbars-visible": (pspec: GObject.ParamSpec) => void;
            "notify::statusbar-visible": (pspec: GObject.ParamSpec) => void;
            "notify::toolbar-visible": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fullscreen: boolean;
            geometry: Gdk.Rectangle;
            locationbar_visible: boolean;
            locationbarVisible: boolean;
            menubar_visible: boolean;
            menubarVisible: boolean;
            resizable: boolean;
            scrollbars_visible: boolean;
            scrollbarsVisible: boolean;
            statusbar_visible: boolean;
            statusbarVisible: boolean;
            toolbar_visible: boolean;
            toolbarVisible: boolean;
        }
    }
    class WindowProperties extends GObject.Object {
        static $gtype: GObject.GType<WindowProperties>;
        get fullscreen(): boolean;
        get geometry(): Gdk.Rectangle;
        get locationbar_visible(): boolean;
        get locationbarVisible(): boolean;
        get menubar_visible(): boolean;
        get menubarVisible(): boolean;
        get resizable(): boolean;
        get scrollbars_visible(): boolean;
        get scrollbarsVisible(): boolean;
        get statusbar_visible(): boolean;
        get statusbarVisible(): boolean;
        get toolbar_visible(): boolean;
        get toolbarVisible(): boolean;
        $signals: WindowProperties.SignalSignatures;
        constructor(properties?: Partial<WindowProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WindowProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WindowProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WindowProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WindowProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_fullscreen(): boolean;
        get_geometry(): Gdk.Rectangle;
        get_locationbar_visible(): boolean;
        get_menubar_visible(): boolean;
        get_resizable(): boolean;
        get_scrollbars_visible(): boolean;
        get_statusbar_visible(): boolean;
        get_toolbar_visible(): boolean;
    }
    namespace XRPermissionRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }
    class XRPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<XRPermissionRequest>;
        $signals: XRPermissionRequest.SignalSignatures;
        constructor(properties?: Partial<XRPermissionRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof XRPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XRPermissionRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XRPermissionRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XRPermissionRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XRPermissionRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XRPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_consent_optional_features(): XRSessionFeatures;
        get_consent_required_features(): XRSessionFeatures;
        get_granted_features(): XRSessionFeatures;
        get_optional_features_requested(): XRSessionFeatures;
        get_required_features_requested(): XRSessionFeatures;
        get_security_origin(): SecurityOrigin;
        get_session_mode(): XRSessionMode;
        set_granted_optional_features(granted: XRSessionFeatures): void;
        allow(): void;
        deny(): void;
        vfunc_allow(): void;
        vfunc_deny(): void;
    }
    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ApplicationInfo;
        get_name(): string;
        get_version(): [number, number, number];
        ref(): ApplicationInfo;
        set_name(name: string): void;
        set_version(major: bigint | number, minor: bigint | number, micro: bigint | number): void;
        unref(): void;
    }
    type AuthenticationRequestClass = typeof AuthenticationRequest;
    abstract class AuthenticationRequestPrivate {
        static $gtype: GObject.GType<AuthenticationRequestPrivate>;
    }
    type AutomationSessionClass = typeof AutomationSession;
    abstract class AutomationSessionPrivate {
        static $gtype: GObject.GType<AutomationSessionPrivate>;
    }
    type BackForwardListClass = typeof BackForwardList;
    type BackForwardListItemClass = typeof BackForwardListItem;
    abstract class BackForwardListItemPrivate {
        static $gtype: GObject.GType<BackForwardListItemPrivate>;
    }
    abstract class BackForwardListPrivate {
        static $gtype: GObject.GType<BackForwardListPrivate>;
    }
    type ClipboardPermissionRequestClass = typeof ClipboardPermissionRequest;
    abstract class ClipboardPermissionRequestPrivate {
        static $gtype: GObject.GType<ClipboardPermissionRequestPrivate>;
    }
    type ColorChooserRequestClass = typeof ColorChooserRequest;
    abstract class ColorChooserRequestPrivate {
        static $gtype: GObject.GType<ColorChooserRequestPrivate>;
    }
    type ContextMenuClass = typeof ContextMenu;
    type ContextMenuItemClass = typeof ContextMenuItem;
    abstract class ContextMenuItemPrivate {
        static $gtype: GObject.GType<ContextMenuItemPrivate>;
    }
    abstract class ContextMenuPrivate {
        static $gtype: GObject.GType<ContextMenuPrivate>;
    }
    type CookieManagerClass = typeof CookieManager;
    abstract class CookieManagerPrivate {
        static $gtype: GObject.GType<CookieManagerPrivate>;
    }
    class Credential {
        static $gtype: GObject.GType<Credential>;
        constructor(username: string, password: string, persistence: CredentialPersistence);
        static ["new"](username: string, password: string, persistence: CredentialPersistence): Credential;
        static new_for_certificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential;
        static new_for_certificate_pin(pin: string, persistence: CredentialPersistence): Credential;
        copy(): Credential;
        free(): void;
        get_certificate(): Gio.TlsCertificate;
        get_password(): string;
        get_persistence(): CredentialPersistence;
        get_username(): string;
        has_password(): boolean;
    }
    type DeviceInfoPermissionRequestClass = typeof DeviceInfoPermissionRequest;
    abstract class DeviceInfoPermissionRequestPrivate {
        static $gtype: GObject.GType<DeviceInfoPermissionRequestPrivate>;
    }
    type DownloadClass = typeof Download;
    abstract class DownloadPrivate {
        static $gtype: GObject.GType<DownloadPrivate>;
    }
    type EditorStateClass = typeof EditorState;
    abstract class EditorStatePrivate {
        static $gtype: GObject.GType<EditorStatePrivate>;
    }
    type FaviconDatabaseClass = typeof FaviconDatabase;
    abstract class FaviconDatabasePrivate {
        static $gtype: GObject.GType<FaviconDatabasePrivate>;
    }
    abstract class Feature {
        static $gtype: GObject.GType<Feature>;
        get_category(): string;
        get_default_value(): boolean;
        get_details(): string | null;
        get_identifier(): string;
        get_name(): string | null;
        get_status(): FeatureStatus;
        ref(): Feature;
        unref(): void;
    }
    abstract class FeatureList {
        static $gtype: GObject.GType<FeatureList>;
        get(index: bigint | number): Feature;
        get_length(): number;
        ref(): FeatureList;
        unref(): void;
    }
    type FileChooserRequestClass = typeof FileChooserRequest;
    abstract class FileChooserRequestPrivate {
        static $gtype: GObject.GType<FileChooserRequestPrivate>;
    }
    type FindControllerClass = typeof FindController;
    abstract class FindControllerPrivate {
        static $gtype: GObject.GType<FindControllerPrivate>;
    }
    type FormSubmissionRequestClass = typeof FormSubmissionRequest;
    abstract class FormSubmissionRequestPrivate {
        static $gtype: GObject.GType<FormSubmissionRequestPrivate>;
    }
    type GeolocationManagerClass = typeof GeolocationManager;
    abstract class GeolocationManagerPrivate {
        static $gtype: GObject.GType<GeolocationManagerPrivate>;
    }
    type GeolocationPermissionRequestClass = typeof GeolocationPermissionRequest;
    abstract class GeolocationPermissionRequestPrivate {
        static $gtype: GObject.GType<GeolocationPermissionRequestPrivate>;
    }
    class GeolocationPosition {
        static $gtype: GObject.GType<GeolocationPosition>;
        constructor(latitude: number, longitude: number, accuracy: number);
        static ["new"](latitude: number, longitude: number, accuracy: number): GeolocationPosition;
        copy(): GeolocationPosition;
        free(): void;
        set_altitude(altitude: number): void;
        set_altitude_accuracy(altitude_accuracy: number): void;
        set_heading(heading: number): void;
        set_speed(speed: number): void;
        set_timestamp(timestamp: bigint | number): void;
    }
    type HitTestResultClass = typeof HitTestResult;
    abstract class HitTestResultPrivate {
        static $gtype: GObject.GType<HitTestResultPrivate>;
    }
    abstract class ITPFirstParty {
        static $gtype: GObject.GType<ITPFirstParty>;
        get_domain(): string;
        get_last_update_time(): GLib.DateTime;
        get_website_data_access_allowed(): boolean;
        ref(): ITPFirstParty;
        unref(): void;
    }
    abstract class ITPThirdParty {
        static $gtype: GObject.GType<ITPThirdParty>;
        get_domain(): string;
        get_first_parties(): ITPFirstParty[];
        ref(): ITPThirdParty;
        unref(): void;
    }
    type InputMethodContextClass = typeof InputMethodContext;
    abstract class InputMethodContextPrivate {
        static $gtype: GObject.GType<InputMethodContextPrivate>;
    }
    class InputMethodUnderline {
        static $gtype: GObject.GType<InputMethodUnderline>;
        constructor(start_offset: number, end_offset: number);
        static ["new"](start_offset: number, end_offset: number): InputMethodUnderline;
        copy(): InputMethodUnderline;
        free(): void;
        set_color(rgba: Gdk.RGBA | null): void;
    }
    type InstallMissingMediaPluginsPermissionRequestClass = typeof InstallMissingMediaPluginsPermissionRequest;
    abstract class InstallMissingMediaPluginsPermissionRequestPrivate {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequestPrivate>;
    }
    abstract class JavascriptResult {
        static $gtype: GObject.GType<JavascriptResult>;
        get_js_value(): JavaScriptCore.Value;
        ref(): JavascriptResult;
        unref(): void;
    }
    type MediaKeySystemPermissionRequestClass = typeof MediaKeySystemPermissionRequest;
    abstract class MediaKeySystemPermissionRequestPrivate {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequestPrivate>;
    }
    class MemoryPressureSettings {
        static $gtype: GObject.GType<MemoryPressureSettings>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MemoryPressureSettings;
        copy(): MemoryPressureSettings;
        free(): void;
        get_conservative_threshold(): number;
        get_kill_threshold(): number;
        get_memory_limit(): number;
        get_poll_interval(): number;
        get_strict_threshold(): number;
        set_conservative_threshold(value: number): void;
        set_kill_threshold(value: number): void;
        set_memory_limit(memory_limit: number): void;
        set_poll_interval(value: number): void;
        set_strict_threshold(value: number): void;
    }
    abstract class MimeInfo {
        static $gtype: GObject.GType<MimeInfo>;
        get_description(): string | null;
        get_extensions(): string[];
        get_mime_type(): string;
        ref(): MimeInfo;
        unref(): void;
    }
    abstract class NavigationAction {
        static $gtype: GObject.GType<NavigationAction>;
        copy(): NavigationAction;
        free(): void;
        get_frame_name(): string | null;
        get_modifiers(): number;
        get_mouse_button(): number;
        get_navigation_type(): NavigationType;
        get_request(): URIRequest;
        is_redirect(): boolean;
        is_user_gesture(): boolean;
    }
    type NavigationPolicyDecisionClass = typeof NavigationPolicyDecision;
    abstract class NavigationPolicyDecisionPrivate {
        static $gtype: GObject.GType<NavigationPolicyDecisionPrivate>;
    }
    class NetworkProxySettings {
        static $gtype: GObject.GType<NetworkProxySettings>;
        constructor(default_proxy_uri: string | null, ignore_hosts: string[] | null);
        static ["new"](default_proxy_uri: string | null, ignore_hosts: string[] | null): NetworkProxySettings;
        add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
        copy(): NetworkProxySettings;
        free(): void;
    }
    type NotificationClass = typeof Notification;
    type NotificationPermissionRequestClass = typeof NotificationPermissionRequest;
    abstract class NotificationPermissionRequestPrivate {
        static $gtype: GObject.GType<NotificationPermissionRequestPrivate>;
    }
    abstract class NotificationPrivate {
        static $gtype: GObject.GType<NotificationPrivate>;
    }
    type OptionMenuClass = typeof OptionMenu;
    abstract class OptionMenuItem {
        static $gtype: GObject.GType<OptionMenuItem>;
        copy(): OptionMenuItem;
        free(): void;
        get_label(): string;
        get_tooltip(): string;
        is_enabled(): boolean;
        is_group_child(): boolean;
        is_group_label(): boolean;
        is_selected(): boolean;
    }
    abstract class OptionMenuPrivate {
        static $gtype: GObject.GType<OptionMenuPrivate>;
    }
    type PermissionRequestIface = typeof PermissionRequest;
    abstract class PermissionStateQuery {
        static $gtype: GObject.GType<PermissionStateQuery>;
        finish(state: PermissionState): void;
        get_name(): string;
        get_security_origin(): SecurityOrigin;
        ref(): PermissionStateQuery;
        unref(): void;
    }
    type PluginClass = typeof Plugin;
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }
    type PointerLockPermissionRequestClass = typeof PointerLockPermissionRequest;
    abstract class PointerLockPermissionRequestPrivate {
        static $gtype: GObject.GType<PointerLockPermissionRequestPrivate>;
    }
    type PolicyDecisionClass = typeof PolicyDecision;
    abstract class PolicyDecisionPrivate {
        static $gtype: GObject.GType<PolicyDecisionPrivate>;
    }
    type PrintCustomWidgetClass = typeof PrintCustomWidget;
    abstract class PrintCustomWidgetPrivate {
        static $gtype: GObject.GType<PrintCustomWidgetPrivate>;
    }
    type PrintOperationClass = typeof PrintOperation;
    abstract class PrintOperationPrivate {
        static $gtype: GObject.GType<PrintOperationPrivate>;
    }
    type ResponsePolicyDecisionClass = typeof ResponsePolicyDecision;
    abstract class ResponsePolicyDecisionPrivate {
        static $gtype: GObject.GType<ResponsePolicyDecisionPrivate>;
    }
    abstract class ScriptDialog {
        static $gtype: GObject.GType<ScriptDialog>;
        close(): void;
        confirm_set_confirmed(confirmed: boolean): void;
        get_dialog_type(): ScriptDialogType;
        get_message(): string;
        prompt_get_default_text(): string;
        prompt_set_text(text: string): void;
        ref(): ScriptDialog;
        unref(): void;
    }
    abstract class ScriptMessageReply {
        static $gtype: GObject.GType<ScriptMessageReply>;
        ref(): ScriptMessageReply;
        return_error_message(error_message: string): void;
        return_value(reply_value: JavaScriptCore.Value): void;
        unref(): void;
    }
    type SecurityManagerClass = typeof SecurityManager;
    abstract class SecurityManagerPrivate {
        static $gtype: GObject.GType<SecurityManagerPrivate>;
    }
    class SecurityOrigin {
        static $gtype: GObject.GType<SecurityOrigin>;
        constructor(protocol: string, host: string, port: number);
        static ["new"](protocol: string, host: string, port: number): SecurityOrigin;
        static new_for_uri(uri: string): SecurityOrigin;
        get_host(): string | null;
        get_port(): number;
        get_protocol(): string | null;
        is_opaque(): boolean;
        ref(): SecurityOrigin;
        to_string(): string | null;
        unref(): void;
    }
    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
    }
    type URIRequestClass = typeof URIRequest;
    abstract class URIRequestPrivate {
        static $gtype: GObject.GType<URIRequestPrivate>;
    }
    type URIResponseClass = typeof URIResponse;
    abstract class URIResponsePrivate {
        static $gtype: GObject.GType<URIResponsePrivate>;
    }
    type URISchemeRequestClass = typeof URISchemeRequest;
    abstract class URISchemeRequestPrivate {
        static $gtype: GObject.GType<URISchemeRequestPrivate>;
    }
    type URISchemeResponseClass = typeof URISchemeResponse;
    abstract class URISchemeResponsePrivate {
        static $gtype: GObject.GType<URISchemeResponsePrivate>;
    }
    abstract class UserContentFilter {
        static $gtype: GObject.GType<UserContentFilter>;
        get_identifier(): string;
        ref(): UserContentFilter;
        unref(): void;
    }
    type UserContentFilterStoreClass = typeof UserContentFilterStore;
    abstract class UserContentFilterStorePrivate {
        static $gtype: GObject.GType<UserContentFilterStorePrivate>;
    }
    type UserContentManagerClass = typeof UserContentManager;
    abstract class UserContentManagerPrivate {
        static $gtype: GObject.GType<UserContentManagerPrivate>;
    }
    type UserMediaPermissionRequestClass = typeof UserMediaPermissionRequest;
    abstract class UserMediaPermissionRequestPrivate {
        static $gtype: GObject.GType<UserMediaPermissionRequestPrivate>;
    }
    type UserMessageClass = typeof UserMessage;
    abstract class UserMessagePrivate {
        static $gtype: GObject.GType<UserMessagePrivate>;
    }
    class UserScript {
        static $gtype: GObject.GType<UserScript>;
        constructor(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list: string[] | null, block_list: string[] | null);
        static ["new"](source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list: string[] | null, block_list: string[] | null): UserScript;
        static new_for_world(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string, allow_list: string[] | null, block_list: string[] | null): UserScript;
        ref(): UserScript;
        unref(): void;
    }
    class UserStyleSheet {
        static $gtype: GObject.GType<UserStyleSheet>;
        constructor(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list: string[] | null, block_list: string[] | null);
        static ["new"](source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list: string[] | null, block_list: string[] | null): UserStyleSheet;
        static new_for_world(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string, allow_list: string[] | null, block_list: string[] | null): UserStyleSheet;
        ref(): UserStyleSheet;
        unref(): void;
    }
    type WebContextClass = typeof WebContext;
    abstract class WebContextPrivate {
        static $gtype: GObject.GType<WebContextPrivate>;
    }
    type WebInspectorClass = typeof WebInspector;
    abstract class WebInspectorPrivate {
        static $gtype: GObject.GType<WebInspectorPrivate>;
    }
    type WebResourceClass = typeof WebResource;
    abstract class WebResourcePrivate {
        static $gtype: GObject.GType<WebResourcePrivate>;
    }
    type WebViewBaseClass = typeof WebViewBase;
    abstract class WebViewBasePrivate {
        static $gtype: GObject.GType<WebViewBasePrivate>;
    }
    type WebViewClass = typeof WebView;
    abstract class WebViewPrivate {
        static $gtype: GObject.GType<WebViewPrivate>;
    }
    class WebViewSessionState {
        static $gtype: GObject.GType<WebViewSessionState>;
        constructor(data: GLib.Bytes | Uint8Array);
        static ["new"](data: GLib.Bytes | Uint8Array): WebViewSessionState;
        ref(): WebViewSessionState;
        serialize(): GLib.Bytes;
        unref(): void;
    }
    abstract class WebsiteData {
        static $gtype: GObject.GType<WebsiteData>;
        get_name(): string;
        get_size(types: WebsiteDataTypes): number;
        get_types(): WebsiteDataTypes;
        ref(): WebsiteData;
        unref(): void;
    }
    type WebsiteDataAccessPermissionRequestClass = typeof WebsiteDataAccessPermissionRequest;
    abstract class WebsiteDataAccessPermissionRequestPrivate {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequestPrivate>;
    }
    type WebsiteDataManagerClass = typeof WebsiteDataManager;
    abstract class WebsiteDataManagerPrivate {
        static $gtype: GObject.GType<WebsiteDataManagerPrivate>;
    }
    type WebsitePoliciesClass = typeof WebsitePolicies;
    abstract class WebsitePoliciesPrivate {
        static $gtype: GObject.GType<WebsitePoliciesPrivate>;
    }
    type WindowPropertiesClass = typeof WindowProperties;
    abstract class WindowPropertiesPrivate {
        static $gtype: GObject.GType<WindowPropertiesPrivate>;
    }
    type XRPermissionRequestClass = typeof XRPermissionRequest;
    abstract class XRPermissionRequestPrivate {
        static $gtype: GObject.GType<XRPermissionRequestPrivate>;
    }
    namespace PermissionRequest {
        interface Interface {
            vfunc_allow(): void;
            vfunc_deny(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PermissionRequestNamespace {
        $gtype: GObject.GType<PermissionRequest>;
        prototype: PermissionRequest;
    }
    interface PermissionRequest extends GObject.Object, PermissionRequest.Interface {
        allow(): void;
        deny(): void;
    }
    export const PermissionRequest: PermissionRequestNamespace & {
        new (): PermissionRequest; 
    };
    const __name__: string;
    const __version__: string;
}
export default WebKit2;
}
declare module 'gi://WebKit2' {
    import WebKit241 from 'gi://WebKit2?version=4.1';
    export default WebKit241;
}
