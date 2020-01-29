goog.module('org.gwtproject.user.client.ui.MenuBar.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {MenuBar} */
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_1;
  /** @public {ScheduledCommand} */
  this.$c_cmd;
 }
 /**
  * @param {MenuBar} $outer_this
  * @param {ScheduledCommand} $c_cmd
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_core_client_Scheduler_ScheduledCommand($outer_this, $c_cmd) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_1__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_core_client_Scheduler_ScheduledCommand($outer_this, $c_cmd);
  return $instance;
 }
 /**
  * @param {MenuBar} $outer_this
  * @param {ScheduledCommand} $c_cmd
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_1__org_gwtproject_user_client_ui_MenuBar__org_gwtproject_core_client_Scheduler_ScheduledCommand($outer_this, $c_cmd) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_1 = $outer_this;
  this.$c_cmd = $c_cmd;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.$c_cmd.m_execute__();
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.MenuBar$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=MenuBar$1.js.map