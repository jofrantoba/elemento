goog.module('org.gwtproject.user.datepicker.client.DatePickerComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let DatePicker = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker$impl');
let StandardCss = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker.StandardCss$impl');

/**
 * @abstract
  */
class DatePickerComponent extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {DatePicker}*/
  this.f_datePicker__org_gwtproject_user_datepicker_client_DatePickerComponent_;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DatePickerComponent__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
 }
 /** @return {CalendarModel} */
 m_getModel__() {
  return this.f_datePicker__org_gwtproject_user_datepicker_client_DatePickerComponent_.m_getModel__();
 }
 
 m_addMonths__int(/** number */ numMonths) {
  this.m_getModel__().m_shiftCurrentMonth__int(numMonths);
  this.m_getDatePicker__().m_refreshAll__();
 }
 /** @return {DatePicker} */
 m_getDatePicker__() {
  return this.f_datePicker__org_gwtproject_user_datepicker_client_DatePickerComponent_;
 }
 /** @abstract */
 m_refresh__() {}
 
 m_refreshAll__() {
  this.m_getDatePicker__().m_refreshAll__();
 }
 /** @abstract */
 m_setup__() {}
 /** @return {StandardCss} */
 m_css___$pp_org_gwtproject_user_datepicker_client() {
  return this.f_datePicker__org_gwtproject_user_datepicker_client_DatePickerComponent_.m_css___$pp_org_gwtproject_user_datepicker_client();
 }
 
 m_setDatePicker__org_gwtproject_user_datepicker_client_DatePicker_$pp_org_gwtproject_user_datepicker_client(/** DatePicker */ me) {
  this.f_datePicker__org_gwtproject_user_datepicker_client_DatePickerComponent_ = me;
 }
 
 static $clinit() {
  DatePickerComponent.$clinit = () =>{};
  DatePickerComponent.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatePickerComponent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DatePickerComponent, 'org.gwtproject.user.datepicker.client.DatePickerComponent');

exports = DatePickerComponent; 
//# sourceMappingURL=DatePickerComponent.js.map