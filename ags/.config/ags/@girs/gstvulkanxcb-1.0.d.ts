declare module 'gi://GstVulkanXCB?version=1.0' {
import type Vulkan from 'gi://Vulkan?version=1.0';
import type GstVulkan from 'gi://GstVulkan?version=1.0';
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstVulkanXCB {
    namespace VulkanDisplayXCB {
        interface SignalSignatures extends GstVulkan.VulkanDisplay.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GstVulkan.VulkanDisplay.ConstructorProps {}
    }
    class VulkanDisplayXCB extends GstVulkan.VulkanDisplay {
        static $gtype: GObject.GType<VulkanDisplayXCB>;
        $signals: VulkanDisplayXCB.SignalSignatures;
        constructor(properties?: Partial<VulkanDisplayXCB.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): VulkanDisplayXCB;
        static ["new"](...args: never[]): any;
        connect<K extends keyof VulkanDisplayXCB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplayXCB.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDisplayXCB.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanDisplayXCB.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDisplayXCB.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanDisplayXCB.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type VulkanDisplayXCBClass = typeof VulkanDisplayXCB;
    const __name__: string;
    const __version__: string;
}
export default GstVulkanXCB;
}
declare module 'gi://GstVulkanXCB' {
    import GstVulkanXCB10 from 'gi://GstVulkanXCB?version=1.0';
    export default GstVulkanXCB10;
}
