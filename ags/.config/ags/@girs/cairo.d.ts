declare module 'cairo' {
import Cairo from 'gi://cairo?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
 namespace giCairo {
    export import Status = Cairo.Status;
    export import Content = Cairo.Content;
    export import Operator = Cairo.Operator;
    export import Antialias = Cairo.Antialias;
    export import FillRule = Cairo.FillRule;
    export import LineCap = Cairo.LineCap;
    export import LineJoin = Cairo.LineJoin;
    export import TextClusterFlags = Cairo.TextClusterFlags;
    export import FontSlant = Cairo.FontSlant;
    export import FontWeight = Cairo.FontWeight;
    export import SubpixelOrder = Cairo.SubpixelOrder;
    export import HintStyle = Cairo.HintStyle;
    export import HintMetrics = Cairo.HintMetrics;
    export import FontType = Cairo.FontType;
    export import PathDataType = Cairo.PathDataType;
    export import DeviceType = Cairo.DeviceType;
    export import SurfaceType = Cairo.SurfaceType;
    export import Format = Cairo.Format;
    export import PatternType = Cairo.PatternType;
    export import Extend = Cairo.Extend;
    export import Filter = Cairo.Filter;
    export import RegionOverlap = Cairo.RegionOverlap;
    export interface TextExtents {
        xBearing: number;
        yBearing: number;
        width: number;
        height: number;
        xAdvance: number;
        yAdvance: number;
    }
    export interface FontExtents {
        ascent: number;
        descent: number;
        height: number;
        maxXAdvance: number;
        maxYAdvance: number;
    }
    export class Context extends Cairo.Context {
        constructor(surface: Surface);
        $dispose(): void;
        arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
        arcNegative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
        curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        clip(): void;
        clipPreserve(): void;
        clipExtents(): [number, number, number, number];
        closePath(): void;
        copyPage(): void;
        deviceToUser(x: number, y: number): [number, number];
        deviceToUserDistance(x: number, y: number): [number, number];
        fill(): void;
        fillPreserve(): void;
        fillExtents(): [number, number, number, number];
        getAntialias(): Antialias;
        getCurrentPoint(): [number, number];
        getDashCount(): number;
        getFillRule(): FillRule;
        getLineCap(): LineCap;
        getLineJoin(): LineJoin;
        getLineWidth(): number;
        getMiterLimit(): number;
        getOperator(): Operator;
        getSource(): Pattern;
        getTarget(): Surface;
        getGroupTarget(): Surface;
        getTolerance(): number;
        hasCurrentPoint(): boolean;
        identityMatrix(): void;
        inFill(x: number, y: number): boolean;
        inStroke(x: number, y: number): boolean;
        lineTo(x: number, y: number): void;
        mask(pattern: Pattern): void;
        maskSurface(surface: Surface, x: number, y: number): void;
        moveTo(x: number, y: number): void;
        newPath(): void;
        newSubPath(): void;
        paint(): void;
        paintWithAlpha(alpha: number): void;
        pathExtents(): [number, number, number, number];
        popGroup(): Pattern;
        popGroupToSource(): void;
        pushGroup(): void;
        pushGroupWithContent(content: Content): void;
        rectangle(x: number, y: number, width: number, height: number): void;
        relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;
        relLineTo(dx: number, dy: number): void;
        relMoveTo(dx: number, dy: number): void;
        resetClip(): void;
        restore(): void;
        rotate(angle: number): void;
        save(): void;
        scale(sx: number, sy: number): void;
        selectFontFace(family: string, slant: number, weight: number): void;
        setAntialias(antialias: Antialias): void;
        setDash(dashes: number[], offset: number): void;
        setFontSize(size: number): void;
        setFillRule(fillRule: FillRule): void;
        setLineCap(lineCap: LineCap): void;
        setLineJoin(lineJoin: LineJoin): void;
        setLineWidth(width: number): void;
        setMiterLimit(limit: number): void;
        setOperator(op: Operator): void;
        setSource(pattern: Pattern): void;
        setSourceRGB(red: number, green: number, blue: number): void;
        setSourceRGBA(red: number, green: number, blue: number, alpha: number): void;
        setSourceSurface(surface: Surface, x: number, y: number): void;
        setTolerance(tolerance: number): void;
        showPage(): void;
        showText(utf8: string): void;
        textPath(utf8: string): void;
        stroke(): void;
        strokePreserve(): void;
        strokeExtents(): [number, number, number, number];
        textExtents(utf8: string): TextExtents;
        fontExtents(): FontExtents;
        showGlyphs(glyphs: Glyph[]): void;
        showTextGlyphs(
            utf8: string,
            glyphs: Glyph[],
            clusters: TextCluster[],
            clusterFlags: TextClusterFlags,
        ): void;
        glyphExtents(glyphs: Glyph[]): TextExtents;
        translate(tx: number, ty: number): void;
        userToDevice(x: number, y: number): [number, number];
        userToDeviceDistance(x: number, y: number): [number, number];
        copyPath(): Path;
        copyPathFlat(): Path;
        appendPath(path: Path): void;
    }
    export abstract class Surface extends Cairo.Surface {
        getDeviceScale(): [number, number];
        setDeviceScale(x: number, y: number): void;
        getDeviceOffset(): [number, number];
        setDeviceOffset(x: number, y: number): void;
        flush(): void;
        finish(): void;
        getType(): SurfaceType;
        writeToPNG(filename: string): void;
        set_user_data(key: UserDataKey, userData: unknown, destroy?: (data: unknown) => void): Status;
        get_user_data(key: UserDataKey): unknown;
    }
    export class ImageSurface extends Surface {
        constructor(format: Format, width: number, height: number);
        static createFromPNG(filename: string): ImageSurface;
        getFormat(): Format;
        getWidth(): number;
        getHeight(): number;
        getStride(): number;
        writeToPNG(filename: string): void;
    }
    export class PDFSurface extends Surface {
        constructor(filename: string, width: number, height: number);
    }
    export class PSSurface extends Surface {
        constructor(filename: string, width: number, height: number);
    }
    export class SVGSurface extends Surface {
        constructor(filename: string, width: number, height: number);
    }
    export class Pattern extends Cairo.Pattern {
        getType(): PatternType;
    }
    export class Gradient extends Pattern {
        addColorStopRGBA(offset: number, red: number, green: number, blue: number, alpha: number): void;
        addColorStopRGB(offset: number, red: number, green: number, blue: number): void;
    }
    export class LinearGradient extends Gradient {
        constructor(x0: number, y0: number, x1: number, y1: number);
    }
    export class RadialGradient extends Gradient {
        constructor(cx0: number, cy0: number, radius0: number, cx1: number, cy1: number, radius1: number);
    }
    export class SurfacePattern extends Pattern {
        constructor(surface: Surface);
        setExtend(extend: Extend): void;
        getExtend(): Extend;
        setFilter(filter: Filter): void;
        getFilter(): Filter;
    }
    export class SolidPattern extends Pattern {
        static createRGB(red: number, green: number, blue: number): SolidPattern;
        static createRGBA(red: number, green: number, blue: number, alpha: number): SolidPattern;
    }
    export class Path extends Cairo.Path {}
    export class Rectangle extends Cairo.Rectangle {}
    export class RectangleInt extends Cairo.RectangleInt {}
    export class Region extends Cairo.Region {
        constructor();
        numRectangles(): number;
        getRectangle(i: number): RectangleInt;
        union(other: Region): void;
        subtract(other: Region): void;
        intersect(other: Region): void;
        xor(other: Region): void;
        unionRectangle(rect: RectangleInt): void;
        subtractRectangle(rect: RectangleInt): void;
        intersectRectangle(rect: RectangleInt): void;
        xorRectangle(rect: RectangleInt): void;
    }
    export interface RectangleInt {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    export class Matrix extends Cairo.Matrix {}
    export class FontFace extends Cairo.FontFace {}
    export class ScaledFont extends Cairo.ScaledFont {}
    export interface Glyph {
        index: number;
        x: number;
        y: number;
    }
    export interface TextCluster {
        num_bytes: number;
        num_glyphs: number;
    }
    export interface UserDataKey {
        readonly unused?: number;
    }
    export class FontOptions extends Cairo.FontOptions {}
    export class Device extends Cairo.Device {}
}
export default giCairo;
}
