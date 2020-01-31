goog.module('org.gwtproject.event.logical.shared.OpenEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasOpenHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasOpenHandlers$impl');
let OpenHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Event<OpenHandler<T>>}
  */
class OpenEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_target__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 /** @template T_1 */
 static m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(/** HasOpenHandlers<T_1> */ source, /** T_1 */ target) {
  OpenEvent.$clinit();
  if (!$Equality.$same(OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_, null)) {
   let event = /**@type {!OpenEvent<T_1>}*/ (OpenEvent.$create__java_lang_Object(target));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<OpenHandler<?>>} */
 static m_getType__() {
  OpenEvent.$clinit();
  if ($Equality.$same(OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_, null)) {
   OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_ = /**@type {!Type<OpenHandler<?>>}*/ (Type.$create__());
  }
  return OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 /** @template T @return {!OpenEvent<T>} */
 static $create__java_lang_Object(/** T */ target) {
  OpenEvent.$clinit();
  let $instance = new OpenEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_OpenEvent__java_lang_Object(target);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_OpenEvent__java_lang_Object(/** T */ target) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_target__org_gwtproject_event_logical_shared_OpenEvent_ = target;
 }
 /** @override @return {Type<OpenHandler<T>>} */
 m_getAssociatedType__() {
  return /**@type {Type}*/ (OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_);
 }
 /** @return {T} */
 m_getTarget__() {
  return this.f_target__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_OpenHandler(/** OpenHandler<T> */ handler) {
  handler.m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_OpenHandler(/**@type {OpenHandler<T>}*/ ($Casts.$to(arg0, OpenHandler)));
 }
 
 static $clinit() {
  OpenEvent.$clinit = () =>{};
  OpenEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OpenEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  OpenHandler = goog.module.get('org.gwtproject.event.logical.shared.OpenHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(OpenEvent, 'org.gwtproject.event.logical.shared.OpenEvent');

/**@type {Type<OpenHandler<?>>}*/
OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_;

exports = OpenEvent; 
//# sourceMappingURL=OpenEvent.js.map