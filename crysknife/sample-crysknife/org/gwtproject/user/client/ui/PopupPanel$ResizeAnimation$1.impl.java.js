goog.module('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Timer = goog.require('org.gwtproject.timer.client.Timer$impl');

let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let ResizeAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation$impl');

class $1 extends Timer {
 /** @protected */
 constructor() {
  super();
  /**@type {ResizeAnimation}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(/** ResizeAnimation */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(/** ResizeAnimation */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1 = $outer_this;
  this.$ctor__org_gwtproject_timer_client_Timer__();
 }
 /** @override */
 m_run__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = null;
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_1.m_run__int(PopupPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_PopupPanel_);
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
 
 static $loadModules() {
  PopupPanel = goog.module.get('org.gwtproject.user.client.ui.PopupPanel$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.PopupPanel$ResizeAnimation$1');

exports = $1; 
//# sourceMappingURL=PopupPanel$ResizeAnimation$1.js.map