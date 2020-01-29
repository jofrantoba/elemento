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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LoadingState} */
  this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_;
 }
 /**
  * @param {LoadingState} state
  * @return {!LoadingStateChangeEvent}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state) {
  LoadingStateChangeEvent.$clinit();
  let $instance = new LoadingStateChangeEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
  return $instance;
 }
 /**
  * @param {LoadingState} state
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_ = state;
 }
 /**
  * @override
  * @return {Type<Handler>}
  * @public
  */
 m_getAssociatedType__() {
  return LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent;
 }
 /**
  * @return {LoadingState}
  * @public
  */
 m_getLoadingState__() {
  return this.f_state__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_;
 }
 /**
  * @param {Handler} handler
  * @public
  */
 m_dispatch__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(handler) {
  handler.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(/**@type {Handler} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static get f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent() {
  return (LoadingStateChangeEvent.$clinit(), LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent);
 }
 /**
  * @public
  */
 static $clinit() {
  LoadingStateChangeEvent.$clinit = () =>{};
  LoadingStateChangeEvent.$loadModules();
  Event.$clinit();
  LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent = /**@type {!Type<Handler>} */ (Type.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LoadingStateChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LoadingStateChangeEvent, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent');

/** @private {Type<Handler>} */
LoadingStateChangeEvent.$f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent;

exports = LoadingStateChangeEvent; 
//# sourceMappingURL=LoadingStateChangeEvent.js.map