declare module 'gi://GstAllocators?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstAllocators {
    const ALLOCATOR_DMABUF: string;
    const ALLOCATOR_FD: string;
    const ALLOCATOR_SHM: string;
    const ALLOCATOR_UDMABUF: string;
    const CAPS_FEATURE_MEMORY_DMABUF: string;
    function dmabuf_memory_get_fd(mem: Gst.Memory): number;
    function drm_dumb_memory_export_dmabuf(mem: Gst.Memory): Gst.Memory;
    function drm_dumb_memory_get_handle(mem: Gst.Memory): number;
    function fd_memory_get_fd(mem: Gst.Memory): number;
    function is_dmabuf_memory(mem: Gst.Memory): boolean;
    function is_drm_dumb_memory(mem: Gst.Memory): boolean;
    function is_fd_memory(mem: Gst.Memory): boolean;
    function is_phys_memory(mem: Gst.Memory): boolean;
    function phys_memory_get_phys_addr(mem: Gst.Memory): number;
    enum FdMemoryFlags {
        NONE,
        KEEP_MAPPED,
        MAP_PRIVATE,
        DONT_CLOSE,
    }
    namespace DRMDumbAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::drm-device-path": (pspec: GObject.ParamSpec) => void;
            "notify::drm-fd": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {
            drm_device_path: string;
            drmDevicePath: string;
            drm_fd: number;
            drmFd: number;
        }
    }
    class DRMDumbAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<DRMDumbAllocator>;
        get drm_device_path(): string;
        get drmDevicePath(): string;
        get drm_fd(): number;
        get drmFd(): number;
        $signals: DRMDumbAllocator.SignalSignatures;
        constructor(properties?: Partial<DRMDumbAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_with_device_path(drm_device_path: string): DRMDumbAllocator;
        static new_with_fd(drm_fd: number): DRMDumbAllocator;
        connect<K extends keyof DRMDumbAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DRMDumbAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DRMDumbAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DRMDumbAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DRMDumbAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DRMDumbAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        alloc(drm_fourcc: number, width: number, height: number): [Gst.Memory, number];
        alloc(...args: never[]): any;
        has_prime_export(): boolean;
    }
    namespace DmaBufAllocator {
        interface SignalSignatures extends FdAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends FdAllocator.ConstructorProps {}
    }
    class DmaBufAllocator extends FdAllocator {
        static $gtype: GObject.GType<DmaBufAllocator>;
        $signals: DmaBufAllocator.SignalSignatures;
        constructor(properties?: Partial<DmaBufAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DmaBufAllocator;
        connect<K extends keyof DmaBufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmaBufAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DmaBufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmaBufAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DmaBufAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DmaBufAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static alloc(allocator: Gst.Allocator, fd: number, size: bigint | number): Gst.Memory | null;
        static alloc_with_flags(allocator: Gst.Allocator, fd: number, size: bigint | number, flags: FdMemoryFlags): Gst.Memory | null;
    }
    namespace FdAllocator {
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    class FdAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<FdAllocator>;
        $signals: FdAllocator.SignalSignatures;
        constructor(properties?: Partial<FdAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): FdAllocator;
        connect<K extends keyof FdAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FdAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FdAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FdAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FdAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FdAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static alloc(allocator: Gst.Allocator, fd: number, size: bigint | number, flags: FdMemoryFlags): Gst.Memory | null;
        static alloc_full(allocator: Gst.Allocator, fd: number, maxsize: bigint | number, offset: bigint | number, size: bigint | number, flags: FdMemoryFlags): Gst.Memory | null;
    }
    namespace ShmAllocator {
        interface SignalSignatures extends FdAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends FdAllocator.ConstructorProps {}
    }
    class ShmAllocator extends FdAllocator {
        static $gtype: GObject.GType<ShmAllocator>;
        $signals: ShmAllocator.SignalSignatures;
        constructor(properties?: Partial<ShmAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ShmAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ShmAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShmAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ShmAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ShmAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ShmAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(): Gst.Allocator | null;
        static init_once(): void;
    }
    namespace UdmabufAllocator {
        interface SignalSignatures extends DmaBufAllocator.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends DmaBufAllocator.ConstructorProps {}
    }
    class UdmabufAllocator extends DmaBufAllocator {
        static $gtype: GObject.GType<UdmabufAllocator>;
        $signals: UdmabufAllocator.SignalSignatures;
        constructor(properties?: Partial<UdmabufAllocator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof UdmabufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UdmabufAllocator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UdmabufAllocator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UdmabufAllocator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UdmabufAllocator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UdmabufAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get(): Gst.Allocator | null;
        static init_once(): void;
    }
    type DRMDumbAllocatorClass = typeof DRMDumbAllocator;
    type DmaBufAllocatorClass = typeof DmaBufAllocator;
    type FdAllocatorClass = typeof FdAllocator;
    type PhysMemoryAllocatorInterface = typeof PhysMemoryAllocator;
    type ShmAllocatorClass = typeof ShmAllocator;
    type UdmabufAllocatorClass = typeof UdmabufAllocator;
    namespace PhysMemoryAllocator {
        interface Interface {
            vfunc_get_phys_addr(mem: Gst.Memory): bigint | number;
        }
        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }
    export interface PhysMemoryAllocatorNamespace {
        $gtype: GObject.GType<PhysMemoryAllocator>;
        prototype: PhysMemoryAllocator;
    }
    interface PhysMemoryAllocator extends Gst.Allocator, PhysMemoryAllocator.Interface {
    }
    export const PhysMemoryAllocator: PhysMemoryAllocatorNamespace & {
        new (): PhysMemoryAllocator; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstAllocators;
}
declare module 'gi://GstAllocators' {
    import GstAllocators10 from 'gi://GstAllocators?version=1.0';
    export default GstAllocators10;
}
