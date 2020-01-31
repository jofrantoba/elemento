goog.module('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BeforeSelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
let HasBeforeSelectionHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Event<BeforeSelectionHandler<T>>}
  */
class BeforeSelectionEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
  /**@type {boolean}*/
  this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = false;
 }
 /** @template T_1 @return {BeforeSelectionEvent<T_1>} */
 static m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(/** HasBeforeSelectionHandlers<T_1> */ source, /** T_1 */ item) {
  BeforeSelectionEvent.$clinit();
  if (!$Equality.$same(BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_, null)) {
   let event = /**@type {!BeforeSelectionEvent<T_1>}*/ (BeforeSelectionEvent.$create__());
   event.m_setItem__java_lang_Object(item);
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
   return event;
  }
  return null;
 }
 /** @return {Type<BeforeSelectionHandler<?>>} */
 static m_getType__() {
  BeforeSelectionEvent.$clinit();
  if ($Equality.$same(BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_, null)) {
   BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = /**@type {!Type<BeforeSelectionHandler<?>>}*/ (Type.$create__());
  }
  return BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 /** @template T @return {!BeforeSelectionEvent<T>} */
 static $create__() {
  BeforeSelectionEvent.$clinit();
  let $instance = new BeforeSelectionEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_BeforeSelectionEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_BeforeSelectionEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 
 m_cancel__() {
  this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = true;
 }
 /** @override @return {Type<BeforeSelectionHandler<T>>} */
 m_getAssociatedType__() {
  return /**@type {Type}*/ (BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_);
 }
 /** @return {T} */
 m_getItem__() {
  return this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 /** @return {boolean} */
 m_isCanceled__() {
  return this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/** BeforeSelectionHandler<T> */ handler) {
  handler.m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(this);
 }
 
 m_setItem__java_lang_Object(/** T */ item) {
  this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = item;
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/**@type {BeforeSelectionHandler<T>}*/ ($Casts.$to(arg0, BeforeSelectionHandler)));
 }
 
 static $clinit() {
  BeforeSelectionEvent.$clinit = () =>{};
  BeforeSelectionEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BeforeSelectionEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BeforeSelectionHandler = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BeforeSelectionEvent, 'org.gwtproject.event.logical.shared.BeforeSelectionEvent');

/**@type {Type<BeforeSelectionHandler<?>>}*/
BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;

exports = BeforeSelectionEvent; 
//# sourceMappingURL=BeforeSelectionEvent.js.map