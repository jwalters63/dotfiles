declare module 'console' {
export function setConsoleLogDomain(logDomain: string): void
export function getConsoleLogDomain(): string
export  const DEFAULT_LOG_DOMAIN: string
 const Console: {
    setConsoleLogDomain: typeof setConsoleLogDomain,
    getConsoleLogDomain: typeof getConsoleLogDomain,
    DEFAULT_LOG_DOMAIN: typeof DEFAULT_LOG_DOMAIN
}
export default Console
}
