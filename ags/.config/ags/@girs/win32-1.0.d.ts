declare module 'gi://win32?version=1.0' {
import type GObject from 'gi://GObject?version=2.0';
export namespace win32 {
    class MSG {
        static $gtype: GObject.GType<MSG>;
    }
    type HWND = number;
    type HICON = bigint | number;
    type HCURSOR = bigint | number;
    type HGDIOBJ = bigint | number;
    const __name__: string;
    const __version__: string;
}
export default win32;
}
declare module 'gi://win32' {
    import Win3210 from 'gi://win32?version=1.0';
    export default Win3210;
}
