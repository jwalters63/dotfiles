declare module 'gi://Atk?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace Atk {
    export namespace CoordType {
        export const $gtype: GObject.GType<CoordType>;
    }
    enum CoordType {
        SCREEN,
        WINDOW,
        PARENT,
    }
    export namespace KeyEventType {
        export const $gtype: GObject.GType<KeyEventType>;
    }
    enum KeyEventType {
        PRESS,
        RELEASE,
        LAST_DEFINED,
    }
    export namespace Layer {
        export const $gtype: GObject.GType<Layer>;
    }
    enum Layer {
        INVALID,
        BACKGROUND,
        CANVAS,
        WIDGET,
        MDI,
        POPUP,
        OVERLAY,
        WINDOW,
    }
    export namespace Live {
        export const $gtype: GObject.GType<Live>;
    }
    enum Live {
        NONE,
        POLITE,
        ASSERTIVE,
    }
    export namespace RelationType {
        export const $gtype: GObject.GType<RelationType>;
    }
    enum RelationType {
        NULL,
        CONTROLLED_BY,
        CONTROLLER_FOR,
        LABEL_FOR,
        LABELLED_BY,
        MEMBER_OF,
        NODE_CHILD_OF,
        FLOWS_TO,
        FLOWS_FROM,
        SUBWINDOW_OF,
        EMBEDS,
        EMBEDDED_BY,
        POPUP_FOR,
        PARENT_WINDOW_OF,
        DESCRIBED_BY,
        DESCRIPTION_FOR,
        NODE_PARENT_OF,
        DETAILS,
        DETAILS_FOR,
        ERROR_MESSAGE,
        ERROR_FOR,
        LAST_DEFINED,
    }
    export namespace Role {
        export const $gtype: GObject.GType<Role>;
    }
    enum Role {
        INVALID,
        ACCELERATOR_LABEL,
        ALERT,
        ANIMATION,
        ARROW,
        CALENDAR,
        CANVAS,
        CHECK_BOX,
        CHECK_MENU_ITEM,
        COLOR_CHOOSER,
        COLUMN_HEADER,
        COMBO_BOX,
        DATE_EDITOR,
        DESKTOP_ICON,
        DESKTOP_FRAME,
        DIAL,
        DIALOG,
        DIRECTORY_PANE,
        DRAWING_AREA,
        FILE_CHOOSER,
        FILLER,
        FONT_CHOOSER,
        FRAME,
        GLASS_PANE,
        HTML_CONTAINER,
        ICON,
        IMAGE,
        INTERNAL_FRAME,
        LABEL,
        LAYERED_PANE,
        LIST,
        LIST_ITEM,
        MENU,
        MENU_BAR,
        MENU_ITEM,
        OPTION_PANE,
        PAGE_TAB,
        PAGE_TAB_LIST,
        PANEL,
        PASSWORD_TEXT,
        POPUP_MENU,
        PROGRESS_BAR,
        BUTTON,
        RADIO_BUTTON,
        RADIO_MENU_ITEM,
        ROOT_PANE,
        ROW_HEADER,
        SCROLL_BAR,
        SCROLL_PANE,
        SEPARATOR,
        SLIDER,
        SPLIT_PANE,
        SPIN_BUTTON,
        STATUSBAR,
        TABLE,
        TABLE_CELL,
        TABLE_COLUMN_HEADER,
        TABLE_ROW_HEADER,
        TEAR_OFF_MENU_ITEM,
        TERMINAL,
        TEXT,
        TOGGLE_BUTTON,
        TOOL_BAR,
        TOOL_TIP,
        TREE,
        TREE_TABLE,
        UNKNOWN,
        VIEWPORT,
        WINDOW,
        HEADER,
        FOOTER,
        PARAGRAPH,
        RULER,
        APPLICATION,
        AUTOCOMPLETE,
        EDIT_BAR,
        EMBEDDED,
        ENTRY,
        CHART,
        CAPTION,
        DOCUMENT_FRAME,
        HEADING,
        PAGE,
        SECTION,
        REDUNDANT_OBJECT,
        FORM,
        LINK,
        INPUT_METHOD_WINDOW,
        TABLE_ROW,
        TREE_ITEM,
        DOCUMENT_SPREADSHEET,
        DOCUMENT_PRESENTATION,
        DOCUMENT_TEXT,
        DOCUMENT_WEB,
        DOCUMENT_EMAIL,
        COMMENT,
        LIST_BOX,
        GROUPING,
        IMAGE_MAP,
        NOTIFICATION,
        INFO_BAR,
        LEVEL_BAR,
        TITLE_BAR,
        BLOCK_QUOTE,
        AUDIO,
        VIDEO,
        DEFINITION,
        ARTICLE,
        LANDMARK,
        LOG,
        MARQUEE,
        MATH,
        RATING,
        TIMER,
        DESCRIPTION_LIST,
        DESCRIPTION_TERM,
        DESCRIPTION_VALUE,
        STATIC,
        MATH_FRACTION,
        MATH_ROOT,
        SUBSCRIPT,
        SUPERSCRIPT,
        FOOTNOTE,
        CONTENT_DELETION,
        CONTENT_INSERTION,
        MARK,
        SUGGESTION,
        PUSH_BUTTON_MENU,
        SWITCH,
        LAST_DEFINED,
        PUSH_BUTTON,
    }
    export namespace ScrollType {
        export const $gtype: GObject.GType<ScrollType>;
    }
    enum ScrollType {
        TOP_LEFT,
        BOTTOM_RIGHT,
        TOP_EDGE,
        BOTTOM_EDGE,
        LEFT_EDGE,
        RIGHT_EDGE,
        ANYWHERE,
    }
    export namespace StateType {
        export const $gtype: GObject.GType<StateType>;
    }
    enum StateType {
        INVALID,
        ACTIVE,
        ARMED,
        BUSY,
        CHECKED,
        DEFUNCT,
        EDITABLE,
        ENABLED,
        EXPANDABLE,
        EXPANDED,
        FOCUSABLE,
        FOCUSED,
        HORIZONTAL,
        ICONIFIED,
        MODAL,
        MULTI_LINE,
        MULTISELECTABLE,
        OPAQUE,
        PRESSED,
        RESIZABLE,
        SELECTABLE,
        SELECTED,
        SENSITIVE,
        SHOWING,
        SINGLE_LINE,
        STALE,
        TRANSIENT,
        VERTICAL,
        VISIBLE,
        MANAGES_DESCENDANTS,
        INDETERMINATE,
        TRUNCATED,
        REQUIRED,
        INVALID_ENTRY,
        SUPPORTS_AUTOCOMPLETION,
        SELECTABLE_TEXT,
        DEFAULT,
        ANIMATED,
        VISITED,
        CHECKABLE,
        HAS_POPUP,
        HAS_TOOLTIP,
        READ_ONLY,
        COLLAPSED,
        LAST_DEFINED,
    }
    export namespace TextAttribute {
        export const $gtype: GObject.GType<TextAttribute>;
    }
    enum TextAttribute {
        INVALID,
        LEFT_MARGIN,
        RIGHT_MARGIN,
        INDENT,
        INVISIBLE,
        EDITABLE,
        PIXELS_ABOVE_LINES,
        PIXELS_BELOW_LINES,
        PIXELS_INSIDE_WRAP,
        BG_FULL_HEIGHT,
        RISE,
        UNDERLINE,
        STRIKETHROUGH,
        SIZE,
        SCALE,
        WEIGHT,
        LANGUAGE,
        FAMILY_NAME,
        BG_COLOR,
        FG_COLOR,
        BG_STIPPLE,
        FG_STIPPLE,
        WRAP_MODE,
        DIRECTION,
        JUSTIFICATION,
        STRETCH,
        VARIANT,
        STYLE,
        TEXT_POSITION,
        MARK,
        LAST_DEFINED,
    }
    export namespace TextBoundary {
        export const $gtype: GObject.GType<TextBoundary>;
    }
    enum TextBoundary {
        CHAR,
        WORD_START,
        WORD_END,
        SENTENCE_START,
        SENTENCE_END,
        LINE_START,
        LINE_END,
    }
    export namespace TextClipType {
        export const $gtype: GObject.GType<TextClipType>;
    }
    enum TextClipType {
        NONE,
        MIN,
        MAX,
        BOTH,
    }
    export namespace TextGranularity {
        export const $gtype: GObject.GType<TextGranularity>;
    }
    enum TextGranularity {
        CHAR,
        WORD,
        SENTENCE,
        LINE,
        PARAGRAPH,
    }
    export namespace ValueType {
        export const $gtype: GObject.GType<ValueType>;
    }
    enum ValueType {
        VERY_WEAK,
        WEAK,
        ACCEPTABLE,
        STRONG,
        VERY_STRONG,
        VERY_LOW,
        LOW,
        MEDIUM,
        HIGH,
        VERY_HIGH,
        VERY_BAD,
        BAD,
        GOOD,
        VERY_GOOD,
        BEST,
        LAST_DEFINED,
    }
    const BINARY_AGE: number;
    const INTERFACE_AGE: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const VERSION_MIN_REQUIRED: number;
    function attribute_set_free(attrib_set: AttributeSet): void;
    function focus_tracker_notify(object: Object): void;
    function get_binary_age(): number;
    function get_default_registry(): Registry;
    function get_focus_object(): Object;
    function get_interface_age(): number;
    function get_major_version(): number;
    function get_micro_version(): number;
    function get_minor_version(): number;
    function get_root(): Object;
    function get_toolkit_name(): string;
    function get_toolkit_version(): string;
    function get_version(): string;
    function relation_type_for_name(name: string): RelationType;
    function relation_type_get_name(type: RelationType): string;
    function relation_type_register(name: string): RelationType;
    function remove_focus_tracker(tracker_id: number): void;
    function remove_global_event_listener(listener_id: number): void;
    function remove_key_event_listener(listener_id: number): void;
    function role_for_name(name: string): Role;
    function role_get_localized_name(role: Role): string;
    function role_get_name(role: Role): string;
    function role_register(name: string): Role;
    function state_type_for_name(name: string): StateType;
    function state_type_get_name(type: StateType): string;
    function state_type_register(name: string): StateType;
    function text_attribute_for_name(name: string): TextAttribute;
    function text_attribute_get_name(attr: TextAttribute): string;
    function text_attribute_get_value(attr: TextAttribute, index_: number): string | null;
    function text_attribute_register(name: string): TextAttribute;
    function text_free_ranges(ranges: TextRange[]): void;
    function value_type_get_localized_name(value_type: ValueType): string;
    function value_type_get_name(value_type: ValueType): string;
    interface EventListener {
        (obj: Object): void;
    }
    interface EventListenerInit {
        (): void;
    }
    interface FocusHandler {
        (object: Object, focus_in: boolean): void;
    }
    interface Function {
        (user_data: null): boolean;
    }
    interface KeySnoopFunc {
        (event: KeyEventStruct): number;
    }
    interface PropertyChangeHandler {
        (obj: Object, vals: PropertyValues): void;
    }
    export namespace HyperlinkStateFlags {
        export const $gtype: GObject.GType<HyperlinkStateFlags>;
    }
    enum HyperlinkStateFlags {
        INLINE,
    }
    namespace GObjectAccessible {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class GObjectAccessible extends Object {
        static $gtype: GObject.GType<GObjectAccessible>;
        $signals: GObjectAccessible.SignalSignatures;
        constructor(properties?: Partial<GObjectAccessible.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GObjectAccessible.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GObjectAccessible.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GObjectAccessible.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GObjectAccessible.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GObjectAccessible.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GObjectAccessible.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static for_object(obj: GObject.Object): Object;
        get_object<T = GObject.Object>(): T;
    }
    namespace Hyperlink {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "link-activated": () => void;
            "notify::end-index": (pspec: GObject.ParamSpec) => void;
            "notify::number-of-anchors": (pspec: GObject.ParamSpec) => void;
            "notify::selected-link": (pspec: GObject.ParamSpec) => void;
            "notify::start-index": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Action.ConstructorProps {
            end_index: number;
            endIndex: number;
            number_of_anchors: number;
            numberOfAnchors: number;
            selected_link: boolean;
            selectedLink: boolean;
            start_index: number;
            startIndex: number;
        }
    }
    class Hyperlink extends GObject.Object implements Action {
        static $gtype: GObject.GType<Hyperlink>;
        get end_index(): number;
        get endIndex(): number;
        get number_of_anchors(): number;
        get numberOfAnchors(): number;
        get selected_link(): boolean;
        get selectedLink(): boolean;
        get start_index(): number;
        get startIndex(): number;
        $signals: Hyperlink.SignalSignatures;
        constructor(properties?: Partial<Hyperlink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Hyperlink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Hyperlink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Hyperlink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Hyperlink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_end_index(): number;
        vfunc_get_n_anchors(): number;
        vfunc_get_object(i: number): Object;
        vfunc_get_start_index(): number;
        vfunc_get_uri(i: number): string;
        vfunc_is_selected_link(): boolean;
        vfunc_is_valid(): boolean;
        vfunc_link_activated(): void;
        vfunc_link_state(): number;
        get_end_index(): number;
        get_n_anchors(): number;
        get_object(i: number): Object;
        get_start_index(): number;
        get_uri(i: number): string;
        is_inline(): boolean;
        is_selected_link(): boolean;
        is_valid(): boolean;
        do_action(i: number): boolean;
        get_description(i: number): string | null;
        get_keybinding(i: number): string | null;
        get_localized_name(i: number): string | null;
        get_n_actions(): number;
        get_name(i: number): string | null;
        set_description(i: number, desc: string): boolean;
        vfunc_do_action(i: number): boolean;
        vfunc_get_description(i: number): string | null;
        vfunc_get_keybinding(i: number): string | null;
        vfunc_get_localized_name(i: number): string | null;
        vfunc_get_n_actions(): number;
        vfunc_get_name(i: number): string | null;
        vfunc_set_description(i: number, desc: string): boolean;
    }
    namespace Misc {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Misc extends GObject.Object {
        static $gtype: GObject.GType<Misc>;
        $signals: Misc.SignalSignatures;
        constructor(properties?: Partial<Misc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Misc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Misc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Misc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Misc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Misc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Misc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_instance(): Misc;
        vfunc_threads_enter(): void;
        vfunc_threads_leave(): void;
        threads_enter(): void;
        threads_leave(): void;
    }
    namespace NoOpObject {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps, Action.ConstructorProps, Component.ConstructorProps, Document.ConstructorProps, EditableText.ConstructorProps, Hypertext.ConstructorProps, Image.ConstructorProps, Selection.ConstructorProps, Table.ConstructorProps, TableCell.ConstructorProps, Text.ConstructorProps, Value.ConstructorProps, Window.ConstructorProps {}
    }
    class NoOpObject extends Object implements Action, Component, Document, EditableText, Hypertext, Image, Selection, Table, TableCell, Text, Value, Window {
        static $gtype: GObject.GType<NoOpObject>;
        $signals: NoOpObject.SignalSignatures;
        constructor(properties?: Partial<NoOpObject.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](obj: GObject.Object): NoOpObject;
        connect<K extends keyof NoOpObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NoOpObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NoOpObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NoOpObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NoOpObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NoOpObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        do_action(i: number): boolean;
        get_description(i: number): string | null;
        get_description(...args: never[]): any;
        get_keybinding(i: number): string | null;
        get_localized_name(i: number): string | null;
        get_n_actions(): number;
        get_name(i: number): string | null;
        get_name(...args: never[]): any;
        set_description(i: number, desc: string): boolean;
        set_description(...args: never[]): any;
        vfunc_do_action(i: number): boolean;
        vfunc_get_description(i: number): string | null;
        vfunc_get_description(...args: never[]): any;
        vfunc_get_keybinding(i: number): string | null;
        vfunc_get_localized_name(i: number): string | null;
        vfunc_get_n_actions(): number;
        vfunc_get_name(i: number): string | null;
        vfunc_get_name(...args: never[]): any;
        vfunc_set_description(i: number, desc: string): boolean;
        vfunc_set_description(...args: never[]): any;
        contains(x: number, y: number, coord_type: CoordType): boolean;
        get_alpha(): number;
        get_extents(coord_type: CoordType): [number, number, number, number];
        get_layer(): Layer;
        get_mdi_zorder(): number;
        get_position(coord_type: CoordType): [number, number];
        get_position(...args: never[]): any;
        get_size(): [number, number];
        grab_focus(): boolean;
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        remove_focus_handler(handler_id: number): void;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        set_position(x: number, y: number, coord_type: CoordType): boolean;
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Rectangle): void;
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_get_alpha(): number;
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        vfunc_get_layer(): Layer;
        vfunc_get_mdi_zorder(): number;
        vfunc_get_position(coord_type: CoordType): [number, number];
        vfunc_get_position(...args: never[]): any;
        vfunc_get_size(): [number, number];
        vfunc_grab_focus(): boolean;
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        vfunc_remove_focus_handler(handler_id: number): void;
        vfunc_scroll_to(type: ScrollType): boolean;
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_set_size(width: number, height: number): boolean;
        get_attribute_value(attribute_name: string): string | null;
        get_attributes(): AttributeSet;
        get_current_page_number(): number;
        get_document(): null;
        get_document_type(): string;
        get_locale(): string;
        get_page_count(): number;
        get_text_selections(): TextSelection[];
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        set_text_selections(selections: TextSelection[]): boolean;
        vfunc_get_current_page_number(): number;
        vfunc_get_document(): null;
        vfunc_get_document_attribute_value(attribute_name: string): string | null;
        vfunc_get_document_attributes(): AttributeSet;
        vfunc_get_document_locale(): string;
        vfunc_get_document_type(): string;
        vfunc_get_page_count(): number;
        vfunc_get_text_selections(): TextSelection[];
        vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
        vfunc_set_text_selections(selections: TextSelection[]): boolean;
        copy_text(start_pos: number, end_pos: number): void;
        cut_text(start_pos: number, end_pos: number): void;
        delete_text(start_pos: number, end_pos: number): void;
        insert_text(string: string, length: number, position: number): void;
        paste_text(position: number): void;
        set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        set_text_contents(string: string): void;
        vfunc_copy_text(start_pos: number, end_pos: number): void;
        vfunc_cut_text(start_pos: number, end_pos: number): void;
        vfunc_delete_text(start_pos: number, end_pos: number): void;
        vfunc_insert_text(string: string, length: number, position: number): void;
        vfunc_paste_text(position: number): void;
        vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        vfunc_set_text_contents(string: string): void;
        get_link(link_index: number): Hyperlink;
        get_link_index(char_index: number): number;
        get_n_links(): number;
        vfunc_get_link(link_index: number): Hyperlink;
        vfunc_get_link_index(char_index: number): number;
        vfunc_get_n_links(): number;
        vfunc_link_selected(link_index: number): void;
        get_image_description(): string;
        get_image_locale(): string | null;
        get_image_position(coord_type: CoordType): [number, number];
        get_image_size(): [number, number];
        set_image_description(description: string): boolean;
        vfunc_get_image_description(): string;
        vfunc_get_image_locale(): string | null;
        vfunc_get_image_position(coord_type: CoordType): [number, number];
        vfunc_get_image_size(): [number, number];
        vfunc_set_image_description(description: string): boolean;
        add_selection(i: number): boolean;
        clear_selection(): boolean;
        get_selection_count(): number;
        is_child_selected(i: number): boolean;
        ref_selection(i: number): Object | null;
        remove_selection(i: number): boolean;
        select_all_selection(): boolean;
        vfunc_add_selection(i: number): boolean;
        vfunc_clear_selection(): boolean;
        vfunc_get_selection_count(): number;
        vfunc_is_child_selected(i: number): boolean;
        vfunc_ref_selection(i: number): Object | null;
        vfunc_remove_selection(i: number): boolean;
        vfunc_select_all_selection(): boolean;
        vfunc_selection_changed(): void;
        add_column_selection(column: number): boolean;
        add_row_selection(row: number): boolean;
        get_caption(): Object | null;
        get_column_at_index(index_: number): number;
        get_column_description(column: number): string;
        get_column_extent_at(row: number, column: number): number;
        get_column_header(column: number): Object | null;
        get_index_at(row: number, column: number): number;
        get_n_columns(): number;
        get_n_rows(): number;
        get_row_at_index(index_: number): number;
        get_row_description(row: number): string | null;
        get_row_extent_at(row: number, column: number): number;
        get_row_header(row: number): Object | null;
        get_selected_columns(selected: number): number;
        get_selected_rows(selected: number): number;
        get_summary(): Object;
        is_column_selected(column: number): boolean;
        is_row_selected(row: number): boolean;
        is_selected(row: number, column: number): boolean;
        ref_at(row: number, column: number): Object;
        remove_column_selection(column: number): boolean;
        remove_row_selection(row: number): boolean;
        set_caption(caption: Object): void;
        set_column_description(column: number, description: string): void;
        set_column_header(column: number, header: Object): void;
        set_row_description(row: number, description: string): void;
        set_row_header(row: number, header: Object): void;
        set_summary(accessible: Object): void;
        vfunc_add_column_selection(column: number): boolean;
        vfunc_add_row_selection(row: number): boolean;
        vfunc_column_deleted(column: number, num_deleted: number): void;
        vfunc_column_inserted(column: number, num_inserted: number): void;
        vfunc_column_reordered(): void;
        vfunc_get_caption(): Object | null;
        vfunc_get_column_at_index(index_: number): number;
        vfunc_get_column_description(column: number): string;
        vfunc_get_column_extent_at(row: number, column: number): number;
        vfunc_get_column_header(column: number): Object | null;
        vfunc_get_index_at(row: number, column: number): number;
        vfunc_get_n_columns(): number;
        vfunc_get_n_rows(): number;
        vfunc_get_row_at_index(index_: number): number;
        vfunc_get_row_description(row: number): string | null;
        vfunc_get_row_extent_at(row: number, column: number): number;
        vfunc_get_row_header(row: number): Object | null;
        vfunc_get_selected_columns(selected: number): number;
        vfunc_get_selected_rows(selected: number): number;
        vfunc_get_summary(): Object;
        vfunc_is_column_selected(column: number): boolean;
        vfunc_is_row_selected(row: number): boolean;
        vfunc_is_selected(row: number, column: number): boolean;
        vfunc_model_changed(): void;
        vfunc_ref_at(row: number, column: number): Object;
        vfunc_remove_column_selection(column: number): boolean;
        vfunc_remove_row_selection(row: number): boolean;
        vfunc_row_deleted(row: number, num_deleted: number): void;
        vfunc_row_inserted(row: number, num_inserted: number): void;
        vfunc_row_reordered(): void;
        vfunc_set_caption(caption: Object): void;
        vfunc_set_column_description(column: number, description: string): void;
        vfunc_set_column_header(column: number, header: Object): void;
        vfunc_set_row_description(row: number, description: string): void;
        vfunc_set_row_header(row: number, header: Object): void;
        vfunc_set_summary(accessible: Object): void;
        get_column_header_cells(): Object[];
        get_column_span(): number;
        get_row_column_span(): [boolean, number, number, number, number];
        get_row_header_cells(): Object[];
        get_row_span(): number;
        get_table(): Object;
        vfunc_get_column_header_cells(): Object[];
        vfunc_get_column_span(): number;
        vfunc_get_row_column_span(): [boolean, number, number, number, number];
        vfunc_get_row_header_cells(): Object[];
        vfunc_get_row_span(): number;
        vfunc_get_table(): Object;
        get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[];
        get_caret_offset(): number;
        get_character_at_offset(offset: number): string;
        get_character_count(): number;
        get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
        get_default_attributes(): AttributeSet;
        get_n_selections(): number;
        get_offset_at_point(x: number, y: number, coords: CoordType): number;
        get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
        get_run_attributes(offset: number): [AttributeSet, number, number];
        get_selection(selection_num: number): [string, number, number];
        get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
        get_text(start_offset: number, end_offset: number): string;
        get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
        set_caret_offset(offset: number): boolean;
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        vfunc_get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[];
        vfunc_get_caret_offset(): number;
        vfunc_get_character_at_offset(offset: number): string;
        vfunc_get_character_count(): number;
        vfunc_get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
        vfunc_get_default_attributes(): AttributeSet;
        vfunc_get_n_selections(): number;
        vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
        vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
        vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
        vfunc_get_selection(selection_num: number): [string, number, number];
        vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
        vfunc_get_text(start_offset: number, end_offset: number): string;
        vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
        vfunc_set_caret_offset(offset: number): boolean;
        vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        vfunc_text_attributes_changed(): void;
        vfunc_text_caret_moved(location: number): void;
        vfunc_text_changed(position: number, length: number): void;
        vfunc_text_selection_changed(): void;
        get_current_value(): unknown;
        get_increment(): number;
        get_maximum_value(): unknown;
        get_minimum_increment(): unknown;
        get_minimum_value(): unknown;
        get_range(): Range | null;
        get_sub_ranges(): Range[];
        get_value_and_text(): [number, string];
        set_current_value(value: GObject.Value | any): boolean;
        set_value(new_value: number): void;
        vfunc_get_current_value(): GObject.Value | any;
        vfunc_get_increment(): number;
        vfunc_get_maximum_value(): GObject.Value | any;
        vfunc_get_minimum_increment(): GObject.Value | any;
        vfunc_get_minimum_value(): GObject.Value | any;
        vfunc_get_range(): Range | null;
        vfunc_get_sub_ranges(): Range[];
        vfunc_get_value_and_text(): [number, string];
        vfunc_set_current_value(value: unknown): boolean;
        vfunc_set_value(new_value: number): void;
    }
    namespace NoOpObjectFactory {
        interface SignalSignatures extends ObjectFactory.SignalSignatures {}
        interface ConstructorProps extends ObjectFactory.ConstructorProps {}
    }
    class NoOpObjectFactory extends ObjectFactory {
        static $gtype: GObject.GType<NoOpObjectFactory>;
        $signals: NoOpObjectFactory.SignalSignatures;
        constructor(properties?: Partial<NoOpObjectFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): NoOpObjectFactory;
        connect<K extends keyof NoOpObjectFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NoOpObjectFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NoOpObjectFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NoOpObjectFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NoOpObjectFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NoOpObjectFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "active-descendant-changed": (arg0: Object) => void;
            announcement: (arg0: string) => void;
            "attribute-changed": (arg0: string, arg1: string) => void;
            "children-changed": (arg0: number, arg1: Object) => void;
            "focus-event": (arg0: boolean) => void;
            notification: (arg0: string, arg1: number) => void;
            "property-change": (arg0: PropertyValues) => void;
            "state-change": (arg0: string, arg1: boolean) => void;
            "visible-data-changed": () => void;
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
            "active-descendant-changed::accessible-component-layer": (arg0: Object) => void;
            "active-descendant-changed::accessible-component-mdi-zorder": (arg0: Object) => void;
            "active-descendant-changed::accessible-description": (arg0: Object) => void;
            "active-descendant-changed::accessible-help-text": (arg0: Object) => void;
            "active-descendant-changed::accessible-hypertext-nlinks": (arg0: Object) => void;
            "active-descendant-changed::accessible-id": (arg0: Object) => void;
            "active-descendant-changed::accessible-name": (arg0: Object) => void;
            "active-descendant-changed::accessible-parent": (arg0: Object) => void;
            "active-descendant-changed::accessible-role": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-caption": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-caption-object": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-column-description": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-column-header": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-row-description": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-row-header": (arg0: Object) => void;
            "active-descendant-changed::accessible-table-summary": (arg0: Object) => void;
            "active-descendant-changed::accessible-value": (arg0: Object) => void;
            [key: `active-descendant-changed::${string}`]: (arg0: Object) => void;
            "children-changed::accessible-component-layer": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-component-mdi-zorder": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-description": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-help-text": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-hypertext-nlinks": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-id": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-name": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-parent": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-role": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-caption": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-caption-object": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-column-description": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-column-header": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-row-description": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-row-header": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-table-summary": (arg0: number, arg1: Object) => void;
            "children-changed::accessible-value": (arg0: number, arg1: Object) => void;
            [key: `children-changed::${string}`]: (arg0: number, arg1: Object) => void;
            "property-change::accessible-component-layer": (arg0: PropertyValues) => void;
            "property-change::accessible-component-mdi-zorder": (arg0: PropertyValues) => void;
            "property-change::accessible-description": (arg0: PropertyValues) => void;
            "property-change::accessible-help-text": (arg0: PropertyValues) => void;
            "property-change::accessible-hypertext-nlinks": (arg0: PropertyValues) => void;
            "property-change::accessible-id": (arg0: PropertyValues) => void;
            "property-change::accessible-name": (arg0: PropertyValues) => void;
            "property-change::accessible-parent": (arg0: PropertyValues) => void;
            "property-change::accessible-role": (arg0: PropertyValues) => void;
            "property-change::accessible-table-caption": (arg0: PropertyValues) => void;
            "property-change::accessible-table-caption-object": (arg0: PropertyValues) => void;
            "property-change::accessible-table-column-description": (arg0: PropertyValues) => void;
            "property-change::accessible-table-column-header": (arg0: PropertyValues) => void;
            "property-change::accessible-table-row-description": (arg0: PropertyValues) => void;
            "property-change::accessible-table-row-header": (arg0: PropertyValues) => void;
            "property-change::accessible-table-summary": (arg0: PropertyValues) => void;
            "property-change::accessible-value": (arg0: PropertyValues) => void;
            [key: `property-change::${string}`]: (arg0: PropertyValues) => void;
            "state-change::accessible-component-layer": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-component-mdi-zorder": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-description": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-help-text": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-hypertext-nlinks": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-id": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-name": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-parent": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-role": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-caption": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-caption-object": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-column-description": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-column-header": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-row-description": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-row-header": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-table-summary": (arg0: string, arg1: boolean) => void;
            "state-change::accessible-value": (arg0: string, arg1: boolean) => void;
            [key: `state-change::${string}`]: (arg0: string, arg1: boolean) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accessible_component_layer: number;
            accessibleComponentLayer: number;
            accessible_component_mdi_zorder: number;
            accessibleComponentMdiZorder: number;
            accessible_description: string;
            accessibleDescription: string;
            accessible_help_text: string;
            accessibleHelpText: string;
            accessible_hypertext_nlinks: number;
            accessibleHypertextNlinks: number;
            accessible_id: string;
            accessibleId: string;
            accessible_name: string;
            accessibleName: string;
            accessible_parent: Object;
            accessibleParent: Object;
            accessible_role: Role;
            accessibleRole: Role;
            accessible_table_caption: string;
            accessibleTableCaption: string;
            accessible_table_caption_object: Object;
            accessibleTableCaptionObject: Object;
            accessible_table_column_description: string;
            accessibleTableColumnDescription: string;
            accessible_table_column_header: Object;
            accessibleTableColumnHeader: Object;
            accessible_table_row_description: string;
            accessibleTableRowDescription: string;
            accessible_table_row_header: Object;
            accessibleTableRowHeader: Object;
            accessible_table_summary: Object;
            accessibleTableSummary: Object;
            accessible_value: number;
            accessibleValue: number;
        }
    }
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        get accessible_component_layer(): number;
        get accessibleComponentLayer(): number;
        get accessible_component_mdi_zorder(): number;
        get accessibleComponentMdiZorder(): number;
        get accessible_description(): string;
        set accessible_description(val: string);
        get accessibleDescription(): string;
        set accessibleDescription(val: string);
        get accessible_help_text(): string;
        set accessible_help_text(val: string);
        get accessibleHelpText(): string;
        set accessibleHelpText(val: string);
        get accessible_hypertext_nlinks(): number;
        get accessibleHypertextNlinks(): number;
        get accessible_id(): string;
        set accessible_id(val: string);
        get accessibleId(): string;
        set accessibleId(val: string);
        get accessible_name(): string;
        set accessible_name(val: string);
        get accessibleName(): string;
        set accessibleName(val: string);
        get accessible_parent(): Object;
        set accessible_parent(val: Object);
        get accessibleParent(): Object;
        set accessibleParent(val: Object);
        get accessible_role(): Role;
        set accessible_role(val: Role);
        get accessibleRole(): Role;
        set accessibleRole(val: Role);
        get accessible_table_caption(): string;
        set accessible_table_caption(val: string);
        get accessibleTableCaption(): string;
        set accessibleTableCaption(val: string);
        get accessible_table_caption_object(): Object;
        set accessible_table_caption_object(val: Object);
        get accessibleTableCaptionObject(): Object;
        set accessibleTableCaptionObject(val: Object);
        get accessible_table_column_description(): string;
        set accessible_table_column_description(val: string);
        get accessibleTableColumnDescription(): string;
        set accessibleTableColumnDescription(val: string);
        get accessible_table_column_header(): Object;
        set accessible_table_column_header(val: Object);
        get accessibleTableColumnHeader(): Object;
        set accessibleTableColumnHeader(val: Object);
        get accessible_table_row_description(): string;
        set accessible_table_row_description(val: string);
        get accessibleTableRowDescription(): string;
        set accessibleTableRowDescription(val: string);
        get accessible_table_row_header(): Object;
        set accessible_table_row_header(val: Object);
        get accessibleTableRowHeader(): Object;
        set accessibleTableRowHeader(val: Object);
        get accessible_table_summary(): Object;
        set accessible_table_summary(val: Object);
        get accessibleTableSummary(): Object;
        set accessibleTableSummary(val: Object);
        get accessible_value(): number;
        set accessible_value(val: number);
        get accessibleValue(): number;
        set accessibleValue(val: number);
        $signals: Object.SignalSignatures;
        description: string;
        name: string;
        role: Role;
        relation_set: RelationSet;
        layer: Layer;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_active_descendant_changed(child: null): void;
        vfunc_children_changed(change_index: number, changed_child: null): void;
        vfunc_focus_event(focus_in: boolean): void;
        vfunc_get_attributes(): AttributeSet;
        vfunc_get_description(): string;
        vfunc_get_index_in_parent(): number;
        vfunc_get_layer(): Layer;
        vfunc_get_mdi_zorder(): number;
        vfunc_get_n_children(): number;
        vfunc_get_name(): string;
        vfunc_get_object_locale(): string;
        vfunc_get_parent(): Object;
        vfunc_get_role(): Role;
        vfunc_initialize(data: null): void;
        vfunc_property_change(values: PropertyValues): void;
        vfunc_ref_relation_set(): RelationSet;
        vfunc_ref_state_set(): StateSet;
        vfunc_remove_property_change_handler(handler_id: number): void;
        vfunc_set_description(description: string): void;
        vfunc_set_name(name: string): void;
        vfunc_set_parent(parent: Object): void;
        vfunc_set_role(role: Role): void;
        vfunc_state_change(name: string, state_set: boolean): void;
        vfunc_visible_data_changed(): void;
        add_relationship(relationship: RelationType, target: Object): boolean;
        get_accessible_id(): string;
        get_attributes(): AttributeSet;
        get_description(): string;
        get_help_text(): string;
        get_index_in_parent(): number;
        get_layer(): Layer;
        get_mdi_zorder(): number;
        get_n_accessible_children(): number;
        get_name(): string;
        get_object_locale(): string;
        get_parent(): Object;
        get_role(): Role;
        initialize(data: null): void;
        notify_state_change(state: State, value: boolean): void;
        peek_parent(): Object;
        ref_accessible_child(i: number): Object;
        ref_relation_set(): RelationSet;
        ref_state_set(): StateSet;
        remove_property_change_handler(handler_id: number): void;
        remove_relationship(relationship: RelationType, target: Object): boolean;
        set_accessible_id(id: string): void;
        set_description(description: string): void;
        set_help_text(help_text: string): void;
        set_name(name: string): void;
        set_parent(parent: Object): void;
        set_role(role: Role): void;
    }
    namespace ObjectFactory {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ObjectFactory extends GObject.Object {
        static $gtype: GObject.GType<ObjectFactory>;
        $signals: ObjectFactory.SignalSignatures;
        constructor(properties?: Partial<ObjectFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ObjectFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_invalidate(): void;
        create_accessible(obj: GObject.Object): Object;
        get_accessible_type(): GObject.GType;
        invalidate(): void;
    }
    namespace Plug {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }
    class Plug extends Object implements Component {
        static $gtype: GObject.GType<Plug>;
        $signals: Plug.SignalSignatures;
        constructor(properties?: Partial<Plug.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Plug;
        connect<K extends keyof Plug.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plug.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plug.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Plug.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_object_id(): string;
        get_id(): string;
        set_child(child: Object): void;
        contains(x: number, y: number, coord_type: CoordType): boolean;
        get_alpha(): number;
        get_extents(coord_type: CoordType): [number, number, number, number];
        get_layer(): Layer;
        get_mdi_zorder(): number;
        get_position(coord_type: CoordType): [number, number];
        get_size(): [number, number];
        grab_focus(): boolean;
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        remove_focus_handler(handler_id: number): void;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        set_position(x: number, y: number, coord_type: CoordType): boolean;
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Rectangle): void;
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_get_alpha(): number;
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        vfunc_get_layer(): Layer;
        vfunc_get_mdi_zorder(): number;
        vfunc_get_position(coord_type: CoordType): [number, number];
        vfunc_get_size(): [number, number];
        vfunc_grab_focus(): boolean;
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        vfunc_remove_focus_handler(handler_id: number): void;
        vfunc_scroll_to(type: ScrollType): boolean;
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_set_size(width: number, height: number): boolean;
    }
    namespace Registry {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Registry extends GObject.Object {
        static $gtype: GObject.GType<Registry>;
        $signals: Registry.SignalSignatures;
        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Registry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_factory(type: GObject.GType): ObjectFactory;
        get_factory_type(type: GObject.GType): GObject.GType;
        set_factory_type(type: GObject.GType, factory_type: GObject.GType): void;
    }
    namespace Relation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::relation-type": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            relation_type: RelationType;
            relationType: RelationType;
            target: GObject.ValueArray;
        }
    }
    class Relation extends GObject.Object {
        static $gtype: GObject.GType<Relation>;
        get relation_type(): RelationType;
        set relation_type(val: RelationType);
        get relationType(): RelationType;
        set relationType(val: RelationType);
        get target(): GObject.ValueArray;
        set target(val: GObject.ValueArray);
        $signals: Relation.SignalSignatures;
        relationship: RelationType;
        constructor(properties?: Partial<Relation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](targets: Object[], relationship: RelationType): Relation;
        connect<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Relation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Relation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_target(target: Object): void;
        get_relation_type(): RelationType;
        get_target(): Object[];
        remove_target(target: Object): boolean;
    }
    namespace RelationSet {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class RelationSet extends GObject.Object {
        static $gtype: GObject.GType<RelationSet>;
        $signals: RelationSet.SignalSignatures;
        relations: null[];
        constructor(properties?: Partial<RelationSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): RelationSet;
        connect<K extends keyof RelationSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelationSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RelationSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelationSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RelationSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RelationSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(relation: Relation): void;
        add_relation_by_type(relationship: RelationType, target: Object): void;
        contains(relationship: RelationType): boolean;
        contains_target(relationship: RelationType, target: Object): boolean;
        get_n_relations(): number;
        get_relation(i: number): Relation;
        get_relation_by_type(relationship: RelationType): Relation;
        remove(relation: Relation): void;
    }
    namespace Socket {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::accessible-component-layer": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-component-mdi-zorder": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-help-text": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-hypertext-nlinks": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-id": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-name": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-parent": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-caption-object": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-column-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-description": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-row-header": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-table-summary": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }
    class Socket extends Object implements Component {
        static $gtype: GObject.GType<Socket>;
        $signals: Socket.SignalSignatures;
        constructor(properties?: Partial<Socket.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Socket;
        connect<K extends keyof Socket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Socket.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Socket.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Socket.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Socket.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_embed(plug_id: string): void;
        embed(plug_id: string): void;
        is_occupied(): boolean;
        contains(x: number, y: number, coord_type: CoordType): boolean;
        get_alpha(): number;
        get_extents(coord_type: CoordType): [number, number, number, number];
        get_layer(): Layer;
        get_mdi_zorder(): number;
        get_position(coord_type: CoordType): [number, number];
        get_size(): [number, number];
        grab_focus(): boolean;
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        remove_focus_handler(handler_id: number): void;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        set_position(x: number, y: number, coord_type: CoordType): boolean;
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Rectangle): void;
        vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_get_alpha(): number;
        vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
        vfunc_get_layer(): Layer;
        vfunc_get_mdi_zorder(): number;
        vfunc_get_position(coord_type: CoordType): [number, number];
        vfunc_get_size(): [number, number];
        vfunc_grab_focus(): boolean;
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        vfunc_remove_focus_handler(handler_id: number): void;
        vfunc_scroll_to(type: ScrollType): boolean;
        vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
        vfunc_set_size(width: number, height: number): boolean;
    }
    namespace StateSet {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class StateSet extends GObject.Object {
        static $gtype: GObject.GType<StateSet>;
        $signals: StateSet.SignalSignatures;
        constructor(properties?: Partial<StateSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StateSet;
        connect<K extends keyof StateSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StateSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StateSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StateSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_state(type: StateType): boolean;
        add_states(types: StateType[]): void;
        and_sets(compare_set: StateSet): StateSet;
        clear_states(): void;
        contains_state(type: StateType): boolean;
        contains_states(types: StateType[]): boolean;
        is_empty(): boolean;
        or_sets(compare_set: StateSet): StateSet | null;
        remove_state(type: StateType): boolean;
        xor_sets(compare_set: StateSet): StateSet;
    }
    namespace Util {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Util extends GObject.Object {
        static $gtype: GObject.GType<Util>;
        $signals: Util.SignalSignatures;
        constructor(properties?: Partial<Util.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Util.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Util.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Util.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Util.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Util.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type ActionIface = typeof Action;
    class Attribute {
        static $gtype: GObject.GType<Attribute>;
        name: string;
        value: string;
        constructor(properties?: Partial<{
            name: string;
            value: string;
        }>);
        static set_free(attrib_set: AttributeSet): void;
    }
    type ComponentIface = typeof Component;
    type DocumentIface = typeof Document;
    type EditableTextIface = typeof EditableText;
    type GObjectAccessibleClass = typeof GObjectAccessible;
    type HyperlinkClass = typeof Hyperlink;
    type HyperlinkImplIface = typeof HyperlinkImpl;
    type HypertextIface = typeof Hypertext;
    type ImageIface = typeof Image;
    abstract class Implementor {
        static $gtype: GObject.GType<Implementor>;
        ref_accessible(): Object;
    }
    class KeyEventStruct {
        static $gtype: GObject.GType<KeyEventStruct>;
        type: number;
        state: number;
        keyval: number;
        length: number;
        string: string;
        keycode: number;
        timestamp: number;
        constructor(properties?: Partial<{
            type: number;
            state: number;
            keyval: number;
            length: number;
            string: string;
            keycode: number;
            timestamp: number;
        }>);
    }
    type MiscClass = typeof Misc;
    type NoOpObjectClass = typeof NoOpObject;
    type NoOpObjectFactoryClass = typeof NoOpObjectFactory;
    type ObjectClass = typeof Object;
    type ObjectFactoryClass = typeof ObjectFactory;
    type PlugClass = typeof Plug;
    class PropertyValues {
        static $gtype: GObject.GType<PropertyValues>;
        property_name: string;
    }
    class Range {
        static $gtype: GObject.GType<Range>;
        constructor(lower_limit: number, upper_limit: number, description: string);
        static ["new"](lower_limit: number, upper_limit: number, description: string): Range;
        copy(): Range;
        free(): void;
        get_description(): string;
        get_lower_limit(): number;
        get_upper_limit(): number;
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
    type RegistryClass = typeof Registry;
    type RelationClass = typeof Relation;
    type RelationSetClass = typeof RelationSet;
    type SelectionIface = typeof Selection;
    type SocketClass = typeof Socket;
    type StateSetClass = typeof StateSet;
    type StreamableContentIface = typeof StreamableContent;
    type TableCellIface = typeof TableCell;
    type TableIface = typeof Table;
    type TextIface = typeof Text;
    class TextRange {
        static $gtype: GObject.GType<TextRange>;
        bounds: TextRectangle;
        start_offset: number;
        end_offset: number;
        content: string;
        constructor(properties?: Partial<{
            bounds: TextRectangle;
            start_offset: number;
            end_offset: number;
            content: string;
        }>);
    }
    class TextRectangle {
        static $gtype: GObject.GType<TextRectangle>;
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
    class TextSelection {
        static $gtype: GObject.GType<TextSelection>;
        start_object: Object;
        start_offset: number;
        end_object: Object;
        end_offset: number;
        start_is_active: boolean;
    }
    type UtilClass = typeof Util;
    type ValueIface = typeof Value;
    type WindowIface = typeof Window;
    namespace Action {
        interface Interface {
            vfunc_do_action(i: number): boolean;
            vfunc_get_description(i: number): string | null;
            vfunc_get_keybinding(i: number): string | null;
            vfunc_get_localized_name(i: number): string | null;
            vfunc_get_n_actions(): number;
            vfunc_get_name(i: number): string | null;
            vfunc_set_description(i: number, desc: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ActionNamespace {
        $gtype: GObject.GType<Action>;
        prototype: Action;
    }
    interface Action extends GObject.Object, Action.Interface {
        do_action(i: number): boolean;
        get_description(i: number): string | null;
        get_keybinding(i: number): string | null;
        get_localized_name(i: number): string | null;
        get_n_actions(): number;
        get_name(i: number): string | null;
        set_description(i: number, desc: string): boolean;
    }
    export const Action: ActionNamespace & {
        new (): Action; 
    };
    namespace Component {
        interface Interface {
            vfunc_bounds_changed(bounds: Rectangle): void;
            vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
            vfunc_get_alpha(): number;
            vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
            vfunc_get_layer(): Layer;
            vfunc_get_mdi_zorder(): number;
            vfunc_get_position(coord_type: CoordType): [number, number];
            vfunc_get_size(): [number, number];
            vfunc_grab_focus(): boolean;
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
            vfunc_remove_focus_handler(handler_id: number): void;
            vfunc_scroll_to(type: ScrollType): boolean;
            vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
            vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
            vfunc_set_size(width: number, height: number): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ComponentNamespace {
        $gtype: GObject.GType<Component>;
        prototype: Component;
    }
    interface Component extends GObject.Object, Component.Interface {
        contains(x: number, y: number, coord_type: CoordType): boolean;
        get_alpha(): number;
        get_extents(coord_type: CoordType): [number, number, number, number];
        get_layer(): Layer;
        get_mdi_zorder(): number;
        get_position(coord_type: CoordType): [number, number];
        get_size(): [number, number];
        grab_focus(): boolean;
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
        remove_focus_handler(handler_id: number): void;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
        set_position(x: number, y: number, coord_type: CoordType): boolean;
        set_size(width: number, height: number): boolean;
    }
    export const Component: ComponentNamespace & {
        new (): Component; 
    };
    namespace Document {
        interface Interface {
            vfunc_get_current_page_number(): number;
            vfunc_get_document(): null;
            vfunc_get_document_attribute_value(attribute_name: string): string | null;
            vfunc_get_document_attributes(): AttributeSet;
            vfunc_get_document_locale(): string;
            vfunc_get_document_type(): string;
            vfunc_get_page_count(): number;
            vfunc_get_text_selections(): TextSelection[];
            vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
            vfunc_set_text_selections(selections: TextSelection[]): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DocumentNamespace {
        $gtype: GObject.GType<Document>;
        prototype: Document;
    }
    interface Document extends GObject.Object, Document.Interface {
        get_attribute_value(attribute_name: string): string | null;
        get_attributes(): AttributeSet;
        get_current_page_number(): number;
        get_document(): null;
        get_document_type(): string;
        get_locale(): string;
        get_page_count(): number;
        get_text_selections(): TextSelection[];
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        set_text_selections(selections: TextSelection[]): boolean;
    }
    export const Document: DocumentNamespace & {
        new (): Document; 
    };
    namespace EditableText {
        interface Interface {
            vfunc_copy_text(start_pos: number, end_pos: number): void;
            vfunc_cut_text(start_pos: number, end_pos: number): void;
            vfunc_delete_text(start_pos: number, end_pos: number): void;
            vfunc_insert_text(string: string, length: number, position: number): void;
            vfunc_paste_text(position: number): void;
            vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
            vfunc_set_text_contents(string: string): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface EditableTextNamespace {
        $gtype: GObject.GType<EditableText>;
        prototype: EditableText;
    }
    interface EditableText extends GObject.Object, EditableText.Interface {
        copy_text(start_pos: number, end_pos: number): void;
        cut_text(start_pos: number, end_pos: number): void;
        delete_text(start_pos: number, end_pos: number): void;
        insert_text(string: string, length: number, position: number): void;
        paste_text(position: number): void;
        set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        set_text_contents(string: string): void;
    }
    export const EditableText: EditableTextNamespace & {
        new (): EditableText; 
    };
    namespace HyperlinkImpl {
        interface Interface {
            vfunc_get_hyperlink(): Hyperlink;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HyperlinkImplNamespace {
        $gtype: GObject.GType<HyperlinkImpl>;
        prototype: HyperlinkImpl;
    }
    interface HyperlinkImpl extends GObject.Object, HyperlinkImpl.Interface {
        get_hyperlink(): Hyperlink;
    }
    export const HyperlinkImpl: HyperlinkImplNamespace & {
        new (): HyperlinkImpl; 
    };
    namespace Hypertext {
        interface Interface {
            vfunc_get_link(link_index: number): Hyperlink;
            vfunc_get_link_index(char_index: number): number;
            vfunc_get_n_links(): number;
            vfunc_link_selected(link_index: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HypertextNamespace {
        $gtype: GObject.GType<Hypertext>;
        prototype: Hypertext;
    }
    interface Hypertext extends GObject.Object, Hypertext.Interface {
        get_link(link_index: number): Hyperlink;
        get_link_index(char_index: number): number;
        get_n_links(): number;
    }
    export const Hypertext: HypertextNamespace & {
        new (): Hypertext; 
    };
    namespace Image {
        interface Interface {
            vfunc_get_image_description(): string;
            vfunc_get_image_locale(): string | null;
            vfunc_get_image_position(coord_type: CoordType): [number, number];
            vfunc_get_image_size(): [number, number];
            vfunc_set_image_description(description: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ImageNamespace {
        $gtype: GObject.GType<Image>;
        prototype: Image;
    }
    interface Image extends GObject.Object, Image.Interface {
        get_image_description(): string;
        get_image_locale(): string | null;
        get_image_position(coord_type: CoordType): [number, number];
        get_image_size(): [number, number];
        set_image_description(description: string): boolean;
    }
    export const Image: ImageNamespace & {
        new (): Image; 
    };
    namespace ImplementorIface {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ImplementorIfaceNamespace {
        $gtype: GObject.GType<ImplementorIface>;
        prototype: ImplementorIface;
    }
    interface ImplementorIface extends GObject.Object {
    }
    export const ImplementorIface: ImplementorIfaceNamespace & {
        new (): ImplementorIface; 
    };
    namespace Selection {
        interface Interface {
            vfunc_add_selection(i: number): boolean;
            vfunc_clear_selection(): boolean;
            vfunc_get_selection_count(): number;
            vfunc_is_child_selected(i: number): boolean;
            vfunc_ref_selection(i: number): Object | null;
            vfunc_remove_selection(i: number): boolean;
            vfunc_select_all_selection(): boolean;
            vfunc_selection_changed(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    interface Selection extends GObject.Object, Selection.Interface {
        add_selection(i: number): boolean;
        clear_selection(): boolean;
        get_selection_count(): number;
        is_child_selected(i: number): boolean;
        ref_selection(i: number): Object | null;
        remove_selection(i: number): boolean;
        select_all_selection(): boolean;
    }
    export const Selection: SelectionNamespace & {
        new (): Selection; 
    };
    namespace StreamableContent {
        interface Interface {
            vfunc_get_mime_type(i: number): string;
            vfunc_get_n_mime_types(): number;
            vfunc_get_stream(mime_type: string): GLib.IOChannel;
            vfunc_get_uri(mime_type: string): string | null;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface StreamableContentNamespace {
        $gtype: GObject.GType<StreamableContent>;
        prototype: StreamableContent;
    }
    interface StreamableContent extends GObject.Object, StreamableContent.Interface {
        get_mime_type(i: number): string;
        get_n_mime_types(): number;
        get_stream(mime_type: string): GLib.IOChannel;
        get_uri(mime_type: string): string | null;
    }
    export const StreamableContent: StreamableContentNamespace & {
        new (): StreamableContent; 
    };
    namespace Table {
        interface Interface {
            vfunc_add_column_selection(column: number): boolean;
            vfunc_add_row_selection(row: number): boolean;
            vfunc_column_deleted(column: number, num_deleted: number): void;
            vfunc_column_inserted(column: number, num_inserted: number): void;
            vfunc_column_reordered(): void;
            vfunc_get_caption(): Object | null;
            vfunc_get_column_at_index(index_: number): number;
            vfunc_get_column_description(column: number): string;
            vfunc_get_column_extent_at(row: number, column: number): number;
            vfunc_get_column_header(column: number): Object | null;
            vfunc_get_index_at(row: number, column: number): number;
            vfunc_get_n_columns(): number;
            vfunc_get_n_rows(): number;
            vfunc_get_row_at_index(index_: number): number;
            vfunc_get_row_description(row: number): string | null;
            vfunc_get_row_extent_at(row: number, column: number): number;
            vfunc_get_row_header(row: number): Object | null;
            vfunc_get_selected_columns(selected: number): number;
            vfunc_get_selected_rows(selected: number): number;
            vfunc_get_summary(): Object;
            vfunc_is_column_selected(column: number): boolean;
            vfunc_is_row_selected(row: number): boolean;
            vfunc_is_selected(row: number, column: number): boolean;
            vfunc_model_changed(): void;
            vfunc_ref_at(row: number, column: number): Object;
            vfunc_remove_column_selection(column: number): boolean;
            vfunc_remove_row_selection(row: number): boolean;
            vfunc_row_deleted(row: number, num_deleted: number): void;
            vfunc_row_inserted(row: number, num_inserted: number): void;
            vfunc_row_reordered(): void;
            vfunc_set_caption(caption: Object): void;
            vfunc_set_column_description(column: number, description: string): void;
            vfunc_set_column_header(column: number, header: Object): void;
            vfunc_set_row_description(row: number, description: string): void;
            vfunc_set_row_header(row: number, header: Object): void;
            vfunc_set_summary(accessible: Object): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TableNamespace {
        $gtype: GObject.GType<Table>;
        prototype: Table;
    }
    interface Table extends GObject.Object, Table.Interface {
        add_column_selection(column: number): boolean;
        add_row_selection(row: number): boolean;
        get_caption(): Object | null;
        get_column_at_index(index_: number): number;
        get_column_description(column: number): string;
        get_column_extent_at(row: number, column: number): number;
        get_column_header(column: number): Object | null;
        get_index_at(row: number, column: number): number;
        get_n_columns(): number;
        get_n_rows(): number;
        get_row_at_index(index_: number): number;
        get_row_description(row: number): string | null;
        get_row_extent_at(row: number, column: number): number;
        get_row_header(row: number): Object | null;
        get_selected_columns(selected: number): number;
        get_selected_rows(selected: number): number;
        get_summary(): Object;
        is_column_selected(column: number): boolean;
        is_row_selected(row: number): boolean;
        is_selected(row: number, column: number): boolean;
        ref_at(row: number, column: number): Object;
        remove_column_selection(column: number): boolean;
        remove_row_selection(row: number): boolean;
        set_caption(caption: Object): void;
        set_column_description(column: number, description: string): void;
        set_column_header(column: number, header: Object): void;
        set_row_description(row: number, description: string): void;
        set_row_header(row: number, header: Object): void;
        set_summary(accessible: Object): void;
    }
    export const Table: TableNamespace & {
        new (): Table; 
    };
    namespace TableCell {
        interface Interface {
            vfunc_get_column_header_cells(): Object[];
            vfunc_get_column_span(): number;
            vfunc_get_position(): [boolean, number, number];
            vfunc_get_row_column_span(): [boolean, number, number, number, number];
            vfunc_get_row_header_cells(): Object[];
            vfunc_get_row_span(): number;
            vfunc_get_table(): Object;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface TableCellNamespace {
        $gtype: GObject.GType<TableCell>;
        prototype: TableCell;
    }
    interface TableCell extends Object, TableCell.Interface {
        get_column_header_cells(): Object[];
        get_column_span(): number;
        get_position(): [boolean, number, number];
        get_row_column_span(): [boolean, number, number, number, number];
        get_row_header_cells(): Object[];
        get_row_span(): number;
        get_table(): Object;
    }
    export const TableCell: TableCellNamespace & {
        new (): TableCell; 
    };
    namespace Text {
        interface Interface {
            vfunc_add_selection(start_offset: number, end_offset: number): boolean;
            vfunc_get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[];
            vfunc_get_caret_offset(): number;
            vfunc_get_character_at_offset(offset: number): string;
            vfunc_get_character_count(): number;
            vfunc_get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
            vfunc_get_default_attributes(): AttributeSet;
            vfunc_get_n_selections(): number;
            vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
            vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
            vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
            vfunc_get_selection(selection_num: number): [string, number, number];
            vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
            vfunc_get_text(start_offset: number, end_offset: number): string;
            vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            vfunc_remove_selection(selection_num: number): boolean;
            vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
            vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
            vfunc_set_caret_offset(offset: number): boolean;
            vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
            vfunc_text_attributes_changed(): void;
            vfunc_text_caret_moved(location: number): void;
            vfunc_text_changed(position: number, length: number): void;
            vfunc_text_selection_changed(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TextNamespace {
        $gtype: GObject.GType<Text>;
        prototype: Text;
        free_ranges(ranges: TextRange[]): void;
    }
    interface Text extends GObject.Object, Text.Interface {
        add_selection(start_offset: number, end_offset: number): boolean;
        get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[];
        get_caret_offset(): number;
        get_character_at_offset(offset: number): string;
        get_character_count(): number;
        get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
        get_default_attributes(): AttributeSet;
        get_n_selections(): number;
        get_offset_at_point(x: number, y: number, coords: CoordType): number;
        get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): TextRectangle;
        get_run_attributes(offset: number): [AttributeSet, number, number];
        get_selection(selection_num: number): [string, number, number];
        get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
        get_text(start_offset: number, end_offset: number): string;
        get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
        remove_selection(selection_num: number): boolean;
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
        set_caret_offset(offset: number): boolean;
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    }
    export const Text: TextNamespace & {
        new (): Text; 
    };
    namespace Value {
        interface Interface {
            vfunc_get_current_value(): GObject.Value | any;
            vfunc_get_increment(): number;
            vfunc_get_maximum_value(): GObject.Value | any;
            vfunc_get_minimum_increment(): GObject.Value | any;
            vfunc_get_minimum_value(): GObject.Value | any;
            vfunc_get_range(): Range | null;
            vfunc_get_sub_ranges(): Range[];
            vfunc_get_value_and_text(): [number, string];
            vfunc_set_current_value(value: unknown): boolean;
            vfunc_set_value(new_value: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ValueNamespace {
        $gtype: GObject.GType<Value>;
        prototype: Value;
    }
    interface Value extends GObject.Object, Value.Interface {
        get_current_value(): unknown;
        get_increment(): number;
        get_maximum_value(): unknown;
        get_minimum_increment(): unknown;
        get_minimum_value(): unknown;
        get_range(): Range | null;
        get_sub_ranges(): Range[];
        get_value_and_text(): [number, string];
        set_current_value(value: GObject.Value | any): boolean;
        set_value(new_value: number): void;
    }
    export const Value: ValueNamespace & {
        new (): Value; 
    };
    namespace Window {
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface WindowNamespace {
        $gtype: GObject.GType<Window>;
        prototype: Window;
    }
    interface Window extends Object {
    }
    export const Window: WindowNamespace & {
        new (): Window; 
    };
    type AttributeSet = GLib.SList;
    type State = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default Atk;
}
declare module 'gi://Atk' {
    import Atk10 from 'gi://Atk?version=1.0';
    export default Atk10;
}
