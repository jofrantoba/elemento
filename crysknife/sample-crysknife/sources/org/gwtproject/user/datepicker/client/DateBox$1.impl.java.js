goog.module('org.gwtproject.user.datepicker.client.DateBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let DateBox = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateBox} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_1;
 }
 /**
  * @param {DateBox} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_DateBox($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox_1__org_gwtproject_user_datepicker_client_DateBox($outer_this);
  return $instance;
 }
 /**
  * @param {DateBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DateBox_1__org_gwtproject_user_datepicker_client_DateBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_1.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_ = true;
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.datepicker.client.DateBox$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DateBox$1.js.map