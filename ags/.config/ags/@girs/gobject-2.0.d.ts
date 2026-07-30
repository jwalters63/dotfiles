declare module 'gi://GObject?version=2.0' {
import type GLib from 'gi://GLib?version=2.0';
export namespace GObject {
export type GjsParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
export type GType<T = unknown> = {
    __type__(arg: never): T
    name: string
}
export type GTypeInput<T = unknown> = GType<T> | { $gtype: GType<T> }
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: GTypeInput
    param_types?: GTypeInput[]
}
export interface MetaInfo<Props, Interfaces, Sigs> {
    GTypeName?: string
    GTypeFlags?: TypeFlags
    Properties?: Props
    Signals?: Sigs
    Implements?: Interfaces
    CssName?: string
    Template?: Uint8Array | GLib.Bytes | string
    Children?: string[]
    InternalChildren?: string[]
    Requires?: Object[]
}
export type Property<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any
type SnakeToUnderscoreCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${T}_${SnakeToUnderscoreCase<U>}`
    : S extends `${infer T}`
      ? `${T}`
      : never
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] }
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never
type IFaces<Interfaces extends { $gtype: GType<any> }[]> = {
    [key in keyof Interfaces]: Interfaces[key] extends { $gtype: GType<infer I> } ? I : never
}
export type Properties<
    Prototype extends {},
    Properties extends { [key: string]: ParamSpec }
> = Omit<{
    [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
        ? never
        : key extends keyof Properties
          ? Property<Properties[key]>
          : never
}, keyof Prototype>
export type RegisteredPrototype<
    P extends {},
    Props extends { [key: string]: ParamSpec },
    Interfaces extends any[],
> = Properties<P, SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P
type Ctor = new (...a: any[]) => object
type Init = { _init(...args: any[]): void }
export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType<any> }[],
> = T extends { prototype: infer P extends {} }
    ? {
          $gtype: GType<RegisteredClass<T, Props, IFaces<Interfaces>>>
          new (
              ...args: P extends Init ? Parameters<P['_init']> : [void]
          ): RegisteredPrototype<P, Props, IFaces<Interfaces>>
          prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>
      }
    : never
export type SignalDefinitionType = {
    param_types?: readonly GTypeInput[]
    [key: string]: any
}
export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T
export class Interface<T = unknown> {
    static _classInit: (cls: any) => any
    __name__: string
    _construct: (params: any, ...otherArgs: any[]) => any
    _init: (params: any) => void
    $gtype?: GType<T>
}
export namespace Object {
    export interface Interface extends GObject.Interface {}
}
export class NotImplementedError extends Error {
    get name(): 'NotImplementedError'
}
export const __gtkCssName__: unique symbol
export const __gtkTemplate__: unique symbol
export const __gtkChildren__: unique symbol
export const __gtkInternalChildren__: unique symbol
export const GTypeName: unique symbol
export const requires: unique symbol
export const interfaces: unique symbol
export const properties: unique symbol
export const signals: unique symbol
export let gtypeNameBasedOnJSPath: boolean
export let TYPE_BOOLEAN: GType<boolean>
export let Boolean: BooleanConstructor
export let TYPE_ENUM: GType<number>
export let TYPE_FLAGS: GType<number>
export let TYPE_DOUBLE: GType<number>
export let Double: NumberConstructor
export let TYPE_STRING: GType<string>
export let String: StringConstructor
export let TYPE_NONE: GType<undefined>
export let TYPE_POINTER: GType<undefined>
export let TYPE_BOXED: GType<unknown>
export let TYPE_PARAM: GType<unknown>
export let TYPE_INTERFACE: GType<unknown>
export let TYPE_OBJECT: GType<object>
export let TYPE_JSOBJECT: GType<Object>
export let TYPE_VARIANT: GType<GLib.Variant>
export let TYPE_INT: GType<number>
export let TYPE_UINT: GType<number>
export let TYPE_INT64: GType<number>
export let TYPE_UINT64: GType<number>
export let TYPE_FLOAT: GType<number>
export enum AccumulatorType {
    NONE = 0,
    FIRST_WINS = 1,
    TRUE_HANDLED = 2,
}
export function signal_connect(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_connect_after(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void
export function signal_handler_find(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number | bigint | object | null
export function signal_handlers_block_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number
export function signal_handlers_unblock_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number
export function signal_handlers_disconnect_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number
export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): number
export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): number
export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): number
export function signal_handlers_disconnect_by_data(): void
export interface SignalSignatures {
    [signal: string]: (...args: any[]) => any
}
export type SignalCallback<Emitter, Fn> = Fn extends (...args: infer P) => infer R
    ? (source: Emitter, ...args: P) => R
    : never
export type TClosure<R = any, P = any> = (...args: P[]) => R
export function registerClass<P extends {}, T extends new (...args: any[]) => P>(
    klass: T,
): RegisteredClass<T, {}, []>
export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GTypeInput[]
            [key: string]: any
        }
    },
>(
    options: MetaInfo<Props, Interfaces, Sigs>,
    klass: T,
): RegisteredClass<T, Props, Interfaces>
    const PARAM_MASK: number;
    const PARAM_STATIC_STRINGS: number;
    const PARAM_USER_SHIFT: number;
    const SIGNAL_FLAGS_MASK: number;
    const SIGNAL_MATCH_MASK: number;
    const TYPE_FLAG_RESERVED_ID_BIT: Type;
    const TYPE_FUNDAMENTAL_MAX: number;
    const TYPE_FUNDAMENTAL_SHIFT: number;
    const TYPE_RESERVED_BSE_FIRST: number;
    const TYPE_RESERVED_BSE_LAST: number;
    const TYPE_RESERVED_GLIB_FIRST: number;
    const TYPE_RESERVED_GLIB_LAST: number;
    const TYPE_RESERVED_USER_FIRST: number;
    const VALUE_COLLECT_FORMAT_MAX_LENGTH: number;
    const VALUE_INTERNED_STRING: number;
    const VALUE_NOCOPY_CONTENTS: number;
    function boxed_copy(boxed_type: GType, src_boxed: never): null;
    function boxed_free(boxed_type: GType, boxed: never): void;
    function boxed_type_register_static(name: string, boxed_copy: BoxedCopyFunc, boxed_free: BoxedFreeFunc): GType;
    function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__INT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__LONG(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__STRING(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__UINT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_VOID__VOID(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function cclosure_marshal_generic(closure: Closure, return_gvalue: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    function clear_signal_handler(handler_id_ptr: bigint | number, instance: Object): void;
    function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue[]): TypeInfo;
    function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null;
    function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null;
    function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null;
    function enum_register_static(name: string, const_static_values: EnumValue[]): GType;
    function enum_to_string(g_enum_type: GType, value: number): string;
    function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue[]): TypeInfo;
    function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null;
    function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null;
    function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null;
    function flags_register_static(name: string, const_static_values: FlagsValue[]): GType;
    function flags_to_string(flags_type: GType, value: number): string;
    function gtype_get_type(): GType;
    function param_spec_boolean(name: string, nick: string | null, blurb: string | null, default_value: boolean, flags: ParamFlags): ParamSpec;
    function param_spec_boxed(name: string, nick: string | null, blurb: string | null, boxed_type: GType, flags: ParamFlags): ParamSpec;
    function param_spec_char(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_double(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_enum(name: string, nick: string | null, blurb: string | null, enum_type: GType, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_flags(name: string, nick: string | null, blurb: string | null, flags_type: GType, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_float(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_gtype(name: string, nick: string | null, blurb: string | null, is_a_type: GType, flags: ParamFlags): ParamSpec;
    function param_spec_int(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_int64(name: string, nick: string | null, blurb: string | null, minimum: bigint | number, maximum: bigint | number, default_value: bigint | number, flags: ParamFlags): ParamSpec;
    function param_spec_long(name: string, nick: string | null, blurb: string | null, minimum: bigint | number, maximum: bigint | number, default_value: bigint | number, flags: ParamFlags): ParamSpec;
    function param_spec_object(name: string, nick: string | null, blurb: string | null, object_type: GType, flags: ParamFlags): ParamSpec;
    function param_spec_param(name: string, nick: string | null, blurb: string | null, param_type: GType, flags: ParamFlags): ParamSpec;
    function param_spec_pointer(name: string, nick: string | null, blurb: string | null, flags: ParamFlags): ParamSpec;
    function param_spec_string(name: string, nick: string | null, blurb: string | null, default_value: string | null, flags: ParamFlags): ParamSpec;
    function param_spec_uchar(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_uint(name: string, nick: string | null, blurb: string | null, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
    function param_spec_uint64(name: string, nick: string | null, blurb: string | null, minimum: bigint | number, maximum: bigint | number, default_value: bigint | number, flags: ParamFlags): ParamSpec;
    function param_spec_ulong(name: string, nick: string | null, blurb: string | null, minimum: bigint | number, maximum: bigint | number, default_value: bigint | number, flags: ParamFlags): ParamSpec;
    function param_spec_unichar(name: string, nick: string | null, blurb: string | null, default_value: string, flags: ParamFlags): ParamSpec;
    function param_spec_variant(name: string, nick: string | null, blurb: string | null, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec;
    function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;
    function param_value_convert(pspec: ParamSpec, src_value: Value | any, dest_value: Value | any, strict_validation: boolean): boolean;
    function param_value_defaults(pspec: ParamSpec, value: Value | any): boolean;
    function param_value_is_valid(pspec: ParamSpec, value: Value | any): boolean;
    function param_value_set_default(pspec: ParamSpec, value: Value | any): void;
    function param_value_validate(pspec: ParamSpec, value: Value | any): boolean;
    function param_values_cmp(pspec: ParamSpec, value1: Value | any, value2: Value | any): number;
    function pointer_type_register_static(name: string): GType;
    function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: Value | any, handler_return: Value | any, dummy: null): boolean;
    function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: Value | any, handler_return: Value | any, dummy: null): boolean;
    function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook): number;
    function signal_chain_from_overridden(instance_and_params: (Value | any)[], return_value: Value | any): void;
    function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number;
    function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number;
    function signal_emitv(instance_and_params: (Value | any)[], signal_id: number, detail: GLib.Quark, return_value?: Value | any): unknown;
    function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null;
    function signal_handler_block(instance: Object, handler_id: bigint | number): void;
    function signal_handler_disconnect(instance: Object, handler_id: bigint | number): void;
    function signal_handler_is_connected(instance: Object, handler_id: bigint | number): boolean;
    function signal_handler_unblock(instance: Object, handler_id: bigint | number): void;
    function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: null, data: null): number;
    function signal_handlers_destroy(instance: Object): void;
    function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: null, data: null): number;
    function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: null, data: null): number;
    function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean;
    function signal_is_valid_name(name: string): boolean;
    function signal_list_ids(itype: GType): number[];
    function signal_lookup(name: string, itype: GType): number;
    function signal_name(signal_id: number): string | null;
    function signal_override_class_closure(signal_id: number, instance_type: GType, class_closure: Closure): void;
    function signal_override_class_handler(signal_name: string, instance_type: GType, class_handler: Callback): void;
    function signal_parse_name(detailed_signal: string, itype: GType, force_detail_quark: boolean): [boolean, number, GLib.Quark];
    function signal_query(signal_id: number): SignalQuery;
    function signal_remove_emission_hook(signal_id: number, hook_id: bigint | number): void;
    function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
    function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
    function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;
    function source_set_closure(source: GLib.Source, closure: Closure): void;
    function source_set_dummy_callback(source: GLib.Source): void;
    function strdup_value_contents(value: Value | any): string;
    function type_add_class_private(class_type: GType, private_size: bigint | number): void;
    function type_add_instance_private(class_type: GType, private_size: bigint | number): number;
    function type_add_interface_dynamic(instance_type: GType, interface_type: GType, plugin: TypePlugin): void;
    function type_add_interface_static(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;
    function type_check_instance(instance: TypeInstance): boolean;
    function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;
    function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: GType): boolean;
    function type_check_is_value_type(type: GType): boolean;
    function type_check_value(value: Value | any): boolean;
    function type_check_value_holds(value: Value | any, type: GType): boolean;
    function type_children(type: GType): GType[];
    function type_class_adjust_private_offset(g_class: null, private_size_or_offset: number): void;
    function type_class_get(type: GType): TypeClass;
    function type_class_peek(type: GType): TypeClass | null;
    function type_class_peek_static(type: GType): TypeClass | null;
    function type_class_ref(type: GType): TypeClass;
    function type_default_interface_get(g_type: GType): TypeInterface;
    function type_default_interface_peek(g_type: GType): TypeInterface;
    function type_default_interface_ref(g_type: GType): TypeInterface;
    function type_default_interface_unref(g_iface: TypeInterface): void;
    function type_depth(type: GType): number;
    function type_ensure(type: GType): void;
    function type_free_instance(instance: TypeInstance): void;
    function type_from_name(name: string): GType;
    function type_fundamental(type_id: GType): GType;
    function type_fundamental_next(): GType;
    function type_get_instance_count(type: GType): number;
    function type_get_plugin(type: GType): TypePlugin;
    function type_get_qdata(type: GType, quark: GLib.Quark): null;
    function type_get_type_registration_serial(): number;
    function type_init(): void;
    function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
    function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
    function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
    function type_interface_instantiatable_prerequisite(interface_type: GType): GType;
    function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface | null;
    function type_interface_prerequisites(interface_type: GType): GType[];
    function type_interfaces(type: GType): GType[];
    function type_is_a(type: GType, is_a_type: GType): boolean;
    function type_name(type: GType): string | null;
    function type_name_from_class(g_class: TypeClass): string;
    function type_name_from_instance(instance: TypeInstance): string;
    function type_next_base(leaf_type: GType, root_type: GType): GType;
    function type_parent(type: GType): GType;
    function type_qname(type: GType): GLib.Quark;
    function type_query(type: GType): TypeQuery;
    function type_register_dynamic(parent_type: GType, type_name: string, plugin: TypePlugin, flags: TypeFlags): GType;
    function type_register_fundamental(type_id: GType, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): GType;
    function type_register_static(parent_type: GType, type_name: string, info: TypeInfo, flags: TypeFlags): GType;
    function type_set_qdata(type: GType, quark: GLib.Quark, data: null): void;
    function type_test_flags(type: GType, flags: number): boolean;
    function value_type_compatible(src_type: GType, dest_type: GType): boolean;
    function value_type_transformable(src_type: GType, dest_type: GType): boolean;
    function variant_get_gtype(): GType;
    interface BaseFinalizeFunc {
        (g_class: TypeClass): void;
    }
    interface BaseInitFunc {
        (g_class: TypeClass): void;
    }
    interface BindingTransformFunc {
        (binding: Binding, from_value: unknown, to_value: unknown): boolean;
    }
    interface BoxedCopyFunc {
        (boxed: null): never;
    }
    interface BoxedFreeFunc {
        (boxed: null): void;
    }
    interface Callback {
        (): void;
    }
    interface ClassFinalizeFunc {
        (g_class: TypeClass, class_data: null): void;
    }
    interface ClassInitFunc {
        (g_class: TypeClass, class_data: null): void;
    }
    interface ClosureMarshal {
        (closure: Closure, return_value: unknown | null, param_values: unknown[], invocation_hint: null, marshal_data: null): void;
    }
    interface ClosureNotify {
        (data: null, closure: Closure): void;
    }
    interface InstanceInitFunc {
        (instance: TypeInstance, g_class: TypeClass): void;
    }
    interface InterfaceFinalizeFunc {
        (g_iface: TypeInterface, iface_data: null): void;
    }
    interface InterfaceInitFunc {
        (g_iface: TypeInterface, iface_data: null): void;
    }
    interface ObjectFinalizeFunc<A = Object> {
        (object: A): void;
    }
    interface ObjectGetPropertyFunc<A = Object> {
        (object: A, property_id: number, value: unknown, pspec: ParamSpec): void;
    }
    interface ObjectSetPropertyFunc<A = Object> {
        (object: A, property_id: number, value: unknown, pspec: ParamSpec): void;
    }
    interface SignalAccumulator {
        (ihint: SignalInvocationHint, return_accu: unknown, handler_return: unknown, data: null): boolean;
    }
    interface SignalEmissionHook {
        (ihint: SignalInvocationHint, param_values: unknown[], data: null): boolean;
    }
    interface ToggleNotify<A = Object> {
        (data: null, object: A, is_last_ref: boolean): void;
    }
    interface TypeClassCacheFunc {
        (cache_data: null, g_class: TypeClass): boolean;
    }
    interface TypeInterfaceCheckFunc {
        (check_data: null, g_iface: TypeInterface): void;
    }
    interface TypePluginCompleteInterfaceInfo {
        (plugin: TypePlugin, instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    }
    interface TypePluginCompleteTypeInfo {
        (plugin: TypePlugin, g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
    }
    interface TypePluginUnuse {
        (plugin: TypePlugin): void;
    }
    interface TypePluginUse {
        (plugin: TypePlugin): void;
    }
    interface TypeValueCollectFunc {
        (value: unknown, collect_values: TypeCValue[], collect_flags: number): string | null;
    }
    interface TypeValueCopyFunc {
        (src_value: unknown): void;
    }
    interface TypeValueFreeFunc {
        (value: unknown): void;
    }
    interface TypeValueInitFunc {
        (value: unknown): void;
    }
    interface TypeValueLCopyFunc {
        (value: unknown, collect_values: TypeCValue[], collect_flags: number): string | null;
    }
    interface TypeValuePeekPointerFunc {
        (value: unknown): null;
    }
    interface ValueTransform {
        (src_value: unknown, dest_value: unknown): void;
    }
    interface WeakNotify<A = Object> {
        (data: null, where_the_object_was: A): void;
    }
    type Array = object | null;
    type BookmarkFile = object | null;
    type ByteArray = object | null;
    type Bytes = object | null;
    type Checksum = object | null;
    type Date = object | null;
    type DateTime = object | null;
    type Dir = object | null;
    type Error = object | null;
    type HashTable = object | null;
    type Hmac = object | null;
    type IOChannel = object | null;
    type KeyFile = object | null;
    type MainContext = object | null;
    type MainLoop = object | null;
    type MappedFile = object | null;
    type MarkupParseContext = object | null;
    type MatchInfo = object | null;
    type OptionGroup = object | null;
    type PatternSpec = object | null;
    type PollFD = object | null;
    type PtrArray = object | null;
    type Rand = object | null;
    type Regex = object | null;
    type Source = object | null;
    type String = object | null;
    type Strv = object | null;
    type StrvBuilder = object | null;
    type Thread = object | null;
    type TimeZone = object | null;
    type Tree = object | null;
    type Uri = object | null;
    type VariantBuilder = object | null;
    type VariantDict = object | null;
    type VariantType = object | null;
    export namespace BindingFlags {
        export const $gtype: GType<BindingFlags>;
    }
    enum BindingFlags {
        DEFAULT,
        BIDIRECTIONAL,
        SYNC_CREATE,
        INVERT_BOOLEAN,
    }
    enum ConnectFlags {
        DEFAULT,
        AFTER,
        SWAPPED,
    }
    export namespace IOCondition {
        export const $gtype: GType<IOCondition>;
    }
    enum IOCondition {
        IN,
        OUT,
        PRI,
        ERR,
        HUP,
        NVAL,
    }
    enum ParamFlags {
        READABLE,
        WRITABLE,
        READWRITE,
        CONSTRUCT,
        CONSTRUCT_ONLY,
        LAX_VALIDATION,
        STATIC_NAME,
        PRIVATE,
        STATIC_NICK,
        STATIC_BLURB,
        EXPLICIT_NOTIFY,
        DEPRECATED,
    }
    enum SignalFlags {
        RUN_FIRST,
        RUN_LAST,
        RUN_CLEANUP,
        NO_RECURSE,
        DETAILED,
        ACTION,
        NO_HOOKS,
        MUST_COLLECT,
        DEPRECATED,
        ACCUMULATOR_FIRST_RUN,
    }
    enum SignalMatchType {
        ID,
        DETAIL,
        CLOSURE,
        FUNC,
        DATA,
        UNBLOCKED,
    }
    enum TypeDebugFlags {
        NONE,
        OBJECTS,
        SIGNALS,
        INSTANCE_COUNT,
        MASK,
    }
    enum TypeFlags {
        NONE,
        ABSTRACT,
        VALUE_ABSTRACT,
        FINAL,
        DEPRECATED,
    }
    enum TypeFundamentalFlags {
        CLASSED,
        INSTANTIATABLE,
        DERIVABLE,
        DEEP_DERIVABLE,
    }
    namespace Binding {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::flags": (pspec: ParamSpec) => void;
            "notify::source": (pspec: ParamSpec) => void;
            "notify::source-property": (pspec: ParamSpec) => void;
            "notify::target": (pspec: ParamSpec) => void;
            "notify::target-property": (pspec: ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            flags: BindingFlags;
            source: Object | null;
            source_property: string;
            sourceProperty: string;
            target: Object | null;
            target_property: string;
            targetProperty: string;
        }
    }
    class Binding extends Object {
        static $gtype: GType<Binding>;
        get flags(): BindingFlags;
        get source(): Object | null;
        get source_property(): string;
        get sourceProperty(): string;
        get target(): Object | null;
        get target_property(): string;
        get targetProperty(): string;
        $signals: Binding.SignalSignatures;
        constructor(properties?: Partial<Binding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Binding.SignalSignatures>(signal: K, callback: SignalCallback<this, Binding.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Binding.SignalSignatures>(signal: K, callback: SignalCallback<this, Binding.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Binding.SignalSignatures>(signal: K, ...args: GjsParameters<Binding.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_source<T = Object>(): T;
        dup_target<T = Object>(): T;
        get_flags(): BindingFlags;
        get_source<T = Object>(): T;
        get_source_property(): string;
        get_target<T = Object>(): T;
        get_target_property(): string;
        unbind(): void;
    }
    namespace BindingGroup {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::source": (pspec: ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            source: Object;
        }
    }
    class BindingGroup extends Object {
        static $gtype: GType<BindingGroup>;
        get source(): Object;
        set source(val: Object);
        $signals: BindingGroup.SignalSignatures;
        constructor(properties?: Partial<BindingGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BindingGroup;
        connect<K extends keyof BindingGroup.SignalSignatures>(signal: K, callback: SignalCallback<this, BindingGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BindingGroup.SignalSignatures>(signal: K, callback: SignalCallback<this, BindingGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BindingGroup.SignalSignatures>(signal: K, ...args: GjsParameters<BindingGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind(source_property: string, target: Object, target_property: string, flags: BindingFlags): void;
        bind_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure | null, transform_from: Closure | null): void;
        dup_source<T = Object>(): T;
        set_source(source: Object | null): void;
    }
    namespace InitiallyUnowned {
        interface SignalSignatures extends Object.SignalSignatures {}
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class InitiallyUnowned extends Object {
        static $gtype: GType<InitiallyUnowned>;
        $signals: InitiallyUnowned.SignalSignatures;
        constructor(properties?: Partial<InitiallyUnowned.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof InitiallyUnowned.SignalSignatures>(signal: K, callback: SignalCallback<this, InitiallyUnowned.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InitiallyUnowned.SignalSignatures>(signal: K, callback: SignalCallback<this, InitiallyUnowned.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InitiallyUnowned.SignalSignatures>(signal: K, ...args: GjsParameters<InitiallyUnowned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Object {
        interface SignalSignatures {
            notify: (arg0: ParamSpec) => void;
            [key: `notify::${string}`]: (pspec: ParamSpec) => void;
        }
        interface ConstructorProps  {}
    }
    class Object {
        static $gtype: GType<Object>;
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static newv(object_type: GType, parameters: Parameter[]): Object;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static compat_control(what: bigint | number, data: null): number;
        static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
        static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
        static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
        static find_property(property_name: string): ParamSpec;
        static install_properties(pspecs: ParamSpec[]): void;
        static install_property(property_id: number, pspec: ParamSpec): void;
        static list_properties(): ParamSpec[];
        static override_property(property_id: number, name: string): void;
        static _classInit(klass: any): any;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: unknown, pspec: ParamSpec): void;
        vfunc_notify(pspec: ParamSpec): void;
        vfunc_set_property(property_id: number, value: unknown, pspec: ParamSpec): void;
        bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding;
        bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure | null, transform_from: Closure | null): Binding;
        force_floating(): void;
        freeze_notify(): void;
        get_data(key: string): null;
        get_property(property_name: string, value: Value | any): any;
        get_qdata(quark: GLib.Quark): null;
        getv(names: string[], values: (Value | any)[]): void;
        is_floating(): boolean;
        notify(property_name: string): void;
        notify_by_pspec(pspec: ParamSpec): void;
        ref(): Object;
        ref_sink(): Object;
        run_dispose(): void;
        set_data(key: string, data: null): void;
        set_property(property_name: string, value: Value | any): void;
        steal_data(key: string): null;
        steal_qdata(quark: GLib.Quark): null;
        thaw_notify(): void;
        unref(): void;
        watch_closure(closure: Closure): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): void;
        unblock_signal_handler(id: number): void;
        stop_emission_by_name(detailedName: string): void;
    }
    namespace ParamSpec {
        interface SignalSignatures extends Object.SignalSignatures {}
    }
    abstract class ParamSpec<A = unknown> {
        static $gtype: GType<ParamSpec>;
        name: string;
        flags: ParamFlags;
        value_type: GType;
        owner_type: GType;
        _init(...args: any[]): void;
        connect<K extends keyof ParamSpec.SignalSignatures>(signal: K, callback: SignalCallback<this, ParamSpec.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ParamSpec.SignalSignatures>(signal: K, callback: SignalCallback<this, ParamSpec.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ParamSpec.SignalSignatures>(signal: K, ...args: GjsParameters<ParamSpec.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static is_valid_name(name: string): boolean;
        static ["char"](name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static uchar(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static int(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static uint(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static long(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static ulong(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static int64(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static uint64(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static float(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static ["boolean"](name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, defaultValue?: boolean): ParamSpec<boolean>;
        static flags(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, flagsType: any, defaultValue?: any): ParamSpec<number>;
        static ["enum"]<T>(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, enumType: GType<T> | { $gtype: GType<T> }, defaultValue?: any): ParamSpec<T>;
        static double(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, minimum: number, maximum: number, defaultValue?: number): ParamSpec<number>;
        static string(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, defaultValue?: string | null): ParamSpec<string>;
        static boxed<T>(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, boxedType: GType<T> | { $gtype: GType<T> }): ParamSpec<T>;
        static object<T>(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, objectType?: GType<T> | { $gtype: GType<T> }): ParamSpec<T>;
        static param(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number, paramType: any): ParamSpec;
        static jsobject<T>(name: string, nick: string | null, blurb: string | null, flags: ParamFlags | number): ParamSpec<T>;
        vfunc_finalize(): void;
        vfunc_value_is_valid(value: unknown): boolean;
        vfunc_value_set_default(value: unknown): void;
        vfunc_value_validate(value: unknown): boolean;
        vfunc_values_cmp(value1: unknown, value2: unknown): number;
        get_blurb(): string | null;
        get_default_value(): unknown;
        get_name(): string;
        get_name_quark(): GLib.Quark;
        get_nick(): string;
        get_qdata(quark: GLib.Quark): null;
        get_redirect_target(): ParamSpec | null;
        set_qdata(quark: GLib.Quark, data: null): void;
        sink(): void;
        steal_qdata(quark: GLib.Quark): null;
        override(name: string, oclass: Object | Function | GType): ParamSpec;
        __type__(arg: never): A;
    }
    namespace SignalGroup {
        interface SignalSignatures extends Object.SignalSignatures {
            bind: (arg0: Object) => void;
            unbind: () => void;
            "notify::target": (pspec: ParamSpec) => void;
            "notify::target-type": (pspec: ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {
            target: Object;
            target_type: GTypeInput;
            targetType: GTypeInput;
        }
    }
    class SignalGroup extends Object {
        static $gtype: GType<SignalGroup>;
        get target(): Object;
        set target(val: Object);
        get target_type(): GType;
        get targetType(): GType;
        $signals: SignalGroup.SignalSignatures;
        constructor(properties?: Partial<SignalGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](target_type: GType): SignalGroup;
        connect<K extends keyof SignalGroup.SignalSignatures>(signal: K, callback: SignalCallback<this, SignalGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SignalGroup.SignalSignatures>(signal: K, callback: SignalCallback<this, SignalGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SignalGroup.SignalSignatures>(signal: K, ...args: GjsParameters<SignalGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        block(): void;
        connect_closure(detailed_signal: string, closure: Closure, after: boolean): void;
        connect_data(detailed_signal: string, c_handler: Callback, notify: ClosureNotify, flags: ConnectFlags): void;
        connect_swapped(detailed_signal: string, c_handler: Callback): void;
        dup_target<T = Object>(): T;
        set_target(target: Object | null): void;
        unblock(): void;
    }
    namespace TypeModule {
        interface SignalSignatures extends Object.SignalSignatures {}
        interface ConstructorProps extends Object.ConstructorProps, TypePlugin.ConstructorProps {}
    }
    abstract class TypeModule extends Object implements TypePlugin {
        static $gtype: GType<TypeModule>;
        $signals: TypeModule.SignalSignatures;
        use_count: number;
        type_infos: null[];
        interface_infos: null[];
        name: string;
        constructor(properties?: Partial<TypeModule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TypeModule.SignalSignatures>(signal: K, callback: SignalCallback<this, TypeModule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TypeModule.SignalSignatures>(signal: K, callback: SignalCallback<this, TypeModule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TypeModule.SignalSignatures>(signal: K, ...args: GjsParameters<TypeModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_load(): boolean;
        vfunc_unload(): void;
        add_interface(instance_type: GType, interface_type: GType, interface_info: InterfaceInfo): void;
        register_enum(name: string, const_static_values: EnumValue[]): GType;
        register_flags(name: string, const_static_values: FlagsValue[]): GType;
        register_type(parent_type: GType, type_name: string, type_info: TypeInfo, flags: TypeFlags): GType;
        set_name(name: string): void;
        unuse(): void;
        use(): boolean;
        use(...args: never[]): any;
        complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
        complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
    }
    class CClosure {
        static $gtype: GType<CClosure>;
        callback: null;
        static marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__BOOLEAN(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__BOXED(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__CHAR(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__DOUBLE(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__ENUM(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__FLAGS(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__FLOAT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__INT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__LONG(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__OBJECT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__PARAM(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__STRING(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__UCHAR(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__UINT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__ULONG(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__VARIANT(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_VOID__VOID(closure: Closure, return_value: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
        static marshal_generic(closure: Closure, return_gvalue: Value | any, n_param_values: number, param_values: Value | any, invocation_hint: null, marshal_data: null): void;
    }
    class ClosureNotifyData {
        static $gtype: GType<ClosureNotifyData>;
        data: null;
        notify: ClosureNotify;
    }
    class EnumClass {
        static $gtype: GType<EnumClass>;
        minimum: number;
        maximum: number;
        n_values: number;
        values: EnumValue[];
    }
    class EnumValue {
        static $gtype: GType<EnumValue>;
        value: number;
        value_name: string;
        value_nick: string;
        constructor(properties?: Partial<{
            value: number;
            value_name: string;
            value_nick: string;
        }>);
    }
    class FlagsClass {
        static $gtype: GType<FlagsClass>;
        mask: number;
        n_values: number;
        values: FlagsValue[];
    }
    class FlagsValue {
        static $gtype: GType<FlagsValue>;
        value: number;
        value_name: string;
        value_nick: string;
        constructor(properties?: Partial<{
            value: number;
            value_name: string;
            value_nick: string;
        }>);
    }
    type InitiallyUnownedClass = typeof InitiallyUnowned;
    class InterfaceInfo {
        static $gtype: GType<InterfaceInfo>;
        interface_init: InterfaceInitFunc;
        interface_finalize: InterfaceFinalizeFunc;
        interface_data: null;
    }
    type ObjectClass = typeof Object;
    class ObjectConstructParam {
        static $gtype: GType<ObjectConstructParam>;
        pspec: ParamSpec;
    }
    type ParamSpecClass = typeof ParamSpec;
    abstract class ParamSpecPool {
        static $gtype: GType<ParamSpecPool>;
        free(): void;
        insert(pspec: ParamSpec, owner_type: GType): void;
        list(owner_type: GType): ParamSpec[];
        list_owned(owner_type: GType): ParamSpec[];
        lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec | null;
        remove(pspec: ParamSpec): void;
    }
    class ParamSpecTypeInfo {
        static $gtype: GType<ParamSpecTypeInfo>;
        instance_size: number;
        n_preallocs: number;
        value_type: GType;
    }
    class Parameter {
        static $gtype: GType<Parameter>;
        name: string;
    }
    class SignalInvocationHint {
        static $gtype: GType<SignalInvocationHint>;
        signal_id: number;
        detail: GLib.Quark;
        run_type: SignalFlags;
    }
    class SignalQuery {
        static $gtype: GType<SignalQuery>;
        signal_id: number;
        signal_name: string;
        itype: GType;
        signal_flags: SignalFlags;
        return_type: GType;
        n_params: number;
        param_types: GType[];
    }
    class TypeClass {
        static $gtype: GType<TypeClass>;
        static adjust_private_offset(g_class: null, private_size_or_offset: number): void;
        static get(type: GType): TypeClass;
        static peek(type: GType): TypeClass | null;
        static peek_static(type: GType): TypeClass | null;
        static ref(type: GType): TypeClass;
        add_private(private_size: bigint | number): void;
        get_private(private_type: GType): null;
        peek_parent(): TypeClass;
        unref(): void;
    }
    class TypeFundamentalInfo {
        static $gtype: GType<TypeFundamentalInfo>;
        type_flags: TypeFundamentalFlags;
    }
    class TypeInfo {
        static $gtype: GType<TypeInfo>;
        class_size: number;
        base_init: BaseInitFunc;
        base_finalize: BaseFinalizeFunc;
        class_init: ClassInitFunc;
        class_finalize: ClassFinalizeFunc;
        class_data: null;
        instance_size: number;
        n_preallocs: number;
        instance_init: InstanceInitFunc;
    }
    class TypeInstance {
        static $gtype: GType<TypeInstance>;
        get_private(private_type: GType): null;
    }
    class TypeInterface {
        static $gtype: GType<TypeInterface>;
        static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
        static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
        static instantiatable_prerequisite(interface_type: GType): GType;
        static peek(instance_class: TypeClass, iface_type: GType): TypeInterface | null;
        static prerequisites(interface_type: GType): GType[];
        peek_parent(): TypeInterface | null;
    }
    type TypeModuleClass = typeof TypeModule;
    class TypePluginClass {
        static $gtype: GType<TypePluginClass>;
        use_plugin: TypePluginUse;
        unuse_plugin: TypePluginUnuse;
        complete_type_info: TypePluginCompleteTypeInfo;
        complete_interface_info: TypePluginCompleteInterfaceInfo;
    }
    class TypeQuery {
        static $gtype: GType<TypeQuery>;
        type: GType;
        type_name: string;
        class_size: number;
        instance_size: number;
    }
    class TypeValueTable {
        static $gtype: GType<TypeValueTable>;
        value_init: TypeValueInitFunc;
        value_free: TypeValueFreeFunc;
        value_copy: TypeValueCopyFunc;
        value_peek_pointer: TypeValuePeekPointerFunc;
        collect_format: string;
        collect_value: TypeValueCollectFunc;
        lcopy_format: string;
        lcopy_value: TypeValueLCopyFunc;
    }
    class Value {
        static $gtype: GType<Value>;
        static type_compatible(src_type: GType, dest_type: GType): boolean;
        static type_transformable(src_type: GType, dest_type: GType): boolean;
        copy(dest_value: Value | any): void;
        dup_object<T = Object>(): T;
        dup_string(): string | null;
        dup_variant(): GLib.Variant | null;
        fits_pointer(): boolean;
        get_boolean(): boolean;
        get_boxed(): null;
        get_char(): number;
        get_double(): number;
        get_enum(): number;
        get_flags(): number;
        get_float(): number;
        get_gtype(): GType;
        get_int(): number;
        get_int64(): number;
        get_long(): number;
        get_object<T = Object>(): T;
        get_param(): ParamSpec;
        get_pointer(): null;
        get_schar(): number;
        get_string(): string | null;
        get_uchar(): number;
        get_uint(): number;
        get_uint64(): number;
        get_ulong(): number;
        get_variant(): GLib.Variant | null;
        init(g_type: GType): unknown;
        init_from_instance(instance: TypeInstance): void;
        peek_pointer(): null;
        reset(): unknown;
        set_boolean(v_boolean: boolean): void;
        set_boxed(v_boxed: null): void;
        set_boxed_take_ownership(v_boxed: null): void;
        set_char(v_char: number): void;
        set_double(v_double: number): void;
        set_enum(v_enum: number): void;
        set_flags(v_flags: number): void;
        set_float(v_float: number): void;
        set_gtype(v_gtype: GType): void;
        set_instance(instance: null): void;
        set_int(v_int: number): void;
        set_int64(v_int64: bigint | number): void;
        set_interned_string(v_string: string | null): void;
        set_long(v_long: bigint | number): void;
        set_object(v_object: Object | null): void;
        set_param(param: ParamSpec | null): void;
        set_pointer(v_pointer: null): void;
        set_schar(v_char: number): void;
        set_static_boxed(v_boxed: null): void;
        set_static_string(v_string: string | null): void;
        set_string(v_string: string | null): void;
        set_string_take_ownership(v_string: string | null): void;
        set_uchar(v_uchar: number): void;
        set_uint(v_uint: number): void;
        set_uint64(v_uint64: bigint | number): void;
        set_ulong(v_ulong: bigint | number): void;
        set_variant(variant: GLib.Variant | null): void;
        steal_string(): string | null;
        take_boxed(v_boxed: null): void;
        take_string(v_string: string | null): void;
        take_variant(variant: GLib.Variant | null): void;
        transform(dest_value: Value | any): boolean;
        unset(): void;
    }
    class ValueArray {
        static $gtype: GType<ValueArray>;
        n_values: number;
        constructor(n_prealloced: number);
        static ["new"](n_prealloced: number): ValueArray;
        append(value: Value | any | null): ValueArray;
        copy(): ValueArray;
        free(): void;
        get_nth(index_: number): unknown;
        insert(index_: number, value: Value | any | null): ValueArray;
        prepend(value: Value | any | null): ValueArray;
        remove(index_: number): ValueArray;
        sort(compare_func: GLib.CompareDataFunc): ValueArray;
    }
    class WeakRef {
        static $gtype: GType<WeakRef>;
    }
    class TypeCValue {
        static $gtype: GType<TypeCValue>;
        v_int: number;
        v_long: number;
        v_int64: number;
        v_double: number;
        v_pointer: null;
    }
    abstract class _Value__data__union {
        static $gtype: GType<_Value__data__union>;
        v_int: number;
        v_uint: number;
        v_long: number;
        v_ulong: number;
        v_int64: number;
        v_uint64: number;
        v_float: number;
        v_double: number;
        v_pointer: null;
    }
    namespace TypePlugin {
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface TypePluginNamespace {
        $gtype: GType<TypePlugin>;
        prototype: TypePlugin;
    }
    interface TypePlugin extends Object {
        complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
        complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
        unuse(): void;
        use(): void;
    }
    export const TypePlugin: TypePluginNamespace & {
        new (): TypePlugin; 
    };
    type SignalCMarshaller = ClosureMarshal;
    type SignalCVaMarshaller = unknown;
    type Type = bigint | number;
    interface SignalMatch {
        signalId: string;
        detail: string;
        func: (...args: any[]) => any;
    }
    type Closure<R = any, P = any> = (...args: P[]) => R;
    function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): void;
    function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): void;
    function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): void;
    function signal_handler_find(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
    function signal_handler_find(instance: Object, match: SignalMatch): number;
    function signal_handler_find(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function _real_signal_handler_find(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function signal_handler_block_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
    function signal_handler_block_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function _real_signal_handler_block_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function signal_handler_block_disconnect_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
    function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function _real_signal_handler_block_disconnect_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function signal_handler_block_unblock_matched(...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
    function signal_handler_block_unblock_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_unblock_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    function _real_signal_handler_block_unblock_matched(instance: Object, match: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, object: object | null): number;
    const __name__: string;
    const __version__: string;
}
export default GObject;
}
declare module 'gi://GObject' {
    import GObject20 from 'gi://GObject?version=2.0';
    export default GObject20;
}
