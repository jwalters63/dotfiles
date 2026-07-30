declare module 'gi://GDesktopEnums?version=3.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace GDesktopEnums {
    enum AccentColor {
        BLUE,
        TEAL,
        GREEN,
        YELLOW,
        ORANGE,
        RED,
        PINK,
        PURPLE,
        SLATE,
    }
    enum BackgroundShading {
        SOLID,
        VERTICAL,
        HORIZONTAL,
    }
    enum BackgroundStyle {
        NONE,
        WALLPAPER,
        CENTERED,
        SCALED,
        STRETCHED,
        ZOOM,
        SPANNED,
    }
    enum ClockFormat {
        "24H",
        "12H",
    }
    enum ColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }
    enum DeviceSendEvents {
        ENABLED,
        DISABLED,
        DISABLED_ON_EXTERNAL_MOUSE,
    }
    enum FocusMode {
        CLICK,
        SLOPPY,
        MOUSE,
    }
    enum FocusNewWindows {
        SMART,
        STRICT,
    }
    enum FontAntialiasingMode {
        NONE,
        GRAYSCALE,
        RGBA,
    }
    enum FontHinting {
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
    }
    enum FontRendering {
        AUTOMATIC,
        MANUAL,
    }
    enum FontRgbaOrder {
        RGBA,
        RGB,
        BGR,
        VRGB,
        VBGR,
    }
    enum LocationAccuracyLevel {
        COUNTRY,
        CITY,
        NEIGHBORHOOD,
        STREET,
        EXACT,
    }
    enum MagnifierCaretTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierFocusTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN,
        TOP_HALF,
        BOTTOM_HALF,
        LEFT_HALF,
        RIGHT_HALF,
    }
    enum MouseDwellDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    enum MouseDwellMode {
        WINDOW,
        GESTURE,
    }
    enum PadButtonAction {
        NONE,
        HELP,
        SWITCH_MONITOR,
        KEYBINDING,
    }
    enum PointerAccelProfile {
        DEFAULT,
        FLAT,
        ADAPTIVE,
    }
    enum PointingStickScrollMethod {
        DEFAULT,
        NONE,
        ON_BUTTON_DOWN,
    }
    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
    }
    enum ReducedMotion {
        NO_PREFERENCE,
        REDUCE,
    }
    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM,
        SINGLE,
    }
    enum StylusButtonAction {
        DEFAULT,
        MIDDLE,
        RIGHT,
        BACK,
        FORWARD,
        SWITCH_MONITOR,
        KEYBINDING,
    }
    enum StylusEraserButtonMode {
        DEFAULT,
        BUTTON,
    }
    enum TabletMapping {
        ABSOLUTE,
        RELATIVE,
    }
    enum TitlebarAction {
        TOGGLE_SHADE,
        TOGGLE_MAXIMIZE,
        TOGGLE_MAXIMIZE_HORIZONTALLY,
        TOGGLE_MAXIMIZE_VERTICALLY,
        MINIMIZE,
        NONE,
        LOWER,
        MENU,
    }
    enum ToolbarIconSize {
        SMALL,
        LARGE,
    }
    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ,
        ICONS,
        TEXT,
    }
    enum TouchpadClickMethod {
        DEFAULT,
        NONE,
        AREAS,
        FINGERS,
    }
    enum TouchpadHandedness {
        RIGHT,
        LEFT,
        MOUSE,
    }
    enum TouchpadTapButtonMap {
        DEFAULT,
        LRM,
        LMR,
    }
    enum UsbProtection {
        LOCKSCREEN,
        ALWAYS,
    }
    enum VisualBellType {
        FULLSCREEN_FLASH,
        FRAME_FLASH,
    }
    enum Weekday {
        DEFAULT,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }
    const __name__: string;
    const __version__: string;
}
export default GDesktopEnums;
}
declare module 'gi://GDesktopEnums' {
    import GDesktopEnums30 from 'gi://GDesktopEnums?version=3.0';
    export default GDesktopEnums30;
}
