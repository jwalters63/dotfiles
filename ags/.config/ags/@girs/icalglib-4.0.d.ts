declare module 'gi://ICalGLib?version=4.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace ICalGLib {
    enum ComponentKind {
        NO_COMPONENT,
        ANY_COMPONENT,
        XROOT_COMPONENT,
        XATTACH_COMPONENT,
        VEVENT_COMPONENT,
        VTODO_COMPONENT,
        VJOURNAL_COMPONENT,
        VCALENDAR_COMPONENT,
        VAGENDA_COMPONENT,
        VFREEBUSY_COMPONENT,
        VALARM_COMPONENT,
        XAUDIOALARM_COMPONENT,
        XDISPLAYALARM_COMPONENT,
        XEMAILALARM_COMPONENT,
        XPROCEDUREALARM_COMPONENT,
        VTIMEZONE_COMPONENT,
        XSTANDARD_COMPONENT,
        XDAYLIGHT_COMPONENT,
        X_COMPONENT,
        VSCHEDULE_COMPONENT,
        VQUERY_COMPONENT,
        VREPLY_COMPONENT,
        VCAR_COMPONENT,
        VCOMMAND_COMPONENT,
        XLICINVALID_COMPONENT,
        XLICMIMEPART_COMPONENT,
        VAVAILABILITY_COMPONENT,
        XAVAILABLE_COMPONENT,
        VPOLL_COMPONENT,
        VVOTER_COMPONENT,
        XVOTE_COMPONENT,
        VPATCH_COMPONENT,
        XPATCH_COMPONENT,
        PARTICIPANT_COMPONENT,
        VLOCATION_COMPONENT,
        VRESOURCE_COMPONENT,
        IANA_COMPONENT,
        NUM_COMPONENT_TYPES,
    }
    enum ErrorEnum {
        NO_ERROR,
        BADARG_ERROR,
        NEWFAILED_ERROR,
        ALLOCATION_ERROR,
        THREADING_ERROR,
        MALFORMEDDATA_ERROR,
        PARSE_ERROR,
        INTERNAL_ERROR,
        FILE_ERROR,
        USAGE_ERROR,
        UNIMPLEMENTED_ERROR,
        UNKNOWN_ERROR,
    }
    enum ErrorState {
        FATAL,
        NONFATAL,
        DEFAULT,
        UNKNOWN,
    }
    enum InvalidRruleHandling {
        TREAT_AS_ERROR,
        IGNORE_INVALID,
    }
    enum LimitsKind {
        PARSE_FAILURES,
        PARSE_SEARCH,
        PARSE_FAILURE_ERROR_MESSAGES,
        PROPERTIES,
        PARAMETERS,
        VALUE_CHARS,
        PROPERTY_VALUES,
        RECURRENCE_SEARCH,
        RECURRENCE_TIME_STANDING_STILL,
        RRULE_SEARCH,
    }
    enum ParameterAction {
        X,
        ASK,
        ABORT,
        NONE,
    }
    enum ParameterCutype {
        X,
        INDIVIDUAL,
        GROUP,
        RESOURCE,
        ROOM,
        UNKNOWN,
        NONE,
    }
    enum ParameterDerived {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterDisplay {
        X,
        BADGE,
        GRAPHIC,
        FULLSIZE,
        THUMBNAIL,
        NONE,
    }
    enum ParameterEnable {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterEncoding {
        X,
        "8BIT",
        BASE64,
        NONE,
    }
    enum ParameterFbtype {
        X,
        FREE,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }
    enum ParameterFeature {
        X,
        AUDIO,
        CHAT,
        FEED,
        MODERATOR,
        PHONE,
        SCREEN,
        VIDEO,
        NONE,
    }
    enum ParameterKind {
        ANY_PARAMETER,
        ACTIONPARAM_PARAMETER,
        ALTREP_PARAMETER,
        CHARSET_PARAMETER,
        CN_PARAMETER,
        CUTYPE_PARAMETER,
        DELEGATEDFROM_PARAMETER,
        DELEGATEDTO_PARAMETER,
        DERIVED_PARAMETER,
        DIR_PARAMETER,
        DISPLAY_PARAMETER,
        EMAIL_PARAMETER,
        ENABLE_PARAMETER,
        ENCODING_PARAMETER,
        FBTYPE_PARAMETER,
        FEATURE_PARAMETER,
        FILENAME_PARAMETER,
        FMTTYPE_PARAMETER,
        GAP_PARAMETER,
        IANA_PARAMETER,
        ID_PARAMETER,
        LABEL_PARAMETER,
        LANGUAGE_PARAMETER,
        LATENCY_PARAMETER,
        LINKREL_PARAMETER,
        LOCAL_PARAMETER,
        LOCALIZE_PARAMETER,
        MANAGEDID_PARAMETER,
        MEMBER_PARAMETER,
        MODIFIED_PARAMETER,
        OPTIONS_PARAMETER,
        ORDER_PARAMETER,
        PARTSTAT_PARAMETER,
        PATCHACTION_PARAMETER,
        PUBLICCOMMENT_PARAMETER,
        RANGE_PARAMETER,
        REASON_PARAMETER,
        RELATED_PARAMETER,
        RELTYPE_PARAMETER,
        REQUIRED_PARAMETER,
        RESPONSE_PARAMETER,
        ROLE_PARAMETER,
        RSVP_PARAMETER,
        SCHEDULEAGENT_PARAMETER,
        SCHEDULEFORCESEND_PARAMETER,
        SCHEDULESTATUS_PARAMETER,
        SCHEMA_PARAMETER,
        SENTBY_PARAMETER,
        SIZE_PARAMETER,
        STAYINFORMED_PARAMETER,
        SUBSTATE_PARAMETER,
        TZID_PARAMETER,
        VALUE_PARAMETER,
        X_PARAMETER,
        XLICCOMPARETYPE_PARAMETER,
        XLICERRORTYPE_PARAMETER,
        NO_PARAMETER,
    }
    enum ParameterLocal {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterPartstat {
        X,
        NEEDSACTION,
        ACCEPTED,
        DECLINED,
        TENTATIVE,
        DELEGATED,
        COMPLETED,
        INPROCESS,
        FAILED,
        NONE,
    }
    enum ParameterPatchaction {
        X,
        CREATE,
        BYNAME,
        BYVALUE,
        BYPARAM,
        NONE,
    }
    enum ParameterRange {
        X,
        THISANDPRIOR,
        THISANDFUTURE,
        NONE,
    }
    enum ParameterRelated {
        X,
        START,
        END,
        NONE,
    }
    enum ParameterReltype {
        X,
        PARENT,
        CHILD,
        SIBLING,
        POLL,
        SNOOZE,
        CONCEPT,
        DEPENDSON,
        FINISHTOFINISH,
        FINISHTOSTART,
        FIRST,
        NEXT,
        REFID,
        STARTTOFINISH,
        STARTTOSTART,
        NONE,
    }
    enum ParameterRequired {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterRole {
        X,
        CHAIR,
        REQPARTICIPANT,
        OPTPARTICIPANT,
        NONPARTICIPANT,
        NONE,
    }
    enum ParameterRsvp {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterScheduleagent {
        X,
        SERVER,
        CLIENT,
        NONE,
    }
    enum ParameterScheduleforcesend {
        X,
        REQUEST,
        REPLY,
        NONE,
    }
    enum ParameterStayinformed {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum ParameterSubstate {
        X,
        OK,
        ERROR,
        SUSPENDED,
        NONE,
    }
    enum ParameterValue {
        X,
        BINARY,
        BOOLEAN,
        DATE,
        DURATION,
        FLOAT,
        INTEGER,
        PERIOD,
        RECUR,
        TEXT,
        URI,
        ERROR,
        DATETIME,
        UTCOFFSET,
        CALADDRESS,
        UID,
        XMLREFERENCE,
        NONE,
    }
    enum ParameterXliccomparetype {
        X,
        EQUAL,
        NOTEQUAL,
        LESS,
        GREATER,
        LESSEQUAL,
        GREATEREQUAL,
        REGEX,
        ISNULL,
        ISNOTNULL,
        NONE,
    }
    enum ParameterXlicerrortype {
        X,
        COMPONENTPARSEERROR,
        PROPERTYPARSEERROR,
        PARAMETERNAMEPARSEERROR,
        PARAMETERVALUEPARSEERROR,
        VALUEPARSEERROR,
        INVALIDITIP,
        UNKNOWNVCALPROPERROR,
        MIMEPARSEERROR,
        VCALPROPPARSEERROR,
        NONE,
    }
    enum ParserCtrl {
        KEEP,
        OMIT,
        ERROR,
    }
    enum ParserState {
        ERROR,
        SUCCESS,
        BEGIN_COMP,
        END_COMP,
        IN_PROGRESS,
    }
    enum PropertyAction {
        X,
        AUDIO,
        DISPLAY,
        EMAIL,
        PROCEDURE,
        NONE,
    }
    enum PropertyBusytype {
        X,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }
    enum PropertyCarlevel {
        X,
        CARNONE,
        CARMIN,
        CARFULL1,
        NONE,
    }
    enum PropertyClassenum {
        X,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        NONE,
    }
    enum PropertyCmd {
        X,
        ABORT,
        CONTINUE,
        CREATE,
        DELETE,
        GENERATEUID,
        GETCAPABILITY,
        IDENTIFY,
        MODIFY,
        MOVE,
        REPLY,
        SEARCH,
        SETLOCALE,
        NONE,
    }
    enum PropertyKind {
        ANY_PROPERTY,
        ACCEPTRESPONSE_PROPERTY,
        ACKNOWLEDGED_PROPERTY,
        ACTION_PROPERTY,
        ALLOWCONFLICT_PROPERTY,
        ATTACH_PROPERTY,
        ATTENDEE_PROPERTY,
        BUSYTYPE_PROPERTY,
        CALENDARADDRESS_PROPERTY,
        CALID_PROPERTY,
        CALMASTER_PROPERTY,
        CALSCALE_PROPERTY,
        CAPVERSION_PROPERTY,
        CARLEVEL_PROPERTY,
        CARID_PROPERTY,
        CATEGORIES_PROPERTY,
        CLASS_PROPERTY,
        CMD_PROPERTY,
        COLOR_PROPERTY,
        COMMENT_PROPERTY,
        COMPLETED_PROPERTY,
        COMPONENTS_PROPERTY,
        CONFERENCE_PROPERTY,
        CONCEPT_PROPERTY,
        CONTACT_PROPERTY,
        CREATED_PROPERTY,
        CSID_PROPERTY,
        DATEMAX_PROPERTY,
        DATEMIN_PROPERTY,
        DECREED_PROPERTY,
        DEFAULTCHARSET_PROPERTY,
        DEFAULTLOCALE_PROPERTY,
        DEFAULTTZID_PROPERTY,
        DEFAULTVCARS_PROPERTY,
        DENY_PROPERTY,
        DESCRIPTION_PROPERTY,
        DTEND_PROPERTY,
        DTSTAMP_PROPERTY,
        DTSTART_PROPERTY,
        DUE_PROPERTY,
        DURATION_PROPERTY,
        ESTIMATEDDURATION_PROPERTY,
        EXDATE_PROPERTY,
        EXPAND_PROPERTY,
        EXRULE_PROPERTY,
        FREEBUSY_PROPERTY,
        GEO_PROPERTY,
        GRANT_PROPERTY,
        IMAGE_PROPERTY,
        ITIPVERSION_PROPERTY,
        LASTMODIFIED_PROPERTY,
        LINK_PROPERTY,
        LOCATION_PROPERTY,
        LOCATIONTYPE_PROPERTY,
        MAXCOMPONENTSIZE_PROPERTY,
        MAXDATE_PROPERTY,
        MAXRESULTS_PROPERTY,
        MAXRESULTSSIZE_PROPERTY,
        METHOD_PROPERTY,
        MINDATE_PROPERTY,
        MULTIPART_PROPERTY,
        NAME_PROPERTY,
        ORGANIZER_PROPERTY,
        OWNER_PROPERTY,
        PARTICIPANTTYPE_PROPERTY,
        PATCHDELETE_PROPERTY,
        PATCHORDER_PROPERTY,
        PATCHPARAMETER_PROPERTY,
        PATCHTARGET_PROPERTY,
        PATCHVERSION_PROPERTY,
        PERCENTCOMPLETE_PROPERTY,
        PERMISSION_PROPERTY,
        POLLCOMPLETION_PROPERTY,
        POLLITEMID_PROPERTY,
        POLLMODE_PROPERTY,
        POLLPROPERTIES_PROPERTY,
        POLLWINNER_PROPERTY,
        PRIORITY_PROPERTY,
        PRODID_PROPERTY,
        PROXIMITY_PROPERTY,
        QUERY_PROPERTY,
        QUERYLEVEL_PROPERTY,
        QUERYID_PROPERTY,
        QUERYNAME_PROPERTY,
        RDATE_PROPERTY,
        RECURACCEPTED_PROPERTY,
        RECUREXPAND_PROPERTY,
        RECURLIMIT_PROPERTY,
        RECURRENCEID_PROPERTY,
        REFRESHINTERVAL_PROPERTY,
        REFID_PROPERTY,
        RELATEDTO_PROPERTY,
        RELCALID_PROPERTY,
        REPEAT_PROPERTY,
        REPLYURL_PROPERTY,
        REQUESTSTATUS_PROPERTY,
        RESOURCES_PROPERTY,
        RESOURCETYPE_PROPERTY,
        RESPONSE_PROPERTY,
        RESTRICTION_PROPERTY,
        RRULE_PROPERTY,
        SCOPE_PROPERTY,
        SEQUENCE_PROPERTY,
        SOURCE_PROPERTY,
        STATUS_PROPERTY,
        STORESEXPANDED_PROPERTY,
        STRUCTUREDDATA_PROPERTY,
        STYLEDDESCRIPTION_PROPERTY,
        SUMMARY_PROPERTY,
        TARGET_PROPERTY,
        TASKMODE_PROPERTY,
        TRANSP_PROPERTY,
        TRIGGER_PROPERTY,
        TZID_PROPERTY,
        TZIDALIASOF_PROPERTY,
        TZNAME_PROPERTY,
        TZOFFSETFROM_PROPERTY,
        TZOFFSETTO_PROPERTY,
        TZUNTIL_PROPERTY,
        TZURL_PROPERTY,
        UID_PROPERTY,
        URL_PROPERTY,
        VERSION_PROPERTY,
        VOTER_PROPERTY,
        X_PROPERTY,
        XLICCLASS_PROPERTY,
        XLICCLUSTERCOUNT_PROPERTY,
        XLICERROR_PROPERTY,
        XLICMIMECHARSET_PROPERTY,
        XLICMIMECID_PROPERTY,
        XLICMIMECONTENTTYPE_PROPERTY,
        XLICMIMEENCODING_PROPERTY,
        XLICMIMEFILENAME_PROPERTY,
        XLICMIMEOPTINFO_PROPERTY,
        IANA_PROPERTY,
        NO_PROPERTY,
    }
    enum PropertyMethod {
        X,
        PUBLISH,
        REQUEST,
        REPLY,
        ADD,
        CANCEL,
        REFRESH,
        COUNTER,
        DECLINECOUNTER,
        CREATE,
        READ,
        RESPONSE,
        MOVE,
        MODIFY,
        GENERATEUID,
        DELETE,
        POLLSTATUS,
        NONE,
    }
    enum PropertyParticipanttype {
        X,
        ACTIVE,
        INACTIVE,
        SPONSOR,
        CONTACT,
        BOOKINGCONTACT,
        EMERGENCYCONTACT,
        PUBLICITYCONTACT,
        PLANNERCONTACT,
        PERFORMER,
        SPEAKER,
        VOTER,
        NONE,
    }
    enum PropertyPollcompletion {
        X,
        SERVER,
        SERVERSUBMIT,
        SERVERCHOICE,
        CLIENT,
        NONE,
    }
    enum PropertyPollmode {
        X,
        BASIC,
        NONE,
    }
    enum PropertyProximity {
        X,
        ARRIVE,
        DEPART,
        CONNECT,
        DISCONNECT,
        NONE,
    }
    enum PropertyQuerylevel {
        X,
        CALQL1,
        CALQLNONE,
        NONE,
    }
    enum PropertyResourcetype {
        X,
        ROOM,
        PROJECTOR,
        REMOTECONFERENCEAUDIO,
        REMOTECONFERENCEVIDEO,
        NONE,
    }
    enum PropertyStatus {
        X,
        TENTATIVE,
        CONFIRMED,
        COMPLETED,
        NEEDSACTION,
        CANCELLED,
        INPROCESS,
        DRAFT,
        FINAL,
        SUBMITTED,
        PENDING,
        FAILED,
        DELETED,
        NONE,
    }
    enum PropertyTaskmode {
        X,
        AUTOMATICCOMPLETION,
        AUTOMATICFAILURE,
        AUTOMATICSTATUS,
        NONE,
    }
    enum PropertyTransp {
        X,
        OPAQUE,
        OPAQUENOCONFLICT,
        TRANSPARENT,
        TRANSPARENTNOCONFLICT,
        NONE,
    }
    enum PropertyXlicclass {
        X,
        PUBLISHNEW,
        PUBLISHUPDATE,
        PUBLISHFREEBUSY,
        REQUESTNEW,
        REQUESTUPDATE,
        REQUESTRESCHEDULE,
        REQUESTDELEGATE,
        REQUESTNEWORGANIZER,
        REQUESTFORWARD,
        REQUESTSTATUS,
        REQUESTFREEBUSY,
        REPLYACCEPT,
        REPLYDECLINE,
        REPLYDELEGATE,
        REPLYCRASHERACCEPT,
        REPLYCRASHERDECLINE,
        ADDINSTANCE,
        CANCELEVENT,
        CANCELINSTANCE,
        CANCELALL,
        REFRESH,
        COUNTER,
        DECLINECOUNTER,
        MALFORMED,
        OBSOLETE,
        MISSEQUENCED,
        UNKNOWN,
        NONE,
    }
    enum RecurrenceArraySizes {
        SECOND_SIZE,
        MINUTE_SIZE,
        HOUR_SIZE,
        MONTH_SIZE,
        MONTHDAY_SIZE,
        WEEKNO_SIZE,
        YEARDAY_SIZE,
        SETPOS_SIZE,
        DAY_SIZE,
    }
    enum RecurrenceByRule {
        BYRULE_NO_CONTRACTION,
        BY_MONTH,
        BY_WEEK_NO,
        BY_YEAR_DAY,
        BY_MONTH_DAY,
        BY_DAY,
        BY_HOUR,
        BY_MINUTE,
        BY_SECOND,
        BY_SET_POS,
        BY_NUM_PARTS,
    }
    enum RecurrenceFrequency {
        SECONDLY_RECURRENCE,
        MINUTELY_RECURRENCE,
        HOURLY_RECURRENCE,
        DAILY_RECURRENCE,
        WEEKLY_RECURRENCE,
        MONTHLY_RECURRENCE,
        YEARLY_RECURRENCE,
        NO_RECURRENCE,
    }
    enum RecurrenceSkip {
        BACKWARD,
        FORWARD,
        OMIT,
        UNDEFINED,
    }
    enum RecurrenceWeekday {
        NO_WEEKDAY,
        SUNDAY_WEEKDAY,
        MONDAY_WEEKDAY,
        TUESDAY_WEEKDAY,
        WEDNESDAY_WEEKDAY,
        THURSDAY_WEEKDAY,
        FRIDAY_WEEKDAY,
        SATURDAY_WEEKDAY,
    }
    enum RequestStatus {
        UNKNOWN_STATUS,
        "2_0_SUCCESS_STATUS",
        "2_1_FALLBACK_STATUS",
        "2_2_IGPROP_STATUS",
        "2_3_IGPARAM_STATUS",
        "2_4_IGXPROP_STATUS",
        "2_5_IGXPARAM_STATUS",
        "2_6_IGCOMP_STATUS",
        "2_7_FORWARD_STATUS",
        "2_8_ONEEVENT_STATUS",
        "2_9_TRUNC_STATUS",
        "2_10_ONETODO_STATUS",
        "2_11_TRUNCRRULE_STATUS",
        "3_0_INVPROPNAME_STATUS",
        "3_1_INVPROPVAL_STATUS",
        "3_2_INVPARAM_STATUS",
        "3_3_INVPARAMVAL_STATUS",
        "3_4_INVCOMP_STATUS",
        "3_5_INVTIME_STATUS",
        "3_6_INVRULE_STATUS",
        "3_7_INVCU_STATUS",
        "3_8_NOAUTH_STATUS",
        "3_9_BADVERSION_STATUS",
        "3_10_TOOBIG_STATUS",
        "3_11_MISSREQCOMP_STATUS",
        "3_12_UNKCOMP_STATUS",
        "3_13_BADCOMP_STATUS",
        "3_14_NOCAP_STATUS",
        "3_15_INVCOMMAND",
        "4_0_BUSY_STATUS",
        "4_1_STORE_ACCESS_DENIED",
        "4_2_STORE_FAILED",
        "4_3_STORE_NOT_FOUND",
        "5_0_MAYBE_STATUS",
        "5_1_UNAVAIL_STATUS",
        "5_2_NOSERVICE_STATUS",
        "5_3_NOSCHED_STATUS",
        "6_1_CONTAINER_NOT_FOUND",
        "9_0_UNRECOGNIZED_COMMAND",
    }
    enum RestrictionKind {
        NONE,
        ZERO,
        ONE,
        ZEROPLUS,
        ONEPLUS,
        ZEROORONE,
        ONEEXCLUSIVE,
        ONEMUTUAL,
        UNKNOWN,
    }
    enum Unknowntokenhandling {
        ASSUME_IANA_TOKEN,
        DISCARD_TOKEN,
        TREAT_AS_ERROR,
    }
    enum ValueKind {
        ANY_VALUE,
        ACTION_VALUE,
        ATTACH_VALUE,
        BINARY_VALUE,
        BOOLEAN_VALUE,
        BUSYTYPE_VALUE,
        CALADDRESS_VALUE,
        CARLEVEL_VALUE,
        COLOR_VALUE,
        CLASS_VALUE,
        CMD_VALUE,
        DATE_VALUE,
        DATETIME_VALUE,
        DATETIMEDATE_VALUE,
        DATETIMEPERIOD_VALUE,
        DURATION_VALUE,
        FLOAT_VALUE,
        GEO_VALUE,
        INTEGER_VALUE,
        LINK_VALUE,
        METHOD_VALUE,
        PARTICIPANTTYPE_VALUE,
        PERIOD_VALUE,
        POLLCOMPLETION_VALUE,
        POLLMODE_VALUE,
        PROXIMITY_VALUE,
        RESOURCETYPE_VALUE,
        QUERY_VALUE,
        QUERYLEVEL_VALUE,
        RECUR_VALUE,
        RELATEDTO_VALUE,
        REQUESTSTATUS_VALUE,
        STATUS_VALUE,
        STRING_VALUE,
        TASKMODE_VALUE,
        TEXT_VALUE,
        TRANSP_VALUE,
        TRIGGER_VALUE,
        UID_VALUE,
        URI_VALUE,
        UTCOFFSET_VALUE,
        XMLREFERENCE_VALUE,
        X_VALUE,
        XLICCLASS_VALUE,
        NO_VALUE,
    }
    enum VcardAdrField {
        ADR_PO_BOX,
        ADR_EXTENDED,
        ADR_STREET,
        ADR_LOCALITY,
        ADR_REGION,
        ADR_POSTAL_CODE,
        ADR_COUNTRY,
        ADR_ROOM,
        ADR_APARTMENT,
        ADR_FLOOR,
        ADR_STREET_NUMBER,
        ADR_STREET_NAME,
        ADR_BUILDING,
        ADR_BLOCK,
        ADR_SUBDISTRICT,
        ADR_DISTRICT,
        ADR_LANDMARK,
        ADR_DIRECTION,
        NUM_ADR_FIELDS,
    }
    enum VcardClientpidmapField {
        CLIENTPIDMAP_ID,
        CLIENTPIDMAP_URI,
        NUM_CLIENTPIDMAP_FIELDS,
    }
    enum VcardComponentKind {
        NO_COMPONENT,
        ANY_COMPONENT,
        XROOT_COMPONENT,
        VCARD_COMPONENT,
        NUM_COMPONENT_TYPES,
    }
    enum VcardGenderField {
        GENDER_SEX,
        GENDER_TEXT,
        NUM_GENDER_FIELDS,
    }
    enum VcardNField {
        N_FAMILY,
        N_GIVEN,
        N_ADDITIONAL,
        N_PREFIX,
        N_SUFFIX,
        N_SECONDARY,
        N_GENERATION,
        NUM_N_FIELDS,
    }
    enum VcardParameterCalscale {
        X,
        GREGORIAN,
        NONE,
    }
    enum VcardParameterDerived {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum VcardParameterEncoding {
        X,
        B,
        NONE,
    }
    enum VcardParameterKind {
        ANY_PARAMETER,
        ALTID_PARAMETER,
        AUTHOR_PARAMETER,
        AUTHORNAME_PARAMETER,
        CALSCALE_PARAMETER,
        CC_PARAMETER,
        CONTEXT_PARAMETER,
        CREATED_PARAMETER,
        DERIVED_PARAMETER,
        ENCODING_PARAMETER,
        GEO_PARAMETER,
        IANA_PARAMETER,
        INDEX_PARAMETER,
        JSCOMPS_PARAMETER,
        JSPTR_PARAMETER,
        LABEL_PARAMETER,
        LANGUAGE_PARAMETER,
        LEVEL_PARAMETER,
        MEDIATYPE_PARAMETER,
        PHONETIC_PARAMETER,
        PID_PARAMETER,
        PREF_PARAMETER,
        PROPID_PARAMETER,
        SCRIPT_PARAMETER,
        SERVICETYPE_PARAMETER,
        SORTAS_PARAMETER,
        TYPE_PARAMETER,
        TZ_PARAMETER,
        USERNAME_PARAMETER,
        VALUE_PARAMETER,
        X_PARAMETER,
        XLICCOMPARETYPE_PARAMETER,
        XLICERRORTYPE_PARAMETER,
        NO_PARAMETER,
    }
    enum VcardParameterLevel {
        X,
        BEGINNER,
        AVERAGE,
        EXPERT,
        HIGH,
        MEDIUM,
        LOW,
        NONE,
    }
    enum VcardParameterPhonetic {
        X,
        IPA,
        PINY,
        JYUT,
        SCRIPT,
        NONE,
    }
    enum VcardParameterType {
        X,
        WORK,
        HOME,
        TEXT,
        VOICE,
        FAX,
        CELL,
        VIDEO,
        PAGER,
        TEXTPHONE,
        CONTACT,
        ACQUAINTANCE,
        FRIEND,
        MET,
        COWORKER,
        COLLEAGUE,
        CORESIDENT,
        NEIGHBOR,
        CHILD,
        PARENT,
        SIBLING,
        SPOUSE,
        KIN,
        MUSE,
        CRUSH,
        DATE,
        SWEETHEART,
        ME,
        AGENT,
        EMERGENCY,
        PREF,
        MAINNUMBER,
        BILLING,
        DELIVERY,
        NONE,
    }
    enum VcardParameterValue {
        X,
        TEXT,
        URI,
        DATE,
        TIME,
        DATETIME,
        DATEANDORTIME,
        TIMESTAMP,
        BOOLEAN,
        INTEGER,
        FLOAT,
        UTCOFFSET,
        LANGUAGETAG,
        STRUCTURED,
        NONE,
    }
    enum VcardParameterXliccomparetype {
        X,
        EQUAL,
        NOTEQUAL,
        LESS,
        GREATER,
        LESSEQUAL,
        GREATEREQUAL,
        REGEX,
        ISNULL,
        ISNOTNULL,
        NONE,
    }
    enum VcardParameterXlicerrortype {
        X,
        COMPONENTPARSEERROR,
        PROPERTYPARSEERROR,
        PARAMETERNAMEPARSEERROR,
        PARAMETERVALUEPARSEERROR,
        VALUEPARSEERROR,
        RESTRICTIONCHECK,
        NONE,
    }
    enum VcardPropertyGramgender {
        X,
        ANIMATE,
        COMMON,
        FEMININE,
        INANIMATE,
        MASCULINE,
        NEUTER,
        NONE,
    }
    enum VcardPropertyKind {
        ANY_PROPERTY,
        ADR_PROPERTY,
        AGENT_PROPERTY,
        ANNIVERSARY_PROPERTY,
        BDAY_PROPERTY,
        BEGIN_PROPERTY,
        BIRTHPLACE_PROPERTY,
        CALADRURI_PROPERTY,
        CALURI_PROPERTY,
        CATEGORIES_PROPERTY,
        CLASS_PROPERTY,
        CLIENTPIDMAP_PROPERTY,
        CONTACTURI_PROPERTY,
        CREATED_PROPERTY,
        DEATHDATE_PROPERTY,
        DEATHPLACE_PROPERTY,
        EMAIL_PROPERTY,
        END_PROPERTY,
        EXPERTISE_PROPERTY,
        FBURL_PROPERTY,
        FN_PROPERTY,
        GENDER_PROPERTY,
        GEO_PROPERTY,
        GRAMGENDER_PROPERTY,
        HOBBY_PROPERTY,
        IMPP_PROPERTY,
        INTEREST_PROPERTY,
        JSPROP_PROPERTY,
        KEY_PROPERTY,
        KIND_PROPERTY,
        LABEL_PROPERTY,
        LANG_PROPERTY,
        LANGUAGE_PROPERTY,
        LOGO_PROPERTY,
        MAILER_PROPERTY,
        MEMBER_PROPERTY,
        N_PROPERTY,
        NAME_PROPERTY,
        NICKNAME_PROPERTY,
        NOTE_PROPERTY,
        ORG_PROPERTY,
        ORGDIRECTORY_PROPERTY,
        PHOTO_PROPERTY,
        PRODID_PROPERTY,
        PRONOUNS_PROPERTY,
        RELATED_PROPERTY,
        REV_PROPERTY,
        ROLE_PROPERTY,
        SOCIALPROFILE_PROPERTY,
        SORTSTRING_PROPERTY,
        SOUND_PROPERTY,
        SOURCE_PROPERTY,
        TEL_PROPERTY,
        TITLE_PROPERTY,
        TZ_PROPERTY,
        UID_PROPERTY,
        URL_PROPERTY,
        VERSION_PROPERTY,
        X_PROPERTY,
        XLICERROR_PROPERTY,
        XML_PROPERTY,
        NO_PROPERTY,
    }
    enum VcardPropertyKindenum {
        X,
        INDIVIDUAL,
        GROUP,
        ORG,
        LOCATION,
        APPLICATION,
        DEVICE,
        NONE,
    }
    enum VcardPropertyVersion {
        X,
        V21,
        V30,
        V40,
        NONE,
    }
    enum VcardRestrictionKind {
        NONE,
        ZERO,
        ONE,
        ZEROPLUS,
        ONEPLUS,
        ZEROORONE,
        ONEEXCLUSIVE,
        ONEMUTUAL,
        UNKNOWN,
    }
    enum VcardTimeConvertFlags {
        BARE_TIME,
        AS_V4,
    }
    enum VcardValueKind {
        ANY_VALUE,
        BOOLEAN_VALUE,
        DATE_VALUE,
        DATEANDORTIME_VALUE,
        DATETIME_VALUE,
        FLOAT_VALUE,
        GEO_VALUE,
        GRAMGENDER_VALUE,
        INTEGER_VALUE,
        KIND_VALUE,
        LANGUAGETAG_VALUE,
        STRUCTURED_VALUE,
        TEXT_VALUE,
        TEXTLIST_VALUE,
        TIME_VALUE,
        TIMESTAMP_VALUE,
        TZ_VALUE,
        URI_VALUE,
        UTCOFFSET_VALUE,
        VERSION_VALUE,
        X_VALUE,
        NO_VALUE,
    }
    function enumarray_clone(array: EnumArray): EnumArray;
    function enumarray_remove_element_at(array: EnumArray, position: number): void;
    function error_clear_errno(): void;
    function error_error_from_string(str: string): ErrorEnum;
    function error_get_error_state(error: ErrorEnum): ErrorState;
    function error_get_errors_are_fatal(): boolean;
    function error_icalerrno(): ErrorEnum;
    function error_perror(): string;
    function error_restore(error: string, es: ErrorState): void;
    function error_set_errno(x: ErrorEnum): void;
    function error_set_error_state(error: ErrorEnum, state: ErrorState): void;
    function error_set_errors_are_fatal(value: boolean): void;
    function error_strerror(e: ErrorEnum): string;
    function error_supress(error: string): ErrorState;
    function get_unknown_token_handling_setting(): Unknowntokenhandling;
    function i_calerror_backtrace(): void;
    function limit_get(kind: LimitsKind): number;
    function limit_set(kind: LimitsKind, limit: bigint | number): void;
    function memory_add_tmp_buffer(buf: null): void;
    function memory_append_char(buf: number[], pos: number[], ch: number): [number[], number[]];
    function memory_append_decoded_string(buf: number[], pos: number[], str: string): [number[], number[]];
    function memory_append_encoded_string(buf: number[], pos: number[], str: string): [number[], number[]];
    function memory_append_string(buf: number[], pos: number[], str: string): [number[], number[]];
    function memory_free_buffer(buf: null): void;
    function memory_new_buffer(size: bigint | number): null;
    function memory_resize_buffer(buf: null, size: bigint | number): null;
    function memory_strdup(s: string): string;
    function memory_tmp_buffer(size: bigint | number): null;
    function memory_tmp_copy(str: string): string;
    function recur_expand_recurrence(rule: string, start: bigint | number, count: number): number[];
    function recur_get_invalid_rrule_handling_setting(): InvalidRruleHandling;
    function recur_set_invalid_rrule_handling_setting(value: InvalidRruleHandling): void;
    function request_status_code(stat: RequestStatus): string;
    function request_status_desc(stat: RequestStatus): string;
    function request_status_from_num(major: number, minor: number): RequestStatus;
    function request_status_major(stat: RequestStatus): number;
    function request_status_minor(stat: RequestStatus): number;
    function restriction_check(comp: Component): number;
    function restriction_compare(restr: RestrictionKind, count: number): number;
    function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void;
    function vcard_parser_errstr(err: number): string;
    function vcard_parser_parse_string(str: string): VcardComponent | null;
    function vcard_restriction_check(comp: VcardComponent): number;
    function vcard_restriction_compare(restr: VcardRestrictionKind, count: number): number;
    interface ComponentForeachRecurrenceFunc {
        (comp: Component, span: TimeSpan): void;
    }
    interface ComponentForeachTZIDFunc {
        (param: Parameter): void;
    }
    interface ParserLineGenFunc {
        (bytes: number[]): string;
    }
    namespace Array {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Array extends Object {
        static $gtype: GObject.GType<Array>;
        $signals: Array.SignalSignatures;
        constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Array.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Array.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Array.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Array.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        copy(): Array;
        remove_element_at(position: number): void;
        size(): number;
    }
    namespace Attach {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Attach extends Object {
        static $gtype: GObject.GType<Attach>;
        $signals: Attach.SignalSignatures;
        constructor(properties?: Partial<Attach.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Attach;
        static new_from_data(data: string, free_fn: GLib.Func | null): Attach;
        static new_from_url(url: string): Attach;
        connect<K extends keyof Attach.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Attach.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Attach.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Attach.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_data(): string | null;
        get_data(...args: never[]): any;
        get_is_url(): boolean;
        get_url(): string | null;
    }
    namespace CompIter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class CompIter extends Object {
        static $gtype: GObject.GType<CompIter>;
        $signals: CompIter.SignalSignatures;
        constructor(properties?: Partial<CompIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CompIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CompIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CompIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        deref(): Component;
        is_valid(): boolean;
        next(): Component;
        prior(): Component;
    }
    namespace Component {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Component extends Object {
        static $gtype: GObject.GType<Component>;
        $signals: Component.SignalSignatures;
        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: ComponentKind): Component;
        static new_from_string(str: string): Component;
        static new_iana(iana_name: string): Component;
        static new_participant(): Component;
        static new_vagenda(): Component;
        static new_valarm(): Component;
        static new_vavailability(): Component;
        static new_vcalendar(): Component;
        static new_vevent(): Component;
        static new_vfreebusy(): Component;
        static new_vjournal(): Component;
        static new_vlocation(): Component;
        static new_vpatch(): Component;
        static new_vpoll(): Component;
        static new_vquery(): Component;
        static new_vreply(): Component;
        static new_vresource(): Component;
        static new_vtimezone(): Component;
        static new_vtodo(): Component;
        static new_vvoter(): Component;
        static new_x(x_name: string): Component;
        static new_xavailable(): Component;
        static new_xdaylight(): Component;
        static new_xpatch(): Component;
        static new_xstandard(): Component;
        static new_xvote(): Component;
        connect<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Component.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static kind_from_string(string: string): ComponentKind;
        static kind_is_valid(kind: ComponentKind): boolean;
        static kind_to_string(kind: ComponentKind): string;
        add_component(child: Component): void;
        add_property(property: Property): void;
        as_ical_string(): string;
        begin_component(kind: ComponentKind): CompIter;
        begin_property(kind: PropertyKind): PropIter;
        check_restrictions(): boolean;
        clone(): Component;
        convert_errors(): void;
        count_components(kind: ComponentKind): number;
        count_errors(): number;
        count_properties(kind: PropertyKind): number;
        end_component(kind: ComponentKind): CompIter;
        foreach_recurrence(start: Time, end: Time, callback: ComponentForeachRecurrenceFunc): void;
        foreach_tzid(callback: ComponentForeachTZIDFunc): void;
        get_comment(): string;
        get_component_name(): string;
        get_current_component(): Component;
        get_current_property(): Property;
        get_description(): string;
        get_dtend(): Time;
        get_dtstamp(): Time;
        get_dtstart(): Time;
        get_due(): Time;
        get_duration(): Duration;
        get_first_component(kind: ComponentKind): Component | null;
        get_first_property(kind: PropertyKind): Property | null;
        get_first_real_component(): Component;
        get_iana_name(): string | null;
        get_inner(): Component | null;
        get_location(): string;
        get_method(): PropertyMethod;
        get_next_component(kind: ComponentKind): Component | null;
        get_next_property(kind: PropertyKind): Property | null;
        get_parent(): Component | null;
        get_recurrenceid(): Time;
        get_relcalid(): string;
        get_sequence(): number;
        get_span(): TimeSpan;
        get_status(): PropertyStatus;
        get_summary(): string;
        get_timezone(tzid: string): Timezone | null;
        get_uid(): string;
        get_x_name(): string | null;
        is_valid(): boolean;
        isa(): ComponentKind;
        isa_component(): boolean;
        merge_component(comp_to_merge: Component): void;
        normalize(): void;
        remove_component(child: Component): void;
        remove_property(property: Property): void;
        remove_property_by_kind(kind: PropertyKind): void;
        set_comment(v: string): void;
        set_description(v: string): void;
        set_dtend(v: Time): void;
        set_dtstamp(v: Time): void;
        set_dtstart(v: Time): void;
        set_due(v: Time): void;
        set_duration(v: Duration): void;
        set_iana_name(iana_name: string): void;
        set_location(v: string): void;
        set_method(method: PropertyMethod): void;
        set_parent(parent: Component | null): void;
        set_recurrenceid(v: Time): void;
        set_relcalid(v: string): void;
        set_sequence(v: number): void;
        set_status(status: PropertyStatus): void;
        set_summary(v: string): void;
        set_uid(v: string): void;
        set_x_name(xname: string): void;
        strip_errors(): void;
    }
    namespace Datetimeperiod {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Datetimeperiod extends Object {
        static $gtype: GObject.GType<Datetimeperiod>;
        $signals: Datetimeperiod.SignalSignatures;
        constructor(properties?: Partial<Datetimeperiod.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Datetimeperiod;
        connect<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Datetimeperiod.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_period(): Period;
        get_time(): Time;
        set_period(period: Period): void;
        set_time(time: Time): void;
    }
    namespace Duration {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Duration extends Object {
        static $gtype: GObject.GType<Duration>;
        $signals: Duration.SignalSignatures;
        constructor(properties?: Partial<Duration.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_bad_duration(): Duration;
        static new_from_seconds(t: number): Duration;
        static new_from_string(str: string): Duration;
        static new_null_duration(): Duration;
        connect<K extends keyof Duration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Duration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Duration.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Duration.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static extend(t: Time, d: Duration): Time;
        static from_times(t1: Time, t2: Time): Duration;
        as_ical_string(): string;
        as_seconds(): number;
        as_utc_seconds(): number;
        get_days(): number;
        get_hours(): number;
        get_minutes(): number;
        get_seconds(): number;
        get_weeks(): number;
        is_bad_duration(): boolean;
        is_neg(): boolean;
        is_null_duration(): boolean;
        normalize(): Duration;
        set_days(days: number): void;
        set_hours(hours: number): void;
        set_is_neg(is_neg: boolean): void;
        set_minutes(minutes: number): void;
        set_seconds(seconds: number): void;
        set_weeks(weeks: number): void;
    }
    namespace EnumArray {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class EnumArray extends Object {
        static $gtype: GObject.GType<EnumArray>;
        $signals: EnumArray.SignalSignatures;
        constructor(properties?: Partial<EnumArray.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](increment_size: number): EnumArray;
        connect<K extends keyof EnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EnumArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): EnumArray;
        remove_element_at(position: bigint | number): void;
        size(): number;
    }
    namespace Geo {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Geo extends Object {
        static $gtype: GObject.GType<Geo>;
        $signals: Geo.SignalSignatures;
        constructor(properties?: Partial<Geo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](lat: number, lon: number): Geo;
        connect<K extends keyof Geo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Geo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Geo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Geo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): Geo;
        get_lat(): number;
        get_lon(): number;
        set_lat(lat: number): void;
        set_lon(lon: number): void;
    }
    namespace Object {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            always_destroy: boolean;
            alwaysDestroy: boolean;
            is_global_memory: boolean;
            isGlobalMemory: boolean;
            "native": never;
            native_destroy_func: never;
            nativeDestroyFunc: never;
            owner: GObject.Object;
        }
    }
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        get always_destroy(): boolean;
        set always_destroy(val: boolean);
        get alwaysDestroy(): boolean;
        set alwaysDestroy(val: boolean);
        get is_global_memory(): boolean;
        get isGlobalMemory(): boolean;
        get "native"(): null;
        get native_destroy_func(): null;
        set native_destroy_func(val: never);
        get nativeDestroyFunc(): null;
        set nativeDestroyFunc(val: never);
        get owner(): GObject.Object;
        set owner(val: GObject.Object);
        $signals: Object.SignalSignatures;
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static free_global_objects(): void;
        add_depender(depender: GObject.Object): void;
        get_always_destroy(): boolean;
        get_is_global_memory(): boolean;
        ref_owner<T = GObject.Object>(): T;
        remove_depender(depender: GObject.Object): void;
        remove_owner(): void;
        set_always_destroy(value: boolean): void;
        set_native_destroy_func(): void;
        set_owner(owner: GObject.Object): void;
        steal_native(): null;
    }
    namespace ParamIter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class ParamIter extends Object {
        static $gtype: GObject.GType<ParamIter>;
        $signals: ParamIter.SignalSignatures;
        constructor(properties?: Partial<ParamIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof ParamIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ParamIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ParamIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ParamIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ParamIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ParamIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        deref(): Parameter;
        next(): Parameter;
    }
    namespace Parameter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Parameter extends Object {
        static $gtype: GObject.GType<Parameter>;
        $signals: Parameter.SignalSignatures;
        constructor(properties?: Partial<Parameter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](v: ParameterKind): Parameter;
        static new_actionparam(value: ParameterAction): Parameter;
        static new_altrep(value: string): Parameter;
        static new_charset(value: string): Parameter;
        static new_cn(value: string): Parameter;
        static new_cutype(value: ParameterCutype): Parameter;
        static new_delegatedfrom(value: string): Parameter;
        static new_delegatedfrom_list(value: StrArray): Parameter;
        static new_delegatedto(value: string): Parameter;
        static new_delegatedto_list(value: StrArray): Parameter;
        static new_derived(value: ParameterDerived): Parameter;
        static new_dir(value: string): Parameter;
        static new_display(value: ParameterDisplay): Parameter;
        static new_display_list(value: EnumArray): Parameter;
        static new_email(value: string): Parameter;
        static new_enable(value: ParameterEnable): Parameter;
        static new_encoding(value: ParameterEncoding): Parameter;
        static new_fbtype(value: ParameterFbtype): Parameter;
        static new_feature(value: ParameterFeature): Parameter;
        static new_feature_list(value: EnumArray): Parameter;
        static new_filename(value: string): Parameter;
        static new_fmttype(value: string): Parameter;
        static new_from_string(value: string): Parameter;
        static new_from_value_string(kind: ParameterKind, value: string): Parameter;
        static new_gap(value: Duration): Parameter;
        static new_iana(value: string): Parameter;
        static new_id(value: string): Parameter;
        static new_label(value: string): Parameter;
        static new_language(value: string): Parameter;
        static new_latency(value: string): Parameter;
        static new_linkrel(value: string): Parameter;
        static new_local(value: ParameterLocal): Parameter;
        static new_localize(value: string): Parameter;
        static new_managedid(value: string): Parameter;
        static new_member(value: string): Parameter;
        static new_member_list(value: StrArray): Parameter;
        static new_modified(value: string): Parameter;
        static new_options(value: string): Parameter;
        static new_order(value: number): Parameter;
        static new_partstat(value: ParameterPartstat): Parameter;
        static new_patchaction(value: ParameterPatchaction): Parameter;
        static new_publiccomment(value: string): Parameter;
        static new_range(value: ParameterRange): Parameter;
        static new_reason(value: string): Parameter;
        static new_related(value: ParameterRelated): Parameter;
        static new_reltype(value: ParameterReltype): Parameter;
        static new_required(value: ParameterRequired): Parameter;
        static new_response(value: number): Parameter;
        static new_role(value: ParameterRole): Parameter;
        static new_rsvp(value: ParameterRsvp): Parameter;
        static new_scheduleagent(value: ParameterScheduleagent): Parameter;
        static new_scheduleforcesend(value: ParameterScheduleforcesend): Parameter;
        static new_schedulestatus(value: string): Parameter;
        static new_schema(value: string): Parameter;
        static new_sentby(value: string): Parameter;
        static new_size(value: string): Parameter;
        static new_stayinformed(value: ParameterStayinformed): Parameter;
        static new_substate(value: ParameterSubstate): Parameter;
        static new_tzid(value: string): Parameter;
        static new_value(value: ParameterValue): Parameter;
        static new_x(value: string): Parameter;
        static new_xliccomparetype(value: ParameterXliccomparetype): Parameter;
        static new_xlicerrortype(value: ParameterXlicerrortype): Parameter;
        connect<K extends keyof Parameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parameter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static decode_value(value: string): string;
        static enum_from_string(str: string): number;
        static enum_to_string(e: number): string;
        static kind_from_string(string: string): ParameterKind;
        static kind_is_valid(kind: ParameterKind): boolean;
        static kind_to_string(kind: ParameterKind): string;
        static kind_value_kind(kind: ParameterKind): [ValueKind, boolean];
        static value_to_value_kind(value: ParameterValue): ValueKind;
        add_delegatedfrom(value: string): void;
        add_delegatedto(value: string): void;
        add_display(value: ParameterDisplay, x_value: string | null): void;
        add_feature(value: ParameterFeature, x_value: string | null): void;
        add_member(value: string): void;
        as_ical_string(): string;
        clone(): Parameter;
        get_actionparam(): ParameterAction;
        get_altrep(): string;
        get_charset(): string;
        get_cn(): string;
        get_cutype(): ParameterCutype;
        get_delegatedfrom(): StrArray;
        get_delegatedfrom_nth(position: bigint | number): string | null;
        get_delegatedfrom_size(): number;
        get_delegatedto(): StrArray;
        get_delegatedto_nth(position: bigint | number): string | null;
        get_delegatedto_size(): number;
        get_derived(): ParameterDerived;
        get_dir(): string;
        get_display(): EnumArray;
        get_display_nth(position: bigint | number): ParameterDisplay;
        get_display_size(): number;
        get_email(): string;
        get_enable(): ParameterEnable;
        get_encoding(): ParameterEncoding;
        get_fbtype(): ParameterFbtype;
        get_feature(): EnumArray;
        get_feature_nth(position: bigint | number): ParameterFeature;
        get_feature_size(): number;
        get_filename(): string;
        get_fmttype(): string;
        get_gap(): Duration | null;
        get_iana(): string;
        get_iana_name(): string | null;
        get_iana_value(): string | null;
        get_id(): string;
        get_label(): string;
        get_language(): string;
        get_latency(): string;
        get_linkrel(): string;
        get_local(): ParameterLocal;
        get_localize(): string;
        get_managedid(): string;
        get_member(): StrArray;
        get_member_nth(position: bigint | number): string | null;
        get_member_size(): number;
        get_modified(): string;
        get_options(): string;
        get_order(): number;
        get_parent(): Property | null;
        get_partstat(): ParameterPartstat;
        get_patchaction(): ParameterPatchaction;
        get_publiccomment(): string;
        get_range(): ParameterRange;
        get_reason(): string;
        get_related(): ParameterRelated;
        get_reltype(): ParameterReltype;
        get_required(): ParameterRequired;
        get_response(): number;
        get_role(): ParameterRole;
        get_rsvp(): ParameterRsvp;
        get_scheduleagent(): ParameterScheduleagent;
        get_scheduleforcesend(): ParameterScheduleforcesend;
        get_schedulestatus(): string;
        get_schema(): string;
        get_sentby(): string;
        get_size(): string;
        get_stayinformed(): ParameterStayinformed;
        get_substate(): ParameterSubstate;
        get_tzid(): string;
        get_value(): ParameterValue;
        get_x(): string;
        get_xliccomparetype(): ParameterXliccomparetype;
        get_xlicerrortype(): ParameterXlicerrortype;
        get_xname(): string | null;
        get_xvalue(): string | null;
        has_same_name(param2: Parameter): boolean;
        is_multivalued(): boolean;
        isa(): ParameterKind;
        isa_parameter(): boolean;
        remove_delegatedfrom(value: string): void;
        remove_delegatedto(value: string): void;
        remove_display(value: ParameterDisplay, x_value: string | null): void;
        remove_feature(value: ParameterFeature, x_value: string | null): void;
        remove_member(value: string): void;
        set_actionparam(value: ParameterAction): void;
        set_altrep(value: string): void;
        set_charset(value: string): void;
        set_cn(value: string): void;
        set_cutype(value: ParameterCutype): void;
        set_delegatedfrom(value: StrArray): void;
        set_delegatedto(value: StrArray): void;
        set_derived(value: ParameterDerived): void;
        set_dir(value: string): void;
        set_display(value: EnumArray): void;
        set_email(value: string): void;
        set_enable(value: ParameterEnable): void;
        set_encoding(value: ParameterEncoding): void;
        set_fbtype(value: ParameterFbtype): void;
        set_feature(value: EnumArray): void;
        set_filename(value: string): void;
        set_fmttype(value: string): void;
        set_gap(value: Duration): void;
        set_iana(value: string): void;
        set_iana_name(v: string): void;
        set_iana_value(v: string): void;
        set_id(value: string): void;
        set_label(value: string): void;
        set_language(value: string): void;
        set_latency(value: string): void;
        set_linkrel(value: string): void;
        set_local(value: ParameterLocal): void;
        set_localize(value: string): void;
        set_managedid(value: string): void;
        set_member(value: StrArray): void;
        set_modified(value: string): void;
        set_options(value: string): void;
        set_order(value: number): void;
        set_parent(property: Property | null): void;
        set_partstat(value: ParameterPartstat): void;
        set_patchaction(value: ParameterPatchaction): void;
        set_publiccomment(value: string): void;
        set_range(value: ParameterRange): void;
        set_reason(value: string): void;
        set_related(value: ParameterRelated): void;
        set_reltype(value: ParameterReltype): void;
        set_required(value: ParameterRequired): void;
        set_response(value: number): void;
        set_role(value: ParameterRole): void;
        set_rsvp(value: ParameterRsvp): void;
        set_scheduleagent(value: ParameterScheduleagent): void;
        set_scheduleforcesend(value: ParameterScheduleforcesend): void;
        set_schedulestatus(value: string): void;
        set_schema(value: string): void;
        set_sentby(value: string): void;
        set_size(value: string): void;
        set_stayinformed(value: ParameterStayinformed): void;
        set_substate(value: ParameterSubstate): void;
        set_tzid(value: string): void;
        set_value(value: ParameterValue): void;
        set_x(value: string): void;
        set_xliccomparetype(value: ParameterXliccomparetype): void;
        set_xlicerrortype(value: ParameterXlicerrortype): void;
        set_xname(v: string): void;
        set_xvalue(v: string): void;
    }
    namespace Parser {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Parser extends Object {
        static $gtype: GObject.GType<Parser>;
        $signals: Parser.SignalSignatures;
        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Parser;
        connect<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static get_ctrl(): ParserCtrl;
        static parse_string(str: string): Component;
        static set_ctrl(value: ParserCtrl): void;
        add_line(str: string | null): Component | null;
        clean(): Component | null;
        free(): void;
        get_line(func: ParserLineGenFunc): string;
        get_state(): ParserState;
        parse(func: ParserLineGenFunc): Component;
    }
    namespace Period {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Period extends Object {
        static $gtype: GObject.GType<Period>;
        $signals: Period.SignalSignatures;
        constructor(properties?: Partial<Period.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_string(str: string): Period;
        static new_null_period(): Period;
        connect<K extends keyof Period.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Period.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Period.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Period.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        as_ical_string(): string;
        get_duration(): Duration;
        get_end(): Time;
        get_start(): Time;
        is_null_period(): boolean;
        is_valid_period(): boolean;
        set_duration(duration: Duration): void;
        set_end(end: Time): void;
        set_start(start: Time): void;
    }
    namespace PropIter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class PropIter extends Object {
        static $gtype: GObject.GType<PropIter>;
        $signals: PropIter.SignalSignatures;
        constructor(properties?: Partial<PropIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof PropIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        deref(): Property;
        is_valid(): boolean;
        next(): Property;
    }
    namespace Property {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Property extends Object {
        static $gtype: GObject.GType<Property>;
        $signals: Property.SignalSignatures;
        constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: PropertyKind): Property;
        static new_acceptresponse(value: string): Property;
        static new_acknowledged(value: Time): Property;
        static new_action(value: PropertyAction): Property;
        static new_allowconflict(value: string): Property;
        static new_attach(value: Attach): Property;
        static new_attendee(value: string): Property;
        static new_busytype(value: PropertyBusytype): Property;
        static new_calendaraddress(value: string): Property;
        static new_calid(value: string): Property;
        static new_calmaster(value: string): Property;
        static new_calscale(value: string): Property;
        static new_capversion(value: string): Property;
        static new_carid(value: string): Property;
        static new_carlevel(value: PropertyCarlevel): Property;
        static new_categories(value: string): Property;
        static new_class(value: PropertyClassenum): Property;
        static new_cmd(value: PropertyCmd): Property;
        static new_color(value: string): Property;
        static new_comment(value: string): Property;
        static new_completed(value: Time): Property;
        static new_components(value: string): Property;
        static new_concept(value: string): Property;
        static new_conference(value: string): Property;
        static new_contact(value: string): Property;
        static new_created(value: Time): Property;
        static new_csid(value: string): Property;
        static new_datemax(value: Time): Property;
        static new_datemin(value: Time): Property;
        static new_decreed(value: string): Property;
        static new_defaultcharset(value: string): Property;
        static new_defaultlocale(value: string): Property;
        static new_defaulttzid(value: string): Property;
        static new_defaultvcars(value: string): Property;
        static new_deny(value: string): Property;
        static new_description(value: string): Property;
        static new_dtend(value: Time): Property;
        static new_dtstamp(value: Time): Property;
        static new_dtstart(value: Time): Property;
        static new_due(value: Time): Property;
        static new_duration(value: Duration): Property;
        static new_estimatedduration(value: Duration): Property;
        static new_exdate(value: Time): Property;
        static new_expand(value: number): Property;
        static new_exrule(value: Recurrence): Property;
        static new_freebusy(value: Period): Property;
        static new_from_string(str: string): Property;
        static new_geo(value: Geo): Property;
        static new_grant(value: string): Property;
        static new_iana(value: string): Property;
        static new_image(value: Attach): Property;
        static new_itipversion(value: string): Property;
        static new_lastmodified(value: Time): Property;
        static new_link(value: string): Property;
        static new_location(value: string): Property;
        static new_locationtype(value: string): Property;
        static new_maxcomponentsize(value: number): Property;
        static new_maxdate(value: Time): Property;
        static new_maxresults(value: number): Property;
        static new_maxresultssize(value: number): Property;
        static new_method(value: PropertyMethod): Property;
        static new_mindate(value: Time): Property;
        static new_multipart(value: string): Property;
        static new_name(value: string): Property;
        static new_organizer(value: string): Property;
        static new_owner(value: string): Property;
        static new_participanttype(value: PropertyParticipanttype): Property;
        static new_patchdelete(value: string): Property;
        static new_patchorder(value: number): Property;
        static new_patchparameter(value: string): Property;
        static new_patchtarget(value: string): Property;
        static new_patchversion(value: string): Property;
        static new_percentcomplete(value: number): Property;
        static new_permission(value: string): Property;
        static new_pollcompletion(value: PropertyPollcompletion): Property;
        static new_pollitemid(value: number): Property;
        static new_pollmode(value: PropertyPollmode): Property;
        static new_pollproperties(value: string): Property;
        static new_pollwinner(value: number): Property;
        static new_priority(value: number): Property;
        static new_prodid(value: string): Property;
        static new_proximity(value: PropertyProximity): Property;
        static new_query(value: string): Property;
        static new_queryid(value: string): Property;
        static new_querylevel(value: PropertyQuerylevel): Property;
        static new_queryname(value: string): Property;
        static new_rdate(value: Datetimeperiod): Property;
        static new_recuraccepted(value: string): Property;
        static new_recurexpand(value: string): Property;
        static new_recurlimit(value: string): Property;
        static new_recurrenceid(value: Time): Property;
        static new_refid(value: string): Property;
        static new_refreshinterval(value: Duration): Property;
        static new_relatedto(value: string): Property;
        static new_relcalid(value: string): Property;
        static new_repeat(value: number): Property;
        static new_replyurl(value: string): Property;
        static new_requeststatus(value: Reqstat): Property;
        static new_resources(value: string): Property;
        static new_resourcetype(value: PropertyResourcetype): Property;
        static new_response(value: number): Property;
        static new_restriction(value: string): Property;
        static new_rrule(value: Recurrence): Property;
        static new_scope(value: string): Property;
        static new_sequence(value: number): Property;
        static new_source(value: string): Property;
        static new_status(value: PropertyStatus): Property;
        static new_storesexpanded(value: string): Property;
        static new_structureddata(value: Attach): Property;
        static new_styleddescription(value: string): Property;
        static new_summary(value: string): Property;
        static new_target(value: string): Property;
        static new_taskmode(value: PropertyTaskmode): Property;
        static new_transp(value: PropertyTransp): Property;
        static new_trigger(value: Trigger): Property;
        static new_tzid(value: string): Property;
        static new_tzidaliasof(value: string): Property;
        static new_tzname(value: string): Property;
        static new_tzoffsetfrom(value: number): Property;
        static new_tzoffsetto(value: number): Property;
        static new_tzuntil(value: Time): Property;
        static new_tzurl(value: string): Property;
        static new_uid(value: string): Property;
        static new_url(value: string): Property;
        static new_version(value: string): Property;
        static new_voter(value: string): Property;
        static new_x(value: string): Property;
        static new_xlicclass(value: PropertyXlicclass): Property;
        static new_xlicclustercount(value: string): Property;
        static new_xlicerror(value: string): Property;
        static new_xlicmimecharset(value: string): Property;
        static new_xlicmimecid(value: string): Property;
        static new_xlicmimecontenttype(value: string): Property;
        static new_xlicmimeencoding(value: string): Property;
        static new_xlicmimefilename(value: string): Property;
        static new_xlicmimeoptinfo(value: string): Property;
        connect<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Property.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Property.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static action_from_string(str: string): PropertyAction;
        static action_to_string(value: PropertyAction): string;
        static classenum_from_string(str: string): PropertyClassenum;
        static classenum_to_string(value: PropertyClassenum): string;
        static enum_to_string(e: number): string;
        static get_allow_empty_properties(): boolean;
        static kind_and_string_to_enum(kind: number, str: string): number;
        static kind_from_string(string: string): PropertyKind;
        static kind_has_property(kind: PropertyKind, e: number): boolean;
        static kind_is_valid(kind: PropertyKind): boolean;
        static kind_to_string(kind: PropertyKind): string;
        static kind_to_value_kind(kind: PropertyKind): ValueKind;
        static method_from_string(str: string): PropertyMethod;
        static method_to_string(method: PropertyMethod): string;
        static participanttype_from_string(str: string): PropertyParticipanttype;
        static participanttype_to_string(value: PropertyParticipanttype): string;
        static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;
        static resourcetype_from_string(str: string): PropertyResourcetype;
        static resourcetype_to_string(value: PropertyResourcetype): string;
        static set_allow_empty_properties(value: boolean): void;
        static status_from_string(str: string): PropertyStatus;
        static status_to_string(method: PropertyStatus): string;
        static transp_from_string(str: string): PropertyTransp;
        static transp_to_string(value: PropertyTransp): string;
        add_parameter(parameter: Parameter): void;
        as_ical_string(): string;
        begin_parameter(kind: ParameterKind): ParamIter;
        clone(): Property;
        count_parameters(): number;
        get_acceptresponse(): string;
        get_acknowledged(): Time;
        get_action(): PropertyAction;
        get_allowconflict(): string;
        get_attach(): Attach;
        get_attendee(): string;
        get_busytype(): PropertyBusytype;
        get_calendaraddress(): string;
        get_calid(): string;
        get_calmaster(): string;
        get_calscale(): string;
        get_capversion(): string;
        get_carid(): string;
        get_carlevel(): PropertyCarlevel;
        get_categories(): string;
        get_class(): PropertyClassenum;
        get_cmd(): PropertyCmd;
        get_color(): string;
        get_comment(): string;
        get_completed(): Time;
        get_components(): string;
        get_concept(): string;
        get_conference(): string;
        get_contact(): string;
        get_created(): Time;
        get_csid(): string;
        get_datemax(): Time;
        get_datemin(): Time;
        get_datetime_with_component(comp: Component | null): Time;
        get_decreed(): string;
        get_defaultcharset(): string;
        get_defaultlocale(): string;
        get_defaulttzid(): string;
        get_defaultvcars(): string;
        get_deny(): string;
        get_description(): string;
        get_dtend(): Time;
        get_dtstamp(): Time;
        get_dtstart(): Time;
        get_due(): Time;
        get_duration(): Duration;
        get_estimatedduration(): Duration;
        get_exdate(): Time;
        get_expand(): number;
        get_exrule(): Recurrence;
        get_first_parameter(kind: ParameterKind): Parameter;
        get_freebusy(): Period;
        get_geo(): Geo;
        get_grant(): string;
        get_iana(): string;
        get_iana_name(): string | null;
        get_image(): Attach;
        get_itipversion(): string;
        get_lastmodified(): Time;
        get_link(): string;
        get_location(): string;
        get_locationtype(): string;
        get_maxcomponentsize(): number;
        get_maxdate(): Time;
        get_maxresults(): number;
        get_maxresultssize(): number;
        get_method(): PropertyMethod;
        get_mindate(): Time;
        get_multipart(): string;
        get_name(): string;
        get_next_parameter(kind: ParameterKind): Parameter;
        get_organizer(): string;
        get_owner(): string;
        get_parameter_as_string(name: string): string;
        get_parent(): Component | null;
        get_participanttype(): PropertyParticipanttype;
        get_patchdelete(): string;
        get_patchorder(): number;
        get_patchparameter(): string;
        get_patchtarget(): string;
        get_patchversion(): string;
        get_percentcomplete(): number;
        get_permission(): string;
        get_pollcompletion(): PropertyPollcompletion;
        get_pollitemid(): number;
        get_pollmode(): PropertyPollmode;
        get_pollproperties(): string;
        get_pollwinner(): number;
        get_priority(): number;
        get_prodid(): string;
        get_property_name(): string;
        get_proximity(): PropertyProximity;
        get_query(): string;
        get_queryid(): string;
        get_querylevel(): PropertyQuerylevel;
        get_queryname(): string;
        get_rdate(): Datetimeperiod;
        get_recuraccepted(): string;
        get_recurexpand(): string;
        get_recurlimit(): string;
        get_recurrenceid(): Time;
        get_refid(): string;
        get_refreshinterval(): Duration;
        get_relatedto(): string;
        get_relcalid(): string;
        get_repeat(): number;
        get_replyurl(): string;
        get_requeststatus(): Reqstat;
        get_resources(): string;
        get_resourcetype(): PropertyResourcetype;
        get_response(): number;
        get_restriction(): string;
        get_rrule(): Recurrence;
        get_scope(): string;
        get_sequence(): number;
        get_source(): string;
        get_status(): PropertyStatus;
        get_storesexpanded(): string;
        get_structureddata(): Attach;
        get_styleddescription(): string;
        get_summary(): string;
        get_target(): string;
        get_taskmode(): PropertyTaskmode;
        get_transp(): PropertyTransp;
        get_trigger(): Trigger;
        get_tzid(): string;
        get_tzidaliasof(): string;
        get_tzname(): string;
        get_tzoffsetfrom(): number;
        get_tzoffsetto(): number;
        get_tzuntil(): Time;
        get_tzurl(): string;
        get_uid(): string;
        get_url(): string;
        get_value(): Value;
        get_value_as_string(): string;
        get_version(): string;
        get_voter(): string;
        get_x(): string;
        get_x_name(): string | null;
        get_xlicclass(): PropertyXlicclass;
        get_xlicclustercount(): string;
        get_xlicerror(): string;
        get_xlicmimecharset(): string;
        get_xlicmimecid(): string;
        get_xlicmimecontenttype(): string;
        get_xlicmimeencoding(): string;
        get_xlicmimefilename(): string;
        get_xlicmimeoptinfo(): string;
        isa(): PropertyKind;
        isa_property(): boolean;
        normalize(): void;
        remove_parameter_by_kind(kind: ParameterKind): void;
        remove_parameter_by_name(name: string): void;
        remove_parameter_by_ref(param: Parameter): void;
        set_acceptresponse(value: string): void;
        set_acknowledged(value: Time): void;
        set_action(value: PropertyAction): void;
        set_allowconflict(value: string): void;
        set_attach(value: Attach): void;
        set_attendee(value: string): void;
        set_busytype(value: PropertyBusytype): void;
        set_calendaraddress(value: string): void;
        set_calid(value: string): void;
        set_calmaster(value: string): void;
        set_calscale(value: string): void;
        set_capversion(value: string): void;
        set_carid(value: string): void;
        set_carlevel(value: PropertyCarlevel): void;
        set_categories(value: string): void;
        set_class(value: PropertyClassenum): void;
        set_cmd(value: PropertyCmd): void;
        set_color(value: string): void;
        set_comment(value: string): void;
        set_completed(value: Time): void;
        set_components(value: string): void;
        set_concept(value: string): void;
        set_conference(value: string): void;
        set_contact(value: string): void;
        set_created(value: Time): void;
        set_csid(value: string): void;
        set_datemax(value: Time): void;
        set_datemin(value: Time): void;
        set_decreed(value: string): void;
        set_defaultcharset(value: string): void;
        set_defaultlocale(value: string): void;
        set_defaulttzid(value: string): void;
        set_defaultvcars(value: string): void;
        set_deny(value: string): void;
        set_description(value: string): void;
        set_dtend(value: Time): void;
        set_dtstamp(value: Time): void;
        set_dtstart(value: Time): void;
        set_due(value: Time): void;
        set_duration(value: Duration): void;
        set_estimatedduration(value: Duration): void;
        set_exdate(value: Time): void;
        set_expand(value: number): void;
        set_exrule(value: Recurrence): void;
        set_freebusy(value: Period): void;
        set_geo(value: Geo): void;
        set_grant(value: string): void;
        set_iana(value: string): void;
        set_iana_name(name: string): void;
        set_image(value: Attach): void;
        set_itipversion(value: string): void;
        set_lastmodified(value: Time): void;
        set_link(value: string): void;
        set_location(value: string): void;
        set_locationtype(value: string): void;
        set_maxcomponentsize(value: number): void;
        set_maxdate(value: Time): void;
        set_maxresults(value: number): void;
        set_maxresultssize(value: number): void;
        set_method(value: PropertyMethod): void;
        set_mindate(value: Time): void;
        set_multipart(value: string): void;
        set_name(value: string): void;
        set_organizer(value: string): void;
        set_owner(value: string): void;
        set_owner(...args: never[]): any;
        set_parameter(parameter: Parameter): void;
        set_parameter_from_string(name: string, value: string): void;
        set_parent(component: Component | null): void;
        set_participanttype(value: PropertyParticipanttype): void;
        set_patchdelete(value: string): void;
        set_patchorder(value: number): void;
        set_patchparameter(value: string): void;
        set_patchtarget(value: string): void;
        set_patchversion(value: string): void;
        set_percentcomplete(value: number): void;
        set_permission(value: string): void;
        set_pollcompletion(value: PropertyPollcompletion): void;
        set_pollitemid(value: number): void;
        set_pollmode(value: PropertyPollmode): void;
        set_pollproperties(value: string): void;
        set_pollwinner(value: number): void;
        set_priority(value: number): void;
        set_prodid(value: string): void;
        set_proximity(value: PropertyProximity): void;
        set_query(value: string): void;
        set_queryid(value: string): void;
        set_querylevel(value: PropertyQuerylevel): void;
        set_queryname(value: string): void;
        set_rdate(value: Datetimeperiod): void;
        set_recuraccepted(value: string): void;
        set_recurexpand(value: string): void;
        set_recurlimit(value: string): void;
        set_recurrenceid(value: Time): void;
        set_refid(value: string): void;
        set_refreshinterval(value: Duration): void;
        set_relatedto(value: string): void;
        set_relcalid(value: string): void;
        set_repeat(value: number): void;
        set_replyurl(value: string): void;
        set_requeststatus(value: Reqstat): void;
        set_resources(value: string): void;
        set_resourcetype(value: PropertyResourcetype): void;
        set_response(value: number): void;
        set_restriction(value: string): void;
        set_rrule(value: Recurrence): void;
        set_scope(value: string): void;
        set_sequence(value: number): void;
        set_source(value: string): void;
        set_status(value: PropertyStatus): void;
        set_storesexpanded(value: string): void;
        set_structureddata(value: Attach): void;
        set_styleddescription(value: string): void;
        set_summary(value: string): void;
        set_target(value: string): void;
        set_taskmode(value: PropertyTaskmode): void;
        set_transp(value: PropertyTransp): void;
        set_trigger(value: Trigger): void;
        set_tzid(value: string): void;
        set_tzidaliasof(value: string): void;
        set_tzname(value: string): void;
        set_tzoffsetfrom(value: number): void;
        set_tzoffsetto(value: number): void;
        set_tzuntil(value: Time): void;
        set_tzurl(value: string): void;
        set_uid(value: string): void;
        set_url(value: string): void;
        set_value(value: Value): void;
        set_value_from_string(value: string, kind: string): void;
        set_version(value: string): void;
        set_voter(value: string): void;
        set_x(value: string): void;
        set_x_name(name: string): void;
        set_xlicclass(value: PropertyXlicclass): void;
        set_xlicclustercount(value: string): void;
        set_xlicerror(value: string): void;
        set_xlicmimecharset(value: string): void;
        set_xlicmimecid(value: string): void;
        set_xlicmimecontenttype(value: string): void;
        set_xlicmimeencoding(value: string): void;
        set_xlicmimefilename(value: string): void;
        set_xlicmimeoptinfo(value: string): void;
    }
    namespace RecurIterator {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class RecurIterator extends Object {
        static $gtype: GObject.GType<RecurIterator>;
        $signals: RecurIterator.SignalSignatures;
        constructor(properties?: Partial<RecurIterator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](rule: Recurrence, dtstart: Time): RecurIterator;
        connect<K extends keyof RecurIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RecurIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RecurIterator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RecurIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        next(): Time;
        prev(): Time;
        set_end(end: Time): boolean;
        set_range(from: Time, to: Time): boolean;
        set_start(start: Time): boolean;
    }
    namespace Recurrence {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Recurrence extends Object {
        static $gtype: GObject.GType<Recurrence>;
        $signals: Recurrence.SignalSignatures;
        constructor(properties?: Partial<Recurrence.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Recurrence;
        static new_from_string(str: string): Recurrence;
        connect<K extends keyof Recurrence.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Recurrence.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Recurrence.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Recurrence.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static day_day_of_week(day: number): RecurrenceWeekday;
        static day_position(day: number): number;
        static encode_day(weekday: RecurrenceWeekday, position: number): number;
        static encode_month(month: number, is_leap: boolean): number;
        static frequency_from_string(str: string): RecurrenceFrequency;
        static frequency_to_string(kind: RecurrenceFrequency): string;
        static month_is_leap(month: number): boolean;
        static month_month(month: number): number;
        static rscale_supported_calendars(): Array;
        static skip_from_string(str: string): RecurrenceSkip;
        static skip_to_string(kind: RecurrenceSkip): string;
        static weekday_from_string(str: string): RecurrenceWeekday;
        static weekday_to_string(kind: RecurrenceWeekday): string;
        clone(): Recurrence;
        get_by(byrule: RecurrenceByRule, index: number): number;
        get_by_array(byrule: RecurrenceByRule): number[];
        get_by_array_size(byrule: RecurrenceByRule): number;
        get_count(): number;
        get_freq(): RecurrenceFrequency;
        get_interval(): number;
        get_until(): Time;
        get_week_start(): RecurrenceWeekday;
        resize_by_array(byrule: RecurrenceByRule, size: number): void;
        set_by(byrule: RecurrenceByRule, index: number, value: number): void;
        set_by_array(byrule: RecurrenceByRule, values: number[]): void;
        set_count(count: number): void;
        set_freq(freq: RecurrenceFrequency): void;
        set_interval(interval: number): void;
        set_until(until: Time): void;
        set_week_start(week_start: RecurrenceWeekday): void;
        to_string(): string;
    }
    namespace Reqstat {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Reqstat extends Object {
        static $gtype: GObject.GType<Reqstat>;
        $signals: Reqstat.SignalSignatures;
        constructor(properties?: Partial<Reqstat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_string(str: string): Reqstat;
        connect<K extends keyof Reqstat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Reqstat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Reqstat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Reqstat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_code(): RequestStatus;
        get_debug(): string;
        get_desc(): string;
        set_code(code: RequestStatus): void;
        to_string(): string;
    }
    namespace StrArray {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class StrArray extends Object {
        static $gtype: GObject.GType<StrArray>;
        $signals: StrArray.SignalSignatures;
        constructor(properties?: Partial<StrArray.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](increment_size: number): StrArray;
        connect<K extends keyof StrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StrArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StrArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): StrArray;
        remove(value: string): void;
        remove_element_at(position: bigint | number): void;
        size(): number;
    }
    namespace Time {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Time extends Object {
        static $gtype: GObject.GType<Time>;
        $signals: Time.SignalSignatures;
        constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Time;
        static new_current_with_zone(zone: Timezone | null): Time;
        static new_from_day_of_year(day: number, year: number): Time;
        static new_from_string(str: string): Time;
        static new_from_timet_with_zone(v: bigint | number, is_date: boolean, zone: Timezone | null): Time;
        static new_null_date(): Time;
        static new_null_time(): Time;
        static new_today(): Time;
        connect<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Time.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Time.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static days_in_month(month: number, year: number): number;
        static days_in_year(year: number): number;
        static days_is_leap_year(year: number): boolean;
        static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;
        adjust(days: number, hours: number, minutes: number, seconds: number): void;
        as_ical_string(): string;
        as_timet(): number;
        as_timet_with_zone(zone: Timezone | null): number;
        clone(): Time;
        compare(b: Time): number;
        compare_date_only(b: Time): number;
        compare_date_only_tz(b: Time, zone: Timezone | null): number;
        convert_timezone(from_zone: Timezone | null, to_zone: Timezone | null): void;
        convert_to_zone(zone: Timezone | null): Time;
        convert_to_zone_inplace(zone: Timezone | null): void;
        day_of_week(): number;
        day_of_year(): number;
        get_date(): [number, number, number];
        get_day(): number;
        get_hour(): number;
        get_minute(): number;
        get_month(): number;
        get_second(): number;
        get_time(): [number, number, number];
        get_timezone(): Timezone;
        get_tzid(): string | null;
        get_year(): number;
        is_date(): boolean;
        is_daylight(): boolean;
        is_null_time(): boolean;
        is_utc(): boolean;
        is_valid_time(): boolean;
        normalize(): Time;
        normalize_inplace(): void;
        set_date(year: number, month: number, day: number): void;
        set_day(day: number): void;
        set_hour(hour: number): void;
        set_is_date(is_date: boolean): void;
        set_is_daylight(is_daylight: boolean): void;
        set_minute(minute: number): void;
        set_month(month: number): void;
        set_second(second: number): void;
        set_time(hour: number, minute: number, second: number): void;
        set_timezone(zone: Timezone | null): void;
        set_year(year: number): void;
        start_doy_week(fdow: number): number;
    }
    namespace TimeSpan {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class TimeSpan extends Object {
        static $gtype: GObject.GType<TimeSpan>;
        $signals: TimeSpan.SignalSignatures;
        constructor(properties?: Partial<TimeSpan.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](dtstart: Time, dtend: Time, is_busy: number): TimeSpan;
        static new_timet(start: bigint | number, end: bigint | number, is_busy: boolean): TimeSpan;
        connect<K extends keyof TimeSpan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TimeSpan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TimeSpan.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimeSpan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): TimeSpan;
        contains(container: TimeSpan): number;
        get_end(): number;
        get_is_busy(): boolean;
        get_start(): number;
        overlaps(s2: TimeSpan): number;
        set_end(end: bigint | number): void;
        set_is_busy(is_busy: boolean): void;
        set_start(start: bigint | number): void;
    }
    namespace Timezone {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Timezone extends Object {
        static $gtype: GObject.GType<Timezone>;
        $signals: Timezone.SignalSignatures;
        constructor(properties?: Partial<Timezone.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Timezone;
        connect<K extends keyof Timezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Timezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Timezone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Timezone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static array_element_at(timezones: Array, index: number): Timezone;
        static free_builtin_timezones(): void;
        static free_zone_directory(): void;
        static get_builtin_timezone(location: string | null): Timezone | null;
        static get_builtin_timezone_from_offset(offset: number, tzname: string | null): Timezone;
        static get_builtin_timezone_from_tzid(tzid: string | null): Timezone;
        static get_builtin_timezones(): Array;
        static get_builtin_tzdata(): boolean;
        static get_location_from_vtimezone(component: Component): string | null;
        static get_system_zone_directory(): string;
        static get_tzid_prefix(): string;
        static get_tznames_from_vtimezone(component: Component): string | null;
        static get_utc_timezone(): Timezone;
        static get_zone_directory(): string;
        static set_builtin_tzdata(set: boolean): void;
        static set_system_zone_directory(path: string): void;
        static set_tzid_prefix(new_prefix: string): void;
        static set_zone_directory(path: string): void;
        static truncate_vtimezone(comp: Component, start: Time, end: Time, ms_compatible: boolean): void;
        copy(): Timezone;
        dump_changes(max_year: number, fp: null): boolean;
        get_component(): Component;
        get_display_name(): string;
        get_latitude(): number;
        get_location(): string | null;
        get_longitude(): number;
        get_tzid(): string | null;
        get_tznames(): string | null;
        get_utc_offset(tt: Time | null): [number, number];
        get_utc_offset_of_utc_time(tt: Time): [number, number];
        set_component(comp: Component): number;
    }
    namespace Trigger {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Trigger extends Object {
        static $gtype: GObject.GType<Trigger>;
        $signals: Trigger.SignalSignatures;
        constructor(properties?: Partial<Trigger.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_seconds(reltime: number): Trigger;
        static new_from_string(str: string): Trigger;
        connect<K extends keyof Trigger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Trigger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Trigger.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Trigger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_duration(): Duration;
        get_time(): Time;
        is_bad_trigger(): boolean;
        is_null_trigger(): boolean;
        set_duration(duration: Duration): void;
        set_time(time: Time): void;
    }
    namespace Value {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class Value extends Object {
        static $gtype: GObject.GType<Value>;
        $signals: Value.SignalSignatures;
        constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: ValueKind): Value;
        static new_action(value: PropertyAction): Value;
        static new_attach(value: Attach): Value;
        static new_binary(value: string): Value;
        static new_boolean(value: boolean): Value;
        static new_busytype(value: PropertyBusytype): Value;
        static new_caladdress(value: string): Value;
        static new_carlevel(value: PropertyCarlevel): Value;
        static new_class(value: PropertyClassenum): Value;
        static new_cmd(value: PropertyCmd): Value;
        static new_color(value: string): Value;
        static new_date(value: Time): Value;
        static new_datetime(value: Time): Value;
        static new_datetimedate(value: Time): Value;
        static new_datetimeperiod(value: Datetimeperiod): Value;
        static new_duration(value: Duration): Value;
        static new_float(value: number): Value;
        static new_from_string(kind: ValueKind, str: string): Value;
        static new_geo(value: Geo): Value;
        static new_integer(value: number): Value;
        static new_method(value: PropertyMethod): Value;
        static new_participanttype(value: PropertyParticipanttype): Value;
        static new_period(value: Period): Value;
        static new_pollcompletion(value: PropertyPollcompletion): Value;
        static new_pollmode(value: PropertyPollmode): Value;
        static new_proximity(value: PropertyProximity): Value;
        static new_query(value: string): Value;
        static new_querylevel(value: PropertyQuerylevel): Value;
        static new_recur(value: Recurrence): Value;
        static new_requeststatus(value: Reqstat): Value;
        static new_resourcetype(value: PropertyResourcetype): Value;
        static new_status(value: PropertyStatus): Value;
        static new_string(value: string): Value;
        static new_taskmode(value: PropertyTaskmode): Value;
        static new_text(value: string): Value;
        static new_transp(value: PropertyTransp): Value;
        static new_trigger(value: Trigger): Value;
        static new_uid(value: string): Value;
        static new_uri(value: string): Value;
        static new_utcoffset(value: number): Value;
        static new_x(value: string): Value;
        static new_xlicclass(value: PropertyXlicclass): Value;
        static new_xmlreference(value: string): Value;
        connect<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Value.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Value.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static decode_ical_string(szText: string): string | null;
        static encode_ical_string(szText: string): string | null;
        static kind_from_string(str: string): ValueKind;
        static kind_is_valid(kind: ValueKind): boolean;
        static kind_to_property_kind(kind: ValueKind): PropertyKind;
        static kind_to_string(kind: ValueKind): string;
        as_ical_string(): string;
        clone(): Value;
        compare(b: Value): ParameterXliccomparetype;
        get_action(): PropertyAction;
        get_attach(): Attach;
        get_binary(): string;
        get_boolean(): boolean;
        get_busytype(): PropertyBusytype;
        get_caladdress(): string;
        get_carlevel(): PropertyCarlevel;
        get_class(): PropertyClassenum;
        get_cmd(): PropertyCmd;
        get_color(): string;
        get_date(): Time;
        get_datetime(): Time;
        get_datetimedate(): Time;
        get_datetimeperiod(): Datetimeperiod;
        get_duration(): Duration;
        get_float(): number;
        get_geo(): Geo;
        get_integer(): number;
        get_method(): PropertyMethod;
        get_parent(): Property | null;
        get_participanttype(): PropertyParticipanttype;
        get_period(): Period;
        get_pollcompletion(): PropertyPollcompletion;
        get_pollmode(): PropertyPollmode;
        get_proximity(): PropertyProximity;
        get_query(): string;
        get_querylevel(): PropertyQuerylevel;
        get_recur(): Recurrence;
        get_requeststatus(): Reqstat;
        get_resourcetype(): PropertyResourcetype;
        get_status(): PropertyStatus;
        get_string(): string;
        get_taskmode(): PropertyTaskmode;
        get_text(): string;
        get_transp(): PropertyTransp;
        get_trigger(): Trigger;
        get_uid(): string;
        get_uri(): string;
        get_utcoffset(): number;
        get_x(): string;
        get_xlicclass(): PropertyXlicclass;
        get_xmlreference(): string;
        is_valid(): boolean;
        isa(): ValueKind;
        isa_value(): boolean;
        reset_kind(): void;
        set_action(value: PropertyAction): void;
        set_attach(value: Attach): void;
        set_binary(value: string): void;
        set_boolean(value: boolean): void;
        set_busytype(value: PropertyBusytype): void;
        set_caladdress(value: string): void;
        set_carlevel(value: PropertyCarlevel): void;
        set_class(value: PropertyClassenum): void;
        set_cmd(value: PropertyCmd): void;
        set_color(value: string): void;
        set_date(value: Time): void;
        set_datetime(value: Time): void;
        set_datetimedate(value: Time): void;
        set_datetimeperiod(value: Datetimeperiod): void;
        set_duration(value: Duration): void;
        set_float(value: number): void;
        set_geo(value: Geo): void;
        set_integer(value: number): void;
        set_method(value: PropertyMethod): void;
        set_parent(property: Property | null): void;
        set_participanttype(value: PropertyParticipanttype): void;
        set_period(value: Period): void;
        set_pollcompletion(value: PropertyPollcompletion): void;
        set_pollmode(value: PropertyPollmode): void;
        set_proximity(value: PropertyProximity): void;
        set_query(value: string): void;
        set_querylevel(value: PropertyQuerylevel): void;
        set_recur(value: Recurrence): void;
        set_requeststatus(value: Reqstat): void;
        set_resourcetype(value: PropertyResourcetype): void;
        set_status(value: PropertyStatus): void;
        set_string(value: string): void;
        set_taskmode(value: PropertyTaskmode): void;
        set_text(value: string): void;
        set_transp(value: PropertyTransp): void;
        set_trigger(value: Trigger): void;
        set_uid(value: string): void;
        set_uri(value: string): void;
        set_utcoffset(value: number): void;
        set_x(value: string): void;
        set_xlicclass(value: PropertyXlicclass): void;
        set_xmlreference(value: string): void;
    }
    namespace VcardComponent {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardComponent extends Object {
        static $gtype: GObject.GType<VcardComponent>;
        $signals: VcardComponent.SignalSignatures;
        constructor(properties?: Partial<VcardComponent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: VcardComponentKind): VcardComponent;
        static new_from_string(str: string): VcardComponent;
        connect<K extends keyof VcardComponent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardComponent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardComponent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardComponent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardComponent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardComponent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static kind_from_string(string: string): VcardComponentKind;
        static kind_is_valid(kind: VcardComponentKind): boolean;
        static kind_to_string(kind: VcardComponentKind): string;
        add_component(child: VcardComponent): void;
        add_property(property: VcardProperty): void;
        as_vcard_string(): string;
        check_restrictions(): number;
        clone(): VcardComponent;
        count_components(kind: VcardComponentKind): number;
        count_errors(): number;
        count_properties(kind: VcardPropertyKind, ignore_alts: boolean): number;
        get_current_component(): VcardComponent;
        get_current_property(): VcardProperty;
        get_first_component(kind: VcardComponentKind): VcardComponent | null;
        get_first_property(kind: VcardPropertyKind): VcardProperty | null;
        get_fn(): string;
        get_next_component(kind: VcardComponentKind): VcardComponent | null;
        get_next_property(kind: VcardPropertyKind): VcardProperty | null;
        get_uid(): string;
        get_version(): VcardPropertyVersion;
        is_valid(): boolean;
        isa(): VcardComponentKind;
        isa_component(): boolean;
        normalize(): void;
        remove_component(child: VcardComponent): void;
        remove_property(property: VcardProperty): void;
        strip_errors(): void;
        transform(version: VcardPropertyVersion): void;
    }
    namespace VcardEnumArray {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardEnumArray extends Object {
        static $gtype: GObject.GType<VcardEnumArray>;
        $signals: VcardEnumArray.SignalSignatures;
        constructor(properties?: Partial<VcardEnumArray.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](increment_size: number): VcardEnumArray;
        connect<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardEnumArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardEnumArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardEnumArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): VcardEnumArray;
        remove_element_at(position: bigint | number): void;
        size(): number;
    }
    namespace VcardGeo {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardGeo extends Object {
        static $gtype: GObject.GType<VcardGeo>;
        $signals: VcardGeo.SignalSignatures;
        constructor(properties?: Partial<VcardGeo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_coords(lat: string, lon: string): VcardGeo;
        static new_uri(uri: string): VcardGeo;
        connect<K extends keyof VcardGeo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardGeo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardGeo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardGeo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardGeo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardGeo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): VcardGeo;
        get_coord_lat(): string | null;
        get_coord_lon(): string | null;
        get_coords(): [string, string];
        get_uri(): string | null;
        set_coords(lat: string, lon: string): void;
        set_uri(uri: string): void;
    }
    namespace VcardParameter {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardParameter extends Object {
        static $gtype: GObject.GType<VcardParameter>;
        $signals: VcardParameter.SignalSignatures;
        constructor(properties?: Partial<VcardParameter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: VcardParameterKind): VcardParameter;
        static new_altid(value: string): VcardParameter;
        static new_author(value: string): VcardParameter;
        static new_authorname(value: string): VcardParameter;
        static new_calscale(value: VcardParameterCalscale): VcardParameter;
        static new_cc(value: string): VcardParameter;
        static new_context(value: string): VcardParameter;
        static new_created(value: VcardTime): VcardParameter;
        static new_derived(value: VcardParameterDerived): VcardParameter;
        static new_encoding(value: VcardParameterEncoding): VcardParameter;
        static new_from_string(value: string): VcardParameter;
        static new_from_value_string(kind: VcardParameterKind, value: string): VcardParameter;
        static new_geo(value: string): VcardParameter;
        static new_iana(value: string): VcardParameter;
        static new_index(value: number): VcardParameter;
        static new_jscomps(value: VcardStructured): VcardParameter;
        static new_jsptr(value: string): VcardParameter;
        static new_label(value: string): VcardParameter;
        static new_language(value: string): VcardParameter;
        static new_level(value: VcardParameterLevel): VcardParameter;
        static new_mediatype(value: string): VcardParameter;
        static new_phonetic(value: VcardParameterPhonetic): VcardParameter;
        static new_pid(value: string): VcardParameter;
        static new_pid_list(value: VcardStrArray): VcardParameter;
        static new_pref(value: number): VcardParameter;
        static new_propid(value: string): VcardParameter;
        static new_script(value: string): VcardParameter;
        static new_servicetype(value: string): VcardParameter;
        static new_sortas(value: string): VcardParameter;
        static new_sortas_list(value: VcardStrArray): VcardParameter;
        static new_type(value: VcardParameterType): VcardParameter;
        static new_type_list(value: VcardEnumArray): VcardParameter;
        static new_tz(value: string): VcardParameter;
        static new_username(value: string): VcardParameter;
        static new_value(value: VcardParameterValue): VcardParameter;
        static new_x(value: string): VcardParameter;
        static new_xliccomparetype(value: VcardParameterXliccomparetype): VcardParameter;
        static new_xlicerrortype(value: VcardParameterXlicerrortype): VcardParameter;
        connect<K extends keyof VcardParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardParameter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardParameter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardParameter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardParameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static enum_from_string(str: string): number;
        static enum_to_string(e: number): string;
        static kind_is_valid(kind: VcardParameterKind): boolean;
        static kind_to_string(kind: VcardParameterKind): string;
        static kind_value_kind(kind: VcardParameterKind): [VcardValueKind, boolean];
        static string_to_kind(string: string): VcardParameterKind;
        static value_to_value_kind(value: VcardParameterValue): VcardValueKind;
        add_pid(value: string): void;
        add_sortas(value: string): void;
        add_type(value: VcardParameterType, x_value: string | null): void;
        add_value_from_string(value: string): void;
        as_vcard_string(): string;
        clone(): VcardParameter;
        get_altid(): string;
        get_author(): string;
        get_authorname(): string;
        get_calscale(): VcardParameterCalscale;
        get_cc(): string;
        get_context(): string;
        get_created(): VcardTime;
        get_derived(): VcardParameterDerived;
        get_encoding(): VcardParameterEncoding;
        get_geo(): string;
        get_iana(): string;
        get_iana_name(): string | null;
        get_iana_value(): string | null;
        get_index(): number;
        get_jscomps(): VcardStructured;
        get_jsptr(): string;
        get_label(): string;
        get_language(): string;
        get_level(): VcardParameterLevel;
        get_mediatype(): string;
        get_parent(): VcardProperty | null;
        get_phonetic(): VcardParameterPhonetic;
        get_pid(): VcardStrArray;
        get_pid_nth(position: bigint | number): string | null;
        get_pid_size(): number;
        get_pref(): number;
        get_propid(): string;
        get_script(): string;
        get_servicetype(): string;
        get_sortas(): VcardStrArray;
        get_sortas_nth(position: bigint | number): string | null;
        get_sortas_size(): number;
        get_type_nth(position: bigint | number): VcardParameterType;
        get_type_size(): number;
        get_type_value(): VcardEnumArray;
        get_tz(): string;
        get_username(): string;
        get_value(): VcardParameterValue;
        get_x(): string;
        get_xliccomparetype(): VcardParameterXliccomparetype;
        get_xlicerrortype(): VcardParameterXlicerrortype;
        get_xname(): string | null;
        get_xvalue(): string | null;
        has_same_name(param2: VcardParameter): boolean;
        is_multivalued(): boolean;
        is_structured(): boolean;
        isa(): VcardParameterKind;
        isa_parameter(): boolean;
        remove_pid(value: string): void;
        remove_sortas(value: string): void;
        remove_type(value: VcardParameterType, x_value: string | null): void;
        set_altid(value: string): void;
        set_author(value: string): void;
        set_authorname(value: string): void;
        set_calscale(value: VcardParameterCalscale): void;
        set_cc(value: string): void;
        set_context(value: string): void;
        set_created(value: VcardTime): void;
        set_derived(value: VcardParameterDerived): void;
        set_encoding(value: VcardParameterEncoding): void;
        set_geo(value: string): void;
        set_iana(value: string): void;
        set_iana_name(v: string): void;
        set_iana_value(v: string): void;
        set_index(value: number): void;
        set_jscomps(value: VcardStructured): void;
        set_jsptr(value: string): void;
        set_label(value: string): void;
        set_language(value: string): void;
        set_level(value: VcardParameterLevel): void;
        set_mediatype(value: string): void;
        set_parent(property: VcardProperty | null): void;
        set_phonetic(value: VcardParameterPhonetic): void;
        set_pid(value: VcardStrArray): void;
        set_pref(value: number): void;
        set_propid(value: string): void;
        set_script(value: string): void;
        set_servicetype(value: string): void;
        set_sortas(value: VcardStrArray): void;
        set_type_value(value: VcardEnumArray): void;
        set_tz(value: string): void;
        set_username(value: string): void;
        set_value(value: VcardParameterValue): void;
        set_value_from_string(value: string): void;
        set_x(value: string): void;
        set_xliccomparetype(value: VcardParameterXliccomparetype): void;
        set_xlicerrortype(value: VcardParameterXlicerrortype): void;
        set_xname(v: string): void;
        set_xvalue(v: string): void;
    }
    namespace VcardProperty {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardProperty extends Object {
        static $gtype: GObject.GType<VcardProperty>;
        $signals: VcardProperty.SignalSignatures;
        constructor(properties?: Partial<VcardProperty.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: VcardPropertyKind): VcardProperty;
        static new_adr(value: VcardStructured): VcardProperty;
        static new_agent(value: string): VcardProperty;
        static new_anniversary(value: VcardTime): VcardProperty;
        static new_bday(value: VcardTime): VcardProperty;
        static new_birthplace(value: string): VcardProperty;
        static new_caladruri(value: string): VcardProperty;
        static new_caluri(value: string): VcardProperty;
        static new_categories(value: VcardStrArray): VcardProperty;
        static new_class(value: string): VcardProperty;
        static new_clientpidmap(value: VcardStrArray): VcardProperty;
        static new_contacturi(value: string): VcardProperty;
        static new_created(value: VcardTime): VcardProperty;
        static new_deathdate(value: VcardTime): VcardProperty;
        static new_deathplace(value: string): VcardProperty;
        static new_email(value: string): VcardProperty;
        static new_expertise(value: string): VcardProperty;
        static new_fburl(value: string): VcardProperty;
        static new_fn(value: string): VcardProperty;
        static new_from_string(str: string): VcardProperty;
        static new_gender(value: VcardStrArray): VcardProperty;
        static new_geo(value: VcardGeo): VcardProperty;
        static new_gramgender(value: VcardPropertyGramgender): VcardProperty;
        static new_hobby(value: string): VcardProperty;
        static new_impp(value: string): VcardProperty;
        static new_interest(value: string): VcardProperty;
        static new_jsprop(value: string): VcardProperty;
        static new_key(value: string): VcardProperty;
        static new_kind(value: VcardPropertyKindenum): VcardProperty;
        static new_label(value: string): VcardProperty;
        static new_lang(value: string): VcardProperty;
        static new_language(value: string): VcardProperty;
        static new_logo(value: string): VcardProperty;
        static new_mailer(value: string): VcardProperty;
        static new_member(value: string): VcardProperty;
        static new_n(value: VcardStructured): VcardProperty;
        static new_name(value: string): VcardProperty;
        static new_nickname(value: VcardStrArray): VcardProperty;
        static new_note(value: string): VcardProperty;
        static new_org(value: VcardStrArray): VcardProperty;
        static new_orgdirectory(value: string): VcardProperty;
        static new_photo(value: string): VcardProperty;
        static new_prodid(value: string): VcardProperty;
        static new_pronouns(value: string): VcardProperty;
        static new_related(value: string): VcardProperty;
        static new_rev(value: VcardTime): VcardProperty;
        static new_role(value: string): VcardProperty;
        static new_socialprofile(value: string): VcardProperty;
        static new_sortstring(value: string): VcardProperty;
        static new_sound(value: string): VcardProperty;
        static new_source(value: string): VcardProperty;
        static new_tel(value: string): VcardProperty;
        static new_title(value: string): VcardProperty;
        static new_tz(value: VcardTz): VcardProperty;
        static new_uid(value: string): VcardProperty;
        static new_url(value: string): VcardProperty;
        static new_version(value: VcardPropertyVersion): VcardProperty;
        static new_x(value: string): VcardProperty;
        static new_xlicerror(value: string): VcardProperty;
        static new_xml(value: string): VcardProperty;
        connect<K extends keyof VcardProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardProperty.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardProperty.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardProperty.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardProperty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static enum_belongs_to_property(kind: VcardPropertyKind, e: number): boolean;
        static enum_to_string(e: number): string | null;
        static kind_and_string_to_enum(kind: number, str: string): number;
        static kind_from_string(string: string): VcardPropertyKind;
        static kind_is_multivalued(kind: VcardPropertyKind): boolean;
        static kind_is_structured(kind: VcardPropertyKind): boolean;
        static kind_is_valid(kind: VcardPropertyKind): boolean;
        static kind_to_string(kind: VcardPropertyKind): string;
        static kind_to_value_kind(kind: VcardPropertyKind): VcardValueKind;
        add_parameter(parameter: VcardParameter): void;
        add_type_parameter(type_param: VcardParameterType): void;
        add_type_x_parameter(type_param: string): void;
        as_vcard_string(): string;
        clone(): VcardProperty;
        count_parameters(): number;
        get_adr(): VcardStructured;
        get_agent(): string;
        get_anniversary(): VcardTime;
        get_bday(): VcardTime;
        get_birthplace(): string;
        get_caladruri(): string;
        get_caluri(): string;
        get_categories(): VcardStrArray;
        get_class(): string;
        get_clientpidmap(): VcardStrArray;
        get_contacturi(): string;
        get_created(): VcardTime;
        get_deathdate(): VcardTime;
        get_deathplace(): string;
        get_email(): string;
        get_expertise(): string;
        get_fburl(): string;
        get_first_parameter(kind: VcardParameterKind): VcardParameter;
        get_fn(): string;
        get_gender(): VcardStrArray;
        get_geo(): VcardGeo;
        get_gramgender(): VcardPropertyGramgender;
        get_group(): string | null;
        get_hobby(): string;
        get_impp(): string;
        get_interest(): string;
        get_jsprop(): string;
        get_key(): string;
        get_kind(): VcardPropertyKindenum;
        get_label(): string;
        get_lang(): string;
        get_language(): string;
        get_logo(): string;
        get_mailer(): string;
        get_member(): string;
        get_n(): VcardStructured;
        get_name(): string;
        get_next_parameter(kind: VcardParameterKind): VcardParameter;
        get_nickname(): VcardStrArray;
        get_note(): string;
        get_org(): VcardStrArray;
        get_orgdirectory(): string;
        get_parameter_as_string(name: string): string;
        get_parent(): VcardComponent | null;
        get_photo(): string;
        get_prodid(): string;
        get_pronouns(): string;
        get_property_name(): string;
        get_related(): string;
        get_rev(): VcardTime;
        get_role(): string;
        get_socialprofile(): string;
        get_sortstring(): string;
        get_sound(): string;
        get_source(): string;
        get_tel(): string;
        get_title(): string;
        get_tz(): VcardTz;
        get_uid(): string;
        get_url(): string;
        get_value(): VcardValue;
        get_value_as_string(): string;
        get_version(): VcardPropertyVersion;
        get_x(): string;
        get_x_name(): string | null;
        get_xlicerror(): string;
        get_xml(): string;
        isa(): VcardPropertyKind;
        isa_property(): boolean;
        normalize(): void;
        remove_parameter_by_kind(kind: VcardParameterKind): void;
        remove_parameter_by_name(name: string): void;
        remove_parameter_by_ref(param: VcardParameter): void;
        set_adr(value: VcardStructured): void;
        set_agent(value: string): void;
        set_anniversary(value: VcardTime): void;
        set_bday(value: VcardTime): void;
        set_birthplace(value: string): void;
        set_caladruri(value: string): void;
        set_caluri(value: string): void;
        set_categories(value: VcardStrArray): void;
        set_class(value: string): void;
        set_clientpidmap(value: VcardStrArray): void;
        set_contacturi(value: string): void;
        set_created(value: VcardTime): void;
        set_deathdate(value: VcardTime): void;
        set_deathplace(value: string): void;
        set_email(value: string): void;
        set_expertise(value: string): void;
        set_fburl(value: string): void;
        set_fn(value: string): void;
        set_gender(value: VcardStrArray): void;
        set_geo(value: VcardGeo): void;
        set_gramgender(value: VcardPropertyGramgender): void;
        set_group(group: string): void;
        set_hobby(value: string): void;
        set_impp(value: string): void;
        set_interest(value: string): void;
        set_jsprop(value: string): void;
        set_key(value: string): void;
        set_kind(value: VcardPropertyKindenum): void;
        set_label(value: string): void;
        set_lang(value: string): void;
        set_language(value: string): void;
        set_logo(value: string): void;
        set_mailer(value: string): void;
        set_member(value: string): void;
        set_n(value: VcardStructured): void;
        set_name(value: string): void;
        set_nickname(value: VcardStrArray): void;
        set_note(value: string): void;
        set_org(value: VcardStrArray): void;
        set_orgdirectory(value: string): void;
        set_parameter(parameter: VcardParameter): void;
        set_parameter_from_string(name: string, value: string): void;
        set_parent(component: VcardComponent | null): void;
        set_photo(value: string): void;
        set_prodid(value: string): void;
        set_pronouns(value: string): void;
        set_related(value: string): void;
        set_rev(value: VcardTime): void;
        set_role(value: string): void;
        set_socialprofile(value: string): void;
        set_sortstring(value: string): void;
        set_sound(value: string): void;
        set_source(value: string): void;
        set_tel(value: string): void;
        set_title(value: string): void;
        set_tz(value: VcardTz): void;
        set_uid(value: string): void;
        set_url(value: string): void;
        set_value(value: VcardValue): void;
        set_value_from_string(value: string, kind: string): void;
        set_version(value: VcardPropertyVersion): void;
        set_x(value: string): void;
        set_x_name(name: string): void;
        set_xlicerror(value: string): void;
        set_xml(value: string): void;
    }
    namespace VcardStrArray {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardStrArray extends Object {
        static $gtype: GObject.GType<VcardStrArray>;
        $signals: VcardStrArray.SignalSignatures;
        constructor(properties?: Partial<VcardStrArray.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](increment_size: number): VcardStrArray;
        connect<K extends keyof VcardStrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStrArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardStrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStrArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardStrArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardStrArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): VcardStrArray;
        remove(value: string): void;
        remove_element_at(position: bigint | number): void;
        size(): number;
    }
    namespace VcardStructured {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardStructured extends Object {
        static $gtype: GObject.GType<VcardStructured>;
        $signals: VcardStructured.SignalSignatures;
        constructor(properties?: Partial<VcardStructured.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](num_fields: number): VcardStructured;
        static new_from_string(str: string): VcardStructured;
        connect<K extends keyof VcardStructured.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStructured.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardStructured.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStructured.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardStructured.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardStructured.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        as_vcard_string(is_param: boolean): string;
        clone(): VcardStructured;
        get_field_at(position: number): VcardStrArray | null;
        get_num_fields(): number;
        ref(): void;
        ref(...args: never[]): any;
        set_field_at(position: number, field: VcardStrArray): void;
        set_num_fields(num_fields: number): void;
    }
    namespace VcardTime {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardTime extends Object {
        static $gtype: GObject.GType<VcardTime>;
        $signals: VcardTime.SignalSignatures;
        constructor(properties?: Partial<VcardTime.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): VcardTime;
        static new_current_utc_time(): VcardTime;
        static new_from_string(str: string, is_bare_time: boolean): VcardTime;
        static new_null_date(): VcardTime;
        static new_null_datetime(): VcardTime;
        static new_null_time(): VcardTime;
        static new_null_timestamp(): VcardTime;
        connect<K extends keyof VcardTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTime.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTime.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardTime.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardTime.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static is_leap_year(year: number): boolean;
        as_vcard_string(flags: number): string;
        clone(): VcardTime;
        get_date(): [number, number, number];
        get_day(): number;
        get_hour(): number;
        get_minute(): number;
        get_month(): number;
        get_second(): number;
        get_time(): [number, number, number];
        get_utc_offset(): number;
        get_year(): number;
        is_date(): boolean;
        is_datetime(): boolean;
        is_null_datetime(): boolean;
        is_time(): boolean;
        is_timestamp(): boolean;
        is_utc(): boolean;
        is_valid_time(): boolean;
        set_date(year: number, month: number, day: number): void;
        set_day(day: number): void;
        set_hour(hour: number): void;
        set_minute(minute: number): void;
        set_month(month: number): void;
        set_second(second: number): void;
        set_time(hour: number, minute: number, second: number): void;
        set_utc_offset(utc_offset: number): void;
        set_year(year: number): void;
    }
    namespace VcardTz {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardTz extends Object {
        static $gtype: GObject.GType<VcardTz>;
        $signals: VcardTz.SignalSignatures;
        constructor(properties?: Partial<VcardTz.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_tzid(tzid: string): VcardTz;
        static new_uri(uri: string): VcardTz;
        static new_utc_offset(utc_offset: number): VcardTz;
        connect<K extends keyof VcardTz.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTz.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardTz.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTz.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardTz.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardTz.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        clone(): VcardTz;
        get_tzid(): string | null;
        get_uri(): string | null;
        get_utc_offset(): number;
        set_tzid(tzid: string): void;
        set_uri(uri: string): void;
        set_utc_offset(utc_offset: number): void;
    }
    namespace VcardValue {
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    class VcardValue extends Object {
        static $gtype: GObject.GType<VcardValue>;
        $signals: VcardValue.SignalSignatures;
        constructor(properties?: Partial<VcardValue.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](kind: VcardValueKind): VcardValue;
        static new_boolean(value: boolean): VcardValue;
        static new_date(value: VcardTime): VcardValue;
        static new_dateandortime(value: VcardTime): VcardValue;
        static new_datetime(value: VcardTime): VcardValue;
        static new_float(value: number): VcardValue;
        static new_from_string(kind: VcardValueKind, str: string): VcardValue;
        static new_geo(value: VcardGeo): VcardValue;
        static new_gramgender(value: VcardPropertyGramgender): VcardValue;
        static new_integer(value: number): VcardValue;
        static new_kind(value: VcardPropertyKindenum): VcardValue;
        static new_languagetag(value: string): VcardValue;
        static new_structured(value: VcardStructured): VcardValue;
        static new_text(value: string): VcardValue;
        static new_textlist(value: VcardStrArray): VcardValue;
        static new_time(value: VcardTime): VcardValue;
        static new_timestamp(value: VcardTime): VcardValue;
        static new_tz(value: VcardTz): VcardValue;
        static new_uri(value: string): VcardValue;
        static new_utcoffset(value: number): VcardValue;
        static new_version(value: VcardPropertyVersion): VcardValue;
        static new_x(value: string): VcardValue;
        connect<K extends keyof VcardValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardValue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VcardValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardValue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VcardValue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardValue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static kind_from_string(str: string): VcardValueKind;
        static kind_is_valid(kind: VcardValueKind): boolean;
        static kind_to_property_kind(kind: VcardValueKind): VcardPropertyKind;
        static kind_to_string(kind: VcardValueKind): string;
        as_vcard_string(): string;
        clone(): VcardValue;
        get_boolean(): boolean;
        get_date(): VcardTime;
        get_dateandortime(): VcardTime;
        get_datetime(): VcardTime;
        get_float(): number;
        get_geo(): VcardGeo;
        get_gramgender(): VcardPropertyGramgender;
        get_integer(): number;
        get_kind(): VcardPropertyKindenum;
        get_languagetag(): string;
        get_parent(): VcardProperty | null;
        get_structured(): VcardStructured;
        get_text(): string;
        get_textlist(): VcardStrArray;
        get_time(): VcardTime;
        get_timestamp(): VcardTime;
        get_tz(): VcardTz;
        get_uri(): string;
        get_utcoffset(): number;
        get_version(): VcardPropertyVersion;
        get_x(): string;
        is_valid(): boolean;
        isa(): VcardValueKind;
        isa_value(): boolean;
        reset_kind(): void;
        set_boolean(value: boolean): void;
        set_date(value: VcardTime): void;
        set_dateandortime(value: VcardTime): void;
        set_datetime(value: VcardTime): void;
        set_float(value: number): void;
        set_geo(value: VcardGeo): void;
        set_gramgender(value: VcardPropertyGramgender): void;
        set_integer(value: number): void;
        set_kind(value: VcardPropertyKindenum): void;
        set_languagetag(value: string): void;
        set_parent(property: VcardProperty | null): void;
        set_structured(value: VcardStructured): void;
        set_text(value: string): void;
        set_textlist(value: VcardStrArray): void;
        set_time(value: VcardTime): void;
        set_timestamp(value: VcardTime): void;
        set_tz(value: VcardTz): void;
        set_uri(value: string): void;
        set_utcoffset(value: number): void;
        set_version(value: VcardPropertyVersion): void;
        set_x(value: string): void;
    }
    type ArrayClass = typeof Array;
    type AttachClass = typeof Attach;
    type CompIterClass = typeof CompIter;
    type ComponentClass = typeof Component;
    type DatetimeperiodClass = typeof Datetimeperiod;
    type DurationClass = typeof Duration;
    type EnumArrayClass = typeof EnumArray;
    type GeoClass = typeof Geo;
    type ObjectClass = typeof Object;
    type ParamIterClass = typeof ParamIter;
    type ParameterClass = typeof Parameter;
    type ParserClass = typeof Parser;
    type PeriodClass = typeof Period;
    type PropIterClass = typeof PropIter;
    type PropertyClass = typeof Property;
    type RecurIteratorClass = typeof RecurIterator;
    type RecurrenceClass = typeof Recurrence;
    type ReqstatClass = typeof Reqstat;
    type StrArrayClass = typeof StrArray;
    type TimeClass = typeof Time;
    type TimeSpanClass = typeof TimeSpan;
    type TimezoneClass = typeof Timezone;
    type TriggerClass = typeof Trigger;
    type ValueClass = typeof Value;
    type VcardComponentClass = typeof VcardComponent;
    type VcardEnumArrayClass = typeof VcardEnumArray;
    type VcardGeoClass = typeof VcardGeo;
    type VcardParameterClass = typeof VcardParameter;
    type VcardPropertyClass = typeof VcardProperty;
    type VcardStrArrayClass = typeof VcardStrArray;
    type VcardStructuredClass = typeof VcardStructured;
    type VcardTimeClass = typeof VcardTime;
    type VcardTzClass = typeof VcardTz;
    type VcardValueClass = typeof VcardValue;
    abstract class _Array {
        static $gtype: GObject.GType<_Array>;
    }
    abstract class _Attach {
        static $gtype: GObject.GType<_Attach>;
    }
    abstract class _CompIter {
        static $gtype: GObject.GType<_CompIter>;
    }
    abstract class _Component {
        static $gtype: GObject.GType<_Component>;
    }
    abstract class _Datetimeperiod {
        static $gtype: GObject.GType<_Datetimeperiod>;
    }
    abstract class _Duration {
        static $gtype: GObject.GType<_Duration>;
    }
    abstract class _EnumArray {
        static $gtype: GObject.GType<_EnumArray>;
    }
    abstract class _Geo {
        static $gtype: GObject.GType<_Geo>;
    }
    abstract class _ParamIter {
        static $gtype: GObject.GType<_ParamIter>;
    }
    abstract class _Parameter {
        static $gtype: GObject.GType<_Parameter>;
    }
    abstract class _Parser {
        static $gtype: GObject.GType<_Parser>;
    }
    abstract class _Period {
        static $gtype: GObject.GType<_Period>;
    }
    abstract class _PropIter {
        static $gtype: GObject.GType<_PropIter>;
    }
    abstract class _Property {
        static $gtype: GObject.GType<_Property>;
    }
    abstract class _RecurIterator {
        static $gtype: GObject.GType<_RecurIterator>;
    }
    abstract class _Recurrence {
        static $gtype: GObject.GType<_Recurrence>;
    }
    abstract class _Reqstat {
        static $gtype: GObject.GType<_Reqstat>;
    }
    abstract class _StrArray {
        static $gtype: GObject.GType<_StrArray>;
    }
    abstract class _Time {
        static $gtype: GObject.GType<_Time>;
    }
    abstract class _TimeSpan {
        static $gtype: GObject.GType<_TimeSpan>;
    }
    abstract class _Timezone {
        static $gtype: GObject.GType<_Timezone>;
    }
    abstract class _Trigger {
        static $gtype: GObject.GType<_Trigger>;
    }
    abstract class _Value {
        static $gtype: GObject.GType<_Value>;
    }
    abstract class _VcardComponent {
        static $gtype: GObject.GType<_VcardComponent>;
    }
    abstract class _VcardEnumArray {
        static $gtype: GObject.GType<_VcardEnumArray>;
    }
    abstract class _VcardGeo {
        static $gtype: GObject.GType<_VcardGeo>;
    }
    abstract class _VcardParameter {
        static $gtype: GObject.GType<_VcardParameter>;
    }
    abstract class _VcardProperty {
        static $gtype: GObject.GType<_VcardProperty>;
    }
    abstract class _VcardStrArray {
        static $gtype: GObject.GType<_VcardStrArray>;
    }
    abstract class _VcardStructured {
        static $gtype: GObject.GType<_VcardStructured>;
    }
    abstract class _VcardTime {
        static $gtype: GObject.GType<_VcardTime>;
    }
    abstract class _VcardTz {
        static $gtype: GObject.GType<_VcardTz>;
    }
    abstract class _VcardValue {
        static $gtype: GObject.GType<_VcardValue>;
    }
    const __name__: string;
    const __version__: string;
}
export default ICalGLib;
}
declare module 'gi://ICalGLib' {
    import ICalGLib40 from 'gi://ICalGLib?version=4.0';
    export default ICalGLib40;
}
