declare module 'gi://PangoOT?version=1.0' {
import type freetype2 from 'gi://freetype2?version=2.0';
import type PangoFc from 'gi://PangoFc?version=1.0';
import type fontconfig from 'gi://fontconfig?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace PangoOT {
    enum TableType {
        GSUB,
        GPOS,
    }
    const ALL_GLYPHS: number;
    const DEFAULT_LANGUAGE: number;
    const NO_FEATURE: number;
    const NO_SCRIPT: number;
    function tag_from_language(language: Pango.Language | null): Tag;
    function tag_from_script(script: Pango.Script): Tag;
    function tag_to_language(language_tag: Tag): Pango.Language;
    function tag_to_script(script_tag: Tag): Pango.Script;
    namespace Info {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;
        $signals: Info.SignalSignatures;
        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Info.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Info.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Info.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Info.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(face: freetype2.Face): Info;
        find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [boolean, number];
        find_language(table_type: TableType, script_index: number, language_tag: Tag): [boolean, number, number];
        find_script(table_type: TableType, script_tag: Tag): [boolean, number];
        list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag;
        list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag;
        list_scripts(table_type: TableType): Tag;
    }
    namespace Ruleset {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Ruleset extends GObject.Object {
        static $gtype: GObject.GType<Ruleset>;
        $signals: Ruleset.SignalSignatures;
        constructor(properties?: Partial<Ruleset.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](info: Info): Ruleset;
        static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset;
        static new_from_description(info: Info, desc: RulesetDescription): Ruleset;
        connect<K extends keyof Ruleset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ruleset.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Ruleset.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ruleset.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Ruleset.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Ruleset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_for_description(info: Info, desc: RulesetDescription): Ruleset;
        add_feature(table_type: TableType, feature_index: number, property_bit: bigint | number): void;
        get_feature_count(): [number, number, number];
        maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: bigint | number): boolean;
        maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number;
        position(buffer: Buffer): void;
        substitute(buffer: Buffer): void;
    }
    class Buffer {
        static $gtype: GObject.GType<Buffer>;
        constructor(font: PangoFc.Font);
        static ["new"](font: PangoFc.Font): Buffer;
        add_glyph(glyph: number, properties: number, cluster: number): void;
        clear(): void;
        destroy(): void;
        get_glyphs(): Glyph[] | null;
        output(glyphs: Pango.GlyphString): void;
        set_rtl(rtl: boolean): void;
        set_zero_width_marks(zero_width_marks: boolean): void;
    }
    class FeatureMap {
        static $gtype: GObject.GType<FeatureMap>;
        feature_name: number[];
        property_bit: number;
    }
    class Glyph {
        static $gtype: GObject.GType<Glyph>;
        glyph: number;
        properties: number;
        cluster: number;
        component: number;
        ligID: number;
        internal: number;
        constructor(properties?: Partial<{
            glyph: number;
            properties: number;
            cluster: number;
            component: number;
            ligID: number;
            internal: number;
        }>);
    }
    class RulesetDescription {
        static $gtype: GObject.GType<RulesetDescription>;
        script: Pango.Script;
        n_static_gsub_features: number;
        n_static_gpos_features: number;
        n_other_features: number;
        copy(): RulesetDescription;
        equal(desc2: RulesetDescription): boolean;
        free(): void;
        hash(): number;
    }
    type Tag = number;
    const __name__: string;
    const __version__: string;
}
export default PangoOT;
}
declare module 'gi://PangoOT' {
    import PangoOT10 from 'gi://PangoOT?version=1.0';
    export default PangoOT10;
}
