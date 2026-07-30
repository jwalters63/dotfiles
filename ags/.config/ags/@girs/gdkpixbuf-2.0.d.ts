declare module 'gi://GdkPixbuf?version=2.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GdkPixbuf {
    export namespace Colorspace {
        export const $gtype: GObject.GType<Colorspace>;
    }
    enum Colorspace {
        RGB,
    }
    export namespace InterpType {
        export const $gtype: GObject.GType<InterpType>;
    }
    enum InterpType {
        NEAREST,
        TILES,
        BILINEAR,
        HYPER,
    }
    export namespace PixbufAlphaMode {
        export const $gtype: GObject.GType<PixbufAlphaMode>;
    }
    enum PixbufAlphaMode {
        BILEVEL,
        FULL,
    }
    class PixbufError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static CORRUPT_IMAGE: number;
        static INSUFFICIENT_MEMORY: number;
        static BAD_OPTION: number;
        static UNKNOWN_TYPE: number;
        static UNSUPPORTED_OPERATION: number;
        static FAILED: number;
        static INCOMPLETE_ANIMATION: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace PixbufRotation {
        export const $gtype: GObject.GType<PixbufRotation>;
    }
    enum PixbufRotation {
        NONE,
        COUNTERCLOCKWISE,
        UPSIDEDOWN,
        CLOCKWISE,
    }
    const PIXBUF_MAJOR: number;
    const PIXBUF_MICRO: number;
    const PIXBUF_MINOR: number;
    const PIXBUF_VERSION: string;
    function pixbuf_error_quark(): GLib.Quark;
    interface PixbufDestroyNotify {
        (pixels: Uint8Array): void;
    }
    interface PixbufModuleFillInfoFunc {
        (info: PixbufFormat): void;
    }
    interface PixbufModuleFillVtableFunc {
        (module: PixbufModule): void;
    }
    interface PixbufModuleIncrementLoadFunc {
        (context: null, buf: Uint8Array): boolean;
    }
    interface PixbufModuleLoadAnimationFunc {
        (f: null): PixbufAnimation;
    }
    interface PixbufModuleLoadFunc {
        (f: null): Pixbuf;
    }
    interface PixbufModuleLoadXpmDataFunc {
        (data: string[]): Pixbuf;
    }
    interface PixbufModulePreparedFunc {
        (pixbuf: Pixbuf, anim: PixbufAnimation): void;
    }
    interface PixbufModuleSaveFunc {
        (f: null, pixbuf: Pixbuf, param_keys: string[] | null, param_values: string[] | null): boolean;
    }
    interface PixbufModuleSaveOptionSupportedFunc {
        (option_key: string): boolean;
    }
    interface PixbufModuleSizeFunc {
        (width: number, height: number): void;
    }
    interface PixbufModuleStopLoadFunc {
        (context: null): boolean;
    }
    interface PixbufModuleUpdatedFunc {
        (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void;
    }
    interface PixbufSaveFunc {
        (buf: Uint8Array): boolean;
    }
    enum PixbufFormatFlags {
        WRITABLE,
        SCALABLE,
        THREADSAFE,
    }
    namespace Pixbuf {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bits-per-sample": (pspec: GObject.ParamSpec) => void;
            "notify::colorspace": (pspec: GObject.ParamSpec) => void;
            "notify::has-alpha": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::n-channels": (pspec: GObject.ParamSpec) => void;
            "notify::pixel-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::pixels": (pspec: GObject.ParamSpec) => void;
            "notify::rowstride": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Icon.ConstructorProps, Gio.LoadableIcon.ConstructorProps {
            bits_per_sample: number;
            bitsPerSample: number;
            colorspace: Colorspace;
            has_alpha: boolean;
            hasAlpha: boolean;
            height: number;
            n_channels: number;
            nChannels: number;
            pixel_bytes: GLib.Bytes | Uint8Array;
            pixelBytes: GLib.Bytes | Uint8Array;
            pixels: never;
            rowstride: number;
            width: number;
        }
    }
    class Pixbuf extends GObject.Object implements Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<Pixbuf>;
        get bits_per_sample(): number;
        get bitsPerSample(): number;
        get colorspace(): Colorspace;
        get has_alpha(): boolean;
        get hasAlpha(): boolean;
        get height(): number;
        get n_channels(): number;
        get nChannels(): number;
        get pixel_bytes(): GLib.Bytes;
        get pixelBytes(): GLib.Bytes;
        get pixels(): null;
        get rowstride(): number;
        get width(): number;
        $signals: Pixbuf.SignalSignatures;
        constructor(properties?: Partial<Pixbuf.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): Pixbuf;
        static new_from_bytes(data: GLib.Bytes | Uint8Array, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf;
        static new_from_data(data: Uint8Array | string, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn: PixbufDestroyNotify | null): Pixbuf;
        static new_from_file(filename: string): Pixbuf;
        static new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf;
        static new_from_file_at_size(filename: string, width: number, height: number): Pixbuf;
        static new_from_inline(data: Uint8Array | string, copy_pixels: boolean): Pixbuf;
        static new_from_resource(resource_path: string): Pixbuf;
        static new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf;
        static new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): Pixbuf;
        static new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null): Pixbuf;
        static new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf;
        static new_from_xpm_data(data: string[]): Pixbuf;
        connect<K extends keyof Pixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pixbuf.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pixbuf.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pixbuf.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pixbuf.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number;
        static get_file_info(filename: string): [PixbufFormat | null, number, number];
        static get_file_info_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Pixbuf> | null): void;
        static get_file_info_finish(async_result: Gio.AsyncResult): [PixbufFormat | null, number, number];
        static get_formats(): PixbufFormat[];
        static init_modules(path: string): boolean;
        static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Pixbuf> | null): void;
        static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Pixbuf> | null): void;
        static save_to_stream_finish(async_result: Gio.AsyncResult): boolean;
        add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf | null;
        apply_embedded_orientation(): Pixbuf | null;
        composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void;
        composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void;
        composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null;
        copy(): Pixbuf | null;
        copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void;
        copy_options(dest_pixbuf: Pixbuf): boolean;
        fill(pixel: number): void;
        flip(horizontal: boolean): Pixbuf | null;
        get_bits_per_sample(): number;
        get_byte_length(): number;
        get_colorspace(): Colorspace;
        get_has_alpha(): boolean;
        get_height(): number;
        get_n_channels(): number;
        get_option(key: string): string | null;
        get_options(): { [key: string]: string };
        get_pixels(): Uint8Array;
        get_rowstride(): number;
        get_width(): number;
        new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf;
        read_pixel_bytes(): GLib.Bytes;
        read_pixels(): number;
        remove_option(key: string): boolean;
        rotate_simple(angle: PixbufRotation): Pixbuf | null;
        saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void;
        save_to_bufferv(type: string, option_keys: string[] | null, option_values: string[] | null): [boolean, Uint8Array];
        save_to_callbackv(save_func: PixbufSaveFunc, type: string, option_keys: string[] | null, option_values: string[] | null): boolean;
        save_to_streamv(stream: Gio.OutputStream, type: string, option_keys: string[] | null, option_values: string[] | null, cancellable: Gio.Cancellable | null): boolean;
        save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys: string[] | null, option_values: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        savev(filename: string, type: string, option_keys: string[] | null, option_values: string[] | null): boolean;
        scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void;
        scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null;
        set_option(key: string, value: string): boolean;
        equal(icon2: Gio.Icon | null): boolean;
        hash(): number;
        serialize(): GLib.Variant | null;
        to_string(): string | null;
        vfunc_equal(icon2: Gio.Icon | null): boolean;
        vfunc_hash(): number;
        vfunc_serialize(): GLib.Variant | null;
        vfunc_to_tokens(): [boolean, string[], number];
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_async(size: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream, string]> | void;
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];
        vfunc_load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }
    namespace PixbufAnimation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PixbufAnimation extends GObject.Object {
        static $gtype: GObject.GType<PixbufAnimation>;
        $signals: PixbufAnimation.SignalSignatures;
        constructor(properties?: Partial<PixbufAnimation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_file(filename: string): PixbufAnimation;
        static new_from_resource(resource_path: string): PixbufAnimation;
        static new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): PixbufAnimation;
        static new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation;
        connect<K extends keyof PixbufAnimation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufAnimation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufAnimation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufAnimation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufAnimation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufAnimation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PixbufAnimation> | null): void;
        vfunc_get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter;
        vfunc_get_size(width: number, height: number): void;
        vfunc_get_static_image(): Pixbuf;
        vfunc_is_static_image(): boolean;
        get_height(): number;
        get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter;
        get_static_image(): Pixbuf;
        get_width(): number;
        is_static_image(): boolean;
    }
    namespace PixbufAnimationIter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PixbufAnimationIter extends GObject.Object {
        static $gtype: GObject.GType<PixbufAnimationIter>;
        $signals: PixbufAnimationIter.SignalSignatures;
        constructor(properties?: Partial<PixbufAnimationIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PixbufAnimationIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufAnimationIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufAnimationIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufAnimationIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufAnimationIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufAnimationIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_advance(current_time: GLib.TimeVal | null): boolean;
        vfunc_get_delay_time(): number;
        vfunc_get_pixbuf(): Pixbuf;
        vfunc_on_currently_loading_frame(): boolean;
        advance(current_time: GLib.TimeVal | null): boolean;
        get_delay_time(): number;
        get_pixbuf(): Pixbuf;
        on_currently_loading_frame(): boolean;
    }
    namespace PixbufLoader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "area-prepared": () => void;
            "area-updated": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            closed: () => void;
            "size-prepared": (arg0: number, arg1: number) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class PixbufLoader extends GObject.Object {
        static $gtype: GObject.GType<PixbufLoader>;
        $signals: PixbufLoader.SignalSignatures;
        constructor(properties?: Partial<PixbufLoader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): PixbufLoader;
        static new_with_mime_type(mime_type: string): PixbufLoader;
        static new_with_type(image_type: string): PixbufLoader;
        connect<K extends keyof PixbufLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufLoader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufLoader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufLoader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_area_prepared(): void;
        vfunc_area_updated(x: number, y: number, width: number, height: number): void;
        vfunc_closed(): void;
        vfunc_size_prepared(width: number, height: number): void;
        close(): boolean;
        get_animation(): PixbufAnimation | null;
        get_format(): PixbufFormat | null;
        get_pixbuf(): Pixbuf | null;
        set_size(width: number, height: number): void;
        write(buf: Uint8Array | string): boolean;
        write_bytes(buffer: GLib.Bytes | Uint8Array): boolean;
    }
    namespace PixbufNonAnim {
        interface SignalSignatures extends PixbufAnimation.SignalSignatures {}
        interface ConstructorProps extends PixbufAnimation.ConstructorProps {}
    }
    class PixbufNonAnim extends PixbufAnimation {
        static $gtype: GObject.GType<PixbufNonAnim>;
        $signals: PixbufNonAnim.SignalSignatures;
        constructor(properties?: Partial<PixbufNonAnim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](pixbuf: Pixbuf): PixbufNonAnim;
        connect<K extends keyof PixbufNonAnim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufNonAnim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufNonAnim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufNonAnim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufNonAnim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufNonAnim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace PixbufSimpleAnim {
        interface SignalSignatures extends PixbufAnimation.SignalSignatures {
            "notify::loop": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends PixbufAnimation.ConstructorProps {
            loop: boolean;
        }
    }
    class PixbufSimpleAnim extends PixbufAnimation {
        static $gtype: GObject.GType<PixbufSimpleAnim>;
        get loop(): boolean;
        set loop(val: boolean);
        $signals: PixbufSimpleAnim.SignalSignatures;
        constructor(properties?: Partial<PixbufSimpleAnim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](width: number, height: number, rate: number): PixbufSimpleAnim;
        connect<K extends keyof PixbufSimpleAnim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufSimpleAnim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufSimpleAnim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufSimpleAnim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufSimpleAnim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufSimpleAnim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_frame(pixbuf: Pixbuf): void;
        get_loop(): boolean;
        set_loop(loop: boolean): void;
    }
    namespace PixbufSimpleAnimIter {
        interface SignalSignatures extends PixbufAnimationIter.SignalSignatures {}
        interface ConstructorProps extends PixbufAnimationIter.ConstructorProps {}
    }
    class PixbufSimpleAnimIter extends PixbufAnimationIter {
        static $gtype: GObject.GType<PixbufSimpleAnimIter>;
        $signals: PixbufSimpleAnimIter.SignalSignatures;
        constructor(properties?: Partial<PixbufSimpleAnimIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PixbufSimpleAnimIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufSimpleAnimIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixbufSimpleAnimIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PixbufSimpleAnimIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixbufSimpleAnimIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PixbufSimpleAnimIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type PixbufAnimationClass = typeof PixbufAnimation;
    type PixbufAnimationIterClass = typeof PixbufAnimationIter;
    class PixbufFormat {
        static $gtype: GObject.GType<PixbufFormat>;
        name: string;
        signature: PixbufModulePattern;
        domain: string;
        description: string;
        mime_types: string[];
        extensions: string[];
        flags: number;
        disabled: boolean;
        license: string;
        constructor(properties?: Partial<{
            name: string;
            domain: string;
            description: string;
            mime_types: string[];
            extensions: string[];
            flags: number;
            disabled: boolean;
            license: string;
        }>);
        copy(): PixbufFormat | null;
        free(): void;
        get_description(): string | null;
        get_extensions(): string[] | null;
        get_license(): string | null;
        get_mime_types(): string[] | null;
        get_name(): string | null;
        is_disabled(): boolean;
        is_save_option_supported(option_key: string): boolean;
        is_scalable(): boolean;
        is_writable(): boolean;
        set_disabled(disabled: boolean): void;
    }
    type PixbufLoaderClass = typeof PixbufLoader;
    class PixbufModule {
        static $gtype: GObject.GType<PixbufModule>;
        module_name: string;
        module_path: string;
        info: PixbufFormat;
        load: PixbufModuleLoadFunc;
        load_xpm_data: PixbufModuleLoadXpmDataFunc;
        stop_load: PixbufModuleStopLoadFunc;
        load_increment: PixbufModuleIncrementLoadFunc;
        load_animation: PixbufModuleLoadAnimationFunc;
        save: PixbufModuleSaveFunc;
        is_save_option_supported: PixbufModuleSaveOptionSupportedFunc;
    }
    class PixbufModulePattern {
        static $gtype: GObject.GType<PixbufModulePattern>;
        prefix: string;
        mask: string;
        relevance: number;
        constructor(properties?: Partial<{
            prefix: string;
            mask: string;
            relevance: number;
        }>);
    }
    type PixbufSimpleAnimClass = typeof PixbufSimpleAnim;
    const __name__: string;
    const __version__: string;
}
export default GdkPixbuf;
}
declare module 'gi://GdkPixbuf' {
    import GdkPixbuf20 from 'gi://GdkPixbuf?version=2.0';
    export default GdkPixbuf20;
}
