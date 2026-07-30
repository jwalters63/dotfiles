declare module 'gi://GVncPulse?version=1.0' {
import type GVnc from 'gi://GVnc?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GVncPulse {
    namespace AudioPulse {
        interface SignalSignatures extends GVnc.BaseAudio.SignalSignatures {}
        interface ConstructorProps extends GVnc.BaseAudio.ConstructorProps, GVnc.Audio.ConstructorProps {}
    }
    class AudioPulse extends GVnc.BaseAudio implements GVnc.Audio {
        static $gtype: GObject.GType<AudioPulse>;
        $signals: AudioPulse.SignalSignatures;
        constructor(properties?: Partial<AudioPulse.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): AudioPulse;
        connect<K extends keyof AudioPulse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioPulse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioPulse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AudioPulse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioPulse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AudioPulse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        playback_data(sample: GVnc.AudioSample): void;
        playback_start(format: GVnc.AudioFormat): void;
        playback_stop(): void;
        vfunc_playback_data(sample: GVnc.AudioSample): boolean;
        vfunc_playback_start(format: GVnc.AudioFormat): boolean;
        vfunc_playback_stop(): boolean;
    }
    type AudioPulseClass = typeof AudioPulse;
    abstract class AudioPulsePrivate {
        static $gtype: GObject.GType<AudioPulsePrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GVncPulse;
}
declare module 'gi://GVncPulse' {
    import GVncPulse10 from 'gi://GVncPulse?version=1.0';
    export default GVncPulse10;
}
