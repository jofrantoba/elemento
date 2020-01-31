goog.module('org.gwtproject.user.client.ui.NotificationMole.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Timer = goog.require('org.gwtproject.timer.client.Timer$impl');

let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');

class $1 extends Timer {
 /** @protected */
 constructor() {
  super();
  /**@type {NotificationMole}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_1__org_gwtproject_user_client_ui_NotificationMole($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_1__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_1 = $outer_this;
  this.$ctor__org_gwtproject_timer_client_Timer__();
 }
 /** @override */
 m_run__() {
  if (this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_1.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole > 0) {
   this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_1.m_showImpl___$p_org_gwtproject_user_client_ui_NotificationMole();
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Timer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NotificationMole$1');

exports = $1; 
//# sourceMappingURL=NotificationMole$1.js.map