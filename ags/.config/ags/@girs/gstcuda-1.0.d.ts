declare module 'gi://GstCuda?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GstGL from 'gi://GstGL?version=1.0';
import type CudaGst from 'gi://CudaGst?version=1.0';
export namespace GstCuda {
    enum CudaGraphicsResourceType {
        NONE,
        GL_BUFFER,
        D3D11_RESOURCE,
        EGL_RESOURCE,
    }
    export namespace CudaMemoryAllocMethod {
        export const $gtype: GObject.GType<CudaMemoryAllocMethod>;
    }
    enum CudaMemoryAllocMethod {
        UNKNOWN,
        MALLOC,
        MMAP,
    }
    enum CudaQuarkId {
        GRAPHICS_RESOURCE,
        MAX,
    }
    const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string;
    const CUDA_ALLOCATOR_OPT_STREAM_ORDERED: string;
    const CUDA_CONTEXT_TYPE: string;
    const CUDA_MEMORY_TYPE_NAME: string;
    const MAP_CUDA: number;
    const MAP_READ_CUDA: Gst.MapFlags;
    const MAP_WRITE_CUDA: Gst.MapFlags;
    function buffer_pool_config_get_cuda_alloc_method(config: Gst.Structure): CudaMemoryAllocMethod;
    function buffer_pool_config_get_cuda_stream(config: Gst.Structure): CudaStream | null;
    function buffer_pool_config_get_cuda_stream_ordered_alloc(config: Gst.Structure): [boolean, boolean];
    function buffer_pool_config_set_cuda_alloc_method(config: Gst.Structure, method: CudaMemoryAllocMethod): void;
    function buffer_pool_config_set_cuda_stream(config: Gst.Structure, stream: CudaStream): void;
    function buffer_pool_config_set_cuda_stream_ordered_alloc(config: Gst.Structure, stream_ordered: boolean): void;
    function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context;
    function cuda_create_user_token(): number;
    function cuda_ensure_element_context(element: Gst.Element, device_id: number, cuda_ctx: CudaContext): [boolean, CudaContext];
    function cuda_handle_context_query(element: Gst.Element, query: Gst.Query, cuda_ctx: CudaContext | null): boolean;
    function cuda_handle_set_context(element: Gst.Element, context: Gst.Context, device_id: number, cuda_ctx: CudaContext): [boolean, CudaContext];
    function cuda_load_library(): boolean;
    function cuda_memory_init_once(): void;
    function cuda_nvrtc_compile(source: string): string;
    function cuda_nvrtc_compile_cubin(source: string, device: number): string;
    function cuda_nvrtc_load_library(): boolean;
    function is_cuda_memory(mem: Gst.Memory): boolean;
    enum CudaMemoryTransfer {
        DOWNLOAD,
        UPLOAD,
        SYNC,
    }
    namespace CudaAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class CudaAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<CudaAllocator>;
        $signals: CudaAllocator.SignalSignatures;
        constructor(properties?: Partial<CudaAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CudaAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CudaAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CudaAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CudaAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_set_active(active: boolean): boolean;
        alloc(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo): Gst.Memory | null;
        alloc(...args: never[]): any;
        alloc_stream_ordered(context: CudaContext, stream: CudaStream, info: GstVideo.VideoInfo): Gst.Memory | null;
        alloc_wrapped(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo, dev_ptr: CudaGst.deviceptr, notify: GLib.DestroyNotify | null): Gst.Memory;
        set_active(active: boolean): boolean;
        virtual_alloc(context: CudaContext, stream: CudaStream, info: GstVideo.VideoInfo, prop: CudaGst.memAllocationProp, granularity_flags: CudaGst.memAllocationGranularity_flags): Gst.Memory | null;
    }
    namespace CudaBufferPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class CudaBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<CudaBufferPool>;
        $signals: CudaBufferPool.SignalSignatures;
        context: CudaContext;
        constructor(properties?: Partial<CudaBufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: CudaContext): CudaBufferPool;
        static ["new"](...args: never[]): any;
        connect<K extends keyof CudaBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaBufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CudaBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaBufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CudaBufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CudaBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace CudaContext {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::cuda-device-id": (pspec: GObject.ParamSpec) => void;
            "notify::default-gpu-stack-size": (pspec: GObject.ParamSpec) => void;
            "notify::external-resource-interop": (pspec: GObject.ParamSpec) => void;
            "notify::os-handle": (pspec: GObject.ParamSpec) => void;
            "notify::prefer-stream-ordered-alloc": (pspec: GObject.ParamSpec) => void;
            "notify::stream-ordered-alloc": (pspec: GObject.ParamSpec) => void;
            "notify::virtual-memory": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            cuda_device_id: number;
            cudaDeviceId: number;
            default_gpu_stack_size: number;
            defaultGpuStackSize: number;
            external_resource_interop: boolean;
            externalResourceInterop: boolean;
            os_handle: boolean;
            osHandle: boolean;
            prefer_stream_ordered_alloc: boolean;
            preferStreamOrderedAlloc: boolean;
            stream_ordered_alloc: boolean;
            streamOrderedAlloc: boolean;
            virtual_memory: boolean;
            virtualMemory: boolean;
        }
    }
    class CudaContext extends Gst.Object {
        static $gtype: GObject.GType<CudaContext>;
        get cuda_device_id(): number;
        get cudaDeviceId(): number;
        get default_gpu_stack_size(): number;
        set default_gpu_stack_size(val: number);
        get defaultGpuStackSize(): number;
        set defaultGpuStackSize(val: number);
        get external_resource_interop(): boolean;
        get externalResourceInterop(): boolean;
        get os_handle(): boolean;
        get osHandle(): boolean;
        get prefer_stream_ordered_alloc(): boolean;
        set prefer_stream_ordered_alloc(val: boolean);
        get preferStreamOrderedAlloc(): boolean;
        set preferStreamOrderedAlloc(val: boolean);
        get stream_ordered_alloc(): boolean;
        get streamOrderedAlloc(): boolean;
        get virtual_memory(): boolean;
        get virtualMemory(): boolean;
        $signals: CudaContext.SignalSignatures;
        object: Gst.Object;
        constructor(properties?: Partial<CudaContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device_id: number): CudaContext;
        static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext;
        connect<K extends keyof CudaContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CudaContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CudaContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CudaContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static find_dxgi_adapter_luid(cuda_device: CudaGst.device): number;
        static pop(cuda_ctx: CudaGst.context): boolean;
        can_access_peer(peer: CudaContext): boolean;
        get_handle(): null;
        get_texture_alignment(): number;
        push(): boolean;
    }
    namespace CudaPoolAllocator {
        interface SignalSignatures extends CudaAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CudaAllocator.ConstructorProps {}
    }
    class CudaPoolAllocator extends CudaAllocator {
        static $gtype: GObject.GType<CudaPoolAllocator>;
        $signals: CudaPoolAllocator.SignalSignatures;
        context: CudaContext;
        constructor(properties?: Partial<CudaPoolAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo): CudaPoolAllocator;
        static new_for_virtual_memory(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo, prop: CudaGst.memAllocationProp, granularity_flags: CudaGst.memAllocationGranularity_flags): CudaPoolAllocator;
        static new_full(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo, config: Gst.Structure | null): CudaPoolAllocator;
        connect<K extends keyof CudaPoolAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaPoolAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CudaPoolAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CudaPoolAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CudaPoolAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CudaPoolAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        acquire_memory(): [Gst.FlowReturn, Gst.Memory];
    }
    type CudaAllocatorClass = typeof CudaAllocator;
    abstract class CudaAllocatorPrivate {
        static $gtype: GObject.GType<CudaAllocatorPrivate>;
    }
    type CudaBufferPoolClass = typeof CudaBufferPool;
    abstract class CudaBufferPoolPrivate {
        static $gtype: GObject.GType<CudaBufferPoolPrivate>;
    }
    type CudaContextClass = typeof CudaContext;
    abstract class CudaContextPrivate {
        static $gtype: GObject.GType<CudaContextPrivate>;
    }
    class CudaGraphicsResource {
        static $gtype: GObject.GType<CudaGraphicsResource>;
        cuda_context: CudaContext;
        graphics_context: Gst.Object;
        type: CudaGraphicsResourceType;
        resource: CudaGst.graphicsResource;
        flags: CudaGst.graphicsRegisterFlags;
        registered: boolean;
        mapped: boolean;
        free(): void;
    }
    class CudaMemory {
        static $gtype: GObject.GType<CudaMemory>;
        context: CudaContext;
        static init_once(): void;
        ["export"](): [boolean, null];
        get_alloc_method(): CudaMemoryAllocMethod;
        get_stream(): CudaStream | null;
        get_texture(plane: number, filter_mode: CudaGst.filter_mode): [boolean, CudaGst.texObject];
        get_token_data(token: bigint | number): null;
        get_user_data(): null;
        set_token_data(token: bigint | number, data: null): void;
        sync(): void;
    }
    class CudaMemoryPool {
        static $gtype: GObject.GType<CudaMemoryPool>;
        context: CudaContext;
        constructor(context: CudaContext, props: CudaGst.memPoolProps | null);
        static ["new"](context: CudaContext, props: CudaGst.memPoolProps | null): CudaMemoryPool;
        get_handle(): CudaGst.memoryPool;
        ref(): CudaMemoryPool;
        unref(): void;
    }
    abstract class CudaMemoryPoolPrivate {
        static $gtype: GObject.GType<CudaMemoryPoolPrivate>;
    }
    abstract class CudaMemoryPrivate {
        static $gtype: GObject.GType<CudaMemoryPrivate>;
    }
    type CudaPoolAllocatorClass = typeof CudaPoolAllocator;
    abstract class CudaPoolAllocatorPrivate {
        static $gtype: GObject.GType<CudaPoolAllocatorPrivate>;
    }
    class CudaStream {
        static $gtype: GObject.GType<CudaStream>;
        context: CudaContext;
        constructor(context: CudaContext);
        static ["new"](context: CudaContext): CudaStream;
        get_handle(): CudaGst.stream;
        ref(): CudaStream;
        unref(): void;
    }
    abstract class CudaStreamPrivate {
        static $gtype: GObject.GType<CudaStreamPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstCuda;
}
declare module 'gi://GstCuda' {
    import GstCuda10 from 'gi://GstCuda?version=1.0';
    export default GstCuda10;
}
