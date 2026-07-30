declare module 'gi://AstalApps?version=0.1' {
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
export namespace AstalApps {
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const MICRO_VERSION: number;
    const VERSION: string;
    namespace Application {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::app": (pspec: GObject.ParamSpec) => void;
            "notify::frequency": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::wm-class": (pspec: GObject.ParamSpec) => void;
            "notify::executable": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::keywords": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app: never;
            frequency: number;
            name: string;
            entry: string;
            description: string;
            wm_class: string;
            wmClass: string;
            executable: string;
            icon_name: string;
            iconName: string;
            keywords: string[];
            categories: string[];
        }
    }
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;
        get app(): never;
        set app(val: never);
        get frequency(): number;
        set frequency(val: number);
        get name(): string;
        get entry(): string;
        get description(): string;
        get wm_class(): string;
        get wmClass(): string;
        get executable(): string;
        get icon_name(): string;
        get iconName(): string;
        get keywords(): string[];
        get categories(): string[];
        $signals: Application.SignalSignatures;
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key(key: string): string;
        launch(): boolean;
        fuzzy_match(term: string): Score;
        exact_match(term: string): Score;
        get_app(): never;
        set_app(value: never): void;
        get_frequency(): number;
        set_frequency(value: number): void;
        get_name(): string;
        get_entry(): string;
        get_description(): string;
        get_wm_class(): string;
        get_executable(): string;
        get_icon_name(): string;
        get_keywords(): string[];
        get_categories(): string[];
    }
    namespace Apps {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::show-hidden": (pspec: GObject.ParamSpec) => void;
            "notify::list": (pspec: GObject.ParamSpec) => void;
            "notify::min-score": (pspec: GObject.ParamSpec) => void;
            "notify::name-multiplier": (pspec: GObject.ParamSpec) => void;
            "notify::entry-multiplier": (pspec: GObject.ParamSpec) => void;
            "notify::executable-multiplier": (pspec: GObject.ParamSpec) => void;
            "notify::description-multiplier": (pspec: GObject.ParamSpec) => void;
            "notify::keywords-multiplier": (pspec: GObject.ParamSpec) => void;
            "notify::categories-multiplier": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            show_hidden: boolean;
            showHidden: boolean;
            list: Application[];
            min_score: number;
            minScore: number;
            name_multiplier: number;
            nameMultiplier: number;
            entry_multiplier: number;
            entryMultiplier: number;
            executable_multiplier: number;
            executableMultiplier: number;
            description_multiplier: number;
            descriptionMultiplier: number;
            keywords_multiplier: number;
            keywordsMultiplier: number;
            categories_multiplier: number;
            categoriesMultiplier: number;
        }
    }
    class Apps extends GObject.Object {
        static $gtype: GObject.GType<Apps>;
        get show_hidden(): boolean;
        set show_hidden(val: boolean);
        get showHidden(): boolean;
        set showHidden(val: boolean);
        get list(): Application[];
        get min_score(): number;
        set min_score(val: number);
        get minScore(): number;
        set minScore(val: number);
        get name_multiplier(): number;
        set name_multiplier(val: number);
        get nameMultiplier(): number;
        set nameMultiplier(val: number);
        get entry_multiplier(): number;
        set entry_multiplier(val: number);
        get entryMultiplier(): number;
        set entryMultiplier(val: number);
        get executable_multiplier(): number;
        set executable_multiplier(val: number);
        get executableMultiplier(): number;
        set executableMultiplier(val: number);
        get description_multiplier(): number;
        set description_multiplier(val: number);
        get descriptionMultiplier(): number;
        set descriptionMultiplier(val: number);
        get keywords_multiplier(): number;
        set keywords_multiplier(val: number);
        get keywordsMultiplier(): number;
        set keywordsMultiplier(val: number);
        get categories_multiplier(): number;
        set categories_multiplier(val: number);
        get categoriesMultiplier(): number;
        set categoriesMultiplier(val: number);
        $signals: Apps.SignalSignatures;
        constructor(properties?: Partial<Apps.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Apps;
        connect<K extends keyof Apps.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Apps.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Apps.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Apps.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Apps.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Apps.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        fuzzy_score(search: string, a: Application): number;
        exact_score(search: string, a: Application): number;
        fuzzy_query(search: string | null): Application[];
        exact_query(search: string | null): Application[];
        reload(): void;
        get_show_hidden(): boolean;
        set_show_hidden(value: boolean): void;
        get_list(): Application[];
        get_min_score(): number;
        set_min_score(value: number): void;
        get_name_multiplier(): number;
        set_name_multiplier(value: number): void;
        get_entry_multiplier(): number;
        set_entry_multiplier(value: number): void;
        get_executable_multiplier(): number;
        set_executable_multiplier(value: number): void;
        get_description_multiplier(): number;
        set_description_multiplier(value: number): void;
        get_keywords_multiplier(): number;
        set_keywords_multiplier(value: number): void;
        get_categories_multiplier(): number;
        set_categories_multiplier(value: number): void;
    }
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }
    type AppsClass = typeof Apps;
    abstract class AppsPrivate {
        static $gtype: GObject.GType<AppsPrivate>;
    }
    class Score {
        static $gtype: GObject.GType<Score>;
        name: number;
        entry: number;
        executable: number;
        description: number;
        keywords: number;
        categories: number;
        constructor(properties?: Partial<{
            name: number;
            entry: number;
            executable: number;
            description: number;
            keywords: number;
            categories: number;
        }>);
    }
    const __name__: string;
    const __version__: string;
}
export default AstalApps;
}
declare module 'gi://AstalApps' {
    import AstalApps01 from 'gi://AstalApps?version=0.1';
    export default AstalApps01;
}
