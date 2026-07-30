declare module 'gi://HarfBuzz?version=0.0' {
import type freetype2 from 'gi://freetype2?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace HarfBuzz {
    export namespace aat_layout_feature_selector_t {
        export const $gtype: GObject.GType<aat_layout_feature_selector_t>;
    }
    enum aat_layout_feature_selector_t {
        INVALID,
        ALL_TYPE_FEATURES_ON,
        ALL_TYPE_FEATURES_OFF,
        REQUIRED_LIGATURES_ON,
        REQUIRED_LIGATURES_OFF,
        COMMON_LIGATURES_ON,
        COMMON_LIGATURES_OFF,
        RARE_LIGATURES_ON,
        RARE_LIGATURES_OFF,
        LOGOS_ON,
        LOGOS_OFF,
        REBUS_PICTURES_ON,
        REBUS_PICTURES_OFF,
        DIPHTHONG_LIGATURES_ON,
        DIPHTHONG_LIGATURES_OFF,
        SQUARED_LIGATURES_ON,
        SQUARED_LIGATURES_OFF,
        ABBREV_SQUARED_LIGATURES_ON,
        ABBREV_SQUARED_LIGATURES_OFF,
        SYMBOL_LIGATURES_ON,
        SYMBOL_LIGATURES_OFF,
        CONTEXTUAL_LIGATURES_ON,
        CONTEXTUAL_LIGATURES_OFF,
        HISTORICAL_LIGATURES_ON,
        HISTORICAL_LIGATURES_OFF,
        UNCONNECTED,
        PARTIALLY_CONNECTED,
        CURSIVE,
        UPPER_AND_LOWER_CASE,
        ALL_CAPS,
        ALL_LOWER_CASE,
        SMALL_CAPS,
        INITIAL_CAPS,
        INITIAL_CAPS_AND_SMALL_CAPS,
        SUBSTITUTE_VERTICAL_FORMS_ON,
        SUBSTITUTE_VERTICAL_FORMS_OFF,
        LINGUISTIC_REARRANGEMENT_ON,
        LINGUISTIC_REARRANGEMENT_OFF,
        MONOSPACED_NUMBERS,
        PROPORTIONAL_NUMBERS,
        THIRD_WIDTH_NUMBERS,
        QUARTER_WIDTH_NUMBERS,
        WORD_INITIAL_SWASHES_ON,
        WORD_INITIAL_SWASHES_OFF,
        WORD_FINAL_SWASHES_ON,
        WORD_FINAL_SWASHES_OFF,
        LINE_INITIAL_SWASHES_ON,
        LINE_INITIAL_SWASHES_OFF,
        LINE_FINAL_SWASHES_ON,
        LINE_FINAL_SWASHES_OFF,
        NON_FINAL_SWASHES_ON,
        NON_FINAL_SWASHES_OFF,
        SHOW_DIACRITICS,
        HIDE_DIACRITICS,
        DECOMPOSE_DIACRITICS,
        NORMAL_POSITION,
        SUPERIORS,
        INFERIORS,
        ORDINALS,
        SCIENTIFIC_INFERIORS,
        NO_FRACTIONS,
        VERTICAL_FRACTIONS,
        DIAGONAL_FRACTIONS,
        PREVENT_OVERLAP_ON,
        PREVENT_OVERLAP_OFF,
        HYPHENS_TO_EM_DASH_ON,
        HYPHENS_TO_EM_DASH_OFF,
        HYPHEN_TO_EN_DASH_ON,
        HYPHEN_TO_EN_DASH_OFF,
        SLASHED_ZERO_ON,
        SLASHED_ZERO_OFF,
        FORM_INTERROBANG_ON,
        FORM_INTERROBANG_OFF,
        SMART_QUOTES_ON,
        SMART_QUOTES_OFF,
        PERIODS_TO_ELLIPSIS_ON,
        PERIODS_TO_ELLIPSIS_OFF,
        HYPHEN_TO_MINUS_ON,
        HYPHEN_TO_MINUS_OFF,
        ASTERISK_TO_MULTIPLY_ON,
        ASTERISK_TO_MULTIPLY_OFF,
        SLASH_TO_DIVIDE_ON,
        SLASH_TO_DIVIDE_OFF,
        INEQUALITY_LIGATURES_ON,
        INEQUALITY_LIGATURES_OFF,
        EXPONENTS_ON,
        EXPONENTS_OFF,
        MATHEMATICAL_GREEK_ON,
        MATHEMATICAL_GREEK_OFF,
        NO_ORNAMENTS,
        DINGBATS,
        PI_CHARACTERS,
        FLEURONS,
        DECORATIVE_BORDERS,
        INTERNATIONAL_SYMBOLS,
        MATH_SYMBOLS,
        NO_ALTERNATES,
        DESIGN_LEVEL1,
        DESIGN_LEVEL2,
        DESIGN_LEVEL3,
        DESIGN_LEVEL4,
        DESIGN_LEVEL5,
        NO_STYLE_OPTIONS,
        DISPLAY_TEXT,
        ENGRAVED_TEXT,
        ILLUMINATED_CAPS,
        TITLING_CAPS,
        TALL_CAPS,
        TRADITIONAL_CHARACTERS,
        SIMPLIFIED_CHARACTERS,
        JIS1978_CHARACTERS,
        JIS1983_CHARACTERS,
        JIS1990_CHARACTERS,
        TRADITIONAL_ALT_ONE,
        TRADITIONAL_ALT_TWO,
        TRADITIONAL_ALT_THREE,
        TRADITIONAL_ALT_FOUR,
        TRADITIONAL_ALT_FIVE,
        EXPERT_CHARACTERS,
        JIS2004_CHARACTERS,
        HOJO_CHARACTERS,
        NLCCHARACTERS,
        TRADITIONAL_NAMES_CHARACTERS,
        LOWER_CASE_NUMBERS,
        UPPER_CASE_NUMBERS,
        PROPORTIONAL_TEXT,
        MONOSPACED_TEXT,
        HALF_WIDTH_TEXT,
        THIRD_WIDTH_TEXT,
        QUARTER_WIDTH_TEXT,
        ALT_PROPORTIONAL_TEXT,
        ALT_HALF_WIDTH_TEXT,
        NO_TRANSLITERATION,
        HANJA_TO_HANGUL,
        HIRAGANA_TO_KATAKANA,
        KATAKANA_TO_HIRAGANA,
        KANA_TO_ROMANIZATION,
        ROMANIZATION_TO_HIRAGANA,
        ROMANIZATION_TO_KATAKANA,
        HANJA_TO_HANGUL_ALT_ONE,
        HANJA_TO_HANGUL_ALT_TWO,
        HANJA_TO_HANGUL_ALT_THREE,
        NO_ANNOTATION,
        BOX_ANNOTATION,
        ROUNDED_BOX_ANNOTATION,
        CIRCLE_ANNOTATION,
        INVERTED_CIRCLE_ANNOTATION,
        PARENTHESIS_ANNOTATION,
        PERIOD_ANNOTATION,
        ROMAN_NUMERAL_ANNOTATION,
        DIAMOND_ANNOTATION,
        INVERTED_BOX_ANNOTATION,
        INVERTED_ROUNDED_BOX_ANNOTATION,
        FULL_WIDTH_KANA,
        PROPORTIONAL_KANA,
        FULL_WIDTH_IDEOGRAPHS,
        PROPORTIONAL_IDEOGRAPHS,
        HALF_WIDTH_IDEOGRAPHS,
        CANONICAL_COMPOSITION_ON,
        CANONICAL_COMPOSITION_OFF,
        COMPATIBILITY_COMPOSITION_ON,
        COMPATIBILITY_COMPOSITION_OFF,
        TRANSCODING_COMPOSITION_ON,
        TRANSCODING_COMPOSITION_OFF,
        NO_RUBY_KANA,
        RUBY_KANA,
        RUBY_KANA_ON,
        RUBY_KANA_OFF,
        NO_CJK_SYMBOL_ALTERNATIVES,
        CJK_SYMBOL_ALT_ONE,
        CJK_SYMBOL_ALT_TWO,
        CJK_SYMBOL_ALT_THREE,
        CJK_SYMBOL_ALT_FOUR,
        CJK_SYMBOL_ALT_FIVE,
        NO_IDEOGRAPHIC_ALTERNATIVES,
        IDEOGRAPHIC_ALT_ONE,
        IDEOGRAPHIC_ALT_TWO,
        IDEOGRAPHIC_ALT_THREE,
        IDEOGRAPHIC_ALT_FOUR,
        IDEOGRAPHIC_ALT_FIVE,
        CJK_VERTICAL_ROMAN_CENTERED,
        CJK_VERTICAL_ROMAN_HBASELINE,
        NO_CJK_ITALIC_ROMAN,
        CJK_ITALIC_ROMAN,
        CJK_ITALIC_ROMAN_ON,
        CJK_ITALIC_ROMAN_OFF,
        CASE_SENSITIVE_LAYOUT_ON,
        CASE_SENSITIVE_LAYOUT_OFF,
        CASE_SENSITIVE_SPACING_ON,
        CASE_SENSITIVE_SPACING_OFF,
        ALTERNATE_HORIZ_KANA_ON,
        ALTERNATE_HORIZ_KANA_OFF,
        ALTERNATE_VERT_KANA_ON,
        ALTERNATE_VERT_KANA_OFF,
        NO_STYLISTIC_ALTERNATES,
        STYLISTIC_ALT_ONE_ON,
        STYLISTIC_ALT_ONE_OFF,
        STYLISTIC_ALT_TWO_ON,
        STYLISTIC_ALT_TWO_OFF,
        STYLISTIC_ALT_THREE_ON,
        STYLISTIC_ALT_THREE_OFF,
        STYLISTIC_ALT_FOUR_ON,
        STYLISTIC_ALT_FOUR_OFF,
        STYLISTIC_ALT_FIVE_ON,
        STYLISTIC_ALT_FIVE_OFF,
        STYLISTIC_ALT_SIX_ON,
        STYLISTIC_ALT_SIX_OFF,
        STYLISTIC_ALT_SEVEN_ON,
        STYLISTIC_ALT_SEVEN_OFF,
        STYLISTIC_ALT_EIGHT_ON,
        STYLISTIC_ALT_EIGHT_OFF,
        STYLISTIC_ALT_NINE_ON,
        STYLISTIC_ALT_NINE_OFF,
        STYLISTIC_ALT_TEN_ON,
        STYLISTIC_ALT_TEN_OFF,
        STYLISTIC_ALT_ELEVEN_ON,
        STYLISTIC_ALT_ELEVEN_OFF,
        STYLISTIC_ALT_TWELVE_ON,
        STYLISTIC_ALT_TWELVE_OFF,
        STYLISTIC_ALT_THIRTEEN_ON,
        STYLISTIC_ALT_THIRTEEN_OFF,
        STYLISTIC_ALT_FOURTEEN_ON,
        STYLISTIC_ALT_FOURTEEN_OFF,
        STYLISTIC_ALT_FIFTEEN_ON,
        STYLISTIC_ALT_FIFTEEN_OFF,
        STYLISTIC_ALT_SIXTEEN_ON,
        STYLISTIC_ALT_SIXTEEN_OFF,
        STYLISTIC_ALT_SEVENTEEN_ON,
        STYLISTIC_ALT_SEVENTEEN_OFF,
        STYLISTIC_ALT_EIGHTEEN_ON,
        STYLISTIC_ALT_EIGHTEEN_OFF,
        STYLISTIC_ALT_NINETEEN_ON,
        STYLISTIC_ALT_NINETEEN_OFF,
        STYLISTIC_ALT_TWENTY_ON,
        STYLISTIC_ALT_TWENTY_OFF,
        CONTEXTUAL_ALTERNATES_ON,
        CONTEXTUAL_ALTERNATES_OFF,
        SWASH_ALTERNATES_ON,
        SWASH_ALTERNATES_OFF,
        CONTEXTUAL_SWASH_ALTERNATES_ON,
        CONTEXTUAL_SWASH_ALTERNATES_OFF,
        DEFAULT_LOWER_CASE,
        LOWER_CASE_SMALL_CAPS,
        LOWER_CASE_PETITE_CAPS,
        DEFAULT_UPPER_CASE,
        UPPER_CASE_SMALL_CAPS,
        UPPER_CASE_PETITE_CAPS,
        HALF_WIDTH_CJK_ROMAN,
        PROPORTIONAL_CJK_ROMAN,
        DEFAULT_CJK_ROMAN,
        FULL_WIDTH_CJK_ROMAN,
    }
    export namespace aat_layout_feature_type_t {
        export const $gtype: GObject.GType<aat_layout_feature_type_t>;
    }
    enum aat_layout_feature_type_t {
        INVALID,
        ALL_TYPOGRAPHIC,
        LIGATURES,
        CURSIVE_CONNECTION,
        LETTER_CASE,
        VERTICAL_SUBSTITUTION,
        LINGUISTIC_REARRANGEMENT,
        NUMBER_SPACING,
        SMART_SWASH_TYPE,
        DIACRITICS_TYPE,
        VERTICAL_POSITION,
        FRACTIONS,
        OVERLAPPING_CHARACTERS_TYPE,
        TYPOGRAPHIC_EXTRAS,
        MATHEMATICAL_EXTRAS,
        ORNAMENT_SETS_TYPE,
        CHARACTER_ALTERNATIVES,
        DESIGN_COMPLEXITY_TYPE,
        STYLE_OPTIONS,
        CHARACTER_SHAPE,
        NUMBER_CASE,
        TEXT_SPACING,
        TRANSLITERATION,
        ANNOTATION_TYPE,
        KANA_SPACING_TYPE,
        IDEOGRAPHIC_SPACING_TYPE,
        UNICODE_DECOMPOSITION_TYPE,
        RUBY_KANA,
        CJK_SYMBOL_ALTERNATIVES_TYPE,
        IDEOGRAPHIC_ALTERNATIVES_TYPE,
        CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
        ITALIC_CJK_ROMAN,
        CASE_SENSITIVE_LAYOUT,
        ALTERNATE_KANA,
        STYLISTIC_ALTERNATIVES,
        CONTEXTUAL_ALTERNATIVES,
        LOWER_CASE,
        UPPER_CASE,
        LANGUAGE_TAG_TYPE,
        CJK_ROMAN_SPACING_TYPE,
    }
    export namespace buffer_cluster_level_t {
        export const $gtype: GObject.GType<buffer_cluster_level_t>;
    }
    enum buffer_cluster_level_t {
        MONOTONE_GRAPHEMES,
        MONOTONE_CHARACTERS,
        CHARACTERS,
        GRAPHEMES,
        DEFAULT,
    }
    export namespace buffer_content_type_t {
        export const $gtype: GObject.GType<buffer_content_type_t>;
    }
    enum buffer_content_type_t {
        INVALID,
        UNICODE,
        GLYPHS,
    }
    export namespace buffer_serialize_format_t {
        export const $gtype: GObject.GType<buffer_serialize_format_t>;
    }
    enum buffer_serialize_format_t {
        TEXT,
        JSON,
        INVALID,
    }
    export namespace direction_t {
        export const $gtype: GObject.GType<direction_t>;
    }
    enum direction_t {
        INVALID,
        LTR,
        RTL,
        TTB,
        BTT,
    }
    export namespace draw_line_cap_t {
        export const $gtype: GObject.GType<draw_line_cap_t>;
    }
    enum draw_line_cap_t {
        BUTT,
        SQUARE,
    }
    export namespace memory_mode_t {
        export const $gtype: GObject.GType<memory_mode_t>;
    }
    enum memory_mode_t {
        DUPLICATE,
        READONLY,
        WRITABLE,
        READONLY_MAY_MAKE_WRITABLE,
    }
    export namespace ot_layout_baseline_tag_t {
        export const $gtype: GObject.GType<ot_layout_baseline_tag_t>;
    }
    enum ot_layout_baseline_tag_t {
        ROMAN,
        HANGING,
        IDEO_FACE_BOTTOM_OR_LEFT,
        IDEO_FACE_TOP_OR_RIGHT,
        IDEO_FACE_CENTRAL,
        IDEO_EMBOX_BOTTOM_OR_LEFT,
        IDEO_EMBOX_TOP_OR_RIGHT,
        IDEO_EMBOX_CENTRAL,
        MATH,
    }
    export namespace ot_layout_glyph_class_t {
        export const $gtype: GObject.GType<ot_layout_glyph_class_t>;
    }
    enum ot_layout_glyph_class_t {
        UNCLASSIFIED,
        BASE_GLYPH,
        LIGATURE,
        MARK,
        COMPONENT,
    }
    export namespace ot_math_constant_t {
        export const $gtype: GObject.GType<ot_math_constant_t>;
    }
    enum ot_math_constant_t {
        SCRIPT_PERCENT_SCALE_DOWN,
        SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
        DELIMITED_SUB_FORMULA_MIN_HEIGHT,
        DISPLAY_OPERATOR_MIN_HEIGHT,
        MATH_LEADING,
        AXIS_HEIGHT,
        ACCENT_BASE_HEIGHT,
        FLATTENED_ACCENT_BASE_HEIGHT,
        SUBSCRIPT_SHIFT_DOWN,
        SUBSCRIPT_TOP_MAX,
        SUBSCRIPT_BASELINE_DROP_MIN,
        SUPERSCRIPT_SHIFT_UP,
        SUPERSCRIPT_SHIFT_UP_CRAMPED,
        SUPERSCRIPT_BOTTOM_MIN,
        SUPERSCRIPT_BASELINE_DROP_MAX,
        SUB_SUPERSCRIPT_GAP_MIN,
        SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
        SPACE_AFTER_SCRIPT,
        UPPER_LIMIT_GAP_MIN,
        UPPER_LIMIT_BASELINE_RISE_MIN,
        LOWER_LIMIT_GAP_MIN,
        LOWER_LIMIT_BASELINE_DROP_MIN,
        STACK_TOP_SHIFT_UP,
        STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
        STACK_BOTTOM_SHIFT_DOWN,
        STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
        STACK_GAP_MIN,
        STACK_DISPLAY_STYLE_GAP_MIN,
        STRETCH_STACK_TOP_SHIFT_UP,
        STRETCH_STACK_BOTTOM_SHIFT_DOWN,
        STRETCH_STACK_GAP_ABOVE_MIN,
        STRETCH_STACK_GAP_BELOW_MIN,
        FRACTION_NUMERATOR_SHIFT_UP,
        FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
        FRACTION_DENOMINATOR_SHIFT_DOWN,
        FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
        FRACTION_NUMERATOR_GAP_MIN,
        FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
        FRACTION_RULE_THICKNESS,
        FRACTION_DENOMINATOR_GAP_MIN,
        FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
        SKEWED_FRACTION_HORIZONTAL_GAP,
        SKEWED_FRACTION_VERTICAL_GAP,
        OVERBAR_VERTICAL_GAP,
        OVERBAR_RULE_THICKNESS,
        OVERBAR_EXTRA_ASCENDER,
        UNDERBAR_VERTICAL_GAP,
        UNDERBAR_RULE_THICKNESS,
        UNDERBAR_EXTRA_DESCENDER,
        RADICAL_VERTICAL_GAP,
        RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
        RADICAL_RULE_THICKNESS,
        RADICAL_EXTRA_ASCENDER,
        RADICAL_KERN_BEFORE_DEGREE,
        RADICAL_KERN_AFTER_DEGREE,
        RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
    }
    export namespace ot_math_kern_t {
        export const $gtype: GObject.GType<ot_math_kern_t>;
    }
    enum ot_math_kern_t {
        TOP_RIGHT,
        TOP_LEFT,
        BOTTOM_RIGHT,
        BOTTOM_LEFT,
    }
    export namespace ot_meta_tag_t {
        export const $gtype: GObject.GType<ot_meta_tag_t>;
    }
    enum ot_meta_tag_t {
        DESIGN_LANGUAGES,
        SUPPORTED_LANGUAGES,
    }
    export namespace ot_metrics_tag_t {
        export const $gtype: GObject.GType<ot_metrics_tag_t>;
    }
    enum ot_metrics_tag_t {
        HORIZONTAL_ASCENDER,
        HORIZONTAL_DESCENDER,
        HORIZONTAL_LINE_GAP,
        HORIZONTAL_CLIPPING_ASCENT,
        HORIZONTAL_CLIPPING_DESCENT,
        VERTICAL_ASCENDER,
        VERTICAL_DESCENDER,
        VERTICAL_LINE_GAP,
        HORIZONTAL_CARET_RISE,
        HORIZONTAL_CARET_RUN,
        HORIZONTAL_CARET_OFFSET,
        VERTICAL_CARET_RISE,
        VERTICAL_CARET_RUN,
        VERTICAL_CARET_OFFSET,
        X_HEIGHT,
        CAP_HEIGHT,
        SUBSCRIPT_EM_X_SIZE,
        SUBSCRIPT_EM_Y_SIZE,
        SUBSCRIPT_EM_X_OFFSET,
        SUBSCRIPT_EM_Y_OFFSET,
        SUPERSCRIPT_EM_X_SIZE,
        SUPERSCRIPT_EM_Y_SIZE,
        SUPERSCRIPT_EM_X_OFFSET,
        SUPERSCRIPT_EM_Y_OFFSET,
        STRIKEOUT_SIZE,
        STRIKEOUT_OFFSET,
        UNDERLINE_SIZE,
        UNDERLINE_OFFSET,
    }
    export namespace ot_name_id_predefined_t {
        export const $gtype: GObject.GType<ot_name_id_predefined_t>;
    }
    enum ot_name_id_predefined_t {
        COPYRIGHT,
        FONT_FAMILY,
        FONT_SUBFAMILY,
        UNIQUE_ID,
        FULL_NAME,
        VERSION_STRING,
        POSTSCRIPT_NAME,
        TRADEMARK,
        MANUFACTURER,
        DESIGNER,
        DESCRIPTION,
        VENDOR_URL,
        DESIGNER_URL,
        LICENSE,
        LICENSE_URL,
        TYPOGRAPHIC_FAMILY,
        TYPOGRAPHIC_SUBFAMILY,
        MAC_FULL_NAME,
        SAMPLE_TEXT,
        CID_FINDFONT_NAME,
        WWS_FAMILY,
        WWS_SUBFAMILY,
        LIGHT_BACKGROUND,
        DARK_BACKGROUND,
        VARIATIONS_PS_PREFIX,
        INVALID,
    }
    export namespace paint_composite_mode_t {
        export const $gtype: GObject.GType<paint_composite_mode_t>;
    }
    enum paint_composite_mode_t {
        CLEAR,
        SRC,
        DEST,
        SRC_OVER,
        DEST_OVER,
        SRC_IN,
        DEST_IN,
        SRC_OUT,
        DEST_OUT,
        SRC_ATOP,
        DEST_ATOP,
        XOR,
        PLUS,
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
        MULTIPLY,
        HSL_HUE,
        HSL_SATURATION,
        HSL_COLOR,
        HSL_LUMINOSITY,
    }
    export namespace paint_extend_t {
        export const $gtype: GObject.GType<paint_extend_t>;
    }
    enum paint_extend_t {
        PAD,
        REPEAT,
        REFLECT,
    }
    export namespace script_t {
        export const $gtype: GObject.GType<script_t>;
    }
    enum script_t {
        COMMON,
        INHERITED,
        UNKNOWN,
        ARABIC,
        ARMENIAN,
        BENGALI,
        CYRILLIC,
        DEVANAGARI,
        GEORGIAN,
        GREEK,
        GUJARATI,
        GURMUKHI,
        HANGUL,
        HAN,
        HEBREW,
        HIRAGANA,
        KANNADA,
        KATAKANA,
        LAO,
        LATIN,
        MALAYALAM,
        ORIYA,
        TAMIL,
        TELUGU,
        THAI,
        TIBETAN,
        BOPOMOFO,
        BRAILLE,
        CANADIAN_SYLLABICS,
        CHEROKEE,
        ETHIOPIC,
        KHMER,
        MONGOLIAN,
        MYANMAR,
        OGHAM,
        RUNIC,
        SINHALA,
        SYRIAC,
        THAANA,
        YI,
        DESERET,
        GOTHIC,
        OLD_ITALIC,
        BUHID,
        HANUNOO,
        TAGALOG,
        TAGBANWA,
        CYPRIOT,
        LIMBU,
        LINEAR_B,
        OSMANYA,
        SHAVIAN,
        TAI_LE,
        UGARITIC,
        BUGINESE,
        COPTIC,
        GLAGOLITIC,
        KHAROSHTHI,
        NEW_TAI_LUE,
        OLD_PERSIAN,
        SYLOTI_NAGRI,
        TIFINAGH,
        BALINESE,
        CUNEIFORM,
        NKO,
        PHAGS_PA,
        PHOENICIAN,
        CARIAN,
        CHAM,
        KAYAH_LI,
        LEPCHA,
        LYCIAN,
        LYDIAN,
        OL_CHIKI,
        REJANG,
        SAURASHTRA,
        SUNDANESE,
        VAI,
        AVESTAN,
        BAMUM,
        EGYPTIAN_HIEROGLYPHS,
        IMPERIAL_ARAMAIC,
        INSCRIPTIONAL_PAHLAVI,
        INSCRIPTIONAL_PARTHIAN,
        JAVANESE,
        KAITHI,
        LISU,
        MEETEI_MAYEK,
        OLD_SOUTH_ARABIAN,
        OLD_TURKIC,
        SAMARITAN,
        TAI_THAM,
        TAI_VIET,
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
        ADLAM,
        BHAIKSUKI,
        MARCHEN,
        OSAGE,
        TANGUT,
        NEWA,
        MASARAM_GONDI,
        NUSHU,
        SOYOMBO,
        ZANABAZAR_SQUARE,
        DOGRA,
        GUNJALA_GONDI,
        HANIFI_ROHINGYA,
        MAKASAR,
        MEDEFAIDRIN,
        OLD_SOGDIAN,
        SOGDIAN,
        ELYMAIC,
        NANDINAGARI,
        NYIAKENG_PUACHUE_HMONG,
        WANCHO,
        CHORASMIAN,
        DIVES_AKURU,
        KHITAN_SMALL_SCRIPT,
        YEZIDI,
        CYPRO_MINOAN,
        OLD_UYGHUR,
        TANGSA,
        TOTO,
        VITHKUQI,
        MATH,
        KAWI,
        NAG_MUNDARI,
        GARAY,
        GURUNG_KHEMA,
        KIRAT_RAI,
        OL_ONAL,
        SUNUWAR,
        TODHRI,
        TULU_TIGALARI,
        BERIA_ERFE,
        SIDETIC,
        TAI_YO,
        TOLONG_SIKI,
        INVALID,
    }
    export namespace style_tag_t {
        export const $gtype: GObject.GType<style_tag_t>;
    }
    enum style_tag_t {
        ITALIC,
        OPTICAL_SIZE,
        SLANT_ANGLE,
        SLANT_RATIO,
        WIDTH,
        WEIGHT,
    }
    export namespace unicode_combining_class_t {
        export const $gtype: GObject.GType<unicode_combining_class_t>;
    }
    enum unicode_combining_class_t {
        NOT_REORDERED,
        OVERLAY,
        NUKTA,
        KANA_VOICING,
        VIRAMA,
        CCC10,
        CCC11,
        CCC12,
        CCC13,
        CCC14,
        CCC15,
        CCC16,
        CCC17,
        CCC18,
        CCC19,
        CCC20,
        CCC21,
        CCC22,
        CCC23,
        CCC24,
        CCC25,
        CCC26,
        CCC27,
        CCC28,
        CCC29,
        CCC30,
        CCC31,
        CCC32,
        CCC33,
        CCC34,
        CCC35,
        CCC36,
        CCC84,
        CCC91,
        CCC103,
        CCC107,
        CCC118,
        CCC122,
        CCC129,
        CCC130,
        CCC132,
        ATTACHED_BELOW_LEFT,
        ATTACHED_BELOW,
        ATTACHED_ABOVE,
        ATTACHED_ABOVE_RIGHT,
        BELOW_LEFT,
        BELOW,
        BELOW_RIGHT,
        LEFT,
        RIGHT,
        ABOVE_LEFT,
        ABOVE,
        ABOVE_RIGHT,
        DOUBLE_BELOW,
        DOUBLE_ABOVE,
        IOTA_SUBSCRIPT,
        INVALID,
    }
    export namespace unicode_general_category_t {
        export const $gtype: GObject.GType<unicode_general_category_t>;
    }
    enum unicode_general_category_t {
        CONTROL,
        FORMAT,
        UNASSIGNED,
        PRIVATE_USE,
        SURROGATE,
        LOWERCASE_LETTER,
        MODIFIER_LETTER,
        OTHER_LETTER,
        TITLECASE_LETTER,
        UPPERCASE_LETTER,
        SPACING_MARK,
        ENCLOSING_MARK,
        NON_SPACING_MARK,
        DECIMAL_NUMBER,
        LETTER_NUMBER,
        OTHER_NUMBER,
        CONNECT_PUNCTUATION,
        DASH_PUNCTUATION,
        CLOSE_PUNCTUATION,
        FINAL_PUNCTUATION,
        INITIAL_PUNCTUATION,
        OTHER_PUNCTUATION,
        OPEN_PUNCTUATION,
        CURRENCY_SYMBOL,
        MODIFIER_SYMBOL,
        MATH_SYMBOL,
        OTHER_SYMBOL,
        LINE_SEPARATOR,
        PARAGRAPH_SEPARATOR,
        SPACE_SEPARATOR,
    }
    const AAT_LAYOUT_NO_SELECTOR_INDEX: number;
    const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number;
    const CODEPOINT_INVALID: codepoint_t;
    const FEATURE_GLOBAL_START: number;
    const FONT_NO_VAR_NAMED_INSTANCE: number;
    const LANGUAGE_INVALID: language_t;
    const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number;
    const OT_LAYOUT_NO_FEATURE_INDEX: number;
    const OT_LAYOUT_NO_SCRIPT_INDEX: number;
    const OT_LAYOUT_NO_VARIATIONS_INDEX: number;
    const OT_MAX_TAGS_PER_LANGUAGE: number;
    const OT_MAX_TAGS_PER_SCRIPT: number;
    const OT_SHAPE_BUFFER_FORMAT_SERIAL: number;
    const OT_VAR_NO_AXIS_INDEX: number;
    const UNICODE_COMBINING_CLASS_CCC133: number;
    const UNICODE_MAX: number;
    const UNICODE_MAX_DECOMPOSITION_LEN: number;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    const VERSION_STRING: string;
    function aat_layout_feature_type_get_name_id(face: face_t, feature_type: aat_layout_feature_type_t): ot_name_id_t;
    function aat_layout_feature_type_get_selector_infos(face: face_t, feature_type: aat_layout_feature_type_t, start_offset: number): [number, aat_layout_feature_selector_info_t[] | null, number];
    function aat_layout_get_feature_types(face: face_t, start_offset: number): [number, aat_layout_feature_type_t[]];
    function aat_layout_has_positioning(face: face_t): bool_t;
    function aat_layout_has_substitution(face: face_t): bool_t;
    function aat_layout_has_tracking(face: face_t): bool_t;
    function blob_copy_writable_or_fail(blob: blob_t): blob_t;
    function blob_create_from_file(file_name: string): blob_t;
    function blob_create_from_file_or_fail(file_name: string): blob_t;
    function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t;
    function blob_get_data(blob: blob_t): string[] | null;
    function blob_get_data_writable(blob: blob_t): string[];
    function blob_get_empty(): blob_t;
    function blob_get_length(blob: blob_t): number;
    function blob_is_immutable(blob: blob_t): bool_t;
    function blob_make_immutable(blob: blob_t): void;
    function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void;
    function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void;
    function buffer_add_latin1(buffer: buffer_t, text: Uint8Array | string, item_offset: number, item_length: number): void;
    function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void;
    function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void;
    function buffer_add_utf8(buffer: buffer_t, text: Uint8Array | string, item_offset: number, item_length: number): void;
    function buffer_allocation_successful(buffer: buffer_t): bool_t;
    function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void;
    function buffer_changed(buffer: buffer_t): void;
    function buffer_clear_contents(buffer: buffer_t): void;
    function buffer_create(): buffer_t;
    function buffer_create_similar(src: buffer_t): buffer_t;
    function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t | null, format: buffer_serialize_format_t): [bool_t, string];
    function buffer_deserialize_unicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [bool_t, string];
    function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t;
    function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t;
    function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t;
    function buffer_get_direction(buffer: buffer_t): direction_t;
    function buffer_get_empty(): buffer_t;
    function buffer_get_flags(buffer: buffer_t): buffer_flags_t;
    function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[];
    function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[];
    function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t;
    function buffer_get_language(buffer: buffer_t): language_t;
    function buffer_get_length(buffer: buffer_t): number;
    function buffer_get_not_found_glyph(buffer: buffer_t): codepoint_t;
    function buffer_get_not_found_variation_selector_glyph(buffer: buffer_t): codepoint_t;
    function buffer_get_random_state(buffer: buffer_t): number;
    function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t;
    function buffer_get_script(buffer: buffer_t): script_t;
    function buffer_get_segment_properties(buffer: buffer_t): segment_properties_t;
    function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t;
    function buffer_guess_segment_properties(buffer: buffer_t): void;
    function buffer_has_positions(buffer: buffer_t): bool_t;
    function buffer_normalize_glyphs(buffer: buffer_t): void;
    function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t;
    function buffer_reset(buffer: buffer_t): void;
    function buffer_reverse(buffer: buffer_t): void;
    function buffer_reverse_clusters(buffer: buffer_t): void;
    function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void;
    function buffer_serialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [number, Uint8Array, number];
    function buffer_serialize_format_from_string(str: Uint8Array | string): buffer_serialize_format_t;
    function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string;
    function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [number, Uint8Array, number];
    function buffer_serialize_list_formats(): string[];
    function buffer_serialize_unicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [number, Uint8Array, number];
    function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void;
    function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void;
    function buffer_set_direction(buffer: buffer_t, direction: direction_t): void;
    function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void;
    function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void;
    function buffer_set_language(buffer: buffer_t, language: language_t): void;
    function buffer_set_length(buffer: buffer_t, length: number): bool_t;
    function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t, destroy: destroy_func_t | null): void;
    function buffer_set_not_found_glyph(buffer: buffer_t, not_found: codepoint_t): void;
    function buffer_set_not_found_variation_selector_glyph(buffer: buffer_t, not_found_variation_selector: codepoint_t): void;
    function buffer_set_random_state(buffer: buffer_t, state: number): void;
    function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void;
    function buffer_set_script(buffer: buffer_t, script: script_t): void;
    function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void;
    function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void;
    function calloc(nmemb: bigint | number, size: bigint | number): null;
    function color_get_alpha(color: color_t): number;
    function color_get_blue(color: color_t): number;
    function color_get_green(color: color_t): number;
    function color_get_red(color: color_t): number;
    function color_line_get_color_stops(color_line: color_line_t, start: number): [number, color_stop_t[] | null];
    function color_line_get_extend(color_line: color_line_t): paint_extend_t;
    function direction_from_string(str: Uint8Array | string): direction_t;
    function direction_to_string(direction: direction_t): string;
    function draw_circle(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, cx: number, cy: number, r: number, stroke_width: number): void;
    function draw_close_path(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t): void;
    function draw_cubic_to(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, control1_x: number, control1_y: number, control2_x: number, control2_y: number, to_x: number, to_y: number): void;
    function draw_funcs_create(): draw_funcs_t;
    function draw_funcs_get_empty(): draw_funcs_t;
    function draw_funcs_is_immutable(dfuncs: draw_funcs_t): bool_t;
    function draw_funcs_make_immutable(dfuncs: draw_funcs_t): void;
    function draw_funcs_set_close_path_func(dfuncs: draw_funcs_t, func: draw_close_path_func_t, destroy: destroy_func_t | null): void;
    function draw_funcs_set_cubic_to_func(dfuncs: draw_funcs_t, func: draw_cubic_to_func_t, destroy: destroy_func_t | null): void;
    function draw_funcs_set_line_to_func(dfuncs: draw_funcs_t, func: draw_line_to_func_t, destroy: destroy_func_t | null): void;
    function draw_funcs_set_move_to_func(dfuncs: draw_funcs_t, func: draw_move_to_func_t, destroy: destroy_func_t | null): void;
    function draw_funcs_set_quadratic_to_func(dfuncs: draw_funcs_t, func: draw_quadratic_to_func_t, destroy: destroy_func_t | null): void;
    function draw_line(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, x0: number, y0: number, w0: number, x1: number, y1: number, w1: number, cap: draw_line_cap_t): void;
    function draw_line_to(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, to_x: number, to_y: number): void;
    function draw_move_to(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, to_x: number, to_y: number): void;
    function draw_quadratic_to(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, control_x: number, control_y: number, to_x: number, to_y: number): void;
    function draw_rectangle(dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, x: number, y: number, w: number, h: number, stroke_width: number): void;
    function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t;
    function face_builder_create(): face_t;
    function face_builder_sort_tables(face: face_t, tags: tag_t[]): void;
    function face_collect_nominal_glyph_mapping(face: face_t): [map_t, set_t | null];
    function face_collect_unicodes(face: face_t): set_t;
    function face_collect_variation_selectors(face: face_t): set_t;
    function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t): set_t;
    function face_count(blob: blob_t): number;
    function face_create(blob: blob_t, index: number): face_t;
    function face_create_for_tables(reference_table_func: reference_table_func_t, destroy: destroy_func_t | null): face_t;
    function face_create_from_file_or_fail(file_name: string, index: number): face_t;
    function face_create_from_file_or_fail_using(file_name: string, index: number, loader_name: string | null): face_t;
    function face_create_or_fail(blob: blob_t, index: number): face_t;
    function face_create_or_fail_using(blob: blob_t, index: number, loader_name: string | null): face_t;
    function face_get_empty(): face_t;
    function face_get_glyph_count(face: face_t): number;
    function face_get_index(face: face_t): number;
    function face_get_table_tags(face: face_t, start_offset: number): [number, tag_t[]];
    function face_get_upem(face: face_t): number;
    function face_is_immutable(face: face_t): bool_t;
    function face_list_loaders(): string[];
    function face_make_immutable(face: face_t): void;
    function face_reference_blob(face: face_t): blob_t;
    function face_reference_table(face: face_t, tag: tag_t): blob_t;
    function face_set_get_table_tags_func(face: face_t, func: get_table_tags_func_t, destroy: destroy_func_t | null): void;
    function face_set_glyph_count(face: face_t, glyph_count: number): void;
    function face_set_index(face: face_t, index: number): void;
    function face_set_upem(face: face_t, upem: number): void;
    function feature_from_string(str: Uint8Array | string): [bool_t, feature_t];
    function feature_to_string(feature: feature_t): string[];
    function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [position_t, position_t];
    function font_changed(font: font_t): void;
    function font_create(face: face_t): font_t;
    function font_create_sub_font(parent: font_t): font_t;
    function font_draw_glyph(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data: null): void;
    function font_draw_glyph_or_fail(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data: null): bool_t;
    function font_funcs_create(): font_funcs_t;
    function font_funcs_get_empty(): font_funcs_t;
    function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t;
    function font_funcs_make_immutable(ffuncs: font_funcs_t): void;
    function font_funcs_set_draw_glyph_func(ffuncs: font_funcs_t, func: font_draw_glyph_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_draw_glyph_or_fail_func(ffuncs: font_funcs_t, func: font_draw_glyph_or_fail_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_h_origins_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origins_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_shape_func(ffuncs: font_funcs_t, func: font_get_glyph_shape_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_glyph_v_origins_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origins_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_paint_glyph_func(ffuncs: font_funcs_t, func: font_paint_glyph_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_paint_glyph_or_fail_func(ffuncs: font_funcs_t, func: font_paint_glyph_or_fail_func_t, destroy: destroy_func_t | null): void;
    function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t, destroy: destroy_func_t | null): void;
    function font_get_empty(): font_t;
    function font_get_extents_for_direction(font: font_t, direction: direction_t): font_extents_t;
    function font_get_face(font: font_t): face_t;
    function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [bool_t, codepoint_t];
    function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t, position_t];
    function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [position_t, number];
    function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [bool_t, position_t, position_t];
    function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [bool_t, position_t, position_t];
    function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [bool_t, glyph_extents_t];
    function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [bool_t, glyph_extents_t];
    function font_get_glyph_from_name(font: font_t, name: string[]): [bool_t, codepoint_t];
    function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t;
    function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): position_t;
    function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t;
    function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t, position_t];
    function font_get_glyph_h_origins(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): [bool_t, position_t, position_t];
    function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [position_t, position_t];
    function font_get_glyph_name(font: font_t, glyph: codepoint_t): [bool_t, string[]];
    function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t, position_t];
    function font_get_glyph_shape(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data: null): void;
    function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t;
    function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [position_t, number];
    function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t;
    function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t, position_t];
    function font_get_glyph_v_origins(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): [bool_t, position_t, position_t];
    function font_get_h_extents(font: font_t): [bool_t, font_extents_t];
    function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [bool_t, codepoint_t];
    function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): [number, codepoint_t];
    function font_get_parent(font: font_t): font_t;
    function font_get_ppem(font: font_t): [number, number];
    function font_get_ptem(font: font_t): number;
    function font_get_scale(font: font_t): [number, number];
    function font_get_serial(font: font_t): number;
    function font_get_synthetic_bold(font: font_t): [number, number, bool_t];
    function font_get_synthetic_slant(font: font_t): number;
    function font_get_v_extents(font: font_t): [bool_t, font_extents_t];
    function font_get_var_coords_design(font: font_t): [number, number];
    function font_get_var_coords_normalized(font: font_t): [number, number];
    function font_get_var_named_instance(font: font_t): number;
    function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [bool_t, codepoint_t];
    function font_glyph_from_string(font: font_t, s: Uint8Array | string): [bool_t, codepoint_t];
    function font_glyph_to_string(font: font_t, glyph: codepoint_t): string[];
    function font_is_immutable(font: font_t): bool_t;
    function font_is_synthetic(font: font_t): bool_t;
    function font_list_funcs(): string[];
    function font_make_immutable(font: font_t): void;
    function font_paint_glyph(font: font_t, glyph: codepoint_t, pfuncs: paint_funcs_t, paint_data: null, palette_index: number, foreground: color_t): void;
    function font_paint_glyph_or_fail(font: font_t, glyph: codepoint_t, pfuncs: paint_funcs_t, paint_data: null, palette_index: number, foreground: color_t): bool_t;
    function font_set_face(font: font_t, face: face_t): void;
    function font_set_funcs_using(font: font_t, name: string): bool_t;
    function font_set_parent(font: font_t, parent: font_t): void;
    function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void;
    function font_set_ptem(font: font_t, ptem: number): void;
    function font_set_scale(font: font_t, x_scale: number, y_scale: number): void;
    function font_set_synthetic_bold(font: font_t, x_embolden: number, y_embolden: number, in_place: bool_t): void;
    function font_set_synthetic_slant(font: font_t, slant: number): void;
    function font_set_var_coords_design(font: font_t, coords: number[]): void;
    function font_set_var_coords_normalized(font: font_t, coords: number[]): void;
    function font_set_var_named_instance(font: font_t, instance_index: number): void;
    function font_set_variation(font: font_t, tag: tag_t, value: number): void;
    function font_set_variations(font: font_t, variations: variation_t[]): void;
    function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): [position_t, position_t];
    function free(ptr: null): void;
    function ft_face_create_cached(ft_face: freetype2.Face): face_t;
    function ft_face_create_from_blob_or_fail(blob: blob_t, index: number): face_t;
    function ft_face_create_from_file_or_fail(file_name: string, index: number): face_t;
    function ft_face_create_referenced(ft_face: freetype2.Face): face_t;
    function ft_font_changed(font: font_t): void;
    function ft_font_create_referenced(ft_face: freetype2.Face): font_t;
    function ft_font_get_load_flags(font: font_t): number;
    function ft_font_set_funcs(font: font_t): void;
    function ft_font_set_load_flags(font: font_t, load_flags: number): void;
    function ft_hb_font_changed(font: font_t): bool_t;
    function glib_blob_create(gbytes: GLib.Bytes | Uint8Array): blob_t;
    function glib_get_unicode_funcs(): unicode_funcs_t;
    function glib_script_from_script(script: script_t): GLib.UnicodeScript;
    function glib_script_to_script(script: GLib.UnicodeScript): script_t;
    function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t;
    function language_from_string(str: Uint8Array | string): language_t;
    function language_get_default(): language_t;
    function language_matches(language: language_t, specific: language_t): bool_t;
    function language_to_string(language: language_t): string;
    function malloc(size: bigint | number): null;
    function map_allocation_successful(map: map_t): bool_t;
    function map_clear(map: map_t): void;
    function map_copy(map: map_t): map_t;
    function map_create(): map_t;
    function map_del(map: map_t, key: codepoint_t): void;
    function map_get(map: map_t, key: codepoint_t): codepoint_t;
    function map_get_empty(): map_t;
    function map_get_population(map: map_t): number;
    function map_has(map: map_t, key: codepoint_t): bool_t;
    function map_hash(map: map_t): number;
    function map_is_empty(map: map_t): bool_t;
    function map_is_equal(map: map_t, other: map_t): bool_t;
    function map_keys(map: map_t, keys: set_t): void;
    function map_next(map: map_t, idx: number): [bool_t, number, codepoint_t, codepoint_t];
    function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void;
    function map_update(map: map_t, other: map_t): void;
    function map_values(map: map_t, values: set_t): void;
    function ot_color_get_svg_document_count(face: face_t): number;
    function ot_color_get_svg_document_glyph_range(face: face_t, svg_document_index: number): [bool_t, codepoint_t | null, codepoint_t | null];
    function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [number, ot_color_layer_t[] | null];
    function ot_color_glyph_get_svg_document_index(face: face_t, glyph: codepoint_t): [bool_t, number];
    function ot_color_glyph_has_paint(face: face_t, glyph: codepoint_t): bool_t;
    function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t;
    function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t;
    function ot_color_has_layers(face: face_t): bool_t;
    function ot_color_has_paint(face: face_t): bool_t;
    function ot_color_has_palettes(face: face_t): bool_t;
    function ot_color_has_png(face: face_t): bool_t;
    function ot_color_has_svg(face: face_t): bool_t;
    function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t;
    function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [number, color_t[] | null];
    function ot_color_palette_get_count(face: face_t): number;
    function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t;
    function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t;
    function ot_font_set_funcs(font: font_t): void;
    function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t[] | null, languages: tag_t[] | null, features: tag_t[] | null): set_t;
    function ot_layout_collect_features_map(face: face_t, table_tag: tag_t, script_index: number, language_index: number): map_t;
    function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t[] | null, languages: tag_t[] | null, features: tag_t[] | null): set_t;
    function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [number, codepoint_t[]];
    function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [number, number[]];
    function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [bool_t, ot_name_id_t | null, ot_name_id_t | null, ot_name_id_t | null, number, ot_name_id_t | null];
    function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [number, number[]];
    function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [number, number[]];
    function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [bool_t, position_t | null];
    function ot_layout_get_baseline2(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script: script_t, language: language_t | null): [bool_t, position_t | null];
    function ot_layout_get_baseline_with_fallback(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): position_t;
    function ot_layout_get_baseline_with_fallback2(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script: script_t, language: language_t | null): position_t;
    function ot_layout_get_font_extents(font: font_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [bool_t, font_extents_t | null];
    function ot_layout_get_font_extents2(font: font_t, direction: direction_t, script: script_t, language: language_t | null): [bool_t, font_extents_t | null];
    function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t;
    function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): set_t;
    function ot_layout_get_horizontal_baseline_tag_for_script(script: script_t): ot_layout_baseline_tag_t;
    function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [number, position_t[]];
    function ot_layout_get_size_params(face: face_t): [bool_t, number, number, ot_name_id_t, number, number];
    function ot_layout_has_glyph_classes(face: face_t): bool_t;
    function ot_layout_has_positioning(face: face_t): bool_t;
    function ot_layout_has_substitution(face: face_t): bool_t;
    function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [bool_t, number];
    function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [number, number[]];
    function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [number, tag_t[]];
    function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [bool_t, number, tag_t];
    function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [bool_t, number];
    function ot_layout_lookup_collect_glyph_alternates(face: face_t, lookup_index: number, alternate_count: map_t, alternate_glyphs: map_t): [bool_t, map_t, map_t];
    function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [set_t | null, set_t | null, set_t | null, set_t | null];
    function ot_layout_lookup_get_glyph_alternates(face: face_t, lookup_index: number, glyph: codepoint_t, start_offset: number): [number, codepoint_t[]];
    function ot_layout_lookup_get_optical_bound(font: font_t, lookup_index: number, direction: direction_t, glyph: codepoint_t): position_t;
    function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): set_t;
    function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t;
    function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): set_t;
    function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t;
    function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [number, tag_t[]];
    function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [bool_t, number];
    function ot_layout_script_select_language2(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [bool_t, number, tag_t];
    function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [bool_t, number, tag_t];
    function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [bool_t, number];
    function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [bool_t, number];
    function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [number, tag_t[]];
    function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number;
    function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [number, tag_t[]];
    function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [bool_t, number, tag_t | null];
    function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t;
    function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [number, ot_math_glyph_part_t[], position_t];
    function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t;
    function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t;
    function ot_math_get_glyph_kernings(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, start_offset: number): [number, ot_math_kern_entry_t[]];
    function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t;
    function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [number, ot_math_glyph_variant_t[]];
    function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t;
    function ot_math_has_data(face: face_t): bool_t;
    function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t;
    function ot_meta_get_entry_tags(face: face_t, start_offset: number): [number, ot_meta_tag_t[]];
    function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t;
    function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [bool_t, position_t | null];
    function ot_metrics_get_position_with_fallback(font: font_t, metrics_tag: ot_metrics_tag_t): position_t | null;
    function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number;
    function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
    function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
    function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number[]];
    function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number[]];
    function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [number, string[]];
    function ot_name_list_names(face: face_t): ot_name_entry_t[];
    function ot_shape_get_buffer_format_serial(): number;
    function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): set_t;
    function ot_shape_plan_collect_lookups(shape_plan: shape_plan_t, table_tag: tag_t): set_t;
    function ot_shape_plan_get_feature_tags(shape_plan: shape_plan_t, start_offset: number): [number, tag_t[]];
    function ot_tag_from_language(language: language_t): tag_t;
    function ot_tag_to_language(tag: tag_t): language_t | null;
    function ot_tag_to_script(tag: tag_t): script_t;
    function ot_tags_from_script(script: script_t): [tag_t, tag_t];
    function ot_tags_from_script_and_language(script: script_t, language: language_t | null, script_count: number | null, language_count: number | null): [number | null, tag_t | null, number | null, tag_t | null];
    function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t): [script_t | null, language_t | null];
    function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [bool_t, ot_var_axis_t];
    function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [bool_t, ot_var_axis_info_t];
    function ot_var_get_axes(face: face_t, start_offset: number): [number, ot_var_axis_t[]];
    function ot_var_get_axis_count(face: face_t): number;
    function ot_var_get_axis_infos(face: face_t, start_offset: number): [number, ot_var_axis_info_t[]];
    function ot_var_get_named_instance_count(face: face_t): number;
    function ot_var_has_data(face: face_t): bool_t;
    function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [number, number[]];
    function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t;
    function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t;
    function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): number;
    function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): number[];
    function paint_color(funcs: paint_funcs_t, paint_data: null, is_foreground: bool_t, color: color_t): void;
    function paint_color_glyph(funcs: paint_funcs_t, paint_data: null, glyph: codepoint_t, font: font_t): bool_t;
    function paint_custom_palette_color(funcs: paint_funcs_t, paint_data: null, color_index: number): [bool_t, color_t];
    function paint_funcs_create(): paint_funcs_t;
    function paint_funcs_get_empty(): paint_funcs_t;
    function paint_funcs_is_immutable(funcs: paint_funcs_t): bool_t;
    function paint_funcs_make_immutable(funcs: paint_funcs_t): void;
    function paint_funcs_set_color_func(funcs: paint_funcs_t, func: paint_color_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_color_glyph_func(funcs: paint_funcs_t, func: paint_color_glyph_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_custom_palette_color_func(funcs: paint_funcs_t, func: paint_custom_palette_color_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_image_func(funcs: paint_funcs_t, func: paint_image_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_linear_gradient_func(funcs: paint_funcs_t, func: paint_linear_gradient_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_pop_clip_func(funcs: paint_funcs_t, func: paint_pop_clip_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_pop_group_func(funcs: paint_funcs_t, func: paint_pop_group_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_pop_transform_func(funcs: paint_funcs_t, func: paint_pop_transform_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_clip_glyph_func(funcs: paint_funcs_t, func: paint_push_clip_glyph_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_clip_path_end_func(funcs: paint_funcs_t, func: paint_push_clip_path_end_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_clip_path_start_func(funcs: paint_funcs_t, func: paint_push_clip_path_start_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_clip_rectangle_func(funcs: paint_funcs_t, func: paint_push_clip_rectangle_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_group_for_func(funcs: paint_funcs_t, func: paint_push_group_for_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_group_func(funcs: paint_funcs_t, func: paint_push_group_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_push_transform_func(funcs: paint_funcs_t, func: paint_push_transform_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_radial_gradient_func(funcs: paint_funcs_t, func: paint_radial_gradient_func_t, destroy: destroy_func_t | null): void;
    function paint_funcs_set_sweep_gradient_func(funcs: paint_funcs_t, func: paint_sweep_gradient_func_t, destroy: destroy_func_t | null): void;
    function paint_image(funcs: paint_funcs_t, paint_data: null, image: blob_t, width: number, height: number, format: tag_t, slant: number, extents: glyph_extents_t | null): void;
    function paint_linear_gradient(funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void;
    function paint_normalize_color_line(stops: color_stop_t[]): [color_stop_t[], number, number];
    function paint_pop_clip(funcs: paint_funcs_t, paint_data: null): void;
    function paint_pop_group(funcs: paint_funcs_t, paint_data: null, mode: paint_composite_mode_t): void;
    function paint_pop_transform(funcs: paint_funcs_t, paint_data: null): void;
    function paint_push_clip_glyph(funcs: paint_funcs_t, paint_data: null, glyph: codepoint_t, font: font_t): void;
    function paint_push_clip_path_end(funcs: paint_funcs_t, paint_data: null): void;
    function paint_push_clip_path_start(funcs: paint_funcs_t, paint_data: null): [draw_funcs_t, null];
    function paint_push_clip_rectangle(funcs: paint_funcs_t, paint_data: null, xmin: number, ymin: number, xmax: number, ymax: number): void;
    function paint_push_font_transform(funcs: paint_funcs_t, paint_data: null, font: font_t): void;
    function paint_push_group(funcs: paint_funcs_t, paint_data: null): void;
    function paint_push_group_for(funcs: paint_funcs_t, paint_data: null, mode: paint_composite_mode_t): void;
    function paint_push_inverse_font_transform(funcs: paint_funcs_t, paint_data: null, font: font_t): void;
    function paint_push_transform(funcs: paint_funcs_t, paint_data: null, xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): void;
    function paint_radial_gradient(funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): void;
    function paint_reduce_linear_anchors(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): [number, number, number, number];
    function paint_sweep_gradient(funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, start_angle: number, end_angle: number): void;
    function paint_sweep_gradient_tiles(stops: color_stop_t[], extend: paint_extend_t, start_angle: number, end_angle: number, emit_patch: paint_sweep_gradient_tile_func_t): color_stop_t[];
    function realloc(ptr: null, size: bigint | number): null;
    function script_from_iso15924_tag(tag: tag_t): script_t;
    function script_from_string(str: Uint8Array | string): script_t;
    function script_get_horizontal_direction(script: script_t): direction_t;
    function script_to_iso15924_tag(script: script_t): tag_t;
    function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t;
    function segment_properties_hash(p: segment_properties_t): number;
    function segment_properties_overlay(p: segment_properties_t, src: segment_properties_t): void;
    function set_add(set: set_t, codepoint: codepoint_t): void;
    function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
    function set_add_sorted_array(set: set_t, sorted_codepoints: codepoint_t[]): void;
    function set_allocation_successful(set: set_t): bool_t;
    function set_clear(set: set_t): void;
    function set_copy(set: set_t): set_t;
    function set_create(): set_t;
    function set_del(set: set_t, codepoint: codepoint_t): void;
    function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
    function set_get_empty(): set_t;
    function set_get_max(set: set_t): codepoint_t;
    function set_get_min(set: set_t): codepoint_t;
    function set_get_population(set: set_t): number;
    function set_has(set: set_t, codepoint: codepoint_t): bool_t;
    function set_hash(set: set_t): number;
    function set_intersect(set: set_t, other: set_t): void;
    function set_invert(set: set_t): void;
    function set_is_empty(set: set_t): bool_t;
    function set_is_equal(set: set_t, other: set_t): bool_t;
    function set_is_inverted(set: set_t): bool_t;
    function set_is_subset(set: set_t, larger_set: set_t): bool_t;
    function set_next(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
    function set_next_many(set: set_t, codepoint: codepoint_t, out: codepoint_t[]): number;
    function set_next_range(set: set_t, last: codepoint_t): [bool_t, codepoint_t, codepoint_t];
    function set_previous(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
    function set_previous_range(set: set_t, first: codepoint_t): [bool_t, codepoint_t, codepoint_t];
    function set_set(set: set_t, other: set_t): void;
    function set_subtract(set: set_t, other: set_t): void;
    function set_symmetric_difference(set: set_t, other: set_t): void;
    function set_union(set: set_t, other: set_t): void;
    function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void;
    function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list: string[] | null): bool_t;
    function shape_list_shapers(): string[];
    function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t;
    function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t;
    function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t;
    function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t;
    function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t;
    function shape_plan_get_empty(): shape_plan_t;
    function shape_plan_get_shaper(shape_plan: shape_plan_t): string;
    function style_get_value(font: font_t, style_tag: style_tag_t): number;
    function tag_from_string(str: Uint8Array | string): tag_t;
    function tag_to_string(tag: tag_t): Uint8Array;
    function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t;
    function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [bool_t, codepoint_t];
    function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [bool_t, codepoint_t, codepoint_t];
    function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [number, codepoint_t];
    function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number;
    function unicode_funcs_create(parent: unicode_funcs_t | null): unicode_funcs_t;
    function unicode_funcs_get_default(): unicode_funcs_t;
    function unicode_funcs_get_empty(): unicode_funcs_t;
    function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t;
    function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t;
    function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void;
    function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t, destroy: destroy_func_t | null): void;
    function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t, destroy: destroy_func_t | null): void;
    function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t;
    function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t;
    function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t;
    function variation_from_string(str: Uint8Array | string): [bool_t, variation_t];
    function variation_to_string(variation: variation_t): string[];
    interface buffer_message_func_t {
        (buffer: buffer_t, font: font_t, message: string): bool_t;
    }
    interface color_line_get_color_stops_func_t {
        (color_line: color_line_t, color_line_data: null, start: number): number;
    }
    interface color_line_get_extend_func_t {
        (color_line: color_line_t, color_line_data: null): paint_extend_t;
    }
    interface destroy_func_t {
        (user_data: null): void;
    }
    interface draw_close_path_func_t {
        (dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t): void;
    }
    interface draw_cubic_to_func_t {
        (dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, control1_x: number, control1_y: number, control2_x: number, control2_y: number, to_x: number, to_y: number): void;
    }
    interface draw_line_to_func_t {
        (dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, to_x: number, to_y: number): void;
    }
    interface draw_move_to_func_t {
        (dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, to_x: number, to_y: number): void;
    }
    interface draw_quadratic_to_func_t {
        (dfuncs: draw_funcs_t, draw_data: null, st: draw_state_t, control_x: number, control_y: number, to_x: number, to_y: number): void;
    }
    interface font_draw_glyph_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data: null): void;
    }
    interface font_draw_glyph_or_fail_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data: null): bool_t;
    }
    interface font_get_font_extents_func_t {
        (font: font_t, font_data: null): bool_t;
    }
    interface font_get_glyph_advance_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t): position_t;
    }
    interface font_get_glyph_advances_func_t {
        (font: font_t, font_data: null, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): void;
    }
    interface font_get_glyph_contour_point_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, point_index: number): bool_t;
    }
    interface font_get_glyph_extents_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t): bool_t;
    }
    interface font_get_glyph_from_name_func_t {
        (font: font_t, font_data: null, name: string[]): bool_t;
    }
    interface font_get_glyph_func_t {
        (font: font_t, font_data: null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t;
    }
    interface font_get_glyph_kerning_func_t {
        (font: font_t, font_data: null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t;
    }
    interface font_get_glyph_name_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t): bool_t;
    }
    interface font_get_glyph_origin_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t): bool_t;
    }
    interface font_get_glyph_origins_func_t {
        (font: font_t, font_data: null, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): bool_t;
    }
    interface font_get_glyph_shape_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data: null): void;
    }
    interface font_get_nominal_glyph_func_t {
        (font: font_t, font_data: null, unicode: codepoint_t): bool_t;
    }
    interface font_get_nominal_glyphs_func_t {
        (font: font_t, font_data: null, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): number;
    }
    interface font_get_variation_glyph_func_t {
        (font: font_t, font_data: null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t;
    }
    interface font_paint_glyph_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, paint_funcs: paint_funcs_t, paint_data: null, palette_index: number, foreground: color_t): bool_t;
    }
    interface font_paint_glyph_or_fail_func_t {
        (font: font_t, font_data: null, glyph: codepoint_t, paint_funcs: paint_funcs_t, paint_data: null, palette_index: number, foreground: color_t): bool_t;
    }
    interface get_table_tags_func_t {
        (face: face_t, start_offset: number): number;
    }
    interface paint_color_func_t {
        (funcs: paint_funcs_t, paint_data: null, is_foreground: bool_t, color: color_t): void;
    }
    interface paint_color_glyph_func_t {
        (funcs: paint_funcs_t, paint_data: null, glyph: codepoint_t, font: font_t): bool_t;
    }
    interface paint_custom_palette_color_func_t {
        (funcs: paint_funcs_t, paint_data: null, color_index: number): bool_t;
    }
    interface paint_image_func_t {
        (funcs: paint_funcs_t, paint_data: null, image: blob_t, width: number, height: number, format: tag_t, slant: number, extents: glyph_extents_t | null): bool_t;
    }
    interface paint_linear_gradient_func_t {
        (funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void;
    }
    interface paint_pop_clip_func_t {
        (funcs: paint_funcs_t, paint_data: null): void;
    }
    interface paint_pop_group_func_t {
        (funcs: paint_funcs_t, paint_data: null, mode: paint_composite_mode_t): void;
    }
    interface paint_pop_transform_func_t {
        (funcs: paint_funcs_t, paint_data: null): void;
    }
    interface paint_push_clip_glyph_func_t {
        (funcs: paint_funcs_t, paint_data: null, glyph: codepoint_t, font: font_t): void;
    }
    interface paint_push_clip_path_end_func_t {
        (funcs: paint_funcs_t, paint_data: null): void;
    }
    interface paint_push_clip_path_start_func_t {
        (funcs: paint_funcs_t, paint_data: null): draw_funcs_t;
    }
    interface paint_push_clip_rectangle_func_t {
        (funcs: paint_funcs_t, paint_data: null, xmin: number, ymin: number, xmax: number, ymax: number): void;
    }
    interface paint_push_group_for_func_t {
        (funcs: paint_funcs_t, paint_data: null, mode: paint_composite_mode_t): void;
    }
    interface paint_push_group_func_t {
        (funcs: paint_funcs_t, paint_data: null): void;
    }
    interface paint_push_transform_func_t {
        (funcs: paint_funcs_t, paint_data: null, xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): void;
    }
    interface paint_radial_gradient_func_t {
        (funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): void;
    }
    interface paint_sweep_gradient_func_t {
        (funcs: paint_funcs_t, paint_data: null, color_line: color_line_t, x0: number, y0: number, start_angle: number, end_angle: number): void;
    }
    interface paint_sweep_gradient_tile_func_t {
        (a0: number, c0: color_t, a1: number, c1: color_t): void;
    }
    interface reference_table_func_t {
        (face: face_t, tag: tag_t): blob_t;
    }
    interface unicode_combining_class_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t;
    }
    interface unicode_compose_func_t {
        (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t;
    }
    interface unicode_decompose_compatibility_func_t {
        (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number;
    }
    interface unicode_decompose_func_t {
        (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t;
    }
    interface unicode_eastasian_width_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): number;
    }
    interface unicode_general_category_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t;
    }
    interface unicode_mirroring_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t;
    }
    interface unicode_script_func_t {
        (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t;
    }
    export namespace buffer_diff_flags_t {
        export const $gtype: GObject.GType<buffer_diff_flags_t>;
    }
    enum buffer_diff_flags_t {
        EQUAL,
        CONTENT_TYPE_MISMATCH,
        LENGTH_MISMATCH,
        NOTDEF_PRESENT,
        DOTTED_CIRCLE_PRESENT,
        CODEPOINT_MISMATCH,
        CLUSTER_MISMATCH,
        GLYPH_FLAGS_MISMATCH,
        POSITION_MISMATCH,
    }
    export namespace buffer_flags_t {
        export const $gtype: GObject.GType<buffer_flags_t>;
    }
    enum buffer_flags_t {
        DEFAULT,
        BOT,
        EOT,
        PRESERVE_DEFAULT_IGNORABLES,
        REMOVE_DEFAULT_IGNORABLES,
        DO_NOT_INSERT_DOTTED_CIRCLE,
        VERIFY,
        PRODUCE_UNSAFE_TO_CONCAT,
        PRODUCE_SAFE_TO_INSERT_TATWEEL,
        DEFINED,
    }
    export namespace buffer_serialize_flags_t {
        export const $gtype: GObject.GType<buffer_serialize_flags_t>;
    }
    enum buffer_serialize_flags_t {
        DEFAULT,
        NO_CLUSTERS,
        NO_POSITIONS,
        NO_GLYPH_NAMES,
        GLYPH_EXTENTS,
        GLYPH_FLAGS,
        NO_ADVANCES,
        DEFINED,
    }
    export namespace glyph_flags_t {
        export const $gtype: GObject.GType<glyph_flags_t>;
    }
    enum glyph_flags_t {
        UNSAFE_TO_BREAK,
        UNSAFE_TO_CONCAT,
        SAFE_TO_INSERT_TATWEEL,
        DEFINED,
    }
    export namespace ot_color_palette_flags_t {
        export const $gtype: GObject.GType<ot_color_palette_flags_t>;
    }
    enum ot_color_palette_flags_t {
        DEFAULT,
        USABLE_WITH_LIGHT_BACKGROUND,
        USABLE_WITH_DARK_BACKGROUND,
    }
    export namespace ot_math_glyph_part_flags_t {
        export const $gtype: GObject.GType<ot_math_glyph_part_flags_t>;
    }
    enum ot_math_glyph_part_flags_t {
        EXTENDER,
    }
    export namespace ot_var_axis_flags_t {
        export const $gtype: GObject.GType<ot_var_axis_flags_t>;
    }
    enum ot_var_axis_flags_t {
        HIDDEN,
    }
    class aat_layout_feature_selector_info_t {
        static $gtype: GObject.GType<aat_layout_feature_selector_info_t>;
        name_id: ot_name_id_t;
        enable: aat_layout_feature_selector_t;
        disable: aat_layout_feature_selector_t;
    }
    abstract class blob_t {
        static $gtype: GObject.GType<blob_t>;
    }
    abstract class buffer_t {
        static $gtype: GObject.GType<buffer_t>;
    }
    class color_line_t {
        static $gtype: GObject.GType<color_line_t>;
        data: null;
        get_color_stops: color_line_get_color_stops_func_t;
        get_color_stops_user_data: null;
        get_extend: color_line_get_extend_func_t;
        get_extend_user_data: null;
        reserved0: null;
        reserved1: null;
        reserved2: null;
        reserved3: null;
        reserved5: null;
        reserved6: null;
        reserved7: null;
        reserved8: null;
    }
    class color_stop_t {
        static $gtype: GObject.GType<color_stop_t>;
        offset: number;
        is_foreground: bool_t;
        color: color_t;
        constructor(properties?: Partial<{
            offset: number;
            is_foreground: bool_t;
            color: color_t;
        }>);
    }
    abstract class draw_funcs_t {
        static $gtype: GObject.GType<draw_funcs_t>;
    }
    class draw_state_t {
        static $gtype: GObject.GType<draw_state_t>;
        path_open: bool_t;
        path_start_x: number;
        path_start_y: number;
        current_x: number;
        current_y: number;
        constructor(properties?: Partial<{
            path_open: bool_t;
            path_start_x: number;
            path_start_y: number;
            current_x: number;
            current_y: number;
        }>);
    }
    abstract class face_t {
        static $gtype: GObject.GType<face_t>;
    }
    class feature_t {
        static $gtype: GObject.GType<feature_t>;
        tag: tag_t;
        value: number;
        start: number;
        end: number;
        constructor(properties?: Partial<{
            tag: tag_t;
            value: number;
            start: number;
            end: number;
        }>);
        _string(): string[];
    }
    class font_extents_t {
        static $gtype: GObject.GType<font_extents_t>;
        ascender: position_t;
        descender: position_t;
        line_gap: position_t;
        constructor(properties?: Partial<{
            ascender: position_t;
            descender: position_t;
            line_gap: position_t;
        }>);
    }
    abstract class font_funcs_t {
        static $gtype: GObject.GType<font_funcs_t>;
    }
    abstract class font_t {
        static $gtype: GObject.GType<font_t>;
    }
    class glyph_extents_t {
        static $gtype: GObject.GType<glyph_extents_t>;
        x_bearing: position_t;
        y_bearing: position_t;
        width: position_t;
        height: position_t;
        constructor(properties?: Partial<{
            x_bearing: position_t;
            y_bearing: position_t;
            width: position_t;
            height: position_t;
        }>);
    }
    class glyph_info_t {
        static $gtype: GObject.GType<glyph_info_t>;
        codepoint: codepoint_t;
        cluster: number;
        constructor(properties?: Partial<{
            codepoint: codepoint_t;
            cluster: number;
        }>);
    }
    class glyph_position_t {
        static $gtype: GObject.GType<glyph_position_t>;
        x_advance: position_t;
        y_advance: position_t;
        x_offset: position_t;
        y_offset: position_t;
        constructor(properties?: Partial<{
            x_advance: position_t;
            y_advance: position_t;
            x_offset: position_t;
            y_offset: position_t;
        }>);
    }
    abstract class language_t {
        static $gtype: GObject.GType<language_t>;
        _string(): string;
    }
    abstract class map_t {
        static $gtype: GObject.GType<map_t>;
    }
    class ot_color_layer_t {
        static $gtype: GObject.GType<ot_color_layer_t>;
        glyph: codepoint_t;
        color_index: number;
        constructor(properties?: Partial<{
            glyph: codepoint_t;
            color_index: number;
        }>);
    }
    class ot_math_glyph_part_t {
        static $gtype: GObject.GType<ot_math_glyph_part_t>;
        glyph: codepoint_t;
        start_connector_length: position_t;
        end_connector_length: position_t;
        full_advance: position_t;
        flags: ot_math_glyph_part_flags_t;
    }
    class ot_math_glyph_variant_t {
        static $gtype: GObject.GType<ot_math_glyph_variant_t>;
        glyph: codepoint_t;
        advance: position_t;
        constructor(properties?: Partial<{
            glyph: codepoint_t;
            advance: position_t;
        }>);
    }
    class ot_math_kern_entry_t {
        static $gtype: GObject.GType<ot_math_kern_entry_t>;
        max_correction_height: position_t;
        kern_value: position_t;
        constructor(properties?: Partial<{
            max_correction_height: position_t;
            kern_value: position_t;
        }>);
    }
    class ot_name_entry_t {
        static $gtype: GObject.GType<ot_name_entry_t>;
        name_id: ot_name_id_t;
    }
    class ot_var_axis_info_t {
        static $gtype: GObject.GType<ot_var_axis_info_t>;
        axis_index: number;
        tag: tag_t;
        name_id: ot_name_id_t;
        flags: ot_var_axis_flags_t;
        min_value: number;
        default_value: number;
        max_value: number;
    }
    class ot_var_axis_t {
        static $gtype: GObject.GType<ot_var_axis_t>;
        tag: tag_t;
        name_id: ot_name_id_t;
        min_value: number;
        default_value: number;
        max_value: number;
        constructor(properties?: Partial<{
            tag: tag_t;
            name_id: ot_name_id_t;
            min_value: number;
            default_value: number;
            max_value: number;
        }>);
    }
    abstract class paint_funcs_t {
        static $gtype: GObject.GType<paint_funcs_t>;
    }
    class segment_properties_t {
        static $gtype: GObject.GType<segment_properties_t>;
        direction: direction_t;
        script: script_t;
    }
    abstract class set_t {
        static $gtype: GObject.GType<set_t>;
    }
    abstract class shape_plan_t {
        static $gtype: GObject.GType<shape_plan_t>;
    }
    abstract class unicode_funcs_t {
        static $gtype: GObject.GType<unicode_funcs_t>;
    }
    class user_data_key_t {
        static $gtype: GObject.GType<user_data_key_t>;
        constructor(properties?: Partial<{}>);
    }
    class variation_t {
        static $gtype: GObject.GType<variation_t>;
        tag: tag_t;
        value: number;
        constructor(properties?: Partial<{
            tag: tag_t;
            value: number;
        }>);
        _string(): string[];
    }
    class var_int_t {
        static $gtype: GObject.GType<var_int_t>;
        u32: number;
        i32: number;
        u16: number[];
        i16: number[];
        u8: Uint8Array;
        i8: Uint8Array;
        constructor(properties?: Partial<{
            u32: number;
            i32: number;
            u16: number[];
            i16: number[];
            u8: Uint8Array;
            i8: Uint8Array;
        }>);
    }
    class var_num_t {
        static $gtype: GObject.GType<var_num_t>;
        f: number;
        u32: number;
        i32: number;
        u16: number[];
        i16: number[];
        u8: Uint8Array;
        i8: Uint8Array;
        constructor(properties?: Partial<{
            f: number;
            u32: number;
            i32: number;
            u16: number[];
            i16: number[];
            u8: Uint8Array;
            i8: Uint8Array;
        }>);
    }
    type bool_t = number;
    type codepoint_t = number;
    type color_t = number;
    type font_get_font_h_extents_func_t = font_get_font_extents_func_t;
    type font_get_font_v_extents_func_t = font_get_font_extents_func_t;
    type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t;
    type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t;
    type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t;
    type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t;
    type font_get_glyph_h_origins_func_t = font_get_glyph_origins_func_t;
    type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t;
    type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t;
    type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t;
    type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t;
    type font_get_glyph_v_origins_func_t = font_get_glyph_origins_func_t;
    type mask_t = number;
    type ot_name_id_t = number;
    type position_t = number;
    type tag_t = number;
    const __name__: string;
    const __version__: string;
}
export default HarfBuzz;
}
declare module 'gi://HarfBuzz' {
    import HarfBuzz00 from 'gi://HarfBuzz?version=0.0';
    export default HarfBuzz00;
}
