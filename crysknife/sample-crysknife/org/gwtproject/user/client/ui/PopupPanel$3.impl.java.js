goog.module('org.gwtproject.user.client.ui.PopupPanel.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');

/**
 * @implements {NativePreviewHandler}
  */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PopupPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3;
 }
 /** @return {!$3} */
 static $create__org_gwtproject_user_client_ui_PopupPanel(/** PopupPanel */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_3__org_gwtproject_user_client_ui_PopupPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel_3__org_gwtproject_user_client_ui_PopupPanel(/** PopupPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_3.m_previewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_$p_org_gwtproject_user_client_ui_PopupPanel(event);
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
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.PopupPanel$3');

NativePreviewHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=PopupPanel$3.js.map