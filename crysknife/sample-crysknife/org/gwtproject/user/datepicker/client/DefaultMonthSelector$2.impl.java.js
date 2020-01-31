goog.module('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.gwtproject.event.dom.client.ChangeHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ListBox = goog.forwardDeclare('org.gwtproject.user.client.ui.ListBox$impl');
let DefaultMonthSelector = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');

/**
 * @implements {ChangeHandler}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultMonthSelector}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2;
  /**@type {ListBox}*/
  this.$c_monthListBox;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(/** DefaultMonthSelector */ $outer_this, /** ListBox */ $c_monthListBox) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox($outer_this, $c_monthListBox);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(/** DefaultMonthSelector */ $outer_this, /** ListBox */ $c_monthListBox) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2 = $outer_this;
  this.$c_monthListBox = $c_monthListBox;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(/** ChangeEvent */ event) {
  let previousMonth = this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2.m_getModel__().m_getCurrentMonth__().m_getMonth__();
  let newMonth = this.$c_monthListBox.m_getSelectedIndex__();
  let delta = newMonth - previousMonth;
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2.m_addMonths__int(delta);
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector$2');

ChangeHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=DefaultMonthSelector$2.js.map