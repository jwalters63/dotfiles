declare module 'gi://cairo?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace cairo {
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }
    enum Status {
        SUCCESS,
        NO_MEMORY,
        INVALID_RESTORE,
        INVALID_POP_GROUP,
        NO_CURRENT_POINT,
        INVALID_MATRIX,
        INVALID_STATUS,
        NULL_POINTER,
        INVALID_STRING,
        INVALID_PATH_DATA,
        READ_ERROR,
        WRITE_ERROR,
        SURFACE_FINISHED,
        SURFACE_TYPE_MISMATCH,
        PATTERN_TYPE_MISMATCH,
        INVALID_CONTENT,
        INVALID_FORMAT,
        INVALID_VISUAL,
        FILE_NOT_FOUND,
        INVALID_DASH,
        INVALID_DSC_COMMENT,
        INVALID_INDEX,
        CLIP_NOT_REPRESENTABLE,
        TEMP_FILE_ERROR,
        INVALID_STRIDE,
        FONT_TYPE_MISMATCH,
        USER_FONT_IMMUTABLE,
        USER_FONT_ERROR,
        NEGATIVE_COUNT,
        INVALID_CLUSTERS,
        INVALID_SLANT,
        INVALID_WEIGHT,
        INVALID_SIZE,
        USER_FONT_NOT_IMPLEMENTED,
        DEVICE_TYPE_MISMATCH,
        DEVICE_ERROR,
        INVALID_MESH_CONSTRUCTION,
        DEVICE_FINISHED,
        JBIG2_GLOBAL_MISSING,
    }
    export namespace Content {
        export const $gtype: GObject.GType<Content>;
    }
    enum Content {
        COLOR,
        ALPHA,
        COLOR_ALPHA,
    }
    export namespace Operator {
        export const $gtype: GObject.GType<Operator>;
    }
    enum Operator {
        CLEAR,
        SOURCE,
        OVER,
        IN,
        OUT,
        ATOP,
        DEST,
        DEST_OVER,
        DEST_IN,
        DEST_OUT,
        DEST_ATOP,
        XOR,
        ADD,
        SATURATE,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HSL_HUE,
        HSL_SATURATION,
        HSL_COLOR,
        HSL_LUMINOSITY,
    }
    export namespace Antialias {
        export const $gtype: GObject.GType<Antialias>;
    }
    enum Antialias {
        DEFAULT,
        NONE,
        GRAY,
        SUBPIXEL,
        FAST,
        GOOD,
        BEST,
    }
    export namespace FillRule {
        export const $gtype: GObject.GType<FillRule>;
    }
    enum FillRule {
        WINDING,
        EVEN_ODD,
    }
    export namespace LineCap {
        export const $gtype: GObject.GType<LineCap>;
    }
    enum LineCap {
        BUTT,
        ROUND,
        SQUARE,
    }
    export namespace LineJoin {
        export const $gtype: GObject.GType<LineJoin>;
    }
    enum LineJoin {
        MITER,
        ROUND,
        BEVEL,
    }
    export namespace TextClusterFlags {
        export const $gtype: GObject.GType<TextClusterFlags>;
    }
    enum TextClusterFlags {
        BACKWARD,
    }
    export namespace FontSlant {
        export const $gtype: GObject.GType<FontSlant>;
    }
    enum FontSlant {
        NORMAL,
        ITALIC,
        OBLIQUE,
    }
    export namespace FontWeight {
        export const $gtype: GObject.GType<FontWeight>;
    }
    enum FontWeight {
        NORMAL,
        BOLD,
    }
    export namespace SubpixelOrder {
        export const $gtype: GObject.GType<SubpixelOrder>;
    }
    enum SubpixelOrder {
        DEFAULT,
        RGB,
        BGR,
        VRGB,
        VBGR,
    }
    export namespace HintStyle {
        export const $gtype: GObject.GType<HintStyle>;
    }
    enum HintStyle {
        DEFAULT,
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
    }
    export namespace HintMetrics {
        export const $gtype: GObject.GType<HintMetrics>;
    }
    enum HintMetrics {
        DEFAULT,
        OFF,
        ON,
    }
    export namespace FontType {
        export const $gtype: GObject.GType<FontType>;
    }
    enum FontType {
        TOY,
        FT,
        WIN32,
        QUARTZ,
        USER,
    }
    export namespace PathDataType {
        export const $gtype: GObject.GType<PathDataType>;
    }
    enum PathDataType {
        MOVE_TO,
        LINE_TO,
        CURVE_TO,
        CLOSE_PATH,
    }
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }
    enum DeviceType {
        DRM,
        GL,
        SCRIPT,
        XCB,
        XLIB,
        XML,
        COGL,
        WIN32,
        INVALID,
    }
    export namespace SurfaceType {
        export const $gtype: GObject.GType<SurfaceType>;
    }
    enum SurfaceType {
        IMAGE,
        PDF,
        PS,
        XLIB,
        XCB,
        GLITZ,
        QUARTZ,
        WIN32,
        BEOS,
        DIRECTFB,
        SVG,
        OS2,
        WIN32_PRINTING,
        QUARTZ_IMAGE,
        SCRIPT,
        QT,
        RECORDING,
        VG,
        GL,
        DRM,
        TEE,
        XML,
        SKIA,
        SUBSURFACE,
        COGL,
    }
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }
    enum Format {
        INVALID,
        ARGB32,
        RGB24,
        A8,
        A1,
        RGB16_565,
        RGB30,
    }
    export namespace PatternType {
        export const $gtype: GObject.GType<PatternType>;
    }
    enum PatternType {
        SOLID,
        SURFACE,
        LINEAR,
        RADIAL,
        MESH,
        RASTER_SOURCE,
    }
    export namespace Extend {
        export const $gtype: GObject.GType<Extend>;
    }
    enum Extend {
        NONE,
        REPEAT,
        REFLECT,
        PAD,
    }
    export namespace Filter {
        export const $gtype: GObject.GType<Filter>;
    }
    enum Filter {
        FAST,
        GOOD,
        BEST,
        NEAREST,
        BILINEAR,
        GAUSSIAN,
    }
    export namespace RegionOverlap {
        export const $gtype: GObject.GType<RegionOverlap>;
    }
    enum RegionOverlap {
        IN,
        OUT,
        PART,
    }
    function image_surface_create(): void;
    class Context {
        static $gtype: GObject.GType<Context>;
    }
    class Device {
        static $gtype: GObject.GType<Device>;
    }
    class Surface {
        static $gtype: GObject.GType<Surface>;
    }
    class Matrix {
        static $gtype: GObject.GType<Matrix>;
    }
    class Pattern {
        static $gtype: GObject.GType<Pattern>;
    }
    class Region {
        static $gtype: GObject.GType<Region>;
    }
    class FontOptions {
        static $gtype: GObject.GType<FontOptions>;
    }
    class FontFace {
        static $gtype: GObject.GType<FontFace>;
    }
    class ScaledFont {
        static $gtype: GObject.GType<ScaledFont>;
    }
    class Path {
        static $gtype: GObject.GType<Path>;
    }
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);
    }
    class RectangleInt {
        static $gtype: GObject.GType<RectangleInt>;
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);
    }
    class Glyph {
        static $gtype: GObject.GType<Glyph>;
        index: number;
        x: number;
        y: number;
    }
    class TextCluster {
        static $gtype: GObject.GType<TextCluster>;
        num_bytes: number;
        num_glyphs: number;
        constructor(properties?: Partial<{
            num_bytes: number;
            num_glyphs: number;
        }>);
    }
    const __name__: string;
    const __version__: string;
}
export default cairo;
}
declare module 'gi://cairo' {
    import Cairo10 from 'gi://cairo?version=1.0';
    export default Cairo10;
}
