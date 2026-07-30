declare module 'gi://AppStream?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace AppStream {
    export namespace AgreementKind {
        export const $gtype: GObject.GType<AgreementKind>;
    }
    enum AgreementKind {
        UNKNOWN,
        GENERIC,
        EULA,
        PRIVACY,
    }
    export namespace ArtifactKind {
        export const $gtype: GObject.GType<ArtifactKind>;
    }
    enum ArtifactKind {
        UNKNOWN,
        SOURCE,
        BINARY,
    }
    export namespace BundleKind {
        export const $gtype: GObject.GType<BundleKind>;
    }
    enum BundleKind {
        UNKNOWN,
        PACKAGE,
        LIMBA,
        FLATPAK,
        APPIMAGE,
        SNAP,
        TARBALL,
        CABINET,
        LINGLONG,
        SYSUPDATE,
    }
    export namespace ChassisKind {
        export const $gtype: GObject.GType<ChassisKind>;
    }
    enum ChassisKind {
        UNKNOWN,
        DESKTOP,
        LAPTOP,
        SERVER,
        TABLET,
        HANDSET,
    }
    export namespace CheckResult {
        export const $gtype: GObject.GType<CheckResult>;
    }
    enum CheckResult {
        ERROR,
        UNKNOWN,
        FALSE,
        TRUE,
    }
    export namespace ChecksumKind {
        export const $gtype: GObject.GType<ChecksumKind>;
    }
    enum ChecksumKind {
        NONE,
        SHA1,
        SHA256,
        SHA512,
        BLAKE2B,
        BLAKE3,
    }
    export namespace ColorKind {
        export const $gtype: GObject.GType<ColorKind>;
    }
    enum ColorKind {
        UNKNOWN,
        PRIMARY,
    }
    export namespace ColorSchemeKind {
        export const $gtype: GObject.GType<ColorSchemeKind>;
    }
    enum ColorSchemeKind {
        UNKNOWN,
        LIGHT,
        DARK,
    }
    export namespace ComponentKind {
        export const $gtype: GObject.GType<ComponentKind>;
    }
    enum ComponentKind {
        UNKNOWN,
        GENERIC,
        DESKTOP_APP,
        CONSOLE_APP,
        WEB_APP,
        SERVICE,
        ADDON,
        RUNTIME,
        FONT,
        CODEC,
        INPUT_METHOD,
        OPERATING_SYSTEM,
        FIRMWARE,
        DRIVER,
        LOCALIZATION,
        REPOSITORY,
        ICON_THEME,
    }
    export namespace ComponentScope {
        export const $gtype: GObject.GType<ComponentScope>;
    }
    enum ComponentScope {
        UNKNOWN,
        SYSTEM,
        USER,
    }
    export namespace ContentRatingSystem {
        export const $gtype: GObject.GType<ContentRatingSystem>;
    }
    enum ContentRatingSystem {
        UNKNOWN,
        INCAA,
        ACB,
        DJCTQ,
        GSRR,
        PEGI,
        KAVI,
        USK,
        ESRA,
        CERO,
        OFLCNZ,
        RUSSIA,
        MDA,
        GRAC,
        ESRB,
        IARC,
    }
    export namespace ContentRatingValue {
        export const $gtype: GObject.GType<ContentRatingValue>;
    }
    enum ContentRatingValue {
        UNKNOWN,
        NONE,
        MILD,
        MODERATE,
        INTENSE,
    }
    export namespace ControlKind {
        export const $gtype: GObject.GType<ControlKind>;
    }
    enum ControlKind {
        UNKNOWN,
        POINTING,
        KEYBOARD,
        CONSOLE,
        TOUCH,
        GAMEPAD,
        VOICE,
        VISION,
        TV_REMOTE,
        TABLET,
    }
    export namespace DisplaySideKind {
        export const $gtype: GObject.GType<DisplaySideKind>;
    }
    enum DisplaySideKind {
        UNKNOWN,
        SHORTEST,
        LONGEST,
    }
    export namespace FormatKind {
        export const $gtype: GObject.GType<FormatKind>;
    }
    enum FormatKind {
        UNKNOWN,
        XML,
        YAML,
        DESKTOP_ENTRY,
    }
    export namespace FormatStyle {
        export const $gtype: GObject.GType<FormatStyle>;
    }
    enum FormatStyle {
        UNKNOWN,
        METAINFO,
        CATALOG,
    }
    export namespace FormatVersion {
        export const $gtype: GObject.GType<FormatVersion>;
    }
    enum FormatVersion {
        UNKNOWN,
        V1_0,
    }
    export namespace IconKind {
        export const $gtype: GObject.GType<IconKind>;
    }
    enum IconKind {
        UNKNOWN,
        STOCK,
        CACHED,
        LOCAL,
        REMOTE,
    }
    export namespace ImageKind {
        export const $gtype: GObject.GType<ImageKind>;
    }
    enum ImageKind {
        UNKNOWN,
        SOURCE,
        THUMBNAIL,
    }
    export namespace InternetKind {
        export const $gtype: GObject.GType<InternetKind>;
    }
    enum InternetKind {
        UNKNOWN,
        ALWAYS,
        OFFLINE_ONLY,
        FIRST_RUN,
    }
    export namespace IssueKind {
        export const $gtype: GObject.GType<IssueKind>;
    }
    enum IssueKind {
        UNKNOWN,
        GENERIC,
        CVE,
    }
    export namespace IssueSeverity {
        export const $gtype: GObject.GType<IssueSeverity>;
    }
    enum IssueSeverity {
        UNKNOWN,
        PEDANTIC,
        INFO,
        WARNING,
        ERROR,
    }
    export namespace LaunchableKind {
        export const $gtype: GObject.GType<LaunchableKind>;
    }
    enum LaunchableKind {
        UNKNOWN,
        DESKTOP_ID,
        SERVICE,
        COCKPIT_MANIFEST,
        URL,
    }
    export namespace MarkupKind {
        export const $gtype: GObject.GType<MarkupKind>;
    }
    enum MarkupKind {
        UNKNOWN,
        XML,
        TEXT,
        MARKDOWN,
    }
    export namespace MergeKind {
        export const $gtype: GObject.GType<MergeKind>;
    }
    enum MergeKind {
        NONE,
        REPLACE,
        APPEND,
        REMOVE_COMPONENT,
    }
    class MetadataError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static PARSE: number;
        static FORMAT_UNEXPECTED: number;
        static NO_COMPONENT: number;
        static VALUE_MISSING: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace MetadataLocation {
        export const $gtype: GObject.GType<MetadataLocation>;
    }
    enum MetadataLocation {
        UNKNOWN,
        SHARED,
        STATE,
        CACHE,
        USER,
    }
    class PoolError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static INCOMPLETE: number;
        static COLLISION: number;
        static CACHE_WRITE_FAILED: number;
        static CACHE_DAMAGED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace ProvidedKind {
        export const $gtype: GObject.GType<ProvidedKind>;
    }
    enum ProvidedKind {
        UNKNOWN,
        LIBRARY,
        BINARY,
        MEDIATYPE,
        FONT,
        MODALIAS,
        PYTHON,
        DBUS_SYSTEM,
        DBUS_USER,
        FIRMWARE_RUNTIME,
        FIRMWARE_FLASHED,
        ID,
    }
    export namespace ReferenceKind {
        export const $gtype: GObject.GType<ReferenceKind>;
    }
    enum ReferenceKind {
        UNKNOWN,
        DOI,
        CITATION_CFF,
        REGISTRY,
    }
    export namespace RelationCompare {
        export const $gtype: GObject.GType<RelationCompare>;
    }
    enum RelationCompare {
        UNKNOWN,
        EQ,
        NE,
        LT,
        GT,
        LE,
        GE,
    }
    class RelationError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static BAD_VALUE: number;
        static NOT_IMPLEMENTED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace RelationItemKind {
        export const $gtype: GObject.GType<RelationItemKind>;
    }
    enum RelationItemKind {
        UNKNOWN,
        ID,
        MODALIAS,
        KERNEL,
        MEMORY,
        FIRMWARE,
        CONTROL,
        DISPLAY_LENGTH,
        HARDWARE,
        INTERNET,
    }
    export namespace RelationKind {
        export const $gtype: GObject.GType<RelationKind>;
    }
    enum RelationKind {
        UNKNOWN,
        REQUIRES,
        RECOMMENDS,
        SUPPORTS,
    }
    export namespace RelationStatus {
        export const $gtype: GObject.GType<RelationStatus>;
    }
    enum RelationStatus {
        UNKNOWN,
        ERROR,
        NOT_SATISFIED,
        SATISFIED,
    }
    export namespace ReleaseKind {
        export const $gtype: GObject.GType<ReleaseKind>;
    }
    enum ReleaseKind {
        UNKNOWN,
        STABLE,
        DEVELOPMENT,
        SNAPSHOT,
    }
    export namespace ReleaseListKind {
        export const $gtype: GObject.GType<ReleaseListKind>;
    }
    enum ReleaseListKind {
        UNKNOWN,
        EMBEDDED,
        EXTERNAL,
    }
    export namespace ReleaseUrlKind {
        export const $gtype: GObject.GType<ReleaseUrlKind>;
    }
    enum ReleaseUrlKind {
        UNKNOWN,
        DETAILS,
    }
    export namespace ScreenshotKind {
        export const $gtype: GObject.GType<ScreenshotKind>;
    }
    enum ScreenshotKind {
        UNKNOWN,
        DEFAULT,
        EXTRA,
    }
    export namespace ScreenshotMediaKind {
        export const $gtype: GObject.GType<ScreenshotMediaKind>;
    }
    enum ScreenshotMediaKind {
        UNKNOWN,
        IMAGE,
        VIDEO,
    }
    export namespace SizeKind {
        export const $gtype: GObject.GType<SizeKind>;
    }
    enum SizeKind {
        UNKNOWN,
        DOWNLOAD,
        INSTALLED,
    }
    export namespace SuggestedKind {
        export const $gtype: GObject.GType<SuggestedKind>;
    }
    enum SuggestedKind {
        UNKNOWN,
        UPSTREAM,
        HEURISTIC,
    }
    class SystemInfoError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static NOT_FOUND: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace TranslationKind {
        export const $gtype: GObject.GType<TranslationKind>;
    }
    enum TranslationKind {
        UNKNOWN,
        GETTEXT,
        QT,
    }
    export namespace UrgencyKind {
        export const $gtype: GObject.GType<UrgencyKind>;
    }
    enum UrgencyKind {
        UNKNOWN,
        LOW,
        MEDIUM,
        HIGH,
        CRITICAL,
    }
    export namespace UrlKind {
        export const $gtype: GObject.GType<UrlKind>;
    }
    enum UrlKind {
        UNKNOWN,
        HOMEPAGE,
        BUGTRACKER,
        FAQ,
        HELP,
        DONATION,
        TRANSLATE,
        CONTACT,
        VCS_BROWSER,
        CONTRIBUTE,
    }
    class UtilsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class ValidatorError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static INVALID_OVERRIDE: number;
        static INVALID_FILENAME: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace VideoCodecKind {
        export const $gtype: GObject.GType<VideoCodecKind>;
    }
    enum VideoCodecKind {
        UNKNOWN,
        VP9,
        AV1,
    }
    export namespace VideoContainerKind {
        export const $gtype: GObject.GType<VideoContainerKind>;
    }
    enum VideoContainerKind {
        UNKNOWN,
        MKV,
        WEBM,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function agreement_kind_from_string(value: string): AgreementKind;
    function agreement_kind_to_string(value: AgreementKind): string;
    function artifact_kind_from_string(kind: string): ArtifactKind;
    function artifact_kind_to_string(kind: ArtifactKind): string;
    function bundle_kind_from_string(bundle_str: string): BundleKind;
    function bundle_kind_to_string(kind: BundleKind): string;
    function chassis_kind_from_string(kind_str: string): ChassisKind;
    function chassis_kind_to_string(kind: ChassisKind): string;
    function checksum_kind_from_string(kind_str: string): ChecksumKind;
    function checksum_kind_to_string(kind: ChecksumKind): string;
    function color_kind_from_string(str: string): ColorKind;
    function color_kind_to_string(kind: ColorKind): string;
    function color_scheme_kind_from_string(str: string): ColorSchemeKind;
    function color_scheme_kind_to_string(kind: ColorSchemeKind): string;
    function component_kind_from_string(kind_str: string): ComponentKind;
    function component_kind_to_string(kind: ComponentKind): string;
    function component_scope_from_string(scope_str: string): ComponentScope;
    function component_scope_to_string(scope: ComponentScope): string;
    function content_rating_system_format_age(system: ContentRatingSystem, age: number): string | null;
    function content_rating_system_from_locale(locale: string): ContentRatingSystem;
    function content_rating_system_get_csm_ages(system: ContentRatingSystem): number[];
    function content_rating_system_get_formatted_ages(system: ContentRatingSystem): string[];
    function content_rating_system_to_string(system: ContentRatingSystem): string | null;
    function content_rating_value_from_string(value: string): ContentRatingValue;
    function content_rating_value_to_string(value: ContentRatingValue): string;
    function control_kind_from_string(kind_str: string): ControlKind;
    function control_kind_to_string(kind: ControlKind): string;
    function display_side_kind_from_string(kind_str: string): DisplaySideKind;
    function display_side_kind_to_string(kind: DisplaySideKind): string;
    function format_kind_from_string(kind_str: string): FormatKind;
    function format_kind_to_string(kind: FormatKind): string;
    function format_version_from_string(version_str: string): FormatVersion;
    function format_version_to_string(version: FormatVersion): string;
    function get_current_distro_component_id(): string;
    function get_default_categories(with_special: boolean): Category[];
    function get_license_name(license: string): string | null;
    function get_license_url(license: string): string | null;
    function gstring_replace(string: GLib.String, find: string, replace: string, limit: number): number;
    function icon_kind_from_string(kind_str: string): IconKind;
    function icon_kind_to_string(kind: IconKind): string;
    function image_kind_from_string(kind: string): ImageKind;
    function image_kind_to_string(kind: ImageKind): string;
    function internet_kind_from_string(kind_str: string): InternetKind;
    function internet_kind_to_string(kind: InternetKind): string;
    function is_spdx_license_exception_id(exception_id: string): boolean;
    function is_spdx_license_expression(license: string): boolean;
    function is_spdx_license_id(license_id: string): boolean;
    function issue_kind_from_string(kind_str: string): IssueKind;
    function issue_kind_to_string(kind: IssueKind): string;
    function issue_severity_from_string(str: string): IssueSeverity;
    function issue_severity_to_string(severity: IssueSeverity): string;
    function launchable_kind_from_string(kind_str: string): LaunchableKind;
    function launchable_kind_to_string(kind: LaunchableKind): string;
    function license_is_free_license(license: string): boolean;
    function license_is_metadata_license(license: string): boolean;
    function license_is_metadata_license_id(license_id: string): boolean;
    function license_to_spdx_id(license: string): string;
    function markup_convert(markup: string, to_kind: MarkupKind): string;
    function markup_strsplit_words(text: string, line_len: number): string[];
    function merge_kind_from_string(kind_str: string): MergeKind;
    function merge_kind_to_string(kind: MergeKind): string;
    function metadata_error_quark(): GLib.Quark;
    function pool_error_quark(): GLib.Quark;
    function provided_kind_from_string(kind_str: string): ProvidedKind;
    function provided_kind_to_l10n_string(kind: ProvidedKind): string;
    function provided_kind_to_string(kind: ProvidedKind): string;
    function reference_kind_from_string(str: string): ReferenceKind;
    function reference_kind_to_string(kind: ReferenceKind): string;
    function relation_compare_from_string(compare_str: string): RelationCompare;
    function relation_compare_to_string(compare: RelationCompare): string;
    function relation_compare_to_symbols_string(compare: RelationCompare): string;
    function relation_error_quark(): GLib.Quark;
    function relation_item_kind_from_string(kind_str: string): RelationItemKind;
    function relation_item_kind_to_string(kind: RelationItemKind): string;
    function relation_kind_from_string(kind_str: string): RelationKind;
    function relation_kind_to_string(kind: RelationKind): string;
    function release_kind_from_string(kind_str: string): ReleaseKind;
    function release_kind_to_string(kind: ReleaseKind): string;
    function release_list_kind_from_string(kind_str: string): ReleaseListKind;
    function release_list_kind_to_string(kind: ReleaseListKind): string;
    function release_url_kind_from_string(kind_str: string): ReleaseUrlKind;
    function release_url_kind_to_string(kind: ReleaseUrlKind): string;
    function screenshot_kind_from_string(kind: string): ScreenshotKind;
    function screenshot_kind_to_string(kind: ScreenshotKind): string;
    function size_kind_from_string(size_kind: string): SizeKind;
    function size_kind_to_string(size_kind: SizeKind): string;
    function spdx_license_detokenize(license_tokens: string): string | null;
    function spdx_license_tokenize(license: string): string[] | null;
    function suggested_kind_from_string(kind_str: string): SuggestedKind;
    function suggested_kind_to_string(kind: SuggestedKind): string;
    function system_info_error_quark(): GLib.Quark;
    function translation_kind_from_string(kind_str: string): TranslationKind;
    function translation_kind_to_string(kind: TranslationKind): string;
    function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
    function urgency_kind_to_string(urgency_kind: UrgencyKind): string;
    function url_kind_from_string(url_kind: string): UrlKind;
    function url_kind_to_string(url_kind: UrlKind): string;
    function utils_build_data_id(scope: ComponentScope, bundle_kind: BundleKind, origin: string, cid: string, branch: string): string;
    function utils_data_id_equal(data_id1: string, data_id2: string): boolean;
    function utils_data_id_get_cid(data_id: string): string;
    function utils_data_id_hash(data_id: string): number;
    function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags): boolean;
    function utils_data_id_valid(data_id: string): boolean;
    function utils_error_quark(): GLib.Quark;
    function utils_get_desktop_environment_name(de_id: string): string;
    function utils_get_gui_environment_style_name(env_style: string): string;
    function utils_get_tag_search_weight(tag_name: string): number;
    function utils_guess_scope_from_path(path: string): ComponentScope;
    function utils_install_metadata_file(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean;
    function utils_is_category_name(category_name: string): boolean;
    function utils_is_desktop_environment(de_id: string): boolean;
    function utils_is_gui_environment_style(env_style: string): boolean;
    function utils_is_platform_triplet(triplet: string): boolean;
    function utils_is_tld(tld: string): boolean;
    function utils_locale_is_compatible(locale1: string | null, locale2: string | null): boolean;
    function utils_posix_locale_to_bcp47(locale: string): string;
    function utils_sort_components_into_categories(cpts: Component[], categories: Category[], check_duplicates: boolean): void;
    function validator_error_quark(): GLib.Quark;
    function vercmp(a: string, b: string, flags: VercmpFlags): number;
    function vercmp_simple(a: string, b: string): number;
    function vercmp_test_match(ver1: string, compare: RelationCompare, ver2: string, flags: VercmpFlags): boolean;
    function version_string(): string;
    function video_codec_kind_from_string(str: string): VideoCodecKind;
    function video_codec_kind_to_string(kind: VideoCodecKind): string;
    function video_container_kind_from_string(str: string): VideoContainerKind;
    function video_container_kind_to_string(kind: VideoContainerKind): string;
    export namespace CacheFlags {
        export const $gtype: GObject.GType<CacheFlags>;
    }
    enum CacheFlags {
        NONE,
        USE_USER,
        USE_SYSTEM,
        NO_CLEAR,
        REFRESH_SYSTEM,
    }
    export namespace ComponentBoxFlags {
        export const $gtype: GObject.GType<ComponentBoxFlags>;
    }
    enum ComponentBoxFlags {
        NONE,
        NO_CHECKS,
    }
    export namespace DataIdMatchFlags {
        export const $gtype: GObject.GType<DataIdMatchFlags>;
    }
    enum DataIdMatchFlags {
        NONE,
        SCOPE,
        BUNDLE_KIND,
        ORIGIN,
        ID,
        BRANCH,
    }
    export namespace ParseFlags {
        export const $gtype: GObject.GType<ParseFlags>;
    }
    enum ParseFlags {
        NONE,
        IGNORE_MEDIABASEURL,
    }
    export namespace PoolFlags {
        export const $gtype: GObject.GType<PoolFlags>;
    }
    enum PoolFlags {
        NONE,
        LOAD_OS_CATALOG,
        LOAD_OS_METAINFO,
        LOAD_OS_DESKTOP_FILES,
        LOAD_FLATPAK,
        IGNORE_CACHE_AGE,
        RESOLVE_ADDONS,
        PREFER_OS_METAINFO,
        MONITOR,
    }
    export namespace ReviewFlags {
        export const $gtype: GObject.GType<ReviewFlags>;
    }
    enum ReviewFlags {
        NONE,
        SELF,
        VOTED,
    }
    export namespace ValueFlags {
        export const $gtype: GObject.GType<ValueFlags>;
    }
    enum ValueFlags {
        NONE,
        DUPLICATE_CHECK,
        NO_TRANSLATION_FALLBACK,
    }
    export namespace VercmpFlags {
        export const $gtype: GObject.GType<VercmpFlags>;
    }
    enum VercmpFlags {
        NONE,
        IGNORE_EPOCH,
    }
    namespace Agreement {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Agreement extends GObject.Object {
        static $gtype: GObject.GType<Agreement>;
        $signals: Agreement.SignalSignatures;
        constructor(properties?: Partial<Agreement.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Agreement;
        connect<K extends keyof Agreement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Agreement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Agreement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Agreement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Agreement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_section(agreement_section: AgreementSection): void;
        get_kind(): AgreementKind;
        get_section_default(): AgreementSection | null;
        get_sections(): AgreementSection[];
        get_version_id(): string;
        set_kind(kind: AgreementKind): void;
        set_version_id(version_id: string): void;
    }
    namespace AgreementSection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class AgreementSection extends GObject.Object {
        static $gtype: GObject.GType<AgreementSection>;
        $signals: AgreementSection.SignalSignatures;
        constructor(properties?: Partial<AgreementSection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): AgreementSection;
        connect<K extends keyof AgreementSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AgreementSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AgreementSection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AgreementSection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AgreementSection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_context(): Context | null;
        get_description(): string;
        get_kind(): string;
        get_name(): string;
        set_context(context: Context): void;
        set_description(desc: string, locale: string | null): void;
        set_kind(kind: string): void;
        set_name(name: string, locale: string | null): void;
    }
    namespace Artifact {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Artifact extends GObject.Object {
        static $gtype: GObject.GType<Artifact>;
        $signals: Artifact.SignalSignatures;
        constructor(properties?: Partial<Artifact.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Artifact;
        connect<K extends keyof Artifact.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Artifact.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Artifact.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Artifact.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Artifact.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Artifact.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_checksum(cs: Checksum): void;
        add_location(location: string): void;
        get_bundle_kind(): BundleKind;
        get_checksum(kind: ChecksumKind): Checksum | null;
        get_checksums(): Checksum[];
        get_filename(): string;
        get_kind(): ArtifactKind;
        get_locations(): string[];
        get_platform(): string;
        get_size(kind: SizeKind): number;
        set_bundle_kind(kind: BundleKind): void;
        set_filename(filename: string): void;
        set_kind(kind: ArtifactKind): void;
        set_platform(platform: string): void;
        set_size(size: bigint | number, kind: SizeKind): void;
    }
    namespace Branding {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Branding extends GObject.Object {
        static $gtype: GObject.GType<Branding>;
        $signals: Branding.SignalSignatures;
        constructor(properties?: Partial<Branding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Branding;
        connect<K extends keyof Branding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Branding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Branding.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Branding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Branding.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Branding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color(kind: ColorKind, scheme_kind: ColorSchemeKind): string | null;
        remove_color(kind: ColorKind, scheme_preference: ColorSchemeKind): void;
        set_color(kind: ColorKind, scheme_preference: ColorSchemeKind, colorcode: string): void;
    }
    namespace Bundle {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Bundle extends GObject.Object {
        static $gtype: GObject.GType<Bundle>;
        $signals: Bundle.SignalSignatures;
        constructor(properties?: Partial<Bundle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Bundle;
        connect<K extends keyof Bundle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bundle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bundle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bundle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bundle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_id(): string;
        get_kind(): BundleKind;
        set_id(id: string): void;
        set_kind(kind: BundleKind): void;
    }
    namespace Category {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::children": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            children: never;
            icon: string;
            id: string;
            name: string;
            summary: string;
        }
    }
    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;
        get children(): null;
        get icon(): string;
        set icon(val: string);
        get id(): string;
        set id(val: string);
        get name(): string;
        set name(val: string);
        get summary(): string;
        $signals: Category.SignalSignatures;
        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Category;
        connect<K extends keyof Category.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Category.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Category.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Category.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_child(subcat: Category): void;
        add_component(cpt: Component): void;
        add_desktop_group(group_name: string): void;
        get_children(): Category[];
        get_components(): Component[];
        get_desktop_groups(): string[];
        get_icon(): string;
        get_id(): string;
        get_name(): string;
        get_summary(): string;
        has_children(): boolean;
        has_component(cpt: Component): boolean;
        remove_child(subcat: Category): void;
        set_icon(value: string): void;
        set_id(id: string): void;
        set_name(value: string): void;
        set_summary(value: string): void;
    }
    namespace Checksum {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Checksum extends GObject.Object {
        static $gtype: GObject.GType<Checksum>;
        $signals: Checksum.SignalSignatures;
        constructor(properties?: Partial<Checksum.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Checksum;
        static new_with_value(kind: ChecksumKind, value: string): Checksum;
        connect<K extends keyof Checksum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Checksum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Checksum.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Checksum.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Checksum.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_kind(): ChecksumKind;
        get_value(): string;
        set_kind(kind: ChecksumKind): void;
        set_value(value: string): void;
    }
    namespace Component {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::icons": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::keywords": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::pkgnames": (pspec: GObject.ParamSpec) => void;
            "notify::project-group": (pspec: GObject.ParamSpec) => void;
            "notify::project-license": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
            "notify::urls": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            categories: never[];
            description: string;
            icons: Icon[];
            id: string;
            keywords: string[];
            kind: ComponentKind;
            name: string;
            pkgnames: string[];
            project_group: string;
            projectGroup: string;
            project_license: string;
            projectLicense: string;
            screenshots: Screenshot[];
            summary: string;
            urls: never;
        }
    }
    class Component extends GObject.Object {
        static $gtype: GObject.GType<Component>;
        get categories(): null[];
        get description(): string;
        set description(val: string);
        get icons(): Icon[];
        get id(): string;
        set id(val: string);
        get keywords(): string[];
        set keywords(val: string[]);
        get kind(): ComponentKind;
        set kind(val: ComponentKind);
        get name(): string;
        set name(val: string);
        get pkgnames(): string[];
        set pkgnames(val: string[]);
        get project_group(): string;
        set project_group(val: string);
        get projectGroup(): string;
        set projectGroup(val: string);
        get project_license(): string;
        set project_license(val: string);
        get projectLicense(): string;
        set projectLicense(val: string);
        get screenshots(): Screenshot[];
        get summary(): string;
        set summary(val: string);
        get urls(): never;
        $signals: Component.SignalSignatures;
        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Component;
        connect<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Component.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_addon(addon: Component): void;
        add_agreement(agreement: Agreement): void;
        add_bundle(bundle: Bundle): void;
        add_category(category: string): void;
        add_content_rating(content_rating: ContentRating): void;
        add_extends(cpt_id: string): void;
        add_icon(icon: Icon): void;
        add_keyword(keyword: string, locale: string | null): void;
        add_language(locale: string | null, percentage: number): void;
        add_launchable(launchable: Launchable): void;
        add_provided(prov: Provided): void;
        add_provided_item(kind: ProvidedKind, item: string): void;
        add_reference(reference: Reference): void;
        add_relation(relation: Relation): void;
        add_release(release: Release): void;
        add_replaces(cid: string): void;
        add_review(review: Review): void;
        add_screenshot(sshot: Screenshot): void;
        add_suggested(suggested: Suggested): void;
        add_tag(ns: string, tag: string): boolean;
        add_translation(tr: Translation): void;
        add_url(url_kind: UrlKind, url: string): void;
        check_relations(sysinfo: SystemInfo | null, pool: Pool | null, rel_kind: RelationKind): RelationCheckResult[];
        clear_keywords(locale: string | null): void;
        clear_languages(): void;
        clear_tags(): void;
        get_addons(): Component[];
        get_agreement_by_kind(kind: AgreementKind): Agreement | null;
        get_agreements(): Agreement[];
        get_branch(): string;
        get_branding(): Branding | null;
        get_bundle(bundle_kind: BundleKind): Bundle | null;
        get_bundles(): Bundle[];
        get_categories(): string[];
        get_compulsory_for_desktops(): string[];
        get_content_rating(kind: string): ContentRating | null;
        get_content_ratings(): ContentRating[];
        get_context(): Context | null;
        get_custom(): never;
        get_custom_value(key: string): string;
        get_data_id(): string;
        get_date_eol(): string;
        get_description(): string;
        get_developer(): Developer;
        get_extends(): string[] | null;
        get_icon_by_size(width: number, height: number): Icon | null;
        get_icon_stock(): Icon | null;
        get_icons(): Icon[];
        get_id(): string;
        get_keywords(): string[];
        get_keywords_table(): never;
        get_kind(): ComponentKind;
        get_language(locale: string | null): number;
        get_languages(): string[];
        get_launchable(kind: LaunchableKind): Launchable | null;
        get_launchables(): Launchable[];
        get_merge_kind(): MergeKind;
        get_metadata_license(): string;
        get_name(): string;
        get_name_table(): never;
        get_name_variant_suffix(): string;
        get_origin(): string;
        get_pkgname(): string;
        get_pkgnames(): string[];
        get_priority(): number;
        get_project_group(): string;
        get_project_license(): string;
        get_provided(): Provided[];
        get_provided_for_kind(kind: ProvidedKind): Provided | null;
        get_recommends(): Relation[];
        get_references(): Reference[];
        get_releases_plain(): ReleaseList;
        get_replaces(): string[];
        get_requires(): Relation[];
        get_reviews(): Review[];
        get_scope(): ComponentScope;
        get_screenshots_all(): Screenshot[];
        get_search_tokens(): string[];
        get_sort_score(): number;
        get_source_pkgname(): string;
        get_suggested(): Suggested[];
        get_summary(): string;
        get_summary_table(): never;
        get_supports(): Relation[];
        get_system_compatibility_score(sysinfo: SystemInfo, is_template: boolean): [number, RelationCheckResult[] | null];
        get_timestamp_eol(): number;
        get_translations(): Translation[];
        get_url(url_kind: UrlKind): string | null;
        has_bundle(): boolean;
        has_category(category: string): boolean;
        has_tag(ns: string, tag: string): boolean;
        insert_custom_value(key: string, value: string): boolean;
        is_compulsory_for_desktop(desktop: string): boolean;
        is_floss(): boolean;
        is_ignored(): boolean;
        is_member_of_category(category: Category): boolean;
        is_valid(): boolean;
        load_from_bytes(context: Context, format: FormatKind, bytes: GLib.Bytes | Uint8Array): boolean;
        load_releases(allow_net: boolean): ReleaseList | null;
        remove_tag(ns: string, tag: string): boolean;
        search_matches(term: string): number;
        search_matches_all(terms: string): number;
        set_branch(branch: string): void;
        set_branding(branding: Branding): void;
        set_compulsory_for_desktop(desktop: string): void;
        set_context(context: Context): void;
        set_context_locale(locale: string): void;
        set_data_id(value: string): void;
        set_date_eol(date: string): void;
        set_description(value: string, locale: string | null): void;
        set_developer(developer: Developer): void;
        set_id(value: string): void;
        set_keywords(new_keywords: string[], locale: string | null, deep_copy: boolean): void;
        set_kind(value: ComponentKind): void;
        set_merge_kind(kind: MergeKind): void;
        set_metadata_license(value: string): void;
        set_name(value: string, locale: string | null): void;
        set_name_variant_suffix(value: string, locale: string | null): void;
        set_origin(origin: string): void;
        set_pkgname(pkgname: string): void;
        set_pkgnames(packages: string[]): void;
        set_priority(priority: number): void;
        set_project_group(value: string): void;
        set_project_license(value: string): void;
        set_releases(releases: ReleaseList): void;
        set_scope(scope: ComponentScope): void;
        set_sort_score(score: number): void;
        set_source_pkgname(spkgname: string): void;
        set_summary(value: string, locale: string | null): void;
        sort_screenshots(environment: string | null, style: string | null, prioritize_style: boolean): void;
        to_string(): string;
        to_xml_data(context: Context): string;
    }
    namespace ComponentBox {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::flags": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
        }
    }
    class ComponentBox extends GObject.Object {
        static $gtype: GObject.GType<ComponentBox>;
        get flags(): number;
        $signals: ComponentBox.SignalSignatures;
        constructor(properties?: Partial<ComponentBox.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](flags: ComponentBoxFlags): ComponentBox;
        static new_simple(): ComponentBox;
        connect<K extends keyof ComponentBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComponentBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ComponentBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComponentBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ComponentBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ComponentBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(cpt: Component): boolean;
        as_array(): Component[];
        clear(): void;
        get_flags(): ComponentBoxFlags;
        get_size(): number;
        index_safe(index: number): Component;
        is_empty(): boolean;
        remove_at(index: number): void;
        sort(): void;
        sort_by_score(): void;
    }
    namespace ContentRating {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ContentRating extends GObject.Object {
        static $gtype: GObject.GType<ContentRating>;
        $signals: ContentRating.SignalSignatures;
        constructor(properties?: Partial<ContentRating.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ContentRating;
        connect<K extends keyof ContentRating.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentRating.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentRating.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentRating.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentRating.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static attribute_from_csm_age(id: string, age: number): ContentRatingValue;
        static attribute_get_description(id: string, value: ContentRatingValue): string;
        static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
        static get_all_rating_ids(): string[];
        add_attribute(id: string, value: ContentRatingValue): void;
        get_kind(): string;
        get_minimum_age(): number;
        get_rating_ids(): string[];
        get_value(id: string): ContentRatingValue;
        set_kind(kind: string): void;
        set_value(id: string, value: ContentRatingValue): void;
    }
    namespace Context {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;
        $signals: Context.SignalSignatures;
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Context;
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_filename(): string;
        get_format_version(): FormatVersion;
        get_locale(): string;
        get_locale_use_all(): boolean;
        get_media_baseurl(): string;
        get_origin(): string;
        get_priority(): number;
        get_style(): FormatStyle;
        get_value_flags(): ValueFlags;
        has_media_baseurl(): boolean;
        set_filename(fname: string): void;
        set_format_version(ver: FormatVersion): void;
        set_locale(locale: string | null): void;
        set_media_baseurl(value: string): void;
        set_origin(value: string): void;
        set_priority(priority: number): void;
        set_style(style: FormatStyle): void;
        set_value_flags(flags: ValueFlags): void;
    }
    namespace Developer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Developer extends GObject.Object {
        static $gtype: GObject.GType<Developer>;
        $signals: Developer.SignalSignatures;
        constructor(properties?: Partial<Developer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Developer;
        connect<K extends keyof Developer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Developer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Developer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Developer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Developer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Developer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_id(): string;
        get_name(): string;
        set_id(id: string): void;
        set_name(value: string, locale: string | null): void;
    }
    namespace Icon {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Icon extends GObject.Object {
        static $gtype: GObject.GType<Icon>;
        $signals: Icon.SignalSignatures;
        constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Icon;
        connect<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Icon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Icon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_filename(): string;
        get_height(): number;
        get_kind(): IconKind;
        get_name(): string;
        get_scale(): number;
        get_url(): string;
        get_width(): number;
        set_filename(filename: string): void;
        set_height(height: number): void;
        set_kind(kind: IconKind): void;
        set_name(name: string): void;
        set_scale(scale: number): void;
        set_url(url: string): void;
        set_width(width: number): void;
    }
    namespace Image {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;
        $signals: Image.SignalSignatures;
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Image;
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_height(): number;
        get_kind(): ImageKind;
        get_locale(): string;
        get_scale(): number;
        get_url(): string;
        get_width(): number;
        set_height(height: number): void;
        set_kind(kind: ImageKind): void;
        set_locale(locale: string): void;
        set_scale(scale: number): void;
        set_url(url: string): void;
        set_width(width: number): void;
    }
    namespace Issue {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Issue extends GObject.Object {
        static $gtype: GObject.GType<Issue>;
        $signals: Issue.SignalSignatures;
        constructor(properties?: Partial<Issue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Issue;
        connect<K extends keyof Issue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Issue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Issue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Issue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Issue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Issue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_id(): string;
        get_kind(): IssueKind;
        get_url(): string;
        set_id(id: string): void;
        set_kind(kind: IssueKind): void;
        set_url(url: string): void;
    }
    namespace Launchable {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Launchable extends GObject.Object {
        static $gtype: GObject.GType<Launchable>;
        $signals: Launchable.SignalSignatures;
        constructor(properties?: Partial<Launchable.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Launchable;
        connect<K extends keyof Launchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Launchable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Launchable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Launchable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Launchable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_entry(entry: string): void;
        get_entries(): string[];
        get_kind(): LaunchableKind;
        set_kind(kind: LaunchableKind): void;
    }
    namespace Metadata {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Metadata extends GObject.Object {
        static $gtype: GObject.GType<Metadata>;
        $signals: Metadata.SignalSignatures;
        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Metadata;
        connect<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Metadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static file_guess_style(filename: string): FormatStyle;
        add_component(cpt: Component): void;
        clear_components(): void;
        clear_releases(): void;
        component_to_metainfo(format: FormatKind): string;
        components_to_catalog(format: FormatKind): string;
        get_architecture(): string;
        get_component(): Component | null;
        get_components(): ComponentBox;
        get_format_style(): FormatStyle;
        get_format_version(): FormatVersion;
        get_locale(): string;
        get_media_baseurl(): string;
        get_origin(): string;
        get_parse_flags(): ParseFlags;
        get_release_list(): ReleaseList | null;
        get_release_lists(): ReleaseList[];
        get_update_existing(): boolean;
        get_write_header(): boolean;
        parse_bytes(bytes: GLib.Bytes | Uint8Array, format: FormatKind): boolean;
        parse_data(data: string, data_len: bigint | number, format: FormatKind): boolean;
        parse_desktop_data(cid: string, data: string, data_len: bigint | number): boolean;
        parse_file(file: Gio.File, format: FormatKind): boolean;
        parse_releases_bytes(bytes: GLib.Bytes | Uint8Array): boolean;
        parse_releases_file(file: Gio.File): boolean;
        releases_to_data(releases: ReleaseList): string;
        save_catalog(fname: string, format: FormatKind): boolean;
        save_metainfo(fname: string, format: FormatKind): boolean;
        set_architecture(arch: string): void;
        set_format_style(mode: FormatStyle): void;
        set_format_version(version: FormatVersion): void;
        set_locale(locale: string): void;
        set_media_baseurl(url: string): void;
        set_origin(origin: string): void;
        set_parse_flags(flags: ParseFlags): void;
        set_update_existing(update: boolean): void;
        set_write_header(wheader: boolean): void;
    }
    namespace Pool {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Pool extends GObject.Object {
        static $gtype: GObject.GType<Pool>;
        $signals: Pool.SignalSignatures;
        constructor(properties?: Partial<Pool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Pool;
        connect<K extends keyof Pool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(): void;
        add_components(cbox: ComponentBox): boolean;
        add_extra_data_location(directory: string, format_style: FormatStyle): void;
        add_flags(flags: PoolFlags): void;
        build_search_tokens(search: string): string[];
        clear(): void;
        get_components(): ComponentBox;
        get_components_by_bundle_id(kind: BundleKind, bundle_id: string, match_prefix: boolean): ComponentBox;
        get_components_by_categories(categories: string[]): ComponentBox;
        get_components_by_extends(extended_id: string): ComponentBox;
        get_components_by_id(cid: string): ComponentBox;
        get_components_by_kind(kind: ComponentKind): ComponentBox;
        get_components_by_launchable(kind: LaunchableKind, id: string): ComponentBox;
        get_components_by_provided_item(kind: ProvidedKind, item: string): ComponentBox;
        get_flags(): PoolFlags;
        get_locale(): string;
        is_empty(): boolean;
        load(cancellable: Gio.Cancellable | null): boolean;
        load_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        load_finish(result: Gio.AsyncResult): boolean;
        remove_flags(flags: PoolFlags): void;
        reset_extra_data_locations(): void;
        search(search: string): ComponentBox;
        set_flags(flags: PoolFlags): void;
        set_load_std_data_locations(enabled: boolean): void;
        set_locale(locale: string): void;
    }
    namespace Provided {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Provided extends GObject.Object {
        static $gtype: GObject.GType<Provided>;
        $signals: Provided.SignalSignatures;
        constructor(properties?: Partial<Provided.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Provided;
        connect<K extends keyof Provided.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provided.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Provided.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provided.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Provided.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Provided.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_item(item: string): void;
        get_items(): string[];
        get_kind(): ProvidedKind;
        has_item(item: string): boolean;
        set_kind(kind: ProvidedKind): void;
    }
    namespace Reference {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Reference extends GObject.Object {
        static $gtype: GObject.GType<Reference>;
        $signals: Reference.SignalSignatures;
        constructor(properties?: Partial<Reference.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Reference;
        connect<K extends keyof Reference.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reference.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Reference.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reference.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Reference.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Reference.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_kind(): ReferenceKind;
        get_registry_name(): string | null;
        get_value(): string;
        set_kind(kind: ReferenceKind): void;
        set_registry_name(name: string): void;
        set_value(value: string): void;
    }
    namespace Relation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Relation extends GObject.Object {
        static $gtype: GObject.GType<Relation>;
        $signals: Relation.SignalSignatures;
        constructor(properties?: Partial<Relation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Relation;
        connect<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Relation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Relation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Relation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Relation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static check_results_get_compatibility_score(rc_results: RelationCheckResult[]): number;
        get_compare(): RelationCompare;
        get_display_side_kind(): DisplaySideKind;
        get_item_kind(): RelationItemKind;
        get_kind(): RelationKind;
        get_value_control_kind(): ControlKind;
        get_value_int(): number;
        get_value_internet_bandwidth(): number;
        get_value_internet_kind(): InternetKind;
        get_value_px(): number;
        get_value_str(): string;
        get_version(): string;
        is_satisfied(system_info: SystemInfo | null, pool: Pool | null): RelationCheckResult | null;
        set_compare(compare: RelationCompare): void;
        set_display_side_kind(kind: DisplaySideKind): void;
        set_item_kind(kind: RelationItemKind): void;
        set_kind(kind: RelationKind): void;
        set_value_control_kind(kind: ControlKind): void;
        set_value_int(value: number): void;
        set_value_internet_bandwidth(bandwidth_mbitps: number): void;
        set_value_internet_kind(kind: InternetKind): void;
        set_value_px(logical_px: number): void;
        set_value_str(value: string): void;
        set_version(version: string): void;
        version_compare(version: string): boolean;
    }
    namespace RelationCheckResult {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class RelationCheckResult extends GObject.Object {
        static $gtype: GObject.GType<RelationCheckResult>;
        $signals: RelationCheckResult.SignalSignatures;
        constructor(properties?: Partial<RelationCheckResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): RelationCheckResult;
        connect<K extends keyof RelationCheckResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelationCheckResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RelationCheckResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelationCheckResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RelationCheckResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RelationCheckResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_error_code(): RelationError;
        get_message(): string | null;
        get_relation(): Relation | null;
        get_status(): RelationStatus;
        set_error_code(ecode: RelationError): void;
        set_relation(relation: Relation): void;
        set_status(status: RelationStatus): void;
    }
    namespace Release {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Release extends GObject.Object {
        static $gtype: GObject.GType<Release>;
        $signals: Release.SignalSignatures;
        constructor(properties?: Partial<Release.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Release;
        connect<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Release.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Release.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_artifact(artifact: Artifact): void;
        add_issue(issue: Issue): void;
        add_tag(ns: string, tag: string): boolean;
        clear_tags(): void;
        get_artifacts(): Artifact[];
        get_context(): Context | null;
        get_date(): string | null;
        get_date_eol(): string | null;
        get_description(): string | null;
        get_issues(): Issue[];
        get_kind(): ReleaseKind;
        get_timestamp(): number;
        get_timestamp_eol(): number;
        get_urgency(): UrgencyKind;
        get_url(url_kind: ReleaseUrlKind): string | null;
        get_version(): string | null;
        has_tag(ns: string, tag: string): boolean;
        remove_tag(ns: string, tag: string): boolean;
        set_context(context: Context): void;
        set_date(date: string): void;
        set_date_eol(date: string): void;
        set_description(description: string, locale: string | null): void;
        set_kind(kind: ReleaseKind): void;
        set_timestamp(timestamp: bigint | number): void;
        set_timestamp_eol(timestamp: bigint | number): void;
        set_urgency(urgency: UrgencyKind): void;
        set_url(url_kind: ReleaseUrlKind, url: string): void;
        set_version(version: string): void;
        vercmp(rel2: Release): number;
    }
    namespace ReleaseList {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ReleaseList extends GObject.Object {
        static $gtype: GObject.GType<ReleaseList>;
        $signals: ReleaseList.SignalSignatures;
        constructor(properties?: Partial<ReleaseList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ReleaseList;
        connect<K extends keyof ReleaseList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ReleaseList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ReleaseList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ReleaseList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ReleaseList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ReleaseList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(release: Release): void;
        clear(): void;
        get_context(): Context | null;
        get_entries(): Release[];
        get_kind(): ReleaseListKind;
        get_size(): number;
        get_url(): string | null;
        index_safe(index: number): Release;
        is_empty(): boolean;
        load_from_bytes(context: Context | null, bytes: GLib.Bytes | Uint8Array): boolean;
        set_context(context: Context): void;
        set_kind(kind: ReleaseListKind): void;
        set_size(size: number): void;
        set_url(url: string): void;
        sort(): void;
    }
    namespace Review {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::date": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::locale": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::rating": (pspec: GObject.ParamSpec) => void;
            "notify::reviewer-id": (pspec: GObject.ParamSpec) => void;
            "notify::reviewer-name": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            date: Review;
            description: string;
            flags: bigint | number;
            id: string;
            locale: string;
            priority: number;
            rating: number;
            reviewer_id: string;
            reviewerId: string;
            reviewer_name: string;
            reviewerName: string;
            summary: string;
            version: string;
        }
    }
    class Review extends GObject.Object {
        static $gtype: GObject.GType<Review>;
        get date(): Review;
        set date(val: Review);
        get description(): string;
        set description(val: string);
        get flags(): number;
        set flags(val: bigint | number);
        get id(): string;
        set id(val: string);
        get locale(): string;
        set locale(val: string);
        get priority(): number;
        set priority(val: number);
        get rating(): number;
        set rating(val: number);
        get reviewer_id(): string;
        set reviewer_id(val: string);
        get reviewerId(): string;
        set reviewerId(val: string);
        get reviewer_name(): string;
        set reviewer_name(val: string);
        get reviewerName(): string;
        set reviewerName(val: string);
        get summary(): string;
        set summary(val: string);
        get version(): string;
        set version(val: string);
        $signals: Review.SignalSignatures;
        constructor(properties?: Partial<Review.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Review;
        connect<K extends keyof Review.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Review.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Review.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Review.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Review.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_flags(flags: ReviewFlags): void;
        add_metadata(key: string, value: string): void;
        equal(review2: Review): boolean;
        get_date(): GLib.DateTime;
        get_description(): string;
        get_flags(): ReviewFlags;
        get_id(): string;
        get_locale(): string;
        get_metadata_item(key: string): string;
        get_priority(): number;
        get_rating(): number;
        get_reviewer_id(): string;
        get_reviewer_name(): string;
        get_summary(): string;
        get_version(): string;
        set_date(date: GLib.DateTime): void;
        set_description(description: string): void;
        set_flags(flags: ReviewFlags): void;
        set_id(id: string): void;
        set_locale(locale: string): void;
        set_priority(priority: number): void;
        set_rating(rating: number): void;
        set_reviewer_id(reviewer_id: string): void;
        set_reviewer_name(reviewer_name: string): void;
        set_summary(summary: string): void;
        set_version(version: string): void;
    }
    namespace Screenshot {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Screenshot extends GObject.Object {
        static $gtype: GObject.GType<Screenshot>;
        $signals: Screenshot.SignalSignatures;
        constructor(properties?: Partial<Screenshot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Screenshot;
        connect<K extends keyof Screenshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Screenshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Screenshot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screenshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_image(image: Image): void;
        add_video(video: Video): void;
        clear_images(): void;
        get_caption(): string;
        get_context(): Context | null;
        get_environment(): string | null;
        get_image(width: number, height: number, scale: number): Image | null;
        get_images(): Image[];
        get_images_all(): Image[];
        get_kind(): ScreenshotKind;
        get_media_kind(): ScreenshotMediaKind;
        get_videos(): Video[];
        get_videos_all(): Video[];
        is_valid(): boolean;
        set_caption(caption: string, locale: string): void;
        set_context(context: Context): void;
        set_environment(env_id: string | null): void;
        set_kind(kind: ScreenshotKind): void;
    }
    namespace Suggested {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Suggested extends GObject.Object {
        static $gtype: GObject.GType<Suggested>;
        $signals: Suggested.SignalSignatures;
        constructor(properties?: Partial<Suggested.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Suggested;
        connect<K extends keyof Suggested.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggested.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Suggested.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggested.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Suggested.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Suggested.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_id(cid: string): void;
        get_ids(): string[];
        get_kind(): SuggestedKind;
        is_valid(): boolean;
        set_kind(kind: SuggestedKind): void;
    }
    namespace SystemInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SystemInfo extends GObject.Object {
        static $gtype: GObject.GType<SystemInfo>;
        $signals: SystemInfo.SignalSignatures;
        constructor(properties?: Partial<SystemInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SystemInfo;
        static new_template_for_chassis(chassis: ChassisKind): SystemInfo;
        connect<K extends keyof SystemInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SystemInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SystemInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SystemInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_device_name_for_modalias(modalias: string, allow_fallback: boolean): string;
        get_display_length(side: DisplaySideKind): number;
        get_gui_available(): boolean;
        get_kernel_name(): string;
        get_kernel_version(): string;
        get_memory_total(): number;
        get_modaliases(): string[];
        get_os_cid(): string;
        get_os_homepage(): string;
        get_os_id(): string;
        get_os_name(): string;
        get_os_version(): string;
        has_device_matching_modalias(modalias_glob: string): boolean;
        has_input_control(kind: ControlKind): CheckResult;
        modalias_to_syspath(modalias: string): string;
        set_display_length(side: DisplaySideKind, value_dip: bigint | number): void;
        set_gui_available(available: boolean): void;
        set_input_control(kind: ControlKind, found: boolean): void;
    }
    namespace Translation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Translation extends GObject.Object {
        static $gtype: GObject.GType<Translation>;
        $signals: Translation.SignalSignatures;
        constructor(properties?: Partial<Translation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Translation;
        connect<K extends keyof Translation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Translation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Translation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Translation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_id(): string;
        get_kind(): TranslationKind;
        get_source_locale(): string;
        set_id(id: string): void;
        set_kind(kind: TranslationKind): void;
        set_source_locale(locale: string | null): void;
    }
    namespace Validator {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Validator extends GObject.Object {
        static $gtype: GObject.GType<Validator>;
        $signals: Validator.SignalSignatures;
        constructor(properties?: Partial<Validator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Validator;
        connect<K extends keyof Validator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Validator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Validator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Validator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Validator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Validator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_override(tag: string, severity_override: IssueSeverity): boolean;
        add_release_bytes(release_fname: string, release_metadata: GLib.Bytes | Uint8Array): boolean;
        add_release_file(release_file: Gio.File): boolean;
        check_success(): boolean;
        clear_release_data(): void;
        get_allow_net(): boolean;
        get_issue_files_count(): number;
        get_issues(): ValidatorIssue[];
        get_issues_per_file(): { [key: string]: any };
        get_report_yaml(): string;
        get_strict(): boolean;
        get_tag_explanation(tag: string): string;
        get_tag_severity(tag: string): IssueSeverity;
        get_tags(): string[];
        set_allow_net(value: boolean): void;
        set_strict(is_strict: boolean): void;
        validate_bytes(metadata: GLib.Bytes | Uint8Array): boolean;
        validate_data(metadata: string): boolean;
        validate_file(metadata_file: Gio.File): boolean;
        validate_tree(root_dir: string): boolean;
    }
    namespace ValidatorIssue {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ValidatorIssue extends GObject.Object {
        static $gtype: GObject.GType<ValidatorIssue>;
        $signals: ValidatorIssue.SignalSignatures;
        constructor(properties?: Partial<ValidatorIssue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ValidatorIssue;
        connect<K extends keyof ValidatorIssue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValidatorIssue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValidatorIssue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ValidatorIssue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValidatorIssue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ValidatorIssue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cid(): string;
        get_explanation(): string;
        get_filename(): string;
        get_hint(): string;
        get_line(): number;
        get_location(): string;
        get_severity(): IssueSeverity;
        get_tag(): string;
        set_cid(cid: string): void;
        set_explanation(explanation: string): void;
        set_filename(fname: string): void;
        set_hint(hint: string): void;
        set_line(line: bigint | number): void;
        set_severity(severity: IssueSeverity): void;
        set_tag(tag: string): void;
    }
    namespace Video {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Video extends GObject.Object {
        static $gtype: GObject.GType<Video>;
        $signals: Video.SignalSignatures;
        constructor(properties?: Partial<Video.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Video;
        connect<K extends keyof Video.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Video.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Video.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Video.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Video.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_codec_kind(): VideoCodecKind;
        get_container_kind(): VideoContainerKind;
        get_height(): number;
        get_locale(): string;
        get_url(): string;
        get_width(): number;
        set_codec_kind(kind: VideoCodecKind): void;
        set_container_kind(kind: VideoContainerKind): void;
        set_height(height: number): void;
        set_locale(locale: string): void;
        set_url(url: string): void;
        set_width(width: number): void;
    }
    type AgreementClass = typeof Agreement;
    type AgreementSectionClass = typeof AgreementSection;
    type ArtifactClass = typeof Artifact;
    type BrandingClass = typeof Branding;
    class BrandingColorIter {
        static $gtype: GObject.GType<BrandingColorIter>;
        constructor(properties?: Partial<{}>);
        init(branding: Branding): void;
        next(): [boolean, ColorKind | null, ColorSchemeKind | null, string];
    }
    type BundleClass = typeof Bundle;
    type CategoryClass = typeof Category;
    type ChecksumClass = typeof Checksum;
    type ComponentBoxClass = typeof ComponentBox;
    type ComponentClass = typeof Component;
    type ContentRatingClass = typeof ContentRating;
    type ContextClass = typeof Context;
    type DeveloperClass = typeof Developer;
    type IconClass = typeof Icon;
    type ImageClass = typeof Image;
    type IssueClass = typeof Issue;
    type LaunchableClass = typeof Launchable;
    type MetadataClass = typeof Metadata;
    type PoolClass = typeof Pool;
    type ProvidedClass = typeof Provided;
    type ReferenceClass = typeof Reference;
    type RelationCheckResultClass = typeof RelationCheckResult;
    type RelationClass = typeof Relation;
    type ReleaseClass = typeof Release;
    type ReleaseListClass = typeof ReleaseList;
    type ReviewClass = typeof Review;
    type ScreenshotClass = typeof Screenshot;
    type SuggestedClass = typeof Suggested;
    type SystemInfoClass = typeof SystemInfo;
    type TranslationClass = typeof Translation;
    type ValidatorClass = typeof Validator;
    type ValidatorIssueClass = typeof ValidatorIssue;
    type VideoClass = typeof Video;
    const __name__: string;
    const __version__: string;
}
export default AppStream;
}
declare module 'gi://AppStream' {
    import AppStream10 from 'gi://AppStream?version=1.0';
    export default AppStream10;
}
