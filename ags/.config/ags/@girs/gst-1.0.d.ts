declare module 'gi://Gst?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Gst {
    export namespace BufferingMode {
        export const $gtype: GObject.GType<BufferingMode>;
    }
    enum BufferingMode {
        STREAM,
        DOWNLOAD,
        TIMESHIFT,
        LIVE,
    }
    export namespace BusSyncReply {
        export const $gtype: GObject.GType<BusSyncReply>;
    }
    enum BusSyncReply {
        DROP,
        PASS,
        ASYNC,
    }
    export namespace CapsIntersectMode {
        export const $gtype: GObject.GType<CapsIntersectMode>;
    }
    enum CapsIntersectMode {
        ZIG_ZAG,
        FIRST,
    }
    export namespace ClockEntryType {
        export const $gtype: GObject.GType<ClockEntryType>;
    }
    enum ClockEntryType {
        SINGLE,
        PERIODIC,
    }
    export namespace ClockReturn {
        export const $gtype: GObject.GType<ClockReturn>;
    }
    enum ClockReturn {
        OK,
        EARLY,
        UNSCHEDULED,
        BUSY,
        BADTIME,
        ERROR,
        UNSUPPORTED,
        DONE,
    }
    export namespace ClockType {
        export const $gtype: GObject.GType<ClockType>;
    }
    enum ClockType {
        REALTIME,
        MONOTONIC,
        OTHER,
        TAI,
    }
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static TOO_LAZY: number;
        static NOT_IMPLEMENTED: number;
        static STATE_CHANGE: number;
        static PAD: number;
        static THREAD: number;
        static NEGOTIATION: number;
        static EVENT: number;
        static SEEK: number;
        static CAPS: number;
        static TAG: number;
        static MISSING_PLUGIN: number;
        static CLOCK: number;
        static DISABLED: number;
        static NUM_ERRORS: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace DebugColorMode {
        export const $gtype: GObject.GType<DebugColorMode>;
    }
    enum DebugColorMode {
        OFF,
        ON,
        UNIX,
    }
    export namespace DebugLevel {
        export const $gtype: GObject.GType<DebugLevel>;
    }
    enum DebugLevel {
        NONE,
        ERROR,
        WARNING,
        FIXME,
        INFO,
        DEBUG,
        LOG,
        TRACE,
        MEMDUMP,
        COUNT,
    }
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }
    enum EventType {
        UNKNOWN,
        FLUSH_START,
        FLUSH_STOP,
        STREAM_START,
        CAPS,
        SEGMENT,
        STREAM_COLLECTION,
        TAG,
        BUFFERSIZE,
        SINK_MESSAGE,
        STREAM_GROUP_DONE,
        EOS,
        TOC,
        PROTECTION,
        SEGMENT_DONE,
        GAP,
        INSTANT_RATE_CHANGE,
        QOS,
        SEEK,
        NAVIGATION,
        LATENCY,
        STEP,
        RECONFIGURE,
        TOC_SELECT,
        SELECT_STREAMS,
        INSTANT_RATE_SYNC_TIME,
        CUSTOM_UPSTREAM,
        CUSTOM_DOWNSTREAM,
        CUSTOM_DOWNSTREAM_OOB,
        CUSTOM_DOWNSTREAM_STICKY,
        CUSTOM_BOTH,
        CUSTOM_BOTH_OOB,
    }
    export namespace FlowReturn {
        export const $gtype: GObject.GType<FlowReturn>;
    }
    enum FlowReturn {
        CUSTOM_SUCCESS_2,
        CUSTOM_SUCCESS_1,
        CUSTOM_SUCCESS,
        OK,
        NOT_LINKED,
        FLUSHING,
        EOS,
        NOT_NEGOTIATED,
        ERROR,
        NOT_SUPPORTED,
        CUSTOM_ERROR,
        CUSTOM_ERROR_1,
        CUSTOM_ERROR_2,
    }
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }
    enum Format {
        UNDEFINED,
        DEFAULT,
        BYTES,
        TIME,
        BUFFERS,
        PERCENT,
    }
    export namespace IteratorItem {
        export const $gtype: GObject.GType<IteratorItem>;
    }
    enum IteratorItem {
        SKIP,
        PASS,
        END,
    }
    export namespace IteratorResult {
        export const $gtype: GObject.GType<IteratorResult>;
    }
    enum IteratorResult {
        DONE,
        OK,
        RESYNC,
        ERROR,
    }
    class LibraryError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static TOO_LAZY: number;
        static INIT: number;
        static SHUTDOWN: number;
        static SETTINGS: number;
        static ENCODE: number;
        static NUM_ERRORS: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace PadDirection {
        export const $gtype: GObject.GType<PadDirection>;
    }
    enum PadDirection {
        UNKNOWN,
        SRC,
        SINK,
    }
    export namespace PadLinkReturn {
        export const $gtype: GObject.GType<PadLinkReturn>;
    }
    enum PadLinkReturn {
        OK,
        WRONG_HIERARCHY,
        WAS_LINKED,
        WRONG_DIRECTION,
        NOFORMAT,
        NOSCHED,
        REFUSED,
    }
    export namespace PadMode {
        export const $gtype: GObject.GType<PadMode>;
    }
    enum PadMode {
        NONE,
        PUSH,
        PULL,
    }
    export namespace PadPresence {
        export const $gtype: GObject.GType<PadPresence>;
    }
    enum PadPresence {
        ALWAYS,
        SOMETIMES,
        REQUEST,
    }
    export namespace PadProbeReturn {
        export const $gtype: GObject.GType<PadProbeReturn>;
    }
    enum PadProbeReturn {
        DROP,
        OK,
        REMOVE,
        PASS,
        HANDLED,
    }
    class ParseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static SYNTAX: number;
        static NO_SUCH_ELEMENT: number;
        static NO_SUCH_PROPERTY: number;
        static LINK: number;
        static COULD_NOT_SET_PROPERTY: number;
        static EMPTY_BIN: number;
        static EMPTY: number;
        static DELAYED_LINK: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class PluginError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static MODULE: number;
        static DEPENDENCIES: number;
        static NAME_MISMATCH: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace ProgressType {
        export const $gtype: GObject.GType<ProgressType>;
    }
    enum ProgressType {
        START,
        CONTINUE,
        COMPLETE,
        CANCELED,
        ERROR,
    }
    export namespace PromiseResult {
        export const $gtype: GObject.GType<PromiseResult>;
    }
    enum PromiseResult {
        PENDING,
        INTERRUPTED,
        REPLIED,
        EXPIRED,
    }
    export namespace QOSType {
        export const $gtype: GObject.GType<QOSType>;
    }
    enum QOSType {
        OVERFLOW,
        UNDERFLOW,
        THROTTLE,
    }
    export namespace QueryType {
        export const $gtype: GObject.GType<QueryType>;
    }
    enum QueryType {
        UNKNOWN,
        POSITION,
        DURATION,
        LATENCY,
        JITTER,
        RATE,
        SEEKING,
        SEGMENT,
        CONVERT,
        FORMATS,
        BUFFERING,
        CUSTOM,
        URI,
        ALLOCATION,
        SCHEDULING,
        ACCEPT_CAPS,
        CAPS,
        DRAIN,
        CONTEXT,
        BITRATE,
        SELECTABLE,
    }
    export namespace Rank {
        export const $gtype: GObject.GType<Rank>;
    }
    enum Rank {
        NONE,
        MARGINAL,
        SECONDARY,
        PRIMARY,
    }
    class ResourceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static TOO_LAZY: number;
        static NOT_FOUND: number;
        static BUSY: number;
        static OPEN_READ: number;
        static OPEN_WRITE: number;
        static OPEN_READ_WRITE: number;
        static CLOSE: number;
        static READ: number;
        static WRITE: number;
        static SEEK: number;
        static SYNC: number;
        static SETTINGS: number;
        static NO_SPACE_LEFT: number;
        static NOT_AUTHORIZED: number;
        static NUM_ERRORS: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace SearchMode {
        export const $gtype: GObject.GType<SearchMode>;
    }
    enum SearchMode {
        EXACT,
        BEFORE,
        AFTER,
    }
    export namespace SeekType {
        export const $gtype: GObject.GType<SeekType>;
    }
    enum SeekType {
        NONE,
        SET,
        END,
    }
    export namespace State {
        export const $gtype: GObject.GType<State>;
    }
    enum State {
        VOID_PENDING,
        NULL,
        READY,
        PAUSED,
        PLAYING,
    }
    export namespace StateChange {
        export const $gtype: GObject.GType<StateChange>;
    }
    enum StateChange {
        NULL_TO_READY,
        READY_TO_PAUSED,
        PAUSED_TO_PLAYING,
        PLAYING_TO_PAUSED,
        PAUSED_TO_READY,
        READY_TO_NULL,
        NULL_TO_NULL,
        READY_TO_READY,
        PAUSED_TO_PAUSED,
        PLAYING_TO_PLAYING,
    }
    export namespace StateChangeReturn {
        export const $gtype: GObject.GType<StateChangeReturn>;
    }
    enum StateChangeReturn {
        FAILURE,
        SUCCESS,
        ASYNC,
        NO_PREROLL,
    }
    class StreamError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static TOO_LAZY: number;
        static NOT_IMPLEMENTED: number;
        static TYPE_NOT_FOUND: number;
        static WRONG_TYPE: number;
        static CODEC_NOT_FOUND: number;
        static DECODE: number;
        static ENCODE: number;
        static DEMUX: number;
        static MUX: number;
        static FORMAT: number;
        static DECRYPT: number;
        static DECRYPT_NOKEY: number;
        static NUM_ERRORS: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace StreamStatusType {
        export const $gtype: GObject.GType<StreamStatusType>;
    }
    enum StreamStatusType {
        CREATE,
        ENTER,
        LEAVE,
        DESTROY,
        START,
        PAUSE,
        STOP,
    }
    export namespace StructureChangeType {
        export const $gtype: GObject.GType<StructureChangeType>;
    }
    enum StructureChangeType {
        LINK,
        UNLINK,
    }
    export namespace TagFlag {
        export const $gtype: GObject.GType<TagFlag>;
    }
    enum TagFlag {
        UNDEFINED,
        META,
        ENCODED,
        DECODED,
        COUNT,
    }
    export namespace TagMergeMode {
        export const $gtype: GObject.GType<TagMergeMode>;
    }
    enum TagMergeMode {
        UNDEFINED,
        REPLACE_ALL,
        REPLACE,
        APPEND,
        PREPEND,
        KEEP,
        KEEP_ALL,
        COUNT,
    }
    export namespace TagScope {
        export const $gtype: GObject.GType<TagScope>;
    }
    enum TagScope {
        STREAM,
        GLOBAL,
    }
    export namespace TaskState {
        export const $gtype: GObject.GType<TaskState>;
    }
    enum TaskState {
        STARTED,
        STOPPED,
        PAUSED,
    }
    export namespace TocEntryType {
        export const $gtype: GObject.GType<TocEntryType>;
    }
    enum TocEntryType {
        ANGLE,
        VERSION,
        EDITION,
        INVALID,
        TITLE,
        TRACK,
        CHAPTER,
    }
    export namespace TocLoopType {
        export const $gtype: GObject.GType<TocLoopType>;
    }
    enum TocLoopType {
        NONE,
        FORWARD,
        REVERSE,
        PING_PONG,
    }
    export namespace TocScope {
        export const $gtype: GObject.GType<TocScope>;
    }
    enum TocScope {
        GLOBAL,
        CURRENT,
    }
    export namespace TracerValueScope {
        export const $gtype: GObject.GType<TracerValueScope>;
    }
    enum TracerValueScope {
        PROCESS,
        THREAD,
        ELEMENT,
        PAD,
    }
    export namespace TypeFindProbability {
        export const $gtype: GObject.GType<TypeFindProbability>;
    }
    enum TypeFindProbability {
        NONE,
        MINIMUM,
        POSSIBLE,
        LIKELY,
        NEARLY_CERTAIN,
        MAXIMUM,
    }
    class URIError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNSUPPORTED_PROTOCOL: number;
        static BAD_URI: number;
        static BAD_STATE: number;
        static BAD_REFERENCE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace URIType {
        export const $gtype: GObject.GType<URIType>;
    }
    enum URIType {
        UNKNOWN,
        SINK,
        SRC,
    }
    const ALLOCATOR_SYSMEM: string;
    const BUFFER_COPY_ALL: BufferCopyFlags;
    const BUFFER_COPY_METADATA: BufferCopyFlags;
    const BUFFER_OFFSET_NONE: number;
    const CAN_INLINE: number;
    const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string;
    const CLOCK_TIME_NONE: ClockTime;
    const DEBUG_BG_MASK: number;
    const DEBUG_FG_MASK: number;
    const DEBUG_FORMAT_MASK: number;
    const ELEMENT_FACTORY_KLASS_DECODER: string;
    const ELEMENT_FACTORY_KLASS_DECRYPTOR: string;
    const ELEMENT_FACTORY_KLASS_DEMUXER: string;
    const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string;
    const ELEMENT_FACTORY_KLASS_ENCODER: string;
    const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string;
    const ELEMENT_FACTORY_KLASS_FORMATTER: string;
    const ELEMENT_FACTORY_KLASS_HARDWARE: string;
    const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string;
    const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string;
    const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string;
    const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string;
    const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string;
    const ELEMENT_FACTORY_KLASS_MUXER: string;
    const ELEMENT_FACTORY_KLASS_PARSER: string;
    const ELEMENT_FACTORY_KLASS_PAYLOADER: string;
    const ELEMENT_FACTORY_KLASS_SINK: string;
    const ELEMENT_FACTORY_KLASS_SRC: string;
    const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_HARDWARE: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_TIMESTAMPER: ElementFactoryListType;
    const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType;
    const ELEMENT_METADATA_AUTHOR: string;
    const ELEMENT_METADATA_DESCRIPTION: string;
    const ELEMENT_METADATA_DOC_URI: string;
    const ELEMENT_METADATA_ICON_NAME: string;
    const ELEMENT_METADATA_KLASS: string;
    const ELEMENT_METADATA_LONGNAME: string;
    const EVENT_NUM_SHIFT: number;
    const EVENT_TYPE_BOTH: EventTypeFlags;
    const FLAG_SET_MASK_EXACT: number;
    const FORMAT_PERCENT_MAX: number;
    const FORMAT_PERCENT_SCALE: number;
    const GROUP_ID_INVALID: number;
    const LICENSE_UNKNOWN: string;
    const LOCK_FLAG_READWRITE: LockFlags;
    const MAP_READWRITE: MapFlags;
    const META_TAG_MEMORY_REFERENCE_STR: string;
    const META_TAG_MEMORY_STR: string;
    const MSECOND: ClockTimeDiff;
    const NSECOND: ClockTimeDiff;
    const PARAM_CONDITIONALLY_AVAILABLE: number;
    const PARAM_CONTROLLABLE: number;
    const PARAM_DOC_SHOW_DEFAULT: number;
    const PARAM_MUTABLE_PAUSED: number;
    const PARAM_MUTABLE_PLAYING: number;
    const PARAM_MUTABLE_READY: number;
    const PARAM_USER_SHIFT: number;
    const PROTECTION_SYSTEM_ID_CAPS_FIELD: string;
    const PROTECTION_UNSPECIFIED_SYSTEM_ID: string;
    const QUERY_NUM_SHIFT: number;
    const QUERY_TYPE_BOTH: QueryTypeFlags;
    const SECOND: ClockTimeDiff;
    const SEGMENT_INSTANT_FLAGS: number;
    const SEQNUM_INVALID: number;
    const TAG_ALBUM: string;
    const TAG_ALBUM_ARTIST: string;
    const TAG_ALBUM_ARTIST_SORTNAME: string;
    const TAG_ALBUM_GAIN: string;
    const TAG_ALBUM_GAIN_R128: string;
    const TAG_ALBUM_PEAK: string;
    const TAG_ALBUM_SORTNAME: string;
    const TAG_ALBUM_VOLUME_COUNT: string;
    const TAG_ALBUM_VOLUME_NUMBER: string;
    const TAG_APPLICATION_DATA: string;
    const TAG_APPLICATION_NAME: string;
    const TAG_ARTIST: string;
    const TAG_ARTIST_SORTNAME: string;
    const TAG_ATTACHMENT: string;
    const TAG_AUDIO_CODEC: string;
    const TAG_BEATS_PER_MINUTE: string;
    const TAG_BITRATE: string;
    const TAG_CODEC: string;
    const TAG_COMMENT: string;
    const TAG_COMPOSER: string;
    const TAG_COMPOSER_SORTNAME: string;
    const TAG_CONDUCTOR: string;
    const TAG_CONTACT: string;
    const TAG_CONTAINER_FORMAT: string;
    const TAG_CONTAINER_SPECIFIC_TRACK_ID: string;
    const TAG_COPYRIGHT: string;
    const TAG_COPYRIGHT_URI: string;
    const TAG_DATE: string;
    const TAG_DATE_TIME: string;
    const TAG_DESCRIPTION: string;
    const TAG_DEVICE_MANUFACTURER: string;
    const TAG_DEVICE_MODEL: string;
    const TAG_DURATION: string;
    const TAG_ENCODED_BY: string;
    const TAG_ENCODER: string;
    const TAG_ENCODER_VERSION: string;
    const TAG_EXTENDED_COMMENT: string;
    const TAG_GENRE: string;
    const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string;
    const TAG_GEO_LOCATION_CITY: string;
    const TAG_GEO_LOCATION_COUNTRY: string;
    const TAG_GEO_LOCATION_ELEVATION: string;
    const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string;
    const TAG_GEO_LOCATION_LATITUDE: string;
    const TAG_GEO_LOCATION_LONGITUDE: string;
    const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string;
    const TAG_GEO_LOCATION_MOVEMENT_SPEED: string;
    const TAG_GEO_LOCATION_NAME: string;
    const TAG_GEO_LOCATION_SUBLOCATION: string;
    const TAG_GROUPING: string;
    const TAG_HOMEPAGE: string;
    const TAG_IMAGE: string;
    const TAG_IMAGE_ORIENTATION: string;
    const TAG_INTERPRETED_BY: string;
    const TAG_ISRC: string;
    const TAG_KEYWORDS: string;
    const TAG_LANGUAGE_CODE: string;
    const TAG_LANGUAGE_NAME: string;
    const TAG_LICENSE: string;
    const TAG_LICENSE_URI: string;
    const TAG_LOCATION: string;
    const TAG_LYRICS: string;
    const TAG_MAXIMUM_BITRATE: string;
    const TAG_MIDI_BASE_NOTE: string;
    const TAG_MINIMUM_BITRATE: string;
    const TAG_NOMINAL_BITRATE: string;
    const TAG_ORGANIZATION: string;
    const TAG_PERFORMER: string;
    const TAG_PREVIEW_IMAGE: string;
    const TAG_PRIVATE_DATA: string;
    const TAG_PUBLISHER: string;
    const TAG_REFERENCE_LEVEL: string;
    const TAG_SERIAL: string;
    const TAG_SHOW_EPISODE_NUMBER: string;
    const TAG_SHOW_NAME: string;
    const TAG_SHOW_SEASON_NUMBER: string;
    const TAG_SHOW_SORTNAME: string;
    const TAG_SUBTITLE_CODEC: string;
    const TAG_TITLE: string;
    const TAG_TITLE_SORTNAME: string;
    const TAG_TRACK_COUNT: string;
    const TAG_TRACK_GAIN: string;
    const TAG_TRACK_GAIN_R128: string;
    const TAG_TRACK_NUMBER: string;
    const TAG_TRACK_PEAK: string;
    const TAG_USER_RATING: string;
    const TAG_VERSION: string;
    const TAG_VIDEO_CODEC: string;
    const TASK_POOL_CONTEXT_TYPE: string;
    const TOC_REPEAT_COUNT_INFINITE: number;
    const URI_NO_PORT: number;
    const USECOND: ClockTimeDiff;
    const VALUE_EQUAL: number;
    const VALUE_GREATER_THAN: number;
    const VALUE_LESS_THAN: number;
    const VALUE_UNORDERED: number;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    const VERSION_NANO: number;
    function buffer_get_max_memory(): number;
    function buffer_list_replace(old_list: BufferList | null, new_list: BufferList | null): [boolean, BufferList | null];
    function buffer_list_take(old_list: BufferList, new_list: BufferList | null): [boolean, BufferList];
    function call_async(func: CallAsyncFunc): void;
    function caps_features_from_string(features: string): CapsFeatures | null;
    function caps_from_string(string: string): Caps | null;
    function check_version(major: number, minor: number, micro: number): boolean;
    function context_replace(old_context: Context, new_context: Context | null): [boolean, Context];
    function core_error_quark(): GLib.Quark;
    function cpuid_supports_arm_neon(): boolean;
    function cpuid_supports_arm_neon64(): boolean;
    function cpuid_supports_x86_3dnow(): boolean;
    function cpuid_supports_x86_avx(): boolean;
    function cpuid_supports_x86_avx2(): boolean;
    function cpuid_supports_x86_mmx(): boolean;
    function cpuid_supports_x86_mmxext(): boolean;
    function cpuid_supports_x86_sse2(): boolean;
    function cpuid_supports_x86_sse3(): boolean;
    function cpuid_supports_x86_sse4_1(): boolean;
    function cpuid_supports_x86_sse4_2(): boolean;
    function cpuid_supports_x86_ssse3(): boolean;
    function debug_add_log_function(func: LogFunction): void;
    function debug_add_ring_buffer_logger(max_size_per_thread: number, thread_timeout: number): void;
    function debug_bin_to_dot_data(bin: Bin, details: DebugGraphDetails): string;
    function debug_bin_to_dot_file(bin: Bin, details: DebugGraphDetails, file_name: string): void;
    function debug_bin_to_dot_file_with_ts(bin: Bin, details: DebugGraphDetails, file_name: string): void;
    function debug_construct_term_color(colorinfo: number): string;
    function debug_construct_win_color(colorinfo: number): number;
    function debug_get_all_categories(): DebugCategory[];
    function debug_get_color_mode(): DebugColorMode;
    function debug_get_default_threshold(): DebugLevel;
    function debug_get_stack_trace(flags: StackTraceFlags): string | null;
    function debug_is_active(): boolean;
    function debug_is_colored(): boolean;
    function debug_level_get_name(level: DebugLevel): string;
    function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object | null, message: DebugMessage, user_data: null): void;
    function debug_log_get_line(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object | null, message: DebugMessage): string;
    function debug_log_id_literal(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, id: string | null, message_string: string): void;
    function debug_log_id_literal_with_context(ctx: LogContext, level: DebugLevel, file: string, _function: string, line: number, id: string | null, message: string): void;
    function debug_log_literal(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object | null, message_string: string): void;
    function debug_log_literal_with_context(ctx: LogContext, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object | null, message: string): void;
    function debug_print_object(ptr: null): string;
    function debug_print_segment(segment: Segment | null): string;
    function debug_print_stack_trace(): void;
    function debug_remove_log_function(func: LogFunction | null): number;
    function debug_remove_log_function_by_data(data: null): number;
    function debug_remove_ring_buffer_logger(): void;
    function debug_ring_buffer_logger_get_logs(): string[];
    function debug_set_active(active: boolean): void;
    function debug_set_color_mode(mode: DebugColorMode): void;
    function debug_set_color_mode_from_string(mode: string): void;
    function debug_set_colored(colored: boolean): void;
    function debug_set_default_threshold(level: DebugLevel): void;
    function debug_set_threshold_for_name(name: string, level: DebugLevel): void;
    function debug_set_threshold_from_string(list: string, reset: boolean): void;
    function debug_unset_threshold_for_name(name: string): void;
    function deinit(): void;
    function dynamic_type_register(plugin: Plugin, type: GObject.GType): boolean;
    function error_get_message(domain: GLib.Quark, code: number): string;
    function event_type_get_flags(type: EventType): EventTypeFlags;
    function event_type_get_name(type: EventType): string;
    function event_type_to_quark(type: EventType): GLib.Quark;
    function event_type_to_sticky_ordering(type: EventType): number;
    function filename_to_uri(filename: string): string | null;
    function flow_get_name(ret: FlowReturn): string;
    function flow_to_quark(ret: FlowReturn): GLib.Quark;
    function format_get_by_nick(nick: string): Format;
    function format_get_details(format: Format): FormatDefinition | null;
    function format_get_name(format: Format): string | null;
    function format_iterate_definitions(): Iterator;
    function format_register(nick: string, description: string): Format;
    function format_to_quark(format: Format): GLib.Quark;
    function formats_contains(formats: Format[], format: Format): boolean;
    function get_main_executable_path(): string | null;
    function init(argv?: string[]): string[];
    function init_check(argv?: string[]): [boolean, string[]];
    function is_caps_features(obj: null): boolean;
    function is_initialized(): boolean;
    function library_error_quark(): GLib.Quark;
    function message_take(old_message: Message, new_message: Message | null): [boolean, Message];
    function message_type_get_name(type: MessageType): string;
    function message_type_to_quark(type: MessageType): GLib.Quark;
    function meta_api_type_aggregate_params(api: GObject.GType, aggregated_params: Structure, params0: Structure, params1: Structure): boolean;
    function meta_api_type_get_tags(api: GObject.GType): string[];
    function meta_api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean;
    function meta_api_type_register(api: string, tags: string[]): GObject.GType;
    function meta_api_type_set_params_aggregator(api: GObject.GType, aggregator: AllocationMetaParamsAggregator): void;
    function meta_api_type_tags_contain_only(api: GObject.GType, valid_tags: string[]): boolean;
    function meta_deserialize(buffer: Buffer, data: Uint8Array | string): [Meta | null, number];
    function meta_get_info(impl: string): MetaInfo | null;
    function meta_register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo;
    function meta_register_custom_simple(name: string): MetaInfo;
    function mini_object_replace(olddata: MiniObject | null, newdata: MiniObject | null): [boolean, MiniObject | null];
    function mini_object_take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
    function pad_mode_get_name(mode: PadMode): string;
    function param_spec_array(name: string, nick: string, blurb: string, element_spec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec;
    function param_spec_fraction(name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null;
    function parent_buffer_meta_api_get_type(): GObject.GType;
    function parent_buffer_meta_get_info(): MetaInfo;
    function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Bin;
    function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext | null, flags: ParseFlags): Element;
    function parse_error_quark(): GLib.Quark;
    function parse_launch(pipeline_description: string): Element;
    function parse_launch_full(pipeline_description: string, context: ParseContext | null, flags: ParseFlags): Element;
    function parse_launchv(argv: string[]): Element;
    function parse_launchv_full(argv: string[], context: ParseContext | null, flags: ParseFlags): Element;
    function plugin_error_quark(): GLib.Quark;
    function preset_get_app_dir(): string | null;
    function preset_set_app_dir(app_dir: string): boolean;
    function protection_filter_systems_by_available_decryptors(system_identifiers: string[]): string[] | null;
    function protection_meta_api_get_type(): GObject.GType;
    function protection_meta_get_info(): MetaInfo;
    function protection_select_system(system_identifiers: string[]): string | null;
    function query_take(old_query: Query | null, new_query: Query | null): [boolean, Query | null];
    function query_type_get_flags(type: QueryType): QueryTypeFlags;
    function query_type_get_name(type: QueryType): string;
    function query_type_to_quark(type: QueryType): GLib.Quark;
    function reference_timestamp_meta_api_get_type(): GObject.GType;
    function reference_timestamp_meta_get_info(): MetaInfo;
    function resource_error_quark(): GLib.Quark;
    function segtrap_is_enabled(): boolean;
    function segtrap_set_enabled(enabled: boolean): void;
    function state_change_get_name(transition: StateChange): string;
    function state_change_return_get_name(state_ret: StateChangeReturn): string;
    function state_get_name(state: State): string;
    function stream_error_quark(): GLib.Quark;
    function stream_type_get_name(stype: StreamType): string;
    function structure_take(oldstr_ptr: Structure | null, newstr: Structure | null): [boolean, Structure | null];
    function tag_exists(tag: string): boolean;
    function tag_get_description(tag: string): string;
    function tag_get_flag(tag: string): TagFlag;
    function tag_get_nick(tag: string): string;
    function tag_get_type(tag: string): GObject.GType;
    function tag_is_fixed(tag: string): boolean;
    function tag_list_copy_value(list: TagList, tag: string): [boolean, unknown];
    function tag_list_replace(old_taglist: TagList | null, new_taglist: TagList | null): [boolean, TagList | null];
    function tag_list_take(old_taglist: TagList, new_taglist: TagList | null): [boolean, TagList];
    function tag_merge_strings_with_comma(src: GObject.Value | any): unknown;
    function tag_merge_use_first(src: GObject.Value | any): unknown;
    function toc_entry_type_get_nick(type: TocEntryType): string;
    function tracing_get_active_tracers(): Tracer[];
    function tracing_register_hook(tracer: Tracer, detail: string, func: GObject.Callback): void;
    function type_find_register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean;
    function type_is_plugin_api(type: GObject.GType): [boolean, PluginAPIFlags | null];
    function type_mark_as_plugin_api(type: GObject.GType, flags: PluginAPIFlags): void;
    function update_registry(): boolean;
    function uri_construct(protocol: string, location: string): string;
    function uri_error_quark(): GLib.Quark;
    function uri_from_string(uri: string): Uri | null;
    function uri_from_string_escaped(uri: string): Uri | null;
    function uri_get_location(uri: string): string | null;
    function uri_get_protocol(uri: string): string | null;
    function uri_has_protocol(uri: string, protocol: string): boolean;
    function uri_is_valid(uri: string): boolean;
    function uri_join_strings(base_uri: string, ref_uri: string): string | null;
    function uri_protocol_is_supported(type: URIType, protocol: string): boolean;
    function uri_protocol_is_valid(protocol: string): boolean;
    function util_array_binary_search(array: null, num_elements: number, element_size: bigint | number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: null): null;
    function util_ceil_log2(v: number): number;
    function util_double_to_fraction(src: number): [number, number];
    function util_dump_buffer(buf: Buffer): void;
    function util_dump_mem(mem: Uint8Array | string): void;
    function util_filename_compare(a: string, b: string): number;
    function util_floor_log2(v: number): number;
    function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    function util_fraction_compare(a_n: number, a_d: number, b_n: number, b_d: number): number;
    function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    function util_fraction_multiply_int64(a_n: bigint | number, a_d: bigint | number, b_n: bigint | number, b_d: bigint | number): [boolean, number, number];
    function util_fraction_to_double(src_n: number, src_d: number): number;
    function util_gdouble_to_guint64(value: number): number;
    function util_get_object_array(object: GObject.Object, name: string): [boolean, GObject.ValueArray];
    function util_get_timestamp(): ClockTime;
    function util_greatest_common_divisor(a: number, b: number): number;
    function util_greatest_common_divisor_int64(a: bigint | number, b: bigint | number): number;
    function util_group_id_next(): number;
    function util_guint64_to_gdouble(value: bigint | number): number;
    function util_seqnum_compare(s1: number, s2: number): number;
    function util_seqnum_next(): number;
    function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
    function util_set_object_array(object: GObject.Object, name: string, array: GObject.ValueArray): boolean;
    function util_set_value_from_string(value_str: string): unknown;
    function util_simplify_fraction(numerator: number, denominator: number, n_terms: number, threshold: number): [number, number];
    function util_uint64_scale(val: bigint | number, num: bigint | number, denom: bigint | number): number;
    function util_uint64_scale_ceil(val: bigint | number, num: bigint | number, denom: bigint | number): number;
    function util_uint64_scale_int(val: bigint | number, num: number, denom: number): number;
    function util_uint64_scale_int_ceil(val: bigint | number, num: number, denom: number): number;
    function util_uint64_scale_int_round(val: bigint | number, num: number, denom: number): number;
    function util_uint64_scale_round(val: bigint | number, num: bigint | number, denom: bigint | number): number;
    function value_can_compare(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_can_intersect(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_can_subtract(minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    function value_can_union(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_compare(value1: GObject.Value | any, value2: GObject.Value | any): number;
    function value_deserialize(src: string): [boolean, unknown];
    function value_deserialize_with_pspec(src: string, pspec: GObject.ParamSpec | null): [boolean, unknown];
    function value_fixate(dest: GObject.Value | any, src: GObject.Value | any): boolean;
    function value_fraction_multiply(product: GObject.Value | any, factor1: GObject.Value | any, factor2: GObject.Value | any): boolean;
    function value_fraction_subtract(dest: GObject.Value | any, minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    function value_get_bitmask(value: GObject.Value | any): number;
    function value_get_caps(value: GObject.Value | any): Caps;
    function value_get_caps_features(value: GObject.Value | any): CapsFeatures;
    function value_get_double_range_max(value: GObject.Value | any): number;
    function value_get_double_range_min(value: GObject.Value | any): number;
    function value_get_flagset_flags(value: GObject.Value | any): number;
    function value_get_flagset_mask(value: GObject.Value | any): number;
    function value_get_fraction_denominator(value: GObject.Value | any): number;
    function value_get_fraction_numerator(value: GObject.Value | any): number;
    function value_get_fraction_range_max(value: GObject.Value | any): unknown | null;
    function value_get_fraction_range_min(value: GObject.Value | any): unknown | null;
    function value_get_int64_range_max(value: GObject.Value | any): number;
    function value_get_int64_range_min(value: GObject.Value | any): number;
    function value_get_int64_range_step(value: GObject.Value | any): number;
    function value_get_int_range_max(value: GObject.Value | any): number;
    function value_get_int_range_min(value: GObject.Value | any): number;
    function value_get_int_range_step(value: GObject.Value | any): number;
    function value_get_structure(value: GObject.Value | any): Structure;
    function value_hash(value: GObject.Value | any): [boolean, number];
    function value_init_and_copy(src: GObject.Value | any): unknown;
    function value_intersect(value1: GObject.Value | any, value2: GObject.Value | any): [boolean, unknown | null];
    function value_is_fixed(value: GObject.Value | any): boolean;
    function value_is_subset(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_register(table: ValueTable): void;
    function value_serialize(value: GObject.Value | any): string | null;
    function value_set_bitmask(value: GObject.Value | any, bitmask: bigint | number): void;
    function value_set_caps(value: GObject.Value | any, caps: Caps): void;
    function value_set_caps_features(value: GObject.Value | any, features: CapsFeatures): void;
    function value_set_double_range(value: GObject.Value | any, start: number, end: number): void;
    function value_set_flagset(value: GObject.Value | any, flags: number, mask: number): void;
    function value_set_fraction(value: GObject.Value | any, numerator: number, denominator: number): void;
    function value_set_fraction_range(value: GObject.Value | any, start: GObject.Value | any, end: GObject.Value | any): void;
    function value_set_fraction_range_full(value: GObject.Value | any, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void;
    function value_set_int64_range(value: GObject.Value | any, start: bigint | number, end: bigint | number): void;
    function value_set_int64_range_step(value: GObject.Value | any, start: bigint | number, end: bigint | number, step: bigint | number): void;
    function value_set_int_range(value: GObject.Value | any, start: number, end: number): void;
    function value_set_int_range_step(value: GObject.Value | any, start: number, end: number, step: number): void;
    function value_set_structure(value: GObject.Value | any, structure: Structure): void;
    function value_subtract(minuend: GObject.Value | any, subtrahend: GObject.Value | any): [boolean, unknown | null];
    function value_union(value1: GObject.Value | any, value2: GObject.Value | any): [boolean, unknown];
    function version(): [number, number, number, number];
    function version_string(): string;
    interface AllocationMetaParamsAggregator {
        (aggregated_params: Structure, params0: Structure, params1: Structure): boolean;
    }
    interface BufferForeachMetaFunc {
        (buffer: Buffer, meta: Meta | null): boolean;
    }
    interface BufferListFunc {
        (buffer: Buffer | null, idx: number): boolean;
    }
    interface BusFunc {
        (bus: Bus, message: Message): boolean;
    }
    interface BusSyncHandler {
        (bus: Bus, message: Message): BusSyncReply;
    }
    interface CallAsyncFunc {
        (user_data: null): void;
    }
    interface CapsFilterMapFunc {
        (features: CapsFeatures, structure: Structure): boolean;
    }
    interface CapsForeachFunc {
        (features: CapsFeatures, structure: Structure): boolean;
    }
    interface CapsMapFunc {
        (features: CapsFeatures, structure: Structure): boolean;
    }
    interface ClockCallback {
        (clock: Clock, time: ClockTime, id: ClockID): boolean;
    }
    interface ControlBindingConvert {
        (binding: ControlBinding, src_value: number, dest_value: unknown): void;
    }
    interface ControlSourceGetValue {
        (self: ControlSource, timestamp: ClockTime, value: number): boolean;
    }
    interface ControlSourceGetValueArray {
        (self: ControlSource, timestamp: ClockTime, interval: ClockTime, n_values: number, values: number): boolean;
    }
    interface CustomMetaTransformFunction {
        (transbuf: Buffer, meta: CustomMeta, buffer: Buffer, type: GLib.Quark, data: null): boolean;
    }
    interface DebugFuncPtr {
        (): void;
    }
    interface ElementCallAsyncFunc {
        (element: Element): void;
    }
    interface ElementForeachPadFunc {
        (element: Element, pad: Pad): boolean;
    }
    interface IteratorCopyFunction {
        (it: Iterator, copy: Iterator): void;
    }
    interface IteratorFoldFunction {
        (item: unknown, ret: unknown): boolean;
    }
    interface IteratorForeachFunction {
        (item: unknown): void;
    }
    interface IteratorFreeFunction {
        (it: Iterator): void;
    }
    interface IteratorItemFunction {
        (it: Iterator, item: unknown): IteratorItem;
    }
    interface IteratorNextFunction {
        (it: Iterator, result: unknown): IteratorResult;
    }
    interface IteratorResyncFunction {
        (it: Iterator): void;
    }
    interface LogFunction<A = GObject.Object> {
        (category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: A, message: DebugMessage): void;
    }
    interface MemoryCopyFunction {
        (mem: Memory, offset: number, size: number): Memory;
    }
    interface MemoryIsSpanFunction {
        (mem1: Memory, mem2: Memory, offset: number): boolean;
    }
    interface MemoryMapFullFunction {
        (mem: Memory, info: MapInfo, maxsize: number): null;
    }
    interface MemoryMapFunction {
        (mem: Memory, maxsize: number, flags: MapFlags): null;
    }
    interface MemoryShareFunction {
        (mem: Memory, offset: number, size: number): Memory;
    }
    interface MemoryUnmapFullFunction {
        (mem: Memory, info: MapInfo): void;
    }
    interface MemoryUnmapFunction {
        (mem: Memory): void;
    }
    interface MetaClearFunction {
        (buffer: Buffer, meta: Meta): void;
    }
    interface MetaDeserializeFunction {
        (info: MetaInfo, buffer: Buffer, data: number, size: number, version: number): Meta | null;
    }
    interface MetaFreeFunction {
        (meta: Meta, buffer: Buffer): void;
    }
    interface MetaInitFunction {
        (meta: Meta, params: null, buffer: Buffer): boolean;
    }
    interface MetaSerializeFunction {
        (meta: Meta, data: ByteArrayInterface): boolean;
    }
    interface MetaTransformFunction {
        (transbuf: Buffer, meta: Meta, buffer: Buffer, type: GLib.Quark, data: null): boolean;
    }
    interface MiniObjectCopyFunction {
        (obj: MiniObject): MiniObject;
    }
    interface MiniObjectDisposeFunction {
        (obj: MiniObject): boolean;
    }
    interface MiniObjectFreeFunction {
        (obj: MiniObject): void;
    }
    interface MiniObjectNotify {
        (user_data: null, obj: MiniObject): void;
    }
    interface ObjectCallAsyncFunc {
        (object: Object): void;
    }
    interface PadActivateFunction {
        (pad: Pad, parent: Object): boolean;
    }
    interface PadActivateModeFunction {
        (pad: Pad, parent: Object, mode: PadMode, active: boolean): boolean;
    }
    interface PadChainFunction {
        (pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn;
    }
    interface PadChainListFunction {
        (pad: Pad, parent: Object | null, list: BufferList): FlowReturn;
    }
    interface PadEventFullFunction {
        (pad: Pad, parent: Object | null, event: Event): FlowReturn;
    }
    interface PadEventFunction {
        (pad: Pad, parent: Object | null, event: Event): boolean;
    }
    interface PadForwardFunction {
        (pad: Pad): boolean;
    }
    interface PadGetRangeFunction {
        (pad: Pad, parent: Object | null, offset: number, length: number, buffer: Buffer): FlowReturn;
    }
    interface PadIterIntLinkFunction {
        (pad: Pad, parent: Object | null): Iterator;
    }
    interface PadLinkFunction {
        (pad: Pad, parent: Object | null, peer: Pad): PadLinkReturn;
    }
    interface PadProbeCallback {
        (pad: Pad, info: PadProbeInfo): PadProbeReturn;
    }
    interface PadQueryFunction {
        (pad: Pad, parent: Object | null, query: Query): boolean;
    }
    interface PadStickyEventsForeachFunction {
        (pad: Pad, event: Event | null): boolean;
    }
    interface PadUnlinkFunction {
        (pad: Pad, parent: Object | null): void;
    }
    interface PluginFeatureFilter {
        (feature: PluginFeature): boolean;
    }
    interface PluginFilter {
        (plugin: Plugin): boolean;
    }
    interface PluginInitFullFunc {
        (plugin: Plugin): boolean;
    }
    interface PluginInitFunc {
        (plugin: Plugin): boolean;
    }
    interface PromiseChangeFunc {
        (promise: Promise): void;
    }
    interface StructureFilterMapFunc {
        (field_id: GLib.Quark, value: unknown): boolean;
    }
    interface StructureFilterMapIdStrFunc {
        (fieldname: IdStr, value: unknown): boolean;
    }
    interface StructureForeachFunc {
        (field_id: GLib.Quark, value: unknown): boolean;
    }
    interface StructureForeachIdStrFunc {
        (fieldname: IdStr, value: unknown): boolean;
    }
    interface StructureMapFunc {
        (field_id: GLib.Quark, value: unknown): boolean;
    }
    interface StructureMapIdStrFunc {
        (fieldname: IdStr, value: unknown): boolean;
    }
    interface TagForeachFunc {
        (list: TagList, tag: string): void;
    }
    interface TagMergeFunc {
        (dest: unknown, src: unknown): void;
    }
    interface TaskFunction {
        (user_data: null): void;
    }
    interface TaskPoolFunction {
        (user_data: null): void;
    }
    interface TaskThreadFunc {
        (task: Task, thread: GLib.Thread): void;
    }
    interface TypeFindFunction {
        (find: TypeFind): void;
    }
    interface ValueCompareFunc {
        (value1: unknown, value2: unknown): number;
    }
    interface ValueDeserializeFunc {
        (dest: unknown, s: string): boolean;
    }
    interface ValueDeserializeWithPSpecFunc {
        (dest: unknown, s: string, pspec: GObject.ParamSpec): boolean;
    }
    interface ValueHashFunc {
        (value: unknown): boolean;
    }
    interface ValueSerializeFunc {
        (value1: unknown): string;
    }
    export namespace AllocatorFlags {
        export const $gtype: GObject.GType<AllocatorFlags>;
    }
    enum AllocatorFlags {
        CUSTOM_ALLOC,
        NO_COPY,
        LAST,
    }
    export namespace BinFlags {
        export const $gtype: GObject.GType<BinFlags>;
    }
    enum BinFlags {
        NO_RESYNC,
        STREAMS_AWARE,
        LAST,
    }
    export namespace BufferCopyFlags {
        export const $gtype: GObject.GType<BufferCopyFlags>;
    }
    enum BufferCopyFlags {
        NONE,
        FLAGS,
        TIMESTAMPS,
        META,
        MEMORY,
        MERGE,
        DEEP,
    }
    export namespace BufferFlags {
        export const $gtype: GObject.GType<BufferFlags>;
    }
    enum BufferFlags {
        LIVE,
        DECODE_ONLY,
        DISCONT,
        RESYNC,
        CORRUPTED,
        MARKER,
        HEADER,
        GAP,
        DROPPABLE,
        DELTA_UNIT,
        TAG_MEMORY,
        SYNC_AFTER,
        NON_DROPPABLE,
        LAST,
    }
    export namespace BufferPoolAcquireFlags {
        export const $gtype: GObject.GType<BufferPoolAcquireFlags>;
    }
    enum BufferPoolAcquireFlags {
        NONE,
        KEY_UNIT,
        DONTWAIT,
        DISCONT,
        LAST,
    }
    export namespace BusFlags {
        export const $gtype: GObject.GType<BusFlags>;
    }
    enum BusFlags {
        FLUSHING,
        FLAG_LAST,
    }
    export namespace CapsFlags {
        export const $gtype: GObject.GType<CapsFlags>;
    }
    enum CapsFlags {
        ANY,
    }
    export namespace ClockFlags {
        export const $gtype: GObject.GType<ClockFlags>;
    }
    enum ClockFlags {
        CAN_DO_SINGLE_SYNC,
        CAN_DO_SINGLE_ASYNC,
        CAN_DO_PERIODIC_SYNC,
        CAN_DO_PERIODIC_ASYNC,
        CAN_SET_RESOLUTION,
        CAN_SET_MASTER,
        NEEDS_STARTUP_SYNC,
        LAST,
    }
    export namespace DebugColorFlags {
        export const $gtype: GObject.GType<DebugColorFlags>;
    }
    enum DebugColorFlags {
        FG_BLACK,
        FG_RED,
        FG_GREEN,
        FG_YELLOW,
        FG_BLUE,
        FG_MAGENTA,
        FG_CYAN,
        FG_WHITE,
        BG_BLACK,
        BG_RED,
        BG_GREEN,
        BG_YELLOW,
        BG_BLUE,
        BG_MAGENTA,
        BG_CYAN,
        BG_WHITE,
        BOLD,
        UNDERLINE,
    }
    export namespace DebugGraphDetails {
        export const $gtype: GObject.GType<DebugGraphDetails>;
    }
    enum DebugGraphDetails {
        MEDIA_TYPE,
        CAPS_DETAILS,
        NON_DEFAULT_PARAMS,
        STATES,
        FULL_PARAMS,
        ALL,
        VERBOSE,
    }
    export namespace ElementFlags {
        export const $gtype: GObject.GType<ElementFlags>;
    }
    enum ElementFlags {
        LOCKED_STATE,
        SINK,
        SOURCE,
        PROVIDE_CLOCK,
        REQUIRE_CLOCK,
        INDEXABLE,
        LAST,
    }
    export namespace EventTypeFlags {
        export const $gtype: GObject.GType<EventTypeFlags>;
    }
    enum EventTypeFlags {
        UPSTREAM,
        DOWNSTREAM,
        SERIALIZED,
        STICKY,
        STICKY_MULTI,
    }
    export namespace GapFlags {
        export const $gtype: GObject.GType<GapFlags>;
    }
    enum GapFlags {
        DATA,
    }
    export namespace LockFlags {
        export const $gtype: GObject.GType<LockFlags>;
    }
    enum LockFlags {
        READ,
        WRITE,
        EXCLUSIVE,
        LAST,
    }
    export namespace LogContextFlags {
        export const $gtype: GObject.GType<LogContextFlags>;
    }
    enum LogContextFlags {
        NONE,
        THROTTLE,
    }
    export namespace LogContextHashFlags {
        export const $gtype: GObject.GType<LogContextHashFlags>;
    }
    enum LogContextHashFlags {
        DEFAULT,
        IGNORE_OBJECT,
        IGNORE_FORMAT,
        IGNORE_FILE,
        USE_LINE_NUMBER,
        USE_STRING_ARGS,
    }
    export namespace MapFlags {
        export const $gtype: GObject.GType<MapFlags>;
    }
    enum MapFlags {
        READ,
        WRITE,
        REF_MEMORY,
        FLAG_LAST,
    }
    export namespace MemoryFlags {
        export const $gtype: GObject.GType<MemoryFlags>;
    }
    enum MemoryFlags {
        READONLY,
        NO_SHARE,
        ZERO_PREFIXED,
        ZERO_PADDED,
        PHYSICALLY_CONTIGUOUS,
        NOT_MAPPABLE,
        LAST,
    }
    export namespace MessageType {
        export const $gtype: GObject.GType<MessageType>;
    }
    enum MessageType {
        UNKNOWN,
        EOS,
        ERROR,
        WARNING,
        INFO,
        TAG,
        BUFFERING,
        STATE_CHANGED,
        STATE_DIRTY,
        STEP_DONE,
        CLOCK_PROVIDE,
        CLOCK_LOST,
        NEW_CLOCK,
        STRUCTURE_CHANGE,
        STREAM_STATUS,
        APPLICATION,
        ELEMENT,
        SEGMENT_START,
        SEGMENT_DONE,
        DURATION_CHANGED,
        LATENCY,
        ASYNC_START,
        ASYNC_DONE,
        REQUEST_STATE,
        STEP_START,
        QOS,
        PROGRESS,
        TOC,
        RESET_TIME,
        STREAM_START,
        NEED_CONTEXT,
        HAVE_CONTEXT,
        EXTENDED,
        DEVICE_ADDED,
        DEVICE_REMOVED,
        PROPERTY_NOTIFY,
        STREAM_COLLECTION,
        STREAMS_SELECTED,
        REDIRECT,
        DEVICE_CHANGED,
        INSTANT_RATE_REQUEST,
        DEVICE_MONITOR_STARTED,
        ANY,
    }
    export namespace MetaFlags {
        export const $gtype: GObject.GType<MetaFlags>;
    }
    enum MetaFlags {
        NONE,
        READONLY,
        POOLED,
        LOCKED,
        LAST,
    }
    export namespace MiniObjectFlags {
        export const $gtype: GObject.GType<MiniObjectFlags>;
    }
    enum MiniObjectFlags {
        LOCKABLE,
        LOCK_READONLY,
        MAY_BE_LEAKED,
        LAST,
    }
    export namespace ObjectFlags {
        export const $gtype: GObject.GType<ObjectFlags>;
    }
    enum ObjectFlags {
        MAY_BE_LEAKED,
        CONSTRUCTED,
        LAST,
    }
    export namespace PadFlags {
        export const $gtype: GObject.GType<PadFlags>;
    }
    enum PadFlags {
        BLOCKED,
        FLUSHING,
        EOS,
        BLOCKING,
        NEED_PARENT,
        NEED_RECONFIGURE,
        PENDING_EVENTS,
        FIXED_CAPS,
        PROXY_CAPS,
        PROXY_ALLOCATION,
        PROXY_SCHEDULING,
        ACCEPT_INTERSECT,
        ACCEPT_TEMPLATE,
        LAST,
    }
    export namespace PadLinkCheck {
        export const $gtype: GObject.GType<PadLinkCheck>;
    }
    enum PadLinkCheck {
        NOTHING,
        HIERARCHY,
        TEMPLATE_CAPS,
        CAPS,
        NO_RECONFIGURE,
        DEFAULT,
    }
    export namespace PadProbeType {
        export const $gtype: GObject.GType<PadProbeType>;
    }
    enum PadProbeType {
        INVALID,
        IDLE,
        BLOCK,
        BUFFER,
        BUFFER_LIST,
        EVENT_DOWNSTREAM,
        EVENT_UPSTREAM,
        EVENT_FLUSH,
        QUERY_DOWNSTREAM,
        QUERY_UPSTREAM,
        PUSH,
        PULL,
        BLOCKING,
        DATA_DOWNSTREAM,
        DATA_UPSTREAM,
        DATA_BOTH,
        BLOCK_DOWNSTREAM,
        BLOCK_UPSTREAM,
        EVENT_BOTH,
        QUERY_BOTH,
        ALL_BOTH,
        SCHEDULING,
    }
    export namespace PadTemplateFlags {
        export const $gtype: GObject.GType<PadTemplateFlags>;
    }
    enum PadTemplateFlags {
        LAST,
    }
    export namespace ParseFlags {
        export const $gtype: GObject.GType<ParseFlags>;
    }
    enum ParseFlags {
        NONE,
        FATAL_ERRORS,
        NO_SINGLE_ELEMENT_BINS,
        PLACE_IN_BIN,
    }
    export namespace PipelineFlags {
        export const $gtype: GObject.GType<PipelineFlags>;
    }
    enum PipelineFlags {
        FIXED_CLOCK,
        LAST,
    }
    export namespace PluginAPIFlags {
        export const $gtype: GObject.GType<PluginAPIFlags>;
    }
    enum PluginAPIFlags {
        MEMBERS,
    }
    export namespace PluginDependencyFlags {
        export const $gtype: GObject.GType<PluginDependencyFlags>;
    }
    enum PluginDependencyFlags {
        NONE,
        RECURSE,
        PATHS_ARE_DEFAULT_ONLY,
        FILE_NAME_IS_SUFFIX,
        FILE_NAME_IS_PREFIX,
        PATHS_ARE_RELATIVE_TO_EXE,
    }
    export namespace PluginFlags {
        export const $gtype: GObject.GType<PluginFlags>;
    }
    enum PluginFlags {
        CACHED,
        BLACKLISTED,
    }
    export namespace QueryTypeFlags {
        export const $gtype: GObject.GType<QueryTypeFlags>;
    }
    enum QueryTypeFlags {
        UPSTREAM,
        DOWNSTREAM,
        SERIALIZED,
    }
    export namespace SchedulingFlags {
        export const $gtype: GObject.GType<SchedulingFlags>;
    }
    enum SchedulingFlags {
        SEEKABLE,
        SEQUENTIAL,
        BANDWIDTH_LIMITED,
    }
    export namespace SeekFlags {
        export const $gtype: GObject.GType<SeekFlags>;
    }
    enum SeekFlags {
        NONE,
        FLUSH,
        ACCURATE,
        KEY_UNIT,
        SEGMENT,
        TRICKMODE,
        SKIP,
        SNAP_BEFORE,
        SNAP_AFTER,
        SNAP_NEAREST,
        TRICKMODE_KEY_UNITS,
        TRICKMODE_NO_AUDIO,
        TRICKMODE_FORWARD_PREDICTED,
        INSTANT_RATE_CHANGE,
    }
    export namespace SegmentFlags {
        export const $gtype: GObject.GType<SegmentFlags>;
    }
    enum SegmentFlags {
        NONE,
        RESET,
        TRICKMODE,
        SKIP,
        SEGMENT,
        TRICKMODE_KEY_UNITS,
        TRICKMODE_FORWARD_PREDICTED,
        TRICKMODE_NO_AUDIO,
    }
    export namespace SerializeFlags {
        export const $gtype: GObject.GType<SerializeFlags>;
    }
    enum SerializeFlags {
        NONE,
        BACKWARD_COMPAT,
        STRICT,
    }
    export namespace StackTraceFlags {
        export const $gtype: GObject.GType<StackTraceFlags>;
    }
    enum StackTraceFlags {
        NONE,
        FULL,
    }
    export namespace StreamFlags {
        export const $gtype: GObject.GType<StreamFlags>;
    }
    enum StreamFlags {
        NONE,
        SPARSE,
        SELECT,
        UNSELECT,
    }
    export namespace StreamType {
        export const $gtype: GObject.GType<StreamType>;
    }
    enum StreamType {
        UNKNOWN,
        AUDIO,
        VIDEO,
        CONTAINER,
        TEXT,
        METADATA,
    }
    export namespace TracerValueFlags {
        export const $gtype: GObject.GType<TracerValueFlags>;
    }
    enum TracerValueFlags {
        NONE,
        OPTIONAL,
        AGGREGATED,
    }
    namespace Allocator {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class Allocator extends Object {
        static $gtype: GObject.GType<Allocator>;
        $signals: Allocator.SignalSignatures;
        object: Object;
        mem_type: string;
        mem_map: MemoryMapFunction;
        mem_unmap: MemoryUnmapFunction;
        mem_copy: MemoryCopyFunction;
        mem_share: MemoryShareFunction;
        mem_is_span: MemoryIsSpanFunction;
        mem_map_full: MemoryMapFullFunction;
        mem_unmap_full: MemoryUnmapFullFunction;
        constructor(properties?: Partial<Allocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Allocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Allocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Allocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Allocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Allocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Allocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(name: string | null): Allocator | null;
        static register(name: string, allocator: Allocator): void;
        vfunc_alloc(size: number, params: AllocationParams | null): Memory | null;
        vfunc_free(memory: Memory): void;
        alloc(size: bigint | number, params: AllocationParams | null): Memory | null;
        free(memory: Memory): void;
        set_default(): void;
    }
    namespace Bin {
        interface SignalSignatures extends Element.SignalSignatures {
            "deep-element-added": (arg0: Bin, arg1: Element) => void;
            "deep-element-removed": (arg0: Bin, arg1: Element) => void;
            "do-latency": () => boolean | void;
            "element-added": (arg0: Element) => void;
            "element-removed": (arg0: Element) => void;
            "notify::async-handling": (pspec: GObject.ParamSpec) => void;
            "notify::message-forward": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Element.ConstructorProps, ChildProxy.ConstructorProps {
            async_handling: boolean;
            asyncHandling: boolean;
            message_forward: boolean;
            messageForward: boolean;
        }
    }
    class Bin extends Element implements ChildProxy {
        static $gtype: GObject.GType<Bin>;
        get async_handling(): boolean;
        set async_handling(val: boolean);
        get asyncHandling(): boolean;
        set asyncHandling(val: boolean);
        get message_forward(): boolean;
        set message_forward(val: boolean);
        get messageForward(): boolean;
        set messageForward(val: boolean);
        $signals: Bin.SignalSignatures;
        element: Element;
        numchildren: number;
        children: Element[];
        children_cookie: number;
        child_bus: Bus;
        messages: Message[];
        polling: boolean;
        state_dirty: boolean;
        clock_dirty: boolean;
        provided_clock: Clock;
        clock_provider: Element;
        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): Bin;
        connect<K extends keyof Bin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_add_element(element: Element): boolean;
        vfunc_deep_element_added(sub_bin: Bin, child: Element): void;
        vfunc_deep_element_removed(sub_bin: Bin, child: Element): void;
        vfunc_do_latency(): boolean;
        vfunc_element_added(child: Element): void;
        vfunc_element_removed(child: Element): void;
        vfunc_handle_message(message: Message): void;
        vfunc_remove_element(element: Element): boolean;
        add(element: Element): boolean;
        find_unlinked_pad(direction: PadDirection): Pad | null;
        get_by_interface(iface: GObject.GType): Element | null;
        get_by_name(name: string): Element | null;
        get_by_name_recurse_up(name: string): Element | null;
        get_suppressed_flags(): ElementFlags;
        iterate_all_by_element_factory_name(factory_name: string): Iterator;
        iterate_all_by_interface(iface: GObject.GType): Iterator;
        iterate_elements(): Iterator;
        iterate_recurse(): Iterator;
        iterate_sinks(): Iterator;
        iterate_sorted(): Iterator;
        iterate_sources(): Iterator;
        recalculate_latency(): boolean;
        remove(element: Element): boolean;
        set_suppressed_flags(flags: ElementFlags): void;
        sync_children_states(): boolean;
        child_added(child: GObject.Object, name: string): void;
        child_removed(child: GObject.Object, name: string): void;
        get_child_by_index<T = GObject.Object>(index: number): T;
        get_child_by_name<T = GObject.Object>(name: string): T;
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        get_children_count(): number;
        get_property(name: string): unknown;
        get_property(...args: never[]): any;
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        set_property(name: string, value: GObject.Value | any): void;
        vfunc_child_added(child: GObject.Object, name: string): void;
        vfunc_child_removed(child: GObject.Object, name: string): void;
        vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
        vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
        vfunc_get_children_count(): number;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    namespace Bitmask {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Bitmask {
        static $gtype: GObject.GType<Bitmask>;
        _init(...args: any[]): void;
        connect<K extends keyof Bitmask.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bitmask.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bitmask.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bitmask.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bitmask.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bitmask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace BufferPool {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class BufferPool extends Object {
        static $gtype: GObject.GType<BufferPool>;
        $signals: BufferPool.SignalSignatures;
        object: Object;
        flushing: number;
        constructor(properties?: Partial<BufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BufferPool;
        connect<K extends keyof BufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static config_add_option(config: Structure, option: string): void;
        static config_get_allocator(config: Structure): [boolean, Allocator | null, AllocationParams | null];
        static config_get_option(config: Structure, index: number): string | null;
        static config_get_params(config: Structure): [boolean, Caps | null, number, number, number];
        static config_has_option(config: Structure, option: string): boolean;
        static config_n_options(config: Structure): number;
        static config_set_allocator(config: Structure, allocator: Allocator | null, params: AllocationParams | null): void;
        static config_set_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): void;
        static config_validate_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): boolean;
        vfunc_acquire_buffer(params: BufferPoolAcquireParams | null): [FlowReturn, Buffer | null];
        vfunc_alloc_buffer(params: BufferPoolAcquireParams | null): [FlowReturn, Buffer | null];
        vfunc_flush_start(): void;
        vfunc_flush_stop(): void;
        vfunc_free_buffer(buffer: Buffer): void;
        vfunc_get_options(): string[];
        vfunc_release_buffer(buffer: Buffer): void;
        vfunc_reset_buffer(buffer: Buffer): void;
        vfunc_set_config(config: Structure): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        acquire_buffer(params: BufferPoolAcquireParams | null): [FlowReturn, Buffer | null];
        get_config(): Structure;
        get_options(): string[];
        has_option(option: string): boolean;
        is_active(): boolean;
        release_buffer(buffer: Buffer): void;
        set_active(active: boolean): boolean;
        set_config(config: Structure): boolean;
        set_flushing(flushing: boolean): void;
    }
    namespace Bus {
        interface SignalSignatures extends Object.SignalSignatures {
            message: (arg0: Message) => void;
            "sync-message": (arg0: Message) => void;
            "notify::enable-async": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "message::enable-async": (arg0: Message) => void;
            "message::name": (arg0: Message) => void;
            "message::parent": (arg0: Message) => void;
            [key: `message::${string}`]: (arg0: Message) => void;
            "sync-message::enable-async": (arg0: Message) => void;
            "sync-message::name": (arg0: Message) => void;
            "sync-message::parent": (arg0: Message) => void;
            [key: `sync-message::${string}`]: (arg0: Message) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            enable_async: boolean;
            enableAsync: boolean;
        }
    }
    class Bus extends Object {
        static $gtype: GObject.GType<Bus>;
        set enable_async(val: boolean);
        set enableAsync(val: boolean);
        $signals: Bus.SignalSignatures;
        object: Object;
        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Bus;
        connect<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_message(message: Message): void;
        vfunc_sync_message(message: Message): void;
        add_signal_watch(): void;
        add_signal_watch_full(priority: number): void;
        add_watch(priority: number, func: BusFunc): number;
        async_signal_func(message: Message, data: null): boolean;
        create_watch(): GLib.Source | null;
        disable_sync_message_emission(): void;
        enable_sync_message_emission(): void;
        get_pollfd(): GLib.PollFD;
        have_pending(): boolean;
        peek(): Message | null;
        poll(events: MessageType, timeout: ClockTime): Message | null;
        pop(): Message | null;
        pop_filtered(types: MessageType): Message | null;
        post(message: Message): boolean;
        remove_signal_watch(): void;
        remove_watch(): boolean;
        set_flushing(flushing: boolean): void;
        set_sync_handler(func: BusSyncHandler | null): void;
        sync_signal_handler(message: Message, data: null): BusSyncReply;
        timed_pop(timeout: ClockTime): Message | null;
        timed_pop_filtered(timeout: ClockTime, types: MessageType): Message | null;
    }
    namespace Clock {
        interface SignalSignatures extends Object.SignalSignatures {
            synced: (arg0: boolean) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            timeout: bigint | number;
            window_size: number;
            windowSize: number;
            window_threshold: number;
            windowThreshold: number;
        }
    }
    abstract class Clock extends Object {
        static $gtype: GObject.GType<Clock>;
        get timeout(): number;
        set timeout(val: bigint | number);
        get window_size(): number;
        set window_size(val: number);
        get windowSize(): number;
        set windowSize(val: number);
        get window_threshold(): number;
        set window_threshold(val: number);
        get windowThreshold(): number;
        set windowThreshold(val: number);
        $signals: Clock.SignalSignatures;
        object: Object;
        constructor(properties?: Partial<Clock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Clock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Clock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Clock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static id_compare_func(id1: null, id2: null): number;
        static id_get_clock(id: ClockID): Clock | null;
        static id_get_time(id: ClockID): ClockTime;
        static id_ref(id: ClockID): ClockID;
        static id_unref(id: ClockID): void;
        static id_unschedule(id: ClockID): void;
        static id_uses_clock(id: ClockID, clock: Clock): boolean;
        static id_wait(id: ClockID): [ClockReturn, ClockTimeDiff | null];
        static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn;
        vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime;
        vfunc_get_internal_time(): ClockTime;
        vfunc_get_resolution(): ClockTime;
        vfunc_unschedule(entry: ClockEntry): void;
        vfunc_wait(entry: ClockEntry): [ClockReturn, ClockTimeDiff | null];
        vfunc_wait_async(entry: ClockEntry): ClockReturn;
        add_observation(observation_internal: ClockTime, observation_external: ClockTime): [boolean, number];
        add_observation_unapplied(observation_internal: ClockTime, observation_external: ClockTime): [boolean, number, ClockTime | null, ClockTime | null, ClockTime | null, ClockTime | null];
        adjust_unlocked(internal: ClockTime): ClockTime;
        adjust_with_calibration(internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime;
        get_calibration(): [ClockTime | null, ClockTime | null, ClockTime | null, ClockTime | null];
        get_internal_time(): ClockTime;
        get_master(): Clock | null;
        get_resolution(): ClockTime;
        get_time(): ClockTime;
        get_timeout(): ClockTime;
        is_synced(): boolean;
        is_system_monotonic(): boolean;
        new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
        new_single_shot_id(time: ClockTime): ClockID;
        periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean;
        set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        set_master(master: Clock | null): boolean;
        set_resolution(resolution: ClockTime): ClockTime;
        set_synced(synced: boolean): void;
        set_timeout(timeout: ClockTime): void;
        single_shot_id_reinit(id: ClockID, time: ClockTime): boolean;
        unadjust_unlocked(external: ClockTime): ClockTime;
        unadjust_with_calibration(external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime;
        wait_for_sync(timeout: ClockTime): boolean;
    }
    namespace ControlBinding {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            name: string | any;
            object: Object | any;
        }
    }
    abstract class ControlBinding extends Object {
        static $gtype: GObject.GType<ControlBinding>;
        get name(): string | any;
         object: Object | any;
        $signals: ControlBinding.SignalSignatures;
        pspec: GObject.ParamSpec;
        constructor(properties?: Partial<ControlBinding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlBinding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlBinding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlBinding.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlBinding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: unknown[]): boolean;
        vfunc_get_value(timestamp: ClockTime): GObject.Value | any | null;
        vfunc_sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean;
        get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: (GObject.Value | any)[]): boolean;
        get_g_value_array(...args: never[]): any;
        get_value(timestamp: ClockTime): unknown | null;
        get_value(...args: never[]): any;
        is_disabled(): boolean;
        set_disabled(disabled: boolean): void;
        sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean;
        sync_values(...args: never[]): any;
    }
    namespace ControlSource {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class ControlSource extends Object {
        static $gtype: GObject.GType<ControlSource>;
        $signals: ControlSource.SignalSignatures;
    get_value: ControlSourceGetValue | any;
        get_value_array: ControlSourceGetValueArray;
        constructor(properties?: Partial<ControlSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ControlSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        control_source_get_value(timestamp: ClockTime): [boolean, number];
        control_source_get_value_array(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean;
    }
    namespace Device {
        interface SignalSignatures extends Object.SignalSignatures {
            removed: () => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::device-class": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps | null;
            device_class: string;
            deviceClass: string;
            display_name: string;
            displayName: string;
            properties: Structure | null;
        }
    }
    abstract class Device extends Object {
        static $gtype: GObject.GType<Device>;
        get caps(): Caps | null;
        get device_class(): string;
        get deviceClass(): string;
        get display_name(): string;
        get displayName(): string;
        get properties(): Structure | null;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_element(name: string | null): Element | null;
        vfunc_reconfigure_element(element: Element): boolean;
        create_element(name: string | null): Element | null;
        get_caps(): Caps | null;
        get_device_class(): string;
        get_display_name(): string;
        get_properties(): Structure | null;
        has_classes(classes: string): boolean;
        has_classesv(classes: string[]): boolean;
        reconfigure_element(element: Element): boolean;
    }
    namespace DeviceMonitor {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::show-all": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            show_all: boolean;
            showAll: boolean;
        }
    }
    class DeviceMonitor extends Object {
        static $gtype: GObject.GType<DeviceMonitor>;
        get show_all(): boolean;
        set show_all(val: boolean);
        get showAll(): boolean;
        set showAll(val: boolean);
        $signals: DeviceMonitor.SignalSignatures;
        constructor(properties?: Partial<DeviceMonitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceMonitor;
        connect<K extends keyof DeviceMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_filter(classes: string | null, caps: Caps | null): number;
        get_bus(): Bus;
        get_devices(): Device[] | null;
        get_providers(): string[];
        get_show_all_devices(): boolean;
        remove_filter(filter_id: number): boolean;
        set_show_all_devices(show_all: boolean): void;
        start(): boolean;
        stop(): void;
    }
    namespace DeviceProvider {
        interface SignalSignatures extends Object.SignalSignatures {
            "provider-hidden": (arg0: string) => void;
            "provider-unhidden": (arg0: string) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class DeviceProvider extends Object {
        static $gtype: GObject.GType<DeviceProvider>;
        $signals: DeviceProvider.SignalSignatures;
        devices: null[];
        constructor(properties?: Partial<DeviceProvider.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean;
        static add_metadata(key: string, value: string): void;
        static add_static_metadata(key: string, value: string): void;
        static get_metadata(key: string): string | null;
        static set_metadata(longname: string, classification: string, description: string, author: string): void;
        static set_static_metadata(longname: string, classification: string, description: string, author: string): void;
        vfunc_start(): boolean;
        vfunc_stop(): void;
        can_monitor(): boolean;
        device_add(device: Device): void;
        device_changed(device: Device, changed_device: Device): void;
        device_remove(device: Device): void;
        get_bus(): Bus;
        get_devices(): Device[];
        get_factory(): DeviceProviderFactory | null;
        get_hidden_providers(): string[];
        get_metadata(key: string): string;
        hide_provider(name: string): void;
        is_started(): boolean;
        start(): boolean;
        stop(): void;
        unhide_provider(name: string): void;
    }
    namespace DeviceProviderFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class DeviceProviderFactory extends PluginFeature {
        static $gtype: GObject.GType<DeviceProviderFactory>;
        $signals: DeviceProviderFactory.SignalSignatures;
        constructor(properties?: Partial<DeviceProviderFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceProviderFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProviderFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceProviderFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProviderFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceProviderFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceProviderFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(name: string): DeviceProviderFactory | null;
        static get_by_name(factoryname: string): DeviceProvider | null;
        static list_get_device_providers(minrank: Rank): DeviceProviderFactory[];
        get(): DeviceProvider | null;
        get_device_provider_type(): GObject.GType;
        get_metadata(key: string): string | null;
        get_metadata_keys(): string[] | null;
        has_classes(classes: string | null): boolean;
        has_classesv(classes: string[] | null): boolean;
    }
    namespace DoubleRange {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class DoubleRange {
        static $gtype: GObject.GType<DoubleRange>;
        _init(...args: any[]): void;
        connect<K extends keyof DoubleRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleRange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DoubleRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleRange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DoubleRange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DoubleRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DynamicTypeFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class DynamicTypeFactory extends PluginFeature {
        static $gtype: GObject.GType<DynamicTypeFactory>;
        $signals: DynamicTypeFactory.SignalSignatures;
        constructor(properties?: Partial<DynamicTypeFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DynamicTypeFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DynamicTypeFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DynamicTypeFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DynamicTypeFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DynamicTypeFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DynamicTypeFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static load(factoryname: string): GObject.GType;
    }
    namespace Element {
        interface SignalSignatures extends Object.SignalSignatures {
            "no-more-pads": () => void;
            "pad-added": (arg0: Pad) => void;
            "pad-removed": (arg0: Pad) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class Element extends Object {
        static $gtype: GObject.GType<Element>;
        $signals: Element.SignalSignatures;
        object: Object;
        state_cookie: number;
        target_state: State;
        current_state: State;
        next_state: State;
        pending_state: State;
        last_return: StateChangeReturn;
        bus: Bus;
        clock: Clock;
        base_time: ClockTimeDiff;
        start_time: ClockTime;
        numpads: number;
        pads: Pad[];
        numsrcpads: number;
        srcpads: Pad[];
        numsinkpads: number;
        sinkpads: Pad[];
        pads_cookie: number;
        constructor(properties?: Partial<Element.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Element.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Element.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Element.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Element.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Element.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Element.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static make_from_uri(type: URIType, uri: string, elementname: string | null): Element;
        static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean;
        static state_change_return_get_name(state_ret: StateChangeReturn): string;
        static state_get_name(state: State): string;
        static type_set_skip_documentation(type: GObject.GType): void;
        static add_metadata(key: string, value: string): void;
        static add_pad_template(templ: PadTemplate): void;
        static add_static_metadata(key: string, value: string): void;
        static add_static_pad_template(static_templ: StaticPadTemplate): void;
        static add_static_pad_template_with_gtype(static_templ: StaticPadTemplate, pad_type: GObject.GType): void;
        static get_metadata(key: string): string;
        static get_pad_template(name: string): PadTemplate | null;
        static get_pad_template_list(): PadTemplate[];
        static set_metadata(longname: string, classification: string, description: string, author: string): void;
        static set_static_metadata(longname: string, classification: string, description: string, author: string): void;
        vfunc_change_state(transition: StateChange): StateChangeReturn;
        vfunc_get_state(timeout: ClockTime): [StateChangeReturn, State | null, State | null];
        vfunc_no_more_pads(): void;
        vfunc_pad_added(pad: Pad): void;
        vfunc_pad_removed(pad: Pad): void;
        vfunc_post_message(message: Message): boolean;
        vfunc_provide_clock(): Clock | null;
        vfunc_query(query: Query): boolean;
        vfunc_release_pad(pad: Pad): void;
        vfunc_request_new_pad(templ: PadTemplate, name: string | null, caps: Caps | null): Pad | null;
        vfunc_send_event(event: Event): boolean;
        vfunc_set_bus(bus: Bus | null): void;
        vfunc_set_clock(clock: Clock | null): boolean;
        vfunc_set_context(context: Context): void;
        vfunc_set_state(state: State): StateChangeReturn;
        vfunc_state_changed(oldstate: State, newstate: State, pending: State): void;
        abort_state(): void;
        add_pad(pad: Pad): boolean;
        add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number;
        add_property_notify_watch(property_name: string | null, include_value: boolean): number;
        call_async(func: ElementCallAsyncFunc): void;
        call_async(...args: never[]): any;
        change_state(transition: StateChange): StateChangeReturn;
        continue_state(ret: StateChangeReturn): StateChangeReturn;
        create_all_pads(): void;
        decorate_stream_id(stream_id: string): string;
        foreach_pad(func: ElementForeachPadFunc): boolean;
        foreach_sink_pad(func: ElementForeachPadFunc): boolean;
        foreach_src_pad(func: ElementForeachPadFunc): boolean;
        get_base_time(): ClockTime;
        get_bus(): Bus | null;
        get_clock(): Clock | null;
        get_compatible_pad(pad: Pad, caps: Caps | null): Pad | null;
        get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null;
        get_context(context_type: string): Context | null;
        get_context_unlocked(context_type: string): Context | null;
        get_contexts(): Context[];
        get_current_clock_time(): ClockTime;
        get_current_running_time(): ClockTime;
        get_factory(): ElementFactory | null;
        get_metadata(key: string): string;
        get_pad_template(name: string): PadTemplate | null;
        get_pad_template_list(): PadTemplate[];
        get_request_pad(name: string): Pad | null;
        get_start_time(): ClockTime;
        get_state(timeout: ClockTime): [StateChangeReturn, State | null, State | null];
        get_static_pad(name: string): Pad | null;
        is_locked_state(): boolean;
        iterate_pads(): Iterator;
        iterate_sink_pads(): Iterator;
        iterate_src_pads(): Iterator;
        link(dest: Element): boolean;
        link_filtered(dest: Element, filter: Caps | null): boolean;
        link_pads(srcpadname: string | null, dest: Element, destpadname: string | null): boolean;
        link_pads_filtered(srcpadname: string | null, dest: Element, destpadname: string | null, filter: Caps | null): boolean;
        link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean;
        lost_state(): void;
        message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, _function: string, line: number): void;
        message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, _function: string, line: number, structure: Structure): void;
        no_more_pads(): void;
        post_message(message: Message): boolean;
        provide_clock(): Clock | null;
        query(query: Query): boolean;
        query_convert(src_format: Format, src_val: bigint | number, dest_format: Format): [boolean, number];
        query_duration(format: Format): [boolean, number];
        query_position(format: Format): [boolean, number];
        release_request_pad(pad: Pad): void;
        remove_pad(pad: Pad): boolean;
        remove_property_notify_watch(watch_id: bigint | number): void;
        request_pad(templ: PadTemplate, name: string | null, caps: Caps | null): Pad | null;
        request_pad_simple(name: string): Pad | null;
        seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: bigint | number, stop_type: SeekType, stop: bigint | number): boolean;
        seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: bigint | number): boolean;
        send_event(event: Event): boolean;
        set_base_time(time: ClockTime): void;
        set_bus(bus: Bus | null): void;
        set_clock(clock: Clock | null): boolean;
        set_context(context: Context): void;
        set_locked_state(locked_state: boolean): boolean;
        set_start_time(time: ClockTime): void;
        set_state(state: State): StateChangeReturn;
        sync_state_with_parent(): boolean;
        unlink(dest: Element): void;
        unlink_pads(srcpadname: string, dest: Element, destpadname: string): void;
    }
    namespace ElementFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class ElementFactory extends PluginFeature {
        static $gtype: GObject.GType<ElementFactory>;
        $signals: ElementFactory.SignalSignatures;
        constructor(properties?: Partial<ElementFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ElementFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElementFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ElementFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElementFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ElementFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ElementFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(name: string): ElementFactory | null;
        static list_filter(list: ElementFactory[], caps: Caps, direction: PadDirection, subsetonly: boolean): ElementFactory[];
        static list_get_elements(type: ElementFactoryListType, minrank: Rank): ElementFactory[];
        static make(factoryname: string, name: string | null): Element | null;
        static make_with_properties(factoryname: string, names: string[] | null, values: (GObject.Value | any)[] | null): Element | null;
        can_sink_all_caps(caps: Caps): boolean;
        can_sink_any_caps(caps: Caps): boolean;
        can_src_all_caps(caps: Caps): boolean;
        can_src_any_caps(caps: Caps): boolean;
        create(name: string | null): Element | null;
        create_with_properties(names: string[] | null, values: (GObject.Value | any)[] | null): Element | null;
        get_element_type(): GObject.GType;
        get_metadata(key: string): string | null;
        get_metadata_keys(): string[] | null;
        get_num_pad_templates(): number;
        get_skip_documentation(): boolean;
        get_static_pad_templates(): StaticPadTemplate[];
        get_uri_protocols(): string[];
        get_uri_type(): URIType;
        has_interface(interfacename: string): boolean;
        list_is_type(type: ElementFactoryListType): boolean;
    }
    namespace FlagSet {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class FlagSet {
        static $gtype: GObject.GType<FlagSet>;
        _init(...args: any[]): void;
        connect<K extends keyof FlagSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlagSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FlagSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlagSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FlagSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FlagSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static register(flags_type: GObject.GType): GObject.GType;
    }
    namespace Fraction {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Fraction {
        static $gtype: GObject.GType<Fraction>;
        _init(...args: any[]): void;
        connect<K extends keyof Fraction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fraction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fraction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fraction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fraction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Fraction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace FractionRange {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class FractionRange {
        static $gtype: GObject.GType<FractionRange>;
        _init(...args: any[]): void;
        connect<K extends keyof FractionRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FractionRange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FractionRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FractionRange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FractionRange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FractionRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GhostPad {
        interface SignalSignatures extends ProxyPad.SignalSignatures {
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends ProxyPad.ConstructorProps {}
    }
    class GhostPad extends ProxyPad {
        static $gtype: GObject.GType<GhostPad>;
        $signals: GhostPad.SignalSignatures;
        pad: ProxyPad;
        constructor(properties?: Partial<GhostPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, target: Pad): GhostPad;
        static ["new"](...args: never[]): any;
        static new_from_template(name: string | null, target: Pad, templ: PadTemplate): GhostPad;
        static new_from_template(...args: never[]): any;
        static new_no_target(name: string | null, dir: PadDirection): GhostPad;
        static new_no_target_from_template(name: string | null, templ: PadTemplate): GhostPad;
        connect<K extends keyof GhostPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GhostPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GhostPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GhostPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GhostPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GhostPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
        static internal_activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
        construct(): boolean;
        get_target(): Pad | null;
        set_target(newtarget: Pad | null): boolean;
    }
    namespace Int64Range {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Int64Range {
        static $gtype: GObject.GType<Int64Range>;
        _init(...args: any[]): void;
        connect<K extends keyof Int64Range.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Int64Range.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Int64Range.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Int64Range.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Int64Range.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Int64Range.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace IntRange {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class IntRange {
        static $gtype: GObject.GType<IntRange>;
        _init(...args: any[]): void;
        connect<K extends keyof IntRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntRange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IntRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntRange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IntRange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace MetaFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class MetaFactory extends PluginFeature {
        static $gtype: GObject.GType<MetaFactory>;
        $signals: MetaFactory.SignalSignatures;
        constructor(properties?: Partial<MetaFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MetaFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MetaFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MetaFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MetaFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MetaFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MetaFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static load(factoryname: string): MetaInfo;
        static register(plugin: Plugin, meta_info: MetaInfo): boolean;
    }
    namespace Object {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "deep-notify": (arg0: Object, arg1: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "deep-notify::name": (arg0: Object, arg1: GObject.ParamSpec) => void;
            "deep-notify::parent": (arg0: Object, arg1: GObject.ParamSpec) => void;
            [key: `deep-notify::${string}`]: (arg0: Object, arg1: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            name: string | null;
            parent: Object | null;
        }
    }
    abstract class Object extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Object>;
        get name(): string | null;
        set name(val: string | null);
        get parent(): Object | null;
        set parent(val: Object | null);
        $signals: Object.SignalSignatures;
        object: GObject.InitiallyUnowned;
        flags: number;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static check_uniqueness(list: Object[], name: string): boolean;
        static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[] | null): void;
        static replace(oldobj: Object | null, newobj: Object | null): [boolean, Object | null];
        vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void;
        add_control_binding(binding: ControlBinding): boolean;
        call_async(func: ObjectCallAsyncFunc): void;
        default_error(error: GLib.Error, debug: string | null): void;
        get_control_binding(property_name: string): ControlBinding | null;
        get_control_rate(): ClockTime;
        get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: (GObject.Value | any)[]): boolean;
        get_name(): string | null;
        get_parent(): Object | null;
        get_path_string(): string;
        get_toplevel(): Object;
        get_value(property_name: string, timestamp: ClockTime): unknown | null;
        has_active_control_bindings(): boolean;
        has_ancestor(ancestor: Object): boolean;
        has_as_ancestor(ancestor: Object): boolean;
        has_as_parent(parent: Object): boolean;
        ref(): Object;
        remove_control_binding(binding: ControlBinding): boolean;
        set_control_binding_disabled(property_name: string, disabled: boolean): void;
        set_control_bindings_disabled(disabled: boolean): void;
        set_control_rate(control_rate: ClockTime): void;
        set_name(name: string | null): boolean;
        set_parent(parent: Object): boolean;
        suggest_next_sync(): ClockTime;
        sync_values(timestamp: ClockTime): boolean;
        unparent(): void;
        unref(): void;
    }
    namespace Pad {
        interface SignalSignatures extends Object.SignalSignatures {
            linked: (arg0: Pad) => void;
            unlinked: (arg0: Pad) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps;
            direction: PadDirection;
            offset: bigint | number;
            template: PadTemplate;
        }
    }
    class Pad extends Object {
        static $gtype: GObject.GType<Pad>;
        get caps(): Caps;
        get direction(): PadDirection;
        get offset(): number;
        set offset(val: bigint | number);
        get template(): PadTemplate;
        set template(val: PadTemplate);
        $signals: Pad.SignalSignatures;
        object: Object;
        element_private: null;
        padtemplate: PadTemplate;
        constructor(properties?: Partial<Pad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, direction: PadDirection): Pad;
        static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;
        static new_from_template(templ: PadTemplate, name: string | null): Pad;
        connect<K extends keyof Pad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static link_get_name(ret: PadLinkReturn): string;
        vfunc_linked(peer: Pad): void;
        vfunc_unlinked(peer: Pad): void;
        activate_mode(mode: PadMode, active: boolean): boolean;
        add_probe(mask: PadProbeType, callback: PadProbeCallback): number;
        can_link(sinkpad: Pad): boolean;
        chain(buffer: Buffer): FlowReturn;
        chain_list(list: BufferList): FlowReturn;
        check_reconfigure(): boolean;
        create_stream_id(parent: Element, stream_id: string | null): string;
        event_default(parent: Object | null, event: Event): boolean;
        forward(forward: PadForwardFunction): boolean;
        get_allowed_caps(): Caps | null;
        get_current_caps(): Caps | null;
        get_direction(): PadDirection;
        get_element_private(): null;
        get_last_flow_return(): FlowReturn;
        get_offset(): number;
        get_pad_template(): PadTemplate | null;
        get_pad_template_caps(): Caps;
        get_parent_element(): Element | null;
        get_peer(): Pad | null;
        get_range(offset: bigint | number, size: number): [FlowReturn, Buffer];
        get_single_internal_link(): Pad | null;
        get_sticky_event(event_type: EventType, idx: number): Event | null;
        get_stream(): Stream | null;
        get_stream_id(): string | null;
        get_task_state(): TaskState;
        has_current_caps(): boolean;
        is_active(): boolean;
        is_blocked(): boolean;
        is_blocking(): boolean;
        is_linked(): boolean;
        iterate_internal_links(): Iterator | null;
        iterate_internal_links_default(parent: Object | null): Iterator | null;
        link(sinkpad: Pad): PadLinkReturn;
        link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn;
        link_maybe_ghosting(sink: Pad): boolean;
        link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean;
        mark_reconfigure(): void;
        needs_reconfigure(): boolean;
        pause_task(): boolean;
        peer_query(query: Query): boolean;
        peer_query_accept_caps(caps: Caps): boolean;
        peer_query_caps(filter: Caps | null): Caps;
        peer_query_convert(src_format: Format, src_val: bigint | number, dest_format: Format): [boolean, number];
        peer_query_duration(format: Format): [boolean, number];
        peer_query_position(format: Format): [boolean, number];
        proxy_query_accept_caps(query: Query): boolean;
        proxy_query_caps(query: Query): boolean;
        pull_range(offset: bigint | number, size: number): [FlowReturn, Buffer];
        push(buffer: Buffer): FlowReturn;
        push_event(event: Event): boolean;
        push_list(list: BufferList): FlowReturn;
        query(query: Query): boolean;
        query_accept_caps(caps: Caps): boolean;
        query_caps(filter: Caps | null): Caps;
        query_convert(src_format: Format, src_val: bigint | number, dest_format: Format): [boolean, number];
        query_default(parent: Object | null, query: Query): boolean;
        query_duration(format: Format): [boolean, number];
        query_position(format: Format): [boolean, number];
        remove_probe(id: bigint | number): void;
        send_event(event: Event): boolean;
        set_activate_function_full(activate: PadActivateFunction): void;
        set_activatemode_function_full(activatemode: PadActivateModeFunction): void;
        set_active(active: boolean): boolean;
        set_chain_function_full(chain: PadChainFunction): void;
        set_chain_list_function_full(chainlist: PadChainListFunction): void;
        set_element_private(priv: null): void;
        set_event_full_function_full(event: PadEventFullFunction): void;
        set_event_function_full(event: PadEventFunction): void;
        set_getrange_function_full(get: PadGetRangeFunction): void;
        set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void;
        set_link_function_full(link: PadLinkFunction): void;
        set_offset(offset: bigint | number): void;
        set_query_function_full(query: PadQueryFunction): void;
        set_unlink_function_full(unlink: PadUnlinkFunction): void;
        start_task(func: TaskFunction): boolean;
        sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void;
        stop_task(): boolean;
        store_sticky_event(event: Event): FlowReturn;
        unlink(sinkpad: Pad): boolean;
        use_fixed_caps(): void;
    }
    namespace PadTemplate {
        interface SignalSignatures extends Object.SignalSignatures {
            "pad-created": (arg0: Pad) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::gtype": (pspec: GObject.ParamSpec) => void;
            "notify::name-template": (pspec: GObject.ParamSpec) => void;
            "notify::presence": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps;
            direction: PadDirection;
            gtype: GObject.GTypeInput;
            name_template: string;
            nameTemplate: string;
            presence: PadPresence;
        }
    }
    class PadTemplate extends Object {
        static $gtype: GObject.GType<PadTemplate>;
        get caps(): Caps;
        get direction(): PadDirection;
        get gtype(): GObject.GType;
        get name_template(): string;
        get nameTemplate(): string;
        get presence(): PadPresence;
        $signals: PadTemplate.SignalSignatures;
        object: Object;
        constructor(properties?: Partial<PadTemplate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate;
        static new_from_static_pad_template_with_gtype(pad_template: StaticPadTemplate, pad_type: GObject.GType): PadTemplate;
        static new_with_gtype(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps, pad_type: GObject.GType): PadTemplate;
        connect<K extends keyof PadTemplate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadTemplate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PadTemplate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadTemplate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PadTemplate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PadTemplate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_pad_created(pad: Pad): void;
        get_caps(): Caps;
        get_documentation_caps(): Caps;
        pad_created(pad: Pad): void;
        set_documentation_caps(caps: Caps): void;
    }
    namespace Pipeline {
        interface SignalSignatures extends Bin.SignalSignatures {
            "notify::auto-flush-bus": (pspec: GObject.ParamSpec) => void;
            "notify::delay": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::async-handling": (pspec: GObject.ParamSpec) => void;
            "notify::message-forward": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Bin.ConstructorProps, ChildProxy.ConstructorProps {
            auto_flush_bus: boolean;
            autoFlushBus: boolean;
            delay: bigint | number;
            latency: bigint | number;
        }
    }
    class Pipeline extends Bin implements ChildProxy {
        static $gtype: GObject.GType<Pipeline>;
        get auto_flush_bus(): boolean;
        set auto_flush_bus(val: boolean);
        get autoFlushBus(): boolean;
        set autoFlushBus(val: boolean);
        get delay(): number;
        set delay(val: bigint | number);
        get latency(): number;
        set latency(val: bigint | number);
        $signals: Pipeline.SignalSignatures;
        bin: Bin;
        fixed_clock: Clock;
        stream_time: ClockTime;
        constructor(properties?: Partial<Pipeline.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): Pipeline;
        connect<K extends keyof Pipeline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pipeline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pipeline.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pipeline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        auto_clock(): void;
        get_auto_flush_bus(): boolean;
        get_bus(): Bus;
        get_bus(...args: never[]): any;
        get_configured_latency(): ClockTime;
        get_delay(): ClockTime;
        get_latency(): ClockTime;
        get_pipeline_clock(): Clock;
        is_live(): boolean;
        set_auto_flush_bus(auto_flush: boolean): void;
        set_delay(delay: ClockTime): void;
        set_latency(latency: ClockTime): void;
        use_clock(clock: Clock | null): void;
        child_added(child: GObject.Object, name: string): void;
        child_removed(child: GObject.Object, name: string): void;
        get_child_by_index<T = GObject.Object>(index: number): T;
        get_child_by_name<T = GObject.Object>(name: string): T;
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        get_children_count(): number;
        get_property(name: string): unknown;
        get_property(...args: never[]): any;
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        set_property(name: string, value: GObject.Value | any): void;
        vfunc_child_added(child: GObject.Object, name: string): void;
        vfunc_child_removed(child: GObject.Object, name: string): void;
        vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
        vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
        vfunc_get_children_count(): number;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    namespace Plugin {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Plugin extends Object {
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
        static list_free(list: Plugin[]): void;
        static load_by_name(name: string): Plugin | null;
        static load_file(filename: string): Plugin;
        static register_static(major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, _package: string, origin: string): boolean;
        static register_static_full(major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, _package: string, origin: string): boolean;
        add_dependency(env_vars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void;
        add_dependency_simple(env_vars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void;
        add_status_error(message: string): void;
        add_status_info(message: string): void;
        add_status_warning(message: string): void;
        get_cache_data(): Structure | null;
        get_description(): string;
        get_filename(): string | null;
        get_license(): string;
        get_name(): string;
        get_name(...args: never[]): any;
        get_origin(): string;
        get_package(): string;
        get_release_date_string(): string | null;
        get_source(): string;
        get_status_errors(): string[] | null;
        get_status_infos(): string[] | null;
        get_status_warnings(): string[] | null;
        get_version(): string;
        is_loaded(): boolean;
        load(): Plugin | null;
        set_cache_data(cache_data: Structure): void;
    }
    namespace PluginFeature {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    abstract class PluginFeature extends Object {
        static $gtype: GObject.GType<PluginFeature>;
        $signals: PluginFeature.SignalSignatures;
        constructor(properties?: Partial<PluginFeature.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PluginFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginFeature.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PluginFeature.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PluginFeature.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PluginFeature.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PluginFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static list_copy(list: PluginFeature[]): PluginFeature[];
        static list_debug(list: PluginFeature[]): void;
        static list_free(list: PluginFeature[]): void;
        static rank_compare_func(p1: null, p2: null): number;
        check_version(min_major: number, min_minor: number, min_micro: number): boolean;
        get_plugin(): Plugin | null;
        get_plugin_name(): string | null;
        get_rank(): number;
        load(): PluginFeature | null;
        set_rank(rank: number): void;
    }
    namespace ProxyPad {
        interface SignalSignatures extends Pad.SignalSignatures {
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Pad.ConstructorProps {}
    }
    class ProxyPad extends Pad {
        static $gtype: GObject.GType<ProxyPad>;
        $signals: ProxyPad.SignalSignatures;
        pad: Pad;
        constructor(properties?: Partial<ProxyPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ProxyPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProxyPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProxyPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProxyPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static chain_default(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn;
        static chain_list_default(pad: Pad, parent: Object | null, list: BufferList): FlowReturn;
        static getrange_default(pad: Pad, parent: Object, offset: bigint | number, size: number): [FlowReturn, Buffer];
        static iterate_internal_links_default(pad: Pad, parent: Object | null): Iterator | null;
        get_internal(): ProxyPad | null;
    }
    namespace Registry {
        interface SignalSignatures extends Object.SignalSignatures {
            "feature-added": (arg0: PluginFeature) => void;
            "plugin-added": (arg0: Plugin) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Registry extends Object {
        static $gtype: GObject.GType<Registry>;
        $signals: Registry.SignalSignatures;
        object: Object;
        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Registry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static fork_is_enabled(): boolean;
        static fork_set_enabled(enabled: boolean): void;
        static get(): Registry;
        add_feature(feature: PluginFeature): boolean;
        add_plugin(plugin: Plugin): boolean;
        check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean;
        feature_filter(filter: PluginFeatureFilter, first: boolean): PluginFeature[];
        find_feature(name: string, type: GObject.GType): PluginFeature | null;
        find_plugin(name: string): Plugin | null;
        get_feature_list(type: GObject.GType): PluginFeature[];
        get_feature_list_by_plugin(name: string): PluginFeature[];
        get_feature_list_cookie(): number;
        get_plugin_list(): Plugin[];
        lookup(filename: string): Plugin | null;
        lookup_feature(name: string): PluginFeature | null;
        plugin_filter(filter: PluginFilter, first: boolean): Plugin[];
        remove_feature(feature: PluginFeature): void;
        remove_plugin(plugin: Plugin): void;
        scan_path(path: string): boolean;
    }
    namespace SharedTaskPool {
        interface SignalSignatures extends TaskPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends TaskPool.ConstructorProps {}
    }
    class SharedTaskPool extends TaskPool {
        static $gtype: GObject.GType<SharedTaskPool>;
        $signals: SharedTaskPool.SignalSignatures;
        constructor(properties?: Partial<SharedTaskPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SharedTaskPool;
        connect<K extends keyof SharedTaskPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SharedTaskPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SharedTaskPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SharedTaskPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SharedTaskPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SharedTaskPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_max_threads(): number;
        set_max_threads(max_threads: number): void;
    }
    namespace Stream {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::stream-flags": (pspec: GObject.ParamSpec) => void;
            "notify::stream-id": (pspec: GObject.ParamSpec) => void;
            "notify::stream-type": (pspec: GObject.ParamSpec) => void;
            "notify::tags": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps | null;
            stream_flags: StreamFlags;
            streamFlags: StreamFlags;
            stream_id: string | null;
            streamId: string | null;
            stream_type: StreamType;
            streamType: StreamType;
            tags: TagList | null;
        }
    }
    class Stream extends Object {
        static $gtype: GObject.GType<Stream>;
        get caps(): Caps | null;
        set caps(val: Caps | null);
        get stream_flags(): StreamFlags;
        set stream_flags(val: StreamFlags);
        get streamFlags(): StreamFlags;
        set streamFlags(val: StreamFlags);
        get stream_id(): string | null;
        get streamId(): string | null;
        get stream_type(): StreamType;
        set stream_type(val: StreamType);
        get streamType(): StreamType;
        set streamType(val: StreamType);
        get tags(): TagList | null;
        set tags(val: TagList | null);
        $signals: Stream.SignalSignatures;
        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](stream_id: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream;
        connect<K extends keyof Stream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_caps(): Caps | null;
        get_stream_flags(): StreamFlags;
        get_stream_id(): string | null;
        get_stream_type(): StreamType;
        get_tags(): TagList | null;
        set_caps(caps: Caps | null): void;
        set_stream_flags(flags: StreamFlags): void;
        set_stream_type(stream_type: StreamType): void;
        set_tags(tags: TagList | null): void;
    }
    namespace StreamCollection {
        interface SignalSignatures extends Object.SignalSignatures {
            "stream-notify": (arg0: Stream, arg1: GObject.ParamSpec) => void;
            "notify::upstream-id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "stream-notify::upstream-id": (arg0: Stream, arg1: GObject.ParamSpec) => void;
            "stream-notify::name": (arg0: Stream, arg1: GObject.ParamSpec) => void;
            "stream-notify::parent": (arg0: Stream, arg1: GObject.ParamSpec) => void;
            [key: `stream-notify::${string}`]: (arg0: Stream, arg1: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            upstream_id: string | null;
            upstreamId: string | null;
        }
    }
    class StreamCollection extends Object {
        static $gtype: GObject.GType<StreamCollection>;
        get upstream_id(): string | null;
        set upstream_id(val: string | null);
        get upstreamId(): string | null;
        set upstreamId(val: string | null);
        $signals: StreamCollection.SignalSignatures;
        constructor(properties?: Partial<StreamCollection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](upstream_id: string | null): StreamCollection;
        connect<K extends keyof StreamCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamCollection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamCollection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamCollection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StreamCollection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_stream_notify(stream: Stream, pspec: GObject.ParamSpec): void;
        add_stream(stream: Stream): boolean;
        get_size(): number;
        get_stream(index: number): Stream | null;
        get_upstream_id(): string | null;
    }
    namespace SystemClock {
        interface SignalSignatures extends Clock.SignalSignatures {
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Clock.ConstructorProps {
            clock_type: ClockType;
            clockType: ClockType;
        }
    }
    class SystemClock extends Clock {
        static $gtype: GObject.GType<SystemClock>;
        get clock_type(): ClockType;
        set clock_type(val: ClockType);
        get clockType(): ClockType;
        set clockType(val: ClockType);
        $signals: SystemClock.SignalSignatures;
        clock: Clock;
        constructor(properties?: Partial<SystemClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SystemClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SystemClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SystemClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SystemClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static obtain(): Clock;
        static set_default(new_clock: Clock | null): void;
    }
    namespace Task {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Task extends Object {
        static $gtype: GObject.GType<Task>;
        $signals: Task.SignalSignatures;
        object: Object;
        state: TaskState;
        func: TaskFunction;
        user_data: null;
    notify: GLib.DestroyNotify | any;
        running: boolean;
        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](func: TaskFunction): Task;
        connect<K extends keyof Task.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Task.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Task.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static cleanup_all(): void;
        get_pool(): TaskPool;
        get_state(): TaskState;
        join(): boolean;
        pause(): boolean;
        resume(): boolean;
        set_enter_callback(enter_func: TaskThreadFunc): void;
        set_leave_callback(leave_func: TaskThreadFunc): void;
        set_lock(mutex: GLib.RecMutex): void;
        set_pool(pool: TaskPool): void;
        set_state(state: TaskState): boolean;
        start(): boolean;
        stop(): boolean;
    }
    namespace TaskPool {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class TaskPool extends Object {
        static $gtype: GObject.GType<TaskPool>;
        $signals: TaskPool.SignalSignatures;
        object: Object;
        constructor(properties?: Partial<TaskPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): TaskPool;
        connect<K extends keyof TaskPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TaskPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TaskPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_cleanup(): void;
        vfunc_dispose_handle(id: null): void;
        vfunc_join(id: null): void;
        vfunc_prepare(): void;
        vfunc_push(func: TaskPoolFunction): null;
        cleanup(): void;
        dispose_handle(id: null): void;
        join(id: null): void;
        prepare(): void;
        push(func: TaskPoolFunction): null;
    }
    namespace Tracer {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::params": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            params: string;
        }
    }
    abstract class Tracer extends Object {
        static $gtype: GObject.GType<Tracer>;
        get params(): string;
        set params(val: string);
        $signals: Tracer.SignalSignatures;
        constructor(properties?: Partial<Tracer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Tracer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tracer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tracer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tracer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tracer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tracer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static register(plugin: Plugin | null, name: string, type: GObject.GType): boolean;
        static set_use_structure_params(use_structure_params: boolean): void;
        static uses_structure_params(): boolean;
    }
    namespace TracerFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class TracerFactory extends PluginFeature {
        static $gtype: GObject.GType<TracerFactory>;
        $signals: TracerFactory.SignalSignatures;
        constructor(properties?: Partial<TracerFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TracerFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TracerFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TracerFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TracerFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TracerFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TracerFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_list(): TracerFactory[];
        get_tracer_type(): GObject.GType;
    }
    namespace TracerRecord {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class TracerRecord extends Object {
        static $gtype: GObject.GType<TracerRecord>;
        $signals: TracerRecord.SignalSignatures;
        constructor(properties?: Partial<TracerRecord.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TracerRecord.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TracerRecord.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TracerRecord.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TracerRecord.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TracerRecord.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TracerRecord.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace TypeFindFactory {
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }
    class TypeFindFactory extends PluginFeature {
        static $gtype: GObject.GType<TypeFindFactory>;
        $signals: TypeFindFactory.SignalSignatures;
        constructor(properties?: Partial<TypeFindFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TypeFindFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TypeFindFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TypeFindFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TypeFindFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TypeFindFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TypeFindFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_list(): TypeFindFactory[];
        call_function(find: TypeFind): void;
        get_caps(): Caps | null;
        get_extensions(): string[] | null;
        has_function(): boolean;
    }
    namespace ValueArray {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ValueArray {
        static $gtype: GObject.GType<ValueArray>;
        _init(...args: any[]): void;
        connect<K extends keyof ValueArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValueArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValueArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValueArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static append_and_take_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static get_size(value: GObject.Value | any): number;
        static get_value(value: GObject.Value | any, index: number): unknown;
        static init(value: GObject.Value | any, prealloc: number): unknown;
        static prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    }
    namespace ValueList {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ValueList {
        static $gtype: GObject.GType<ValueList>;
        _init(...args: any[]): void;
        connect<K extends keyof ValueList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValueList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValueList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValueList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static append_and_take_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static concat(value1: GObject.Value | any, value2: GObject.Value | any): unknown;
        static get_size(value: GObject.Value | any): number;
        static get_value(value: GObject.Value | any, index: number): unknown;
        static init(value: GObject.Value | any, prealloc: number): unknown;
        static merge(value1: GObject.Value | any, value2: GObject.Value | any): unknown;
        static prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    }
    namespace ValueUniqueList {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ValueUniqueList {
        static $gtype: GObject.GType<ValueUniqueList>;
        _init(...args: any[]): void;
        connect<K extends keyof ValueUniqueList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueUniqueList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValueUniqueList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValueUniqueList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValueUniqueList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValueUniqueList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static append_and_take_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
        static concat(value1: GObject.Value | any, value2: GObject.Value | any): unknown;
        static get_size(value: GObject.Value | any): number;
        static get_value(value: GObject.Value | any, index: number): unknown;
        static prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    }
    class AllocationParams {
        static $gtype: GObject.GType<AllocationParams>;
        flags: MemoryFlags;
        align: number;
        prefix: number;
        padding: number;
        constructor(properties?: Partial<{
            flags: MemoryFlags;
            align: number;
            prefix: number;
            padding: number;
        }>);
        static ["new"](): AllocationParams;
        copy(): AllocationParams | null;
        free(): void;
        init(): void;
    }
    type AllocatorClass = typeof Allocator;
    abstract class AllocatorPrivate {
        static $gtype: GObject.GType<AllocatorPrivate>;
    }
    class AtomicQueue {
        static $gtype: GObject.GType<AtomicQueue>;
        constructor(initial_size: number);
        static ["new"](initial_size: number): AtomicQueue;
        length(): number;
        peek(): null;
        pop(): null;
        push(data: null): void;
        ref(): void;
        unref(): void;
    }
    type BinClass = typeof Bin;
    abstract class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;
    }
    class Buffer {
        static $gtype: GObject.GType<Buffer>;
        pool: BufferPool;
        pts: ClockTime;
        dts: ClockTime;
        duration: ClockTime;
        offset: number;
        offset_end: number;
        constructor(properties?: Partial<{
            mini_object: MiniObject;
            pts: ClockTime;
            dts: ClockTime;
            duration: ClockTime;
            offset: number;
            offset_end: number;
        }>);
        static ["new"](): Buffer;
        static new_allocate(allocator: Allocator | null, size: bigint | number, params: AllocationParams | null): Buffer;
        static new_memdup(data: Uint8Array | string): Buffer;
        static new_wrapped(data: Uint8Array | string): Buffer;
        static new_wrapped_bytes(bytes: GLib.Bytes | Uint8Array): Buffer;
        static new_wrapped_full(flags: MemoryFlags, data: Uint8Array | string, maxsize: bigint | number, offset: bigint | number, notify: GLib.DestroyNotify | null): Buffer;
        static get_max_memory(): number;
        add_custom_meta(name: string): CustomMeta | null;
        add_meta(info: MetaInfo, params: null): Meta | null;
        add_parent_buffer_meta(ref: Buffer): ParentBufferMeta | null;
        add_protection_meta(info: Structure): ProtectionMeta;
        add_reference_timestamp_meta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null;
        append(buf2: Buffer): Buffer;
        append_memory(mem: Memory): void;
        append_region(buf2: Buffer, offset: bigint | number, size: bigint | number): Buffer;
        copy(): Buffer | null;
        copy_deep(): Buffer | null;
        copy_into(src: Buffer, flags: BufferCopyFlags, offset: bigint | number, size: bigint | number): boolean;
        copy_region(flags: BufferCopyFlags, offset: bigint | number, size: bigint | number): Buffer | null;
        extract(offset: bigint | number): [number, Uint8Array];
        extract_dup(offset: bigint | number, size: bigint | number): Uint8Array;
        fill(offset: bigint | number, src: Uint8Array | string): number;
        find_memory(offset: bigint | number, size: bigint | number): [boolean, number, number, number];
        foreach_meta(func: BufferForeachMetaFunc): boolean;
        get_all_memory(): Memory | null;
        get_custom_meta(name: string): CustomMeta | null;
        get_flags(): BufferFlags;
        get_memory(idx: number): Memory | null;
        get_memory_range(idx: number, length: number): Memory | null;
        get_meta(api: GObject.GType): Meta | null;
        get_n_meta(api_type: GObject.GType): number;
        get_reference_timestamp_meta(reference: Caps | null): ReferenceTimestampMeta | null;
        get_size(): number;
        get_sizes(): [number, number, number];
        get_sizes_range(idx: number, length: number): [number, number, number];
        has_flags(flags: BufferFlags): boolean;
        insert_memory(idx: number, mem: Memory): void;
        is_all_memory_writable(): boolean;
        is_memory_range_writable(idx: number, length: number): boolean;
        map(flags: MapFlags): [boolean, MapInfo];
        map_range(idx: number, length: number, flags: MapFlags): [boolean, MapInfo];
        memcmp(offset: bigint | number, mem: Uint8Array | string): number;
        memset(offset: bigint | number, val: number, size: bigint | number): number;
        n_memory(): number;
        peek_memory(idx: number): Memory | null;
        prepend_memory(mem: Memory): void;
        ref(): Buffer;
        remove_all_memory(): void;
        remove_memory(idx: number): void;
        remove_memory_range(idx: number, length: number): void;
        remove_meta(meta: Meta): boolean;
        replace_all_memory(mem: Memory): void;
        replace_memory(idx: number, mem: Memory): void;
        replace_memory_range(idx: number, length: number, mem: Memory): void;
        resize(offset: bigint | number, size: bigint | number): void;
        resize_range(idx: number, length: number, offset: bigint | number, size: bigint | number): boolean;
        set_flags(flags: BufferFlags): boolean;
        set_size(size: bigint | number): void;
        unmap(info: MapInfo): void;
        unref(): void;
        unset_flags(flags: BufferFlags): boolean;
    }
    class BufferList {
        static $gtype: GObject.GType<BufferList>;
        constructor(properties?: Partial<{}>);
        static ["new"](): BufferList;
        static new_sized(size: number): BufferList;
        static replace(old_list: BufferList | null, new_list: BufferList | null): [boolean, BufferList | null];
        static take(old_list: BufferList, new_list: BufferList | null): [boolean, BufferList];
        calculate_size(): number;
        copy(): BufferList;
        copy_deep(): BufferList;
        foreach(func: BufferListFunc): boolean;
        get(idx: number): Buffer;
        get_writable(idx: number): Buffer;
        insert(idx: number, buffer: Buffer): void;
        is_writable(): boolean;
        length(): number;
        make_writable(): BufferList;
        ref(): BufferList;
        remove(idx: number, length: number): void;
        unref(): void;
    }
    class BufferPoolAcquireParams {
        static $gtype: GObject.GType<BufferPoolAcquireParams>;
        format: Format;
        start: number;
        stop: number;
        flags: BufferPoolAcquireFlags;
    }
    type BufferPoolClass = typeof BufferPool;
    abstract class BufferPoolPrivate {
        static $gtype: GObject.GType<BufferPoolPrivate>;
    }
    type BusClass = typeof Bus;
    abstract class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;
    }
    class ByteArrayInterface {
        static $gtype: GObject.GType<ByteArrayInterface>;
        data: number;
        len: number;
    }
    class Caps {
        static $gtype: GObject.GType<Caps>;
        constructor(properties?: Partial<{
            mini_object: MiniObject;
        }>);
        static new_any(): Caps;
        static new_empty(): Caps;
        static new_empty_simple(media_type: string): Caps;
        static new_id_str_empty_simple(media_type: IdStr): Caps;
        static new_static_str_empty_simple(media_type: string): Caps;
        static from_string(string: string): Caps | null;
        append(caps2: Caps): void;
        append_structure(structure: Structure): void;
        append_structure_full(structure: Structure, features: CapsFeatures | null): void;
        can_intersect(caps2: Caps): boolean;
        copy(): Caps;
        copy_nth(nth: number): Caps;
        filter_and_map_in_place(func: CapsFilterMapFunc): void;
        fixate(): Caps;
        foreach(func: CapsForeachFunc): boolean;
        get_features(index: number): CapsFeatures | null;
        get_size(): number;
        get_structure(index: number): Structure;
        id_str_set_value(field: IdStr, value: GObject.Value | any): void;
        intersect(caps2: Caps): Caps;
        intersect_full(caps2: Caps, mode: CapsIntersectMode): Caps;
        is_always_compatible(caps2: Caps): boolean;
        is_any(): boolean;
        is_empty(): boolean;
        is_equal(caps2: Caps): boolean;
        is_equal_fixed(caps2: Caps): boolean;
        is_fixed(): boolean;
        is_strictly_equal(caps2: Caps): boolean;
        is_subset(superset: Caps): boolean;
        is_subset_structure(structure: Structure): boolean;
        is_subset_structure_full(structure: Structure, features: CapsFeatures | null): boolean;
        is_writable(): boolean;
        make_writable(): Caps;
        map_in_place(func: CapsMapFunc): boolean;
        merge(caps2: Caps): Caps;
        merge_structure(structure: Structure): Caps;
        merge_structure_full(structure: Structure, features: CapsFeatures | null): Caps;
        normalize(): Caps;
        ref(): Caps;
        remove_structure(idx: number): void;
        serialize(flags: SerializeFlags): string;
        set_features(index: number, features: CapsFeatures | null): void;
        set_features_simple(features: CapsFeatures | null): void;
        set_value(field: string, value: GObject.Value | any): void;
        set_value_static_str(field: string, value: GObject.Value | any): void;
        simplify(): Caps;
        steal_structure(index: number): Structure | null;
        subtract(subtrahend: Caps): Caps;
        to_string(): string;
        truncate(): Caps;
        unref(): void;
    }
    class CapsFeatures {
        static $gtype: GObject.GType<CapsFeatures>;
        constructor(properties?: Partial<{}>);
        static new_any(): CapsFeatures;
        static new_empty(): CapsFeatures;
        static new_single(feature: string): CapsFeatures;
        static new_single_static_str(feature: string): CapsFeatures;
        static from_string(features: string): CapsFeatures | null;
        add(feature: string): void;
        add_id(feature: GLib.Quark): void;
        add_id_str(feature: IdStr): void;
        add_static_str(feature: string): void;
        contains(feature: string): boolean;
        contains_id(feature: GLib.Quark): boolean;
        contains_id_str(feature: IdStr): boolean;
        copy(): CapsFeatures;
        free(): void;
        get_nth(i: number): string | null;
        get_nth_id(i: number): GLib.Quark;
        get_nth_id_str(i: number): IdStr;
        get_size(): number;
        is_any(): boolean;
        is_equal(features2: CapsFeatures): boolean;
        remove(feature: string): void;
        remove_id(feature: GLib.Quark): void;
        remove_id_str(feature: IdStr): void;
        to_string(): string;
    }
    type ChildProxyInterface = typeof ChildProxy;
    type ClockClass = typeof Clock;
    class ClockEntry {
        static $gtype: GObject.GType<ClockEntry>;
        refcount: number;
    }
    abstract class ClockPrivate {
        static $gtype: GObject.GType<ClockPrivate>;
    }
    class Context {
        static $gtype: GObject.GType<Context>;
        constructor(context_type: string, persistent: boolean);
        static ["new"](context_type: string, persistent: boolean): Context;
        static replace(old_context: Context, new_context: Context | null): [boolean, Context];
        copy(): Context;
        get_context_type(): string;
        get_structure(): Structure;
        get_task_pool(): [boolean, TaskPool | null];
        has_context_type(context_type: string): boolean;
        is_persistent(): boolean;
        is_writable(): boolean;
        make_writable(): Context;
        ref(): Context;
        set_task_pool(pool: TaskPool | null): void;
        unref(): void;
        writable_structure(): Structure;
    }
    type ControlBindingClass = typeof ControlBinding;
    abstract class ControlBindingPrivate {
        static $gtype: GObject.GType<ControlBindingPrivate>;
    }
    type ControlSourceClass = typeof ControlSource;
    class CustomMeta {
        static $gtype: GObject.GType<CustomMeta>;
        get_structure(): Structure;
        has_name(name: string): boolean;
    }
    class DateTime {
        static $gtype: GObject.GType<DateTime>;
        constructor(properties?: Partial<{}>);
        static ["new"](tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
        static new_from_g_date_time(dt: GLib.DateTime | null): DateTime;
        static new_from_iso8601_string(string: string): DateTime;
        static new_from_unix_epoch_local_time(secs: bigint | number): DateTime;
        static new_from_unix_epoch_local_time_usecs(usecs: bigint | number): DateTime;
        static new_from_unix_epoch_utc(secs: bigint | number): DateTime;
        static new_from_unix_epoch_utc_usecs(usecs: bigint | number): DateTime;
        static new_local_time(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
        static new_now_local_time(): DateTime;
        static new_now_utc(): DateTime;
        static new_y(year: number): DateTime;
        static new_ym(year: number, month: number): DateTime;
        static new_ymd(year: number, month: number, day: number): DateTime;
        get_day(): number;
        get_hour(): number;
        get_microsecond(): number;
        get_minute(): number;
        get_month(): number;
        get_second(): number;
        get_time_zone_offset(): number;
        get_year(): number;
        has_day(): boolean;
        has_month(): boolean;
        has_second(): boolean;
        has_time(): boolean;
        has_year(): boolean;
        ref(): DateTime;
        to_g_date_time(): GLib.DateTime | null;
        to_iso8601_string(): string | null;
        unref(): void;
    }
    class DebugCategory {
        static $gtype: GObject.GType<DebugCategory>;
        constructor(properties?: Partial<{}>);
        free(): void;
        get_color(): number;
        get_description(): string;
        get_name(): string;
        get_threshold(): DebugLevel;
        reset_threshold(): void;
        set_threshold(level: DebugLevel): void;
    }
    abstract class DebugMessage {
        static $gtype: GObject.GType<DebugMessage>;
        get(): string | null;
        get_id(): string | null;
    }
    type DeviceClass = typeof Device;
    type DeviceMonitorClass = typeof DeviceMonitor;
    abstract class DeviceMonitorPrivate {
        static $gtype: GObject.GType<DeviceMonitorPrivate>;
    }
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    type DeviceProviderClass = typeof DeviceProvider;
    type DeviceProviderFactoryClass = typeof DeviceProviderFactory;
    abstract class DeviceProviderPrivate {
        static $gtype: GObject.GType<DeviceProviderPrivate>;
    }
    type DynamicTypeFactoryClass = typeof DynamicTypeFactory;
    type ElementClass = typeof Element;
    type ElementFactoryClass = typeof ElementFactory;
    class Event {
        static $gtype: GObject.GType<Event>;
        type: EventType;
        timestamp: number;
        seqnum: number;
        constructor(properties?: Partial<{
            mini_object: MiniObject;
            type: EventType;
            timestamp: number;
            seqnum: number;
        }>);
        static new_buffer_size(format: Format, minsize: bigint | number, maxsize: bigint | number, async: boolean): Event;
        static new_caps(caps: Caps): Event;
        static new_custom(type: EventType, structure: Structure): Event;
        static new_eos(): Event;
        static new_flush_start(): Event;
        static new_flush_stop(reset_time: boolean): Event;
        static new_gap(timestamp: ClockTime, duration: ClockTime): Event;
        static new_instant_rate_change(rate_multiplier: number, new_flags: SegmentFlags): Event;
        static new_instant_rate_sync_time(rate_multiplier: number, running_time: ClockTime, upstream_running_time: ClockTime): Event;
        static new_latency(latency: ClockTime): Event;
        static new_navigation(structure: Structure): Event;
        static new_protection(system_id: string, data: Buffer, origin: string): Event;
        static new_qos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event;
        static new_reconfigure(): Event;
        static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: bigint | number, stop_type: SeekType, stop: bigint | number): Event;
        static new_segment(segment: Segment): Event;
        static new_segment_done(format: Format, position: bigint | number): Event;
        static new_select_streams(streams: string[]): Event;
        static new_sink_message(name: string, msg: Message): Event;
        static new_step(format: Format, amount: bigint | number, rate: number, flush: boolean, intermediate: boolean): Event;
        static new_stream_collection(collection: StreamCollection): Event;
        static new_stream_group_done(group_id: number): Event;
        static new_stream_start(stream_id: string): Event;
        static new_tag(taglist: TagList): Event;
        static new_toc(toc: Toc, updated: boolean): Event;
        static new_toc_select(uid: string): Event;
        copy(): Event;
        copy_segment(segment: Segment): void;
        get_running_time_offset(): number;
        get_seqnum(): number;
        get_structure(): Structure | null;
        has_name(name: string): boolean;
        has_name_id(name: GLib.Quark): boolean;
        is_writable(): boolean;
        make_writable(): Event;
        parse_buffer_size(): [Format | null, number, number, boolean];
        parse_caps(): Caps | null;
        parse_flush_stop(): boolean;
        parse_gap(): [ClockTime | null, ClockTime | null];
        parse_gap_flags(): GapFlags | null;
        parse_group_id(): [boolean, number];
        parse_instant_rate_change(): [number, SegmentFlags | null];
        parse_instant_rate_sync_time(): [number, ClockTime | null, ClockTime | null];
        parse_latency(): ClockTime | null;
        parse_protection(): [string, Buffer | null, string];
        parse_qos(): [QOSType | null, number, ClockTimeDiff | null, ClockTime | null];
        parse_seek(): [number, Format | null, SeekFlags | null, SeekType | null, number, SeekType | null, number];
        parse_seek_trickmode_interval(): ClockTime | null;
        parse_segment(): Segment | null;
        parse_segment_done(): [Format | null, number];
        parse_select_streams(): string[] | null;
        parse_sink_message(): Message | null;
        parse_step(): [Format | null, number, number, boolean, boolean];
        parse_stream(): Stream | null;
        parse_stream_collection(): StreamCollection | null;
        parse_stream_flags(): StreamFlags | null;
        parse_stream_group_done(): number;
        parse_stream_start(): string;
        parse_tag(): TagList | null;
        parse_toc(): [Toc | null, boolean];
        parse_toc_select(): string;
        ref(): Event;
        set_gap_flags(flags: GapFlags): void;
        set_group_id(group_id: number): void;
        set_running_time_offset(offset: bigint | number): void;
        set_seek_trickmode_interval(interval: ClockTime): void;
        set_seqnum(seqnum: number): void;
        set_stream(stream: Stream): void;
        set_stream_flags(flags: StreamFlags): void;
        unref(): void;
        writable_structure(): Structure;
    }
    class FormatDefinition {
        static $gtype: GObject.GType<FormatDefinition>;
        value: Format;
        nick: string;
        description: string;
        quark: GLib.Quark;
    }
    type GhostPadClass = typeof GhostPad;
    abstract class GhostPadPrivate {
        static $gtype: GObject.GType<GhostPadPrivate>;
    }
    class IdStr {
        static $gtype: GObject.GType<IdStr>;
        constructor(properties?: Partial<{}>);
        static ["new"](): IdStr;
        as_str(): string;
        clear(): void;
        copy(): IdStr;
        copy_into(s: IdStr): void;
        free(): void;
        get_len(): number;
        init(): void;
        is_equal(s2: IdStr): boolean;
        is_equal_to_str(s2: string): boolean;
        is_equal_to_str_with_len(s2: string, len: bigint | number): boolean;
        move(s: IdStr): void;
        set(value: string): void;
        set_static_str(value: string): void;
        set_static_str_with_len(value: string, len: bigint | number): void;
        set_with_len(value: string, len: bigint | number): void;
    }
    class Iterator {
        static $gtype: GObject.GType<Iterator>;
        item: IteratorItemFunction;
        type: GObject.GType;
        cookie: number;
        master_cookie: number;
        size: number;
        constructor(size: number, type: GObject.GType, lock: GLib.Mutex, master_cookie: null, copy: IteratorCopyFunction, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction);
        static new_single(type: GObject.GType, object: GObject.Value | any): Iterator;
        copy(): Iterator;
        filter(func: GLib.CompareFunc, user_data: GObject.Value | any): Iterator;
        find_custom(func: GLib.CompareFunc): [boolean, unknown];
        fold(func: IteratorFoldFunction, ret: GObject.Value | any): IteratorResult;
        foreach(func: IteratorForeachFunction): IteratorResult;
        free(): void;
        next(): [IteratorResult, unknown];
        push(other: Iterator): void;
        resync(): void;
    }
    abstract class LogContext {
        static $gtype: GObject.GType<LogContext>;
        free(): void;
        reset(): void;
    }
    abstract class LogContextBuilder {
        static $gtype: GObject.GType<LogContextBuilder>;
    }
    class MapInfo {
        static $gtype: GObject.GType<MapInfo>;
        flags: MapFlags;
        data: Uint8Array;
        size: number;
        maxsize: number;
        user_data: null[];
        clear(): void;
        get_data(): Uint8Array | null;
        init(): void;
    }
    class Memory {
        static $gtype: GObject.GType<Memory>;
        allocator: Allocator;
        maxsize: number;
        align: number;
        offset: number;
        size: number;
        constructor(flags: MemoryFlags, data: Uint8Array | string, maxsize: bigint | number, offset: bigint | number, notify: GLib.DestroyNotify | null);
        static new_wrapped(flags: MemoryFlags, data: Uint8Array | string, maxsize: bigint | number, offset: bigint | number, notify: GLib.DestroyNotify | null): Memory;
        copy(offset: bigint | number, size: bigint | number): Memory | null;
        get_sizes(): [number, number, number];
        is_span(mem2: Memory): [boolean, number];
        is_type(mem_type: string): boolean;
        is_writable(): boolean;
        make_mapped(flags: MapFlags): [Memory | null, MapInfo];
        make_writable(): Memory;
        map(flags: MapFlags): [boolean, MapInfo];
        ref(): Memory;
        resize(offset: bigint | number, size: bigint | number): void;
        share(offset: bigint | number, size: bigint | number): Memory;
        unmap(info: MapInfo): void;
        unref(): void;
    }
    class Message {
        static $gtype: GObject.GType<Message>;
        type: MessageType;
        timestamp: number;
        src: Object;
        seqnum: number;
        constructor(src: Object | null, structure: Structure);
        static new_application(src: Object | null, structure: Structure): Message;
        static new_async_done(src: Object | null, running_time: ClockTime): Message;
        static new_async_start(src: Object | null): Message;
        static new_buffering(src: Object | null, percent: number): Message;
        static new_clock_lost(src: Object | null, clock: Clock): Message;
        static new_clock_provide(src: Object | null, clock: Clock, ready: boolean): Message;
        static new_custom(type: MessageType, src: Object | null, structure: Structure | null): Message;
        static new_device_added(src: Object | null, device: Device): Message;
        static new_device_changed(src: Object | null, device: Device, changed_device: Device): Message;
        static new_device_monitor_started(src: Object | null, success: boolean): Message;
        static new_device_removed(src: Object | null, device: Device): Message;
        static new_duration_changed(src: Object | null): Message;
        static new_element(src: Object | null, structure: Structure): Message;
        static new_eos(src: Object | null): Message;
        static new_error(src: Object | null, error: GLib.Error, debug: string | null): Message;
        static new_error_with_details(src: Object | null, error: GLib.Error, debug: string | null, details: Structure | null): Message;
        static new_have_context(src: Object | null, context: Context): Message;
        static new_info(src: Object | null, error: GLib.Error, debug: string | null): Message;
        static new_info_with_details(src: Object | null, error: GLib.Error, debug: string | null, details: Structure | null): Message;
        static new_instant_rate_request(src: Object | null, rate_multiplier: number): Message;
        static new_latency(src: Object | null): Message;
        static new_need_context(src: Object | null, context_type: string): Message;
        static new_new_clock(src: Object | null, clock: Clock): Message;
        static new_progress(src: Object | null, type: ProgressType, code: string, text: string): Message;
        static new_property_notify(src: Object, property_name: string, val: GObject.Value | any | null): Message;
        static new_qos(src: Object | null, live: boolean, running_time: bigint | number, stream_time: bigint | number, timestamp: bigint | number, duration: bigint | number): Message;
        static new_redirect(src: Object | null, location: string, tag_list: TagList | null, entry_struct: Structure | null): Message;
        static new_request_state(src: Object | null, state: State): Message;
        static new_reset_time(src: Object | null, running_time: ClockTime): Message;
        static new_segment_done(src: Object | null, format: Format, position: bigint | number): Message;
        static new_segment_start(src: Object | null, format: Format, position: bigint | number): Message;
        static new_state_changed(src: Object | null, oldstate: State, newstate: State, pending: State): Message;
        static new_state_dirty(src: Object | null): Message;
        static new_step_done(src: Object | null, format: Format, amount: bigint | number, rate: number, flush: boolean, intermediate: boolean, duration: bigint | number, eos: boolean): Message;
        static new_step_start(src: Object | null, active: boolean, format: Format, amount: bigint | number, rate: number, flush: boolean, intermediate: boolean): Message;
        static new_stream_collection(src: Object | null, collection: StreamCollection): Message;
        static new_stream_start(src: Object | null): Message;
        static new_stream_status(src: Object | null, type: StreamStatusType, owner: Element): Message;
        static new_streams_selected(src: Object | null, collection: StreamCollection): Message;
        static new_structure_change(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message;
        static new_tag(src: Object | null, tag_list: TagList): Message;
        static new_toc(src: Object | null, toc: Toc, updated: boolean): Message;
        static new_warning(src: Object | null, error: GLib.Error, debug: string | null): Message;
        static new_warning_with_details(src: Object | null, error: GLib.Error, debug: string | null, details: Structure | null): Message;
        static take(old_message: Message, new_message: Message | null): [boolean, Message];
        add_redirect_entry(location: string, tag_list: TagList | null, entry_struct: Structure | null): void;
        copy(): Message;
        get_details(): Structure | null;
        get_num_redirect_entries(): number;
        get_seqnum(): number;
        get_stream_status_object(): unknown | null;
        get_structure(): Structure | null;
        has_name(name: string): boolean;
        is_writable(): boolean;
        make_writable(): Message;
        parse_async_done(): ClockTime | null;
        parse_buffering(): number;
        parse_buffering_stats(): [BufferingMode | null, number, number, number];
        parse_clock_lost(): Clock | null;
        parse_clock_provide(): [Clock | null, boolean];
        parse_context_type(): [boolean, string];
        parse_device_added(): Device | null;
        parse_device_changed(): [Device | null, Device | null];
        parse_device_monitor_started(): boolean;
        parse_device_removed(): Device | null;
        parse_error(): [GLib.Error | null, string];
        parse_error_details(): Structure | null;
        parse_error_writable_details(): Structure | null;
        parse_group_id(): [boolean, number];
        parse_have_context(): Context | null;
        parse_info(): [GLib.Error | null, string];
        parse_info_details(): Structure | null;
        parse_info_writable_details(): Structure | null;
        parse_instant_rate_request(): number;
        parse_new_clock(): Clock | null;
        parse_progress(): [ProgressType | null, string, string];
        parse_property_notify(): [Object | null, string, unknown | null];
        parse_qos(): [boolean, number, number, number, number];
        parse_qos_stats(): [Format | null, number, number];
        parse_qos_values(): [number, number, number];
        parse_redirect_entry(entry_index: bigint | number): [string, TagList | null, Structure | null];
        parse_request_state(): State | null;
        parse_reset_time(): ClockTime | null;
        parse_segment_done(): [Format | null, number];
        parse_segment_start(): [Format | null, number];
        parse_state_changed(): [State | null, State | null, State | null];
        parse_step_done(): [Format | null, number, number, boolean, boolean, number, boolean];
        parse_step_start(): [boolean, Format | null, number, number, boolean, boolean];
        parse_stream_collection(): StreamCollection | null;
        parse_stream_status(): [StreamStatusType, Element];
        parse_streams_selected(): StreamCollection | null;
        parse_structure_change(): [StructureChangeType, Element | null, boolean];
        parse_tag(): TagList;
        parse_toc(): [Toc, boolean];
        parse_warning(): [GLib.Error | null, string];
        parse_warning_details(): Structure | null;
        parse_warning_writable_details(): Structure | null;
        ref(): Message;
        set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: bigint | number): void;
        set_details(details: Structure | null): void;
        set_group_id(group_id: number): void;
        set_qos_stats(format: Format, processed: bigint | number, dropped: bigint | number): void;
        set_qos_values(jitter: bigint | number, proportion: number, quality: number): void;
        set_seqnum(seqnum: number): void;
        set_stream_status_object(object: GObject.Value | any): void;
        streams_selected_add(stream: Stream): void;
        streams_selected_get_size(): number;
        streams_selected_get_stream(idx: number): Stream | null;
        unref(): void;
        writable_details(): Structure;
        writable_structure(): Structure;
    }
    class Meta {
        static $gtype: GObject.GType<Meta>;
        flags: MetaFlags;
        static api_type_aggregate_params(api: GObject.GType, aggregated_params: Structure, params0: Structure, params1: Structure): boolean;
        static api_type_get_tags(api: GObject.GType): string[];
        static api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean;
        static api_type_register(api: string, tags: string[]): GObject.GType;
        static api_type_set_params_aggregator(api: GObject.GType, aggregator: AllocationMetaParamsAggregator): void;
        static api_type_tags_contain_only(api: GObject.GType, valid_tags: string[]): boolean;
        static deserialize(buffer: Buffer, data: Uint8Array | string): [Meta | null, number];
        static get_info(impl: string): MetaInfo | null;
        static register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo;
        static register_custom_simple(name: string): MetaInfo;
        compare_seqnum(meta2: Meta): number;
        get_seqnum(): number;
        serialize(data: ByteArrayInterface): boolean;
        serialize_simple(data: Uint8Array | string): boolean;
    }
    type MetaFactoryClass = typeof MetaFactory;
    class MetaInfo {
        static $gtype: GObject.GType<MetaInfo>;
        api: GObject.GType;
        type: GObject.GType;
        size: number;
        init_func: MetaInitFunction;
        free_func: MetaFreeFunction;
        transform_func: MetaTransformFunction;
        serialize_func: MetaSerializeFunction;
        deserialize_func: MetaDeserializeFunction;
        clear_func: MetaClearFunction;
        is_custom(): boolean;
        register(): MetaInfo;
    }
    class MetaTransformCopy {
        static $gtype: GObject.GType<MetaTransformCopy>;
        region: boolean;
        offset: number;
        size: number;
    }
    class MiniObject {
        static $gtype: GObject.GType<MiniObject>;
        type: GObject.GType;
        refcount: number;
        lockstate: number;
        flags: number;
        dispose: MiniObjectDisposeFunction;
        free: MiniObjectFreeFunction;
        static replace(olddata: MiniObject | null, newdata: MiniObject | null): [boolean, MiniObject | null];
        static take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
        add_parent(parent: MiniObject): void;
        copy(): MiniObject | null;
        get_qdata(quark: GLib.Quark): null;
        is_writable(): boolean;
        lock(flags: LockFlags): boolean;
        ref(): MiniObject;
        remove_parent(parent: MiniObject): void;
        set_qdata(quark: GLib.Quark, data: null): void;
        steal_qdata(quark: GLib.Quark): null;
        unlock(flags: LockFlags): void;
        unref(): void;
    }
    type ObjectClass = typeof Object;
    type PadClass = typeof Pad;
    abstract class PadPrivate {
        static $gtype: GObject.GType<PadPrivate>;
    }
    class PadProbeInfo {
        static $gtype: GObject.GType<PadProbeInfo>;
        type: PadProbeType;
        id: number;
        data: null;
        offset: number;
        size: number;
        get_buffer(): Buffer | null;
        get_buffer_list(): BufferList | null;
        get_event(): Event | null;
        get_flow_return(): FlowReturn;
        get_id(): number;
        get_offset(): number;
        get_query(): Query | null;
        get_size(): number;
        get_type(): PadProbeType;
        set_buffer(buffer: Buffer | null): void;
        set_buffer_list(list: BufferList | null): void;
        set_event(event: Event | null): void;
        set_flow_return(flow_ret: FlowReturn): void;
    }
    type PadTemplateClass = typeof PadTemplate;
    class ParamSpecArray {
        static $gtype: GObject.GType<ParamSpecArray>;
        element_spec: GObject.ParamSpec;
    }
    class ParamSpecFraction {
        static $gtype: GObject.GType<ParamSpecFraction>;
        min_num: number;
        min_den: number;
        max_num: number;
        max_den: number;
        def_num: number;
        def_den: number;
    }
    class ParentBufferMeta {
        static $gtype: GObject.GType<ParentBufferMeta>;
        static get_info(): MetaInfo;
    }
    class ParseContext {
        static $gtype: GObject.GType<ParseContext>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ParseContext;
        copy(): ParseContext | null;
        free(): void;
        get_missing_elements(): string[] | null;
    }
    type PipelineClass = typeof Pipeline;
    abstract class PipelinePrivate {
        static $gtype: GObject.GType<PipelinePrivate>;
    }
    type PluginClass = typeof Plugin;
    class PluginDesc {
        static $gtype: GObject.GType<PluginDesc>;
        major_version: number;
        minor_version: number;
        name: string;
        description: string;
        plugin_init: PluginInitFunc;
        version: string;
        license: string;
        source: string;
        "package": string;
        origin: string;
        release_datetime: string;
    }
    type PluginFeatureClass = typeof PluginFeature;
    abstract class Poll {
        static $gtype: GObject.GType<Poll>;
        add_fd(fd: PollFD): boolean;
        fd_can_read(fd: PollFD): boolean;
        fd_can_write(fd: PollFD): boolean;
        fd_ctl_pri(fd: PollFD, active: boolean): boolean;
        fd_ctl_read(fd: PollFD, active: boolean): boolean;
        fd_ctl_write(fd: PollFD, active: boolean): boolean;
        fd_has_closed(fd: PollFD): boolean;
        fd_has_error(fd: PollFD): boolean;
        fd_has_pri(fd: PollFD): boolean;
        fd_ignored(fd: PollFD): void;
        free(): void;
        get_read_gpollfd(fd: GLib.PollFD): void;
        read_control(): boolean;
        remove_fd(fd: PollFD): boolean;
        restart(): void;
        set_controllable(controllable: boolean): boolean;
        set_flushing(flushing: boolean): void;
        wait(timeout: ClockTime): number;
        write_control(): boolean;
    }
    class PollFD {
        static $gtype: GObject.GType<PollFD>;
        fd: number;
        constructor(properties?: Partial<{
            fd: number;
        }>);
        init(): void;
    }
    type PresetInterface = typeof Preset;
    class Promise {
        static $gtype: GObject.GType<Promise>;
        constructor(properties?: Partial<{
            parent: MiniObject;
        }>);
        static ["new"](): Promise;
        static new_with_change_func(func: PromiseChangeFunc): Promise;
        expire(): void;
        get_reply(): Structure | null;
        interrupt(): void;
        ref(): Promise;
        reply(s: Structure | null): void;
        unref(): void;
        wait(): PromiseResult;
    }
    class ProtectionMeta {
        static $gtype: GObject.GType<ProtectionMeta>;
        static get_info(): MetaInfo;
    }
    type ProxyPadClass = typeof ProxyPad;
    abstract class ProxyPadPrivate {
        static $gtype: GObject.GType<ProxyPadPrivate>;
    }
    class Query {
        static $gtype: GObject.GType<Query>;
        type: QueryType;
        constructor(properties?: Partial<{
            mini_object: MiniObject;
            type: QueryType;
        }>);
        static new_accept_caps(caps: Caps): Query;
        static new_allocation(caps: Caps | null, need_pool: boolean): Query;
        static new_bitrate(): Query;
        static new_buffering(format: Format): Query;
        static new_caps(filter: Caps): Query;
        static new_context(context_type: string): Query;
        static new_convert(src_format: Format, value: bigint | number, dest_format: Format): Query;
        static new_custom(type: QueryType, structure: Structure | null): Query;
        static new_drain(): Query;
        static new_duration(format: Format): Query;
        static new_formats(): Query;
        static new_latency(): Query;
        static new_position(format: Format): Query;
        static new_scheduling(): Query;
        static new_seeking(format: Format): Query;
        static new_segment(format: Format): Query;
        static new_selectable(): Query;
        static new_uri(): Query;
        static take(old_query: Query | null, new_query: Query | null): [boolean, Query | null];
        add_allocation_meta(api: GObject.GType, params: Structure | null): void;
        add_allocation_param(allocator: Allocator | null, params: AllocationParams | null): void;
        add_allocation_pool(pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void;
        add_buffering_range(start: bigint | number, stop: bigint | number): boolean;
        add_scheduling_mode(mode: PadMode): void;
        copy(): Query;
        find_allocation_meta(api: GObject.GType): [boolean, number];
        get_n_allocation_metas(): number;
        get_n_allocation_params(): number;
        get_n_allocation_pools(): number;
        get_n_buffering_ranges(): number;
        get_n_scheduling_modes(): number;
        get_structure(): Structure | null;
        has_scheduling_mode(mode: PadMode): boolean;
        has_scheduling_mode_with_flags(mode: PadMode, flags: SchedulingFlags): boolean;
        is_writable(): boolean;
        make_writable(): Query;
        parse_accept_caps(): Caps;
        parse_accept_caps_result(): boolean;
        parse_allocation(): [Caps | null, boolean];
        parse_bitrate(): number;
        parse_buffering_percent(): [boolean, number];
        parse_buffering_range(): [Format | null, number, number, number];
        parse_buffering_stats(): [BufferingMode | null, number, number, number];
        parse_caps(): Caps;
        parse_caps_result(): Caps | null;
        parse_context(): Context | null;
        parse_context_type(): [boolean, string];
        parse_convert(): [Format | null, number, Format | null, number];
        parse_duration(): [Format | null, number];
        parse_latency(): [boolean, ClockTime | null, ClockTime | null];
        parse_n_formats(): number;
        parse_nth_allocation_meta(index: number): [GObject.GType, Structure | null];
        parse_nth_allocation_param(index: number): [Allocator | null, AllocationParams | null];
        parse_nth_allocation_pool(index: number): [BufferPool | null, number, number, number];
        parse_nth_buffering_range(index: number): [boolean, number, number];
        parse_nth_format(nth: number): Format | null;
        parse_nth_scheduling_mode(index: number): PadMode;
        parse_position(): [Format | null, number];
        parse_scheduling(): [SchedulingFlags | null, number, number, number];
        parse_seeking(): [Format | null, boolean, number, number];
        parse_segment(): [number, Format | null, number, number];
        parse_selectable(): boolean;
        parse_uri(): string;
        parse_uri_redirection(): string;
        parse_uri_redirection_permanent(): boolean;
        ref(): Query;
        remove_nth_allocation_meta(index: number): void;
        remove_nth_allocation_param(index: number): void;
        remove_nth_allocation_pool(index: number): void;
        set_accept_caps_result(result: boolean): void;
        set_bitrate(nominal_bitrate: number): void;
        set_buffering_percent(busy: boolean, percent: number): void;
        set_buffering_range(format: Format, start: bigint | number, stop: bigint | number, estimated_total: bigint | number): void;
        set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: bigint | number): void;
        set_caps_result(caps: Caps | null): void;
        set_context(context: Context | null): void;
        set_convert(src_format: Format, src_value: bigint | number, dest_format: Format, dest_value: bigint | number): void;
        set_duration(format: Format, duration: bigint | number): void;
        set_formatsv(formats: Format[]): void;
        set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
        set_nth_allocation_param(index: number, allocator: Allocator | null, params: AllocationParams | null): void;
        set_nth_allocation_pool(index: number, pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void;
        set_position(format: Format, cur: bigint | number): void;
        set_scheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void;
        set_seeking(format: Format, seekable: boolean, segment_start: bigint | number, segment_end: bigint | number): void;
        set_segment(rate: number, format: Format, start_value: bigint | number, stop_value: bigint | number): void;
        set_selectable(selectable: boolean): void;
        set_uri(uri: string | null): void;
        set_uri_redirection(uri: string | null): void;
        set_uri_redirection_permanent(permanent: boolean): void;
        unref(): void;
        writable_structure(): Structure;
    }
    class ReferenceTimestampMeta {
        static $gtype: GObject.GType<ReferenceTimestampMeta>;
        timestamp: ClockTime;
        duration: ClockTime;
        static get_info(): MetaInfo;
    }
    type RegistryClass = typeof Registry;
    abstract class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;
    }
    class Sample {
        static $gtype: GObject.GType<Sample>;
        constructor(buffer: Buffer | null, caps: Caps | null, segment: Segment | null, info: Structure | null);
        static ["new"](buffer: Buffer | null, caps: Caps | null, segment: Segment | null, info: Structure | null): Sample;
        copy(): Sample;
        get_buffer(): Buffer | null;
        get_buffer_list(): BufferList | null;
        get_caps(): Caps | null;
        get_info(): Structure | null;
        get_segment(): Segment;
        is_writable(): boolean;
        make_writable(): Sample;
        ref(): Sample;
        set_buffer(buffer: Buffer): void;
        set_buffer_list(buffer_list: BufferList): void;
        set_caps(caps: Caps): void;
        set_info(info: Structure): boolean;
        set_segment(segment: Segment): void;
        unref(): void;
    }
    class Segment {
        static $gtype: GObject.GType<Segment>;
        flags: SegmentFlags;
        rate: number;
        applied_rate: number;
        format: Format;
        base: number;
        offset: number;
        start: number;
        stop: number;
        time: number;
        position: number;
        duration: number;
        constructor(properties?: Partial<{
            flags: SegmentFlags;
            rate: number;
            applied_rate: number;
            format: Format;
            base: number;
            offset: number;
            start: number;
            stop: number;
            time: number;
            position: number;
            duration: number;
        }>);
        static ["new"](): Segment;
        clip(format: Format, start: bigint | number, stop: bigint | number): [boolean, number, number];
        copy(): Segment;
        copy_into(dest: Segment): void;
        do_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: bigint | number, stop_type: SeekType, stop: bigint | number): [boolean, boolean];
        free(): void;
        init(format: Format): void;
        is_equal(s1: Segment): boolean;
        offset_running_time(format: Format, offset: bigint | number): boolean;
        position_from_running_time(format: Format, running_time: bigint | number): number;
        position_from_running_time_full(format: Format, running_time: bigint | number): [number, number];
        position_from_stream_time(format: Format, stream_time: bigint | number): number;
        position_from_stream_time_full(format: Format, stream_time: bigint | number): [number, number];
        set_running_time(format: Format, running_time: bigint | number): boolean;
        to_position(format: Format, running_time: bigint | number): number;
        to_running_time(format: Format, position: bigint | number): number;
        to_running_time_full(format: Format, position: bigint | number): [number, number];
        to_stream_time(format: Format, position: bigint | number): number;
        to_stream_time_full(format: Format, position: bigint | number): [number, number];
    }
    type SharedTaskPoolClass = typeof SharedTaskPool;
    abstract class SharedTaskPoolPrivate {
        static $gtype: GObject.GType<SharedTaskPoolPrivate>;
    }
    class StaticCaps {
        static $gtype: GObject.GType<StaticCaps>;
        string: string;
        cleanup(): void;
        get(): Caps | null;
    }
    class StaticPadTemplate {
        static $gtype: GObject.GType<StaticPadTemplate>;
        name_template: string;
        direction: PadDirection;
        presence: PadPresence;
        get(): PadTemplate | null;
        get_caps(): Caps;
    }
    type StreamClass = typeof Stream;
    type StreamCollectionClass = typeof StreamCollection;
    abstract class StreamCollectionPrivate {
        static $gtype: GObject.GType<StreamCollectionPrivate>;
    }
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;
    }
    class Structure {
        static $gtype: GObject.GType<Structure>;
        type: GObject.GType;
        constructor(name: string, firstfield: string, ___: any[]);
        static from_string(string: string): Structure;
        static new_empty(name: string): Structure;
        static new_from_string(string: string): Structure;
        static new_id_empty(quark: GLib.Quark): Structure;
        static new_id_str_empty(name: IdStr): Structure;
        static new_static_str_empty(name: string): Structure;
        static take(oldstr_ptr: Structure | null, newstr: Structure | null): [boolean, Structure | null];
        can_intersect(struct2: Structure): boolean;
        copy(): Structure;
        filter_and_map_in_place(func: StructureFilterMapFunc): void;
        filter_and_map_in_place_id_str(func: StructureFilterMapIdStrFunc): void;
        fixate(): void;
        fixate_field(field_name: string): boolean;
        fixate_field_boolean(field_name: string, target: boolean): boolean;
        fixate_field_nearest_double(field_name: string, target: number): boolean;
        fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean;
        fixate_field_nearest_int(field_name: string, target: number): boolean;
        fixate_field_string(field_name: string, target: string): boolean;
        foreach(func: StructureForeachFunc): boolean;
        foreach_id_str(func: StructureForeachIdStrFunc): boolean;
        free(): void;
        get_array(fieldname: string): [boolean, GObject.ValueArray];
        get_boolean(fieldname: string): [boolean, boolean];
        get_caps(fieldname: string): [boolean, Caps];
        get_clock_time(fieldname: string): [boolean, ClockTime];
        get_date(fieldname: string): [boolean, GLib.Date];
        get_date_time(fieldname: string): [boolean, DateTime];
        get_double(fieldname: string): [boolean, number];
        get_enum(fieldname: string, enumtype: GObject.GType): [boolean, number];
        get_field_type(fieldname: string): GObject.GType;
        get_flags(fieldname: string, flags_type: GObject.GType): [boolean, number];
        get_flagset(fieldname: string): [boolean, number, number];
        get_fraction(fieldname: string): [boolean, number, number];
        get_int(fieldname: string): [boolean, number];
        get_int64(fieldname: string): [boolean, number];
        get_list(fieldname: string): [boolean, GObject.ValueArray];
        get_name(): string;
        get_name_id(): GLib.Quark;
        get_name_id_str(): IdStr;
        get_string(fieldname: string): string | null;
        get_uint(fieldname: string): [boolean, number];
        get_uint64(fieldname: string): [boolean, number];
        get_value(fieldname: string): unknown | null;
        has_field(fieldname: string): boolean;
        has_field_typed(fieldname: string, type: GObject.GType): boolean;
        has_name(name: string): boolean;
        id_get_value(field: GLib.Quark): unknown | null;
        id_has_field(field: GLib.Quark): boolean;
        id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean;
        id_set_value(field: GLib.Quark, value: GObject.Value | any): void;
        id_str_get_field_type(fieldname: IdStr): GObject.GType;
        id_str_get_value(fieldname: IdStr): unknown | null;
        id_str_has_field(fieldname: IdStr): boolean;
        id_str_has_field_typed(fieldname: IdStr, type: GObject.GType): boolean;
        id_str_nth_field_name(index: number): IdStr;
        id_str_remove_field(fieldname: IdStr): void;
        id_str_set_value(fieldname: IdStr, value: GObject.Value | any): void;
        id_str_take_value(fieldname: IdStr, value: GObject.Value | any): void;
        id_take_value(field: GLib.Quark, value: GObject.Value | any): void;
        intersect(struct2: Structure): Structure | null;
        is_equal(structure2: Structure): boolean;
        is_subset(superset: Structure): boolean;
        is_writable(): boolean;
        map_in_place(func: StructureMapFunc): boolean;
        map_in_place_id_str(func: StructureMapIdStrFunc): boolean;
        n_fields(): number;
        nth_field_name(index: number): string;
        remove_all_fields(): void;
        remove_field(fieldname: string): void;
        serialize(flags: SerializeFlags): string;
        serialize_full(flags: SerializeFlags): string | null;
        set_array(fieldname: string, array: GObject.ValueArray): void;
        set_list(fieldname: string, array: GObject.ValueArray): void;
        set_name(name: string): void;
        set_name_id_str(name: IdStr): void;
        set_name_static_str(name: string): void;
        set_value(fieldname: string, value: GObject.Value | any): void;
        set_value_static_str(fieldname: string, value: GObject.Value | any): void;
        take_value(fieldname: string, value: GObject.Value | any): void;
        take_value_static_str(fieldname: string, value: GObject.Value | any): void;
        to_string(): string;
    }
    type SystemClockClass = typeof SystemClock;
    abstract class SystemClockPrivate {
        static $gtype: GObject.GType<SystemClockPrivate>;
    }
    class TagList {
        static $gtype: GObject.GType<TagList>;
        constructor(properties?: Partial<{
            mini_object: MiniObject;
        }>);
        static new_empty(): TagList;
        static new_from_string(str: string): TagList;
        static copy_value(list: TagList, tag: string): [boolean, unknown];
        static replace(old_taglist: TagList | null, new_taglist: TagList | null): [boolean, TagList | null];
        static take(old_taglist: TagList, new_taglist: TagList | null): [boolean, TagList];
        add_value(mode: TagMergeMode, tag: string, value: GObject.Value | any): void;
        copy(): TagList;
        foreach(func: TagForeachFunc): void;
        get_boolean(tag: string): [boolean, boolean];
        get_boolean_index(tag: string, index: number): [boolean, boolean];
        get_date(tag: string): [boolean, GLib.Date];
        get_date_index(tag: string, index: number): [boolean, GLib.Date];
        get_date_time(tag: string): [boolean, DateTime];
        get_date_time_index(tag: string, index: number): [boolean, DateTime];
        get_double(tag: string): [boolean, number];
        get_double_index(tag: string, index: number): [boolean, number];
        get_float(tag: string): [boolean, number];
        get_float_index(tag: string, index: number): [boolean, number];
        get_int(tag: string): [boolean, number];
        get_int64(tag: string): [boolean, number];
        get_int64_index(tag: string, index: number): [boolean, number];
        get_int_index(tag: string, index: number): [boolean, number];
        get_pointer(tag: string): [boolean, null];
        get_pointer_index(tag: string, index: number): [boolean, null];
        get_sample(tag: string): [boolean, Sample];
        get_sample_index(tag: string, index: number): [boolean, Sample];
        get_scope(): TagScope;
        get_string(tag: string): [boolean, string];
        get_string_index(tag: string, index: number): [boolean, string];
        get_tag_size(tag: string): number;
        get_uint(tag: string): [boolean, number];
        get_uint64(tag: string): [boolean, number];
        get_uint64_index(tag: string, index: number): [boolean, number];
        get_uint_index(tag: string, index: number): [boolean, number];
        get_value_index(tag: string, index: number): unknown | null;
        insert(from: TagList, mode: TagMergeMode): void;
        is_empty(): boolean;
        is_equal(list2: TagList): boolean;
        is_writable(): boolean;
        make_writable(): TagList;
        merge(list2: TagList | null, mode: TagMergeMode): TagList | null;
        n_tags(): number;
        nth_tag_name(index: number): string;
        peek_string_index(tag: string, index: number): [boolean, string];
        ref(): TagList;
        remove_tag(tag: string): void;
        set_scope(scope: TagScope): void;
        to_string(): string;
        unref(): void;
    }
    type TagSetterInterface = typeof TagSetter;
    type TaskClass = typeof Task;
    type TaskPoolClass = typeof TaskPool;
    abstract class TaskPrivate {
        static $gtype: GObject.GType<TaskPrivate>;
    }
    class TimedValue {
        static $gtype: GObject.GType<TimedValue>;
        timestamp: ClockTime;
        value: number;
    }
    class Toc {
        static $gtype: GObject.GType<Toc>;
        constructor(scope: TocScope);
        static ["new"](scope: TocScope): Toc;
        append_entry(entry: TocEntry): void;
        dump(): void;
        find_entry(uid: string): TocEntry | null;
        get_entries(): TocEntry[];
        get_scope(): TocScope;
        get_tags(): TagList | null;
        merge_tags(tags: TagList | null, mode: TagMergeMode): void;
        set_tags(tags: TagList | null): void;
    }
    class TocEntry {
        static $gtype: GObject.GType<TocEntry>;
        constructor(type: TocEntryType, uid: string);
        static ["new"](type: TocEntryType, uid: string): TocEntry;
        append_sub_entry(subentry: TocEntry): void;
        get_entry_type(): TocEntryType;
        get_loop(): [boolean, TocLoopType | null, number];
        get_parent(): TocEntry | null;
        get_start_stop_times(): [boolean, number, number];
        get_sub_entries(): TocEntry[];
        get_tags(): TagList | null;
        get_toc(): Toc | null;
        get_uid(): string;
        is_alternative(): boolean;
        is_sequence(): boolean;
        merge_tags(tags: TagList | null, mode: TagMergeMode): void;
        set_loop(loop_type: TocLoopType, repeat_count: number): void;
        set_start_stop_times(start: bigint | number, stop: bigint | number): void;
        set_tags(tags: TagList | null): void;
    }
    type TocSetterInterface = typeof TocSetter;
    type TracerClass = typeof Tracer;
    type TracerFactoryClass = typeof TracerFactory;
    abstract class TracerPrivate {
        static $gtype: GObject.GType<TracerPrivate>;
    }
    type TracerRecordClass = typeof TracerRecord;
    class TypeFind {
        static $gtype: GObject.GType<TypeFind>;
        data: null;
        constructor(properties?: Partial<{
            data: null;
        }>);
        static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean;
        get_length(): number;
        peek(offset: bigint | number): Uint8Array | null;
        suggest(probability: number, caps: Caps): void;
        suggest_empty_simple(probability: number, media_type: string): void;
    }
    type TypeFindFactoryClass = typeof TypeFindFactory;
    type URIHandlerInterface = typeof URIHandler;
    class Uri {
        static $gtype: GObject.GType<Uri>;
        constructor(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null);
        static ["new"](scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null): Uri;
        static construct(protocol: string, location: string): string;
        static from_string(uri: string): Uri | null;
        static from_string_escaped(uri: string): Uri | null;
        static get_location(uri: string): string | null;
        static get_protocol(uri: string): string | null;
        static has_protocol(uri: string, protocol: string): boolean;
        static is_valid(uri: string): boolean;
        static join_strings(base_uri: string, ref_uri: string): string | null;
        static protocol_is_supported(type: URIType, protocol: string): boolean;
        static protocol_is_valid(protocol: string): boolean;
        append_path(relative_path: string | null): boolean;
        append_path_segment(path_segment: string | null): boolean;
        copy(): Uri;
        equal(second: Uri): boolean;
        from_string_with_base(uri: string): Uri | null;
        get_fragment(): string | null;
        get_host(): string | null;
        get_media_fragment_table(): { [key: string]: string } | null;
        get_path(): string | null;
        get_path_segments(): string[];
        get_path_string(): string | null;
        get_port(): number;
        get_query_keys(): string[];
        get_query_string(): string | null;
        get_query_string_ordered(keys: string[] | null): string | null;
        get_query_table(): { [key: string]: string } | null;
        get_query_value(query_key: string): string | null;
        get_scheme(): string | null;
        get_userinfo(): string | null;
        is_normalized(): boolean;
        is_writable(): boolean;
        join(ref_uri: Uri | null): Uri | null;
        make_writable(): Uri;
        new_with_base(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null): Uri;
        normalize(): boolean;
        query_has_key(query_key: string): boolean;
        ref(): Uri;
        remove_query_key(query_key: string): boolean;
        set_fragment(fragment: string | null): boolean;
        set_host(host: string): boolean;
        set_path(path: string | null): boolean;
        set_path_segments(path_segments: string[] | null): boolean;
        set_path_string(path: string): boolean;
        set_port(port: number): boolean;
        set_query_string(query: string | null): boolean;
        set_query_table(query_table: { [key: string]: string } | null): boolean;
        set_query_value(query_key: string, query_value: string | null): boolean;
        set_scheme(scheme: string): boolean;
        set_userinfo(userinfo: string): boolean;
        to_string(): string;
        to_string_with_keys(keys: string[] | null): string;
        unref(): void;
    }
    class ValueTable {
        static $gtype: GObject.GType<ValueTable>;
        type: GObject.GType;
        compare: ValueCompareFunc;
        serialize: ValueSerializeFunc;
        deserialize: ValueDeserializeFunc;
        deserialize_with_pspec: ValueDeserializeWithPSpecFunc;
        hash: ValueHashFunc;
    }
    namespace ChildProxy {
        interface Interface {
            vfunc_child_added(child: GObject.Object, name: string): void;
            vfunc_child_removed(child: GObject.Object, name: string): void;
            vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
            vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
            vfunc_get_children_count(): number;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ChildProxyNamespace {
        $gtype: GObject.GType<ChildProxy>;
        prototype: ChildProxy;
    }
    interface ChildProxy extends GObject.Object, ChildProxy.Interface {
        child_added(child: GObject.Object, name: string): void;
        child_removed(child: GObject.Object, name: string): void;
        get_child_by_index<T = GObject.Object>(index: number): T;
        get_child_by_name<T = GObject.Object>(name: string): T;
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        get_children_count(): number;
        get_property(name: string): unknown;
        get_property(...args: never[]): any;
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        set_property(name: string, value: GObject.Value | any): void;
    }
    export const ChildProxy: ChildProxyNamespace & {
        new (): ChildProxy; 
    };
    namespace Preset {
        interface Interface {
            vfunc_delete_preset(name: string): boolean;
            vfunc_get_meta(name: string, tag: string): [boolean, string];
            vfunc_get_preset_names(): string[];
            vfunc_get_property_names(): string[];
            vfunc_load_preset(name: string): boolean;
            vfunc_rename_preset(old_name: string, new_name: string): boolean;
            vfunc_save_preset(name: string): boolean;
            vfunc_set_meta(name: string, tag: string, value: string | null): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PresetNamespace {
        $gtype: GObject.GType<Preset>;
        prototype: Preset;
        get_app_dir(): string | null;
        set_app_dir(app_dir: string): boolean;
    }
    interface Preset extends GObject.Object, Preset.Interface {
        delete_preset(name: string): boolean;
        get_meta(name: string, tag: string): [boolean, string];
        get_preset_names(): string[];
        get_property_names(): string[];
        is_editable(): boolean;
        load_preset(name: string): boolean;
        rename_preset(old_name: string, new_name: string): boolean;
        save_preset(name: string): boolean;
        set_meta(name: string, tag: string, value: string | null): boolean;
    }
    export const Preset: PresetNamespace & {
        new (): Preset; 
    };
    namespace TagSetter {
        interface ConstructorProps extends Element.ConstructorProps {}
    }
    export interface TagSetterNamespace {
        $gtype: GObject.GType<TagSetter>;
        prototype: TagSetter;
    }
    interface TagSetter extends Element {
        add_tag_value(mode: TagMergeMode, tag: string, value: GObject.Value | any): void;
        get_tag_list(): TagList | null;
        get_tag_merge_mode(): TagMergeMode;
        merge_tags(list: TagList, mode: TagMergeMode): void;
        reset_tags(): void;
        set_tag_merge_mode(mode: TagMergeMode): void;
    }
    export const TagSetter: TagSetterNamespace & {
        new (): TagSetter; 
    };
    namespace TocSetter {
        interface ConstructorProps extends Element.ConstructorProps {}
    }
    export interface TocSetterNamespace {
        $gtype: GObject.GType<TocSetter>;
        prototype: TocSetter;
    }
    interface TocSetter extends Element {
        get_toc(): Toc | null;
        reset(): void;
        set_toc(toc: Toc | null): void;
    }
    export const TocSetter: TocSetterNamespace & {
        new (): TocSetter; 
    };
    namespace URIHandler {
        interface Interface {
            vfunc_get_uri(): string | null;
            vfunc_set_uri(uri: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface URIHandlerNamespace {
        $gtype: GObject.GType<URIHandler>;
        prototype: URIHandler;
    }
    interface URIHandler extends GObject.Object, URIHandler.Interface {
        get_protocols(): string[] | null;
        get_uri(): string | null;
        get_uri_type(): URIType;
        set_uri(uri: string): boolean;
    }
    export const URIHandler: URIHandlerNamespace & {
        new (): URIHandler; 
    };
    type ClockID = never;
    type ClockTime = bigint | number;
    type ClockTimeDiff = bigint | number;
    type ElementFactoryListType = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default Gst;
}
declare module 'gi://Gst' {
    import Gst10 from 'gi://Gst?version=1.0';
    export default Gst10;
}
