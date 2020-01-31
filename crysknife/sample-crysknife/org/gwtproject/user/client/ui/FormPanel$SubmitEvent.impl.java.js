goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let SubmitHandler = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<SubmitHandler>}
  */
class SubmitEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_canceled__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_ = false;
 }
 /** @return {!SubmitEvent} */
 static $create__() {
  SubmitEvent.$clinit();
  let $instance = new SubmitEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.$init___$p_org_gwtproject_user_client_ui_FormPanel_SubmitEvent();
 }
 /** @return {Type<SubmitHandler>} */
 static m_getType__() {
  SubmitEvent.$clinit();
  if ($Equality.$same(SubmitEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_, null)) {
   SubmitEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_ = /**@type {!Type<SubmitHandler>}*/ (Type.$create__());
  }
  return SubmitEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_;
 }
 
 m_cancel__() {
  this.f_canceled__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_ = true;
 }
 /** @override @return {Type<SubmitHandler>} */
 m_getAssociatedType__() {
  return SubmitEvent.m_getType__();
 }
 /** @return {boolean} */
 m_isCanceled__() {
  return this.f_canceled__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_;
 }
 
 m_dispatch__org_gwtproject_user_client_ui_FormPanel_SubmitHandler(/** SubmitHandler */ handler) {
  handler.m_onSubmit__org_gwtproject_user_client_ui_FormPanel_SubmitEvent(this);
 }
 /** @deprecated */
 m_setCanceled__boolean_$pp_org_gwtproject_user_client_ui(/** boolean */ canceled) {
  this.f_canceled__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_ = canceled;
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_client_ui_FormPanel_SubmitHandler(/**@type {SubmitHandler}*/ ($Casts.$to(arg0, SubmitHandler)));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_FormPanel_SubmitEvent() {
  this.f_canceled__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_ = false;
 }
 
 static $clinit() {
  SubmitEvent.$clinit = () =>{};
  SubmitEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SubmitEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  SubmitHandler = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SubmitEvent, 'org.gwtproject.user.client.ui.FormPanel$SubmitEvent');

/**@type {Type<SubmitHandler>}*/
SubmitEvent.f_TYPE__org_gwtproject_user_client_ui_FormPanel_SubmitEvent_;

exports = SubmitEvent; 
//# sourceMappingURL=FormPanel$SubmitEvent.js.map