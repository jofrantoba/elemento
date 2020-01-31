goog.module('org.gwtproject.user.client.ui.FormSubmitEvent$impl');

const EventObject = goog.require('java.util.EventObject$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FormPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel$impl');

class FormSubmitEvent extends EventObject {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
  /**@type {boolean}*/
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
 }
 /** @return {!FormSubmitEvent} */
 static $create__org_gwtproject_user_client_ui_FormPanel(/** FormPanel */ source) {
  FormSubmitEvent.$clinit();
  let $instance = new FormSubmitEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormSubmitEvent__org_gwtproject_user_client_ui_FormPanel(source);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FormSubmitEvent__org_gwtproject_user_client_ui_FormPanel(/** FormPanel */ source) {
  this.$ctor__java_util_EventObject__java_lang_Object(source);
  this.$init___$p_org_gwtproject_user_client_ui_FormSubmitEvent();
 }
 /** @return {boolean} */
 m_isCancelled__() {
  return this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_;
 }
 
 m_setCancelled__boolean(/** boolean */ cancel) {
  this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_ = cancel;
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = true;
 }
 /** @return {boolean} */
 m_isSetCancelledCalled___$pp_org_gwtproject_user_client_ui() {
  return this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_;
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_FormSubmitEvent() {
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
 }
 
 static $clinit() {
  FormSubmitEvent.$clinit = () =>{};
  FormSubmitEvent.$loadModules();
  EventObject.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSubmitEvent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FormSubmitEvent, 'org.gwtproject.user.client.ui.FormSubmitEvent');

exports = FormSubmitEvent; 
//# sourceMappingURL=FormSubmitEvent.js.map