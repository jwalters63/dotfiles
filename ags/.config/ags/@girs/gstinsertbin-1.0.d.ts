declare module 'gi://GstInsertBin?version=1.0' {
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstInsertBin {
    interface InsertBinCallback {
        (insertbin: InsertBin, element: Gst.Element, success: boolean): void;
    }
    namespace InsertBin {
        interface SignalSignatures extends Gst.Bin.SignalSignatures {
            append: (arg0: Gst.Element, arg1: null, arg2: null) => void;
            "insert-after": (arg0: Gst.Element, arg1: Gst.Element, arg2: null, arg3: null) => void;
            "insert-before": (arg0: Gst.Element, arg1: Gst.Element, arg2: null, arg3: null) => void;
            prepend: (arg0: Gst.Element, arg1: null, arg2: null) => void;
            remove: (arg0: Gst.Element, arg1: null, arg2: null) => void;
            "notify::async-handling": (pspec: GObject.ParamSpec) => void;
            "notify::message-forward": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Bin.ConstructorProps, Gst.ChildProxy.ConstructorProps {}
    }
    class InsertBin extends Gst.Bin implements Gst.ChildProxy {
        static $gtype: GObject.GType<InsertBin>;
        $signals: InsertBin.SignalSignatures;
        constructor(properties?: Partial<InsertBin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): InsertBin;
        connect<K extends keyof InsertBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InsertBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InsertBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InsertBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InsertBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InsertBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append(element: Gst.Element, callback: InsertBinCallback): void;
        insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
        prepend(element: Gst.Element, callback: InsertBinCallback): void;
        remove(element: Gst.Element, callback: InsertBinCallback): void;
        remove(...args: never[]): any;
        child_added(child: GObject.Object, name: string): void;
        child_removed(child: GObject.Object, name: string): void;
        get_child_by_index<T = GObject.Object>(index: number): T;
        get_child_by_name<T = GObject.Object>(name: string): T;
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        get_children_count(): number;
        get_property(name: string): unknown;
        get_property(...args: never[]): any;
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        set_property(name: string, value: GObject.Value | any): void;
        vfunc_child_added(child: GObject.Object, name: string): void;
        vfunc_child_removed(child: GObject.Object, name: string): void;
        vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
        vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
        vfunc_get_children_count(): number;
        ref(): GObject.Object;
        ref(...args: never[]): any;
        unref(): void;
    }
    type InsertBinClass = typeof InsertBin;
    abstract class InsertBinPrivate {
        static $gtype: GObject.GType<InsertBinPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default GstInsertBin;
}
declare module 'gi://GstInsertBin' {
    import GstInsertBin10 from 'gi://GstInsertBin?version=1.0';
    export default GstInsertBin10;
}
