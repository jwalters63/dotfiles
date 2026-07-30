declare module 'gi://GstGLEGL?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstGL from 'gi://GstGL?version=1.0';
export namespace GstGLEGL {
    const GL_DISPLAY_EGL_NAME: string;
    const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
    function egl_get_error_string(err: number): string;
    function egl_image_can_emulate(context: GstGL.GLContext, format: GstVideo.VideoFormat): boolean;
    function egl_image_from_dmabuf(context: GstGL.GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: bigint | number): EGLImage | null;
    function egl_image_from_dmabuf_direct(context: GstGL.GLContext, fd: number, offset: bigint | number, in_info: GstVideo.VideoInfo): EGLImage | null;
    function egl_image_from_dmabuf_direct_target(context: GstGL.GLContext, fd: number, offset: bigint | number, in_info: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage | null;
    function egl_image_from_dmabuf_direct_target_with_dma_drm(context: GstGL.GLContext, n_planes: number, fd: number, offset: bigint | number, in_info_dma: GstVideo.VideoInfoDmaDrm, target: GstGL.GLTextureTarget): EGLImage | null;
    function egl_image_from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: bigint | number): EGLImage | null;
    function gl_memory_egl_init_once(): void;
    function is_gl_memory_egl(mem: Gst.Memory): boolean;
    interface EGLImageDestroyNotify {
        (image: EGLImage, data: null): void;
    }
    namespace GLDisplayEGL {
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }
    class GLDisplayEGL extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGL>;
        $signals: GLDisplayEGL.SignalSignatures;
        constructor(properties?: Partial<GLDisplayEGL.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GLDisplayEGL;
        static new_surfaceless(): GLDisplayEGL;
        static new_with_egl_display(display: null): GLDisplayEGL;
        connect<K extends keyof GLDisplayEGL.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayEGL.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplayEGL.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayEGL.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplayEGL.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLDisplayEGL.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL | null;
        static get_from_native(type: GstGL.GLDisplayType, display: bigint | number): null;
        set_foreign(foreign: boolean): void;
    }
    namespace GLDisplayEGLDevice {
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }
    class GLDisplayEGLDevice extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGLDevice>;
        $signals: GLDisplayEGLDevice.SignalSignatures;
        device: null;
        constructor(properties?: Partial<GLDisplayEGLDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device_index: number): GLDisplayEGLDevice;
        static ["new"](...args: never[]): any;
        static new_with_egl_device(device: null): GLDisplayEGLDevice;
        connect<K extends keyof GLDisplayEGLDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayEGLDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplayEGLDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLDisplayEGLDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplayEGLDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLDisplayEGLDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLMemoryEGLAllocator {
        interface SignalSignatures extends GstGL.GLMemoryAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstGL.GLMemoryAllocator.ConstructorProps {}
    }
    class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryEGLAllocator>;
        $signals: GLMemoryEGLAllocator.SignalSignatures;
        constructor(properties?: Partial<GLMemoryEGLAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryEGLAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLMemoryEGLAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLMemoryEGLAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    class EGLImage {
        static $gtype: GObject.GType<EGLImage>;
        constructor(context: GstGL.GLContext, image: null, format: GstGL.GLFormat, user_data: null, user_data_destroy: EGLImageDestroyNotify);
        static new_wrapped(context: GstGL.GLContext, image: null, format: GstGL.GLFormat, user_data: null, user_data_destroy: EGLImageDestroyNotify): EGLImage;
        static can_emulate(context: GstGL.GLContext, format: GstVideo.VideoFormat): boolean;
        static from_dmabuf(context: GstGL.GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: bigint | number): EGLImage | null;
        static from_dmabuf_direct(context: GstGL.GLContext, fd: number, offset: bigint | number, in_info: GstVideo.VideoInfo): EGLImage | null;
        static from_dmabuf_direct_target(context: GstGL.GLContext, fd: number, offset: bigint | number, in_info: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage | null;
        static from_dmabuf_direct_target_with_dma_drm(context: GstGL.GLContext, n_planes: number, fd: number, offset: bigint | number, in_info_dma: GstVideo.VideoInfoDmaDrm, target: GstGL.GLTextureTarget): EGLImage | null;
        static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: bigint | number): EGLImage | null;
        export_dmabuf(fd: number, stride: number, offset: bigint | number): boolean;
        get_image(): null;
    }
    type GLDisplayEGLClass = typeof GLDisplayEGL;
    type GLDisplayEGLDeviceClass = typeof GLDisplayEGLDevice;
    class GLMemoryEGL {
        static $gtype: GObject.GType<GLMemoryEGL>;
        static init_once(): void;
        get_display(): null;
        get_image(): null;
    }
    type GLMemoryEGLAllocatorClass = typeof GLMemoryEGLAllocator;
    const __name__: string;
    const __version__: string;
}
export default GstGLEGL;
}
declare module 'gi://GstGLEGL' {
    import GstGLEGL10 from 'gi://GstGLEGL?version=1.0';
    export default GstGLEGL10;
}
