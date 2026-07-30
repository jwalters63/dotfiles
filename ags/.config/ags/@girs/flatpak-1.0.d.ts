declare module 'gi://Flatpak?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Flatpak {
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static ALREADY_INSTALLED: number;
        static NOT_INSTALLED: number;
        static ONLY_PULLED: number;
        static DIFFERENT_REMOTE: number;
        static ABORTED: number;
        static SKIPPED: number;
        static NEED_NEW_FLATPAK: number;
        static REMOTE_NOT_FOUND: number;
        static RUNTIME_NOT_FOUND: number;
        static DOWNGRADE: number;
        static INVALID_REF: number;
        static INVALID_DATA: number;
        static UNTRUSTED: number;
        static SETUP_FAILED: number;
        static EXPORT_FAILED: number;
        static REMOTE_USED: number;
        static RUNTIME_USED: number;
        static INVALID_NAME: number;
        static OUT_OF_SPACE: number;
        static WRONG_USER: number;
        static NOT_CACHED: number;
        static REF_NOT_FOUND: number;
        static PERMISSION_DENIED: number;
        static AUTHENTICATION_FAILED: number;
        static NOT_AUTHORIZED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class PortalError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static INVALID_ARGUMENT: number;
        static NOT_FOUND: number;
        static EXISTS: number;
        static NOT_ALLOWED: number;
        static CANCELLED: number;
        static WINDOW_DESTROYED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace RefKind {
        export const $gtype: GObject.GType<RefKind>;
    }
    enum RefKind {
        APP,
        RUNTIME,
    }
    export namespace RemoteType {
        export const $gtype: GObject.GType<RemoteType>;
    }
    enum RemoteType {
        STATIC,
        USB,
        LAN,
    }
    export namespace StorageType {
        export const $gtype: GObject.GType<StorageType>;
    }
    enum StorageType {
        DEFAULT,
        HARD_DISK,
        SDCARD,
        MMC,
        NETWORK,
    }
    export namespace TransactionOperationType {
        export const $gtype: GObject.GType<TransactionOperationType>;
    }
    enum TransactionOperationType {
        INSTALL,
        UPDATE,
        INSTALL_BUNDLE,
        UNINSTALL,
        LAST_TYPE,
    }
    export namespace TransactionRemoteReason {
        export const $gtype: GObject.GType<TransactionRemoteReason>;
    }
    enum TransactionRemoteReason {
        GENERIC_REPO,
        RUNTIME_DEPS,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    function error_quark(): GLib.Quark;
    function get_default_arch(): string;
    function get_supported_arches(): string[];
    function get_system_installations(cancellable: Gio.Cancellable | null): Installation[];
    function portal_error_quark(): GLib.Quark;
    function transaction_operation_type_to_string(kind: TransactionOperationType): string;
    interface ProgressCallback {
        (status: string, progress: number, estimating: boolean): void;
    }
    export namespace InstallFlags {
        export const $gtype: GObject.GType<InstallFlags>;
    }
    enum InstallFlags {
        NONE,
        NO_STATIC_DELTAS,
        NO_DEPLOY,
        NO_PULL,
        NO_TRIGGERS,
    }
    export namespace LaunchFlags {
        export const $gtype: GObject.GType<LaunchFlags>;
    }
    enum LaunchFlags {
        NONE,
        DO_NOT_REAP,
    }
    export namespace QueryFlags {
        export const $gtype: GObject.GType<QueryFlags>;
    }
    enum QueryFlags {
        NONE,
        ONLY_CACHED,
        ONLY_SIDELOADED,
        ALL_ARCHES,
    }
    export namespace TransactionErrorDetails {
        export const $gtype: GObject.GType<TransactionErrorDetails>;
    }
    enum TransactionErrorDetails {
        FATAL,
    }
    export namespace TransactionResult {
        export const $gtype: GObject.GType<TransactionResult>;
    }
    enum TransactionResult {
        CHANGE,
    }
    export namespace UninstallFlags {
        export const $gtype: GObject.GType<UninstallFlags>;
    }
    enum UninstallFlags {
        NONE,
        NO_PRUNE,
        NO_TRIGGERS,
    }
    export namespace UpdateFlags {
        export const $gtype: GObject.GType<UpdateFlags>;
    }
    enum UpdateFlags {
        NONE,
        NO_DEPLOY,
        NO_PULL,
        NO_STATIC_DELTAS,
        NO_PRUNE,
        NO_TRIGGERS,
    }
    namespace BundleRef {
        interface SignalSignatures extends Ref.SignalSignatures {
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::arch": (pspec: GObject.ParamSpec) => void;
            "notify::branch": (pspec: GObject.ParamSpec) => void;
            "notify::collection-id": (pspec: GObject.ParamSpec) => void;
            "notify::commit": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Ref.ConstructorProps {
            file: Gio.File;
        }
    }
    class BundleRef extends Ref {
        static $gtype: GObject.GType<BundleRef>;
        get file(): Gio.File;
        $signals: BundleRef.SignalSignatures;
        constructor(properties?: Partial<BundleRef.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](file: Gio.File): BundleRef;
        connect<K extends keyof BundleRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BundleRef.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BundleRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BundleRef.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BundleRef.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BundleRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_appstream(): GLib.Bytes;
        get_file(): Gio.File;
        get_icon(size: number): GLib.Bytes;
        get_installed_size(): number;
        get_metadata(): GLib.Bytes;
        get_origin(): string;
        get_runtime_repo_url(): string;
    }
    namespace Installation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Installation extends GObject.Object {
        static $gtype: GObject.GType<Installation>;
        $signals: Installation.SignalSignatures;
        constructor(properties?: Partial<Installation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_path(path: Gio.File, user: boolean, cancellable: Gio.Cancellable | null): Installation;
        static new_system(cancellable: Gio.Cancellable | null): Installation;
        static new_system_with_id(id: string | null, cancellable: Gio.Cancellable | null): Installation;
        static new_user(cancellable: Gio.Cancellable | null): Installation;
        connect<K extends keyof Installation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Installation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Installation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Installation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Installation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Installation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_remote(remote: Remote, if_needed: boolean, cancellable: Gio.Cancellable | null): boolean;
        cleanup_local_refs_sync(cancellable: Gio.Cancellable | null): boolean;
        create_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        drop_caches(cancellable: Gio.Cancellable | null): boolean;
        fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable: Gio.Cancellable | null): GLib.Bytes;
        fetch_remote_ref_sync(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): RemoteRef;
        fetch_remote_ref_sync_full(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef;
        fetch_remote_size_sync(remote_name: string, ref: Ref, cancellable: Gio.Cancellable | null): [boolean, number, number];
        get_config(key: string, cancellable: Gio.Cancellable | null): string;
        get_current_installed_app(name: string, cancellable: Gio.Cancellable | null): InstalledRef;
        get_default_languages(): string[];
        get_default_locales(): string[];
        get_display_name(): string;
        get_id(): string;
        get_installed_ref(kind: RefKind, name: string, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): InstalledRef;
        get_is_user(): boolean;
        get_min_free_space_bytes(): [boolean, number];
        get_no_interaction(): boolean;
        get_path(): Gio.File;
        get_priority(): number;
        get_remote_by_name(name: string, cancellable: Gio.Cancellable | null): Remote;
        get_storage_type(): StorageType;
        get_timestamp(): number;
        install(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): InstalledRef;
        install_bundle(file: Gio.File, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): InstalledRef;
        install_full(flags: InstallFlags, remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, subpaths: string[] | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): InstalledRef;
        install_ref_file(ref_file_data: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): RemoteRef;
        launch(name: string, arch: string | null, branch: string | null, commit: string | null, cancellable: Gio.Cancellable | null): boolean;
        launch_full(flags: LaunchFlags, name: string, arch: string | null, branch: string | null, commit: string | null, instance_out: Instance | null, cancellable: Gio.Cancellable | null): boolean;
        list_installed_refs(cancellable: Gio.Cancellable | null): InstalledRef[];
        list_installed_refs_by_kind(kind: RefKind, cancellable: Gio.Cancellable | null): InstalledRef[];
        list_installed_refs_for_update(cancellable: Gio.Cancellable | null): InstalledRef[];
        list_installed_related_refs_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): RelatedRef[];
        list_pinned_refs(arch: string | null, cancellable: Gio.Cancellable | null): InstalledRef[];
        list_remote_refs_sync(remote_or_uri: string, cancellable: Gio.Cancellable | null): RemoteRef[];
        list_remote_refs_sync_full(remote_or_uri: string, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef[];
        list_remote_related_refs_for_installed_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): RelatedRef[];
        list_remote_related_refs_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): RelatedRef[];
        list_remotes(cancellable: Gio.Cancellable | null): Remote[];
        list_remotes_by_type(types: RemoteType[], cancellable: Gio.Cancellable | null): Remote[];
        list_unused_refs(arch: string | null, cancellable: Gio.Cancellable | null): InstalledRef[];
        list_unused_refs_with_options(arch: string | null, metadata_injection: never | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): InstalledRef[];
        load_app_overrides(app_id: string, cancellable: Gio.Cancellable | null): string;
        modify_remote(remote: Remote, cancellable: Gio.Cancellable | null): boolean;
        prune_local_repo(cancellable: Gio.Cancellable | null): boolean;
        remove_local_ref_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): boolean;
        remove_remote(name: string, cancellable: Gio.Cancellable | null): boolean;
        run_triggers(cancellable: Gio.Cancellable | null): boolean;
        set_config_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
        set_no_interaction(no_interaction: boolean): void;
        uninstall(kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean;
        uninstall_full(flags: UninstallFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean;
        update(flags: UpdateFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): InstalledRef;
        update_appstream_full_sync(remote_name: string, arch: string | null, progress: ProgressCallback | null, out_changed: boolean | null, cancellable: Gio.Cancellable | null): boolean;
        update_appstream_sync(remote_name: string, arch: string | null, out_changed: boolean | null, cancellable: Gio.Cancellable | null): boolean;
        update_full(flags: UpdateFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, subpaths: string[] | null, progress: ProgressCallback | null, cancellable: Gio.Cancellable | null): InstalledRef;
        update_remote_sync(name: string, cancellable: Gio.Cancellable | null): boolean;
    }
    namespace InstalledRef {
        interface SignalSignatures extends Ref.SignalSignatures {
            "notify::appdata-content-rating": (pspec: GObject.ParamSpec) => void;
            "notify::appdata-content-rating-type": (pspec: GObject.ParamSpec) => void;
            "notify::appdata-license": (pspec: GObject.ParamSpec) => void;
            "notify::appdata-name": (pspec: GObject.ParamSpec) => void;
            "notify::appdata-summary": (pspec: GObject.ParamSpec) => void;
            "notify::appdata-version": (pspec: GObject.ParamSpec) => void;
            "notify::deploy-dir": (pspec: GObject.ParamSpec) => void;
            "notify::end-of-life": (pspec: GObject.ParamSpec) => void;
            "notify::end-of-life-rebase": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::is-current": (pspec: GObject.ParamSpec) => void;
            "notify::latest-commit": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::subpaths": (pspec: GObject.ParamSpec) => void;
            "notify::arch": (pspec: GObject.ParamSpec) => void;
            "notify::branch": (pspec: GObject.ParamSpec) => void;
            "notify::collection-id": (pspec: GObject.ParamSpec) => void;
            "notify::commit": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Ref.ConstructorProps {
            appdata_content_rating: never | null;
            appdataContentRating: never | null;
            appdata_content_rating_type: string | null;
            appdataContentRatingType: string | null;
            appdata_license: string;
            appdataLicense: string;
            appdata_name: string;
            appdataName: string;
            appdata_summary: string;
            appdataSummary: string;
            appdata_version: string;
            appdataVersion: string;
            deploy_dir: string;
            deployDir: string;
            end_of_life: string;
            endOfLife: string;
            end_of_life_rebase: string;
            endOfLifeRebase: string;
            installed_size: bigint | number;
            installedSize: bigint | number;
            is_current: boolean;
            isCurrent: boolean;
            latest_commit: string | null;
            latestCommit: string | null;
            origin: string;
            subpaths: string[];
        }
    }
    class InstalledRef extends Ref {
        static $gtype: GObject.GType<InstalledRef>;
        get appdata_content_rating(): never | null;
        get appdataContentRating(): never | null;
        get appdata_content_rating_type(): string | null;
        get appdataContentRatingType(): string | null;
        get appdata_license(): string;
        get appdataLicense(): string;
        get appdata_name(): string;
        get appdataName(): string;
        get appdata_summary(): string;
        get appdataSummary(): string;
        get appdata_version(): string;
        get appdataVersion(): string;
        get deploy_dir(): string;
        set deploy_dir(val: string);
        get deployDir(): string;
        set deployDir(val: string);
        get end_of_life(): string;
        get endOfLife(): string;
        get end_of_life_rebase(): string;
        get endOfLifeRebase(): string;
        get installed_size(): number;
        set installed_size(val: bigint | number);
        get installedSize(): number;
        set installedSize(val: bigint | number);
        get is_current(): boolean;
        set is_current(val: boolean);
        get isCurrent(): boolean;
        set isCurrent(val: boolean);
        get latest_commit(): string | null;
        set latest_commit(val: string | null);
        get latestCommit(): string | null;
        set latestCommit(val: string | null);
        get origin(): string;
        set origin(val: string);
        get subpaths(): string[];
        set subpaths(val: string[]);
        $signals: InstalledRef.SignalSignatures;
        constructor(properties?: Partial<InstalledRef.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof InstalledRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstalledRef.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstalledRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstalledRef.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstalledRef.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstalledRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_appdata_content_rating(): { [key: string]: string } | null;
        get_appdata_content_rating_type(): string | null;
        get_appdata_license(): string;
        get_appdata_name(): string;
        get_appdata_summary(): string;
        get_appdata_version(): string;
        get_deploy_dir(): string;
        get_eol(): string;
        get_eol_rebase(): string;
        get_installed_size(): number;
        get_is_current(): boolean;
        get_latest_commit(): string | null;
        get_origin(): string;
        get_subpaths(): string[];
        load_appdata(cancellable: Gio.Cancellable | null): GLib.Bytes;
        load_metadata(cancellable: Gio.Cancellable | null): GLib.Bytes;
    }
    namespace Instance {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Instance extends GObject.Object {
        static $gtype: GObject.GType<Instance>;
        $signals: Instance.SignalSignatures;
        constructor(properties?: Partial<Instance.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Instance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Instance.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Instance.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Instance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_all(): Instance[];
        get_app(): string | null;
        get_arch(): string;
        get_branch(): string;
        get_child_pid(): number;
        get_commit(): string;
        get_id(): string;
        get_info(): GLib.KeyFile;
        get_pid(): number;
        get_runtime(): string;
        get_runtime_commit(): string;
        is_running(): boolean;
    }
    namespace Ref {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::arch": (pspec: GObject.ParamSpec) => void;
            "notify::branch": (pspec: GObject.ParamSpec) => void;
            "notify::collection-id": (pspec: GObject.ParamSpec) => void;
            "notify::commit": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arch: string;
            branch: string;
            collection_id: string;
            collectionId: string;
            commit: string;
            kind: RefKind;
            name: string;
        }
    }
    class Ref extends GObject.Object {
        static $gtype: GObject.GType<Ref>;
        get arch(): string;
        get branch(): string;
        get collection_id(): string;
        get collectionId(): string;
        get commit(): string;
        get kind(): RefKind;
        get name(): string;
        $signals: Ref.SignalSignatures;
        constructor(properties?: Partial<Ref.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Ref.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ref.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Ref.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ref.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Ref.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Ref.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static parse(ref: string): Ref;
        format_ref(): string;
        format_ref_cached(): string;
        get_arch(): string;
        get_branch(): string;
        get_collection_id(): string;
        get_commit(): string;
        get_kind(): RefKind;
        get_name(): string;
    }
    namespace RelatedRef {
        interface SignalSignatures extends Ref.SignalSignatures {
            "notify::should-autoprune": (pspec: GObject.ParamSpec) => void;
            "notify::should-delete": (pspec: GObject.ParamSpec) => void;
            "notify::should-download": (pspec: GObject.ParamSpec) => void;
            "notify::subpaths": (pspec: GObject.ParamSpec) => void;
            "notify::arch": (pspec: GObject.ParamSpec) => void;
            "notify::branch": (pspec: GObject.ParamSpec) => void;
            "notify::collection-id": (pspec: GObject.ParamSpec) => void;
            "notify::commit": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Ref.ConstructorProps {
            should_autoprune: boolean;
            shouldAutoprune: boolean;
            should_delete: boolean;
            shouldDelete: boolean;
            should_download: boolean;
            shouldDownload: boolean;
            subpaths: string[];
        }
    }
    class RelatedRef extends Ref {
        static $gtype: GObject.GType<RelatedRef>;
        get should_autoprune(): boolean;
        get shouldAutoprune(): boolean;
        get should_delete(): boolean;
        get shouldDelete(): boolean;
        get should_download(): boolean;
        get shouldDownload(): boolean;
        get subpaths(): string[];
        $signals: RelatedRef.SignalSignatures;
        constructor(properties?: Partial<RelatedRef.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RelatedRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelatedRef.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RelatedRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RelatedRef.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RelatedRef.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RelatedRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_subpaths(): string[];
    }
    namespace Remote {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            type: RemoteType;
        }
    }
    class Remote extends GObject.Object {
        static $gtype: GObject.GType<Remote>;
        get name(): string;
        set name(val: string);
        get type(): RemoteType;
        $signals: Remote.SignalSignatures;
        constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string): Remote;
        static new_from_file(name: string, data: GLib.Bytes | Uint8Array): Remote;
        connect<K extends keyof Remote.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Remote.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Remote.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Remote.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_appstream_dir(arch: string | null): Gio.File;
        get_appstream_timestamp(arch: string | null): Gio.File;
        get_collection_id(): string | null;
        get_comment(): string;
        get_default_branch(): string;
        get_description(): string;
        get_disabled(): boolean;
        get_filter(): string;
        get_gpg_verify(): boolean;
        get_homepage(): string;
        get_icon(): string;
        get_main_ref(): string;
        get_name(): string;
        get_nodeps(): boolean;
        get_noenumerate(): boolean;
        get_prio(): number;
        get_remote_type(): RemoteType;
        get_title(): string;
        get_url(): string;
        set_collection_id(collection_id: string | null): void;
        set_comment(comment: string): void;
        set_default_branch(default_branch: string): void;
        set_description(description: string): void;
        set_disabled(disabled: boolean): void;
        set_filter(filter_path: string): void;
        set_gpg_key(gpg_key: GLib.Bytes | Uint8Array): void;
        set_gpg_verify(gpg_verify: boolean): void;
        set_homepage(homepage: string): void;
        set_icon(icon: string): void;
        set_main_ref(main_ref: string): void;
        set_nodeps(nodeps: boolean): void;
        set_noenumerate(noenumerate: boolean): void;
        set_prio(prio: number): void;
        set_title(title: string): void;
        set_url(url: string): void;
    }
    namespace RemoteRef {
        interface SignalSignatures extends Ref.SignalSignatures {
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::end-of-life": (pspec: GObject.ParamSpec) => void;
            "notify::end-of-life-rebase": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::remote-name": (pspec: GObject.ParamSpec) => void;
            "notify::arch": (pspec: GObject.ParamSpec) => void;
            "notify::branch": (pspec: GObject.ParamSpec) => void;
            "notify::collection-id": (pspec: GObject.ParamSpec) => void;
            "notify::commit": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Ref.ConstructorProps {
            download_size: bigint | number;
            downloadSize: bigint | number;
            end_of_life: string;
            endOfLife: string;
            end_of_life_rebase: string;
            endOfLifeRebase: string;
            installed_size: bigint | number;
            installedSize: bigint | number;
            metadata: GLib.Bytes | Uint8Array | null;
            remote_name: string;
            remoteName: string;
        }
    }
    class RemoteRef extends Ref {
        static $gtype: GObject.GType<RemoteRef>;
        get download_size(): number;
        get downloadSize(): number;
        get end_of_life(): string;
        get endOfLife(): string;
        get end_of_life_rebase(): string;
        get endOfLifeRebase(): string;
        get installed_size(): number;
        get installedSize(): number;
        get metadata(): GLib.Bytes | null;
        get remote_name(): string;
        get remoteName(): string;
        $signals: RemoteRef.SignalSignatures;
        constructor(properties?: Partial<RemoteRef.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RemoteRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteRef.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RemoteRef.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteRef.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RemoteRef.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RemoteRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_download_size(): number;
        get_eol(): string;
        get_eol_rebase(): string;
        get_installed_size(): number;
        get_metadata(): GLib.Bytes | null;
        get_remote_name(): string;
    }
    namespace Transaction {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "add-new-remote": (arg0: TransactionRemoteReason, arg1: string, arg2: string, arg3: string) => boolean | void;
            "basic-auth-start": (arg0: string, arg1: string, arg2: GLib.Variant, arg3: number) => boolean | void;
            "choose-remote-for-ref": (arg0: string, arg1: string, arg2: string[]) => number;
            "end-of-lifed": (arg0: string, arg1: string, arg2: string) => void;
            "end-of-lifed-with-rebase": (arg0: string, arg1: string, arg2: string, arg3: string, arg4: string[]) => boolean | void;
            "install-authenticator": (arg0: string, arg1: string) => void;
            "new-operation": (arg0: TransactionOperation, arg1: TransactionProgress) => void;
            "operation-done": (arg0: TransactionOperation, arg1: string | null, arg2: TransactionResult) => void;
            "operation-error": (arg0: TransactionOperation, arg1: GLib.Error, arg2: TransactionErrorDetails) => boolean | void;
            ready: () => boolean | void;
            "ready-pre-auth": () => boolean | void;
            "webflow-done": (arg0: GLib.Variant, arg1: number) => void;
            "webflow-start": (arg0: string, arg1: string, arg2: GLib.Variant, arg3: number) => boolean | void;
            "notify::installation": (pspec: GObject.ParamSpec) => void;
            "notify::no-interaction": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            installation: Installation;
            no_interaction: boolean;
            noInteraction: boolean;
        }
    }
    class Transaction extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Transaction>;
        get installation(): Installation;
        get no_interaction(): boolean;
        set no_interaction(val: boolean);
        get noInteraction(): boolean;
        set noInteraction(val: boolean);
        $signals: Transaction.SignalSignatures;
        constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_installation(installation: Installation, cancellable: Gio.Cancellable | null): Transaction;
        connect<K extends keyof Transaction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Transaction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Transaction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Transaction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_add_new_remote(reason: TransactionRemoteReason, from_id: string, remote_name: string, url: string): boolean;
        vfunc_basic_auth_start(remote: string, realm: string, options: GLib.Variant, id: number): boolean;
        vfunc_choose_remote_for_ref(for_ref: string, runtime_ref: string, remotes: string): number;
        vfunc_end_of_lifed(ref: string, reason: string, rebase: string): void;
        vfunc_end_of_lifed_with_rebase(remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string): boolean;
        vfunc_install_authenticator(remote: string, authenticator_ref: string): void;
        vfunc_new_operation(operation: TransactionOperation, progress: TransactionProgress): void;
        vfunc_operation_done(operation: TransactionOperation, commit: string, details: TransactionResult): void;
        vfunc_operation_error(operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails): boolean;
        vfunc_ready(): boolean;
        vfunc_ready_pre_auth(): boolean;
        vfunc_run(cancellable: Gio.Cancellable | null): boolean;
        vfunc_webflow_done(options: GLib.Variant, id: number): void;
        vfunc_webflow_start(remote: string, url: string, options: GLib.Variant, id: number): boolean;
        abort_webflow(id: number): void;
        add_default_dependency_sources(): void;
        add_dependency_source(installation: Installation): void;
        add_install(remote: string, ref: string, subpaths: string[] | null): boolean;
        add_install_bundle(file: Gio.File, gpg_data: GLib.Bytes | Uint8Array | null): boolean;
        add_install_flatpakref(flatpakref_data: GLib.Bytes | Uint8Array): boolean;
        add_install_image(image_location: string | null): boolean;
        add_rebase(remote: string, ref: string, subpaths: string | null, previous_ids: string[] | null): boolean;
        add_rebase_and_uninstall(remote: string, new_ref: string, old_ref: string, subpaths: string | null, previous_ids: string[] | null): boolean;
        add_sideload_image_collection(location: string, cancellable: Gio.Cancellable | null): boolean;
        add_sideload_repo(path: string): void;
        add_sync_preinstalled(): boolean;
        add_uninstall(ref: string): boolean;
        add_update(ref: string, subpaths: string[] | null, commit: string | null): boolean;
        complete_basic_auth(id: number, user: string, password: string, options: GLib.Variant): void;
        get_auto_install_debug(): boolean;
        get_auto_install_sdk(): boolean;
        get_current_operation(): TransactionOperation;
        get_include_unused_uninstall_ops(): boolean;
        get_installation(): Installation;
        get_no_deploy(): boolean;
        get_no_interaction(): boolean;
        get_no_pull(): boolean;
        get_operation_for_ref(remote: string | null, ref: string): TransactionOperation;
        get_operations(): TransactionOperation[];
        get_parent_window(): string;
        is_empty(): boolean;
        run(cancellable: Gio.Cancellable | null): boolean;
        set_auto_install_debug(auto_install_debug: boolean): void;
        set_auto_install_sdk(auto_install_sdk: boolean): void;
        set_default_arch(arch: string): void;
        set_disable_auto_pin(disable_pin: boolean): void;
        set_disable_dependencies(disable_dependencies: boolean): void;
        set_disable_prune(disable_prune: boolean): void;
        set_disable_related(disable_related: boolean): void;
        set_disable_static_deltas(disable_static_deltas: boolean): void;
        set_force_uninstall(force_uninstall: boolean): void;
        set_include_unused_uninstall_ops(include_unused_uninstall_ops: boolean): void;
        set_no_deploy(no_deploy: boolean): void;
        set_no_interaction(no_interaction: boolean): void;
        set_no_pull(no_pull: boolean): void;
        set_parent_window(parent_window: string): void;
        set_reinstall(reinstall: boolean): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace TransactionOperation {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class TransactionOperation extends GObject.Object {
        static $gtype: GObject.GType<TransactionOperation>;
        $signals: TransactionOperation.SignalSignatures;
        constructor(properties?: Partial<TransactionOperation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TransactionOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionOperation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TransactionOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionOperation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TransactionOperation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TransactionOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bundle_path(): Gio.File;
        get_commit(): string;
        get_download_size(): number;
        get_installed_size(): number;
        get_is_skipped(): boolean;
        get_metadata(): GLib.KeyFile;
        get_old_metadata(): GLib.KeyFile;
        get_operation_type(): TransactionOperationType;
        get_ref(): string;
        get_related_to_ops(): TransactionOperation[] | null;
        get_remote(): string;
        get_requires_authentication(): boolean;
        get_subpaths(): string[];
    }
    namespace TransactionProgress {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class TransactionProgress extends GObject.Object {
        static $gtype: GObject.GType<TransactionProgress>;
        $signals: TransactionProgress.SignalSignatures;
        constructor(properties?: Partial<TransactionProgress.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof TransactionProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionProgress.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TransactionProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionProgress.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TransactionProgress.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TransactionProgress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bytes_transferred(): number;
        get_is_estimating(): boolean;
        get_progress(): number;
        get_start_time(): number;
        get_status(): string;
        set_update_frequency(update_interval: number): void;
    }
    type BundleRefClass = typeof BundleRef;
    type InstallationClass = typeof Installation;
    type InstalledRefClass = typeof InstalledRef;
    type InstanceClass = typeof Instance;
    type RefClass = typeof Ref;
    type RelatedRefClass = typeof RelatedRef;
    type RemoteClass = typeof Remote;
    type RemoteRefClass = typeof RemoteRef;
    type TransactionClass = typeof Transaction;
    type TransactionOperationClass = typeof TransactionOperation;
    type TransactionProgressClass = typeof TransactionProgress;
    const __name__: string;
    const __version__: string;
}
export default Flatpak;
}
declare module 'gi://Flatpak' {
    import Flatpak10 from 'gi://Flatpak?version=1.0';
    export default Flatpak10;
}
