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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_target__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 /**
  * @template T_1
  * @param {HasOpenHandlers<T_1>} source
  * @param {T_1} target
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(source, target) {
  OpenEvent.$clinit();
  if (!$Equality.$same(OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_, null)) {
   let event = /**@type {!OpenEvent<T_1>} */ (OpenEvent.$create__java_lang_Object(target));
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<OpenHandler<?>>}
  * @public
  */
 static m_getType__() {
  OpenEvent.$clinit();
  if ($Equality.$same(OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_, null)) {
   OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_ = /**@type {!Type<OpenHandler<?>>} */ (Type.$create__());
  }
  return OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 /**
  * @template T
  * @param {T} target
  * @return {!OpenEvent<T>}
  * @public
  */
 static $create__java_lang_Object(target) {
  OpenEvent.$clinit();
  let $instance = new OpenEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_OpenEvent__java_lang_Object(target);
  return $instance;
 }
 /**
  * @param {T} target
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_OpenEvent__java_lang_Object(target) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_target__org_gwtproject_event_logical_shared_OpenEvent_ = target;
 }
 /**
  * @override
  * @return {Type<OpenHandler<T>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_);
 }
 /**
  * @return {T}
  * @public
  */
 m_getTarget__() {
  return this.f_target__org_gwtproject_event_logical_shared_OpenEvent_;
 }
 /**
  * @param {OpenHandler<T>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_OpenHandler(handler) {
  handler.m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_OpenHandler(/**@type {OpenHandler<T>} */ ($Casts.$to(arg0, OpenHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  OpenEvent.$clinit = () =>{};
  OpenEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OpenEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  OpenHandler = goog.module.get('org.gwtproject.event.logical.shared.OpenHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(OpenEvent, 'org.gwtproject.event.logical.shared.OpenEvent');

/** @public {Type<OpenHandler<?>>} */
OpenEvent.f_TYPE__org_gwtproject_event_logical_shared_OpenEvent_;

exports = OpenEvent; 
//# sourceMappingURL=OpenEvent.js.map