goog.module('org.gwtproject.i18n.client.DateTimeFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormat = goog.require('org.gwtproject.i18n.shared.DateTimeFormat$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
let DateTimeFormatInfoImpl__en = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en$impl');
let DateTimeFormatInfo = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');
let DateTimeFormatInfo__factory = goog.forwardDeclare('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfo_factory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class org_gwtproject_i18n_client_DateTimeFormat extends DateTimeFormat {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {PredefinedFormat} predef
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  */
 static m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(predef) {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  if (org_gwtproject_i18n_client_DateTimeFormat.m_usesFixedEnglishStrings__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(predef)) {
   let /** ?string */ pattern;
   switch (predef.ordinal()) {
    case PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
     pattern = DateTimeFormat.f_RFC2822_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat;
     break;
    case PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
     pattern = DateTimeFormat.f_ISO8601_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat;
     break;
    default: 
     throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Unexpected predef type " + j_l_String.m_valueOf__java_lang_Object(predef)));
   }
   return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, DateTimeFormatInfoImpl__en.$create__());
  }
  let dtfi = org_gwtproject_i18n_client_DateTimeFormat.m_getDefaultDateTimeFormatInfo__();
  let /** ?string */ pattern_1;
  switch (predef.ordinal()) {
   case PredefinedFormat.$ordinal$f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatFull__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatLong__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatMedium__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatShort__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeFull__java_lang_String__java_lang_String(dtfi.m_timeFormatFull__(), dtfi.m_dateFormatFull__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeLong__java_lang_String__java_lang_String(dtfi.m_timeFormatLong__(), dtfi.m_dateFormatLong__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeMedium__java_lang_String__java_lang_String(dtfi.m_timeFormatMedium__(), dtfi.m_dateFormatMedium__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeShort__java_lang_String__java_lang_String(dtfi.m_timeFormatShort__(), dtfi.m_dateFormatShort__());
    break;
   case PredefinedFormat.$ordinal$f_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatDay__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR24_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour24Minute__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour24MinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR_MINUTE__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour12Minute__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour12MinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_MINUTE_SECOND__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFull__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthAbbrev__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthAbbrevDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFullDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthNumDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFullWeekdayDay__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatFull__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatLong__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatMedium__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatShort__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYear__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthFull__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthAbbrev__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthAbbrevDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthFullDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthNum__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthNumDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthWeekdayDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_QUARTER__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearQuarterFull__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearQuarterShort__();
    break;
   default: 
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unexpected predefined format " + j_l_String.m_valueOf__java_lang_Object(predef)));
  }
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern_1, dtfi);
 }
 /**
  * @param {?string} pattern
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  */
 static m_getFormat__java_lang_String(pattern) {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, org_gwtproject_i18n_client_DateTimeFormat.m_getDefaultDateTimeFormatInfo__());
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getFullDateFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getFullDateTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getFullTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_TIME_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getLongDateFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getLongDateTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getLongTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_TIME_LONG__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getMediumDateFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getMediumDateTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getMediumTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getShortDateFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getShortDateTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  * @deprecated
  */
 static m_getShortTimeFormat__() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  return org_gwtproject_i18n_client_DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_TIME_SHORT__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @return {org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  */
 static m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  let defaultDtfi = org_gwtproject_i18n_client_DateTimeFormat.m_getDefaultDateTimeFormatInfo__();
  let dtf = null;
  if ($Equality.$same(dtfi, defaultDtfi)) {
   dtf = /**@type {org_gwtproject_i18n_client_DateTimeFormat} */ ($Casts.$to(org_gwtproject_i18n_client_DateTimeFormat.f_cache__org_gwtproject_i18n_client_DateTimeFormat_.get(pattern), org_gwtproject_i18n_client_DateTimeFormat));
  }
  if ($Equality.$same(dtf, null)) {
   dtf = org_gwtproject_i18n_client_DateTimeFormat.$create__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi);
   if ($Equality.$same(dtfi, defaultDtfi)) {
    org_gwtproject_i18n_client_DateTimeFormat.f_cache__org_gwtproject_i18n_client_DateTimeFormat_.put(pattern, dtf);
   }
  }
  return dtf;
 }
 /**
  * @return {DateTimeFormatInfo}
  * @public
  */
 static m_getDefaultDateTimeFormatInfo__() {
  return DateTimeFormatInfo__factory.m_create__();
 }
 /**
  * @param {PredefinedFormat} predef
  * @return {boolean}
  * @public
  */
 static m_usesFixedEnglishStrings__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(predef) {
  switch (predef.ordinal()) {
   case PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    return true;
   case PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat: 
    return true;
   default: 
    return false;
  }
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormat(String)'.
  * @param {?string} pattern
  * @return {!org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  */
 static $create__java_lang_String(pattern) {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  let $instance = new org_gwtproject_i18n_client_DateTimeFormat();
  $instance.$ctor__org_gwtproject_i18n_client_DateTimeFormat__java_lang_String(pattern);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormat(String)'.
  * @param {?string} pattern
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DateTimeFormat__java_lang_String(pattern) {
  this.$ctor__org_gwtproject_i18n_client_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, org_gwtproject_i18n_client_DateTimeFormat.m_getDefaultDateTimeFormatInfo__());
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormat(String, DateTimeFormatInfo)'.
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @return {!org_gwtproject_i18n_client_DateTimeFormat}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit();
  let $instance = new org_gwtproject_i18n_client_DateTimeFormat();
  $instance.$ctor__org_gwtproject_i18n_client_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormat(String, DateTimeFormatInfo)'.
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  this.$ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi);
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_i18n_client_DateTimeFormat.$clinit = () =>{};
  org_gwtproject_i18n_client_DateTimeFormat.$loadModules();
  DateTimeFormat.$clinit();
  org_gwtproject_i18n_client_DateTimeFormat.f_cache__org_gwtproject_i18n_client_DateTimeFormat_ = /**@type {!HashMap<?string, org_gwtproject_i18n_client_DateTimeFormat>} */ (HashMap.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof org_gwtproject_i18n_client_DateTimeFormat;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
  DateTimeFormatInfoImpl__en = goog.module.get('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en$impl');
  DateTimeFormatInfo__factory = goog.module.get('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfo_factory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_i18n_client_DateTimeFormat, 'org.gwtproject.i18n.client.DateTimeFormat');

/** @public {Map<?string, org_gwtproject_i18n_client_DateTimeFormat>} */
org_gwtproject_i18n_client_DateTimeFormat.f_cache__org_gwtproject_i18n_client_DateTimeFormat_;

exports = org_gwtproject_i18n_client_DateTimeFormat; 
//# sourceMappingURL=DateTimeFormat.js.map