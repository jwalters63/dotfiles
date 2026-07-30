declare module 'gi://GstController?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstController {
    export namespace InterpolationMode {
        export const $gtype: GObject.GType<InterpolationMode>;
    }
    enum InterpolationMode {
        NONE,
        LINEAR,
        CUBIC,
        CUBIC_MONOTONIC,
    }
    export namespace LFOWaveform {
        export const $gtype: GObject.GType<LFOWaveform>;
    }
    enum LFOWaveform {
        SINE,
        SQUARE,
        SAW,
        REVERSE_SAW,
        TRIANGLE,
    }
    function timed_value_control_invalidate_cache(self: TimedValueControlSource): void;
    interface DirectControlBindingConvertGValue {
        (self: DirectControlBinding, src_value: number, dest_value: unknown): void;
    }
    interface DirectControlBindingConvertValue {
        (self: DirectControlBinding, src_value: number, dest_value: null): void;
    }
    namespace ARGBControlBinding {
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            "notify::control-source-a": (pspec: GObject.ParamSpec) => void;
            "notify::control-source-b": (pspec: GObject.ParamSpec) => void;
            "notify::control-source-g": (pspec: GObject.ParamSpec) => void;
            "notify::control-source-r": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {
            control_source_a: Gst.ControlSource;
            controlSourceA: Gst.ControlSource;
            control_source_b: Gst.ControlSource;
            controlSourceB: Gst.ControlSource;
            control_source_g: Gst.ControlSource;
            controlSourceG: Gst.ControlSource;
            control_source_r: Gst.ControlSource;
            controlSourceR: Gst.ControlSource;
        }
    }
    class ARGBControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<ARGBControlBinding>;
        get control_source_a(): Gst.ControlSource;
        set control_source_a(val: Gst.ControlSource);
        get controlSourceA(): Gst.ControlSource;
        set controlSourceA(val: Gst.ControlSource);
        get control_source_b(): Gst.ControlSource;
        set control_source_b(val: Gst.ControlSource);
        get controlSourceB(): Gst.ControlSource;
        set controlSourceB(val: Gst.ControlSource);
        get control_source_g(): Gst.ControlSource;
        set control_source_g(val: Gst.ControlSource);
        get controlSourceG(): Gst.ControlSource;
        set controlSourceG(val: Gst.ControlSource);
        get control_source_r(): Gst.ControlSource;
        set control_source_r(val: Gst.ControlSource);
        get controlSourceR(): Gst.ControlSource;
        set controlSourceR(val: Gst.ControlSource);
        $signals: ARGBControlBinding.SignalSignatures;
        constructor(properties?: Partial<ARGBControlBinding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object: Gst.Object, property_name: string, cs_a: Gst.ControlSource, cs_r: Gst.ControlSource, cs_g: Gst.ControlSource, cs_b: Gst.ControlSource): ARGBControlBinding;
        connect<K extends keyof ARGBControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ARGBControlBinding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ARGBControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ARGBControlBinding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ARGBControlBinding.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ARGBControlBinding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DirectControlBinding {
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            "notify::absolute": (pspec: GObject.ParamSpec) => void;
            "notify::control-source": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {
            absolute: boolean;
            control_source: Gst.ControlSource;
            controlSource: Gst.ControlSource;
        }
    }
    class DirectControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<DirectControlBinding>;
        get absolute(): boolean;
        get control_source(): Gst.ControlSource;
        set control_source(val: Gst.ControlSource);
        get controlSource(): Gst.ControlSource;
        set controlSource(val: Gst.ControlSource);
        $signals: DirectControlBinding.SignalSignatures;
        constructor(properties?: Partial<DirectControlBinding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;
        static new_absolute(object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;
        connect<K extends keyof DirectControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DirectControlBinding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DirectControlBinding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectControlBinding.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DirectControlBinding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InterpolationControlSource {
        interface SignalSignatures extends TimedValueControlSource.SignalSignatures {
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends TimedValueControlSource.ConstructorProps {
            mode: InterpolationMode;
        }
    }
    class InterpolationControlSource extends TimedValueControlSource {
        static $gtype: GObject.GType<InterpolationControlSource>;
        get mode(): InterpolationMode;
        set mode(val: InterpolationMode);
        $signals: InterpolationControlSource.SignalSignatures;
        constructor(properties?: Partial<InterpolationControlSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): InterpolationControlSource;
        connect<K extends keyof InterpolationControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterpolationControlSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InterpolationControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InterpolationControlSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InterpolationControlSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InterpolationControlSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace LFOControlSource {
        interface SignalSignatures extends Gst.ControlSource.SignalSignatures {
            "notify::amplitude": (pspec: GObject.ParamSpec) => void;
            "notify::frequency": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::timeshift": (pspec: GObject.ParamSpec) => void;
            "notify::waveform": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.ControlSource.ConstructorProps {
            amplitude: number;
            frequency: number;
            offset: number;
            timeshift: bigint | number;
            waveform: LFOWaveform;
        }
    }
    class LFOControlSource extends Gst.ControlSource {
        static $gtype: GObject.GType<LFOControlSource>;
        get amplitude(): number;
        set amplitude(val: number);
        get frequency(): number;
        set frequency(val: number);
        get offset(): number;
        set offset(val: number);
        get timeshift(): number;
        set timeshift(val: bigint | number);
        get waveform(): LFOWaveform;
        set waveform(val: LFOWaveform);
        $signals: LFOControlSource.SignalSignatures;
        constructor(properties?: Partial<LFOControlSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): LFOControlSource;
        connect<K extends keyof LFOControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LFOControlSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LFOControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LFOControlSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LFOControlSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LFOControlSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ProxyControlBinding {
        interface SignalSignatures extends Gst.ControlBinding.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.ControlBinding.ConstructorProps {}
    }
    class ProxyControlBinding extends Gst.ControlBinding {
        static $gtype: GObject.GType<ProxyControlBinding>;
        $signals: ProxyControlBinding.SignalSignatures;
        constructor(properties?: Partial<ProxyControlBinding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object: Gst.Object, property_name: string, ref_object: Gst.Object, ref_property_name: string): ProxyControlBinding;
        connect<K extends keyof ProxyControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyControlBinding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProxyControlBinding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProxyControlBinding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProxyControlBinding.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProxyControlBinding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace TimedValueControlSource {
        interface SignalSignatures extends Gst.ControlSource.SignalSignatures {
            "value-added": (arg0: ControlPoint) => void;
            "value-changed": (arg0: ControlPoint) => void;
            "value-removed": (arg0: ControlPoint) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.ControlSource.ConstructorProps {}
    }
    abstract class TimedValueControlSource extends Gst.ControlSource {
        static $gtype: GObject.GType<TimedValueControlSource>;
        $signals: TimedValueControlSource.SignalSignatures;
        nvalues: number;
        valid_cache: boolean;
        constructor(properties?: Partial<TimedValueControlSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TimedValueControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimedValueControlSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TimedValueControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimedValueControlSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TimedValueControlSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimedValueControlSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter | null;
        get_all(): ControlPoint[];
        get_count(): number;
        list_control_points(): Gst.TimedValue[] | null;
        set(timestamp: Gst.ClockTime, value: number): boolean;
        set(...args: never[]): any;
        set_from_list(timedvalues: Gst.TimedValue[]): boolean;
        unset(timestamp: Gst.ClockTime): boolean;
        unset_all(): void;
    }
    namespace TriggerControlSource {
        interface SignalSignatures extends TimedValueControlSource.SignalSignatures {
            "notify::tolerance": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends TimedValueControlSource.ConstructorProps {
            tolerance: bigint | number;
        }
    }
    class TriggerControlSource extends TimedValueControlSource {
        static $gtype: GObject.GType<TriggerControlSource>;
        get tolerance(): number;
        set tolerance(val: bigint | number);
        $signals: TriggerControlSource.SignalSignatures;
        constructor(properties?: Partial<TriggerControlSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): TriggerControlSource;
        connect<K extends keyof TriggerControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TriggerControlSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TriggerControlSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TriggerControlSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TriggerControlSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TriggerControlSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type ARGBControlBindingClass = typeof ARGBControlBinding;
    class ControlPoint {
        static $gtype: GObject.GType<ControlPoint>;
        timestamp: Gst.ClockTime;
        value: number;
        copy(): ControlPoint;
        free(): void;
    }
    type DirectControlBindingClass = typeof DirectControlBinding;
    type InterpolationControlSourceClass = typeof InterpolationControlSource;
    abstract class InterpolationControlSourcePrivate {
        static $gtype: GObject.GType<InterpolationControlSourcePrivate>;
    }
    type LFOControlSourceClass = typeof LFOControlSource;
    abstract class LFOControlSourcePrivate {
        static $gtype: GObject.GType<LFOControlSourcePrivate>;
    }
    type ProxyControlBindingClass = typeof ProxyControlBinding;
    type TimedValueControlSourceClass = typeof TimedValueControlSource;
    abstract class TimedValueControlSourcePrivate {
        static $gtype: GObject.GType<TimedValueControlSourcePrivate>;
    }
    type TriggerControlSourceClass = typeof TriggerControlSource;
    abstract class TriggerControlSourcePrivate {
        static $gtype: GObject.GType<TriggerControlSourcePrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstController;
}
declare module 'gi://GstController' {
    import GstController10 from 'gi://GstController?version=1.0';
    export default GstController10;
}
