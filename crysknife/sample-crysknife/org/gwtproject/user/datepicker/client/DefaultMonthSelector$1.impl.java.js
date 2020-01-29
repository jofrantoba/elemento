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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultMonthSelector} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1;
  /** @public {number} */
  this.$c_noOfMonths = 0;
 }
 /**
  * @param {DefaultMonthSelector} $outer_this
  * @param {number} $c_noOfMonths
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int($outer_this, $c_noOfMonths) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int($outer_this, $c_noOfMonths);
  return $instance;
 }
 /**
  * @param {DefaultMonthSelector} $outer_this
  * @param {number} $c_noOfMonths
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int($outer_this, $c_noOfMonths) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1 = $outer_this;
  this.$c_noOfMonths = $c_noOfMonths;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultMonthSelector_1.m_addMonths__int(this.$c_noOfMonths);
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DefaultMonthSelector$1.js.map