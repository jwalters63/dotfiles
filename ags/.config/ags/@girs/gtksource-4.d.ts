declare module 'gi://GtkSource?version=4' {
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace GtkSource {
    export namespace BackgroundPatternType {
        export const $gtype: GObject.GType<BackgroundPatternType>;
    }
    enum BackgroundPatternType {
        NONE,
        GRID,
    }
    export namespace BracketMatchType {
        export const $gtype: GObject.GType<BracketMatchType>;
    }
    enum BracketMatchType {
        NONE,
        OUT_OF_RANGE,
        NOT_FOUND,
        FOUND,
    }
    export namespace ChangeCaseType {
        export const $gtype: GObject.GType<ChangeCaseType>;
    }
    enum ChangeCaseType {
        LOWER,
        UPPER,
        TOGGLE,
        TITLE,
    }
    class CompletionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static ALREADY_BOUND: number;
        static NOT_BOUND: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }
    enum CompressionType {
        NONE,
        GZIP,
    }
    class FileLoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TOO_BIG: number;
        static ENCODING_AUTO_DETECTION_FAILED: number;
        static CONVERSION_FALLBACK: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID_CHARS: number;
        static EXTERNALLY_MODIFIED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace GutterRendererAlignmentMode {
        export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
    }
    enum GutterRendererAlignmentMode {
        CELL,
        FIRST,
        LAST,
    }
    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }
    enum NewlineType {
        LF,
        CR,
        CR_LF,
    }
    export namespace SmartHomeEndType {
        export const $gtype: GObject.GType<SmartHomeEndType>;
    }
    enum SmartHomeEndType {
        DISABLED,
        BEFORE,
        AFTER,
        ALWAYS,
    }
    export namespace ViewGutterPosition {
        export const $gtype: GObject.GType<ViewGutterPosition>;
    }
    enum ViewGutterPosition {
        LINES,
        MARKS,
    }
    function completion_error_quark(): GLib.Quark;
    function encoding_get_all(): Encoding[];
    function encoding_get_current(): Encoding;
    function encoding_get_default_candidates(): Encoding[];
    function encoding_get_from_charset(charset: string): Encoding | null;
    function encoding_get_utf8(): Encoding;
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
    function finalize(): void;
    function init(): void;
    function utils_escape_search_text(text: string): string;
    function utils_unescape_search_text(text: string): string;
    export namespace CompletionActivation {
        export const $gtype: GObject.GType<CompletionActivation>;
    }
    enum CompletionActivation {
        NONE,
        INTERACTIVE,
        USER_REQUESTED,
    }
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }
    enum FileSaverFlags {
        NONE,
        IGNORE_INVALID_CHARS,
        IGNORE_MODIFICATION_TIME,
        CREATE_BACKUP,
    }
    export namespace GutterRendererState {
        export const $gtype: GObject.GType<GutterRendererState>;
    }
    enum GutterRendererState {
        NORMAL,
        CURSOR,
        PRELIT,
        SELECTED,
    }
    export namespace SortFlags {
        export const $gtype: GObject.GType<SortFlags>;
    }
    enum SortFlags {
        NONE,
        CASE_SENSITIVE,
        REVERSE_ORDER,
        REMOVE_DUPLICATES,
    }
    export namespace SpaceLocationFlags {
        export const $gtype: GObject.GType<SpaceLocationFlags>;
    }
    enum SpaceLocationFlags {
        NONE,
        LEADING,
        INSIDE_TEXT,
        TRAILING,
        ALL,
    }
    export namespace SpaceTypeFlags {
        export const $gtype: GObject.GType<SpaceTypeFlags>;
    }
    enum SpaceTypeFlags {
        NONE,
        SPACE,
        TAB,
        NEWLINE,
        NBSP,
        ALL,
    }
    namespace Buffer {
        interface SignalSignatures extends Gtk.TextBuffer.SignalSignatures {
            "bracket-matched": (arg0: Gtk.TextIter | null, arg1: BracketMatchType) => void;
            "highlight-updated": (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            redo: () => void;
            "source-mark-updated": (arg0: Gtk.TextMark) => void;
            undo: () => void;
            "notify::can-redo": (pspec: GObject.ParamSpec) => void;
            "notify::can-undo": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-matching-brackets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::implicit-trailing-newline": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::max-undo-levels": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::undo-manager": (pspec: GObject.ParamSpec) => void;
            "notify::copy-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
            "notify::paste-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::tag-table": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.TextBuffer.ConstructorProps {
            can_redo: boolean;
            canRedo: boolean;
            can_undo: boolean;
            canUndo: boolean;
            highlight_matching_brackets: boolean;
            highlightMatchingBrackets: boolean;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            implicit_trailing_newline: boolean;
            implicitTrailingNewline: boolean;
            language: Language | null;
            max_undo_levels: number;
            maxUndoLevels: number;
            style_scheme: StyleScheme | null;
            styleScheme: StyleScheme | null;
            undo_manager: UndoManager | null;
            undoManager: UndoManager | null;
        }
    }
    class Buffer extends Gtk.TextBuffer {
        static $gtype: GObject.GType<Buffer>;
        get can_redo(): boolean;
        get canRedo(): boolean;
        get can_undo(): boolean;
        get canUndo(): boolean;
        get highlight_matching_brackets(): boolean;
        set highlight_matching_brackets(val: boolean);
        get highlightMatchingBrackets(): boolean;
        set highlightMatchingBrackets(val: boolean);
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);
        get implicit_trailing_newline(): boolean;
        set implicit_trailing_newline(val: boolean);
        get implicitTrailingNewline(): boolean;
        set implicitTrailingNewline(val: boolean);
        get language(): Language | null;
        set language(val: Language | null);
        get max_undo_levels(): number;
        set max_undo_levels(val: number);
        get maxUndoLevels(): number;
        set maxUndoLevels(val: number);
        get style_scheme(): StyleScheme | null;
        set style_scheme(val: StyleScheme | null);
        get styleScheme(): StyleScheme | null;
        set styleScheme(val: StyleScheme | null);
        get undo_manager(): UndoManager | null;
        set undo_manager(val: UndoManager | null);
        get undoManager(): UndoManager | null;
        set undoManager(val: UndoManager | null);
        $signals: Buffer.SignalSignatures;
        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](table: Gtk.TextTagTable | null): Buffer;
        static new_with_language(language: Language): Buffer;
        connect<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Buffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
        vfunc_redo(): void;
        vfunc_undo(): void;
        backward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): [boolean, Gtk.TextIter];
        begin_not_undoable_action(): void;
        change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
        create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
        end_not_undoable_action(): void;
        ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
        forward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): [boolean, Gtk.TextIter];
        get_context_classes_at_iter(iter: Gtk.TextIter): string[];
        get_highlight_matching_brackets(): boolean;
        get_highlight_syntax(): boolean;
        get_implicit_trailing_newline(): boolean;
        get_language(): Language | null;
        get_max_undo_levels(): number;
        get_source_marks_at_iter(iter: Gtk.TextIter, category: string | null): Mark[];
        get_source_marks_at_line(line: number, category: string | null): Mark[];
        get_style_scheme(): StyleScheme | null;
        get_undo_manager(): UndoManager | null;
        iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
        iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
        join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        redo(): void;
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void;
        set_highlight_matching_brackets(highlight: boolean): void;
        set_highlight_syntax(highlight: boolean): void;
        set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
        set_language(language: Language | null): void;
        set_max_undo_levels(max_undo_levels: number): void;
        set_style_scheme(scheme: StyleScheme | null): void;
        set_undo_manager(manager: UndoManager | null): void;
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
        undo(): void;
    }
    namespace Completion {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "activate-proposal": () => void;
            hide: () => void;
            "move-cursor": (arg0: Gtk.ScrollStep, arg1: number) => void;
            "move-page": (arg0: Gtk.ScrollStep, arg1: number) => void;
            "populate-context": (arg0: CompletionContext) => void;
            show: () => void;
            "notify::accelerators": (pspec: GObject.ParamSpec) => void;
            "notify::auto-complete-delay": (pspec: GObject.ParamSpec) => void;
            "notify::proposal-page-size": (pspec: GObject.ParamSpec) => void;
            "notify::provider-page-size": (pspec: GObject.ParamSpec) => void;
            "notify::remember-info-visibility": (pspec: GObject.ParamSpec) => void;
            "notify::select-on-show": (pspec: GObject.ParamSpec) => void;
            "notify::show-headers": (pspec: GObject.ParamSpec) => void;
            "notify::show-icons": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
            accelerators: number;
            auto_complete_delay: number;
            autoCompleteDelay: number;
            proposal_page_size: number;
            proposalPageSize: number;
            provider_page_size: number;
            providerPageSize: number;
            remember_info_visibility: boolean;
            rememberInfoVisibility: boolean;
            select_on_show: boolean;
            selectOnShow: boolean;
            show_headers: boolean;
            showHeaders: boolean;
            show_icons: boolean;
            showIcons: boolean;
            view: View | null;
        }
    }
    class Completion extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<Completion>;
        get accelerators(): number;
        set accelerators(val: number);
        get auto_complete_delay(): number;
        set auto_complete_delay(val: number);
        get autoCompleteDelay(): number;
        set autoCompleteDelay(val: number);
        get proposal_page_size(): number;
        set proposal_page_size(val: number);
        get proposalPageSize(): number;
        set proposalPageSize(val: number);
        get provider_page_size(): number;
        set provider_page_size(val: number);
        get providerPageSize(): number;
        set providerPageSize(val: number);
        get remember_info_visibility(): boolean;
        set remember_info_visibility(val: boolean);
        get rememberInfoVisibility(): boolean;
        set rememberInfoVisibility(val: boolean);
        get select_on_show(): boolean;
        set select_on_show(val: boolean);
        get selectOnShow(): boolean;
        set selectOnShow(val: boolean);
        get show_headers(): boolean;
        set show_headers(val: boolean);
        get showHeaders(): boolean;
        set showHeaders(val: boolean);
        get show_icons(): boolean;
        set show_icons(val: boolean);
        get showIcons(): boolean;
        set showIcons(val: boolean);
        get view(): View | null;
        $signals: Completion.SignalSignatures;
        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Completion.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_activate_proposal(): void;
        vfunc_hide(): void;
        vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void;
        vfunc_move_page(step: Gtk.ScrollStep, num: number): void;
        vfunc_populate_context(context: CompletionContext): void;
        vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean;
        vfunc_show(): void;
        add_provider(provider: CompletionProvider): boolean;
        block_interactive(): void;
        create_context(position: Gtk.TextIter | null): CompletionContext;
        get_info_window(): CompletionInfo;
        get_providers(): CompletionProvider[];
        get_view(): View | null;
        hide(): void;
        remove_provider(provider: CompletionProvider): boolean;
        start(providers: CompletionProvider[] | null, context: CompletionContext): boolean;
        unblock_interactive(): void;
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        get_name(): string;
        parser_finished(builder: Gtk.Builder): void;
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        set_name(name: string): void;
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        vfunc_get_name(): string;
        vfunc_parser_finished(builder: Gtk.Builder): void;
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;
        vfunc_set_name(name: string): void;
    }
    namespace CompletionContext {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            cancelled: () => void;
            "notify::activation": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::iter": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            activation: CompletionActivation;
            completion: Completion;
            iter: Gtk.TextIter;
        }
    }
    class CompletionContext extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<CompletionContext>;
        get activation(): CompletionActivation;
        set activation(val: CompletionActivation);
        get completion(): Completion;
        get iter(): Gtk.TextIter;
        set iter(val: Gtk.TextIter);
        $signals: CompletionContext.SignalSignatures;
        constructor(properties?: Partial<CompletionContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_cancelled(): void;
        add_proposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void;
        get_activation(): CompletionActivation;
        get_iter(): [boolean, Gtk.TextIter];
    }
    namespace CompletionInfo {
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }
    class CompletionInfo extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CompletionInfo>;
        $signals: CompletionInfo.SignalSignatures;
        constructor(properties?: Partial<CompletionInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CompletionInfo;
        connect<K extends keyof CompletionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void;
    }
    namespace CompletionItem {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::info": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProposal.ConstructorProps {
            gicon: Gio.Icon;
            icon: GdkPixbuf.Pixbuf;
            icon_name: string;
            iconName: string;
            info: string;
            label: string;
            markup: string;
            text: string;
        }
    }
    class CompletionItem extends GObject.Object implements CompletionProposal {
        static $gtype: GObject.GType<CompletionItem>;
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        get icon(): GdkPixbuf.Pixbuf;
        set icon(val: GdkPixbuf.Pixbuf);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get info(): string;
        set info(val: string);
        get label(): string;
        set label(val: string);
        get markup(): string;
        set markup(val: string);
        get text(): string;
        set text(val: string);
        $signals: CompletionItem.SignalSignatures;
        constructor(properties?: Partial<CompletionItem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CompletionItem;
        connect<K extends keyof CompletionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_gicon(gicon: Gio.Icon | null): void;
        set_icon(icon: GdkPixbuf.Pixbuf | null): void;
        set_icon_name(icon_name: string | null): void;
        set_info(info: string | null): void;
        set_label(label: string | null): void;
        set_markup(markup: string | null): void;
        set_text(text: string | null): void;
        changed(): void;
        equal(other: CompletionProposal): boolean;
        get_gicon(): Gio.Icon | null;
        get_icon(): GdkPixbuf.Pixbuf | null;
        get_icon_name(): string | null;
        get_info(): string | null;
        get_label(): string;
        get_markup(): string;
        get_text(): string;
        hash(): number;
        vfunc_changed(): void;
        vfunc_equal(other: CompletionProposal): boolean;
        vfunc_get_gicon(): Gio.Icon | null;
        vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
        vfunc_get_icon_name(): string | null;
        vfunc_get_info(): string | null;
        vfunc_get_label(): string;
        vfunc_get_markup(): string;
        vfunc_get_text(): string;
        vfunc_hash(): number;
    }
    namespace CompletionWords {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::activation": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::interactive-delay": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-word-size": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::proposals-batch-size": (pspec: GObject.ParamSpec) => void;
            "notify::scan-batch-size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
            activation: CompletionActivation;
            icon: GdkPixbuf.Pixbuf;
            interactive_delay: number;
            interactiveDelay: number;
            minimum_word_size: number;
            minimumWordSize: number;
            name: string;
            priority: number;
            proposals_batch_size: number;
            proposalsBatchSize: number;
            scan_batch_size: number;
            scanBatchSize: number;
        }
    }
    class CompletionWords extends GObject.Object implements CompletionProvider {
        static $gtype: GObject.GType<CompletionWords>;
        get activation(): CompletionActivation;
        set activation(val: CompletionActivation);
        get icon(): GdkPixbuf.Pixbuf;
        set icon(val: GdkPixbuf.Pixbuf);
        get interactive_delay(): number;
        set interactive_delay(val: number);
        get interactiveDelay(): number;
        set interactiveDelay(val: number);
        get minimum_word_size(): number;
        set minimum_word_size(val: number);
        get minimumWordSize(): number;
        set minimumWordSize(val: number);
        get name(): string;
        set name(val: string);
        get priority(): number;
        set priority(val: number);
        get proposals_batch_size(): number;
        set proposals_batch_size(val: number);
        get proposalsBatchSize(): number;
        set proposalsBatchSize(val: number);
        get scan_batch_size(): number;
        set scan_batch_size(val: number);
        get scanBatchSize(): number;
        set scanBatchSize(val: number);
        $signals: CompletionWords.SignalSignatures;
        constructor(properties?: Partial<CompletionWords.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, icon: GdkPixbuf.Pixbuf | null): CompletionWords;
        connect<K extends keyof CompletionWords.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionWords.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompletionWords.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionWords.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompletionWords.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionWords.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        register(buffer: Gtk.TextBuffer): void;
        unregister(buffer: Gtk.TextBuffer): void;
        activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        get_activation(): CompletionActivation;
        get_gicon(): Gio.Icon | null;
        get_icon(): GdkPixbuf.Pixbuf | null;
        get_icon_name(): string | null;
        get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        get_interactive_delay(): number;
        get_name(): string;
        get_priority(): number;
        get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
        match(context: CompletionContext): boolean;
        populate(context: CompletionContext): void;
        update_info(proposal: CompletionProposal, info: CompletionInfo): void;
        vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        vfunc_get_activation(): CompletionActivation;
        vfunc_get_gicon(): Gio.Icon | null;
        vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
        vfunc_get_icon_name(): string | null;
        vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        vfunc_get_interactive_delay(): number;
        vfunc_get_name(): string;
        vfunc_get_priority(): number;
        vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
        vfunc_match(context: CompletionContext): boolean;
        vfunc_populate(context: CompletionContext): void;
        vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
    }
    namespace File {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::compression-type": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::newline-type": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;
        get compression_type(): CompressionType;
        get compressionType(): CompressionType;
        get encoding(): Encoding;
        get location(): Gio.File;
        set location(val: Gio.File);
        get newline_type(): NewlineType;
        get newlineType(): NewlineType;
        get read_only(): boolean;
        get readOnly(): boolean;
        $signals: File.SignalSignatures;
        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): File;
        connect<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof File.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        check_file_on_disk(): void;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        is_deleted(): boolean;
        is_externally_modified(): boolean;
        is_local(): boolean;
        is_readonly(): boolean;
        set_location(location: Gio.File | null): void;
    }
    namespace FileLoader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::input-stream": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            input_stream: Gio.InputStream | null;
            inputStream: Gio.InputStream | null;
            location: Gio.File | null;
        }
    }
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;
        get buffer(): Buffer;
        get file(): File;
        get input_stream(): Gio.InputStream | null;
        get inputStream(): Gio.InputStream | null;
        get location(): Gio.File | null;
        $signals: FileLoader.SignalSignatures;
        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Buffer, file: File): FileLoader;
        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;
        connect<K extends keyof FileLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLoader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_input_stream(): Gio.InputStream | null;
        get_location(): Gio.File | null;
        get_newline_type(): NewlineType;
        load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>;
        load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        load_finish(result: Gio.AsyncResult): boolean;
        set_candidate_encodings(candidate_encodings: Encoding[]): void;
    }
    namespace FileSaver {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::compression-type": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::newline-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
        }
    }
    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;
        get buffer(): Buffer;
        get compression_type(): CompressionType;
        set compression_type(val: CompressionType);
        get compressionType(): CompressionType;
        set compressionType(val: CompressionType);
        get encoding(): Encoding;
        set encoding(val: Encoding);
        get file(): File;
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        get location(): Gio.File;
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);
        get newlineType(): NewlineType;
        set newlineType(val: NewlineType);
        $signals: FileSaver.SignalSignatures;
        object: GObject.Object;
        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Buffer, file: File): FileSaver;
        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;
        connect<K extends keyof FileSaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSaver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>;
        save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        save_finish(result: Gio.AsyncResult): boolean;
        set_compression_type(compression_type: CompressionType): void;
        set_encoding(encoding: Encoding | null): void;
        set_flags(flags: FileSaverFlags): void;
        set_newline_type(newline_type: NewlineType): void;
    }
    namespace Gutter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            view: View;
            window_type: Gtk.TextWindowType;
            windowType: Gtk.TextWindowType;
        }
    }
    class Gutter extends GObject.Object {
        static $gtype: GObject.GType<Gutter>;
        get view(): View;
        get window_type(): Gtk.TextWindowType;
        get windowType(): Gtk.TextWindowType;
        $signals: Gutter.SignalSignatures;
        constructor(properties?: Partial<Gutter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Gutter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Gutter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
        get_view(): View;
        get_window_type(): Gtk.TextWindowType;
        insert(renderer: GutterRenderer, position: number): boolean;
        queue_draw(): void;
        remove(renderer: GutterRenderer): void;
        reorder(renderer: GutterRenderer, position: number): void;
    }
    namespace GutterRenderer {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            activate: (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => void;
            "query-activatable": (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: Gdk.Event) => boolean | void;
            "query-data": (arg0: Gtk.TextIter, arg1: Gtk.TextIter, arg2: GutterRendererState) => void;
            "query-tooltip": (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: number, arg3: number, arg4: Gtk.Tooltip) => boolean | void;
            "queue-draw": () => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            alignment_mode: GutterRendererAlignmentMode;
            alignmentMode: GutterRendererAlignmentMode;
            background_rgba: Gdk.RGBA;
            backgroundRgba: Gdk.RGBA;
            background_set: boolean;
            backgroundSet: boolean;
            size: number;
            view: Gtk.TextView;
            visible: boolean;
            window_type: Gtk.TextWindowType;
            windowType: Gtk.TextWindowType;
            xalign: number;
            xpad: number;
            yalign: number;
            ypad: number;
        }
    }
    abstract class GutterRenderer extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<GutterRenderer>;
        get alignment_mode(): GutterRendererAlignmentMode;
        set alignment_mode(val: GutterRendererAlignmentMode);
        get alignmentMode(): GutterRendererAlignmentMode;
        set alignmentMode(val: GutterRendererAlignmentMode);
        get background_rgba(): Gdk.RGBA;
        set background_rgba(val: Gdk.RGBA);
        get backgroundRgba(): Gdk.RGBA;
        set backgroundRgba(val: Gdk.RGBA);
        get background_set(): boolean;
        set background_set(val: boolean);
        get backgroundSet(): boolean;
        set backgroundSet(val: boolean);
        get size(): number;
        set size(val: number);
        get view(): Gtk.TextView;
        get visible(): boolean;
        set visible(val: boolean);
        get window_type(): Gtk.TextWindowType;
        get windowType(): Gtk.TextWindowType;
        get xalign(): number;
        set xalign(val: number);
        get xpad(): number;
        set xpad(val: number);
        get yalign(): number;
        set yalign(val: number);
        get ypad(): number;
        set ypad(val: number);
        $signals: GutterRenderer.SignalSignatures;
        constructor(properties?: Partial<GutterRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GutterRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        vfunc_begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void;
        vfunc_change_buffer(old_buffer: Gtk.TextBuffer | null): void;
        vfunc_change_view(old_view: Gtk.TextView | null): void;
        vfunc_draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        vfunc_end(): void;
        vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        vfunc_query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
        vfunc_queue_draw(): void;
        activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
        begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void;
        draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        end(): void;
        get_alignment(): [number, number];
        get_alignment_mode(): GutterRendererAlignmentMode;
        get_background(): [boolean, Gdk.RGBA | null];
        get_padding(): [number, number];
        get_size(): number;
        get_view(): Gtk.TextView;
        get_visible(): boolean;
        get_window_type(): Gtk.TextWindowType;
        query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
        query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
        query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
        queue_draw(): void;
        set_alignment(xalign: number, yalign: number): void;
        set_alignment_mode(mode: GutterRendererAlignmentMode): void;
        set_background(color: Gdk.RGBA | null): void;
        set_padding(xpad: number, ypad: number): void;
        set_size(size: number): void;
        set_visible(visible: boolean): void;
    }
    namespace GutterRendererPixbuf {
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GutterRenderer.ConstructorProps {
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }
    class GutterRendererPixbuf extends GutterRenderer {
        static $gtype: GObject.GType<GutterRendererPixbuf>;
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);
        $signals: GutterRendererPixbuf.SignalSignatures;
        constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GutterRendererPixbuf;
        connect<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRendererPixbuf.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        set_gicon(icon: Gio.Icon | null): void;
        set_icon_name(icon_name: string | null): void;
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    }
    namespace GutterRendererText {
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GutterRenderer.ConstructorProps {
            markup: string;
            text: string;
        }
    }
    class GutterRendererText extends GutterRenderer {
        static $gtype: GObject.GType<GutterRendererText>;
        get markup(): string;
        set markup(val: string);
        get text(): string;
        set text(val: string);
        $signals: GutterRendererText.SignalSignatures;
        constructor(properties?: Partial<GutterRendererText.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GutterRendererText;
        connect<K extends keyof GutterRendererText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRendererText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRendererText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRendererText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        measure(text: string): [number, number];
        measure_markup(markup: string): [number, number];
        set_markup(markup: string, length: number): void;
        set_text(text: string, length: number): void;
    }
    namespace Language {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::section": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hidden: boolean;
            id: string;
            name: string;
            section: string;
        }
    }
    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;
        get hidden(): boolean;
        get id(): string;
        get name(): string;
        get section(): string;
        $signals: Language.SignalSignatures;
        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Language.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_globs(): string[] | null;
        get_hidden(): boolean;
        get_id(): string;
        get_metadata(name: string): string | null;
        get_mime_types(): string[] | null;
        get_name(): string;
        get_section(): string;
        get_style_fallback(style_id: string): string | null;
        get_style_ids(): string[] | null;
        get_style_name(style_id: string): string | null;
    }
    namespace LanguageManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::language-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language_ids: string[] | null;
            languageIds: string[] | null;
            search_path: string[];
            searchPath: string[];
        }
    }
    class LanguageManager extends GObject.Object {
        static $gtype: GObject.GType<LanguageManager>;
        get language_ids(): string[] | null;
        get languageIds(): string[] | null;
        get search_path(): string[];
        set search_path(val: string[]);
        get searchPath(): string[];
        set searchPath(val: string[]);
        $signals: LanguageManager.SignalSignatures;
        constructor(properties?: Partial<LanguageManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): LanguageManager;
        connect<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LanguageManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): LanguageManager;
        get_language(id: string): Language | null;
        get_language_ids(): string[] | null;
        get_search_path(): string[];
        guess_language(filename: string | null, content_type: string | null): Language | null;
        set_search_path(dirs: string[] | null): void;
    }
    namespace Map {
        interface SignalSignatures extends View.SignalSignatures {
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::background-pattern": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::smart-backspace": (pspec: GObject.ParamSpec) => void;
            "notify::smart-home-end": (pspec: GObject.ParamSpec) => void;
            "notify::space-drawer": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends View.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            view: View | null;
        }
    }
    class Map extends View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<Map>;
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        get view(): View | null;
        set view(val: View | null);
        $signals: Map.SignalSignatures;
        constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Map;
        connect<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Map.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Map.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_view(): View | null;
        set_view(view: View): void;
    }
    namespace Mark {
        interface SignalSignatures extends Gtk.TextMark.SignalSignatures {
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::left-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.TextMark.ConstructorProps {
            category: string;
        }
    }
    class Mark extends Gtk.TextMark {
        static $gtype: GObject.GType<Mark>;
        get category(): string;
        $signals: Mark.SignalSignatures;
        constructor(properties?: Partial<Mark.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null, category: string): Mark;
        static ["new"](...args: never[]): any;
        connect<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Mark.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_category(): string;
        next(category: string | null): Mark | null;
        prev(category: string): Mark | null;
    }
    namespace MarkAttributes {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "query-tooltip-markup": (arg0: Mark) => string;
            "query-tooltip-text": (arg0: Mark) => string;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: Gdk.RGBA;
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }
    class MarkAttributes extends GObject.Object {
        static $gtype: GObject.GType<MarkAttributes>;
        get background(): Gdk.RGBA;
        set background(val: Gdk.RGBA);
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);
        $signals: MarkAttributes.SignalSignatures;
        constructor(properties?: Partial<MarkAttributes.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MarkAttributes;
        connect<K extends keyof MarkAttributes.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MarkAttributes.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MarkAttributes.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MarkAttributes.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_background(): [boolean, Gdk.RGBA];
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_tooltip_markup(mark: Mark): string;
        get_tooltip_text(mark: Mark): string;
        render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
        set_background(background: Gdk.RGBA): void;
        set_gicon(gicon: Gio.Icon): void;
        set_icon_name(icon_name: string): void;
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    }
    namespace PrintCompositor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::body-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::footer-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::header-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::line-numbers-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::print-footer": (pspec: GObject.ParamSpec) => void;
            "notify::print-header": (pspec: GObject.ParamSpec) => void;
            "notify::print-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            body_font_name: string;
            bodyFontName: string;
            buffer: Buffer;
            footer_font_name: string;
            footerFontName: string;
            header_font_name: string;
            headerFontName: string;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            line_numbers_font_name: string;
            lineNumbersFontName: string;
            n_pages: number;
            nPages: number;
            print_footer: boolean;
            printFooter: boolean;
            print_header: boolean;
            printHeader: boolean;
            print_line_numbers: number;
            printLineNumbers: number;
            tab_width: number;
            tabWidth: number;
            wrap_mode: Gtk.WrapMode;
            wrapMode: Gtk.WrapMode;
        }
    }
    class PrintCompositor extends GObject.Object {
        static $gtype: GObject.GType<PrintCompositor>;
        get body_font_name(): string;
        set body_font_name(val: string);
        get bodyFontName(): string;
        set bodyFontName(val: string);
        get buffer(): Buffer;
        get footer_font_name(): string;
        set footer_font_name(val: string);
        get footerFontName(): string;
        set footerFontName(val: string);
        get header_font_name(): string;
        set header_font_name(val: string);
        get headerFontName(): string;
        set headerFontName(val: string);
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);
        get line_numbers_font_name(): string;
        set line_numbers_font_name(val: string);
        get lineNumbersFontName(): string;
        set lineNumbersFontName(val: string);
        get n_pages(): number;
        get nPages(): number;
        get print_footer(): boolean;
        set print_footer(val: boolean);
        get printFooter(): boolean;
        set printFooter(val: boolean);
        get print_header(): boolean;
        set print_header(val: boolean);
        get printHeader(): boolean;
        set printHeader(val: boolean);
        get print_line_numbers(): number;
        set print_line_numbers(val: number);
        get printLineNumbers(): number;
        set printLineNumbers(val: number);
        get tab_width(): number;
        set tab_width(val: number);
        get tabWidth(): number;
        set tabWidth(val: number);
        get wrap_mode(): Gtk.WrapMode;
        set wrap_mode(val: Gtk.WrapMode);
        get wrapMode(): Gtk.WrapMode;
        set wrapMode(val: Gtk.WrapMode);
        $signals: PrintCompositor.SignalSignatures;
        constructor(properties?: Partial<PrintCompositor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Buffer): PrintCompositor;
        static new_from_view(view: View): PrintCompositor;
        connect<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintCompositor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        draw_page(context: Gtk.PrintContext, page_nr: number): void;
        get_body_font_name(): string;
        get_bottom_margin(unit: Gtk.Unit): number;
        get_buffer(): Buffer;
        get_footer_font_name(): string;
        get_header_font_name(): string;
        get_highlight_syntax(): boolean;
        get_left_margin(unit: Gtk.Unit): number;
        get_line_numbers_font_name(): string;
        get_n_pages(): number;
        get_pagination_progress(): number;
        get_print_footer(): boolean;
        get_print_header(): boolean;
        get_print_line_numbers(): number;
        get_right_margin(unit: Gtk.Unit): number;
        get_tab_width(): number;
        get_top_margin(unit: Gtk.Unit): number;
        get_wrap_mode(): Gtk.WrapMode;
        paginate(context: Gtk.PrintContext): boolean;
        set_body_font_name(font_name: string): void;
        set_bottom_margin(margin: number, unit: Gtk.Unit): void;
        set_footer_font_name(font_name: string | null): void;
        set_footer_format(separator: boolean, left: string | null, center: string | null, right: string | null): void;
        set_header_font_name(font_name: string | null): void;
        set_header_format(separator: boolean, left: string | null, center: string | null, right: string | null): void;
        set_highlight_syntax(highlight: boolean): void;
        set_left_margin(margin: number, unit: Gtk.Unit): void;
        set_line_numbers_font_name(font_name: string | null): void;
        set_print_footer(print: boolean): void;
        set_print_header(print: boolean): void;
        set_print_line_numbers(interval: number): void;
        set_right_margin(margin: number, unit: Gtk.Unit): void;
        set_tab_width(width: number): void;
        set_top_margin(margin: number, unit: Gtk.Unit): void;
        set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
    }
    namespace Region {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer | null;
        }
    }
    class Region extends GObject.Object {
        static $gtype: GObject.GType<Region>;
        get buffer(): Gtk.TextBuffer | null;
        $signals: Region.SignalSignatures;
        constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Gtk.TextBuffer): Region;
        connect<K extends keyof Region.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Region.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Region.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Region.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_region(region_to_add: Region | null): void;
        add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        get_buffer(): Gtk.TextBuffer | null;
        get_start_region_iter(): RegionIter;
        intersect_region(region2: Region | null): Region | null;
        intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
        is_empty(): boolean;
        subtract_region(region_to_subtract: Region | null): void;
        subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
        to_string(): string | null;
    }
    namespace SearchContext {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::highlight": (pspec: GObject.ParamSpec) => void;
            "notify::match-style": (pspec: GObject.ParamSpec) => void;
            "notify::occurrences-count": (pspec: GObject.ParamSpec) => void;
            "notify::regex-error": (pspec: GObject.ParamSpec) => void;
            "notify::settings": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            highlight: boolean;
            match_style: Style;
            matchStyle: Style;
            occurrences_count: number;
            occurrencesCount: number;
            regex_error: null;
            regexError: null;
            settings: SearchSettings;
        }
    }
    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;
        get buffer(): Buffer;
        get highlight(): boolean;
        set highlight(val: boolean);
        get match_style(): Style;
        set match_style(val: Style);
        get matchStyle(): Style;
        set matchStyle(val: Style);
        get occurrences_count(): number;
        get occurrencesCount(): number;
        get regex_error(): null;
        get regexError(): null;
        get settings(): SearchSettings;
        $signals: SearchContext.SignalSignatures;
        constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buffer: Buffer, settings: SearchSettings | null): SearchContext;
        connect<K extends keyof SearchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
        backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
        forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
        forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
        get_buffer(): Buffer;
        get_highlight(): boolean;
        get_match_style(): Style;
        get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
        get_occurrences_count(): number;
        get_regex_error(): GLib.Error | null;
        get_settings(): SearchSettings;
        replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
        replace_all(replace: string, replace_length: number): number;
        set_highlight(highlight: boolean): void;
        set_match_style(match_style: Style | null): void;
    }
    namespace SearchSettings {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::at-word-boundaries": (pspec: GObject.ParamSpec) => void;
            "notify::case-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::regex-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::search-text": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-around": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            at_word_boundaries: boolean;
            atWordBoundaries: boolean;
            case_sensitive: boolean;
            caseSensitive: boolean;
            regex_enabled: boolean;
            regexEnabled: boolean;
            search_text: string | null;
            searchText: string | null;
            wrap_around: boolean;
            wrapAround: boolean;
        }
    }
    class SearchSettings extends GObject.Object {
        static $gtype: GObject.GType<SearchSettings>;
        get at_word_boundaries(): boolean;
        set at_word_boundaries(val: boolean);
        get atWordBoundaries(): boolean;
        set atWordBoundaries(val: boolean);
        get case_sensitive(): boolean;
        set case_sensitive(val: boolean);
        get caseSensitive(): boolean;
        set caseSensitive(val: boolean);
        get regex_enabled(): boolean;
        set regex_enabled(val: boolean);
        get regexEnabled(): boolean;
        set regexEnabled(val: boolean);
        get search_text(): string | null;
        set search_text(val: string | null);
        get searchText(): string | null;
        set searchText(val: string | null);
        get wrap_around(): boolean;
        set wrap_around(val: boolean);
        get wrapAround(): boolean;
        set wrapAround(val: boolean);
        $signals: SearchSettings.SignalSignatures;
        constructor(properties?: Partial<SearchSettings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SearchSettings;
        connect<K extends keyof SearchSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchSettings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_at_word_boundaries(): boolean;
        get_case_sensitive(): boolean;
        get_regex_enabled(): boolean;
        get_search_text(): string | null;
        get_wrap_around(): boolean;
        set_at_word_boundaries(at_word_boundaries: boolean): void;
        set_case_sensitive(case_sensitive: boolean): void;
        set_regex_enabled(regex_enabled: boolean): void;
        set_search_text(search_text: string | null): void;
        set_wrap_around(wrap_around: boolean): void;
    }
    namespace SpaceDrawer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enable-matrix": (pspec: GObject.ParamSpec) => void;
            "notify::matrix": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_matrix: boolean;
            enableMatrix: boolean;
            matrix: GLib.Variant;
        }
    }
    class SpaceDrawer extends GObject.Object {
        static $gtype: GObject.GType<SpaceDrawer>;
        get enable_matrix(): boolean;
        set enable_matrix(val: boolean);
        get enableMatrix(): boolean;
        set enableMatrix(val: boolean);
        get matrix(): GLib.Variant;
        set matrix(val: GLib.Variant);
        $signals: SpaceDrawer.SignalSignatures;
        constructor(properties?: Partial<SpaceDrawer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SpaceDrawer;
        connect<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpaceDrawer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
        get_enable_matrix(): boolean;
        get_matrix(): GLib.Variant;
        get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
        set_enable_matrix(enable_matrix: boolean): void;
        set_matrix(matrix: GLib.Variant | null): void;
        set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
    }
    namespace Style {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::bold": (pspec: GObject.ParamSpec) => void;
            "notify::bold-set": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::italic": (pspec: GObject.ParamSpec) => void;
            "notify::italic-set": (pspec: GObject.ParamSpec) => void;
            "notify::line-background": (pspec: GObject.ParamSpec) => void;
            "notify::line-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::pango-underline": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-color": (pspec: GObject.ParamSpec) => void;
            "notify::underline-color-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: string;
            background_set: boolean;
            backgroundSet: boolean;
            bold: boolean;
            bold_set: boolean;
            boldSet: boolean;
            foreground: string;
            foreground_set: boolean;
            foregroundSet: boolean;
            italic: boolean;
            italic_set: boolean;
            italicSet: boolean;
            line_background: string;
            lineBackground: string;
            line_background_set: boolean;
            lineBackgroundSet: boolean;
            pango_underline: Pango.Underline;
            pangoUnderline: Pango.Underline;
            scale: string;
            scale_set: boolean;
            scaleSet: boolean;
            strikethrough: boolean;
            strikethrough_set: boolean;
            strikethroughSet: boolean;
            underline_color: string;
            underlineColor: string;
            underline_color_set: boolean;
            underlineColorSet: boolean;
            underline_set: boolean;
            underlineSet: boolean;
        }
    }
    class Style extends GObject.Object {
        static $gtype: GObject.GType<Style>;
        get background(): string;
        get background_set(): boolean;
        get backgroundSet(): boolean;
        get bold(): boolean;
        get bold_set(): boolean;
        get boldSet(): boolean;
        get foreground(): string;
        get foreground_set(): boolean;
        get foregroundSet(): boolean;
        get italic(): boolean;
        get italic_set(): boolean;
        get italicSet(): boolean;
        get line_background(): string;
        get lineBackground(): string;
        get line_background_set(): boolean;
        get lineBackgroundSet(): boolean;
        get pango_underline(): Pango.Underline;
        get pangoUnderline(): Pango.Underline;
        get scale(): string;
        get scale_set(): boolean;
        get scaleSet(): boolean;
        get strikethrough(): boolean;
        get strikethrough_set(): boolean;
        get strikethroughSet(): boolean;
        get underline_color(): string;
        get underlineColor(): string;
        get underline_color_set(): boolean;
        get underlineColorSet(): boolean;
        get underline_set(): boolean;
        get underlineSet(): boolean;
        $signals: Style.SignalSignatures;
        constructor(properties?: Partial<Style.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Style.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Style.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        apply(tag: Gtk.TextTag): void;
        copy(): Style;
    }
    namespace StyleScheme {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string | null;
            filename: string | null;
            id: string;
            name: string;
        }
    }
    class StyleScheme extends GObject.Object {
        static $gtype: GObject.GType<StyleScheme>;
        get description(): string | null;
        get filename(): string | null;
        get id(): string;
        get name(): string;
        $signals: StyleScheme.SignalSignatures;
        base: GObject.Object;
        constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleScheme.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleScheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_authors(): string[] | null;
        get_description(): string | null;
        get_filename(): string | null;
        get_id(): string;
        get_name(): string;
        get_style(style_id: string): Style | null;
    }
    namespace StyleSchemeChooserButton {
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps, StyleSchemeChooser.ConstructorProps {}
    }
    class StyleSchemeChooserButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, StyleSchemeChooser {
        static $gtype: GObject.GType<StyleSchemeChooserButton>;
        $signals: StyleSchemeChooserButton.SignalSignatures;
        constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StyleSchemeChooserButton;
        connect<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get action_name(): string | null;
        set action_name(val: string | null);
        get actionName(): string | null;
        set actionName(val: string | null);
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);
        get_action_name(): string | null;
        get_action_target_value(): GLib.Variant;
        set_action_name(action_name: string | null): void;
        set_action_target_value(target_value: GLib.Variant | null): void;
        set_detailed_action_name(detailed_action_name: string): void;
        vfunc_get_action_name(): string | null;
        vfunc_get_action_target_value(): GLib.Variant;
        vfunc_set_action_name(action_name: string | null): void;
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;
        do_set_related_action(action: Gtk.Action): void;
        get_related_action(): Gtk.Action;
        get_use_action_appearance(): boolean;
        set_related_action(action: Gtk.Action): void;
        set_use_action_appearance(use_appearance: boolean): void;
        sync_action_properties(action: Gtk.Action | null): void;
        vfunc_sync_action_properties(action: Gtk.Action | null): void;
        vfunc_update(action: Gtk.Action, property_name: string): void;
        get_style_scheme(): StyleScheme;
        set_style_scheme(scheme: StyleScheme): void;
        vfunc_get_style_scheme(): StyleScheme;
        vfunc_set_style_scheme(scheme: StyleScheme): void;
        child_notify(child_property: string): void;
        child_notify(...args: never[]): any;
        get_focus_on_click(): boolean;
        set_focus_on_click(focus_on_click: boolean): void;
    }
    namespace StyleSchemeChooserWidget {
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, StyleSchemeChooser.ConstructorProps {}
    }
    class StyleSchemeChooserWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, StyleSchemeChooser {
        static $gtype: GObject.GType<StyleSchemeChooserWidget>;
        $signals: StyleSchemeChooserWidget.SignalSignatures;
        constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StyleSchemeChooserWidget;
        connect<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeChooserWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);
        get_style_scheme(): StyleScheme;
        set_style_scheme(scheme: StyleScheme): void;
        vfunc_get_style_scheme(): StyleScheme;
        vfunc_set_style_scheme(scheme: StyleScheme): void;
    }
    namespace StyleSchemeManager {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scheme-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scheme_ids: string[] | null;
            schemeIds: string[] | null;
            search_path: string[];
            searchPath: string[];
        }
    }
    class StyleSchemeManager extends GObject.Object {
        static $gtype: GObject.GType<StyleSchemeManager>;
        get scheme_ids(): string[] | null;
        get schemeIds(): string[] | null;
        get search_path(): string[];
        set search_path(val: string[]);
        get searchPath(): string[];
        set searchPath(val: string[]);
        $signals: StyleSchemeManager.SignalSignatures;
        constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): StyleSchemeManager;
        connect<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(): StyleSchemeManager;
        append_search_path(path: string): void;
        force_rescan(): void;
        get_scheme(scheme_id: string): StyleScheme | null;
        get_scheme_ids(): string[] | null;
        get_search_path(): string[];
        prepend_search_path(path: string): void;
        set_search_path(path: string[] | null): void;
    }
    namespace Tag {
        interface SignalSignatures extends Gtk.TextTag.SignalSignatures {
            "notify::draw-spaces": (pspec: GObject.ParamSpec) => void;
            "notify::draw-spaces-set": (pspec: GObject.ParamSpec) => void;
            "notify::accumulative-margin": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-full-height": (pspec: GObject.ParamSpec) => void;
            "notify::background-full-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::fallback": (pspec: GObject.ParamSpec) => void;
            "notify::fallback-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::font-features": (pspec: GObject.ParamSpec) => void;
            "notify::font-features-set": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::indent-set": (pspec: GObject.ParamSpec) => void;
            "notify::invisible": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-set": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::justification-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin-set": (pspec: GObject.ParamSpec) => void;
            "notify::letter-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::letter-spacing-set": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap-set": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-set": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-rgba-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::tabs-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::underline-rgba-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode-set": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.TextTag.ConstructorProps {
            draw_spaces: boolean;
            drawSpaces: boolean;
            draw_spaces_set: boolean;
            drawSpacesSet: boolean;
        }
    }
    class Tag extends Gtk.TextTag {
        static $gtype: GObject.GType<Tag>;
        get draw_spaces(): boolean;
        set draw_spaces(val: boolean);
        get drawSpaces(): boolean;
        set drawSpaces(val: boolean);
        get draw_spaces_set(): boolean;
        set draw_spaces_set(val: boolean);
        get drawSpacesSet(): boolean;
        set drawSpacesSet(val: boolean);
        $signals: Tag.SignalSignatures;
        constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): Tag;
        connect<K extends keyof Tag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace View {
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            "change-case": (arg0: ChangeCaseType) => void;
            "change-number": (arg0: number) => void;
            "join-lines": () => void;
            "line-mark-activated": (arg0: Gtk.TextIter, arg1: Gdk.Event) => void;
            "move-lines": (arg0: boolean) => void;
            "move-to-matching-bracket": (arg0: boolean) => void;
            "move-words": (arg0: number) => void;
            redo: () => void;
            "show-completion": () => void;
            "smart-home-end": (arg0: Gtk.TextIter, arg1: number) => void;
            undo: () => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::background-pattern": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::smart-backspace": (pspec: GObject.ParamSpec) => void;
            "notify::smart-home-end": (pspec: GObject.ParamSpec) => void;
            "notify::space-drawer": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.TextView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            auto_indent: boolean;
            autoIndent: boolean;
            background_pattern: BackgroundPatternType;
            backgroundPattern: BackgroundPatternType;
            completion: Completion;
            highlight_current_line: boolean;
            highlightCurrentLine: boolean;
            indent_on_tab: boolean;
            indentOnTab: boolean;
            indent_width: number;
            indentWidth: number;
            insert_spaces_instead_of_tabs: boolean;
            insertSpacesInsteadOfTabs: boolean;
            right_margin_position: number;
            rightMarginPosition: number;
            show_line_marks: boolean;
            showLineMarks: boolean;
            show_line_numbers: boolean;
            showLineNumbers: boolean;
            show_right_margin: boolean;
            showRightMargin: boolean;
            smart_backspace: boolean;
            smartBackspace: boolean;
            smart_home_end: SmartHomeEndType;
            smartHomeEnd: SmartHomeEndType;
            space_drawer: SpaceDrawer;
            spaceDrawer: SpaceDrawer;
            tab_width: number;
            tabWidth: number;
        }
    }
    class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;
        get auto_indent(): boolean;
        set auto_indent(val: boolean);
        get autoIndent(): boolean;
        set autoIndent(val: boolean);
        get background_pattern(): BackgroundPatternType;
        set background_pattern(val: BackgroundPatternType);
        get backgroundPattern(): BackgroundPatternType;
        set backgroundPattern(val: BackgroundPatternType);
        get completion(): Completion;
        get highlight_current_line(): boolean;
        set highlight_current_line(val: boolean);
        get highlightCurrentLine(): boolean;
        set highlightCurrentLine(val: boolean);
        get indent_on_tab(): boolean;
        set indent_on_tab(val: boolean);
        get indentOnTab(): boolean;
        set indentOnTab(val: boolean);
        get indent_width(): number;
        set indent_width(val: number);
        get indentWidth(): number;
        set indentWidth(val: number);
        get insert_spaces_instead_of_tabs(): boolean;
        set insert_spaces_instead_of_tabs(val: boolean);
        get insertSpacesInsteadOfTabs(): boolean;
        set insertSpacesInsteadOfTabs(val: boolean);
        get right_margin_position(): number;
        set right_margin_position(val: number);
        get rightMarginPosition(): number;
        set rightMarginPosition(val: number);
        get show_line_marks(): boolean;
        set show_line_marks(val: boolean);
        get showLineMarks(): boolean;
        set showLineMarks(val: boolean);
        get show_line_numbers(): boolean;
        set show_line_numbers(val: boolean);
        get showLineNumbers(): boolean;
        set showLineNumbers(val: boolean);
        get show_right_margin(): boolean;
        set show_right_margin(val: boolean);
        get showRightMargin(): boolean;
        set showRightMargin(val: boolean);
        get smart_backspace(): boolean;
        set smart_backspace(val: boolean);
        get smartBackspace(): boolean;
        set smartBackspace(val: boolean);
        get smart_home_end(): SmartHomeEndType;
        set smart_home_end(val: SmartHomeEndType);
        get smartHomeEnd(): SmartHomeEndType;
        set smartHomeEnd(val: SmartHomeEndType);
        get space_drawer(): SpaceDrawer;
        get spaceDrawer(): SpaceDrawer;
        get tab_width(): number;
        set tab_width(val: number);
        get tabWidth(): number;
        set tabWidth(val: number);
        $signals: View.SignalSignatures;
        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): View;
        static new_with_buffer(buffer: Buffer): View;
        connect<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof View.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
        vfunc_move_lines(down: boolean): void;
        vfunc_move_words(step: number): void;
        vfunc_redo(): void;
        vfunc_show_completion(): void;
        vfunc_undo(): void;
        get_auto_indent(): boolean;
        get_background_pattern(): BackgroundPatternType;
        get_completion(): Completion;
        get_gutter(window_type: Gtk.TextWindowType): Gutter;
        get_highlight_current_line(): boolean;
        get_indent_on_tab(): boolean;
        get_indent_width(): number;
        get_insert_spaces_instead_of_tabs(): boolean;
        get_mark_attributes(category: string, priority: number): MarkAttributes;
        get_right_margin_position(): number;
        get_show_line_marks(): boolean;
        get_show_line_numbers(): boolean;
        get_show_right_margin(): boolean;
        get_smart_backspace(): boolean;
        get_smart_home_end(): SmartHomeEndType;
        get_space_drawer(): SpaceDrawer;
        get_tab_width(): number;
        get_visual_column(iter: Gtk.TextIter): number;
        indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        set_auto_indent(enable: boolean): void;
        set_background_pattern(background_pattern: BackgroundPatternType): void;
        set_highlight_current_line(highlight: boolean): void;
        set_indent_on_tab(enable: boolean): void;
        set_indent_width(width: number): void;
        set_insert_spaces_instead_of_tabs(enable: boolean): void;
        set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
        set_right_margin_position(pos: number): void;
        set_show_line_marks(show: boolean): void;
        set_show_line_numbers(show: boolean): void;
        set_show_right_margin(show: boolean): void;
        set_smart_backspace(smart_backspace: boolean): void;
        set_smart_home_end(smart_home_end: SmartHomeEndType): void;
        set_tab_width(width: number): void;
        unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);
        get_border(): [boolean, Gtk.Border];
        get_hadjustment(): Gtk.Adjustment;
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        get_vadjustment(): Gtk.Adjustment;
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;
        vfunc_get_border(): [boolean, Gtk.Border];
    }
    type BufferClass = typeof Buffer;
    abstract class BufferPrivate {
        static $gtype: GObject.GType<BufferPrivate>;
    }
    type CompletionClass = typeof Completion;
    type CompletionContextClass = typeof CompletionContext;
    abstract class CompletionContextPrivate {
        static $gtype: GObject.GType<CompletionContextPrivate>;
    }
    type CompletionInfoClass = typeof CompletionInfo;
    abstract class CompletionInfoPrivate {
        static $gtype: GObject.GType<CompletionInfoPrivate>;
    }
    type CompletionItemClass = typeof CompletionItem;
    abstract class CompletionItemPrivate {
        static $gtype: GObject.GType<CompletionItemPrivate>;
    }
    abstract class CompletionPrivate {
        static $gtype: GObject.GType<CompletionPrivate>;
    }
    type CompletionProposalIface = typeof CompletionProposal;
    type CompletionProviderIface = typeof CompletionProvider;
    type CompletionWordsClass = typeof CompletionWords;
    abstract class CompletionWordsPrivate {
        static $gtype: GObject.GType<CompletionWordsPrivate>;
    }
    abstract class Encoding {
        static $gtype: GObject.GType<Encoding>;
        static get_all(): Encoding[];
        static get_current(): Encoding;
        static get_default_candidates(): Encoding[];
        static get_from_charset(charset: string): Encoding | null;
        static get_utf8(): Encoding;
        copy(): Encoding;
        free(): void;
        get_charset(): string;
        get_name(): string;
        to_string(): string;
    }
    type FileClass = typeof File;
    type FileLoaderClass = typeof FileLoader;
    abstract class FileLoaderPrivate {
        static $gtype: GObject.GType<FileLoaderPrivate>;
    }
    abstract class FilePrivate {
        static $gtype: GObject.GType<FilePrivate>;
    }
    type FileSaverClass = typeof FileSaver;
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;
    }
    type GutterClass = typeof Gutter;
    abstract class GutterPrivate {
        static $gtype: GObject.GType<GutterPrivate>;
    }
    type GutterRendererClass = typeof GutterRenderer;
    type GutterRendererPixbufClass = typeof GutterRendererPixbuf;
    abstract class GutterRendererPixbufPrivate {
        static $gtype: GObject.GType<GutterRendererPixbufPrivate>;
    }
    abstract class GutterRendererPrivate {
        static $gtype: GObject.GType<GutterRendererPrivate>;
    }
    type GutterRendererTextClass = typeof GutterRendererText;
    abstract class GutterRendererTextPrivate {
        static $gtype: GObject.GType<GutterRendererTextPrivate>;
    }
    type LanguageClass = typeof Language;
    type LanguageManagerClass = typeof LanguageManager;
    abstract class LanguageManagerPrivate {
        static $gtype: GObject.GType<LanguageManagerPrivate>;
    }
    abstract class LanguagePrivate {
        static $gtype: GObject.GType<LanguagePrivate>;
    }
    type MapClass = typeof Map;
    type MarkAttributesClass = typeof MarkAttributes;
    abstract class MarkAttributesPrivate {
        static $gtype: GObject.GType<MarkAttributesPrivate>;
    }
    type MarkClass = typeof Mark;
    abstract class MarkPrivate {
        static $gtype: GObject.GType<MarkPrivate>;
    }
    type PrintCompositorClass = typeof PrintCompositor;
    abstract class PrintCompositorPrivate {
        static $gtype: GObject.GType<PrintCompositorPrivate>;
    }
    type RegionClass = typeof Region;
    class RegionIter {
        static $gtype: GObject.GType<RegionIter>;
        constructor(properties?: Partial<{}>);
        get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
        is_end(): boolean;
        next(): boolean;
    }
    type SearchContextClass = typeof SearchContext;
    abstract class SearchContextPrivate {
        static $gtype: GObject.GType<SearchContextPrivate>;
    }
    type SearchSettingsClass = typeof SearchSettings;
    abstract class SearchSettingsPrivate {
        static $gtype: GObject.GType<SearchSettingsPrivate>;
    }
    type SpaceDrawerClass = typeof SpaceDrawer;
    abstract class SpaceDrawerPrivate {
        static $gtype: GObject.GType<SpaceDrawerPrivate>;
    }
    type StyleClass = typeof Style;
    type StyleSchemeChooserButtonClass = typeof StyleSchemeChooserButton;
    type StyleSchemeChooserInterface = typeof StyleSchemeChooser;
    type StyleSchemeChooserWidgetClass = typeof StyleSchemeChooserWidget;
    type StyleSchemeClass = typeof StyleScheme;
    type StyleSchemeManagerClass = typeof StyleSchemeManager;
    abstract class StyleSchemeManagerPrivate {
        static $gtype: GObject.GType<StyleSchemeManagerPrivate>;
    }
    abstract class StyleSchemePrivate {
        static $gtype: GObject.GType<StyleSchemePrivate>;
    }
    type TagClass = typeof Tag;
    type UndoManagerIface = typeof UndoManager;
    type ViewClass = typeof View;
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;
    }
    namespace CompletionProposal {
        interface Interface {
            vfunc_changed(): void;
            vfunc_equal(other: CompletionProposal): boolean;
            vfunc_get_gicon(): Gio.Icon | null;
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            vfunc_get_icon_name(): string | null;
            vfunc_get_info(): string | null;
            vfunc_get_label(): string;
            vfunc_get_markup(): string;
            vfunc_get_text(): string;
            vfunc_hash(): number;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface CompletionProposalNamespace {
        $gtype: GObject.GType<CompletionProposal>;
        prototype: CompletionProposal;
    }
    interface CompletionProposal extends GObject.Object, CompletionProposal.Interface {
        changed(): void;
        equal(other: CompletionProposal): boolean;
        get_gicon(): Gio.Icon | null;
        get_icon(): GdkPixbuf.Pixbuf | null;
        get_icon_name(): string | null;
        get_info(): string | null;
        get_label(): string;
        get_markup(): string;
        get_text(): string;
        hash(): number;
    }
    export const CompletionProposal: CompletionProposalNamespace & {
        new (): CompletionProposal; 
    };
    namespace CompletionProvider {
        interface Interface {
            vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            vfunc_get_activation(): CompletionActivation;
            vfunc_get_gicon(): Gio.Icon | null;
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            vfunc_get_icon_name(): string | null;
            vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            vfunc_get_interactive_delay(): number;
            vfunc_get_name(): string;
            vfunc_get_priority(): number;
            vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            vfunc_match(context: CompletionContext): boolean;
            vfunc_populate(context: CompletionContext): void;
            vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface CompletionProviderNamespace {
        $gtype: GObject.GType<CompletionProvider>;
        prototype: CompletionProvider;
    }
    interface CompletionProvider extends GObject.Object, CompletionProvider.Interface {
        activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
        get_activation(): CompletionActivation;
        get_gicon(): Gio.Icon | null;
        get_icon(): GdkPixbuf.Pixbuf | null;
        get_icon_name(): string | null;
        get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
        get_interactive_delay(): number;
        get_name(): string;
        get_priority(): number;
        get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
        match(context: CompletionContext): boolean;
        populate(context: CompletionContext): void;
        update_info(proposal: CompletionProposal, info: CompletionInfo): void;
    }
    export const CompletionProvider: CompletionProviderNamespace & {
        new (): CompletionProvider; 
    };
    namespace StyleSchemeChooser {
        interface Interface {
            vfunc_get_style_scheme(): StyleScheme;
            vfunc_set_style_scheme(scheme: StyleScheme): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            style_scheme: StyleScheme;
            styleScheme: StyleScheme;
        }
    }
    export interface StyleSchemeChooserNamespace {
        $gtype: GObject.GType<StyleSchemeChooser>;
        prototype: StyleSchemeChooser;
    }
    interface StyleSchemeChooser extends GObject.Object, StyleSchemeChooser.Interface {
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);
        get_style_scheme(): StyleScheme;
        set_style_scheme(scheme: StyleScheme): void;
    }
    export const StyleSchemeChooser: StyleSchemeChooserNamespace & {
        new (): StyleSchemeChooser; 
    };
    namespace UndoManager {
        interface Interface {
            vfunc_begin_not_undoable_action(): void;
            vfunc_can_redo(): boolean;
            vfunc_can_redo_changed(): void;
            vfunc_can_undo(): boolean;
            vfunc_can_undo_changed(): void;
            vfunc_end_not_undoable_action(): void;
            vfunc_redo(): void;
            vfunc_undo(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface UndoManagerNamespace {
        $gtype: GObject.GType<UndoManager>;
        prototype: UndoManager;
    }
    interface UndoManager extends GObject.Object, UndoManager.Interface {
        begin_not_undoable_action(): void;
        can_redo(): boolean;
        can_redo_changed(): void;
        can_undo(): boolean;
        can_undo_changed(): void;
        end_not_undoable_action(): void;
        redo(): void;
        undo(): void;
    }
    export const UndoManager: UndoManagerNamespace & {
        new (): UndoManager; 
    };
    const __name__: string;
    const __version__: string;
}
export default GtkSource;
}
declare module 'gi://GtkSource' {
    import GtkSource4 from 'gi://GtkSource?version=4';
    export default GtkSource4;
}
