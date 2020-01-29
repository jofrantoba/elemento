goog.module('org.gwtproject.user.client.ui.FormSubmitEvent$impl');

const EventObject = goog.require('java.util.EventObject$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FormPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel$impl');

class FormSubmitEvent extends EventObject {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
  /** @public {boolean} */
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
 }
 /**
  * @param {FormPanel} source
  * @return {!FormSubmitEvent}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_FormPanel(source) {
  FormSubmitEvent.$clinit();
  let $instance = new FormSubmitEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormSubmitEvent__org_gwtproject_user_client_ui_FormPanel(source);
  return $instance;
 }
 /**
  * @param {FormPanel} source
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormSubmitEvent__org_gwtproject_user_client_ui_FormPanel(source) {
  this.$ctor__java_util_EventObject__java_lang_Object(source);
  this.$init___$p_org_gwtproject_user_client_ui_FormSubmitEvent();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isCancelled__() {
  return this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_;
 }
 /**
  * @param {boolean} cancel
  * @public
  */
 m_setCancelled__boolean(cancel) {
  this.f_cancel__org_gwtproject_user_client_ui_FormSubmitEvent_ = cancel;
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = true;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSetCancelledCalled___$pp_org_gwtproject_user_client_ui() {
  return this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_FormSubmitEvent() {
  this.f_setCancelledCalled__org_gwtproject_user_client_ui_FormSubmitEvent_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  FormSubmitEvent.$clinit = () =>{};
  FormSubmitEvent.$loadModules();
  EventObject.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FormSubmitEvent;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FormSubmitEvent, 'org.gwtproject.user.client.ui.FormSubmitEvent');

exports = FormSubmitEvent; 
//# sourceMappingURL=FormSubmitEvent.js.map