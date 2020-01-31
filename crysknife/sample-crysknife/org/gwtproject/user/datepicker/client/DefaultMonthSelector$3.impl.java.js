goog.module('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.gwtproject.event.dom.client.ChangeHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ListBox = goog.forwardDeclare('org.gwtproject.user.client.ui.ListBox$impl');
let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let DefaultMonthSelector = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');

/**
 * @implements {ChangeHandler}
  */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultMonthSelector}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3;
  /**@type {ListBox}*/
  this.$c_yearListBox;
 }
 /** @return {!$3} */
 static $create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(/** DefaultMonthSelector */ $outer_this, /** ListBox */ $c_yearListBox) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox($outer_this, $c_yearListBox);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(/** DefaultMonthSelector */ $outer_this, /** ListBox */ $c_yearListBox) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3 = $outer_this;
  this.$c_yearListBox = $c_yearListBox;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(/** ChangeEvent */ event) {
  let deltaYears = this.$c_yearListBox.m_getSelectedIndex__() - this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3.m_getNoOfYearsToDisplayBefore___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_3.m_addMonths__int(deltaYears * CalendarModel.f_MONTHS_IN_YEAR__org_gwtproject_user_datepicker_client_CalendarModel);
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  CalendarModel = goog.module.get('org.gwtproject.user.datepicker.client.CalendarModel$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector$3');

ChangeHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=DefaultMonthSelector$3.js.map