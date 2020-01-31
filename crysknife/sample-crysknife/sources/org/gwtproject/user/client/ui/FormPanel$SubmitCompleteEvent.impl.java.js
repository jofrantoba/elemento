goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let SubmitCompleteHandler = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<SubmitCompleteHandler>}
  */
class SubmitCompleteEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_resultHtml__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_;
 }
 /** @return {Type<SubmitCompleteHandler>} */
 static m_getType__() {
  SubmitCompleteEvent.$clinit();
  if ($Equality.$same(SubmitCompleteEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_, null)) {
   SubmitCompleteEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_ = /**@type {!Type<SubmitCompleteHandler>}*/ (Type.$create__());
  }
  return SubmitCompleteEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_;
 }
 /** @return {!SubmitCompleteEvent} */
 static $create__java_lang_String(/** ?string */ resultsHtml) {
  SubmitCompleteEvent.$clinit();
  let $instance = new SubmitCompleteEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent__java_lang_String(resultsHtml);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent__java_lang_String(/** ?string */ resultsHtml) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_resultHtml__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_ = resultsHtml;
 }
 /** @override @return {Type<SubmitCompleteHandler>} */
 m_getAssociatedType__() {
  return SubmitCompleteEvent.m_getType__();
 }
 /** @return {?string} */
 m_getResults__() {
  return this.f_resultHtml__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_;
 }
 
 m_dispatch__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler(/** SubmitCompleteHandler */ handler) {
  handler.m_onSubmitComplete__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler(/**@type {SubmitCompleteHandler}*/ ($Casts.$to(arg0, SubmitCompleteHandler)));
 }
 
 static $clinit() {
  SubmitCompleteEvent.$clinit = () =>{};
  SubmitCompleteEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SubmitCompleteEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  SubmitCompleteHandler = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SubmitCompleteEvent, 'org.gwtproject.user.client.ui.FormPanel$SubmitCompleteEvent');

/**@type {Type<SubmitCompleteHandler>}*/
SubmitCompleteEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent_;

exports = SubmitCompleteEvent; 
//# sourceMappingURL=FormPanel$SubmitCompleteEvent.js.map