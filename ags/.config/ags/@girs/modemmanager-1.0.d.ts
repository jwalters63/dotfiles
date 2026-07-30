declare module 'gi://ModemManager?version=1.0' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
export namespace ModemManager {
    export namespace BearerAccessTypePreference {
        export const $gtype: GObject.GType<BearerAccessTypePreference>;
    }
    enum BearerAccessTypePreference {
        NONE,
        "3GPP_ONLY",
        "3GPP_PREFERRED",
        NON_3GPP_ONLY,
    }
    export namespace BearerIpMethod {
        export const $gtype: GObject.GType<BearerIpMethod>;
    }
    enum BearerIpMethod {
        UNKNOWN,
        PPP,
        STATIC,
        DHCP,
    }
    export namespace BearerMultiplexSupport {
        export const $gtype: GObject.GType<BearerMultiplexSupport>;
    }
    enum BearerMultiplexSupport {
        UNKNOWN,
        NONE,
        REQUESTED,
        REQUIRED,
    }
    export namespace BearerProfileSource {
        export const $gtype: GObject.GType<BearerProfileSource>;
    }
    enum BearerProfileSource {
        UNKNOWN,
        ADMIN,
        USER,
        OPERATOR,
        MODEM,
        DEVICE,
    }
    export namespace BearerType {
        export const $gtype: GObject.GType<BearerType>;
    }
    enum BearerType {
        UNKNOWN,
        DEFAULT,
        DEFAULT_ATTACH,
        DEDICATED,
    }
    export namespace CallDirection {
        export const $gtype: GObject.GType<CallDirection>;
    }
    enum CallDirection {
        UNKNOWN,
        INCOMING,
        OUTGOING,
    }
    export namespace CallState {
        export const $gtype: GObject.GType<CallState>;
    }
    enum CallState {
        UNKNOWN,
        DIALING,
        RINGING_OUT,
        RINGING_IN,
        ACTIVE,
        HELD,
        WAITING,
        TERMINATED,
    }
    export namespace CallStateReason {
        export const $gtype: GObject.GType<CallStateReason>;
    }
    enum CallStateReason {
        UNKNOWN,
        OUTGOING_STARTED,
        INCOMING_NEW,
        ACCEPTED,
        TERMINATED,
        REFUSED_OR_BUSY,
        ERROR,
        AUDIO_SETUP_FAILED,
        TRANSFERRED,
        DEFLECTED,
    }
    class CarrierLockError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN: number;
        static INVALIDSIGNATURE: number;
        static INVALIDIMEI: number;
        static INVALIDTIMESTAMP: number;
        static NETWORKLISTTOOLARGE: number;
        static SIGNATUREALGORITHMNOTSUPPORTED: number;
        static FEATURENOTSUPPORTED: number;
        static DECODEORPARSINGERROR: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace CbmState {
        export const $gtype: GObject.GType<CbmState>;
    }
    enum CbmState {
        UNKNOWN,
        RECEIVING,
        RECEIVED,
    }
    class CdmaActivationError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static NONE: number;
        static UNKNOWN: number;
        static ROAMING: number;
        static WRONGRADIOINTERFACE: number;
        static COULDNOTCONNECT: number;
        static SECURITYAUTHENTICATIONFAILED: number;
        static PROVISIONINGFAILED: number;
        static NOSIGNAL: number;
        static TIMEDOUT: number;
        static STARTFAILED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace CellType {
        export const $gtype: GObject.GType<CellType>;
    }
    enum CellType {
        UNKNOWN,
        CDMA,
        GSM,
        UMTS,
        TDSCDMA,
        LTE,
        "5GNR",
    }
    class ConnectionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN: number;
        static NOCARRIER: number;
        static NODIALTONE: number;
        static BUSY: number;
        static NOANSWER: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static FAILED: number;
        static CANCELLED: number;
        static ABORTED: number;
        static UNSUPPORTED: number;
        static NOPLUGINS: number;
        static UNAUTHORIZED: number;
        static INVALIDARGS: number;
        static INPROGRESS: number;
        static WRONGSTATE: number;
        static CONNECTED: number;
        static TOOMANY: number;
        static NOTFOUND: number;
        static RETRY: number;
        static EXISTS: number;
        static WRONGSIMSTATE: number;
        static RESETRETRY: number;
        static TIMEOUT: number;
        static PROTOCOL: number;
        static THROTTLED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace FirmwareImageType {
        export const $gtype: GObject.GType<FirmwareImageType>;
    }
    enum FirmwareImageType {
        UNKNOWN,
        GENERIC,
        GOBI,
    }
    class MessageError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static MEFAILURE: number;
        static SMSSERVICERESERVED: number;
        static NOTALLOWED: number;
        static NOTSUPPORTED: number;
        static INVALIDPDUPARAMETER: number;
        static INVALIDTEXTPARAMETER: number;
        static SIMNOTINSERTED: number;
        static SIMPIN: number;
        static PHSIMPIN: number;
        static SIMFAILURE: number;
        static SIMBUSY: number;
        static SIMWRONG: number;
        static SIMPUK: number;
        static SIMPIN2: number;
        static SIMPUK2: number;
        static MEMORYFAILURE: number;
        static INVALIDINDEX: number;
        static MEMORYFULL: number;
        static SMSCADDRESSUNKNOWN: number;
        static NONETWORK: number;
        static NETWORKTIMEOUT: number;
        static NOCNMAACKEXPECTED: number;
        static UNKNOWN: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class MobileEquipmentError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static PHONEFAILURE: number;
        static NOCONNECTION: number;
        static LINKRESERVED: number;
        static NOTALLOWED: number;
        static NOTSUPPORTED: number;
        static PHSIMPIN: number;
        static PHFSIMPIN: number;
        static PHFSIMPUK: number;
        static SIMNOTINSERTED: number;
        static SIMPIN: number;
        static SIMPUK: number;
        static SIMFAILURE: number;
        static SIMBUSY: number;
        static SIMWRONG: number;
        static INCORRECTPASSWORD: number;
        static SIMPIN2: number;
        static SIMPUK2: number;
        static MEMORYFULL: number;
        static INVALIDINDEX: number;
        static NOTFOUND: number;
        static MEMORYFAILURE: number;
        static TEXTTOOLONG: number;
        static INVALIDCHARS: number;
        static DIALSTRINGTOOLONG: number;
        static DIALSTRINGINVALID: number;
        static NONETWORK: number;
        static NETWORKTIMEOUT: number;
        static NETWORKNOTALLOWED: number;
        static NETWORKPIN: number;
        static NETWORKPUK: number;
        static NETWORKSUBSETPIN: number;
        static NETWORKSUBSETPUK: number;
        static SERVICEPIN: number;
        static SERVICEPUK: number;
        static CORPPIN: number;
        static CORPPUK: number;
        static HIDDENKEYREQUIRED: number;
        static EAPMETHODNOTSUPPORTED: number;
        static INCORRECTPARAMETERS: number;
        static COMMANDDISABLED: number;
        static COMMANDABORTED: number;
        static NOTATTACHEDRESTRICTED: number;
        static NOTALLOWEDEMERGENCYONLY: number;
        static NOTALLOWEDRESTRICTED: number;
        static FIXEDDIALNUMBERONLY: number;
        static TEMPORARILYOUTOFSERVICE: number;
        static LANGUAGEORALPHABETNOTSUPPORTED: number;
        static UNEXPECTEDDATAVALUE: number;
        static SYSTEMFAILURE: number;
        static DATAMISSING: number;
        static CALLBARRED: number;
        static MESSAGEWAITINGINDICATIONSUBSCRIPTIONFAILURE: number;
        static UNKNOWN: number;
        static IMSIUNKNOWNINHSS: number;
        static ILLEGALUE: number;
        static IMSIUNKNOWNINVLR: number;
        static IMEINOTACCEPTED: number;
        static ILLEGALME: number;
        static PSSERVICESNOTALLOWED: number;
        static PSANDNONPSSERVICESNOTALLOWED: number;
        static UEIDENTITYNOTDERIVEDFROMNETWORK: number;
        static IMPLICITLYDETACHED: number;
        static PLMNNOTALLOWED: number;
        static AREANOTALLOWED: number;
        static ROAMINGNOTALLOWEDINAREA: number;
        static PSSERVICESNOTALLOWEDINPLMN: number;
        static NOCELLSINAREA: number;
        static MSCTEMPORARILYNOTREACHABLE: number;
        static NETWORKFAILUREATTACH: number;
        static CSDOMAINUNAVAILABLE: number;
        static ESMFAILURE: number;
        static CONGESTION: number;
        static MBMSBEARERCAPABILITIESINSUFFICIENTFORSERVICE: number;
        static NOTAUTHORIZEDFORCSG: number;
        static INSUFFICIENTRESOURCES: number;
        static MISSINGORUNKNOWNAPN: number;
        static UNKNOWNPDPADDRESSORTYPE: number;
        static USERAUTHENTICATIONFAILED: number;
        static ACTIVATIONREJECTEDBYGGSNORGW: number;
        static ACTIVATIONREJECTEDUNSPECIFIED: number;
        static SERVICEOPTIONNOTSUPPORTED: number;
        static SERVICEOPTIONNOTSUBSCRIBED: number;
        static SERVICEOPTIONOUTOFORDER: number;
        static NSAPIORPTIALREADYINUSE: number;
        static REGULARDEACTIVATION: number;
        static QOSNOTACCEPTED: number;
        static CALLCANNOTBEIDENTIFIED: number;
        static CSSERVICETEMPORARILYUNAVAILABLE: number;
        static FEATURENOTSUPPORTED: number;
        static SEMANTICERRORINTFTOPERATION: number;
        static SYNTACTICALERRORINTFTOPERATION: number;
        static UNKNOWNPDPCONTEXT: number;
        static SEMANTICERRORSINPACKETFILTER: number;
        static SYNTACTICALERRORSINPACKETFILTER: number;
        static PDPCONTEXTWITHOUTTFTALREADYACTIVATED: number;
        static MULTICASTGROUPMEMBERSHIPTIMEOUT: number;
        static GPRSUNKNOWN: number;
        static PDPAUTHFAILURE: number;
        static INVALIDMOBILECLASS: number;
        static LASTPDNDISCONNECTIONNOTALLOWEDLEGACY: number;
        static LASTPDNDISCONNECTIONNOTALLOWED: number;
        static SEMANTICALLYINCORRECTMESSAGE: number;
        static INVALIDMANDATORYINFORMATION: number;
        static MESSAGETYPENOTIMPLEMENTED: number;
        static CONDITIONALIEERROR: number;
        static UNSPECIFIEDPROTOCOLERROR: number;
        static OPERATORDETERMINEDBARRING: number;
        static MAXIMUMNUMBEROFBEARERSREACHED: number;
        static REQUESTEDAPNNOTSUPPORTED: number;
        static REQUESTREJECTEDBCMVIOLATION: number;
        static UNSUPPORTEDQCIOR5QIVALUE: number;
        static USERDATAVIACONTROLPLANECONGESTED: number;
        static SMSPROVIDEDVIAGPRSINROUTINGAREA: number;
        static INVALIDPTIVALUE: number;
        static NOBEARERACTIVATED: number;
        static MESSAGENOTCOMPATIBLEWITHPROTOCOLSTATE: number;
        static RECOVERYONTIMEREXPIRY: number;
        static INVALIDTRANSACTIONIDVALUE: number;
        static SERVICEOPTIONNOTAUTHORIZEDINPLMN: number;
        static NETWORKFAILUREACTIVATION: number;
        static REACTIVATIONREQUESTED: number;
        static IPV4ONLYALLOWED: number;
        static IPV6ONLYALLOWED: number;
        static SINGLEADDRESSBEARERSONLYALLOWED: number;
        static COLLISIONWITHNETWORKINITIATEDREQUEST: number;
        static IPV4V6ONLYALLOWED: number;
        static NONIPONLYALLOWED: number;
        static BEARERHANDLINGUNSUPPORTED: number;
        static APNRESTRICTIONINCOMPATIBLE: number;
        static MULTIPLEACCESSTOPDNCONNECTIONNOTALLOWED: number;
        static ESMINFORMATIONNOTRECEIVED: number;
        static PDNCONNECTIONNONEXISTENT: number;
        static MULTIPLEPDNCONNECTIONSAMEAPNNOTALLOWED: number;
        static SEVERENETWORKFAILURE: number;
        static INSUFFICIENTRESOURCESFORSLICEANDDNN: number;
        static UNSUPPORTEDSSCMODE: number;
        static INSUFFICIENTRESOURCESFORSLICE: number;
        static MESSAGETYPENOTCOMPATIBLEWITHPROTOCOLSTATE: number;
        static IENOTIMPLEMENTED: number;
        static N1MODENOTALLOWED: number;
        static RESTRICTEDSERVICEAREA: number;
        static LADNUNAVAILABLE: number;
        static MISSINGORUNKNOWNDNNINSLICE: number;
        static NKGSIALREADYINUSE: number;
        static PAYLOADNOTFORWARDED: number;
        static NON3GPPACCESSTO5GCNNOTALLOWED: number;
        static SERVINGNETWORKNOTAUTHORIZED: number;
        static DNNNOTSUPPORTEDINSLICE: number;
        static INSUFFICIENTUSERPLANERESOURCESFORPDUSESSION: number;
        static OUTOFLADNSERVICEAREA: number;
        static PTIMISMATCH: number;
        static MAXDATARATEFORUSERPLANEINTEGRITYTOOLOW: number;
        static SEMANTICERRORINQOSOPERATION: number;
        static SYNTACTICALERRORINQOSOPERATION: number;
        static INVALIDMAPPEDEPSBEARERIDENTITY: number;
        static REDIRECTIONTO5GCNREQUIRED: number;
        static REDIRECTIONTOEPCREQUIRED: number;
        static TEMPORARILYUNAUTHORIZEDFORSNPN: number;
        static PERMANENTLYUNAUTHORIZEDFORSNPN: number;
        static ETHERNETONLYALLOWED: number;
        static UNAUTHORIZEDFORCAG: number;
        static NONETWORKSLICESAVAILABLE: number;
        static WIRELINEACCESSAREANOTALLOWED: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    class Modem3gppDrxCycle {
        static $gtype: GObject.GType<Modem3gppDrxCycle>;
        static UNKNOWN: number;
        static UNSUPPORTED: number;
        static "32": number;
        static "64": number;
        static "128": number;
        static "256": number;
    }
    export namespace Modem3gppEpsUeModeOperation {
        export const $gtype: GObject.GType<Modem3gppEpsUeModeOperation>;
    }
    enum Modem3gppEpsUeModeOperation {
        UNKNOWN,
        PS_1,
        PS_2,
        CSPS_1,
        CSPS_2,
    }
    export namespace Modem3gppMicoMode {
        export const $gtype: GObject.GType<Modem3gppMicoMode>;
    }
    enum Modem3gppMicoMode {
        UNKNOWN,
        UNSUPPORTED,
        DISABLED,
        ENABLED,
    }
    export namespace Modem3gppNetworkAvailability {
        export const $gtype: GObject.GType<Modem3gppNetworkAvailability>;
    }
    enum Modem3gppNetworkAvailability {
        UNKNOWN,
        AVAILABLE,
        CURRENT,
        FORBIDDEN,
    }
    export namespace Modem3gppPacketServiceState {
        export const $gtype: GObject.GType<Modem3gppPacketServiceState>;
    }
    enum Modem3gppPacketServiceState {
        UNKNOWN,
        DETACHED,
        ATTACHED,
    }
    export namespace Modem3gppRegistrationState {
        export const $gtype: GObject.GType<Modem3gppRegistrationState>;
    }
    enum Modem3gppRegistrationState {
        IDLE,
        HOME,
        SEARCHING,
        DENIED,
        UNKNOWN,
        ROAMING,
        HOME_SMS_ONLY,
        ROAMING_SMS_ONLY,
        EMERGENCY_ONLY,
        HOME_CSFB_NOT_PREFERRED,
        ROAMING_CSFB_NOT_PREFERRED,
        ATTACHED_RLOS,
    }
    export namespace Modem3gppSubscriptionState {
        export const $gtype: GObject.GType<Modem3gppSubscriptionState>;
    }
    enum Modem3gppSubscriptionState {
        UNKNOWN,
        UNPROVISIONED,
        PROVISIONED,
        OUT_OF_DATA,
    }
    export namespace Modem3gppUssdSessionState {
        export const $gtype: GObject.GType<Modem3gppUssdSessionState>;
    }
    enum Modem3gppUssdSessionState {
        UNKNOWN,
        IDLE,
        ACTIVE,
        USER_RESPONSE,
    }
    export namespace ModemBand {
        export const $gtype: GObject.GType<ModemBand>;
    }
    enum ModemBand {
        UNKNOWN,
        EGSM,
        DCS,
        PCS,
        G850,
        UTRAN_1,
        UTRAN_3,
        UTRAN_4,
        UTRAN_6,
        UTRAN_5,
        UTRAN_8,
        UTRAN_9,
        UTRAN_2,
        UTRAN_7,
        G450,
        G480,
        G750,
        G380,
        G410,
        G710,
        G810,
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
        EUTRAN_22,
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
        EUTRAN_44,
        EUTRAN_45,
        EUTRAN_46,
        EUTRAN_47,
        EUTRAN_48,
        EUTRAN_49,
        EUTRAN_50,
        EUTRAN_51,
        EUTRAN_52,
        EUTRAN_53,
        EUTRAN_54,
        EUTRAN_55,
        EUTRAN_56,
        EUTRAN_57,
        EUTRAN_58,
        EUTRAN_59,
        EUTRAN_60,
        EUTRAN_61,
        EUTRAN_62,
        EUTRAN_63,
        EUTRAN_64,
        EUTRAN_65,
        EUTRAN_66,
        EUTRAN_67,
        EUTRAN_68,
        EUTRAN_69,
        EUTRAN_70,
        EUTRAN_71,
        EUTRAN_85,
        CDMA_BC0,
        CDMA_BC1,
        CDMA_BC2,
        CDMA_BC3,
        CDMA_BC4,
        CDMA_BC5,
        CDMA_BC6,
        CDMA_BC7,
        CDMA_BC8,
        CDMA_BC9,
        CDMA_BC10,
        CDMA_BC11,
        CDMA_BC12,
        CDMA_BC13,
        CDMA_BC14,
        CDMA_BC15,
        CDMA_BC16,
        CDMA_BC17,
        CDMA_BC18,
        CDMA_BC19,
        UTRAN_10,
        UTRAN_11,
        UTRAN_12,
        UTRAN_13,
        UTRAN_14,
        UTRAN_19,
        UTRAN_20,
        UTRAN_21,
        UTRAN_22,
        UTRAN_25,
        UTRAN_26,
        UTRAN_32,
        ANY,
        NGRAN_1,
        NGRAN_2,
        NGRAN_3,
        NGRAN_5,
        NGRAN_7,
        NGRAN_8,
        NGRAN_12,
        NGRAN_13,
        NGRAN_14,
        NGRAN_18,
        NGRAN_20,
        NGRAN_25,
        NGRAN_26,
        NGRAN_28,
        NGRAN_29,
        NGRAN_30,
        NGRAN_34,
        NGRAN_38,
        NGRAN_39,
        NGRAN_40,
        NGRAN_41,
        NGRAN_48,
        NGRAN_50,
        NGRAN_51,
        NGRAN_53,
        NGRAN_65,
        NGRAN_66,
        NGRAN_67,
        NGRAN_70,
        NGRAN_71,
        NGRAN_74,
        NGRAN_75,
        NGRAN_76,
        NGRAN_77,
        NGRAN_78,
        NGRAN_79,
        NGRAN_80,
        NGRAN_81,
        NGRAN_82,
        NGRAN_83,
        NGRAN_84,
        NGRAN_86,
        NGRAN_89,
        NGRAN_90,
        NGRAN_91,
        NGRAN_92,
        NGRAN_93,
        NGRAN_94,
        NGRAN_95,
        NGRAN_257,
        NGRAN_258,
        NGRAN_260,
        NGRAN_261,
    }
    export namespace ModemCdmaActivationState {
        export const $gtype: GObject.GType<ModemCdmaActivationState>;
    }
    enum ModemCdmaActivationState {
        UNKNOWN,
        NOT_ACTIVATED,
        ACTIVATING,
        PARTIALLY_ACTIVATED,
        ACTIVATED,
    }
    export namespace ModemCdmaRegistrationState {
        export const $gtype: GObject.GType<ModemCdmaRegistrationState>;
    }
    enum ModemCdmaRegistrationState {
        UNKNOWN,
        REGISTERED,
        HOME,
        ROAMING,
    }
    export namespace ModemCdmaRmProtocol {
        export const $gtype: GObject.GType<ModemCdmaRmProtocol>;
    }
    enum ModemCdmaRmProtocol {
        UNKNOWN,
        ASYNC,
        PACKET_RELAY,
        PACKET_NETWORK_PPP,
        PACKET_NETWORK_SLIP,
        STU_III,
    }
    export namespace ModemContactsStorage {
        export const $gtype: GObject.GType<ModemContactsStorage>;
    }
    enum ModemContactsStorage {
        UNKNOWN,
        ME,
        SM,
        MT,
    }
    export namespace ModemLock {
        export const $gtype: GObject.GType<ModemLock>;
    }
    enum ModemLock {
        UNKNOWN,
        NONE,
        SIM_PIN,
        SIM_PIN2,
        SIM_PUK,
        SIM_PUK2,
        PH_SP_PIN,
        PH_SP_PUK,
        PH_NET_PIN,
        PH_NET_PUK,
        PH_SIM_PIN,
        PH_CORP_PIN,
        PH_CORP_PUK,
        PH_FSIM_PIN,
        PH_FSIM_PUK,
        PH_NETSUB_PIN,
        PH_NETSUB_PUK,
    }
    export namespace ModemPortType {
        export const $gtype: GObject.GType<ModemPortType>;
    }
    enum ModemPortType {
        UNKNOWN,
        NET,
        AT,
        QCDM,
        GPS,
        QMI,
        MBIM,
        AUDIO,
        IGNORED,
        XMMRPC,
    }
    export namespace ModemPowerState {
        export const $gtype: GObject.GType<ModemPowerState>;
    }
    enum ModemPowerState {
        UNKNOWN,
        OFF,
        LOW,
        ON,
    }
    export namespace ModemState {
        export const $gtype: GObject.GType<ModemState>;
    }
    enum ModemState {
        FAILED,
        UNKNOWN,
        INITIALIZING,
        LOCKED,
        DISABLED,
        DISABLING,
        ENABLING,
        ENABLED,
        SEARCHING,
        REGISTERED,
        DISCONNECTING,
        CONNECTING,
        CONNECTED,
    }
    export namespace ModemStateChangeReason {
        export const $gtype: GObject.GType<ModemStateChangeReason>;
    }
    enum ModemStateChangeReason {
        UNKNOWN,
        USER_REQUESTED,
        SUSPEND,
        FAILURE,
    }
    export namespace ModemStateFailedReason {
        export const $gtype: GObject.GType<ModemStateFailedReason>;
    }
    enum ModemStateFailedReason {
        NONE,
        UNKNOWN,
        SIM_MISSING,
        SIM_ERROR,
        UNKNOWN_CAPABILITIES,
        ESIM_WITHOUT_PROFILES,
    }
    export namespace NetworkError {
        export const $gtype: GObject.GType<NetworkError>;
    }
    enum NetworkError {
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
        CS_DOMAIN_NOT_AVAILABLE,
        ESM_FAILURE,
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
        REDIRECTION_TO_5GCN_REQUIRED,
        SERVICE_OPTION_NOT_SUPPORTED,
        REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
        SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
        REQUESTED_SERVICE_OPTION_NOT_AUTHORIZED,
        CALL_CANNOT_BE_IDENTIFIED,
        CS_SERVICE_TEMPORARILY_NOT_AVAILABLE,
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
        UNKNOWN,
    }
    export namespace OmaSessionState {
        export const $gtype: GObject.GType<OmaSessionState>;
    }
    enum OmaSessionState {
        FAILED,
        UNKNOWN,
        STARTED,
        RETRYING,
        CONNECTING,
        CONNECTED,
        AUTHENTICATED,
        MDN_DOWNLOADED,
        MSID_DOWNLOADED,
        PRL_DOWNLOADED,
        MIP_PROFILE_DOWNLOADED,
        COMPLETED,
    }
    export namespace OmaSessionStateFailedReason {
        export const $gtype: GObject.GType<OmaSessionStateFailedReason>;
    }
    enum OmaSessionStateFailedReason {
        UNKNOWN,
        NETWORK_UNAVAILABLE,
        SERVER_UNAVAILABLE,
        AUTHENTICATION_FAILED,
        MAX_RETRY_EXCEEDED,
        SESSION_CANCELLED,
    }
    export namespace OmaSessionType {
        export const $gtype: GObject.GType<OmaSessionType>;
    }
    enum OmaSessionType {
        UNKNOWN,
        CLIENT_INITIATED_DEVICE_CONFIGURE,
        CLIENT_INITIATED_PRL_UPDATE,
        CLIENT_INITIATED_HANDS_FREE_ACTIVATION,
        NETWORK_INITIATED_DEVICE_CONFIGURE,
        NETWORK_INITIATED_PRL_UPDATE,
        DEVICE_INITIATED_PRL_UPDATE,
        DEVICE_INITIATED_HANDS_FREE_ACTIVATION,
    }
    class SerialError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;
        static UNKNOWN: number;
        static OPENFAILED: number;
        static SENDFAILED: number;
        static RESPONSETIMEOUT: number;
        static OPENFAILEDNODEVICE: number;
        static FLASHFAILED: number;
        static NOTOPEN: number;
        static PARSEFAILED: number;
        static FRAMENOTFOUND: number;
        constructor(options: { message: string; code: number });
        static quark(): GLib.Quark;
    }
    export namespace ServingCellType {
        export const $gtype: GObject.GType<ServingCellType>;
    }
    enum ServingCellType {
        UNKNOWN,
        PCELL,
        SCELL,
        PSCELL,
        SSCELL,
        INVALID,
    }
    export namespace SimEsimStatus {
        export const $gtype: GObject.GType<SimEsimStatus>;
    }
    enum SimEsimStatus {
        UNKNOWN,
        NO_PROFILES,
        WITH_PROFILES,
    }
    export namespace SimRemovability {
        export const $gtype: GObject.GType<SimRemovability>;
    }
    enum SimRemovability {
        UNKNOWN,
        REMOVABLE,
        NOT_REMOVABLE,
    }
    export namespace SimType {
        export const $gtype: GObject.GType<SimType>;
    }
    enum SimType {
        UNKNOWN,
        PHYSICAL,
        ESIM,
    }
    export namespace SmsCdmaServiceCategory {
        export const $gtype: GObject.GType<SmsCdmaServiceCategory>;
    }
    enum SmsCdmaServiceCategory {
        UNKNOWN,
        EMERGENCY_BROADCAST,
        ADMINISTRATIVE,
        MAINTENANCE,
        GENERAL_NEWS_LOCAL,
        GENERAL_NEWS_REGIONAL,
        GENERAL_NEWS_NATIONAL,
        GENERAL_NEWS_INTERNATIONAL,
        BUSINESS_NEWS_LOCAL,
        BUSINESS_NEWS_REGIONAL,
        BUSINESS_NEWS_NATIONAL,
        BUSINESS_NEWS_INTERNATIONAL,
        SPORTS_NEWS_LOCAL,
        SPORTS_NEWS_REGIONAL,
        SPORTS_NEWS_NATIONAL,
        SPORTS_NEWS_INTERNATIONAL,
        ENTERTAINMENT_NEWS_LOCAL,
        ENTERTAINMENT_NEWS_REGIONAL,
        ENTERTAINMENT_NEWS_NATIONAL,
        ENTERTAINMENT_NEWS_INTERNATIONAL,
        LOCAL_WEATHER,
        TRAFFIC_REPORT,
        FLIGHT_SCHEDULES,
        RESTAURANTS,
        LODGINGS,
        RETAIL_DIRECTORY,
        ADVERTISEMENTS,
        STOCK_QUOTES,
        EMPLOYMENT,
        HOSPITALS,
        TECHNOLOGY_NEWS,
        MULTICATEGORY,
        CMAS_PRESIDENTIAL_ALERT,
        CMAS_EXTREME_THREAT,
        CMAS_SEVERE_THREAT,
        CMAS_CHILD_ABDUCTION_EMERGENCY,
        CMAS_TEST,
    }
    export namespace SmsCdmaTeleserviceId {
        export const $gtype: GObject.GType<SmsCdmaTeleserviceId>;
    }
    enum SmsCdmaTeleserviceId {
        UNKNOWN,
        CMT91,
        WPT,
        WMT,
        VMN,
        WAP,
        WEMT,
        SCPT,
        CATPT,
    }
    export namespace SmsDeliveryState {
        export const $gtype: GObject.GType<SmsDeliveryState>;
    }
    enum SmsDeliveryState {
        COMPLETED_RECEIVED,
        COMPLETED_FORWARDED_UNCONFIRMED,
        COMPLETED_REPLACED_BY_SC,
        TEMPORARY_ERROR_CONGESTION,
        TEMPORARY_ERROR_SME_BUSY,
        TEMPORARY_ERROR_NO_RESPONSE_FROM_SME,
        TEMPORARY_ERROR_SERVICE_REJECTED,
        TEMPORARY_ERROR_QOS_NOT_AVAILABLE,
        TEMPORARY_ERROR_IN_SME,
        ERROR_REMOTE_PROCEDURE,
        ERROR_INCOMPATIBLE_DESTINATION,
        ERROR_CONNECTION_REJECTED,
        ERROR_NOT_OBTAINABLE,
        ERROR_QOS_NOT_AVAILABLE,
        ERROR_NO_INTERWORKING_AVAILABLE,
        ERROR_VALIDITY_PERIOD_EXPIRED,
        ERROR_DELETED_BY_ORIGINATING_SME,
        ERROR_DELETED_BY_SC_ADMINISTRATION,
        ERROR_MESSAGE_DOES_NOT_EXIST,
        TEMPORARY_FATAL_ERROR_CONGESTION,
        TEMPORARY_FATAL_ERROR_SME_BUSY,
        TEMPORARY_FATAL_ERROR_NO_RESPONSE_FROM_SME,
        TEMPORARY_FATAL_ERROR_SERVICE_REJECTED,
        TEMPORARY_FATAL_ERROR_QOS_NOT_AVAILABLE,
        TEMPORARY_FATAL_ERROR_IN_SME,
        UNKNOWN,
        NETWORK_PROBLEM_ADDRESS_VACANT,
        NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE,
        NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE,
        NETWORK_PROBLEM_NETWORK_FAILURE,
        NETWORK_PROBLEM_INVALID_TELESERVICE_ID,
        NETWORK_PROBLEM_OTHER,
        TERMINAL_PROBLEM_NO_PAGE_RESPONSE,
        TERMINAL_PROBLEM_DESTINATION_BUSY,
        TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT,
        TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE,
        TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED,
        TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE,
        TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS,
        TERMINAL_PROBLEM_OTHER,
        RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE,
        RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY,
        RADIO_INTERFACE_PROBLEM_OTHER,
        GENERAL_PROBLEM_ENCODING,
        GENERAL_PROBLEM_SMS_ORIGINATION_DENIED,
        GENERAL_PROBLEM_SMS_TERMINATION_DENIED,
        GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
        GENERAL_PROBLEM_SMS_NOT_SUPPORTED,
        GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER,
        GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER,
        GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE,
        GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE,
        GENERAL_PROBLEM_USER_DATA_SIZE_ERROR,
        GENERAL_PROBLEM_OTHER,
        TEMPORARY_NETWORK_PROBLEM_ADDRESS_VACANT,
        TEMPORARY_NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE,
        TEMPORARY_NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE,
        TEMPORARY_NETWORK_PROBLEM_NETWORK_FAILURE,
        TEMPORARY_NETWORK_PROBLEM_INVALID_TELESERVICE_ID,
        TEMPORARY_NETWORK_PROBLEM_OTHER,
        TEMPORARY_TERMINAL_PROBLEM_NO_PAGE_RESPONSE,
        TEMPORARY_TERMINAL_PROBLEM_DESTINATION_BUSY,
        TEMPORARY_TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT,
        TEMPORARY_TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE,
        TEMPORARY_TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED,
        TEMPORARY_TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE,
        TEMPORARY_TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS,
        TEMPORARY_TERMINAL_PROBLEM_OTHER,
        TEMPORARY_RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE,
        TEMPORARY_RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY,
        TEMPORARY_RADIO_INTERFACE_PROBLEM_OTHER,
        TEMPORARY_GENERAL_PROBLEM_ENCODING,
        TEMPORARY_GENERAL_PROBLEM_SMS_ORIGINATION_DENIED,
        TEMPORARY_GENERAL_PROBLEM_SMS_TERMINATION_DENIED,
        TEMPORARY_GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
        TEMPORARY_GENERAL_PROBLEM_SMS_NOT_SUPPORTED,
        TEMPORARY_GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER,
        TEMPORARY_GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER,
        TEMPORARY_GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE,
        TEMPORARY_GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE,
        TEMPORARY_GENERAL_PROBLEM_USER_DATA_SIZE_ERROR,
        TEMPORARY_GENERAL_PROBLEM_OTHER,
    }
    export namespace SmsPduType {
        export const $gtype: GObject.GType<SmsPduType>;
    }
    enum SmsPduType {
        UNKNOWN,
        DELIVER,
        SUBMIT,
        STATUS_REPORT,
        CDMA_DELIVER,
        CDMA_SUBMIT,
        CDMA_CANCELLATION,
        CDMA_DELIVERY_ACKNOWLEDGEMENT,
        CDMA_USER_ACKNOWLEDGEMENT,
        CDMA_READ_ACKNOWLEDGEMENT,
    }
    export namespace SmsState {
        export const $gtype: GObject.GType<SmsState>;
    }
    enum SmsState {
        UNKNOWN,
        STORED,
        RECEIVING,
        RECEIVED,
        SENDING,
        SENT,
    }
    export namespace SmsStorage {
        export const $gtype: GObject.GType<SmsStorage>;
    }
    enum SmsStorage {
        UNKNOWN,
        SM,
        ME,
        MT,
        SR,
        BM,
        TA,
    }
    export namespace SmsValidityType {
        export const $gtype: GObject.GType<SmsValidityType>;
    }
    enum SmsValidityType {
        UNKNOWN,
        RELATIVE,
        ABSOLUTE,
        ENHANCED,
    }
    const __3GPP_PROFILE_ID_UNKNOWN: number;
    const BEARER_METHOD_CONNECT: string;
    const BEARER_METHOD_DISCONNECT: string;
    const BEARER_PROPERTY_BEARERTYPE: string;
    const BEARER_PROPERTY_CONNECTED: string;
    const BEARER_PROPERTY_CONNECTIONERROR: string;
    const BEARER_PROPERTY_INTERFACE: string;
    const BEARER_PROPERTY_IP4CONFIG: string;
    const BEARER_PROPERTY_IP6CONFIG: string;
    const BEARER_PROPERTY_IPTIMEOUT: string;
    const BEARER_PROPERTY_MULTIPLEXED: string;
    const BEARER_PROPERTY_PROFILEID: string;
    const BEARER_PROPERTY_PROPERTIES: string;
    const BEARER_PROPERTY_RELOADSTATSSUPPORTED: string;
    const BEARER_PROPERTY_STATS: string;
    const BEARER_PROPERTY_SUSPENDED: string;
    const CALL_METHOD_ACCEPT: string;
    const CALL_METHOD_DEFLECT: string;
    const CALL_METHOD_HANGUP: string;
    const CALL_METHOD_JOINMULTIPARTY: string;
    const CALL_METHOD_LEAVEMULTIPARTY: string;
    const CALL_METHOD_SENDDTMF: string;
    const CALL_METHOD_START: string;
    const CALL_PROPERTY_AUDIOFORMAT: string;
    const CALL_PROPERTY_AUDIOPORT: string;
    const CALL_PROPERTY_DIRECTION: string;
    const CALL_PROPERTY_MULTIPARTY: string;
    const CALL_PROPERTY_NUMBER: string;
    const CALL_PROPERTY_STATE: string;
    const CALL_PROPERTY_STATEREASON: string;
    const CALL_SIGNAL_DTMFRECEIVED: string;
    const CALL_SIGNAL_STATECHANGED: string;
    const CBM_PROPERTY_CHANNEL: string;
    const CBM_PROPERTY_MESSAGECODE: string;
    const CBM_PROPERTY_STATE: string;
    const CBM_PROPERTY_TEXT: string;
    const CBM_PROPERTY_UPDATE: string;
    const DBUS_ERROR_PREFIX: string;
    const DBUS_INTERFACE: string;
    const DBUS_INTERFACE_BEARER: string;
    const DBUS_INTERFACE_CALL: string;
    const DBUS_INTERFACE_CBM: string;
    const DBUS_INTERFACE_MODEM: string;
    const DBUS_INTERFACE_MODEM_CELLBROADCAST: string;
    const DBUS_INTERFACE_MODEM_FIRMWARE: string;
    const DBUS_INTERFACE_MODEM_LOCATION: string;
    const DBUS_INTERFACE_MODEM_MESSAGING: string;
    const DBUS_INTERFACE_MODEM_MODEM3GPP: string;
    const DBUS_INTERFACE_MODEM_MODEM3GPP_PROFILEMANAGER: string;
    const DBUS_INTERFACE_MODEM_MODEM3GPP_USSD: string;
    const DBUS_INTERFACE_MODEM_MODEMCDMA: string;
    const DBUS_INTERFACE_MODEM_OMA: string;
    const DBUS_INTERFACE_MODEM_SAR: string;
    const DBUS_INTERFACE_MODEM_SIGNAL: string;
    const DBUS_INTERFACE_MODEM_SIMPLE: string;
    const DBUS_INTERFACE_MODEM_TIME: string;
    const DBUS_INTERFACE_MODEM_VOICE: string;
    const DBUS_INTERFACE_SIM: string;
    const DBUS_INTERFACE_SMS: string;
    const DBUS_PATH: string;
    const DBUS_SERVICE: string;
    const MAJOR_VERSION: number;
    const MANAGER_METHOD_INHIBITDEVICE: string;
    const MANAGER_METHOD_REPORTKERNELEVENT: string;
    const MANAGER_METHOD_SCANDEVICES: string;
    const MANAGER_METHOD_SETLOGGING: string;
    const MANAGER_PROPERTY_VERSION: string;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const MODEM_CDMA_NID_UNKNOWN: number;
    const MODEM_CDMA_SID_UNKNOWN: number;
    const MODEM_CELLBROADCAST_METHOD_DELETE: string;
    const MODEM_CELLBROADCAST_METHOD_LIST: string;
    const MODEM_CELLBROADCAST_METHOD_SETCHANNELS: string;
    const MODEM_CELLBROADCAST_PROPERTY_CELLBROADCASTS: string;
    const MODEM_CELLBROADCAST_PROPERTY_CHANNELS: string;
    const MODEM_CELLBROADCAST_SIGNAL_ADDED: string;
    const MODEM_CELLBROADCAST_SIGNAL_DELETED: string;
    const MODEM_FIRMWARE_METHOD_LIST: string;
    const MODEM_FIRMWARE_METHOD_SELECT: string;
    const MODEM_FIRMWARE_PROPERTY_UPDATESETTINGS: string;
    const MODEM_LOCATION_METHOD_GETLOCATION: string;
    const MODEM_LOCATION_METHOD_INJECTASSISTANCEDATA: string;
    const MODEM_LOCATION_METHOD_SETGPSREFRESHRATE: string;
    const MODEM_LOCATION_METHOD_SETSUPLSERVER: string;
    const MODEM_LOCATION_METHOD_SETUP: string;
    const MODEM_LOCATION_PROPERTY_ASSISTANCEDATASERVERS: string;
    const MODEM_LOCATION_PROPERTY_CAPABILITIES: string;
    const MODEM_LOCATION_PROPERTY_ENABLED: string;
    const MODEM_LOCATION_PROPERTY_GPSREFRESHRATE: string;
    const MODEM_LOCATION_PROPERTY_LOCATION: string;
    const MODEM_LOCATION_PROPERTY_SIGNALSLOCATION: string;
    const MODEM_LOCATION_PROPERTY_SUPLSERVER: string;
    const MODEM_LOCATION_PROPERTY_SUPPORTEDASSISTANCEDATA: string;
    const MODEM_MESSAGING_METHOD_CREATE: string;
    const MODEM_MESSAGING_METHOD_DELETE: string;
    const MODEM_MESSAGING_METHOD_LIST: string;
    const MODEM_MESSAGING_METHOD_SETDEFAULTSTORAGE: string;
    const MODEM_MESSAGING_PROPERTY_DEFAULTSTORAGE: string;
    const MODEM_MESSAGING_PROPERTY_MESSAGES: string;
    const MODEM_MESSAGING_PROPERTY_SUPPORTEDSTORAGES: string;
    const MODEM_MESSAGING_SIGNAL_ADDED: string;
    const MODEM_MESSAGING_SIGNAL_DELETED: string;
    const MODEM_METHOD_COMMAND: string;
    const MODEM_METHOD_CREATEBEARER: string;
    const MODEM_METHOD_DELETEBEARER: string;
    const MODEM_METHOD_ENABLE: string;
    const MODEM_METHOD_FACTORYRESET: string;
    const MODEM_METHOD_GETCELLINFO: string;
    const MODEM_METHOD_LISTBEARERS: string;
    const MODEM_METHOD_RESET: string;
    const MODEM_METHOD_SETCURRENTBANDS: string;
    const MODEM_METHOD_SETCURRENTCAPABILITIES: string;
    const MODEM_METHOD_SETCURRENTMODES: string;
    const MODEM_METHOD_SETPOWERSTATE: string;
    const MODEM_METHOD_SETPRIMARYSIMSLOT: string;
    const MODEM_MODEM3GPP_METHOD_DISABLEFACILITYLOCK: string;
    const MODEM_MODEM3GPP_METHOD_REGISTER: string;
    const MODEM_MODEM3GPP_METHOD_SCAN: string;
    const MODEM_MODEM3GPP_METHOD_SETCARRIERLOCK: string;
    const MODEM_MODEM3GPP_METHOD_SETEPSUEMODEOPERATION: string;
    const MODEM_MODEM3GPP_METHOD_SETINITIALEPSBEARERSETTINGS: string;
    const MODEM_MODEM3GPP_METHOD_SETNR5GREGISTRATIONSETTINGS: string;
    const MODEM_MODEM3GPP_METHOD_SETPACKETSERVICESTATE: string;
    const MODEM_MODEM3GPP_PROFILEMANAGER_METHOD_DELETE: string;
    const MODEM_MODEM3GPP_PROFILEMANAGER_METHOD_LIST: string;
    const MODEM_MODEM3GPP_PROFILEMANAGER_METHOD_SET: string;
    const MODEM_MODEM3GPP_PROFILEMANAGER_PROPERTY_INDEXFIELD: string;
    const MODEM_MODEM3GPP_PROFILEMANAGER_SIGNAL_UPDATED: string;
    const MODEM_MODEM3GPP_PROPERTY_ENABLEDFACILITYLOCKS: string;
    const MODEM_MODEM3GPP_PROPERTY_EPSUEMODEOPERATION: string;
    const MODEM_MODEM3GPP_PROPERTY_IMEI: string;
    const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARER: string;
    const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARERSETTINGS: string;
    const MODEM_MODEM3GPP_PROPERTY_NETWORKREJECTION: string;
    const MODEM_MODEM3GPP_PROPERTY_NR5GREGISTRATIONSETTINGS: string;
    const MODEM_MODEM3GPP_PROPERTY_OPERATORCODE: string;
    const MODEM_MODEM3GPP_PROPERTY_OPERATORNAME: string;
    const MODEM_MODEM3GPP_PROPERTY_PACKETSERVICESTATE: string;
    const MODEM_MODEM3GPP_PROPERTY_PCO: string;
    const MODEM_MODEM3GPP_PROPERTY_REGISTRATIONSTATE: string;
    const MODEM_MODEM3GPP_PROPERTY_SUBSCRIPTIONSTATE: string;
    const MODEM_MODEM3GPP_USSD_METHOD_CANCEL: string;
    const MODEM_MODEM3GPP_USSD_METHOD_INITIATE: string;
    const MODEM_MODEM3GPP_USSD_METHOD_RESPOND: string;
    const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKNOTIFICATION: string;
    const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKREQUEST: string;
    const MODEM_MODEM3GPP_USSD_PROPERTY_STATE: string;
    const MODEM_MODEMCDMA_METHOD_ACTIVATE: string;
    const MODEM_MODEMCDMA_METHOD_ACTIVATEMANUAL: string;
    const MODEM_MODEMCDMA_PROPERTY_ACTIVATIONSTATE: string;
    const MODEM_MODEMCDMA_PROPERTY_CDMA1XREGISTRATIONSTATE: string;
    const MODEM_MODEMCDMA_PROPERTY_ESN: string;
    const MODEM_MODEMCDMA_PROPERTY_EVDOREGISTRATIONSTATE: string;
    const MODEM_MODEMCDMA_PROPERTY_MEID: string;
    const MODEM_MODEMCDMA_PROPERTY_NID: string;
    const MODEM_MODEMCDMA_PROPERTY_SID: string;
    const MODEM_MODEMCDMA_SIGNAL_ACTIVATIONSTATECHANGED: string;
    const MODEM_OMA_METHOD_ACCEPTNETWORKINITIATEDSESSION: string;
    const MODEM_OMA_METHOD_CANCELSESSION: string;
    const MODEM_OMA_METHOD_SETUP: string;
    const MODEM_OMA_METHOD_STARTCLIENTINITIATEDSESSION: string;
    const MODEM_OMA_PROPERTY_FEATURES: string;
    const MODEM_OMA_PROPERTY_PENDINGNETWORKINITIATEDSESSIONS: string;
    const MODEM_OMA_PROPERTY_SESSIONSTATE: string;
    const MODEM_OMA_PROPERTY_SESSIONTYPE: string;
    const MODEM_OMA_SIGNAL_SESSIONSTATECHANGED: string;
    const MODEM_PROPERTY_ACCESSTECHNOLOGIES: string;
    const MODEM_PROPERTY_BEARERS: string;
    const MODEM_PROPERTY_CARRIERCONFIGURATION: string;
    const MODEM_PROPERTY_CARRIERCONFIGURATIONREVISION: string;
    const MODEM_PROPERTY_CURRENTBANDS: string;
    const MODEM_PROPERTY_CURRENTCAPABILITIES: string;
    const MODEM_PROPERTY_CURRENTMODES: string;
    const MODEM_PROPERTY_DEVICE: string;
    const MODEM_PROPERTY_DEVICEIDENTIFIER: string;
    const MODEM_PROPERTY_DRIVERS: string;
    const MODEM_PROPERTY_EQUIPMENTIDENTIFIER: string;
    const MODEM_PROPERTY_HARDWAREREVISION: string;
    const MODEM_PROPERTY_MANUFACTURER: string;
    const MODEM_PROPERTY_MAXACTIVEBEARERS: string;
    const MODEM_PROPERTY_MAXACTIVEMULTIPLEXEDBEARERS: string;
    const MODEM_PROPERTY_MAXBEARERS: string;
    const MODEM_PROPERTY_MODEL: string;
    const MODEM_PROPERTY_OWNNUMBERS: string;
    const MODEM_PROPERTY_PHYSDEV: string;
    const MODEM_PROPERTY_PLUGIN: string;
    const MODEM_PROPERTY_PORTS: string;
    const MODEM_PROPERTY_POWERSTATE: string;
    const MODEM_PROPERTY_PRIMARYPORT: string;
    const MODEM_PROPERTY_PRIMARYSIMSLOT: string;
    const MODEM_PROPERTY_REVISION: string;
    const MODEM_PROPERTY_SIGNALQUALITY: string;
    const MODEM_PROPERTY_SIM: string;
    const MODEM_PROPERTY_SIMSLOTS: string;
    const MODEM_PROPERTY_STATE: string;
    const MODEM_PROPERTY_STATEFAILEDREASON: string;
    const MODEM_PROPERTY_SUPPORTEDBANDS: string;
    const MODEM_PROPERTY_SUPPORTEDCAPABILITIES: string;
    const MODEM_PROPERTY_SUPPORTEDIPFAMILIES: string;
    const MODEM_PROPERTY_SUPPORTEDMODES: string;
    const MODEM_PROPERTY_UNLOCKREQUIRED: string;
    const MODEM_PROPERTY_UNLOCKRETRIES: string;
    const MODEM_SAR_METHOD_ENABLE: string;
    const MODEM_SAR_METHOD_SETPOWERLEVEL: string;
    const MODEM_SAR_PROPERTY_POWERLEVEL: string;
    const MODEM_SAR_PROPERTY_STATE: string;
    const MODEM_SIGNAL_METHOD_SETUP: string;
    const MODEM_SIGNAL_METHOD_SETUPTHRESHOLDS: string;
    const MODEM_SIGNAL_PROPERTY_CDMA: string;
    const MODEM_SIGNAL_PROPERTY_ERRORRATETHRESHOLD: string;
    const MODEM_SIGNAL_PROPERTY_EVDO: string;
    const MODEM_SIGNAL_PROPERTY_GSM: string;
    const MODEM_SIGNAL_PROPERTY_LTE: string;
    const MODEM_SIGNAL_PROPERTY_NR5G: string;
    const MODEM_SIGNAL_PROPERTY_RATE: string;
    const MODEM_SIGNAL_PROPERTY_RSSITHRESHOLD: string;
    const MODEM_SIGNAL_PROPERTY_UMTS: string;
    const MODEM_SIGNAL_STATECHANGED: string;
    const MODEM_SIMPLE_METHOD_CONNECT: string;
    const MODEM_SIMPLE_METHOD_DISCONNECT: string;
    const MODEM_SIMPLE_METHOD_GETSTATUS: string;
    const MODEM_TIME_METHOD_GETNETWORKTIME: string;
    const MODEM_TIME_PROPERTY_NETWORKTIMEZONE: string;
    const MODEM_TIME_SIGNAL_NETWORKTIMECHANGED: string;
    const MODEM_VOICE_METHOD_CALLWAITINGQUERY: string;
    const MODEM_VOICE_METHOD_CALLWAITINGSETUP: string;
    const MODEM_VOICE_METHOD_CREATECALL: string;
    const MODEM_VOICE_METHOD_DELETECALL: string;
    const MODEM_VOICE_METHOD_HANGUPALL: string;
    const MODEM_VOICE_METHOD_HANGUPANDACCEPT: string;
    const MODEM_VOICE_METHOD_HOLDANDACCEPT: string;
    const MODEM_VOICE_METHOD_LISTCALLS: string;
    const MODEM_VOICE_METHOD_TRANSFER: string;
    const MODEM_VOICE_PROPERTY_CALLS: string;
    const MODEM_VOICE_PROPERTY_EMERGENCYONLY: string;
    const MODEM_VOICE_SIGNAL_CALLADDED: string;
    const MODEM_VOICE_SIGNAL_CALLDELETED: string;
    const SIMPLE_PROPERTY_3GPP_OPERATOR_CODE: string;
    const SIMPLE_PROPERTY_3GPP_OPERATOR_NAME: string;
    const SIMPLE_PROPERTY_3GPP_REGISTRATION_STATE: string;
    const SIMPLE_PROPERTY_3GPP_SUBSCRIPTION_STATE: string;
    const SIMPLE_PROPERTY_ACCESS_TECHNOLOGIES: string;
    const SIMPLE_PROPERTY_CDMA_CDMA1X_REGISTRATION_STATE: string;
    const SIMPLE_PROPERTY_CDMA_EVDO_REGISTRATION_STATE: string;
    const SIMPLE_PROPERTY_CDMA_NID: string;
    const SIMPLE_PROPERTY_CDMA_SID: string;
    const SIMPLE_PROPERTY_CURRENT_BANDS: string;
    const SIMPLE_PROPERTY_SIGNAL_QUALITY: string;
    const SIMPLE_PROPERTY_STATE: string;
    const SIM_METHOD_CHANGEPIN: string;
    const SIM_METHOD_ENABLEPIN: string;
    const SIM_METHOD_SENDPIN: string;
    const SIM_METHOD_SENDPUK: string;
    const SIM_METHOD_SETPREFERREDNETWORKS: string;
    const SIM_PROPERTY_ACTIVE: string;
    const SIM_PROPERTY_EID: string;
    const SIM_PROPERTY_EMERGENCYNUMBERS: string;
    const SIM_PROPERTY_ESIMSTATUS: string;
    const SIM_PROPERTY_GID1: string;
    const SIM_PROPERTY_GID2: string;
    const SIM_PROPERTY_IMSI: string;
    const SIM_PROPERTY_OPERATORIDENTIFIER: string;
    const SIM_PROPERTY_OPERATORNAME: string;
    const SIM_PROPERTY_PREFERREDNETWORKS: string;
    const SIM_PROPERTY_REMOVABILITY: string;
    const SIM_PROPERTY_SIMIDENTIFIER: string;
    const SIM_PROPERTY_SIMTYPE: string;
    const SMS_METHOD_SEND: string;
    const SMS_METHOD_STORE: string;
    const SMS_PROPERTY_CLASS: string;
    const SMS_PROPERTY_DATA: string;
    const SMS_PROPERTY_DELIVERYREPORTREQUEST: string;
    const SMS_PROPERTY_DELIVERYSTATE: string;
    const SMS_PROPERTY_DISCHARGETIMESTAMP: string;
    const SMS_PROPERTY_MESSAGEREFERENCE: string;
    const SMS_PROPERTY_NUMBER: string;
    const SMS_PROPERTY_PDUTYPE: string;
    const SMS_PROPERTY_SERVICECATEGORY: string;
    const SMS_PROPERTY_SMSC: string;
    const SMS_PROPERTY_STATE: string;
    const SMS_PROPERTY_STORAGE: string;
    const SMS_PROPERTY_TELESERVICEID: string;
    const SMS_PROPERTY_TEXT: string;
    const SMS_PROPERTY_TIMESTAMP: string;
    const SMS_PROPERTY_VALIDITY: string;
    const UNLOCK_RETRIES_UNKNOWN: number;
    function bearer_access_type_preference_get_string(val: BearerAccessTypePreference): string;
    function bearer_allowed_auth_build_string_from_mask(mask: BearerAllowedAuth): string;
    function bearer_apn_type_build_string_from_mask(mask: BearerApnType): string;
    function bearer_ip_family_build_string_from_mask(mask: BearerIpFamily): string;
    function bearer_ip_method_get_string(val: BearerIpMethod): string;
    function bearer_multiplex_support_get_string(val: BearerMultiplexSupport): string;
    function bearer_profile_source_get_string(val: BearerProfileSource): string;
    function bearer_roaming_allowance_build_string_from_mask(mask: BearerRoamingAllowance): string;
    function bearer_type_get_string(val: BearerType): string;
    function call_direction_get_string(val: CallDirection): string;
    function call_state_get_string(val: CallState): string;
    function call_state_reason_get_string(val: CallStateReason): string;
    function carrier_lock_error_quark(): GLib.Quark;
    function cbm_state_get_string(val: CbmState): string;
    function cdma_activation_error_quark(): GLib.Quark;
    function cell_type_get_string(val: CellType): string;
    function connection_error_quark(): GLib.Quark;
    function core_error_quark(): GLib.Quark;
    function firmware_image_type_get_string(val: FirmwareImageType): string;
    function gdbus_bearer_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_bearer_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_call_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_call_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_cbm_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_cbm_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem3gpp_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem3gpp_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem3gpp_profile_manager_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem3gpp_profile_manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem3gpp_ussd_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem3gpp_ussd_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_cdma_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_cdma_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_cell_broadcast_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_cell_broadcast_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_firmware_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_firmware_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_location_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_location_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_messaging_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_messaging_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_oma_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_oma_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_sar_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_sar_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_signal_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_signal_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_simple_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_simple_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_time_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_time_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_modem_voice_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_modem_voice_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_org_freedesktop_modem_manager1_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_org_freedesktop_modem_manager1_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_sim_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_sim_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function gdbus_sms_interface_info(): Gio.DBusInterfaceInfo;
    function gdbus_sms_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    function message_error_quark(): GLib.Quark;
    function mobile_equipment_error_quark(): GLib.Quark;
    function modem_3gpp_drx_cycle_get_string(val: Modem3gppDrxCycle): string;
    function modem_3gpp_eps_ue_mode_operation_get_string(val: Modem3gppEpsUeModeOperation): string;
    function modem_3gpp_facility_build_string_from_mask(mask: Modem3gppFacility): string;
    function modem_3gpp_mico_mode_get_string(val: Modem3gppMicoMode): string;
    function modem_3gpp_network_availability_get_string(val: Modem3gppNetworkAvailability): string;
    function modem_3gpp_packet_service_state_get_string(val: Modem3gppPacketServiceState): string;
    function modem_3gpp_registration_state_get_string(val: Modem3gppRegistrationState): string;
    function modem_3gpp_subscription_state_get_string(val: Modem3gppSubscriptionState): string;
    function modem_3gpp_ussd_session_state_get_string(val: Modem3gppUssdSessionState): string;
    function modem_access_technology_build_string_from_mask(mask: ModemAccessTechnology): string;
    function modem_band_get_string(val: ModemBand): string;
    function modem_capability_build_string_from_mask(mask: ModemCapability): string;
    function modem_cdma_activation_state_get_string(val: ModemCdmaActivationState): string;
    function modem_cdma_registration_state_get_string(val: ModemCdmaRegistrationState): string;
    function modem_cdma_rm_protocol_get_string(val: ModemCdmaRmProtocol): string;
    function modem_contacts_storage_get_string(val: ModemContactsStorage): string;
    function modem_firmware_update_method_build_string_from_mask(mask: ModemFirmwareUpdateMethod): string;
    function modem_location_assistance_data_type_build_string_from_mask(mask: ModemLocationAssistanceDataType): string;
    function modem_location_source_build_string_from_mask(mask: ModemLocationSource): string;
    function modem_lock_get_string(val: ModemLock): string;
    function modem_mode_build_string_from_mask(mask: ModemMode): string;
    function modem_port_type_get_string(val: ModemPortType): string;
    function modem_power_state_get_string(val: ModemPowerState): string;
    function modem_state_change_reason_get_string(val: ModemStateChangeReason): string;
    function modem_state_failed_reason_get_string(val: ModemStateFailedReason): string;
    function modem_state_get_string(val: ModemState): string;
    function network_error_get_string(val: NetworkError): string;
    function oma_feature_build_string_from_mask(mask: OmaFeature): string;
    function oma_session_state_failed_reason_get_string(val: OmaSessionStateFailedReason): string;
    function oma_session_state_get_string(val: OmaSessionState): string;
    function oma_session_type_get_string(val: OmaSessionType): string;
    function serial_error_quark(): GLib.Quark;
    function serving_cell_type_get_string(val: ServingCellType): string;
    function sim_esim_status_get_string(val: SimEsimStatus): string;
    function sim_removability_get_string(val: SimRemovability): string;
    function sim_type_get_string(val: SimType): string;
    function sms_cdma_service_category_get_string(val: SmsCdmaServiceCategory): string;
    function sms_cdma_teleservice_id_get_string(val: SmsCdmaTeleserviceId): string;
    function sms_delivery_state_get_string(val: SmsDeliveryState): string;
    function sms_pdu_type_get_string(val: SmsPduType): string;
    function sms_state_get_string(val: SmsState): string;
    function sms_storage_get_string(val: SmsStorage): string;
    function sms_validity_type_get_string(val: SmsValidityType): string;
    interface UnlockRetriesForeachCb {
        (lock: ModemLock, count: number): void;
    }
    enum __3gppProfileCmpFlags {
        NONE,
        NO_PROFILE_ID,
        NO_PROFILE_NAME,
        NO_AUTH,
        NO_APN_TYPE,
        NO_IP_TYPE,
        NO_ACCESS_TYPE_PREFERENCE,
        NO_ENABLED,
        NO_ROAMING_ALLOWANCE,
        NO_PROFILE_SOURCE,
    }
    export namespace BearerAllowedAuth {
        export const $gtype: GObject.GType<BearerAllowedAuth>;
    }
    enum BearerAllowedAuth {
        UNKNOWN,
        NONE,
        PAP,
        CHAP,
        MSCHAP,
        MSCHAPV2,
        EAP,
    }
    export namespace BearerApnType {
        export const $gtype: GObject.GType<BearerApnType>;
    }
    enum BearerApnType {
        NONE,
        INITIAL,
        DEFAULT,
        IMS,
        MMS,
        MANAGEMENT,
        VOICE,
        EMERGENCY,
        PRIVATE,
        PURCHASE,
        VIDEO_SHARE,
        LOCAL,
        APP,
        XCAP,
        TETHERING,
    }
    export namespace BearerIpFamily {
        export const $gtype: GObject.GType<BearerIpFamily>;
    }
    enum BearerIpFamily {
        NONE,
        IPV4,
        IPV6,
        IPV4V6,
        NON_IP,
        ANY,
    }
    enum BearerPropertiesCmpFlags {
        NONE,
        LOOSE,
        NO_PASSWORD,
        NO_ALLOW_ROAMING,
        NO_RM_PROTOCOL,
        NO_APN_TYPE,
        NO_PROFILE_ID,
        NO_PROFILE_NAME,
        NO_ACCESS_TYPE_PREFERENCE,
        NO_ROAMING_ALLOWANCE,
    }
    export namespace BearerRoamingAllowance {
        export const $gtype: GObject.GType<BearerRoamingAllowance>;
    }
    enum BearerRoamingAllowance {
        NONE,
        HOME,
        PARTNER,
        NON_PARTNER,
    }
    export namespace Modem3gppFacility {
        export const $gtype: GObject.GType<Modem3gppFacility>;
    }
    enum Modem3gppFacility {
        NONE,
        SIM,
        FIXED_DIALING,
        PH_SIM,
        PH_FSIM,
        NET_PERS,
        NET_SUB_PERS,
        PROVIDER_PERS,
        CORP_PERS,
    }
    export namespace ModemAccessTechnology {
        export const $gtype: GObject.GType<ModemAccessTechnology>;
    }
    enum ModemAccessTechnology {
        UNKNOWN,
        POTS,
        GSM,
        GSM_COMPACT,
        GPRS,
        EDGE,
        UMTS,
        HSDPA,
        HSUPA,
        HSPA,
        HSPA_PLUS,
        "1XRTT",
        EVDO0,
        EVDOA,
        EVDOB,
        LTE,
        "5GNR",
        LTE_CAT_M,
        LTE_NB_IOT,
        ANY,
    }
    export namespace ModemCapability {
        export const $gtype: GObject.GType<ModemCapability>;
    }
    enum ModemCapability {
        NONE,
        POTS,
        CDMA_EVDO,
        GSM_UMTS,
        LTE,
        IRIDIUM,
        "5GNR",
        TDS,
        ANY,
    }
    export namespace ModemFirmwareUpdateMethod {
        export const $gtype: GObject.GType<ModemFirmwareUpdateMethod>;
    }
    enum ModemFirmwareUpdateMethod {
        NONE,
        FASTBOOT,
        QMI_PDC,
        MBIM_QDU,
        FIREHOSE,
        SAHARA,
        DFOTA,
        CINTERION_FDL,
    }
    export namespace ModemLocationAssistanceDataType {
        export const $gtype: GObject.GType<ModemLocationAssistanceDataType>;
    }
    enum ModemLocationAssistanceDataType {
        NONE,
        XTRA,
    }
    export namespace ModemLocationSource {
        export const $gtype: GObject.GType<ModemLocationSource>;
    }
    enum ModemLocationSource {
        NONE,
        "3GPP_LAC_CI",
        GPS_RAW,
        GPS_NMEA,
        CDMA_BS,
        GPS_UNMANAGED,
        AGPS_MSA,
        AGPS_MSB,
    }
    export namespace ModemMode {
        export const $gtype: GObject.GType<ModemMode>;
    }
    enum ModemMode {
        NONE,
        CS,
        "2G",
        "3G",
        "4G",
        "5G",
        ANY,
    }
    export namespace OmaFeature {
        export const $gtype: GObject.GType<OmaFeature>;
    }
    enum OmaFeature {
        NONE,
        DEVICE_PROVISIONING,
        PRL_UPDATE,
        HANDS_FREE_ACTIVATION,
    }
    namespace __3gppProfile {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class __3gppProfile extends GObject.Object {
        static $gtype: GObject.GType<__3gppProfile>;
        $signals: __3gppProfile.SignalSignatures;
        constructor(properties?: Partial<__3gppProfile.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): __3gppProfile;
        connect<K extends keyof __3gppProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, __3gppProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof __3gppProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, __3gppProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof __3gppProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<__3gppProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        consume_string(key: string, value: string): boolean;
        consume_variant(key: string, value: GLib.Variant): boolean;
        get_access_type_preference(): BearerAccessTypePreference;
        get_allowed_auth(): BearerAllowedAuth;
        get_apn(): string;
        get_apn_type(): BearerApnType;
        get_enabled(): boolean;
        get_ip_type(): BearerIpFamily;
        get_password(): string;
        get_profile_id(): number;
        get_profile_name(): string;
        get_profile_source(): BearerProfileSource;
        get_roaming_allowance(): BearerRoamingAllowance;
        get_user(): string;
        set_access_type_preference(access_type_preference: BearerAccessTypePreference): void;
        set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
        set_apn(apn: string): void;
        set_apn_type(apn_type: BearerApnType): void;
        set_enabled(enabled: boolean): void;
        set_ip_type(ip_type: BearerIpFamily): void;
        set_password(password: string): void;
        set_profile_id(profile_id: number): void;
        set_profile_name(profile_name: string): void;
        set_profile_source(profile_source: BearerProfileSource): void;
        set_roaming_allowance(roaming_allowance: BearerRoamingAllowance): void;
        set_user(user: string): void;
    }
    namespace Bearer {
        interface SignalSignatures extends GdbusBearerProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::bearer-type": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::connection-error": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::ip-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::ip4-config": (pspec: GObject.ParamSpec) => void;
            "notify::ip6-config": (pspec: GObject.ParamSpec) => void;
            "notify::multiplexed": (pspec: GObject.ParamSpec) => void;
            "notify::profile-id": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::reload-stats-supported": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusBearerProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusBearer.ConstructorProps {}
    }
    class Bearer extends GdbusBearerProxy implements Gio.AsyncInitable<Bearer>, Gio.DBusInterface, Gio.Initable, GdbusBearer {
        static $gtype: GObject.GType<Bearer>;
        $signals: Bearer.SignalSignatures;
        constructor(properties?: Partial<Bearer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Bearer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bearer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bearer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bearer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bearer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bearer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): boolean;
        connect_sync(cancellable: Gio.Cancellable | null): boolean;
        disconnect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disconnect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disconnect(...args: never[]): any;
        disconnect_finish(res: Gio.AsyncResult): boolean;
        disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
        dup_interface(): string;
        dup_path(): string;
        get_bearer_type(): BearerType;
        get_connected(): boolean;
        get_connection_error(): GLib.Error;
        get_interface(): string;
        get_ip_timeout(): number;
        get_ipv4_config(): BearerIpConfig;
        get_ipv6_config(): BearerIpConfig;
        get_multiplexed(): boolean;
        get_path(): string;
        get_profile_id(): number;
        get_properties(): BearerProperties;
        get_reload_stats_supported(): boolean;
        get_stats(): BearerStats;
        get_suspended(): boolean;
        peek_connection_error(): GLib.Error;
        peek_ipv4_config(): BearerIpConfig;
        peek_ipv6_config(): BearerIpConfig;
        peek_properties(): BearerProperties;
        peek_stats(): BearerStats;
        get bearer_type(): number;
        set bearer_type(val: number);
        get bearerType(): number;
        set bearerType(val: number);
        get connected(): boolean;
        set connected(val: boolean);
        get connection_error(): GLib.Variant | null;
        set connection_error(val: GLib.Variant | null);
        get connectionError(): GLib.Variant | null;
        set connectionError(val: GLib.Variant | null);
        get "interface"(): string | null;
        set "interface"(val: string | null);
        get ip_timeout(): number;
        set ip_timeout(val: number);
        get ipTimeout(): number;
        set ipTimeout(val: number);
        get ip4_config(): GLib.Variant | null;
        set ip4_config(val: GLib.Variant | null);
        get ip4Config(): GLib.Variant | null;
        set ip4Config(val: GLib.Variant | null);
        get ip6_config(): GLib.Variant | null;
        set ip6_config(val: GLib.Variant | null);
        get ip6Config(): GLib.Variant | null;
        set ip6Config(val: GLib.Variant | null);
        get multiplexed(): boolean;
        set multiplexed(val: boolean);
        get profile_id(): number;
        set profile_id(val: number);
        get profileId(): number;
        set profileId(val: number);
        get properties(): GLib.Variant | null;
        set properties(val: GLib.Variant | null);
        get reload_stats_supported(): boolean;
        set reload_stats_supported(val: boolean);
        get reloadStatsSupported(): boolean;
        set reloadStatsSupported(val: boolean);
        get stats(): GLib.Variant | null;
        set stats(val: GLib.Variant | null);
        get suspended(): boolean;
        set suspended(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Bearer;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_connect_finish(res: Gio.AsyncResult): boolean;
        call_connect_sync(cancellable: Gio.Cancellable | null): boolean;
        call_disconnect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_connect(invocation: Gio.DBusMethodInvocation): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace BearerIpConfig {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BearerIpConfig extends GObject.Object {
        static $gtype: GObject.GType<BearerIpConfig>;
        $signals: BearerIpConfig.SignalSignatures;
        constructor(properties?: Partial<BearerIpConfig.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BearerIpConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerIpConfig.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BearerIpConfig.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerIpConfig.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BearerIpConfig.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BearerIpConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_address(): string;
        get_dns(): string[];
        get_gateway(): string;
        get_method(): BearerIpMethod;
        get_mtu(): number;
        get_prefix(): number;
    }
    namespace BearerProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BearerProperties extends GObject.Object {
        static $gtype: GObject.GType<BearerProperties>;
        $signals: BearerProperties.SignalSignatures;
        constructor(properties?: Partial<BearerProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): BearerProperties;
        connect<K extends keyof BearerProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BearerProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BearerProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BearerProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_access_type_preference(): BearerAccessTypePreference;
        get_allow_roaming(): boolean;
        get_allowed_auth(): BearerAllowedAuth;
        get_apn(): string;
        get_apn_type(): BearerApnType;
        get_force(): boolean;
        get_ip_type(): BearerIpFamily;
        get_multiplex(): BearerMultiplexSupport;
        get_number(): string;
        get_password(): string;
        get_profile_id(): number;
        get_profile_name(): string;
        get_rm_protocol(): ModemCdmaRmProtocol;
        get_roaming_allowance(): BearerRoamingAllowance;
        get_user(): string;
        set_access_type_preference(access_type_preference: BearerAccessTypePreference): void;
        set_allow_roaming(allow_roaming: boolean): void;
        set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
        set_apn(apn: string): void;
        set_apn_type(apn_type: BearerApnType): void;
        set_force(force: boolean): void;
        set_ip_type(ip_type: BearerIpFamily): void;
        set_multiplex(multiplex: BearerMultiplexSupport): void;
        set_number(number: string): void;
        set_password(password: string): void;
        set_profile_id(profile_id: number): void;
        set_profile_name(profile_name: string): void;
        set_rm_protocol(protocol: ModemCdmaRmProtocol): void;
        set_roaming_allowance(roaming_allowance: BearerRoamingAllowance): void;
        set_user(user: string): void;
    }
    namespace BearerStats {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class BearerStats extends GObject.Object {
        static $gtype: GObject.GType<BearerStats>;
        $signals: BearerStats.SignalSignatures;
        constructor(properties?: Partial<BearerStats.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof BearerStats.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerStats.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BearerStats.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BearerStats.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BearerStats.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BearerStats.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_attempts(): number;
        get_downlink_speed(): number;
        get_duration(): number;
        get_failed_attempts(): number;
        get_rx_bytes(): number;
        get_start_date(): number;
        get_total_duration(): number;
        get_total_rx_bytes(): number;
        get_total_tx_bytes(): number;
        get_tx_bytes(): number;
        get_uplink_speed(): number;
    }
    namespace Call {
        interface SignalSignatures extends GdbusCallProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::audio-format": (pspec: GObject.ParamSpec) => void;
            "notify::audio-port": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::multiparty": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-reason": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusCallProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusCall.ConstructorProps {}
    }
    class Call extends GdbusCallProxy implements Gio.AsyncInitable<Call>, Gio.DBusInterface, Gio.Initable, GdbusCall {
        static $gtype: GObject.GType<Call>;
        $signals: Call.SignalSignatures;
        constructor(properties?: Partial<Call.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Call.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Call.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Call.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Call.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Call.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Call.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        accept_finish(res: Gio.AsyncResult): boolean;
        accept_sync(cancellable: Gio.Cancellable | null): boolean;
        deflect(number: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        deflect(number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        deflect(number: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        deflect_finish(res: Gio.AsyncResult): boolean;
        deflect_sync(number: string, cancellable: Gio.Cancellable | null): boolean;
        dup_audio_port(): string;
        dup_number(): string;
        dup_path(): string;
        get_audio_format(): CallAudioFormat;
        get_audio_port(): string;
        get_direction(): CallDirection;
        get_multiparty(): boolean;
        get_number(): string;
        get_path(): string;
        get_state(): CallState;
        get_state_reason(): CallStateReason;
        hangup(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        hangup(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        hangup_finish(res: Gio.AsyncResult): boolean;
        hangup_sync(cancellable: Gio.Cancellable | null): boolean;
        join_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        join_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        join_multiparty_finish(res: Gio.AsyncResult): boolean;
        join_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        leave_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        leave_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        leave_multiparty_finish(res: Gio.AsyncResult): boolean;
        leave_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        peek_audio_format(): CallAudioFormat;
        send_dtmf(dtmf: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        send_dtmf(dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_dtmf(dtmf: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        send_dtmf_finish(res: Gio.AsyncResult): boolean;
        send_dtmf_sync(dtmf: string, cancellable: Gio.Cancellable | null): boolean;
        start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        start_finish(res: Gio.AsyncResult): boolean;
        start_sync(cancellable: Gio.Cancellable | null): boolean;
        get audio_format(): GLib.Variant | null;
        set audio_format(val: GLib.Variant | null);
        get audioFormat(): GLib.Variant | null;
        set audioFormat(val: GLib.Variant | null);
        get audio_port(): string | null;
        set audio_port(val: string | null);
        get audioPort(): string | null;
        set audioPort(val: string | null);
        get direction(): number;
        set direction(val: number);
        get multiparty(): boolean;
        set multiparty(val: boolean);
        get number(): string | null;
        set number(val: string | null);
        get state(): number;
        set state(val: number);
        get state_reason(): number;
        set state_reason(val: number);
        get stateReason(): number;
        set stateReason(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Call;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_finish(res: Gio.AsyncResult): boolean;
        call_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_deflect_finish(res: Gio.AsyncResult): boolean;
        call_deflect_sync(arg_number: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_finish(res: Gio.AsyncResult): boolean;
        call_hangup_sync(cancellable: Gio.Cancellable | null): boolean;
        call_join_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_join_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_join_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_leave_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_leave_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_leave_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_dtmf_finish(res: Gio.AsyncResult): boolean;
        call_send_dtmf_sync(arg_dtmf: string, cancellable: Gio.Cancellable | null): boolean;
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_finish(res: Gio.AsyncResult): boolean;
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_deflect(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup(invocation: Gio.DBusMethodInvocation): void;
        complete_join_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_leave_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_send_dtmf(invocation: Gio.DBusMethodInvocation): void;
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        emit_dtmf_received(arg_dtmf: string): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_dtmf_received(arg_dtmf: string): void;
        vfunc_handle_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_deflect(invocation: Gio.DBusMethodInvocation, arg_number: string): boolean;
        vfunc_handle_hangup(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_join_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_leave_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_send_dtmf(invocation: Gio.DBusMethodInvocation, arg_dtmf: string): boolean;
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace CallAudioFormat {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CallAudioFormat extends GObject.Object {
        static $gtype: GObject.GType<CallAudioFormat>;
        $signals: CallAudioFormat.SignalSignatures;
        constructor(properties?: Partial<CallAudioFormat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CallAudioFormat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallAudioFormat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CallAudioFormat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallAudioFormat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CallAudioFormat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CallAudioFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_encoding(): string;
        get_rate(): number;
        get_resolution(): string;
    }
    namespace CallProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CallProperties extends GObject.Object {
        static $gtype: GObject.GType<CallProperties>;
        $signals: CallProperties.SignalSignatures;
        constructor(properties?: Partial<CallProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CallProperties;
        static new_from_dictionary(dictionary: GLib.Variant): CallProperties;
        static new_from_string(str: string): CallProperties;
        connect<K extends keyof CallProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CallProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CallProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CallProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CallProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_dictionary(): GLib.Variant;
        get_direction(): CallDirection;
        get_number(): string;
        get_state(): CallState;
        get_state_reason(): CallStateReason;
        set_direction(direction: CallDirection): void;
        set_number(text: string): void;
        set_state(state: CallState): void;
        set_state_reason(state_reason: CallStateReason): void;
    }
    namespace Cbm {
        interface SignalSignatures extends GdbusCbmProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::message-code": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusCbmProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusCbm.ConstructorProps {}
    }
    class Cbm extends GdbusCbmProxy implements Gio.AsyncInitable<Cbm>, Gio.DBusInterface, Gio.Initable, GdbusCbm {
        static $gtype: GObject.GType<Cbm>;
        $signals: Cbm.SignalSignatures;
        constructor(properties?: Partial<Cbm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Cbm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cbm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cbm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cbm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cbm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cbm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        dup_text(): string;
        get_channel(): number;
        get_message_code(): number;
        get_path(): string;
        get_state(): CbmState;
        get_text(): string;
        get_update(): number;
        get channel(): number;
        set channel(val: number);
        get message_code(): number;
        set message_code(val: number);
        get messageCode(): number;
        set messageCode(val: number);
        get state(): number;
        set state(val: number);
        get text(): string | null;
        set text(val: string | null);
        get update(): number;
        set update(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Cbm;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }
    namespace CdmaManualActivationProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CdmaManualActivationProperties extends GObject.Object {
        static $gtype: GObject.GType<CdmaManualActivationProperties>;
        $signals: CdmaManualActivationProperties.SignalSignatures;
        constructor(properties?: Partial<CdmaManualActivationProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CdmaManualActivationProperties;
        connect<K extends keyof CdmaManualActivationProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CdmaManualActivationProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CdmaManualActivationProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CdmaManualActivationProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CdmaManualActivationProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CdmaManualActivationProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_mdn(): string;
        get_min(): string;
        get_mn_aaa_key(): string;
        get_mn_ha_key(): string;
        get_prl(): [number, number];
        get_prl_bytearray(): Uint8Array;
        get_sid(): number;
        get_spc(): string;
        peek_prl_bytearray(): Uint8Array;
        set_mdn(mdn: string): boolean;
        set_min(min: string): boolean;
        set_mn_aaa_key(mn_aaa_key: string): boolean;
        set_mn_ha_key(mn_ha_key: string): boolean;
        set_prl(prl: number, prl_length: bigint | number): boolean;
        set_prl_bytearray(prl: Uint8Array | string): boolean;
        set_sid(sid: number): void;
        set_spc(spc: string): boolean;
    }
    namespace CellInfo {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CellInfo extends GObject.Object {
        static $gtype: GObject.GType<CellInfo>;
        $signals: CellInfo.SignalSignatures;
        constructor(properties?: Partial<CellInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_build_string(): GLib.String;
        vfunc_get_dictionary(): GLib.VariantDict;
        get_cell_type(): CellType;
        get_serving(): boolean;
    }
    namespace CellInfoCdma {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoCdma extends CellInfo {
        static $gtype: GObject.GType<CellInfoCdma>;
        $signals: CellInfoCdma.SignalSignatures;
        constructor(properties?: Partial<CellInfoCdma.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoCdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoCdma.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoCdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoCdma.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoCdma.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoCdma.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_base_station_id(): string;
        get_nid(): string;
        get_pilot_strength(): number;
        get_ref_pn(): string;
        get_sid(): string;
    }
    namespace CellInfoGsm {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoGsm extends CellInfo {
        static $gtype: GObject.GType<CellInfoGsm>;
        $signals: CellInfoGsm.SignalSignatures;
        constructor(properties?: Partial<CellInfoGsm.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoGsm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoGsm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoGsm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoGsm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoGsm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoGsm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_arfcn(): number;
        get_base_station_id(): string;
        get_ci(): string;
        get_lac(): string;
        get_operator_id(): string;
        get_rx_level(): number;
        get_timing_advance(): number;
    }
    namespace CellInfoLte {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoLte extends CellInfo {
        static $gtype: GObject.GType<CellInfoLte>;
        $signals: CellInfoLte.SignalSignatures;
        constructor(properties?: Partial<CellInfoLte.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoLte.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoLte.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoLte.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoLte.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoLte.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoLte.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bandwidth(): number;
        get_ci(): string;
        get_earfcn(): number;
        get_operator_id(): string;
        get_physical_ci(): string;
        get_rsrp(): number;
        get_rsrq(): number;
        get_serving_cell_type(): ServingCellType;
        get_tac(): string;
        get_timing_advance(): number;
    }
    namespace CellInfoNr5g {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoNr5g extends CellInfo {
        static $gtype: GObject.GType<CellInfoNr5g>;
        $signals: CellInfoNr5g.SignalSignatures;
        constructor(properties?: Partial<CellInfoNr5g.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoNr5g.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoNr5g.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoNr5g.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoNr5g.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoNr5g.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoNr5g.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_bandwidth(): number;
        get_ci(): string;
        get_nrarfcn(): number;
        get_operator_id(): string;
        get_physical_ci(): string;
        get_rsrp(): number;
        get_rsrq(): number;
        get_serving_cell_type(): ServingCellType;
        get_sinr(): number;
        get_tac(): string;
        get_timing_advance(): number;
    }
    namespace CellInfoTdscdma {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoTdscdma extends CellInfo {
        static $gtype: GObject.GType<CellInfoTdscdma>;
        $signals: CellInfoTdscdma.SignalSignatures;
        constructor(properties?: Partial<CellInfoTdscdma.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoTdscdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoTdscdma.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoTdscdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoTdscdma.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoTdscdma.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoTdscdma.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cell_parameter_id(): number;
        get_ci(): string;
        get_lac(): string;
        get_operator_id(): string;
        get_path_loss(): number;
        get_rscp(): number;
        get_timing_advance(): number;
        get_uarfcn(): number;
    }
    namespace CellInfoUmts {
        interface SignalSignatures extends CellInfo.SignalSignatures {}
        interface ConstructorProps extends CellInfo.ConstructorProps {}
    }
    class CellInfoUmts extends CellInfo {
        static $gtype: GObject.GType<CellInfoUmts>;
        $signals: CellInfoUmts.SignalSignatures;
        constructor(properties?: Partial<CellInfoUmts.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CellInfoUmts.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoUmts.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CellInfoUmts.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellInfoUmts.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CellInfoUmts.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellInfoUmts.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_ci(): string;
        get_ecio(): number;
        get_frequency_fdd_dl(): number;
        get_frequency_fdd_ul(): number;
        get_frequency_tdd(): number;
        get_lac(): string;
        get_operator_id(): string;
        get_path_loss(): number;
        get_psc(): number;
        get_rscp(): number;
        get_uarfcn(): number;
    }
    namespace FirmwareProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FirmwareProperties extends GObject.Object {
        static $gtype: GObject.GType<FirmwareProperties>;
        $signals: FirmwareProperties.SignalSignatures;
        constructor(properties?: Partial<FirmwareProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](image_type: FirmwareImageType, unique_id: string): FirmwareProperties;
        static new_from_dictionary(dictionary: GLib.Variant): FirmwareProperties;
        connect<K extends keyof FirmwareProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FirmwareProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FirmwareProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FirmwareProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_dictionary(): GLib.Variant;
        get_gobi_boot_version(): string;
        get_gobi_modem_unique_id(): string;
        get_gobi_pri_info(): string;
        get_gobi_pri_unique_id(): string;
        get_gobi_pri_version(): string;
        get_image_type(): FirmwareImageType;
        get_unique_id(): string;
        set_gobi_boot_version(version: string): void;
        set_gobi_modem_unique_id(id: string): void;
        set_gobi_pri_info(info: string): void;
        set_gobi_pri_unique_id(id: string): void;
        set_gobi_pri_version(version: string): void;
    }
    namespace FirmwareUpdateSettings {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class FirmwareUpdateSettings extends GObject.Object {
        static $gtype: GObject.GType<FirmwareUpdateSettings>;
        $signals: FirmwareUpdateSettings.SignalSignatures;
        constructor(properties?: Partial<FirmwareUpdateSettings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof FirmwareUpdateSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareUpdateSettings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FirmwareUpdateSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FirmwareUpdateSettings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FirmwareUpdateSettings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FirmwareUpdateSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_device_ids(): string[];
        get_fastboot_at(): string;
        get_method(): ModemFirmwareUpdateMethod;
        get_version(): string;
    }
    namespace GdbusBearerProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::bearer-type": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::connection-error": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::ip-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::ip4-config": (pspec: GObject.ParamSpec) => void;
            "notify::ip6-config": (pspec: GObject.ParamSpec) => void;
            "notify::multiplexed": (pspec: GObject.ParamSpec) => void;
            "notify::profile-id": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::reload-stats-supported": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusBearer.ConstructorProps {}
    }
    class GdbusBearerProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusBearerProxy>, Gio.DBusInterface, Gio.Initable, GdbusBearer {
        static $gtype: GObject.GType<GdbusBearerProxy>;
        $signals: GdbusBearerProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusBearerProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusBearerProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusBearerProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusBearerProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusBearerProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusBearerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusBearerProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusBearerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusBearerProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusBearerProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusBearerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusBearerProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusBearerProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get bearer_type(): number;
        set bearer_type(val: number);
        get bearerType(): number;
        set bearerType(val: number);
        get connected(): boolean;
        set connected(val: boolean);
        get connection_error(): GLib.Variant | null;
        set connection_error(val: GLib.Variant | null);
        get connectionError(): GLib.Variant | null;
        set connectionError(val: GLib.Variant | null);
        get "interface"(): string | null;
        set "interface"(val: string | null);
        get ip_timeout(): number;
        set ip_timeout(val: number);
        get ipTimeout(): number;
        set ipTimeout(val: number);
        get ip4_config(): GLib.Variant | null;
        set ip4_config(val: GLib.Variant | null);
        get ip4Config(): GLib.Variant | null;
        set ip4Config(val: GLib.Variant | null);
        get ip6_config(): GLib.Variant | null;
        set ip6_config(val: GLib.Variant | null);
        get ip6Config(): GLib.Variant | null;
        set ip6Config(val: GLib.Variant | null);
        get multiplexed(): boolean;
        set multiplexed(val: boolean);
        get profile_id(): number;
        set profile_id(val: number);
        get profileId(): number;
        set profileId(val: number);
        get properties(): GLib.Variant | null;
        set properties(val: GLib.Variant | null);
        get reload_stats_supported(): boolean;
        set reload_stats_supported(val: boolean);
        get reloadStatsSupported(): boolean;
        set reloadStatsSupported(val: boolean);
        get stats(): GLib.Variant | null;
        set stats(val: GLib.Variant | null);
        get suspended(): boolean;
        set suspended(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusBearerProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_connect_finish(res: Gio.AsyncResult): boolean;
        call_connect_sync(cancellable: Gio.Cancellable | null): boolean;
        call_disconnect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_connect(invocation: Gio.DBusMethodInvocation): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusBearerSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::bearer-type": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::connection-error": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::ip-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::ip4-config": (pspec: GObject.ParamSpec) => void;
            "notify::ip6-config": (pspec: GObject.ParamSpec) => void;
            "notify::multiplexed": (pspec: GObject.ParamSpec) => void;
            "notify::profile-id": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::reload-stats-supported": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusBearer.ConstructorProps {}
    }
    class GdbusBearerSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusBearer {
        static $gtype: GObject.GType<GdbusBearerSkeleton>;
        $signals: GdbusBearerSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusBearerSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusBearerSkeleton;
        connect<K extends keyof GdbusBearerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusBearerSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusBearerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusBearerSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusBearerSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusBearerSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get bearer_type(): number;
        set bearer_type(val: number);
        get bearerType(): number;
        set bearerType(val: number);
        get connected(): boolean;
        set connected(val: boolean);
        get connection_error(): GLib.Variant | null;
        set connection_error(val: GLib.Variant | null);
        get connectionError(): GLib.Variant | null;
        set connectionError(val: GLib.Variant | null);
        get "interface"(): string | null;
        set "interface"(val: string | null);
        get ip_timeout(): number;
        set ip_timeout(val: number);
        get ipTimeout(): number;
        set ipTimeout(val: number);
        get ip4_config(): GLib.Variant | null;
        set ip4_config(val: GLib.Variant | null);
        get ip4Config(): GLib.Variant | null;
        set ip4Config(val: GLib.Variant | null);
        get ip6_config(): GLib.Variant | null;
        set ip6_config(val: GLib.Variant | null);
        get ip6Config(): GLib.Variant | null;
        set ip6Config(val: GLib.Variant | null);
        get multiplexed(): boolean;
        set multiplexed(val: boolean);
        get profile_id(): number;
        set profile_id(val: number);
        get profileId(): number;
        set profileId(val: number);
        get properties(): GLib.Variant | null;
        set properties(val: GLib.Variant | null);
        get reload_stats_supported(): boolean;
        set reload_stats_supported(val: boolean);
        get reloadStatsSupported(): boolean;
        set reloadStatsSupported(val: boolean);
        get stats(): GLib.Variant | null;
        set stats(val: GLib.Variant | null);
        get suspended(): boolean;
        set suspended(val: boolean);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_connect_finish(res: Gio.AsyncResult): boolean;
        call_connect_sync(cancellable: Gio.Cancellable | null): boolean;
        call_disconnect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_connect(invocation: Gio.DBusMethodInvocation): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusCallProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::audio-format": (pspec: GObject.ParamSpec) => void;
            "notify::audio-port": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::multiparty": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-reason": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusCall.ConstructorProps {}
    }
    class GdbusCallProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusCallProxy>, Gio.DBusInterface, Gio.Initable, GdbusCall {
        static $gtype: GObject.GType<GdbusCallProxy>;
        $signals: GdbusCallProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusCallProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusCallProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusCallProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusCallProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusCallProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusCallProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCallProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusCallProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCallProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusCallProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusCallProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusCallProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusCallProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get audio_format(): GLib.Variant | null;
        set audio_format(val: GLib.Variant | null);
        get audioFormat(): GLib.Variant | null;
        set audioFormat(val: GLib.Variant | null);
        get audio_port(): string | null;
        set audio_port(val: string | null);
        get audioPort(): string | null;
        set audioPort(val: string | null);
        get direction(): number;
        set direction(val: number);
        get multiparty(): boolean;
        set multiparty(val: boolean);
        get number(): string | null;
        set number(val: string | null);
        get state(): number;
        set state(val: number);
        get state_reason(): number;
        set state_reason(val: number);
        get stateReason(): number;
        set stateReason(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusCallProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_finish(res: Gio.AsyncResult): boolean;
        call_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_deflect_finish(res: Gio.AsyncResult): boolean;
        call_deflect_sync(arg_number: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_finish(res: Gio.AsyncResult): boolean;
        call_hangup_sync(cancellable: Gio.Cancellable | null): boolean;
        call_join_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_join_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_join_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_leave_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_leave_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_leave_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_dtmf_finish(res: Gio.AsyncResult): boolean;
        call_send_dtmf_sync(arg_dtmf: string, cancellable: Gio.Cancellable | null): boolean;
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_finish(res: Gio.AsyncResult): boolean;
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_deflect(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup(invocation: Gio.DBusMethodInvocation): void;
        complete_join_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_leave_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_send_dtmf(invocation: Gio.DBusMethodInvocation): void;
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        emit_dtmf_received(arg_dtmf: string): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_dtmf_received(arg_dtmf: string): void;
        vfunc_handle_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_deflect(invocation: Gio.DBusMethodInvocation, arg_number: string): boolean;
        vfunc_handle_hangup(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_join_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_leave_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_send_dtmf(invocation: Gio.DBusMethodInvocation, arg_dtmf: string): boolean;
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace GdbusCallSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::audio-format": (pspec: GObject.ParamSpec) => void;
            "notify::audio-port": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::multiparty": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-reason": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusCall.ConstructorProps {}
    }
    class GdbusCallSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusCall {
        static $gtype: GObject.GType<GdbusCallSkeleton>;
        $signals: GdbusCallSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusCallSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusCallSkeleton;
        connect<K extends keyof GdbusCallSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCallSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusCallSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCallSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusCallSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusCallSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get audio_format(): GLib.Variant | null;
        set audio_format(val: GLib.Variant | null);
        get audioFormat(): GLib.Variant | null;
        set audioFormat(val: GLib.Variant | null);
        get audio_port(): string | null;
        set audio_port(val: string | null);
        get audioPort(): string | null;
        set audioPort(val: string | null);
        get direction(): number;
        set direction(val: number);
        get multiparty(): boolean;
        set multiparty(val: boolean);
        get number(): string | null;
        set number(val: string | null);
        get state(): number;
        set state(val: number);
        get state_reason(): number;
        set state_reason(val: number);
        get stateReason(): number;
        set stateReason(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_finish(res: Gio.AsyncResult): boolean;
        call_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_deflect_finish(res: Gio.AsyncResult): boolean;
        call_deflect_sync(arg_number: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_finish(res: Gio.AsyncResult): boolean;
        call_hangup_sync(cancellable: Gio.Cancellable | null): boolean;
        call_join_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_join_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_join_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_leave_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_leave_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_leave_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_dtmf_finish(res: Gio.AsyncResult): boolean;
        call_send_dtmf_sync(arg_dtmf: string, cancellable: Gio.Cancellable | null): boolean;
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_finish(res: Gio.AsyncResult): boolean;
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_deflect(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup(invocation: Gio.DBusMethodInvocation): void;
        complete_join_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_leave_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_send_dtmf(invocation: Gio.DBusMethodInvocation): void;
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        emit_dtmf_received(arg_dtmf: string): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_dtmf_received(arg_dtmf: string): void;
        vfunc_handle_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_deflect(invocation: Gio.DBusMethodInvocation, arg_number: string): boolean;
        vfunc_handle_hangup(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_join_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_leave_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_send_dtmf(invocation: Gio.DBusMethodInvocation, arg_dtmf: string): boolean;
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace GdbusCbmProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::message-code": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusCbm.ConstructorProps {}
    }
    class GdbusCbmProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusCbmProxy>, Gio.DBusInterface, Gio.Initable, GdbusCbm {
        static $gtype: GObject.GType<GdbusCbmProxy>;
        $signals: GdbusCbmProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusCbmProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusCbmProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusCbmProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusCbmProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusCbmProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusCbmProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCbmProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusCbmProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCbmProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusCbmProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusCbmProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusCbmProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusCbmProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get channel(): number;
        set channel(val: number);
        get message_code(): number;
        set message_code(val: number);
        get messageCode(): number;
        set messageCode(val: number);
        get state(): number;
        set state(val: number);
        get text(): string | null;
        set text(val: string | null);
        get update(): number;
        set update(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusCbmProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace GdbusCbmSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::message-code": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusCbm.ConstructorProps {}
    }
    class GdbusCbmSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusCbm {
        static $gtype: GObject.GType<GdbusCbmSkeleton>;
        $signals: GdbusCbmSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusCbmSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusCbmSkeleton;
        connect<K extends keyof GdbusCbmSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCbmSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusCbmSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusCbmSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusCbmSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusCbmSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get channel(): number;
        set channel(val: number);
        get message_code(): number;
        set message_code(val: number);
        get messageCode(): number;
        set messageCode(val: number);
        get state(): number;
        set state(val: number);
        get text(): string | null;
        set text(val: string | null);
        get update(): number;
        set update(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }
    namespace GdbusModem3gppProfileManagerProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::index-field": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gppProfileManager.ConstructorProps {}
    }
    class GdbusModem3gppProfileManagerProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModem3gppProfileManagerProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppProfileManager {
        static $gtype: GObject.GType<GdbusModem3gppProfileManagerProxy>;
        $signals: GdbusModem3gppProfileManagerProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppProfileManagerProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModem3gppProfileManagerProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppProfileManagerProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProfileManagerProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProfileManagerProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModem3gppProfileManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProfileManagerProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppProfileManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProfileManagerProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppProfileManagerProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppProfileManagerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppProfileManagerProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppProfileManagerProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get index_field(): string | null;
        set index_field(val: string | null);
        get indexField(): string | null;
        set indexField(val: string | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModem3gppProfileManagerProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_set_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_set_sync(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, profiles: GLib.Variant): void;
        complete_set(invocation: Gio.DBusMethodInvocation, stored_properties: GLib.Variant): void;
        emit_updated(): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set(invocation: Gio.DBusMethodInvocation, arg_requested_properties: GLib.Variant): boolean;
        vfunc_updated(): void;
    }
    namespace GdbusModem3gppProfileManagerSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::index-field": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModem3gppProfileManager.ConstructorProps {}
    }
    class GdbusModem3gppProfileManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem3gppProfileManager {
        static $gtype: GObject.GType<GdbusModem3gppProfileManagerSkeleton>;
        $signals: GdbusModem3gppProfileManagerSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppProfileManagerSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModem3gppProfileManagerSkeleton;
        connect<K extends keyof GdbusModem3gppProfileManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProfileManagerSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppProfileManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProfileManagerSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppProfileManagerSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppProfileManagerSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get index_field(): string | null;
        set index_field(val: string | null);
        get indexField(): string | null;
        set indexField(val: string | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_set_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_set_sync(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, profiles: GLib.Variant): void;
        complete_set(invocation: Gio.DBusMethodInvocation, stored_properties: GLib.Variant): void;
        emit_updated(): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set(invocation: Gio.DBusMethodInvocation, arg_requested_properties: GLib.Variant): boolean;
        vfunc_updated(): void;
    }
    namespace GdbusModem3gppProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::enabled-facility-locks": (pspec: GObject.ParamSpec) => void;
            "notify::eps-ue-mode-operation": (pspec: GObject.ParamSpec) => void;
            "notify::imei": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer-settings": (pspec: GObject.ParamSpec) => void;
            "notify::network-rejection": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g-registration-settings": (pspec: GObject.ParamSpec) => void;
            "notify::operator-code": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::packet-service-state": (pspec: GObject.ParamSpec) => void;
            "notify::pco": (pspec: GObject.ParamSpec) => void;
            "notify::registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::subscription-state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gpp.ConstructorProps {}
    }
    class GdbusModem3gppProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModem3gppProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem3gpp {
        static $gtype: GObject.GType<GdbusModem3gppProxy>;
        $signals: GdbusModem3gppProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModem3gppProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get enabled_facility_locks(): number;
        set enabled_facility_locks(val: number);
        get enabledFacilityLocks(): number;
        set enabledFacilityLocks(val: number);
        get eps_ue_mode_operation(): number;
        set eps_ue_mode_operation(val: number);
        get epsUeModeOperation(): number;
        set epsUeModeOperation(val: number);
        get imei(): string | null;
        set imei(val: string | null);
        get initial_eps_bearer(): string | null;
        set initial_eps_bearer(val: string | null);
        get initialEpsBearer(): string | null;
        set initialEpsBearer(val: string | null);
        get initial_eps_bearer_settings(): GLib.Variant | null;
        set initial_eps_bearer_settings(val: GLib.Variant | null);
        get initialEpsBearerSettings(): GLib.Variant | null;
        set initialEpsBearerSettings(val: GLib.Variant | null);
        get network_rejection(): GLib.Variant | null;
        set network_rejection(val: GLib.Variant | null);
        get networkRejection(): GLib.Variant | null;
        set networkRejection(val: GLib.Variant | null);
        get nr5g_registration_settings(): GLib.Variant | null;
        set nr5g_registration_settings(val: GLib.Variant | null);
        get nr5gRegistrationSettings(): GLib.Variant | null;
        set nr5gRegistrationSettings(val: GLib.Variant | null);
        get operator_code(): string | null;
        set operator_code(val: string | null);
        get operatorCode(): string | null;
        set operatorCode(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get packet_service_state(): number;
        set packet_service_state(val: number);
        get packetServiceState(): number;
        set packetServiceState(val: number);
        get pco(): GLib.Variant | null;
        set pco(val: GLib.Variant | null);
        get registration_state(): number;
        set registration_state(val: number);
        get registrationState(): number;
        set registrationState(val: number);
        get subscription_state(): number;
        set subscription_state(val: number);
        get subscriptionState(): number;
        set subscriptionState(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disable_facility_lock_finish(res: Gio.AsyncResult): boolean;
        call_disable_facility_lock_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_register_finish(res: Gio.AsyncResult): boolean;
        call_register_sync(arg_operator_id: string, cancellable: Gio.Cancellable | null): boolean;
        call_scan(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_scan_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_carrier_lock_finish(res: Gio.AsyncResult): boolean;
        call_set_carrier_lock_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
        call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_nr5g_registration_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_nr5g_registration_settings_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_packet_service_state_finish(res: Gio.AsyncResult): boolean;
        call_set_packet_service_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        complete_disable_facility_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_register(invocation: Gio.DBusMethodInvocation): void;
        complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
        complete_set_carrier_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
        complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_packet_service_state(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_disable_facility_lock(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
        vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_carrier_lock(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
        vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
        vfunc_handle_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_set_packet_service_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    }
    namespace GdbusModem3gppSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::enabled-facility-locks": (pspec: GObject.ParamSpec) => void;
            "notify::eps-ue-mode-operation": (pspec: GObject.ParamSpec) => void;
            "notify::imei": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer-settings": (pspec: GObject.ParamSpec) => void;
            "notify::network-rejection": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g-registration-settings": (pspec: GObject.ParamSpec) => void;
            "notify::operator-code": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::packet-service-state": (pspec: GObject.ParamSpec) => void;
            "notify::pco": (pspec: GObject.ParamSpec) => void;
            "notify::registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::subscription-state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModem3gpp.ConstructorProps {}
    }
    class GdbusModem3gppSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem3gpp {
        static $gtype: GObject.GType<GdbusModem3gppSkeleton>;
        $signals: GdbusModem3gppSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModem3gppSkeleton;
        connect<K extends keyof GdbusModem3gppSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get enabled_facility_locks(): number;
        set enabled_facility_locks(val: number);
        get enabledFacilityLocks(): number;
        set enabledFacilityLocks(val: number);
        get eps_ue_mode_operation(): number;
        set eps_ue_mode_operation(val: number);
        get epsUeModeOperation(): number;
        set epsUeModeOperation(val: number);
        get imei(): string | null;
        set imei(val: string | null);
        get initial_eps_bearer(): string | null;
        set initial_eps_bearer(val: string | null);
        get initialEpsBearer(): string | null;
        set initialEpsBearer(val: string | null);
        get initial_eps_bearer_settings(): GLib.Variant | null;
        set initial_eps_bearer_settings(val: GLib.Variant | null);
        get initialEpsBearerSettings(): GLib.Variant | null;
        set initialEpsBearerSettings(val: GLib.Variant | null);
        get network_rejection(): GLib.Variant | null;
        set network_rejection(val: GLib.Variant | null);
        get networkRejection(): GLib.Variant | null;
        set networkRejection(val: GLib.Variant | null);
        get nr5g_registration_settings(): GLib.Variant | null;
        set nr5g_registration_settings(val: GLib.Variant | null);
        get nr5gRegistrationSettings(): GLib.Variant | null;
        set nr5gRegistrationSettings(val: GLib.Variant | null);
        get operator_code(): string | null;
        set operator_code(val: string | null);
        get operatorCode(): string | null;
        set operatorCode(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get packet_service_state(): number;
        set packet_service_state(val: number);
        get packetServiceState(): number;
        set packetServiceState(val: number);
        get pco(): GLib.Variant | null;
        set pco(val: GLib.Variant | null);
        get registration_state(): number;
        set registration_state(val: number);
        get registrationState(): number;
        set registrationState(val: number);
        get subscription_state(): number;
        set subscription_state(val: number);
        get subscriptionState(): number;
        set subscriptionState(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disable_facility_lock_finish(res: Gio.AsyncResult): boolean;
        call_disable_facility_lock_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_register_finish(res: Gio.AsyncResult): boolean;
        call_register_sync(arg_operator_id: string, cancellable: Gio.Cancellable | null): boolean;
        call_scan(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_scan_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_carrier_lock_finish(res: Gio.AsyncResult): boolean;
        call_set_carrier_lock_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
        call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_nr5g_registration_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_nr5g_registration_settings_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_packet_service_state_finish(res: Gio.AsyncResult): boolean;
        call_set_packet_service_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        complete_disable_facility_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_register(invocation: Gio.DBusMethodInvocation): void;
        complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
        complete_set_carrier_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
        complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_packet_service_state(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_disable_facility_lock(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
        vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_carrier_lock(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
        vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
        vfunc_handle_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_set_packet_service_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    }
    namespace GdbusModem3gppUssdProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::network-notification": (pspec: GObject.ParamSpec) => void;
            "notify::network-request": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gppUssd.ConstructorProps {}
    }
    class GdbusModem3gppUssdProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModem3gppUssdProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppUssd {
        static $gtype: GObject.GType<GdbusModem3gppUssdProxy>;
        $signals: GdbusModem3gppUssdProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppUssdProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppUssdProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppUssdProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModem3gppUssdProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppUssdProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppUssdProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppUssdProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppUssdProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppUssdProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModem3gppUssdProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get network_notification(): string | null;
        set network_notification(val: string | null);
        get networkNotification(): string | null;
        set networkNotification(val: string | null);
        get network_request(): string | null;
        set network_request(val: string | null);
        get networkRequest(): string | null;
        set networkRequest(val: string | null);
        get state(): number;
        set state(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_cancel(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_initiate_finish(res: Gio.AsyncResult): [boolean, string];
        call_initiate_sync(arg_command: string, cancellable: Gio.Cancellable | null): [boolean, string];
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_respond_finish(res: Gio.AsyncResult): [boolean, string];
        call_respond_sync(arg_response: string, cancellable: Gio.Cancellable | null): [boolean, string];
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
        complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
        vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
    }
    namespace GdbusModem3gppUssdSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::network-notification": (pspec: GObject.ParamSpec) => void;
            "notify::network-request": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModem3gppUssd.ConstructorProps {}
    }
    class GdbusModem3gppUssdSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem3gppUssd {
        static $gtype: GObject.GType<GdbusModem3gppUssdSkeleton>;
        $signals: GdbusModem3gppUssdSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModem3gppUssdSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModem3gppUssdSkeleton;
        connect<K extends keyof GdbusModem3gppUssdSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppUssdSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModem3gppUssdSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModem3gppUssdSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModem3gppUssdSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModem3gppUssdSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get network_notification(): string | null;
        set network_notification(val: string | null);
        get networkNotification(): string | null;
        set networkNotification(val: string | null);
        get network_request(): string | null;
        set network_request(val: string | null);
        get networkRequest(): string | null;
        set networkRequest(val: string | null);
        get state(): number;
        set state(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_cancel(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_initiate_finish(res: Gio.AsyncResult): [boolean, string];
        call_initiate_sync(arg_command: string, cancellable: Gio.Cancellable | null): [boolean, string];
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_respond_finish(res: Gio.AsyncResult): [boolean, string];
        call_respond_sync(arg_response: string, cancellable: Gio.Cancellable | null): [boolean, string];
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
        complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
        vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
    }
    namespace GdbusModemCdmaProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::activation-state": (pspec: GObject.ParamSpec) => void;
            "notify::cdma1x-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::esn": (pspec: GObject.ParamSpec) => void;
            "notify::evdo-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::meid": (pspec: GObject.ParamSpec) => void;
            "notify::nid": (pspec: GObject.ParamSpec) => void;
            "notify::sid": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemCdma.ConstructorProps {}
    }
    class GdbusModemCdmaProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemCdmaProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemCdma {
        static $gtype: GObject.GType<GdbusModemCdmaProxy>;
        $signals: GdbusModemCdmaProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemCdmaProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCdmaProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCdmaProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemCdmaProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCdmaProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemCdmaProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCdmaProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemCdmaProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemCdmaProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemCdmaProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get activation_state(): number;
        set activation_state(val: number);
        get activationState(): number;
        set activationState(val: number);
        get cdma1x_registration_state(): number;
        set cdma1x_registration_state(val: number);
        get cdma1xRegistrationState(): number;
        set cdma1xRegistrationState(val: number);
        get esn(): string | null;
        set esn(val: string | null);
        get evdo_registration_state(): number;
        set evdo_registration_state(val: number);
        get evdoRegistrationState(): number;
        set evdoRegistrationState(val: number);
        get meid(): string | null;
        set meid(val: string | null);
        get nid(): number;
        set nid(val: number);
        get sid(): number;
        set sid(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_manual_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_activate_sync(arg_carrier_code: string, cancellable: Gio.Cancellable | null): boolean;
        complete_activate(invocation: Gio.DBusMethodInvocation): void;
        complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
        emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
        vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    }
    namespace GdbusModemCdmaSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::activation-state": (pspec: GObject.ParamSpec) => void;
            "notify::cdma1x-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::esn": (pspec: GObject.ParamSpec) => void;
            "notify::evdo-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::meid": (pspec: GObject.ParamSpec) => void;
            "notify::nid": (pspec: GObject.ParamSpec) => void;
            "notify::sid": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemCdma.ConstructorProps {}
    }
    class GdbusModemCdmaSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemCdma {
        static $gtype: GObject.GType<GdbusModemCdmaSkeleton>;
        $signals: GdbusModemCdmaSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemCdmaSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemCdmaSkeleton;
        connect<K extends keyof GdbusModemCdmaSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCdmaSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemCdmaSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCdmaSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemCdmaSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemCdmaSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get activation_state(): number;
        set activation_state(val: number);
        get activationState(): number;
        set activationState(val: number);
        get cdma1x_registration_state(): number;
        set cdma1x_registration_state(val: number);
        get cdma1xRegistrationState(): number;
        set cdma1xRegistrationState(val: number);
        get esn(): string | null;
        set esn(val: string | null);
        get evdo_registration_state(): number;
        set evdo_registration_state(val: number);
        get evdoRegistrationState(): number;
        set evdoRegistrationState(val: number);
        get meid(): string | null;
        set meid(val: string | null);
        get nid(): number;
        set nid(val: number);
        get sid(): number;
        set sid(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_manual_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_activate_sync(arg_carrier_code: string, cancellable: Gio.Cancellable | null): boolean;
        complete_activate(invocation: Gio.DBusMethodInvocation): void;
        complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
        emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
        vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    }
    namespace GdbusModemCellBroadcastProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::cell-broadcasts": (pspec: GObject.ParamSpec) => void;
            "notify::channels": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemCellBroadcast.ConstructorProps {}
    }
    class GdbusModemCellBroadcastProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemCellBroadcastProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemCellBroadcast {
        static $gtype: GObject.GType<GdbusModemCellBroadcastProxy>;
        $signals: GdbusModemCellBroadcastProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemCellBroadcastProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemCellBroadcastProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemCellBroadcastProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCellBroadcastProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCellBroadcastProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemCellBroadcastProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCellBroadcastProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemCellBroadcastProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCellBroadcastProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemCellBroadcastProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemCellBroadcastProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemCellBroadcastProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemCellBroadcastProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get cell_broadcasts(): string[] | null;
        set cell_broadcasts(val: string[] | null);
        get cellBroadcasts(): string[] | null;
        set cellBroadcasts(val: string[] | null);
        get channels(): GLib.Variant | null;
        set channels(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemCellBroadcastProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_channels_finish(res: Gio.AsyncResult): boolean;
        call_set_channels_sync(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_channels(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_channels(invocation: Gio.DBusMethodInvocation, arg_channels: GLib.Variant): boolean;
    }
    namespace GdbusModemCellBroadcastSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::cell-broadcasts": (pspec: GObject.ParamSpec) => void;
            "notify::channels": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemCellBroadcast.ConstructorProps {}
    }
    class GdbusModemCellBroadcastSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemCellBroadcast {
        static $gtype: GObject.GType<GdbusModemCellBroadcastSkeleton>;
        $signals: GdbusModemCellBroadcastSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemCellBroadcastSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemCellBroadcastSkeleton;
        connect<K extends keyof GdbusModemCellBroadcastSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCellBroadcastSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemCellBroadcastSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemCellBroadcastSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemCellBroadcastSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemCellBroadcastSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get cell_broadcasts(): string[] | null;
        set cell_broadcasts(val: string[] | null);
        get cellBroadcasts(): string[] | null;
        set cellBroadcasts(val: string[] | null);
        get channels(): GLib.Variant | null;
        set channels(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_channels_finish(res: Gio.AsyncResult): boolean;
        call_set_channels_sync(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_channels(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_channels(invocation: Gio.DBusMethodInvocation, arg_channels: GLib.Variant): boolean;
    }
    namespace GdbusModemFirmwareProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::update-settings": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemFirmware.ConstructorProps {}
    }
    class GdbusModemFirmwareProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemFirmwareProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemFirmware {
        static $gtype: GObject.GType<GdbusModemFirmwareProxy>;
        $signals: GdbusModemFirmwareProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemFirmwareProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemFirmwareProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemFirmwareProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemFirmwareProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemFirmwareProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemFirmwareProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemFirmwareProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemFirmwareProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemFirmwareProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemFirmwareProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get update_settings(): GLib.Variant | null;
        set update_settings(val: GLib.Variant | null);
        get updateSettings(): GLib.Variant | null;
        set updateSettings(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<[string, GLib.Variant | null]>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[string, GLib.Variant | null]> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string, GLib.Variant | null];
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_select_finish(res: Gio.AsyncResult): boolean;
        call_select_sync(arg_uniqueid: string, cancellable: Gio.Cancellable | null): boolean;
        complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
        complete_select(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
    }
    namespace GdbusModemFirmwareSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::update-settings": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemFirmware.ConstructorProps {}
    }
    class GdbusModemFirmwareSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemFirmware {
        static $gtype: GObject.GType<GdbusModemFirmwareSkeleton>;
        $signals: GdbusModemFirmwareSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemFirmwareSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemFirmwareSkeleton;
        connect<K extends keyof GdbusModemFirmwareSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemFirmwareSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemFirmwareSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemFirmwareSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemFirmwareSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemFirmwareSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get update_settings(): GLib.Variant | null;
        set update_settings(val: GLib.Variant | null);
        get updateSettings(): GLib.Variant | null;
        set updateSettings(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<[string, GLib.Variant | null]>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[string, GLib.Variant | null]> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string, GLib.Variant | null];
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_select_finish(res: Gio.AsyncResult): boolean;
        call_select_sync(arg_uniqueid: string, cancellable: Gio.Cancellable | null): boolean;
        complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
        complete_select(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
    }
    namespace GdbusModemLocationProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::assistance-data-servers": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::gps-refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::signals-location": (pspec: GObject.ParamSpec) => void;
            "notify::supl-server": (pspec: GObject.ParamSpec) => void;
            "notify::supported-assistance-data": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemLocation.ConstructorProps {}
    }
    class GdbusModemLocationProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemLocationProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemLocation {
        static $gtype: GObject.GType<GdbusModemLocationProxy>;
        $signals: GdbusModemLocationProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemLocationProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemLocationProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemLocationProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemLocationProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemLocationProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemLocationProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemLocationProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemLocationProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemLocationProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemLocationProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get assistance_data_servers(): string[] | null;
        set assistance_data_servers(val: string[] | null);
        get assistanceDataServers(): string[] | null;
        set assistanceDataServers(val: string[] | null);
        get capabilities(): number;
        set capabilities(val: number);
        get enabled(): number;
        set enabled(val: number);
        get gps_refresh_rate(): number;
        set gps_refresh_rate(val: number);
        get gpsRefreshRate(): number;
        set gpsRefreshRate(val: number);
        get location(): GLib.Variant | null;
        set location(val: GLib.Variant | null);
        get signals_location(): boolean;
        set signals_location(val: boolean);
        get signalsLocation(): boolean;
        set signalsLocation(val: boolean);
        get supl_server(): string | null;
        set supl_server(val: string | null);
        get suplServer(): string | null;
        set suplServer(val: string | null);
        get supported_assistance_data(): number;
        set supported_assistance_data(val: number);
        get supportedAssistanceData(): number;
        set supportedAssistanceData(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_get_location(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_location(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_location_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
        call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
        call_set_gps_refresh_rate_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
        call_set_supl_server_sync(arg_supl: string, cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
        complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
        complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
        complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
        complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean;
    }
    namespace GdbusModemLocationSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::assistance-data-servers": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::gps-refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::signals-location": (pspec: GObject.ParamSpec) => void;
            "notify::supl-server": (pspec: GObject.ParamSpec) => void;
            "notify::supported-assistance-data": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemLocation.ConstructorProps {}
    }
    class GdbusModemLocationSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemLocation {
        static $gtype: GObject.GType<GdbusModemLocationSkeleton>;
        $signals: GdbusModemLocationSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemLocationSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemLocationSkeleton;
        connect<K extends keyof GdbusModemLocationSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemLocationSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemLocationSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemLocationSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemLocationSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemLocationSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get assistance_data_servers(): string[] | null;
        set assistance_data_servers(val: string[] | null);
        get assistanceDataServers(): string[] | null;
        set assistanceDataServers(val: string[] | null);
        get capabilities(): number;
        set capabilities(val: number);
        get enabled(): number;
        set enabled(val: number);
        get gps_refresh_rate(): number;
        set gps_refresh_rate(val: number);
        get gpsRefreshRate(): number;
        set gpsRefreshRate(val: number);
        get location(): GLib.Variant | null;
        set location(val: GLib.Variant | null);
        get signals_location(): boolean;
        set signals_location(val: boolean);
        get signalsLocation(): boolean;
        set signalsLocation(val: boolean);
        get supl_server(): string | null;
        set supl_server(val: string | null);
        get suplServer(): string | null;
        set suplServer(val: string | null);
        get supported_assistance_data(): number;
        set supported_assistance_data(val: number);
        get supportedAssistanceData(): number;
        set supportedAssistanceData(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_get_location(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_location(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_location_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
        call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
        call_set_gps_refresh_rate_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
        call_set_supl_server_sync(arg_supl: string, cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
        complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
        complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
        complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
        complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean;
    }
    namespace GdbusModemMessagingProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::default-storage": (pspec: GObject.ParamSpec) => void;
            "notify::messages": (pspec: GObject.ParamSpec) => void;
            "notify::supported-storages": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemMessaging.ConstructorProps {}
    }
    class GdbusModemMessagingProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemMessagingProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemMessaging {
        static $gtype: GObject.GType<GdbusModemMessagingProxy>;
        $signals: GdbusModemMessagingProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemMessagingProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemMessagingProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemMessagingProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemMessagingProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemMessagingProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemMessagingProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemMessagingProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemMessagingProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemMessagingProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemMessagingProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get default_storage(): number;
        set default_storage(val: number);
        get defaultStorage(): number;
        set defaultStorage(val: number);
        get messages(): string[] | null;
        set messages(val: string[] | null);
        get supported_storages(): GLib.Variant | null;
        set supported_storages(val: GLib.Variant | null);
        get supportedStorages(): GLib.Variant | null;
        set supportedStorages(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_default_storage_finish(res: Gio.AsyncResult): boolean;
        call_set_default_storage_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_default_storage(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string, arg_received: boolean): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string, arg_received: boolean): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_default_storage(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace GdbusModemMessagingSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::default-storage": (pspec: GObject.ParamSpec) => void;
            "notify::messages": (pspec: GObject.ParamSpec) => void;
            "notify::supported-storages": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemMessaging.ConstructorProps {}
    }
    class GdbusModemMessagingSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemMessaging {
        static $gtype: GObject.GType<GdbusModemMessagingSkeleton>;
        $signals: GdbusModemMessagingSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemMessagingSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemMessagingSkeleton;
        connect<K extends keyof GdbusModemMessagingSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemMessagingSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemMessagingSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemMessagingSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemMessagingSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemMessagingSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get default_storage(): number;
        set default_storage(val: number);
        get defaultStorage(): number;
        set defaultStorage(val: number);
        get messages(): string[] | null;
        set messages(val: string[] | null);
        get supported_storages(): GLib.Variant | null;
        set supported_storages(val: GLib.Variant | null);
        get supportedStorages(): GLib.Variant | null;
        set supportedStorages(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_default_storage_finish(res: Gio.AsyncResult): boolean;
        call_set_default_storage_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_default_storage(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string, arg_received: boolean): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string, arg_received: boolean): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_default_storage(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace GdbusModemOmaProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::features": (pspec: GObject.ParamSpec) => void;
            "notify::pending-network-initiated-sessions": (pspec: GObject.ParamSpec) => void;
            "notify::session-state": (pspec: GObject.ParamSpec) => void;
            "notify::session-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemOma.ConstructorProps {}
    }
    class GdbusModemOmaProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemOmaProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemOma {
        static $gtype: GObject.GType<GdbusModemOmaProxy>;
        $signals: GdbusModemOmaProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemOmaProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemOmaProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemOmaProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemOmaProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemOmaProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemOmaProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemOmaProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemOmaProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemOmaProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemOmaProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get features(): number;
        set features(val: number);
        get pending_network_initiated_sessions(): GLib.Variant | null;
        set pending_network_initiated_sessions(val: GLib.Variant | null);
        get pendingNetworkInitiatedSessions(): GLib.Variant | null;
        set pendingNetworkInitiatedSessions(val: GLib.Variant | null);
        get session_state(): number;
        set session_state(val: number);
        get sessionState(): number;
        set sessionState(val: number);
        get session_type(): number;
        set session_type(val: number);
        get sessionType(): number;
        set sessionType(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_cancel_session(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_session_finish(res: Gio.AsyncResult): boolean;
        call_cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_features: number, cancellable: Gio.Cancellable | null): boolean;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_start_client_initiated_session_sync(arg_session_type: number, cancellable: Gio.Cancellable | null): boolean;
        complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
        vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean;
        vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
        vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean;
        vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
    }
    namespace GdbusModemOmaSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::features": (pspec: GObject.ParamSpec) => void;
            "notify::pending-network-initiated-sessions": (pspec: GObject.ParamSpec) => void;
            "notify::session-state": (pspec: GObject.ParamSpec) => void;
            "notify::session-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemOma.ConstructorProps {}
    }
    class GdbusModemOmaSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemOma {
        static $gtype: GObject.GType<GdbusModemOmaSkeleton>;
        $signals: GdbusModemOmaSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemOmaSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemOmaSkeleton;
        connect<K extends keyof GdbusModemOmaSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemOmaSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemOmaSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemOmaSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemOmaSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemOmaSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get features(): number;
        set features(val: number);
        get pending_network_initiated_sessions(): GLib.Variant | null;
        set pending_network_initiated_sessions(val: GLib.Variant | null);
        get pendingNetworkInitiatedSessions(): GLib.Variant | null;
        set pendingNetworkInitiatedSessions(val: GLib.Variant | null);
        get session_state(): number;
        set session_state(val: number);
        get sessionState(): number;
        set sessionState(val: number);
        get session_type(): number;
        set session_type(val: number);
        get sessionType(): number;
        set sessionType(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_cancel_session(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_session_finish(res: Gio.AsyncResult): boolean;
        call_cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_features: number, cancellable: Gio.Cancellable | null): boolean;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_start_client_initiated_session_sync(arg_session_type: number, cancellable: Gio.Cancellable | null): boolean;
        complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
        vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean;
        vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
        vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean;
        vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
    }
    namespace GdbusModemProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::access-technologies": (pspec: GObject.ParamSpec) => void;
            "notify::bearers": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration-revision": (pspec: GObject.ParamSpec) => void;
            "notify::current-bands": (pspec: GObject.ParamSpec) => void;
            "notify::current-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::current-modes": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::device-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::drivers": (pspec: GObject.ParamSpec) => void;
            "notify::equipment-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-revision": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-multiplexed-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::own-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::physdev": (pspec: GObject.ParamSpec) => void;
            "notify::plugin": (pspec: GObject.ParamSpec) => void;
            "notify::ports": (pspec: GObject.ParamSpec) => void;
            "notify::power-state": (pspec: GObject.ParamSpec) => void;
            "notify::primary-port": (pspec: GObject.ParamSpec) => void;
            "notify::primary-sim-slot": (pspec: GObject.ParamSpec) => void;
            "notify::revision": (pspec: GObject.ParamSpec) => void;
            "notify::signal-quality": (pspec: GObject.ParamSpec) => void;
            "notify::sim": (pspec: GObject.ParamSpec) => void;
            "notify::sim-slots": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-failed-reason": (pspec: GObject.ParamSpec) => void;
            "notify::supported-bands": (pspec: GObject.ParamSpec) => void;
            "notify::supported-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::supported-ip-families": (pspec: GObject.ParamSpec) => void;
            "notify::supported-modes": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-required": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-retries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem.ConstructorProps {}
    }
    class GdbusModemProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemProxy>, Gio.DBusInterface, Gio.Initable, GdbusModem {
        static $gtype: GObject.GType<GdbusModemProxy>;
        $signals: GdbusModemProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get access_technologies(): number;
        set access_technologies(val: number);
        get accessTechnologies(): number;
        set accessTechnologies(val: number);
        get bearers(): string[] | null;
        set bearers(val: string[] | null);
        get carrier_configuration(): string | null;
        set carrier_configuration(val: string | null);
        get carrierConfiguration(): string | null;
        set carrierConfiguration(val: string | null);
        get carrier_configuration_revision(): string | null;
        set carrier_configuration_revision(val: string | null);
        get carrierConfigurationRevision(): string | null;
        set carrierConfigurationRevision(val: string | null);
        get current_bands(): GLib.Variant | null;
        set current_bands(val: GLib.Variant | null);
        get currentBands(): GLib.Variant | null;
        set currentBands(val: GLib.Variant | null);
        get current_capabilities(): number;
        set current_capabilities(val: number);
        get currentCapabilities(): number;
        set currentCapabilities(val: number);
        get current_modes(): GLib.Variant | null;
        set current_modes(val: GLib.Variant | null);
        get currentModes(): GLib.Variant | null;
        set currentModes(val: GLib.Variant | null);
        get device(): string | null;
        set device(val: string | null);
        get device_identifier(): string | null;
        set device_identifier(val: string | null);
        get deviceIdentifier(): string | null;
        set deviceIdentifier(val: string | null);
        get drivers(): string[] | null;
        set drivers(val: string[] | null);
        get equipment_identifier(): string | null;
        set equipment_identifier(val: string | null);
        get equipmentIdentifier(): string | null;
        set equipmentIdentifier(val: string | null);
        get hardware_revision(): string | null;
        set hardware_revision(val: string | null);
        get hardwareRevision(): string | null;
        set hardwareRevision(val: string | null);
        get manufacturer(): string | null;
        set manufacturer(val: string | null);
        get max_active_bearers(): number;
        set max_active_bearers(val: number);
        get maxActiveBearers(): number;
        set maxActiveBearers(val: number);
        get max_active_multiplexed_bearers(): number;
        set max_active_multiplexed_bearers(val: number);
        get maxActiveMultiplexedBearers(): number;
        set maxActiveMultiplexedBearers(val: number);
        get max_bearers(): number;
        set max_bearers(val: number);
        get maxBearers(): number;
        set maxBearers(val: number);
        get model(): string | null;
        set model(val: string | null);
        get own_numbers(): string[] | null;
        set own_numbers(val: string[] | null);
        get ownNumbers(): string[] | null;
        set ownNumbers(val: string[] | null);
        get physdev(): string | null;
        set physdev(val: string | null);
        get plugin(): string | null;
        set plugin(val: string | null);
        get ports(): GLib.Variant | null;
        set ports(val: GLib.Variant | null);
        get power_state(): number;
        set power_state(val: number);
        get powerState(): number;
        set powerState(val: number);
        get primary_port(): string | null;
        set primary_port(val: string | null);
        get primaryPort(): string | null;
        set primaryPort(val: string | null);
        get primary_sim_slot(): number;
        set primary_sim_slot(val: number);
        get primarySimSlot(): number;
        set primarySimSlot(val: number);
        get revision(): string | null;
        set revision(val: string | null);
        get signal_quality(): GLib.Variant | null;
        set signal_quality(val: GLib.Variant | null);
        get signalQuality(): GLib.Variant | null;
        set signalQuality(val: GLib.Variant | null);
        get sim(): string | null;
        set sim(val: string | null);
        get sim_slots(): string[] | null;
        set sim_slots(val: string[] | null);
        get simSlots(): string[] | null;
        set simSlots(val: string[] | null);
        get state(): number;
        set state(val: number);
        get state_failed_reason(): number;
        set state_failed_reason(val: number);
        get stateFailedReason(): number;
        set stateFailedReason(val: number);
        get supported_bands(): GLib.Variant | null;
        set supported_bands(val: GLib.Variant | null);
        get supportedBands(): GLib.Variant | null;
        set supportedBands(val: GLib.Variant | null);
        get supported_capabilities(): GLib.Variant | null;
        set supported_capabilities(val: GLib.Variant | null);
        get supportedCapabilities(): GLib.Variant | null;
        set supportedCapabilities(val: GLib.Variant | null);
        get supported_ip_families(): number;
        set supported_ip_families(val: number);
        get supportedIpFamilies(): number;
        set supportedIpFamilies(val: number);
        get supported_modes(): GLib.Variant | null;
        set supported_modes(val: GLib.Variant | null);
        get supportedModes(): GLib.Variant | null;
        set supportedModes(val: GLib.Variant | null);
        get unlock_required(): number;
        set unlock_required(val: number);
        get unlockRequired(): number;
        set unlockRequired(val: number);
        get unlock_retries(): GLib.Variant | null;
        set unlock_retries(val: GLib.Variant | null);
        get unlockRetries(): GLib.Variant | null;
        set unlockRetries(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_command_finish(res: Gio.AsyncResult): [boolean, string];
        call_command_sync(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): [boolean, string];
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_bearer_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
        call_delete_bearer_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_factory_reset_finish(res: Gio.AsyncResult): boolean;
        call_factory_reset_sync(arg_code: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_cell_info(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_cell_info_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_cell_info_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_list_bearers(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_bearers_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_reset(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_reset(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_reset_finish(res: Gio.AsyncResult): boolean;
        call_reset_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
        call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
        call_set_current_capabilities_sync(arg_capabilities: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
        call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_state_finish(res: Gio.AsyncResult): boolean;
        call_set_power_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean;
        call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable: Gio.Cancellable | null): boolean;
        complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
        complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_get_cell_info(invocation: Gio.DBusMethodInvocation, cell_info: GLib.Variant): void;
        complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
        complete_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
        complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
        vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
        vfunc_handle_get_cell_info(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
        vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
        vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
        vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
        vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace GdbusModemSarProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::power-level": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSar.ConstructorProps {}
    }
    class GdbusModemSarProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemSarProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemSar {
        static $gtype: GObject.GType<GdbusModemSarProxy>;
        $signals: GdbusModemSarProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSarProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemSarProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSarProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSarProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSarProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemSarProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSarProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSarProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSarProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSarProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSarProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSarProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSarProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get power_level(): number;
        set power_level(val: number);
        get powerLevel(): number;
        set powerLevel(val: number);
        get state(): boolean;
        set state(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemSarProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_level_finish(res: Gio.AsyncResult): boolean;
        call_set_power_level_sync(arg_level: number, cancellable: Gio.Cancellable | null): boolean;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_level(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_set_power_level(invocation: Gio.DBusMethodInvocation, arg_level: number): boolean;
    }
    namespace GdbusModemSarSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::power-level": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemSar.ConstructorProps {}
    }
    class GdbusModemSarSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemSar {
        static $gtype: GObject.GType<GdbusModemSarSkeleton>;
        $signals: GdbusModemSarSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSarSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemSarSkeleton;
        connect<K extends keyof GdbusModemSarSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSarSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSarSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSarSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSarSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSarSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get power_level(): number;
        set power_level(val: number);
        get powerLevel(): number;
        set powerLevel(val: number);
        get state(): boolean;
        set state(val: boolean);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_level_finish(res: Gio.AsyncResult): boolean;
        call_set_power_level_sync(arg_level: number, cancellable: Gio.Cancellable | null): boolean;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_level(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_set_power_level(invocation: Gio.DBusMethodInvocation, arg_level: number): boolean;
    }
    namespace GdbusModemSignalProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::cdma": (pspec: GObject.ParamSpec) => void;
            "notify::error-rate-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::evdo": (pspec: GObject.ParamSpec) => void;
            "notify::gsm": (pspec: GObject.ParamSpec) => void;
            "notify::lte": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::rssi-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::umts": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSignal.ConstructorProps {}
    }
    class GdbusModemSignalProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemSignalProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemSignal {
        static $gtype: GObject.GType<GdbusModemSignalProxy>;
        $signals: GdbusModemSignalProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSignalProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSignalProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSignalProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemSignalProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSignalProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSignalProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSignalProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSignalProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSignalProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSignalProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get cdma(): GLib.Variant | null;
        set cdma(val: GLib.Variant | null);
        get error_rate_threshold(): boolean;
        set error_rate_threshold(val: boolean);
        get errorRateThreshold(): boolean;
        set errorRateThreshold(val: boolean);
        get evdo(): GLib.Variant | null;
        set evdo(val: GLib.Variant | null);
        get gsm(): GLib.Variant | null;
        set gsm(val: GLib.Variant | null);
        get lte(): GLib.Variant | null;
        set lte(val: GLib.Variant | null);
        get nr5g(): GLib.Variant | null;
        set nr5g(val: GLib.Variant | null);
        get rate(): number;
        set rate(val: number);
        get rssi_threshold(): number;
        set rssi_threshold(val: number);
        get rssiThreshold(): number;
        set rssiThreshold(val: number);
        get umts(): GLib.Variant | null;
        set umts(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_thresholds_finish(res: Gio.AsyncResult): boolean;
        call_setup_thresholds_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_setup_thresholds(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_setup_thresholds(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
    }
    namespace GdbusModemSignalSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::cdma": (pspec: GObject.ParamSpec) => void;
            "notify::error-rate-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::evdo": (pspec: GObject.ParamSpec) => void;
            "notify::gsm": (pspec: GObject.ParamSpec) => void;
            "notify::lte": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::rssi-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::umts": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemSignal.ConstructorProps {}
    }
    class GdbusModemSignalSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemSignal {
        static $gtype: GObject.GType<GdbusModemSignalSkeleton>;
        $signals: GdbusModemSignalSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSignalSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemSignalSkeleton;
        connect<K extends keyof GdbusModemSignalSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSignalSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSignalSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSignalSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSignalSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSignalSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get cdma(): GLib.Variant | null;
        set cdma(val: GLib.Variant | null);
        get error_rate_threshold(): boolean;
        set error_rate_threshold(val: boolean);
        get errorRateThreshold(): boolean;
        set errorRateThreshold(val: boolean);
        get evdo(): GLib.Variant | null;
        set evdo(val: GLib.Variant | null);
        get gsm(): GLib.Variant | null;
        set gsm(val: GLib.Variant | null);
        get lte(): GLib.Variant | null;
        set lte(val: GLib.Variant | null);
        get nr5g(): GLib.Variant | null;
        set nr5g(val: GLib.Variant | null);
        get rate(): number;
        set rate(val: number);
        get rssi_threshold(): number;
        set rssi_threshold(val: number);
        get rssiThreshold(): number;
        set rssiThreshold(val: number);
        get umts(): GLib.Variant | null;
        set umts(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_thresholds_finish(res: Gio.AsyncResult): boolean;
        call_setup_thresholds_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_setup_thresholds(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_setup_thresholds(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
    }
    namespace GdbusModemSimpleProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSimple.ConstructorProps {}
    }
    class GdbusModemSimpleProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemSimpleProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemSimple {
        static $gtype: GObject.GType<GdbusModemSimpleProxy>;
        $signals: GdbusModemSimpleProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSimpleProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSimpleProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSimpleProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemSimpleProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSimpleProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSimpleProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSimpleProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSimpleProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSimpleProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemSimpleProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_connect_finish(res: Gio.AsyncResult): [boolean, string];
        call_connect_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_status(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_status(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_status_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusModemSimpleSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemSimple.ConstructorProps {}
    }
    class GdbusModemSimpleSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemSimple {
        static $gtype: GObject.GType<GdbusModemSimpleSkeleton>;
        $signals: GdbusModemSimpleSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSimpleSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemSimpleSkeleton;
        connect<K extends keyof GdbusModemSimpleSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSimpleSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSimpleSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSimpleSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSimpleSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSimpleSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_connect_finish(res: Gio.AsyncResult): [boolean, string];
        call_connect_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_status(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_status(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_status_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusModemSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::access-technologies": (pspec: GObject.ParamSpec) => void;
            "notify::bearers": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration-revision": (pspec: GObject.ParamSpec) => void;
            "notify::current-bands": (pspec: GObject.ParamSpec) => void;
            "notify::current-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::current-modes": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::device-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::drivers": (pspec: GObject.ParamSpec) => void;
            "notify::equipment-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-revision": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-multiplexed-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::own-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::physdev": (pspec: GObject.ParamSpec) => void;
            "notify::plugin": (pspec: GObject.ParamSpec) => void;
            "notify::ports": (pspec: GObject.ParamSpec) => void;
            "notify::power-state": (pspec: GObject.ParamSpec) => void;
            "notify::primary-port": (pspec: GObject.ParamSpec) => void;
            "notify::primary-sim-slot": (pspec: GObject.ParamSpec) => void;
            "notify::revision": (pspec: GObject.ParamSpec) => void;
            "notify::signal-quality": (pspec: GObject.ParamSpec) => void;
            "notify::sim": (pspec: GObject.ParamSpec) => void;
            "notify::sim-slots": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-failed-reason": (pspec: GObject.ParamSpec) => void;
            "notify::supported-bands": (pspec: GObject.ParamSpec) => void;
            "notify::supported-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::supported-ip-families": (pspec: GObject.ParamSpec) => void;
            "notify::supported-modes": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-required": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-retries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModem.ConstructorProps {}
    }
    class GdbusModemSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModem {
        static $gtype: GObject.GType<GdbusModemSkeleton>;
        $signals: GdbusModemSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemSkeleton;
        connect<K extends keyof GdbusModemSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get access_technologies(): number;
        set access_technologies(val: number);
        get accessTechnologies(): number;
        set accessTechnologies(val: number);
        get bearers(): string[] | null;
        set bearers(val: string[] | null);
        get carrier_configuration(): string | null;
        set carrier_configuration(val: string | null);
        get carrierConfiguration(): string | null;
        set carrierConfiguration(val: string | null);
        get carrier_configuration_revision(): string | null;
        set carrier_configuration_revision(val: string | null);
        get carrierConfigurationRevision(): string | null;
        set carrierConfigurationRevision(val: string | null);
        get current_bands(): GLib.Variant | null;
        set current_bands(val: GLib.Variant | null);
        get currentBands(): GLib.Variant | null;
        set currentBands(val: GLib.Variant | null);
        get current_capabilities(): number;
        set current_capabilities(val: number);
        get currentCapabilities(): number;
        set currentCapabilities(val: number);
        get current_modes(): GLib.Variant | null;
        set current_modes(val: GLib.Variant | null);
        get currentModes(): GLib.Variant | null;
        set currentModes(val: GLib.Variant | null);
        get device(): string | null;
        set device(val: string | null);
        get device_identifier(): string | null;
        set device_identifier(val: string | null);
        get deviceIdentifier(): string | null;
        set deviceIdentifier(val: string | null);
        get drivers(): string[] | null;
        set drivers(val: string[] | null);
        get equipment_identifier(): string | null;
        set equipment_identifier(val: string | null);
        get equipmentIdentifier(): string | null;
        set equipmentIdentifier(val: string | null);
        get hardware_revision(): string | null;
        set hardware_revision(val: string | null);
        get hardwareRevision(): string | null;
        set hardwareRevision(val: string | null);
        get manufacturer(): string | null;
        set manufacturer(val: string | null);
        get max_active_bearers(): number;
        set max_active_bearers(val: number);
        get maxActiveBearers(): number;
        set maxActiveBearers(val: number);
        get max_active_multiplexed_bearers(): number;
        set max_active_multiplexed_bearers(val: number);
        get maxActiveMultiplexedBearers(): number;
        set maxActiveMultiplexedBearers(val: number);
        get max_bearers(): number;
        set max_bearers(val: number);
        get maxBearers(): number;
        set maxBearers(val: number);
        get model(): string | null;
        set model(val: string | null);
        get own_numbers(): string[] | null;
        set own_numbers(val: string[] | null);
        get ownNumbers(): string[] | null;
        set ownNumbers(val: string[] | null);
        get physdev(): string | null;
        set physdev(val: string | null);
        get plugin(): string | null;
        set plugin(val: string | null);
        get ports(): GLib.Variant | null;
        set ports(val: GLib.Variant | null);
        get power_state(): number;
        set power_state(val: number);
        get powerState(): number;
        set powerState(val: number);
        get primary_port(): string | null;
        set primary_port(val: string | null);
        get primaryPort(): string | null;
        set primaryPort(val: string | null);
        get primary_sim_slot(): number;
        set primary_sim_slot(val: number);
        get primarySimSlot(): number;
        set primarySimSlot(val: number);
        get revision(): string | null;
        set revision(val: string | null);
        get signal_quality(): GLib.Variant | null;
        set signal_quality(val: GLib.Variant | null);
        get signalQuality(): GLib.Variant | null;
        set signalQuality(val: GLib.Variant | null);
        get sim(): string | null;
        set sim(val: string | null);
        get sim_slots(): string[] | null;
        set sim_slots(val: string[] | null);
        get simSlots(): string[] | null;
        set simSlots(val: string[] | null);
        get state(): number;
        set state(val: number);
        get state_failed_reason(): number;
        set state_failed_reason(val: number);
        get stateFailedReason(): number;
        set stateFailedReason(val: number);
        get supported_bands(): GLib.Variant | null;
        set supported_bands(val: GLib.Variant | null);
        get supportedBands(): GLib.Variant | null;
        set supportedBands(val: GLib.Variant | null);
        get supported_capabilities(): GLib.Variant | null;
        set supported_capabilities(val: GLib.Variant | null);
        get supportedCapabilities(): GLib.Variant | null;
        set supportedCapabilities(val: GLib.Variant | null);
        get supported_ip_families(): number;
        set supported_ip_families(val: number);
        get supportedIpFamilies(): number;
        set supportedIpFamilies(val: number);
        get supported_modes(): GLib.Variant | null;
        set supported_modes(val: GLib.Variant | null);
        get supportedModes(): GLib.Variant | null;
        set supportedModes(val: GLib.Variant | null);
        get unlock_required(): number;
        set unlock_required(val: number);
        get unlockRequired(): number;
        set unlockRequired(val: number);
        get unlock_retries(): GLib.Variant | null;
        set unlock_retries(val: GLib.Variant | null);
        get unlockRetries(): GLib.Variant | null;
        set unlockRetries(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_command_finish(res: Gio.AsyncResult): [boolean, string];
        call_command_sync(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): [boolean, string];
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_bearer_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
        call_delete_bearer_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_factory_reset_finish(res: Gio.AsyncResult): boolean;
        call_factory_reset_sync(arg_code: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_cell_info(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_cell_info_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_cell_info_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_list_bearers(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_bearers_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_reset(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_reset(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_reset_finish(res: Gio.AsyncResult): boolean;
        call_reset_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
        call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
        call_set_current_capabilities_sync(arg_capabilities: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
        call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_state_finish(res: Gio.AsyncResult): boolean;
        call_set_power_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean;
        call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable: Gio.Cancellable | null): boolean;
        complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
        complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_get_cell_info(invocation: Gio.DBusMethodInvocation, cell_info: GLib.Variant): void;
        complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
        complete_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
        complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
        vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
        vfunc_handle_get_cell_info(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
        vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
        vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
        vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
        vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace GdbusModemTimeProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::network-timezone": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemTime.ConstructorProps {}
    }
    class GdbusModemTimeProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemTimeProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemTime {
        static $gtype: GObject.GType<GdbusModemTimeProxy>;
        $signals: GdbusModemTimeProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemTimeProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemTimeProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemTimeProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemTimeProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemTimeProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemTimeProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemTimeProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemTimeProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemTimeProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemTimeProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get network_timezone(): GLib.Variant | null;
        set network_timezone(val: GLib.Variant | null);
        get networkTimezone(): GLib.Variant | null;
        set networkTimezone(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_get_network_time(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string];
        call_get_network_time_sync(cancellable: Gio.Cancellable | null): [boolean, string];
        complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
        emit_network_time_changed(arg_time: string): void;
        vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_network_time_changed(arg_time: string): void;
    }
    namespace GdbusModemTimeSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::network-timezone": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemTime.ConstructorProps {}
    }
    class GdbusModemTimeSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemTime {
        static $gtype: GObject.GType<GdbusModemTimeSkeleton>;
        $signals: GdbusModemTimeSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemTimeSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemTimeSkeleton;
        connect<K extends keyof GdbusModemTimeSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemTimeSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemTimeSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemTimeSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemTimeSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemTimeSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get network_timezone(): GLib.Variant | null;
        set network_timezone(val: GLib.Variant | null);
        get networkTimezone(): GLib.Variant | null;
        set networkTimezone(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_get_network_time(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string];
        call_get_network_time_sync(cancellable: Gio.Cancellable | null): [boolean, string];
        complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
        emit_network_time_changed(arg_time: string): void;
        vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_network_time_changed(arg_time: string): void;
    }
    namespace GdbusModemVoiceProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::calls": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemVoice.ConstructorProps {}
    }
    class GdbusModemVoiceProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusModemVoiceProxy>, Gio.DBusInterface, Gio.Initable, GdbusModemVoice {
        static $gtype: GObject.GType<GdbusModemVoiceProxy>;
        $signals: GdbusModemVoiceProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusModemVoiceProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemVoiceProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemVoiceProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusModemVoiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemVoiceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemVoiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemVoiceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemVoiceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemVoiceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusModemVoiceProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get calls(): string[] | null;
        set calls(val: string[] | null);
        get emergency_only(): boolean;
        set emergency_only(val: boolean);
        get emergencyOnly(): boolean;
        set emergencyOnly(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_call_waiting_query(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean];
        call_call_waiting_query_sync(cancellable: Gio.Cancellable | null): [boolean, boolean];
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
        call_call_waiting_setup_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_call_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_call_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_call_finish(res: Gio.AsyncResult): boolean;
        call_delete_call_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup_all(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_all_finish(res: Gio.AsyncResult): boolean;
        call_hangup_all_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hangup_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hold_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hold_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_list_calls(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_calls(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_calls_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_transfer(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_transfer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_transfer_finish(res: Gio.AsyncResult): boolean;
        call_transfer_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
        complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_transfer(invocation: Gio.DBusMethodInvocation): void;
        emit_call_added(arg_path: string): void;
        emit_call_deleted(arg_path: string): void;
        vfunc_call_added(arg_path: string): void;
        vfunc_call_deleted(arg_path: string): void;
        vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusModemVoiceSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::calls": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusModemVoice.ConstructorProps {}
    }
    class GdbusModemVoiceSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusModemVoice {
        static $gtype: GObject.GType<GdbusModemVoiceSkeleton>;
        $signals: GdbusModemVoiceSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusModemVoiceSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusModemVoiceSkeleton;
        connect<K extends keyof GdbusModemVoiceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemVoiceSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusModemVoiceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusModemVoiceSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusModemVoiceSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusModemVoiceSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get calls(): string[] | null;
        set calls(val: string[] | null);
        get emergency_only(): boolean;
        set emergency_only(val: boolean);
        get emergencyOnly(): boolean;
        set emergencyOnly(val: boolean);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_call_waiting_query(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean];
        call_call_waiting_query_sync(cancellable: Gio.Cancellable | null): [boolean, boolean];
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
        call_call_waiting_setup_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_call_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_call_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_call_finish(res: Gio.AsyncResult): boolean;
        call_delete_call_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup_all(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_all_finish(res: Gio.AsyncResult): boolean;
        call_hangup_all_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hangup_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hold_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hold_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_list_calls(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_calls(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_calls_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_transfer(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_transfer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_transfer_finish(res: Gio.AsyncResult): boolean;
        call_transfer_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
        complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_transfer(invocation: Gio.DBusMethodInvocation): void;
        emit_call_added(arg_path: string): void;
        emit_call_deleted(arg_path: string): void;
        vfunc_call_added(arg_path: string): void;
        vfunc_call_deleted(arg_path: string): void;
        vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace GdbusObjectManagerClient {
        interface SignalSignatures extends Gio.DBusObjectManagerClient.SignalSignatures {
            "notify::bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-destroy-notify": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-func": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-user-data": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectManagerClient.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusObjectManager.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class GdbusObjectManagerClient extends Gio.DBusObjectManagerClient implements Gio.AsyncInitable<GdbusObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
        static $gtype: GObject.GType<GdbusObjectManagerClient>;
        $signals: GdbusObjectManagerClient.SignalSignatures;
        constructor(properties?: Partial<GdbusObjectManagerClient.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusObjectManagerClient;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusObjectManagerClient;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectManagerClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectManagerClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusObjectManagerClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusObjectManagerClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: null): GObject.GType;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusObjectManagerClient> | null): void;
        static new_for_bus(...args: never[]): any;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        get_object(object_path: string): Gio.DBusObject | null;
        get_object_path(): string;
        get_objects(): Gio.DBusObject[];
        vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        vfunc_get_object(object_path: string): Gio.DBusObject | null;
        vfunc_get_object_path(): string;
        vfunc_get_objects(): Gio.DBusObject[];
        vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        vfunc_object_added(object: Gio.DBusObject): void;
        vfunc_object_removed(object: Gio.DBusObject): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace GdbusObjectProxy {
        interface SignalSignatures extends Gio.DBusObjectProxy.SignalSignatures {
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::modem": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cdma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cell-broadcast": (pspec: GObject.ParamSpec) => void;
            "notify::modem-firmware": (pspec: GObject.ParamSpec) => void;
            "notify::modem-location": (pspec: GObject.ParamSpec) => void;
            "notify::modem-messaging": (pspec: GObject.ParamSpec) => void;
            "notify::modem-oma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-sar": (pspec: GObject.ParamSpec) => void;
            "notify::modem-signal": (pspec: GObject.ParamSpec) => void;
            "notify::modem-simple": (pspec: GObject.ParamSpec) => void;
            "notify::modem-time": (pspec: GObject.ParamSpec) => void;
            "notify::modem-voice": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-profile-manager": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-ussd": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectProxy.ConstructorProps, Gio.DBusObject.ConstructorProps, GdbusObject.ConstructorProps {}
    }
    class GdbusObjectProxy extends Gio.DBusObjectProxy implements Gio.DBusObject, GdbusObject {
        static $gtype: GObject.GType<GdbusObjectProxy>;
        $signals: GdbusObjectProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusObjectProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, object_path: string): GdbusObjectProxy;
        connect<K extends keyof GdbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusObjectProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusObjectProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get modem(): GdbusModem | null;
        set modem(val: GdbusModem | null);
        get modem_cdma(): GdbusModemCdma | null;
        set modem_cdma(val: GdbusModemCdma | null);
        get modemCdma(): GdbusModemCdma | null;
        set modemCdma(val: GdbusModemCdma | null);
        get modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        set modem_cell_broadcast(val: GdbusModemCellBroadcast | null);
        get modemCellBroadcast(): GdbusModemCellBroadcast | null;
        set modemCellBroadcast(val: GdbusModemCellBroadcast | null);
        get modem_firmware(): GdbusModemFirmware | null;
        set modem_firmware(val: GdbusModemFirmware | null);
        get modemFirmware(): GdbusModemFirmware | null;
        set modemFirmware(val: GdbusModemFirmware | null);
        get modem_location(): GdbusModemLocation | null;
        set modem_location(val: GdbusModemLocation | null);
        get modemLocation(): GdbusModemLocation | null;
        set modemLocation(val: GdbusModemLocation | null);
        get modem_messaging(): GdbusModemMessaging | null;
        set modem_messaging(val: GdbusModemMessaging | null);
        get modemMessaging(): GdbusModemMessaging | null;
        set modemMessaging(val: GdbusModemMessaging | null);
        get modem_oma(): GdbusModemOma | null;
        set modem_oma(val: GdbusModemOma | null);
        get modemOma(): GdbusModemOma | null;
        set modemOma(val: GdbusModemOma | null);
        get modem_sar(): GdbusModemSar | null;
        set modem_sar(val: GdbusModemSar | null);
        get modemSar(): GdbusModemSar | null;
        set modemSar(val: GdbusModemSar | null);
        get modem_signal(): GdbusModemSignal | null;
        set modem_signal(val: GdbusModemSignal | null);
        get modemSignal(): GdbusModemSignal | null;
        set modemSignal(val: GdbusModemSignal | null);
        get modem_simple(): GdbusModemSimple | null;
        set modem_simple(val: GdbusModemSimple | null);
        get modemSimple(): GdbusModemSimple | null;
        set modemSimple(val: GdbusModemSimple | null);
        get modem_time(): GdbusModemTime | null;
        set modem_time(val: GdbusModemTime | null);
        get modemTime(): GdbusModemTime | null;
        set modemTime(val: GdbusModemTime | null);
        get modem_voice(): GdbusModemVoice | null;
        set modem_voice(val: GdbusModemVoice | null);
        get modemVoice(): GdbusModemVoice | null;
        set modemVoice(val: GdbusModemVoice | null);
        get modem3gpp(): GdbusModem3gpp | null;
        set modem3gpp(val: GdbusModem3gpp | null);
        get modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        set modem3gpp_profile_manager(val: GdbusModem3gppProfileManager | null);
        get modem3gppProfileManager(): GdbusModem3gppProfileManager | null;
        set modem3gppProfileManager(val: GdbusModem3gppProfileManager | null);
        get modem3gpp_ussd(): GdbusModem3gppUssd | null;
        set modem3gpp_ussd(val: GdbusModem3gppUssd | null);
        get modem3gppUssd(): GdbusModem3gppUssd | null;
        set modem3gppUssd(val: GdbusModem3gppUssd | null);
        get_interface(interface_name: string): Gio.DBusInterface | null;
        get_interfaces(): Gio.DBusInterface[];
        get_object_path(): string;
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        vfunc_get_interfaces(): Gio.DBusInterface[];
        vfunc_get_object_path(): string;
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
        get_modem(): GdbusModem | null;
        get_modem3gpp(): GdbusModem3gpp | null;
        get_modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
        get_modem_cdma(): GdbusModemCdma | null;
        get_modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        get_modem_firmware(): GdbusModemFirmware | null;
        get_modem_location(): GdbusModemLocation | null;
        get_modem_messaging(): GdbusModemMessaging | null;
        get_modem_oma(): GdbusModemOma | null;
        get_modem_sar(): GdbusModemSar | null;
        get_modem_signal(): GdbusModemSignal | null;
        get_modem_simple(): GdbusModemSimple | null;
        get_modem_time(): GdbusModemTime | null;
        get_modem_voice(): GdbusModemVoice | null;
    }
    namespace GdbusObjectSkeleton {
        interface SignalSignatures extends Gio.DBusObjectSkeleton.SignalSignatures {
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::modem": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cdma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cell-broadcast": (pspec: GObject.ParamSpec) => void;
            "notify::modem-firmware": (pspec: GObject.ParamSpec) => void;
            "notify::modem-location": (pspec: GObject.ParamSpec) => void;
            "notify::modem-messaging": (pspec: GObject.ParamSpec) => void;
            "notify::modem-oma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-sar": (pspec: GObject.ParamSpec) => void;
            "notify::modem-signal": (pspec: GObject.ParamSpec) => void;
            "notify::modem-simple": (pspec: GObject.ParamSpec) => void;
            "notify::modem-time": (pspec: GObject.ParamSpec) => void;
            "notify::modem-voice": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-profile-manager": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-ussd": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusObjectSkeleton.ConstructorProps, Gio.DBusObject.ConstructorProps, GdbusObject.ConstructorProps {}
    }
    class GdbusObjectSkeleton extends Gio.DBusObjectSkeleton implements Gio.DBusObject, GdbusObject {
        static $gtype: GObject.GType<GdbusObjectSkeleton>;
        $signals: GdbusObjectSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusObjectSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](object_path: string): GdbusObjectSkeleton;
        connect<K extends keyof GdbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusObjectSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusObjectSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusObjectSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        set_modem(interface_: GdbusModem | null): void;
        set_modem3gpp(interface_: GdbusModem3gpp | null): void;
        set_modem3gpp_profile_manager(interface_: GdbusModem3gppProfileManager | null): void;
        set_modem3gpp_ussd(interface_: GdbusModem3gppUssd | null): void;
        set_modem_cdma(interface_: GdbusModemCdma | null): void;
        set_modem_cell_broadcast(interface_: GdbusModemCellBroadcast | null): void;
        set_modem_firmware(interface_: GdbusModemFirmware | null): void;
        set_modem_location(interface_: GdbusModemLocation | null): void;
        set_modem_messaging(interface_: GdbusModemMessaging | null): void;
        set_modem_oma(interface_: GdbusModemOma | null): void;
        set_modem_sar(interface_: GdbusModemSar | null): void;
        set_modem_signal(interface_: GdbusModemSignal | null): void;
        set_modem_simple(interface_: GdbusModemSimple | null): void;
        set_modem_time(interface_: GdbusModemTime | null): void;
        set_modem_voice(interface_: GdbusModemVoice | null): void;
        get modem(): GdbusModem | null;
        set modem(val: GdbusModem | null);
        get modem_cdma(): GdbusModemCdma | null;
        set modem_cdma(val: GdbusModemCdma | null);
        get modemCdma(): GdbusModemCdma | null;
        set modemCdma(val: GdbusModemCdma | null);
        get modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        set modem_cell_broadcast(val: GdbusModemCellBroadcast | null);
        get modemCellBroadcast(): GdbusModemCellBroadcast | null;
        set modemCellBroadcast(val: GdbusModemCellBroadcast | null);
        get modem_firmware(): GdbusModemFirmware | null;
        set modem_firmware(val: GdbusModemFirmware | null);
        get modemFirmware(): GdbusModemFirmware | null;
        set modemFirmware(val: GdbusModemFirmware | null);
        get modem_location(): GdbusModemLocation | null;
        set modem_location(val: GdbusModemLocation | null);
        get modemLocation(): GdbusModemLocation | null;
        set modemLocation(val: GdbusModemLocation | null);
        get modem_messaging(): GdbusModemMessaging | null;
        set modem_messaging(val: GdbusModemMessaging | null);
        get modemMessaging(): GdbusModemMessaging | null;
        set modemMessaging(val: GdbusModemMessaging | null);
        get modem_oma(): GdbusModemOma | null;
        set modem_oma(val: GdbusModemOma | null);
        get modemOma(): GdbusModemOma | null;
        set modemOma(val: GdbusModemOma | null);
        get modem_sar(): GdbusModemSar | null;
        set modem_sar(val: GdbusModemSar | null);
        get modemSar(): GdbusModemSar | null;
        set modemSar(val: GdbusModemSar | null);
        get modem_signal(): GdbusModemSignal | null;
        set modem_signal(val: GdbusModemSignal | null);
        get modemSignal(): GdbusModemSignal | null;
        set modemSignal(val: GdbusModemSignal | null);
        get modem_simple(): GdbusModemSimple | null;
        set modem_simple(val: GdbusModemSimple | null);
        get modemSimple(): GdbusModemSimple | null;
        set modemSimple(val: GdbusModemSimple | null);
        get modem_time(): GdbusModemTime | null;
        set modem_time(val: GdbusModemTime | null);
        get modemTime(): GdbusModemTime | null;
        set modemTime(val: GdbusModemTime | null);
        get modem_voice(): GdbusModemVoice | null;
        set modem_voice(val: GdbusModemVoice | null);
        get modemVoice(): GdbusModemVoice | null;
        set modemVoice(val: GdbusModemVoice | null);
        get modem3gpp(): GdbusModem3gpp | null;
        set modem3gpp(val: GdbusModem3gpp | null);
        get modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        set modem3gpp_profile_manager(val: GdbusModem3gppProfileManager | null);
        get modem3gppProfileManager(): GdbusModem3gppProfileManager | null;
        set modem3gppProfileManager(val: GdbusModem3gppProfileManager | null);
        get modem3gpp_ussd(): GdbusModem3gppUssd | null;
        set modem3gpp_ussd(val: GdbusModem3gppUssd | null);
        get modem3gppUssd(): GdbusModem3gppUssd | null;
        set modem3gppUssd(val: GdbusModem3gppUssd | null);
        get_interface(interface_name: string): Gio.DBusInterface | null;
        get_interfaces(): Gio.DBusInterface[];
        get_object_path(): string;
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        vfunc_get_interfaces(): Gio.DBusInterface[];
        vfunc_get_object_path(): string;
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
        get_modem(): GdbusModem | null;
        get_modem3gpp(): GdbusModem3gpp | null;
        get_modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
        get_modem_cdma(): GdbusModemCdma | null;
        get_modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        get_modem_firmware(): GdbusModemFirmware | null;
        get_modem_location(): GdbusModemLocation | null;
        get_modem_messaging(): GdbusModemMessaging | null;
        get_modem_oma(): GdbusModemOma | null;
        get_modem_sar(): GdbusModemSar | null;
        get_modem_signal(): GdbusModemSignal | null;
        get_modem_simple(): GdbusModemSimple | null;
        get_modem_time(): GdbusModemTime | null;
        get_modem_voice(): GdbusModemVoice | null;
    }
    namespace GdbusOrgFreedesktopModemManager1Proxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusOrgFreedesktopModemManager1.ConstructorProps {}
    }
    class GdbusOrgFreedesktopModemManager1Proxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusOrgFreedesktopModemManager1Proxy>, Gio.DBusInterface, Gio.Initable, GdbusOrgFreedesktopModemManager1 {
        static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1Proxy>;
        $signals: GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures;
        constructor(properties?: Partial<GdbusOrgFreedesktopModemManager1Proxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusOrgFreedesktopModemManager1Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusOrgFreedesktopModemManager1Proxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get version(): string | null;
        set version(val: string | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
        call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
        call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_scan_devices(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_scan_devices_finish(res: Gio.AsyncResult): boolean;
        call_scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_logging_finish(res: Gio.AsyncResult): boolean;
        call_set_logging_sync(arg_level: string, cancellable: Gio.Cancellable | null): boolean;
        complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
        complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
        complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
        complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
        vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
    }
    namespace GdbusOrgFreedesktopModemManager1Skeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusOrgFreedesktopModemManager1.ConstructorProps {}
    }
    class GdbusOrgFreedesktopModemManager1Skeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusOrgFreedesktopModemManager1 {
        static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1Skeleton>;
        $signals: GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusOrgFreedesktopModemManager1Skeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusOrgFreedesktopModemManager1Skeleton;
        connect<K extends keyof GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusOrgFreedesktopModemManager1Skeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get version(): string | null;
        set version(val: string | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
        call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
        call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_scan_devices(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_scan_devices_finish(res: Gio.AsyncResult): boolean;
        call_scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_logging_finish(res: Gio.AsyncResult): boolean;
        call_set_logging_sync(arg_level: string, cancellable: Gio.Cancellable | null): boolean;
        complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
        complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
        complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
        complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
        vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
    }
    namespace GdbusSimProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::eid": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::esim-status": (pspec: GObject.ParamSpec) => void;
            "notify::gid1": (pspec: GObject.ParamSpec) => void;
            "notify::gid2": (pspec: GObject.ParamSpec) => void;
            "notify::imsi": (pspec: GObject.ParamSpec) => void;
            "notify::operator-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-networks": (pspec: GObject.ParamSpec) => void;
            "notify::removability": (pspec: GObject.ParamSpec) => void;
            "notify::sim-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::sim-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusSim.ConstructorProps {}
    }
    class GdbusSimProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusSimProxy>, Gio.DBusInterface, Gio.Initable, GdbusSim {
        static $gtype: GObject.GType<GdbusSimProxy>;
        $signals: GdbusSimProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusSimProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusSimProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusSimProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusSimProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusSimProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusSimProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSimProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusSimProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSimProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusSimProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusSimProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusSimProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusSimProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get active(): boolean;
        set active(val: boolean);
        get eid(): string | null;
        set eid(val: string | null);
        get emergency_numbers(): string[] | null;
        set emergency_numbers(val: string[] | null);
        get emergencyNumbers(): string[] | null;
        set emergencyNumbers(val: string[] | null);
        get esim_status(): number;
        set esim_status(val: number);
        get esimStatus(): number;
        set esimStatus(val: number);
        get gid1(): GLib.Variant | null;
        set gid1(val: GLib.Variant | null);
        get gid2(): GLib.Variant | null;
        set gid2(val: GLib.Variant | null);
        get imsi(): string | null;
        set imsi(val: string | null);
        get operator_identifier(): string | null;
        set operator_identifier(val: string | null);
        get operatorIdentifier(): string | null;
        set operatorIdentifier(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get preferred_networks(): GLib.Variant | null;
        set preferred_networks(val: GLib.Variant | null);
        get preferredNetworks(): GLib.Variant | null;
        set preferredNetworks(val: GLib.Variant | null);
        get removability(): number;
        set removability(val: number);
        get sim_identifier(): string | null;
        set sim_identifier(val: string | null);
        get simIdentifier(): string | null;
        set simIdentifier(val: string | null);
        get sim_type(): number;
        set sim_type(val: number);
        get simType(): number;
        set simType(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusSimProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_change_pin_finish(res: Gio.AsyncResult): boolean;
        call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_pin_finish(res: Gio.AsyncResult): boolean;
        call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_pin_finish(res: Gio.AsyncResult): boolean;
        call_send_pin_sync(arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_puk_finish(res: Gio.AsyncResult): boolean;
        call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_preferred_networks_finish(res: Gio.AsyncResult): boolean;
        call_set_preferred_networks_sync(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
        complete_set_preferred_networks(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
        vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
        vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
        vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
        vfunc_handle_set_preferred_networks(invocation: Gio.DBusMethodInvocation, arg_preferred_networks: GLib.Variant): boolean;
    }
    namespace GdbusSimSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::eid": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::esim-status": (pspec: GObject.ParamSpec) => void;
            "notify::gid1": (pspec: GObject.ParamSpec) => void;
            "notify::gid2": (pspec: GObject.ParamSpec) => void;
            "notify::imsi": (pspec: GObject.ParamSpec) => void;
            "notify::operator-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-networks": (pspec: GObject.ParamSpec) => void;
            "notify::removability": (pspec: GObject.ParamSpec) => void;
            "notify::sim-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::sim-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusSim.ConstructorProps {}
    }
    class GdbusSimSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusSim {
        static $gtype: GObject.GType<GdbusSimSkeleton>;
        $signals: GdbusSimSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusSimSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusSimSkeleton;
        connect<K extends keyof GdbusSimSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSimSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusSimSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSimSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusSimSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusSimSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get active(): boolean;
        set active(val: boolean);
        get eid(): string | null;
        set eid(val: string | null);
        get emergency_numbers(): string[] | null;
        set emergency_numbers(val: string[] | null);
        get emergencyNumbers(): string[] | null;
        set emergencyNumbers(val: string[] | null);
        get esim_status(): number;
        set esim_status(val: number);
        get esimStatus(): number;
        set esimStatus(val: number);
        get gid1(): GLib.Variant | null;
        set gid1(val: GLib.Variant | null);
        get gid2(): GLib.Variant | null;
        set gid2(val: GLib.Variant | null);
        get imsi(): string | null;
        set imsi(val: string | null);
        get operator_identifier(): string | null;
        set operator_identifier(val: string | null);
        get operatorIdentifier(): string | null;
        set operatorIdentifier(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get preferred_networks(): GLib.Variant | null;
        set preferred_networks(val: GLib.Variant | null);
        get preferredNetworks(): GLib.Variant | null;
        set preferredNetworks(val: GLib.Variant | null);
        get removability(): number;
        set removability(val: number);
        get sim_identifier(): string | null;
        set sim_identifier(val: string | null);
        get simIdentifier(): string | null;
        set simIdentifier(val: string | null);
        get sim_type(): number;
        set sim_type(val: number);
        get simType(): number;
        set simType(val: number);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_change_pin_finish(res: Gio.AsyncResult): boolean;
        call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_pin_finish(res: Gio.AsyncResult): boolean;
        call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_pin_finish(res: Gio.AsyncResult): boolean;
        call_send_pin_sync(arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_puk_finish(res: Gio.AsyncResult): boolean;
        call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_preferred_networks_finish(res: Gio.AsyncResult): boolean;
        call_set_preferred_networks_sync(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
        complete_set_preferred_networks(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
        vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
        vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
        vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
        vfunc_handle_set_preferred_networks(invocation: Gio.DBusMethodInvocation, arg_preferred_networks: GLib.Variant): boolean;
    }
    namespace GdbusSmsProxy {
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-report-request": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-state": (pspec: GObject.ParamSpec) => void;
            "notify::discharge-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::message-reference": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::pdu-type": (pspec: GObject.ParamSpec) => void;
            "notify::service-category": (pspec: GObject.ParamSpec) => void;
            "notify::smsc": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::storage": (pspec: GObject.ParamSpec) => void;
            "notify::teleservice-id": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::validity": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusSms.ConstructorProps {}
    }
    class GdbusSmsProxy extends Gio.DBusProxy implements Gio.AsyncInitable<GdbusSmsProxy>, Gio.DBusInterface, Gio.Initable, GdbusSms {
        static $gtype: GObject.GType<GdbusSmsProxy>;
        $signals: GdbusSmsProxy.SignalSignatures;
        constructor(properties?: Partial<GdbusSmsProxy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): GdbusSmsProxy;
        static new_finish(...args: never[]): any;
        static new_for_bus_finish(res: Gio.AsyncResult): GdbusSmsProxy;
        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusSmsProxy;
        static new_for_bus_sync(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusSmsProxy;
        static new_sync(...args: never[]): any;
        connect<K extends keyof GdbusSmsProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSmsProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusSmsProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSmsProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusSmsProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusSmsProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusSmsProxy> | null): void;
        static ["new"](...args: never[]): any;
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GdbusSmsProxy> | null): void;
        static new_for_bus(...args: never[]): any;
        get "class"(): number;
        set "class"(val: number);
        get data(): GLib.Variant | null;
        set data(val: GLib.Variant | null);
        get delivery_report_request(): boolean;
        set delivery_report_request(val: boolean);
        get deliveryReportRequest(): boolean;
        set deliveryReportRequest(val: boolean);
        get delivery_state(): number;
        set delivery_state(val: number);
        get deliveryState(): number;
        set deliveryState(val: number);
        get discharge_timestamp(): string | null;
        set discharge_timestamp(val: string | null);
        get dischargeTimestamp(): string | null;
        set dischargeTimestamp(val: string | null);
        get message_reference(): number;
        set message_reference(val: number);
        get messageReference(): number;
        set messageReference(val: number);
        get number(): string | null;
        set number(val: string | null);
        get pdu_type(): number;
        set pdu_type(val: number);
        get pduType(): number;
        set pduType(val: number);
        get service_category(): number;
        set service_category(val: number);
        get serviceCategory(): number;
        set serviceCategory(val: number);
        get smsc(): string | null;
        set smsc(val: string | null);
        get state(): number;
        set state(val: number);
        get storage(): number;
        set storage(val: number);
        get teleservice_id(): number;
        set teleservice_id(val: number);
        get teleserviceId(): number;
        set teleserviceId(val: number);
        get text(): string | null;
        set text(val: string | null);
        get timestamp(): string | null;
        set timestamp(val: string | null);
        get validity(): GLib.Variant | null;
        set validity(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): GdbusSmsProxy;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
        call_send(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_finish(res: Gio.AsyncResult): boolean;
        call_send_sync(cancellable: Gio.Cancellable | null): boolean;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_store_finish(res: Gio.AsyncResult): boolean;
        call_store_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_send(invocation: Gio.DBusMethodInvocation): void;
        complete_store(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace GdbusSmsSkeleton {
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-report-request": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-state": (pspec: GObject.ParamSpec) => void;
            "notify::discharge-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::message-reference": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::pdu-type": (pspec: GObject.ParamSpec) => void;
            "notify::service-category": (pspec: GObject.ParamSpec) => void;
            "notify::smsc": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::storage": (pspec: GObject.ParamSpec) => void;
            "notify::teleservice-id": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::validity": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, GdbusSms.ConstructorProps {}
    }
    class GdbusSmsSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusSms {
        static $gtype: GObject.GType<GdbusSmsSkeleton>;
        $signals: GdbusSmsSkeleton.SignalSignatures;
        constructor(properties?: Partial<GdbusSmsSkeleton.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): GdbusSmsSkeleton;
        connect<K extends keyof GdbusSmsSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSmsSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GdbusSmsSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GdbusSmsSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GdbusSmsSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GdbusSmsSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get "class"(): number;
        set "class"(val: number);
        get data(): GLib.Variant | null;
        set data(val: GLib.Variant | null);
        get delivery_report_request(): boolean;
        set delivery_report_request(val: boolean);
        get deliveryReportRequest(): boolean;
        set deliveryReportRequest(val: boolean);
        get delivery_state(): number;
        set delivery_state(val: number);
        get deliveryState(): number;
        set deliveryState(val: number);
        get discharge_timestamp(): string | null;
        set discharge_timestamp(val: string | null);
        get dischargeTimestamp(): string | null;
        set dischargeTimestamp(val: string | null);
        get message_reference(): number;
        set message_reference(val: number);
        get messageReference(): number;
        set messageReference(val: number);
        get number(): string | null;
        set number(val: string | null);
        get pdu_type(): number;
        set pdu_type(val: number);
        get pduType(): number;
        set pduType(val: number);
        get service_category(): number;
        set service_category(val: number);
        get serviceCategory(): number;
        set serviceCategory(val: number);
        get smsc(): string | null;
        set smsc(val: string | null);
        get state(): number;
        set state(val: number);
        get storage(): number;
        set storage(val: number);
        get teleservice_id(): number;
        set teleservice_id(val: number);
        get teleserviceId(): number;
        set teleserviceId(val: number);
        get text(): string | null;
        set text(val: string | null);
        get timestamp(): string | null;
        set timestamp(val: string | null);
        get validity(): GLib.Variant | null;
        set validity(val: GLib.Variant | null);
        get_object(): Gio.DBusObject | null;
        get_info(): Gio.DBusInterfaceInfo | null;
        get_info(...args: never[]): any;
        set_object(object: Gio.DBusObject | null): void;
        vfunc_dup_object(): Gio.DBusObject | null;
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        vfunc_get_info(...args: never[]): any;
        vfunc_set_object(object: Gio.DBusObject | null): void;
        call_send(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_finish(res: Gio.AsyncResult): boolean;
        call_send_sync(cancellable: Gio.Cancellable | null): boolean;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_store_finish(res: Gio.AsyncResult): boolean;
        call_store_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_send(invocation: Gio.DBusMethodInvocation): void;
        complete_store(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace KernelEventProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class KernelEventProperties extends GObject.Object {
        static $gtype: GObject.GType<KernelEventProperties>;
        $signals: KernelEventProperties.SignalSignatures;
        constructor(properties?: Partial<KernelEventProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): KernelEventProperties;
        connect<K extends keyof KernelEventProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KernelEventProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KernelEventProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KernelEventProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KernelEventProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KernelEventProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_action(): string;
        get_name(): string;
        get_subsystem(): string;
        get_uid(): string;
        set_action(action: string): void;
        set_name(name: string): void;
        set_subsystem(subsystem: string): void;
        set_uid(uid: string): void;
    }
    namespace Location3gpp {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Location3gpp extends GObject.Object {
        static $gtype: GObject.GType<Location3gpp>;
        $signals: Location3gpp.SignalSignatures;
        constructor(properties?: Partial<Location3gpp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Location3gpp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Location3gpp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Location3gpp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Location3gpp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Location3gpp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Location3gpp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_cell_id(): number;
        get_location_area_code(): number;
        get_mobile_country_code(): number;
        get_mobile_network_code(): number;
        get_operator_code(): string;
        get_tracking_area_code(): number;
    }
    namespace LocationCdmaBs {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class LocationCdmaBs extends GObject.Object {
        static $gtype: GObject.GType<LocationCdmaBs>;
        $signals: LocationCdmaBs.SignalSignatures;
        constructor(properties?: Partial<LocationCdmaBs.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof LocationCdmaBs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationCdmaBs.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LocationCdmaBs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationCdmaBs.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LocationCdmaBs.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationCdmaBs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_latitude(): number;
        get_longitude(): number;
    }
    namespace LocationGpsNmea {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class LocationGpsNmea extends GObject.Object {
        static $gtype: GObject.GType<LocationGpsNmea>;
        $signals: LocationGpsNmea.SignalSignatures;
        constructor(properties?: Partial<LocationGpsNmea.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof LocationGpsNmea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationGpsNmea.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LocationGpsNmea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationGpsNmea.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LocationGpsNmea.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationGpsNmea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        build_full(): string;
        get_trace(trace_type: string): string;
        get_traces(): string[];
    }
    namespace LocationGpsRaw {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class LocationGpsRaw extends GObject.Object {
        static $gtype: GObject.GType<LocationGpsRaw>;
        $signals: LocationGpsRaw.SignalSignatures;
        constructor(properties?: Partial<LocationGpsRaw.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof LocationGpsRaw.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationGpsRaw.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LocationGpsRaw.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationGpsRaw.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LocationGpsRaw.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationGpsRaw.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_altitude(): number;
        get_latitude(): number;
        get_longitude(): number;
        get_utc_time(): string;
    }
    namespace Manager {
        interface SignalSignatures extends GdbusObjectManagerClient.SignalSignatures {
            "notify::bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-destroy-notify": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-func": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-user-data": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusObjectManagerClient.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusObjectManager.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    class Manager extends GdbusObjectManagerClient implements Gio.AsyncInitable<Manager>, Gio.DBusObjectManager, Gio.Initable {
        static $gtype: GObject.GType<Manager>;
        $signals: Manager.SignalSignatures;
        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_finish(res: Gio.AsyncResult): Manager;
        static new_finish(...args: never[]): any;
        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, cancellable: Gio.Cancellable | null): Manager;
        static new_sync(...args: never[]): any;
        connect<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Manager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Manager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Manager> | null): void;
        static ["new"](...args: never[]): any;
        get_proxy(): Gio.DBusProxy;
        get_version(): string;
        inhibit_device(uid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        inhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        inhibit_device_finish(res: Gio.AsyncResult): boolean;
        inhibit_device_sync(uid: string, cancellable: Gio.Cancellable | null): boolean;
        peek_proxy(): Gio.DBusProxy;
        report_kernel_event(properties: KernelEventProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        report_kernel_event(properties: KernelEventProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        report_kernel_event(properties: KernelEventProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        report_kernel_event_finish(res: Gio.AsyncResult): boolean;
        report_kernel_event_sync(properties: KernelEventProperties, cancellable: Gio.Cancellable | null): boolean;
        scan_devices(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        scan_devices(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        scan_devices_finish(res: Gio.AsyncResult): boolean;
        scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
        set_logging(level: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_logging(level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_logging(level: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_logging_finish(res: Gio.AsyncResult): boolean;
        set_logging_sync(level: string, cancellable: Gio.Cancellable | null): boolean;
        uninhibit_device(uid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        uninhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        uninhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        uninhibit_device_finish(res: Gio.AsyncResult): boolean;
        uninhibit_device_sync(uid: string, cancellable: Gio.Cancellable | null): boolean;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Manager;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }
    namespace Modem {
        interface SignalSignatures extends GdbusModemProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::access-technologies": (pspec: GObject.ParamSpec) => void;
            "notify::bearers": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration": (pspec: GObject.ParamSpec) => void;
            "notify::carrier-configuration-revision": (pspec: GObject.ParamSpec) => void;
            "notify::current-bands": (pspec: GObject.ParamSpec) => void;
            "notify::current-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::current-modes": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::device-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::drivers": (pspec: GObject.ParamSpec) => void;
            "notify::equipment-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-revision": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-active-multiplexed-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bearers": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::own-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::physdev": (pspec: GObject.ParamSpec) => void;
            "notify::plugin": (pspec: GObject.ParamSpec) => void;
            "notify::ports": (pspec: GObject.ParamSpec) => void;
            "notify::power-state": (pspec: GObject.ParamSpec) => void;
            "notify::primary-port": (pspec: GObject.ParamSpec) => void;
            "notify::primary-sim-slot": (pspec: GObject.ParamSpec) => void;
            "notify::revision": (pspec: GObject.ParamSpec) => void;
            "notify::signal-quality": (pspec: GObject.ParamSpec) => void;
            "notify::sim": (pspec: GObject.ParamSpec) => void;
            "notify::sim-slots": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-failed-reason": (pspec: GObject.ParamSpec) => void;
            "notify::supported-bands": (pspec: GObject.ParamSpec) => void;
            "notify::supported-capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::supported-ip-families": (pspec: GObject.ParamSpec) => void;
            "notify::supported-modes": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-required": (pspec: GObject.ParamSpec) => void;
            "notify::unlock-retries": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem.ConstructorProps {}
    }
    class Modem extends GdbusModemProxy implements Gio.AsyncInitable<Modem>, Gio.DBusInterface, Gio.Initable, GdbusModem {
        static $gtype: GObject.GType<Modem>;
        $signals: Modem.SignalSignatures;
        constructor(properties?: Partial<Modem.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Modem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Modem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Modem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Modem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[]];
        static peek_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[]];
        command(cmd: string, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        command(cmd: string, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        command(cmd: string, timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        command_finish(res: Gio.AsyncResult): string;
        command_sync(cmd: string, timeout: number, cancellable: Gio.Cancellable | null): string;
        create_bearer(properties: BearerProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<Bearer>;
        create_bearer(properties: BearerProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_bearer(properties: BearerProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Bearer> | void;
        create_bearer_finish(res: Gio.AsyncResult): Bearer;
        create_bearer_sync(properties: BearerProperties, cancellable: Gio.Cancellable | null): Bearer;
        delete_bearer(bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_bearer(bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_bearer(bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_bearer_finish(res: Gio.AsyncResult): boolean;
        delete_bearer_sync(bearer: string, cancellable: Gio.Cancellable | null): boolean;
        disable(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disable(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disable_finish(res: Gio.AsyncResult): boolean;
        disable_sync(cancellable: Gio.Cancellable | null): boolean;
        dup_bearer_paths(): string[];
        dup_carrier_configuration(): string;
        dup_carrier_configuration_revision(): string;
        dup_device(): string;
        dup_device_identifier(): string;
        dup_drivers(): string[];
        dup_equipment_identifier(): string;
        dup_hardware_revision(): string;
        dup_manufacturer(): string;
        dup_model(): string;
        dup_own_numbers(): string[];
        dup_path(): string;
        dup_physdev(): string;
        dup_plugin(): string;
        dup_primary_port(): string;
        dup_revision(): string;
        dup_sim_path(): string;
        dup_sim_slot_paths(): string[];
        enable(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        enable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enable(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        enable_finish(res: Gio.AsyncResult): boolean;
        enable_sync(cancellable: Gio.Cancellable | null): boolean;
        factory_reset(code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        factory_reset(code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        factory_reset(code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        factory_reset_finish(res: Gio.AsyncResult): boolean;
        factory_reset_sync(code: string, cancellable: Gio.Cancellable | null): boolean;
        get_access_technologies(): ModemAccessTechnology;
        get_bearer_paths(): string[];
        get_carrier_configuration(): string;
        get_carrier_configuration_revision(): string;
        get_cell_info(cancellable: Gio.Cancellable | null): globalThis.Promise<CellInfo[]>;
        get_cell_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_cell_info(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<CellInfo[]> | void;
        get_cell_info_finish(res: Gio.AsyncResult): CellInfo[];
        get_cell_info_sync(cancellable: Gio.Cancellable | null): CellInfo[];
        get_current_bands(): [boolean, ModemBand[]];
        get_current_capabilities(): ModemCapability;
        get_current_modes(): [boolean, ModemMode, ModemMode];
        get_device(): string;
        get_device_identifier(): string;
        get_drivers(): string[];
        get_equipment_identifier(): string;
        get_hardware_revision(): string;
        get_manufacturer(): string;
        get_max_active_bearers(): number;
        get_max_active_multiplexed_bearers(): number;
        get_max_bearers(): number;
        get_model(): string;
        get_physdev(): string;
        get_plugin(): string;
        get_ports(): [boolean, ModemPortInfo[]];
        get_power_state(): ModemPowerState;
        get_primary_port(): string;
        get_primary_sim_slot(): number;
        get_revision(): string;
        get_signal_quality(): [number, boolean];
        get_sim(cancellable: Gio.Cancellable | null): globalThis.Promise<Sim>;
        get_sim(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_sim(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sim> | void;
        get_sim_finish(res: Gio.AsyncResult): Sim;
        get_sim_slot_paths(): string[];
        get_sim_sync(cancellable: Gio.Cancellable | null): Sim;
        get_state(): ModemState;
        get_state_failed_reason(): ModemStateFailedReason;
        get_supported_bands(): [boolean, ModemBand[]];
        get_supported_capabilities(): [boolean, ModemCapability[]];
        get_supported_ip_families(): BearerIpFamily;
        get_supported_modes(): [boolean, ModemModeCombination[]];
        get_unlock_required(): ModemLock;
        get_unlock_retries(): UnlockRetries;
        list_bearers(cancellable: Gio.Cancellable | null): globalThis.Promise<Bearer[]>;
        list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_bearers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Bearer[]> | void;
        list_bearers_finish(res: Gio.AsyncResult): Bearer[];
        list_bearers_sync(cancellable: Gio.Cancellable | null): Bearer[];
        list_sim_slots(cancellable: Gio.Cancellable | null): globalThis.Promise<Sim[]>;
        list_sim_slots(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_sim_slots(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sim[]> | void;
        list_sim_slots_finish(res: Gio.AsyncResult): Sim[];
        list_sim_slots_sync(cancellable: Gio.Cancellable | null): Sim[];
        peek_current_bands(): [boolean, ModemBand[]];
        peek_ports(): [boolean, ModemPortInfo[]];
        peek_supported_bands(): [boolean, ModemBand[]];
        peek_supported_capabilities(): [boolean, ModemCapability[]];
        peek_supported_modes(): [boolean, ModemModeCombination[]];
        peek_unlock_retries(): UnlockRetries;
        reset(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        reset(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        reset_finish(res: Gio.AsyncResult): boolean;
        reset_sync(cancellable: Gio.Cancellable | null): boolean;
        set_current_bands(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_current_bands(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_current_bands(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_current_bands_finish(res: Gio.AsyncResult): boolean;
        set_current_bands_sync(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null): boolean;
        set_current_capabilities(capabilities: ModemCapability, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_current_capabilities(capabilities: ModemCapability, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_current_capabilities(capabilities: ModemCapability, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
        set_current_capabilities_sync(capabilities: ModemCapability, cancellable: Gio.Cancellable | null): boolean;
        set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_current_modes_finish(res: Gio.AsyncResult): boolean;
        set_current_modes_sync(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null): boolean;
        set_power_state(state: ModemPowerState, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_power_state(state: ModemPowerState, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_power_state(state: ModemPowerState, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_power_state_finish(res: Gio.AsyncResult): boolean;
        set_power_state_sync(state: ModemPowerState, cancellable: Gio.Cancellable | null): boolean;
        set_primary_sim_slot(sim_slot: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_primary_sim_slot(sim_slot: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_primary_sim_slot(sim_slot: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean;
        set_primary_sim_slot_sync(sim_slot: number, cancellable: Gio.Cancellable | null): boolean;
        get access_technologies(): number;
        set access_technologies(val: number);
        get accessTechnologies(): number;
        set accessTechnologies(val: number);
        get bearers(): string[] | null;
        set bearers(val: string[] | null);
        get carrier_configuration(): string | null;
        set carrier_configuration(val: string | null);
        get carrierConfiguration(): string | null;
        set carrierConfiguration(val: string | null);
        get carrier_configuration_revision(): string | null;
        set carrier_configuration_revision(val: string | null);
        get carrierConfigurationRevision(): string | null;
        set carrierConfigurationRevision(val: string | null);
        get current_bands(): GLib.Variant | null;
        set current_bands(val: GLib.Variant | null);
        get currentBands(): GLib.Variant | null;
        set currentBands(val: GLib.Variant | null);
        get current_capabilities(): number;
        set current_capabilities(val: number);
        get currentCapabilities(): number;
        set currentCapabilities(val: number);
        get current_modes(): GLib.Variant | null;
        set current_modes(val: GLib.Variant | null);
        get currentModes(): GLib.Variant | null;
        set currentModes(val: GLib.Variant | null);
        get device(): string | null;
        set device(val: string | null);
        get device_identifier(): string | null;
        set device_identifier(val: string | null);
        get deviceIdentifier(): string | null;
        set deviceIdentifier(val: string | null);
        get drivers(): string[] | null;
        set drivers(val: string[] | null);
        get equipment_identifier(): string | null;
        set equipment_identifier(val: string | null);
        get equipmentIdentifier(): string | null;
        set equipmentIdentifier(val: string | null);
        get hardware_revision(): string | null;
        set hardware_revision(val: string | null);
        get hardwareRevision(): string | null;
        set hardwareRevision(val: string | null);
        get manufacturer(): string | null;
        set manufacturer(val: string | null);
        get max_active_bearers(): number;
        set max_active_bearers(val: number);
        get maxActiveBearers(): number;
        set maxActiveBearers(val: number);
        get max_active_multiplexed_bearers(): number;
        set max_active_multiplexed_bearers(val: number);
        get maxActiveMultiplexedBearers(): number;
        set maxActiveMultiplexedBearers(val: number);
        get max_bearers(): number;
        set max_bearers(val: number);
        get maxBearers(): number;
        set maxBearers(val: number);
        get model(): string | null;
        set model(val: string | null);
        get own_numbers(): string[] | null;
        set own_numbers(val: string[] | null);
        get ownNumbers(): string[] | null;
        set ownNumbers(val: string[] | null);
        get physdev(): string | null;
        set physdev(val: string | null);
        get plugin(): string | null;
        set plugin(val: string | null);
        get ports(): GLib.Variant | null;
        set ports(val: GLib.Variant | null);
        get power_state(): number;
        set power_state(val: number);
        get powerState(): number;
        set powerState(val: number);
        get primary_port(): string | null;
        set primary_port(val: string | null);
        get primaryPort(): string | null;
        set primaryPort(val: string | null);
        get primary_sim_slot(): number;
        set primary_sim_slot(val: number);
        get primarySimSlot(): number;
        set primarySimSlot(val: number);
        get revision(): string | null;
        set revision(val: string | null);
        get signal_quality(): GLib.Variant | null;
        set signal_quality(val: GLib.Variant | null);
        get signalQuality(): GLib.Variant | null;
        set signalQuality(val: GLib.Variant | null);
        get sim(): string | null;
        set sim(val: string | null);
        get sim_slots(): string[] | null;
        set sim_slots(val: string[] | null);
        get simSlots(): string[] | null;
        set simSlots(val: string[] | null);
        get state(): number;
        set state(val: number);
        get state_failed_reason(): number;
        set state_failed_reason(val: number);
        get stateFailedReason(): number;
        set stateFailedReason(val: number);
        get supported_bands(): GLib.Variant | null;
        set supported_bands(val: GLib.Variant | null);
        get supportedBands(): GLib.Variant | null;
        set supportedBands(val: GLib.Variant | null);
        get supported_capabilities(): GLib.Variant | null;
        set supported_capabilities(val: GLib.Variant | null);
        get supportedCapabilities(): GLib.Variant | null;
        set supportedCapabilities(val: GLib.Variant | null);
        get supported_ip_families(): number;
        set supported_ip_families(val: number);
        get supportedIpFamilies(): number;
        set supportedIpFamilies(val: number);
        get supported_modes(): GLib.Variant | null;
        set supported_modes(val: GLib.Variant | null);
        get supportedModes(): GLib.Variant | null;
        set supportedModes(val: GLib.Variant | null);
        get unlock_required(): number;
        set unlock_required(val: number);
        get unlockRequired(): number;
        set unlockRequired(val: number);
        get unlock_retries(): GLib.Variant | null;
        set unlock_retries(val: GLib.Variant | null);
        get unlockRetries(): GLib.Variant | null;
        set unlockRetries(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Modem;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_command_finish(res: Gio.AsyncResult): [boolean, string];
        call_command_sync(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): [boolean, string];
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_bearer_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
        call_delete_bearer_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_factory_reset_finish(res: Gio.AsyncResult): boolean;
        call_factory_reset_sync(arg_code: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_cell_info(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_cell_info_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_cell_info_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_list_bearers(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_bearers_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_reset(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_reset(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_reset_finish(res: Gio.AsyncResult): boolean;
        call_reset_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
        call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
        call_set_current_capabilities_sync(arg_capabilities: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
        call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_state_finish(res: Gio.AsyncResult): boolean;
        call_set_power_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean;
        call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable: Gio.Cancellable | null): boolean;
        complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
        complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_get_cell_info(invocation: Gio.DBusMethodInvocation, cell_info: GLib.Variant): void;
        complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
        complete_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
        complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
        vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
        vfunc_handle_get_cell_info(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
        vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
        vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
        vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
        vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean;
        vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    namespace Modem3gpp {
        interface SignalSignatures extends GdbusModem3gppProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::enabled-facility-locks": (pspec: GObject.ParamSpec) => void;
            "notify::eps-ue-mode-operation": (pspec: GObject.ParamSpec) => void;
            "notify::imei": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer": (pspec: GObject.ParamSpec) => void;
            "notify::initial-eps-bearer-settings": (pspec: GObject.ParamSpec) => void;
            "notify::network-rejection": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g-registration-settings": (pspec: GObject.ParamSpec) => void;
            "notify::operator-code": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::packet-service-state": (pspec: GObject.ParamSpec) => void;
            "notify::pco": (pspec: GObject.ParamSpec) => void;
            "notify::registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::subscription-state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModem3gppProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gpp.ConstructorProps {}
    }
    class Modem3gpp extends GdbusModem3gppProxy implements Gio.AsyncInitable<Modem3gpp>, Gio.DBusInterface, Gio.Initable, GdbusModem3gpp {
        static $gtype: GObject.GType<Modem3gpp>;
        $signals: Modem3gpp.SignalSignatures;
        constructor(properties?: Partial<Modem3gpp.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Modem3gpp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gpp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Modem3gpp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gpp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Modem3gpp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Modem3gpp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        disable_facility_lock(facility: Modem3gppFacility, control_key: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disable_facility_lock(facility: Modem3gppFacility, control_key: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disable_facility_lock(facility: Modem3gppFacility, control_key: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disable_facility_lock_finish(res: Gio.AsyncResult): boolean;
        disable_facility_lock_sync(facility: Modem3gppFacility, control_key: string, cancellable: Gio.Cancellable | null): boolean;
        dup_imei(): string;
        dup_initial_eps_bearer_path(): string;
        dup_operator_code(): string;
        dup_operator_name(): string;
        dup_path(): string;
        get_enabled_facility_locks(): Modem3gppFacility;
        get_eps_ue_mode_operation(): Modem3gppEpsUeModeOperation;
        get_imei(): string;
        get_initial_eps_bearer(cancellable: Gio.Cancellable | null): globalThis.Promise<Bearer>;
        get_initial_eps_bearer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_initial_eps_bearer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Bearer> | void;
        get_initial_eps_bearer_finish(res: Gio.AsyncResult): Bearer;
        get_initial_eps_bearer_settings(): BearerProperties;
        get_initial_eps_bearer_sync(cancellable: Gio.Cancellable | null): Bearer;
        get_network_rejection(): NetworkRejection;
        get_nr5g_registration_settings(): Nr5gRegistrationSettings;
        get_operator_code(): string;
        get_operator_name(): string;
        get_packet_service_state(): Modem3gppPacketServiceState;
        get_path(): string;
        get_pco(): Pco[];
        get_registration_state(): Modem3gppRegistrationState;
        get_subscription_state(): Modem3gppSubscriptionState;
        peek_initial_eps_bearer_settings(): BearerProperties;
        peek_network_rejection(): NetworkRejection;
        peek_nr5g_registration_settings(): Nr5gRegistrationSettings;
        register(network_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        register(network_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        register(network_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        register_finish(res: Gio.AsyncResult): boolean;
        register_sync(network_id: string, cancellable: Gio.Cancellable | null): boolean;
        scan(cancellable: Gio.Cancellable | null): globalThis.Promise<Modem3gppNetwork[]>;
        scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        scan(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Modem3gppNetwork[]> | void;
        scan_finish(res: Gio.AsyncResult): Modem3gppNetwork[];
        scan_sync(cancellable: Gio.Cancellable | null): Modem3gppNetwork[];
        set_carrier_lock(data: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_carrier_lock(data: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_carrier_lock(data: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_carrier_lock_finish(res: Gio.AsyncResult): boolean;
        set_carrier_lock_sync(data: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        set_eps_ue_mode_operation(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_eps_ue_mode_operation(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_eps_ue_mode_operation(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
        set_eps_ue_mode_operation_sync(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null): boolean;
        set_initial_eps_bearer_settings(config: BearerProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_initial_eps_bearer_settings(config: BearerProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_initial_eps_bearer_settings(config: BearerProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
        set_initial_eps_bearer_settings_sync(config: BearerProperties, cancellable: Gio.Cancellable | null): boolean;
        set_nr5g_registration_settings(settings: Nr5gRegistrationSettings, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_nr5g_registration_settings(settings: Nr5gRegistrationSettings, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_nr5g_registration_settings(settings: Nr5gRegistrationSettings, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_nr5g_registration_settings_finish(res: Gio.AsyncResult): boolean;
        set_nr5g_registration_settings_sync(settings: Nr5gRegistrationSettings, cancellable: Gio.Cancellable | null): boolean;
        set_packet_service_state(state: Modem3gppPacketServiceState, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_packet_service_state(state: Modem3gppPacketServiceState, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_packet_service_state(state: Modem3gppPacketServiceState, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_packet_service_state_finish(res: Gio.AsyncResult): boolean;
        set_packet_service_state_sync(state: Modem3gppPacketServiceState, cancellable: Gio.Cancellable | null): boolean;
        get enabled_facility_locks(): number;
        set enabled_facility_locks(val: number);
        get enabledFacilityLocks(): number;
        set enabledFacilityLocks(val: number);
        get eps_ue_mode_operation(): number;
        set eps_ue_mode_operation(val: number);
        get epsUeModeOperation(): number;
        set epsUeModeOperation(val: number);
        get imei(): string | null;
        set imei(val: string | null);
        get initial_eps_bearer(): string | null;
        set initial_eps_bearer(val: string | null);
        get initialEpsBearer(): string | null;
        set initialEpsBearer(val: string | null);
        get initial_eps_bearer_settings(): GLib.Variant | null;
        set initial_eps_bearer_settings(val: GLib.Variant | null);
        get initialEpsBearerSettings(): GLib.Variant | null;
        set initialEpsBearerSettings(val: GLib.Variant | null);
        get network_rejection(): GLib.Variant | null;
        set network_rejection(val: GLib.Variant | null);
        get networkRejection(): GLib.Variant | null;
        set networkRejection(val: GLib.Variant | null);
        get nr5g_registration_settings(): GLib.Variant | null;
        set nr5g_registration_settings(val: GLib.Variant | null);
        get nr5gRegistrationSettings(): GLib.Variant | null;
        set nr5gRegistrationSettings(val: GLib.Variant | null);
        get operator_code(): string | null;
        set operator_code(val: string | null);
        get operatorCode(): string | null;
        set operatorCode(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get packet_service_state(): number;
        set packet_service_state(val: number);
        get packetServiceState(): number;
        set packetServiceState(val: number);
        get pco(): GLib.Variant | null;
        set pco(val: GLib.Variant | null);
        get registration_state(): number;
        set registration_state(val: number);
        get registrationState(): number;
        set registrationState(val: number);
        get subscription_state(): number;
        set subscription_state(val: number);
        get subscriptionState(): number;
        set subscriptionState(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Modem3gpp;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disable_facility_lock_finish(res: Gio.AsyncResult): boolean;
        call_disable_facility_lock_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_register_finish(res: Gio.AsyncResult): boolean;
        call_register_sync(arg_operator_id: string, cancellable: Gio.Cancellable | null): boolean;
        call_scan(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_scan_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_carrier_lock_finish(res: Gio.AsyncResult): boolean;
        call_set_carrier_lock_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
        call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_nr5g_registration_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_nr5g_registration_settings_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_packet_service_state_finish(res: Gio.AsyncResult): boolean;
        call_set_packet_service_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        complete_disable_facility_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_register(invocation: Gio.DBusMethodInvocation): void;
        complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
        complete_set_carrier_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
        complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_packet_service_state(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_disable_facility_lock(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
        vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_carrier_lock(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
        vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
        vfunc_handle_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_set_packet_service_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
    }
    namespace Modem3gppProfileManager {
        interface SignalSignatures extends GdbusModem3gppProfileManagerProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::index-field": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModem3gppProfileManagerProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gppProfileManager.ConstructorProps {}
    }
    class Modem3gppProfileManager extends GdbusModem3gppProfileManagerProxy implements Gio.AsyncInitable<Modem3gppProfileManager>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppProfileManager {
        static $gtype: GObject.GType<Modem3gppProfileManager>;
        $signals: Modem3gppProfileManager.SignalSignatures;
        constructor(properties?: Partial<Modem3gppProfileManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Modem3gppProfileManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gppProfileManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Modem3gppProfileManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gppProfileManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Modem3gppProfileManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Modem3gppProfileManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](profile: __3gppProfile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        ["delete"](profile: __3gppProfile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        ["delete"](profile: __3gppProfile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(res: Gio.AsyncResult): boolean;
        delete_sync(profile: __3gppProfile, cancellable: Gio.Cancellable | null): boolean;
        dup_index_field(): string;
        dup_path(): string;
        get_index_field(): string;
        get_path(): string;
        list(cancellable: Gio.Cancellable | null): globalThis.Promise<__3gppProfile[] | null>;
        list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<__3gppProfile[] | null> | void;
        list_finish(res: Gio.AsyncResult): [boolean, __3gppProfile[] | null];
        list_sync(cancellable: Gio.Cancellable | null): [boolean, __3gppProfile[] | null];
        set(requested: __3gppProfile, cancellable: Gio.Cancellable | null): globalThis.Promise<__3gppProfile>;
        set(requested: __3gppProfile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set(requested: __3gppProfile, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<__3gppProfile> | void;
        set(...args: never[]): any;
        set_finish(res: Gio.AsyncResult): __3gppProfile;
        set_sync(requested: __3gppProfile, cancellable: Gio.Cancellable | null): __3gppProfile;
        get index_field(): string | null;
        set index_field(val: string | null);
        get indexField(): string | null;
        set indexField(val: string | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Modem3gppProfileManager;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_set_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_set_sync(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, profiles: GLib.Variant): void;
        complete_set(invocation: Gio.DBusMethodInvocation, stored_properties: GLib.Variant): void;
        emit_updated(): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set(invocation: Gio.DBusMethodInvocation, arg_requested_properties: GLib.Variant): boolean;
        vfunc_updated(): void;
    }
    namespace Modem3gppUssd {
        interface SignalSignatures extends GdbusModem3gppUssdProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::network-notification": (pspec: GObject.ParamSpec) => void;
            "notify::network-request": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModem3gppUssdProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModem3gppUssd.ConstructorProps {}
    }
    class Modem3gppUssd extends GdbusModem3gppUssdProxy implements Gio.AsyncInitable<Modem3gppUssd>, Gio.DBusInterface, Gio.Initable, GdbusModem3gppUssd {
        static $gtype: GObject.GType<Modem3gppUssd>;
        $signals: Modem3gppUssd.SignalSignatures;
        constructor(properties?: Partial<Modem3gppUssd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Modem3gppUssd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gppUssd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Modem3gppUssd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Modem3gppUssd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Modem3gppUssd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Modem3gppUssd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        cancel(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        cancel(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        cancel_finish(res: Gio.AsyncResult): boolean;
        cancel_sync(cancellable: Gio.Cancellable | null): boolean;
        dup_network_notification(): string;
        dup_network_request(): string;
        dup_path(): string;
        get_network_notification(): string;
        get_network_request(): string;
        get_path(): string;
        get_state(): Modem3gppUssdSessionState;
        initiate(command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        initiate(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        initiate(command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        initiate_finish(res: Gio.AsyncResult): string;
        initiate_sync(command: string, cancellable: Gio.Cancellable | null): string;
        respond(response: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        respond(response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        respond(response: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        respond_finish(res: Gio.AsyncResult): string;
        respond_sync(response: string, cancellable: Gio.Cancellable | null): string;
        get network_notification(): string | null;
        set network_notification(val: string | null);
        get networkNotification(): string | null;
        set networkNotification(val: string | null);
        get network_request(): string | null;
        set network_request(val: string | null);
        get networkRequest(): string | null;
        set networkRequest(val: string | null);
        get state(): number;
        set state(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Modem3gppUssd;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_cancel(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_initiate_finish(res: Gio.AsyncResult): [boolean, string];
        call_initiate_sync(arg_command: string, cancellable: Gio.Cancellable | null): [boolean, string];
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_respond_finish(res: Gio.AsyncResult): [boolean, string];
        call_respond_sync(arg_response: string, cancellable: Gio.Cancellable | null): [boolean, string];
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
        complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
        vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
    }
    namespace ModemCdma {
        interface SignalSignatures extends GdbusModemCdmaProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::activation-state": (pspec: GObject.ParamSpec) => void;
            "notify::cdma1x-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::esn": (pspec: GObject.ParamSpec) => void;
            "notify::evdo-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::meid": (pspec: GObject.ParamSpec) => void;
            "notify::nid": (pspec: GObject.ParamSpec) => void;
            "notify::sid": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemCdmaProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemCdma.ConstructorProps {}
    }
    class ModemCdma extends GdbusModemCdmaProxy implements Gio.AsyncInitable<ModemCdma>, Gio.DBusInterface, Gio.Initable, GdbusModemCdma {
        static $gtype: GObject.GType<ModemCdma>;
        $signals: ModemCdma.SignalSignatures;
        constructor(properties?: Partial<ModemCdma.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemCdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemCdma.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemCdma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemCdma.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemCdma.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemCdma.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        activate(carrier: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        activate(carrier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate(carrier: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        activate_finish(res: Gio.AsyncResult): boolean;
        activate_manual(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        activate_manual(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        activate_manual(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        activate_manual_finish(res: Gio.AsyncResult): boolean;
        activate_manual_sync(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null): boolean;
        activate_sync(carrier: string, cancellable: Gio.Cancellable | null): boolean;
        dup_esn(): string;
        dup_meid(): string;
        dup_path(): string;
        get_activation_state(): ModemCdmaActivationState;
        get_cdma1x_registration_state(): ModemCdmaRegistrationState;
        get_esn(): string;
        get_evdo_registration_state(): ModemCdmaRegistrationState;
        get_meid(): string;
        get_nid(): number;
        get_path(): string;
        get_sid(): number;
        get activation_state(): number;
        set activation_state(val: number);
        get activationState(): number;
        set activationState(val: number);
        get cdma1x_registration_state(): number;
        set cdma1x_registration_state(val: number);
        get cdma1xRegistrationState(): number;
        set cdma1xRegistrationState(val: number);
        get esn(): string | null;
        set esn(val: string | null);
        get evdo_registration_state(): number;
        set evdo_registration_state(val: number);
        get evdoRegistrationState(): number;
        set evdoRegistrationState(val: number);
        get meid(): string | null;
        set meid(val: string | null);
        get nid(): number;
        set nid(val: number);
        get sid(): number;
        set sid(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemCdma;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_manual_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_activate_sync(arg_carrier_code: string, cancellable: Gio.Cancellable | null): boolean;
        complete_activate(invocation: Gio.DBusMethodInvocation): void;
        complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
        emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
        vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
        vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
    }
    namespace ModemCellBroadcast {
        interface SignalSignatures extends GdbusModemCellBroadcastProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::cell-broadcasts": (pspec: GObject.ParamSpec) => void;
            "notify::channels": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemCellBroadcastProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemCellBroadcast.ConstructorProps {}
    }
    class ModemCellBroadcast extends GdbusModemCellBroadcastProxy implements Gio.AsyncInitable<ModemCellBroadcast>, Gio.DBusInterface, Gio.Initable, GdbusModemCellBroadcast {
        static $gtype: GObject.GType<ModemCellBroadcast>;
        $signals: ModemCellBroadcast.SignalSignatures;
        constructor(properties?: Partial<ModemCellBroadcast.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemCellBroadcast.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemCellBroadcast.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemCellBroadcast.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemCellBroadcast.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemCellBroadcast.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemCellBroadcast.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        ["delete"](cbm: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        ["delete"](cbm: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        ["delete"](cbm: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(res: Gio.AsyncResult): boolean;
        delete_sync(cbm: string, cancellable: Gio.Cancellable | null): boolean;
        dup_path(): string;
        get_channels(channels: CellBroadcastChannels, n_storages: number): boolean;
        get_path(): string;
        list(cancellable: Gio.Cancellable | null): globalThis.Promise<Cbm[]>;
        list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Cbm[]> | void;
        list_finish(res: Gio.AsyncResult): Cbm[];
        list_sync(cancellable: Gio.Cancellable | null): Cbm[];
        peek_channels(channels: CellBroadcastChannels, n_storages: number): boolean;
        set_channels(channels: CellBroadcastChannels, n_channels: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_channels(channels: CellBroadcastChannels, n_channels: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_channels(channels: CellBroadcastChannels, n_channels: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_channels_finish(res: Gio.AsyncResult): boolean;
        set_channels_sync(channels: CellBroadcastChannels, n_channels: number, cancellable: Gio.Cancellable | null): boolean;
        get cell_broadcasts(): string[] | null;
        set cell_broadcasts(val: string[] | null);
        get cellBroadcasts(): string[] | null;
        set cellBroadcasts(val: string[] | null);
        get channels(): GLib.Variant | null;
        set channels(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemCellBroadcast;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_channels_finish(res: Gio.AsyncResult): boolean;
        call_set_channels_sync(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_channels(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_channels(invocation: Gio.DBusMethodInvocation, arg_channels: GLib.Variant): boolean;
    }
    namespace ModemFirmware {
        interface SignalSignatures extends GdbusModemFirmwareProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::update-settings": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemFirmwareProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemFirmware.ConstructorProps {}
    }
    class ModemFirmware extends GdbusModemFirmwareProxy implements Gio.AsyncInitable<ModemFirmware>, Gio.DBusInterface, Gio.Initable, GdbusModemFirmware {
        static $gtype: GObject.GType<ModemFirmware>;
        $signals: ModemFirmware.SignalSignatures;
        constructor(properties?: Partial<ModemFirmware.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemFirmware.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemFirmware.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemFirmware.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemFirmware.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemFirmware.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemFirmware.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        get_path(): string;
        get_update_settings(): FirmwareUpdateSettings;
        list(cancellable: Gio.Cancellable | null): globalThis.Promise<[FirmwareProperties | null, FirmwareProperties[] | null]>;
        list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[FirmwareProperties | null, FirmwareProperties[] | null]> | void;
        list_finish(res: Gio.AsyncResult): [boolean, FirmwareProperties | null, FirmwareProperties[] | null];
        list_sync(cancellable: Gio.Cancellable | null): [boolean, FirmwareProperties | null, FirmwareProperties[] | null];
        peek_update_settings(): FirmwareUpdateSettings;
        select(unique_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        select(unique_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        select(unique_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        select_finish(res: Gio.AsyncResult): boolean;
        select_sync(unique_id: string, cancellable: Gio.Cancellable | null): boolean;
        get update_settings(): GLib.Variant | null;
        set update_settings(val: GLib.Variant | null);
        get updateSettings(): GLib.Variant | null;
        set updateSettings(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemFirmware;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<[string, GLib.Variant | null]>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[string, GLib.Variant | null]> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string, GLib.Variant | null];
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_select_finish(res: Gio.AsyncResult): boolean;
        call_select_sync(arg_uniqueid: string, cancellable: Gio.Cancellable | null): boolean;
        complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
        complete_select(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
    }
    namespace ModemLocation {
        interface SignalSignatures extends GdbusModemLocationProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::assistance-data-servers": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::gps-refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::signals-location": (pspec: GObject.ParamSpec) => void;
            "notify::supl-server": (pspec: GObject.ParamSpec) => void;
            "notify::supported-assistance-data": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemLocationProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemLocation.ConstructorProps {}
    }
    class ModemLocation extends GdbusModemLocationProxy implements Gio.AsyncInitable<ModemLocation>, Gio.DBusInterface, Gio.Initable, GdbusModemLocation {
        static $gtype: GObject.GType<ModemLocation>;
        $signals: ModemLocation.SignalSignatures;
        constructor(properties?: Partial<ModemLocation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemLocation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemLocation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemLocation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemLocation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemLocation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemLocation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_assistance_data_servers(): string[];
        dup_path(): string;
        dup_supl_server(): string;
        get_3gpp(cancellable: Gio.Cancellable | null): globalThis.Promise<Location3gpp>;
        get_3gpp(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_3gpp(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Location3gpp> | void;
        get_3gpp_finish(res: Gio.AsyncResult): Location3gpp;
        get_3gpp_sync(cancellable: Gio.Cancellable | null): Location3gpp;
        get_assistance_data_servers(): string[];
        get_capabilities(): ModemLocationSource;
        get_cdma_bs(cancellable: Gio.Cancellable | null): globalThis.Promise<LocationCdmaBs>;
        get_cdma_bs(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_cdma_bs(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<LocationCdmaBs> | void;
        get_cdma_bs_finish(res: Gio.AsyncResult): LocationCdmaBs;
        get_cdma_bs_sync(cancellable: Gio.Cancellable | null): LocationCdmaBs;
        get_enabled(): ModemLocationSource;
        get_full(cancellable: Gio.Cancellable | null): globalThis.Promise<[Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null]>;
        get_full(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_full(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null]> | void;
        get_full_finish(res: Gio.AsyncResult): [boolean, Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null];
        get_full_sync(cancellable: Gio.Cancellable | null): [boolean, Location3gpp | null, LocationGpsNmea | null, LocationGpsRaw | null, LocationCdmaBs | null];
        get_gps_nmea(cancellable: Gio.Cancellable | null): globalThis.Promise<LocationGpsNmea>;
        get_gps_nmea(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_gps_nmea(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<LocationGpsNmea> | void;
        get_gps_nmea_finish(res: Gio.AsyncResult): LocationGpsNmea;
        get_gps_nmea_sync(cancellable: Gio.Cancellable | null): LocationGpsNmea;
        get_gps_raw(cancellable: Gio.Cancellable | null): globalThis.Promise<LocationGpsRaw>;
        get_gps_raw(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_gps_raw(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<LocationGpsRaw> | void;
        get_gps_raw_finish(res: Gio.AsyncResult): LocationGpsRaw;
        get_gps_raw_sync(cancellable: Gio.Cancellable | null): LocationGpsRaw;
        get_gps_refresh_rate(): number;
        get_path(): string;
        get_signaled_3gpp(): Location3gpp;
        get_signaled_cdma_bs(): LocationCdmaBs;
        get_signaled_gps_nmea(): LocationGpsNmea;
        get_signaled_gps_raw(): LocationGpsRaw;
        get_supl_server(): string;
        get_supported_assistance_data(): ModemLocationAssistanceDataType;
        inject_assistance_data(data: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        inject_assistance_data(data: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        inject_assistance_data(data: Uint8Array | string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
        inject_assistance_data_sync(data: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        peek_signaled_3gpp(): Location3gpp;
        peek_signaled_cdma_bs(): LocationCdmaBs;
        peek_signaled_gps_nmea(): LocationGpsNmea;
        peek_signaled_gps_raw(): LocationGpsRaw;
        set_gps_refresh_rate(rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_gps_refresh_rate(rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_gps_refresh_rate(rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
        set_gps_refresh_rate_sync(rate: number, cancellable: Gio.Cancellable | null): boolean;
        set_supl_server(supl: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_supl_server(supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_supl_server(supl: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_supl_server_finish(res: Gio.AsyncResult): boolean;
        set_supl_server_sync(supl: string, cancellable: Gio.Cancellable | null): boolean;
        setup(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        setup(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        setup(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        setup_finish(res: Gio.AsyncResult): boolean;
        setup_sync(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
        get assistance_data_servers(): string[] | null;
        set assistance_data_servers(val: string[] | null);
        get assistanceDataServers(): string[] | null;
        set assistanceDataServers(val: string[] | null);
        get capabilities(): number;
        set capabilities(val: number);
        get enabled(): number;
        set enabled(val: number);
        get gps_refresh_rate(): number;
        set gps_refresh_rate(val: number);
        get gpsRefreshRate(): number;
        set gpsRefreshRate(val: number);
        get location(): GLib.Variant | null;
        set location(val: GLib.Variant | null);
        get signalsLocation(): boolean;
        set signalsLocation(val: boolean);
        get supl_server(): string | null;
        set supl_server(val: string | null);
        get suplServer(): string | null;
        set suplServer(val: string | null);
        get supported_assistance_data(): number;
        set supported_assistance_data(val: number);
        get supportedAssistanceData(): number;
        set supportedAssistanceData(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemLocation;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_get_location(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_location(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_location_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
        call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
        call_set_gps_refresh_rate_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
        call_set_supl_server_sync(arg_supl: string, cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
        complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
        complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
        complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
        complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
        vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean;
    }
    namespace ModemMessaging {
        interface SignalSignatures extends GdbusModemMessagingProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::default-storage": (pspec: GObject.ParamSpec) => void;
            "notify::messages": (pspec: GObject.ParamSpec) => void;
            "notify::supported-storages": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemMessagingProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemMessaging.ConstructorProps {}
    }
    class ModemMessaging extends GdbusModemMessagingProxy implements Gio.AsyncInitable<ModemMessaging>, Gio.DBusInterface, Gio.Initable, GdbusModemMessaging {
        static $gtype: GObject.GType<ModemMessaging>;
        $signals: ModemMessaging.SignalSignatures;
        constructor(properties?: Partial<ModemMessaging.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemMessaging.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemMessaging.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemMessaging.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemMessaging.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemMessaging.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemMessaging.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        create(properties: SmsProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<Sms>;
        create(properties: SmsProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create(properties: SmsProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sms> | void;
        create_finish(res: Gio.AsyncResult): Sms;
        create_sync(properties: SmsProperties, cancellable: Gio.Cancellable | null): Sms;
        ["delete"](sms: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        ["delete"](sms: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        ["delete"](sms: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(res: Gio.AsyncResult): boolean;
        delete_sync(sms: string, cancellable: Gio.Cancellable | null): boolean;
        dup_path(): string;
        get_default_storage(): SmsStorage;
        get_path(): string;
        get_supported_storages(): [boolean, SmsStorage[]];
        list(cancellable: Gio.Cancellable | null): globalThis.Promise<Sms[]>;
        list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Sms[]> | void;
        list_finish(res: Gio.AsyncResult): Sms[];
        list_sync(cancellable: Gio.Cancellable | null): Sms[];
        peek_supported_storages(): [boolean, SmsStorage, number];
        set_default_storage(storage: SmsStorage, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_default_storage(storage: SmsStorage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_default_storage(storage: SmsStorage, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_default_storage_finish(res: Gio.AsyncResult): boolean;
        set_default_storage_sync(storage: SmsStorage, cancellable: Gio.Cancellable | null): boolean;
        get default_storage(): number;
        set default_storage(val: number);
        get defaultStorage(): number;
        set defaultStorage(val: number);
        get messages(): string[] | null;
        set messages(val: string[] | null);
        get supported_storages(): GLib.Variant | null;
        set supported_storages(val: GLib.Variant | null);
        get supportedStorages(): GLib.Variant | null;
        set supportedStorages(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemMessaging;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_default_storage_finish(res: Gio.AsyncResult): boolean;
        call_set_default_storage_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_default_storage(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string, arg_received: boolean): void;
        emit_deleted(arg_path: string): void;
        vfunc_added(arg_path: string, arg_received: boolean): void;
        vfunc_deleted(arg_path: string): void;
        vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_set_default_storage(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace ModemOma {
        interface SignalSignatures extends GdbusModemOmaProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::features": (pspec: GObject.ParamSpec) => void;
            "notify::pending-network-initiated-sessions": (pspec: GObject.ParamSpec) => void;
            "notify::session-state": (pspec: GObject.ParamSpec) => void;
            "notify::session-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemOmaProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemOma.ConstructorProps {}
    }
    class ModemOma extends GdbusModemOmaProxy implements Gio.AsyncInitable<ModemOma>, Gio.DBusInterface, Gio.Initable, GdbusModemOma {
        static $gtype: GObject.GType<ModemOma>;
        $signals: ModemOma.SignalSignatures;
        constructor(properties?: Partial<ModemOma.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemOma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemOma.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemOma.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemOma.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemOma.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemOma.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        accept_network_initiated_session(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        accept_network_initiated_session(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        accept_network_initiated_session(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
        accept_network_initiated_session_sync(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null): boolean;
        cancel_session(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        cancel_session(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        cancel_session_finish(res: Gio.AsyncResult): boolean;
        cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
        dup_path(): string;
        get_features(): OmaFeature;
        get_path(): string;
        get_pending_network_initiated_sessions(): [boolean, OmaPendingNetworkInitiatedSession[]];
        get_session_state(): OmaSessionState;
        get_session_type(): OmaSessionType;
        peek_pending_network_initiated_sessions(): [boolean, OmaPendingNetworkInitiatedSession[]];
        setup(features: OmaFeature, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        setup(features: OmaFeature, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        setup(features: OmaFeature, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        setup_finish(res: Gio.AsyncResult): boolean;
        setup_sync(features: OmaFeature, cancellable: Gio.Cancellable | null): boolean;
        start_client_initiated_session(session_type: OmaSessionType, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        start_client_initiated_session(session_type: OmaSessionType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        start_client_initiated_session(session_type: OmaSessionType, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
        start_client_initiated_session_sync(session_type: OmaSessionType, cancellable: Gio.Cancellable | null): boolean;
        get features(): number;
        set features(val: number);
        get pending_network_initiated_sessions(): GLib.Variant | null;
        set pending_network_initiated_sessions(val: GLib.Variant | null);
        get pendingNetworkInitiatedSessions(): GLib.Variant | null;
        set pendingNetworkInitiatedSessions(val: GLib.Variant | null);
        get session_state(): number;
        set session_state(val: number);
        get sessionState(): number;
        set sessionState(val: number);
        get session_type(): number;
        set session_type(val: number);
        get sessionType(): number;
        set sessionType(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemOma;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_cancel_session(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_session_finish(res: Gio.AsyncResult): boolean;
        call_cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_features: number, cancellable: Gio.Cancellable | null): boolean;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_start_client_initiated_session_sync(arg_session_type: number, cancellable: Gio.Cancellable | null): boolean;
        complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
        vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean;
        vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
        vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean;
        vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
    }
    namespace ModemSar {
        interface SignalSignatures extends GdbusModemSarProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::power-level": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemSarProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSar.ConstructorProps {}
    }
    class ModemSar extends GdbusModemSarProxy implements Gio.AsyncInitable<ModemSar>, Gio.DBusInterface, Gio.Initable, GdbusModemSar {
        static $gtype: GObject.GType<ModemSar>;
        $signals: ModemSar.SignalSignatures;
        constructor(properties?: Partial<ModemSar.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemSar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemSar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemSar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemSar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        enable(enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        enable(enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enable(enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        enable_finish(res: Gio.AsyncResult): boolean;
        enable_sync(enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        get_path(): string;
        get_power_level(): number;
        get_state(): boolean;
        set_power_level(level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_power_level(level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_power_level(level: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_power_level_finish(res: Gio.AsyncResult): boolean;
        set_power_level_sync(level: number, cancellable: Gio.Cancellable | null): boolean;
        get power_level(): number;
        set power_level(val: number);
        get powerLevel(): number;
        set powerLevel(val: number);
        get state(): boolean;
        set state(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemSar;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_level_finish(res: Gio.AsyncResult): boolean;
        call_set_power_level_sync(arg_level: number, cancellable: Gio.Cancellable | null): boolean;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_level(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_set_power_level(invocation: Gio.DBusMethodInvocation, arg_level: number): boolean;
    }
    namespace ModemSignal {
        interface SignalSignatures extends GdbusModemSignalProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::cdma": (pspec: GObject.ParamSpec) => void;
            "notify::error-rate-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::evdo": (pspec: GObject.ParamSpec) => void;
            "notify::gsm": (pspec: GObject.ParamSpec) => void;
            "notify::lte": (pspec: GObject.ParamSpec) => void;
            "notify::nr5g": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::rssi-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::umts": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemSignalProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSignal.ConstructorProps {}
    }
    class ModemSignal extends GdbusModemSignalProxy implements Gio.AsyncInitable<ModemSignal>, Gio.DBusInterface, Gio.Initable, GdbusModemSignal {
        static $gtype: GObject.GType<ModemSignal>;
        $signals: ModemSignal.SignalSignatures;
        constructor(properties?: Partial<ModemSignal.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemSignal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSignal.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemSignal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSignal.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemSignal.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemSignal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        get_cdma(): Signal;
        get_error_rate_threshold(): boolean;
        get_evdo(): Signal;
        get_gsm(): Signal;
        get_lte(): Signal;
        get_nr5g(): Signal;
        get_path(): string;
        get_rate(): number;
        get_rssi_threshold(): number;
        get_umts(): Signal;
        peek_cdma(): Signal;
        peek_evdo(): Signal;
        peek_gsm(): Signal;
        peek_lte(): Signal;
        peek_nr5g(): Signal;
        peek_umts(): Signal;
        setup(rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        setup(rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        setup(rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        setup_finish(res: Gio.AsyncResult): boolean;
        setup_sync(rate: number, cancellable: Gio.Cancellable | null): boolean;
        setup_thresholds(properties: SignalThresholdProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        setup_thresholds(properties: SignalThresholdProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        setup_thresholds(properties: SignalThresholdProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        setup_thresholds_finish(res: Gio.AsyncResult): boolean;
        setup_thresholds_sync(properties: SignalThresholdProperties, cancellable: Gio.Cancellable | null): boolean;
        get cdma(): GLib.Variant | null;
        set cdma(val: GLib.Variant | null);
        get error_rate_threshold(): boolean;
        set error_rate_threshold(val: boolean);
        get errorRateThreshold(): boolean;
        set errorRateThreshold(val: boolean);
        get evdo(): GLib.Variant | null;
        set evdo(val: GLib.Variant | null);
        get gsm(): GLib.Variant | null;
        set gsm(val: GLib.Variant | null);
        get lte(): GLib.Variant | null;
        set lte(val: GLib.Variant | null);
        get nr5g(): GLib.Variant | null;
        set nr5g(val: GLib.Variant | null);
        get rate(): number;
        set rate(val: number);
        get rssi_threshold(): number;
        set rssi_threshold(val: number);
        get rssiThreshold(): number;
        set rssiThreshold(val: number);
        get umts(): GLib.Variant | null;
        set umts(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemSignal;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_thresholds_finish(res: Gio.AsyncResult): boolean;
        call_setup_thresholds_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_setup_thresholds(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
        vfunc_handle_setup_thresholds(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
    }
    namespace ModemSimple {
        interface SignalSignatures extends GdbusModemSimpleProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemSimpleProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemSimple.ConstructorProps {}
    }
    class ModemSimple extends GdbusModemSimpleProxy implements Gio.AsyncInitable<ModemSimple>, Gio.DBusInterface, Gio.Initable, GdbusModemSimple {
        static $gtype: GObject.GType<ModemSimple>;
        $signals: ModemSimple.SignalSignatures;
        constructor(properties?: Partial<ModemSimple.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSimple.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemSimple.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemSimple.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        connect(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<Bearer>;
        connect(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        connect(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Bearer> | void;
        connect(...args: never[]): any;
        connect_finish(res: Gio.AsyncResult): Bearer;
        connect_sync(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null): Bearer;
        disconnect(bearer: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disconnect(bearer: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disconnect(bearer: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disconnect(...args: never[]): any;
        disconnect_finish(res: Gio.AsyncResult): boolean;
        disconnect_sync(bearer: string | null, cancellable: Gio.Cancellable | null): boolean;
        dup_path(): string;
        get_path(): string;
        get_status(cancellable: Gio.Cancellable | null): globalThis.Promise<SimpleStatus>;
        get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_status(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SimpleStatus> | void;
        get_status_finish(res: Gio.AsyncResult): SimpleStatus;
        get_status_sync(cancellable: Gio.Cancellable | null): SimpleStatus;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemSimple;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_connect_finish(res: Gio.AsyncResult): [boolean, string];
        call_connect_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_status(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_status(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_status_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
        vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
        vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace ModemTime {
        interface SignalSignatures extends GdbusModemTimeProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::network-timezone": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemTimeProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemTime.ConstructorProps {}
    }
    class ModemTime extends GdbusModemTimeProxy implements Gio.AsyncInitable<ModemTime>, Gio.DBusInterface, Gio.Initable, GdbusModemTime {
        static $gtype: GObject.GType<ModemTime>;
        $signals: ModemTime.SignalSignatures;
        constructor(properties?: Partial<ModemTime.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemTime.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemTime.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemTime.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemTime.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        get_network_time(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        get_network_time(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        get_network_time_finish(res: Gio.AsyncResult): string;
        get_network_time_sync(cancellable: Gio.Cancellable | null): string;
        get_network_timezone(): NetworkTimezone;
        get_path(): string;
        peek_network_timezone(): NetworkTimezone;
        get network_timezone(): GLib.Variant | null;
        set network_timezone(val: GLib.Variant | null);
        get networkTimezone(): GLib.Variant | null;
        set networkTimezone(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemTime;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_get_network_time(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string];
        call_get_network_time_sync(cancellable: Gio.Cancellable | null): [boolean, string];
        complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
        emit_network_time_changed(arg_time: string): void;
        vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_network_time_changed(arg_time: string): void;
    }
    namespace ModemVoice {
        interface SignalSignatures extends GdbusModemVoiceProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::calls": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-only": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusModemVoiceProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusModemVoice.ConstructorProps {}
    }
    class ModemVoice extends GdbusModemVoiceProxy implements Gio.AsyncInitable<ModemVoice>, Gio.DBusInterface, Gio.Initable, GdbusModemVoice {
        static $gtype: GObject.GType<ModemVoice>;
        $signals: ModemVoice.SignalSignatures;
        constructor(properties?: Partial<ModemVoice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ModemVoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemVoice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModemVoice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ModemVoice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModemVoice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ModemVoice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        call_waiting_query(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_waiting_query(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_waiting_query_finish(res: Gio.AsyncResult, status: boolean): boolean;
        call_waiting_query_sync(cancellable: Gio.Cancellable | null, status: boolean): boolean;
        call_waiting_setup(enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_waiting_setup(enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_waiting_setup(enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
        call_waiting_setup_sync(enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        create_call(properties: CallProperties, cancellable: Gio.Cancellable | null): globalThis.Promise<Call>;
        create_call(properties: CallProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        create_call(properties: CallProperties, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Call> | void;
        create_call_finish(res: Gio.AsyncResult): Call;
        create_call_sync(properties: CallProperties, cancellable: Gio.Cancellable | null): Call;
        delete_call(call: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        delete_call(call: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        delete_call(call: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_call_finish(res: Gio.AsyncResult): boolean;
        delete_call_sync(call: string, cancellable: Gio.Cancellable | null): boolean;
        dup_path(): string;
        get_emergency_only(): boolean;
        get_path(): string;
        hangup_all(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        hangup_all(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        hangup_all_finish(res: Gio.AsyncResult): boolean;
        hangup_all_sync(cancellable: Gio.Cancellable | null): boolean;
        hangup_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        hangup_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
        hangup_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        hold_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        hold_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        hold_and_accept_finish(res: Gio.AsyncResult): boolean;
        hold_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        list_calls(cancellable: Gio.Cancellable | null): globalThis.Promise<Call[]>;
        list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        list_calls(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Call[]> | void;
        list_calls_finish(res: Gio.AsyncResult): Call[];
        list_calls_sync(cancellable: Gio.Cancellable | null): Call[];
        transfer(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        transfer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        transfer_finish(res: Gio.AsyncResult): boolean;
        transfer_sync(cancellable: Gio.Cancellable | null): boolean;
        get calls(): string[] | null;
        set calls(val: string[] | null);
        get emergency_only(): boolean;
        set emergency_only(val: boolean);
        get emergencyOnly(): boolean;
        set emergencyOnly(val: boolean);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): ModemVoice;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_call_waiting_query(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean];
        call_call_waiting_query_sync(cancellable: Gio.Cancellable | null): [boolean, boolean];
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
        call_call_waiting_setup_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_call_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_call_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_call_finish(res: Gio.AsyncResult): boolean;
        call_delete_call_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup_all(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_all_finish(res: Gio.AsyncResult): boolean;
        call_hangup_all_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hangup_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hold_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hold_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_list_calls(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_calls(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_calls_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_transfer(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_transfer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_transfer_finish(res: Gio.AsyncResult): boolean;
        call_transfer_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
        complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_transfer(invocation: Gio.DBusMethodInvocation): void;
        emit_call_added(arg_path: string): void;
        emit_call_deleted(arg_path: string): void;
        vfunc_call_added(arg_path: string): void;
        vfunc_call_deleted(arg_path: string): void;
        vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
        vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
    }
    namespace NetworkRejection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class NetworkRejection extends GObject.Object {
        static $gtype: GObject.GType<NetworkRejection>;
        $signals: NetworkRejection.SignalSignatures;
        constructor(properties?: Partial<NetworkRejection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NetworkRejection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkRejection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkRejection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkRejection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkRejection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkRejection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_access_technology(): ModemAccessTechnology;
        get_error(): NetworkError;
        get_operator_id(): string;
        get_operator_name(): string;
    }
    namespace NetworkTimezone {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class NetworkTimezone extends GObject.Object {
        static $gtype: GObject.GType<NetworkTimezone>;
        $signals: NetworkTimezone.SignalSignatures;
        constructor(properties?: Partial<NetworkTimezone.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof NetworkTimezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkTimezone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkTimezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetworkTimezone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkTimezone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetworkTimezone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_dst_offset(): number;
        get_leap_seconds(): number;
        get_offset(): number;
    }
    namespace Nr5gRegistrationSettings {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Nr5gRegistrationSettings extends GObject.Object {
        static $gtype: GObject.GType<Nr5gRegistrationSettings>;
        $signals: Nr5gRegistrationSettings.SignalSignatures;
        constructor(properties?: Partial<Nr5gRegistrationSettings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Nr5gRegistrationSettings;
        connect<K extends keyof Nr5gRegistrationSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Nr5gRegistrationSettings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Nr5gRegistrationSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Nr5gRegistrationSettings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Nr5gRegistrationSettings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Nr5gRegistrationSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_drx_cycle(): Modem3gppDrxCycle;
        get_mico_mode(): Modem3gppMicoMode;
        set_drx_cycle(drx_cycle: Modem3gppDrxCycle): void;
        set_mico_mode(mico_mode: Modem3gppMicoMode): void;
    }
    namespace Object {
        interface SignalSignatures extends GdbusObjectProxy.SignalSignatures {
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::modem": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cdma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-cell-broadcast": (pspec: GObject.ParamSpec) => void;
            "notify::modem-firmware": (pspec: GObject.ParamSpec) => void;
            "notify::modem-location": (pspec: GObject.ParamSpec) => void;
            "notify::modem-messaging": (pspec: GObject.ParamSpec) => void;
            "notify::modem-oma": (pspec: GObject.ParamSpec) => void;
            "notify::modem-sar": (pspec: GObject.ParamSpec) => void;
            "notify::modem-signal": (pspec: GObject.ParamSpec) => void;
            "notify::modem-simple": (pspec: GObject.ParamSpec) => void;
            "notify::modem-time": (pspec: GObject.ParamSpec) => void;
            "notify::modem-voice": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-profile-manager": (pspec: GObject.ParamSpec) => void;
            "notify::modem3gpp-ussd": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusObjectProxy.ConstructorProps, Gio.DBusObject.ConstructorProps, GdbusObject.ConstructorProps {}
    }
    class Object extends GdbusObjectProxy implements Gio.DBusObject, GdbusObject {
        static $gtype: GObject.GType<Object>;
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_path(): string;
        get_modem(): Modem;
        get_modem_3gpp(): Modem3gpp;
        get_modem_3gpp_profile_manager(): Modem3gppProfileManager;
        get_modem_3gpp_ussd(): Modem3gppUssd;
        get_modem_cdma(): ModemCdma;
        get_modem_cell_broadcast(): ModemCellBroadcast;
        get_modem_firmware(): ModemFirmware;
        get_modem_location(): ModemLocation;
        get_modem_messaging(): ModemMessaging;
        get_modem_oma(): ModemOma;
        get_modem_sar(): ModemSar;
        get_modem_signal(): ModemSignal;
        get_modem_simple(): ModemSimple;
        get_modem_time(): ModemTime;
        get_modem_voice(): ModemVoice;
        get modem(): GdbusModem | null;
        set modem(val: GdbusModem | null);
        get modem_cdma(): GdbusModemCdma | null;
        set modem_cdma(val: GdbusModemCdma | null);
        get modemCdma(): GdbusModemCdma | null;
        set modemCdma(val: GdbusModemCdma | null);
        get modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        set modem_cell_broadcast(val: GdbusModemCellBroadcast | null);
        get modemCellBroadcast(): GdbusModemCellBroadcast | null;
        set modemCellBroadcast(val: GdbusModemCellBroadcast | null);
        get modem_firmware(): GdbusModemFirmware | null;
        set modem_firmware(val: GdbusModemFirmware | null);
        get modemFirmware(): GdbusModemFirmware | null;
        set modemFirmware(val: GdbusModemFirmware | null);
        get modem_location(): GdbusModemLocation | null;
        set modem_location(val: GdbusModemLocation | null);
        get modemLocation(): GdbusModemLocation | null;
        set modemLocation(val: GdbusModemLocation | null);
        get modem_messaging(): GdbusModemMessaging | null;
        set modem_messaging(val: GdbusModemMessaging | null);
        get modemMessaging(): GdbusModemMessaging | null;
        set modemMessaging(val: GdbusModemMessaging | null);
        get modem_oma(): GdbusModemOma | null;
        set modem_oma(val: GdbusModemOma | null);
        get modemOma(): GdbusModemOma | null;
        set modemOma(val: GdbusModemOma | null);
        get modem_sar(): GdbusModemSar | null;
        set modem_sar(val: GdbusModemSar | null);
        get modemSar(): GdbusModemSar | null;
        set modemSar(val: GdbusModemSar | null);
        get modem_signal(): GdbusModemSignal | null;
        set modem_signal(val: GdbusModemSignal | null);
        get modemSignal(): GdbusModemSignal | null;
        set modemSignal(val: GdbusModemSignal | null);
        get modem_simple(): GdbusModemSimple | null;
        set modem_simple(val: GdbusModemSimple | null);
        get modemSimple(): GdbusModemSimple | null;
        set modemSimple(val: GdbusModemSimple | null);
        get modem_time(): GdbusModemTime | null;
        set modem_time(val: GdbusModemTime | null);
        get modemTime(): GdbusModemTime | null;
        set modemTime(val: GdbusModemTime | null);
        get modem_voice(): GdbusModemVoice | null;
        set modem_voice(val: GdbusModemVoice | null);
        get modemVoice(): GdbusModemVoice | null;
        set modemVoice(val: GdbusModemVoice | null);
        get modem3gpp(): GdbusModem3gpp | null;
        set modem3gpp(val: GdbusModem3gpp | null);
        get modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        set modem3gpp_profile_manager(val: GdbusModem3gppProfileManager | null);
        get modem3gppProfileManager(): GdbusModem3gppProfileManager | null;
        set modem3gppProfileManager(val: GdbusModem3gppProfileManager | null);
        get modem3gpp_ussd(): GdbusModem3gppUssd | null;
        set modem3gpp_ussd(val: GdbusModem3gppUssd | null);
        get modem3gppUssd(): GdbusModem3gppUssd | null;
        set modem3gppUssd(val: GdbusModem3gppUssd | null);
        get_modem3gpp(): GdbusModem3gpp | null;
        get_modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
    }
    namespace Pco {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Pco extends GObject.Object {
        static $gtype: GObject.GType<Pco>;
        $signals: Pco.SignalSignatures;
        constructor(properties?: Partial<Pco.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Pco.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pco.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pco.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pco.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pco.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pco.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static list_free(pco_list: Pco[]): void;
        get_data(): [number, number];
        get_data(...args: never[]): any;
        get_session_id(): number;
        is_complete(): boolean;
    }
    namespace Signal {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class Signal extends GObject.Object {
        static $gtype: GObject.GType<Signal>;
        $signals: Signal.SignalSignatures;
        constructor(properties?: Partial<Signal.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Signal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signal.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Signal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signal.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Signal.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Signal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_ecio(): number;
        get_error_rate(): number;
        get_io(): number;
        get_rscp(): number;
        get_rsrp(): number;
        get_rsrq(): number;
        get_rssi(): number;
        get_sinr(): number;
        get_snr(): number;
    }
    namespace SignalThresholdProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SignalThresholdProperties extends GObject.Object {
        static $gtype: GObject.GType<SignalThresholdProperties>;
        $signals: SignalThresholdProperties.SignalSignatures;
        constructor(properties?: Partial<SignalThresholdProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SignalThresholdProperties;
        connect<K extends keyof SignalThresholdProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalThresholdProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SignalThresholdProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalThresholdProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SignalThresholdProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SignalThresholdProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_error_rate(): boolean;
        get_rssi(): number;
        set_error_rate(error_rate_threshold: boolean): void;
        set_rssi(rssi_threshold: number): void;
    }
    namespace Sim {
        interface SignalSignatures extends GdbusSimProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::eid": (pspec: GObject.ParamSpec) => void;
            "notify::emergency-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::esim-status": (pspec: GObject.ParamSpec) => void;
            "notify::gid1": (pspec: GObject.ParamSpec) => void;
            "notify::gid2": (pspec: GObject.ParamSpec) => void;
            "notify::imsi": (pspec: GObject.ParamSpec) => void;
            "notify::operator-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::preferred-networks": (pspec: GObject.ParamSpec) => void;
            "notify::removability": (pspec: GObject.ParamSpec) => void;
            "notify::sim-identifier": (pspec: GObject.ParamSpec) => void;
            "notify::sim-type": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusSimProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusSim.ConstructorProps {}
    }
    class Sim extends GdbusSimProxy implements Gio.AsyncInitable<Sim>, Gio.DBusInterface, Gio.Initable, GdbusSim {
        static $gtype: GObject.GType<Sim>;
        $signals: Sim.SignalSignatures;
        constructor(properties?: Partial<Sim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Sim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Sim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        change_pin(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        change_pin(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        change_pin(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        change_pin_finish(res: Gio.AsyncResult): boolean;
        change_pin_sync(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null): boolean;
        disable_pin(pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        disable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disable_pin(pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        disable_pin_finish(res: Gio.AsyncResult): boolean;
        disable_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
        dup_eid(): string;
        dup_emergency_numbers(): string[];
        dup_gid1(): Uint8Array;
        dup_gid2(): Uint8Array;
        dup_identifier(): string;
        dup_imsi(): string;
        dup_operator_identifier(): string;
        dup_operator_name(): string;
        dup_path(): string;
        enable_pin(pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        enable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        enable_pin(pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        enable_pin_finish(res: Gio.AsyncResult): boolean;
        enable_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
        get_active(): boolean;
        get_eid(): string;
        get_emergency_numbers(): string[];
        get_esim_status(): SimEsimStatus;
        get_gid1(): Uint8Array;
        get_gid2(): Uint8Array;
        get_identifier(): string;
        get_imsi(): string;
        get_operator_identifier(): string;
        get_operator_name(): string;
        get_path(): string;
        get_preferred_networks(): SimPreferredNetwork[];
        get_removability(): SimRemovability;
        get_sim_type(): SimType;
        send_pin(pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        send_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_pin(pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        send_pin_finish(res: Gio.AsyncResult): boolean;
        send_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
        send_puk(puk: string, pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        send_puk(puk: string, pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send_puk(puk: string, pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        send_puk_finish(res: Gio.AsyncResult): boolean;
        send_puk_sync(puk: string, pin: string, cancellable: Gio.Cancellable | null): boolean;
        set_preferred_networks(preferred_networks: SimPreferredNetwork[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_preferred_networks(preferred_networks: SimPreferredNetwork[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        set_preferred_networks(preferred_networks: SimPreferredNetwork[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        set_preferred_networks_finish(res: Gio.AsyncResult): boolean;
        set_preferred_networks_sync(preferred_networks: SimPreferredNetwork[], cancellable: Gio.Cancellable | null): boolean;
        get active(): boolean;
        set active(val: boolean);
        get eid(): string | null;
        set eid(val: string | null);
        get emergency_numbers(): string[] | null;
        set emergency_numbers(val: string[] | null);
        get emergencyNumbers(): string[] | null;
        set emergencyNumbers(val: string[] | null);
        get esim_status(): number;
        set esim_status(val: number);
        get esimStatus(): number;
        set esimStatus(val: number);
        get gid1(): GLib.Variant | null;
        set gid1(val: GLib.Variant | null);
        get gid2(): GLib.Variant | null;
        set gid2(val: GLib.Variant | null);
        get imsi(): string | null;
        set imsi(val: string | null);
        get operator_identifier(): string | null;
        set operator_identifier(val: string | null);
        get operatorIdentifier(): string | null;
        set operatorIdentifier(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get preferred_networks(): GLib.Variant | null;
        set preferred_networks(val: GLib.Variant | null);
        get preferredNetworks(): GLib.Variant | null;
        set preferredNetworks(val: GLib.Variant | null);
        get removability(): number;
        set removability(val: number);
        get sim_identifier(): string | null;
        set sim_identifier(val: string | null);
        get simIdentifier(): string | null;
        set simIdentifier(val: string | null);
        get sim_type(): number;
        set sim_type(val: number);
        get simType(): number;
        set simType(val: number);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Sim;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_change_pin_finish(res: Gio.AsyncResult): boolean;
        call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_pin_finish(res: Gio.AsyncResult): boolean;
        call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_pin_finish(res: Gio.AsyncResult): boolean;
        call_send_pin_sync(arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_puk_finish(res: Gio.AsyncResult): boolean;
        call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_preferred_networks_finish(res: Gio.AsyncResult): boolean;
        call_set_preferred_networks_sync(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
        complete_set_preferred_networks(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
        vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
        vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
        vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
        vfunc_handle_set_preferred_networks(invocation: Gio.DBusMethodInvocation, arg_preferred_networks: GLib.Variant): boolean;
    }
    namespace SimpleConnectProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SimpleConnectProperties extends GObject.Object {
        static $gtype: GObject.GType<SimpleConnectProperties>;
        $signals: SimpleConnectProperties.SignalSignatures;
        constructor(properties?: Partial<SimpleConnectProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SimpleConnectProperties;
        connect<K extends keyof SimpleConnectProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleConnectProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleConnectProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleConnectProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleConnectProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleConnectProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_allow_roaming(): boolean;
        get_allowed_auth(): BearerAllowedAuth;
        get_apn(): string;
        get_apn_type(): BearerApnType;
        get_ip_type(): BearerIpFamily;
        get_multiplex(): BearerMultiplexSupport;
        get_number(): string;
        get_operator_id(): string;
        get_password(): string;
        get_pin(): string;
        get_profile_id(): number;
        get_rm_protocol(): ModemCdmaRmProtocol;
        get_user(): string;
        set_allow_roaming(allow_roaming: boolean): void;
        set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
        set_apn(apn: string): void;
        set_apn_type(apn_type: BearerApnType): void;
        set_ip_type(ip_type: BearerIpFamily): void;
        set_multiplex(multiplex: BearerMultiplexSupport): void;
        set_number(number: string): void;
        set_operator_id(operator_id: string): void;
        set_password(password: string): void;
        set_pin(pin: string): void;
        set_profile_id(profile_id: number): void;
        set_rm_protocol(protocol: ModemCdmaRmProtocol): void;
        set_user(user: string): void;
    }
    namespace SimpleStatus {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::access-technologies": (pspec: GObject.ParamSpec) => void;
            "notify::cdma-cdma1x-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::cdma-evdo-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::cdma-nid": (pspec: GObject.ParamSpec) => void;
            "notify::cdma-sid": (pspec: GObject.ParamSpec) => void;
            "notify::current-bands": (pspec: GObject.ParamSpec) => void;
            "notify::m3gpp-operator-code": (pspec: GObject.ParamSpec) => void;
            "notify::m3gpp-operator-name": (pspec: GObject.ParamSpec) => void;
            "notify::m3gpp-registration-state": (pspec: GObject.ParamSpec) => void;
            "notify::m3gpp-subscription-state": (pspec: GObject.ParamSpec) => void;
            "notify::signal-quality": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            access_technologies: ModemAccessTechnology;
            accessTechnologies: ModemAccessTechnology;
            cdma_cdma1x_registration_state: ModemCdmaRegistrationState;
            cdmaCdma1xRegistrationState: ModemCdmaRegistrationState;
            cdma_evdo_registration_state: ModemCdmaRegistrationState;
            cdmaEvdoRegistrationState: ModemCdmaRegistrationState;
            cdma_nid: number;
            cdmaNid: number;
            cdma_sid: number;
            cdmaSid: number;
            current_bands: GLib.Variant;
            currentBands: GLib.Variant;
            m3gpp_operator_code: string;
            m3gppOperatorCode: string;
            m3gpp_operator_name: string;
            m3gppOperatorName: string;
            m3gpp_registration_state: Modem3gppRegistrationState;
            m3gppRegistrationState: Modem3gppRegistrationState;
            m3gpp_subscription_state: Modem3gppSubscriptionState;
            m3gppSubscriptionState: Modem3gppSubscriptionState;
            signal_quality: GLib.Variant;
            signalQuality: GLib.Variant;
            state: ModemState;
        }
    }
    class SimpleStatus extends GObject.Object {
        static $gtype: GObject.GType<SimpleStatus>;
        get access_technologies(): ModemAccessTechnology;
        set access_technologies(val: ModemAccessTechnology);
        get accessTechnologies(): ModemAccessTechnology;
        set accessTechnologies(val: ModemAccessTechnology);
        get cdma_cdma1x_registration_state(): ModemCdmaRegistrationState;
        set cdma_cdma1x_registration_state(val: ModemCdmaRegistrationState);
        get cdmaCdma1xRegistrationState(): ModemCdmaRegistrationState;
        set cdmaCdma1xRegistrationState(val: ModemCdmaRegistrationState);
        get cdma_evdo_registration_state(): ModemCdmaRegistrationState;
        set cdma_evdo_registration_state(val: ModemCdmaRegistrationState);
        get cdmaEvdoRegistrationState(): ModemCdmaRegistrationState;
        set cdmaEvdoRegistrationState(val: ModemCdmaRegistrationState);
        get cdma_nid(): number;
        set cdma_nid(val: number);
        get cdmaNid(): number;
        set cdmaNid(val: number);
        get cdma_sid(): number;
        set cdma_sid(val: number);
        get cdmaSid(): number;
        set cdmaSid(val: number);
        get current_bands(): GLib.Variant;
        set current_bands(val: GLib.Variant);
        get currentBands(): GLib.Variant;
        set currentBands(val: GLib.Variant);
        get m3gpp_operator_code(): string;
        set m3gpp_operator_code(val: string);
        get m3gppOperatorCode(): string;
        set m3gppOperatorCode(val: string);
        get m3gpp_operator_name(): string;
        set m3gpp_operator_name(val: string);
        get m3gppOperatorName(): string;
        set m3gppOperatorName(val: string);
        get m3gpp_registration_state(): Modem3gppRegistrationState;
        set m3gpp_registration_state(val: Modem3gppRegistrationState);
        get m3gppRegistrationState(): Modem3gppRegistrationState;
        set m3gppRegistrationState(val: Modem3gppRegistrationState);
        get m3gpp_subscription_state(): Modem3gppSubscriptionState;
        set m3gpp_subscription_state(val: Modem3gppSubscriptionState);
        get m3gppSubscriptionState(): Modem3gppSubscriptionState;
        set m3gppSubscriptionState(val: Modem3gppSubscriptionState);
        get signal_quality(): GLib.Variant;
        set signal_quality(val: GLib.Variant);
        get signalQuality(): GLib.Variant;
        set signalQuality(val: GLib.Variant);
        get state(): ModemState;
        set state(val: ModemState);
        $signals: SimpleStatus.SignalSignatures;
        constructor(properties?: Partial<SimpleStatus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SimpleStatus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleStatus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleStatus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleStatus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleStatus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleStatus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_3gpp_operator_code(): string;
        get_3gpp_operator_name(): string;
        get_3gpp_registration_state(): Modem3gppRegistrationState;
        get_3gpp_subscription_state(): Modem3gppSubscriptionState;
        get_access_technologies(): ModemAccessTechnology;
        get_cdma_cdma1x_registration_state(): ModemCdmaRegistrationState;
        get_cdma_evdo_registration_state(): ModemCdmaRegistrationState;
        get_cdma_nid(): number;
        get_cdma_sid(): number;
        get_current_bands(): [ModemBand, number];
        get_signal_quality(): [number, boolean];
        get_state(): ModemState;
    }
    namespace Sms {
        interface SignalSignatures extends GdbusSmsProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-report-request": (pspec: GObject.ParamSpec) => void;
            "notify::delivery-state": (pspec: GObject.ParamSpec) => void;
            "notify::discharge-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::message-reference": (pspec: GObject.ParamSpec) => void;
            "notify::number": (pspec: GObject.ParamSpec) => void;
            "notify::pdu-type": (pspec: GObject.ParamSpec) => void;
            "notify::service-category": (pspec: GObject.ParamSpec) => void;
            "notify::smsc": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::storage": (pspec: GObject.ParamSpec) => void;
            "notify::teleservice-id": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::validity": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GdbusSmsProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, GdbusSms.ConstructorProps {}
    }
    class Sms extends GdbusSmsProxy implements Gio.AsyncInitable<Sms>, Gio.DBusInterface, Gio.Initable, GdbusSms {
        static $gtype: GObject.GType<Sms>;
        $signals: Sms.SignalSignatures;
        constructor(properties?: Partial<Sms.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Sms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sms.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sms.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Sms.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sms.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Sms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        dup_data(): Uint8Array;
        dup_discharge_timestamp(): string;
        dup_number(): string;
        dup_path(): string;
        dup_smsc(): string;
        dup_text(): string;
        dup_timestamp(): string;
        get_class(): number;
        get_data(): Uint8Array;
        get_data(...args: never[]): any;
        get_delivery_report_request(): boolean;
        get_delivery_state(): number;
        get_discharge_timestamp(): string;
        get_message_reference(): number;
        get_number(): string;
        get_path(): string;
        get_pdu_type(): SmsPduType;
        get_service_category(): SmsCdmaServiceCategory;
        get_smsc(): string;
        get_state(): SmsState;
        get_storage(): SmsStorage;
        get_teleservice_id(): SmsCdmaTeleserviceId;
        get_text(): string;
        get_timestamp(): string;
        get_validity_relative(): number;
        get_validity_type(): SmsValidityType;
        send(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        send(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        send_finish(res: Gio.AsyncResult): boolean;
        send_sync(cancellable: Gio.Cancellable | null): boolean;
        store(storage: SmsStorage, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        store(storage: SmsStorage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        store(storage: SmsStorage, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        store_finish(res: Gio.AsyncResult): boolean;
        store_sync(storage: SmsStorage, cancellable: Gio.Cancellable | null): boolean;
        get "class"(): number;
        set "class"(val: number);
        get data(): GLib.Variant | null;
        set data(val: GLib.Variant | null);
        get delivery_report_request(): boolean;
        set delivery_report_request(val: boolean);
        get deliveryReportRequest(): boolean;
        set deliveryReportRequest(val: boolean);
        get delivery_state(): number;
        set delivery_state(val: number);
        get deliveryState(): number;
        set deliveryState(val: number);
        get discharge_timestamp(): string | null;
        set discharge_timestamp(val: string | null);
        get dischargeTimestamp(): string | null;
        set dischargeTimestamp(val: string | null);
        get message_reference(): number;
        set message_reference(val: number);
        get messageReference(): number;
        set messageReference(val: number);
        get number(): string | null;
        set number(val: string | null);
        get pdu_type(): number;
        set pdu_type(val: number);
        get pduType(): number;
        set pduType(val: number);
        get service_category(): number;
        set service_category(val: number);
        get serviceCategory(): number;
        set serviceCategory(val: number);
        get smsc(): string | null;
        set smsc(val: string | null);
        get state(): number;
        set state(val: number);
        get storage(): number;
        set storage(val: number);
        get teleservice_id(): number;
        set teleservice_id(val: number);
        get teleserviceId(): number;
        set teleserviceId(val: number);
        get text(): string | null;
        set text(val: string | null);
        get timestamp(): string | null;
        set timestamp(val: string | null);
        get validity(): GLib.Variant | null;
        set validity(val: GLib.Variant | null);
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): Sms;
        new_finish(...args: never[]): any;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        call_send(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_finish(res: Gio.AsyncResult): boolean;
        call_send_sync(cancellable: Gio.Cancellable | null): boolean;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_store_finish(res: Gio.AsyncResult): boolean;
        call_store_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_send(invocation: Gio.DBusMethodInvocation): void;
        complete_store(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
    }
    namespace SmsProperties {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class SmsProperties extends GObject.Object {
        static $gtype: GObject.GType<SmsProperties>;
        $signals: SmsProperties.SignalSignatures;
        constructor(properties?: Partial<SmsProperties.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): SmsProperties;
        connect<K extends keyof SmsProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SmsProperties.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SmsProperties.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SmsProperties.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SmsProperties.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SmsProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_class(): number;
        get_data(): [number, number];
        get_data(...args: never[]): any;
        get_data_bytearray(): Uint8Array;
        get_delivery_report_request(): boolean;
        get_number(): string;
        get_service_category(): SmsCdmaServiceCategory;
        get_smsc(): string;
        get_teleservice_id(): SmsCdmaTeleserviceId;
        get_text(): string;
        get_validity_relative(): number;
        get_validity_type(): SmsValidityType;
        peek_data_bytearray(): Uint8Array;
        set_class(message_class: number): void;
        set_data(data: number, data_length: bigint | number): void;
        set_data(...args: never[]): any;
        set_data_bytearray(data: Uint8Array | string): void;
        set_delivery_report_request(request: boolean): void;
        set_number(number: string): void;
        set_service_category(service_category: SmsCdmaServiceCategory): void;
        set_smsc(smsc: string): void;
        set_teleservice_id(teleservice_id: SmsCdmaTeleserviceId): void;
        set_text(text: string): void;
        set_validity_relative(validity: number): void;
    }
    namespace UnlockRetries {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class UnlockRetries extends GObject.Object {
        static $gtype: GObject.GType<UnlockRetries>;
        $signals: UnlockRetries.SignalSignatures;
        constructor(properties?: Partial<UnlockRetries.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof UnlockRetries.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnlockRetries.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UnlockRetries.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnlockRetries.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UnlockRetries.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnlockRetries.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        foreach(callback: UnlockRetriesForeachCb): void;
        get(lock: ModemLock): number;
    }
    type __3gppProfileClass = typeof __3gppProfile;
    abstract class __3gppProfilePrivate {
        static $gtype: GObject.GType<__3gppProfilePrivate>;
    }
    type BearerClass = typeof Bearer;
    type BearerIpConfigClass = typeof BearerIpConfig;
    abstract class BearerIpConfigPrivate {
        static $gtype: GObject.GType<BearerIpConfigPrivate>;
    }
    abstract class BearerPrivate {
        static $gtype: GObject.GType<BearerPrivate>;
    }
    type BearerPropertiesClass = typeof BearerProperties;
    abstract class BearerPropertiesPrivate {
        static $gtype: GObject.GType<BearerPropertiesPrivate>;
    }
    type BearerStatsClass = typeof BearerStats;
    abstract class BearerStatsPrivate {
        static $gtype: GObject.GType<BearerStatsPrivate>;
    }
    type CallAudioFormatClass = typeof CallAudioFormat;
    abstract class CallAudioFormatPrivate {
        static $gtype: GObject.GType<CallAudioFormatPrivate>;
    }
    type CallClass = typeof Call;
    abstract class CallPrivate {
        static $gtype: GObject.GType<CallPrivate>;
    }
    type CallPropertiesClass = typeof CallProperties;
    abstract class CallPropertiesPrivate {
        static $gtype: GObject.GType<CallPropertiesPrivate>;
    }
    type CbmClass = typeof Cbm;
    type CdmaManualActivationPropertiesClass = typeof CdmaManualActivationProperties;
    abstract class CdmaManualActivationPropertiesPrivate {
        static $gtype: GObject.GType<CdmaManualActivationPropertiesPrivate>;
    }
    class CellBroadcastChannels {
        static $gtype: GObject.GType<CellBroadcastChannels>;
        start: number;
        end: number;
        constructor(properties?: Partial<{
            start: number;
            end: number;
        }>);
    }
    type CellInfoCdmaClass = typeof CellInfoCdma;
    abstract class CellInfoCdmaPrivate {
        static $gtype: GObject.GType<CellInfoCdmaPrivate>;
    }
    type CellInfoClass = typeof CellInfo;
    type CellInfoGsmClass = typeof CellInfoGsm;
    abstract class CellInfoGsmPrivate {
        static $gtype: GObject.GType<CellInfoGsmPrivate>;
    }
    type CellInfoLteClass = typeof CellInfoLte;
    abstract class CellInfoLtePrivate {
        static $gtype: GObject.GType<CellInfoLtePrivate>;
    }
    type CellInfoNr5gClass = typeof CellInfoNr5g;
    abstract class CellInfoNr5gPrivate {
        static $gtype: GObject.GType<CellInfoNr5gPrivate>;
    }
    abstract class CellInfoPrivate {
        static $gtype: GObject.GType<CellInfoPrivate>;
    }
    type CellInfoTdscdmaClass = typeof CellInfoTdscdma;
    abstract class CellInfoTdscdmaPrivate {
        static $gtype: GObject.GType<CellInfoTdscdmaPrivate>;
    }
    type CellInfoUmtsClass = typeof CellInfoUmts;
    abstract class CellInfoUmtsPrivate {
        static $gtype: GObject.GType<CellInfoUmtsPrivate>;
    }
    type FirmwarePropertiesClass = typeof FirmwareProperties;
    abstract class FirmwarePropertiesPrivate {
        static $gtype: GObject.GType<FirmwarePropertiesPrivate>;
    }
    type FirmwareUpdateSettingsClass = typeof FirmwareUpdateSettings;
    abstract class FirmwareUpdateSettingsPrivate {
        static $gtype: GObject.GType<FirmwareUpdateSettingsPrivate>;
    }
    type GdbusBearerIface = typeof GdbusBearer;
    type GdbusBearerProxyClass = typeof GdbusBearerProxy;
    abstract class GdbusBearerProxyPrivate {
        static $gtype: GObject.GType<GdbusBearerProxyPrivate>;
    }
    type GdbusBearerSkeletonClass = typeof GdbusBearerSkeleton;
    abstract class GdbusBearerSkeletonPrivate {
        static $gtype: GObject.GType<GdbusBearerSkeletonPrivate>;
    }
    type GdbusCallIface = typeof GdbusCall;
    type GdbusCallProxyClass = typeof GdbusCallProxy;
    abstract class GdbusCallProxyPrivate {
        static $gtype: GObject.GType<GdbusCallProxyPrivate>;
    }
    type GdbusCallSkeletonClass = typeof GdbusCallSkeleton;
    abstract class GdbusCallSkeletonPrivate {
        static $gtype: GObject.GType<GdbusCallSkeletonPrivate>;
    }
    type GdbusCbmIface = typeof GdbusCbm;
    type GdbusCbmProxyClass = typeof GdbusCbmProxy;
    abstract class GdbusCbmProxyPrivate {
        static $gtype: GObject.GType<GdbusCbmProxyPrivate>;
    }
    type GdbusCbmSkeletonClass = typeof GdbusCbmSkeleton;
    abstract class GdbusCbmSkeletonPrivate {
        static $gtype: GObject.GType<GdbusCbmSkeletonPrivate>;
    }
    type GdbusModem3gppIface = typeof GdbusModem3gpp;
    type GdbusModem3gppProfileManagerIface = typeof GdbusModem3gppProfileManager;
    type GdbusModem3gppProfileManagerProxyClass = typeof GdbusModem3gppProfileManagerProxy;
    abstract class GdbusModem3gppProfileManagerProxyPrivate {
        static $gtype: GObject.GType<GdbusModem3gppProfileManagerProxyPrivate>;
    }
    type GdbusModem3gppProfileManagerSkeletonClass = typeof GdbusModem3gppProfileManagerSkeleton;
    abstract class GdbusModem3gppProfileManagerSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModem3gppProfileManagerSkeletonPrivate>;
    }
    type GdbusModem3gppProxyClass = typeof GdbusModem3gppProxy;
    abstract class GdbusModem3gppProxyPrivate {
        static $gtype: GObject.GType<GdbusModem3gppProxyPrivate>;
    }
    type GdbusModem3gppSkeletonClass = typeof GdbusModem3gppSkeleton;
    abstract class GdbusModem3gppSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModem3gppSkeletonPrivate>;
    }
    type GdbusModem3gppUssdIface = typeof GdbusModem3gppUssd;
    type GdbusModem3gppUssdProxyClass = typeof GdbusModem3gppUssdProxy;
    abstract class GdbusModem3gppUssdProxyPrivate {
        static $gtype: GObject.GType<GdbusModem3gppUssdProxyPrivate>;
    }
    type GdbusModem3gppUssdSkeletonClass = typeof GdbusModem3gppUssdSkeleton;
    abstract class GdbusModem3gppUssdSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModem3gppUssdSkeletonPrivate>;
    }
    type GdbusModemCdmaIface = typeof GdbusModemCdma;
    type GdbusModemCdmaProxyClass = typeof GdbusModemCdmaProxy;
    abstract class GdbusModemCdmaProxyPrivate {
        static $gtype: GObject.GType<GdbusModemCdmaProxyPrivate>;
    }
    type GdbusModemCdmaSkeletonClass = typeof GdbusModemCdmaSkeleton;
    abstract class GdbusModemCdmaSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemCdmaSkeletonPrivate>;
    }
    type GdbusModemCellBroadcastIface = typeof GdbusModemCellBroadcast;
    type GdbusModemCellBroadcastProxyClass = typeof GdbusModemCellBroadcastProxy;
    abstract class GdbusModemCellBroadcastProxyPrivate {
        static $gtype: GObject.GType<GdbusModemCellBroadcastProxyPrivate>;
    }
    type GdbusModemCellBroadcastSkeletonClass = typeof GdbusModemCellBroadcastSkeleton;
    abstract class GdbusModemCellBroadcastSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemCellBroadcastSkeletonPrivate>;
    }
    type GdbusModemFirmwareIface = typeof GdbusModemFirmware;
    type GdbusModemFirmwareProxyClass = typeof GdbusModemFirmwareProxy;
    abstract class GdbusModemFirmwareProxyPrivate {
        static $gtype: GObject.GType<GdbusModemFirmwareProxyPrivate>;
    }
    type GdbusModemFirmwareSkeletonClass = typeof GdbusModemFirmwareSkeleton;
    abstract class GdbusModemFirmwareSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemFirmwareSkeletonPrivate>;
    }
    type GdbusModemIface = typeof GdbusModem;
    type GdbusModemLocationIface = typeof GdbusModemLocation;
    type GdbusModemLocationProxyClass = typeof GdbusModemLocationProxy;
    abstract class GdbusModemLocationProxyPrivate {
        static $gtype: GObject.GType<GdbusModemLocationProxyPrivate>;
    }
    type GdbusModemLocationSkeletonClass = typeof GdbusModemLocationSkeleton;
    abstract class GdbusModemLocationSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemLocationSkeletonPrivate>;
    }
    type GdbusModemMessagingIface = typeof GdbusModemMessaging;
    type GdbusModemMessagingProxyClass = typeof GdbusModemMessagingProxy;
    abstract class GdbusModemMessagingProxyPrivate {
        static $gtype: GObject.GType<GdbusModemMessagingProxyPrivate>;
    }
    type GdbusModemMessagingSkeletonClass = typeof GdbusModemMessagingSkeleton;
    abstract class GdbusModemMessagingSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemMessagingSkeletonPrivate>;
    }
    type GdbusModemOmaIface = typeof GdbusModemOma;
    type GdbusModemOmaProxyClass = typeof GdbusModemOmaProxy;
    abstract class GdbusModemOmaProxyPrivate {
        static $gtype: GObject.GType<GdbusModemOmaProxyPrivate>;
    }
    type GdbusModemOmaSkeletonClass = typeof GdbusModemOmaSkeleton;
    abstract class GdbusModemOmaSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemOmaSkeletonPrivate>;
    }
    type GdbusModemProxyClass = typeof GdbusModemProxy;
    abstract class GdbusModemProxyPrivate {
        static $gtype: GObject.GType<GdbusModemProxyPrivate>;
    }
    type GdbusModemSarIface = typeof GdbusModemSar;
    type GdbusModemSarProxyClass = typeof GdbusModemSarProxy;
    abstract class GdbusModemSarProxyPrivate {
        static $gtype: GObject.GType<GdbusModemSarProxyPrivate>;
    }
    type GdbusModemSarSkeletonClass = typeof GdbusModemSarSkeleton;
    abstract class GdbusModemSarSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemSarSkeletonPrivate>;
    }
    type GdbusModemSignalIface = typeof GdbusModemSignal;
    type GdbusModemSignalProxyClass = typeof GdbusModemSignalProxy;
    abstract class GdbusModemSignalProxyPrivate {
        static $gtype: GObject.GType<GdbusModemSignalProxyPrivate>;
    }
    type GdbusModemSignalSkeletonClass = typeof GdbusModemSignalSkeleton;
    abstract class GdbusModemSignalSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemSignalSkeletonPrivate>;
    }
    type GdbusModemSimpleIface = typeof GdbusModemSimple;
    type GdbusModemSimpleProxyClass = typeof GdbusModemSimpleProxy;
    abstract class GdbusModemSimpleProxyPrivate {
        static $gtype: GObject.GType<GdbusModemSimpleProxyPrivate>;
    }
    type GdbusModemSimpleSkeletonClass = typeof GdbusModemSimpleSkeleton;
    abstract class GdbusModemSimpleSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemSimpleSkeletonPrivate>;
    }
    type GdbusModemSkeletonClass = typeof GdbusModemSkeleton;
    abstract class GdbusModemSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemSkeletonPrivate>;
    }
    type GdbusModemTimeIface = typeof GdbusModemTime;
    type GdbusModemTimeProxyClass = typeof GdbusModemTimeProxy;
    abstract class GdbusModemTimeProxyPrivate {
        static $gtype: GObject.GType<GdbusModemTimeProxyPrivate>;
    }
    type GdbusModemTimeSkeletonClass = typeof GdbusModemTimeSkeleton;
    abstract class GdbusModemTimeSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemTimeSkeletonPrivate>;
    }
    type GdbusModemVoiceIface = typeof GdbusModemVoice;
    type GdbusModemVoiceProxyClass = typeof GdbusModemVoiceProxy;
    abstract class GdbusModemVoiceProxyPrivate {
        static $gtype: GObject.GType<GdbusModemVoiceProxyPrivate>;
    }
    type GdbusModemVoiceSkeletonClass = typeof GdbusModemVoiceSkeleton;
    abstract class GdbusModemVoiceSkeletonPrivate {
        static $gtype: GObject.GType<GdbusModemVoiceSkeletonPrivate>;
    }
    type GdbusObjectIface = typeof GdbusObject;
    type GdbusObjectManagerClientClass = typeof GdbusObjectManagerClient;
    abstract class GdbusObjectManagerClientPrivate {
        static $gtype: GObject.GType<GdbusObjectManagerClientPrivate>;
    }
    type GdbusObjectProxyClass = typeof GdbusObjectProxy;
    abstract class GdbusObjectProxyPrivate {
        static $gtype: GObject.GType<GdbusObjectProxyPrivate>;
    }
    type GdbusObjectSkeletonClass = typeof GdbusObjectSkeleton;
    abstract class GdbusObjectSkeletonPrivate {
        static $gtype: GObject.GType<GdbusObjectSkeletonPrivate>;
    }
    type GdbusOrgFreedesktopModemManager1Iface = typeof GdbusOrgFreedesktopModemManager1;
    type GdbusOrgFreedesktopModemManager1ProxyClass = typeof GdbusOrgFreedesktopModemManager1Proxy;
    abstract class GdbusOrgFreedesktopModemManager1ProxyPrivate {
        static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1ProxyPrivate>;
    }
    type GdbusOrgFreedesktopModemManager1SkeletonClass = typeof GdbusOrgFreedesktopModemManager1Skeleton;
    abstract class GdbusOrgFreedesktopModemManager1SkeletonPrivate {
        static $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1SkeletonPrivate>;
    }
    type GdbusSimIface = typeof GdbusSim;
    type GdbusSimProxyClass = typeof GdbusSimProxy;
    abstract class GdbusSimProxyPrivate {
        static $gtype: GObject.GType<GdbusSimProxyPrivate>;
    }
    type GdbusSimSkeletonClass = typeof GdbusSimSkeleton;
    abstract class GdbusSimSkeletonPrivate {
        static $gtype: GObject.GType<GdbusSimSkeletonPrivate>;
    }
    type GdbusSmsIface = typeof GdbusSms;
    type GdbusSmsProxyClass = typeof GdbusSmsProxy;
    abstract class GdbusSmsProxyPrivate {
        static $gtype: GObject.GType<GdbusSmsProxyPrivate>;
    }
    type GdbusSmsSkeletonClass = typeof GdbusSmsSkeleton;
    abstract class GdbusSmsSkeletonPrivate {
        static $gtype: GObject.GType<GdbusSmsSkeletonPrivate>;
    }
    type KernelEventPropertiesClass = typeof KernelEventProperties;
    abstract class KernelEventPropertiesPrivate {
        static $gtype: GObject.GType<KernelEventPropertiesPrivate>;
    }
    type Location3gppClass = typeof Location3gpp;
    abstract class Location3gppPrivate {
        static $gtype: GObject.GType<Location3gppPrivate>;
    }
    type LocationCdmaBsClass = typeof LocationCdmaBs;
    abstract class LocationCdmaBsPrivate {
        static $gtype: GObject.GType<LocationCdmaBsPrivate>;
    }
    type LocationGpsNmeaClass = typeof LocationGpsNmea;
    abstract class LocationGpsNmeaPrivate {
        static $gtype: GObject.GType<LocationGpsNmeaPrivate>;
    }
    type LocationGpsRawClass = typeof LocationGpsRaw;
    abstract class LocationGpsRawPrivate {
        static $gtype: GObject.GType<LocationGpsRawPrivate>;
    }
    type ManagerClass = typeof Manager;
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;
    }
    type Modem3gppClass = typeof Modem3gpp;
    abstract class Modem3gppNetwork {
        static $gtype: GObject.GType<Modem3gppNetwork>;
        free(): void;
        get_access_technology(): ModemAccessTechnology;
        get_availability(): Modem3gppNetworkAvailability;
        get_operator_code(): string;
        get_operator_long(): string;
        get_operator_short(): string;
    }
    abstract class Modem3gppPrivate {
        static $gtype: GObject.GType<Modem3gppPrivate>;
    }
    type Modem3gppProfileManagerClass = typeof Modem3gppProfileManager;
    type Modem3gppUssdClass = typeof Modem3gppUssd;
    type ModemCdmaClass = typeof ModemCdma;
    type ModemCellBroadcastClass = typeof ModemCellBroadcast;
    abstract class ModemCellBroadcastPrivate {
        static $gtype: GObject.GType<ModemCellBroadcastPrivate>;
    }
    type ModemClass = typeof Modem;
    type ModemFirmwareClass = typeof ModemFirmware;
    abstract class ModemFirmwarePrivate {
        static $gtype: GObject.GType<ModemFirmwarePrivate>;
    }
    type ModemLocationClass = typeof ModemLocation;
    abstract class ModemLocationPrivate {
        static $gtype: GObject.GType<ModemLocationPrivate>;
    }
    type ModemMessagingClass = typeof ModemMessaging;
    abstract class ModemMessagingPrivate {
        static $gtype: GObject.GType<ModemMessagingPrivate>;
    }
    class ModemModeCombination {
        static $gtype: GObject.GType<ModemModeCombination>;
        allowed: ModemMode;
        preferred: ModemMode;
    }
    type ModemOmaClass = typeof ModemOma;
    abstract class ModemOmaPrivate {
        static $gtype: GObject.GType<ModemOmaPrivate>;
    }
    class ModemPortInfo {
        static $gtype: GObject.GType<ModemPortInfo>;
        name: string;
        type: ModemPortType;
        array_free(array_size: number): void;
    }
    abstract class ModemPrivate {
        static $gtype: GObject.GType<ModemPrivate>;
    }
    type ModemSarClass = typeof ModemSar;
    type ModemSignalClass = typeof ModemSignal;
    abstract class ModemSignalPrivate {
        static $gtype: GObject.GType<ModemSignalPrivate>;
    }
    type ModemSimpleClass = typeof ModemSimple;
    type ModemTimeClass = typeof ModemTime;
    abstract class ModemTimePrivate {
        static $gtype: GObject.GType<ModemTimePrivate>;
    }
    type ModemVoiceClass = typeof ModemVoice;
    abstract class ModemVoicePrivate {
        static $gtype: GObject.GType<ModemVoicePrivate>;
    }
    type NetworkRejectionClass = typeof NetworkRejection;
    abstract class NetworkRejectionPrivate {
        static $gtype: GObject.GType<NetworkRejectionPrivate>;
    }
    type NetworkTimezoneClass = typeof NetworkTimezone;
    abstract class NetworkTimezonePrivate {
        static $gtype: GObject.GType<NetworkTimezonePrivate>;
    }
    type Nr5gRegistrationSettingsClass = typeof Nr5gRegistrationSettings;
    abstract class Nr5gRegistrationSettingsPrivate {
        static $gtype: GObject.GType<Nr5gRegistrationSettingsPrivate>;
    }
    type ObjectClass = typeof Object;
    class OmaPendingNetworkInitiatedSession {
        static $gtype: GObject.GType<OmaPendingNetworkInitiatedSession>;
        session_type: OmaSessionType;
        session_id: number;
    }
    type PcoClass = typeof Pco;
    abstract class PcoPrivate {
        static $gtype: GObject.GType<PcoPrivate>;
    }
    type SignalClass = typeof Signal;
    abstract class SignalPrivate {
        static $gtype: GObject.GType<SignalPrivate>;
    }
    type SignalThresholdPropertiesClass = typeof SignalThresholdProperties;
    abstract class SignalThresholdPropertiesPrivate {
        static $gtype: GObject.GType<SignalThresholdPropertiesPrivate>;
    }
    type SimClass = typeof Sim;
    class SimPreferredNetwork {
        static $gtype: GObject.GType<SimPreferredNetwork>;
        constructor(properties?: Partial<{}>);
        static ["new"](): SimPreferredNetwork;
        free(): void;
        get_access_technology(): ModemAccessTechnology;
        get_operator_code(): string;
        set_access_technology(access_technology: ModemAccessTechnology): void;
        set_operator_code(operator_code: string): void;
    }
    type SimpleConnectPropertiesClass = typeof SimpleConnectProperties;
    abstract class SimpleConnectPropertiesPrivate {
        static $gtype: GObject.GType<SimpleConnectPropertiesPrivate>;
    }
    type SimpleStatusClass = typeof SimpleStatus;
    abstract class SimpleStatusPrivate {
        static $gtype: GObject.GType<SimpleStatusPrivate>;
    }
    type SmsClass = typeof Sms;
    type SmsPropertiesClass = typeof SmsProperties;
    abstract class SmsPropertiesPrivate {
        static $gtype: GObject.GType<SmsPropertiesPrivate>;
    }
    type UnlockRetriesClass = typeof UnlockRetries;
    abstract class UnlockRetriesPrivate {
        static $gtype: GObject.GType<UnlockRetriesPrivate>;
    }
    namespace GdbusBearer {
        interface Interface {
            vfunc_handle_connect(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bearer_type: number;
            bearerType: number;
            connected: boolean;
            connection_error: GLib.Variant | null;
            connectionError: GLib.Variant | null;
            "interface": string | null;
            ip_timeout: number;
            ipTimeout: number;
            ip4_config: GLib.Variant | null;
            ip4Config: GLib.Variant | null;
            ip6_config: GLib.Variant | null;
            ip6Config: GLib.Variant | null;
            multiplexed: boolean;
            profile_id: number;
            profileId: number;
            properties: GLib.Variant | null;
            reload_stats_supported: boolean;
            reloadStatsSupported: boolean;
            stats: GLib.Variant | null;
            suspended: boolean;
        }
    }
    export interface GdbusBearerNamespace {
        $gtype: GObject.GType<GdbusBearer>;
        prototype: GdbusBearer;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusBearer extends GObject.Object, GdbusBearer.Interface {
        get bearer_type(): number;
        set bearer_type(val: number);
        get bearerType(): number;
        set bearerType(val: number);
        get connected(): boolean;
        set connected(val: boolean);
        get connection_error(): GLib.Variant | null;
        set connection_error(val: GLib.Variant | null);
        get connectionError(): GLib.Variant | null;
        set connectionError(val: GLib.Variant | null);
        get "interface"(): string | null;
        set "interface"(val: string | null);
        get ip_timeout(): number;
        set ip_timeout(val: number);
        get ipTimeout(): number;
        set ipTimeout(val: number);
        get ip4_config(): GLib.Variant | null;
        set ip4_config(val: GLib.Variant | null);
        get ip4Config(): GLib.Variant | null;
        set ip4Config(val: GLib.Variant | null);
        get ip6_config(): GLib.Variant | null;
        set ip6_config(val: GLib.Variant | null);
        get ip6Config(): GLib.Variant | null;
        set ip6Config(val: GLib.Variant | null);
        get multiplexed(): boolean;
        set multiplexed(val: boolean);
        get profile_id(): number;
        set profile_id(val: number);
        get profileId(): number;
        set profileId(val: number);
        get properties(): GLib.Variant | null;
        set properties(val: GLib.Variant | null);
        get reload_stats_supported(): boolean;
        set reload_stats_supported(val: boolean);
        get reloadStatsSupported(): boolean;
        set reloadStatsSupported(val: boolean);
        get stats(): GLib.Variant | null;
        set stats(val: GLib.Variant | null);
        get suspended(): boolean;
        set suspended(val: boolean);
        call_connect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_connect_finish(res: Gio.AsyncResult): boolean;
        call_connect_sync(cancellable: Gio.Cancellable | null): boolean;
        call_disconnect(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_connect(invocation: Gio.DBusMethodInvocation): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusBearer: GdbusBearerNamespace & {
        new (): GdbusBearer; 
    };
    namespace GdbusCall {
        interface Interface {
            vfunc_dtmf_received(arg_dtmf: string): void;
            vfunc_handle_accept(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_deflect(invocation: Gio.DBusMethodInvocation, arg_number: string): boolean;
            vfunc_handle_hangup(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_join_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_leave_multiparty(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_send_dtmf(invocation: Gio.DBusMethodInvocation, arg_dtmf: string): boolean;
            vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_format: GLib.Variant | null;
            audioFormat: GLib.Variant | null;
            audio_port: string | null;
            audioPort: string | null;
            direction: number;
            multiparty: boolean;
            number: string | null;
            state: number;
            state_reason: number;
            stateReason: number;
        }
    }
    export interface GdbusCallNamespace {
        $gtype: GObject.GType<GdbusCall>;
        prototype: GdbusCall;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusCall extends GObject.Object, GdbusCall.Interface {
        get audio_format(): GLib.Variant | null;
        set audio_format(val: GLib.Variant | null);
        get audioFormat(): GLib.Variant | null;
        set audioFormat(val: GLib.Variant | null);
        get audio_port(): string | null;
        set audio_port(val: string | null);
        get audioPort(): string | null;
        set audioPort(val: string | null);
        get direction(): number;
        set direction(val: number);
        get multiparty(): boolean;
        set multiparty(val: boolean);
        get number(): string | null;
        set number(val: string | null);
        get state(): number;
        set state(val: number);
        get state_reason(): number;
        set state_reason(val: number);
        get stateReason(): number;
        set stateReason(val: number);
        call_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_finish(res: Gio.AsyncResult): boolean;
        call_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_deflect(arg_number: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_deflect_finish(res: Gio.AsyncResult): boolean;
        call_deflect_sync(arg_number: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_finish(res: Gio.AsyncResult): boolean;
        call_hangup_sync(cancellable: Gio.Cancellable | null): boolean;
        call_join_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_join_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_join_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_join_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_leave_multiparty(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_leave_multiparty(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_leave_multiparty_finish(res: Gio.AsyncResult): boolean;
        call_leave_multiparty_sync(cancellable: Gio.Cancellable | null): boolean;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_dtmf(arg_dtmf: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_dtmf_finish(res: Gio.AsyncResult): boolean;
        call_send_dtmf_sync(arg_dtmf: string, cancellable: Gio.Cancellable | null): boolean;
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_finish(res: Gio.AsyncResult): boolean;
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_deflect(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup(invocation: Gio.DBusMethodInvocation): void;
        complete_join_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_leave_multiparty(invocation: Gio.DBusMethodInvocation): void;
        complete_send_dtmf(invocation: Gio.DBusMethodInvocation): void;
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        emit_dtmf_received(arg_dtmf: string): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    export const GdbusCall: GdbusCallNamespace & {
        new (): GdbusCall; 
    };
    namespace GdbusCbm {
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel: number;
            message_code: number;
            messageCode: number;
            state: number;
            text: string | null;
            update: number;
        }
    }
    export interface GdbusCbmNamespace {
        $gtype: GObject.GType<GdbusCbm>;
        prototype: GdbusCbm;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusCbm extends GObject.Object {
        get channel(): number;
        set channel(val: number);
        get message_code(): number;
        set message_code(val: number);
        get messageCode(): number;
        set messageCode(val: number);
        get state(): number;
        set state(val: number);
        get text(): string | null;
        set text(val: string | null);
        get update(): number;
        set update(val: number);
    }
    export const GdbusCbm: GdbusCbmNamespace & {
        new (): GdbusCbm; 
    };
    namespace GdbusModem {
        interface Interface {
            vfunc_handle_command(invocation: Gio.DBusMethodInvocation, arg_cmd: string, arg_timeout: number): boolean;
            vfunc_handle_create_bearer(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_delete_bearer(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
            vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
            vfunc_handle_factory_reset(invocation: Gio.DBusMethodInvocation, arg_code: string): boolean;
            vfunc_handle_get_cell_info(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_list_bearers(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_reset(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set_current_bands(invocation: Gio.DBusMethodInvocation, arg_bands: GLib.Variant): boolean;
            vfunc_handle_set_current_capabilities(invocation: Gio.DBusMethodInvocation, arg_capabilities: number): boolean;
            vfunc_handle_set_current_modes(invocation: Gio.DBusMethodInvocation, arg_modes: GLib.Variant): boolean;
            vfunc_handle_set_power_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
            vfunc_handle_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation, arg_sim_slot: number): boolean;
            vfunc_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            access_technologies: number;
            accessTechnologies: number;
            bearers: string[] | null;
            carrier_configuration: string | null;
            carrierConfiguration: string | null;
            carrier_configuration_revision: string | null;
            carrierConfigurationRevision: string | null;
            current_bands: GLib.Variant | null;
            currentBands: GLib.Variant | null;
            current_capabilities: number;
            currentCapabilities: number;
            current_modes: GLib.Variant | null;
            currentModes: GLib.Variant | null;
            device: string | null;
            device_identifier: string | null;
            deviceIdentifier: string | null;
            drivers: string[] | null;
            equipment_identifier: string | null;
            equipmentIdentifier: string | null;
            hardware_revision: string | null;
            hardwareRevision: string | null;
            manufacturer: string | null;
            max_active_bearers: number;
            maxActiveBearers: number;
            max_active_multiplexed_bearers: number;
            maxActiveMultiplexedBearers: number;
            max_bearers: number;
            maxBearers: number;
            model: string | null;
            own_numbers: string[] | null;
            ownNumbers: string[] | null;
            physdev: string | null;
            plugin: string | null;
            ports: GLib.Variant | null;
            power_state: number;
            powerState: number;
            primary_port: string | null;
            primaryPort: string | null;
            primary_sim_slot: number;
            primarySimSlot: number;
            revision: string | null;
            signal_quality: GLib.Variant | null;
            signalQuality: GLib.Variant | null;
            sim: string | null;
            sim_slots: string[] | null;
            simSlots: string[] | null;
            state: number;
            state_failed_reason: number;
            stateFailedReason: number;
            supported_bands: GLib.Variant | null;
            supportedBands: GLib.Variant | null;
            supported_capabilities: GLib.Variant | null;
            supportedCapabilities: GLib.Variant | null;
            supported_ip_families: number;
            supportedIpFamilies: number;
            supported_modes: GLib.Variant | null;
            supportedModes: GLib.Variant | null;
            unlock_required: number;
            unlockRequired: number;
            unlock_retries: GLib.Variant | null;
            unlockRetries: GLib.Variant | null;
        }
    }
    export interface GdbusModemNamespace {
        $gtype: GObject.GType<GdbusModem>;
        prototype: GdbusModem;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModem extends GObject.Object, GdbusModem.Interface {
        get access_technologies(): number;
        set access_technologies(val: number);
        get accessTechnologies(): number;
        set accessTechnologies(val: number);
        get bearers(): string[] | null;
        set bearers(val: string[] | null);
        get carrier_configuration(): string | null;
        set carrier_configuration(val: string | null);
        get carrierConfiguration(): string | null;
        set carrierConfiguration(val: string | null);
        get carrier_configuration_revision(): string | null;
        set carrier_configuration_revision(val: string | null);
        get carrierConfigurationRevision(): string | null;
        set carrierConfigurationRevision(val: string | null);
        get current_bands(): GLib.Variant | null;
        set current_bands(val: GLib.Variant | null);
        get currentBands(): GLib.Variant | null;
        set currentBands(val: GLib.Variant | null);
        get current_capabilities(): number;
        set current_capabilities(val: number);
        get currentCapabilities(): number;
        set currentCapabilities(val: number);
        get current_modes(): GLib.Variant | null;
        set current_modes(val: GLib.Variant | null);
        get currentModes(): GLib.Variant | null;
        set currentModes(val: GLib.Variant | null);
        get device(): string | null;
        set device(val: string | null);
        get device_identifier(): string | null;
        set device_identifier(val: string | null);
        get deviceIdentifier(): string | null;
        set deviceIdentifier(val: string | null);
        get drivers(): string[] | null;
        set drivers(val: string[] | null);
        get equipment_identifier(): string | null;
        set equipment_identifier(val: string | null);
        get equipmentIdentifier(): string | null;
        set equipmentIdentifier(val: string | null);
        get hardware_revision(): string | null;
        set hardware_revision(val: string | null);
        get hardwareRevision(): string | null;
        set hardwareRevision(val: string | null);
        get manufacturer(): string | null;
        set manufacturer(val: string | null);
        get max_active_bearers(): number;
        set max_active_bearers(val: number);
        get maxActiveBearers(): number;
        set maxActiveBearers(val: number);
        get max_active_multiplexed_bearers(): number;
        set max_active_multiplexed_bearers(val: number);
        get maxActiveMultiplexedBearers(): number;
        set maxActiveMultiplexedBearers(val: number);
        get max_bearers(): number;
        set max_bearers(val: number);
        get maxBearers(): number;
        set maxBearers(val: number);
        get model(): string | null;
        set model(val: string | null);
        get own_numbers(): string[] | null;
        set own_numbers(val: string[] | null);
        get ownNumbers(): string[] | null;
        set ownNumbers(val: string[] | null);
        get physdev(): string | null;
        set physdev(val: string | null);
        get plugin(): string | null;
        set plugin(val: string | null);
        get ports(): GLib.Variant | null;
        set ports(val: GLib.Variant | null);
        get power_state(): number;
        set power_state(val: number);
        get powerState(): number;
        set powerState(val: number);
        get primary_port(): string | null;
        set primary_port(val: string | null);
        get primaryPort(): string | null;
        set primaryPort(val: string | null);
        get primary_sim_slot(): number;
        set primary_sim_slot(val: number);
        get primarySimSlot(): number;
        set primarySimSlot(val: number);
        get revision(): string | null;
        set revision(val: string | null);
        get signal_quality(): GLib.Variant | null;
        set signal_quality(val: GLib.Variant | null);
        get signalQuality(): GLib.Variant | null;
        set signalQuality(val: GLib.Variant | null);
        get sim(): string | null;
        set sim(val: string | null);
        get sim_slots(): string[] | null;
        set sim_slots(val: string[] | null);
        get simSlots(): string[] | null;
        set simSlots(val: string[] | null);
        get state(): number;
        set state(val: number);
        get state_failed_reason(): number;
        set state_failed_reason(val: number);
        get stateFailedReason(): number;
        set stateFailedReason(val: number);
        get supported_bands(): GLib.Variant | null;
        set supported_bands(val: GLib.Variant | null);
        get supportedBands(): GLib.Variant | null;
        set supportedBands(val: GLib.Variant | null);
        get supported_capabilities(): GLib.Variant | null;
        set supported_capabilities(val: GLib.Variant | null);
        get supportedCapabilities(): GLib.Variant | null;
        set supportedCapabilities(val: GLib.Variant | null);
        get supported_ip_families(): number;
        set supported_ip_families(val: number);
        get supportedIpFamilies(): number;
        set supportedIpFamilies(val: number);
        get supported_modes(): GLib.Variant | null;
        set supported_modes(val: GLib.Variant | null);
        get supportedModes(): GLib.Variant | null;
        set supportedModes(val: GLib.Variant | null);
        get unlock_required(): number;
        set unlock_required(val: number);
        get unlockRequired(): number;
        set unlockRequired(val: number);
        get unlock_retries(): GLib.Variant | null;
        set unlock_retries(val: GLib.Variant | null);
        get unlockRetries(): GLib.Variant | null;
        set unlockRetries(val: GLib.Variant | null);
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_command_finish(res: Gio.AsyncResult): [boolean, string];
        call_command_sync(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): [boolean, string];
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_bearer_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
        call_delete_bearer_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_factory_reset_finish(res: Gio.AsyncResult): boolean;
        call_factory_reset_sync(arg_code: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_cell_info(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_cell_info(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_cell_info_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_cell_info_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_list_bearers(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_bearers(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_bearers_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_reset(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_reset(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_reset_finish(res: Gio.AsyncResult): boolean;
        call_reset_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
        call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
        call_set_current_capabilities_sync(arg_capabilities: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
        call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_state_finish(res: Gio.AsyncResult): boolean;
        call_set_power_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_primary_sim_slot(arg_sim_slot: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_primary_sim_slot_finish(res: Gio.AsyncResult): boolean;
        call_set_primary_sim_slot_sync(arg_sim_slot: number, cancellable: Gio.Cancellable | null): boolean;
        complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
        complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_get_cell_info(invocation: Gio.DBusMethodInvocation, cell_info: GLib.Variant): void;
        complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
        complete_reset(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
        complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
        complete_set_primary_sim_slot(invocation: Gio.DBusMethodInvocation): void;
        emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
    }
    export const GdbusModem: GdbusModemNamespace & {
        new (): GdbusModem; 
    };
    namespace GdbusModem3gpp {
        interface Interface {
            vfunc_handle_disable_facility_lock(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_register(invocation: Gio.DBusMethodInvocation, arg_operator_id: string): boolean;
            vfunc_handle_scan(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set_carrier_lock(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
            vfunc_handle_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation, arg_mode: number): boolean;
            vfunc_handle_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
            vfunc_handle_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_set_packet_service_state(invocation: Gio.DBusMethodInvocation, arg_state: number): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled_facility_locks: number;
            enabledFacilityLocks: number;
            eps_ue_mode_operation: number;
            epsUeModeOperation: number;
            imei: string | null;
            initial_eps_bearer: string | null;
            initialEpsBearer: string | null;
            initial_eps_bearer_settings: GLib.Variant | null;
            initialEpsBearerSettings: GLib.Variant | null;
            network_rejection: GLib.Variant | null;
            networkRejection: GLib.Variant | null;
            nr5g_registration_settings: GLib.Variant | null;
            nr5gRegistrationSettings: GLib.Variant | null;
            operator_code: string | null;
            operatorCode: string | null;
            operator_name: string | null;
            operatorName: string | null;
            packet_service_state: number;
            packetServiceState: number;
            pco: GLib.Variant | null;
            registration_state: number;
            registrationState: number;
            subscription_state: number;
            subscriptionState: number;
        }
    }
    export interface GdbusModem3gppNamespace {
        $gtype: GObject.GType<GdbusModem3gpp>;
        prototype: GdbusModem3gpp;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModem3gpp extends GObject.Object, GdbusModem3gpp.Interface {
        get enabled_facility_locks(): number;
        set enabled_facility_locks(val: number);
        get enabledFacilityLocks(): number;
        set enabledFacilityLocks(val: number);
        get eps_ue_mode_operation(): number;
        set eps_ue_mode_operation(val: number);
        get epsUeModeOperation(): number;
        set epsUeModeOperation(val: number);
        get imei(): string | null;
        set imei(val: string | null);
        get initial_eps_bearer(): string | null;
        set initial_eps_bearer(val: string | null);
        get initialEpsBearer(): string | null;
        set initialEpsBearer(val: string | null);
        get initial_eps_bearer_settings(): GLib.Variant | null;
        set initial_eps_bearer_settings(val: GLib.Variant | null);
        get initialEpsBearerSettings(): GLib.Variant | null;
        set initialEpsBearerSettings(val: GLib.Variant | null);
        get network_rejection(): GLib.Variant | null;
        set network_rejection(val: GLib.Variant | null);
        get networkRejection(): GLib.Variant | null;
        set networkRejection(val: GLib.Variant | null);
        get nr5g_registration_settings(): GLib.Variant | null;
        set nr5g_registration_settings(val: GLib.Variant | null);
        get nr5gRegistrationSettings(): GLib.Variant | null;
        set nr5gRegistrationSettings(val: GLib.Variant | null);
        get operator_code(): string | null;
        set operator_code(val: string | null);
        get operatorCode(): string | null;
        set operatorCode(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get packet_service_state(): number;
        set packet_service_state(val: number);
        get packetServiceState(): number;
        set packetServiceState(val: number);
        get pco(): GLib.Variant | null;
        set pco(val: GLib.Variant | null);
        get registration_state(): number;
        set registration_state(val: number);
        get registrationState(): number;
        set registrationState(val: number);
        get subscription_state(): number;
        set subscription_state(val: number);
        get subscriptionState(): number;
        set subscriptionState(val: number);
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disable_facility_lock(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disable_facility_lock_finish(res: Gio.AsyncResult): boolean;
        call_disable_facility_lock_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_register_finish(res: Gio.AsyncResult): boolean;
        call_register_sync(arg_operator_id: string, cancellable: Gio.Cancellable | null): boolean;
        call_scan(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_scan_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_carrier_lock(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_carrier_lock_finish(res: Gio.AsyncResult): boolean;
        call_set_carrier_lock_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
        call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_nr5g_registration_settings(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_nr5g_registration_settings_finish(res: Gio.AsyncResult): boolean;
        call_set_nr5g_registration_settings_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_packet_service_state(arg_state: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_packet_service_state_finish(res: Gio.AsyncResult): boolean;
        call_set_packet_service_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
        complete_disable_facility_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_register(invocation: Gio.DBusMethodInvocation): void;
        complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
        complete_set_carrier_lock(invocation: Gio.DBusMethodInvocation): void;
        complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
        complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_nr5g_registration_settings(invocation: Gio.DBusMethodInvocation): void;
        complete_set_packet_service_state(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusModem3gpp: GdbusModem3gppNamespace & {
        new (): GdbusModem3gpp; 
    };
    namespace GdbusModem3gppProfileManager {
        interface Interface {
            vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set(invocation: Gio.DBusMethodInvocation, arg_requested_properties: GLib.Variant): boolean;
            vfunc_updated(): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            index_field: string | null;
            indexField: string | null;
        }
    }
    export interface GdbusModem3gppProfileManagerNamespace {
        $gtype: GObject.GType<GdbusModem3gppProfileManager>;
        prototype: GdbusModem3gppProfileManager;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModem3gppProfileManager extends GObject.Object, GdbusModem3gppProfileManager.Interface {
        get index_field(): string | null;
        set index_field(val: string | null);
        get indexField(): string | null;
        set indexField(val: string | null);
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_set_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_set_sync(arg_requested_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, profiles: GLib.Variant): void;
        complete_set(invocation: Gio.DBusMethodInvocation, stored_properties: GLib.Variant): void;
        emit_updated(): void;
    }
    export const GdbusModem3gppProfileManager: GdbusModem3gppProfileManagerNamespace & {
        new (): GdbusModem3gppProfileManager; 
    };
    namespace GdbusModem3gppUssd {
        interface Interface {
            vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_initiate(invocation: Gio.DBusMethodInvocation, arg_command: string): boolean;
            vfunc_handle_respond(invocation: Gio.DBusMethodInvocation, arg_response: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            network_notification: string | null;
            networkNotification: string | null;
            network_request: string | null;
            networkRequest: string | null;
            state: number;
        }
    }
    export interface GdbusModem3gppUssdNamespace {
        $gtype: GObject.GType<GdbusModem3gppUssd>;
        prototype: GdbusModem3gppUssd;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModem3gppUssd extends GObject.Object, GdbusModem3gppUssd.Interface {
        get network_notification(): string | null;
        set network_notification(val: string | null);
        get networkNotification(): string | null;
        set networkNotification(val: string | null);
        get network_request(): string | null;
        set network_request(val: string | null);
        get networkRequest(): string | null;
        set networkRequest(val: string | null);
        get state(): number;
        set state(val: number);
        call_cancel(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_initiate_finish(res: Gio.AsyncResult): [boolean, string];
        call_initiate_sync(arg_command: string, cancellable: Gio.Cancellable | null): [boolean, string];
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_respond_finish(res: Gio.AsyncResult): [boolean, string];
        call_respond_sync(arg_response: string, cancellable: Gio.Cancellable | null): [boolean, string];
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
        complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
    }
    export const GdbusModem3gppUssd: GdbusModem3gppUssdNamespace & {
        new (): GdbusModem3gppUssd; 
    };
    namespace GdbusModemCdma {
        interface Interface {
            vfunc_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
            vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_carrier_code: string): boolean;
            vfunc_handle_activate_manual(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            activation_state: number;
            activationState: number;
            cdma1x_registration_state: number;
            cdma1xRegistrationState: number;
            esn: string | null;
            evdo_registration_state: number;
            evdoRegistrationState: number;
            meid: string | null;
            nid: number;
            sid: number;
        }
    }
    export interface GdbusModemCdmaNamespace {
        $gtype: GObject.GType<GdbusModemCdma>;
        prototype: GdbusModemCdma;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemCdma extends GObject.Object, GdbusModemCdma.Interface {
        get activation_state(): number;
        set activation_state(val: number);
        get activationState(): number;
        set activationState(val: number);
        get cdma1x_registration_state(): number;
        set cdma1x_registration_state(val: number);
        get cdma1xRegistrationState(): number;
        set cdma1xRegistrationState(val: number);
        get esn(): string | null;
        set esn(val: string | null);
        get evdo_registration_state(): number;
        set evdo_registration_state(val: number);
        get evdoRegistrationState(): number;
        set evdoRegistrationState(val: number);
        get meid(): string | null;
        set meid(val: string | null);
        get nid(): number;
        set nid(val: number);
        get sid(): number;
        set sid(val: number);
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_activate_manual_finish(res: Gio.AsyncResult): boolean;
        call_activate_manual_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_activate_sync(arg_carrier_code: string, cancellable: Gio.Cancellable | null): boolean;
        complete_activate(invocation: Gio.DBusMethodInvocation): void;
        complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
        emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
    }
    export const GdbusModemCdma: GdbusModemCdmaNamespace & {
        new (): GdbusModemCdma; 
    };
    namespace GdbusModemCellBroadcast {
        interface Interface {
            vfunc_added(arg_path: string): void;
            vfunc_deleted(arg_path: string): void;
            vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
            vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set_channels(invocation: Gio.DBusMethodInvocation, arg_channels: GLib.Variant): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cell_broadcasts: string[] | null;
            cellBroadcasts: string[] | null;
            channels: GLib.Variant | null;
        }
    }
    export interface GdbusModemCellBroadcastNamespace {
        $gtype: GObject.GType<GdbusModemCellBroadcast>;
        prototype: GdbusModemCellBroadcast;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemCellBroadcast extends GObject.Object, GdbusModemCellBroadcast.Interface {
        get cell_broadcasts(): string[] | null;
        set cell_broadcasts(val: string[] | null);
        get cellBroadcasts(): string[] | null;
        set cellBroadcasts(val: string[] | null);
        get channels(): GLib.Variant | null;
        set channels(val: GLib.Variant | null);
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_channels(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_channels_finish(res: Gio.AsyncResult): boolean;
        call_set_channels_sync(arg_channels: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_channels(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string): void;
        emit_deleted(arg_path: string): void;
    }
    export const GdbusModemCellBroadcast: GdbusModemCellBroadcastNamespace & {
        new (): GdbusModemCellBroadcast; 
    };
    namespace GdbusModemFirmware {
        interface Interface {
            vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_select(invocation: Gio.DBusMethodInvocation, arg_uniqueid: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            update_settings: GLib.Variant | null;
            updateSettings: GLib.Variant | null;
        }
    }
    export interface GdbusModemFirmwareNamespace {
        $gtype: GObject.GType<GdbusModemFirmware>;
        prototype: GdbusModemFirmware;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemFirmware extends GObject.Object, GdbusModemFirmware.Interface {
        get update_settings(): GLib.Variant | null;
        set update_settings(val: GLib.Variant | null);
        get updateSettings(): GLib.Variant | null;
        set updateSettings(val: GLib.Variant | null);
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<[string, GLib.Variant | null]>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[string, GLib.Variant | null]> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string, GLib.Variant | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string, GLib.Variant | null];
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_select_finish(res: Gio.AsyncResult): boolean;
        call_select_sync(arg_uniqueid: string, cancellable: Gio.Cancellable | null): boolean;
        complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
        complete_select(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusModemFirmware: GdbusModemFirmwareNamespace & {
        new (): GdbusModemFirmware; 
    };
    namespace GdbusModemLocation {
        interface Interface {
            vfunc_handle_get_location(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_inject_assistance_data(invocation: Gio.DBusMethodInvocation, arg_data: GLib.Variant): boolean;
            vfunc_handle_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
            vfunc_handle_set_supl_server(invocation: Gio.DBusMethodInvocation, arg_supl: string): boolean;
            vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_sources: number, arg_signal_location: boolean): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            assistance_data_servers: string[] | null;
            assistanceDataServers: string[] | null;
            capabilities: number;
            enabled: number;
            gps_refresh_rate: number;
            gpsRefreshRate: number;
            location: GLib.Variant | null;
            signals_location: boolean;
            signalsLocation: boolean;
            supl_server: string | null;
            suplServer: string | null;
            supported_assistance_data: number;
            supportedAssistanceData: number;
        }
    }
    export interface GdbusModemLocationNamespace {
        $gtype: GObject.GType<GdbusModemLocation>;
        prototype: GdbusModemLocation;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemLocation extends GObject.Object, GdbusModemLocation.Interface {
        get assistance_data_servers(): string[] | null;
        set assistance_data_servers(val: string[] | null);
        get assistanceDataServers(): string[] | null;
        set assistanceDataServers(val: string[] | null);
        get capabilities(): number;
        set capabilities(val: number);
        get enabled(): number;
        set enabled(val: number);
        get gps_refresh_rate(): number;
        set gps_refresh_rate(val: number);
        get gpsRefreshRate(): number;
        set gpsRefreshRate(val: number);
        get location(): GLib.Variant | null;
        set location(val: GLib.Variant | null);
        get signals_location(): boolean;
        set signals_location(val: boolean);
        get signalsLocation(): boolean;
        set signalsLocation(val: boolean);
        get supl_server(): string | null;
        set supl_server(val: string | null);
        get suplServer(): string | null;
        set suplServer(val: string | null);
        get supported_assistance_data(): number;
        set supported_assistance_data(val: number);
        get supportedAssistanceData(): number;
        set supportedAssistanceData(val: number);
        call_get_location(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_location(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_location_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
        call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
        call_set_gps_refresh_rate_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
        call_set_supl_server_sync(arg_supl: string, cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
        complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
        complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
        complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
        complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusModemLocation: GdbusModemLocationNamespace & {
        new (): GdbusModemLocation; 
    };
    namespace GdbusModemMessaging {
        interface Interface {
            vfunc_added(arg_path: string, arg_received: boolean): void;
            vfunc_deleted(arg_path: string): void;
            vfunc_handle_create(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
            vfunc_handle_list(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set_default_storage(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_storage: number;
            defaultStorage: number;
            messages: string[] | null;
            supported_storages: GLib.Variant | null;
            supportedStorages: GLib.Variant | null;
        }
    }
    export interface GdbusModemMessagingNamespace {
        $gtype: GObject.GType<GdbusModemMessaging>;
        prototype: GdbusModemMessaging;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemMessaging extends GObject.Object, GdbusModemMessaging.Interface {
        get default_storage(): number;
        set default_storage(val: number);
        get defaultStorage(): number;
        set defaultStorage(val: number);
        get messages(): string[] | null;
        set messages(val: string[] | null);
        get supported_storages(): GLib.Variant | null;
        set supported_storages(val: GLib.Variant | null);
        get supportedStorages(): GLib.Variant | null;
        set supportedStorages(val: GLib.Variant | null);
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_finish(res: Gio.AsyncResult): boolean;
        call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_list(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_default_storage(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_default_storage_finish(res: Gio.AsyncResult): boolean;
        call_set_default_storage_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_set_default_storage(invocation: Gio.DBusMethodInvocation): void;
        emit_added(arg_path: string, arg_received: boolean): void;
        emit_deleted(arg_path: string): void;
    }
    export const GdbusModemMessaging: GdbusModemMessagingNamespace & {
        new (): GdbusModemMessaging; 
    };
    namespace GdbusModemOma {
        interface Interface {
            vfunc_handle_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_id: number, arg_accept: boolean): boolean;
            vfunc_handle_cancel_session(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_features: number): boolean;
            vfunc_handle_start_client_initiated_session(invocation: Gio.DBusMethodInvocation, arg_session_type: number): boolean;
            vfunc_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            features: number;
            pending_network_initiated_sessions: GLib.Variant | null;
            pendingNetworkInitiatedSessions: GLib.Variant | null;
            session_state: number;
            sessionState: number;
            session_type: number;
            sessionType: number;
        }
    }
    export interface GdbusModemOmaNamespace {
        $gtype: GObject.GType<GdbusModemOma>;
        prototype: GdbusModemOma;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemOma extends GObject.Object, GdbusModemOma.Interface {
        get features(): number;
        set features(val: number);
        get pending_network_initiated_sessions(): GLib.Variant | null;
        set pending_network_initiated_sessions(val: GLib.Variant | null);
        get pendingNetworkInitiatedSessions(): GLib.Variant | null;
        set pendingNetworkInitiatedSessions(val: GLib.Variant | null);
        get session_state(): number;
        set session_state(val: number);
        get sessionState(): number;
        set sessionState(val: number);
        get session_type(): number;
        set session_type(val: number);
        get sessionType(): number;
        set sessionType(val: number);
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_cancel_session(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel_session(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_cancel_session_finish(res: Gio.AsyncResult): boolean;
        call_cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_features: number, cancellable: Gio.Cancellable | null): boolean;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
        call_start_client_initiated_session_sync(arg_session_type: number, cancellable: Gio.Cancellable | null): boolean;
        complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
        emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
    }
    export const GdbusModemOma: GdbusModemOmaNamespace & {
        new (): GdbusModemOma; 
    };
    namespace GdbusModemSar {
        interface Interface {
            vfunc_handle_enable(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
            vfunc_handle_set_power_level(invocation: Gio.DBusMethodInvocation, arg_level: number): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            power_level: number;
            powerLevel: number;
            state: boolean;
        }
    }
    export interface GdbusModemSarNamespace {
        $gtype: GObject.GType<GdbusModemSar>;
        prototype: GdbusModemSar;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemSar extends GObject.Object, GdbusModemSar.Interface {
        get power_level(): number;
        set power_level(val: number);
        get powerLevel(): number;
        set powerLevel(val: number);
        get state(): boolean;
        set state(val: boolean);
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_finish(res: Gio.AsyncResult): boolean;
        call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_power_level(arg_level: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_power_level_finish(res: Gio.AsyncResult): boolean;
        call_set_power_level_sync(arg_level: number, cancellable: Gio.Cancellable | null): boolean;
        complete_enable(invocation: Gio.DBusMethodInvocation): void;
        complete_set_power_level(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusModemSar: GdbusModemSarNamespace & {
        new (): GdbusModemSar; 
    };
    namespace GdbusModemSignal {
        interface Interface {
            vfunc_handle_setup(invocation: Gio.DBusMethodInvocation, arg_rate: number): boolean;
            vfunc_handle_setup_thresholds(invocation: Gio.DBusMethodInvocation, arg_settings: GLib.Variant): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cdma: GLib.Variant | null;
            error_rate_threshold: boolean;
            errorRateThreshold: boolean;
            evdo: GLib.Variant | null;
            gsm: GLib.Variant | null;
            lte: GLib.Variant | null;
            nr5g: GLib.Variant | null;
            rate: number;
            rssi_threshold: number;
            rssiThreshold: number;
            umts: GLib.Variant | null;
        }
    }
    export interface GdbusModemSignalNamespace {
        $gtype: GObject.GType<GdbusModemSignal>;
        prototype: GdbusModemSignal;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemSignal extends GObject.Object, GdbusModemSignal.Interface {
        get cdma(): GLib.Variant | null;
        set cdma(val: GLib.Variant | null);
        get error_rate_threshold(): boolean;
        set error_rate_threshold(val: boolean);
        get errorRateThreshold(): boolean;
        set errorRateThreshold(val: boolean);
        get evdo(): GLib.Variant | null;
        set evdo(val: GLib.Variant | null);
        get gsm(): GLib.Variant | null;
        set gsm(val: GLib.Variant | null);
        get lte(): GLib.Variant | null;
        set lte(val: GLib.Variant | null);
        get nr5g(): GLib.Variant | null;
        set nr5g(val: GLib.Variant | null);
        get rate(): number;
        set rate(val: number);
        get rssi_threshold(): number;
        set rssi_threshold(val: number);
        get rssiThreshold(): number;
        set rssiThreshold(val: number);
        get umts(): GLib.Variant | null;
        set umts(val: GLib.Variant | null);
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_finish(res: Gio.AsyncResult): boolean;
        call_setup_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_setup_thresholds(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_setup_thresholds_finish(res: Gio.AsyncResult): boolean;
        call_setup_thresholds_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_setup_thresholds(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusModemSignal: GdbusModemSignalNamespace & {
        new (): GdbusModemSignal; 
    };
    namespace GdbusModemSimple {
        interface Interface {
            vfunc_handle_connect(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_bearer: string): boolean;
            vfunc_handle_get_status(invocation: Gio.DBusMethodInvocation): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface GdbusModemSimpleNamespace {
        $gtype: GObject.GType<GdbusModemSimple>;
        prototype: GdbusModemSimple;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemSimple extends GObject.Object, GdbusModemSimple.Interface {
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_connect_finish(res: Gio.AsyncResult): [boolean, string];
        call_connect_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
        call_get_status(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_status(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;
        call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        call_get_status_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
    }
    export const GdbusModemSimple: GdbusModemSimpleNamespace & {
        new (): GdbusModemSimple; 
    };
    namespace GdbusModemTime {
        interface Interface {
            vfunc_handle_get_network_time(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_network_time_changed(arg_time: string): void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            network_timezone: GLib.Variant | null;
            networkTimezone: GLib.Variant | null;
        }
    }
    export interface GdbusModemTimeNamespace {
        $gtype: GObject.GType<GdbusModemTime>;
        prototype: GdbusModemTime;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemTime extends GObject.Object, GdbusModemTime.Interface {
        get network_timezone(): GLib.Variant | null;
        set network_timezone(val: GLib.Variant | null);
        get networkTimezone(): GLib.Variant | null;
        set networkTimezone(val: GLib.Variant | null);
        call_get_network_time(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_get_network_time(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string];
        call_get_network_time_sync(cancellable: Gio.Cancellable | null): [boolean, string];
        complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
        emit_network_time_changed(arg_time: string): void;
    }
    export const GdbusModemTime: GdbusModemTimeNamespace & {
        new (): GdbusModemTime; 
    };
    namespace GdbusModemVoice {
        interface Interface {
            vfunc_call_added(arg_path: string): void;
            vfunc_call_deleted(arg_path: string): void;
            vfunc_handle_call_waiting_query(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_call_waiting_setup(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
            vfunc_handle_create_call(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_delete_call(invocation: Gio.DBusMethodInvocation, arg_path: string): boolean;
            vfunc_handle_hangup_all(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_hangup_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_hold_and_accept(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_list_calls(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_transfer(invocation: Gio.DBusMethodInvocation): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            calls: string[] | null;
            emergency_only: boolean;
            emergencyOnly: boolean;
        }
    }
    export interface GdbusModemVoiceNamespace {
        $gtype: GObject.GType<GdbusModemVoice>;
        prototype: GdbusModemVoice;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusModemVoice extends GObject.Object, GdbusModemVoice.Interface {
        get calls(): string[] | null;
        set calls(val: string[] | null);
        get emergency_only(): boolean;
        set emergency_only(val: boolean);
        get emergencyOnly(): boolean;
        set emergencyOnly(val: boolean);
        call_call_waiting_query(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_query(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_query_finish(res: Gio.AsyncResult): [boolean, boolean];
        call_call_waiting_query_sync(cancellable: Gio.Cancellable | null): [boolean, boolean];
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_call_waiting_setup(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_call_waiting_setup_finish(res: Gio.AsyncResult): boolean;
        call_call_waiting_setup_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        call_create_call_finish(res: Gio.AsyncResult): [boolean, string];
        call_create_call_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string];
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_delete_call_finish(res: Gio.AsyncResult): boolean;
        call_delete_call_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
        call_hangup_all(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_all(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_all_finish(res: Gio.AsyncResult): boolean;
        call_hangup_all_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hangup_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hangup_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hangup_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_hold_and_accept(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_hold_and_accept(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_hold_and_accept_finish(res: Gio.AsyncResult): boolean;
        call_hold_and_accept_sync(cancellable: Gio.Cancellable | null): boolean;
        call_list_calls(cancellable: Gio.Cancellable | null): globalThis.Promise<string[] | null>;
        call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_list_calls(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[] | null> | void;
        call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
        call_list_calls_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
        call_transfer(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_transfer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_transfer(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_transfer_finish(res: Gio.AsyncResult): boolean;
        call_transfer_sync(cancellable: Gio.Cancellable | null): boolean;
        complete_call_waiting_query(invocation: Gio.DBusMethodInvocation, status: boolean): void;
        complete_call_waiting_setup(invocation: Gio.DBusMethodInvocation): void;
        complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
        complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_all(invocation: Gio.DBusMethodInvocation): void;
        complete_hangup_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_hold_and_accept(invocation: Gio.DBusMethodInvocation): void;
        complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
        complete_transfer(invocation: Gio.DBusMethodInvocation): void;
        emit_call_added(arg_path: string): void;
        emit_call_deleted(arg_path: string): void;
    }
    export const GdbusModemVoice: GdbusModemVoiceNamespace & {
        new (): GdbusModemVoice; 
    };
    namespace GdbusObject {
        interface ConstructorProps extends Gio.DBusObject.ConstructorProps {
            modem: GdbusModem | null;
            modem_cdma: GdbusModemCdma | null;
            modemCdma: GdbusModemCdma | null;
            modem_cell_broadcast: GdbusModemCellBroadcast | null;
            modemCellBroadcast: GdbusModemCellBroadcast | null;
            modem_firmware: GdbusModemFirmware | null;
            modemFirmware: GdbusModemFirmware | null;
            modem_location: GdbusModemLocation | null;
            modemLocation: GdbusModemLocation | null;
            modem_messaging: GdbusModemMessaging | null;
            modemMessaging: GdbusModemMessaging | null;
            modem_oma: GdbusModemOma | null;
            modemOma: GdbusModemOma | null;
            modem_sar: GdbusModemSar | null;
            modemSar: GdbusModemSar | null;
            modem_signal: GdbusModemSignal | null;
            modemSignal: GdbusModemSignal | null;
            modem_simple: GdbusModemSimple | null;
            modemSimple: GdbusModemSimple | null;
            modem_time: GdbusModemTime | null;
            modemTime: GdbusModemTime | null;
            modem_voice: GdbusModemVoice | null;
            modemVoice: GdbusModemVoice | null;
            modem3gpp: GdbusModem3gpp | null;
            modem3gpp_profile_manager: GdbusModem3gppProfileManager | null;
            modem3gppProfileManager: GdbusModem3gppProfileManager | null;
            modem3gpp_ussd: GdbusModem3gppUssd | null;
            modem3gppUssd: GdbusModem3gppUssd | null;
        }
    }
    export interface GdbusObjectNamespace {
        $gtype: GObject.GType<GdbusObject>;
        prototype: GdbusObject;
    }
    interface GdbusObject extends Gio.DBusObject {
        get modem(): GdbusModem | null;
        set modem(val: GdbusModem | null);
        get modem_cdma(): GdbusModemCdma | null;
        set modem_cdma(val: GdbusModemCdma | null);
        get modemCdma(): GdbusModemCdma | null;
        set modemCdma(val: GdbusModemCdma | null);
        get modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        set modem_cell_broadcast(val: GdbusModemCellBroadcast | null);
        get modemCellBroadcast(): GdbusModemCellBroadcast | null;
        set modemCellBroadcast(val: GdbusModemCellBroadcast | null);
        get modem_firmware(): GdbusModemFirmware | null;
        set modem_firmware(val: GdbusModemFirmware | null);
        get modemFirmware(): GdbusModemFirmware | null;
        set modemFirmware(val: GdbusModemFirmware | null);
        get modem_location(): GdbusModemLocation | null;
        set modem_location(val: GdbusModemLocation | null);
        get modemLocation(): GdbusModemLocation | null;
        set modemLocation(val: GdbusModemLocation | null);
        get modem_messaging(): GdbusModemMessaging | null;
        set modem_messaging(val: GdbusModemMessaging | null);
        get modemMessaging(): GdbusModemMessaging | null;
        set modemMessaging(val: GdbusModemMessaging | null);
        get modem_oma(): GdbusModemOma | null;
        set modem_oma(val: GdbusModemOma | null);
        get modemOma(): GdbusModemOma | null;
        set modemOma(val: GdbusModemOma | null);
        get modem_sar(): GdbusModemSar | null;
        set modem_sar(val: GdbusModemSar | null);
        get modemSar(): GdbusModemSar | null;
        set modemSar(val: GdbusModemSar | null);
        get modem_signal(): GdbusModemSignal | null;
        set modem_signal(val: GdbusModemSignal | null);
        get modemSignal(): GdbusModemSignal | null;
        set modemSignal(val: GdbusModemSignal | null);
        get modem_simple(): GdbusModemSimple | null;
        set modem_simple(val: GdbusModemSimple | null);
        get modemSimple(): GdbusModemSimple | null;
        set modemSimple(val: GdbusModemSimple | null);
        get modem_time(): GdbusModemTime | null;
        set modem_time(val: GdbusModemTime | null);
        get modemTime(): GdbusModemTime | null;
        set modemTime(val: GdbusModemTime | null);
        get modem_voice(): GdbusModemVoice | null;
        set modem_voice(val: GdbusModemVoice | null);
        get modemVoice(): GdbusModemVoice | null;
        set modemVoice(val: GdbusModemVoice | null);
        get modem3gpp(): GdbusModem3gpp | null;
        set modem3gpp(val: GdbusModem3gpp | null);
        get modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        set modem3gpp_profile_manager(val: GdbusModem3gppProfileManager | null);
        get modem3gppProfileManager(): GdbusModem3gppProfileManager | null;
        set modem3gppProfileManager(val: GdbusModem3gppProfileManager | null);
        get modem3gpp_ussd(): GdbusModem3gppUssd | null;
        set modem3gpp_ussd(val: GdbusModem3gppUssd | null);
        get modem3gppUssd(): GdbusModem3gppUssd | null;
        set modem3gppUssd(val: GdbusModem3gppUssd | null);
        get_modem(): GdbusModem | null;
        get_modem3gpp(): GdbusModem3gpp | null;
        get_modem3gpp_profile_manager(): GdbusModem3gppProfileManager | null;
        get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
        get_modem_cdma(): GdbusModemCdma | null;
        get_modem_cell_broadcast(): GdbusModemCellBroadcast | null;
        get_modem_firmware(): GdbusModemFirmware | null;
        get_modem_location(): GdbusModemLocation | null;
        get_modem_messaging(): GdbusModemMessaging | null;
        get_modem_oma(): GdbusModemOma | null;
        get_modem_sar(): GdbusModemSar | null;
        get_modem_signal(): GdbusModemSignal | null;
        get_modem_simple(): GdbusModemSimple | null;
        get_modem_time(): GdbusModemTime | null;
        get_modem_voice(): GdbusModemVoice | null;
    }
    export const GdbusObject: GdbusObjectNamespace & {
        new (): GdbusObject; 
    };
    namespace GdbusOrgFreedesktopModemManager1 {
        interface Interface {
            vfunc_handle_inhibit_device(invocation: Gio.DBusMethodInvocation, arg_uid: string, arg_inhibit: boolean): boolean;
            vfunc_handle_report_kernel_event(invocation: Gio.DBusMethodInvocation, arg_properties: GLib.Variant): boolean;
            vfunc_handle_scan_devices(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_set_logging(invocation: Gio.DBusMethodInvocation, arg_level: string): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            version: string | null;
        }
    }
    export interface GdbusOrgFreedesktopModemManager1Namespace {
        $gtype: GObject.GType<GdbusOrgFreedesktopModemManager1>;
        prototype: GdbusOrgFreedesktopModemManager1;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusOrgFreedesktopModemManager1 extends GObject.Object, GdbusOrgFreedesktopModemManager1.Interface {
        get version(): string | null;
        set version(val: string | null);
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
        call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
        call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        call_scan_devices(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_scan_devices(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_scan_devices_finish(res: Gio.AsyncResult): boolean;
        call_scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_logging_finish(res: Gio.AsyncResult): boolean;
        call_set_logging_sync(arg_level: string, cancellable: Gio.Cancellable | null): boolean;
        complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
        complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
        complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
        complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusOrgFreedesktopModemManager1: GdbusOrgFreedesktopModemManager1Namespace & {
        new (): GdbusOrgFreedesktopModemManager1; 
    };
    namespace GdbusSim {
        interface Interface {
            vfunc_handle_change_pin(invocation: Gio.DBusMethodInvocation, arg_old_pin: string, arg_new_pin: string): boolean;
            vfunc_handle_enable_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string, arg_enabled: boolean): boolean;
            vfunc_handle_send_pin(invocation: Gio.DBusMethodInvocation, arg_pin: string): boolean;
            vfunc_handle_send_puk(invocation: Gio.DBusMethodInvocation, arg_puk: string, arg_pin: string): boolean;
            vfunc_handle_set_preferred_networks(invocation: Gio.DBusMethodInvocation, arg_preferred_networks: GLib.Variant): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            eid: string | null;
            emergency_numbers: string[] | null;
            emergencyNumbers: string[] | null;
            esim_status: number;
            esimStatus: number;
            gid1: GLib.Variant | null;
            gid2: GLib.Variant | null;
            imsi: string | null;
            operator_identifier: string | null;
            operatorIdentifier: string | null;
            operator_name: string | null;
            operatorName: string | null;
            preferred_networks: GLib.Variant | null;
            preferredNetworks: GLib.Variant | null;
            removability: number;
            sim_identifier: string | null;
            simIdentifier: string | null;
            sim_type: number;
            simType: number;
        }
    }
    export interface GdbusSimNamespace {
        $gtype: GObject.GType<GdbusSim>;
        prototype: GdbusSim;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusSim extends GObject.Object, GdbusSim.Interface {
        get active(): boolean;
        set active(val: boolean);
        get eid(): string | null;
        set eid(val: string | null);
        get emergency_numbers(): string[] | null;
        set emergency_numbers(val: string[] | null);
        get emergencyNumbers(): string[] | null;
        set emergencyNumbers(val: string[] | null);
        get esim_status(): number;
        set esim_status(val: number);
        get esimStatus(): number;
        set esimStatus(val: number);
        get gid1(): GLib.Variant | null;
        set gid1(val: GLib.Variant | null);
        get gid2(): GLib.Variant | null;
        set gid2(val: GLib.Variant | null);
        get imsi(): string | null;
        set imsi(val: string | null);
        get operator_identifier(): string | null;
        set operator_identifier(val: string | null);
        get operatorIdentifier(): string | null;
        set operatorIdentifier(val: string | null);
        get operator_name(): string | null;
        set operator_name(val: string | null);
        get operatorName(): string | null;
        set operatorName(val: string | null);
        get preferred_networks(): GLib.Variant | null;
        set preferred_networks(val: GLib.Variant | null);
        get preferredNetworks(): GLib.Variant | null;
        set preferredNetworks(val: GLib.Variant | null);
        get removability(): number;
        set removability(val: number);
        get sim_identifier(): string | null;
        set sim_identifier(val: string | null);
        get simIdentifier(): string | null;
        set simIdentifier(val: string | null);
        get sim_type(): number;
        set sim_type(val: number);
        get simType(): number;
        set simType(val: number);
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_change_pin_finish(res: Gio.AsyncResult): boolean;
        call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_enable_pin_finish(res: Gio.AsyncResult): boolean;
        call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_pin_finish(res: Gio.AsyncResult): boolean;
        call_send_pin_sync(arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_puk_finish(res: Gio.AsyncResult): boolean;
        call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_set_preferred_networks(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_set_preferred_networks_finish(res: Gio.AsyncResult): boolean;
        call_set_preferred_networks_sync(arg_preferred_networks: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
        complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
        complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
        complete_set_preferred_networks(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusSim: GdbusSimNamespace & {
        new (): GdbusSim; 
    };
    namespace GdbusSms {
        interface Interface {
            vfunc_handle_send(invocation: Gio.DBusMethodInvocation): boolean;
            vfunc_handle_store(invocation: Gio.DBusMethodInvocation, arg_storage: number): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            "class": number;
            data: GLib.Variant | null;
            delivery_report_request: boolean;
            deliveryReportRequest: boolean;
            delivery_state: number;
            deliveryState: number;
            discharge_timestamp: string | null;
            dischargeTimestamp: string | null;
            message_reference: number;
            messageReference: number;
            number: string | null;
            pdu_type: number;
            pduType: number;
            service_category: number;
            serviceCategory: number;
            smsc: string | null;
            state: number;
            storage: number;
            teleservice_id: number;
            teleserviceId: number;
            text: string | null;
            timestamp: string | null;
            validity: GLib.Variant | null;
        }
    }
    export interface GdbusSmsNamespace {
        $gtype: GObject.GType<GdbusSms>;
        prototype: GdbusSms;
        interface_info(): Gio.DBusInterfaceInfo;
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface GdbusSms extends GObject.Object, GdbusSms.Interface {
        get "class"(): number;
        set "class"(val: number);
        get data(): GLib.Variant | null;
        set data(val: GLib.Variant | null);
        get delivery_report_request(): boolean;
        set delivery_report_request(val: boolean);
        get deliveryReportRequest(): boolean;
        set deliveryReportRequest(val: boolean);
        get delivery_state(): number;
        set delivery_state(val: number);
        get deliveryState(): number;
        set deliveryState(val: number);
        get discharge_timestamp(): string | null;
        set discharge_timestamp(val: string | null);
        get dischargeTimestamp(): string | null;
        set dischargeTimestamp(val: string | null);
        get message_reference(): number;
        set message_reference(val: number);
        get messageReference(): number;
        set messageReference(val: number);
        get number(): string | null;
        set number(val: string | null);
        get pdu_type(): number;
        set pdu_type(val: number);
        get pduType(): number;
        set pduType(val: number);
        get service_category(): number;
        set service_category(val: number);
        get serviceCategory(): number;
        set serviceCategory(val: number);
        get smsc(): string | null;
        set smsc(val: string | null);
        get state(): number;
        set state(val: number);
        get storage(): number;
        set storage(val: number);
        get teleservice_id(): number;
        set teleservice_id(val: number);
        get teleserviceId(): number;
        set teleserviceId(val: number);
        get text(): string | null;
        set text(val: string | null);
        get timestamp(): string | null;
        set timestamp(val: string | null);
        get validity(): GLib.Variant | null;
        set validity(val: GLib.Variant | null);
        call_send(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_send(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_send_finish(res: Gio.AsyncResult): boolean;
        call_send_sync(cancellable: Gio.Cancellable | null): boolean;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        call_store_finish(res: Gio.AsyncResult): boolean;
        call_store_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
        complete_send(invocation: Gio.DBusMethodInvocation): void;
        complete_store(invocation: Gio.DBusMethodInvocation): void;
    }
    export const GdbusSms: GdbusSmsNamespace & {
        new (): GdbusSms; 
    };
    const __name__: string;
    const __version__: string;
}
export default ModemManager;
}
declare module 'gi://ModemManager' {
    import ModemManager10 from 'gi://ModemManager?version=1.0';
    export default ModemManager10;
}
