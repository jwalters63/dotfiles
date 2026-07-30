declare module 'gi://Atspi?version=2.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type DBus from 'gi://DBus?version=1.0';
export namespace Atspi {
    export namespace CollectionMatchType {
        export const $gtype: GObject.GType<CollectionMatchType>;
    }
    enum CollectionMatchType {
        INVALID,
        ALL,
        ANY,
        NONE,
        EMPTY,
        LAST_DEFINED,
    }
    export namespace CollectionSortOrder {
        export const $gtype: GObject.GType<CollectionSortOrder>;
    }
    enum CollectionSortOrder {
        INVALID,
        CANONICAL,
        FLOW,
        TAB,
        REVERSE_CANONICAL,
        REVERSE_FLOW,
        REVERSE_TAB,
        LAST_DEFINED,
    }
    export namespace CollectionTreeTraversalType {
        export const $gtype: GObject.GType<CollectionTreeTraversalType>;
    }
    enum CollectionTreeTraversalType {
        RESTRICT_CHILDREN,
        RESTRICT_SIBLING,
        INORDER,
        LAST_DEFINED,
    }
    export namespace ComponentLayer {
        export const $gtype: GObject.GType<ComponentLayer>;
    }
    enum ComponentLayer {
        INVALID,
        BACKGROUND,
        CANVAS,
        WIDGET,
        MDI,
        POPUP,
        OVERLAY,
        WINDOW,
        LAST_DEFINED,
    }
    export namespace CoordType {
        export const $gtype: GObject.GType<CoordType>;
    }
    enum CoordType {
        SCREEN,
        WINDOW,
        PARENT,
    }
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }
    enum EventType {
        KEY_PRESSED_EVENT,
        KEY_RELEASED_EVENT,
        BUTTON_PRESSED_EVENT,
        BUTTON_RELEASED_EVENT,
    }
    export namespace KeyEventType {
        export const $gtype: GObject.GType<KeyEventType>;
    }
    enum KeyEventType {
        PRESSED,
        RELEASED,
    }
    export namespace KeySynthType {
        export const $gtype: GObject.GType<KeySynthType>;
    }
    enum KeySynthType {
        PRESS,
        RELEASE,
        PRESSRELEASE,
        SYM,
        STRING,
        LOCKMODIFIERS,
        UNLOCKMODIFIERS,
    }
    export namespace Live {
        export const $gtype: GObject.GType<Live>;
    }
    enum Live {
        NONE,
        POLITE,
        ASSERTIVE,
    }
    export namespace LocaleType {
        export const $gtype: GObject.GType<LocaleType>;
    }
    enum LocaleType {
        MESSAGES,
        COLLATE,
        CTYPE,
        MONETARY,
        NUMERIC,
        TIME,
    }
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }
    enum ModifierType {
        SHIFT,
        SHIFTLOCK,
        CONTROL,
        ALT,
        META,
        META2,
        META3,
        SUPER,
        NUMLOCK,
    }
    export namespace RelationType {
        export const $gtype: GObject.GType<RelationType>;
    }
    enum RelationType {
        NULL,
        LABEL_FOR,
        LABELLED_BY,
        CONTROLLER_FOR,
        CONTROLLED_BY,
        MEMBER_OF,
        TOOLTIP_FOR,
        NODE_CHILD_OF,
        NODE_PARENT_OF,
        EXTENDED,
        FLOWS_TO,
        FLOWS_FROM,
        SUBWINDOW_OF,
        EMBEDS,
        EMBEDDED_BY,
        POPUP_FOR,
        PARENT_WINDOW_OF,
        DESCRIPTION_FOR,
        DESCRIBED_BY,
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
        FOCUS_TRAVERSABLE,
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
        SPIN_BUTTON,
        SPLIT_PANE,
        STATUS_BAR,
        TABLE,
        TABLE_CELL,
        TABLE_COLUMN_HEADER,
        TABLE_ROW_HEADER,
        TEAROFF_MENU_ITEM,
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
        EXTENDED,
        HEADER,
        FOOTER,
        PARAGRAPH,
        RULER,
        APPLICATION,
        AUTOCOMPLETE,
        EDITBAR,
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
        STATIC,
        MATH_FRACTION,
        MATH_ROOT,
        SUBSCRIPT,
        SUPERSCRIPT,
        DESCRIPTION_LIST,
        DESCRIPTION_TERM,
        DESCRIPTION_VALUE,
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
        COLLAPSED,
        DEFUNCT,
        EDITABLE,
        ENABLED,
        EXPANDABLE,
        EXPANDED,
        FOCUSABLE,
        FOCUSED,
        HAS_TOOLTIP,
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
        REQUIRED,
        TRUNCATED,
        ANIMATED,
        INVALID_ENTRY,
        SUPPORTS_AUTOCOMPLETION,
        SELECTABLE_TEXT,
        IS_DEFAULT,
        VISITED,
        CHECKABLE,
        HAS_POPUP,
        READ_ONLY,
        LAST_DEFINED,
    }
    export namespace TextBoundaryType {
        export const $gtype: GObject.GType<TextBoundaryType>;
    }
    enum TextBoundaryType {
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
    const ACCESSIBLE_VERSION: number;
    const ACTION_VERSION: number;
    const APPLICATION_VERSION: number;
    const CACHE_VERSION: number;
    const COLLECTION_VERSION: number;
    const COMPONENTLAYER_COUNT: number;
    const COMPONENT_VERSION: number;
    const COORD_TYPE_COUNT: number;
    const DBUS_INTERFACE_ACCESSIBLE: string;
    const DBUS_INTERFACE_ACTION: string;
    const DBUS_INTERFACE_APPLICATION: string;
    const DBUS_INTERFACE_CACHE: string;
    const DBUS_INTERFACE_COLLECTION: string;
    const DBUS_INTERFACE_COMPONENT: string;
    const DBUS_INTERFACE_DEC: string;
    const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string;
    const DBUS_INTERFACE_DOCUMENT: string;
    const DBUS_INTERFACE_EDITABLE_TEXT: string;
    const DBUS_INTERFACE_EVENT_KEYBOARD: string;
    const DBUS_INTERFACE_EVENT_MOUSE: string;
    const DBUS_INTERFACE_EVENT_OBJECT: string;
    const DBUS_INTERFACE_EVENT_SCREEN_READER: string;
    const DBUS_INTERFACE_HYPERLINK: string;
    const DBUS_INTERFACE_HYPERTEXT: string;
    const DBUS_INTERFACE_IMAGE: string;
    const DBUS_INTERFACE_KEYBOARD_MONITOR: string;
    const DBUS_INTERFACE_POINTER_LOCATOR: string;
    const DBUS_INTERFACE_REGISTRY: string;
    const DBUS_INTERFACE_SELECTION: string;
    const DBUS_INTERFACE_SOCKET: string;
    const DBUS_INTERFACE_TABLE: string;
    const DBUS_INTERFACE_TABLE_CELL: string;
    const DBUS_INTERFACE_TEXT: string;
    const DBUS_INTERFACE_VALUE: string;
    const DBUS_NAME_A11Y_MANAGER: string;
    const DBUS_NAME_REGISTRY: string;
    const DBUS_PATH_A11Y_MANAGER: string;
    const DBUS_PATH_DEC: string;
    const DBUS_PATH_NULL: string;
    const DBUS_PATH_REGISTRY: string;
    const DBUS_PATH_ROOT: string;
    const DBUS_PATH_SCREEN_READER: string;
    const DEVICE_A11Y_MANAGER_VIRTUAL_MOD_END: number;
    const DEVICE_A11Y_MANAGER_VIRTUAL_MOD_START: number;
    const DEVICE_EVENT_CONTROLLER_VERSION: number;
    const DEVICE_EVENT_LISTENER_VERSION: number;
    const DOCUMENT_VERSION: number;
    const EDITABLE_TEXT_VERSION: number;
    const EVENTTYPE_COUNT: number;
    const EVENT_VERSION: number;
    const HYPERLINK_VERSION: number;
    const HYPERTEXT_VERSION: number;
    const IMAGE_VERSION: number;
    const KEYEVENTTYPE_COUNT: number;
    const KEYSYNTHTYPE_COUNT: number;
    const LOCALE_TYPE_COUNT: number;
    const MATCHTYPES_COUNT: number;
    const MAX_CHILDREN: number;
    const MODIFIERTYPE_COUNT: number;
    const REGISTRY_VERSION: number;
    const RELATIONTYPE_COUNT: number;
    const ROLE_COUNT: number;
    const SCROLLTYPE_COUNT: number;
    const SELECTION_VERSION: number;
    const SOCKET_VERSION: number;
    const SORTORDER_COUNT: number;
    const STATETYPE_COUNT: number;
    const TABLE_CELL_VERSION: number;
    const TABLE_VERSION: number;
    const TEXT_BOUNDARY_TYPE_COUNT: number;
    const TEXT_CLIP_TYPE_COUNT: number;
    const TEXT_VERSION: number;
    const TREETRAVERSALTYPE_COUNT: number;
    const VALUE_VERSION: number;
    function deregister_device_event_listener(listener: DeviceListener, filter: null): boolean;
    function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean;
    function event_main(): void;
    function event_quit(): void;
    function exit(): number;
    function generate_keyboard_event(keyval: bigint | number, keystring: string | null, synth_type: KeySynthType): boolean;
    function generate_mouse_event(x: bigint | number, y: bigint | number, name: string): boolean;
    function generate_mouse_event_async(x: bigint | number, y: bigint | number, name: string, callback: GenerateMouseEventCB): void;
    function get_desktop(i: number): Accessible;
    function get_desktop_count(): number;
    function get_desktop_list(): Accessible[];
    function get_version(): [number, number, number];
    function init(): number;
    function is_initialized(): boolean;
    function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter: null): boolean;
    function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean;
    function role_get_localized_name(role: Role): string;
    function role_get_name(role: Role): string;
    function set_main_context(cnx: GLib.MainContext): void;
    function set_reference_window(accessible: Accessible): void;
    function set_timeout(val: number, startup_time: number): void;
    interface DeviceListenerCB {
        (stroke: DeviceEvent): boolean;
    }
    interface DeviceListenerSimpleCB {
        (stroke: DeviceEvent): boolean;
    }
    interface EventListenerCB {
        (event: Event): void;
    }
    interface EventListenerSimpleCB {
        (event: Event): void;
    }
    interface GenerateMouseEventCB {
        (user_data: null): void;
    }
    interface KeyCallback {
        (device: Device, pressed: boolean, keycode: number, keysym: number, modifiers: number, keystring: string): void;
    }
    export namespace Cache {
        export const $gtype: GObject.GType<Cache>;
    }
    enum Cache {
        NONE,
        PARENT,
        CHILDREN,
        NAME,
        DESCRIPTION,
        STATES,
        ROLE,
        INTERFACES,
        ATTRIBUTES,
        ALL,
        DEFAULT,
        UNDEFINED,
    }
    export namespace DeviceCapability {
        export const $gtype: GObject.GType<DeviceCapability>;
    }
    enum DeviceCapability {
        KEYBOARD_MONITOR,
        KEYBOARD_SYNTH,
        KEYBOARD_GRAB,
        POINTER_MONITOR,
        POINTER_SYNTH,
        TOUCH_MONITOR,
        TOUCH_SYNTH,
    }
    export namespace KeyListenerSyncType {
        export const $gtype: GObject.GType<KeyListenerSyncType>;
    }
    enum KeyListenerSyncType {
        NOSYNC,
        SYNCHRONOUS,
        CANCONSUME,
        ALL_WINDOWS,
    }
    namespace Accessible {
        interface SignalSignatures extends Object.SignalSignatures {
            "mode-changed": (arg0: number, arg1: string) => void;
            "region-changed": (arg0: number, arg1: number) => void;
            [key: `mode-changed::${string}`]: (arg0: number, arg1: string) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps, Action.ConstructorProps, Collection.ConstructorProps, Component.ConstructorProps, Document.ConstructorProps, EditableText.ConstructorProps, Hypertext.ConstructorProps, Image.ConstructorProps, Selection.ConstructorProps, Table.ConstructorProps, TableCell.ConstructorProps, Text.ConstructorProps, Value.ConstructorProps {}
    }
    class Accessible extends Object implements Action, Collection, Component, Document, EditableText, Hypertext, Image, Selection, Table, TableCell, Text, Value {
        static $gtype: GObject.GType<Accessible>;
        $signals: Accessible.SignalSignatures;
        accessible_parent: Accessible;
        children: null[];
        role: Role;
        interfaces: number;
        name: string;
        description: string;
        states: StateSet;
        cached_properties: number;
        constructor(properties?: Partial<Accessible.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Accessible.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Accessible.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Accessible.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Accessible.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Accessible.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Accessible.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_mode_changed(enabled: boolean): void;
        vfunc_region_changed(current_offset: number, last_offset: number): void;
        clear_cache(): void;
        clear_cache_single(): void;
        get_accessible_id(): string;
        get_action(): Action;
        get_action_iface(): Action;
        get_application(): Accessible;
        get_atspi_version(): string;
        get_attributes(): { [key: string]: string };
        get_attributes_as_array(): string[];
        get_child_at_index(child_index: number): Accessible;
        get_child_count(): number;
        get_collection(): Collection;
        get_collection_iface(): Collection;
        get_component(): Component;
        get_component_iface(): Component;
        get_description(): string;
        get_document(): Document;
        get_document_iface(): Document;
        get_editable_text(): EditableText;
        get_editable_text_iface(): EditableText;
        get_help_text(): string;
        get_hyperlink(): Hyperlink;
        get_hypertext(): Hypertext;
        get_hypertext_iface(): Hypertext;
        get_id(): number;
        get_image(): Image;
        get_image_iface(): Image;
        get_index_in_parent(): number;
        get_interfaces(): string[];
        get_localized_role_name(): string;
        get_name(): string;
        get_object_locale(): string;
        get_parent(): Accessible | null;
        get_process_id(): number;
        get_relation_set(): Relation[];
        get_role(): Role;
        get_role_name(): string;
        get_selection(): Selection;
        get_selection(...args: never[]): any;
        get_selection_iface(): Selection;
        get_state_set(): StateSet;
        get_table(): Table;
        get_table(...args: never[]): any;
        get_table_cell(): TableCell;
        get_table_iface(): Table;
        get_text(): Text;
        get_text(...args: never[]): any;
        get_text_iface(): Text;
        get_toolkit_name(): string;
        get_toolkit_version(): string;
        get_value(): Value;
        get_value_iface(): Value;
        is_action(): boolean;
        is_application(): boolean;
        is_collection(): boolean;
        is_component(): boolean;
        is_document(): boolean;
        is_editable_text(): boolean;
        is_hyperlink(): boolean;
        is_hypertext(): boolean;
        is_image(): boolean;
        is_selection(): boolean;
        is_table(): boolean;
        is_table_cell(): boolean;
        is_text(): boolean;
        is_value(): boolean;
        set_cache_mask(mask: Cache): void;
        do_action(i: number): boolean;
        get_action_description(i: number): string;
        get_key_binding(i: number): string;
        get_localized_name(i: number): string;
        get_n_actions(): number;
        get_action_name(i: number): string;
        get_active_descendant(): Accessible;
        get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
        get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[];
        get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[];
        is_ancestor_of(test: Accessible): boolean;
        contains(x: number, y: number, ctype: CoordType): boolean;
        get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
        get_alpha(): number;
        get_extents(ctype: CoordType): Rect;
        get_layer(): ComponentLayer;
        get_mdi_z_order(): number;
        get_position(ctype: CoordType): Point;
        get_position(...args: never[]): any;
        get_size(): Point;
        grab_focus(): boolean;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
        set_position(x: number, y: number, ctype: CoordType): boolean;
        set_size(width: number, height: number): boolean;
        get_document_attribute_value(attribute: string): string;
        get_document_attributes(): { [key: string]: string };
        get_current_page_number(): number;
        get_locale(): string;
        get_page_count(): number;
        get_text_selections(): TextSelection[];
        set_text_selections(selections: TextSelection[]): boolean;
        copy_text(start_pos: number, end_pos: number): boolean;
        cut_text(start_pos: number, end_pos: number): boolean;
        delete_text(start_pos: number, end_pos: number): boolean;
        insert_text(position: number, text: string, length: number): boolean;
        paste_text(position: number): boolean;
        set_text_contents(new_contents: string): boolean;
        get_link(link_index: number): Hyperlink | null;
        get_link_index(character_offset: number): number;
        get_n_links(): number;
        get_image_description(): string;
        get_image_extents(ctype: CoordType): Rect;
        get_image_locale(): string;
        get_image_position(ctype: CoordType): Point;
        get_image_size(): Point;
        clear_selection(): boolean;
        deselect_child(child_index: number): boolean;
        deselect_selected_child(selected_child_index: number): boolean;
        get_n_selected_children(): number;
        get_selected_child(selected_child_index: number): Accessible;
        is_child_selected(child_index: number): boolean;
        select_all(): boolean;
        select_child(child_index: number): boolean;
        add_column_selection(column: number): boolean;
        add_row_selection(row: number): boolean;
        get_accessible_at(row: number, column: number): Accessible;
        get_caption(): Accessible;
        get_column_at_index(index: number): number;
        get_column_description(column: number): string;
        get_column_extent_at(row: number, column: number): number;
        get_column_header(column: number): Accessible;
        get_index_at(row: number, column: number): number;
        get_n_columns(): number;
        get_n_rows(): number;
        get_n_selected_columns(): number;
        get_n_selected_rows(): number;
        get_row_at_index(index: number): number;
        get_row_column_extents_at_index(index: number): [boolean, number, number, number, number, boolean];
        get_row_description(row: number): string;
        get_row_extent_at(row: number, column: number): number;
        get_row_header(row: number): Accessible;
        get_selected_columns(): number[];
        get_selected_rows(): number[];
        get_summary(): Accessible;
        is_column_selected(column: number): boolean;
        is_row_selected(row: number): boolean;
        is_selected(row: number, column: number): boolean;
        remove_column_selection(column: number): boolean;
        remove_row_selection(row: number): boolean;
        get_column_header_cells(): Accessible[];
        get_column_index(): number;
        get_column_span(): number;
        get_row_column_span(): [number, number, number, number];
        get_row_header_cells(): Accessible[];
        get_row_span(): number;
        add_selection(start_offset: number, end_offset: number): boolean;
        get_attribute_run(offset: number, include_defaults: boolean): [{ [key: string]: string }, number, number];
        get_text_attribute_value(offset: number, attribute_name: string): string | null;
        get_text_attributes(offset: number): [{ [key: string]: string }, number, number];
        get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[];
        get_caret_offset(): number;
        get_character_at_offset(offset: number): number;
        get_character_count(): number;
        get_character_extents(offset: number, type: CoordType): Rect;
        get_default_attributes(): { [key: string]: string };
        get_n_selections(): number;
        get_offset_at_point(x: number, y: number, type: CoordType): number;
        get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
        get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
        get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
        get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
        get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
        remove_selection(selection_num: number): boolean;
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
        set_caret_offset(new_offset: number): boolean;
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
        get_current_value(): number;
        get_maximum_value(): number;
        get_minimum_increment(): number;
        get_minimum_value(): number;
        set_current_value(new_value: number): boolean;
    }
    namespace Application {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;
        $signals: Application.SignalSignatures;
        bus_name: string;
        root: null;
        cache: Cache;
        toolkit_name: string;
        toolkit_version: string;
        atspi_version: string;
        time_added: null;
        pid: never;
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "key-pressed": (arg0: number, arg1: number, arg2: ModifierType, arg3: string) => void;
            "key-released": (arg0: number, arg1: number, arg2: ModifierType, arg3: string) => void;
            "pointer-moved": (arg0: Accessible, arg1: number, arg2: number) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_id: string;
            appId: string;
        }
    }
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;
        get app_id(): string;
        get appId(): string;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Device;
        static new_full(app_id: string | null): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_add_key_grab(kd: KeyDefinition): boolean;
        vfunc_generate_mouse_event(obj: Accessible, x: number, y: number, name: string): void;
        vfunc_get_capabilities(): DeviceCapability;
        vfunc_get_keysym_modifier(keysym: number): number;
        vfunc_get_locked_modifiers(): number;
        vfunc_get_modifier(keycode: number): number;
        vfunc_grab_keyboard(): boolean;
        vfunc_map_keysym_modifier(keysym: number): number;
        vfunc_map_modifier(keycode: number): number;
        vfunc_remove_key_grab(id: number): void;
        vfunc_set_capabilities(capabilities: DeviceCapability): DeviceCapability;
        vfunc_ungrab_keyboard(): void;
        vfunc_unmap_keysym_modifier(keysym: number): void;
        vfunc_unmap_modifier(keycode: number): void;
        add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number;
        add_key_watcher(callback: KeyCallback): void;
        clear_key_grabs(): void;
        generate_mouse_event(obj: Accessible, x: number, y: number, name: string): void;
        get_app_id(): string;
        get_capabilities(): DeviceCapability;
        get_grab_by_id(id: number): KeyDefinition;
        get_keysym_modifier(keysym: number): number;
        get_locked_modifiers(): number;
        get_modifier(keycode: number): number;
        grab_keyboard(): boolean;
        map_keysym_modifier(keysym: number): number;
        map_modifier(keycode: number): number;
        notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean;
        remove_key_grab(id: number): void;
        set_app_id(app_id: string): void;
        set_capabilities(capabilities: DeviceCapability): DeviceCapability;
        ungrab_keyboard(): void;
        unmap_keysym_modifier(keysym: number): void;
        unmap_modifier(keycode: number): void;
    }
    namespace DeviceA11yManager {
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    class DeviceA11yManager extends Device {
        static $gtype: GObject.GType<DeviceA11yManager>;
        $signals: DeviceA11yManager.SignalSignatures;
        constructor(properties?: Partial<DeviceA11yManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static try_new(): DeviceA11yManager;
        static try_new_full(app_id: string | null): DeviceA11yManager;
        connect<K extends keyof DeviceA11yManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceA11yManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceA11yManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceA11yManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceA11yManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceA11yManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DeviceLegacy {
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    class DeviceLegacy extends Device {
        static $gtype: GObject.GType<DeviceLegacy>;
        $signals: DeviceLegacy.SignalSignatures;
        constructor(properties?: Partial<DeviceLegacy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceLegacy;
        static new_full(app_id: string | null): DeviceLegacy;
        connect<K extends keyof DeviceLegacy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLegacy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceLegacy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLegacy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceLegacy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceLegacy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DeviceListener {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DeviceListener extends GObject.Object {
        static $gtype: GObject.GType<DeviceListener>;
        $signals: DeviceListener.SignalSignatures;
        id: number;
        callbacks: null[];
        constructor(properties?: Partial<DeviceListener.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](callback: DeviceListenerCB | null): DeviceListener;
        connect<K extends keyof DeviceListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceListener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceListener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceListener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceListener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_device_event(event: DeviceEvent): boolean;
        add_callback(callback: DeviceListenerCB): void;
        remove_callback(callback: DeviceListenerCB): void;
    }
    namespace DeviceX11 {
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    class DeviceX11 extends Device {
        static $gtype: GObject.GType<DeviceX11>;
        $signals: DeviceX11.SignalSignatures;
        constructor(properties?: Partial<DeviceX11.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceX11;
        static new_full(app_id: string | null): DeviceX11;
        connect<K extends keyof DeviceX11.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceX11.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceX11.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceX11.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceX11.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace EventListener {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class EventListener extends GObject.Object {
        static $gtype: GObject.GType<EventListener>;
        $signals: EventListener.SignalSignatures;
        callback: EventListenerCB;
        user_data: null;
        cb_destroyed: GLib.DestroyNotify;
        constructor(properties?: Partial<EventListener.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](callback: EventListenerCB): EventListener;
        connect<K extends keyof EventListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventListener.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EventListener.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EventListener.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EventListener.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EventListener.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static deregister_from_callback(callback: EventListenerCB, event_type: string): boolean;
        static register_from_callback(callback: EventListenerCB, event_type: string): boolean;
        static register_from_callback_full(callback: EventListenerCB, event_type: string, properties: string[]): boolean;
        static register_from_callback_with_app(callback: EventListenerCB, event_type: string, properties: string[], app: Accessible | null): boolean;
        deregister(event_type: string): boolean;
        register(event_type: string): boolean;
        register_full(event_type: string, properties: string[] | null): boolean;
        register_with_app(event_type: string, properties: string[] | null, app: Accessible | null): boolean;
    }
    namespace Hyperlink {
        interface SignalSignatures extends Object.SignalSignatures {}
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Hyperlink extends Object {
        static $gtype: GObject.GType<Hyperlink>;
        $signals: Hyperlink.SignalSignatures;
        constructor(properties?: Partial<Hyperlink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Hyperlink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Hyperlink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hyperlink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Hyperlink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Hyperlink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_end_index(): number;
        get_index_range(): Range;
        get_n_anchors(): number;
        get_object(i: number): Accessible;
        get_start_index(): number;
        get_uri(i: number): string;
        is_valid(): boolean;
    }
    namespace MatchRule {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class MatchRule extends GObject.Object {
        static $gtype: GObject.GType<MatchRule>;
        $signals: MatchRule.SignalSignatures;
        states: StateSet;
        statematchtype: CollectionMatchType;
        attributematchtype: CollectionMatchType;
        interfaces: null[];
        interfacematchtype: CollectionMatchType;
        roles: number[];
        rolematchtype: CollectionMatchType;
        invert: boolean;
        constructor(properties?: Partial<MatchRule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](states: StateSet | null, statematchtype: CollectionMatchType, attributes: { [key: string]: string } | null, attributematchtype: CollectionMatchType, roles: Role[] | null, rolematchtype: CollectionMatchType, interfaces: string[] | null, interfacematchtype: CollectionMatchType, invert: boolean): MatchRule;
        connect<K extends keyof MatchRule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MatchRule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MatchRule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MatchRule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MatchRule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MatchRule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        $signals: Object.SignalSignatures;
        app: Application;
        path: string;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Relation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Relation extends GObject.Object {
        static $gtype: GObject.GType<Relation>;
        $signals: Relation.SignalSignatures;
        relation_type: RelationType;
        targets: null[];
        constructor(properties?: Partial<Relation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Relation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Relation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_n_targets(): number;
        get_relation_type(): RelationType;
        get_target(i: number): Accessible;
    }
    namespace StateSet {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class StateSet extends GObject.Object {
        static $gtype: GObject.GType<StateSet>;
        $signals: StateSet.SignalSignatures;
        accessible: null;
        states: number;
        constructor(properties?: Partial<StateSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](states: StateType[]): StateSet;
        connect<K extends keyof StateSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StateSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StateSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StateSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(state: StateType): void;
        compare(set2: StateSet): StateSet;
        contains(state: StateType): boolean;
        equals(set2: StateSet): boolean;
        get_states(): StateType[];
        is_empty(): boolean;
        remove(state: StateType): void;
        set_by_name(name: string, enabled: boolean): void;
    }
    type AccessibleClass = typeof Accessible;
    abstract class AccessiblePrivate {
        static $gtype: GObject.GType<AccessiblePrivate>;
    }
    type ApplicationClass = typeof Application;
    type DeviceA11yManagerClass = typeof DeviceA11yManager;
    type DeviceClass = typeof Device;
    class DeviceEvent {
        static $gtype: GObject.GType<DeviceEvent>;
        type: EventType;
        id: number;
        hw_code: number;
        modifiers: number;
        timestamp: number;
        event_string: string;
        is_text: boolean;
    }
    type DeviceLegacyClass = typeof DeviceLegacy;
    type DeviceListenerClass = typeof DeviceListener;
    type DeviceX11Class = typeof DeviceX11;
    class Event {
        static $gtype: GObject.GType<Event>;
        type: string;
        source: Accessible;
        detail1: number;
        detail2: number;
        sender: Accessible;
        static main(): void;
        static quit(): void;
    }
    type EventListenerClass = typeof EventListener;
    class EventListenerMode {
        static $gtype: GObject.GType<EventListenerMode>;
        synchronous: boolean;
        preemptive: boolean;
        global: boolean;
        constructor(properties?: Partial<{
            synchronous: boolean;
            preemptive: boolean;
            global: boolean;
        }>);
    }
    type HyperlinkClass = typeof Hyperlink;
    class KeyDefinition {
        static $gtype: GObject.GType<KeyDefinition>;
        keycode: number;
        keysym: number;
        keystring: string;
        modifiers: number;
        constructor(properties?: Partial<{
            keycode: number;
            keysym: number;
            keystring: string;
            modifiers: number;
        }>);
    }
    class KeySet {
        static $gtype: GObject.GType<KeySet>;
        keysyms: number;
        keycodes: number;
        keystrings: string;
        len: number;
        constructor(properties?: Partial<{
            keysyms: number;
            keycodes: number;
            keystrings: string;
            len: number;
        }>);
    }
    type MatchRuleClass = typeof MatchRule;
    type ObjectClass = typeof Object;
    class Point {
        static $gtype: GObject.GType<Point>;
        x: number;
        y: number;
        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
        copy(): Point;
    }
    class Range {
        static $gtype: GObject.GType<Range>;
        start_offset: number;
        end_offset: number;
        constructor(properties?: Partial<{
            start_offset: number;
            end_offset: number;
        }>);
        copy(): Range;
    }
    class Rect {
        static $gtype: GObject.GType<Rect>;
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
        copy(): Rect;
    }
    type RelationClass = typeof Relation;
    type StateSetClass = typeof StateSet;
    class TextRange {
        static $gtype: GObject.GType<TextRange>;
        start_offset: number;
        end_offset: number;
        content: string;
        constructor(properties?: Partial<{
            start_offset: number;
            end_offset: number;
            content: string;
        }>);
    }
    class TextSelection {
        static $gtype: GObject.GType<TextSelection>;
        start_object: Accessible;
        start_offset: number;
        end_object: Accessible;
        end_offset: number;
        start_is_active: boolean;
    }
    namespace Action {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ActionNamespace {
        $gtype: GObject.GType<Action>;
        prototype: Action;
    }
    interface Action extends GObject.Object {
        do_action(i: number): boolean;
        get_action_description(i: number): string;
        get_key_binding(i: number): string;
        get_localized_name(i: number): string;
        get_n_actions(): number;
        get_action_name(i: number): string;
    }
    export const Action: ActionNamespace & {
        new (): Action; 
    };
    namespace Collection {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface CollectionNamespace {
        $gtype: GObject.GType<Collection>;
        prototype: Collection;
    }
    interface Collection extends GObject.Object {
        get_active_descendant(): Accessible;
        get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
        get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[];
        get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[];
        is_ancestor_of(test: Accessible): boolean;
    }
    export const Collection: CollectionNamespace & {
        new (): Collection; 
    };
    namespace Component {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ComponentNamespace {
        $gtype: GObject.GType<Component>;
        prototype: Component;
    }
    interface Component extends GObject.Object {
        contains(x: number, y: number, ctype: CoordType): boolean;
        get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
        get_alpha(): number;
        get_extents(ctype: CoordType): Rect;
        get_layer(): ComponentLayer;
        get_mdi_z_order(): number;
        get_position(ctype: CoordType): Point;
        get_size(): Point;
        grab_focus(): boolean;
        scroll_to(type: ScrollType): boolean;
        scroll_to_point(coords: CoordType, x: number, y: number): boolean;
        set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
        set_position(x: number, y: number, ctype: CoordType): boolean;
        set_size(width: number, height: number): boolean;
    }
    export const Component: ComponentNamespace & {
        new (): Component; 
    };
    namespace Document {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DocumentNamespace {
        $gtype: GObject.GType<Document>;
        prototype: Document;
    }
    interface Document extends GObject.Object {
        get_document_attribute_value(attribute: string): string;
        get_document_attributes(): { [key: string]: string };
        get_current_page_number(): number;
        get_locale(): string;
        get_page_count(): number;
        get_text_selections(): TextSelection[];
        set_text_selections(selections: TextSelection[]): boolean;
    }
    export const Document: DocumentNamespace & {
        new (): Document; 
    };
    namespace EditableText {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface EditableTextNamespace {
        $gtype: GObject.GType<EditableText>;
        prototype: EditableText;
    }
    interface EditableText extends GObject.Object {
        copy_text(start_pos: number, end_pos: number): boolean;
        cut_text(start_pos: number, end_pos: number): boolean;
        delete_text(start_pos: number, end_pos: number): boolean;
        insert_text(position: number, text: string, length: number): boolean;
        paste_text(position: number): boolean;
        set_text_contents(new_contents: string): boolean;
    }
    export const EditableText: EditableTextNamespace & {
        new (): EditableText; 
    };
    namespace Hypertext {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HypertextNamespace {
        $gtype: GObject.GType<Hypertext>;
        prototype: Hypertext;
    }
    interface Hypertext extends GObject.Object {
        get_link(link_index: number): Hyperlink | null;
        get_link_index(character_offset: number): number;
        get_n_links(): number;
    }
    export const Hypertext: HypertextNamespace & {
        new (): Hypertext; 
    };
    namespace Image {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ImageNamespace {
        $gtype: GObject.GType<Image>;
        prototype: Image;
    }
    interface Image extends GObject.Object {
        get_image_description(): string;
        get_image_extents(ctype: CoordType): Rect;
        get_image_locale(): string;
        get_image_position(ctype: CoordType): Point;
        get_image_size(): Point;
    }
    export const Image: ImageNamespace & {
        new (): Image; 
    };
    namespace Selection {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    interface Selection extends GObject.Object {
        clear_selection(): boolean;
        deselect_child(child_index: number): boolean;
        deselect_selected_child(selected_child_index: number): boolean;
        get_n_selected_children(): number;
        get_selected_child(selected_child_index: number): Accessible;
        is_child_selected(child_index: number): boolean;
        select_all(): boolean;
        select_child(child_index: number): boolean;
    }
    export const Selection: SelectionNamespace & {
        new (): Selection; 
    };
    namespace Table {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TableNamespace {
        $gtype: GObject.GType<Table>;
        prototype: Table;
    }
    interface Table extends GObject.Object {
        add_column_selection(column: number): boolean;
        add_row_selection(row: number): boolean;
        get_accessible_at(row: number, column: number): Accessible;
        get_caption(): Accessible;
        get_column_at_index(index: number): number;
        get_column_description(column: number): string;
        get_column_extent_at(row: number, column: number): number;
        get_column_header(column: number): Accessible;
        get_index_at(row: number, column: number): number;
        get_n_columns(): number;
        get_n_rows(): number;
        get_n_selected_columns(): number;
        get_n_selected_rows(): number;
        get_row_at_index(index: number): number;
        get_row_column_extents_at_index(index: number): [boolean, number, number, number, number, boolean];
        get_row_description(row: number): string;
        get_row_extent_at(row: number, column: number): number;
        get_row_header(row: number): Accessible;
        get_selected_columns(): number[];
        get_selected_rows(): number[];
        get_summary(): Accessible;
        is_column_selected(column: number): boolean;
        is_row_selected(row: number): boolean;
        is_selected(row: number, column: number): boolean;
        remove_column_selection(column: number): boolean;
        remove_row_selection(row: number): boolean;
    }
    export const Table: TableNamespace & {
        new (): Table; 
    };
    namespace TableCell {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TableCellNamespace {
        $gtype: GObject.GType<TableCell>;
        prototype: TableCell;
    }
    interface TableCell extends GObject.Object {
        get_column_header_cells(): Accessible[];
        get_column_index(): number;
        get_column_span(): number;
        get_position(): [number, number, number];
        get_row_column_span(): [number, number, number, number];
        get_row_header_cells(): Accessible[];
        get_row_span(): number;
        get_table(): Accessible;
    }
    export const TableCell: TableCellNamespace & {
        new (): TableCell; 
    };
    namespace Text {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TextNamespace {
        $gtype: GObject.GType<Text>;
        prototype: Text;
    }
    interface Text extends GObject.Object {
        add_selection(start_offset: number, end_offset: number): boolean;
        get_attribute_run(offset: number, include_defaults: boolean): [{ [key: string]: string }, number, number];
        get_text_attribute_value(offset: number, attribute_name: string): string | null;
        get_text_attributes(offset: number): [{ [key: string]: string }, number, number];
        get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[];
        get_caret_offset(): number;
        get_character_at_offset(offset: number): number;
        get_character_count(): number;
        get_character_extents(offset: number, type: CoordType): Rect;
        get_default_attributes(): { [key: string]: string };
        get_n_selections(): number;
        get_offset_at_point(x: number, y: number, type: CoordType): number;
        get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
        get_selection(selection_num: number): Range;
        get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
        get_text(start_offset: number, end_offset: number): string;
        get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
        get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
        get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
        remove_selection(selection_num: number): boolean;
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
        scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
        set_caret_offset(new_offset: number): boolean;
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    }
    export const Text: TextNamespace & {
        new (): Text; 
    };
    namespace Value {
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ValueNamespace {
        $gtype: GObject.GType<Value>;
        prototype: Value;
    }
    interface Value extends GObject.Object {
        get_current_value(): number;
        get_maximum_value(): number;
        get_minimum_increment(): number;
        get_minimum_value(): number;
        get_text(): string;
        set_current_value(new_value: number): boolean;
    }
    export const Value: ValueNamespace & {
        new (): Value; 
    };
    type ControllerEventMask = number;
    type DeviceEventMask = number;
    type KeyEventMask = number;
    type KeyMaskType = number;
    type KeystrokeListener = void;
    const __name__: string;
    const __version__: string;
}
export default Atspi;
}
declare module 'gi://Atspi' {
    import Atspi20 from 'gi://Atspi?version=2.0';
    export default Atspi20;
}
