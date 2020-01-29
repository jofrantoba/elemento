goog.module('org.gwtproject.i18n.shared.DateTimeFormat$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let TimeZone = goog.forwardDeclare('org.gwtproject.i18n.client.TimeZone$impl');
let PatternPart = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat.PatternPart$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
let DateTimeFormatInfo = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');
let DefaultDateTimeFormatInfo = goog.forwardDeclare('org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo$impl');
let org_gwtproject_i18n_shared_TimeZone = goog.forwardDeclare('org.gwtproject.i18n.shared.TimeZone$impl');
let DateRecord = goog.forwardDeclare('org.gwtproject.i18n.shared.impl.DateRecord$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class DateTimeFormat extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ArrayList<PatternPart>} */
  this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_;
  /** @public {DateTimeFormatInfo} */
  this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_;
  /** @public {?string} */
  this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_;
 }
 /**
  * @param {PredefinedFormat} predef
  * @return {DateTimeFormat}
  * @public
  */
 static m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(predef) {
  DateTimeFormat.$clinit();
  if (DateTimeFormat.m_usesFixedEnglishStrings__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(predef)) {
   let /** ?string */ pattern;
   switch (predef.ordinal()) {
    case PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
     pattern = DateTimeFormat.f_RFC2822_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat;
     break;
    case PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
     pattern = DateTimeFormat.f_ISO8601_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat;
     break;
    default: 
     throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Unexpected predef type " + j_l_String.m_valueOf__java_lang_Object(predef)));
   }
   return DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, DefaultDateTimeFormatInfo.$create__());
  }
  let dtfi = DateTimeFormat.m_getDefaultDateTimeFormatInfo__();
  let /** ?string */ pattern_1;
  switch (predef.ordinal()) {
   case PredefinedFormat.$ordinal$f_DATE_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatFull__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_LONG__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatLong__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_MEDIUM__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatMedium__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_SHORT__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateFormatShort__();
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeFull__java_lang_String__java_lang_String(dtfi.m_timeFormatFull__(), dtfi.m_dateFormatFull__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_LONG__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeLong__java_lang_String__java_lang_String(dtfi.m_timeFormatLong__(), dtfi.m_dateFormatLong__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_MEDIUM__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeMedium__java_lang_String__java_lang_String(dtfi.m_timeFormatMedium__(), dtfi.m_dateFormatMedium__());
    break;
   case PredefinedFormat.$ordinal$f_DATE_TIME_SHORT__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_dateTimeShort__java_lang_String__java_lang_String(dtfi.m_timeFormatShort__(), dtfi.m_dateFormatShort__());
    break;
   case PredefinedFormat.$ordinal$f_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatDay__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR24_MINUTE__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour24Minute__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR24_MINUTE_SECOND__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour24MinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR_MINUTE__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour12Minute__();
    break;
   case PredefinedFormat.$ordinal$f_HOUR_MINUTE_SECOND__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatHour12MinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_MINUTE_SECOND__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMinuteSecond__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFull__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_ABBR__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthAbbrev__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_ABBR_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthAbbrevDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFullDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_NUM_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthNumDay__();
    break;
   case PredefinedFormat.$ordinal$f_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatMonthFullWeekdayDay__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatFull__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_LONG__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatLong__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_MEDIUM__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatMedium__();
    break;
   case PredefinedFormat.$ordinal$f_TIME_SHORT__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_timeFormatShort__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYear__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthFull__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthAbbrev__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_ABBR_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthAbbrevDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthFullDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthNum__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_NUM_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthNumDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_MONTH_WEEKDAY_DAY__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearMonthWeekdayDay__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_QUARTER__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearQuarterFull__();
    break;
   case PredefinedFormat.$ordinal$f_YEAR_QUARTER_ABBR__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    pattern_1 = dtfi.m_formatYearQuarterShort__();
    break;
   default: 
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unexpected predefined format " + j_l_String.m_valueOf__java_lang_Object(predef)));
  }
  return DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern_1, dtfi);
 }
 /**
  * @param {?string} pattern
  * @return {DateTimeFormat}
  * @public
  */
 static m_getFormat__java_lang_String(pattern) {
  DateTimeFormat.$clinit();
  return DateTimeFormat.m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, DateTimeFormat.m_getDefaultDateTimeFormatInfo__());
 }
 /**
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @return {DateTimeFormat}
  * @public
  */
 static m_getFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  DateTimeFormat.$clinit();
  let defaultDtfi = DateTimeFormat.m_getDefaultDateTimeFormatInfo__();
  let dtf = null;
  if ($Equality.$same(dtfi, defaultDtfi)) {
   dtf = /**@type {DateTimeFormat} */ ($Casts.$to(DateTimeFormat.f_cache__org_gwtproject_i18n_shared_DateTimeFormat_.get(pattern), DateTimeFormat));
  }
  if ($Equality.$same(dtf, null)) {
   dtf = DateTimeFormat.$create__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi);
   if ($Equality.$same(dtfi, defaultDtfi)) {
    DateTimeFormat.f_cache__org_gwtproject_i18n_shared_DateTimeFormat_.put(pattern, dtf);
   }
  }
  return dtf;
 }
 /**
  * @return {DateTimeFormatInfo}
  * @public
  */
 static m_getDefaultDateTimeFormatInfo__() {
  return LocaleInfo.m_getCurrentLocale__().m_getDateTimeFormatInfo__();
 }
 /**
  * @param {PredefinedFormat} predef
  * @return {boolean}
  * @public
  */
 static m_usesFixedEnglishStrings__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(predef) {
  switch (predef.ordinal()) {
   case PredefinedFormat.$ordinal$f_RFC_2822__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    return true;
   case PredefinedFormat.$ordinal$f_ISO_8601__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat: 
    return true;
   default: 
    return false;
  }
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormat(String)'.
  * @param {?string} pattern
  * @return {!DateTimeFormat}
  * @public
  */
 static $create__java_lang_String(pattern) {
  DateTimeFormat.$clinit();
  let $instance = new DateTimeFormat();
  $instance.$ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String(pattern);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormat(String)'.
  * @param {?string} pattern
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String(pattern) {
  this.$ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, DateTimeFormat.m_getDefaultDateTimeFormatInfo__());
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormat(String, DateTimeFormatInfo)'.
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @return {!DateTimeFormat}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  DateTimeFormat.$clinit();
  let $instance = new DateTimeFormat();
  $instance.$ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormat(String, DateTimeFormatInfo)'.
  * @param {?string} pattern
  * @param {DateTimeFormatInfo} dtfi
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_DateTimeFormat__java_lang_String__org_gwtproject_i18n_shared_DateTimeFormatInfo(pattern, dtfi) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_i18n_shared_DateTimeFormat();
  this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_ = pattern;
  this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_ = dtfi;
  this.m_parsePattern__java_lang_String_$p_org_gwtproject_i18n_shared_DateTimeFormat(pattern);
 }
 /**
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_format__java_util_Date(date) {
  return this.m_format__java_util_Date__org_gwtproject_i18n_shared_TimeZone(date, null);
 }
 /**
  * @param {Date} date
  * @param {org_gwtproject_i18n_shared_TimeZone} timeZone
  * @return {?string}
  * @public
  */
 m_format__java_util_Date__org_gwtproject_i18n_shared_TimeZone(date, timeZone) {
  if ($Equality.$same(timeZone, null)) {
   timeZone = this.m_createTimeZone__int(date.m_getTimezoneOffset__());
  }
  let diff = (date.m_getTimezoneOffset__() - timeZone.m_getOffset__java_util_Date(date)) * 60000;
  let keepDate = Date.$create__long($LongUtils.$plus(date.m_getTime__(), $Primitives.$widenIntToLong(diff)));
  let keepTime = keepDate;
  if (keepDate.m_getTimezoneOffset__() != date.m_getTimezoneOffset__()) {
   if (diff > 0) {
    diff -= DateTimeFormat.f_NUM_MILLISECONDS_IN_DAY__org_gwtproject_i18n_shared_DateTimeFormat_;
   } else {
    diff += DateTimeFormat.f_NUM_MILLISECONDS_IN_DAY__org_gwtproject_i18n_shared_DateTimeFormat_;
   }
   keepTime = Date.$create__long($LongUtils.$plus(date.m_getTime__(), $Primitives.$widenIntToLong(diff)));
  }
  let toAppendTo = StringBuilder.$create__int(64);
  let /** number */ j, n = j_l_String.m_length__java_lang_String(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_);
  for (let i = 0; i < n; ) {
   let ch = j_l_String.m_charAt__java_lang_String__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, i);
   if ((ch >= 97 /* 'a' */ && ch <= 122 /* 'z' */) || (ch >= 65 /* 'A' */ && ch <= 90 /* 'Z' */)) {
    for (j = i + 1; j < n && j_l_String.m_charAt__java_lang_String__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, j) == ch; ++j) {}
    this.m_subFormat__java_lang_StringBuilder__char__int__java_util_Date__java_util_Date__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(toAppendTo, ch, j - i, date, keepDate, keepTime, timeZone);
    i = j;
   } else if (ch == 39 /* '\'' */) {
    ++i;
    if (i < n && j_l_String.m_charAt__java_lang_String__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, i) == 39 /* '\'' */) {
     toAppendTo.m_append__char(39 /* '\'' */);
     ++i;
     continue;
    }
    let trailQuote = false;
    while (!trailQuote) {
     j = i;
     while (j < n && j_l_String.m_charAt__java_lang_String__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, j) != 39 /* '\'' */) {
      ++j;
     }
     if (j >= n) {
      throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Missing trailing '"));
     }
     if (j + 1 < n && j_l_String.m_charAt__java_lang_String__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, j + 1) == 39 /* '\'' */) {
      ++j;
     } else {
      trailQuote = true;
     }
     toAppendTo.m_append__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_, i, j));
     i = j + 1;
    }
   } else {
    toAppendTo.m_append__char(ch);
    ++i;
   }
  }
  return toAppendTo.toString();
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPattern__() {
  return this.f_pattern__org_gwtproject_i18n_shared_DateTimeFormat_;
 }
 /**
  * @param {?string} text
  * @return {Date}
  * @public
  */
 m_parse__java_lang_String(text) {
  return this.m_parse__java_lang_String__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, false);
 }
 /**
  * @param {?string} text
  * @param {number} start
  * @param {Date} date
  * @return {number}
  * @public
  */
 m_parse__java_lang_String__int__java_util_Date(text, start, date) {
  return this.m_parse__java_lang_String__int__java_util_Date__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, date, false);
 }
 /**
  * @param {?string} text
  * @return {Date}
  * @public
  */
 m_parseStrict__java_lang_String(text) {
  return this.m_parse__java_lang_String__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, true);
 }
 /**
  * @param {?string} text
  * @param {number} start
  * @param {Date} date
  * @return {number}
  * @public
  */
 m_parseStrict__java_lang_String__int__java_util_Date(text, start, date) {
  return this.m_parse__java_lang_String__int__java_util_Date__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, date, true);
 }
 /**
  * @param {number} timezoneOffset
  * @return {org_gwtproject_i18n_shared_TimeZone}
  * @public
  */
 m_createTimeZone__int(timezoneOffset) {
  return TimeZone.m_createTimeZone__int(timezoneOffset);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @public
  */
 m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count) {
  if (buf.m_length__() > 0) {
   this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.add(PatternPart.$create__java_lang_String__int(buf.toString(), count));
   buf.m_setLength__int(0);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_format0To11Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = $Primitives.$coerceDivision(date.m_getHours__() % 12);
  this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_format0To23Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getHours__();
  this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_format1To12Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = $Primitives.$coerceDivision(date.m_getHours__() % 12);
  if (value == 0) {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 12, count);
  } else {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_format24Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getHours__();
  if (value == 0) {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 24, count);
  } else {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {Date} date
  * @public
  */
 m_formatAmPm__java_lang_StringBuilder__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, date) {
  if (date.m_getHours__() >= 12 && date.m_getHours__() < 24) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_ampms__()[1]);
  } else {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_ampms__()[0]);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatDate__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getDate__();
  this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatDayOfWeek__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getDay__();
  if (count == 5) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysNarrow__()[value]);
  } else if (count == 4) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysFull__()[value]);
  } else {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysShort__()[value]);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatEra__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getYear__() >= -DateTimeFormat.f_JS_START_YEAR__org_gwtproject_i18n_shared_DateTimeFormat_ ? 1 : 0;
  if (count >= 4) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_erasFull__()[value]);
  } else {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_erasShort__()[value]);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatFractionalSeconds__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let time = date.m_getTime__();
  let /** number */ value;
  if ($LongUtils.$less(time, $Long.fromInt(0))) {
   value = 1000 - $Primitives.$narrowLongToInt($LongUtils.$remainder($LongUtils.$negate(time), $Long.fromInt(1000)));
   if (value == 1000) {
    value = 0;
   }
  } else {
   value = $Primitives.$narrowLongToInt($LongUtils.$remainder(time, $Long.fromInt(1000)));
  }
  if (count == 1) {
   value = Math.min($Primitives.$coerceDivision((value + 50) / 100), 9);
   buf.m_append__char($Primitives.$narrowIntToChar((48 /* '0' */ + value)));
  } else if (count == 2) {
   value = Math.min($Primitives.$coerceDivision((value + 5) / 10), 99);
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, 2);
  } else {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, 3);
   if (count > 3) {
    this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 0, count - 3);
   }
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatMinutes__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getMinutes__();
  this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatMonth__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getMonth__();
  switch (count) {
   case 5: 
    buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsNarrow__()[value]);
    break;
   case 4: 
    buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsFull__()[value]);
    break;
   case 3: 
    buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsShort__()[value]);
    break;
   default: 
    this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value + 1, count);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatQuarter__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = $Primitives.$coerceDivision(date.m_getMonth__() / 3);
  if (count < 4) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_quartersShort__()[value]);
  } else {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_quartersFull__()[value]);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatSeconds__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getSeconds__();
  this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatStandaloneDay__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getDay__();
  if (count == 5) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysNarrowStandalone__()[value]);
  } else if (count == 4) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysFullStandalone__()[value]);
  } else if (count == 3) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysShortStandalone__()[value]);
  } else {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, 1);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatStandaloneMonth__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getMonth__();
  if (count == 5) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsNarrowStandalone__()[value]);
  } else if (count == 4) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsFullStandalone__()[value]);
  } else if (count == 3) {
   buf.m_append__java_lang_String(this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsShortStandalone__()[value]);
  } else {
   this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value + 1, count);
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @param {org_gwtproject_i18n_shared_TimeZone} timeZone
  * @public
  */
 m_formatTimeZone__java_lang_StringBuilder__int__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date, timeZone) {
  if (count < 4) {
   buf.m_append__java_lang_String(timeZone.m_getShortName__java_util_Date(date));
  } else {
   buf.m_append__java_lang_String(timeZone.m_getLongName__java_util_Date(date));
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @param {org_gwtproject_i18n_shared_TimeZone} timeZone
  * @public
  */
 m_formatTimeZoneRFC__java_lang_StringBuilder__int__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date, timeZone) {
  if (count < 3) {
   buf.m_append__java_lang_String(timeZone.m_getRFCTimeZoneString__java_util_Date(date));
  } else if (count == 3) {
   buf.m_append__java_lang_String(timeZone.m_getISOTimeZoneString__java_util_Date(date));
  } else {
   buf.m_append__java_lang_String(timeZone.m_getGMTString__java_util_Date(date));
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} count
  * @param {Date} date
  * @public
  */
 m_formatYear__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date) {
  let value = date.m_getYear__() + DateTimeFormat.f_JS_START_YEAR__org_gwtproject_i18n_shared_DateTimeFormat_;
  if (value < 0) {
   value = -value;
  }
  switch (count) {
   case 1: 
    buf.m_append__int(value);
    break;
   case 2: 
    this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, $Primitives.$coerceDivision(value % 100), 2);
    break;
   default: 
    this.m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, count);
    break;
  }
 }
 /**
  * @param {?string} pattern
  * @param {number} start
  * @return {number}
  * @public
  */
 m_getNextCharCountInPattern__java_lang_String__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(pattern, start) {
  let ch = j_l_String.m_charAt__java_lang_String__int(pattern, start);
  let next = start + 1;
  while (next < j_l_String.m_length__java_lang_String(pattern) && j_l_String.m_charAt__java_lang_String__int(pattern, next) == ch) {
   ++next;
  }
  return next - start;
 }
 /**
  * @public
  */
 m_identifyAbutStart___$p_org_gwtproject_i18n_shared_DateTimeFormat() {
  let abut = false;
  let len = this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.size();
  for (let i = 0; i < len; i++) {
   if (this.m_isNumeric__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart_$p_org_gwtproject_i18n_shared_DateTimeFormat(/**@type {PatternPart} */ ($Casts.$to(this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.getAtIndex(i), PatternPart)))) {
    if (!abut && i + 1 < len && this.m_isNumeric__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart_$p_org_gwtproject_i18n_shared_DateTimeFormat(/**@type {PatternPart} */ ($Casts.$to(this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.getAtIndex(i + 1), PatternPart)))) {
     abut = true;
     /**@type {PatternPart} */ ($Casts.$to(this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.getAtIndex(i), PatternPart)).f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart = true;
    }
   } else {
    abut = false;
   }
  }
 }
 /**
  * @param {PatternPart} part
  * @return {boolean}
  * @public
  */
 m_isNumeric__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart_$p_org_gwtproject_i18n_shared_DateTimeFormat(part) {
  if (part.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart <= 0) {
   return false;
  }
  let i = j_l_String.m_indexOf__java_lang_String__int(DateTimeFormat.f_NUMERIC_FORMAT_CHARS__org_gwtproject_i18n_shared_DateTimeFormat_, j_l_String.m_charAt__java_lang_String__int(part.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart, 0));
  return (i > 1 || (i >= 0 && part.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart < 3));
 }
 /**
  * @param {?string} text
  * @param {number} start
  * @param {Array<?string>} data
  * @param {Array<number>} pos
  * @return {number}
  * @public
  */
 m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, data, pos) {
  let count = data.length;
  let bestMatchLength = 0, bestMatch = -1;
  let textInLowerCase = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(j_l_String.m_substring__java_lang_String__int(text, start), Locale.f_ROOT__java_util_Locale);
  for (let i = 0; i < count; ++i) {
   let length = j_l_String.m_length__java_lang_String(data[i]);
   if (length > bestMatchLength && j_l_String.m_startsWith__java_lang_String__java_lang_String(textInLowerCase, j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(data[i], Locale.f_ROOT__java_util_Locale))) {
    bestMatch = i;
    bestMatchLength = length;
   }
  }
  if (bestMatch >= 0) {
   $Arrays.$set(pos, 0, start + bestMatchLength);
  }
  return bestMatch;
 }
 /**
  * @param {?string} text
  * @param {boolean} strict
  * @return {Date}
  * @public
  */
 m_parse__java_lang_String__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, strict) {
  let curDate = Date.$create__();
  let date = Date.$create__int__int__int(curDate.m_getYear__(), curDate.m_getMonth__(), curDate.m_getDate__());
  let charsConsumed = this.m_parse__java_lang_String__int__java_util_Date__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, 0, date, strict);
  if (charsConsumed == 0 || charsConsumed < j_l_String.m_length__java_lang_String(text)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(text));
  }
  return date;
 }
 /**
  * @param {?string} text
  * @param {number} start
  * @param {Date} date
  * @param {boolean} strict
  * @return {number}
  * @public
  */
 m_parse__java_lang_String__int__java_util_Date__boolean_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, date, strict) {
  let cal = DateRecord.$create__();
  let parsePos = /**@type {!Array<number>} */ ($Arrays.$init([start], $int));
  let abutPat = -1;
  let abutStart = 0;
  let abutPass = 0;
  for (let i = 0; i < this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.size(); ++i) {
   let part = /**@type {PatternPart} */ ($Casts.$to(this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_.getAtIndex(i), PatternPart));
   if (part.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart > 0) {
    if (abutPat < 0 && part.f_abutStart__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart) {
     abutPat = i;
     abutStart = parsePos[0];
     abutPass = 0;
    }
    if (abutPat >= 0) {
     let count = part.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart;
     if (i == abutPat) {
      count -= abutPass++;
      if (count == 0) {
       return 0;
      }
     }
     if (!this.m_subParse__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, parsePos, part, count, cal)) {
      i = abutPat - 1;
      $Arrays.$set(parsePos, 0, abutStart);
      continue;
     }
    } else {
     abutPat = -1;
     if (!this.m_subParse__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, parsePos, part, 0, cal)) {
      return 0;
     }
    }
   } else {
    abutPat = -1;
    if (j_l_String.m_charAt__java_lang_String__int(part.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart, 0) == 32 /* ' ' */) {
     let s = parsePos[0];
     this.m_skipSpace__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, parsePos);
     if (parsePos[0] > s) {
      continue;
     }
    } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String__int(text, part.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart, parsePos[0])) {
     parsePos[0] += j_l_String.m_length__java_lang_String(part.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart);
     continue;
    }
    return 0;
   }
  }
  if (!cal.m_calcDate__java_util_Date__boolean(date, strict)) {
   return 0;
  }
  return parsePos[0] - start;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @return {number}
  * @public
  */
 m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos) {
  let ret = 0;
  let ind = pos[0];
  if (ind >= j_l_String.m_length__java_lang_String(text)) {
   return -1;
  }
  let ch = j_l_String.m_charAt__java_lang_String__int(text, ind);
  while (ch >= 48 /* '0' */ && ch <= 57 /* '9' */) {
   ret = ret * 10 + (ch - 48 /* '0' */);
   ind++;
   if (ind >= j_l_String.m_length__java_lang_String(text)) {
    break;
   }
   ch = j_l_String.m_charAt__java_lang_String__int(text, ind);
  }
  if (ind > pos[0]) {
   $Arrays.$set(pos, 0, ind);
  } else {
   ret = -1;
  }
  return ret;
 }
 /**
  * @param {?string} pattern
  * @public
  */
 m_parsePattern__java_lang_String_$p_org_gwtproject_i18n_shared_DateTimeFormat(pattern) {
  let buf = StringBuilder.$create__int(32);
  let inQuote = false;
  for (let i = 0; i < j_l_String.m_length__java_lang_String(pattern); i++) {
   let ch = j_l_String.m_charAt__java_lang_String__int(pattern, i);
   if (ch == 32 /* ' ' */) {
    this.m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 0);
    buf.m_append__char(32 /* ' ' */);
    this.m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 0);
    while (i + 1 < j_l_String.m_length__java_lang_String(pattern) && j_l_String.m_charAt__java_lang_String__int(pattern, i + 1) == 32 /* ' ' */) {
     i++;
    }
    continue;
   }
   if (inQuote) {
    if (ch == 39 /* '\'' */) {
     if (i + 1 < j_l_String.m_length__java_lang_String(pattern) && j_l_String.m_charAt__java_lang_String__int(pattern, i + 1) == 39 /* '\'' */) {
      buf.m_append__char(ch);
      ++i;
     } else {
      inQuote = false;
     }
    } else {
     buf.m_append__char(ch);
    }
    continue;
   }
   if (j_l_String.m_indexOf__java_lang_String__int(DateTimeFormat.f_PATTERN_CHARS__org_gwtproject_i18n_shared_DateTimeFormat_, ch) > 0) {
    this.m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 0);
    buf.m_append__char(ch);
    let count = this.m_getNextCharCountInPattern__java_lang_String__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(pattern, i);
    this.m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count);
    i += count - 1;
    continue;
   }
   if (ch == 39 /* '\'' */) {
    if (i + 1 < j_l_String.m_length__java_lang_String(pattern) && j_l_String.m_charAt__java_lang_String__int(pattern, i + 1) == 39 /* '\'' */) {
     buf.m_append__char(39 /* '\'' */);
     i++;
    } else {
     inQuote = true;
    }
   } else {
    buf.m_append__char(ch);
   }
  }
  this.m_addPart__java_lang_StringBuilder__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, 0);
  this.m_identifyAbutStart___$p_org_gwtproject_i18n_shared_DateTimeFormat();
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_parseTimeZoneOffset__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal) {
  if (pos[0] >= j_l_String.m_length__java_lang_String(text)) {
   cal.m_setTzOffset__int(0);
   return true;
  }
  let /** number */ sign;
  switch (j_l_String.m_charAt__java_lang_String__int(text, pos[0])) {
   case 43 /* '+' */: 
    sign = 1;
    break;
   case 45 /* '-' */: 
    sign = -1;
    break;
   default: 
    cal.m_setTzOffset__int(0);
    return true;
  }
  ++pos[0];
  let st = pos[0];
  let value = this.m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos);
  if (value == 0 && pos[0] == st) {
   return false;
  }
  let /** number */ offset;
  if (pos[0] < j_l_String.m_length__java_lang_String(text) && j_l_String.m_charAt__java_lang_String__int(text, pos[0]) == 58 /* ':' */) {
   offset = value * DateTimeFormat.f_MINUTES_PER_HOUR__org_gwtproject_i18n_shared_DateTimeFormat_;
   ++pos[0];
   st = pos[0];
   value = this.m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos);
   if (value == 0 && pos[0] == st) {
    return false;
   }
   offset += value;
  } else {
   offset = value;
   if (offset < 24 && (pos[0] - st) <= 2) {
    offset *= DateTimeFormat.f_MINUTES_PER_HOUR__org_gwtproject_i18n_shared_DateTimeFormat_;
   } else {
    offset = $Primitives.$coerceDivision(offset % 100) + $Primitives.$coerceDivision(offset / 100) * DateTimeFormat.f_MINUTES_PER_HOUR__org_gwtproject_i18n_shared_DateTimeFormat_;
   }
  }
  offset *= sign;
  cal.m_setTzOffset__int(-offset);
  return true;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @public
  */
 m_skipSpace__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos) {
  while (pos[0] < j_l_String.m_length__java_lang_String(text) && j_l_String.m_indexOf__java_lang_String__int(DateTimeFormat.f_WHITE_SPACE__org_gwtproject_i18n_shared_DateTimeFormat_, j_l_String.m_charAt__java_lang_String__int(text, pos[0])) >= 0) {
   ++pos[0];
  }
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} ch
  * @param {number} count
  * @param {Date} date
  * @param {Date} adjustedDate
  * @param {Date} adjustedTime
  * @param {org_gwtproject_i18n_shared_TimeZone} timezone
  * @return {boolean}
  * @public
  */
 m_subFormat__java_lang_StringBuilder__char__int__java_util_Date__java_util_Date__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, ch, count, date, adjustedDate, adjustedTime, timezone) {
  switch (ch) {
   case 71 /* 'G' */: 
    this.m_formatEra__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 121 /* 'y' */: 
    this.m_formatYear__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 77 /* 'M' */: 
    this.m_formatMonth__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 107 /* 'k' */: 
    this.m_format24Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 83 /* 'S' */: 
    this.m_formatFractionalSeconds__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 69 /* 'E' */: 
    this.m_formatDayOfWeek__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 97 /* 'a' */: 
    this.m_formatAmPm__java_lang_StringBuilder__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, adjustedTime);
    break;
   case 104 /* 'h' */: 
    this.m_format1To12Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 75 /* 'K' */: 
    this.m_format0To11Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 72 /* 'H' */: 
    this.m_format0To23Hours__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 99 /* 'c' */: 
    this.m_formatStandaloneDay__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 76 /* 'L' */: 
    this.m_formatStandaloneMonth__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 81 /* 'Q' */: 
    this.m_formatQuarter__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 100 /* 'd' */: 
    this.m_formatDate__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedDate);
    break;
   case 109 /* 'm' */: 
    this.m_formatMinutes__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 115 /* 's' */: 
    this.m_formatSeconds__java_lang_StringBuilder__int__java_util_Date_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, adjustedTime);
    break;
   case 122 /* 'z' */: 
    this.m_formatTimeZone__java_lang_StringBuilder__int__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date, timezone);
    break;
   case 118 /* 'v' */: 
    buf.m_append__java_lang_String(timezone.m_getID__());
    break;
   case 90 /* 'Z' */: 
    this.m_formatTimeZoneRFC__java_lang_StringBuilder__int__java_util_Date__org_gwtproject_i18n_shared_TimeZone_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, count, date, timezone);
    break;
   default: 
    return false;
  }
  return true;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {PatternPart} part
  * @param {number} digitCount
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParse__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, part, digitCount, cal) {
  this.m_skipSpace__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos);
  let start = pos[0];
  let ch = j_l_String.m_charAt__java_lang_String__int(part.f_text__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart, 0);
  let value = -1;
  if (this.m_isNumeric__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart_$p_org_gwtproject_i18n_shared_DateTimeFormat(part)) {
   if (digitCount > 0) {
    if ((start + digitCount) > j_l_String.m_length__java_lang_String(text)) {
     return false;
    }
    value = this.m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(j_l_String.m_substring__java_lang_String__int__int(text, 0, start + digitCount), pos);
   } else {
    value = this.m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos);
   }
  }
  switch (ch) {
   case 71 /* 'G' */: 
    value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_erasFull__(), pos);
    cal.m_setEra__int(value);
    return true;
   case 77 /* 'M' */: 
    return this.m_subParseMonth__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal, value, start);
   case 76 /* 'L' */: 
    return this.m_subParseStandaloneMonth__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal, value, start);
   case 69 /* 'E' */: 
    return this.m_subParseDayOfWeek__java_lang_String__arrayOf_int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, cal);
   case 99 /* 'c' */: 
    return this.m_subParseStandaloneDay__java_lang_String__arrayOf_int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, cal);
   case 97 /* 'a' */: 
    value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_ampms__(), pos);
    cal.m_setAmpm__int(value);
    return true;
   case 121 /* 'y' */: 
    return this.m_subParseYear__java_lang_String__arrayOf_int__int__int__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, value, part, cal);
   case 100 /* 'd' */: 
    if (value <= 0) {
     return false;
    }
    cal.m_setDayOfMonth__int(value);
    return true;
   case 83 /* 'S' */: 
    if (value < 0) {
     return false;
    }
    return this.m_subParseFractionalSeconds__int__int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(value, start, pos[0], cal);
   case 104 /* 'h' */: 
    if (value == 12) {
     value = 0;
    }
   case 75 /* 'K' */: 
   case 72 /* 'H' */: 
    if (value < 0) {
     return false;
    }
    cal.m_setHours__int(value);
    cal.m_setMidnightIs24__boolean(false);
    return true;
   case 107 /* 'k' */: 
    if (value < 0) {
     return false;
    }
    cal.m_setHours__int(value);
    cal.m_setMidnightIs24__boolean(true);
    return true;
   case 109 /* 'm' */: 
    if (value < 0) {
     return false;
    }
    cal.m_setMinutes__int(value);
    return true;
   case 115 /* 's' */: 
    if (value < 0) {
     return false;
    }
    cal.m_setSeconds__int(value);
    return true;
   case 90 /* 'Z' */: 
    if (start < j_l_String.m_length__java_lang_String(text) && j_l_String.m_charAt__java_lang_String__int(text, start) == 90 /* 'Z' */) {
     pos[0]++;
     cal.m_setTzOffset__int(0);
     return true;
    }
   case 122 /* 'z' */: 
   case 118 /* 'v' */: 
    return this.m_subParseTimeZoneInGMT__java_lang_String__int__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, pos, cal);
   default: 
    return false;
  }
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {number} start
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParseDayOfWeek__java_lang_String__arrayOf_int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, cal) {
  let /** number */ value;
  value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysFull__(), pos);
  if (value < 0) {
   value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysShort__(), pos);
  }
  if (value < 0) {
   return false;
  }
  cal.m_setDayOfWeek__int(value);
  return true;
 }
 /**
  * @param {number} value
  * @param {number} start
  * @param {number} end
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParseFractionalSeconds__int__int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(value, start, end, cal) {
  let i = end - start;
  if (i < 3) {
   while (i < 3) {
    value *= 10;
    i++;
   }
  } else {
   let a = 1;
   while (i > 3) {
    a *= 10;
    i--;
   }
   value = $Primitives.$coerceDivision((value + (a >> 1)) / a);
  }
  cal.m_setMilliseconds__int(value);
  return true;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {DateRecord} cal
  * @param {number} value
  * @param {number} start
  * @return {boolean}
  * @public
  */
 m_subParseMonth__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal, value, start) {
  if (value < 0) {
   value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsFull__(), pos);
   if (value < 0) {
    value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsShort__(), pos);
   }
   if (value < 0) {
    return false;
   }
   cal.m_setMonth__int(value);
   return true;
  } else if (value > 0) {
   cal.m_setMonth__int(value - 1);
   return true;
  }
  return false;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {number} start
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParseStandaloneDay__java_lang_String__arrayOf_int__int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, cal) {
  let /** number */ value;
  value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysFullStandalone__(), pos);
  if (value < 0) {
   value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_weekdaysShortStandalone__(), pos);
  }
  if (value < 0) {
   return false;
  }
  cal.m_setDayOfWeek__int(value);
  return true;
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {DateRecord} cal
  * @param {number} value
  * @param {number} start
  * @return {boolean}
  * @public
  */
 m_subParseStandaloneMonth__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal, value, start) {
  if (value < 0) {
   value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsFullStandalone__(), pos);
   if (value < 0) {
    value = this.m_matchString__java_lang_String__int__arrayOf_java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, this.f_dateTimeFormatInfo__org_gwtproject_i18n_shared_DateTimeFormat_.m_monthsShortStandalone__(), pos);
   }
   if (value < 0) {
    return false;
   }
   cal.m_setMonth__int(value);
   return true;
  } else if (value > 0) {
   cal.m_setMonth__int(value - 1);
   return true;
  }
  return false;
 }
 /**
  * @param {?string} text
  * @param {number} start
  * @param {Array<number>} pos
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParseTimeZoneInGMT__java_lang_String__int__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, start, pos, cal) {
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String__int(text, DateTimeFormat.f_GMT__org_gwtproject_i18n_shared_DateTimeFormat_, start)) {
   $Arrays.$set(pos, 0, start + j_l_String.m_length__java_lang_String(DateTimeFormat.f_GMT__org_gwtproject_i18n_shared_DateTimeFormat_));
   return this.m_parseTimeZoneOffset__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal);
  }
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String__int(text, DateTimeFormat.f_UTC__org_gwtproject_i18n_shared_DateTimeFormat_, start)) {
   $Arrays.$set(pos, 0, start + j_l_String.m_length__java_lang_String(DateTimeFormat.f_UTC__org_gwtproject_i18n_shared_DateTimeFormat_));
   return this.m_parseTimeZoneOffset__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal);
  }
  return this.m_parseTimeZoneOffset__java_lang_String__arrayOf_int__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, cal);
 }
 /**
  * @param {?string} text
  * @param {Array<number>} pos
  * @param {number} start
  * @param {number} value
  * @param {PatternPart} part
  * @param {DateRecord} cal
  * @return {boolean}
  * @public
  */
 m_subParseYear__java_lang_String__arrayOf_int__int__int__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart__org_gwtproject_i18n_shared_impl_DateRecord_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos, start, value, part, cal) {
  let ch = 32 /* ' ' */;
  if (value < 0) {
   if (pos[0] >= j_l_String.m_length__java_lang_String(text)) {
    return false;
   }
   ch = j_l_String.m_charAt__java_lang_String__int(text, pos[0]);
   if (ch != 43 /* '+' */ && ch != 45 /* '-' */) {
    return false;
   }
   ++pos[0];
   value = this.m_parseInt__java_lang_String__arrayOf_int_$p_org_gwtproject_i18n_shared_DateTimeFormat(text, pos);
   if (value < 0) {
    return false;
   }
   if (ch == 45 /* '-' */) {
    value = -value;
   }
  }
  if (ch == 32 /* ' ' */ && (pos[0] - start) == 2 && part.f_count__org_gwtproject_i18n_shared_DateTimeFormat_PatternPart == 2) {
   let date = Date.$create__();
   let defaultCenturyStartYear = date.m_getYear__() + 1900 - 80;
   let ambiguousTwoDigitYear = $Primitives.$coerceDivision(defaultCenturyStartYear % 100);
   cal.m_setAmbiguousYear__boolean(value == ambiguousTwoDigitYear);
   value += $Primitives.$coerceDivision(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear ? 100 : 0);
  }
  cal.m_setYear__int(value);
  return true;
 }
 /**
  * @param {StringBuilder} buf
  * @param {number} value
  * @param {number} minWidth
  * @public
  */
 m_zeroPaddingNumber__java_lang_StringBuilder__int__int_$p_org_gwtproject_i18n_shared_DateTimeFormat(buf, value, minWidth) {
  let b = DateTimeFormat.f_NUMBER_BASE__org_gwtproject_i18n_shared_DateTimeFormat_;
  for (let i = 0; i < minWidth - 1; i++) {
   if (value < b) {
    buf.m_append__char(48 /* '0' */);
   }
   b *= DateTimeFormat.f_NUMBER_BASE__org_gwtproject_i18n_shared_DateTimeFormat_;
  }
  buf.m_append__int(value);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_i18n_shared_DateTimeFormat() {
  this.f_patternParts__org_gwtproject_i18n_shared_DateTimeFormat_ = /**@type {!ArrayList<PatternPart>} */ (ArrayList.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormat.$clinit = () =>{};
  DateTimeFormat.$loadModules();
  j_l_Object.$clinit();
  DateTimeFormat.f_cache__org_gwtproject_i18n_shared_DateTimeFormat_ = /**@type {!HashMap<?string, DateTimeFormat>} */ (HashMap.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormat;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Date = goog.module.get('java.util.Date$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  TimeZone = goog.module.get('org.gwtproject.i18n.client.TimeZone$impl');
  PatternPart = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat.PatternPart$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
  DefaultDateTimeFormatInfo = goog.module.get('org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo$impl');
  DateRecord = goog.module.get('org.gwtproject.i18n.shared.impl.DateRecord$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormat, 'org.gwtproject.i18n.shared.DateTimeFormat');

/** @public {?string} @const */
DateTimeFormat.f_RFC2822_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat = "EEE, d MMM yyyy HH:mm:ss Z";
/** @public {?string} @const */
DateTimeFormat.f_ISO8601_PATTERN__org_gwtproject_i18n_shared_DateTimeFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
/** @public {number} @const */
DateTimeFormat.f_NUMBER_BASE__org_gwtproject_i18n_shared_DateTimeFormat_ = 10;
/** @public {number} @const */
DateTimeFormat.f_JS_START_YEAR__org_gwtproject_i18n_shared_DateTimeFormat_ = 1900;
/** @public {Map<?string, DateTimeFormat>} */
DateTimeFormat.f_cache__org_gwtproject_i18n_shared_DateTimeFormat_;
/** @public {number} @const */
DateTimeFormat.f_NUM_MILLISECONDS_IN_DAY__org_gwtproject_i18n_shared_DateTimeFormat_ = 86400000;
/** @public {?string} @const */
DateTimeFormat.f_PATTERN_CHARS__org_gwtproject_i18n_shared_DateTimeFormat_ = "GyMLdkHmsSEcDahKzZv";
/** @public {?string} @const */
DateTimeFormat.f_NUMERIC_FORMAT_CHARS__org_gwtproject_i18n_shared_DateTimeFormat_ = "MLydhHmsSDkK";
/** @public {?string} @const */
DateTimeFormat.f_WHITE_SPACE__org_gwtproject_i18n_shared_DateTimeFormat_ = " \t\r\n";
/** @public {?string} @const */
DateTimeFormat.f_GMT__org_gwtproject_i18n_shared_DateTimeFormat_ = "GMT";
/** @public {?string} @const */
DateTimeFormat.f_UTC__org_gwtproject_i18n_shared_DateTimeFormat_ = "UTC";
/** @public {number} @const */
DateTimeFormat.f_MINUTES_PER_HOUR__org_gwtproject_i18n_shared_DateTimeFormat_ = 60;

exports = DateTimeFormat; 
//# sourceMappingURL=DateTimeFormat.js.map