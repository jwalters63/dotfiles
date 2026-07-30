declare module 'gi://PangoFT2?version=1.0' {
import type freetype2 from 'gi://freetype2?version=2.0';
import type PangoFc from 'gi://PangoFc?version=1.0';
import type fontconfig from 'gi://fontconfig?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace PangoFT2 {
    function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage;
    function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number;
    function get_unknown_glyph(font: Pango.Font): Pango.Glyph;
    function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
    function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
    function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;
    function render_layout_line_subpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;
    function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
    function render_transformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
    function shutdown_display(): void;
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }
    namespace FontMap {
        interface SignalSignatures extends PangoFc.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }
    class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap implements Gio.ListModel<A> {
        static $gtype: GObject.GType<FontMap>;
        $signals: FontMap.SignalSignatures;
        constructor(properties?: Partial<FontMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): FontMap;
        connect<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_default_substitute(func: SubstituteFunc): void;
        set_default_substitute(...args: never[]): any;
        set_resolution(dpi_x: number, dpi_y: number): void;
        substitute_changed(): void;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    const __name__: string;
    const __version__: string;
}
export default PangoFT2;
}
declare module 'gi://PangoFT2' {
    import PangoFT210 from 'gi://PangoFT2?version=1.0';
    export default PangoFT210;
}
