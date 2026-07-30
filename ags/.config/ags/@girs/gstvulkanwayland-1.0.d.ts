declare module 'gi://GstVulkanWayland?version=1.0' {
import type Vulkan from 'gi://Vulkan?version=1.0';
import type GstVulkan from 'gi://GstVulkan?version=1.0';
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstVulkanWayland {
    namespace VulkanDisplayWayland {
        interface SignalSignatures extends GstVulkan.VulkanDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVulkan.VulkanDisplay.ConstructorProps {}
    }
    class VulkanDisplayWayland extends GstVulkan.VulkanDisplay {
        static $gtype: GObject.GType<VulkanDisplayWayland>;
        $signals: VulkanDisplayWayland.SignalSignatures;
        display: null;
        registry: null;
        compositor: null;
        subcompositor: null;
        shell: null;
        constructor(properties?: Partial<VulkanDisplayWayland.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): VulkanDisplayWayland;
        static ["new"](...args: never[]): any;
        static new_with_display(display: null): VulkanDisplayWayland;
        connect<K extends keyof VulkanDisplayWayland.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplayWayland.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDisplayWayland.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplayWayland.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDisplayWayland.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDisplayWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type VulkanDisplayWaylandClass = typeof VulkanDisplayWayland;
    const __name__: string;
    const __version__: string;
}
export default GstVulkanWayland;
}
declare module 'gi://GstVulkanWayland' {
    import GstVulkanWayland10 from 'gi://GstVulkanWayland?version=1.0';
    export default GstVulkanWayland10;
}
