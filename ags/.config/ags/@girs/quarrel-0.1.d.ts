declare module 'gi://Quarrel?version=0.1' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Quarrel {
    class ParseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN_COMMAND: number;
        static MISSING_ARGS: number;
        static EXTRA_ARGS: number;
        static MISSING_OPTION_VALUE: number;
        static INVALID_OPTION: number;
        static UNKNOWN_OPTION: number;
        constructor(options: { message: string; code: number });
    }
    function help(command: Command): string;
    namespace Command {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::about-text": (pspec: GObject.ParamSpec) => void;
            "notify::args": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parent: Command | null;
            about_text: string | null;
            aboutText: string;
            args: string[];
            name: string | null;
        }
    }
    class Command extends GObject.Object {
        static $gtype: GObject.GType<Command>;
        get parent(): Command | null;
        set parent(val: Command | null);
        get about_text(): string | null;
        set about_text(val: string | null);
        get aboutText(): string;
        set aboutText(val: string);
        get args(): string[];
        set args(val: string[]);
        get name(): string | null;
        set name(val: string | null);
        $signals: Command.SignalSignatures;
        subcommand_list: Command[];
        subcommand_list_length1: number;
        opts: Opt[];
        opts_length1: number;
        examples: string[];
        examples_length1: number;
        arg_list: never[];
        arg_list_length1: number;
        rest_args_name: string | null;
        rest_args_description: string | null;
        constructor(properties?: Partial<Command.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string | null): Command;
        connect<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Command.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Command.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static throwing(): Command | null;
        vfunc_parse(argv: string[]): Command;
        subcommand(command: Command): Command;
        opt(opt: Opt): Command;
        about(about: string): Command;
        arg(name: string, description: string): Command;
        required_arg(name: string, description: string): Command;
        rest_args(name: string, description: string): Command;
        example(example: string): Command;
        get_opt(_long_: string | null, _short_: number): Opt | null;
        parse(argv: string[]): Command;
        get_parent(): Command | null;
        get_about_text(): string | null;
        get_args(): string[];
        get_name(): string | null;
        set_name(value: string | null): void;
    }
    namespace Opt {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            parse: (arg0: string) => string | null;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string | null;
            name: string | null;
            long: string | null;
            "short": number;
        }
    }
    class Opt extends GObject.Object {
        static $gtype: GObject.GType<Opt>;
        get description(): string | null;
        set description(val: string | null);
        get name(): string | null;
        set name(val: string | null);
        get long(): string | null;
        set long(val: string | null);
        get "short"(): number;
        set "short"(val: number);
        $signals: Opt.SignalSignatures;
        constructor(properties?: Partial<Opt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Opt;
        connect<K extends keyof Opt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Opt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Opt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Opt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Opt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Opt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(): string | null;
        set_description(value: string | null): void;
        get_name(): string | null;
        set_name(value: string | null): void;
        get_long(): string | null;
        set_long(value: string | null): void;
        get_short(): number;
        set_short(value: number): void;
    }
    namespace Flag {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            enabled: boolean;
        }
    }
    class Flag extends Opt {
        static $gtype: GObject.GType<Flag>;
        get enabled(): boolean;
        set enabled(val: boolean);
        $signals: Flag.SignalSignatures;
        constructor(properties?: Partial<Flag.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): Flag;
        static ["new"](...args: never[]): any;
        connect<K extends keyof Flag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Flag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Flag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Flag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_enabled(): boolean;
        set_enabled(value: boolean): void;
    }
    namespace SpecialFlag {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            enabled: boolean;
        }
    }
    class SpecialFlag extends Opt {
        static $gtype: GObject.GType<SpecialFlag>;
        get enabled(): boolean;
        set enabled(val: boolean);
        $signals: SpecialFlag.SignalSignatures;
        constructor(properties?: Partial<SpecialFlag.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): SpecialFlag;
        static ["new"](...args: never[]): any;
        connect<K extends keyof SpecialFlag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpecialFlag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpecialFlag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpecialFlag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpecialFlag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpecialFlag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_enabled(): boolean;
        set_enabled(value: boolean): void;
    }
    namespace StringOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: string | null;
        }
    }
    class StringOpt extends Opt {
        static $gtype: GObject.GType<StringOpt>;
        get value(): string | null;
        set value(val: string | null);
        $signals: StringOpt.SignalSignatures;
        constructor(properties?: Partial<StringOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): StringOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof StringOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StringOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StringOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StringOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): string | null;
        set_value(value: string | null): void;
    }
    namespace IntOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: number;
        }
    }
    class IntOpt extends Opt {
        static $gtype: GObject.GType<IntOpt>;
        get value(): number;
        set value(val: number);
        $signals: IntOpt.SignalSignatures;
        constructor(properties?: Partial<IntOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): IntOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof IntOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IntOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IntOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): number;
        set_value(value: number): void;
    }
    namespace DoubleOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: number;
        }
    }
    class DoubleOpt extends Opt {
        static $gtype: GObject.GType<DoubleOpt>;
        get value(): number;
        set value(val: number);
        $signals: DoubleOpt.SignalSignatures;
        constructor(properties?: Partial<DoubleOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): DoubleOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof DoubleOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DoubleOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DoubleOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DoubleOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): number;
        set_value(value: number): void;
    }
    namespace FileOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: Gio.File | null;
        }
    }
    class FileOpt extends Opt {
        static $gtype: GObject.GType<FileOpt>;
        get value(): Gio.File | null;
        set value(val: Gio.File | null);
        $signals: FileOpt.SignalSignatures;
        constructor(properties?: Partial<FileOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): FileOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof FileOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): Gio.File | null;
        set_value(value: Gio.File | null): void;
    }
    namespace FileArrayOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: Gio.File[];
        }
    }
    class FileArrayOpt extends Opt {
        static $gtype: GObject.GType<FileArrayOpt>;
        get value(): Gio.File[];
        $signals: FileArrayOpt.SignalSignatures;
        constructor(properties?: Partial<FileArrayOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): FileArrayOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileArrayOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileArrayOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileArrayOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): Gio.File[];
    }
    namespace StringArrayOpt {
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Opt.ConstructorProps {
            value: string[];
        }
    }
    class StringArrayOpt extends Opt {
        static $gtype: GObject.GType<StringArrayOpt>;
        get value(): string[];
        $signals: StringArrayOpt.SignalSignatures;
        constructor(properties?: Partial<StringArrayOpt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](_long_: string | null, _short_: number, description: string | null): StringArrayOpt;
        static ["new"](...args: never[]): any;
        connect<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringArrayOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringArrayOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StringArrayOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_value(): string[];
    }
    type CommandClass = typeof Command;
    abstract class CommandPrivate {
        static $gtype: GObject.GType<CommandPrivate>;
    }
    type OptClass = typeof Opt;
    abstract class OptPrivate {
        static $gtype: GObject.GType<OptPrivate>;
    }
    type FlagClass = typeof Flag;
    abstract class FlagPrivate {
        static $gtype: GObject.GType<FlagPrivate>;
    }
    type SpecialFlagClass = typeof SpecialFlag;
    abstract class SpecialFlagPrivate {
        static $gtype: GObject.GType<SpecialFlagPrivate>;
    }
    type StringOptClass = typeof StringOpt;
    abstract class StringOptPrivate {
        static $gtype: GObject.GType<StringOptPrivate>;
    }
    type IntOptClass = typeof IntOpt;
    abstract class IntOptPrivate {
        static $gtype: GObject.GType<IntOptPrivate>;
    }
    type DoubleOptClass = typeof DoubleOpt;
    abstract class DoubleOptPrivate {
        static $gtype: GObject.GType<DoubleOptPrivate>;
    }
    type FileOptClass = typeof FileOpt;
    abstract class FileOptPrivate {
        static $gtype: GObject.GType<FileOptPrivate>;
    }
    type FileArrayOptClass = typeof FileArrayOpt;
    abstract class FileArrayOptPrivate {
        static $gtype: GObject.GType<FileArrayOptPrivate>;
    }
    type StringArrayOptClass = typeof StringArrayOpt;
    abstract class StringArrayOptPrivate {
        static $gtype: GObject.GType<StringArrayOptPrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default Quarrel;
}
declare module 'gi://Quarrel' {
    import Quarrel01 from 'gi://Quarrel?version=0.1';
    export default Quarrel01;
}
