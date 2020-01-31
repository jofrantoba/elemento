goog.module('org.gwtproject.i18n.client.TimeZone$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TimeZone = goog.require('org.gwtproject.i18n.shared.TimeZone$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let JsArrayInteger_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayInteger.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayString.$Overlay$impl');
let TimeZoneInfo = goog.forwardDeclare('org.gwtproject.i18n.client.TimeZoneInfo$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @implements {TimeZone}
  */
class org_gwtproject_i18n_client_TimeZone extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_timezoneID__org_gwtproject_i18n_client_TimeZone_;
  /**@type {number}*/
  this.f_standardOffset__org_gwtproject_i18n_client_TimeZone_ = 0;
  /**@type {Array<?string>}*/
  this.f_tzNames__org_gwtproject_i18n_client_TimeZone_;
  /**@type {Array<number>}*/
  this.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_;
  /**@type {Array<number>}*/
  this.f_adjustments__org_gwtproject_i18n_client_TimeZone_;
 }
 /** @return {org_gwtproject_i18n_client_TimeZone} */
 static m_createTimeZoneInMinutes__int(/** number */ timeZoneOffsetInMinutes) {
  org_gwtproject_i18n_client_TimeZone.$clinit();
  let tz = org_gwtproject_i18n_client_TimeZone.$create__();
  tz.f_standardOffset__org_gwtproject_i18n_client_TimeZone_ = timeZoneOffsetInMinutes;
  tz.f_timezoneID__org_gwtproject_i18n_client_TimeZone_ = org_gwtproject_i18n_client_TimeZone.m_composePOSIXTimeZoneID__int(timeZoneOffsetInMinutes);
  tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_ = /**@type {!Array<?string>}*/ ($Arrays.$create([2], j_l_String));
  $Arrays.$set(tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_, 0, org_gwtproject_i18n_client_TimeZone.m_composeUTCString__int(timeZoneOffsetInMinutes));
  $Arrays.$set(tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_, 1, org_gwtproject_i18n_client_TimeZone.m_composeUTCString__int(timeZoneOffsetInMinutes));
  tz.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_ = null;
  tz.f_adjustments__org_gwtproject_i18n_client_TimeZone_ = null;
  return tz;
 }
 /** @return {org_gwtproject_i18n_client_TimeZone} */
 static m_createTimeZoneFromJSON__java_lang_String(/** ?string */ tzJSON) {
  org_gwtproject_i18n_client_TimeZone.$clinit();
  let tzData = TimeZoneInfo.m_buildTimeZoneData__java_lang_String(tzJSON);
  return org_gwtproject_i18n_client_TimeZone.m_createTimeZone__org_gwtproject_i18n_client_TimeZoneInfo(tzData);
 }
 /** @return {org_gwtproject_i18n_client_TimeZone} */
 static m_createTimeZone__int(/** number */ timeZoneOffsetInMinutes) {
  org_gwtproject_i18n_client_TimeZone.$clinit();
  let tz = org_gwtproject_i18n_client_TimeZone.$create__();
  tz.f_standardOffset__org_gwtproject_i18n_client_TimeZone_ = timeZoneOffsetInMinutes;
  tz.f_timezoneID__org_gwtproject_i18n_client_TimeZone_ = org_gwtproject_i18n_client_TimeZone.m_composePOSIXTimeZoneID__int(timeZoneOffsetInMinutes);
  tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_ = /**@type {!Array<?string>}*/ ($Arrays.$create([2], j_l_String));
  $Arrays.$set(tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_, 0, org_gwtproject_i18n_client_TimeZone.m_composeUTCString__int(timeZoneOffsetInMinutes));
  $Arrays.$set(tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_, 1, org_gwtproject_i18n_client_TimeZone.m_composeUTCString__int(timeZoneOffsetInMinutes));
  tz.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_ = null;
  tz.f_adjustments__org_gwtproject_i18n_client_TimeZone_ = null;
  return tz;
 }
 /** @return {org_gwtproject_i18n_client_TimeZone} */
 static m_createTimeZone__org_gwtproject_i18n_client_TimeZoneInfo(/** TimeZoneInfo */ timezoneData) {
  org_gwtproject_i18n_client_TimeZone.$clinit();
  let tz = org_gwtproject_i18n_client_TimeZone.$create__();
  tz.f_timezoneID__org_gwtproject_i18n_client_TimeZone_ = timezoneData.m_getID__();
  tz.f_standardOffset__org_gwtproject_i18n_client_TimeZone_ = -timezoneData.m_getStandardOffset__();
  let jsTimezoneNames = timezoneData.m_getNames__();
  tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_ = /**@type {!Array<?string>}*/ ($Arrays.$create([$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayString(jsTimezoneNames)], j_l_String));
  for (let i = 0; i < $Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayString(jsTimezoneNames); i++) {
   $Arrays.$set(tz.f_tzNames__org_gwtproject_i18n_client_TimeZone_, i, $Overlay.m_get__$devirt__org_gwtproject_core_client_JsArrayString__int(jsTimezoneNames, i));
  }
  let transitions = timezoneData.m_getTransitions__();
  if ($Equality.$same(transitions, null) || JsArrayInteger_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayInteger(transitions) == 0) {
   tz.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_ = null;
   tz.f_adjustments__org_gwtproject_i18n_client_TimeZone_ = null;
  } else {
   let transitionNum = $Primitives.$coerceDivision(JsArrayInteger_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayInteger(transitions) / 2);
   tz.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_ = /**@type {!Array<number>}*/ ($Arrays.$create([transitionNum], $int));
   tz.f_adjustments__org_gwtproject_i18n_client_TimeZone_ = /**@type {!Array<number>}*/ ($Arrays.$create([transitionNum], $int));
   for (let i_1 = 0; i_1 < transitionNum; ++i_1) {
    $Arrays.$set(tz.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_, i_1, JsArrayInteger_$Overlay.m_get__$devirt__org_gwtproject_core_client_JsArrayInteger__int(transitions, i_1 * 2));
    $Arrays.$set(tz.f_adjustments__org_gwtproject_i18n_client_TimeZone_, i_1, JsArrayInteger_$Overlay.m_get__$devirt__org_gwtproject_core_client_JsArrayInteger__int(transitions, i_1 * 2 + 1));
   }
  }
  return tz;
 }
 /** @return {?string} */
 static m_composeGMTString__int(/** number */ offset) {
  let data = /**@type {!Array<number>}*/ ($Arrays.$init([71 /* 'G' */, 77 /* 'M' */, 84 /* 'T' */, 45 /* '-' */, 48 /* '0' */, 48 /* '0' */, 58 /* ':' */, 48 /* '0' */, 48 /* '0' */], $char));
  if (offset <= 0) {
   $Arrays.$set(data, 3, 43 /* '+' */);
   offset = -offset;
  }
  $Arrays.$set(data, 4, $Primitives.$narrowIntToChar((data[4] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) / 10))));
  $Arrays.$set(data, 5, $Primitives.$narrowIntToChar((data[5] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) % 10))));
  $Arrays.$set(data, 7, $Primitives.$narrowIntToChar((data[7] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset % 60) / 10))));
  $Arrays.$set(data, 8, $Primitives.$narrowIntToChar((data[8] + $Primitives.$coerceDivision(offset % 10))));
  return j_l_String.$create__arrayOf_char(data);
 }
 /** @return {?string} */
 static m_composePOSIXTimeZoneID__int(/** number */ offset) {
  if (offset == 0) {
   return "Etc/GMT";
  }
  let /** ?string */ str;
  if (offset < 0) {
   offset = -offset;
   str = "Etc/GMT-";
  } else {
   str = "Etc/GMT+";
  }
  return j_l_String.m_valueOf__java_lang_Object(str) + j_l_String.m_valueOf__java_lang_Object(org_gwtproject_i18n_client_TimeZone.m_offsetDisplay__int(offset));
 }
 /** @return {?string} */
 static m_composeUTCString__int(/** number */ offset) {
  if (offset == 0) {
   return "UTC";
  }
  let /** ?string */ str;
  if (offset < 0) {
   offset = -offset;
   str = "UTC+";
  } else {
   str = "UTC-";
  }
  return j_l_String.m_valueOf__java_lang_Object(str) + j_l_String.m_valueOf__java_lang_Object(org_gwtproject_i18n_client_TimeZone.m_offsetDisplay__int(offset));
 }
 /** @return {?string} */
 static m_offsetDisplay__int(/** number */ offset) {
  let hour = $Primitives.$coerceDivision(offset / 60);
  let mins = $Primitives.$coerceDivision(offset % 60);
  if (mins == 0) {
   return Integer.m_toString__int(hour);
  }
  return j_l_String.m_valueOf__java_lang_Object(Integer.m_toString__int(hour)) + ":" + j_l_String.m_valueOf__java_lang_Object(Integer.m_toString__int(mins));
 }
 /** @return {!org_gwtproject_i18n_client_TimeZone} */
 static $create__() {
  let $instance = new org_gwtproject_i18n_client_TimeZone();
  $instance.$ctor__org_gwtproject_i18n_client_TimeZone__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_TimeZone__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {number} */
 m_getDaylightAdjustment__java_util_Date(/** Date */ date) {
  if ($Equality.$same(this.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_, null)) {
   return 0;
  }
  let timeInHours = $LongUtils.$divide($LongUtils.$divide(date.m_getTime__(), $Long.fromInt(1000)), $Long.fromInt(3600));
  let index = 0;
  while (index < this.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_.length && $LongUtils.$greaterEquals(timeInHours, $Primitives.$widenIntToLong(this.f_transitionPoints__org_gwtproject_i18n_client_TimeZone_[index]))) {
   ++index;
  }
  return (index == 0) ? 0 : this.f_adjustments__org_gwtproject_i18n_client_TimeZone_[index - 1];
 }
 /** @override @return {?string} */
 m_getGMTString__java_util_Date(/** Date */ date) {
  return org_gwtproject_i18n_client_TimeZone.m_composeGMTString__int(this.m_getOffset__java_util_Date(date));
 }
 /** @override @return {?string} */
 m_getID__() {
  return this.f_timezoneID__org_gwtproject_i18n_client_TimeZone_;
 }
 /** @override @return {?string} */
 m_getISOTimeZoneString__java_util_Date(/** Date */ date) {
  let offset = -this.m_getOffset__java_util_Date(date);
  let data = /**@type {!Array<number>}*/ ($Arrays.$init([43 /* '+' */, 48 /* '0' */, 48 /* '0' */, 58 /* ':' */, 48 /* '0' */, 48 /* '0' */], $char));
  if (offset < 0) {
   $Arrays.$set(data, 0, 45 /* '-' */);
   offset = -offset;
  }
  $Arrays.$set(data, 1, $Primitives.$narrowIntToChar((data[1] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) / 10))));
  $Arrays.$set(data, 2, $Primitives.$narrowIntToChar((data[2] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) % 10))));
  $Arrays.$set(data, 4, $Primitives.$narrowIntToChar((data[4] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset % 60) / 10))));
  $Arrays.$set(data, 5, $Primitives.$narrowIntToChar((data[5] + $Primitives.$coerceDivision(offset % 10))));
  return j_l_String.$create__arrayOf_char(data);
 }
 /** @override @return {?string} */
 m_getLongName__java_util_Date(/** Date */ date) {
  return this.f_tzNames__org_gwtproject_i18n_client_TimeZone_[this.m_isDaylightTime__java_util_Date(date) ? org_gwtproject_i18n_client_TimeZone.f_DLT_LONG_NAME__org_gwtproject_i18n_client_TimeZone_ : org_gwtproject_i18n_client_TimeZone.f_STD_LONG_NAME__org_gwtproject_i18n_client_TimeZone_];
 }
 /** @override @return {number} */
 m_getOffset__java_util_Date(/** Date */ date) {
  return this.f_standardOffset__org_gwtproject_i18n_client_TimeZone_ - this.m_getDaylightAdjustment__java_util_Date(date);
 }
 /** @override @return {?string} */
 m_getRFCTimeZoneString__java_util_Date(/** Date */ date) {
  let offset = -this.m_getOffset__java_util_Date(date);
  let data = /**@type {!Array<number>}*/ ($Arrays.$init([43 /* '+' */, 48 /* '0' */, 48 /* '0' */, 48 /* '0' */, 48 /* '0' */], $char));
  if (offset < 0) {
   $Arrays.$set(data, 0, 45 /* '-' */);
   offset = -offset;
  }
  $Arrays.$set(data, 1, $Primitives.$narrowIntToChar((data[1] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) / 10))));
  $Arrays.$set(data, 2, $Primitives.$narrowIntToChar((data[2] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset / 60) % 10))));
  $Arrays.$set(data, 3, $Primitives.$narrowIntToChar((data[3] + $Primitives.$coerceDivision($Primitives.$coerceDivision(offset % 60) / 10))));
  $Arrays.$set(data, 4, $Primitives.$narrowIntToChar((data[4] + $Primitives.$coerceDivision(offset % 10))));
  return j_l_String.$create__arrayOf_char(data);
 }
 /** @override @return {?string} */
 m_getShortName__java_util_Date(/** Date */ date) {
  return this.f_tzNames__org_gwtproject_i18n_client_TimeZone_[this.m_isDaylightTime__java_util_Date(date) ? org_gwtproject_i18n_client_TimeZone.f_DLT_SHORT_NAME__org_gwtproject_i18n_client_TimeZone_ : org_gwtproject_i18n_client_TimeZone.f_STD_SHORT_NAME__org_gwtproject_i18n_client_TimeZone_];
 }
 /** @override @return {number} */
 m_getStandardOffset__() {
  return this.f_standardOffset__org_gwtproject_i18n_client_TimeZone_;
 }
 /** @override @return {boolean} */
 m_isDaylightTime__java_util_Date(/** Date */ date) {
  return this.m_getDaylightAdjustment__java_util_Date(date) > 0;
 }
 
 static $clinit() {
  org_gwtproject_i18n_client_TimeZone.$clinit = () =>{};
  org_gwtproject_i18n_client_TimeZone.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof org_gwtproject_i18n_client_TimeZone;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  JsArrayInteger_$Overlay = goog.module.get('org.gwtproject.core.client.JsArrayInteger.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JsArrayString.$Overlay$impl');
  TimeZoneInfo = goog.module.get('org.gwtproject.i18n.client.TimeZoneInfo$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $char = goog.module.get('vmbootstrap.primitives.$char$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_i18n_client_TimeZone, 'org.gwtproject.i18n.client.TimeZone');

TimeZone.$markImplementor(org_gwtproject_i18n_client_TimeZone);

/**@const {number}*/
org_gwtproject_i18n_client_TimeZone.f_STD_SHORT_NAME__org_gwtproject_i18n_client_TimeZone_ = 0;
/**@const {number}*/
org_gwtproject_i18n_client_TimeZone.f_STD_LONG_NAME__org_gwtproject_i18n_client_TimeZone_ = 1;
/**@const {number}*/
org_gwtproject_i18n_client_TimeZone.f_DLT_SHORT_NAME__org_gwtproject_i18n_client_TimeZone_ = 2;
/**@const {number}*/
org_gwtproject_i18n_client_TimeZone.f_DLT_LONG_NAME__org_gwtproject_i18n_client_TimeZone_ = 3;

exports = org_gwtproject_i18n_client_TimeZone; 
//# sourceMappingURL=TimeZone.js.map