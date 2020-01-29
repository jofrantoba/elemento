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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultMonthSelector} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2;
  /** @public {ListBox} */
  this.$c_monthListBox;
 }
 /**
  * @param {DefaultMonthSelector} $outer_this
  * @param {ListBox} $c_monthListBox
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox($outer_this, $c_monthListBox) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox($outer_this, $c_monthListBox);
  return $instance;
 }
 /**
  * @param {DefaultMonthSelector} $outer_this
  * @param {ListBox} $c_monthListBox
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox($outer_this, $c_monthListBox) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2 = $outer_this;
  this.$c_monthListBox = $c_monthListBox;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ChangeEvent} event
  * @public
  */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(event) {
  let previousMonth = this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2.m_getModel__().m_getCurrentMonth__().m_getMonth__();
  let newMonth = this.$c_monthListBox.m_getSelectedIndex__();
  let delta = newMonth - previousMonth;
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_2.m_addMonths__int(delta);
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector$2');

ChangeHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=DefaultMonthSelector$2.js.map