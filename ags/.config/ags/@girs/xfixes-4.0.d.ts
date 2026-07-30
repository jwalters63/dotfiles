declare module 'gi://xfixes?version=4.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace xfixes {
    class XserverRegion {
        static $gtype: GObject.GType<XserverRegion>;
    }
    const __name__: string;
    const __version__: string;
}
export default xfixes;
}
declare module 'gi://xfixes' {
    import Xfixes40 from 'gi://xfixes?version=4.0';
    export default Xfixes40;
}
