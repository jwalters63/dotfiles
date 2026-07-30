declare module 'gi://xft?version=2.0' {
import type xlib from 'gi://xlib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
export namespace xft {
    function init(): void;
    class Color {
        static $gtype: GObject.GType<Color>;
    }
    class Draw {
        static $gtype: GObject.GType<Draw>;
    }
    class Font {
        static $gtype: GObject.GType<Font>;
    }
    class GlyphSpec {
        static $gtype: GObject.GType<GlyphSpec>;
    }
    const __name__: string;
    const __version__: string;
}
export default xft;
}
declare module 'gi://xft' {
    import Xft20 from 'gi://xft?version=2.0';
    export default Xft20;
}
