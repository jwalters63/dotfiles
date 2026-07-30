declare module 'gi://CudaGst?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace CudaGst {
    enum GLDeviceList {
        GL_DEVICE_LIST_ALL,
    }
    enum address_mode {
        WRAP,
        CLAMP,
        MIRROR,
        BORDER,
    }
    enum array_format {
        INT8,
        INT16,
    }
    enum device_attribute {
        TEXTURE_ALIGNMENT,
        UNIFIED_ADDRESSING,
        COMPUTE_CAPABILITY_MAJOR,
        COMPUTE_CAPABILITY_MINOR,
        VIRTUAL_MEMORY_MANAGEMENT_SUPPORTED,
        HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED,
        HANDLE_TYPE_WIN32_HANDLE_SUPPORTED,
        HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED,
        MEMORY_POOLS_SUPPORTED,
    }
    enum event_flags {
        DEFAULT,
        BLOCKING_SYNC,
        DISABLE_TIMING,
        INTERPROCESS,
    }
    enum externalMemoryHandleType {
        OPAQUE_FD,
        OPAQUE_WIN32,
        OPAQUE_WIN32_KMT,
        D3D12_HEAP,
        D3D12_RESOURCE,
        D3D11_RESOURCE,
        D3D11_RESOURCE_KMT,
        NVSCIBUF,
    }
    enum externalSemaphoreHandleType {
        OPAQUE_FD,
        OPAQUE_WIN32,
        OPAQUE_WIN32_KMT,
        D3D12_FENCE,
        D3D11_FENCE,
        NVSCISYNC,
        D3D11_KEYED_MUTEX,
        D3D11_KEYED_MUTEX_KMT,
        TIMELINE_SEMAPHORE_FD,
        TIMELINE_SEMAPHORE_WIN32,
    }
    enum filter_mode {
        POINT,
        LINEAR,
    }
    enum graphicsMapResourceFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
    }
    enum graphicsRegisterFlags {
        NONE,
        READ_ONLY,
        WRITE_DISCARD,
        SURFACE_LOAD_STORE,
        TEXTURE_GATHER,
    }
    enum ipcMem_flags {
        IPC_MEM_LAZY_ENABLE_PEER_ACCESS,
    }
    enum limit {
        STACK_SIZE,
        PRINTF_FIFO_SIZE,
        MALLOC_HEAP_SIZE,
        DEV_RUNTIME_SYNC_DEPTH,
        DEV_RUNTIME_PENDING_LAUNCH_COUNT,
        MAX_L2_FETCH_GRANULARITY,
        PERSISTING_L2_CACHE_SIZE,
        SHMEM_SIZE,
        CIG_ENABLED,
        CIG_SHMEM_FALLBACK_ENABLED,
    }
    enum memAccess_flags {
        NONE,
        READ,
        READWRITE,
        MAX,
    }
    enum memAllocationGranularity_flags {
        MINIMUM,
        RECOMMENDED,
    }
    enum memAllocationHandleType {
        NONE,
        POSIX_FILE_DESCRIPTOR,
        WIN32,
        WIN32_KMT,
        MAX,
    }
    enum memAllocationType {
        INVALID,
        PINNED,
        MAX,
    }
    enum memLocationType {
        INVALID,
        DEVICE,
        MAX,
    }
    enum memPool_attribute {
        REUSE_FOLLOW_EVENT_DEPENDENCIES,
        REUSE_ALLOW_OPPORTUNISTIC,
        REUSE_ALLOW_INTERNAL_DEPENDENCIES,
        RELEASE_THRESHOLD,
        RESERVED_MEM_CURRENT,
        RESERVED_MEM_HIGH,
        USED_MEM_CURRENT,
        USED_MEM_HIGH,
    }
    enum memorytype {
        HOST,
        DEVICE,
        ARRAY,
        UNIFIED,
    }
    enum resourceViewFormat {
        RES_VIEW_FORMAT_NONE,
    }
    enum resourcetype {
        ARRAY,
        MIPMAPPED_ARRAY,
        LINEAR,
        PITCH2D,
    }
    enum result {
        SUCCESS,
        ERROR_NO_DEVICE,
        ERROR_ALREADY_MAPPED,
        ERROR_NOT_SUPPORTED,
    }
    enum stream_flags {
        DEFAULT,
        NON_BLOCKING,
    }
    const IPC_HANDLE_SIZE: number;
    const TRSF_READ_AS_INTEGER: number;
    const VERSION: number;
    class DA_ARRAY3D_DESCRIPTOR {
        static $gtype: GObject.GType<DA_ARRAY3D_DESCRIPTOR>;
        Width: number;
        Height: number;
        Depth: number;
        Format: array_format;
        NumChannels: number;
        Flags: number;
    }
    class DA_EXTERNAL_MEMORY_BUFFER_DESC {
        static $gtype: GObject.GType<DA_EXTERNAL_MEMORY_BUFFER_DESC>;
        flags: number;
        reserved: number[];
        constructor(properties?: Partial<{
            offset: number;
            size: number;
            flags: number;
            reserved: number[];
        }>);
    }
    class DA_EXTERNAL_MEMORY_MIPMAPPED_ARRAY_DESC {
        static $gtype: GObject.GType<DA_EXTERNAL_MEMORY_MIPMAPPED_ARRAY_DESC>;
        numLevels: number;
        reserved: number[];
    }
    class DA_MEMCPY2D {
        static $gtype: GObject.GType<DA_MEMCPY2D>;
        srcXInBytes: number;
        srcY: number;
        srcMemoryType: memorytype;
        srcHost: null;
        srcDevice: deviceptr;
        srcArray: array;
        srcPitch: number;
        dstXInBytes: number;
        dstY: number;
        dstMemoryType: memorytype;
        dstHost: null;
        dstDevice: deviceptr;
        dstArray: array;
        dstPitch: number;
        WidthInBytes: number;
        Height: number;
    }
    class DA_RESOURCE_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_DESC>;
        resType: resourcetype;
        flags: number;
    }
    class DA_RESOURCE_VIEW_DESC {
        static $gtype: GObject.GType<DA_RESOURCE_VIEW_DESC>;
        format: resourceViewFormat;
        width: number;
        height: number;
        depth: number;
        firstMipmapLevel: number;
        lastMipmapLevel: number;
        firstLayer: number;
        lastLayer: number;
        reserved: number[];
    }
    class DA_TEXTURE_DESC {
        static $gtype: GObject.GType<DA_TEXTURE_DESC>;
        addressMode: address_mode[];
        filterMode: filter_mode;
        flags: number;
        maxAnisotropy: number;
        mipmapFilterMode: filter_mode;
        mipmapLevelBias: number;
        minMipmapLevelClamp: number;
        maxMipmapLevelClamp: number;
        borderColor: number[];
        reserved: number[];
    }
    class ipcEventHandle {
        static $gtype: GObject.GType<ipcEventHandle>;
        reserved: number[];
        constructor(properties?: Partial<{
            reserved: number[];
        }>);
    }
    class ipcMemHandle {
        static $gtype: GObject.GType<ipcMemHandle>;
        reserved: number[];
        constructor(properties?: Partial<{
            reserved: number[];
        }>);
    }
    class memAccessDesc {
        static $gtype: GObject.GType<memAccessDesc>;
        flags: memAccess_flags;
    }
    class memAllocationProp {
        static $gtype: GObject.GType<memAllocationProp>;
        type: memAllocationType;
        requestedHandleTypes: memAllocationHandleType;
        win32HandleMetaData: null;
        allocFlags: memAllocationPropAllocFlags;
    }
    class memAllocationPropAllocFlags {
        static $gtype: GObject.GType<memAllocationPropAllocFlags>;
        compressionType: number;
        gpuDirectRDMACapable: number;
        usage: number;
        reserved: Uint8Array;
        constructor(properties?: Partial<{
            compressionType: number;
            gpuDirectRDMACapable: number;
            usage: number;
            reserved: Uint8Array;
        }>);
    }
    class memLocation {
        static $gtype: GObject.GType<memLocation>;
        type: memLocationType;
        id: number;
    }
    class memPoolProps {
        static $gtype: GObject.GType<memPoolProps>;
        allocType: memAllocationType;
        handleTypes: memAllocationHandleType;
        win32SecurityAttributes: null;
        maxSize: number;
        reserved: Uint8Array;
    }
    class uuid {
        static $gtype: GObject.GType<uuid>;
        bytes: number[];
        constructor(properties?: Partial<{
            bytes: number[];
        }>);
    }
    type array = never;
    type context = never;
    type device = number;
    type deviceptr = bigint | number;
    type event = never;
    type externalMemory = never;
    type externalSemaphore = never;
    type __function = never;
    type graphicsResource = never;
    type memoryPool = never;
    type mipmappedArray = never;
    type module = never;
    type stream = never;
    type texObject = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default CudaGst;
}
declare module 'gi://CudaGst' {
    import CudaGst10 from 'gi://CudaGst?version=1.0';
    export default CudaGst10;
}
