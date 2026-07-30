declare module 'gi://libxml2?version=2.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace libxml2 {
    function dummy(): void;
    class Node {
        static $gtype: GObject.GType<Node>;
    }
    class NodePtr {
        static $gtype: GObject.GType<NodePtr>;
    }
    class Doc {
        static $gtype: GObject.GType<Doc>;
    }
    class DocPtr {
        static $gtype: GObject.GType<DocPtr>;
    }
    class NsPtr {
        static $gtype: GObject.GType<NsPtr>;
    }
    class Char {
        static $gtype: GObject.GType<Char>;
    }
    class TextWriter {
        static $gtype: GObject.GType<TextWriter>;
    }
    class TextReader {
        static $gtype: GObject.GType<TextReader>;
    }
    const __name__: string;
    const __version__: string;
}
export default libxml2;
}
declare module 'gi://libxml2' {
    import Libxml220 from 'gi://libxml2?version=2.0';
    export default Libxml220;
}
