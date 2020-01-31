goog.module('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class LoadingStateChangeEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {LoadingState}*/
  this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_;
 }
 /** @return {!LoadingStateChangeEvent} */
 static $create__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  LoadingStateChangeEvent.$clinit();
  let $instance = new LoadingStateChangeEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_ = state;
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent;
 }
 /** @return {LoadingState} */
 m_getLoadingState__() {
  return this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_;
 }
 
 m_dispatch__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(/** Handler */ handler) {
  handler.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 /** @return {Type<Handler>} */
 static get f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent() {
  return (LoadingStateChangeEvent.$clinit(), LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent);
 }
 
 static $clinit() {
  LoadingStateChangeEvent.$clinit = () =>{};
  LoadingStateChangeEvent.$loadModules();
  Event.$clinit();
  LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent = /**@type {!Type<Handler>}*/ (Type.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoadingStateChangeEvent;
 }
 
 static $loadModules() {
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LoadingStateChangeEvent, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent');

/**@private {Type<Handler>}*/
LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent;

exports = LoadingStateChangeEvent; 
//# sourceMappingURL=LoadingStateChangeEvent.js.map