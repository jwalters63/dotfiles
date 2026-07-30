declare module 'gi://fontconfig?version=2.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace fontconfig {
    function init(): void;
    class Pattern {
        static $gtype: GObject.GType<Pattern>;
    }
    class CharSet {
        static $gtype: GObject.GType<CharSet>;
    }
    class Config {
        static $gtype: GObject.GType<Config>;
    }
    const __name__: string;
    const __version__: string;
}
export default fontconfig;
}
declare module 'gi://fontconfig' {
    import Fontconfig20 from 'gi://fontconfig?version=2.0';
    export default Fontconfig20;
}
