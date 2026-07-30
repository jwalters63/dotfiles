declare module 'gi://AstalMpris?version=0.1' {
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace AstalMpris {
    export namespace PlaybackStatus {
        export const $gtype: GObject.GType<PlaybackStatus>;
    }
    enum PlaybackStatus {
        PLAYING,
        PAUSED,
        STOPPED,
    }
    export namespace Loop {
        export const $gtype: GObject.GType<Loop>;
    }
    enum Loop {
        UNSUPPORTED,
        NONE,
        TRACK,
        PLAYLIST,
    }
    export namespace Shuffle {
        export const $gtype: GObject.GType<Shuffle>;
    }
    enum Shuffle {
        UNSUPPORTED,
        ON,
        OFF,
    }
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const MICRO_VERSION: number;
    const VERSION: string;
    function get_default(): Mpris;
    namespace Mpris {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "player-added": (arg0: Player) => void;
            "player-closed": (arg0: Player) => void;
            "notify::players": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            players: Player[];
        }
    }
    class Mpris<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Mpris>;
        get players(): Player[];
        $signals: Mpris.SignalSignatures;
        constructor(properties?: Partial<Mpris.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Mpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Mpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Mpris.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mpris.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): Mpris;
        get_players(): Player[];
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace Player {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::can-quit": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::can-set-fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::can-raise": (pspec: GObject.ParamSpec) => void;
            "notify::identity": (pspec: GObject.ParamSpec) => void;
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::supported-uri-schemes": (pspec: GObject.ParamSpec) => void;
            "notify::supported-mime-types": (pspec: GObject.ParamSpec) => void;
            "notify::loop-status": (pspec: GObject.ParamSpec) => void;
            "notify::shuffle-status": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::playback-status": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-rate": (pspec: GObject.ParamSpec) => void;
            "notify::maximum-rate": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-next": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-previous": (pspec: GObject.ParamSpec) => void;
            "notify::can-play": (pspec: GObject.ParamSpec) => void;
            "notify::can-pause": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek": (pspec: GObject.ParamSpec) => void;
            "notify::can-control": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::trackid": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::art-url": (pspec: GObject.ParamSpec) => void;
            "notify::album": (pspec: GObject.ParamSpec) => void;
            "notify::album-artist": (pspec: GObject.ParamSpec) => void;
            "notify::artist": (pspec: GObject.ParamSpec) => void;
            "notify::lyrics": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::composer": (pspec: GObject.ParamSpec) => void;
            "notify::comments": (pspec: GObject.ParamSpec) => void;
            "notify::cover-art": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus_name: string;
            busName: string;
            available: boolean;
            can_quit: boolean;
            canQuit: boolean;
            fullscreen: boolean;
            can_set_fullscreen: boolean;
            canSetFullscreen: boolean;
            can_raise: boolean;
            canRaise: boolean;
            identity: string;
            entry: string;
            supported_uri_schemes: string[];
            supportedUriSchemes: string[];
            supported_mime_types: string[];
            supportedMimeTypes: string[];
            loop_status: Loop;
            loopStatus: Loop;
            shuffle_status: Shuffle;
            shuffleStatus: Shuffle;
            rate: number;
            volume: number;
            position: number;
            playback_status: PlaybackStatus;
            playbackStatus: PlaybackStatus;
            minimum_rate: number;
            minimumRate: number;
            maximum_rate: number;
            maximumRate: number;
            can_go_next: boolean;
            canGoNext: boolean;
            can_go_previous: boolean;
            canGoPrevious: boolean;
            can_play: boolean;
            canPlay: boolean;
            can_pause: boolean;
            canPause: boolean;
            can_seek: boolean;
            canSeek: boolean;
            can_control: boolean;
            canControl: boolean;
            metadata: GLib.Variant;
            trackid: string;
            length: number;
            art_url: string;
            artUrl: string;
            album: string;
            album_artist: string;
            albumArtist: string;
            artist: string;
            lyrics: string;
            title: string;
            composer: string;
            comments: string;
            cover_art: string;
            coverArt: string;
        }
    }
    class Player extends GObject.Object {
        static $gtype: GObject.GType<Player>;
        get bus_name(): string;
        get busName(): string;
        get available(): boolean;
        set available(val: boolean);
        get can_quit(): boolean;
        set can_quit(val: boolean);
        get canQuit(): boolean;
        set canQuit(val: boolean);
        get fullscreen(): boolean;
        set fullscreen(val: boolean);
        get can_set_fullscreen(): boolean;
        set can_set_fullscreen(val: boolean);
        get canSetFullscreen(): boolean;
        set canSetFullscreen(val: boolean);
        get can_raise(): boolean;
        set can_raise(val: boolean);
        get canRaise(): boolean;
        set canRaise(val: boolean);
        get identity(): string;
        set identity(val: string);
        get entry(): string;
        set entry(val: string);
        get supported_uri_schemes(): string[];
        set supported_uri_schemes(val: string[]);
        get supportedUriSchemes(): string[];
        set supportedUriSchemes(val: string[]);
        get supported_mime_types(): string[];
        set supported_mime_types(val: string[]);
        get supportedMimeTypes(): string[];
        set supportedMimeTypes(val: string[]);
        get loop_status(): Loop;
        set loop_status(val: Loop);
        get loopStatus(): Loop;
        set loopStatus(val: Loop);
        get shuffle_status(): Shuffle;
        set shuffle_status(val: Shuffle);
        get shuffleStatus(): Shuffle;
        set shuffleStatus(val: Shuffle);
        get rate(): number;
        set rate(val: number);
        get volume(): number;
        set volume(val: number);
        get position(): number;
        set position(val: number);
        get playback_status(): PlaybackStatus;
        set playback_status(val: PlaybackStatus);
        get playbackStatus(): PlaybackStatus;
        set playbackStatus(val: PlaybackStatus);
        get minimum_rate(): number;
        set minimum_rate(val: number);
        get minimumRate(): number;
        set minimumRate(val: number);
        get maximum_rate(): number;
        set maximum_rate(val: number);
        get maximumRate(): number;
        set maximumRate(val: number);
        get can_go_next(): boolean;
        set can_go_next(val: boolean);
        get canGoNext(): boolean;
        set canGoNext(val: boolean);
        get can_go_previous(): boolean;
        set can_go_previous(val: boolean);
        get canGoPrevious(): boolean;
        set canGoPrevious(val: boolean);
        get can_play(): boolean;
        set can_play(val: boolean);
        get canPlay(): boolean;
        set canPlay(val: boolean);
        get can_pause(): boolean;
        set can_pause(val: boolean);
        get canPause(): boolean;
        set canPause(val: boolean);
        get can_seek(): boolean;
        set can_seek(val: boolean);
        get canSeek(): boolean;
        set canSeek(val: boolean);
        get can_control(): boolean;
        set can_control(val: boolean);
        get canControl(): boolean;
        set canControl(val: boolean);
        get metadata(): GLib.Variant;
        set metadata(val: GLib.Variant);
        get trackid(): string;
        set trackid(val: string);
        get length(): number;
        set length(val: number);
        get art_url(): string;
        set art_url(val: string);
        get artUrl(): string;
        set artUrl(val: string);
        get album(): string;
        set album(val: string);
        get album_artist(): string;
        set album_artist(val: string);
        get albumArtist(): string;
        set albumArtist(val: string);
        get artist(): string;
        set artist(val: string);
        get lyrics(): string;
        set lyrics(val: string);
        get title(): string;
        set title(val: string);
        get composer(): string;
        set composer(val: string);
        get comments(): string;
        set comments(val: string);
        get cover_art(): string;
        set cover_art(val: string);
        get coverArt(): string;
        set coverArt(val: string);
        $signals: Player.SignalSignatures;
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string): Player;
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static new_async(name: string, _callback_: Gio.AsyncReadyCallback<Player> | null): void;
        static new_finish(_res_: Gio.AsyncResult): Player;
        raise(): void;
        quit(): void;
        toggle_fullscreen(): void;
        next(): void;
        previous(): void;
        pause(): void;
        play_pause(): void;
        stop(): void;
        play(): void;
        open_uri(uri: string): void;
        loop(): void;
        shuffle(): void;
        get_meta(key: string): GLib.Variant | null;
        get_bus_name(): string;
        get_available(): boolean;
        get_can_quit(): boolean;
        get_fullscreen(): boolean;
        get_can_set_fullscreen(): boolean;
        get_can_raise(): boolean;
        get_identity(): string;
        get_entry(): string;
        get_supported_uri_schemes(): string[];
        get_supported_mime_types(): string[];
        get_loop_status(): Loop;
        set_loop_status(value: Loop): void;
        get_shuffle_status(): Shuffle;
        set_shuffle_status(value: Shuffle): void;
        get_rate(): number;
        set_rate(value: number): void;
        get_volume(): number;
        set_volume(value: number): void;
        get_position(): number;
        set_position(value: number): void;
        get_playback_status(): PlaybackStatus;
        get_minimum_rate(): number;
        get_maximum_rate(): number;
        get_can_go_next(): boolean;
        get_can_go_previous(): boolean;
        get_can_play(): boolean;
        get_can_pause(): boolean;
        get_can_seek(): boolean;
        get_can_control(): boolean;
        get_metadata(): GLib.Variant;
        get_trackid(): string;
        get_length(): number;
        get_art_url(): string;
        get_album(): string;
        get_album_artist(): string;
        get_artist(): string;
        get_lyrics(): string;
        get_title(): string;
        get_composer(): string;
        get_comments(): string;
        get_cover_art(): string;
    }
    type MprisClass = typeof Mpris;
    abstract class MprisPrivate {
        static $gtype: GObject.GType<MprisPrivate>;
    }
    type PlayerClass = typeof Player;
    abstract class PlayerPrivate {
        static $gtype: GObject.GType<PlayerPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default AstalMpris;
}
declare module 'gi://AstalMpris' {
    import AstalMpris01 from 'gi://AstalMpris?version=0.1';
    export default AstalMpris01;
}
