declare module 'gi://GstVa?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstVa {
    export namespace VaFeature {
        export const $gtype: GObject.GType<VaFeature>;
    }
    enum VaFeature {
        DISABLED,
        ENABLED,
        AUTO,
    }
    enum VaImplementation {
        MESA_GALLIUM,
        INTEL_I965,
        INTEL_IHD,
        OTHER,
        INVALID,
    }
    const ALLOCATOR_VASURFACE: string;
    const CAPS_FEATURE_MEMORY_VA: string;
    const MAP_VA: number;
    const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string;
    function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void;
    function buffer_pool_config_set_va_allocation_params(config: Gst.Structure, usage_hint: number, use_derived: VaFeature): void;
    function context_get_va_display(context: Gst.Context, type_name: string, render_device_path: string): [boolean, VaDisplay];
    function context_set_va_display(context: Gst.Context, display: VaDisplay): void;
    function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean;
    function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay;
    function va_context_query(element: Gst.Element, context_type: string): void;
    function va_dmabuf_get_modifier_for_format(display: VaDisplay, format: GstVideo.VideoFormat, usage_hint: number): number;
    function va_dmabuf_memories_setup(display: VaDisplay, drm_info: GstVideo.VideoInfoDmaDrm, mem: Gst.Memory[], fds: (bigint | number)[], offset: (bigint | number)[], usage_hint: number): boolean;
    function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void;
    function va_ensure_element_data(element: null, render_device_path: string): [boolean, VaDisplay];
    function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean;
    function va_handle_set_context(element: Gst.Element, context: Gst.Context, render_device_path: string): [boolean, VaDisplay];
    function va_memory_peek_display(mem: Gst.Memory): VaDisplay;
    namespace VaAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class VaAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VaAllocator>;
        $signals: VaAllocator.SignalSignatures;
        constructor(properties?: Partial<VaAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: VaDisplay, surface_formats: number[]): VaAllocator;
        connect<K extends keyof VaAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static alloc(allocator: Gst.Allocator): Gst.Memory;
        static flush(allocator: Gst.Allocator): void;
        static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfo | null, number, boolean];
        static peek_display(allocator: Gst.Allocator): VaDisplay;
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        static set_format(allocator: Gst.Allocator, info: GstVideo.VideoInfo, usage_hint: number, feat_use_derived: VaFeature): [boolean, GstVideo.VideoInfo];
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }
    namespace VaDisplay {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::va-display": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            description: string;
            va_display: never;
            vaDisplay: never;
        }
    }
    class VaDisplay extends Gst.Object {
        static $gtype: GObject.GType<VaDisplay>;
        get description(): string;
        get va_display(): null;
        get vaDisplay(): null;
        $signals: VaDisplay.SignalSignatures;
        constructor(properties?: Partial<VaDisplay.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VaDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_va_display(): null;
        check_version(major: number, minor: number): boolean;
        get_implementation(): VaImplementation;
        get_va_dpy(): null;
        initialize(): boolean;
    }
    namespace VaDisplayDrm {
        interface SignalSignatures extends VaDisplay.SignalSignatures {
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::va-display": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VaDisplay.ConstructorProps {
            path: string;
        }
    }
    class VaDisplayDrm extends VaDisplay {
        static $gtype: GObject.GType<VaDisplayDrm>;
        get path(): string;
        $signals: VaDisplayDrm.SignalSignatures;
        constructor(properties?: Partial<VaDisplayDrm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_path(path: string): VaDisplayDrm;
        connect<K extends keyof VaDisplayDrm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplayDrm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaDisplayDrm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplayDrm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaDisplayDrm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaDisplayDrm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VaDisplayWrapped {
        interface SignalSignatures extends VaDisplay.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::va-display": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VaDisplay.ConstructorProps {}
    }
    class VaDisplayWrapped extends VaDisplay {
        static $gtype: GObject.GType<VaDisplayWrapped>;
        $signals: VaDisplayWrapped.SignalSignatures;
        constructor(properties?: Partial<VaDisplayWrapped.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](handle: null): VaDisplayWrapped;
        connect<K extends keyof VaDisplayWrapped.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplayWrapped.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaDisplayWrapped.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDisplayWrapped.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaDisplayWrapped.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaDisplayWrapped.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VaDmabufAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class VaDmabufAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VaDmabufAllocator>;
        $signals: VaDmabufAllocator.SignalSignatures;
        constructor(properties?: Partial<VaDmabufAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: VaDisplay): VaDmabufAllocator;
        connect<K extends keyof VaDmabufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDmabufAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaDmabufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaDmabufAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaDmabufAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaDmabufAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static flush(allocator: Gst.Allocator): void;
        static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfoDmaDrm | null, number];
        static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
        static set_format(allocator: Gst.Allocator, usage_hint: number): [boolean, GstVideo.VideoInfoDmaDrm];
        static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    }
    namespace VaPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class VaPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VaPool>;
        $signals: VaPool.SignalSignatures;
        constructor(properties?: Partial<VaPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VaPool;
        static new_with_config(caps: Gst.Caps, min_buffers: number, max_buffers: number, usage_hint: number, use_derived: VaFeature, allocator: Gst.Allocator, alloc_params: Gst.AllocationParams): VaPool;
        connect<K extends keyof VaPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VaPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VaPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VaPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VaPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_buffer_size(pool: Gst.BufferPool): [boolean, number];
        static requires_video_meta(pool: Gst.BufferPool): boolean;
    }
    type VaDisplayClass = typeof VaDisplay;
    type VaDisplayDrmClass = typeof VaDisplayDrm;
    type VaDisplayWrappedClass = typeof VaDisplayWrapped;
    const __name__: string;
    const __version__: string;
}
export default GstVa;
}
declare module 'gi://GstVa' {
    import GstVa10 from 'gi://GstVa?version=1.0';
    export default GstVa10;
}
