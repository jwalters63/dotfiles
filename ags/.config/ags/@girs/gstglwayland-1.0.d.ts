declare module 'gi://GstGLWayland?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstGL from 'gi://GstGL?version=1.0';
export namespace GstGLWayland {
    namespace GLDisplayWayland {
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }
    class GLDisplayWayland extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayWayland>;
        $signals: GLDisplayWayland.SignalSignatures;
        display: null;
        registry: null;
        compositor: null;
        subcompositor: null;
        shell: null;
        constructor(properties?: Partial<GLDisplayWayland.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): GLDisplayWayland;
        static ["new"](...args: never[]): any;
        static new_with_display(display: null): GLDisplayWayland;
        connect<K extends keyof GLDisplayWayland.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayWayland.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplayWayland.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayWayland.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplayWayland.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLDisplayWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type GLDisplayWaylandClass = typeof GLDisplayWayland;
    const __name__: string;
    const __version__: string;
}
export default GstGLWayland;
}
declare module 'gi://GstGLWayland' {
    import GstGLWayland10 from 'gi://GstGLWayland?version=1.0';
    export default GstGLWayland10;
}
