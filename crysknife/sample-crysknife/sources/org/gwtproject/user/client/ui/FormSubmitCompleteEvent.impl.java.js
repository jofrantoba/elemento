goog.module('org.gwtproject.user.client.ui.FormSubmitCompleteEvent$impl');

const EventObject = goog.require('java.util.EventObject$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FormPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel$impl');

class FormSubmitCompleteEvent extends EventObject {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_;
 }
 /** @return {!FormSubmitCompleteEvent} */
 static $create__org_gwtproject_user_client_ui_FormPanel__java_lang_String(/** FormPanel */ source, /** ?string */ resultHtml) {
  FormSubmitCompleteEvent.$clinit();
  let $instance = new FormSubmitCompleteEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormSubmitCompleteEvent__org_gwtproject_user_client_ui_FormPanel__java_lang_String(source, resultHtml);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FormSubmitCompleteEvent__org_gwtproject_user_client_ui_FormPanel__java_lang_String(/** FormPanel */ source, /** ?string */ resultHtml) {
  this.$ctor__java_util_EventObject__java_lang_Object(source);
  this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_ = resultHtml;
 }
 /** @return {?string} */
 m_getResults__() {
  return this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_;
 }
 
 static $clinit() {
  FormSubmitCompleteEvent.$clinit = () =>{};
  FormSubmitCompleteEvent.$loadModules();
  EventObject.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSubmitCompleteEvent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FormSubmitCompleteEvent, 'org.gwtproject.user.client.ui.FormSubmitCompleteEvent');

exports = FormSubmitCompleteEvent; 
//# sourceMappingURL=FormSubmitCompleteEvent.js.map