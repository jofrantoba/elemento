goog.module('org.gwtproject.user.datepicker.client.DatePicker.StandardCss$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class StandardCss extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_baseName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_;
  /**@type {?string}*/
  this.f_widgetName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_;
 }
 /** @return {!StandardCss} */
 static $create__java_lang_String__java_lang_String(/** ?string */ widgetName, /** ?string */ baseName) {
  StandardCss.$clinit();
  let $instance = new StandardCss();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker_StandardCss__java_lang_String__java_lang_String(widgetName, baseName);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DatePicker_StandardCss__java_lang_String__java_lang_String(/** ?string */ widgetName, /** ?string */ baseName) {
  this.$ctor__java_lang_Object__();
  this.f_widgetName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_ = widgetName;
  this.f_baseName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_ = baseName;
 }
 /** @return {?string} */
 m_datePicker__() {
  return this.m_getWidgetStyleName__();
 }
 /** @return {?string} */
 m_day__() {
  return this.m_wrap__java_lang_String("Day");
 }
 /** @return {?string} */
 m_day__java_lang_String(/** ?string */ dayModifier) {
  return j_l_String.m_valueOf__java_lang_Object(this.m_day__()) + "Is" + j_l_String.m_valueOf__java_lang_Object(dayModifier);
 }
 /** @return {?string} */
 m_dayIsDisabled__() {
  return this.m_day__java_lang_String("Disabled");
 }
 /** @return {?string} */
 m_dayIsFiller__() {
  return this.m_day__java_lang_String("Filler");
 }
 /** @return {?string} */
 m_dayIsHighlighted__() {
  return this.m_day__java_lang_String("Highlighted");
 }
 /** @return {?string} */
 m_dayIsToday__() {
  return this.m_day__java_lang_String("Today");
 }
 /** @return {?string} */
 m_dayIsValue__() {
  return this.m_day__java_lang_String("Value");
 }
 /** @return {?string} */
 m_dayIsValueAndHighlighted__() {
  return j_l_String.m_valueOf__java_lang_Object(this.m_dayIsValue__()) + "AndHighlighted";
 }
 /** @return {?string} */
 m_dayIsWeekend__() {
  return this.m_day__java_lang_String("Weekend");
 }
 /** @return {?string} */
 m_days__() {
  return this.m_wrap__java_lang_String("Days");
 }
 /** @return {?string} */
 m_daysLabel__() {
  return this.m_wrap__java_lang_String("DaysLabel");
 }
 /** @return {?string} */
 m_getBaseStyleName__() {
  return this.f_baseName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_;
 }
 /** @return {?string} */
 m_getWidgetStyleName__() {
  return this.f_widgetName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_;
 }
 /** @return {?string} */
 m_month__() {
  return this.m_wrap__java_lang_String("Month");
 }
 /** @return {?string} */
 m_monthSelector__() {
  return this.m_wrap__java_lang_String("MonthSelector");
 }
 /** @return {?string} */
 m_nextButton__() {
  return this.m_wrap__java_lang_String("NextButton");
 }
 /** @return {?string} */
 m_nextYearButton__() {
  return this.m_wrap__java_lang_String("NextYearButton");
 }
 /** @return {?string} */
 m_previousButton__() {
  return this.m_wrap__java_lang_String("PreviousButton");
 }
 /** @return {?string} */
 m_previousYearButton__() {
  return this.m_wrap__java_lang_String("PreviousYearButton");
 }
 /** @return {?string} */
 m_weekdayLabel__() {
  return this.m_wrap__java_lang_String("WeekdayLabel");
 }
 /** @return {?string} */
 m_weekendLabel__() {
  return this.m_wrap__java_lang_String("WeekendLabel");
 }
 /** @return {?string} */
 m_year__() {
  return this.m_wrap__java_lang_String("Year");
 }
 /** @return {?string} */
 m_wrap__java_lang_String(/** ?string */ style) {
  return j_l_String.m_valueOf__java_lang_Object(this.f_baseName__org_gwtproject_user_datepicker_client_DatePicker_StandardCss_) + j_l_String.m_valueOf__java_lang_Object(style);
 }
 /** @return {StandardCss} */
 static get f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss() {
  return (StandardCss.$clinit(), StandardCss.$f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss);
 }
 
 static set f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss(/** StandardCss */ value) {
  (StandardCss.$clinit(), StandardCss.$f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss = value);
 }
 
 static $clinit() {
  StandardCss.$clinit = () =>{};
  StandardCss.$loadModules();
  j_l_Object.$clinit();
  StandardCss.$f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss = StandardCss.$create__java_lang_String__java_lang_String("gwt-DatePicker", "datePicker");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardCss;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(StandardCss, 'org.gwtproject.user.datepicker.client.DatePicker$StandardCss');

/**@private {StandardCss}*/
StandardCss.$f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss;

exports = StandardCss; 
//# sourceMappingURL=DatePicker$StandardCss.js.map