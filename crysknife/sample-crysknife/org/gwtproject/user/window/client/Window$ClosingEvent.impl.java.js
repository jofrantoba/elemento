goog.module('org.gwtproject.user.window.client.Window.ClosingEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let ClosingHandler = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<ClosingHandler>}
  */
class ClosingEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_message__org_gwtproject_user_window_client_Window_ClosingEvent_;
 }
 /** @return {!ClosingEvent} */
 static $create__() {
  ClosingEvent.$clinit();
  let $instance = new ClosingEvent();
  $instance.$ctor__org_gwtproject_user_window_client_Window_ClosingEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_window_client_Window_ClosingEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.$init___$p_org_gwtproject_user_window_client_Window_ClosingEvent();
 }
 /** @return {Type<ClosingHandler>} */
 static m_getType__() {
  ClosingEvent.$clinit();
  return ClosingEvent.f_TYPE__org_gwtproject_user_window_client_Window_ClosingEvent_;
 }
 /** @override @return {Type<ClosingHandler>} */
 m_getAssociatedType__() {
  return ClosingEvent.f_TYPE__org_gwtproject_user_window_client_Window_ClosingEvent_;
 }
 /** @return {?string} */
 m_getMessage__() {
  return this.f_message__org_gwtproject_user_window_client_Window_ClosingEvent_;
 }
 
 m_setMessage__java_lang_String(/** ?string */ message) {
  this.f_message__org_gwtproject_user_window_client_Window_ClosingEvent_ = message;
 }
 
 m_dispatch__org_gwtproject_user_window_client_Window_ClosingHandler(/** ClosingHandler */ handler) {
  handler.m_onWindowClosing__org_gwtproject_user_window_client_Window_ClosingEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_window_client_Window_ClosingHandler(/**@type {ClosingHandler}*/ ($Casts.$to(arg0, ClosingHandler)));
 }
 /** @private */
 $init___$p_org_gwtproject_user_window_client_Window_ClosingEvent() {
  this.f_message__org_gwtproject_user_window_client_Window_ClosingEvent_ = null;
 }
 
 static $clinit() {
  ClosingEvent.$clinit = () =>{};
  ClosingEvent.$loadModules();
  Event.$clinit();
  ClosingEvent.f_TYPE__org_gwtproject_user_window_client_Window_ClosingEvent_ = /**@type {!Type<ClosingHandler>}*/ (Type.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClosingEvent;
 }
 
 static $loadModules() {
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  ClosingHandler = goog.module.get('org.gwtproject.user.window.client.Window.ClosingHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ClosingEvent, 'org.gwtproject.user.window.client.Window$ClosingEvent');

/**@type {Type<ClosingHandler>}*/
ClosingEvent.f_TYPE__org_gwtproject_user_window_client_Window_ClosingEvent_;

exports = ClosingEvent; 
//# sourceMappingURL=Window$ClosingEvent.js.map