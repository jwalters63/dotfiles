declare module 'gi://Rsvg?version=2.0' {
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
export namespace Rsvg {
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    enum Unit {
        PERCENT,
        PX,
        EM,
        EX,
        IN,
        CM,
        MM,
        PT,
        PC,
        CH,
    }
    const HAVE_CSS: boolean;
    const HAVE_PIXBUF: number;
    const HAVE_SVGZ: boolean;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const VERSION: string;
    function cleanup(): void;
    function error_quark(): GLib.Quark;
    function init(): void;
    function pixbuf_from_file(filename: string): GdkPixbuf.Pixbuf | null;
    function pixbuf_from_file_at_max_size(filename: string, max_width: number, max_height: number): GdkPixbuf.Pixbuf | null;
    function pixbuf_from_file_at_size(filename: string, width: number, height: number): GdkPixbuf.Pixbuf | null;
    function pixbuf_from_file_at_zoom(filename: string, x_zoom: number, y_zoom: number): GdkPixbuf.Pixbuf | null;
    function pixbuf_from_file_at_zoom_with_max(filename: string, x_zoom: number, y_zoom: number, max_width: number, max_height: number): GdkPixbuf.Pixbuf | null;
    function set_default_dpi(dpi: number): void;
    function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void;
    function term(): void;
    interface SizeFunc {
        (): void;
    }
    export namespace HandleFlags {
        export const $gtype: GObject.GType<HandleFlags>;
    }
    enum HandleFlags {
        FLAGS_NONE,
        FLAG_UNLIMITED,
        FLAG_KEEP_IMAGE_DATA,
    }
    namespace Handle {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::dpi-x": (pspec: GObject.ParamSpec) => void;
            "notify::dpi-y": (pspec: GObject.ParamSpec) => void;
            "notify::em": (pspec: GObject.ParamSpec) => void;
            "notify::ex": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_uri: string;
            baseUri: string;
            desc: string | null;
            dpi_x: number;
            dpiX: number;
            dpi_y: number;
            dpiY: number;
            em: number;
            ex: number;
            flags: HandleFlags;
            height: number;
            metadata: string | null;
            title: string | null;
            width: number;
        }
    }
    class Handle extends GObject.Object {
        static $gtype: GObject.GType<Handle>;
        get base_uri(): string;
        set base_uri(val: string);
        get baseUri(): string;
        set baseUri(val: string);
        get desc(): string | null;
        get dpi_x(): number;
        set dpi_x(val: number);
        get dpiX(): number;
        set dpiX(val: number);
        get dpi_y(): number;
        set dpi_y(val: number);
        get dpiY(): number;
        set dpiY(val: number);
        get em(): number;
        get ex(): number;
        get flags(): HandleFlags;
        get height(): number;
        get metadata(): string | null;
        get title(): string | null;
        get width(): number;
        $signals: Handle.SignalSignatures;
        constructor(properties?: Partial<Handle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Handle;
        static new_from_data(data: Uint8Array | string): Handle;
        static new_from_file(filename: string): Handle;
        static new_from_gfile_sync(file: Gio.File, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle;
        static new_from_stream_sync(input_stream: Gio.InputStream, base_file: Gio.File | null, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle;
        static new_with_flags(flags: HandleFlags): Handle;
        connect<K extends keyof Handle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Handle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Handle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Handle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Handle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Handle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        close(): boolean;
        free(): void;
        get_base_uri(): string;
        get_desc(): string | null;
        get_dimensions(): DimensionData;
        get_dimensions_sub(id: string | null): [boolean, DimensionData];
        get_geometry_for_element(id: string | null): [boolean, Rectangle | null, Rectangle | null];
        get_geometry_for_layer(id: string | null, viewport: Rectangle): [boolean, Rectangle | null, Rectangle | null];
        get_intrinsic_dimensions(): [boolean, Length | null, boolean, Length | null, boolean, Rectangle | null];
        get_intrinsic_size_in_pixels(): [boolean, number, number];
        get_metadata(): string | null;
        get_pixbuf(): GdkPixbuf.Pixbuf | null;
        get_pixbuf_and_error(): GdkPixbuf.Pixbuf | null;
        get_pixbuf_sub(id: string | null): GdkPixbuf.Pixbuf | null;
        get_position_sub(id: string | null): [boolean, PositionData];
        get_title(): string | null;
        has_sub(id: string): boolean;
        internal_set_testing(testing: boolean): void;
        read_stream_sync(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
        render_cairo(cr: cairo.Context): boolean;
        render_cairo_sub(cr: cairo.Context, id: string | null): boolean;
        render_document(cr: cairo.Context, viewport: Rectangle): boolean;
        render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean;
        render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean;
        set_base_gfile(base_file: Gio.File): void;
        set_base_uri(base_uri: string): void;
        set_cancellable_for_rendering(cancellable: Gio.Cancellable | null): void;
        set_dpi(dpi: number): void;
        set_dpi_x_y(dpi_x: number, dpi_y: number): void;
        set_size_callback(size_func: SizeFunc | null): void;
        set_stylesheet(css: Uint8Array | string): boolean;
        write(buf: Uint8Array | string): boolean;
    }
    class DimensionData {
        static $gtype: GObject.GType<DimensionData>;
        width: number;
        height: number;
        em: number;
        ex: number;
        constructor(properties?: Partial<{
            width: number;
            height: number;
            em: number;
            ex: number;
        }>);
    }
    type HandleClass = typeof Handle;
    class Length {
        static $gtype: GObject.GType<Length>;
        length: number;
        unit: Unit;
    }
    class PositionData {
        static $gtype: GObject.GType<PositionData>;
        x: number;
        y: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
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
    const __name__: string;
    const __version__: string;
}
export default Rsvg;
}
declare module 'gi://Rsvg' {
    import Rsvg20 from 'gi://Rsvg?version=2.0';
    export default Rsvg20;
}
