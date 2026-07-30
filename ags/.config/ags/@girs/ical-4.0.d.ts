declare module 'gi://ICal?version=4.0' {
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
export namespace ICal {
    enum _invalid_rrule_handling {
        TREAT_AS_ERROR,
        IGNORE_INVALID,
    }
    enum _unknown_token_handling {
        ASSUME_IANA_TOKEN,
        DISCARD_TOKEN,
        TREAT_AS_ERROR,
    }
    enum component_kind {
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
    enum errorenum {
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
    enum errorstate {
        FATAL,
        NONFATAL,
        DEFAULT,
        UNKNOWN,
    }
    enum limits_kind {
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
    enum parameter_action {
        X,
        ASK,
        ABORT,
        NONE,
    }
    enum parameter_cutype {
        X,
        INDIVIDUAL,
        GROUP,
        RESOURCE,
        ROOM,
        UNKNOWN,
        NONE,
    }
    enum parameter_derived {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_display {
        X,
        BADGE,
        GRAPHIC,
        FULLSIZE,
        THUMBNAIL,
        NONE,
    }
    enum parameter_enable {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_encoding {
        X,
        "8BIT",
        BASE64,
        NONE,
    }
    enum parameter_fbtype {
        X,
        FREE,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }
    enum parameter_feature {
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
    enum parameter_kind {
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
    enum parameter_local {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_partstat {
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
    enum parameter_patchaction {
        X,
        CREATE,
        BYNAME,
        BYVALUE,
        BYPARAM,
        NONE,
    }
    enum parameter_range {
        X,
        THISANDPRIOR,
        THISANDFUTURE,
        NONE,
    }
    enum parameter_related {
        X,
        START,
        END,
        NONE,
    }
    enum parameter_reltype {
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
    enum parameter_required {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_role {
        X,
        CHAIR,
        REQPARTICIPANT,
        OPTPARTICIPANT,
        NONPARTICIPANT,
        NONE,
    }
    enum parameter_rsvp {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_scheduleagent {
        X,
        SERVER,
        CLIENT,
        NONE,
    }
    enum parameter_scheduleforcesend {
        X,
        REQUEST,
        REPLY,
        NONE,
    }
    enum parameter_stayinformed {
        X,
        TRUE,
        FALSE,
        NONE,
    }
    enum parameter_substate {
        X,
        OK,
        ERROR,
        SUSPENDED,
        NONE,
    }
    enum parameter_value {
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
    enum parameter_xliccomparetype {
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
    enum parameter_xlicerrortype {
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
    enum parser_ctrl {
        KEEP,
        OMIT,
        ERROR,
    }
    enum parser_state {
        ERROR,
        SUCCESS,
        BEGIN_COMP,
        END_COMP,
        IN_PROGRESS,
    }
    enum property_action {
        X,
        AUDIO,
        DISPLAY,
        EMAIL,
        PROCEDURE,
        NONE,
    }
    enum property_busytype {
        X,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }
    enum property_carlevel {
        X,
        CARNONE,
        CARMIN,
        CARFULL1,
        NONE,
    }
    enum property_class {
        X,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        NONE,
    }
    enum property_cmd {
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
    enum property_kind {
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
        CONCEPT_PROPERTY,
        CONFERENCE_PROPERTY,
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
        IANA_PROPERTY,
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
        REFID_PROPERTY,
        REFRESHINTERVAL_PROPERTY,
        RELATEDTO_PROPERTY,
        RELCALID_PROPERTY,
        REPEAT_PROPERTY,
        REPLYURL_PROPERTY,
        REQUESTSTATUS_PROPERTY,
        RESOURCETYPE_PROPERTY,
        RESOURCES_PROPERTY,
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
        NO_PROPERTY,
    }
    enum property_method {
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
    enum property_participanttype {
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
    enum property_pollcompletion {
        X,
        SERVER,
        SERVERSUBMIT,
        SERVERCHOICE,
        CLIENT,
        NONE,
    }
    enum property_pollmode {
        X,
        BASIC,
        NONE,
    }
    enum property_proximity {
        X,
        ARRIVE,
        DEPART,
        CONNECT,
        DISCONNECT,
        NONE,
    }
    enum property_querylevel {
        X,
        CALQL1,
        CALQLNONE,
        NONE,
    }
    enum property_resourcetype {
        X,
        ROOM,
        PROJECTOR,
        REMOTECONFERENCEAUDIO,
        REMOTECONFERENCEVIDEO,
        NONE,
    }
    enum property_status {
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
    enum property_taskmode {
        X,
        AUTOMATICCOMPLETION,
        AUTOMATICFAILURE,
        AUTOMATICSTATUS,
        NONE,
    }
    enum property_transp {
        X,
        OPAQUE,
        OPAQUENOCONFLICT,
        TRANSPARENT,
        TRANSPARENTNOCONFLICT,
        NONE,
    }
    enum property_xlicclass {
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
    enum recurrencetype_byrule {
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
    enum recurrencetype_frequency {
        SECONDLY_RECURRENCE,
        MINUTELY_RECURRENCE,
        HOURLY_RECURRENCE,
        DAILY_RECURRENCE,
        WEEKLY_RECURRENCE,
        MONTHLY_RECURRENCE,
        YEARLY_RECURRENCE,
        NO_RECURRENCE,
    }
    enum recurrencetype_skip {
        BACKWARD,
        FORWARD,
        OMIT,
        UNDEFINED,
    }
    enum recurrencetype_weekday {
        NO_WEEKDAY,
        SUNDAY_WEEKDAY,
        MONDAY_WEEKDAY,
        TUESDAY_WEEKDAY,
        WEDNESDAY_WEEKDAY,
        THURSDAY_WEEKDAY,
        FRIDAY_WEEKDAY,
        SATURDAY_WEEKDAY,
    }
    enum requeststatus {
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
    enum restriction_kind {
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
    enum value_kind {
        ANY_VALUE,
        ACTION_VALUE,
        ATTACH_VALUE,
        BINARY_VALUE,
        BOOLEAN_VALUE,
        BUSYTYPE_VALUE,
        CALADDRESS_VALUE,
        CARLEVEL_VALUE,
        CLASS_VALUE,
        CMD_VALUE,
        COLOR_VALUE,
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
        QUERY_VALUE,
        QUERYLEVEL_VALUE,
        RECUR_VALUE,
        RELATEDTO_VALUE,
        REQUESTSTATUS_VALUE,
        RESOURCETYPE_VALUE,
        STATUS_VALUE,
        STRING_VALUE,
        TASKMODE_VALUE,
        TEXT_VALUE,
        TRANSP_VALUE,
        TRIGGER_VALUE,
        UID_VALUE,
        URI_VALUE,
        UTCOFFSET_VALUE,
        X_VALUE,
        XLICCLASS_VALUE,
        XMLREFERENCE_VALUE,
        NO_VALUE,
    }
    const BY_DAY_SIZE: number;
    const BY_HOUR_SIZE: number;
    const BY_MINUTE_SIZE: number;
    const BY_MONTHDAY_SIZE: number;
    const BY_MONTH_SIZE: number;
    const BY_SECOND_SIZE: number;
    const BY_WEEKNO_SIZE: number;
    const BY_YEARDAY_SIZE: number;
    const GEO_LEN: number;
    const ICALPARAMETER_FIRST_ENUM: number;
    const ICALPARAMETER_LAST_ENUM: number;
    const ICALPROPERTY_FIRST_ENUM: number;
    const ICALPROPERTY_LAST_ENUM: number;
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const PACKAGE: string;
    const PATCH_VERSION: number;
    const VERSION: string;
    function get_invalid_rrule_handling_setting(): _invalid_rrule_handling;
    function get_unknown_token_handling_setting(): _unknown_token_handling;
    function icalarray_append(array: array, element: null): void;
    function icalarray_element_at(array: array, position: bigint | number): null;
    function icalarray_free(array: array): void;
    function icalarray_remove_element_at(array: array, position: bigint | number): void;
    function icalarray_set_element_at(array: array, element: null, position: bigint | number): void;
    function icalarray_sort(array: array, compare: null): void;
    function icalattach_get_data(attach: attach): number;
    function icalattach_get_is_url(attach: attach): boolean;
    function icalattach_get_url(attach: attach): string;
    function icalattach_ref(attach: attach): void;
    function icalattach_unref(attach: attach): void;
    function icalcompiter_is_valid(i: compiter): boolean;
    function icalcomponent_add_component(parent: component, child: component): void;
    function icalcomponent_add_property(component: component, property: property): void;
    function icalcomponent_as_ical_string(component: component): string;
    function icalcomponent_as_ical_string_r(component: component): string;
    function icalcomponent_check_restrictions(comp: component): boolean;
    function icalcomponent_convert_errors(component: component): void;
    function icalcomponent_count_components(component: component, kind: component_kind): number;
    function icalcomponent_count_errors(component: component): number;
    function icalcomponent_count_properties(component: component, kind: property_kind): number;
    function icalcomponent_foreach_recurrence(comp: component, start: null, end: null, callback: null, callback_data: null): void;
    function icalcomponent_foreach_tzid(comp: component, callback: null, callback_data: null): void;
    function icalcomponent_free(component: component): void;
    function icalcomponent_get_comment(comp: component): string;
    function icalcomponent_get_component_name(comp: component): string;
    function icalcomponent_get_component_name_r(comp: component): string;
    function icalcomponent_get_description(comp: component): string;
    function icalcomponent_get_dtend(comp: component): null;
    function icalcomponent_get_dtstamp(comp: component): null;
    function icalcomponent_get_dtstart(comp: component): null;
    function icalcomponent_get_due(comp: component): null;
    function icalcomponent_get_duration(comp: component): null;
    function icalcomponent_get_iana_name(comp: component): string;
    function icalcomponent_get_location(comp: component): string;
    function icalcomponent_get_method(comp: component): property_method;
    function icalcomponent_get_recurrenceid(comp: component): null;
    function icalcomponent_get_relcalid(comp: component): string;
    function icalcomponent_get_sequence(comp: component): number;
    function icalcomponent_get_span(comp: component): null;
    function icalcomponent_get_status(comp: component): null;
    function icalcomponent_get_summary(comp: component): string;
    function icalcomponent_get_uid(comp: component): string;
    function icalcomponent_get_x_name(comp: component): string;
    function icalcomponent_is_valid(component: component): boolean;
    function icalcomponent_isa(component: component): component_kind;
    function icalcomponent_isa_component(component: null): boolean;
    function icalcomponent_kind_is_valid(kind: component_kind): boolean;
    function icalcomponent_kind_to_string(kind: component_kind): string;
    function icalcomponent_merge_component(comp: component, comp_to_merge: component): void;
    function icalcomponent_normalize(comp: component): void;
    function icalcomponent_remove_component(parent: component, child: component): void;
    function icalcomponent_remove_property(component: component, property: property): void;
    function icalcomponent_remove_property_by_kind(component: component, kind: property_kind): void;
    function icalcomponent_set_comment(comp: component, v: string): void;
    function icalcomponent_set_description(comp: component, v: string): void;
    function icalcomponent_set_dtend(comp: component, v: null): void;
    function icalcomponent_set_dtstamp(comp: component, v: null): void;
    function icalcomponent_set_dtstart(comp: component, v: null): void;
    function icalcomponent_set_due(comp: component, v: null): void;
    function icalcomponent_set_duration(comp: component, v: null): void;
    function icalcomponent_set_iana_name(comp: component, name: string): void;
    function icalcomponent_set_location(comp: component, v: string): void;
    function icalcomponent_set_method(comp: component, method: property_method): void;
    function icalcomponent_set_parent(component: component, parent: component): void;
    function icalcomponent_set_recurrenceid(comp: component, v: null): void;
    function icalcomponent_set_relcalid(comp: component, v: string): void;
    function icalcomponent_set_sequence(comp: component, v: number): void;
    function icalcomponent_set_status(comp: component, v: null): void;
    function icalcomponent_set_summary(comp: component, v: string): void;
    function icalcomponent_set_uid(comp: component, v: string): void;
    function icalcomponent_set_x_name(comp: component, name: string): void;
    function icalcomponent_string_to_kind(string: string): component_kind;
    function icalcomponent_strip_errors(component: component): void;
    function icalduration_extend(t: null, d: null): null;
    function icalduration_from_times(t1: null, t2: null): null;
    function icaldurationtype_as_ical_string(d: null): string;
    function icaldurationtype_as_ical_string_r(d: null): string;
    function icaldurationtype_as_seconds(duration: null): number;
    function icaldurationtype_as_utc_seconds(duration: null): number;
    function icaldurationtype_bad_duration(): null;
    function icaldurationtype_from_seconds(seconds: number): null;
    function icaldurationtype_from_string(str: string): null;
    function icaldurationtype_is_bad_duration(d: null): boolean;
    function icaldurationtype_is_null_duration(d: null): boolean;
    function icaldurationtype_normalize(dur: null): null;
    function icaldurationtype_null_duration(): null;
    function icalenum_num_to_reqstat(major: number, minor: number): requeststatus;
    function icalenum_reqstat_code(stat: requeststatus): string;
    function icalenum_reqstat_code_r(stat: requeststatus): string;
    function icalenum_reqstat_desc(stat: requeststatus): string;
    function icalenum_reqstat_major(stat: requeststatus): number;
    function icalenum_reqstat_minor(stat: requeststatus): number;
    function icalenumarray_add(array: enumarray, elem: enumarray_element): void;
    function icalenumarray_append(array: enumarray, elem: enumarray_element): void;
    function icalenumarray_element_at(array: enumarray, position: bigint | number): enumarray_element;
    function icalenumarray_find(array: enumarray, needle: enumarray_element): number;
    function icalenumarray_free(array: enumarray): void;
    function icalenumarray_remove(array: enumarray, del: enumarray_element): void;
    function icalenumarray_remove_element_at(array: enumarray, position: bigint | number): void;
    function icalenumarray_size(array: enumarray): number;
    function icalenumarray_sort(array: enumarray): void;
    function icalerror_backtrace(): void;
    function icalerror_clear_errno(): void;
    function icalerror_error_from_string(str: string): errorenum;
    function icalerror_get_error_state(error: errorenum): errorstate;
    function icalerror_get_errors_are_fatal(): boolean;
    function icalerror_icalerrno(): errorenum;
    function icalerror_perror(): string;
    function icalerror_restore(error: string, es: errorstate): void;
    function icalerror_set_errno(x: errorenum): void;
    function icalerror_set_error_state(error: errorenum, state: errorstate): void;
    function icalerror_set_errors_are_fatal(fatal: boolean): void;
    function icalerror_strerror(e: errorenum): string;
    function icalerror_supress(error: string): errorstate;
    function icallimit_get(kind: limits_kind): number;
    function icallimit_set(kind: limits_kind, limit: bigint | number): void;
    function icalmemory_add_tmp_buffer(buf: null): void;
    function icalmemory_append_char(buf: string, pos: string, buf_size: bigint | number, ch: number): void;
    function icalmemory_append_decoded_string(buf: string, pos: string, buf_size: bigint | number, string: string): void;
    function icalmemory_append_encoded_string(buf: string, pos: string, buf_size: bigint | number, string: string): void;
    function icalmemory_append_string(buf: string, pos: string, buf_size: bigint | number, string: string): void;
    function icalmemory_free_buffer(buf: null): void;
    function icalmemory_free_ring(): void;
    function icalmemory_new_buffer(size: bigint | number): null;
    function icalmemory_resize_buffer(buf: null, size: bigint | number): null;
    function icalmemory_strdup(s: string): string;
    function icalmemory_tmp_buffer(size: bigint | number): null;
    function icalmemory_tmp_copy(str: string): string;
    function icalparameter_add_delegatedfrom(value: parameter, v: string): void;
    function icalparameter_add_delegatedto(value: parameter, v: string): void;
    function icalparameter_add_display(value: parameter, v: enumarray_element): void;
    function icalparameter_add_feature(value: parameter, v: enumarray_element): void;
    function icalparameter_add_member(value: parameter, v: string): void;
    function icalparameter_as_ical_string(parameter: parameter): string;
    function icalparameter_as_ical_string_r(parameter: parameter): string;
    function icalparameter_decode_value(value: string): void;
    function icalparameter_enum_to_string(e: number): string;
    function icalparameter_free(parameter: parameter): void;
    function icalparameter_get_actionparam(value: parameter): parameter_action;
    function icalparameter_get_altrep(value: parameter): string;
    function icalparameter_get_charset(value: parameter): string;
    function icalparameter_get_cn(value: parameter): string;
    function icalparameter_get_cutype(value: parameter): parameter_cutype;
    function icalparameter_get_delegatedfrom_nth(param: parameter, position: bigint | number): string;
    function icalparameter_get_delegatedfrom_size(param: parameter): number;
    function icalparameter_get_delegatedto_nth(param: parameter, position: bigint | number): string;
    function icalparameter_get_delegatedto_size(param: parameter): number;
    function icalparameter_get_derived(value: parameter): parameter_derived;
    function icalparameter_get_dir(value: parameter): string;
    function icalparameter_get_display_nth(param: parameter, position: bigint | number): parameter_display;
    function icalparameter_get_display_size(param: parameter): number;
    function icalparameter_get_email(value: parameter): string;
    function icalparameter_get_enable(value: parameter): parameter_enable;
    function icalparameter_get_encoding(value: parameter): parameter_encoding;
    function icalparameter_get_fbtype(value: parameter): parameter_fbtype;
    function icalparameter_get_feature_nth(param: parameter, position: bigint | number): parameter_feature;
    function icalparameter_get_feature_size(param: parameter): number;
    function icalparameter_get_filename(value: parameter): string;
    function icalparameter_get_fmttype(value: parameter): string;
    function icalparameter_get_gap(value: parameter): null;
    function icalparameter_get_iana(value: parameter): string;
    function icalparameter_get_iana_name(param: parameter): string;
    function icalparameter_get_iana_value(param: parameter): string;
    function icalparameter_get_id(value: parameter): string;
    function icalparameter_get_label(value: parameter): string;
    function icalparameter_get_language(value: parameter): string;
    function icalparameter_get_latency(value: parameter): string;
    function icalparameter_get_linkrel(value: parameter): string;
    function icalparameter_get_local(value: parameter): parameter_local;
    function icalparameter_get_localize(value: parameter): string;
    function icalparameter_get_managedid(value: parameter): string;
    function icalparameter_get_member_nth(param: parameter, position: bigint | number): string;
    function icalparameter_get_member_size(param: parameter): number;
    function icalparameter_get_modified(value: parameter): string;
    function icalparameter_get_options(value: parameter): string;
    function icalparameter_get_order(value: parameter): number;
    function icalparameter_get_partstat(value: parameter): parameter_partstat;
    function icalparameter_get_patchaction(value: parameter): parameter_patchaction;
    function icalparameter_get_publiccomment(value: parameter): string;
    function icalparameter_get_range(value: parameter): parameter_range;
    function icalparameter_get_reason(value: parameter): string;
    function icalparameter_get_related(value: parameter): parameter_related;
    function icalparameter_get_reltype(value: parameter): parameter_reltype;
    function icalparameter_get_required(value: parameter): parameter_required;
    function icalparameter_get_response(value: parameter): number;
    function icalparameter_get_role(value: parameter): parameter_role;
    function icalparameter_get_rsvp(value: parameter): parameter_rsvp;
    function icalparameter_get_scheduleagent(value: parameter): parameter_scheduleagent;
    function icalparameter_get_scheduleforcesend(value: parameter): parameter_scheduleforcesend;
    function icalparameter_get_schedulestatus(value: parameter): string;
    function icalparameter_get_schema(value: parameter): string;
    function icalparameter_get_sentby(value: parameter): string;
    function icalparameter_get_size(value: parameter): string;
    function icalparameter_get_stayinformed(value: parameter): parameter_stayinformed;
    function icalparameter_get_substate(value: parameter): parameter_substate;
    function icalparameter_get_tzid(value: parameter): string;
    function icalparameter_get_value(value: parameter): parameter_value;
    function icalparameter_get_x(value: parameter): string;
    function icalparameter_get_xliccomparetype(value: parameter): parameter_xliccomparetype;
    function icalparameter_get_xlicerrortype(value: parameter): parameter_xlicerrortype;
    function icalparameter_get_xname(param: parameter): string;
    function icalparameter_get_xvalue(param: parameter): string;
    function icalparameter_has_same_name(param1: parameter, param2: parameter): boolean;
    function icalparameter_is_multivalued(param: parameter): boolean;
    function icalparameter_isa(parameter: parameter): parameter_kind;
    function icalparameter_isa_parameter(param: null): boolean;
    function icalparameter_kind_is_valid(kind: parameter_kind): boolean;
    function icalparameter_kind_to_string(kind: parameter_kind): string;
    function icalparameter_kind_value_kind(kind: parameter_kind, is_multivalued: number): value_kind;
    function icalparameter_remove_delegatedfrom(value: parameter, v: string): void;
    function icalparameter_remove_delegatedto(value: parameter, v: string): void;
    function icalparameter_remove_display(value: parameter, v: enumarray_element): void;
    function icalparameter_remove_feature(value: parameter, v: enumarray_element): void;
    function icalparameter_remove_member(value: parameter, v: string): void;
    function icalparameter_set_actionparam(value: parameter, v: parameter_action): void;
    function icalparameter_set_altrep(value: parameter, v: string): void;
    function icalparameter_set_charset(value: parameter, v: string): void;
    function icalparameter_set_cn(value: parameter, v: string): void;
    function icalparameter_set_cutype(value: parameter, v: parameter_cutype): void;
    function icalparameter_set_delegatedfrom(value: parameter, v: strarray): void;
    function icalparameter_set_delegatedto(value: parameter, v: strarray): void;
    function icalparameter_set_derived(value: parameter, v: parameter_derived): void;
    function icalparameter_set_dir(value: parameter, v: string): void;
    function icalparameter_set_display(value: parameter, v: enumarray): void;
    function icalparameter_set_email(value: parameter, v: string): void;
    function icalparameter_set_enable(value: parameter, v: parameter_enable): void;
    function icalparameter_set_encoding(value: parameter, v: parameter_encoding): void;
    function icalparameter_set_fbtype(value: parameter, v: parameter_fbtype): void;
    function icalparameter_set_feature(value: parameter, v: enumarray): void;
    function icalparameter_set_filename(value: parameter, v: string): void;
    function icalparameter_set_fmttype(value: parameter, v: string): void;
    function icalparameter_set_gap(value: parameter, v: null): void;
    function icalparameter_set_iana(value: parameter, v: string): void;
    function icalparameter_set_iana_name(param: parameter, v: string): void;
    function icalparameter_set_iana_value(param: parameter, v: string): void;
    function icalparameter_set_id(value: parameter, v: string): void;
    function icalparameter_set_label(value: parameter, v: string): void;
    function icalparameter_set_language(value: parameter, v: string): void;
    function icalparameter_set_latency(value: parameter, v: string): void;
    function icalparameter_set_linkrel(value: parameter, v: string): void;
    function icalparameter_set_local(value: parameter, v: parameter_local): void;
    function icalparameter_set_localize(value: parameter, v: string): void;
    function icalparameter_set_managedid(value: parameter, v: string): void;
    function icalparameter_set_member(value: parameter, v: strarray): void;
    function icalparameter_set_modified(value: parameter, v: string): void;
    function icalparameter_set_options(value: parameter, v: string): void;
    function icalparameter_set_order(value: parameter, v: number): void;
    function icalparameter_set_parent(param: parameter, property: property): void;
    function icalparameter_set_partstat(value: parameter, v: parameter_partstat): void;
    function icalparameter_set_patchaction(value: parameter, v: parameter_patchaction): void;
    function icalparameter_set_publiccomment(value: parameter, v: string): void;
    function icalparameter_set_range(value: parameter, v: parameter_range): void;
    function icalparameter_set_reason(value: parameter, v: string): void;
    function icalparameter_set_related(value: parameter, v: parameter_related): void;
    function icalparameter_set_reltype(value: parameter, v: parameter_reltype): void;
    function icalparameter_set_required(value: parameter, v: parameter_required): void;
    function icalparameter_set_response(value: parameter, v: number): void;
    function icalparameter_set_role(value: parameter, v: parameter_role): void;
    function icalparameter_set_rsvp(value: parameter, v: parameter_rsvp): void;
    function icalparameter_set_scheduleagent(value: parameter, v: parameter_scheduleagent): void;
    function icalparameter_set_scheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void;
    function icalparameter_set_schedulestatus(value: parameter, v: string): void;
    function icalparameter_set_schema(value: parameter, v: string): void;
    function icalparameter_set_sentby(value: parameter, v: string): void;
    function icalparameter_set_size(value: parameter, v: string): void;
    function icalparameter_set_stayinformed(value: parameter, v: parameter_stayinformed): void;
    function icalparameter_set_substate(value: parameter, v: parameter_substate): void;
    function icalparameter_set_tzid(value: parameter, v: string): void;
    function icalparameter_set_value(value: parameter, v: parameter_value): void;
    function icalparameter_set_x(value: parameter, v: string): void;
    function icalparameter_set_xliccomparetype(value: parameter, v: parameter_xliccomparetype): void;
    function icalparameter_set_xlicerrortype(value: parameter, v: parameter_xlicerrortype): void;
    function icalparameter_set_xname(param: parameter, v: string): void;
    function icalparameter_set_xvalue(param: parameter, v: string): void;
    function icalparameter_string_to_enum(str: string): number;
    function icalparameter_string_to_kind(string: string): parameter_kind;
    function icalparameter_value_to_value_kind(value: parameter_value): value_kind;
    function icalparser_free(parser: parser): void;
    function icalparser_get_ctrl(): null;
    function icalparser_get_state(parser: parser): parser_state;
    function icalparser_set_ctrl(ctrl: null): void;
    function icalparser_set_gen_data(parser: parser, data: null): void;
    function icalparser_string_line_generator(out: string, buf_size: bigint | number, d: null): string;
    function icalperiodtype_as_ical_string(p: null): string;
    function icalperiodtype_as_ical_string_r(p: null): string;
    function icalperiodtype_from_string(str: string): null;
    function icalperiodtype_is_null_period(p: null): boolean;
    function icalperiodtype_is_valid_period(p: null): boolean;
    function icalperiodtype_null_period(): null;
    function icalproperty_action_to_string(action: property_action): string;
    function icalproperty_add_parameter(prop: property, parameter: parameter): void;
    function icalproperty_as_ical_string(prop: property): string;
    function icalproperty_as_ical_string_r(prop: property): string;
    function icalproperty_class_to_string(propclass: property_class): string;
    function icalproperty_count_parameters(prop: property): number;
    function icalproperty_enum_belongs_to_property(kind: property_kind, e: number): boolean;
    function icalproperty_enum_to_string(e: number): string;
    function icalproperty_enum_to_string_r(e: number): string;
    function icalproperty_free(prop: property): void;
    function icalproperty_get_acceptresponse(prop: property): string;
    function icalproperty_get_acknowledged(prop: property): null;
    function icalproperty_get_action(prop: property): null;
    function icalproperty_get_allow_empty_properties(): boolean;
    function icalproperty_get_allowconflict(prop: property): string;
    function icalproperty_get_attendee(prop: property): string;
    function icalproperty_get_busytype(prop: property): null;
    function icalproperty_get_calendaraddress(prop: property): string;
    function icalproperty_get_calid(prop: property): string;
    function icalproperty_get_calmaster(prop: property): string;
    function icalproperty_get_calscale(prop: property): string;
    function icalproperty_get_capversion(prop: property): string;
    function icalproperty_get_carid(prop: property): string;
    function icalproperty_get_carlevel(prop: property): null;
    function icalproperty_get_categories(prop: property): string;
    function icalproperty_get_class(prop: property): null;
    function icalproperty_get_cmd(prop: property): null;
    function icalproperty_get_color(prop: property): string;
    function icalproperty_get_comment(prop: property): string;
    function icalproperty_get_completed(prop: property): null;
    function icalproperty_get_components(prop: property): string;
    function icalproperty_get_concept(prop: property): string;
    function icalproperty_get_conference(prop: property): string;
    function icalproperty_get_contact(prop: property): string;
    function icalproperty_get_created(prop: property): null;
    function icalproperty_get_csid(prop: property): string;
    function icalproperty_get_datemax(prop: property): null;
    function icalproperty_get_datemin(prop: property): null;
    function icalproperty_get_datetime_with_component(prop: property, comp: component): null;
    function icalproperty_get_decreed(prop: property): string;
    function icalproperty_get_defaultcharset(prop: property): string;
    function icalproperty_get_defaultlocale(prop: property): string;
    function icalproperty_get_defaulttzid(prop: property): string;
    function icalproperty_get_defaultvcars(prop: property): string;
    function icalproperty_get_deny(prop: property): string;
    function icalproperty_get_description(prop: property): string;
    function icalproperty_get_dtend(prop: property): null;
    function icalproperty_get_dtstamp(prop: property): null;
    function icalproperty_get_dtstart(prop: property): null;
    function icalproperty_get_due(prop: property): null;
    function icalproperty_get_duration(prop: property): null;
    function icalproperty_get_estimatedduration(prop: property): null;
    function icalproperty_get_exdate(prop: property): null;
    function icalproperty_get_expand(prop: property): number;
    function icalproperty_get_exrule(prop: property): null;
    function icalproperty_get_freebusy(prop: property): null;
    function icalproperty_get_geo(prop: property): null;
    function icalproperty_get_grant(prop: property): string;
    function icalproperty_get_iana(prop: property): string;
    function icalproperty_get_iana_name(prop: property): string;
    function icalproperty_get_itipversion(prop: property): string;
    function icalproperty_get_lastmodified(prop: property): null;
    function icalproperty_get_link(prop: property): string;
    function icalproperty_get_location(prop: property): string;
    function icalproperty_get_locationtype(prop: property): string;
    function icalproperty_get_maxcomponentsize(prop: property): number;
    function icalproperty_get_maxdate(prop: property): null;
    function icalproperty_get_maxresults(prop: property): number;
    function icalproperty_get_maxresultssize(prop: property): number;
    function icalproperty_get_method(prop: property): null;
    function icalproperty_get_mindate(prop: property): null;
    function icalproperty_get_multipart(prop: property): string;
    function icalproperty_get_name(prop: property): string;
    function icalproperty_get_organizer(prop: property): string;
    function icalproperty_get_owner(prop: property): string;
    function icalproperty_get_parameter_as_string(prop: property, name: string): string;
    function icalproperty_get_parameter_as_string_r(prop: property, name: string): string;
    function icalproperty_get_participanttype(prop: property): null;
    function icalproperty_get_patchdelete(prop: property): string;
    function icalproperty_get_patchorder(prop: property): number;
    function icalproperty_get_patchparameter(prop: property): string;
    function icalproperty_get_patchtarget(prop: property): string;
    function icalproperty_get_patchversion(prop: property): string;
    function icalproperty_get_percentcomplete(prop: property): number;
    function icalproperty_get_permission(prop: property): string;
    function icalproperty_get_pollcompletion(prop: property): null;
    function icalproperty_get_pollitemid(prop: property): number;
    function icalproperty_get_pollmode(prop: property): null;
    function icalproperty_get_pollproperties(prop: property): string;
    function icalproperty_get_pollwinner(prop: property): number;
    function icalproperty_get_priority(prop: property): number;
    function icalproperty_get_prodid(prop: property): string;
    function icalproperty_get_property_name(prop: property): string;
    function icalproperty_get_property_name_r(prop: property): string;
    function icalproperty_get_proximity(prop: property): null;
    function icalproperty_get_query(prop: property): string;
    function icalproperty_get_queryid(prop: property): string;
    function icalproperty_get_querylevel(prop: property): null;
    function icalproperty_get_queryname(prop: property): string;
    function icalproperty_get_rdate(prop: property): null;
    function icalproperty_get_recuraccepted(prop: property): string;
    function icalproperty_get_recurexpand(prop: property): string;
    function icalproperty_get_recurlimit(prop: property): string;
    function icalproperty_get_recurrenceid(prop: property): null;
    function icalproperty_get_refid(prop: property): string;
    function icalproperty_get_refreshinterval(prop: property): null;
    function icalproperty_get_relatedto(prop: property): string;
    function icalproperty_get_relcalid(prop: property): string;
    function icalproperty_get_repeat(prop: property): number;
    function icalproperty_get_replyurl(prop: property): string;
    function icalproperty_get_requeststatus(prop: property): null;
    function icalproperty_get_resources(prop: property): string;
    function icalproperty_get_resourcetype(prop: property): null;
    function icalproperty_get_response(prop: property): number;
    function icalproperty_get_restriction(prop: property): string;
    function icalproperty_get_rrule(prop: property): null;
    function icalproperty_get_scope(prop: property): string;
    function icalproperty_get_sequence(prop: property): number;
    function icalproperty_get_source(prop: property): string;
    function icalproperty_get_status(prop: property): null;
    function icalproperty_get_storesexpanded(prop: property): string;
    function icalproperty_get_styleddescription(prop: property): string;
    function icalproperty_get_summary(prop: property): string;
    function icalproperty_get_target(prop: property): string;
    function icalproperty_get_taskmode(prop: property): null;
    function icalproperty_get_transp(prop: property): null;
    function icalproperty_get_trigger(prop: property): null;
    function icalproperty_get_tzid(prop: property): string;
    function icalproperty_get_tzidaliasof(prop: property): string;
    function icalproperty_get_tzname(prop: property): string;
    function icalproperty_get_tzoffsetfrom(prop: property): number;
    function icalproperty_get_tzoffsetto(prop: property): number;
    function icalproperty_get_tzuntil(prop: property): null;
    function icalproperty_get_tzurl(prop: property): string;
    function icalproperty_get_uid(prop: property): string;
    function icalproperty_get_url(prop: property): string;
    function icalproperty_get_value_as_string(prop: property): string;
    function icalproperty_get_value_as_string_r(prop: property): string;
    function icalproperty_get_version(prop: property): string;
    function icalproperty_get_voter(prop: property): string;
    function icalproperty_get_x(prop: property): string;
    function icalproperty_get_x_name(prop: property): string;
    function icalproperty_get_xlicclass(prop: property): null;
    function icalproperty_get_xlicclustercount(prop: property): string;
    function icalproperty_get_xlicerror(prop: property): string;
    function icalproperty_get_xlicmimecharset(prop: property): string;
    function icalproperty_get_xlicmimecid(prop: property): string;
    function icalproperty_get_xlicmimecontenttype(prop: property): string;
    function icalproperty_get_xlicmimeencoding(prop: property): string;
    function icalproperty_get_xlicmimefilename(prop: property): string;
    function icalproperty_get_xlicmimeoptinfo(prop: property): string;
    function icalproperty_isa(property: property): property_kind;
    function icalproperty_isa_property(property: null): boolean;
    function icalproperty_kind_and_string_to_enum(kind: number, str: string): number;
    function icalproperty_kind_is_valid(kind: property_kind): boolean;
    function icalproperty_kind_to_string(kind: property_kind): string;
    function icalproperty_kind_to_value_kind(kind: property_kind): value_kind;
    function icalproperty_method_to_string(method: property_method): string;
    function icalproperty_normalize(prop: property): void;
    function icalproperty_participanttype_to_string(participanttype: property_participanttype): string;
    function icalproperty_recurrence_is_excluded(comp: component, dtstart: null, recurtime: null): boolean;
    function icalproperty_remove_parameter_by_kind(prop: property, kind: parameter_kind): void;
    function icalproperty_remove_parameter_by_name(prop: property, name: string): void;
    function icalproperty_remove_parameter_by_ref(prop: property, param: parameter): void;
    function icalproperty_resourcetype_to_string(resourcetype: property_resourcetype): string;
    function icalproperty_set_acceptresponse(prop: property, v: string): void;
    function icalproperty_set_acknowledged(prop: property, v: null): void;
    function icalproperty_set_action(prop: property, v: null): void;
    function icalproperty_set_allow_empty_properties(enable: boolean): void;
    function icalproperty_set_allowconflict(prop: property, v: string): void;
    function icalproperty_set_attach(prop: property, v: attach): void;
    function icalproperty_set_attendee(prop: property, v: string): void;
    function icalproperty_set_busytype(prop: property, v: null): void;
    function icalproperty_set_calendaraddress(prop: property, v: string): void;
    function icalproperty_set_calid(prop: property, v: string): void;
    function icalproperty_set_calmaster(prop: property, v: string): void;
    function icalproperty_set_calscale(prop: property, v: string): void;
    function icalproperty_set_capversion(prop: property, v: string): void;
    function icalproperty_set_carid(prop: property, v: string): void;
    function icalproperty_set_carlevel(prop: property, v: null): void;
    function icalproperty_set_categories(prop: property, v: string): void;
    function icalproperty_set_class(prop: property, v: null): void;
    function icalproperty_set_cmd(prop: property, v: null): void;
    function icalproperty_set_color(prop: property, v: string): void;
    function icalproperty_set_comment(prop: property, v: string): void;
    function icalproperty_set_completed(prop: property, v: null): void;
    function icalproperty_set_components(prop: property, v: string): void;
    function icalproperty_set_concept(prop: property, v: string): void;
    function icalproperty_set_conference(prop: property, v: string): void;
    function icalproperty_set_contact(prop: property, v: string): void;
    function icalproperty_set_created(prop: property, v: null): void;
    function icalproperty_set_csid(prop: property, v: string): void;
    function icalproperty_set_datemax(prop: property, v: null): void;
    function icalproperty_set_datemin(prop: property, v: null): void;
    function icalproperty_set_decreed(prop: property, v: string): void;
    function icalproperty_set_defaultcharset(prop: property, v: string): void;
    function icalproperty_set_defaultlocale(prop: property, v: string): void;
    function icalproperty_set_defaulttzid(prop: property, v: string): void;
    function icalproperty_set_defaultvcars(prop: property, v: string): void;
    function icalproperty_set_deny(prop: property, v: string): void;
    function icalproperty_set_description(prop: property, v: string): void;
    function icalproperty_set_dtend(prop: property, v: null): void;
    function icalproperty_set_dtstamp(prop: property, v: null): void;
    function icalproperty_set_dtstart(prop: property, v: null): void;
    function icalproperty_set_due(prop: property, v: null): void;
    function icalproperty_set_duration(prop: property, v: null): void;
    function icalproperty_set_estimatedduration(prop: property, v: null): void;
    function icalproperty_set_exdate(prop: property, v: null): void;
    function icalproperty_set_expand(prop: property, v: number): void;
    function icalproperty_set_exrule(prop: property, v: null): void;
    function icalproperty_set_freebusy(prop: property, v: null): void;
    function icalproperty_set_geo(prop: property, v: null): void;
    function icalproperty_set_grant(prop: property, v: string): void;
    function icalproperty_set_iana(prop: property, v: string): void;
    function icalproperty_set_iana_name(prop: property, name: string): void;
    function icalproperty_set_image(prop: property, v: attach): void;
    function icalproperty_set_itipversion(prop: property, v: string): void;
    function icalproperty_set_lastmodified(prop: property, v: null): void;
    function icalproperty_set_link(prop: property, v: string): void;
    function icalproperty_set_location(prop: property, v: string): void;
    function icalproperty_set_locationtype(prop: property, v: string): void;
    function icalproperty_set_maxcomponentsize(prop: property, v: number): void;
    function icalproperty_set_maxdate(prop: property, v: null): void;
    function icalproperty_set_maxresults(prop: property, v: number): void;
    function icalproperty_set_maxresultssize(prop: property, v: number): void;
    function icalproperty_set_method(prop: property, v: null): void;
    function icalproperty_set_mindate(prop: property, v: null): void;
    function icalproperty_set_multipart(prop: property, v: string): void;
    function icalproperty_set_name(prop: property, v: string): void;
    function icalproperty_set_organizer(prop: property, v: string): void;
    function icalproperty_set_owner(prop: property, v: string): void;
    function icalproperty_set_parameter(prop: property, parameter: parameter): void;
    function icalproperty_set_parameter_from_string(prop: property, name: string, value: string): void;
    function icalproperty_set_parent(property: property, component: component): void;
    function icalproperty_set_participanttype(prop: property, v: null): void;
    function icalproperty_set_patchdelete(prop: property, v: string): void;
    function icalproperty_set_patchorder(prop: property, v: number): void;
    function icalproperty_set_patchparameter(prop: property, v: string): void;
    function icalproperty_set_patchtarget(prop: property, v: string): void;
    function icalproperty_set_patchversion(prop: property, v: string): void;
    function icalproperty_set_percentcomplete(prop: property, v: number): void;
    function icalproperty_set_permission(prop: property, v: string): void;
    function icalproperty_set_pollcompletion(prop: property, v: null): void;
    function icalproperty_set_pollitemid(prop: property, v: number): void;
    function icalproperty_set_pollmode(prop: property, v: null): void;
    function icalproperty_set_pollproperties(prop: property, v: string): void;
    function icalproperty_set_pollwinner(prop: property, v: number): void;
    function icalproperty_set_priority(prop: property, v: number): void;
    function icalproperty_set_prodid(prop: property, v: string): void;
    function icalproperty_set_proximity(prop: property, v: null): void;
    function icalproperty_set_query(prop: property, v: string): void;
    function icalproperty_set_queryid(prop: property, v: string): void;
    function icalproperty_set_querylevel(prop: property, v: null): void;
    function icalproperty_set_queryname(prop: property, v: string): void;
    function icalproperty_set_rdate(prop: property, v: null): void;
    function icalproperty_set_recuraccepted(prop: property, v: string): void;
    function icalproperty_set_recurexpand(prop: property, v: string): void;
    function icalproperty_set_recurlimit(prop: property, v: string): void;
    function icalproperty_set_recurrenceid(prop: property, v: null): void;
    function icalproperty_set_refid(prop: property, v: string): void;
    function icalproperty_set_refreshinterval(prop: property, v: null): void;
    function icalproperty_set_relatedto(prop: property, v: string): void;
    function icalproperty_set_relcalid(prop: property, v: string): void;
    function icalproperty_set_repeat(prop: property, v: number): void;
    function icalproperty_set_replyurl(prop: property, v: string): void;
    function icalproperty_set_requeststatus(prop: property, v: null): void;
    function icalproperty_set_resources(prop: property, v: string): void;
    function icalproperty_set_resourcetype(prop: property, v: null): void;
    function icalproperty_set_response(prop: property, v: number): void;
    function icalproperty_set_restriction(prop: property, v: string): void;
    function icalproperty_set_rrule(prop: property, v: null): void;
    function icalproperty_set_scope(prop: property, v: string): void;
    function icalproperty_set_sequence(prop: property, v: number): void;
    function icalproperty_set_source(prop: property, v: string): void;
    function icalproperty_set_status(prop: property, v: null): void;
    function icalproperty_set_storesexpanded(prop: property, v: string): void;
    function icalproperty_set_structureddata(prop: property, v: attach): void;
    function icalproperty_set_styleddescription(prop: property, v: string): void;
    function icalproperty_set_summary(prop: property, v: string): void;
    function icalproperty_set_target(prop: property, v: string): void;
    function icalproperty_set_taskmode(prop: property, v: null): void;
    function icalproperty_set_transp(prop: property, v: null): void;
    function icalproperty_set_trigger(prop: property, v: null): void;
    function icalproperty_set_tzid(prop: property, v: string): void;
    function icalproperty_set_tzidaliasof(prop: property, v: string): void;
    function icalproperty_set_tzname(prop: property, v: string): void;
    function icalproperty_set_tzoffsetfrom(prop: property, v: number): void;
    function icalproperty_set_tzoffsetto(prop: property, v: number): void;
    function icalproperty_set_tzuntil(prop: property, v: null): void;
    function icalproperty_set_tzurl(prop: property, v: string): void;
    function icalproperty_set_uid(prop: property, v: string): void;
    function icalproperty_set_url(prop: property, v: string): void;
    function icalproperty_set_value(prop: property, value: value): void;
    function icalproperty_set_value_from_string(prop: property, str: string, type: string): void;
    function icalproperty_set_version(prop: property, v: string): void;
    function icalproperty_set_voter(prop: property, v: string): void;
    function icalproperty_set_x(prop: property, v: string): void;
    function icalproperty_set_x_name(prop: property, name: string): void;
    function icalproperty_set_xlicclass(prop: property, v: null): void;
    function icalproperty_set_xlicclustercount(prop: property, v: string): void;
    function icalproperty_set_xlicerror(prop: property, v: string): void;
    function icalproperty_set_xlicmimecharset(prop: property, v: string): void;
    function icalproperty_set_xlicmimecid(prop: property, v: string): void;
    function icalproperty_set_xlicmimecontenttype(prop: property, v: string): void;
    function icalproperty_set_xlicmimeencoding(prop: property, v: string): void;
    function icalproperty_set_xlicmimefilename(prop: property, v: string): void;
    function icalproperty_set_xlicmimeoptinfo(prop: property, v: string): void;
    function icalproperty_status_to_string(status: property_status): string;
    function icalproperty_string_to_action(string: string): property_action;
    function icalproperty_string_to_class(string: string): property_class;
    function icalproperty_string_to_kind(string: string): property_kind;
    function icalproperty_string_to_method(str: string): property_method;
    function icalproperty_string_to_participanttype(string: string): property_participanttype;
    function icalproperty_string_to_resourcetype(string: string): property_resourcetype;
    function icalproperty_string_to_status(string: string): property_status;
    function icalproperty_string_to_transp(string: string): property_transp;
    function icalproperty_transp_to_string(transp: property_transp): string;
    function icalproperty_value_kind_to_kind(kind: value_kind): property_kind;
    function icalpropiter_is_valid(i: propiter): boolean;
    function icalrecur_expand_recurrence(rule: string, start: bigint | number, count: number, array: bigint | number): boolean;
    function icalrecur_freq_to_string(kind: recurrencetype_frequency): string;
    function icalrecur_iterator_free(impl: recur_iterator): void;
    function icalrecur_iterator_next(arg0: recur_iterator): null;
    function icalrecur_iterator_prev(impl: recur_iterator): null;
    function icalrecur_iterator_set_end(impl: recur_iterator, end: null): boolean;
    function icalrecur_iterator_set_range(impl: recur_iterator, from: null, to: null): boolean;
    function icalrecur_iterator_set_start(impl: recur_iterator, start: null): boolean;
    function icalrecur_resize_by(by: recurrence_by_data, size: number): boolean;
    function icalrecur_skip_to_string(kind: recurrencetype_skip): string;
    function icalrecur_string_to_freq(str: string): recurrencetype_frequency;
    function icalrecur_string_to_skip(str: string): recurrencetype_skip;
    function icalrecur_string_to_weekday(str: string): recurrencetype_weekday;
    function icalrecur_weekday_to_string(kind: recurrencetype_weekday): string;
    function icalrecurrencetype_as_string(recur: null): string;
    function icalrecurrencetype_as_string_r(recur: null): string;
    function icalrecurrencetype_clone(r: null): null;
    function icalrecurrencetype_day_day_of_week(day: number): null;
    function icalrecurrencetype_day_position(day: number): number;
    function icalrecurrencetype_encode_day(weekday: null, position: number): number;
    function icalrecurrencetype_encode_month(month: number, is_leap: boolean): number;
    function icalrecurrencetype_month_is_leap(month: number): boolean;
    function icalrecurrencetype_month_month(month: number): number;
    function icalrecurrencetype_new(): null;
    function icalrecurrencetype_new_from_string(str: string): null;
    function icalrecurrencetype_ref(recur: null): void;
    function icalrecurrencetype_unref(recur: null): void;
    function icalreqstattype_as_string(arg0: null): string;
    function icalreqstattype_as_string_r(stat: null): string;
    function icalreqstattype_from_string(str: string): null;
    function icalrestriction_check(comp: component): boolean;
    function icalrestriction_compare(restr: restriction_kind, count: number): boolean;
    function icalstrarray_add(array: strarray, elem: string): void;
    function icalstrarray_append(array: strarray, elem: string): void;
    function icalstrarray_element_at(array: strarray, position: bigint | number): string;
    function icalstrarray_find(array: strarray, needle: string): number;
    function icalstrarray_free(array: strarray): void;
    function icalstrarray_remove(array: strarray, del: string): void;
    function icalstrarray_remove_element_at(array: strarray, position: bigint | number): void;
    function icalstrarray_size(array: strarray): number;
    function icalstrarray_sort(array: strarray): void;
    function icaltime_adjust(tt: null, days: number, hours: number, minutes: number, seconds: number): void;
    function icaltime_as_ical_string(tt: null): string;
    function icaltime_as_ical_string_r(tt: null): string;
    function icaltime_as_timet(tt: null): number;
    function icaltime_as_timet_with_zone(tt: null, zone: timezone): number;
    function icaltime_compare(a: null, b: null): number;
    function icaltime_compare_date_only(a: null, b: null): number;
    function icaltime_compare_date_only_tz(a: null, b: null, tz: timezone): number;
    function icaltime_convert_to_zone(tt: null, zone: timezone): null;
    function icaltime_current_time_with_zone(zone: timezone): null;
    function icaltime_day_of_week(t: null): number;
    function icaltime_day_of_year(t: null): number;
    function icaltime_days_in_month(month: number, year: number): number;
    function icaltime_days_in_year(year: number): number;
    function icaltime_from_day_of_year(doy: number, year: number): null;
    function icaltime_from_string(str: string): null;
    function icaltime_from_timet_with_zone(tm: bigint | number, is_date: boolean, zone: timezone): null;
    function icaltime_get_timezone(t: null): timezone;
    function icaltime_get_tzid(t: null): string;
    function icaltime_is_date(t: null): boolean;
    function icaltime_is_leap_year(year: number): boolean;
    function icaltime_is_null_time(t: null): boolean;
    function icaltime_is_utc(t: null): boolean;
    function icaltime_is_valid_time(t: null): boolean;
    function icaltime_normalize(tt: null): null;
    function icaltime_null_date(): null;
    function icaltime_null_time(): null;
    function icaltime_set_timezone(t: null, zone: timezone): null;
    function icaltime_start_doy_week(t: null, fdow: number): number;
    function icaltime_today(): null;
    function icaltimezone_array_append_from_vtimezone(timezones: array, child: component): void;
    function icaltimezone_array_free(timezones: array): void;
    function icaltimezone_convert_time(tt: null, from_zone: timezone, to_zone: timezone): void;
    function icaltimezone_dump_changes(zone: timezone, max_year: number, fp: null): boolean;
    function icaltimezone_expand_vtimezone(comp: component, end_year: number, changes: array): void;
    function icaltimezone_free(zone: timezone, free_struct: number): void;
    function icaltimezone_free_builtin_timezones(): void;
    function icaltimezone_free_zone_directory(): void;
    function icaltimezone_get_builtin_tzdata(): boolean;
    function icaltimezone_get_display_name(zone: timezone): string;
    function icaltimezone_get_latitude(zone: timezone): number;
    function icaltimezone_get_location(zone: timezone): string;
    function icaltimezone_get_location_from_vtimezone(component: component): string;
    function icaltimezone_get_longitude(zone: timezone): number;
    function icaltimezone_get_system_zone_directory(): string;
    function icaltimezone_get_tzid(zone: timezone): string;
    function icaltimezone_get_tznames(zone: timezone): string;
    function icaltimezone_get_tznames_from_vtimezone(component: component): string;
    function icaltimezone_get_utc_offset(zone: timezone, tt: null, is_daylight: number): number;
    function icaltimezone_get_utc_offset_of_utc_time(zone: timezone, tt: null, is_daylight: number): number;
    function icaltimezone_get_zone_directory(): string;
    function icaltimezone_set_builtin_tzdata(set: boolean): void;
    function icaltimezone_set_component(zone: timezone, comp: component): boolean;
    function icaltimezone_set_system_zone_directory(zonepath: string): void;
    function icaltimezone_set_tzid_prefix(new_prefix: string): void;
    function icaltimezone_set_zone_directory(path: string): void;
    function icaltimezone_truncate_vtimezone(vtz: component, start: timetype, end: timetype, ms_compatible: boolean): void;
    function icaltimezone_tzid_prefix(): string;
    function icaltriggertype_from_seconds(reltime: number): null;
    function icaltriggertype_from_string(str: string): null;
    function icaltriggertype_is_bad_trigger(tr: null): boolean;
    function icaltriggertype_is_null_trigger(tr: null): boolean;
    function icalvalue_as_ical_string(value: value): string;
    function icalvalue_as_ical_string_r(value: value): string;
    function icalvalue_compare(a: value, b: value): parameter_xliccomparetype;
    function icalvalue_decode_ical_string(szText: string, szDecText: string, maxBufferLen: number): boolean;
    function icalvalue_encode_ical_string(szText: string, szEncText: string, maxBufferLen: number): boolean;
    function icalvalue_free(value: value): void;
    function icalvalue_get_action(value: value): null;
    function icalvalue_get_binary(value: value): string;
    function icalvalue_get_boolean(value: value): number;
    function icalvalue_get_busytype(value: value): null;
    function icalvalue_get_caladdress(value: value): string;
    function icalvalue_get_carlevel(value: value): null;
    function icalvalue_get_class(value: value): null;
    function icalvalue_get_cmd(value: value): null;
    function icalvalue_get_color(value: value): string;
    function icalvalue_get_date(value: value): null;
    function icalvalue_get_datetime(value: value): null;
    function icalvalue_get_datetimedate(value: value): null;
    function icalvalue_get_datetimeperiod(value: value): null;
    function icalvalue_get_duration(value: value): null;
    function icalvalue_get_float(value: value): number;
    function icalvalue_get_geo(value: value): null;
    function icalvalue_get_integer(value: value): number;
    function icalvalue_get_method(value: value): null;
    function icalvalue_get_participanttype(value: value): null;
    function icalvalue_get_period(value: value): null;
    function icalvalue_get_pollcompletion(value: value): null;
    function icalvalue_get_pollmode(value: value): null;
    function icalvalue_get_proximity(value: value): null;
    function icalvalue_get_query(value: value): string;
    function icalvalue_get_querylevel(value: value): null;
    function icalvalue_get_recur(value: value): null;
    function icalvalue_get_requeststatus(value: value): null;
    function icalvalue_get_resourcetype(value: value): null;
    function icalvalue_get_status(value: value): null;
    function icalvalue_get_string(value: value): string;
    function icalvalue_get_taskmode(value: value): null;
    function icalvalue_get_text(value: value): string;
    function icalvalue_get_transp(value: value): null;
    function icalvalue_get_trigger(value: value): null;
    function icalvalue_get_uid(value: value): string;
    function icalvalue_get_uri(value: value): string;
    function icalvalue_get_utcoffset(value: value): number;
    function icalvalue_get_x(value: value): string;
    function icalvalue_get_xlicclass(value: value): null;
    function icalvalue_get_xmlreference(value: value): string;
    function icalvalue_is_valid(value: value): boolean;
    function icalvalue_isa(value: value): value_kind;
    function icalvalue_isa_value(value: null): boolean;
    function icalvalue_kind_is_valid(kind: value_kind): boolean;
    function icalvalue_kind_to_string(kind: value_kind): string;
    function icalvalue_reset_kind(value: value): void;
    function icalvalue_set_action(value: value, v: null): void;
    function icalvalue_set_attach(value: value, attach: attach): void;
    function icalvalue_set_binary(value: value, v: string): void;
    function icalvalue_set_boolean(value: value, v: number): void;
    function icalvalue_set_busytype(value: value, v: null): void;
    function icalvalue_set_caladdress(value: value, v: string): void;
    function icalvalue_set_carlevel(value: value, v: null): void;
    function icalvalue_set_class(value: value, v: null): void;
    function icalvalue_set_cmd(value: value, v: null): void;
    function icalvalue_set_color(value: value, v: string): void;
    function icalvalue_set_date(value: value, v: null): void;
    function icalvalue_set_datetime(value: value, v: null): void;
    function icalvalue_set_datetimedate(value: value, v: null): void;
    function icalvalue_set_datetimeperiod(value: value, v: null): void;
    function icalvalue_set_duration(value: value, v: null): void;
    function icalvalue_set_float(value: value, v: number): void;
    function icalvalue_set_geo(value: value, v: null): void;
    function icalvalue_set_integer(value: value, v: number): void;
    function icalvalue_set_method(value: value, v: null): void;
    function icalvalue_set_parent(value: value, property: property): void;
    function icalvalue_set_participanttype(value: value, v: null): void;
    function icalvalue_set_period(value: value, v: null): void;
    function icalvalue_set_pollcompletion(value: value, v: null): void;
    function icalvalue_set_pollmode(value: value, v: null): void;
    function icalvalue_set_proximity(value: value, v: null): void;
    function icalvalue_set_query(value: value, v: string): void;
    function icalvalue_set_querylevel(value: value, v: null): void;
    function icalvalue_set_recur(value: value, recur: null): void;
    function icalvalue_set_requeststatus(value: value, v: null): void;
    function icalvalue_set_resourcetype(value: value, v: null): void;
    function icalvalue_set_status(value: value, v: null): void;
    function icalvalue_set_string(value: value, v: string): void;
    function icalvalue_set_taskmode(value: value, v: null): void;
    function icalvalue_set_text(value: value, v: string): void;
    function icalvalue_set_transp(value: value, v: null): void;
    function icalvalue_set_trigger(value: value, v: null): void;
    function icalvalue_set_uid(value: value, v: string): void;
    function icalvalue_set_uri(value: value, v: string): void;
    function icalvalue_set_utcoffset(value: value, v: number): void;
    function icalvalue_set_x(value: value, v: string): void;
    function icalvalue_set_xlicclass(value: value, v: null): void;
    function icalvalue_set_xmlreference(value: value, v: string): void;
    function icalvalue_string_to_kind(str: string): value_kind;
    function print_date_to_string(str: string, data: null): void;
    function print_datetime_to_string(str: string, data: null): void;
    function set_invalid_rrule_handling_setting(newSetting: _invalid_rrule_handling): void;
    function set_unknown_token_handling_setting(newSetting: _unknown_token_handling): void;
    interface icalattach_free_fn_t {
        (data: string): void;
    }
    interface icalmemory_free_f {
        (arg0: null): void;
    }
    interface icalmemory_malloc_f {
        (arg0: number): null;
    }
    interface icalmemory_realloc_f {
        (arg0: null, arg1: number): null;
    }
    interface icalparser_line_gen_func {
        (s: string, size: number, d: null): string;
    }
    class array {
        static $gtype: GObject.GType<array>;
        element_size: number;
        increment_size: number;
        num_elements: number;
        space_allocated: number;
        chunks: null;
    }
    abstract class attach {
        static $gtype: GObject.GType<attach>;
    }
    class compiter {
        static $gtype: GObject.GType<compiter>;
        kind: component_kind;
        iter: null;
    }
    abstract class component {
        static $gtype: GObject.GType<component>;
    }
    class datetimeperiodtype {
        static $gtype: GObject.GType<datetimeperiodtype>;
        time: null;
        period: null;
        constructor(properties?: Partial<{
            time: null;
            period: null;
        }>);
    }
    class durationtype {
        static $gtype: GObject.GType<durationtype>;
        is_neg: number;
        days: number;
        weeks: number;
        hours: number;
        minutes: number;
        seconds: number;
        constructor(properties?: Partial<{
            is_neg: number;
            days: number;
            weeks: number;
            hours: number;
            minutes: number;
            seconds: number;
        }>);
    }
    class enumarray_element {
        static $gtype: GObject.GType<enumarray_element>;
        val: number;
        xvalue: string;
        constructor(properties?: Partial<{
            val: number;
            xvalue: string;
        }>);
    }
    class geotype {
        static $gtype: GObject.GType<geotype>;
        lat: number[];
        lon: number[];
        constructor(properties?: Partial<{
            lat: number[];
            lon: number[];
        }>);
    }
    abstract class parameter {
        static $gtype: GObject.GType<parameter>;
    }
    class paramiter {
        static $gtype: GObject.GType<paramiter>;
        kind: parameter_kind;
        iter: null;
    }
    abstract class parser {
        static $gtype: GObject.GType<parser>;
    }
    class periodtype {
        static $gtype: GObject.GType<periodtype>;
        start: null;
        end: null;
        duration: null;
        constructor(properties?: Partial<{
            start: null;
            end: null;
            duration: null;
        }>);
    }
    abstract class property {
        static $gtype: GObject.GType<property>;
    }
    class propiter {
        static $gtype: GObject.GType<propiter>;
        kind: property_kind;
        iter: null;
    }
    abstract class recur_iterator {
        static $gtype: GObject.GType<recur_iterator>;
    }
    class recurrence_by_data {
        static $gtype: GObject.GType<recurrence_by_data>;
        data: number;
        size: number;
        constructor(properties?: Partial<{
            data: number;
            size: number;
        }>);
    }
    class recurrencetype {
        static $gtype: GObject.GType<recurrencetype>;
        refcount: number;
        freq: recurrencetype_frequency;
        until: null;
        count: number;
        interval: number;
        week_start: recurrencetype_weekday;
        by: recurrence_by_data[];
        rscale: string;
        skip: recurrencetype_skip;
    }
    class reqstattype {
        static $gtype: GObject.GType<reqstattype>;
        code: requeststatus;
        desc: string;
        debug: string;
    }
    class timetype {
        static $gtype: GObject.GType<timetype>;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        is_date: number;
        is_daylight: number;
    }
    abstract class timezone {
        static $gtype: GObject.GType<timezone>;
    }
    class triggertype {
        static $gtype: GObject.GType<triggertype>;
        time: null;
        duration: null;
        constructor(properties?: Partial<{
            time: null;
            duration: null;
        }>);
    }
    abstract class value {
        static $gtype: GObject.GType<value>;
    }
    type enumarray = array;
    type strarray = array;
    const __name__: string;
    const __version__: string;
}
export default ICal;
}
declare module 'gi://ICal' {
    import ICal40 from 'gi://ICal?version=4.0';
    export default ICal40;
}
