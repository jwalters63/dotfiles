declare module 'gi://GstGLX11?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstGL from 'gi://GstGL?version=1.0';
export namespace GstGLX11 {
    namespace GLDisplayX11 {
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }
    class GLDisplayX11 extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayX11>;
        $signals: GLDisplayX11.SignalSignatures;
        constructor(properties?: Partial<GLDisplayX11.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): GLDisplayX11;
        static ["new"](...args: never[]): any;
        connect<K extends keyof GLDisplayX11.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayX11.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplayX11.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayX11.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplayX11.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLDisplayX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type GLDisplayX11Class = typeof GLDisplayX11;
    const __name__: string;
    const __version__: string;
}
export default GstGLX11;
}
declare module 'gi://GstGLX11' {
    import GstGLX1110 from 'gi://GstGLX11?version=1.0';
    export default GstGLX1110;
}
