import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import gettext from 'gettext';
import system from 'system';
import cairo from 'cairo';
declare namespace package {
    interface PackageInitParams {
        name: string
        version: string
        prefix: string
        libdir: string
        datadir?: string
    }
    export const name: string
    export const version: string
    export const prefix: string
    export const datadir: string
    export const libdir: string
    export const pkglibdir: string
    export const moduledir: string
    export const localedir: string
    export function init(params: PackageInitParams): void;
    export function run(module: { main: (argv: string[]) => void }): number | undefined;
    export function start(params: PackageInitParams): void;
    export function require(deps: Record<string, string>): void;
    export function requireSymbol(lib: string, ver?: string, symbol?: string): void;
    export function checkSymbol(lib: string, ver: string, symbol: string): boolean;
    export function initGettext(): void;
    export function initFormat(): void;
    export function initSubmodule(lib: string, ver?: string, symbol?: string): void;
    export function loadResource(name?: string): void;
}
declare namespace byteArray {
    export class ByteArray {
        static get(target: any, property: string, receiver: any): any
        static set(target: any, property: string, value: any, receiver: any): boolean
        length: number
        protected _array: Uint8Array
        constructor(x: Uint8Array | number)
        toString(encoding?: TextDecoderEncoding): string
        fromString(input: string, encoding?: TextDecoderEncoding): ByteArray
        toGBytes(): GLib.Bytes
    }
    export function fromString(input: string, encoding?: TextDecoderEncoding): Uint8Array
    export function fromGBytes(input: GLib.Bytes): Uint8Array
    export function toString(x: Uint8Array, encoding?: TextDecoderEncoding): string
    export function toGBytes(x: Uint8Array): GLib.Bytes
    export function fromArray(array: Iterable<number>): ByteArray
}
declare namespace lang {
    export function Class(props: any): void
}
declare namespace format {
    export function vprintf(str: string, args: (string | number | boolean | null | undefined)[]): string;
    export function printf(fmt: string, ...args: (string | number | boolean | null | undefined)[]): void;
    export function format(fmt: string, ...args: (string | number | boolean | null | undefined)[]): string;
}
declare namespace mainloop {
    export function quit(name: string): void
    export function idle_source(handler: any, priority?: number): any
    export function idle_add(handler: any, priority?: number): any
    export function timeout_source(timeout: any, handler: any, priority?: number): any
    export function timeout_seconds_source(timeout: any, handler: any, priority?: number): any
    export function timeout_add(timeout: any, handler: any, priority?: number): any
    export function timeout_add_seconds(timeout: any, handler: any, priority?: number): any
    export function source_remove(id: any): any
    export function run(name: string): void
}
export interface SignalMethods {
    connect(sigName: string, callback: (self: any, ...args: any[]) => void): number;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    disconnectAll(): void
    signalHandlerIsConnected(id: number): boolean;
}
declare namespace signals {
    export function addSignalMethods<T = any>(proto: T): proto is T & SignalMethods;
}
declare global {
    type TextDecoderEncoding =
        | 'unicode-1-1-utf-8'
        | 'unicode11utf8'
        | 'unicode20utf8'
        | 'utf-8'
        | 'utf8'
        | 'x-unicode20utf8'
        | '866'
        | 'cp866'
        | 'csibm866'
        | 'ibm866'
        | 'csisolatin2'
        | 'iso-8859-2'
        | 'iso-ir-101'
        | 'iso8859-2'
        | 'iso88592'
        | 'iso_8859-2'
        | 'iso_8859-2:1987'
        | 'l2'
        | 'latin2'
        | 'csisolatin3'
        | 'iso-8859-3'
        | 'iso-ir-109'
        | 'iso8859-3'
        | 'iso88593'
        | 'iso_8859-3'
        | 'iso_8859-3:1988'
        | 'l3'
        | 'latin3'
        | 'csisolatin4'
        | 'iso-8859-4'
        | 'iso-ir-110'
        | 'iso8859-4'
        | 'iso88594'
        | 'iso_8859-4'
        | 'iso_8859-4:1988'
        | 'l4'
        | 'latin4'
        | 'csisolatincyrillic'
        | 'cyrillic'
        | 'iso-8859-5'
        | 'iso-ir-144'
        | 'iso8859-5'
        | 'iso88595'
        | 'iso_8859-5'
        | 'iso_8859-5:1988'
        | 'arabic'
        | 'asmo-708'
        | 'csiso88596e'
        | 'csiso88596i'
        | 'csisolatinarabic'
        | 'ecma-114'
        | 'iso-8859-6'
        | 'iso-8859-6-e'
        | 'iso-8859-6-i'
        | 'iso-ir-127'
        | 'iso8859-6'
        | 'iso88596'
        | 'iso_8859-6'
        | 'iso_8859-6:1987'
        | 'csisolatingreek'
        | 'ecma-118'
        | 'elot_928'
        | 'greek'
        | 'greek8'
        | 'iso-8859-7'
        | 'iso-ir-126'
        | 'iso8859-7'
        | 'iso88597'
        | 'iso_8859-7'
        | 'iso_8859-7:1987'
        | 'sun_eu_greek'
        | 'csiso88598e'
        | 'csisolatinhebrew'
        | 'hebrew'
        | 'iso-8859-8'
        | 'iso-8859-8-e'
        | 'iso-ir-138'
        | 'iso8859-8'
        | 'iso88598'
        | 'iso_8859-8'
        | 'iso_8859-8:1988'
        | 'visual'
        | 'csiso88598i'
        | 'iso-8859-8-i'
        | 'logical'
        | 'csisolatin6'
        | 'iso-8859-10'
        | 'iso-ir-157'
        | 'iso8859-10'
        | 'iso885910'
        | 'l6'
        | 'latin6'
        | 'iso-8859-13'
        | 'iso8859-13'
        | 'iso885913'
        | 'iso-8859-14'
        | 'iso8859-14'
        | 'iso885914'
        | 'csisolatin9'
        | 'iso-8859-15'
        | 'iso8859-15'
        | 'iso885915'
        | 'iso_8859-15'
        | 'l9'
        | 'iso-8859-16'
        | 'cskoi8r'
        | 'koi'
        | 'koi8'
        | 'koi8-r'
        | 'koi8_r'
        | 'koi8-ru'
        | 'koi8-u'
        | 'csmacintosh'
        | 'mac'
        | 'macintosh'
        | 'x-mac-roman'
        | 'dos-874'
        | 'iso-8859-11'
        | 'iso8859-11'
        | 'iso885911'
        | 'tis-620'
        | 'windows-874'
        | 'cp1250'
        | 'windows-1250'
        | 'x-cp1250'
        | 'cp1251'
        | 'windows-1251'
        | 'x-cp1251'
        | 'ansi_x3.4-1968'
        | 'ascii'
        | 'cp1252'
        | 'cp819'
        | 'csisolatin1'
        | 'ibm819'
        | 'iso-8859-1'
        | 'iso-ir-100'
        | 'iso8859-1'
        | 'iso88591'
        | 'iso_8859-1'
        | 'iso_8859-1:1987'
        | 'l1'
        | 'latin1'
        | 'us-ascii'
        | 'windows-1252'
        | 'x-cp1252'
        | 'cp1253'
        | 'windows-1253'
        | 'x-cp1253'
        | 'cp1254'
        | 'csisolatin5'
        | 'iso-8859-9'
        | 'iso-ir-148'
        | 'iso8859-9'
        | 'iso88599'
        | 'iso_8859-9'
        | 'iso_8859-9:1989'
        | 'l5'
        | 'latin5'
        | 'windows-1254'
        | 'x-cp1254'
        | 'cp1255'
        | 'windows-1255'
        | 'x-cp1255'
        | 'cp1256'
        | 'windows-1256'
        | 'x-cp1256'
        | 'cp1257'
        | 'windows-1257'
        | 'x-cp1257'
        | 'cp1258'
        | 'windows-1258'
        | 'x-cp1258'
        | 'x-mac-cyrillic'
        | 'x-mac-ukrainian'
        | 'chinese'
        | 'csgb2312'
        | 'csiso58gb231280'
        | 'gb2312'
        | 'gb_2312'
        | 'gb_2312-80'
        | 'gbk'
        | 'iso-ir-58'
        | 'x-gbk'
        | 'gb18030'
        | 'big5'
        | 'cn-big5'
        | 'csbig5'
        | 'x-x-big5'
        | 'cseucpkdfmtjapanese'
        | 'euc-jp'
        | 'x-euc-jp'
        | 'csiso2022jp'
        | 'iso-2022-jp'
        | 'csshiftjis'
        | 'ms932'
        | 'ms_kanji'
        | 'shift-jis'
        | 'shift_jis'
        | 'sjis'
        | 'windows-31j'
        | 'x-sjis'
        | 'cseuckr'
        | 'csksc56011987'
        | 'euc-kr'
        | 'iso-ir-149'
        | 'korean'
        | 'ks_c_5601-1987'
        | 'ks_c_5601-1989'
        | 'ksc5601'
        | 'ksc_5601'
        | 'windows-949'
        | 'unicodefffe'
        | 'utf-16be'
        | 'csunicode'
        | 'iso-10646-ucs-2'
        | 'ucs-2'
        | 'unicode'
        | 'unicodefeff'
        | 'utf-16'
        | 'utf-16le'
    interface GjsGiImports {
        versions: {
            [namespace: string]: string
        }
    }
    interface GjsImports {
        gi: GjsGiImports
        lang: typeof lang
        system: typeof system
        signals: typeof signals
        package: typeof package
        mainloop: typeof mainloop
        searchPath: string[]
        gettext: typeof gettext
        byteArray: typeof byteArray
        format: typeof format
        cairo: typeof cairo
    }
    const _: typeof gettext.gettext
    const C_: typeof gettext.pgettext
    const N_: ((x: string) => string)
    function print(...args: any[]): void
    function printerr(...args: any[]): void
    function log(obj: object, others?: object[]): void;
    function log(msg: string, substitutions?: any[]): void;
    function logError(exception: object, message?: any): void
    function logError(message?: any): void
    const pkg: typeof package
    interface BooleanConstructor {
        $gtype: GObject.GType<boolean>
    }
    interface NumberConstructor {
        $gtype: GObject.GType<number>
    }
    interface StringConstructor {
        $gtype: GObject.GType<string>
    }
    interface StringConstructor {
        $gtype: GObject.GType<string>
    }
    interface ObjectConstructor {
        $gtype: GObject.GType<Object>;
    }
    const imports: GjsImports
    const ARGV: string[]
    interface String {
        format(...args: (string | number | boolean | null | undefined)[]): string;
    }
    interface Error {
        matches(domain: unknown, code: number): boolean;
    }
}
declare const _imports: GjsImports
export default _imports
export { _imports as imports }
