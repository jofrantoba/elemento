goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let ResizeLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ResizeLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_ResizeLayoutPanel(/** ResizeLayoutPanel */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_1__org_gwtproject_user_client_ui_ResizeLayoutPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_1__org_gwtproject_user_client_ui_ResizeLayoutPanel(/** ResizeLayoutPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_1.f_resizeCmdScheduled__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = false;
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_1.m_handleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel();
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ResizeLayoutPanel$1.js.map