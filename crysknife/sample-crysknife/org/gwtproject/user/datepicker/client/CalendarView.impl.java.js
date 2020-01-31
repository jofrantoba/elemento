goog.module('org.gwtproject.user.datepicker.client.CalendarView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DatePickerComponent = goog.require('org.gwtproject.user.datepicker.client.DatePickerComponent$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');

/**
 * @abstract
  */
class CalendarView extends DatePickerComponent {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_datepicker_client_CalendarView__() {
  this.$ctor__org_gwtproject_user_datepicker_client_DatePickerComponent__();
 }
 /** @abstract */
 m_addStyleToDate__java_lang_String__java_util_Date(/** ?string */ styleName, /** Date */ date) {}
 /** @abstract @return {Date} */
 m_getFirstDate__() {}
 /** @abstract @return {Date} */
 m_getLastDate__() {}
 /** @abstract @return {boolean} */
 m_isDateEnabled__java_util_Date(/** Date */ date) {}
 /** @abstract */
 m_removeStyleFromDate__java_lang_String__java_util_Date(/** ?string */ styleName, /** Date */ date) {}
 
 m_setAriaSelectedCell__java_util_Date(/** Date */ date) {}
 /** @abstract */
 m_setEnabledOnDate__boolean__java_util_Date(/** boolean */ enabled, /** Date */ date) {}
 
 m_setHighlightedDate__java_util_Date(/** Date */ date) {
  this.m_getDatePicker__().m_setHighlightedDate__java_util_Date_$pp_org_gwtproject_user_datepicker_client(date);
 }
 
 static $clinit() {
  CalendarView.$clinit = () =>{};
  CalendarView.$loadModules();
  DatePickerComponent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CalendarView;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CalendarView, 'org.gwtproject.user.datepicker.client.CalendarView');

exports = CalendarView; 
//# sourceMappingURL=CalendarView.js.map