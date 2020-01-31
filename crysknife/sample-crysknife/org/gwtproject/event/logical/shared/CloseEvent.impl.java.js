goog.module('org.gwtproject.event.logical.shared.CloseEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let HasCloseHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Event<CloseHandler<T>>}
  */
class CloseEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_target__org_gwtproject_event_logical_shared_CloseEvent_;
  /**@type {boolean}*/
  this.f_autoClosed__org_gwtproject_event_logical_shared_CloseEvent_ = false;
 }
 /** @template T_1 */
 static m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(/** HasCloseHandlers<T_1> */ source, /** T_1 */ target) {
  CloseEvent.$clinit();
  CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object__boolean(source, target, false);
 }
 /** @template T_1 */
 static m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object__boolean(/** HasCloseHandlers<T_1> */ source, /** T_1 */ target, /** boolean */ autoClosed) {
  CloseEvent.$clinit();
  if (!$Equality.$same(CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_, null)) {
   let event = /**@type {!CloseEvent<T_1>}*/ (CloseEvent.$create__java_lang_Object__boolean(target, autoClosed));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<CloseHandler<?>>} */
 static m_getType__() {
  CloseEvent.$clinit();
  return !$Equality.$same(CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_, null) ? CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_ : (CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_ = /**@type {!Type<CloseHandler<?>>}*/ (Type.$create__()));
 }
 /** @template T @return {!CloseEvent<T>} */
 static $create__java_lang_Object__boolean(/** T */ target, /** boolean */ autoClosed) {
  CloseEvent.$clinit();
  let $instance = new CloseEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_CloseEvent__java_lang_Object__boolean(target, autoClosed);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_CloseEvent__java_lang_Object__boolean(/** T */ target, /** boolean */ autoClosed) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_autoClosed__org_gwtproject_event_logical_shared_CloseEvent_ = autoClosed;
  this.f_target__org_gwtproject_event_logical_shared_CloseEvent_ = target;
 }
 /** @override @return {Type<CloseHandler<T>>} */
 m_getAssociatedType__() {
  return /**@type {Type}*/ (CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_);
 }
 /** @return {T} */
 m_getTarget__() {
  return this.f_target__org_gwtproject_event_logical_shared_CloseEvent_;
 }
 /** @return {boolean} */
 m_isAutoClosed__() {
  return this.f_autoClosed__org_gwtproject_event_logical_shared_CloseEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_CloseHandler(/** CloseHandler<T> */ handler) {
  handler.m_onClose__org_gwtproject_event_logical_shared_CloseEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_CloseHandler(/**@type {CloseHandler<T>}*/ ($Casts.$to(arg0, CloseHandler)));
 }
 
 static $clinit() {
  CloseEvent.$clinit = () =>{};
  CloseEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CloseEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CloseHandler = goog.module.get('org.gwtproject.event.logical.shared.CloseHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CloseEvent, 'org.gwtproject.event.logical.shared.CloseEvent');

/**@type {Type<CloseHandler<?>>}*/
CloseEvent.f_TYPE__org_gwtproject_event_logical_shared_CloseEvent_;

exports = CloseEvent; 
//# sourceMappingURL=CloseEvent.js.map