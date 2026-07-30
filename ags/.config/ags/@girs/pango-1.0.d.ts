declare module 'gi://Pango?version=1.0' {
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Pango {
    export namespace Alignment {
        export const $gtype: GObject.GType<Alignment>;
    }
    enum Alignment {
        LEFT,
        CENTER,
        RIGHT,
    }
    export namespace AttrType {
        export const $gtype: GObject.GType<AttrType>;
    }
    enum AttrType {
        INVALID,
        LANGUAGE,
        FAMILY,
        STYLE,
        WEIGHT,
        VARIANT,
        STRETCH,
        SIZE,
        FONT_DESC,
        FOREGROUND,
        BACKGROUND,
        UNDERLINE,
        STRIKETHROUGH,
        RISE,
        SHAPE,
        SCALE,
        FALLBACK,
        LETTER_SPACING,
        UNDERLINE_COLOR,
        STRIKETHROUGH_COLOR,
        ABSOLUTE_SIZE,
        GRAVITY,
        GRAVITY_HINT,
        FONT_FEATURES,
        FOREGROUND_ALPHA,
        BACKGROUND_ALPHA,
        ALLOW_BREAKS,
        SHOW,
        INSERT_HYPHENS,
        OVERLINE,
        OVERLINE_COLOR,
        LINE_HEIGHT,
        ABSOLUTE_LINE_HEIGHT,
        TEXT_TRANSFORM,
        WORD,
        SENTENCE,
        BASELINE_SHIFT,
        FONT_SCALE,
        WIDTH,
    }
    export namespace BaselineShift {
        export const $gtype: GObject.GType<BaselineShift>;
    }
    enum BaselineShift {
        NONE,
        SUPERSCRIPT,
        SUBSCRIPT,
    }
    export namespace BidiType {
        export const $gtype: GObject.GType<BidiType>;
    }
    enum BidiType {
        L,
        LRE,
        LRO,
        R,
        AL,
        RLE,
        RLO,
        PDF,
        EN,
        ES,
        ET,
        AN,
        CS,
        NSM,
        BN,
        B,
        S,
        WS,
        ON,
        LRI,
        RLI,
        FSI,
        PDI,
    }
    export namespace CoverageLevel {
        export const $gtype: GObject.GType<CoverageLevel>;
    }
    enum CoverageLevel {
        NONE,
        FALLBACK,
        APPROXIMATE,
        EXACT,
    }
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }
    enum Direction {
        LTR,
        RTL,
        TTB_LTR,
        TTB_RTL,
        WEAK_LTR,
        WEAK_RTL,
        NEUTRAL,
    }
    export namespace EllipsizeMode {
        export const $gtype: GObject.GType<EllipsizeMode>;
    }
    enum EllipsizeMode {
        NONE,
        START,
        MIDDLE,
        END,
    }
    export namespace FontColor {
        export const $gtype: GObject.GType<FontColor>;
    }
    enum FontColor {
        FORBIDDEN,
        REQUIRED,
        DONT_CARE,
    }
    export namespace FontScale {
        export const $gtype: GObject.GType<FontScale>;
    }
    enum FontScale {
        NONE,
        SUPERSCRIPT,
        SUBSCRIPT,
        SMALL_CAPS,
    }
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }
    enum Gravity {
        SOUTH,
        EAST,
        NORTH,
        WEST,
        AUTO,
    }
    export namespace GravityHint {
        export const $gtype: GObject.GType<GravityHint>;
    }
    enum GravityHint {
        NATURAL,
        STRONG,
        LINE,
    }
    class LayoutDeserializeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID: number;
        static INVALID_VALUE: number;
        static MISSING_VALUE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace Overline {
        export const $gtype: GObject.GType<Overline>;
    }
    enum Overline {
        NONE,
        SINGLE,
    }
    export namespace RenderPart {
        export const $gtype: GObject.GType<RenderPart>;
    }
    enum RenderPart {
        FOREGROUND,
        BACKGROUND,
        UNDERLINE,
        STRIKETHROUGH,
        OVERLINE,
    }
    export namespace Script {
        export const $gtype: GObject.GType<Script>;
    }
    enum Script {
        INVALID_CODE,
        COMMON,
        INHERITED,
        ARABIC,
        ARMENIAN,
        BENGALI,
        BOPOMOFO,
        CHEROKEE,
        COPTIC,
        CYRILLIC,
        DESERET,
        DEVANAGARI,
        ETHIOPIC,
        GEORGIAN,
        GOTHIC,
        GREEK,
        GUJARATI,
        GURMUKHI,
        HAN,
        HANGUL,
        HEBREW,
        HIRAGANA,
        KANNADA,
        KATAKANA,
        KHMER,
        LAO,
        LATIN,
        MALAYALAM,
        MONGOLIAN,
        MYANMAR,
        OGHAM,
        OLD_ITALIC,
        ORIYA,
        RUNIC,
        SINHALA,
        SYRIAC,
        TAMIL,
        TELUGU,
        THAANA,
        THAI,
        TIBETAN,
        CANADIAN_ABORIGINAL,
        YI,
        TAGALOG,
        HANUNOO,
        BUHID,
        TAGBANWA,
        BRAILLE,
        CYPRIOT,
        LIMBU,
        OSMANYA,
        SHAVIAN,
        LINEAR_B,
        TAI_LE,
        UGARITIC,
        NEW_TAI_LUE,
        BUGINESE,
        GLAGOLITIC,
        TIFINAGH,
        SYLOTI_NAGRI,
        OLD_PERSIAN,
        KHAROSHTHI,
        UNKNOWN,
        BALINESE,
        CUNEIFORM,
        PHOENICIAN,
        PHAGS_PA,
        NKO,
        KAYAH_LI,
        LEPCHA,
        REJANG,
        SUNDANESE,
        SAURASHTRA,
        CHAM,
        OL_CHIKI,
        VAI,
        CARIAN,
        LYCIAN,
        LYDIAN,
        BATAK,
        BRAHMI,
        MANDAIC,
        CHAKMA,
        MEROITIC_CURSIVE,
        MEROITIC_HIEROGLYPHS,
        MIAO,
        SHARADA,
        SORA_SOMPENG,
        TAKRI,
        BASSA_VAH,
        CAUCASIAN_ALBANIAN,
        DUPLOYAN,
        ELBASAN,
        GRANTHA,
        KHOJKI,
        KHUDAWADI,
        LINEAR_A,
        MAHAJANI,
        MANICHAEAN,
        MENDE_KIKAKUI,
        MODI,
        MRO,
        NABATAEAN,
        OLD_NORTH_ARABIAN,
        OLD_PERMIC,
        PAHAWH_HMONG,
        PALMYRENE,
        PAU_CIN_HAU,
        PSALTER_PAHLAVI,
        SIDDHAM,
        TIRHUTA,
        WARANG_CITI,
        AHOM,
        ANATOLIAN_HIEROGLYPHS,
        HATRAN,
        MULTANI,
        OLD_HUNGARIAN,
        SIGNWRITING,
    }
    export namespace Stretch {
        export const $gtype: GObject.GType<Stretch>;
    }
    enum Stretch {
        ULTRA_CONDENSED,
        EXTRA_CONDENSED,
        CONDENSED,
        SEMI_CONDENSED,
        NORMAL,
        SEMI_EXPANDED,
        EXPANDED,
        EXTRA_EXPANDED,
        ULTRA_EXPANDED,
    }
    export namespace Style {
        export const $gtype: GObject.GType<Style>;
    }
    enum Style {
        NORMAL,
        OBLIQUE,
        ITALIC,
    }
    export namespace TabAlign {
        export const $gtype: GObject.GType<TabAlign>;
    }
    enum TabAlign {
        LEFT,
        RIGHT,
        CENTER,
        DECIMAL,
    }
    export namespace TextTransform {
        export const $gtype: GObject.GType<TextTransform>;
    }
    enum TextTransform {
        NONE,
        LOWERCASE,
        UPPERCASE,
        CAPITALIZE,
    }
    export namespace Underline {
        export const $gtype: GObject.GType<Underline>;
    }
    enum Underline {
        NONE,
        SINGLE,
        DOUBLE,
        LOW,
        ERROR,
        SINGLE_LINE,
        DOUBLE_LINE,
        ERROR_LINE,
    }
    export namespace Variant {
        export const $gtype: GObject.GType<Variant>;
    }
    enum Variant {
        NORMAL,
        SMALL_CAPS,
        ALL_SMALL_CAPS,
        PETITE_CAPS,
        ALL_PETITE_CAPS,
        UNICASE,
        TITLE_CAPS,
    }
    export namespace Weight {
        export const $gtype: GObject.GType<Weight>;
    }
    enum Weight {
        THIN,
        ULTRALIGHT,
        LIGHT,
        SEMILIGHT,
        BOOK,
        NORMAL,
        MEDIUM,
        SEMIBOLD,
        BOLD,
        ULTRABOLD,
        HEAVY,
        ULTRAHEAVY,
    }
    export namespace Width {
        export const $gtype: GObject.GType<Width>;
    }
    enum Width {
        ULTRA_CONDENSED,
        EXTRA_CONDENSED,
        CONDENSED,
        SEMI_CONDENSED,
        NORMAL,
        SEMI_EXPANDED,
        EXPANDED,
        EXTRA_EXPANDED,
        ULTRA_EXPANDED,
    }
    export namespace WrapMode {
        export const $gtype: GObject.GType<WrapMode>;
    }
    enum WrapMode {
        WORD,
        CHAR,
        WORD_CHAR,
        NONE,
    }
    const ANALYSIS_FLAG_CENTERED_BASELINE: number;
    const ANALYSIS_FLAG_IS_ELLIPSIS: number;
    const ANALYSIS_FLAG_NEED_HYPHEN: number;
    const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
    const ATTR_INDEX_TO_TEXT_END: number;
    const GLYPH_EMPTY: Glyph;
    const GLYPH_INVALID_INPUT: Glyph;
    const GLYPH_UNKNOWN_FLAG: Glyph;
    const RENDER_COMPONENT_ALL: number;
    const SCALE: number;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    const VERSION_STRING: string;
    function attr_allow_breaks_new(allow_breaks: boolean): Attribute;
    function attr_background_alpha_new(alpha: number): Attribute;
    function attr_background_new(red: number, green: number, blue: number): Attribute;
    function attr_baseline_shift_new(shift: number): Attribute;
    function attr_break(text: string, length: number, attr_list: AttrList, offset: number): LogAttr[];
    function attr_fallback_new(enable_fallback: boolean): Attribute;
    function attr_family_new(family: string): Attribute;
    function attr_font_desc_new(desc: FontDescription): Attribute;
    function attr_font_features_new(features: string): Attribute;
    function attr_font_scale_new(scale: FontScale): Attribute;
    function attr_foreground_alpha_new(alpha: number): Attribute;
    function attr_foreground_new(red: number, green: number, blue: number): Attribute;
    function attr_gravity_hint_new(hint: GravityHint): Attribute;
    function attr_gravity_new(gravity: Gravity): Attribute;
    function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute;
    function attr_language_new(language: Language): Attribute;
    function attr_letter_spacing_new(letter_spacing: number): Attribute;
    function attr_line_height_new(factor: number): Attribute;
    function attr_line_height_new_absolute(height: number): Attribute;
    function attr_list_from_string(text: string): AttrList | null;
    function attr_overline_color_new(red: number, green: number, blue: number): Attribute;
    function attr_overline_new(overline: Overline): Attribute;
    function attr_rise_new(rise: number): Attribute;
    function attr_scale_new(scale_factor: number): Attribute;
    function attr_sentence_new(): Attribute;
    function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
    function attr_shape_new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: null, copy_func: AttrDataCopyFunc | null): Attribute;
    function attr_show_new(flags: ShowFlags): Attribute;
    function attr_size_new(size: number): Attribute;
    function attr_size_new_absolute(size: number): Attribute;
    function attr_stretch_new(stretch: Stretch): Attribute;
    function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute;
    function attr_strikethrough_new(strikethrough: boolean): Attribute;
    function attr_style_new(style: Style): Attribute;
    function attr_text_transform_new(transform: TextTransform): Attribute;
    function attr_type_get_name(type: AttrType): string | null;
    function attr_type_register(name: string): AttrType;
    function attr_underline_color_new(red: number, green: number, blue: number): Attribute;
    function attr_underline_new(underline: Underline): Attribute;
    function attr_variant_new(variant: Variant): Attribute;
    function attr_weight_new(weight: Weight): Attribute;
    function attr_width_new(width: Width): Attribute;
    function attr_word_new(): Attribute;
    function bidi_type_for_unichar(ch: string): BidiType;
    function __break(text: string, length: number, analysis: Analysis): LogAttr[];
    function default_break(text: string, length: number, analysis: Analysis | null): LogAttr[];
    function extents_to_pixels(inclusive?: Rectangle, nearest?: Rectangle): [Rectangle, Rectangle];
    function find_base_dir(text: string, length: number): Direction;
    function find_paragraph_boundary(text: string, length: number): [number, number];
    function font_description_from_string(str: string): FontDescription;
    function get_log_attrs(text: string, length: number, level: number, language: Language): LogAttr[];
    function get_mirror_char(ch: string): [boolean, string];
    function gravity_get_for_matrix(matrix: Matrix | null): Gravity;
    function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity;
    function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity;
    function gravity_to_rotation(gravity: Gravity): number;
    function is_zero_width(ch: string): boolean;
    function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): Item[];
    function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): Item[];
    function language_from_string(language: string | null): Language | null;
    function language_get_default(): Language;
    function language_get_preferred(): Language[] | null;
    function layout_deserialize_error_quark(): GLib.Quark;
    function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): [Uint8Array, Direction];
    function markup_parser_finish(context: GLib.MarkupParseContext): [boolean, AttrList | null, string, string];
    function markup_parser_new(accel_marker: string): GLib.MarkupParseContext;
    function parse_enum(type: GObject.GType, str: string | null, warn: boolean): [boolean, number, string];
    function parse_markup(markup_text: string, length: number, accel_marker: string): [boolean, AttrList | null, string, string];
    function parse_stretch(str: string, warn: boolean): [boolean, Stretch];
    function parse_style(str: string, warn: boolean): [boolean, Style];
    function parse_variant(str: string, warn: boolean): [boolean, Variant];
    function parse_weight(str: string, warn: boolean): [boolean, Weight];
    function quantize_line_geometry(thickness: number, position: number): [number, number];
    function read_line(stream: null, str: GLib.String): number;
    function reorder_items(items: Item[]): Item[];
    function scan_int(pos: string): [boolean, string, number];
    function scan_string(pos: string, out: GLib.String): [boolean, string];
    function scan_word(pos: string, out: GLib.String): [boolean, string];
    function script_for_unichar(ch: string): Script;
    function script_get_sample_language(script: Script): Language | null;
    function shape(text: string, length: number, analysis: Analysis): GlyphString;
    function shape_full(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis): GlyphString;
    function shape_item(item: Item, paragraph_text: string | null, paragraph_length: number, log_attrs: LogAttr | null, flags: ShapeFlags): GlyphString;
    function shape_with_flags(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, flags: ShapeFlags): GlyphString;
    function skip_space(pos: string): [boolean, string];
    function split_file_list(str: string): string[];
    function tab_array_from_string(text: string): TabArray | null;
    function tailor_break(text: string, length: number, analysis: Analysis, offset: number): LogAttr[];
    function trim_string(str: string): string;
    function unichar_direction(ch: string): Direction;
    function units_from_double(d: number): number;
    function units_to_double(i: number): number;
    function version(): number;
    function version_check(required_major: number, required_minor: number, required_micro: number): string | null;
    function version_string(): string;
    interface AttrDataCopyFunc {
        (user_data: null): null;
    }
    interface AttrFilterFunc {
        (attribute: Attribute): boolean;
    }
    interface FontsetForeachFunc {
        (fontset: Fontset, font: Font): boolean;
    }
    export namespace FontMask {
        export const $gtype: GObject.GType<FontMask>;
    }
    enum FontMask {
        FAMILY,
        STYLE,
        VARIANT,
        WEIGHT,
        WIDTH,
        STRETCH,
        SIZE,
        GRAVITY,
        VARIATIONS,
        FEATURES,
        COLOR,
    }
    export namespace LayoutDeserializeFlags {
        export const $gtype: GObject.GType<LayoutDeserializeFlags>;
    }
    enum LayoutDeserializeFlags {
        DEFAULT,
        CONTEXT,
    }
    export namespace LayoutSerializeFlags {
        export const $gtype: GObject.GType<LayoutSerializeFlags>;
    }
    enum LayoutSerializeFlags {
        DEFAULT,
        CONTEXT,
        OUTPUT,
    }
    export namespace RenderComponent {
        export const $gtype: GObject.GType<RenderComponent>;
    }
    enum RenderComponent {
        NONE,
        PLAIN_GLYPH,
        COLOR_GLYPH,
        BACKGROUND,
        UNDERLINE,
        STRIKETHROUGH,
        OVERLINE,
    }
    export namespace ShapeFlags {
        export const $gtype: GObject.GType<ShapeFlags>;
    }
    enum ShapeFlags {
        NONE,
        ROUND_POSITIONS,
    }
    export namespace ShowFlags {
        export const $gtype: GObject.GType<ShowFlags>;
    }
    enum ShowFlags {
        NONE,
        SPACES,
        LINE_BREAKS,
        IGNORABLES,
    }
    namespace Context {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;
        $signals: Context.SignalSignatures;
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Context;
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        changed(): void;
        get_base_dir(): Direction;
        get_base_gravity(): Gravity;
        get_font_description(): FontDescription | null;
        get_font_map(): FontMap | null;
        get_gravity(): Gravity;
        get_gravity_hint(): GravityHint;
        get_language(): Language;
        get_matrix(): Matrix | null;
        get_metrics(desc: FontDescription | null, language: Language | null): FontMetrics;
        get_round_glyph_positions(): boolean;
        get_serial(): number;
        list_families(): FontFamily[];
        load_font(desc: FontDescription): Font | null;
        load_fontset(desc: FontDescription, language: Language): Fontset | null;
        set_base_dir(direction: Direction): void;
        set_base_gravity(gravity: Gravity): void;
        set_font_description(desc: FontDescription): void;
        set_font_map(font_map: FontMap | null): void;
        set_gravity_hint(hint: GravityHint): void;
        set_language(language: Language | null): void;
        set_matrix(matrix: Matrix | null): void;
        set_round_glyph_positions(round_positions: boolean): void;
    }
    namespace Coverage {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Coverage extends GObject.Object {
        static $gtype: GObject.GType<Coverage>;
        $signals: Coverage.SignalSignatures;
        constructor(properties?: Partial<Coverage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Coverage;
        connect<K extends keyof Coverage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Coverage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Coverage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Coverage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Coverage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Coverage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_bytes(bytes: Uint8Array | string): Coverage | null;
        copy(): Coverage;
        get(index_: number): CoverageLevel;
        max(other: Coverage): void;
        ref(): Coverage;
        set(index_: number, level: CoverageLevel): void;
        set(...args: never[]): any;
        to_bytes(): Uint8Array;
        unref(): void;
    }
    namespace Font {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class Font extends GObject.Object {
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
        static descriptions_free(descs: FontDescription[] | null): void;
        static deserialize(context: Context, bytes: GLib.Bytes | Uint8Array): Font | null;
        vfunc_create_hb_font(): HarfBuzz.font_t;
        vfunc_describe(): FontDescription;
        vfunc_describe_absolute(): FontDescription;
        vfunc_get_coverage(language: Language): Coverage;
        vfunc_get_features(num_features: number): [HarfBuzz.feature_t[], number];
        vfunc_get_font_map(): FontMap | null;
        vfunc_get_glyph_extents(glyph: Glyph): [Rectangle | null, Rectangle | null];
        vfunc_get_metrics(language: Language | null): FontMetrics;
        describe(): FontDescription;
        describe_with_absolute_size(): FontDescription;
        get_coverage(language: Language): Coverage;
        get_face(): FontFace | null;
        get_features(num_features: number): [HarfBuzz.feature_t[], number];
        get_font_map(): FontMap | null;
        get_glyph_extents(glyph: Glyph): [Rectangle | null, Rectangle | null];
        get_languages(): Language[] | null;
        get_metrics(language: Language | null): FontMetrics;
        has_char(wc: string): boolean;
        serialize(): GLib.Bytes;
    }
    namespace FontFace {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class FontFace extends GObject.Object {
        static $gtype: GObject.GType<FontFace>;
        $signals: FontFace.SignalSignatures;
        constructor(properties?: Partial<FontFace.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FontFace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontFace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontFace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontFace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontFace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontFace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_describe(): FontDescription;
        vfunc_get_face_name(): string;
        vfunc_get_family(): FontFamily;
        vfunc_is_synthesized(): boolean;
        vfunc_list_sizes(): number[] | null;
        describe(): FontDescription;
        get_face_name(): string;
        get_family(): FontFamily;
        is_synthesized(): boolean;
        list_sizes(): number[] | null;
    }
    namespace FontFamily {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::is-monospace": (pspec: GObject.ParamSpec) => void;
            "notify::is-variable": (pspec: GObject.ParamSpec) => void;
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            is_monospace: boolean;
            isMonospace: boolean;
            is_variable: boolean;
            isVariable: boolean;
            item_type: GObject.GTypeInput;
            itemType: GObject.GTypeInput;
            n_items: number;
            nItems: number;
            name: string;
        }
    }
    abstract class FontFamily<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<FontFamily>;
        get is_monospace(): boolean;
        get isMonospace(): boolean;
        get is_variable(): boolean;
        get isVariable(): boolean;
        get item_type(): GObject.GType;
        get itemType(): GObject.GType;
        get n_items(): number;
        get nItems(): number;
        get name(): string;
        $signals: FontFamily.SignalSignatures;
        constructor(properties?: Partial<FontFamily.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FontFamily.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontFamily.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontFamily.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontFamily.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontFamily.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontFamily.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_face(name: string | null): FontFace | null;
        vfunc_get_name(): string;
        vfunc_is_monospace(): boolean;
        vfunc_is_variable(): boolean;
        vfunc_list_faces(): FontFace[] | null;
        get_face(name: string | null): FontFace | null;
        get_name(): string;
        list_faces(): FontFace[] | null;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace FontMap {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            item_type: GObject.GTypeInput;
            itemType: GObject.GTypeInput;
            n_items: number;
            nItems: number;
        }
    }
    abstract class FontMap<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<FontMap>;
        get item_type(): GObject.GType;
        get itemType(): GObject.GType;
        get n_items(): number;
        get nItems(): number;
        $signals: FontMap.SignalSignatures;
        constructor(properties?: Partial<FontMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(): void;
        vfunc_get_family(name: string): FontFamily | null;
        vfunc_get_serial(): number;
        vfunc_list_families(): FontFamily[];
        vfunc_load_font(context: Context, desc: FontDescription): Font | null;
        vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null;
        add_font_file(filename: string): boolean;
        changed(): void;
        create_context(): Context;
        get_family(name: string): FontFamily | null;
        get_serial(): number;
        list_families(): FontFamily[];
        load_font(context: Context, desc: FontDescription): Font | null;
        load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null;
        reload_font(font: Font, scale: number, context: Context | null, variations: string | null): Font;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace Fontset {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class Fontset extends GObject.Object {
        static $gtype: GObject.GType<Fontset>;
        $signals: Fontset.SignalSignatures;
        constructor(properties?: Partial<Fontset.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Fontset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fontset.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fontset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fontset.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fontset.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Fontset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_foreach(func: FontsetForeachFunc): void;
        vfunc_get_font(wc: number): Font;
        vfunc_get_language(): Language;
        vfunc_get_metrics(): FontMetrics;
        foreach(func: FontsetForeachFunc): void;
        get_font(wc: number): Font;
        get_metrics(): FontMetrics;
    }
    namespace FontsetSimple {
        interface SignalSignatures extends Fontset.SignalSignatures {}
        interface ConstructorProps extends Fontset.ConstructorProps {}
    }
    class FontsetSimple extends Fontset {
        static $gtype: GObject.GType<FontsetSimple>;
        $signals: FontsetSimple.SignalSignatures;
        constructor(properties?: Partial<FontsetSimple.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](language: Language): FontsetSimple;
        connect<K extends keyof FontsetSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontsetSimple.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontsetSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontsetSimple.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontsetSimple.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontsetSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append(font: Font): void;
        size(): number;
    }
    namespace Layout {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Layout extends GObject.Object {
        static $gtype: GObject.GType<Layout>;
        $signals: Layout.SignalSignatures;
        constructor(properties?: Partial<Layout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: Context): Layout;
        connect<K extends keyof Layout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Layout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Layout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Layout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static deserialize(context: Context, bytes: GLib.Bytes | Uint8Array, flags: LayoutDeserializeFlags): Layout | null;
        context_changed(): void;
        copy(): Layout;
        get_alignment(): Alignment;
        get_attributes(): AttrList | null;
        get_auto_dir(): boolean;
        get_baseline(): number;
        get_caret_pos(index_: number): [Rectangle | null, Rectangle | null];
        get_character_count(): number;
        get_context(): Context;
        get_cursor_pos(index_: number): [Rectangle | null, Rectangle | null];
        get_direction(index: number): Direction;
        get_ellipsize(): EllipsizeMode;
        get_extents(): [Rectangle | null, Rectangle | null];
        get_font_description(): FontDescription | null;
        get_height(): number;
        get_indent(): number;
        get_iter(): LayoutIter;
        get_justify(): boolean;
        get_justify_last_line(): boolean;
        get_line(line: number): LayoutLine | null;
        get_line_count(): number;
        get_line_readonly(line: number): LayoutLine | null;
        get_line_spacing(): number;
        get_lines(): LayoutLine[];
        get_lines_readonly(): LayoutLine[];
        get_log_attrs(): LogAttr[];
        get_log_attrs_readonly(): LogAttr[];
        get_pixel_extents(): [Rectangle | null, Rectangle | null];
        get_pixel_size(): [number, number];
        get_serial(): number;
        get_single_paragraph_mode(): boolean;
        get_size(): [number, number];
        get_spacing(): number;
        get_tabs(): TabArray | null;
        get_text(): string;
        get_unknown_glyphs_count(): number;
        get_width(): number;
        get_wrap(): WrapMode;
        index_to_line_x(index_: number, trailing: boolean): [number, number];
        index_to_pos(index_: number): Rectangle;
        is_ellipsized(): boolean;
        is_wrapped(): boolean;
        move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [number, number];
        serialize(flags: LayoutSerializeFlags): GLib.Bytes;
        set_alignment(alignment: Alignment): void;
        set_attributes(attrs: AttrList | null): void;
        set_auto_dir(auto_dir: boolean): void;
        set_ellipsize(ellipsize: EllipsizeMode): void;
        set_font_description(desc: FontDescription | null): void;
        set_height(height: number): void;
        set_indent(indent: number): void;
        set_justify(justify: boolean): void;
        set_justify_last_line(justify: boolean): void;
        set_line_spacing(factor: number): void;
        set_markup(markup: string, length: number): void;
        set_markup_with_accel(markup: string, length: number, accel_marker: string): string;
        set_single_paragraph_mode(setting: boolean): void;
        set_spacing(spacing: number): void;
        set_tabs(tabs: TabArray | null): void;
        set_text(text: string, length: number): void;
        set_width(width: number): void;
        set_wrap(wrap: WrapMode): void;
        write_to_file(flags: LayoutSerializeFlags, filename: string): boolean;
        xy_to_index(x: number, y: number): [boolean, number, number];
    }
    namespace Renderer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    abstract class Renderer extends GObject.Object {
        static $gtype: GObject.GType<Renderer>;
        $signals: Renderer.SignalSignatures;
        matrix: Matrix;
        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_begin(): void;
        vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void;
        vfunc_draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
        vfunc_draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void;
        vfunc_draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
        vfunc_draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void;
        vfunc_draw_shape(attr: AttrShape, x: number, y: number): void;
        vfunc_draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void;
        vfunc_end(): void;
        vfunc_part_changed(part: RenderPart): void;
        vfunc_prepare_run(run: LayoutRun): void;
        activate(): void;
        deactivate(): void;
        draw_error_underline(x: number, y: number, width: number, height: number): void;
        draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
        draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void;
        draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
        draw_layout(layout: Layout, x: number, y: number): void;
        draw_layout_line(line: LayoutLine, x: number, y: number): void;
        draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void;
        draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void;
        get_alpha(part: RenderPart): number;
        get_color(part: RenderPart): Color | null;
        get_components(): RenderComponent;
        get_layout(): Layout | null;
        get_layout_line(): LayoutLine | null;
        get_matrix(): Matrix | null;
        part_changed(part: RenderPart): void;
        set_alpha(part: RenderPart, alpha: number): void;
        set_color(part: RenderPart, color: Color | null): void;
        set_components(components: RenderComponent): void;
        set_matrix(matrix: Matrix | null): void;
    }
    class Analysis {
        static $gtype: GObject.GType<Analysis>;
        shape_engine: null;
        lang_engine: null;
        font: Font;
        level: number;
        gravity: number;
        flags: number;
        script: number;
        extra_attrs: null[];
    }
    class AttrClass {
        static $gtype: GObject.GType<AttrClass>;
        type: AttrType;
    }
    class AttrColor {
        static $gtype: GObject.GType<AttrColor>;
        color: Color;
    }
    class AttrFloat {
        static $gtype: GObject.GType<AttrFloat>;
        value: number;
    }
    class AttrFontDesc {
        static $gtype: GObject.GType<AttrFontDesc>;
        static ["new"](desc: FontDescription): Attribute;
    }
    class AttrFontFeatures {
        static $gtype: GObject.GType<AttrFontFeatures>;
        features: string;
        static ["new"](features: string): Attribute;
    }
    class AttrInt {
        static $gtype: GObject.GType<AttrInt>;
        value: number;
    }
    abstract class AttrIterator {
        static $gtype: GObject.GType<AttrIterator>;
        copy(): AttrIterator;
        destroy(): void;
        get(type: AttrType): Attribute | null;
        get_attrs(): Attribute[];
        get_font(desc: FontDescription): [Language | null, Attribute[] | null];
        next(): boolean;
        range(): [number, number];
    }
    class AttrLanguage {
        static $gtype: GObject.GType<AttrLanguage>;
        static ["new"](language: Language): Attribute;
    }
    class AttrList {
        static $gtype: GObject.GType<AttrList>;
        constructor(properties?: Partial<{}>);
        static ["new"](): AttrList;
        static from_string(text: string): AttrList | null;
        change(attr: Attribute): void;
        copy(): AttrList | null;
        equal(other_list: AttrList): boolean;
        filter(func: AttrFilterFunc): AttrList | null;
        get_attributes(): Attribute[];
        get_iterator(): AttrIterator;
        insert(attr: Attribute): void;
        insert_before(attr: Attribute): void;
        ref(): AttrList;
        splice(other: AttrList, pos: number, len: number): void;
        to_string(): string;
        unref(): void;
        update(pos: number, remove: number, add: number): void;
    }
    class AttrShape {
        static $gtype: GObject.GType<AttrShape>;
        ink_rect: Rectangle;
        logical_rect: Rectangle;
        data: null;
        copy_func: AttrDataCopyFunc;
        destroy_func: GLib.DestroyNotify;
        static ["new"](ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
        static new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: null, copy_func: AttrDataCopyFunc | null): Attribute;
    }
    class AttrSize {
        static $gtype: GObject.GType<AttrSize>;
        size: number;
        absolute: number;
        static ["new"](size: number): Attribute;
        static new_absolute(size: number): Attribute;
    }
    class AttrString {
        static $gtype: GObject.GType<AttrString>;
        value: string;
    }
    class Attribute {
        static $gtype: GObject.GType<Attribute>;
        start_index: number;
        end_index: number;
        as_color(): AttrColor | null;
        as_float(): AttrFloat | null;
        as_font_desc(): AttrFontDesc | null;
        as_font_features(): AttrFontFeatures | null;
        as_int(): AttrInt | null;
        as_language(): AttrLanguage | null;
        as_shape(): AttrShape | null;
        as_size(): AttrSize | null;
        as_string(): AttrString | null;
        copy(): Attribute;
        destroy(): void;
        equal(attr2: Attribute): boolean;
        init(klass: AttrClass): void;
    }
    class Color {
        static $gtype: GObject.GType<Color>;
        red: number;
        green: number;
        blue: number;
        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
        }>);
        copy(): Color | null;
        free(): void;
        parse(spec: string): boolean;
        parse_with_alpha(spec: string): [boolean, number];
        to_string(): string;
    }
    type ContextClass = typeof Context;
    type FontClass = typeof Font;
    class FontDescription {
        static $gtype: GObject.GType<FontDescription>;
        constructor(properties?: Partial<{}>);
        static ["new"](): FontDescription;
        static from_string(str: string): FontDescription;
        better_match(old_match: FontDescription | null, new_match: FontDescription): boolean;
        copy(): FontDescription | null;
        copy_static(): FontDescription | null;
        equal(desc2: FontDescription): boolean;
        free(): void;
        get_color(): FontColor;
        get_family(): string | null;
        get_features(): string | null;
        get_gravity(): Gravity;
        get_set_fields(): FontMask;
        get_size(): number;
        get_size_is_absolute(): boolean;
        get_stretch(): Stretch;
        get_style(): Style;
        get_variant(): Variant;
        get_variations(): string | null;
        get_weight(): Weight;
        get_width(): Width;
        hash(): number;
        merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void;
        merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void;
        set_absolute_size(size: number): void;
        set_color(color: FontColor): void;
        set_family(family: string): void;
        set_family_static(family: string): void;
        set_features(features: string | null): void;
        set_features_static(features: string): void;
        set_gravity(gravity: Gravity): void;
        set_size(size: number): void;
        set_stretch(stretch: Stretch): void;
        set_style(style: Style): void;
        set_variant(variant: Variant): void;
        set_variations(variations: string | null): void;
        set_variations_static(variations: string): void;
        set_weight(weight: Weight): void;
        set_width(width: Width): void;
        to_filename(): string | null;
        to_string(): string;
        unset_fields(to_unset: FontMask): void;
    }
    type FontFaceClass = typeof FontFace;
    type FontFamilyClass = typeof FontFamily;
    type FontMapClass = typeof FontMap;
    class FontMetrics {
        static $gtype: GObject.GType<FontMetrics>;
        constructor(properties?: Partial<{}>);
        get_approximate_char_width(): number;
        get_approximate_digit_width(): number;
        get_ascent(): number;
        get_descent(): number;
        get_height(): number;
        get_strikethrough_position(): number;
        get_strikethrough_thickness(): number;
        get_underline_position(): number;
        get_underline_thickness(): number;
        ref(): FontMetrics | null;
        unref(): void;
    }
    type FontsetClass = typeof Fontset;
    type FontsetSimpleClass = typeof FontsetSimple;
    class GlyphGeometry {
        static $gtype: GObject.GType<GlyphGeometry>;
        width: GlyphUnit;
        x_offset: GlyphUnit;
        y_offset: GlyphUnit;
        constructor(properties?: Partial<{
            width: GlyphUnit;
            x_offset: GlyphUnit;
            y_offset: GlyphUnit;
        }>);
    }
    class GlyphInfo {
        static $gtype: GObject.GType<GlyphInfo>;
        glyph: Glyph;
        geometry: GlyphGeometry;
        attr: GlyphVisAttr;
        constructor(properties?: Partial<{
            glyph: Glyph;
            geometry: GlyphGeometry;
            attr: GlyphVisAttr;
        }>);
    }
    class GlyphItem {
        static $gtype: GObject.GType<GlyphItem>;
        glyphs: GlyphString;
        y_offset: number;
        start_x_offset: number;
        end_x_offset: number;
        apply_attrs(text: string, list: AttrList): GlyphItem[];
        copy(): GlyphItem | null;
        free(): void;
        get_logical_widths(text: string): number[];
        letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void;
        split(text: string, split_index: number): GlyphItem | null;
    }
    class GlyphItemIter {
        static $gtype: GObject.GType<GlyphItemIter>;
        text: string;
        start_glyph: number;
        start_index: number;
        start_char: number;
        end_glyph: number;
        end_index: number;
        end_char: number;
        copy(): GlyphItemIter | null;
        free(): void;
        init_end(glyph_item: GlyphItem, text: string): boolean;
        init_start(glyph_item: GlyphItem, text: string): boolean;
        next_cluster(): boolean;
        prev_cluster(): boolean;
    }
    class GlyphString {
        static $gtype: GObject.GType<GlyphString>;
        num_glyphs: number;
        glyphs: GlyphInfo[];
        log_clusters: number;
        constructor(properties?: Partial<{
            num_glyphs: number;
            glyphs: GlyphInfo[];
            log_clusters: number;
        }>);
        static ["new"](): GlyphString;
        copy(): GlyphString | null;
        extents(font: Font): [Rectangle | null, Rectangle | null];
        extents_range(start: number, end: number, font: Font): [Rectangle | null, Rectangle | null];
        free(): void;
        get_logical_widths(text: string, length: number, embedding_level: number): number[];
        get_width(): number;
        index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): number;
        index_to_x_full(text: string, length: number, analysis: Analysis, attrs: LogAttr | null, index_: number, trailing: boolean): number;
        set_size(new_len: number): void;
        x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [number, number];
    }
    class GlyphVisAttr {
        static $gtype: GObject.GType<GlyphVisAttr>;
        is_cluster_start: number;
        is_color: number;
        constructor(properties?: Partial<{
            is_cluster_start: number;
            is_color: number;
        }>);
    }
    class Item {
        static $gtype: GObject.GType<Item>;
        offset: number;
        length: number;
        num_chars: number;
        constructor(properties?: Partial<{
            offset: number;
            length: number;
            num_chars: number;
            analysis: Analysis;
        }>);
        static ["new"](): Item;
        apply_attrs(iter: AttrIterator): void;
        copy(): Item | null;
        free(): void;
        get_char_offset(): number;
        split(split_index: number, split_offset: number): Item;
    }
    abstract class Language {
        static $gtype: GObject.GType<Language>;
        static from_string(language: string | null): Language | null;
        static get_default(): Language;
        static get_preferred(): Language[] | null;
        get_sample_string(): string;
        get_scripts(): Script[] | null;
        includes_script(script: Script): boolean;
        matches(range_list: string): boolean;
        to_string(): string;
    }
    type LayoutClass = typeof Layout;
    abstract class LayoutIter {
        static $gtype: GObject.GType<LayoutIter>;
        at_last_line(): boolean;
        copy(): LayoutIter | null;
        free(): void;
        get_baseline(): number;
        get_char_extents(): Rectangle;
        get_cluster_extents(): [Rectangle | null, Rectangle | null];
        get_index(): number;
        get_layout(): Layout | null;
        get_layout_extents(): [Rectangle | null, Rectangle | null];
        get_line(): LayoutLine | null;
        get_line_extents(): [Rectangle | null, Rectangle | null];
        get_line_readonly(): LayoutLine | null;
        get_line_yrange(): [number, number];
        get_run(): LayoutRun | null;
        get_run_baseline(): number;
        get_run_extents(): [Rectangle | null, Rectangle | null];
        get_run_readonly(): LayoutRun | null;
        next_char(): boolean;
        next_cluster(): boolean;
        next_line(): boolean;
        next_run(): boolean;
    }
    class LayoutLine {
        static $gtype: GObject.GType<LayoutLine>;
        layout: Layout;
        start_index: number;
        length: number;
        runs: LayoutRun[];
        resolved_dir: number;
        get_extents(): [Rectangle | null, Rectangle | null];
        get_height(): number;
        get_length(): number;
        get_pixel_extents(): [Rectangle | null, Rectangle | null];
        get_resolved_direction(): Direction;
        get_start_index(): number;
        get_x_ranges(start_index: number, end_index: number): number[];
        index_to_x(index_: number, trailing: boolean): number;
        is_paragraph_start(): boolean;
        ref(): LayoutLine | null;
        unref(): void;
        x_to_index(x_pos: number): [boolean, number, number];
    }
    class LogAttr {
        static $gtype: GObject.GType<LogAttr>;
        is_line_break: number;
        is_mandatory_break: number;
        is_char_break: number;
        is_white: number;
        is_cursor_position: number;
        is_word_start: number;
        is_word_end: number;
        is_sentence_boundary: number;
        is_sentence_start: number;
        is_sentence_end: number;
        backspace_deletes_character: number;
        is_expandable_space: number;
        is_word_boundary: number;
        break_inserts_hyphen: number;
        break_removes_preceding: number;
        reserved: number;
        constructor(properties?: Partial<{
            is_line_break: number;
            is_mandatory_break: number;
            is_char_break: number;
            is_white: number;
            is_cursor_position: number;
            is_word_start: number;
            is_word_end: number;
            is_sentence_boundary: number;
            is_sentence_start: number;
            is_sentence_end: number;
            backspace_deletes_character: number;
            is_expandable_space: number;
            is_word_boundary: number;
            break_inserts_hyphen: number;
            break_removes_preceding: number;
            reserved: number;
        }>);
    }
    class Matrix {
        static $gtype: GObject.GType<Matrix>;
        xx: number;
        xy: number;
        yx: number;
        yy: number;
        x0: number;
        y0: number;
        constructor(properties?: Partial<{
            xx: number;
            xy: number;
            yx: number;
            yy: number;
            x0: number;
            y0: number;
        }>);
        concat(new_matrix: Matrix): void;
        copy(): Matrix | null;
        free(): void;
        get_font_scale_factor(): number;
        get_font_scale_factors(): [number, number];
        get_slant_ratio(): number;
        rotate(degrees: number): void;
        scale(scale_x: number, scale_y: number): void;
        transform_distance(dx: number, dy: number): [number, number];
        transform_pixel_rectangle(rect?: Rectangle): Rectangle;
        transform_point(x: number, y: number): [number, number];
        transform_rectangle(rect?: Rectangle): Rectangle;
        translate(tx: number, ty: number): void;
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
    type RendererClass = typeof Renderer;
    abstract class RendererPrivate {
        static $gtype: GObject.GType<RendererPrivate>;
    }
    class ScriptIter {
        static $gtype: GObject.GType<ScriptIter>;
        constructor(text: string, length: number);
        static ["new"](text: string, length: number): ScriptIter;
        free(): void;
        get_range(): [string, string, Script | null];
        next(): boolean;
    }
    class TabArray {
        static $gtype: GObject.GType<TabArray>;
        constructor(initial_size: number, positions_in_pixels: boolean);
        static ["new"](initial_size: number, positions_in_pixels: boolean): TabArray;
        static from_string(text: string): TabArray | null;
        copy(): TabArray;
        free(): void;
        get_decimal_point(tab_index: number): string;
        get_positions_in_pixels(): boolean;
        get_size(): number;
        get_tab(tab_index: number): [TabAlign | null, number];
        get_tabs(): [TabAlign | null, number[] | null];
        resize(new_size: number): void;
        set_decimal_point(tab_index: number, decimal_point: string): void;
        set_positions_in_pixels(positions_in_pixels: boolean): void;
        set_tab(tab_index: number, alignment: TabAlign, location: number): void;
        sort(): void;
        to_string(): string;
    }
    type Glyph = number;
    type GlyphUnit = number;
    type LayoutRun = GlyphItem;
    const __name__: string;
    const __version__: string;
}
export default Pango;
}
declare module 'gi://Pango' {
    import Pango10 from 'gi://Pango?version=1.0';
    export default Pango10;
}
