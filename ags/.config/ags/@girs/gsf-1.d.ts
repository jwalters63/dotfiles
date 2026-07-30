declare module 'gi://Gsf?version=1' {
import type libxml2 from 'gi://libxml2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Gsf {
    enum ClipFormat {
        WINDOWS_CLIPBOARD,
        MACINTOSH_CLIPBOARD,
        GUID,
        NO_DATA,
        CLIPBOARD_FORMAT_NAME,
        UNKNOWN,
    }
    enum ClipFormatWindows {
        ERROR,
        UNKNOWN,
        METAFILE,
        DIB,
        ENHANCED_METAFILE,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static OUT_OF_MEMORY: number;
        static INVALID_DATA: number;
        constructor(options: { message: string; code: number });
    }
    export namespace OutputCsvQuotingMode {
        export const $gtype: GObject.GType<OutputCsvQuotingMode>;
    }
    enum OutputCsvQuotingMode {
        NEVER,
        AUTO,
        ALWAYS,
    }
    enum XMLContent {
        NO_CONTENT,
        CONTENT,
        SHARED_CONTENT,
        "2ND",
    }
    enum ZipCompressionMethod {
        STORED,
        SHRUNK,
        REDUCEDX1,
        REDUCEDX2,
        REDUCEDX3,
        REDUCEDX4,
        IMPLODED,
        TOKENIZED,
        DEFLATED,
        DEFLATED_BETTER,
        IMPLODED_BETTER,
    }
    const META_NAME_BYTE_COUNT: string;
    const META_NAME_CASE_SENSITIVE: string;
    const META_NAME_CATEGORY: string;
    const META_NAME_CELL_COUNT: string;
    const META_NAME_CHARACTER_COUNT: string;
    const META_NAME_CODEPAGE: string;
    const META_NAME_COMPANY: string;
    const META_NAME_CREATOR: string;
    const META_NAME_DATE_CREATED: string;
    const META_NAME_DATE_MODIFIED: string;
    const META_NAME_DESCRIPTION: string;
    const META_NAME_DICTIONARY: string;
    const META_NAME_DOCUMENT_PARTS: string;
    const META_NAME_EDITING_DURATION: string;
    const META_NAME_GENERATOR: string;
    const META_NAME_HEADING_PAIRS: string;
    const META_NAME_HIDDEN_SLIDE_COUNT: string;
    const META_NAME_IMAGE_COUNT: string;
    const META_NAME_INITIAL_CREATOR: string;
    const META_NAME_KEYWORD: string;
    const META_NAME_KEYWORDS: string;
    const META_NAME_LANGUAGE: string;
    const META_NAME_LAST_PRINTED: string;
    const META_NAME_LAST_SAVED_BY: string;
    const META_NAME_LINE_COUNT: string;
    const META_NAME_LINKS_DIRTY: string;
    const META_NAME_LOCALE_SYSTEM_DEFAULT: string;
    const META_NAME_MANAGER: string;
    const META_NAME_MM_CLIP_COUNT: string;
    const META_NAME_MSOLE_UNKNOWN_17: string;
    const META_NAME_MSOLE_UNKNOWN_18: string;
    const META_NAME_MSOLE_UNKNOWN_19: string;
    const META_NAME_MSOLE_UNKNOWN_20: string;
    const META_NAME_MSOLE_UNKNOWN_21: string;
    const META_NAME_MSOLE_UNKNOWN_22: string;
    const META_NAME_MSOLE_UNKNOWN_23: string;
    const META_NAME_NOTE_COUNT: string;
    const META_NAME_OBJECT_COUNT: string;
    const META_NAME_PAGE_COUNT: string;
    const META_NAME_PARAGRAPH_COUNT: string;
    const META_NAME_PRESENTATION_FORMAT: string;
    const META_NAME_PRINTED_BY: string;
    const META_NAME_PRINT_DATE: string;
    const META_NAME_REVISION_COUNT: string;
    const META_NAME_SCALE: string;
    const META_NAME_SECURITY: string;
    const META_NAME_SLIDE_COUNT: string;
    const META_NAME_SPREADSHEET_COUNT: string;
    const META_NAME_STATUS: string;
    const META_NAME_SUBJECT: string;
    const META_NAME_TABLE_COUNT: string;
    const META_NAME_TEMPLATE: string;
    const META_NAME_THUMBNAIL: string;
    const META_NAME_TITLE: string;
    const META_NAME_WORD_COUNT: string;
    function base64_decode_simple(data: Uint8Array | string): number;
    function base64_decode_step(_in: Uint8Array | string, out: Uint8Array | string, state: number, save: number): [number, number, number];
    function base64_encode_close(_in: Uint8Array | string, break_lines: boolean, out: Uint8Array | string, state: number, save: number): [number, number, number];
    function base64_encode_simple(data: Uint8Array | string): number;
    function base64_encode_step(_in: Uint8Array | string, break_lines: boolean, out: Uint8Array | string, state: number, save: number): [number, number, number];
    function debug_flag(flag: string): boolean;
    function doc_meta_dump(meta: DocMetaData): void;
    function error_quark(): GLib.Quark;
    function extension_pointer(path: string): string;
    function filename_to_utf8(filename: string, quoted: boolean): string;
    function init(): void;
    function init_dynamic(module: GObject.TypeModule | null): void;
    function le_get_double(p: null): number;
    function le_get_float(p: null): number;
    function le_get_guint64(p: null): number;
    function le_set_double(p: null, d: number): void;
    function le_set_float(p: null, f: number): void;
    function mem_dump(ptr: Uint8Array | string): void;
    function msole_codepage_to_lid(codepage: number): number;
    function msole_iconv_win_codepage(): number;
    function msole_inflate(input: Input, offset: gsf_off_t): Uint8Array;
    function msole_language_for_lid(lid: number): string;
    function msole_lid_for_language(lang: string | null): number;
    function msole_lid_to_codepage(lid: number): number;
    function msole_lid_to_codepage_str(lid: number): string;
    function odf_get_ns(): XMLInNS;
    function odf_get_version(): number;
    function odf_get_version_string(): string;
    function open_pkg_error_id(): number;
    function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter): void;
    function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input;
    function open_pkg_open_rel_by_id(opkg: Input, id: string): Input;
    function open_pkg_open_rel_by_type(opkg: Input, type: string): Input;
    function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error;
    function property_settings_find(name: string, params: GObject.Parameter[]): GObject.Parameter | null;
    function property_settings_free(params: GObject.Parameter[]): void;
    function shutdown(): void;
    function shutdown_dynamic(module: GObject.TypeModule | null): void;
    function value_get_docprop_array(value: GObject.Value | any): unknown[] | null;
    function value_get_docprop_varray(value: GObject.Value | any): GObject.ValueArray;
    function value_get_docprop_vector(value: GObject.Value | any): DocPropVector;
    function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number;
    function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number;
    function xml_gvalue_from_str(res: GObject.Value | any, t: GObject.GType, str: string): boolean;
    function xml_probe(input: Input, func: XMLProbeFunc): boolean;
    interface OpenPkgIter {
        (opkg: Input, rel: OpenPkgRel): void;
    }
    interface XMLInExtDtor {
        (xin: XMLIn, old_state: null): void;
    }
    interface XMLInUnknownFunc {
        (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean;
    }
    interface XMLProbeFunc {
        (name: libxml2.Char, prefix: libxml2.Char, URI: libxml2.Char, nb_namespaces: number, namespaces: libxml2.Char, nb_attributes: number, nb_defaulted: number, attributes: libxml2.Char): boolean;
    }
    namespace Blob {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Blob extends GObject.Object {
        static $gtype: GObject.GType<Blob>;
        $signals: Blob.SignalSignatures;
        object: GObject.Object;
        constructor(properties?: Partial<Blob.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](data_to_copy: Uint8Array | string): Blob;
        connect<K extends keyof Blob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Blob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Blob.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Blob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_size(): number;
        peek_data(): null;
    }
    namespace ClipData {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class ClipData extends GObject.Object {
        static $gtype: GObject.GType<ClipData>;
        $signals: ClipData.SignalSignatures;
        object: GObject.Object;
        constructor(properties?: Partial<ClipData.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](format: ClipFormat, data_blob: Blob): ClipData;
        connect<K extends keyof ClipData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClipData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClipData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data_blob(): Blob;
        get_format(): ClipFormat;
        get_windows_clipboard_format(): ClipFormatWindows;
        peek_real_data(ret_size: bigint | number): null;
    }
    namespace DocMetaData {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DocMetaData extends GObject.Object {
        static $gtype: GObject.GType<DocMetaData>;
        $signals: DocMetaData.SignalSignatures;
        constructor(properties?: Partial<DocMetaData.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DocMetaData;
        connect<K extends keyof DocMetaData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocMetaData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DocMetaData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocMetaData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DocMetaData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocMetaData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        foreach(func: GLib.HFunc): void;
        insert(name: string, value: GObject.Value | any): void;
        lookup(name: string): DocProp | null;
        odf_subtree(doc: XMLIn): void;
        read_from_msole(_in: Input): GLib.Error;
        read_from_odf(input: Input): GLib.Error;
        remove(name: string): void;
        size(): number;
        steal(name: string): DocProp | null;
        store(prop: DocProp): void;
        write_to_msole(out: Output, doc_not_component: boolean): boolean;
        write_to_odf(output: XMLOut): boolean;
    }
    namespace DocPropVector {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DocPropVector extends GObject.Object {
        static $gtype: GObject.GType<DocPropVector>;
        $signals: DocPropVector.SignalSignatures;
        constructor(properties?: Partial<DocPropVector.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DocPropVector;
        connect<K extends keyof DocPropVector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocPropVector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DocPropVector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocPropVector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DocPropVector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocPropVector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        append(value: GObject.Value | any): void;
        as_string(): string;
    }
    namespace Infile {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    abstract class Infile extends Input {
        static $gtype: GObject.GType<Infile>;
        $signals: Infile.SignalSignatures;
        constructor(properties?: Partial<Infile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Infile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Infile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Infile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Infile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Infile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Infile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_name_by_index(i: number): string | null;
        vfunc_num_children(): number;
        child_by_aname(names: string[]): Input;
        child_by_index(i: number): Input;
        child_by_name(name: string): Input;
        name_by_index(i: number): string | null;
        num_children(): number;
    }
    namespace InfileMSOle {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {}
    }
    class InfileMSOle extends Infile {
        static $gtype: GObject.GType<InfileMSOle>;
        $signals: InfileMSOle.SignalSignatures;
        constructor(properties?: Partial<InfileMSOle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InfileMSOle;
        connect<K extends keyof InfileMSOle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileMSOle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileMSOle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileMSOle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileMSOle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfileMSOle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_class_id(): [boolean, Uint8Array];
    }
    namespace InfileMSVBA {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {}
    }
    class InfileMSVBA extends Infile {
        static $gtype: GObject.GType<InfileMSVBA>;
        $signals: InfileMSVBA.SignalSignatures;
        constructor(properties?: Partial<InfileMSVBA.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Infile): InfileMSVBA;
        connect<K extends keyof InfileMSVBA.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileMSVBA.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileMSVBA.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileMSVBA.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileMSVBA.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfileMSVBA.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_modules(): { [key: string]: never } | null;
        steal_modules(): { [key: string]: never } | null;
    }
    namespace InfileStdio {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {}
    }
    class InfileStdio extends Infile {
        static $gtype: GObject.GType<InfileStdio>;
        $signals: InfileStdio.SignalSignatures;
        constructor(properties?: Partial<InfileStdio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](root: string): InfileStdio;
        connect<K extends keyof InfileStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileStdio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileStdio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileStdio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfileStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InfileTar {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {
            source: Input;
        }
    }
    class InfileTar extends Infile {
        static $gtype: GObject.GType<InfileTar>;
        get source(): Input;
        $signals: InfileTar.SignalSignatures;
        constructor(properties?: Partial<InfileTar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InfileTar;
        connect<K extends keyof InfileTar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileTar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileTar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileTar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileTar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfileTar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InfileZip {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::compression-level": (pspec: GObject.ParamSpec) => void;
            "notify::internal-parent": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::zip64": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {
            compression_level: number;
            compressionLevel: number;
            internal_parent: InfileZip;
            internalParent: InfileZip;
            source: Input;
            zip64: boolean;
        }
    }
    class InfileZip extends Infile {
        static $gtype: GObject.GType<InfileZip>;
        get compression_level(): number;
        get compressionLevel(): number;
        set internal_parent(val: InfileZip);
        set internalParent(val: InfileZip);
        get source(): Input;
        get zip64(): boolean;
        $signals: InfileZip.SignalSignatures;
        constructor(properties?: Partial<InfileZip.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InfileZip;
        connect<K extends keyof InfileZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileZip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfileZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfileZip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfileZip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfileZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Input {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            container: Infile;
            eof: boolean;
            modtime: GLib.DateTime | null;
            name: string;
            position: bigint | number;
            remaining: bigint | number;
            size: bigint | number;
        }
    }
    abstract class Input extends GObject.Object {
        static $gtype: GObject.GType<Input>;
        get container(): Infile;
        get eof(): boolean;
        get modtime(): GLib.DateTime | null;
        get name(): string;
        get position(): number;
        get remaining(): number;
        get size(): number;
        $signals: Input.SignalSignatures;
        g_object: GObject.Object;
        cur_offset: gsf_off_t;
        constructor(properties?: Partial<Input.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static mmap_new(filename: string): Input;
        connect<K extends keyof Input.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Input.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Input.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Input.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Input.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Input.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_id(): GLib.Quark;
        vfunc_Dup(): Input;
        vfunc_OpenSibling(name: string): Input;
        vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
        copy(output: Output): boolean;
        dump(dump_as_hex: boolean): void;
        dup(): Input;
        find_vba(): InfileMSVBA | null;
        get_modtime(): GLib.DateTime | null;
        read(num_bytes: bigint | number): Uint8Array;
        seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
        seek_emulate(pos: gsf_off_t): boolean;
        set_container(container: Infile | null): boolean;
        set_modtime(modtime: GLib.DateTime | null): boolean;
        set_modtime_from_stat(st: null): boolean;
        set_name(name: string | null): boolean;
        set_name_from_filename(filename: string): boolean;
        set_size(size: gsf_off_t): boolean;
        sibling(name: string): Input;
        tell(): gsf_off_t;
        uncompress(): Input;
    }
    namespace InputGZip {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::raw": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::uncompressed-size": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {
            raw: boolean;
            source: Input;
            uncompressed_size: bigint | number;
            uncompressedSize: bigint | number;
        }
    }
    class InputGZip extends Input {
        static $gtype: GObject.GType<InputGZip>;
        get raw(): boolean;
        get source(): Input;
        get uncompressed_size(): number;
        get uncompressedSize(): number;
        $signals: InputGZip.SignalSignatures;
        constructor(properties?: Partial<InputGZip.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InputGZip;
        connect<K extends keyof InputGZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputGZip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputGZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputGZip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputGZip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InputGio {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    class InputGio extends Input {
        static $gtype: GObject.GType<InputGio>;
        $signals: InputGio.SignalSignatures;
        constructor(properties?: Partial<InputGio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](file: Gio.File): InputGio;
        static new_for_path(path: string): InputGio;
        static new_for_uri(uri: string): InputGio;
        connect<K extends keyof InputGio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputGio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputGio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputGio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputGio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputGio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InputHTTP {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {
            content_type: string;
            contentType: string;
            url: string;
        }
    }
    class InputHTTP extends Input {
        static $gtype: GObject.GType<InputHTTP>;
        get content_type(): string;
        get contentType(): string;
        get url(): string;
        $signals: InputHTTP.SignalSignatures;
        constructor(properties?: Partial<InputHTTP.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](url: string): InputHTTP;
        connect<K extends keyof InputHTTP.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputHTTP.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputHTTP.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputHTTP.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputHTTP.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputHTTP.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_content_type(): string;
        get_url(): string;
    }
    namespace InputMemory {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    class InputMemory extends Input {
        static $gtype: GObject.GType<InputMemory>;
        $signals: InputMemory.SignalSignatures;
        constructor(properties?: Partial<InputMemory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](buf: Uint8Array | string, needs_free: boolean): InputMemory;
        static new_clone(buf: Uint8Array | string): InputMemory;
        static new_from_bzip(source: Input): InputMemory;
        static new_from_iochannel(channel: GLib.IOChannel): InputMemory;
        connect<K extends keyof InputMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputMemory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputMemory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputMemory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InputProxy {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    class InputProxy extends Input {
        static $gtype: GObject.GType<InputProxy>;
        $signals: InputProxy.SignalSignatures;
        constructor(properties?: Partial<InputProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InputProxy;
        static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy;
        connect<K extends keyof InputProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InputStdio {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    class InputStdio extends Input {
        static $gtype: GObject.GType<InputStdio>;
        $signals: InputStdio.SignalSignatures;
        constructor(properties?: Partial<InputStdio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string): InputStdio;
        static new_FILE(filename: string, file: null, keep_open: boolean): InputStdio;
        connect<K extends keyof InputStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStdio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStdio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputStdio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InputTextline {
        interface SignalSignatures extends Input.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Input.ConstructorProps {}
    }
    class InputTextline extends Input {
        static $gtype: GObject.GType<InputTextline>;
        $signals: InputTextline.SignalSignatures;
        constructor(properties?: Partial<InputTextline.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](source: Input): InputTextline;
        connect<K extends keyof InputTextline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputTextline.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputTextline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputTextline.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputTextline.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputTextline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ascii_gets(): Uint8Array | null;
        utf8_gets(): Uint8Array | null;
    }
    namespace ODFOut {
        interface SignalSignatures extends XMLOut.SignalSignatures {
            "notify::odf-version": (pspec: GObject.ParamSpec) => void;
            "notify::pretty-print": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends XMLOut.ConstructorProps {
            odf_version: number;
            odfVersion: number;
        }
    }
    class ODFOut extends XMLOut {
        static $gtype: GObject.GType<ODFOut>;
        get odf_version(): number;
        get odfVersion(): number;
        $signals: ODFOut.SignalSignatures;
        base: XMLOut;
        priv: null;
        constructor(properties?: Partial<ODFOut.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ODFOut.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ODFOut.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ODFOut.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ODFOut.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ODFOut.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ODFOut.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_version(): number;
        get_version_string(): string;
    }
    namespace Outfile {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    abstract class Outfile extends Output {
        static $gtype: GObject.GType<Outfile>;
        $signals: Outfile.SignalSignatures;
        constructor(properties?: Partial<Outfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Outfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Outfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Outfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Outfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Outfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Outfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_child(name: string, is_dir: boolean): Output;
        open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output;
    }
    namespace OutfileMSOle {
        interface SignalSignatures extends Outfile.SignalSignatures {
            "notify::big-block-size": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::small-block-size": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Outfile.ConstructorProps {
            big_block_size: number;
            bigBlockSize: number;
            sink: Output;
            small_block_size: number;
            smallBlockSize: number;
        }
    }
    class OutfileMSOle extends Outfile {
        static $gtype: GObject.GType<OutfileMSOle>;
        get big_block_size(): number;
        get bigBlockSize(): number;
        get sink(): Output;
        get small_block_size(): number;
        get smallBlockSize(): number;
        $signals: OutfileMSOle.SignalSignatures;
        constructor(properties?: Partial<OutfileMSOle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Output): OutfileMSOle;
        static new_full(sink: Output, bb_size: number, sb_size: number): OutfileMSOle;
        connect<K extends keyof OutfileMSOle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileMSOle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileMSOle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileMSOle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileMSOle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutfileMSOle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_class_id(clsid: Uint8Array | string): boolean;
    }
    namespace OutfileOpenPkg {
        interface SignalSignatures extends Outfile.SignalSignatures {
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::is-dir": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Outfile.ConstructorProps {
            content_type: string;
            contentType: string;
            is_dir: boolean;
            isDir: boolean;
            sink: Outfile;
        }
    }
    class OutfileOpenPkg extends Outfile {
        static $gtype: GObject.GType<OutfileOpenPkg>;
        get content_type(): string;
        get contentType(): string;
        get is_dir(): boolean;
        get isDir(): boolean;
        get sink(): Outfile;
        $signals: OutfileOpenPkg.SignalSignatures;
        constructor(properties?: Partial<OutfileOpenPkg.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Outfile): OutfileOpenPkg;
        connect<K extends keyof OutfileOpenPkg.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileOpenPkg.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileOpenPkg.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileOpenPkg.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileOpenPkg.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutfileOpenPkg.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_extern_rel(target: string, content_type: string): string;
        relate(parent: OutfileOpenPkg, type: string): string;
        set_content_type(content_type: string): void;
        set_sink(sink: Output): void;
    }
    namespace OutfileStdio {
        interface SignalSignatures extends Outfile.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Outfile.ConstructorProps {}
    }
    class OutfileStdio extends Outfile {
        static $gtype: GObject.GType<OutfileStdio>;
        $signals: OutfileStdio.SignalSignatures;
        constructor(properties?: Partial<OutfileStdio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](root: string): OutfileStdio;
        connect<K extends keyof OutfileStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileStdio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileStdio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileStdio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutfileStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutfileZip {
        interface SignalSignatures extends Outfile.SignalSignatures {
            "notify::compression-level": (pspec: GObject.ParamSpec) => void;
            "notify::deflate-level": (pspec: GObject.ParamSpec) => void;
            "notify::entry-name": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::zip64": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Outfile.ConstructorProps {
            compression_level: number;
            compressionLevel: number;
            deflate_level: number;
            deflateLevel: number;
            entry_name: string;
            entryName: string;
            sink: Output;
            zip64: number;
        }
    }
    class OutfileZip extends Outfile {
        static $gtype: GObject.GType<OutfileZip>;
        get compression_level(): number;
        get compressionLevel(): number;
        get deflate_level(): number;
        get deflateLevel(): number;
        get entry_name(): string;
        get entryName(): string;
        get sink(): Output;
        get zip64(): number;
        $signals: OutfileZip.SignalSignatures;
        constructor(properties?: Partial<OutfileZip.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Output): OutfileZip;
        connect<K extends keyof OutfileZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileZip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutfileZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutfileZip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutfileZip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutfileZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_compression_method(method: ZipCompressionMethod): boolean;
    }
    namespace Output {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            container: Outfile;
            is_closed: boolean;
            isClosed: boolean;
            modtime: GLib.DateTime | null;
            name: string;
            position: bigint | number;
            size: bigint | number;
        }
    }
    abstract class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;
        get container(): Outfile;
        set container(val: Outfile);
        get is_closed(): boolean;
        get isClosed(): boolean;
        get modtime(): GLib.DateTime | null;
        get name(): string;
        set name(val: string);
        get position(): number;
        get size(): number;
        $signals: Output.SignalSignatures;
        g_object: GObject.Object;
        cur_size: gsf_off_t;
        cur_offset: gsf_off_t;
        wrapped_by: GObject.Object;
        err: GLib.Error;
        printf_buf: string;
        printf_buf_size: number;
        constructor(properties?: Partial<Output.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Output.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Output.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_id(): GLib.Quark;
        static unwrap(wrapper: GObject.Object, wrapee: Output): boolean;
        static wrap(wrapper: GObject.Object, wrapee: Output): boolean;
        vfunc_Close(): boolean;
        vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
        vfunc_Write(data: Uint8Array): boolean;
        close(): boolean;
        error(): GLib.Error | null;
        get_modtime(): GLib.DateTime | null;
        puts(line: string): boolean;
        seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
        set_container(container: Outfile | null): boolean;
        set_modtime(modtime: GLib.DateTime | null): boolean;
        set_name(name: string | null): boolean;
        set_name_from_filename(filename: string | null): boolean;
        tell(): gsf_off_t;
        write(data: Uint8Array | string): boolean;
    }
    namespace OutputBzip {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    class OutputBzip extends Output {
        static $gtype: GObject.GType<OutputBzip>;
        $signals: OutputBzip.SignalSignatures;
        constructor(properties?: Partial<OutputBzip.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Output): OutputBzip;
        connect<K extends keyof OutputBzip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputBzip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputBzip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputBzip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputBzip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputBzip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutputCsv {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::eol": (pspec: GObject.ParamSpec) => void;
            "notify::quote": (pspec: GObject.ParamSpec) => void;
            "notify::quoting-mode": (pspec: GObject.ParamSpec) => void;
            "notify::quoting-on-whitespace": (pspec: GObject.ParamSpec) => void;
            "notify::quoting-triggers": (pspec: GObject.ParamSpec) => void;
            "notify::separator": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {
            eol: string;
            quote: string;
            quoting_mode: OutputCsvQuotingMode;
            quotingMode: OutputCsvQuotingMode;
            quoting_on_whitespace: boolean;
            quotingOnWhitespace: boolean;
            quoting_triggers: string;
            quotingTriggers: string;
            separator: string;
            sink: Output;
        }
    }
    class OutputCsv extends Output {
        static $gtype: GObject.GType<OutputCsv>;
        get eol(): string;
        set eol(val: string);
        get quote(): string;
        set quote(val: string);
        get quoting_mode(): OutputCsvQuotingMode;
        set quoting_mode(val: OutputCsvQuotingMode);
        get quotingMode(): OutputCsvQuotingMode;
        set quotingMode(val: OutputCsvQuotingMode);
        get quoting_on_whitespace(): boolean;
        set quoting_on_whitespace(val: boolean);
        get quotingOnWhitespace(): boolean;
        set quotingOnWhitespace(val: boolean);
        get quoting_triggers(): string;
        set quoting_triggers(val: string);
        get quotingTriggers(): string;
        set quotingTriggers(val: string);
        get separator(): string;
        set separator(val: string);
        get sink(): Output;
        set sink(val: Output);
        $signals: OutputCsv.SignalSignatures;
        output: Output;
        quote_len: number;
        eol_len: number;
        separator_len: number;
        fields_on_line: boolean;
        constructor(properties?: Partial<OutputCsv.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof OutputCsv.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputCsv.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputCsv.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputCsv.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputCsv.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputCsv.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        write_eol(): boolean;
        write_field(field: string, len: bigint | number): boolean;
    }
    namespace OutputGZip {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::deflate-level": (pspec: GObject.ParamSpec) => void;
            "notify::raw": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {
            deflate_level: number;
            deflateLevel: number;
            raw: boolean;
            sink: Output;
        }
    }
    class OutputGZip extends Output {
        static $gtype: GObject.GType<OutputGZip>;
        get deflate_level(): number;
        set deflate_level(val: number);
        get deflateLevel(): number;
        set deflateLevel(val: number);
        get raw(): boolean;
        get sink(): Output;
        $signals: OutputGZip.SignalSignatures;
        constructor(properties?: Partial<OutputGZip.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Output): OutputGZip;
        connect<K extends keyof OutputGZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputGZip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputGZip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputGZip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputGZip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutputGio {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    class OutputGio extends Output {
        static $gtype: GObject.GType<OutputGio>;
        $signals: OutputGio.SignalSignatures;
        constructor(properties?: Partial<OutputGio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](file: Gio.File): OutputGio;
        static new_for_path(path: string): OutputGio;
        static new_for_uri(uri: string): OutputGio;
        connect<K extends keyof OutputGio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputGio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputGio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputGio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputGio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputGio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutputIOChannel {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    class OutputIOChannel extends Output {
        static $gtype: GObject.GType<OutputIOChannel>;
        $signals: OutputIOChannel.SignalSignatures;
        constructor(properties?: Partial<OutputIOChannel.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](channel: GLib.IOChannel): OutputIOChannel;
        connect<K extends keyof OutputIOChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputIOChannel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputIOChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputIOChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputIOChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputIOChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutputIconv {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::fallback": (pspec: GObject.ParamSpec) => void;
            "notify::input-charset": (pspec: GObject.ParamSpec) => void;
            "notify::output-charset": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {
            fallback: string;
            input_charset: string;
            inputCharset: string;
            output_charset: string;
            outputCharset: string;
            sink: Output;
        }
    }
    class OutputIconv extends Output {
        static $gtype: GObject.GType<OutputIconv>;
        get fallback(): string;
        set fallback(val: string);
        get input_charset(): string;
        get inputCharset(): string;
        get output_charset(): string;
        get outputCharset(): string;
        get sink(): Output;
        $signals: OutputIconv.SignalSignatures;
        constructor(properties?: Partial<OutputIconv.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sink: Output, dst: string | null, src: string | null): OutputIconv;
        connect<K extends keyof OutputIconv.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputIconv.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputIconv.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputIconv.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputIconv.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputIconv.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace OutputMemory {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    class OutputMemory extends Output {
        static $gtype: GObject.GType<OutputMemory>;
        $signals: OutputMemory.SignalSignatures;
        constructor(properties?: Partial<OutputMemory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): OutputMemory;
        connect<K extends keyof OutputMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputMemory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputMemory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputMemory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bytes(): Uint8Array | null;
        steal_bytes(): Uint8Array | null;
    }
    namespace OutputStdio {
        interface SignalSignatures extends Output.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Output.ConstructorProps {}
    }
    class OutputStdio extends Output {
        static $gtype: GObject.GType<OutputStdio>;
        $signals: OutputStdio.SignalSignatures;
        constructor(properties?: Partial<OutputStdio.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filename: string): OutputStdio;
        connect<K extends keyof OutputStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStdio.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OutputStdio.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStdio.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OutputStdio.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputStdio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SharedMemory {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SharedMemory extends GObject.Object {
        static $gtype: GObject.GType<SharedMemory>;
        $signals: SharedMemory.SignalSignatures;
        g_object: GObject.Object;
        buf: null;
        size: gsf_off_t;
        needs_free: boolean;
        needs_unmap: boolean;
        constructor(properties?: Partial<SharedMemory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static mmapped_new(buf: null, size: gsf_off_t): SharedMemory;
        static ["new"](buf: null, size: gsf_off_t, needs_free: boolean): SharedMemory;
        connect<K extends keyof SharedMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SharedMemory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SharedMemory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SharedMemory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SharedMemory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SharedMemory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace StructuredBlob {
        interface SignalSignatures extends Infile.SignalSignatures {
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::eof": (pspec: GObject.ParamSpec) => void;
            "notify::modtime": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::remaining": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Infile.ConstructorProps {}
    }
    class StructuredBlob extends Infile {
        static $gtype: GObject.GType<StructuredBlob>;
        $signals: StructuredBlob.SignalSignatures;
        constructor(properties?: Partial<StructuredBlob.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof StructuredBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructuredBlob.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StructuredBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StructuredBlob.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StructuredBlob.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StructuredBlob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static read(input: Input): StructuredBlob;
        write(container: Outfile): boolean;
    }
    namespace XMLOut {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::pretty-print": (pspec: GObject.ParamSpec) => void;
            "notify::sink": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            pretty_print: boolean;
            prettyPrint: boolean;
            sink: Output;
        }
    }
    class XMLOut extends GObject.Object {
        static $gtype: GObject.GType<XMLOut>;
        get pretty_print(): boolean;
        set pretty_print(val: boolean);
        get prettyPrint(): boolean;
        set prettyPrint(val: boolean);
        get sink(): Output;
        $signals: XMLOut.SignalSignatures;
        base: GObject.Object;
        output: Output;
        priv: null;
        constructor(properties?: Partial<XMLOut.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](output: Output): XMLOut;
        connect<K extends keyof XMLOut.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLOut.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XMLOut.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLOut.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XMLOut.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XMLOut.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_base64(id: string | null, data: Uint8Array | string): void;
        add_bool(id: string | null, val: boolean): void;
        add_color(id: string | null, r: number, g: number, b: number): void;
        add_cstr(id: string | null, val_utf8: string | null): void;
        add_cstr_unchecked(id: string | null, val_utf8: string | null): void;
        add_enum(id: string | null, etype: GObject.GType, val: number): void;
        add_float(id: string | null, val: number, precision: number): void;
        add_gvalue(id: string | null, val: GObject.Value | any): void;
        add_int(id: string | null, val: number): void;
        add_uint(id: string | null, val: number): void;
        end_element(): string;
        get_output(): Output | null;
        get_pretty_print(): boolean;
        set_doc_type(type: string): void;
        set_pretty_print(pp: boolean): boolean;
        simple_element(id: string, content: string): void;
        simple_float_element(id: string, val: number, precision: number): void;
        simple_int_element(id: string, val: number): void;
        start_element(id: string): void;
    }
    type BlobClass = typeof Blob;
    abstract class BlobPrivate {
        static $gtype: GObject.GType<BlobPrivate>;
    }
    type ClipDataClass = typeof ClipData;
    abstract class ClipDataPrivate {
        static $gtype: GObject.GType<ClipDataPrivate>;
    }
    class DocProp {
        static $gtype: GObject.GType<DocProp>;
        constructor(name: string);
        static ["new"](name: string): DocProp;
        dump(): void;
        free(): void;
        get_link(): string | null;
        get_name(): string;
        get_val(): unknown;
        set_link(link: string | null): void;
        set_val(val: GObject.Value | any): void;
        swap_val(val: GObject.Value | any): unknown;
    }
    type InfileClass = typeof Infile;
    type InputClass = typeof Input;
    class MSOleSortingKey {
        static $gtype: GObject.GType<MSOleSortingKey>;
        constructor(name: string);
        static ["new"](name: string): MSOleSortingKey;
        cmp(b: MSOleSortingKey): number;
        free(): void;
    }
    type ODFOutClass = typeof ODFOut;
    abstract class OpenPkgRel {
        static $gtype: GObject.GType<OpenPkgRel>;
        get_target(): string;
        get_type(): string;
        is_extern(): boolean;
    }
    abstract class OpenPkgRels {
        static $gtype: GObject.GType<OpenPkgRels>;
    }
    type OutfileClass = typeof Outfile;
    type OutputClass = typeof Output;
    type OutputCsvClass = typeof OutputCsv;
    type OutputIconvClass = typeof OutputIconv;
    class Timestamp {
        static $gtype: GObject.GType<Timestamp>;
        date: GLib.Date;
        seconds: number;
        timet: number;
        constructor(properties?: Partial<{
            date: GLib.Date;
            seconds: number;
            time_zone: GLib.String;
            timet: number;
        }>);
        static ["new"](): Timestamp;
        as_string(): string;
        copy(): Timestamp;
        equal(b: Timestamp): boolean;
        free(): void;
        hash(): number;
        load_from_string(spec: string): number;
        set_time(t: bigint | number): void;
        to_value(value: GObject.Value | any): void;
    }
    abstract class XMLBlob {
        static $gtype: GObject.GType<XMLBlob>;
    }
    class XMLIn {
        static $gtype: GObject.GType<XMLIn>;
        user_state: null;
        check_ns(str: string, ns_id: number): string | null;
        get_input(): Input;
        namecmp(str: string, ns_id: number, name: string): boolean;
        push_state(doc: XMLInDoc, new_state: null, dtor: XMLInExtDtor, attrs: string[]): void;
        set_silent_unknowns(silent: boolean): void;
    }
    class XMLInDoc {
        static $gtype: GObject.GType<XMLInDoc>;
        constructor(nodes: XMLInNode[], ns: XMLInNS[]);
        static ["new"](nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc;
        add_nodes(nodes: XMLInNode[]): void;
        free(): void;
        parse(input: Input, user_state: null): boolean;
        set_unknown_handler(handler: XMLInUnknownFunc): void;
    }
    class XMLInNS {
        static $gtype: GObject.GType<XMLInNS>;
        uri: string;
        ns_id: number;
        constructor(properties?: Partial<{
            uri: string;
            ns_id: number;
        }>);
    }
    class XMLInNode {
        static $gtype: GObject.GType<XMLInNode>;
        id: string;
        ns_id: number;
        name: string;
        parent_id: string;
        has_content: XMLContent;
        check_children_for_ns: number;
        share_children_with_parent: number;
    }
    type XMLOutClass = typeof XMLOut;
    type gsf_off_t = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default Gsf;
}
declare module 'gi://Gsf' {
    import Gsf1 from 'gi://Gsf?version=1';
    export default Gsf1;
}
