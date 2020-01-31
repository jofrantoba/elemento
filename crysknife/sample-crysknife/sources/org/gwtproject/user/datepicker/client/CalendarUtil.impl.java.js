goog.module('org.gwtproject.user.datepicker.client.CalendarUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class CalendarUtil extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CalendarUtil} */
 static $create__() {
  CalendarUtil.$clinit();
  let $instance = new CalendarUtil();
  $instance.$ctor__org_gwtproject_user_datepicker_client_CalendarUtil__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_CalendarUtil__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_addDaysToDate__java_util_Date__int(/** Date */ date, /** number */ days) {
  CalendarUtil.$clinit();
  date.m_setDate__int(date.m_getDate__() + days);
 }
 
 static m_addMonthsToDate__java_util_Date__int(/** Date */ date, /** number */ months) {
  CalendarUtil.$clinit();
  if (months != 0) {
   let month = date.m_getMonth__();
   let year = date.m_getYear__();
   let resultMonthCount = year * 12 + month + months;
   let resultYear = $Primitives.$narrowDoubleToInt(Math.floor(resultMonthCount / 12.0));
   let resultMonth = resultMonthCount - resultYear * 12;
   date.m_setMonth__int(resultMonth);
   date.m_setYear__int(resultYear);
  }
 }
 /** @return {Date} */
 static m_copyDate__java_util_Date(/** Date */ date) {
  CalendarUtil.$clinit();
  if ($Equality.$same(date, null)) {
   return null;
  }
  let newDate = Date.$create__();
  newDate.m_setTime__long(date.m_getTime__());
  return newDate;
 }
 /** @return {number} */
 static m_getDaysBetween__java_util_Date__java_util_Date(/** Date */ start, /** Date */ finish) {
  CalendarUtil.$clinit();
  start = CalendarUtil.m_copyDate__java_util_Date(start);
  CalendarUtil.m_resetTime__java_util_Date(start);
  finish = CalendarUtil.m_copyDate__java_util_Date(finish);
  CalendarUtil.m_resetTime__java_util_Date(finish);
  let aTime = start.m_getTime__();
  let bTime = finish.m_getTime__();
  let adjust = $Primitives.$widenIntToLong(60 * 60 * 1000);
  adjust = $LongUtils.$greater(bTime, aTime) ? adjust : $LongUtils.$negate(adjust);
  return $Primitives.$narrowLongToInt($LongUtils.$divide($LongUtils.$plus($LongUtils.$minus(bTime, aTime), adjust), $Primitives.$widenIntToLong((24 * 60 * 60 * 1000))));
 }
 /** @return {number} */
 static m_getStartingDayOfWeek__() {
  CalendarUtil.$clinit();
  return CalendarUtil.f_startingDay__org_gwtproject_user_datepicker_client_CalendarUtil_;
 }
 /** @return {boolean} */
 static m_isSameDate__java_util_Date__java_util_Date(/** Date */ date0, /** Date */ date1) {
  CalendarUtil.$clinit();
  $Asserts.$assertWithMessage(!$Equality.$same(date0, null), "date0 cannot be null");
  $Asserts.$assertWithMessage(!$Equality.$same(date1, null), "date1 cannot be null");
  return date0.m_getYear__() == date1.m_getYear__() && date0.m_getMonth__() == date1.m_getMonth__() && date0.m_getDate__() == date1.m_getDate__();
 }
 
 static m_setToFirstDayOfMonth__java_util_Date(/** Date */ date) {
  CalendarUtil.$clinit();
  CalendarUtil.m_resetTime__java_util_Date(date);
  date.m_setDate__int(1);
 }
 /** @return {boolean} */
 static m_isWeekend__int(/** number */ dayOfWeek) {
  CalendarUtil.$clinit();
  return dayOfWeek == CalendarUtil.f_firstDayOfWeekend__org_gwtproject_user_datepicker_client_CalendarUtil_ || dayOfWeek == CalendarUtil.f_lastDayOfWeekend__org_gwtproject_user_datepicker_client_CalendarUtil_;
 }
 
 static m_resetTime__java_util_Date(/** Date */ date) {
  CalendarUtil.$clinit();
  let msec = CalendarUtil.m_resetMilliseconds__long(date.m_getTime__());
  date.m_setTime__long(msec);
  date.m_setHours__int(0);
  date.m_setMinutes__int(0);
  date.m_setSeconds__int(0);
 }
 /** @return {!$Long} */
 static m_resetMilliseconds__long(/** !$Long */ msec) {
  let offset = $Primitives.$narrowLongToInt($LongUtils.$remainder(msec, $Long.fromInt(1000)));
  if (offset < 0) {
   offset += 1000;
  }
  return $LongUtils.$minus(msec, $Primitives.$widenIntToLong(offset));
 }
 
 static $clinit() {
  CalendarUtil.$clinit = () =>{};
  CalendarUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CalendarUtil;
 }
 
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(CalendarUtil, 'org.gwtproject.user.datepicker.client.CalendarUtil');

/**@type {number}*/
CalendarUtil.f_firstDayOfWeekend__org_gwtproject_user_datepicker_client_CalendarUtil_ = 0;
/**@type {number}*/
CalendarUtil.f_lastDayOfWeekend__org_gwtproject_user_datepicker_client_CalendarUtil_ = 0;
/**@type {number}*/
CalendarUtil.f_startingDay__org_gwtproject_user_datepicker_client_CalendarUtil_ = 0;

exports = CalendarUtil; 
//# sourceMappingURL=CalendarUtil.js.map