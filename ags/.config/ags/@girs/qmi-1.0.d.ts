declare module 'gi://Qmi?version=1.0' {
import type Qrtr from 'gi://Qrtr?version=1.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Qmi {
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static WRONGSTATE: number;
        static TIMEOUT: number;
        static INVALIDARGS: number;
        static INVALIDMESSAGE: number;
        static TLVNOTFOUND: number;
        static TLVTOOLONG: number;
        static UNSUPPORTED: number;
        static TLVEMPTY: number;
        static UNEXPECTEDMESSAGE: number;
        static INVALIDDATA: number;
        constructor(options: { message: string; code: number });
        static get_string(val: CoreError): string;
        static quark(): GLib.Quark;
    }
    enum CtlDataFormat {
        ABSENT,
        PRESENT,
    }
    enum CtlDataLinkProtocol {
        UNKNOWN,
        "802_3",
        RAW_IP,
    }
    export namespace DataEndpointType {
        export const $gtype: GObject.GType<DataEndpointType>;
    }
    enum DataEndpointType {
        UNKNOWN,
        HSIC,
        HSUSB,
        PCIE,
        EMBEDDED,
        BAM_DMUX,
        UNDEFINED,
    }
    export namespace DeviceExpectedDataFormat {
        export const $gtype: GObject.GType<DeviceExpectedDataFormat>;
    }
    enum DeviceExpectedDataFormat {
        UNKNOWN,
        "802_3",
        RAW_IP,
        QMAP_PASS_THROUGH,
    }
    export namespace DmsActivationState {
        export const $gtype: GObject.GType<DmsActivationState>;
    }
    enum DmsActivationState {
        NOT_ACTIVATED,
        ACTIVATED,
        CONNECTING,
        CONNECTED,
        OTASP_AUTHENTICATED,
        OTASP_NAM,
        OTASP_MDN,
        OTASP_IMSI,
        OTASP_PRL,
        OTASP_SPC,
        OTASP_COMMITED,
    }
    export namespace DmsBootImageDownloadMode {
        export const $gtype: GObject.GType<DmsBootImageDownloadMode>;
    }
    enum DmsBootImageDownloadMode {
        NORMAL,
        BOOT_AND_RECOVERY,
    }
    export namespace DmsDataServiceCapability {
        export const $gtype: GObject.GType<DmsDataServiceCapability>;
    }
    enum DmsDataServiceCapability {
        NONE,
        CS,
        PS,
        SIMULTANEOUS_CS_PS,
        NON_SIMULTANEOUS_CS_PS,
    }
    export namespace DmsFirmwareImageType {
        export const $gtype: GObject.GType<DmsFirmwareImageType>;
    }
    enum DmsFirmwareImageType {
        MODEM,
        PRI,
    }
    export namespace DmsFoxconnDeviceMode {
        export const $gtype: GObject.GType<DmsFoxconnDeviceMode>;
    }
    enum DmsFoxconnDeviceMode {
        UNKNOWN,
        FASTBOOT_ONLINE,
        FASTBOOT_OTA,
    }
    export namespace DmsFoxconnFirmwareVersionType {
        export const $gtype: GObject.GType<DmsFoxconnFirmwareVersionType>;
    }
    enum DmsFoxconnFirmwareVersionType {
        FIRMWARE_MCFG,
        FIRMWARE_MCFG_APPS,
        APPS,
    }
    export namespace DmsHpDeviceMode {
        export const $gtype: GObject.GType<DmsHpDeviceMode>;
    }
    enum DmsHpDeviceMode {
        FASTBOOT,
    }
    export namespace DmsMacType {
        export const $gtype: GObject.GType<DmsMacType>;
    }
    enum DmsMacType {
        WLAN,
        BT,
    }
    export namespace DmsOperatingMode {
        export const $gtype: GObject.GType<DmsOperatingMode>;
    }
    enum DmsOperatingMode {
        ONLINE,
        LOW_POWER,
        FACTORY_TEST,
        OFFLINE,
        RESET,
        SHUTTING_DOWN,
        PERSISTENT_LOW_POWER,
        MODE_ONLY_LOW_POWER,
        UNKNOWN,
    }
    export namespace DmsRadioInterface {
        export const $gtype: GObject.GType<DmsRadioInterface>;
    }
    enum DmsRadioInterface {
        CDMA20001X,
        EVDO,
        GSM,
        UMTS,
        LTE,
        TDS,
        "5GNR",
    }
    export namespace DmsSimCapability {
        export const $gtype: GObject.GType<DmsSimCapability>;
    }
    enum DmsSimCapability {
        NOT_SUPPORTED,
        SUPPORTED,
    }
    class DmsSwiUsbComposition {
        static $gtype: GObject.GType<DmsSwiUsbComposition>;
        static UNKNOWN: number;
        static "0": number;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
        static "9": number;
        static "10": number;
        static "11": number;
        static "12": number;
        static "13": number;
        static "14": number;
        static "15": number;
        static "16": number;
        static "17": number;
        static "18": number;
        static "19": number;
        static "20": number;
        static "21": number;
        static "22": number;
    }
    export namespace DmsTimeReferenceType {
        export const $gtype: GObject.GType<DmsTimeReferenceType>;
    }
    enum DmsTimeReferenceType {
        USER,
    }
    export namespace DmsTimeSource {
        export const $gtype: GObject.GType<DmsTimeSource>;
    }
    enum DmsTimeSource {
        DEVICE,
        CDMA_NETWORK,
        HDR_NETWORK,
    }
    export namespace DmsUimFacility {
        export const $gtype: GObject.GType<DmsUimFacility>;
    }
    enum DmsUimFacility {
        PN,
        PU,
        PP,
        PC,
        PF,
    }
    export namespace DmsUimFacilityState {
        export const $gtype: GObject.GType<DmsUimFacilityState>;
    }
    enum DmsUimFacilityState {
        DEACTIVATED,
        ACTIVATED,
        BLOCKED,
    }
    export namespace DmsUimPinId {
        export const $gtype: GObject.GType<DmsUimPinId>;
    }
    enum DmsUimPinId {
        PIN,
        PIN2,
    }
    export namespace DmsUimPinStatus {
        export const $gtype: GObject.GType<DmsUimPinStatus>;
    }
    enum DmsUimPinStatus {
        NOT_INITIALIZED,
        ENABLED_NOT_VERIFIED,
        ENABLED_VERIFIED,
        DISABLED,
        BLOCKED,
        PERMANENTLY_BLOCKED,
        UNBLOCKED,
        CHANGED,
    }
    export namespace DmsUimState {
        export const $gtype: GObject.GType<DmsUimState>;
    }
    enum DmsUimState {
        INITIALIZATION_COMPLETED,
        LOCKED_OR_FAILED,
        NOT_PRESENT,
        RESERVED,
        UNKNOWN,
    }
    export namespace DsdApnType {
        export const $gtype: GObject.GType<DsdApnType>;
    }
    enum DsdApnType {
        DEFAULT,
        IMS,
        MMS,
        DUN,
        SUPL,
        HIPRI,
        FOTA,
        CBS,
        IA,
        EMERGENCY,
    }
    export namespace DsdDataSystemNetworkType {
        export const $gtype: GObject.GType<DsdDataSystemNetworkType>;
    }
    enum DsdDataSystemNetworkType {
        "3GPP",
        "3GPP2",
        WLAN,
    }
    export namespace DsdRadioAccessTechnology {
        export const $gtype: GObject.GType<DsdRadioAccessTechnology>;
    }
    enum DsdRadioAccessTechnology {
        UNKNOWN,
        "3GPP_WCDMA",
        "3GPP_GERAN",
        "3GPP_LTE",
        "3GPP_TDSCDMA",
        "3GPP_WLAN",
        "3GPP_5G",
        "3GPP2_1X",
        "3GPP2_HRPD",
        "3GPP2_EHRPD",
        "3GPP2_WLAN",
    }
    export namespace Endian {
        export const $gtype: GObject.GType<Endian>;
    }
    enum Endian {
        LITTLE,
        BIG,
    }
    export namespace FoxFirmwareVersionType {
        export const $gtype: GObject.GType<FoxFirmwareVersionType>;
    }
    enum FoxFirmwareVersionType {
        FIRMWARE_MCFG,
        FIRMWARE_MCFG_APPS,
        APPS,
    }
    export namespace GasFirmwareAutoSimMode {
        export const $gtype: GObject.GType<GasFirmwareAutoSimMode>;
    }
    enum GasFirmwareAutoSimMode {
        DISABLE,
        ENABLE,
        ENABLE_ONE_SHOT,
        PENDING_ONE_SHOT,
    }
    export namespace GasFirmwareListingMode {
        export const $gtype: GObject.GType<GasFirmwareListingMode>;
    }
    enum GasFirmwareListingMode {
        ACTIVE_FIRMWARE,
        ALL_FIRMWARE,
        SPECIFIC_FIRMWARE,
    }
    export namespace GasUsbCompositionEndpointType {
        export const $gtype: GObject.GType<GasUsbCompositionEndpointType>;
    }
    enum GasUsbCompositionEndpointType {
        HSUSB,
        HSIC,
    }
    export namespace ImsCallModePreference {
        export const $gtype: GObject.GType<ImsCallModePreference>;
    }
    enum ImsCallModePreference {
        NONE,
        CELLULAR,
        WIFI,
        WIFI_ONLY,
        CELLULAR_ONLY,
        IMS,
    }
    export namespace ImsDcmApnType {
        export const $gtype: GObject.GType<ImsDcmApnType>;
    }
    enum ImsDcmApnType {
        IMS,
        INTERNET,
        EMERGENCY,
        RCS,
        UT,
        WLAN,
    }
    export namespace ImsDcmInstanceId {
        export const $gtype: GObject.GType<ImsDcmInstanceId>;
    }
    enum ImsDcmInstanceId {
        GLOBAL,
        ID1,
        ID2,
        NONE,
    }
    export namespace ImsDcmIpFamiliy {
        export const $gtype: GObject.GType<ImsDcmIpFamiliy>;
    }
    enum ImsDcmIpFamiliy {
        V4,
        V6,
    }
    export namespace ImsDcmRatType {
        export const $gtype: GObject.GType<ImsDcmRatType>;
    }
    enum ImsDcmRatType {
        EHPRD,
        LTE,
        EPC,
        WLAN,
    }
    export namespace ImsaImsRegistrationStatus {
        export const $gtype: GObject.GType<ImsaImsRegistrationStatus>;
    }
    enum ImsaImsRegistrationStatus {
        NOT_REGISTERED,
        REGISTERING,
        REGISTERED,
        LIMITED_REGISTERED,
    }
    export namespace ImsaRegistrationTechnology {
        export const $gtype: GObject.GType<ImsaRegistrationTechnology>;
    }
    enum ImsaRegistrationTechnology {
        WLAN,
        WWAN,
        INTERWORKING_WLAN,
    }
    export namespace ImsaServiceStatus {
        export const $gtype: GObject.GType<ImsaServiceStatus>;
    }
    enum ImsaServiceStatus {
        UNAVAILABLE,
        LIMITED,
        AVAILABLE,
    }
    export namespace ImspEnablerState {
        export const $gtype: GObject.GType<ImspEnablerState>;
    }
    enum ImspEnablerState {
        UNINITIALIZED,
        INITIALIZED,
        AIRPLANE,
        REGISTERED,
    }
    export namespace LocAltitudeDependency {
        export const $gtype: GObject.GType<LocAltitudeDependency>;
    }
    enum LocAltitudeDependency {
        UNKNOWN,
        FULLY_INTERDEPENDENT,
        ON_LAT_LON,
        FULLY_INDEPENDENT,
    }
    export namespace LocAltitudeSource {
        export const $gtype: GObject.GType<LocAltitudeSource>;
    }
    enum LocAltitudeSource {
        UNKNOWN,
        GPS,
        CELL_ID,
        ENHANCED_CELL_ID,
        WIFI,
        TERRESTRIAL,
        TERRESTRIAL_HYBRID,
        ALTITUDE_DATABASE,
        BAROMETRIC_ALTIMETER,
        OTHER,
    }
    export namespace LocAltitudeUncertainty {
        export const $gtype: GObject.GType<LocAltitudeUncertainty>;
    }
    enum LocAltitudeUncertainty {
        UNKNOWN,
        POINT,
        FULL,
    }
    export namespace LocEngineState {
        export const $gtype: GObject.GType<LocEngineState>;
    }
    enum LocEngineState {
        ON,
        OFF,
    }
    export namespace LocFixRecurrenceType {
        export const $gtype: GObject.GType<LocFixRecurrenceType>;
    }
    enum LocFixRecurrenceType {
        PERIODIC_FIXES,
        SINGLE_FIX,
    }
    export namespace LocHealthStatus {
        export const $gtype: GObject.GType<LocHealthStatus>;
    }
    enum LocHealthStatus {
        UNHEALTHY,
        HEALTHY,
    }
    export namespace LocIndicationStatus {
        export const $gtype: GObject.GType<LocIndicationStatus>;
    }
    enum LocIndicationStatus {
        SUCCESS,
        GENERAL_FAILURE,
        UNSUPPORTED,
        INVALID_PARAMETER,
        ENGINE_BUSY,
        PHONE_OFFLINE,
        TIMEOUT,
    }
    export namespace LocInjectedOrbitFileType {
        export const $gtype: GObject.GType<LocInjectedOrbitFileType>;
    }
    enum LocInjectedOrbitFileType {
        XTRA,
        NAVIC,
    }
    export namespace LocInjectedOrbitUpdateType {
        export const $gtype: GObject.GType<LocInjectedOrbitUpdateType>;
    }
    enum LocInjectedOrbitUpdateType {
        INJECTED_ORBIT_RATE_UPDATE,
        INTEGRITY_RATE_UPDATE,
    }
    export namespace LocInjectedTimeSource {
        export const $gtype: GObject.GType<LocInjectedTimeSource>;
    }
    enum LocInjectedTimeSource {
        UNKNOWN,
        AP,
        NTP,
        NTS,
    }
    export namespace LocIntermediateReportState {
        export const $gtype: GObject.GType<LocIntermediateReportState>;
    }
    enum LocIntermediateReportState {
        UNKNOWN,
        ENABLE,
        DISABLE,
    }
    export namespace LocLockType {
        export const $gtype: GObject.GType<LocLockType>;
    }
    enum LocLockType {
        NONE,
        MI,
        MT,
        ALL,
    }
    export namespace LocNavigationData {
        export const $gtype: GObject.GType<LocNavigationData>;
    }
    enum LocNavigationData {
        EPHEMERIS,
        ALMANAC,
    }
    export namespace LocOperationMode {
        export const $gtype: GObject.GType<LocOperationMode>;
    }
    enum LocOperationMode {
        DEFAULT,
        MSB,
        MSA,
        STANDALONE,
        CELLID,
        WWAN,
    }
    export namespace LocPositionSource {
        export const $gtype: GObject.GType<LocPositionSource>;
    }
    enum LocPositionSource {
        GNSS,
        CELL_ID,
        ENHANCED_CELL_ID,
        WIFI,
        TERRESTRIAL,
        GNSS_TERRESTRIAL_HYBRID,
        OTHER,
        DRE,
        FLP,
        NLP,
        FLP_ALE,
    }
    export namespace LocPositionSourceProvider {
        export const $gtype: GObject.GType<LocPositionSourceProvider>;
    }
    enum LocPositionSourceProvider {
        EXTERNAL,
        INTERNAL,
    }
    export namespace LocPredictedOrbitsDataFormat {
        export const $gtype: GObject.GType<LocPredictedOrbitsDataFormat>;
    }
    enum LocPredictedOrbitsDataFormat {
        XTRA,
    }
    export namespace LocReliability {
        export const $gtype: GObject.GType<LocReliability>;
    }
    enum LocReliability {
        NOT_SET,
        VERY_LOW,
        LOW,
        MEDIUM,
        HIGH,
    }
    export namespace LocSatelliteStatus {
        export const $gtype: GObject.GType<LocSatelliteStatus>;
    }
    enum LocSatelliteStatus {
        IDLE,
        SEARCHING,
        TRACKING,
    }
    export namespace LocServerType {
        export const $gtype: GObject.GType<LocServerType>;
    }
    enum LocServerType {
        UNKNOWN,
        CDMA_PDE,
        CDMA_MPC,
        UMTS_SLP,
        CUSTOM_PDE,
    }
    export namespace LocSessionStatus {
        export const $gtype: GObject.GType<LocSessionStatus>;
    }
    enum LocSessionStatus {
        SUCCESS,
        IN_PROGRESS,
        GENERAL_FAILURE,
        TIMEOUT,
        USER_ENDED,
        BAD_PARAMETER,
        PHONE_OFFLINE,
        ENGINE_LOCKED,
    }
    export namespace LocSystem {
        export const $gtype: GObject.GType<LocSystem>;
    }
    enum LocSystem {
        GPS,
        GALILEO,
        SBAS,
        COMPASS,
        GLONASS,
    }
    export namespace LocTimeSource {
        export const $gtype: GObject.GType<LocTimeSource>;
    }
    enum LocTimeSource {
        INVALID,
        NETWORK_TIME_TRANSFER,
        NETWORK_TIME_TAGGING,
        EXTERNAL_INPUT,
        TOW_DECODE,
        TOW_CONFIRMED,
        TOW_AND_WEEK_CONFIRMED,
        NAVIGATION_SOLUTION,
        SOLVE_FOR_TIME,
        GLO_TOW_DECODE,
        TIME_TRANSFORM,
        WCDMA_SLEEP_TIME_TAG,
        GSM_SLEEP_TIME_TAG,
        UNKNOWN,
        SYSTEM_TIMETICK,
        QZSS_TOW_DECODE,
        BDS_TOW_DECODE,
    }
    export namespace NasActiveBand {
        export const $gtype: GObject.GType<NasActiveBand>;
    }
    enum NasActiveBand {
        BC_0,
        BC_1,
        BC_2,
        BC_3,
        BC_4,
        BC_5,
        BC_6,
        BC_7,
        BC_8,
        BC_9,
        BC_10,
        BC_11,
        BC_12,
        BC_13,
        BC_14,
        BC_15,
        BC_16,
        BC_17,
        BC_18,
        BC_19,
        GSM_450,
        GSM_480,
        GSM_750,
        GSM_850,
        GSM_900_EXTENDED,
        GSM_900_PRIMARY,
        GSM_900_RAILWAYS,
        GSM_DCS_1800,
        GSM_PCS_1900,
        WCDMA_2100,
        WCDMA_PCS_1900,
        WCDMA_DCS_1800,
        WCDMA_1700_US,
        WCDMA_850,
        WCDMA_800,
        WCDMA_2600,
        WCDMA_900,
        WCDMA_1700_JAPAN,
        WCDMA_1500_JAPAN,
        WCDMA_850_JAPAN,
        EUTRAN_1,
        EUTRAN_2,
        EUTRAN_3,
        EUTRAN_4,
        EUTRAN_5,
        EUTRAN_6,
        EUTRAN_7,
        EUTRAN_8,
        EUTRAN_9,
        EUTRAN_10,
        EUTRAN_11,
        EUTRAN_12,
        EUTRAN_13,
        EUTRAN_14,
        EUTRAN_17,
        EUTRAN_18,
        EUTRAN_19,
        EUTRAN_20,
        EUTRAN_21,
        EUTRAN_23,
        EUTRAN_24,
        EUTRAN_25,
        EUTRAN_26,
        EUTRAN_27,
        EUTRAN_28,
        EUTRAN_29,
        EUTRAN_30,
        EUTRAN_31,
        EUTRAN_32,
        EUTRAN_33,
        EUTRAN_34,
        EUTRAN_35,
        EUTRAN_36,
        EUTRAN_37,
        EUTRAN_38,
        EUTRAN_39,
        EUTRAN_40,
        EUTRAN_41,
        EUTRAN_42,
        EUTRAN_43,
        EUTRAN_46,
        EUTRAN_47,
        EUTRAN_48,
        EUTRAN_66,
        EUTRAN_71,
        EUTRAN_125,
        EUTRAN_126,
        EUTRAN_127,
        EUTRAN_250,
        TDSCDMA_A,
        TDSCDMA_B,
        TDSCDMA_C,
        TDSCDMA_D,
        TDSCDMA_E,
        TDSCDMA_F,
        NR5G_1,
        NR5G_2,
        NR5G_3,
        NR5G_5,
        NR5G_7,
        NR5G_8,
        NR5G_20,
        NR5G_28,
        NR5G_38,
        NR5G_41,
        NR5G_50,
        NR5G_51,
        NR5G_66,
        NR5G_70,
        NR5G_71,
        NR5G_74,
        NR5G_75,
        NR5G_76,
        NR5G_77,
        NR5G_78,
        NR5G_79,
        NR5G_80,
        NR5G_81,
        NR5G_82,
        NR5G_83,
        NR5G_84,
        NR5G_85,
        NR5G_257,
        NR5G_258,
        NR5G_259,
        NR5G_260,
        NR5G_261,
        NR5G_12,
        NR5G_25,
        NR5G_34,
        NR5G_39,
        NR5G_40,
        NR5G_65,
        NR5G_86,
        NR5G_48,
        NR5G_14,
        NR5G_13,
        NR5G_18,
        NR5G_26,
        NR5G_30,
        NR5G_29,
        NR5G_53,
        NR5G_46,
        NR5G_91,
        NR5G_92,
        NR5G_93,
        NR5G_94,
    }
    export namespace NasAttachState {
        export const $gtype: GObject.GType<NasAttachState>;
    }
    enum NasAttachState {
        UNKNOWN,
        ATTACHED,
        DETACHED,
    }
    export namespace NasBoolean {
        export const $gtype: GObject.GType<NasBoolean>;
    }
    enum NasBoolean {
        FALSE,
        TRUE,
        UNKNOWN,
    }
    export namespace NasCallBarringStatus {
        export const $gtype: GObject.GType<NasCallBarringStatus>;
    }
    enum NasCallBarringStatus {
        NORMAL_ONLY,
        EMERGENCY_ONLY,
        NO_CALLS,
        ALL_CALLS,
        UNKNOWN,
    }
    export namespace NasCdmaPilotType {
        export const $gtype: GObject.GType<NasCdmaPilotType>;
    }
    enum NasCdmaPilotType {
        ACTIVE,
        NEIGHBOR,
    }
    export namespace NasCdmaPrlPreference {
        export const $gtype: GObject.GType<NasCdmaPrlPreference>;
    }
    enum NasCdmaPrlPreference {
        A_SIDE_ONLY,
        B_SIDE_ONLY,
        ANY,
    }
    export namespace NasCellBroadcastCapability {
        export const $gtype: GObject.GType<NasCellBroadcastCapability>;
    }
    enum NasCellBroadcastCapability {
        UNKNOWN,
        OFF,
        ON,
    }
    export namespace NasChangeDuration {
        export const $gtype: GObject.GType<NasChangeDuration>;
    }
    enum NasChangeDuration {
        POWER_CYCLE,
        PERMANENT,
    }
    class NasDLBandwidth {
        static $gtype: GObject.GType<NasDLBandwidth>;
        static "1_4": number;
        static "3": number;
        static "5": number;
        static "10": number;
        static "15": number;
        static "20": number;
        static "5GNR_5": number;
        static "5GNR_10": number;
        static "5GNR_15": number;
        static "5GNR_20": number;
        static "5GNR_25": number;
        static "5GNR_30": number;
        static "5GNR_40": number;
        static "5GNR_50": number;
        static "5GNR_60": number;
        static "5GNR_80": number;
        static "5GNR_90": number;
        static "5GNR_100": number;
        static "5GNR_200": number;
        static "5GNR_400": number;
        static GSM_02: number;
        static TDSCDMA_16: number;
        static WCDMA_5: number;
        static WCDMA_10: number;
        static "5GNR_70": number;
        static UNKNOWN: number;
    }
    export namespace NasDataCapability {
        export const $gtype: GObject.GType<NasDataCapability>;
    }
    enum NasDataCapability {
        NONE,
        GPRS,
        EDGE,
        HSDPA,
        HSUPA,
        WCDMA,
        CDMA,
        EVDO_REV_0,
        EVDO_REV_A,
        GSM,
        EVDO_REV_B,
        LTE,
        HSDPA_PLUS,
        DC_HSDPA_PLUS,
    }
    export namespace NasDayOfWeek {
        export const $gtype: GObject.GType<NasDayOfWeek>;
    }
    enum NasDayOfWeek {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }
    export namespace NasDaylightSavingsAdjustment {
        export const $gtype: GObject.GType<NasDaylightSavingsAdjustment>;
    }
    enum NasDaylightSavingsAdjustment {
        NONE,
        ONE_HOUR,
        TWO_HOURS,
    }
    export namespace NasDrx {
        export const $gtype: GObject.GType<NasDrx>;
    }
    enum NasDrx {
        UNKNOWN,
        CN6_T32,
        CN7_T64,
        CN8_T128,
        CN9_T256,
    }
    class NasEvdoSinrLevel {
        static $gtype: GObject.GType<NasEvdoSinrLevel>;
        static "0": number;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
    }
    export namespace NasGsmWcdmaAcquisitionOrderPreference {
        export const $gtype: GObject.GType<NasGsmWcdmaAcquisitionOrderPreference>;
    }
    enum NasGsmWcdmaAcquisitionOrderPreference {
        AUTOMATIC,
        GSM,
        WCDMA,
    }
    export namespace NasHdrPersonality {
        export const $gtype: GObject.GType<NasHdrPersonality>;
    }
    enum NasHdrPersonality {
        UNKNOWN,
        HRPD,
        EHRPD,
    }
    export namespace NasHdrProtocolRevision {
        export const $gtype: GObject.GType<NasHdrProtocolRevision>;
    }
    enum NasHdrProtocolRevision {
        NONE,
        REL_0,
        REL_A,
        REL_B,
    }
    export namespace NasIncrementalNetworkScanStatus {
        export const $gtype: GObject.GType<NasIncrementalNetworkScanStatus>;
    }
    enum NasIncrementalNetworkScanStatus {
        COMPLETE,
        PARTIAL,
        ABORTED,
    }
    export namespace NasLteCellAccessStatus {
        export const $gtype: GObject.GType<NasLteCellAccessStatus>;
    }
    enum NasLteCellAccessStatus {
        NORMAL_ONLY,
        EMERGENCY_ONLY,
        NO_CALLS,
        ALL_CALLS,
        UNKNOWN,
    }
    export namespace NasLteRegistrationDomain {
        export const $gtype: GObject.GType<NasLteRegistrationDomain>;
    }
    enum NasLteRegistrationDomain {
        NOT_APPLICABLE,
        CS_ONLY,
        PS_ONLY,
        CS_PS,
        LIMITED_SERVICE,
    }
    export namespace NasLteVoiceDomain {
        export const $gtype: GObject.GType<NasLteVoiceDomain>;
    }
    enum NasLteVoiceDomain {
        NONE,
        IMS,
        "1X",
        "3GPP",
    }
    export namespace NasNetworkDescriptionDisplay {
        export const $gtype: GObject.GType<NasNetworkDescriptionDisplay>;
    }
    enum NasNetworkDescriptionDisplay {
        NO,
        YES,
        UNKNOWN,
    }
    export namespace NasNetworkDescriptionEncoding {
        export const $gtype: GObject.GType<NasNetworkDescriptionEncoding>;
    }
    enum NasNetworkDescriptionEncoding {
        UNSPECIFIED,
        ASCII7,
        UNICODE,
        GSM,
    }
    export namespace NasNetworkNameSource {
        export const $gtype: GObject.GType<NasNetworkNameSource>;
    }
    enum NasNetworkNameSource {
        UNKNOWN,
        OPERATOR_PLMN_LIST_AND_PLMN_NETWORK_NAME,
        COMMON_PCN_HANDSET_SPECIFICATION_AND_OPERATOR_NAME_STRING,
        NITZ,
        SE13,
        MCC_MNC,
        SERVICE_PROVIDER_NAME,
    }
    export namespace NasNetworkRegisterType {
        export const $gtype: GObject.GType<NasNetworkRegisterType>;
    }
    enum NasNetworkRegisterType {
        AUTOMATIC,
        MANUAL,
    }
    export namespace NasNetworkScanResult {
        export const $gtype: GObject.GType<NasNetworkScanResult>;
    }
    enum NasNetworkScanResult {
        SUCCESS,
        ABORT,
        RADIO_LINK_FAILURE,
    }
    export namespace NasNetworkSelectionPreference {
        export const $gtype: GObject.GType<NasNetworkSelectionPreference>;
    }
    enum NasNetworkSelectionPreference {
        AUTOMATIC,
        MANUAL,
    }
    export namespace NasNetworkSelectionRegistrationRestriction {
        export const $gtype: GObject.GType<NasNetworkSelectionRegistrationRestriction>;
    }
    enum NasNetworkSelectionRegistrationRestriction {
        UNRESTRICTED,
        CAMPED_ONLY,
        LIMITED,
    }
    export namespace NasNetworkServiceDomain {
        export const $gtype: GObject.GType<NasNetworkServiceDomain>;
    }
    enum NasNetworkServiceDomain {
        NONE,
        CS,
        PS,
        CS_PS,
        CAMPED,
    }
    export namespace NasNetworkType {
        export const $gtype: GObject.GType<NasNetworkType>;
    }
    enum NasNetworkType {
        UNKNOWN,
        "3GPP2",
        "3GPP",
    }
    export namespace NasPlmnEncodingScheme {
        export const $gtype: GObject.GType<NasPlmnEncodingScheme>;
    }
    enum NasPlmnEncodingScheme {
        GSM,
        UCS2LE,
    }
    export namespace NasPlmnLanguageId {
        export const $gtype: GObject.GType<NasPlmnLanguageId>;
    }
    enum NasPlmnLanguageId {
        UNKNOWN,
        ZH_TRAD,
        ZH_SIMP,
    }
    export namespace NasPlmnNameCountryInitials {
        export const $gtype: GObject.GType<NasPlmnNameCountryInitials>;
    }
    enum NasPlmnNameCountryInitials {
        INITIALS_DO_NOT_ADD,
        INIITALS_ADD,
        INIITALS_UNSPECIFIED,
    }
    export namespace NasPlmnNameSpareBits {
        export const $gtype: GObject.GType<NasPlmnNameSpareBits>;
    }
    enum NasPlmnNameSpareBits {
        UNKNOWN,
        BIT_8,
        BITS_78,
        BITS_68,
        BITS_58,
        BITS_48,
        BITS_38,
        BITS_28,
    }
    export namespace NasPreferenceDuration {
        export const $gtype: GObject.GType<NasPreferenceDuration>;
    }
    enum NasPreferenceDuration {
        PERMANENT,
        POWER_CYCLE,
        ONE_CALL,
        ONE_CALL_OR_TIME,
        INTERNAL_ONE_CALL_1,
        INTERNAL_ONE_CALL_2,
        INTERNAL_ONE_CALL_3,
    }
    export namespace NasPsAttachAction {
        export const $gtype: GObject.GType<NasPsAttachAction>;
    }
    enum NasPsAttachAction {
        ATTACH,
        DETACH,
    }
    export namespace NasRadioInterface {
        export const $gtype: GObject.GType<NasRadioInterface>;
    }
    enum NasRadioInterface {
        UNKNOWN,
        NONE,
        CDMA_1X,
        CDMA_1XEVDO,
        AMPS,
        GSM,
        UMTS,
        LTE,
        TD_SCDMA,
        "5GNR",
        NO_CHANGE,
    }
    export namespace NasRegistrationState {
        export const $gtype: GObject.GType<NasRegistrationState>;
    }
    enum NasRegistrationState {
        NOT_REGISTERED,
        REGISTERED,
        NOT_REGISTERED_SEARCHING,
        REGISTRATION_DENIED,
        UNKNOWN,
    }
    export namespace NasRejectCause {
        export const $gtype: GObject.GType<NasRejectCause>;
    }
    enum NasRejectCause {
        NONE,
        IMSI_UNKNOWN_IN_HLR,
        ILLEGAL_UE,
        IMSI_UNKNOWN_IN_VLR,
        IMEI_NOT_ACCEPTED,
        ILLEGAL_ME,
        PS_SERVICES_NOT_ALLOWED,
        PS_AND_NON_PS_SERVICES_NOT_ALLOWED,
        UE_IDENTITY_NOT_DERIVED_BY_NETWORK,
        IMPLICITLY_DETACHED,
        PLMN_NOT_ALLOWED,
        LOCATION_AREA_NOT_ALLOWED,
        ROAMING_IN_LOCATION_AREA_NOT_ALLOWED,
        PS_SERVICES_IN_LOCATION_AREA_NOT_ALLOWED,
        NO_SUITABLE_CELLS_IN_LOCATION_AREA,
        MSC_TEMPORARILY_NOT_REACHABLE,
        NETWORK_FAILURE,
        CS_DOMAIN_NOT_AVAILABLE,
        ESM_FAILURE,
        MAC_FAILURE,
        SYNCH_FAILURE,
        CONGESTION,
        UE_SECURITY_CAPABILITIES_MISMATCH,
        SECURITY_MODE_REJECTED_UNSPECIFIED,
        CSG_NOT_AUTHORIZED,
        NON_EPS_AUTHENTICATION_UNACCEPTABLE,
        SMS_PROVIDED_BY_GPRS_IN_ROUTING_AREA,
        REDIRECTION_TO_5GCN_REQUIRED,
        SERVICE_OPTION_NOT_SUPPORTED,
        REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
        SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
        REQUESTED_SERVICE_OPTION_NOT_AUTHORIZED,
        CALL_CANNOT_BE_IDENTIFIED,
        CS_SERVICE_TEMPORARILY_NOT_AVAILABLE,
        NO_EPS_BEARER_CONTEXT_ACTIVATED,
        SEVERE_NETWORK_FAILURE,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_0,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_1,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_2,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_3,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_4,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_5,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_6,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_7,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_8,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_9,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_10,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_11,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_12,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_13,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_14,
        RETRY_UPON_ENTRY_INTO_NEW_CELL_15,
        SEMANTICALLY_INCORRECT_MESSAGE,
        INVALID_MANDATORY_INFORMATION,
        MESSAGE_TYPE_NON_EXISTENT,
        MESSAGE_TYPE_NOT_COMPATIBLE,
        INFORMATION_ELEMENT_NON_EXISTENT,
        CONDITIONAL_INFORMATION_ELEMENT_ERROR,
        MESSAGE_NOT_COMPATIBLE,
        UNSPECIFIED_PROTOCOL_ERROR,
    }
    export namespace NasRoamingIndicatorStatus {
        export const $gtype: GObject.GType<NasRoamingIndicatorStatus>;
    }
    enum NasRoamingIndicatorStatus {
        ON,
        OFF,
    }
    export namespace NasRoamingPreference {
        export const $gtype: GObject.GType<NasRoamingPreference>;
    }
    enum NasRoamingPreference {
        OFF,
        NOT_OFF,
        NOT_FLASHING,
        ANY,
    }
    export namespace NasRoamingStatus {
        export const $gtype: GObject.GType<NasRoamingStatus>;
    }
    enum NasRoamingStatus {
        OFF,
        ON,
        BLINK,
        OUT_OF_NEIGHBORHOOD,
        OUT_OF_BUILDING,
        PREFERRED_SYSTEM,
        AVAILABLE_SYSTEM,
        ALLIANCE_PARTNER,
        PREMIUM_PARTNER,
        FULL_SERVICE,
        PARTIAL_SERVICE,
        BANNER_ON,
        BANNER_OFF,
    }
    export namespace NasScellState {
        export const $gtype: GObject.GType<NasScellState>;
    }
    enum NasScellState {
        DECONFIGURED,
        DEACTIVATED,
        ACTIVATED,
    }
    export namespace NasServiceDomainPreference {
        export const $gtype: GObject.GType<NasServiceDomainPreference>;
    }
    enum NasServiceDomainPreference {
        CS_ONLY,
        PS_ONLY,
        CS_PS,
        PS_ATTACH,
        PS_DETACH,
    }
    export namespace NasServiceStatus {
        export const $gtype: GObject.GType<NasServiceStatus>;
    }
    enum NasServiceStatus {
        NONE,
        LIMITED,
        AVAILABLE,
        LIMITED_REGIONAL,
        POWER_SAVE,
    }
    export namespace NasSimRejectState {
        export const $gtype: GObject.GType<NasSimRejectState>;
    }
    enum NasSimRejectState {
        UNAVAILABLE,
        AVAILABLE,
        CS_INVALID,
        PS_INVALID,
        CS_PS_INVALID,
    }
    export namespace NasSwiEmmConnectionState {
        export const $gtype: GObject.GType<NasSwiEmmConnectionState>;
    }
    enum NasSwiEmmConnectionState {
        RRC_IDLE,
        WAITING_RRC_CFM,
        RRC_CONNECTING,
        RRC_RELEASING,
        UNKNOWN,
    }
    export namespace NasSwiEmmState {
        export const $gtype: GObject.GType<NasSwiEmmState>;
    }
    enum NasSwiEmmState {
        DEREGISTERED,
        REG_INITIATED,
        REGISTERED,
        TAU_INITIATED,
        SR_INITIATED,
        DEREG_INITIATED,
        INVALID,
        UNKNOWN,
    }
    export namespace NasSwiImsRegState {
        export const $gtype: GObject.GType<NasSwiImsRegState>;
    }
    enum NasSwiImsRegState {
        NO_SRV,
        IN_PROG,
        FAILED,
        LIMITED,
        FULL_SRV,
        _UNKNOWN,
    }
    export namespace NasSwiModemMode {
        export const $gtype: GObject.GType<NasSwiModemMode>;
    }
    enum NasSwiModemMode {
        POWERING_OFF,
        FACTORY_TEST,
        OFFLINE,
        OFFLINE_AMPS,
        OFFLINE_CDMA,
        ONLINE,
        LOW_POWER,
        RESETTING,
        NETWORK_TEST,
        OFFLINE_REQUEST,
        PSEUDO_ONLINE,
        RESETTING_MODEM,
        UNKNOWN,
    }
    export namespace NasSwiPsState {
        export const $gtype: GObject.GType<NasSwiPsState>;
    }
    enum NasSwiPsState {
        ATTACHED,
        DETACHED,
        UNKNOWN,
    }
    export namespace NasSwiSystemMode {
        export const $gtype: GObject.GType<NasSwiSystemMode>;
    }
    enum NasSwiSystemMode {
        NO_SERVICE,
        AMPS,
        CDMA,
        GSM,
        HDR,
        WCDMA,
        GPS,
        WLAN,
        LTE,
        UNKNOWN,
    }
    export namespace NasUsagePreference {
        export const $gtype: GObject.GType<NasUsagePreference>;
    }
    enum NasUsagePreference {
        UNKNOWN,
        VOICE_CENTRIC,
        DATA_CENTRIC,
    }
    export namespace NasVoiceDomainPreference {
        export const $gtype: GObject.GType<NasVoiceDomainPreference>;
    }
    enum NasVoiceDomainPreference {
        CS_ONLY,
        PS_ONLY,
        CS_PREFERRED,
        PS_PREFERRED,
    }
    export namespace NasWcdmaHsService {
        export const $gtype: GObject.GType<NasWcdmaHsService>;
    }
    enum NasWcdmaHsService {
        HSDPA_HSUPA_UNSUPPORTED,
        HSDPA_SUPPORTED,
        HSUPA_SUPPORTED,
        HSDPA_HSUPA_SUPPORTED,
        HSDPA_PLUS_SUPPORTED,
        HSDPA_PLUS_HSUPA_SUPPORTED,
        DC_HSDPA_PLUS_SUPPORTED,
        DC_HSDPA_PLUS_HSUPA_SUPPORTED,
    }
    export namespace NasWcdmaRrcState {
        export const $gtype: GObject.GType<NasWcdmaRrcState>;
    }
    enum NasWcdmaRrcState {
        DISCONNECTED,
        CELL_PCH,
        URA_PCH,
        CELL_FACH,
        CELL_DCH,
    }
    export namespace OmaHfaFeatureDoneState {
        export const $gtype: GObject.GType<OmaHfaFeatureDoneState>;
    }
    enum OmaHfaFeatureDoneState {
        NONE,
        SUCCEEDED,
        FAILED,
    }
    export namespace OmaSessionFailedReason {
        export const $gtype: GObject.GType<OmaSessionFailedReason>;
    }
    enum OmaSessionFailedReason {
        UNKNOWN,
        NETWORK_UNAVAILABLE,
        SERVER_UNAVAILABLE,
        AUTHENTICATION_FAILED,
        MAX_RETRY_EXCEEDED,
        SESSION_CANCELLED,
    }
    export namespace OmaSessionState {
        export const $gtype: GObject.GType<OmaSessionState>;
    }
    enum OmaSessionState {
        COMPLETE_INFORMATION_UPDATED,
        COMPLETE_UPDATED_INFORMATION_UNAVAILABLE,
        FAILED,
        RETRYING,
        CONNECTING,
        CONNECTED,
        AUTHENTICATED,
        MDN_DOWNLOADED,
        MSID_DOWNLOADED,
        PRL_DOWNLOADED,
        MIP_PROFILE_DOWNLOADED,
    }
    export namespace OmaSessionType {
        export const $gtype: GObject.GType<OmaSessionType>;
    }
    enum OmaSessionType {
        CLIENT_INITIATED_DEVICE_CONFIGURE,
        CLIENT_INITIATED_PRL_UPDATE,
        CLIENT_INITIATED_HANDS_FREE_ACTIVATION,
        DEVICE_INITIATED_HANDS_FREE_ACTIVATION,
        NETWORK_INITIATED_PRL_UPDATE,
        NETWORK_INITIATED_DEVICE_CONFIGURE,
        DEVICE_INITIATED_PRL_UPDATE,
    }
    export namespace PbmSessionType {
        export const $gtype: GObject.GType<PbmSessionType>;
    }
    enum PbmSessionType {
        GW_PRIMARY,
        "1X_PRIMARY",
        GW_SECONDARY,
        "1X_SECONDARY",
        NONPROVISIONING_SLOT_1,
        NONPROVISIONING_SLOT_2,
        GLOBAL_PHONEBOOK_SLOT_1,
        GLOBAL_PHONEBOOK_SLOT_2,
    }
    export namespace PdcConfigurationType {
        export const $gtype: GObject.GType<PdcConfigurationType>;
    }
    enum PdcConfigurationType {
        PLATFORM,
        SOFTWARE,
    }
    export namespace PdcRefreshEventType {
        export const $gtype: GObject.GType<PdcRefreshEventType>;
    }
    enum PdcRefreshEventType {
        START,
        COMPLETE,
        CLIENT_REFRESH,
    }
    export namespace PdsNetworkMode {
        export const $gtype: GObject.GType<PdsNetworkMode>;
    }
    enum PdsNetworkMode {
        UMTS,
        CDMA,
    }
    export namespace PdsOperatingMode {
        export const $gtype: GObject.GType<PdsOperatingMode>;
    }
    enum PdsOperatingMode {
        STANDALONE,
        MS_BASED,
        MS_ASSISTED,
    }
    export namespace PdsOperationMode {
        export const $gtype: GObject.GType<PdsOperationMode>;
    }
    enum PdsOperationMode {
        UNKNOWN,
        STANDALONE,
        MS_BASED,
        MS_ASSISTED,
    }
    export namespace PdsPositionSessionStatus {
        export const $gtype: GObject.GType<PdsPositionSessionStatus>;
    }
    enum PdsPositionSessionStatus {
        SUCCESS,
        IN_PROGRESS,
        GENERAL_FAILURE,
        TIMEOUT,
        USER_ENDED_SESSION,
        BAD_PARAMETER,
        PHONE_OFFLINE,
        ENGINE_LOCKED,
        E911_SESSION_IN_PROGRESS,
    }
    export namespace PdsTrackingSessionState {
        export const $gtype: GObject.GType<PdsTrackingSessionState>;
    }
    enum PdsTrackingSessionState {
        UNKNOWN,
        INACTIVE,
        ACTIVE,
    }
    class ProtocolError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NONE: number;
        static MALFORMEDMESSAGE: number;
        static NOMEMORY: number;
        static INTERNAL: number;
        static ABORTED: number;
        static CLIENTIDSEXHAUSTED: number;
        static UNABORTABLETRANSACTION: number;
        static INVALIDCLIENTID: number;
        static NOTHRESHOLDSPROVIDED: number;
        static INVALIDHANDLE: number;
        static INVALIDPROFILE: number;
        static INVALIDPINID: number;
        static INCORRECTPIN: number;
        static NONETWORKFOUND: number;
        static CALLFAILED: number;
        static OUTOFCALL: number;
        static NOTPROVISIONED: number;
        static MISSINGARGUMENT: number;
        static ARGUMENTTOOLONG: number;
        static INVALIDTRANSACTIONID: number;
        static DEVICEINUSE: number;
        static NETWORKUNSUPPORTED: number;
        static DEVICEUNSUPPORTED: number;
        static NOEFFECT: number;
        static NOFREEPROFILE: number;
        static INVALIDPDPTYPE: number;
        static INVALIDTECHNOLOGYPREFERENCE: number;
        static INVALIDPROFILETYPE: number;
        static INVALIDSERVICETYPE: number;
        static INVALIDREGISTERACTION: number;
        static INVALIDPSATTACHACTION: number;
        static AUTHENTICATIONFAILED: number;
        static PINBLOCKED: number;
        static PINALWAYSBLOCKED: number;
        static UIMUNINITIALIZED: number;
        static MAXIMUMQOSREQUESTSINUSE: number;
        static INCORRECTFLOWFILTER: number;
        static NETWORKQOSUNAWARE: number;
        static INVALIDQOSID: number;
        static REQUESTEDNUMBERUNSUPPORTED: number;
        static INTERFACENOTFOUND: number;
        static FLOWSUSPENDED: number;
        static INVALIDDATAFORMAT: number;
        static GENERALERROR: number;
        static UNKNOWNERROR: number;
        static INVALIDARGUMENT: number;
        static INVALIDINDEX: number;
        static NOENTRY: number;
        static DEVICESTORAGEFULL: number;
        static DEVICENOTREADY: number;
        static NETWORKNOTREADY: number;
        static WMSCAUSECODE: number;
        static WMSMESSAGENOTSENT: number;
        static WMSMESSAGEDELIVERYFAILURE: number;
        static WMSINVALIDMESSAGEID: number;
        static WMSENCODING: number;
        static AUTHENTICATIONLOCK: number;
        static INVALIDTRANSITION: number;
        static NOTMCASTINTERFACE: number;
        static MAXIMUMMCASTREQUESTSINUSE: number;
        static INVALIDMCASTHANDLE: number;
        static INVALIDIPFAMILYPREFERENCE: number;
        static SESSIONINACTIVE: number;
        static SESSIONINVALID: number;
        static SESSIONOWNERSHIP: number;
        static INSUFFICIENTRESOURCES: number;
        static DISABLED: number;
        static INVALIDOPERATION: number;
        static INVALIDQMICOMMAND: number;
        static WMSTPDUTYPE: number;
        static WMSSMSCADDRESS: number;
        static INFORMATIONUNAVAILABLE: number;
        static SEGMENTTOOLONG: number;
        static SEGMENTORDER: number;
        static BUNDLINGNOTSUPPORTED: number;
        static OPERATIONPARTIALFAILURE: number;
        static POLICYMISMATCH: number;
        static SIMFILENOTFOUND: number;
        static EXTENDEDINTERNAL: number;
        static ACCESSDENIED: number;
        static HARDWARERESTRICTED: number;
        static ACKNOTSENT: number;
        static INJECTTIMEOUT: number;
        static INCOMPATIBLESTATE: number;
        static FDNRESTRICT: number;
        static SUPSFAILURECASE: number;
        static NORADIO: number;
        static NOTSUPPORTED: number;
        static NOSUBSCRIPTION: number;
        static CARDCALLCONTROLFAILED: number;
        static NETWORKABORTED: number;
        static MSGBLOCKED: number;
        static INVALIDSESSIONTYPE: number;
        static INVALIDPBTYPE: number;
        static NOSIM: number;
        static PBNOTREADY: number;
        static PINRESTRICTION: number;
        static PIN1RESTRICTION: number;
        static PUKRESTRICTION: number;
        static PUK2RESTRICTION: number;
        static PBACCESSRESTRICTED: number;
        static PBDELETEINPROGRESS: number;
        static PBTEXTTOOLONG: number;
        static PBNUMBERTOOLONG: number;
        static PBHIDDENKEYRESTRICTION: number;
        static PBNOTAVAILABLE: number;
        static DEVICEMEMORYERROR: number;
        static NOPERMISSION: number;
        static TOOSOON: number;
        static TIMENOTACQUIRED: number;
        static OPERATIONINPROGRESS: number;
        static FWWRITEFAILED: number;
        static FWINFOREADFAILED: number;
        static FWFILENOTFOUND: number;
        static FWDIRNOTFOUND: number;
        static FWALREADYACTIVATED: number;
        static FWCANNOTGENERICIMAGE: number;
        static FWFILEOPENFAILED: number;
        static FWUPDATEDISCONTINUOUSFRAME: number;
        static FWUPDATEFAILED: number;
        static CATEVENTREGISTRATIONFAILED: number;
        static CATINVALIDTERMINALRESPONSE: number;
        static CATINVALIDENVELOPECOMMAND: number;
        static CATENVELOPECOMMANDBUSY: number;
        static CATENVELOPECOMMANDFAILED: number;
        constructor(options: { message: string; code: number });
        static get_string(val: ProtocolError): string;
        static quark(): GLib.Quark;
    }
    export namespace QosEvent {
        export const $gtype: GObject.GType<QosEvent>;
    }
    enum QosEvent {
        UNKNOWN,
        ACTIVATED,
        SUSPENDED,
        GONE,
        MODIFY_ACCEPTED,
        MODIFY_REJECTED,
        INFO_CODE_UPDATED,
    }
    export namespace QosStatus {
        export const $gtype: GObject.GType<QosStatus>;
    }
    enum QosStatus {
        UNKNOWN,
        ACTIVATED,
        SUSPENDED,
        GONE,
    }
    class SarRfState {
        static $gtype: GObject.GType<SarRfState>;
        static "0": number;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
        static "9": number;
        static "10": number;
        static "11": number;
        static "12": number;
        static "13": number;
        static "14": number;
        static "15": number;
        static "16": number;
        static "17": number;
        static "18": number;
        static "19": number;
        static "20": number;
    }
    export namespace Service {
        export const $gtype: GObject.GType<Service>;
    }
    enum Service {
        UNKNOWN,
        CTL,
        WDS,
        DMS,
        NAS,
        QOS,
        WMS,
        PDS,
        AUTH,
        AT,
        VOICE,
        CAT2,
        UIM,
        PBM,
        QCHAT,
        RMTFS,
        TEST,
        LOC,
        SAR,
        IMS,
        ADC,
        CSD,
        MFS,
        TIME,
        TS,
        TMD,
        SAP,
        WDA,
        TSYNC,
        RFSA,
        CSVT,
        QCMAP,
        IMSP,
        IMSVT,
        IMSA,
        COEX,
        PDC,
        STX,
        BIT,
        IMSRTP,
        RFRPE,
        DSD,
        SSCTL,
        DPM,
        CAT,
        RMS,
        OMA,
        FOX,
        FOTA,
        GMS,
        GAS,
        ATR,
        SSC,
        IMSDCM,
    }
    export namespace SioPort {
        export const $gtype: GObject.GType<SioPort>;
    }
    enum SioPort {
        NONE,
        A2_MUX_RMNET0,
        A2_MUX_RMNET1,
        A2_MUX_RMNET2,
        A2_MUX_RMNET3,
        A2_MUX_RMNET4,
        A2_MUX_RMNET5,
        A2_MUX_RMNET6,
        A2_MUX_RMNET7,
    }
    export namespace SscReportType {
        export const $gtype: GObject.GType<SscReportType>;
    }
    enum SscReportType {
        SMALL,
        LARGE,
    }
    export namespace SubscriptionType {
        export const $gtype: GObject.GType<SubscriptionType>;
    }
    enum SubscriptionType {
        DEFAULT,
        PRIMARY,
        SECONDARY,
        TERITIARY,
        ANY,
    }
    export namespace UimCardApplicationPersonalizationFeature {
        export const $gtype: GObject.GType<UimCardApplicationPersonalizationFeature>;
    }
    enum UimCardApplicationPersonalizationFeature {
        GW_NETWORK,
        GW_NETWORK_SUBSET,
        GW_SERVICE_PROVIDER,
        GW_CORPORATE,
        GW_UIM,
        "1X_NETWORK_TYPE_1",
        "1X_NETWORK_TYPE_2",
        "1X_HRPD",
        "1X_SERVICE_PROVIDER",
        "1X_CORPORATE",
        "1X_RUIM",
        GW_SERVICE_PROVIDER_NAME,
        GW_SP_EHPLMN,
        GW_ICCID,
        GW_IMPI,
        GW_NETWORK_SUBSET_SERVICE_PROVIDER,
        GW_CARRIER,
    }
    export namespace UimCardApplicationPersonalizationFeatureStatus {
        export const $gtype: GObject.GType<UimCardApplicationPersonalizationFeatureStatus>;
    }
    enum UimCardApplicationPersonalizationFeatureStatus {
        GW_NETWORK,
        GW_NETWORK_SUBSET,
        GW_SERVICE_PROVIDER,
        GW_CORPORATE,
        GW_UIM,
        "1X_NETWORK_TYPE_1",
        "1X_NETWORK_TYPE_2",
        "1X_HRPD",
        "1X_SERVICE_PROVIDER",
        "1X_CORPORATE",
        "1X_RUIM",
        UNKNOWN,
        GW_SERVICE_PROVIDER_NAME,
        GW_SP_EHPLMN,
        GW_ICCID,
        GW_IMPI,
        GW_NETWORK_SUBSET_SERVICE_PROVIDER,
        GW_CARRIER,
    }
    export namespace UimCardApplicationPersonalizationState {
        export const $gtype: GObject.GType<UimCardApplicationPersonalizationState>;
    }
    enum UimCardApplicationPersonalizationState {
        UNKNOWN,
        IN_PROGRESS,
        READY,
        CODE_REQUIRED,
        PUK_CODE_REQUIRED,
        PERMANENTLY_BLOCKED,
    }
    export namespace UimCardApplicationState {
        export const $gtype: GObject.GType<UimCardApplicationState>;
    }
    enum UimCardApplicationState {
        UNKNOWN,
        DETECTED,
        PIN1_OR_UPIN_PIN_REQUIRED,
        PUK1_OR_UPIN_PUK_REQUIRED,
        CHECK_PERSONALIZATION_STATE,
        PIN1_BLOCKED,
        ILLEGAL,
        READY,
    }
    export namespace UimCardApplicationType {
        export const $gtype: GObject.GType<UimCardApplicationType>;
    }
    enum UimCardApplicationType {
        UNKNOWN,
        SIM,
        USIM,
        RUIM,
        CSIM,
        ISIM,
    }
    export namespace UimCardError {
        export const $gtype: GObject.GType<UimCardError>;
    }
    enum UimCardError {
        UNKNOWN,
        POWER_DOWN,
        POLL,
        NO_ATR_RECEIVED,
        VOLTAGE_MISMATCH,
        PARITY,
        POSSIBLY_REMOVED,
        TECHNICAL,
    }
    export namespace UimCardProtocol {
        export const $gtype: GObject.GType<UimCardProtocol>;
    }
    enum UimCardProtocol {
        UNKNOWN,
        ICC,
        UICC,
    }
    export namespace UimCardState {
        export const $gtype: GObject.GType<UimCardState>;
    }
    enum UimCardState {
        ABSENT,
        PRESENT,
        ERROR,
    }
    export namespace UimDepersonalizationOperation {
        export const $gtype: GObject.GType<UimDepersonalizationOperation>;
    }
    enum UimDepersonalizationOperation {
        DEACTIVATE,
        UNBLOCK,
    }
    export namespace UimFileControlInformation {
        export const $gtype: GObject.GType<UimFileControlInformation>;
    }
    enum UimFileControlInformation {
        NO_DATA,
        FCP,
        FCI,
        FCI_WITH_INTERFACES,
        FMD,
    }
    export namespace UimFileType {
        export const $gtype: GObject.GType<UimFileType>;
    }
    enum UimFileType {
        TRANSPARENT,
        CYCLIC,
        LINEAR_FIXED,
        DEDICATED_FILE,
        MASTER_FILE,
    }
    export namespace UimPhysicalCardState {
        export const $gtype: GObject.GType<UimPhysicalCardState>;
    }
    enum UimPhysicalCardState {
        UNKNOWN,
        ABSENT,
        PRESENT,
    }
    export namespace UimPinId {
        export const $gtype: GObject.GType<UimPinId>;
    }
    enum UimPinId {
        UNKNOWN,
        PIN1,
        PIN2,
        UPIN,
        HIDDEN_KEY,
    }
    export namespace UimPinState {
        export const $gtype: GObject.GType<UimPinState>;
    }
    enum UimPinState {
        NOT_INITIALIZED,
        ENABLED_NOT_VERIFIED,
        ENABLED_VERIFIED,
        DISABLED,
        BLOCKED,
        PERMANENTLY_BLOCKED,
    }
    export namespace UimRefreshMode {
        export const $gtype: GObject.GType<UimRefreshMode>;
    }
    enum UimRefreshMode {
        RESET,
        INIT,
        INIT_FCN,
        FCN,
        INIT_FULL_FCN,
        APP_RESET,
        "3G_RESET",
    }
    export namespace UimRefreshStage {
        export const $gtype: GObject.GType<UimRefreshStage>;
    }
    enum UimRefreshStage {
        WAIT_FOR_OK,
        START,
        END_WITH_SUCCESS,
        END_WITH_FAILURE,
    }
    export namespace UimSecurityAttributeLogic {
        export const $gtype: GObject.GType<UimSecurityAttributeLogic>;
    }
    enum UimSecurityAttributeLogic {
        ALWAYS,
        NEVER,
        AND,
        OR,
        SINGLE,
    }
    export namespace UimSessionType {
        export const $gtype: GObject.GType<UimSessionType>;
    }
    enum UimSessionType {
        PRIMARY_GW_PROVISIONING,
        PRIMARY_1X_PROVISIONING,
        SECONDARY_GW_PROVISIONING,
        SECONDARY_1X_PROVISIONING,
        NONPROVISIONING_SLOT_1,
        NONPROVISIONING_SLOT_2,
        CARD_SLOT_1,
        CARD_SLOT_2,
        LOGICAL_CHANNEL_SLOT_1,
        LOGICAL_CHANNEL_SLOT_2,
        TERTIARY_GW_PROVISIONING,
        TERTIARY_1X_PROVISIONING,
        QUATERNARY_GW_PROVISIONING,
        QUATERNARY_1X_PROVISIONING,
        QUINARY_GW_PROVISIONING,
        QUINARY_1X_PROVISIONING,
        NONPROVISIONING_SLOT_3,
        NONPROVISIONING_SLOT_4,
        NONPROVISIONING_SLOT_5,
        CARD_SLOT_3,
        CARD_SLOT_4,
        CARD_SLOT_5,
        LOGICAL_CHANNEL_SLOT_3,
        LOGICAL_CHANNEL_SLOT_4,
        LOGICAL_CHANNEL_SLOT_5,
    }
    export namespace UimSlotState {
        export const $gtype: GObject.GType<UimSlotState>;
    }
    enum UimSlotState {
        INACTIVE,
        ACTIVE,
    }
    export namespace VoiceAlphaDataCodingScheme {
        export const $gtype: GObject.GType<VoiceAlphaDataCodingScheme>;
    }
    enum VoiceAlphaDataCodingScheme {
        GSM,
        UCS2,
    }
    class VoiceAls {
        static $gtype: GObject.GType<VoiceAls>;
        static "1": number;
        static "2": number;
    }
    export namespace VoiceCallControlResultType {
        export const $gtype: GObject.GType<VoiceCallControlResultType>;
    }
    enum VoiceCallControlResultType {
        VOICE,
        SUPS,
        USSD,
    }
    export namespace VoiceCallControlSupplementaryServiceType {
        export const $gtype: GObject.GType<VoiceCallControlSupplementaryServiceType>;
    }
    enum VoiceCallControlSupplementaryServiceType {
        ACTIVATE,
        DEACTIVATE,
        REGISTER,
        ERASE,
        INTERROGATE,
        REGISTER_PASSWORD,
        USSD,
    }
    export namespace VoiceCallDirection {
        export const $gtype: GObject.GType<VoiceCallDirection>;
    }
    enum VoiceCallDirection {
        UNKNOWN,
        MO,
        MT,
    }
    export namespace VoiceCallEndReason {
        export const $gtype: GObject.GType<VoiceCallEndReason>;
    }
    enum VoiceCallEndReason {
        OFFLINE,
        CDMA_LOCK,
        NO_SERVICE,
        FADE,
        INTERCEPT,
        REORDER,
        RELEASE_NORMAL,
        RELEASE_SO_REJECT,
        INCOMING_CALL,
        ALERT_STOP,
        CLIENT_END,
        ACTIVATION,
        MC_ABORT,
        MAX_ACCESS_PROBE,
        PSIST_N,
        UIM_NOT_PRESENT,
        ACCESS_ATTEMPT_IN_PROGRESS,
        ACCESS_FAILURE,
        ACCESS_RETRY_ORDER,
        CCS_NOT_SUPPORTED_BY_BS,
        NO_RESPONSE_FROM_BS,
        REJECTED_BY_BS,
        INCOMPATIBLE,
        ACCESS_BLOCK,
        ALREADY_IN_TC,
        EMERGENCY_FLASHED,
        USER_CALL_ORIGINATED_DURING_GPS,
        USER_CALL_ORIGINATED_DURING_SMS,
        USER_CALL_ORIGINATED_DURING_DATA,
        REDIRECTION_OR_HANDOFF,
        ACCESS_BLOCK_ALL,
        OTASP_SPC_ERR,
        IS707B_MAX_ACCESS_PROBES,
        ACCESS_FAILURE_REJECT_ORDER,
        ACCESS_FAILURE_RETRY_ORDER,
        TIMEOUT_T42,
        TIMEOUT_T40,
        SERVICE_INIT_FAILURE,
        TIMEOUT_T50,
        TIMEOUT_T51,
        RL_ACK_TIMEOUT,
        BAD_FORWARD_LINK,
        TRM_REQUEST_FAILED,
        TIMEOUT_T41,
        INCOMING_REJECTED,
        SETUP_REJECTED,
        NETWORK_END,
        NO_FUNDS,
        NO_GW_SERVICE,
        NO_CDMA_SERVICE,
        NO_FULL_SERVICE,
        MAX_PS_CALLS,
        UNKNOWN_SUBSCRIBER,
        ILLEGAL_SUBSCRIBER,
        BEARER_SERVICE_NOT_PROVISIONED,
        TELE_SERVICE_NOT_PROVISIONED,
        ILLEGAL_EQUIPMENT,
        CALL_BARRED,
        ILLEGAL_SS_OPERATION,
        SS_ERROR_STATUS,
        SS_NOT_AVAILABLE,
        SS_SUBSCRIPTION_VIOLATION,
        SS_INCOMPATIBILITY,
        FACILITY_NOT_SUPPORTED,
        ABSENT_SUBSCRIBER,
        SHORT_TERM_DENIAL,
        LONG_TERM_DENIAL,
        SYSTEM_FAILURE,
        DATA_MISSING,
        UNEXPECTED_DATA_VALUE,
        PASSWORD_REGISTRATION_FAILURE,
        NEGATIVE_PASSWORD_CHECK,
        NUM_OF_PASSWORD_ATTEMPTS_VIOLATION,
        POSITION_METHOD_FAILURE,
        UNKNOWN_ALPHABET,
        USSD_BUSY,
        REJECTED_BY_USER,
        REJECTED_BY_NETWORK,
        DEFLECTION_TO_SERVED_SUBSCRIBER,
        SPECIAL_SERVICE_CODE,
        INVALID_DEFLECTED_TO_NUMBER,
        MULTIPARTY_PARTICIPANTS_EXCEEDED,
        RESOURCES_NOT_AVAILABLE,
        UNASSIGNED_NUMBER,
        NO_ROUTE_TO_DESTINATION,
        CHANNEL_UNACCEPTABLE,
        OPERATOR_DETERMINED_BARRING,
        NORMAL_CALL_CLEARING,
        USER_BUSY,
        NO_USER_RESPONDING,
        USER_ALERTING_NO_ANSWER,
        CALL_REJECTED,
        NUMBER_CHANGED,
        PREEMPTION,
        DESTINATION_OUT_OF_ORDER,
        INVALID_NUMBER_FORMAT,
        FACILITY_REJECTED,
        RESPONSE_TO_STATUS_ENQUIRY,
        NORMAL_UNSPECIFIED,
        NO_CIRCUIT_OR_CHANNEL_AVAILABLE,
        NETWORK_OUT_OF_ORDER,
        TEMPORARY_FAILURE,
        SWITCHING_EQUIPMENT_CONGESTION,
        ACCESS_INFORMATION_DISCARDED,
        REQUESTED_CIRCUIT_OR_CHANNEL_NOT_AVAILABLE,
        RESOURCES_UNAVAILABLE_OR_UNSPECIFIED,
        QOS_UNAVAILABLE,
        REQUESTED_FACILITY_NOT_SUBSCRIBED,
        INCOMING_CALLS_BARRED_WITHIN_CUG,
        BEARER_CAPABILITY_NOT_AUTH,
        BEARER_CAPABILITY_UNAVAILABLE,
        SERVICE_OPTION_NOT_AVAILABLE,
        ACM_LIMIT_EXCEEDED,
        BEARER_SERVICE_NOT_IMPLEMENTED,
        REQUESTED_FACILITY_NOT_IMPLEMENTED,
        ONLY_DIGITAL_INFORMATION_BEARER_AVAILABLE,
        SERVICE_OR_OPTION_NOT_IMPLEMENTED,
        INVALID_TRANSACTION_IDENTIFIER,
        USER_NOT_MEMBER_OF_CUG,
        INCOMPATIBLE_DESTINATION,
        INVALID_TRANSIT_NETWORK_SELECTION,
        SEMANTICALLY_INCORRECT_MESSAGE,
        INVALID_MANDATORY_INFORMATION,
        MESSAGE_TYPE_NOT_IMPLEMENTED,
        MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
        INFORMATION_ELEMENT_NON_EXISTENT,
        CONDITIONAL_IE_ERROR,
        MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
        RECOVERY_ON_TIMER_EXPIRED,
        PROTOCOL_ERROR_UNSPECIFIED,
        INTERWORKING_UNSPECIFIED,
        OUTGOING_CALLS_BARRED_WITHIN_CUG,
        NO_CUG_SELECTION,
        UNKNOWN_CUG_INDEX,
        CUG_INDEX_INCOMPATIBLE,
        CUG_CALL_FAILURE_UNSPECIFIED,
        CLIR_NOT_SUBSCRIBED,
        CCBS_POSSIBLE,
        CCBS_NOT_POSSIBLE,
        IMSI_UNKNOWN_IN_HLR,
        ILLEGAL_MS,
        IMSI_UNKNOWN_IN_VLR,
        IMEI_NOT_ACCEPTED,
        ILLEGAL_ME,
        PLMN_NOT_ALLOWED,
        LOCATION_AREA_NOT_ALLOWED,
        ROAMING_NOT_ALLOWED_IN_THIS_LOCATION_AREA,
        NO_SUITABLE_CELLS_IN_LOCATION_AREA,
        NETWORK_FAILURE,
        MAC_FAILURE,
        SYNCH_FAILURE,
        NETWORK_CONGESTION,
        GSM_AUTHENTICATION_UNACCEPTABLE,
        SERVICE_NOT_SUBSCRIBED,
        SERVICE_TEMPORARILY_OUT_OF_ORDER,
        CALL_CANNOT_BE_IDENTIFIED,
        INCORRECT_SEMANTICS_IN_MESSAGE,
        MANDATORY_INFORMATION_INVALID,
        ACCESS_STRATUM_FAILURE,
        INVALID_SIM,
        WRONG_STATE,
        ACCESS_CLASS_BLOCKED,
        NO_RESOURCES,
        INVALID_USER_DATA,
        TIMER_T3230_EXPIRED,
        NO_CELL_AVAILABLE,
        ABORT_MESSAGE_RECEIVED,
        RADIO_LINK_LOST,
        TIMER_T303_EXPIRED,
        CNM_MM_RELEASE_PENDING,
        ACCESS_STRATUM_REJECT_RR_RELEASE_INDICATION,
        ACCESS_STRATUM_REJECT_RR_RANDOM_ACCESS_FAILURE,
        ACCESS_STRATUM_REJECT_RRC_RELEASE_INDICATION,
        ACCESS_STRATUM_REJECT_RRC_CLOSE_SESSION_INDICATION,
        ACCESS_STRATUM_REJECT_RRC_OPEN_SESSION_FAILURE,
        ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE,
        ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE_REDIAL_NOT_ALLOWED,
        ACCESS_STRATUM_REJECT_LOW_LEVEL_IMMEDIATE_RETRY,
        ACCESS_STRATUM_REJECT_ABORT_RADIO_UNAVAILABLE,
        SERVICE_OPTION_NOT_SUPPORTED,
        BAD_REQUEST_WAIT_INVITE,
        BAD_REQUEST_WAIT_REINVITE,
        INVALID_REMOTE_URI,
        REMOTE_UNSUPPORTED_MEDIA_TYPE,
        PEER_NOT_REACHABLE,
        NETWORK_NO_RESPONSE_TIMEOUT,
        NETWORK_NO_RESPONSE_HOLD_FAILURE,
        DATA_CONNECTION_LOST,
        UPGRADE_DOWNGRADE_REJECTED,
        SIP_403_FORBIDDEN,
        NO_NETWORK_RESPONSE,
        UPGRADE_DOWNGRADE_FAILED,
        UPGRADE_DOWNGRADE_CANCELLED,
        SSAC_REJECT,
        THERMAL_EMERGENCY,
        "1XCSFB_SOFT_FAILURE",
        "1XCSFB_HARD_FAILURE",
    }
    export namespace VoiceCallMode {
        export const $gtype: GObject.GType<VoiceCallMode>;
    }
    enum VoiceCallMode {
        UNKNOWN,
        CDMA,
        GSM,
        UMTS,
        LTE,
    }
    export namespace VoiceCallState {
        export const $gtype: GObject.GType<VoiceCallState>;
    }
    enum VoiceCallState {
        UNKNOWN,
        ORIGINATION,
        INCOMING,
        CONVERSATION,
        CC_IN_PROGRESS,
        ALERTING,
        HOLD,
        WAITING,
        DISCONNECTING,
        END,
        SETUP,
    }
    export namespace VoiceCallType {
        export const $gtype: GObject.GType<VoiceCallType>;
    }
    enum VoiceCallType {
        VOICE,
        VOICE_IP,
        OTAPA,
        NON_STD_OTASP,
        EMERGENCY,
        SUPS,
    }
    export namespace VoiceDomain {
        export const $gtype: GObject.GType<VoiceDomain>;
    }
    enum VoiceDomain {
        CS_ONLY,
        PS_ONLY,
        CS_PREFERRED,
        PS_PREFERRED,
    }
    export namespace VoicePresentation {
        export const $gtype: GObject.GType<VoicePresentation>;
    }
    enum VoicePresentation {
        ALLOWED,
        RESTRICTED,
        UNAVAILABLE,
        PAYPHONE,
    }
    export namespace VoicePrivacy {
        export const $gtype: GObject.GType<VoicePrivacy>;
    }
    enum VoicePrivacy {
        STANDARD,
        ENHANCED,
    }
    export namespace VoiceServiceOption {
        export const $gtype: GObject.GType<VoiceServiceOption>;
    }
    enum VoiceServiceOption {
        WILD,
        IS_96A,
        EVRC,
        "13K_IS733",
        SELECTABLE_MODE_VOCODER,
        "4GV_NARROW_BAND",
        "4GV_WIDE_BAND",
        "13K",
        IS_96,
        WVRC,
    }
    export namespace VoiceSupplementaryServiceAction {
        export const $gtype: GObject.GType<VoiceSupplementaryServiceAction>;
    }
    enum VoiceSupplementaryServiceAction {
        ACTIVATE,
        DEACTIVATE,
        REGISTER,
        ERASE,
    }
    export namespace VoiceSupplementaryServiceNotificationType {
        export const $gtype: GObject.GType<VoiceSupplementaryServiceNotificationType>;
    }
    enum VoiceSupplementaryServiceNotificationType {
        OUTGOING_CALL_IS_FORWARDED,
        OUTGOING_CALL_IS_WAITING,
        OUTGOING_CUG_CALL,
        OUTGOING_CALLS_BARRED,
        OUTGOING_CALL_IS_DEFLECTED,
        INCOMING_CUG_CALL,
        INCOMING_CALLS_BARRED,
        INCOMING_FORWARDED_CALL,
        INCOMING_DEFLECTED_CALL,
        INCOMING_CALL_IS_FORWARDED,
        UNCONDITIONAL_CALL_FORWARD_ACTIVE,
        CONDITIONAL_CALL_FORWARD_ACTIVE,
        CLIR_SUPPRESSION_REJECTED,
        CALL_IS_ON_HOLD,
        CALL_IS_RETRIEVED,
        CALL_IS_IN_MULTIPARTY,
        INCOMING_CALL_IS_ECT,
    }
    export namespace VoiceSupplementaryServiceReason {
        export const $gtype: GObject.GType<VoiceSupplementaryServiceReason>;
    }
    enum VoiceSupplementaryServiceReason {
        FORWARD_UNCONDITIONAL,
        FORWARD_MOBILE_BUSY,
        FORWARD_NO_REPLY,
        FORWARD_UNREACHABLE,
        FORWARD_ALL,
        FORWARD_ALL_CONDITIONAL,
        ALL_OUTGOING,
        OUTGOING_INTERNAL,
        OUTGOING_INTERNAL_EXTERNAL_TO_HOME,
        ALL_INCOMING,
        INCOMING_ROAMING,
        BAR_ALL,
        BAR_ALL_OUTGOING,
        BAR_ALL_INCOMING,
        CALL_WAITING,
    }
    export namespace VoiceSupplementaryServiceType {
        export const $gtype: GObject.GType<VoiceSupplementaryServiceType>;
    }
    enum VoiceSupplementaryServiceType {
        RELEASE_HELD_OR_WAITING,
        RELEASE_ACTIVE_ACCEPT_HELD_OR_WAITING,
        HOLD_ACTIVE_ACCEPT_WAITING_OR_HELD,
        HOLD_ALL_EXCEPT_SPECIFIED_CALL,
        MAKE_CONFERENCE_CALL,
        EXPLICIT_CALL_TRANSFER,
        CCBS_ACTIVATION,
        END_ALL_CALLS,
        RELEASE_SPECIFIED_CALL,
        LOCAL_HOLD,
        LOCAL_UNHOLD,
    }
    export namespace VoiceTtyMode {
        export const $gtype: GObject.GType<VoiceTtyMode>;
    }
    enum VoiceTtyMode {
        FULL,
        VCO,
        HCO,
        OFF,
    }
    export namespace VoiceUserAction {
        export const $gtype: GObject.GType<VoiceUserAction>;
    }
    enum VoiceUserAction {
        UNKNOWN,
        NOT_REQUIRED,
        REQUIRED,
    }
    export namespace VoiceUssDataCodingScheme {
        export const $gtype: GObject.GType<VoiceUssDataCodingScheme>;
    }
    enum VoiceUssDataCodingScheme {
        UNKNOWN,
        ASCII,
        "8BIT",
        UCS2,
    }
    export namespace WdaDataAggregationProtocol {
        export const $gtype: GObject.GType<WdaDataAggregationProtocol>;
    }
    enum WdaDataAggregationProtocol {
        DISABLED,
        TLP,
        QC_NCM,
        MBIM,
        RNDIS,
        QMAP,
        QMAPV2,
        QMAPV3,
        QMAPV4,
        QMAPV5,
    }
    export namespace WdaLinkLayerProtocol {
        export const $gtype: GObject.GType<WdaLinkLayerProtocol>;
    }
    enum WdaLinkLayerProtocol {
        UNKNOWN,
        "802_3",
        RAW_IP,
    }
    export namespace WdaLoopBackState {
        export const $gtype: GObject.GType<WdaLoopBackState>;
    }
    enum WdaLoopBackState {
        DISABLED,
        ENABLED,
    }
    export namespace WdsAddressAllocationPreference {
        export const $gtype: GObject.GType<WdsAddressAllocationPreference>;
    }
    enum WdsAddressAllocationPreference {
        NAS,
        DHCP,
    }
    export namespace WdsAttachPdnListAction {
        export const $gtype: GObject.GType<WdsAttachPdnListAction>;
    }
    enum WdsAttachPdnListAction {
        NONE,
        DETACH_OR_PDN_DISCONNECT,
    }
    export namespace WdsAutoconnectSetting {
        export const $gtype: GObject.GType<WdsAutoconnectSetting>;
    }
    enum WdsAutoconnectSetting {
        DISABLED,
        ENABLED,
        PAUSED,
    }
    export namespace WdsAutoconnectSettingRoaming {
        export const $gtype: GObject.GType<WdsAutoconnectSettingRoaming>;
    }
    enum WdsAutoconnectSettingRoaming {
        ALLOWED,
        HOME_ONLY,
    }
    export namespace WdsCallEndReason {
        export const $gtype: GObject.GType<WdsCallEndReason>;
    }
    enum WdsCallEndReason {
        GENERIC_UNSPECIFIED,
        GENERIC_CLIENT_END,
        GENERIC_NO_SERVICE,
        GENERIC_FADE,
        GENERIC_RELEASE_NORMAL,
        GENERIC_ACCESS_ATTEMPT_IN_PROGRESS,
        GENERIC_ACCESS_FAILURE,
        GENERIC_REDIRECTION_OR_HANDOFF,
        GENERIC_CLOSE_IN_PROGRESS,
        GENERIC_AUTHENTICATION_FAILED,
        GENERIC_INTERNAL_ERROR,
        CDMA_LOCK,
        CDMA_INTERCEPT,
        CDMA_REORDER,
        CDMA_RELEASE_SO_REJECT,
        CDMA_INCOMING_CALL,
        CDMA_ALERT_STOP,
        CDMA_ACTIVATION,
        CDMA_MAX_ACCESS_PROBES,
        CDMA_CCS_NOT_SUPPORTED_BY_BS,
        CDMA_NO_RESPONSE_FROM_BS,
        CDMA_REJECTED_BY_BS,
        CDMA_INCOMPATIBLE,
        CDMA_ALREADY_IN_TC,
        CDMA_USER_CALL_ORIGINATED_DURING_GPS,
        CDMA_USER_CALL_ORIGINATED_DURING_SMS,
        CDMA_NO_SERVICE,
        GSM_WCDMA_CONFERENCE_FAILED,
        GSM_WCDMA_INCOMING_REJECTED,
        GSM_WCDMA_NO_SERVICE,
        GSM_WCDMA_NETWORK_END,
        GSM_WCDMA_LLC_SNDCP_FAILURE,
        GSM_WCDMA_INSUFFICIENT_RESOURCES,
        GSM_WCDMA_OPTION_TEMPORARILY_OUT_OF_ORDER,
        GSM_WCDMA_NSAPI_ALREADY_USED,
        GSM_WCDMA_REGULAR_DEACTIVATION,
        GSM_WCDMA_NETWORK_FAILURE,
        GSM_WCDMA_REATTACH_REQUIRED,
        GSM_WCDMA_PROTOCOL_ERROR,
        GSM_WCDMA_OPERATOR_DETERMINED_BARRING,
        GSM_WCDMA_UNKNOWN_APN,
        GSM_WCDMA_UNKNOWN_PDP,
        GSM_WCDMA_GGSN_REJECT,
        GSM_WCDMA_ACTIVATION_REJECT,
        GSM_WCDMA_OPTION_NOT_SUPPORTED,
        GSM_WCDMA_OPTION_UNSUBSCRIBED,
        GSM_WCDMA_QOS_NOT_ACCEPTED,
        GSM_WCDMA_TFT_SEMANTIC_ERROR,
        GSM_WCDMA_TFT_SYNTAX_ERROR,
        GSM_WCDMA_UNKNOWN_PDP_CONTEXT,
        GSM_WCDMA_FILTER_SEMANTIC_ERROR,
        GSM_WCDMA_FILTER_SYNTAX_ERROR,
        GSM_WCDMA_PDP_WITHOUT_ACTIVE_TFT,
        GSM_WCDMA_INVALID_TRANSACTION_ID,
        GSM_WCDMA_MESSAGE_INCORRECT_SEMANTIC,
        GSM_WCDMA_INVALID_MANDATORY_INFO,
        GSM_WCDMA_MESSAGE_TYPE_UNSUPPORTED,
        GSM_WCDMA_MESSAGE_TYPE_NONCOMPATIBLE_STATE,
        GSM_WCDMA_UNKNOWN_INFO_ELEMENT,
        GSM_WCDMA_CONDITIONAL_IE_ERROR,
        GSM_WCDMA_MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
        GSM_WCDMA_APN_TYPE_CONFLICT,
        GSM_WCDMA_NO_GPRS_CONTEXT,
        GSM_WCDMA_FEATURE_NOT_SUPPORTED,
        EVDO_CONNECTION_DENY_GENERAL_OR_BUSY,
        EVDO_CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
        EVDO_HDR_CHANGE,
        EVDO_HDR_EXIT,
        EVDO_HDR_NO_SESSION,
        EVDO_HDR_ORIGINATION_DURING_GPS_FIX,
        EVDO_HDR_CONNECTION_SETUP_TIMEOUT,
        EVDO_HDR_RELEASED_BY_CM,
    }
    export namespace WdsCallType {
        export const $gtype: GObject.GType<WdsCallType>;
    }
    enum WdsCallType {
        LAPTOP,
        EMBEDDED,
    }
    export namespace WdsClientType {
        export const $gtype: GObject.GType<WdsClientType>;
    }
    enum WdsClientType {
        TETHERED,
        UNDEFINED,
    }
    export namespace WdsConnectionStatus {
        export const $gtype: GObject.GType<WdsConnectionStatus>;
    }
    enum WdsConnectionStatus {
        UNKNOWN,
        DISCONNECTED,
        CONNECTED,
        SUSPENDED,
        AUTHENTICATING,
    }
    export namespace WdsDataBearerTechnology {
        export const $gtype: GObject.GType<WdsDataBearerTechnology>;
    }
    enum WdsDataBearerTechnology {
        UNKNOWN,
        CDMA20001X,
        "1XEVDO",
        GSM,
        UMTS,
        "1XEVDO_REVA",
        EDGE,
        HSDPA,
        HSUPA,
        HSDPA_HSUPDA,
        LTE,
        EHRPD,
        HSDPAPLUS,
        HSDPAPLUS_HSUPA,
        DCHSDPAPLUS,
        DCHSDPAPLUS_HSUPA,
        HSDPAPLUS_PLUS_64QAM,
        HSDPAPLUS_PLUS_64QAM_HSUPA,
        TDSCDMA,
        TDSCDMA_HSDPA,
        TDSCDMA_HSUPA,
    }
    export namespace WdsDataCallStatus {
        export const $gtype: GObject.GType<WdsDataCallStatus>;
    }
    enum WdsDataCallStatus {
        UNKNOWN,
        ACTIVATED,
        TERMINATED,
    }
    export namespace WdsDataCallType {
        export const $gtype: GObject.GType<WdsDataCallType>;
    }
    enum WdsDataCallType {
        UNKNOWN,
        EMBEDDED,
        TETHERED,
        MODEM_EMBEDDED,
    }
    export namespace WdsDataSystem {
        export const $gtype: GObject.GType<WdsDataSystem>;
    }
    enum WdsDataSystem {
        UNKNOWN,
        CDMA1X,
        CDMA1X_EVDO,
        GPRS,
        WCDMA,
        LTE,
        TDSCDMA,
    }
    export namespace WdsDataSystemNetworkType {
        export const $gtype: GObject.GType<WdsDataSystemNetworkType>;
    }
    enum WdsDataSystemNetworkType {
        "3GPP",
        "3GPP2",
    }
    export namespace WdsDeliveryOrder {
        export const $gtype: GObject.GType<WdsDeliveryOrder>;
    }
    enum WdsDeliveryOrder {
        SUBSCRIBE,
        ON,
        OFF,
    }
    export namespace WdsDormancyStatus {
        export const $gtype: GObject.GType<WdsDormancyStatus>;
    }
    enum WdsDormancyStatus {
        UNKNOWN,
        TRAFFIC_CHANNEL_DORMANT,
        TRAFFIC_CHANNEL_ACTIVE,
    }
    export namespace WdsDsProfileError {
        export const $gtype: GObject.GType<WdsDsProfileError>;
    }
    enum WdsDsProfileError {
        UNKNOWN,
        FAIL,
        INVALID_HANDLE,
        INVALID_OPERATION,
        INVALID_PROFILE_TYPE,
        INVALID_PROFILE_NUMBER,
        INVALID_PROFILE_ID,
        INVALID_ARGUMENT,
        REGISTRY_NOT_INITIALIZED,
        INVALID_PARAMETER_LENGTH,
        LIST_END,
        INVALID_SUBSCRIPTION_ID,
        INVALID_PROFILE_FAMILY,
        "3GPP_INVALID_PROFILE_FAMILY",
        "3GPP_ACCESS_ERROR",
        "3GPP_CONTEXT_NOT_DEFINED",
        "3GPP_VALID_FLAG_NOT_SET",
        "3GPP_READ_ONLY_FLAG_SET",
        "3GPP_OUT_OF_PROFILES",
        "3GPP2_INVALID_PROFILE_ID",
    }
    export namespace WdsExtendedTechnologyPreference {
        export const $gtype: GObject.GType<WdsExtendedTechnologyPreference>;
    }
    enum WdsExtendedTechnologyPreference {
        CDMA,
        UMTS,
        EPC,
        EMBMS,
        MODEM_LINK_LOCAL,
    }
    export namespace WdsIpFamily {
        export const $gtype: GObject.GType<WdsIpFamily>;
    }
    enum WdsIpFamily {
        UNKNOWN,
        IPV4,
        IPV6,
        UNSPECIFIED,
    }
    export namespace WdsIpSupportType {
        export const $gtype: GObject.GType<WdsIpSupportType>;
    }
    enum WdsIpSupportType {
        IPV4,
        IPV6,
        IPV4V6,
    }
    export namespace WdsNetworkType {
        export const $gtype: GObject.GType<WdsNetworkType>;
    }
    enum WdsNetworkType {
        UNKNOWN,
        "3GPP2",
        "3GPP",
    }
    export namespace WdsPdpAccessControl {
        export const $gtype: GObject.GType<WdsPdpAccessControl>;
    }
    enum WdsPdpAccessControl {
        NONE,
        REJECT,
        PERMISSION,
    }
    export namespace WdsPdpDataCompressionType {
        export const $gtype: GObject.GType<WdsPdpDataCompressionType>;
    }
    enum WdsPdpDataCompressionType {
        OFF,
        MANUFACTURER_PREFERRED,
        V42BIS,
        V44,
    }
    export namespace WdsPdpHeaderCompressionType {
        export const $gtype: GObject.GType<WdsPdpHeaderCompressionType>;
    }
    enum WdsPdpHeaderCompressionType {
        OFF,
        MANUFACTURER_PREFERRED,
        RFC1144,
        RFC2507,
        RFC3095,
    }
    export namespace WdsPdpType {
        export const $gtype: GObject.GType<WdsPdpType>;
    }
    enum WdsPdpType {
        IPV4,
        PPP,
        IPV6,
        IPV4_OR_IPV6,
    }
    export namespace WdsProfileChangeEvent {
        export const $gtype: GObject.GType<WdsProfileChangeEvent>;
    }
    enum WdsProfileChangeEvent {
        CREATE_EVENT,
        DELETE_EVENT,
        MODIFY_EVENT,
        SUBSCRIPTION_CHANGE_EVENT,
    }
    export namespace WdsProfileFamily {
        export const $gtype: GObject.GType<WdsProfileFamily>;
    }
    enum WdsProfileFamily {
        EMBEDDED,
        TETHERED,
    }
    export namespace WdsProfileType {
        export const $gtype: GObject.GType<WdsProfileType>;
    }
    enum WdsProfileType {
        "3GPP",
        "3GPP2",
        EPC,
        ALL,
    }
    export namespace WdsQosClassIdentifier {
        export const $gtype: GObject.GType<WdsQosClassIdentifier>;
    }
    enum WdsQosClassIdentifier {
        NETWORK_ASSIGN,
        GUARANTEED_BITRATE1,
        GUARANTEED_BITRATE2,
        GUARANTEED_BITRATE3,
        GUARANTEED_BITRATE4,
        NON_GUARANTEED_BITRATE5,
        NON_GUARANTEED_BITRATE6,
        NON_GUARANTEED_BITRATE7,
        NON_GUARANTEED_BITRATE8,
    }
    export namespace WdsRadioAccessTechnology {
        export const $gtype: GObject.GType<WdsRadioAccessTechnology>;
    }
    enum WdsRadioAccessTechnology {
        NULL_BEARER,
        "3GPP_WCDMA",
        "3GPP_GERAN",
        "3GPP_LTE",
        "3GPP_TDSCDMA",
        "3GPP_WLAN",
        "3GPP_MAXIMUM",
        "3GPP2_1X",
        "3GPP2_HRPD",
        "3GPP2_EHRPD",
        "3GPP2_WLAN",
        "3GPP2_MAXIMUM",
    }
    export namespace WdsSduErroneousDelivery {
        export const $gtype: GObject.GType<WdsSduErroneousDelivery>;
    }
    enum WdsSduErroneousDelivery {
        SUBSCRIBE,
        NO_DETECTION,
        ENABLED,
        DISABLED,
    }
    export namespace WdsSduErrorRatio {
        export const $gtype: GObject.GType<WdsSduErrorRatio>;
    }
    enum WdsSduErrorRatio {
        SUBSCRIBE,
        "1E2",
        "7E3",
        "1E3",
        "1E4",
        "1E5",
        "1E6",
        "1E1",
    }
    export namespace WdsSduResidualBitErrorRatio {
        export const $gtype: GObject.GType<WdsSduResidualBitErrorRatio>;
    }
    enum WdsSduResidualBitErrorRatio {
        SUBSCRIBE,
        "5E2",
        "1E2",
        "5E3",
        "4E3",
        "1E3",
        "1E4",
        "1E5",
        "1E6",
        "6E8",
    }
    export namespace WdsTetheredCallType {
        export const $gtype: GObject.GType<WdsTetheredCallType>;
    }
    enum WdsTetheredCallType {
        NON_TETHERED,
        RMNET,
        DUN,
    }
    export namespace WdsTrafficClass {
        export const $gtype: GObject.GType<WdsTrafficClass>;
    }
    enum WdsTrafficClass {
        SUBSCRIBED,
        CONVERSATIONAL,
        STREAMING,
        INTERACTIVE,
        BACKGROUND,
    }
    export namespace WdsVerboseCallEndReason3gpp {
        export const $gtype: GObject.GType<WdsVerboseCallEndReason3gpp>;
    }
    enum WdsVerboseCallEndReason3gpp {
        OPERATOR_DETERMINED_BARRING,
        LLC_SNDCP_FAILURE,
        INSUFFICIENT_RESOURCES,
        UNKNOWN_APN,
        UNKNOWN_PDP,
        AUTHENTICATION_FAILED,
        GGSN_REJECT,
        ACTIVATION_REJECT,
        OPTION_NOT_SUPPORTED,
        OPTION_UNSUBSCRIBED,
        OPTION_TEMPORARILY_OUT_OF_ORDER,
        NSAPI_ALREADY_USED,
        REGULAR_DEACTIVATION,
        QOS_NOT_ACCEPTED,
        NETWORK_FAILURE,
        REATTACH_REQUIRED,
        FEATURE_NOT_SUPPORTED,
        TFT_SEMANTIC_ERROR,
        TFT_SYNTAX_ERROR,
        UNKNOWN_PDP_CONTEXT,
        FILTER_SEMANTIC_ERROR,
        FILTER_SYNTAX_ERROR,
        PDP_WITHOUT_ACTIVE_TFT,
        IPV4_ONLY_ALLOWED,
        IPV6_ONLY_ALLOWED,
        SINGLE_ADDRESS_BEARER_ONLY,
        ESM_INFO_NOT_RECEIVED,
        PDN_CONNECTION_DOES_NOT_EXIST,
        MULTIPLE_CONNECTION_TO_SAME_PDN_NOT_ALLOWED,
        INVALID_TRANSACTION_ID,
        MESSAGE_INCORRECT_SEMANTIC,
        INVALID_MANDATORY_INFO,
        MESSAGE_TYPE_UNSUPPORTED,
        MESSAGE_TYPE_NONCOMPATIBLE_STATE,
        UNKNOWN_INFO_ELEMENT,
        CONDITIONAL_IE_ERROR,
        MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
        PROTOCOL_ERROR,
        APN_TYPE_CONFLICT,
        INVALID_PROXY_CALL_SESSION_CONTROL_FUNCTION_ADDRESS,
        INTERNAL_CALL_PREEMPTED_BY_HIGH_PRIORITY_APN,
        EMM_ACCESS_BARRED,
        EMERGENCY_INTERFACE_ONLY,
        INTERFACE_MISMATCH,
        COMPANION_INTERFACE_IN_USE,
        IP_ADDRESS_MISMATCH,
        INTERFACE_AND_POLICY_FAMILY_MISMATCH,
        EMM_ACCESS_BARRED_INFINITE_RETRY,
        AUTHENTICATION_FAILURE_ON_EMERGENCY_CALL,
        INVALID_DNS_ADDRESS,
        INVALID_PROXY_CALL_SESSION_CONTROL_FUNCTION_DNS_ADDRESS,
        TEST_LOOPBACK_MODE_A_OR_B_ENABLED,
        EMM_ACCESS_BARRED_EAB,
        CALL_PREEMPTED_BY_EMERGENCY_APN,
        UE_INIT_DETACH_OR_DISCONNECT,
    }
    export namespace WdsVerboseCallEndReasonCm {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonCm>;
    }
    enum WdsVerboseCallEndReasonCm {
        CDMA_LOCK,
        INTERCEPT,
        REORDER,
        RELEASE_SO_REJECT,
        INCOMING_CALL,
        ALERT_STOP,
        ACTIVATION,
        MAX_ACCESS_PROBES,
        CCS_NOT_SUPPORTED_BY_BS,
        NO_RESPONSE_FROM_BS,
        REJECTED_BY_BS,
        INCOMPATIBLE,
        ALREADY_IN_TC,
        USER_CALL_ORIGINATED_DURING_GPS,
        USER_CALL_ORIGINATED_DURING_SMS,
        NO_CDMA_SERVICE,
        MC_ABORT,
        PSIST_NG,
        UIM_NOT_PRESENT,
        RETRY_ORDER,
        ACCESS_BLOCK,
        ACCESS_BLOCK_ALL,
        IS707B_MAX_ACCESS_PROBES,
        THERMAL_EMERGENCY,
        CALL_ORIGINATION_THROTTLED,
        USER_CALL_ORIGINATED,
        CONFERENCE_FAILED,
        INCOMING_REJECTED,
        NO_GATEWAY_SERVICE,
        NO_GPRS_CONTEXT,
        ILLEGAL_MS,
        ILLEGAL_ME,
        GPRS_AND_NON_GPRS_SERVICES_NOT_ALLOWED,
        GPRS_SERVICES_NOT_ALLOWED,
        MS_IDENTITY_NOT_DERIVED_BY_THE_NETWORK,
        IMPLICITLY_DETACHED,
        PLMN_NOT_ALLOWED,
        LA_NOT_ALLOWED,
        GPRS_SERVICES_NOT_ALLOWED_IN_PLMN,
        PDP_DUPLICATE,
        UE_RAT_CHANGE,
        CONGESTION,
        NO_PDP_CONTEXT_ACTIVATED,
        ACCESS_CLASS_DSAC_REJECTION,
        PDP_ACTIVATE_MAX_RETRY_FAILED,
        RAB_FAILURE,
        EPS_SERVICE_NOT_ALLOWED,
        TRACKING_AREA_NOT_ALLOWED,
        ROAMING_NOT_ALLOWED_IN_TRACKING_AREA,
        NO_SUITABLE_CELLS_IN_TRACKING_AREA,
        NOT_AUTHORIZED_CLOSED_SUBSCRIBER_GROUP,
        ESM_UNKNOWN_EPS_BEARER_CONTEXT,
        DRB_RELEASED_AT_RRC,
        NAS_SIGNAL_CONNECTION_RELEASED,
        EMM_DETACHED,
        EMM_ATTACH_FAILED,
        EMM_ATTACH_STARTED,
        LTE_NAS_SERVICE_REQUEST_FAILED,
        ESM_ACTIVE_DEDICATED_BEARER_REACTIVATED_BY_NW,
        ESM_LOWER_LAYER_FAILURE,
        ESM_SYNC_UP_WITH_NW,
        ESM_NW_ACTIVATED_DEDICATED_BEARER_WITH_ID_OF_DEFAULT_BEARER,
        ESM_BAD_OTA_MESSAGE,
        ESM_DS_REJECTED_CALL,
        ESM_CONTEXT_TRANSFERRED_DUE_TO_IRAT,
        DS_EXPLICIT_DEACT,
        ESM_LOCAL_CAUSE_NONE,
        LTE_NAS_SERVICE_REQUEST_FAILED_NO_THROTTLE,
        ACL_FAILURE,
        LTE_NAS_SERVICE_REQUEST_FAILED_DS_DISALLOW,
        EMM_T3417_EXPIRED,
        EMM_T3417_EXT_EXPIRED,
        LRRC_UL_DATA_CONFIRMATION_FAILURE_TXN,
        LRRC_UL_DATA_CONFIRMATION_FAILURE_HANDOVER,
        LRRC_UL_DATA_CONFIRMATION_FAILURE_CONN_REL,
        LRRC_UL_DATA_CONFIRMATION_FAILURE_RLF,
        LRRC_UL_DATA_CONFIRMATION_FAILURE_CTRL_NOT_CONN,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ABORTED,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ACCESS_BARRED,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CELL_RESELECTION,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CONFIG_FAILURE,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_TIMER_EXPIRED,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_LINK_FAILURE,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_NOT_CAMPED,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_SI_FAILURE,
        LRRC_CONNECTION_ESTABLISHMENT_FAILURE_REJECTED,
        LRRC_CONNECTION_RELEASE_NORMAL,
        LRRC_CONNECTION_RELEASE_RLF,
        LRRC_CONNECTION_RELEASE_CRE_FAILURE,
        LRRC_CONNECTION_RELEASE_OOS_DURING_CRE,
        LRRC_CONNECTION_RELEASE_ABORTED,
        LRRC_CONNECTION_RELEASE_SIB_READ_ERROR,
        DETACH_WITH_REATTACH_LTE_NW_DETACH,
        DETACH_WITHOUT_REATTACH_LTE_NW_DETACH,
        ESM_PROC_TIMEOUT,
        INVALID_CONNECTION_ID,
        INVALID_NSAPI,
        INVALID_PRI_NSAPI,
        INVALID_FIELD,
        RADIO_ACCESS_BEARER_SETUP_FAILURE,
        PDP_ESTABLISH_MAX_TIMEOUT,
        PDP_MODIFY_MAX_TIMEOUT,
        PDP_INACTIVE_MAX_TIMEOUT,
        PDP_LOWERLAYER_ERROR,
        PPD_UNKNOWN_REASON,
        PDP_MODIFY_COLLISION,
        PDP_MBMS_REQUEST_COLLISION,
        MBMS_DUPLICATE,
        SM_PS_DETACHED,
        SM_NO_RADIO_AVAILABLE,
        SM_ABORT_SERVICE_NOT_AVAILABLE,
        MESSAGE_EXCEEDS_MAX_L2_LIMIT,
        SM_NAS_SERVICE_REQUEST_FAILURE,
        RRC_CONNECTION_ESTABLISHMENT_FAILURE_REQUEST_ERROR,
        RRC_CONNECTION_ESTABLISHMENT_FAILURE_TAI_CHANGE,
        RRC_CONNECTION_ESTABLISHMENT_FAILURE_RF_UNAVAILABLE,
        RRC_CONNECTION_RELEASE_ABORTED_INTER_RAT_SUCCESS,
        RRC_CONNECTION_RELEASE_RLF_SEC_NOT_ACTIVE,
        RRC_CONNECTION_RELEASE_INTER_RAT_TO_LTE_ABORTED,
        RRC_CONNECTION_RELEASE_INTER_RAT_FROM_LTE_TO_GERAN_CCO_SUCCESS,
        RRC_CONNECTION_RELEASE_INTER_RAT_FROM_LTE_TO_GERAN_CCO_ABORTED,
        IMSI_UNKNOWN_IN_HOME_SUBSCRIBER_SERVER,
        IMEI_NOT_ACCEPTED,
        EPS_SERVICES_AND_NON_EPS_SERVICES_NOT_ALLOWED,
        EPS_SERVICES_NOT_ALLOWED_IN_PLMN,
        MSC_TEMPORARILY_NOT_REACHABLE,
        CS_DOMAIN_NOT_AVAILABLE,
        ESM_FAILURE,
        MAC_FAILURE,
        SYNCHRONIZATION_FAILURE,
        UE_SECURITY_CAPABILITIES_MISMATCH,
        SECURITY_MODE_REJECT_UNSPECIFIED,
        NON_EPS_AUTH_UNACCEPTABLE,
        CS_FALLBACK_CALL_ESTABLISHMENT_NOT_ALLOWED,
        NO_EPS_BEARER_CONTEXT_ACTIVATED,
        EMM_INVALID_STATE,
        NAS_LAYER_FAILURE,
        MULTI_PDN_NOT_ALLOWED,
        EMBMS_NOT_ENABLED,
        PENDING_REDIAL_CALL_CLEANUP,
        EMBMS_REGULAR_DEACTIVATION,
        TLB_REGULAR_DEACTIVATION,
        LOWER_LAYER_REGISTRATION_FAILURE,
        DETACH_EPS_SERVICES_NOT_ALLOWED,
        SM_INTERNAL_PDP_DEACTIVATION,
        CONNECTION_DENY_GENERAL_OR_BUSY,
        CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
        HDR_CHANGE,
        HDR_EXIT,
        HDR_NO_SESSION,
        HDR_ORIGINATION_DURING_GPS_FIX,
        HDR_CONNECTION_SETUP_TIMEOUT,
        HDR_RELEASED_BY_CM,
        HDR_COLLOCATED_ACQUISITION_FAILED,
        OTASP_COMMIT_IN_PROGRESS,
        HDR_NO_HYBRID_SERVICE,
        HDR_NO_LOCK_GRANTED,
        HOLD_OTHER_IN_PROGRESS,
        HDR_FADE,
        HDR_ACCESS_FAILURE,
        UNSUPPORTED_1X_PREV,
        CLIENT_END,
        NO_SERVICE,
        FADE,
        RELEASE_NORMAL,
        ACCESS_ATTEMPT_IN_PROGRESS,
        ACCESS_FAILURE,
        REDIRECTION_OR_HANDOFF,
        OFFLINE,
        EMERGENCY_MODE,
        PHONE_IN_USE,
        INVALID_MODE,
        INVALID_SIM_STATE,
        NO_COLLOCATED_HDR,
        CALL_CONTROL_REJECTED,
        EMM_DETACHED_PSM,
        DUAL_SWITCH,
        CALL_MANAGER,
        INVALID_CLASS3_APN,
        MPLMN_IN_PROGRESS,
    }
    export namespace WdsVerboseCallEndReasonEhrpd {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonEhrpd>;
    }
    enum WdsVerboseCallEndReasonEhrpd {
        SUBSCRIPTION_LIMITED_TO_IPV4,
        SUBSCRIPTION_LIMITED_TO_IPV6,
        VSNCP_TIMEOUT,
        VSNCP_FAILURE,
        VSNCP_3GPP2_GENERAL_ERROR,
        VSNCP_3GPP2_UNAUTHENTICATED_APN,
        VSNCP_3GPP2_PDN_LIMIT_EXCEEDED,
        VSNCP_3GPP2_NO_PDN_GATEWAY,
        VSNCP_3GPP2_PDN_GATEWAY_UNREACHABLE,
        VSNCP_3GPP2_PDN_GATEWAY_REJECTED,
        VSNCP_3GPP2_INSUFFICIENT_PARAMETERS,
        VSNCP_3GPP2_RESOURCE_UNAVAILABLE,
        VSNCP_3GPP2_ADMINISTRATIVELY_PROHIBITED,
        VSNCP_3GPP2_PDN_ID_IN_USE,
        VSNCP_3GPP2_SUBSCRIPTION_LIMITATION,
        VSNCP_3GPP2_PDN_EXISTS_FOR_THIS_APN,
    }
    export namespace WdsVerboseCallEndReasonInternal {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonInternal>;
    }
    enum WdsVerboseCallEndReasonInternal {
        ERROR,
        CALL_ENDED,
        UNKNOWN_INTERNAL_CAUSE,
        UNKNOWN_CAUSE,
        CLOSE_IN_PROGRESS,
        NETWORK_INITIATED_TERMINATION,
        APP_PREEMPTED,
        PDN_IPV4_CALL_DISALLOWED,
        PDN_IPV4_CALL_THROTTLED,
        PDN_IPV6_CALL_DISALLOWED,
        PDN_IPV6_CALL_THROTTLED,
        MODEM_RESTART,
        PDP_PPP_NOT_SUPPORTED,
        UNPREFERRED_RAT,
        PHYSICAL_LINK_CLOSE_IN_PROGRESS,
        APN_PENDING_HANDOVER,
        PROFILE_BEARER_INCOMPATIBLE,
        MMGDSI_CARD_EVENT,
        LPM_OR_POWER_DOWN,
        APN_DISABLED,
        MPIT_EXPIRED,
        IPV6_ADDRESS_TRANSFER_FAILED,
        TRAT_SWAP_FAILED,
        EHRPD_TO_HRPD_FALLBACK,
        MANDATORY_APN_DISABLED,
        MIP_CONFIG_FAILURE,
        PDN_INACTIVITY_TIMER_EXPIRED,
        MAX_V4_CONNECTIONS,
        MAX_V6_CONNECTIONS,
        APN_MISMATCH,
        IP_VERSION_MISMATCH,
        DUN_CALL_DISALLOWED,
        INVALID_PROFILE,
        EPC_NONEPC_TRANSITION,
        INVALID_PROFILE_ID,
        CALL_ALREADY_PRESENT,
        INTERFACE_IN_USE,
        IP_PDP_MISMATCH,
        APN_DISALLOWED_ON_ROAMING,
        APN_PARAMETER_CHANGE,
        INTERFACE_IN_USE_CONFIG_MATCH,
        NULL_APN_DISALLOWED,
        THERMAL_MITIGATION,
        SUBS_ID_MISMATCH,
        DATA_SETTINGS_DISABLED,
        DATA_ROAMING_SETTINGS_DISABLED,
        APN_FORMAT_INVALID,
        DDS_CALL_ABORT,
        VALIDATION_FAILURE,
        PROFILES_NOT_COMPATIBLE,
        NULL_RESOLVED_APN_NO_MATCH,
        INVALID_APN_NAME,
        DDS_SWITCH_IN_PROGRESS,
        CALL_DISALLOWED_IN_ROAMING,
        MO_EXCEPTIONAL_NOT_SUPPORTED,
        NON_IP_NOT_SUPPORTED,
        ERROR_PDN_NON_IP_CALL_THROTTLED,
        ERROR_PDN_NON_IP_CALL_DISALLOWED,
        ERROR_NON_IP_TYPE_MISMATCH,
        ERROR_MAX_NB_PDN_REACHED,
        INVALID_APN,
        SLICE_NOT_ALLOWED,
        ROUTING_FAIL,
        ROUTING_CHANGED,
        LOCAL_AREA_DATA_NETWORK_DATA_NETWORK_NAME_NOT_AVAILABLE,
        APN_TYPE_MISMATCH,
    }
    export namespace WdsVerboseCallEndReasonIpv6 {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonIpv6>;
    }
    enum WdsVerboseCallEndReasonIpv6 {
        PREFIX_UNAVAILABLE,
        HRPD_IPV6_DISABLED,
        DISABLED,
    }
    export namespace WdsVerboseCallEndReasonMip {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonMip>;
    }
    enum WdsVerboseCallEndReasonMip {
        ERROR_REASON_UNKNOWN,
        FA_ERROR_REASON_UNSPECIFIED,
        FA_ERROR_ADMINISTRATIVELY_PROHIBITED,
        FA_ERROR_INSUFFICIENT_RESOURCES,
        FA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
        FA_ERROR_HA_AUTHENTICATION_FAILURE,
        FA_ERROR_REQUESTED_LIFETIME_TOO_LONG,
        FA_ERROR_MALFORMED_REQUEST,
        FA_ERROR_MALFORMED_REPLY,
        FA_ERROR_ENCAPSULATION_UNAVAILABLE,
        FA_ERROR_VJHC_UNAVAILABLE,
        FA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
        FA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
        FA_ERROR_DELIVERY_STYLE_NOT_SUPPORTED,
        FA_ERROR_MISSING_NAI,
        FA_ERROR_MISSING_HA,
        FA_ERROR_MISSING_HOME_ADDRESS,
        FA_ERROR_UNKNOWN_CHALLENGE,
        FA_ERROR_MISSING_CHALLENGE,
        FA_ERROR_STALE_CHALLENGE,
        HA_ERROR_REASON_UNSPECIFIED,
        HA_ERROR_ADMINISTRATIVELY_PROHIBITED,
        HA_ERROR_INSUFFICIENT_RESOURCES,
        HA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
        HA_ERROR_FA_AUTHENTICATION_FAILURE,
        HA_ERROR_REGISTRATION_ID_MISMATCH,
        HA_ERROR_MALFORMED_REQUEST,
        HA_ERROR_UNKNOWN_HA_ADDRESS,
        HA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
        HA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
        HA_ERROR_ENCAPSULATION_UNAVAILABLE,
    }
    export namespace WdsVerboseCallEndReasonPpp {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonPpp>;
    }
    enum WdsVerboseCallEndReasonPpp {
        UNKNOWN,
        TIMEOUT,
        AUTHENTICATION_FAILURE,
        OPTION_MISMATCH,
        PAP_FAILURE,
        CHAP_FAILURE,
        CLOSE_IN_PROGRESS,
    }
    export namespace WdsVerboseCallEndReasonType {
        export const $gtype: GObject.GType<WdsVerboseCallEndReasonType>;
    }
    enum WdsVerboseCallEndReasonType {
        MIP,
        INTERNAL,
        CM,
        "3GPP",
        PPP,
        EHRPD,
        IPV6,
    }
    export namespace WmsAckFailureCause {
        export const $gtype: GObject.GType<WmsAckFailureCause>;
    }
    enum WmsAckFailureCause {
        NO_NETWORK_RESPONSE,
        NETWORK_RELEASED_LINK,
        NOT_SENT,
    }
    export namespace WmsAckIndicator {
        export const $gtype: GObject.GType<WmsAckIndicator>;
    }
    enum WmsAckIndicator {
        SEND,
        DO_NOT_SEND,
    }
    export namespace WmsCdmaCauseCode {
        export const $gtype: GObject.GType<WmsCdmaCauseCode>;
    }
    enum WmsCdmaCauseCode {
        NETWORK_ADDRESS_VACANT,
        NETWORK_ADDRESS_TRANSLATION_FAILURE,
        NETWORK_RESOURCE_SHORTAGE,
        NETWORK_FAILURE,
        NETWORK_INVALID_TELESERVICE_ID,
        NETWORK_OTHER,
        DESTINATION_NO_PAGE_RESPONSE,
        DESTINATION_BUSY,
        DESTINATION_NO_ACK,
        DESTINATION_RESOURCE_SHORTAGE,
        DESTINATION_SMS_DELIVERY_POSTPONED,
        DESTINATION_OUT_OF_SERVICE,
        DESTINATION_NOT_AT_ADDRESS,
        DESTINATION_OTHER,
        RADIO_INTERFACE_RESOURCE_SHORTAGE,
        RADIO_INTERFACE_INCOMPATIBILITY,
        RADIO_INTERFACE_OTHER,
        GENERAL_ENCODING,
        GENERAL_SMS_ORIGIN_DENIED,
        GENERAL_SMS_DESTINATION_DENIED,
        GENERAL_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
        GENERAL_SMS_NOT_SUPPORTED,
        GENERAL_MISSING_EXPECTED_PARAMETER,
        GENERAL_MISSING_MANDATORY_PARAMETER,
        GENERAL_UNRECOGNIZED_PARAMETER_VALUE,
        GENERAL_UNEXPECTED_PARAMETER_VALUE,
        GENERAL_USER_DATA_SIZE_ERROR,
        GENERAL_OTHER,
    }
    export namespace WmsCdmaErrorClass {
        export const $gtype: GObject.GType<WmsCdmaErrorClass>;
    }
    enum WmsCdmaErrorClass {
        TEMPORARY,
        PERMANENT,
        TEMPORARY_DEVICE,
        PERMANENT_DEVICE,
    }
    class WmsCdmaServiceOption {
        static $gtype: GObject.GType<WmsCdmaServiceOption>;
        static AUTO: number;
        static "6": number;
        static "14": number;
    }
    export namespace WmsGsmUmtsRpCause {
        export const $gtype: GObject.GType<WmsGsmUmtsRpCause>;
    }
    enum WmsGsmUmtsRpCause {
        UNASSIGNED_NUMBER,
        OPERATOR_DETERMINED_BARRING,
        CALL_BARRED,
        RESERVED,
        SMS_TRANSFER_REJECTED,
        MEMORY_CAPACITY_EXCEEDED,
        DESTINATION_OUT_OF_ORDER,
        UNIDENTIFIED_SUBSCRIBER,
        FACILITY_REJECTED,
        UNKNOWN_SUBSCRIBER,
        NETWORK_OUF_OF_ORDER,
        TEMPORARY_FAILURE,
        CONGESTION,
        RESOURCES_UNAVAILABLE,
        FACILITY_NOT_SUBSCRIBED,
        FACILITY_NOT_IMPLEMENTED,
        INVALID_SMS_TRANSFER_REFERENCE_VALUE,
        SEMANTICALLY_INCORRECT_MESSAGE,
        INVALID_MANDATORY_INFO,
        MESSAGE_TYPE_NOT_IMPLEMENTED,
        MESSAGE_NOT_COMPATIBLE_WITH_SMS,
        INFORMATION_ELEMENT_NOT_IMPLEMENTED,
        PROTOCOL_ERROR,
        INTERWORKING,
    }
    export namespace WmsGsmUmtsTpCause {
        export const $gtype: GObject.GType<WmsGsmUmtsTpCause>;
    }
    enum WmsGsmUmtsTpCause {
        TELE_INTERWORKING_NOT_SUPPORTED,
        SHORT_MESSAGE_TYPE_0_NOT_SUPPORTED,
        SHORT_MESSAGE_CANNOT_BE_REPLACED,
        UNSPECIFIED_PID_ERROR,
        DCS_NOT_SUPPORTED,
        MESSAGE_CLASS_NOT_SUPPORTED,
        UNSPECIFIED_DCS_ERROR,
        COMMAND_CANNOT_BE_ACTIONED,
        COMMAND_UNSUPPORTED,
        UNSPECIFIED_COMMAND_ERROR,
        TPDU_NOT_SUPPORTED,
        SC_BUSY,
        NO_SC_SUBSCRIPTION,
        SC_SYSTEM_FAILURE,
        INVALID_SME_ADDRESS,
        DESTINATION_SME_BARRED,
        SM_REJECTED_OR_DUPLICATE,
        VPF_NOT_SUPPORTED,
        VP_NOT_SUPPORTED,
        SIM_SMS_STORAGE_FULL,
        NO_SMS_STORAGE_CAPABILITY_IN_SIM,
        MS_ERROR,
        MEMORY_CAPACITY_EXCEEDED,
        SIM_APPLICATION_TOOLKIT_BUSY,
        SIM_DATA_DOWNLOAD_ERROR,
        UNSPECIFIED_ERROR,
    }
    class WmsMessageClass {
        static $gtype: GObject.GType<WmsMessageClass>;
        static "0": number;
        static "1": number;
        static "2": number;
        static "3": number;
        static NONE: number;
        static CDMA: number;
    }
    export namespace WmsMessageDeliveryFailureType {
        export const $gtype: GObject.GType<WmsMessageDeliveryFailureType>;
    }
    enum WmsMessageDeliveryFailureType {
        TEMPORARY,
        PERMANENT,
    }
    export namespace WmsMessageFormat {
        export const $gtype: GObject.GType<WmsMessageFormat>;
    }
    enum WmsMessageFormat {
        CDMA,
        GSM_WCDMA_POINT_TO_POINT,
        GSM_WCDMA_BROADCAST,
        MWI,
    }
    export namespace WmsMessageMode {
        export const $gtype: GObject.GType<WmsMessageMode>;
    }
    enum WmsMessageMode {
        CDMA,
        GSM_WCDMA,
    }
    export namespace WmsMessageProtocol {
        export const $gtype: GObject.GType<WmsMessageProtocol>;
    }
    enum WmsMessageProtocol {
        CDMA,
        WCDMA,
    }
    export namespace WmsMessageTagType {
        export const $gtype: GObject.GType<WmsMessageTagType>;
    }
    enum WmsMessageTagType {
        MT_READ,
        MT_NOT_READ,
        MO_SENT,
        MO_NOT_SENT,
    }
    export namespace WmsMessageType {
        export const $gtype: GObject.GType<WmsMessageType>;
    }
    enum WmsMessageType {
        POINT,
    }
    export namespace WmsNWRegistration {
        export const $gtype: GObject.GType<WmsNWRegistration>;
    }
    enum WmsNWRegistration {
        NO_SERVICE,
        IN_PROCESS,
        FAILURE,
        LIMITED_SERVICE,
        FULL_SERVICE,
    }
    export namespace WmsNotificationType {
        export const $gtype: GObject.GType<WmsNotificationType>;
    }
    enum WmsNotificationType {
        PRIMARY,
        SECONDARY_GSM,
        SECONDARY_UMTS,
    }
    export namespace WmsReceiptAction {
        export const $gtype: GObject.GType<WmsReceiptAction>;
    }
    enum WmsReceiptAction {
        DISCARD,
        STORE_AND_NOTIFY,
        TRANSFER_ONLY,
        TRANSFER_AND_ACK,
        UNKNOWN,
    }
    export namespace WmsStorageType {
        export const $gtype: GObject.GType<WmsStorageType>;
    }
    enum WmsStorageType {
        UIM,
        NV,
        NONE,
    }
    export namespace WmsTransferIndication {
        export const $gtype: GObject.GType<WmsTransferIndication>;
    }
    enum WmsTransferIndication {
        CLIENT,
    }
    const CID_BROADCAST: number;
    const CID_NONE: number;
    const CLIENT_CID: string;
    const CLIENT_DEVICE: string;
    const CLIENT_SERVICE: string;
    const CLIENT_VALID: string;
    const CLIENT_VERSION_MAJOR: string;
    const CLIENT_VERSION_MINOR: string;
    const DBUS_ERROR_PREFIX: string;
    const DEVICE_CONSECUTIVE_TIMEOUTS: string;
    const DEVICE_FILE: string;
    const DEVICE_MUX_ID_MAX: number;
    const DEVICE_MUX_ID_MIN: number;
    const DEVICE_MUX_ID_UNBOUND: number;
    const DEVICE_NODE: string;
    const DEVICE_NO_FILE_CHECK: string;
    const DEVICE_PROXY_PATH: string;
    const DEVICE_SIGNAL_INDICATION: string;
    const DEVICE_SIGNAL_REMOVED: string;
    const DEVICE_WWAN_IFACE: string;
    const MESSAGE_QMUX_MARKER: number;
    const MESSAGE_QRTR_MARKER: number;
    const MESSAGE_VENDOR_GENERIC: number;
    const PROXY_N_CLIENTS: string;
    const PROXY_SOCKET_PATH: string;
    const WDS_RATE_UNAVAILABLE: number;
    function core_error_get_string(val: CoreError): string;
    function core_error_quark(): GLib.Quark;
    function data_endpoint_type_get_string(val: DataEndpointType): string;
    function device_add_link_flags_build_string_from_mask(mask: DeviceAddLinkFlags): string;
    function device_expected_data_format_get_string(val: DeviceExpectedDataFormat): string;
    function device_open_flags_build_string_from_mask(mask: DeviceOpenFlags): string;
    function device_release_client_flags_build_string_from_mask(mask: DeviceReleaseClientFlags): string;
    function dms_activation_state_get_string(val: DmsActivationState): string;
    function dms_band_capability_build_string_from_mask(mask: DmsBandCapability): string;
    function dms_boot_image_download_mode_get_string(val: DmsBootImageDownloadMode): string;
    function dms_data_service_capability_get_string(val: DmsDataServiceCapability): string;
    function dms_firmware_image_type_get_string(val: DmsFirmwareImageType): string;
    function dms_foxconn_device_mode_get_string(val: DmsFoxconnDeviceMode): string;
    function dms_foxconn_firmware_version_type_get_string(val: DmsFoxconnFirmwareVersionType): string;
    function dms_hp_device_mode_get_string(val: DmsHpDeviceMode): string;
    function dms_lte_band_capability_build_string_from_mask(mask: DmsLteBandCapability): string;
    function dms_mac_type_get_string(val: DmsMacType): string;
    function dms_offline_reason_build_string_from_mask(mask: DmsOfflineReason): string;
    function dms_operating_mode_get_string(val: DmsOperatingMode): string;
    function dms_power_state_build_string_from_mask(mask: DmsPowerState): string;
    function dms_radio_interface_get_string(val: DmsRadioInterface): string;
    function dms_sim_capability_get_string(val: DmsSimCapability): string;
    function dms_swi_usb_composition_get_description(value: DmsSwiUsbComposition): string;
    function dms_swi_usb_composition_get_string(val: DmsSwiUsbComposition): string;
    function dms_time_reference_type_get_string(val: DmsTimeReferenceType): string;
    function dms_time_source_get_string(val: DmsTimeSource): string;
    function dms_uim_facility_get_string(val: DmsUimFacility): string;
    function dms_uim_facility_state_get_string(val: DmsUimFacilityState): string;
    function dms_uim_pin_id_get_string(val: DmsUimPinId): string;
    function dms_uim_pin_status_get_string(val: DmsUimPinStatus): string;
    function dms_uim_state_get_string(val: DmsUimState): string;
    function dsd_apn_type_get_string(val: DsdApnType): string;
    function dsd_apn_type_preference_build_string_from_mask(mask: DsdApnTypePreference): string;
    function dsd_data_system_network_type_get_string(val: DsdDataSystemNetworkType): string;
    function dsd_radio_access_technology_get_string(val: DsdRadioAccessTechnology): string;
    function dsd_so_mask_build_string_from_mask(mask: DsdSoMask): string;
    function endian_get_string(val: Endian): string;
    function fox_firmware_version_type_get_string(val: FoxFirmwareVersionType): string;
    function gas_firmware_auto_sim_mode_get_string(val: GasFirmwareAutoSimMode): string;
    function gas_firmware_listing_mode_get_string(val: GasFirmwareListingMode): string;
    function gas_usb_composition_endpoint_type_get_string(val: GasUsbCompositionEndpointType): string;
    function ims_call_mode_preference_get_string(val: ImsCallModePreference): string;
    function ims_dcm_apn_type_get_string(val: ImsDcmApnType): string;
    function ims_dcm_instance_id_get_string(val: ImsDcmInstanceId): string;
    function ims_dcm_ip_familiy_get_string(val: ImsDcmIpFamiliy): string;
    function ims_dcm_rat_type_get_string(val: ImsDcmRatType): string;
    function imsa_ims_registration_status_get_string(val: ImsaImsRegistrationStatus): string;
    function imsa_registration_technology_get_string(val: ImsaRegistrationTechnology): string;
    function imsa_service_status_get_string(val: ImsaServiceStatus): string;
    function imsp_enabler_state_get_string(val: ImspEnablerState): string;
    function indication_atr_received_indication_parse(message: Message): IndicationAtrReceivedOutput;
    function indication_dms_event_report_indication_parse(message: Message): IndicationDmsEventReportOutput;
    function indication_dsd_system_status_indication_parse(message: Message): IndicationDsdSystemStatusOutput;
    function indication_ims_ims_services_enabled_setting_indication_parse(message: Message): IndicationImsImsServicesEnabledSettingOutput;
    function indication_imsa_ims_registration_status_changed_indication_parse(message: Message): IndicationImsaImsRegistrationStatusChangedOutput;
    function indication_imsa_ims_services_status_changed_indication_parse(message: Message): IndicationImsaImsServicesStatusChangedOutput;
    function indication_imsdcm_pdp_activate_indication_parse(message: Message): IndicationImsdcmPdpActivateOutput;
    function indication_loc_delete_assistance_data_indication_parse(message: Message): IndicationLocDeleteAssistanceDataOutput;
    function indication_loc_engine_state_indication_parse(message: Message): IndicationLocEngineStateOutput;
    function indication_loc_fix_recurrence_type_indication_parse(message: Message): IndicationLocFixRecurrenceTypeOutput;
    function indication_loc_get_engine_lock_indication_parse(message: Message): IndicationLocGetEngineLockOutput;
    function indication_loc_get_nmea_types_indication_parse(message: Message): IndicationLocGetNmeaTypesOutput;
    function indication_loc_get_operation_mode_indication_parse(message: Message): IndicationLocGetOperationModeOutput;
    function indication_loc_get_predicted_orbits_data_source_indication_parse(message: Message): IndicationLocGetPredictedOrbitsDataSourceOutput;
    function indication_loc_get_predicted_orbits_data_validity_indication_parse(message: Message): IndicationLocGetPredictedOrbitsDataValidityOutput;
    function indication_loc_get_server_indication_parse(message: Message): IndicationLocGetServerOutput;
    function indication_loc_gnss_sv_info_indication_parse(message: Message): IndicationLocGnssSvInfoOutput;
    function indication_loc_inject_position_indication_parse(message: Message): IndicationLocInjectPositionOutput;
    function indication_loc_inject_position_request_indication_parse(message: Message): IndicationLocInjectPositionRequestOutput;
    function indication_loc_inject_predicted_orbits_data_indication_parse(message: Message): IndicationLocInjectPredictedOrbitsDataOutput;
    function indication_loc_inject_predicted_orbits_request_indication_parse(message: Message): IndicationLocInjectPredictedOrbitsRequestOutput;
    function indication_loc_inject_time_request_indication_parse(message: Message): IndicationLocInjectTimeRequestOutput;
    function indication_loc_inject_utc_time_indication_parse(message: Message): IndicationLocInjectUtcTimeOutput;
    function indication_loc_inject_xtra_data_indication_parse(message: Message): IndicationLocInjectXtraDataOutput;
    function indication_loc_nmea_indication_parse(message: Message): IndicationLocNmeaOutput;
    function indication_loc_position_report_indication_parse(message: Message): IndicationLocPositionReportOutput;
    function indication_loc_set_engine_lock_indication_parse(message: Message): IndicationLocSetEngineLockOutput;
    function indication_loc_set_nmea_types_indication_parse(message: Message): IndicationLocSetNmeaTypesOutput;
    function indication_loc_set_operation_mode_indication_parse(message: Message): IndicationLocSetOperationModeOutput;
    function indication_loc_set_server_indication_parse(message: Message): IndicationLocSetServerOutput;
    function indication_nas_event_report_indication_parse(message: Message): IndicationNasEventReportOutput;
    function indication_nas_incremental_network_scan_indication_parse(message: Message): IndicationNasIncrementalNetworkScanOutput;
    function indication_nas_network_reject_indication_parse(message: Message): IndicationNasNetworkRejectOutput;
    function indication_nas_network_time_indication_parse(message: Message): IndicationNasNetworkTimeOutput;
    function indication_nas_operator_name_indication_parse(message: Message): IndicationNasOperatorNameOutput;
    function indication_nas_serving_system_indication_parse(message: Message): IndicationNasServingSystemOutput;
    function indication_nas_signal_info_indication_parse(message: Message): IndicationNasSignalInfoOutput;
    function indication_nas_system_info_indication_parse(message: Message): IndicationNasSystemInfoOutput;
    function indication_oma_event_report_indication_parse(message: Message): IndicationOmaEventReportOutput;
    function indication_pdc_activate_config_indication_parse(message: Message): IndicationPdcActivateConfigOutput;
    function indication_pdc_deactivate_config_indication_parse(message: Message): IndicationPdcDeactivateConfigOutput;
    function indication_pdc_get_config_info_indication_parse(message: Message): IndicationPdcGetConfigInfoOutput;
    function indication_pdc_get_selected_config_indication_parse(message: Message): IndicationPdcGetSelectedConfigOutput;
    function indication_pdc_list_configs_indication_parse(message: Message): IndicationPdcListConfigsOutput;
    function indication_pdc_load_config_indication_parse(message: Message): IndicationPdcLoadConfigOutput;
    function indication_pdc_refresh_indication_parse(message: Message): IndicationPdcRefreshOutput;
    function indication_pdc_set_selected_config_indication_parse(message: Message): IndicationPdcSetSelectedConfigOutput;
    function indication_pds_event_report_indication_parse(message: Message): IndicationPdsEventReportOutput;
    function indication_qos_flow_status_indication_parse(message: Message): IndicationQosFlowStatusOutput;
    function indication_qos_network_status_indication_parse(message: Message): IndicationQosNetworkStatusOutput;
    function indication_ssc_report_large_indication_parse(message: Message): IndicationSscReportLargeOutput;
    function indication_ssc_report_small_indication_parse(message: Message): IndicationSscReportSmallOutput;
    function indication_uim_card_status_indication_parse(message: Message): IndicationUimCardStatusOutput;
    function indication_uim_refresh_indication_parse(message: Message): IndicationUimRefreshOutput;
    function indication_uim_slot_status_indication_parse(message: Message): IndicationUimSlotStatusOutput;
    function indication_voice_all_call_status_indication_parse(message: Message): IndicationVoiceAllCallStatusOutput;
    function indication_voice_originate_ussd_no_wait_indication_parse(message: Message): IndicationVoiceOriginateUssdNoWaitOutput;
    function indication_voice_supplementary_service_indication_parse(message: Message): IndicationVoiceSupplementaryServiceOutput;
    function indication_voice_ussd_indication_parse(message: Message): IndicationVoiceUssdOutput;
    function indication_wda_loopback_configuration_indication_parse(message: Message): IndicationWdaLoopbackConfigurationOutput;
    function indication_wds_event_report_indication_parse(message: Message): IndicationWdsEventReportOutput;
    function indication_wds_extended_ip_config_indication_parse(message: Message): IndicationWdsExtendedIpConfigOutput;
    function indication_wds_packet_service_status_indication_parse(message: Message): IndicationWdsPacketServiceStatusOutput;
    function indication_wds_profile_changed_indication_parse(message: Message): IndicationWdsProfileChangedOutput;
    function indication_wds_set_lte_attach_pdn_list_indication_parse(message: Message): IndicationWdsSetLteAttachPdnListOutput;
    function indication_wms_event_report_indication_parse(message: Message): IndicationWmsEventReportOutput;
    function indication_wms_smsc_address_indication_parse(message: Message): IndicationWmsSmscAddressOutput;
    function indication_wms_transport_network_registration_status_indication_parse(message: Message): IndicationWmsTransportNetworkRegistrationStatusOutput;
    function loc_altitude_dependency_get_string(val: LocAltitudeDependency): string;
    function loc_altitude_source_get_string(val: LocAltitudeSource): string;
    function loc_altitude_uncertainty_get_string(val: LocAltitudeUncertainty): string;
    function loc_delete_cell_database_build_string_from_mask(mask: LocDeleteCellDatabase): string;
    function loc_delete_clock_info_build_string_from_mask(mask: LocDeleteClockInfo): string;
    function loc_delete_gnss_data_build_string_from_mask(mask: LocDeleteGnssData): string;
    function loc_delete_sv_info_build_string_from_mask(mask: LocDeleteSvInfo): string;
    function loc_engine_state_get_string(val: LocEngineState): string;
    function loc_event_registration_flag_build_string_from_mask(mask: LocEventRegistrationFlag): string;
    function loc_fix_recurrence_type_get_string(val: LocFixRecurrenceType): string;
    function loc_health_status_get_string(val: LocHealthStatus): string;
    function loc_indication_status_get_string(val: LocIndicationStatus): string;
    function loc_injected_orbit_file_type_get_string(val: LocInjectedOrbitFileType): string;
    function loc_injected_orbit_server_param_update_build_string_from_mask(mask: LocInjectedOrbitServerParamUpdate): string;
    function loc_injected_orbit_update_type_get_string(val: LocInjectedOrbitUpdateType): string;
    function loc_injected_time_source_get_string(val: LocInjectedTimeSource): string;
    function loc_intermediate_report_state_get_string(val: LocIntermediateReportState): string;
    function loc_lock_type_get_string(val: LocLockType): string;
    function loc_navigation_data_get_string(val: LocNavigationData): string;
    function loc_nmea_type_build_string_from_mask(mask: LocNmeaType): string;
    function loc_operation_mode_get_string(val: LocOperationMode): string;
    function loc_position_source_get_string(val: LocPositionSource): string;
    function loc_position_source_provider_get_string(val: LocPositionSourceProvider): string;
    function loc_predicted_orbits_data_format_get_string(val: LocPredictedOrbitsDataFormat): string;
    function loc_reliability_get_string(val: LocReliability): string;
    function loc_satellite_status_get_string(val: LocSatelliteStatus): string;
    function loc_satellite_valid_information_build_string_from_mask(mask: LocSatelliteValidInformation): string;
    function loc_sensor_data_usage_build_string_from_mask(mask: LocSensorDataUsage): string;
    function loc_server_address_type_build_string_from_mask(mask: LocServerAddressType): string;
    function loc_server_type_get_string(val: LocServerType): string;
    function loc_session_status_get_string(val: LocSessionStatus): string;
    function loc_system_get_string(val: LocSystem): string;
    function loc_technology_used_build_string_from_mask(mask: LocTechnologyUsed): string;
    function loc_time_source_get_string(val: LocTimeSource): string;
    function message_add_raw_tlv(self: Message, type: number, raw: number, length: bigint | number): boolean;
    function message_atr_send_response_parse(message: Message): MessageAtrSendOutput;
    function message_dms_activate_automatic_response_parse(message: Message): MessageDmsActivateAutomaticOutput;
    function message_dms_activate_manual_response_parse(message: Message): MessageDmsActivateManualOutput;
    function message_dms_delete_stored_image_response_parse(message: Message): MessageDmsDeleteStoredImageOutput;
    function message_dms_foxconn_change_device_mode_response_parse(message: Message): MessageDmsFoxconnChangeDeviceModeOutput;
    function message_dms_foxconn_get_firmware_version_response_parse(message: Message): MessageDmsFoxconnGetFirmwareVersionOutput;
    function message_dms_foxconn_set_fcc_authentication_response_parse(message: Message): MessageDmsFoxconnSetFccAuthenticationOutput;
    function message_dms_foxconn_set_fcc_authentication_v2_response_parse(message: Message): MessageDmsFoxconnSetFccAuthenticationV2Output;
    function message_dms_get_activation_state_response_parse(message: Message): MessageDmsGetActivationStateOutput;
    function message_dms_get_alt_net_config_response_parse(message: Message): MessageDmsGetAltNetConfigOutput;
    function message_dms_get_band_capabilities_response_parse(message: Message): MessageDmsGetBandCapabilitiesOutput;
    function message_dms_get_boot_image_download_mode_response_parse(message: Message): MessageDmsGetBootImageDownloadModeOutput;
    function message_dms_get_capabilities_response_parse(message: Message): MessageDmsGetCapabilitiesOutput;
    function message_dms_get_factory_sku_response_parse(message: Message): MessageDmsGetFactorySkuOutput;
    function message_dms_get_firmware_preference_response_parse(message: Message): MessageDmsGetFirmwarePreferenceOutput;
    function message_dms_get_hardware_revision_response_parse(message: Message): MessageDmsGetHardwareRevisionOutput;
    function message_dms_get_ids_response_parse(message: Message): MessageDmsGetIdsOutput;
    function message_dms_get_mac_address_response_parse(message: Message): MessageDmsGetMacAddressOutput;
    function message_dms_get_manufacturer_response_parse(message: Message): MessageDmsGetManufacturerOutput;
    function message_dms_get_model_response_parse(message: Message): MessageDmsGetModelOutput;
    function message_dms_get_msisdn_response_parse(message: Message): MessageDmsGetMsisdnOutput;
    function message_dms_get_operating_mode_response_parse(message: Message): MessageDmsGetOperatingModeOutput;
    function message_dms_get_power_state_response_parse(message: Message): MessageDmsGetPowerStateOutput;
    function message_dms_get_prl_version_response_parse(message: Message): MessageDmsGetPrlVersionOutput;
    function message_dms_get_revision_response_parse(message: Message): MessageDmsGetRevisionOutput;
    function message_dms_get_software_version_response_parse(message: Message): MessageDmsGetSoftwareVersionOutput;
    function message_dms_get_stored_image_info_response_parse(message: Message): MessageDmsGetStoredImageInfoOutput;
    function message_dms_get_supported_messages_response_parse(message: Message): MessageDmsGetSupportedMessagesOutput;
    function message_dms_get_time_response_parse(message: Message): MessageDmsGetTimeOutput;
    function message_dms_get_user_lock_state_response_parse(message: Message): MessageDmsGetUserLockStateOutput;
    function message_dms_hp_change_device_mode_response_parse(message: Message): MessageDmsHpChangeDeviceModeOutput;
    function message_dms_list_stored_images_response_parse(message: Message): MessageDmsListStoredImagesOutput;
    function message_dms_read_eri_file_response_parse(message: Message): MessageDmsReadEriFileOutput;
    function message_dms_read_user_data_response_parse(message: Message): MessageDmsReadUserDataOutput;
    function message_dms_reset_response_parse(message: Message): MessageDmsResetOutput;
    function message_dms_restore_factory_defaults_response_parse(message: Message): MessageDmsRestoreFactoryDefaultsOutput;
    function message_dms_set_alt_net_config_response_parse(message: Message): MessageDmsSetAltNetConfigOutput;
    function message_dms_set_boot_image_download_mode_response_parse(message: Message): MessageDmsSetBootImageDownloadModeOutput;
    function message_dms_set_event_report_response_parse(message: Message): MessageDmsSetEventReportOutput;
    function message_dms_set_fcc_authentication_response_parse(message: Message): MessageDmsSetFccAuthenticationOutput;
    function message_dms_set_firmware_id_response_parse(message: Message): MessageDmsSetFirmwareIdOutput;
    function message_dms_set_firmware_preference_response_parse(message: Message): MessageDmsSetFirmwarePreferenceOutput;
    function message_dms_set_operating_mode_response_parse(message: Message): MessageDmsSetOperatingModeOutput;
    function message_dms_set_service_programming_code_response_parse(message: Message): MessageDmsSetServiceProgrammingCodeOutput;
    function message_dms_set_time_response_parse(message: Message): MessageDmsSetTimeOutput;
    function message_dms_set_user_lock_code_response_parse(message: Message): MessageDmsSetUserLockCodeOutput;
    function message_dms_set_user_lock_state_response_parse(message: Message): MessageDmsSetUserLockStateOutput;
    function message_dms_swi_get_current_firmware_response_parse(message: Message): MessageDmsSwiGetCurrentFirmwareOutput;
    function message_dms_swi_get_usb_composition_response_parse(message: Message): MessageDmsSwiGetUsbCompositionOutput;
    function message_dms_swi_set_usb_composition_response_parse(message: Message): MessageDmsSwiSetUsbCompositionOutput;
    function message_dms_uim_change_pin_response_parse(message: Message): MessageDmsUimChangePinOutput;
    function message_dms_uim_get_ck_status_response_parse(message: Message): MessageDmsUimGetCkStatusOutput;
    function message_dms_uim_get_iccid_response_parse(message: Message): MessageDmsUimGetIccidOutput;
    function message_dms_uim_get_imsi_response_parse(message: Message): MessageDmsUimGetImsiOutput;
    function message_dms_uim_get_pin_status_response_parse(message: Message): MessageDmsUimGetPinStatusOutput;
    function message_dms_uim_get_state_response_parse(message: Message): MessageDmsUimGetStateOutput;
    function message_dms_uim_set_ck_protection_response_parse(message: Message): MessageDmsUimSetCkProtectionOutput;
    function message_dms_uim_set_pin_protection_response_parse(message: Message): MessageDmsUimSetPinProtectionOutput;
    function message_dms_uim_unblock_ck_response_parse(message: Message): MessageDmsUimUnblockCkOutput;
    function message_dms_uim_unblock_pin_response_parse(message: Message): MessageDmsUimUnblockPinOutput;
    function message_dms_uim_verify_pin_response_parse(message: Message): MessageDmsUimVerifyPinOutput;
    function message_dms_validate_service_programming_code_response_parse(message: Message): MessageDmsValidateServiceProgrammingCodeOutput;
    function message_dms_write_user_data_response_parse(message: Message): MessageDmsWriteUserDataOutput;
    function message_dpm_close_port_response_parse(message: Message): MessageDpmClosePortOutput;
    function message_dpm_open_port_response_parse(message: Message): MessageDpmOpenPortOutput;
    function message_dsd_get_apn_info_response_parse(message: Message): MessageDsdGetApnInfoOutput;
    function message_dsd_get_system_status_response_parse(message: Message): MessageDsdGetSystemStatusOutput;
    function message_dsd_set_apn_type_response_parse(message: Message): MessageDsdSetApnTypeOutput;
    function message_dsd_system_status_change_response_parse(message: Message): MessageDsdSystemStatusChangeOutput;
    function message_foreach_raw_tlv(self: Message, func: MessageForeachRawTlvFn): void;
    function message_fox_get_firmware_version_response_parse(message: Message): MessageFoxGetFirmwareVersionOutput;
    function message_fox_set_fcc_authentication_response_parse(message: Message): MessageFoxSetFccAuthenticationOutput;
    function message_gas_dms_get_ethernet_pdu_mac_address_response_parse(message: Message): MessageGasDmsGetEthernetPduMacAddressOutput;
    function message_gas_dms_get_firmware_auto_sim_response_parse(message: Message): MessageGasDmsGetFirmwareAutoSimOutput;
    function message_gas_dms_get_firmware_list_response_parse(message: Message): MessageGasDmsGetFirmwareListOutput;
    function message_gas_dms_get_usb_composition_response_parse(message: Message): MessageGasDmsGetUsbCompositionOutput;
    function message_gas_dms_set_active_firmware_response_parse(message: Message): MessageGasDmsSetActiveFirmwareOutput;
    function message_gas_dms_set_firmware_auto_sim_response_parse(message: Message): MessageGasDmsSetFirmwareAutoSimOutput;
    function message_gas_dms_set_usb_composition_response_parse(message: Message): MessageGasDmsSetUsbCompositionOutput;
    function message_get_client_id(self: Message): number;
    function message_get_data(self: Message): [number, number];
    function message_get_length(self: Message): number;
    function message_get_marker(self: Message): number;
    function message_get_message_id(self: Message): number;
    function message_get_printable_full(self: Message, context: MessageContext, line_prefix: string): string;
    function message_get_raw(self: Message): [number, number];
    function message_get_raw_tlv(self: Message, type: number): [number, number];
    function message_get_service(self: Message): Service;
    function message_get_tlv_printable(self: Message, line_prefix: string, type: number, raw: number, raw_length: bigint | number): string;
    function message_get_transaction_id(self: Message): number;
    function message_gms_test_get_value_response_parse(message: Message): MessageGmsTestGetValueOutput;
    function message_gms_test_set_value_response_parse(message: Message): MessageGmsTestSetValueOutput;
    function message_ims_bind_response_parse(message: Message): MessageImsBindOutput;
    function message_ims_get_ims_services_enabled_setting_response_parse(message: Message): MessageImsGetImsServicesEnabledSettingOutput;
    function message_ims_set_ims_services_enabled_setting_response_parse(message: Message): MessageImsSetImsServicesEnabledSettingOutput;
    function message_imsa_bind_response_parse(message: Message): MessageImsaBindOutput;
    function message_imsa_get_ims_registration_status_response_parse(message: Message): MessageImsaGetImsRegistrationStatusOutput;
    function message_imsa_get_ims_services_status_response_parse(message: Message): MessageImsaGetImsServicesStatusOutput;
    function message_imsa_register_indications_response_parse(message: Message): MessageImsaRegisterIndicationsOutput;
    function message_imsdcm_pdp_activate_request_response_parse(message: Message): MessageImsdcmPdpActivateRequestOutput;
    function message_imsdcm_pdp_deactivate_request_response_parse(message: Message): MessageImsdcmPdpDeactivateRequestOutput;
    function message_imsp_get_enabler_state_response_parse(message: Message): MessageImspGetEnablerStateOutput;
    function message_is_indication(self: Message): boolean;
    function message_is_request(self: Message): boolean;
    function message_is_response(self: Message): boolean;
    function message_loc_delete_assistance_data_response_parse(message: Message): MessageLocDeleteAssistanceDataOutput;
    function message_loc_get_engine_lock_response_parse(message: Message): MessageLocGetEngineLockOutput;
    function message_loc_get_nmea_types_response_parse(message: Message): MessageLocGetNmeaTypesOutput;
    function message_loc_get_operation_mode_response_parse(message: Message): MessageLocGetOperationModeOutput;
    function message_loc_get_predicted_orbits_data_source_response_parse(message: Message): MessageLocGetPredictedOrbitsDataSourceOutput;
    function message_loc_get_predicted_orbits_data_validity_response_parse(message: Message): MessageLocGetPredictedOrbitsDataValidityOutput;
    function message_loc_get_server_response_parse(message: Message): MessageLocGetServerOutput;
    function message_loc_inject_position_response_parse(message: Message): MessageLocInjectPositionOutput;
    function message_loc_inject_predicted_orbits_data_response_parse(message: Message): MessageLocInjectPredictedOrbitsDataOutput;
    function message_loc_inject_utc_time_response_parse(message: Message): MessageLocInjectUtcTimeOutput;
    function message_loc_inject_xtra_data_response_parse(message: Message): MessageLocInjectXtraDataOutput;
    function message_loc_register_events_response_parse(message: Message): MessageLocRegisterEventsOutput;
    function message_loc_set_engine_lock_response_parse(message: Message): MessageLocSetEngineLockOutput;
    function message_loc_set_nmea_types_response_parse(message: Message): MessageLocSetNmeaTypesOutput;
    function message_loc_set_operation_mode_response_parse(message: Message): MessageLocSetOperationModeOutput;
    function message_loc_set_server_response_parse(message: Message): MessageLocSetServerOutput;
    function message_loc_start_response_parse(message: Message): MessageLocStartOutput;
    function message_loc_stop_response_parse(message: Message): MessageLocStopOutput;
    function message_nas_attach_detach_response_parse(message: Message): MessageNasAttachDetachOutput;
    function message_nas_config_signal_info_response_parse(message: Message): MessageNasConfigSignalInfoOutput;
    function message_nas_config_signal_info_v2_response_parse(message: Message): MessageNasConfigSignalInfoV2Output;
    function message_nas_force_network_search_response_parse(message: Message): MessageNasForceNetworkSearchOutput;
    function message_nas_get_cdma_position_info_response_parse(message: Message): MessageNasGetCdmaPositionInfoOutput;
    function message_nas_get_cell_location_info_response_parse(message: Message): MessageNasGetCellLocationInfoOutput;
    function message_nas_get_drx_response_parse(message: Message): MessageNasGetDrxOutput;
    function message_nas_get_endc_config_response_parse(message: Message): MessageNasGetEndcConfigOutput;
    function message_nas_get_home_network_response_parse(message: Message): MessageNasGetHomeNetworkOutput;
    function message_nas_get_lte_cphy_ca_info_response_parse(message: Message): MessageNasGetLteCphyCaInfoOutput;
    function message_nas_get_network_time_response_parse(message: Message): MessageNasGetNetworkTimeOutput;
    function message_nas_get_operator_name_response_parse(message: Message): MessageNasGetOperatorNameOutput;
    function message_nas_get_plmn_name_response_parse(message: Message): MessageNasGetPlmnNameOutput;
    function message_nas_get_preferred_networks_response_parse(message: Message): MessageNasGetPreferredNetworksOutput;
    function message_nas_get_rf_band_information_response_parse(message: Message): MessageNasGetRfBandInformationOutput;
    function message_nas_get_serving_system_response_parse(message: Message): MessageNasGetServingSystemOutput;
    function message_nas_get_signal_info_response_parse(message: Message): MessageNasGetSignalInfoOutput;
    function message_nas_get_signal_strength_response_parse(message: Message): MessageNasGetSignalStrengthOutput;
    function message_nas_get_supported_messages_response_parse(message: Message): MessageNasGetSupportedMessagesOutput;
    function message_nas_get_system_info_response_parse(message: Message): MessageNasGetSystemInfoOutput;
    function message_nas_get_system_selection_preference_response_parse(message: Message): MessageNasGetSystemSelectionPreferenceOutput;
    function message_nas_get_technology_preference_response_parse(message: Message): MessageNasGetTechnologyPreferenceOutput;
    function message_nas_get_tx_rx_info_response_parse(message: Message): MessageNasGetTxRxInfoOutput;
    function message_nas_incremental_network_scan_response_parse(message: Message): MessageNasIncrementalNetworkScanOutput;
    function message_nas_initiate_network_register_response_parse(message: Message): MessageNasInitiateNetworkRegisterOutput;
    function message_nas_network_scan_response_parse(message: Message): MessageNasNetworkScanOutput;
    function message_nas_register_indications_response_parse(message: Message): MessageNasRegisterIndicationsOutput;
    function message_nas_reset_response_parse(message: Message): MessageNasResetOutput;
    function message_nas_set_event_report_response_parse(message: Message): MessageNasSetEventReportOutput;
    function message_nas_set_preferred_networks_response_parse(message: Message): MessageNasSetPreferredNetworksOutput;
    function message_nas_set_system_selection_preference_response_parse(message: Message): MessageNasSetSystemSelectionPreferenceOutput;
    function message_nas_set_technology_preference_response_parse(message: Message): MessageNasSetTechnologyPreferenceOutput;
    function message_nas_swi_get_status_response_parse(message: Message): MessageNasSwiGetStatusOutput;
    function message_new(service: Service, client_id: number, transaction_id: number, message_id: number): Message;
    function message_new_from_data(service: Service, client_id: number, qmi_data: Uint8Array | string): [Message, Uint8Array];
    function message_new_from_raw(raw: Uint8Array | string): [Message, Uint8Array];
    function message_oma_cancel_session_response_parse(message: Message): MessageOmaCancelSessionOutput;
    function message_oma_get_feature_setting_response_parse(message: Message): MessageOmaGetFeatureSettingOutput;
    function message_oma_get_session_info_response_parse(message: Message): MessageOmaGetSessionInfoOutput;
    function message_oma_reset_response_parse(message: Message): MessageOmaResetOutput;
    function message_oma_send_selection_response_parse(message: Message): MessageOmaSendSelectionOutput;
    function message_oma_set_event_report_response_parse(message: Message): MessageOmaSetEventReportOutput;
    function message_oma_set_feature_setting_response_parse(message: Message): MessageOmaSetFeatureSettingOutput;
    function message_oma_start_session_response_parse(message: Message): MessageOmaStartSessionOutput;
    function message_pbm_get_all_capabilities_response_parse(message: Message): MessagePbmGetAllCapabilitiesOutput;
    function message_pbm_get_capabilities_response_parse(message: Message): MessagePbmGetCapabilitiesOutput;
    function message_pbm_get_emergency_list_response_parse(message: Message): MessagePbmGetEmergencyListOutput;
    function message_pbm_indication_register_response_parse(message: Message): MessagePbmIndicationRegisterOutput;
    function message_pdc_activate_config_response_parse(message: Message): MessagePdcActivateConfigOutput;
    function message_pdc_config_change_response_parse(message: Message): MessagePdcConfigChangeOutput;
    function message_pdc_deactivate_config_response_parse(message: Message): MessagePdcDeactivateConfigOutput;
    function message_pdc_delete_config_response_parse(message: Message): MessagePdcDeleteConfigOutput;
    function message_pdc_get_config_info_response_parse(message: Message): MessagePdcGetConfigInfoOutput;
    function message_pdc_get_config_limits_response_parse(message: Message): MessagePdcGetConfigLimitsOutput;
    function message_pdc_get_default_config_info_response_parse(message: Message): MessagePdcGetDefaultConfigInfoOutput;
    function message_pdc_get_selected_config_response_parse(message: Message): MessagePdcGetSelectedConfigOutput;
    function message_pdc_list_configs_response_parse(message: Message): MessagePdcListConfigsOutput;
    function message_pdc_load_config_response_parse(message: Message): MessagePdcLoadConfigOutput;
    function message_pdc_register_response_parse(message: Message): MessagePdcRegisterOutput;
    function message_pdc_reset_response_parse(message: Message): MessagePdcResetOutput;
    function message_pdc_set_selected_config_response_parse(message: Message): MessagePdcSetSelectedConfigOutput;
    function message_pds_get_agps_config_response_parse(message: Message): MessagePdsGetAgpsConfigOutput;
    function message_pds_get_auto_tracking_state_response_parse(message: Message): MessagePdsGetAutoTrackingStateOutput;
    function message_pds_get_default_tracking_session_response_parse(message: Message): MessagePdsGetDefaultTrackingSessionOutput;
    function message_pds_get_gps_service_state_response_parse(message: Message): MessagePdsGetGpsServiceStateOutput;
    function message_pds_reset_response_parse(message: Message): MessagePdsResetOutput;
    function message_pds_set_agps_config_response_parse(message: Message): MessagePdsSetAgpsConfigOutput;
    function message_pds_set_auto_tracking_state_response_parse(message: Message): MessagePdsSetAutoTrackingStateOutput;
    function message_pds_set_default_tracking_session_response_parse(message: Message): MessagePdsSetDefaultTrackingSessionOutput;
    function message_pds_set_event_report_response_parse(message: Message): MessagePdsSetEventReportOutput;
    function message_pds_set_gps_service_state_response_parse(message: Message): MessagePdsSetGpsServiceStateOutput;
    function message_qos_bind_mux_data_port_response_parse(message: Message): MessageQosBindMuxDataPortOutput;
    function message_qos_bind_subscription_response_parse(message: Message): MessageQosBindSubscriptionOutput;
    function message_qos_get_bind_subscription_response_parse(message: Message): MessageQosGetBindSubscriptionOutput;
    function message_qos_get_flow_status_response_parse(message: Message): MessageQosGetFlowStatusOutput;
    function message_qos_get_network_status_response_parse(message: Message): MessageQosGetNetworkStatusOutput;
    function message_qos_reset_response_parse(message: Message): MessageQosResetOutput;
    function message_qos_swi_read_data_stats_response_parse(message: Message): MessageQosSwiReadDataStatsOutput;
    function message_ref(self: Message): Message;
    function message_response_new(request: Message, error: ProtocolError): Message;
    function message_sar_rf_get_state_response_parse(message: Message): MessageSarRfGetStateOutput;
    function message_sar_rf_set_state_response_parse(message: Message): MessageSarRfSetStateOutput;
    function message_set_transaction_id(self: Message, transaction_id: number): void;
    function message_ssc_control_response_parse(message: Message): MessageSscControlOutput;
    function message_tlv_read_fixed_size_string(self: Message, tlv_offset: bigint | number, offset: bigint | number, string_length: number): [boolean, number, string];
    function message_tlv_read_gdouble(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_gfloat_endian(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_gint16(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_gint32(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_gint64(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_gint8(self: Message, tlv_offset: bigint | number, offset: bigint | number): [boolean, number, number];
    function message_tlv_read_guint16(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_guint32(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_guint64(self: Message, tlv_offset: bigint | number, offset: bigint | number, endian: Endian): [boolean, number, number];
    function message_tlv_read_guint8(self: Message, tlv_offset: bigint | number, offset: bigint | number): [boolean, number, number];
    function message_tlv_read_init(self: Message, type: number): [number, number];
    function message_tlv_read_remaining_size(self: Message, tlv_offset: bigint | number, offset: bigint | number): number;
    function message_tlv_read_sized_guint(self: Message, tlv_offset: bigint | number, offset: bigint | number, n_bytes: number, endian: Endian): [boolean, number, number];
    function message_tlv_read_string(self: Message, tlv_offset: bigint | number, offset: bigint | number, n_size_prefix_bytes: number, max_size: number): [boolean, number, string];
    function message_tlv_write_complete(self: Message, tlv_offset: bigint | number): boolean;
    function message_tlv_write_gdouble(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_gfloat(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_gint16(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_gint32(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_gint64(self: Message, endian: Endian, _in: bigint | number): boolean;
    function message_tlv_write_gint8(self: Message, _in: number): boolean;
    function message_tlv_write_guint16(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_guint32(self: Message, endian: Endian, _in: number): boolean;
    function message_tlv_write_guint64(self: Message, endian: Endian, _in: bigint | number): boolean;
    function message_tlv_write_guint8(self: Message, _in: number): boolean;
    function message_tlv_write_init(self: Message, type: number): number;
    function message_tlv_write_reset(self: Message, tlv_offset: bigint | number): void;
    function message_tlv_write_sized_guint(self: Message, n_bytes: number, endian: Endian, _in: bigint | number): boolean;
    function message_tlv_write_string(self: Message, n_size_prefix_bytes: number, _in: string, in_length: bigint | number): boolean;
    function message_uim_change_pin_response_parse(message: Message): MessageUimChangePinOutput;
    function message_uim_change_provisioning_session_response_parse(message: Message): MessageUimChangeProvisioningSessionOutput;
    function message_uim_depersonalization_response_parse(message: Message): MessageUimDepersonalizationOutput;
    function message_uim_get_card_status_response_parse(message: Message): MessageUimGetCardStatusOutput;
    function message_uim_get_configuration_response_parse(message: Message): MessageUimGetConfigurationOutput;
    function message_uim_get_file_attributes_response_parse(message: Message): MessageUimGetFileAttributesOutput;
    function message_uim_get_slot_status_response_parse(message: Message): MessageUimGetSlotStatusOutput;
    function message_uim_get_supported_messages_response_parse(message: Message): MessageUimGetSupportedMessagesOutput;
    function message_uim_logical_channel_response_parse(message: Message): MessageUimLogicalChannelOutput;
    function message_uim_open_logical_channel_response_parse(message: Message): MessageUimOpenLogicalChannelOutput;
    function message_uim_power_off_sim_response_parse(message: Message): MessageUimPowerOffSimOutput;
    function message_uim_power_on_sim_response_parse(message: Message): MessageUimPowerOnSimOutput;
    function message_uim_read_record_response_parse(message: Message): MessageUimReadRecordOutput;
    function message_uim_read_transparent_response_parse(message: Message): MessageUimReadTransparentOutput;
    function message_uim_refresh_complete_response_parse(message: Message): MessageUimRefreshCompleteOutput;
    function message_uim_refresh_register_all_response_parse(message: Message): MessageUimRefreshRegisterAllOutput;
    function message_uim_refresh_register_response_parse(message: Message): MessageUimRefreshRegisterOutput;
    function message_uim_register_events_response_parse(message: Message): MessageUimRegisterEventsOutput;
    function message_uim_remote_unlock_response_parse(message: Message): MessageUimRemoteUnlockOutput;
    function message_uim_reset_response_parse(message: Message): MessageUimResetOutput;
    function message_uim_send_apdu_response_parse(message: Message): MessageUimSendApduOutput;
    function message_uim_set_pin_protection_response_parse(message: Message): MessageUimSetPinProtectionOutput;
    function message_uim_switch_slot_response_parse(message: Message): MessageUimSwitchSlotOutput;
    function message_uim_unblock_pin_response_parse(message: Message): MessageUimUnblockPinOutput;
    function message_uim_verify_pin_response_parse(message: Message): MessageUimVerifyPinOutput;
    function message_uim_write_record_response_parse(message: Message): MessageUimWriteRecordOutput;
    function message_unref(self: Message): void;
    function message_voice_answer_call_response_parse(message: Message): MessageVoiceAnswerCallOutput;
    function message_voice_answer_ussd_response_parse(message: Message): MessageVoiceAnswerUssdOutput;
    function message_voice_burst_dtmf_response_parse(message: Message): MessageVoiceBurstDtmfOutput;
    function message_voice_cancel_ussd_response_parse(message: Message): MessageVoiceCancelUssdOutput;
    function message_voice_dial_call_response_parse(message: Message): MessageVoiceDialCallOutput;
    function message_voice_end_call_response_parse(message: Message): MessageVoiceEndCallOutput;
    function message_voice_get_all_call_info_response_parse(message: Message): MessageVoiceGetAllCallInfoOutput;
    function message_voice_get_call_waiting_response_parse(message: Message): MessageVoiceGetCallWaitingOutput;
    function message_voice_get_config_response_parse(message: Message): MessageVoiceGetConfigOutput;
    function message_voice_get_supported_messages_response_parse(message: Message): MessageVoiceGetSupportedMessagesOutput;
    function message_voice_indication_register_response_parse(message: Message): MessageVoiceIndicationRegisterOutput;
    function message_voice_manage_calls_response_parse(message: Message): MessageVoiceManageCallsOutput;
    function message_voice_originate_ussd_no_wait_response_parse(message: Message): MessageVoiceOriginateUssdNoWaitOutput;
    function message_voice_originate_ussd_response_parse(message: Message): MessageVoiceOriginateUssdOutput;
    function message_voice_set_supplementary_service_response_parse(message: Message): MessageVoiceSetSupplementaryServiceOutput;
    function message_voice_start_continuous_dtmf_response_parse(message: Message): MessageVoiceStartContinuousDtmfOutput;
    function message_voice_stop_continuous_dtmf_response_parse(message: Message): MessageVoiceStopContinuousDtmfOutput;
    function message_wda_get_data_format_response_parse(message: Message): MessageWdaGetDataFormatOutput;
    function message_wda_get_supported_messages_response_parse(message: Message): MessageWdaGetSupportedMessagesOutput;
    function message_wda_loopback_configuration_response_parse(message: Message): MessageWdaLoopbackConfigurationOutput;
    function message_wda_set_data_format_response_parse(message: Message): MessageWdaSetDataFormatOutput;
    function message_wds_bind_data_port_response_parse(message: Message): MessageWdsBindDataPortOutput;
    function message_wds_bind_mux_data_port_response_parse(message: Message): MessageWdsBindMuxDataPortOutput;
    function message_wds_bind_subscription_response_parse(message: Message): MessageWdsBindSubscriptionOutput;
    function message_wds_configure_profile_event_list_response_parse(message: Message): MessageWdsConfigureProfileEventListOutput;
    function message_wds_create_profile_response_parse(message: Message): MessageWdsCreateProfileOutput;
    function message_wds_delete_profile_response_parse(message: Message): MessageWdsDeleteProfileOutput;
    function message_wds_get_autoconnect_settings_response_parse(message: Message): MessageWdsGetAutoconnectSettingsOutput;
    function message_wds_get_bind_subscription_response_parse(message: Message): MessageWdsGetBindSubscriptionOutput;
    function message_wds_get_channel_rates_response_parse(message: Message): MessageWdsGetChannelRatesOutput;
    function message_wds_get_current_data_bearer_technology_response_parse(message: Message): MessageWdsGetCurrentDataBearerTechnologyOutput;
    function message_wds_get_current_settings_response_parse(message: Message): MessageWdsGetCurrentSettingsOutput;
    function message_wds_get_data_bearer_technology_response_parse(message: Message): MessageWdsGetDataBearerTechnologyOutput;
    function message_wds_get_default_profile_number_response_parse(message: Message): MessageWdsGetDefaultProfileNumberOutput;
    function message_wds_get_default_settings_response_parse(message: Message): MessageWdsGetDefaultSettingsOutput;
    function message_wds_get_dormancy_status_response_parse(message: Message): MessageWdsGetDormancyStatusOutput;
    function message_wds_get_lte_attach_parameters_response_parse(message: Message): MessageWdsGetLteAttachParametersOutput;
    function message_wds_get_lte_attach_pdn_list_response_parse(message: Message): MessageWdsGetLteAttachPdnListOutput;
    function message_wds_get_max_lte_attach_pdn_number_response_parse(message: Message): MessageWdsGetMaxLteAttachPdnNumberOutput;
    function message_wds_get_packet_service_status_response_parse(message: Message): MessageWdsGetPacketServiceStatusOutput;
    function message_wds_get_packet_statistics_response_parse(message: Message): MessageWdsGetPacketStatisticsOutput;
    function message_wds_get_pdn_throttle_info_response_parse(message: Message): MessageWdsGetPdnThrottleInfoOutput;
    function message_wds_get_profile_list_response_parse(message: Message): MessageWdsGetProfileListOutput;
    function message_wds_get_profile_settings_response_parse(message: Message): MessageWdsGetProfileSettingsOutput;
    function message_wds_get_supported_messages_response_parse(message: Message): MessageWdsGetSupportedMessagesOutput;
    function message_wds_go_active_response_parse(message: Message): MessageWdsGoActiveOutput;
    function message_wds_go_dormant_response_parse(message: Message): MessageWdsGoDormantOutput;
    function message_wds_indication_register_response_parse(message: Message): MessageWdsIndicationRegisterOutput;
    function message_wds_modify_profile_response_parse(message: Message): MessageWdsModifyProfileOutput;
    function message_wds_reset_response_parse(message: Message): MessageWdsResetOutput;
    function message_wds_set_autoconnect_settings_response_parse(message: Message): MessageWdsSetAutoconnectSettingsOutput;
    function message_wds_set_default_profile_number_response_parse(message: Message): MessageWdsSetDefaultProfileNumberOutput;
    function message_wds_set_event_report_response_parse(message: Message): MessageWdsSetEventReportOutput;
    function message_wds_set_ip_family_response_parse(message: Message): MessageWdsSetIpFamilyOutput;
    function message_wds_set_lte_attach_pdn_list_response_parse(message: Message): MessageWdsSetLteAttachPdnListOutput;
    function message_wds_start_network_response_parse(message: Message): MessageWdsStartNetworkOutput;
    function message_wds_stop_network_response_parse(message: Message): MessageWdsStopNetworkOutput;
    function message_wds_swi_create_profile_indexed_response_parse(message: Message): MessageWdsSwiCreateProfileIndexedOutput;
    function message_wms_delete_response_parse(message: Message): MessageWmsDeleteOutput;
    function message_wms_get_broadcast_config_response_parse(message: Message): MessageWmsGetBroadcastConfigOutput;
    function message_wms_get_message_protocol_response_parse(message: Message): MessageWmsGetMessageProtocolOutput;
    function message_wms_get_routes_response_parse(message: Message): MessageWmsGetRoutesOutput;
    function message_wms_get_supported_messages_response_parse(message: Message): MessageWmsGetSupportedMessagesOutput;
    function message_wms_get_transport_network_registration_status_response_parse(message: Message): MessageWmsGetTransportNetworkRegistrationStatusOutput;
    function message_wms_indication_register_response_parse(message: Message): MessageWmsIndicationRegisterOutput;
    function message_wms_list_messages_response_parse(message: Message): MessageWmsListMessagesOutput;
    function message_wms_modify_tag_response_parse(message: Message): MessageWmsModifyTagOutput;
    function message_wms_raw_read_response_parse(message: Message): MessageWmsRawReadOutput;
    function message_wms_raw_send_response_parse(message: Message): MessageWmsRawSendOutput;
    function message_wms_raw_write_response_parse(message: Message): MessageWmsRawWriteOutput;
    function message_wms_reset_response_parse(message: Message): MessageWmsResetOutput;
    function message_wms_send_ack_response_parse(message: Message): MessageWmsSendAckOutput;
    function message_wms_send_from_memory_storage_response_parse(message: Message): MessageWmsSendFromMemoryStorageOutput;
    function message_wms_set_broadcast_activation_response_parse(message: Message): MessageWmsSetBroadcastActivationOutput;
    function message_wms_set_broadcast_config_response_parse(message: Message): MessageWmsSetBroadcastConfigOutput;
    function message_wms_set_event_report_response_parse(message: Message): MessageWmsSetEventReportOutput;
    function message_wms_set_routes_response_parse(message: Message): MessageWmsSetRoutesOutput;
    function nas_active_band_get_string(val: NasActiveBand): string;
    function nas_attach_state_get_string(val: NasAttachState): string;
    function nas_band_preference_build_string_from_mask(mask: NasBandPreference): string;
    function nas_boolean_get_string(val: NasBoolean): string;
    function nas_call_barring_status_get_string(val: NasCallBarringStatus): string;
    function nas_cdma_pilot_type_get_string(val: NasCdmaPilotType): string;
    function nas_cdma_prl_preference_get_string(val: NasCdmaPrlPreference): string;
    function nas_cell_broadcast_capability_get_string(val: NasCellBroadcastCapability): string;
    function nas_change_duration_get_string(val: NasChangeDuration): string;
    function nas_data_capability_get_string(val: NasDataCapability): string;
    function nas_day_of_week_get_string(val: NasDayOfWeek): string;
    function nas_daylight_savings_adjustment_get_string(val: NasDaylightSavingsAdjustment): string;
    function nas_dl_bandwidth_get_string(val: NasDLBandwidth): string;
    function nas_drx_get_string(val: NasDrx): string;
    function nas_evdo_sinr_level_get_string(val: NasEvdoSinrLevel): string;
    function nas_gsm_wcdma_acquisition_order_preference_get_string(val: NasGsmWcdmaAcquisitionOrderPreference): string;
    function nas_hdr_personality_get_string(val: NasHdrPersonality): string;
    function nas_hdr_protocol_revision_get_string(val: NasHdrProtocolRevision): string;
    function nas_incremental_network_scan_status_get_string(val: NasIncrementalNetworkScanStatus): string;
    function nas_lte_band_preference_build_string_from_mask(mask: NasLteBandPreference): string;
    function nas_lte_cell_access_status_get_string(val: NasLteCellAccessStatus): string;
    function nas_lte_registration_domain_get_string(val: NasLteRegistrationDomain): string;
    function nas_lte_voice_domain_get_string(val: NasLteVoiceDomain): string;
    function nas_network_description_display_get_string(val: NasNetworkDescriptionDisplay): string;
    function nas_network_description_encoding_get_string(val: NasNetworkDescriptionEncoding): string;
    function nas_network_name_display_condition_build_string_from_mask(mask: NasNetworkNameDisplayCondition): string;
    function nas_network_name_source_get_string(val: NasNetworkNameSource): string;
    function nas_network_register_type_get_string(val: NasNetworkRegisterType): string;
    function nas_network_scan_result_get_string(val: NasNetworkScanResult): string;
    function nas_network_scan_type_build_string_from_mask(mask: NasNetworkScanType): string;
    function nas_network_selection_preference_get_string(val: NasNetworkSelectionPreference): string;
    function nas_network_selection_registration_restriction_get_string(val: NasNetworkSelectionRegistrationRestriction): string;
    function nas_network_service_domain_get_string(val: NasNetworkServiceDomain): string;
    function nas_network_status_build_string_from_mask(mask: NasNetworkStatus): string;
    function nas_network_type_get_string(val: NasNetworkType): string;
    function nas_plmn_access_technology_identifier_build_string_from_mask(mask: NasPlmnAccessTechnologyIdentifier): string;
    function nas_plmn_encoding_scheme_get_string(val: NasPlmnEncodingScheme): string;
    function nas_plmn_language_id_get_string(val: NasPlmnLanguageId): string;
    function nas_plmn_name_country_initials_get_string(val: NasPlmnNameCountryInitials): string;
    function nas_plmn_name_spare_bits_get_string(val: NasPlmnNameSpareBits): string;
    function nas_preference_duration_get_string(val: NasPreferenceDuration): string;
    function nas_ps_attach_action_get_string(val: NasPsAttachAction): string;
    function nas_radio_interface_get_string(val: NasRadioInterface): string;
    function nas_radio_technology_preference_build_string_from_mask(mask: NasRadioTechnologyPreference): string;
    function nas_rat_mode_preference_build_string_from_mask(mask: NasRatModePreference): string;
    function nas_read_string_from_network_description_encoded_array(encoding: NasNetworkDescriptionEncoding, array: Uint8Array | string): string;
    function nas_read_string_from_plmn_encoded_array(encoding: NasPlmnEncodingScheme, array: Uint8Array | string): string;
    function nas_registration_state_get_string(val: NasRegistrationState): string;
    function nas_reject_cause_get_string(val: NasRejectCause): string;
    function nas_roaming_indicator_status_get_string(val: NasRoamingIndicatorStatus): string;
    function nas_roaming_preference_get_string(val: NasRoamingPreference): string;
    function nas_roaming_status_get_string(val: NasRoamingStatus): string;
    function nas_scell_state_get_string(val: NasScellState): string;
    function nas_service_domain_preference_get_string(val: NasServiceDomainPreference): string;
    function nas_service_status_get_string(val: NasServiceStatus): string;
    function nas_signal_strength_request_build_string_from_mask(mask: NasSignalStrengthRequest): string;
    function nas_sim_reject_state_get_string(val: NasSimRejectState): string;
    function nas_swi_emm_connection_state_get_string(val: NasSwiEmmConnectionState): string;
    function nas_swi_emm_state_get_string(val: NasSwiEmmState): string;
    function nas_swi_ims_reg_state_get_string(val: NasSwiImsRegState): string;
    function nas_swi_modem_mode_get_string(val: NasSwiModemMode): string;
    function nas_swi_ps_state_get_string(val: NasSwiPsState): string;
    function nas_swi_system_mode_get_string(val: NasSwiSystemMode): string;
    function nas_td_scdma_band_preference_build_string_from_mask(mask: NasTdScdmaBandPreference): string;
    function nas_usage_preference_get_string(val: NasUsagePreference): string;
    function nas_voice_domain_preference_get_string(val: NasVoiceDomainPreference): string;
    function nas_wcdma_hs_service_get_string(val: NasWcdmaHsService): string;
    function nas_wcdma_rrc_state_get_string(val: NasWcdmaRrcState): string;
    function oma_hfa_feature_done_state_get_string(val: OmaHfaFeatureDoneState): string;
    function oma_session_failed_reason_get_string(val: OmaSessionFailedReason): string;
    function oma_session_state_get_string(val: OmaSessionState): string;
    function oma_session_type_get_string(val: OmaSessionType): string;
    function pbm_emergency_number_flags_build_string_from_mask(mask: PbmEmergencyNumberFlags): string;
    function pbm_event_registration_flag_build_string_from_mask(mask: PbmEventRegistrationFlag): string;
    function pbm_phonebook_type_build_string_from_mask(mask: PbmPhonebookType): string;
    function pbm_session_type_get_string(val: PbmSessionType): string;
    function pdc_configuration_type_get_string(val: PdcConfigurationType): string;
    function pdc_refresh_event_type_get_string(val: PdcRefreshEventType): string;
    function pds_data_valid_build_string_from_mask(mask: PdsDataValid): string;
    function pds_network_mode_get_string(val: PdsNetworkMode): string;
    function pds_operating_mode_get_string(val: PdsOperatingMode): string;
    function pds_operation_mode_get_string(val: PdsOperationMode): string;
    function pds_position_session_status_get_string(val: PdsPositionSessionStatus): string;
    function pds_tracking_session_state_get_string(val: PdsTrackingSessionState): string;
    function protocol_error_get_string(val: ProtocolError): string;
    function protocol_error_quark(): GLib.Quark;
    function qos_event_get_string(val: QosEvent): string;
    function qos_status_get_string(val: QosStatus): string;
    function sar_rf_state_get_string(val: SarRfState): string;
    function service_get_string(val: Service): string;
    function sio_port_get_string(val: SioPort): string;
    function ssc_report_type_get_string(val: SscReportType): string;
    function subscription_type_get_string(val: SubscriptionType): string;
    function uim_card_application_personalization_feature_get_string(val: UimCardApplicationPersonalizationFeature): string;
    function uim_card_application_personalization_feature_status_get_string(val: UimCardApplicationPersonalizationFeatureStatus): string;
    function uim_card_application_personalization_state_get_string(val: UimCardApplicationPersonalizationState): string;
    function uim_card_application_state_get_string(val: UimCardApplicationState): string;
    function uim_card_application_type_get_string(val: UimCardApplicationType): string;
    function uim_card_error_get_string(val: UimCardError): string;
    function uim_card_protocol_get_string(val: UimCardProtocol): string;
    function uim_card_state_get_string(val: UimCardState): string;
    function uim_configuration_build_string_from_mask(mask: UimConfiguration): string;
    function uim_depersonalization_operation_get_string(val: UimDepersonalizationOperation): string;
    function uim_event_registration_flag_build_string_from_mask(mask: UimEventRegistrationFlag): string;
    function uim_file_control_information_get_string(val: UimFileControlInformation): string;
    function uim_file_type_get_string(val: UimFileType): string;
    function uim_physical_card_state_get_string(val: UimPhysicalCardState): string;
    function uim_pin_id_get_string(val: UimPinId): string;
    function uim_pin_state_get_string(val: UimPinState): string;
    function uim_refresh_mode_get_string(val: UimRefreshMode): string;
    function uim_refresh_stage_get_string(val: UimRefreshStage): string;
    function uim_security_attribute_build_string_from_mask(mask: UimSecurityAttribute): string;
    function uim_security_attribute_logic_get_string(val: UimSecurityAttributeLogic): string;
    function uim_session_type_get_string(val: UimSessionType): string;
    function uim_slot_state_get_string(val: UimSlotState): string;
    function utils_get_show_personal_info(): boolean;
    function utils_get_traces_enabled(): boolean;
    function utils_set_show_personal_info(show_personal_info: boolean): void;
    function utils_set_traces_enabled(enabled: boolean): void;
    function voice_alpha_data_coding_scheme_get_string(val: VoiceAlphaDataCodingScheme): string;
    function voice_als_get_string(val: VoiceAls): string;
    function voice_call_control_result_type_get_string(val: VoiceCallControlResultType): string;
    function voice_call_control_supplementary_service_type_get_string(val: VoiceCallControlSupplementaryServiceType): string;
    function voice_call_direction_get_string(val: VoiceCallDirection): string;
    function voice_call_end_reason_get_string(val: VoiceCallEndReason): string;
    function voice_call_mode_get_string(val: VoiceCallMode): string;
    function voice_call_state_get_string(val: VoiceCallState): string;
    function voice_call_type_get_string(val: VoiceCallType): string;
    function voice_domain_get_string(val: VoiceDomain): string;
    function voice_presentation_get_string(val: VoicePresentation): string;
    function voice_privacy_get_string(val: VoicePrivacy): string;
    function voice_service_option_get_string(val: VoiceServiceOption): string;
    function voice_supplementary_service_action_get_string(val: VoiceSupplementaryServiceAction): string;
    function voice_supplementary_service_notification_type_get_string(val: VoiceSupplementaryServiceNotificationType): string;
    function voice_supplementary_service_reason_get_string(val: VoiceSupplementaryServiceReason): string;
    function voice_supplementary_service_type_get_string(val: VoiceSupplementaryServiceType): string;
    function voice_tty_mode_get_string(val: VoiceTtyMode): string;
    function voice_user_action_get_string(val: VoiceUserAction): string;
    function voice_uss_data_coding_scheme_get_string(val: VoiceUssDataCodingScheme): string;
    function voice_wcdma_amr_status_build_string_from_mask(mask: VoiceWcdmaAmrStatus): string;
    function wda_data_aggregation_protocol_get_string(val: WdaDataAggregationProtocol): string;
    function wda_link_layer_protocol_get_string(val: WdaLinkLayerProtocol): string;
    function wda_loop_back_state_get_string(val: WdaLoopBackState): string;
    function wds_address_allocation_preference_get_string(val: WdsAddressAllocationPreference): string;
    function wds_apn_type_mask_build_string_from_mask(mask: WdsApnTypeMask): string;
    function wds_attach_pdn_list_action_get_string(val: WdsAttachPdnListAction): string;
    function wds_authentication_build_string_from_mask(mask: WdsAuthentication): string;
    function wds_autoconnect_setting_get_string(val: WdsAutoconnectSetting): string;
    function wds_autoconnect_setting_roaming_get_string(val: WdsAutoconnectSettingRoaming): string;
    function wds_call_end_reason_get_string(val: WdsCallEndReason): string;
    function wds_call_type_get_string(val: WdsCallType): string;
    function wds_client_type_get_string(val: WdsClientType): string;
    function wds_connection_status_get_string(val: WdsConnectionStatus): string;
    function wds_data_bearer_technology_get_string(val: WdsDataBearerTechnology): string;
    function wds_data_call_status_get_string(val: WdsDataCallStatus): string;
    function wds_data_call_type_get_string(val: WdsDataCallType): string;
    function wds_data_system_get_string(val: WdsDataSystem): string;
    function wds_data_system_network_type_get_string(val: WdsDataSystemNetworkType): string;
    function wds_delivery_order_get_string(val: WdsDeliveryOrder): string;
    function wds_dormancy_status_get_string(val: WdsDormancyStatus): string;
    function wds_ds_profile_error_get_string(val: WdsDsProfileError): string;
    function wds_extended_data_bearer_technology_3gpp2_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp2): string;
    function wds_extended_data_bearer_technology_3gpp_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp): string;
    function wds_extended_technology_preference_get_string(val: WdsExtendedTechnologyPreference): string;
    function wds_ip_family_get_string(val: WdsIpFamily): string;
    function wds_ip_support_type_get_string(val: WdsIpSupportType): string;
    function wds_network_type_get_string(val: WdsNetworkType): string;
    function wds_packet_statistics_mask_flag_build_string_from_mask(mask: WdsPacketStatisticsMaskFlag): string;
    function wds_pdp_access_control_get_string(val: WdsPdpAccessControl): string;
    function wds_pdp_data_compression_type_get_string(val: WdsPdpDataCompressionType): string;
    function wds_pdp_header_compression_type_get_string(val: WdsPdpHeaderCompressionType): string;
    function wds_pdp_type_get_string(val: WdsPdpType): string;
    function wds_profile_change_event_get_string(val: WdsProfileChangeEvent): string;
    function wds_profile_family_get_string(val: WdsProfileFamily): string;
    function wds_profile_type_get_string(val: WdsProfileType): string;
    function wds_qos_class_identifier_get_string(val: WdsQosClassIdentifier): string;
    function wds_radio_access_technology_get_string(val: WdsRadioAccessTechnology): string;
    function wds_rat_3gpp2_build_string_from_mask(mask: WdsRat3gpp2): string;
    function wds_rat_3gpp_build_string_from_mask(mask: WdsRat3gpp): string;
    function wds_requested_settings_build_string_from_mask(mask: WdsRequestedSettings): string;
    function wds_sdu_erroneous_delivery_get_string(val: WdsSduErroneousDelivery): string;
    function wds_sdu_error_ratio_get_string(val: WdsSduErrorRatio): string;
    function wds_sdu_residual_bit_error_ratio_get_string(val: WdsSduResidualBitErrorRatio): string;
    function wds_set_event_report_transfer_statistics_build_string_from_mask(mask: WdsSetEventReportTransferStatistics): string;
    function wds_so_cdma1x_build_string_from_mask(mask: WdsSoCdma1x): string;
    function wds_so_evdo_rev0_build_string_from_mask(mask: WdsSoEvdoRev0): string;
    function wds_so_evdo_reva_build_string_from_mask(mask: WdsSoEvdoRevA): string;
    function wds_so_evdo_revb_build_string_from_mask(mask: WdsSoEvdoRevB): string;
    function wds_technology_preference_build_string_from_mask(mask: WdsTechnologyPreference): string;
    function wds_tethered_call_type_get_string(val: WdsTetheredCallType): string;
    function wds_traffic_class_get_string(val: WdsTrafficClass): string;
    function wds_verbose_call_end_reason_3gpp_get_string(val: WdsVerboseCallEndReason3gpp): string;
    function wds_verbose_call_end_reason_cm_get_string(val: WdsVerboseCallEndReasonCm): string;
    function wds_verbose_call_end_reason_ehrpd_get_string(val: WdsVerboseCallEndReasonEhrpd): string;
    function wds_verbose_call_end_reason_get_string(type: WdsVerboseCallEndReasonType, reason: number): string;
    function wds_verbose_call_end_reason_internal_get_string(val: WdsVerboseCallEndReasonInternal): string;
    function wds_verbose_call_end_reason_ipv6_get_string(val: WdsVerboseCallEndReasonIpv6): string;
    function wds_verbose_call_end_reason_mip_get_string(val: WdsVerboseCallEndReasonMip): string;
    function wds_verbose_call_end_reason_ppp_get_string(val: WdsVerboseCallEndReasonPpp): string;
    function wds_verbose_call_end_reason_type_get_string(val: WdsVerboseCallEndReasonType): string;
    function wms_ack_failure_cause_get_string(val: WmsAckFailureCause): string;
    function wms_ack_indicator_get_string(val: WmsAckIndicator): string;
    function wms_cdma_cause_code_get_string(val: WmsCdmaCauseCode): string;
    function wms_cdma_error_class_get_string(val: WmsCdmaErrorClass): string;
    function wms_cdma_service_option_get_string(val: WmsCdmaServiceOption): string;
    function wms_gsm_umts_rp_cause_get_string(val: WmsGsmUmtsRpCause): string;
    function wms_gsm_umts_tp_cause_get_string(val: WmsGsmUmtsTpCause): string;
    function wms_message_class_get_string(val: WmsMessageClass): string;
    function wms_message_delivery_failure_type_get_string(val: WmsMessageDeliveryFailureType): string;
    function wms_message_format_get_string(val: WmsMessageFormat): string;
    function wms_message_mode_get_string(val: WmsMessageMode): string;
    function wms_message_protocol_get_string(val: WmsMessageProtocol): string;
    function wms_message_tag_type_get_string(val: WmsMessageTagType): string;
    function wms_message_type_get_string(val: WmsMessageType): string;
    function wms_notification_type_get_string(val: WmsNotificationType): string;
    function wms_nw_registration_get_string(val: WmsNWRegistration): string;
    function wms_receipt_action_get_string(val: WmsReceiptAction): string;
    function wms_storage_type_get_string(val: WmsStorageType): string;
    function wms_transfer_indication_get_string(val: WmsTransferIndication): string;
    interface DeviceCommandAbortableParseResponseFn {
        (self: Device, abort_response: Message): boolean;
    }
    interface MessageForeachRawTlvFn {
        (type: number, value: number, length: number): void;
    }
    enum CtlFlag {
        NONE,
        RESPONSE,
        INDICATION,
    }
    export namespace DeviceAddLinkFlags {
        export const $gtype: GObject.GType<DeviceAddLinkFlags>;
    }
    enum DeviceAddLinkFlags {
        NONE,
        INGRESS_MAP_CKSUMV4,
        EGRESS_MAP_CKSUMV4,
        INGRESS_MAP_CKSUMV5,
        EGRESS_MAP_CKSUMV5,
    }
    export namespace DeviceOpenFlags {
        export const $gtype: GObject.GType<DeviceOpenFlags>;
    }
    enum DeviceOpenFlags {
        NONE,
        VERSION_INFO,
        SYNC,
        NET_802_3,
        NET_RAW_IP,
        NET_QOS_HEADER,
        NET_NO_QOS_HEADER,
        PROXY,
        MBIM,
        AUTO,
        EXPECT_INDICATIONS,
    }
    export namespace DeviceReleaseClientFlags {
        export const $gtype: GObject.GType<DeviceReleaseClientFlags>;
    }
    enum DeviceReleaseClientFlags {
        NONE,
        RELEASE_CID,
    }
    enum DmsBandCapability {
        BC_0_A_SYSTEM,
        BC_0_B_SYSTEM,
        BC_1_ALL_BLOCKS,
        BC_2,
        BC_3_A_SYSTEM,
        BC_4_ALL_BLOCKS,
        BC_5_ALL_BLOCKS,
        GSM_DCS_1800,
        GSM_900_EXTENDED,
        GSM_900_PRIMARY,
        BC_6,
        BC_7,
        BC_8,
        BC_9,
        BC_10,
        BC_11,
        GSM_450,
        GSM_480,
        GSM_750,
        GSM_850,
        GSM_900_RAILWAYS,
        GSM_PCS_1900,
        WCDMA_2100,
        WCDMA_PCS_1900,
        WCDMA_DCS_1800,
        WCDMA_1700_US,
        WCDMA_850_US,
        WCDMA_800,
        BC_12,
        BC_14,
        BC_15,
        WCDMA_2600,
        WCDMA_900,
        WCDMA_1700_JAPAN,
        BC_16,
        BC_17,
        BC_18,
        BC_19,
        WCDMA_850_JAPAN,
        WCDMA_1500,
    }
    class DmsLteBandCapability {
        static $gtype: GObject.GType<DmsLteBandCapability>;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
        static "9": number;
        static "10": number;
        static "11": number;
        static "12": number;
        static "13": number;
        static "14": number;
        static "17": number;
        static "18": number;
        static "19": number;
        static "20": number;
        static "21": number;
        static "24": number;
        static "25": number;
        static "26": number;
        static "27": number;
        static "28": number;
        static "29": number;
        static "30": number;
        static "31": number;
        static "32": number;
        static "33": number;
        static "34": number;
        static "35": number;
        static "36": number;
        static "37": number;
        static "38": number;
        static "39": number;
        static "40": number;
        static "41": number;
        static "42": number;
        static "43": number;
    }
    export namespace DmsOfflineReason {
        export const $gtype: GObject.GType<DmsOfflineReason>;
    }
    enum DmsOfflineReason {
        HOST_IMAGE_MISCONFIGURATION,
        PRI_IMAGE_MISCONFIGURATION,
        PRI_VERSION_INCOMPATIBLE,
        DEVICE_MEMORY_FULL,
    }
    export namespace DmsPowerState {
        export const $gtype: GObject.GType<DmsPowerState>;
    }
    enum DmsPowerState {
        EXTERNAL_SOURCE,
        BATTERY_CONNECTED,
        BATTERY_CHARGING,
        FAULT,
    }
    enum DsdApnTypePreference {
        DEFAULT,
        IMS,
        MMS,
        DUN,
        SUPL,
        HIPRI,
        FOTA,
        CBS,
        IA,
        EMERGENCY,
    }
    enum DsdSoMask {
        "3GPP_SO_MASK_WCDMA",
        "3GPP_SO_MASK_HSDPA",
        "3GPP_SO_MASK_HSUPA",
        "3GPP_SO_MASK_HSDPAPLUS",
        "3GPP_SO_MASK_DC_HSDPAPLUS",
        "3GPP_SO_MASK_64_QAM",
        "3GPP_SO_MASK_HSPA",
        "3GPP_SO_MASK_GPRS",
        "3GPP_SO_MASK_EDGE",
        "3GPP_SO_MASK_GSM",
        "3GPP_SO_MASK_S2B",
        "3GPP_SO_MASK_LTE_LIMITED_SRVC",
        "3GPP_SO_MASK_LTE_FDD",
        "3GPP_SO_MASK_LTE_TDD",
        "3GPP_SO_MASK_TDSCDMA",
        "3GPP_SO_MASK_DC_HSUPA",
        "3GPP_SO_MASK_LTE_CA_DL",
        "3GPP_SO_MASK_LTE_CA_UL",
        "3GPP_SO_MASK_S2B_LIMITED_SRVC",
        "3GPP_SO_MASK_FOUR_POINT_FIVE_G",
        "3GPP_SO_MASK_FOUR_POINT_FIVE_G_PLUS",
        "3GPP2_SO_MASK_1X_IS95",
        "3GPP2_SO_MASK_1X_IS2000",
        "3GPP2_SO_MASK_1X_IS2000_REL_A",
        "3GPP2_SO_MASK_HDR_REV0_DPA",
        "3GPP2_SO_MASK_HDR_REVA_DPA",
        "3GPP2_SO_MASK_HDR_REVB_DPA",
        "3GPP2_SO_MASK_HDR_REVA_MPA",
        "3GPP2_SO_MASK_HDR_REVB_MPA",
        "3GPP2_SO_MASK_HDR_REVA_EMPA",
        "3GPP2_SO_MASK_HDR_REVB_EMPA",
        "3GPP2_SO_MASK_HDR_REVB_MMPA",
        "3GPP2_SO_MASK_HDR_EVDO_FMC",
        "3GPP2_SO_MASK_1X_CS",
        "3GPP_SO_MASK_5G_TDD",
        "3GPP_SO_MASK_5G_SUB6",
        "3GPP_SO_MASK_5G_MMWAVE",
        "3GPP_SO_MASK_5G_NSA",
        "3GPP_SO_MASK_5G_SA",
    }
    export namespace LocDeleteCellDatabase {
        export const $gtype: GObject.GType<LocDeleteCellDatabase>;
    }
    enum LocDeleteCellDatabase {
        POS,
        LATEST_GPS_POS,
        OTA_POS,
        EXT_REF_POS,
        TIMETAG,
        CELLID,
        CACHED_CELLID,
        LAST_SRV_CELL,
        CUR_SRV_CELL,
        NEIGHBOR_INFO,
    }
    export namespace LocDeleteClockInfo {
        export const $gtype: GObject.GType<LocDeleteClockInfo>;
    }
    enum LocDeleteClockInfo {
        TIME_EST,
        FREQ_EST,
        WEEK_NUMBER,
        RTC_TIME,
        TIME_TRANSFER,
        GPS_TIME_EST,
        GLO_TIME_EST,
        GLO_DAY_NUMBER,
        GLO_YEAR_NUMBER,
        GLO_RF_GRP_DELAY,
        DISABLE_TT,
    }
    enum LocDeleteGnssData {
        GPS_SVDIR,
        GPS_SVSTEER,
        GPS_TIME,
        GPS_ALM_CORR,
        GLO_SVDIR,
        GLO_SVSTEER,
        GLO_TIME,
        GLO_ALM_CORR,
        SBAS_SVDIR,
        SBAS_SVSTEER,
        POSITION,
        TIME,
        IONO,
        UTC,
        HEALTH,
        SADATA,
        RTI,
        SV_NO_EXIST,
        FREQ_BIAS_EST,
    }
    export namespace LocDeleteSvInfo {
        export const $gtype: GObject.GType<LocDeleteSvInfo>;
    }
    enum LocDeleteSvInfo {
        EPHEMERIS,
        ALMANAC,
    }
    enum LocEventRegistrationFlag {
        POSITION_REPORT,
        GNSS_SATELLITE_INFO,
        NMEA,
        NI_NOTIFY_VERIFY_REQUEST,
        INJECT_TIME_REQUEST,
        INJECT_PREDICTED_ORBITS_REQUEST,
        INJECT_POSITION_REQUEST,
        ENGINE_STATE,
        FIX_SESSION_STATE,
        WIFI_REQUEST,
        SENSOR_STREAMING_READY_STATUS,
        TIME_SYNC_REQUEST,
        SET_SPI_STREAMING_REPORT,
        LOCATION_SERVER_CONNECTION_REQUEST,
        NI_GEOFENCE_NOTIFICATION,
        GEOFENCE_GENERAL_ALERT,
        GEOFENCE_BREACH_NOTIFICATION,
        PEDOMETER_CONTROL,
        MOTION_DATA_CONTROL,
    }
    export namespace LocInjectedOrbitServerParamUpdate {
        export const $gtype: GObject.GType<LocInjectedOrbitServerParamUpdate>;
    }
    enum LocInjectedOrbitServerParamUpdate {
        INJECT_REQUEST,
        SERVER_UPDATE,
        REFRESH_UPDATE_RATE,
    }
    export namespace LocNmeaType {
        export const $gtype: GObject.GType<LocNmeaType>;
    }
    enum LocNmeaType {
        GGA,
        RMC,
        GSV,
        GSA,
        VTG,
        PQXFI,
        PSTIS,
        ALL,
    }
    export namespace LocSatelliteValidInformation {
        export const $gtype: GObject.GType<LocSatelliteValidInformation>;
    }
    enum LocSatelliteValidInformation {
        SYSTEM,
        GNSS_SATELLITE_ID,
        HEALTH_STATUS,
        PROCESS_STATUS,
        SATELLITE_INFO_MASK,
        ELEVATION,
        AZIMUTH,
        SIGNAL_TO_NOISE_RATIO,
    }
    enum LocSensorDataUsage {
        ACCELEROMETER_USED,
        GYRO_USED,
        AIDED_HEADING,
        AIDED_SPEED,
        AIDED_POSITION,
        AIDED_VELOCITY,
    }
    export namespace LocServerAddressType {
        export const $gtype: GObject.GType<LocServerAddressType>;
    }
    enum LocServerAddressType {
        NONE,
        IPV4,
        IPV6,
        URL,
    }
    export namespace LocTechnologyUsed {
        export const $gtype: GObject.GType<LocTechnologyUsed>;
    }
    enum LocTechnologyUsed {
        SATELLITE,
        CELLULAR,
        WIFI,
        SENSORS,
        REFERENCE_LOCATION,
        INJECTED_POSITION,
        AFLT,
        HYBRID,
    }
    enum NasBandPreference {
        BC_0_A_SYSTEM,
        BC_0_B_SYSTEM,
        BC_1_ALL_BLOCKS,
        BC_2,
        BC_3_A_SYSTEM,
        BC_4_ALL_BLOCKS,
        BC_5_ALL_BLOCKS,
        GSM_DCS_1800,
        GSM_900_EXTENDED,
        GSM_900_PRIMARY,
        BC_6,
        BC_7,
        BC_8,
        BC_9,
        BC_10,
        BC_11,
        GSM_450,
        GSM_480,
        GSM_750,
        GSM_850,
        GSM_900_RAILWAYS,
        GSM_PCS_1900,
        WCDMA_2100,
        WCDMA_PCS_1900,
        WCDMA_DCS_1800,
        WCDMA_1700_US,
        WCDMA_850_US,
        WCDMA_800,
        BC_12,
        BC_14,
        BC_15,
        WCDMA_2600,
        WCDMA_900,
        WCDMA_1700_JAPAN,
        BC_16,
        BC_17,
        BC_18,
        BC_19,
        WCDMA_850_JAPAN,
        WCDMA_1500,
    }
    class NasLteBandPreference {
        static $gtype: GObject.GType<NasLteBandPreference>;
        static "1": number;
        static "2": number;
        static "3": number;
        static "4": number;
        static "5": number;
        static "6": number;
        static "7": number;
        static "8": number;
        static "9": number;
        static "10": number;
        static "11": number;
        static "12": number;
        static "13": number;
        static "14": number;
        static "17": number;
        static "18": number;
        static "19": number;
        static "20": number;
        static "21": number;
        static "24": number;
        static "25": number;
        static "26": number;
        static "27": number;
        static "28": number;
        static "29": number;
        static "30": number;
        static "31": number;
        static "32": number;
        static "33": number;
        static "34": number;
        static "35": number;
        static "36": number;
        static "37": number;
        static "38": number;
        static "39": number;
        static "40": number;
        static "41": number;
        static "42": number;
        static "43": number;
    }
    export namespace NasNetworkNameDisplayCondition {
        export const $gtype: GObject.GType<NasNetworkNameDisplayCondition>;
    }
    enum NasNetworkNameDisplayCondition {
        REGISTERED_PLMN_IF_KNOWN_NETWORK,
        SPN_NOT_REQUIRED_IF_UNKNOWN_NETWORK,
    }
    export namespace NasNetworkScanType {
        export const $gtype: GObject.GType<NasNetworkScanType>;
    }
    enum NasNetworkScanType {
        GSM,
        UMTS,
        LTE,
        TD_SCDMA,
        "5GNR",
    }
    export namespace NasNetworkStatus {
        export const $gtype: GObject.GType<NasNetworkStatus>;
    }
    enum NasNetworkStatus {
        CURRENT_SERVING,
        AVAILABLE,
        HOME,
        ROAMING,
        FORBIDDEN,
        NOT_FORBIDDEN,
        PREFERRED,
        NOT_PREFERRED,
    }
    export namespace NasPlmnAccessTechnologyIdentifier {
        export const $gtype: GObject.GType<NasPlmnAccessTechnologyIdentifier>;
    }
    enum NasPlmnAccessTechnologyIdentifier {
        UNSPECIFIED,
        GSM_COMPACT,
        GSM,
        NGRAN,
        EUTRAN,
        UTRAN,
        ALL,
    }
    export namespace NasRadioTechnologyPreference {
        export const $gtype: GObject.GType<NasRadioTechnologyPreference>;
    }
    enum NasRadioTechnologyPreference {
        AUTO,
        "3GPP2",
        "3GPP",
        AMPS_OR_GSM,
        CDMA_OR_WCDMA,
        HDR,
        LTE,
    }
    export namespace NasRatModePreference {
        export const $gtype: GObject.GType<NasRatModePreference>;
    }
    enum NasRatModePreference {
        CDMA_1X,
        CDMA_1XEVDO,
        GSM,
        UMTS,
        LTE,
        TD_SCDMA,
        "5GNR",
    }
    export namespace NasSignalStrengthRequest {
        export const $gtype: GObject.GType<NasSignalStrengthRequest>;
    }
    enum NasSignalStrengthRequest {
        NONE,
        RSSI,
        ECIO,
        IO,
        SINR,
        ERROR_RATE,
        RSRQ,
        LTE_SNR,
        LTE_RSRP,
    }
    export namespace NasTdScdmaBandPreference {
        export const $gtype: GObject.GType<NasTdScdmaBandPreference>;
    }
    enum NasTdScdmaBandPreference {
        A,
        B,
        C,
        D,
        E,
        F,
    }
    export namespace PbmEmergencyNumberFlags {
        export const $gtype: GObject.GType<PbmEmergencyNumberFlags>;
    }
    enum PbmEmergencyNumberFlags {
        POLICE,
        AMBULANCE,
        FIRE_BRIGADE,
        MARINE_GUARD,
        MOUNTAIN_RESCUE,
        MANUAL_ECALL,
        AUTOMATIC_ECALL,
        SPARE,
    }
    export namespace PbmEventRegistrationFlag {
        export const $gtype: GObject.GType<PbmEventRegistrationFlag>;
    }
    enum PbmEventRegistrationFlag {
        RECORD_UPDATE,
        PHONEBOOK_READY,
        EMERGENCY_NUMBER_LIST,
        HIDDEN_RECORD_STATUS,
        AAS_UPDATE,
        GAS_UPDATE,
    }
    export namespace PbmPhonebookType {
        export const $gtype: GObject.GType<PbmPhonebookType>;
    }
    enum PbmPhonebookType {
        ADN,
        FDN,
        MSISDN,
        MBDN,
        SDN,
        BDN,
        LND,
        MBN,
    }
    export namespace PdsDataValid {
        export const $gtype: GObject.GType<PdsDataValid>;
    }
    enum PdsDataValid {
        TIMESTAMP_CALENDAR,
        TIMESTAMP_UTC,
        LEAP_SECONDS,
        TIME_UNCERTAINTY,
        LATITUDE,
        LONGITUDE,
        ELLIPSOID_ALTITUDE,
        MEAN_SEA_LEVEL_ALTITUDE,
        HORIZONTAL_SPEED,
        VERTICAL_SPEED,
        HEADING,
        HORIZONTAL_UNCERTAINTY_CIRCULAR,
        HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MAJOR,
        HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MINOR,
        HORIZONTAL_UNCERTAINTY_ELLIPSE_ORIENT_AZIMUTH,
        VERTICAL_UNCERTAINTY,
        HORIZONTAL_VELOCITY_UNCERTAINTY,
        VERTICAL_VELOCITY_UNCERTAINTY,
        HORIZONTAL_CONFIDENCE,
        POSITION_DOP,
        HORIZONTAL_DOP,
        VERTICAL_DOP,
        OPERATING_MODE,
    }
    enum ServiceFlag {
        NONE,
        COMPOUND,
        RESPONSE,
        INDICATION,
    }
    export namespace UimConfiguration {
        export const $gtype: GObject.GType<UimConfiguration>;
    }
    enum UimConfiguration {
        AUTOMATIC_SELECTION,
        PERSONALIZATION_STATUS,
        HALT_SUBSCRIPTION,
    }
    export namespace UimEventRegistrationFlag {
        export const $gtype: GObject.GType<UimEventRegistrationFlag>;
    }
    enum UimEventRegistrationFlag {
        CARD_STATUS,
        SAP_CONNECTION,
        EXTENDED_CARD_STATUS,
        PHYSICAL_SLOT_STATUS,
    }
    export namespace UimSecurityAttribute {
        export const $gtype: GObject.GType<UimSecurityAttribute>;
    }
    enum UimSecurityAttribute {
        PIN1,
        PIN2,
        UPIN,
        ADM,
    }
    export namespace VoiceWcdmaAmrStatus {
        export const $gtype: GObject.GType<VoiceWcdmaAmrStatus>;
    }
    enum VoiceWcdmaAmrStatus {
        NOT_SUPPORTED,
        WCDMA_AMR_WB,
        GSM_HR_AMR,
        GSM_AMR_WB,
        GSM_AMR_NB,
    }
    enum WdsApnTypeMask {
        DEFAULT,
        IMS,
        MMS,
        DUN,
        SUPL,
        HIPRI,
        FOTA,
        CBS,
        IA,
        EMERGENCY,
        UT,
        MCX,
    }
    export namespace WdsAuthentication {
        export const $gtype: GObject.GType<WdsAuthentication>;
    }
    enum WdsAuthentication {
        NONE,
        PAP,
        CHAP,
    }
    export namespace WdsExtendedDataBearerTechnology3gpp {
        export const $gtype: GObject.GType<WdsExtendedDataBearerTechnology3gpp>;
    }
    enum WdsExtendedDataBearerTechnology3gpp {
        UNKNOWN,
        WCDMA,
        HSDPA,
        HSUPA,
        HSDPA_PLUS,
        DC_HSDPA_PLUS,
        "64QAM",
        HSPA,
        GPRS,
        EDGE,
        GSM,
        S2B,
        LTE_LIMITED_SERVICE,
        LTE_FDD,
        LTE_TDD,
    }
    export namespace WdsExtendedDataBearerTechnology3gpp2 {
        export const $gtype: GObject.GType<WdsExtendedDataBearerTechnology3gpp2>;
    }
    enum WdsExtendedDataBearerTechnology3gpp2 {
        UNKNOWN,
        RESERVED,
        CDMA1X_IS95,
        CDMA1X_IS2000,
        CDMA1X_IS2000_REL_A,
        HDR_REV_0_DPA,
        HDR_REV_A_DPA,
        HDR_REV_B_DPA,
        HDR_REV_A_MPA,
        HDR_REV_B_MPA,
        HDR_REV_A_EMPA,
        HDR_REV_B_EMPA,
        HDR_REV_B_MMPA,
        HDR_EVDO_FMC,
    }
    export namespace WdsPacketStatisticsMaskFlag {
        export const $gtype: GObject.GType<WdsPacketStatisticsMaskFlag>;
    }
    enum WdsPacketStatisticsMaskFlag {
        TX_PACKETS_OK,
        RX_PACKETS_OK,
        TX_PACKETS_ERROR,
        RX_PACKETS_ERROR,
        TX_OVERFLOWS,
        RX_OVERFLOWS,
        TX_BYTES_OK,
        RX_BYTES_OK,
        TX_PACKETS_DROPPED,
        RX_PACKETS_DROPPED,
    }
    export namespace WdsRat3gpp {
        export const $gtype: GObject.GType<WdsRat3gpp>;
    }
    enum WdsRat3gpp {
        NONE,
        WCDMA,
        GPRS,
        HSDPA,
        HSUPA,
        EDGE,
        LTE,
        HSDPAPLUS,
        DCHSDPAPLUS,
        "64QAM",
        TDSCDMA,
        "5GNR",
        NULL_BEARER,
    }
    export namespace WdsRat3gpp2 {
        export const $gtype: GObject.GType<WdsRat3gpp2>;
    }
    enum WdsRat3gpp2 {
        NONE,
        CDMA1X,
        EVDO_REV0,
        EVDO_REVA,
        EVDO_REVB,
        EHRPD,
        FMC,
        NULL_BEARER,
    }
    export namespace WdsRequestedSettings {
        export const $gtype: GObject.GType<WdsRequestedSettings>;
    }
    enum WdsRequestedSettings {
        NONE,
        PROFILE_ID,
        PROFILE_NAME,
        PDP_TYPE,
        APN_NAME,
        DNS_ADDRESS,
        GRANTED_QOS,
        USERNAME,
        AUTH_PROTOCOL,
        IP_ADDRESS,
        GATEWAY_INFO,
        PCSCF_ADDRESS,
        PCSCF_SERVER_ADDRESS_LIST,
        PCSCF_DOMAIN_NAME_LIST,
        MTU,
        DOMAIN_NAME_LIST,
        IP_FAMILY,
        IMCN_FLAG,
        EXTENDED_TECHNOLOGY,
        OPERATOR_RESERVED_PCO,
    }
    export namespace WdsSetEventReportTransferStatistics {
        export const $gtype: GObject.GType<WdsSetEventReportTransferStatistics>;
    }
    enum WdsSetEventReportTransferStatistics {
        TX_PACKETS_OK,
        RX_PACKETS_OK,
        TX_PACKETS_ERROR,
        RX_PACKETS_ERROR,
        TX_OVERFLOWS,
        RX_OVERFLOWS,
        TX_BYTES_OK,
        RX_BYTES_OK,
        TX_PACKETS_DROPPED,
        RX_PACKETS_DROPPED,
    }
    export namespace WdsSoCdma1x {
        export const $gtype: GObject.GType<WdsSoCdma1x>;
    }
    enum WdsSoCdma1x {
        NONE,
        IS95,
        IS2000,
        IS2000_REL_A,
    }
    export namespace WdsSoEvdoRev0 {
        export const $gtype: GObject.GType<WdsSoEvdoRev0>;
    }
    enum WdsSoEvdoRev0 {
        NONE,
        DPA,
    }
    export namespace WdsSoEvdoRevA {
        export const $gtype: GObject.GType<WdsSoEvdoRevA>;
    }
    enum WdsSoEvdoRevA {
        NONE,
        DPA,
        MFPA,
        EMPA,
        EMPA_EHRPD,
    }
    export namespace WdsSoEvdoRevB {
        export const $gtype: GObject.GType<WdsSoEvdoRevB>;
    }
    enum WdsSoEvdoRevB {
        NONE,
        DPA,
        MFPA,
        EMPA,
        EMPA_EHRPD,
        MMPA,
        MMPA_EHRPD,
    }
    export namespace WdsTechnologyPreference {
        export const $gtype: GObject.GType<WdsTechnologyPreference>;
    }
    enum WdsTechnologyPreference {
        "3GPP",
        "3GPP2",
    }
    namespace Client {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client_cid: number;
            clientCid: number;
            client_device: Device;
            clientDevice: Device;
            client_service: Service;
            clientService: Service;
            client_valid: boolean;
            clientValid: boolean;
            client_version_major: number;
            clientVersionMajor: number;
            client_version_minor: number;
            clientVersionMinor: number;
        }
    }
    abstract class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        get client_cid(): number;
        set client_cid(val: number);
        get clientCid(): number;
        set clientCid(val: number);
        get client_device(): Device;
        set client_device(val: Device);
        get clientDevice(): Device;
        set clientDevice(val: Device);
        get client_service(): Service;
        set client_service(val: Service);
        get clientService(): Service;
        set clientService(val: Service);
        get client_valid(): boolean;
        get clientValid(): boolean;
        get client_version_major(): number;
        set client_version_major(val: number);
        get clientVersionMajor(): number;
        set clientVersionMajor(val: number);
        get client_version_minor(): number;
        set client_version_minor(val: number);
        get clientVersionMinor(): number;
        set clientVersionMinor(val: number);
        $signals: Client.SignalSignatures;
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_process_indication(message: Message): void;
        check_version(major: number, minor: number): boolean;
        get_cid(): number;
        get_device<T = GObject.Object>(): T;
        get_next_transaction_id(): number;
        get_service(): Service;
        get_version(major: number, minor: number): boolean;
        is_valid(): boolean;
        peek_device<T = GObject.Object>(): T;
    }
    namespace ClientAtr {
        interface SignalSignatures extends Client.SignalSignatures {
            received: (arg0: IndicationAtrReceivedOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientAtr extends Client {
        static $gtype: GObject.GType<ClientAtr>;
        $signals: ClientAtr.SignalSignatures;
        constructor(properties?: Partial<ClientAtr.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientAtr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientAtr.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientAtr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientAtr.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientAtr.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientAtr.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        send(input: MessageAtrSendInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageAtrSendOutput>;
        send(input: MessageAtrSendInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send(input: MessageAtrSendInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageAtrSendOutput> | void;
        send_finish(res: Gio.AsyncResult): MessageAtrSendOutput;
    }
    namespace ClientDms {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationDmsEventReportOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientDms extends Client {
        static $gtype: GObject.GType<ClientDms>;
        $signals: ClientDms.SignalSignatures;
        constructor(properties?: Partial<ClientDms.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientDms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDms.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientDms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDms.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientDms.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientDms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        activate_automatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsActivateAutomaticOutput>;
        activate_automatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate_automatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsActivateAutomaticOutput> | void;
        activate_automatic_finish(res: Gio.AsyncResult): MessageDmsActivateAutomaticOutput;
        activate_manual(input: MessageDmsActivateManualInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsActivateManualOutput>;
        activate_manual(input: MessageDmsActivateManualInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate_manual(input: MessageDmsActivateManualInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsActivateManualOutput> | void;
        activate_manual_finish(res: Gio.AsyncResult): MessageDmsActivateManualOutput;
        delete_stored_image(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsDeleteStoredImageOutput>;
        delete_stored_image(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_stored_image(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsDeleteStoredImageOutput> | void;
        delete_stored_image_finish(res: Gio.AsyncResult): MessageDmsDeleteStoredImageOutput;
        foxconn_change_device_mode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsFoxconnChangeDeviceModeOutput>;
        foxconn_change_device_mode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        foxconn_change_device_mode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsFoxconnChangeDeviceModeOutput> | void;
        foxconn_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput;
        foxconn_get_firmware_version(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsFoxconnGetFirmwareVersionOutput>;
        foxconn_get_firmware_version(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        foxconn_get_firmware_version(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsFoxconnGetFirmwareVersionOutput> | void;
        foxconn_get_firmware_version_finish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput;
        foxconn_set_fcc_authentication(input: MessageDmsFoxconnSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsFoxconnSetFccAuthenticationOutput>;
        foxconn_set_fcc_authentication(input: MessageDmsFoxconnSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        foxconn_set_fcc_authentication(input: MessageDmsFoxconnSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsFoxconnSetFccAuthenticationOutput> | void;
        foxconn_set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsFoxconnSetFccAuthenticationOutput;
        foxconn_set_fcc_authentication_v2(input: MessageDmsFoxconnSetFccAuthenticationV2Input, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsFoxconnSetFccAuthenticationV2Output>;
        foxconn_set_fcc_authentication_v2(input: MessageDmsFoxconnSetFccAuthenticationV2Input, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        foxconn_set_fcc_authentication_v2(input: MessageDmsFoxconnSetFccAuthenticationV2Input, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsFoxconnSetFccAuthenticationV2Output> | void;
        foxconn_set_fcc_authentication_v2_finish(res: Gio.AsyncResult): MessageDmsFoxconnSetFccAuthenticationV2Output;
        get_activation_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetActivationStateOutput>;
        get_activation_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_activation_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetActivationStateOutput> | void;
        get_activation_state_finish(res: Gio.AsyncResult): MessageDmsGetActivationStateOutput;
        get_alt_net_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetAltNetConfigOutput>;
        get_alt_net_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_alt_net_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetAltNetConfigOutput> | void;
        get_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsGetAltNetConfigOutput;
        get_band_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetBandCapabilitiesOutput>;
        get_band_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_band_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetBandCapabilitiesOutput> | void;
        get_band_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetBandCapabilitiesOutput;
        get_boot_image_download_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetBootImageDownloadModeOutput>;
        get_boot_image_download_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_boot_image_download_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetBootImageDownloadModeOutput> | void;
        get_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsGetBootImageDownloadModeOutput;
        get_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetCapabilitiesOutput>;
        get_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetCapabilitiesOutput> | void;
        get_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetCapabilitiesOutput;
        get_factory_sku(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetFactorySkuOutput>;
        get_factory_sku(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_factory_sku(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetFactorySkuOutput> | void;
        get_factory_sku_finish(res: Gio.AsyncResult): MessageDmsGetFactorySkuOutput;
        get_firmware_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetFirmwarePreferenceOutput>;
        get_firmware_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_firmware_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetFirmwarePreferenceOutput> | void;
        get_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsGetFirmwarePreferenceOutput;
        get_hardware_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetHardwareRevisionOutput>;
        get_hardware_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_hardware_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetHardwareRevisionOutput> | void;
        get_hardware_revision_finish(res: Gio.AsyncResult): MessageDmsGetHardwareRevisionOutput;
        get_ids(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetIdsOutput>;
        get_ids(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_ids(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetIdsOutput> | void;
        get_ids_finish(res: Gio.AsyncResult): MessageDmsGetIdsOutput;
        get_mac_address(input: MessageDmsGetMacAddressInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetMacAddressOutput>;
        get_mac_address(input: MessageDmsGetMacAddressInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_mac_address(input: MessageDmsGetMacAddressInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetMacAddressOutput> | void;
        get_mac_address_finish(res: Gio.AsyncResult): MessageDmsGetMacAddressOutput;
        get_manufacturer(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetManufacturerOutput>;
        get_manufacturer(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_manufacturer(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetManufacturerOutput> | void;
        get_manufacturer_finish(res: Gio.AsyncResult): MessageDmsGetManufacturerOutput;
        get_model(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetModelOutput>;
        get_model(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_model(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetModelOutput> | void;
        get_model_finish(res: Gio.AsyncResult): MessageDmsGetModelOutput;
        get_msisdn(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetMsisdnOutput>;
        get_msisdn(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_msisdn(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetMsisdnOutput> | void;
        get_msisdn_finish(res: Gio.AsyncResult): MessageDmsGetMsisdnOutput;
        get_operating_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetOperatingModeOutput>;
        get_operating_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_operating_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetOperatingModeOutput> | void;
        get_operating_mode_finish(res: Gio.AsyncResult): MessageDmsGetOperatingModeOutput;
        get_power_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetPowerStateOutput>;
        get_power_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_power_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetPowerStateOutput> | void;
        get_power_state_finish(res: Gio.AsyncResult): MessageDmsGetPowerStateOutput;
        get_prl_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetPrlVersionOutput>;
        get_prl_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_prl_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetPrlVersionOutput> | void;
        get_prl_version_finish(res: Gio.AsyncResult): MessageDmsGetPrlVersionOutput;
        get_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetRevisionOutput>;
        get_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_revision(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetRevisionOutput> | void;
        get_revision_finish(res: Gio.AsyncResult): MessageDmsGetRevisionOutput;
        get_software_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetSoftwareVersionOutput>;
        get_software_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_software_version(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetSoftwareVersionOutput> | void;
        get_software_version_finish(res: Gio.AsyncResult): MessageDmsGetSoftwareVersionOutput;
        get_stored_image_info(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetStoredImageInfoOutput>;
        get_stored_image_info(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_stored_image_info(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetStoredImageInfoOutput> | void;
        get_stored_image_info_finish(res: Gio.AsyncResult): MessageDmsGetStoredImageInfoOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageDmsGetSupportedMessagesOutput;
        get_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetTimeOutput>;
        get_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetTimeOutput> | void;
        get_time_finish(res: Gio.AsyncResult): MessageDmsGetTimeOutput;
        get_user_lock_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsGetUserLockStateOutput>;
        get_user_lock_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_user_lock_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsGetUserLockStateOutput> | void;
        get_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsGetUserLockStateOutput;
        hp_change_device_mode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsHpChangeDeviceModeOutput>;
        hp_change_device_mode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        hp_change_device_mode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsHpChangeDeviceModeOutput> | void;
        hp_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsHpChangeDeviceModeOutput;
        list_stored_images(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsListStoredImagesOutput>;
        list_stored_images(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_stored_images(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsListStoredImagesOutput> | void;
        list_stored_images_finish(res: Gio.AsyncResult): MessageDmsListStoredImagesOutput;
        read_eri_file(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsReadEriFileOutput>;
        read_eri_file(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        read_eri_file(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsReadEriFileOutput> | void;
        read_eri_file_finish(res: Gio.AsyncResult): MessageDmsReadEriFileOutput;
        read_user_data(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsReadUserDataOutput>;
        read_user_data(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        read_user_data(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsReadUserDataOutput> | void;
        read_user_data_finish(res: Gio.AsyncResult): MessageDmsReadUserDataOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageDmsResetOutput;
        restore_factory_defaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsRestoreFactoryDefaultsOutput>;
        restore_factory_defaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        restore_factory_defaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsRestoreFactoryDefaultsOutput> | void;
        restore_factory_defaults_finish(res: Gio.AsyncResult): MessageDmsRestoreFactoryDefaultsOutput;
        set_alt_net_config(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetAltNetConfigOutput>;
        set_alt_net_config(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_alt_net_config(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetAltNetConfigOutput> | void;
        set_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsSetAltNetConfigOutput;
        set_boot_image_download_mode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetBootImageDownloadModeOutput>;
        set_boot_image_download_mode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_boot_image_download_mode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetBootImageDownloadModeOutput> | void;
        set_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsSetBootImageDownloadModeOutput;
        set_event_report(input: MessageDmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetEventReportOutput>;
        set_event_report(input: MessageDmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessageDmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessageDmsSetEventReportOutput;
        set_fcc_authentication(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetFccAuthenticationOutput>;
        set_fcc_authentication(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_fcc_authentication(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetFccAuthenticationOutput> | void;
        set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsSetFccAuthenticationOutput;
        set_firmware_id(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetFirmwareIdOutput>;
        set_firmware_id(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_firmware_id(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetFirmwareIdOutput> | void;
        set_firmware_id_finish(res: Gio.AsyncResult): MessageDmsSetFirmwareIdOutput;
        set_firmware_preference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetFirmwarePreferenceOutput>;
        set_firmware_preference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_firmware_preference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetFirmwarePreferenceOutput> | void;
        set_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsSetFirmwarePreferenceOutput;
        set_operating_mode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetOperatingModeOutput>;
        set_operating_mode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_operating_mode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetOperatingModeOutput> | void;
        set_operating_mode_finish(res: Gio.AsyncResult): MessageDmsSetOperatingModeOutput;
        set_service_programming_code(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetServiceProgrammingCodeOutput>;
        set_service_programming_code(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_service_programming_code(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetServiceProgrammingCodeOutput> | void;
        set_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsSetServiceProgrammingCodeOutput;
        set_time(input: MessageDmsSetTimeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetTimeOutput>;
        set_time(input: MessageDmsSetTimeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_time(input: MessageDmsSetTimeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetTimeOutput> | void;
        set_time_finish(res: Gio.AsyncResult): MessageDmsSetTimeOutput;
        set_user_lock_code(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetUserLockCodeOutput>;
        set_user_lock_code(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_user_lock_code(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetUserLockCodeOutput> | void;
        set_user_lock_code_finish(res: Gio.AsyncResult): MessageDmsSetUserLockCodeOutput;
        set_user_lock_state(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSetUserLockStateOutput>;
        set_user_lock_state(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_user_lock_state(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSetUserLockStateOutput> | void;
        set_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsSetUserLockStateOutput;
        swi_get_current_firmware(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSwiGetCurrentFirmwareOutput>;
        swi_get_current_firmware(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_get_current_firmware(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSwiGetCurrentFirmwareOutput> | void;
        swi_get_current_firmware_finish(res: Gio.AsyncResult): MessageDmsSwiGetCurrentFirmwareOutput;
        swi_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSwiGetUsbCompositionOutput>;
        swi_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSwiGetUsbCompositionOutput> | void;
        swi_get_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiGetUsbCompositionOutput;
        swi_set_usb_composition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsSwiSetUsbCompositionOutput>;
        swi_set_usb_composition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_set_usb_composition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsSwiSetUsbCompositionOutput> | void;
        swi_set_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiSetUsbCompositionOutput;
        uim_change_pin(input: MessageDmsUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimChangePinOutput>;
        uim_change_pin(input: MessageDmsUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_change_pin(input: MessageDmsUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimChangePinOutput> | void;
        uim_change_pin_finish(res: Gio.AsyncResult): MessageDmsUimChangePinOutput;
        uim_get_ck_status(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimGetCkStatusOutput>;
        uim_get_ck_status(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_get_ck_status(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimGetCkStatusOutput> | void;
        uim_get_ck_status_finish(res: Gio.AsyncResult): MessageDmsUimGetCkStatusOutput;
        uim_get_iccid(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimGetIccidOutput>;
        uim_get_iccid(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_get_iccid(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimGetIccidOutput> | void;
        uim_get_iccid_finish(res: Gio.AsyncResult): MessageDmsUimGetIccidOutput;
        uim_get_imsi(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimGetImsiOutput>;
        uim_get_imsi(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_get_imsi(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimGetImsiOutput> | void;
        uim_get_imsi_finish(res: Gio.AsyncResult): MessageDmsUimGetImsiOutput;
        uim_get_pin_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimGetPinStatusOutput>;
        uim_get_pin_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_get_pin_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimGetPinStatusOutput> | void;
        uim_get_pin_status_finish(res: Gio.AsyncResult): MessageDmsUimGetPinStatusOutput;
        uim_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimGetStateOutput>;
        uim_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimGetStateOutput> | void;
        uim_get_state_finish(res: Gio.AsyncResult): MessageDmsUimGetStateOutput;
        uim_set_ck_protection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimSetCkProtectionOutput>;
        uim_set_ck_protection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_set_ck_protection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimSetCkProtectionOutput> | void;
        uim_set_ck_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetCkProtectionOutput;
        uim_set_pin_protection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimSetPinProtectionOutput>;
        uim_set_pin_protection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_set_pin_protection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimSetPinProtectionOutput> | void;
        uim_set_pin_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetPinProtectionOutput;
        uim_unblock_ck(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimUnblockCkOutput>;
        uim_unblock_ck(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_unblock_ck(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimUnblockCkOutput> | void;
        uim_unblock_ck_finish(res: Gio.AsyncResult): MessageDmsUimUnblockCkOutput;
        uim_unblock_pin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimUnblockPinOutput>;
        uim_unblock_pin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_unblock_pin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimUnblockPinOutput> | void;
        uim_unblock_pin_finish(res: Gio.AsyncResult): MessageDmsUimUnblockPinOutput;
        uim_verify_pin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsUimVerifyPinOutput>;
        uim_verify_pin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uim_verify_pin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsUimVerifyPinOutput> | void;
        uim_verify_pin_finish(res: Gio.AsyncResult): MessageDmsUimVerifyPinOutput;
        validate_service_programming_code(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsValidateServiceProgrammingCodeOutput>;
        validate_service_programming_code(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        validate_service_programming_code(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsValidateServiceProgrammingCodeOutput> | void;
        validate_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsValidateServiceProgrammingCodeOutput;
        write_user_data(input: MessageDmsWriteUserDataInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDmsWriteUserDataOutput>;
        write_user_data(input: MessageDmsWriteUserDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        write_user_data(input: MessageDmsWriteUserDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDmsWriteUserDataOutput> | void;
        write_user_data_finish(res: Gio.AsyncResult): MessageDmsWriteUserDataOutput;
    }
    namespace ClientDpm {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientDpm extends Client {
        static $gtype: GObject.GType<ClientDpm>;
        $signals: ClientDpm.SignalSignatures;
        constructor(properties?: Partial<ClientDpm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientDpm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDpm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientDpm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDpm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientDpm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientDpm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        close_port(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDpmClosePortOutput>;
        close_port(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        close_port(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDpmClosePortOutput> | void;
        close_port_finish(res: Gio.AsyncResult): MessageDpmClosePortOutput;
        open_port(input: MessageDpmOpenPortInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDpmOpenPortOutput>;
        open_port(input: MessageDpmOpenPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_port(input: MessageDpmOpenPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDpmOpenPortOutput> | void;
        open_port_finish(res: Gio.AsyncResult): MessageDpmOpenPortOutput;
    }
    namespace ClientDsd {
        interface SignalSignatures extends Client.SignalSignatures {
            "system-status": (arg0: IndicationDsdSystemStatusOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientDsd extends Client {
        static $gtype: GObject.GType<ClientDsd>;
        $signals: ClientDsd.SignalSignatures;
        constructor(properties?: Partial<ClientDsd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientDsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDsd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientDsd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientDsd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientDsd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientDsd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_apn_info(input: MessageDsdGetApnInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDsdGetApnInfoOutput>;
        get_apn_info(input: MessageDsdGetApnInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_apn_info(input: MessageDsdGetApnInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDsdGetApnInfoOutput> | void;
        get_apn_info_finish(res: Gio.AsyncResult): MessageDsdGetApnInfoOutput;
        get_system_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDsdGetSystemStatusOutput>;
        get_system_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_system_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDsdGetSystemStatusOutput> | void;
        get_system_status_finish(res: Gio.AsyncResult): MessageDsdGetSystemStatusOutput;
        set_apn_type(input: MessageDsdSetApnTypeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDsdSetApnTypeOutput>;
        set_apn_type(input: MessageDsdSetApnTypeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_apn_type(input: MessageDsdSetApnTypeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDsdSetApnTypeOutput> | void;
        set_apn_type_finish(res: Gio.AsyncResult): MessageDsdSetApnTypeOutput;
        system_status_change(input: MessageDsdSystemStatusChangeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageDsdSystemStatusChangeOutput>;
        system_status_change(input: MessageDsdSystemStatusChangeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        system_status_change(input: MessageDsdSystemStatusChangeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageDsdSystemStatusChangeOutput> | void;
        system_status_change_finish(res: Gio.AsyncResult): MessageDsdSystemStatusChangeOutput;
    }
    namespace ClientFox {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientFox extends Client {
        static $gtype: GObject.GType<ClientFox>;
        $signals: ClientFox.SignalSignatures;
        constructor(properties?: Partial<ClientFox.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientFox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientFox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientFox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientFox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientFox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientFox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_firmware_version(input: MessageFoxGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageFoxGetFirmwareVersionOutput>;
        get_firmware_version(input: MessageFoxGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_firmware_version(input: MessageFoxGetFirmwareVersionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageFoxGetFirmwareVersionOutput> | void;
        get_firmware_version_finish(res: Gio.AsyncResult): MessageFoxGetFirmwareVersionOutput;
        set_fcc_authentication(input: MessageFoxSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageFoxSetFccAuthenticationOutput>;
        set_fcc_authentication(input: MessageFoxSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_fcc_authentication(input: MessageFoxSetFccAuthenticationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageFoxSetFccAuthenticationOutput> | void;
        set_fcc_authentication_finish(res: Gio.AsyncResult): MessageFoxSetFccAuthenticationOutput;
    }
    namespace ClientGas {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientGas extends Client {
        static $gtype: GObject.GType<ClientGas>;
        $signals: ClientGas.SignalSignatures;
        constructor(properties?: Partial<ClientGas.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientGas.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientGas.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientGas.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientGas.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientGas.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientGas.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dms_get_ethernet_pdu_mac_address(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsGetEthernetPduMacAddressOutput>;
        dms_get_ethernet_pdu_mac_address(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_get_ethernet_pdu_mac_address(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsGetEthernetPduMacAddressOutput> | void;
        dms_get_ethernet_pdu_mac_address_finish(res: Gio.AsyncResult): MessageGasDmsGetEthernetPduMacAddressOutput;
        dms_get_firmware_auto_sim(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsGetFirmwareAutoSimOutput>;
        dms_get_firmware_auto_sim(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_get_firmware_auto_sim(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsGetFirmwareAutoSimOutput> | void;
        dms_get_firmware_auto_sim_finish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareAutoSimOutput;
        dms_get_firmware_list(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsGetFirmwareListOutput>;
        dms_get_firmware_list(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_get_firmware_list(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsGetFirmwareListOutput> | void;
        dms_get_firmware_list_finish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareListOutput;
        dms_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsGetUsbCompositionOutput>;
        dms_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_get_usb_composition(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsGetUsbCompositionOutput> | void;
        dms_get_usb_composition_finish(res: Gio.AsyncResult): MessageGasDmsGetUsbCompositionOutput;
        dms_set_active_firmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsSetActiveFirmwareOutput>;
        dms_set_active_firmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_set_active_firmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsSetActiveFirmwareOutput> | void;
        dms_set_active_firmware_finish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput;
        dms_set_firmware_auto_sim(input: MessageGasDmsSetFirmwareAutoSimInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsSetFirmwareAutoSimOutput>;
        dms_set_firmware_auto_sim(input: MessageGasDmsSetFirmwareAutoSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_set_firmware_auto_sim(input: MessageGasDmsSetFirmwareAutoSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsSetFirmwareAutoSimOutput> | void;
        dms_set_firmware_auto_sim_finish(res: Gio.AsyncResult): MessageGasDmsSetFirmwareAutoSimOutput;
        dms_set_usb_composition(input: MessageGasDmsSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGasDmsSetUsbCompositionOutput>;
        dms_set_usb_composition(input: MessageGasDmsSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dms_set_usb_composition(input: MessageGasDmsSetUsbCompositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGasDmsSetUsbCompositionOutput> | void;
        dms_set_usb_composition_finish(res: Gio.AsyncResult): MessageGasDmsSetUsbCompositionOutput;
    }
    namespace ClientGms {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientGms extends Client {
        static $gtype: GObject.GType<ClientGms>;
        $signals: ClientGms.SignalSignatures;
        constructor(properties?: Partial<ClientGms.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientGms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientGms.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientGms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientGms.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientGms.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientGms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        test_get_value(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGmsTestGetValueOutput>;
        test_get_value(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        test_get_value(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGmsTestGetValueOutput> | void;
        test_get_value_finish(res: Gio.AsyncResult): MessageGmsTestGetValueOutput;
        test_set_value(input: MessageGmsTestSetValueInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageGmsTestSetValueOutput>;
        test_set_value(input: MessageGmsTestSetValueInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        test_set_value(input: MessageGmsTestSetValueInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageGmsTestSetValueOutput> | void;
        test_set_value_finish(res: Gio.AsyncResult): MessageGmsTestSetValueOutput;
    }
    namespace ClientIms {
        interface SignalSignatures extends Client.SignalSignatures {
            "ims-services-enabled-setting": (arg0: IndicationImsImsServicesEnabledSettingOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientIms extends Client {
        static $gtype: GObject.GType<ClientIms>;
        $signals: ClientIms.SignalSignatures;
        constructor(properties?: Partial<ClientIms.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientIms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientIms.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientIms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientIms.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientIms.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientIms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind(input: MessageImsBindInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsBindOutput>;
        bind(input: MessageImsBindInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind(input: MessageImsBindInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsBindOutput> | void;
        bind_finish(res: Gio.AsyncResult): MessageImsBindOutput;
        get_ims_services_enabled_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsGetImsServicesEnabledSettingOutput>;
        get_ims_services_enabled_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_ims_services_enabled_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsGetImsServicesEnabledSettingOutput> | void;
        get_ims_services_enabled_setting_finish(res: Gio.AsyncResult): MessageImsGetImsServicesEnabledSettingOutput;
        set_ims_services_enabled_setting(input: MessageImsSetImsServicesEnabledSettingInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsSetImsServicesEnabledSettingOutput>;
        set_ims_services_enabled_setting(input: MessageImsSetImsServicesEnabledSettingInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_ims_services_enabled_setting(input: MessageImsSetImsServicesEnabledSettingInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsSetImsServicesEnabledSettingOutput> | void;
        set_ims_services_enabled_setting_finish(res: Gio.AsyncResult): MessageImsSetImsServicesEnabledSettingOutput;
    }
    namespace ClientImsa {
        interface SignalSignatures extends Client.SignalSignatures {
            "ims-registration-status-changed": (arg0: IndicationImsaImsRegistrationStatusChangedOutput) => void;
            "ims-services-status-changed": (arg0: IndicationImsaImsServicesStatusChangedOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientImsa extends Client {
        static $gtype: GObject.GType<ClientImsa>;
        $signals: ClientImsa.SignalSignatures;
        constructor(properties?: Partial<ClientImsa.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientImsa.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsa.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientImsa.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsa.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientImsa.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientImsa.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind(input: MessageImsaBindInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsaBindOutput>;
        bind(input: MessageImsaBindInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind(input: MessageImsaBindInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsaBindOutput> | void;
        bind_finish(res: Gio.AsyncResult): MessageImsaBindOutput;
        get_ims_registration_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsaGetImsRegistrationStatusOutput>;
        get_ims_registration_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_ims_registration_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsaGetImsRegistrationStatusOutput> | void;
        get_ims_registration_status_finish(res: Gio.AsyncResult): MessageImsaGetImsRegistrationStatusOutput;
        get_ims_services_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsaGetImsServicesStatusOutput>;
        get_ims_services_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_ims_services_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsaGetImsServicesStatusOutput> | void;
        get_ims_services_status_finish(res: Gio.AsyncResult): MessageImsaGetImsServicesStatusOutput;
        register_indications(input: MessageImsaRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsaRegisterIndicationsOutput>;
        register_indications(input: MessageImsaRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register_indications(input: MessageImsaRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsaRegisterIndicationsOutput> | void;
        register_indications_finish(res: Gio.AsyncResult): MessageImsaRegisterIndicationsOutput;
    }
    namespace ClientImsdcm {
        interface SignalSignatures extends Client.SignalSignatures {
            "pdp-activate": (arg0: IndicationImsdcmPdpActivateOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientImsdcm extends Client {
        static $gtype: GObject.GType<ClientImsdcm>;
        $signals: ClientImsdcm.SignalSignatures;
        constructor(properties?: Partial<ClientImsdcm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientImsdcm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsdcm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientImsdcm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsdcm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientImsdcm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientImsdcm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        pdp_activate_request(input: MessageImsdcmPdpActivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsdcmPdpActivateRequestOutput>;
        pdp_activate_request(input: MessageImsdcmPdpActivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        pdp_activate_request(input: MessageImsdcmPdpActivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsdcmPdpActivateRequestOutput> | void;
        pdp_activate_request_finish(res: Gio.AsyncResult): MessageImsdcmPdpActivateRequestOutput;
        pdp_deactivate_request(input: MessageImsdcmPdpDeactivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImsdcmPdpDeactivateRequestOutput>;
        pdp_deactivate_request(input: MessageImsdcmPdpDeactivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        pdp_deactivate_request(input: MessageImsdcmPdpDeactivateRequestInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImsdcmPdpDeactivateRequestOutput> | void;
        pdp_deactivate_request_finish(res: Gio.AsyncResult): MessageImsdcmPdpDeactivateRequestOutput;
    }
    namespace ClientImsp {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientImsp extends Client {
        static $gtype: GObject.GType<ClientImsp>;
        $signals: ClientImsp.SignalSignatures;
        constructor(properties?: Partial<ClientImsp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientImsp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientImsp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientImsp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientImsp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientImsp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_enabler_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageImspGetEnablerStateOutput>;
        get_enabler_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_enabler_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageImspGetEnablerStateOutput> | void;
        get_enabler_state_finish(res: Gio.AsyncResult): MessageImspGetEnablerStateOutput;
    }
    namespace ClientLoc {
        interface SignalSignatures extends Client.SignalSignatures {
            "delete-assistance-data": (arg0: IndicationLocDeleteAssistanceDataOutput) => void;
            "engine-state": (arg0: IndicationLocEngineStateOutput) => void;
            "fix-recurrence-type": (arg0: IndicationLocFixRecurrenceTypeOutput) => void;
            "get-engine-lock": (arg0: IndicationLocGetEngineLockOutput) => void;
            "get-nmea-types": (arg0: IndicationLocGetNmeaTypesOutput) => void;
            "get-operation-mode": (arg0: IndicationLocGetOperationModeOutput) => void;
            "get-predicted-orbits-data-source": (arg0: IndicationLocGetPredictedOrbitsDataSourceOutput) => void;
            "get-predicted-orbits-data-validity": (arg0: IndicationLocGetPredictedOrbitsDataValidityOutput) => void;
            "get-server": (arg0: IndicationLocGetServerOutput) => void;
            "gnss-sv-info": (arg0: IndicationLocGnssSvInfoOutput) => void;
            "inject-position": (arg0: IndicationLocInjectPositionOutput) => void;
            "inject-position-request": (arg0: IndicationLocInjectPositionRequestOutput) => void;
            "inject-predicted-orbits-data": (arg0: IndicationLocInjectPredictedOrbitsDataOutput) => void;
            "inject-predicted-orbits-request": (arg0: IndicationLocInjectPredictedOrbitsRequestOutput) => void;
            "inject-time-request": (arg0: IndicationLocInjectTimeRequestOutput) => void;
            "inject-utc-time": (arg0: IndicationLocInjectUtcTimeOutput) => void;
            "inject-xtra-data": (arg0: IndicationLocInjectXtraDataOutput) => void;
            nmea: (arg0: IndicationLocNmeaOutput) => void;
            "position-report": (arg0: IndicationLocPositionReportOutput) => void;
            "set-engine-lock": (arg0: IndicationLocSetEngineLockOutput) => void;
            "set-nmea-types": (arg0: IndicationLocSetNmeaTypesOutput) => void;
            "set-operation-mode": (arg0: IndicationLocSetOperationModeOutput) => void;
            "set-server": (arg0: IndicationLocSetServerOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientLoc extends Client {
        static $gtype: GObject.GType<ClientLoc>;
        $signals: ClientLoc.SignalSignatures;
        constructor(properties?: Partial<ClientLoc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientLoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientLoc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientLoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientLoc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientLoc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientLoc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        delete_assistance_data(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocDeleteAssistanceDataOutput>;
        delete_assistance_data(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_assistance_data(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocDeleteAssistanceDataOutput> | void;
        delete_assistance_data_finish(res: Gio.AsyncResult): MessageLocDeleteAssistanceDataOutput;
        get_engine_lock(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetEngineLockOutput>;
        get_engine_lock(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_engine_lock(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetEngineLockOutput> | void;
        get_engine_lock_finish(res: Gio.AsyncResult): MessageLocGetEngineLockOutput;
        get_nmea_types(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetNmeaTypesOutput>;
        get_nmea_types(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_nmea_types(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetNmeaTypesOutput> | void;
        get_nmea_types_finish(res: Gio.AsyncResult): MessageLocGetNmeaTypesOutput;
        get_operation_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetOperationModeOutput>;
        get_operation_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_operation_mode(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetOperationModeOutput> | void;
        get_operation_mode_finish(res: Gio.AsyncResult): MessageLocGetOperationModeOutput;
        get_predicted_orbits_data_source(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetPredictedOrbitsDataSourceOutput>;
        get_predicted_orbits_data_source(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_predicted_orbits_data_source(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetPredictedOrbitsDataSourceOutput> | void;
        get_predicted_orbits_data_source_finish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataSourceOutput;
        get_predicted_orbits_data_validity(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetPredictedOrbitsDataValidityOutput>;
        get_predicted_orbits_data_validity(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_predicted_orbits_data_validity(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetPredictedOrbitsDataValidityOutput> | void;
        get_predicted_orbits_data_validity_finish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataValidityOutput;
        get_server(input: MessageLocGetServerInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocGetServerOutput>;
        get_server(input: MessageLocGetServerInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_server(input: MessageLocGetServerInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocGetServerOutput> | void;
        get_server_finish(res: Gio.AsyncResult): MessageLocGetServerOutput;
        inject_position(input: MessageLocInjectPositionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocInjectPositionOutput>;
        inject_position(input: MessageLocInjectPositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inject_position(input: MessageLocInjectPositionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocInjectPositionOutput> | void;
        inject_position_finish(res: Gio.AsyncResult): MessageLocInjectPositionOutput;
        inject_predicted_orbits_data(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocInjectPredictedOrbitsDataOutput>;
        inject_predicted_orbits_data(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inject_predicted_orbits_data(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocInjectPredictedOrbitsDataOutput> | void;
        inject_predicted_orbits_data_finish(res: Gio.AsyncResult): MessageLocInjectPredictedOrbitsDataOutput;
        inject_utc_time(input: MessageLocInjectUtcTimeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocInjectUtcTimeOutput>;
        inject_utc_time(input: MessageLocInjectUtcTimeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inject_utc_time(input: MessageLocInjectUtcTimeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocInjectUtcTimeOutput> | void;
        inject_utc_time_finish(res: Gio.AsyncResult): MessageLocInjectUtcTimeOutput;
        inject_xtra_data(input: MessageLocInjectXtraDataInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocInjectXtraDataOutput>;
        inject_xtra_data(input: MessageLocInjectXtraDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inject_xtra_data(input: MessageLocInjectXtraDataInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocInjectXtraDataOutput> | void;
        inject_xtra_data_finish(res: Gio.AsyncResult): MessageLocInjectXtraDataOutput;
        register_events(input: MessageLocRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocRegisterEventsOutput>;
        register_events(input: MessageLocRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register_events(input: MessageLocRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocRegisterEventsOutput> | void;
        register_events_finish(res: Gio.AsyncResult): MessageLocRegisterEventsOutput;
        set_engine_lock(input: MessageLocSetEngineLockInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocSetEngineLockOutput>;
        set_engine_lock(input: MessageLocSetEngineLockInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_engine_lock(input: MessageLocSetEngineLockInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocSetEngineLockOutput> | void;
        set_engine_lock_finish(res: Gio.AsyncResult): MessageLocSetEngineLockOutput;
        set_nmea_types(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocSetNmeaTypesOutput>;
        set_nmea_types(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_nmea_types(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocSetNmeaTypesOutput> | void;
        set_nmea_types_finish(res: Gio.AsyncResult): MessageLocSetNmeaTypesOutput;
        set_operation_mode(input: MessageLocSetOperationModeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocSetOperationModeOutput>;
        set_operation_mode(input: MessageLocSetOperationModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_operation_mode(input: MessageLocSetOperationModeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocSetOperationModeOutput> | void;
        set_operation_mode_finish(res: Gio.AsyncResult): MessageLocSetOperationModeOutput;
        set_server(input: MessageLocSetServerInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocSetServerOutput>;
        set_server(input: MessageLocSetServerInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_server(input: MessageLocSetServerInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocSetServerOutput> | void;
        set_server_finish(res: Gio.AsyncResult): MessageLocSetServerOutput;
        start(input: MessageLocStartInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocStartOutput>;
        start(input: MessageLocStartInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start(input: MessageLocStartInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocStartOutput> | void;
        start_finish(res: Gio.AsyncResult): MessageLocStartOutput;
        stop(input: MessageLocStopInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageLocStopOutput>;
        stop(input: MessageLocStopInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        stop(input: MessageLocStopInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageLocStopOutput> | void;
        stop_finish(res: Gio.AsyncResult): MessageLocStopOutput;
    }
    namespace ClientNas {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationNasEventReportOutput) => void;
            "incremental-network-scan": (arg0: IndicationNasIncrementalNetworkScanOutput) => void;
            "network-reject": (arg0: IndicationNasNetworkRejectOutput) => void;
            "network-time": (arg0: IndicationNasNetworkTimeOutput) => void;
            "operator-name": (arg0: IndicationNasOperatorNameOutput) => void;
            "serving-system": (arg0: IndicationNasServingSystemOutput) => void;
            "signal-info": (arg0: IndicationNasSignalInfoOutput) => void;
            "system-info": (arg0: IndicationNasSystemInfoOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientNas extends Client {
        static $gtype: GObject.GType<ClientNas>;
        $signals: ClientNas.SignalSignatures;
        constructor(properties?: Partial<ClientNas.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientNas.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientNas.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientNas.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientNas.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientNas.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientNas.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        attach_detach(input: MessageNasAttachDetachInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasAttachDetachOutput>;
        attach_detach(input: MessageNasAttachDetachInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        attach_detach(input: MessageNasAttachDetachInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasAttachDetachOutput> | void;
        attach_detach_finish(res: Gio.AsyncResult): MessageNasAttachDetachOutput;
        config_signal_info(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasConfigSignalInfoOutput>;
        config_signal_info(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        config_signal_info(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasConfigSignalInfoOutput> | void;
        config_signal_info_finish(res: Gio.AsyncResult): MessageNasConfigSignalInfoOutput;
        config_signal_info_v2(input: MessageNasConfigSignalInfoV2Input, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasConfigSignalInfoV2Output>;
        config_signal_info_v2(input: MessageNasConfigSignalInfoV2Input, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        config_signal_info_v2(input: MessageNasConfigSignalInfoV2Input, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasConfigSignalInfoV2Output> | void;
        config_signal_info_v2_finish(res: Gio.AsyncResult): MessageNasConfigSignalInfoV2Output;
        force_network_search(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasForceNetworkSearchOutput>;
        force_network_search(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        force_network_search(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasForceNetworkSearchOutput> | void;
        force_network_search_finish(res: Gio.AsyncResult): MessageNasForceNetworkSearchOutput;
        get_cdma_position_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetCdmaPositionInfoOutput>;
        get_cdma_position_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_cdma_position_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetCdmaPositionInfoOutput> | void;
        get_cdma_position_info_finish(res: Gio.AsyncResult): MessageNasGetCdmaPositionInfoOutput;
        get_cell_location_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetCellLocationInfoOutput>;
        get_cell_location_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_cell_location_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetCellLocationInfoOutput> | void;
        get_cell_location_info_finish(res: Gio.AsyncResult): MessageNasGetCellLocationInfoOutput;
        get_drx(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetDrxOutput>;
        get_drx(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_drx(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetDrxOutput> | void;
        get_drx_finish(res: Gio.AsyncResult): MessageNasGetDrxOutput;
        get_endc_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetEndcConfigOutput>;
        get_endc_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_endc_config(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetEndcConfigOutput> | void;
        get_endc_config_finish(res: Gio.AsyncResult): MessageNasGetEndcConfigOutput;
        get_home_network(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetHomeNetworkOutput>;
        get_home_network(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_home_network(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetHomeNetworkOutput> | void;
        get_home_network_finish(res: Gio.AsyncResult): MessageNasGetHomeNetworkOutput;
        get_lte_cphy_ca_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetLteCphyCaInfoOutput>;
        get_lte_cphy_ca_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_lte_cphy_ca_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetLteCphyCaInfoOutput> | void;
        get_lte_cphy_ca_info_finish(res: Gio.AsyncResult): MessageNasGetLteCphyCaInfoOutput;
        get_network_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetNetworkTimeOutput>;
        get_network_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_network_time(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetNetworkTimeOutput> | void;
        get_network_time_finish(res: Gio.AsyncResult): MessageNasGetNetworkTimeOutput;
        get_operator_name(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetOperatorNameOutput>;
        get_operator_name(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_operator_name(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetOperatorNameOutput> | void;
        get_operator_name_finish(res: Gio.AsyncResult): MessageNasGetOperatorNameOutput;
        get_plmn_name(input: MessageNasGetPlmnNameInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetPlmnNameOutput>;
        get_plmn_name(input: MessageNasGetPlmnNameInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_plmn_name(input: MessageNasGetPlmnNameInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetPlmnNameOutput> | void;
        get_plmn_name_finish(res: Gio.AsyncResult): MessageNasGetPlmnNameOutput;
        get_preferred_networks(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetPreferredNetworksOutput>;
        get_preferred_networks(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_preferred_networks(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetPreferredNetworksOutput> | void;
        get_preferred_networks_finish(res: Gio.AsyncResult): MessageNasGetPreferredNetworksOutput;
        get_rf_band_information(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetRfBandInformationOutput>;
        get_rf_band_information(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_rf_band_information(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetRfBandInformationOutput> | void;
        get_rf_band_information_finish(res: Gio.AsyncResult): MessageNasGetRfBandInformationOutput;
        get_serving_system(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetServingSystemOutput>;
        get_serving_system(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_serving_system(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetServingSystemOutput> | void;
        get_serving_system_finish(res: Gio.AsyncResult): MessageNasGetServingSystemOutput;
        get_signal_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetSignalInfoOutput>;
        get_signal_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_signal_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetSignalInfoOutput> | void;
        get_signal_info_finish(res: Gio.AsyncResult): MessageNasGetSignalInfoOutput;
        get_signal_strength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetSignalStrengthOutput>;
        get_signal_strength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_signal_strength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetSignalStrengthOutput> | void;
        get_signal_strength_finish(res: Gio.AsyncResult): MessageNasGetSignalStrengthOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageNasGetSupportedMessagesOutput;
        get_system_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetSystemInfoOutput>;
        get_system_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_system_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetSystemInfoOutput> | void;
        get_system_info_finish(res: Gio.AsyncResult): MessageNasGetSystemInfoOutput;
        get_system_selection_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetSystemSelectionPreferenceOutput>;
        get_system_selection_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_system_selection_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetSystemSelectionPreferenceOutput> | void;
        get_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasGetSystemSelectionPreferenceOutput;
        get_technology_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetTechnologyPreferenceOutput>;
        get_technology_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_technology_preference(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetTechnologyPreferenceOutput> | void;
        get_technology_preference_finish(res: Gio.AsyncResult): MessageNasGetTechnologyPreferenceOutput;
        get_tx_rx_info(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasGetTxRxInfoOutput>;
        get_tx_rx_info(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_tx_rx_info(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasGetTxRxInfoOutput> | void;
        get_tx_rx_info_finish(res: Gio.AsyncResult): MessageNasGetTxRxInfoOutput;
        incremental_network_scan(input: MessageNasIncrementalNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasIncrementalNetworkScanOutput>;
        incremental_network_scan(input: MessageNasIncrementalNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        incremental_network_scan(input: MessageNasIncrementalNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasIncrementalNetworkScanOutput> | void;
        incremental_network_scan_finish(res: Gio.AsyncResult): MessageNasIncrementalNetworkScanOutput;
        initiate_network_register(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasInitiateNetworkRegisterOutput>;
        initiate_network_register(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        initiate_network_register(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasInitiateNetworkRegisterOutput> | void;
        initiate_network_register_finish(res: Gio.AsyncResult): MessageNasInitiateNetworkRegisterOutput;
        network_scan(input: MessageNasNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasNetworkScanOutput>;
        network_scan(input: MessageNasNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        network_scan(input: MessageNasNetworkScanInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasNetworkScanOutput> | void;
        network_scan_finish(res: Gio.AsyncResult): MessageNasNetworkScanOutput;
        register_indications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasRegisterIndicationsOutput>;
        register_indications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register_indications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasRegisterIndicationsOutput> | void;
        register_indications_finish(res: Gio.AsyncResult): MessageNasRegisterIndicationsOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageNasResetOutput;
        set_event_report(input: MessageNasSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasSetEventReportOutput>;
        set_event_report(input: MessageNasSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessageNasSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessageNasSetEventReportOutput;
        set_preferred_networks(input: MessageNasSetPreferredNetworksInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasSetPreferredNetworksOutput>;
        set_preferred_networks(input: MessageNasSetPreferredNetworksInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_preferred_networks(input: MessageNasSetPreferredNetworksInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasSetPreferredNetworksOutput> | void;
        set_preferred_networks_finish(res: Gio.AsyncResult): MessageNasSetPreferredNetworksOutput;
        set_system_selection_preference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasSetSystemSelectionPreferenceOutput>;
        set_system_selection_preference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_system_selection_preference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasSetSystemSelectionPreferenceOutput> | void;
        set_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasSetSystemSelectionPreferenceOutput;
        set_technology_preference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasSetTechnologyPreferenceOutput>;
        set_technology_preference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_technology_preference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasSetTechnologyPreferenceOutput> | void;
        set_technology_preference_finish(res: Gio.AsyncResult): MessageNasSetTechnologyPreferenceOutput;
        swi_get_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageNasSwiGetStatusOutput>;
        swi_get_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_get_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageNasSwiGetStatusOutput> | void;
        swi_get_status_finish(res: Gio.AsyncResult): MessageNasSwiGetStatusOutput;
    }
    namespace ClientOma {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationOmaEventReportOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientOma extends Client {
        static $gtype: GObject.GType<ClientOma>;
        $signals: ClientOma.SignalSignatures;
        constructor(properties?: Partial<ClientOma.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientOma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientOma.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientOma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientOma.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientOma.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientOma.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaCancelSessionOutput>;
        cancel_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        cancel_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaCancelSessionOutput> | void;
        cancel_session_finish(res: Gio.AsyncResult): MessageOmaCancelSessionOutput;
        get_feature_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaGetFeatureSettingOutput>;
        get_feature_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_feature_setting(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaGetFeatureSettingOutput> | void;
        get_feature_setting_finish(res: Gio.AsyncResult): MessageOmaGetFeatureSettingOutput;
        get_session_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaGetSessionInfoOutput>;
        get_session_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_session_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaGetSessionInfoOutput> | void;
        get_session_info_finish(res: Gio.AsyncResult): MessageOmaGetSessionInfoOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageOmaResetOutput;
        send_selection(input: MessageOmaSendSelectionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaSendSelectionOutput>;
        send_selection(input: MessageOmaSendSelectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_selection(input: MessageOmaSendSelectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaSendSelectionOutput> | void;
        send_selection_finish(res: Gio.AsyncResult): MessageOmaSendSelectionOutput;
        set_event_report(input: MessageOmaSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaSetEventReportOutput>;
        set_event_report(input: MessageOmaSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessageOmaSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessageOmaSetEventReportOutput;
        set_feature_setting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaSetFeatureSettingOutput>;
        set_feature_setting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_feature_setting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaSetFeatureSettingOutput> | void;
        set_feature_setting_finish(res: Gio.AsyncResult): MessageOmaSetFeatureSettingOutput;
        start_session(input: MessageOmaStartSessionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageOmaStartSessionOutput>;
        start_session(input: MessageOmaStartSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_session(input: MessageOmaStartSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageOmaStartSessionOutput> | void;
        start_session_finish(res: Gio.AsyncResult): MessageOmaStartSessionOutput;
    }
    namespace ClientPbm {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientPbm extends Client {
        static $gtype: GObject.GType<ClientPbm>;
        $signals: ClientPbm.SignalSignatures;
        constructor(properties?: Partial<ClientPbm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientPbm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPbm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientPbm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPbm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientPbm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientPbm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_all_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePbmGetAllCapabilitiesOutput>;
        get_all_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_all_capabilities(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePbmGetAllCapabilitiesOutput> | void;
        get_all_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetAllCapabilitiesOutput;
        get_capabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePbmGetCapabilitiesOutput>;
        get_capabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_capabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePbmGetCapabilitiesOutput> | void;
        get_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetCapabilitiesOutput;
        get_emergency_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePbmGetEmergencyListOutput>;
        get_emergency_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_emergency_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePbmGetEmergencyListOutput> | void;
        get_emergency_list_finish(res: Gio.AsyncResult): MessagePbmGetEmergencyListOutput;
        indication_register(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePbmIndicationRegisterOutput>;
        indication_register(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        indication_register(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePbmIndicationRegisterOutput> | void;
        indication_register_finish(res: Gio.AsyncResult): MessagePbmIndicationRegisterOutput;
    }
    namespace ClientPdc {
        interface SignalSignatures extends Client.SignalSignatures {
            "activate-config": (arg0: IndicationPdcActivateConfigOutput) => void;
            "deactivate-config": (arg0: IndicationPdcDeactivateConfigOutput) => void;
            "get-config-info": (arg0: IndicationPdcGetConfigInfoOutput) => void;
            "get-selected-config": (arg0: IndicationPdcGetSelectedConfigOutput) => void;
            "list-configs": (arg0: IndicationPdcListConfigsOutput) => void;
            "load-config": (arg0: IndicationPdcLoadConfigOutput) => void;
            refresh: (arg0: IndicationPdcRefreshOutput) => void;
            "set-selected-config": (arg0: IndicationPdcSetSelectedConfigOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientPdc extends Client {
        static $gtype: GObject.GType<ClientPdc>;
        $signals: ClientPdc.SignalSignatures;
        constructor(properties?: Partial<ClientPdc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientPdc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPdc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientPdc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPdc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientPdc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientPdc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        activate_config(input: MessagePdcActivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcActivateConfigOutput>;
        activate_config(input: MessagePdcActivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate_config(input: MessagePdcActivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcActivateConfigOutput> | void;
        activate_config_finish(res: Gio.AsyncResult): MessagePdcActivateConfigOutput;
        config_change(input: MessagePdcConfigChangeInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcConfigChangeOutput>;
        config_change(input: MessagePdcConfigChangeInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        config_change(input: MessagePdcConfigChangeInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcConfigChangeOutput> | void;
        config_change_finish(res: Gio.AsyncResult): MessagePdcConfigChangeOutput;
        deactivate_config(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcDeactivateConfigOutput>;
        deactivate_config(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        deactivate_config(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcDeactivateConfigOutput> | void;
        deactivate_config_finish(res: Gio.AsyncResult): MessagePdcDeactivateConfigOutput;
        delete_config(input: MessagePdcDeleteConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcDeleteConfigOutput>;
        delete_config(input: MessagePdcDeleteConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_config(input: MessagePdcDeleteConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcDeleteConfigOutput> | void;
        delete_config_finish(res: Gio.AsyncResult): MessagePdcDeleteConfigOutput;
        get_config_info(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcGetConfigInfoOutput>;
        get_config_info(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_config_info(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcGetConfigInfoOutput> | void;
        get_config_info_finish(res: Gio.AsyncResult): MessagePdcGetConfigInfoOutput;
        get_config_limits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcGetConfigLimitsOutput>;
        get_config_limits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_config_limits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcGetConfigLimitsOutput> | void;
        get_config_limits_finish(res: Gio.AsyncResult): MessagePdcGetConfigLimitsOutput;
        get_default_config_info(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcGetDefaultConfigInfoOutput>;
        get_default_config_info(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_default_config_info(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcGetDefaultConfigInfoOutput> | void;
        get_default_config_info_finish(res: Gio.AsyncResult): MessagePdcGetDefaultConfigInfoOutput;
        get_selected_config(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcGetSelectedConfigOutput>;
        get_selected_config(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_selected_config(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcGetSelectedConfigOutput> | void;
        get_selected_config_finish(res: Gio.AsyncResult): MessagePdcGetSelectedConfigOutput;
        list_configs(input: MessagePdcListConfigsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcListConfigsOutput>;
        list_configs(input: MessagePdcListConfigsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_configs(input: MessagePdcListConfigsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcListConfigsOutput> | void;
        list_configs_finish(res: Gio.AsyncResult): MessagePdcListConfigsOutput;
        load_config(input: MessagePdcLoadConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcLoadConfigOutput>;
        load_config(input: MessagePdcLoadConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        load_config(input: MessagePdcLoadConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcLoadConfigOutput> | void;
        load_config_finish(res: Gio.AsyncResult): MessagePdcLoadConfigOutput;
        register(input: MessagePdcRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcRegisterOutput>;
        register(input: MessagePdcRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register(input: MessagePdcRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcRegisterOutput> | void;
        register_finish(res: Gio.AsyncResult): MessagePdcRegisterOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessagePdcResetOutput;
        set_selected_config(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdcSetSelectedConfigOutput>;
        set_selected_config(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_selected_config(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdcSetSelectedConfigOutput> | void;
        set_selected_config_finish(res: Gio.AsyncResult): MessagePdcSetSelectedConfigOutput;
    }
    namespace ClientPds {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationPdsEventReportOutput) => void;
            "gps-ready": () => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientPds extends Client {
        static $gtype: GObject.GType<ClientPds>;
        $signals: ClientPds.SignalSignatures;
        constructor(properties?: Partial<ClientPds.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientPds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPds.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientPds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientPds.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientPds.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientPds.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_agps_config(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsGetAgpsConfigOutput>;
        get_agps_config(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_agps_config(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsGetAgpsConfigOutput> | void;
        get_agps_config_finish(res: Gio.AsyncResult): MessagePdsGetAgpsConfigOutput;
        get_auto_tracking_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsGetAutoTrackingStateOutput>;
        get_auto_tracking_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_auto_tracking_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsGetAutoTrackingStateOutput> | void;
        get_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsGetAutoTrackingStateOutput;
        get_default_tracking_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsGetDefaultTrackingSessionOutput>;
        get_default_tracking_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_default_tracking_session(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsGetDefaultTrackingSessionOutput> | void;
        get_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsGetDefaultTrackingSessionOutput;
        get_gps_service_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsGetGpsServiceStateOutput>;
        get_gps_service_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_gps_service_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsGetGpsServiceStateOutput> | void;
        get_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsGetGpsServiceStateOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessagePdsResetOutput;
        set_agps_config(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsSetAgpsConfigOutput>;
        set_agps_config(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_agps_config(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsSetAgpsConfigOutput> | void;
        set_agps_config_finish(res: Gio.AsyncResult): MessagePdsSetAgpsConfigOutput;
        set_auto_tracking_state(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsSetAutoTrackingStateOutput>;
        set_auto_tracking_state(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_auto_tracking_state(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsSetAutoTrackingStateOutput> | void;
        set_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsSetAutoTrackingStateOutput;
        set_default_tracking_session(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsSetDefaultTrackingSessionOutput>;
        set_default_tracking_session(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_default_tracking_session(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsSetDefaultTrackingSessionOutput> | void;
        set_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsSetDefaultTrackingSessionOutput;
        set_event_report(input: MessagePdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsSetEventReportOutput>;
        set_event_report(input: MessagePdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessagePdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessagePdsSetEventReportOutput;
        set_gps_service_state(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessagePdsSetGpsServiceStateOutput>;
        set_gps_service_state(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_gps_service_state(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessagePdsSetGpsServiceStateOutput> | void;
        set_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsSetGpsServiceStateOutput;
    }
    namespace ClientQos {
        interface SignalSignatures extends Client.SignalSignatures {
            "flow-status": (arg0: IndicationQosFlowStatusOutput) => void;
            "network-status": (arg0: IndicationQosNetworkStatusOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientQos extends Client {
        static $gtype: GObject.GType<ClientQos>;
        $signals: ClientQos.SignalSignatures;
        constructor(properties?: Partial<ClientQos.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientQos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientQos.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientQos.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientQos.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientQos.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientQos.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind_mux_data_port(input: MessageQosBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosBindMuxDataPortOutput>;
        bind_mux_data_port(input: MessageQosBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind_mux_data_port(input: MessageQosBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosBindMuxDataPortOutput> | void;
        bind_mux_data_port_finish(res: Gio.AsyncResult): MessageQosBindMuxDataPortOutput;
        bind_subscription(input: MessageQosBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosBindSubscriptionOutput>;
        bind_subscription(input: MessageQosBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind_subscription(input: MessageQosBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosBindSubscriptionOutput> | void;
        bind_subscription_finish(res: Gio.AsyncResult): MessageQosBindSubscriptionOutput;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosGetBindSubscriptionOutput>;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosGetBindSubscriptionOutput> | void;
        get_bind_subscription_finish(res: Gio.AsyncResult): MessageQosGetBindSubscriptionOutput;
        get_flow_status(input: MessageQosGetFlowStatusInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosGetFlowStatusOutput>;
        get_flow_status(input: MessageQosGetFlowStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_flow_status(input: MessageQosGetFlowStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosGetFlowStatusOutput> | void;
        get_flow_status_finish(res: Gio.AsyncResult): MessageQosGetFlowStatusOutput;
        get_network_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosGetNetworkStatusOutput>;
        get_network_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_network_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosGetNetworkStatusOutput> | void;
        get_network_status_finish(res: Gio.AsyncResult): MessageQosGetNetworkStatusOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageQosResetOutput;
        swi_read_data_stats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageQosSwiReadDataStatsOutput>;
        swi_read_data_stats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_read_data_stats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageQosSwiReadDataStatsOutput> | void;
        swi_read_data_stats_finish(res: Gio.AsyncResult): MessageQosSwiReadDataStatsOutput;
    }
    namespace ClientSar {
        interface SignalSignatures extends Client.SignalSignatures {
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientSar extends Client {
        static $gtype: GObject.GType<ClientSar>;
        $signals: ClientSar.SignalSignatures;
        constructor(properties?: Partial<ClientSar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientSar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientSar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientSar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientSar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        rf_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageSarRfGetStateOutput>;
        rf_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        rf_get_state(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageSarRfGetStateOutput> | void;
        rf_get_state_finish(res: Gio.AsyncResult): MessageSarRfGetStateOutput;
        rf_set_state(input: MessageSarRfSetStateInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageSarRfSetStateOutput>;
        rf_set_state(input: MessageSarRfSetStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        rf_set_state(input: MessageSarRfSetStateInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageSarRfSetStateOutput> | void;
        rf_set_state_finish(res: Gio.AsyncResult): MessageSarRfSetStateOutput;
    }
    namespace ClientSsc {
        interface SignalSignatures extends Client.SignalSignatures {
            "report-large": (arg0: IndicationSscReportLargeOutput) => void;
            "report-small": (arg0: IndicationSscReportSmallOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientSsc extends Client {
        static $gtype: GObject.GType<ClientSsc>;
        $signals: ClientSsc.SignalSignatures;
        constructor(properties?: Partial<ClientSsc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientSsc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSsc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientSsc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSsc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientSsc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientSsc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        control(input: MessageSscControlInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageSscControlOutput>;
        control(input: MessageSscControlInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        control(input: MessageSscControlInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageSscControlOutput> | void;
        control_finish(res: Gio.AsyncResult): MessageSscControlOutput;
    }
    namespace ClientUim {
        interface SignalSignatures extends Client.SignalSignatures {
            "card-status": (arg0: IndicationUimCardStatusOutput) => void;
            refresh: (arg0: IndicationUimRefreshOutput) => void;
            "slot-status": (arg0: IndicationUimSlotStatusOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientUim extends Client {
        static $gtype: GObject.GType<ClientUim>;
        $signals: ClientUim.SignalSignatures;
        constructor(properties?: Partial<ClientUim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientUim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientUim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientUim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientUim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientUim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientUim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        change_pin(input: MessageUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimChangePinOutput>;
        change_pin(input: MessageUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        change_pin(input: MessageUimChangePinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimChangePinOutput> | void;
        change_pin_finish(res: Gio.AsyncResult): MessageUimChangePinOutput;
        change_provisioning_session(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimChangeProvisioningSessionOutput>;
        change_provisioning_session(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        change_provisioning_session(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimChangeProvisioningSessionOutput> | void;
        change_provisioning_session_finish(res: Gio.AsyncResult): MessageUimChangeProvisioningSessionOutput;
        depersonalization(input: MessageUimDepersonalizationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimDepersonalizationOutput>;
        depersonalization(input: MessageUimDepersonalizationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        depersonalization(input: MessageUimDepersonalizationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimDepersonalizationOutput> | void;
        depersonalization_finish(res: Gio.AsyncResult): MessageUimDepersonalizationOutput;
        get_card_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimGetCardStatusOutput>;
        get_card_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_card_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimGetCardStatusOutput> | void;
        get_card_status_finish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput;
        get_configuration(input: MessageUimGetConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimGetConfigurationOutput>;
        get_configuration(input: MessageUimGetConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_configuration(input: MessageUimGetConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimGetConfigurationOutput> | void;
        get_configuration_finish(res: Gio.AsyncResult): MessageUimGetConfigurationOutput;
        get_file_attributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimGetFileAttributesOutput>;
        get_file_attributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_file_attributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimGetFileAttributesOutput> | void;
        get_file_attributes_finish(res: Gio.AsyncResult): MessageUimGetFileAttributesOutput;
        get_slot_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimGetSlotStatusOutput>;
        get_slot_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_slot_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimGetSlotStatusOutput> | void;
        get_slot_status_finish(res: Gio.AsyncResult): MessageUimGetSlotStatusOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageUimGetSupportedMessagesOutput;
        logical_channel(input: MessageUimLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimLogicalChannelOutput>;
        logical_channel(input: MessageUimLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        logical_channel(input: MessageUimLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimLogicalChannelOutput> | void;
        logical_channel_finish(res: Gio.AsyncResult): MessageUimLogicalChannelOutput;
        open_logical_channel(input: MessageUimOpenLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimOpenLogicalChannelOutput>;
        open_logical_channel(input: MessageUimOpenLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_logical_channel(input: MessageUimOpenLogicalChannelInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimOpenLogicalChannelOutput> | void;
        open_logical_channel_finish(res: Gio.AsyncResult): MessageUimOpenLogicalChannelOutput;
        power_off_sim(input: MessageUimPowerOffSimInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimPowerOffSimOutput>;
        power_off_sim(input: MessageUimPowerOffSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        power_off_sim(input: MessageUimPowerOffSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimPowerOffSimOutput> | void;
        power_off_sim_finish(res: Gio.AsyncResult): MessageUimPowerOffSimOutput;
        power_on_sim(input: MessageUimPowerOnSimInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimPowerOnSimOutput>;
        power_on_sim(input: MessageUimPowerOnSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        power_on_sim(input: MessageUimPowerOnSimInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimPowerOnSimOutput> | void;
        power_on_sim_finish(res: Gio.AsyncResult): MessageUimPowerOnSimOutput;
        read_record(input: MessageUimReadRecordInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimReadRecordOutput>;
        read_record(input: MessageUimReadRecordInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        read_record(input: MessageUimReadRecordInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimReadRecordOutput> | void;
        read_record_finish(res: Gio.AsyncResult): MessageUimReadRecordOutput;
        read_transparent(input: MessageUimReadTransparentInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimReadTransparentOutput>;
        read_transparent(input: MessageUimReadTransparentInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        read_transparent(input: MessageUimReadTransparentInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimReadTransparentOutput> | void;
        read_transparent_finish(res: Gio.AsyncResult): MessageUimReadTransparentOutput;
        refresh_complete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimRefreshCompleteOutput>;
        refresh_complete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        refresh_complete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimRefreshCompleteOutput> | void;
        refresh_complete_finish(res: Gio.AsyncResult): MessageUimRefreshCompleteOutput;
        refresh_register(input: MessageUimRefreshRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimRefreshRegisterOutput>;
        refresh_register(input: MessageUimRefreshRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        refresh_register(input: MessageUimRefreshRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimRefreshRegisterOutput> | void;
        refresh_register_all(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimRefreshRegisterAllOutput>;
        refresh_register_all(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        refresh_register_all(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimRefreshRegisterAllOutput> | void;
        refresh_register_all_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterAllOutput;
        refresh_register_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterOutput;
        register_events(input: MessageUimRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimRegisterEventsOutput>;
        register_events(input: MessageUimRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register_events(input: MessageUimRegisterEventsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimRegisterEventsOutput> | void;
        register_events_finish(res: Gio.AsyncResult): MessageUimRegisterEventsOutput;
        remote_unlock(input: MessageUimRemoteUnlockInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimRemoteUnlockOutput>;
        remote_unlock(input: MessageUimRemoteUnlockInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        remote_unlock(input: MessageUimRemoteUnlockInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimRemoteUnlockOutput> | void;
        remote_unlock_finish(res: Gio.AsyncResult): MessageUimRemoteUnlockOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageUimResetOutput;
        send_apdu(input: MessageUimSendApduInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimSendApduOutput>;
        send_apdu(input: MessageUimSendApduInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_apdu(input: MessageUimSendApduInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimSendApduOutput> | void;
        send_apdu_finish(res: Gio.AsyncResult): MessageUimSendApduOutput;
        set_pin_protection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimSetPinProtectionOutput>;
        set_pin_protection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_pin_protection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimSetPinProtectionOutput> | void;
        set_pin_protection_finish(res: Gio.AsyncResult): MessageUimSetPinProtectionOutput;
        switch_slot(input: MessageUimSwitchSlotInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimSwitchSlotOutput>;
        switch_slot(input: MessageUimSwitchSlotInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        switch_slot(input: MessageUimSwitchSlotInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimSwitchSlotOutput> | void;
        switch_slot_finish(res: Gio.AsyncResult): MessageUimSwitchSlotOutput;
        unblock_pin(input: MessageUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimUnblockPinOutput>;
        unblock_pin(input: MessageUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        unblock_pin(input: MessageUimUnblockPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimUnblockPinOutput> | void;
        unblock_pin_finish(res: Gio.AsyncResult): MessageUimUnblockPinOutput;
        verify_pin(input: MessageUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimVerifyPinOutput>;
        verify_pin(input: MessageUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        verify_pin(input: MessageUimVerifyPinInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimVerifyPinOutput> | void;
        verify_pin_finish(res: Gio.AsyncResult): MessageUimVerifyPinOutput;
        write_record(input: MessageUimWriteRecordInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageUimWriteRecordOutput>;
        write_record(input: MessageUimWriteRecordInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        write_record(input: MessageUimWriteRecordInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageUimWriteRecordOutput> | void;
        write_record_finish(res: Gio.AsyncResult): MessageUimWriteRecordOutput;
    }
    namespace ClientVoice {
        interface SignalSignatures extends Client.SignalSignatures {
            "all-call-status": (arg0: IndicationVoiceAllCallStatusOutput) => void;
            "originate-ussd-no-wait": (arg0: IndicationVoiceOriginateUssdNoWaitOutput) => void;
            "release-ussd": () => void;
            "supplementary-service": (arg0: IndicationVoiceSupplementaryServiceOutput) => void;
            ussd: (arg0: IndicationVoiceUssdOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientVoice extends Client {
        static $gtype: GObject.GType<ClientVoice>;
        $signals: ClientVoice.SignalSignatures;
        constructor(properties?: Partial<ClientVoice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientVoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientVoice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientVoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientVoice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientVoice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientVoice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        answer_call(input: MessageVoiceAnswerCallInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceAnswerCallOutput>;
        answer_call(input: MessageVoiceAnswerCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        answer_call(input: MessageVoiceAnswerCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceAnswerCallOutput> | void;
        answer_call_finish(res: Gio.AsyncResult): MessageVoiceAnswerCallOutput;
        answer_ussd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceAnswerUssdOutput>;
        answer_ussd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        answer_ussd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceAnswerUssdOutput> | void;
        answer_ussd_finish(res: Gio.AsyncResult): MessageVoiceAnswerUssdOutput;
        burst_dtmf(input: MessageVoiceBurstDtmfInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceBurstDtmfOutput>;
        burst_dtmf(input: MessageVoiceBurstDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        burst_dtmf(input: MessageVoiceBurstDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceBurstDtmfOutput> | void;
        burst_dtmf_finish(res: Gio.AsyncResult): MessageVoiceBurstDtmfOutput;
        cancel_ussd(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceCancelUssdOutput>;
        cancel_ussd(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        cancel_ussd(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceCancelUssdOutput> | void;
        cancel_ussd_finish(res: Gio.AsyncResult): MessageVoiceCancelUssdOutput;
        dial_call(input: MessageVoiceDialCallInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceDialCallOutput>;
        dial_call(input: MessageVoiceDialCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        dial_call(input: MessageVoiceDialCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceDialCallOutput> | void;
        dial_call_finish(res: Gio.AsyncResult): MessageVoiceDialCallOutput;
        end_call(input: MessageVoiceEndCallInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceEndCallOutput>;
        end_call(input: MessageVoiceEndCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        end_call(input: MessageVoiceEndCallInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceEndCallOutput> | void;
        end_call_finish(res: Gio.AsyncResult): MessageVoiceEndCallOutput;
        get_all_call_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceGetAllCallInfoOutput>;
        get_all_call_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_all_call_info(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceGetAllCallInfoOutput> | void;
        get_all_call_info_finish(res: Gio.AsyncResult): MessageVoiceGetAllCallInfoOutput;
        get_call_waiting(input: MessageVoiceGetCallWaitingInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceGetCallWaitingOutput>;
        get_call_waiting(input: MessageVoiceGetCallWaitingInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_call_waiting(input: MessageVoiceGetCallWaitingInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceGetCallWaitingOutput> | void;
        get_call_waiting_finish(res: Gio.AsyncResult): MessageVoiceGetCallWaitingOutput;
        get_config(input: MessageVoiceGetConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceGetConfigOutput>;
        get_config(input: MessageVoiceGetConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_config(input: MessageVoiceGetConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceGetConfigOutput> | void;
        get_config_finish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput;
        indication_register(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceIndicationRegisterOutput>;
        indication_register(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        indication_register(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceIndicationRegisterOutput> | void;
        indication_register_finish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput;
        manage_calls(input: MessageVoiceManageCallsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceManageCallsOutput>;
        manage_calls(input: MessageVoiceManageCallsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        manage_calls(input: MessageVoiceManageCallsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceManageCallsOutput> | void;
        manage_calls_finish(res: Gio.AsyncResult): MessageVoiceManageCallsOutput;
        originate_ussd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceOriginateUssdOutput>;
        originate_ussd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        originate_ussd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceOriginateUssdOutput> | void;
        originate_ussd_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput;
        originate_ussd_no_wait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceOriginateUssdNoWaitOutput>;
        originate_ussd_no_wait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        originate_ussd_no_wait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceOriginateUssdNoWaitOutput> | void;
        originate_ussd_no_wait_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput;
        set_supplementary_service(input: MessageVoiceSetSupplementaryServiceInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceSetSupplementaryServiceOutput>;
        set_supplementary_service(input: MessageVoiceSetSupplementaryServiceInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_supplementary_service(input: MessageVoiceSetSupplementaryServiceInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceSetSupplementaryServiceOutput> | void;
        set_supplementary_service_finish(res: Gio.AsyncResult): MessageVoiceSetSupplementaryServiceOutput;
        start_continuous_dtmf(input: MessageVoiceStartContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceStartContinuousDtmfOutput>;
        start_continuous_dtmf(input: MessageVoiceStartContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_continuous_dtmf(input: MessageVoiceStartContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceStartContinuousDtmfOutput> | void;
        start_continuous_dtmf_finish(res: Gio.AsyncResult): MessageVoiceStartContinuousDtmfOutput;
        stop_continuous_dtmf(input: MessageVoiceStopContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageVoiceStopContinuousDtmfOutput>;
        stop_continuous_dtmf(input: MessageVoiceStopContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        stop_continuous_dtmf(input: MessageVoiceStopContinuousDtmfInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageVoiceStopContinuousDtmfOutput> | void;
        stop_continuous_dtmf_finish(res: Gio.AsyncResult): MessageVoiceStopContinuousDtmfOutput;
    }
    namespace ClientWda {
        interface SignalSignatures extends Client.SignalSignatures {
            "loopback-configuration": (arg0: IndicationWdaLoopbackConfigurationOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientWda extends Client {
        static $gtype: GObject.GType<ClientWda>;
        $signals: ClientWda.SignalSignatures;
        constructor(properties?: Partial<ClientWda.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientWda.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWda.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientWda.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWda.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientWda.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientWda.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data_format(input: MessageWdaGetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdaGetDataFormatOutput>;
        get_data_format(input: MessageWdaGetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_data_format(input: MessageWdaGetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdaGetDataFormatOutput> | void;
        get_data_format_finish(res: Gio.AsyncResult): MessageWdaGetDataFormatOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdaGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdaGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageWdaGetSupportedMessagesOutput;
        loopback_configuration(input: MessageWdaLoopbackConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdaLoopbackConfigurationOutput>;
        loopback_configuration(input: MessageWdaLoopbackConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        loopback_configuration(input: MessageWdaLoopbackConfigurationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdaLoopbackConfigurationOutput> | void;
        loopback_configuration_finish(res: Gio.AsyncResult): MessageWdaLoopbackConfigurationOutput;
        set_data_format(input: MessageWdaSetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdaSetDataFormatOutput>;
        set_data_format(input: MessageWdaSetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_data_format(input: MessageWdaSetDataFormatInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdaSetDataFormatOutput> | void;
        set_data_format_finish(res: Gio.AsyncResult): MessageWdaSetDataFormatOutput;
    }
    namespace ClientWds {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationWdsEventReportOutput) => void;
            "extended-ip-config": (arg0: IndicationWdsExtendedIpConfigOutput) => void;
            "packet-service-status": (arg0: IndicationWdsPacketServiceStatusOutput) => void;
            "profile-changed": (arg0: IndicationWdsProfileChangedOutput) => void;
            "set-lte-attach-pdn-list": (arg0: IndicationWdsSetLteAttachPdnListOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientWds extends Client {
        static $gtype: GObject.GType<ClientWds>;
        $signals: ClientWds.SignalSignatures;
        constructor(properties?: Partial<ClientWds.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientWds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWds.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientWds.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWds.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientWds.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientWds.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        bind_data_port(input: MessageWdsBindDataPortInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsBindDataPortOutput>;
        bind_data_port(input: MessageWdsBindDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind_data_port(input: MessageWdsBindDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsBindDataPortOutput> | void;
        bind_data_port_finish(res: Gio.AsyncResult): MessageWdsBindDataPortOutput;
        bind_mux_data_port(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsBindMuxDataPortOutput>;
        bind_mux_data_port(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind_mux_data_port(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsBindMuxDataPortOutput> | void;
        bind_mux_data_port_finish(res: Gio.AsyncResult): MessageWdsBindMuxDataPortOutput;
        bind_subscription(input: MessageWdsBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsBindSubscriptionOutput>;
        bind_subscription(input: MessageWdsBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        bind_subscription(input: MessageWdsBindSubscriptionInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsBindSubscriptionOutput> | void;
        bind_subscription_finish(res: Gio.AsyncResult): MessageWdsBindSubscriptionOutput;
        configure_profile_event_list(input: MessageWdsConfigureProfileEventListInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsConfigureProfileEventListOutput>;
        configure_profile_event_list(input: MessageWdsConfigureProfileEventListInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        configure_profile_event_list(input: MessageWdsConfigureProfileEventListInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsConfigureProfileEventListOutput> | void;
        configure_profile_event_list_finish(res: Gio.AsyncResult): MessageWdsConfigureProfileEventListOutput;
        create_profile(input: MessageWdsCreateProfileInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsCreateProfileOutput>;
        create_profile(input: MessageWdsCreateProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_profile(input: MessageWdsCreateProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsCreateProfileOutput> | void;
        create_profile_finish(res: Gio.AsyncResult): MessageWdsCreateProfileOutput;
        delete_profile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsDeleteProfileOutput>;
        delete_profile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_profile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsDeleteProfileOutput> | void;
        delete_profile_finish(res: Gio.AsyncResult): MessageWdsDeleteProfileOutput;
        get_autoconnect_settings(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetAutoconnectSettingsOutput>;
        get_autoconnect_settings(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_autoconnect_settings(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetAutoconnectSettingsOutput> | void;
        get_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsGetAutoconnectSettingsOutput;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetBindSubscriptionOutput>;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_bind_subscription(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetBindSubscriptionOutput> | void;
        get_bind_subscription_finish(res: Gio.AsyncResult): MessageWdsGetBindSubscriptionOutput;
        get_channel_rates(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetChannelRatesOutput>;
        get_channel_rates(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_channel_rates(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetChannelRatesOutput> | void;
        get_channel_rates_finish(res: Gio.AsyncResult): MessageWdsGetChannelRatesOutput;
        get_current_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetCurrentDataBearerTechnologyOutput>;
        get_current_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_current_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetCurrentDataBearerTechnologyOutput> | void;
        get_current_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetCurrentDataBearerTechnologyOutput;
        get_current_settings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetCurrentSettingsOutput>;
        get_current_settings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_current_settings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetCurrentSettingsOutput> | void;
        get_current_settings_finish(res: Gio.AsyncResult): MessageWdsGetCurrentSettingsOutput;
        get_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetDataBearerTechnologyOutput>;
        get_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_data_bearer_technology(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetDataBearerTechnologyOutput> | void;
        get_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetDataBearerTechnologyOutput;
        get_default_profile_number(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetDefaultProfileNumberOutput>;
        get_default_profile_number(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_default_profile_number(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetDefaultProfileNumberOutput> | void;
        get_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsGetDefaultProfileNumberOutput;
        get_default_settings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetDefaultSettingsOutput>;
        get_default_settings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_default_settings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetDefaultSettingsOutput> | void;
        get_default_settings_finish(res: Gio.AsyncResult): MessageWdsGetDefaultSettingsOutput;
        get_dormancy_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetDormancyStatusOutput>;
        get_dormancy_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_dormancy_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetDormancyStatusOutput> | void;
        get_dormancy_status_finish(res: Gio.AsyncResult): MessageWdsGetDormancyStatusOutput;
        get_lte_attach_parameters(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetLteAttachParametersOutput>;
        get_lte_attach_parameters(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_lte_attach_parameters(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetLteAttachParametersOutput> | void;
        get_lte_attach_parameters_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachParametersOutput;
        get_lte_attach_pdn_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetLteAttachPdnListOutput>;
        get_lte_attach_pdn_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_lte_attach_pdn_list(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetLteAttachPdnListOutput> | void;
        get_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachPdnListOutput;
        get_max_lte_attach_pdn_number(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetMaxLteAttachPdnNumberOutput>;
        get_max_lte_attach_pdn_number(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_max_lte_attach_pdn_number(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetMaxLteAttachPdnNumberOutput> | void;
        get_max_lte_attach_pdn_number_finish(res: Gio.AsyncResult): MessageWdsGetMaxLteAttachPdnNumberOutput;
        get_packet_service_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetPacketServiceStatusOutput>;
        get_packet_service_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_packet_service_status(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetPacketServiceStatusOutput> | void;
        get_packet_service_status_finish(res: Gio.AsyncResult): MessageWdsGetPacketServiceStatusOutput;
        get_packet_statistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetPacketStatisticsOutput>;
        get_packet_statistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_packet_statistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetPacketStatisticsOutput> | void;
        get_packet_statistics_finish(res: Gio.AsyncResult): MessageWdsGetPacketStatisticsOutput;
        get_pdn_throttle_info(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetPdnThrottleInfoOutput>;
        get_pdn_throttle_info(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_pdn_throttle_info(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetPdnThrottleInfoOutput> | void;
        get_pdn_throttle_info_finish(res: Gio.AsyncResult): MessageWdsGetPdnThrottleInfoOutput;
        get_profile_list(input: MessageWdsGetProfileListInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetProfileListOutput>;
        get_profile_list(input: MessageWdsGetProfileListInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_profile_list(input: MessageWdsGetProfileListInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetProfileListOutput> | void;
        get_profile_list_finish(res: Gio.AsyncResult): MessageWdsGetProfileListOutput;
        get_profile_settings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetProfileSettingsOutput>;
        get_profile_settings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_profile_settings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetProfileSettingsOutput> | void;
        get_profile_settings_finish(res: Gio.AsyncResult): MessageWdsGetProfileSettingsOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageWdsGetSupportedMessagesOutput;
        go_active(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGoActiveOutput>;
        go_active(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        go_active(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGoActiveOutput> | void;
        go_active_finish(res: Gio.AsyncResult): MessageWdsGoActiveOutput;
        go_dormant(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsGoDormantOutput>;
        go_dormant(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        go_dormant(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsGoDormantOutput> | void;
        go_dormant_finish(res: Gio.AsyncResult): MessageWdsGoDormantOutput;
        indication_register(input: MessageWdsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsIndicationRegisterOutput>;
        indication_register(input: MessageWdsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        indication_register(input: MessageWdsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsIndicationRegisterOutput> | void;
        indication_register_finish(res: Gio.AsyncResult): MessageWdsIndicationRegisterOutput;
        modify_profile(input: MessageWdsModifyProfileInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsModifyProfileOutput>;
        modify_profile(input: MessageWdsModifyProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        modify_profile(input: MessageWdsModifyProfileInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsModifyProfileOutput> | void;
        modify_profile_finish(res: Gio.AsyncResult): MessageWdsModifyProfileOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageWdsResetOutput;
        set_autoconnect_settings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSetAutoconnectSettingsOutput>;
        set_autoconnect_settings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_autoconnect_settings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSetAutoconnectSettingsOutput> | void;
        set_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsSetAutoconnectSettingsOutput;
        set_default_profile_number(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSetDefaultProfileNumberOutput>;
        set_default_profile_number(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_default_profile_number(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSetDefaultProfileNumberOutput> | void;
        set_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsSetDefaultProfileNumberOutput;
        set_event_report(input: MessageWdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSetEventReportOutput>;
        set_event_report(input: MessageWdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessageWdsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessageWdsSetEventReportOutput;
        set_ip_family(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSetIpFamilyOutput>;
        set_ip_family(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_ip_family(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSetIpFamilyOutput> | void;
        set_ip_family_finish(res: Gio.AsyncResult): MessageWdsSetIpFamilyOutput;
        set_lte_attach_pdn_list(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSetLteAttachPdnListOutput>;
        set_lte_attach_pdn_list(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_lte_attach_pdn_list(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSetLteAttachPdnListOutput> | void;
        set_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsSetLteAttachPdnListOutput;
        start_network(input: MessageWdsStartNetworkInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsStartNetworkOutput>;
        start_network(input: MessageWdsStartNetworkInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_network(input: MessageWdsStartNetworkInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsStartNetworkOutput> | void;
        start_network_finish(res: Gio.AsyncResult): MessageWdsStartNetworkOutput;
        stop_network(input: MessageWdsStopNetworkInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsStopNetworkOutput>;
        stop_network(input: MessageWdsStopNetworkInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        stop_network(input: MessageWdsStopNetworkInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsStopNetworkOutput> | void;
        stop_network_finish(res: Gio.AsyncResult): MessageWdsStopNetworkOutput;
        swi_create_profile_indexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWdsSwiCreateProfileIndexedOutput>;
        swi_create_profile_indexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        swi_create_profile_indexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWdsSwiCreateProfileIndexedOutput> | void;
        swi_create_profile_indexed_finish(res: Gio.AsyncResult): MessageWdsSwiCreateProfileIndexedOutput;
    }
    namespace ClientWms {
        interface SignalSignatures extends Client.SignalSignatures {
            "event-report": (arg0: IndicationWmsEventReportOutput) => void;
            "smsc-address": (arg0: IndicationWmsSmscAddressOutput) => void;
            "transport-network-registration-status": (arg0: IndicationWmsTransportNetworkRegistrationStatusOutput) => void;
            "notify::client-cid": (pspec: GObject.ParamSpec) => void;
            "notify::client-device": (pspec: GObject.ParamSpec) => void;
            "notify::client-service": (pspec: GObject.ParamSpec) => void;
            "notify::client-valid": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-major": (pspec: GObject.ParamSpec) => void;
            "notify::client-version-minor": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Client.ConstructorProps {}
    }
    class ClientWms extends Client {
        static $gtype: GObject.GType<ClientWms>;
        $signals: ClientWms.SignalSignatures;
        constructor(properties?: Partial<ClientWms.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ClientWms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWms.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientWms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientWms.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientWms.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientWms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](input: MessageWmsDeleteInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsDeleteOutput>;
        ["delete"](input: MessageWmsDeleteInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        ["delete"](input: MessageWmsDeleteInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsDeleteOutput> | void;
        delete_finish(res: Gio.AsyncResult): MessageWmsDeleteOutput;
        get_broadcast_config(input: MessageWmsGetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsGetBroadcastConfigOutput>;
        get_broadcast_config(input: MessageWmsGetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_broadcast_config(input: MessageWmsGetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsGetBroadcastConfigOutput> | void;
        get_broadcast_config_finish(res: Gio.AsyncResult): MessageWmsGetBroadcastConfigOutput;
        get_message_protocol(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsGetMessageProtocolOutput>;
        get_message_protocol(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_message_protocol(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsGetMessageProtocolOutput> | void;
        get_message_protocol_finish(res: Gio.AsyncResult): MessageWmsGetMessageProtocolOutput;
        get_routes(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsGetRoutesOutput>;
        get_routes(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_routes(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsGetRoutesOutput> | void;
        get_routes_finish(res: Gio.AsyncResult): MessageWmsGetRoutesOutput;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsGetSupportedMessagesOutput>;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_supported_messages(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsGetSupportedMessagesOutput> | void;
        get_supported_messages_finish(res: Gio.AsyncResult): MessageWmsGetSupportedMessagesOutput;
        get_transport_network_registration_status(input: MessageWmsGetTransportNetworkRegistrationStatusInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsGetTransportNetworkRegistrationStatusOutput>;
        get_transport_network_registration_status(input: MessageWmsGetTransportNetworkRegistrationStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_transport_network_registration_status(input: MessageWmsGetTransportNetworkRegistrationStatusInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsGetTransportNetworkRegistrationStatusOutput> | void;
        get_transport_network_registration_status_finish(res: Gio.AsyncResult): MessageWmsGetTransportNetworkRegistrationStatusOutput;
        indication_register(input: MessageWmsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsIndicationRegisterOutput>;
        indication_register(input: MessageWmsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        indication_register(input: MessageWmsIndicationRegisterInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsIndicationRegisterOutput> | void;
        indication_register_finish(res: Gio.AsyncResult): MessageWmsIndicationRegisterOutput;
        list_messages(input: MessageWmsListMessagesInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsListMessagesOutput>;
        list_messages(input: MessageWmsListMessagesInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_messages(input: MessageWmsListMessagesInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsListMessagesOutput> | void;
        list_messages_finish(res: Gio.AsyncResult): MessageWmsListMessagesOutput;
        modify_tag(input: MessageWmsModifyTagInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsModifyTagOutput>;
        modify_tag(input: MessageWmsModifyTagInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        modify_tag(input: MessageWmsModifyTagInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsModifyTagOutput> | void;
        modify_tag_finish(res: Gio.AsyncResult): MessageWmsModifyTagOutput;
        raw_read(input: MessageWmsRawReadInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsRawReadOutput>;
        raw_read(input: MessageWmsRawReadInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        raw_read(input: MessageWmsRawReadInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsRawReadOutput> | void;
        raw_read_finish(res: Gio.AsyncResult): MessageWmsRawReadOutput;
        raw_send(input: MessageWmsRawSendInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsRawSendOutput>;
        raw_send(input: MessageWmsRawSendInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        raw_send(input: MessageWmsRawSendInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsRawSendOutput> | void;
        raw_send_finish(res: Gio.AsyncResult): MessageWmsRawSendOutput;
        raw_write(input: MessageWmsRawWriteInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsRawWriteOutput>;
        raw_write(input: MessageWmsRawWriteInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        raw_write(input: MessageWmsRawWriteInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsRawWriteOutput> | void;
        raw_write_finish(res: Gio.AsyncResult): MessageWmsRawWriteOutput;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsResetOutput>;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(unused: null, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsResetOutput> | void;
        reset_finish(res: Gio.AsyncResult): MessageWmsResetOutput;
        send_ack(input: MessageWmsSendAckInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSendAckOutput>;
        send_ack(input: MessageWmsSendAckInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_ack(input: MessageWmsSendAckInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSendAckOutput> | void;
        send_ack_finish(res: Gio.AsyncResult): MessageWmsSendAckOutput;
        send_from_memory_storage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSendFromMemoryStorageOutput>;
        send_from_memory_storage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_from_memory_storage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSendFromMemoryStorageOutput> | void;
        send_from_memory_storage_finish(res: Gio.AsyncResult): MessageWmsSendFromMemoryStorageOutput;
        set_broadcast_activation(input: MessageWmsSetBroadcastActivationInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSetBroadcastActivationOutput>;
        set_broadcast_activation(input: MessageWmsSetBroadcastActivationInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_broadcast_activation(input: MessageWmsSetBroadcastActivationInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSetBroadcastActivationOutput> | void;
        set_broadcast_activation_finish(res: Gio.AsyncResult): MessageWmsSetBroadcastActivationOutput;
        set_broadcast_config(input: MessageWmsSetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSetBroadcastConfigOutput>;
        set_broadcast_config(input: MessageWmsSetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_broadcast_config(input: MessageWmsSetBroadcastConfigInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSetBroadcastConfigOutput> | void;
        set_broadcast_config_finish(res: Gio.AsyncResult): MessageWmsSetBroadcastConfigOutput;
        set_event_report(input: MessageWmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSetEventReportOutput>;
        set_event_report(input: MessageWmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_event_report(input: MessageWmsSetEventReportInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSetEventReportOutput> | void;
        set_event_report_finish(res: Gio.AsyncResult): MessageWmsSetEventReportOutput;
        set_routes(input: MessageWmsSetRoutesInput, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<MessageWmsSetRoutesOutput>;
        set_routes(input: MessageWmsSetRoutesInput, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_routes(input: MessageWmsSetRoutesInput, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<MessageWmsSetRoutesOutput> | void;
        set_routes_finish(res: Gio.AsyncResult): MessageWmsSetRoutesOutput;
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "device-removed": () => void;
            indication: (arg0: Uint8Array) => void;
            "notify::device-consecutive-timeouts": (pspec: GObject.ParamSpec) => void;
            "notify::device-file": (pspec: GObject.ParamSpec) => void;
            "notify::device-no-file-check": (pspec: GObject.ParamSpec) => void;
            "notify::device-node": (pspec: GObject.ParamSpec) => void;
            "notify::device-proxy-path": (pspec: GObject.ParamSpec) => void;
            "notify::device-wwan-iface": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            device_consecutive_timeouts: number;
            deviceConsecutiveTimeouts: number;
            device_file: Gio.File;
            deviceFile: Gio.File;
            device_no_file_check: boolean;
            deviceNoFileCheck: boolean;
            device_node: Qrtr.Node;
            deviceNode: Qrtr.Node;
            device_proxy_path: string;
            deviceProxyPath: string;
            device_wwan_iface: string;
            deviceWwanIface: string;
        }
    }
    class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
        static $gtype: GObject.GType<Device>;
        get device_consecutive_timeouts(): number;
        get deviceConsecutiveTimeouts(): number;
        get device_file(): Gio.File;
        get deviceFile(): Gio.File;
        set device_no_file_check(val: boolean);
        set deviceNoFileCheck(val: boolean);
        get device_node(): Qrtr.Node;
        get deviceNode(): Qrtr.Node;
        set device_proxy_path(val: string);
        set deviceProxyPath(val: string);
        get device_wwan_iface(): string;
        get deviceWwanIface(): string;
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): Device;
        static new_finish(...args: never[]): any;
        static new_from_node_finish(res: Gio.AsyncResult): Device;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Device> | null): void;
        static new_from_node(node: Qrtr.Node, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Device> | null): void;
        add_link(mux_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        add_link(mux_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_link(mux_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        add_link_finish(res: Gio.AsyncResult, mux_id: number): string;
        add_link_with_flags(mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        add_link_with_flags(mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_link_with_flags(mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        add_link_with_flags_and_initial_mux_id(initial_mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        add_link_with_flags_and_initial_mux_id(initial_mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_link_with_flags_and_initial_mux_id(initial_mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        add_link_with_flags_and_initial_mux_id_finish(res: Gio.AsyncResult, mux_id: number): string;
        add_link_with_flags_finish(res: Gio.AsyncResult, mux_id: number): string;
        allocate_client(service: Service, cid: number, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Client>;
        allocate_client(service: Service, cid: number, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        allocate_client(service: Service, cid: number, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Client> | void;
        allocate_client_finish(res: Gio.AsyncResult): Client;
        check_expected_data_format_supported(format: DeviceExpectedDataFormat): boolean;
        check_link_supported(): boolean;
        close_async(timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        close_async(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        close_async(timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        close_finish(res: Gio.AsyncResult): boolean;
        command_abortable_finish(res: Gio.AsyncResult): Message;
        command_full(message: Message, message_context: MessageContext, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Message>;
        command_full(message: Message, message_context: MessageContext, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        command_full(message: Message, message_context: MessageContext, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Message> | void;
        command_full_finish(res: Gio.AsyncResult): Message;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_all_links_finish(res: Gio.AsyncResult): boolean;
        delete_link(ifname: string, mux_id: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_link(ifname: string, mux_id: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_link(ifname: string, mux_id: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_link_finish(res: Gio.AsyncResult): boolean;
        get_consecutive_timeouts(): number;
        get_expected_data_format(): DeviceExpectedDataFormat;
        get_file(): Gio.File;
        get_node(): Qrtr.Node;
        get_path(): string;
        get_path_display(): string;
        get_service_version_info(timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<DeviceServiceVersionInfo[]>;
        get_service_version_info(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_service_version_info(timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DeviceServiceVersionInfo[]> | void;
        get_service_version_info_finish(res: Gio.AsyncResult): DeviceServiceVersionInfo[];
        get_wwan_iface(): string;
        is_open(): boolean;
        list_links(base_ifname: string): [boolean, string[]];
        open(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        open(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        open_finish(res: Gio.AsyncResult): boolean;
        peek_file(): Gio.File;
        peek_node(): Qrtr.Node;
        release_client(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        release_client(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        release_client(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        release_client_finish(res: Gio.AsyncResult): boolean;
        set_expected_data_format(format: DeviceExpectedDataFormat): boolean;
        set_instance_id(instance_id: number, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_instance_id(instance_id: number, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_instance_id(instance_id: number, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_instance_id_finish(res: Gio.AsyncResult, link_id: number): boolean;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Device;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }
    namespace Proxy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::qmi-proxy-n-clients": (pspec: GObject.ParamSpec) => void;
            "notify::qmi-proxy-nclients": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            qmi_proxy_n_clients: number;
            qmiProxyNClients: number;
        }
    }
    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;
        get qmi_proxy_n_clients(): number;
        get qmiProxyNClients(): number;
        $signals: Proxy.SignalSignatures;
        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Proxy;
        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_n_clients(): number;
    }
    type ClientAtrClass = typeof ClientAtr;
    type ClientClass = typeof Client;
    type ClientDmsClass = typeof ClientDms;
    type ClientDpmClass = typeof ClientDpm;
    type ClientDsdClass = typeof ClientDsd;
    type ClientFoxClass = typeof ClientFox;
    type ClientGasClass = typeof ClientGas;
    type ClientGmsClass = typeof ClientGms;
    type ClientImsClass = typeof ClientIms;
    type ClientImsaClass = typeof ClientImsa;
    type ClientImsdcmClass = typeof ClientImsdcm;
    type ClientImspClass = typeof ClientImsp;
    type ClientLocClass = typeof ClientLoc;
    type ClientNasClass = typeof ClientNas;
    type ClientOmaClass = typeof ClientOma;
    type ClientPbmClass = typeof ClientPbm;
    type ClientPdcClass = typeof ClientPdc;
    type ClientPdsClass = typeof ClientPds;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }
    type ClientQosClass = typeof ClientQos;
    type ClientSarClass = typeof ClientSar;
    type ClientSscClass = typeof ClientSsc;
    type ClientUimClass = typeof ClientUim;
    type ClientVoiceClass = typeof ClientVoice;
    type ClientWdaClass = typeof ClientWda;
    type ClientWdsClass = typeof ClientWds;
    type ClientWmsClass = typeof ClientWms;
    type DeviceClass = typeof Device;
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    class DeviceServiceVersionInfo {
        static $gtype: GObject.GType<DeviceServiceVersionInfo>;
        service: Service;
        major_version: number;
        minor_version: number;
    }
    abstract class IndicationAtrReceivedOutput {
        static $gtype: GObject.GType<IndicationAtrReceivedOutput>;
        get_message(): [boolean, string];
        ref(): IndicationAtrReceivedOutput;
        unref(): void;
    }
    abstract class IndicationDmsEventReportOutput {
        static $gtype: GObject.GType<IndicationDmsEventReportOutput>;
        get_activation_state(): [boolean, DmsActivationState | null];
        get_operating_mode(): [boolean, DmsOperatingMode | null];
        get_pin1_status(): [boolean, DmsUimPinStatus | null, number, number];
        get_pin2_status(): [boolean, DmsUimPinStatus | null, number, number];
        get_power_state(): [boolean, number, number];
        get_prl_init_notification(): [boolean, boolean];
        get_uim_state(): [boolean, DmsUimState | null];
        get_wireless_disable_state(): [boolean, boolean];
        ref(): IndicationDmsEventReportOutput;
        unref(): void;
    }
    abstract class IndicationDsdSystemStatusOutput {
        static $gtype: GObject.GType<IndicationDsdSystemStatusOutput>;
        get_available_systems(): [boolean, IndicationDsdSystemStatusOutputAvailableSystemsSystem[] | null];
        ref(): IndicationDsdSystemStatusOutput;
        unref(): void;
    }
    class IndicationDsdSystemStatusOutputAvailableSystemsSystem {
        static $gtype: GObject.GType<IndicationDsdSystemStatusOutputAvailableSystemsSystem>;
        technology: DsdDataSystemNetworkType;
        rat: DsdRadioAccessTechnology;
        so_mask: DsdSoMask;
    }
    abstract class IndicationImsImsServicesEnabledSettingOutput {
        static $gtype: GObject.GType<IndicationImsImsServicesEnabledSettingOutput>;
        get_ims_autoconfig_enabled(): [boolean, boolean];
        get_ims_carrier_config(): [boolean, boolean];
        get_ims_presence_enabled(): [boolean, boolean];
        get_ims_rcs_enabled(): [boolean, boolean];
        get_ims_service_enabled(): [boolean, boolean];
        get_ims_sms_service_enable(): [boolean, boolean];
        get_ims_ussd_service_enabled(): [boolean, boolean];
        get_ims_ut_service_enable(): [boolean, boolean];
        get_ims_video_telephony_service_enable(): [boolean, boolean];
        get_ims_voice_over_lte_enable(): [boolean, boolean];
        get_ims_voice_wifi_service_enable(): [boolean, boolean];
        get_ims_xdm_client_enabled(): [boolean, boolean];
        ref(): IndicationImsImsServicesEnabledSettingOutput;
        unref(): void;
    }
    abstract class IndicationImsaImsRegistrationStatusChangedOutput {
        static $gtype: GObject.GType<IndicationImsaImsRegistrationStatusChangedOutput>;
        get_ims_registration_error_code(): [boolean, number];
        get_ims_registration_error_message(): [boolean, string];
        get_ims_registration_status(): [boolean, ImsaImsRegistrationStatus | null];
        get_ims_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        ref(): IndicationImsaImsRegistrationStatusChangedOutput;
        unref(): void;
    }
    abstract class IndicationImsaImsServicesStatusChangedOutput {
        static $gtype: GObject.GType<IndicationImsaImsServicesStatusChangedOutput>;
        get_ims_sms_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_sms_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_ue_to_tas_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_ue_to_tas_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_video_share_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_video_share_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_video_telephony_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_video_telephony_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_voice_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_voice_service_status(): [boolean, ImsaServiceStatus | null];
        ref(): IndicationImsaImsServicesStatusChangedOutput;
        unref(): void;
    }
    abstract class IndicationImsdcmPdpActivateOutput {
        static $gtype: GObject.GType<IndicationImsdcmPdpActivateOutput>;
        get_address_info(): [boolean, ImsDcmIpFamiliy | null, string];
        get_instance_id(): [boolean, ImsDcmInstanceId | null];
        get_pdp_id(): [boolean, number];
        get_pdp_request_sequence_number(): [boolean, number];
        get_result(): boolean;
        ref(): IndicationImsdcmPdpActivateOutput;
        unref(): void;
    }
    abstract class IndicationLocDeleteAssistanceDataOutput {
        static $gtype: GObject.GType<IndicationLocDeleteAssistanceDataOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocDeleteAssistanceDataOutput;
        unref(): void;
    }
    abstract class IndicationLocEngineStateOutput {
        static $gtype: GObject.GType<IndicationLocEngineStateOutput>;
        get_engine_state(): [boolean, LocEngineState | null];
        ref(): IndicationLocEngineStateOutput;
        unref(): void;
    }
    abstract class IndicationLocFixRecurrenceTypeOutput {
        static $gtype: GObject.GType<IndicationLocFixRecurrenceTypeOutput>;
        get_fix_recurrence_type(): [boolean, LocFixRecurrenceType | null];
        ref(): IndicationLocFixRecurrenceTypeOutput;
        unref(): void;
    }
    abstract class IndicationLocGetEngineLockOutput {
        static $gtype: GObject.GType<IndicationLocGetEngineLockOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_lock_type(): [boolean, LocLockType | null];
        ref(): IndicationLocGetEngineLockOutput;
        unref(): void;
    }
    abstract class IndicationLocGetNmeaTypesOutput {
        static $gtype: GObject.GType<IndicationLocGetNmeaTypesOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_nmea_types(): [boolean, LocNmeaType | null];
        ref(): IndicationLocGetNmeaTypesOutput;
        unref(): void;
    }
    abstract class IndicationLocGetOperationModeOutput {
        static $gtype: GObject.GType<IndicationLocGetOperationModeOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_operation_mode(): [boolean, LocOperationMode | null];
        ref(): IndicationLocGetOperationModeOutput;
        unref(): void;
    }
    abstract class IndicationLocGetPredictedOrbitsDataSourceOutput {
        static $gtype: GObject.GType<IndicationLocGetPredictedOrbitsDataSourceOutput>;
        get_allowed_sizes(): [boolean, number, number];
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_server_list(): [boolean, string[] | null];
        ref(): IndicationLocGetPredictedOrbitsDataSourceOutput;
        unref(): void;
    }
    abstract class IndicationLocGetPredictedOrbitsDataValidityOutput {
        static $gtype: GObject.GType<IndicationLocGetPredictedOrbitsDataValidityOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_validity_info(): [boolean, number, number];
        ref(): IndicationLocGetPredictedOrbitsDataValidityOutput;
        unref(): void;
    }
    abstract class IndicationLocGetServerOutput {
        static $gtype: GObject.GType<IndicationLocGetServerOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_ipv4(): [boolean, number, number];
        get_ipv6(): [boolean, number[] | null, number];
        get_server_type(): [boolean, LocServerType | null];
        get_url(): [boolean, string];
        ref(): IndicationLocGetServerOutput;
        unref(): void;
    }
    abstract class IndicationLocGnssSvInfoOutput {
        static $gtype: GObject.GType<IndicationLocGnssSvInfoOutput>;
        get_altitude_assumed(): [boolean, boolean];
        get_list(): [boolean, IndicationLocGnssSvInfoOutputListElement[] | null];
        ref(): IndicationLocGnssSvInfoOutput;
        unref(): void;
    }
    class IndicationLocGnssSvInfoOutputListElement {
        static $gtype: GObject.GType<IndicationLocGnssSvInfoOutputListElement>;
        valid_information: LocSatelliteValidInformation;
        system: LocSystem;
        gnss_satellite_id: number;
        health_status: LocHealthStatus;
        satellite_status: LocSatelliteStatus;
        navigation_data: LocNavigationData;
        elevation_degrees: number;
        azimuth_degrees: number;
        signal_to_noise_ratio_bhz: number;
    }
    abstract class IndicationLocInjectPositionOutput {
        static $gtype: GObject.GType<IndicationLocInjectPositionOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocInjectPositionOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectPositionRequestOutput {
        static $gtype: GObject.GType<IndicationLocInjectPositionRequestOutput>;
        get_horizontal_uncertainty_circular(): [boolean, number];
        get_latitude(): [boolean, number];
        get_longitude(): [boolean, number];
        get_utc_timestamp(): [boolean, number];
        ref(): IndicationLocInjectPositionRequestOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectPredictedOrbitsDataOutput {
        static $gtype: GObject.GType<IndicationLocInjectPredictedOrbitsDataOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_part_number(): [boolean, number];
        ref(): IndicationLocInjectPredictedOrbitsDataOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectPredictedOrbitsRequestOutput {
        static $gtype: GObject.GType<IndicationLocInjectPredictedOrbitsRequestOutput>;
        get_allowed_sizes(): [boolean, number, number];
        get_file_info(): [boolean, LocInjectedOrbitFileType | null, number];
        get_server_list(): [boolean, string[] | null];
        get_server_update_mask(): [boolean, LocInjectedOrbitServerParamUpdate | null];
        get_update_period_seconds(): [boolean, number];
        get_update_type(): [boolean, LocInjectedOrbitUpdateType | null];
        ref(): IndicationLocInjectPredictedOrbitsRequestOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectTimeRequestOutput {
        static $gtype: GObject.GType<IndicationLocInjectTimeRequestOutput>;
        get_time_server_info(): [boolean, number, string[] | null];
        ref(): IndicationLocInjectTimeRequestOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectUtcTimeOutput {
        static $gtype: GObject.GType<IndicationLocInjectUtcTimeOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocInjectUtcTimeOutput;
        unref(): void;
    }
    abstract class IndicationLocInjectXtraDataOutput {
        static $gtype: GObject.GType<IndicationLocInjectXtraDataOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        get_part_number(): [boolean, number];
        ref(): IndicationLocInjectXtraDataOutput;
        unref(): void;
    }
    abstract class IndicationLocNmeaOutput {
        static $gtype: GObject.GType<IndicationLocNmeaOutput>;
        get_nmea_string(): [boolean, string];
        ref(): IndicationLocNmeaOutput;
        unref(): void;
    }
    abstract class IndicationLocPositionReportOutput {
        static $gtype: GObject.GType<IndicationLocPositionReportOutput>;
        get_altitude_assumed(): [boolean, boolean];
        get_altitude_from_ellipsoid(): [boolean, number];
        get_altitude_from_sealevel(): [boolean, number];
        get_dop(): [boolean, number, number, number];
        get_gps_date_time(): [boolean, number, number];
        get_heading(): [boolean, number];
        get_heading_uncertainty(): [boolean, number];
        get_horizontal_confidence(): [boolean, number];
        get_horizontal_reliability(): [boolean, LocReliability | null];
        get_horizontal_speed(): [boolean, number];
        get_horizontal_uncertainty_circular(): [boolean, number];
        get_horizontal_uncertainty_elliptical_azimuth(): [boolean, number];
        get_horizontal_uncertainty_elliptical_major(): [boolean, number];
        get_horizontal_uncertainty_elliptical_minor(): [boolean, number];
        get_latitude(): [boolean, number];
        get_leap_seconds(): [boolean, number];
        get_longitude(): [boolean, number];
        get_magnetic_deviation(): [boolean, number];
        get_satellites_used(): [boolean, number[] | null];
        get_sensor_data_usage(): [boolean, LocSensorDataUsage | null];
        get_session_fix_count(): [boolean, number];
        get_session_id(): [boolean, number];
        get_session_status(): [boolean, LocSessionStatus | null];
        get_speed_uncertainty(): [boolean, number];
        get_technology_used(): [boolean, LocTechnologyUsed | null];
        get_time_source(): [boolean, LocTimeSource | null];
        get_time_uncertainty(): [boolean, number];
        get_utc_timestamp(): [boolean, number];
        get_vertical_confidence(): [boolean, number];
        get_vertical_reliability(): [boolean, LocReliability | null];
        get_vertical_speed(): [boolean, number];
        get_vertical_uncertainty(): [boolean, number];
        ref(): IndicationLocPositionReportOutput;
        unref(): void;
    }
    abstract class IndicationLocSetEngineLockOutput {
        static $gtype: GObject.GType<IndicationLocSetEngineLockOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocSetEngineLockOutput;
        unref(): void;
    }
    abstract class IndicationLocSetNmeaTypesOutput {
        static $gtype: GObject.GType<IndicationLocSetNmeaTypesOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocSetNmeaTypesOutput;
        unref(): void;
    }
    abstract class IndicationLocSetOperationModeOutput {
        static $gtype: GObject.GType<IndicationLocSetOperationModeOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocSetOperationModeOutput;
        unref(): void;
    }
    abstract class IndicationLocSetServerOutput {
        static $gtype: GObject.GType<IndicationLocSetServerOutput>;
        get_indication_status(): [boolean, LocIndicationStatus | null];
        ref(): IndicationLocSetServerOutput;
        unref(): void;
    }
    abstract class IndicationNasEventReportOutput {
        static $gtype: GObject.GType<IndicationNasEventReportOutput>;
        get_ecio(): [boolean, number, NasRadioInterface | null];
        get_error_rate(): [boolean, number, NasRadioInterface | null];
        get_io(): [boolean, number];
        get_lte_rsrp(): [boolean, number];
        get_lte_snr(): [boolean, number];
        get_registration_reject_reason(): [boolean, NasNetworkServiceDomain | null, number];
        get_rf_band_information(): [boolean, IndicationNasEventReportOutputRfBandInformationElement[] | null];
        get_rsrq(): [boolean, number, NasRadioInterface | null];
        get_rssi(): [boolean, number, NasRadioInterface | null];
        get_signal_strength(): [boolean, number, NasRadioInterface | null];
        get_sinr(): [boolean, NasEvdoSinrLevel | null];
        ref(): IndicationNasEventReportOutput;
        unref(): void;
    }
    class IndicationNasEventReportOutputRfBandInformationElement {
        static $gtype: GObject.GType<IndicationNasEventReportOutputRfBandInformationElement>;
        radio_interface: NasRadioInterface;
        active_band_class: NasActiveBand;
        active_channel: number;
    }
    abstract class IndicationNasIncrementalNetworkScanOutput {
        static $gtype: GObject.GType<IndicationNasIncrementalNetworkScanOutput>;
        get_network_information(): [boolean, IndicationNasIncrementalNetworkScanOutputNetworkInformationElement[] | null];
        get_status(): [boolean, NasIncrementalNetworkScanStatus | null];
        ref(): IndicationNasIncrementalNetworkScanOutput;
        unref(): void;
    }
    class IndicationNasIncrementalNetworkScanOutputNetworkInformationElement {
        static $gtype: GObject.GType<IndicationNasIncrementalNetworkScanOutputNetworkInformationElement>;
        mcc: number;
        mnc: number;
        network_status: NasNetworkStatus;
        radio_interface: NasRadioInterface;
        includes_pcs_digit: boolean;
        description: string;
    }
    abstract class IndicationNasNetworkRejectOutput {
        static $gtype: GObject.GType<IndicationNasNetworkRejectOutput>;
        get_closed_subscriber_group(): [boolean, number];
        get_plmn(): [boolean, number, number, boolean];
        get_radio_interface(): [boolean, NasRadioInterface | null];
        get_reject_cause(): [boolean, NasRejectCause | null];
        get_service_domain(): [boolean, NasNetworkServiceDomain | null];
        ref(): IndicationNasNetworkRejectOutput;
        unref(): void;
    }
    abstract class IndicationNasNetworkTimeOutput {
        static $gtype: GObject.GType<IndicationNasNetworkTimeOutput>;
        get_daylight_savings_adjustment(): [boolean, NasDaylightSavingsAdjustment | null];
        get_radio_interface(): [boolean, NasRadioInterface | null];
        get_timezone_offset(): [boolean, number];
        get_universal_time(): [boolean, number, number, number, number, number, number, NasDayOfWeek | null];
        ref(): IndicationNasNetworkTimeOutput;
        unref(): void;
    }
    abstract class IndicationNasOperatorNameOutput {
        static $gtype: GObject.GType<IndicationNasOperatorNameOutput>;
        get_nitz_information(): [boolean, NasPlmnEncodingScheme | null, NasPlmnNameCountryInitials | null, NasPlmnNameSpareBits | null, NasPlmnNameSpareBits | null, Uint8Array | null, Uint8Array | null];
        get_operator_plmn_list(): [boolean, IndicationNasOperatorNameOutputOperatorPlmnListElement[] | null];
        get_operator_plmn_name(): [boolean, IndicationNasOperatorNameOutputOperatorPlmnNameElement[] | null];
        get_operator_string_name(): [boolean, string];
        get_service_provider_name(): [boolean, NasNetworkNameDisplayCondition | null, string];
        ref(): IndicationNasOperatorNameOutput;
        unref(): void;
    }
    class IndicationNasOperatorNameOutputOperatorPlmnListElement {
        static $gtype: GObject.GType<IndicationNasOperatorNameOutputOperatorPlmnListElement>;
        mcc: string;
        mnc: string;
        lac1: number;
        lac2: number;
        plmn_name_record_identifier: number;
        constructor(properties?: Partial<{
            mcc: string;
            mnc: string;
            lac1: number;
            lac2: number;
            plmn_name_record_identifier: number;
        }>);
    }
    class IndicationNasOperatorNameOutputOperatorPlmnNameElement {
        static $gtype: GObject.GType<IndicationNasOperatorNameOutputOperatorPlmnNameElement>;
        name_encoding: NasPlmnEncodingScheme;
        short_country_initials: NasPlmnNameCountryInitials;
        long_name_spare_bits: NasPlmnNameSpareBits;
        short_name_spare_bits: NasPlmnNameSpareBits;
        long_name: null[];
        short_name: null[];
    }
    abstract class IndicationNasServingSystemOutput {
        static $gtype: GObject.GType<IndicationNasServingSystemOutput>;
        get_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_cdma_base_station_info(): [boolean, number, number, number];
        get_cdma_p_rev(): [boolean, number];
        get_cdma_system_id(): [boolean, number, number];
        get_cdma_system_info(): [boolean, number, number];
        get_cid_3gpp(): [boolean, number];
        get_concurrent_service_info_3gpp2(): [boolean, boolean];
        get_current_plmn(): [boolean, number, number, string];
        get_data_service_capability(): [boolean, NasDataCapability[] | null];
        get_daylight_saving_time_adjustment_3gpp(): [boolean, number];
        get_default_roaming_indicator(): [boolean, NasRoamingIndicatorStatus | null];
        get_detailed_service_status(): [boolean, NasServiceStatus | null, NasNetworkServiceDomain | null, NasServiceStatus | null, boolean, boolean];
        get_dtm_support(): [boolean, boolean];
        get_hdr_personality(): [boolean, NasHdrPersonality | null];
        get_lac_3gpp(): [boolean, number];
        get_lte_tac(): [boolean, number];
        get_mnc_pcs_digit_include_status(): [boolean, number, number, boolean];
        get_network_name_source(): [boolean, NasNetworkNameSource | null];
        get_plmn_name_flag_3gpp(): [boolean, boolean];
        get_plmn_not_changed_indication(): [boolean, boolean];
        get_prl_indicator_3gpp2(): [boolean, boolean];
        get_roaming_indicator(): [boolean, NasRoamingIndicatorStatus | null];
        get_roaming_indicator_list(): [boolean, IndicationNasServingSystemOutputRoamingIndicatorListElement[] | null];
        get_serving_system(): [boolean, NasRegistrationState | null, NasAttachState | null, NasAttachState | null, NasNetworkType | null, NasRadioInterface[] | null];
        get_time_zone_3gpp(): [boolean, number];
        get_time_zone_3gpp2(): [boolean, number, number, boolean];
        get_umts_primary_scrambling_code(): [boolean, number];
        get_universal_time_and_local_time_zone_3gpp(): [boolean, number, number, number, number, number, number, number];
        ref(): IndicationNasServingSystemOutput;
        unref(): void;
    }
    class IndicationNasServingSystemOutputRoamingIndicatorListElement {
        static $gtype: GObject.GType<IndicationNasServingSystemOutputRoamingIndicatorListElement>;
        radio_interface: NasRadioInterface;
        roaming_indicator: NasRoamingIndicatorStatus;
    }
    abstract class IndicationNasSignalInfoOutput {
        static $gtype: GObject.GType<IndicationNasSignalInfoOutput>;
        get_5g_signal_strength(): [boolean, number, number];
        get_5g_signal_strength_extended(): [boolean, number];
        get_cdma_signal_strength(): [boolean, number, number];
        get_gsm_signal_strength(): [boolean, number];
        get_hdr_signal_strength(): [boolean, number, number, NasEvdoSinrLevel | null, number];
        get_lte_signal_strength(): [boolean, number, number, number, number];
        get_tdma_signal_strength(): [boolean, number];
        get_wcdma_rscp(): [boolean, number];
        get_wcdma_signal_strength(): [boolean, number, number];
        ref(): IndicationNasSignalInfoOutput;
        unref(): void;
    }
    abstract class IndicationNasSystemInfoOutput {
        static $gtype: GObject.GType<IndicationNasSystemInfoOutput>;
        get_additional_cdma_system_info(): [boolean, number, number];
        get_additional_gsm_system_info(): [boolean, number, NasCellBroadcastCapability | null];
        get_additional_hdr_system_info(): [boolean, number];
        get_additional_lte_system_info(): [boolean, number];
        get_additional_wcdma_system_info(): [boolean, number, NasCellBroadcastCapability | null];
        get_cdma_service_status(): [boolean, NasServiceStatus | null, boolean];
        get_cdma_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, boolean, boolean, number, boolean, number, boolean, boolean, boolean, number, number, boolean, number, number, number, boolean, number, boolean, string, string];
        get_dcnr_restriction_info(): [boolean, boolean];
        get_eutra_with_nr5g_availability(): [boolean, boolean];
        get_gsm_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_gsm_cipher_domain(): [boolean, NasNetworkServiceDomain | null];
        get_gsm_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_gsm_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, boolean, boolean, boolean];
        get_hdr_service_status(): [boolean, NasServiceStatus | null, boolean];
        get_hdr_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, boolean, boolean, NasHdrPersonality | null, boolean, NasHdrProtocolRevision | null, boolean, string];
        get_lte_embms_coverage_info_support(): [boolean, boolean];
        get_lte_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_lte_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, number];
        get_lte_voice_support(): [boolean, boolean];
        get_nr5g_service_status_info(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_nr5g_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, number, boolean, string, string, boolean, number];
        get_nr5g_tracking_area_code(): [boolean, Uint8Array | null];
        get_plmn_not_changed_indication(): [boolean, boolean];
        get_sim_reject_info(): [boolean, NasSimRejectState | null];
        get_td_scdma_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_td_scma_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, NasWcdmaHsService | null, boolean, NasWcdmaHsService | null, boolean, number, boolean, NasCellBroadcastCapability | null, boolean, NasCallBarringStatus | null, boolean, NasCallBarringStatus | null, boolean, NasNetworkServiceDomain | null];
        get_wcdma_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_wcdma_cipher_domain(): [boolean, NasNetworkServiceDomain | null];
        get_wcdma_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_wcdma_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, NasWcdmaHsService | null, boolean, NasWcdmaHsService | null, boolean, number];
        ref(): IndicationNasSystemInfoOutput;
        unref(): void;
    }
    abstract class IndicationOmaEventReportOutput {
        static $gtype: GObject.GType<IndicationOmaEventReportOutput>;
        get_network_initiated_alert(): [boolean, OmaSessionType | null, number];
        get_session_fail_reason(): [boolean, OmaSessionFailedReason | null];
        get_session_state(): [boolean, OmaSessionState | null];
        ref(): IndicationOmaEventReportOutput;
        unref(): void;
    }
    abstract class IndicationPdcActivateConfigOutput {
        static $gtype: GObject.GType<IndicationPdcActivateConfigOutput>;
        get_indication_result(): [boolean, number];
        get_token(): [boolean, number];
        ref(): IndicationPdcActivateConfigOutput;
        unref(): void;
    }
    abstract class IndicationPdcDeactivateConfigOutput {
        static $gtype: GObject.GType<IndicationPdcDeactivateConfigOutput>;
        get_indication_result(): [boolean, number];
        get_token(): [boolean, number];
        ref(): IndicationPdcDeactivateConfigOutput;
        unref(): void;
    }
    abstract class IndicationPdcGetConfigInfoOutput {
        static $gtype: GObject.GType<IndicationPdcGetConfigInfoOutput>;
        get_description(): [boolean, string];
        get_indication_result(): [boolean, number];
        get_token(): [boolean, number];
        get_total_size(): [boolean, number];
        get_version(): [boolean, number];
        ref(): IndicationPdcGetConfigInfoOutput;
        unref(): void;
    }
    abstract class IndicationPdcGetSelectedConfigOutput {
        static $gtype: GObject.GType<IndicationPdcGetSelectedConfigOutput>;
        get_active_id(): [boolean, Uint8Array | null];
        get_indication_result(): [boolean, number];
        get_pending_id(): [boolean, Uint8Array | null];
        get_token(): [boolean, number];
        ref(): IndicationPdcGetSelectedConfigOutput;
        unref(): void;
    }
    abstract class IndicationPdcListConfigsOutput {
        static $gtype: GObject.GType<IndicationPdcListConfigsOutput>;
        get_configs(): [boolean, IndicationPdcListConfigsOutputConfigsElement[] | null];
        get_indication_result(): [boolean, number];
        get_token(): [boolean, number];
        ref(): IndicationPdcListConfigsOutput;
        unref(): void;
    }
    class IndicationPdcListConfigsOutputConfigsElement {
        static $gtype: GObject.GType<IndicationPdcListConfigsOutputConfigsElement>;
        config_type: PdcConfigurationType;
        id: null[];
    }
    abstract class IndicationPdcLoadConfigOutput {
        static $gtype: GObject.GType<IndicationPdcLoadConfigOutput>;
        get_frame_reset(): [boolean, boolean];
        get_indication_result(): [boolean, number];
        get_received(): [boolean, number];
        get_remaining_size(): [boolean, number];
        get_token(): [boolean, number];
        ref(): IndicationPdcLoadConfigOutput;
        unref(): void;
    }
    abstract class IndicationPdcRefreshOutput {
        static $gtype: GObject.GType<IndicationPdcRefreshOutput>;
        get_refresh_event(): [boolean, PdcRefreshEventType | null];
        get_slot_id(): [boolean, number];
        get_subscription_id(): [boolean, number];
        ref(): IndicationPdcRefreshOutput;
        unref(): void;
    }
    abstract class IndicationPdcSetSelectedConfigOutput {
        static $gtype: GObject.GType<IndicationPdcSetSelectedConfigOutput>;
        get_indication_result(): [boolean, number];
        get_token(): [boolean, number];
        ref(): IndicationPdcSetSelectedConfigOutput;
        unref(): void;
    }
    abstract class IndicationPdsEventReportOutput {
        static $gtype: GObject.GType<IndicationPdsEventReportOutput>;
        get_extended_nmea_position(): [boolean, PdsOperationMode | null, string];
        get_nmea_position(): [boolean, string];
        get_position_session_status(): [boolean, PdsPositionSessionStatus | null];
        ref(): IndicationPdsEventReportOutput;
        unref(): void;
    }
    abstract class IndicationQosFlowStatusOutput {
        static $gtype: GObject.GType<IndicationQosFlowStatusOutput>;
        get_value(): [boolean, number, QosStatus | null, QosEvent | null];
        ref(): IndicationQosFlowStatusOutput;
        unref(): void;
    }
    abstract class IndicationQosNetworkStatusOutput {
        static $gtype: GObject.GType<IndicationQosNetworkStatusOutput>;
        get_qos_supported(): [boolean, boolean];
        ref(): IndicationQosNetworkStatusOutput;
        unref(): void;
    }
    abstract class IndicationSscReportLargeOutput {
        static $gtype: GObject.GType<IndicationSscReportLargeOutput>;
        get_client_id(): [boolean, number];
        get_data(): [boolean, Uint8Array | null];
        ref(): IndicationSscReportLargeOutput;
        unref(): void;
    }
    abstract class IndicationSscReportSmallOutput {
        static $gtype: GObject.GType<IndicationSscReportSmallOutput>;
        get_client_id(): [boolean, number];
        get_data(): [boolean, Uint8Array | null];
        ref(): IndicationSscReportSmallOutput;
        unref(): void;
    }
    abstract class IndicationUimCardStatusOutput {
        static $gtype: GObject.GType<IndicationUimCardStatusOutput>;
        get_card_status(): [boolean, number, number, number, number, IndicationUimCardStatusOutputCardStatusCardsElementGir[] | null];
        ref(): IndicationUimCardStatusOutput;
        unref(): void;
    }
    class IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElementV2 {
        static $gtype: GObject.GType<IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElementV2>;
        type: UimCardApplicationType;
        state: UimCardApplicationState;
        personalization_state: UimCardApplicationPersonalizationState;
        personalization_feature: UimCardApplicationPersonalizationFeatureStatus;
        personalization_retries: number;
        personalization_unblock_retries: number;
        application_identifier_value: null[];
        upin_replaces_pin1: boolean;
        pin1_state: UimPinState;
        pin1_retries: number;
        puk1_retries: number;
        pin2_state: UimPinState;
        pin2_retries: number;
        puk2_retries: number;
    }
    class IndicationUimCardStatusOutputCardStatusCardsElementGir {
        static $gtype: GObject.GType<IndicationUimCardStatusOutputCardStatusCardsElementGir>;
        card_state: UimCardState;
        upin_state: UimPinState;
        upin_retries: number;
        upuk_retries: number;
        error_code: UimCardError;
        applications: IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElementV2[];
    }
    abstract class IndicationUimRefreshOutput {
        static $gtype: GObject.GType<IndicationUimRefreshOutput>;
        get_event(): [boolean, UimRefreshStage | null, UimRefreshMode | null, UimSessionType | null, Uint8Array | null, IndicationUimRefreshOutputEventFilesElement[] | null];
        ref(): IndicationUimRefreshOutput;
        unref(): void;
    }
    class IndicationUimRefreshOutputEventFilesElement {
        static $gtype: GObject.GType<IndicationUimRefreshOutputEventFilesElement>;
        file_id: number;
        path: null[];
        constructor(properties?: Partial<{
            file_id: number;
            path: null[];
        }>);
    }
    abstract class IndicationUimSlotStatusOutput {
        static $gtype: GObject.GType<IndicationUimSlotStatusOutput>;
        get_compat_context(): null;
        get_physical_slot_information(): [boolean, PhysicalSlotInformationSlot[] | null];
        get_physical_slot_status(): [boolean, PhysicalSlotStatusSlot[] | null];
        get_slot_eid(): [boolean, SlotEidElement[] | null];
        ref(): IndicationUimSlotStatusOutput;
        set_compat_context(compat_context: null): void;
        unref(): void;
    }
    abstract class IndicationVoiceAllCallStatusOutput {
        static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutput>;
        get_call_information(): [boolean, IndicationVoiceAllCallStatusOutputCallInformationCall[] | null];
        get_remote_party_number(): [boolean, IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[] | null];
        ref(): IndicationVoiceAllCallStatusOutput;
        unref(): void;
    }
    class IndicationVoiceAllCallStatusOutputCallInformationCall {
        static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutputCallInformationCall>;
        id: number;
        state: VoiceCallState;
        type: VoiceCallType;
        direction: VoiceCallDirection;
        mode: VoiceCallMode;
        multipart_indicator: boolean;
        als: VoiceAls;
    }
    class IndicationVoiceAllCallStatusOutputRemotePartyNumberCall {
        static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutputRemotePartyNumberCall>;
        id: number;
        presentation_indicator: VoicePresentation;
        type: string;
    }
    abstract class IndicationVoiceOriginateUssdNoWaitOutput {
        static $gtype: GObject.GType<IndicationVoiceOriginateUssdNoWaitOutput>;
        get_alpha_identifier(): [boolean, VoiceAlphaDataCodingScheme | null, Uint8Array | null];
        get_error_code(): [boolean, number];
        get_failure_cause(): [boolean, VoiceCallEndReason | null];
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        get_uss_data_utf16(): [boolean, number[] | null];
        ref(): IndicationVoiceOriginateUssdNoWaitOutput;
        unref(): void;
    }
    abstract class IndicationVoiceSupplementaryServiceOutput {
        static $gtype: GObject.GType<IndicationVoiceSupplementaryServiceOutput>;
        get_info(): [boolean, number, VoiceSupplementaryServiceNotificationType | null];
        ref(): IndicationVoiceSupplementaryServiceOutput;
        unref(): void;
    }
    abstract class IndicationVoiceUssdOutput {
        static $gtype: GObject.GType<IndicationVoiceUssdOutput>;
        get_user_action(): [boolean, VoiceUserAction | null];
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        get_uss_data_utf16(): [boolean, number[] | null];
        ref(): IndicationVoiceUssdOutput;
        unref(): void;
    }
    abstract class IndicationWdaLoopbackConfigurationOutput {
        static $gtype: GObject.GType<IndicationWdaLoopbackConfigurationOutput>;
        get_loopback_state(): [boolean, WdaLoopBackState | null];
        get_replication_factor(): [boolean, number];
        ref(): IndicationWdaLoopbackConfigurationOutput;
        unref(): void;
    }
    abstract class IndicationWdsEventReportOutput {
        static $gtype: GObject.GType<IndicationWdsEventReportOutput>;
        get_channel_rates(): [boolean, number, number];
        get_current_data_bearer_technology(): [boolean, WdsNetworkType | null, number, number];
        get_data_bearer_technology(): [boolean, WdsDataBearerTechnology | null];
        get_data_call_address_family(): [boolean, WdsIpFamily | null];
        get_data_call_status(): [boolean, WdsDataCallStatus | null];
        get_data_call_type(): [boolean, WdsDataCallType | null, WdsTetheredCallType | null];
        get_data_systems(): [boolean, WdsDataSystemNetworkType | null, IndicationWdsEventReportOutputDataSystemsNetworksNetwork[] | null];
        get_dormancy_status(): [boolean, WdsDormancyStatus | null];
        get_evdo_page_monitor_period_change(): [boolean, number, boolean];
        get_extended_data_bearer_technology(): [boolean, WdsDataSystemNetworkType | null, WdsRadioAccessTechnology | null, WdsExtendedDataBearerTechnology3gpp | null, WdsExtendedDataBearerTechnology3gpp2 | null];
        get_mip_status(): [boolean, boolean];
        get_pdn_filters_removed(): [boolean, number[] | null];
        get_preferred_data_system(): [boolean, WdsDataSystem | null];
        get_rx_bytes_ok(): [boolean, number];
        get_rx_overflows(): [boolean, number];
        get_rx_packets_dropped(): [boolean, number];
        get_rx_packets_error(): [boolean, number];
        get_rx_packets_ok(): [boolean, number];
        get_tx_bytes_ok(): [boolean, number];
        get_tx_overflows(): [boolean, number];
        get_tx_packets_dropped(): [boolean, number];
        get_tx_packets_error(): [boolean, number];
        get_tx_packets_ok(): [boolean, number];
        get_uplink_flow_control_enabled(): [boolean, boolean];
        ref(): IndicationWdsEventReportOutput;
        unref(): void;
    }
    class IndicationWdsEventReportOutputDataSystemsNetworksNetwork {
        static $gtype: GObject.GType<IndicationWdsEventReportOutputDataSystemsNetworksNetwork>;
        network_type: WdsDataSystemNetworkType;
        rat_mask: number;
        so_mask: number;
    }
    abstract class IndicationWdsExtendedIpConfigOutput {
        static $gtype: GObject.GType<IndicationWdsExtendedIpConfigOutput>;
        get_changed_ip_configuration(): [boolean, WdsRequestedSettings | null];
        ref(): IndicationWdsExtendedIpConfigOutput;
        unref(): void;
    }
    abstract class IndicationWdsPacketServiceStatusOutput {
        static $gtype: GObject.GType<IndicationWdsPacketServiceStatusOutput>;
        get_bearer_id(): [boolean, number];
        get_call_end_reason(): [boolean, WdsCallEndReason | null];
        get_connection_status(): [boolean, WdsConnectionStatus | null, boolean];
        get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference | null];
        get_ip_family(): [boolean, WdsIpFamily | null];
        get_verbose_call_end_reason(): [boolean, WdsVerboseCallEndReasonType | null, number];
        get_xlat_capability(): [boolean, boolean];
        ref(): IndicationWdsPacketServiceStatusOutput;
        unref(): void;
    }
    abstract class IndicationWdsProfileChangedOutput {
        static $gtype: GObject.GType<IndicationWdsProfileChangedOutput>;
        get_profile_event(): [boolean, WdsProfileType | null, number, WdsProfileChangeEvent | null];
        ref(): IndicationWdsProfileChangedOutput;
        unref(): void;
    }
    abstract class IndicationWdsSetLteAttachPdnListOutput {
        static $gtype: GObject.GType<IndicationWdsSetLteAttachPdnListOutput>;
        get_action_result(): [boolean, boolean];
        ref(): IndicationWdsSetLteAttachPdnListOutput;
        unref(): void;
    }
    abstract class IndicationWmsEventReportOutput {
        static $gtype: GObject.GType<IndicationWmsEventReportOutput>;
        get_etws_message(): [boolean, WmsNotificationType | null, Uint8Array | null];
        get_etws_plmn_information(): [boolean, number, number];
        get_message_mode(): [boolean, WmsMessageMode | null];
        get_mt_message(): [boolean, WmsStorageType | null, number];
        get_sms_on_ims(): [boolean, boolean];
        get_smsc_address(): [boolean, string];
        get_transfer_route_mt_message(): [boolean, WmsAckIndicator | null, number, WmsMessageFormat | null, Uint8Array | null];
        ref(): IndicationWmsEventReportOutput;
        unref(): void;
    }
    abstract class IndicationWmsSmscAddressOutput {
        static $gtype: GObject.GType<IndicationWmsSmscAddressOutput>;
        get_address(): [boolean, string, string];
        ref(): IndicationWmsSmscAddressOutput;
        unref(): void;
    }
    abstract class IndicationWmsTransportNetworkRegistrationStatusOutput {
        static $gtype: GObject.GType<IndicationWmsTransportNetworkRegistrationStatusOutput>;
        get_registration_status(): [boolean, WmsNWRegistration | null];
        ref(): IndicationWmsTransportNetworkRegistrationStatusOutput;
        unref(): void;
    }
    class MessageAtrSendInput {
        static $gtype: GObject.GType<MessageAtrSendInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageAtrSendInput;
        get_message(): [boolean, string];
        ref(): MessageAtrSendInput;
        set_message(value_message: string): boolean;
        unref(): void;
    }
    abstract class MessageAtrSendOutput {
        static $gtype: GObject.GType<MessageAtrSendOutput>;
        get_result(): boolean;
        ref(): MessageAtrSendOutput;
        unref(): void;
    }
    class MessageContext {
        static $gtype: GObject.GType<MessageContext>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageContext;
        get_vendor_id(): number;
        ref(): MessageContext;
        set_vendor_id(vendor_id: number): void;
        unref(): void;
    }
    class MessageDmsActivateAutomaticInput {
        static $gtype: GObject.GType<MessageDmsActivateAutomaticInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsActivateAutomaticInput;
        get_activation_code(): [boolean, string];
        ref(): MessageDmsActivateAutomaticInput;
        set_activation_code(value_activation_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsActivateAutomaticOutput {
        static $gtype: GObject.GType<MessageDmsActivateAutomaticOutput>;
        get_result(): boolean;
        ref(): MessageDmsActivateAutomaticOutput;
        unref(): void;
    }
    class MessageDmsActivateManualInput {
        static $gtype: GObject.GType<MessageDmsActivateManualInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsActivateManualInput;
        get_info(): [boolean, string, number, string, string];
        get_mn_aaa_key(): [boolean, string];
        get_mn_ha_key(): [boolean, string];
        get_prl(): [boolean, number, number, Uint8Array | null];
        ref(): MessageDmsActivateManualInput;
        set_info(value_info_service_programming_code: string, value_info_system_identification_number: number, value_info_mobile_directory_number: string, value_info_mobile_identification_number: string): boolean;
        set_mn_aaa_key(value_mn_aaa_key: string): boolean;
        set_mn_ha_key(value_mn_ha_key: string): boolean;
        set_prl(value_prl_prl_total_length: number, value_prl_prl_segment_sequence: number, value_prl_prl_segment: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageDmsActivateManualOutput {
        static $gtype: GObject.GType<MessageDmsActivateManualOutput>;
        get_result(): boolean;
        ref(): MessageDmsActivateManualOutput;
        unref(): void;
    }
    class MessageDmsDeleteStoredImageInput {
        static $gtype: GObject.GType<MessageDmsDeleteStoredImageInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsDeleteStoredImageInput;
        get_image_details(): [boolean, DmsFirmwareImageType | null, Uint8Array | null, string];
        ref(): MessageDmsDeleteStoredImageInput;
        set_image_details(value_image_details_type: DmsFirmwareImageType, value_image_details_unique_id: Uint8Array | string, value_image_details_build_id: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsDeleteStoredImageOutput {
        static $gtype: GObject.GType<MessageDmsDeleteStoredImageOutput>;
        get_result(): boolean;
        ref(): MessageDmsDeleteStoredImageOutput;
        unref(): void;
    }
    class MessageDmsFoxconnChangeDeviceModeInput {
        static $gtype: GObject.GType<MessageDmsFoxconnChangeDeviceModeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsFoxconnChangeDeviceModeInput;
        get_mode(): [boolean, DmsFoxconnDeviceMode | null];
        ref(): MessageDmsFoxconnChangeDeviceModeInput;
        set_mode(value_mode: DmsFoxconnDeviceMode): boolean;
        unref(): void;
    }
    abstract class MessageDmsFoxconnChangeDeviceModeOutput {
        static $gtype: GObject.GType<MessageDmsFoxconnChangeDeviceModeOutput>;
        get_result(): boolean;
        ref(): MessageDmsFoxconnChangeDeviceModeOutput;
        unref(): void;
    }
    class MessageDmsFoxconnGetFirmwareVersionInput {
        static $gtype: GObject.GType<MessageDmsFoxconnGetFirmwareVersionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsFoxconnGetFirmwareVersionInput;
        get_version_type(): [boolean, DmsFoxconnFirmwareVersionType | null];
        ref(): MessageDmsFoxconnGetFirmwareVersionInput;
        set_version_type(value_version_type: DmsFoxconnFirmwareVersionType): boolean;
        unref(): void;
    }
    abstract class MessageDmsFoxconnGetFirmwareVersionOutput {
        static $gtype: GObject.GType<MessageDmsFoxconnGetFirmwareVersionOutput>;
        get_result(): boolean;
        get_version(): [boolean, string];
        ref(): MessageDmsFoxconnGetFirmwareVersionOutput;
        unref(): void;
    }
    class MessageDmsFoxconnSetFccAuthenticationInput {
        static $gtype: GObject.GType<MessageDmsFoxconnSetFccAuthenticationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsFoxconnSetFccAuthenticationInput;
        get_value(): [boolean, number];
        ref(): MessageDmsFoxconnSetFccAuthenticationInput;
        set_value(value_value: number): boolean;
        unref(): void;
    }
    abstract class MessageDmsFoxconnSetFccAuthenticationOutput {
        static $gtype: GObject.GType<MessageDmsFoxconnSetFccAuthenticationOutput>;
        get_result(): boolean;
        ref(): MessageDmsFoxconnSetFccAuthenticationOutput;
        unref(): void;
    }
    class MessageDmsFoxconnSetFccAuthenticationV2Input {
        static $gtype: GObject.GType<MessageDmsFoxconnSetFccAuthenticationV2Input>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsFoxconnSetFccAuthenticationV2Input;
        get_magic_number(): [boolean, number];
        get_magic_string(): [boolean, string];
        ref(): MessageDmsFoxconnSetFccAuthenticationV2Input;
        set_magic_number(value_magic_number: number): boolean;
        set_magic_string(value_magic_string: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsFoxconnSetFccAuthenticationV2Output {
        static $gtype: GObject.GType<MessageDmsFoxconnSetFccAuthenticationV2Output>;
        get_result(): boolean;
        ref(): MessageDmsFoxconnSetFccAuthenticationV2Output;
        unref(): void;
    }
    abstract class MessageDmsGetActivationStateOutput {
        static $gtype: GObject.GType<MessageDmsGetActivationStateOutput>;
        get_info(): [boolean, DmsActivationState | null];
        get_result(): boolean;
        ref(): MessageDmsGetActivationStateOutput;
        unref(): void;
    }
    abstract class MessageDmsGetAltNetConfigOutput {
        static $gtype: GObject.GType<MessageDmsGetAltNetConfigOutput>;
        get_config(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageDmsGetAltNetConfigOutput;
        unref(): void;
    }
    abstract class MessageDmsGetBandCapabilitiesOutput {
        static $gtype: GObject.GType<MessageDmsGetBandCapabilitiesOutput>;
        get_band_capability(): [boolean, DmsBandCapability | null];
        get_extended_lte_band_capability(): [boolean, number[] | null];
        get_lte_band_capability(): [boolean, DmsLteBandCapability | null];
        get_nr5g_band_capability(): [boolean, number[] | null];
        get_result(): boolean;
        ref(): MessageDmsGetBandCapabilitiesOutput;
        unref(): void;
    }
    abstract class MessageDmsGetBootImageDownloadModeOutput {
        static $gtype: GObject.GType<MessageDmsGetBootImageDownloadModeOutput>;
        get_mode(): [boolean, DmsBootImageDownloadMode | null];
        get_result(): boolean;
        ref(): MessageDmsGetBootImageDownloadModeOutput;
        unref(): void;
    }
    abstract class MessageDmsGetCapabilitiesOutput {
        static $gtype: GObject.GType<MessageDmsGetCapabilitiesOutput>;
        get_info(): [boolean, number, number, DmsDataServiceCapability | null, DmsSimCapability | null, DmsRadioInterface[] | null];
        get_result(): boolean;
        ref(): MessageDmsGetCapabilitiesOutput;
        unref(): void;
    }
    abstract class MessageDmsGetFactorySkuOutput {
        static $gtype: GObject.GType<MessageDmsGetFactorySkuOutput>;
        get_result(): boolean;
        get_sku(): [boolean, string];
        ref(): MessageDmsGetFactorySkuOutput;
        unref(): void;
    }
    abstract class MessageDmsGetFirmwarePreferenceOutput {
        static $gtype: GObject.GType<MessageDmsGetFirmwarePreferenceOutput>;
        get_list(): [boolean, MessageDmsGetFirmwarePreferenceOutputListImage[] | null];
        get_result(): boolean;
        ref(): MessageDmsGetFirmwarePreferenceOutput;
        unref(): void;
    }
    class MessageDmsGetFirmwarePreferenceOutputListImage {
        static $gtype: GObject.GType<MessageDmsGetFirmwarePreferenceOutputListImage>;
        type: DmsFirmwareImageType;
        unique_id: null[];
        build_id: string;
    }
    abstract class MessageDmsGetHardwareRevisionOutput {
        static $gtype: GObject.GType<MessageDmsGetHardwareRevisionOutput>;
        get_result(): boolean;
        get_revision(): [boolean, string];
        ref(): MessageDmsGetHardwareRevisionOutput;
        unref(): void;
    }
    abstract class MessageDmsGetIdsOutput {
        static $gtype: GObject.GType<MessageDmsGetIdsOutput>;
        get_esn(): [boolean, string];
        get_imei(): [boolean, string];
        get_imei_software_version(): [boolean, string];
        get_meid(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsGetIdsOutput;
        unref(): void;
    }
    class MessageDmsGetMacAddressInput {
        static $gtype: GObject.GType<MessageDmsGetMacAddressInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsGetMacAddressInput;
        get_device(): [boolean, DmsMacType | null];
        ref(): MessageDmsGetMacAddressInput;
        set_device(value_device: DmsMacType): boolean;
        unref(): void;
    }
    abstract class MessageDmsGetMacAddressOutput {
        static $gtype: GObject.GType<MessageDmsGetMacAddressOutput>;
        get_mac_address(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageDmsGetMacAddressOutput;
        unref(): void;
    }
    abstract class MessageDmsGetManufacturerOutput {
        static $gtype: GObject.GType<MessageDmsGetManufacturerOutput>;
        get_manufacturer(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsGetManufacturerOutput;
        unref(): void;
    }
    abstract class MessageDmsGetModelOutput {
        static $gtype: GObject.GType<MessageDmsGetModelOutput>;
        get_model(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsGetModelOutput;
        unref(): void;
    }
    abstract class MessageDmsGetMsisdnOutput {
        static $gtype: GObject.GType<MessageDmsGetMsisdnOutput>;
        get_msisdn(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsGetMsisdnOutput;
        unref(): void;
    }
    abstract class MessageDmsGetOperatingModeOutput {
        static $gtype: GObject.GType<MessageDmsGetOperatingModeOutput>;
        get_hardware_restricted_mode(): [boolean, boolean];
        get_mode(): [boolean, DmsOperatingMode | null];
        get_offline_reason(): [boolean, DmsOfflineReason | null];
        get_result(): boolean;
        ref(): MessageDmsGetOperatingModeOutput;
        unref(): void;
    }
    abstract class MessageDmsGetPowerStateOutput {
        static $gtype: GObject.GType<MessageDmsGetPowerStateOutput>;
        get_info(): [boolean, number, number];
        get_result(): boolean;
        ref(): MessageDmsGetPowerStateOutput;
        unref(): void;
    }
    abstract class MessageDmsGetPrlVersionOutput {
        static $gtype: GObject.GType<MessageDmsGetPrlVersionOutput>;
        get_prl_only_preference(): [boolean, boolean];
        get_result(): boolean;
        get_version(): [boolean, number];
        ref(): MessageDmsGetPrlVersionOutput;
        unref(): void;
    }
    abstract class MessageDmsGetRevisionOutput {
        static $gtype: GObject.GType<MessageDmsGetRevisionOutput>;
        get_result(): boolean;
        get_revision(): [boolean, string];
        ref(): MessageDmsGetRevisionOutput;
        unref(): void;
    }
    abstract class MessageDmsGetSoftwareVersionOutput {
        static $gtype: GObject.GType<MessageDmsGetSoftwareVersionOutput>;
        get_result(): boolean;
        get_version(): [boolean, string];
        ref(): MessageDmsGetSoftwareVersionOutput;
        unref(): void;
    }
    class MessageDmsGetStoredImageInfoInput {
        static $gtype: GObject.GType<MessageDmsGetStoredImageInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsGetStoredImageInfoInput;
        get_image_details(): [boolean, DmsFirmwareImageType | null, Uint8Array | null, string];
        ref(): MessageDmsGetStoredImageInfoInput;
        set_image_details(value_image_details_type: DmsFirmwareImageType, value_image_details_unique_id: Uint8Array | string, value_image_details_build_id: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsGetStoredImageInfoOutput {
        static $gtype: GObject.GType<MessageDmsGetStoredImageInfoOutput>;
        get_boot_version(): [boolean, number, number];
        get_oem_lock_id(): [boolean, number];
        get_pri_version(): [boolean, number, string];
        get_result(): boolean;
        ref(): MessageDmsGetStoredImageInfoOutput;
        unref(): void;
    }
    abstract class MessageDmsGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageDmsGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageDmsGetSupportedMessagesOutput;
        unref(): void;
    }
    abstract class MessageDmsGetTimeOutput {
        static $gtype: GObject.GType<MessageDmsGetTimeOutput>;
        get_device_time(): [boolean, number, DmsTimeSource | null];
        get_result(): boolean;
        get_system_time(): [boolean, number];
        get_user_time(): [boolean, number];
        ref(): MessageDmsGetTimeOutput;
        unref(): void;
    }
    abstract class MessageDmsGetUserLockStateOutput {
        static $gtype: GObject.GType<MessageDmsGetUserLockStateOutput>;
        get_enabled(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageDmsGetUserLockStateOutput;
        unref(): void;
    }
    class MessageDmsHpChangeDeviceModeInput {
        static $gtype: GObject.GType<MessageDmsHpChangeDeviceModeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsHpChangeDeviceModeInput;
        get_mode(): [boolean, DmsHpDeviceMode | null];
        ref(): MessageDmsHpChangeDeviceModeInput;
        set_mode(value_mode: DmsHpDeviceMode): boolean;
        unref(): void;
    }
    abstract class MessageDmsHpChangeDeviceModeOutput {
        static $gtype: GObject.GType<MessageDmsHpChangeDeviceModeOutput>;
        get_result(): boolean;
        ref(): MessageDmsHpChangeDeviceModeOutput;
        unref(): void;
    }
    abstract class MessageDmsListStoredImagesOutput {
        static $gtype: GObject.GType<MessageDmsListStoredImagesOutput>;
        get_list(): [boolean, MessageDmsListStoredImagesOutputListImageGir[] | null];
        get_result(): boolean;
        ref(): MessageDmsListStoredImagesOutput;
        unref(): void;
    }
    class MessageDmsListStoredImagesOutputListImageGir {
        static $gtype: GObject.GType<MessageDmsListStoredImagesOutputListImageGir>;
        type: DmsFirmwareImageType;
        maximum_images: number;
        index_of_running_image: number;
        sublist: MessageDmsListStoredImagesOutputListImageSublistSublistElement[];
    }
    class MessageDmsListStoredImagesOutputListImageSublistSublistElement {
        static $gtype: GObject.GType<MessageDmsListStoredImagesOutputListImageSublistSublistElement>;
        storage_index: number;
        failure_count: number;
        unique_id: null[];
        build_id: string;
        constructor(properties?: Partial<{
            storage_index: number;
            failure_count: number;
            unique_id: null[];
            build_id: string;
        }>);
    }
    abstract class MessageDmsReadEriFileOutput {
        static $gtype: GObject.GType<MessageDmsReadEriFileOutput>;
        get_eri_file(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageDmsReadEriFileOutput;
        unref(): void;
    }
    abstract class MessageDmsReadUserDataOutput {
        static $gtype: GObject.GType<MessageDmsReadUserDataOutput>;
        get_result(): boolean;
        get_user_data(): [boolean, Uint8Array | null];
        ref(): MessageDmsReadUserDataOutput;
        unref(): void;
    }
    abstract class MessageDmsResetOutput {
        static $gtype: GObject.GType<MessageDmsResetOutput>;
        get_result(): boolean;
        ref(): MessageDmsResetOutput;
        unref(): void;
    }
    class MessageDmsRestoreFactoryDefaultsInput {
        static $gtype: GObject.GType<MessageDmsRestoreFactoryDefaultsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsRestoreFactoryDefaultsInput;
        get_service_programming_code(): [boolean, string];
        ref(): MessageDmsRestoreFactoryDefaultsInput;
        set_service_programming_code(value_service_programming_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsRestoreFactoryDefaultsOutput {
        static $gtype: GObject.GType<MessageDmsRestoreFactoryDefaultsOutput>;
        get_result(): boolean;
        ref(): MessageDmsRestoreFactoryDefaultsOutput;
        unref(): void;
    }
    class MessageDmsSetAltNetConfigInput {
        static $gtype: GObject.GType<MessageDmsSetAltNetConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetAltNetConfigInput;
        get_config(): [boolean, boolean];
        ref(): MessageDmsSetAltNetConfigInput;
        set_config(value_config: boolean): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetAltNetConfigOutput {
        static $gtype: GObject.GType<MessageDmsSetAltNetConfigOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetAltNetConfigOutput;
        unref(): void;
    }
    class MessageDmsSetBootImageDownloadModeInput {
        static $gtype: GObject.GType<MessageDmsSetBootImageDownloadModeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetBootImageDownloadModeInput;
        get_mode(): [boolean, DmsBootImageDownloadMode | null];
        ref(): MessageDmsSetBootImageDownloadModeInput;
        set_mode(value_mode: DmsBootImageDownloadMode): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetBootImageDownloadModeOutput {
        static $gtype: GObject.GType<MessageDmsSetBootImageDownloadModeOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetBootImageDownloadModeOutput;
        unref(): void;
    }
    class MessageDmsSetEventReportInput {
        static $gtype: GObject.GType<MessageDmsSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetEventReportInput;
        get_activation_state_reporting(): [boolean, boolean];
        get_battery_level_report_limits(): [boolean, number, number];
        get_operating_mode_reporting(): [boolean, boolean];
        get_pin_state_reporting(): [boolean, boolean];
        get_power_state_reporting(): [boolean, boolean];
        get_prl_init_reporting(): [boolean, boolean];
        get_uim_state_reporting(): [boolean, boolean];
        get_wireless_disable_state_reporting(): [boolean, boolean];
        ref(): MessageDmsSetEventReportInput;
        set_activation_state_reporting(value_activation_state_reporting: boolean): boolean;
        set_battery_level_report_limits(value_battery_level_report_limits_lower_limit: number, value_battery_level_report_limits_upper_limit: number): boolean;
        set_operating_mode_reporting(value_operating_mode_reporting: boolean): boolean;
        set_pin_state_reporting(value_pin_state_reporting: boolean): boolean;
        set_power_state_reporting(value_power_state_reporting: boolean): boolean;
        set_prl_init_reporting(value_prl_init_reporting: boolean): boolean;
        set_uim_state_reporting(value_uim_state_reporting: boolean): boolean;
        set_wireless_disable_state_reporting(value_wireless_disable_state_reporting: boolean): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetEventReportOutput {
        static $gtype: GObject.GType<MessageDmsSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetEventReportOutput;
        unref(): void;
    }
    abstract class MessageDmsSetFccAuthenticationOutput {
        static $gtype: GObject.GType<MessageDmsSetFccAuthenticationOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetFccAuthenticationOutput;
        unref(): void;
    }
    abstract class MessageDmsSetFirmwareIdOutput {
        static $gtype: GObject.GType<MessageDmsSetFirmwareIdOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetFirmwareIdOutput;
        unref(): void;
    }
    class MessageDmsSetFirmwarePreferenceInput {
        static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetFirmwarePreferenceInput;
        get_download_override(): [boolean, boolean];
        get_list(): [boolean, MessageDmsSetFirmwarePreferenceInputListImage[] | null];
        get_modem_storage_index(): [boolean, number];
        ref(): MessageDmsSetFirmwarePreferenceInput;
        set_download_override(value_download_override: boolean): boolean;
        set_list(value_list_ptr: MessageDmsSetFirmwarePreferenceInputListImage[]): boolean;
        set_modem_storage_index(value_modem_storage_index: number): boolean;
        unref(): void;
    }
    class MessageDmsSetFirmwarePreferenceInputListImage {
        static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceInputListImage>;
        type: DmsFirmwareImageType;
        unique_id: null[];
        build_id: string;
    }
    abstract class MessageDmsSetFirmwarePreferenceOutput {
        static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceOutput>;
        get_image_download_list(): [boolean, DmsFirmwareImageType[] | null];
        get_result(): boolean;
        ref(): MessageDmsSetFirmwarePreferenceOutput;
        unref(): void;
    }
    class MessageDmsSetOperatingModeInput {
        static $gtype: GObject.GType<MessageDmsSetOperatingModeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetOperatingModeInput;
        get_mode(): [boolean, DmsOperatingMode | null];
        ref(): MessageDmsSetOperatingModeInput;
        set_mode(value_mode: DmsOperatingMode): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetOperatingModeOutput {
        static $gtype: GObject.GType<MessageDmsSetOperatingModeOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetOperatingModeOutput;
        unref(): void;
    }
    class MessageDmsSetServiceProgrammingCodeInput {
        static $gtype: GObject.GType<MessageDmsSetServiceProgrammingCodeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetServiceProgrammingCodeInput;
        get_current_code(): [boolean, string];
        get_new_code(): [boolean, string];
        ref(): MessageDmsSetServiceProgrammingCodeInput;
        set_current_code(value_current_code: string): boolean;
        set_new_code(value_new_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetServiceProgrammingCodeOutput {
        static $gtype: GObject.GType<MessageDmsSetServiceProgrammingCodeOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetServiceProgrammingCodeOutput;
        unref(): void;
    }
    class MessageDmsSetTimeInput {
        static $gtype: GObject.GType<MessageDmsSetTimeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetTimeInput;
        get_time_reference_type(): [boolean, DmsTimeReferenceType | null];
        get_time_value(): [boolean, number];
        ref(): MessageDmsSetTimeInput;
        set_time_reference_type(value_time_reference_type: DmsTimeReferenceType): boolean;
        set_time_value(value_time_value: bigint | number): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetTimeOutput {
        static $gtype: GObject.GType<MessageDmsSetTimeOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetTimeOutput;
        unref(): void;
    }
    class MessageDmsSetUserLockCodeInput {
        static $gtype: GObject.GType<MessageDmsSetUserLockCodeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetUserLockCodeInput;
        get_info(): [boolean, string, string];
        ref(): MessageDmsSetUserLockCodeInput;
        set_info(value_info_old_code: string, value_info_new_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetUserLockCodeOutput {
        static $gtype: GObject.GType<MessageDmsSetUserLockCodeOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetUserLockCodeOutput;
        unref(): void;
    }
    class MessageDmsSetUserLockStateInput {
        static $gtype: GObject.GType<MessageDmsSetUserLockStateInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSetUserLockStateInput;
        get_info(): [boolean, boolean, string];
        ref(): MessageDmsSetUserLockStateInput;
        set_info(value_info_enabled: boolean, value_info_lock_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsSetUserLockStateOutput {
        static $gtype: GObject.GType<MessageDmsSetUserLockStateOutput>;
        get_result(): boolean;
        ref(): MessageDmsSetUserLockStateOutput;
        unref(): void;
    }
    abstract class MessageDmsSwiGetCurrentFirmwareOutput {
        static $gtype: GObject.GType<MessageDmsSwiGetCurrentFirmwareOutput>;
        get_amss_version(): [boolean, string];
        get_boot_version(): [boolean, string];
        get_carrier(): [boolean, string];
        get_carrier_id(): [boolean, string];
        get_config_version(): [boolean, string];
        get_model(): [boolean, string];
        get_package_id(): [boolean, string];
        get_pri_version(): [boolean, string];
        get_result(): boolean;
        get_sku_id(): [boolean, string];
        ref(): MessageDmsSwiGetCurrentFirmwareOutput;
        unref(): void;
    }
    abstract class MessageDmsSwiGetUsbCompositionOutput {
        static $gtype: GObject.GType<MessageDmsSwiGetUsbCompositionOutput>;
        get_current(): [boolean, DmsSwiUsbComposition | null];
        get_result(): boolean;
        get_supported(): [boolean, DmsSwiUsbComposition[] | null];
        ref(): MessageDmsSwiGetUsbCompositionOutput;
        unref(): void;
    }
    class MessageDmsSwiSetUsbCompositionInput {
        static $gtype: GObject.GType<MessageDmsSwiSetUsbCompositionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsSwiSetUsbCompositionInput;
        get_current(): [boolean, DmsSwiUsbComposition | null];
        ref(): MessageDmsSwiSetUsbCompositionInput;
        set_current(value_current: DmsSwiUsbComposition): boolean;
        unref(): void;
    }
    abstract class MessageDmsSwiSetUsbCompositionOutput {
        static $gtype: GObject.GType<MessageDmsSwiSetUsbCompositionOutput>;
        get_result(): boolean;
        ref(): MessageDmsSwiSetUsbCompositionOutput;
        unref(): void;
    }
    class MessageDmsUimChangePinInput {
        static $gtype: GObject.GType<MessageDmsUimChangePinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimChangePinInput;
        get_info(): [boolean, DmsUimPinId | null, string, string];
        ref(): MessageDmsUimChangePinInput;
        set_info(value_info_pin_id: DmsUimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimChangePinOutput {
        static $gtype: GObject.GType<MessageDmsUimChangePinOutput>;
        get_pin_retries_status(): [boolean, number, number];
        get_result(): boolean;
        ref(): MessageDmsUimChangePinOutput;
        unref(): void;
    }
    class MessageDmsUimGetCkStatusInput {
        static $gtype: GObject.GType<MessageDmsUimGetCkStatusInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimGetCkStatusInput;
        get_facility(): [boolean, DmsUimFacility | null];
        ref(): MessageDmsUimGetCkStatusInput;
        set_facility(value_facility: DmsUimFacility): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimGetCkStatusOutput {
        static $gtype: GObject.GType<MessageDmsUimGetCkStatusOutput>;
        get_ck_status(): [boolean, DmsUimFacilityState | null, number, number];
        get_operation_blocking_facility(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageDmsUimGetCkStatusOutput;
        unref(): void;
    }
    abstract class MessageDmsUimGetIccidOutput {
        static $gtype: GObject.GType<MessageDmsUimGetIccidOutput>;
        get_iccid(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsUimGetIccidOutput;
        unref(): void;
    }
    abstract class MessageDmsUimGetImsiOutput {
        static $gtype: GObject.GType<MessageDmsUimGetImsiOutput>;
        get_imsi(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDmsUimGetImsiOutput;
        unref(): void;
    }
    abstract class MessageDmsUimGetPinStatusOutput {
        static $gtype: GObject.GType<MessageDmsUimGetPinStatusOutput>;
        get_pin1_status(): [boolean, DmsUimPinStatus | null, number, number];
        get_pin2_status(): [boolean, DmsUimPinStatus | null, number, number];
        get_result(): boolean;
        ref(): MessageDmsUimGetPinStatusOutput;
        unref(): void;
    }
    abstract class MessageDmsUimGetStateOutput {
        static $gtype: GObject.GType<MessageDmsUimGetStateOutput>;
        get_result(): boolean;
        get_state(): [boolean, DmsUimState | null];
        ref(): MessageDmsUimGetStateOutput;
        unref(): void;
    }
    class MessageDmsUimSetCkProtectionInput {
        static $gtype: GObject.GType<MessageDmsUimSetCkProtectionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimSetCkProtectionInput;
        get_facility(): [boolean, DmsUimFacility | null, DmsUimFacilityState | null, string];
        ref(): MessageDmsUimSetCkProtectionInput;
        set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_state: DmsUimFacilityState, value_facility_facility_depersonalization_control_key: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimSetCkProtectionOutput {
        static $gtype: GObject.GType<MessageDmsUimSetCkProtectionOutput>;
        get_result(): boolean;
        get_verify_retries_left(): [boolean, number];
        ref(): MessageDmsUimSetCkProtectionOutput;
        unref(): void;
    }
    class MessageDmsUimSetPinProtectionInput {
        static $gtype: GObject.GType<MessageDmsUimSetPinProtectionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimSetPinProtectionInput;
        get_info(): [boolean, DmsUimPinId | null, boolean, string];
        ref(): MessageDmsUimSetPinProtectionInput;
        set_info(value_info_pin_id: DmsUimPinId, value_info_protection_enabled: boolean, value_info_pin: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimSetPinProtectionOutput {
        static $gtype: GObject.GType<MessageDmsUimSetPinProtectionOutput>;
        get_pin_retries_status(): [boolean, number, number];
        get_result(): boolean;
        ref(): MessageDmsUimSetPinProtectionOutput;
        unref(): void;
    }
    class MessageDmsUimUnblockCkInput {
        static $gtype: GObject.GType<MessageDmsUimUnblockCkInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimUnblockCkInput;
        get_facility(): [boolean, DmsUimFacility | null, string];
        ref(): MessageDmsUimUnblockCkInput;
        set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_control_key: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimUnblockCkOutput {
        static $gtype: GObject.GType<MessageDmsUimUnblockCkOutput>;
        get_result(): boolean;
        get_unblock_retries_left(): [boolean, number];
        ref(): MessageDmsUimUnblockCkOutput;
        unref(): void;
    }
    class MessageDmsUimUnblockPinInput {
        static $gtype: GObject.GType<MessageDmsUimUnblockPinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimUnblockPinInput;
        get_info(): [boolean, DmsUimPinId | null, string, string];
        ref(): MessageDmsUimUnblockPinInput;
        set_info(value_info_pin_id: DmsUimPinId, value_info_puk: string, value_info_new_pin: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimUnblockPinOutput {
        static $gtype: GObject.GType<MessageDmsUimUnblockPinOutput>;
        get_pin_retries_status(): [boolean, number, number];
        get_result(): boolean;
        ref(): MessageDmsUimUnblockPinOutput;
        unref(): void;
    }
    class MessageDmsUimVerifyPinInput {
        static $gtype: GObject.GType<MessageDmsUimVerifyPinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsUimVerifyPinInput;
        get_info(): [boolean, DmsUimPinId | null, string];
        ref(): MessageDmsUimVerifyPinInput;
        set_info(value_info_pin_id: DmsUimPinId, value_info_pin: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsUimVerifyPinOutput {
        static $gtype: GObject.GType<MessageDmsUimVerifyPinOutput>;
        get_pin_retries_status(): [boolean, number, number];
        get_result(): boolean;
        ref(): MessageDmsUimVerifyPinOutput;
        unref(): void;
    }
    class MessageDmsValidateServiceProgrammingCodeInput {
        static $gtype: GObject.GType<MessageDmsValidateServiceProgrammingCodeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsValidateServiceProgrammingCodeInput;
        get_service_programming_code(): [boolean, string];
        ref(): MessageDmsValidateServiceProgrammingCodeInput;
        set_service_programming_code(value_service_programming_code: string): boolean;
        unref(): void;
    }
    abstract class MessageDmsValidateServiceProgrammingCodeOutput {
        static $gtype: GObject.GType<MessageDmsValidateServiceProgrammingCodeOutput>;
        get_result(): boolean;
        ref(): MessageDmsValidateServiceProgrammingCodeOutput;
        unref(): void;
    }
    class MessageDmsWriteUserDataInput {
        static $gtype: GObject.GType<MessageDmsWriteUserDataInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDmsWriteUserDataInput;
        get_user_data(): [boolean, Uint8Array | null];
        ref(): MessageDmsWriteUserDataInput;
        set_user_data(value_user_data: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageDmsWriteUserDataOutput {
        static $gtype: GObject.GType<MessageDmsWriteUserDataOutput>;
        get_result(): boolean;
        ref(): MessageDmsWriteUserDataOutput;
        unref(): void;
    }
    abstract class MessageDpmClosePortOutput {
        static $gtype: GObject.GType<MessageDpmClosePortOutput>;
        get_result(): boolean;
        ref(): MessageDpmClosePortOutput;
        unref(): void;
    }
    class MessageDpmOpenPortInput {
        static $gtype: GObject.GType<MessageDpmOpenPortInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDpmOpenPortInput;
        get_control_ports(): [boolean, MessageDpmOpenPortInputControlPortsElement[] | null];
        get_hardware_data_ports(): [boolean, MessageDpmOpenPortInputHardwareDataPortsElement[] | null];
        get_software_data_ports(): [boolean, MessageDpmOpenPortInputSoftwareDataPortsElement[] | null];
        ref(): MessageDpmOpenPortInput;
        set_control_ports(value_control_ports_ptr: MessageDpmOpenPortInputControlPortsElement[]): boolean;
        set_hardware_data_ports(value_hardware_data_ports_ptr: MessageDpmOpenPortInputHardwareDataPortsElement[]): boolean;
        set_software_data_ports(value_software_data_ports_ptr: MessageDpmOpenPortInputSoftwareDataPortsElement[]): boolean;
        unref(): void;
    }
    class MessageDpmOpenPortInputControlPortsElement {
        static $gtype: GObject.GType<MessageDpmOpenPortInputControlPortsElement>;
        port_name: string;
        endpoint_type: DataEndpointType;
        interface_number: number;
    }
    class MessageDpmOpenPortInputHardwareDataPortsElement {
        static $gtype: GObject.GType<MessageDpmOpenPortInputHardwareDataPortsElement>;
        endpoint_type: DataEndpointType;
        interface_number: number;
        rx_endpoint_number: number;
        tx_endpoint_number: number;
    }
    class MessageDpmOpenPortInputSoftwareDataPortsElement {
        static $gtype: GObject.GType<MessageDpmOpenPortInputSoftwareDataPortsElement>;
        endpoint_type: DataEndpointType;
        interface_number: number;
        port_name: string;
    }
    abstract class MessageDpmOpenPortOutput {
        static $gtype: GObject.GType<MessageDpmOpenPortOutput>;
        get_result(): boolean;
        ref(): MessageDpmOpenPortOutput;
        unref(): void;
    }
    class MessageDsdGetApnInfoInput {
        static $gtype: GObject.GType<MessageDsdGetApnInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDsdGetApnInfoInput;
        get_apn_type(): [boolean, DsdApnType | null];
        ref(): MessageDsdGetApnInfoInput;
        set_apn_type(value_apn_type: DsdApnType): boolean;
        unref(): void;
    }
    abstract class MessageDsdGetApnInfoOutput {
        static $gtype: GObject.GType<MessageDsdGetApnInfoOutput>;
        get_apn_name(): [boolean, string];
        get_result(): boolean;
        ref(): MessageDsdGetApnInfoOutput;
        unref(): void;
    }
    abstract class MessageDsdGetSystemStatusOutput {
        static $gtype: GObject.GType<MessageDsdGetSystemStatusOutput>;
        get_available_systems(): [boolean, MessageDsdGetSystemStatusOutputAvailableSystemsSystem[] | null];
        get_result(): boolean;
        ref(): MessageDsdGetSystemStatusOutput;
        unref(): void;
    }
    class MessageDsdGetSystemStatusOutputAvailableSystemsSystem {
        static $gtype: GObject.GType<MessageDsdGetSystemStatusOutputAvailableSystemsSystem>;
        technology: DsdDataSystemNetworkType;
        rat: DsdRadioAccessTechnology;
        so_mask: DsdSoMask;
    }
    class MessageDsdSetApnTypeInput {
        static $gtype: GObject.GType<MessageDsdSetApnTypeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDsdSetApnTypeInput;
        get_apn_type(): [boolean, string, DsdApnTypePreference | null];
        get_apn_type_preference_mask(): [boolean, DsdApnTypePreference | null];
        ref(): MessageDsdSetApnTypeInput;
        set_apn_type(value_apn_type_name: string, value_apn_type_type: DsdApnTypePreference): boolean;
        set_apn_type_preference_mask(value_apn_type_preference_mask: DsdApnTypePreference): boolean;
        unref(): void;
    }
    abstract class MessageDsdSetApnTypeOutput {
        static $gtype: GObject.GType<MessageDsdSetApnTypeOutput>;
        get_result(): boolean;
        ref(): MessageDsdSetApnTypeOutput;
        unref(): void;
    }
    class MessageDsdSystemStatusChangeInput {
        static $gtype: GObject.GType<MessageDsdSystemStatusChangeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageDsdSystemStatusChangeInput;
        get_register_indication(): [boolean, boolean];
        ref(): MessageDsdSystemStatusChangeInput;
        set_register_indication(value_register_indication: boolean): boolean;
        unref(): void;
    }
    abstract class MessageDsdSystemStatusChangeOutput {
        static $gtype: GObject.GType<MessageDsdSystemStatusChangeOutput>;
        get_result(): boolean;
        ref(): MessageDsdSystemStatusChangeOutput;
        unref(): void;
    }
    class MessageFoxGetFirmwareVersionInput {
        static $gtype: GObject.GType<MessageFoxGetFirmwareVersionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageFoxGetFirmwareVersionInput;
        get_version_type(): [boolean, FoxFirmwareVersionType | null];
        ref(): MessageFoxGetFirmwareVersionInput;
        set_version_type(value_version_type: FoxFirmwareVersionType): boolean;
        unref(): void;
    }
    abstract class MessageFoxGetFirmwareVersionOutput {
        static $gtype: GObject.GType<MessageFoxGetFirmwareVersionOutput>;
        get_result(): boolean;
        get_version(): [boolean, string];
        ref(): MessageFoxGetFirmwareVersionOutput;
        unref(): void;
    }
    class MessageFoxSetFccAuthenticationInput {
        static $gtype: GObject.GType<MessageFoxSetFccAuthenticationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageFoxSetFccAuthenticationInput;
        get_magic_number(): [boolean, number];
        get_magic_string(): [boolean, string];
        ref(): MessageFoxSetFccAuthenticationInput;
        set_magic_number(value_magic_number: number): boolean;
        set_magic_string(value_magic_string: string): boolean;
        unref(): void;
    }
    abstract class MessageFoxSetFccAuthenticationOutput {
        static $gtype: GObject.GType<MessageFoxSetFccAuthenticationOutput>;
        get_result(): boolean;
        ref(): MessageFoxSetFccAuthenticationOutput;
        unref(): void;
    }
    abstract class MessageGasDmsGetEthernetPduMacAddressOutput {
        static $gtype: GObject.GType<MessageGasDmsGetEthernetPduMacAddressOutput>;
        get_mac_address_0(): [boolean, Uint8Array | null];
        get_mac_address_1(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageGasDmsGetEthernetPduMacAddressOutput;
        unref(): void;
    }
    abstract class MessageGasDmsGetFirmwareAutoSimOutput {
        static $gtype: GObject.GType<MessageGasDmsGetFirmwareAutoSimOutput>;
        get_auto_sim_mode(): [boolean, GasFirmwareAutoSimMode | null];
        get_config_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageGasDmsGetFirmwareAutoSimOutput;
        unref(): void;
    }
    class MessageGasDmsGetFirmwareListInput {
        static $gtype: GObject.GType<MessageGasDmsGetFirmwareListInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageGasDmsGetFirmwareListInput;
        get_mode(): [boolean, GasFirmwareListingMode | null];
        get_name(): [boolean, string];
        get_slot_index(): [boolean, number];
        get_version(): [boolean, string];
        ref(): MessageGasDmsGetFirmwareListInput;
        set_mode(value_mode: GasFirmwareListingMode): boolean;
        set_name(value_name: string): boolean;
        set_slot_index(value_slot_index: number): boolean;
        set_version(value_version: string): boolean;
        unref(): void;
    }
    abstract class MessageGasDmsGetFirmwareListOutput {
        static $gtype: GObject.GType<MessageGasDmsGetFirmwareListOutput>;
        get_mode(): [boolean, GasFirmwareListingMode | null];
        get_result(): boolean;
        get_stored_firmware_1(): [boolean, number, string, string, string];
        get_stored_firmware_2(): [boolean, number, string, string, string];
        get_stored_firmware_3(): [boolean, number, string, string, string];
        get_stored_firmware_4(): [boolean, number, string, string, string];
        ref(): MessageGasDmsGetFirmwareListOutput;
        unref(): void;
    }
    abstract class MessageGasDmsGetUsbCompositionOutput {
        static $gtype: GObject.GType<MessageGasDmsGetUsbCompositionOutput>;
        get_composition_persistence(): [boolean, boolean];
        get_endpoint_type(): [boolean, GasUsbCompositionEndpointType | null];
        get_immediate_setting(): [boolean, boolean];
        get_reboot_after_setting(): [boolean, boolean];
        get_result(): boolean;
        get_usb_composition(): [boolean, number];
        ref(): MessageGasDmsGetUsbCompositionOutput;
        unref(): void;
    }
    class MessageGasDmsSetActiveFirmwareInput {
        static $gtype: GObject.GType<MessageGasDmsSetActiveFirmwareInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageGasDmsSetActiveFirmwareInput;
        get_carrier_name(): [boolean, string];
        get_slot_index(): [boolean, number];
        get_version(): [boolean, string];
        ref(): MessageGasDmsSetActiveFirmwareInput;
        set_carrier_name(value_carrier_name: string): boolean;
        set_slot_index(value_slot_index: number): boolean;
        set_version(value_version: string): boolean;
        unref(): void;
    }
    abstract class MessageGasDmsSetActiveFirmwareOutput {
        static $gtype: GObject.GType<MessageGasDmsSetActiveFirmwareOutput>;
        get_result(): boolean;
        ref(): MessageGasDmsSetActiveFirmwareOutput;
        unref(): void;
    }
    class MessageGasDmsSetFirmwareAutoSimInput {
        static $gtype: GObject.GType<MessageGasDmsSetFirmwareAutoSimInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageGasDmsSetFirmwareAutoSimInput;
        get_auto_sim_mode(): [boolean, GasFirmwareAutoSimMode | null];
        get_config_id(): [boolean, number];
        ref(): MessageGasDmsSetFirmwareAutoSimInput;
        set_auto_sim_mode(value_auto_sim_mode: GasFirmwareAutoSimMode): boolean;
        set_config_id(value_config_id: number): boolean;
        unref(): void;
    }
    abstract class MessageGasDmsSetFirmwareAutoSimOutput {
        static $gtype: GObject.GType<MessageGasDmsSetFirmwareAutoSimOutput>;
        get_result(): boolean;
        ref(): MessageGasDmsSetFirmwareAutoSimOutput;
        unref(): void;
    }
    class MessageGasDmsSetUsbCompositionInput {
        static $gtype: GObject.GType<MessageGasDmsSetUsbCompositionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageGasDmsSetUsbCompositionInput;
        get_composition_persistence(): [boolean, boolean];
        get_endpoint_type(): [boolean, GasUsbCompositionEndpointType | null];
        get_immediate_setting(): [boolean, boolean];
        get_reboot_after_setting(): [boolean, boolean];
        get_usb_composition(): [boolean, number];
        ref(): MessageGasDmsSetUsbCompositionInput;
        set_composition_persistence(value_composition_persistence: boolean): boolean;
        set_endpoint_type(value_endpoint_type: GasUsbCompositionEndpointType): boolean;
        set_immediate_setting(value_immediate_setting: boolean): boolean;
        set_reboot_after_setting(value_reboot_after_setting: boolean): boolean;
        set_usb_composition(value_usb_composition: number): boolean;
        unref(): void;
    }
    abstract class MessageGasDmsSetUsbCompositionOutput {
        static $gtype: GObject.GType<MessageGasDmsSetUsbCompositionOutput>;
        get_result(): boolean;
        ref(): MessageGasDmsSetUsbCompositionOutput;
        unref(): void;
    }
    abstract class MessageGmsTestGetValueOutput {
        static $gtype: GObject.GType<MessageGmsTestGetValueOutput>;
        get_result(): boolean;
        get_test_mandatory_value(): [boolean, number];
        get_test_optional_value(): [boolean, number];
        ref(): MessageGmsTestGetValueOutput;
        unref(): void;
    }
    class MessageGmsTestSetValueInput {
        static $gtype: GObject.GType<MessageGmsTestSetValueInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageGmsTestSetValueInput;
        get_test_mandatory_value(): [boolean, number];
        get_test_optional_value(): [boolean, number];
        ref(): MessageGmsTestSetValueInput;
        set_test_mandatory_value(value_test_mandatory_value: number): boolean;
        set_test_optional_value(value_test_optional_value: number): boolean;
        unref(): void;
    }
    abstract class MessageGmsTestSetValueOutput {
        static $gtype: GObject.GType<MessageGmsTestSetValueOutput>;
        get_result(): boolean;
        ref(): MessageGmsTestSetValueOutput;
        unref(): void;
    }
    class MessageImsBindInput {
        static $gtype: GObject.GType<MessageImsBindInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsBindInput;
        get_binding(): [boolean, number];
        ref(): MessageImsBindInput;
        set_binding(value_binding: number): boolean;
        unref(): void;
    }
    abstract class MessageImsBindOutput {
        static $gtype: GObject.GType<MessageImsBindOutput>;
        get_result(): boolean;
        ref(): MessageImsBindOutput;
        unref(): void;
    }
    abstract class MessageImsGetImsServicesEnabledSettingOutput {
        static $gtype: GObject.GType<MessageImsGetImsServicesEnabledSettingOutput>;
        get_ims_registration_service_enabled(): [boolean, boolean];
        get_ims_sms_service_enabled(): [boolean, boolean];
        get_ims_ussd_service_enabled(): [boolean, boolean];
        get_ims_ut_service_enabled(): [boolean, boolean];
        get_ims_video_telephony_service_enabled(): [boolean, boolean];
        get_ims_voice_service_enabled(): [boolean, boolean];
        get_ims_voice_wifi_service_enabled(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageImsGetImsServicesEnabledSettingOutput;
        unref(): void;
    }
    class MessageImsSetImsServicesEnabledSettingInput {
        static $gtype: GObject.GType<MessageImsSetImsServicesEnabledSettingInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsSetImsServicesEnabledSettingInput;
        get_ims_autoconfig_enabled(): [boolean, boolean];
        get_ims_call_mode_preference(): [boolean, ImsCallModePreference | null];
        get_ims_carrier_config(): [boolean, boolean];
        get_ims_presence_enabled(): [boolean, boolean];
        get_ims_rcs_enabled(): [boolean, boolean];
        get_ims_service_enabled(): [boolean, boolean];
        get_ims_sms_service_enable(): [boolean, boolean];
        get_ims_ussd_service_enabled(): [boolean, boolean];
        get_ims_ut_service_enable(): [boolean, boolean];
        get_ims_video_telephony_service_enable(): [boolean, boolean];
        get_ims_voice_over_lte_enable(): [boolean, boolean];
        get_ims_voice_wifi_service_enable(): [boolean, boolean];
        get_ims_xdm_client_enabled(): [boolean, boolean];
        ref(): MessageImsSetImsServicesEnabledSettingInput;
        set_ims_autoconfig_enabled(value_ims_autoconfig_enabled: boolean): boolean;
        set_ims_call_mode_preference(value_ims_call_mode_preference: ImsCallModePreference): boolean;
        set_ims_carrier_config(value_ims_carrier_config: boolean): boolean;
        set_ims_presence_enabled(value_ims_presence_enabled: boolean): boolean;
        set_ims_rcs_enabled(value_ims_rcs_enabled: boolean): boolean;
        set_ims_service_enabled(value_ims_service_enabled: boolean): boolean;
        set_ims_sms_service_enable(value_ims_sms_service_enable: boolean): boolean;
        set_ims_ussd_service_enabled(value_ims_ussd_service_enabled: boolean): boolean;
        set_ims_ut_service_enable(value_ims_ut_service_enable: boolean): boolean;
        set_ims_video_telephony_service_enable(value_ims_video_telephony_service_enable: boolean): boolean;
        set_ims_voice_over_lte_enable(value_ims_voice_over_lte_enable: boolean): boolean;
        set_ims_voice_wifi_service_enable(value_ims_voice_wifi_service_enable: boolean): boolean;
        set_ims_xdm_client_enabled(value_ims_xdm_client_enabled: boolean): boolean;
        unref(): void;
    }
    abstract class MessageImsSetImsServicesEnabledSettingOutput {
        static $gtype: GObject.GType<MessageImsSetImsServicesEnabledSettingOutput>;
        get_result(): boolean;
        ref(): MessageImsSetImsServicesEnabledSettingOutput;
        unref(): void;
    }
    class MessageImsaBindInput {
        static $gtype: GObject.GType<MessageImsaBindInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsaBindInput;
        get_binding(): [boolean, number];
        ref(): MessageImsaBindInput;
        set_binding(value_binding: number): boolean;
        unref(): void;
    }
    abstract class MessageImsaBindOutput {
        static $gtype: GObject.GType<MessageImsaBindOutput>;
        get_result(): boolean;
        ref(): MessageImsaBindOutput;
        unref(): void;
    }
    abstract class MessageImsaGetImsRegistrationStatusOutput {
        static $gtype: GObject.GType<MessageImsaGetImsRegistrationStatusOutput>;
        get_ims_registration_error_code(): [boolean, number];
        get_ims_registration_error_message(): [boolean, string];
        get_ims_registration_status(): [boolean, ImsaImsRegistrationStatus | null];
        get_ims_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_result(): boolean;
        ref(): MessageImsaGetImsRegistrationStatusOutput;
        unref(): void;
    }
    abstract class MessageImsaGetImsServicesStatusOutput {
        static $gtype: GObject.GType<MessageImsaGetImsServicesStatusOutput>;
        get_ims_sms_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_sms_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_ue_to_tas_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_ue_to_tas_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_video_share_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_video_share_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_video_telephony_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_video_telephony_service_status(): [boolean, ImsaServiceStatus | null];
        get_ims_voice_service_registration_technology(): [boolean, ImsaRegistrationTechnology | null];
        get_ims_voice_service_status(): [boolean, ImsaServiceStatus | null];
        get_result(): boolean;
        ref(): MessageImsaGetImsServicesStatusOutput;
        unref(): void;
    }
    class MessageImsaRegisterIndicationsInput {
        static $gtype: GObject.GType<MessageImsaRegisterIndicationsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsaRegisterIndicationsInput;
        get_ims_registration_status_changed(): [boolean, boolean];
        get_ims_services_status_changed(): [boolean, boolean];
        ref(): MessageImsaRegisterIndicationsInput;
        set_ims_registration_status_changed(value_ims_registration_status_changed: boolean): boolean;
        set_ims_services_status_changed(value_ims_services_status_changed: boolean): boolean;
        unref(): void;
    }
    abstract class MessageImsaRegisterIndicationsOutput {
        static $gtype: GObject.GType<MessageImsaRegisterIndicationsOutput>;
        get_result(): boolean;
        ref(): MessageImsaRegisterIndicationsOutput;
        unref(): void;
    }
    class MessageImsdcmPdpActivateRequestInput {
        static $gtype: GObject.GType<MessageImsdcmPdpActivateRequestInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsdcmPdpActivateRequestInput;
        get_connection_parameters(): [boolean, string, ImsDcmApnType | null, ImsDcmRatType | null, ImsDcmIpFamiliy | null, number];
        get_instance_id(): [boolean, ImsDcmInstanceId | null];
        get_pdp_request_sequence_number(): [boolean, number];
        get_pdp_slot_id(): [boolean, number];
        get_pdp_subscription_id(): [boolean, number];
        ref(): MessageImsdcmPdpActivateRequestInput;
        set_connection_parameters(value_connection_parameters_apn: string, value_connection_parameters_apn_type: ImsDcmApnType, value_connection_parameters_rat_type: ImsDcmRatType, value_connection_parameters_ip_family: ImsDcmIpFamiliy, value_connection_parameters_wds_profile_number: number): boolean;
        set_instance_id(value_instance_id: ImsDcmInstanceId): boolean;
        set_pdp_request_sequence_number(value_pdp_request_sequence_number: number): boolean;
        set_pdp_slot_id(value_pdp_slot_id: number): boolean;
        set_pdp_subscription_id(value_pdp_subscription_id: number): boolean;
        unref(): void;
    }
    abstract class MessageImsdcmPdpActivateRequestOutput {
        static $gtype: GObject.GType<MessageImsdcmPdpActivateRequestOutput>;
        get_instance_id(): [boolean, ImsDcmInstanceId | null];
        get_pdp_id(): [boolean, number];
        get_pdp_request_sequence_number(): [boolean, number];
        get_result(): boolean;
        ref(): MessageImsdcmPdpActivateRequestOutput;
        unref(): void;
    }
    class MessageImsdcmPdpDeactivateRequestInput {
        static $gtype: GObject.GType<MessageImsdcmPdpDeactivateRequestInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageImsdcmPdpDeactivateRequestInput;
        get_instance_id(): [boolean, ImsDcmInstanceId | null];
        get_pdp_id(): [boolean, number];
        ref(): MessageImsdcmPdpDeactivateRequestInput;
        set_instance_id(value_instance_id: ImsDcmInstanceId): boolean;
        set_pdp_id(value_pdp_id: number): boolean;
        unref(): void;
    }
    abstract class MessageImsdcmPdpDeactivateRequestOutput {
        static $gtype: GObject.GType<MessageImsdcmPdpDeactivateRequestOutput>;
        get_instance_id(): [boolean, ImsDcmInstanceId | null];
        get_pdp_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageImsdcmPdpDeactivateRequestOutput;
        unref(): void;
    }
    abstract class MessageImspGetEnablerStateOutput {
        static $gtype: GObject.GType<MessageImspGetEnablerStateOutput>;
        get_enabler_state(): [boolean, ImspEnablerState | null];
        get_result(): boolean;
        ref(): MessageImspGetEnablerStateOutput;
        unref(): void;
    }
    class MessageLocDeleteAssistanceDataInput {
        static $gtype: GObject.GType<MessageLocDeleteAssistanceDataInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocDeleteAssistanceDataInput;
        get_delete_all(): [boolean, boolean];
        get_delete_cell_database_mask(): [boolean, LocDeleteCellDatabase | null];
        get_delete_clock_info_mask(): [boolean, LocDeleteClockInfo | null];
        get_delete_gnss_data_mask(): [boolean, LocDeleteGnssData | null];
        get_delete_sv_info(): [boolean, MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[] | null];
        ref(): MessageLocDeleteAssistanceDataInput;
        set_delete_all(value_delete_all: boolean): boolean;
        set_delete_cell_database_mask(value_delete_cell_database_mask: LocDeleteCellDatabase): boolean;
        set_delete_clock_info_mask(value_delete_clock_info_mask: LocDeleteClockInfo): boolean;
        set_delete_gnss_data_mask(value_delete_gnss_data_mask: LocDeleteGnssData): boolean;
        set_delete_sv_info(value_delete_sv_info_ptr: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]): boolean;
        unref(): void;
    }
    class MessageLocDeleteAssistanceDataInputDeleteSvInfoElement {
        static $gtype: GObject.GType<MessageLocDeleteAssistanceDataInputDeleteSvInfoElement>;
        gnss_sv_id: number;
        system: LocSystem;
        delete_sv_info_mask: LocDeleteSvInfo;
    }
    abstract class MessageLocDeleteAssistanceDataOutput {
        static $gtype: GObject.GType<MessageLocDeleteAssistanceDataOutput>;
        get_result(): boolean;
        ref(): MessageLocDeleteAssistanceDataOutput;
        unref(): void;
    }
    abstract class MessageLocGetEngineLockOutput {
        static $gtype: GObject.GType<MessageLocGetEngineLockOutput>;
        get_result(): boolean;
        ref(): MessageLocGetEngineLockOutput;
        unref(): void;
    }
    abstract class MessageLocGetNmeaTypesOutput {
        static $gtype: GObject.GType<MessageLocGetNmeaTypesOutput>;
        get_result(): boolean;
        ref(): MessageLocGetNmeaTypesOutput;
        unref(): void;
    }
    abstract class MessageLocGetOperationModeOutput {
        static $gtype: GObject.GType<MessageLocGetOperationModeOutput>;
        get_result(): boolean;
        ref(): MessageLocGetOperationModeOutput;
        unref(): void;
    }
    abstract class MessageLocGetPredictedOrbitsDataSourceOutput {
        static $gtype: GObject.GType<MessageLocGetPredictedOrbitsDataSourceOutput>;
        get_result(): boolean;
        ref(): MessageLocGetPredictedOrbitsDataSourceOutput;
        unref(): void;
    }
    abstract class MessageLocGetPredictedOrbitsDataValidityOutput {
        static $gtype: GObject.GType<MessageLocGetPredictedOrbitsDataValidityOutput>;
        get_result(): boolean;
        ref(): MessageLocGetPredictedOrbitsDataValidityOutput;
        unref(): void;
    }
    class MessageLocGetServerInput {
        static $gtype: GObject.GType<MessageLocGetServerInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocGetServerInput;
        get_server_address_type(): [boolean, LocServerAddressType | null];
        get_server_type(): [boolean, LocServerType | null];
        ref(): MessageLocGetServerInput;
        set_server_address_type(value_server_address_type: LocServerAddressType): boolean;
        set_server_type(value_server_type: LocServerType): boolean;
        unref(): void;
    }
    abstract class MessageLocGetServerOutput {
        static $gtype: GObject.GType<MessageLocGetServerOutput>;
        get_result(): boolean;
        ref(): MessageLocGetServerOutput;
        unref(): void;
    }
    class MessageLocInjectPositionInput {
        static $gtype: GObject.GType<MessageLocInjectPositionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocInjectPositionInput;
        get_altitude_from_ellipsoid(): [boolean, number];
        get_altitude_from_sealevel(): [boolean, number];
        get_altitude_source(): [boolean, LocAltitudeSource | null, LocAltitudeDependency | null, LocAltitudeUncertainty | null];
        get_gps_date_time(): [boolean, number, number];
        get_horizontal_confidence(): [boolean, number];
        get_horizontal_reliability(): [boolean, LocReliability | null];
        get_horizontal_uncertainty_circular(): [boolean, number];
        get_latitude(): [boolean, number];
        get_longitude(): [boolean, number];
        get_number_satellites_in_fix(): [boolean, number];
        get_position_source(): [boolean, LocPositionSource | null];
        get_position_source_provider(): [boolean, LocPositionSourceProvider | null];
        get_raw_horizontal_confidence(): [boolean, number];
        get_raw_horizontal_uncertainty_circular(): [boolean, number];
        get_requested_position_injection(): [boolean, boolean];
        get_satellites_used(): [boolean, number[] | null];
        get_speed_east_north_up(): [boolean, number[] | null];
        get_speed_uncertainty_east_north_up(): [boolean, number[] | null];
        get_time_uncertainty(): [boolean, number];
        get_timestamp_age(): [boolean, number];
        get_utc_timestamp(): [boolean, number];
        get_vertical_confidence(): [boolean, number];
        get_vertical_reliability(): [boolean, LocReliability | null];
        get_vertical_uncertainty(): [boolean, number];
        ref(): MessageLocInjectPositionInput;
        set_altitude_from_ellipsoid(value_altitude_from_ellipsoid: number): boolean;
        set_altitude_from_sealevel(value_altitude_from_sealevel: number): boolean;
        set_altitude_source(value_altitude_source_altitude_source: LocAltitudeSource, value_altitude_source_altitude_dependency: LocAltitudeDependency, value_altitude_source_altitude_uncertainty: LocAltitudeUncertainty): boolean;
        set_gps_date_time(value_gps_date_time_gps_weeks: number, value_gps_date_time_gps_time_of_week_milliseconds: number): boolean;
        set_horizontal_confidence(value_horizontal_confidence: number): boolean;
        set_horizontal_reliability(value_horizontal_reliability: LocReliability): boolean;
        set_horizontal_uncertainty_circular(value_horizontal_uncertainty_circular: number): boolean;
        set_latitude(value_latitude: number): boolean;
        set_longitude(value_longitude: number): boolean;
        set_number_satellites_in_fix(value_number_satellites_in_fix: number): boolean;
        set_position_source(value_position_source: LocPositionSource): boolean;
        set_position_source_provider(value_position_source_provider: LocPositionSourceProvider): boolean;
        set_raw_horizontal_confidence(value_raw_horizontal_confidence: number): boolean;
        set_raw_horizontal_uncertainty_circular(value_raw_horizontal_uncertainty_circular: number): boolean;
        set_requested_position_injection(value_requested_position_injection: boolean): boolean;
        set_satellites_used(value_satellites_used: number[]): boolean;
        set_speed_east_north_up(value_speed_east_north_up: number[]): boolean;
        set_speed_uncertainty_east_north_up(value_speed_uncertainty_east_north_up: number[]): boolean;
        set_time_uncertainty(value_time_uncertainty: number): boolean;
        set_timestamp_age(value_timestamp_age: number): boolean;
        set_utc_timestamp(value_utc_timestamp: bigint | number): boolean;
        set_vertical_confidence(value_vertical_confidence: number): boolean;
        set_vertical_reliability(value_vertical_reliability: LocReliability): boolean;
        set_vertical_uncertainty(value_vertical_uncertainty: number): boolean;
        unref(): void;
    }
    abstract class MessageLocInjectPositionOutput {
        static $gtype: GObject.GType<MessageLocInjectPositionOutput>;
        get_result(): boolean;
        ref(): MessageLocInjectPositionOutput;
        unref(): void;
    }
    class MessageLocInjectPredictedOrbitsDataInput {
        static $gtype: GObject.GType<MessageLocInjectPredictedOrbitsDataInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocInjectPredictedOrbitsDataInput;
        get_format_type(): [boolean, LocPredictedOrbitsDataFormat | null];
        get_part_data(): [boolean, Uint8Array | null];
        get_part_number(): [boolean, number];
        get_total_parts(): [boolean, number];
        get_total_size(): [boolean, number];
        ref(): MessageLocInjectPredictedOrbitsDataInput;
        set_format_type(value_format_type: LocPredictedOrbitsDataFormat): boolean;
        set_part_data(value_part_data: Uint8Array | string): boolean;
        set_part_number(value_part_number: number): boolean;
        set_total_parts(value_total_parts: number): boolean;
        set_total_size(value_total_size: number): boolean;
        unref(): void;
    }
    abstract class MessageLocInjectPredictedOrbitsDataOutput {
        static $gtype: GObject.GType<MessageLocInjectPredictedOrbitsDataOutput>;
        get_result(): boolean;
        ref(): MessageLocInjectPredictedOrbitsDataOutput;
        unref(): void;
    }
    class MessageLocInjectUtcTimeInput {
        static $gtype: GObject.GType<MessageLocInjectUtcTimeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocInjectUtcTimeInput;
        get_time_source(): [boolean, LocInjectedTimeSource | null];
        get_time_uncertainty(): [boolean, number];
        get_utc_time(): [boolean, number];
        ref(): MessageLocInjectUtcTimeInput;
        set_time_source(value_time_source: LocInjectedTimeSource): boolean;
        set_time_uncertainty(value_time_uncertainty: number): boolean;
        set_utc_time(value_utc_time: bigint | number): boolean;
        unref(): void;
    }
    abstract class MessageLocInjectUtcTimeOutput {
        static $gtype: GObject.GType<MessageLocInjectUtcTimeOutput>;
        get_result(): boolean;
        ref(): MessageLocInjectUtcTimeOutput;
        unref(): void;
    }
    class MessageLocInjectXtraDataInput {
        static $gtype: GObject.GType<MessageLocInjectXtraDataInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocInjectXtraDataInput;
        get_part_data(): [boolean, Uint8Array | null];
        get_part_number(): [boolean, number];
        get_total_parts(): [boolean, number];
        get_total_size(): [boolean, number];
        ref(): MessageLocInjectXtraDataInput;
        set_part_data(value_part_data: Uint8Array | string): boolean;
        set_part_number(value_part_number: number): boolean;
        set_total_parts(value_total_parts: number): boolean;
        set_total_size(value_total_size: number): boolean;
        unref(): void;
    }
    abstract class MessageLocInjectXtraDataOutput {
        static $gtype: GObject.GType<MessageLocInjectXtraDataOutput>;
        get_result(): boolean;
        ref(): MessageLocInjectXtraDataOutput;
        unref(): void;
    }
    class MessageLocRegisterEventsInput {
        static $gtype: GObject.GType<MessageLocRegisterEventsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocRegisterEventsInput;
        get_event_registration_mask(): [boolean, LocEventRegistrationFlag | null];
        ref(): MessageLocRegisterEventsInput;
        set_event_registration_mask(value_event_registration_mask: LocEventRegistrationFlag): boolean;
        unref(): void;
    }
    abstract class MessageLocRegisterEventsOutput {
        static $gtype: GObject.GType<MessageLocRegisterEventsOutput>;
        get_result(): boolean;
        ref(): MessageLocRegisterEventsOutput;
        unref(): void;
    }
    class MessageLocSetEngineLockInput {
        static $gtype: GObject.GType<MessageLocSetEngineLockInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocSetEngineLockInput;
        get_lock_type(): [boolean, LocLockType | null];
        ref(): MessageLocSetEngineLockInput;
        set_lock_type(value_lock_type: LocLockType): boolean;
        unref(): void;
    }
    abstract class MessageLocSetEngineLockOutput {
        static $gtype: GObject.GType<MessageLocSetEngineLockOutput>;
        get_result(): boolean;
        ref(): MessageLocSetEngineLockOutput;
        unref(): void;
    }
    class MessageLocSetNmeaTypesInput {
        static $gtype: GObject.GType<MessageLocSetNmeaTypesInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocSetNmeaTypesInput;
        get_nmea_types(): [boolean, LocNmeaType | null];
        ref(): MessageLocSetNmeaTypesInput;
        set_nmea_types(value_nmea_types: LocNmeaType): boolean;
        unref(): void;
    }
    abstract class MessageLocSetNmeaTypesOutput {
        static $gtype: GObject.GType<MessageLocSetNmeaTypesOutput>;
        get_result(): boolean;
        ref(): MessageLocSetNmeaTypesOutput;
        unref(): void;
    }
    class MessageLocSetOperationModeInput {
        static $gtype: GObject.GType<MessageLocSetOperationModeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocSetOperationModeInput;
        get_operation_mode(): [boolean, LocOperationMode | null];
        ref(): MessageLocSetOperationModeInput;
        set_operation_mode(value_operation_mode: LocOperationMode): boolean;
        unref(): void;
    }
    abstract class MessageLocSetOperationModeOutput {
        static $gtype: GObject.GType<MessageLocSetOperationModeOutput>;
        get_result(): boolean;
        ref(): MessageLocSetOperationModeOutput;
        unref(): void;
    }
    class MessageLocSetServerInput {
        static $gtype: GObject.GType<MessageLocSetServerInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocSetServerInput;
        get_ipv4(): [boolean, number, number];
        get_ipv6(): [boolean, number[] | null, number];
        get_server_type(): [boolean, LocServerType | null];
        get_url(): [boolean, string];
        ref(): MessageLocSetServerInput;
        set_ipv4(value_ipv4_ipv4_address: number, value_ipv4_ipv4_port: number): boolean;
        set_ipv6(value_ipv6_ipv6_address: number[], value_ipv6_ipv6_port: number): boolean;
        set_server_type(value_server_type: LocServerType): boolean;
        set_url(value_url: string): boolean;
        unref(): void;
    }
    abstract class MessageLocSetServerOutput {
        static $gtype: GObject.GType<MessageLocSetServerOutput>;
        get_result(): boolean;
        ref(): MessageLocSetServerOutput;
        unref(): void;
    }
    class MessageLocStartInput {
        static $gtype: GObject.GType<MessageLocStartInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocStartInput;
        get_fix_recurrence_type(): [boolean, LocFixRecurrenceType | null];
        get_intermediate_report_state(): [boolean, LocIntermediateReportState | null];
        get_minimum_interval_between_position_reports(): [boolean, number];
        get_session_id(): [boolean, number];
        ref(): MessageLocStartInput;
        set_fix_recurrence_type(value_fix_recurrence_type: LocFixRecurrenceType): boolean;
        set_intermediate_report_state(value_intermediate_report_state: LocIntermediateReportState): boolean;
        set_minimum_interval_between_position_reports(value_minimum_interval_between_position_reports: number): boolean;
        set_session_id(value_session_id: number): boolean;
        unref(): void;
    }
    abstract class MessageLocStartOutput {
        static $gtype: GObject.GType<MessageLocStartOutput>;
        get_result(): boolean;
        ref(): MessageLocStartOutput;
        unref(): void;
    }
    class MessageLocStopInput {
        static $gtype: GObject.GType<MessageLocStopInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageLocStopInput;
        get_session_id(): [boolean, number];
        ref(): MessageLocStopInput;
        set_session_id(value_session_id: number): boolean;
        unref(): void;
    }
    abstract class MessageLocStopOutput {
        static $gtype: GObject.GType<MessageLocStopOutput>;
        get_result(): boolean;
        ref(): MessageLocStopOutput;
        unref(): void;
    }
    class MessageNasAttachDetachInput {
        static $gtype: GObject.GType<MessageNasAttachDetachInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasAttachDetachInput;
        get_action(): [boolean, NasPsAttachAction | null];
        ref(): MessageNasAttachDetachInput;
        set_action(value_action: NasPsAttachAction): boolean;
        unref(): void;
    }
    abstract class MessageNasAttachDetachOutput {
        static $gtype: GObject.GType<MessageNasAttachDetachOutput>;
        get_result(): boolean;
        ref(): MessageNasAttachDetachOutput;
        unref(): void;
    }
    class MessageNasConfigSignalInfoInput {
        static $gtype: GObject.GType<MessageNasConfigSignalInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasConfigSignalInfoInput;
        get_ecio_threshold(): [boolean, number[] | null];
        get_io_threshold(): [boolean, number[] | null];
        get_lte_report(): [boolean, number, number];
        get_lte_snr_threshold(): [boolean, number[] | null];
        get_rscp_threshold(): [boolean, Uint8Array | null];
        get_rsrp_threshold(): [boolean, number[] | null];
        get_rsrq_threshold(): [boolean, Uint8Array | null];
        get_rssi_threshold(): [boolean, Uint8Array | null];
        get_sinr_threshold(): [boolean, Uint8Array | null];
        ref(): MessageNasConfigSignalInfoInput;
        set_ecio_threshold(value_ecio_threshold: number[]): boolean;
        set_io_threshold(value_io_threshold: number[]): boolean;
        set_lte_report(value_lte_report_rate: number, value_lte_report_average_period: number): boolean;
        set_lte_snr_threshold(value_lte_snr_threshold: number[]): boolean;
        set_rscp_threshold(value_rscp_threshold: Uint8Array | string): boolean;
        set_rsrp_threshold(value_rsrp_threshold: number[]): boolean;
        set_rsrq_threshold(value_rsrq_threshold: Uint8Array | string): boolean;
        set_rssi_threshold(value_rssi_threshold: Uint8Array | string): boolean;
        set_sinr_threshold(value_sinr_threshold: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageNasConfigSignalInfoOutput {
        static $gtype: GObject.GType<MessageNasConfigSignalInfoOutput>;
        get_result(): boolean;
        ref(): MessageNasConfigSignalInfoOutput;
        unref(): void;
    }
    class MessageNasConfigSignalInfoV2Input {
        static $gtype: GObject.GType<MessageNasConfigSignalInfoV2Input>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasConfigSignalInfoV2Input;
        get_cdma_ecio_delta(): [boolean, number];
        get_cdma_ecio_threshold_list(): [boolean, number[] | null];
        get_cdma_rssi_delta(): [boolean, number];
        get_cdma_rssi_threshold_list(): [boolean, number[] | null];
        get_gsm_rssi_delta(): [boolean, number];
        get_gsm_rssi_threshold_list(): [boolean, number[] | null];
        get_hdr_ecio_delta(): [boolean, number];
        get_hdr_ecio_threshold_list(): [boolean, number[] | null];
        get_hdr_io_delta(): [boolean, number];
        get_hdr_io_threshold_list(): [boolean, number[] | null];
        get_hdr_rssi_delta(): [boolean, number];
        get_hdr_rssi_threshold_list(): [boolean, number[] | null];
        get_hdr_sinr_delta(): [boolean, number];
        get_hdr_sinr_threshold_list(): [boolean, number[] | null];
        get_lte_report(): [boolean, number, number];
        get_lte_rsrp_delta(): [boolean, number];
        get_lte_rsrp_threshold_list(): [boolean, number[] | null];
        get_lte_rsrq_delta(): [boolean, number];
        get_lte_rsrq_threshold_list(): [boolean, number[] | null];
        get_lte_rssi_delta(): [boolean, number];
        get_lte_rssi_threshold_list(): [boolean, number[] | null];
        get_lte_snr_delta(): [boolean, number];
        get_lte_snr_threshold_list(): [boolean, number[] | null];
        get_nr5g_report(): [boolean, number, number];
        get_nr5g_rsrp_delta(): [boolean, number];
        get_nr5g_rsrp_threshold_list(): [boolean, number[] | null];
        get_nr5g_rsrq_delta(): [boolean, number];
        get_nr5g_rsrq_threshold_list(): [boolean, number[] | null];
        get_nr5g_snr_delta(): [boolean, number];
        get_nr5g_snr_threshold_list(): [boolean, number[] | null];
        get_wcdma_ecio_delta(): [boolean, number];
        get_wcdma_ecio_threshold_list(): [boolean, number[] | null];
        get_wcdma_rscp_delta(): [boolean, number];
        get_wcdma_rscp_threshold_list(): [boolean, number[] | null];
        get_wcdma_rssi_delta(): [boolean, number];
        get_wcdma_rssi_threshold_list(): [boolean, number[] | null];
        ref(): MessageNasConfigSignalInfoV2Input;
        set_cdma_ecio_delta(value_cdma_ecio_delta: number): boolean;
        set_cdma_ecio_threshold_list(value_cdma_ecio_threshold_list: number[]): boolean;
        set_cdma_rssi_delta(value_cdma_rssi_delta: number): boolean;
        set_cdma_rssi_threshold_list(value_cdma_rssi_threshold_list: number[]): boolean;
        set_gsm_rssi_delta(value_gsm_rssi_delta: number): boolean;
        set_gsm_rssi_threshold_list(value_gsm_rssi_threshold_list: number[]): boolean;
        set_hdr_ecio_delta(value_hdr_ecio_delta: number): boolean;
        set_hdr_ecio_threshold_list(value_hdr_ecio_threshold_list: number[]): boolean;
        set_hdr_io_delta(value_hdr_io_delta: number): boolean;
        set_hdr_io_threshold_list(value_hdr_io_threshold_list: number[]): boolean;
        set_hdr_rssi_delta(value_hdr_rssi_delta: number): boolean;
        set_hdr_rssi_threshold_list(value_hdr_rssi_threshold_list: number[]): boolean;
        set_hdr_sinr_delta(value_hdr_sinr_delta: number): boolean;
        set_hdr_sinr_threshold_list(value_hdr_sinr_threshold_list: number[]): boolean;
        set_lte_report(value_lte_report_rate: number, value_lte_report_average_period: number): boolean;
        set_lte_rsrp_delta(value_lte_rsrp_delta: number): boolean;
        set_lte_rsrp_threshold_list(value_lte_rsrp_threshold_list: number[]): boolean;
        set_lte_rsrq_delta(value_lte_rsrq_delta: number): boolean;
        set_lte_rsrq_threshold_list(value_lte_rsrq_threshold_list: number[]): boolean;
        set_lte_rssi_delta(value_lte_rssi_delta: number): boolean;
        set_lte_rssi_threshold_list(value_lte_rssi_threshold_list: number[]): boolean;
        set_lte_snr_delta(value_lte_snr_delta: number): boolean;
        set_lte_snr_threshold_list(value_lte_snr_threshold_list: number[]): boolean;
        set_nr5g_report(value_nr5g_report_rate: number, value_nr5g_report_average_period: number): boolean;
        set_nr5g_rsrp_delta(value_nr5g_rsrp_delta: number): boolean;
        set_nr5g_rsrp_threshold_list(value_nr5g_rsrp_threshold_list: number[]): boolean;
        set_nr5g_rsrq_delta(value_nr5g_rsrq_delta: number): boolean;
        set_nr5g_rsrq_threshold_list(value_nr5g_rsrq_threshold_list: number[]): boolean;
        set_nr5g_snr_delta(value_nr5g_snr_delta: number): boolean;
        set_nr5g_snr_threshold_list(value_nr5g_snr_threshold_list: number[]): boolean;
        set_wcdma_ecio_delta(value_wcdma_ecio_delta: number): boolean;
        set_wcdma_ecio_threshold_list(value_wcdma_ecio_threshold_list: number[]): boolean;
        set_wcdma_rscp_delta(value_wcdma_rscp_delta: number): boolean;
        set_wcdma_rscp_threshold_list(value_wcdma_rscp_threshold_list: number[]): boolean;
        set_wcdma_rssi_delta(value_wcdma_rssi_delta: number): boolean;
        set_wcdma_rssi_threshold_list(value_wcdma_rssi_threshold_list: number[]): boolean;
        unref(): void;
    }
    abstract class MessageNasConfigSignalInfoV2Output {
        static $gtype: GObject.GType<MessageNasConfigSignalInfoV2Output>;
        get_result(): boolean;
        ref(): MessageNasConfigSignalInfoV2Output;
        unref(): void;
    }
    abstract class MessageNasForceNetworkSearchOutput {
        static $gtype: GObject.GType<MessageNasForceNetworkSearchOutput>;
        get_result(): boolean;
        ref(): MessageNasForceNetworkSearchOutput;
        unref(): void;
    }
    abstract class MessageNasGetCdmaPositionInfoOutput {
        static $gtype: GObject.GType<MessageNasGetCdmaPositionInfoOutput>;
        get_cdma_position_info(): [boolean, number, MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[] | null];
        get_result(): boolean;
        ref(): MessageNasGetCdmaPositionInfoOutput;
        unref(): void;
    }
    class MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation {
        static $gtype: GObject.GType<MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation>;
        pilot_type: NasCdmaPilotType;
        system_id: number;
        network_id: number;
        base_station_id: number;
        pilot_pn: number;
        pilot_strength: number;
        latitude: number;
        longitude: number;
        gps_time_in_milliseconds: number;
    }
    abstract class MessageNasGetCellLocationInfoOutput {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutput>;
        get_cdma_info(): [boolean, number, number, number, number, number, number];
        get_compat_context(): null;
        get_geran_info_v2(): [boolean, number, Uint8Array | null, number, number, number, number, number, MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[] | null];
        get_interfrequency_lte_info(): [boolean, boolean, MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementGir[] | null];
        get_intrafrequency_lte_info_v2(): [boolean, boolean, Uint8Array | null, number, number, number, number, number, number, number, number, MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[] | null];
        get_lte_info_neighboring_gsm(): [boolean, boolean, MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementGir[] | null];
        get_lte_info_neighboring_wcdma(): [boolean, boolean, MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementGir[] | null];
        get_lte_info_timing_advance(): [boolean, number];
        get_nr5g_arfcn(): [boolean, number];
        get_nr5g_cell_information(): [boolean, Uint8Array | null, Uint8Array | null, number, number, number, number, number];
        get_result(): boolean;
        get_umts_cell_id(): [boolean, number];
        get_umts_info_neighboring_lte(): [boolean, NasWcdmaRrcState | null, MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[] | null];
        get_umts_info_v2(): [boolean, number, Uint8Array | null, number, number, number, number, number, MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[] | null, MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[] | null];
        ref(): MessageNasGetCellLocationInfoOutput;
        set_compat_context(compat_context: null): void;
        unref(): void;
    }
    class MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement>;
        cell_id: number;
        plmn: null[];
        lac: number;
        geran_absolute_rf_channel_number: number;
        base_station_identity_code: number;
        rx_level: number;
        constructor(properties?: Partial<{
            cell_id: number;
            plmn: null[];
            lac: number;
            geran_absolute_rf_channel_number: number;
            base_station_identity_code: number;
            rx_level: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement>;
        physical_cell_id: number;
        rsrq: number;
        rsrp: number;
        rssi: number;
        cell_selection_rx_level: number;
        constructor(properties?: Partial<{
            physical_cell_id: number;
            rsrq: number;
            rsrp: number;
            rssi: number;
            cell_selection_rx_level: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementGir {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementGir>;
        eutra_absolute_rf_channel_number: number;
        cell_selection_rx_level_low_threshold: number;
        cell_selection_rx_level_high_threshold: number;
        cell_reselection_priority: number;
        cell: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement[];
        constructor(properties?: Partial<{
            eutra_absolute_rf_channel_number: number;
            cell_selection_rx_level_low_threshold: number;
            cell_selection_rx_level_high_threshold: number;
            cell_reselection_priority: number;
            cell: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement[];
        }>);
    }
    class MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement>;
        physical_cell_id: number;
        rsrq: number;
        rsrp: number;
        rssi: number;
        cell_selection_rx_level: number;
        constructor(properties?: Partial<{
            physical_cell_id: number;
            rsrq: number;
            rsrp: number;
            rssi: number;
            cell_selection_rx_level: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement>;
        geran_absolute_rf_channel_number: number;
        band_is_1900: boolean;
        cell_id_valid: boolean;
        base_station_identity_code: number;
        rssi: number;
        cell_selection_rx_level: number;
        constructor(properties?: Partial<{
            geran_absolute_rf_channel_number: number;
            band_is_1900: boolean;
            cell_id_valid: boolean;
            base_station_identity_code: number;
            rssi: number;
            cell_selection_rx_level: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementGir {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementGir>;
        cell_reselection_priority: number;
        cell_reselection_high_threshold: number;
        cell_reselection_low_threshold: number;
        ncc_permitted: number;
        cell: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement[];
        constructor(properties?: Partial<{
            cell_reselection_priority: number;
            cell_reselection_high_threshold: number;
            cell_reselection_low_threshold: number;
            ncc_permitted: number;
            cell: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement[];
        }>);
    }
    class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement>;
        primary_scrambling_code: number;
        cpich_rscp: number;
        cpich_ecno: number;
        cell_selection_rx_level: number;
        constructor(properties?: Partial<{
            primary_scrambling_code: number;
            cpich_rscp: number;
            cpich_ecno: number;
            cell_selection_rx_level: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementGir {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementGir>;
        utra_absolute_rf_channel_number: number;
        cell_reselection_priority: number;
        cell_reselection_high_threshold: number;
        cell_reselection_low_threshold: number;
        cell: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement[];
        constructor(properties?: Partial<{
            utra_absolute_rf_channel_number: number;
            cell_reselection_priority: number;
            cell_reselection_high_threshold: number;
            cell_reselection_low_threshold: number;
            cell: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement[];
        }>);
    }
    class MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement>;
        eutra_absolute_rf_channel_number: number;
        physical_cell_id: number;
        rsrp: number;
        rsrq: number;
        cell_selection_rx_level: number;
        is_tdd: boolean;
        constructor(properties?: Partial<{
            eutra_absolute_rf_channel_number: number;
            physical_cell_id: number;
            rsrp: number;
            rsrq: number;
            cell_selection_rx_level: number;
            is_tdd: boolean;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement>;
        utra_absolute_rf_channel_number: number;
        primary_scrambling_code: number;
        rscp: number;
        ecio: number;
        constructor(properties?: Partial<{
            utra_absolute_rf_channel_number: number;
            primary_scrambling_code: number;
            rscp: number;
            ecio: number;
        }>);
    }
    class MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement {
        static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement>;
        geran_absolute_rf_channel_number: number;
        network_color_code: number;
        base_station_color_code: number;
        rssi: number;
        constructor(properties?: Partial<{
            geran_absolute_rf_channel_number: number;
            network_color_code: number;
            base_station_color_code: number;
            rssi: number;
        }>);
    }
    abstract class MessageNasGetDrxOutput {
        static $gtype: GObject.GType<MessageNasGetDrxOutput>;
        get_info(): [boolean, NasDrx | null];
        get_result(): boolean;
        ref(): MessageNasGetDrxOutput;
        unref(): void;
    }
    abstract class MessageNasGetEndcConfigOutput {
        static $gtype: GObject.GType<MessageNasGetEndcConfigOutput>;
        get_enabled(): [boolean, boolean];
        get_immediate_scg_release(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageNasGetEndcConfigOutput;
        unref(): void;
    }
    abstract class MessageNasGetHomeNetworkOutput {
        static $gtype: GObject.GType<MessageNasGetHomeNetworkOutput>;
        get_home_network(): [boolean, number, number, string];
        get_home_network_3gpp2_ext(): [boolean, number, number, NasNetworkDescriptionDisplay | null, NasNetworkDescriptionEncoding | null, Uint8Array | null];
        get_home_network_3gpp_mnc(): [boolean, boolean, boolean];
        get_home_system_id(): [boolean, number, number];
        get_network_name_source(): [boolean, NasNetworkNameSource | null];
        get_result(): boolean;
        ref(): MessageNasGetHomeNetworkOutput;
        unref(): void;
    }
    abstract class MessageNasGetLteCphyCaInfoOutput {
        static $gtype: GObject.GType<MessageNasGetLteCphyCaInfoOutput>;
        get_dl_bandwidth(): [boolean, NasDLBandwidth | null];
        get_phy_ca_agg_pcell_info(): [boolean, number, number, NasDLBandwidth | null, NasActiveBand | null];
        get_phy_ca_agg_scell_info(): [boolean, number, number, NasDLBandwidth | null, NasActiveBand | null, NasScellState | null];
        get_phy_ca_agg_secondary_cells(): [boolean, MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[] | null];
        get_result(): boolean;
        get_scell_index(): [boolean, number];
        ref(): MessageNasGetLteCphyCaInfoOutput;
        unref(): void;
    }
    class MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc {
        static $gtype: GObject.GType<MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc>;
        physical_cell_id: number;
        rx_channel: number;
        dl_bandwidth: NasDLBandwidth;
        lte_band: NasActiveBand;
        state: NasScellState;
        cell_index: number;
    }
    abstract class MessageNasGetNetworkTimeOutput {
        static $gtype: GObject.GType<MessageNasGetNetworkTimeOutput>;
        get_3gpp2_time(): [boolean, number, number, number, number, number, number, NasDayOfWeek | null, number, NasDaylightSavingsAdjustment | null, NasRadioInterface | null];
        get_3gpp_time(): [boolean, number, number, number, number, number, number, NasDayOfWeek | null, number, NasDaylightSavingsAdjustment | null, NasRadioInterface | null];
        get_result(): boolean;
        ref(): MessageNasGetNetworkTimeOutput;
        unref(): void;
    }
    abstract class MessageNasGetOperatorNameOutput {
        static $gtype: GObject.GType<MessageNasGetOperatorNameOutput>;
        get_nitz_information(): [boolean, NasPlmnEncodingScheme | null, NasPlmnNameCountryInitials | null, NasPlmnNameSpareBits | null, NasPlmnNameSpareBits | null, Uint8Array | null, Uint8Array | null];
        get_operator_plmn_list(): [boolean, MessageNasGetOperatorNameOutputOperatorPlmnListElement[] | null];
        get_operator_plmn_name(): [boolean, MessageNasGetOperatorNameOutputOperatorPlmnNameElement[] | null];
        get_operator_string_name(): [boolean, string];
        get_result(): boolean;
        get_service_provider_name(): [boolean, NasNetworkNameDisplayCondition | null, string];
        ref(): MessageNasGetOperatorNameOutput;
        unref(): void;
    }
    class MessageNasGetOperatorNameOutputOperatorPlmnListElement {
        static $gtype: GObject.GType<MessageNasGetOperatorNameOutputOperatorPlmnListElement>;
        mcc: string;
        mnc: string;
        lac1: number;
        lac2: number;
        plmn_name_record_identifier: number;
        constructor(properties?: Partial<{
            mcc: string;
            mnc: string;
            lac1: number;
            lac2: number;
            plmn_name_record_identifier: number;
        }>);
    }
    class MessageNasGetOperatorNameOutputOperatorPlmnNameElement {
        static $gtype: GObject.GType<MessageNasGetOperatorNameOutputOperatorPlmnNameElement>;
        name_encoding: NasPlmnEncodingScheme;
        short_country_initials: NasPlmnNameCountryInitials;
        long_name_spare_bits: NasPlmnNameSpareBits;
        short_name_spare_bits: NasPlmnNameSpareBits;
        long_name: null[];
        short_name: null[];
    }
    class MessageNasGetPlmnNameInput {
        static $gtype: GObject.GType<MessageNasGetPlmnNameInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasGetPlmnNameInput;
        get_always_send_plmn_name(): [boolean, boolean];
        get_csg_id(): [boolean, number];
        get_mnc_pcs_digit_include_status(): [boolean, boolean];
        get_plmn(): [boolean, number, number];
        get_radio_access_technology(): [boolean, NasRadioInterface | null];
        get_send_all_information(): [boolean, boolean];
        get_suppress_sim_error(): [boolean, boolean];
        get_use_static_table_only(): [boolean, boolean];
        ref(): MessageNasGetPlmnNameInput;
        set_always_send_plmn_name(value_always_send_plmn_name: boolean): boolean;
        set_csg_id(value_csg_id: number): boolean;
        set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean;
        set_plmn(value_plmn_mcc: number, value_plmn_mnc: number): boolean;
        set_radio_access_technology(value_radio_access_technology: NasRadioInterface): boolean;
        set_send_all_information(value_send_all_information: boolean): boolean;
        set_suppress_sim_error(value_suppress_sim_error: boolean): boolean;
        set_use_static_table_only(value_use_static_table_only: boolean): boolean;
        unref(): void;
    }
    abstract class MessageNasGetPlmnNameOutput {
        static $gtype: GObject.GType<MessageNasGetPlmnNameOutput>;
        get_3gpp_eons_plmn_name(): [boolean, NasNetworkDescriptionEncoding | null, Uint8Array | null, NasNetworkDescriptionEncoding | null, NasPlmnNameCountryInitials | null, NasPlmnNameSpareBits | null, Uint8Array | null, NasNetworkDescriptionEncoding | null, NasPlmnNameCountryInitials | null, NasPlmnNameSpareBits | null, Uint8Array | null];
        get_additional_information(): [boolean, number[] | null];
        get_display_bit_information(): [boolean, NasBoolean | null, NasBoolean | null];
        get_network_information(): [boolean, NasBoolean | null];
        get_network_name_source(): [boolean, NasNetworkNameSource | null];
        get_plmn_name_with_language_id(): [boolean, MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement[] | null];
        get_result(): boolean;
        ref(): MessageNasGetPlmnNameOutput;
        unref(): void;
    }
    class MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement {
        static $gtype: GObject.GType<MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement>;
        long_name: null[];
        short_name: null[];
        language_id: NasPlmnLanguageId;
    }
    abstract class MessageNasGetPreferredNetworksOutput {
        static $gtype: GObject.GType<MessageNasGetPreferredNetworksOutput>;
        get_mnc_pcs_digit_include_status(): [boolean, MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement[] | null];
        get_preferred_networks(): [boolean, MessageNasGetPreferredNetworksOutputPreferredNetworksElement[] | null];
        get_result(): boolean;
        get_static_mnc_pcs_digit_include_status(): [boolean, MessageNasGetPreferredNetworksOutputStaticMncPcsDigitIncludeStatusElement[] | null];
        get_static_preferred_networks(): [boolean, MessageNasGetPreferredNetworksOutputStaticPreferredNetworksElement[] | null];
        ref(): MessageNasGetPreferredNetworksOutput;
        unref(): void;
    }
    class MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement {
        static $gtype: GObject.GType<MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement>;
        mcc: number;
        mnc: number;
        includes_pcs_digit: boolean;
        constructor(properties?: Partial<{
            mcc: number;
            mnc: number;
            includes_pcs_digit: boolean;
        }>);
    }
    class MessageNasGetPreferredNetworksOutputPreferredNetworksElement {
        static $gtype: GObject.GType<MessageNasGetPreferredNetworksOutputPreferredNetworksElement>;
        mcc: number;
        mnc: number;
        radio_access_technology: NasPlmnAccessTechnologyIdentifier;
    }
    class MessageNasGetPreferredNetworksOutputStaticMncPcsDigitIncludeStatusElement {
        static $gtype: GObject.GType<MessageNasGetPreferredNetworksOutputStaticMncPcsDigitIncludeStatusElement>;
        mcc: number;
        mnc: number;
        includes_pcs_digit: boolean;
        constructor(properties?: Partial<{
            mcc: number;
            mnc: number;
            includes_pcs_digit: boolean;
        }>);
    }
    class MessageNasGetPreferredNetworksOutputStaticPreferredNetworksElement {
        static $gtype: GObject.GType<MessageNasGetPreferredNetworksOutputStaticPreferredNetworksElement>;
        mcc: number;
        mnc: number;
        radio_access_technology: NasPlmnAccessTechnologyIdentifier;
    }
    abstract class MessageNasGetRfBandInformationOutput {
        static $gtype: GObject.GType<MessageNasGetRfBandInformationOutput>;
        get_bandwidth_list(): [boolean, MessageNasGetRfBandInformationOutputBandwidthListElement[] | null];
        get_extended_list(): [boolean, MessageNasGetRfBandInformationOutputExtendedListElement[] | null];
        get_list(): [boolean, MessageNasGetRfBandInformationOutputListElement[] | null];
        get_result(): boolean;
        ref(): MessageNasGetRfBandInformationOutput;
        unref(): void;
    }
    class MessageNasGetRfBandInformationOutputBandwidthListElement {
        static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputBandwidthListElement>;
        radio_interface: NasRadioInterface;
        bandwidth: NasDLBandwidth;
    }
    class MessageNasGetRfBandInformationOutputExtendedListElement {
        static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputExtendedListElement>;
        radio_interface: NasRadioInterface;
        active_band_class: NasActiveBand;
        active_channel: number;
    }
    class MessageNasGetRfBandInformationOutputListElement {
        static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputListElement>;
        radio_interface: NasRadioInterface;
        active_band_class: NasActiveBand;
        active_channel: number;
    }
    abstract class MessageNasGetServingSystemOutput {
        static $gtype: GObject.GType<MessageNasGetServingSystemOutput>;
        get_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_cdma_base_station_info(): [boolean, number, number, number];
        get_cdma_p_rev(): [boolean, number];
        get_cdma_system_id(): [boolean, number, number];
        get_cdma_system_info(): [boolean, number, number];
        get_cid_3gpp(): [boolean, number];
        get_concurrent_service_info_3gpp2(): [boolean, boolean];
        get_current_plmn(): [boolean, number, number, string];
        get_data_service_capability(): [boolean, NasDataCapability[] | null];
        get_daylight_saving_time_adjustment_3gpp(): [boolean, number];
        get_default_roaming_indicator(): [boolean, NasRoamingIndicatorStatus | null];
        get_detailed_service_status(): [boolean, NasServiceStatus | null, NasNetworkServiceDomain | null, NasServiceStatus | null, boolean, boolean];
        get_dtm_support(): [boolean, boolean];
        get_hdr_personality(): [boolean, NasHdrPersonality | null];
        get_lac_3gpp(): [boolean, number];
        get_lte_tac(): [boolean, number];
        get_mnc_pcs_digit_include_status(): [boolean, number, number, boolean];
        get_network_name_source(): [boolean, NasNetworkNameSource | null];
        get_prl_indicator_3gpp2(): [boolean, boolean];
        get_result(): boolean;
        get_roaming_indicator(): [boolean, NasRoamingIndicatorStatus | null];
        get_roaming_indicator_list(): [boolean, MessageNasGetServingSystemOutputRoamingIndicatorListElement[] | null];
        get_serving_system(): [boolean, NasRegistrationState | null, NasAttachState | null, NasAttachState | null, NasNetworkType | null, NasRadioInterface[] | null];
        get_time_zone_3gpp(): [boolean, number];
        get_time_zone_3gpp2(): [boolean, number, number, boolean];
        get_umts_primary_scrambling_code(): [boolean, number];
        ref(): MessageNasGetServingSystemOutput;
        unref(): void;
    }
    class MessageNasGetServingSystemOutputRoamingIndicatorListElement {
        static $gtype: GObject.GType<MessageNasGetServingSystemOutputRoamingIndicatorListElement>;
        radio_interface: NasRadioInterface;
        roaming_indicator: NasRoamingIndicatorStatus;
    }
    abstract class MessageNasGetSignalInfoOutput {
        static $gtype: GObject.GType<MessageNasGetSignalInfoOutput>;
        get_5g_signal_strength(): [boolean, number, number];
        get_5g_signal_strength_extended(): [boolean, number];
        get_cdma_signal_strength(): [boolean, number, number];
        get_gsm_signal_strength(): [boolean, number];
        get_hdr_signal_strength(): [boolean, number, number, NasEvdoSinrLevel | null, number];
        get_lte_signal_strength(): [boolean, number, number, number, number];
        get_result(): boolean;
        get_tdma_signal_strength(): [boolean, number];
        get_tdma_signal_strength_extended(): [boolean, number, number, number, number];
        get_wcdma_rscp(): [boolean, number];
        get_wcdma_signal_strength(): [boolean, number, number];
        ref(): MessageNasGetSignalInfoOutput;
        unref(): void;
    }
    class MessageNasGetSignalStrengthInput {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasGetSignalStrengthInput;
        get_request_mask(): [boolean, NasSignalStrengthRequest | null];
        ref(): MessageNasGetSignalStrengthInput;
        set_request_mask(value_request_mask: NasSignalStrengthRequest): boolean;
        unref(): void;
    }
    abstract class MessageNasGetSignalStrengthOutput {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthOutput>;
        get_ecio_list(): [boolean, MessageNasGetSignalStrengthOutputEcioListElement[] | null];
        get_error_rate_list(): [boolean, MessageNasGetSignalStrengthOutputErrorRateListElement[] | null];
        get_io(): [boolean, number];
        get_lte_rsrp(): [boolean, number];
        get_lte_snr(): [boolean, number];
        get_result(): boolean;
        get_rsrq(): [boolean, number, NasRadioInterface | null];
        get_rssi_list(): [boolean, MessageNasGetSignalStrengthOutputRssiListElement[] | null];
        get_signal_strength(): [boolean, number, NasRadioInterface | null];
        get_sinr(): [boolean, NasEvdoSinrLevel | null];
        get_strength_list(): [boolean, MessageNasGetSignalStrengthOutputStrengthListElement[] | null];
        ref(): MessageNasGetSignalStrengthOutput;
        unref(): void;
    }
    class MessageNasGetSignalStrengthOutputEcioListElement {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputEcioListElement>;
        ecio: number;
        radio_interface: NasRadioInterface;
    }
    class MessageNasGetSignalStrengthOutputErrorRateListElement {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputErrorRateListElement>;
        rate: number;
        radio_interface: NasRadioInterface;
    }
    class MessageNasGetSignalStrengthOutputRssiListElement {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputRssiListElement>;
        rssi: number;
        radio_interface: NasRadioInterface;
    }
    class MessageNasGetSignalStrengthOutputStrengthListElement {
        static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputStrengthListElement>;
        strength: number;
        radio_interface: NasRadioInterface;
    }
    abstract class MessageNasGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageNasGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageNasGetSupportedMessagesOutput;
        unref(): void;
    }
    abstract class MessageNasGetSystemInfoOutput {
        static $gtype: GObject.GType<MessageNasGetSystemInfoOutput>;
        get_additional_cdma_system_info(): [boolean, number, number];
        get_additional_gsm_system_info(): [boolean, number, NasCellBroadcastCapability | null];
        get_additional_hdr_system_info(): [boolean, number];
        get_additional_lte_system_info(): [boolean, number];
        get_additional_wcdma_system_info(): [boolean, number, NasCellBroadcastCapability | null];
        get_cdma_registration_zone_id(): [boolean, number];
        get_cdma_resolved_mcc(): [boolean, number];
        get_cdma_service_status(): [boolean, NasServiceStatus | null, boolean];
        get_cdma_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, boolean, boolean, number, boolean, number, boolean, boolean, boolean, number, number, boolean, number, number, number, boolean, number, boolean, string, string];
        get_dcnr_restriction_info(): [boolean, boolean];
        get_eutra_with_nr5g_availability(): [boolean, boolean];
        get_gsm_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_gsm_cipher_domain(): [boolean, NasNetworkServiceDomain | null];
        get_gsm_routing_area_code(): [boolean, number];
        get_gsm_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_gsm_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, boolean, boolean, boolean];
        get_hdr_service_status(): [boolean, NasServiceStatus | null, boolean];
        get_hdr_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, boolean, boolean, NasHdrPersonality | null, boolean, NasHdrProtocolRevision | null, boolean, string];
        get_ims_voice_support(): [boolean, boolean];
        get_lte_cell_access_status(): [boolean, NasLteCellAccessStatus | null];
        get_lte_embms_coverage_info_support(): [boolean, boolean];
        get_lte_embms_coverage_info_trace_id(): [boolean, number];
        get_lte_registration_domain(): [boolean, NasLteRegistrationDomain | null];
        get_lte_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_lte_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, number];
        get_lte_voice_domain(): [boolean, NasLteVoiceDomain | null];
        get_lte_voice_support(): [boolean, boolean];
        get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction | null];
        get_nr5g_service_status_info(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_nr5g_system_info(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, number, boolean, string, string, boolean, number];
        get_nr5g_tracking_area_code(): [boolean, Uint8Array | null];
        get_result(): boolean;
        get_sim_reject_info(): [boolean, NasSimRejectState | null];
        get_td_scdma_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_td_scdma_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, NasWcdmaHsService | null, boolean, NasWcdmaHsService | null, boolean, number, boolean, NasCellBroadcastCapability | null, boolean, NasCallBarringStatus | null, boolean, NasCallBarringStatus | null, boolean, NasNetworkServiceDomain | null];
        get_wcdma_call_barring_status(): [boolean, NasCallBarringStatus | null, NasCallBarringStatus | null];
        get_wcdma_cipher_domain(): [boolean, NasNetworkServiceDomain | null];
        get_wcdma_routing_area_code(): [boolean, number];
        get_wcdma_service_status(): [boolean, NasServiceStatus | null, NasServiceStatus | null, boolean];
        get_wcdma_system_info_v2(): [boolean, boolean, NasNetworkServiceDomain | null, boolean, NasNetworkServiceDomain | null, boolean, NasRoamingStatus | null, boolean, boolean, boolean, number, boolean, number, boolean, NasNetworkServiceDomain | null, NasRejectCause | null, boolean, string, string, boolean, NasWcdmaHsService | null, boolean, NasWcdmaHsService | null, boolean, number];
        ref(): MessageNasGetSystemInfoOutput;
        unref(): void;
    }
    abstract class MessageNasGetSystemSelectionPreferenceOutput {
        static $gtype: GObject.GType<MessageNasGetSystemSelectionPreferenceOutput>;
        get_acquisition_order_preference(): [boolean, NasRadioInterface[] | null];
        get_band_preference(): [boolean, NasBandPreference | null];
        get_cdma_prl_preference(): [boolean, NasCdmaPrlPreference | null];
        get_disabled_modes(): [boolean, NasRatModePreference | null];
        get_emergency_mode(): [boolean, boolean];
        get_extended_lte_band_preference(): [boolean, number, number, number, number];
        get_gsm_wcdma_acquisition_order_preference(): [boolean, NasGsmWcdmaAcquisitionOrderPreference | null];
        get_lte_band_preference(): [boolean, NasLteBandPreference | null];
        get_manual_network_selection(): [boolean, number, number, boolean];
        get_mode_preference(): [boolean, NasRatModePreference | null];
        get_network_selection_preference(): [boolean, NasNetworkSelectionPreference | null];
        get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction | null];
        get_nr5g_nsa_band_preference(): [boolean, number, number, number, number, number, number, number, number];
        get_nr5g_sa_band_preference(): [boolean, number, number, number, number, number, number, number, number];
        get_result(): boolean;
        get_roaming_preference(): [boolean, NasRoamingPreference | null];
        get_service_domain_preference(): [boolean, NasServiceDomainPreference | null];
        get_td_scdma_band_preference(): [boolean, NasTdScdmaBandPreference | null];
        get_usage_preference(): [boolean, NasUsagePreference | null];
        get_voice_domain_preference(): [boolean, NasVoiceDomainPreference | null];
        ref(): MessageNasGetSystemSelectionPreferenceOutput;
        unref(): void;
    }
    abstract class MessageNasGetTechnologyPreferenceOutput {
        static $gtype: GObject.GType<MessageNasGetTechnologyPreferenceOutput>;
        get_active(): [boolean, NasRadioTechnologyPreference | null, NasPreferenceDuration | null];
        get_persistent(): [boolean, NasRadioTechnologyPreference | null];
        get_result(): boolean;
        ref(): MessageNasGetTechnologyPreferenceOutput;
        unref(): void;
    }
    class MessageNasGetTxRxInfoInput {
        static $gtype: GObject.GType<MessageNasGetTxRxInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasGetTxRxInfoInput;
        get_radio_interface(): [boolean, NasRadioInterface | null];
        ref(): MessageNasGetTxRxInfoInput;
        set_radio_interface(value_radio_interface: NasRadioInterface): boolean;
        unref(): void;
    }
    abstract class MessageNasGetTxRxInfoOutput {
        static $gtype: GObject.GType<MessageNasGetTxRxInfoOutput>;
        get_result(): boolean;
        get_rx_chain_0_info(): [boolean, boolean, number, number, number, number, number];
        get_rx_chain_1_info(): [boolean, boolean, number, number, number, number, number];
        get_rx_chain_2_info(): [boolean, boolean, number, number, number, number, number];
        get_rx_chain_3_info(): [boolean, boolean, number, number, number, number, number];
        get_tx_info(): [boolean, boolean, number];
        ref(): MessageNasGetTxRxInfoOutput;
        unref(): void;
    }
    class MessageNasIncrementalNetworkScanInput {
        static $gtype: GObject.GType<MessageNasIncrementalNetworkScanInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasIncrementalNetworkScanInput;
        get_network_type(): [boolean, NasNetworkScanType | null];
        ref(): MessageNasIncrementalNetworkScanInput;
        set_network_type(value_network_type: NasNetworkScanType): boolean;
        unref(): void;
    }
    abstract class MessageNasIncrementalNetworkScanOutput {
        static $gtype: GObject.GType<MessageNasIncrementalNetworkScanOutput>;
        get_result(): boolean;
        ref(): MessageNasIncrementalNetworkScanOutput;
        unref(): void;
    }
    class MessageNasInitiateNetworkRegisterInput {
        static $gtype: GObject.GType<MessageNasInitiateNetworkRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasInitiateNetworkRegisterInput;
        get_action(): [boolean, NasNetworkRegisterType | null];
        get_change_duration(): [boolean, NasChangeDuration | null];
        get_manual_registration_info_3gpp(): [boolean, number, number, NasRadioInterface | null];
        get_mnc_pcs_digit_include_status(): [boolean, boolean];
        ref(): MessageNasInitiateNetworkRegisterInput;
        set_action(value_action: NasNetworkRegisterType): boolean;
        set_change_duration(value_change_duration: NasChangeDuration): boolean;
        set_manual_registration_info_3gpp(value_manual_registration_info_3gpp_mcc: number, value_manual_registration_info_3gpp_mnc: number, value_manual_registration_info_3gpp_radio_interface: NasRadioInterface): boolean;
        set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean;
        unref(): void;
    }
    abstract class MessageNasInitiateNetworkRegisterOutput {
        static $gtype: GObject.GType<MessageNasInitiateNetworkRegisterOutput>;
        get_result(): boolean;
        ref(): MessageNasInitiateNetworkRegisterOutput;
        unref(): void;
    }
    class MessageNasNetworkScanInput {
        static $gtype: GObject.GType<MessageNasNetworkScanInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasNetworkScanInput;
        get_network_type(): [boolean, NasNetworkScanType | null];
        ref(): MessageNasNetworkScanInput;
        set_network_type(value_network_type: NasNetworkScanType): boolean;
        unref(): void;
    }
    abstract class MessageNasNetworkScanOutput {
        static $gtype: GObject.GType<MessageNasNetworkScanOutput>;
        get_mnc_pcs_digit_include_status(): [boolean, MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[] | null];
        get_network_information(): [boolean, MessageNasNetworkScanOutputNetworkInformationElement[] | null];
        get_network_scan_result(): [boolean, NasNetworkScanResult | null];
        get_radio_access_technology(): [boolean, MessageNasNetworkScanOutputRadioAccessTechnologyElement[] | null];
        get_result(): boolean;
        ref(): MessageNasNetworkScanOutput;
        unref(): void;
    }
    class MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement {
        static $gtype: GObject.GType<MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement>;
        mcc: number;
        mnc: number;
        includes_pcs_digit: boolean;
        constructor(properties?: Partial<{
            mcc: number;
            mnc: number;
            includes_pcs_digit: boolean;
        }>);
    }
    class MessageNasNetworkScanOutputNetworkInformationElement {
        static $gtype: GObject.GType<MessageNasNetworkScanOutputNetworkInformationElement>;
        mcc: number;
        mnc: number;
        network_status: NasNetworkStatus;
        description: string;
    }
    class MessageNasNetworkScanOutputRadioAccessTechnologyElement {
        static $gtype: GObject.GType<MessageNasNetworkScanOutputRadioAccessTechnologyElement>;
        mcc: number;
        mnc: number;
        radio_interface: NasRadioInterface;
    }
    class MessageNasRegisterIndicationsInput {
        static $gtype: GObject.GType<MessageNasRegisterIndicationsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasRegisterIndicationsInput;
        get_current_plmn_name(): [boolean, boolean];
        get_ddtm_events(): [boolean, boolean];
        get_dual_standby_preference(): [boolean, boolean];
        get_embms_status(): [boolean, boolean];
        get_error_rate(): [boolean, boolean];
        get_hdr_new_uati_assigned(): [boolean, boolean];
        get_hdr_session_closed(): [boolean, boolean];
        get_managed_roaming(): [boolean, boolean];
        get_network_reject_information(): [boolean, boolean, boolean];
        get_network_time(): [boolean, boolean];
        get_rf_band_information(): [boolean, boolean];
        get_serving_system_events(): [boolean, boolean];
        get_signal_info(): [boolean, boolean];
        get_subscription_info(): [boolean, boolean];
        get_system_info(): [boolean, boolean];
        get_system_selection_preference(): [boolean, boolean];
        ref(): MessageNasRegisterIndicationsInput;
        set_current_plmn_name(value_current_plmn_name: boolean): boolean;
        set_ddtm_events(value_ddtm_events: boolean): boolean;
        set_dual_standby_preference(value_dual_standby_preference: boolean): boolean;
        set_embms_status(value_embms_status: boolean): boolean;
        set_error_rate(value_error_rate: boolean): boolean;
        set_hdr_new_uati_assigned(value_hdr_new_uati_assigned: boolean): boolean;
        set_hdr_session_closed(value_hdr_session_closed: boolean): boolean;
        set_managed_roaming(value_managed_roaming: boolean): boolean;
        set_network_reject_information(value_network_reject_information_enable_network_reject_indications: boolean, value_network_reject_information_supress_system_info_indications: boolean): boolean;
        set_network_time(value_network_time: boolean): boolean;
        set_rf_band_information(value_rf_band_information: boolean): boolean;
        set_serving_system_events(value_serving_system_events: boolean): boolean;
        set_signal_info(value_signal_info: boolean): boolean;
        set_subscription_info(value_subscription_info: boolean): boolean;
        set_system_info(value_system_info: boolean): boolean;
        set_system_selection_preference(value_system_selection_preference: boolean): boolean;
        unref(): void;
    }
    abstract class MessageNasRegisterIndicationsOutput {
        static $gtype: GObject.GType<MessageNasRegisterIndicationsOutput>;
        get_result(): boolean;
        ref(): MessageNasRegisterIndicationsOutput;
        unref(): void;
    }
    abstract class MessageNasResetOutput {
        static $gtype: GObject.GType<MessageNasResetOutput>;
        get_result(): boolean;
        ref(): MessageNasResetOutput;
        unref(): void;
    }
    class MessageNasSetEventReportInput {
        static $gtype: GObject.GType<MessageNasSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasSetEventReportInput;
        get_ecio_indicator(): [boolean, boolean, number];
        get_ecio_threshold(): [boolean, boolean, number[] | null];
        get_error_rate_indicator(): [boolean, boolean];
        get_io_indicator(): [boolean, boolean, number];
        get_lte_rsrp_delta(): [boolean, boolean, number];
        get_lte_snr_delta(): [boolean, boolean, number];
        get_registration_reject_reason(): [boolean, boolean];
        get_rf_band_information(): [boolean, boolean];
        get_rssi_indicator(): [boolean, boolean, number];
        get_signal_strength_indicator(): [boolean, boolean, Uint8Array | null];
        get_sinr_indicator(): [boolean, boolean, number];
        get_sinr_threshold(): [boolean, boolean, Uint8Array | null];
        ref(): MessageNasSetEventReportInput;
        set_ecio_indicator(value_ecio_indicator_report: boolean, value_ecio_indicator_ecio_delta: number): boolean;
        set_ecio_threshold(value_ecio_threshold_report: boolean, value_ecio_threshold_thresholds: number[]): boolean;
        set_error_rate_indicator(value_error_rate_indicator: boolean): boolean;
        set_io_indicator(value_io_indicator_report: boolean, value_io_indicator_io_delta: number): boolean;
        set_lte_rsrp_delta(value_lte_rsrp_delta_report: boolean, value_lte_rsrp_delta_rsrp_delta: number): boolean;
        set_lte_snr_delta(value_lte_snr_delta_report: boolean, value_lte_snr_delta_snr_delta: number): boolean;
        set_registration_reject_reason(value_registration_reject_reason: boolean): boolean;
        set_rf_band_information(value_rf_band_information: boolean): boolean;
        set_rssi_indicator(value_rssi_indicator_report: boolean, value_rssi_indicator_rssi_delta: number): boolean;
        set_signal_strength_indicator(value_signal_strength_indicator_report: boolean, value_signal_strength_indicator_thresholds: Uint8Array | string): boolean;
        set_sinr_indicator(value_sinr_indicator_report: boolean, value_sinr_indicator_sinr_delta: number): boolean;
        set_sinr_threshold(value_sinr_threshold_report: boolean, value_sinr_threshold_thresholds: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageNasSetEventReportOutput {
        static $gtype: GObject.GType<MessageNasSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessageNasSetEventReportOutput;
        unref(): void;
    }
    class MessageNasSetPreferredNetworksInput {
        static $gtype: GObject.GType<MessageNasSetPreferredNetworksInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasSetPreferredNetworksInput;
        get_clear_previous_preferred_networks(): [boolean, boolean];
        get_mnc_pcs_digit_include_status(): [boolean, MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[] | null];
        get_preferred_networks(): [boolean, MessageNasSetPreferredNetworksInputPreferredNetworksElement[] | null];
        ref(): MessageNasSetPreferredNetworksInput;
        set_clear_previous_preferred_networks(value_clear_previous_preferred_networks: boolean): boolean;
        set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status_ptr: MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[]): boolean;
        set_preferred_networks(value_preferred_networks_ptr: MessageNasSetPreferredNetworksInputPreferredNetworksElement[]): boolean;
        unref(): void;
    }
    class MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement {
        static $gtype: GObject.GType<MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement>;
        mcc: number;
        mnc: number;
        includes_pcs_digit: boolean;
        constructor(properties?: Partial<{
            mcc: number;
            mnc: number;
            includes_pcs_digit: boolean;
        }>);
    }
    class MessageNasSetPreferredNetworksInputPreferredNetworksElement {
        static $gtype: GObject.GType<MessageNasSetPreferredNetworksInputPreferredNetworksElement>;
        mcc: number;
        mnc: number;
        radio_access_technology: NasPlmnAccessTechnologyIdentifier;
    }
    abstract class MessageNasSetPreferredNetworksOutput {
        static $gtype: GObject.GType<MessageNasSetPreferredNetworksOutput>;
        get_result(): boolean;
        ref(): MessageNasSetPreferredNetworksOutput;
        unref(): void;
    }
    class MessageNasSetSystemSelectionPreferenceInput {
        static $gtype: GObject.GType<MessageNasSetSystemSelectionPreferenceInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasSetSystemSelectionPreferenceInput;
        get_acquisition_order_preference(): [boolean, NasRadioInterface[] | null];
        get_band_preference(): [boolean, NasBandPreference | null];
        get_cdma_prl_preference(): [boolean, NasCdmaPrlPreference | null];
        get_change_duration(): [boolean, NasChangeDuration | null];
        get_emergency_mode(): [boolean, boolean];
        get_extended_lte_band_preference(): [boolean, number, number, number, number];
        get_gsm_wcdma_acquisition_order_preference(): [boolean, NasGsmWcdmaAcquisitionOrderPreference | null];
        get_lte_band_preference(): [boolean, NasLteBandPreference | null];
        get_mnc_pcs_digit_include_status(): [boolean, boolean];
        get_mode_preference(): [boolean, NasRatModePreference | null];
        get_network_selection_preference(): [boolean, NasNetworkSelectionPreference | null, number, number];
        get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction | null];
        get_nr5g_nsa_band_preference(): [boolean, number, number, number, number, number, number, number, number];
        get_nr5g_sa_band_preference(): [boolean, number, number, number, number, number, number, number, number];
        get_roaming_preference(): [boolean, NasRoamingPreference | null];
        get_service_domain_preference(): [boolean, NasServiceDomainPreference | null];
        get_td_scdma_band_preference(): [boolean, NasTdScdmaBandPreference | null];
        get_usage_preference(): [boolean, NasUsagePreference | null];
        get_voice_domain_preference(): [boolean, NasVoiceDomainPreference | null];
        ref(): MessageNasSetSystemSelectionPreferenceInput;
        set_acquisition_order_preference(value_acquisition_order_preference: NasRadioInterface[]): boolean;
        set_band_preference(value_band_preference: NasBandPreference): boolean;
        set_cdma_prl_preference(value_cdma_prl_preference: NasCdmaPrlPreference): boolean;
        set_change_duration(value_change_duration: NasChangeDuration): boolean;
        set_emergency_mode(value_emergency_mode: boolean): boolean;
        set_extended_lte_band_preference(value_extended_lte_band_preference_mask_low: bigint | number, value_extended_lte_band_preference_mask_mid_low: bigint | number, value_extended_lte_band_preference_mask_mid_high: bigint | number, value_extended_lte_band_preference_mask_high: bigint | number): boolean;
        set_gsm_wcdma_acquisition_order_preference(value_gsm_wcdma_acquisition_order_preference: NasGsmWcdmaAcquisitionOrderPreference): boolean;
        set_lte_band_preference(value_lte_band_preference: NasLteBandPreference): boolean;
        set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean;
        set_mode_preference(value_mode_preference: NasRatModePreference): boolean;
        set_network_selection_preference(value_network_selection_preference_mode: NasNetworkSelectionPreference, value_network_selection_preference_mcc: number, value_network_selection_preference_mnc: number): boolean;
        set_network_selection_registration_restriction(value_network_selection_registration_restriction: NasNetworkSelectionRegistrationRestriction): boolean;
        set_nr5g_nsa_band_preference(value_nr5g_nsa_band_preference_mask_0: bigint | number, value_nr5g_nsa_band_preference_mask_1: bigint | number, value_nr5g_nsa_band_preference_mask_2: bigint | number, value_nr5g_nsa_band_preference_mask_3: bigint | number, value_nr5g_nsa_band_preference_mask_4: bigint | number, value_nr5g_nsa_band_preference_mask_5: bigint | number, value_nr5g_nsa_band_preference_mask_6: bigint | number, value_nr5g_nsa_band_preference_mask_7: bigint | number): boolean;
        set_nr5g_sa_band_preference(value_nr5g_sa_band_preference_mask_0: bigint | number, value_nr5g_sa_band_preference_mask_1: bigint | number, value_nr5g_sa_band_preference_mask_2: bigint | number, value_nr5g_sa_band_preference_mask_3: bigint | number, value_nr5g_sa_band_preference_mask_4: bigint | number, value_nr5g_sa_band_preference_mask_5: bigint | number, value_nr5g_sa_band_preference_mask_6: bigint | number, value_nr5g_sa_band_preference_mask_7: bigint | number): boolean;
        set_roaming_preference(value_roaming_preference: NasRoamingPreference): boolean;
        set_service_domain_preference(value_service_domain_preference: NasServiceDomainPreference): boolean;
        set_td_scdma_band_preference(value_td_scdma_band_preference: NasTdScdmaBandPreference): boolean;
        set_usage_preference(value_usage_preference: NasUsagePreference): boolean;
        set_voice_domain_preference(value_voice_domain_preference: NasVoiceDomainPreference): boolean;
        unref(): void;
    }
    abstract class MessageNasSetSystemSelectionPreferenceOutput {
        static $gtype: GObject.GType<MessageNasSetSystemSelectionPreferenceOutput>;
        get_result(): boolean;
        ref(): MessageNasSetSystemSelectionPreferenceOutput;
        unref(): void;
    }
    class MessageNasSetTechnologyPreferenceInput {
        static $gtype: GObject.GType<MessageNasSetTechnologyPreferenceInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageNasSetTechnologyPreferenceInput;
        get_current(): [boolean, NasRadioTechnologyPreference | null, NasPreferenceDuration | null];
        ref(): MessageNasSetTechnologyPreferenceInput;
        set_current(value_current_technology_preference: NasRadioTechnologyPreference, value_current_technology_preference_duration: NasPreferenceDuration): boolean;
        unref(): void;
    }
    abstract class MessageNasSetTechnologyPreferenceOutput {
        static $gtype: GObject.GType<MessageNasSetTechnologyPreferenceOutput>;
        get_result(): boolean;
        ref(): MessageNasSetTechnologyPreferenceOutput;
        unref(): void;
    }
    abstract class MessageNasSwiGetStatusOutput {
        static $gtype: GObject.GType<MessageNasSwiGetStatusOutput>;
        get_common_info_v2(): [boolean, number, NasSwiModemMode | null, NasSwiSystemMode | null, NasSwiImsRegState | null, NasSwiPsState | null];
        get_lte_info(): [boolean, NasActiveBand | null, NasDLBandwidth | null, number, number, NasSwiEmmState | null, number, NasSwiEmmConnectionState | null];
        get_result(): boolean;
        ref(): MessageNasSwiGetStatusOutput;
        unref(): void;
    }
    abstract class MessageOmaCancelSessionOutput {
        static $gtype: GObject.GType<MessageOmaCancelSessionOutput>;
        get_result(): boolean;
        ref(): MessageOmaCancelSessionOutput;
        unref(): void;
    }
    abstract class MessageOmaGetFeatureSettingOutput {
        static $gtype: GObject.GType<MessageOmaGetFeatureSettingOutput>;
        get_device_provisioning_service_update_config(): [boolean, boolean];
        get_hfa_feature_config(): [boolean, boolean];
        get_hfa_feature_done_state(): [boolean, OmaHfaFeatureDoneState | null];
        get_prl_update_service_config(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageOmaGetFeatureSettingOutput;
        unref(): void;
    }
    abstract class MessageOmaGetSessionInfoOutput {
        static $gtype: GObject.GType<MessageOmaGetSessionInfoOutput>;
        get_network_initiated_alert(): [boolean, OmaSessionType | null, number];
        get_result(): boolean;
        get_retry_info(): [boolean, number, number, number];
        get_session_failed_reason(): [boolean, OmaSessionFailedReason | null];
        get_session_info(): [boolean, OmaSessionState | null, OmaSessionType | null];
        ref(): MessageOmaGetSessionInfoOutput;
        unref(): void;
    }
    abstract class MessageOmaResetOutput {
        static $gtype: GObject.GType<MessageOmaResetOutput>;
        get_result(): boolean;
        ref(): MessageOmaResetOutput;
        unref(): void;
    }
    class MessageOmaSendSelectionInput {
        static $gtype: GObject.GType<MessageOmaSendSelectionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageOmaSendSelectionInput;
        get_network_initiated_alert_selection(): [boolean, boolean, number];
        ref(): MessageOmaSendSelectionInput;
        set_network_initiated_alert_selection(value_network_initiated_alert_selection_control_point_selection_accept: boolean, value_network_initiated_alert_selection_session_id: number): boolean;
        unref(): void;
    }
    abstract class MessageOmaSendSelectionOutput {
        static $gtype: GObject.GType<MessageOmaSendSelectionOutput>;
        get_result(): boolean;
        ref(): MessageOmaSendSelectionOutput;
        unref(): void;
    }
    class MessageOmaSetEventReportInput {
        static $gtype: GObject.GType<MessageOmaSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageOmaSetEventReportInput;
        get_network_initiated_alert_reporting(): [boolean, boolean];
        get_session_state_reporting(): [boolean, boolean];
        ref(): MessageOmaSetEventReportInput;
        set_network_initiated_alert_reporting(value_network_initiated_alert_reporting: boolean): boolean;
        set_session_state_reporting(value_session_state_reporting: boolean): boolean;
        unref(): void;
    }
    abstract class MessageOmaSetEventReportOutput {
        static $gtype: GObject.GType<MessageOmaSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessageOmaSetEventReportOutput;
        unref(): void;
    }
    class MessageOmaSetFeatureSettingInput {
        static $gtype: GObject.GType<MessageOmaSetFeatureSettingInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageOmaSetFeatureSettingInput;
        get_device_provisioning_service_update_config(): [boolean, boolean];
        get_hfa_feature_config(): [boolean, boolean];
        get_prl_update_service_config(): [boolean, boolean];
        ref(): MessageOmaSetFeatureSettingInput;
        set_device_provisioning_service_update_config(value_device_provisioning_service_update_config: boolean): boolean;
        set_hfa_feature_config(value_hfa_feature_config: boolean): boolean;
        set_prl_update_service_config(value_prl_update_service_config: boolean): boolean;
        unref(): void;
    }
    abstract class MessageOmaSetFeatureSettingOutput {
        static $gtype: GObject.GType<MessageOmaSetFeatureSettingOutput>;
        get_result(): boolean;
        ref(): MessageOmaSetFeatureSettingOutput;
        unref(): void;
    }
    class MessageOmaStartSessionInput {
        static $gtype: GObject.GType<MessageOmaStartSessionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageOmaStartSessionInput;
        get_session_type(): [boolean, OmaSessionType | null];
        ref(): MessageOmaStartSessionInput;
        set_session_type(value_session_type: OmaSessionType): boolean;
        unref(): void;
    }
    abstract class MessageOmaStartSessionOutput {
        static $gtype: GObject.GType<MessageOmaStartSessionOutput>;
        get_result(): boolean;
        ref(): MessageOmaStartSessionOutput;
        unref(): void;
    }
    abstract class MessagePbmGetAllCapabilitiesOutput {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutput>;
        get_additional_number_alpha_string_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[] | null];
        get_additional_number_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[] | null];
        get_capability_basic_information(): [boolean, MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementGir[] | null];
        get_email_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[] | null];
        get_group_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[] | null];
        get_grouping_information_alpha_string_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[] | null];
        get_hidden_records_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[] | null];
        get_result(): boolean;
        get_second_name_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[] | null];
        ref(): MessagePbmGetAllCapabilitiesOutput;
        unref(): void;
    }
    class MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement>;
        session_type: PbmSessionType;
        maximum_records: number;
        used_records: number;
        maximum_string_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement>;
        session_type: PbmSessionType;
        maximum_additional_numbers: number;
        maximum_additional_number_length: number;
        maximum_additional_number_tag_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementGir {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementGir>;
        session_type: PbmSessionType;
        phonebooks: MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement[];
    }
    class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement>;
        phonebook_type: PbmPhonebookType;
        used_records: number;
        maximum_records: number;
        maximum_number_length: number;
        maximum_name_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement>;
        session_type: PbmSessionType;
        maximum_emails: number;
        maximum_email_address_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement>;
        session_type: PbmSessionType;
        maximum_groups: number;
        maximum_group_tag_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement>;
        session_type: PbmSessionType;
        maximum_records: number;
        used_records: number;
        maximum_string_length: number;
    }
    class MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement>;
        session_type: PbmSessionType;
        supported: boolean;
    }
    class MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement {
        static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement>;
        session_type: PbmSessionType;
        maximum_second_name_length: number;
    }
    class MessagePbmGetCapabilitiesInput {
        static $gtype: GObject.GType<MessagePbmGetCapabilitiesInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePbmGetCapabilitiesInput;
        get_phonebook_information(): [boolean, PbmSessionType | null, PbmPhonebookType | null];
        ref(): MessagePbmGetCapabilitiesInput;
        set_phonebook_information(value_phonebook_information_session_type: PbmSessionType, value_phonebook_information_phonebook_type: PbmPhonebookType): boolean;
        unref(): void;
    }
    abstract class MessagePbmGetCapabilitiesOutput {
        static $gtype: GObject.GType<MessagePbmGetCapabilitiesOutput>;
        get_additional_number_alpha_string_capability(): [boolean, number, number, number];
        get_additional_number_capability(): [boolean, number, number, number];
        get_capability_basic_information(): [boolean, PbmSessionType | null, PbmPhonebookType | null, number, number, number, number];
        get_email_capability(): [boolean, number, number];
        get_group_capability(): [boolean, number, number];
        get_grouping_information_alpha_string_capability(): [boolean, number, number, number];
        get_hidden_records_capability(): [boolean, boolean];
        get_result(): boolean;
        get_second_name_capability(): [boolean, number];
        ref(): MessagePbmGetCapabilitiesOutput;
        unref(): void;
    }
    abstract class MessagePbmGetEmergencyListOutput {
        static $gtype: GObject.GType<MessagePbmGetEmergencyListOutput>;
        get_card_numbers(): [boolean, MessagePbmGetEmergencyListOutputCardNumbersElementGir[] | null];
        get_hardcoded_numbers(): [boolean, string[] | null];
        get_network_numbers(): [boolean, MessagePbmGetEmergencyListOutputNetworkNumbersElementGir[] | null];
        get_nv_numbers(): [boolean, string[] | null];
        get_result(): boolean;
        ref(): MessagePbmGetEmergencyListOutput;
        unref(): void;
    }
    class MessagePbmGetEmergencyListOutputCardNumbersElementEmergencyNumbersElement {
        static $gtype: GObject.GType<MessagePbmGetEmergencyListOutputCardNumbersElementEmergencyNumbersElement>;
        flags: PbmEmergencyNumberFlags;
        emergency_number: string;
    }
    class MessagePbmGetEmergencyListOutputCardNumbersElementGir {
        static $gtype: GObject.GType<MessagePbmGetEmergencyListOutputCardNumbersElementGir>;
        session_type: PbmSessionType;
        emergency_numbers: MessagePbmGetEmergencyListOutputCardNumbersElementEmergencyNumbersElement[];
    }
    class MessagePbmGetEmergencyListOutputNetworkNumbersElementEmergencyNumbersElement {
        static $gtype: GObject.GType<MessagePbmGetEmergencyListOutputNetworkNumbersElementEmergencyNumbersElement>;
        flags: PbmEmergencyNumberFlags;
        emergency_number: string;
    }
    class MessagePbmGetEmergencyListOutputNetworkNumbersElementGir {
        static $gtype: GObject.GType<MessagePbmGetEmergencyListOutputNetworkNumbersElementGir>;
        session_type: PbmSessionType;
        emergency_numbers: MessagePbmGetEmergencyListOutputNetworkNumbersElementEmergencyNumbersElement[];
    }
    class MessagePbmIndicationRegisterInput {
        static $gtype: GObject.GType<MessagePbmIndicationRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePbmIndicationRegisterInput;
        get_event_registration_mask(): [boolean, PbmEventRegistrationFlag | null];
        ref(): MessagePbmIndicationRegisterInput;
        set_event_registration_mask(value_event_registration_mask: PbmEventRegistrationFlag): boolean;
        unref(): void;
    }
    abstract class MessagePbmIndicationRegisterOutput {
        static $gtype: GObject.GType<MessagePbmIndicationRegisterOutput>;
        get_event_registration_mask(): [boolean, PbmEventRegistrationFlag | null];
        get_result(): boolean;
        ref(): MessagePbmIndicationRegisterOutput;
        unref(): void;
    }
    class MessagePdcActivateConfigInput {
        static $gtype: GObject.GType<MessagePdcActivateConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcActivateConfigInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcActivateConfigInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcActivateConfigOutput {
        static $gtype: GObject.GType<MessagePdcActivateConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcActivateConfigOutput;
        unref(): void;
    }
    class MessagePdcConfigChangeInput {
        static $gtype: GObject.GType<MessagePdcConfigChangeInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcConfigChangeInput;
        get_type_with_id_v2(): [boolean, PdcConfigurationType | null, Uint8Array | null];
        ref(): MessagePdcConfigChangeInput;
        set_type_with_id_v2(value_type_with_id_v2_config_type: PdcConfigurationType, value_type_with_id_v2_id: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessagePdcConfigChangeOutput {
        static $gtype: GObject.GType<MessagePdcConfigChangeOutput>;
        get_result(): boolean;
        get_type_with_id_v2(): [boolean, PdcConfigurationType | null, Uint8Array | null];
        ref(): MessagePdcConfigChangeOutput;
        unref(): void;
    }
    class MessagePdcDeactivateConfigInput {
        static $gtype: GObject.GType<MessagePdcDeactivateConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcDeactivateConfigInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcDeactivateConfigInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcDeactivateConfigOutput {
        static $gtype: GObject.GType<MessagePdcDeactivateConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcDeactivateConfigOutput;
        unref(): void;
    }
    class MessagePdcDeleteConfigInput {
        static $gtype: GObject.GType<MessagePdcDeleteConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcDeleteConfigInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_id(): [boolean, Uint8Array | null];
        get_token(): [boolean, number];
        ref(): MessagePdcDeleteConfigInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_id(value_id: Uint8Array | string): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcDeleteConfigOutput {
        static $gtype: GObject.GType<MessagePdcDeleteConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcDeleteConfigOutput;
        unref(): void;
    }
    class MessagePdcGetConfigInfoInput {
        static $gtype: GObject.GType<MessagePdcGetConfigInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcGetConfigInfoInput;
        get_token(): [boolean, number];
        get_type_with_id_v2(): [boolean, PdcConfigurationType | null, Uint8Array | null];
        ref(): MessagePdcGetConfigInfoInput;
        set_token(value_token: number): boolean;
        set_type_with_id_v2(value_type_with_id_v2_config_type: PdcConfigurationType, value_type_with_id_v2_id: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessagePdcGetConfigInfoOutput {
        static $gtype: GObject.GType<MessagePdcGetConfigInfoOutput>;
        get_result(): boolean;
        ref(): MessagePdcGetConfigInfoOutput;
        unref(): void;
    }
    class MessagePdcGetConfigLimitsInput {
        static $gtype: GObject.GType<MessagePdcGetConfigLimitsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcGetConfigLimitsInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcGetConfigLimitsInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcGetConfigLimitsOutput {
        static $gtype: GObject.GType<MessagePdcGetConfigLimitsOutput>;
        get_current_size(): [boolean, number];
        get_maximum_size(): [boolean, number];
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcGetConfigLimitsOutput;
        unref(): void;
    }
    class MessagePdcGetDefaultConfigInfoInput {
        static $gtype: GObject.GType<MessagePdcGetDefaultConfigInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcGetDefaultConfigInfoInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcGetDefaultConfigInfoInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcGetDefaultConfigInfoOutput {
        static $gtype: GObject.GType<MessagePdcGetDefaultConfigInfoOutput>;
        get_description(): [boolean, string];
        get_result(): boolean;
        get_token(): [boolean, number];
        get_total_size(): [boolean, number];
        get_version(): [boolean, number];
        ref(): MessagePdcGetDefaultConfigInfoOutput;
        unref(): void;
    }
    class MessagePdcGetSelectedConfigInput {
        static $gtype: GObject.GType<MessagePdcGetSelectedConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcGetSelectedConfigInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcGetSelectedConfigInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcGetSelectedConfigOutput {
        static $gtype: GObject.GType<MessagePdcGetSelectedConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcGetSelectedConfigOutput;
        unref(): void;
    }
    class MessagePdcListConfigsInput {
        static $gtype: GObject.GType<MessagePdcListConfigsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcListConfigsInput;
        get_config_type(): [boolean, PdcConfigurationType | null];
        get_token(): [boolean, number];
        ref(): MessagePdcListConfigsInput;
        set_config_type(value_config_type: PdcConfigurationType): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcListConfigsOutput {
        static $gtype: GObject.GType<MessagePdcListConfigsOutput>;
        get_result(): boolean;
        ref(): MessagePdcListConfigsOutput;
        unref(): void;
    }
    class MessagePdcLoadConfigInput {
        static $gtype: GObject.GType<MessagePdcLoadConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcLoadConfigInput;
        get_config_chunk(): [boolean, PdcConfigurationType | null, Uint8Array | null, number, Uint8Array | null];
        get_token(): [boolean, number];
        ref(): MessagePdcLoadConfigInput;
        set_config_chunk(value_config_chunk_type: PdcConfigurationType, value_config_chunk_id: Uint8Array | string, value_config_chunk_total_size: number, value_config_chunk_chunk: Uint8Array | string): boolean;
        set_token(value_token: number): boolean;
        unref(): void;
    }
    abstract class MessagePdcLoadConfigOutput {
        static $gtype: GObject.GType<MessagePdcLoadConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcLoadConfigOutput;
        unref(): void;
    }
    class MessagePdcRegisterInput {
        static $gtype: GObject.GType<MessagePdcRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcRegisterInput;
        get_enable_refresh(): [boolean, boolean];
        get_enable_reporting(): [boolean, boolean];
        ref(): MessagePdcRegisterInput;
        set_enable_refresh(value_enable_refresh: boolean): boolean;
        set_enable_reporting(value_enable_reporting: boolean): boolean;
        unref(): void;
    }
    abstract class MessagePdcRegisterOutput {
        static $gtype: GObject.GType<MessagePdcRegisterOutput>;
        get_result(): boolean;
        ref(): MessagePdcRegisterOutput;
        unref(): void;
    }
    abstract class MessagePdcResetOutput {
        static $gtype: GObject.GType<MessagePdcResetOutput>;
        get_result(): boolean;
        ref(): MessagePdcResetOutput;
        unref(): void;
    }
    class MessagePdcSetSelectedConfigInput {
        static $gtype: GObject.GType<MessagePdcSetSelectedConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdcSetSelectedConfigInput;
        get_token(): [boolean, number];
        get_type_with_id_v2(): [boolean, PdcConfigurationType | null, Uint8Array | null];
        ref(): MessagePdcSetSelectedConfigInput;
        set_token(value_token: number): boolean;
        set_type_with_id_v2(value_type_with_id_v2_config_type: PdcConfigurationType, value_type_with_id_v2_id: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessagePdcSetSelectedConfigOutput {
        static $gtype: GObject.GType<MessagePdcSetSelectedConfigOutput>;
        get_result(): boolean;
        get_token(): [boolean, number];
        ref(): MessagePdcSetSelectedConfigOutput;
        unref(): void;
    }
    class MessagePdsGetAgpsConfigInput {
        static $gtype: GObject.GType<MessagePdsGetAgpsConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsGetAgpsConfigInput;
        get_network_mode(): [boolean, PdsNetworkMode | null];
        ref(): MessagePdsGetAgpsConfigInput;
        set_network_mode(value_network_mode: PdsNetworkMode): boolean;
        unref(): void;
    }
    abstract class MessagePdsGetAgpsConfigOutput {
        static $gtype: GObject.GType<MessagePdsGetAgpsConfigOutput>;
        get_location_server_address(): [boolean, number, number];
        get_location_server_url(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessagePdsGetAgpsConfigOutput;
        unref(): void;
    }
    abstract class MessagePdsGetAutoTrackingStateOutput {
        static $gtype: GObject.GType<MessagePdsGetAutoTrackingStateOutput>;
        get_result(): boolean;
        get_state(): [boolean, boolean];
        ref(): MessagePdsGetAutoTrackingStateOutput;
        unref(): void;
    }
    abstract class MessagePdsGetDefaultTrackingSessionOutput {
        static $gtype: GObject.GType<MessagePdsGetDefaultTrackingSessionOutput>;
        get_info(): [boolean, PdsOperatingMode | null, number, number, number];
        get_result(): boolean;
        ref(): MessagePdsGetDefaultTrackingSessionOutput;
        unref(): void;
    }
    abstract class MessagePdsGetGpsServiceStateOutput {
        static $gtype: GObject.GType<MessagePdsGetGpsServiceStateOutput>;
        get_result(): boolean;
        get_state(): [boolean, boolean, PdsTrackingSessionState | null];
        ref(): MessagePdsGetGpsServiceStateOutput;
        unref(): void;
    }
    abstract class MessagePdsResetOutput {
        static $gtype: GObject.GType<MessagePdsResetOutput>;
        get_result(): boolean;
        ref(): MessagePdsResetOutput;
        unref(): void;
    }
    class MessagePdsSetAgpsConfigInput {
        static $gtype: GObject.GType<MessagePdsSetAgpsConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsSetAgpsConfigInput;
        get_location_server_address(): [boolean, number, number];
        get_location_server_url(): [boolean, Uint8Array | null];
        get_network_mode(): [boolean, PdsNetworkMode | null];
        ref(): MessagePdsSetAgpsConfigInput;
        set_location_server_address(value_location_server_address_ip: number, value_location_server_address_port: number): boolean;
        set_location_server_url(value_location_server_url: Uint8Array | string): boolean;
        set_network_mode(value_network_mode: PdsNetworkMode): boolean;
        unref(): void;
    }
    abstract class MessagePdsSetAgpsConfigOutput {
        static $gtype: GObject.GType<MessagePdsSetAgpsConfigOutput>;
        get_result(): boolean;
        ref(): MessagePdsSetAgpsConfigOutput;
        unref(): void;
    }
    class MessagePdsSetAutoTrackingStateInput {
        static $gtype: GObject.GType<MessagePdsSetAutoTrackingStateInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsSetAutoTrackingStateInput;
        get_state(): [boolean, boolean];
        ref(): MessagePdsSetAutoTrackingStateInput;
        set_state(value_state_auto_tracking_state: boolean): boolean;
        unref(): void;
    }
    abstract class MessagePdsSetAutoTrackingStateOutput {
        static $gtype: GObject.GType<MessagePdsSetAutoTrackingStateOutput>;
        get_result(): boolean;
        ref(): MessagePdsSetAutoTrackingStateOutput;
        unref(): void;
    }
    class MessagePdsSetDefaultTrackingSessionInput {
        static $gtype: GObject.GType<MessagePdsSetDefaultTrackingSessionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsSetDefaultTrackingSessionInput;
        get_info(): [boolean, PdsOperatingMode | null, number, number, number];
        ref(): MessagePdsSetDefaultTrackingSessionInput;
        set_info(value_info_session_operation: PdsOperatingMode, value_info_position_data_timeout: number, value_info_interval: number, value_info_accuracy_threshold: number): boolean;
        unref(): void;
    }
    abstract class MessagePdsSetDefaultTrackingSessionOutput {
        static $gtype: GObject.GType<MessagePdsSetDefaultTrackingSessionOutput>;
        get_result(): boolean;
        ref(): MessagePdsSetDefaultTrackingSessionOutput;
        unref(): void;
    }
    class MessagePdsSetEventReportInput {
        static $gtype: GObject.GType<MessagePdsSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsSetEventReportInput;
        get_accelerometer_data_streaming_ready_reporting(): [boolean, boolean];
        get_extended_external_xtra_data_request_reporting(): [boolean, boolean];
        get_extended_nmea_position_reporting(): [boolean, boolean];
        get_external_time_injection_request_reporting(): [boolean, boolean];
        get_external_wifi_position_request_reporting(): [boolean, boolean];
        get_external_xtra_data_request_reporting(): [boolean, boolean];
        get_gyro_data_streaming_ready_reporting(): [boolean, boolean];
        get_heading_uncertainty_reporting(): [boolean, boolean];
        get_nmea_debug_strings_reporting(): [boolean, boolean];
        get_nmea_position_reporting(): [boolean, boolean];
        get_parsed_position_reporting(): [boolean, boolean];
        get_pds_comm_event_reporting(): [boolean, boolean];
        get_position_reliability_indicator_reporting(): [boolean, boolean];
        get_satellite_information_reporting(): [boolean, boolean];
        get_sensor_data_usage_indicator_reporting(): [boolean, boolean];
        get_supl_network_initiated_prompt_reporting(): [boolean, boolean];
        get_time_source_information_reporting(): [boolean, boolean];
        get_time_sync_request_reporting(): [boolean, boolean];
        get_umts_cp_network_initiated_prompt_reporting(): [boolean, boolean];
        get_vx_network_initiated_request_reporting(): [boolean, boolean];
        ref(): MessagePdsSetEventReportInput;
        set_accelerometer_data_streaming_ready_reporting(value_accelerometer_data_streaming_ready_reporting: boolean): boolean;
        set_extended_external_xtra_data_request_reporting(value_extended_external_xtra_data_request_reporting: boolean): boolean;
        set_extended_nmea_position_reporting(value_extended_nmea_position_reporting: boolean): boolean;
        set_external_time_injection_request_reporting(value_external_time_injection_request_reporting: boolean): boolean;
        set_external_wifi_position_request_reporting(value_external_wifi_position_request_reporting: boolean): boolean;
        set_external_xtra_data_request_reporting(value_external_xtra_data_request_reporting: boolean): boolean;
        set_gyro_data_streaming_ready_reporting(value_gyro_data_streaming_ready_reporting: boolean): boolean;
        set_heading_uncertainty_reporting(value_heading_uncertainty_reporting: boolean): boolean;
        set_nmea_debug_strings_reporting(value_nmea_debug_strings_reporting: boolean): boolean;
        set_nmea_position_reporting(value_nmea_position_reporting: boolean): boolean;
        set_parsed_position_reporting(value_parsed_position_reporting: boolean): boolean;
        set_pds_comm_event_reporting(value_pds_comm_event_reporting: boolean): boolean;
        set_position_reliability_indicator_reporting(value_position_reliability_indicator_reporting: boolean): boolean;
        set_satellite_information_reporting(value_satellite_information_reporting: boolean): boolean;
        set_sensor_data_usage_indicator_reporting(value_sensor_data_usage_indicator_reporting: boolean): boolean;
        set_supl_network_initiated_prompt_reporting(value_supl_network_initiated_prompt_reporting: boolean): boolean;
        set_time_source_information_reporting(value_time_source_information_reporting: boolean): boolean;
        set_time_sync_request_reporting(value_time_sync_request_reporting: boolean): boolean;
        set_umts_cp_network_initiated_prompt_reporting(value_umts_cp_network_initiated_prompt_reporting: boolean): boolean;
        set_vx_network_initiated_request_reporting(value_vx_network_initiated_request_reporting: boolean): boolean;
        unref(): void;
    }
    abstract class MessagePdsSetEventReportOutput {
        static $gtype: GObject.GType<MessagePdsSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessagePdsSetEventReportOutput;
        unref(): void;
    }
    class MessagePdsSetGpsServiceStateInput {
        static $gtype: GObject.GType<MessagePdsSetGpsServiceStateInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessagePdsSetGpsServiceStateInput;
        get_state(): [boolean, boolean];
        ref(): MessagePdsSetGpsServiceStateInput;
        set_state(value_state_gps_service_state: boolean): boolean;
        unref(): void;
    }
    abstract class MessagePdsSetGpsServiceStateOutput {
        static $gtype: GObject.GType<MessagePdsSetGpsServiceStateOutput>;
        get_result(): boolean;
        ref(): MessagePdsSetGpsServiceStateOutput;
        unref(): void;
    }
    class MessageQosBindMuxDataPortInput {
        static $gtype: GObject.GType<MessageQosBindMuxDataPortInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageQosBindMuxDataPortInput;
        get_direction(): [boolean, number];
        get_endpoint(): [boolean, DataEndpointType | null, number];
        get_mux_id(): [boolean, number];
        ref(): MessageQosBindMuxDataPortInput;
        set_direction(value_direction: number): boolean;
        set_endpoint(value_endpoint_endpoint_type: DataEndpointType, value_endpoint_interface_number: number): boolean;
        set_mux_id(value_mux_id: number): boolean;
        unref(): void;
    }
    abstract class MessageQosBindMuxDataPortOutput {
        static $gtype: GObject.GType<MessageQosBindMuxDataPortOutput>;
        get_result(): boolean;
        ref(): MessageQosBindMuxDataPortOutput;
        unref(): void;
    }
    class MessageQosBindSubscriptionInput {
        static $gtype: GObject.GType<MessageQosBindSubscriptionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageQosBindSubscriptionInput;
        get_subscription_id(): [boolean, SubscriptionType | null];
        ref(): MessageQosBindSubscriptionInput;
        set_subscription_id(value_subscription_id: SubscriptionType): boolean;
        unref(): void;
    }
    abstract class MessageQosBindSubscriptionOutput {
        static $gtype: GObject.GType<MessageQosBindSubscriptionOutput>;
        get_result(): boolean;
        ref(): MessageQosBindSubscriptionOutput;
        unref(): void;
    }
    abstract class MessageQosGetBindSubscriptionOutput {
        static $gtype: GObject.GType<MessageQosGetBindSubscriptionOutput>;
        get_result(): boolean;
        get_subscription_id(): [boolean, SubscriptionType | null];
        ref(): MessageQosGetBindSubscriptionOutput;
        unref(): void;
    }
    class MessageQosGetFlowStatusInput {
        static $gtype: GObject.GType<MessageQosGetFlowStatusInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageQosGetFlowStatusInput;
        get_qos_id(): [boolean, number];
        ref(): MessageQosGetFlowStatusInput;
        set_qos_id(value_qos_id: number): boolean;
        unref(): void;
    }
    abstract class MessageQosGetFlowStatusOutput {
        static $gtype: GObject.GType<MessageQosGetFlowStatusOutput>;
        get_result(): boolean;
        get_value(): [boolean, QosStatus | null];
        ref(): MessageQosGetFlowStatusOutput;
        unref(): void;
    }
    abstract class MessageQosGetNetworkStatusOutput {
        static $gtype: GObject.GType<MessageQosGetNetworkStatusOutput>;
        get_qos_supported(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageQosGetNetworkStatusOutput;
        unref(): void;
    }
    abstract class MessageQosResetOutput {
        static $gtype: GObject.GType<MessageQosResetOutput>;
        get_result(): boolean;
        ref(): MessageQosResetOutput;
        unref(): void;
    }
    class MessageQosSwiReadDataStatsInput {
        static $gtype: GObject.GType<MessageQosSwiReadDataStatsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageQosSwiReadDataStatsInput;
        get_apn_id(): [boolean, number];
        ref(): MessageQosSwiReadDataStatsInput;
        set_apn_id(value_apn_id: number): boolean;
        unref(): void;
    }
    abstract class MessageQosSwiReadDataStatsOutput {
        static $gtype: GObject.GType<MessageQosSwiReadDataStatsOutput>;
        get_apn(): [boolean, number, number, number, number, number, number, number];
        get_flow(): [boolean, MessageQosSwiReadDataStatsOutputFlowElement[] | null];
        get_result(): boolean;
        ref(): MessageQosSwiReadDataStatsOutput;
        unref(): void;
    }
    class MessageQosSwiReadDataStatsOutputFlowElement {
        static $gtype: GObject.GType<MessageQosSwiReadDataStatsOutputFlowElement>;
        bearer_id: number;
        tx_packets: number;
        tx_packets_dropped: number;
        tx_bytes: number;
        tx_bytes_dropped: number;
    }
    abstract class MessageSarRfGetStateOutput {
        static $gtype: GObject.GType<MessageSarRfGetStateOutput>;
        get_result(): boolean;
        get_state(): [boolean, SarRfState | null];
        ref(): MessageSarRfGetStateOutput;
        unref(): void;
    }
    class MessageSarRfSetStateInput {
        static $gtype: GObject.GType<MessageSarRfSetStateInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageSarRfSetStateInput;
        get_state(): [boolean, SarRfState | null];
        ref(): MessageSarRfSetStateInput;
        set_state(value_state: SarRfState): boolean;
        unref(): void;
    }
    abstract class MessageSarRfSetStateOutput {
        static $gtype: GObject.GType<MessageSarRfSetStateOutput>;
        get_result(): boolean;
        ref(): MessageSarRfSetStateOutput;
        unref(): void;
    }
    class MessageSscControlInput {
        static $gtype: GObject.GType<MessageSscControlInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageSscControlInput;
        get_data(): [boolean, Uint8Array | null];
        get_report_type(): [boolean, SscReportType | null];
        ref(): MessageSscControlInput;
        set_data(value_data: Uint8Array | string): boolean;
        set_report_type(value_report_type: SscReportType): boolean;
        unref(): void;
    }
    abstract class MessageSscControlOutput {
        static $gtype: GObject.GType<MessageSscControlOutput>;
        get_client_id(): [boolean, number];
        get_response(): [boolean, number];
        get_result(): boolean;
        ref(): MessageSscControlOutput;
        unref(): void;
    }
    class MessageUimChangePinInput {
        static $gtype: GObject.GType<MessageUimChangePinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimChangePinInput;
        get_info(): [boolean, UimPinId | null, string, string];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimChangePinInput;
        set_info(value_info_pin_id: UimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimChangePinOutput {
        static $gtype: GObject.GType<MessageUimChangePinOutput>;
        get_card_result(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        get_retries_remaining(): [boolean, number, number];
        ref(): MessageUimChangePinOutput;
        unref(): void;
    }
    class MessageUimChangeProvisioningSessionInput {
        static $gtype: GObject.GType<MessageUimChangeProvisioningSessionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimChangeProvisioningSessionInput;
        get_application_information(): [boolean, number, Uint8Array | null];
        get_session_change(): [boolean, UimSessionType | null, boolean];
        ref(): MessageUimChangeProvisioningSessionInput;
        set_application_information(value_application_information_slot: number, value_application_information_application_identifier: Uint8Array | string): boolean;
        set_session_change(value_session_change_session_type: UimSessionType, value_session_change_activate: boolean): boolean;
        unref(): void;
    }
    abstract class MessageUimChangeProvisioningSessionOutput {
        static $gtype: GObject.GType<MessageUimChangeProvisioningSessionOutput>;
        get_result(): boolean;
        ref(): MessageUimChangeProvisioningSessionOutput;
        unref(): void;
    }
    class MessageUimDepersonalizationInput {
        static $gtype: GObject.GType<MessageUimDepersonalizationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimDepersonalizationInput;
        get_info(): [boolean, UimCardApplicationPersonalizationFeature | null, UimDepersonalizationOperation | null, string];
        get_slot(): [boolean, number];
        ref(): MessageUimDepersonalizationInput;
        set_info(value_info_feature: UimCardApplicationPersonalizationFeature, value_info_operation: UimDepersonalizationOperation, value_info_control_key: string): boolean;
        set_slot(value_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimDepersonalizationOutput {
        static $gtype: GObject.GType<MessageUimDepersonalizationOutput>;
        get_result(): boolean;
        get_retries_remaining(): [boolean, number, number];
        ref(): MessageUimDepersonalizationOutput;
        unref(): void;
    }
    abstract class MessageUimGetCardStatusOutput {
        static $gtype: GObject.GType<MessageUimGetCardStatusOutput>;
        get_card_status(): [boolean, number, number, number, number, MessageUimGetCardStatusOutputCardStatusCardsElementGir[] | null];
        get_result(): boolean;
        ref(): MessageUimGetCardStatusOutput;
        unref(): void;
    }
    class MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElementV2 {
        static $gtype: GObject.GType<MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElementV2>;
        type: UimCardApplicationType;
        state: UimCardApplicationState;
        personalization_state: UimCardApplicationPersonalizationState;
        personalization_feature: UimCardApplicationPersonalizationFeatureStatus;
        personalization_retries: number;
        personalization_unblock_retries: number;
        application_identifier_value: null[];
        upin_replaces_pin1: boolean;
        pin1_state: UimPinState;
        pin1_retries: number;
        puk1_retries: number;
        pin2_state: UimPinState;
        pin2_retries: number;
        puk2_retries: number;
    }
    class MessageUimGetCardStatusOutputCardStatusCardsElementGir {
        static $gtype: GObject.GType<MessageUimGetCardStatusOutputCardStatusCardsElementGir>;
        card_state: UimCardState;
        upin_state: UimPinState;
        upin_retries: number;
        upuk_retries: number;
        error_code: UimCardError;
        applications: MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElementV2[];
    }
    class MessageUimGetConfigurationInput {
        static $gtype: GObject.GType<MessageUimGetConfigurationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimGetConfigurationInput;
        get_configuration_mask(): [boolean, UimConfiguration | null];
        ref(): MessageUimGetConfigurationInput;
        set_configuration_mask(value_configuration_mask: UimConfiguration): boolean;
        unref(): void;
    }
    abstract class MessageUimGetConfigurationOutput {
        static $gtype: GObject.GType<MessageUimGetConfigurationOutput>;
        get_automatic_selection(): [boolean, boolean];
        get_compat_context(): null;
        get_halt_subscription(): [boolean, boolean];
        get_personalization_status(): [boolean, MessageUimGetConfigurationOutputPersonalizationStatusElement[] | null];
        get_personalization_status_other(): [boolean, MessageUimGetConfigurationOutputPersonalizationStatusOtherElementGir[] | null];
        get_result(): boolean;
        ref(): MessageUimGetConfigurationOutput;
        set_compat_context(compat_context: null): void;
        unref(): void;
    }
    class MessageUimGetConfigurationOutputPersonalizationStatusElement {
        static $gtype: GObject.GType<MessageUimGetConfigurationOutputPersonalizationStatusElement>;
        feature: UimCardApplicationPersonalizationFeature;
        verify_left: number;
        unblock_left: number;
    }
    class MessageUimGetConfigurationOutputPersonalizationStatusOtherElementGir {
        static $gtype: GObject.GType<MessageUimGetConfigurationOutputPersonalizationStatusOtherElementGir>;
        slot: MessageUimGetConfigurationOutputPersonalizationStatusOtherElementSlotElement[];
    }
    class MessageUimGetConfigurationOutputPersonalizationStatusOtherElementSlotElement {
        static $gtype: GObject.GType<MessageUimGetConfigurationOutputPersonalizationStatusOtherElementSlotElement>;
        feature: UimCardApplicationPersonalizationFeature;
        verify_left: number;
        unblock_left: number;
    }
    class MessageUimGetFileAttributesInput {
        static $gtype: GObject.GType<MessageUimGetFileAttributesInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimGetFileAttributesInput;
        get_file(): [boolean, number, Uint8Array | null];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimGetFileAttributesInput;
        set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimGetFileAttributesOutput {
        static $gtype: GObject.GType<MessageUimGetFileAttributesOutput>;
        get_card_result(): [boolean, number, number];
        get_file_attributes(): [boolean, number, number, UimFileType | null, number, number, UimSecurityAttributeLogic | null, UimSecurityAttribute | null, UimSecurityAttributeLogic | null, UimSecurityAttribute | null, UimSecurityAttributeLogic | null, UimSecurityAttribute | null, UimSecurityAttributeLogic | null, UimSecurityAttribute | null, UimSecurityAttributeLogic | null, UimSecurityAttribute | null, Uint8Array | null];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        ref(): MessageUimGetFileAttributesOutput;
        unref(): void;
    }
    abstract class MessageUimGetSlotStatusOutput {
        static $gtype: GObject.GType<MessageUimGetSlotStatusOutput>;
        get_compat_context(): null;
        get_physical_slot_information(): [boolean, PhysicalSlotInformationSlot[] | null];
        get_physical_slot_status(): [boolean, PhysicalSlotStatusSlot[] | null];
        get_result(): boolean;
        get_slot_eid(): [boolean, SlotEidElement[] | null];
        ref(): MessageUimGetSlotStatusOutput;
        set_compat_context(compat_context: null): void;
        unref(): void;
    }
    abstract class MessageUimGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageUimGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageUimGetSupportedMessagesOutput;
        unref(): void;
    }
    class MessageUimLogicalChannelInput {
        static $gtype: GObject.GType<MessageUimLogicalChannelInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimLogicalChannelInput;
        get_aid(): [boolean, Uint8Array | null];
        get_channel_id(): [boolean, number];
        get_file_control_information(): [boolean, UimFileControlInformation | null];
        get_slot(): [boolean, number];
        get_terminate_application(): [boolean, number];
        ref(): MessageUimLogicalChannelInput;
        set_aid(value_aid: Uint8Array | string): boolean;
        set_channel_id(value_channel_id: number): boolean;
        set_file_control_information(value_file_control_information: UimFileControlInformation): boolean;
        set_slot(value_slot: number): boolean;
        set_terminate_application(value_terminate_application: number): boolean;
        unref(): void;
    }
    abstract class MessageUimLogicalChannelOutput {
        static $gtype: GObject.GType<MessageUimLogicalChannelOutput>;
        get_card_result(): [boolean, number, number];
        get_channel_id(): [boolean, number];
        get_result(): boolean;
        get_select_response(): [boolean, Uint8Array | null];
        ref(): MessageUimLogicalChannelOutput;
        unref(): void;
    }
    class MessageUimOpenLogicalChannelInput {
        static $gtype: GObject.GType<MessageUimOpenLogicalChannelInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimOpenLogicalChannelInput;
        get_aid(): [boolean, Uint8Array | null];
        get_file_control_information(): [boolean, UimFileControlInformation | null];
        get_slot(): [boolean, number];
        ref(): MessageUimOpenLogicalChannelInput;
        set_aid(value_aid: Uint8Array | string): boolean;
        set_file_control_information(value_file_control_information: UimFileControlInformation): boolean;
        set_slot(value_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimOpenLogicalChannelOutput {
        static $gtype: GObject.GType<MessageUimOpenLogicalChannelOutput>;
        get_card_result(): [boolean, number, number];
        get_channel_id(): [boolean, number];
        get_result(): boolean;
        get_select_response(): [boolean, Uint8Array | null];
        ref(): MessageUimOpenLogicalChannelOutput;
        unref(): void;
    }
    class MessageUimPowerOffSimInput {
        static $gtype: GObject.GType<MessageUimPowerOffSimInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimPowerOffSimInput;
        get_slot(): [boolean, number];
        ref(): MessageUimPowerOffSimInput;
        set_slot(value_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimPowerOffSimOutput {
        static $gtype: GObject.GType<MessageUimPowerOffSimOutput>;
        get_result(): boolean;
        ref(): MessageUimPowerOffSimOutput;
        unref(): void;
    }
    class MessageUimPowerOnSimInput {
        static $gtype: GObject.GType<MessageUimPowerOnSimInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimPowerOnSimInput;
        get_slot(): [boolean, number];
        ref(): MessageUimPowerOnSimInput;
        set_slot(value_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimPowerOnSimOutput {
        static $gtype: GObject.GType<MessageUimPowerOnSimOutput>;
        get_result(): boolean;
        ref(): MessageUimPowerOnSimOutput;
        unref(): void;
    }
    class MessageUimReadRecordInput {
        static $gtype: GObject.GType<MessageUimReadRecordInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimReadRecordInput;
        get_file(): [boolean, number, Uint8Array | null];
        get_last_record(): [boolean, number];
        get_record(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimReadRecordInput;
        set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;
        set_last_record(value_last_record: number): boolean;
        set_record(value_record_record_number: number, value_record_record_length: number): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimReadRecordOutput {
        static $gtype: GObject.GType<MessageUimReadRecordOutput>;
        get_additional_read_result(): [boolean, Uint8Array | null];
        get_card_result(): [boolean, number, number];
        get_read_result(): [boolean, Uint8Array | null];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        ref(): MessageUimReadRecordOutput;
        unref(): void;
    }
    class MessageUimReadTransparentInput {
        static $gtype: GObject.GType<MessageUimReadTransparentInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimReadTransparentInput;
        get_encrypt_data(): [boolean, boolean];
        get_file(): [boolean, number, Uint8Array | null];
        get_read_information(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimReadTransparentInput;
        set_encrypt_data(value_encrypt_data: boolean): boolean;
        set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;
        set_read_information(value_read_information_offset: number, value_read_information_length: number): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimReadTransparentOutput {
        static $gtype: GObject.GType<MessageUimReadTransparentOutput>;
        get_card_result(): [boolean, number, number];
        get_encrypted_data(): [boolean, boolean];
        get_read_result(): [boolean, Uint8Array | null];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        ref(): MessageUimReadTransparentOutput;
        unref(): void;
    }
    class MessageUimRefreshCompleteInput {
        static $gtype: GObject.GType<MessageUimRefreshCompleteInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimRefreshCompleteInput;
        get_info(): [boolean, boolean];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimRefreshCompleteInput;
        set_info(value_info_refresh_success: boolean): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimRefreshCompleteOutput {
        static $gtype: GObject.GType<MessageUimRefreshCompleteOutput>;
        get_result(): boolean;
        ref(): MessageUimRefreshCompleteOutput;
        unref(): void;
    }
    class MessageUimRefreshRegisterAllInput {
        static $gtype: GObject.GType<MessageUimRefreshRegisterAllInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimRefreshRegisterAllInput;
        get_info(): [boolean, boolean];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimRefreshRegisterAllInput;
        set_info(value_info_register_flag: boolean): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimRefreshRegisterAllOutput {
        static $gtype: GObject.GType<MessageUimRefreshRegisterAllOutput>;
        get_result(): boolean;
        ref(): MessageUimRefreshRegisterAllOutput;
        unref(): void;
    }
    class MessageUimRefreshRegisterInput {
        static $gtype: GObject.GType<MessageUimRefreshRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimRefreshRegisterInput;
        get_info(): [boolean, boolean, boolean, MessageUimRefreshRegisterInputInfoFilesElement[] | null];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimRefreshRegisterInput;
        set_info(value_info_register_flag: boolean, value_info_vote_for_init: boolean, value_info_files_ptr: MessageUimRefreshRegisterInputInfoFilesElement[]): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    class MessageUimRefreshRegisterInputInfoFilesElement {
        static $gtype: GObject.GType<MessageUimRefreshRegisterInputInfoFilesElement>;
        file_id: number;
        path: null[];
        constructor(properties?: Partial<{
            file_id: number;
            path: null[];
        }>);
    }
    abstract class MessageUimRefreshRegisterOutput {
        static $gtype: GObject.GType<MessageUimRefreshRegisterOutput>;
        get_result(): boolean;
        ref(): MessageUimRefreshRegisterOutput;
        unref(): void;
    }
    class MessageUimRegisterEventsInput {
        static $gtype: GObject.GType<MessageUimRegisterEventsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimRegisterEventsInput;
        get_event_registration_mask(): [boolean, UimEventRegistrationFlag | null];
        ref(): MessageUimRegisterEventsInput;
        set_event_registration_mask(value_event_registration_mask: UimEventRegistrationFlag): boolean;
        unref(): void;
    }
    abstract class MessageUimRegisterEventsOutput {
        static $gtype: GObject.GType<MessageUimRegisterEventsOutput>;
        get_event_registration_mask(): [boolean, UimEventRegistrationFlag | null];
        get_result(): boolean;
        ref(): MessageUimRegisterEventsOutput;
        unref(): void;
    }
    class MessageUimRemoteUnlockInput {
        static $gtype: GObject.GType<MessageUimRemoteUnlockInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimRemoteUnlockInput;
        get_simlock_data(): [boolean, Uint8Array | null];
        get_simlock_extended_data(): [boolean, Uint8Array | null];
        ref(): MessageUimRemoteUnlockInput;
        set_simlock_data(value_simlock_data: Uint8Array | string): boolean;
        set_simlock_extended_data(value_simlock_extended_data: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimRemoteUnlockOutput {
        static $gtype: GObject.GType<MessageUimRemoteUnlockOutput>;
        get_result(): boolean;
        ref(): MessageUimRemoteUnlockOutput;
        unref(): void;
    }
    abstract class MessageUimResetOutput {
        static $gtype: GObject.GType<MessageUimResetOutput>;
        get_result(): boolean;
        ref(): MessageUimResetOutput;
        unref(): void;
    }
    class MessageUimSendApduInput {
        static $gtype: GObject.GType<MessageUimSendApduInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimSendApduInput;
        get_apdu(): [boolean, Uint8Array | null];
        get_channel_id(): [boolean, number];
        get_procedure_bytes(): [boolean, number];
        get_slot(): [boolean, number];
        ref(): MessageUimSendApduInput;
        set_apdu(value_apdu: Uint8Array | string): boolean;
        set_channel_id(value_channel_id: number): boolean;
        set_procedure_bytes(value_procedure_bytes: number): boolean;
        set_slot(value_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimSendApduOutput {
        static $gtype: GObject.GType<MessageUimSendApduOutput>;
        get_apdu_response(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageUimSendApduOutput;
        unref(): void;
    }
    class MessageUimSetPinProtectionInput {
        static $gtype: GObject.GType<MessageUimSetPinProtectionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimSetPinProtectionInput;
        get_info(): [boolean, UimPinId | null, boolean, string];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimSetPinProtectionInput;
        set_info(value_info_pin_id: UimPinId, value_info_pin_enabled: boolean, value_info_pin_value: string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimSetPinProtectionOutput {
        static $gtype: GObject.GType<MessageUimSetPinProtectionOutput>;
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        get_retries_remaining(): [boolean, number, number];
        ref(): MessageUimSetPinProtectionOutput;
        unref(): void;
    }
    class MessageUimSwitchSlotInput {
        static $gtype: GObject.GType<MessageUimSwitchSlotInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimSwitchSlotInput;
        get_logical_slot(): [boolean, number];
        get_physical_slot(): [boolean, number];
        ref(): MessageUimSwitchSlotInput;
        set_logical_slot(value_logical_slot: number): boolean;
        set_physical_slot(value_physical_slot: number): boolean;
        unref(): void;
    }
    abstract class MessageUimSwitchSlotOutput {
        static $gtype: GObject.GType<MessageUimSwitchSlotOutput>;
        get_result(): boolean;
        ref(): MessageUimSwitchSlotOutput;
        unref(): void;
    }
    class MessageUimUnblockPinInput {
        static $gtype: GObject.GType<MessageUimUnblockPinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimUnblockPinInput;
        get_info(): [boolean, UimPinId | null, string, string];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimUnblockPinInput;
        set_info(value_info_pin_id: UimPinId, value_info_puk: string, value_info_new_pin: string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimUnblockPinOutput {
        static $gtype: GObject.GType<MessageUimUnblockPinOutput>;
        get_card_result(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        get_retries_remaining(): [boolean, number, number];
        ref(): MessageUimUnblockPinOutput;
        unref(): void;
    }
    class MessageUimVerifyPinInput {
        static $gtype: GObject.GType<MessageUimVerifyPinInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimVerifyPinInput;
        get_info(): [boolean, UimPinId | null, string];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        ref(): MessageUimVerifyPinInput;
        set_info(value_info_pin_id: UimPinId, value_info_pin_value: string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimVerifyPinOutput {
        static $gtype: GObject.GType<MessageUimVerifyPinOutput>;
        get_card_result(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        get_retries_remaining(): [boolean, number, number];
        ref(): MessageUimVerifyPinOutput;
        unref(): void;
    }
    class MessageUimWriteRecordInput {
        static $gtype: GObject.GType<MessageUimWriteRecordInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageUimWriteRecordInput;
        get_file(): [boolean, number, Uint8Array | null];
        get_response_in_indication_token(): [boolean, number];
        get_session(): [boolean, UimSessionType | null, Uint8Array | null];
        get_write_record(): [boolean, number, Uint8Array | null];
        ref(): MessageUimWriteRecordInput;
        set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;
        set_response_in_indication_token(value_response_in_indication_token: number): boolean;
        set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array | string): boolean;
        set_write_record(value_write_record_record_number: number, value_write_record_record: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageUimWriteRecordOutput {
        static $gtype: GObject.GType<MessageUimWriteRecordOutput>;
        get_card_result(): [boolean, number, number];
        get_response_in_indication_token(): [boolean, number];
        get_result(): boolean;
        ref(): MessageUimWriteRecordOutput;
        unref(): void;
    }
    class MessageVoiceAnswerCallInput {
        static $gtype: GObject.GType<MessageVoiceAnswerCallInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceAnswerCallInput;
        get_call_id(): [boolean, number];
        ref(): MessageVoiceAnswerCallInput;
        set_call_id(value_call_id: number): boolean;
        unref(): void;
    }
    abstract class MessageVoiceAnswerCallOutput {
        static $gtype: GObject.GType<MessageVoiceAnswerCallOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceAnswerCallOutput;
        unref(): void;
    }
    class MessageVoiceAnswerUssdInput {
        static $gtype: GObject.GType<MessageVoiceAnswerUssdInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceAnswerUssdInput;
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        ref(): MessageVoiceAnswerUssdInput;
        set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageVoiceAnswerUssdOutput {
        static $gtype: GObject.GType<MessageVoiceAnswerUssdOutput>;
        get_result(): boolean;
        ref(): MessageVoiceAnswerUssdOutput;
        unref(): void;
    }
    class MessageVoiceBurstDtmfInput {
        static $gtype: GObject.GType<MessageVoiceBurstDtmfInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceBurstDtmfInput;
        get_data(): [boolean, number, string];
        ref(): MessageVoiceBurstDtmfInput;
        set_data(value_data_call_id: number, value_data_digit_buffer: string): boolean;
        unref(): void;
    }
    abstract class MessageVoiceBurstDtmfOutput {
        static $gtype: GObject.GType<MessageVoiceBurstDtmfOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceBurstDtmfOutput;
        unref(): void;
    }
    abstract class MessageVoiceCancelUssdOutput {
        static $gtype: GObject.GType<MessageVoiceCancelUssdOutput>;
        get_result(): boolean;
        ref(): MessageVoiceCancelUssdOutput;
        unref(): void;
    }
    class MessageVoiceDialCallInput {
        static $gtype: GObject.GType<MessageVoiceDialCallInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceDialCallInput;
        get_calling_number(): [boolean, string];
        ref(): MessageVoiceDialCallInput;
        set_calling_number(value_calling_number: string): boolean;
        unref(): void;
    }
    abstract class MessageVoiceDialCallOutput {
        static $gtype: GObject.GType<MessageVoiceDialCallOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceDialCallOutput;
        unref(): void;
    }
    class MessageVoiceEndCallInput {
        static $gtype: GObject.GType<MessageVoiceEndCallInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceEndCallInput;
        get_call_id(): [boolean, number];
        ref(): MessageVoiceEndCallInput;
        set_call_id(value_call_id: number): boolean;
        unref(): void;
    }
    abstract class MessageVoiceEndCallOutput {
        static $gtype: GObject.GType<MessageVoiceEndCallOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceEndCallOutput;
        unref(): void;
    }
    abstract class MessageVoiceGetAllCallInfoOutput {
        static $gtype: GObject.GType<MessageVoiceGetAllCallInfoOutput>;
        get_call_information(): [boolean, MessageVoiceGetAllCallInfoOutputCallInformationCall[] | null];
        get_remote_party_number(): [boolean, MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall[] | null];
        get_result(): boolean;
        ref(): MessageVoiceGetAllCallInfoOutput;
        unref(): void;
    }
    class MessageVoiceGetAllCallInfoOutputCallInformationCall {
        static $gtype: GObject.GType<MessageVoiceGetAllCallInfoOutputCallInformationCall>;
        id: number;
        state: VoiceCallState;
        type: VoiceCallType;
        direction: VoiceCallDirection;
        mode: VoiceCallMode;
        multipart_indicator: boolean;
        als: VoiceAls;
    }
    class MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall {
        static $gtype: GObject.GType<MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall>;
        id: number;
        presentation_indicator: VoicePresentation;
        type: string;
    }
    class MessageVoiceGetCallWaitingInput {
        static $gtype: GObject.GType<MessageVoiceGetCallWaitingInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceGetCallWaitingInput;
        get_service_class(): [boolean, number];
        ref(): MessageVoiceGetCallWaitingInput;
        set_service_class(value_service_class: number): boolean;
        unref(): void;
    }
    abstract class MessageVoiceGetCallWaitingOutput {
        static $gtype: GObject.GType<MessageVoiceGetCallWaitingOutput>;
        get_result(): boolean;
        get_service_class(): [boolean, number];
        ref(): MessageVoiceGetCallWaitingOutput;
        unref(): void;
    }
    class MessageVoiceGetConfigInput {
        static $gtype: GObject.GType<MessageVoiceGetConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceGetConfigInput;
        get_air_timer(): [boolean, boolean];
        get_amr_status(): [boolean, boolean];
        get_auto_answer(): [boolean, boolean];
        get_nam_index(): [boolean, boolean];
        get_preferred_voice_privacy(): [boolean, boolean];
        get_preferred_voice_service_option(): [boolean, boolean];
        get_roam_timer(): [boolean, boolean];
        get_tty_mode(): [boolean, boolean];
        get_voice_domain_preference(): [boolean, boolean];
        ref(): MessageVoiceGetConfigInput;
        set_air_timer(value_air_timer: boolean): boolean;
        set_amr_status(value_amr_status: boolean): boolean;
        set_auto_answer(value_auto_answer: boolean): boolean;
        set_nam_index(value_nam_index: boolean): boolean;
        set_preferred_voice_privacy(value_preferred_voice_privacy: boolean): boolean;
        set_preferred_voice_service_option(value_preferred_voice_service_option: boolean): boolean;
        set_roam_timer(value_roam_timer: boolean): boolean;
        set_tty_mode(value_tty_mode: boolean): boolean;
        set_voice_domain_preference(value_voice_domain_preference: boolean): boolean;
        unref(): void;
    }
    abstract class MessageVoiceGetConfigOutput {
        static $gtype: GObject.GType<MessageVoiceGetConfigOutput>;
        get_air_timer_count(): [boolean, number, number];
        get_auto_answer_status(): [boolean, boolean];
        get_current_amr_status(): [boolean, boolean, VoiceWcdmaAmrStatus | null];
        get_current_preferred_voice_so(): [boolean, number, boolean, VoiceServiceOption | null, VoiceServiceOption | null, VoiceServiceOption | null];
        get_current_tty_mode(): [boolean, VoiceTtyMode | null];
        get_current_voice_domain_preference(): [boolean, VoiceDomain | null];
        get_current_voice_privacy_preference(): [boolean, VoicePrivacy | null];
        get_result(): boolean;
        get_roam_timer_count(): [boolean, number, number];
        ref(): MessageVoiceGetConfigOutput;
        unref(): void;
    }
    abstract class MessageVoiceGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageVoiceGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageVoiceGetSupportedMessagesOutput;
        unref(): void;
    }
    class MessageVoiceIndicationRegisterInput {
        static $gtype: GObject.GType<MessageVoiceIndicationRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceIndicationRegisterInput;
        get_aoc_events(): [boolean, boolean];
        get_call_notification_events(): [boolean, boolean];
        get_conference_events(): [boolean, boolean];
        get_dtmf_events(): [boolean, boolean];
        get_extended_burst_type_international_information_events(): [boolean, boolean];
        get_handover_events(): [boolean, boolean];
        get_modification_events(): [boolean, boolean];
        get_mt_page_miss_information_events(): [boolean, boolean];
        get_speech_codec_events(): [boolean, boolean];
        get_supplementary_service_notification_events(): [boolean, boolean];
        get_ussd_notification_events(): [boolean, boolean];
        get_uus_events(): [boolean, boolean];
        get_voice_privacy_events(): [boolean, boolean];
        ref(): MessageVoiceIndicationRegisterInput;
        set_aoc_events(value_aoc_events: boolean): boolean;
        set_call_notification_events(value_call_notification_events: boolean): boolean;
        set_conference_events(value_conference_events: boolean): boolean;
        set_dtmf_events(value_dtmf_events: boolean): boolean;
        set_extended_burst_type_international_information_events(value_extended_burst_type_international_information_events: boolean): boolean;
        set_handover_events(value_handover_events: boolean): boolean;
        set_modification_events(value_modification_events: boolean): boolean;
        set_mt_page_miss_information_events(value_mt_page_miss_information_events: boolean): boolean;
        set_speech_codec_events(value_speech_codec_events: boolean): boolean;
        set_supplementary_service_notification_events(value_supplementary_service_notification_events: boolean): boolean;
        set_ussd_notification_events(value_ussd_notification_events: boolean): boolean;
        set_uus_events(value_uus_events: boolean): boolean;
        set_voice_privacy_events(value_voice_privacy_events: boolean): boolean;
        unref(): void;
    }
    abstract class MessageVoiceIndicationRegisterOutput {
        static $gtype: GObject.GType<MessageVoiceIndicationRegisterOutput>;
        get_result(): boolean;
        ref(): MessageVoiceIndicationRegisterOutput;
        unref(): void;
    }
    class MessageVoiceManageCallsInput {
        static $gtype: GObject.GType<MessageVoiceManageCallsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceManageCallsInput;
        get_call_id(): [boolean, number];
        get_service_type(): [boolean, VoiceSupplementaryServiceType | null];
        ref(): MessageVoiceManageCallsInput;
        set_call_id(value_call_id: number): boolean;
        set_service_type(value_service_type: VoiceSupplementaryServiceType): boolean;
        unref(): void;
    }
    abstract class MessageVoiceManageCallsOutput {
        static $gtype: GObject.GType<MessageVoiceManageCallsOutput>;
        get_result(): boolean;
        ref(): MessageVoiceManageCallsOutput;
        unref(): void;
    }
    class MessageVoiceOriginateUssdInput {
        static $gtype: GObject.GType<MessageVoiceOriginateUssdInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceOriginateUssdInput;
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        ref(): MessageVoiceOriginateUssdInput;
        set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array | string): boolean;
        unref(): void;
    }
    class MessageVoiceOriginateUssdNoWaitInput {
        static $gtype: GObject.GType<MessageVoiceOriginateUssdNoWaitInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceOriginateUssdNoWaitInput;
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        ref(): MessageVoiceOriginateUssdNoWaitInput;
        set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageVoiceOriginateUssdNoWaitOutput {
        static $gtype: GObject.GType<MessageVoiceOriginateUssdNoWaitOutput>;
        get_result(): boolean;
        ref(): MessageVoiceOriginateUssdNoWaitOutput;
        unref(): void;
    }
    abstract class MessageVoiceOriginateUssdOutput {
        static $gtype: GObject.GType<MessageVoiceOriginateUssdOutput>;
        get_alpha_identifier(): [boolean, VoiceAlphaDataCodingScheme | null, Uint8Array | null];
        get_call_control_result_type(): [boolean, VoiceCallControlResultType | null];
        get_call_control_supplementary_service_type(): [boolean, VoiceCallControlSupplementaryServiceType | null];
        get_call_id(): [boolean, number];
        get_failure_cause(): [boolean, VoiceCallEndReason | null];
        get_result(): boolean;
        get_uss_data(): [boolean, VoiceUssDataCodingScheme | null, Uint8Array | null];
        get_uss_data_utf16(): [boolean, number[] | null];
        ref(): MessageVoiceOriginateUssdOutput;
        unref(): void;
    }
    class MessageVoiceSetSupplementaryServiceInput {
        static $gtype: GObject.GType<MessageVoiceSetSupplementaryServiceInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceSetSupplementaryServiceInput;
        get_supplementary_service_information(): [boolean, VoiceSupplementaryServiceAction | null, VoiceSupplementaryServiceReason | null];
        ref(): MessageVoiceSetSupplementaryServiceInput;
        set_supplementary_service_information(value_supplementary_service_information_supplementary_service_action: VoiceSupplementaryServiceAction, value_supplementary_service_information_supplementary_service_reason: VoiceSupplementaryServiceReason): boolean;
        unref(): void;
    }
    abstract class MessageVoiceSetSupplementaryServiceOutput {
        static $gtype: GObject.GType<MessageVoiceSetSupplementaryServiceOutput>;
        get_result(): boolean;
        get_service_status(): [boolean, boolean, boolean];
        ref(): MessageVoiceSetSupplementaryServiceOutput;
        unref(): void;
    }
    class MessageVoiceStartContinuousDtmfInput {
        static $gtype: GObject.GType<MessageVoiceStartContinuousDtmfInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceStartContinuousDtmfInput;
        get_data(): [boolean, number, number];
        ref(): MessageVoiceStartContinuousDtmfInput;
        set_data(value_data_call_id: number, value_data_digit: number): boolean;
        unref(): void;
    }
    abstract class MessageVoiceStartContinuousDtmfOutput {
        static $gtype: GObject.GType<MessageVoiceStartContinuousDtmfOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceStartContinuousDtmfOutput;
        unref(): void;
    }
    class MessageVoiceStopContinuousDtmfInput {
        static $gtype: GObject.GType<MessageVoiceStopContinuousDtmfInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageVoiceStopContinuousDtmfInput;
        get_data(): [boolean, number];
        ref(): MessageVoiceStopContinuousDtmfInput;
        set_data(value_data_call_id: number): boolean;
        unref(): void;
    }
    abstract class MessageVoiceStopContinuousDtmfOutput {
        static $gtype: GObject.GType<MessageVoiceStopContinuousDtmfOutput>;
        get_call_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageVoiceStopContinuousDtmfOutput;
        unref(): void;
    }
    class MessageWdaGetDataFormatInput {
        static $gtype: GObject.GType<MessageWdaGetDataFormatInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdaGetDataFormatInput;
        get_endpoint_info(): [boolean, DataEndpointType | null, number];
        ref(): MessageWdaGetDataFormatInput;
        set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean;
        unref(): void;
    }
    abstract class MessageWdaGetDataFormatOutput {
        static $gtype: GObject.GType<MessageWdaGetDataFormatOutput>;
        get_downlink_data_aggregation_max_datagrams(): [boolean, number];
        get_downlink_data_aggregation_max_size(): [boolean, number];
        get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        get_download_minimum_padding(): [boolean, number];
        get_flow_control(): [boolean, number];
        get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol | null];
        get_ndp_signature(): [boolean, number];
        get_qos_format(): [boolean, boolean];
        get_result(): boolean;
        get_uplink_data_aggregation_max_datagrams(): [boolean, number];
        get_uplink_data_aggregation_max_size(): [boolean, number];
        get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        ref(): MessageWdaGetDataFormatOutput;
        unref(): void;
    }
    abstract class MessageWdaGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageWdaGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageWdaGetSupportedMessagesOutput;
        unref(): void;
    }
    class MessageWdaLoopbackConfigurationInput {
        static $gtype: GObject.GType<MessageWdaLoopbackConfigurationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdaLoopbackConfigurationInput;
        get_loopback_state(): [boolean, WdaLoopBackState | null];
        get_replication_factor(): [boolean, number];
        ref(): MessageWdaLoopbackConfigurationInput;
        set_loopback_state(value_loopback_state: WdaLoopBackState): boolean;
        set_replication_factor(value_replication_factor: number): boolean;
        unref(): void;
    }
    abstract class MessageWdaLoopbackConfigurationOutput {
        static $gtype: GObject.GType<MessageWdaLoopbackConfigurationOutput>;
        get_result(): boolean;
        ref(): MessageWdaLoopbackConfigurationOutput;
        unref(): void;
    }
    class MessageWdaSetDataFormatInput {
        static $gtype: GObject.GType<MessageWdaSetDataFormatInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdaSetDataFormatInput;
        get_downlink_data_aggregation_max_datagrams(): [boolean, number];
        get_downlink_data_aggregation_max_size(): [boolean, number];
        get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        get_endpoint_info(): [boolean, DataEndpointType | null, number];
        get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol | null];
        get_ndp_signature(): [boolean, number];
        get_qos_format(): [boolean, boolean];
        get_uplink_data_aggregation_max_datagrams(): [boolean, number];
        get_uplink_data_aggregation_max_size(): [boolean, number];
        get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        ref(): MessageWdaSetDataFormatInput;
        set_downlink_data_aggregation_max_datagrams(value_downlink_data_aggregation_max_datagrams: number): boolean;
        set_downlink_data_aggregation_max_size(value_downlink_data_aggregation_max_size: number): boolean;
        set_downlink_data_aggregation_protocol(value_downlink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean;
        set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean;
        set_link_layer_protocol(value_link_layer_protocol: WdaLinkLayerProtocol): boolean;
        set_ndp_signature(value_ndp_signature: number): boolean;
        set_qos_format(value_qos_format: boolean): boolean;
        set_uplink_data_aggregation_max_datagrams(value_uplink_data_aggregation_max_datagrams: number): boolean;
        set_uplink_data_aggregation_max_size(value_uplink_data_aggregation_max_size: number): boolean;
        set_uplink_data_aggregation_protocol(value_uplink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean;
        unref(): void;
    }
    abstract class MessageWdaSetDataFormatOutput {
        static $gtype: GObject.GType<MessageWdaSetDataFormatOutput>;
        get_downlink_data_aggregation_max_datagrams(): [boolean, number];
        get_downlink_data_aggregation_max_size(): [boolean, number];
        get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        get_download_minimum_padding(): [boolean, number];
        get_flow_control(): [boolean, number];
        get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol | null];
        get_ndp_signature(): [boolean, number];
        get_qos_format(): [boolean, boolean];
        get_result(): boolean;
        get_uplink_data_aggregation_max_datagrams(): [boolean, number];
        get_uplink_data_aggregation_max_size(): [boolean, number];
        get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol | null];
        ref(): MessageWdaSetDataFormatOutput;
        unref(): void;
    }
    class MessageWdsBindDataPortInput {
        static $gtype: GObject.GType<MessageWdsBindDataPortInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsBindDataPortInput;
        get_data_port(): [boolean, SioPort | null];
        ref(): MessageWdsBindDataPortInput;
        set_data_port(value_data_port: SioPort): boolean;
        unref(): void;
    }
    abstract class MessageWdsBindDataPortOutput {
        static $gtype: GObject.GType<MessageWdsBindDataPortOutput>;
        get_result(): boolean;
        ref(): MessageWdsBindDataPortOutput;
        unref(): void;
    }
    class MessageWdsBindMuxDataPortInput {
        static $gtype: GObject.GType<MessageWdsBindMuxDataPortInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsBindMuxDataPortInput;
        get_client_type(): [boolean, WdsClientType | null];
        get_endpoint_info(): [boolean, DataEndpointType | null, number];
        get_mux_id(): [boolean, number];
        ref(): MessageWdsBindMuxDataPortInput;
        set_client_type(value_client_type: WdsClientType): boolean;
        set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean;
        set_mux_id(value_mux_id: number): boolean;
        unref(): void;
    }
    abstract class MessageWdsBindMuxDataPortOutput {
        static $gtype: GObject.GType<MessageWdsBindMuxDataPortOutput>;
        get_result(): boolean;
        ref(): MessageWdsBindMuxDataPortOutput;
        unref(): void;
    }
    class MessageWdsBindSubscriptionInput {
        static $gtype: GObject.GType<MessageWdsBindSubscriptionInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsBindSubscriptionInput;
        get_subscription_id(): [boolean, SubscriptionType | null];
        ref(): MessageWdsBindSubscriptionInput;
        set_subscription_id(value_subscription_id: SubscriptionType): boolean;
        unref(): void;
    }
    abstract class MessageWdsBindSubscriptionOutput {
        static $gtype: GObject.GType<MessageWdsBindSubscriptionOutput>;
        get_result(): boolean;
        ref(): MessageWdsBindSubscriptionOutput;
        unref(): void;
    }
    class MessageWdsConfigureProfileEventListInput {
        static $gtype: GObject.GType<MessageWdsConfigureProfileEventListInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsConfigureProfileEventListInput;
        get_register(): [boolean, MessageWdsConfigureProfileEventListInputRegisterElement[] | null];
        ref(): MessageWdsConfigureProfileEventListInput;
        set_register(value_register_ptr: MessageWdsConfigureProfileEventListInputRegisterElement[]): boolean;
        unref(): void;
    }
    class MessageWdsConfigureProfileEventListInputRegisterElement {
        static $gtype: GObject.GType<MessageWdsConfigureProfileEventListInputRegisterElement>;
        profile_type: WdsProfileType;
        profile_index: number;
    }
    abstract class MessageWdsConfigureProfileEventListOutput {
        static $gtype: GObject.GType<MessageWdsConfigureProfileEventListOutput>;
        get_result(): boolean;
        ref(): MessageWdsConfigureProfileEventListOutput;
        unref(): void;
    }
    class MessageWdsCreateProfileInput {
        static $gtype: GObject.GType<MessageWdsCreateProfileInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsCreateProfileInput;
        get_address_allocation_preference(): [boolean, WdsAddressAllocationPreference | null];
        get_apn_disabled_flag(): [boolean, boolean];
        get_apn_name(): [boolean, string];
        get_apn_type_mask(): [boolean, WdsApnTypeMask | null];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_gprs_minimum_qos(): [boolean, number, number, number, number, number];
        get_gprs_requested_qos(): [boolean, number, number, number, number, number];
        get_imcn_flag(): [boolean, boolean];
        get_ipv4_address_preference(): [boolean, number];
        get_ipv6_address_preference(): [boolean, number[] | null];
        get_ipv6_primary_dns_address_preference(): [boolean, number[] | null];
        get_ipv6_secondary_dns_address_preference(): [boolean, number[] | null];
        get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier | null, number, number, number, number];
        get_password(): [boolean, string];
        get_pcscf_address_using_dhcp(): [boolean, boolean];
        get_pcscf_address_using_pco(): [boolean, boolean];
        get_pdp_access_control(): [boolean, WdsPdpAccessControl | null];
        get_pdp_context_number(): [boolean, number];
        get_pdp_context_primary_id(): [boolean, number];
        get_pdp_context_secondary_flag(): [boolean, boolean];
        get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType | null];
        get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType | null];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_name(): [boolean, string];
        get_profile_type(): [boolean, WdsProfileType | null];
        get_roaming_disallowed_flag(): [boolean, boolean];
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_umts_minimum_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_minimum_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_umts_requested_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_requested_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_username(): [boolean, string];
        ref(): MessageWdsCreateProfileInput;
        set_address_allocation_preference(value_address_allocation_preference: WdsAddressAllocationPreference): boolean;
        set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;
        set_apn_name(value_apn_name: string): boolean;
        set_apn_type_mask(value_apn_type_mask: WdsApnTypeMask): boolean;
        set_authentication(value_authentication: WdsAuthentication): boolean;
        set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean;
        set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean;
        set_imcn_flag(value_imcn_flag: boolean): boolean;
        set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;
        set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean;
        set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean;
        set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean;
        set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean;
        set_password(value_password: string): boolean;
        set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean;
        set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean;
        set_pdp_access_control(value_pdp_access_control: WdsPdpAccessControl): boolean;
        set_pdp_context_number(value_pdp_context_number: number): boolean;
        set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean;
        set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean;
        set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean;
        set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean;
        set_pdp_type(value_pdp_type: WdsPdpType): boolean;
        set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;
        set_profile_name(value_profile_name: string): boolean;
        set_profile_type(value_profile_type: WdsProfileType): boolean;
        set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;
        set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;
        set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean;
        set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean;
        set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean;
        set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean;
        set_username(value_username: string): boolean;
        unref(): void;
    }
    abstract class MessageWdsCreateProfileOutput {
        static $gtype: GObject.GType<MessageWdsCreateProfileOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_profile_identifier(): [boolean, WdsProfileType | null, number];
        get_result(): boolean;
        ref(): MessageWdsCreateProfileOutput;
        unref(): void;
    }
    class MessageWdsDeleteProfileInput {
        static $gtype: GObject.GType<MessageWdsDeleteProfileInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsDeleteProfileInput;
        get_profile_identifier(): [boolean, WdsProfileType | null, number];
        ref(): MessageWdsDeleteProfileInput;
        set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean;
        unref(): void;
    }
    abstract class MessageWdsDeleteProfileOutput {
        static $gtype: GObject.GType<MessageWdsDeleteProfileOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_result(): boolean;
        ref(): MessageWdsDeleteProfileOutput;
        unref(): void;
    }
    abstract class MessageWdsGetAutoconnectSettingsOutput {
        static $gtype: GObject.GType<MessageWdsGetAutoconnectSettingsOutput>;
        get_result(): boolean;
        get_roaming(): [boolean, WdsAutoconnectSettingRoaming | null];
        get_status(): [boolean, WdsAutoconnectSetting | null];
        ref(): MessageWdsGetAutoconnectSettingsOutput;
        unref(): void;
    }
    abstract class MessageWdsGetBindSubscriptionOutput {
        static $gtype: GObject.GType<MessageWdsGetBindSubscriptionOutput>;
        get_result(): boolean;
        get_subscription_id(): [boolean, SubscriptionType | null];
        ref(): MessageWdsGetBindSubscriptionOutput;
        unref(): void;
    }
    abstract class MessageWdsGetChannelRatesOutput {
        static $gtype: GObject.GType<MessageWdsGetChannelRatesOutput>;
        get_channel_rates(): [boolean, number, number, number, number];
        get_result(): boolean;
        ref(): MessageWdsGetChannelRatesOutput;
        unref(): void;
    }
    abstract class MessageWdsGetCurrentDataBearerTechnologyOutput {
        static $gtype: GObject.GType<MessageWdsGetCurrentDataBearerTechnologyOutput>;
        get_current(): [boolean, WdsNetworkType | null, number, number];
        get_last(): [boolean, WdsNetworkType | null, number, number];
        get_result(): boolean;
        ref(): MessageWdsGetCurrentDataBearerTechnologyOutput;
        unref(): void;
    }
    class MessageWdsGetCurrentSettingsInput {
        static $gtype: GObject.GType<MessageWdsGetCurrentSettingsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetCurrentSettingsInput;
        get_requested_settings(): [boolean, WdsRequestedSettings | null];
        ref(): MessageWdsGetCurrentSettingsInput;
        set_requested_settings(value_requested_settings: WdsRequestedSettings): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetCurrentSettingsOutput {
        static $gtype: GObject.GType<MessageWdsGetCurrentSettingsOutput>;
        get_apn_name(): [boolean, string];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_domain_name_list(): [boolean, string[] | null];
        get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference | null];
        get_gprs_granted_qos(): [boolean, number, number, number, number, number];
        get_imcn_flag(): [boolean, number];
        get_ip_family(): [boolean, WdsIpFamily | null];
        get_ipv4_address(): [boolean, number];
        get_ipv4_gateway_address(): [boolean, number];
        get_ipv4_gateway_subnet_mask(): [boolean, number];
        get_ipv6_address(): [boolean, number[] | null, number];
        get_ipv6_gateway_address(): [boolean, number[] | null, number];
        get_ipv6_primary_dns_address(): [boolean, number[] | null];
        get_ipv6_secondary_dns_address(): [boolean, number[] | null];
        get_mtu(): [boolean, number];
        get_operator_reserved_pco(): [boolean, number, number, boolean, Uint8Array | null, number];
        get_pcscf_address_using_pco(): [boolean, number];
        get_pcscf_domain_name_list(): [boolean, string[] | null];
        get_pcscf_server_address_list(): [boolean, number[] | null];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_id(): [boolean, WdsProfileType | null, number];
        get_profile_name(): [boolean, string];
        get_result(): boolean;
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_umts_granted_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_username(): [boolean, string];
        ref(): MessageWdsGetCurrentSettingsOutput;
        unref(): void;
    }
    abstract class MessageWdsGetDataBearerTechnologyOutput {
        static $gtype: GObject.GType<MessageWdsGetDataBearerTechnologyOutput>;
        get_current(): [boolean, WdsDataBearerTechnology | null];
        get_last(): [boolean, WdsDataBearerTechnology | null];
        get_result(): boolean;
        ref(): MessageWdsGetDataBearerTechnologyOutput;
        unref(): void;
    }
    class MessageWdsGetDefaultProfileNumberInput {
        static $gtype: GObject.GType<MessageWdsGetDefaultProfileNumberInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetDefaultProfileNumberInput;
        get_profile_type(): [boolean, WdsProfileType | null, WdsProfileFamily | null];
        ref(): MessageWdsGetDefaultProfileNumberInput;
        set_profile_type(value_profile_type_type: WdsProfileType, value_profile_type_family: WdsProfileFamily): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetDefaultProfileNumberOutput {
        static $gtype: GObject.GType<MessageWdsGetDefaultProfileNumberOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_index(): [boolean, number];
        get_result(): boolean;
        ref(): MessageWdsGetDefaultProfileNumberOutput;
        unref(): void;
    }
    class MessageWdsGetDefaultSettingsInput {
        static $gtype: GObject.GType<MessageWdsGetDefaultSettingsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetDefaultSettingsInput;
        get_profile_type(): [boolean, WdsProfileType | null];
        ref(): MessageWdsGetDefaultSettingsInput;
        set_profile_type(value_profile_type: WdsProfileType): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetDefaultSettingsOutput {
        static $gtype: GObject.GType<MessageWdsGetDefaultSettingsOutput>;
        get_address_allocation_preference(): [boolean, WdsAddressAllocationPreference | null];
        get_apn_disabled_flag(): [boolean, boolean];
        get_apn_name(): [boolean, string];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_gprs_minimum_qos(): [boolean, number, number, number, number, number];
        get_gprs_requested_qos(): [boolean, number, number, number, number, number];
        get_imcn_flag(): [boolean, boolean];
        get_ipv4_address_preference(): [boolean, number];
        get_ipv6_address_preference(): [boolean, number[] | null];
        get_ipv6_primary_dns_address_preference(): [boolean, number[] | null];
        get_ipv6_secondary_dns_address_preference(): [boolean, number[] | null];
        get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier | null, number, number, number, number];
        get_password(): [boolean, string];
        get_pcscf_address_using_dhcp(): [boolean, boolean];
        get_pcscf_address_using_pco(): [boolean, boolean];
        get_pdp_access_control(): [boolean, WdsPdpAccessControl | null];
        get_pdp_context_number(): [boolean, number];
        get_pdp_context_primary_id(): [boolean, number];
        get_pdp_context_secondary_flag(): [boolean, boolean];
        get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType | null];
        get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType | null];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_name(): [boolean, string];
        get_result(): boolean;
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_umts_minimum_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_minimum_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_umts_requested_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_requested_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_username(): [boolean, string];
        ref(): MessageWdsGetDefaultSettingsOutput;
        unref(): void;
    }
    abstract class MessageWdsGetDormancyStatusOutput {
        static $gtype: GObject.GType<MessageWdsGetDormancyStatusOutput>;
        get_dormancy_status(): [boolean, WdsDormancyStatus | null];
        get_result(): boolean;
        ref(): MessageWdsGetDormancyStatusOutput;
        unref(): void;
    }
    abstract class MessageWdsGetLteAttachParametersOutput {
        static $gtype: GObject.GType<MessageWdsGetLteAttachParametersOutput>;
        get_apn(): [boolean, string];
        get_ip_support_type(): [boolean, WdsIpSupportType | null];
        get_ota_attach_performed(): [boolean, boolean];
        get_result(): boolean;
        ref(): MessageWdsGetLteAttachParametersOutput;
        unref(): void;
    }
    abstract class MessageWdsGetLteAttachPdnListOutput {
        static $gtype: GObject.GType<MessageWdsGetLteAttachPdnListOutput>;
        get_current_list(): [boolean, number[] | null];
        get_pending_list(): [boolean, number[] | null];
        get_result(): boolean;
        ref(): MessageWdsGetLteAttachPdnListOutput;
        unref(): void;
    }
    abstract class MessageWdsGetMaxLteAttachPdnNumberOutput {
        static $gtype: GObject.GType<MessageWdsGetMaxLteAttachPdnNumberOutput>;
        get_info(): [boolean, number];
        get_result(): boolean;
        ref(): MessageWdsGetMaxLteAttachPdnNumberOutput;
        unref(): void;
    }
    abstract class MessageWdsGetPacketServiceStatusOutput {
        static $gtype: GObject.GType<MessageWdsGetPacketServiceStatusOutput>;
        get_connection_status(): [boolean, WdsConnectionStatus | null];
        get_result(): boolean;
        ref(): MessageWdsGetPacketServiceStatusOutput;
        unref(): void;
    }
    class MessageWdsGetPacketStatisticsInput {
        static $gtype: GObject.GType<MessageWdsGetPacketStatisticsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetPacketStatisticsInput;
        get_mask(): [boolean, WdsPacketStatisticsMaskFlag | null];
        ref(): MessageWdsGetPacketStatisticsInput;
        set_mask(value_mask: WdsPacketStatisticsMaskFlag): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetPacketStatisticsOutput {
        static $gtype: GObject.GType<MessageWdsGetPacketStatisticsOutput>;
        get_last_call_rx_bytes_ok(): [boolean, number];
        get_last_call_tx_bytes_ok(): [boolean, number];
        get_result(): boolean;
        get_rx_bytes_ok(): [boolean, number];
        get_rx_overflows(): [boolean, number];
        get_rx_packets_dropped(): [boolean, number];
        get_rx_packets_error(): [boolean, number];
        get_rx_packets_ok(): [boolean, number];
        get_tx_bytes_ok(): [boolean, number];
        get_tx_overflows(): [boolean, number];
        get_tx_packets_dropped(): [boolean, number];
        get_tx_packets_error(): [boolean, number];
        get_tx_packets_ok(): [boolean, number];
        ref(): MessageWdsGetPacketStatisticsOutput;
        unref(): void;
    }
    class MessageWdsGetPdnThrottleInfoInput {
        static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetPdnThrottleInfoInput;
        get_network_type(): [boolean, WdsDataSystemNetworkType | null];
        ref(): MessageWdsGetPdnThrottleInfoInput;
        set_network_type(value_network_type: WdsDataSystemNetworkType): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetPdnThrottleInfoOutput {
        static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoOutput>;
        get_info(): [boolean, MessageWdsGetPdnThrottleInfoOutputInfoElement[] | null];
        get_result(): boolean;
        ref(): MessageWdsGetPdnThrottleInfoOutput;
        unref(): void;
    }
    class MessageWdsGetPdnThrottleInfoOutputInfoElement {
        static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoOutputInfoElement>;
        ipv4_throttled: boolean;
        ipv6_throttled: boolean;
        ipv4_throttle_time_left_ms: number;
        ipv6_throttle_time_left_ms: number;
        apn: string;
        constructor(properties?: Partial<{
            ipv4_throttled: boolean;
            ipv6_throttled: boolean;
            ipv4_throttle_time_left_ms: number;
            ipv6_throttle_time_left_ms: number;
            apn: string;
        }>);
    }
    class MessageWdsGetProfileListInput {
        static $gtype: GObject.GType<MessageWdsGetProfileListInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetProfileListInput;
        get_profile_type(): [boolean, WdsProfileType | null];
        ref(): MessageWdsGetProfileListInput;
        set_profile_type(value_profile_type: WdsProfileType): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetProfileListOutput {
        static $gtype: GObject.GType<MessageWdsGetProfileListOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_profile_list(): [boolean, MessageWdsGetProfileListOutputProfileListProfile[] | null];
        get_result(): boolean;
        ref(): MessageWdsGetProfileListOutput;
        unref(): void;
    }
    class MessageWdsGetProfileListOutputProfileListProfile {
        static $gtype: GObject.GType<MessageWdsGetProfileListOutputProfileListProfile>;
        profile_type: WdsProfileType;
        profile_index: number;
        profile_name: string;
    }
    class MessageWdsGetProfileSettingsInput {
        static $gtype: GObject.GType<MessageWdsGetProfileSettingsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsGetProfileSettingsInput;
        get_profile_id(): [boolean, WdsProfileType | null, number];
        ref(): MessageWdsGetProfileSettingsInput;
        set_profile_id(value_profile_id_profile_type: WdsProfileType, value_profile_id_profile_index: number): boolean;
        unref(): void;
    }
    abstract class MessageWdsGetProfileSettingsOutput {
        static $gtype: GObject.GType<MessageWdsGetProfileSettingsOutput>;
        get_address_allocation_preference(): [boolean, WdsAddressAllocationPreference | null];
        get_apn_disabled_flag(): [boolean, boolean];
        get_apn_name(): [boolean, string];
        get_apn_type_mask(): [boolean, WdsApnTypeMask | null];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_clat_enabled(): [boolean, boolean];
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_gprs_minimum_qos(): [boolean, number, number, number, number, number];
        get_gprs_requested_qos(): [boolean, number, number, number, number, number];
        get_imcn_flag(): [boolean, boolean];
        get_ipv4_address_preference(): [boolean, number];
        get_ipv6_address_preference(): [boolean, number[] | null];
        get_ipv6_prefix_delegation(): [boolean, boolean];
        get_ipv6_primary_dns_address_preference(): [boolean, number[] | null];
        get_ipv6_secondary_dns_address_preference(): [boolean, number[] | null];
        get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier | null, number, number, number, number];
        get_password(): [boolean, string];
        get_pcscf_address_using_dhcp(): [boolean, boolean];
        get_pcscf_address_using_pco(): [boolean, boolean];
        get_pdp_access_control(): [boolean, WdsPdpAccessControl | null];
        get_pdp_context_number(): [boolean, number];
        get_pdp_context_primary_id(): [boolean, number];
        get_pdp_context_secondary_flag(): [boolean, boolean];
        get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType | null];
        get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType | null];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_name(): [boolean, string];
        get_result(): boolean;
        get_roaming_disallowed_flag(): [boolean, boolean];
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_umts_minimum_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_minimum_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_umts_requested_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_requested_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_username(): [boolean, string];
        ref(): MessageWdsGetProfileSettingsOutput;
        unref(): void;
    }
    abstract class MessageWdsGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageWdsGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageWdsGetSupportedMessagesOutput;
        unref(): void;
    }
    abstract class MessageWdsGoActiveOutput {
        static $gtype: GObject.GType<MessageWdsGoActiveOutput>;
        get_result(): boolean;
        ref(): MessageWdsGoActiveOutput;
        unref(): void;
    }
    abstract class MessageWdsGoDormantOutput {
        static $gtype: GObject.GType<MessageWdsGoDormantOutput>;
        get_result(): boolean;
        ref(): MessageWdsGoDormantOutput;
        unref(): void;
    }
    class MessageWdsIndicationRegisterInput {
        static $gtype: GObject.GType<MessageWdsIndicationRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsIndicationRegisterInput;
        get_report_extended_ip_configuration_change(): [boolean, boolean];
        get_report_profile_changes(): [boolean, boolean];
        ref(): MessageWdsIndicationRegisterInput;
        set_report_extended_ip_configuration_change(value_report_extended_ip_configuration_change: boolean): boolean;
        set_report_profile_changes(value_report_profile_changes: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWdsIndicationRegisterOutput {
        static $gtype: GObject.GType<MessageWdsIndicationRegisterOutput>;
        get_result(): boolean;
        ref(): MessageWdsIndicationRegisterOutput;
        unref(): void;
    }
    class MessageWdsModifyProfileInput {
        static $gtype: GObject.GType<MessageWdsModifyProfileInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsModifyProfileInput;
        get_address_allocation_preference(): [boolean, WdsAddressAllocationPreference | null];
        get_apn_disabled_flag(): [boolean, boolean];
        get_apn_name(): [boolean, string];
        get_apn_type_mask(): [boolean, WdsApnTypeMask | null];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_clat_enabled(): [boolean, boolean];
        get_gprs_minimum_qos(): [boolean, number, number, number, number, number];
        get_gprs_requested_qos(): [boolean, number, number, number, number, number];
        get_imcn_flag(): [boolean, boolean];
        get_ipv4_address_preference(): [boolean, number];
        get_ipv6_address_preference(): [boolean, number[] | null];
        get_ipv6_prefix_delegation(): [boolean, boolean];
        get_ipv6_primary_dns_address_preference(): [boolean, number[] | null];
        get_ipv6_secondary_dns_address_preference(): [boolean, number[] | null];
        get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier | null, number, number, number, number];
        get_password(): [boolean, string];
        get_pcscf_address_using_dhcp(): [boolean, boolean];
        get_pcscf_address_using_pco(): [boolean, boolean];
        get_pdp_access_control(): [boolean, WdsPdpAccessControl | null];
        get_pdp_context_number(): [boolean, number];
        get_pdp_context_primary_id(): [boolean, number];
        get_pdp_context_secondary_flag(): [boolean, boolean];
        get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType | null];
        get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType | null];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_identifier(): [boolean, WdsProfileType | null, number];
        get_profile_name(): [boolean, string];
        get_roaming_disallowed_flag(): [boolean, boolean];
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_umts_minimum_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_minimum_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_umts_requested_qos(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number];
        get_umts_requested_qos_with_signaling_indication_flag(): [boolean, WdsTrafficClass | null, number, number, number, number, WdsDeliveryOrder | null, number, WdsSduErrorRatio | null, WdsSduResidualBitErrorRatio | null, WdsSduErroneousDelivery | null, number, number, number];
        get_username(): [boolean, string];
        ref(): MessageWdsModifyProfileInput;
        set_address_allocation_preference(value_address_allocation_preference: WdsAddressAllocationPreference): boolean;
        set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;
        set_apn_name(value_apn_name: string): boolean;
        set_apn_type_mask(value_apn_type_mask: WdsApnTypeMask): boolean;
        set_authentication(value_authentication: WdsAuthentication): boolean;
        set_clat_enabled(value_clat_enabled: boolean): boolean;
        set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean;
        set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean;
        set_imcn_flag(value_imcn_flag: boolean): boolean;
        set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;
        set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean;
        set_ipv6_prefix_delegation(value_ipv6_prefix_delegation: boolean): boolean;
        set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean;
        set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean;
        set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean;
        set_password(value_password: string): boolean;
        set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean;
        set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean;
        set_pdp_access_control(value_pdp_access_control: WdsPdpAccessControl): boolean;
        set_pdp_context_number(value_pdp_context_number: number): boolean;
        set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean;
        set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean;
        set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean;
        set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean;
        set_pdp_type(value_pdp_type: WdsPdpType): boolean;
        set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;
        set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean;
        set_profile_name(value_profile_name: string): boolean;
        set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;
        set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;
        set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean;
        set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean;
        set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean;
        set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean;
        set_username(value_username: string): boolean;
        unref(): void;
    }
    abstract class MessageWdsModifyProfileOutput {
        static $gtype: GObject.GType<MessageWdsModifyProfileOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_result(): boolean;
        ref(): MessageWdsModifyProfileOutput;
        unref(): void;
    }
    abstract class MessageWdsResetOutput {
        static $gtype: GObject.GType<MessageWdsResetOutput>;
        get_result(): boolean;
        ref(): MessageWdsResetOutput;
        unref(): void;
    }
    class MessageWdsSetAutoconnectSettingsInput {
        static $gtype: GObject.GType<MessageWdsSetAutoconnectSettingsInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSetAutoconnectSettingsInput;
        get_roaming(): [boolean, WdsAutoconnectSettingRoaming | null];
        get_status(): [boolean, WdsAutoconnectSetting | null];
        ref(): MessageWdsSetAutoconnectSettingsInput;
        set_roaming(value_roaming: WdsAutoconnectSettingRoaming): boolean;
        set_status(value_status: WdsAutoconnectSetting): boolean;
        unref(): void;
    }
    abstract class MessageWdsSetAutoconnectSettingsOutput {
        static $gtype: GObject.GType<MessageWdsSetAutoconnectSettingsOutput>;
        get_result(): boolean;
        ref(): MessageWdsSetAutoconnectSettingsOutput;
        unref(): void;
    }
    class MessageWdsSetDefaultProfileNumberInput {
        static $gtype: GObject.GType<MessageWdsSetDefaultProfileNumberInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSetDefaultProfileNumberInput;
        get_profile_identifier(): [boolean, WdsProfileType | null, WdsProfileFamily | null, number];
        ref(): MessageWdsSetDefaultProfileNumberInput;
        set_profile_identifier(value_profile_identifier_type: WdsProfileType, value_profile_identifier_family: WdsProfileFamily, value_profile_identifier_index: number): boolean;
        unref(): void;
    }
    abstract class MessageWdsSetDefaultProfileNumberOutput {
        static $gtype: GObject.GType<MessageWdsSetDefaultProfileNumberOutput>;
        get_extended_error_code(): [boolean, WdsDsProfileError | null];
        get_result(): boolean;
        ref(): MessageWdsSetDefaultProfileNumberOutput;
        unref(): void;
    }
    class MessageWdsSetEventReportInput {
        static $gtype: GObject.GType<MessageWdsSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSetEventReportInput;
        get_channel_rate(): [boolean, boolean];
        get_current_data_bearer_technology(): [boolean, boolean];
        get_data_bearer_technology(): [boolean, boolean];
        get_data_call_status(): [boolean, boolean];
        get_data_systems(): [boolean, boolean];
        get_dormancy_status(): [boolean, boolean];
        get_evdo_pm_change(): [boolean, boolean];
        get_extended_data_bearer_technology(): [boolean, boolean];
        get_limited_data_system_status(): [boolean, boolean];
        get_mip_status(): [boolean, number];
        get_pdn_filter_removals(): [boolean, boolean];
        get_preferred_data_system(): [boolean, boolean];
        get_transfer_statistics(): [boolean, number, WdsSetEventReportTransferStatistics | null];
        get_uplink_flow_control(): [boolean, boolean];
        ref(): MessageWdsSetEventReportInput;
        set_channel_rate(value_channel_rate: boolean): boolean;
        set_current_data_bearer_technology(value_current_data_bearer_technology: boolean): boolean;
        set_data_bearer_technology(value_data_bearer_technology: boolean): boolean;
        set_data_call_status(value_data_call_status: boolean): boolean;
        set_data_systems(value_data_systems: boolean): boolean;
        set_dormancy_status(value_dormancy_status: boolean): boolean;
        set_evdo_pm_change(value_evdo_pm_change: boolean): boolean;
        set_extended_data_bearer_technology(value_extended_data_bearer_technology: boolean): boolean;
        set_limited_data_system_status(value_limited_data_system_status: boolean): boolean;
        set_mip_status(value_mip_status: number): boolean;
        set_pdn_filter_removals(value_pdn_filter_removals: boolean): boolean;
        set_preferred_data_system(value_preferred_data_system: boolean): boolean;
        set_transfer_statistics(value_transfer_statistics_interval_seconds: number, value_transfer_statistics_indicators: WdsSetEventReportTransferStatistics): boolean;
        set_uplink_flow_control(value_uplink_flow_control: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWdsSetEventReportOutput {
        static $gtype: GObject.GType<MessageWdsSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessageWdsSetEventReportOutput;
        unref(): void;
    }
    class MessageWdsSetIpFamilyInput {
        static $gtype: GObject.GType<MessageWdsSetIpFamilyInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSetIpFamilyInput;
        get_preference(): [boolean, WdsIpFamily | null];
        ref(): MessageWdsSetIpFamilyInput;
        set_preference(value_preference: WdsIpFamily): boolean;
        unref(): void;
    }
    abstract class MessageWdsSetIpFamilyOutput {
        static $gtype: GObject.GType<MessageWdsSetIpFamilyOutput>;
        get_result(): boolean;
        ref(): MessageWdsSetIpFamilyOutput;
        unref(): void;
    }
    class MessageWdsSetLteAttachPdnListInput {
        static $gtype: GObject.GType<MessageWdsSetLteAttachPdnListInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSetLteAttachPdnListInput;
        get_action(): [boolean, WdsAttachPdnListAction | null];
        get_list(): [boolean, number[] | null];
        ref(): MessageWdsSetLteAttachPdnListInput;
        set_action(value_action: WdsAttachPdnListAction): boolean;
        set_list(value_list: number[]): boolean;
        unref(): void;
    }
    abstract class MessageWdsSetLteAttachPdnListOutput {
        static $gtype: GObject.GType<MessageWdsSetLteAttachPdnListOutput>;
        get_result(): boolean;
        ref(): MessageWdsSetLteAttachPdnListOutput;
        unref(): void;
    }
    class MessageWdsStartNetworkInput {
        static $gtype: GObject.GType<MessageWdsStartNetworkInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsStartNetworkInput;
        get_apn(): [boolean, string];
        get_authentication_preference(): [boolean, WdsAuthentication | null];
        get_call_type(): [boolean, WdsCallType | null];
        get_enable_autoconnect(): [boolean, boolean];
        get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference | null];
        get_ip_family_preference(): [boolean, WdsIpFamily | null];
        get_ipv4_address_preference(): [boolean, number];
        get_password(): [boolean, string];
        get_primary_dns_address_preference(): [boolean, number];
        get_primary_nbns_address_preference(): [boolean, number];
        get_profile_index_3gpp(): [boolean, number];
        get_profile_index_3gpp2(): [boolean, number];
        get_secondary_dns_address_preference(): [boolean, number];
        get_secondary_nbns_address_preference(): [boolean, number];
        get_technology_preference(): [boolean, WdsTechnologyPreference | null];
        get_username(): [boolean, string];
        ref(): MessageWdsStartNetworkInput;
        set_apn(value_apn: string): boolean;
        set_authentication_preference(value_authentication_preference: WdsAuthentication): boolean;
        set_call_type(value_call_type: WdsCallType): boolean;
        set_enable_autoconnect(value_enable_autoconnect: boolean): boolean;
        set_extended_technology_preference(value_extended_technology_preference: WdsExtendedTechnologyPreference): boolean;
        set_ip_family_preference(value_ip_family_preference: WdsIpFamily): boolean;
        set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;
        set_password(value_password: string): boolean;
        set_primary_dns_address_preference(value_primary_dns_address_preference: number): boolean;
        set_primary_nbns_address_preference(value_primary_nbns_address_preference: number): boolean;
        set_profile_index_3gpp(value_profile_index_3gpp: number): boolean;
        set_profile_index_3gpp2(value_profile_index_3gpp2: number): boolean;
        set_secondary_dns_address_preference(value_secondary_dns_address_preference: number): boolean;
        set_secondary_nbns_address_preference(value_secondary_nbns_address_preference: number): boolean;
        set_technology_preference(value_technology_preference: WdsTechnologyPreference): boolean;
        set_username(value_username: string): boolean;
        unref(): void;
    }
    abstract class MessageWdsStartNetworkOutput {
        static $gtype: GObject.GType<MessageWdsStartNetworkOutput>;
        get_call_end_reason(): [boolean, WdsCallEndReason | null];
        get_packet_data_handle(): [boolean, number];
        get_result(): boolean;
        get_verbose_call_end_reason(): [boolean, WdsVerboseCallEndReasonType | null, number];
        ref(): MessageWdsStartNetworkOutput;
        unref(): void;
    }
    class MessageWdsStopNetworkInput {
        static $gtype: GObject.GType<MessageWdsStopNetworkInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsStopNetworkInput;
        get_disable_autoconnect(): [boolean, boolean];
        get_packet_data_handle(): [boolean, number];
        ref(): MessageWdsStopNetworkInput;
        set_disable_autoconnect(value_disable_autoconnect: boolean): boolean;
        set_packet_data_handle(value_packet_data_handle: number): boolean;
        unref(): void;
    }
    abstract class MessageWdsStopNetworkOutput {
        static $gtype: GObject.GType<MessageWdsStopNetworkOutput>;
        get_result(): boolean;
        ref(): MessageWdsStopNetworkOutput;
        unref(): void;
    }
    class MessageWdsSwiCreateProfileIndexedInput {
        static $gtype: GObject.GType<MessageWdsSwiCreateProfileIndexedInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWdsSwiCreateProfileIndexedInput;
        get_apn_disabled_flag(): [boolean, boolean];
        get_apn_name(): [boolean, string];
        get_authentication(): [boolean, WdsAuthentication | null];
        get_ipv4_address_preference(): [boolean, number];
        get_password(): [boolean, string];
        get_pdp_context_number(): [boolean, number];
        get_pdp_type(): [boolean, WdsPdpType | null];
        get_primary_ipv4_dns_address(): [boolean, number];
        get_profile_identifier(): [boolean, WdsProfileType | null, number];
        get_profile_name(): [boolean, string];
        get_roaming_disallowed_flag(): [boolean, boolean];
        get_secondary_ipv4_dns_address(): [boolean, number];
        get_username(): [boolean, string];
        ref(): MessageWdsSwiCreateProfileIndexedInput;
        set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;
        set_apn_name(value_apn_name: string): boolean;
        set_authentication(value_authentication: WdsAuthentication): boolean;
        set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;
        set_password(value_password: string): boolean;
        set_pdp_context_number(value_pdp_context_number: number): boolean;
        set_pdp_type(value_pdp_type: WdsPdpType): boolean;
        set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;
        set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean;
        set_profile_name(value_profile_name: string): boolean;
        set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;
        set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;
        set_username(value_username: string): boolean;
        unref(): void;
    }
    abstract class MessageWdsSwiCreateProfileIndexedOutput {
        static $gtype: GObject.GType<MessageWdsSwiCreateProfileIndexedOutput>;
        get_profile_identifier(): [boolean, WdsProfileType | null, number];
        get_result(): boolean;
        ref(): MessageWdsSwiCreateProfileIndexedOutput;
        unref(): void;
    }
    class MessageWmsDeleteInput {
        static $gtype: GObject.GType<MessageWmsDeleteInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsDeleteInput;
        get_memory_index(): [boolean, number];
        get_memory_storage(): [boolean, WmsStorageType | null];
        get_message_mode(): [boolean, WmsMessageMode | null];
        get_message_tag(): [boolean, WmsMessageTagType | null];
        ref(): MessageWmsDeleteInput;
        set_memory_index(value_memory_index: number): boolean;
        set_memory_storage(value_memory_storage: WmsStorageType): boolean;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        set_message_tag(value_message_tag: WmsMessageTagType): boolean;
        unref(): void;
    }
    abstract class MessageWmsDeleteOutput {
        static $gtype: GObject.GType<MessageWmsDeleteOutput>;
        get_result(): boolean;
        ref(): MessageWmsDeleteOutput;
        unref(): void;
    }
    class MessageWmsGetBroadcastConfigInput {
        static $gtype: GObject.GType<MessageWmsGetBroadcastConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsGetBroadcastConfigInput;
        get_message_mode(): [boolean, WmsMessageMode | null];
        ref(): MessageWmsGetBroadcastConfigInput;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        unref(): void;
    }
    abstract class MessageWmsGetBroadcastConfigOutput {
        static $gtype: GObject.GType<MessageWmsGetBroadcastConfigOutput>;
        get_config(): [boolean, boolean, MessageWmsGetBroadcastConfigOutputConfigChannelsElement[] | null];
        get_result(): boolean;
        ref(): MessageWmsGetBroadcastConfigOutput;
        unref(): void;
    }
    class MessageWmsGetBroadcastConfigOutputConfigChannelsElement {
        static $gtype: GObject.GType<MessageWmsGetBroadcastConfigOutputConfigChannelsElement>;
        start: number;
        end: number;
        selected: boolean;
        constructor(properties?: Partial<{
            start: number;
            end: number;
            selected: boolean;
        }>);
    }
    abstract class MessageWmsGetMessageProtocolOutput {
        static $gtype: GObject.GType<MessageWmsGetMessageProtocolOutput>;
        get_message_protocol(): [boolean, WmsMessageProtocol | null];
        get_result(): boolean;
        ref(): MessageWmsGetMessageProtocolOutput;
        unref(): void;
    }
    abstract class MessageWmsGetRoutesOutput {
        static $gtype: GObject.GType<MessageWmsGetRoutesOutput>;
        get_result(): boolean;
        get_route_list(): [boolean, MessageWmsGetRoutesOutputRouteListElement[] | null];
        get_transfer_status_report(): [boolean, WmsTransferIndication | null];
        ref(): MessageWmsGetRoutesOutput;
        unref(): void;
    }
    class MessageWmsGetRoutesOutputRouteListElement {
        static $gtype: GObject.GType<MessageWmsGetRoutesOutputRouteListElement>;
        message_type: WmsMessageType;
        message_class: WmsMessageClass;
        storage: WmsStorageType;
        receipt_action: WmsReceiptAction;
    }
    abstract class MessageWmsGetSupportedMessagesOutput {
        static $gtype: GObject.GType<MessageWmsGetSupportedMessagesOutput>;
        get_list(): [boolean, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageWmsGetSupportedMessagesOutput;
        unref(): void;
    }
    class MessageWmsGetTransportNetworkRegistrationStatusInput {
        static $gtype: GObject.GType<MessageWmsGetTransportNetworkRegistrationStatusInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsGetTransportNetworkRegistrationStatusInput;
        ref(): MessageWmsGetTransportNetworkRegistrationStatusInput;
        unref(): void;
    }
    abstract class MessageWmsGetTransportNetworkRegistrationStatusOutput {
        static $gtype: GObject.GType<MessageWmsGetTransportNetworkRegistrationStatusOutput>;
        get_registration_status(): [boolean, WmsNWRegistration | null];
        get_result(): boolean;
        ref(): MessageWmsGetTransportNetworkRegistrationStatusOutput;
        unref(): void;
    }
    class MessageWmsIndicationRegisterInput {
        static $gtype: GObject.GType<MessageWmsIndicationRegisterInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsIndicationRegisterInput;
        get_report_transport_network_registration_status(): [boolean, boolean];
        ref(): MessageWmsIndicationRegisterInput;
        set_report_transport_network_registration_status(value_report_transport_network_registration_status: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsIndicationRegisterOutput {
        static $gtype: GObject.GType<MessageWmsIndicationRegisterOutput>;
        get_result(): boolean;
        ref(): MessageWmsIndicationRegisterOutput;
        unref(): void;
    }
    class MessageWmsListMessagesInput {
        static $gtype: GObject.GType<MessageWmsListMessagesInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsListMessagesInput;
        get_message_mode(): [boolean, WmsMessageMode | null];
        get_message_tag(): [boolean, WmsMessageTagType | null];
        get_storage_type(): [boolean, WmsStorageType | null];
        ref(): MessageWmsListMessagesInput;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        set_message_tag(value_message_tag: WmsMessageTagType): boolean;
        set_storage_type(value_storage_type: WmsStorageType): boolean;
        unref(): void;
    }
    abstract class MessageWmsListMessagesOutput {
        static $gtype: GObject.GType<MessageWmsListMessagesOutput>;
        get_message_list(): [boolean, MessageWmsListMessagesOutputMessageListElement[] | null];
        get_result(): boolean;
        ref(): MessageWmsListMessagesOutput;
        unref(): void;
    }
    class MessageWmsListMessagesOutputMessageListElement {
        static $gtype: GObject.GType<MessageWmsListMessagesOutputMessageListElement>;
        memory_index: number;
        message_tag: WmsMessageTagType;
    }
    class MessageWmsModifyTagInput {
        static $gtype: GObject.GType<MessageWmsModifyTagInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsModifyTagInput;
        get_message_mode(): [boolean, WmsMessageMode | null];
        get_message_tag(): [boolean, WmsStorageType | null, number, WmsMessageTagType | null];
        ref(): MessageWmsModifyTagInput;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        set_message_tag(value_message_tag_storage_type: WmsStorageType, value_message_tag_memory_index: number, value_message_tag_message_tag: WmsMessageTagType): boolean;
        unref(): void;
    }
    abstract class MessageWmsModifyTagOutput {
        static $gtype: GObject.GType<MessageWmsModifyTagOutput>;
        get_result(): boolean;
        ref(): MessageWmsModifyTagOutput;
        unref(): void;
    }
    class MessageWmsRawReadInput {
        static $gtype: GObject.GType<MessageWmsRawReadInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsRawReadInput;
        get_message_memory_storage_id(): [boolean, WmsStorageType | null, number];
        get_message_mode(): [boolean, WmsMessageMode | null];
        get_sms_on_ims(): [boolean, boolean];
        ref(): MessageWmsRawReadInput;
        set_message_memory_storage_id(value_message_memory_storage_id_storage_type: WmsStorageType, value_message_memory_storage_id_memory_index: number): boolean;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        set_sms_on_ims(value_sms_on_ims: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsRawReadOutput {
        static $gtype: GObject.GType<MessageWmsRawReadOutput>;
        get_raw_message_data(): [boolean, WmsMessageTagType | null, WmsMessageFormat | null, Uint8Array | null];
        get_result(): boolean;
        ref(): MessageWmsRawReadOutput;
        unref(): void;
    }
    class MessageWmsRawSendInput {
        static $gtype: GObject.GType<MessageWmsRawSendInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsRawSendInput;
        get_cdma_follow_on_dc(): [boolean, boolean];
        get_cdma_force_on_dc(): [boolean, boolean, WmsCdmaServiceOption | null];
        get_gsm_wcdma_link_timer(): [boolean, number];
        get_raw_message_data(): [boolean, WmsMessageFormat | null, Uint8Array | null];
        get_sms_on_ims(): [boolean, boolean];
        ref(): MessageWmsRawSendInput;
        set_cdma_follow_on_dc(value_cdma_follow_on_dc_follow: boolean): boolean;
        set_cdma_force_on_dc(value_cdma_force_on_dc_force: boolean, value_cdma_force_on_dc_service_option: WmsCdmaServiceOption): boolean;
        set_gsm_wcdma_link_timer(value_gsm_wcdma_link_timer: number): boolean;
        set_raw_message_data(value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array | string): boolean;
        set_sms_on_ims(value_sms_on_ims: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsRawSendOutput {
        static $gtype: GObject.GType<MessageWmsRawSendOutput>;
        get_cdma_cause_code(): [boolean, WmsCdmaCauseCode | null];
        get_cdma_error_class(): [boolean, WmsCdmaErrorClass | null];
        get_gsm_wcdma_cause_info(): [boolean, WmsGsmUmtsRpCause | null, WmsGsmUmtsTpCause | null];
        get_message_delivery_failure_type(): [boolean, WmsMessageDeliveryFailureType | null];
        get_message_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageWmsRawSendOutput;
        unref(): void;
    }
    class MessageWmsRawWriteInput {
        static $gtype: GObject.GType<MessageWmsRawWriteInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsRawWriteInput;
        get_raw_message_data(): [boolean, WmsStorageType | null, WmsMessageFormat | null, Uint8Array | null];
        ref(): MessageWmsRawWriteInput;
        set_raw_message_data(value_raw_message_data_storage_type: WmsStorageType, value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array | string): boolean;
        unref(): void;
    }
    abstract class MessageWmsRawWriteOutput {
        static $gtype: GObject.GType<MessageWmsRawWriteOutput>;
        get_memory_index(): [boolean, number];
        get_result(): boolean;
        ref(): MessageWmsRawWriteOutput;
        unref(): void;
    }
    abstract class MessageWmsResetOutput {
        static $gtype: GObject.GType<MessageWmsResetOutput>;
        get_result(): boolean;
        ref(): MessageWmsResetOutput;
        unref(): void;
    }
    class MessageWmsSendAckInput {
        static $gtype: GObject.GType<MessageWmsSendAckInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSendAckInput;
        get_3gpp2_failure_information(): [boolean, WmsCdmaErrorClass | null, WmsCdmaCauseCode | null];
        get_3gpp_failure_information(): [boolean, WmsGsmUmtsRpCause | null, WmsGsmUmtsTpCause | null];
        get_information(): [boolean, number, WmsMessageProtocol | null, boolean];
        get_sms_on_ims(): [boolean, boolean];
        ref(): MessageWmsSendAckInput;
        set_3gpp2_failure_information(value_3gpp2_failure_information_error_class: WmsCdmaErrorClass, value_3gpp2_failure_information_cause_code: WmsCdmaCauseCode): boolean;
        set_3gpp_failure_information(value_3gpp_failure_information_rp_cause: WmsGsmUmtsRpCause, value_3gpp_failure_information_tp_cause: WmsGsmUmtsTpCause): boolean;
        set_information(value_information_transaction_id: number, value_information_message_protocol: WmsMessageProtocol, value_information_success: boolean): boolean;
        set_sms_on_ims(value_sms_on_ims: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsSendAckOutput {
        static $gtype: GObject.GType<MessageWmsSendAckOutput>;
        get_failure_cause(): [boolean, WmsAckFailureCause | null];
        get_result(): boolean;
        ref(): MessageWmsSendAckOutput;
        unref(): void;
    }
    class MessageWmsSendFromMemoryStorageInput {
        static $gtype: GObject.GType<MessageWmsSendFromMemoryStorageInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSendFromMemoryStorageInput;
        get_information(): [boolean, WmsStorageType | null, number, WmsMessageMode | null];
        get_sms_on_ims(): [boolean, boolean];
        ref(): MessageWmsSendFromMemoryStorageInput;
        set_information(value_information_storage_type: WmsStorageType, value_information_memory_index: number, value_information_message_mode: WmsMessageMode): boolean;
        set_sms_on_ims(value_sms_on_ims: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsSendFromMemoryStorageOutput {
        static $gtype: GObject.GType<MessageWmsSendFromMemoryStorageOutput>;
        get_cdma_cause_code(): [boolean, WmsCdmaCauseCode | null];
        get_cdma_error_class(): [boolean, WmsCdmaErrorClass | null];
        get_gsm_wcdma_cause_info(): [boolean, WmsGsmUmtsRpCause | null, WmsGsmUmtsTpCause | null];
        get_message_delivery_failure_type(): [boolean, WmsMessageDeliveryFailureType | null];
        get_message_id(): [boolean, number];
        get_result(): boolean;
        ref(): MessageWmsSendFromMemoryStorageOutput;
        unref(): void;
    }
    class MessageWmsSetBroadcastActivationInput {
        static $gtype: GObject.GType<MessageWmsSetBroadcastActivationInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSetBroadcastActivationInput;
        get_activation(): [boolean, WmsMessageMode | null, boolean];
        ref(): MessageWmsSetBroadcastActivationInput;
        set_activation(value_activation_message_mode: WmsMessageMode, value_activation_activate: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsSetBroadcastActivationOutput {
        static $gtype: GObject.GType<MessageWmsSetBroadcastActivationOutput>;
        get_result(): boolean;
        ref(): MessageWmsSetBroadcastActivationOutput;
        unref(): void;
    }
    class MessageWmsSetBroadcastConfigInput {
        static $gtype: GObject.GType<MessageWmsSetBroadcastConfigInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSetBroadcastConfigInput;
        get_channels(): [boolean, MessageWmsSetBroadcastConfigInputChannelsElement[] | null];
        get_message_mode(): [boolean, WmsMessageMode | null];
        ref(): MessageWmsSetBroadcastConfigInput;
        set_channels(value_channels_ptr: MessageWmsSetBroadcastConfigInputChannelsElement[]): boolean;
        set_message_mode(value_message_mode: WmsMessageMode): boolean;
        unref(): void;
    }
    class MessageWmsSetBroadcastConfigInputChannelsElement {
        static $gtype: GObject.GType<MessageWmsSetBroadcastConfigInputChannelsElement>;
        start: number;
        end: number;
        selected: boolean;
        constructor(properties?: Partial<{
            start: number;
            end: number;
            selected: boolean;
        }>);
    }
    abstract class MessageWmsSetBroadcastConfigOutput {
        static $gtype: GObject.GType<MessageWmsSetBroadcastConfigOutput>;
        get_result(): boolean;
        ref(): MessageWmsSetBroadcastConfigOutput;
        unref(): void;
    }
    class MessageWmsSetEventReportInput {
        static $gtype: GObject.GType<MessageWmsSetEventReportInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSetEventReportInput;
        get_new_mt_message_indicator(): [boolean, boolean];
        ref(): MessageWmsSetEventReportInput;
        set_new_mt_message_indicator(value_new_mt_message_indicator_report: boolean): boolean;
        unref(): void;
    }
    abstract class MessageWmsSetEventReportOutput {
        static $gtype: GObject.GType<MessageWmsSetEventReportOutput>;
        get_result(): boolean;
        ref(): MessageWmsSetEventReportOutput;
        unref(): void;
    }
    class MessageWmsSetRoutesInput {
        static $gtype: GObject.GType<MessageWmsSetRoutesInput>;
        constructor(properties?: Partial<{}>);
        static ["new"](): MessageWmsSetRoutesInput;
        get_route_list(): [boolean, MessageWmsSetRoutesInputRouteListElement[] | null];
        get_transfer_status_report(): [boolean, WmsTransferIndication | null];
        ref(): MessageWmsSetRoutesInput;
        set_route_list(value_route_list_ptr: MessageWmsSetRoutesInputRouteListElement[]): boolean;
        set_transfer_status_report(value_transfer_status_report: WmsTransferIndication): boolean;
        unref(): void;
    }
    class MessageWmsSetRoutesInputRouteListElement {
        static $gtype: GObject.GType<MessageWmsSetRoutesInputRouteListElement>;
        message_type: WmsMessageType;
        message_class: WmsMessageClass;
        storage: WmsStorageType;
        receipt_action: WmsReceiptAction;
    }
    abstract class MessageWmsSetRoutesOutput {
        static $gtype: GObject.GType<MessageWmsSetRoutesOutput>;
        get_result(): boolean;
        ref(): MessageWmsSetRoutesOutput;
        unref(): void;
    }
    class PhysicalSlotInformationSlot {
        static $gtype: GObject.GType<PhysicalSlotInformationSlot>;
        card_protocol: UimCardProtocol;
        valid_applications: number;
        atr_value: null[];
        is_euicc: boolean;
    }
    class PhysicalSlotStatusSlot {
        static $gtype: GObject.GType<PhysicalSlotStatusSlot>;
        physical_card_status: UimPhysicalCardState;
        physical_slot_status: UimSlotState;
        logical_slot: number;
        iccid: null[];
    }
    type ProxyClass = typeof Proxy;
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;
    }
    class SlotEidElement {
        static $gtype: GObject.GType<SlotEidElement>;
        eid: null[];
        constructor(properties?: Partial<{
            eid: null[];
        }>);
    }
    type Message = GLib.ByteArray;
    const __name__: string;
    const __version__: string;
}
export default Qmi;
}
declare module 'gi://Qmi' {
    import Qmi10 from 'gi://Qmi?version=1.0';
    export default Qmi10;
}
