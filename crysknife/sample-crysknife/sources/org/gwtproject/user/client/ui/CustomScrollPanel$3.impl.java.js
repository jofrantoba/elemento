goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let CustomScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel$impl');

/**
 * @implements {ScheduledCommand}
  */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CustomScrollPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_3;
 }
 /** @return {!$3} */
 static $create__org_gwtproject_user_client_ui_CustomScrollPanel(/** CustomScrollPanel */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_3__org_gwtproject_user_client_ui_CustomScrollPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_3__org_gwtproject_user_client_ui_CustomScrollPanel(/** CustomScrollPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_3.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
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
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.CustomScrollPanel$3');

ScheduledCommand.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=CustomScrollPanel$3.js.map