declare module 'gi://PangoFc?version=1.0' {
import type fontconfig from 'gi://fontconfig?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace PangoFc {
    const FONT_FEATURES: string;
    const FONT_VARIATIONS: string;
    const GRAVITY: string;
    const PRGNAME: string;
    const VERSION: string;
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }
    namespace Decoder {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class Decoder extends GObject.Object {
        static $gtype: GObject.GType<Decoder>;
        $signals: Decoder.SignalSignatures;
        constructor(properties?: Partial<Decoder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_charset(fcfont: Font): fontconfig.CharSet;
        vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph;
        get_charset(fcfont: Font): fontconfig.CharSet;
        get_glyph(fcfont: Font, wc: number): Pango.Glyph;
    }
    namespace Font {
        interface SignalSignatures extends Pango.Font.SignalSignatures {
            "notify::fontmap": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Pango.Font.ConstructorProps {
            fontmap: FontMap;
            pattern: never;
        }
    }
    abstract class Font extends Pango.Font {
        static $gtype: GObject.GType<Font>;
        get fontmap(): FontMap;
        set fontmap(val: FontMap);
        get pattern(): null;
        $signals: Font.SignalSignatures;
        priv: null;
        matrix: Pango.Matrix;
        metrics_by_lang: null[];
        is_hinted: number;
        is_transformed: number;
        constructor(properties?: Partial<Font.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Font.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Font.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;
        get_glyph(wc: string): number;
        get_languages(): Pango.Language[] | null;
        get_unknown_glyph(wc: string): Pango.Glyph;
        has_char(wc: string): boolean;
        kern_glyphs(glyphs: Pango.GlyphString): void;
        unlock_face(): void;
    }
    namespace FontMap {
        interface SignalSignatures extends Pango.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends Pango.FontMap.ConstructorProps<A>, Gio.ListModel.ConstructorProps {}
    }
    abstract class FontMap<A extends GObject.Object = GObject.Object> extends Pango.FontMap<A> implements Gio.ListModel<A> {
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
        cache_clear(): void;
        config_changed(): void;
        create_context(): Pango.Context;
        find_decoder(pattern: fontconfig.Pattern): Decoder | null;
        set_default_substitute(func: SubstituteFunc): void;
        shutdown(): void;
        substitute_changed(): void;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    type DecoderClass = typeof Decoder;
    type FontClass = typeof Font;
    type FontMapClass = typeof FontMap;
    abstract class FontMapPrivate {
        static $gtype: GObject.GType<FontMapPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default PangoFc;
}
declare module 'gi://PangoFc' {
    import PangoFc10 from 'gi://PangoFc?version=1.0';
    export default PangoFc10;
}
