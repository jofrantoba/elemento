goog.module('org.gwtproject.user.datepicker.client.CalendarView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DatePickerComponent = goog.require('org.gwtproject.user.datepicker.client.DatePickerComponent$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');

/**
 * @abstract
  */
class CalendarView extends DatePickerComponent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_CalendarView__() {
  this.$ctor__org_gwtproject_user_datepicker_client_DatePickerComponent__();
 }
 /**
  * @abstract
  * @param {?string} styleName
  * @param {Date} date
  * @public
  */
 m_addStyleToDate__java_lang_String__java_util_Date(styleName, date) {}
 /**
  * @abstract
  * @return {Date}
  * @public
  */
 m_getFirstDate__() {}
 /**
  * @abstract
  * @return {Date}
  * @public
  */
 m_getLastDate__() {}
 /**
  * @abstract
  * @param {Date} date
  * @return {boolean}
  * @public
  */
 m_isDateEnabled__java_util_Date(date) {}
 /**
  * @abstract
  * @param {?string} styleName
  * @param {Date} date
  * @public
  */
 m_removeStyleFromDate__java_lang_String__java_util_Date(styleName, date) {}
 /**
  * @param {Date} date
  * @public
  */
 m_setAriaSelectedCell__java_util_Date(date) {}
 /**
  * @abstract
  * @param {boolean} enabled
  * @param {Date} date
  * @public
  */
 m_setEnabledOnDate__boolean__java_util_Date(enabled, date) {}
 /**
  * @param {Date} date
  * @public
  */
 m_setHighlightedDate__java_util_Date(date) {
  this.m_getDatePicker__().m_setHighlightedDate__java_util_Date_$pp_org_gwtproject_user_datepicker_client(date);
 }
 /**
  * @public
  */
 static $clinit() {
  CalendarView.$clinit = () =>{};
  CalendarView.$loadModules();
  DatePickerComponent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CalendarView;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CalendarView, 'org.gwtproject.user.datepicker.client.CalendarView');

exports = CalendarView; 
//# sourceMappingURL=CalendarView.js.map