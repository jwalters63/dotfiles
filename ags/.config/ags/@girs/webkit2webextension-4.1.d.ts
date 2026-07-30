declare module 'gi://WebKit2WebExtension?version=4.1' {
import type Soup from 'gi://Soup?version=3.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type JavaScriptCore from 'gi://JavaScriptCore?version=4.1';
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace WebKit2WebExtension {
    export namespace ConsoleMessageLevel {
        export const $gtype: GObject.GType<ConsoleMessageLevel>;
    }
    enum ConsoleMessageLevel {
        INFO,
        LOG,
        WARNING,
        ERROR,
        DEBUG,
    }
    export namespace ConsoleMessageSource {
        export const $gtype: GObject.GType<ConsoleMessageSource>;
    }
    enum ConsoleMessageSource {
        JAVASCRIPT,
        NETWORK,
        CONSOLE_API,
        SECURITY,
        OTHER,
    }
    enum ContextMenuAction {
        NO_ACTION,
        OPEN_LINK,
        OPEN_LINK_IN_NEW_WINDOW,
        DOWNLOAD_LINK_TO_DISK,
        COPY_LINK_TO_CLIPBOARD,
        OPEN_IMAGE_IN_NEW_WINDOW,
        DOWNLOAD_IMAGE_TO_DISK,
        COPY_IMAGE_TO_CLIPBOARD,
        COPY_IMAGE_URL_TO_CLIPBOARD,
        OPEN_FRAME_IN_NEW_WINDOW,
        GO_BACK,
        GO_FORWARD,
        STOP,
        RELOAD,
        COPY,
        CUT,
        PASTE,
        DELETE,
        SELECT_ALL,
        INPUT_METHODS,
        UNICODE,
        SPELLING_GUESS,
        NO_GUESSES_FOUND,
        IGNORE_SPELLING,
        LEARN_SPELLING,
        IGNORE_GRAMMAR,
        FONT_MENU,
        BOLD,
        ITALIC,
        UNDERLINE,
        OUTLINE,
        INSPECT_ELEMENT,
        OPEN_VIDEO_IN_NEW_WINDOW,
        OPEN_AUDIO_IN_NEW_WINDOW,
        COPY_VIDEO_LINK_TO_CLIPBOARD,
        COPY_AUDIO_LINK_TO_CLIPBOARD,
        TOGGLE_MEDIA_CONTROLS,
        TOGGLE_MEDIA_LOOP,
        ENTER_VIDEO_FULLSCREEN,
        MEDIA_PLAY,
        MEDIA_PAUSE,
        MEDIA_MUTE,
        DOWNLOAD_VIDEO_TO_DISK,
        DOWNLOAD_AUDIO_TO_DISK,
        INSERT_EMOJI,
        PASTE_AS_PLAIN_TEXT,
        CUSTOM,
    }
    export namespace FormSubmissionStep {
        export const $gtype: GObject.GType<FormSubmissionStep>;
    }
    enum FormSubmissionStep {
        SEND_DOM_EVENT,
        COMPLETE,
    }
    enum UserMessageError {
        USER_MESSAGE_UNHANDLED_MESSAGE,
    }
    const DOM_CSS_RULE_CHARSET_RULE: number;
    const DOM_CSS_RULE_FONT_FACE_RULE: number;
    const DOM_CSS_RULE_IMPORT_RULE: number;
    const DOM_CSS_RULE_MEDIA_RULE: number;
    const DOM_CSS_RULE_PAGE_RULE: number;
    const DOM_CSS_RULE_STYLE_RULE: number;
    const DOM_CSS_RULE_UNKNOWN_RULE: number;
    const DOM_CSS_VALUE_CSS_CUSTOM: number;
    const DOM_CSS_VALUE_CSS_INHERIT: number;
    const DOM_CSS_VALUE_CSS_PRIMITIVE_VALUE: number;
    const DOM_CSS_VALUE_CSS_VALUE_LIST: number;
    const DOM_ELEMENT_ALLOW_KEYBOARD_INPUT: number;
    const DOM_EVENT_AT_TARGET: number;
    const DOM_EVENT_BLUR: number;
    const DOM_EVENT_BUBBLING_PHASE: number;
    const DOM_EVENT_CAPTURING_PHASE: number;
    const DOM_EVENT_CHANGE: number;
    const DOM_EVENT_CLICK: number;
    const DOM_EVENT_DBLCLICK: number;
    const DOM_EVENT_DRAGDROP: number;
    const DOM_EVENT_FOCUS: number;
    const DOM_EVENT_KEYDOWN: number;
    const DOM_EVENT_KEYPRESS: number;
    const DOM_EVENT_KEYUP: number;
    const DOM_EVENT_MOUSEDOWN: number;
    const DOM_EVENT_MOUSEDRAG: number;
    const DOM_EVENT_MOUSEMOVE: number;
    const DOM_EVENT_MOUSEOUT: number;
    const DOM_EVENT_MOUSEOVER: number;
    const DOM_EVENT_MOUSEUP: number;
    const DOM_EVENT_NONE: number;
    const DOM_EVENT_SELECT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_LEFT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_NUMPAD: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_RIGHT: number;
    const DOM_KEYBOARD_EVENT_KEY_LOCATION_STANDARD: number;
    const DOM_NODE_ATTRIBUTE_NODE: number;
    const DOM_NODE_CDATA_SECTION_NODE: number;
    const DOM_NODE_COMMENT_NODE: number;
    const DOM_NODE_DOCUMENT_FRAGMENT_NODE: number;
    const DOM_NODE_DOCUMENT_NODE: number;
    const DOM_NODE_DOCUMENT_POSITION_CONTAINED_BY: number;
    const DOM_NODE_DOCUMENT_POSITION_CONTAINS: number;
    const DOM_NODE_DOCUMENT_POSITION_DISCONNECTED: number;
    const DOM_NODE_DOCUMENT_POSITION_FOLLOWING: number;
    const DOM_NODE_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    const DOM_NODE_DOCUMENT_POSITION_PRECEDING: number;
    const DOM_NODE_DOCUMENT_TYPE_NODE: number;
    const DOM_NODE_ELEMENT_NODE: number;
    const DOM_NODE_ENTITY_NODE: number;
    const DOM_NODE_ENTITY_REFERENCE_NODE: number;
    const DOM_NODE_FILTER_ACCEPT: number;
    const DOM_NODE_FILTER_REJECT: number;
    const DOM_NODE_FILTER_SHOW_ALL: number;
    const DOM_NODE_FILTER_SHOW_ATTRIBUTE: number;
    const DOM_NODE_FILTER_SHOW_CDATA_SECTION: number;
    const DOM_NODE_FILTER_SHOW_COMMENT: number;
    const DOM_NODE_FILTER_SHOW_DOCUMENT: number;
    const DOM_NODE_FILTER_SHOW_DOCUMENT_FRAGMENT: number;
    const DOM_NODE_FILTER_SHOW_DOCUMENT_TYPE: number;
    const DOM_NODE_FILTER_SHOW_ELEMENT: number;
    const DOM_NODE_FILTER_SHOW_ENTITY: number;
    const DOM_NODE_FILTER_SHOW_ENTITY_REFERENCE: number;
    const DOM_NODE_FILTER_SHOW_NOTATION: number;
    const DOM_NODE_FILTER_SHOW_PROCESSING_INSTRUCTION: number;
    const DOM_NODE_FILTER_SHOW_TEXT: number;
    const DOM_NODE_FILTER_SKIP: number;
    const DOM_NODE_PROCESSING_INSTRUCTION_NODE: number;
    const DOM_NODE_TEXT_NODE: number;
    const DOM_RANGE_END_TO_END: number;
    const DOM_RANGE_END_TO_START: number;
    const DOM_RANGE_NODE_AFTER: number;
    const DOM_RANGE_NODE_BEFORE: number;
    const DOM_RANGE_NODE_BEFORE_AND_AFTER: number;
    const DOM_RANGE_NODE_INSIDE: number;
    const DOM_RANGE_START_TO_END: number;
    const DOM_RANGE_START_TO_START: number;
    const DOM_XPATH_RESULT_ANY_TYPE: number;
    const DOM_XPATH_RESULT_ANY_UNORDERED_NODE_TYPE: number;
    const DOM_XPATH_RESULT_BOOLEAN_TYPE: number;
    const DOM_XPATH_RESULT_FIRST_ORDERED_NODE_TYPE: number;
    const DOM_XPATH_RESULT_NUMBER_TYPE: number;
    const DOM_XPATH_RESULT_ORDERED_NODE_ITERATOR_TYPE: number;
    const DOM_XPATH_RESULT_ORDERED_NODE_SNAPSHOT_TYPE: number;
    const DOM_XPATH_RESULT_STRING_TYPE: number;
    const DOM_XPATH_RESULT_UNORDERED_NODE_ITERATOR_TYPE: number;
    const DOM_XPATH_RESULT_UNORDERED_NODE_SNAPSHOT_TYPE: number;
    interface WebExtensionInitializeFunction {
        (extension: WebExtension): void;
    }
    interface WebExtensionInitializeWithUserDataFunction {
        (extension: WebExtension, user_data: GLib.Variant): void;
    }
    enum HitTestResultContext {
        DOCUMENT,
        LINK,
        IMAGE,
        MEDIA,
        EDITABLE,
        SCROLLBAR,
        SELECTION,
    }
    namespace ContextMenu {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ContextMenu extends GObject.Object {
        static $gtype: GObject.GType<ContextMenu>;
        $signals: ContextMenu.SignalSignatures;
        constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ContextMenu;
        static new_with_items(items: ContextMenuItem[]): ContextMenu;
        connect<K extends keyof ContextMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append(item: ContextMenuItem): void;
        first(): ContextMenuItem;
        get_event(): Gdk.Event;
        get_item_at_position(position: number): ContextMenuItem;
        get_items(): ContextMenuItem[];
        get_n_items(): number;
        get_position(): [boolean, number, number];
        get_user_data(): GLib.Variant;
        insert(item: ContextMenuItem, position: number): void;
        last(): ContextMenuItem;
        move_item(item: ContextMenuItem, position: number): void;
        prepend(item: ContextMenuItem): void;
        remove(item: ContextMenuItem): void;
        remove_all(): void;
        set_user_data(user_data: GLib.Variant): void;
    }
    namespace ContextMenuItem {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }
    class ContextMenuItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ContextMenuItem>;
        $signals: ContextMenuItem.SignalSignatures;
        constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](action: Gtk.Action): ContextMenuItem;
        static new_from_gaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem;
        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;
        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;
        static new_separator(): ContextMenuItem;
        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;
        connect<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(): Gtk.Action;
        get_gaction(): Gio.Action;
        get_gaction_target(): GLib.Variant | null;
        get_stock_action(): ContextMenuAction;
        get_submenu(): ContextMenu;
        get_title(): string;
        is_separator(): boolean;
        set_submenu(submenu: ContextMenu | null): void;
    }
    namespace DOMAttr {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::owner-element": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::specified": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            local_name: string;
            localName: string;
            name: string;
            namespace_uri: string;
            namespaceUri: string;
            owner_element: DOMElement;
            ownerElement: DOMElement;
            prefix: string;
            specified: boolean;
            value: string;
        }
    }
    class DOMAttr extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMAttr>;
        get local_name(): string;
        get localName(): string;
        get name(): string;
        get namespace_uri(): string;
        get namespaceUri(): string;
        get owner_element(): DOMElement;
        get ownerElement(): DOMElement;
        get prefix(): string;
        get specified(): boolean;
        get value(): string;
        set value(val: string);
        $signals: DOMAttr.SignalSignatures;
        constructor(properties?: Partial<DOMAttr.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMAttr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMAttr.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMAttr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMAttr.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMAttr.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMAttr.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_local_name(): string;
        get_name(): string;
        get_namespace_uri(): string;
        get_owner_element(): DOMElement;
        get_prefix(): string;
        get_specified(): boolean;
        get_value(): string;
        set_value(value: string): void;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMBlob {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            size: bigint | number;
        }
    }
    class DOMBlob extends DOMObject {
        static $gtype: GObject.GType<DOMBlob>;
        get size(): number;
        $signals: DOMBlob.SignalSignatures;
        constructor(properties?: Partial<DOMBlob.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMBlob.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMBlob.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMBlob.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMBlob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_size(): number;
    }
    namespace DOMCDATASection {
        interface SignalSignatures extends DOMText.SignalSignatures {
            "notify::whole-text": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMText.ConstructorProps, DOMEventTarget.ConstructorProps {}
    }
    class DOMCDATASection extends DOMText implements DOMEventTarget {
        static $gtype: GObject.GType<DOMCDATASection>;
        $signals: DOMCDATASection.SignalSignatures;
        constructor(properties?: Partial<DOMCDATASection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCDATASection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCDATASection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCDATASection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCDATASection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCDATASection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCDATASection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set_data(key: string, data: null): void;
        set_data(...args: never[]): any;
    }
    namespace DOMCSSRule {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::css-text": (pspec: GObject.ParamSpec) => void;
            "notify::parent-rule": (pspec: GObject.ParamSpec) => void;
            "notify::parent-style-sheet": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            css_text: string;
            cssText: string;
            parent_rule: DOMCSSRule;
            parentRule: DOMCSSRule;
            parent_style_sheet: DOMCSSStyleSheet;
            parentStyleSheet: DOMCSSStyleSheet;
            type: number;
        }
    }
    class DOMCSSRule extends DOMObject {
        static $gtype: GObject.GType<DOMCSSRule>;
        get css_text(): string;
        set css_text(val: string);
        get cssText(): string;
        set cssText(val: string);
        get parent_rule(): DOMCSSRule;
        get parentRule(): DOMCSSRule;
        get parent_style_sheet(): DOMCSSStyleSheet;
        get parentStyleSheet(): DOMCSSStyleSheet;
        get type(): number;
        $signals: DOMCSSRule.SignalSignatures;
        constructor(properties?: Partial<DOMCSSRule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCSSRule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSRule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCSSRule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSRule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCSSRule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCSSRule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_css_text(): string;
        get_parent_rule(): DOMCSSRule;
        get_parent_style_sheet(): DOMCSSStyleSheet;
        get_rule_type(): number;
        set_css_text(value: string): void;
    }
    namespace DOMCSSRuleList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMCSSRuleList extends DOMObject {
        static $gtype: GObject.GType<DOMCSSRuleList>;
        get length(): number;
        $signals: DOMCSSRuleList.SignalSignatures;
        constructor(properties?: Partial<DOMCSSRuleList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCSSRuleList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSRuleList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCSSRuleList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSRuleList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCSSRuleList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCSSRuleList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMCSSRule;
    }
    namespace DOMCSSStyleDeclaration {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::css-text": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::parent-rule": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            css_text: string;
            cssText: string;
            length: bigint | number;
            parent_rule: DOMCSSRule;
            parentRule: DOMCSSRule;
        }
    }
    class DOMCSSStyleDeclaration extends DOMObject {
        static $gtype: GObject.GType<DOMCSSStyleDeclaration>;
        get css_text(): string;
        set css_text(val: string);
        get cssText(): string;
        set cssText(val: string);
        get length(): number;
        get parent_rule(): DOMCSSRule;
        get parentRule(): DOMCSSRule;
        $signals: DOMCSSStyleDeclaration.SignalSignatures;
        constructor(properties?: Partial<DOMCSSStyleDeclaration.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCSSStyleDeclaration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSStyleDeclaration.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCSSStyleDeclaration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSStyleDeclaration.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCSSStyleDeclaration.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCSSStyleDeclaration.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_css_text(): string;
        get_length(): number;
        get_parent_rule(): DOMCSSRule;
        get_property_priority(propertyName: string): string;
        get_property_shorthand(propertyName: string): string;
        get_property_value(propertyName: string): string;
        is_property_implicit(propertyName: string): boolean;
        item(index: bigint | number): string;
        remove_property(propertyName: string): string;
        set_css_text(value: string): void;
        set_property(propertyName: string, value: string, priority: string): void;
        set_property(...args: never[]): any;
    }
    namespace DOMCSSStyleSheet {
        interface SignalSignatures extends DOMStyleSheet.SignalSignatures {
            "notify::css-rules": (pspec: GObject.ParamSpec) => void;
            "notify::owner-rule": (pspec: GObject.ParamSpec) => void;
            "notify::rules": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::media": (pspec: GObject.ParamSpec) => void;
            "notify::owner-node": (pspec: GObject.ParamSpec) => void;
            "notify::parent-style-sheet": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMStyleSheet.ConstructorProps {
            css_rules: DOMCSSRuleList;
            cssRules: DOMCSSRuleList;
            owner_rule: DOMCSSRule;
            ownerRule: DOMCSSRule;
            rules: DOMCSSRuleList;
        }
    }
    class DOMCSSStyleSheet extends DOMStyleSheet {
        static $gtype: GObject.GType<DOMCSSStyleSheet>;
        get css_rules(): DOMCSSRuleList;
        get cssRules(): DOMCSSRuleList;
        get owner_rule(): DOMCSSRule;
        get ownerRule(): DOMCSSRule;
        get rules(): DOMCSSRuleList;
        $signals: DOMCSSStyleSheet.SignalSignatures;
        constructor(properties?: Partial<DOMCSSStyleSheet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCSSStyleSheet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSStyleSheet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCSSStyleSheet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSStyleSheet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCSSStyleSheet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCSSStyleSheet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_rule(selector: string, style: string, index: bigint | number): number;
        delete_rule(index: bigint | number): void;
        get_css_rules(): DOMCSSRuleList;
        get_owner_rule(): DOMCSSRule;
        get_rules(): DOMCSSRuleList;
        insert_rule(rule: string, index: bigint | number): number;
        remove_rule(index: bigint | number): void;
    }
    namespace DOMCSSValue {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::css-text": (pspec: GObject.ParamSpec) => void;
            "notify::css-value-type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            css_text: string;
            cssText: string;
            css_value_type: number;
            cssValueType: number;
        }
    }
    class DOMCSSValue extends DOMObject {
        static $gtype: GObject.GType<DOMCSSValue>;
        get css_text(): string;
        set css_text(val: string);
        get cssText(): string;
        set cssText(val: string);
        get css_value_type(): number;
        get cssValueType(): number;
        $signals: DOMCSSValue.SignalSignatures;
        constructor(properties?: Partial<DOMCSSValue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCSSValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSValue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCSSValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCSSValue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCSSValue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCSSValue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_css_text(): string;
        get_css_value_type(): number;
        set_css_text(value: string): void;
    }
    namespace DOMCharacterData {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            data: string;
            length: bigint | number;
        }
    }
    class DOMCharacterData extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMCharacterData>;
        get data(): string;
        set data(val: string);
        get length(): number;
        $signals: DOMCharacterData.SignalSignatures;
        constructor(properties?: Partial<DOMCharacterData.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMCharacterData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCharacterData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMCharacterData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMCharacterData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMCharacterData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMCharacterData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append_data(data: string): void;
        delete_data(offset: bigint | number, length: bigint | number): void;
        get_data(): string;
        get_data(...args: never[]): any;
        get_length(): number;
        insert_data(offset: bigint | number, data: string): void;
        replace_data(offset: bigint | number, length: bigint | number, data: string): void;
        set_data(value: string): void;
        substring_data(offset: bigint | number, length: bigint | number): string;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMClientRect {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::bottom": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::left": (pspec: GObject.ParamSpec) => void;
            "notify::right": (pspec: GObject.ParamSpec) => void;
            "notify::top": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            bottom: number;
            height: number;
            left: number;
            right: number;
            top: number;
            width: number;
        }
    }
    class DOMClientRect extends DOMObject {
        static $gtype: GObject.GType<DOMClientRect>;
        get bottom(): number;
        get height(): number;
        get left(): number;
        get right(): number;
        get top(): number;
        get width(): number;
        $signals: DOMClientRect.SignalSignatures;
        constructor(properties?: Partial<DOMClientRect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMClientRect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMClientRect.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMClientRect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMClientRect.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMClientRect.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMClientRect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bottom(): number;
        get_height(): number;
        get_left(): number;
        get_right(): number;
        get_top(): number;
        get_width(): number;
    }
    namespace DOMClientRectList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMClientRectList extends DOMObject {
        static $gtype: GObject.GType<DOMClientRectList>;
        get length(): number;
        $signals: DOMClientRectList.SignalSignatures;
        constructor(properties?: Partial<DOMClientRectList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMClientRectList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMClientRectList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMClientRectList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMClientRectList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMClientRectList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMClientRectList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMClientRect;
    }
    namespace DOMComment {
        interface SignalSignatures extends DOMCharacterData.SignalSignatures {
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMCharacterData.ConstructorProps, DOMEventTarget.ConstructorProps {}
    }
    class DOMComment extends DOMCharacterData implements DOMEventTarget {
        static $gtype: GObject.GType<DOMComment>;
        $signals: DOMComment.SignalSignatures;
        constructor(properties?: Partial<DOMComment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMComment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMComment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMComment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMComment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMComment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMComment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set_data(key: string, data: null): void;
        set_data(...args: never[]): any;
    }
    namespace DOMDOMImplementation {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {}
    }
    class DOMDOMImplementation extends DOMObject {
        static $gtype: GObject.GType<DOMDOMImplementation>;
        $signals: DOMDOMImplementation.SignalSignatures;
        constructor(properties?: Partial<DOMDOMImplementation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDOMImplementation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMImplementation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDOMImplementation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMImplementation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDOMImplementation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDOMImplementation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create_css_style_sheet(title: string, media: string): DOMCSSStyleSheet;
        create_document(namespaceURI: string | null, qualifiedName: string, doctype: DOMDocumentType | null): DOMDocument;
        create_document_type(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;
        create_html_document(title: string): DOMHTMLDocument;
        has_feature(feature: string, version: string): boolean;
    }
    namespace DOMDOMSelection {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::anchor-node": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-offset": (pspec: GObject.ParamSpec) => void;
            "notify::base-node": (pspec: GObject.ParamSpec) => void;
            "notify::base-offset": (pspec: GObject.ParamSpec) => void;
            "notify::extent-node": (pspec: GObject.ParamSpec) => void;
            "notify::extent-offset": (pspec: GObject.ParamSpec) => void;
            "notify::focus-node": (pspec: GObject.ParamSpec) => void;
            "notify::focus-offset": (pspec: GObject.ParamSpec) => void;
            "notify::is-collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::range-count": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            anchor_node: DOMNode;
            anchorNode: DOMNode;
            anchor_offset: bigint | number;
            anchorOffset: bigint | number;
            base_node: DOMNode;
            baseNode: DOMNode;
            base_offset: bigint | number;
            baseOffset: bigint | number;
            extent_node: DOMNode;
            extentNode: DOMNode;
            extent_offset: bigint | number;
            extentOffset: bigint | number;
            focus_node: DOMNode;
            focusNode: DOMNode;
            focus_offset: bigint | number;
            focusOffset: bigint | number;
            is_collapsed: boolean;
            isCollapsed: boolean;
            range_count: bigint | number;
            rangeCount: bigint | number;
            type: string;
        }
    }
    class DOMDOMSelection extends DOMObject {
        static $gtype: GObject.GType<DOMDOMSelection>;
        get anchor_node(): DOMNode;
        get anchorNode(): DOMNode;
        get anchor_offset(): number;
        get anchorOffset(): number;
        get base_node(): DOMNode;
        get baseNode(): DOMNode;
        get base_offset(): number;
        get baseOffset(): number;
        get extent_node(): DOMNode;
        get extentNode(): DOMNode;
        get extent_offset(): number;
        get extentOffset(): number;
        get focus_node(): DOMNode;
        get focusNode(): DOMNode;
        get focus_offset(): number;
        get focusOffset(): number;
        get is_collapsed(): boolean;
        get isCollapsed(): boolean;
        get range_count(): number;
        get rangeCount(): number;
        get type(): string;
        $signals: DOMDOMSelection.SignalSignatures;
        constructor(properties?: Partial<DOMDOMSelection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDOMSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMSelection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDOMSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMSelection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDOMSelection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDOMSelection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_range(range: DOMRange): void;
        collapse(node: DOMNode, offset: bigint | number): void;
        collapse_to_end(): void;
        collapse_to_start(): void;
        contains_node(node: DOMNode, allowPartial: boolean): boolean;
        delete_from_document(): void;
        empty(): void;
        extend(node: DOMNode, offset: bigint | number): void;
        get_anchor_node(): DOMNode;
        get_anchor_offset(): number;
        get_base_node(): DOMNode;
        get_base_offset(): number;
        get_extent_node(): DOMNode;
        get_extent_offset(): number;
        get_focus_node(): DOMNode;
        get_focus_offset(): number;
        get_is_collapsed(): boolean;
        get_range_at(index: bigint | number): DOMRange;
        get_range_count(): number;
        get_selection_type(): string;
        modify(alter: string, direction: string, granularity: string): void;
        remove_all_ranges(): void;
        select_all_children(node: DOMNode): void;
        set_base_and_extent(baseNode: DOMNode, baseOffset: bigint | number, extentNode: DOMNode, extentOffset: bigint | number): void;
        set_position(node: DOMNode, offset: bigint | number): void;
    }
    namespace DOMDOMTokenList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
            value: string;
        }
    }
    class DOMDOMTokenList extends DOMObject {
        static $gtype: GObject.GType<DOMDOMTokenList>;
        get length(): number;
        get value(): string;
        set value(val: string);
        $signals: DOMDOMTokenList.SignalSignatures;
        constructor(properties?: Partial<DOMDOMTokenList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDOMTokenList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMTokenList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDOMTokenList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMTokenList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDOMTokenList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDOMTokenList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        contains(token: string): boolean;
        get_length(): number;
        get_value(): string;
        item(index: bigint | number): string;
        replace(token: string, newToken: string): void;
        set_value(value: string): void;
        toggle(token: string, force: boolean): boolean;
    }
    namespace DOMDOMWindow {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::closed": (pspec: GObject.ParamSpec) => void;
            "notify::default-status": (pspec: GObject.ParamSpec) => void;
            "notify::device-pixel-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::frame-element": (pspec: GObject.ParamSpec) => void;
            "notify::frames": (pspec: GObject.ParamSpec) => void;
            "notify::inner-height": (pspec: GObject.ParamSpec) => void;
            "notify::inner-width": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::offscreen-buffering": (pspec: GObject.ParamSpec) => void;
            "notify::opener": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::outer-height": (pspec: GObject.ParamSpec) => void;
            "notify::outer-width": (pspec: GObject.ParamSpec) => void;
            "notify::page-x-offset": (pspec: GObject.ParamSpec) => void;
            "notify::page-xoffset": (pspec: GObject.ParamSpec) => void;
            "notify::page-y-offset": (pspec: GObject.ParamSpec) => void;
            "notify::page-yoffset": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::screen-left": (pspec: GObject.ParamSpec) => void;
            "notify::screen-top": (pspec: GObject.ParamSpec) => void;
            "notify::screen-x": (pspec: GObject.ParamSpec) => void;
            "notify::screen-y": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-x": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-y": (pspec: GObject.ParamSpec) => void;
            "notify::self": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::top": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps, DOMEventTarget.ConstructorProps {
            closed: boolean;
            default_status: string;
            defaultStatus: string;
            device_pixel_ratio: number;
            devicePixelRatio: number;
            document: DOMDocument;
            frame_element: DOMElement;
            frameElement: DOMElement;
            frames: DOMDOMWindow;
            inner_height: bigint | number;
            innerHeight: bigint | number;
            inner_width: bigint | number;
            innerWidth: bigint | number;
            length: bigint | number;
            name: string;
            offscreen_buffering: boolean;
            offscreenBuffering: boolean;
            opener: DOMDOMWindow;
            orientation: bigint | number;
            outer_height: bigint | number;
            outerHeight: bigint | number;
            outer_width: bigint | number;
            outerWidth: bigint | number;
            page_x_offset: bigint | number;
            pageXOffset: bigint | number;
            page_y_offset: bigint | number;
            pageYOffset: bigint | number;
            parent: DOMDOMWindow;
            screen_left: bigint | number;
            screenLeft: bigint | number;
            screen_top: bigint | number;
            screenTop: bigint | number;
            screen_x: bigint | number;
            screenX: bigint | number;
            screen_y: bigint | number;
            screenY: bigint | number;
            scroll_x: bigint | number;
            scrollX: bigint | number;
            scroll_y: bigint | number;
            scrollY: bigint | number;
            self: DOMDOMWindow;
            status: string;
            top: DOMDOMWindow;
            window: DOMDOMWindow;
        }
    }
    class DOMDOMWindow extends DOMObject implements DOMEventTarget {
        static $gtype: GObject.GType<DOMDOMWindow>;
        get closed(): boolean;
        get default_status(): string;
        set default_status(val: string);
        get defaultStatus(): string;
        set defaultStatus(val: string);
        get device_pixel_ratio(): number;
        get devicePixelRatio(): number;
        get document(): DOMDocument;
        get frame_element(): DOMElement;
        get frameElement(): DOMElement;
        get frames(): DOMDOMWindow;
        get inner_height(): number;
        get innerHeight(): number;
        get inner_width(): number;
        get innerWidth(): number;
        get length(): number;
        get name(): string;
        set name(val: string);
        get offscreen_buffering(): boolean;
        get offscreenBuffering(): boolean;
        get opener(): DOMDOMWindow;
        get orientation(): number;
        get outer_height(): number;
        get outerHeight(): number;
        get outer_width(): number;
        get outerWidth(): number;
        get page_x_offset(): number;
        get pageXOffset(): number;
        get page_y_offset(): number;
        get pageYOffset(): number;
        get parent(): DOMDOMWindow;
        get screen_left(): number;
        get screenLeft(): number;
        get screen_top(): number;
        get screenTop(): number;
        get screen_x(): number;
        get screenX(): number;
        get screen_y(): number;
        get screenY(): number;
        get scroll_x(): number;
        get scrollX(): number;
        get scroll_y(): number;
        get scrollY(): number;
        get self(): DOMDOMWindow;
        get status(): string;
        set status(val: string);
        get top(): DOMDOMWindow;
        get window(): DOMDOMWindow;
        $signals: DOMDOMWindow.SignalSignatures;
        constructor(properties?: Partial<DOMDOMWindow.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDOMWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDOMWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDOMWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDOMWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDOMWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        alert(message: string): void;
        blur(): void;
        capture_events(): void;
        close(): void;
        confirm(message: string): boolean;
        find(string: string, caseSensitive: boolean, backwards: boolean, wrap: boolean, wholeWord: boolean, searchInFrames: boolean, showDialog: boolean): boolean;
        focus(): void;
        get_closed(): boolean;
        get_computed_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
        get_default_status(): string;
        get_device_pixel_ratio(): number;
        get_document(): DOMDocument;
        get_frame_element(): DOMElement;
        get_frames(): DOMDOMWindow;
        get_inner_height(): number;
        get_inner_width(): number;
        get_length(): number;
        get_name(): string;
        get_offscreen_buffering(): boolean;
        get_opener(): DOMDOMWindow;
        get_orientation(): number;
        get_outer_height(): number;
        get_outer_width(): number;
        get_page_x_offset(): number;
        get_page_y_offset(): number;
        get_parent(): DOMDOMWindow;
        get_screen_left(): number;
        get_screen_top(): number;
        get_screen_x(): number;
        get_screen_y(): number;
        get_scroll_x(): number;
        get_scroll_y(): number;
        get_selection(): DOMDOMSelection;
        get_self(): DOMDOMWindow;
        get_status(): string;
        get_top(): DOMDOMWindow;
        get_window(): DOMDOMWindow;
        move_by(x: number, y: number): void;
        move_to(x: number, y: number): void;
        print(): void;
        prompt(message: string, defaultValue: string): string;
        release_events(): void;
        resize_by(x: number, y: number): void;
        resize_to(width: number, height: number): void;
        scroll_by(x: number, y: number): void;
        scroll_to(x: number, y: number): void;
        set_default_status(value: string): void;
        set_name(value: string): void;
        set_status(value: string): void;
        stop(): void;
        webkit_message_handlers_post_message(handler: string, message: string): boolean;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMDocument {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::active-element": (pspec: GObject.ParamSpec) => void;
            "notify::anchors": (pspec: GObject.ParamSpec) => void;
            "notify::applets": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::character-set": (pspec: GObject.ParamSpec) => void;
            "notify::charset": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::compat-mode": (pspec: GObject.ParamSpec) => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::cookie": (pspec: GObject.ParamSpec) => void;
            "notify::current-script": (pspec: GObject.ParamSpec) => void;
            "notify::default-view": (pspec: GObject.ParamSpec) => void;
            "notify::design-mode": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::doctype": (pspec: GObject.ParamSpec) => void;
            "notify::document-element": (pspec: GObject.ParamSpec) => void;
            "notify::document-uri": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
            "notify::embeds": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::forms": (pspec: GObject.ParamSpec) => void;
            "notify::head": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::images": (pspec: GObject.ParamSpec) => void;
            "notify::implementation": (pspec: GObject.ParamSpec) => void;
            "notify::input-encoding": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-modified": (pspec: GObject.ParamSpec) => void;
            "notify::links": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::plugins": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-lock-element": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-stylesheet-set": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::referrer": (pspec: GObject.ParamSpec) => void;
            "notify::scripts": (pspec: GObject.ParamSpec) => void;
            "notify::scrolling-element": (pspec: GObject.ParamSpec) => void;
            "notify::selected-stylesheet-set": (pspec: GObject.ParamSpec) => void;
            "notify::style-sheets": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::visibility-state": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-current-full-screen-element": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-full-screen-keyboard-input-allowed": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-fullscreen-element": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-fullscreen-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-is-full-screen": (pspec: GObject.ParamSpec) => void;
            "notify::xml-encoding": (pspec: GObject.ParamSpec) => void;
            "notify::xml-standalone": (pspec: GObject.ParamSpec) => void;
            "notify::xml-version": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            active_element: DOMElement;
            activeElement: DOMElement;
            anchors: DOMHTMLCollection;
            applets: DOMHTMLCollection;
            body: DOMHTMLElement;
            character_set: string;
            characterSet: string;
            charset: string;
            child_element_count: bigint | number;
            childElementCount: bigint | number;
            children: DOMHTMLCollection;
            compat_mode: string;
            compatMode: string;
            content_type: string;
            contentType: string;
            cookie: string;
            current_script: DOMHTMLScriptElement;
            currentScript: DOMHTMLScriptElement;
            default_view: DOMDOMWindow;
            defaultView: DOMDOMWindow;
            design_mode: string;
            designMode: string;
            dir: string;
            doctype: DOMDocumentType;
            document_element: DOMElement;
            documentElement: DOMElement;
            document_uri: string;
            documentUri: string;
            domain: string;
            embeds: DOMHTMLCollection;
            first_element_child: DOMElement;
            firstElementChild: DOMElement;
            forms: DOMHTMLCollection;
            head: DOMHTMLHeadElement;
            hidden: boolean;
            images: DOMHTMLCollection;
            implementation: DOMDOMImplementation;
            input_encoding: string;
            inputEncoding: string;
            last_element_child: DOMElement;
            lastElementChild: DOMElement;
            last_modified: string;
            lastModified: string;
            links: DOMHTMLCollection;
            origin: string;
            plugins: DOMHTMLCollection;
            pointer_lock_element: DOMElement;
            pointerLockElement: DOMElement;
            preferred_stylesheet_set: string;
            preferredStylesheetSet: string;
            ready_state: string;
            readyState: string;
            referrer: string;
            scripts: DOMHTMLCollection;
            scrolling_element: DOMElement;
            scrollingElement: DOMElement;
            selected_stylesheet_set: string;
            selectedStylesheetSet: string;
            style_sheets: DOMStyleSheetList;
            styleSheets: DOMStyleSheetList;
            title: string;
            url: string;
            visibility_state: string;
            visibilityState: string;
            webkit_current_full_screen_element: DOMElement;
            webkitCurrentFullScreenElement: DOMElement;
            webkit_full_screen_keyboard_input_allowed: boolean;
            webkitFullScreenKeyboardInputAllowed: boolean;
            webkit_fullscreen_element: DOMElement;
            webkitFullscreenElement: DOMElement;
            webkit_fullscreen_enabled: boolean;
            webkitFullscreenEnabled: boolean;
            webkit_is_full_screen: boolean;
            webkitIsFullScreen: boolean;
            xml_encoding: string;
            xmlEncoding: string;
            xml_standalone: boolean;
            xmlStandalone: boolean;
            xml_version: string;
            xmlVersion: string;
        }
    }
    class DOMDocument extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMDocument>;
        get active_element(): DOMElement;
        get activeElement(): DOMElement;
        get anchors(): DOMHTMLCollection;
        get applets(): DOMHTMLCollection;
        get body(): DOMHTMLElement;
        get character_set(): string;
        get characterSet(): string;
        get charset(): string;
        set charset(val: string);
        get child_element_count(): number;
        get childElementCount(): number;
        get children(): DOMHTMLCollection;
        get compat_mode(): string;
        get compatMode(): string;
        get content_type(): string;
        get contentType(): string;
        get cookie(): string;
        set cookie(val: string);
        get current_script(): DOMHTMLScriptElement;
        get currentScript(): DOMHTMLScriptElement;
        get default_view(): DOMDOMWindow;
        get defaultView(): DOMDOMWindow;
        get design_mode(): string;
        set design_mode(val: string);
        get designMode(): string;
        set designMode(val: string);
        get dir(): string;
        set dir(val: string);
        get doctype(): DOMDocumentType;
        get document_element(): DOMElement;
        get documentElement(): DOMElement;
        get document_uri(): string;
        set document_uri(val: string);
        get documentUri(): string;
        set documentUri(val: string);
        get domain(): string;
        get embeds(): DOMHTMLCollection;
        get first_element_child(): DOMElement;
        get firstElementChild(): DOMElement;
        get forms(): DOMHTMLCollection;
        get head(): DOMHTMLHeadElement;
        get hidden(): boolean;
        get images(): DOMHTMLCollection;
        get implementation(): DOMDOMImplementation;
        get input_encoding(): string;
        get inputEncoding(): string;
        get last_element_child(): DOMElement;
        get lastElementChild(): DOMElement;
        get last_modified(): string;
        get lastModified(): string;
        get links(): DOMHTMLCollection;
        get origin(): string;
        get plugins(): DOMHTMLCollection;
        get pointer_lock_element(): DOMElement;
        get pointerLockElement(): DOMElement;
        get preferred_stylesheet_set(): string;
        get preferredStylesheetSet(): string;
        get ready_state(): string;
        get readyState(): string;
        get referrer(): string;
        get scripts(): DOMHTMLCollection;
        get scrolling_element(): DOMElement;
        get scrollingElement(): DOMElement;
        get selected_stylesheet_set(): string;
        set selected_stylesheet_set(val: string);
        get selectedStylesheetSet(): string;
        set selectedStylesheetSet(val: string);
        get style_sheets(): DOMStyleSheetList;
        get styleSheets(): DOMStyleSheetList;
        get title(): string;
        set title(val: string);
        get url(): string;
        get visibility_state(): string;
        get visibilityState(): string;
        get webkit_current_full_screen_element(): DOMElement;
        get webkitCurrentFullScreenElement(): DOMElement;
        get webkit_full_screen_keyboard_input_allowed(): boolean;
        get webkitFullScreenKeyboardInputAllowed(): boolean;
        get webkit_fullscreen_element(): DOMElement;
        get webkitFullscreenElement(): DOMElement;
        get webkit_fullscreen_enabled(): boolean;
        get webkitFullscreenEnabled(): boolean;
        get webkit_is_full_screen(): boolean;
        get webkitIsFullScreen(): boolean;
        get xml_encoding(): string;
        get xmlEncoding(): string;
        get xml_standalone(): boolean;
        set xml_standalone(val: boolean);
        get xmlStandalone(): boolean;
        set xmlStandalone(val: boolean);
        get xml_version(): string;
        set xml_version(val: string);
        get xmlVersion(): string;
        set xmlVersion(val: string);
        $signals: DOMDocument.SignalSignatures;
        constructor(properties?: Partial<DOMDocument.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDocument.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocument.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDocument.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocument.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDocument.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDocument.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        adopt_node(source: DOMNode): DOMNode;
        caret_range_from_point(x: bigint | number, y: bigint | number): DOMRange;
        create_attribute(name: string): DOMAttr;
        create_attribute_ns(namespaceURI: string | null, qualifiedName: string): DOMAttr;
        create_cdata_section(data: string): DOMCDATASection;
        create_comment(data: string): DOMComment;
        create_css_style_declaration(): DOMCSSStyleDeclaration;
        create_document_fragment(): DOMDocumentFragment;
        create_element(tagName: string): DOMElement;
        create_element_ns(namespaceURI: string | null, qualifiedName: string): DOMElement;
        create_entity_reference(name: string | null): DOMEntityReference;
        create_event(eventType: string): DOMEvent;
        create_expression(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;
        create_node_iterator(root: DOMNode, whatToShow: bigint | number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMNodeIterator;
        create_ns_resolver(nodeResolver: DOMNode): DOMXPathNSResolver;
        create_processing_instruction(target: string, data: string): DOMProcessingInstruction;
        create_range(): DOMRange;
        create_text_node(data: string): DOMText;
        create_tree_walker(root: DOMNode, whatToShow: bigint | number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMTreeWalker;
        element_from_point(x: bigint | number, y: bigint | number): DOMElement;
        evaluate(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver | null, type: number, inResult: DOMXPathResult | null): DOMXPathResult;
        exec_command(command: string, userInterface: boolean, value: string): boolean;
        exit_pointer_lock(): void;
        get_active_element(): DOMElement;
        get_anchors(): DOMHTMLCollection;
        get_applets(): DOMHTMLCollection;
        get_body(): DOMHTMLElement;
        get_character_set(): string;
        get_charset(): string;
        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_compat_mode(): string;
        get_content_type(): string;
        get_cookie(): string;
        get_current_script(): DOMHTMLScriptElement;
        get_default_charset(): string;
        get_default_view(): DOMDOMWindow;
        get_design_mode(): string;
        get_dir(): string;
        get_doctype(): DOMDocumentType;
        get_document_element(): DOMElement;
        get_document_uri(): string;
        get_domain(): string;
        get_element_by_id(elementId: string): DOMElement;
        get_elements_by_class_name(class_name: string): DOMNodeList;
        get_elements_by_class_name_as_html_collection(classNames: string): DOMHTMLCollection;
        get_elements_by_name(elementName: string): DOMNodeList;
        get_elements_by_tag_name(tag_name: string): DOMNodeList;
        get_elements_by_tag_name_as_html_collection(tagname: string): DOMHTMLCollection;
        get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
        get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
        get_embeds(): DOMHTMLCollection;
        get_first_element_child(): DOMElement;
        get_forms(): DOMHTMLCollection;
        get_head(): DOMHTMLHeadElement;
        get_hidden(): boolean;
        get_images(): DOMHTMLCollection;
        get_implementation(): DOMDOMImplementation;
        get_input_encoding(): string;
        get_last_element_child(): DOMElement;
        get_last_modified(): string;
        get_links(): DOMHTMLCollection;
        get_origin(): string;
        get_override_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
        get_plugins(): DOMHTMLCollection;
        get_pointer_lock_element(): DOMElement;
        get_preferred_stylesheet_set(): string;
        get_ready_state(): string;
        get_referrer(): string;
        get_scripts(): DOMHTMLCollection;
        get_scrolling_element(): DOMElement;
        get_selected_stylesheet_set(): string;
        get_style_sheets(): DOMStyleSheetList;
        get_title(): string;
        get_url(): string;
        get_visibility_state(): string;
        get_webkit_current_fullscreen_element(): DOMElement;
        get_webkit_fullscreen_element(): DOMElement;
        get_webkit_fullscreen_enabled(): boolean;
        get_webkit_fullscreen_keyboard_input_allowed(): boolean;
        get_webkit_is_fullscreen(): boolean;
        get_xml_encoding(): string;
        get_xml_standalone(): boolean;
        get_xml_version(): string;
        has_focus(): boolean;
        import_node(importedNode: DOMNode, deep: boolean): DOMNode;
        query_command_enabled(command: string): boolean;
        query_command_indeterm(command: string): boolean;
        query_command_state(command: string): boolean;
        query_command_supported(command: string): boolean;
        query_command_value(command: string): string;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
        set_body(value: DOMHTMLElement): void;
        set_charset(value: string): void;
        set_cookie(value: string): void;
        set_design_mode(value: string): void;
        set_dir(value: string): void;
        set_document_uri(value: string): void;
        set_selected_stylesheet_set(value: string): void;
        set_title(value: string): void;
        set_xml_standalone(value: boolean): void;
        set_xml_version(value: string): void;
        webkit_cancel_fullscreen(): void;
        webkit_exit_fullscreen(): void;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMDocumentFragment {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            child_element_count: bigint | number;
            childElementCount: bigint | number;
            children: DOMHTMLCollection;
            first_element_child: DOMElement;
            firstElementChild: DOMElement;
            last_element_child: DOMElement;
            lastElementChild: DOMElement;
        }
    }
    class DOMDocumentFragment extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMDocumentFragment>;
        get child_element_count(): number;
        get childElementCount(): number;
        get children(): DOMHTMLCollection;
        get first_element_child(): DOMElement;
        get firstElementChild(): DOMElement;
        get last_element_child(): DOMElement;
        get lastElementChild(): DOMElement;
        $signals: DOMDocumentFragment.SignalSignatures;
        constructor(properties?: Partial<DOMDocumentFragment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDocumentFragment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocumentFragment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDocumentFragment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocumentFragment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDocumentFragment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDocumentFragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_element_by_id(elementId: string): DOMElement;
        get_first_element_child(): DOMElement;
        get_last_element_child(): DOMElement;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMDocumentType {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::entities": (pspec: GObject.ParamSpec) => void;
            "notify::internal-subset": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::notations": (pspec: GObject.ParamSpec) => void;
            "notify::public-id": (pspec: GObject.ParamSpec) => void;
            "notify::system-id": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            entities: DOMNamedNodeMap;
            internal_subset: string;
            internalSubset: string;
            name: string;
            notations: DOMNamedNodeMap;
            public_id: string;
            publicId: string;
            system_id: string;
            systemId: string;
        }
    }
    class DOMDocumentType extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMDocumentType>;
        get entities(): DOMNamedNodeMap;
        get internal_subset(): string;
        get internalSubset(): string;
        get name(): string;
        get notations(): DOMNamedNodeMap;
        get public_id(): string;
        get publicId(): string;
        get system_id(): string;
        get systemId(): string;
        $signals: DOMDocumentType.SignalSignatures;
        constructor(properties?: Partial<DOMDocumentType.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMDocumentType.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocumentType.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMDocumentType.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMDocumentType.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMDocumentType.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMDocumentType.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_entities(): DOMNamedNodeMap;
        get_internal_subset(): string;
        get_name(): string;
        get_notations(): DOMNamedNodeMap;
        get_public_id(): string;
        get_system_id(): string;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMElement {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {
            attributes: DOMNamedNodeMap;
            child_element_count: bigint | number;
            childElementCount: bigint | number;
            children: DOMHTMLCollection;
            class_list: DOMDOMTokenList;
            classList: DOMDOMTokenList;
            class_name: string;
            className: string;
            client_height: number;
            clientHeight: number;
            client_left: number;
            clientLeft: number;
            client_top: number;
            clientTop: number;
            client_width: number;
            clientWidth: number;
            first_element_child: DOMElement;
            firstElementChild: DOMElement;
            id: string;
            inner_html: string;
            innerHtml: string;
            last_element_child: DOMElement;
            lastElementChild: DOMElement;
            local_name: string;
            localName: string;
            namespace_uri: string;
            namespaceUri: string;
            next_element_sibling: DOMElement;
            nextElementSibling: DOMElement;
            offset_height: number;
            offsetHeight: number;
            offset_left: number;
            offsetLeft: number;
            offset_parent: DOMElement;
            offsetParent: DOMElement;
            offset_top: number;
            offsetTop: number;
            offset_width: number;
            offsetWidth: number;
            outer_html: string;
            outerHtml: string;
            prefix: string;
            previous_element_sibling: DOMElement;
            previousElementSibling: DOMElement;
            scroll_height: bigint | number;
            scrollHeight: bigint | number;
            scroll_left: bigint | number;
            scrollLeft: bigint | number;
            scroll_top: bigint | number;
            scrollTop: bigint | number;
            scroll_width: bigint | number;
            scrollWidth: bigint | number;
            style: DOMCSSStyleDeclaration;
            tag_name: string;
            tagName: string;
            webkit_region_overset: string;
            webkitRegionOverset: string;
        }
    }
    class DOMElement extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMElement>;
        get attributes(): DOMNamedNodeMap;
        get child_element_count(): number;
        get childElementCount(): number;
        get children(): DOMHTMLCollection;
        get class_list(): DOMDOMTokenList;
        get classList(): DOMDOMTokenList;
        get class_name(): string;
        set class_name(val: string);
        get className(): string;
        set className(val: string);
        get client_height(): number;
        get clientHeight(): number;
        get client_left(): number;
        get clientLeft(): number;
        get client_top(): number;
        get clientTop(): number;
        get client_width(): number;
        get clientWidth(): number;
        get first_element_child(): DOMElement;
        get firstElementChild(): DOMElement;
        get id(): string;
        set id(val: string);
        get inner_html(): string;
        set inner_html(val: string);
        get innerHtml(): string;
        set innerHtml(val: string);
        get last_element_child(): DOMElement;
        get lastElementChild(): DOMElement;
        get local_name(): string;
        get localName(): string;
        get namespace_uri(): string;
        get namespaceUri(): string;
        get next_element_sibling(): DOMElement;
        get nextElementSibling(): DOMElement;
        get offset_height(): number;
        get offsetHeight(): number;
        get offset_left(): number;
        get offsetLeft(): number;
        get offset_parent(): DOMElement;
        get offsetParent(): DOMElement;
        get offset_top(): number;
        get offsetTop(): number;
        get offset_width(): number;
        get offsetWidth(): number;
        get outer_html(): string;
        set outer_html(val: string);
        get outerHtml(): string;
        set outerHtml(val: string);
        get prefix(): string;
        get previous_element_sibling(): DOMElement;
        get previousElementSibling(): DOMElement;
        get scroll_height(): number;
        get scrollHeight(): number;
        get scroll_left(): number;
        set scroll_left(val: bigint | number);
        get scrollLeft(): number;
        set scrollLeft(val: bigint | number);
        get scroll_top(): number;
        set scroll_top(val: bigint | number);
        get scrollTop(): number;
        set scrollTop(val: bigint | number);
        get scroll_width(): number;
        get scrollWidth(): number;
        get style(): DOMCSSStyleDeclaration;
        get tag_name(): string;
        get tagName(): string;
        get webkit_region_overset(): string;
        get webkitRegionOverset(): string;
        $signals: DOMElement.SignalSignatures;
        constructor(properties?: Partial<DOMElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        blur(): void;
        closest(selectors: string): DOMElement;
        focus(): void;
        get_attribute(name: string): string;
        get_attribute_node(name: string): DOMAttr;
        get_attribute_node_ns(namespaceURI: string, localName: string): DOMAttr;
        get_attribute_ns(namespaceURI: string, localName: string): string;
        get_attributes(): DOMNamedNodeMap;
        get_bounding_client_rect(): DOMClientRect;
        get_child_element_count(): number;
        get_children(): DOMHTMLCollection;
        get_class_list(): DOMDOMTokenList;
        get_class_name(): string;
        get_client_height(): number;
        get_client_left(): number;
        get_client_rects(): DOMClientRectList;
        get_client_top(): number;
        get_client_width(): number;
        get_elements_by_class_name(class_name: string): DOMNodeList;
        get_elements_by_class_name_as_html_collection(name: string): DOMHTMLCollection;
        get_elements_by_tag_name(tag_name: string): DOMNodeList;
        get_elements_by_tag_name_as_html_collection(name: string): DOMHTMLCollection;
        get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
        get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
        get_first_element_child(): DOMElement;
        get_id(): string;
        get_inner_html(): string;
        get_last_element_child(): DOMElement;
        get_local_name(): string;
        get_namespace_uri(): string;
        get_next_element_sibling(): DOMElement;
        get_offset_height(): number;
        get_offset_left(): number;
        get_offset_parent(): DOMElement;
        get_offset_top(): number;
        get_offset_width(): number;
        get_outer_html(): string;
        get_prefix(): string;
        get_previous_element_sibling(): DOMElement;
        get_scroll_height(): number;
        get_scroll_left(): number;
        get_scroll_top(): number;
        get_scroll_width(): number;
        get_style(): DOMCSSStyleDeclaration;
        get_tag_name(): string;
        get_webkit_region_overset(): string;
        has_attribute(name: string): boolean;
        has_attribute_ns(namespaceURI: string, localName: string): boolean;
        has_attributes(): boolean;
        html_input_element_get_auto_filled(): boolean;
        html_input_element_is_user_edited(): boolean;
        html_input_element_set_auto_filled(auto_filled: boolean): void;
        html_input_element_set_editing_value(value: string): void;
        insert_adjacent_element(where: string, element: DOMElement): DOMElement;
        insert_adjacent_html(where: string, html: string): void;
        insert_adjacent_text(where: string, text: string): void;
        matches(selectors: string): boolean;
        query_selector(selectors: string): DOMElement;
        query_selector_all(selectors: string): DOMNodeList;
        remove(): void;
        remove_attribute(name: string): void;
        remove_attribute_node(oldAttr: DOMAttr): DOMAttr;
        remove_attribute_ns(namespaceURI: string, localName: string): void;
        request_pointer_lock(): void;
        scroll_by_lines(lines: bigint | number): void;
        scroll_by_pages(pages: bigint | number): void;
        scroll_into_view(alignWithTop: boolean): void;
        scroll_into_view_if_needed(centerIfNeeded: boolean): void;
        set_attribute(name: string, value: string): void;
        set_attribute_node(newAttr: DOMAttr): DOMAttr;
        set_attribute_node_ns(newAttr: DOMAttr): DOMAttr;
        set_attribute_ns(namespaceURI: string | null, qualifiedName: string, value: string): void;
        set_class_name(value: string): void;
        set_id(value: string): void;
        set_inner_html(value: string): void;
        set_outer_html(value: string): void;
        set_scroll_left(value: bigint | number): void;
        set_scroll_top(value: bigint | number): void;
        webkit_matches_selector(selectors: string): boolean;
        webkit_request_fullscreen(): void;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMEntityReference {
        interface SignalSignatures extends DOMNode.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMNode.ConstructorProps, DOMEventTarget.ConstructorProps {}
    }
    class DOMEntityReference extends DOMNode implements DOMEventTarget {
        static $gtype: GObject.GType<DOMEntityReference>;
        $signals: DOMEntityReference.SignalSignatures;
        constructor(properties?: Partial<DOMEntityReference.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMEntityReference.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMEntityReference.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMEntityReference.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMEntityReference.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMEntityReference.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMEntityReference.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMEvent {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::bubbles": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-bubble": (pspec: GObject.ParamSpec) => void;
            "notify::cancelable": (pspec: GObject.ParamSpec) => void;
            "notify::current-target": (pspec: GObject.ParamSpec) => void;
            "notify::event-phase": (pspec: GObject.ParamSpec) => void;
            "notify::return-value": (pspec: GObject.ParamSpec) => void;
            "notify::src-element": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::time-stamp": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            bubbles: boolean;
            cancel_bubble: boolean;
            cancelBubble: boolean;
            cancelable: boolean;
            current_target: DOMEventTarget;
            currentTarget: DOMEventTarget;
            event_phase: number;
            eventPhase: number;
            return_value: boolean;
            returnValue: boolean;
            src_element: DOMEventTarget;
            srcElement: DOMEventTarget;
            target: DOMEventTarget;
            time_stamp: number;
            timeStamp: number;
            type: string;
        }
    }
    class DOMEvent extends DOMObject {
        static $gtype: GObject.GType<DOMEvent>;
        get bubbles(): boolean;
        get cancel_bubble(): boolean;
        set cancel_bubble(val: boolean);
        get cancelBubble(): boolean;
        set cancelBubble(val: boolean);
        get cancelable(): boolean;
        get current_target(): DOMEventTarget;
        get currentTarget(): DOMEventTarget;
        get event_phase(): number;
        get eventPhase(): number;
        get return_value(): boolean;
        set return_value(val: boolean);
        get returnValue(): boolean;
        set returnValue(val: boolean);
        get src_element(): DOMEventTarget;
        get srcElement(): DOMEventTarget;
        get target(): DOMEventTarget;
        get time_stamp(): number;
        get timeStamp(): number;
        get type(): string;
        $signals: DOMEvent.SignalSignatures;
        constructor(properties?: Partial<DOMEvent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bubbles(): boolean;
        get_cancel_bubble(): boolean;
        get_cancelable(): boolean;
        get_current_target(): DOMEventTarget;
        get_event_phase(): number;
        get_event_type(): string;
        get_return_value(): boolean;
        get_src_element(): DOMEventTarget;
        get_target(): DOMEventTarget;
        get_time_stamp(): number;
        init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
        prevent_default(): void;
        set_cancel_bubble(value: boolean): void;
        set_return_value(value: boolean): void;
        stop_propagation(): void;
    }
    namespace DOMFile {
        interface SignalSignatures extends DOMBlob.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMBlob.ConstructorProps {
            name: string;
        }
    }
    class DOMFile extends DOMBlob {
        static $gtype: GObject.GType<DOMFile>;
        get name(): string;
        $signals: DOMFile.SignalSignatures;
        constructor(properties?: Partial<DOMFile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
    }
    namespace DOMFileList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMFileList extends DOMObject {
        static $gtype: GObject.GType<DOMFileList>;
        get length(): number;
        $signals: DOMFileList.SignalSignatures;
        constructor(properties?: Partial<DOMFileList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMFileList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMFileList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMFileList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMFileList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMFileList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMFileList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMFile;
    }
    namespace DOMHTMLAnchorElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::charset": (pspec: GObject.ParamSpec) => void;
            "notify::coords": (pspec: GObject.ParamSpec) => void;
            "notify::hash": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::hostname": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::hreflang": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::pathname": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::rel": (pspec: GObject.ParamSpec) => void;
            "notify::rev": (pspec: GObject.ParamSpec) => void;
            "notify::search": (pspec: GObject.ParamSpec) => void;
            "notify::shape": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            charset: string;
            coords: string;
            hash: string;
            host: string;
            hostname: string;
            href: string;
            hreflang: string;
            name: string;
            pathname: string;
            port: string;
            protocol: string;
            rel: string;
            rev: string;
            search: string;
            shape: string;
            target: string;
            text: string;
            type: string;
        }
    }
    class DOMHTMLAnchorElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLAnchorElement>;
        get charset(): string;
        set charset(val: string);
        get coords(): string;
        set coords(val: string);
        get hash(): string;
        set hash(val: string);
        get host(): string;
        set host(val: string);
        get hostname(): string;
        set hostname(val: string);
        get href(): string;
        set href(val: string);
        get hreflang(): string;
        set hreflang(val: string);
        get name(): string;
        set name(val: string);
        get pathname(): string;
        set pathname(val: string);
        get port(): string;
        set port(val: string);
        get protocol(): string;
        set protocol(val: string);
        get rel(): string;
        set rel(val: string);
        get rev(): string;
        set rev(val: string);
        get search(): string;
        set search(val: string);
        get shape(): string;
        set shape(val: string);
        get target(): string;
        set target(val: string);
        get text(): string;
        set text(val: string);
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLAnchorElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLAnchorElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLAnchorElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAnchorElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLAnchorElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAnchorElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLAnchorElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLAnchorElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_charset(): string;
        get_coords(): string;
        get_hash(): string;
        get_host(): string;
        get_hostname(): string;
        get_href(): string;
        get_hreflang(): string;
        get_name(): string;
        get_pathname(): string;
        get_port(): string;
        get_protocol(): string;
        get_rel(): string;
        get_rev(): string;
        get_search(): string;
        get_shape(): string;
        get_target(): string;
        get_text(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_coords(value: string): void;
        set_hash(value: string): void;
        set_host(value: string): void;
        set_hostname(value: string): void;
        set_href(value: string): void;
        set_hreflang(value: string): void;
        set_name(value: string): void;
        set_pathname(value: string): void;
        set_port(value: string): void;
        set_protocol(value: string): void;
        set_rel(value: string): void;
        set_rev(value: string): void;
        set_search(value: string): void;
        set_shape(value: string): void;
        set_target(value: string): void;
        set_text(value: string): void;
        set_type_attr(value: string): void;
    }
    namespace DOMHTMLAppletElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::alt": (pspec: GObject.ParamSpec) => void;
            "notify::archive": (pspec: GObject.ParamSpec) => void;
            "notify::code": (pspec: GObject.ParamSpec) => void;
            "notify::code-base": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::hspace": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::vspace": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            alt: string;
            archive: string;
            code: string;
            code_base: string;
            codeBase: string;
            height: string;
            hspace: bigint | number;
            name: string;
            object: string;
            vspace: bigint | number;
            width: string;
        }
    }
    class DOMHTMLAppletElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLAppletElement>;
        get align(): string;
        set align(val: string);
        get alt(): string;
        set alt(val: string);
        get archive(): string;
        set archive(val: string);
        get code(): string;
        set code(val: string);
        get code_base(): string;
        set code_base(val: string);
        get codeBase(): string;
        set codeBase(val: string);
        get height(): string;
        set height(val: string);
        get hspace(): number;
        set hspace(val: bigint | number);
        get name(): string;
        set name(val: string);
        get object(): string;
        set object(val: string);
        get vspace(): number;
        set vspace(val: bigint | number);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLAppletElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLAppletElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLAppletElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAppletElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLAppletElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAppletElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLAppletElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLAppletElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_alt(): string;
        get_archive(): string;
        get_code(): string;
        get_code_base(): string;
        get_height(): string;
        get_hspace(): number;
        get_name(): string;
        get_object(): string;
        get_vspace(): number;
        get_width(): string;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_archive(value: string): void;
        set_code(value: string): void;
        set_code_base(value: string): void;
        set_height(value: string): void;
        set_hspace(value: bigint | number): void;
        set_name(value: string): void;
        set_object(value: string): void;
        set_vspace(value: bigint | number): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLAreaElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::alt": (pspec: GObject.ParamSpec) => void;
            "notify::coords": (pspec: GObject.ParamSpec) => void;
            "notify::hash": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::hostname": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::no-href": (pspec: GObject.ParamSpec) => void;
            "notify::pathname": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::search": (pspec: GObject.ParamSpec) => void;
            "notify::shape": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            alt: string;
            coords: string;
            hash: string;
            host: string;
            hostname: string;
            href: string;
            no_href: boolean;
            noHref: boolean;
            pathname: string;
            port: string;
            protocol: string;
            search: string;
            shape: string;
            target: string;
        }
    }
    class DOMHTMLAreaElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLAreaElement>;
        get alt(): string;
        set alt(val: string);
        get coords(): string;
        set coords(val: string);
        get hash(): string;
        set hash(val: string);
        get host(): string;
        set host(val: string);
        get hostname(): string;
        set hostname(val: string);
        get href(): string;
        set href(val: string);
        get no_href(): boolean;
        set no_href(val: boolean);
        get noHref(): boolean;
        set noHref(val: boolean);
        get pathname(): string;
        set pathname(val: string);
        get port(): string;
        set port(val: string);
        get protocol(): string;
        set protocol(val: string);
        get search(): string;
        set search(val: string);
        get shape(): string;
        set shape(val: string);
        get target(): string;
        set target(val: string);
        $signals: DOMHTMLAreaElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLAreaElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLAreaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAreaElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLAreaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLAreaElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLAreaElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLAreaElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_alt(): string;
        get_coords(): string;
        get_hash(): string;
        get_host(): string;
        get_hostname(): string;
        get_href(): string;
        get_no_href(): boolean;
        get_pathname(): string;
        get_port(): string;
        get_protocol(): string;
        get_search(): string;
        get_shape(): string;
        get_target(): string;
        set_alt(value: string): void;
        set_coords(value: string): void;
        set_hash(value: string): void;
        set_host(value: string): void;
        set_hostname(value: string): void;
        set_href(value: string): void;
        set_no_href(value: boolean): void;
        set_pathname(value: string): void;
        set_port(value: string): void;
        set_protocol(value: string): void;
        set_search(value: string): void;
        set_shape(value: string): void;
        set_target(value: string): void;
    }
    namespace DOMHTMLBRElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::clear": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            clear: string;
        }
    }
    class DOMHTMLBRElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLBRElement>;
        get clear(): string;
        set clear(val: string);
        $signals: DOMHTMLBRElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLBRElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLBRElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBRElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLBRElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBRElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLBRElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLBRElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_clear(): string;
        set_clear(value: string): void;
    }
    namespace DOMHTMLBaseElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            href: string;
            target: string;
        }
    }
    class DOMHTMLBaseElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLBaseElement>;
        get href(): string;
        set href(val: string);
        get target(): string;
        set target(val: string);
        $signals: DOMHTMLBaseElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLBaseElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLBaseElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBaseElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLBaseElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBaseElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLBaseElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLBaseElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_href(): string;
        get_target(): string;
        set_href(value: string): void;
        set_target(value: string): void;
    }
    namespace DOMHTMLBaseFontElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {}
    }
    class DOMHTMLBaseFontElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLBaseFontElement>;
        $signals: DOMHTMLBaseFontElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLBaseFontElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLBaseFontElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBaseFontElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLBaseFontElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBaseFontElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLBaseFontElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLBaseFontElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color(): string;
        get_face(): string;
        get_size(): number;
        set_color(value: string): void;
        set_face(value: string): void;
        set_size(value: bigint | number): void;
    }
    namespace DOMHTMLBodyElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::a-link": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::bg-color": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::v-link": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            a_link: string;
            aLink: string;
            background: string;
            bg_color: string;
            bgColor: string;
            link: string;
            text: string;
            v_link: string;
            vLink: string;
        }
    }
    class DOMHTMLBodyElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLBodyElement>;
        get a_link(): string;
        set a_link(val: string);
        get aLink(): string;
        set aLink(val: string);
        get background(): string;
        set background(val: string);
        get bg_color(): string;
        set bg_color(val: string);
        get bgColor(): string;
        set bgColor(val: string);
        get link(): string;
        set link(val: string);
        get text(): string;
        set text(val: string);
        get v_link(): string;
        set v_link(val: string);
        get vLink(): string;
        set vLink(val: string);
        $signals: DOMHTMLBodyElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLBodyElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLBodyElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBodyElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLBodyElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLBodyElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLBodyElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLBodyElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_a_link(): string;
        get_background(): string;
        get_bg_color(): string;
        get_link(): string;
        get_text(): string;
        get_v_link(): string;
        set_a_link(value: string): void;
        set_background(value: string): void;
        set_bg_color(value: string): void;
        set_link(value: string): void;
        set_text(value: string): void;
        set_v_link(value: string): void;
    }
    namespace DOMHTMLButtonElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::autofocus": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::will-validate": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            autofocus: boolean;
            disabled: boolean;
            form: DOMHTMLFormElement;
            name: string;
            type: string;
            value: string;
            will_validate: boolean;
            willValidate: boolean;
        }
    }
    class DOMHTMLButtonElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLButtonElement>;
        get autofocus(): boolean;
        set autofocus(val: boolean);
        get disabled(): boolean;
        set disabled(val: boolean);
        get form(): DOMHTMLFormElement;
        get name(): string;
        set name(val: string);
        get type(): string;
        set type(val: string);
        get value(): string;
        set value(val: string);
        get will_validate(): boolean;
        get willValidate(): boolean;
        $signals: DOMHTMLButtonElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLButtonElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLButtonElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLButtonElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLButtonElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLButtonElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLButtonElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLButtonElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_autofocus(): boolean;
        get_button_type(): string;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_name(): string;
        get_value(): string;
        get_will_validate(): boolean;
        set_autofocus(value: boolean): void;
        set_button_type(value: string): void;
        set_disabled(value: boolean): void;
        set_name(value: string): void;
        set_value(value: string): void;
    }
    namespace DOMHTMLCanvasElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            height: bigint | number;
            width: bigint | number;
        }
    }
    class DOMHTMLCanvasElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLCanvasElement>;
        get height(): number;
        set height(val: bigint | number);
        get width(): number;
        set width(val: bigint | number);
        $signals: DOMHTMLCanvasElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLCanvasElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLCanvasElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLCanvasElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLCanvasElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLCanvasElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLCanvasElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLCanvasElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_height(): number;
        get_width(): number;
        set_height(value: bigint | number): void;
        set_width(value: bigint | number): void;
    }
    namespace DOMHTMLCollection {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMHTMLCollection extends DOMObject {
        static $gtype: GObject.GType<DOMHTMLCollection>;
        get length(): number;
        $signals: DOMHTMLCollection.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLCollection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLCollection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLCollection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLCollection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLCollection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMNode;
        named_item(name: string): DOMNode;
    }
    namespace DOMHTMLDListElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::compact": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            compact: boolean;
        }
    }
    class DOMHTMLDListElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLDListElement>;
        get compact(): boolean;
        set compact(val: boolean);
        $signals: DOMHTMLDListElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLDListElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLDListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDListElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLDListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDListElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLDListElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLDListElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compact(): boolean;
        set_compact(value: boolean): void;
    }
    namespace DOMHTMLDirectoryElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::compact": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            compact: boolean;
        }
    }
    class DOMHTMLDirectoryElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLDirectoryElement>;
        get compact(): boolean;
        set compact(val: boolean);
        $signals: DOMHTMLDirectoryElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLDirectoryElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLDirectoryElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDirectoryElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLDirectoryElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDirectoryElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLDirectoryElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLDirectoryElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compact(): boolean;
        set_compact(value: boolean): void;
    }
    namespace DOMHTMLDivElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
        }
    }
    class DOMHTMLDivElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLDivElement>;
        get align(): string;
        set align(val: string);
        $signals: DOMHTMLDivElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLDivElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLDivElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDivElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLDivElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDivElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLDivElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLDivElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        set_align(value: string): void;
    }
    namespace DOMHTMLDocument {
        interface SignalSignatures extends DOMDocument.SignalSignatures {
            "notify::alink-color": (pspec: GObject.ParamSpec) => void;
            "notify::bg-color": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::fg-color": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::link-color": (pspec: GObject.ParamSpec) => void;
            "notify::vlink-color": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::active-element": (pspec: GObject.ParamSpec) => void;
            "notify::anchors": (pspec: GObject.ParamSpec) => void;
            "notify::applets": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::character-set": (pspec: GObject.ParamSpec) => void;
            "notify::charset": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::compat-mode": (pspec: GObject.ParamSpec) => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::cookie": (pspec: GObject.ParamSpec) => void;
            "notify::current-script": (pspec: GObject.ParamSpec) => void;
            "notify::default-view": (pspec: GObject.ParamSpec) => void;
            "notify::design-mode": (pspec: GObject.ParamSpec) => void;
            "notify::doctype": (pspec: GObject.ParamSpec) => void;
            "notify::document-element": (pspec: GObject.ParamSpec) => void;
            "notify::document-uri": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
            "notify::embeds": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::forms": (pspec: GObject.ParamSpec) => void;
            "notify::head": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::images": (pspec: GObject.ParamSpec) => void;
            "notify::implementation": (pspec: GObject.ParamSpec) => void;
            "notify::input-encoding": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-modified": (pspec: GObject.ParamSpec) => void;
            "notify::links": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::plugins": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-lock-element": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-stylesheet-set": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
            "notify::referrer": (pspec: GObject.ParamSpec) => void;
            "notify::scripts": (pspec: GObject.ParamSpec) => void;
            "notify::scrolling-element": (pspec: GObject.ParamSpec) => void;
            "notify::selected-stylesheet-set": (pspec: GObject.ParamSpec) => void;
            "notify::style-sheets": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::visibility-state": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-current-full-screen-element": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-full-screen-keyboard-input-allowed": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-fullscreen-element": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-fullscreen-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-is-full-screen": (pspec: GObject.ParamSpec) => void;
            "notify::xml-encoding": (pspec: GObject.ParamSpec) => void;
            "notify::xml-standalone": (pspec: GObject.ParamSpec) => void;
            "notify::xml-version": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMDocument.ConstructorProps, DOMEventTarget.ConstructorProps {
            alink_color: string;
            alinkColor: string;
            bg_color: string;
            bgColor: string;
            dir: string;
            fg_color: string;
            fgColor: string;
            height: bigint | number;
            link_color: string;
            linkColor: string;
            vlink_color: string;
            vlinkColor: string;
            width: bigint | number;
        }
    }
    class DOMHTMLDocument extends DOMDocument implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLDocument>;
        get alink_color(): string;
        set alink_color(val: string);
        get alinkColor(): string;
        set alinkColor(val: string);
        get bg_color(): string;
        set bg_color(val: string);
        get bgColor(): string;
        set bgColor(val: string);
        get dir(): string;
        set dir(val: string);
        get fg_color(): string;
        set fg_color(val: string);
        get fgColor(): string;
        set fgColor(val: string);
        get height(): number;
        get link_color(): string;
        set link_color(val: string);
        get linkColor(): string;
        set linkColor(val: string);
        get vlink_color(): string;
        set vlink_color(val: string);
        get vlinkColor(): string;
        set vlinkColor(val: string);
        get width(): number;
        $signals: DOMHTMLDocument.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLDocument.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLDocument.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDocument.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLDocument.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLDocument.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLDocument.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLDocument.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        capture_events(): void;
        clear(): void;
        close(): void;
        get_alink_color(): string;
        get_bg_color(): string;
        get_compat_mode(): string;
        get_design_mode(): string;
        get_dir(): string;
        get_embeds(): DOMHTMLCollection;
        get_fg_color(): string;
        get_height(): number;
        get_link_color(): string;
        get_plugins(): DOMHTMLCollection;
        get_scripts(): DOMHTMLCollection;
        get_vlink_color(): string;
        get_width(): number;
        release_events(): void;
        set_alink_color(value: string): void;
        set_bg_color(value: string): void;
        set_design_mode(value: string): void;
        set_dir(value: string): void;
        set_fg_color(value: string): void;
        set_link_color(value: string): void;
        set_vlink_color(value: string): void;
    }
    namespace DOMHTMLElement {
        interface SignalSignatures extends DOMElement.SignalSignatures {
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            access_key: string;
            accessKey: string;
            content_editable: string;
            contentEditable: string;
            dir: string;
            draggable: boolean;
            hidden: boolean;
            inner_text: string;
            innerText: string;
            is_content_editable: boolean;
            isContentEditable: boolean;
            lang: string;
            outer_text: string;
            outerText: string;
            spellcheck: boolean;
            tab_index: bigint | number;
            tabIndex: bigint | number;
            title: string;
            translate: boolean;
            webkitdropzone: string;
        }
    }
    class DOMHTMLElement extends DOMElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLElement>;
        get access_key(): string;
        set access_key(val: string);
        get accessKey(): string;
        set accessKey(val: string);
        get content_editable(): string;
        set content_editable(val: string);
        get contentEditable(): string;
        set contentEditable(val: string);
        get dir(): string;
        set dir(val: string);
        get draggable(): boolean;
        set draggable(val: boolean);
        get hidden(): boolean;
        set hidden(val: boolean);
        get inner_text(): string;
        set inner_text(val: string);
        get innerText(): string;
        set innerText(val: string);
        get is_content_editable(): boolean;
        get isContentEditable(): boolean;
        get lang(): string;
        set lang(val: string);
        get outer_text(): string;
        set outer_text(val: string);
        get outerText(): string;
        set outerText(val: string);
        get spellcheck(): boolean;
        set spellcheck(val: boolean);
        get tab_index(): number;
        set tab_index(val: bigint | number);
        get tabIndex(): number;
        set tabIndex(val: bigint | number);
        get title(): string;
        set title(val: string);
        get translate(): boolean;
        set translate(val: boolean);
        get webkitdropzone(): string;
        set webkitdropzone(val: string);
        $signals: DOMHTMLElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        click(): void;
        get_access_key(): string;
        get_children(): DOMHTMLCollection;
        get_content_editable(): string;
        get_dir(): string;
        get_draggable(): boolean;
        get_hidden(): boolean;
        get_inner_html(): string;
        get_inner_text(): string;
        get_is_content_editable(): boolean;
        get_lang(): string;
        get_outer_html(): string;
        get_outer_text(): string;
        get_spellcheck(): boolean;
        get_tab_index(): number;
        get_title(): string;
        get_translate(): boolean;
        get_webkitdropzone(): string;
        set_access_key(value: string): void;
        set_content_editable(value: string): void;
        set_dir(value: string): void;
        set_draggable(value: boolean): void;
        set_hidden(value: boolean): void;
        set_inner_html(contents: string): void;
        set_inner_text(value: string): void;
        set_lang(value: string): void;
        set_outer_html(contents: string): void;
        set_outer_text(value: string): void;
        set_spellcheck(value: boolean): void;
        set_tab_index(value: bigint | number): void;
        set_title(value: string): void;
        set_translate(value: boolean): void;
        set_webkitdropzone(value: string): void;
    }
    namespace DOMHTMLEmbedElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            height: bigint | number;
            name: string;
            src: string;
            type: string;
            width: bigint | number;
        }
    }
    class DOMHTMLEmbedElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLEmbedElement>;
        get align(): string;
        set align(val: string);
        get height(): number;
        set height(val: bigint | number);
        get name(): string;
        set name(val: string);
        get src(): string;
        set src(val: string);
        get type(): string;
        set type(val: string);
        get width(): number;
        set width(val: bigint | number);
        $signals: DOMHTMLEmbedElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLEmbedElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLEmbedElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLEmbedElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLEmbedElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLEmbedElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLEmbedElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLEmbedElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_height(): number;
        get_name(): string;
        get_src(): string;
        get_type_attr(): string;
        get_width(): number;
        set_align(value: string): void;
        set_height(value: bigint | number): void;
        set_name(value: string): void;
        set_src(value: string): void;
        set_type_attr(value: string): void;
        set_width(value: bigint | number): void;
    }
    namespace DOMHTMLFieldSetElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            form: DOMHTMLFormElement;
        }
    }
    class DOMHTMLFieldSetElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLFieldSetElement>;
        get form(): DOMHTMLFormElement;
        $signals: DOMHTMLFieldSetElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLFieldSetElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLFieldSetElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFieldSetElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLFieldSetElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFieldSetElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLFieldSetElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLFieldSetElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_form(): DOMHTMLFormElement;
    }
    namespace DOMHTMLFontElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::face": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            color: string;
            face: string;
            size: string;
        }
    }
    class DOMHTMLFontElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLFontElement>;
        get color(): string;
        set color(val: string);
        get face(): string;
        set face(val: string);
        get size(): string;
        set size(val: string);
        $signals: DOMHTMLFontElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLFontElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLFontElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFontElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLFontElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFontElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLFontElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLFontElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color(): string;
        get_face(): string;
        get_size(): string;
        set_color(value: string): void;
        set_face(value: string): void;
        set_size(value: string): void;
    }
    namespace DOMHTMLFormElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::accept-charset": (pspec: GObject.ParamSpec) => void;
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::elements": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::enctype": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::method": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            accept_charset: string;
            acceptCharset: string;
            action: string;
            elements: DOMHTMLCollection;
            encoding: string;
            enctype: string;
            length: bigint | number;
            method: string;
            name: string;
            target: string;
        }
    }
    class DOMHTMLFormElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLFormElement>;
        get accept_charset(): string;
        set accept_charset(val: string);
        get acceptCharset(): string;
        set acceptCharset(val: string);
        get action(): string;
        set action(val: string);
        get elements(): DOMHTMLCollection;
        get encoding(): string;
        set encoding(val: string);
        get enctype(): string;
        set enctype(val: string);
        get length(): number;
        get method(): string;
        set method(val: string);
        get name(): string;
        set name(val: string);
        get target(): string;
        set target(val: string);
        $signals: DOMHTMLFormElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLFormElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLFormElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFormElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLFormElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFormElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLFormElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLFormElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_accept_charset(): string;
        get_action(): string;
        get_elements(): DOMHTMLCollection;
        get_encoding(): string;
        get_enctype(): string;
        get_length(): number;
        get_method(): string;
        get_name(): string;
        get_target(): string;
        reset(): void;
        set_accept_charset(value: string): void;
        set_action(value: string): void;
        set_encoding(value: string): void;
        set_enctype(value: string): void;
        set_method(value: string): void;
        set_name(value: string): void;
        set_target(value: string): void;
        submit(): void;
    }
    namespace DOMHTMLFrameElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::content-document": (pspec: GObject.ParamSpec) => void;
            "notify::content-window": (pspec: GObject.ParamSpec) => void;
            "notify::frame-border": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::margin-height": (pspec: GObject.ParamSpec) => void;
            "notify::margin-width": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-resize": (pspec: GObject.ParamSpec) => void;
            "notify::scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            content_document: DOMDocument;
            contentDocument: DOMDocument;
            content_window: DOMDOMWindow;
            contentWindow: DOMDOMWindow;
            frame_border: string;
            frameBorder: string;
            height: bigint | number;
            long_desc: string;
            longDesc: string;
            margin_height: string;
            marginHeight: string;
            margin_width: string;
            marginWidth: string;
            name: string;
            no_resize: boolean;
            noResize: boolean;
            scrolling: string;
            src: string;
            width: bigint | number;
        }
    }
    class DOMHTMLFrameElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLFrameElement>;
        get content_document(): DOMDocument;
        get contentDocument(): DOMDocument;
        get content_window(): DOMDOMWindow;
        get contentWindow(): DOMDOMWindow;
        get frame_border(): string;
        set frame_border(val: string);
        get frameBorder(): string;
        set frameBorder(val: string);
        get height(): number;
        get long_desc(): string;
        set long_desc(val: string);
        get longDesc(): string;
        set longDesc(val: string);
        get margin_height(): string;
        set margin_height(val: string);
        get marginHeight(): string;
        set marginHeight(val: string);
        get margin_width(): string;
        set margin_width(val: string);
        get marginWidth(): string;
        set marginWidth(val: string);
        get name(): string;
        set name(val: string);
        get no_resize(): boolean;
        set no_resize(val: boolean);
        get noResize(): boolean;
        set noResize(val: boolean);
        get scrolling(): string;
        set scrolling(val: string);
        get src(): string;
        set src(val: string);
        get width(): number;
        $signals: DOMHTMLFrameElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLFrameElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLFrameElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFrameElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLFrameElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFrameElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLFrameElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLFrameElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content_document(): DOMDocument;
        get_content_window(): DOMDOMWindow;
        get_frame_border(): string;
        get_height(): number;
        get_long_desc(): string;
        get_margin_height(): string;
        get_margin_width(): string;
        get_name(): string;
        get_no_resize(): boolean;
        get_scrolling(): string;
        get_src(): string;
        get_width(): number;
        set_frame_border(value: string): void;
        set_long_desc(value: string): void;
        set_margin_height(value: string): void;
        set_margin_width(value: string): void;
        set_name(value: string): void;
        set_no_resize(value: boolean): void;
        set_scrolling(value: string): void;
        set_src(value: string): void;
    }
    namespace DOMHTMLFrameSetElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::cols": (pspec: GObject.ParamSpec) => void;
            "notify::rows": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            cols: string;
            rows: string;
        }
    }
    class DOMHTMLFrameSetElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLFrameSetElement>;
        get cols(): string;
        set cols(val: string);
        get rows(): string;
        set rows(val: string);
        $signals: DOMHTMLFrameSetElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLFrameSetElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLFrameSetElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFrameSetElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLFrameSetElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLFrameSetElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLFrameSetElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLFrameSetElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cols(): string;
        get_rows(): string;
        set_cols(value: string): void;
        set_rows(value: string): void;
    }
    namespace DOMHTMLHRElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::no-shade": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            no_shade: boolean;
            noShade: boolean;
            size: string;
            width: string;
        }
    }
    class DOMHTMLHRElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLHRElement>;
        get align(): string;
        set align(val: string);
        get no_shade(): boolean;
        set no_shade(val: boolean);
        get noShade(): boolean;
        set noShade(val: boolean);
        get size(): string;
        set size(val: string);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLHRElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLHRElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLHRElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHRElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLHRElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHRElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLHRElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLHRElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_no_shade(): boolean;
        get_size(): string;
        get_width(): string;
        set_align(value: string): void;
        set_no_shade(value: boolean): void;
        set_size(value: string): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLHeadElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::profile": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            profile: string;
        }
    }
    class DOMHTMLHeadElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLHeadElement>;
        get profile(): string;
        set profile(val: string);
        $signals: DOMHTMLHeadElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLHeadElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLHeadElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHeadElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLHeadElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHeadElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLHeadElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLHeadElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_profile(): string;
        set_profile(value: string): void;
    }
    namespace DOMHTMLHeadingElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
        }
    }
    class DOMHTMLHeadingElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLHeadingElement>;
        get align(): string;
        set align(val: string);
        $signals: DOMHTMLHeadingElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLHeadingElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLHeadingElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHeadingElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLHeadingElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHeadingElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLHeadingElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLHeadingElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        set_align(value: string): void;
    }
    namespace DOMHTMLHtmlElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            version: string;
        }
    }
    class DOMHTMLHtmlElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLHtmlElement>;
        get version(): string;
        set version(val: string);
        $signals: DOMHTMLHtmlElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLHtmlElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLHtmlElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHtmlElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLHtmlElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLHtmlElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLHtmlElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLHtmlElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_version(): string;
        set_version(value: string): void;
    }
    namespace DOMHTMLIFrameElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::content-document": (pspec: GObject.ParamSpec) => void;
            "notify::content-window": (pspec: GObject.ParamSpec) => void;
            "notify::frame-border": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::margin-height": (pspec: GObject.ParamSpec) => void;
            "notify::margin-width": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            content_document: DOMDocument;
            contentDocument: DOMDocument;
            content_window: DOMDOMWindow;
            contentWindow: DOMDOMWindow;
            frame_border: string;
            frameBorder: string;
            height: string;
            long_desc: string;
            longDesc: string;
            margin_height: string;
            marginHeight: string;
            margin_width: string;
            marginWidth: string;
            name: string;
            scrolling: string;
            src: string;
            width: string;
        }
    }
    class DOMHTMLIFrameElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLIFrameElement>;
        get align(): string;
        set align(val: string);
        get content_document(): DOMDocument;
        get contentDocument(): DOMDocument;
        get content_window(): DOMDOMWindow;
        get contentWindow(): DOMDOMWindow;
        get frame_border(): string;
        set frame_border(val: string);
        get frameBorder(): string;
        set frameBorder(val: string);
        get height(): string;
        set height(val: string);
        get long_desc(): string;
        set long_desc(val: string);
        get longDesc(): string;
        set longDesc(val: string);
        get margin_height(): string;
        set margin_height(val: string);
        get marginHeight(): string;
        set marginHeight(val: string);
        get margin_width(): string;
        set margin_width(val: string);
        get marginWidth(): string;
        set marginWidth(val: string);
        get name(): string;
        set name(val: string);
        get scrolling(): string;
        set scrolling(val: string);
        get src(): string;
        set src(val: string);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLIFrameElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLIFrameElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLIFrameElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLIFrameElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLIFrameElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLIFrameElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLIFrameElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLIFrameElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_content_document(): DOMDocument;
        get_content_window(): DOMDOMWindow;
        get_frame_border(): string;
        get_height(): string;
        get_long_desc(): string;
        get_margin_height(): string;
        get_margin_width(): string;
        get_name(): string;
        get_scrolling(): string;
        get_src(): string;
        get_width(): string;
        set_align(value: string): void;
        set_frame_border(value: string): void;
        set_height(value: string): void;
        set_long_desc(value: string): void;
        set_margin_height(value: string): void;
        set_margin_width(value: string): void;
        set_name(value: string): void;
        set_scrolling(value: string): void;
        set_src(value: string): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLImageElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::alt": (pspec: GObject.ParamSpec) => void;
            "notify::border": (pspec: GObject.ParamSpec) => void;
            "notify::complete": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::hspace": (pspec: GObject.ParamSpec) => void;
            "notify::is-map": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::lowsrc": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::use-map": (pspec: GObject.ParamSpec) => void;
            "notify::vspace": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            alt: string;
            border: string;
            complete: boolean;
            height: bigint | number;
            hspace: bigint | number;
            is_map: boolean;
            isMap: boolean;
            long_desc: string;
            longDesc: string;
            lowsrc: string;
            name: string;
            natural_height: bigint | number;
            naturalHeight: bigint | number;
            natural_width: bigint | number;
            naturalWidth: bigint | number;
            src: string;
            use_map: string;
            useMap: string;
            vspace: bigint | number;
            width: bigint | number;
            x: bigint | number;
            y: bigint | number;
        }
    }
    class DOMHTMLImageElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLImageElement>;
        get align(): string;
        set align(val: string);
        get alt(): string;
        set alt(val: string);
        get border(): string;
        set border(val: string);
        get complete(): boolean;
        get height(): number;
        set height(val: bigint | number);
        get hspace(): number;
        set hspace(val: bigint | number);
        get is_map(): boolean;
        set is_map(val: boolean);
        get isMap(): boolean;
        set isMap(val: boolean);
        get long_desc(): string;
        set long_desc(val: string);
        get longDesc(): string;
        set longDesc(val: string);
        get lowsrc(): string;
        set lowsrc(val: string);
        get name(): string;
        set name(val: string);
        get natural_height(): number;
        get naturalHeight(): number;
        get natural_width(): number;
        get naturalWidth(): number;
        get src(): string;
        set src(val: string);
        get use_map(): string;
        set use_map(val: string);
        get useMap(): string;
        set useMap(val: string);
        get vspace(): number;
        set vspace(val: bigint | number);
        get width(): number;
        set width(val: bigint | number);
        get x(): number;
        get y(): number;
        $signals: DOMHTMLImageElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLImageElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLImageElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLImageElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLImageElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLImageElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLImageElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLImageElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_alt(): string;
        get_border(): string;
        get_complete(): boolean;
        get_height(): number;
        get_hspace(): number;
        get_is_map(): boolean;
        get_long_desc(): string;
        get_lowsrc(): string;
        get_name(): string;
        get_natural_height(): number;
        get_natural_width(): number;
        get_src(): string;
        get_use_map(): string;
        get_vspace(): number;
        get_width(): number;
        get_x(): number;
        get_y(): number;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_border(value: string): void;
        set_height(value: bigint | number): void;
        set_hspace(value: bigint | number): void;
        set_is_map(value: boolean): void;
        set_long_desc(value: string): void;
        set_lowsrc(value: string): void;
        set_name(value: string): void;
        set_src(value: string): void;
        set_use_map(value: string): void;
        set_vspace(value: bigint | number): void;
        set_width(value: bigint | number): void;
    }
    namespace DOMHTMLInputElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::accept": (pspec: GObject.ParamSpec) => void;
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::alt": (pspec: GObject.ParamSpec) => void;
            "notify::autofocus": (pspec: GObject.ParamSpec) => void;
            "notify::capture": (pspec: GObject.ParamSpec) => void;
            "notify::checked": (pspec: GObject.ParamSpec) => void;
            "notify::default-checked": (pspec: GObject.ParamSpec) => void;
            "notify::default-value": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::files": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::indeterminate": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::multiple": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::use-map": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::will-validate": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            accept: string;
            align: string;
            alt: string;
            autofocus: boolean;
            capture: string;
            checked: boolean;
            default_checked: boolean;
            defaultChecked: boolean;
            default_value: string;
            defaultValue: string;
            disabled: boolean;
            files: DOMFileList;
            form: DOMHTMLFormElement;
            height: bigint | number;
            indeterminate: boolean;
            max_length: bigint | number;
            maxLength: bigint | number;
            multiple: boolean;
            name: string;
            read_only: boolean;
            readOnly: boolean;
            size: bigint | number;
            src: string;
            type: string;
            use_map: string;
            useMap: string;
            value: string;
            width: bigint | number;
            will_validate: boolean;
            willValidate: boolean;
        }
    }
    class DOMHTMLInputElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLInputElement>;
        get accept(): string;
        set accept(val: string);
        get align(): string;
        set align(val: string);
        get alt(): string;
        set alt(val: string);
        get autofocus(): boolean;
        set autofocus(val: boolean);
        get capture(): string;
        set capture(val: string);
        get checked(): boolean;
        set checked(val: boolean);
        get default_checked(): boolean;
        set default_checked(val: boolean);
        get defaultChecked(): boolean;
        set defaultChecked(val: boolean);
        get default_value(): string;
        set default_value(val: string);
        get defaultValue(): string;
        set defaultValue(val: string);
        get disabled(): boolean;
        set disabled(val: boolean);
        get files(): DOMFileList;
        get form(): DOMHTMLFormElement;
        get height(): number;
        set height(val: bigint | number);
        get indeterminate(): boolean;
        set indeterminate(val: boolean);
        get max_length(): number;
        set max_length(val: bigint | number);
        get maxLength(): number;
        set maxLength(val: bigint | number);
        get multiple(): boolean;
        set multiple(val: boolean);
        get name(): string;
        set name(val: string);
        get read_only(): boolean;
        set read_only(val: boolean);
        get readOnly(): boolean;
        set readOnly(val: boolean);
        get size(): number;
        set size(val: bigint | number);
        get src(): string;
        set src(val: string);
        get type(): string;
        set type(val: string);
        get use_map(): string;
        set use_map(val: string);
        get useMap(): string;
        set useMap(val: string);
        get value(): string;
        set value(val: string);
        get width(): number;
        set width(val: bigint | number);
        get will_validate(): boolean;
        get willValidate(): boolean;
        $signals: DOMHTMLInputElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLInputElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLInputElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLInputElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLInputElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLInputElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLInputElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLInputElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_accept(): string;
        get_align(): string;
        get_alt(): string;
        get_auto_filled(): boolean;
        get_autofocus(): boolean;
        get_capture(): boolean;
        get_capture_type(): string;
        get_checked(): boolean;
        get_default_checked(): boolean;
        get_default_value(): string;
        get_disabled(): boolean;
        get_files(): DOMFileList;
        get_form(): DOMHTMLFormElement;
        get_height(): number;
        get_indeterminate(): boolean;
        get_input_type(): string;
        get_max_length(): number;
        get_multiple(): boolean;
        get_name(): string;
        get_read_only(): boolean;
        get_size(): number;
        get_src(): string;
        get_use_map(): string;
        get_value(): string;
        get_width(): number;
        get_will_validate(): boolean;
        is_edited(): boolean;
        select(): void;
        set_accept(value: string): void;
        set_align(value: string): void;
        set_alt(value: string): void;
        set_auto_filled(value: boolean): void;
        set_autofocus(value: boolean): void;
        set_capture_type(value: string): void;
        set_checked(value: boolean): void;
        set_default_checked(value: boolean): void;
        set_default_value(value: string): void;
        set_disabled(value: boolean): void;
        set_editing_value(value: string): void;
        set_files(value: DOMFileList): void;
        set_height(value: bigint | number): void;
        set_indeterminate(value: boolean): void;
        set_input_type(value: string): void;
        set_max_length(value: bigint | number): void;
        set_multiple(value: boolean): void;
        set_name(value: string): void;
        set_read_only(value: boolean): void;
        set_size(value: bigint | number): void;
        set_src(value: string): void;
        set_use_map(value: string): void;
        set_value(value: string): void;
        set_width(value: bigint | number): void;
    }
    namespace DOMHTMLLIElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            type: string;
            value: bigint | number;
        }
    }
    class DOMHTMLLIElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLLIElement>;
        get type(): string;
        set type(val: string);
        get value(): number;
        set value(val: bigint | number);
        $signals: DOMHTMLLIElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLLIElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLLIElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLIElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLLIElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLIElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLLIElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLLIElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_type_attr(): string;
        get_value(): number;
        set_type_attr(value: string): void;
        set_value(value: bigint | number): void;
    }
    namespace DOMHTMLLabelElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::html-for": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            form: DOMHTMLFormElement;
            html_for: string;
            htmlFor: string;
        }
    }
    class DOMHTMLLabelElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLLabelElement>;
        get form(): DOMHTMLFormElement;
        get html_for(): string;
        set html_for(val: string);
        get htmlFor(): string;
        set htmlFor(val: string);
        $signals: DOMHTMLLabelElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLLabelElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLLabelElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLabelElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLLabelElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLabelElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLLabelElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLLabelElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_form(): DOMHTMLFormElement;
        get_html_for(): string;
        set_html_for(value: string): void;
    }
    namespace DOMHTMLLegendElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            form: DOMHTMLFormElement;
        }
    }
    class DOMHTMLLegendElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLLegendElement>;
        get align(): string;
        set align(val: string);
        get form(): DOMHTMLFormElement;
        $signals: DOMHTMLLegendElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLLegendElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLLegendElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLegendElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLLegendElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLegendElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLLegendElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLLegendElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_form(): DOMHTMLFormElement;
        set_align(value: string): void;
    }
    namespace DOMHTMLLinkElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::charset": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::hreflang": (pspec: GObject.ParamSpec) => void;
            "notify::media": (pspec: GObject.ParamSpec) => void;
            "notify::rel": (pspec: GObject.ParamSpec) => void;
            "notify::rev": (pspec: GObject.ParamSpec) => void;
            "notify::sheet": (pspec: GObject.ParamSpec) => void;
            "notify::sizes": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            charset: string;
            disabled: boolean;
            href: string;
            hreflang: string;
            media: string;
            rel: string;
            rev: string;
            sheet: DOMStyleSheet;
            sizes: DOMDOMTokenList;
            target: string;
            type: string;
        }
    }
    class DOMHTMLLinkElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLLinkElement>;
        get charset(): string;
        set charset(val: string);
        get disabled(): boolean;
        set disabled(val: boolean);
        get href(): string;
        set href(val: string);
        get hreflang(): string;
        set hreflang(val: string);
        get media(): string;
        set media(val: string);
        get rel(): string;
        set rel(val: string);
        get rev(): string;
        set rev(val: string);
        get sheet(): DOMStyleSheet;
        get sizes(): DOMDOMTokenList;
        get target(): string;
        set target(val: string);
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLLinkElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLLinkElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLLinkElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLinkElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLLinkElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLLinkElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLLinkElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLLinkElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_charset(): string;
        get_disabled(): boolean;
        get_href(): string;
        get_hreflang(): string;
        get_media(): string;
        get_rel(): string;
        get_rev(): string;
        get_sheet(): DOMStyleSheet;
        get_sizes(): DOMDOMTokenList;
        get_target(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_disabled(value: boolean): void;
        set_href(value: string): void;
        set_hreflang(value: string): void;
        set_media(value: string): void;
        set_rel(value: string): void;
        set_rev(value: string): void;
        set_sizes(value: string): void;
        set_target(value: string): void;
        set_type_attr(value: string): void;
    }
    namespace DOMHTMLMapElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::areas": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            areas: DOMHTMLCollection;
            name: string;
        }
    }
    class DOMHTMLMapElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLMapElement>;
        get areas(): DOMHTMLCollection;
        get name(): string;
        set name(val: string);
        $signals: DOMHTMLMapElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLMapElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLMapElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMapElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLMapElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMapElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLMapElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLMapElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_areas(): DOMHTMLCollection;
        get_name(): string;
        set_name(value: string): void;
    }
    namespace DOMHTMLMarqueeElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {}
    }
    class DOMHTMLMarqueeElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLMarqueeElement>;
        $signals: DOMHTMLMarqueeElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLMarqueeElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLMarqueeElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMarqueeElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLMarqueeElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMarqueeElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLMarqueeElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLMarqueeElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        start(): void;
        stop(): void;
    }
    namespace DOMHTMLMenuElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::compact": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            compact: boolean;
        }
    }
    class DOMHTMLMenuElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLMenuElement>;
        get compact(): boolean;
        set compact(val: boolean);
        $signals: DOMHTMLMenuElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLMenuElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLMenuElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMenuElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLMenuElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMenuElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLMenuElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLMenuElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compact(): boolean;
        set_compact(value: boolean): void;
    }
    namespace DOMHTMLMetaElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::http-equiv": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::scheme": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            content: string;
            http_equiv: string;
            httpEquiv: string;
            name: string;
            scheme: string;
        }
    }
    class DOMHTMLMetaElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLMetaElement>;
        get content(): string;
        set content(val: string);
        get http_equiv(): string;
        set http_equiv(val: string);
        get httpEquiv(): string;
        set httpEquiv(val: string);
        get name(): string;
        set name(val: string);
        get scheme(): string;
        set scheme(val: string);
        $signals: DOMHTMLMetaElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLMetaElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLMetaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMetaElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLMetaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLMetaElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLMetaElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLMetaElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content(): string;
        get_http_equiv(): string;
        get_name(): string;
        get_scheme(): string;
        set_content(value: string): void;
        set_http_equiv(value: string): void;
        set_name(value: string): void;
        set_scheme(value: string): void;
    }
    namespace DOMHTMLModElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::cite": (pspec: GObject.ParamSpec) => void;
            "notify::date-time": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            cite: string;
            date_time: string;
            dateTime: string;
        }
    }
    class DOMHTMLModElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLModElement>;
        get cite(): string;
        set cite(val: string);
        get date_time(): string;
        set date_time(val: string);
        get dateTime(): string;
        set dateTime(val: string);
        $signals: DOMHTMLModElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLModElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLModElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLModElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLModElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLModElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLModElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLModElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cite(): string;
        get_date_time(): string;
        set_cite(value: string): void;
        set_date_time(value: string): void;
    }
    namespace DOMHTMLOListElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::compact": (pspec: GObject.ParamSpec) => void;
            "notify::start": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            compact: boolean;
            start: bigint | number;
            type: string;
        }
    }
    class DOMHTMLOListElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLOListElement>;
        get compact(): boolean;
        set compact(val: boolean);
        get start(): number;
        set start(val: bigint | number);
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLOListElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLOListElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLOListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOListElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLOListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOListElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLOListElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLOListElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compact(): boolean;
        get_start(): number;
        get_type_attr(): string;
        set_compact(value: boolean): void;
        set_start(value: bigint | number): void;
        set_type_attr(value: string): void;
    }
    namespace DOMHTMLObjectElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::archive": (pspec: GObject.ParamSpec) => void;
            "notify::border": (pspec: GObject.ParamSpec) => void;
            "notify::code": (pspec: GObject.ParamSpec) => void;
            "notify::code-base": (pspec: GObject.ParamSpec) => void;
            "notify::code-type": (pspec: GObject.ParamSpec) => void;
            "notify::content-document": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::declare": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::hspace": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::standby": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::use-map": (pspec: GObject.ParamSpec) => void;
            "notify::vspace": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            archive: string;
            border: string;
            code: string;
            code_base: string;
            codeBase: string;
            code_type: string;
            codeType: string;
            content_document: DOMDocument;
            contentDocument: DOMDocument;
            data: string;
            declare: boolean;
            form: DOMHTMLFormElement;
            height: string;
            hspace: bigint | number;
            name: string;
            standby: string;
            type: string;
            use_map: string;
            useMap: string;
            vspace: bigint | number;
            width: string;
        }
    }
    class DOMHTMLObjectElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLObjectElement>;
        get align(): string;
        set align(val: string);
        get archive(): string;
        set archive(val: string);
        get border(): string;
        set border(val: string);
        get code(): string;
        set code(val: string);
        get code_base(): string;
        set code_base(val: string);
        get codeBase(): string;
        set codeBase(val: string);
        get code_type(): string;
        set code_type(val: string);
        get codeType(): string;
        set codeType(val: string);
        get content_document(): DOMDocument;
        get contentDocument(): DOMDocument;
        get data(): string;
        set data(val: string);
        get declare(): boolean;
        set declare(val: boolean);
        get form(): DOMHTMLFormElement;
        get height(): string;
        set height(val: string);
        get hspace(): number;
        set hspace(val: bigint | number);
        get name(): string;
        set name(val: string);
        get standby(): string;
        set standby(val: string);
        get type(): string;
        set type(val: string);
        get use_map(): string;
        set use_map(val: string);
        get useMap(): string;
        set useMap(val: string);
        get vspace(): number;
        set vspace(val: bigint | number);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLObjectElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLObjectElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLObjectElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLObjectElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLObjectElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLObjectElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLObjectElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLObjectElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_archive(): string;
        get_border(): string;
        get_code(): string;
        get_code_base(): string;
        get_code_type(): string;
        get_content_document(): DOMDocument;
        get_data(): string;
        get_data(...args: never[]): any;
        get_declare(): boolean;
        get_form(): DOMHTMLFormElement;
        get_height(): string;
        get_hspace(): number;
        get_name(): string;
        get_standby(): string;
        get_type_attr(): string;
        get_use_map(): string;
        get_vspace(): number;
        get_width(): string;
        set_align(value: string): void;
        set_archive(value: string): void;
        set_border(value: string): void;
        set_code(value: string): void;
        set_code_base(value: string): void;
        set_code_type(value: string): void;
        set_data(value: string): void;
        set_declare(value: boolean): void;
        set_height(value: string): void;
        set_hspace(value: bigint | number): void;
        set_name(value: string): void;
        set_standby(value: string): void;
        set_type_attr(value: string): void;
        set_use_map(value: string): void;
        set_vspace(value: bigint | number): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLOptGroupElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            disabled: boolean;
            label: string;
        }
    }
    class DOMHTMLOptGroupElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLOptGroupElement>;
        get disabled(): boolean;
        set disabled(val: boolean);
        get label(): string;
        set label(val: string);
        $signals: DOMHTMLOptGroupElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLOptGroupElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLOptGroupElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptGroupElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLOptGroupElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptGroupElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLOptGroupElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLOptGroupElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_disabled(): boolean;
        get_label(): string;
        set_disabled(value: boolean): void;
        set_label(value: string): void;
    }
    namespace DOMHTMLOptionElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::default-selected": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::index": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::selected": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            default_selected: boolean;
            defaultSelected: boolean;
            disabled: boolean;
            form: DOMHTMLFormElement;
            index: bigint | number;
            label: string;
            selected: boolean;
            text: string;
            value: string;
        }
    }
    class DOMHTMLOptionElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLOptionElement>;
        get default_selected(): boolean;
        set default_selected(val: boolean);
        get defaultSelected(): boolean;
        set defaultSelected(val: boolean);
        get disabled(): boolean;
        set disabled(val: boolean);
        get form(): DOMHTMLFormElement;
        get index(): number;
        get label(): string;
        set label(val: string);
        get selected(): boolean;
        set selected(val: boolean);
        get text(): string;
        get value(): string;
        set value(val: string);
        $signals: DOMHTMLOptionElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLOptionElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLOptionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptionElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLOptionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptionElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLOptionElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLOptionElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_default_selected(): boolean;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_index(): number;
        get_label(): string;
        get_selected(): boolean;
        get_text(): string;
        get_value(): string;
        set_default_selected(value: boolean): void;
        set_disabled(value: boolean): void;
        set_label(value: string): void;
        set_selected(value: boolean): void;
        set_value(value: string): void;
    }
    namespace DOMHTMLOptionsCollection {
        interface SignalSignatures extends DOMHTMLCollection.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::selected-index": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLCollection.ConstructorProps {
            length: bigint | number;
            selected_index: bigint | number;
            selectedIndex: bigint | number;
        }
    }
    class DOMHTMLOptionsCollection extends DOMHTMLCollection {
        static $gtype: GObject.GType<DOMHTMLOptionsCollection>;
        get length(): number;
        get selected_index(): number;
        set selected_index(val: bigint | number);
        get selectedIndex(): number;
        set selectedIndex(val: bigint | number);
        $signals: DOMHTMLOptionsCollection.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLOptionsCollection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLOptionsCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptionsCollection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLOptionsCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLOptionsCollection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLOptionsCollection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLOptionsCollection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        get_selected_index(): number;
        named_item(name: string): DOMNode;
        set_selected_index(value: bigint | number): void;
    }
    namespace DOMHTMLParagraphElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
        }
    }
    class DOMHTMLParagraphElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLParagraphElement>;
        get align(): string;
        set align(val: string);
        $signals: DOMHTMLParagraphElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLParagraphElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLParagraphElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLParagraphElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLParagraphElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLParagraphElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLParagraphElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLParagraphElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        set_align(value: string): void;
    }
    namespace DOMHTMLParamElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::value-type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            name: string;
            type: string;
            value: string;
            value_type: string;
            valueType: string;
        }
    }
    class DOMHTMLParamElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLParamElement>;
        get name(): string;
        set name(val: string);
        get type(): string;
        set type(val: string);
        get value(): string;
        set value(val: string);
        get value_type(): string;
        set value_type(val: string);
        get valueType(): string;
        set valueType(val: string);
        $signals: DOMHTMLParamElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLParamElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLParamElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLParamElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLParamElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLParamElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLParamElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLParamElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_type_attr(): string;
        get_value(): string;
        get_value_type(): string;
        set_name(value: string): void;
        set_type_attr(value: string): void;
        set_value(value: string): void;
        set_value_type(value: string): void;
    }
    namespace DOMHTMLPreElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::wrap": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            width: bigint | number;
            wrap: boolean;
        }
    }
    class DOMHTMLPreElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLPreElement>;
        get width(): number;
        set width(val: bigint | number);
        get wrap(): boolean;
        set wrap(val: boolean);
        $signals: DOMHTMLPreElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLPreElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLPreElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLPreElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLPreElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLPreElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLPreElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLPreElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_width(): number;
        get_wrap(): boolean;
        set_width(value: bigint | number): void;
        set_wrap(value: boolean): void;
    }
    namespace DOMHTMLQuoteElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::cite": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            cite: string;
        }
    }
    class DOMHTMLQuoteElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLQuoteElement>;
        get cite(): string;
        set cite(val: string);
        $signals: DOMHTMLQuoteElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLQuoteElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLQuoteElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLQuoteElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLQuoteElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLQuoteElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLQuoteElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLQuoteElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cite(): string;
        set_cite(value: string): void;
    }
    namespace DOMHTMLScriptElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::charset": (pspec: GObject.ParamSpec) => void;
            "notify::defer": (pspec: GObject.ParamSpec) => void;
            "notify::event": (pspec: GObject.ParamSpec) => void;
            "notify::html-for": (pspec: GObject.ParamSpec) => void;
            "notify::src": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            charset: string;
            defer: boolean;
            event: string;
            html_for: string;
            htmlFor: string;
            src: string;
            text: string;
            type: string;
        }
    }
    class DOMHTMLScriptElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLScriptElement>;
        get charset(): string;
        set charset(val: string);
        get defer(): boolean;
        set defer(val: boolean);
        get event(): string;
        set event(val: string);
        get html_for(): string;
        set html_for(val: string);
        get htmlFor(): string;
        set htmlFor(val: string);
        get src(): string;
        set src(val: string);
        get text(): string;
        set text(val: string);
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLScriptElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLScriptElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLScriptElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLScriptElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLScriptElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLScriptElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLScriptElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLScriptElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_charset(): string;
        get_defer(): boolean;
        get_event(): string;
        get_html_for(): string;
        get_src(): string;
        get_text(): string;
        get_type_attr(): string;
        set_charset(value: string): void;
        set_defer(value: boolean): void;
        set_event(value: string): void;
        set_html_for(value: string): void;
        set_src(value: string): void;
        set_text(value: string): void;
        set_type_attr(value: string): void;
    }
    namespace DOMHTMLSelectElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::autofocus": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::multiple": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::selected-index": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::will-validate": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            autofocus: boolean;
            disabled: boolean;
            form: DOMHTMLFormElement;
            length: bigint | number;
            multiple: boolean;
            name: string;
            options: DOMHTMLOptionsCollection;
            selected_index: bigint | number;
            selectedIndex: bigint | number;
            size: bigint | number;
            type: string;
            value: string;
            will_validate: boolean;
            willValidate: boolean;
        }
    }
    class DOMHTMLSelectElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLSelectElement>;
        get autofocus(): boolean;
        set autofocus(val: boolean);
        get disabled(): boolean;
        set disabled(val: boolean);
        get form(): DOMHTMLFormElement;
        get length(): number;
        set length(val: bigint | number);
        get multiple(): boolean;
        set multiple(val: boolean);
        get name(): string;
        set name(val: string);
        get options(): DOMHTMLOptionsCollection;
        get selected_index(): number;
        set selected_index(val: bigint | number);
        get selectedIndex(): number;
        set selectedIndex(val: bigint | number);
        get size(): number;
        set size(val: bigint | number);
        get type(): string;
        get value(): string;
        set value(val: string);
        get will_validate(): boolean;
        get willValidate(): boolean;
        $signals: DOMHTMLSelectElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLSelectElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLSelectElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLSelectElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLSelectElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLSelectElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLSelectElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLSelectElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(element: DOMHTMLElement, before: DOMHTMLElement): void;
        get_autofocus(): boolean;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_length(): number;
        get_multiple(): boolean;
        get_name(): string;
        get_options(): DOMHTMLOptionsCollection;
        get_select_type(): string;
        get_selected_index(): number;
        get_size(): number;
        get_value(): string;
        get_will_validate(): boolean;
        item(index: bigint | number): DOMNode;
        named_item(name: string): DOMNode;
        remove(index: bigint | number): void;
        remove(...args: never[]): any;
        set_autofocus(value: boolean): void;
        set_disabled(value: boolean): void;
        set_length(value: bigint | number): void;
        set_multiple(value: boolean): void;
        set_name(value: string): void;
        set_selected_index(value: bigint | number): void;
        set_size(value: bigint | number): void;
        set_value(value: string): void;
    }
    namespace DOMHTMLStyleElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::media": (pspec: GObject.ParamSpec) => void;
            "notify::sheet": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            disabled: boolean;
            media: string;
            sheet: DOMStyleSheet;
            type: string;
        }
    }
    class DOMHTMLStyleElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLStyleElement>;
        get disabled(): boolean;
        set disabled(val: boolean);
        get media(): string;
        set media(val: string);
        get sheet(): DOMStyleSheet;
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLStyleElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLStyleElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLStyleElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLStyleElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLStyleElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLStyleElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLStyleElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLStyleElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_disabled(): boolean;
        get_media(): string;
        get_sheet(): DOMStyleSheet;
        get_type_attr(): string;
        set_disabled(value: boolean): void;
        set_media(value: string): void;
        set_type_attr(value: string): void;
    }
    namespace DOMHTMLTableCaptionElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
        }
    }
    class DOMHTMLTableCaptionElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableCaptionElement>;
        get align(): string;
        set align(val: string);
        $signals: DOMHTMLTableCaptionElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableCaptionElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableCaptionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableCaptionElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableCaptionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableCaptionElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableCaptionElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableCaptionElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        set_align(value: string): void;
    }
    namespace DOMHTMLTableCellElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::abbr": (pspec: GObject.ParamSpec) => void;
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::axis": (pspec: GObject.ParamSpec) => void;
            "notify::bg-color": (pspec: GObject.ParamSpec) => void;
            "notify::cell-index": (pspec: GObject.ParamSpec) => void;
            "notify::ch": (pspec: GObject.ParamSpec) => void;
            "notify::ch-off": (pspec: GObject.ParamSpec) => void;
            "notify::col-span": (pspec: GObject.ParamSpec) => void;
            "notify::headers": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::no-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::row-span": (pspec: GObject.ParamSpec) => void;
            "notify::scope": (pspec: GObject.ParamSpec) => void;
            "notify::v-align": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            abbr: string;
            align: string;
            axis: string;
            bg_color: string;
            bgColor: string;
            cell_index: bigint | number;
            cellIndex: bigint | number;
            ch: string;
            ch_off: string;
            chOff: string;
            col_span: bigint | number;
            colSpan: bigint | number;
            headers: string;
            height: string;
            no_wrap: boolean;
            noWrap: boolean;
            row_span: bigint | number;
            rowSpan: bigint | number;
            scope: string;
            v_align: string;
            vAlign: string;
            width: string;
        }
    }
    class DOMHTMLTableCellElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableCellElement>;
        get abbr(): string;
        set abbr(val: string);
        get align(): string;
        set align(val: string);
        get axis(): string;
        set axis(val: string);
        get bg_color(): string;
        set bg_color(val: string);
        get bgColor(): string;
        set bgColor(val: string);
        get cell_index(): number;
        get cellIndex(): number;
        get ch(): string;
        set ch(val: string);
        get ch_off(): string;
        set ch_off(val: string);
        get chOff(): string;
        set chOff(val: string);
        get col_span(): number;
        set col_span(val: bigint | number);
        get colSpan(): number;
        set colSpan(val: bigint | number);
        get headers(): string;
        set headers(val: string);
        get height(): string;
        set height(val: string);
        get no_wrap(): boolean;
        set no_wrap(val: boolean);
        get noWrap(): boolean;
        set noWrap(val: boolean);
        get row_span(): number;
        set row_span(val: bigint | number);
        get rowSpan(): number;
        set rowSpan(val: bigint | number);
        get scope(): string;
        set scope(val: string);
        get v_align(): string;
        set v_align(val: string);
        get vAlign(): string;
        set vAlign(val: string);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLTableCellElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableCellElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableCellElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableCellElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableCellElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableCellElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableCellElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableCellElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_abbr(): string;
        get_align(): string;
        get_axis(): string;
        get_bg_color(): string;
        get_cell_index(): number;
        get_ch(): string;
        get_ch_off(): string;
        get_col_span(): number;
        get_headers(): string;
        get_height(): string;
        get_no_wrap(): boolean;
        get_row_span(): number;
        get_scope(): string;
        get_v_align(): string;
        get_width(): string;
        set_abbr(value: string): void;
        set_align(value: string): void;
        set_axis(value: string): void;
        set_bg_color(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_col_span(value: bigint | number): void;
        set_headers(value: string): void;
        set_height(value: string): void;
        set_no_wrap(value: boolean): void;
        set_row_span(value: bigint | number): void;
        set_scope(value: string): void;
        set_v_align(value: string): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLTableColElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::ch": (pspec: GObject.ParamSpec) => void;
            "notify::ch-off": (pspec: GObject.ParamSpec) => void;
            "notify::span": (pspec: GObject.ParamSpec) => void;
            "notify::v-align": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            ch: string;
            ch_off: string;
            chOff: string;
            span: bigint | number;
            v_align: string;
            vAlign: string;
            width: string;
        }
    }
    class DOMHTMLTableColElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableColElement>;
        get align(): string;
        set align(val: string);
        get ch(): string;
        set ch(val: string);
        get ch_off(): string;
        set ch_off(val: string);
        get chOff(): string;
        set chOff(val: string);
        get span(): number;
        set span(val: bigint | number);
        get v_align(): string;
        set v_align(val: string);
        get vAlign(): string;
        set vAlign(val: string);
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLTableColElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableColElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableColElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableColElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableColElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableColElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableColElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableColElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_align(): string;
        get_ch(): string;
        get_ch_off(): string;
        get_span(): number;
        get_v_align(): string;
        get_width(): string;
        set_align(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_span(value: bigint | number): void;
        set_v_align(value: string): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLTableElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::bg-color": (pspec: GObject.ParamSpec) => void;
            "notify::border": (pspec: GObject.ParamSpec) => void;
            "notify::caption": (pspec: GObject.ParamSpec) => void;
            "notify::cell-padding": (pspec: GObject.ParamSpec) => void;
            "notify::cell-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::rows": (pspec: GObject.ParamSpec) => void;
            "notify::rules": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
            "notify::t-bodies": (pspec: GObject.ParamSpec) => void;
            "notify::t-foot": (pspec: GObject.ParamSpec) => void;
            "notify::t-head": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            bg_color: string;
            bgColor: string;
            border: string;
            caption: DOMHTMLTableCaptionElement;
            cell_padding: string;
            cellPadding: string;
            cell_spacing: string;
            cellSpacing: string;
            rows: DOMHTMLCollection;
            rules: string;
            summary: string;
            t_bodies: DOMHTMLCollection;
            tBodies: DOMHTMLCollection;
            t_foot: DOMHTMLTableSectionElement;
            tFoot: DOMHTMLTableSectionElement;
            t_head: DOMHTMLTableSectionElement;
            tHead: DOMHTMLTableSectionElement;
            width: string;
        }
    }
    class DOMHTMLTableElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableElement>;
        get align(): string;
        set align(val: string);
        get bg_color(): string;
        set bg_color(val: string);
        get bgColor(): string;
        set bgColor(val: string);
        get border(): string;
        set border(val: string);
        get caption(): DOMHTMLTableCaptionElement;
        get cell_padding(): string;
        set cell_padding(val: string);
        get cellPadding(): string;
        set cellPadding(val: string);
        get cell_spacing(): string;
        set cell_spacing(val: string);
        get cellSpacing(): string;
        set cellSpacing(val: string);
        get rows(): DOMHTMLCollection;
        get rules(): string;
        set rules(val: string);
        get summary(): string;
        set summary(val: string);
        get t_bodies(): DOMHTMLCollection;
        get tBodies(): DOMHTMLCollection;
        get t_foot(): DOMHTMLTableSectionElement;
        get tFoot(): DOMHTMLTableSectionElement;
        get t_head(): DOMHTMLTableSectionElement;
        get tHead(): DOMHTMLTableSectionElement;
        get width(): string;
        set width(val: string);
        $signals: DOMHTMLTableElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create_caption(): DOMHTMLElement;
        create_t_foot(): DOMHTMLElement;
        create_t_head(): DOMHTMLElement;
        delete_caption(): void;
        delete_row(index: bigint | number): void;
        delete_t_foot(): void;
        delete_t_head(): void;
        get_align(): string;
        get_bg_color(): string;
        get_border(): string;
        get_caption(): DOMHTMLTableCaptionElement;
        get_cell_padding(): string;
        get_cell_spacing(): string;
        get_rows(): DOMHTMLCollection;
        get_rules(): string;
        get_summary(): string;
        get_t_bodies(): DOMHTMLCollection;
        get_t_foot(): DOMHTMLTableSectionElement;
        get_t_head(): DOMHTMLTableSectionElement;
        get_width(): string;
        insert_row(index: bigint | number): DOMHTMLElement;
        set_align(value: string): void;
        set_bg_color(value: string): void;
        set_border(value: string): void;
        set_caption(value: DOMHTMLTableCaptionElement): void;
        set_cell_padding(value: string): void;
        set_cell_spacing(value: string): void;
        set_rules(value: string): void;
        set_summary(value: string): void;
        set_t_foot(value: DOMHTMLTableSectionElement): void;
        set_t_head(value: DOMHTMLTableSectionElement): void;
        set_width(value: string): void;
    }
    namespace DOMHTMLTableRowElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::bg-color": (pspec: GObject.ParamSpec) => void;
            "notify::cells": (pspec: GObject.ParamSpec) => void;
            "notify::ch": (pspec: GObject.ParamSpec) => void;
            "notify::ch-off": (pspec: GObject.ParamSpec) => void;
            "notify::row-index": (pspec: GObject.ParamSpec) => void;
            "notify::section-row-index": (pspec: GObject.ParamSpec) => void;
            "notify::v-align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            bg_color: string;
            bgColor: string;
            cells: DOMHTMLCollection;
            ch: string;
            ch_off: string;
            chOff: string;
            row_index: bigint | number;
            rowIndex: bigint | number;
            section_row_index: bigint | number;
            sectionRowIndex: bigint | number;
            v_align: string;
            vAlign: string;
        }
    }
    class DOMHTMLTableRowElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableRowElement>;
        get align(): string;
        set align(val: string);
        get bg_color(): string;
        set bg_color(val: string);
        get bgColor(): string;
        set bgColor(val: string);
        get cells(): DOMHTMLCollection;
        get ch(): string;
        set ch(val: string);
        get ch_off(): string;
        set ch_off(val: string);
        get chOff(): string;
        set chOff(val: string);
        get row_index(): number;
        get rowIndex(): number;
        get section_row_index(): number;
        get sectionRowIndex(): number;
        get v_align(): string;
        set v_align(val: string);
        get vAlign(): string;
        set vAlign(val: string);
        $signals: DOMHTMLTableRowElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableRowElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableRowElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableRowElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableRowElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableRowElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableRowElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableRowElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        delete_cell(index: bigint | number): void;
        get_align(): string;
        get_bg_color(): string;
        get_cells(): DOMHTMLCollection;
        get_ch(): string;
        get_ch_off(): string;
        get_row_index(): number;
        get_section_row_index(): number;
        get_v_align(): string;
        insert_cell(index: bigint | number): DOMHTMLElement;
        set_align(value: string): void;
        set_bg_color(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_v_align(value: string): void;
    }
    namespace DOMHTMLTableSectionElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::align": (pspec: GObject.ParamSpec) => void;
            "notify::ch": (pspec: GObject.ParamSpec) => void;
            "notify::ch-off": (pspec: GObject.ParamSpec) => void;
            "notify::rows": (pspec: GObject.ParamSpec) => void;
            "notify::v-align": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            align: string;
            ch: string;
            ch_off: string;
            chOff: string;
            rows: DOMHTMLCollection;
            v_align: string;
            vAlign: string;
        }
    }
    class DOMHTMLTableSectionElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTableSectionElement>;
        get align(): string;
        set align(val: string);
        get ch(): string;
        set ch(val: string);
        get ch_off(): string;
        set ch_off(val: string);
        get chOff(): string;
        set chOff(val: string);
        get rows(): DOMHTMLCollection;
        get v_align(): string;
        set v_align(val: string);
        get vAlign(): string;
        set vAlign(val: string);
        $signals: DOMHTMLTableSectionElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTableSectionElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTableSectionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableSectionElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTableSectionElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTableSectionElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTableSectionElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTableSectionElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        delete_row(index: bigint | number): void;
        get_align(): string;
        get_ch(): string;
        get_ch_off(): string;
        get_rows(): DOMHTMLCollection;
        get_v_align(): string;
        insert_row(index: bigint | number): DOMHTMLElement;
        set_align(value: string): void;
        set_ch(value: string): void;
        set_ch_off(value: string): void;
        set_v_align(value: string): void;
    }
    namespace DOMHTMLTextAreaElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::autofocus": (pspec: GObject.ParamSpec) => void;
            "notify::cols": (pspec: GObject.ParamSpec) => void;
            "notify::default-value": (pspec: GObject.ParamSpec) => void;
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::form": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::rows": (pspec: GObject.ParamSpec) => void;
            "notify::selection-end": (pspec: GObject.ParamSpec) => void;
            "notify::selection-start": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::will-validate": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            autofocus: boolean;
            cols: bigint | number;
            default_value: string;
            defaultValue: string;
            disabled: boolean;
            form: DOMHTMLFormElement;
            name: string;
            read_only: boolean;
            readOnly: boolean;
            rows: bigint | number;
            selection_end: bigint | number;
            selectionEnd: bigint | number;
            selection_start: bigint | number;
            selectionStart: bigint | number;
            type: string;
            value: string;
            will_validate: boolean;
            willValidate: boolean;
        }
    }
    class DOMHTMLTextAreaElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTextAreaElement>;
        get autofocus(): boolean;
        set autofocus(val: boolean);
        get cols(): number;
        set cols(val: bigint | number);
        get default_value(): string;
        set default_value(val: string);
        get defaultValue(): string;
        set defaultValue(val: string);
        get disabled(): boolean;
        set disabled(val: boolean);
        get form(): DOMHTMLFormElement;
        get name(): string;
        set name(val: string);
        get read_only(): boolean;
        set read_only(val: boolean);
        get readOnly(): boolean;
        set readOnly(val: boolean);
        get rows(): number;
        set rows(val: bigint | number);
        get selection_end(): number;
        set selection_end(val: bigint | number);
        get selectionEnd(): number;
        set selectionEnd(val: bigint | number);
        get selection_start(): number;
        set selection_start(val: bigint | number);
        get selectionStart(): number;
        set selectionStart(val: bigint | number);
        get type(): string;
        get value(): string;
        set value(val: string);
        get will_validate(): boolean;
        get willValidate(): boolean;
        $signals: DOMHTMLTextAreaElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTextAreaElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTextAreaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTextAreaElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTextAreaElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTextAreaElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTextAreaElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTextAreaElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_area_type(): string;
        get_autofocus(): boolean;
        get_cols(): number;
        get_default_value(): string;
        get_disabled(): boolean;
        get_form(): DOMHTMLFormElement;
        get_name(): string;
        get_read_only(): boolean;
        get_rows(): number;
        get_selection_end(): number;
        get_selection_start(): number;
        get_value(): string;
        get_will_validate(): boolean;
        is_edited(): boolean;
        select(): void;
        set_autofocus(value: boolean): void;
        set_cols(value: bigint | number): void;
        set_default_value(value: string): void;
        set_disabled(value: boolean): void;
        set_name(value: string): void;
        set_read_only(value: boolean): void;
        set_rows(value: bigint | number): void;
        set_selection_end(value: bigint | number): void;
        set_selection_range(start: bigint | number, end: bigint | number, direction: string): void;
        set_selection_start(value: bigint | number): void;
        set_value(value: string): void;
    }
    namespace DOMHTMLTitleElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            text: string;
        }
    }
    class DOMHTMLTitleElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLTitleElement>;
        get text(): string;
        set text(val: string);
        $signals: DOMHTMLTitleElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLTitleElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLTitleElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTitleElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLTitleElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLTitleElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLTitleElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLTitleElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_text(): string;
        set_text(value: string): void;
    }
    namespace DOMHTMLUListElement {
        interface SignalSignatures extends DOMHTMLElement.SignalSignatures {
            "notify::compact": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::access-key": (pspec: GObject.ParamSpec) => void;
            "notify::content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::dir": (pspec: GObject.ParamSpec) => void;
            "notify::draggable": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::inner-text": (pspec: GObject.ParamSpec) => void;
            "notify::is-content-editable": (pspec: GObject.ParamSpec) => void;
            "notify::lang": (pspec: GObject.ParamSpec) => void;
            "notify::outer-text": (pspec: GObject.ParamSpec) => void;
            "notify::spellcheck": (pspec: GObject.ParamSpec) => void;
            "notify::tab-index": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::translate": (pspec: GObject.ParamSpec) => void;
            "notify::webkitdropzone": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::child-element-count": (pspec: GObject.ParamSpec) => void;
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::class-list": (pspec: GObject.ParamSpec) => void;
            "notify::class-name": (pspec: GObject.ParamSpec) => void;
            "notify::client-height": (pspec: GObject.ParamSpec) => void;
            "notify::client-left": (pspec: GObject.ParamSpec) => void;
            "notify::client-top": (pspec: GObject.ParamSpec) => void;
            "notify::client-width": (pspec: GObject.ParamSpec) => void;
            "notify::first-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::inner-html": (pspec: GObject.ParamSpec) => void;
            "notify::last-element-child": (pspec: GObject.ParamSpec) => void;
            "notify::local-name": (pspec: GObject.ParamSpec) => void;
            "notify::namespace-uri": (pspec: GObject.ParamSpec) => void;
            "notify::next-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::offset-height": (pspec: GObject.ParamSpec) => void;
            "notify::offset-left": (pspec: GObject.ParamSpec) => void;
            "notify::offset-parent": (pspec: GObject.ParamSpec) => void;
            "notify::offset-top": (pspec: GObject.ParamSpec) => void;
            "notify::offset-width": (pspec: GObject.ParamSpec) => void;
            "notify::outer-html": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::previous-element-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-height": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-left": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-top": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-width": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tag-name": (pspec: GObject.ParamSpec) => void;
            "notify::webkit-region-overset": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMHTMLElement.ConstructorProps, DOMEventTarget.ConstructorProps {
            compact: boolean;
            type: string;
        }
    }
    class DOMHTMLUListElement extends DOMHTMLElement implements DOMEventTarget {
        static $gtype: GObject.GType<DOMHTMLUListElement>;
        get compact(): boolean;
        set compact(val: boolean);
        get type(): string;
        set type(val: string);
        $signals: DOMHTMLUListElement.SignalSignatures;
        constructor(properties?: Partial<DOMHTMLUListElement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMHTMLUListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLUListElement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMHTMLUListElement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMHTMLUListElement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMHTMLUListElement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMHTMLUListElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compact(): boolean;
        get_type_attr(): string;
        set_compact(value: boolean): void;
        set_type_attr(value: string): void;
    }
    namespace DOMKeyboardEvent {
        interface SignalSignatures extends DOMUIEvent.SignalSignatures {
            "notify::alt-graph-key": (pspec: GObject.ParamSpec) => void;
            "notify::alt-key": (pspec: GObject.ParamSpec) => void;
            "notify::ctrl-key": (pspec: GObject.ParamSpec) => void;
            "notify::key-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::key-location": (pspec: GObject.ParamSpec) => void;
            "notify::meta-key": (pspec: GObject.ParamSpec) => void;
            "notify::shift-key": (pspec: GObject.ParamSpec) => void;
            "notify::char-code": (pspec: GObject.ParamSpec) => void;
            "notify::detail": (pspec: GObject.ParamSpec) => void;
            "notify::key-code": (pspec: GObject.ParamSpec) => void;
            "notify::layer-x": (pspec: GObject.ParamSpec) => void;
            "notify::layer-y": (pspec: GObject.ParamSpec) => void;
            "notify::page-x": (pspec: GObject.ParamSpec) => void;
            "notify::page-y": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::bubbles": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-bubble": (pspec: GObject.ParamSpec) => void;
            "notify::cancelable": (pspec: GObject.ParamSpec) => void;
            "notify::current-target": (pspec: GObject.ParamSpec) => void;
            "notify::event-phase": (pspec: GObject.ParamSpec) => void;
            "notify::return-value": (pspec: GObject.ParamSpec) => void;
            "notify::src-element": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::time-stamp": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMUIEvent.ConstructorProps {
            alt_graph_key: boolean;
            altGraphKey: boolean;
            alt_key: boolean;
            altKey: boolean;
            ctrl_key: boolean;
            ctrlKey: boolean;
            key_identifier: string;
            keyIdentifier: string;
            key_location: bigint | number;
            keyLocation: bigint | number;
            meta_key: boolean;
            metaKey: boolean;
            shift_key: boolean;
            shiftKey: boolean;
        }
    }
    class DOMKeyboardEvent extends DOMUIEvent {
        static $gtype: GObject.GType<DOMKeyboardEvent>;
        get alt_graph_key(): boolean;
        get altGraphKey(): boolean;
        get alt_key(): boolean;
        get altKey(): boolean;
        get ctrl_key(): boolean;
        get ctrlKey(): boolean;
        get key_identifier(): string;
        get keyIdentifier(): string;
        get key_location(): number;
        get keyLocation(): number;
        get meta_key(): boolean;
        get metaKey(): boolean;
        get shift_key(): boolean;
        get shiftKey(): boolean;
        $signals: DOMKeyboardEvent.SignalSignatures;
        constructor(properties?: Partial<DOMKeyboardEvent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMKeyboardEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMKeyboardEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMKeyboardEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMKeyboardEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMKeyboardEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMKeyboardEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_alt_graph_key(): boolean;
        get_alt_key(): boolean;
        get_ctrl_key(): boolean;
        get_key_identifier(): string;
        get_key_location(): number;
        get_meta_key(): boolean;
        get_modifier_state(keyIdentifierArg: string): boolean;
        get_shift_key(): boolean;
        init_keyboard_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, keyIdentifier: string, location: bigint | number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): void;
    }
    namespace DOMMediaList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::media-text": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
            media_text: string;
            mediaText: string;
        }
    }
    class DOMMediaList extends DOMObject {
        static $gtype: GObject.GType<DOMMediaList>;
        get length(): number;
        get media_text(): string;
        set media_text(val: string);
        get mediaText(): string;
        set mediaText(val: string);
        $signals: DOMMediaList.SignalSignatures;
        constructor(properties?: Partial<DOMMediaList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMMediaList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMMediaList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMMediaList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMMediaList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMMediaList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMMediaList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append_medium(newMedium: string): void;
        delete_medium(oldMedium: string): void;
        get_length(): number;
        get_media_text(): string;
        item(index: bigint | number): string;
        set_media_text(value: string): void;
    }
    namespace DOMMouseEvent {
        interface SignalSignatures extends DOMUIEvent.SignalSignatures {
            "notify::alt-key": (pspec: GObject.ParamSpec) => void;
            "notify::button": (pspec: GObject.ParamSpec) => void;
            "notify::client-x": (pspec: GObject.ParamSpec) => void;
            "notify::client-y": (pspec: GObject.ParamSpec) => void;
            "notify::ctrl-key": (pspec: GObject.ParamSpec) => void;
            "notify::from-element": (pspec: GObject.ParamSpec) => void;
            "notify::meta-key": (pspec: GObject.ParamSpec) => void;
            "notify::offset-x": (pspec: GObject.ParamSpec) => void;
            "notify::offset-y": (pspec: GObject.ParamSpec) => void;
            "notify::related-target": (pspec: GObject.ParamSpec) => void;
            "notify::screen-x": (pspec: GObject.ParamSpec) => void;
            "notify::screen-y": (pspec: GObject.ParamSpec) => void;
            "notify::shift-key": (pspec: GObject.ParamSpec) => void;
            "notify::to-element": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::char-code": (pspec: GObject.ParamSpec) => void;
            "notify::detail": (pspec: GObject.ParamSpec) => void;
            "notify::key-code": (pspec: GObject.ParamSpec) => void;
            "notify::layer-x": (pspec: GObject.ParamSpec) => void;
            "notify::layer-y": (pspec: GObject.ParamSpec) => void;
            "notify::page-x": (pspec: GObject.ParamSpec) => void;
            "notify::page-y": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::bubbles": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-bubble": (pspec: GObject.ParamSpec) => void;
            "notify::cancelable": (pspec: GObject.ParamSpec) => void;
            "notify::current-target": (pspec: GObject.ParamSpec) => void;
            "notify::event-phase": (pspec: GObject.ParamSpec) => void;
            "notify::return-value": (pspec: GObject.ParamSpec) => void;
            "notify::src-element": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::time-stamp": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMUIEvent.ConstructorProps {
            alt_key: boolean;
            altKey: boolean;
            button: number;
            client_x: bigint | number;
            clientX: bigint | number;
            client_y: bigint | number;
            clientY: bigint | number;
            ctrl_key: boolean;
            ctrlKey: boolean;
            from_element: DOMNode;
            fromElement: DOMNode;
            meta_key: boolean;
            metaKey: boolean;
            offset_x: bigint | number;
            offsetX: bigint | number;
            offset_y: bigint | number;
            offsetY: bigint | number;
            related_target: DOMEventTarget;
            relatedTarget: DOMEventTarget;
            screen_x: bigint | number;
            screenX: bigint | number;
            screen_y: bigint | number;
            screenY: bigint | number;
            shift_key: boolean;
            shiftKey: boolean;
            to_element: DOMNode;
            toElement: DOMNode;
            x: bigint | number;
            y: bigint | number;
        }
    }
    class DOMMouseEvent extends DOMUIEvent {
        static $gtype: GObject.GType<DOMMouseEvent>;
        get alt_key(): boolean;
        get altKey(): boolean;
        get button(): number;
        get client_x(): number;
        get clientX(): number;
        get client_y(): number;
        get clientY(): number;
        get ctrl_key(): boolean;
        get ctrlKey(): boolean;
        get from_element(): DOMNode;
        get fromElement(): DOMNode;
        get meta_key(): boolean;
        get metaKey(): boolean;
        get offset_x(): number;
        get offsetX(): number;
        get offset_y(): number;
        get offsetY(): number;
        get related_target(): DOMEventTarget;
        get relatedTarget(): DOMEventTarget;
        get screen_x(): number;
        get screenX(): number;
        get screen_y(): number;
        get screenY(): number;
        get shift_key(): boolean;
        get shiftKey(): boolean;
        get to_element(): DOMNode;
        get toElement(): DOMNode;
        get x(): number;
        get y(): number;
        $signals: DOMMouseEvent.SignalSignatures;
        constructor(properties?: Partial<DOMMouseEvent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMMouseEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMMouseEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMMouseEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMMouseEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMMouseEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMMouseEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_alt_key(): boolean;
        get_button(): number;
        get_client_x(): number;
        get_client_y(): number;
        get_ctrl_key(): boolean;
        get_from_element(): DOMNode;
        get_meta_key(): boolean;
        get_offset_x(): number;
        get_offset_y(): number;
        get_related_target(): DOMEventTarget;
        get_screen_x(): number;
        get_screen_y(): number;
        get_shift_key(): boolean;
        get_to_element(): DOMNode;
        get_x(): number;
        get_y(): number;
        init_mouse_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: bigint | number, screenX: bigint | number, screenY: bigint | number, clientX: bigint | number, clientY: bigint | number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: DOMEventTarget): void;
    }
    namespace DOMNamedNodeMap {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMNamedNodeMap extends DOMObject {
        static $gtype: GObject.GType<DOMNamedNodeMap>;
        get length(): number;
        $signals: DOMNamedNodeMap.SignalSignatures;
        constructor(properties?: Partial<DOMNamedNodeMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMNamedNodeMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNamedNodeMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMNamedNodeMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNamedNodeMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMNamedNodeMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMNamedNodeMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        get_named_item(name: string): DOMNode;
        get_named_item_ns(namespaceURI: string, localName: string): DOMNode;
        item(index: bigint | number): DOMNode;
        remove_named_item(name: string): DOMNode;
        remove_named_item_ns(namespaceURI: string, localName: string): DOMNode;
        set_named_item(node: DOMNode): DOMNode;
        set_named_item_ns(node: DOMNode): DOMNode;
    }
    namespace DOMNode {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps, DOMEventTarget.ConstructorProps {
            base_uri: string;
            baseUri: string;
            child_nodes: DOMNodeList;
            childNodes: DOMNodeList;
            first_child: DOMNode;
            firstChild: DOMNode;
            last_child: DOMNode;
            lastChild: DOMNode;
            next_sibling: DOMNode;
            nextSibling: DOMNode;
            node_name: string;
            nodeName: string;
            node_type: number;
            nodeType: number;
            node_value: string;
            nodeValue: string;
            owner_document: DOMDocument;
            ownerDocument: DOMDocument;
            parent_element: DOMElement;
            parentElement: DOMElement;
            parent_node: DOMNode;
            parentNode: DOMNode;
            previous_sibling: DOMNode;
            previousSibling: DOMNode;
            text_content: string;
            textContent: string;
        }
    }
    class DOMNode extends DOMObject implements DOMEventTarget {
        static $gtype: GObject.GType<DOMNode>;
        get base_uri(): string;
        get baseUri(): string;
        get child_nodes(): DOMNodeList;
        get childNodes(): DOMNodeList;
        get first_child(): DOMNode;
        get firstChild(): DOMNode;
        get last_child(): DOMNode;
        get lastChild(): DOMNode;
        get next_sibling(): DOMNode;
        get nextSibling(): DOMNode;
        get node_name(): string;
        get nodeName(): string;
        get node_type(): number;
        get nodeType(): number;
        get node_value(): string;
        set node_value(val: string);
        get nodeValue(): string;
        set nodeValue(val: string);
        get owner_document(): DOMDocument;
        get ownerDocument(): DOMDocument;
        get parent_element(): DOMElement;
        get parentElement(): DOMElement;
        get parent_node(): DOMNode;
        get parentNode(): DOMNode;
        get previous_sibling(): DOMNode;
        get previousSibling(): DOMNode;
        get text_content(): string;
        set text_content(val: string);
        get textContent(): string;
        set textContent(val: string);
        $signals: DOMNode.SignalSignatures;
        constructor(properties?: Partial<DOMNode.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static for_js_value(value: JavaScriptCore.Value): DOMNode;
        append_child(newChild: DOMNode): DOMNode;
        clone_node(deep: boolean): DOMNode;
        clone_node_with_error(deep: boolean): DOMNode;
        compare_document_position(other: DOMNode): number;
        contains(other: DOMNode): boolean;
        get_base_uri(): string;
        get_child_nodes(): DOMNodeList;
        get_first_child(): DOMNode;
        get_last_child(): DOMNode;
        get_local_name(): string;
        get_namespace_uri(): string;
        get_next_sibling(): DOMNode;
        get_node_name(): string;
        get_node_type(): number;
        get_node_value(): string;
        get_owner_document(): DOMDocument;
        get_parent_element(): DOMElement;
        get_parent_node(): DOMNode;
        get_prefix(): string;
        get_previous_sibling(): DOMNode;
        get_text_content(): string;
        has_child_nodes(): boolean;
        insert_before(newChild: DOMNode, refChild: DOMNode | null): DOMNode;
        is_default_namespace(namespaceURI: string): boolean;
        is_equal_node(other: DOMNode): boolean;
        is_same_node(other: DOMNode): boolean;
        is_supported(feature: string, version: string): boolean;
        lookup_namespace_uri(prefix: string): string;
        lookup_prefix(namespaceURI: string): string;
        normalize(): void;
        remove_child(oldChild: DOMNode): DOMNode;
        replace_child(newChild: DOMNode, oldChild: DOMNode): DOMNode;
        set_node_value(value: string): void;
        set_prefix(value: string): void;
        set_text_content(value: string): void;
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        vfunc_dispatch_event(event: DOMEvent): boolean;
        vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
    }
    namespace DOMNodeIterator {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-before-reference-node": (pspec: GObject.ParamSpec) => void;
            "notify::reference-node": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::what-to-show": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            filter: DOMNodeFilter;
            pointer_before_reference_node: boolean;
            pointerBeforeReferenceNode: boolean;
            reference_node: DOMNode;
            referenceNode: DOMNode;
            root: DOMNode;
            what_to_show: bigint | number;
            whatToShow: bigint | number;
        }
    }
    class DOMNodeIterator extends DOMObject {
        static $gtype: GObject.GType<DOMNodeIterator>;
        get filter(): DOMNodeFilter;
        get pointer_before_reference_node(): boolean;
        get pointerBeforeReferenceNode(): boolean;
        get reference_node(): DOMNode;
        get referenceNode(): DOMNode;
        get root(): DOMNode;
        get what_to_show(): number;
        get whatToShow(): number;
        $signals: DOMNodeIterator.SignalSignatures;
        constructor(properties?: Partial<DOMNodeIterator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMNodeIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNodeIterator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMNodeIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNodeIterator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMNodeIterator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMNodeIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        detach(): void;
        get_expand_entity_references(): boolean;
        get_filter(): DOMNodeFilter;
        get_pointer_before_reference_node(): boolean;
        get_reference_node(): DOMNode;
        get_root(): DOMNode;
        get_what_to_show(): number;
        next_node(): DOMNode;
        previous_node(): DOMNode;
    }
    namespace DOMNodeList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMNodeList extends DOMObject {
        static $gtype: GObject.GType<DOMNodeList>;
        get length(): number;
        $signals: DOMNodeList.SignalSignatures;
        constructor(properties?: Partial<DOMNodeList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMNodeList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNodeList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMNodeList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMNodeList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMNodeList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMNodeList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMNode;
    }
    namespace DOMObject {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            core_object: never;
            coreObject: never;
        }
    }
    class DOMObject extends GObject.Object {
        static $gtype: GObject.GType<DOMObject>;
        set core_object(val: never);
        set coreObject(val: never);
        $signals: DOMObject.SignalSignatures;
        parentInstance: GObject.Object;
        constructor(properties?: Partial<DOMObject.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DOMProcessingInstruction {
        interface SignalSignatures extends DOMCharacterData.SignalSignatures {
            "notify::sheet": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMCharacterData.ConstructorProps, DOMEventTarget.ConstructorProps {
            sheet: DOMStyleSheet;
            target: string;
        }
    }
    class DOMProcessingInstruction extends DOMCharacterData implements DOMEventTarget {
        static $gtype: GObject.GType<DOMProcessingInstruction>;
        get sheet(): DOMStyleSheet;
        get target(): string;
        $signals: DOMProcessingInstruction.SignalSignatures;
        constructor(properties?: Partial<DOMProcessingInstruction.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMProcessingInstruction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMProcessingInstruction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMProcessingInstruction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMProcessingInstruction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMProcessingInstruction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMProcessingInstruction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_sheet(): DOMStyleSheet;
        get_target(): string;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set_data(key: string, data: null): void;
        set_data(...args: never[]): any;
    }
    namespace DOMRange {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::common-ancestor-container": (pspec: GObject.ParamSpec) => void;
            "notify::end-container": (pspec: GObject.ParamSpec) => void;
            "notify::end-offset": (pspec: GObject.ParamSpec) => void;
            "notify::start-container": (pspec: GObject.ParamSpec) => void;
            "notify::start-offset": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            collapsed: boolean;
            common_ancestor_container: DOMNode;
            commonAncestorContainer: DOMNode;
            end_container: DOMNode;
            endContainer: DOMNode;
            end_offset: bigint | number;
            endOffset: bigint | number;
            start_container: DOMNode;
            startContainer: DOMNode;
            start_offset: bigint | number;
            startOffset: bigint | number;
            text: string;
        }
    }
    class DOMRange extends DOMObject {
        static $gtype: GObject.GType<DOMRange>;
        get collapsed(): boolean;
        get common_ancestor_container(): DOMNode;
        get commonAncestorContainer(): DOMNode;
        get end_container(): DOMNode;
        get endContainer(): DOMNode;
        get end_offset(): number;
        get endOffset(): number;
        get start_container(): DOMNode;
        get startContainer(): DOMNode;
        get start_offset(): number;
        get startOffset(): number;
        get text(): string;
        $signals: DOMRange.SignalSignatures;
        constructor(properties?: Partial<DOMRange.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMRange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMRange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMRange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone_contents(): DOMDocumentFragment;
        clone_range(): DOMRange;
        collapse(toStart: boolean): void;
        compare_boundary_points(how: number, sourceRange: DOMRange): number;
        compare_node(refNode: DOMNode): number;
        compare_point(refNode: DOMNode, offset: bigint | number): number;
        create_contextual_fragment(html: string): DOMDocumentFragment;
        delete_contents(): void;
        detach(): void;
        expand(unit: string): void;
        extract_contents(): DOMDocumentFragment;
        get_collapsed(): boolean;
        get_common_ancestor_container(): DOMNode;
        get_end_container(): DOMNode;
        get_end_offset(): number;
        get_start_container(): DOMNode;
        get_start_offset(): number;
        get_text(): string;
        insert_node(newNode: DOMNode): void;
        intersects_node(refNode: DOMNode): boolean;
        is_point_in_range(refNode: DOMNode, offset: bigint | number): boolean;
        select_node(refNode: DOMNode): void;
        select_node_contents(refNode: DOMNode): void;
        set_end(refNode: DOMNode, offset: bigint | number): void;
        set_end_after(refNode: DOMNode): void;
        set_end_before(refNode: DOMNode): void;
        set_start(refNode: DOMNode, offset: bigint | number): void;
        set_start_after(refNode: DOMNode): void;
        set_start_before(refNode: DOMNode): void;
        surround_contents(newParent: DOMNode): void;
        to_string(): string;
    }
    namespace DOMStyleSheet {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::disabled": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::media": (pspec: GObject.ParamSpec) => void;
            "notify::owner-node": (pspec: GObject.ParamSpec) => void;
            "notify::parent-style-sheet": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            disabled: boolean;
            href: string;
            media: DOMMediaList;
            owner_node: DOMNode;
            ownerNode: DOMNode;
            parent_style_sheet: DOMStyleSheet;
            parentStyleSheet: DOMStyleSheet;
            title: string;
            type: string;
        }
    }
    class DOMStyleSheet extends DOMObject {
        static $gtype: GObject.GType<DOMStyleSheet>;
        get disabled(): boolean;
        set disabled(val: boolean);
        get href(): string;
        get media(): DOMMediaList;
        get owner_node(): DOMNode;
        get ownerNode(): DOMNode;
        get parent_style_sheet(): DOMStyleSheet;
        get parentStyleSheet(): DOMStyleSheet;
        get title(): string;
        get type(): string;
        $signals: DOMStyleSheet.SignalSignatures;
        constructor(properties?: Partial<DOMStyleSheet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMStyleSheet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMStyleSheet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMStyleSheet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMStyleSheet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMStyleSheet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMStyleSheet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content_type(): string;
        get_disabled(): boolean;
        get_href(): string;
        get_media(): DOMMediaList;
        get_owner_node(): DOMNode;
        get_parent_style_sheet(): DOMStyleSheet;
        get_title(): string;
        set_disabled(value: boolean): void;
    }
    namespace DOMStyleSheetList {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            length: bigint | number;
        }
    }
    class DOMStyleSheetList extends DOMObject {
        static $gtype: GObject.GType<DOMStyleSheetList>;
        get length(): number;
        $signals: DOMStyleSheetList.SignalSignatures;
        constructor(properties?: Partial<DOMStyleSheetList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMStyleSheetList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMStyleSheetList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMStyleSheetList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMStyleSheetList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMStyleSheetList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMStyleSheetList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_length(): number;
        item(index: bigint | number): DOMStyleSheet;
    }
    namespace DOMText {
        interface SignalSignatures extends DOMCharacterData.SignalSignatures {
            "notify::whole-text": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::child-nodes": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::next-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::node-name": (pspec: GObject.ParamSpec) => void;
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
            "notify::node-value": (pspec: GObject.ParamSpec) => void;
            "notify::owner-document": (pspec: GObject.ParamSpec) => void;
            "notify::parent-element": (pspec: GObject.ParamSpec) => void;
            "notify::parent-node": (pspec: GObject.ParamSpec) => void;
            "notify::previous-sibling": (pspec: GObject.ParamSpec) => void;
            "notify::text-content": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMCharacterData.ConstructorProps, DOMEventTarget.ConstructorProps {
            whole_text: string;
            wholeText: string;
        }
    }
    class DOMText extends DOMCharacterData implements DOMEventTarget {
        static $gtype: GObject.GType<DOMText>;
        get whole_text(): string;
        get wholeText(): string;
        $signals: DOMText.SignalSignatures;
        constructor(properties?: Partial<DOMText.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_whole_text(): string;
        replace_whole_text(content: string): DOMText;
        split_text(offset: bigint | number): DOMText;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set_data(key: string, data: null): void;
        set_data(...args: never[]): any;
    }
    namespace DOMTreeWalker {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::current-node": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::what-to-show": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            current_node: DOMNode;
            currentNode: DOMNode;
            filter: DOMNodeFilter;
            root: DOMNode;
            what_to_show: bigint | number;
            whatToShow: bigint | number;
        }
    }
    class DOMTreeWalker extends DOMObject {
        static $gtype: GObject.GType<DOMTreeWalker>;
        get current_node(): DOMNode;
        get currentNode(): DOMNode;
        get filter(): DOMNodeFilter;
        get root(): DOMNode;
        get what_to_show(): number;
        get whatToShow(): number;
        $signals: DOMTreeWalker.SignalSignatures;
        constructor(properties?: Partial<DOMTreeWalker.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMTreeWalker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMTreeWalker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMTreeWalker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMTreeWalker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMTreeWalker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMTreeWalker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        first_child(): DOMNode;
        get_current_node(): DOMNode;
        get_expand_entity_references(): boolean;
        get_filter(): DOMNodeFilter;
        get_root(): DOMNode;
        get_what_to_show(): number;
        last_child(): DOMNode;
        next_node(): DOMNode;
        next_sibling(): DOMNode;
        parent_node(): DOMNode;
        previous_node(): DOMNode;
        previous_sibling(): DOMNode;
        set_current_node(value: DOMNode): void;
    }
    namespace DOMUIEvent {
        interface SignalSignatures extends DOMEvent.SignalSignatures {
            "notify::char-code": (pspec: GObject.ParamSpec) => void;
            "notify::detail": (pspec: GObject.ParamSpec) => void;
            "notify::key-code": (pspec: GObject.ParamSpec) => void;
            "notify::layer-x": (pspec: GObject.ParamSpec) => void;
            "notify::layer-y": (pspec: GObject.ParamSpec) => void;
            "notify::page-x": (pspec: GObject.ParamSpec) => void;
            "notify::page-y": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::bubbles": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-bubble": (pspec: GObject.ParamSpec) => void;
            "notify::cancelable": (pspec: GObject.ParamSpec) => void;
            "notify::current-target": (pspec: GObject.ParamSpec) => void;
            "notify::event-phase": (pspec: GObject.ParamSpec) => void;
            "notify::return-value": (pspec: GObject.ParamSpec) => void;
            "notify::src-element": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::time-stamp": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMEvent.ConstructorProps {
            char_code: bigint | number;
            charCode: bigint | number;
            detail: bigint | number;
            key_code: bigint | number;
            keyCode: bigint | number;
            layer_x: bigint | number;
            layerX: bigint | number;
            layer_y: bigint | number;
            layerY: bigint | number;
            page_x: bigint | number;
            pageX: bigint | number;
            page_y: bigint | number;
            pageY: bigint | number;
            view: DOMDOMWindow;
        }
    }
    class DOMUIEvent extends DOMEvent {
        static $gtype: GObject.GType<DOMUIEvent>;
        get char_code(): number;
        get charCode(): number;
        get detail(): number;
        get key_code(): number;
        get keyCode(): number;
        get layer_x(): number;
        get layerX(): number;
        get layer_y(): number;
        get layerY(): number;
        get page_x(): number;
        get pageX(): number;
        get page_y(): number;
        get pageY(): number;
        get view(): DOMDOMWindow;
        $signals: DOMUIEvent.SignalSignatures;
        constructor(properties?: Partial<DOMUIEvent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMUIEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMUIEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMUIEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMUIEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMUIEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMUIEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_char_code(): number;
        get_detail(): number;
        get_key_code(): number;
        get_layer_x(): number;
        get_layer_y(): number;
        get_page_x(): number;
        get_page_y(): number;
        get_view(): DOMDOMWindow;
        init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: bigint | number): void;
    }
    namespace DOMWheelEvent {
        interface SignalSignatures extends DOMMouseEvent.SignalSignatures {
            "notify::wheel-delta": (pspec: GObject.ParamSpec) => void;
            "notify::wheel-delta-x": (pspec: GObject.ParamSpec) => void;
            "notify::wheel-delta-y": (pspec: GObject.ParamSpec) => void;
            "notify::alt-key": (pspec: GObject.ParamSpec) => void;
            "notify::button": (pspec: GObject.ParamSpec) => void;
            "notify::client-x": (pspec: GObject.ParamSpec) => void;
            "notify::client-y": (pspec: GObject.ParamSpec) => void;
            "notify::ctrl-key": (pspec: GObject.ParamSpec) => void;
            "notify::from-element": (pspec: GObject.ParamSpec) => void;
            "notify::meta-key": (pspec: GObject.ParamSpec) => void;
            "notify::offset-x": (pspec: GObject.ParamSpec) => void;
            "notify::offset-y": (pspec: GObject.ParamSpec) => void;
            "notify::related-target": (pspec: GObject.ParamSpec) => void;
            "notify::screen-x": (pspec: GObject.ParamSpec) => void;
            "notify::screen-y": (pspec: GObject.ParamSpec) => void;
            "notify::shift-key": (pspec: GObject.ParamSpec) => void;
            "notify::to-element": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::char-code": (pspec: GObject.ParamSpec) => void;
            "notify::detail": (pspec: GObject.ParamSpec) => void;
            "notify::key-code": (pspec: GObject.ParamSpec) => void;
            "notify::layer-x": (pspec: GObject.ParamSpec) => void;
            "notify::layer-y": (pspec: GObject.ParamSpec) => void;
            "notify::page-x": (pspec: GObject.ParamSpec) => void;
            "notify::page-y": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::bubbles": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-bubble": (pspec: GObject.ParamSpec) => void;
            "notify::cancelable": (pspec: GObject.ParamSpec) => void;
            "notify::current-target": (pspec: GObject.ParamSpec) => void;
            "notify::event-phase": (pspec: GObject.ParamSpec) => void;
            "notify::return-value": (pspec: GObject.ParamSpec) => void;
            "notify::src-element": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::time-stamp": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMMouseEvent.ConstructorProps {
            wheel_delta: bigint | number;
            wheelDelta: bigint | number;
            wheel_delta_x: bigint | number;
            wheelDeltaX: bigint | number;
            wheel_delta_y: bigint | number;
            wheelDeltaY: bigint | number;
        }
    }
    class DOMWheelEvent extends DOMMouseEvent {
        static $gtype: GObject.GType<DOMWheelEvent>;
        get wheel_delta(): number;
        get wheelDelta(): number;
        get wheel_delta_x(): number;
        get wheelDeltaX(): number;
        get wheel_delta_y(): number;
        get wheelDeltaY(): number;
        $signals: DOMWheelEvent.SignalSignatures;
        constructor(properties?: Partial<DOMWheelEvent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMWheelEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMWheelEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMWheelEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMWheelEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMWheelEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMWheelEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_wheel_delta(): number;
        get_wheel_delta_x(): number;
        get_wheel_delta_y(): number;
        init_wheel_event(wheelDeltaX: bigint | number, wheelDeltaY: bigint | number, view: DOMDOMWindow, screenX: bigint | number, screenY: bigint | number, clientX: bigint | number, clientY: bigint | number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): void;
    }
    namespace DOMXPathExpression {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {}
    }
    class DOMXPathExpression extends DOMObject {
        static $gtype: GObject.GType<DOMXPathExpression>;
        $signals: DOMXPathExpression.SignalSignatures;
        constructor(properties?: Partial<DOMXPathExpression.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMXPathExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMXPathExpression.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMXPathExpression.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMXPathExpression.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMXPathExpression.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMXPathExpression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;
    }
    namespace DOMXPathResult {
        interface SignalSignatures extends DOMObject.SignalSignatures {
            "notify::boolean-value": (pspec: GObject.ParamSpec) => void;
            "notify::invalid-iterator-state": (pspec: GObject.ParamSpec) => void;
            "notify::number-value": (pspec: GObject.ParamSpec) => void;
            "notify::result-type": (pspec: GObject.ParamSpec) => void;
            "notify::single-node-value": (pspec: GObject.ParamSpec) => void;
            "notify::snapshot-length": (pspec: GObject.ParamSpec) => void;
            "notify::string-value": (pspec: GObject.ParamSpec) => void;
            "notify::core-object": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DOMObject.ConstructorProps {
            boolean_value: boolean;
            booleanValue: boolean;
            invalid_iterator_state: boolean;
            invalidIteratorState: boolean;
            number_value: number;
            numberValue: number;
            result_type: number;
            resultType: number;
            single_node_value: DOMNode;
            singleNodeValue: DOMNode;
            snapshot_length: bigint | number;
            snapshotLength: bigint | number;
            string_value: string;
            stringValue: string;
        }
    }
    class DOMXPathResult extends DOMObject {
        static $gtype: GObject.GType<DOMXPathResult>;
        get boolean_value(): boolean;
        get booleanValue(): boolean;
        get invalid_iterator_state(): boolean;
        get invalidIteratorState(): boolean;
        get number_value(): number;
        get numberValue(): number;
        get result_type(): number;
        get resultType(): number;
        get single_node_value(): DOMNode;
        get singleNodeValue(): DOMNode;
        get snapshot_length(): number;
        get snapshotLength(): number;
        get string_value(): string;
        get stringValue(): string;
        $signals: DOMXPathResult.SignalSignatures;
        constructor(properties?: Partial<DOMXPathResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DOMXPathResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMXPathResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DOMXPathResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DOMXPathResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DOMXPathResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DOMXPathResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_boolean_value(): boolean;
        get_invalid_iterator_state(): boolean;
        get_number_value(): number;
        get_result_type(): number;
        get_single_node_value(): DOMNode;
        get_snapshot_length(): number;
        get_string_value(): string;
        iterate_next(): DOMNode;
        snapshot_item(index: bigint | number): DOMNode;
    }
    namespace Frame {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Frame extends GObject.Object {
        static $gtype: GObject.GType<Frame>;
        $signals: Frame.SignalSignatures;
        constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Frame.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Frame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_id(): number;
        get_js_context(): JavaScriptCore.Context;
        get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
        get_js_value_for_dom_object(dom_object: DOMObject): JavaScriptCore.Value;
        get_js_value_for_dom_object_in_script_world(dom_object: DOMObject, world: ScriptWorld): JavaScriptCore.Value;
        get_uri(): string;
        is_main_frame(): boolean;
    }
    namespace HitTestResult {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::image-uri": (pspec: GObject.ParamSpec) => void;
            "notify::link-label": (pspec: GObject.ParamSpec) => void;
            "notify::link-title": (pspec: GObject.ParamSpec) => void;
            "notify::link-uri": (pspec: GObject.ParamSpec) => void;
            "notify::media-uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: number;
            image_uri: string;
            imageUri: string;
            link_label: string;
            linkLabel: string;
            link_title: string;
            linkTitle: string;
            link_uri: string;
            linkUri: string;
            media_uri: string;
            mediaUri: string;
        }
    }
    class HitTestResult extends GObject.Object {
        static $gtype: GObject.GType<HitTestResult>;
        get context(): number;
        get image_uri(): string;
        get imageUri(): string;
        get link_label(): string;
        get linkLabel(): string;
        get link_title(): string;
        get linkTitle(): string;
        get link_uri(): string;
        get linkUri(): string;
        get media_uri(): string;
        get mediaUri(): string;
        $signals: HitTestResult.SignalSignatures;
        constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof HitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HitTestResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        context_is_editable(): boolean;
        context_is_image(): boolean;
        context_is_link(): boolean;
        context_is_media(): boolean;
        context_is_scrollbar(): boolean;
        context_is_selection(): boolean;
        get_context(): number;
        get_image_uri(): string;
        get_link_label(): string;
        get_link_title(): string;
        get_link_uri(): string;
        get_media_uri(): string;
    }
    namespace ScriptWorld {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "window-object-cleared": (arg0: WebPage, arg1: Frame) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ScriptWorld extends GObject.Object {
        static $gtype: GObject.GType<ScriptWorld>;
        $signals: ScriptWorld.SignalSignatures;
        constructor(properties?: Partial<ScriptWorld.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ScriptWorld;
        static new_with_name(name: string): ScriptWorld;
        connect<K extends keyof ScriptWorld.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScriptWorld.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScriptWorld.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScriptWorld.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScriptWorld.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScriptWorld.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): ScriptWorld;
        get_name(): string;
    }
    namespace URIRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }
    class URIRequest extends GObject.Object {
        static $gtype: GObject.GType<URIRequest>;
        get uri(): string;
        set uri(val: string);
        $signals: URIRequest.SignalSignatures;
        constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](uri: string): URIRequest;
        connect<K extends keyof URIRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URIRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_http_headers(): Soup.MessageHeaders;
        get_http_method(): string;
        get_uri(): string;
        set_uri(uri: string): void;
    }
    namespace URIResponse {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::content-length": (pspec: GObject.ParamSpec) => void;
            "notify::http-headers": (pspec: GObject.ParamSpec) => void;
            "notify::mime-type": (pspec: GObject.ParamSpec) => void;
            "notify::status-code": (pspec: GObject.ParamSpec) => void;
            "notify::suggested-filename": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_length: bigint | number;
            contentLength: bigint | number;
            http_headers: Soup.MessageHeaders;
            httpHeaders: Soup.MessageHeaders;
            mime_type: string;
            mimeType: string;
            status_code: number;
            statusCode: number;
            suggested_filename: string;
            suggestedFilename: string;
            uri: string;
        }
    }
    class URIResponse extends GObject.Object {
        static $gtype: GObject.GType<URIResponse>;
        get content_length(): number;
        get contentLength(): number;
        get http_headers(): Soup.MessageHeaders;
        get httpHeaders(): Soup.MessageHeaders;
        get mime_type(): string;
        get mimeType(): string;
        get status_code(): number;
        get statusCode(): number;
        get suggested_filename(): string;
        get suggestedFilename(): string;
        get uri(): string;
        $signals: URIResponse.SignalSignatures;
        constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof URIResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIResponse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<URIResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content_length(): number;
        get_http_headers(): Soup.MessageHeaders;
        get_mime_type(): string;
        get_status_code(): number;
        get_suggested_filename(): string;
        get_uri(): string;
    }
    namespace UserMessage {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::fd-list": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parameters": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            fd_list: Gio.UnixFDList | null;
            fdList: Gio.UnixFDList | null;
            name: string;
            parameters: GLib.Variant | null;
        }
    }
    class UserMessage extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<UserMessage>;
        get fd_list(): Gio.UnixFDList | null;
        get fdList(): Gio.UnixFDList | null;
        get name(): string;
        get parameters(): GLib.Variant | null;
        $signals: UserMessage.SignalSignatures;
        constructor(properties?: Partial<UserMessage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string, parameters: GLib.Variant | null): UserMessage;
        static new_with_fd_list(name: string, parameters: GLib.Variant | null, fd_list: Gio.UnixFDList | null): UserMessage;
        connect<K extends keyof UserMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserMessage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserMessage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        get_fd_list(): Gio.UnixFDList | null;
        get_name(): string;
        get_parameters(): GLib.Variant | null;
        send_reply(reply: UserMessage): void;
    }
    namespace WebEditor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "selection-changed": () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class WebEditor extends GObject.Object {
        static $gtype: GObject.GType<WebEditor>;
        $signals: WebEditor.SignalSignatures;
        constructor(properties?: Partial<WebEditor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_page(): WebPage;
    }
    namespace WebExtension {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "page-created": (arg0: WebPage) => void;
            "user-message-received": (arg0: UserMessage) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class WebExtension extends GObject.Object {
        static $gtype: GObject.GType<WebExtension>;
        $signals: WebExtension.SignalSignatures;
        constructor(properties?: Partial<WebExtension.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebExtension.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebExtension.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebExtension.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebExtension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_page(page_id: bigint | number): WebPage;
        send_message_to_context(message: UserMessage, cancellable: Gio.Cancellable | null): globalThis.Promise<UserMessage>;
        send_message_to_context(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_message_to_context(message: UserMessage, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserMessage> | void;
        send_message_to_context_finish(result: Gio.AsyncResult): UserMessage;
    }
    namespace WebFormManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "form-controls-associated": (arg0: Frame, arg1: JavaScriptCore.Value[]) => void;
            "will-send-submit-event": (arg0: JavaScriptCore.Value, arg1: Frame, arg2: Frame) => void;
            "will-submit-form": (arg0: JavaScriptCore.Value, arg1: Frame, arg2: Frame) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class WebFormManager extends GObject.Object {
        static $gtype: GObject.GType<WebFormManager>;
        $signals: WebFormManager.SignalSignatures;
        constructor(properties?: Partial<WebFormManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebFormManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebFormManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebFormManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebFormManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebFormManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebFormManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static input_element_auto_fill(element: JavaScriptCore.Value, value: string): void;
        static input_element_is_auto_filled(element: JavaScriptCore.Value): boolean;
        static input_element_is_user_edited(element: JavaScriptCore.Value): boolean;
    }
    namespace WebHitTestResult {
        interface SignalSignatures extends HitTestResult.SignalSignatures {
            "notify::node": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::image-uri": (pspec: GObject.ParamSpec) => void;
            "notify::link-label": (pspec: GObject.ParamSpec) => void;
            "notify::link-title": (pspec: GObject.ParamSpec) => void;
            "notify::link-uri": (pspec: GObject.ParamSpec) => void;
            "notify::media-uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends HitTestResult.ConstructorProps {
            node: DOMNode;
        }
    }
    class WebHitTestResult extends HitTestResult {
        static $gtype: GObject.GType<WebHitTestResult>;
        get node(): DOMNode;
        $signals: WebHitTestResult.SignalSignatures;
        constructor(properties?: Partial<WebHitTestResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebHitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebHitTestResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebHitTestResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebHitTestResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebHitTestResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebHitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_js_node(world: ScriptWorld | null): JavaScriptCore.Value | null;
        get_node(): DOMNode;
    }
    namespace WebPage {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "console-message-sent": (arg0: ConsoleMessage) => void;
            "context-menu": (arg0: ContextMenu, arg1: WebHitTestResult) => boolean | void;
            "document-loaded": () => void;
            "form-controls-associated": (arg0: DOMElement[]) => void;
            "form-controls-associated-for-frame": (arg0: DOMElement[], arg1: Frame) => void;
            "send-request": (arg0: URIRequest, arg1: URIResponse) => boolean | void;
            "user-message-received": (arg0: UserMessage) => boolean | void;
            "will-submit-form": (arg0: DOMElement, arg1: FormSubmissionStep, arg2: Frame, arg3: Frame, arg4: string[], arg5: string[]) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }
    class WebPage extends GObject.Object {
        static $gtype: GObject.GType<WebPage>;
        get uri(): string;
        $signals: WebPage.SignalSignatures;
        constructor(properties?: Partial<WebPage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof WebPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebPage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebPage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebPage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebPage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_dom_document(): DOMDocument;
        get_editor(): WebEditor;
        get_form_manager(world: ScriptWorld | null): WebFormManager;
        get_id(): number;
        get_main_frame(): Frame;
        get_uri(): string;
        send_message_to_view(message: UserMessage, cancellable: Gio.Cancellable | null): globalThis.Promise<UserMessage>;
        send_message_to_view(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_message_to_view(message: UserMessage, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<UserMessage> | void;
        send_message_to_view_finish(result: Gio.AsyncResult): UserMessage;
    }
    abstract class ConsoleMessage {
        static $gtype: GObject.GType<ConsoleMessage>;
        copy(): ConsoleMessage;
        free(): void;
        get_level(): ConsoleMessageLevel;
        get_line(): number;
        get_source(): ConsoleMessageSource;
        get_source_id(): string;
        get_text(): string;
    }
    type ContextMenuClass = typeof ContextMenu;
    type ContextMenuItemClass = typeof ContextMenuItem;
    abstract class ContextMenuItemPrivate {
        static $gtype: GObject.GType<ContextMenuItemPrivate>;
    }
    abstract class ContextMenuPrivate {
        static $gtype: GObject.GType<ContextMenuPrivate>;
    }
    type DOMAttrClass = typeof DOMAttr;
    type DOMBlobClass = typeof DOMBlob;
    type DOMCDATASectionClass = typeof DOMCDATASection;
    type DOMCSSRuleClass = typeof DOMCSSRule;
    type DOMCSSRuleListClass = typeof DOMCSSRuleList;
    type DOMCSSStyleDeclarationClass = typeof DOMCSSStyleDeclaration;
    type DOMCSSStyleSheetClass = typeof DOMCSSStyleSheet;
    type DOMCSSValueClass = typeof DOMCSSValue;
    type DOMCharacterDataClass = typeof DOMCharacterData;
    type DOMClientRectClass = typeof DOMClientRect;
    type DOMClientRectListClass = typeof DOMClientRectList;
    type DOMCommentClass = typeof DOMComment;
    type DOMDOMImplementationClass = typeof DOMDOMImplementation;
    type DOMDOMSelectionClass = typeof DOMDOMSelection;
    type DOMDOMTokenListClass = typeof DOMDOMTokenList;
    type DOMDOMWindowClass = typeof DOMDOMWindow;
    type DOMDocumentClass = typeof DOMDocument;
    type DOMDocumentFragmentClass = typeof DOMDocumentFragment;
    type DOMDocumentTypeClass = typeof DOMDocumentType;
    type DOMElementClass = typeof DOMElement;
    type DOMEntityReferenceClass = typeof DOMEntityReference;
    type DOMEventClass = typeof DOMEvent;
    type DOMEventTargetIface = typeof DOMEventTarget;
    type DOMFileClass = typeof DOMFile;
    type DOMFileListClass = typeof DOMFileList;
    type DOMHTMLAnchorElementClass = typeof DOMHTMLAnchorElement;
    type DOMHTMLAppletElementClass = typeof DOMHTMLAppletElement;
    type DOMHTMLAreaElementClass = typeof DOMHTMLAreaElement;
    type DOMHTMLBRElementClass = typeof DOMHTMLBRElement;
    type DOMHTMLBaseElementClass = typeof DOMHTMLBaseElement;
    type DOMHTMLBaseFontElementClass = typeof DOMHTMLBaseFontElement;
    type DOMHTMLBodyElementClass = typeof DOMHTMLBodyElement;
    type DOMHTMLButtonElementClass = typeof DOMHTMLButtonElement;
    type DOMHTMLCanvasElementClass = typeof DOMHTMLCanvasElement;
    type DOMHTMLCollectionClass = typeof DOMHTMLCollection;
    type DOMHTMLDListElementClass = typeof DOMHTMLDListElement;
    type DOMHTMLDirectoryElementClass = typeof DOMHTMLDirectoryElement;
    type DOMHTMLDivElementClass = typeof DOMHTMLDivElement;
    type DOMHTMLDocumentClass = typeof DOMHTMLDocument;
    type DOMHTMLElementClass = typeof DOMHTMLElement;
    type DOMHTMLEmbedElementClass = typeof DOMHTMLEmbedElement;
    type DOMHTMLFieldSetElementClass = typeof DOMHTMLFieldSetElement;
    type DOMHTMLFontElementClass = typeof DOMHTMLFontElement;
    type DOMHTMLFormElementClass = typeof DOMHTMLFormElement;
    type DOMHTMLFrameElementClass = typeof DOMHTMLFrameElement;
    type DOMHTMLFrameSetElementClass = typeof DOMHTMLFrameSetElement;
    type DOMHTMLHRElementClass = typeof DOMHTMLHRElement;
    type DOMHTMLHeadElementClass = typeof DOMHTMLHeadElement;
    type DOMHTMLHeadingElementClass = typeof DOMHTMLHeadingElement;
    type DOMHTMLHtmlElementClass = typeof DOMHTMLHtmlElement;
    type DOMHTMLIFrameElementClass = typeof DOMHTMLIFrameElement;
    type DOMHTMLImageElementClass = typeof DOMHTMLImageElement;
    type DOMHTMLInputElementClass = typeof DOMHTMLInputElement;
    type DOMHTMLLIElementClass = typeof DOMHTMLLIElement;
    type DOMHTMLLabelElementClass = typeof DOMHTMLLabelElement;
    type DOMHTMLLegendElementClass = typeof DOMHTMLLegendElement;
    type DOMHTMLLinkElementClass = typeof DOMHTMLLinkElement;
    type DOMHTMLMapElementClass = typeof DOMHTMLMapElement;
    type DOMHTMLMarqueeElementClass = typeof DOMHTMLMarqueeElement;
    type DOMHTMLMenuElementClass = typeof DOMHTMLMenuElement;
    type DOMHTMLMetaElementClass = typeof DOMHTMLMetaElement;
    type DOMHTMLModElementClass = typeof DOMHTMLModElement;
    type DOMHTMLOListElementClass = typeof DOMHTMLOListElement;
    type DOMHTMLObjectElementClass = typeof DOMHTMLObjectElement;
    type DOMHTMLOptGroupElementClass = typeof DOMHTMLOptGroupElement;
    type DOMHTMLOptionElementClass = typeof DOMHTMLOptionElement;
    type DOMHTMLOptionsCollectionClass = typeof DOMHTMLOptionsCollection;
    type DOMHTMLParagraphElementClass = typeof DOMHTMLParagraphElement;
    type DOMHTMLParamElementClass = typeof DOMHTMLParamElement;
    type DOMHTMLPreElementClass = typeof DOMHTMLPreElement;
    type DOMHTMLQuoteElementClass = typeof DOMHTMLQuoteElement;
    type DOMHTMLScriptElementClass = typeof DOMHTMLScriptElement;
    type DOMHTMLSelectElementClass = typeof DOMHTMLSelectElement;
    type DOMHTMLStyleElementClass = typeof DOMHTMLStyleElement;
    type DOMHTMLTableCaptionElementClass = typeof DOMHTMLTableCaptionElement;
    type DOMHTMLTableCellElementClass = typeof DOMHTMLTableCellElement;
    type DOMHTMLTableColElementClass = typeof DOMHTMLTableColElement;
    type DOMHTMLTableElementClass = typeof DOMHTMLTableElement;
    type DOMHTMLTableRowElementClass = typeof DOMHTMLTableRowElement;
    type DOMHTMLTableSectionElementClass = typeof DOMHTMLTableSectionElement;
    type DOMHTMLTextAreaElementClass = typeof DOMHTMLTextAreaElement;
    type DOMHTMLTitleElementClass = typeof DOMHTMLTitleElement;
    type DOMHTMLUListElementClass = typeof DOMHTMLUListElement;
    type DOMKeyboardEventClass = typeof DOMKeyboardEvent;
    type DOMMediaListClass = typeof DOMMediaList;
    type DOMMouseEventClass = typeof DOMMouseEvent;
    type DOMNamedNodeMapClass = typeof DOMNamedNodeMap;
    type DOMNodeClass = typeof DOMNode;
    type DOMNodeFilterIface = typeof DOMNodeFilter;
    type DOMNodeIteratorClass = typeof DOMNodeIterator;
    type DOMNodeListClass = typeof DOMNodeList;
    type DOMObjectClass = typeof DOMObject;
    type DOMProcessingInstructionClass = typeof DOMProcessingInstruction;
    type DOMRangeClass = typeof DOMRange;
    type DOMStyleSheetClass = typeof DOMStyleSheet;
    type DOMStyleSheetListClass = typeof DOMStyleSheetList;
    type DOMTextClass = typeof DOMText;
    type DOMTreeWalkerClass = typeof DOMTreeWalker;
    type DOMUIEventClass = typeof DOMUIEvent;
    type DOMWheelEventClass = typeof DOMWheelEvent;
    type DOMXPathExpressionClass = typeof DOMXPathExpression;
    type DOMXPathNSResolverIface = typeof DOMXPathNSResolver;
    type DOMXPathResultClass = typeof DOMXPathResult;
    type FrameClass = typeof Frame;
    abstract class FramePrivate {
        static $gtype: GObject.GType<FramePrivate>;
    }
    type HitTestResultClass = typeof HitTestResult;
    abstract class HitTestResultPrivate {
        static $gtype: GObject.GType<HitTestResultPrivate>;
    }
    type ScriptWorldClass = typeof ScriptWorld;
    abstract class ScriptWorldPrivate {
        static $gtype: GObject.GType<ScriptWorldPrivate>;
    }
    type URIRequestClass = typeof URIRequest;
    abstract class URIRequestPrivate {
        static $gtype: GObject.GType<URIRequestPrivate>;
    }
    type URIResponseClass = typeof URIResponse;
    abstract class URIResponsePrivate {
        static $gtype: GObject.GType<URIResponsePrivate>;
    }
    type UserMessageClass = typeof UserMessage;
    abstract class UserMessagePrivate {
        static $gtype: GObject.GType<UserMessagePrivate>;
    }
    type WebEditorClass = typeof WebEditor;
    abstract class WebEditorPrivate {
        static $gtype: GObject.GType<WebEditorPrivate>;
    }
    type WebExtensionClass = typeof WebExtension;
    abstract class WebExtensionPrivate {
        static $gtype: GObject.GType<WebExtensionPrivate>;
    }
    type WebFormManagerClass = typeof WebFormManager;
    type WebHitTestResultClass = typeof WebHitTestResult;
    abstract class WebHitTestResultPrivate {
        static $gtype: GObject.GType<WebHitTestResultPrivate>;
    }
    type WebPageClass = typeof WebPage;
    abstract class WebPagePrivate {
        static $gtype: GObject.GType<WebPagePrivate>;
    }
    namespace DOMEventTarget {
        interface Interface {
            vfunc_add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
            vfunc_dispatch_event(event: DOMEvent): boolean;
            vfunc_remove_event_listener(event_name: string, handler: null, use_capture: boolean): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DOMEventTargetNamespace {
        $gtype: GObject.GType<DOMEventTarget>;
        prototype: DOMEventTarget;
    }
    interface DOMEventTarget extends GObject.Object, DOMEventTarget.Interface {
        add_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
        dispatch_event(event: DOMEvent): boolean;
        remove_event_listener(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
    }
    export const DOMEventTarget: DOMEventTargetNamespace & {
        new (): DOMEventTarget; 
    };
    namespace DOMNodeFilter {
        interface Interface {
            vfunc_accept_node(node: DOMNode): number;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DOMNodeFilterNamespace {
        $gtype: GObject.GType<DOMNodeFilter>;
        prototype: DOMNodeFilter;
    }
    interface DOMNodeFilter extends GObject.Object, DOMNodeFilter.Interface {
        accept_node(node: DOMNode): number;
    }
    export const DOMNodeFilter: DOMNodeFilterNamespace & {
        new (): DOMNodeFilter; 
    };
    namespace DOMXPathNSResolver {
        interface Interface {
            vfunc_lookup_namespace_uri(prefix: string): string;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DOMXPathNSResolverNamespace {
        $gtype: GObject.GType<DOMXPathNSResolver>;
        prototype: DOMXPathNSResolver;
    }
    interface DOMXPathNSResolver extends GObject.Object, DOMXPathNSResolver.Interface {
        lookup_namespace_uri(prefix: string): string;
    }
    export const DOMXPathNSResolver: DOMXPathNSResolverNamespace & {
        new (): DOMXPathNSResolver; 
    };
    const __name__: string;
    const __version__: string;
}
export default WebKit2WebExtension;
}
declare module 'gi://WebKit2WebExtension' {
    import WebKit2WebExtension41 from 'gi://WebKit2WebExtension?version=4.1';
    export default WebKit2WebExtension41;
}
