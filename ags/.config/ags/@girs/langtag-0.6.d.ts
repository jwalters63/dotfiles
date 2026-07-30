declare module 'gi://LangTag?version=0.6' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace LangTag {
    enum ErrorType {
    }
    enum TagFilter {
    }
    const DIR_SEPARATOR: number;
    const DIR_SEPARATOR_S: string;
    const EXT_MODULE_VERSION: number;
    const PATH_MAX: number;
    const SEARCHPATH_SEPARATOR: number;
    const SEARCHPATH_SEPARATOR_S: string;
    function db_finalize(): void;
    function db_get_datadir(): string;
    function db_get_extlang(): ExtlangDb;
    function db_get_grandfathered(): GrandfatheredDb;
    function db_get_lang(): LangDb;
    function db_get_redundant(): RedundantDb;
    function db_get_region(): RegionDb;
    function db_get_relation(): RelationDb;
    function db_get_script(): ScriptDb;
    function db_get_variant(): VariantDb;
    function db_initialize(): void;
    function db_set_datadir(path: string): void;
    function db_set_val(val: DbVal): void;
    function ext_modules_load(): void;
    function ext_modules_unload(): void;
    function iter_init(tmpl: IterTmpl): Iter;
    function list_free(data: Pointer): void;
    function tag_convert_from_locale(error: Error | null): Tag;
    function tag_convert_from_locale_string(locale: string, error: Error | null): Tag;
    interface CompareFunc {
        (v1: Pointer, v2: Pointer): number;
    }
    interface CopyFunc {
        (data: Pointer): Pointer;
    }
    interface DestroyFunc {
        (data: Pointer): void;
    }
    interface ExtModuleDataNewFunc {
        (): ExtModuleData;
    }
    interface ExtModuleGetFuncsFunc {
        (): ExtModuleFuncs;
    }
    interface ExtModuleGetTagFunc {
        (data: ExtModuleData): string;
    }
    interface ExtModuleParseFunc {
        (data: ExtModuleData, subtag: string, error: Error | null): Bool;
    }
    interface ExtModulePrecheckFunc {
        (data: ExtModuleData, tag: Tag, error: Error | null): Bool;
    }
    interface ExtModuleSingletonFunc {
        (): number;
    }
    interface ExtModuleValidateFunc {
        (data: ExtModuleData): Bool;
    }
    interface ExtModuleVersionFunc {
        (): number;
    }
    class DbVal {
        static $gtype: GObject.GType<DbVal>;
    }
    class Error {
        static $gtype: GObject.GType<Error>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Error;
        clear(): void;
        is_set(type: ErrorType): Bool;
        print(type: ErrorType): void;
        ref(): Error;
        unref(): void;
    }
    abstract class ExtModule {
        static $gtype: GObject.GType<ExtModule>;
        ref(): ExtModule;
        unref(): void;
    }
    class ExtModuleData {
        static $gtype: GObject.GType<ExtModuleData>;
        dummy: Pointer[];
        constructor(properties?: Partial<{
            dummy: Pointer[];
        }>);
        static ["new"](size: bigint | number, finalizer: DestroyFunc): ExtModuleData;
        ref(): ExtModuleData;
        unref(): void;
    }
    class ExtModuleFuncs {
        static $gtype: GObject.GType<ExtModuleFuncs>;
        get_singleton: ExtModuleSingletonFunc;
        create_data: ExtModuleDataNewFunc;
        precheck_tag: ExtModulePrecheckFunc;
        parse_tag: ExtModuleParseFunc;
        get_tag: ExtModuleGetTagFunc;
        validate_tag: ExtModuleValidateFunc;
    }
    abstract class Extension {
        static $gtype: GObject.GType<Extension>;
        compare(v2: Extension): Bool;
        dump(): void;
        get_canonicalized_tag(): string;
        get_tag(): string;
        ref(): Extension;
        truncate(): Bool;
        unref(): void;
    }
    abstract class Extlang {
        static $gtype: GObject.GType<Extlang>;
        compare(v2: Extlang): Bool;
        dump(): void;
        get_macro_language(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_prefix(): string;
        get_tag(): string;
        ref(): Extlang;
        unref(): void;
    }
    class ExtlangDb {
        static $gtype: GObject.GType<ExtlangDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ExtlangDb;
        lookup(subtag: string): Extlang;
        ref(): ExtlangDb;
        unref(): void;
    }
    abstract class Grandfathered {
        static $gtype: GObject.GType<Grandfathered>;
        compare(v2: Grandfathered): Bool;
        dump(): void;
        get_better_tag(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_tag(): string;
        ref(): Grandfathered;
        unref(): void;
    }
    class GrandfatheredDb {
        static $gtype: GObject.GType<GrandfatheredDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): GrandfatheredDb;
        lookup(tag: string): Grandfathered;
        ref(): GrandfatheredDb;
        unref(): void;
    }
    abstract class Iter {
        static $gtype: GObject.GType<Iter>;
        static init(tmpl: IterTmpl): Iter;
        finish(): void;
        next(key: Pointer | null, val: Pointer | null): Bool;
        ref(): Iter;
        unref(): void;
    }
    abstract class IterTmpl {
        static $gtype: GObject.GType<IterTmpl>;
    }
    abstract class Lang {
        static $gtype: GObject.GType<Lang>;
        compare(v2: Lang): Bool;
        dump(): void;
        get_better_tag(): string;
        get_macro_language(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_scope(): string;
        get_suppress_script(): string;
        get_tag(): string;
        ref(): Lang;
        unref(): void;
    }
    class LangDb {
        static $gtype: GObject.GType<LangDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): LangDb;
        lookup(subtag: string): Lang;
        ref(): LangDb;
        unref(): void;
    }
    class List {
        static $gtype: GObject.GType<List>;
        constructor(properties?: Partial<{}>);
        static ["new"](): List;
        static free(data: Pointer): void;
        append(data: Pointer, func: DestroyFunc): List;
        ["delete"](data: Pointer): List;
        delete_link(link_: List): List;
        find(data: Pointer): List;
        find_custom(data: Pointer, func: CompareFunc): List;
        first(): List;
        last(): List;
        length(): number;
        next(): List;
        pop(data: Pointer): List;
        prepend(data: Pointer, func: DestroyFunc): List;
        previous(): List;
        ref(): List;
        remove(data: Pointer): List;
        sort(func: CompareFunc): List;
        unref(): void;
        value(): Pointer;
    }
    abstract class Redundant {
        static $gtype: GObject.GType<Redundant>;
        compare(v2: Redundant): Bool;
        dump(): void;
        get_better_tag(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_tag(): string;
        ref(): Redundant;
        unref(): void;
    }
    class RedundantDb {
        static $gtype: GObject.GType<RedundantDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): RedundantDb;
        lookup(tag: string): Redundant;
        ref(): RedundantDb;
        unref(): void;
    }
    abstract class Region {
        static $gtype: GObject.GType<Region>;
        compare(v2: Region): Bool;
        dump(): void;
        get_better_tag(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_tag(): string;
        ref(): Region;
        unref(): void;
    }
    class RegionDb {
        static $gtype: GObject.GType<RegionDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): RegionDb;
        lookup(language_or_code: string): Region;
        ref(): RegionDb;
        unref(): void;
    }
    class RelationDb {
        static $gtype: GObject.GType<RelationDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): RelationDb;
        lookup_lang_from_script(script: Script): List;
        lookup_script_from_lang(lang: Lang): List;
        ref(): RelationDb;
        unref(): void;
    }
    abstract class Script {
        static $gtype: GObject.GType<Script>;
        compare(v2: Script): Bool;
        convert_to_modifier(): string;
        dump(): void;
        get_name(): string;
        get_tag(): string;
        ref(): Script;
        unref(): void;
    }
    class ScriptDb {
        static $gtype: GObject.GType<ScriptDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ScriptDb;
        lookup(subtag: string): Script;
        ref(): ScriptDb;
        unref(): void;
    }
    class String {
        static $gtype: GObject.GType<String>;
        constructor(string: string);
        static ["new"](string: string): String;
        append(str: string): String;
        append_c(c: number): String;
        at(pos: bigint | number): number;
        clear(): void;
        free(free_segment: Bool): string;
        length(): number;
        ref(): String;
        replace_c(pos: bigint | number, c: number): String;
        truncate(len: bigint | number): String;
        unref(): void;
        value(): string;
    }
    class Tag {
        static $gtype: GObject.GType<Tag>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Tag;
        static convert_from_locale(error: Error | null): Tag;
        static convert_from_locale_string(locale: string, error: Error | null): Tag;
        canonicalize(error: Error | null): string;
        canonicalize_in_extlang_form(error: Error | null): string;
        clear(): void;
        compare(v2: Tag): Bool;
        convert_to_locale(error: Error | null): string;
        copy(): Tag;
        dump(): void;
        get_extension(): Extension;
        get_extlang(): Extlang;
        get_grandfathered(): Grandfathered;
        get_language(): Lang;
        get_privateuse(): String;
        get_region(): Region;
        get_script(): Script;
        get_string(): string;
        get_string_with_filter(filter: number): string;
        get_variants(): List;
        lookup(pattern: string, error: Error | null): string;
        match(v2: string, error: Error | null): Bool;
        parse(tag_string: string, error: Error | null): Bool;
        parse_with_extra_token(tag_string: string, error: Error | null): Bool;
        ref(): Tag;
        transform(error: Error): string;
        truncate(error: Error): Bool;
        unref(): void;
    }
    abstract class Variant {
        static $gtype: GObject.GType<Variant>;
        compare(v2: Variant): Bool;
        dump(): void;
        get_better_tag(): string;
        get_name(): string;
        get_preferred_tag(): string;
        get_prefix(): List;
        get_tag(): string;
        ref(): Variant;
        unref(): void;
    }
    class VariantDb {
        static $gtype: GObject.GType<VariantDb>;
        constructor(properties?: Partial<{}>);
        static ["new"](): VariantDb;
        lookup(subtag: string): Variant;
        ref(): VariantDb;
        unref(): void;
    }
    type Bool = number;
    type Pointer = never;
    const __name__: string;
    const __version__: string;
}
export default LangTag;
}
declare module 'gi://LangTag' {
    import LangTag06 from 'gi://LangTag?version=0.6';
    export default LangTag06;
}
