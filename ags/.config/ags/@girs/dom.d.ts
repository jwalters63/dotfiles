import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
declare global {
    interface ImportMeta {
        url: string; 
    }
    function setTimeout(callback: (...args: any[]) => any, delay?: number, ...args: any[]): GLib.Source
    function setInterval(callback: (...args: any[]) => any, delay?: number, ...args: any[]): GLib.Source
    function clearTimeout(timeout: GLib.Source): void
    function clearInterval(timeout: GLib.Source): void
    interface Console {
        assert(condition: boolean, ...data: any[]): void
        clear(): void
        debug(...data: any[]): void
        error(...data: any[]): void
        info(...data: any[]): void
        log(...data: any[]): void
        table(tabularData: any, _properties: never): void
        trace(...data: any[]): void
        warn(...data: any[]): void
        dir(item: object, options: never): void
        dirxml(...data: any[]): void
        count(label: string): void
        countReset(label: string): void
        group(...data: any[]): void
        groupCollapsed(...data: any[]): void
        groupEnd(): void
        time(label: string): void
        timeLog(label: string, ...data: any[]): void
        timeEnd(label: string): void
        profile(_label: string): void
        profileEnd(_label: string): void
        timeStamp(_label: string): void
    }
    interface TextDecodeOptions {
    }
    interface TextDecoderOptions {
        fatal?: boolean
        ignoreBOM?: boolean
    }
    interface TextDecoder {
        readonly encoding: TextDecoderEncoding
        readonly fatal: boolean
        readonly ignoreBOM: boolean
        decode(input?: ArrayBufferView | ArrayBuffer, options?: TextDecodeOptions): string
    }
    interface TextEncoderEncodeIntoResult {
        read?: number
        written?: number
    }
    interface TextEncoder {
        readonly encoding: 'utf-8'
        encode(input?: string): Uint8Array
        encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult
    }
    const console: Console
    const TextDecoder: {
        prototype: TextDecoder
        new (label?: TextDecoderEncoding, options?: TextDecoderOptions): TextDecoder
    }
    const TextEncoder: {
        prototype: TextEncoder
        new (): TextEncoder
    }
}
export {}
