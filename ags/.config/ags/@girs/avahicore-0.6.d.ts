declare module 'gi://AvahiCore?version=0.6' {
import type GObject from 'gi://GObject?version=2.0';
export namespace AvahiCore {
    enum Protocol {
        INET,
        INET6,
        UNSPEC,
    }
    function server_get_host_name(): string;
    enum PublishFlags {
        UNIQUE,
        NO_PROBE,
        NO_ANNOUNCE,
        ALLOW_MULTIPLE,
        NO_REVERSE,
        NO_COOKIE,
        UPDATE,
        USE_WIDE_AREA,
        USE_MULTICAST,
    }
    class StringList {
        static $gtype: GObject.GType<StringList>;
    }
    class Address {
        static $gtype: GObject.GType<Address>;
    }
    class Client {
        static $gtype: GObject.GType<Client>;
    }
    type IfIndex = number;
    const __name__: string;
    const __version__: string;
}
export default AvahiCore;
}
declare module 'gi://AvahiCore' {
    import AvahiCore06 from 'gi://AvahiCore?version=0.6';
    export default AvahiCore06;
}
