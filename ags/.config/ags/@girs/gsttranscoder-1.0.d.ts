declare module 'gi://GstTranscoder?version=1.0' {
import type GstPbutils from 'gi://GstPbutils?version=1.0';
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstAudio from 'gi://GstAudio?version=1.0';
export namespace GstTranscoder {
    class TranscoderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static get_name(error: TranscoderError): string;
        static quark(): GLib.Quark;
    }
    export namespace TranscoderMessage {
        export const $gtype: GObject.GType<TranscoderMessage>;
    }
    enum TranscoderMessage {
        POSITION_UPDATED,
        DURATION_CHANGED,
        STATE_CHANGED,
        DONE,
        ERROR,
        WARNING,
    }
    export namespace TranscoderState {
        export const $gtype: GObject.GType<TranscoderState>;
    }
    enum TranscoderState {
        STOPPED,
        PAUSED,
        PLAYING,
    }
    function transcoder_error_get_name(error: TranscoderError): string;
    function transcoder_error_quark(): GLib.Quark;
    function transcoder_message_get_name(message: TranscoderMessage): string;
    function transcoder_message_parse_duration(msg: Gst.Message): Gst.ClockTime;
    function transcoder_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
    function transcoder_message_parse_position(msg: Gst.Message): Gst.ClockTime;
    function transcoder_message_parse_state(msg: Gst.Message): TranscoderState;
    function transcoder_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
    function transcoder_state_get_name(state: TranscoderState): string;
    namespace Transcoder {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::avoid-reencoding": (pspec: GObject.ParamSpec) => void;
            "notify::dest-uri": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::position-update-interval": (pspec: GObject.ParamSpec) => void;
            "notify::profile": (pspec: GObject.ParamSpec) => void;
            "notify::src-uri": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            avoid_reencoding: boolean;
            avoidReencoding: boolean;
            dest_uri: string;
            destUri: string;
            duration: bigint | number;
            pipeline: Gst.Element;
            position: bigint | number;
            position_update_interval: number;
            positionUpdateInterval: number;
            profile: GstPbutils.EncodingProfile;
            src_uri: string;
            srcUri: string;
        }
    }
    class Transcoder extends Gst.Object {
        static $gtype: GObject.GType<Transcoder>;
        get avoid_reencoding(): boolean;
        set avoid_reencoding(val: boolean);
        get avoidReencoding(): boolean;
        set avoidReencoding(val: boolean);
        get dest_uri(): string;
        get destUri(): string;
        get duration(): number;
        get pipeline(): Gst.Element;
        get position(): number;
        get position_update_interval(): number;
        set position_update_interval(val: number);
        get positionUpdateInterval(): number;
        set positionUpdateInterval(val: number);
        get profile(): GstPbutils.EncodingProfile;
        get src_uri(): string;
        get srcUri(): string;
        $signals: Transcoder.SignalSignatures;
        constructor(properties?: Partial<Transcoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source_uri: string, dest_uri: string, encoding_profile: string): Transcoder;
        static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder;
        connect<K extends keyof Transcoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transcoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Transcoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transcoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Transcoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Transcoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static is_transcoder_message(msg: Gst.Message): boolean;
        get_avoid_reencoding(): boolean;
        get_dest_uri(): string;
        get_duration(): Gst.ClockTime;
        get_message_bus(): Gst.Bus;
        get_pipeline(): Gst.Element;
        get_position(): Gst.ClockTime;
        get_position_update_interval(): number;
        get_signal_adapter(context: GLib.MainContext | null): TranscoderSignalAdapter | null;
        get_source_uri(): string;
        get_sync_signal_adapter(): TranscoderSignalAdapter;
        run(): boolean;
        run_async(): void;
        set_avoid_reencoding(avoid_reencoding: boolean): void;
        set_cpu_usage(cpu_usage: number): void;
        set_position_update_interval(interval: number): void;
    }
    namespace TranscoderSignalAdapter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            done: () => void;
            "duration-changed": (arg0: number) => void;
            error: (arg0: GLib.Error, arg1: Gst.Structure) => void;
            "position-updated": (arg0: number) => void;
            "state-changed": (arg0: TranscoderState) => void;
            warning: (arg0: GLib.Error, arg1: Gst.Structure) => void;
            "notify::transcoder": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            transcoder: Transcoder | null;
        }
    }
    class TranscoderSignalAdapter extends GObject.Object {
        static $gtype: GObject.GType<TranscoderSignalAdapter>;
        get transcoder(): Transcoder | null;
        $signals: TranscoderSignalAdapter.SignalSignatures;
        constructor(properties?: Partial<TranscoderSignalAdapter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TranscoderSignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TranscoderSignalAdapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TranscoderSignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TranscoderSignalAdapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TranscoderSignalAdapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TranscoderSignalAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_transcoder(): Transcoder | null;
    }
    type TranscoderClass = typeof Transcoder;
    type TranscoderSignalAdapterClass = typeof TranscoderSignalAdapter;
    const __name__: string;
    const __version__: string;
}
export default GstTranscoder;
}
declare module 'gi://GstTranscoder' {
    import GstTranscoder10 from 'gi://GstTranscoder?version=1.0';
    export default GstTranscoder10;
}
