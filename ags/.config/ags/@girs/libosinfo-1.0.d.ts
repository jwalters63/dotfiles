declare module 'gi://Libosinfo?version=1.0' {
import type libxml2 from 'gi://libxml2?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Libosinfo {
    export namespace DeviceDriverSigningReq {
        export const $gtype: GObject.GType<DeviceDriverSigningReq>;
    }
    enum DeviceDriverSigningReq {
        NONE,
        STRICT,
        WARN,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static GENERIC: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace InstallConfigParamPolicy {
        export const $gtype: GObject.GType<InstallConfigParamPolicy>;
    }
    enum InstallConfigParamPolicy {
        NONE,
        REQUIRED,
        OPTIONAL,
    }
    export namespace InstallScriptInstallationSource {
        export const $gtype: GObject.GType<InstallScriptInstallationSource>;
    }
    enum InstallScriptInstallationSource {
        MEDIA,
        NETWORK,
    }
    class MediaError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_DESCRIPTORS: number;
        static NO_PVD: number;
        static NO_SVD: number;
        static INSUFFICIENT_METADATA: number;
        static NOT_BOOTABLE: number;
        static NO_DIRECTORY_RECORD_EXTENT: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace PathFormat {
        export const $gtype: GObject.GType<PathFormat>;
    }
    enum PathFormat {
        UNIX,
        DOS,
    }
    export namespace ProductRelationship {
        export const $gtype: GObject.GType<ProductRelationship>;
    }
    enum ProductRelationship {
        DERIVES_FROM,
        UPGRADES,
        CLONES,
    }
    export namespace ReleaseStatus {
        export const $gtype: GObject.GType<ReleaseStatus>;
    }
    enum ReleaseStatus {
        RELEASED,
        SNAPSHOT,
        PRERELEASE,
        ROLLING,
    }
    class TreeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NO_TREEINFO: number;
        static NOT_SUPPORTED_PROTOCOL: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    const ARCHITECTURE_ALL: string;
    const AVATAR_FORMAT_PROP_ALPHA: string;
    const AVATAR_FORMAT_PROP_HEIGHT: string;
    const AVATAR_FORMAT_PROP_MIME_TYPE: string;
    const AVATAR_FORMAT_PROP_WIDTH: string;
    const DEVICELINK_PROP_DRIVER: string;
    const DEVICELINK_PROP_SUPPORTED: string;
    const DEVICE_DRIVER_DEFAULT_PRIORITY: number;
    const DEVICE_DRIVER_PROP_ARCHITECTURE: string;
    const DEVICE_DRIVER_PROP_DEVICE: string;
    const DEVICE_DRIVER_PROP_FILE: string;
    const DEVICE_DRIVER_PROP_LOCATION: string;
    const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string;
    const DEVICE_DRIVER_PROP_PRIORITY: string;
    const DEVICE_DRIVER_PROP_SIGNED: string;
    const DEVICE_PROP_BUS_TYPE: string;
    const DEVICE_PROP_CLASS: string;
    const DEVICE_PROP_NAME: string;
    const DEVICE_PROP_PRODUCT: string;
    const DEVICE_PROP_PRODUCT_ID: string;
    const DEVICE_PROP_SUBSYSTEM: string;
    const DEVICE_PROP_VENDOR: string;
    const DEVICE_PROP_VENDOR_ID: string;
    const ENTITY_PROP_ID: string;
    const FIRMWARE_PROP_ARCHITECTURE: string;
    const FIRMWARE_PROP_SUPPORTED: string;
    const FIRMWARE_PROP_TYPE: string;
    const GIBIBYTES: number;
    const IMAGE_PROP_ARCHITECTURE: string;
    const IMAGE_PROP_CLOUD_INIT: string;
    const IMAGE_PROP_FORMAT: string;
    const IMAGE_PROP_URL: string;
    const IMAGE_PROP_VARIANT: string;
    const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string;
    const INSTALL_CONFIG_PARAM_PROP_NAME: string;
    const INSTALL_CONFIG_PARAM_PROP_POLICY: string;
    const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string;
    const INSTALL_CONFIG_PROP_AVATAR_DISK: string;
    const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string;
    const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string;
    const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string;
    const INSTALL_CONFIG_PROP_HOSTNAME: string;
    const INSTALL_CONFIG_PROP_INSTALLATION_URL: string;
    const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string;
    const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string;
    const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string;
    const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string;
    const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string;
    const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string;
    const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string;
    const INSTALL_CONFIG_PROP_REG_LOGIN: string;
    const INSTALL_CONFIG_PROP_REG_PASSWORD: string;
    const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string;
    const INSTALL_CONFIG_PROP_SCRIPT_DISK: string;
    const INSTALL_CONFIG_PROP_TARGET_DISK: string;
    const INSTALL_CONFIG_PROP_USER_ADMIN: string;
    const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string;
    const INSTALL_CONFIG_PROP_USER_LOGIN: string;
    const INSTALL_CONFIG_PROP_USER_PASSWORD: string;
    const INSTALL_CONFIG_PROP_USER_REALNAME: string;
    const INSTALL_SCRIPT_PROFILE_DESKTOP: string;
    const INSTALL_SCRIPT_PROFILE_JEOS: string;
    const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string;
    const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string;
    const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string;
    const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string;
    const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string;
    const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string;
    const INSTALL_SCRIPT_PROP_PATH_FORMAT: string;
    const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string;
    const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string;
    const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string;
    const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string;
    const INSTALL_SCRIPT_PROP_PROFILE: string;
    const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string;
    const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string;
    const KIBIBYTES: number;
    const MAJOR_VERSION: number;
    const MEBIBYTES: number;
    const MEDIA_PROP_APPLICATION_ID: string;
    const MEDIA_PROP_ARCHITECTURE: string;
    const MEDIA_PROP_BOOTABLE: string;
    const MEDIA_PROP_EJECT_AFTER_INSTALL: string;
    const MEDIA_PROP_INITRD: string;
    const MEDIA_PROP_INSTALLER: string;
    const MEDIA_PROP_INSTALLER_REBOOTS: string;
    const MEDIA_PROP_INSTALLER_SCRIPT: string;
    const MEDIA_PROP_KERNEL: string;
    const MEDIA_PROP_LANG: string;
    const MEDIA_PROP_LANG_MAP: string;
    const MEDIA_PROP_LANG_REGEX: string;
    const MEDIA_PROP_LIVE: string;
    const MEDIA_PROP_PUBLISHER_ID: string;
    const MEDIA_PROP_SYSTEM_ID: string;
    const MEDIA_PROP_URL: string;
    const MEDIA_PROP_VARIANT: string;
    const MEDIA_PROP_VOLUME_ID: string;
    const MEDIA_PROP_VOLUME_SIZE: string;
    const MEGAHERTZ: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const OS_PROP_CLOUD_IMAGE_USERNAME: string;
    const OS_PROP_DISTRO: string;
    const OS_PROP_FAMILY: string;
    const OS_PROP_KERNEL_URL_ARGUMENT: string;
    const OS_PROP_RELEASE_STATUS: string;
    const OS_VARIANT_PROP_NAME: string;
    const PRODUCT_PROP_CODENAME: string;
    const PRODUCT_PROP_EOL_DATE: string;
    const PRODUCT_PROP_LOGO: string;
    const PRODUCT_PROP_NAME: string;
    const PRODUCT_PROP_RELEASE_DATE: string;
    const PRODUCT_PROP_SHORT_ID: string;
    const PRODUCT_PROP_VENDOR: string;
    const PRODUCT_PROP_VERSION: string;
    const RESOURCES_PROP_ARCHITECTURE: string;
    const RESOURCES_PROP_CPU: string;
    const RESOURCES_PROP_N_CPUS: string;
    const RESOURCES_PROP_RAM: string;
    const RESOURCES_PROP_STORAGE: string;
    const TREE_PROP_ARCHITECTURE: string;
    const TREE_PROP_BOOT_ISO: string;
    const TREE_PROP_HAS_TREEINFO: string;
    const TREE_PROP_INITRD: string;
    const TREE_PROP_KERNEL: string;
    const TREE_PROP_TREEINFO_ARCH: string;
    const TREE_PROP_TREEINFO_FAMILY: string;
    const TREE_PROP_TREEINFO_VARIANT: string;
    const TREE_PROP_TREEINFO_VERSION: string;
    const TREE_PROP_URL: string;
    const TREE_PROP_VARIANT: string;
    function error_quark(): GLib.Quark;
    function media_error_quark(): GLib.Quark;
    function tree_error_quark(): GLib.Quark;
    export namespace InstallScriptInjectionMethod {
        export const $gtype: GObject.GType<InstallScriptInjectionMethod>;
    }
    enum InstallScriptInjectionMethod {
        CDROM,
        DISK,
        FLOPPY,
        INITRD,
        WEB,
    }
    export namespace MediaDetectFlags {
        export const $gtype: GObject.GType<MediaDetectFlags>;
    }
    enum MediaDetectFlags {
        BOOTABLE,
    }
    namespace AvatarFormat {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::alpha": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mime-types": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            alpha: boolean;
            height: number;
            mime_types: string[];
            mimeTypes: string[];
            width: number;
        }
    }
    class AvatarFormat extends Entity {
        static $gtype: GObject.GType<AvatarFormat>;
        get alpha(): boolean;
        get height(): number;
        get mime_types(): string[];
        get mimeTypes(): string[];
        get width(): number;
        $signals: AvatarFormat.SignalSignatures;
        constructor(properties?: Partial<AvatarFormat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): AvatarFormat;
        connect<K extends keyof AvatarFormat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvatarFormat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AvatarFormat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvatarFormat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AvatarFormat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AvatarFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_alpha(): boolean;
        get_height(): number;
        get_mime_types(): string[];
        get_width(): number;
    }
    namespace Datamap {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {}
    }
    class Datamap extends Entity {
        static $gtype: GObject.GType<Datamap>;
        $signals: Datamap.SignalSignatures;
        constructor(properties?: Partial<Datamap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): Datamap;
        connect<K extends keyof Datamap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datamap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Datamap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datamap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Datamap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Datamap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        insert(inval: string, outval: string): void;
        lookup(inval: string): string;
        reverse_lookup(outval: string): string;
    }
    namespace DatamapList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class DatamapList extends List {
        static $gtype: GObject.GType<DatamapList>;
        $signals: DatamapList.SignalSignatures;
        constructor(properties?: Partial<DatamapList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DatamapList;
        connect<K extends keyof DatamapList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DatamapList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DatamapList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DatamapList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DatamapList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DatamapList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Db {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Db extends GObject.Object {
        static $gtype: GObject.GType<Db>;
        $signals: Db.SignalSignatures;
        constructor(properties?: Partial<Db.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Db;
        connect<K extends keyof Db.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Db.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Db.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Db.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Db.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Db.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_datamap(datamap: Datamap): void;
        add_deployment(deployment: Deployment): void;
        add_device(device: Device): void;
        add_install_script(script: InstallScript): void;
        add_os(os: Os): void;
        add_platform(platform: Platform): void;
        find_deployment(os: Os, platform: Platform): Deployment;
        get_datamap(id: string): Datamap;
        get_datamap_list(): DatamapList;
        get_deployment(id: string): Deployment;
        get_deployment_list(): DeploymentList;
        get_device(id: string): Device;
        get_device_list(): DeviceList;
        get_install_script(id: string): InstallScript;
        get_install_script_list(): InstallScriptList;
        get_os(id: string): Os;
        get_os_list(): OsList;
        get_platform(id: string): Platform;
        get_platform_list(): PlatformList;
        guess_os_from_media(media: Media): [Os, Media | null];
        guess_os_from_tree(tree: Tree): [Os, Tree | null];
        identify_media(media: Media): boolean;
        identify_medialist(media: Media): MediaList;
        identify_tree(tree: Tree): boolean;
        identify_treelist(tree: Tree): TreeList;
        unique_values_for_os_relationship(relshp: ProductRelationship): OsList;
        unique_values_for_platform_relationship(relshp: ProductRelationship): PlatformList;
        unique_values_for_property_in_deployment(propName: string): string[];
        unique_values_for_property_in_device(propName: string): string[];
        unique_values_for_property_in_os(propName: string): string[];
        unique_values_for_property_in_platform(propName: string): string[];
    }
    namespace Deployment {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::os": (pspec: GObject.ParamSpec) => void;
            "notify::platform": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            os: Os;
            platform: Platform;
        }
    }
    class Deployment extends Entity {
        static $gtype: GObject.GType<Deployment>;
        get os(): Os;
        get platform(): Platform;
        $signals: Deployment.SignalSignatures;
        constructor(properties?: Partial<Deployment.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, os: Os, platform: Platform): Deployment;
        connect<K extends keyof Deployment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deployment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Deployment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Deployment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Deployment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Deployment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_device(dev: Device): DeviceLink;
        get_device_links(filter: Filter | null): DeviceLinkList;
        get_devices(filter: Filter | null): DeviceList;
        get_os(): Os;
        get_platform(): Platform;
        get_preferred_device(filter: Filter | null): Device;
        get_preferred_device_link(filter: Filter | null): DeviceLink;
    }
    namespace DeploymentList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class DeploymentList extends List {
        static $gtype: GObject.GType<DeploymentList>;
        $signals: DeploymentList.SignalSignatures;
        constructor(properties?: Partial<DeploymentList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeploymentList;
        connect<K extends keyof DeploymentList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeploymentList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeploymentList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeploymentList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeploymentList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeploymentList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): DeploymentList;
        new_filtered(filter: Filter): DeploymentList;
        new_intersection(sourceTwo: DeploymentList): DeploymentList;
        new_union(sourceTwo: DeploymentList): DeploymentList;
    }
    namespace Device {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {}
    }
    class Device extends Entity {
        static $gtype: GObject.GType<Device>;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bus_type(): string;
        get_class(): string;
        get_name(): string;
        get_product(): string;
        get_product_id(): string;
        get_subsystem(): string;
        get_vendor(): string;
        get_vendor_id(): string;
    }
    namespace DeviceDriver {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {}
    }
    class DeviceDriver extends Entity {
        static $gtype: GObject.GType<DeviceDriver>;
        $signals: DeviceDriver.SignalSignatures;
        constructor(properties?: Partial<DeviceDriver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DeviceDriver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDriver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceDriver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDriver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceDriver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceDriver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_architecture(): string;
        get_devices(): DeviceList;
        get_files(): string[];
        get_location(): string;
        get_pre_installable(): boolean;
        get_priority(): number;
        get_signed(): boolean;
    }
    namespace DeviceDriverList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class DeviceDriverList extends List {
        static $gtype: GObject.GType<DeviceDriverList>;
        $signals: DeviceDriverList.SignalSignatures;
        constructor(properties?: Partial<DeviceDriverList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceDriverList;
        connect<K extends keyof DeviceDriverList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDriverList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceDriverList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDriverList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceDriverList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceDriverList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace DeviceLink {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            target: Device;
        }
    }
    class DeviceLink extends Entity {
        static $gtype: GObject.GType<DeviceLink>;
        get target(): Device;
        $signals: DeviceLink.SignalSignatures;
        constructor(properties?: Partial<DeviceLink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](target: Device): DeviceLink;
        connect<K extends keyof DeviceLink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceLink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceLink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceLink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_driver(): string;
        get_target(): Device;
    }
    namespace DeviceLinkFilter {
        interface SignalSignatures extends Filter.SignalSignatures {
            "notify::target-filter": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Filter.ConstructorProps {
            target_filter: Filter;
            targetFilter: Filter;
        }
    }
    class DeviceLinkFilter extends Filter {
        static $gtype: GObject.GType<DeviceLinkFilter>;
        get target_filter(): Filter;
        get targetFilter(): Filter;
        $signals: DeviceLinkFilter.SignalSignatures;
        constructor(properties?: Partial<DeviceLinkFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](filter: Filter): DeviceLinkFilter;
        static ["new"](...args: never[]): any;
        connect<K extends keyof DeviceLinkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLinkFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceLinkFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLinkFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceLinkFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceLinkFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_target_filter(): Filter;
    }
    namespace DeviceLinkList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class DeviceLinkList extends List {
        static $gtype: GObject.GType<DeviceLinkList>;
        $signals: DeviceLinkList.SignalSignatures;
        constructor(properties?: Partial<DeviceLinkList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceLinkList;
        connect<K extends keyof DeviceLinkList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLinkList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceLinkList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceLinkList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceLinkList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceLinkList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_devices(filter: Filter | null): DeviceList;
        new_copy(): DeviceLinkList;
        new_filtered(filter: Filter): DeviceLinkList;
        new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList;
        new_union(sourceTwo: DeviceLinkList): DeviceLinkList;
    }
    namespace DeviceList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class DeviceList extends List {
        static $gtype: GObject.GType<DeviceList>;
        $signals: DeviceList.SignalSignatures;
        constructor(properties?: Partial<DeviceList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): DeviceList;
        connect<K extends keyof DeviceList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): DeviceList;
        new_filtered(filter: Filter): DeviceList;
        new_intersection(sourceTwo: DeviceList): DeviceList;
        new_union(sourceTwo: DeviceList): DeviceList;
    }
    namespace Entity {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
        }
    }
    abstract class Entity extends GObject.Object {
        static $gtype: GObject.GType<Entity>;
        get id(): string;
        set id(val: string);
        $signals: Entity.SignalSignatures;
        constructor(properties?: Partial<Entity.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Entity.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Entity.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Entity.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Entity.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_param(key: string, value: string): void;
        clear_param(key: string): void;
        get_id(): string;
        get_param_keys(): string[];
        get_param_value(key: string): string;
        get_param_value_boolean(key: string): boolean;
        get_param_value_boolean_with_default(key: string, default_value: boolean): boolean;
        get_param_value_enum(key: string, enum_type: GObject.GType, default_value: number): number;
        get_param_value_int64(key: string): number;
        get_param_value_int64_with_default(key: string, default_value: bigint | number): number;
        get_param_value_list(key: string): string[];
        set_param(key: string, value: string): void;
        set_param_boolean(key: string, value: boolean): void;
        set_param_enum(key: string, value: number, enum_type: GObject.GType): void;
        set_param_int64(key: string, value: bigint | number): void;
    }
    namespace Filter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Filter extends GObject.Object {
        static $gtype: GObject.GType<Filter>;
        $signals: Filter.SignalSignatures;
        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Filter;
        connect<K extends keyof Filter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Filter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Filter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_matches(entity: Entity): boolean;
        add_constraint(propName: string, propVal: string): void;
        clear_constraint(propName: string): void;
        clear_constraints(): void;
        get_constraint_keys(): string[];
        get_constraint_values(propName: string): string[];
        matches(entity: Entity): boolean;
    }
    namespace Firmware {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::architecture": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            architecture: string;
            type: string;
        }
    }
    class Firmware extends Entity {
        static $gtype: GObject.GType<Firmware>;
        get architecture(): string;
        set architecture(val: string);
        get type(): string;
        set type(val: string);
        $signals: Firmware.SignalSignatures;
        constructor(properties?: Partial<Firmware.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, architecture: string, type: string): Firmware;
        connect<K extends keyof Firmware.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Firmware.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Firmware.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Firmware.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Firmware.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Firmware.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_architecture(): string;
        get_firmware_type(): string;
        is_supported(): boolean;
    }
    namespace FirmwareList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class FirmwareList extends List {
        static $gtype: GObject.GType<FirmwareList>;
        $signals: FirmwareList.SignalSignatures;
        constructor(properties?: Partial<FirmwareList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): FirmwareList;
        connect<K extends keyof FirmwareList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FirmwareList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FirmwareList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FirmwareList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Image {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::architecture": (pspec: GObject.ParamSpec) => void;
            "notify::cloud-init": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            architecture: string;
            cloud_init: string;
            cloudInit: string;
            format: string;
            url: string;
        }
    }
    class Image extends Entity {
        static $gtype: GObject.GType<Image>;
        get architecture(): string;
        set architecture(val: string);
        get cloud_init(): string;
        set cloud_init(val: string);
        get cloudInit(): string;
        set cloudInit(val: string);
        get format(): string;
        set format(val: string);
        get url(): string;
        set url(val: string);
        $signals: Image.SignalSignatures;
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, architecture: string, format: string): Image;
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_architecture(): string;
        get_cloud_init(): boolean;
        get_format(): string;
        get_os(): Os;
        get_os_variants(): OsVariantList;
        get_url(): string;
        set_os(os: Os): void;
    }
    namespace ImageList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class ImageList extends List {
        static $gtype: GObject.GType<ImageList>;
        $signals: ImageList.SignalSignatures;
        constructor(properties?: Partial<ImageList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ImageList;
        connect<K extends keyof ImageList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImageList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImageList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InstallConfig {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {}
    }
    class InstallConfig extends Entity {
        static $gtype: GObject.GType<InstallConfig>;
        $signals: InstallConfig.SignalSignatures;
        constructor(properties?: Partial<InstallConfig.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): InstallConfig;
        connect<K extends keyof InstallConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfig.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfig.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallConfig.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_admin_password(): string;
        get_avatar_disk(): string;
        get_avatar_location(): string;
        get_driver_signing(): boolean;
        get_hardware_arch(): string;
        get_hostname(): string;
        get_installation_url(): string;
        get_l10n_keyboard(): string;
        get_l10n_language(): string;
        get_l10n_timezone(): string;
        get_post_install_drivers_disk(): string;
        get_post_install_drivers_location(): string;
        get_pre_install_drivers_disk(): string;
        get_pre_install_drivers_location(): string;
        get_reg_login(): string;
        get_reg_password(): string;
        get_reg_product_key(): string;
        get_script_disk(): string;
        get_target_disk(): string;
        get_user_administrator(): boolean;
        get_user_autologin(): boolean;
        get_user_login(): string;
        get_user_password(): string;
        get_user_realname(): string;
        set_admin_password(password: string): void;
        set_avatar_disk(disk: string): void;
        set_avatar_location(location: string): void;
        set_driver_signing(signing: boolean): void;
        set_hardware_arch(arch: string): void;
        set_hostname(hostname: string): void;
        set_installation_url(url: string): void;
        set_l10n_keyboard(keyboard: string): void;
        set_l10n_language(language: string): void;
        set_l10n_timezone(tz: string): void;
        set_post_install_drivers_disk(disk: string): void;
        set_post_install_drivers_location(location: string): void;
        set_pre_install_drivers_disk(disk: string): void;
        set_pre_install_drivers_location(location: string): void;
        set_reg_login(name: string): void;
        set_reg_password(password: string): void;
        set_reg_product_key(key: string): void;
        set_script_disk(disk: string): void;
        set_target_disk(disk: string): void;
        set_user_administrator(admin: boolean): void;
        set_user_autologin(autologin: boolean): void;
        set_user_login(username: string): void;
        set_user_password(password: string): void;
        set_user_realname(name: string): void;
    }
    namespace InstallConfigParam {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::policy": (pspec: GObject.ParamSpec) => void;
            "notify::value-map": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            name: string;
            policy: InstallConfigParamPolicy;
            value_map: Datamap;
            valueMap: Datamap;
        }
    }
    class InstallConfigParam extends Entity {
        static $gtype: GObject.GType<InstallConfigParam>;
        get name(): string;
        get policy(): InstallConfigParamPolicy;
        get value_map(): Datamap;
        set value_map(val: Datamap);
        get valueMap(): Datamap;
        set valueMap(val: Datamap);
        $signals: InstallConfigParam.SignalSignatures;
        constructor(properties?: Partial<InstallConfigParam.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](name: string): InstallConfigParam;
        connect<K extends keyof InstallConfigParam.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfigParam.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallConfigParam.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfigParam.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallConfigParam.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallConfigParam.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_policy(): InstallConfigParamPolicy;
        get_value_map(): Datamap;
        is_optional(): boolean;
        is_required(): boolean;
        set_value_map(datamap: Datamap): void;
    }
    namespace InstallConfigParamList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class InstallConfigParamList extends List {
        static $gtype: GObject.GType<InstallConfigParamList>;
        $signals: InstallConfigParamList.SignalSignatures;
        constructor(properties?: Partial<InstallConfigParamList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): InstallConfigParamList;
        connect<K extends keyof InstallConfigParamList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfigParamList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallConfigParamList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallConfigParamList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallConfigParamList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallConfigParamList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace InstallScript {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::avatar-format": (pspec: GObject.ParamSpec) => void;
            "notify::installation-source": (pspec: GObject.ParamSpec) => void;
            "notify::path-format": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-injection-method": (pspec: GObject.ParamSpec) => void;
            "notify::product-key-format": (pspec: GObject.ParamSpec) => void;
            "notify::profile": (pspec: GObject.ParamSpec) => void;
            "notify::template-data": (pspec: GObject.ParamSpec) => void;
            "notify::template-uri": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            avatar_format: AvatarFormat;
            avatarFormat: AvatarFormat;
            installation_source: InstallScriptInstallationSource;
            installationSource: InstallScriptInstallationSource;
            path_format: PathFormat;
            pathFormat: PathFormat;
            preferred_injection_method: InstallScriptInjectionMethod;
            preferredInjectionMethod: InstallScriptInjectionMethod;
            product_key_format: string;
            productKeyFormat: string;
            profile: string;
            template_data: string;
            templateData: string;
            template_uri: string;
            templateUri: string;
        }
    }
    class InstallScript extends Entity {
        static $gtype: GObject.GType<InstallScript>;
        get avatar_format(): AvatarFormat;
        get avatarFormat(): AvatarFormat;
        get installation_source(): InstallScriptInstallationSource;
        get installationSource(): InstallScriptInstallationSource;
        get path_format(): PathFormat;
        get pathFormat(): PathFormat;
        get preferred_injection_method(): InstallScriptInjectionMethod;
        set preferred_injection_method(val: InstallScriptInjectionMethod);
        get preferredInjectionMethod(): InstallScriptInjectionMethod;
        set preferredInjectionMethod(val: InstallScriptInjectionMethod);
        get product_key_format(): string;
        get productKeyFormat(): string;
        get profile(): string;
        get template_data(): string;
        get templateData(): string;
        get template_uri(): string;
        get templateUri(): string;
        $signals: InstallScript.SignalSignatures;
        constructor(properties?: Partial<InstallScript.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): InstallScript;
        static new_data(id: string, profile: string, templateData: string): InstallScript;
        static new_uri(id: string, profile: string, templateUri: string): InstallScript;
        connect<K extends keyof InstallScript.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallScript.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallScript.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallScript.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallScript.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallScript.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        generate(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
        generate_async(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        generate_async(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_async(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        generate_command_line(os: Os, config: InstallConfig): string;
        generate_command_line_for_media(media: Media, config: InstallConfig): string;
        generate_command_line_for_tree(tree: Tree, config: InstallConfig): string;
        generate_finish(res: Gio.AsyncResult): string;
        generate_for_media(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
        generate_for_media_async(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        generate_for_media_async(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_for_media_async(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        generate_for_media_finish(res: Gio.AsyncResult): string;
        generate_for_tree(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
        generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        generate_for_tree_finish(res: Gio.AsyncResult): string;
        generate_output(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
        generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
        generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        generate_output_finish(res: Gio.AsyncResult): Gio.File;
        generate_output_for_media(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
        generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
        generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File;
        generate_output_for_tree(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
        generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
        generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.File> | void;
        generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File;
        get_avatar_format(): AvatarFormat;
        get_can_post_install_drivers(): boolean;
        get_can_pre_install_drivers(): boolean;
        get_config_param(name: string): InstallConfigParam;
        get_config_param_list(): InstallScript[];
        get_config_params(): InstallConfigParamList;
        get_expected_filename(): string;
        get_injection_methods(): InstallScriptInjectionMethod;
        get_installation_source(): InstallScriptInstallationSource;
        get_needs_internet(): boolean;
        get_output_filename(): string;
        get_output_prefix(): string;
        get_path_format(): PathFormat;
        get_post_install_drivers_signing_req(): DeviceDriverSigningReq;
        get_pre_install_drivers_signing_req(): DeviceDriverSigningReq;
        get_preferred_injection_method(): InstallScriptInjectionMethod;
        get_product_key_format(): string;
        get_profile(): string;
        get_template_data(): string;
        get_template_uri(): string;
        has_config_param(config_param: InstallConfigParam): boolean;
        has_config_param_name(name: string): boolean;
        set_installation_source(source: InstallScriptInstallationSource): void;
        set_output_prefix(prefix: string): void;
        set_preferred_injection_method(method: InstallScriptInjectionMethod): void;
    }
    namespace InstallScriptList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class InstallScriptList extends List {
        static $gtype: GObject.GType<InstallScriptList>;
        $signals: InstallScriptList.SignalSignatures;
        constructor(properties?: Partial<InstallScriptList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): InstallScriptList;
        connect<K extends keyof InstallScriptList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallScriptList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallScriptList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InstallScriptList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallScriptList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InstallScriptList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): InstallScriptList;
        new_filtered(filter: Filter): InstallScriptList;
        new_intersection(sourceTwo: InstallScriptList): InstallScriptList;
        new_union(sourceTwo: InstallScriptList): InstallScriptList;
    }
    namespace List {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            element_type: GObject.GTypeInput;
            elementType: GObject.GTypeInput;
        }
    }
    abstract class List extends GObject.Object {
        static $gtype: GObject.GType<List>;
        get element_type(): GObject.GType;
        get elementType(): GObject.GType;
        $signals: List.SignalSignatures;
        constructor(properties?: Partial<List.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof List.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, List.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof List.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, List.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof List.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<List.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(entity: Entity): void;
        add_all(source: List): void;
        add_filtered(source: List, filter: Filter): void;
        add_intersection(sourceOne: List, sourceTwo: List): void;
        add_union(sourceOne: List, sourceTwo: List): void;
        find_by_id(id: string): Entity;
        get_element_type(): GObject.GType;
        get_elements(): Entity[];
        get_length(): number;
        get_nth(idx: number): Entity;
        new_copy(): List;
        new_filtered(filter: Filter): List;
        new_intersection(sourceTwo: List): List;
        new_union(sourceTwo: List): List;
    }
    namespace Loader {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;
        $signals: Loader.SignalSignatures;
        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Loader;
        connect<K extends keyof Loader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Loader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Loader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Loader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_db(): Db;
        process_default_path(): void;
        process_local_path(): void;
        process_path(path: string): void;
        process_system_path(): void;
        process_uri(uri: string): void;
        process_user_path(): void;
    }
    namespace Media {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::architecture": (pspec: GObject.ParamSpec) => void;
            "notify::eject-after-install": (pspec: GObject.ParamSpec) => void;
            "notify::initrd-path": (pspec: GObject.ParamSpec) => void;
            "notify::installer": (pspec: GObject.ParamSpec) => void;
            "notify::installer-reboots": (pspec: GObject.ParamSpec) => void;
            "notify::installer-script": (pspec: GObject.ParamSpec) => void;
            "notify::kernel-path": (pspec: GObject.ParamSpec) => void;
            "notify::languages": (pspec: GObject.ParamSpec) => void;
            "notify::live": (pspec: GObject.ParamSpec) => void;
            "notify::os": (pspec: GObject.ParamSpec) => void;
            "notify::publisher-id": (pspec: GObject.ParamSpec) => void;
            "notify::system-id": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::volume-id": (pspec: GObject.ParamSpec) => void;
            "notify::volume-size": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            application_id: string;
            applicationId: string;
            architecture: string;
            eject_after_install: boolean;
            ejectAfterInstall: boolean;
            initrd_path: string;
            initrdPath: string;
            installer: boolean;
            installer_reboots: number;
            installerReboots: number;
            installer_script: boolean;
            installerScript: boolean;
            kernel_path: string;
            kernelPath: string;
            languages: string[];
            live: boolean;
            os: Os;
            publisher_id: string;
            publisherId: string;
            system_id: string;
            systemId: string;
            url: string;
            volume_id: string;
            volumeId: string;
            volume_size: bigint | number;
            volumeSize: bigint | number;
        }
    }
    class Media extends Entity {
        static $gtype: GObject.GType<Media>;
        get application_id(): string;
        set application_id(val: string);
        get applicationId(): string;
        set applicationId(val: string);
        get architecture(): string;
        set architecture(val: string);
        get eject_after_install(): boolean;
        set eject_after_install(val: boolean);
        get ejectAfterInstall(): boolean;
        set ejectAfterInstall(val: boolean);
        get initrd_path(): string;
        set initrd_path(val: string);
        get initrdPath(): string;
        set initrdPath(val: string);
        get installer(): boolean;
        set installer(val: boolean);
        get installer_reboots(): number;
        set installer_reboots(val: number);
        get installerReboots(): number;
        set installerReboots(val: number);
        get installer_script(): boolean;
        set installer_script(val: boolean);
        get installerScript(): boolean;
        set installerScript(val: boolean);
        get kernel_path(): string;
        set kernel_path(val: string);
        get kernelPath(): string;
        set kernelPath(val: string);
        get languages(): string[];
        get live(): boolean;
        set live(val: boolean);
        get os(): Os;
        set os(val: Os);
        get publisher_id(): string;
        set publisher_id(val: string);
        get publisherId(): string;
        set publisherId(val: string);
        get system_id(): string;
        set system_id(val: string);
        get systemId(): string;
        set systemId(val: string);
        get url(): string;
        set url(val: string);
        get volume_id(): string;
        set volume_id(val: string);
        get volumeId(): string;
        set volumeId(val: string);
        get volume_size(): number;
        set volume_size(val: bigint | number);
        get volumeSize(): number;
        set volumeSize(val: bigint | number);
        $signals: Media.SignalSignatures;
        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, architecture: string): Media;
        connect<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Media.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Media.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static create_from_location(location: string, cancellable: Gio.Cancellable | null): Media;
        static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Media> | null): void;
        static create_from_location_finish(res: Gio.AsyncResult): Media;
        static create_from_location_with_flags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media;
        static create_from_location_with_flags_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Media> | null, flags: number): void;
        static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media;
        add_install_script(script: InstallScript): void;
        get_application_id(): string;
        get_architecture(): string;
        get_eject_after_install(): boolean;
        get_initrd_path(): string;
        get_install_script_list(): InstallScriptList;
        get_installer(): boolean;
        get_installer_reboots(): number;
        get_kernel_path(): string;
        get_languages(): string[];
        get_live(): boolean;
        get_os(): Os;
        get_os_variants(): OsVariantList;
        get_publisher_id(): string;
        get_system_id(): string;
        get_url(): string;
        get_volume_id(): string;
        get_volume_size(): number;
        is_bootable(): boolean;
        matches(reference: Media): boolean;
        supports_installer_script(): boolean;
    }
    namespace MediaList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class MediaList extends List {
        static $gtype: GObject.GType<MediaList>;
        $signals: MediaList.SignalSignatures;
        constructor(properties?: Partial<MediaList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): MediaList;
        connect<K extends keyof MediaList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): MediaList;
        new_filtered(filter: Filter): MediaList;
        new_intersection(sourceTwo: MediaList): MediaList;
        new_union(sourceTwo: MediaList): MediaList;
    }
    namespace Os {
        interface SignalSignatures extends Product.SignalSignatures {
            "notify::cloud-image-username": (pspec: GObject.ParamSpec) => void;
            "notify::distro": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::kernel-url-argument": (pspec: GObject.ParamSpec) => void;
            "notify::codename": (pspec: GObject.ParamSpec) => void;
            "notify::logo": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::short-id": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Product.ConstructorProps {
            cloud_image_username: string;
            cloudImageUsername: string;
            distro: string;
            family: string;
            kernel_url_argument: string;
            kernelUrlArgument: string;
        }
    }
    class Os extends Product {
        static $gtype: GObject.GType<Os>;
        get cloud_image_username(): string;
        get cloudImageUsername(): string;
        get distro(): string;
        get family(): string;
        get kernel_url_argument(): string;
        get kernelUrlArgument(): string;
        $signals: Os.SignalSignatures;
        constructor(properties?: Partial<Os.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): Os;
        connect<K extends keyof Os.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Os.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Os.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Os.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Os.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Os.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_device(dev: Device): DeviceLink;
        add_device_driver(driver: DeviceDriver): void;
        add_firmware(firmware: Firmware): void;
        add_image(image: Image): void;
        add_install_script(script: InstallScript): void;
        add_maximum_resources(resources: Resources): void;
        add_media(media: Media): void;
        add_minimum_resources(resources: Resources): void;
        add_network_install_resources(resources: Resources): void;
        add_recommended_resources(resources: Resources): void;
        add_tree(tree: Tree): void;
        add_variant(variant: OsVariant): void;
        find_install_script(profile: string): InstallScript;
        get_all_device_links(filter: Filter | null): DeviceLinkList;
        get_all_devices(filter: Filter | null): DeviceList;
        get_cloud_image_username(): string;
        get_complete_firmware_list(filter: Filter | null): FirmwareList;
        get_device_drivers(): DeviceDriverList;
        get_device_drivers_prioritized(): DeviceDriverList;
        get_device_links(filter: Filter | null): DeviceLinkList;
        get_devices(filter: Filter | null): DeviceList;
        get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList;
        get_distro(): string;
        get_family(): string;
        get_firmware_list(filter: Filter | null): FirmwareList;
        get_image_list(): ImageList;
        get_install_script_list(): InstallScriptList;
        get_kernel_url_argument(): string;
        get_maximum_resources(): ResourcesList;
        get_media_list(): MediaList;
        get_minimum_resources(): ResourcesList;
        get_network_install_resources(): ResourcesList;
        get_recommended_resources(): ResourcesList;
        get_release_status(): ReleaseStatus;
        get_tree_list(): TreeList;
        get_variant_list(): OsVariantList;
    }
    namespace OsList {
        interface SignalSignatures extends ProductList.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends ProductList.ConstructorProps {}
    }
    class OsList extends ProductList {
        static $gtype: GObject.GType<OsList>;
        $signals: OsList.SignalSignatures;
        constructor(properties?: Partial<OsList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): OsList;
        connect<K extends keyof OsList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OsList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OsList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OsList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): OsList;
        new_filtered(filter: Filter): OsList;
        new_intersection(sourceTwo: OsList): OsList;
        new_union(sourceTwo: OsList): OsList;
    }
    namespace OsVariant {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            name: string;
        }
    }
    class OsVariant extends Entity {
        static $gtype: GObject.GType<OsVariant>;
        get name(): string;
        set name(val: string);
        $signals: OsVariant.SignalSignatures;
        constructor(properties?: Partial<OsVariant.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): OsVariant;
        connect<K extends keyof OsVariant.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsVariant.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OsVariant.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsVariant.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OsVariant.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OsVariant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
    }
    namespace OsVariantList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class OsVariantList extends List {
        static $gtype: GObject.GType<OsVariantList>;
        $signals: OsVariantList.SignalSignatures;
        constructor(properties?: Partial<OsVariantList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): OsVariantList;
        connect<K extends keyof OsVariantList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsVariantList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OsVariantList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsVariantList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OsVariantList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OsVariantList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Platform {
        interface SignalSignatures extends Product.SignalSignatures {
            "notify::codename": (pspec: GObject.ParamSpec) => void;
            "notify::logo": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::short-id": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Product.ConstructorProps {}
    }
    class Platform extends Product {
        static $gtype: GObject.GType<Platform>;
        $signals: Platform.SignalSignatures;
        constructor(properties?: Partial<Platform.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string): Platform;
        connect<K extends keyof Platform.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Platform.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Platform.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Platform.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Platform.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Platform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_device(dev: Device): DeviceLink;
        get_all_devices(filter: Filter | null): DeviceList;
        get_device_links(filter: Filter | null): DeviceLinkList;
        get_devices(filter: Filter | null): DeviceList;
    }
    namespace PlatformList {
        interface SignalSignatures extends ProductList.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends ProductList.ConstructorProps {}
    }
    class PlatformList extends ProductList {
        static $gtype: GObject.GType<PlatformList>;
        $signals: PlatformList.SignalSignatures;
        constructor(properties?: Partial<PlatformList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): PlatformList;
        connect<K extends keyof PlatformList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlatformList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlatformList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlatformList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlatformList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlatformList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): PlatformList;
        new_filtered(filter: Filter): PlatformList;
        new_intersection(sourceTwo: PlatformList): PlatformList;
        new_union(sourceTwo: PlatformList): PlatformList;
    }
    namespace Product {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::codename": (pspec: GObject.ParamSpec) => void;
            "notify::logo": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::short-id": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            codename: string;
            logo: string;
            name: string;
            short_id: string;
            shortId: string;
            vendor: string;
            version: string;
        }
    }
    abstract class Product extends Entity {
        static $gtype: GObject.GType<Product>;
        get codename(): string;
        get logo(): string;
        get name(): string;
        get short_id(): string;
        get shortId(): string;
        get vendor(): string;
        get version(): string;
        $signals: Product.SignalSignatures;
        constructor(properties?: Partial<Product.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Product.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Product.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Product.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Product.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Product.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Product.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_related(relshp: ProductRelationship, otherproduct: Product): void;
        get_codename(): string;
        get_eol_date(): GLib.Date;
        get_eol_date_string(): string;
        get_logo(): string;
        get_name(): string;
        get_related(relshp: ProductRelationship): ProductList;
        get_release_date(): GLib.Date;
        get_release_date_string(): string;
        get_short_id(): string;
        get_short_id_list(): string[];
        get_vendor(): string;
        get_version(): string;
    }
    namespace ProductFilter {
        interface SignalSignatures extends Filter.SignalSignatures {}
        interface ConstructorProps extends Filter.ConstructorProps {}
    }
    class ProductFilter extends Filter {
        static $gtype: GObject.GType<ProductFilter>;
        $signals: ProductFilter.SignalSignatures;
        constructor(properties?: Partial<ProductFilter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ProductFilter;
        connect<K extends keyof ProductFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProductFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProductFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProductFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProductFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProductFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add_product_constraint(relshp: ProductRelationship, product: Product): number;
        add_support_date_constraint(when: GLib.Date): void;
        clear_product_constraint(relshp: ProductRelationship): void;
        clear_product_constraints(): void;
        get_product_constraint_values(relshp: ProductRelationship): Product[];
    }
    namespace ProductList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class ProductList extends List {
        static $gtype: GObject.GType<ProductList>;
        $signals: ProductList.SignalSignatures;
        constructor(properties?: Partial<ProductList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ProductList;
        connect<K extends keyof ProductList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProductList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProductList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProductList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProductList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProductList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): ProductList;
        new_filtered(filter: Filter): ProductList;
        new_intersection(sourceTwo: ProductList): ProductList;
        new_union(sourceTwo: ProductList): ProductList;
    }
    namespace Resources {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::architecture": (pspec: GObject.ParamSpec) => void;
            "notify::cpu": (pspec: GObject.ParamSpec) => void;
            "notify::n-cpus": (pspec: GObject.ParamSpec) => void;
            "notify::ram": (pspec: GObject.ParamSpec) => void;
            "notify::storage": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            architecture: string;
            cpu: bigint | number;
            n_cpus: number;
            nCpus: number;
            ram: bigint | number;
            storage: bigint | number;
        }
    }
    class Resources extends Entity {
        static $gtype: GObject.GType<Resources>;
        get architecture(): string;
        get cpu(): number;
        set cpu(val: bigint | number);
        get n_cpus(): number;
        set n_cpus(val: number);
        get nCpus(): number;
        set nCpus(val: number);
        get ram(): number;
        set ram(val: bigint | number);
        get storage(): number;
        set storage(val: bigint | number);
        $signals: Resources.SignalSignatures;
        constructor(properties?: Partial<Resources.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, architecture: string): Resources;
        connect<K extends keyof Resources.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resources.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Resources.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resources.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Resources.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Resources.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_architecture(): string;
        get_cpu(): number;
        get_n_cpus(): number;
        get_ram(): number;
        get_storage(): number;
        set_cpu(cpu: bigint | number): void;
        set_n_cpus(n_cpus: number): void;
        set_ram(ram: bigint | number): void;
        set_storage(storage: bigint | number): void;
    }
    namespace ResourcesList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class ResourcesList extends List {
        static $gtype: GObject.GType<ResourcesList>;
        $signals: ResourcesList.SignalSignatures;
        constructor(properties?: Partial<ResourcesList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): ResourcesList;
        connect<K extends keyof ResourcesList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourcesList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResourcesList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourcesList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResourcesList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourcesList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): ResourcesList;
        new_filtered(filter: Filter): ResourcesList;
        new_intersection(sourceTwo: ResourcesList): ResourcesList;
        new_union(sourceTwo: ResourcesList): ResourcesList;
    }
    namespace Tree {
        interface SignalSignatures extends Entity.SignalSignatures {
            "notify::architecture": (pspec: GObject.ParamSpec) => void;
            "notify::boot-iso-path": (pspec: GObject.ParamSpec) => void;
            "notify::has-treeinfo": (pspec: GObject.ParamSpec) => void;
            "notify::initrd-path": (pspec: GObject.ParamSpec) => void;
            "notify::kernel-path": (pspec: GObject.ParamSpec) => void;
            "notify::os": (pspec: GObject.ParamSpec) => void;
            "notify::treeinfo-arch": (pspec: GObject.ParamSpec) => void;
            "notify::treeinfo-family": (pspec: GObject.ParamSpec) => void;
            "notify::treeinfo-variant": (pspec: GObject.ParamSpec) => void;
            "notify::treeinfo-version": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Entity.ConstructorProps {
            architecture: string;
            boot_iso_path: string;
            bootIsoPath: string;
            has_treeinfo: boolean;
            hasTreeinfo: boolean;
            initrd_path: string;
            initrdPath: string;
            kernel_path: string;
            kernelPath: string;
            os: Os;
            treeinfo_arch: string;
            treeinfoArch: string;
            treeinfo_family: string;
            treeinfoFamily: string;
            treeinfo_variant: string;
            treeinfoVariant: string;
            treeinfo_version: string;
            treeinfoVersion: string;
            url: string;
        }
    }
    class Tree extends Entity {
        static $gtype: GObject.GType<Tree>;
        get architecture(): string;
        set architecture(val: string);
        get boot_iso_path(): string;
        set boot_iso_path(val: string);
        get bootIsoPath(): string;
        set bootIsoPath(val: string);
        get has_treeinfo(): boolean;
        set has_treeinfo(val: boolean);
        get hasTreeinfo(): boolean;
        set hasTreeinfo(val: boolean);
        get initrd_path(): string;
        set initrd_path(val: string);
        get initrdPath(): string;
        set initrdPath(val: string);
        get kernel_path(): string;
        set kernel_path(val: string);
        get kernelPath(): string;
        set kernelPath(val: string);
        get os(): Os;
        set os(val: Os);
        get treeinfo_arch(): string;
        set treeinfo_arch(val: string);
        get treeinfoArch(): string;
        set treeinfoArch(val: string);
        get treeinfo_family(): string;
        set treeinfo_family(val: string);
        get treeinfoFamily(): string;
        set treeinfoFamily(val: string);
        get treeinfo_variant(): string;
        set treeinfo_variant(val: string);
        get treeinfoVariant(): string;
        set treeinfoVariant(val: string);
        get treeinfo_version(): string;
        set treeinfo_version(val: string);
        get treeinfoVersion(): string;
        set treeinfoVersion(val: string);
        get url(): string;
        set url(val: string);
        $signals: Tree.SignalSignatures;
        constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](id: string, architecture: string): Tree;
        connect<K extends keyof Tree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tree.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tree.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static create_from_location(location: string, cancellable: Gio.Cancellable | null): Tree;
        static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Tree> | null): void;
        static create_from_location_finish(res: Gio.AsyncResult): Tree;
        static create_from_treeinfo(treeinfo: string, location: string): Tree;
        get_architecture(): string;
        get_boot_iso_path(): string;
        get_initrd_path(): string;
        get_kernel_path(): string;
        get_os(): Os;
        get_os_variants(): OsVariantList;
        get_treeinfo_arch(): string;
        get_treeinfo_family(): string;
        get_treeinfo_variant(): string;
        get_treeinfo_version(): string;
        get_url(): string;
        matches(reference: Tree): boolean;
        set_os(os: Os): void;
    }
    namespace TreeList {
        interface SignalSignatures extends List.SignalSignatures {
            "notify::element-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends List.ConstructorProps {}
    }
    class TreeList extends List {
        static $gtype: GObject.GType<TreeList>;
        $signals: TreeList.SignalSignatures;
        constructor(properties?: Partial<TreeList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): TreeList;
        connect<K extends keyof TreeList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TreeList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TreeList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        new_copy(): TreeList;
        new_filtered(filter: Filter): TreeList;
        new_intersection(sourceTwo: TreeList): TreeList;
        new_union(sourceTwo: TreeList): TreeList;
    }
    type AvatarFormatClass = typeof AvatarFormat;
    abstract class AvatarFormatPrivate {
        static $gtype: GObject.GType<AvatarFormatPrivate>;
    }
    type DatamapClass = typeof Datamap;
    type DatamapListClass = typeof DatamapList;
    abstract class DatamapListPrivate {
        static $gtype: GObject.GType<DatamapListPrivate>;
    }
    abstract class DatamapPrivate {
        static $gtype: GObject.GType<DatamapPrivate>;
    }
    type DbClass = typeof Db;
    abstract class DbPrivate {
        static $gtype: GObject.GType<DbPrivate>;
    }
    type DeploymentClass = typeof Deployment;
    type DeploymentListClass = typeof DeploymentList;
    abstract class DeploymentListPrivate {
        static $gtype: GObject.GType<DeploymentListPrivate>;
    }
    abstract class DeploymentPrivate {
        static $gtype: GObject.GType<DeploymentPrivate>;
    }
    type DeviceClass = typeof Device;
    type DeviceDriverClass = typeof DeviceDriver;
    type DeviceDriverListClass = typeof DeviceDriverList;
    abstract class DeviceDriverListPrivate {
        static $gtype: GObject.GType<DeviceDriverListPrivate>;
    }
    abstract class DeviceDriverPrivate {
        static $gtype: GObject.GType<DeviceDriverPrivate>;
    }
    type DeviceLinkClass = typeof DeviceLink;
    type DeviceLinkFilterClass = typeof DeviceLinkFilter;
    abstract class DeviceLinkFilterPrivate {
        static $gtype: GObject.GType<DeviceLinkFilterPrivate>;
    }
    type DeviceLinkListClass = typeof DeviceLinkList;
    abstract class DeviceLinkListPrivate {
        static $gtype: GObject.GType<DeviceLinkListPrivate>;
    }
    abstract class DeviceLinkPrivate {
        static $gtype: GObject.GType<DeviceLinkPrivate>;
    }
    type DeviceListClass = typeof DeviceList;
    abstract class DeviceListPrivate {
        static $gtype: GObject.GType<DeviceListPrivate>;
    }
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    type EntityClass = typeof Entity;
    abstract class EntityPrivate {
        static $gtype: GObject.GType<EntityPrivate>;
    }
    type FilterClass = typeof Filter;
    abstract class FilterPrivate {
        static $gtype: GObject.GType<FilterPrivate>;
    }
    type FirmwareClass = typeof Firmware;
    type FirmwareListClass = typeof FirmwareList;
    abstract class FirmwareListPrivate {
        static $gtype: GObject.GType<FirmwareListPrivate>;
    }
    abstract class FirmwarePrivate {
        static $gtype: GObject.GType<FirmwarePrivate>;
    }
    type ImageClass = typeof Image;
    type ImageListClass = typeof ImageList;
    abstract class ImageListPrivate {
        static $gtype: GObject.GType<ImageListPrivate>;
    }
    abstract class ImagePrivate {
        static $gtype: GObject.GType<ImagePrivate>;
    }
    type InstallConfigClass = typeof InstallConfig;
    type InstallConfigParamClass = typeof InstallConfigParam;
    type InstallConfigParamListClass = typeof InstallConfigParamList;
    abstract class InstallConfigParamListPrivate {
        static $gtype: GObject.GType<InstallConfigParamListPrivate>;
    }
    abstract class InstallConfigParamPrivate {
        static $gtype: GObject.GType<InstallConfigParamPrivate>;
    }
    abstract class InstallConfigPrivate {
        static $gtype: GObject.GType<InstallConfigPrivate>;
    }
    type InstallScriptClass = typeof InstallScript;
    type InstallScriptListClass = typeof InstallScriptList;
    abstract class InstallScriptListPrivate {
        static $gtype: GObject.GType<InstallScriptListPrivate>;
    }
    abstract class InstallScriptPrivate {
        static $gtype: GObject.GType<InstallScriptPrivate>;
    }
    type ListClass = typeof List;
    abstract class ListPrivate {
        static $gtype: GObject.GType<ListPrivate>;
    }
    type LoaderClass = typeof Loader;
    abstract class LoaderPrivate {
        static $gtype: GObject.GType<LoaderPrivate>;
    }
    type MediaClass = typeof Media;
    type MediaListClass = typeof MediaList;
    abstract class MediaListPrivate {
        static $gtype: GObject.GType<MediaListPrivate>;
    }
    abstract class MediaPrivate {
        static $gtype: GObject.GType<MediaPrivate>;
    }
    type OsClass = typeof Os;
    type OsListClass = typeof OsList;
    abstract class OsListPrivate {
        static $gtype: GObject.GType<OsListPrivate>;
    }
    abstract class OsPrivate {
        static $gtype: GObject.GType<OsPrivate>;
    }
    type OsVariantClass = typeof OsVariant;
    type OsVariantListClass = typeof OsVariantList;
    abstract class OsVariantListPrivate {
        static $gtype: GObject.GType<OsVariantListPrivate>;
    }
    abstract class OsVariantPrivate {
        static $gtype: GObject.GType<OsVariantPrivate>;
    }
    type PlatformClass = typeof Platform;
    type PlatformListClass = typeof PlatformList;
    abstract class PlatformListPrivate {
        static $gtype: GObject.GType<PlatformListPrivate>;
    }
    abstract class PlatformPrivate {
        static $gtype: GObject.GType<PlatformPrivate>;
    }
    type ProductClass = typeof Product;
    type ProductFilterClass = typeof ProductFilter;
    abstract class ProductFilterPrivate {
        static $gtype: GObject.GType<ProductFilterPrivate>;
    }
    type ProductListClass = typeof ProductList;
    abstract class ProductListPrivate {
        static $gtype: GObject.GType<ProductListPrivate>;
    }
    abstract class ProductPrivate {
        static $gtype: GObject.GType<ProductPrivate>;
    }
    type ResourcesClass = typeof Resources;
    type ResourcesListClass = typeof ResourcesList;
    abstract class ResourcesListPrivate {
        static $gtype: GObject.GType<ResourcesListPrivate>;
    }
    abstract class ResourcesPrivate {
        static $gtype: GObject.GType<ResourcesPrivate>;
    }
    type TreeClass = typeof Tree;
    type TreeListClass = typeof TreeList;
    abstract class TreeListPrivate {
        static $gtype: GObject.GType<TreeListPrivate>;
    }
    abstract class TreePrivate {
        static $gtype: GObject.GType<TreePrivate>;
    }
    const __name__: string;
    const __version__: string;
}
export default Libosinfo;
}
declare module 'gi://Libosinfo' {
    import Libosinfo10 from 'gi://Libosinfo?version=1.0';
    export default Libosinfo10;
}
