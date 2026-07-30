declare module 'gi://xrandr?version=1.3' {
import type GObject from 'gi://GObject?version=2.0';
export namespace xrandr {
    class ScreenSize {
        static $gtype: GObject.GType<ScreenSize>;
    }
    class ScreenChangeNotifyEvent {
        static $gtype: GObject.GType<ScreenChangeNotifyEvent>;
    }
    class NotifyEvent {
        static $gtype: GObject.GType<NotifyEvent>;
    }
    class ScreenResources {
        static $gtype: GObject.GType<ScreenResources>;
    }
    class OutputChangeNotifyEvent {
        static $gtype: GObject.GType<OutputChangeNotifyEvent>;
    }
    class CrtcChangeNotifyEvent {
        static $gtype: GObject.GType<CrtcChangeNotifyEvent>;
    }
    class OutputPropertyNotifyEvent {
        static $gtype: GObject.GType<OutputPropertyNotifyEvent>;
    }
    const __name__: string;
    const __version__: string;
}
export default xrandr;
}
declare module 'gi://xrandr' {
    import Xrandr13 from 'gi://xrandr?version=1.3';
    export default Xrandr13;
}
