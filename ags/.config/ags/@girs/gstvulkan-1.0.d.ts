declare module 'gi://GstVulkan?version=1.0' {
import type Vulkan from 'gi://Vulkan?version=1.0';
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstVulkan {
    export namespace VulkanBarrierFlags {
        export const $gtype: GObject.GType<VulkanBarrierFlags>;
    }
    enum VulkanBarrierFlags {
        NONE,
    }
    export namespace VulkanBarrierType {
        export const $gtype: GObject.GType<VulkanBarrierType>;
    }
    enum VulkanBarrierType {
        NONE,
        TYPE_MEMORY,
        TYPE_BUFFER,
        TYPE_IMAGE,
    }
    class VulkanError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
        static to_g_error(result: Vulkan.Result, format: string, ___: any[]): [Vulkan.Result, GLib.Error | null];
    }
    export namespace VulkanFormatScaling {
        export const $gtype: GObject.GType<VulkanFormatScaling>;
    }
    enum VulkanFormatScaling {
        UNORM,
        SNORM,
        USCALED,
        SSCALED,
        UINT,
        SINT,
        SRGB,
    }
    export namespace VulkanHandleType {
        export const $gtype: GObject.GType<VulkanHandleType>;
    }
    enum VulkanHandleType {
        DESCRIPTOR_SET_LAYOUT,
        PIPELINE_LAYOUT,
        PIPELINE,
        RENDER_PASS,
        SAMPLER,
        FRAMEBUFFER,
        SHADER,
        VIDEO_SESSION,
        VIDEO_SESSION_PARAMETERS,
        SAMPLER_YCBCR_CONVERSION,
    }
    class VulkanWindowError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static OLD_LIBS: number;
        static RESOURCE_UNAVAILABLE: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string;
    const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string;
    const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string;
    const VULKAN_DEVICE_CONTEXT_TYPE_STR: string;
    const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string;
    const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string;
    const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string;
    const VULKAN_MAX_COMPONENTS: number;
    const VULKAN_MEMORY_ALLOCATOR_NAME: string;
    const VULKAN_QUEUE_CONTEXT_TYPE_STR: string;
    const VULKAN_SWAPPER_VIDEO_FORMATS: string;
    function context_get_vulkan_device(context: Gst.Context): [boolean, VulkanDevice | null];
    function context_get_vulkan_display(context: Gst.Context): [boolean, VulkanDisplay | null];
    function context_get_vulkan_instance(context: Gst.Context): [boolean, VulkanInstance | null];
    function context_get_vulkan_queue(context: Gst.Context): [boolean, VulkanQueue | null];
    function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice | null): void;
    function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay | null): void;
    function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance | null): void;
    function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue | null): void;
    function is_vulkan_buffer_memory(mem: Gst.Memory): boolean;
    function is_vulkan_image_memory(mem: Gst.Memory): boolean;
    function is_vulkan_memory(mem: Gst.Memory): boolean;
    function vulkan_buffer_memory_alloc(device: VulkanDevice, size: bigint | number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
    function vulkan_buffer_memory_alloc_with_buffer_info(device: VulkanDevice, buffer_info: Vulkan.BufferCreateInfo, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
    function vulkan_buffer_memory_init_once(): void;
    function vulkan_buffer_memory_wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data: null): Gst.Memory;
    function vulkan_create_shader(device: VulkanDevice, code: string, size: bigint | number): VulkanHandle;
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string | null;
    function vulkan_ensure_element_data(element: Gst.Element, display_ptr: VulkanDisplay | null, instance_ptr: VulkanInstance): [boolean, VulkanDisplay | null, VulkanInstance];
    function vulkan_ensure_element_device(element: Gst.Element, instance: VulkanInstance, device_ptr: VulkanDevice | null, device_id: number): [boolean, VulkanDevice | null];
    function vulkan_error_quark(): GLib.Quark;
    function vulkan_format_get_aspect(format: Vulkan.Format): number;
    function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo | null;
    function vulkan_format_to_video_format(vk_format: Vulkan.Format): GstVideo.VideoFormat;
    function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
    function vulkan_get_or_create_image_view_with_info(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo | null): VulkanImageView;
    function vulkan_global_context_query(element: Gst.Element, context_type: string): void;
    function vulkan_handle_context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean;
    function vulkan_handle_set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay | null, instance: VulkanInstance): [boolean, VulkanDisplay | null, VulkanInstance];
    function vulkan_image_memory_alloc(device: VulkanDevice, format: Vulkan.Format, width: bigint | number, height: bigint | number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
    function vulkan_image_memory_alloc_with_image_info(device: VulkanDevice, image_info: Vulkan.ImageCreateInfo, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
    function vulkan_image_memory_init_once(): void;
    function vulkan_image_memory_wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: bigint | number, height: bigint | number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: null): Gst.Memory;
    function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query;
    function vulkan_memory_alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: bigint | number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
    function vulkan_memory_find_memory_type_index_with_requirements(device: VulkanDevice, req: Vulkan.MemoryRequirements, properties: Vulkan.MemoryPropertyFlags): [boolean, number];
    function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
    function vulkan_memory_init_once(): void;
    function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    function vulkan_present_mode_to_string(present_mode: Vulkan.PresentModeKHR): string;
    function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean;
    function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
    function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data: null): void;
    function vulkan_trash_object_unref(device: VulkanDevice, user_data: null): void;
    function vulkan_window_error_quark(): GLib.Quark;
    interface VulkanDeviceForEachQueueFunc {
        (device: VulkanDevice, queue: VulkanQueue): boolean;
    }
    interface VulkanHandleDestroyNotify {
        (handle: VulkanHandle): void;
    }
    interface VulkanImageMemoryFindViewFunc {
        (view: VulkanImageView): boolean;
    }
    interface VulkanTrashListAdd {
        (trash_list: VulkanTrashList, trash: VulkanTrash): boolean;
    }
    interface VulkanTrashListGC {
        (trash_list: VulkanTrashList): void;
    }
    interface VulkanTrashListWait {
        (trash_list: VulkanTrashList, timeout: number): boolean;
    }
    interface VulkanTrashNotify {
        (device: VulkanDevice): void;
    }
    export namespace VulkanDisplayType {
        export const $gtype: GObject.GType<VulkanDisplayType>;
    }
    enum VulkanDisplayType {
        NONE,
        XCB,
        WAYLAND,
        COCOA,
        IOS,
        WIN32,
        ANDROID,
        ANY,
    }
    export namespace VulkanFormatFlags {
        export const $gtype: GObject.GType<VulkanFormatFlags>;
    }
    enum VulkanFormatFlags {
        YUV,
        RGB,
        ALPHA,
        LE,
        COMPLEX,
    }
    namespace VulkanBufferMemoryAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class VulkanBufferMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanBufferMemoryAllocator>;
        $signals: VulkanBufferMemoryAllocator.SignalSignatures;
        constructor(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanBufferMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VulkanBufferPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class VulkanBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanBufferPool>;
        $signals: VulkanBufferPool.SignalSignatures;
        bufferpool: Gst.BufferPool;
        device: VulkanDevice;
        constructor(properties?: Partial<VulkanBufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device: VulkanDevice): VulkanBufferPool;
        static ["new"](...args: never[]): any;
        connect<K extends keyof VulkanBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanBufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static config_set_allocation_params(config: Gst.Structure, usage: Vulkan.BufferUsageFlags, mem_properties: Vulkan.MemoryPropertyFlags): void;
    }
    namespace VulkanCommandPool {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class VulkanCommandPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanCommandPool>;
        $signals: VulkanCommandPool.SignalSignatures;
        queue: VulkanQueue;
        constructor(properties?: Partial<VulkanCommandPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanCommandPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanCommandPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanCommandPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanCommandPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create(): VulkanCommandBuffer;
        get_queue(): VulkanQueue;
        lock(): void;
        unlock(): void;
    }
    namespace VulkanDescriptorCache {
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }
    class VulkanDescriptorCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanDescriptorCache>;
        $signals: VulkanDescriptorCache.SignalSignatures;
        pool: VulkanDescriptorPool;
        constructor(properties?: Partial<VulkanDescriptorCache.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](pool: VulkanDescriptorPool, layouts: VulkanHandle[]): VulkanDescriptorCache;
        connect<K extends keyof VulkanDescriptorCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDescriptorCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDescriptorCache.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDescriptorCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        acquire(): VulkanDescriptorSet;
        acquire(...args: never[]): any;
    }
    namespace VulkanDescriptorPool {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class VulkanDescriptorPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanDescriptorPool>;
        $signals: VulkanDescriptorPool.SignalSignatures;
        device: VulkanDevice;
        constructor(properties?: Partial<VulkanDescriptorPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: bigint | number): VulkanDescriptorPool;
        connect<K extends keyof VulkanDescriptorPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDescriptorPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDescriptorPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDescriptorPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create(layouts: VulkanHandle[]): VulkanDescriptorSet;
        get_device(): VulkanDevice;
        get_max_sets(): number;
    }
    namespace VulkanDevice {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::instance": (pspec: GObject.ParamSpec) => void;
            "notify::physical-device": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            instance: VulkanInstance | null;
            physical_device: VulkanPhysicalDevice;
            physicalDevice: VulkanPhysicalDevice;
        }
    }
    class VulkanDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanDevice>;
        get instance(): VulkanInstance | null;
        get physical_device(): VulkanPhysicalDevice;
        get physicalDevice(): VulkanPhysicalDevice;
        $signals: VulkanDevice.SignalSignatures;
        constructor(properties?: Partial<VulkanDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](physical_device: VulkanPhysicalDevice): VulkanDevice;
        static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;
        connect<K extends keyof VulkanDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean;
        static run_context_query(element: Gst.Element, device: VulkanDevice): [boolean, VulkanDevice];
        create_fence(): VulkanFence | null;
        disable_extension(name: string): boolean;
        enable_extension(name: string): boolean;
        enable_layer(name: string): boolean;
        foreach_queue(func: VulkanDeviceForEachQueueFunc): void;
        get_instance(): VulkanInstance | null;
        get_proc_address(name: string): null;
        get_queue(queue_family: number, queue_i: number): VulkanQueue;
        is_extension_enabled(name: string): boolean;
        is_layer_enabled(name: string): boolean;
        open(): boolean;
        queue_family_indices(): number[];
        select_queue(expected_flags: Vulkan.QueueFlagBits): VulkanQueue | null;
    }
    namespace VulkanDisplay {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class VulkanDisplay extends Gst.Object {
        static $gtype: GObject.GType<VulkanDisplay>;
        $signals: VulkanDisplay.SignalSignatures;
        constructor(properties?: Partial<VulkanDisplay.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](instance: VulkanInstance): VulkanDisplay;
        static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;
        connect<K extends keyof VulkanDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static choose_type(instance: VulkanInstance): VulkanDisplayType;
        static handle_context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null): boolean;
        static run_context_query(element: Gst.Element, display: VulkanDisplay): [boolean, VulkanDisplay];
        vfunc_create_window(): VulkanWindow | null;
        vfunc_get_handle(): null;
        create_window(): VulkanWindow | null;
        find_window(data: null, compare_func: GLib.CompareFunc): VulkanWindow | null;
        get_handle(): null;
        get_handle_type(): VulkanDisplayType;
        remove_window(window: VulkanWindow): boolean;
    }
    namespace VulkanFenceCache {
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }
    class VulkanFenceCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanFenceCache>;
        $signals: VulkanFenceCache.SignalSignatures;
        constructor(properties?: Partial<VulkanFenceCache.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device: VulkanDevice): VulkanFenceCache;
        connect<K extends keyof VulkanFenceCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanFenceCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanFenceCache.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanFenceCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VulkanFullScreenQuad {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class VulkanFullScreenQuad extends Gst.Object {
        static $gtype: GObject.GType<VulkanFullScreenQuad>;
        $signals: VulkanFullScreenQuad.SignalSignatures;
        queue: VulkanQueue;
        descriptor_cache: VulkanDescriptorCache;
        cmd_pool: VulkanCommandPool;
        trash_list: VulkanTrashList;
        constructor(properties?: Partial<VulkanFullScreenQuad.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](queue: VulkanQueue): VulkanFullScreenQuad;
        connect<K extends keyof VulkanFullScreenQuad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanFullScreenQuad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanFullScreenQuad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanFullScreenQuad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        draw(): boolean;
        enable_blend(enable_blend: boolean): void;
        enable_clear(enable_clear: boolean): void;
        fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        get_last_fence(): VulkanFence;
        get_queue(): VulkanQueue | null;
        prepare_draw(fence: VulkanFence): boolean;
        set_blend_factors(src_blend_factor: Vulkan.BlendFactor, dst_blend_factor: Vulkan.BlendFactor, src_alpha_blend_factor: Vulkan.BlendFactor, dst_alpha_blend_factor: Vulkan.BlendFactor): void;
        set_blend_operation(colour_blend_op: Vulkan.BlendOp, alpha_blend_op: Vulkan.BlendOp): void;
        set_index_buffer(indices: Gst.Memory, n_indices: bigint | number): boolean;
        set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
        set_input_buffer(buffer: Gst.Buffer | null): boolean;
        set_output_buffer(buffer: Gst.Buffer | null): boolean;
        set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
        set_uniform_buffer(uniforms: Gst.Memory): boolean;
        set_vertex_buffer(vertices: Gst.Memory): boolean;
        submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
    }
    namespace VulkanHandlePool {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    abstract class VulkanHandlePool extends Gst.Object {
        static $gtype: GObject.GType<VulkanHandlePool>;
        $signals: VulkanHandlePool.SignalSignatures;
        device: VulkanDevice;
        outstanding: null[];
        available: null[];
        constructor(properties?: Partial<VulkanHandlePool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanHandlePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanHandlePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanHandlePool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanHandlePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_acquire(): null;
        vfunc_alloc(): null;
        vfunc_free(handle: null): void;
        vfunc_release(handle: null): void;
        acquire(): null;
        alloc(): null;
        release(handle: null): void;
    }
    namespace VulkanImageBufferPool {
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }
    class VulkanImageBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanImageBufferPool>;
        $signals: VulkanImageBufferPool.SignalSignatures;
        bufferpool: Gst.BufferPool;
        device: VulkanDevice;
        constructor(properties?: Partial<VulkanImageBufferPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device: VulkanDevice): VulkanImageBufferPool;
        static ["new"](...args: never[]): any;
        connect<K extends keyof VulkanImageBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanImageBufferPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanImageBufferPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanImageBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static config_get_allocation_params(config: Gst.Structure): [Vulkan.ImageUsageFlags | null, Vulkan.MemoryPropertyFlags | null, Vulkan.ImageLayout | null, number];
        static config_set_allocation_params(config: Gst.Structure, usage: Vulkan.ImageUsageFlags, mem_properties: Vulkan.MemoryPropertyFlags, initial_layout: Vulkan.ImageLayout, initial_access: bigint | number): void;
        static config_set_decode_caps(config: Gst.Structure, caps: Gst.Caps): void;
        static config_set_encode_caps(config: Gst.Structure, caps: Gst.Caps): void;
    }
    namespace VulkanImageMemoryAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class VulkanImageMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanImageMemoryAllocator>;
        $signals: VulkanImageMemoryAllocator.SignalSignatures;
        constructor(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanImageMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VulkanInstance {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "create-device": (arg0: number) => VulkanDevice;
            "notify::requested-api-major": (pspec: GObject.ParamSpec) => void;
            "notify::requested-api-minor": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            requested_api_major: number;
            requestedApiMajor: number;
            requested_api_minor: number;
            requestedApiMinor: number;
        }
    }
    class VulkanInstance extends Gst.Object {
        static $gtype: GObject.GType<VulkanInstance>;
        get requested_api_major(): number;
        set requested_api_major(val: number);
        get requestedApiMajor(): number;
        set requestedApiMajor(val: number);
        get requested_api_minor(): number;
        set requested_api_minor(val: number);
        get requestedApiMinor(): number;
        set requestedApiMinor(val: number);
        $signals: VulkanInstance.SignalSignatures;
        n_physical_devices: number;
        constructor(properties?: Partial<VulkanInstance.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VulkanInstance;
        connect<K extends keyof VulkanInstance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanInstance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanInstance.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanInstance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static handle_context_query(element: Gst.Element, query: Gst.Query, instance: VulkanInstance | null): boolean;
        static run_context_query(element: Gst.Element, instance: VulkanInstance): [boolean, VulkanInstance];
        check_api_version(major: number, minor: number, patch: number): boolean;
        check_version(major: number, minor: number, patch: number): boolean;
        create_device(): VulkanDevice;
        create_device_with_index(device_index: number): VulkanDevice;
        disable_extension(name: string): boolean;
        enable_extension(name: string): boolean;
        enable_layer(name: string): boolean;
        fill_info(): boolean;
        get_api_version(): [number, number, number];
        get_extension_info(name: string): [boolean, number];
        get_layer_info(name: string): [boolean, string, number, number];
        get_proc_address(name: string): null;
        get_version(): [number, number, number];
        is_extension_enabled(name: string): boolean;
        is_layer_enabled(name: string): boolean;
        open(): boolean;
    }
    namespace VulkanMemoryAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class VulkanMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanMemoryAllocator>;
        $signals: VulkanMemoryAllocator.SignalSignatures;
        constructor(properties?: Partial<VulkanMemoryAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanMemoryAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanMemoryAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VulkanOperation {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::command-pool": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            command_pool: VulkanCommandPool;
            commandPool: VulkanCommandPool;
        }
    }
    class VulkanOperation extends Gst.Object {
        static $gtype: GObject.GType<VulkanOperation>;
        get command_pool(): VulkanCommandPool;
        get commandPool(): VulkanCommandPool;
        $signals: VulkanOperation.SignalSignatures;
        constructor(properties?: Partial<VulkanOperation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](cmd_pool: VulkanCommandPool): VulkanOperation;
        connect<K extends keyof VulkanOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanOperation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanOperation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanOperation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_dependency_frame(frame: Gst.Buffer, wait_stage: bigint | number, signal_stage: bigint | number): boolean;
        add_frame_barrier(frame: Gst.Buffer, src_stage: bigint | number, dst_stage: bigint | number, new_access: bigint | number, new_layout: Vulkan.ImageLayout, new_queue: VulkanQueue | null): boolean;
        begin(): boolean;
        begin_query(base: Vulkan.BaseInStructure, id: number): boolean;
        discard_dependencies(): void;
        enable_query(query_type: number, n_queries: number, pnext: null): boolean;
        end(): boolean;
        end_query(id: number): boolean;
        get_query(): [boolean, null];
        pipeline_barrier2(dependency_info: null): boolean;
        reset(): void;
        update_frame(frame: Gst.Buffer, dst_stage: bigint | number, new_access: bigint | number, new_layout: Vulkan.ImageLayout, new_queue: VulkanQueue | null): void;
        use_sync2(): boolean;
        wait(): boolean;
    }
    namespace VulkanPhysicalDevice {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::device-index": (pspec: GObject.ParamSpec) => void;
            "notify::instance": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            device_index: number;
            deviceIndex: number;
            instance: VulkanInstance;
            name: string | any;
        }
    }
    class VulkanPhysicalDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanPhysicalDevice>;
        get device_index(): number;
        get deviceIndex(): number;
        get instance(): VulkanInstance;
        get name(): string | any;
        $signals: VulkanPhysicalDevice.SignalSignatures;
        n_queue_families: number;
        queue_family_ops: VulkanQueueFamilyOps;
        constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;
        connect<K extends keyof VulkanPhysicalDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanPhysicalDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanPhysicalDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanPhysicalDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static type_to_string(type: Vulkan.PhysicalDeviceType): string;
        check_api_version(major: number, minor: number, patch: number): boolean;
        get_api_version(): [number, number, number];
        get_extension_info(name: string): [boolean, number];
        get_instance(): VulkanInstance;
        get_layer_info(name: string): [boolean, string, number, number];
    }
    namespace VulkanQueue {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }
    class VulkanQueue extends Gst.Object {
        static $gtype: GObject.GType<VulkanQueue>;
        $signals: VulkanQueue.SignalSignatures;
        device: VulkanDevice;
        family: number;
        index: number;
        constructor(properties?: Partial<VulkanQueue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static flags_to_string(queue_bits: Vulkan.QueueFlags): string;
        static handle_context_query(element: Gst.Element, query: Gst.Query, queue: VulkanQueue | null): boolean;
        static run_context_query(element: Gst.Element, queue: VulkanQueue): [boolean, VulkanQueue];
        create_command_pool(): VulkanCommandPool;
        get_device(): VulkanDevice | null;
        submit_lock(): void;
        submit_unlock(): void;
    }
    namespace VulkanSwapper {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::force-aspect-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::pixel-aspect-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            force_aspect_ratio: boolean;
            forceAspectRatio: boolean;
            pixel_aspect_ratio: Gst.Fraction;
            pixelAspectRatio: Gst.Fraction;
        }
    }
    class VulkanSwapper extends Gst.Object {
        static $gtype: GObject.GType<VulkanSwapper>;
        get force_aspect_ratio(): boolean;
        set force_aspect_ratio(val: boolean);
        get forceAspectRatio(): boolean;
        set forceAspectRatio(val: boolean);
        get pixel_aspect_ratio(): Gst.Fraction;
        set pixel_aspect_ratio(val: Gst.Fraction);
        get pixelAspectRatio(): Gst.Fraction;
        set pixelAspectRatio(val: Gst.Fraction);
        $signals: VulkanSwapper.SignalSignatures;
        device: VulkanDevice;
        window: VulkanWindow;
        queue: VulkanQueue;
        cmd_pool: VulkanCommandPool;
        constructor(properties?: Partial<VulkanSwapper.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;
        connect<K extends keyof VulkanSwapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanSwapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanSwapper.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanSwapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        choose_queue(available_queue: VulkanQueue | null): boolean;
        get_supported_caps(): Gst.Caps;
        get_surface_rectangles(): [GstVideo.VideoRectangle | null, GstVideo.VideoRectangle | null, GstVideo.VideoRectangle | null];
        render_buffer(buffer: Gst.Buffer): boolean;
        set_caps(caps: Gst.Caps): boolean;
    }
    namespace VulkanTrashFenceList {
        interface SignalSignatures extends VulkanTrashList.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VulkanTrashList.ConstructorProps {}
    }
    class VulkanTrashFenceList extends VulkanTrashList {
        static $gtype: GObject.GType<VulkanTrashFenceList>;
        $signals: VulkanTrashFenceList.SignalSignatures;
        constructor(properties?: Partial<VulkanTrashFenceList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VulkanTrashFenceList;
        connect<K extends keyof VulkanTrashFenceList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanTrashFenceList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanTrashFenceList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanTrashFenceList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace VulkanTrashList {
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }
    class VulkanTrashList extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanTrashList>;
        $signals: VulkanTrashList.SignalSignatures;
        constructor(properties?: Partial<VulkanTrashList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanTrashList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanTrashList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanTrashList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanTrashList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_add_func(trash: VulkanTrash): boolean;
        vfunc_gc_func(): void;
        vfunc_wait_func(timeout: number): boolean;
        acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        acquire(...args: never[]): any;
        add(trash: VulkanTrash): boolean;
        gc(): void;
        wait(timeout: bigint | number): boolean;
    }
    namespace VulkanVideoFilter {
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
    }
    class VulkanVideoFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<VulkanVideoFilter>;
        $signals: VulkanVideoFilter.SignalSignatures;
        instance: VulkanInstance;
        device: VulkanDevice;
        queue: VulkanQueue;
        constructor(properties?: Partial<VulkanVideoFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof VulkanVideoFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanVideoFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanVideoFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanVideoFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_device(): VulkanDevice | null;
        get_instance(): VulkanInstance | null;
        get_queue(): VulkanQueue | null;
    }
    namespace VulkanWindow {
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            close: () => boolean | void;
            draw: () => void;
            "key-event": (arg0: string, arg1: string) => void;
            "mouse-event": (arg0: string, arg1: number, arg2: number, arg3: number) => void;
            resize: (arg0: number, arg1: number) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            display: VulkanDisplay;
        }
    }
    abstract class VulkanWindow extends Gst.Object {
        static $gtype: GObject.GType<VulkanWindow>;
        get display(): VulkanDisplay;
        $signals: VulkanWindow.SignalSignatures;
        constructor(properties?: Partial<VulkanWindow.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](display: VulkanDisplay): VulkanWindow;
        connect<K extends keyof VulkanWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_close(): void;
        vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        vfunc_get_surface_dimensions(): [number, number];
        vfunc_handle_events(handle_events: boolean): void;
        vfunc_open(): boolean;
        vfunc_set_window_handle(handle: number): void;
        close(): void;
        get_display(): VulkanDisplay;
        get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        get_surface_dimensions(): [number, number];
        handle_events(handle_events: boolean): void;
        open(): boolean;
        redraw(): void;
        resize(width: number, height: number): void;
        send_key_event(event_type: string, key_str: string): void;
        send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
        set_window_handle(handle: bigint | number): void;
    }
    class VulkanBarrierBufferInfo {
        static $gtype: GObject.GType<VulkanBarrierBufferInfo>;
    }
    class VulkanBarrierImageInfo {
        static $gtype: GObject.GType<VulkanBarrierImageInfo>;
    }
    class VulkanBarrierMemoryInfo {
        static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;
        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;
        pipeline_stages: number;
        access_flags: number;
        semaphore_value: number;
    }
    class VulkanBufferMemory {
        static $gtype: GObject.GType<VulkanBufferMemory>;
        device: VulkanDevice;
        static alloc(device: VulkanDevice, size: bigint | number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
        static alloc_with_buffer_info(device: VulkanDevice, buffer_info: Vulkan.BufferCreateInfo, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
        static init_once(): void;
        static wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data: null): Gst.Memory;
    }
    type VulkanBufferMemoryAllocatorClass = typeof VulkanBufferMemoryAllocator;
    type VulkanBufferPoolClass = typeof VulkanBufferPool;
    abstract class VulkanBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanBufferPoolPrivate>;
    }
    class VulkanCommandBuffer {
        static $gtype: GObject.GType<VulkanCommandBuffer>;
        pool: VulkanCommandPool;
        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);
        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
        ref(): VulkanCommandBuffer;
    }
    type VulkanCommandPoolClass = typeof VulkanCommandPool;
    abstract class VulkanCommandPoolPrivate {
        static $gtype: GObject.GType<VulkanCommandPoolPrivate>;
    }
    type VulkanDescriptorCacheClass = typeof VulkanDescriptorCache;
    abstract class VulkanDescriptorCachePrivate {
        static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;
    }
    type VulkanDescriptorPoolClass = typeof VulkanDescriptorPool;
    abstract class VulkanDescriptorPoolPrivate {
        static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;
    }
    class VulkanDescriptorSet {
        static $gtype: GObject.GType<VulkanDescriptorSet>;
        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;
        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]);
        static new_wrapped(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]): VulkanDescriptorSet;
        ref(): VulkanDescriptorSet;
    }
    type VulkanDeviceClass = typeof VulkanDevice;
    abstract class VulkanDevicePrivate {
        static $gtype: GObject.GType<VulkanDevicePrivate>;
    }
    type VulkanDisplayClass = typeof VulkanDisplay;
    abstract class VulkanDisplayPrivate {
        static $gtype: GObject.GType<VulkanDisplayPrivate>;
    }
    class VulkanEncodeQueryResult {
        static $gtype: GObject.GType<VulkanEncodeQueryResult>;
        offset: number;
        data_size: number;
        status: number;
        constructor(properties?: Partial<{
            offset: number;
            data_size: number;
            status: number;
        }>);
    }
    class VulkanFence {
        static $gtype: GObject.GType<VulkanFence>;
        device: VulkanDevice;
        cache: VulkanFenceCache;
        constructor(device: VulkanDevice);
        static ["new"](device: VulkanDevice): VulkanFence;
        static new_always_signalled(device: VulkanDevice): VulkanFence;
        is_signaled(): boolean;
        reset(): void;
    }
    type VulkanFenceCacheClass = typeof VulkanFenceCache;
    class VulkanFormatInfo {
        static $gtype: GObject.GType<VulkanFormatInfo>;
        name: string;
        scaling: VulkanFormatScaling;
        flags: VulkanFormatFlags;
        bits: number;
        n_components: number;
        shift: Uint8Array;
        depth: Uint8Array;
        pixel_stride: Uint8Array;
        n_planes: number;
        plane: Uint8Array;
        poffset: Uint8Array;
        w_sub: Uint8Array;
        h_sub: Uint8Array;
    }
    class VulkanFormatMap {
        static $gtype: GObject.GType<VulkanFormatMap>;
        format: GstVideo.VideoFormat;
        vkfrmts: Vulkan.Format[];
    }
    type VulkanFullScreenQuadClass = typeof VulkanFullScreenQuad;
    abstract class VulkanFullScreenQuadPrivate {
        static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;
    }
    class VulkanHandle {
        static $gtype: GObject.GType<VulkanHandle>;
        device: VulkanDevice;
        type: VulkanHandleType;
        handle: VulkanHandleTypedef;
        notify: VulkanHandleDestroyNotify;
        user_data: null;
        constructor(device: VulkanDevice, type: VulkanHandleType, handle: VulkanHandleTypedef, notify: VulkanHandleDestroyNotify);
        static new_wrapped(device: VulkanDevice, type: VulkanHandleType, handle: VulkanHandleTypedef, notify: VulkanHandleDestroyNotify): VulkanHandle;
        static context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean;
        static set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay | null, instance: VulkanInstance): [boolean, VulkanDisplay | null, VulkanInstance];
        free_descriptor_set_layout(user_data: null): void;
        free_framebuffer(user_data: null): void;
        free_pipeline(user_data: null): void;
        free_pipeline_layout(user_data: null): void;
        free_render_pass(user_data: null): void;
        free_sampler(user_data: null): void;
        free_shader(user_data: null): void;
        ref(): VulkanHandle;
    }
    type VulkanHandlePoolClass = typeof VulkanHandlePool;
    type VulkanImageBufferPoolClass = typeof VulkanImageBufferPool;
    abstract class VulkanImageBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;
    }
    class VulkanImageMemory {
        static $gtype: GObject.GType<VulkanImageMemory>;
        device: VulkanDevice;
        static alloc(device: VulkanDevice, format: Vulkan.Format, width: bigint | number, height: bigint | number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
        static alloc_with_image_info(device: VulkanDevice, image_info: Vulkan.ImageCreateInfo, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
        static init_once(): void;
        static wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: bigint | number, height: bigint | number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: null): Gst.Memory;
        add_view(view: VulkanImageView): void;
        find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView | null;
        get_height(): number;
        get_width(): number;
        init(allocator: Gst.Allocator, parent: Gst.Memory, device: VulkanDevice, format: Vulkan.Format, usage: Vulkan.ImageUsageFlags, initial_layout: Vulkan.ImageLayout, params: Gst.AllocationParams, size: bigint | number, user_data: null): boolean;
    }
    type VulkanImageMemoryAllocatorClass = typeof VulkanImageMemoryAllocator;
    class VulkanImageView {
        static $gtype: GObject.GType<VulkanImageView>;
        device: VulkanDevice;
        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);
        static ["new"](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
        ref(): VulkanImageView;
    }
    type VulkanInstanceClass = typeof VulkanInstance;
    abstract class VulkanInstancePrivate {
        static $gtype: GObject.GType<VulkanInstancePrivate>;
    }
    class VulkanMemory {
        static $gtype: GObject.GType<VulkanMemory>;
        device: VulkanDevice;
        map_count: number;
        mapping: null;
        static alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: bigint | number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory;
        static find_memory_type_index_with_requirements(device: VulkanDevice, req: Vulkan.MemoryRequirements, properties: Vulkan.MemoryPropertyFlags): [boolean, number];
        static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
        static init_once(): void;
        static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    }
    type VulkanMemoryAllocatorClass = typeof VulkanMemoryAllocator;
    type VulkanOperationClass = typeof VulkanOperation;
    abstract class VulkanOperationPrivate {
        static $gtype: GObject.GType<VulkanOperationPrivate>;
    }
    type VulkanPhysicalDeviceClass = typeof VulkanPhysicalDevice;
    abstract class VulkanPhysicalDevicePrivate {
        static $gtype: GObject.GType<VulkanPhysicalDevicePrivate>;
    }
    type VulkanQueueClass = typeof VulkanQueue;
    class VulkanQueueFamilyOps {
        static $gtype: GObject.GType<VulkanQueueFamilyOps>;
        video: number;
        query_result_status: boolean;
        constructor(properties?: Partial<{
            video: number;
            query_result_status: boolean;
        }>);
    }
    abstract class VulkanQueuePrivate {
        static $gtype: GObject.GType<VulkanQueuePrivate>;
    }
    type VulkanSwapperClass = typeof VulkanSwapper;
    abstract class VulkanSwapperPrivate {
        static $gtype: GObject.GType<VulkanSwapperPrivate>;
    }
    class VulkanTrash {
        static $gtype: GObject.GType<VulkanTrash>;
        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: null;
        constructor(fence: VulkanFence, notify: VulkanTrashNotify);
        static ["new"](fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;
        static mini_object_unref(device: VulkanDevice, user_data: null): void;
        static object_unref(device: VulkanDevice, user_data: null): void;
        ref(): VulkanTrash;
    }
    type VulkanTrashFenceListClass = typeof VulkanTrashFenceList;
    type VulkanTrashListClass = typeof VulkanTrashList;
    type VulkanVideoFilterClass = typeof VulkanVideoFilter;
    type VulkanWindowClass = typeof VulkanWindow;
    abstract class VulkanWindowPrivate {
        static $gtype: GObject.GType<VulkanWindowPrivate>;
    }
    type VulkanHandleTypedef = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default GstVulkan;
}
declare module 'gi://GstVulkan' {
    import GstVulkan10 from 'gi://GstVulkan?version=1.0';
    export default GstVulkan10;
}
