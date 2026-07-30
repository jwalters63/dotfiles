declare module 'gi://Poppler?version=0.18' {
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Poppler {
    export namespace ActionLayerAction {
        export const $gtype: GObject.GType<ActionLayerAction>;
    }
    enum ActionLayerAction {
        ON,
        OFF,
        TOGGLE,
    }
    export namespace ActionMovieOperation {
        export const $gtype: GObject.GType<ActionMovieOperation>;
    }
    enum ActionMovieOperation {
        PLAY,
        PAUSE,
        RESUME,
        STOP,
    }
    export namespace ActionType {
        export const $gtype: GObject.GType<ActionType>;
    }
    enum ActionType {
        UNKNOWN,
        NONE,
        GOTO_DEST,
        GOTO_REMOTE,
        LAUNCH,
        URI,
        NAMED,
        MOVIE,
        RENDITION,
        OCG_STATE,
        JAVASCRIPT,
        RESET_FORM,
    }
    export namespace AdditionalActionType {
        export const $gtype: GObject.GType<AdditionalActionType>;
    }
    enum AdditionalActionType {
        FIELD_MODIFIED,
        FORMAT_FIELD,
        VALIDATE_FIELD,
        CALCULATE_FIELD,
    }
    export namespace AnnotExternalDataType {
        export const $gtype: GObject.GType<AnnotExternalDataType>;
    }
    enum AnnotExternalDataType {
        "3D",
        UNKNOWN,
    }
    export namespace AnnotFreeTextQuadding {
        export const $gtype: GObject.GType<AnnotFreeTextQuadding>;
    }
    enum AnnotFreeTextQuadding {
        LEFT_JUSTIFIED,
        CENTERED,
        RIGHT_JUSTIFIED,
    }
    export namespace AnnotMarkupReplyType {
        export const $gtype: GObject.GType<AnnotMarkupReplyType>;
    }
    enum AnnotMarkupReplyType {
        R,
        GROUP,
    }
    export namespace AnnotStampIcon {
        export const $gtype: GObject.GType<AnnotStampIcon>;
    }
    enum AnnotStampIcon {
        UNKNOWN,
        APPROVED,
        AS_IS,
        CONFIDENTIAL,
        FINAL,
        EXPERIMENTAL,
        EXPIRED,
        NOT_APPROVED,
        NOT_FOR_PUBLIC_RELEASE,
        SOLD,
        DEPARTMENTAL,
        FOR_COMMENT,
        FOR_PUBLIC_RELEASE,
        TOP_SECRET,
        NONE,
    }
    export namespace AnnotTextState {
        export const $gtype: GObject.GType<AnnotTextState>;
    }
    enum AnnotTextState {
        MARKED,
        UNMARKED,
        ACCEPTED,
        REJECTED,
        CANCELLED,
        COMPLETED,
        NONE,
        UNKNOWN,
    }
    export namespace AnnotType {
        export const $gtype: GObject.GType<AnnotType>;
    }
    enum AnnotType {
        UNKNOWN,
        TEXT,
        LINK,
        FREE_TEXT,
        LINE,
        SQUARE,
        CIRCLE,
        POLYGON,
        POLY_LINE,
        HIGHLIGHT,
        UNDERLINE,
        SQUIGGLY,
        STRIKE_OUT,
        STAMP,
        CARET,
        INK,
        POPUP,
        FILE_ATTACHMENT,
        SOUND,
        MOVIE,
        WIDGET,
        SCREEN,
        PRINTER_MARK,
        TRAP_NET,
        WATERMARK,
        "3D",
    }
    export namespace Backend {
        export const $gtype: GObject.GType<Backend>;
    }
    enum Backend {
        UNKNOWN,
        SPLASH,
        CAIRO,
    }
    export namespace CertificateStatus {
        export const $gtype: GObject.GType<CertificateStatus>;
    }
    enum CertificateStatus {
        TRUSTED,
        UNTRUSTED_ISSUER,
        UNKNOWN_ISSUER,
        REVOKED,
        EXPIRED,
        GENERIC_ERROR,
        NOT_VERIFIED,
    }
    export namespace DestType {
        export const $gtype: GObject.GType<DestType>;
    }
    enum DestType {
        UNKNOWN,
        XYZ,
        FIT,
        FITH,
        FITV,
        FITR,
        FITB,
        FITBH,
        FITBV,
        NAMED,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID: number;
        static ENCRYPTED: number;
        static OPEN_FILE: number;
        static BAD_CATALOG: number;
        static DAMAGED: number;
        static SIGNING: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace FontType {
        export const $gtype: GObject.GType<FontType>;
    }
    enum FontType {
        UNKNOWN,
        TYPE1,
        TYPE1C,
        TYPE1COT,
        TYPE3,
        TRUETYPE,
        TRUETYPEOT,
        CID_TYPE0,
        CID_TYPE0C,
        CID_TYPE0COT,
        CID_TYPE2,
        CID_TYPE2OT,
    }
    export namespace FormButtonType {
        export const $gtype: GObject.GType<FormButtonType>;
    }
    enum FormButtonType {
        PUSH,
        CHECK,
        RADIO,
    }
    export namespace FormChoiceType {
        export const $gtype: GObject.GType<FormChoiceType>;
    }
    enum FormChoiceType {
        COMBO,
        LIST,
    }
    export namespace FormFieldType {
        export const $gtype: GObject.GType<FormFieldType>;
    }
    enum FormFieldType {
        UNKNOWN,
        BUTTON,
        TEXT,
        CHOICE,
        SIGNATURE,
    }
    export namespace FormTextType {
        export const $gtype: GObject.GType<FormTextType>;
    }
    enum FormTextType {
        NORMAL,
        MULTILINE,
        FILE_SELECT,
    }
    export namespace MoviePlayMode {
        export const $gtype: GObject.GType<MoviePlayMode>;
    }
    enum MoviePlayMode {
        ONCE,
        OPEN,
        REPEAT,
        PALINDROME,
    }
    export namespace PDFConformance {
        export const $gtype: GObject.GType<PDFConformance>;
    }
    enum PDFConformance {
        UNSET,
        A,
        B,
        G,
        N,
        P,
        PG,
        U,
        NONE,
    }
    class PDFPart {
        static $gtype: GObject.GType<PDFPart>;
        static UNSET: number;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
        static NONE: number;
    }
    export namespace PDFSubtype {
        export const $gtype: GObject.GType<PDFSubtype>;
    }
    enum PDFSubtype {
        UNSET,
        PDF_A,
        PDF_E,
        PDF_UA,
        PDF_VT,
        PDF_X,
        NONE,
    }
    export namespace PageLayout {
        export const $gtype: GObject.GType<PageLayout>;
    }
    enum PageLayout {
        UNSET,
        SINGLE_PAGE,
        ONE_COLUMN,
        TWO_COLUMN_LEFT,
        TWO_COLUMN_RIGHT,
        TWO_PAGE_LEFT,
        TWO_PAGE_RIGHT,
    }
    export namespace PageMode {
        export const $gtype: GObject.GType<PageMode>;
    }
    enum PageMode {
        UNSET,
        NONE,
        USE_OUTLINES,
        USE_THUMBS,
        FULL_SCREEN,
        USE_OC,
        USE_ATTACHMENTS,
    }
    export namespace PageTransitionAlignment {
        export const $gtype: GObject.GType<PageTransitionAlignment>;
    }
    enum PageTransitionAlignment {
        HORIZONTAL,
        VERTICAL,
    }
    export namespace PageTransitionDirection {
        export const $gtype: GObject.GType<PageTransitionDirection>;
    }
    enum PageTransitionDirection {
        INWARD,
        OUTWARD,
    }
    export namespace PageTransitionType {
        export const $gtype: GObject.GType<PageTransitionType>;
    }
    enum PageTransitionType {
        REPLACE,
        SPLIT,
        BLINDS,
        BOX,
        WIPE,
        DISSOLVE,
        GLITTER,
        FLY,
        PUSH,
        COVER,
        UNCOVER,
        FADE,
    }
    export namespace PrintDuplex {
        export const $gtype: GObject.GType<PrintDuplex>;
    }
    enum PrintDuplex {
        NONE,
        SIMPLEX,
        DUPLEX_FLIP_SHORT_EDGE,
        DUPLEX_FLIP_LONG_EDGE,
    }
    export namespace PrintScaling {
        export const $gtype: GObject.GType<PrintScaling>;
    }
    enum PrintScaling {
        APP_DEFAULT,
        NONE,
    }
    export namespace SelectionStyle {
        export const $gtype: GObject.GType<SelectionStyle>;
    }
    enum SelectionStyle {
        GLYPH,
        WORD,
        LINE,
    }
    export namespace SignatureStatus {
        export const $gtype: GObject.GType<SignatureStatus>;
    }
    enum SignatureStatus {
        VALID,
        INVALID,
        DIGEST_MISMATCH,
        DECODING_ERROR,
        GENERIC_ERROR,
        NOT_FOUND,
        NOT_VERIFIED,
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
    export namespace StructureBlockAlign {
        export const $gtype: GObject.GType<StructureBlockAlign>;
    }
    enum StructureBlockAlign {
        BEFORE,
        MIDDLE,
        AFTER,
        JUSTIFY,
    }
    export namespace StructureBorderStyle {
        export const $gtype: GObject.GType<StructureBorderStyle>;
    }
    enum StructureBorderStyle {
        NONE,
        HIDDEN,
        DOTTED,
        DASHED,
        SOLID,
        DOUBLE,
        GROOVE,
        INSET,
        OUTSET,
    }
    export namespace StructureElementKind {
        export const $gtype: GObject.GType<StructureElementKind>;
    }
    enum StructureElementKind {
        CONTENT,
        OBJECT_REFERENCE,
        DOCUMENT,
        PART,
        ARTICLE,
        SECTION,
        DIV,
        SPAN,
        QUOTE,
        NOTE,
        REFERENCE,
        BIBENTRY,
        CODE,
        LINK,
        ANNOT,
        BLOCKQUOTE,
        CAPTION,
        NONSTRUCT,
        TOC,
        TOC_ITEM,
        INDEX,
        PRIVATE,
        PARAGRAPH,
        HEADING,
        HEADING_1,
        HEADING_2,
        HEADING_3,
        HEADING_4,
        HEADING_5,
        HEADING_6,
        LIST,
        LIST_ITEM,
        LIST_LABEL,
        LIST_BODY,
        TABLE,
        TABLE_ROW,
        TABLE_HEADING,
        TABLE_DATA,
        TABLE_HEADER,
        TABLE_FOOTER,
        TABLE_BODY,
        RUBY,
        RUBY_BASE_TEXT,
        RUBY_ANNOT_TEXT,
        RUBY_PUNCTUATION,
        WARICHU,
        WARICHU_TEXT,
        WARICHU_PUNCTUATION,
        FIGURE,
        FORMULA,
        FORM,
    }
    export namespace StructureFormRole {
        export const $gtype: GObject.GType<StructureFormRole>;
    }
    enum StructureFormRole {
        UNDEFINED,
        RADIO_BUTTON,
        PUSH_BUTTON,
        TEXT_VALUE,
        CHECKBOX,
    }
    export namespace StructureFormState {
        export const $gtype: GObject.GType<StructureFormState>;
    }
    enum StructureFormState {
        ON,
        OFF,
        NEUTRAL,
    }
    class StructureGlyphOrientation {
        static $gtype: GObject.GType<StructureGlyphOrientation>;
        static AUTO: number;
        static "0": number;
        static "90": number;
        static "180": number;
        static "270": number;
    }
    export namespace StructureInlineAlign {
        export const $gtype: GObject.GType<StructureInlineAlign>;
    }
    enum StructureInlineAlign {
        START,
        CENTER,
        END,
    }
    export namespace StructureListNumbering {
        export const $gtype: GObject.GType<StructureListNumbering>;
    }
    enum StructureListNumbering {
        NONE,
        DISC,
        CIRCLE,
        SQUARE,
        DECIMAL,
        UPPER_ROMAN,
        LOWER_ROMAN,
        UPPER_ALPHA,
        LOWER_ALPHA,
    }
    export namespace StructurePlacement {
        export const $gtype: GObject.GType<StructurePlacement>;
    }
    enum StructurePlacement {
        BLOCK,
        INLINE,
        BEFORE,
        START,
        END,
    }
    export namespace StructureRubyAlign {
        export const $gtype: GObject.GType<StructureRubyAlign>;
    }
    enum StructureRubyAlign {
        START,
        CENTER,
        END,
        JUSTIFY,
        DISTRIBUTE,
    }
    export namespace StructureRubyPosition {
        export const $gtype: GObject.GType<StructureRubyPosition>;
    }
    enum StructureRubyPosition {
        BEFORE,
        AFTER,
        WARICHU,
        INLINE,
    }
    export namespace StructureTableScope {
        export const $gtype: GObject.GType<StructureTableScope>;
    }
    enum StructureTableScope {
        ROW,
        COLUMN,
        BOTH,
    }
    export namespace StructureTextAlign {
        export const $gtype: GObject.GType<StructureTextAlign>;
    }
    enum StructureTextAlign {
        START,
        CENTER,
        END,
        JUSTIFY,
    }
    export namespace StructureTextDecoration {
        export const $gtype: GObject.GType<StructureTextDecoration>;
    }
    enum StructureTextDecoration {
        NONE,
        UNDERLINE,
        OVERLINE,
        LINETHROUGH,
    }
    export namespace StructureWritingMode {
        export const $gtype: GObject.GType<StructureWritingMode>;
    }
    enum StructureWritingMode {
        LR_TB,
        RL_TB,
        TB_RL,
    }
    export namespace Style {
        export const $gtype: GObject.GType<Style>;
    }
    enum Style {
        NORMAL,
        OBLIQUE,
        ITALIC,
    }
    export namespace Weight {
        export const $gtype: GObject.GType<Weight>;
    }
    enum Weight {
        THIN,
        ULTRALIGHT,
        LIGHT,
        NORMAL,
        MEDIUM,
        SEMIBOLD,
        BOLD,
        ULTRABOLD,
        HEAVY,
    }
    const ANNOT_TEXT_ICON_CHECK: string;
    const ANNOT_TEXT_ICON_CIRCLE: string;
    const ANNOT_TEXT_ICON_COMMENT: string;
    const ANNOT_TEXT_ICON_CROSS: string;
    const ANNOT_TEXT_ICON_CROSS_HAIRS: string;
    const ANNOT_TEXT_ICON_HELP: string;
    const ANNOT_TEXT_ICON_INSERT: string;
    const ANNOT_TEXT_ICON_KEY: string;
    const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string;
    const ANNOT_TEXT_ICON_NOTE: string;
    const ANNOT_TEXT_ICON_PARAGRAPH: string;
    const ANNOT_TEXT_ICON_RIGHT_ARROW: string;
    const ANNOT_TEXT_ICON_RIGHT_POINTER: string;
    const ANNOT_TEXT_ICON_STAR: string;
    const ANNOT_TEXT_ICON_UP_ARROW: string;
    const ANNOT_TEXT_ICON_UP_LEFT_ARROW: string;
    const HAS_CAIRO: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function date_parse(date: string, timet: bigint | number): boolean;
    function error_quark(): GLib.Quark;
    function get_available_signing_certificates(): CertificateInfo[];
    function get_backend(): Backend;
    function get_certificate_info_by_id(id: string): CertificateInfo;
    function get_nss_dir(): string;
    function get_version(): string;
    function named_dest_from_bytestring(data: Uint8Array | string): string;
    function named_dest_to_bytestring(name: string): Uint8Array | null;
    function set_nss_dir(path: string): void;
    function set_nss_password_callback(func: NssPasswordFunc): void;
    interface AttachmentSaveFunc {
        (buf: Uint8Array): boolean;
    }
    interface MediaSaveFunc {
        (buf: Uint8Array): boolean;
    }
    interface NssPasswordFunc {
        (text: string): string;
    }
    export namespace AnnotFlag {
        export const $gtype: GObject.GType<AnnotFlag>;
    }
    enum AnnotFlag {
        UNKNOWN,
        INVISIBLE,
        HIDDEN,
        PRINT,
        NO_ZOOM,
        NO_ROTATE,
        NO_VIEW,
        READ_ONLY,
        LOCKED,
        TOGGLE_NO_VIEW,
        LOCKED_CONTENTS,
    }
    export namespace FindFlags {
        export const $gtype: GObject.GType<FindFlags>;
    }
    enum FindFlags {
        DEFAULT,
        CASE_SENSITIVE,
        BACKWARDS,
        WHOLE_WORDS_ONLY,
        IGNORE_DIACRITICS,
        MULTILINE,
    }
    export namespace Permissions {
        export const $gtype: GObject.GType<Permissions>;
    }
    enum Permissions {
        OK_TO_PRINT,
        OK_TO_MODIFY,
        OK_TO_COPY,
        OK_TO_ADD_NOTES,
        OK_TO_FILL_FORM,
        OK_TO_EXTRACT_CONTENTS,
        OK_TO_ASSEMBLE,
        OK_TO_PRINT_HIGH_RESOLUTION,
        FULL,
    }
    export namespace PrintFlags {
        export const $gtype: GObject.GType<PrintFlags>;
    }
    enum PrintFlags {
        DOCUMENT,
        MARKUP_ANNOTS,
        STAMP_ANNOTS_ONLY,
        ALL,
    }
    export namespace RenderAnnotsFlags {
        export const $gtype: GObject.GType<RenderAnnotsFlags>;
    }
    enum RenderAnnotsFlags {
        NONE,
        TEXT,
        LINK,
        FREETEXT,
        LINE,
        SQUARE,
        CIRCLE,
        POLYGON,
        POLYLINE,
        HIGHLIGHT,
        UNDERLINE,
        SQUIGGLY,
        STRIKEOUT,
        STAMP,
        CARET,
        INK,
        POPUP,
        FILEATTACHMENT,
        SOUND,
        MOVIE,
        WIDGET,
        SCREEN,
        PRINTERMARK,
        TRAPNET,
        WATERMARK,
        "3D",
        RICHMEDIA,
        PRINT_DOCUMENT,
        PRINT_MARKUP,
        PRINT_STAMP,
        PRINT_ALL,
        ALL,
    }
    export namespace SignatureValidationFlags {
        export const $gtype: GObject.GType<SignatureValidationFlags>;
    }
    enum SignatureValidationFlags {
        VALIDATE_CERTIFICATE,
        WITHOUT_OCSP_REVOCATION_CHECK,
        USE_AIA_CERTIFICATE_FETCH,
    }
    export namespace StructureGetTextFlags {
        export const $gtype: GObject.GType<StructureGetTextFlags>;
    }
    enum StructureGetTextFlags {
        NONE,
        RECURSIVE,
    }
    export namespace ViewerPreferences {
        export const $gtype: GObject.GType<ViewerPreferences>;
    }
    enum ViewerPreferences {
        UNSET,
        HIDE_TOOLBAR,
        HIDE_MENUBAR,
        HIDE_WINDOWUI,
        FIT_WINDOW,
        CENTER_WINDOW,
        DISPLAY_DOC_TITLE,
        DIRECTION_RTL,
    }
    namespace Annot {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Annot extends GObject.Object {
        static $gtype: GObject.GType<Annot>;
        $signals: Annot.SignalSignatures;
        constructor(properties?: Partial<Annot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Annot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Annot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Annot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Annot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_annot_type(): AnnotType;
        get_border_width(width: number): boolean;
        get_color(): Color;
        get_contents(): string;
        get_flags(): AnnotFlag;
        get_modified(): string;
        get_name(): string;
        get_page_index(): number;
        get_rectangle(): Rectangle;
        set_border_width(width: number): void;
        set_color(poppler_color: Color | null): void;
        set_contents(contents: string): void;
        set_flags(flags: AnnotFlag): void;
        set_rectangle(poppler_rect: Rectangle): void;
    }
    namespace AnnotCircle {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotCircle extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotCircle>;
        $signals: AnnotCircle.SignalSignatures;
        constructor(properties?: Partial<AnnotCircle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotCircle;
        connect<K extends keyof AnnotCircle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotCircle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotCircle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotCircle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotCircle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotCircle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_interior_color(): Color;
        set_interior_color(poppler_color: Color | null): void;
    }
    namespace AnnotFileAttachment {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotFileAttachment extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotFileAttachment>;
        $signals: AnnotFileAttachment.SignalSignatures;
        constructor(properties?: Partial<AnnotFileAttachment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFileAttachment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFileAttachment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotFileAttachment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotFileAttachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_attachment(): Attachment;
        get_name(): string;
    }
    namespace AnnotFreeText {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotFreeText extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotFreeText>;
        $signals: AnnotFreeText.SignalSignatures;
        constructor(properties?: Partial<AnnotFreeText.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotFreeText;
        connect<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFreeText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotFreeText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotFreeText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotFreeText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_callout_line(): AnnotCalloutLine;
        get_font_color(): Color;
        get_font_desc(): FontDescription | null;
        get_quadding(): AnnotFreeTextQuadding;
        set_font_color(color: Color): void;
        set_font_desc(font_desc: FontDescription): void;
    }
    namespace AnnotInk {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotInk extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotInk>;
        $signals: AnnotInk.SignalSignatures;
        constructor(properties?: Partial<AnnotInk.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotInk;
        connect<K extends keyof AnnotInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotInk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotInk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotInk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotInk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotInk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_draw_below(): boolean;
        get_ink_list(): Path[];
        set_draw_below(draw_below: boolean): void;
        set_ink_list(ink_list: Path[]): void;
    }
    namespace AnnotLine {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotLine extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotLine>;
        $signals: AnnotLine.SignalSignatures;
        constructor(properties?: Partial<AnnotLine.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine;
        connect<K extends keyof AnnotLine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotLine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotLine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotLine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotLine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotLine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_vertices(start: Point, end: Point): void;
    }
    namespace AnnotMarkup {
        interface SignalSignatures extends Annot.SignalSignatures {}
        interface ConstructorProps extends Annot.ConstructorProps {}
    }
    class AnnotMarkup extends Annot {
        static $gtype: GObject.GType<AnnotMarkup>;
        $signals: AnnotMarkup.SignalSignatures;
        constructor(properties?: Partial<AnnotMarkup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_date(): GLib.Date;
        get_external_data(): AnnotExternalDataType;
        get_label(): string;
        get_opacity(): number;
        get_popup_is_open(): boolean;
        get_popup_rectangle(): [boolean, Rectangle];
        get_reply_to(): AnnotMarkupReplyType;
        get_subject(): string;
        has_popup(): boolean;
        set_label(label: string | null): void;
        set_opacity(opacity: number): void;
        set_popup(popup_rect: Rectangle): void;
        set_popup_is_open(is_open: boolean): void;
        set_popup_rectangle(poppler_rect: Rectangle): void;
    }
    namespace AnnotMovie {
        interface SignalSignatures extends Annot.SignalSignatures {}
        interface ConstructorProps extends Annot.ConstructorProps {}
    }
    class AnnotMovie extends Annot {
        static $gtype: GObject.GType<AnnotMovie>;
        $signals: AnnotMovie.SignalSignatures;
        constructor(properties?: Partial<AnnotMovie.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AnnotMovie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMovie.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotMovie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotMovie.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotMovie.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotMovie.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_movie(): Movie;
        get_title(): string;
    }
    namespace AnnotScreen {
        interface SignalSignatures extends Annot.SignalSignatures {}
        interface ConstructorProps extends Annot.ConstructorProps {}
    }
    class AnnotScreen extends Annot {
        static $gtype: GObject.GType<AnnotScreen>;
        $signals: AnnotScreen.SignalSignatures;
        constructor(properties?: Partial<AnnotScreen.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AnnotScreen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotScreen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotScreen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotScreen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotScreen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotScreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(): Action;
    }
    namespace AnnotSquare {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotSquare extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotSquare>;
        $signals: AnnotSquare.SignalSignatures;
        constructor(properties?: Partial<AnnotSquare.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotSquare;
        connect<K extends keyof AnnotSquare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotSquare.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotSquare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotSquare.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotSquare.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotSquare.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_interior_color(): Color;
        set_interior_color(poppler_color: Color | null): void;
    }
    namespace AnnotStamp {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotStamp extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotStamp>;
        $signals: AnnotStamp.SignalSignatures;
        constructor(properties?: Partial<AnnotStamp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotStamp;
        connect<K extends keyof AnnotStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotStamp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotStamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotStamp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotStamp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotStamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_icon(): AnnotStampIcon;
        set_custom_image(image: cairo.Surface): boolean;
        set_icon(icon: AnnotStampIcon): void;
    }
    namespace AnnotText {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotText extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotText>;
        $signals: AnnotText.SignalSignatures;
        constructor(properties?: Partial<AnnotText.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](doc: Document, rect: Rectangle): AnnotText;
        connect<K extends keyof AnnotText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_icon(): string;
        get_is_open(): boolean;
        get_state(): AnnotTextState;
        set_icon(icon: string): void;
        set_is_open(is_open: boolean): void;
    }
    namespace AnnotTextMarkup {
        interface SignalSignatures extends AnnotMarkup.SignalSignatures {}
        interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
    }
    class AnnotTextMarkup extends AnnotMarkup {
        static $gtype: GObject.GType<AnnotTextMarkup>;
        $signals: AnnotTextMarkup.SignalSignatures;
        constructor(properties?: Partial<AnnotTextMarkup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;
        static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;
        static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;
        static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;
        connect<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotTextMarkup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotTextMarkup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotTextMarkup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotTextMarkup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_quadrilaterals(): Quadrilateral[];
        set_quadrilaterals(quadrilaterals: Quadrilateral[]): void;
    }
    namespace Attachment {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Attachment extends GObject.Object {
        static $gtype: GObject.GType<Attachment>;
        $signals: Attachment.SignalSignatures;
        name: string;
        description: string;
        size: number;
        mtime: GLib.Time;
        ctime: GLib.Time;
        constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Attachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Attachment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attachment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Attachment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Attachment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_checksum(): GLib.String;
        get_ctime(): GLib.DateTime | null;
        get_description(): string;
        get_mtime(): GLib.DateTime | null;
        get_name(): string;
        get_size(): number;
        save(filename: string): boolean;
        save_to_callback(save_func: AttachmentSaveFunc): boolean;
        save_to_fd(fd: number): boolean;
    }
    namespace Document {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::author": (pspec: GObject.ParamSpec) => void;
            "notify::creation-date": (pspec: GObject.ParamSpec) => void;
            "notify::creation-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::creator": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::format-major": (pspec: GObject.ParamSpec) => void;
            "notify::format-minor": (pspec: GObject.ParamSpec) => void;
            "notify::keywords": (pspec: GObject.ParamSpec) => void;
            "notify::linearized": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::mod-date": (pspec: GObject.ParamSpec) => void;
            "notify::mod-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::page-layout": (pspec: GObject.ParamSpec) => void;
            "notify::page-mode": (pspec: GObject.ParamSpec) => void;
            "notify::permissions": (pspec: GObject.ParamSpec) => void;
            "notify::print-duplex": (pspec: GObject.ParamSpec) => void;
            "notify::print-n-copies": (pspec: GObject.ParamSpec) => void;
            "notify::print-ncopies": (pspec: GObject.ParamSpec) => void;
            "notify::print-scaling": (pspec: GObject.ParamSpec) => void;
            "notify::producer": (pspec: GObject.ParamSpec) => void;
            "notify::subject": (pspec: GObject.ParamSpec) => void;
            "notify::subtype": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-conformance": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-part": (pspec: GObject.ParamSpec) => void;
            "notify::subtype-string": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::viewer-preferences": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            author: string;
            creation_date: number;
            creationDate: number;
            creation_datetime: GLib.DateTime;
            creationDatetime: GLib.DateTime;
            creator: string;
            format: string;
            format_major: number;
            formatMajor: number;
            format_minor: number;
            formatMinor: number;
            keywords: string;
            linearized: boolean;
            metadata: string;
            mod_date: number;
            modDate: number;
            mod_datetime: GLib.DateTime;
            modDatetime: GLib.DateTime;
            page_layout: PageLayout;
            pageLayout: PageLayout;
            page_mode: PageMode;
            pageMode: PageMode;
            permissions: Permissions;
            print_duplex: PrintDuplex;
            printDuplex: PrintDuplex;
            print_n_copies: number;
            printNCopies: number;
            print_scaling: PrintScaling;
            printScaling: PrintScaling;
            producer: string;
            subject: string;
            subtype: PDFSubtype;
            subtype_conformance: PDFConformance;
            subtypeConformance: PDFConformance;
            subtype_part: PDFPart;
            subtypePart: PDFPart;
            subtype_string: string;
            subtypeString: string;
            title: string;
            viewer_preferences: ViewerPreferences;
            viewerPreferences: ViewerPreferences;
        }
    }
    class Document extends GObject.Object {
        static $gtype: GObject.GType<Document>;
        get author(): string;
        set author(val: string);
        get creation_date(): number;
        set creation_date(val: number);
        get creationDate(): number;
        set creationDate(val: number);
        get creation_datetime(): GLib.DateTime;
        set creation_datetime(val: GLib.DateTime);
        get creationDatetime(): GLib.DateTime;
        set creationDatetime(val: GLib.DateTime);
        get creator(): string;
        set creator(val: string);
        get format(): string;
        get format_major(): number;
        get formatMajor(): number;
        get format_minor(): number;
        get formatMinor(): number;
        get keywords(): string;
        set keywords(val: string);
        get linearized(): boolean;
        get metadata(): string;
        get mod_date(): number;
        set mod_date(val: number);
        get modDate(): number;
        set modDate(val: number);
        get mod_datetime(): GLib.DateTime;
        set mod_datetime(val: GLib.DateTime);
        get modDatetime(): GLib.DateTime;
        set modDatetime(val: GLib.DateTime);
        get page_layout(): PageLayout;
        get pageLayout(): PageLayout;
        get page_mode(): PageMode;
        get pageMode(): PageMode;
        get permissions(): Permissions;
        get print_duplex(): PrintDuplex;
        get printDuplex(): PrintDuplex;
        get print_n_copies(): number;
        get printNCopies(): number;
        get print_scaling(): PrintScaling;
        get printScaling(): PrintScaling;
        get producer(): string;
        set producer(val: string);
        get subject(): string;
        set subject(val: string);
        get subtype(): PDFSubtype;
        get subtype_conformance(): PDFConformance;
        get subtypeConformance(): PDFConformance;
        get subtype_part(): PDFPart;
        get subtypePart(): PDFPart;
        get subtype_string(): string;
        get subtypeString(): string;
        get title(): string;
        set title(val: string);
        get viewer_preferences(): ViewerPreferences;
        get viewerPreferences(): ViewerPreferences;
        $signals: Document.SignalSignatures;
        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bytes(bytes: GLib.Bytes | Uint8Array, password: string | null): Document;
        static new_from_data(data: Uint8Array | string, password: string | null): Document;
        static new_from_fd(fd: number, password: string | null): Document;
        static new_from_file(uri: string, password: string | null): Document;
        static new_from_gfile(file: Gio.File, password: string | null, cancellable: Gio.Cancellable | null): Document;
        static new_from_stream(stream: Gio.InputStream, length: bigint | number, password: string | null, cancellable: Gio.Cancellable | null): Document;
        connect<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Document.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create_dests_tree(): GLib.Tree | null;
        find_dest(link_name: string): Dest;
        get_attachments(): Attachment[];
        get_author(): string;
        get_creation_date(): number;
        get_creation_date_time(): GLib.DateTime | null;
        get_creator(): string;
        get_form_field(id: number): FormField;
        get_id(): [boolean, string, string];
        get_keywords(): string;
        get_metadata(): string;
        get_modification_date(): number;
        get_modification_date_time(): GLib.DateTime | null;
        get_n_attachments(): number;
        get_n_pages(): number;
        get_n_signatures(): number;
        get_page(index: number): Page;
        get_page_by_label(label: string): Page;
        get_page_layout(): PageLayout;
        get_page_mode(): PageMode;
        get_pdf_conformance(): PDFConformance;
        get_pdf_part(): PDFPart;
        get_pdf_subtype(): PDFSubtype;
        get_pdf_subtype_string(): string | null;
        get_pdf_version(): [number, number];
        get_pdf_version_string(): string;
        get_permissions(): Permissions;
        get_print_duplex(): PrintDuplex;
        get_print_n_copies(): number;
        get_print_page_ranges(): PageRange[];
        get_print_scaling(): PrintScaling;
        get_producer(): string;
        get_signature_fields(): FormField[];
        get_subject(): string;
        get_title(): string;
        has_attachments(): boolean;
        has_javascript(): boolean;
        is_linearized(): boolean;
        reset_form(fields: string[] | null, exclude_fields: boolean): void;
        save(uri: string): boolean;
        save_a_copy(uri: string): boolean;
        save_to_fd(fd: number, include_changes: boolean): boolean;
        set_author(author: string): void;
        set_creation_date(creation_date: bigint | number): void;
        set_creation_date_time(creation_datetime: GLib.DateTime | null): void;
        set_creator(creator: string): void;
        set_keywords(keywords: string): void;
        set_modification_date(modification_date: bigint | number): void;
        set_modification_date_time(modification_datetime: GLib.DateTime | null): void;
        set_producer(producer: string): void;
        set_subject(subject: string): void;
        set_title(title: string): void;
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        sign(signing_data: SigningData, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        sign_finish(result: Gio.AsyncResult): boolean;
    }
    namespace FontInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FontInfo extends GObject.Object {
        static $gtype: GObject.GType<FontInfo>;
        $signals: FontInfo.SignalSignatures;
        constructor(properties?: Partial<FontInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](document: Document): FontInfo;
        connect<K extends keyof FontInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FontInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FontInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        free(): void;
        scan(n_pages: number): [boolean, FontsIter];
    }
    namespace FormField {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FormField extends GObject.Object {
        static $gtype: GObject.GType<FormField>;
        $signals: FormField.SignalSignatures;
        constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FormField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormField.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FormField.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormField.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        button_get_button_type(): FormButtonType;
        button_get_state(): boolean;
        button_set_state(state: boolean): void;
        choice_can_select_multiple(): boolean;
        choice_commit_on_change(): boolean;
        choice_do_spell_check(): boolean;
        choice_get_choice_type(): FormChoiceType;
        choice_get_item(index: number): string;
        choice_get_n_items(): number;
        choice_get_text(): string;
        choice_is_editable(): boolean;
        choice_is_item_selected(index: number): boolean;
        choice_select_item(index: number): void;
        choice_set_text(text: string): void;
        choice_toggle_item(index: number): void;
        choice_unselect_all(): void;
        get_action(): Action;
        get_additional_action(type: AdditionalActionType): Action;
        get_alternate_ui_name(): string;
        get_field_type(): FormFieldType;
        get_font_size(): number;
        get_id(): number;
        get_mapping_name(): string;
        get_name(): string;
        get_partial_name(): string;
        is_read_only(): boolean;
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<SignatureInfo>;
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        signature_validate_async(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SignatureInfo> | void;
        signature_validate_finish(result: Gio.AsyncResult): SignatureInfo;
        signature_validate_sync(flags: SignatureValidationFlags, cancellable: Gio.Cancellable | null): SignatureInfo;
        text_do_scroll(): boolean;
        text_do_spell_check(): boolean;
        text_get_max_len(): number;
        text_get_text(): string;
        text_get_text_type(): FormTextType;
        text_is_password(): boolean;
        text_is_rich_text(): boolean;
        text_set_text(text: string): void;
    }
    namespace Layer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Layer extends GObject.Object {
        static $gtype: GObject.GType<Layer>;
        $signals: Layer.SignalSignatures;
        constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Layer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Layer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Layer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Layer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_radio_button_group_id(): number;
        get_title(): string;
        hide(): void;
        is_parent(): boolean;
        is_visible(): boolean;
        show(): void;
    }
    namespace Media {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Media extends GObject.Object {
        static $gtype: GObject.GType<Media>;
        $signals: Media.SignalSignatures;
        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Media.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_auto_play(): boolean;
        get_filename(): string;
        get_mime_type(): string;
        get_repeat_count(): number;
        get_show_controls(): boolean;
        is_embedded(): boolean;
        save(filename: string): boolean;
        save_to_callback(save_func: MediaSaveFunc): boolean;
        save_to_fd(fd: number): boolean;
    }
    namespace Movie {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Movie extends GObject.Object {
        static $gtype: GObject.GType<Movie>;
        $signals: Movie.SignalSignatures;
        constructor(properties?: Partial<Movie.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Movie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Movie.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Movie.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Movie.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Movie.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Movie.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_aspect(width: number, height: number): void;
        get_duration(): number;
        get_filename(): string;
        get_play_mode(): MoviePlayMode;
        get_rate(): number;
        get_rotation_angle(): number;
        get_start(): number;
        get_volume(): number;
        is_synchronous(): boolean;
        need_poster(): boolean;
        show_controls(): boolean;
    }
    namespace PSFile {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PSFile extends GObject.Object {
        static $gtype: GObject.GType<PSFile>;
        $signals: PSFile.SignalSignatures;
        constructor(properties?: Partial<PSFile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](document: Document, filename: string, first_page: number, n_pages: number): PSFile;
        static new_fd(document: Document, fd: number, first_page: number, n_pages: number): PSFile;
        connect<K extends keyof PSFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PSFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PSFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PSFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PSFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PSFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        free(): void;
        set_duplex(duplex: boolean): void;
        set_paper_size(width: number, height: number): void;
    }
    namespace Page {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
        }
    }
    class Page extends GObject.Object {
        static $gtype: GObject.GType<Page>;
        get label(): string;
        $signals: Page.SignalSignatures;
        constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Page.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Page.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Page.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Page.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static free_annot_mapping(list: AnnotMapping[]): void;
        static free_form_field_mapping(list: FormFieldMapping[]): void;
        static free_image_mapping(list: ImageMapping[]): void;
        static free_link_mapping(list: LinkMapping[]): void;
        static free_text_attributes(list: TextAttributes[]): void;
        static selection_region_free(region: Rectangle[]): void;
        add_annot(annot: Annot): void;
        find_text(text: string): Rectangle[];
        find_text_with_options(text: string, options: FindFlags): Rectangle[];
        get_annot_mapping(): AnnotMapping[];
        get_bounding_box(rect: Rectangle): boolean;
        get_crop_box(): Rectangle;
        get_duration(): number;
        get_form_field_mapping(): FormFieldMapping[];
        get_image(image_id: number): cairo.Surface;
        get_image_mapping(): ImageMapping[];
        get_index(): number;
        get_label(): string;
        get_link_mapping(): LinkMapping[];
        get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region;
        get_selected_text(style: SelectionStyle, selection: Rectangle): string;
        get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[];
        get_size(): [number, number];
        get_text(): string;
        get_text_attributes(): TextAttributes[];
        get_text_attributes_for_area(area: Rectangle): TextAttributes[];
        get_text_for_area(area: Rectangle): string;
        get_text_layout(): [boolean, Rectangle[]];
        get_text_layout_for_area(area: Rectangle): [boolean, Rectangle[]];
        get_thumbnail(): cairo.Surface;
        get_thumbnail_size(): [boolean, number, number];
        get_transition(): PageTransition;
        remove_annot(annot: Annot): void;
        render(cairo: cairo.Context): void;
        render_for_printing(cairo: cairo.Context): void;
        render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void;
        render_full(cairo: cairo.Context, printing: boolean, flags: RenderAnnotsFlags): void;
        render_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, glyph_color: Color, background_color: Color): void;
        render_to_ps(ps_file: PSFile): void;
        render_transparent_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, background_color: Color, background_opacity: number): void;
    }
    namespace StructureElement {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class StructureElement extends GObject.Object {
        static $gtype: GObject.GType<StructureElement>;
        $signals: StructureElement.SignalSignatures;
        constructor(properties?: Partial<StructureElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StructureElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructureElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StructureElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructureElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StructureElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StructureElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_abbreviation(): string;
        get_actual_text(): string;
        get_alt_text(): string;
        get_background_color(): [boolean, Color];
        get_baseline_shift(): number;
        get_block_align(): StructureBlockAlign;
        get_border_color(): [boolean, Color[]];
        get_border_style(): StructureBorderStyle[];
        get_border_thickness(): [boolean, number[]];
        get_bounding_box(): [boolean, Rectangle];
        get_color(): [boolean, Color];
        get_column_count(): number;
        get_column_gaps(): number[];
        get_column_widths(): number[];
        get_end_indent(): number;
        get_form_description(): string;
        get_form_role(): StructureFormRole;
        get_form_state(): StructureFormState;
        get_glyph_orientation(): StructureGlyphOrientation;
        get_height(): number;
        get_id(): string;
        get_inline_align(): StructureInlineAlign;
        get_kind(): StructureElementKind;
        get_language(): string;
        get_line_height(): number;
        get_list_numbering(): StructureListNumbering;
        get_padding(): number[];
        get_page(): number;
        get_placement(): StructurePlacement;
        get_ruby_align(): StructureRubyAlign;
        get_ruby_position(): StructureRubyPosition;
        get_space_after(): number;
        get_space_before(): number;
        get_start_indent(): number;
        get_table_border_style(): StructureBorderStyle[];
        get_table_column_span(): number;
        get_table_headers(): string[];
        get_table_padding(): number[];
        get_table_row_span(): number;
        get_table_scope(): StructureTableScope;
        get_table_summary(): string;
        get_text(flags: StructureGetTextFlags): string;
        get_text_align(): StructureTextAlign;
        get_text_decoration_color(): [boolean, Color];
        get_text_decoration_thickness(): number;
        get_text_decoration_type(): StructureTextDecoration;
        get_text_indent(): number;
        get_text_spans(): TextSpan[];
        get_title(): string;
        get_width(): number;
        get_writing_mode(): StructureWritingMode;
        is_block(): boolean;
        is_content(): boolean;
        is_grouping(): boolean;
        is_inline(): boolean;
    }
    class ActionAny {
        static $gtype: GObject.GType<ActionAny>;
        type: ActionType;
        title: string;
    }
    class ActionGotoDest {
        static $gtype: GObject.GType<ActionGotoDest>;
        type: ActionType;
        title: string;
    }
    class ActionGotoRemote {
        static $gtype: GObject.GType<ActionGotoRemote>;
        type: ActionType;
        title: string;
        file_name: string;
    }
    class ActionJavascript {
        static $gtype: GObject.GType<ActionJavascript>;
        type: ActionType;
        title: string;
        script: string;
    }
    class ActionLaunch {
        static $gtype: GObject.GType<ActionLaunch>;
        type: ActionType;
        title: string;
        file_name: string;
        params: string;
    }
    class ActionLayer {
        static $gtype: GObject.GType<ActionLayer>;
        action: ActionLayerAction;
        layers: Layer[];
    }
    class ActionMovie {
        static $gtype: GObject.GType<ActionMovie>;
        type: ActionType;
        title: string;
        operation: ActionMovieOperation;
        movie: Movie;
    }
    class ActionNamed {
        static $gtype: GObject.GType<ActionNamed>;
        type: ActionType;
        title: string;
        named_dest: string;
    }
    class ActionOCGState {
        static $gtype: GObject.GType<ActionOCGState>;
        type: ActionType;
        title: string;
        state_list: ActionLayer[];
    }
    class ActionRendition {
        static $gtype: GObject.GType<ActionRendition>;
        type: ActionType;
        title: string;
        op: number;
        media: Media;
    }
    class ActionResetForm {
        static $gtype: GObject.GType<ActionResetForm>;
        type: ActionType;
        title: string;
        fields: string[];
        exclude: boolean;
    }
    class ActionUri {
        static $gtype: GObject.GType<ActionUri>;
        type: ActionType;
        title: string;
        uri: string;
    }
    class AnnotCalloutLine {
        static $gtype: GObject.GType<AnnotCalloutLine>;
        multiline: boolean;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;
        constructor(properties?: Partial<{
            multiline: boolean;
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            x3: number;
            y3: number;
        }>);
        static ["new"](): AnnotCalloutLine;
        copy(): AnnotCalloutLine;
        free(): void;
    }
    class AnnotMapping {
        static $gtype: GObject.GType<AnnotMapping>;
        area: Rectangle;
        annot: Annot;
        constructor(properties?: Partial<{
            area: Rectangle;
        }>);
        static ["new"](): AnnotMapping;
        copy(): AnnotMapping;
        free(): void;
    }
    type AttachmentClass = typeof Attachment;
    class CertificateInfo {
        static $gtype: GObject.GType<CertificateInfo>;
        constructor(properties?: Partial<{}>);
        static ["new"](): CertificateInfo;
        copy(): CertificateInfo;
        free(): void;
        get_expiration_time(): GLib.DateTime;
        get_id(): string;
        get_issuance_time(): GLib.DateTime;
        get_issuer_common_name(): string;
        get_issuer_email(): string;
        get_issuer_organization(): string;
        get_subject_common_name(): string;
        get_subject_email(): string;
        get_subject_organization(): string;
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
        static ["new"](): Color;
        copy(): Color;
        free(): void;
    }
    class Dest {
        static $gtype: GObject.GType<Dest>;
        type: DestType;
        page_num: number;
        left: number;
        bottom: number;
        right: number;
        top: number;
        zoom: number;
        named_dest: string;
        change_left: number;
        change_top: number;
        change_zoom: number;
        copy(): Dest;
        free(): void;
    }
    class FontDescription {
        static $gtype: GObject.GType<FontDescription>;
        font_name: string;
        size_pt: number;
        stretch: Stretch;
        weight: Weight;
        style: Style;
        constructor(font_name: string);
        static ["new"](font_name: string): FontDescription;
        copy(): FontDescription;
        free(): void;
    }
    abstract class FontsIter {
        static $gtype: GObject.GType<FontsIter>;
        copy(): FontsIter;
        free(): void;
        get_encoding(): string;
        get_file_name(): string;
        get_font_type(): FontType;
        get_full_name(): string;
        get_name(): string;
        get_substitute_name(): string;
        is_embedded(): boolean;
        is_subset(): boolean;
        next(): boolean;
    }
    class FormFieldMapping {
        static $gtype: GObject.GType<FormFieldMapping>;
        area: Rectangle;
        field: FormField;
        constructor(properties?: Partial<{
            area: Rectangle;
        }>);
        static ["new"](): FormFieldMapping;
        copy(): FormFieldMapping;
        free(): void;
    }
    class ImageMapping {
        static $gtype: GObject.GType<ImageMapping>;
        area: Rectangle;
        image_id: number;
        constructor(properties?: Partial<{
            area: Rectangle;
            image_id: number;
        }>);
        static ["new"](): ImageMapping;
        copy(): ImageMapping;
        free(): void;
    }
    class IndexIter {
        static $gtype: GObject.GType<IndexIter>;
        constructor(document: Document);
        static ["new"](document: Document): IndexIter;
        copy(): IndexIter;
        free(): void;
        get_action(): Action;
        get_child(): IndexIter;
        is_open(): boolean;
        next(): boolean;
    }
    class LayersIter {
        static $gtype: GObject.GType<LayersIter>;
        constructor(document: Document);
        static ["new"](document: Document): LayersIter;
        copy(): LayersIter;
        free(): void;
        get_child(): LayersIter;
        get_layer(): Layer;
        get_title(): string;
        next(): boolean;
    }
    class LinkMapping {
        static $gtype: GObject.GType<LinkMapping>;
        area: Rectangle;
        constructor(properties?: Partial<{
            area: Rectangle;
        }>);
        static ["new"](): LinkMapping;
        copy(): LinkMapping;
        free(): void;
    }
    class PageRange {
        static $gtype: GObject.GType<PageRange>;
        start_page: number;
        end_page: number;
        constructor(properties?: Partial<{
            start_page: number;
            end_page: number;
        }>);
    }
    class PageTransition {
        static $gtype: GObject.GType<PageTransition>;
        type: PageTransitionType;
        alignment: PageTransitionAlignment;
        direction: PageTransitionDirection;
        duration: number;
        angle: number;
        scale: number;
        rectangular: boolean;
        duration_real: number;
        constructor(properties?: Partial<{
            type: PageTransitionType;
            alignment: PageTransitionAlignment;
            direction: PageTransitionDirection;
            duration: number;
            angle: number;
            scale: number;
            rectangular: boolean;
            duration_real: number;
        }>);
        static ["new"](): PageTransition;
        copy(): PageTransition;
        free(): void;
    }
    class Path {
        static $gtype: GObject.GType<Path>;
        constructor(points: Point, n_points: bigint | number);
        static new_from_array(points: Point, n_points: bigint | number): Path;
        copy(): Path;
        free(): void;
        get_points(): Point[];
    }
    class Point {
        static $gtype: GObject.GType<Point>;
        x: number;
        y: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
        static ["new"](): Point;
        copy(): Point;
        free(): void;
    }
    class Quadrilateral {
        static $gtype: GObject.GType<Quadrilateral>;
        p1: Point;
        p2: Point;
        p3: Point;
        p4: Point;
        constructor(properties?: Partial<{
            p1: Point;
            p2: Point;
            p3: Point;
            p4: Point;
        }>);
        static ["new"](): Quadrilateral;
        copy(): Quadrilateral;
        free(): void;
    }
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(properties?: Partial<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        }>);
        static ["new"](): Rectangle;
        copy(): Rectangle;
        find_get_ignored_hyphen(): boolean;
        find_get_match_continued(): boolean;
        free(): void;
    }
    abstract class SignatureInfo {
        static $gtype: GObject.GType<SignatureInfo>;
        copy(): SignatureInfo;
        free(): void;
        get_certificate_info(): CertificateInfo;
        get_certificate_status(): CertificateStatus;
        get_local_signing_time(): GLib.DateTime;
        get_signature_status(): SignatureStatus;
        get_signer_name(): string;
    }
    class SigningData {
        static $gtype: GObject.GType<SigningData>;
        constructor(properties?: Partial<{}>);
        static ["new"](): SigningData;
        copy(): SigningData;
        free(): void;
        get_background_color(): Color;
        get_border_color(): Color;
        get_border_width(): number;
        get_certificate_info(): CertificateInfo;
        get_destination_filename(): string;
        get_document_owner_password(): string;
        get_document_user_password(): string;
        get_field_partial_name(): string;
        get_font_color(): Color;
        get_font_size(): number;
        get_image_path(): string;
        get_left_font_size(): number;
        get_location(): string;
        get_page(): number;
        get_password(): string;
        get_reason(): string;
        get_signature_rectangle(): Rectangle;
        get_signature_text(): string;
        get_signature_text_left(): string;
        set_background_color(background_color: Color): void;
        set_border_color(border_color: Color): void;
        set_border_width(border_width: number): void;
        set_certificate_info(certificate_info: CertificateInfo): void;
        set_destination_filename(filename: string): void;
        set_document_owner_password(document_owner_password: string): void;
        set_document_user_password(document_user_password: string): void;
        set_field_partial_name(field_partial_name: string): void;
        set_font_color(font_color: Color): void;
        set_font_size(font_size: number): void;
        set_image_path(image_path: string): void;
        set_left_font_size(font_size: number): void;
        set_location(location: string): void;
        set_page(page: number): void;
        set_password(password: string): void;
        set_reason(reason: string): void;
        set_signature_rectangle(signature_rect: Rectangle): void;
        set_signature_text(signature_text: string): void;
        set_signature_text_left(signature_text_left: string): void;
    }
    class StructureElementIter {
        static $gtype: GObject.GType<StructureElementIter>;
        constructor(poppler_document: Document);
        static ["new"](poppler_document: Document): StructureElementIter;
        copy(): StructureElementIter;
        free(): void;
        get_child(): StructureElementIter;
        get_element(): StructureElement;
        next(): boolean;
    }
    class TextAttributes {
        static $gtype: GObject.GType<TextAttributes>;
        font_name: string;
        font_size: number;
        is_underlined: boolean;
        color: Color;
        start_index: number;
        end_index: number;
        constructor(properties?: Partial<{
            font_name: string;
            font_size: number;
            is_underlined: boolean;
            color: Color;
            start_index: number;
            end_index: number;
        }>);
        static ["new"](): TextAttributes;
        copy(): TextAttributes;
        free(): void;
    }
    abstract class TextSpan {
        static $gtype: GObject.GType<TextSpan>;
        copy(): TextSpan;
        free(): void;
        get_color(): Color;
        get_font_name(): string;
        get_text(): string;
        is_bold_font(): boolean;
        is_fixed_width_font(): boolean;
        is_serif_font(): boolean;
    }
    class Action {
        static $gtype: GObject.GType<Action>;
        type: ActionType;
        copy(): Action;
        free(): void;
    }
    const __name__: string;
    const __version__: string;
}
export default Poppler;
}
declare module 'gi://Poppler' {
    import Poppler018 from 'gi://Poppler?version=0.18';
    export default Poppler018;
}
