declare module 'gi://Colord?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Colord {
    enum ClientError {
        INTERNAL,
        ALREADY_EXISTS,
        FAILED_TO_AUTHENTICATE,
        NOT_SUPPORTED,
        NOT_FOUND,
        INPUT_INVALID,
        FILE_INVALID,
    }
    enum ColorBlackbodyFlags {
        NONE,
        USE_PLANCKIAN,
    }
    enum Colorspace {
        UNKNOWN,
        XYZ,
        LAB,
        LUV,
        YCBCR,
        YXY,
        RGB,
        GRAY,
        HSV,
        CMYK,
        CMY,
    }
    enum DeviceError {
        INTERNAL,
        PROFILE_DOES_NOT_EXIST,
        PROFILE_ALREADY_ADDED,
        PROFILING,
        NOTHING_MATCHED,
        FAILED_TO_INHIBIT,
        FAILED_TO_UNINHIBIT,
        FAILED_TO_AUTHENTICATE,
        NOT_ENABLED,
    }
    enum DeviceKind {
        UNKNOWN,
        DISPLAY,
        SCANNER,
        PRINTER,
        CAMERA,
        WEBCAM,
    }
    enum DeviceMode {
        UNKNOWN,
        PHYSICAL,
        VIRTUAL,
    }
    enum DeviceRelation {
        UNKNOWN,
        SOFT,
        HARD,
    }
    enum IccError {
        FAILED_TO_OPEN,
        FAILED_TO_PARSE,
        INVALID_LOCALE,
        NO_DATA,
        FAILED_TO_SAVE,
        FAILED_TO_CREATE,
        INVALID_COLORSPACE,
        CORRUPTION_DETECTED,
        INTERNAL,
    }
    enum IccSaveFlags {
        NONE,
    }
    enum It8Error {
        FAILED,
        INVALID_FORMAT,
        UNKNOWN_KIND,
    }
    enum It8Kind {
        UNKNOWN,
        TI1,
        TI3,
        CCMX,
        CAL,
        CCSS,
        SPECT,
        CMF,
    }
    enum ObjectScope {
        UNKNOWN,
        NORMAL,
        TEMP,
        DISK,
    }
    enum ProfileError {
        INTERNAL,
        ALREADY_INSTALLED,
        FAILED_TO_WRITE,
        FAILED_TO_PARSE,
        FAILED_TO_READ,
        FAILED_TO_AUTHENTICATE,
        PROPERTY_INVALID,
        FAILED_TO_GET_UID,
    }
    enum ProfileKind {
        UNKNOWN,
        INPUT_DEVICE,
        DISPLAY_DEVICE,
        OUTPUT_DEVICE,
        DEVICELINK,
        COLORSPACE_CONVERSION,
        ABSTRACT,
        NAMED_COLOR,
    }
    enum ProfileQuality {
        LOW,
        MEDIUM,
        HIGH,
    }
    enum ProfileWarning {
        NONE,
        DESCRIPTION_MISSING,
        COPYRIGHT_MISSING,
        VCGT_NON_MONOTONIC,
        SCUM_DOT,
        GRAY_AXIS_INVALID,
        GRAY_AXIS_NON_MONOTONIC,
        PRIMARIES_INVALID,
        PRIMARIES_NON_ADDITIVE,
        PRIMARIES_UNLIKELY,
        WHITEPOINT_INVALID,
        WHITEPOINT_UNLIKELY,
    }
    enum RenderingIntent {
        UNKNOWN,
        PERCEPTUAL,
        RELATIVE_COLORIMETRIC,
        SATURATION,
        ABSOLUTE_COLORIMETRIC,
    }
    enum SensorCap {
        UNKNOWN,
        LCD,
        CRT,
        PRINTER,
        SPOT,
        PROJECTOR,
        AMBIENT,
        CALIBRATION,
        LED,
        PLASMA,
        LCD_CCFL,
        LCD_RGB_LED,
        LCD_WHITE_LED,
        WIDE_GAMUT_LCD_CCFL,
        WIDE_GAMUT_LCD_RGB_LED,
        SPECTRAL,
        CALIBRATION_DARK,
        CALIBRATION_IRRADIANCE,
    }
    enum SensorError {
        NO_SUPPORT,
        NO_DATA,
        INTERNAL,
        ALREADY_LOCKED,
        NOT_LOCKED,
        IN_USE,
        FAILED_TO_AUTHENTICATE,
        REQUIRED_POSITION_CALIBRATE,
        REQUIRED_POSITION_SURFACE,
        REQUIRED_DARK_CALIBRATION,
        REQUIRED_IRRADIANCE_CALIBRATION,
    }
    enum SensorKind {
        UNKNOWN,
        DUMMY,
        HUEY,
        COLOR_MUNKI_PHOTO,
        SPYDER,
        DTP20,
        DTP22,
        DTP41,
        DTP51,
        DTP94,
        SPECTRO_SCAN,
        I1_PRO,
        COLORIMTRE_HCFR,
        I1_DISPLAY3,
        COLORHUG,
        SPYDER2,
        SPYDER3,
        COLORHUG_PLUS,
        I1_DISPLAY1,
        I1_DISPLAY2,
        DTP92,
        I1_MONITOR,
        SPYDER4,
        COLOR_MUNKI_SMILE,
        COLORHUG2,
        SPYDER5,
        SPARK,
        SPYDERX,
    }
    enum SensorState {
        UNKNOWN,
        STARTING,
        IDLE,
        MEASURING,
        BUSY,
    }
    enum StandardSpace {
        UNKNOWN,
        SRGB,
        ADOBE_RGB,
        PROPHOTO_RGB,
    }
    const CLIENT_PROPERTY_DAEMON_VERSION: string;
    const CLIENT_PROPERTY_SYSTEM_MODEL: string;
    const CLIENT_PROPERTY_SYSTEM_VENDOR: string;
    const DEVICE_METADATA_OUTPUT_EDID_MD5: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string;
    const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string;
    const DEVICE_METADATA_OWNER_CMDLINE: string;
    const DEVICE_METADATA_XRANDR_NAME: string;
    const DEVICE_PROPERTY_COLORSPACE: string;
    const DEVICE_PROPERTY_CREATED: string;
    const DEVICE_PROPERTY_EMBEDDED: string;
    const DEVICE_PROPERTY_ENABLED: string;
    const DEVICE_PROPERTY_FORMAT: string;
    const DEVICE_PROPERTY_ID: string;
    const DEVICE_PROPERTY_KIND: string;
    const DEVICE_PROPERTY_METADATA: string;
    const DEVICE_PROPERTY_MODE: string;
    const DEVICE_PROPERTY_MODEL: string;
    const DEVICE_PROPERTY_MODIFIED: string;
    const DEVICE_PROPERTY_OWNER: string;
    const DEVICE_PROPERTY_PROFILES: string;
    const DEVICE_PROPERTY_PROFILING_INHIBITORS: string;
    const DEVICE_PROPERTY_SCOPE: string;
    const DEVICE_PROPERTY_SEAT: string;
    const DEVICE_PROPERTY_SERIAL: string;
    const DEVICE_PROPERTY_VENDOR: string;
    const PIXEL_FORMAT_ARGB32: number;
    const PIXEL_FORMAT_BGRA32: number;
    const PIXEL_FORMAT_CMYK32: number;
    const PIXEL_FORMAT_RGB24: number;
    const PIXEL_FORMAT_RGBA32: number;
    const PIXEL_FORMAT_UNKNOWN: number;
    const PROFILE_METADATA_ACCURACY_DE76_AVG: string;
    const PROFILE_METADATA_ACCURACY_DE76_MAX: string;
    const PROFILE_METADATA_ACCURACY_DE76_RMS: string;
    const PROFILE_METADATA_CMF_BINARY: string;
    const PROFILE_METADATA_CMF_PRODUCT: string;
    const PROFILE_METADATA_CMF_VERSION: string;
    const PROFILE_METADATA_CONNECTION_TYPE: string;
    const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string;
    const PROFILE_METADATA_CONNECTION_TYPE_DVI: string;
    const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string;
    const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string;
    const PROFILE_METADATA_CONNECTION_TYPE_VGA: string;
    const PROFILE_METADATA_DATA_SOURCE: string;
    const PROFILE_METADATA_DATA_SOURCE_CALIB: string;
    const PROFILE_METADATA_DATA_SOURCE_EDID: string;
    const PROFILE_METADATA_DATA_SOURCE_STANDARD: string;
    const PROFILE_METADATA_DATA_SOURCE_TEST: string;
    const PROFILE_METADATA_EDID_MD5: string;
    const PROFILE_METADATA_EDID_MNFT: string;
    const PROFILE_METADATA_EDID_MODEL: string;
    const PROFILE_METADATA_EDID_SERIAL: string;
    const PROFILE_METADATA_EDID_VENDOR: string;
    const PROFILE_METADATA_FILE_CHECKSUM: string;
    const PROFILE_METADATA_LICENSE: string;
    const PROFILE_METADATA_MAPPING_DEVICE_ID: string;
    const PROFILE_METADATA_MAPPING_FORMAT: string;
    const PROFILE_METADATA_MAPPING_QUALIFIER: string;
    const PROFILE_METADATA_MEASUREMENT_DEVICE: string;
    const PROFILE_METADATA_QUALITY: string;
    const PROFILE_METADATA_QUALITY_HIGH: string;
    const PROFILE_METADATA_QUALITY_LOW: string;
    const PROFILE_METADATA_QUALITY_MEDIUM: string;
    const PROFILE_METADATA_SCREEN_BRIGHTNESS: string;
    const PROFILE_METADATA_SCREEN_SURFACE: string;
    const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string;
    const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string;
    const PROFILE_METADATA_STANDARD_SPACE: string;
    const PROFILE_PROPERTY_COLORSPACE: string;
    const PROFILE_PROPERTY_CREATED: string;
    const PROFILE_PROPERTY_FILENAME: string;
    const PROFILE_PROPERTY_FORMAT: string;
    const PROFILE_PROPERTY_HAS_VCGT: string;
    const PROFILE_PROPERTY_ID: string;
    const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string;
    const PROFILE_PROPERTY_KIND: string;
    const PROFILE_PROPERTY_METADATA: string;
    const PROFILE_PROPERTY_OWNER: string;
    const PROFILE_PROPERTY_QUALIFIER: string;
    const PROFILE_PROPERTY_SCOPE: string;
    const PROFILE_PROPERTY_TITLE: string;
    const PROFILE_PROPERTY_WARNINGS: string;
    const SENSOR_METADATA_IMAGE_ATTACH: string;
    const SENSOR_METADATA_IMAGE_CALIBRATE: string;
    const SENSOR_METADATA_IMAGE_SCREEN: string;
    const SENSOR_PROPERTY_CAPABILITIES: string;
    const SENSOR_PROPERTY_EMBEDDED: string;
    const SENSOR_PROPERTY_ID: string;
    const SENSOR_PROPERTY_KIND: string;
    const SENSOR_PROPERTY_LOCKED: string;
    const SENSOR_PROPERTY_METADATA: string;
    const SENSOR_PROPERTY_MODE: string;
    const SENSOR_PROPERTY_MODEL: string;
    const SENSOR_PROPERTY_NATIVE: string;
    const SENSOR_PROPERTY_OPTIONS: string;
    const SENSOR_PROPERTY_SERIAL: string;
    const SENSOR_PROPERTY_STATE: string;
    const SENSOR_PROPERTY_VENDOR: string;
    function color_get_blackbody_rgb(temp: number, result: ColorRGB): boolean;
    function color_get_blackbody_rgb_full(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean;
    function color_rgb8_to_rgb(src: ColorRGB8, dest: ColorRGB): void;
    function color_rgb_array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
    function color_rgb_array_is_monotonic(array: ColorRGB[]): boolean;
    function color_rgb_array_new(): ColorRGB[];
    function colorspace_from_string(colorspace: string): Colorspace;
    function colorspace_to_string(colorspace: Colorspace): string;
    function mat33_clear(src: Mat3x3): void;
    function mat33_copy(src: Mat3x3, dest: Mat3x3): void;
    function mat33_determinant(src: Mat3x3): number;
    function mat33_get_data(src: Mat3x3): number;
    function mat33_init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
    function mat33_is_finite(mat: Mat3x3): boolean;
    function mat33_matrix_multiply(mat_src1: Mat3x3, mat_src2: Mat3x3, mat_dest: Mat3x3): void;
    function mat33_normalize(src: Mat3x3, dest: Mat3x3): void;
    function mat33_reciprocal(src: Mat3x3, dest: Mat3x3): boolean;
    function mat33_scalar_multiply(mat_src: Mat3x3, value: number, mat_dest: Mat3x3): void;
    function mat33_set_identity(src: Mat3x3): void;
    function mat33_to_string(src: Mat3x3): string;
    function mat33_vector_multiply(mat_src: Mat3x3, vec_src: Vec3, vec_dest: Vec3): void;
    function object_scope_from_string(object_scope: string): ObjectScope;
    function object_scope_to_string(object_scope: ObjectScope): string;
    function pixel_format_from_string(pixel_format: string): PixelFormat;
    function pixel_format_to_string(pixel_format: PixelFormat): string;
    function rendering_intent_from_string(rendering_intent: string): RenderingIntent;
    function rendering_intent_to_string(rendering_intent: RenderingIntent): string;
    function standard_space_from_string(standard_space: string): StandardSpace;
    function standard_space_to_string(standard_space: StandardSpace): string;
    enum IccLoadFlags {
        NONE,
        NAMED_COLORS,
        TRANSLATIONS,
        METADATA,
        FALLBACK_MD5,
        PRIMARIES,
        CHARACTERIZATION,
        ALL,
    }
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            "device-added": (arg0: Device) => void;
            "device-changed": (arg0: Device) => void;
            "device-removed": (arg0: Device) => void;
            "profile-added": (arg0: Profile) => void;
            "profile-changed": (arg0: Profile) => void;
            "profile-removed": (arg0: Profile) => void;
            "sensor-added": (arg0: Sensor) => void;
            "sensor-changed": (arg0: Sensor) => void;
            "sensor-removed": (arg0: Sensor) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::daemon-version": (pspec: GObject.ParamSpec) => void;
            "notify::system-model": (pspec: GObject.ParamSpec) => void;
            "notify::system-vendor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connected: string;
            daemon_version: string;
            daemonVersion: string;
            system_model: string;
            systemModel: string;
            system_vendor: string;
            systemVendor: string;
        }
    }
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        get connected(): string;
        get daemon_version(): string;
        get daemonVersion(): string;
        get system_model(): string;
        get systemModel(): string;
        get system_vendor(): string;
        get systemVendor(): string;
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Client;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_from_string(error_desc: string): ClientError;
        static error_quark(): GLib.Quark;
        static error_to_string(error_enum: ClientError): string;
        vfunc_changed(): void;
        vfunc_device_added(device: Device): void;
        vfunc_device_changed(device: Device): void;
        vfunc_device_removed(device: Device): void;
        vfunc_profile_added(profile: Profile): void;
        vfunc_profile_changed(profile: Profile): void;
        vfunc_profile_removed(profile: Profile): void;
        vfunc_sensor_added(sensor: Sensor): void;
        vfunc_sensor_changed(sensor: Sensor): void;
        vfunc_sensor_removed(sensor: Sensor): void;
        connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): boolean;
        connect_sync(cancellable: Gio.Cancellable | null): boolean;
        create_device(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Device>;
        create_device(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_device(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device> | void;
        create_device_finish(res: Gio.AsyncResult): Device;
        create_device_sync(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null): Device;
        create_profile(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        create_profile(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_profile(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        create_profile_finish(res: Gio.AsyncResult): Profile;
        create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        create_profile_for_icc_finish(res: Gio.AsyncResult): Profile;
        create_profile_for_icc_sync(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null): Profile;
        create_profile_sync(id: string, scope: ObjectScope, properties: { [key: string]: string } | null, cancellable: Gio.Cancellable | null): Profile;
        delete_device(device: Device, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_device(device: Device, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_device(device: Device, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_device_finish(res: Gio.AsyncResult): boolean;
        delete_device_sync(device: Device, cancellable: Gio.Cancellable | null): boolean;
        delete_profile(profile: Profile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_profile_finish(res: Gio.AsyncResult): boolean;
        delete_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
        find_device(id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Device>;
        find_device(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_device(id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device> | void;
        find_device_by_property(key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Device>;
        find_device_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_device_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device> | void;
        find_device_by_property_finish(res: Gio.AsyncResult): Device;
        find_device_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Device;
        find_device_finish(res: Gio.AsyncResult): Device;
        find_device_sync(id: string, cancellable: Gio.Cancellable | null): Device;
        find_profile(id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        find_profile(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_profile(id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        find_profile_by_filename(filename: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        find_profile_by_filename(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_profile_by_filename(filename: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        find_profile_by_filename_finish(res: Gio.AsyncResult): Profile;
        find_profile_by_filename_sync(filename: string, cancellable: Gio.Cancellable | null): Profile;
        find_profile_by_property(key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        find_profile_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_profile_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        find_profile_by_property_finish(res: Gio.AsyncResult): Profile;
        find_profile_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Profile;
        find_profile_finish(res: Gio.AsyncResult): Profile;
        find_profile_sync(id: string, cancellable: Gio.Cancellable | null): Profile;
        find_sensor(id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Sensor>;
        find_sensor(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        find_sensor(id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sensor> | void;
        find_sensor_finish(res: Gio.AsyncResult): Sensor;
        find_sensor_sync(id: string, cancellable: Gio.Cancellable | null): Sensor;
        get_connected(): boolean;
        get_daemon_version(): string;
        get_devices(cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        get_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_devices(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;
        get_devices_by_kind(kind: DeviceKind, cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        get_devices_by_kind(kind: DeviceKind, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_devices_by_kind(kind: DeviceKind, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;
        get_devices_by_kind_finish(res: Gio.AsyncResult): Device[];
        get_devices_by_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): Device[];
        get_devices_finish(res: Gio.AsyncResult): Device[];
        get_devices_sync(cancellable: Gio.Cancellable | null): Device[];
        get_has_server(): boolean;
        get_profiles(cancellable: Gio.Cancellable | null): globalThis.Promise<Profile[]>;
        get_profiles(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_profiles(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile[]> | void;
        get_profiles_finish(res: Gio.AsyncResult): Profile[];
        get_profiles_sync(cancellable: Gio.Cancellable | null): Profile[];
        get_sensors(cancellable: Gio.Cancellable | null): globalThis.Promise<Sensor[]>;
        get_sensors(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_sensors(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sensor[]> | void;
        get_sensors_finish(res: Gio.AsyncResult): Sensor[];
        get_sensors_sync(cancellable: Gio.Cancellable | null): Sensor[];
        get_standard_space(standard_space: StandardSpace, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        get_standard_space(standard_space: StandardSpace, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_standard_space(standard_space: StandardSpace, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        get_standard_space_finish(res: Gio.AsyncResult): Profile;
        get_standard_space_sync(standard_space: StandardSpace, cancellable: Gio.Cancellable | null): Profile;
        get_system_model(): string;
        get_system_vendor(): string;
        import_profile(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        import_profile(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        import_profile(file: Gio.File, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        import_profile_finish(res: Gio.AsyncResult): Profile;
        import_profile_sync(file: Gio.File, cancellable: Gio.Cancellable | null): Profile;
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            "notify::colorspace": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::created": (pspec: GObject.ParamSpec) => void;
            "notify::embedded": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
            "notify::profiling-inhibitors": (pspec: GObject.ParamSpec) => void;
            "notify::scope": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colorspace: number;
            connected: string;
            created: bigint | number;
            embedded: string;
            enabled: boolean;
            format: string;
            id: string;
            kind: number;
            mode: number;
            model: string;
            modified: bigint | number;
            object_path: string;
            objectPath: string;
            owner: number;
            profiling_inhibitors: string[];
            profilingInhibitors: string[];
            scope: number;
            seat: string;
            serial: string;
            vendor: string;
        }
    }
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;
        get colorspace(): number;
        get connected(): string;
        get created(): number;
        get embedded(): string;
        get enabled(): boolean;
        get format(): string;
        get id(): string;
        get kind(): number;
        get mode(): number;
        get model(): string;
        get modified(): number;
        get object_path(): string;
        set object_path(val: string);
        get objectPath(): string;
        set objectPath(val: string);
        get owner(): number;
        get profiling_inhibitors(): string[];
        get profilingInhibitors(): string[];
        get scope(): number;
        get seat(): string;
        get serial(): string;
        get vendor(): string;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Device;
        static new_with_object_path(object_path: string): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_from_string(error_desc: string): DeviceError;
        static error_quark(): GLib.Quark;
        static error_to_string(error_enum: DeviceError): string;
        static kind_from_string(kind: string): DeviceKind;
        static kind_to_profile_kind(device_kind: DeviceKind): ProfileKind;
        static kind_to_string(kind_enum: DeviceKind): string;
        static mode_from_string(device_mode: string): DeviceMode;
        static mode_to_string(device_mode: DeviceMode): string;
        static relation_from_string(device_relation: string): DeviceRelation;
        static relation_to_string(device_relation: DeviceRelation): string;
        vfunc_changed(): void;
        add_profile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        add_profile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_profile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        add_profile_finish(res: Gio.AsyncResult): boolean;
        add_profile_sync(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null): boolean;
        connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): boolean;
        connect_sync(cancellable: Gio.Cancellable | null): boolean;
        equal(device2: Device): boolean;
        get_colorspace(): Colorspace;
        get_connected(): boolean;
        get_created(): number;
        get_default_profile(): Profile;
        get_embedded(): boolean;
        get_enabled(): boolean;
        get_format(): string;
        get_id(): string;
        get_kind(): DeviceKind;
        get_metadata(): { [key: string]: string };
        get_metadata_item(key: string): string;
        get_mode(): DeviceMode;
        get_model(): string;
        get_modified(): number;
        get_object_path(): string;
        get_owner(): number;
        get_profile_for_qualifiers(qualifiers: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Profile>;
        get_profile_for_qualifiers(qualifiers: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_profile_for_qualifiers(qualifiers: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Profile> | void;
        get_profile_for_qualifiers_finish(res: Gio.AsyncResult): Profile;
        get_profile_for_qualifiers_sync(qualifiers: string, cancellable: Gio.Cancellable | null): Profile;
        get_profile_relation(profile: Profile, cancellable: Gio.Cancellable | null): globalThis.Promise<DeviceRelation>;
        get_profile_relation(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_profile_relation(profile: Profile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DeviceRelation> | void;
        get_profile_relation_finish(res: Gio.AsyncResult): DeviceRelation;
        get_profile_relation_sync(profile: Profile, cancellable: Gio.Cancellable | null): DeviceRelation;
        get_profiles(): Profile[];
        get_profiling_inhibitors(): string[];
        get_scope(): ObjectScope;
        get_seat(): string;
        get_serial(): string;
        get_vendor(): string;
        make_profile_default(profile: Profile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        make_profile_default(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        make_profile_default(profile: Profile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        make_profile_default_finish(res: Gio.AsyncResult): boolean;
        make_profile_default_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
        profiling_inhibit(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        profiling_inhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        profiling_inhibit(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        profiling_inhibit_finish(res: Gio.AsyncResult): boolean;
        profiling_inhibit_sync(cancellable: Gio.Cancellable | null): boolean;
        profiling_uninhibit(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        profiling_uninhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        profiling_uninhibit(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        profiling_uninhibit_finish(res: Gio.AsyncResult): boolean;
        profiling_uninhibit_sync(cancellable: Gio.Cancellable | null): boolean;
        remove_profile(profile: Profile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        remove_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        remove_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        remove_profile_finish(res: Gio.AsyncResult): boolean;
        remove_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
        set_colorspace_sync(colorspace: Colorspace, cancellable: Gio.Cancellable | null): boolean;
        set_enabled(enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_enabled(enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_enabled(enabled: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_enabled_finish(res: Gio.AsyncResult): boolean;
        set_enabled_sync(enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
        set_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): boolean;
        set_mode_sync(mode: DeviceMode, cancellable: Gio.Cancellable | null): boolean;
        set_model_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
        set_object_path(object_path: string): void;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_property(...args: never[]): any;
        set_property_finish(res: Gio.AsyncResult): boolean;
        set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
        set_serial_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
        set_vendor_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
        to_string(): string;
    }
    namespace Edid {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Edid extends GObject.Object {
        static $gtype: GObject.GType<Edid>;
        $signals: Edid.SignalSignatures;
        constructor(properties?: Partial<Edid.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Edid;
        connect<K extends keyof Edid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Edid.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Edid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Edid.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Edid.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Edid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        get_blue(): ColorYxy;
        get_checksum(): string;
        get_eisa_id(): string;
        get_gamma(): number;
        get_green(): ColorYxy;
        get_height(): number;
        get_monitor_name(): string;
        get_pnp_id(): string;
        get_red(): ColorYxy;
        get_serial_number(): string;
        get_vendor_name(): string;
        get_white(): ColorYxy;
        get_width(): number;
        parse(edid_data: GLib.Bytes | Uint8Array): boolean;
        reset(): void;
    }
    namespace Icc {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::blue": (pspec: GObject.ParamSpec) => void;
            "notify::can-delete": (pspec: GObject.ParamSpec) => void;
            "notify::checksum": (pspec: GObject.ParamSpec) => void;
            "notify::colorspace": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::green": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::red": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::temperature": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::white": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blue: ColorXYZ;
            can_delete: boolean;
            canDelete: boolean;
            checksum: string;
            colorspace: number;
            filename: string;
            green: ColorXYZ;
            kind: number;
            red: ColorXYZ;
            size: number;
            temperature: number;
            version: number;
            white: ColorXYZ;
        }
    }
    class Icc extends GObject.Object {
        static $gtype: GObject.GType<Icc>;
        get blue(): ColorXYZ;
        get can_delete(): boolean;
        get canDelete(): boolean;
        get checksum(): string;
        get colorspace(): number;
        set colorspace(val: number);
        get filename(): string;
        get green(): ColorXYZ;
        get kind(): number;
        set kind(val: number);
        get red(): ColorXYZ;
        get size(): number;
        get temperature(): number;
        get version(): number;
        set version(val: number);
        get white(): ColorXYZ;
        $signals: Icc.SignalSignatures;
        constructor(properties?: Partial<Icc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Icc;
        connect<K extends keyof Icc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Icc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Icc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Icc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Icc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        add_metadata(key: string, value: string): void;
        create_default(): boolean;
        create_default_full(flags: IccLoadFlags): boolean;
        create_from_edid(gamma_value: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean;
        create_from_edid_data(edid: Edid): boolean;
        get_blue(): ColorXYZ;
        get_can_delete(): boolean;
        get_characterization_data(): string;
        get_checksum(): string;
        get_colorspace(): Colorspace;
        get_context(): null;
        get_copyright(locale: string): string;
        get_created(): GLib.DateTime;
        get_description(locale: string): string;
        get_filename(): string;
        get_green(): ColorXYZ;
        get_handle(): null;
        get_kind(): ProfileKind;
        get_manufacturer(locale: string): string;
        get_metadata(): never;
        get_metadata_item(key: string): string;
        get_model(locale: string): string;
        get_named_colors(): ColorSwatch[];
        get_red(): ColorXYZ;
        get_response(size: number): ColorRGB[];
        get_size(): number;
        get_tag_data(tag: string): GLib.Bytes;
        get_tags(): string[];
        get_temperature(): number;
        get_vcgt(size: number): ColorRGB[];
        get_version(): number;
        get_warnings(): ProfileWarning[];
        get_white(): ColorXYZ;
        load_data(data: Uint8Array | string, flags: IccLoadFlags): boolean;
        load_fd(fd: number, flags: IccLoadFlags): boolean;
        load_file(file: Gio.File, flags: IccLoadFlags, cancellable: Gio.Cancellable | null): boolean;
        load_handle(handle: null, flags: IccLoadFlags): boolean;
        remove_metadata(key: string): void;
        save_data(flags: IccSaveFlags): GLib.Bytes;
        save_default(flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean;
        save_file(file: Gio.File, flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean;
        set_characterization_data(data: string): void;
        set_colorspace(colorspace: Colorspace): void;
        set_copyright(locale: string, value: string | null): void;
        set_copyright_items(values: never): void;
        set_created(creation_time: GLib.DateTime): void;
        set_description(locale: string, value: string | null): void;
        set_description_items(values: never): void;
        set_filename(filename: string): void;
        set_kind(kind: ProfileKind): void;
        set_manufacturer(locale: string, value: string | null): void;
        set_manufacturer_items(values: never): void;
        set_model(locale: string, value: string | null): void;
        set_model_items(values: never): void;
        set_tag_data(tag: string, data: GLib.Bytes | Uint8Array): boolean;
        set_vcgt(vcgt: ColorRGB[]): boolean;
        set_version(version: number): void;
        to_string(): string;
    }
    namespace It8 {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::instrument": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::normalized": (pspec: GObject.ParamSpec) => void;
            "notify::originator": (pspec: GObject.ParamSpec) => void;
            "notify::reference": (pspec: GObject.ParamSpec) => void;
            "notify::spectral": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            instrument: string;
            kind: number;
            normalized: boolean;
            originator: string;
            reference: string;
            spectral: boolean;
            title: string;
        }
    }
    class It8 extends GObject.Object {
        static $gtype: GObject.GType<It8>;
        get instrument(): string;
        get kind(): number;
        set kind(val: number);
        get normalized(): boolean;
        get originator(): string;
        get reference(): string;
        get spectral(): boolean;
        get title(): string;
        $signals: It8.SignalSignatures;
        constructor(properties?: Partial<It8.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): It8;
        static new_with_kind(kind: It8Kind): It8;
        connect<K extends keyof It8.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, It8.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof It8.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, It8.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof It8.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<It8.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_quark(): GLib.Quark;
        add_data(rgb: ColorRGB, xyz: ColorXYZ): void;
        add_option(option: string): void;
        add_spectrum(spectrum: Spectrum): void;
        get_data_item(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean;
        get_data_size(): number;
        get_enable_created(): boolean;
        get_instrument(): string;
        get_kind(): It8Kind;
        get_matrix(): Mat3x3;
        get_normalized(): boolean;
        get_originator(): string;
        get_reference(): string;
        get_spectral(): boolean;
        get_spectrum_array(): Spectrum[];
        get_spectrum_by_id(id: string): Spectrum;
        get_title(): string;
        get_xyz_for_rgb(R: number, G: number, B: number, delta: number): ColorXYZ;
        has_option(option: string): boolean;
        load_from_data(data: string[]): boolean;
        load_from_file(file: Gio.File): boolean;
        save_to_data(data: string[]): boolean;
        save_to_file(file: Gio.File): boolean;
        set_enable_created(enable_created: boolean): void;
        set_instrument(instrument: string): void;
        set_kind(kind: It8Kind): void;
        set_matrix(matrix: Mat3x3): void;
        set_normalized(normalized: boolean): void;
        set_originator(originator: string): void;
        set_reference(reference: string): void;
        set_spectral(spectral: boolean): void;
        set_spectrum_array(data: Spectrum[]): void;
        set_title(title: string): void;
    }
    namespace Profile {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            "notify::colorspace": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::created": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::has-vcgt": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::is-system-wide": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
            "notify::qualifier": (pspec: GObject.ParamSpec) => void;
            "notify::scope": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::warnings": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colorspace: string;
            connected: string;
            created: bigint | number;
            filename: string;
            format: string;
            has_vcgt: string;
            hasVcgt: string;
            id: string;
            is_system_wide: string;
            isSystemWide: string;
            kind: string;
            object_path: string;
            objectPath: string;
            owner: number;
            qualifier: string;
            scope: number;
            title: string;
            warnings: string[];
        }
    }
    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;
        get colorspace(): string;
        get connected(): string;
        get created(): number;
        get filename(): string;
        get format(): string;
        get has_vcgt(): string;
        get hasVcgt(): string;
        get id(): string;
        get is_system_wide(): string;
        get isSystemWide(): string;
        get kind(): string;
        get object_path(): string;
        set object_path(val: string);
        get objectPath(): string;
        set objectPath(val: string);
        get owner(): number;
        get qualifier(): string;
        get scope(): number;
        get title(): string;
        get warnings(): string[];
        $signals: Profile.SignalSignatures;
        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Profile;
        static new_with_object_path(object_path: string): Profile;
        connect<K extends keyof Profile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Profile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Profile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_from_string(error_desc: string): ProfileError;
        static error_quark(): GLib.Quark;
        static error_to_string(error_enum: ProfileError): string;
        static kind_from_string(profile_kind: string): ProfileKind;
        static kind_to_string(profile_kind: ProfileKind): string;
        static quality_from_string(quality: string): ProfileQuality;
        static quality_to_string(quality_enum: ProfileQuality): string;
        static warning_from_string(type: string): ProfileWarning;
        static warning_to_string(kind_enum: ProfileWarning): string;
        vfunc_changed(): void;
        connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): boolean;
        connect_sync(cancellable: Gio.Cancellable | null): boolean;
        equal(profile2: Profile): boolean;
        get_age(): number;
        get_colorspace(): Colorspace;
        get_connected(): boolean;
        get_created(): number;
        get_filename(): string;
        get_format(): string;
        get_has_vcgt(): boolean;
        get_id(): string;
        get_is_system_wide(): boolean;
        get_kind(): ProfileKind;
        get_metadata(): { [key: string]: string };
        get_metadata_item(key: string): string;
        get_object_path(): string;
        get_owner(): number;
        get_qualifier(): string;
        get_scope(): ObjectScope;
        get_title(): string;
        get_warnings(): string[];
        has_access(): boolean;
        install_system_wide(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        install_system_wide(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        install_system_wide(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        install_system_wide_finish(res: Gio.AsyncResult): boolean;
        install_system_wide_sync(cancellable: Gio.Cancellable | null): boolean;
        load_icc(flags: IccLoadFlags, cancellable: Gio.Cancellable | null): Icc;
        set_object_path(object_path: string): void;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_property(...args: never[]): any;
        set_property_finish(res: Gio.AsyncResult): boolean;
        set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
        to_string(): string;
    }
    namespace Sensor {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "button-pressed": () => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::embedded": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::locked": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connected: string;
            embedded: string;
            id: string;
            kind: string;
            locked: string;
            mode: string;
            model: string;
            "native": string;
            object_path: string;
            objectPath: string;
            serial: string;
            state: string;
            vendor: string;
        }
    }
    class Sensor extends GObject.Object {
        static $gtype: GObject.GType<Sensor>;
        get connected(): string;
        get embedded(): string;
        get id(): string;
        get kind(): string;
        get locked(): string;
        get mode(): string;
        get model(): string;
        get "native"(): string;
        get object_path(): string;
        set object_path(val: string);
        get objectPath(): string;
        set objectPath(val: string);
        get serial(): string;
        get state(): string;
        get vendor(): string;
        $signals: Sensor.SignalSignatures;
        constructor(properties?: Partial<Sensor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Sensor;
        static new_with_object_path(object_path: string): Sensor;
        connect<K extends keyof Sensor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sensor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sensor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sensor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sensor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Sensor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static cap_from_string(sensor_cap: string): SensorCap;
        static cap_to_string(sensor_cap: SensorCap): string;
        static error_from_string(error_desc: string): SensorError;
        static error_quark(): GLib.Quark;
        static error_to_string(error_enum: SensorError): string;
        static kind_from_string(sensor_kind: string): SensorKind;
        static kind_to_string(sensor_kind: SensorKind): string;
        static state_from_string(sensor_state: string): SensorState;
        static state_to_string(sensor_state: SensorState): string;
        vfunc_button_pressed(): void;
        connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): boolean;
        connect_sync(cancellable: Gio.Cancellable | null): boolean;
        equal(sensor2: Sensor): boolean;
        get_caps(): number;
        get_connected(): boolean;
        get_embedded(): boolean;
        get_id(): string;
        get_kind(): SensorKind;
        get_locked(): boolean;
        get_metadata(): { [key: string]: string };
        get_metadata_item(key: string): string;
        get_mode(): SensorCap;
        get_model(): string;
        get_native(): boolean;
        get_object_path(): string;
        get_option(key: string): string;
        get_options(): { [key: string]: GLib.Variant };
        get_sample(cap: SensorCap, cancellable: Gio.Cancellable | null): globalThis.Promise<ColorXYZ>;
        get_sample(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_sample(cap: SensorCap, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ColorXYZ> | void;
        get_sample_finish(res: Gio.AsyncResult): ColorXYZ;
        get_sample_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): ColorXYZ;
        get_serial(): string;
        get_spectrum(cap: SensorCap, cancellable: Gio.Cancellable | null): globalThis.Promise<Spectrum>;
        get_spectrum(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_spectrum(cap: SensorCap, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Spectrum> | void;
        get_spectrum_finish(res: Gio.AsyncResult): Spectrum;
        get_spectrum_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): Spectrum;
        get_state(): SensorState;
        get_vendor(): string;
        has_cap(cap: SensorCap): boolean;
        lock(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        lock(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        lock_finish(res: Gio.AsyncResult): boolean;
        lock_sync(cancellable: Gio.Cancellable | null): boolean;
        set_object_path(object_path: string): void;
        set_options(values: { [key: string]: GLib.Variant }, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_options(values: { [key: string]: GLib.Variant }, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_options(values: { [key: string]: GLib.Variant }, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_options_finish(res: Gio.AsyncResult): boolean;
        set_options_sync(values: { [key: string]: GLib.Variant }, cancellable: Gio.Cancellable | null): boolean;
        to_string(): string;
        unlock(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        unlock(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        unlock_finish(res: Gio.AsyncResult): boolean;
        unlock_sync(cancellable: Gio.Cancellable | null): boolean;
    }
    type ClientClass = typeof Client;
    class ColorLab {
        static $gtype: GObject.GType<ColorLab>;
        L: number;
        a: number;
        b: number;
        constructor(properties?: Partial<{
            L: number;
            a: number;
            b: number;
        }>);
        static ["new"](): ColorLab;
        copy(dest: ColorLab): void;
        delta_e76(p2: ColorLab): number;
        dup(): ColorLab;
        free(): void;
        set(L: number, a: number, b: number): void;
    }
    class ColorRGB {
        static $gtype: GObject.GType<ColorRGB>;
        R: number;
        G: number;
        B: number;
        constructor(properties?: Partial<{
            R: number;
            G: number;
            B: number;
        }>);
        static ["new"](): ColorRGB;
        static array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
        static array_is_monotonic(array: ColorRGB[]): boolean;
        static array_new(): ColorRGB[];
        copy(dest: ColorRGB): void;
        dup(): ColorRGB;
        free(): void;
        from_wavelength(wavelength: number): void;
        interpolate(p2: ColorRGB, index: number, result: ColorRGB): void;
        set(R: number, G: number, B: number): void;
        to_rgb8(dest: ColorRGB8): void;
    }
    class ColorRGB8 {
        static $gtype: GObject.GType<ColorRGB8>;
        R: number;
        G: number;
        B: number;
        constructor(properties?: Partial<{
            R: number;
            G: number;
            B: number;
        }>);
    }
    class ColorSwatch {
        static $gtype: GObject.GType<ColorSwatch>;
        constructor(properties?: Partial<{}>);
        static ["new"](): ColorSwatch;
        dup(): ColorSwatch;
        free(): void;
        get_name(): string;
        get_value(): ColorLab;
        set_name(name: string): void;
        set_value(value: ColorLab): void;
    }
    class ColorUVW {
        static $gtype: GObject.GType<ColorUVW>;
        U: number;
        V: number;
        W: number;
        constructor(properties?: Partial<{
            U: number;
            V: number;
            W: number;
        }>);
        static ["new"](): ColorUVW;
        copy(dest: ColorUVW): void;
        dup(): ColorUVW;
        free(): void;
        get_chroma_difference(p2: ColorUVW): number;
        set(U: number, V: number, W: number): void;
        set_planckian_locus(temp: number): void;
    }
    class ColorXYZ {
        static $gtype: GObject.GType<ColorXYZ>;
        X: number;
        Y: number;
        Z: number;
        constructor(properties?: Partial<{
            X: number;
            Y: number;
            Z: number;
        }>);
        static ["new"](): ColorXYZ;
        clear(): void;
        copy(dest: ColorXYZ): void;
        dup(): ColorXYZ;
        free(): void;
        normalize(max: number, dest: ColorXYZ): void;
        set(X: number, Y: number, Z: number): void;
        to_cct(): number;
        to_uvw(whitepoint: ColorXYZ, dest: ColorUVW): void;
        to_yxy(dest: ColorYxy): void;
    }
    class ColorYxy {
        static $gtype: GObject.GType<ColorYxy>;
        Y: number;
        x: number;
        y: number;
        constructor(properties?: Partial<{
            Y: number;
            x: number;
            y: number;
        }>);
        static ["new"](): ColorYxy;
        copy(dest: ColorYxy): void;
        dup(): ColorYxy;
        free(): void;
        set(Y: number, x: number, y: number): void;
        to_uvw(dest: ColorUVW): void;
        to_xyz(dest: ColorXYZ): void;
    }
    type DeviceClass = typeof Device;
    type EdidClass = typeof Edid;
    type IccClass = typeof Icc;
    type It8Class = typeof It8;
    class Mat3x3 {
        static $gtype: GObject.GType<Mat3x3>;
        m00: number;
        m01: number;
        m02: number;
        m10: number;
        m11: number;
        m12: number;
        m20: number;
        m21: number;
        m22: number;
        constructor(properties?: Partial<{
            m00: number;
            m01: number;
            m02: number;
            m10: number;
            m11: number;
            m12: number;
            m20: number;
            m21: number;
            m22: number;
        }>);
    }
    type ProfileClass = typeof Profile;
    type SensorClass = typeof Sensor;
    class Spectrum {
        static $gtype: GObject.GType<Spectrum>;
        constructor(properties?: Partial<{}>);
        static ["new"](): Spectrum;
        static planckian_new(temperature: number): Spectrum;
        static planckian_new_full(temperature: number, start: number, end: number, resolution: number): Spectrum;
        static sized_new(reserved_size: number): Spectrum;
        add_value(data: number): void;
        dup(): Spectrum;
        free(): void;
        get_data(): number[];
        get_end(): number;
        get_id(): string;
        get_norm(): number;
        get_resolution(): number;
        get_size(): number;
        get_start(): number;
        get_value(idx: number): number;
        get_value_for_nm(wavelength: number): number;
        get_value_max(): number;
        get_value_min(): number;
        get_value_raw(idx: number): number;
        get_wavelength(idx: number): number;
        get_wavelength_cal(c1: number, c2: number, c3: number): void;
        limit_max(value: number): void;
        limit_min(value: number): void;
        multiply(s2: Spectrum, resolution: number): Spectrum;
        multiply_scalar(value: number): Spectrum;
        normalize(wavelength: number, value: number): void;
        normalize_max(value: number): void;
        resample(start: number, end: number, resolution: number): Spectrum;
        resample_to_size(size: number): Spectrum;
        set_data(value: number[]): void;
        set_end(end: number): void;
        set_id(id: string): void;
        set_norm(norm: number): void;
        set_start(start: number): void;
        set_value(idx: number, data: number): void;
        set_wavelength_cal(c1: number, c2: number, c3: number): void;
        subtract(s2: Spectrum, resolution: number): Spectrum;
        to_string(max_width: number, max_height: number): string;
    }
    class Vec3 {
        static $gtype: GObject.GType<Vec3>;
        v0: number;
        v1: number;
        v2: number;
        constructor(properties?: Partial<{
            v0: number;
            v1: number;
            v2: number;
        }>);
        add(src2: Vec3, dest: Vec3): void;
        clear(): void;
        copy(dest: Vec3): void;
        get_data(): number;
        init(v0: number, v1: number, v2: number): void;
        scalar_multiply(value: number, dest: Vec3): void;
        squared_error(src2: Vec3): number;
        subtract(src2: Vec3, dest: Vec3): void;
        to_string(): string;
    }
    type PixelFormat = number;
    const __name__: string;
    const __version__: string;
}
export default Colord;
}
declare module 'gi://Colord' {
    import Colord10 from 'gi://Colord?version=1.0';
    export default Colord10;
}
