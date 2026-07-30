declare module 'gi://GstPlayer?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstTag from 'gi://GstTag?version=1.0';
import type GstPbutils from 'gi://GstPbutils?version=1.0';
import type GstAudio from 'gi://GstAudio?version=1.0';
export namespace GstPlayer {
    export namespace PlayerColorBalanceType {
        export const $gtype: GObject.GType<PlayerColorBalanceType>;
    }
    enum PlayerColorBalanceType {
        HUE,
        BRIGHTNESS,
        SATURATION,
        CONTRAST,
    }
    class PlayerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static get_name(error: PlayerError): string;
        static quark(): GLib.Quark;
    }
    enum PlayerSnapshotFormat {
        RAW_NATIVE,
        RAW_XRGB,
        RAW_BGRX,
        JPG,
        PNG,
    }
    export namespace PlayerState {
        export const $gtype: GObject.GType<PlayerState>;
    }
    enum PlayerState {
        STOPPED,
        BUFFERING,
        PAUSED,
        PLAYING,
    }
    function player_color_balance_type_get_name(type: PlayerColorBalanceType): string;
    function player_error_get_name(error: PlayerError): string;
    function player_error_quark(): GLib.Quark;
    function player_state_get_name(state: PlayerState): string;
    interface PlayerSignalDispatcherFunc {
        (data: null): void;
    }
    namespace Player {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            buffering: (arg0: number) => void;
            "duration-changed": (arg0: number) => void;
            "end-of-stream": () => void;
            error: (arg0: GLib.Error) => void;
            "media-info-updated": (arg0: PlayerMediaInfo) => void;
            "mute-changed": () => void;
            "position-updated": (arg0: number) => void;
            "seek-done": (arg0: number) => void;
            "state-changed": (arg0: PlayerState) => void;
            "uri-loaded": (arg0: string) => void;
            "video-dimensions-changed": (arg0: number, arg1: number) => void;
            "volume-changed": () => void;
            warning: (arg0: GLib.Error) => void;
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
            "notify::signal-dispatcher": (pspec: GObject.ParamSpec) => void;
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
            current_audio_track: PlayerAudioInfo | null;
            currentAudioTrack: PlayerAudioInfo | null;
            current_subtitle_track: PlayerSubtitleInfo | null;
            currentSubtitleTrack: PlayerSubtitleInfo | null;
            current_video_track: PlayerVideoInfo | null;
            currentVideoTrack: PlayerVideoInfo | null;
            duration: bigint | number;
            media_info: PlayerMediaInfo | null;
            mediaInfo: PlayerMediaInfo | null;
            mute: boolean;
            pipeline: Gst.Element;
            position: bigint | number;
            rate: number;
            signal_dispatcher: PlayerSignalDispatcher;
            signalDispatcher: PlayerSignalDispatcher;
            subtitle_video_offset: bigint | number;
            subtitleVideoOffset: bigint | number;
            suburi: string;
            uri: string | null;
            video_multiview_flags: GstVideo.VideoMultiviewFlags;
            videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
            video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
            videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
            video_renderer: PlayerVideoRenderer;
            videoRenderer: PlayerVideoRenderer;
            volume: number;
        }
    }
    class Player extends Gst.Object {
        static $gtype: GObject.GType<Player>;
        get audio_video_offset(): number;
        set audio_video_offset(val: bigint | number);
        get audioVideoOffset(): number;
        set audioVideoOffset(val: bigint | number);
        get current_audio_track(): PlayerAudioInfo | null;
        get currentAudioTrack(): PlayerAudioInfo | null;
        get current_subtitle_track(): PlayerSubtitleInfo | null;
        get currentSubtitleTrack(): PlayerSubtitleInfo | null;
        get current_video_track(): PlayerVideoInfo | null;
        get currentVideoTrack(): PlayerVideoInfo | null;
        get duration(): number;
        get media_info(): PlayerMediaInfo | null;
        get mediaInfo(): PlayerMediaInfo | null;
        get mute(): boolean;
        set mute(val: boolean);
        get pipeline(): Gst.Element;
        get position(): number;
        get rate(): number;
        set rate(val: number);
        set signal_dispatcher(val: PlayerSignalDispatcher);
        set signalDispatcher(val: PlayerSignalDispatcher);
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
        get video_renderer(): PlayerVideoRenderer;
        get videoRenderer(): PlayerVideoRenderer;
        get volume(): number;
        set volume(val: number);
        $signals: Player.SignalSignatures;
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](video_renderer: PlayerVideoRenderer | null, signal_dispatcher: PlayerSignalDispatcher | null): Player;
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static config_get_position_update_interval(config: Gst.Structure): number;
        static config_get_seek_accurate(config: Gst.Structure): boolean;
        static config_get_user_agent(config: Gst.Structure): string | null;
        static config_set_position_update_interval(config: Gst.Structure, interval: number): void;
        static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
        static config_set_user_agent(config: Gst.Structure, agent: string | null): void;
        static get_audio_streams(info: PlayerMediaInfo): PlayerAudioInfo[];
        static get_subtitle_streams(info: PlayerMediaInfo): PlayerSubtitleInfo[];
        static get_video_streams(info: PlayerMediaInfo): PlayerVideoInfo[];
        static visualizations_free(viss: PlayerVisualization): void;
        static visualizations_get(): PlayerVisualization[];
        get_audio_video_offset(): number;
        get_color_balance(type: PlayerColorBalanceType): number;
        get_config(): Gst.Structure;
        get_current_audio_track(): PlayerAudioInfo | null;
        get_current_subtitle_track(): PlayerSubtitleInfo | null;
        get_current_video_track(): PlayerVideoInfo | null;
        get_current_visualization(): string | null;
        get_duration(): Gst.ClockTime;
        get_media_info(): PlayerMediaInfo | null;
        get_multiview_flags(): GstVideo.VideoMultiviewFlags;
        get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        get_mute(): boolean;
        get_pipeline(): Gst.Element;
        get_position(): Gst.ClockTime;
        get_rate(): number;
        get_subtitle_uri(): string | null;
        get_subtitle_video_offset(): number;
        get_uri(): string | null;
        get_video_snapshot(format: PlayerSnapshotFormat, config: Gst.Structure | null): Gst.Sample | null;
        get_volume(): number;
        has_color_balance(): boolean;
        pause(): void;
        play(): void;
        seek(position: Gst.ClockTime): void;
        set_audio_track(stream_index: number): boolean;
        set_audio_track_enabled(enabled: boolean): void;
        set_audio_video_offset(offset: bigint | number): void;
        set_color_balance(type: PlayerColorBalanceType, value: number): void;
        set_config(config: Gst.Structure): boolean;
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
        set_mute(val: boolean): void;
        set_rate(rate: number): void;
        set_subtitle_track(stream_index: number): boolean;
        set_subtitle_track_enabled(enabled: boolean): void;
        set_subtitle_uri(uri: string | null): void;
        set_subtitle_video_offset(offset: bigint | number): void;
        set_uri(uri: string | null): void;
        set_video_track(stream_index: number): boolean;
        set_video_track_enabled(enabled: boolean): void;
        set_visualization(name: string | null): boolean;
        set_visualization_enabled(enabled: boolean): void;
        set_volume(val: number): void;
        stop(): void;
    }
    namespace PlayerAudioInfo {
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
    }
    class PlayerAudioInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerAudioInfo>;
        $signals: PlayerAudioInfo.SignalSignatures;
        constructor(properties?: Partial<PlayerAudioInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_channels(): number;
        get_language(): string | null;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }
    namespace PlayerGMainContextSignalDispatcher {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::application-context": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayerSignalDispatcher.ConstructorProps {
            application_context: GLib.MainContext;
            applicationContext: GLib.MainContext;
        }
    }
    class PlayerGMainContextSignalDispatcher extends GObject.Object implements PlayerSignalDispatcher {
        static $gtype: GObject.GType<PlayerGMainContextSignalDispatcher>;
        get application_context(): GLib.MainContext;
        get applicationContext(): GLib.MainContext;
        $signals: PlayerGMainContextSignalDispatcher.SignalSignatures;
        constructor(properties?: Partial<PlayerGMainContextSignalDispatcher.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerGMainContextSignalDispatcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](application_context: GLib.MainContext | null): PlayerSignalDispatcher;
        vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
    }
    namespace PlayerMediaInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PlayerMediaInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayerMediaInfo>;
        $signals: PlayerMediaInfo.SignalSignatures;
        constructor(properties?: Partial<PlayerMediaInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_audio_streams(): PlayerAudioInfo[];
        get_container_format(): string | null;
        get_duration(): Gst.ClockTime;
        get_image_sample(): Gst.Sample | null;
        get_number_of_audio_streams(): number;
        get_number_of_streams(): number;
        get_number_of_subtitle_streams(): number;
        get_number_of_video_streams(): number;
        get_stream_list(): PlayerStreamInfo[];
        get_subtitle_streams(): PlayerSubtitleInfo[];
        get_tags(): Gst.TagList | null;
        get_title(): string | null;
        get_uri(): string;
        get_video_streams(): PlayerVideoInfo[];
        is_live(): boolean;
        is_seekable(): boolean;
    }
    namespace PlayerStreamInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class PlayerStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayerStreamInfo>;
        $signals: PlayerStreamInfo.SignalSignatures;
        constructor(properties?: Partial<PlayerStreamInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_caps(): Gst.Caps | null;
        get_codec(): string | null;
        get_index(): number;
        get_stream_type(): string;
        get_tags(): Gst.TagList | null;
    }
    namespace PlayerSubtitleInfo {
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
    }
    class PlayerSubtitleInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerSubtitleInfo>;
        $signals: PlayerSubtitleInfo.SignalSignatures;
        constructor(properties?: Partial<PlayerSubtitleInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_language(): string | null;
    }
    namespace PlayerVideoInfo {
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
    }
    class PlayerVideoInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerVideoInfo>;
        $signals: PlayerVideoInfo.SignalSignatures;
        constructor(properties?: Partial<PlayerVideoInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bitrate(): number;
        get_framerate(): [number, number];
        get_height(): number;
        get_max_bitrate(): number;
        get_pixel_aspect_ratio(): [number, number];
        get_width(): number;
    }
    namespace PlayerVideoOverlayVideoRenderer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
            "notify::window-handle": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayerVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: never;
            windowHandle: never;
        }
    }
    class PlayerVideoOverlayVideoRenderer extends GObject.Object implements PlayerVideoRenderer {
        static $gtype: GObject.GType<PlayerVideoOverlayVideoRenderer>;
        get video_sink(): Gst.Element;
        set video_sink(val: Gst.Element);
        get videoSink(): Gst.Element;
        set videoSink(val: Gst.Element);
        get window_handle(): null;
        set window_handle(val: never);
        get windowHandle(): null;
        set windowHandle(val: never);
        $signals: PlayerVideoOverlayVideoRenderer.SignalSignatures;
        constructor(properties?: Partial<PlayerVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerVideoOverlayVideoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](window_handle: null): PlayerVideoRenderer;
        static new_with_sink(window_handle: null, video_sink: Gst.Element): PlayerVideoRenderer;
        expose(): void;
        get_render_rectangle(): [number, number, number, number];
        get_window_handle(): null;
        set_render_rectangle(x: number, y: number, width: number, height: number): void;
        set_window_handle(window_handle: null): void;
    }
    type PlayerAudioInfoClass = typeof PlayerAudioInfo;
    type PlayerClass = typeof Player;
    type PlayerGMainContextSignalDispatcherClass = typeof PlayerGMainContextSignalDispatcher;
    type PlayerMediaInfoClass = typeof PlayerMediaInfo;
    type PlayerSignalDispatcherInterface = typeof PlayerSignalDispatcher;
    type PlayerStreamInfoClass = typeof PlayerStreamInfo;
    type PlayerSubtitleInfoClass = typeof PlayerSubtitleInfo;
    type PlayerVideoInfoClass = typeof PlayerVideoInfo;
    type PlayerVideoOverlayVideoRendererClass = typeof PlayerVideoOverlayVideoRenderer;
    type PlayerVideoRendererInterface = typeof PlayerVideoRenderer;
    class PlayerVisualization {
        static $gtype: GObject.GType<PlayerVisualization>;
        name: string;
        description: string;
        constructor(properties?: Partial<{
            name: string;
            description: string;
        }>);
        copy(): PlayerVisualization;
        free(): void;
    }
    namespace PlayerSignalDispatcher {
        interface Interface {
            vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PlayerSignalDispatcherNamespace {
        $gtype: GObject.GType<PlayerSignalDispatcher>;
        prototype: PlayerSignalDispatcher;
    }
    interface PlayerSignalDispatcher extends GObject.Object, PlayerSignalDispatcher.Interface {
    }
    export const PlayerSignalDispatcher: PlayerSignalDispatcherNamespace & {
        new (): PlayerSignalDispatcher; 
    };
    namespace PlayerVideoRenderer {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PlayerVideoRendererNamespace {
        $gtype: GObject.GType<PlayerVideoRenderer>;
        prototype: PlayerVideoRenderer;
    }
    interface PlayerVideoRenderer extends GObject.Object {
    }
    export const PlayerVideoRenderer: PlayerVideoRendererNamespace & {
        new (): PlayerVideoRenderer; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstPlayer;
}
declare module 'gi://GstPlayer' {
    import GstPlayer10 from 'gi://GstPlayer?version=1.0';
    export default GstPlayer10;
}
