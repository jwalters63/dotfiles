declare module 'gi://Mbim?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace Mbim {
    export namespace AccessMediaType {
        export const $gtype: GObject.GType<AccessMediaType>;
    }
    enum AccessMediaType {
        UNKNOWN,
        "3GPP",
        "3GPP_PREFERRED",
    }
    export namespace ActivationCommand {
        export const $gtype: GObject.GType<ActivationCommand>;
    }
    enum ActivationCommand {
        DEACTIVATE,
        ACTIVATE,
    }
    export namespace ActivationState {
        export const $gtype: GObject.GType<ActivationState>;
    }
    enum ActivationState {
        UNKNOWN,
        ACTIVATED,
        ACTIVATING,
        DEACTIVATED,
        DEACTIVATING,
    }
    export namespace AtdsProviderPlmnMode {
        export const $gtype: GObject.GType<AtdsProviderPlmnMode>;
    }
    enum AtdsProviderPlmnMode {
        GSM,
        UTRAN,
        LTE,
    }
    export namespace AtdsRatMode {
        export const $gtype: GObject.GType<AtdsRatMode>;
    }
    enum AtdsRatMode {
        AUTOMATIC,
        "2G_ONLY",
        "3G_ONLY",
        "4G_ONLY",
    }
    export namespace AuthProtocol {
        export const $gtype: GObject.GType<AuthProtocol>;
    }
    enum AuthProtocol {
        NONE,
        PAP,
        CHAP,
        MSCHAPV2,
    }
    export namespace CarrierLockCause {
        export const $gtype: GObject.GType<CarrierLockCause>;
    }
    enum CarrierLockCause {
        NOT_APPLICABLE,
        SIM_LOCK_POLICY_MISMATCH,
        SIM_LOCK_POLICY_MATCHED,
    }
    export namespace CarrierLockModemState {
        export const $gtype: GObject.GType<CarrierLockModemState>;
    }
    enum CarrierLockModemState {
        DEREGISTERED,
        DEREGISTRATION_IN_PROGRESS,
        REGISTRATION_IN_PROGRESS,
        REGISTERED,
    }
    export namespace CarrierLockStatus {
        export const $gtype: GObject.GType<CarrierLockStatus>;
    }
    enum CarrierLockStatus {
        NOT_APPLIED,
        APPLIED,
    }
    export namespace CidAtds {
        export const $gtype: GObject.GType<CidAtds>;
    }
    enum CidAtds {
        UNKNOWN,
        SIGNAL,
        LOCATION,
        OPERATORS,
        RAT,
        REGISTER_STATE,
    }
    export namespace CidAuth {
        export const $gtype: GObject.GType<CidAuth>;
    }
    enum CidAuth {
        UNKNOWN,
        AKA,
        AKAP,
        SIM,
    }
    export namespace CidBasicConnect {
        export const $gtype: GObject.GType<CidBasicConnect>;
    }
    enum CidBasicConnect {
        UNKNOWN,
        DEVICE_CAPS,
        SUBSCRIBER_READY_STATUS,
        RADIO_STATE,
        PIN,
        PIN_LIST,
        HOME_PROVIDER,
        PREFERRED_PROVIDERS,
        VISIBLE_PROVIDERS,
        REGISTER_STATE,
        PACKET_SERVICE,
        SIGNAL_STATE,
        CONNECT,
        PROVISIONED_CONTEXTS,
        SERVICE_ACTIVATION,
        IP_CONFIGURATION,
        DEVICE_SERVICES,
        DEVICE_SERVICE_SUBSCRIBE_LIST,
        PACKET_STATISTICS,
        NETWORK_IDLE_HINT,
        EMERGENCY_MODE,
        IP_PACKET_FILTERS,
        MULTICARRIER_PROVIDERS,
    }
    export namespace CidCompal {
        export const $gtype: GObject.GType<CidCompal>;
    }
    enum CidCompal {
        UNKNOWN,
        AT_COMMAND,
    }
    export namespace CidDss {
        export const $gtype: GObject.GType<CidDss>;
    }
    enum CidDss {
        UNKNOWN,
        CONNECT,
    }
    export namespace CidFibocom {
        export const $gtype: GObject.GType<CidFibocom>;
    }
    enum CidFibocom {
        UNKNOWN,
        AT_COMMAND,
    }
    export namespace CidGoogle {
        export const $gtype: GObject.GType<CidGoogle>;
    }
    enum CidGoogle {
        UNKNOWN,
        CARRIER_LOCK,
    }
    export namespace CidIntelAtTunnel {
        export const $gtype: GObject.GType<CidIntelAtTunnel>;
    }
    enum CidIntelAtTunnel {
        UNKNOWN,
        AT_COMMAND,
    }
    export namespace CidIntelFirmwareUpdate {
        export const $gtype: GObject.GType<CidIntelFirmwareUpdate>;
    }
    enum CidIntelFirmwareUpdate {
        UNKNOWN,
        MODEM_REBOOT,
    }
    export namespace CidIntelMutualAuthentication {
        export const $gtype: GObject.GType<CidIntelMutualAuthentication>;
    }
    enum CidIntelMutualAuthentication {
        UNKNOWN,
        FCC_LOCK,
    }
    export namespace CidIntelThermalRf {
        export const $gtype: GObject.GType<CidIntelThermalRf>;
    }
    enum CidIntelThermalRf {
        UNKNOWN,
        RFIM,
    }
    export namespace CidIntelTools {
        export const $gtype: GObject.GType<CidIntelTools>;
    }
    enum CidIntelTools {
        UNKNOWN,
        TRACE_CONFIG,
    }
    export namespace CidMsBasicConnectExtensions {
        export const $gtype: GObject.GType<CidMsBasicConnectExtensions>;
    }
    enum CidMsBasicConnectExtensions {
        UNKNOWN,
        PROVISIONED_CONTEXTS,
        NETWORK_DENYLIST,
        LTE_ATTACH_CONFIGURATION,
        LTE_ATTACH_INFO,
        SYS_CAPS,
        DEVICE_CAPS,
        DEVICE_SLOT_MAPPINGS,
        SLOT_INFO_STATUS,
        PCO,
        DEVICE_RESET,
        BASE_STATIONS_INFO,
        LOCATION_INFO_STATUS,
        VERSION,
        MODEM_CONFIGURATION,
        REGISTRATION_PARAMETERS,
        WAKE_REASON,
    }
    export namespace CidMsFirmwareId {
        export const $gtype: GObject.GType<CidMsFirmwareId>;
    }
    enum CidMsFirmwareId {
        UNKNOWN,
        GET,
    }
    export namespace CidMsHostShutdown {
        export const $gtype: GObject.GType<CidMsHostShutdown>;
    }
    enum CidMsHostShutdown {
        UNKNOWN,
        NOTIFY,
    }
    export namespace CidMsSar {
        export const $gtype: GObject.GType<CidMsSar>;
    }
    enum CidMsSar {
        UNKNOWN,
        CONFIG,
        TRANSMISSION_STATUS,
    }
    export namespace CidMsUiccLowLevelAccess {
        export const $gtype: GObject.GType<CidMsUiccLowLevelAccess>;
    }
    enum CidMsUiccLowLevelAccess {
        UNKNOWN,
        ATR,
        OPEN_CHANNEL,
        CLOSE_CHANNEL,
        APDU,
        TERMINAL_CAPABILITY,
        RESET,
        APPLICATION_LIST,
        FILE_STATUS,
        READ_BINARY,
        READ_RECORD,
    }
    export namespace CidMsVoiceExtensions {
        export const $gtype: GObject.GType<CidMsVoiceExtensions>;
    }
    enum CidMsVoiceExtensions {
        UNKNOWN,
        NITZ,
    }
    export namespace CidPhonebook {
        export const $gtype: GObject.GType<CidPhonebook>;
    }
    enum CidPhonebook {
        UNKNOWN,
        CONFIGURATION,
        READ,
        DELETE,
        WRITE,
    }
    export namespace CidProxyControl {
        export const $gtype: GObject.GType<CidProxyControl>;
    }
    enum CidProxyControl {
        UNKNOWN,
        CONFIGURATION,
        VERSION,
    }
    export namespace CidQdu {
        export const $gtype: GObject.GType<CidQdu>;
    }
    enum CidQdu {
        UNKNOWN,
        UPDATE_SESSION,
        FILE_OPEN,
        FILE_WRITE,
        QUECTEL_REBOOT,
        QUECTEL_READ_VERSION,
        COMMAND,
    }
    export namespace CidQmi {
        export const $gtype: GObject.GType<CidQmi>;
    }
    enum CidQmi {
        UNKNOWN,
        MSG,
    }
    export namespace CidQuectel {
        export const $gtype: GObject.GType<CidQuectel>;
    }
    enum CidQuectel {
        UNKNOWN,
        RADIO_STATE,
    }
    export namespace CidSms {
        export const $gtype: GObject.GType<CidSms>;
    }
    enum CidSms {
        UNKNOWN,
        CONFIGURATION,
        READ,
        SEND,
        DELETE,
        MESSAGE_STORE_STATUS,
    }
    export namespace CidStk {
        export const $gtype: GObject.GType<CidStk>;
    }
    enum CidStk {
        UNKNOWN,
        PAC,
        TERMINAL_RESPONSE,
        ENVELOPE,
    }
    export namespace CidUssd {
        export const $gtype: GObject.GType<CidUssd>;
    }
    enum CidUssd {
        USSD_UNKNOWN,
        USSD,
    }
    export namespace Compression {
        export const $gtype: GObject.GType<Compression>;
    }
    enum Compression {
        NONE,
        ENABLE,
    }
    export namespace ContextIpType {
        export const $gtype: GObject.GType<ContextIpType>;
    }
    enum ContextIpType {
        DEFAULT,
        IPV4,
        IPV6,
        IPV4V6,
        IPV4_AND_IPV6,
    }
    export namespace ContextMediaType {
        export const $gtype: GObject.GType<ContextMediaType>;
    }
    enum ContextMediaType {
        CELLULAR_ONLY,
        WIFI_ONLY,
        ALL,
    }
    export namespace ContextOperation {
        export const $gtype: GObject.GType<ContextOperation>;
    }
    enum ContextOperation {
        DEFAULT,
        DELETE,
        RESTORE_FACTORY,
    }
    export namespace ContextRoamingControl {
        export const $gtype: GObject.GType<ContextRoamingControl>;
    }
    enum ContextRoamingControl {
        HOME_ONLY,
        PARTNER_ONLY,
        NON_PARTNER_ONLY,
        HOME_AND_PARTNER,
        HOME_AND_NON_PARTNER,
        PARTNER_AND_NON_PARTNER,
        ALLOW_ALL,
    }
    export namespace ContextSource {
        export const $gtype: GObject.GType<ContextSource>;
    }
    enum ContextSource {
        ADMIN,
        USER,
        OPERATOR,
        MODEM,
        DEVICE,
    }
    export namespace ContextState {
        export const $gtype: GObject.GType<ContextState>;
    }
    enum ContextState {
        DISABLED,
        ENABLED,
    }
    export namespace ContextType {
        export const $gtype: GObject.GType<ContextType>;
    }
    enum ContextType {
        INVALID,
        NONE,
        INTERNET,
        VPN,
        VOICE,
        VIDEO_SHARE,
        PURCHASE,
        IMS,
        MMS,
        LOCAL,
        ADMIN,
        APP,
        XCAP,
        TETHERING,
        EMERGENCY_CALLING,
    }
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static WRONGSTATE: number;
        static TIMEOUT: number;
        static INVALIDARGS: number;
        static INVALIDMESSAGE: number;
        static UNSUPPORTED: number;
        static ABORTED: number;
        static UNKNOWNSTATE: number;
        static INCOMPLETEMESSAGE: number;
        constructor(options: { message: string; code: number });
        static get_string(val: CoreError): string;
        static quark(): GLib.Quark;
    }
    export namespace DefaultPduActivationHint {
        export const $gtype: GObject.GType<DefaultPduActivationHint>;
    }
    enum DefaultPduActivationHint {
        UNLIKELY,
        LIKELY,
    }
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }
    enum DeviceType {
        UNKNOWN,
        EMBEDDED,
        REMOVABLE,
        REMOTE,
    }
    class DrxCycle {
        static $gtype: GObject.GType<DrxCycle>;
        static NOT_SPECIFIED: number;
        static NOT_SUPPORTED: number;
        static "32": number;
        static "64": number;
        static "128": number;
        static "256": number;
    }
    export namespace DssLinkState {
        export const $gtype: GObject.GType<DssLinkState>;
    }
    enum DssLinkState {
        DEACTIVATE,
        ACTIVATE,
    }
    export namespace EmergencyModeState {
        export const $gtype: GObject.GType<EmergencyModeState>;
    }
    enum EmergencyModeState {
        OFF,
        ON,
    }
    export namespace IntelBootMode {
        export const $gtype: GObject.GType<IntelBootMode>;
    }
    enum IntelBootMode {
        NORMAL_MODE,
        DOWNLOAD_MODE,
        POWER_OFF_DEVICE,
        NON_RESETABLE_REGISTER,
        WITHOUT_REBOOT_POWER_OFF,
        FAST_DOWNLOAD_MODE,
    }
    export namespace IntelServingCellInfo {
        export const $gtype: GObject.GType<IntelServingCellInfo>;
    }
    enum IntelServingCellInfo {
        PCELL,
        SCELL,
        PSCELL,
        SSCELL,
        RADIO_OFF,
    }
    export namespace LadnInfo {
        export const $gtype: GObject.GType<LadnInfo>;
    }
    enum LadnInfo {
        NOT_NEEDED,
        REQUESTED,
    }
    export namespace LteAttachContextOperation {
        export const $gtype: GObject.GType<LteAttachContextOperation>;
    }
    enum LteAttachContextOperation {
        DEFAULT,
        RESTORE_FACTORY,
    }
    export namespace LteAttachContextRoamingControl {
        export const $gtype: GObject.GType<LteAttachContextRoamingControl>;
    }
    enum LteAttachContextRoamingControl {
        HOME,
        PARTNER,
        NON_PARTNER,
    }
    export namespace LteAttachState {
        export const $gtype: GObject.GType<LteAttachState>;
    }
    enum LteAttachState {
        DETACHED,
        ATTACHED,
    }
    export namespace MessageCommandType {
        export const $gtype: GObject.GType<MessageCommandType>;
    }
    enum MessageCommandType {
        UNKNOWN,
        QUERY,
        SET,
    }
    export namespace MessageType {
        export const $gtype: GObject.GType<MessageType>;
    }
    enum MessageType {
        INVALID,
        OPEN,
        CLOSE,
        COMMAND,
        HOST_ERROR,
        OPEN_DONE,
        CLOSE_DONE,
        COMMAND_DONE,
        FUNCTION_ERROR,
        INDICATE_STATUS,
    }
    export namespace MicoMode {
        export const $gtype: GObject.GType<MicoMode>;
    }
    enum MicoMode {
        DISABLED,
        ENABLED,
        UNSUPPORTED,
        DEFAULT,
    }
    export namespace ModemConfigurationStatus {
        export const $gtype: GObject.GType<ModemConfigurationStatus>;
    }
    enum ModemConfigurationStatus {
        UNKNOWN,
        STARTED,
        COMPLETED,
    }
    export namespace NetworkIdleHintState {
        export const $gtype: GObject.GType<NetworkIdleHintState>;
    }
    enum NetworkIdleHintState {
        DISABLED,
        ENABLED,
    }
    export namespace NwError {
        export const $gtype: GObject.GType<NwError>;
    }
    enum NwError {
        NONE,
        IMSI_UNKNOWN_IN_HLR,
        ILLEGAL_MS,
        IMSI_UNKNOWN_IN_VLR,
        IMEI_NOT_ACCEPTED,
        ILLEGAL_ME,
        GPRS_NOT_ALLOWED,
        GPRS_AND_NON_GPRS_NOT_ALLOWED,
        MS_IDENTITY_NOT_DERIVED_BY_NETWORK,
        IMPLICITLY_DETACHED,
        PLMN_NOT_ALLOWED,
        LOCATION_AREA_NOT_ALLOWED,
        ROAMING_NOT_ALLOWED_IN_LOCATION_AREA,
        GPRS_NOT_ALLOWED_IN_PLMN,
        NO_CELLS_IN_LOCATION_AREA,
        MSC_TEMPORARILY_NOT_REACHABLE,
        NETWORK_FAILURE,
        MAC_FAILURE,
        SYNCH_FAILURE,
        CONGESTION,
        GSM_AUTHENTICATION_UNACCEPTABLE,
        NOT_AUTHORIZED_FOR_CSG,
        INSUFFICIENT_RESOURCES,
        MISSING_OR_UNKNOWN_APN,
        UNKNOWN_PDP_ADDRESS_OR_TYPE,
        USER_AUTHENTICATION_FAILED,
        ACTIVATION_REJECTED_BY_GGSN_OR_GW,
        ACTIVATION_REJECTED_UNSPECIFIED,
        SERVICE_OPTION_NOT_SUPPORTED,
        REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
        SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
        NO_PDP_CONTEXT_ACTIVATED,
        SEMANTIC_ERROR_IN_THE_TFT_OPERATION,
        SYNTACTICAL_ERROR_IN_THE_TFT_OPERATION,
        UNKNOWN_PDP_CONTEXT,
        SEMANTIC_ERRORS_IN_PACKET_FILTER,
        SYNTACTICAL_ERRORS_IN_PACKET_FILTER,
        PDP_CONTEXT_WITHOUT_TFT_ALREADY_ACTIVATED,
        REQUEST_REJECTED_OR_BEARER_CONTROL_MODE_VIOLATION,
        LAST_PDN_DISCONNECTION_NOT_ALLOWED,
        PDP_TYPE_IPV4_ONLY_ALLOWED,
        PDP_TYPE_IPV6_ONLY_ALLOWED,
        NO_NETWORK_SLICES_AVAILABLE,
        MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED,
        REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN,
        INSUFFICIENT_RESOURCES_FOR_SPECIFIC_SLICE_AND_DNN,
        INSUFFICIENT_RESOURCES_FOR_SPECIFIC_SLICE,
        NGKSI_ALREADY_IN_USE,
        NON_3GPP_ACCESS_TO_5GCN_NOT_ALLOWED,
        SERVING_NETWORK_NOT_AUTHORIZED,
        TEMPORARILY_NOT_AUTHORIZED_FOR_THIS_SNPN,
        PERMANENTLY_NOT_AUTHORIZED_FOR_THIS_SNPN,
        NOT_AUTHORIZED_FOR_THIS_CAG_OR_AUTHORIZED_FOR_CAG_CELLS_ONLY,
        WIRELINE_ACCESS_AREA_NOT_ALLOWED,
        PAYLOAD_WAS_NOT_FORWARDED,
        DNN_NOT_SUPPORTED_OR_NOT_SUBSCRIBED_IN_THE_SLICE,
        INSUFFICIENT_USER_PLANE_RESOURCES_FOR_THE_PDU_SESSION,
        SEMANTICALLY_INCORRECT_MESSAGE,
        INVALID_MANDATORY_INFORMATION,
        MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED,
        MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
        INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED,
        CONDITIONAL_IE_ERROR,
        MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
        PROTOCOL_ERROR_UNSPECIFIED,
        APN_RESTRICTION_VALUE_INCOMPATIBLE_WITH_ACTIVE_PDP_CONTEXT,
        MULTIPLE_ACCESSES_TO_A_PDN_CONNECTION_NOT_ALLOWED,
    }
    export namespace PacketServiceAction {
        export const $gtype: GObject.GType<PacketServiceAction>;
    }
    enum PacketServiceAction {
        ATTACH,
        DETACH,
    }
    export namespace PacketServiceState {
        export const $gtype: GObject.GType<PacketServiceState>;
    }
    enum PacketServiceState {
        UNKNOWN,
        ATTACHING,
        ATTACHED,
        DETACHING,
        DETACHED,
    }
    export namespace PcoType {
        export const $gtype: GObject.GType<PcoType>;
    }
    enum PcoType {
        COMPLETE,
        PARTIAL,
    }
    export namespace PhonebookFlag {
        export const $gtype: GObject.GType<PhonebookFlag>;
    }
    enum PhonebookFlag {
        ALL,
        INDEX,
    }
    export namespace PhonebookState {
        export const $gtype: GObject.GType<PhonebookState>;
    }
    enum PhonebookState {
        NOT_INITIALIZED,
        INITIALIZED,
    }
    export namespace PhonebookWriteFlag {
        export const $gtype: GObject.GType<PhonebookWriteFlag>;
    }
    enum PhonebookWriteFlag {
        UNUSED,
        INDEX,
    }
    export namespace PinFormat {
        export const $gtype: GObject.GType<PinFormat>;
    }
    enum PinFormat {
        UNKNOWN,
        NUMERIC,
        ALPHANUMERIC,
    }
    export namespace PinMode {
        export const $gtype: GObject.GType<PinMode>;
    }
    enum PinMode {
        NOT_SUPPORTED,
        ENABLED,
        DISABLED,
    }
    export namespace PinOperation {
        export const $gtype: GObject.GType<PinOperation>;
    }
    enum PinOperation {
        ENTER,
        ENABLE,
        DISABLE,
        CHANGE,
    }
    export namespace PinState {
        export const $gtype: GObject.GType<PinState>;
    }
    enum PinState {
        UNLOCKED,
        LOCKED,
    }
    export namespace PinType {
        export const $gtype: GObject.GType<PinType>;
    }
    enum PinType {
        UNKNOWN,
        CUSTOM,
        PIN1,
        PIN2,
        DEVICE_SIM_PIN,
        DEVICE_FIRST_SIM_PIN,
        NETWORK_PIN,
        NETWORK_SUBSET_PIN,
        SERVICE_PROVIDER_PIN,
        CORPORATE_PIN,
        SUBSIDY_PIN,
        PUK1,
        PUK2,
        DEVICE_FIRST_SIM_PUK,
        NETWORK_PUK,
        NETWORK_SUBSET_PUK,
        SERVICE_PROVIDER_PUK,
        CORPORATE_PUK,
        NEV,
        ADM,
    }
    class ProtocolError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static INVALID: number;
        static TIMEOUTFRAGMENT: number;
        static FRAGMENTOUTOFSEQUENCE: number;
        static LENGTHMISMATCH: number;
        static DUPLICATEDTID: number;
        static NOTOPENED: number;
        static UNKNOWN: number;
        static CANCEL: number;
        static MAXTRANSFER: number;
        constructor(options: { message: string; code: number });
        static get_string(val: ProtocolError): string;
        static quark(): GLib.Quark;
    }
    export namespace QduFileType {
        export const $gtype: GObject.GType<QduFileType>;
    }
    enum QduFileType {
        PACKAGE,
    }
    export namespace QduQuectelRebootType {
        export const $gtype: GObject.GType<QduQuectelRebootType>;
    }
    enum QduQuectelRebootType {
        EDL,
    }
    export namespace QduQuectelVersionType {
        export const $gtype: GObject.GType<QduQuectelVersionType>;
    }
    enum QduQuectelVersionType {
        ID,
    }
    export namespace QduSessionAction {
        export const $gtype: GObject.GType<QduSessionAction>;
    }
    enum QduSessionAction {
        START,
        STOP,
    }
    export namespace QduSessionResult {
        export const $gtype: GObject.GType<QduSessionResult>;
    }
    enum QduSessionResult {
        SUCCESS,
        FAILURE,
    }
    export namespace QduSessionStatus {
        export const $gtype: GObject.GType<QduSessionStatus>;
    }
    enum QduSessionStatus {
        INACTIVE,
        FILE_TRANSFER,
        APPLY_UPDATE,
    }
    export namespace QduSessionType {
        export const $gtype: GObject.GType<QduSessionType>;
    }
    enum QduSessionType {
        NONE,
        LE,
    }
    export namespace QuectelCommandResponseStatus {
        export const $gtype: GObject.GType<QuectelCommandResponseStatus>;
    }
    enum QuectelCommandResponseStatus {
        OK,
        FAIL,
    }
    export namespace QuectelCommandType {
        export const $gtype: GObject.GType<QuectelCommandType>;
    }
    enum QuectelCommandType {
        AT,
        SYSTEM,
    }
    export namespace QuectelRadioSwitchState {
        export const $gtype: GObject.GType<QuectelRadioSwitchState>;
    }
    enum QuectelRadioSwitchState {
        OFF,
        ON,
        FCC_LOCKED,
    }
    export namespace RadioSwitchState {
        export const $gtype: GObject.GType<RadioSwitchState>;
    }
    enum RadioSwitchState {
        OFF,
        ON,
    }
    export namespace RegisterAction {
        export const $gtype: GObject.GType<RegisterAction>;
    }
    enum RegisterAction {
        AUTOMATIC,
        MANUAL,
    }
    export namespace RegisterMode {
        export const $gtype: GObject.GType<RegisterMode>;
    }
    enum RegisterMode {
        UNKNOWN,
        AUTOMATIC,
        MANUAL,
    }
    export namespace RegisterState {
        export const $gtype: GObject.GType<RegisterState>;
    }
    enum RegisterState {
        UNKNOWN,
        DEREGISTERED,
        SEARCHING,
        HOME,
        ROAMING,
        PARTNER,
        DENIED,
    }
    export namespace SarBackoffState {
        export const $gtype: GObject.GType<SarBackoffState>;
    }
    enum SarBackoffState {
        DISABLED,
        ENABLED,
    }
    export namespace SarControlMode {
        export const $gtype: GObject.GType<SarControlMode>;
    }
    enum SarControlMode {
        DEVICE,
        OS,
    }
    export namespace SarWifiHardwareState {
        export const $gtype: GObject.GType<SarWifiHardwareState>;
    }
    enum SarWifiHardwareState {
        INTEGRATED,
        NOT_INTEGRATED,
    }
    export namespace Service {
        export const $gtype: GObject.GType<Service>;
    }
    enum Service {
        INVALID,
        BASIC_CONNECT,
        SMS,
        USSD,
        PHONEBOOK,
        STK,
        AUTH,
        DSS,
        MS_FIRMWARE_ID,
        MS_HOST_SHUTDOWN,
        PROXY_CONTROL,
        QMI,
        ATDS,
        INTEL_FIRMWARE_UPDATE,
        MS_BASIC_CONNECT_EXTENSIONS,
        MS_SAR,
        QDU,
        MS_UICC_LOW_LEVEL_ACCESS,
        QUECTEL,
        INTEL_THERMAL_RF,
        MS_VOICE_EXTENSIONS,
        INTEL_MUTUAL_AUTHENTICATION,
        INTEL_TOOLS,
        GOOGLE,
        FIBOCOM,
        COMPAL,
        INTEL_AT_TUNNEL,
    }
    export namespace SmsCdmaEncoding {
        export const $gtype: GObject.GType<SmsCdmaEncoding>;
    }
    enum SmsCdmaEncoding {
        OCTET,
        EPM,
        "7BIT_ASCII",
        LA5,
        UNICODE,
        SHIFT_JIS,
        KOREAN,
        LATIN_HEBREW,
        LATIN,
        GSM_7BIT,
    }
    export namespace SmsCdmaLang {
        export const $gtype: GObject.GType<SmsCdmaLang>;
    }
    enum SmsCdmaLang {
        UNKNOWN,
        ENGLISH,
        FRENCH,
        SPANISH,
        JAPANESE,
        KOREAN,
        CHINESE,
        HEBREW,
    }
    export namespace SmsFlag {
        export const $gtype: GObject.GType<SmsFlag>;
    }
    enum SmsFlag {
        ALL,
        INDEX,
        NEW,
        OLD,
        SENT,
        DRAFT,
    }
    export namespace SmsFormat {
        export const $gtype: GObject.GType<SmsFormat>;
    }
    enum SmsFormat {
        PDU,
        CDMA,
    }
    export namespace SmsStatus {
        export const $gtype: GObject.GType<SmsStatus>;
    }
    enum SmsStatus {
        NEW,
        OLD,
        DRAFT,
        SENT,
    }
    export namespace SmsStorageState {
        export const $gtype: GObject.GType<SmsStorageState>;
    }
    enum SmsStorageState {
        NOT_INITIALIZED,
        INITIALIZED,
    }
    class StatusError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NONE: number;
        static BUSY: number;
        static FAILURE: number;
        static SIMNOTINSERTED: number;
        static BADSIM: number;
        static PINREQUIRED: number;
        static PINDISABLED: number;
        static NOTREGISTERED: number;
        static PROVIDERSNOTFOUND: number;
        static NODEVICESUPPORT: number;
        static PROVIDERNOTVISIBLE: number;
        static DATACLASSNOTAVAILABLE: number;
        static PACKETSERVICEDETACHED: number;
        static MAXACTIVATEDCONTEXTS: number;
        static NOTINITIALIZED: number;
        static VOICECALLINPROGRESS: number;
        static CONTEXTNOTACTIVATED: number;
        static SERVICENOTACTIVATED: number;
        static INVALIDACCESSSTRING: number;
        static INVALIDUSERNAMEPWD: number;
        static RADIOPOWEROFF: number;
        static INVALIDPARAMETERS: number;
        static READFAILURE: number;
        static WRITEFAILURE: number;
        static NOPHONEBOOK: number;
        static PARAMETERTOOLONG: number;
        static STKBUSY: number;
        static OPERATIONNOTALLOWED: number;
        static MEMORYFAILURE: number;
        static INVALIDMEMORYINDEX: number;
        static MEMORYFULL: number;
        static FILTERNOTSUPPORTED: number;
        static DSSINSTANCELIMIT: number;
        static INVALIDDEVICESERVICEOPERATION: number;
        static AUTHINCORRECTAUTH: number;
        static AUTHSYNCFAILURE: number;
        static AUTHAMFNOTSET: number;
        static CONTEXTNOTSUPPORTED: number;
        static SMSUNKNOWNSMSCADDRESS: number;
        static SMSNETWORKTIMEOUT: number;
        static SMSLANGNOTSUPPORTED: number;
        static SMSENCODINGNOTSUPPORTED: number;
        static SMSFORMATNOTSUPPORTED: number;
        static NOLOGICALCHANNELS: number;
        static SELECTFAILED: number;
        static INVALIDLOGICALCHANNEL: number;
        static INVALIDSIGNATURE: number;
        static INVALIDIMEI: number;
        static INVALIDTIMESTAMP: number;
        static NETWORKLISTTOOLARGE: number;
        static SIGNATUREALGORITHMNOTSUPPORTED: number;
        static FEATURENOTSUPPORTED: number;
        static DECODEORPARSINGERROR: number;
        constructor(options: { message: string; code: number });
        static get_string(val: StatusError): string;
        static quark(): GLib.Quark;
    }
    export namespace StkPacProfile {
        export const $gtype: GObject.GType<StkPacProfile>;
    }
    enum StkPacProfile {
        NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST,
        NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST,
        HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST,
        HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE,
        HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED,
        HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST,
        HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE,
        HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE,
    }
    export namespace StkPacType {
        export const $gtype: GObject.GType<StkPacType>;
    }
    enum StkPacType {
        PROACTIVE_COMMAND,
        NOTIFICATION,
    }
    export namespace SubscriberReadyState {
        export const $gtype: GObject.GType<SubscriberReadyState>;
    }
    enum SubscriberReadyState {
        NOT_INITIALIZED,
        INITIALIZED,
        SIM_NOT_INSERTED,
        BAD_SIM,
        FAILURE,
        NOT_ACTIVATED,
        DEVICE_LOCKED,
        NO_ESIM_PROFILE,
    }
    export namespace TlvType {
        export const $gtype: GObject.GType<TlvType>;
    }
    enum TlvType {
        INVALID,
        UE_POLICITES,
        SINGLE_NSSAI,
        ALLOWED_NSSAI,
        CFG_NSSAI,
        DFLT_CFG_NSSAI,
        PRECFG_DFLT_CFG_NSSAI,
        REJ_NSSAI,
        LADN,
        TAI,
        WCHAR_STR,
        UINT16_TBL,
        EAP_PACKET,
        PCO,
        ROUTE_SELECTION_DESCRIPTORS,
        TRAFFIC_PARAMETERS,
        WAKE_COMMAND,
        WAKE_PACKET,
    }
    export namespace TraceCommand {
        export const $gtype: GObject.GType<TraceCommand>;
    }
    enum TraceCommand {
        MODE,
        LEVEL,
        LOCATION,
        FLASH_INTERVAL,
    }
    export namespace TransmissionNotificationStatus {
        export const $gtype: GObject.GType<TransmissionNotificationStatus>;
    }
    enum TransmissionNotificationStatus {
        DISABLED,
        ENABLED,
    }
    export namespace TransmissionState {
        export const $gtype: GObject.GType<TransmissionState>;
    }
    enum TransmissionState {
        INACTIVE,
        ACTIVE,
    }
    export namespace UiccApplicationType {
        export const $gtype: GObject.GType<UiccApplicationType>;
    }
    enum UiccApplicationType {
        UNKNOWN,
        MF,
        MF_SIM,
        MF_RUIM,
        USIM,
        CSIM,
        ISIM,
    }
    export namespace UiccClassByteType {
        export const $gtype: GObject.GType<UiccClassByteType>;
    }
    enum UiccClassByteType {
        INTER_INDUSTRY,
        EXTENDED,
    }
    export namespace UiccFileAccessibility {
        export const $gtype: GObject.GType<UiccFileAccessibility>;
    }
    enum UiccFileAccessibility {
        UNKNOWN,
        NOT_SHAREABLE,
        SHAREABLE,
    }
    export namespace UiccFileStructure {
        export const $gtype: GObject.GType<UiccFileStructure>;
    }
    enum UiccFileStructure {
        UNKNOWN,
        TRANSPARENT,
        CYCLIC,
        LINEAR,
        BER_TLV,
    }
    export namespace UiccFileType {
        export const $gtype: GObject.GType<UiccFileType>;
    }
    enum UiccFileType {
        UNKNOWN,
        WORKING_EF,
        INTERNAL_EF,
        DF_OR_ADF,
    }
    export namespace UiccPassThroughAction {
        export const $gtype: GObject.GType<UiccPassThroughAction>;
    }
    enum UiccPassThroughAction {
        DISABLE,
        ENABLE,
    }
    export namespace UiccPassThroughStatus {
        export const $gtype: GObject.GType<UiccPassThroughStatus>;
    }
    enum UiccPassThroughStatus {
        DISABLED,
        ENABLED,
    }
    export namespace UiccSecureMessaging {
        export const $gtype: GObject.GType<UiccSecureMessaging>;
    }
    enum UiccSecureMessaging {
        NONE,
        NO_HDR_AUTH,
    }
    export namespace UiccSlotState {
        export const $gtype: GObject.GType<UiccSlotState>;
    }
    enum UiccSlotState {
        STATE_UNKNOWN,
        SATE_OFF_EMPTY,
        STATE_OFF,
        STATE_EMPTY,
        STATE_NOT_READY,
        STATE_ACTIVE,
        STATE_ERROR,
        STATE_ACTIVE_ESIM,
        STATE_ACTIVE_ESIM_NO_PROFILES,
    }
    export namespace UssdAction {
        export const $gtype: GObject.GType<UssdAction>;
    }
    enum UssdAction {
        INITIATE,
        CONTINUE,
        CANCEL,
    }
    export namespace UssdResponse {
        export const $gtype: GObject.GType<UssdResponse>;
    }
    enum UssdResponse {
        NO_ACTION_REQUIRED,
        ACTION_REQUIRED,
        TERMINATED_BY_NETWORK,
        OTHER_LOCAL_CLIENT,
        OPERATION_NOT_SUPPORTED,
        NETWORK_TIMEOUT,
    }
    export namespace UssdSessionState {
        export const $gtype: GObject.GType<UssdSessionState>;
    }
    enum UssdSessionState {
        NEW_SESSION,
        EXISTING_SESSION,
    }
    export namespace VisibleProvidersAction {
        export const $gtype: GObject.GType<VisibleProvidersAction>;
    }
    enum VisibleProvidersAction {
        FULL_SCAN,
        RESTRICTED_SCAN,
    }
    export namespace VoiceCallState {
        export const $gtype: GObject.GType<VoiceCallState>;
    }
    enum VoiceCallState {
        NONE,
        IN_PROGRESS,
        HANG_UP,
    }
    export namespace VoiceClass {
        export const $gtype: GObject.GType<VoiceClass>;
    }
    enum VoiceClass {
        UNKNOWN,
        NO_VOICE,
        SEPARATED_VOICE_DATA,
        SIMULTANEOUS_VOICE_DATA,
    }
    export namespace WakeType {
        export const $gtype: GObject.GType<WakeType>;
    }
    enum WakeType {
        CID_RESPONSE,
        CID_INDICATION,
        PACKET,
    }
    const DBUS_ERROR_PREFIX: string;
    const DEVICE_CONSECUTIVE_TIMEOUTS: string;
    const DEVICE_FILE: string;
    const DEVICE_IN_SESSION: string;
    const DEVICE_SESSION_ID_MAX: number;
    const DEVICE_SESSION_ID_MIN: number;
    const DEVICE_SIGNAL_ERROR: string;
    const DEVICE_SIGNAL_INDICATE_STATUS: string;
    const DEVICE_SIGNAL_REMOVED: string;
    const DEVICE_TRANSACTION_ID: string;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PROXY_N_CLIENTS: string;
    const PROXY_N_DEVICES: string;
    const PROXY_SOCKET_PATH: string;
    function access_media_type_get_string(val: AccessMediaType): string;
    function activation_command_get_string(val: ActivationCommand): string;
    function activation_state_get_string(val: ActivationState): string;
    function atds_provider_array_free(array: AtdsProviderArray): void;
    function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string;
    function atds_rat_mode_get_string(val: AtdsRatMode): string;
    function auth_protocol_get_string(val: AuthProtocol): string;
    function carrier_lock_cause_get_string(val: CarrierLockCause): string;
    function carrier_lock_modem_state_get_string(val: CarrierLockModemState): string;
    function carrier_lock_status_get_string(val: CarrierLockStatus): string;
    function cell_info_cdma_array_free(array: CellInfoCdmaArray): void;
    function cell_info_neighboring_gsm_array_free(array: CellInfoNeighboringGsmArray): void;
    function cell_info_neighboring_lte_array_free(array: CellInfoNeighboringLteArray): void;
    function cell_info_neighboring_nr_array_free(array: CellInfoNeighboringNrArray): void;
    function cell_info_neighboring_tdscdma_array_free(array: CellInfoNeighboringTdscdmaArray): void;
    function cell_info_neighboring_umts_array_free(array: CellInfoNeighboringUmtsArray): void;
    function cell_info_serving_nr_array_free(array: CellInfoServingNrArray): void;
    function cellular_class_build_string_from_mask(mask: CellularClass): string;
    function cid_atds_get_string(val: CidAtds): string;
    function cid_auth_get_string(val: CidAuth): string;
    function cid_basic_connect_get_string(val: CidBasicConnect): string;
    function cid_can_notify(service: Service, cid: number): boolean;
    function cid_can_query(service: Service, cid: number): boolean;
    function cid_can_set(service: Service, cid: number): boolean;
    function cid_compal_get_string(val: CidCompal): string;
    function cid_dss_get_string(val: CidDss): string;
    function cid_fibocom_get_string(val: CidFibocom): string;
    function cid_get_printable(service: Service, cid: number): string;
    function cid_google_get_string(val: CidGoogle): string;
    function cid_intel_at_tunnel_get_string(val: CidIntelAtTunnel): string;
    function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string;
    function cid_intel_mutual_authentication_get_string(val: CidIntelMutualAuthentication): string;
    function cid_intel_thermal_rf_get_string(val: CidIntelThermalRf): string;
    function cid_intel_tools_get_string(val: CidIntelTools): string;
    function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string;
    function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string;
    function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string;
    function cid_ms_sar_get_string(val: CidMsSar): string;
    function cid_ms_uicc_low_level_access_get_string(val: CidMsUiccLowLevelAccess): string;
    function cid_ms_voice_extensions_get_string(val: CidMsVoiceExtensions): string;
    function cid_phonebook_get_string(val: CidPhonebook): string;
    function cid_proxy_control_get_string(val: CidProxyControl): string;
    function cid_qdu_get_string(val: CidQdu): string;
    function cid_qmi_get_string(val: CidQmi): string;
    function cid_quectel_get_string(val: CidQuectel): string;
    function cid_sms_get_string(val: CidSms): string;
    function cid_stk_get_string(val: CidStk): string;
    function cid_ussd_get_string(val: CidUssd): string;
    function compression_get_string(val: Compression): string;
    function context_ip_type_get_string(val: ContextIpType): string;
    function context_media_type_get_string(val: ContextMediaType): string;
    function context_operation_get_string(val: ContextOperation): string;
    function context_roaming_control_get_string(val: ContextRoamingControl): string;
    function context_source_get_string(val: ContextSource): string;
    function context_state_get_string(val: ContextState): string;
    function context_type_get_string(val: ContextType): string;
    function core_error_get_string(val: CoreError): string;
    function core_error_quark(): GLib.Quark;
    function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string;
    function data_class_build_string_from_mask(mask: DataClass): string;
    function data_class_v3_build_string_from_mask(mask: DataClassV3): string;
    function data_subclass_build_string_from_mask(mask: DataSubclass): string;
    function default_pdu_activation_hint_get_string(val: DefaultPduActivationHint): string;
    function device_service_element_array_free(array: DeviceServiceElementArray): void;
    function device_type_get_string(val: DeviceType): string;
    function drx_cycle_get_string(val: DrxCycle): string;
    function dss_link_state_get_string(val: DssLinkState): string;
    function emergency_mode_state_get_string(val: EmergencyModeState): string;
    function event_entry_array_free(array: EventEntryArray): void;
    function frequency_range_build_string_from_mask(mask: FrequencyRange): string;
    function intel_boot_mode_get_string(val: IntelBootMode): string;
    function intel_rfim_frequency_value_array_free(array: IntelRfimFrequencyValueArray): void;
    function intel_serving_cell_info_get_string(val: IntelServingCellInfo): string;
    function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string;
    function ipv4_element_array_free(array: IPv4ElementArray): void;
    function ipv6_element_array_free(array: IPv6ElementArray): void;
    function ladn_info_get_string(val: LadnInfo): string;
    function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void;
    function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string;
    function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string;
    function lte_attach_state_get_string(val: LteAttachState): string;
    function lte_attach_status_free(_var: DeprecatedLteAttachStatus): void;
    function message_command_type_get_string(val: MessageCommandType): string;
    function message_type_get_string(val: MessageType): string;
    function mico_mode_get_string(val: MicoMode): string;
    function modem_configuration_status_get_string(val: ModemConfigurationStatus): string;
    function network_idle_hint_state_get_string(val: NetworkIdleHintState): string;
    function nw_error_get_string(val: NwError): string;
    function packet_filter_array_free(array: PacketFilterArray): void;
    function packet_filter_v3_array_free(array: PacketFilterV3Array): void;
    function packet_service_action_get_string(val: PacketServiceAction): string;
    function packet_service_state_get_string(val: PacketServiceState): string;
    function pco_type_get_string(val: PcoType): string;
    function phonebook_entry_array_free(array: PhonebookEntryArray): void;
    function phonebook_flag_get_string(val: PhonebookFlag): string;
    function phonebook_state_get_string(val: PhonebookState): string;
    function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string;
    function pin_format_get_string(val: PinFormat): string;
    function pin_mode_get_string(val: PinMode): string;
    function pin_operation_get_string(val: PinOperation): string;
    function pin_state_get_string(val: PinState): string;
    function pin_type_get_string(val: PinType): string;
    function protocol_error_get_string(val: ProtocolError): string;
    function protocol_error_quark(): GLib.Quark;
    function provider_array_free(array: ProviderArray): void;
    function provider_state_build_string_from_mask(mask: ProviderState): string;
    function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void;
    function provisioned_context_element_v2_array_free(array: ProvisionedContextElementV2Array): void;
    function qdu_file_type_get_string(val: QduFileType): string;
    function qdu_quectel_reboot_type_get_string(val: QduQuectelRebootType): string;
    function qdu_quectel_version_type_get_string(val: QduQuectelVersionType): string;
    function qdu_session_action_get_string(val: QduSessionAction): string;
    function qdu_session_result_get_string(val: QduSessionResult): string;
    function qdu_session_status_get_string(val: QduSessionStatus): string;
    function qdu_session_type_get_string(val: QduSessionType): string;
    function quectel_command_response_status_get_string(val: QuectelCommandResponseStatus): string;
    function quectel_command_type_get_string(val: QuectelCommandType): string;
    function quectel_radio_switch_state_get_string(val: QuectelRadioSwitchState): string;
    function radio_switch_state_get_string(val: RadioSwitchState): string;
    function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string;
    function register_action_get_string(val: RegisterAction): string;
    function register_custom_service(uuid: Uuid, nickname: string): number;
    function register_mode_get_string(val: RegisterMode): string;
    function register_state_get_string(val: RegisterState): string;
    function registration_flag_build_string_from_mask(mask: RegistrationFlag): string;
    function rsrp_snr_info_array_free(array: RsrpSnrInfoArray): void;
    function sar_backoff_state_get_string(val: SarBackoffState): string;
    function sar_config_state_array_free(array: SarConfigStateArray): void;
    function sar_control_mode_get_string(val: SarControlMode): string;
    function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string;
    function service_get_string(val: Service): string;
    function service_id_is_custom(id: number): boolean;
    function service_lookup_name(service: number): string;
    function sim_class_build_string_from_mask(mask: SimClass): string;
    function slot_array_free(array: SlotArray): void;
    function sms_caps_build_string_from_mask(mask: SmsCaps): string;
    function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string;
    function sms_cdma_lang_get_string(val: SmsCdmaLang): string;
    function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void;
    function sms_flag_get_string(val: SmsFlag): string;
    function sms_format_get_string(val: SmsFormat): string;
    function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void;
    function sms_status_flag_build_string_from_mask(mask: SmsStatusFlag): string;
    function sms_status_flag_get_string(val: SmsStatusFlag): string;
    function sms_status_get_string(val: SmsStatus): string;
    function sms_storage_state_get_string(val: SmsStorageState): string;
    function status_error_get_string(val: StatusError): string;
    function status_error_quark(): GLib.Quark;
    function stk_pac_profile_get_string(val: StkPacProfile): string;
    function stk_pac_type_get_string(val: StkPacType): string;
    function subscriber_ready_state_get_string(val: SubscriberReadyState): string;
    function subscriber_ready_status_flag_build_string_from_mask(mask: SubscriberReadyStatusFlag): string;
    function terminal_capability_info_array_free(array: TerminalCapabilityInfoArray): void;
    function tlv_type_get_string(val: TlvType): string;
    function trace_command_get_string(val: TraceCommand): string;
    function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string;
    function transmission_state_get_string(val: TransmissionState): string;
    function uicc_application_array_free(array: UiccApplicationArray): void;
    function uicc_application_type_get_string(val: UiccApplicationType): string;
    function uicc_class_byte_type_get_string(val: UiccClassByteType): string;
    function uicc_file_accessibility_get_string(val: UiccFileAccessibility): string;
    function uicc_file_structure_get_string(val: UiccFileStructure): string;
    function uicc_file_type_get_string(val: UiccFileType): string;
    function uicc_pass_through_action_get_string(val: UiccPassThroughAction): string;
    function uicc_pass_through_status_get_string(val: UiccPassThroughStatus): string;
    function uicc_secure_messaging_get_string(val: UiccSecureMessaging): string;
    function uicc_slot_state_get_string(val: UiccSlotState): string;
    function unregister_custom_service(id: number): boolean;
    function ussd_action_get_string(val: UssdAction): string;
    function ussd_response_get_string(val: UssdResponse): string;
    function ussd_session_state_get_string(val: UssdSessionState): string;
    function utils_get_show_personal_info(): boolean;
    function utils_get_traces_enabled(): boolean;
    function utils_set_show_personal_info(show_personal_info: boolean): void;
    function utils_set_traces_enabled(enabled: boolean): void;
    function uuid_from_context_type(context_type: ContextType): Uuid;
    function uuid_from_printable(str: string, uuid: Uuid): boolean;
    function uuid_from_service(service: Service): Uuid;
    function visible_providers_action_get_string(val: VisibleProvidersAction): string;
    function voice_call_state_get_string(val: VoiceCallState): string;
    function voice_class_get_string(val: VoiceClass): string;
    function wake_type_get_string(val: WakeType): string;
    export namespace CellularClass {
        export const $gtype: GObject.GType<CellularClass>;
    }
    enum CellularClass {
        NONE,
        GSM,
        CDMA,
    }
    export namespace CtrlCaps {
        export const $gtype: GObject.GType<CtrlCaps>;
    }
    enum CtrlCaps {
        NONE,
        REG_MANUAL,
        HW_RADIO_SWITCH,
        CDMA_MOBILE_IP,
        CDMA_SIMPLE_IP,
        MULTI_CARRIER,
        ESIM,
        UE_POLICY_ROUTE_SELECTION,
        SIM_HOT_SWAP_CAPABLE,
    }
    export namespace DataClass {
        export const $gtype: GObject.GType<DataClass>;
    }
    enum DataClass {
        NONE,
        GPRS,
        EDGE,
        UMTS,
        HSDPA,
        HSUPA,
        LTE,
        "5G_NSA",
        "5G_SA",
        "1XRTT",
        "1XEVDO",
        "1XEVDO_REVA",
        "1XEVDV",
        "3XRTT",
        "1XEVDO_REVB",
        UMB,
        CUSTOM,
    }
    export namespace DataClassV3 {
        export const $gtype: GObject.GType<DataClassV3>;
    }
    enum DataClassV3 {
        NONE,
        GPRS,
        EDGE,
        UMTS,
        HSDPA,
        HSUPA,
        LTE,
        "5G",
        "1XRTT",
        "1XEVDO",
        "1XEVDO_REVA",
        "1XEVDV",
        "3XRTT",
        "1XEVDO_REVB",
        UMB,
        CUSTOM,
    }
    export namespace DataSubclass {
        export const $gtype: GObject.GType<DataSubclass>;
    }
    enum DataSubclass {
        NONE,
        "5G_ENDC",
        "5G_NR",
        "5G_NEDC",
        "5G_ELTE",
        "5G_NGENDC",
    }
    enum DeviceOpenFlags {
        NONE,
        PROXY,
        MS_MBIMEX_V2,
        MS_MBIMEX_V3,
    }
    class FrequencyRange {
        static $gtype: GObject.GType<FrequencyRange>;
        static UNKNOWN: number;
        static "1": number;
        static "2": number;
    }
    export namespace IPConfigurationAvailableFlag {
        export const $gtype: GObject.GType<IPConfigurationAvailableFlag>;
    }
    enum IPConfigurationAvailableFlag {
        NONE,
        ADDRESS,
        GATEWAY,
        DNS,
        MTU,
    }
    export namespace ProviderState {
        export const $gtype: GObject.GType<ProviderState>;
    }
    enum ProviderState {
        UNKNOWN,
        HOME,
        FORBIDDEN,
        PREFERRED,
        VISIBLE,
        REGISTERED,
        PREFERRED_MULTICARRIER,
    }
    export namespace ReadyInfoFlag {
        export const $gtype: GObject.GType<ReadyInfoFlag>;
    }
    enum ReadyInfoFlag {
        NONE,
        PROTECT_UNIQUE_ID,
    }
    export namespace RegistrationFlag {
        export const $gtype: GObject.GType<RegistrationFlag>;
    }
    enum RegistrationFlag {
        NONE,
        MANUAL_SELECTION_NOT_AVAILABLE,
        PACKET_SERVICE_AUTOMATIC_ATTACH,
    }
    export namespace SimClass {
        export const $gtype: GObject.GType<SimClass>;
    }
    enum SimClass {
        NONE,
        LOGICAL,
        REMOVABLE,
    }
    export namespace SmsCaps {
        export const $gtype: GObject.GType<SmsCaps>;
    }
    enum SmsCaps {
        NONE,
        PDU_RECEIVE,
        PDU_SEND,
        TEXT_RECEIVE,
        TEXT_SEND,
    }
    export namespace SmsStatusFlag {
        export const $gtype: GObject.GType<SmsStatusFlag>;
    }
    enum SmsStatusFlag {
        NONE,
        MESSAGE_STORE_FULL,
        NEW_MESSAGE,
    }
    export namespace SubscriberReadyStatusFlag {
        export const $gtype: GObject.GType<SubscriberReadyStatusFlag>;
    }
    enum SubscriberReadyStatusFlag {
        NONE,
        ESIM,
        SIM_REMOVABILITY_KNOWN,
        SIM_REMOVABLE,
    }
    namespace Device {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "device-error": (arg0: GLib.Error) => void;
            "device-indicate-status": (arg0: Message) => void;
            "device-removed": () => void;
            "notify::device-consecutive-timeouts": (pspec: GObject.ParamSpec) => void;
            "notify::device-file": (pspec: GObject.ParamSpec) => void;
            "notify::device-in-session": (pspec: GObject.ParamSpec) => void;
            "notify::device-transaction-id": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            device_consecutive_timeouts: number;
            deviceConsecutiveTimeouts: number;
            device_file: Gio.File;
            deviceFile: Gio.File;
            device_in_session: boolean;
            deviceInSession: boolean;
            device_transaction_id: number;
            deviceTransactionId: number;
        }
    }
    class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
        static $gtype: GObject.GType<Device>;
        get device_consecutive_timeouts(): number;
        get deviceConsecutiveTimeouts(): number;
        get device_file(): Gio.File;
        get deviceFile(): Gio.File;
        get device_in_session(): boolean;
        set device_in_session(val: boolean);
        get deviceInSession(): boolean;
        set deviceInSession(val: boolean);
        get device_transaction_id(): number;
        set device_transaction_id(val: number);
        get deviceTransactionId(): number;
        set deviceTransactionId(val: number);
        $signals: Device.SignalSignatures;
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): Device;
        static new_finish(...args: never[]): any;
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Device> | null): void;
        add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        add_link_finish(res: Gio.AsyncResult, session_id: number): string;
        check_link_supported(): boolean;
        check_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean;
        close(timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        close(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        close(timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        close_finish(res: Gio.AsyncResult): boolean;
        close_force(): boolean;
        command(message: Message, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Message>;
        command(message: Message, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        command(message: Message, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Message> | void;
        command_finish(res: Gio.AsyncResult): Message;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_all_links_finish(res: Gio.AsyncResult): boolean;
        delete_link(ifname: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_link(ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_link(ifname: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_link_finish(res: Gio.AsyncResult): boolean;
        get_consecutive_timeouts(): number;
        get_ms_mbimex_version(out_ms_mbimex_version_minor: number): number;
        get_next_transaction_id(): number;
        get_path(): string;
        get_path_display(): string;
        get_transaction_id(): number;
        is_open(): boolean;
        list_links(base_ifname: string): [boolean, string[]];
        open(timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        open(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open(timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        open_finish(res: Gio.AsyncResult): boolean;
        open_full(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        open_full(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        open_full(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        open_full_finish(res: Gio.AsyncResult): boolean;
        set_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean;
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
            "notify::mbim-proxy-n-clients": (pspec: GObject.ParamSpec) => void;
            "notify::mbim-proxy-nclients": (pspec: GObject.ParamSpec) => void;
            "notify::mbim-proxy-n-devices": (pspec: GObject.ParamSpec) => void;
            "notify::mbim-proxy-ndevices": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mbim_proxy_n_clients: number;
            mbimProxyNClients: number;
            mbim_proxy_n_devices: number;
            mbimProxyNDevices: number;
        }
    }
    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;
        get mbim_proxy_n_clients(): number;
        get mbimProxyNClients(): number;
        get mbim_proxy_n_devices(): number;
        get mbimProxyNDevices(): number;
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
    }
    class AtdsProvider {
        static $gtype: GObject.GType<AtdsProvider>;
        provider_id: string;
        provider_state: number;
        provider_name: string;
        plmn_mode: number;
        rssi: number;
        error_rate: number;
        constructor(properties?: Partial<{
            provider_id: string;
            provider_state: number;
            provider_name: string;
            plmn_mode: number;
            rssi: number;
            error_rate: number;
        }>);
        static array_free(array: AtdsProviderArray): void;
    }
    class CellInfoCdma {
        static $gtype: GObject.GType<CellInfoCdma>;
        serving_cell_flag: number;
        nid: number;
        sid: number;
        base_station_id: number;
        base_latitude: number;
        base_longitude: number;
        ref_pn: number;
        gps_seconds: number;
        pilot_strength: number;
        constructor(properties?: Partial<{
            serving_cell_flag: number;
            nid: number;
            sid: number;
            base_station_id: number;
            base_latitude: number;
            base_longitude: number;
            ref_pn: number;
            gps_seconds: number;
            pilot_strength: number;
        }>);
        static array_free(array: CellInfoCdmaArray): void;
    }
    class CellInfoNeighboringGsm {
        static $gtype: GObject.GType<CellInfoNeighboringGsm>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        arfcn: number;
        base_station_id: number;
        rx_level: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            arfcn: number;
            base_station_id: number;
            rx_level: number;
        }>);
        static array_free(array: CellInfoNeighboringGsmArray): void;
    }
    class CellInfoNeighboringLte {
        static $gtype: GObject.GType<CellInfoNeighboringLte>;
        provider_id: string;
        cell_id: number;
        earfcn: number;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        constructor(properties?: Partial<{
            provider_id: string;
            cell_id: number;
            earfcn: number;
            physical_cell_id: number;
            tac: number;
            rsrp: number;
            rsrq: number;
        }>);
        static array_free(array: CellInfoNeighboringLteArray): void;
    }
    class CellInfoNeighboringNr {
        static $gtype: GObject.GType<CellInfoNeighboringNr>;
        system_sub_type: number;
        provider_id: string;
        cell_id: string;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        sinr: number;
        constructor(properties?: Partial<{
            system_sub_type: number;
            provider_id: string;
            cell_id: string;
            physical_cell_id: number;
            tac: number;
            rsrp: number;
            rsrq: number;
            sinr: number;
        }>);
        static array_free(array: CellInfoNeighboringNrArray): void;
    }
    class CellInfoNeighboringTdscdma {
        static $gtype: GObject.GType<CellInfoNeighboringTdscdma>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        cell_parameter_id: number;
        timing_advance: number;
        rscp: number;
        path_loss: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            uarfcn: number;
            cell_parameter_id: number;
            timing_advance: number;
            rscp: number;
            path_loss: number;
        }>);
        static array_free(array: CellInfoNeighboringTdscdmaArray): void;
    }
    class CellInfoNeighboringUmts {
        static $gtype: GObject.GType<CellInfoNeighboringUmts>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        primary_scrambling_code: number;
        rscp: number;
        ecno: number;
        path_loss: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            uarfcn: number;
            primary_scrambling_code: number;
            rscp: number;
            ecno: number;
            path_loss: number;
        }>);
        static array_free(array: CellInfoNeighboringUmtsArray): void;
    }
    class CellInfoServingGsm {
        static $gtype: GObject.GType<CellInfoServingGsm>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        timing_advance: number;
        arfcn: number;
        base_station_id: number;
        rx_level: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            timing_advance: number;
            arfcn: number;
            base_station_id: number;
            rx_level: number;
        }>);
        free(): void;
    }
    class CellInfoServingLte {
        static $gtype: GObject.GType<CellInfoServingLte>;
        provider_id: string;
        cell_id: number;
        earfcn: number;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        timing_advance: number;
        constructor(properties?: Partial<{
            provider_id: string;
            cell_id: number;
            earfcn: number;
            physical_cell_id: number;
            tac: number;
            rsrp: number;
            rsrq: number;
            timing_advance: number;
        }>);
        free(): void;
    }
    class CellInfoServingNr {
        static $gtype: GObject.GType<CellInfoServingNr>;
        provider_id: string;
        nci: number;
        physical_cell_id: number;
        nrarfcn: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        sinr: number;
        timing_advance: number;
        static array_free(array: CellInfoServingNrArray): void;
    }
    class CellInfoServingTdscdma {
        static $gtype: GObject.GType<CellInfoServingTdscdma>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        cell_parameter_id: number;
        timing_advance: number;
        rscp: number;
        path_loss: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            uarfcn: number;
            cell_parameter_id: number;
            timing_advance: number;
            rscp: number;
            path_loss: number;
        }>);
        free(): void;
    }
    class CellInfoServingUmts {
        static $gtype: GObject.GType<CellInfoServingUmts>;
        provider_id: string;
        location_area_code: number;
        cell_id: number;
        frequency_info_ul: number;
        frequency_info_dl: number;
        frequency_info_nt: number;
        uarfcn: number;
        primary_scrambling_code: number;
        rscp: number;
        ecno: number;
        path_loss: number;
        constructor(properties?: Partial<{
            provider_id: string;
            location_area_code: number;
            cell_id: number;
            frequency_info_ul: number;
            frequency_info_dl: number;
            frequency_info_nt: number;
            uarfcn: number;
            primary_scrambling_code: number;
            rscp: number;
            ecno: number;
            path_loss: number;
        }>);
        free(): void;
    }
    class DeprecatedLteAttachStatus {
        static $gtype: GObject.GType<DeprecatedLteAttachStatus>;
        lte_attach_state: number;
        ip_type: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;
        constructor(properties?: Partial<{
            lte_attach_state: number;
            ip_type: number;
            access_string: string;
            user_name: string;
            password: string;
            compression: number;
            auth_protocol: number;
        }>);
    }
    type DeviceClass = typeof Device;
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }
    class DeviceServiceElement {
        static $gtype: GObject.GType<DeviceServiceElement>;
        device_service_id: Uuid;
        dss_payload: number;
        max_dss_instances: number;
        cids_count: number;
        cids: number;
        constructor(properties?: Partial<{
            device_service_id: Uuid;
            dss_payload: number;
            max_dss_instances: number;
            cids_count: number;
            cids: number;
        }>);
        static array_free(array: DeviceServiceElementArray): void;
    }
    class EventEntry {
        static $gtype: GObject.GType<EventEntry>;
        device_service_id: Uuid;
        cids_count: number;
        cids: number;
        constructor(properties?: Partial<{
            device_service_id: Uuid;
            cids_count: number;
            cids: number;
        }>);
        static array_free(array: EventEntryArray): void;
    }
    class IPv4 {
        static $gtype: GObject.GType<IPv4>;
        addr: Uint8Array;
        constructor(properties?: Partial<{
            addr: Uint8Array;
        }>);
    }
    class IPv4Element {
        static $gtype: GObject.GType<IPv4Element>;
        on_link_prefix_length: number;
        ipv4_address: IPv4;
        constructor(properties?: Partial<{
            on_link_prefix_length: number;
            ipv4_address: IPv4;
        }>);
        static array_free(array: IPv4ElementArray): void;
    }
    class IPv6 {
        static $gtype: GObject.GType<IPv6>;
        addr: Uint8Array;
        constructor(properties?: Partial<{
            addr: Uint8Array;
        }>);
    }
    class IPv6Element {
        static $gtype: GObject.GType<IPv6Element>;
        on_link_prefix_length: number;
        ipv6_address: IPv6;
        constructor(properties?: Partial<{
            on_link_prefix_length: number;
            ipv6_address: IPv6;
        }>);
        static array_free(array: IPv6ElementArray): void;
    }
    class IntelRfimFrequencyValue {
        static $gtype: GObject.GType<IntelRfimFrequencyValue>;
        serving_cell_info: number;
        center_frequency: number;
        bandwidth: number;
        rsrp: number;
        rsrq: number;
        sinr: number;
        rssi: number;
        connection_status: number;
        static array_free(array: IntelRfimFrequencyValueArray): void;
    }
    class LteAttachConfiguration {
        static $gtype: GObject.GType<LteAttachConfiguration>;
        ip_type: number;
        roaming: number;
        source: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;
        constructor(properties?: Partial<{
            ip_type: number;
            roaming: number;
            source: number;
            access_string: string;
            user_name: string;
            password: string;
            compression: number;
            auth_protocol: number;
        }>);
        static array_free(array: LteAttachConfigurationArray): void;
    }
    class Message {
        static $gtype: GObject.GType<Message>;
        constructor(properties?: Partial<{}>);
        static atds_location_query_new(): Message;
        static atds_operators_query_new(): Message;
        static atds_rat_query_new(): Message;
        static atds_rat_set_new(mode: AtdsRatMode): Message;
        static atds_register_state_query_new(): Message;
        static atds_signal_query_new(): Message;
        static auth_aka_query_new(rand: Uint8Array | string, autn: Uint8Array | string): Message;
        static auth_akap_query_new(rand: Uint8Array | string, autn: Uint8Array | string, network_name: string): Message;
        static auth_sim_query_new(rand1: Uint8Array | string, rand2: Uint8Array | string, rand3: Uint8Array | string, n: number): Message;
        static close_done_new(transaction_id: number, error_status_code: StatusError): Message;
        static close_new(transaction_id: number): Message;
        static command_new(transaction_id: number, service: Service, cid: number, command_type: MessageCommandType): Message;
        static compal_at_command_query_new(command_req: Uint8Array | string): Message;
        static connect_query_new(session_id: number, activation_state: ActivationState, voice_call_state: VoiceCallState, ip_type: ContextIpType, context_type: Uuid, nw_error: number): Message;
        static connect_set_new(session_id: number, activation_command: ActivationCommand, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid): Message;
        static device_caps_query_new(): Message;
        static device_service_subscribe_list_set_new(events_count: number, events: EventEntry[]): Message;
        static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message;
        static device_services_query_new(): Message;
        static dss_connect_set_new(device_service_id: Uuid, dss_session_id: number, dss_link_state: DssLinkState): Message;
        static emergency_mode_query_new(): Message;
        static emergency_mode_set_new(state: EmergencyModeState): Message;
        static error_new(transaction_id: number, error_status_code: ProtocolError): Message;
        static fibocom_at_command_set_new(command_req: Uint8Array | string): Message;
        static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message;
        static google_carrier_lock_query_new(): Message;
        static google_carrier_lock_set_new(data: Uint8Array | string): Message;
        static home_provider_query_new(): Message;
        static home_provider_set_new(provider: Provider): Message;
        static intel_at_tunnel_at_command_set_new(command_req: Uint8Array | string): Message;
        static intel_firmware_update_modem_reboot_set_new(): Message;
        static intel_firmware_update_v2_modem_reboot_set_new(boot_mode: IntelBootMode, timeout: number): Message;
        static intel_mutual_authentication_fcc_lock_query_new(): Message;
        static intel_mutual_authentication_fcc_lock_set_new(response_present: boolean, response: number): Message;
        static intel_thermal_rf_rfim_query_new(): Message;
        static intel_thermal_rf_rfim_set_new(activation_state: boolean): Message;
        static intel_tools_trace_config_query_new(trace_cmd: TraceCommand): Message;
        static intel_tools_trace_config_set_new(trace_cmd: TraceCommand, trace_value: number): Message;
        static ip_configuration_query_new(session_id: number, ipv4_configuration_available: IPConfigurationAvailableFlag, ipv6_configuration_available: IPConfigurationAvailableFlag, ipv4_address_count: number, ipv4_address: IPv4Element[], ipv6_address_count: number, ipv6_address: IPv6Element[], ipv4_gateway: IPv4, ipv6_gateway: IPv6, ipv4_dns_server_count: number, ipv4_dns_server: IPv4[], ipv6_dns_server_count: number, ipv6_dns_server: IPv6[], ipv4_mtu: number, ipv6_mtu: number): Message;
        static ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message;
        static ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message;
        static ms_basic_connect_extensions_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number): Message;
        static ms_basic_connect_extensions_device_caps_query_new(): Message;
        static ms_basic_connect_extensions_device_reset_set_new(): Message;
        static ms_basic_connect_extensions_device_slot_mappings_query_new(): Message;
        static ms_basic_connect_extensions_device_slot_mappings_set_new(map_count: number, slot_map: Slot[]): Message;
        static ms_basic_connect_extensions_location_info_status_query_new(): Message;
        static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message;
        static ms_basic_connect_extensions_lte_attach_configuration_set_new(operation: LteAttachContextOperation, configuration_count: number, configurations: LteAttachConfiguration[]): Message;
        static ms_basic_connect_extensions_lte_attach_info_query_new(): Message;
        static ms_basic_connect_extensions_lte_attach_status_query_new(): Message;
        static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message;
        static ms_basic_connect_extensions_provisioned_contexts_query_new(): Message;
        static ms_basic_connect_extensions_provisioned_contexts_set_new(operation: ContextOperation, context_type: Uuid, ip_type: ContextIpType, state: ContextState, roaming: ContextRoamingControl, media_type: ContextMediaType, source: ContextSource, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol): Message;
        static ms_basic_connect_extensions_slot_info_status_query_new(slot_index: number): Message;
        static ms_basic_connect_extensions_sys_caps_query_new(): Message;
        static ms_basic_connect_extensions_v2_version_query_new(mbim_version: number, mbim_extended_version: number): Message;
        static ms_basic_connect_extensions_v3_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number, max_nr_count: number): Message;
        static ms_basic_connect_extensions_v3_modem_configuration_query_new(): Message;
        static ms_basic_connect_extensions_v3_registration_parameters_query_new(): Message;
        static ms_basic_connect_extensions_v3_registration_parameters_set_new(mico_mode: MicoMode, drx_cycle: DrxCycle, ladn_info: LadnInfo, default_pdu_activation_hint: DefaultPduActivationHint, re_register_if_nedeed: boolean, unnamed_ies: Tlv[]): Message;
        static ms_basic_connect_extensions_v3_wake_reason_query_new(): Message;
        static ms_basic_connect_v3_connect_query_new(session_id: number): Message;
        static ms_basic_connect_v3_connect_set_new(session_id: number, activation_command: ActivationCommand, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid, media_preference: AccessMediaType, access_string: string, user_name: string, password: string, unnamed_ies: Tlv[]): Message;
        static ms_basic_connect_v3_ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message;
        static ms_basic_connect_v3_ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message;
        static ms_firmware_id_get_query_new(): Message;
        static ms_host_shutdown_notify_set_new(): Message;
        static ms_sar_config_query_new(): Message;
        static ms_sar_config_set_new(mode: SarControlMode, backoff_state: SarBackoffState, config_states_count: number, config_states: SarConfigState[]): Message;
        static ms_sar_transmission_status_query_new(): Message;
        static ms_sar_transmission_status_set_new(channel_notification: TransmissionNotificationStatus, hysteresis_timer: number): Message;
        static ms_uicc_low_level_access_apdu_set_new(channel: number, secure_messaging: UiccSecureMessaging, class_byte_type: UiccClassByteType, command: Uint8Array | string): Message;
        static ms_uicc_low_level_access_application_list_query_new(): Message;
        static ms_uicc_low_level_access_atr_query_new(): Message;
        static ms_uicc_low_level_access_close_channel_set_new(channel: number, channel_group: number): Message;
        static ms_uicc_low_level_access_file_status_query_new(version: number, application_id: Uint8Array | string, file_path: Uint8Array | string): Message;
        static ms_uicc_low_level_access_open_channel_set_new(app_id: Uint8Array | string, select_p2_arg: number, channel_group: number): Message;
        static ms_uicc_low_level_access_read_binary_query_new(version: number, application_id: Uint8Array | string, file_path: Uint8Array | string, read_offset: number, read_size: number, local_pin: string, data: Uint8Array | string): Message;
        static ms_uicc_low_level_access_read_record_query_new(version: number, application_id: Uint8Array | string, file_path: Uint8Array | string, record_number: number, local_pin: string, data: Uint8Array | string): Message;
        static ms_uicc_low_level_access_reset_query_new(): Message;
        static ms_uicc_low_level_access_reset_set_new(pass_through_action: UiccPassThroughAction): Message;
        static ms_uicc_low_level_access_terminal_capability_query_new(): Message;
        static ms_uicc_low_level_access_terminal_capability_set_new(terminal_capability_count: number, terminal_capability: TerminalCapabilityInfo[]): Message;
        static ms_voice_extensions_nitz_query_new(): Message;
        static multicarrier_providers_query_new(): Message;
        static multicarrier_providers_set_new(providers_count: number, providers: Provider[]): Message;
        static network_idle_hint_query_new(): Message;
        static network_idle_hint_set_new(state: NetworkIdleHintState): Message;
        static ["new"](data: number, data_length: number): Message;
        static open_done_new(transaction_id: number, error_status_code: StatusError): Message;
        static open_new(transaction_id: number, max_control_transfer: number): Message;
        static packet_service_query_new(): Message;
        static packet_service_set_new(packet_service_action: PacketServiceAction): Message;
        static packet_statistics_query_new(): Message;
        static phonebook_configuration_query_new(): Message;
        static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;
        static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;
        static phonebook_write_set_new(save_flag: PhonebookWriteFlag, save_index: number, number: string, name: string): Message;
        static pin_list_query_new(): Message;
        static pin_query_new(): Message;
        static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message;
        static preferred_providers_query_new(): Message;
        static preferred_providers_set_new(providers_count: number, providers: Provider[]): Message;
        static provisioned_contexts_query_new(): Message;
        static provisioned_contexts_set_new(context_id: number, context_type: Uuid, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, provider_id: string): Message;
        static proxy_control_configuration_set_new(device_path: string, timeout: number): Message;
        static qdu_command_set_new(command_type: QuectelCommandType, command_string: Uint8Array | string): Message;
        static qdu_file_open_query_new(): Message;
        static qdu_file_open_set_new(file_type: QduFileType, file_size: number): Message;
        static qdu_file_write_set_new(data_buffer: Uint8Array | string): Message;
        static qdu_quectel_read_version_set_new(version_type: QduQuectelVersionType): Message;
        static qdu_quectel_reboot_set_new(reboot_type: QduQuectelRebootType): Message;
        static qdu_update_session_query_new(): Message;
        static qdu_update_session_set_new(session_action: QduSessionAction, session_type: QduSessionType): Message;
        static qmi_msg_set_new(qmi_msg: Uint8Array | string): Message;
        static quectel_radio_state_query_new(): Message;
        static quectel_radio_state_set_new(radio_state: QuectelRadioSwitchState): Message;
        static radio_state_query_new(): Message;
        static radio_state_set_new(radio_state: RadioSwitchState): Message;
        static register_state_query_new(): Message;
        static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message;
        static service_activation_set_new(buffer: Uint8Array | string): Message;
        static signal_state_query_new(): Message;
        static signal_state_set_new(signal_strength_interval: number, rssi_threshold: number, error_rate_threshold: number): Message;
        static sms_configuration_query_new(): Message;
        static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message;
        static sms_delete_set_new(flag: SmsFlag, message_index: number): Message;
        static sms_message_store_status_query_new(): Message;
        static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message;
        static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message;
        static stk_envelope_query_new(): Message;
        static stk_envelope_set_new(data: Uint8Array | string): Message;
        static stk_pac_query_new(): Message;
        static stk_pac_set_new(pac_host_control: Uint8Array | string): Message;
        static stk_terminal_response_set_new(response: Uint8Array | string): Message;
        static subscriber_ready_status_query_new(): Message;
        static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array | string): Message;
        static visible_providers_query_new(action: VisibleProvidersAction): Message;
        atds_location_response_parse(): [boolean, number, number, number];
        atds_operators_response_parse(): [boolean, number, AtdsProvider[] | null];
        atds_rat_response_parse(): [boolean, AtdsRatMode | null];
        atds_register_state_response_parse(): [boolean, NwError | null, RegisterState | null, RegisterMode | null, DataClass | null, CellularClass | null, string, string, string, RegistrationFlag | null];
        atds_signal_response_parse(): [boolean, number, number, number, number, number, number, number];
        auth_aka_response_parse(): [boolean, Uint8Array | null, number, Uint8Array | null, Uint8Array | null, Uint8Array | null];
        auth_akap_response_parse(): [boolean, Uint8Array | null, number, Uint8Array | null, Uint8Array | null, Uint8Array | null];
        auth_sim_response_parse(): [boolean, number, number, number, number, number, number, number];
        close_done_get_result(): boolean;
        close_done_get_status_code(): StatusError;
        command_append(buffer: number, buffer_size: number): void;
        command_done_get_cid(): number;
        command_done_get_raw_information_buffer(): [number, number];
        command_done_get_result(): boolean;
        command_done_get_service(): Service;
        command_done_get_service_id(): Uuid;
        command_done_get_status_code(): StatusError;
        command_get_cid(): number;
        command_get_command_type(): MessageCommandType;
        command_get_raw_information_buffer(): [number, number];
        command_get_service(): Service;
        command_get_service_id(): Uuid;
        compal_at_command_response_parse(): [boolean, Uint8Array | null];
        connect_notification_parse(): [boolean, number, ActivationState | null, VoiceCallState | null, ContextIpType | null, Uuid | null, number];
        connect_response_parse(): [boolean, number, ActivationState | null, VoiceCallState | null, ContextIpType | null, Uuid | null, number];
        device_caps_response_parse(): [boolean, DeviceType | null, CellularClass | null, VoiceClass | null, SimClass | null, DataClass | null, SmsCaps | null, CtrlCaps | null, number, string, string, string, string];
        device_service_subscribe_list_response_parse(): [boolean, number, EventEntry[] | null];
        device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean;
        device_services_response_parse(): [boolean, number, number, DeviceServiceElement[] | null];
        dss_connect_response_parse(): boolean;
        dup(): Message;
        emergency_mode_notification_parse(): [boolean, EmergencyModeState | null];
        emergency_mode_response_parse(): [boolean, EmergencyModeState | null];
        error_get_error(): GLib.Error;
        error_get_error_status_code(): ProtocolError;
        fibocom_at_command_response_parse(): [boolean, Uint8Array | null];
        get_message_length(): number;
        get_message_type(): MessageType;
        get_printable(line_prefix: string, headers_only: boolean): string;
        get_printable_full(mbimex_version_major: number, mbimex_version_minor: number, line_prefix: string, headers_only: boolean): string;
        get_raw(): [number, number];
        get_transaction_id(): number;
        google_carrier_lock_notification_parse(): [boolean, CarrierLockStatus | null, CarrierLockModemState | null, CarrierLockCause | null];
        google_carrier_lock_response_parse(): [boolean, CarrierLockStatus | null, CarrierLockModemState | null, CarrierLockCause | null];
        home_provider_response_parse(): [boolean, Provider | null];
        indicate_status_get_cid(): number;
        indicate_status_get_raw_information_buffer(): [number, number];
        indicate_status_get_service(): Service;
        indicate_status_get_service_id(): Uuid;
        intel_at_tunnel_at_command_response_parse(): [boolean, Uint8Array | null];
        intel_mutual_authentication_fcc_lock_response_parse(): [boolean, boolean, number];
        intel_thermal_rf_rfim_notification_parse(): [boolean, number, IntelRfimFrequencyValue[] | null];
        intel_thermal_rf_rfim_response_parse(): [boolean, number, IntelRfimFrequencyValue[] | null];
        intel_tools_trace_config_response_parse(): [boolean, TraceCommand | null, number];
        ip_configuration_notification_parse(): [boolean, number, IPConfigurationAvailableFlag | null, IPConfigurationAvailableFlag | null, number, IPv4Element[] | null, number, IPv6Element[] | null, IPv4 | null, IPv6 | null, number, IPv4[] | null, number, IPv6[] | null, number, number];
        ip_configuration_response_parse(): [boolean, number, IPConfigurationAvailableFlag | null, IPConfigurationAvailableFlag | null, number, IPv4Element[] | null, number, IPv6Element[] | null, IPv4 | null, IPv6 | null, number, IPv4[] | null, number, IPv6[] | null, number, number];
        ip_packet_filters_response_parse(): [boolean, number, number, PacketFilter[] | null];
        ms_basic_connect_extensions_base_stations_info_response_parse(): [boolean, DataClass | null, CellInfoServingGsm | null, CellInfoServingUmts | null, CellInfoServingTdscdma | null, CellInfoServingLte | null, number, CellInfoNeighboringGsm[] | null, number, CellInfoNeighboringUmts[] | null, number, CellInfoNeighboringTdscdma[] | null, number, CellInfoNeighboringLte[] | null, number, CellInfoCdma[] | null];
        ms_basic_connect_extensions_device_caps_response_parse(): [boolean, DeviceType | null, CellularClass | null, VoiceClass | null, SimClass | null, DataClass | null, SmsCaps | null, CtrlCaps | null, number, string, string, string, string, number];
        ms_basic_connect_extensions_device_reset_response_parse(): boolean;
        ms_basic_connect_extensions_device_slot_mappings_response_parse(): [boolean, number, Slot[] | null];
        ms_basic_connect_extensions_location_info_status_notification_parse(): [boolean, number, number, number];
        ms_basic_connect_extensions_location_info_status_response_parse(): [boolean, number, number, number];
        ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [boolean, number, LteAttachConfiguration[] | null];
        ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [boolean, number, LteAttachConfiguration[] | null];
        ms_basic_connect_extensions_lte_attach_info_notification_parse(): [boolean, LteAttachState | null, ContextIpType | null, string, string, string, Compression | null, AuthProtocol | null];
        ms_basic_connect_extensions_lte_attach_info_response_parse(): [boolean, LteAttachState | null, ContextIpType | null, string, string, string, Compression | null, AuthProtocol | null];
        ms_basic_connect_extensions_lte_attach_status_notification_parse(): [boolean, DeprecatedLteAttachStatus | null];
        ms_basic_connect_extensions_lte_attach_status_response_parse(): [boolean, DeprecatedLteAttachStatus | null];
        ms_basic_connect_extensions_pco_notification_parse(): [boolean, PcoValue | null];
        ms_basic_connect_extensions_pco_response_parse(): [boolean, PcoValue | null];
        ms_basic_connect_extensions_provisioned_contexts_notification_parse(): [boolean, number, ProvisionedContextElementV2[] | null];
        ms_basic_connect_extensions_provisioned_contexts_response_parse(): [boolean, number, ProvisionedContextElementV2[] | null];
        ms_basic_connect_extensions_slot_info_status_notification_parse(): [boolean, number, UiccSlotState | null];
        ms_basic_connect_extensions_slot_info_status_response_parse(): [boolean, number, UiccSlotState | null];
        ms_basic_connect_extensions_sys_caps_response_parse(): [boolean, number, number, number, number];
        ms_basic_connect_extensions_v2_version_response_parse(): [boolean, number, number];
        ms_basic_connect_extensions_v3_base_stations_info_response_parse(): [boolean, DataClassV3 | null, DataSubclass | null, CellInfoServingGsm | null, CellInfoServingUmts | null, CellInfoServingTdscdma | null, CellInfoServingLte | null, number, CellInfoNeighboringGsm[] | null, number, CellInfoNeighboringUmts[] | null, number, CellInfoNeighboringTdscdma[] | null, number, CellInfoNeighboringLte[] | null, number, CellInfoCdma[] | null, number, CellInfoServingNr[] | null, number, CellInfoNeighboringNr[] | null];
        ms_basic_connect_extensions_v3_device_caps_response_parse(): [boolean, DeviceType | null, CellularClass | null, VoiceClass | null, SimClass | null, DataClassV3 | null, SmsCaps | null, CtrlCaps | null, DataSubclass | null, number, number, number, number, number, number, number, string, string, string, string];
        ms_basic_connect_extensions_v3_lte_attach_info_notification_parse(): [boolean, LteAttachState | null, NwError | null, ContextIpType | null, string, string, string, Compression | null, AuthProtocol | null];
        ms_basic_connect_extensions_v3_lte_attach_info_response_parse(): [boolean, LteAttachState | null, NwError | null, ContextIpType | null, string, string, string, Compression | null, AuthProtocol | null];
        ms_basic_connect_extensions_v3_modem_configuration_notification_parse(): [boolean, ModemConfigurationStatus | null, string, Tlv[] | null];
        ms_basic_connect_extensions_v3_modem_configuration_response_parse(): [boolean, ModemConfigurationStatus | null, string, Tlv[] | null];
        ms_basic_connect_extensions_v3_registration_parameters_response_parse(): [boolean, MicoMode | null, DrxCycle | null, LadnInfo | null, DefaultPduActivationHint | null, boolean, Tlv[] | null];
        ms_basic_connect_extensions_v3_wake_reason_response_parse(): [boolean, WakeType | null, number, Tlv | null];
        ms_basic_connect_v2_packet_service_notification_parse(): [boolean, number, PacketServiceState | null, DataClass | null, number, number, FrequencyRange | null];
        ms_basic_connect_v2_packet_service_response_parse(): [boolean, number, PacketServiceState | null, DataClass | null, number, number, FrequencyRange | null];
        ms_basic_connect_v2_register_state_notification_parse(): [boolean, NwError | null, RegisterState | null, RegisterMode | null, DataClass | null, CellularClass | null, string, string, string, RegistrationFlag | null, DataClass | null];
        ms_basic_connect_v2_register_state_response_parse(): [boolean, NwError | null, RegisterState | null, RegisterMode | null, DataClass | null, CellularClass | null, string, string, string, RegistrationFlag | null, DataClass | null];
        ms_basic_connect_v2_signal_state_notification_parse(): [boolean, number, number, number, number, number, number, RsrpSnrInfo[] | null];
        ms_basic_connect_v2_signal_state_response_parse(): [boolean, number, number, number, number, number, number, RsrpSnrInfo[] | null];
        ms_basic_connect_v3_connect_notification_parse(): [boolean, number, ActivationState | null, VoiceCallState | null, ContextIpType | null, Uuid | null, number, AccessMediaType | null, string, Tlv[] | null];
        ms_basic_connect_v3_connect_response_parse(): [boolean, number, ActivationState | null, VoiceCallState | null, ContextIpType | null, Uuid | null, number, AccessMediaType | null, string, Tlv[] | null];
        ms_basic_connect_v3_ip_packet_filters_response_parse(): [boolean, number, number, PacketFilterV3[] | null];
        ms_basic_connect_v3_packet_service_notification_parse(): [boolean, number, PacketServiceState | null, DataClassV3 | null, number, number, FrequencyRange | null, DataSubclass | null, Tai | null];
        ms_basic_connect_v3_packet_service_response_parse(): [boolean, number, PacketServiceState | null, DataClassV3 | null, number, number, FrequencyRange | null, DataSubclass | null, Tai | null];
        ms_basic_connect_v3_subscriber_ready_status_notification_parse(): [boolean, SubscriberReadyState | null, SubscriberReadyStatusFlag | null, string, string, ReadyInfoFlag | null, number, string[] | null];
        ms_basic_connect_v3_subscriber_ready_status_response_parse(): [boolean, SubscriberReadyState | null, SubscriberReadyStatusFlag | null, string, string, ReadyInfoFlag | null, number, string[] | null];
        ms_firmware_id_get_response_parse(): [boolean, Uuid | null];
        ms_sar_config_response_parse(): [boolean, SarControlMode | null, SarBackoffState | null, SarWifiHardwareState | null, number, SarConfigState[] | null];
        ms_sar_transmission_status_notification_parse(): [boolean, TransmissionNotificationStatus | null, TransmissionState | null, number];
        ms_sar_transmission_status_response_parse(): [boolean, TransmissionNotificationStatus | null, TransmissionState | null, number];
        ms_uicc_low_level_access_apdu_response_parse(): [boolean, number, Uint8Array | null];
        ms_uicc_low_level_access_application_list_response_parse(): [boolean, number, number, number, number, UiccApplication[] | null];
        ms_uicc_low_level_access_atr_response_parse(): [boolean, Uint8Array | null];
        ms_uicc_low_level_access_close_channel_response_parse(): [boolean, number];
        ms_uicc_low_level_access_file_status_response_parse(): [boolean, number, number, number, UiccFileAccessibility | null, UiccFileType | null, UiccFileStructure | null, number, number, PinType | null, PinType | null, PinType | null, PinType | null];
        ms_uicc_low_level_access_open_channel_response_parse(): [boolean, number, number, Uint8Array | null];
        ms_uicc_low_level_access_read_binary_response_parse(): [boolean, number, number, number, Uint8Array | null];
        ms_uicc_low_level_access_read_record_response_parse(): [boolean, number, number, number, Uint8Array | null];
        ms_uicc_low_level_access_reset_response_parse(): [boolean, UiccPassThroughStatus | null];
        ms_uicc_low_level_access_terminal_capability_response_parse(): [boolean, number, TerminalCapabilityInfo[] | null];
        ms_voice_extensions_nitz_notification_parse(): [boolean, number, number, number, number, number, number, number, number, DataClass | null];
        ms_voice_extensions_nitz_response_parse(): [boolean, number, number, number, number, number, number, number, number, DataClass | null];
        multicarrier_providers_notification_parse(): [boolean, number, Provider[] | null];
        multicarrier_providers_response_parse(): [boolean, number, Provider[] | null];
        network_idle_hint_response_parse(): [boolean, NetworkIdleHintState | null];
        open_done_get_result(): boolean;
        open_done_get_status_code(): StatusError;
        open_get_max_control_transfer(): number;
        packet_service_notification_parse(): [boolean, number, PacketServiceState | null, DataClass | null, number, number];
        packet_service_response_parse(): [boolean, number, PacketServiceState | null, DataClass | null, number, number];
        packet_statistics_response_parse(): [boolean, number, number, number, number, number, number, number, number];
        phonebook_configuration_notification_parse(): [boolean, PhonebookState | null, number, number, number, number];
        phonebook_configuration_response_parse(): [boolean, PhonebookState | null, number, number, number, number];
        phonebook_delete_response_parse(): boolean;
        phonebook_read_response_parse(): [boolean, number, PhonebookEntry[] | null];
        phonebook_write_response_parse(): boolean;
        pin_list_response_parse(): [boolean, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null, PinDesc | null];
        pin_response_parse(): [boolean, PinType | null, PinState | null, number];
        preferred_providers_notification_parse(): [boolean, number, Provider[] | null];
        preferred_providers_response_parse(): [boolean, number, Provider[] | null];
        provisioned_contexts_notification_parse(): [boolean, number, ProvisionedContextElement[] | null];
        provisioned_contexts_response_parse(): [boolean, number, ProvisionedContextElement[] | null];
        proxy_control_configuration_response_parse(): boolean;
        proxy_control_version_notification_parse(): [boolean, number, number];
        qdu_command_response_parse(): [boolean, QuectelCommandResponseStatus | null, Uint8Array | null];
        qdu_file_open_response_parse(): [boolean, number, number];
        qdu_file_write_response_parse(): boolean;
        qdu_quectel_read_version_response_parse(): [boolean, number, string];
        qdu_quectel_reboot_response_parse(): boolean;
        qdu_update_session_response_parse(): [boolean, QduSessionType | null, QduSessionStatus | null, QduSessionType | null, QduSessionResult | null, number, number];
        qmi_msg_notification_parse(): [boolean, Uint8Array | null];
        qmi_msg_response_parse(): [boolean, Uint8Array | null];
        quectel_radio_state_response_parse(): [boolean, QuectelRadioSwitchState | null];
        radio_state_notification_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];
        radio_state_response_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];
        ref(): Message;
        register_state_notification_parse(): [boolean, NwError | null, RegisterState | null, RegisterMode | null, DataClass | null, CellularClass | null, string, string, string, RegistrationFlag | null];
        register_state_response_parse(): [boolean, NwError | null, RegisterState | null, RegisterMode | null, DataClass | null, CellularClass | null, string, string, string, RegistrationFlag | null];
        response_get_result(expected: MessageType): boolean;
        service_activation_response_parse(): [boolean, NwError | null, Uint8Array | null];
        set_transaction_id(transaction_id: number): void;
        signal_state_notification_parse(): [boolean, number, number, number, number, number];
        signal_state_response_parse(): [boolean, number, number, number, number, number];
        sms_configuration_notification_parse(): [boolean, SmsStorageState | null, SmsFormat | null, number, number, string];
        sms_configuration_response_parse(): [boolean, SmsStorageState | null, SmsFormat | null, number, number, string];
        sms_delete_response_parse(): boolean;
        sms_message_store_status_notification_parse(): [boolean, SmsStatusFlag | null, number];
        sms_message_store_status_response_parse(): [boolean, SmsStatusFlag | null, number];
        sms_read_notification_parse(): [boolean, SmsFormat | null, number, SmsPduReadRecord[] | null, SmsCdmaReadRecord[] | null];
        sms_read_response_parse(): [boolean, SmsFormat | null, number, SmsPduReadRecord[] | null, SmsCdmaReadRecord[] | null];
        sms_send_response_parse(): [boolean, number];
        stk_envelope_response_parse(): [boolean, Uint8Array | null];
        stk_pac_notification_parse(): [boolean, StkPacType | null, Uint8Array | null];
        stk_pac_response_parse(): [boolean, Uint8Array | null];
        stk_terminal_response_response_parse(): [boolean, Uint8Array | null, number];
        subscriber_ready_status_notification_parse(): [boolean, SubscriberReadyState | null, string, string, ReadyInfoFlag | null, number, string[] | null];
        subscriber_ready_status_response_parse(): [boolean, SubscriberReadyState | null, string, string, ReadyInfoFlag | null, number, string[] | null];
        unref(): void;
        ussd_notification_parse(): [boolean, UssdResponse | null, UssdSessionState | null, number, Uint8Array | null];
        ussd_response_parse(): [boolean, UssdResponse | null, UssdSessionState | null, number, Uint8Array | null];
        validate(): boolean;
        visible_providers_response_parse(): [boolean, number, Provider[] | null];
    }
    class PacketFilter {
        static $gtype: GObject.GType<PacketFilter>;
        filter_size: number;
        packet_filter: number;
        packet_mask: number;
        constructor(properties?: Partial<{
            filter_size: number;
            packet_filter: number;
            packet_mask: number;
        }>);
        static array_free(array: PacketFilterArray): void;
    }
    class PacketFilterV3 {
        static $gtype: GObject.GType<PacketFilterV3>;
        filter_size: number;
        packet_filter: number;
        packet_mask: number;
        filter_id: number;
        constructor(properties?: Partial<{
            filter_size: number;
            packet_filter: number;
            packet_mask: number;
            filter_id: number;
        }>);
        static array_free(array: PacketFilterV3Array): void;
    }
    class PcoValue {
        static $gtype: GObject.GType<PcoValue>;
        session_id: number;
        pco_data_size: number;
        pco_data_type: number;
        pco_data_buffer: number;
        constructor(properties?: Partial<{
            session_id: number;
            pco_data_size: number;
            pco_data_type: number;
            pco_data_buffer: number;
        }>);
        free(): void;
    }
    class PhonebookEntry {
        static $gtype: GObject.GType<PhonebookEntry>;
        entry_index: number;
        number: string;
        name: string;
        constructor(properties?: Partial<{
            entry_index: number;
            number: string;
            name: string;
        }>);
        static array_free(array: PhonebookEntryArray): void;
    }
    class PinDesc {
        static $gtype: GObject.GType<PinDesc>;
        pin_mode: number;
        pin_format: number;
        pin_length_min: number;
        pin_length_max: number;
        constructor(properties?: Partial<{
            pin_mode: number;
            pin_format: number;
            pin_length_min: number;
            pin_length_max: number;
        }>);
        free(): void;
    }
    class Provider {
        static $gtype: GObject.GType<Provider>;
        provider_id: string;
        provider_state: number;
        provider_name: string;
        cellular_class: number;
        rssi: number;
        error_rate: number;
        constructor(properties?: Partial<{
            provider_id: string;
            provider_state: number;
            provider_name: string;
            cellular_class: number;
            rssi: number;
            error_rate: number;
        }>);
        static array_free(array: ProviderArray): void;
        free(): void;
    }
    class ProvisionedContextElement {
        static $gtype: GObject.GType<ProvisionedContextElement>;
        context_id: number;
        context_type: Uuid;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;
        constructor(properties?: Partial<{
            context_id: number;
            context_type: Uuid;
            access_string: string;
            user_name: string;
            password: string;
            compression: number;
            auth_protocol: number;
        }>);
        static array_free(array: ProvisionedContextElementArray): void;
    }
    class ProvisionedContextElementV2 {
        static $gtype: GObject.GType<ProvisionedContextElementV2>;
        context_id: number;
        context_type: Uuid;
        ip_type: number;
        state: number;
        roaming: number;
        media_type: number;
        source: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;
        constructor(properties?: Partial<{
            context_id: number;
            context_type: Uuid;
            ip_type: number;
            state: number;
            roaming: number;
            media_type: number;
            source: number;
            access_string: string;
            user_name: string;
            password: string;
            compression: number;
            auth_protocol: number;
        }>);
        static array_free(array: ProvisionedContextElementV2Array): void;
    }
    type ProxyClass = typeof Proxy;
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;
    }
    class RsrpSnrInfo {
        static $gtype: GObject.GType<RsrpSnrInfo>;
        rsrp: number;
        snr: number;
        rsrp_threshold: number;
        snr_threshold: number;
        system_type: number;
        constructor(properties?: Partial<{
            rsrp: number;
            snr: number;
            rsrp_threshold: number;
            snr_threshold: number;
            system_type: number;
        }>);
        static array_free(array: RsrpSnrInfoArray): void;
    }
    class SarConfigState {
        static $gtype: GObject.GType<SarConfigState>;
        antenna_index: number;
        backoff_index: number;
        constructor(properties?: Partial<{
            antenna_index: number;
            backoff_index: number;
        }>);
        static array_free(array: SarConfigStateArray): void;
    }
    class Slot {
        static $gtype: GObject.GType<Slot>;
        slot: number;
        constructor(properties?: Partial<{
            slot: number;
        }>);
        static array_free(array: SlotArray): void;
    }
    class SmsCdmaReadRecord {
        static $gtype: GObject.GType<SmsCdmaReadRecord>;
        message_index: number;
        message_status: number;
        address: string;
        timestamp: string;
        encoding: number;
        language: number;
        encoded_message_size: number;
        encoded_message: number;
        encoded_message_size_in_characters: number;
        constructor(properties?: Partial<{
            message_index: number;
            message_status: number;
            address: string;
            timestamp: string;
            encoding: number;
            language: number;
            encoded_message_size: number;
            encoded_message: number;
            encoded_message_size_in_characters: number;
        }>);
        static array_free(array: SmsCdmaReadRecordArray): void;
    }
    class SmsCdmaSendRecord {
        static $gtype: GObject.GType<SmsCdmaSendRecord>;
        encoding: number;
        language: number;
        address: string;
        encoded_message_size: number;
        encoded_message: number;
        encoded_message_size_in_characters: number;
        constructor(properties?: Partial<{
            encoding: number;
            language: number;
            address: string;
            encoded_message_size: number;
            encoded_message: number;
            encoded_message_size_in_characters: number;
        }>);
        free(): void;
    }
    class SmsPduReadRecord {
        static $gtype: GObject.GType<SmsPduReadRecord>;
        message_index: number;
        message_status: number;
        pdu_data_size: number;
        pdu_data: number;
        constructor(properties?: Partial<{
            message_index: number;
            message_status: number;
            pdu_data_size: number;
            pdu_data: number;
        }>);
        static array_free(array: SmsPduReadRecordArray): void;
    }
    class SmsPduSendRecord {
        static $gtype: GObject.GType<SmsPduSendRecord>;
        pdu_data_size: number;
        pdu_data: number;
        constructor(properties?: Partial<{
            pdu_data_size: number;
            pdu_data: number;
        }>);
        free(): void;
    }
    class Tai {
        static $gtype: GObject.GType<Tai>;
        plmn_mcc: number;
        plmn_mnc: number;
        tac: number;
        constructor(properties?: Partial<{
            plmn_mcc: number;
            plmn_mnc: number;
            tac: number;
        }>);
        free(): void;
    }
    class TerminalCapabilityInfo {
        static $gtype: GObject.GType<TerminalCapabilityInfo>;
        terminal_capability_data_size: number;
        terminal_capability_data: number;
        constructor(properties?: Partial<{
            terminal_capability_data_size: number;
            terminal_capability_data: number;
        }>);
        static array_free(array: TerminalCapabilityInfoArray): void;
    }
    class Tlv {
        static $gtype: GObject.GType<Tlv>;
        constructor(type: TlvType, data: number, data_length: number);
        static ["new"](type: TlvType, data: number, data_length: number): Tlv;
        static string_new(str: string): Tlv;
        dup(): Tlv;
        get_raw(): [number, number];
        get_tlv_data(): [number, number];
        get_tlv_type(): TlvType;
        guint16_array_get(): [boolean, number, number];
        ref(): Tlv;
        string_get(): string;
        unref(): void;
        wake_command_get(): [boolean, Uuid | null, number, number, number];
        wake_packet_get(): [boolean, number, number, number, number];
    }
    class UiccApplication {
        static $gtype: GObject.GType<UiccApplication>;
        application_type: number;
        application_id_size: number;
        application_id: number;
        application_name: string;
        pin_key_reference_count: number;
        pin_key_references_size: number;
        pin_key_references: number;
        constructor(properties?: Partial<{
            application_type: number;
            application_id_size: number;
            application_id: number;
            application_name: string;
            pin_key_reference_count: number;
            pin_key_references_size: number;
            pin_key_references: number;
        }>);
        static array_free(array: UiccApplicationArray): void;
    }
    class Uuid {
        static $gtype: GObject.GType<Uuid>;
        a: Uint8Array;
        b: Uint8Array;
        c: Uint8Array;
        d: Uint8Array;
        e: Uint8Array;
        constructor(properties?: Partial<{
            a: Uint8Array;
            b: Uint8Array;
            c: Uint8Array;
            d: Uint8Array;
            e: Uint8Array;
        }>);
        static from_context_type(context_type: ContextType): Uuid;
        static from_printable(str: string, uuid: Uuid): boolean;
        static from_service(service: Service): Uuid;
        cmp(b: Uuid): boolean;
        get_printable(): string;
        to_context_type(): ContextType;
        to_service(): Service;
    }
    type AtdsProviderArray = AtdsProvider;
    type CellInfoCdmaArray = CellInfoCdma;
    type CellInfoNeighboringGsmArray = CellInfoNeighboringGsm;
    type CellInfoNeighboringLteArray = CellInfoNeighboringLte;
    type CellInfoNeighboringNrArray = CellInfoNeighboringNr;
    type CellInfoNeighboringTdscdmaArray = CellInfoNeighboringTdscdma;
    type CellInfoNeighboringUmtsArray = CellInfoNeighboringUmts;
    type CellInfoServingNrArray = CellInfoServingNr;
    type DeprecatedCidBasicConnect = number;
    type DeprecatedCidMsBasicConnectExtensions = number;
    type DeprecatedNwError = number;
    type DeprecatedRegistrationFlag = number;
    type DeviceServiceElementArray = DeviceServiceElement;
    type EventEntryArray = EventEntry;
    type IPv4ElementArray = IPv4Element;
    type IPv6ElementArray = IPv6Element;
    type IntelRfimFrequencyValueArray = IntelRfimFrequencyValue;
    type LteAttachConfigurationArray = LteAttachConfiguration;
    type LteAttachStatus = DeprecatedLteAttachStatus;
    type PacketFilterArray = PacketFilter;
    type PacketFilterV3Array = PacketFilterV3;
    type PhonebookEntryArray = PhonebookEntry;
    type ProviderArray = Provider;
    type ProvisionedContextElementArray = ProvisionedContextElement;
    type ProvisionedContextElementV2Array = ProvisionedContextElementV2;
    type RsrpSnrInfoArray = RsrpSnrInfo;
    type SarConfigStateArray = SarConfigState;
    type SlotArray = Slot;
    type SmsCdmaReadRecordArray = SmsCdmaReadRecord;
    type SmsPduReadRecordArray = SmsPduReadRecord;
    type TerminalCapabilityInfoArray = TerminalCapabilityInfo;
    type UiccApplicationArray = UiccApplication;
    const __name__: string;
    const __version__: string;
}
export default Mbim;
}
declare module 'gi://Mbim' {
    import Mbim10 from 'gi://Mbim?version=1.0';
    export default Mbim10;
}
