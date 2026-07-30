declare module 'gi://PangoXft?version=1.0' {
import type xlib from 'gi://xlib?version=2.0';
import type xft from 'gi://xft?version=2.0';
import type PangoOT from 'gi://PangoOT?version=1.0';
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
import type PangoFT2 from 'gi://PangoFT2?version=1.0';
export namespace PangoXft {
    function get_font_map(display: xlib.Display, screen: number): Pango.FontMap;
    function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
    function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
    function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void;
    function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void;
    function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
    function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void;
    function shutdown_display(display: xlib.Display, screen: number): void;
    function substitute_changed(display: xlib.Display, screen: number): void;
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }
    namespace Font {
        interface SignalSignatures extends PangoFc.Font.SignalSignatures {
            "notify::fontmap": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PangoFc.Font.ConstructorProps {}
    }
    class Font extends PangoFc.Font {
        static $gtype: GObject.GType<Font>;
        $signals: Font.SignalSignatures;
        constructor(properties?: Partial<Font.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Font.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Font.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_glyph(wc: string): number;
        get_unknown_glyph(wc: string): Pango.Glyph;
        has_char(wc: string): boolean;
    }
    namespace FontMap {
        interface SignalSignatures extends PangoFc.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap.ConstructorProps<A>, Gio.ListModel.ConstructorProps {}
    }
    class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap<A> implements Gio.ListModel<A> {
        static $gtype: GObject.GType<FontMap>;
        $signals: FontMap.SignalSignatures;
        constructor(properties?: Partial<FontMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace Renderer {
        interface SignalSignatures extends Pango.Renderer.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Pango.Renderer.ConstructorProps {
            display: never;
            screen: number;
        }
    }
    class Renderer extends Pango.Renderer {
        static $gtype: GObject.GType<Renderer>;
        set display(val: never);
        set screen(val: number);
        $signals: Renderer.SignalSignatures;
        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: xlib.Display, screen: number): Renderer;
        connect<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void;
        vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void;
        set_default_color(default_color: Pango.Color): void;
        set_draw(draw: xft.Draw): void;
    }
    type RendererClass = typeof Renderer;
    abstract class RendererPrivate {
        static $gtype: GObject.GType<RendererPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default PangoXft;
}
declare module 'gi://PangoXft' {
    import PangoXft10 from 'gi://PangoXft?version=1.0';
    export default PangoXft10;
}
