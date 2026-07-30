declare module 'gi://GstGL?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstGL {
    class GLBaseMemoryError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static OLD_LIBS: number;
        static RESOURCE_UNAVAILABLE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace GLConfigCaveat {
        export const $gtype: GObject.GType<GLConfigCaveat>;
    }
    enum GLConfigCaveat {
        NONE,
        SLOW,
        NON_CONFORMANT,
    }
    class GLContextError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static WRONG_CONFIG: number;
        static WRONG_API: number;
        static OLD_LIBS: number;
        static CREATE_CONTEXT: number;
        static RESOURCE_UNAVAILABLE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace GLFormat {
        export const $gtype: GObject.GType<GLFormat>;
    }
    enum GLFormat {
        LUMINANCE,
        ALPHA,
        LUMINANCE_ALPHA,
        RED,
        R8,
        RG,
        RG8,
        RGB,
        RGB8,
        RGB565,
        RGB16,
        RGBA,
        RGBA8,
        RGBA16,
        DEPTH_COMPONENT16,
        DEPTH24_STENCIL8,
        RGB10_A2,
        R16,
        RG16,
    }
    export namespace GLQueryType {
        export const $gtype: GObject.GType<GLQueryType>;
    }
    enum GLQueryType {
        NONE,
        TIME_ELAPSED,
        TIMESTAMP,
    }
    class GLSLError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static COMPILE: number;
        static LINK: number;
        static PROGRAM: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class GLSLVersion {
        static $gtype: GObject.GType<GLSLVersion>;
        static NONE: number;
        static "100": number;
        static "110": number;
        static "120": number;
        static "130": number;
        static "140": number;
        static "150": number;
        static "300": number;
        static "310": number;
        static "320": number;
        static "330": number;
        static "400": number;
        static "410": number;
        static "420": number;
        static "430": number;
        static "440": number;
        static "450": number;
    }
    export namespace GLStereoDownmix {
        export const $gtype: GObject.GType<GLStereoDownmix>;
    }
    enum GLStereoDownmix {
        GREEN_MAGENTA_DUBOIS,
        RED_CYAN_DUBOIS,
        AMBER_BLUE_DUBOIS,
    }
    export namespace GLTextureTarget {
        export const $gtype: GObject.GType<GLTextureTarget>;
    }
    enum GLTextureTarget {
        NONE,
        "2D",
        RECTANGLE,
        EXTERNAL_OES,
    }
    export namespace GLUploadReturn {
        export const $gtype: GObject.GType<GLUploadReturn>;
    }
    enum GLUploadReturn {
        DONE,
        ERROR,
        UNSUPPORTED,
        RECONFIGURE,
        UNSHARED_GL_CONTEXT,
    }
    class GLWindowError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static OLD_LIBS: number;
        static RESOURCE_UNAVAILABLE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    const BUFFER_POOL_OPTION_GL_SYNC_META: string;
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string;
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string;
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string;
    const CAPS_FEATURE_MEMORY_GL_BUFFER: string;
    const CAPS_FEATURE_MEMORY_GL_MEMORY: string;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number;
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number;
    const GL_API_GLES1_NAME: string;
    const GL_API_GLES2_NAME: string;
    const GL_API_OPENGL3_NAME: string;
    const GL_API_OPENGL_NAME: string;
    const GL_BASE_MEMORY_ALLOCATOR_NAME: string;
    const GL_BUFFER_ALLOCATOR_NAME: string;
    const GL_COLOR_CONVERT_FORMATS: string;
    const GL_COLOR_CONVERT_VIDEO_CAPS: string;
    const GL_CONFIG_STRUCTURE_NAME: string;
    const GL_CONTEXT_TYPE_CGL: string;
    const GL_CONTEXT_TYPE_EAGL: string;
    const GL_CONTEXT_TYPE_EGL: string;
    const GL_CONTEXT_TYPE_GLX: string;
    const GL_CONTEXT_TYPE_WGL: string;
    const GL_DISPLAY_CONTEXT_TYPE: string;
    const GL_MEMORY_ALLOCATOR_NAME: string;
    const GL_MEMORY_PBO_ALLOCATOR_NAME: string;
    const GL_MEMORY_VIDEO_FORMATS_STR: string;
    const GL_RENDERBUFFER_ALLOCATOR_NAME: string;
    const GL_TEXTURE_TARGET_2D_STR: string;
    const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string;
    const GL_TEXTURE_TARGET_RECTANGLE_STR: string;
    const MAP_GL: number;
    function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta;
    function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data: null): GLSyncMeta;
    function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams | null;
    function buffer_pool_config_get_gl_min_free_queue_size(config: Gst.Structure): number;
    function buffer_pool_config_set_gl_allocation_params(config: Gst.Structure, params: GLAllocationParams | null): void;
    function buffer_pool_config_set_gl_min_free_queue_size(config: Gst.Structure, queue_size: number): void;
    function context_get_gl_display(context: Gst.Context): [boolean, GLDisplay | null];
    function context_set_gl_display(context: Gst.Context, display: GLDisplay | null): void;
    function gl_api_from_string(api_s: string): GLAPI;
    function gl_api_to_string(api: GLAPI): string;
    function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
    function gl_base_memory_error_quark(): GLib.Quark;
    function gl_base_memory_init_once(): void;
    function gl_buffer_init_once(): void;
    function gl_check_extension(name: string, ext: string): boolean;
    function gl_config_caveat_to_string(caveat: GLConfigCaveat): string | null;
    function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType): string | null;
    function gl_context_error_quark(): GLib.Quark;
    function gl_dma_buf_transform_drm_formats_to_gst_formats(context: GLContext, src: GObject.Value | any, flags: GLDrmFormatFlags, dst: GObject.Value | any): [boolean, unknown];
    function gl_dma_buf_transform_gst_formats_to_drm_formats(context: GLContext, src: GObject.Value | any, flags: GLDrmFormatFlags, dst: GObject.Value | any): [boolean, unknown];
    function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void;
    function gl_ensure_element_data(element: Gst.Element, display_ptr: GLDisplay, other_context_ptr: GLContext): [boolean, GLDisplay, GLContext];
    function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat;
    function gl_format_is_supported(context: GLContext, format: GLFormat): boolean;
    function gl_format_n_components(gl_format: GLFormat): number;
    function gl_format_type_from_sized_gl_format(format: GLFormat): [GLFormat, number];
    function gl_format_type_n_bytes(format: number, type: number): number;
    function gl_get_affine_transformation_meta_as_ndc(meta: GstVideo.VideoAffineTransformationMeta | null): number[];
    function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number;
    function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number;
    function gl_handle_context_query(element: Gst.Element, query: Gst.Query, display: GLDisplay | null, context: GLContext | null, other_context: GLContext | null): boolean;
    function gl_handle_set_context(element: Gst.Element, context: Gst.Context): [boolean, GLDisplay, GLContext];
    function gl_memory_init_once(): void;
    function gl_memory_pbo_init_once(): void;
    function gl_multiply_matrix4(a: number[], b: number[]): number[];
    function gl_platform_from_string(platform_s: string): GLPlatform;
    function gl_platform_to_string(platform: GLPlatform): string;
    function gl_query_local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [boolean, GLContext];
    function gl_renderbuffer_init_once(): void;
    function gl_set_affine_transformation_meta_from_ndc(meta: GstVideo.VideoAffineTransformationMeta, matrix: number[]): void;
    function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number;
    function gl_stereo_downmix_mode_get_type(): GObject.GType;
    function gl_swizzle_invert(swizzle: number[]): number[];
    function gl_sync_meta_api_get_type(): GObject.GType;
    function gl_sync_meta_get_info(): Gst.MetaInfo;
    function gl_texture_target_from_gl(target: number): GLTextureTarget;
    function gl_texture_target_from_string(str: string): GLTextureTarget;
    function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string | null;
    function gl_texture_target_to_gl(target: GLTextureTarget): number;
    function gl_texture_target_to_string(target: GLTextureTarget): string | null;
    function gl_value_get_texture_target_mask(value: GObject.Value | any): GLTextureTarget;
    function gl_value_set_texture_target(value: GObject.Value | any, target: GLTextureTarget): boolean;
    function gl_value_set_texture_target_from_mask(value: GObject.Value | any, target_mask: GLTextureTarget): boolean;
    function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion;
    function gl_video_format_swizzle(video_format: GstVideo.VideoFormat): [boolean, number[]];
    function gl_window_error_quark(): GLib.Quark;
    function glsl_error_quark(): GLib.Quark;
    function glsl_profile_from_string(string: string): GLSLProfile;
    function glsl_profile_to_string(profile: GLSLProfile): string | null;
    function glsl_string_get_version_profile(s: string): [boolean, GLSLVersion, GLSLProfile];
    function glsl_version_from_string(string: string): GLSLVersion;
    function glsl_version_profile_from_string(string: string): [boolean, GLSLVersion, GLSLProfile];
    function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string | null;
    function glsl_version_to_string(version: GLSLVersion): string | null;
    function is_gl_base_memory(mem: Gst.Memory): boolean;
    function is_gl_buffer(mem: Gst.Memory): boolean;
    function is_gl_memory(mem: Gst.Memory): boolean;
    function is_gl_memory_pbo(mem: Gst.Memory): boolean;
    function is_gl_renderbuffer(mem: Gst.Memory): boolean;
    interface GLAllocationParamsCopyFunc {
        (src: GLAllocationParams, dest: GLAllocationParams): void;
    }
    interface GLAllocationParamsFreeFunc {
        (params: null): void;
    }
    interface GLAsyncDebugLogGetMessage {
        (user_data: null): string;
    }
    interface GLBaseMemoryAllocatorAllocFunction {
        (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
    }
    interface GLBaseMemoryAllocatorCopyFunction {
        (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory | null;
    }
    interface GLBaseMemoryAllocatorCreateFunction {
        (mem: GLBaseMemory): boolean;
    }
    interface GLBaseMemoryAllocatorDestroyFunction {
        (mem: GLBaseMemory): void;
    }
    interface GLBaseMemoryAllocatorMapFunction {
        (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): null;
    }
    interface GLBaseMemoryAllocatorUnmapFunction {
        (mem: GLBaseMemory, info: Gst.MapInfo): void;
    }
    interface GLContextThreadFunc {
        (context: GLContext, data: null): void;
    }
    interface GLFilterRenderFunc {
        (filter: GLFilter, in_tex: GLMemory): boolean;
    }
    interface GLFramebufferFunc {
        (stuff: null): boolean;
    }
    interface GLWindowCB {
        (data: null): void;
    }
    interface GLWindowResizeCB {
        (data: null, width: number, height: number): void;
    }
    export namespace GLAPI {
        export const $gtype: GObject.GType<GLAPI>;
    }
    enum GLAPI {
        NONE,
        OPENGL,
        OPENGL3,
        GLES1,
        GLES2,
        ANY,
    }
    export namespace GLBaseMemoryTransfer {
        export const $gtype: GObject.GType<GLBaseMemoryTransfer>;
    }
    enum GLBaseMemoryTransfer {
        DOWNLOAD,
        UPLOAD,
    }
    export namespace GLConfigSurfaceType {
        export const $gtype: GObject.GType<GLConfigSurfaceType>;
    }
    enum GLConfigSurfaceType {
        NONE,
        WINDOW,
        PBUFFER,
        PIXMAP,
    }
    export namespace GLDisplayType {
        export const $gtype: GObject.GType<GLDisplayType>;
    }
    enum GLDisplayType {
        NONE,
        X11,
        WAYLAND,
        COCOA,
        WIN32,
        DISPMANX,
        EGL,
        VIV_FB,
        GBM,
        EGL_DEVICE,
        EAGL,
        WINRT,
        ANDROID,
        EGL_SURFACELESS,
        ANY,
    }
    export namespace GLDrmFormatFlags {
        export const $gtype: GObject.GType<GLDrmFormatFlags>;
    }
    enum GLDrmFormatFlags {
        INCLUDE_EXTERNAL,
        LINEAR_ONLY,
        INCLUDE_EMULATED,
        DIRECT_IMPORT,
    }
    export namespace GLPlatform {
        export const $gtype: GObject.GType<GLPlatform>;
    }
    enum GLPlatform {
        NONE,
        EGL,
        GLX,
        WGL,
        CGL,
        EAGL,
        ANY,
    }
    export namespace GLSLProfile {
        export const $gtype: GObject.GType<GLSLProfile>;
    }
    enum GLSLProfile {
        NONE,
        ES,
        CORE,
        COMPATIBILITY,
        ANY,
    }
    namespace GLBaseFilter {
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {
            context: GLContext;
        }
    }
    class GLBaseFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<GLBaseFilter>;
        get context(): GLContext;
        $signals: GLBaseFilter.SignalSignatures;
        display: GLDisplay;
        constructor(properties?: Partial<GLBaseFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBaseFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBaseFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBaseFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBaseFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        vfunc_gl_start(): boolean;
        vfunc_gl_stop(): void;
        find_gl_context(): boolean;
        get_gl_context(): GLContext | null;
    }
    namespace GLBaseMemoryAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    abstract class GLBaseMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<GLBaseMemoryAllocator>;
        $signals: GLBaseMemoryAllocator.SignalSignatures;
        constructor(properties?: Partial<GLBaseMemoryAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMemoryAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMemoryAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBaseMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_alloc(params: GLAllocationParams): GLBaseMemory | null;
        vfunc_alloc(...args: never[]): any;
    }
    namespace GLBaseMixer {
        interface SignalSignatures extends GstVideo.VideoAggregator.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::force-live": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-upstream-latency": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::start-time-selection": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoAggregator.ConstructorProps {
            context: GLContext;
        }
    }
    abstract class GLBaseMixer extends GstVideo.VideoAggregator {
        static $gtype: GObject.GType<GLBaseMixer>;
        get context(): GLContext;
        $signals: GLBaseMixer.SignalSignatures;
        display: GLDisplay;
        constructor(properties?: Partial<GLBaseMixer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBaseMixer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMixer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBaseMixer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMixer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBaseMixer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBaseMixer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_gl_start(): boolean;
        vfunc_gl_stop(): void;
        get_gl_context(): GLContext | null;
    }
    namespace GLBaseMixerPad {
        interface SignalSignatures extends GstVideo.VideoAggregatorPad.SignalSignatures {
            "notify::max-last-buffer-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-after-eos": (pspec: GObject.ParamSpec) => void;
            "notify::zorder": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVideo.VideoAggregatorPad.ConstructorProps {}
    }
    class GLBaseMixerPad extends GstVideo.VideoAggregatorPad {
        static $gtype: GObject.GType<GLBaseMixerPad>;
        $signals: GLBaseMixerPad.SignalSignatures;
        constructor(properties?: Partial<GLBaseMixerPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBaseMixerPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMixerPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBaseMixerPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseMixerPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBaseMixerPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBaseMixerPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLBaseSrc {
        interface SignalSignatures extends GstBase.PushSrc.SignalSignatures {
            "notify::timestamp-offset": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.PushSrc.ConstructorProps {
            timestamp_offset: bigint | number;
            timestampOffset: bigint | number;
        }
    }
    abstract class GLBaseSrc extends GstBase.PushSrc {
        static $gtype: GObject.GType<GLBaseSrc>;
        get timestamp_offset(): number;
        set timestamp_offset(val: bigint | number);
        get timestampOffset(): number;
        set timestampOffset(val: bigint | number);
        $signals: GLBaseSrc.SignalSignatures;
        display: GLDisplay;
        context: GLContext;
        running_time: Gst.ClockTime;
        constructor(properties?: Partial<GLBaseSrc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBaseSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBaseSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBaseSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_fill_gl_memory(mem: GLMemory): boolean;
        vfunc_gl_start(): boolean;
        vfunc_gl_stop(): void;
        get_gl_context(): GLContext | null;
    }
    namespace GLBufferAllocator {
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }
    class GLBufferAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLBufferAllocator>;
        $signals: GLBufferAllocator.SignalSignatures;
        constructor(properties?: Partial<GLBufferAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLBufferAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBufferAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBufferAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBufferAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBufferAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBufferAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLBufferPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class GLBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<GLBufferPool>;
        $signals: GLBufferPool.SignalSignatures;
        bufferpool: Gst.BufferPool;
        context: GLContext;
        constructor(properties?: Partial<GLBufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLBufferPool;
        static ["new"](...args: never[]): any;
        connect<K extends keyof GLBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLBufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLBufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_gl_allocation_params(): GLAllocationParams | null;
    }
    namespace GLColorConvert {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class GLColorConvert extends Gst.Object {
        static $gtype: GObject.GType<GLColorConvert>;
        $signals: GLColorConvert.SignalSignatures;
        constructor(properties?: Partial<GLColorConvert.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLColorConvert;
        connect<K extends keyof GLColorConvert.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLColorConvert.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLColorConvert.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLColorConvert.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLColorConvert.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLColorConvert.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps;
        static swizzle_shader_string(context: GLContext): string;
        static transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
        static yuv_to_rgb_shader_string(context: GLContext): string;
        decide_allocation(query: Gst.Query): boolean;
        perform(inbuf: Gst.Buffer): Gst.Buffer | null;
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    }
    namespace GLContext {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    abstract class GLContext extends Gst.Object {
        static $gtype: GObject.GType<GLContext>;
        $signals: GLContext.SignalSignatures;
        constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: GLDisplay): GLContext;
        static new_wrapped(display: GLDisplay, handle: bigint | number, context_type: GLPlatform, available_apis: GLAPI): GLContext;
        connect<K extends keyof GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static default_get_proc_address(gl_api: GLAPI, name: string): null;
        static get_current(): GLContext | null;
        static get_current_gl_api(platform: GLPlatform): [GLAPI, number, number];
        static get_current_gl_context(context_type: GLPlatform): bigint | number | null;
        static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): null;
        vfunc_activate(activate: boolean): boolean;
        vfunc_check_feature(feature: string): boolean;
        vfunc_choose_format(): boolean;
        vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean;
        vfunc_destroy_context(): void;
        vfunc_get_config(): Gst.Structure | null;
        vfunc_get_gl_api(): GLAPI;
        vfunc_get_gl_context(): bigint | number;
        vfunc_get_gl_platform(): GLPlatform;
        vfunc_get_gl_platform_version(): [number, number];
        vfunc_request_config(gl_config: Gst.Structure | null): boolean;
        vfunc_swap_buffers(): void;
        activate(activate: boolean): boolean;
        can_share(other_context: GLContext): boolean;
        check_feature(feature: string): boolean;
        check_framebuffer_status(fbo_target: number): boolean;
        check_gl_version(api: GLAPI, maj: number, min: number): boolean;
        clear_framebuffer(): void;
        clear_shader(): void;
        create(other_context: GLContext | null): boolean;
        destroy(): void;
        fill_info(): boolean;
        get_config(): Gst.Structure | null;
        get_display(): GLDisplay;
        get_gl_api(): GLAPI;
        get_gl_context(): number;
        get_gl_platform(): GLPlatform;
        get_gl_platform_version(): [number, number];
        get_gl_version(): [number, number];
        get_proc_address(name: string): null;
        get_thread(): GLib.Thread | null;
        get_window(): GLWindow | null;
        is_shared(): boolean;
        request_config(gl_config: Gst.Structure | null): boolean;
        set_shared_with(share: GLContext): void;
        set_window(window: GLWindow): boolean;
        supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean;
        supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean;
        supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean;
        swap_buffers(): void;
        thread_add(func: GLContextThreadFunc): void;
    }
    namespace GLDisplay {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "create-context": (arg0: GLContext) => GLContext | null;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class GLDisplay extends Gst.Object {
        static $gtype: GObject.GType<GLDisplay>;
        $signals: GLDisplay.SignalSignatures;
        constructor(properties?: Partial<GLDisplay.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GLDisplay;
        static new_with_type(type: GLDisplayType): GLDisplay;
        connect<K extends keyof GLDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_window(): GLWindow | null;
        vfunc_get_handle(): bigint | number;
        add_context(context: GLContext): boolean;
        create_context(other_context: GLContext | null): [boolean, GLContext];
        create_window(): GLWindow | null;
        ensure_context(other_context: GLContext | null, context: GLContext | null): [boolean, GLContext | null];
        filter_gl_api(gl_api: GLAPI): void;
        find_window(data: null, compare_func: GLib.CompareFunc): GLWindow | null;
        get_gl_api(): GLAPI;
        get_gl_api_unlocked(): GLAPI;
        get_gl_context_for_thread(thread: GLib.Thread): GLContext | null;
        get_handle(): number;
        get_handle_type(): GLDisplayType;
        remove_context(context: GLContext): void;
        remove_window(window: GLWindow): boolean;
        retrieve_window(data: null, compare_func: GLib.CompareFunc): GLWindow | null;
    }
    namespace GLFilter {
        interface SignalSignatures extends GLBaseFilter.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseFilter.ConstructorProps {}
    }
    class GLFilter extends GLBaseFilter {
        static $gtype: GObject.GType<GLFilter>;
        $signals: GLFilter.SignalSignatures;
        in_texture_target: GLTextureTarget;
        out_texture_target: GLTextureTarget;
        fbo: GLFramebuffer;
        constructor(properties?: Partial<GLFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static add_rgba_pad_templates(klass: typeof GLFilter): void;
        vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean;
        vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean;
        vfunc_init_fbo(): boolean;
        vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps;
        draw_fullscreen_quad(): void;
        filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean;
        render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean;
        render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void;
    }
    namespace GLFramebuffer {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class GLFramebuffer extends Gst.Object {
        static $gtype: GObject.GType<GLFramebuffer>;
        $signals: GLFramebuffer.SignalSignatures;
        constructor(properties?: Partial<GLFramebuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLFramebuffer;
        static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer;
        connect<K extends keyof GLFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLFramebuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLFramebuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLFramebuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLFramebuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        attach(attachment_point: number, mem: GLBaseMemory): void;
        bind(): void;
        draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean;
        get_effective_dimensions(): [number, number];
        get_id(): number;
    }
    namespace GLMemoryAllocator {
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }
    class GLMemoryAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryAllocator>;
        $signals: GLMemoryAllocator.SignalSignatures;
        constructor(properties?: Partial<GLMemoryAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLMemoryAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default(context: GLContext): GLMemoryAllocator;
    }
    namespace GLMemoryPBOAllocator {
        interface SignalSignatures extends GLMemoryAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLMemoryAllocator.ConstructorProps {}
    }
    class GLMemoryPBOAllocator extends GLMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryPBOAllocator>;
        $signals: GLMemoryPBOAllocator.SignalSignatures;
        constructor(properties?: Partial<GLMemoryPBOAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryPBOAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryPBOAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLMemoryPBOAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLMixer {
        interface SignalSignatures extends GLBaseMixer.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::force-live": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-upstream-latency": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::start-time-selection": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseMixer.ConstructorProps {}
    }
    abstract class GLMixer extends GLBaseMixer {
        static $gtype: GObject.GType<GLMixer>;
        $signals: GLMixer.SignalSignatures;
        constructor(properties?: Partial<GLMixer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLMixer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMixer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLMixer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMixer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLMixer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLMixer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static add_rgba_pad_templates(): void;
        vfunc_process_buffers(outbuf: Gst.Buffer): boolean;
        vfunc_process_textures(out_tex: GLMemory): boolean;
        get_framebuffer(): GLFramebuffer;
        process_textures(outbuf: Gst.Buffer): boolean;
    }
    namespace GLMixerPad {
        interface SignalSignatures extends GLBaseMixerPad.SignalSignatures {
            "notify::max-last-buffer-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-after-eos": (pspec: GObject.ParamSpec) => void;
            "notify::zorder": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::offset": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseMixerPad.ConstructorProps {}
    }
    class GLMixerPad extends GLBaseMixerPad {
        static $gtype: GObject.GType<GLMixerPad>;
        $signals: GLMixerPad.SignalSignatures;
        current_texture: number;
        constructor(properties?: Partial<GLMixerPad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLMixerPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMixerPad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLMixerPad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMixerPad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLMixerPad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLMixerPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLOverlayCompositor {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::yinvert": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            yinvert: boolean;
        }
    }
    class GLOverlayCompositor extends Gst.Object {
        static $gtype: GObject.GType<GLOverlayCompositor>;
        get yinvert(): boolean;
        set yinvert(val: boolean);
        $signals: GLOverlayCompositor.SignalSignatures;
        constructor(properties?: Partial<GLOverlayCompositor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLOverlayCompositor;
        connect<K extends keyof GLOverlayCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLOverlayCompositor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLOverlayCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLOverlayCompositor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLOverlayCompositor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLOverlayCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static add_caps(caps: Gst.Caps): Gst.Caps;
        draw_overlays(): void;
        free_overlays(): void;
        upload_overlays(buf: Gst.Buffer): void;
    }
    namespace GLRenderbufferAllocator {
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }
    class GLRenderbufferAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLRenderbufferAllocator>;
        $signals: GLRenderbufferAllocator.SignalSignatures;
        constructor(properties?: Partial<GLRenderbufferAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLRenderbufferAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLRenderbufferAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLRenderbufferAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLRenderbufferAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLRenderbufferAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLRenderbufferAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLSLStage {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class GLSLStage extends Gst.Object {
        static $gtype: GObject.GType<GLSLStage>;
        $signals: GLSLStage.SignalSignatures;
        constructor(properties?: Partial<GLSLStage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext, type: number): GLSLStage;
        static new_default_fragment(context: GLContext): GLSLStage;
        static new_default_vertex(context: GLContext): GLSLStage;
        static new_with_string(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage;
        static new_with_strings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage;
        connect<K extends keyof GLSLStage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLSLStage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLSLStage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLSLStage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLSLStage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLSLStage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        compile(): boolean;
        get_handle(): number;
        get_profile(): GLSLProfile;
        get_shader_type(): number;
        get_version(): GLSLVersion;
        set_strings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean;
    }
    namespace GLShader {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::linked": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            linked: boolean;
        }
    }
    class GLShader extends Gst.Object {
        static $gtype: GObject.GType<GLShader>;
        get linked(): boolean;
        $signals: GLShader.SignalSignatures;
        context: GLContext;
        constructor(properties?: Partial<GLShader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLShader;
        static new_default(context: GLContext): GLShader;
        connect<K extends keyof GLShader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLShader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLShader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLShader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static string_fragment_external_oes_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
        static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
        static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
        attach(stage: GLSLStage): boolean;
        attach_unlocked(stage: GLSLStage): boolean;
        bind_attribute_location(index: number, name: string): void;
        bind_frag_data_location(index: number, name: string): void;
        compile_attach_stage(stage: GLSLStage): boolean;
        detach(stage: GLSLStage): void;
        detach_unlocked(stage: GLSLStage): void;
        get_attribute_location(name: string): number;
        get_program_handle(): number;
        is_linked(): boolean;
        link(): boolean;
        release(): void;
        release_unlocked(): void;
        set_uniform_1f(name: string, value: number): void;
        set_uniform_1fv(name: string, value: number[]): void;
        set_uniform_1i(name: string, value: number): void;
        set_uniform_1iv(name: string, value: number[]): void;
        set_uniform_2f(name: string, v0: number, v1: number): void;
        set_uniform_2fv(name: string, value: number[]): void;
        set_uniform_2i(name: string, v0: number, v1: number): void;
        set_uniform_2iv(name: string, value: number[]): void;
        set_uniform_3f(name: string, v0: number, v1: number, v2: number): void;
        set_uniform_3fv(name: string, value: number[]): void;
        set_uniform_3i(name: string, v0: number, v1: number, v2: number): void;
        set_uniform_3iv(name: string, value: number[]): void;
        set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void;
        set_uniform_4fv(name: string, value: number[]): void;
        set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void;
        set_uniform_4iv(name: string, value: number[]): void;
        set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void;
        set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void;
        use(): void;
    }
    namespace GLUpload {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class GLUpload extends Gst.Object {
        static $gtype: GObject.GType<GLUpload>;
        $signals: GLUpload.SignalSignatures;
        context: GLContext;
        constructor(properties?: Partial<GLUpload.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLContext): GLUpload;
        connect<K extends keyof GLUpload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLUpload.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLUpload.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLUpload.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLUpload.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLUpload.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_input_template_caps(): Gst.Caps;
        fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        get_caps(): [Gst.Caps | null, Gst.Caps | null];
        perform_with_buffer(buffer: Gst.Buffer): [GLUploadReturn, Gst.Buffer];
        propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void;
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
        set_context(context: GLContext): void;
        transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    }
    namespace GLViewConvert {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::downmix-mode": (pspec: GObject.ParamSpec) => void;
            "notify::input-flags-override": (pspec: GObject.ParamSpec) => void;
            "notify::input-mode-override": (pspec: GObject.ParamSpec) => void;
            "notify::output-flags-override": (pspec: GObject.ParamSpec) => void;
            "notify::output-mode-override": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            downmix_mode: GLStereoDownmix;
            downmixMode: GLStereoDownmix;
            input_flags_override: GstVideo.VideoMultiviewFlags;
            inputFlagsOverride: GstVideo.VideoMultiviewFlags;
            input_mode_override: GstVideo.VideoMultiviewMode;
            inputModeOverride: GstVideo.VideoMultiviewMode;
            output_flags_override: GstVideo.VideoMultiviewFlags;
            outputFlagsOverride: GstVideo.VideoMultiviewFlags;
            output_mode_override: GstVideo.VideoMultiviewMode;
            outputModeOverride: GstVideo.VideoMultiviewMode;
        }
    }
    class GLViewConvert extends Gst.Object {
        static $gtype: GObject.GType<GLViewConvert>;
        get downmix_mode(): GLStereoDownmix;
        set downmix_mode(val: GLStereoDownmix);
        get downmixMode(): GLStereoDownmix;
        set downmixMode(val: GLStereoDownmix);
        get input_flags_override(): GstVideo.VideoMultiviewFlags;
        set input_flags_override(val: GstVideo.VideoMultiviewFlags);
        get inputFlagsOverride(): GstVideo.VideoMultiviewFlags;
        set inputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
        get input_mode_override(): GstVideo.VideoMultiviewMode;
        set input_mode_override(val: GstVideo.VideoMultiviewMode);
        get inputModeOverride(): GstVideo.VideoMultiviewMode;
        set inputModeOverride(val: GstVideo.VideoMultiviewMode);
        get output_flags_override(): GstVideo.VideoMultiviewFlags;
        set output_flags_override(val: GstVideo.VideoMultiviewFlags);
        get outputFlagsOverride(): GstVideo.VideoMultiviewFlags;
        set outputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
        get output_mode_override(): GstVideo.VideoMultiviewMode;
        set output_mode_override(val: GstVideo.VideoMultiviewMode);
        get outputModeOverride(): GstVideo.VideoMultiviewMode;
        set outputModeOverride(val: GstVideo.VideoMultiviewMode);
        $signals: GLViewConvert.SignalSignatures;
        object: Gst.Object;
        context: GLContext;
        shader: GLShader;
        from_texture_target: GLTextureTarget;
        to_texture_target: GLTextureTarget;
        caps_passthrough: boolean;
        initted: boolean;
        reconfigure: boolean;
        fbo: GLFramebuffer;
        constructor(properties?: Partial<GLViewConvert.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GLViewConvert;
        connect<K extends keyof GLViewConvert.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLViewConvert.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLViewConvert.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLViewConvert.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLViewConvert.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLViewConvert.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        get_output(): [Gst.FlowReturn, Gst.Buffer];
        perform(inbuf: Gst.Buffer): Gst.Buffer | null;
        reset(): void;
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
        set_context(context: GLContext): void;
        submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
        transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    }
    namespace GLWindow {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "key-event": (arg0: string, arg1: string) => void;
            "mouse-event": (arg0: string, arg1: number, arg2: number, arg3: number) => void;
            "scroll-event": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            "window-handle-changed": () => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    abstract class GLWindow extends Gst.Object {
        static $gtype: GObject.GType<GLWindow>;
        $signals: GLWindow.SignalSignatures;
        constructor(properties?: Partial<GLWindow.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: GLDisplay): GLWindow;
        connect<K extends keyof GLWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): void;
        vfunc_controls_viewport(): boolean;
        vfunc_draw(): void;
        vfunc_get_display(): bigint | number;
        vfunc_get_window_handle(): bigint | number;
        vfunc_handle_events(handle_events: boolean): void;
        vfunc_has_output_surface(): boolean;
        vfunc_open(): boolean;
        vfunc_queue_resize(): void;
        vfunc_quit(): void;
        vfunc_run(): void;
        vfunc_send_message(callback: GLWindowCB): void;
        vfunc_send_message_async(callback: GLWindowCB): void;
        vfunc_set_preferred_size(width: number, height: number): void;
        vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        vfunc_set_window_handle(handle: number): void;
        vfunc_show(): void;
        controls_viewport(): boolean;
        draw(): void;
        get_context(): GLContext;
        get_display(): number;
        get_request_output_surface(): boolean;
        get_surface_dimensions(): [number, number];
        get_window_handle(): number;
        handle_events(handle_events: boolean): void;
        has_output_surface(): boolean;
        queue_resize(): void;
        quit(): void;
        resize(width: number, height: number): void;
        run(): void;
        send_key_event(event_type: string, key_str: string): void;
        send_message(callback: GLWindowCB): void;
        send_message_async(callback: GLWindowCB): void;
        send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
        send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void;
        set_close_callback(callback: GLWindowCB): void;
        set_draw_callback(callback: GLWindowCB): void;
        set_preferred_size(width: number, height: number): void;
        set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        set_request_output_surface(output_surface: boolean): void;
        set_resize_callback(callback: GLWindowResizeCB): void;
        set_window_handle(handle: bigint | number): void;
        show(): void;
    }
    class GLAllocationParams {
        static $gtype: GObject.GType<GLAllocationParams>;
        struct_size: number;
        alloc_flags: number;
        alloc_size: number;
        context: GLContext;
        notify: GLib.DestroyNotify;
        user_data: null;
        wrapped_data: null;
        gl_handle: null;
        copy(): GLAllocationParams;
        copy_data(dest: GLAllocationParams): void;
        free(): void;
        free_data(): void;
    }
    class GLAsyncDebug {
        static $gtype: GObject.GType<GLAsyncDebug>;
        free(): void;
        freeze(): void;
        init(): void;
        output_log_msg(): void;
        thaw(): void;
        unset(): void;
    }
    type GLBaseFilterClass = typeof GLBaseFilter;
    abstract class GLBaseFilterPrivate {
        static $gtype: GObject.GType<GLBaseFilterPrivate>;
    }
    class GLBaseMemory {
        static $gtype: GObject.GType<GLBaseMemory>;
        context: GLContext;
        map_flags: Gst.MapFlags;
        map_count: number;
        gl_map_count: number;
        data: null;
        static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
        static init_once(): void;
        alloc_data(): boolean;
        init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: bigint | number, user_data: null): void;
        memcpy(dest: GLBaseMemory, offset: bigint | number, size: bigint | number): boolean;
    }
    type GLBaseMemoryAllocatorClass = typeof GLBaseMemoryAllocator;
    type GLBaseMixerClass = typeof GLBaseMixer;
    type GLBaseMixerPadClass = typeof GLBaseMixerPad;
    abstract class GLBaseMixerPrivate {
        static $gtype: GObject.GType<GLBaseMixerPrivate>;
    }
    type GLBaseSrcClass = typeof GLBaseSrc;
    abstract class GLBaseSrcPrivate {
        static $gtype: GObject.GType<GLBaseSrcPrivate>;
    }
    class GLBuffer {
        static $gtype: GObject.GType<GLBuffer>;
        id: number;
        target: number;
        usage_hints: number;
        static init_once(): void;
    }
    class GLBufferAllocationParams {
        static $gtype: GObject.GType<GLBufferAllocationParams>;
        gl_target: number;
        gl_usage: number;
        constructor(context: GLContext, alloc_size: bigint | number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number);
        static ["new"](context: GLContext, alloc_size: bigint | number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number): GLBufferAllocationParams;
    }
    type GLBufferAllocatorClass = typeof GLBufferAllocator;
    type GLBufferPoolClass = typeof GLBufferPool;
    abstract class GLBufferPoolPrivate {
        static $gtype: GObject.GType<GLBufferPoolPrivate>;
    }
    type GLColorConvertClass = typeof GLColorConvert;
    abstract class GLColorConvertPrivate {
        static $gtype: GObject.GType<GLColorConvertPrivate>;
    }
    type GLContextClass = typeof GLContext;
    abstract class GLContextPrivate {
        static $gtype: GObject.GType<GLContextPrivate>;
    }
    type GLDisplayClass = typeof GLDisplay;
    abstract class GLDisplayPrivate {
        static $gtype: GObject.GType<GLDisplayPrivate>;
    }
    type GLFilterClass = typeof GLFilter;
    type GLFramebufferClass = typeof GLFramebuffer;
    abstract class GLFramebufferPrivate {
        static $gtype: GObject.GType<GLFramebufferPrivate>;
    }
    abstract class GLFuncs {
        static $gtype: GObject.GType<GLFuncs>;
    }
    class GLMemory {
        static $gtype: GObject.GType<GLMemory>;
        tex_id: number;
        tex_target: GLTextureTarget;
        tex_format: GLFormat;
        valign: GstVideo.VideoAlignment;
        plane: number;
        tex_scaling: number[];
        texture_wrapped: boolean;
        unpack_length: number;
        tex_width: number;
        static init_once(): void;
        copy_into(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number): boolean;
        copy_teximage(tex_id: number, out_target: GLTextureTarget, out_tex_format: GLFormat, out_width: number, out_height: number): boolean;
        get_texture_format(): GLFormat;
        get_texture_height(): number;
        get_texture_id(): number;
        get_texture_target(): GLTextureTarget;
        get_texture_width(): number;
        init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, tex_format: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, user_data: null): void;
        read_pixels(write_pointer: null): boolean;
        texsubimage(read_pointer: null): void;
    }
    type GLMemoryAllocatorClass = typeof GLMemoryAllocator;
    class GLMemoryPBO {
        static $gtype: GObject.GType<GLMemoryPBO>;
        static init_once(): void;
        copy_into_texture(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean;
        download_transfer(): void;
        upload_transfer(): void;
    }
    type GLMemoryPBOAllocatorClass = typeof GLMemoryPBOAllocator;
    type GLMixerClass = typeof GLMixer;
    type GLMixerPadClass = typeof GLMixerPad;
    abstract class GLMixerPrivate {
        static $gtype: GObject.GType<GLMixerPrivate>;
    }
    type GLOverlayCompositorClass = typeof GLOverlayCompositor;
    class GLQuery {
        static $gtype: GObject.GType<GLQuery>;
        static local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [boolean, GLContext];
        counter(): void;
        end(): void;
        free(): void;
        init(context: GLContext, query_type: GLQueryType): void;
        result(): number;
        start(): void;
        unset(): void;
    }
    class GLRenderbuffer {
        static $gtype: GObject.GType<GLRenderbuffer>;
        renderbuffer_id: number;
        renderbuffer_format: GLFormat;
        width: number;
        height: number;
        renderbuffer_wrapped: boolean;
        static init_once(): void;
        get_format(): GLFormat;
        get_height(): number;
        get_id(): number;
        get_width(): number;
    }
    class GLRenderbufferAllocationParams {
        static $gtype: GObject.GType<GLRenderbufferAllocationParams>;
        renderbuffer_format: GLFormat;
        width: number;
        height: number;
        constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number);
        static ["new"](context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number): GLRenderbufferAllocationParams;
        static new_wrapped(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number, gl_handle: null, user_data: null): GLRenderbufferAllocationParams;
    }
    type GLRenderbufferAllocatorClass = typeof GLRenderbufferAllocator;
    type GLSLStageClass = typeof GLSLStage;
    abstract class GLSLStagePrivate {
        static $gtype: GObject.GType<GLSLStagePrivate>;
    }
    type GLShaderClass = typeof GLShader;
    abstract class GLShaderPrivate {
        static $gtype: GObject.GType<GLShaderPrivate>;
    }
    class GLSyncMeta {
        static $gtype: GObject.GType<GLSyncMeta>;
        context: GLContext;
        data: null;
        static get_info(): Gst.MetaInfo;
        set_sync_point(context: GLContext): void;
        wait(context: GLContext): void;
        wait_cpu(context: GLContext): void;
    }
    type GLUploadClass = typeof GLUpload;
    abstract class GLUploadPrivate {
        static $gtype: GObject.GType<GLUploadPrivate>;
    }
    class GLVideoAllocationParams {
        static $gtype: GObject.GType<GLVideoAllocationParams>;
        plane: number;
        valign: GstVideo.VideoAlignment;
        target: GLTextureTarget;
        tex_format: GLFormat;
        constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat);
        static ["new"](context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat): GLVideoAllocationParams;
        static new_wrapped_data(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, wrapped_data: null, user_data: null): GLVideoAllocationParams;
        static new_wrapped_gl_handle(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, gl_handle: null, user_data: null): GLVideoAllocationParams;
        static new_wrapped_texture(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, tex_id: number, user_data: null): GLVideoAllocationParams;
        copy_data(dest_vid: GLVideoAllocationParams): void;
        free_data(): void;
    }
    type GLViewConvertClass = typeof GLViewConvert;
    abstract class GLViewConvertPrivate {
        static $gtype: GObject.GType<GLViewConvertPrivate>;
    }
    type GLWindowClass = typeof GLWindow;
    abstract class GLWindowPrivate {
        static $gtype: GObject.GType<GLWindowPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstGL;
}
declare module 'gi://GstGL' {
    import GstGL10 from 'gi://GstGL?version=1.0';
    export default GstGL10;
}
