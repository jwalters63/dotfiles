declare module 'gi://DBus?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace DBus {
    enum BusType {
        SESSION,
        SYSTEM,
        STARTER,
    }
    class Connection {
        static $gtype: GObject.GType<Connection>;
    }
    class Error {
        static $gtype: GObject.GType<Error>;
    }
    class Message {
        static $gtype: GObject.GType<Message>;
    }
    class MessageIter {
        static $gtype: GObject.GType<MessageIter>;
    }
    class PendingCall {
        static $gtype: GObject.GType<PendingCall>;
    }
    const __name__: string;
    const __version__: string;
}
export default DBus;
}
declare module 'gi://DBus' {
    import DBus10 from 'gi://DBus?version=1.0';
    export default DBus10;
}
