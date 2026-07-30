declare module 'gi://AppStreamCompose?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type AppStream from 'gi://AppStream?version=1.0';
export namespace AppStreamCompose {
    class ComposeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace IconState {
        export const $gtype: GObject.GType<IconState>;
    }
    enum IconState {
        IGNORED,
        CACHED_REMOTE,
        CACHED_ONLY,
        REMOTE_ONLY,
    }
    class ImageError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static UNSUPPORTED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace ImageFormat {
        export const $gtype: GObject.GType<ImageFormat>;
    }
    enum ImageFormat {
        UNKNOWN,
        PNG,
        JXL,
        AVIF,
        WEBP,
        SVG,
        SVGZ,
        JPEG,
        GIF,
        XPM,
    }
    function build_component_global_id(component_id: string, checksum: string): string;
    function compose_error_quark(): GLib.Quark;
    function compute_content_checksum_for_data(data: string, length: bigint | number): string;
    function filename_from_url(url: string): string;
    function globals_add_hint_tag(tag: string, severity: AppStream.IssueSeverity, explanation: string, overrideExisting: boolean): boolean;
    function globals_clear(): void;
    function globals_get_ffprobe_binary(): string;
    function globals_get_hint_tags(): string[];
    function globals_get_optipng_binary(): string;
    function globals_get_tmp_dir(): string;
    function globals_get_tmp_dir_create(): string;
    function globals_get_use_optipng(): boolean;
    function globals_hint_tag_explanation(tag: string): string;
    function globals_hint_tag_severity(tag: string): AppStream.IssueSeverity;
    function globals_set_ffprobe_binary(path: string): void;
    function globals_set_optipng_binary(path: string): void;
    function globals_set_tmp_dir(path: string): void;
    function globals_set_use_optipng(enabled: boolean): void;
    function icon_state_from_string(state_str: string): IconState;
    function icon_state_to_string(istate: IconState): string;
    function image_error_quark(): GLib.Quark;
    function image_format_from_filename(fname: string): ImageFormat;
    function image_format_from_string(str: string): ImageFormat;
    function image_format_to_string(format: ImageFormat): string;
    function render_svg_to_file(stream: Gio.InputStream, width: number, height: number, format: ImageFormat, filename: string): boolean;
    interface CheckMetadataEarlyFn {
        (cres: Result, unit: Unit): void;
    }
    export namespace ComposeFlags {
        export const $gtype: GObject.GType<ComposeFlags>;
    }
    enum ComposeFlags {
        NONE,
        USE_THREADS,
        ALLOW_NET,
        VALIDATE,
        STORE_SCREENSHOTS,
        ALLOW_SCREENCASTS,
        PROCESS_FONTS,
        PROCESS_TRANSLATIONS,
        IGNORE_ICONS,
        PROCESS_UNPAIRED_DESKTOP,
        PROPAGATE_CUSTOM,
        PROPAGATE_ARTIFACTS,
        NO_FINAL_CHECK,
        NO_PARTIAL_URLS,
    }
    export namespace ImageLoadFlags {
        export const $gtype: GObject.GType<ImageLoadFlags>;
    }
    enum ImageLoadFlags {
        NONE,
        SHARPEN,
        ALLOW_UNSUPPORTED,
        ALWAYS_RESIZE,
    }
    export namespace ImageSaveFlags {
        export const $gtype: GObject.GType<ImageSaveFlags>;
    }
    enum ImageSaveFlags {
        NONE,
        OPTIMIZE,
        PAD_16_9,
        SHARPEN,
        BLUR,
    }
    namespace Compose {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Compose extends GObject.Object {
        static $gtype: GObject.GType<Compose>;
        $signals: Compose.SignalSignatures;
        constructor(properties?: Partial<Compose.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Compose;
        connect<K extends keyof Compose.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Compose.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Compose.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Compose.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Compose.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Compose.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_allowed_cid(component_id: string): void;
        add_custom_allowed(key_id: string): void;
        add_flags(flags: ComposeFlags): void;
        add_unit(unit: Unit): void;
        fetch_components(): AppStream.Component[];
        finalize_result(result: Result): void;
        finalize_results(): void;
        get_cainfo(): string;
        get_data_result_dir(): string;
        get_flags(): ComposeFlags;
        get_format(): AppStream.FormatKind;
        get_hints_result_dir(): string;
        get_icon_policy(): IconPolicy;
        get_icons_result_dir(): string;
        get_locale_unit(): Unit | null;
        get_max_screenshot_size(): number;
        get_media_baseurl(): string;
        get_media_result_dir(): string;
        get_origin(): string;
        get_prefix(): string;
        get_results(): Result[];
        has_errors(): boolean;
        remove_custom_allowed(key_id: string): void;
        remove_flags(flags: ComposeFlags): void;
        reset(): void;
        run(cancellable: Gio.Cancellable | null): Result[];
        set_cainfo(cainfo: string): void;
        set_check_metadata_early_func(func: CheckMetadataEarlyFn): void;
        set_data_result_dir(dir: string): void;
        set_flags(flags: ComposeFlags): void;
        set_format(kind: AppStream.FormatKind): void;
        set_hints_result_dir(dir: string): void;
        set_icon_policy(policy: IconPolicy): void;
        set_icons_result_dir(dir: string): void;
        set_locale_unit(locale_unit: Unit): void;
        set_max_screenshot_size(size_bytes: bigint | number): void;
        set_media_baseurl(url: string | null): void;
        set_media_result_dir(dir: string): void;
        set_origin(origin: string): void;
        set_prefix(prefix: string): void;
    }
    namespace DirectoryUnit {
        interface SignalSignatures extends Unit.SignalSignatures {}
        interface ConstructorProps extends Unit.ConstructorProps {}
    }
    class DirectoryUnit extends Unit {
        static $gtype: GObject.GType<DirectoryUnit>;
        $signals: DirectoryUnit.SignalSignatures;
        constructor(properties?: Partial<DirectoryUnit.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](root_dir: string): DirectoryUnit;
        static ["new"](...args: never[]): any;
        connect<K extends keyof DirectoryUnit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DirectoryUnit.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectoryUnit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DirectoryUnit.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectoryUnit.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DirectoryUnit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_root(): string;
        set_root(root_dir: string): void;
    }
    namespace Hint {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Hint extends GObject.Object {
        static $gtype: GObject.GType<Hint>;
        $signals: Hint.SignalSignatures;
        constructor(properties?: Partial<Hint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Hint;
        static new_for_tag(tag: string): Hint;
        connect<K extends keyof Hint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Hint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Hint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Hint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_explanation_var(var_name: string, text: string): void;
        format_explanation(): string;
        get_explanation_template(): string;
        get_explanation_vars_list(): string[];
        get_severity(): AppStream.IssueSeverity;
        get_tag(): string;
        is_error(): boolean;
        is_valid(): boolean;
        set_explanation_template(explanation_tmpl: string): void;
        set_severity(severity: AppStream.IssueSeverity): void;
        set_tag(tag: string): void;
    }
    namespace IconPolicy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class IconPolicy extends GObject.Object {
        static $gtype: GObject.GType<IconPolicy>;
        $signals: IconPolicy.SignalSignatures;
        constructor(properties?: Partial<IconPolicy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): IconPolicy;
        connect<K extends keyof IconPolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconPolicy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IconPolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconPolicy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IconPolicy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IconPolicy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        from_string(serialized_policy: string): boolean;
        set_policy(icon_size: number, icon_scale: number, state: IconState): void;
        to_string(): string;
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
        static new_from_data(data: null, len: bigint | number, dest_width: number, dest_height: number, flags: ImageLoadFlags, format_hint: ImageFormat): Image;
        static new_from_file(fname: string, dest_width: number, dest_height: number, flags: ImageLoadFlags): Image;
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static supported_format_names(): never;
        get_height(): number;
        get_width(): number;
        load_filename(filename: string, dest_width: number, dest_height: number, src_size_min: number, flags: ImageLoadFlags): boolean;
        save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;
        scale(new_width: number, new_height: number): void;
        scale_to_fit(size: number): void;
        scale_to_height(new_height: number): void;
        scale_to_width(new_width: number): void;
    }
    namespace Result {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Result extends GObject.Object {
        static $gtype: GObject.GType<Result>;
        $signals: Result.SignalSignatures;
        constructor(properties?: Partial<Result.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Result;
        connect<K extends keyof Result.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Result.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Result.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Result.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Result.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Result.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_component(cpt: AppStream.Component, bytes: GLib.Bytes | Uint8Array): boolean;
        add_component_with_string(cpt: AppStream.Component, data: string): boolean;
        add_hint_by_cid(component_id: string, tag: string, kv: string): boolean;
        add_hint(cpt: AppStream.Component, tag: string, kv: string): boolean;
        components_count(): number;
        fetch_components(): AppStream.Component[];
        fetch_hints_all(): Hint[];
        gcid_for_cid(cid: string): string;
        gcid_for_component(cpt: AppStream.Component): string;
        get_bundle_id(): string;
        get_bundle_kind(): AppStream.BundleKind;
        get_component(cid: string): AppStream.Component;
        get_component_gcids(): string[];
        get_component_ids_with_hints(): string[];
        get_hints(cid: string): Hint[];
        has_hint(cpt: AppStream.Component, tag: string): boolean;
        hints_count(): number;
        is_ignored(cpt: AppStream.Component): boolean;
        remove_component(cpt: AppStream.Component): boolean;
        remove_component_by_id(cid: string): boolean;
        remove_component_full(cpt: AppStream.Component, remove_gcid: boolean): boolean;
        remove_hints_for_cid(cid: string): void;
        set_bundle_id(id: string): void;
        set_bundle_kind(kind: AppStream.BundleKind): void;
        unit_ignored(): boolean;
        update_component_gcid(cpt: AppStream.Component, bytes: GLib.Bytes | Uint8Array | null): boolean;
        update_component_gcid_with_string(cpt: AppStream.Component, data: string | null): boolean;
    }
    namespace Unit {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Unit extends GObject.Object {
        static $gtype: GObject.GType<Unit>;
        $signals: Unit.SignalSignatures;
        constructor(properties?: Partial<Unit.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Unit;
        connect<K extends keyof Unit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Unit.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Unit.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Unit.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Unit.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Unit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): void;
        vfunc_dir_exists(dirname: string): boolean;
        vfunc_file_exists(filename: string): boolean;
        vfunc_open(): boolean;
        vfunc_read_data(filename: string): GLib.Bytes | Uint8Array;
        add_relevant_path(path: string): void;
        close(): void;
        dir_exists(dirname: string): boolean;
        file_exists(filename: string): boolean;
        get_bundle_id(): string;
        get_bundle_id_safe(): string;
        get_bundle_kind(): AppStream.BundleKind;
        get_contents(): string[];
        get_relevant_paths(): string[];
        get_user_data(): null;
        open(): boolean;
        read_data(filename: string): GLib.Bytes;
        set_bundle_id(id: string): void;
        set_bundle_kind(kind: AppStream.BundleKind): void;
        set_contents(contents: string[]): void;
        set_user_data(user_data: null): void;
    }
    type ComposeClass = typeof Compose;
    type DirectoryUnitClass = typeof DirectoryUnit;
    type HintClass = typeof Hint;
    type IconPolicyClass = typeof IconPolicy;
    class IconPolicyIter {
        static $gtype: GObject.GType<IconPolicyIter>;
        constructor(properties?: Partial<{}>);
        init(ipolicy: IconPolicy): void;
        next(): [boolean, number, number, IconState | null];
    }
    type ImageClass = typeof Image;
    type ResultClass = typeof Result;
    type UnitClass = typeof Unit;
    const __name__: string;
    const __version__: string;
}
export default AppStreamCompose;
}
declare module 'gi://AppStreamCompose' {
    import AppStreamCompose10 from 'gi://AppStreamCompose?version=1.0';
    export default AppStreamCompose10;
}
