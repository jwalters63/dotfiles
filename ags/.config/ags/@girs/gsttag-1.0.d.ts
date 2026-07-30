declare module 'gi://GstTag?version=1.0' {
import type GstBase from 'gi://GstBase?version=1.0';
import type Gst from 'gi://Gst?version=1.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace GstTag {
    export namespace TagDemuxResult {
        export const $gtype: GObject.GType<TagDemuxResult>;
    }
    enum TagDemuxResult {
        BROKEN_TAG,
        AGAIN,
        OK,
    }
    export namespace TagImageType {
        export const $gtype: GObject.GType<TagImageType>;
    }
    enum TagImageType {
        NONE,
        UNDEFINED,
        FRONT_COVER,
        BACK_COVER,
        LEAFLET_PAGE,
        MEDIUM,
        LEAD_ARTIST,
        ARTIST,
        CONDUCTOR,
        BAND_ORCHESTRA,
        COMPOSER,
        LYRICIST,
        RECORDING_LOCATION,
        DURING_RECORDING,
        DURING_PERFORMANCE,
        VIDEO_CAPTURE,
        FISH,
        ILLUSTRATION,
        BAND_ARTIST_LOGO,
        PUBLISHER_STUDIO_LOGO,
    }
    const TAG_ACOUSTID_FINGERPRINT: string;
    const TAG_ACOUSTID_ID: string;
    const TAG_CAPTURING_CONTRAST: string;
    const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string;
    const TAG_CAPTURING_EXPOSURE_COMPENSATION: string;
    const TAG_CAPTURING_EXPOSURE_MODE: string;
    const TAG_CAPTURING_EXPOSURE_PROGRAM: string;
    const TAG_CAPTURING_FLASH_FIRED: string;
    const TAG_CAPTURING_FLASH_MODE: string;
    const TAG_CAPTURING_FOCAL_LENGTH: string;
    const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string;
    const TAG_CAPTURING_FOCAL_RATIO: string;
    const TAG_CAPTURING_GAIN_ADJUSTMENT: string;
    const TAG_CAPTURING_ISO_SPEED: string;
    const TAG_CAPTURING_LIGHT_SOURCE: string;
    const TAG_CAPTURING_METERING_MODE: string;
    const TAG_CAPTURING_SATURATION: string;
    const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string;
    const TAG_CAPTURING_SHARPNESS: string;
    const TAG_CAPTURING_SHUTTER_SPEED: string;
    const TAG_CAPTURING_SOURCE: string;
    const TAG_CAPTURING_WHITE_BALANCE: string;
    const TAG_CDDA_CDDB_DISCID: string;
    const TAG_CDDA_CDDB_DISCID_FULL: string;
    const TAG_CDDA_MUSICBRAINZ_DISCID: string;
    const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string;
    const TAG_CMML_CLIP: string;
    const TAG_CMML_HEAD: string;
    const TAG_CMML_STREAM: string;
    const TAG_ID3V2_HEADER_SIZE: number;
    const TAG_IMAGE_HORIZONTAL_PPI: string;
    const TAG_IMAGE_VERTICAL_PPI: string;
    const TAG_MUSICAL_KEY: string;
    const TAG_MUSICBRAINZ_ALBUMARTISTID: string;
    const TAG_MUSICBRAINZ_ALBUMID: string;
    const TAG_MUSICBRAINZ_ARTISTID: string;
    const TAG_MUSICBRAINZ_RELEASEGROUPID: string;
    const TAG_MUSICBRAINZ_RELEASETRACKID: string;
    const TAG_MUSICBRAINZ_TRACKID: string;
    const TAG_MUSICBRAINZ_TRMID: string;
    function tag_check_language_code(lang_code: string): boolean;
    function tag_freeform_string_to_utf8(data: number[], env_vars: string[]): string | null;
    function tag_from_id3_tag(id3_tag: string): string | null;
    function tag_from_id3_user_tag(type: string, id3_user_tag: string): string | null;
    function tag_from_vorbis_tag(vorbis_tag: string): string | null;
    function tag_get_id3v2_tag_size(buffer: Gst.Buffer): number;
    function tag_get_language_code_iso_639_1(lang_code: string): string | null;
    function tag_get_language_code_iso_639_2B(lang_code: string): string | null;
    function tag_get_language_code_iso_639_2T(lang_code: string): string | null;
    function tag_get_language_codes(): string[];
    function tag_get_language_name(language_code: string): string | null;
    function tag_get_license_description(license_ref: string): string | null;
    function tag_get_license_flags(license_ref: string): TagLicenseFlags;
    function tag_get_license_jurisdiction(license_ref: string): string | null;
    function tag_get_license_nick(license_ref: string): string | null;
    function tag_get_license_title(license_ref: string): string | null;
    function tag_get_license_version(license_ref: string): string | null;
    function tag_get_licenses(): string[];
    function tag_id3_genre_count(): number;
    function tag_id3_genre_get(id: number): string | null;
    function tag_image_data_to_image_sample(image_data: Uint8Array | string, image_type: TagImageType): Gst.Sample | null;
    function tag_list_add_id3_image(tag_list: Gst.TagList, image_data: Uint8Array | string, id3_picture_type: number): boolean;
    function tag_list_from_exif_buffer(buffer: Gst.Buffer, byte_order: number, base_offset: number): Gst.TagList;
    function tag_list_from_exif_buffer_with_tiff_header(buffer: Gst.Buffer): Gst.TagList;
    function tag_list_from_id3v2_tag(buffer: Gst.Buffer): Gst.TagList | null;
    function tag_list_from_vorbiscomment(data: Uint8Array | string, id_data: Uint8Array | string): [Gst.TagList | null, string];
    function tag_list_from_vorbiscomment_buffer(buffer: Gst.Buffer, id_data: Uint8Array | string): [Gst.TagList | null, string];
    function tag_list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList | null;
    function tag_list_new_from_id3v1(data: Uint8Array | string): Gst.TagList | null;
    function tag_list_to_exif_buffer(taglist: Gst.TagList, byte_order: number, base_offset: number): Gst.Buffer;
    function tag_list_to_exif_buffer_with_tiff_header(taglist: Gst.TagList): Gst.Buffer;
    function tag_list_to_vorbiscomment_buffer(list: Gst.TagList, id_data: Uint8Array | string, vendor_string: string | null): Gst.Buffer;
    function tag_list_to_xmp_buffer(list: Gst.TagList, read_only: boolean, schemas: string[]): Gst.Buffer | null;
    function tag_parse_extended_comment(ext_comment: string, fail_if_no_key: boolean): [boolean, string, string, string];
    function tag_register_musicbrainz_tags(): void;
    function tag_to_id3_tag(gst_tag: string): string | null;
    function tag_to_vorbis_comments(list: Gst.TagList, tag: string): string[];
    function tag_to_vorbis_tag(gst_tag: string): string | null;
    function tag_xmp_list_schemas(): string[];
    function vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
    export namespace TagLicenseFlags {
        export const $gtype: GObject.GType<TagLicenseFlags>;
    }
    enum TagLicenseFlags {
        PERMITS_REPRODUCTION,
        PERMITS_DISTRIBUTION,
        PERMITS_DERIVATIVE_WORKS,
        PERMITS_SHARING,
        REQUIRES_NOTICE,
        REQUIRES_ATTRIBUTION,
        REQUIRES_SHARE_ALIKE,
        REQUIRES_SOURCE_CODE,
        REQUIRES_COPYLEFT,
        REQUIRES_LESSER_COPYLEFT,
        PROHIBITS_COMMERCIAL_USE,
        PROHIBITS_HIGH_INCOME_NATION_USE,
        CREATIVE_COMMONS_LICENSE,
        FREE_SOFTWARE_FOUNDATION_LICENSE,
    }
    namespace TagDemux {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }
    abstract class TagDemux extends Gst.Element {
        static $gtype: GObject.GType<TagDemux>;
        $signals: TagDemux.SignalSignatures;
        element: Gst.Element;
        constructor(properties?: Partial<TagDemux.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TagDemux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagDemux.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TagDemux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagDemux.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TagDemux.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TagDemux.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number): boolean;
        vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;
        vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number, tags: Gst.TagList): TagDemuxResult;
    }
    namespace TagMux {
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.TagSetter.ConstructorProps {}
    }
    abstract class TagMux extends Gst.Element implements Gst.TagSetter {
        static $gtype: GObject.GType<TagMux>;
        $signals: TagMux.SignalSignatures;
        element: Gst.Element;
        constructor(properties?: Partial<TagMux.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TagMux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagMux.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TagMux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagMux.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TagMux.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TagMux.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_render_end_tag(tag_list: Gst.TagList): Gst.Buffer;
        vfunc_render_start_tag(tag_list: Gst.TagList): Gst.Buffer;
        add_tag_value(mode: Gst.TagMergeMode, tag: string, value: GObject.Value | any): void;
        get_tag_list(): Gst.TagList | null;
        get_tag_merge_mode(): Gst.TagMergeMode;
        merge_tags(list: Gst.TagList, mode: Gst.TagMergeMode): void;
        reset_tags(): void;
        set_tag_merge_mode(mode: Gst.TagMergeMode): void;
        call_async(func: Gst.ElementCallAsyncFunc): void;
        call_async(...args: never[]): any;
    }
    type TagDemuxClass = typeof TagDemux;
    abstract class TagDemuxPrivate {
        static $gtype: GObject.GType<TagDemuxPrivate>;
    }
    type TagMuxClass = typeof TagMux;
    abstract class TagMuxPrivate {
        static $gtype: GObject.GType<TagMuxPrivate>;
    }
    type TagXmpWriterInterface = typeof TagXmpWriter;
    namespace TagXmpWriter {
        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }
    export interface TagXmpWriterNamespace {
        $gtype: GObject.GType<TagXmpWriter>;
        prototype: TagXmpWriter;
    }
    interface TagXmpWriter extends Gst.Element {
        add_all_schemas(): void;
        add_schema(schema: string): void;
        has_schema(schema: string): boolean;
        remove_all_schemas(): void;
        remove_schema(schema: string): void;
        tag_list_to_xmp_buffer(taglist: Gst.TagList, read_only: boolean): Gst.Buffer;
    }
    export const TagXmpWriter: TagXmpWriterNamespace & {
        new (): TagXmpWriter; 
    };
    const __name__: string;
    const __version__: string;
}
export default GstTag;
}
declare module 'gi://GstTag' {
    import GstTag10 from 'gi://GstTag?version=1.0';
    export default GstTag10;
}
