declare module 'gi://Gee?version=0.8' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Gee {
    class FutureError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static ABANDON_PROMISE: number;
        static EXCEPTION: number;
        constructor(options: { message: string; code: number });
    }
    export namespace ConcurrentSetRangeType {
        export const $gtype: GObject.GType<ConcurrentSetRangeType>;
    }
    enum ConcurrentSetRangeType {
        HEAD,
        TAIL,
        BOUNDED,
        EMPTY,
    }
    export namespace HazardPointerPolicy {
        export const $gtype: GObject.GType<HazardPointerPolicy>;
    }
    enum HazardPointerPolicy {
        DEFAULT,
        THREAD_EXIT,
        TRY_FREE,
        FREE,
        TRY_RELEASE,
        RELEASE,
    }
    export namespace HazardPointerReleasePolicy {
        export const $gtype: GObject.GType<HazardPointerReleasePolicy>;
    }
    enum HazardPointerReleasePolicy {
        HELPER_THREAD,
        MAIN_LOOP,
    }
    export namespace TraversableStream {
        export const $gtype: GObject.GType<TraversableStream>;
    }
    enum TraversableStream {
        YIELD,
        CONTINUE,
        END,
        WAIT,
    }
    function functions_get_equal_func_for(t: GObject.GType): [EqualDataFunc, null];
    function functions_get_hash_func_for(t: GObject.GType): [HashDataFunc, null];
    function functions_get_compare_func_for(t: GObject.GType): [GLib.CompareDataFunc, null];
    function hazard_pointer_policy_is_concrete(): boolean;
    function hazard_pointer_policy_is_blocking(): boolean;
    function hazard_pointer_policy_is_safe(): boolean;
    function hazard_pointer_policy_to_concrete(): HazardPointerPolicy;
    function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, task: Task): Future;
    function async_task(): globalThis.Promise<void>;
    function async_task(_callback_: Gio.AsyncReadyCallback | null): void;
    function async_task(_callback_: Gio.AsyncReadyCallback | null): globalThis.Promise<void> | void;
    function async_task_finish(_res_: Gio.AsyncResult): void;
    interface HashDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, v: null): number;
    }
    interface EqualDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, a: null, b: null): boolean;
    }
    interface LazyFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): null;
    }
    interface FoldMapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, k: null, v: null, a: null): null;
    }
    interface ForallMapFunc {
        (k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, k: null, v: null): boolean;
    }
    interface Task {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): null;
    }
    interface FoldFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: null, a: null): null;
    }
    interface ForallFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: null): boolean;
    }
    interface UnfoldFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc): Lazy | null;
    }
    interface StreamFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, state: TraversableStream, g: Lazy | null): TraversableStream;
    }
    interface MapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: null): null;
    }
    interface Predicate {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: null): boolean;
    }
    interface FlatMapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: null): Iterator;
    }
    namespace AbstractBidirList {
        interface SignalSignatures extends AbstractList.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractList.ConstructorProps, BidirList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirList;
            readOnlyView: BidirList;
        }
    }
    abstract class AbstractBidirList extends AbstractList implements BidirList {
        static $gtype: GObject.GType<AbstractBidirList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): BidirList;
        get readOnlyView(): BidirList;
        $signals: AbstractBidirList.SignalSignatures;
        constructor(properties?: Partial<AbstractBidirList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractBidirList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractBidirList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractBidirList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractBidirList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bidir_list_iterator(): BidirListIterator;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): BidirList;
        bidir_list_iterator(): BidirListIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirList;
        list_iterator(): ListIterator;
        get(index: number): null;
        set(index: number, item: null): void;
        set(...args: never[]): any;
        index_of(item: null): number;
        insert(index: number, item: null): void;
        remove_at(index: number): null;
        slice(start: number, stop: number): List | null;
        first(): null;
        last(): null;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func: GLib.CompareDataFunc | null): void;
        vfunc_list_iterator(): ListIterator;
        vfunc_get(index: number): null;
        vfunc_set(index: number, item: null): void;
        vfunc_index_of(item: null): number;
        vfunc_insert(index: number, item: null): void;
        vfunc_remove_at(index: number): null;
        vfunc_slice(start: number, stop: number): List | null;
        vfunc_first(): null;
        vfunc_last(): null;
        vfunc_insert_all(index: number, collection: Collection): void;
        vfunc_sort(compare_func: GLib.CompareDataFunc | null): void;
    }
    namespace AbstractBidirSortedSet {
        interface SignalSignatures extends AbstractSortedSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractSortedSet.ConstructorProps, BidirSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirSortedSet;
            readOnlyView: BidirSortedSet;
        }
    }
    abstract class AbstractBidirSortedSet extends AbstractSortedSet implements BidirSortedSet {
        static $gtype: GObject.GType<AbstractBidirSortedSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): BidirSortedSet;
        get readOnlyView(): BidirSortedSet;
        $signals: AbstractBidirSortedSet.SignalSignatures;
        constructor(properties?: Partial<AbstractBidirSortedSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractBidirSortedSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirSortedSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractBidirSortedSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirSortedSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractBidirSortedSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractBidirSortedSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bidir_iterator(): BidirIterator;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): BidirSortedSet;
        bidir_iterator(): BidirIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirSortedSet;
        first(): null;
        last(): null;
        iterator_at(element: null): Iterator | null;
        lower(element: null): null;
        higher(element: null): null;
        floor(element: null): null;
        ceil(element: null): null;
        head_set(before: null): SortedSet;
        tail_set(after: null): SortedSet;
        sub_set(from: null, to: null): SortedSet;
        vfunc_first(): null;
        vfunc_last(): null;
        vfunc_iterator_at(element: null): Iterator | null;
        vfunc_lower(element: null): null;
        vfunc_higher(element: null): null;
        vfunc_floor(element: null): null;
        vfunc_ceil(element: null): null;
        vfunc_head_set(before: null): SortedSet;
        vfunc_tail_set(after: null): SortedSet;
        vfunc_sub_set(from: null, to: null): SortedSet;
    }
    namespace AbstractBidirSortedMap {
        interface SignalSignatures extends AbstractSortedMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-keys": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-entries": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractSortedMap.ConstructorProps, BidirSortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirSortedMap | any;
            readOnlyView: BidirSortedMap | any;
        }
    }
    abstract class AbstractBidirSortedMap extends AbstractSortedMap implements BidirSortedMap {
        static $gtype: GObject.GType<AbstractBidirSortedMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): BidirSortedMap | any;
        get readOnlyView(): BidirSortedMap | any;
        $signals: AbstractBidirSortedMap.SignalSignatures;
        constructor(properties?: Partial<AbstractBidirSortedMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractBidirSortedMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirSortedMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractBidirSortedMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractBidirSortedMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractBidirSortedMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractBidirSortedMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_bidir_map_iterator(): BidirMapIterator;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): BidirSortedMap;
        bidir_map_iterator(): BidirMapIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirSortedMap;
        get ascending_keys(): SortedSet;
        get ascendingKeys(): SortedSet;
        get ascending_entries(): SortedSet;
        get ascendingEntries(): SortedSet;
        head_map(before: null): SortedMap;
        tail_map(after: null): SortedMap;
        sub_map(before: null, after: null): SortedMap;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        vfunc_head_map(before: null): SortedMap;
        vfunc_tail_map(after: null): SortedMap;
        vfunc_sub_map(before: null, after: null): SortedMap;
        vfunc_get_ascending_keys(): SortedSet;
        vfunc_get_ascending_entries(): SortedSet;
    }
    namespace AbstractCollection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Traversable.ConstructorProps, Iterable.ConstructorProps, Collection.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            size: number;
            read_only: boolean;
            readOnly: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }
    abstract class AbstractCollection extends GObject.Object implements Traversable, Iterable, Collection {
        static $gtype: GObject.GType<AbstractCollection>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        $signals: AbstractCollection.SignalSignatures;
        constructor(properties?: Partial<AbstractCollection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractCollection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractCollection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractCollection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractCollection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractCollection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_contains(item: null): boolean;
        vfunc_add(item: null): boolean;
        vfunc_remove(item: null): boolean;
        vfunc_clear(): void;
        vfunc_iterator(): Iterator;
        vfunc_foreach(f: ForallFunc): boolean;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_size(): number;
        vfunc_get_read_only(): boolean;
        vfunc_get_read_only_view(): Collection;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        iterator(): Iterator;
        foreach(f: ForallFunc): boolean;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_size(): number;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
        filter(pred: Predicate): Iterator;
        chop(offset: number, length: number): Iterator;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        tee(forks: number): Iterator[];
        first_match(pred: Predicate): null;
        any_match(pred: Predicate): boolean;
        all_match(pred: Predicate): boolean;
        max(compare: GLib.CompareDataFunc): null;
        min(compare: GLib.CompareDataFunc): null;
        order_by(compare: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
        vfunc_filter(pred: Predicate): Iterator;
        vfunc_chop(offset: number, length: number): Iterator;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        vfunc_tee(forks: number): Iterator[];
        vfunc_first_match(pred: Predicate): null;
        vfunc_any_match(pred: Predicate): boolean;
        vfunc_all_match(pred: Predicate): boolean;
        vfunc_max(compare: GLib.CompareDataFunc): null;
        vfunc_min(compare: GLib.CompareDataFunc): null;
        vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator;
        vfunc_get_element_type(): GObject.GType;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_is_empty(): boolean;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): never[];
        vfunc_add_all_array(array: null[]): boolean;
        vfunc_contains_all_array(array: null[]): boolean;
        vfunc_remove_all_array(array: null[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_is_empty(): boolean;
    }
    namespace AbstractList {
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractCollection.ConstructorProps, List.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: List;
            readOnlyView: List;
        }
    }
    abstract class AbstractList extends AbstractCollection implements List {
        static $gtype: GObject.GType<AbstractList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): List;
        get readOnlyView(): List;
        $signals: AbstractList.SignalSignatures;
        constructor(properties?: Partial<AbstractList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_list_iterator(): ListIterator;
        vfunc_get(index: number): null;
        vfunc_set(index: number, item: null): void;
        vfunc_index_of(item: null): number;
        vfunc_insert(index: number, item: null): void;
        vfunc_remove_at(index: number): null;
        vfunc_slice(start: number, stop: number): List | null;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): List;
        list_iterator(): ListIterator;
        get(index: number): null;
        set(index: number, item: null): void;
        set(...args: never[]): any;
        index_of(item: null): number;
        insert(index: number, item: null): void;
        remove_at(index: number): null;
        slice(start: number, stop: number): List | null;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): List;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        first(): null;
        last(): null;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func: GLib.CompareDataFunc | null): void;
        vfunc_first(): null;
        vfunc_last(): null;
        vfunc_insert_all(index: number, collection: Collection): void;
        vfunc_sort(compare_func: GLib.CompareDataFunc | null): void;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        vfunc_contains(item: null): boolean;
        vfunc_add(item: null): boolean;
        vfunc_remove(item: null): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): never[];
        vfunc_add_all_array(array: null[]): boolean;
        vfunc_contains_all_array(array: null[]): boolean;
        vfunc_remove_all_array(array: null[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }
    namespace AbstractMap {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Traversable.ConstructorProps, Iterable.ConstructorProps, Map.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            size: number;
            read_only: boolean;
            readOnly: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
        }
    }
    abstract class AbstractMap extends GObject.Object implements Traversable, Iterable, Map {
        static $gtype: GObject.GType<AbstractMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get keys(): Set;
        get values(): Collection;
        get entries(): Set;
        get read_only_view(): Map;
        get readOnlyView(): Map;
        $signals: AbstractMap.SignalSignatures;
        constructor(properties?: Partial<AbstractMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_has_key(key: null): boolean;
        vfunc_has(key: null, value: null): boolean;
        vfunc_get(key: null): null;
        vfunc_set(key: null, value: null): void;
        vfunc_unset(key: null): [boolean, never];
        vfunc_map_iterator(): MapIterator;
        vfunc_clear(): void;
        vfunc_foreach(f: ForallFunc): boolean;
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_size(): number;
        vfunc_get_read_only(): boolean;
        vfunc_get_keys(): Set;
        vfunc_get_values(): Collection;
        vfunc_get_entries(): Set;
        vfunc_get_read_only_view(): Map;
        has_key(key: null): boolean;
        has(key: null, value: null): boolean;
        get(key: null): null;
        set(key: null, value: null): void;
        set(...args: never[]): any;
        unset(key: null): [boolean, null];
        map_iterator(): MapIterator;
        clear(): void;
        foreach(f: ForallFunc): boolean;
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_size(): number;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_read_only_view(): Map;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
        filter(pred: Predicate): Iterator;
        chop(offset: number, length: number): Iterator;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        tee(forks: number): Iterator[];
        first_match(pred: Predicate): null;
        any_match(pred: Predicate): boolean;
        all_match(pred: Predicate): boolean;
        max(compare: GLib.CompareDataFunc): null;
        min(compare: GLib.CompareDataFunc): null;
        order_by(compare: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
        vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
        vfunc_filter(pred: Predicate): Iterator;
        vfunc_chop(offset: number, length: number): Iterator;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        vfunc_tee(forks: number): Iterator[];
        vfunc_first_match(pred: Predicate): null;
        vfunc_any_match(pred: Predicate): boolean;
        vfunc_all_match(pred: Predicate): boolean;
        vfunc_max(compare: GLib.CompareDataFunc): null;
        vfunc_min(compare: GLib.CompareDataFunc): null;
        vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator;
        vfunc_get_element_type(): GObject.GType;
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
        contains(key: null): boolean;
        remove(key: null): [boolean, null];
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
        contains_all(map: Map): boolean;
        get_is_empty(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;
        vfunc_get_is_empty(): boolean;
    }
    namespace AbstractMultiMap {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, MultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }
    abstract class AbstractMultiMap extends GObject.Object implements MultiMap {
        static $gtype: GObject.GType<AbstractMultiMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        $signals: AbstractMultiMap.SignalSignatures;
        constructor(properties?: Partial<AbstractMultiMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMultiMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMultiMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractMultiMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_create_value_storage(): Collection;
        vfunc_create_multi_key_set(): MultiSet;
        vfunc_get_value_equal_func(): [EqualDataFunc, never];
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_get_read_only_view(): MultiMap;
        create_value_storage(): Collection;
        create_multi_key_set(): MultiSet;
        get_value_equal_func(): [EqualDataFunc, null];
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        get_read_only_view(): MultiMap;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key: null): boolean;
        get(key: null): Collection;
        set(key: null, value: null): void;
        set(...args: never[]): any;
        remove(key: null, value: null): boolean;
        remove_all(key: null): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        get_size(): number;
        get_read_only(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        vfunc_get_keys(): Set;
        vfunc_get_all_keys(): MultiSet;
        vfunc_get_values(): Collection;
        vfunc_contains(key: null): boolean;
        vfunc_get(key: null): Collection;
        vfunc_set(key: null, value: null): void;
        vfunc_remove(key: null, value: null): boolean;
        vfunc_remove_all(key: null): boolean;
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_get_size(): number;
        vfunc_get_read_only(): boolean;
    }
    namespace AbstractMultiSet {
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractCollection.ConstructorProps, MultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    abstract class AbstractMultiSet extends AbstractCollection implements MultiSet {
        static $gtype: GObject.GType<AbstractMultiSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: AbstractMultiSet.SignalSignatures;
        constructor(properties?: Partial<AbstractMultiSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMultiSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractMultiSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractMultiSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_get_read_only_view(): MultiSet;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        get_read_only_view(): MultiSet;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        count(item: null): number;
        vfunc_count(item: null): number;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        vfunc_contains(item: null): boolean;
        vfunc_add(item: null): boolean;
        vfunc_remove(item: null): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): never[];
        vfunc_add_all_array(array: null[]): boolean;
        vfunc_contains_all_array(array: null[]): boolean;
        vfunc_remove_all_array(array: null[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }
    namespace AbstractQueue {
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractCollection.ConstructorProps, Queue.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            capacity: number;
            remaining_capacity: number;
            remainingCapacity: number;
            is_full: boolean;
            isFull: boolean;
        }
    }
    abstract class AbstractQueue extends AbstractCollection implements Queue {
        static $gtype: GObject.GType<AbstractQueue>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;
        $signals: AbstractQueue.SignalSignatures;
        constructor(properties?: Partial<AbstractQueue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_peek(): null;
        vfunc_poll(): null;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_capacity(): number;
        vfunc_get_remaining_capacity(): number;
        vfunc_get_is_full(): boolean;
        peek(): null;
        poll(): null;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        offer(element: null): boolean;
        drain(recipient: Collection, amount: number): number;
        vfunc_offer(element: null): boolean;
        vfunc_drain(recipient: Collection, amount: number): number;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
        vfunc_contains(item: null): boolean;
        vfunc_add(item: null): boolean;
        vfunc_remove(item: null): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): never[];
        vfunc_add_all_array(array: null[]): boolean;
        vfunc_contains_all_array(array: null[]): boolean;
        vfunc_remove_all_array(array: null[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        vfunc_get_read_only_view(): Collection;
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }
    namespace AbstractSet {
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractCollection.ConstructorProps, Set.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: Set;
            readOnlyView: Set;
        }
    }
    abstract class AbstractSet extends AbstractCollection implements Set {
        static $gtype: GObject.GType<AbstractSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): Set;
        get readOnlyView(): Set;
        $signals: AbstractSet.SignalSignatures;
        constructor(properties?: Partial<AbstractSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): Set;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): Set;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        vfunc_contains(item: null): boolean;
        vfunc_add(item: null): boolean;
        vfunc_remove(item: null): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): never[];
        vfunc_add_all_array(array: null[]): boolean;
        vfunc_contains_all_array(array: null[]): boolean;
        vfunc_remove_all_array(array: null[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }
    namespace AbstractSortedMap {
        interface SignalSignatures extends AbstractMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-keys": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-entries": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMap.ConstructorProps, SortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            ascending_keys: SortedSet;
            ascendingKeys: SortedSet;
            ascending_entries: SortedSet;
            ascendingEntries: SortedSet;
            readOnlyView: AbstractSortedMap;
            read_only_view: AbstractSortedMap;
        }
    }
    abstract class AbstractSortedMap extends AbstractMap implements SortedMap {
        static $gtype: GObject.GType<AbstractSortedMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        get ascending_keys(): SortedSet;
        get ascendingKeys(): SortedSet;
        get ascending_entries(): SortedSet;
        get ascendingEntries(): SortedSet;
        get readOnlyView(): AbstractSortedMap;
        get read_only_view(): AbstractSortedMap;
        $signals: AbstractSortedMap.SignalSignatures;
        constructor(properties?: Partial<AbstractSortedMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractSortedMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSortedMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractSortedMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSortedMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractSortedMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractSortedMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_head_map(before: null): SortedMap;
        vfunc_tail_map(after: null): SortedMap;
        vfunc_sub_map(before: null, after: null): SortedMap;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_ascending_keys(): SortedSet;
        vfunc_get_ascending_entries(): SortedSet;
        head_map(before: null): SortedMap;
        tail_map(after: null): SortedMap;
        sub_map(before: null, after: null): SortedMap;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get keys(): Set;
        get values(): Collection;
        get entries(): Set;
        get_read_only_view(): SortedMap;
        vfunc_get_read_only_view(): SortedMap;
        has_key(key: null): boolean;
        contains(key: null): boolean;
        has(key: null, value: null): boolean;
        get(key: null): null;
        set(key: null, value: null): void;
        set(...args: never[]): any;
        unset(key: null): [boolean, null];
        remove(key: null): [boolean, null];
        clear(): void;
        map_iterator(): MapIterator;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
        contains_all(map: Map): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        vfunc_has_key(key: null): boolean;
        vfunc_has(key: null, value: null): boolean;
        vfunc_get(key: null): null;
        vfunc_set(key: null, value: null): void;
        vfunc_unset(key: null): [boolean, never];
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        vfunc_get_keys(): Set;
        vfunc_get_values(): Collection;
        vfunc_get_entries(): Set;
    }
    namespace AbstractSortedSet {
        interface SignalSignatures extends AbstractSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractSet.ConstructorProps, SortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: SortedSet;
            readOnlyView: SortedSet;
        }
    }
    abstract class AbstractSortedSet extends AbstractSet implements SortedSet {
        static $gtype: GObject.GType<AbstractSortedSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get read_only_view(): SortedSet;
        get readOnlyView(): SortedSet;
        $signals: AbstractSortedSet.SignalSignatures;
        constructor(properties?: Partial<AbstractSortedSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AbstractSortedSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSortedSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractSortedSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractSortedSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractSortedSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractSortedSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_first(): null;
        vfunc_last(): null;
        vfunc_iterator_at(element: null): Iterator | null;
        vfunc_lower(element: null): null;
        vfunc_higher(element: null): null;
        vfunc_floor(element: null): null;
        vfunc_ceil(element: null): null;
        vfunc_head_set(before: null): SortedSet;
        vfunc_tail_set(after: null): SortedSet;
        vfunc_sub_set(from: null, to: null): SortedSet;
        vfunc_reserved0(): void;
        vfunc_reserved1(): void;
        vfunc_reserved2(): void;
        vfunc_reserved3(): void;
        vfunc_reserved4(): void;
        vfunc_reserved5(): void;
        vfunc_reserved6(): void;
        vfunc_reserved7(): void;
        vfunc_reserved8(): void;
        vfunc_reserved9(): void;
        vfunc_get_read_only_view(): SortedSet;
        first(): null;
        last(): null;
        iterator_at(element: null): Iterator | null;
        lower(element: null): null;
        higher(element: null): null;
        floor(element: null): null;
        ceil(element: null): null;
        head_set(before: null): SortedSet;
        tail_set(after: null): SortedSet;
        sub_set(from: null, to: null): SortedSet;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): SortedSet;
    }
    namespace ArrayList {
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractBidirList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class ArrayList extends AbstractBidirList {
        static $gtype: GObject.GType<ArrayList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: ArrayList.SignalSignatures;
        constructor(properties?: Partial<ArrayList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, equal_func: EqualDataFunc | null): ArrayList;
        static wrap(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, items: never[], equal_func: EqualDataFunc | null): ArrayList;
        connect<K extends keyof ArrayList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrayList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ArrayList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrayList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ArrayList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ArrayList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_all(collection: Collection): boolean;
        get_equal_func(): [EqualDataFunc, null];
    }
    namespace ArrayQueue {
        interface SignalSignatures extends AbstractQueue.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::is-empty": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractQueue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            is_empty: boolean;
            isEmpty: boolean;
        }
    }
    class ArrayQueue extends AbstractQueue implements Deque {
        static $gtype: GObject.GType<ArrayQueue>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        $signals: ArrayQueue.SignalSignatures;
        constructor(properties?: Partial<ArrayQueue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, equal_func: EqualDataFunc | null): ArrayQueue;
        connect<K extends keyof ArrayQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrayQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ArrayQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ArrayQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ArrayQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ArrayQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_equal_func(): [EqualDataFunc, null];
        get_is_empty(): boolean;
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;
        offer_head(element: null): boolean;
        peek_head(): null;
        poll_head(): null;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: null): boolean;
        peek_tail(): null;
        poll_tail(): null;
        drain_tail(recipient: Collection, amount: number): number;
        vfunc_offer_head(element: null): boolean;
        vfunc_peek_head(): null;
        vfunc_poll_head(): null;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: null): boolean;
        vfunc_peek_tail(): null;
        vfunc_poll_tail(): null;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
        offer(element: null): boolean;
        peek(): null;
        poll(): null;
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        vfunc_offer(element: null): boolean;
        vfunc_peek(): null;
        vfunc_poll(): null;
        vfunc_drain(recipient: Collection, amount: number): number;
        vfunc_get_capacity(): number;
        vfunc_get_remaining_capacity(): number;
        vfunc_get_is_full(): boolean;
    }
    namespace ConcurrentList {
        interface SignalSignatures extends AbstractList.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::is-empty": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            is_empty: boolean;
            isEmpty: boolean;
        }
    }
    class ConcurrentList extends AbstractList {
        static $gtype: GObject.GType<ConcurrentList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        $signals: ConcurrentList.SignalSignatures;
        constructor(properties?: Partial<ConcurrentList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, equal_func: EqualDataFunc | null): ConcurrentList;
        connect<K extends keyof ConcurrentList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConcurrentList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ConcurrentList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConcurrentList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ConcurrentList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ConcurrentList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_equal_func(): [EqualDataFunc, null];
        get_is_empty(): boolean;
    }
    namespace ConcurrentSet {
        interface SignalSignatures extends AbstractSortedSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class ConcurrentSet extends AbstractSortedSet {
        static $gtype: GObject.GType<ConcurrentSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: ConcurrentSet.SignalSignatures;
        constructor(properties?: Partial<ConcurrentSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, compare_func: GLib.CompareDataFunc | null): ConcurrentSet;
        connect<K extends keyof ConcurrentSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConcurrentSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ConcurrentSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConcurrentSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ConcurrentSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ConcurrentSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace HashMap {
        interface SignalSignatures extends AbstractMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }
    class HashMap extends AbstractMap {
        static $gtype: GObject.GType<HashMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        $signals: HashMap.SignalSignatures;
        constructor(properties?: Partial<HashMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_equal_func: EqualDataFunc | null): HashMap;
        connect<K extends keyof HashMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HashMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HashMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HashMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key_hash_func(): [HashDataFunc, null];
        get_key_equal_func(): [EqualDataFunc, null];
        get_value_equal_func(): [EqualDataFunc, null];
    }
    namespace HashMultiMap {
        interface SignalSignatures extends AbstractMultiMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }
    class HashMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<HashMultiMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        $signals: HashMultiMap.SignalSignatures;
        constructor(properties?: Partial<HashMultiMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_hash_func: HashDataFunc | null, value_equal_func: EqualDataFunc | null): HashMultiMap;
        connect<K extends keyof HashMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMultiMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HashMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMultiMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HashMultiMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HashMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key_hash_func(): [HashDataFunc, null];
        get_key_equal_func(): [EqualDataFunc, null];
        get_value_hash_func(): [HashDataFunc, null];
        get_value_equal_func(): [EqualDataFunc, null];
    }
    namespace HashMultiSet {
        interface SignalSignatures extends AbstractMultiSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class HashMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<HashMultiSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: HashMultiSet.SignalSignatures;
        constructor(properties?: Partial<HashMultiSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashMultiSet;
        static broken(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashMultiSet;
        connect<K extends keyof HashMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMultiSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HashMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashMultiSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HashMultiSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HashMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_hash_func(): [HashDataFunc, null];
        get_equal_func(): [EqualDataFunc, null];
    }
    namespace HashSet {
        interface SignalSignatures extends AbstractSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class HashSet extends AbstractSet {
        static $gtype: GObject.GType<HashSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: HashSet.SignalSignatures;
        constructor(properties?: Partial<HashSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashSet;
        connect<K extends keyof HashSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HashSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HashSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HashSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HashSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_hash_func(): [HashDataFunc, null];
        get_equal_func(): [EqualDataFunc, null];
    }
    namespace Lazy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Lazy {
        static $gtype: GObject.GType<Lazy>;
        ref_count: number;
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: LazyFunc): Lazy;
        static from_value(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, item: null): Lazy;
        connect<K extends keyof Lazy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Lazy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Lazy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Lazy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["eval"](): void;
        get(): null;
        get_value(): null;
        get_future(): Future | null;
    }
    namespace LinkedList {
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractBidirList.ConstructorProps, Queue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            readOnlyView: LinkedList;
            read_only_view: LinkedList;
        }
    }
    class LinkedList extends AbstractBidirList implements Queue, Deque {
        static $gtype: GObject.GType<LinkedList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get readOnlyView(): LinkedList;
        get read_only_view(): LinkedList;
        $signals: LinkedList.SignalSignatures;
        constructor(properties?: Partial<LinkedList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, equal_func: EqualDataFunc | null): LinkedList;
        connect<K extends keyof LinkedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkedList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LinkedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinkedList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LinkedList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LinkedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        first(): null;
        last(): null;
        get_equal_func(): [EqualDataFunc, null];
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;
        offer(element: null): boolean;
        peek(): null;
        poll(): null;
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        vfunc_offer(element: null): boolean;
        vfunc_peek(): null;
        vfunc_poll(): null;
        vfunc_drain(recipient: Collection, amount: number): number;
        vfunc_get_capacity(): number;
        vfunc_get_remaining_capacity(): number;
        vfunc_get_is_full(): boolean;
        offer_head(element: null): boolean;
        peek_head(): null;
        poll_head(): null;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: null): boolean;
        peek_tail(): null;
        poll_tail(): null;
        drain_tail(recipient: Collection, amount: number): number;
        vfunc_offer_head(element: null): boolean;
        vfunc_peek_head(): null;
        vfunc_poll_head(): null;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: null): boolean;
        vfunc_peek_tail(): null;
        vfunc_poll_tail(): null;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }
    namespace PriorityQueue {
        interface SignalSignatures extends AbstractQueue.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractQueue.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class PriorityQueue extends AbstractQueue {
        static $gtype: GObject.GType<PriorityQueue>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: PriorityQueue.SignalSignatures;
        constructor(properties?: Partial<PriorityQueue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, compare_func: GLib.CompareDataFunc | null): PriorityQueue;
        connect<K extends keyof PriorityQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PriorityQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PriorityQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PriorityQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PriorityQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PriorityQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        offer(element: null): boolean;
        drain(recipient: Collection, amount: number): number;
        get_compare_func(): [GLib.CompareDataFunc, null];
    }
    namespace Promise {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class Promise {
        static $gtype: GObject.GType<Promise>;
        ref_count: number;
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;
        connect<K extends keyof Promise.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Promise.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Promise.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Promise.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_value(value: null): void;
        set_exception(exception: GLib.Error): void;
        get_future(): Future;
    }
    namespace TreeMap {
        interface SignalSignatures extends AbstractBidirSortedMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-keys": (pspec: GObject.ParamSpec) => void;
            "notify::ascending-entries": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::keys": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractBidirSortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }
    class TreeMap extends AbstractBidirSortedMap {
        static $gtype: GObject.GType<TreeMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        $signals: TreeMap.SignalSignatures;
        constructor(properties?: Partial<TreeMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, key_compare_func: GLib.CompareDataFunc | null, value_equal_func: EqualDataFunc | null): TreeMap;
        connect<K extends keyof TreeMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TreeMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TreeMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key_compare_func(): [GLib.CompareDataFunc, null];
        get_value_equal_func(): [EqualDataFunc, null];
    }
    namespace TreeMultiMap {
        interface SignalSignatures extends AbstractMultiMap.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }
    class TreeMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<TreeMultiMap>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        $signals: TreeMultiMap.SignalSignatures;
        constructor(properties?: Partial<TreeMultiMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, key_compare_func: GLib.CompareDataFunc | null, value_compare_func: GLib.CompareDataFunc | null): TreeMultiMap;
        connect<K extends keyof TreeMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMultiMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TreeMultiMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMultiMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TreeMultiMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key_compare_func(): [GLib.CompareDataFunc, null];
        get_value_compare_func(): [GLib.CompareDataFunc, null];
    }
    namespace TreeMultiSet {
        interface SignalSignatures extends AbstractMultiSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class TreeMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<TreeMultiSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: TreeMultiSet.SignalSignatures;
        constructor(properties?: Partial<TreeMultiSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, compare_func: GLib.CompareDataFunc | null): TreeMultiSet;
        connect<K extends keyof TreeMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMultiSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TreeMultiSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeMultiSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TreeMultiSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compare_func(): [GLib.CompareDataFunc, null];
    }
    namespace TreeSet {
        interface SignalSignatures extends AbstractBidirSortedSet.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractBidirSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }
    class TreeSet extends AbstractBidirSortedSet {
        static $gtype: GObject.GType<TreeSet>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        $signals: TreeSet.SignalSignatures;
        constructor(properties?: Partial<TreeSet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, compare_func: GLib.CompareDataFunc | null): TreeSet;
        connect<K extends keyof TreeSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TreeSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TreeSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_compare_func(): [GLib.CompareDataFunc, null];
    }
    namespace UnrolledLinkedList {
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends AbstractBidirList.ConstructorProps, Queue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            readOnlyView: UnrolledLinkedList;
            read_only_view: UnrolledLinkedList;
        }
    }
    class UnrolledLinkedList extends AbstractBidirList implements Queue, Deque {
        static $gtype: GObject.GType<UnrolledLinkedList>;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get readOnlyView(): UnrolledLinkedList;
        get read_only_view(): UnrolledLinkedList;
        $signals: UnrolledLinkedList.SignalSignatures;
        constructor(properties?: Partial<UnrolledLinkedList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, equal_func: EqualDataFunc | null): UnrolledLinkedList;
        connect<K extends keyof UnrolledLinkedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnrolledLinkedList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UnrolledLinkedList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnrolledLinkedList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UnrolledLinkedList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnrolledLinkedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_equal_func(): [EqualDataFunc, null];
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;
        offer(element: null): boolean;
        peek(): null;
        poll(): null;
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        vfunc_offer(element: null): boolean;
        vfunc_peek(): null;
        vfunc_poll(): null;
        vfunc_drain(recipient: Collection, amount: number): number;
        vfunc_get_capacity(): number;
        vfunc_get_remaining_capacity(): number;
        vfunc_get_is_full(): boolean;
        offer_head(element: null): boolean;
        peek_head(): null;
        poll_head(): null;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: null): boolean;
        peek_tail(): null;
        poll_tail(): null;
        drain_tail(recipient: Collection, amount: number): number;
        vfunc_offer_head(element: null): boolean;
        vfunc_peek_head(): null;
        vfunc_poll_head(): null;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: null): boolean;
        vfunc_peek_tail(): null;
        vfunc_poll_tail(): null;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }
    namespace MapEntry {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::k-type": (pspec: GObject.ParamSpec) => void;
            "notify::k-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::k-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-type": (pspec: GObject.ParamSpec) => void;
            "notify::v-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::v-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::key": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            key: never;
            value: never;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    abstract class MapEntry extends GObject.Object {
        static $gtype: GObject.GType<MapEntry>;
        get k_type(): GObject.GType;
        get kType(): GObject.GType;
        get k_dup_func(): GObject.BoxedCopyFunc;
        get kDupFunc(): GObject.BoxedCopyFunc;
        get k_destroy_func(): GLib.DestroyNotify;
        get kDestroyFunc(): GLib.DestroyNotify;
        get v_type(): GObject.GType;
        get vType(): GObject.GType;
        get v_dup_func(): GObject.BoxedCopyFunc;
        get vDupFunc(): GObject.BoxedCopyFunc;
        get v_destroy_func(): GLib.DestroyNotify;
        get vDestroyFunc(): GLib.DestroyNotify;
        get key(): null;
        get value(): null;
        set value(val: never);
        get read_only(): boolean;
        get readOnly(): boolean;
        $signals: MapEntry.SignalSignatures;
        constructor(properties?: Partial<MapEntry.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof MapEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_get_key(): null;
        vfunc_get_value(): null;
        vfunc_set_value(value: null): void;
        vfunc_get_read_only(): boolean;
        get_key(): null;
        get_value(): null;
        set_value(value: null): void;
        get_read_only(): boolean;
    }
    type AbstractBidirListClass = typeof AbstractBidirList;
    abstract class AbstractBidirListPrivate {
        static $gtype: GObject.GType<AbstractBidirListPrivate>;
    }
    type AbstractBidirSortedSetClass = typeof AbstractBidirSortedSet;
    abstract class AbstractBidirSortedSetPrivate {
        static $gtype: GObject.GType<AbstractBidirSortedSetPrivate>;
    }
    type AbstractBidirSortedMapClass = typeof AbstractBidirSortedMap;
    abstract class AbstractBidirSortedMapPrivate {
        static $gtype: GObject.GType<AbstractBidirSortedMapPrivate>;
    }
    type AbstractCollectionClass = typeof AbstractCollection;
    abstract class AbstractCollectionPrivate {
        static $gtype: GObject.GType<AbstractCollectionPrivate>;
    }
    type AbstractListClass = typeof AbstractList;
    abstract class AbstractListPrivate {
        static $gtype: GObject.GType<AbstractListPrivate>;
    }
    type AbstractMapClass = typeof AbstractMap;
    abstract class AbstractMapPrivate {
        static $gtype: GObject.GType<AbstractMapPrivate>;
    }
    type AbstractMultiMapClass = typeof AbstractMultiMap;
    abstract class AbstractMultiMapPrivate {
        static $gtype: GObject.GType<AbstractMultiMapPrivate>;
    }
    type AbstractMultiSetClass = typeof AbstractMultiSet;
    abstract class AbstractMultiSetPrivate {
        static $gtype: GObject.GType<AbstractMultiSetPrivate>;
    }
    type AbstractQueueClass = typeof AbstractQueue;
    abstract class AbstractQueuePrivate {
        static $gtype: GObject.GType<AbstractQueuePrivate>;
    }
    type AbstractSetClass = typeof AbstractSet;
    abstract class AbstractSetPrivate {
        static $gtype: GObject.GType<AbstractSetPrivate>;
    }
    type AbstractSortedMapClass = typeof AbstractSortedMap;
    abstract class AbstractSortedMapPrivate {
        static $gtype: GObject.GType<AbstractSortedMapPrivate>;
    }
    type AbstractSortedSetClass = typeof AbstractSortedSet;
    abstract class AbstractSortedSetPrivate {
        static $gtype: GObject.GType<AbstractSortedSetPrivate>;
    }
    type ArrayListClass = typeof ArrayList;
    abstract class ArrayListPrivate {
        static $gtype: GObject.GType<ArrayListPrivate>;
    }
    type ArrayQueueClass = typeof ArrayQueue;
    abstract class ArrayQueuePrivate {
        static $gtype: GObject.GType<ArrayQueuePrivate>;
    }
    type ConcurrentListClass = typeof ConcurrentList;
    abstract class ConcurrentListPrivate {
        static $gtype: GObject.GType<ConcurrentListPrivate>;
    }
    type ConcurrentSetClass = typeof ConcurrentSet;
    abstract class ConcurrentSetPrivate {
        static $gtype: GObject.GType<ConcurrentSetPrivate>;
    }
    type HashMapClass = typeof HashMap;
    abstract class HashMapPrivate {
        static $gtype: GObject.GType<HashMapPrivate>;
    }
    type HashMultiMapClass = typeof HashMultiMap;
    abstract class HashMultiMapPrivate {
        static $gtype: GObject.GType<HashMultiMapPrivate>;
    }
    type HashMultiSetClass = typeof HashMultiSet;
    abstract class HashMultiSetPrivate {
        static $gtype: GObject.GType<HashMultiSetPrivate>;
    }
    type HashSetClass = typeof HashSet;
    abstract class HashSetPrivate {
        static $gtype: GObject.GType<HashSetPrivate>;
    }
    class HazardPointer {
        static $gtype: GObject.GType<HazardPointer>;
        constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr: null);
        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr: null): HazardPointer;
        static get_hazard_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, mask: bigint | number): [HazardPointer | null, number];
        static get_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, mask: bigint | number): [null, number];
        static exchange_hazard_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, new_ptr: null, mask: bigint | number, new_mask: bigint | number): [HazardPointer | null, number];
        static set_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, new_ptr: null, mask: bigint | number, new_mask: bigint | number): void;
        static exchange_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, new_ptr: null, mask: bigint | number, new_mask: bigint | number): [null, number];
        static compare_and_exchange_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, aptr: null, old_ptr: null, _new_ptr: null, mask: bigint | number, old_mask: bigint | number, new_mask: bigint | number): boolean;
        static set_default_policy(policy: HazardPointerPolicy): void;
        static set_thread_exit_policy(policy: HazardPointerPolicy): void;
        static set_release_policy(policy: HazardPointerReleasePolicy): boolean;
        get(other_thread: boolean): null;
        release(): void;
    }
    class HazardPointerContext {
        static $gtype: GObject.GType<HazardPointerContext>;
        constructor(policy: HazardPointerPolicy | null);
        static ["new"](policy: HazardPointerPolicy | null): HazardPointerContext;
        try_free(): void;
        free_all(): void;
        try_release(): void;
        release(): void;
    }
    type LazyClass = typeof Lazy;
    abstract class LazyPrivate {
        static $gtype: GObject.GType<LazyPrivate>;
    }
    type LinkedListClass = typeof LinkedList;
    abstract class LinkedListPrivate {
        static $gtype: GObject.GType<LinkedListPrivate>;
    }
    type PriorityQueueClass = typeof PriorityQueue;
    abstract class PriorityQueuePrivate {
        static $gtype: GObject.GType<PriorityQueuePrivate>;
    }
    type PromiseClass = typeof Promise;
    abstract class PromisePrivate {
        static $gtype: GObject.GType<PromisePrivate>;
    }
    type TreeMapClass = typeof TreeMap;
    abstract class TreeMapPrivate {
        static $gtype: GObject.GType<TreeMapPrivate>;
    }
    type TreeMultiMapClass = typeof TreeMultiMap;
    abstract class TreeMultiMapPrivate {
        static $gtype: GObject.GType<TreeMultiMapPrivate>;
    }
    type TreeMultiSetClass = typeof TreeMultiSet;
    abstract class TreeMultiSetPrivate {
        static $gtype: GObject.GType<TreeMultiSetPrivate>;
    }
    type TreeSetClass = typeof TreeSet;
    abstract class TreeSetPrivate {
        static $gtype: GObject.GType<TreeSetPrivate>;
    }
    type UnrolledLinkedListClass = typeof UnrolledLinkedList;
    abstract class UnrolledLinkedListPrivate {
        static $gtype: GObject.GType<UnrolledLinkedListPrivate>;
    }
    type BidirIteratorIface = typeof BidirIterator;
    type BidirListIface = typeof BidirList;
    type BidirListIteratorIface = typeof BidirListIterator;
    type BidirMapIteratorIface = typeof BidirMapIterator;
    type BidirSortedSetIface = typeof BidirSortedSet;
    type BidirSortedMapIface = typeof BidirSortedMap;
    type CollectionIface = typeof Collection;
    type ComparableIface = typeof Comparable;
    type DequeIface = typeof Deque;
    type FutureIface = typeof Future;
    type HashableIface = typeof Hashable;
    type IterableIface = typeof Iterable;
    type IteratorIface = typeof Iterator;
    type ListIface = typeof List;
    type ListIteratorIface = typeof ListIterator;
    type MapIface = typeof Map;
    type MapEntryClass = typeof MapEntry;
    abstract class MapEntryPrivate {
        static $gtype: GObject.GType<MapEntryPrivate>;
    }
    type MapIteratorIface = typeof MapIterator;
    type MultiMapIface = typeof MultiMap;
    type MultiSetIface = typeof MultiSet;
    type QueueIface = typeof Queue;
    type SetIface = typeof Set;
    type SortedMapIface = typeof SortedMap;
    type SortedSetIface = typeof SortedSet;
    type TraversableIface = typeof Traversable;
    namespace BidirIterator {
        interface Interface extends Iterator.Interface {
            vfunc_previous(): boolean;
            vfunc_has_previous(): boolean;
            vfunc_first(): boolean;
            vfunc_last(): boolean;
        }
        interface ConstructorProps extends Iterator.ConstructorProps {}
    }
    export interface BidirIteratorNamespace {
        $gtype: GObject.GType<BidirIterator>;
        prototype: BidirIterator;
    }
    interface BidirIterator extends Iterator, BidirIterator.Interface {
        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;
    }
    export const BidirIterator: BidirIteratorNamespace & {
        new (): BidirIterator; 
    };
    namespace BidirList {
        interface Interface extends List.Interface {
            vfunc_bidir_list_iterator(): BidirListIterator;
            vfunc_get_read_only_view(): BidirList;
        }
        interface ConstructorProps extends List.ConstructorProps {
            read_only_view: BidirList;
            readOnlyView: BidirList;
        }
    }
    export interface BidirListNamespace {
        $gtype: GObject.GType<BidirList>;
        prototype: BidirList;
    }
    interface BidirList extends List {
        get read_only_view(): BidirList;
        get readOnlyView(): BidirList;
        bidir_list_iterator(): BidirListIterator;
        get_read_only_view(): BidirList;
    vfunc_bidir_list_iterator(): BidirListIterator;
    vfunc_get_read_only_view(): BidirList;
    vfunc_get_read_only_view(): List;
    vfunc_get_read_only_view(): Collection;
    }
    export const BidirList: BidirListNamespace & {
        new (): BidirList; 
    };
    namespace BidirListIterator {
        interface Interface extends BidirIterator.Interface {
            vfunc_insert(item: null): void;
        }
        interface ConstructorProps extends BidirIterator.ConstructorProps {}
    }
    export interface BidirListIteratorNamespace {
        $gtype: GObject.GType<BidirListIterator>;
        prototype: BidirListIterator;
    }
    interface BidirListIterator extends BidirIterator, BidirListIterator.Interface {
        insert(item: null): void;
    }
    export const BidirListIterator: BidirListIteratorNamespace & {
        new (): BidirListIterator; 
    };
    namespace BidirMapIterator {
        interface Interface extends MapIterator.Interface {
            vfunc_previous(): boolean;
            vfunc_has_previous(): boolean;
            vfunc_first(): boolean;
            vfunc_last(): boolean;
        }
        interface ConstructorProps extends MapIterator.ConstructorProps {}
    }
    export interface BidirMapIteratorNamespace {
        $gtype: GObject.GType<BidirMapIterator>;
        prototype: BidirMapIterator;
    }
    interface BidirMapIterator extends MapIterator, BidirMapIterator.Interface {
        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;
    }
    export const BidirMapIterator: BidirMapIteratorNamespace & {
        new (): BidirMapIterator; 
    };
    namespace BidirSortedSet {
        interface Interface extends SortedSet.Interface {
            vfunc_bidir_iterator(): BidirIterator;
            vfunc_get_read_only_view(): BidirSortedSet;
        }
        interface ConstructorProps extends SortedSet.ConstructorProps {
            read_only_view: BidirSortedSet;
            readOnlyView: BidirSortedSet;
        }
    }
    export interface BidirSortedSetNamespace {
        $gtype: GObject.GType<BidirSortedSet>;
        prototype: BidirSortedSet;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): BidirSortedSet;
    }
    interface BidirSortedSet extends SortedSet {
        get read_only_view(): BidirSortedSet;
        get readOnlyView(): BidirSortedSet;
        bidir_iterator(): BidirIterator;
        get_read_only_view(): BidirSortedSet;
    vfunc_bidir_iterator(): BidirIterator;
    vfunc_get_read_only_view(): BidirSortedSet;
    vfunc_get_read_only_view(): SortedSet;
    vfunc_get_read_only_view(): Set;
    vfunc_get_read_only_view(): Collection;
    }
    export const BidirSortedSet: BidirSortedSetNamespace & {
        new (): BidirSortedSet; 
    };
    namespace BidirSortedMap {
        interface Interface extends SortedMap.Interface {
            vfunc_bidir_map_iterator(): BidirMapIterator;
            vfunc_get_read_only_view(): BidirSortedMap;
        }
        interface ConstructorProps extends SortedMap.ConstructorProps {
            read_only_view: BidirSortedMap;
            readOnlyView: BidirSortedMap;
        }
    }
    export interface BidirSortedMapNamespace {
        $gtype: GObject.GType<BidirSortedMap>;
        prototype: BidirSortedMap;
        empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc): BidirSortedMap;
    }
    interface BidirSortedMap extends SortedMap {
        get read_only_view(): BidirSortedMap;
        get readOnlyView(): BidirSortedMap;
        bidir_map_iterator(): BidirMapIterator;
        get_read_only_view(): BidirSortedMap;
    vfunc_bidir_map_iterator(): BidirMapIterator;
    vfunc_get_read_only_view(): BidirSortedMap;
    vfunc_get_read_only_view(): SortedMap;
    vfunc_get_read_only_view(): Map;
    }
    export const BidirSortedMap: BidirSortedMapNamespace & {
        new (): BidirSortedMap; 
    };
    namespace Collection {
        interface Interface extends Iterable.Interface {
            vfunc_contains(item: null): boolean;
            vfunc_add(item: null): boolean;
            vfunc_remove(item: null): boolean;
            vfunc_clear(): void;
            vfunc_add_all(collection: Collection): boolean;
            vfunc_contains_all(collection: Collection): boolean;
            vfunc_remove_all(collection: Collection): boolean;
            vfunc_retain_all(collection: Collection): boolean;
            vfunc_to_array(): never[];
            vfunc_add_all_array(array: null[]): boolean;
            vfunc_contains_all_array(array: null[]): boolean;
            vfunc_remove_all_array(array: null[]): boolean;
            vfunc_add_all_iterator(iter: Iterator): boolean;
            vfunc_contains_all_iterator(iter: Iterator): boolean;
            vfunc_remove_all_iterator(iter: Iterator): boolean;
            vfunc_get_size(): number;
            vfunc_get_is_empty(): boolean;
            vfunc_get_read_only(): boolean;
            vfunc_get_read_only_view(): Collection;
        }
        interface ConstructorProps extends Iterable.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }
    export interface CollectionNamespace {
        $gtype: GObject.GType<Collection>;
        prototype: Collection;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collection;
    }
    interface Collection extends Iterable, Collection.Interface {
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        contains(item: null): boolean;
        add(item: null): boolean;
        remove(item: null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): null[];
        add_all_array(array: never[]): boolean;
        contains_all_array(array: never[]): boolean;
        remove_all_array(array: never[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
    }
    export const Collection: CollectionNamespace & {
        new (): Collection; 
    };
    namespace Comparable {
        interface Interface {
            vfunc_compare_to(object: null): number;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ComparableNamespace {
        $gtype: GObject.GType<Comparable>;
        prototype: Comparable;
    }
    interface Comparable extends GObject.Object, Comparable.Interface {
        compare_to(object: null): number;
    }
    export const Comparable: ComparableNamespace & {
        new (): Comparable; 
    };
    namespace Deque {
        interface Interface extends Queue.Interface {
            vfunc_offer_head(element: null): boolean;
            vfunc_peek_head(): null;
            vfunc_poll_head(): null;
            vfunc_drain_head(recipient: Collection, amount: number): number;
            vfunc_offer_tail(element: null): boolean;
            vfunc_peek_tail(): null;
            vfunc_poll_tail(): null;
            vfunc_drain_tail(recipient: Collection, amount: number): number;
        }
        interface ConstructorProps extends Queue.ConstructorProps {}
    }
    export interface DequeNamespace {
        $gtype: GObject.GType<Deque>;
        prototype: Deque;
    }
    interface Deque extends Queue, Deque.Interface {
        offer_head(element: null): boolean;
        peek_head(): null;
        poll_head(): null;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: null): boolean;
        peek_tail(): null;
        poll_tail(): null;
        drain_tail(recipient: Collection, amount: number): number;
    }
    export const Deque: DequeNamespace & {
        new (): Deque; 
    };
    namespace Future {
        interface Interface {
            vfunc_wait(): null;
            vfunc_wait_until(end_time: number): [boolean, never];
            vfunc_wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_wait_finish(_res_: Gio.AsyncResult): null;
            vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.MapFunc): Future;
            vfunc_light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
            vfunc_light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
            vfunc_zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, zip_func: Future.ZipFunc, second: Future): Future;
            vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.FlatMapFunc): Future;
            vfunc_get_value(): null;
            vfunc_get_ready(): boolean;
            vfunc_get_exception(): GLib.Error | null;
        }
    interface MapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: null): null;
    }
    interface LightMapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: null): null;
    }
    interface ZipFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, c_type: GObject.GType, c_dup_func: GObject.BoxedCopyFunc, a: null, b: null): null;
    }
    interface FlatMapFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: null): Future;
    }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ready: boolean;
            exception: GLib.Error | null;
        }
    }
    export interface FutureNamespace {
        $gtype: GObject.GType<Future>;
        prototype: Future;
    }
    interface Future extends GObject.Object, Future.Interface {
        get ready(): boolean;
        get exception(): GLib.Error | null;
        wait(): null;
        wait_until(end_time: bigint | number): [boolean, null];
        wait_async(): globalThis.Promise<null>;
        wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<null> | void;
        wait_finish(_res_: Gio.AsyncResult): null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.MapFunc): Future;
        light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
        light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
        zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, zip_func: Future.ZipFunc, second: Future): Future;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.FlatMapFunc): Future;
        get_value(): null;
        get_ready(): boolean;
        get_exception(): GLib.Error | null;
    }
    export const Future: FutureNamespace & {
        new (): Future; 
    };
    namespace Hashable {
        interface Interface {
            vfunc_hash(): number;
            vfunc_equal_to(object: null): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HashableNamespace {
        $gtype: GObject.GType<Hashable>;
        prototype: Hashable;
    }
    interface Hashable extends GObject.Object, Hashable.Interface {
        hash(): number;
        equal_to(object: null): boolean;
    }
    export const Hashable: HashableNamespace & {
        new (): Hashable; 
    };
    namespace Iterable {
        interface Interface {
            vfunc_iterator(): Iterator;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface IterableNamespace {
        $gtype: GObject.GType<Iterable>;
        prototype: Iterable;
    }
    interface Iterable extends GObject.Object, Iterable.Interface {
        iterator(): Iterator;
    }
    export const Iterable: IterableNamespace & {
        new (): Iterable; 
    };
    namespace Iterator {
        interface Interface {
            vfunc_next(): boolean;
            vfunc_has_next(): boolean;
            vfunc_get(): null;
            vfunc_remove(): void;
            vfunc_get_valid(): boolean;
            vfunc_get_read_only(): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            valid: boolean;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    export interface IteratorNamespace {
        $gtype: GObject.GType<Iterator>;
        prototype: Iterator;
        unfold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: UnfoldFunc, current: Lazy | null): Iterator;
        concat(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, iters: Iterator): Iterator;
    }
    interface Iterator extends GObject.Object, Iterator.Interface {
        get valid(): boolean;
        get read_only(): boolean;
        get readOnly(): boolean;
        next(): boolean;
        has_next(): boolean;
        get(): null;
        remove(): void;
        get_valid(): boolean;
        get_read_only(): boolean;
    }
    export const Iterator: IteratorNamespace & {
        new (): Iterator; 
    };
    namespace List {
        interface Interface extends Collection.Interface {
            vfunc_list_iterator(): ListIterator;
            vfunc_get(index: number): null;
            vfunc_set(index: number, item: null): void;
            vfunc_index_of(item: null): number;
            vfunc_insert(index: number, item: null): void;
            vfunc_remove_at(index: number): null;
            vfunc_slice(start: number, stop: number): List | null;
            vfunc_first(): null;
            vfunc_last(): null;
            vfunc_insert_all(index: number, collection: Collection): void;
            vfunc_sort(compare_func: GLib.CompareDataFunc | null): void;
            vfunc_get_read_only_view(): List;
        }
        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: List;
            readOnlyView: List;
        }
    }
    export interface ListNamespace {
        $gtype: GObject.GType<List>;
        prototype: List;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): List;
    }
    interface List extends Collection {
        get read_only_view(): List;
        get readOnlyView(): List;
        list_iterator(): ListIterator;
        get(index: number): null;
        set(index: number, item: null): void;
        set(...args: never[]): any;
        index_of(item: null): number;
        insert(index: number, item: null): void;
        remove_at(index: number): null;
        slice(start: number, stop: number): List | null;
        first(): null;
        last(): null;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func: GLib.CompareDataFunc | null): void;
        get_read_only_view(): List;
    vfunc_list_iterator(): ListIterator;
    vfunc_get(index: number): null;
    vfunc_set(index: number, item: null): void;
    vfunc_index_of(item: null): number;
    vfunc_insert(index: number, item: null): void;
    vfunc_remove_at(index: number): null;
    vfunc_slice(start: number, stop: number): List | null;
    vfunc_first(): null;
    vfunc_last(): null;
    vfunc_insert_all(index: number, collection: Collection): void;
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void;
    vfunc_get_read_only_view(): List;
    vfunc_get_read_only_view(): Collection;
    }
    export const List: ListNamespace & {
        new (): List; 
    };
    namespace ListIterator {
        interface Interface extends Iterator.Interface {
            vfunc_set(item: null): void;
            vfunc_add(item: null): void;
            vfunc_index(): number;
        }
        interface ConstructorProps extends Iterator.ConstructorProps {}
    }
    export interface ListIteratorNamespace {
        $gtype: GObject.GType<ListIterator>;
        prototype: ListIterator;
    }
    interface ListIterator extends Iterator, ListIterator.Interface {
        set(item: null): void;
        set(...args: never[]): any;
        add(item: null): void;
        index(): number;
    }
    export const ListIterator: ListIteratorNamespace & {
        new (): ListIterator; 
    };
    namespace Map {
        interface Interface {
            vfunc_has_key(key: null): boolean;
            vfunc_has(key: null, value: null): boolean;
            vfunc_get(key: null): null;
            vfunc_set(key: null, value: null): void;
            vfunc_unset(key: null): [boolean, never];
            vfunc_clear(): void;
            vfunc_map_iterator(): MapIterator;
            vfunc_set_all(map: Map): void;
            vfunc_unset_all(map: Map): boolean;
            vfunc_has_all(map: Map): boolean;
            vfunc_get_size(): number;
            vfunc_get_is_empty(): boolean;
            vfunc_get_read_only(): boolean;
            vfunc_get_keys(): Set;
            vfunc_get_values(): Collection;
            vfunc_get_entries(): Set;
            vfunc_get_read_only_view(): Map;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
        }
    }
    export interface MapNamespace {
        $gtype: GObject.GType<Map>;
        prototype: Map;
        empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc): Map;
    }
    interface Map extends GObject.Object, Map.Interface {
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get keys(): Set;
        get values(): Collection;
        get entries(): Set;
        get read_only_view(): Map;
        get readOnlyView(): Map;
        has_key(key: null): boolean;
        contains(key: null): boolean;
        has(key: null, value: null): boolean;
        get(key: null): null;
        set(key: null, value: null): void;
        set(...args: never[]): any;
        unset(key: null): [boolean, null];
        remove(key: null): [boolean, null];
        clear(): void;
        map_iterator(): MapIterator;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
        contains_all(map: Map): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_read_only_view(): Map;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
    }
    export const Map: MapNamespace & {
        new (): Map; 
    };
    namespace MapIterator {
        interface Interface {
            vfunc_next(): boolean;
            vfunc_has_next(): boolean;
            vfunc_get_key(): null;
            vfunc_get_value(): null;
            vfunc_set_value(value: null): void;
            vfunc_unset(): void;
            vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: null): null;
            vfunc_foreach(f: ForallMapFunc): boolean;
            vfunc_get_valid(): boolean;
            vfunc_get_mutable(): boolean;
            vfunc_get_read_only(): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            valid: boolean;
            mutable: boolean;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    export interface MapIteratorNamespace {
        $gtype: GObject.GType<MapIterator>;
        prototype: MapIterator;
    }
    interface MapIterator extends GObject.Object, MapIterator.Interface {
        get valid(): boolean;
        get mutable(): boolean;
        get read_only(): boolean;
        get readOnly(): boolean;
        next(): boolean;
        has_next(): boolean;
        get_key(): null;
        get_value(): null;
        set_value(value: null): void;
        unset(): void;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: null): null;
        foreach(f: ForallMapFunc): boolean;
        get_valid(): boolean;
        get_mutable(): boolean;
        get_read_only(): boolean;
    }
    export const MapIterator: MapIteratorNamespace & {
        new (): MapIterator; 
    };
    namespace MultiMap {
        interface Interface {
            vfunc_get_keys(): Set;
            vfunc_get_all_keys(): MultiSet;
            vfunc_get_values(): Collection;
            vfunc_contains(key: null): boolean;
            vfunc_get(key: null): Collection;
            vfunc_set(key: null, value: null): void;
            vfunc_remove(key: null, value: null): boolean;
            vfunc_remove_all(key: null): boolean;
            vfunc_clear(): void;
            vfunc_map_iterator(): MapIterator;
            vfunc_get_size(): number;
            vfunc_get_read_only(): boolean;
            vfunc_get_read_only_view(): MultiMap;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
        }
    }
    export interface MultiMapNamespace {
        $gtype: GObject.GType<MultiMap>;
        prototype: MultiMap;
    }
    interface MultiMap extends GObject.Object, MultiMap.Interface {
        get size(): number;
        get read_only(): boolean;
        get readOnly(): boolean;
        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key: null): boolean;
        get(key: null): Collection;
        set(key: null, value: null): void;
        set(...args: never[]): any;
        remove(key: null, value: null): boolean;
        remove_all(key: null): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        get_size(): number;
        get_read_only(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        get_read_only_view(): MultiMap;
    }
    export const MultiMap: MultiMapNamespace & {
        new (): MultiMap; 
    };
    namespace MultiSet {
        interface Interface extends Collection.Interface {
            vfunc_count(item: null): number;
            vfunc_get_read_only_view(): MultiSet;
        }
        interface ConstructorProps extends Collection.ConstructorProps {}
    }
    export interface MultiSetNamespace {
        $gtype: GObject.GType<MultiSet>;
        prototype: MultiSet;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
    }
    interface MultiSet extends Collection {
        count(item: null): number;
        get_read_only_view(): MultiSet;
    vfunc_count(item: null): number;
    vfunc_get_read_only_view(): MultiSet;
    vfunc_get_read_only_view(): Collection;
    }
    export const MultiSet: MultiSetNamespace & {
        new (): MultiSet; 
    };
    namespace Queue {
        interface Interface extends Collection.Interface {
            vfunc_offer(element: null): boolean;
            vfunc_peek(): null;
            vfunc_poll(): null;
            vfunc_drain(recipient: Collection, amount: number): number;
            vfunc_get_capacity(): number;
            vfunc_get_remaining_capacity(): number;
            vfunc_get_is_full(): boolean;
        }
        interface ConstructorProps extends Collection.ConstructorProps {
            capacity: number;
            remaining_capacity: number;
            remainingCapacity: number;
            is_full: boolean;
            isFull: boolean;
        }
    }
    export interface QueueNamespace {
        $gtype: GObject.GType<Queue>;
        prototype: Queue;
    }
    interface Queue extends Collection, Queue.Interface {
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;
        offer(element: null): boolean;
        peek(): null;
        poll(): null;
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
    }
    export const Queue: QueueNamespace & {
        new (): Queue; 
    };
    namespace Set {
        interface Interface extends Collection.Interface {
            vfunc_get_read_only_view(): Set;
        }
        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: Set;
            readOnlyView: Set;
        }
    }
    export interface SetNamespace {
        $gtype: GObject.GType<Set>;
        prototype: Set;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
    }
    interface Set extends Collection {
        get read_only_view(): Set;
        get readOnlyView(): Set;
        get_read_only_view(): Set;
    vfunc_get_read_only_view(): Set;
    vfunc_get_read_only_view(): Collection;
    }
    export const Set: SetNamespace & {
        new (): Set; 
    };
    namespace SortedMap {
        interface Interface extends Map.Interface {
            vfunc_head_map(before: null): SortedMap;
            vfunc_tail_map(after: null): SortedMap;
            vfunc_sub_map(before: null, after: null): SortedMap;
            vfunc_get_ascending_keys(): SortedSet;
            vfunc_get_ascending_entries(): SortedSet;
            vfunc_get_read_only_view(): SortedMap;
        }
        interface ConstructorProps extends Map.ConstructorProps {
            ascending_keys: SortedSet;
            ascendingKeys: SortedSet;
            ascending_entries: SortedSet;
            ascendingEntries: SortedSet;
            read_only_view: SortedMap;
            readOnlyView: SortedMap;
        }
    }
    export interface SortedMapNamespace {
        $gtype: GObject.GType<SortedMap>;
        prototype: SortedMap;
        empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc): Map;
    }
    interface SortedMap extends Map {
        get ascending_keys(): SortedSet;
        get ascendingKeys(): SortedSet;
        get ascending_entries(): SortedSet;
        get ascendingEntries(): SortedSet;
        get read_only_view(): SortedMap;
        get readOnlyView(): SortedMap;
        head_map(before: null): SortedMap;
        tail_map(after: null): SortedMap;
        sub_map(before: null, after: null): SortedMap;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        get_read_only_view(): SortedMap;
    vfunc_head_map(before: null): SortedMap;
    vfunc_tail_map(after: null): SortedMap;
    vfunc_sub_map(before: null, after: null): SortedMap;
    vfunc_get_ascending_keys(): SortedSet;
    vfunc_get_ascending_entries(): SortedSet;
    vfunc_get_read_only_view(): SortedMap;
    vfunc_get_read_only_view(): Map;
    }
    export const SortedMap: SortedMapNamespace & {
        new (): SortedMap; 
    };
    namespace SortedSet {
        interface Interface extends Set.Interface {
            vfunc_first(): null;
            vfunc_last(): null;
            vfunc_iterator_at(element: null): Iterator | null;
            vfunc_lower(element: null): null;
            vfunc_higher(element: null): null;
            vfunc_floor(element: null): null;
            vfunc_ceil(element: null): null;
            vfunc_head_set(before: null): SortedSet;
            vfunc_tail_set(after: null): SortedSet;
            vfunc_sub_set(from: null, to: null): SortedSet;
            vfunc_get_read_only_view(): SortedSet;
        }
        interface ConstructorProps extends Set.ConstructorProps {
            read_only_view: SortedSet;
            readOnlyView: SortedSet;
        }
    }
    export interface SortedSetNamespace {
        $gtype: GObject.GType<SortedSet>;
        prototype: SortedSet;
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): SortedSet;
    }
    interface SortedSet extends Set {
        get read_only_view(): SortedSet;
        get readOnlyView(): SortedSet;
        first(): null;
        last(): null;
        iterator_at(element: null): Iterator | null;
        lower(element: null): null;
        higher(element: null): null;
        floor(element: null): null;
        ceil(element: null): null;
        head_set(before: null): SortedSet;
        tail_set(after: null): SortedSet;
        sub_set(from: null, to: null): SortedSet;
        get_read_only_view(): SortedSet;
    vfunc_first(): null;
    vfunc_last(): null;
    vfunc_iterator_at(element: null): Iterator | null;
    vfunc_lower(element: null): null;
    vfunc_higher(element: null): null;
    vfunc_floor(element: null): null;
    vfunc_ceil(element: null): null;
    vfunc_head_set(before: null): SortedSet;
    vfunc_tail_set(after: null): SortedSet;
    vfunc_sub_set(from: null, to: null): SortedSet;
    vfunc_get_read_only_view(): SortedSet;
    vfunc_get_read_only_view(): Set;
    vfunc_get_read_only_view(): Collection;
    }
    export const SortedSet: SortedSetNamespace & {
        new (): SortedSet; 
    };
    namespace Traversable {
        interface Interface {
            vfunc_foreach(f: ForallFunc): boolean;
            vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
            vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
            vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
            vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
            vfunc_filter(pred: Predicate): Iterator;
            vfunc_chop(offset: number, length: number): Iterator;
            vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
            vfunc_tee(forks: number): Iterator[];
            vfunc_first_match(pred: Predicate): null;
            vfunc_any_match(pred: Predicate): boolean;
            vfunc_all_match(pred: Predicate): boolean;
            vfunc_max(compare: GLib.CompareDataFunc): null;
            vfunc_min(compare: GLib.CompareDataFunc): null;
            vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator;
            vfunc_get_element_type(): GObject.GType;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TraversableNamespace {
        $gtype: GObject.GType<Traversable>;
        prototype: Traversable;
    }
    interface Traversable extends GObject.Object, Traversable.Interface {
        foreach(f: ForallFunc): boolean;
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: null): Iterator;
        filter(pred: Predicate): Iterator;
        chop(offset: number, length: number): Iterator;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        tee(forks: number): Iterator[];
        first_match(pred: Predicate): null;
        any_match(pred: Predicate): boolean;
        all_match(pred: Predicate): boolean;
        max(compare: GLib.CompareDataFunc): null;
        min(compare: GLib.CompareDataFunc): null;
        order_by(compare: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
    }
    export const Traversable: TraversableNamespace & {
        new (): Traversable; 
    };
    const __name__: string;
    const __version__: string;
}
export default Gee;
}
declare module 'gi://Gee' {
    import Gee08 from 'gi://Gee?version=0.8';
    export default Gee08;
}
