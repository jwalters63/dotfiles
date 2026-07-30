declare module 'gi://Gsk?version=4.0' {
import type Graphene from 'gi://Graphene?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Gdk from 'gi://Gdk?version=4.0';
import type cairo from 'cairo';
import type PangoCairo from 'gi://PangoCairo?version=1.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
export namespace Gsk {
    export namespace BlendMode {
        export const $gtype: GObject.GType<BlendMode>;
    }
    enum BlendMode {
        DEFAULT,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        COLOR,
        HUE,
        SATURATION,
        LUMINOSITY,
    }
    export namespace Corner {
        export const $gtype: GObject.GType<Corner>;
    }
    enum Corner {
        TOP_LEFT,
        TOP_RIGHT,
        BOTTOM_RIGHT,
        BOTTOM_LEFT,
    }
    export namespace FillRule {
        export const $gtype: GObject.GType<FillRule>;
    }
    enum FillRule {
        WINDING,
        EVEN_ODD,
    }
    export namespace GLUniformType {
        export const $gtype: GObject.GType<GLUniformType>;
    }
    enum GLUniformType {
        NONE,
        FLOAT,
        INT,
        UINT,
        BOOL,
        VEC2,
        VEC3,
        VEC4,
    }
    export namespace LineCap {
        export const $gtype: GObject.GType<LineCap>;
    }
    enum LineCap {
        BUTT,
        ROUND,
        SQUARE,
    }
    export namespace LineJoin {
        export const $gtype: GObject.GType<LineJoin>;
    }
    enum LineJoin {
        MITER,
        ROUND,
        BEVEL,
    }
    export namespace MaskMode {
        export const $gtype: GObject.GType<MaskMode>;
    }
    enum MaskMode {
        ALPHA,
        INVERTED_ALPHA,
        LUMINANCE,
        INVERTED_LUMINANCE,
    }
    export namespace PathDirection {
        export const $gtype: GObject.GType<PathDirection>;
    }
    enum PathDirection {
        FROM_START,
        TO_START,
        TO_END,
        FROM_END,
    }
    export namespace PathIntersection {
        export const $gtype: GObject.GType<PathIntersection>;
    }
    enum PathIntersection {
        NONE,
        NORMAL,
        START,
        END,
    }
    export namespace PathOperation {
        export const $gtype: GObject.GType<PathOperation>;
    }
    enum PathOperation {
        MOVE,
        CLOSE,
        LINE,
        QUAD,
        CUBIC,
        CONIC,
    }
    export namespace PorterDuff {
        export const $gtype: GObject.GType<PorterDuff>;
    }
    enum PorterDuff {
        SOURCE,
        DEST,
        SOURCE_OVER_DEST,
        DEST_OVER_SOURCE,
        SOURCE_IN_DEST,
        DEST_IN_SOURCE,
        SOURCE_OUT_DEST,
        DEST_OUT_SOURCE,
        SOURCE_ATOP_DEST,
        DEST_ATOP_SOURCE,
        XOR,
        CLEAR,
    }
    export namespace RenderNodeType {
        export const $gtype: GObject.GType<RenderNodeType>;
    }
    enum RenderNodeType {
        NOT_A_RENDER_NODE,
        CONTAINER_NODE,
        CAIRO_NODE,
        COLOR_NODE,
        LINEAR_GRADIENT_NODE,
        REPEATING_LINEAR_GRADIENT_NODE,
        RADIAL_GRADIENT_NODE,
        REPEATING_RADIAL_GRADIENT_NODE,
        CONIC_GRADIENT_NODE,
        BORDER_NODE,
        TEXTURE_NODE,
        INSET_SHADOW_NODE,
        OUTSET_SHADOW_NODE,
        TRANSFORM_NODE,
        OPACITY_NODE,
        COLOR_MATRIX_NODE,
        REPEAT_NODE,
        CLIP_NODE,
        ROUNDED_CLIP_NODE,
        SHADOW_NODE,
        BLEND_NODE,
        CROSS_FADE_NODE,
        TEXT_NODE,
        BLUR_NODE,
        DEBUG_NODE,
        GL_SHADER_NODE,
        TEXTURE_SCALE_NODE,
        MASK_NODE,
        FILL_NODE,
        STROKE_NODE,
        SUBSURFACE_NODE,
        COMPONENT_TRANSFER_NODE,
        COPY_NODE,
        PASTE_NODE,
        COMPOSITE_NODE,
        ISOLATION_NODE,
        DISPLACEMENT_NODE,
        ARITHMETIC_NODE,
    }
    export namespace ScalingFilter {
        export const $gtype: GObject.GType<ScalingFilter>;
    }
    enum ScalingFilter {
        LINEAR,
        NEAREST,
        TRILINEAR,
    }
    class SerializationError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNSUPPORTED_FORMAT: number;
        static UNSUPPORTED_VERSION: number;
        static INVALID_DATA: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace TransformCategory {
        export const $gtype: GObject.GType<TransformCategory>;
    }
    enum TransformCategory {
        UNKNOWN,
        ANY,
        "3D",
        "2D",
        "2D_AFFINE",
        "2D_TRANSLATE",
        IDENTITY,
    }
    function component_transfer_equal(self: never, other: never): boolean;
    function path_parse(string: string): Path | null;
    function serialization_error_quark(): GLib.Quark;
    function stroke_equal(stroke1: null, stroke2: null): boolean;
    function transform_parse(string: string): [boolean, Transform];
    function value_dup_render_node(value: GObject.Value | any): RenderNode | null;
    function value_get_render_node(value: GObject.Value | any): RenderNode | null;
    function value_set_render_node(value: GObject.Value | any, node: RenderNode): void;
    function value_take_render_node(value: GObject.Value | any, node: RenderNode | null): void;
    interface ParseErrorFunc {
        (start: ParseLocation, end: ParseLocation, error: GLib.Error): void;
    }
    interface PathForeachFunc {
        (op: PathOperation, pts: Graphene.Point[], weight: number): boolean;
    }
    interface PathIntersectionFunc {
        (path1: Path, point1: PathPoint, path2: Path, point2: PathPoint, kind: PathIntersection): boolean;
    }
    interface RenderReplayFontFilter {
        (replay: RenderReplay, font: Pango.Font): Pango.Font;
    }
    interface RenderReplayNodeFilter {
        (replay: RenderReplay, node: RenderNode): RenderNode | null;
    }
    interface RenderReplayTextureFilter {
        (replay: RenderReplay, texture: Gdk.Texture): Gdk.Texture;
    }
    export namespace Isolation {
        export const $gtype: GObject.GType<Isolation>;
    }
    enum Isolation {
        NONE,
        BACKGROUND,
        COPY_PASTE,
        ALL,
    }
    export namespace PathForeachFlags {
        export const $gtype: GObject.GType<PathForeachFlags>;
    }
    enum PathForeachFlags {
        ONLY_LINES,
        QUAD,
        CUBIC,
        CONIC,
    }
    namespace BlendNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class BlendNode extends RenderNode {
        static $gtype: GObject.GType<BlendNode>;
        _init(...args: any[]): void;
        static ["new"](bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode;
        connect<K extends keyof BlendNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BlendNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BlendNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BlendNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BlendNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BlendNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_blend_mode(): BlendMode;
        get_bottom_child(): RenderNode;
        get_top_child(): RenderNode;
    }
    namespace BlurNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class BlurNode extends RenderNode {
        static $gtype: GObject.GType<BlurNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, radius: number): BlurNode;
        connect<K extends keyof BlurNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BlurNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BlurNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BlurNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BlurNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BlurNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_radius(): number;
    }
    namespace BorderNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class BorderNode extends RenderNode {
        static $gtype: GObject.GType<BorderNode>;
        _init(...args: any[]): void;
        static ["new"](outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode;
        connect<K extends keyof BorderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BorderNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BorderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BorderNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BorderNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BorderNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_colors(): Gdk.RGBA[];
        get_outline(): RoundedRect;
        get_widths(): number[];
    }
    namespace BroadwayRenderer {
        interface SignalSignatures extends Renderer.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    class BroadwayRenderer extends Renderer {
        static $gtype: GObject.GType<BroadwayRenderer>;
        $signals: BroadwayRenderer.SignalSignatures;
        constructor(properties?: Partial<BroadwayRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BroadwayRenderer;
        connect<K extends keyof BroadwayRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BroadwayRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BroadwayRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BroadwayRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BroadwayRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BroadwayRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace CairoNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class CairoNode extends RenderNode {
        static $gtype: GObject.GType<CairoNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect): CairoNode;
        connect<K extends keyof CairoNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CairoNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CairoNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CairoNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_draw_context(): cairo.Context;
        get_surface(): cairo.Surface;
    }
    namespace CairoRenderer {
        interface SignalSignatures extends Renderer.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    class CairoRenderer extends Renderer {
        static $gtype: GObject.GType<CairoRenderer>;
        $signals: CairoRenderer.SignalSignatures;
        constructor(properties?: Partial<CairoRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CairoRenderer;
        connect<K extends keyof CairoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CairoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CairoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CairoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ClipNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ClipNode extends RenderNode {
        static $gtype: GObject.GType<ClipNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, clip: Graphene.Rect): ClipNode;
        connect<K extends keyof ClipNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClipNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_clip(): Graphene.Rect;
    }
    namespace ColorMatrixNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ColorMatrixNode extends RenderNode {
        static $gtype: GObject.GType<ColorMatrixNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode;
        connect<K extends keyof ColorMatrixNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorMatrixNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorMatrixNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorMatrixNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorMatrixNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorMatrixNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_color_matrix(): Graphene.Matrix;
        get_color_offset(): Graphene.Vec4;
    }
    namespace ColorNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ColorNode extends RenderNode {
        static $gtype: GObject.GType<ColorNode>;
        _init(...args: any[]): void;
        static ["new"](rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode;
        connect<K extends keyof ColorNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color(): Gdk.RGBA;
    }
    namespace ComponentTransferNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ComponentTransferNode extends RenderNode {
        static $gtype: GObject.GType<ComponentTransferNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, r: ComponentTransfer, g: ComponentTransfer, b: ComponentTransfer, a: ComponentTransfer): ComponentTransferNode;
        connect<K extends keyof ComponentTransferNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComponentTransferNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ComponentTransferNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ComponentTransferNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ComponentTransferNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ComponentTransferNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_transfer(component: Gdk.ColorChannel): ComponentTransfer;
    }
    namespace CompositeNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class CompositeNode extends RenderNode {
        static $gtype: GObject.GType<CompositeNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, mask: RenderNode, op: PorterDuff): CompositeNode;
        connect<K extends keyof CompositeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompositeNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompositeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompositeNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompositeNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompositeNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_mask(): RenderNode;
        get_operator(): PorterDuff;
    }
    namespace ConicGradientNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ConicGradientNode extends RenderNode {
        static $gtype: GObject.GType<ConicGradientNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode;
        connect<K extends keyof ConicGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConicGradientNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ConicGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConicGradientNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ConicGradientNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ConicGradientNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_angle(): number;
        get_center(): Graphene.Point;
        get_color_stops(): ColorStop[];
        get_n_color_stops(): number;
        get_rotation(): number;
    }
    namespace ContainerNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ContainerNode extends RenderNode {
        static $gtype: GObject.GType<ContainerNode>;
        _init(...args: any[]): void;
        static ["new"](children: RenderNode[]): ContainerNode;
        connect<K extends keyof ContainerNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContainerNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContainerNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContainerNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContainerNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContainerNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(idx: number): RenderNode;
        get_n_children(): number;
    }
    namespace CopyNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class CopyNode extends RenderNode {
        static $gtype: GObject.GType<CopyNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode): CopyNode;
        connect<K extends keyof CopyNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CopyNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CopyNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CopyNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CopyNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CopyNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
    }
    namespace CrossFadeNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class CrossFadeNode extends RenderNode {
        static $gtype: GObject.GType<CrossFadeNode>;
        _init(...args: any[]): void;
        static ["new"](start: RenderNode, end: RenderNode, progress: number): CrossFadeNode;
        connect<K extends keyof CrossFadeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CrossFadeNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CrossFadeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CrossFadeNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CrossFadeNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CrossFadeNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_end_child(): RenderNode;
        get_progress(): number;
        get_start_child(): RenderNode;
    }
    namespace DebugNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class DebugNode extends RenderNode {
        static $gtype: GObject.GType<DebugNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, message: string): DebugNode;
        connect<K extends keyof DebugNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DebugNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DebugNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DebugNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DebugNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DebugNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_message(): string;
    }
    namespace FillNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class FillNode extends RenderNode {
        static $gtype: GObject.GType<FillNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, path: Path, fill_rule: FillRule): FillNode;
        connect<K extends keyof FillNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FillNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FillNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FillNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FillNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FillNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_fill_rule(): FillRule;
        get_path(): Path;
    }
    namespace GLRenderer {
        interface SignalSignatures extends Renderer.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    class GLRenderer extends Renderer {
        static $gtype: GObject.GType<GLRenderer>;
        $signals: GLRenderer.SignalSignatures;
        constructor(properties?: Partial<GLRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GLRenderer;
        connect<K extends keyof GLRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace GLShader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            resource: string | null;
            source: GLib.Bytes | Uint8Array;
        }
    }
    class GLShader extends GObject.Object {
        static $gtype: GObject.GType<GLShader>;
        get resource(): string | null;
        get source(): GLib.Bytes;
        $signals: GLShader.SignalSignatures;
        constructor(properties?: Partial<GLShader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bytes(sourcecode: GLib.Bytes | Uint8Array): GLShader;
        static new_from_resource(resource_path: string): GLShader;
        connect<K extends keyof GLShader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLShader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLShader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLShader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        compile(renderer: Renderer): boolean;
        find_uniform_by_name(name: string): number;
        get_arg_bool(args: GLib.Bytes | Uint8Array, idx: number): boolean;
        get_arg_float(args: GLib.Bytes | Uint8Array, idx: number): number;
        get_arg_int(args: GLib.Bytes | Uint8Array, idx: number): number;
        get_arg_uint(args: GLib.Bytes | Uint8Array, idx: number): number;
        get_arg_vec2(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec2): void;
        get_arg_vec3(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec3): void;
        get_arg_vec4(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec4): void;
        get_args_size(): number;
        get_n_textures(): number;
        get_n_uniforms(): number;
        get_resource(): string | null;
        get_source(): GLib.Bytes;
        get_uniform_name(idx: number): string;
        get_uniform_offset(idx: number): number;
        get_uniform_type(idx: number): GLUniformType;
    }
    namespace GLShaderNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class GLShaderNode extends RenderNode {
        static $gtype: GObject.GType<GLShaderNode>;
        _init(...args: any[]): void;
        static ["new"](shader: GLShader, bounds: Graphene.Rect, args: GLib.Bytes | Uint8Array, children: RenderNode[] | null): GLShaderNode;
        connect<K extends keyof GLShaderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShaderNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLShaderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLShaderNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLShaderNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLShaderNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_args(): GLib.Bytes;
        get_child(idx: number): RenderNode;
        get_n_children(): number;
        get_shader(): GLShader;
    }
    namespace InsetShadowNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class InsetShadowNode extends RenderNode {
        static $gtype: GObject.GType<InsetShadowNode>;
        _init(...args: any[]): void;
        static ["new"](outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode;
        connect<K extends keyof InsetShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InsetShadowNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InsetShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InsetShadowNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InsetShadowNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InsetShadowNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_blur_radius(): number;
        get_color(): Gdk.RGBA;
        get_dx(): number;
        get_dy(): number;
        get_outline(): RoundedRect;
        get_spread(): number;
    }
    namespace IsolationNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class IsolationNode extends RenderNode {
        static $gtype: GObject.GType<IsolationNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, isolations: Isolation): IsolationNode;
        connect<K extends keyof IsolationNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IsolationNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IsolationNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IsolationNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IsolationNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IsolationNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_isolations(): Isolation;
    }
    namespace LinearGradientNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class LinearGradientNode extends RenderNode {
        static $gtype: GObject.GType<LinearGradientNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode;
        connect<K extends keyof LinearGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinearGradientNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LinearGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LinearGradientNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LinearGradientNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LinearGradientNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color_stops(): ColorStop[];
        get_end(): Graphene.Point;
        get_n_color_stops(): number;
        get_start(): Graphene.Point;
    }
    namespace MaskNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class MaskNode extends RenderNode {
        static $gtype: GObject.GType<MaskNode>;
        _init(...args: any[]): void;
        static ["new"](source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode;
        connect<K extends keyof MaskNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MaskNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MaskNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MaskNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MaskNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MaskNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_mask(): RenderNode;
        get_mask_mode(): MaskMode;
        get_source(): RenderNode;
    }
    namespace NglRenderer {
        interface SignalSignatures extends Renderer.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    class NglRenderer extends Renderer {
        static $gtype: GObject.GType<NglRenderer>;
        $signals: NglRenderer.SignalSignatures;
        constructor(properties?: Partial<NglRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): NglRenderer;
        connect<K extends keyof NglRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NglRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NglRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NglRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NglRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NglRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OpacityNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class OpacityNode extends RenderNode {
        static $gtype: GObject.GType<OpacityNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, opacity: number): OpacityNode;
        connect<K extends keyof OpacityNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OpacityNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OpacityNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OpacityNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OpacityNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OpacityNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_opacity(): number;
    }
    namespace OutsetShadowNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class OutsetShadowNode extends RenderNode {
        static $gtype: GObject.GType<OutsetShadowNode>;
        _init(...args: any[]): void;
        static ["new"](outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode;
        connect<K extends keyof OutsetShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutsetShadowNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutsetShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutsetShadowNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutsetShadowNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutsetShadowNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_blur_radius(): number;
        get_color(): Gdk.RGBA;
        get_dx(): number;
        get_dy(): number;
        get_outline(): RoundedRect;
        get_spread(): number;
    }
    namespace PasteNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class PasteNode extends RenderNode {
        static $gtype: GObject.GType<PasteNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, depth: bigint | number): PasteNode;
        connect<K extends keyof PasteNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasteNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PasteNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PasteNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PasteNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PasteNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_depth(): number;
    }
    namespace RadialGradientNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class RadialGradientNode extends RenderNode {
        static $gtype: GObject.GType<RadialGradientNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode;
        connect<K extends keyof RadialGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadialGradientNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RadialGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadialGradientNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RadialGradientNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RadialGradientNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_center(): Graphene.Point;
        get_color_stops(): ColorStop[];
        get_end(): number;
        get_hradius(): number;
        get_n_color_stops(): number;
        get_start(): number;
        get_vradius(): number;
    }
    namespace RenderNode {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    abstract class RenderNode {
        static $gtype: GObject.GType<RenderNode>;
        _init(...args: any[]): void;
        connect<K extends keyof RenderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RenderNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RenderNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RenderNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RenderNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RenderNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static deserialize(bytes: GLib.Bytes | Uint8Array, error_func: ParseErrorFunc | null): RenderNode | null;
        draw(cr: cairo.Context): void;
        get_bounds(): Graphene.Rect;
        get_children(): RenderNode[] | null;
        get_node_type(): RenderNodeType;
        get_opaque_rect(): [boolean, Graphene.Rect];
        ref(): RenderNode;
        serialize(): GLib.Bytes;
        unref(): void;
        write_to_file(filename: string): boolean;
    }
    namespace Renderer {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            realized: boolean;
            surface: Gdk.Surface | null;
        }
    }
    abstract class Renderer extends GObject.Object {
        static $gtype: GObject.GType<Renderer>;
        get realized(): boolean;
        get surface(): Gdk.Surface | null;
        $signals: Renderer.SignalSignatures;
        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_surface(surface: Gdk.Surface): Renderer;
        connect<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_surface(): Gdk.Surface | null;
        is_realized(): boolean;
        realize(surface: Gdk.Surface | null): boolean;
        realize_for_display(display: Gdk.Display): boolean;
        render(root: RenderNode, region: cairo.Region | null): void;
        render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture;
        unrealize(): void;
    }
    namespace RepeatNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class RepeatNode extends RenderNode {
        static $gtype: GObject.GType<RepeatNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, child: RenderNode, child_bounds: Graphene.Rect | null): RepeatNode;
        connect<K extends keyof RepeatNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepeatNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepeatNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepeatNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_child_bounds(): Graphene.Rect;
    }
    namespace RepeatingLinearGradientNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class RepeatingLinearGradientNode extends RenderNode {
        static $gtype: GObject.GType<RepeatingLinearGradientNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode;
        connect<K extends keyof RepeatingLinearGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatingLinearGradientNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepeatingLinearGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatingLinearGradientNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepeatingLinearGradientNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepeatingLinearGradientNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace RepeatingRadialGradientNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class RepeatingRadialGradientNode extends RenderNode {
        static $gtype: GObject.GType<RepeatingRadialGradientNode>;
        _init(...args: any[]): void;
        static ["new"](bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode;
        connect<K extends keyof RepeatingRadialGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatingRadialGradientNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepeatingRadialGradientNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepeatingRadialGradientNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepeatingRadialGradientNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepeatingRadialGradientNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace RoundedClipNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class RoundedClipNode extends RenderNode {
        static $gtype: GObject.GType<RoundedClipNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, clip: RoundedRect): RoundedClipNode;
        connect<K extends keyof RoundedClipNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RoundedClipNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RoundedClipNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RoundedClipNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RoundedClipNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RoundedClipNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_clip(): RoundedRect;
    }
    namespace ShadowNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ShadowNode extends RenderNode {
        static $gtype: GObject.GType<ShadowNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, shadows: Shadow[]): ShadowNode;
        connect<K extends keyof ShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ShadowNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShadowNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ShadowNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ShadowNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ShadowNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_n_shadows(): number;
        get_shadow(i: bigint | number): Shadow;
    }
    namespace StrokeNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class StrokeNode extends RenderNode {
        static $gtype: GObject.GType<StrokeNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, path: Path, stroke: Stroke): StrokeNode;
        connect<K extends keyof StrokeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrokeNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StrokeNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrokeNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StrokeNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StrokeNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_path(): Path;
        get_stroke(): Stroke;
    }
    namespace SubsurfaceNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class SubsurfaceNode extends RenderNode {
        static $gtype: GObject.GType<SubsurfaceNode>;
        _init(...args: any[]): void;
        connect<K extends keyof SubsurfaceNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SubsurfaceNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SubsurfaceNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SubsurfaceNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SubsurfaceNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SubsurfaceNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
    }
    namespace TextNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class TextNode extends RenderNode {
        static $gtype: GObject.GType<TextNode>;
        _init(...args: any[]): void;
        static ["new"](font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode;
        connect<K extends keyof TextNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_color(): Gdk.RGBA;
        get_font(): Pango.Font;
        get_glyphs(): Pango.GlyphInfo[];
        get_num_glyphs(): number;
        get_offset(): Graphene.Point;
        has_color_glyphs(): boolean;
    }
    namespace TextureNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class TextureNode extends RenderNode {
        static $gtype: GObject.GType<TextureNode>;
        _init(...args: any[]): void;
        static ["new"](texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode;
        connect<K extends keyof TextureNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextureNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextureNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextureNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextureNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextureNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_texture(): Gdk.Texture;
    }
    namespace TextureScaleNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class TextureScaleNode extends RenderNode {
        static $gtype: GObject.GType<TextureScaleNode>;
        _init(...args: any[]): void;
        static ["new"](texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode;
        connect<K extends keyof TextureScaleNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextureScaleNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextureScaleNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TextureScaleNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextureScaleNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TextureScaleNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_filter(): ScalingFilter;
        get_texture(): Gdk.Texture;
    }
    namespace TransformNode {
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class TransformNode extends RenderNode {
        static $gtype: GObject.GType<TransformNode>;
        _init(...args: any[]): void;
        static ["new"](child: RenderNode, transform: Transform | null): TransformNode;
        connect<K extends keyof TransformNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransformNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TransformNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransformNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TransformNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TransformNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_child(): RenderNode;
        get_transform(): Transform;
    }
    namespace VulkanRenderer {
        interface SignalSignatures extends Renderer.SignalSignatures {
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    class VulkanRenderer extends Renderer {
        static $gtype: GObject.GType<VulkanRenderer>;
        $signals: VulkanRenderer.SignalSignatures;
        constructor(properties?: Partial<VulkanRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VulkanRenderer;
        connect<K extends keyof VulkanRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    type BroadwayRendererClass = typeof BroadwayRenderer;
    type CairoRendererClass = typeof CairoRenderer;
    class ColorStop {
        static $gtype: GObject.GType<ColorStop>;
        offset: number;
        color: Gdk.RGBA;
        constructor(properties?: Partial<{
            offset: number;
            color: Gdk.RGBA;
        }>);
    }
    class ComponentTransfer {
        static $gtype: GObject.GType<ComponentTransfer>;
        constructor(properties?: Partial<{}>);
        static new_discrete(values: number[]): ComponentTransfer;
        static new_gamma(amp: number, exp: number, ofs: number): ComponentTransfer;
        static new_identity(): ComponentTransfer;
        static new_levels(n: number): ComponentTransfer;
        static new_linear(m: number, b: number): ComponentTransfer;
        static new_table(values: number[]): ComponentTransfer;
        static equal(self: never, other: never): boolean;
        copy(): ComponentTransfer;
        free(): void;
    }
    type GLRendererClass = typeof GLRenderer;
    type GLShaderClass = typeof GLShader;
    class ParseLocation {
        static $gtype: GObject.GType<ParseLocation>;
        bytes: number;
        chars: number;
        lines: number;
        line_bytes: number;
        line_chars: number;
    }
    abstract class Path {
        static $gtype: GObject.GType<Path>;
        static parse(string: string): Path | null;
        equal(path2: Path): boolean;
        foreach(flags: PathForeachFlags, func: PathForeachFunc): boolean;
        foreach_intersection(path2: Path | null, func: PathIntersectionFunc): boolean;
        get_bounds(): [boolean, Graphene.Rect];
        get_closest_point(point: Graphene.Point, threshold: number): [boolean, PathPoint, number];
        get_end_point(): [boolean, PathPoint];
        get_next(point: PathPoint): [boolean, PathPoint];
        get_previous(point: PathPoint): [boolean, PathPoint];
        get_start_point(): [boolean, PathPoint];
        get_stroke_bounds(stroke: Stroke): [boolean, Graphene.Rect];
        get_tight_bounds(): [boolean, Graphene.Rect];
        in_fill(point: Graphene.Point, fill_rule: FillRule): boolean;
        is_closed(): boolean;
        is_empty(): boolean;
        print(string: GLib.String): void;
        ref(): Path;
        to_cairo(cr: cairo.Context): void;
        to_string(): string;
        unref(): void;
    }
    class PathBuilder {
        static $gtype: GObject.GType<PathBuilder>;
        constructor(properties?: Partial<{}>);
        static ["new"](): PathBuilder;
        add_cairo_path(path: cairo.Path): void;
        add_circle(center: Graphene.Point, radius: number): void;
        add_layout(layout: Pango.Layout): void;
        add_path(path: Path): void;
        add_rect(rect: Graphene.Rect): void;
        add_reverse_path(path: Path): void;
        add_rounded_rect(rect: RoundedRect): void;
        add_segment(path: Path, start: PathPoint, end: PathPoint): void;
        arc_to(x1: number, y1: number, x2: number, y2: number): void;
        close(): void;
        conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
        cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        get_current_point(): Graphene.Point;
        html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        line_to(x: number, y: number): void;
        move_to(x: number, y: number): void;
        quad_to(x1: number, y1: number, x2: number, y2: number): void;
        ref(): PathBuilder;
        rel_arc_to(x1: number, y1: number, x2: number, y2: number): void;
        rel_conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
        rel_cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        rel_html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        rel_line_to(x: number, y: number): void;
        rel_move_to(x: number, y: number): void;
        rel_quad_to(x1: number, y1: number, x2: number, y2: number): void;
        rel_svg_arc_to(rx: number, ry: number, x_axis_rotation: number, large_arc: boolean, positive_sweep: boolean, x: number, y: number): void;
        svg_arc_to(rx: number, ry: number, x_axis_rotation: number, large_arc: boolean, positive_sweep: boolean, x: number, y: number): void;
        to_path(): Path;
        unref(): void;
    }
    class PathMeasure {
        static $gtype: GObject.GType<PathMeasure>;
        constructor(path: Path);
        static ["new"](path: Path): PathMeasure;
        static new_with_tolerance(path: Path, tolerance: number): PathMeasure;
        get_length(): number;
        get_path(): Path;
        get_point(distance: number): [boolean, PathPoint];
        get_tolerance(): number;
        ref(): PathMeasure;
        unref(): void;
    }
    class PathPoint {
        static $gtype: GObject.GType<PathPoint>;
        compare(point2: PathPoint): number;
        copy(): PathPoint;
        equal(point2: PathPoint): boolean;
        free(): void;
        get_curvature(path: Path, direction: PathDirection): [number, Graphene.Point | null];
        get_distance(measure: PathMeasure): number;
        get_position(path: Path): Graphene.Point;
        get_rotation(path: Path, direction: PathDirection): number;
        get_tangent(path: Path, direction: PathDirection): Graphene.Vec2;
    }
    class RenderReplay {
        static $gtype: GObject.GType<RenderReplay>;
        constructor(properties?: Partial<{}>);
        static ["new"](): RenderReplay;
        ["default"](node: RenderNode): RenderNode | null;
        filter_font(font: Pango.Font): Pango.Font;
        filter_node(node: RenderNode): RenderNode | null;
        filter_texture(texture: Gdk.Texture): Gdk.Texture;
        free(): void;
        set_font_filter(filter: RenderReplayFontFilter | null): void;
        set_node_filter(filter: RenderReplayNodeFilter | null): void;
        set_texture_filter(filter: RenderReplayTextureFilter | null): void;
    }
    type RendererClass = typeof Renderer;
    class RoundedRect {
        static $gtype: GObject.GType<RoundedRect>;
        bounds: Graphene.Rect;
        corner: Graphene.Size[];
        constructor(properties?: Partial<{
            bounds: Graphene.Rect;
            corner: Graphene.Size[];
        }>);
        contains_point(point: Graphene.Point): boolean;
        contains_rect(rect: Graphene.Rect): boolean;
        init(bounds: Graphene.Rect, top_left: Graphene.Size, top_right: Graphene.Size, bottom_right: Graphene.Size, bottom_left: Graphene.Size): RoundedRect;
        init_copy(src: RoundedRect): RoundedRect;
        init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
        intersects_rect(rect: Graphene.Rect): boolean;
        is_rectilinear(): boolean;
        normalize(): RoundedRect;
        offset(dx: number, dy: number): RoundedRect;
        shrink(top: number, right: number, bottom: number, left: number): RoundedRect;
    }
    class ShaderArgsBuilder {
        static $gtype: GObject.GType<ShaderArgsBuilder>;
        constructor(shader: GLShader, initial_values: GLib.Bytes | Uint8Array | null);
        static ["new"](shader: GLShader, initial_values: GLib.Bytes | Uint8Array | null): ShaderArgsBuilder;
        ref(): ShaderArgsBuilder;
        set_bool(idx: number, value: boolean): void;
        set_float(idx: number, value: number): void;
        set_int(idx: number, value: number): void;
        set_uint(idx: number, value: number): void;
        set_vec2(idx: number, value: Graphene.Vec2): void;
        set_vec3(idx: number, value: Graphene.Vec3): void;
        set_vec4(idx: number, value: Graphene.Vec4): void;
        to_args(): GLib.Bytes;
        unref(): void;
    }
    class Shadow {
        static $gtype: GObject.GType<Shadow>;
        color: Gdk.RGBA;
        dx: number;
        dy: number;
        radius: number;
        constructor(properties?: Partial<{
            color: Gdk.RGBA;
            dx: number;
            dy: number;
            radius: number;
        }>);
    }
    class Stroke {
        static $gtype: GObject.GType<Stroke>;
        constructor(line_width: number);
        static ["new"](line_width: number): Stroke;
        static equal(stroke1: null, stroke2: null): boolean;
        copy(): Stroke;
        free(): void;
        get_dash(): number[] | null;
        get_dash_offset(): number;
        get_line_cap(): LineCap;
        get_line_join(): LineJoin;
        get_line_width(): number;
        get_miter_limit(): number;
        set_dash(dash: number[] | null): void;
        set_dash_offset(offset: number): void;
        set_line_cap(line_cap: LineCap): void;
        set_line_join(line_join: LineJoin): void;
        set_line_width(line_width: number): void;
        set_miter_limit(limit: number): void;
        to_cairo(cr: cairo.Context): void;
    }
    class Transform {
        static $gtype: GObject.GType<Transform>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Transform;
        static parse(string: string): [boolean, Transform];
        equal(second: Transform | null): boolean;
        get_category(): TransformCategory;
        invert(): Transform | null;
        matrix(matrix: Graphene.Matrix): Transform;
        matrix_2d(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): Transform | null;
        perspective(depth: number): Transform;
        print(string: GLib.String): void;
        ref(): Transform | null;
        rotate(angle: number): Transform | null;
        rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null;
        scale(factor_x: number, factor_y: number): Transform | null;
        scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null;
        skew(skew_x: number, skew_y: number): Transform | null;
        to_2d(): [number, number, number, number, number, number];
        to_2d_components(): [number, number, number, number, number, number, number];
        to_affine(): [number, number, number, number];
        to_matrix(): Graphene.Matrix;
        to_string(): string;
        to_translate(): [number, number];
        transform(other: Transform | null): Transform | null;
        transform_bounds(rect: Graphene.Rect): Graphene.Rect;
        transform_point(point: Graphene.Point): Graphene.Point;
        translate(point: Graphene.Point): Transform | null;
        translate_3d(point: Graphene.Point3D): Transform | null;
        unref(): void;
    }
    type VulkanRendererClass = typeof VulkanRenderer;
    const __name__: string;
    const __version__: string;
}
export default Gsk;
}
declare module 'gi://Gsk' {
    import Gsk40 from 'gi://Gsk?version=4.0';
    export default Gsk40;
}
