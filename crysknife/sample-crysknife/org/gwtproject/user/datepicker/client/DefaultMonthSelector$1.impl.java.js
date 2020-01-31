goog.module('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let DefaultMonthSelector = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultMonthSelector}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1;
  /**@type {number}*/
  this.$c_noOfMonths = 0;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int(/** DefaultMonthSelector */ $outer_this, /** number */ $c_noOfMonths) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int($outer_this, $c_noOfMonths);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int(/** DefaultMonthSelector */ $outer_this, /** number */ $c_noOfMonths) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1 = $outer_this;
  this.$c_noOfMonths = $c_noOfMonths;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1.m_addMonths__int(this.$c_noOfMonths);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DefaultMonthSelector$1.js.map