declare module 'gi://freetype2?version=2.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace freetype2 {
    class Bitmap {
        static $gtype: GObject.GType<Bitmap>;
    }
    class Face {
        static $gtype: GObject.GType<Face>;
    }
    class Library {
        static $gtype: GObject.GType<Library>;
    }
    type Int32 = number;
    const __name__: string;
    const __version__: string;
}
export default freetype2;
}
declare module 'gi://freetype2' {
    import Freetype220 from 'gi://freetype2?version=2.0';
    export default Freetype220;
}
