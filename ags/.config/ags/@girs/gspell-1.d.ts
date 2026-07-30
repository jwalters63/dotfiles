declare module 'gi://Gspell?version=1' {
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
export namespace Gspell {
    class CheckerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static DICTIONARY: number;
        static NO_LANGUAGE_SET: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    function checker_error_quark(): GLib.Quark;
    function language_get_available(): Language[];
    function language_get_default(): Language | null;
    function language_lookup(language_code: string): Language | null;
    namespace Checker {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "session-cleared": () => void;
            "word-added-to-personal": (arg0: string) => void;
            "word-added-to-session": (arg0: string) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: Language | null;
        }
    }
    class Checker extends GObject.Object {
        static $gtype: GObject.GType<Checker>;
        get language(): Language | null;
        set language(val: Language | null);
        $signals: Checker.SignalSignatures;
        constructor(properties?: Partial<Checker.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](language: Language | null): Checker;
        connect<K extends keyof Checker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Checker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Checker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Checker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_session_cleared(): void;
        vfunc_word_added_to_personal(word: string): void;
        vfunc_word_added_to_session(word: string): void;
        add_word_to_personal(word: string, word_length: bigint | number): void;
        add_word_to_session(word: string, word_length: bigint | number): void;
        check_word(word: string, word_length: bigint | number): boolean;
        clear_session(): void;
        get_language(): Language | null;
        get_suggestions(word: string, word_length: bigint | number): string[];
        set_correction(word: string, word_length: bigint | number, replacement: string, replacement_length: bigint | number): void;
        set_language(language: Language | null): void;
    }
    namespace CheckerDialog {
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::spell-navigator": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            spell_navigator: Navigator;
            spellNavigator: Navigator;
        }
    }
    class CheckerDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CheckerDialog>;
        get spell_navigator(): Navigator;
        get spellNavigator(): Navigator;
        $signals: CheckerDialog.SignalSignatures;
        constructor(properties?: Partial<CheckerDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](parent: Gtk.Window, navigator: Navigator): CheckerDialog;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CheckerDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckerDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CheckerDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckerDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CheckerDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CheckerDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_spell_navigator(): Navigator;
    }
    namespace Entry {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::inline-spell-checking": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            entry: Gtk.Entry;
            inline_spell_checking: boolean;
            inlineSpellChecking: boolean;
        }
    }
    class Entry extends GObject.Object {
        static $gtype: GObject.GType<Entry>;
        get entry(): Gtk.Entry;
        get inline_spell_checking(): boolean;
        set inline_spell_checking(val: boolean);
        get inlineSpellChecking(): boolean;
        set inlineSpellChecking(val: boolean);
        $signals: Entry.SignalSignatures;
        constructor(properties?: Partial<Entry.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Entry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Entry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry;
        basic_setup(): void;
        get_entry(): Gtk.Entry;
        get_inline_spell_checking(): boolean;
        set_inline_spell_checking(enable: boolean): void;
    }
    namespace EntryBuffer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::spell-checker": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.EntryBuffer;
            spell_checker: Checker | null;
            spellChecker: Checker | null;
        }
    }
    class EntryBuffer extends GObject.Object {
        static $gtype: GObject.GType<EntryBuffer>;
        get buffer(): Gtk.EntryBuffer;
        get spell_checker(): Checker | null;
        set spell_checker(val: Checker | null);
        get spellChecker(): Checker | null;
        set spellChecker(val: Checker | null);
        $signals: EntryBuffer.SignalSignatures;
        constructor(properties?: Partial<EntryBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EntryBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer;
        get_buffer(): Gtk.EntryBuffer;
        get_spell_checker(): Checker | null;
        set_spell_checker(spell_checker: Checker | null): void;
    }
    namespace LanguageChooserButton {
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
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-code": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, LanguageChooser.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }
    class LanguageChooserButton extends Gtk.Button implements Atk.ImplementorIface, LanguageChooser, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<LanguageChooserButton>;
        $signals: LanguageChooserButton.SignalSignatures;
        constructor(properties?: Partial<LanguageChooserButton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](current_language: Language | null): LanguageChooserButton;
        static ["new"](...args: never[]): any;
        connect<K extends keyof LanguageChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooserButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LanguageChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooserButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LanguageChooserButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get language(): Language | null;
        set language(val: Language | null);
        get language_code(): string;
        set language_code(val: string);
        get languageCode(): string;
        set languageCode(val: string);
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
        get_language(): Language | null;
        get_language_code(): string;
        set_language(language: Language | null): void;
        set_language_code(language_code: string | null): void;
        vfunc_get_language_full(default_language: boolean): Language;
        vfunc_set_language(language: Language | null): void;
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
        child_notify(child_property: string): void;
        child_notify(...args: never[]): any;
        get_focus_on_click(): boolean;
        set_focus_on_click(focus_on_click: boolean): void;
    }
    namespace LanguageChooserDialog {
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
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
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-code": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, LanguageChooser.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }
    class LanguageChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, LanguageChooser, Gtk.Buildable {
        static $gtype: GObject.GType<LanguageChooserDialog>;
        $signals: LanguageChooserDialog.SignalSignatures;
        constructor(properties?: Partial<LanguageChooserDialog.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](parent: Gtk.Window, current_language: Language | null, flags: Gtk.DialogFlags): LanguageChooserDialog;
        static ["new"](...args: never[]): any;
        connect<K extends keyof LanguageChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LanguageChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LanguageChooserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get language(): Language | null;
        set language(val: Language | null);
        get language_code(): string;
        set language_code(val: string);
        get languageCode(): string;
        set languageCode(val: string);
        get_language(): Language | null;
        get_language_code(): string;
        set_language(language: Language | null): void;
        set_language_code(language_code: string | null): void;
        vfunc_get_language_full(default_language: boolean): Language;
        vfunc_set_language(language: Language | null): void;
    }
    namespace NavigatorTextView {
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps, Navigator.ConstructorProps {
            view: Gtk.TextView;
        }
    }
    class NavigatorTextView extends GObject.InitiallyUnowned implements Navigator {
        static $gtype: GObject.GType<NavigatorTextView>;
        get view(): Gtk.TextView;
        $signals: NavigatorTextView.SignalSignatures;
        constructor(properties?: Partial<NavigatorTextView.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NavigatorTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NavigatorTextView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NavigatorTextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NavigatorTextView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NavigatorTextView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NavigatorTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](view: Gtk.TextView): Navigator;
        get_view(): Gtk.TextView;
        change(word: string, change_to: string): void;
        change_all(word: string, change_to: string): void;
        goto_next(): [boolean, string, Checker | null];
        vfunc_change(word: string, change_to: string): void;
        vfunc_change_all(word: string, change_to: string): void;
        vfunc_goto_next(): [boolean, string, Checker | null];
    }
    namespace TextBuffer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::spell-checker": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            spell_checker: Checker | null;
            spellChecker: Checker | null;
        }
    }
    class TextBuffer extends GObject.Object {
        static $gtype: GObject.GType<TextBuffer>;
        get buffer(): Gtk.TextBuffer;
        get spell_checker(): Checker | null;
        set spell_checker(val: Checker | null);
        get spellChecker(): Checker | null;
        set spellChecker(val: Checker | null);
        $signals: TextBuffer.SignalSignatures;
        constructor(properties?: Partial<TextBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TextBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer;
        get_buffer(): Gtk.TextBuffer;
        get_spell_checker(): Checker | null;
        set_spell_checker(spell_checker: Checker | null): void;
    }
    namespace TextView {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enable-language-menu": (pspec: GObject.ParamSpec) => void;
            "notify::inline-spell-checking": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_language_menu: boolean;
            enableLanguageMenu: boolean;
            inline_spell_checking: boolean;
            inlineSpellChecking: boolean;
            view: Gtk.TextView;
        }
    }
    class TextView extends GObject.Object {
        static $gtype: GObject.GType<TextView>;
        get enable_language_menu(): boolean;
        set enable_language_menu(val: boolean);
        get enableLanguageMenu(): boolean;
        set enableLanguageMenu(val: boolean);
        get inline_spell_checking(): boolean;
        set inline_spell_checking(val: boolean);
        get inlineSpellChecking(): boolean;
        set inlineSpellChecking(val: boolean);
        get view(): Gtk.TextView;
        $signals: TextView.SignalSignatures;
        constructor(properties?: Partial<TextView.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView;
        basic_setup(): void;
        get_enable_language_menu(): boolean;
        get_inline_spell_checking(): boolean;
        get_view(): Gtk.TextView;
        set_enable_language_menu(enable_language_menu: boolean): void;
        set_inline_spell_checking(enable: boolean): void;
    }
    type CheckerClass = typeof Checker;
    type CheckerDialogClass = typeof CheckerDialog;
    type EntryBufferClass = typeof EntryBuffer;
    type EntryClass = typeof Entry;
    abstract class Language {
        static $gtype: GObject.GType<Language>;
        static get_available(): Language[];
        static get_default(): Language | null;
        static lookup(language_code: string): Language | null;
        compare(language_b: Language): number;
        copy(): Language;
        free(): void;
        get_code(): string;
        get_name(): string;
    }
    type LanguageChooserButtonClass = typeof LanguageChooserButton;
    type LanguageChooserDialogClass = typeof LanguageChooserDialog;
    type LanguageChooserInterface = typeof LanguageChooser;
    type NavigatorInterface = typeof Navigator;
    type NavigatorTextViewClass = typeof NavigatorTextView;
    type TextBufferClass = typeof TextBuffer;
    type TextViewClass = typeof TextView;
    namespace LanguageChooser {
        interface Interface {
            vfunc_get_language_full(default_language: boolean): Language;
            vfunc_set_language(language: Language | null): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: Language | null;
            language_code: string;
            languageCode: string;
        }
    }
    export interface LanguageChooserNamespace {
        $gtype: GObject.GType<LanguageChooser>;
        prototype: LanguageChooser;
    }
    interface LanguageChooser extends GObject.Object, LanguageChooser.Interface {
        get language(): Language | null;
        set language(val: Language | null);
        get language_code(): string;
        set language_code(val: string);
        get languageCode(): string;
        set languageCode(val: string);
        get_language(): Language | null;
        get_language_code(): string;
        set_language(language: Language | null): void;
        set_language_code(language_code: string | null): void;
    }
    export const LanguageChooser: LanguageChooserNamespace & {
        new (): LanguageChooser; 
    };
    namespace Navigator {
        interface Interface {
            vfunc_change(word: string, change_to: string): void;
            vfunc_change_all(word: string, change_to: string): void;
            vfunc_goto_next(): [boolean, string, Checker | null];
        }
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }
    export interface NavigatorNamespace {
        $gtype: GObject.GType<Navigator>;
        prototype: Navigator;
    }
    interface Navigator extends GObject.InitiallyUnowned, Navigator.Interface {
        change(word: string, change_to: string): void;
        change_all(word: string, change_to: string): void;
        goto_next(): [boolean, string, Checker | null];
    }
    export const Navigator: NavigatorNamespace & {
        new (): Navigator; 
    };
    const __name__: string;
    const __version__: string;
}
export default Gspell;
}
declare module 'gi://Gspell' {
    import Gspell1 from 'gi://Gspell?version=1';
    export default Gspell1;
}
