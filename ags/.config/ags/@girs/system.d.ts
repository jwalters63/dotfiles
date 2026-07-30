declare module 'system' {
import type GObject from 'gi://GObject?version=2.0';
export const programInvocationName: string
export const version: number
export const programPath: string | null
export const programArgs: string[]
export function addressOf(o: object): string
export function addressOfGObject(o: GObject.Object): string
export function breakpoint(): void
export function clearDateCaches(): void
export function gc(): void
export function refcount(o: GObject.Object): number
export function dumpHeap(path?: string): void
export function dumpMemoryInfo(path?: string): void
export function exit(code: number): never
 const System: {
    programInvocationName: typeof programInvocationName,
    version: typeof version,
    programPath: typeof programPath,
    programArgs: typeof programArgs,
    addressOf: typeof addressOf,
    addressOfGObject: typeof addressOfGObject,
    breakpoint: typeof breakpoint,
    clearDateCaches: typeof clearDateCaches,
    gc: typeof gc,
    refcount: typeof refcount,
    dumpHeap: typeof dumpHeap,
    dumpMemoryInfo: typeof dumpMemoryInfo,
    exit: typeof exit,
}
export default System
}
