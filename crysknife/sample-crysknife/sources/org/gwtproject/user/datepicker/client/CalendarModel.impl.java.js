goog.module('org.gwtproject.user.datepicker.client.CalendarModel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
let CalendarUtil = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class CalendarModel extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<?string>}*/
  this.f_monthOfYearNames__org_gwtproject_user_datepicker_client_CalendarModel_;
  /**@type {Date}*/
  this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_;
 }
 /** @return {!CalendarModel} */
 static $create__() {
  CalendarModel.$clinit();
  let $instance = new CalendarModel();
  $instance.$ctor__org_gwtproject_user_datepicker_client_CalendarModel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_CalendarModel__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_datepicker_client_CalendarModel();
  this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_ = Date.$create__();
  CalendarUtil.m_setToFirstDayOfMonth__java_util_Date(this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_);
  let date = Date.$create__();
  for (let i = 1; i <= CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel; i++) {
   date.m_setDate__int(i);
   let dayOfWeek = date.m_getDay__();
   $Arrays.$set(CalendarModel.f_dayOfWeekNames__org_gwtproject_user_datepicker_client_CalendarModel_, dayOfWeek, this.m_getDayOfWeekFormatter__().m_format__java_util_Date(date));
  }
  date.m_setMonth__int(0);
  for (let i_1 = 1; i_1 < CalendarModel.f_MAX_DAYS_IN_MONTH__org_gwtproject_user_datepicker_client_CalendarModel_; ++i_1) {
   date.m_setDate__int(i_1);
   $Arrays.$set(CalendarModel.f_dayOfMonthNames__org_gwtproject_user_datepicker_client_CalendarModel_, i_1, this.m_getDayOfMonthFormatter__().m_format__java_util_Date(date));
  }
  date.m_setDate__int(1);
  for (let i_2 = 0; i_2 < CalendarModel.f_MONTHS_IN_YEAR__org_gwtproject_user_datepicker_client_CalendarModel; ++i_2) {
   date.m_setMonth__int(i_2);
   $Arrays.$set(this.f_monthOfYearNames__org_gwtproject_user_datepicker_client_CalendarModel_, i_2, this.m_getMonthFormatter__().m_format__java_util_Date(date));
  }
 }
 /** @return {?string} */
 m_formatCurrentMonth__() {
  return this.m_getMonthFormatter__().m_format__java_util_Date(this.m_getCurrentMonth__());
 }
 /** @return {?string} */
 m_formatCurrentMonthAndYear__() {
  return this.m_getMonthAndYearFormatter__().m_format__java_util_Date(this.m_getCurrentMonth__());
 }
 /** @return {?string} */
 m_formatCurrentYear__() {
  return this.m_getYearFormatter__().m_format__java_util_Date(this.m_getCurrentMonth__());
 }
 /** @return {?string} */
 m_formatDayOfMonth__java_util_Date(/** Date */ date) {
  return CalendarModel.f_dayOfMonthNames__org_gwtproject_user_datepicker_client_CalendarModel_[date.m_getDate__()];
 }
 /** @return {?string} */
 m_formatDayOfWeek__int(/** number */ dayInWeek) {
  return CalendarModel.f_dayOfWeekNames__org_gwtproject_user_datepicker_client_CalendarModel_[dayInWeek];
 }
 /** @return {?string} */
 m_formatMonth__int(/** number */ month) {
  return this.f_monthOfYearNames__org_gwtproject_user_datepicker_client_CalendarModel_[month];
 }
 /** @return {Date} */
 m_getCurrentFirstDayOfFirstWeek__() {
  let wkDayOfMonth1st = this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_getDay__();
  let start = CalendarUtil.m_getStartingDayOfWeek__();
  if (wkDayOfMonth1st == start) {
   return Date.$create__long(this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_getTime__());
  } else {
   let d = Date.$create__long(this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_getTime__());
   let offset = wkDayOfMonth1st - start > 0 ? wkDayOfMonth1st - start : CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel - (start - wkDayOfMonth1st);
   CalendarUtil.m_addDaysToDate__java_util_Date__int(d, -offset);
   return d;
  }
 }
 /** @return {Date} */
 m_getCurrentMonth__() {
  return this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_;
 }
 /** @return {boolean} */
 m_isInCurrentMonth__java_util_Date(/** Date */ date) {
  return this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_getMonth__() == date.m_getMonth__();
 }
 
 m_setCurrentMonth__java_util_Date(/** Date */ currentDate) {
  this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_setYear__int(currentDate.m_getYear__());
  this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_.m_setMonth__int(currentDate.m_getMonth__());
 }
 
 m_shiftCurrentMonth__int(/** number */ deltaMonths) {
  CalendarUtil.m_addMonthsToDate__java_util_Date__int(this.f_currentMonth__org_gwtproject_user_datepicker_client_CalendarModel_, deltaMonths);
  this.m_refresh__();
 }
 /** @return {DateTimeFormat} */
 m_getDayOfMonthFormatter__() {
  return DateTimeFormat.m_getFormat__java_lang_String("d");
 }
 /** @return {DateTimeFormat} */
 m_getDayOfWeekFormatter__() {
  return DateTimeFormat.m_getFormat__java_lang_String("ccccc");
 }
 /** @return {DateTimeFormat} */
 m_getMonthAndYearFormatter__() {
  return DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_YEAR_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /** @return {DateTimeFormat} */
 m_getMonthFormatter__() {
  return DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_MONTH_ABBR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /** @return {DateTimeFormat} */
 m_getYearFormatter__() {
  return DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_YEAR__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /** @return {boolean} */
 m_isMonthBeforeYear__() {
  let monthAndYearPattern = this.m_getMonthAndYearFormatter__().m_getPattern__();
  for (let i = 0; i < j_l_String.m_length__java_lang_String(monthAndYearPattern); ++i) {
   switch (j_l_String.m_charAt__java_lang_String__int(monthAndYearPattern, i)) {
    case 121 /* 'y' */: 
     return false;
    case 77 /* 'M' */: 
    case 76 /* 'L' */: 
     return true;
   }
  }
  return true;
 }
 
 m_refresh__() {}
 /** @private */
 $init___$p_org_gwtproject_user_datepicker_client_CalendarModel() {
  this.f_monthOfYearNames__org_gwtproject_user_datepicker_client_CalendarModel_ = /**@type {!Array<?string>}*/ ($Arrays.$create([12], j_l_String));
 }
 
 static $clinit() {
  CalendarModel.$clinit = () =>{};
  CalendarModel.$loadModules();
  j_l_Object.$clinit();
  CalendarModel.f_dayOfWeekNames__org_gwtproject_user_datepicker_client_CalendarModel_ = /**@type {!Array<?string>}*/ ($Arrays.$create([7], j_l_String));
  CalendarModel.f_dayOfMonthNames__org_gwtproject_user_datepicker_client_CalendarModel_ = /**@type {!Array<?string>}*/ ($Arrays.$create([32], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CalendarModel;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  DateTimeFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
  CalendarUtil = goog.module.get('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(CalendarModel, 'org.gwtproject.user.datepicker.client.CalendarModel');

/**@const {number}*/
CalendarModel.f_WEEKS_IN_MONTH__org_gwtproject_user_datepicker_client_CalendarModel = 6;
/**@const {number}*/
CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel = 7;
/**@const {number}*/
CalendarModel.f_MONTHS_IN_YEAR__org_gwtproject_user_datepicker_client_CalendarModel = 12;
/**@const {number}*/
CalendarModel.f_MAX_DAYS_IN_MONTH__org_gwtproject_user_datepicker_client_CalendarModel_ = 32;
/**@type {Array<?string>}*/
CalendarModel.f_dayOfWeekNames__org_gwtproject_user_datepicker_client_CalendarModel_;
/**@type {Array<?string>}*/
CalendarModel.f_dayOfMonthNames__org_gwtproject_user_datepicker_client_CalendarModel_;

exports = CalendarModel; 
//# sourceMappingURL=CalendarModel.js.map