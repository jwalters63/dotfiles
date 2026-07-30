declare module 'gi://OSTree?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace OSTree {
    enum DeploymentUnlockedState {
        NONE,
        DEVELOPMENT,
        HOTFIX,
        TRANSIENT,
    }
    class GpgError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_SIGNATURE: number;
        static INVALID_SIGNATURE: number;
        static MISSING_KEY: number;
        static EXPIRED_SIGNATURE: number;
        static EXPIRED_KEY: number;
        static REVOKED_KEY: number;
        constructor(options: { message: string; code: number });
    }
    enum GpgSignatureAttr {
        VALID,
        SIG_EXPIRED,
        KEY_EXPIRED,
        KEY_REVOKED,
        KEY_MISSING,
        FINGERPRINT,
        TIMESTAMP,
        EXP_TIMESTAMP,
        PUBKEY_ALGO_NAME,
        HASH_ALGO_NAME,
        USER_NAME,
        USER_EMAIL,
        FINGERPRINT_PRIMARY,
        KEY_EXP_TIMESTAMP,
        KEY_EXP_TIMESTAMP_PRIMARY,
    }
    enum ObjectType {
        FILE,
        DIR_TREE,
        DIR_META,
        COMMIT,
        TOMBSTONE_COMMIT,
        COMMIT_META,
        PAYLOAD_LINK,
        FILE_XATTRS,
        FILE_XATTRS_LINK,
    }
    enum RepoCheckoutFilterResult {
        ALLOW,
        SKIP,
    }
    enum RepoCheckoutMode {
        NONE,
        USER,
    }
    enum RepoCheckoutOverwriteMode {
        NONE,
        UNION_FILES,
        ADD_FILES,
        UNION_IDENTICAL,
    }
    enum RepoCommitFilterResult {
        ALLOW,
        SKIP,
    }
    enum RepoCommitIterResult {
        ERROR,
        END,
        FILE,
        DIR,
    }
    enum RepoLockType {
        SHARED,
        EXCLUSIVE,
    }
    enum RepoMode {
        BARE,
        ARCHIVE,
        ARCHIVE_Z2,
        BARE_USER,
        BARE_USER_ONLY,
        BARE_SPLIT_XATTRS,
    }
    enum RepoRemoteChange {
        ADD,
        ADD_IF_NOT_EXISTS,
        DELETE,
        DELETE_IF_EXISTS,
        REPLACE,
    }
    enum StaticDeltaGenerateOpt {
        LOWLATENCY,
        MAJOR,
    }
    enum StaticDeltaIndexFlags {
        STATIC_DELTA_INDEX_FLAGS_NONE,
    }
    const COMMIT_GVARIANT_STRING: string;
    const COMMIT_META_KEY_ARCHITECTURE: string;
    const COMMIT_META_KEY_COLLECTION_BINDING: string;
    const COMMIT_META_KEY_ENDOFLIFE: string;
    const COMMIT_META_KEY_ENDOFLIFE_REBASE: string;
    const COMMIT_META_KEY_REF_BINDING: string;
    const COMMIT_META_KEY_SOURCE_TITLE: string;
    const COMMIT_META_KEY_VERSION: string;
    const DIRMETA_GVARIANT_STRING: string;
    const FILEMETA_GVARIANT_STRING: string;
    const GPG_KEY_GVARIANT_STRING: string;
    const MAX_METADATA_SIZE: number;
    const MAX_METADATA_WARN_SIZE: number;
    const METADATA_KEY_BOOTABLE: string;
    const METADATA_KEY_LINUX: string;
    const META_KEY_DEPLOY_COLLECTION_ID: string;
    const ORIGIN_TRANSIENT_GROUP: string;
    const PATH_BOOTED: string;
    const RELEASE_VERSION: number;
    const REPO_METADATA_REF: string;
    const SHA256_DIGEST_LEN: number;
    const SHA256_STRING_LEN: number;
    const SIGN_NAME_ED25519: string;
    const SIGN_NAME_SPKI: string;
    const SUMMARY_GVARIANT_STRING: string;
    const SUMMARY_SIG_GVARIANT_STRING: string;
    const TIMESTAMP: number;
    const TREE_GVARIANT_STRING: string;
    const VERSION: number;
    const VERSION_S: string;
    const YEAR_VERSION: number;
    function break_hardlink(dfd: number, path: string, skip_xattrs: boolean, cancellable: Gio.Cancellable | null): boolean;
    function check_version(required_year: number, required_release: number): boolean;
    function checksum_b64_from_bytes(csum: Uint8Array | string): string;
    function checksum_b64_to_bytes(checksum: string): Uint8Array;
    function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array;
    function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array;
    function checksum_file(f: Gio.File, objtype: ObjectType, cancellable: Gio.Cancellable | null): [boolean, Uint8Array];
    function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Uint8Array]>;
    function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): void;
    function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): globalThis.Promise<[Uint8Array]> | void;
    function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [boolean, Uint8Array];
    function checksum_file_at(dfd: number, path: string, stbuf: null, objtype: ObjectType, flags: ChecksumFlags, out_checksum: string, cancellable: Gio.Cancellable | null): boolean;
    function checksum_file_from_input(file_info: Gio.FileInfo, xattrs: GLib.Variant | null, _in: Gio.InputStream | null, objtype: ObjectType, cancellable: Gio.Cancellable | null): [boolean, Uint8Array];
    function checksum_from_bytes(csum: Uint8Array | string): string;
    function checksum_from_bytes_v(csum_v: GLib.Variant): string;
    function checksum_inplace_to_bytes(checksum: string, buf: number): void;
    function checksum_to_bytes(checksum: string): Uint8Array;
    function checksum_to_bytes_v(checksum: string): GLib.Variant;
    function cmp_checksum_bytes(a: number, b: number): number;
    function collection_ref_dupv(refs: CollectionRef[]): CollectionRef[];
    function collection_ref_freev(refs: CollectionRef[]): void;
    function commit_get_content_checksum(commit_variant: GLib.Variant): string | null;
    function commit_get_object_sizes(commit_variant: GLib.Variant): [boolean, CommitSizesEntry[] | null];
    function commit_get_parent(commit_variant: GLib.Variant): string | null;
    function commit_get_timestamp(commit_variant: GLib.Variant): number;
    function commit_metadata_for_bootable(root: Gio.File, dict: GLib.VariantDict, cancellable: Gio.Cancellable | null): boolean;
    function content_file_parse(compressed: boolean, content_path: Gio.File, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
    function content_file_parse_at(compressed: boolean, parent_dfd: number, path: string, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
    function content_stream_parse(compressed: boolean, input: Gio.InputStream, input_length: bigint | number, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream, Gio.FileInfo, GLib.Variant];
    function create_directory_metadata(dir_info: Gio.FileInfo, xattrs: GLib.Variant | null): GLib.Variant;
    function diff_dirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable: Gio.Cancellable | null): boolean;
    function diff_dirs_with_options(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], options: DiffDirsOptions | null, cancellable: Gio.Cancellable | null): boolean;
    function diff_print(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void;
    function fs_get_all_xattrs(fd: number, cancellable: Gio.Cancellable | null): GLib.Variant;
    function fs_get_all_xattrs_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): GLib.Variant;
    function gpg_error_quark(): GLib.Quark;
    function hash_object_name(a: null): number;
    function kernel_args_cleanup(loc: null): void;
    function metadata_variant_type(objtype: ObjectType): GLib.VariantType;
    function object_from_string(str: string): [string, ObjectType];
    function object_name_deserialize(variant: GLib.Variant): [string, ObjectType];
    function object_name_serialize(checksum: string, objtype: ObjectType): GLib.Variant;
    function object_to_string(checksum: string, objtype: ObjectType): string;
    function object_type_from_string(str: string): ObjectType;
    function object_type_to_string(objtype: ObjectType): string;
    function parse_refspec(refspec: string): [boolean, string, string];
    function raw_file_to_archive_z2_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream];
    function raw_file_to_archive_z2_stream_with_options(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream];
    function raw_file_to_content_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream, number];
    function repo_commit_traverse_iter_cleanup(p: null): void;
    function repo_finder_resolve_all_async(finders: RepoFinder[], refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
    function repo_finder_resolve_all_async(finders: RepoFinder[], refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<RepoFinder[]> | null): void;
    function repo_finder_resolve_all_async(finders: RepoFinder[], refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<RepoFinder[]> | null): globalThis.Promise<RepoFinderResult[]> | void;
    function repo_finder_resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
    function repo_finder_result_freev(results: RepoFinderResult[]): void;
    function sign_get_all(): Sign[];
    function sign_get_by_name(name: string): Sign;
    function validate_checksum_string(sha256: string): boolean;
    function validate_collection_id(collection_id: string | null): boolean;
    function validate_remote_name(remote_name: string): boolean;
    function validate_rev(rev: string): boolean;
    function validate_structureof_checksum_string(checksum: string): boolean;
    function validate_structureof_commit(commit: GLib.Variant): boolean;
    function validate_structureof_csum_v(checksum: GLib.Variant): boolean;
    function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean;
    function validate_structureof_dirtree(dirtree: GLib.Variant): boolean;
    function validate_structureof_file_mode(mode: number): boolean;
    function validate_structureof_objtype(objtype: number): boolean;
    interface RepoCheckoutFilter {
        (repo: Repo, path: string, stbuf: null): RepoCheckoutFilterResult;
    }
    interface RepoCommitFilter {
        (repo: Repo, path: string, file_info: Gio.FileInfo): RepoCommitFilterResult;
    }
    interface RepoCommitModifierXattrCallback {
        (repo: Repo, path: string, file_info: Gio.FileInfo): GLib.Variant;
    }
    interface RepoImportArchiveTranslatePathname {
        (repo: Repo, stbuf: null, src_path: string): string;
    }
    enum ChecksumFlags {
        NONE,
        IGNORE_XATTRS,
        CANONICAL_PERMISSIONS,
    }
    enum DiffFlags {
        NONE,
        IGNORE_XATTRS,
    }
    enum GpgSignatureFormatFlags {
        GPG_SIGNATURE_FORMAT_DEFAULT,
    }
    enum RepoCommitModifierFlags {
        NONE,
        SKIP_XATTRS,
        GENERATE_SIZES,
        CANONICAL_PERMISSIONS,
        ERROR_ON_UNLABELED,
        CONSUME,
        DEVINO_CANONICAL,
        SELINUX_LABEL_V1,
    }
    enum RepoCommitState {
        NORMAL,
        PARTIAL,
        FSCK_PARTIAL,
    }
    enum RepoCommitTraverseFlags {
        NONE,
        COMMIT_ONLY,
    }
    enum RepoListObjectsFlags {
        LOOSE,
        PACKED,
        ALL,
        NO_PARENTS,
    }
    enum RepoListRefsExtFlags {
        NONE,
        ALIASES,
        EXCLUDE_REMOTES,
        EXCLUDE_MIRRORS,
    }
    enum RepoPruneFlags {
        NONE,
        NO_PRUNE,
        REFS_ONLY,
        COMMIT_ONLY,
    }
    enum RepoPullFlags {
        NONE,
        MIRROR,
        COMMIT_ONLY,
        UNTRUSTED,
        BAREUSERONLY_FILES,
        TRUSTED_HTTP,
    }
    enum RepoResolveRevExtFlags {
        NONE,
        LOCAL_ONLY,
    }
    enum RepoVerifyFlags {
        NONE,
        NO_GPG,
        NO_SIGNAPI,
    }
    enum SePolicyRestoreconFlags {
        NONE,
        ALLOW_NOLABEL,
        KEEP_EXISTING,
    }
    enum SysrootSimpleWriteDeploymentFlags {
        NONE,
        RETAIN,
        NOT_DEFAULT,
        NO_CLEAN,
        RETAIN_PENDING,
        RETAIN_ROLLBACK,
    }
    export namespace SysrootUpgraderFlags {
        export const $gtype: GObject.GType<SysrootUpgraderFlags>;
    }
    enum SysrootUpgraderFlags {
        IGNORE_UNCONFIGURED,
        STAGE,
        KEXEC,
    }
    enum SysrootUpgraderPullFlags {
        NONE,
        ALLOW_OLDER,
        SYNTHETIC,
    }
    namespace AsyncProgress {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class AsyncProgress extends GObject.Object {
        static $gtype: GObject.GType<AsyncProgress>;
        $signals: AsyncProgress.SignalSignatures;
        constructor(properties?: Partial<AsyncProgress.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): AsyncProgress;
        connect<K extends keyof AsyncProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncProgress.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncProgress.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncProgress.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncProgress.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncProgress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_changed(user_data: null): void;
        copy_state(dest: AsyncProgress): void;
        finish(): void;
        get_status(): string | null;
        get_uint(key: string): number;
        get_uint64(key: string): number;
        get_variant(key: string): GLib.Variant | null;
        set_status(status: string | null): void;
        set_uint(key: string, value: number): void;
        set_uint64(key: string, value: bigint | number): void;
        set_variant(key: string, value: GLib.Variant): void;
    }
    namespace BootconfigParser {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BootconfigParser extends GObject.Object {
        static $gtype: GObject.GType<BootconfigParser>;
        $signals: BootconfigParser.SignalSignatures;
        constructor(properties?: Partial<BootconfigParser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BootconfigParser;
        connect<K extends keyof BootconfigParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BootconfigParser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BootconfigParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BootconfigParser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BootconfigParser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BootconfigParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): BootconfigParser;
        get(key: string): string | null;
        get_overlay_initrds(): string[] | null;
        get_tries_done(): number;
        get_tries_left(): number;
        parse(path: Gio.File, cancellable: Gio.Cancellable | null): boolean;
        parse_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
        set(key: string, value: string): void;
        set(...args: never[]): any;
        set_overlay_initrds(initrds: string[] | null): void;
        write(output: Gio.File, cancellable: Gio.Cancellable | null): boolean;
        write_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
    }
    namespace ContentWriter {
        interface SignalSignatures extends Gio.OutputStream.SignalSignatures {}
        interface ConstructorProps extends Gio.OutputStream.ConstructorProps {}
    }
    class ContentWriter extends Gio.OutputStream {
        static $gtype: GObject.GType<ContentWriter>;
        $signals: ContentWriter.SignalSignatures;
        constructor(properties?: Partial<ContentWriter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ContentWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentWriter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentWriter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentWriter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        finish(cancellable: Gio.Cancellable | null): string;
    }
    namespace Deployment {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Deployment extends GObject.Object {
        static $gtype: GObject.GType<Deployment>;
        $signals: Deployment.SignalSignatures;
        constructor(properties?: Partial<Deployment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](index: number, osname: string, csum: string, deployserial: number, bootcsum: string | null, bootserial: number): Deployment;
        connect<K extends keyof Deployment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deployment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Deployment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deployment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Deployment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Deployment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static origin_remove_transient_state(origin: GLib.KeyFile): void;
        static unlocked_state_to_string(state: DeploymentUnlockedState): string;
        clone(): Deployment;
        equal(bp: Deployment): boolean;
        get_bootconfig(): BootconfigParser | null;
        get_bootcsum(): string;
        get_bootserial(): number;
        get_csum(): string;
        get_deployserial(): number;
        get_index(): number;
        get_origin(): GLib.KeyFile | null;
        get_origin_relpath(): string;
        get_osname(): string;
        get_unlocked(): DeploymentUnlockedState;
        hash(): number;
        is_finalization_locked(): boolean;
        is_pinned(): boolean;
        is_soft_reboot_target(): boolean;
        is_staged(): boolean;
        set_bootconfig(bootconfig: BootconfigParser | null): void;
        set_bootserial(index: number): void;
        set_index(index: number): void;
        set_origin(origin: GLib.KeyFile | null): void;
    }
    namespace GpgVerifyResult {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class GpgVerifyResult extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<GpgVerifyResult>;
        $signals: GpgVerifyResult.SignalSignatures;
        constructor(properties?: Partial<GpgVerifyResult.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GpgVerifyResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GpgVerifyResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GpgVerifyResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GpgVerifyResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GpgVerifyResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GpgVerifyResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static describe_variant(variant: GLib.Variant, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void;
        count_all(): number;
        count_valid(): number;
        describe(signature_index: number, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void;
        get(signature_index: number, attrs: GpgSignatureAttr[]): GLib.Variant;
        get_all(signature_index: number): GLib.Variant;
        lookup(key_id: string): [boolean, number];
        require_valid_signature(): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace MutableTree {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class MutableTree extends GObject.Object {
        static $gtype: GObject.GType<MutableTree>;
        $signals: MutableTree.SignalSignatures;
        constructor(properties?: Partial<MutableTree.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MutableTree;
        static new_from_checksum(repo: Repo, contents_checksum: string, metadata_checksum: string): MutableTree;
        static new_from_commit(repo: Repo, rev: string): MutableTree;
        connect<K extends keyof MutableTree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MutableTree.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MutableTree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MutableTree.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MutableTree.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MutableTree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        check_error(): boolean;
        ensure_dir(name: string): [boolean, MutableTree | null];
        ensure_parent_dirs(split_path: string[], metadata_checksum: string): [boolean, MutableTree | null];
        fill_empty_from_dirtree(repo: Repo, contents_checksum: string, metadata_checksum: string): boolean;
        get_contents_checksum(): string;
        get_files(): { [key: string]: string };
        get_metadata_checksum(): string;
        get_subdirs(): { [key: string]: MutableTree };
        lookup(name: string): [boolean, string, MutableTree | null];
        remove(name: string, allow_noent: boolean): boolean;
        replace_file(name: string, checksum: string): boolean;
        set_contents_checksum(checksum: string): void;
        set_metadata_checksum(checksum: string): void;
        walk(split_path: string[], start: number): [boolean, MutableTree];
    }
    namespace Repo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "gpg-verify-result": (arg0: string, arg1: GpgVerifyResult) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::remotes-config-dir": (pspec: GObject.ParamSpec) => void;
            "notify::sysroot-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: Gio.File;
            remotes_config_dir: string;
            remotesConfigDir: string;
            sysroot_path: Gio.File;
            sysrootPath: Gio.File;
        }
    }
    class Repo extends GObject.Object {
        static $gtype: GObject.GType<Repo>;
        get path(): Gio.File;
        get remotes_config_dir(): string;
        get remotesConfigDir(): string;
        get sysroot_path(): Gio.File;
        get sysrootPath(): Gio.File;
        $signals: Repo.SignalSignatures;
        constructor(properties?: Partial<Repo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](path: Gio.File): Repo;
        static new_default(): Repo;
        static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo;
        connect<K extends keyof Repo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Repo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Repo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Repo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Repo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Repo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static create_at(dfd: number, path: string, mode: RepoMode, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): Repo;
        static mode_from_string(mode: string): [boolean, RepoMode];
        static open_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): Repo;
        static pull_default_console_progress_changed(progress: AsyncProgress, user_data: null): void;
        static traverse_new_parents(): never;
        static traverse_new_reachable(): never;
        static traverse_parents_get_commits(parents: never, object: GLib.Variant): string[];
        abort_transaction(cancellable: Gio.Cancellable | null): boolean;
        add_gpg_signature_summary(key_id: string[], homedir: string | null, cancellable: Gio.Cancellable | null): boolean;
        append_gpg_signature(commit_checksum: string, signature_bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): boolean;
        checkout_at(options: RepoCheckoutAtOptions | null, destination_dfd: number, destination_path: string, commit: string, cancellable: Gio.Cancellable | null): boolean;
        checkout_composefs(options: GLib.Variant | null, destination_dfd: number, destination_path: string, checksum: string, cancellable: Gio.Cancellable | null): boolean;
        checkout_gc(cancellable: Gio.Cancellable | null): boolean;
        checkout_tree(mode: RepoCheckoutMode, overwrite_mode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, source_info: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean;
        commit_add_composefs_metadata(format_version: number, dict: GLib.VariantDict, repo_root: RepoFile, cancellable: Gio.Cancellable | null): boolean;
        commit_transaction(cancellable: Gio.Cancellable | null): [boolean, RepoTransactionStats | null];
        copy_config(): GLib.KeyFile;
        create(mode: RepoMode, cancellable: Gio.Cancellable | null): boolean;
        delete_object(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): boolean;
        equal(b: Repo): boolean;
        find_remotes_async(refs: CollectionRef[], options: GLib.Variant | null, finders: RepoFinder[], progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        find_remotes_async(refs: CollectionRef[], options: GLib.Variant | null, finders: RepoFinder[], progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_remotes_async(refs: CollectionRef[], options: GLib.Variant | null, finders: RepoFinder[], progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        find_remotes_finish(result: Gio.AsyncResult): RepoFinderResult[];
        fsck_object(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): boolean;
        get_bootloader(): string;
        get_collection_id(): string | null;
        get_config(): GLib.KeyFile;
        get_default_repo_finders(): string[];
        get_dfd(): number;
        get_disable_fsync(): boolean;
        get_min_free_space_bytes(): [boolean, number];
        get_mode(): RepoMode;
        get_parent(): Repo | null;
        get_path(): Gio.File;
        get_remote_boolean_option(remote_name: string, option_name: string, default_value: boolean): [boolean, boolean];
        get_remote_list_option(remote_name: string, option_name: string): [boolean, string[]];
        get_remote_option(remote_name: string, option_name: string, default_value: string | null): [boolean, string];
        gpg_sign_data(data: GLib.Bytes | Uint8Array, old_signatures: GLib.Bytes | Uint8Array | null, key_id: string[], homedir: string | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes];
        gpg_verify_data(remote_name: string | null, data: GLib.Bytes | Uint8Array, signatures: GLib.Bytes | Uint8Array, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult;
        has_object(objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): [boolean, boolean];
        hash(): number;
        import_object_from(source: Repo, objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): boolean;
        import_object_from_with_trust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable: Gio.Cancellable | null): boolean;
        is_system(): boolean;
        is_writable(): boolean;
        list_collection_refs(match_collection_id: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [boolean, never];
        list_commit_objects_starting_with(start: string, cancellable: Gio.Cancellable | null): [boolean, never];
        list_objects(flags: RepoListObjectsFlags, cancellable: Gio.Cancellable | null): [boolean, never];
        list_refs(refspec_prefix: string | null, cancellable: Gio.Cancellable | null): [boolean, { [key: string]: string }];
        list_refs_ext(refspec_prefix: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [boolean, { [key: string]: string }];
        list_static_delta_indexes(cancellable: Gio.Cancellable | null): [boolean, string[]];
        list_static_delta_names(cancellable: Gio.Cancellable | null): [boolean, string[]];
        load_commit(checksum: string): [boolean, GLib.Variant | null, RepoCommitState | null];
        load_file(checksum: string, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream | null, Gio.FileInfo | null, GLib.Variant | null];
        load_object_stream(objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream, number];
        load_variant(objtype: ObjectType, sha256: string): [boolean, GLib.Variant];
        load_variant_if_exists(objtype: ObjectType, sha256: string): [boolean, GLib.Variant | null];
        lock_pop(lock_type: RepoLockType, cancellable: Gio.Cancellable | null): boolean;
        lock_push(lock_type: RepoLockType, cancellable: Gio.Cancellable | null): boolean;
        mark_commit_partial(checksum: string, is_partial: boolean): boolean;
        mark_commit_partial_reason(checksum: string, is_partial: boolean, in_state: RepoCommitState): boolean;
        open(cancellable: Gio.Cancellable | null): boolean;
        prepare_transaction(cancellable: Gio.Cancellable | null): [boolean, boolean];
        prune(flags: RepoPruneFlags, depth: number, cancellable: Gio.Cancellable | null): [boolean, number, number, number];
        prune_from_reachable(options: RepoPruneOptions, cancellable: Gio.Cancellable | null): [boolean, number, number, number];
        prune_static_deltas(commit: string | null, cancellable: Gio.Cancellable | null): boolean;
        pull(remote_name: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
        pull_from_remotes_async(results: RepoFinderResult[], options: GLib.Variant | null, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        pull_from_remotes_async(results: RepoFinderResult[], options: GLib.Variant | null, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        pull_from_remotes_async(results: RepoFinderResult[], options: GLib.Variant | null, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        pull_from_remotes_finish(result: Gio.AsyncResult): boolean;
        pull_one_dir(remote_name: string, dir_to_pull: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
        pull_with_options(remote_name_or_baseurl: string, options: GLib.Variant, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
        query_object_storage_size(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): [boolean, number];
        read_commit(ref: string, cancellable: Gio.Cancellable | null): [boolean, Gio.File | null, string];
        read_commit_detached_metadata(checksum: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        regenerate_metadata(additional_metadata: GLib.Variant | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        regenerate_summary(additional_metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        reload_config(cancellable: Gio.Cancellable | null): boolean;
        remote_add(name: string, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        remote_change(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        remote_delete(name: string, cancellable: Gio.Cancellable | null): boolean;
        remote_fetch_summary(name: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes | null, GLib.Bytes | null];
        remote_fetch_summary_with_options(name: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes | null, GLib.Bytes | null];
        remote_get_gpg_keys(name: string | null, key_ids: string[] | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant[] | null];
        remote_get_gpg_verify(name: string): [boolean, boolean];
        remote_get_gpg_verify_summary(name: string): [boolean, boolean];
        remote_get_url(name: string): [boolean, string];
        remote_gpg_import(name: string, source_stream: Gio.InputStream | null, key_ids: string[] | null, cancellable: Gio.Cancellable | null): [boolean, number];
        remote_list(): string[];
        remote_list_collection_refs(remote_name: string, cancellable: Gio.Cancellable | null): [boolean, never];
        remote_list_refs(remote_name: string, cancellable: Gio.Cancellable | null): [boolean, { [key: string]: string }];
        resolve_collection_ref(ref: CollectionRef, allow_noent: boolean, flags: RepoResolveRevExtFlags, cancellable: Gio.Cancellable | null): [boolean, string];
        resolve_keyring_for_collection(collection_id: string, cancellable: Gio.Cancellable | null): Remote;
        resolve_rev(refspec: string, allow_noent: boolean): [boolean, string];
        resolve_rev_ext(refspec: string, allow_noent: boolean, flags: RepoResolveRevExtFlags): [boolean, string];
        scan_hardlinks(cancellable: Gio.Cancellable | null): boolean;
        set_alias_ref_immediate(remote: string | null, ref: string, target: string | null, cancellable: Gio.Cancellable | null): boolean;
        set_cache_dir(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
        set_collection_id(collection_id: string | null): boolean;
        set_collection_ref_immediate(ref: CollectionRef, checksum: string | null, cancellable: Gio.Cancellable | null): boolean;
        set_disable_fsync(disable_fsync: boolean): void;
        set_ref_immediate(remote: string | null, ref: string, checksum: string | null, cancellable: Gio.Cancellable | null): boolean;
        sign_commit(commit_checksum: string, key_id: string, homedir: string | null, cancellable: Gio.Cancellable | null): boolean;
        sign_delta(from_commit: string, to_commit: string, key_id: string, homedir: string, cancellable: Gio.Cancellable | null): boolean;
        signature_verify_commit_data(remote_name: string, commit_data: GLib.Bytes | Uint8Array, commit_metadata: GLib.Bytes | Uint8Array, flags: RepoVerifyFlags): [boolean, string];
        static_delta_execute_offline(dir_or_file: Gio.File, skip_validation: boolean, cancellable: Gio.Cancellable | null): boolean;
        static_delta_execute_offline_with_signature(dir_or_file: Gio.File, sign: Sign, skip_validation: boolean, cancellable: Gio.Cancellable | null): boolean;
        static_delta_generate(opt: StaticDeltaGenerateOpt, from: string | null, to: string, metadata: GLib.Variant | null, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        static_delta_reindex(flags: StaticDeltaIndexFlags, opt_to_commit: string, cancellable: Gio.Cancellable | null): boolean;
        static_delta_verify_signature(delta_id: string, sign: Sign): [boolean, string];
        transaction_set_collection_ref(ref: CollectionRef, checksum: string | null): void;
        transaction_set_ref(remote: string | null, ref: string, checksum: string | null): void;
        transaction_set_refspec(refspec: string, checksum: string | null): void;
        traverse_commit(commit_checksum: string, maxdepth: number, cancellable: Gio.Cancellable | null): [boolean, never];
        traverse_reachable_refs(depth: number, reachable: never, cancellable: Gio.Cancellable | null): boolean;
        verify_commit(commit_checksum: string, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): boolean;
        verify_commit_ext(commit_checksum: string, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult;
        verify_commit_for_remote(commit_checksum: string, remote_name: string, cancellable: Gio.Cancellable | null): GpgVerifyResult;
        verify_summary(remote_name: string, summary: GLib.Bytes | Uint8Array, signatures: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): GpgVerifyResult;
        write_archive_to_mtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable: Gio.Cancellable | null): boolean;
        write_archive_to_mtree_from_fd(fd: number, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable: Gio.Cancellable | null): boolean;
        write_commit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable: Gio.Cancellable | null): [boolean, string];
        write_commit_detached_metadata(checksum: string, metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
        write_commit_with_time(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: bigint | number, cancellable: Gio.Cancellable | null): [boolean, string];
        write_config(new_config: GLib.KeyFile): boolean;
        write_config_and_reload(new_config: GLib.KeyFile): boolean;
        write_content(expected_checksum: string | null, object_input: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null): [boolean, Uint8Array | null];
        write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>;
        write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;
        write_content_finish(result: Gio.AsyncResult): [boolean, number];
        write_content_trusted(checksum: string, object_input: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null): boolean;
        write_dfd_to_mtree(dfd: number, path: string, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean;
        write_directory_to_mtree(dir: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean;
        write_metadata(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, Uint8Array | null];
        write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Uint8Array> | void;
        write_metadata_finish(result: Gio.AsyncResult): [boolean, Uint8Array];
        write_metadata_stream_trusted(objtype: ObjectType, checksum: string, object_input: Gio.InputStream, length: bigint | number, cancellable: Gio.Cancellable | null): boolean;
        write_metadata_trusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        write_mtree(mtree: MutableTree, cancellable: Gio.Cancellable | null): [boolean, Gio.File];
        write_regfile(expected_checksum: string | null, uid: number, gid: number, mode: number, content_len: bigint | number, xattrs: GLib.Variant | null): ContentWriter;
        write_regfile_inline(expected_checksum: string | null, uid: number, gid: number, mode: number, xattrs: GLib.Variant | null, buf: Uint8Array | string, cancellable: Gio.Cancellable | null): string;
        write_symlink(expected_checksum: string | null, uid: number, gid: number, xattrs: GLib.Variant | null, symlink_target: string, cancellable: Gio.Cancellable | null): string;
    }
    namespace RepoFile {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.File.ConstructorProps {}
    }
    class RepoFile extends GObject.Object implements Gio.File {
        static $gtype: GObject.GType<RepoFile>;
        $signals: RepoFile.SignalSignatures;
        constructor(properties?: Partial<RepoFile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof RepoFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepoFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepoFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepoFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ensure_resolved(): boolean;
        get_checksum(): string;
        get_repo(): Repo;
        get_root(): RepoFile;
        get_xattrs(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        tree_find_child(name: string): [number, boolean, GLib.Variant];
        tree_get_contents(): GLib.Variant | null;
        tree_get_contents_checksum(): string | null;
        tree_get_metadata(): GLib.Variant | null;
        tree_get_metadata_checksum(): string | null;
        tree_query_child(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): [boolean, Gio.FileInfo | null];
        tree_set_metadata(checksum: string, metadata: GLib.Variant): void;
        append_to(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileOutputStream>;
        append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileOutputStream> | void;
        append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        build_attribute_list_for_copy(flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null): string;
        copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): boolean;
        copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable: Gio.Cancellable | null, progress_callback_closure: GObject.Closure | null, ready_callback_closure: GObject.Closure): void;
        copy_attributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null): boolean;
        copy_finish(res: Gio.AsyncResult): boolean;
        create(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileOutputStream>;
        create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileOutputStream> | void;
        create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        create_readwrite(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileIOStream>;
        create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileIOStream> | void;
        create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        ["delete"](cancellable: Gio.Cancellable | null): boolean;
        delete_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(result: Gio.AsyncResult): boolean;
        dup(): Gio.File;
        eject_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        eject_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        eject_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        eject_mountable_finish(result: Gio.AsyncResult): boolean;
        eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
        enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): Gio.FileEnumerator;
        enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileEnumerator>;
        enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileEnumerator> | void;
        enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;
        equal(file2: Gio.File): boolean;
        find_enclosing_mount(cancellable: Gio.Cancellable | null): Gio.Mount;
        find_enclosing_mount_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.Mount>;
        find_enclosing_mount_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_enclosing_mount_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.Mount> | void;
        find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;
        get_basename(): string | null;
        get_child(name: string): Gio.File;
        get_child_for_display_name(display_name: string): Gio.File;
        get_parent(): Gio.File | null;
        get_parse_name(): string;
        get_path(): string | null;
        get_relative_path(descendant: Gio.File): string | null;
        get_uri(): string;
        get_uri_scheme(): string | null;
        has_parent(parent: Gio.File | null): boolean;
        has_prefix(prefix: Gio.File): boolean;
        has_uri_scheme(uri_scheme: string): boolean;
        hash(): number;
        is_native(): boolean;
        load_bytes(cancellable: Gio.Cancellable | null): [GLib.Bytes, string];
        load_bytes_async(cancellable: Gio.Cancellable | null): globalThis.Promise<[GLib.Bytes, string]>;
        load_bytes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_bytes_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[GLib.Bytes, string]> | void;
        load_bytes_finish(result: Gio.AsyncResult): [GLib.Bytes, string];
        load_contents(cancellable: Gio.Cancellable | null): [boolean, Uint8Array, string];
        load_contents_async(cancellable: Gio.Cancellable | null): globalThis.Promise<[Uint8Array, string]>;
        load_contents_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_contents_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Uint8Array, string]> | void;
        load_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string];
        load_partial_contents_finish(res: Gio.AsyncResult): [boolean, Uint8Array, string];
        make_directory(cancellable: Gio.Cancellable | null): boolean;
        make_directory_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        make_directory_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        make_directory_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        make_directory_finish(result: Gio.AsyncResult): boolean;
        make_directory_with_parents(cancellable: Gio.Cancellable | null): boolean;
        make_symbolic_link(symlink_value: string, cancellable: Gio.Cancellable | null): boolean;
        make_symbolic_link_async(symlink_value: string, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        make_symbolic_link_async(symlink_value: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        make_symbolic_link_async(symlink_value: string, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        make_symbolic_link_finish(result: Gio.AsyncResult): boolean;
        measure_disk_usage(flags: Gio.FileMeasureFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileMeasureProgressCallback | null): [boolean, number, number, number];
        measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, number, number, number];
        monitor(flags: Gio.FileMonitorFlags, cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        monitor_directory(flags: Gio.FileMonitorFlags, cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        monitor_file(flags: Gio.FileMonitorFlags, cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;
        mount_mountable(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
        mount_mountable(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        mount_mountable(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        mount_mountable_finish(result: Gio.AsyncResult): Gio.File;
        move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): boolean;
        move_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable: Gio.Cancellable | null, progress_callback_closure: GObject.Closure | null, ready_callback_closure: GObject.Closure): void;
        move_finish(result: Gio.AsyncResult): boolean;
        open_readwrite(cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        open_readwrite_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileIOStream>;
        open_readwrite_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_readwrite_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileIOStream> | void;
        open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        peek_path(): string | null;
        poll_mountable(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        poll_mountable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        poll_mountable(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        poll_mountable_finish(result: Gio.AsyncResult): boolean;
        query_default_handler(cancellable: Gio.Cancellable | null): Gio.AppInfo;
        query_default_handler_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.AppInfo>;
        query_default_handler_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        query_default_handler_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.AppInfo> | void;
        query_default_handler_finish(result: Gio.AsyncResult): Gio.AppInfo;
        query_exists(cancellable: Gio.Cancellable | null): boolean;
        query_file_type(flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): Gio.FileType;
        query_filesystem_info(attributes: string, cancellable: Gio.Cancellable | null): Gio.FileInfo;
        query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileInfo>;
        query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileInfo> | void;
        query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
        query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): Gio.FileInfo;
        query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileInfo>;
        query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileInfo> | void;
        query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
        query_settable_attributes(cancellable: Gio.Cancellable | null): Gio.FileAttributeInfoList;
        query_writable_namespaces(cancellable: Gio.Cancellable | null): Gio.FileAttributeInfoList;
        read(cancellable: Gio.Cancellable | null): Gio.FileInputStream;
        read_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileInputStream>;
        read_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        read_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileInputStream> | void;
        read_finish(res: Gio.AsyncResult): Gio.FileInputStream;
        replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileOutputStream>;
        replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileOutputStream> | void;
        replace_contents(contents: Uint8Array | string, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): [boolean, string];
        replace_contents_async(contents: Uint8Array | string, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        replace_contents_async(contents: Uint8Array | string, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        replace_contents_async(contents: Uint8Array | string, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        replace_contents_async(...args: never[]): any;
        replace_contents_bytes_async(contents: GLib.Bytes | Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        replace_contents_finish(res: Gio.AsyncResult): [boolean, string];
        replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileIOStream>;
        replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileIOStream> | void;
        replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        resolve_relative_path(relative_path: string): Gio.File;
        set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: null, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_byte_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_int32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_int64(attribute: string, value: bigint | number, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_uint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attribute_uint64(attribute: string, value: bigint | number, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.FileInfo>;
        set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.FileInfo> | void;
        set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];
        set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        set_display_name(display_name: string, cancellable: Gio.Cancellable | null): Gio.File;
        set_display_name_async(display_name: string, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
        set_display_name_async(display_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_display_name_async(display_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        set_display_name_finish(res: Gio.AsyncResult): Gio.File;
        start_mountable(flags: Gio.DriveStartFlags, start_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        start_mountable(flags: Gio.DriveStartFlags, start_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_mountable(flags: Gio.DriveStartFlags, start_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        start_mountable_finish(result: Gio.AsyncResult): boolean;
        stop_mountable(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        stop_mountable(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        stop_mountable(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        stop_mountable_finish(result: Gio.AsyncResult): boolean;
        supports_thread_contexts(): boolean;
        trash(cancellable: Gio.Cancellable | null): boolean;
        trash_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        trash_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        trash_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        trash_finish(result: Gio.AsyncResult): boolean;
        unmount_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        unmount_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        unmount_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        unmount_mountable_finish(result: Gio.AsyncResult): boolean;
        unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
        vfunc_append_to(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        vfunc_append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        vfunc_copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): boolean;
        vfunc_copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_copy_finish(res: Gio.AsyncResult): boolean;
        vfunc_create(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        vfunc_create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_create_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        vfunc_create_readwrite(flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        vfunc_create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        vfunc_delete_file(cancellable: Gio.Cancellable | null): boolean;
        vfunc_delete_file_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_delete_file_finish(result: Gio.AsyncResult): boolean;
        vfunc_dup(): Gio.File;
        vfunc_eject_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_eject_mountable_finish(result: Gio.AsyncResult): boolean;
        vfunc_eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
        vfunc_enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): Gio.FileEnumerator;
        vfunc_enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator;
        vfunc_equal(file2: Gio.File): boolean;
        vfunc_find_enclosing_mount(cancellable: Gio.Cancellable | null): Gio.Mount;
        vfunc_find_enclosing_mount_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount;
        vfunc_get_basename(): string | null;
        vfunc_get_child_for_display_name(display_name: string): Gio.File;
        vfunc_get_parent(): Gio.File | null;
        vfunc_get_parse_name(): string;
        vfunc_get_path(): string | null;
        vfunc_get_relative_path(descendant: Gio.File): string | null;
        vfunc_get_uri(): string;
        vfunc_get_uri_scheme(): string | null;
        vfunc_has_uri_scheme(uri_scheme: string): boolean;
        vfunc_hash(): number;
        vfunc_is_native(): boolean;
        vfunc_make_directory(cancellable: Gio.Cancellable | null): boolean;
        vfunc_make_directory_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_make_directory_finish(result: Gio.AsyncResult): boolean;
        vfunc_make_symbolic_link(symlink_value: string, cancellable: Gio.Cancellable | null): boolean;
        vfunc_make_symbolic_link_async(symlink_value: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_make_symbolic_link_finish(result: Gio.AsyncResult): boolean;
        vfunc_measure_disk_usage(flags: Gio.FileMeasureFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileMeasureProgressCallback | null): [boolean, bigint | number, bigint | number, bigint | number];
        vfunc_measure_disk_usage_finish(result: Gio.AsyncResult): [boolean, bigint | number, bigint | number, bigint | number];
        vfunc_monitor_dir(flags: Gio.FileMonitorFlags, cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        vfunc_monitor_file(flags: Gio.FileMonitorFlags, cancellable: Gio.Cancellable | null): Gio.FileMonitor;
        vfunc_mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean;
        vfunc_mount_mountable(flags: Gio.MountMountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_mount_mountable_finish(result: Gio.AsyncResult): Gio.File;
        vfunc_move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): boolean;
        vfunc_move_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_move_finish(result: Gio.AsyncResult): boolean;
        vfunc_open_readwrite(cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        vfunc_open_readwrite_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        vfunc_poll_mountable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_poll_mountable_finish(result: Gio.AsyncResult): boolean;
        vfunc_prefix_matches(file: Gio.File): boolean;
        vfunc_query_exists(cancellable: Gio.Cancellable | null): boolean;
        vfunc_query_filesystem_info(attributes: string, cancellable: Gio.Cancellable | null): Gio.FileInfo;
        vfunc_query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
        vfunc_query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): Gio.FileInfo;
        vfunc_query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_query_info_finish(res: Gio.AsyncResult): Gio.FileInfo;
        vfunc_query_settable_attributes(cancellable: Gio.Cancellable | null): Gio.FileAttributeInfoList;
        vfunc_query_writable_namespaces(cancellable: Gio.Cancellable | null): Gio.FileAttributeInfoList;
        vfunc_read_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_read_finish(res: Gio.AsyncResult): Gio.FileInputStream;
        vfunc_read_fn(cancellable: Gio.Cancellable | null): Gio.FileInputStream;
        vfunc_replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileOutputStream;
        vfunc_replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream;
        vfunc_replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable: Gio.Cancellable | null): Gio.FileIOStream;
        vfunc_replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream;
        vfunc_resolve_relative_path(relative_path: string): Gio.File;
        vfunc_set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: null, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        vfunc_set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_set_attributes_finish(result: Gio.AsyncResult): [boolean, Gio.FileInfo];
        vfunc_set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): boolean;
        vfunc_set_display_name(display_name: string, cancellable: Gio.Cancellable | null): Gio.File;
        vfunc_set_display_name_async(display_name: string, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_set_display_name_finish(res: Gio.AsyncResult): Gio.File;
        vfunc_start_mountable(flags: Gio.DriveStartFlags, start_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_start_mountable_finish(result: Gio.AsyncResult): boolean;
        vfunc_stop_mountable(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_stop_mountable_finish(result: Gio.AsyncResult): boolean;
        vfunc_trash(cancellable: Gio.Cancellable | null): boolean;
        vfunc_trash_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_trash_finish(result: Gio.AsyncResult): boolean;
        vfunc_unmount_mountable(flags: Gio.MountUnmountFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_unmount_mountable_finish(result: Gio.AsyncResult): boolean;
        vfunc_unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation: Gio.MountOperation | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean;
    }
    namespace RepoFinderAvahi {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
    }
    class RepoFinderAvahi extends GObject.Object implements RepoFinder {
        static $gtype: GObject.GType<RepoFinderAvahi>;
        $signals: RepoFinderAvahi.SignalSignatures;
        constructor(properties?: Partial<RepoFinderAvahi.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](context: GLib.MainContext | null): RepoFinderAvahi;
        connect<K extends keyof RepoFinderAvahi.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderAvahi.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepoFinderAvahi.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderAvahi.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepoFinderAvahi.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepoFinderAvahi.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        start(): void;
        stop(): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        vfunc_resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    namespace RepoFinderConfig {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
    }
    class RepoFinderConfig extends GObject.Object implements RepoFinder {
        static $gtype: GObject.GType<RepoFinderConfig>;
        $signals: RepoFinderConfig.SignalSignatures;
        constructor(properties?: Partial<RepoFinderConfig.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): RepoFinderConfig;
        connect<K extends keyof RepoFinderConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderConfig.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepoFinderConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderConfig.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepoFinderConfig.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepoFinderConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        vfunc_resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    namespace RepoFinderMount {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {
            monitor: Gio.VolumeMonitor;
        }
    }
    class RepoFinderMount extends GObject.Object implements RepoFinder {
        static $gtype: GObject.GType<RepoFinderMount>;
        get monitor(): Gio.VolumeMonitor;
        $signals: RepoFinderMount.SignalSignatures;
        constructor(properties?: Partial<RepoFinderMount.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](monitor: Gio.VolumeMonitor | null): RepoFinderMount;
        connect<K extends keyof RepoFinderMount.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderMount.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepoFinderMount.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderMount.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepoFinderMount.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepoFinderMount.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        vfunc_resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    namespace RepoFinderOverride {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps, RepoFinder.ConstructorProps {}
    }
    class RepoFinderOverride extends GObject.Object implements RepoFinder {
        static $gtype: GObject.GType<RepoFinderOverride>;
        $signals: RepoFinderOverride.SignalSignatures;
        constructor(properties?: Partial<RepoFinderOverride.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): RepoFinderOverride;
        connect<K extends keyof RepoFinderOverride.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderOverride.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RepoFinderOverride.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RepoFinderOverride.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RepoFinderOverride.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RepoFinderOverride.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_uri(uri: string): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        vfunc_resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    namespace SePolicy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::rootfs-dfd": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            path: Gio.File | null;
            rootfs_dfd: number;
            rootfsDfd: number;
        }
    }
    class SePolicy extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<SePolicy>;
        get path(): Gio.File | null;
        get rootfs_dfd(): number;
        get rootfsDfd(): number;
        $signals: SePolicy.SignalSignatures;
        constructor(properties?: Partial<SePolicy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](path: Gio.File, cancellable: Gio.Cancellable | null): SePolicy;
        static new_at(rootfs_dfd: number, cancellable: Gio.Cancellable | null): SePolicy;
        static new_from_commit(repo: Repo, rev: string, cancellable: Gio.Cancellable | null): SePolicy;
        connect<K extends keyof SePolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SePolicy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SePolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SePolicy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SePolicy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SePolicy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static fscreatecon_cleanup(unused: null): void;
        static set_null_log(): void;
        get_csum(): string | null;
        get_label(relpath: string, unix_mode: number, cancellable: Gio.Cancellable | null): [boolean, string];
        get_name(): string | null;
        get_path(): Gio.File | null;
        restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable: Gio.Cancellable | null): [boolean, string];
        setfscreatecon(path: string, mode: number): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace Sysroot {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "journal-msg": (arg0: string) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: Gio.File;
        }
    }
    class Sysroot extends GObject.Object {
        static $gtype: GObject.GType<Sysroot>;
        get path(): Gio.File;
        $signals: Sysroot.SignalSignatures;
        constructor(properties?: Partial<Sysroot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](path: Gio.File | null): Sysroot;
        static new_default(): Sysroot;
        connect<K extends keyof Sysroot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sysroot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sysroot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sysroot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sysroot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Sysroot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_deployment_origin_path(deployment_path: Gio.File): Gio.File;
        change_finalization(deployment: Deployment): boolean;
        cleanup(cancellable: Gio.Cancellable | null): boolean;
        cleanup_prune_repo(options: RepoPruneOptions, cancellable: Gio.Cancellable | null): [boolean, number, number, number];
        clear_soft_reboot(cancellable: Gio.Cancellable | null): boolean;
        deploy_tree(osname: string | null, revision: string, origin: GLib.KeyFile | null, provided_merge_deployment: Deployment | null, override_kernel_argv: string[] | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
        deploy_tree_with_options(osname: string | null, revision: string, origin: GLib.KeyFile | null, provided_merge_deployment: Deployment | null, opts: SysrootDeployTreeOpts | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
        deployment_can_soft_reboot(deployment: Deployment): boolean;
        deployment_kexec_load(deployment: Deployment, cancellable: Gio.Cancellable | null): boolean;
        deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable: Gio.Cancellable | null): boolean;
        deployment_set_kargs_in_place(deployment: Deployment, kargs_str: string | null, cancellable: Gio.Cancellable | null): boolean;
        deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable: Gio.Cancellable | null): boolean;
        deployment_set_pinned(deployment: Deployment, is_pinned: boolean): boolean;
        deployment_set_soft_reboot(deployment: Deployment, allow_kernel_skew: boolean, cancellable: Gio.Cancellable | null): boolean;
        deployment_unlock(deployment: Deployment, unlocked_state: DeploymentUnlockedState, cancellable: Gio.Cancellable | null): boolean;
        ensure_initialized(cancellable: Gio.Cancellable | null): boolean;
        get_booted_deployment(): Deployment | null;
        get_bootversion(): number;
        get_deployment_directory(deployment: Deployment): Gio.File;
        get_deployment_dirpath(deployment: Deployment): string;
        get_deployments(): Deployment[];
        get_fd(): number;
        get_merge_deployment(osname: string | null): Deployment | null;
        get_path(): Gio.File;
        get_repo(cancellable: Gio.Cancellable | null): [boolean, Repo | null];
        get_staged_deployment(): Deployment | null;
        get_subbootversion(): number;
        init_osname(osname: string, cancellable: Gio.Cancellable | null): boolean;
        initialize(): boolean;
        initialize_with_mount_namespace(cancellable: Gio.Cancellable | null): boolean;
        is_booted(): boolean;
        load(cancellable: Gio.Cancellable | null): boolean;
        load_if_changed(cancellable: Gio.Cancellable | null): [boolean, boolean];
        lock(): boolean;
        lock_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        lock_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        lock_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        lock_finish(result: Gio.AsyncResult): boolean;
        origin_new_from_refspec(refspec: string): GLib.KeyFile;
        prepare_cleanup(cancellable: Gio.Cancellable | null): boolean;
        query_deployments_for(osname: string | null): [Deployment | null, Deployment | null];
        repo(): Repo;
        require_booted_deployment(): Deployment;
        set_mount_namespace_in_use(): void;
        simple_write_deployment(osname: string | null, new_deployment: Deployment, merge_deployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable: Gio.Cancellable | null): boolean;
        stage_overlay_initrd(fd: number, cancellable: Gio.Cancellable | null): [boolean, string];
        stage_tree(osname: string | null, revision: string, origin: GLib.KeyFile | null, merge_deployment: Deployment | null, override_kernel_argv: string[] | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
        stage_tree_with_options(osname: string, revision: string, origin: GLib.KeyFile | null, merge_deployment: Deployment, opts: SysrootDeployTreeOpts | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
        try_lock(): [boolean, boolean];
        unload(): void;
        unlock(): void;
        update_post_copy(cancellable: Gio.Cancellable | null): boolean;
        write_deployments(new_deployments: Deployment[], cancellable: Gio.Cancellable | null): boolean;
        write_deployments_with_options(new_deployments: Deployment[], opts: SysrootWriteDeploymentsOpts, cancellable: Gio.Cancellable | null): boolean;
        write_origin_file(deployment: Deployment, new_origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean;
    }
    namespace SysrootUpgrader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::osname": (pspec: GObject.ParamSpec) => void;
            "notify::sysroot": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            flags: SysrootUpgraderFlags;
            osname: string;
            sysroot: Sysroot;
        }
    }
    class SysrootUpgrader extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<SysrootUpgrader>;
        get flags(): SysrootUpgraderFlags;
        get osname(): string;
        get sysroot(): Sysroot;
        $signals: SysrootUpgrader.SignalSignatures;
        constructor(properties?: Partial<SysrootUpgrader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](sysroot: Sysroot, cancellable: Gio.Cancellable | null): SysrootUpgrader;
        static new_for_os(sysroot: Sysroot, osname: string | null, cancellable: Gio.Cancellable | null): SysrootUpgrader;
        static new_for_os_with_flags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable: Gio.Cancellable | null): SysrootUpgrader;
        connect<K extends keyof SysrootUpgrader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SysrootUpgrader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SysrootUpgrader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SysrootUpgrader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SysrootUpgrader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SysrootUpgrader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean;
        deploy(cancellable: Gio.Cancellable | null): boolean;
        dup_origin(): GLib.KeyFile | null;
        get_origin(): GLib.KeyFile | null;
        get_origin_description(): string | null;
        pull(flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [boolean, boolean];
        pull_one_dir(dir_to_pull: string, flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [boolean, boolean];
        set_origin(origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    type AsyncProgressClass = typeof AsyncProgress;
    type BlobReaderInterface = typeof BlobReader;
    class CollectionRef {
        static $gtype: GObject.GType<CollectionRef>;
        collection_id: string;
        ref_name: string;
        constructor(properties?: Partial<{
            collection_id: string;
            ref_name: string;
        }>);
        static ["new"](collection_id: string | null, ref_name: string): CollectionRef;
        static dupv(refs: CollectionRef[]): CollectionRef[];
        static freev(refs: CollectionRef[]): void;
        dup(): CollectionRef;
        equal(ref2: CollectionRef): boolean;
        free(): void;
        hash(): number;
    }
    class CommitSizesEntry {
        static $gtype: GObject.GType<CommitSizesEntry>;
        checksum: string;
        objtype: ObjectType;
        unpacked: number;
        archived: number;
        constructor(checksum: string, objtype: ObjectType, unpacked: bigint | number, archived: bigint | number);
        static ["new"](checksum: string, objtype: ObjectType, unpacked: bigint | number, archived: bigint | number): CommitSizesEntry;
        copy(): CommitSizesEntry | null;
        free(): void;
    }
    type ContentWriterClass = typeof ContentWriter;
    class DiffDirsOptions {
        static $gtype: GObject.GType<DiffDirsOptions>;
        owner_uid: number;
        owner_gid: number;
        unused_bools: boolean[];
        unused_ints: number[];
        unused_ptrs: null[];
    }
    class DiffItem {
        static $gtype: GObject.GType<DiffItem>;
        refcount: number;
        src: Gio.File;
        target: Gio.File;
        src_info: Gio.FileInfo;
        target_info: Gio.FileInfo;
        src_checksum: string;
        target_checksum: string;
        ref(): DiffItem;
        unref(): void;
    }
    abstract class KernelArgs {
        static $gtype: GObject.GType<KernelArgs>;
        static cleanup(loc: null): void;
        append(arg: string): void;
        append_argv(argv: string[]): void;
        append_argv_filtered(argv: string[], prefixes: string[]): void;
        append_if_missing(arg: string): void;
        append_proc_cmdline(cancellable: Gio.Cancellable | null): boolean;
        contains(arg: string): boolean;
        ["delete"](arg: string): boolean;
        delete_if_present(arg: string): boolean;
        delete_key_entry(key: string): boolean;
        free(): void;
        get_last_value(key: string): string | null;
        new_replace(arg: string): boolean;
        parse_append(options: string): void;
        replace(arg: string): void;
        replace_argv(argv: string): void;
        replace_take(arg: string): void;
        to_string(): string;
        to_strv(): string[];
    }
    type MutableTreeClass = typeof MutableTree;
    class MutableTreeIter {
        static $gtype: GObject.GType<MutableTreeIter>;
        in_files: boolean;
    }
    abstract class Remote {
        static $gtype: GObject.GType<Remote>;
        get_name(): string;
        get_url(): string | null;
        ref(): Remote;
        unref(): void;
    }
    class RepoCheckoutAtOptions {
        static $gtype: GObject.GType<RepoCheckoutAtOptions>;
        mode: RepoCheckoutMode;
        overwrite_mode: RepoCheckoutOverwriteMode;
        enable_uncompressed_cache: boolean;
        enable_fsync: boolean;
        process_whiteouts: boolean;
        no_copy_fallback: boolean;
        force_copy: boolean;
        bareuseronly_dirs: boolean;
        force_copy_zerosized: boolean;
        process_passthrough_whiteouts: boolean;
        unused_bools: boolean[];
        subpath: string;
        unused_ints: number[];
        unused_ptrs: null[];
        filter: RepoCheckoutFilter;
        filter_user_data: null;
        sepolicy: SePolicy;
        sepolicy_prefix: string;
        set_devino(cache: RepoDevInoCache | null): void;
    }
    class RepoCommitModifier {
        static $gtype: GObject.GType<RepoCommitModifier>;
        constructor(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null);
        static ["new"](flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier;
        ref(): RepoCommitModifier;
        set_devino_cache(cache: RepoDevInoCache): void;
        set_sepolicy(sepolicy: SePolicy | null): void;
        set_sepolicy_from_commit(repo: Repo, rev: string, cancellable: Gio.Cancellable | null): boolean;
        set_xattr_callback(callback: RepoCommitModifierXattrCallback): void;
        unref(): void;
    }
    class RepoCommitTraverseIter {
        static $gtype: GObject.GType<RepoCommitTraverseIter>;
        initialized: boolean;
        dummy: null[];
        dummy_checksum_data: number[];
        constructor(properties?: Partial<{
            initialized: boolean;
            dummy: null[];
            dummy_checksum_data: number[];
        }>);
        static cleanup(p: null): void;
        clear(): void;
        get_dir(): [string, string, string];
        get_file(): [string, string];
        init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;
        init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;
        next(cancellable: Gio.Cancellable | null): RepoCommitIterResult;
    }
    class RepoDevInoCache {
        static $gtype: GObject.GType<RepoDevInoCache>;
        constructor(properties?: Partial<{}>);
        static ["new"](): RepoDevInoCache;
        ref(): RepoDevInoCache;
        unref(): void;
    }
    type RepoFileClass = typeof RepoFile;
    type RepoFinderAvahiClass = typeof RepoFinderAvahi;
    type RepoFinderConfigClass = typeof RepoFinderConfig;
    type RepoFinderInterface = typeof RepoFinder;
    type RepoFinderMountClass = typeof RepoFinderMount;
    type RepoFinderOverrideClass = typeof RepoFinderOverride;
    class RepoFinderResult {
        static $gtype: GObject.GType<RepoFinderResult>;
        finder: RepoFinder;
        priority: number;
        summary_last_modified: number;
        constructor(remote: Remote, finder: RepoFinder, priority: number, ref_to_checksum: never, ref_to_timestamp: never | null, summary_last_modified: bigint | number);
        static ["new"](remote: Remote, finder: RepoFinder, priority: number, ref_to_checksum: never, ref_to_timestamp: never | null, summary_last_modified: bigint | number): RepoFinderResult;
        static freev(results: RepoFinderResult[]): void;
        compare(b: RepoFinderResult): number;
        dup(): RepoFinderResult;
        free(): void;
    }
    class RepoPruneOptions {
        static $gtype: GObject.GType<RepoPruneOptions>;
        flags: RepoPruneFlags;
        unused_bools: boolean[];
        unused_ints: number[];
        unused_ptrs: null[];
    }
    class RepoTransactionStats {
        static $gtype: GObject.GType<RepoTransactionStats>;
        metadata_objects_total: number;
        metadata_objects_written: number;
        content_objects_total: number;
        content_objects_written: number;
        content_bytes_written: number;
        devino_cache_hits: number;
        padding1: number;
        padding2: number;
        padding3: number;
        padding4: number;
    }
    abstract class SignEd25519 {
        static $gtype: GObject.GType<SignEd25519>;
    }
    class SignEd25519Class {
        static $gtype: GObject.GType<SignEd25519Class>;
    }
    type SignInterface = typeof Sign;
    class SysrootDeployTreeOpts {
        static $gtype: GObject.GType<SysrootDeployTreeOpts>;
        locked: boolean;
        unused_bools: boolean[];
        unused_ints: number[];
        override_kernel_argv: string;
        overlay_initrds: string;
        unused_ptrs: null[];
        constructor(properties?: Partial<{
            locked: boolean;
            unused_bools: boolean[];
            unused_ints: number[];
            override_kernel_argv: string;
            overlay_initrds: string;
            unused_ptrs: null[];
        }>);
    }
    class SysrootWriteDeploymentsOpts {
        static $gtype: GObject.GType<SysrootWriteDeploymentsOpts>;
        do_postclean: boolean;
        disable_auto_early_prune: boolean;
        unused_bools: boolean[];
        unused_ints: number[];
        unused_ptrs: null[];
        constructor(properties?: Partial<{
            do_postclean: boolean;
            disable_auto_early_prune: boolean;
            unused_bools: boolean[];
            unused_ints: number[];
            unused_ptrs: null[];
        }>);
    }
    namespace BlobReader {
        interface Interface {
            vfunc_read_blob(cancellable: Gio.Cancellable | null): GLib.Bytes | Uint8Array | null;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface BlobReaderNamespace {
        $gtype: GObject.GType<BlobReader>;
        prototype: BlobReader;
    }
    interface BlobReader extends GObject.Object, BlobReader.Interface {
        read_blob(cancellable: Gio.Cancellable | null): GLib.Bytes | null;
    }
    export const BlobReader: BlobReaderNamespace & {
        new (): BlobReader; 
    };
    namespace RepoFinder {
        interface Interface {
            vfunc_resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface RepoFinderNamespace {
        $gtype: GObject.GType<RepoFinder>;
        prototype: RepoFinder;
        resolve_all_async(finders: RepoFinder[], refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<RepoFinder> | null): void;
        resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    interface RepoFinder extends GObject.Object, RepoFinder.Interface {
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null): globalThis.Promise<RepoFinderResult[]>;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<RepoFinderResult[]> | void;
        resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
    }
    export const RepoFinder: RepoFinderNamespace & {
        new (): RepoFinder; 
    };
    namespace Sign {
        interface Interface {
            vfunc_add_pk(public_key: GLib.Variant): boolean;
            vfunc_clear_keys(): boolean;
            vfunc_data(data: GLib.Bytes, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes | Uint8Array];
            vfunc_data_verify(data: GLib.Bytes, signatures: GLib.Variant): [boolean, string];
            vfunc_get_name(): string;
            vfunc_load_pk(options: GLib.Variant): boolean;
            vfunc_metadata_format(): string;
            vfunc_metadata_key(): string;
            vfunc_set_pk(public_key: GLib.Variant): boolean;
            vfunc_set_sk(secret_key: GLib.Variant): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SignNamespace {
        $gtype: GObject.GType<Sign>;
        prototype: Sign;
        get_all(): Sign[];
        get_by_name(name: string): Sign;
    }
    interface Sign extends GObject.Object, Sign.Interface {
        add_pk(public_key: GLib.Variant): boolean;
        clear_keys(): boolean;
        commit(repo: Repo, commit_checksum: string, cancellable: Gio.Cancellable | null): boolean;
        commit_verify(repo: Repo, commit_checksum: string, cancellable: Gio.Cancellable | null): [boolean, string];
        data(data: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes];
        data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant): [boolean, string];
        ed25519_add_pk(public_key: GLib.Variant): boolean;
        ed25519_clear_keys(): boolean;
        ed25519_data(data: GLib.Bytes | Uint8Array, signature: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): boolean;
        ed25519_data_verify(data: GLib.Bytes | Uint8Array, signatures: GLib.Variant, out_success_message: string): boolean;
        ed25519_get_name(): string;
        ed25519_load_pk(options: GLib.Variant): boolean;
        ed25519_metadata_format(): string;
        ed25519_metadata_key(): string;
        ed25519_set_pk(public_key: GLib.Variant): boolean;
        ed25519_set_sk(secret_key: GLib.Variant): boolean;
        get_name(): string;
        load_pk(options: GLib.Variant): boolean;
        metadata_format(): string;
        metadata_key(): string;
        read_pk(stream: Gio.InputStream): BlobReader;
        read_sk(stream: Gio.InputStream): BlobReader;
        set_pk(public_key: GLib.Variant): boolean;
        set_sk(secret_key: GLib.Variant): boolean;
        summary(repo: Repo, keys: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    }
    export const Sign: SignNamespace & {
        new (): Sign; 
    };
    type RepoFinderResultv = RepoFinderResult;
    const __name__: string;
    const __version__: string;
}
export default OSTree;
}
declare module 'gi://OSTree' {
    import OSTree10 from 'gi://OSTree?version=1.0';
    export default OSTree10;
}
