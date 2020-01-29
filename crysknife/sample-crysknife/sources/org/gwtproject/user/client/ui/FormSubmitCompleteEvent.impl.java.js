goog.module('org.gwtproject.user.client.ui.FormSubmitCompleteEvent$impl');

const EventObject = goog.require('java.util.EventObject$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FormPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel$impl');

class FormSubmitCompleteEvent extends EventObject {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_;
 }
 /**
  * @param {FormPanel} source
  * @param {?string} resultHtml
  * @return {!FormSubmitCompleteEvent}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_FormPanel__java_lang_String(source, resultHtml) {
  FormSubmitCompleteEvent.$clinit();
  let $instance = new FormSubmitCompleteEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormSubmitCompleteEvent__org_gwtproject_user_client_ui_FormPanel__java_lang_String(source, resultHtml);
  return $instance;
 }
 /**
  * @param {FormPanel} source
  * @param {?string} resultHtml
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormSubmitCompleteEvent__org_gwtproject_user_client_ui_FormPanel__java_lang_String(source, resultHtml) {
  this.$ctor__java_util_EventObject__java_lang_Object(source);
  this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_ = resultHtml;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getResults__() {
  return this.f_resultHtml__org_gwtproject_user_client_ui_FormSubmitCompleteEvent_;
 }
 /**
  * @public
  */
 static $clinit() {
  FormSubmitCompleteEvent.$clinit = () =>{};
  FormSubmitCompleteEvent.$loadModules();
  EventObject.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FormSubmitCompleteEvent;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FormSubmitCompleteEvent, 'org.gwtproject.user.client.ui.FormSubmitCompleteEvent');

exports = FormSubmitCompleteEvent; 
//# sourceMappingURL=FormSubmitCompleteEvent.js.map