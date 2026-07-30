declare module 'gi://OsmGpsMap?version=1.0' {
import type Gtk from 'gi://Gtk?version=3.0';
import type xlib from 'gi://xlib?version=2.0';
import type Gdk from 'gi://Gdk?version=3.0';
import type cairo from 'cairo';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type Pango from 'gi://Pango?version=1.0';
import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
import type freetype2 from 'gi://freetype2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
import type Atk from 'gi://Atk?version=1.0';
export namespace OsmGpsMap {
    enum MapKey_t {
        FULLSCREEN,
        ZOOMIN,
        ZOOMOUT,
        UP,
        DOWN,
        LEFT,
        RIGHT,
        MAX,
    }
    enum MapSource_t {
        NULL,
        OPENSTREETMAP,
        OPENSTREETMAP_RENDERER,
        OPENAERIALMAP,
        MAPS_FOR_FREE,
        OPENCYCLEMAP,
        OSM_PUBLIC_TRANSPORT,
        GOOGLE_STREET,
        GOOGLE_SATELLITE,
        GOOGLE_HYBRID,
        VIRTUAL_EARTH_STREET,
        VIRTUAL_EARTH_SATELLITE,
        VIRTUAL_EARTH_HYBRID,
        OSMC_TRAILS,
        LAST,
    }
    const MAP_CACHE_AUTO: string;
    const MAP_CACHE_DISABLED: string;
    const MAP_CACHE_FRIENDLY: string;
    const MAP_INVALID: number;
    namespace Map {
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            changed: () => void;
            "notify::auto-center": (pspec: GObject.ParamSpec) => void;
            "notify::auto-center-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::auto-download": (pspec: GObject.ParamSpec) => void;
            "notify::drag-limit": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-highlight-radius": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-point-radius": (pspec: GObject.ParamSpec) => void;
            "notify::gps-track-width": (pspec: GObject.ParamSpec) => void;
            "notify::image-format": (pspec: GObject.ParamSpec) => void;
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::map-source": (pspec: GObject.ParamSpec) => void;
            "notify::map-x": (pspec: GObject.ParamSpec) => void;
            "notify::map-y": (pspec: GObject.ParamSpec) => void;
            "notify::max-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::min-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-uri": (pspec: GObject.ParamSpec) => void;
            "notify::record-trip-history": (pspec: GObject.ParamSpec) => void;
            "notify::repo-uri": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-point": (pspec: GObject.ParamSpec) => void;
            "notify::show-trip-history": (pspec: GObject.ParamSpec) => void;
            "notify::tile-cache": (pspec: GObject.ParamSpec) => void;
            "notify::tile-cache-base": (pspec: GObject.ParamSpec) => void;
            "notify::tile-zoom-offset": (pspec: GObject.ParamSpec) => void;
            "notify::tiles-queued": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
            "notify::zoom": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            auto_center: boolean;
            autoCenter: boolean;
            auto_center_threshold: number;
            autoCenterThreshold: number;
            auto_download: boolean;
            autoDownload: boolean;
            drag_limit: number;
            dragLimit: number;
            gps_track_highlight_radius: number;
            gpsTrackHighlightRadius: number;
            gps_track_point_radius: number;
            gpsTrackPointRadius: number;
            gps_track_width: number;
            gpsTrackWidth: number;
            image_format: string;
            imageFormat: string;
            latitude: number;
            longitude: number;
            map_source: number;
            mapSource: number;
            map_x: number;
            mapX: number;
            map_y: number;
            mapY: number;
            max_zoom: number;
            maxZoom: number;
            min_zoom: number;
            minZoom: number;
            proxy_uri: string;
            proxyUri: string;
            record_trip_history: boolean;
            recordTripHistory: boolean;
            repo_uri: string;
            repoUri: string;
            show_gps_point: boolean;
            showGpsPoint: boolean;
            show_trip_history: boolean;
            showTripHistory: boolean;
            tile_cache: string;
            tileCache: string;
            tile_cache_base: string;
            tileCacheBase: string;
            tile_zoom_offset: number;
            tileZoomOffset: number;
            tiles_queued: number;
            tilesQueued: number;
            user_agent: string;
            userAgent: string;
            zoom: number;
        }
    }
    class Map extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Map>;
        get auto_center(): boolean;
        set auto_center(val: boolean);
        get autoCenter(): boolean;
        set autoCenter(val: boolean);
        get auto_center_threshold(): number;
        set auto_center_threshold(val: number);
        get autoCenterThreshold(): number;
        set autoCenterThreshold(val: number);
        get auto_download(): boolean;
        set auto_download(val: boolean);
        get autoDownload(): boolean;
        set autoDownload(val: boolean);
        get drag_limit(): number;
        get dragLimit(): number;
        get gps_track_highlight_radius(): number;
        set gps_track_highlight_radius(val: number);
        get gpsTrackHighlightRadius(): number;
        set gpsTrackHighlightRadius(val: number);
        get gps_track_point_radius(): number;
        set gps_track_point_radius(val: number);
        get gpsTrackPointRadius(): number;
        set gpsTrackPointRadius(val: number);
        get gps_track_width(): number;
        set gps_track_width(val: number);
        get gpsTrackWidth(): number;
        set gpsTrackWidth(val: number);
        get image_format(): string;
        get imageFormat(): string;
        get latitude(): number;
        get longitude(): number;
        get map_source(): number;
        set map_source(val: number);
        get mapSource(): number;
        set mapSource(val: number);
        get map_x(): number;
        get mapX(): number;
        get map_y(): number;
        get mapY(): number;
        get max_zoom(): number;
        get maxZoom(): number;
        get min_zoom(): number;
        get minZoom(): number;
        get proxy_uri(): string;
        get proxyUri(): string;
        get record_trip_history(): boolean;
        set record_trip_history(val: boolean);
        get recordTripHistory(): boolean;
        set recordTripHistory(val: boolean);
        get repo_uri(): string;
        get repoUri(): string;
        get show_gps_point(): boolean;
        set show_gps_point(val: boolean);
        get showGpsPoint(): boolean;
        set showGpsPoint(val: boolean);
        get show_trip_history(): boolean;
        set show_trip_history(val: boolean);
        get showTripHistory(): boolean;
        set showTripHistory(val: boolean);
        get tile_cache(): string;
        set tile_cache(val: string);
        get tileCache(): string;
        set tileCache(val: string);
        get tile_cache_base(): string;
        get tileCacheBase(): string;
        get tile_zoom_offset(): number;
        get tileZoomOffset(): number;
        get tiles_queued(): number;
        get tilesQueued(): number;
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);
        get zoom(): number;
        $signals: Map.SignalSignatures;
        constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Map;
        connect<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Map.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Map.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_default_cache_directory(): string;
        static source_get_copyright(source: MapSource_t): string;
        static source_get_friendly_name(source: MapSource_t): string;
        static source_get_image_format(source: MapSource_t): string;
        static source_get_max_zoom(source: MapSource_t): number;
        static source_get_min_zoom(source: MapSource_t): number;
        static source_get_repo_uri(source: MapSource_t): string;
        static source_is_valid(source: MapSource_t): boolean;
        vfunc_draw_gps_point(cr: cairo.Context): void;
        convert_geographic_to_screen(pt: MapPoint): [number, number];
        convert_screen_to_geographic(pixel_x: number, pixel_y: number): MapPoint;
        download_cancel_all(): void;
        download_maps(pt1: MapPoint, pt2: MapPoint, zoom_start: number, zoom_end: number): void;
        get_bbox(): [MapPoint, MapPoint];
        get_event_location(event: Gdk.EventButton): MapPoint;
        get_scale(): number;
        gps_add(latitude: number, longitude: number, heading: number): void;
        gps_clear(): void;
        gps_get_track(): MapTrack;
        image_add(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf): MapImage;
        image_add_with_alignment(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, xalign: number, yalign: number): MapImage;
        image_add_with_alignment_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, xalign: number, yalign: number, zorder: number): MapImage;
        image_add_z(latitude: number, longitude: number, image: GdkPixbuf.Pixbuf, zorder: number): MapImage;
        image_remove(image: MapImage): boolean;
        image_remove_all(): void;
        layer_add(layer: MapLayer): void;
        layer_remove(layer: MapLayer): boolean;
        layer_remove_all(): void;
        map_redraw(): boolean;
        map_redraw_idle(): void;
        polygon_add(poly: MapPolygon): void;
        polygon_remove(poly: MapPolygon): boolean;
        polygon_remove_all(): void;
        scroll(dx: number, dy: number): void;
        set_center(latitude: number, longitude: number): void;
        set_center_and_zoom(latitude: number, longitude: number, zoom: number): void;
        set_keyboard_shortcut(key: MapKey_t, keyval: number): void;
        set_zoom(zoom: number): number;
        set_zoom_offset(zoom_offset: number): void;
        track_add(track: MapTrack): void;
        track_remove(track: MapTrack): boolean;
        track_remove_all(): void;
        zoom_fit_bbox(latitude1: number, latitude2: number, longitude1: number, longitude2: number): void;
        zoom_in(): number;
        zoom_out(): number;
    }
    namespace MapImage {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::point": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::x-align": (pspec: GObject.ParamSpec) => void;
            "notify::y-align": (pspec: GObject.ParamSpec) => void;
            "notify::z-order": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            point: MapPoint;
            rotation: number;
            x_align: number;
            xAlign: number;
            y_align: number;
            yAlign: number;
            z_order: number;
            zOrder: number;
        }
    }
    class MapImage extends GObject.Object {
        static $gtype: GObject.GType<MapImage>;
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);
        get point(): MapPoint;
        set point(val: MapPoint);
        get rotation(): number;
        set rotation(val: number);
        get x_align(): number;
        set x_align(val: number);
        get xAlign(): number;
        set xAlign(val: number);
        get y_align(): number;
        set y_align(val: number);
        get yAlign(): number;
        set yAlign(val: number);
        get z_order(): number;
        set z_order(val: number);
        get zOrder(): number;
        set zOrder(val: number);
        $signals: MapImage.SignalSignatures;
        constructor(properties?: Partial<MapImage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MapImage;
        connect<K extends keyof MapImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapImage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapImage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapImage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        draw(cr: cairo.Context, rect: Gdk.Rectangle): Gdk.Rectangle;
        get_point(): MapPoint;
        get_rotation(): number;
        get_zorder(): number;
        set_rotation(rot: number): void;
    }
    namespace MapOsd {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::dpad-radius": (pspec: GObject.ParamSpec) => void;
            "notify::osd-x": (pspec: GObject.ParamSpec) => void;
            "notify::osd-y": (pspec: GObject.ParamSpec) => void;
            "notify::show-coordinates": (pspec: GObject.ParamSpec) => void;
            "notify::show-copyright": (pspec: GObject.ParamSpec) => void;
            "notify::show-crosshair": (pspec: GObject.ParamSpec) => void;
            "notify::show-dpad": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-in-dpad": (pspec: GObject.ParamSpec) => void;
            "notify::show-gps-in-zoom": (pspec: GObject.ParamSpec) => void;
            "notify::show-scale": (pspec: GObject.ParamSpec) => void;
            "notify::show-zoom": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, MapLayer.ConstructorProps {
            dpad_radius: number;
            dpadRadius: number;
            osd_x: number;
            osdX: number;
            osd_y: number;
            osdY: number;
            show_coordinates: boolean;
            showCoordinates: boolean;
            show_copyright: boolean;
            showCopyright: boolean;
            show_crosshair: boolean;
            showCrosshair: boolean;
            show_dpad: boolean;
            showDpad: boolean;
            show_gps_in_dpad: boolean;
            showGpsInDpad: boolean;
            show_gps_in_zoom: boolean;
            showGpsInZoom: boolean;
            show_scale: boolean;
            showScale: boolean;
            show_zoom: boolean;
            showZoom: boolean;
        }
    }
    class MapOsd extends GObject.Object implements MapLayer {
        static $gtype: GObject.GType<MapOsd>;
        get dpad_radius(): number;
        set dpad_radius(val: number);
        get dpadRadius(): number;
        set dpadRadius(val: number);
        get osd_x(): number;
        set osd_x(val: number);
        get osdX(): number;
        set osdX(val: number);
        get osd_y(): number;
        set osd_y(val: number);
        get osdY(): number;
        set osdY(val: number);
        get show_coordinates(): boolean;
        set show_coordinates(val: boolean);
        get showCoordinates(): boolean;
        set showCoordinates(val: boolean);
        get show_copyright(): boolean;
        set show_copyright(val: boolean);
        get showCopyright(): boolean;
        set showCopyright(val: boolean);
        get show_crosshair(): boolean;
        set show_crosshair(val: boolean);
        get showCrosshair(): boolean;
        set showCrosshair(val: boolean);
        get show_dpad(): boolean;
        set show_dpad(val: boolean);
        get showDpad(): boolean;
        set showDpad(val: boolean);
        get show_gps_in_dpad(): boolean;
        set show_gps_in_dpad(val: boolean);
        get showGpsInDpad(): boolean;
        set showGpsInDpad(val: boolean);
        get show_gps_in_zoom(): boolean;
        set show_gps_in_zoom(val: boolean);
        get showGpsInZoom(): boolean;
        set showGpsInZoom(val: boolean);
        get show_scale(): boolean;
        set show_scale(val: boolean);
        get showScale(): boolean;
        set showScale(val: boolean);
        get show_zoom(): boolean;
        set show_zoom(val: boolean);
        get showZoom(): boolean;
        set showZoom(val: boolean);
        $signals: MapOsd.SignalSignatures;
        constructor(properties?: Partial<MapOsd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MapOsd;
        connect<K extends keyof MapOsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapOsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapOsd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapOsd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapOsd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        busy(): boolean;
        button_press(map: Map, event: Gdk.EventButton): boolean;
        draw(map: Map, cr: cairo.Context): void;
        render(map: Map): void;
        vfunc_busy(): boolean;
        vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
        vfunc_draw(map: Map, cr: cairo.Context): void;
        vfunc_render(map: Map): void;
    }
    namespace MapPolygon {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::breakable": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::shade-alpha": (pspec: GObject.ParamSpec) => void;
            "notify::shaded": (pspec: GObject.ParamSpec) => void;
            "notify::track": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            breakable: boolean;
            editable: boolean;
            shade_alpha: number;
            shadeAlpha: number;
            shaded: boolean;
            track: never;
            visible: boolean;
        }
    }
    class MapPolygon extends GObject.Object {
        static $gtype: GObject.GType<MapPolygon>;
        get breakable(): boolean;
        set breakable(val: boolean);
        get editable(): boolean;
        set editable(val: boolean);
        get shade_alpha(): number;
        set shade_alpha(val: number);
        get shadeAlpha(): number;
        set shadeAlpha(val: number);
        get shaded(): boolean;
        set shaded(val: boolean);
        get track(): null;
        set track(val: never);
        get visible(): boolean;
        set visible(val: boolean);
        $signals: MapPolygon.SignalSignatures;
        constructor(properties?: Partial<MapPolygon.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MapPolygon;
        connect<K extends keyof MapPolygon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapPolygon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapPolygon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapPolygon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapPolygon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_track(): MapTrack;
    }
    namespace MapTrack {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "point-added": (arg0: MapPoint) => void;
            "point-changed": (arg0: number) => void;
            "point-inserted": (arg0: number) => void;
            "point-removed": (arg0: number) => void;
            "notify::alpha": (pspec: GObject.ParamSpec) => void;
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::line-width": (pspec: GObject.ParamSpec) => void;
            "notify::track": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alpha: number;
            color: Gdk.RGBA;
            editable: boolean;
            line_width: number;
            lineWidth: number;
            track: never;
            visible: boolean;
        }
    }
    class MapTrack extends GObject.Object {
        static $gtype: GObject.GType<MapTrack>;
        get alpha(): number;
        set alpha(val: number);
        get color(): Gdk.RGBA;
        set color(val: Gdk.RGBA);
        get editable(): boolean;
        set editable(val: boolean);
        get line_width(): number;
        set line_width(val: number);
        get lineWidth(): number;
        set lineWidth(val: number);
        get track(): null;
        get visible(): boolean;
        set visible(val: boolean);
        $signals: MapTrack.SignalSignatures;
        constructor(properties?: Partial<MapTrack.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MapTrack;
        connect<K extends keyof MapTrack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MapTrack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MapTrack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MapTrack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MapTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static add_point(track: MapTrack, point: MapPoint): MapTrack;
        get_color(): Gdk.RGBA;
        get_length(): number;
        get_point(pos: number): MapPoint;
        get_points(): MapPoint[];
        insert_point(np: MapPoint, pos: number): void;
        n_points(): number;
        remove_point(pos: number): void;
        set_color(color: Gdk.RGBA): void;
    }
    type MapClass = typeof Map;
    type MapImageClass = typeof MapImage;
    abstract class MapImagePrivate {
        static $gtype: GObject.GType<MapImagePrivate>;
    }
    type MapLayerIface = typeof MapLayer;
    type MapOsdClass = typeof MapOsd;
    abstract class MapOsdPrivate {
        static $gtype: GObject.GType<MapOsdPrivate>;
    }
    class MapPoint {
        static $gtype: GObject.GType<MapPoint>;
        rlat: number;
        rlon: number;
        user_data: null;
        constructor(properties?: Partial<{
            rlat: number;
            rlon: number;
            user_data: null;
        }>);
        static new_degrees(lat: number, lon: number): MapPoint;
        static new_degrees_with_user_data(lat: number, lon: number, user_data: null): MapPoint;
        static new_radians(rlat: number, rlon: number): MapPoint;
        static new_radians_with_user_data(rlat: number, rlon: number, user_data: null): MapPoint;
        copy(): MapPoint;
        free(): void;
        get_degrees(): [number, number];
        get_radians(): [number, number];
        get_user_data(): null;
        set_degrees(lat: number, lon: number): void;
        set_radians(rlat: number, rlon: number): void;
        set_user_data(user_data: null): void;
    }
    type MapPolygonClass = typeof MapPolygon;
    abstract class MapPolygonPrivate {
        static $gtype: GObject.GType<MapPolygonPrivate>;
    }
    abstract class MapPrivate {
        static $gtype: GObject.GType<MapPrivate>;
    }
    type MapTrackClass = typeof MapTrack;
    abstract class MapTrackPrivate {
        static $gtype: GObject.GType<MapTrackPrivate>;
    }
    namespace MapLayer {
        interface Interface {
            vfunc_busy(): boolean;
            vfunc_button_press(map: Map, event: Gdk.EventButton): boolean;
            vfunc_draw(map: Map, cr: cairo.Context): void;
            vfunc_render(map: Map): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface MapLayerNamespace {
        $gtype: GObject.GType<MapLayer>;
        prototype: MapLayer;
    }
    interface MapLayer extends GObject.Object, MapLayer.Interface {
        busy(): boolean;
        button_press(map: Map, event: Gdk.EventButton): boolean;
        draw(map: Map, cr: cairo.Context): void;
        render(map: Map): void;
    }
    export const MapLayer: MapLayerNamespace & {
        new (): MapLayer; 
    };
    const __name__: string;
    const __version__: string;
}
export default OsmGpsMap;
}
declare module 'gi://OsmGpsMap' {
    import OsmGpsMap10 from 'gi://OsmGpsMap?version=1.0';
    export default OsmGpsMap10;
}
