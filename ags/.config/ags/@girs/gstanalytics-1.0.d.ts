declare module 'gi://GstAnalytics?version=1.0' {
import type GstVideo from 'gi://GstVideo?version=1.0';
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstAnalytics {
    enum ModelInfoTensorDirection {
        UNKNOWN,
        INPUT,
        OUTPUT,
    }
    enum SegmentationType {
        SEMANTIC,
        INSTANCE,
    }
    enum TensorDataType {
        INT4,
        INT8,
        INT16,
        INT32,
        INT64,
        UINT4,
        UINT8,
        UINT16,
        UINT32,
        UINT64,
        FLOAT16,
        FLOAT32,
        FLOAT64,
        BFLOAT16,
        STRING,
        BOOL,
        COMPLEX64,
        COMPLEX128,
        FLOAT8E4M3FN,
        FLOAT8E4M3FNUZ,
        FLOAT8E5M2,
        FLOAT8E5M2FNUZ,
    }
    enum TensorDimOrder {
        ROW_MAJOR,
        COL_MAJOR,
    }
    enum TensorLayout {
        TENSOR_LAYOUT_CONTIGUOUS,
    }
    const CAPS_FEATURE_META_GST_ANALYTICS_BATCH_META: string;
    const INF_RELATION_SPAN: number;
    const MODELINFO_SECTION_NAME: string;
    const MODELINFO_VERSION_MAJOR: number;
    const MODELINFO_VERSION_MINOR: number;
    const MODELINFO_VERSION_STR: string;
    const MTD_TYPE_ANY: number;
    function buffer_add_analytics_batch_meta(buffer: Gst.Buffer): BatchMeta;
    function buffer_add_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    function buffer_add_analytics_relation_meta_full(buffer: Gst.Buffer, init_params: RelationMetaInitParams): RelationMeta | null;
    function buffer_add_tensor_meta(buffer: Gst.Buffer): TensorMeta;
    function buffer_get_analytics_batch_meta(buffer: Gst.Buffer): BatchMeta | null;
    function buffer_get_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    function buffer_get_tensor_meta(buffer: Gst.Buffer): TensorMeta | null;
    function cls_mtd_get_mtd_type(): MtdType;
    function image_util_iou_float(bb1_x: number, bb1_y: number, bb1_w: number, bb1_h: number, bb2_x: number, bb2_y: number, bb2_w: number, bb2_h: number): number;
    function image_util_iou_int(bb1_x: number, bb1_y: number, bb1_w: number, bb1_h: number, bb2_x: number, bb2_y: number, bb2_w: number, bb2_h: number): number;
    function modelinfo_load(model_filename: string): ModelInfo | null;
    function mtd_type_get_name(type: MtdType): string;
    function od_mtd_get_mtd_type(): MtdType;
    function relation_get_length(instance: RelationMeta): number;
    function relation_meta_api_get_type(): GObject.GType;
    function segmentation_mtd_get_mtd_type(): MtdType;
    function tensor_data_type_get_name(data_type: TensorDataType): string;
    function tensor_mtd_get_mtd_type(): MtdType;
    function tracking_mtd_get_mtd_type(): MtdType;
    enum RelTypes {
        NONE,
        IS_PART_OF,
        CONTAIN,
        RELATE_TO,
        N_TO_N,
        ANY,
    }
    class BatchMeta {
        static $gtype: GObject.GType<BatchMeta>;
        streams: BatchStream[];
        n_streams: number;
    }
    class BatchStream {
        static $gtype: GObject.GType<BatchStream>;
        index: number;
        sticky_events: Gst.Event[];
        n_sticky_events: number;
        objects: Gst.MiniObject[];
        n_objects: number;
        get_caps(): Gst.Caps | null;
        get_segment(): Gst.Segment | null;
        get_stream_id(): string | null;
    }
    class ClsMtd {
        static $gtype: GObject.GType<ClsMtd>;
        id: number;
        static get_mtd_type(): MtdType;
        get_index_by_quark(quark: GLib.Quark): number;
        get_length(): number;
        get_level(index: bigint | number): number;
        get_quark(index: bigint | number): GLib.Quark;
    }
    abstract class ModelInfo {
        static $gtype: GObject.GType<ModelInfo>;
        static load(model_filename: string): ModelInfo | null;
        find_tensor_name(dir: ModelInfoTensorDirection, index: bigint | number, in_tensor_name: string | null, data_type: TensorDataType, dims: (bigint | number)[]): string | null;
        free(): void;
        get_dims_order(tensor_name: string): TensorDimOrder;
        get_group_id(): string | null;
        get_id(tensor_name: string): string | null;
        get_input_scales_offsets(tensor_name: string, input_mins: number[], input_maxs: number[]): [boolean, number[], number[]];
        get_quark_group_id(): GLib.Quark;
        get_quark_id(tensor_name: string): GLib.Quark;
        get_target_ranges(tensor_name: string): [boolean, number[], number[]];
        get_version(): string;
    }
    class Mtd {
        static $gtype: GObject.GType<Mtd>;
        id: number;
        static type_get_name(type: MtdType): string;
        get_id(): number;
        get_mtd_type(): MtdType;
        get_size(): number;
    }
    class MtdImpl {
        static $gtype: GObject.GType<MtdImpl>;
        name: string;
        constructor(properties?: Partial<{
            name: string;
        }>);
    }
    class ODMtd {
        static $gtype: GObject.GType<ODMtd>;
        id: number;
        static get_mtd_type(): MtdType;
        get_confidence_lvl(): [boolean, number];
        get_location(): [boolean, number, number, number, number, number];
        get_obj_type(): GLib.Quark;
        get_oriented_location(): [boolean, number, number, number, number, number, number];
    }
    abstract class RelationMeta {
        static $gtype: GObject.GType<RelationMeta>;
        add_cls_mtd(confidence_levels: number[], class_quarks: GLib.Quark[]): [boolean, ClsMtd];
        add_od_mtd(type: GLib.Quark, x: number, y: number, w: number, h: number, loc_conf_lvl: number): [boolean, ODMtd | null];
        add_one_cls_mtd(confidence_level: number, class_quark: GLib.Quark): [boolean, ClsMtd];
        add_oriented_od_mtd(type: GLib.Quark, x: number, y: number, w: number, h: number, r: number, loc_conf_lvl: number): [boolean, ODMtd | null];
        add_segmentation_mtd(buffer: Gst.Buffer, segmentation_type: SegmentationType, region_ids: number[], masks_loc_x: number, masks_loc_y: number, masks_loc_w: number, masks_loc_h: number): [boolean, SegmentationMtd];
        add_tensor_mtd(num_dims: bigint | number): [boolean, TensorMtd | null];
        add_tensor_mtd_simple(id: GLib.Quark, data_type: TensorDataType, data: Gst.Buffer, dims_order: TensorDimOrder, dims: (bigint | number)[]): [boolean, TensorMtd | null];
        add_tracking_mtd(tracking_id: bigint | number, tracking_first_seen: Gst.ClockTime): [boolean, TrackingMtd];
        exist(an_meta_first_id: number, an_meta_second_id: number, max_relation_span: number, cond_types: RelTypes): [boolean, number[] | null];
        get_cls_mtd(an_meta_id: number): [boolean, ClsMtd];
        get_direct_related(an_meta_id: number, relation_type: RelTypes, type: MtdType, state: never): [boolean, null, Mtd];
        get_mtd(an_meta_id: number, type: MtdType): [boolean, Mtd];
        get_od_mtd(an_meta_id: number): [boolean, ODMtd];
        get_relation(an_meta_first_id: number, an_meta_second_id: number): RelTypes;
        get_segmentation_mtd(an_meta_id: number): [boolean, SegmentationMtd];
        get_tensor_mtd(an_meta_id: number): [boolean, TensorMtd];
        get_tracking_mtd(an_meta_id: number): [boolean, TrackingMtd];
        iterate(state: null, type: MtdType): [boolean, Mtd];
        set_relation(type: RelTypes, an_meta_first_id: number, an_meta_second_id: number): boolean;
    }
    class RelationMetaInitParams {
        static $gtype: GObject.GType<RelationMetaInitParams>;
        initial_relation_order: number;
        initial_buf_size: number;
    }
    class SegmentationMtd {
        static $gtype: GObject.GType<SegmentationMtd>;
        id: number;
        static get_mtd_type(): MtdType;
        get_mask(): [Gst.Buffer, number, number, number, number];
        get_region_count(): number;
        get_region_id(index: bigint | number): number;
        get_region_index(id: number): [boolean, number];
    }
    class Tensor {
        static $gtype: GObject.GType<Tensor>;
        id: GLib.Quark;
        layout: TensorLayout;
        data_type: TensorDataType;
        dims_order: TensorDimOrder;
        num_dims: number;
        dims: number[];
        constructor(num_dims: bigint | number);
        static alloc(num_dims: bigint | number): Tensor;
        static new_simple(id: GLib.Quark, data_type: TensorDataType, data: Gst.Buffer, dims_order: TensorDimOrder, dims: (bigint | number)[]): Tensor;
        static data_type_get_name(data_type: TensorDataType): string;
        check_type(data_type: TensorDataType, order: TensorDimOrder, dims: (bigint | number)[] | null): boolean;
        copy(): Tensor | null;
        free(): void;
        get_dims(): number[];
        set_simple(id: GLib.Quark, data_type: TensorDataType, data: Gst.Buffer, dims_order: TensorDimOrder, dims: (bigint | number)[]): boolean;
    }
    class TensorMeta {
        static $gtype: GObject.GType<TensorMeta>;
        num_tensors: number;
        get(index: bigint | number): Tensor;
        get_by_id(id: GLib.Quark): Tensor | null;
        get_index_from_id(id: GLib.Quark): number;
        get_typed_tensor(tensor_id: GLib.Quark, data_type: TensorDataType, order: TensorDimOrder, dims: (bigint | number)[] | null): Tensor | null;
        set(tensors: Tensor[]): void;
    }
    class TensorMtd {
        static $gtype: GObject.GType<TensorMtd>;
        id: number;
        static get_mtd_type(): MtdType;
        get_tensor(): Tensor;
    }
    class TrackingMtd {
        static $gtype: GObject.GType<TrackingMtd>;
        id: number;
        static get_mtd_type(): MtdType;
        get_info(): [boolean, number, Gst.ClockTime, Gst.ClockTime, boolean];
        set_lost(): boolean;
        update_last_seen(last_seen: Gst.ClockTime): boolean;
    }
    type MtdType = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default GstAnalytics;
}
declare module 'gi://GstAnalytics' {
    import GstAnalytics10 from 'gi://GstAnalytics?version=1.0';
    export default GstAnalytics10;
}
