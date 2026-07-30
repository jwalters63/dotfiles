declare module 'gi://GstPlay?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstTag from 'gi://GstTag?version=1.0';
import type GstPbutils from 'gi://GstPbutils?version=1.0';
import type GstAudio from 'gi://GstAudio?version=1.0';
export namespace GstPlay {
    export namespace PlayColorBalanceType {
        export const $gtype: GObject.GType<PlayColorBalanceType>;
    }
    enum PlayColorBalanceType {
        HUE,
        BRIGHTNESS,
        SATURATION,
        CONTRAST,
    }
    class PlayError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static get_name(error: PlayError): string;
        static quark(): GLib.Quark;
    }
    export namespace PlayLoop {
        export const $gtype: GObject.GType<PlayLoop>;
    }
    enum PlayLoop {
        NONE,
        TRACK,
    }
    export namespace PlayMessage {
        export const $gtype: GObject.GType<PlayMessage>;
    }
    enum PlayMessage {
        URI_LOADED,
        POSITION_UPDATED,
        DURATION_CHANGED,
        STATE_CHANGED,
        BUFFERING,
        END_OF_STREAM,
        ERROR,
        WARNING,
        VIDEO_DIMENSIONS_CHANGED,
        MEDIA_INFO_UPDATED,
        VOLUME_CHANGED,
        MUTE_CHANGED,
        SEEK_DONE,
    }
    enum PlaySnapshotFormat {
        RAW_NATIVE,
        RAW_XRGB,
        RAW_BGRX,
        JPG,
        PNG,
    }
    export namespace PlayState {
        export const $gtype: GObject.GType<PlayState>;
    }
    enum PlayState {
        STOPPED,
        BUFFERING,
        PAUSED,
        PLAYING,
    }
    function play_color_balance_type_get_name(type: PlayColorBalanceType): string;
    function play_error_get_name(error: PlayError): string;
    function play_error_quark(): GLib.Quark;
    function play_loop_get_name(loop: PlayLoop): string;
    function play_message_get_name(message_type: PlayMessage): string;
    function play_message_get_stream_id(msg: Gst.Message): string | null;
    function play_message_get_uri(msg: Gst.Message): string;
    function play_message_parse_buffering(msg: Gst.Message): number;
    function play_message_parse_buffering_percent(msg: Gst.Message): number;
    function play_message_parse_duration_changed(msg: Gst.Message): Gst.ClockTime | null;
    function play_message_parse_duration_updated(msg: Gst.Message): Gst.ClockTime | null;
    function play_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
    function play_message_parse_error_missing_plugin(msg: Gst.Message): [boolean, string[] | null, string[] | null];
    function play_message_parse_media_info_updated(msg: Gst.Message): PlayMediaInfo | null;
    function play_message_parse_muted_changed(msg: Gst.Message): boolean;
    function play_message_parse_position_updated(msg: Gst.Message): Gst.ClockTime | null;
    function play_message_parse_seek_done(msg: Gst.Message): Gst.ClockTime | null;
    function play_message_parse_state_changed(msg: Gst.Message): PlayState | null;
    function play_message_parse_type(msg: Gst.Message): PlayMessage | null;
    function play_message_parse_uri_loaded(msg: Gst.Message): string;
    function play_message_parse_video_dimensions_changed(msg: Gst.Message): [number, number];
    function play_message_parse_volume_changed(msg: Gst.Message): number;
    function play_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
    function play_message_parse_warning_missing_plugin(msg: Gst.Message): [boolean, string[] | null, string[] | null];
    function play_state_get_name(state: PlayState): string;
    namespace Play {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::audio-video-offset": (pspec: GObject.ParamSpec) => void;
            "notify::current-audio-track": (pspec: GObject.ParamSpec) => void;
            "notify::current-subtitle-track": (pspec: GObject.ParamSpec) => void;
            "notify::current-video-track": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::media-info": (pspec: GObject.ParamSpec) => void;
            "notify::mute": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle-video-offset": (pspec: GObject.ParamSpec) => void;
            "notify::suburi": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-flags": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-mode": (pspec: GObject.ParamSpec) => void;
            "notify::video-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            audio_video_offset: bigint | number;
            audioVideoOffset: bigint | number;
            current_audio_track: PlayAudioInfo | null;
            currentAudioTrack: PlayAudioInfo | null;
            current_subtitle_track: PlaySubtitleInfo | null;
            currentSubtitleTrack: PlaySubtitleInfo | null;
            current_video_track: PlayVideoInfo | null;
            currentVideoTrack: PlayVideoInfo | null;
            duration: bigint | number;
            media_info: PlayMediaInfo | null;
            mediaInfo: PlayMediaInfo | null;
            mute: boolean;
            pipeline: Gst.Element;
            position: bigint | number;
            rate: number;
            subtitle_video_offset: bigint | number;
            subtitleVideoOffset: bigint | number;
            suburi: string;
            uri: string | null;
            video_multiview_flags: GstVideo.VideoMultiviewFlags;
            videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
            video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
            videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
            video_renderer: PlayVideoRenderer;
            videoRenderer: PlayVideoRenderer;
            volume: number;
        }
    }
    class Play extends Gst.Object {
        static $gtype: GObject.GType<Play>;
        get audio_video_offset(): number;
        set audio_video_offset(val: bigint | number);
        get audioVideoOffset(): number;
        set audioVideoOffset(val: bigint | number);
        get current_audio_track(): PlayAudioInfo | null;
        get currentAudioTrack(): PlayAudioInfo | null;
        get current_subtitle_track(): PlaySubtitleInfo | null;
        get currentSubtitleTrack(): PlaySubtitleInfo | null;
        get current_video_track(): PlayVideoInfo | null;
        get currentVideoTrack(): PlayVideoInfo | null;
        get duration(): number;
        get media_info(): PlayMediaInfo | null;
        get mediaInfo(): PlayMediaInfo | null;
        get mute(): boolean;
        set mute(val: boolean);
        get pipeline(): Gst.Element;
        get position(): number;
        get rate(): number;
        set rate(val: number);
        get subtitle_video_offset(): number;
        set subtitle_video_offset(val: bigint | number);
        get subtitleVideoOffset(): number;
        set subtitleVideoOffset(val: bigint | number);
        get suburi(): string;
        set suburi(val: string);
        get uri(): string | null;
        set uri(val: string | null);
        get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
        set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);
        get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
        set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);
        get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);
        get videoMultiviewMode(): GstVideo.VideoMultiviewFramePacking;
        set videoMultiviewMode(val: GstVideo.VideoMultiviewFramePacking);
        get video_renderer(): PlayVideoRenderer;
        set video_renderer(val: PlayVideoRenderer);
        get videoRenderer(): PlayVideoRenderer;
        set videoRenderer(val: PlayVideoRenderer);
        get volume(): number;
        set volume(val: number);
        $signals: Play.SignalSignatures;
        constructor(properties?: Partial<Play.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](video_renderer: PlayVideoRenderer | null): Play;
        connect<K extends keyof Play.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Play.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Play.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Play.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Play.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Play.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static config_get_loop(config: Gst.Structure): PlayLoop;
        static config_get_pipeline_dump_in_error_details(config: Gst.Structure): boolean;
        static config_get_position_update_interval(config: Gst.Structure): number;
        static config_get_seek_accurate(config: Gst.Structure): boolean;
        static config_get_user_agent(config: Gst.Structure): string | null;
        static config_set_loop(config: Gst.Structure, loop: PlayLoop): void;
        static config_set_pipeline_dump_in_error_details(config: Gst.Structure, value: boolean): void;
        static config_set_position_update_interval(config: Gst.Structure, interval: number): void;
        static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
        static config_set_user_agent(config: Gst.Structure, agent: string | null): void;
        static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[];
        static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[];
        static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[];
        static is_play_message(msg: Gst.Message): boolean;
        static visualizations_free(viss: PlayVisualization): void;
        static visualizations_get(): PlayVisualization[];
        get_audio_video_offset(): number;
        get_color_balance(type: PlayColorBalanceType): number;
        get_config(): Gst.Structure;
        get_current_audio_track(): PlayAudioInfo | null;
        get_current_subtitle_track(): PlaySubtitleInfo | null;
        get_current_video_track(): PlayVideoInfo | null;
        get_current_visualization(): string | null;
        get_duration(): Gst.ClockTime;
        get_media_info(): PlayMediaInfo | null;
        get_message_bus(): Gst.Bus;
        get_multiview_flags(): GstVideo.VideoMultiviewFlags;
        get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        get_mute(): boolean;
        get_pipeline(): Gst.Element;
        get_position(): Gst.ClockTime;
        get_rate(): number;
        get_subtitle_uri(): string | null;
        get_subtitle_video_offset(): number;
        get_uri(): string | null;
        get_video_snapshot(format: PlaySnapshotFormat, config: Gst.Structure | null): Gst.Sample | null;
        get_volume(): number;
        has_color_balance(): boolean;
        pause(): void;
        play(): void;
        seek(position: Gst.ClockTime): void;
        set_audio_track(stream_index: number): boolean;
        set_audio_track_enabled(enabled: boolean): void;
        set_audio_track_id(stream_id: string | null): boolean;
        set_audio_video_offset(offset: bigint | number): void;
        set_color_balance(type: PlayColorBalanceType, value: number): void;
        set_config(config: Gst.Structure): boolean;
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
        set_mute(val: boolean): void;
        set_rate(rate: number): void;
        set_subtitle_track(stream_index: number): boolean;
        set_subtitle_track_enabled(enabled: boolean): void;
        set_subtitle_track_id(stream_id: string | null): boolean;
        set_subtitle_uri(uri: string | null): void;
        set_subtitle_video_offset(offset: bigint | number): void;
        set_track_ids(audio_stream_id: string | null, video_stream_id: string | null, subtitle_stream_id: string | null): boolean;
        set_uri(uri: string | null): void;
        set_video_track(stream_index: number): boolean;
        set_video_track_enabled(enabled: boolean): void;
        set_video_track_id(stream_id: string | null): boolean;
        set_visualization(name: string | null): boolean;
        set_visualization_enabled(enabled: boolean): void;
        set_volume(val: number): void;
        stop(): void;
    }
    namespace PlayAudioInfo {
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
    }
    class PlayAudioInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlayAudioInfo>;
        $signals: PlayAudioInfo.SignalSignatures;
        constructor(properties?: Partial<PlayAudioInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_channels(): number;
        get_language(): string | null;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }
    namespace PlayMediaInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PlayMediaInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayMediaInfo>;
        $signals: PlayMediaInfo.SignalSignatures;
        constructor(properties?: Partial<PlayMediaInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayMediaInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayMediaInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_audio_streams(): PlayAudioInfo[];
        get_container_format(): string | null;
        get_duration(): Gst.ClockTime;
        get_image_sample(): Gst.Sample | null;
        get_number_of_audio_streams(): number;
        get_number_of_streams(): number;
        get_number_of_subtitle_streams(): number;
        get_number_of_video_streams(): number;
        get_stream_list(): PlayStreamInfo[];
        get_subtitle_streams(): PlaySubtitleInfo[];
        get_tags(): Gst.TagList | null;
        get_title(): string | null;
        get_uri(): string;
        get_video_streams(): PlayVideoInfo[];
        is_live(): boolean;
        is_seekable(): boolean;
    }
    namespace PlaySignalAdapter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            buffering: (arg0: number) => void;
            "duration-changed": (arg0: number) => void;
            "end-of-stream": () => void;
            error: (arg0: GLib.Error, arg1: Gst.Structure | null) => void;
            "media-info-updated": (arg0: PlayMediaInfo) => void;
            "mute-changed": (arg0: boolean) => void;
            "position-updated": (arg0: number) => void;
            "seek-done": (arg0: number) => void;
            "state-changed": (arg0: PlayState) => void;
            "uri-loaded": (arg0: string) => void;
            "video-dimensions-changed": (arg0: number, arg1: number) => void;
            "volume-changed": (arg0: number) => void;
            warning: (arg0: GLib.Error, arg1: Gst.Structure | null) => void;
            "notify::play": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            play: Play;
        }
    }
    class PlaySignalAdapter extends GObject.Object {
        static $gtype: GObject.GType<PlaySignalAdapter>;
        get play(): Play;
        $signals: PlaySignalAdapter.SignalSignatures;
        constructor(properties?: Partial<PlaySignalAdapter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](play: Play): PlaySignalAdapter;
        static new_sync_emit(play: Play): PlaySignalAdapter;
        static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter;
        connect<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySignalAdapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySignalAdapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaySignalAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_play(): Play;
    }
    namespace PlayStreamInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class PlayStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayStreamInfo>;
        $signals: PlayStreamInfo.SignalSignatures;
        constructor(properties?: Partial<PlayStreamInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_caps(): Gst.Caps | null;
        get_codec(): string | null;
        get_index(): number;
        get_stream_id(): string;
        get_stream_type(): string;
        get_tags(): Gst.TagList | null;
    }
    namespace PlaySubtitleInfo {
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
    }
    class PlaySubtitleInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlaySubtitleInfo>;
        $signals: PlaySubtitleInfo.SignalSignatures;
        constructor(properties?: Partial<PlaySubtitleInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaySubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_language(): string | null;
    }
    namespace PlayVideoInfo {
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {}
    }
    class PlayVideoInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlayVideoInfo>;
        $signals: PlayVideoInfo.SignalSignatures;
        constructor(properties?: Partial<PlayVideoInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_framerate(): [number, number];
        get_height(): number;
        get_max_bitrate(): number;
        get_pixel_aspect_ratio(): [number, number];
        get_width(): number;
    }
    namespace PlayVideoOverlayVideoRenderer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
            "notify::window-handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: never;
            windowHandle: never;
        }
    }
    class PlayVideoOverlayVideoRenderer extends GObject.Object implements PlayVideoRenderer {
        static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>;
        get video_sink(): Gst.Element;
        set video_sink(val: Gst.Element);
        get videoSink(): Gst.Element;
        set videoSink(val: Gst.Element);
        get window_handle(): null;
        set window_handle(val: never);
        get windowHandle(): null;
        set windowHandle(val: never);
        $signals: PlayVideoOverlayVideoRenderer.SignalSignatures;
        constructor(properties?: Partial<PlayVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayVideoOverlayVideoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](window_handle: null): PlayVideoRenderer;
        static new_with_sink(window_handle: null, video_sink: Gst.Element): PlayVideoRenderer;
        expose(): void;
        get_render_rectangle(): [number, number, number, number];
        get_window_handle(): null;
        set_render_rectangle(x: number, y: number, width: number, height: number): void;
        set_window_handle(window_handle: null): void;
    }
    type PlayAudioInfoClass = typeof PlayAudioInfo;
    type PlayClass = typeof Play;
    type PlayMediaInfoClass = typeof PlayMediaInfo;
    type PlaySignalAdapterClass = typeof PlaySignalAdapter;
    type PlayStreamInfoClass = typeof PlayStreamInfo;
    type PlaySubtitleInfoClass = typeof PlaySubtitleInfo;
    type PlayVideoInfoClass = typeof PlayVideoInfo;
    type PlayVideoOverlayVideoRendererClass = typeof PlayVideoOverlayVideoRenderer;
    type PlayVideoRendererInterface = typeof PlayVideoRenderer;
    class PlayVisualization {
        static $gtype: GObject.GType<PlayVisualization>;
        name: string;
        description: string;
        constructor(properties?: Partial<{
            name: string;
            description: string;
        }>);
        copy(): PlayVisualization;
        free(): void;
    }
    namespace PlayVideoRenderer {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PlayVideoRendererNamespace {
        $gtype: GObject.GType<PlayVideoRenderer>;
        prototype: PlayVideoRenderer;
    }
    interface PlayVideoRenderer extends GObject.Object {
    }
    export const PlayVideoRenderer: PlayVideoRendererNamespace & {
        new (): PlayVideoRenderer; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstPlay;
}
declare module 'gi://GstPlay' {
    import GstPlay10 from 'gi://GstPlay?version=1.0';
    export default GstPlay10;
}
