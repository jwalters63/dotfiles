declare module 'gi://BlockDev?version=3.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace BlockDev {
    class BtrfsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static DEVICE: number;
        static PARSE: number;
        constructor(options: { message: string; code: number });
    }
    enum BtrfsTech {
        FS,
        MULTI_DEV,
        SUBVOL,
        SNAPSHOT,
    }
    class CryptoError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static DEVICE: number;
        static STATE: number;
        static INVALID_SPEC: number;
        static FORMAT_FAILED: number;
        static RESIZE_FAILED: number;
        static RESIZE_PERM: number;
        static ADD_KEY: number;
        static REMOVE_KEY: number;
        static NO_KEY: number;
        static KEY_SLOT: number;
        static NSS_INIT_FAILED: number;
        static CERT_DECODE: number;
        static ESCROW_FAILED: number;
        static INVALID_PARAMS: number;
        static KEYRING: number;
        static KEYFILE_FAILED: number;
        static INVALID_CONTEXT: number;
        constructor(options: { message: string; code: number });
    }
    enum CryptoKeyslotContextType {
        NONE,
        PASSPHRASE,
        KEYFILE,
        KEYRING,
        VOLUME_KEY,
    }
    enum CryptoLUKSHWEncryptionType {
        UNKNOWN,
        SW_ONLY,
        OPAL_HW_ONLY,
        OPAL_HW_AND_SW,
    }
    enum CryptoLUKSVersion {
        LUKS1,
        LUKS2,
    }
    enum CryptoTech {
        LUKS,
        TRUECRYPT,
        ESCROW,
        INTEGRITY,
        BITLK,
        KEYRING,
        FVAULT2,
        SED_OPAL,
    }
    class DMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static SYS: number;
        static NOT_ROOT: number;
        static TASK: number;
        static RAID_FAIL: number;
        static RAID_NO_DEVS: number;
        static RAID_NO_EXIST: number;
        static DEVICE_NOEXIST: number;
        constructor(options: { message: string; code: number });
    }
    enum DMTech {
        DM_TECH_MAP,
    }
    class FSError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static INVAL: number;
        static PARSE: number;
        static FAIL: number;
        static NOFS: number;
        static PIPE: number;
        static UNMOUNT_FAIL: number;
        static NOT_SUPPORTED: number;
        static NOT_MOUNTED: number;
        static AUTH: number;
        static LABEL_INVALID: number;
        static UUID_INVALID: number;
        static UNKNOWN_FS: number;
        constructor(options: { message: string; code: number });
    }
    enum FSTech {
        GENERIC,
        MOUNT,
        EXT2,
        EXT3,
        EXT4,
        XFS,
        VFAT,
        NTFS,
        F2FS,
        NILFS2,
        EXFAT,
        BTRFS,
        UDF,
    }
    class InitError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static PLUGINS_FAILED: number;
        static NOT_IMPLEMENTED: number;
        constructor(options: { message: string; code: number });
    }
    enum LVMCacheMode {
        UNKNOWN,
        WRITETHROUGH,
        WRITEBACK,
    }
    class LVMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAIL: number;
        static PARSE: number;
        static NOEXIST: number;
        static DM_ERROR: number;
        static NOT_ROOT: number;
        static CACHE_INVAL: number;
        static CACHE_NOCACHE: number;
        static NOT_SUPPORTED: number;
        static VDO_POLICY_INVAL: number;
        static DEVICES_DISABLED: number;
        constructor(options: { message: string; code: number });
    }
    enum LVMTech {
        BASIC,
        BASIC_SNAP,
        THIN,
        CACHE,
        CALCS,
        THIN_CALCS,
        CACHE_CALCS,
        GLOB_CONF,
        VDO,
        WRITECACHE,
        DEVICES,
        SHARED,
        CONFIG,
        VG_CFG_BACKUP_RESTORE,
    }
    enum LVMVDOCompressionState {
        UNKNOWN,
        ONLINE,
        OFFLINE,
    }
    enum LVMVDOIndexState {
        UNKNOWN,
        ERROR,
        CLOSED,
        OPENING,
        CLOSING,
        OFFLINE,
        ONLINE,
    }
    enum LVMVDOOperatingMode {
        UNKNOWN,
        RECOVERING,
        READ_ONLY,
        NORMAL,
    }
    enum LVMVDOWritePolicy {
        UNKNOWN,
        AUTO,
        SYNC,
        ASYNC,
    }
    class LoopError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAIL: number;
        static DEVICE: number;
        constructor(options: { message: string; code: number });
    }
    enum LoopTech {
        LOOP_TECH_LOOP,
    }
    class MDError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAIL: number;
        static PARSE: number;
        static BAD_FORMAT: number;
        static NO_MATCH: number;
        static INVAL: number;
        constructor(options: { message: string; code: number });
    }
    enum MDTech {
        MD_TECH_MDRAID,
    }
    class MpathError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static INVAL: number;
        static FLUSH: number;
        static NOT_ROOT: number;
        static DM_ERROR: number;
        constructor(options: { message: string; code: number });
    }
    enum MpathTech {
        BASE,
        FRIENDLY_NAMES,
    }
    class NVDIMMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static NAMESPACE_FAIL: number;
        static NAMESPACE_PARSE: number;
        static NAMESPACE_NOEXIST: number;
        static NAMESPACE_MODE_INVAL: number;
        constructor(options: { message: string; code: number });
    }
    enum NVDIMMNamespaceMode {
        RAW,
        SECTOR,
        MEMORY,
        DAX,
        FSDAX,
        DEVDAX,
        UNKNOWN,
    }
    enum NVDIMMTech {
        NVDIMM_TECH_NAMESPACE,
    }
    enum NVMEControllerType {
        UNKNOWN,
        IO,
        DISCOVERY,
        ADMIN,
    }
    class NVMEError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAILED: number;
        static BUSY: number;
        static INVALID_ARGUMENT: number;
        static WOULD_FORMAT_ALL_NS: number;
        static SC_GENERIC: number;
        static SC_CMD_SPECIFIC: number;
        static SC_MEDIA: number;
        static SC_PATH: number;
        static SC_VENDOR_SPECIFIC: number;
        static NO_MATCH: number;
        static CONNECT: number;
        static CONNECT_ALREADY: number;
        static CONNECT_INVALID: number;
        static CONNECT_ADDRINUSE: number;
        static CONNECT_NODEV: number;
        static CONNECT_OPNOTSUPP: number;
        static CONNECT_REFUSED: number;
        constructor(options: { message: string; code: number });
    }
    enum NVMEFormatSecureErase {
        NONE,
        USER_DATA,
        CRYPTO,
    }
    enum NVMELBAFormatRelativePerformance {
        UNKNOWN,
        BEST,
        BETTER,
        GOOD,
        DEGRADED,
    }
    enum NVMESanitizeAction {
        EXIT_FAILURE,
        BLOCK_ERASE,
        OVERWRITE,
        CRYPTO_ERASE,
    }
    enum NVMESanitizeStatus {
        NEVER_SANITIZED,
        IN_PROGRESS,
        IN_PROGESS,
        SUCCESS,
        SUCCESS_NO_DEALLOC,
        FAILED,
    }
    enum NVMESelfTestAction {
        NOT_RUNNING,
        SHORT,
        EXTENDED,
        VENDOR_SPECIFIC,
        ABORT,
    }
    enum NVMESelfTestResult {
        NO_ERROR,
        ABORTED,
        CTRL_RESET,
        NS_REMOVED,
        ABORTED_FORMAT,
        FATAL_ERROR,
        UNKNOWN_SEG_FAIL,
        KNOWN_SEG_FAIL,
        ABORTED_UNKNOWN,
        ABORTED_SANITIZE,
    }
    enum NVMETech {
        NVME,
        FABRICS,
    }
    enum NVMETransportType {
        UNSPECIFIED,
        RDMA,
        FC,
        TCP,
        LOOP,
    }
    enum PartAlign {
        NONE,
        MINIMAL,
        OPTIMAL,
    }
    class PartError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAIL: number;
        static INVAL: number;
        static EXISTS: number;
        constructor(options: { message: string; code: number });
    }
    enum PartTableType {
        MSDOS,
        GPT,
        UNDEF,
    }
    enum PartTech {
        MBR,
        GPT,
    }
    enum PartType {
        NORMAL,
        LOGICAL,
        EXTENDED,
        FREESPACE,
        METADATA,
        PROTECTED,
    }
    enum PartTypeReq {
        NORMAL,
        LOGICAL,
        EXTENDED,
        NEXT,
    }
    enum Plugin {
        LVM,
        BTRFS,
        SWAP,
        LOOP,
        CRYPTO,
        MPATH,
        DM,
        MDRAID,
        S390,
        PART,
        FS,
        NVDIMM,
        NVME,
        SMART,
        UNDEF,
    }
    enum SmartATAAttributeFlag {
        PREFAILURE,
        ONLINE,
        PERFORMANCE,
        ERROR_RATE,
        EVENT_COUNT,
        SELF_PRESERVING,
        OTHER,
    }
    enum SmartATAAttributeUnit {
        UNKNOWN,
        NONE,
        MSECONDS,
        SECTORS,
        MKELVIN,
        SMALL_PERCENT,
        PERCENT,
        MB,
    }
    enum SmartATAOfflineDataCollectionCapabilities {
        NOT_SUPPORTED,
        EXEC_OFFLINE_IMMEDIATE,
        OFFLINE_ABORT,
        OFFLINE_SURFACE_SCAN,
        SELF_TEST,
        CONVEYANCE_SELF_TEST,
        SELECTIVE_SELF_TEST,
    }
    enum SmartATAOfflineDataCollectionStatus {
        NEVER_STARTED,
        NO_ERROR,
        IN_PROGRESS,
        SUSPENDED_INTR,
        ABORTED_INTR,
        ABORTED_ERROR,
        VENDOR_SPECIFIC,
        RESERVED,
    }
    enum SmartATASelfTestStatus {
        COMPLETED_NO_ERROR,
        ABORTED_HOST,
        INTR_HOST_RESET,
        ERROR_FATAL,
        ERROR_UNKNOWN,
        ERROR_ELECTRICAL,
        ERROR_SERVO,
        ERROR_READ,
        ERROR_HANDLING,
        IN_PROGRESS,
    }
    class SmartError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static FAILED: number;
        static INVALID_ARGUMENT: number;
        constructor(options: { message: string; code: number });
    }
    enum SmartSCSIBackgroundScanStatus {
        NO_SCANS_ACTIVE,
        SCAN_ACTIVE,
        PRESCAN_ACTIVE,
        HALTED_ERROR_FATAL,
        HALTED_PATTERN_VENDOR_SPECIFIC,
        HALTED_ERROR_PLIST,
        HALTED_VENDOR_SPECIFIC,
        HALTED_TEMPERATURE,
        BMS_TIMER,
    }
    enum SmartSCSIInformationalException {
        NONE,
        ABORTED_COMMAND,
        TEMPERATURE_EXCEEDED,
        ENCLOSURE_DEGRADED,
        BACKGROUND_SELFTEST_FAILED,
        BACKGROUND_PRESCAN_MEDIUM_ERROR,
        BACKGROUND_SCAN_MEDIUM_ERROR,
        NV_CACHE_VOLATILE,
        NV_CACHE_DEGRADED_POWER,
        POWER_LOSS_EXPECTED,
        STATISTICS_NOTIFICATION,
        HIGH_CRITICAL_TEMP,
        LOW_CRITICAL_TEMP,
        HIGH_OPERATING_TEMP,
        LOW_OPERATING_TEMP,
        HIGH_CRITICAL_HUMIDITY,
        LOW_CRITICAL_HUMIDITY,
        HIGH_OPERATING_HUMIDITY,
        LOW_OPERATING_HUMIDITY,
        MICROCODE_SECURITY_RISK,
        MICROCODE_SIGNATURE_VALIDATION_FAILURE,
        PHYSICAL_ELEMENT_STATUS_CHANGE,
        FAILURE_PREDICTION_THRESH,
        MEDIA_FAILURE_PREDICTION_THRESH,
        LOGICAL_UNIT_FAILURE_PREDICTION_THRESH,
        SPARE_EXHAUSTION_PREDICTION_THRESH,
        HARDWARE_IMPENDING_FAILURE,
        CONTROLLER_IMPENDING_FAILURE,
        DATA_CHANNEL_IMPENDING_FAILURE,
        SERVO_IMPENDING_FAILURE,
        SPINDLE_IMPENDING_FAILURE,
        FIRMWARE_IMPENDING_FAILURE,
        MEDIA_ENDURANCE_LIMIT,
        UNSPECIFIED,
    }
    enum SmartSelfTestOp {
        ABORT,
        OFFLINE,
        SHORT,
        LONG,
        CONVEYANCE,
    }
    enum SmartTech {
        ATA,
        SCSI,
    }
    class SwapError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static TECH_UNAVAIL: number;
        static UNKNOWN_STATE: number;
        static ACTIVATE: number;
        static ACTIVATE_OLD: number;
        static ACTIVATE_SUSPEND: number;
        static ACTIVATE_UNKNOWN: number;
        static ACTIVATE_PAGESIZE: number;
        static LABEL_INVALID: number;
        static UUID_INVALID: number;
        constructor(options: { message: string; code: number });
    }
    enum SwapTech {
        SWAP_TECH_SWAP,
    }
    class UtilsDBusError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAIL: number;
        static NOEXIST: number;
        constructor(options: { message: string; code: number });
    }
    class UtilsDevUtilsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UTILS_DEV_UTILS_ERROR_FAILED: number;
        constructor(options: { message: string; code: number });
    }
    class UtilsExecError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static NOOUT: number;
        static INVAL_VER: number;
        static UTIL_UNAVAILABLE: number;
        static UTIL_UNKNOWN_VER: number;
        static UTIL_LOW_VER: number;
        static UTIL_CHECK_ERROR: number;
        static UTIL_FEATURE_CHECK_ERROR: number;
        static UTIL_FEATURE_UNAVAILABLE: number;
        constructor(options: { message: string; code: number });
    }
    class UtilsModuleError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static KMOD_INIT_FAIL: number;
        static FAIL: number;
        static NOEXIST: number;
        static MODULE_CHECK_ERROR: number;
        static INVALID_PLATFORM: number;
        constructor(options: { message: string; code: number });
    }
    enum UtilsProgStatus {
        STARTED,
        PROGRESS,
        FINISHED,
    }
    const BTRFS_MAIN_VOLUME_ID: number;
    const BTRFS_MIN_MEMBER_SIZE: number;
    const MD_CHUNK_SIZE: number;
    const MD_SUPERBLOCK_SIZE: number;
    const UTILS_LOG_ALERT: number;
    const UTILS_LOG_CRIT: number;
    const UTILS_LOG_DEBUG: number;
    const UTILS_LOG_EMERG: number;
    const UTILS_LOG_ERR: number;
    const UTILS_LOG_INFO: number;
    const UTILS_LOG_NOTICE: number;
    const UTILS_LOG_WARNING: number;
    function btrfs_add_device(mountpoint: string, device: string, extra: ExtraArg[] | null): boolean;
    function btrfs_change_label(mountpoint: string, label: string): boolean;
    function btrfs_check(device: string, extra: ExtraArg[] | null): boolean;
    function btrfs_create_snapshot(source: string, dest: string, ro: boolean, extra: ExtraArg[] | null): boolean;
    function btrfs_create_subvolume(mountpoint: string, name: string, extra: ExtraArg[] | null): boolean;
    function btrfs_create_volume(devices: string[], label: string | null, data_level: string | null, md_level: string | null, extra: ExtraArg[] | null): boolean;
    function btrfs_delete_subvolume(mountpoint: string, name: string, extra: ExtraArg[] | null): boolean;
    function btrfs_delete_subvolume_recursive(mountpoint: string, name: string, recursive: boolean, extra: ExtraArg[] | null): boolean;
    function btrfs_device_stats(mountpoint: string): BtrfsDeviceStats[];
    function btrfs_error_quark(): GLib.Quark;
    function btrfs_filesystem_info(device: string): BtrfsFilesystemInfo;
    function btrfs_get_default_subvolume_id(mountpoint: string): number;
    function btrfs_is_tech_avail(tech: BtrfsTech, mode: bigint | number): boolean;
    function btrfs_list_devices(device: string): BtrfsDeviceInfo[];
    function btrfs_list_subvolumes(mountpoint: string, snapshots_only: boolean): BtrfsSubvolumeInfo[];
    function btrfs_mkfs(devices: string[], label: string | null, data_level: string | null, md_level: string | null, extra: ExtraArg[] | null): boolean;
    function btrfs_remove_device(mountpoint: string, device: string, extra: ExtraArg[] | null): boolean;
    function btrfs_repair(device: string, extra: ExtraArg[] | null): boolean;
    function btrfs_resize(mountpoint: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function btrfs_set_default_subvolume(mountpoint: string, subvol_id: bigint | number, extra: ExtraArg[] | null): boolean;
    function crypto_bitlk_close(bitlk_device: string): boolean;
    function crypto_bitlk_info(device: string): CryptoBITLKInfo;
    function crypto_bitlk_open(device: string, name: string, context: CryptoKeyslotContext, read_only: boolean): boolean;
    function crypto_bitlk_open_flags(device: string, name: string, context: CryptoKeyslotContext, flags: CryptoOpenFlags): boolean;
    function crypto_device_is_luks(device: string): boolean;
    function crypto_device_seems_encrypted(device: string): boolean;
    function crypto_error_quark(): GLib.Quark;
    function crypto_escrow_device(device: string, passphrase: string, cert_data: number[], directory: string, backup_passphrase: string | null): boolean;
    function crypto_fvault2_close(fvault2_device: string): boolean;
    function crypto_fvault2_open(device: string, name: string, context: CryptoKeyslotContext, read_only: boolean): boolean;
    function crypto_fvault2_open_flags(device: string, name: string, context: CryptoKeyslotContext, flags: CryptoOpenFlags): boolean;
    function crypto_generate_backup_passphrase(): string;
    function crypto_integrity_close(integrity_device: string): boolean;
    function crypto_integrity_format(device: string, algorithm: string, wipe: boolean, context: CryptoKeyslotContext | null, extra: CryptoIntegrityExtra | null): boolean;
    function crypto_integrity_info(device: string): CryptoIntegrityInfo;
    function crypto_integrity_open(device: string, name: string, algorithm: string, context: CryptoKeyslotContext | null, flags: CryptoIntegrityOpenFlags, extra: CryptoIntegrityExtra | null): boolean;
    function crypto_is_tech_avail(tech: CryptoTech, mode: bigint | number): boolean;
    function crypto_keyring_add_key(key_desc: string, key_data: Uint8Array | string): boolean;
    function crypto_luks_add_key(device: string, context: CryptoKeyslotContext, ncontext: CryptoKeyslotContext): boolean;
    function crypto_luks_change_key(device: string, context: CryptoKeyslotContext, ncontext: CryptoKeyslotContext): boolean;
    function crypto_luks_check_label(label: string | null, subsystem: string | null): boolean;
    function crypto_luks_close(luks_device: string): boolean;
    function crypto_luks_convert(device: string, target_version: CryptoLUKSVersion): boolean;
    function crypto_luks_format(device: string, cipher: string | null, key_size: bigint | number, context: CryptoKeyslotContext, min_entropy: bigint | number, luks_version: CryptoLUKSVersion, extra: CryptoLUKSExtra | null): boolean;
    function crypto_luks_header_backup(device: string, backup_file: string): boolean;
    function crypto_luks_header_restore(device: string, backup_file: string): boolean;
    function crypto_luks_info(device: string): CryptoLUKSInfo;
    function crypto_luks_kill_slot(device: string, slot: number): boolean;
    function crypto_luks_open(device: string, name: string, context: CryptoKeyslotContext, read_only: boolean): boolean;
    function crypto_luks_open_flags(device: string, name: string, context: CryptoKeyslotContext, flags: CryptoOpenFlags): boolean;
    function crypto_luks_remove_key(device: string, context: CryptoKeyslotContext): boolean;
    function crypto_luks_resize(luks_device: string, size: bigint | number, context: CryptoKeyslotContext | null): boolean;
    function crypto_luks_resume(luks_device: string, context: CryptoKeyslotContext): boolean;
    function crypto_luks_set_label(device: string, label: string | null, subsystem: string | null): boolean;
    function crypto_luks_set_persistent_flags(device: string, flags: CryptoLUKSPersistentFlags): boolean;
    function crypto_luks_set_uuid(device: string, uuid: string | null): boolean;
    function crypto_luks_status(luks_device: string): string;
    function crypto_luks_suspend(luks_device: string): boolean;
    function crypto_luks_token_info(device: string): CryptoLUKSTokenInfo[];
    function crypto_opal_format(device: string, cipher: string | null, key_size: bigint | number, context: CryptoKeyslotContext, min_entropy: bigint | number, hw_encryption: CryptoLUKSHWEncryptionType, opal_context: CryptoKeyslotContext, extra: CryptoLUKSExtra | null): boolean;
    function crypto_opal_is_supported(device: string): boolean;
    function crypto_opal_reset_device(device: string, context: CryptoKeyslotContext): boolean;
    function crypto_opal_wipe_device(device: string, context: CryptoKeyslotContext): boolean;
    function crypto_tc_close(tc_device: string): boolean;
    function crypto_tc_open(device: string, name: string, context: CryptoKeyslotContext | null, keyfiles: string[] | null, hidden: boolean, system: boolean, veracrypt: boolean, veracrypt_pim: number, read_only: boolean): boolean;
    function crypto_tc_open_flags(device: string, name: string, context: CryptoKeyslotContext | null, keyfiles: string[] | null, hidden: boolean, system: boolean, veracrypt: boolean, veracrypt_pim: number, flags: CryptoOpenFlags): boolean;
    function dm_create_linear(map_name: string, device: string, length: bigint | number, uuid: string | null): boolean;
    function dm_error_quark(): GLib.Quark;
    function dm_get_subsystem_from_name(device_name: string): string;
    function dm_is_tech_avail(tech: DMTech, mode: bigint | number): boolean;
    function dm_map_exists(map_name: string, live_only: boolean, active_only: boolean): boolean;
    function dm_name_from_node(dm_node: string): string;
    function dm_node_from_name(map_name: string): string;
    function dm_remove(map_name: string): boolean;
    function ensure_init(require_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): boolean;
    function extra_arg_list_free(args: ExtraArg[] | null): void;
    function fs_btrfs_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_btrfs_check_label(label: string): boolean;
    function fs_btrfs_check_uuid(uuid: string): boolean;
    function fs_btrfs_get_info(mpoint: string): FSBtrfsInfo;
    function fs_btrfs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_btrfs_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_btrfs_resize(mpoint: string, new_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_btrfs_set_label(mpoint: string, label: string): boolean;
    function fs_btrfs_set_uuid(device: string, uuid: string | null): boolean;
    function fs_can_check(type: string): [boolean, string];
    function fs_can_get_free_space(type: string): [boolean, string];
    function fs_can_get_info(type: string): [boolean, string];
    function fs_can_get_min_size(type: string): [boolean, string];
    function fs_can_get_size(type: string): [boolean, string];
    function fs_can_mkfs(type: string): [boolean, FSMkfsOptionsFlags, string];
    function fs_can_repair(type: string): [boolean, string];
    function fs_can_resize(type: string): [boolean, FSResizeFlags, string];
    function fs_can_set_label(type: string): [boolean, string];
    function fs_can_set_uuid(type: string): [boolean, string];
    function fs_check(device: string, fstype: string | null): boolean;
    function fs_check_label(fstype: string, label: string): boolean;
    function fs_check_uuid(fstype: string, uuid: string): boolean;
    function fs_clean(device: string, force: boolean): boolean;
    function fs_error_quark(): GLib.Quark;
    function fs_exfat_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_exfat_check_label(label: string): boolean;
    function fs_exfat_check_uuid(uuid: string): boolean;
    function fs_exfat_get_info(device: string): FSExfatInfo;
    function fs_exfat_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_exfat_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_exfat_set_label(device: string, label: string): boolean;
    function fs_exfat_set_uuid(device: string, uuid: string | null): boolean;
    function fs_ext2_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext2_check_label(label: string): boolean;
    function fs_ext2_check_uuid(uuid: string): boolean;
    function fs_ext2_get_info(device: string): FSExt2Info;
    function fs_ext2_get_min_size(device: string): number;
    function fs_ext2_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext2_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
    function fs_ext2_resize(device: string, new_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_ext2_set_label(device: string, label: string): boolean;
    function fs_ext2_set_uuid(device: string, uuid: string | null): boolean;
    function fs_ext3_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext3_check_label(label: string): boolean;
    function fs_ext3_check_uuid(uuid: string): boolean;
    function fs_ext3_get_info(device: string): FSExt3Info;
    function fs_ext3_get_min_size(device: string): number;
    function fs_ext3_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext3_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
    function fs_ext3_resize(device: string, new_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_ext3_set_label(device: string, label: string): boolean;
    function fs_ext3_set_uuid(device: string, uuid: string | null): boolean;
    function fs_ext4_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext4_check_label(label: string): boolean;
    function fs_ext4_check_uuid(uuid: string): boolean;
    function fs_ext4_get_info(device: string): FSExt4Info;
    function fs_ext4_get_min_size(device: string): number;
    function fs_ext4_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ext4_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
    function fs_ext4_resize(device: string, new_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_ext4_set_label(device: string, label: string): boolean;
    function fs_ext4_set_uuid(device: string, uuid: string | null): boolean;
    function fs_f2fs_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_f2fs_check_label(label: string): boolean;
    function fs_f2fs_get_info(device: string): FSF2FSInfo;
    function fs_f2fs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_f2fs_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_f2fs_resize(device: string, new_size: bigint | number, safe: boolean, extra: ExtraArg[] | null): boolean;
    function fs_features(fstype: string): FSFeatures;
    function fs_freeze(mountpoint: string): boolean;
    function fs_get_free_space(device: string, fstype: string | null): number;
    function fs_get_fstype(device: string): string;
    function fs_get_min_size(device: string, fstype: string | null): number;
    function fs_get_mountpoint(device: string): string;
    function fs_get_size(device: string, fstype: string | null): number;
    function fs_is_mountpoint(path: string): boolean;
    function fs_is_tech_avail(tech: FSTech, mode: bigint | number): boolean;
    function fs_mkfs(device: string, fstype: string, options: FSMkfsOptions, extra: ExtraArg[] | null): boolean;
    function fs_mount(device: string | null, mountpoint: string | null, fstype: string | null, options: string | null, extra: ExtraArg[] | null): boolean;
    function fs_nilfs2_check_label(label: string): boolean;
    function fs_nilfs2_check_uuid(uuid: string): boolean;
    function fs_nilfs2_get_info(device: string): FSNILFS2Info;
    function fs_nilfs2_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_nilfs2_resize(device: string, new_size: bigint | number): boolean;
    function fs_nilfs2_set_label(device: string, label: string): boolean;
    function fs_nilfs2_set_uuid(device: string, uuid: string | null): boolean;
    function fs_ntfs_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ntfs_check_label(label: string): boolean;
    function fs_ntfs_check_uuid(uuid: string): boolean;
    function fs_ntfs_get_info(device: string): FSNtfsInfo;
    function fs_ntfs_get_min_size(device: string): number;
    function fs_ntfs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ntfs_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_ntfs_resize(device: string, new_size: bigint | number): boolean;
    function fs_ntfs_set_label(device: string, label: string): boolean;
    function fs_ntfs_set_uuid(device: string, uuid: string | null): boolean;
    function fs_repair(device: string, fstype: string | null): boolean;
    function fs_resize(device: string, new_size: bigint | number, fstype: string | null): boolean;
    function fs_set_label(device: string, label: string, fstype: string | null): boolean;
    function fs_set_uuid(device: string, uuid: string | null, fstype: string | null): boolean;
    function fs_supported_filesystems(): string[];
    function fs_udf_check_label(label: string): boolean;
    function fs_udf_check_uuid(uuid: string): boolean;
    function fs_udf_get_info(device: string): FSUdfInfo;
    function fs_udf_mkfs(device: string, media_type: string | null, revision: string | null, block_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_udf_set_label(device: string, label: string): boolean;
    function fs_udf_set_uuid(device: string, uuid: string | null): boolean;
    function fs_unfreeze(mountpoint: string): boolean;
    function fs_unmount(spec: string, lazy: boolean, force: boolean, extra: ExtraArg[] | null): boolean;
    function fs_vfat_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_vfat_check_label(label: string): boolean;
    function fs_vfat_check_uuid(uuid: string): boolean;
    function fs_vfat_get_info(device: string): FSVfatInfo;
    function fs_vfat_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_vfat_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_vfat_resize(device: string, new_size: bigint | number): boolean;
    function fs_vfat_set_label(device: string, label: string): boolean;
    function fs_vfat_set_uuid(device: string, uuid: string | null): boolean;
    function fs_wipe(device: string, all: boolean, force: boolean): boolean;
    function fs_xfs_check(device: string, extra: ExtraArg[] | null): boolean;
    function fs_xfs_check_label(label: string): boolean;
    function fs_xfs_check_uuid(uuid: string): boolean;
    function fs_xfs_get_info(device: string): FSXfsInfo;
    function fs_xfs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
    function fs_xfs_repair(device: string, extra: ExtraArg[] | null): boolean;
    function fs_xfs_resize(mpoint: string, new_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function fs_xfs_set_label(device: string, label: string): boolean;
    function fs_xfs_set_uuid(device: string, uuid: string | null): boolean;
    function get_available_plugin_names(): string[];
    function get_plugin_name(plugin: Plugin): string;
    function get_plugin_soname(plugin: Plugin): string;
    function init(require_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): boolean;
    function is_initialized(): boolean;
    function is_plugin_available(plugin: Plugin): boolean;
    function loop_error_quark(): GLib.Quark;
    function loop_get_loop_name(file: string): string;
    function loop_info(loop: string): LoopInfo;
    function loop_is_tech_avail(tech: LoopTech, mode: bigint | number): boolean;
    function loop_set_autoclear(loop: string, autoclear: boolean): boolean;
    function loop_set_capacity(loop: string): boolean;
    function loop_setup(file: string, offset: bigint | number, size: bigint | number, read_only: boolean, part_scan: boolean, sector_size: bigint | number): [boolean, string];
    function loop_setup_from_fd(fd: number, offset: bigint | number, size: bigint | number, read_only: boolean, part_scan: boolean, sector_size: bigint | number): [boolean, string];
    function loop_teardown(loop: string): boolean;
    function lvm_add_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
    function lvm_add_pv_tags(device: string, tags: string[]): boolean;
    function lvm_add_vg_tags(vg_name: string, tags: string[]): boolean;
    function lvm_cache_attach(vg_name: string, data_lv: string, cache_pool_lv: string, extra: ExtraArg[] | null): boolean;
    function lvm_cache_create_cached_lv(vg_name: string, lv_name: string, data_size: bigint | number, cache_size: bigint | number, md_size: bigint | number, mode: LVMCacheMode, flags: LVMCachePoolFlags, slow_pvs: string[], fast_pvs: string[]): boolean;
    function lvm_cache_create_pool(vg_name: string, pool_name: string, pool_size: bigint | number, md_size: bigint | number, mode: LVMCacheMode, flags: LVMCachePoolFlags, fast_pvs: string[]): boolean;
    function lvm_cache_detach(vg_name: string, cached_lv: string, destroy: boolean, extra: ExtraArg[] | null): boolean;
    function lvm_cache_get_default_md_size(cache_size: bigint | number): number;
    function lvm_cache_get_mode_from_str(mode_str: string): LVMCacheMode;
    function lvm_cache_get_mode_str(mode: LVMCacheMode): string;
    function lvm_cache_pool_convert(vg_name: string, data_lv: string, metadata_lv: string, name: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_cache_pool_name(vg_name: string, cached_lv: string): string;
    function lvm_cache_stats(vg_name: string, cached_lv: string): LVMCacheStats;
    function lvm_config_get(section: string | null, setting: string | null, type: string, values_only: boolean, global_config: boolean, extra: ExtraArg[] | null): string;
    function lvm_delete_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
    function lvm_delete_pv_tags(device: string, tags: string[]): boolean;
    function lvm_delete_vg_tags(vg_name: string, tags: string[]): boolean;
    function lvm_devices_add(device: string, devices_file: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_devices_delete(device: string, devices_file: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_error_quark(): GLib.Quark;
    function lvm_get_devices_filter(): string[];
    function lvm_get_global_config(): string;
    function lvm_get_lv_physical_size(lv_size: bigint | number, pe_size: bigint | number): number;
    function lvm_get_max_lv_size(): number;
    function lvm_get_supported_pe_sizes(): number[];
    function lvm_get_thpool_meta_size(size: bigint | number, chunk_size: bigint | number, n_snapshots: bigint | number): number;
    function lvm_get_thpool_padding(size: bigint | number, pe_size: bigint | number, included: boolean): number;
    function lvm_get_vdo_compression_state_str(state: LVMVDOCompressionState): string;
    function lvm_get_vdo_index_state_str(state: LVMVDOIndexState): string;
    function lvm_get_vdo_operating_mode_str(mode: LVMVDOOperatingMode): string;
    function lvm_get_vdo_write_policy_from_str(policy_str: string): LVMVDOWritePolicy;
    function lvm_get_vdo_write_policy_str(policy: LVMVDOWritePolicy): string;
    function lvm_is_supported_pe_size(size: bigint | number): boolean;
    function lvm_is_tech_avail(tech: LVMTech, mode: bigint | number): boolean;
    function lvm_is_valid_thpool_chunk_size(size: bigint | number, discard: boolean): boolean;
    function lvm_is_valid_thpool_md_size(size: bigint | number): boolean;
    function lvm_lvactivate(vg_name: string, lv_name: string, ignore_skip: boolean, shared: boolean, extra: ExtraArg[] | null): boolean;
    function lvm_lvcreate(vg_name: string, lv_name: string, size: bigint | number, type: string | null, pv_list: string[] | null, extra: ExtraArg[] | null): boolean;
    function lvm_lvdeactivate(vg_name: string, lv_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_lvinfo(vg_name: string, lv_name: string): LVMLVdata;
    function lvm_lvinfo_tree(vg_name: string, lv_name: string): LVMLVdata;
    function lvm_lvorigin(vg_name: string, lv_name: string): string;
    function lvm_lvremove(vg_name: string, lv_name: string, force: boolean, extra: ExtraArg[] | null): boolean;
    function lvm_lvrename(vg_name: string, lv_name: string, new_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_lvrepair(vg_name: string, lv_name: string, pv_list: string[], extra: ExtraArg[] | null): boolean;
    function lvm_lvresize(vg_name: string, lv_name: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_lvs(vg_name: string | null): LVMLVdata[];
    function lvm_lvs_tree(vg_name: string | null): LVMLVdata[];
    function lvm_lvsnapshotcreate(vg_name: string, origin_name: string, snapshot_name: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_lvsnapshotmerge(vg_name: string, snapshot_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_pvcreate(device: string, data_alignment: bigint | number, metadata_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_pvinfo(device: string): LVMPVdata;
    function lvm_pvmove(src: string, dest: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_pvremove(device: string, extra: ExtraArg[] | null): boolean;
    function lvm_pvresize(device: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_pvs(): LVMPVdata[];
    function lvm_pvscan(device: string | null, update_cache: boolean, extra: ExtraArg[] | null): boolean;
    function lvm_round_size_to_pe(size: bigint | number, pe_size: bigint | number, roundup: boolean): number;
    function lvm_set_devices_filter(devices: string[] | null): boolean;
    function lvm_set_global_config(new_config: string | null): boolean;
    function lvm_thlvcreate(vg_name: string, pool_name: string, lv_name: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_thlvpoolname(vg_name: string, lv_name: string): string;
    function lvm_thpool_convert(vg_name: string, data_lv: string, metadata_lv: string, name: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_thpoolcreate(vg_name: string, lv_name: string, size: bigint | number, md_size: bigint | number, chunk_size: bigint | number, profile: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_thsnapshotcreate(vg_name: string, origin_name: string, snapshot_name: string, pool_name: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_disable_compression(vg_name: string, pool_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_disable_deduplication(vg_name: string, pool_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_enable_compression(vg_name: string, pool_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_enable_deduplication(vg_name: string, pool_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_get_stats(vg_name: string, pool_name: string): LVMVDOStats;
    function lvm_vdo_get_stats_full(vg_name: string, pool_name: string): { [key: string]: string };
    function lvm_vdo_info(vg_name: string, lv_name: string): LVMVDOPooldata;
    function lvm_vdo_pool_convert(vg_name: string, pool_lv: string, name: string | null, virtual_size: bigint | number, index_memory: bigint | number, compression: boolean, deduplication: boolean, write_policy: LVMVDOWritePolicy, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_pool_create(vg_name: string, lv_name: string, pool_name: string | null, data_size: bigint | number, virtual_size: bigint | number, index_memory: bigint | number, compression: boolean, deduplication: boolean, write_policy: LVMVDOWritePolicy, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_pool_resize(vg_name: string, pool_name: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_vdo_resize(vg_name: string, lv_name: string, size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_vdolvpoolname(vg_name: string, lv_name: string): string;
    function lvm_vgactivate(vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vgcfgbackup(vg_name: string, backup_file: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_vgcfgrestore(vg_name: string, backup_file: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_vgcreate(name: string, pv_list: string[], pe_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function lvm_vgdeactivate(vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vgextend(vg_name: string, device: string, extra: ExtraArg[] | null): boolean;
    function lvm_vginfo(vg_name: string): LVMVGdata;
    function lvm_vglock_start(vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vglock_stop(vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vgreduce(vg_name: string, device: string | null, extra: ExtraArg[] | null): boolean;
    function lvm_vgremove(vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vgrename(old_vg_name: string, new_vg_name: string, extra: ExtraArg[] | null): boolean;
    function lvm_vgs(): LVMVGdata[];
    function lvm_writecache_attach(vg_name: string, data_lv: string, cache_lv: string, extra: ExtraArg[] | null): boolean;
    function lvm_writecache_create_cached_lv(vg_name: string, lv_name: string, data_size: bigint | number, cache_size: bigint | number, slow_pvs: string[], fast_pvs: string[]): boolean;
    function lvm_writecache_detach(vg_name: string, cached_lv: string, destroy: boolean, extra: ExtraArg[] | null): boolean;
    function md_activate(raid_spec: string | null, members: string[] | null, uuid: string | null, start_degraded: boolean, extra: ExtraArg[] | null): boolean;
    function md_add(raid_spec: string, device: string, raid_devs: bigint | number, extra: ExtraArg[] | null): boolean;
    function md_canonicalize_uuid(uuid: string): string;
    function md_create(device_name: string, level: string, disks: string[], spares: bigint | number, version: string | null, bitmap: string | null, chunk_size: bigint | number, extra: ExtraArg[] | null): boolean;
    function md_deactivate(raid_spec: string): boolean;
    function md_denominate(device: string): boolean;
    function md_destroy(device: string): boolean;
    function md_detail(raid_spec: string): MDDetailData;
    function md_error_quark(): GLib.Quark;
    function md_examine(device: string): MDExamineData;
    function md_get_bitmap_location(raid_spec: string): string;
    function md_get_md_uuid(uuid: string): string;
    function md_get_status(raid_spec: string): string;
    function md_get_superblock_size(member_size: bigint | number, version: string | null): number;
    function md_is_tech_avail(tech: MDTech, mode: bigint | number): boolean;
    function md_name_from_node(node: string): string;
    function md_node_from_name(name: string): string;
    function md_nominate(device: string): boolean;
    function md_remove(raid_spec: string, device: string, fail: boolean, extra: ExtraArg[] | null): boolean;
    function md_request_sync_action(raid_spec: string, action: string): boolean;
    function md_run(raid_spec: string): boolean;
    function md_set_bitmap_location(raid_spec: string, location: string): boolean;
    function mpath_error_quark(): GLib.Quark;
    function mpath_flush_mpaths(): boolean;
    function mpath_get_mpath_members(): string[];
    function mpath_is_mpath_member(device: string): boolean;
    function mpath_is_tech_avail(tech: MpathTech, mode: bigint | number): boolean;
    function mpath_set_friendly_names(enabled: boolean): boolean;
    function nvdimm_error_quark(): GLib.Quark;
    function nvdimm_is_tech_avail(tech: NVDIMMTech, mode: bigint | number): boolean;
    function nvdimm_list_namespaces(bus: string | null, region: string | null, idle: boolean, extra: ExtraArg[] | null): NVDIMMNamespaceInfo[];
    function nvdimm_namespace_disable(namespace: string, extra: ExtraArg[] | null): boolean;
    function nvdimm_namespace_enable(namespace: string, extra: ExtraArg[] | null): boolean;
    function nvdimm_namespace_get_devname(device: string): string;
    function nvdimm_namespace_get_mode_from_str(mode_str: string): NVDIMMNamespaceMode;
    function nvdimm_namespace_get_mode_str(mode: NVDIMMNamespaceMode): string;
    function nvdimm_namespace_get_supported_sector_sizes(mode: NVDIMMNamespaceMode): number[];
    function nvdimm_namespace_info(namespace: string, extra: ExtraArg[] | null): NVDIMMNamespaceInfo;
    function nvdimm_namespace_reconfigure(namespace: string, mode: NVDIMMNamespaceMode, force: boolean, extra: ExtraArg[] | null): boolean;
    function nvme_connect(subsysnqn: string, transport: string, transport_addr: string | null, transport_svcid: string | null, host_traddr: string | null, host_iface: string | null, host_nqn: string | null, host_id: string | null, extra: ExtraArg[] | null): boolean;
    function nvme_device_self_test(device: string, action: NVMESelfTestAction): boolean;
    function nvme_disconnect(subsysnqn: string): boolean;
    function nvme_disconnect_by_path(path: string): boolean;
    function nvme_error_quark(): GLib.Quark;
    function nvme_find_ctrls_for_ns(ns_sysfs_path: string, subsysnqn: string | null, host_nqn: string | null, host_id: string | null): string[];
    function nvme_find_namespaces_for_ctrl(ctrl_sysfs_path: string, subsysnqn: string | null, host_nqn: string | null, host_id: string | null): string[];
    function nvme_format(device: string, lba_data_size: number, metadata_size: number, secure_erase: NVMEFormatSecureErase): boolean;
    function nvme_generate_host_nqn(): string;
    function nvme_get_controller_info(device: string): NVMEControllerInfo;
    function nvme_get_error_log_entries(device: string): NVMEErrorLogEntry[];
    function nvme_get_host_id(): string;
    function nvme_get_host_nqn(): string;
    function nvme_get_namespace_info(device: string): NVMENamespaceInfo;
    function nvme_get_sanitize_log(device: string): NVMESanitizeLog;
    function nvme_get_self_test_log(device: string): NVMESelfTestLog;
    function nvme_get_smart_log(device: string): NVMESmartLog;
    function nvme_is_tech_avail(tech: NVMETech, mode: bigint | number): boolean;
    function nvme_sanitize(device: string, action: NVMESanitizeAction, no_dealloc: boolean, overwrite_pass_count: number, overwrite_pattern: number, overwrite_invert_pattern: boolean): boolean;
    function nvme_self_test_result_to_string(result: NVMESelfTestResult): string;
    function nvme_set_host_id(host_id: string): boolean;
    function nvme_set_host_nqn(host_nqn: string): boolean;
    function part_create_part(disk: string, type: PartTypeReq, start: bigint | number, size: bigint | number, align: PartAlign): PartSpec;
    function part_create_table(disk: string, type: PartTableType, ignore_existing: boolean): boolean;
    function part_delete_part(disk: string, part: string): boolean;
    function part_error_quark(): GLib.Quark;
    function part_get_best_free_region(disk: string, type: PartType, size: bigint | number): PartSpec;
    function part_get_disk_free_regions(disk: string): PartSpec[];
    function part_get_disk_parts(disk: string): PartSpec[];
    function part_get_disk_spec(disk: string): PartDiskSpec;
    function part_get_part_by_pos(disk: string, position: bigint | number): PartSpec;
    function part_get_part_spec(disk: string, part: string): PartSpec;
    function part_get_part_table_type_str(type: PartTableType): string;
    function part_get_type_str(type: PartType): string;
    function part_is_tech_avail(tech: PartTech, mode: bigint | number): boolean;
    function part_resize_part(disk: string, part: string, size: bigint | number, align: PartAlign): boolean;
    function part_set_part_attributes(disk: string, part: string, attrs: bigint | number): boolean;
    function part_set_part_bootable(disk: string, part: string, bootable: boolean): boolean;
    function part_set_part_id(disk: string, part: string, part_id: string): boolean;
    function part_set_part_name(disk: string, part: string, name: string): boolean;
    function part_set_part_type(disk: string, part: string, type_guid: string): boolean;
    function part_set_part_uuid(disk: string, part: string, uuid: string): boolean;
    function reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func: UtilsLogFunc | null): boolean;
    function smart_ata_get_info(device: string, extra: ExtraArg[] | null): SmartATA;
    function smart_ata_get_info_from_data(data: Uint8Array | string): SmartATA;
    function smart_device_self_test(device: string, operation: SmartSelfTestOp, extra: ExtraArg[] | null): boolean;
    function smart_error_quark(): GLib.Quark;
    function smart_is_tech_avail(tech: SmartTech, mode: bigint | number): boolean;
    function smart_scsi_get_info(device: string, extra: ExtraArg[] | null): SmartSCSI;
    function smart_set_enabled(device: string, enabled: boolean, extra: ExtraArg[] | null): boolean;
    function swap_check_label(label: string): boolean;
    function swap_check_uuid(uuid: string): boolean;
    function swap_error_quark(): GLib.Quark;
    function swap_is_tech_avail(tech: SwapTech, mode: bigint | number): boolean;
    function swap_mkswap(device: string, label: string | null, uuid: string | null, extra: ExtraArg[] | null): boolean;
    function swap_set_label(device: string, label: string): boolean;
    function swap_set_uuid(device: string, uuid: string): boolean;
    function swap_swapoff(device: string): boolean;
    function swap_swapon(device: string, priority: number): boolean;
    function swap_swapstatus(device: string): boolean;
    function try_init(request_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): [boolean, string[] | null];
    function try_reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func: UtilsLogFunc | null): [boolean, string[] | null];
    function utils_check_linux_version(major: number, minor: number, micro: number): number;
    function utils_check_util_version(util: string, version: string | null, version_arg: string | null, version_regexp: string | null): boolean;
    function utils_dbus_service_available(connection: Gio.DBusConnection | null, bus_type: Gio.BusType, bus_name: string, obj_prefix: string): boolean;
    function utils_echo_str_to_file(str: string, file_path: string): boolean;
    function utils_exec_and_capture_output(argv: string[], extra: ExtraArg[] | null): [boolean, string];
    function utils_exec_and_capture_output_no_progress(argv: string[], extra: ExtraArg[] | null): [boolean, string, string, number];
    function utils_exec_and_report_error(argv: string[], extra: ExtraArg[] | null): boolean;
    function utils_exec_and_report_error_no_progress(argv: string[], extra: ExtraArg[] | null): boolean;
    function utils_exec_and_report_progress(argv: string[], extra: ExtraArg[] | null, prog_extract: UtilsProgExtract | null): [boolean, number];
    function utils_exec_and_report_status_error(argv: string[], extra: ExtraArg[] | null): [boolean, number];
    function utils_exec_with_input(argv: string[], input: string | null, extra: ExtraArg[] | null): boolean;
    function utils_get_device_symlinks(dev_spec: string): string[];
    function utils_get_linux_version(): UtilsLinuxVersion;
    function utils_get_next_task_id(): number;
    function utils_have_kernel_module(module_name: string): boolean;
    function utils_init_logging(new_log_func: UtilsLogFunc | null): boolean;
    function utils_init_prog_reporting(new_prog_func: UtilsProgFunc | null): boolean;
    function utils_init_prog_reporting_thread(new_prog_func: UtilsProgFunc | null): boolean;
    function utils_load_kernel_module(module_name: string, options: string | null): boolean;
    function utils_log(level: number, msg: string): void;
    function utils_log_stdout(level: number, msg: string): void;
    function utils_log_task_status(task_id: bigint | number, msg: string): void;
    function utils_mute_prog_reporting_thread(): boolean;
    function utils_prog_reporting_initialized(): boolean;
    function utils_report_finished(task_id: bigint | number, msg: string): void;
    function utils_report_progress(task_id: bigint | number, completion: bigint | number, msg: string): void;
    function utils_report_started(msg: string): number;
    function utils_resolve_device(dev_spec: string): string;
    function utils_set_log_level(level: number): void;
    function utils_unload_kernel_module(module_name: string): boolean;
    function utils_version_cmp(ver_string1: string, ver_string2: string): number;
    interface UtilsLogFunc {
        (level: number, msg: string): void;
    }
    interface UtilsProgExtract {
        (line: string): boolean;
    }
    interface UtilsProgFunc {
        (task_id: number, status: UtilsProgStatus, completion: number, msg: string | null): void;
    }
    enum BtrfsTechMode {
        CREATE,
        DELETE,
        MODIFY,
        QUERY,
        DELETE_RECURSIVE,
    }
    enum CryptoIntegrityOpenFlags {
        NO_JOURNAL,
        RECOVERY,
        NO_JOURNAL_BITMAP,
        RECALCULATE,
        RECALCULATE_RESET,
        ALLOW_DISCARDS,
    }
    enum CryptoLUKSPersistentFlags {
        ALLOW_DISCARDS,
        SAME_CPU_CRYPT,
        SUBMIT_FROM_CRYPT_CPUS,
        NO_JOURNAL,
        NO_READ_WORKQUEUE,
        NO_WRITE_WORKQUEUE,
        HIGH_PRIORITY,
    }
    enum CryptoOpenFlags {
        ALLOW_DISCARDS,
        READONLY,
    }
    enum CryptoTechMode {
        CREATE,
        OPEN_CLOSE,
        QUERY,
        ADD_KEY,
        REMOVE_KEY,
        RESIZE,
        SUSPEND_RESUME,
        BACKUP_RESTORE,
        MODIFY,
    }
    enum DMTechMode {
        CREATE_ACTIVATE,
        REMOVE_DEACTIVATE,
        QUERY,
    }
    enum FSConfigureFlags {
        LABEL,
        UUID,
    }
    enum FSF2FSFeature {
        ENCRYPT,
        BLKZONED,
        ATOMIC_WRITE,
        EXTRA_ATTR,
        PRJQUOTA,
        INODE_CHKSUM,
        FLEXIBLE_INLINE_XATTR,
        QUOTA_INO,
        INODE_CRTIME,
        LOST_FOUND,
        VERITY,
        SB_CHKSUM,
    }
    enum FSFeatureFlags {
        OWNERS,
        PARTITION_TABLE,
    }
    enum FSFsckFlags {
        CHECK,
        REPAIR,
    }
    enum FSMkfsOptionsFlags {
        LABEL,
        UUID,
        DRY_RUN,
        NODISCARD,
        FORCE,
        NOPT,
    }
    enum FSResizeFlags {
        OFFLINE_SHRINK,
        OFFLINE_GROW,
        ONLINE_SHRINK,
        ONLINE_GROW,
    }
    enum FSTechMode {
        MKFS,
        WIPE,
        CHECK,
        REPAIR,
        SET_LABEL,
        QUERY,
        RESIZE,
        SET_UUID,
    }
    enum LVMCachePoolFlags {
        STRIPED,
        RAID1,
        RAID5,
        RAID6,
        RAID10,
        META_STRIPED,
        META_RAID1,
        META_RAID5,
        META_RAID6,
        META_RAID10,
    }
    enum LVMTechMode {
        CREATE,
        REMOVE,
        MODIFY,
        QUERY,
    }
    enum LoopTechMode {
        CREATE,
        DESTROY,
        MODIFY,
        QUERY,
    }
    enum MDTechMode {
        CREATE,
        DELETE,
        MODIFY,
        QUERY,
    }
    enum MpathTechMode {
        QUERY,
        MODIFY,
    }
    enum NVDIMMTechMode {
        CREATE,
        REMOVE,
        ACTIVATE_DEACTIVATE,
        QUERY,
        RECONFIGURE,
    }
    enum NVMEControllerFeature {
        MULTIPORT,
        MULTICTRL,
        SRIOV,
        ANA_REPORTING,
        FORMAT,
        FORMAT_ALL_NS,
        NS_MGMT,
        SELFTEST,
        SELFTEST_SINGLE,
        SANITIZE_CRYPTO,
        SANITIZE_BLOCK,
        SANITIZE_OVERWRITE,
        SECURE_ERASE_ALL_NS,
        SECURE_ERASE_CRYPTO,
        STORAGE_DEVICE,
        ENCLOSURE,
        MGMT_PCIE,
        MGMT_SMBUS,
    }
    enum NVMENamespaceFeature {
        THIN,
        MULTIPATH_SHARED,
        FORMAT_PROGRESS,
        ROTATIONAL,
    }
    enum NVMESmartCriticalWarning {
        SPARE,
        TEMPERATURE,
        DEGRADED,
        READONLY,
        VOLATILE_MEM,
        PMR_READONLY,
    }
    enum NVMETechMode {
        INFO,
        MANAGE,
        INITIATOR,
    }
    enum PartTechMode {
        CREATE_TABLE,
        MODIFY_TABLE,
        QUERY_TABLE,
        MODIFY_PART,
        QUERY_PART,
    }
    enum SmartATACapabilities {
        ATTRIBUTE_AUTOSAVE,
        AUTOSAVE_TIMER,
        ERROR_LOGGING,
        GP_LOGGING,
    }
    enum SmartTechMode {
        INFO,
        SELFTEST,
    }
    enum SwapTechMode {
        CREATE,
        ACTIVATE_DEACTIVATE,
        QUERY,
        SET_LABEL,
        SET_UUID,
    }
    class BtrfsDeviceInfo {
        static $gtype: GObject.GType<BtrfsDeviceInfo>;
        id: number;
        path: string;
        size: number;
        used: number;
        copy(): BtrfsDeviceInfo;
        free(): void;
    }
    class BtrfsDeviceStats {
        static $gtype: GObject.GType<BtrfsDeviceStats>;
        id: number;
        path: string;
        write_io_errs: number;
        read_io_errs: number;
        flush_io_errs: number;
        corruption_errs: number;
        generation_errs: number;
        copy(): BtrfsDeviceStats;
        free(): void;
    }
    class BtrfsFilesystemInfo {
        static $gtype: GObject.GType<BtrfsFilesystemInfo>;
        label: string;
        uuid: string;
        num_devices: number;
        used: number;
        copy(): BtrfsFilesystemInfo;
        free(): void;
    }
    class BtrfsSubvolumeInfo {
        static $gtype: GObject.GType<BtrfsSubvolumeInfo>;
        id: number;
        parent_id: number;
        path: string;
        copy(): BtrfsSubvolumeInfo;
        free(): void;
    }
    class CryptoBITLKInfo {
        static $gtype: GObject.GType<CryptoBITLKInfo>;
        cipher: string;
        mode: string;
        uuid: string;
        backing_device: string;
        sector_size: number;
        constructor(properties?: Partial<{
            cipher: string;
            mode: string;
            uuid: string;
            backing_device: string;
            sector_size: number;
        }>);
        copy(): CryptoBITLKInfo;
        free(): void;
    }
    class CryptoIntegrityExtra {
        static $gtype: GObject.GType<CryptoIntegrityExtra>;
        sector_size: number;
        journal_size: number;
        journal_watermark: number;
        journal_commit_time: number;
        interleave_sectors: number;
        tag_size: number;
        buffer_sectors: number;
        constructor(sector_size: number, journal_size: bigint | number, journal_watermark: number, journal_commit_time: number, interleave_sectors: bigint | number, tag_size: bigint | number, buffer_sectors: bigint | number);
        static ["new"](sector_size: number, journal_size: bigint | number, journal_watermark: number, journal_commit_time: number, interleave_sectors: bigint | number, tag_size: bigint | number, buffer_sectors: bigint | number): CryptoIntegrityExtra;
        copy(): CryptoIntegrityExtra;
        free(): void;
    }
    class CryptoIntegrityInfo {
        static $gtype: GObject.GType<CryptoIntegrityInfo>;
        algorithm: string;
        key_size: number;
        sector_size: number;
        tag_size: number;
        interleave_sectors: number;
        journal_size: number;
        journal_crypt: string;
        journal_integrity: string;
        copy(): CryptoIntegrityInfo;
        free(): void;
    }
    class CryptoKeyslotContext {
        static $gtype: GObject.GType<CryptoKeyslotContext>;
        type: CryptoKeyslotContextType;
        constructor(keyfile: string, keyfile_offset: bigint | number, key_size: bigint | number);
        static new_keyfile(keyfile: string, keyfile_offset: bigint | number, key_size: bigint | number): CryptoKeyslotContext;
        static new_keyring(key_desc: string): CryptoKeyslotContext;
        static new_passphrase(pass_data: Uint8Array | string): CryptoKeyslotContext;
        static new_volume_key(volume_key: Uint8Array | string): CryptoKeyslotContext;
        copy(): CryptoKeyslotContext;
        free(): void;
    }
    class CryptoLUKSExtra {
        static $gtype: GObject.GType<CryptoLUKSExtra>;
        data_alignment: number;
        data_device: string;
        integrity: string;
        sector_size: number;
        label: string;
        subsystem: string;
        pbkdf: CryptoLUKSPBKDF;
        constructor(data_alignment: bigint | number, data_device: string | null, integrity: string | null, sector_size: number, label: string | null, subsystem: string | null, pbkdf: CryptoLUKSPBKDF | null);
        static ["new"](data_alignment: bigint | number, data_device: string | null, integrity: string | null, sector_size: number, label: string | null, subsystem: string | null, pbkdf: CryptoLUKSPBKDF | null): CryptoLUKSExtra;
        copy(): CryptoLUKSExtra;
        free(): void;
    }
    class CryptoLUKSInfo {
        static $gtype: GObject.GType<CryptoLUKSInfo>;
        version: CryptoLUKSVersion;
        cipher: string;
        mode: string;
        uuid: string;
        backing_device: string;
        sector_size: number;
        metadata_size: number;
        label: string;
        subsystem: string;
        hw_encryption: CryptoLUKSHWEncryptionType;
        copy(): CryptoLUKSInfo;
        free(): void;
    }
    class CryptoLUKSPBKDF {
        static $gtype: GObject.GType<CryptoLUKSPBKDF>;
        type: string;
        hash: string;
        max_memory_kb: number;
        iterations: number;
        time_ms: number;
        parallel_threads: number;
        constructor(properties?: Partial<{
            type: string;
            hash: string;
            max_memory_kb: number;
            iterations: number;
            time_ms: number;
            parallel_threads: number;
        }>);
        static ["new"](type: string | null, hash: string | null, max_memory_kb: number, iterations: number, time_ms: number, parallel_threads: number): CryptoLUKSPBKDF;
        copy(): CryptoLUKSPBKDF;
        free(): void;
    }
    class CryptoLUKSTokenInfo {
        static $gtype: GObject.GType<CryptoLUKSTokenInfo>;
        id: number;
        type: string;
        keyslot: number;
        constructor(properties?: Partial<{
            id: number;
            type: string;
            keyslot: number;
        }>);
        copy(): CryptoLUKSTokenInfo;
        free(): void;
    }
    class ExtraArg {
        static $gtype: GObject.GType<ExtraArg>;
        opt: string;
        val: string;
        constructor(properties?: Partial<{
            opt: string;
            val: string;
        }>);
        static ["new"](opt: string, val: string): ExtraArg;
        static list_free(args: ExtraArg[] | null): void;
        copy(): ExtraArg;
        free(): void;
    }
    class FSBtrfsInfo {
        static $gtype: GObject.GType<FSBtrfsInfo>;
        label: string;
        uuid: string;
        size: number;
        free_space: number;
        copy(): FSBtrfsInfo;
        free(): void;
    }
    class FSExfatInfo {
        static $gtype: GObject.GType<FSExfatInfo>;
        label: string;
        uuid: string;
        sector_size: number;
        sector_count: number;
        cluster_count: number;
        copy(): FSExfatInfo;
        free(): void;
    }
    class FSExt2Info {
        static $gtype: GObject.GType<FSExt2Info>;
        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;
        copy(): FSExt2Info;
    }
    class FSExt3Info {
        static $gtype: GObject.GType<FSExt3Info>;
        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;
        copy(): FSExt3Info;
        free(): void;
    }
    class FSExt4Info {
        static $gtype: GObject.GType<FSExt4Info>;
        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;
        copy(): FSExt4Info;
        free(): void;
    }
    class FSExtInfo {
        static $gtype: GObject.GType<FSExtInfo>;
        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;
    }
    class FSF2FSInfo {
        static $gtype: GObject.GType<FSF2FSInfo>;
        label: string;
        uuid: string;
        sector_size: number;
        sector_count: number;
        features: number;
        copy(): FSF2FSInfo;
        free(): void;
    }
    class FSFeatures {
        static $gtype: GObject.GType<FSFeatures>;
        resize: FSResizeFlags;
        mkfs: FSMkfsOptionsFlags;
        fsck: FSFsckFlags;
        configure: FSConfigureFlags;
        features: FSFeatureFlags;
        partition_id: string;
        partition_type: string;
        min_size: number;
        max_size: number;
        copy(): FSFeatures;
        free(): void;
    }
    class FSMkfsOptions {
        static $gtype: GObject.GType<FSMkfsOptions>;
        label: string;
        uuid: string;
        dry_run: boolean;
        no_discard: boolean;
        force: boolean;
        no_pt: boolean;
        reserve: Uint8Array;
        constructor(properties?: Partial<{
            label: string;
            uuid: string;
            dry_run: boolean;
            no_discard: boolean;
            force: boolean;
            no_pt: boolean;
            reserve: Uint8Array;
        }>);
        copy(): FSMkfsOptions;
        free(): void;
    }
    class FSNILFS2Info {
        static $gtype: GObject.GType<FSNILFS2Info>;
        label: string;
        uuid: string;
        size: number;
        block_size: number;
        free_blocks: number;
        copy(): FSNILFS2Info;
        free(): void;
    }
    class FSNtfsInfo {
        static $gtype: GObject.GType<FSNtfsInfo>;
        label: string;
        uuid: string;
        size: number;
        free_space: number;
        copy(): FSNtfsInfo;
        free(): void;
    }
    class FSUdfInfo {
        static $gtype: GObject.GType<FSUdfInfo>;
        label: string;
        uuid: string;
        revision: string;
        lvid: string;
        vid: string;
        block_size: number;
        block_count: number;
        free_blocks: number;
        copy(): FSUdfInfo;
        free(): void;
    }
    class FSVfatInfo {
        static $gtype: GObject.GType<FSVfatInfo>;
        label: string;
        uuid: string;
        cluster_size: number;
        cluster_count: number;
        free_cluster_count: number;
        copy(): FSVfatInfo;
        free(): void;
    }
    class FSXfsInfo {
        static $gtype: GObject.GType<FSXfsInfo>;
        label: string;
        uuid: string;
        block_size: number;
        block_count: number;
        copy(): FSXfsInfo;
        free(): void;
    }
    class LVMCacheStats {
        static $gtype: GObject.GType<LVMCacheStats>;
        block_size: number;
        cache_size: number;
        cache_used: number;
        md_block_size: number;
        md_size: number;
        md_used: number;
        read_hits: number;
        read_misses: number;
        write_hits: number;
        write_misses: number;
        mode: LVMCacheMode;
        copy(): LVMCacheStats;
        free(): void;
    }
    class LVMLVdata {
        static $gtype: GObject.GType<LVMLVdata>;
        lv_name: string;
        vg_name: string;
        uuid: string;
        size: number;
        attr: string;
        segtype: string;
        origin: string;
        pool_lv: string;
        data_lv: string;
        metadata_lv: string;
        roles: string;
        move_pv: string;
        data_percent: number;
        metadata_percent: number;
        copy_percent: number;
        lv_tags: string[];
        data_lvs: string[];
        metadata_lvs: string[];
        segs: LVMSEGdata[];
        copy(): LVMLVdata;
        free(): void;
    }
    class LVMPVdata {
        static $gtype: GObject.GType<LVMPVdata>;
        pv_name: string;
        pv_uuid: string;
        pv_free: number;
        pv_size: number;
        pe_start: number;
        vg_name: string;
        vg_uuid: string;
        vg_size: number;
        vg_free: number;
        vg_extent_size: number;
        vg_extent_count: number;
        vg_free_count: number;
        vg_pv_count: number;
        pv_tags: string[];
        missing: boolean;
        copy(): LVMPVdata;
        free(): void;
    }
    class LVMSEGdata {
        static $gtype: GObject.GType<LVMSEGdata>;
        size_pe: number;
        pv_start_pe: number;
        pvdev: string;
        copy(): LVMSEGdata;
        free(): void;
    }
    class LVMVDOPooldata {
        static $gtype: GObject.GType<LVMVDOPooldata>;
        operating_mode: LVMVDOOperatingMode;
        compression_state: LVMVDOCompressionState;
        index_state: LVMVDOIndexState;
        write_policy: LVMVDOWritePolicy;
        used_size: number;
        saving_percent: number;
        index_memory_size: number;
        deduplication: boolean;
        compression: boolean;
        copy(): LVMVDOPooldata;
        free(): void;
    }
    class LVMVDOStats {
        static $gtype: GObject.GType<LVMVDOStats>;
        block_size: number;
        logical_block_size: number;
        physical_blocks: number;
        data_blocks_used: number;
        overhead_blocks_used: number;
        logical_blocks_used: number;
        used_percent: number;
        saving_percent: number;
        write_amplification_ratio: number;
        copy(): LVMVDOStats;
        free(): void;
    }
    class LVMVGdata {
        static $gtype: GObject.GType<LVMVGdata>;
        name: string;
        uuid: string;
        size: number;
        extent_size: number;
        extent_count: number;
        free_count: number;
        pv_count: number;
        exported: boolean;
        vg_tags: string[];
        copy(): LVMVGdata;
        free(): void;
    }
    class LoopInfo {
        static $gtype: GObject.GType<LoopInfo>;
        backing_file: string;
        offset: number;
        autoclear: boolean;
        direct_io: boolean;
        part_scan: boolean;
        read_only: boolean;
        copy(): LoopInfo;
        free(): void;
    }
    class MDDetailData {
        static $gtype: GObject.GType<MDDetailData>;
        device: string;
        metadata: string;
        creation_time: string;
        level: string;
        name: string;
        array_size: number;
        use_dev_size: number;
        raid_devices: number;
        total_devices: number;
        active_devices: number;
        working_devices: number;
        failed_devices: number;
        spare_devices: number;
        clean: boolean;
        uuid: string;
        container: string;
        copy(): MDDetailData;
        free(): void;
    }
    class MDExamineData {
        static $gtype: GObject.GType<MDExamineData>;
        device: string;
        level: string;
        num_devices: number;
        name: string;
        size: number;
        uuid: string;
        update_time: number;
        dev_uuid: string;
        events: number;
        metadata: string;
        chunk_size: number;
        copy(): MDExamineData;
        free(): void;
    }
    class NVDIMMNamespaceInfo {
        static $gtype: GObject.GType<NVDIMMNamespaceInfo>;
        dev: string;
        mode: number;
        size: number;
        uuid: string;
        sector_size: number;
        blockdev: string;
        enabled: boolean;
        copy(): NVDIMMNamespaceInfo;
        free(): void;
    }
    class NVMEControllerInfo {
        static $gtype: GObject.GType<NVMEControllerInfo>;
        pci_vendor_id: number;
        pci_subsys_vendor_id: number;
        ctrl_id: number;
        fguid: string;
        model_number: string;
        serial_number: string;
        firmware_ver: string;
        nvme_ver: string;
        features: number;
        controller_type: NVMEControllerType;
        selftest_ext_time: number;
        hmb_pref_size: number;
        hmb_min_size: number;
        size_total: number;
        size_unalloc: number;
        num_namespaces: number;
        subsysnqn: string;
        copy(): NVMEControllerInfo;
        free(): void;
    }
    class NVMEErrorLogEntry {
        static $gtype: GObject.GType<NVMEErrorLogEntry>;
        error_count: number;
        command_id: number;
        command_specific: number;
        command_status: number;
        command_error: GLib.Error;
        lba: number;
        nsid: number;
        transport_type: NVMETransportType;
        copy(): NVMEErrorLogEntry;
        free(): void;
    }
    class NVMELBAFormat {
        static $gtype: GObject.GType<NVMELBAFormat>;
        data_size: number;
        metadata_size: number;
        relative_performance: NVMELBAFormatRelativePerformance;
        copy(): NVMELBAFormat;
        free(): void;
    }
    class NVMENamespaceInfo {
        static $gtype: GObject.GType<NVMENamespaceInfo>;
        nsid: number;
        eui64: string;
        uuid: string;
        nguid: string;
        nsize: number;
        ncap: number;
        nuse: number;
        features: number;
        format_progress_remaining: number;
        write_protected: boolean;
        lba_formats: NVMELBAFormat[];
        copy(): NVMENamespaceInfo;
        free(): void;
    }
    class NVMESanitizeLog {
        static $gtype: GObject.GType<NVMESanitizeLog>;
        sanitize_progress: number;
        sanitize_status: NVMESanitizeStatus;
        global_data_erased: boolean;
        overwrite_passes: number;
        time_for_overwrite: number;
        time_for_block_erase: number;
        time_for_crypto_erase: number;
        time_for_overwrite_nd: number;
        time_for_block_erase_nd: number;
        time_for_crypto_erase_nd: number;
        copy(): NVMESanitizeLog;
        free(): void;
    }
    class NVMESelfTestLog {
        static $gtype: GObject.GType<NVMESelfTestLog>;
        current_operation: NVMESelfTestAction;
        current_operation_completion: number;
        entries: NVMESelfTestLogEntry[];
        copy(): NVMESelfTestLog;
        free(): void;
    }
    class NVMESelfTestLogEntry {
        static $gtype: GObject.GType<NVMESelfTestLogEntry>;
        result: NVMESelfTestResult;
        action: NVMESelfTestAction;
        segment: number;
        power_on_hours: number;
        nsid: number;
        failing_lba: number;
        status_code_error: GLib.Error;
        copy(): NVMESelfTestLogEntry;
        free(): void;
    }
    class NVMESmartLog {
        static $gtype: GObject.GType<NVMESmartLog>;
        critical_warning: number;
        avail_spare: number;
        spare_thresh: number;
        percent_used: number;
        total_data_read: number;
        total_data_written: number;
        ctrl_busy_time: number;
        power_cycles: number;
        power_on_hours: number;
        unsafe_shutdowns: number;
        media_errors: number;
        num_err_log_entries: number;
        temperature: number;
        temp_sensors: number[];
        wctemp: number;
        cctemp: number;
        warning_temp_time: number;
        critical_temp_time: number;
        copy(): NVMESmartLog;
        free(): void;
    }
    class PartDiskSpec {
        static $gtype: GObject.GType<PartDiskSpec>;
        path: string;
        table_type: PartTableType;
        size: number;
        sector_size: number;
        copy(): PartDiskSpec;
        free(): void;
    }
    class PartSpec {
        static $gtype: GObject.GType<PartSpec>;
        path: string;
        name: string;
        uuid: string;
        id: string;
        type_guid: string;
        type: number;
        start: number;
        size: number;
        bootable: boolean;
        attrs: number;
        type_name: string;
        copy(): PartSpec;
        free(): void;
    }
    class PluginSpec {
        static $gtype: GObject.GType<PluginSpec>;
        name: Plugin;
        so_name: string;
        constructor(name: Plugin, so_name: string | null);
        static ["new"](name: Plugin, so_name: string | null): PluginSpec;
        copy(): PluginSpec;
        free(): void;
    }
    class SmartATA {
        static $gtype: GObject.GType<SmartATA>;
        smart_supported: boolean;
        smart_enabled: boolean;
        overall_status_passed: boolean;
        offline_data_collection_status: SmartATAOfflineDataCollectionStatus;
        auto_offline_data_collection_enabled: boolean;
        offline_data_collection_completion: number;
        offline_data_collection_capabilities: number;
        self_test_status: SmartATASelfTestStatus;
        self_test_percent_remaining: number;
        self_test_polling_short: number;
        self_test_polling_extended: number;
        self_test_polling_conveyance: number;
        smart_capabilities: number;
        attributes: SmartATAAttribute[];
        power_on_time: number;
        power_cycle_count: number;
        temperature: number;
        static get_info(device: string, extra: ExtraArg[] | null): SmartATA;
        static get_info_from_data(data: Uint8Array | string): SmartATA;
        copy(): SmartATA;
        free(): void;
    }
    class SmartATAAttribute {
        static $gtype: GObject.GType<SmartATAAttribute>;
        id: number;
        name: string;
        well_known_name: string;
        value: number;
        worst: number;
        threshold: number;
        failed_past: boolean;
        failing_now: boolean;
        value_raw: number;
        flags: number;
        pretty_value: number;
        pretty_value_unit: SmartATAAttributeUnit;
        pretty_value_string: string;
        copy(): SmartATAAttribute;
        free(): void;
    }
    class SmartSCSI {
        static $gtype: GObject.GType<SmartSCSI>;
        smart_supported: boolean;
        smart_enabled: boolean;
        overall_status_passed: boolean;
        scsi_ie: SmartSCSIInformationalException;
        scsi_ie_asc: number;
        scsi_ie_ascq: number;
        scsi_ie_string: string;
        background_scan_status: SmartSCSIBackgroundScanStatus;
        background_scan_progress: number;
        background_scan_runs: number;
        background_medium_scan_runs: number;
        read_errors_corrected_eccfast: number;
        read_errors_corrected_eccdelayed: number;
        read_errors_corrected_rereads: number;
        read_errors_corrected_total: number;
        read_errors_uncorrected: number;
        read_processed_bytes: number;
        write_errors_corrected_eccfast: number;
        write_errors_corrected_eccdelayed: number;
        write_errors_corrected_rewrites: number;
        write_errors_corrected_total: number;
        write_errors_uncorrected: number;
        write_processed_bytes: number;
        start_stop_cycle_count: number;
        start_stop_cycle_lifetime: number;
        load_unload_cycle_count: number;
        load_unload_cycle_lifetime: number;
        scsi_grown_defect_list: number;
        power_on_time: number;
        temperature_warning_enabled: boolean;
        temperature: number;
        temperature_drive_trip: number;
        static get_info(device: string, extra: ExtraArg[] | null): SmartSCSI;
        copy(): SmartSCSI;
        free(): void;
    }
    class UtilsLinuxVersion {
        static $gtype: GObject.GType<UtilsLinuxVersion>;
        major: number;
        minor: number;
        micro: number;
        constructor(properties?: Partial<{
            major: number;
            minor: number;
            micro: number;
        }>);
    }
    const __name__: string;
    const __version__: string;
}
export default BlockDev;
}
declare module 'gi://BlockDev' {
    import BlockDev30 from 'gi://BlockDev?version=3.0';
    export default BlockDev30;
}
