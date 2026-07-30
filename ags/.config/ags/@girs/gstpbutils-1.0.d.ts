declare module 'gi://GstPbutils?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstAudio from 'gi://GstAudio?version=1.0';
export namespace GstPbutils {
    export namespace AudioVisualizerShader {
        export const $gtype: GObject.GType<AudioVisualizerShader>;
    }
    enum AudioVisualizerShader {
        NONE,
        FADE,
        FADE_AND_MOVE_UP,
        FADE_AND_MOVE_DOWN,
        FADE_AND_MOVE_LEFT,
        FADE_AND_MOVE_RIGHT,
        FADE_AND_MOVE_HORIZ_OUT,
        FADE_AND_MOVE_HORIZ_IN,
        FADE_AND_MOVE_VERT_OUT,
        FADE_AND_MOVE_VERT_IN,
    }
    export namespace DiscovererResult {
        export const $gtype: GObject.GType<DiscovererResult>;
    }
    enum DiscovererResult {
        OK,
        URI_INVALID,
        ERROR,
        TIMEOUT,
        BUSY,
        MISSING_PLUGINS,
    }
    export namespace InstallPluginsReturn {
        export const $gtype: GObject.GType<InstallPluginsReturn>;
    }
    enum InstallPluginsReturn {
        SUCCESS,
        NOT_FOUND,
        ERROR,
        PARTIAL_SUCCESS,
        USER_ABORT,
        CRASHED,
        INVALID,
        STARTED_OK,
        INTERNAL_FAILURE,
        HELPER_MISSING,
        INSTALL_IN_PROGRESS,
    }
    const ENCODING_CATEGORY_CAPTURE: string;
    const ENCODING_CATEGORY_DEVICE: string;
    const ENCODING_CATEGORY_FILE_EXTENSION: string;
    const ENCODING_CATEGORY_ONLINE_SERVICE: string;
    const ENCODING_CATEGORY_STORAGE_EDITING: string;
    const PLUGINS_BASE_VERSION_MAJOR: number;
    const PLUGINS_BASE_VERSION_MICRO: number;
    const PLUGINS_BASE_VERSION_MINOR: number;
    const PLUGINS_BASE_VERSION_NANO: number;
    function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: Uint8Array | string): boolean;
    function codec_utils_aac_get_channels(audio_config: Uint8Array | string): number;
    function codec_utils_aac_get_index_from_sample_rate(rate: number): number;
    function codec_utils_aac_get_level(audio_config: Uint8Array | string): string | null;
    function codec_utils_aac_get_profile(audio_config: Uint8Array | string): string | null;
    function codec_utils_aac_get_sample_rate(audio_config: Uint8Array | string): number;
    function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number;
    function codec_utils_av1_create_av1c_from_caps(caps: Gst.Caps): Gst.Buffer | null;
    function codec_utils_av1_create_caps_from_av1c(av1c: Gst.Buffer): Gst.Caps | null;
    function codec_utils_av1_get_level(seq_level_idx: number): string | null;
    function codec_utils_av1_get_seq_level_idx(level: string): number;
    function codec_utils_caps_from_mime_codec(codecs_field: string): Gst.Caps | null;
    function codec_utils_caps_get_mime_codec(caps: Gst.Caps): string | null;
    function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: Uint8Array | string): boolean;
    function codec_utils_h264_get_level(sps: Uint8Array | string): string | null;
    function codec_utils_h264_get_level_idc(level: string): number;
    function codec_utils_h264_get_profile(sps: Uint8Array | string): string | null;
    function codec_utils_h264_get_profile_flags_level(codec_data: Uint8Array | string): [boolean, number, number, number];
    function codec_utils_h265_caps_set_level_tier_and_profile(caps: Gst.Caps, profile_tier_level: Uint8Array | string): boolean;
    function codec_utils_h265_get_level(profile_tier_level: Uint8Array | string): string | null;
    function codec_utils_h265_get_level_idc(level: string): number;
    function codec_utils_h265_get_profile(profile_tier_level: Uint8Array | string): string | null;
    function codec_utils_h265_get_tier(profile_tier_level: Uint8Array | string): string | null;
    function codec_utils_h266_caps_set_level_tier_and_profile(caps: Gst.Caps, decoder_configuration: Uint8Array | string): boolean;
    function codec_utils_h266_get_level(ptl_record: Uint8Array | string): string | null;
    function codec_utils_h266_get_level_idc(level: string): number;
    function codec_utils_h266_get_profile(ptl_record: Uint8Array | string): string | null;
    function codec_utils_h266_get_tier(ptl_record: Uint8Array | string): string | null;
    function codec_utils_mpeg4video_caps_set_level_and_profile(caps: Gst.Caps, vis_obj_seq: Uint8Array | string): boolean;
    function codec_utils_mpeg4video_get_level(vis_obj_seq: Uint8Array | string): string | null;
    function codec_utils_mpeg4video_get_profile(vis_obj_seq: Uint8Array | string): string | null;
    function codec_utils_opus_create_caps(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping: Uint8Array | string | null): Gst.Caps | null;
    function codec_utils_opus_create_caps_from_header(header: Gst.Buffer, comments: Gst.Buffer | null): Gst.Caps | null;
    function codec_utils_opus_create_header(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping: Uint8Array | string | null, pre_skip: number, output_gain: number): Gst.Buffer | null;
    function codec_utils_opus_parse_caps(caps: Gst.Caps): [boolean, number, number, number, number, number, Uint8Array | null];
    function codec_utils_opus_parse_header(header: Gst.Buffer): [boolean, number, number, number, number, number, Uint8Array | null, number, number];
    function encoding_list_all_targets(categoryname: string | null): EncodingTarget[];
    function encoding_list_available_categories(): string[];
    function install_plugins_async(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc): InstallPluginsReturn;
    function install_plugins_installation_in_progress(): boolean;
    function install_plugins_return_get_name(ret: InstallPluginsReturn): string;
    function install_plugins_supported(): boolean;
    function install_plugins_sync(details: string[], ctx: InstallPluginsContext | null): InstallPluginsReturn;
    function is_missing_plugin_message(msg: Gst.Message): boolean;
    function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
    function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
    function missing_element_installer_detail_new(factory_name: string): string;
    function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
    function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
    function missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message;
    function missing_plugin_message_get_description(msg: Gst.Message): string;
    function missing_plugin_message_get_installer_detail(msg: Gst.Message): string | null;
    function missing_plugin_message_get_stream_id(msg: Gst.Message): string | null;
    function missing_plugin_message_set_stream_id(msg: Gst.Message, stream_id: string): void;
    function missing_uri_sink_installer_detail_new(protocol: string): string;
    function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
    function missing_uri_source_installer_detail_new(protocol: string): string;
    function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
    function pb_utils_add_codec_description_to_tag_list(taglist: Gst.TagList, codec_tag: string | null, caps: Gst.Caps): boolean;
    function pb_utils_get_caps_description_flags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags;
    function pb_utils_get_codec_description(caps: Gst.Caps): string | null;
    function pb_utils_get_decoder_description(caps: Gst.Caps): string;
    function pb_utils_get_element_description(factory_name: string): string;
    function pb_utils_get_encoder_description(caps: Gst.Caps): string;
    function pb_utils_get_file_extension_from_caps(caps: Gst.Caps): string | null;
    function pb_utils_get_sink_description(protocol: string): string;
    function pb_utils_get_source_description(protocol: string): string;
    function pb_utils_init(): void;
    function plugins_base_version(): [number, number, number, number];
    function plugins_base_version_string(): string;
    interface AudioVisualizerShaderFunc {
        (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void;
    }
    interface InstallPluginsResultFunc {
        (result: InstallPluginsReturn): void;
    }
    export namespace DiscovererSerializeFlags {
        export const $gtype: GObject.GType<DiscovererSerializeFlags>;
    }
    enum DiscovererSerializeFlags {
        BASIC,
        CAPS,
        TAGS,
        MISC,
        ALL,
    }
    export namespace PbUtilsCapsDescriptionFlags {
        export const $gtype: GObject.GType<PbUtilsCapsDescriptionFlags>;
    }
    enum PbUtilsCapsDescriptionFlags {
        CONTAINER,
        AUDIO,
        VIDEO,
        IMAGE,
        SUBTITLE,
        TAG,
        GENERIC,
        METADATA,
    }
    namespace AudioVisualizer {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::shade-amount": (pspec: GObject.ParamSpec) => void;
            "notify::shader": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {
            shade_amount: number;
            shadeAmount: number;
            shader: AudioVisualizerShader;
        }
    }
    abstract class AudioVisualizer extends Gst.Element {
        static $gtype: GObject.GType<AudioVisualizer>;
        get shade_amount(): number;
        set shade_amount(val: number);
        get shadeAmount(): number;
        set shadeAmount(val: number);
        get shader(): AudioVisualizerShader;
        set shader(val: AudioVisualizerShader);
        $signals: AudioVisualizer.SignalSignatures;
        req_spf: number;
        constructor(properties?: Partial<AudioVisualizer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AudioVisualizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioVisualizer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioVisualizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioVisualizer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioVisualizer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioVisualizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_decide_allocation(query: Gst.Query): boolean;
        vfunc_render(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean;
        vfunc_setup(): boolean;
    }
    namespace Discoverer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            discovered: (arg0: DiscovererInfo, arg1: GLib.Error | null) => void;
            finished: () => void;
            "load-serialized-info": (arg0: string) => DiscovererInfo | null;
            "source-setup": (arg0: Gst.Element) => void;
            starting: () => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::use-cache": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            timeout: bigint | number;
            use_cache: boolean;
            useCache: boolean;
        }
    }
    class Discoverer extends GObject.Object {
        static $gtype: GObject.GType<Discoverer>;
        get timeout(): number;
        set timeout(val: bigint | number);
        get use_cache(): boolean;
        set use_cache(val: boolean);
        get useCache(): boolean;
        set useCache(val: boolean);
        $signals: Discoverer.SignalSignatures;
        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](timeout: Gst.ClockTime): Discoverer;
        connect<K extends keyof Discoverer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Discoverer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Discoverer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Discoverer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_discovered(info: DiscovererInfo, err: GLib.Error): void;
        vfunc_finished(): void;
        vfunc_load_serialize_info(uri: string): DiscovererInfo;
        vfunc_source_setup(source: Gst.Element): void;
        vfunc_starting(): void;
        discover_uri(uri: string): DiscovererInfo;
        discover_uri_async(uri: string): boolean;
        start(): void;
        stop(): void;
    }
    namespace DiscovererAudioInfo {
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}
        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }
    class DiscovererAudioInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererAudioInfo>;
        $signals: DiscovererAudioInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererAudioInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_channel_mask(): number;
        get_channels(): number;
        get_depth(): number;
        get_language(): string | null;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }
    namespace DiscovererContainerInfo {
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}
        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }
    class DiscovererContainerInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererContainerInfo>;
        $signals: DiscovererContainerInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererContainerInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererContainerInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererContainerInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererContainerInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererContainerInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererContainerInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererContainerInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_streams(): DiscovererStreamInfo[];
        get_tags(): Gst.TagList | null;
    }
    namespace DiscovererInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DiscovererInfo extends GObject.Object {
        static $gtype: GObject.GType<DiscovererInfo>;
        $signals: DiscovererInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_variant(variant: GLib.Variant): DiscovererInfo | null;
        copy(): DiscovererInfo;
        get_audio_streams(): DiscovererAudioInfo[];
        get_container_streams(): DiscovererContainerInfo[];
        get_duration(): Gst.ClockTime;
        get_live(): boolean;
        get_misc(): Gst.Structure | null;
        get_missing_elements_installer_details(): string[];
        get_result(): DiscovererResult;
        get_seekable(): boolean;
        get_stream_info(): DiscovererStreamInfo | null;
        get_stream_list(): DiscovererStreamInfo[];
        get_streams(streamtype: GObject.GType): DiscovererStreamInfo[];
        get_subtitle_streams(): DiscovererSubtitleInfo[];
        get_tags(): Gst.TagList | null;
        get_toc(): Gst.Toc | null;
        get_uri(): string;
        get_video_streams(): DiscovererVideoInfo[];
        to_variant(flags: DiscovererSerializeFlags): GLib.Variant;
    }
    namespace DiscovererStreamInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DiscovererStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<DiscovererStreamInfo>;
        $signals: DiscovererStreamInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererStreamInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static list_free(infos: DiscovererStreamInfo[]): void;
        get_caps(): Gst.Caps | null;
        get_misc(): Gst.Structure | null;
        get_next(): DiscovererStreamInfo | null;
        get_previous(): DiscovererStreamInfo | null;
        get_stream_id(): string | null;
        get_stream_number(): number;
        get_stream_type_nick(): string;
        get_tags(): Gst.TagList | null;
        get_toc(): Gst.Toc | null;
    }
    namespace DiscovererSubtitleInfo {
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}
        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }
    class DiscovererSubtitleInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererSubtitleInfo>;
        $signals: DiscovererSubtitleInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererSubtitleInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererSubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererSubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererSubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_language(): string | null;
    }
    namespace DiscovererVideoInfo {
        interface SignalSignatures extends DiscovererStreamInfo.SignalSignatures {}
        interface ConstructorProps extends DiscovererStreamInfo.ConstructorProps {}
    }
    class DiscovererVideoInfo extends DiscovererStreamInfo {
        static $gtype: GObject.GType<DiscovererVideoInfo>;
        $signals: DiscovererVideoInfo.SignalSignatures;
        constructor(properties?: Partial<DiscovererVideoInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DiscovererVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscovererVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DiscovererVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscovererVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DiscovererVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_depth(): number;
        get_framerate_denom(): number;
        get_framerate_num(): number;
        get_height(): number;
        get_max_bitrate(): number;
        get_par_denom(): number;
        get_par_num(): number;
        get_width(): number;
        is_image(): boolean;
        is_interlaced(): boolean;
    }
    namespace EncodingAudioProfile {
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            "notify::element-properties": (pspec: GObject.ParamSpec) => void;
            "notify::restriction-caps": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }
    class EncodingAudioProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingAudioProfile>;
        $signals: EncodingAudioProfile.SignalSignatures;
        constructor(properties?: Partial<EncodingAudioProfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingAudioProfile;
        connect<K extends keyof EncodingAudioProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingAudioProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodingAudioProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingAudioProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodingAudioProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingAudioProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace EncodingContainerProfile {
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            "notify::element-properties": (pspec: GObject.ParamSpec) => void;
            "notify::restriction-caps": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }
    class EncodingContainerProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingContainerProfile>;
        $signals: EncodingContainerProfile.SignalSignatures;
        constructor(properties?: Partial<EncodingContainerProfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, description: string | null, format: Gst.Caps, preset: string | null): EncodingContainerProfile;
        connect<K extends keyof EncodingContainerProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingContainerProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodingContainerProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingContainerProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodingContainerProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingContainerProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_profile(profile: EncodingProfile): boolean;
        contains_profile(profile: EncodingProfile): boolean;
        get_profiles(): EncodingProfile[];
    }
    namespace EncodingProfile {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::element-properties": (pspec: GObject.ParamSpec) => void;
            "notify::restriction-caps": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            element_properties: Gst.Structure | null;
            elementProperties: Gst.Structure | null;
            restriction_caps: Gst.Caps;
            restrictionCaps: Gst.Caps;
        }
    }
    class EncodingProfile extends GObject.Object {
        static $gtype: GObject.GType<EncodingProfile>;
        get element_properties(): Gst.Structure | null;
        set element_properties(val: Gst.Structure | null);
        get elementProperties(): Gst.Structure | null;
        set elementProperties(val: Gst.Structure | null);
        get restriction_caps(): Gst.Caps;
        set restriction_caps(val: Gst.Caps);
        get restrictionCaps(): Gst.Caps;
        set restrictionCaps(val: Gst.Caps);
        $signals: EncodingProfile.SignalSignatures;
        constructor(properties?: Partial<EncodingProfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EncodingProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodingProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodingProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find(targetname: string, profilename: string | null, category: string | null): EncodingProfile | null;
        static from_discoverer(info: DiscovererInfo): EncodingProfile | null;
        static from_string(string: string): EncodingProfile | null;
        copy(): EncodingProfile;
        get_allow_dynamic_output(): boolean;
        get_description(): string | null;
        get_element_properties(): Gst.Structure | null;
        get_file_extension(): string | null;
        get_format(): Gst.Caps;
        get_input_caps(): Gst.Caps;
        get_name(): string | null;
        get_presence(): number;
        get_preset(): string | null;
        get_preset_name(): string | null;
        get_restriction(): Gst.Caps | null;
        get_single_segment(): boolean;
        get_type_nick(): string;
        is_enabled(): boolean;
        is_equal(b: EncodingProfile): boolean;
        set_allow_dynamic_output(allow_dynamic_output: boolean): void;
        set_description(description: string | null): void;
        set_element_properties(element_properties: Gst.Structure): void;
        set_enabled(enabled: boolean): void;
        set_format(format: Gst.Caps): void;
        set_name(name: string | null): void;
        set_presence(presence: number): void;
        set_preset(preset: string | null): void;
        set_preset_name(preset_name: string | null): void;
        set_restriction(restriction: Gst.Caps | null): void;
        set_single_segment(single_segment: boolean): void;
        to_string(): string;
    }
    namespace EncodingTarget {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class EncodingTarget extends GObject.Object {
        static $gtype: GObject.GType<EncodingTarget>;
        $signals: EncodingTarget.SignalSignatures;
        constructor(properties?: Partial<EncodingTarget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, category: string, description: string, profiles: EncodingProfile[]): EncodingTarget;
        connect<K extends keyof EncodingTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingTarget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodingTarget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingTarget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodingTarget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static load(name: string, category: string | null): EncodingTarget;
        static load_from_file(filepath: string): EncodingTarget;
        add_profile(profile: EncodingProfile): boolean;
        get_category(): string;
        get_description(): string;
        get_name(): string;
        get_path(): string | null;
        get_profile(name: string): EncodingProfile | null;
        get_profiles(): EncodingProfile[];
        save(): boolean;
        save_to_file(filepath: string): boolean;
    }
    namespace EncodingVideoProfile {
        interface SignalSignatures extends EncodingProfile.SignalSignatures {
            "notify::element-properties": (pspec: GObject.ParamSpec) => void;
            "notify::restriction-caps": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends EncodingProfile.ConstructorProps {}
    }
    class EncodingVideoProfile extends EncodingProfile {
        static $gtype: GObject.GType<EncodingVideoProfile>;
        $signals: EncodingVideoProfile.SignalSignatures;
        constructor(properties?: Partial<EncodingVideoProfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingVideoProfile;
        connect<K extends keyof EncodingVideoProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingVideoProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodingVideoProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingVideoProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodingVideoProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingVideoProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_pass(): number;
        get_variableframerate(): boolean;
        set_pass(pass: number): void;
        set_variableframerate(variableframerate: boolean): void;
    }
    type AudioVisualizerClass = typeof AudioVisualizer;
    abstract class AudioVisualizerPrivate {
        static $gtype: GObject.GType<AudioVisualizerPrivate>;
    }
    type DiscovererClass = typeof Discoverer;
    abstract class DiscovererPrivate {
        static $gtype: GObject.GType<DiscovererPrivate>;
    }
    type EncodingAudioProfileClass = typeof EncodingAudioProfile;
    type EncodingContainerProfileClass = typeof EncodingContainerProfile;
    type EncodingProfileClass = typeof EncodingProfile;
    type EncodingVideoProfileClass = typeof EncodingVideoProfile;
    class InstallPluginsContext {
        static $gtype: GObject.GType<InstallPluginsContext>;
        constructor(properties?: Partial<{}>);
        static ["new"](): InstallPluginsContext;
        copy(): InstallPluginsContext;
        free(): void;
        set_confirm_search(confirm_search: boolean): void;
        set_desktop_id(desktop_id: string): void;
        set_startup_notification_id(startup_id: string): void;
        set_xid(xid: number): void;
    }
    type DiscovererAudioInfoClass = GObject.ObjectClass;
    type DiscovererContainerInfoClass = GObject.ObjectClass;
    type DiscovererInfoClass = GObject.ObjectClass;
    type DiscovererStreamInfoClass = GObject.ObjectClass;
    type DiscovererSubtitleInfoClass = GObject.ObjectClass;
    type DiscovererVideoInfoClass = GObject.ObjectClass;
    type EncodingTargetClass = GObject.ObjectClass;
    const __name__: string;
    const __version__: string;
}
export default GstPbutils;
}
declare module 'gi://GstPbutils' {
    import GstPbutils10 from 'gi://GstPbutils?version=1.0';
    export default GstPbutils10;
}
