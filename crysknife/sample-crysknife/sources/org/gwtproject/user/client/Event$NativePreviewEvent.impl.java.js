goog.module('org.gwtproject.user.client.Event.NativePreviewEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasNativeEvent = goog.require('org.gwtproject.event.dom.client.HasNativeEvent$impl');
const GwtEvent = goog.require('org.gwtproject.event.legacy.shared.GwtEvent$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.legacy.shared.GwtEvent.Type$impl');
let HandlerManager = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager$impl');
let NativePreviewHandler = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {GwtEvent<NativePreviewHandler>}
 * @implements {HasNativeEvent}
  */
class NativePreviewEvent extends GwtEvent {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  /**@type {boolean}*/
  this.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  /**@type {boolean}*/
  this.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  /**@type {Object}*/
  this.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 /** @return {!NativePreviewEvent} */
 static $create__() {
  NativePreviewEvent.$clinit();
  let $instance = new NativePreviewEvent();
  $instance.$ctor__org_gwtproject_user_client_Event_NativePreviewEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_Event_NativePreviewEvent__() {
  this.$ctor__org_gwtproject_event_legacy_shared_GwtEvent__();
  this.$init___$p_org_gwtproject_user_client_Event_NativePreviewEvent();
 }
 /** @return {Type<NativePreviewHandler>} */
 static m_getType__() {
  NativePreviewEvent.$clinit();
  if ($Equality.$same(NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_, null)) {
   NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_ = /**@type {!Type<NativePreviewHandler>}*/ (Type.$create__());
  }
  return NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 /** @return {boolean} */
 static m_fire__org_gwtproject_event_shared_HandlerManager__org_gwtproject_dom_client_NativeEvent(/** HandlerManager */ handlers, /** Object */ nativeEvent) {
  NativePreviewEvent.$clinit();
  if (!$Equality.$same(NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_, null) && !$Equality.$same(handlers, null) && handlers.m_isEventHandled__org_gwtproject_event_shared_Event_Type(NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_)) {
   let lastIsCanceled = NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_;
   let lastIsConsumed = NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_;
   let lastIsFirstHandler = NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_;
   let lastNativeEvent = NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_;
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.m_revive__();
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.m_setNativeEvent__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_Event_NativePreviewEvent(nativeEvent);
   handlers.m_fireEvent__org_gwtproject_event_shared_Event(NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_);
   let ret = !(NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.m_isCanceled__() && !NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.m_isConsumed__());
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_ = lastIsCanceled;
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_ = lastIsConsumed;
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_ = lastIsFirstHandler;
   NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_ = lastNativeEvent;
   return ret;
  }
  return true;
 }
 
 m_cancel__() {
  this.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_ = true;
 }
 
 m_consume__() {
  this.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_ = true;
 }
 /** @override @return {Type<NativePreviewHandler>} */
 m_getAssociatedType__() {
  return NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 /** @override @return {Object} */
 m_getNativeEvent__() {
  return this.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 
 m_setNativeEvent__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_Event_NativePreviewEvent(/** Object */ nativeEvent) {
  this.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_ = nativeEvent;
 }
 /** @return {number} */
 m_getTypeInt__() {
  return $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {boolean} */
 m_isCanceled__() {
  return this.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 /** @return {boolean} */
 m_isConsumed__() {
  return this.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 /** @return {boolean} */
 m_isFirstHandler__() {
  return this.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_;
 }
 
 m_dispatch__org_gwtproject_user_client_Event_NativePreviewHandler(/** NativePreviewHandler */ handler) {
  handler.m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(this);
  NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
 }
 /** @override */
 m_revive__() {
  super.m_revive__();
  this.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  this.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  this.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_ = true;
  this.f_nativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_ = null;
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_client_Event_NativePreviewHandler(/**@type {NativePreviewHandler}*/ ($Casts.$to(arg0, NativePreviewHandler)));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_Event_NativePreviewEvent() {
  this.f_isCanceled__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  this.f_isConsumed__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
  this.f_isFirstHandler__org_gwtproject_user_client_Event_NativePreviewEvent_ = false;
 }
 /** @return {Type<NativePreviewHandler>} */
 static get f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_() {
  return (NativePreviewEvent.$clinit(), NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_);
 }
 
 static set f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_(/** Type<NativePreviewHandler> */ value) {
  (NativePreviewEvent.$clinit(), NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_ = value);
 }
 /** @return {NativePreviewEvent} */
 static get f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_() {
  return (NativePreviewEvent.$clinit(), NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_);
 }
 
 static set f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_(/** NativePreviewEvent */ value) {
  (NativePreviewEvent.$clinit(), NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_ = value);
 }
 
 static $clinit() {
  NativePreviewEvent.$clinit = () =>{};
  NativePreviewEvent.$loadModules();
  GwtEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativePreviewEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.legacy.shared.GwtEvent.Type$impl');
  NativePreviewHandler = goog.module.get('org.gwtproject.user.client.Event.NativePreviewHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativePreviewEvent, 'org.gwtproject.user.client.Event$NativePreviewEvent');

HasNativeEvent.$markImplementor(NativePreviewEvent);

/**@private {Type<NativePreviewHandler>}*/
NativePreviewEvent.$f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_;
/**@private {NativePreviewEvent}*/
NativePreviewEvent.$f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_;

exports = NativePreviewEvent; 
//# sourceMappingURL=Event$NativePreviewEvent.js.map