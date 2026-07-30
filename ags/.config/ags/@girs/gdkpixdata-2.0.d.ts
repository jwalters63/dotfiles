declare module 'gi://GdkPixdata?version=2.0' {
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GdkPixdata {
    const PIXBUF_MAGIC_NUMBER: number;
    const PIXDATA_HEADER_LENGTH: number;
    function pixbuf_from_pixdata(pixdata: Pixdata, copy_pixels: boolean): GdkPixbuf.Pixbuf;
    enum PixdataDumpType {
        PIXDATA_STREAM,
        PIXDATA_STRUCT,
        MACROS,
        GTYPES,
        CTYPES,
        STATIC,
        CONST,
        RLE_DECODER,
    }
    enum PixdataType {
        COLOR_TYPE_RGB,
        COLOR_TYPE_RGBA,
        COLOR_TYPE_MASK,
        SAMPLE_WIDTH_8,
        SAMPLE_WIDTH_MASK,
        ENCODING_RAW,
        ENCODING_RLE,
        ENCODING_MASK,
    }
    class Pixdata {
        static $gtype: GObject.GType<Pixdata>;
        magic: number;
        length: number;
        pixdata_type: number;
        rowstride: number;
        width: number;
        height: number;
        pixel_data: Uint8Array;
        constructor(properties?: Partial<{
            magic: number;
            length: number;
            pixdata_type: number;
            rowstride: number;
            width: number;
            height: number;
            pixel_data: Uint8Array;
        }>);
        deserialize(stream: Uint8Array | string): boolean;
        serialize(): Uint8Array;
        to_csource(name: string, dump_type: PixdataDumpType): GLib.String;
    }
    const __name__: string;
    const __version__: string;
}
export default GdkPixdata;
}
declare module 'gi://GdkPixdata' {
    import GdkPixdata20 from 'gi://GdkPixdata?version=2.0';
    export default GdkPixdata20;
}
