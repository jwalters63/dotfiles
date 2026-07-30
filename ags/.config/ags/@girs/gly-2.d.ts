declare module 'gi://Gly?version=2' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Gly {
    class LoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static UNKNOWN_IMAGE_FORMAT: number;
        static NO_MORE_FRAMES: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace MemoryFormat {
        export const $gtype: GObject.GType<MemoryFormat>;
    }
    enum MemoryFormat {
        B8G8R8A8_PREMULTIPLIED,
        A8R8G8B8_PREMULTIPLIED,
        R8G8B8A8_PREMULTIPLIED,
        B8G8R8A8,
        A8R8G8B8,
        R8G8B8A8,
        A8B8G8R8,
        R8G8B8,
        B8G8R8,
        R16G16B16,
        R16G16B16A16_PREMULTIPLIED,
        R16G16B16A16,
        R16G16B16_FLOAT,
        R16G16B16A16_FLOAT,
        R32G32B32_FLOAT,
        R32G32B32A32_FLOAT_PREMULTIPLIED,
        R32G32B32A32_FLOAT,
        G8A8_PREMULTIPLIED,
        G8A8,
        G8,
        G16A16_PREMULTIPLIED,
        G16A16,
        G16,
    }
    export namespace SandboxSelector {
        export const $gtype: GObject.GType<SandboxSelector>;
    }
    enum SandboxSelector {
        AUTO,
        BWRAP,
        FLATPAK_SPAWN,
        NOT_SANDBOXED,
    }
    function loader_error_quark(): GLib.Quark;
    function memory_format_has_alpha(memory_format: MemoryFormat): boolean;
    function memory_format_is_premultiplied(memory_format: MemoryFormat): boolean;
    interface LoaderGetMimeTypesDoneFunc {
        (mime_types: string[], data: null): void;
    }
    export namespace MemoryFormatSelection {
        export const $gtype: GObject.GType<MemoryFormatSelection>;
    }
    enum MemoryFormatSelection {
        B8G8R8A8_PREMULTIPLIED,
        A8R8G8B8_PREMULTIPLIED,
        R8G8B8A8_PREMULTIPLIED,
        B8G8R8A8,
        A8R8G8B8,
        R8G8B8A8,
        A8B8G8R8,
        R8G8B8,
        B8G8R8,
        R16G16B16,
        R16G16B16A16_PREMULTIPLIED,
        R16G16B16A16,
        R16G16B16_FLOAT,
        R16G16B16A16_FLOAT,
        R32G32B32_FLOAT,
        R32G32B32A32_FLOAT_PREMULTIPLIED,
        R32G32B32A32_FLOAT,
        G8A8_PREMULTIPLIED,
        G8A8,
        G8,
        G16A16_PREMULTIPLIED,
        G16A16,
        G16,
    }
    namespace Creator {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::mime-type": (pspec: GObject.ParamSpec) => void;
            "notify::sandbox-selector": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mime_type: string;
            mimeType: string;
            sandbox_selector: SandboxSelector;
            sandboxSelector: SandboxSelector;
        }
    }
    class Creator extends GObject.Object {
        static $gtype: GObject.GType<Creator>;
        get mime_type(): string;
        get mimeType(): string;
        get sandbox_selector(): SandboxSelector;
        set sandbox_selector(val: SandboxSelector);
        get sandboxSelector(): SandboxSelector;
        set sandboxSelector(val: SandboxSelector);
        $signals: Creator.SignalSignatures;
        constructor(properties?: Partial<Creator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](mime_type: string): Creator;
        connect<K extends keyof Creator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Creator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Creator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Creator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Creator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Creator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_frame(width: number, height: number, memory_format: MemoryFormat, texture: GLib.Bytes | Uint8Array): NewFrame;
        add_frame_with_stride(width: number, height: number, stride: number, memory_format: MemoryFormat, texture: GLib.Bytes | Uint8Array): NewFrame;
        add_metadata_key_value(key: string, value: string): boolean;
        create(): EncodedImage | null;
        create_async(cancellable: Gio.Cancellable | null): globalThis.Promise<EncodedImage>;
        create_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<EncodedImage> | void;
        create_finish(result: Gio.AsyncResult): EncodedImage;
        set_encoding_compression(compression: number): boolean;
        set_encoding_quality(quality: number): boolean;
        set_sandbox_selector(sandbox_selector: SandboxSelector): boolean;
    }
    namespace EncodedImage {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::data": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes | Uint8Array;
        }
    }
    class EncodedImage extends GObject.Object {
        static $gtype: GObject.GType<EncodedImage>;
        get data(): GLib.Bytes;
        $signals: EncodedImage.SignalSignatures;
        constructor(properties?: Partial<EncodedImage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof EncodedImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodedImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EncodedImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodedImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EncodedImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodedImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(): GLib.Bytes;
        get_data(...args: never[]): any;
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
        get_buf_bytes(): GLib.Bytes;
        get_color_cicp(): Cicp | null;
        get_delay(): number;
        get_height(): number;
        get_memory_format(): MemoryFormat;
        get_stride(): number;
        get_width(): number;
    }
    namespace FrameRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::loop-animation": (pspec: GObject.ParamSpec) => void;
            "notify::scale-height": (pspec: GObject.ParamSpec) => void;
            "notify::scale-width": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loop_animation: boolean;
            loopAnimation: boolean;
            scale_height: number;
            scaleHeight: number;
            scale_width: number;
            scaleWidth: number;
        }
    }
    class FrameRequest extends GObject.Object {
        static $gtype: GObject.GType<FrameRequest>;
        get loop_animation(): boolean;
        set loop_animation(val: boolean);
        get loopAnimation(): boolean;
        set loopAnimation(val: boolean);
        get scale_height(): number;
        get scaleHeight(): number;
        get scale_width(): number;
        get scaleWidth(): number;
        $signals: FrameRequest.SignalSignatures;
        constructor(properties?: Partial<FrameRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): FrameRequest;
        connect<K extends keyof FrameRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FrameRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FrameRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FrameRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_loop_animation(loop_animation: boolean): void;
        set_scale(width: number, height: number): void;
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
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_height(): number;
        get_metadata_key_value(key: string): string | null;
        get_metadata_keys(): string[];
        get_mime_type(): string;
        get_specific_frame(frame_request: FrameRequest): Frame;
        get_specific_frame_async(frame_request: FrameRequest, cancellable: Gio.Cancellable | null): globalThis.Promise<Frame>;
        get_specific_frame_async(frame_request: FrameRequest, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_specific_frame_async(frame_request: FrameRequest, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Frame> | void;
        get_specific_frame_finish(result: Gio.AsyncResult): Frame;
        get_transformation_orientation(): number;
        get_width(): number;
        next_frame(): Frame;
        next_frame_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Frame>;
        next_frame_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        next_frame_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Frame> | void;
        next_frame_finish(result: Gio.AsyncResult): Frame;
    }
    namespace Loader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::apply-transformation": (pspec: GObject.ParamSpec) => void;
            "notify::bytes": (pspec: GObject.ParamSpec) => void;
            "notify::cancellable": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::memory-format-selection": (pspec: GObject.ParamSpec) => void;
            "notify::sandbox-selector": (pspec: GObject.ParamSpec) => void;
            "notify::stream": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            apply_transformation: boolean;
            applyTransformation: boolean;
            bytes: GLib.Bytes | Uint8Array;
            cancellable: Gio.Cancellable;
            file: Gio.File;
            memory_format_selection: MemoryFormatSelection;
            memoryFormatSelection: MemoryFormatSelection;
            sandbox_selector: SandboxSelector;
            sandboxSelector: SandboxSelector;
            stream: Gio.InputStream;
        }
    }
    class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;
        get apply_transformation(): boolean;
        set apply_transformation(val: boolean);
        get applyTransformation(): boolean;
        set applyTransformation(val: boolean);
        get bytes(): GLib.Bytes;
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);
        get file(): Gio.File;
        get memory_format_selection(): MemoryFormatSelection;
        set memory_format_selection(val: MemoryFormatSelection);
        get memoryFormatSelection(): MemoryFormatSelection;
        set memoryFormatSelection(val: MemoryFormatSelection);
        get sandbox_selector(): SandboxSelector;
        set sandbox_selector(val: SandboxSelector);
        get sandboxSelector(): SandboxSelector;
        set sandboxSelector(val: SandboxSelector);
        get stream(): Gio.InputStream;
        $signals: Loader.SignalSignatures;
        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](file: Gio.File): Loader;
        static new_for_bytes(bytes: GLib.Bytes | Uint8Array): Loader;
        static new_for_stream(stream: Gio.InputStream): Loader;
        connect<K extends keyof Loader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Loader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Loader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Loader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_mime_types(): string[];
        static get_mime_types_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Loader> | null): void;
        static get_mime_types_finish(result: Gio.AsyncResult): string[];
        load(): Image;
        load_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Image>;
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Image> | void;
        load_finish(result: Gio.AsyncResult): Image;
        set_accepted_memory_formats(memory_format_selection: MemoryFormatSelection): void;
        set_apply_transformations(apply_transformations: boolean): void;
        set_sandbox_selector(sandbox_selector: SandboxSelector): void;
    }
    namespace NewFrame {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class NewFrame extends GObject.Object {
        static $gtype: GObject.GType<NewFrame>;
        $signals: NewFrame.SignalSignatures;
        constructor(properties?: Partial<NewFrame.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NewFrame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NewFrame.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NewFrame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NewFrame.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NewFrame.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NewFrame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_color_icc_profile(icc_profile: GLib.Bytes | Uint8Array): boolean;
    }
    class Cicp {
        static $gtype: GObject.GType<Cicp>;
        color_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        video_full_range_flag: number;
        constructor(properties?: Partial<{
            color_primaries: number;
            transfer_characteristics: number;
            matrix_coefficients: number;
            video_full_range_flag: number;
        }>);
        copy(): Cicp;
        free(): void;
    }
    type CreatorClass = typeof Creator;
    type EncodedImageClass = typeof EncodedImage;
    type FrameClass = typeof Frame;
    type FrameRequestClass = typeof FrameRequest;
    type ImageClass = typeof Image;
    type LoaderClass = typeof Loader;
    type NewFrameClass = typeof NewFrame;
    const __name__: string;
    const __version__: string;
}
export default Gly;
}
declare module 'gi://Gly' {
    import Gly2 from 'gi://Gly?version=2';
    export default Gly2;
}
