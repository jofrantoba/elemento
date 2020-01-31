goog.module('org.gwtproject.user.client.ui.PopupPanel.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PositionCallback = goog.require('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');

/**
 * @implements {PositionCallback}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PopupPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_2;
  /**@type {UIObject}*/
  this.$c_target;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_user_client_ui_PopupPanel__org_gwtproject_user_client_ui_UIObject(/** PopupPanel */ $outer_this, /** UIObject */ $c_target) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_2__org_gwtproject_user_client_ui_PopupPanel__org_gwtproject_user_client_ui_UIObject($outer_this, $c_target);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel_2__org_gwtproject_user_client_ui_PopupPanel__org_gwtproject_user_client_ui_UIObject(/** PopupPanel */ $outer_this, /** UIObject */ $c_target) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_2 = $outer_this;
  this.$c_target = $c_target;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_setPosition__int__int(/** number */ offsetWidth, /** number */ offsetHeight) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_2.m_position__org_gwtproject_user_client_ui_UIObject__int__int_$p_org_gwtproject_user_client_ui_PopupPanel(this.$c_target, offsetWidth, offsetHeight);
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
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.PopupPanel$2');

PositionCallback.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=PopupPanel$2.js.map