declare module 'gi://Notify?version=0.7' {
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Notify {
    export namespace ClosedReason {
        export const $gtype: GObject.GType<ClosedReason>;
    }
    enum ClosedReason {
        UNSET,
        EXPIRED,
        DISMISSED,
        API_REQUEST,
        UNDEFINED,
        UNDEFIEND,
    }
    export namespace Urgency {
        export const $gtype: GObject.GType<Urgency>;
    }
    enum Urgency {
        LOW,
        NORMAL,
        CRITICAL,
    }
    const EXPIRES_DEFAULT: number;
    const EXPIRES_NEVER: number;
    const NOTIFICATION_HINT_ACTION_ICONS: string;
    const NOTIFICATION_HINT_CATEGORY: string;
    const NOTIFICATION_HINT_DESKTOP_ENTRY: string;
    const NOTIFICATION_HINT_IMAGE_DATA: string;
    const NOTIFICATION_HINT_IMAGE_DATA_LEGACY: string;
    const NOTIFICATION_HINT_IMAGE_PATH: string;
    const NOTIFICATION_HINT_IMAGE_PATH_LEGACY: string;
    const NOTIFICATION_HINT_RESIDENT: string;
    const NOTIFICATION_HINT_SOUND_FILE: string;
    const NOTIFICATION_HINT_SOUND_NAME: string;
    const NOTIFICATION_HINT_SUPPRESS_SOUND: string;
    const NOTIFICATION_HINT_TRANSIENT: string;
    const NOTIFICATION_HINT_URGENCY: string;
    const NOTIFICATION_HINT_X: string;
    const NOTIFICATION_HINT_Y: string;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    function get_app_icon(): string;
    function get_app_name(): string;
    function get_server_caps(): string[];
    function get_server_info(): [boolean, string, string, string, string];
    function init(app_name: string | null): boolean;
    function is_initted(): boolean;
    function set_app_icon(app_icon: string | null): void;
    function set_app_name(app_name: string): void;
    function uninit(): void;
    interface ActionCallback {
        (notification: Notification, action: string): void;
    }
    namespace Notification {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            closed: () => void;
            "notify::app-icon": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::closed-reason": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_icon: string;
            appIcon: string;
            app_name: string;
            appName: string;
            body: string;
            closed_reason: number;
            closedReason: number;
            icon_name: string;
            iconName: string;
            id: number;
            summary: string;
        }
    }
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;
        get app_icon(): string;
        set app_icon(val: string);
        get appIcon(): string;
        set appIcon(val: string);
        get app_name(): string;
        set app_name(val: string);
        get appName(): string;
        set appName(val: string);
        get body(): string;
        set body(val: string);
        get closed_reason(): number;
        get closedReason(): number;
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): number;
        set id(val: number);
        get summary(): string;
        set summary(val: string);
        $signals: Notification.SignalSignatures;
        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](summary: string, body: string | null, icon: string | null): Notification;
        connect<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Notification.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_closed(): void;
        add_action(action: string, label: string, callback: ActionCallback): void;
        clear_actions(): void;
        clear_hints(): void;
        close(): boolean;
        get_activation_app_launch_context(): Gio.AppLaunchContext | null;
        get_activation_token(): string | null;
        get_closed_reason(): number;
        set_app_icon(app_icon: string | null): void;
        set_app_name(app_name: string | null): void;
        set_category(category: string): void;
        set_hint(key: string, value: GLib.Variant | null): void;
        set_hint_byte(key: string, value: number): void;
        set_hint_byte_array(key: string, value: Uint8Array | string): void;
        set_hint_double(key: string, value: number): void;
        set_hint_int32(key: string, value: number): void;
        set_hint_string(key: string, value: string): void;
        set_hint_uint32(key: string, value: number): void;
        set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void;
        set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        set_timeout(timeout: number): void;
        set_urgency(urgency: Urgency): void;
        show(): boolean;
        update(summary: string, body: string | null, icon: string | null): boolean;
    }
    type NotificationClass = typeof Notification;
    const __name__: string;
    const __version__: string;
}
export default Notify;
}
declare module 'gi://Notify' {
    import Notify07 from 'gi://Notify?version=0.7';
    export default Notify07;
}
