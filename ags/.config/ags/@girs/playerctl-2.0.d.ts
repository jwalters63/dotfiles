declare module 'gi://Playerctl?version=2.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace Playerctl {
    export namespace LoopStatus {
        export const $gtype: GObject.GType<LoopStatus>;
    }
    enum LoopStatus {
        NONE,
        TRACK,
        PLAYLIST,
    }
    export namespace PlaybackStatus {
        export const $gtype: GObject.GType<PlaybackStatus>;
    }
    enum PlaybackStatus {
        PLAYING,
        PAUSED,
        STOPPED,
    }
    export namespace Source {
        export const $gtype: GObject.GType<Source>;
    }
    enum Source {
        NONE,
        DBUS_SESSION,
        DBUS_SYSTEM,
    }
    function list_players(): PlayerName[];
    namespace Player {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            exit: () => void;
            "loop-status": (arg0: LoopStatus) => void;
            metadata: (arg0: GLib.Variant) => void;
            pause: () => void;
            play: () => void;
            "playback-status": (arg0: PlaybackStatus) => void;
            seeked: (arg0: number) => void;
            shuffle: (arg0: boolean) => void;
            stop: () => void;
            volume: (arg0: number) => void;
            "notify::can-control": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-next": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-previous": (pspec: GObject.ParamSpec) => void;
            "notify::can-pause": (pspec: GObject.ParamSpec) => void;
            "notify::can-play": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek": (pspec: GObject.ParamSpec) => void;
            "notify::loop-status": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::playback-status": (pspec: GObject.ParamSpec) => void;
            "notify::player-instance": (pspec: GObject.ParamSpec) => void;
            "notify::player-name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::shuffle": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "loop-status::can-control": (arg0: LoopStatus) => void;
            "loop-status::can-go-next": (arg0: LoopStatus) => void;
            "loop-status::can-go-previous": (arg0: LoopStatus) => void;
            "loop-status::can-pause": (arg0: LoopStatus) => void;
            "loop-status::can-play": (arg0: LoopStatus) => void;
            "loop-status::can-seek": (arg0: LoopStatus) => void;
            "loop-status::loop-status": (arg0: LoopStatus) => void;
            "loop-status::metadata": (arg0: LoopStatus) => void;
            "loop-status::playback-status": (arg0: LoopStatus) => void;
            "loop-status::player-instance": (arg0: LoopStatus) => void;
            "loop-status::player-name": (arg0: LoopStatus) => void;
            "loop-status::position": (arg0: LoopStatus) => void;
            "loop-status::shuffle": (arg0: LoopStatus) => void;
            "loop-status::source": (arg0: LoopStatus) => void;
            "loop-status::status": (arg0: LoopStatus) => void;
            "loop-status::volume": (arg0: LoopStatus) => void;
            [key: `loop-status::${string}`]: (arg0: LoopStatus) => void;
            "playback-status::can-control": (arg0: PlaybackStatus) => void;
            "playback-status::can-go-next": (arg0: PlaybackStatus) => void;
            "playback-status::can-go-previous": (arg0: PlaybackStatus) => void;
            "playback-status::can-pause": (arg0: PlaybackStatus) => void;
            "playback-status::can-play": (arg0: PlaybackStatus) => void;
            "playback-status::can-seek": (arg0: PlaybackStatus) => void;
            "playback-status::loop-status": (arg0: PlaybackStatus) => void;
            "playback-status::metadata": (arg0: PlaybackStatus) => void;
            "playback-status::playback-status": (arg0: PlaybackStatus) => void;
            "playback-status::player-instance": (arg0: PlaybackStatus) => void;
            "playback-status::player-name": (arg0: PlaybackStatus) => void;
            "playback-status::position": (arg0: PlaybackStatus) => void;
            "playback-status::shuffle": (arg0: PlaybackStatus) => void;
            "playback-status::source": (arg0: PlaybackStatus) => void;
            "playback-status::status": (arg0: PlaybackStatus) => void;
            "playback-status::volume": (arg0: PlaybackStatus) => void;
            [key: `playback-status::${string}`]: (arg0: PlaybackStatus) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            can_control: boolean;
            canControl: boolean;
            can_go_next: boolean;
            canGoNext: boolean;
            can_go_previous: boolean;
            canGoPrevious: boolean;
            can_pause: boolean;
            canPause: boolean;
            can_play: boolean;
            canPlay: boolean;
            can_seek: boolean;
            canSeek: boolean;
            loop_status: LoopStatus;
            loopStatus: LoopStatus;
            metadata: GLib.Variant;
            playback_status: PlaybackStatus;
            playbackStatus: PlaybackStatus;
            player_instance: string;
            playerInstance: string;
            player_name: string;
            playerName: string;
            position: bigint | number;
            shuffle: boolean;
            source: Source;
            status: string;
            volume: number;
        }
    }
    class Player extends GObject.Object {
        static $gtype: GObject.GType<Player>;
        get can_control(): boolean;
        get canControl(): boolean;
        get can_go_next(): boolean;
        get canGoNext(): boolean;
        get can_go_previous(): boolean;
        get canGoPrevious(): boolean;
        get can_pause(): boolean;
        get canPause(): boolean;
        get can_play(): boolean;
        get canPlay(): boolean;
        get can_seek(): boolean;
        get canSeek(): boolean;
        get loop_status(): LoopStatus;
        get loopStatus(): LoopStatus;
        get metadata(): GLib.Variant;
        get playback_status(): PlaybackStatus;
        get playbackStatus(): PlaybackStatus;
        get player_instance(): string;
        get playerInstance(): string;
        get player_name(): string;
        get playerName(): string;
        get position(): number;
        get shuffle(): boolean;
        get source(): Source;
        get status(): string;
        get volume(): number;
        set volume(val: number);
        $signals: Player.SignalSignatures;
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](player_name: string | null): Player;
        static new_for_source(player_name: string | null, source: Source): Player;
        static new_from_name(player_name: PlayerName): Player;
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_album(): string;
        get_artist(): string;
        get_position(): number;
        get_title(): string;
        next(): void;
        on(event: string, callback: GObject.Closure): void;
        open(uri: string): void;
        pause(): void;
        play(): void;
        play_pause(): void;
        previous(): void;
        print_metadata_prop(property: string | null): string;
        seek(offset: bigint | number): void;
        set_loop_status(status: LoopStatus): void;
        set_position(position: bigint | number): void;
        set_shuffle(shuffle: boolean): void;
        set_volume(volume: number): void;
        stop(): void;
    }
    namespace PlayerManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "name-appeared": (arg0: PlayerName) => void;
            "name-vanished": (arg0: PlayerName) => void;
            "player-appeared": (arg0: Player) => void;
            "player-vanished": (arg0: Player) => void;
            "notify::player-names": (pspec: GObject.ParamSpec) => void;
            "notify::players": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            player_names: PlayerName[];
            playerNames: PlayerName[];
            players: Player[];
        }
    }
    class PlayerManager extends GObject.Object {
        static $gtype: GObject.GType<PlayerManager>;
        get player_names(): PlayerName[];
        get playerNames(): PlayerName[];
        get players(): Player[];
        $signals: PlayerManager.SignalSignatures;
        constructor(properties?: Partial<PlayerManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): PlayerManager;
        connect<K extends keyof PlayerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlayerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlayerManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        manage_player(player: Player): void;
        move_player_to_top(player: Player): void;
        set_sort_func(sort_func: GLib.CompareDataFunc): void;
    }
    type PlayerClass = typeof Player;
    type PlayerManagerClass = typeof PlayerManager;
    abstract class PlayerManagerPrivate {
        static $gtype: GObject.GType<PlayerManagerPrivate>;
    }
    class PlayerName {
        static $gtype: GObject.GType<PlayerName>;
        name: string;
        instance: string;
        source: Source;
        copy(): PlayerName;
        free(): void;
    }
    abstract class PlayerPrivate {
        static $gtype: GObject.GType<PlayerPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default Playerctl;
}
declare module 'gi://Playerctl' {
    import Playerctl20 from 'gi://Playerctl?version=2.0';
    export default Playerctl20;
}
