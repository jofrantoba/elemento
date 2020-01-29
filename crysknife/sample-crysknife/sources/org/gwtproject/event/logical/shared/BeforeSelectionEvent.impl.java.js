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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
  /** @public {boolean} */
  this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = false;
 }
 /**
  * @template T_1
  * @param {HasBeforeSelectionHandlers<T_1>} source
  * @param {T_1} item
  * @return {BeforeSelectionEvent<T_1>}
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(source, item) {
  BeforeSelectionEvent.$clinit();
  if (!$Equality.$same(BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_, null)) {
   let event = /**@type {!BeforeSelectionEvent<T_1>} */ (BeforeSelectionEvent.$create__());
   event.m_setItem__java_lang_Object(item);
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
   return event;
  }
  return null;
 }
 /**
  * @return {Type<BeforeSelectionHandler<?>>}
  * @public
  */
 static m_getType__() {
  BeforeSelectionEvent.$clinit();
  if ($Equality.$same(BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_, null)) {
   BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = /**@type {!Type<BeforeSelectionHandler<?>>} */ (Type.$create__());
  }
  return BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 /**
  * @template T
  * @return {!BeforeSelectionEvent<T>}
  * @public
  */
 static $create__() {
  BeforeSelectionEvent.$clinit();
  let $instance = new BeforeSelectionEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_BeforeSelectionEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_BeforeSelectionEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 /**
  * @public
  */
 m_cancel__() {
  this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = true;
 }
 /**
  * @override
  * @return {Type<BeforeSelectionHandler<T>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_);
 }
 /**
  * @return {T}
  * @public
  */
 m_getItem__() {
  return this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isCanceled__() {
  return this.f_canceled__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;
 }
 /**
  * @param {BeforeSelectionHandler<T>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_BeforeSelectionHandler(handler) {
  handler.m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(this);
 }
 /**
  * @param {T} item
  * @public
  */
 m_setItem__java_lang_Object(item) {
  this.f_item__org_gwtproject_event_logical_shared_BeforeSelectionEvent_ = item;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/**@type {BeforeSelectionHandler<T>} */ ($Casts.$to(arg0, BeforeSelectionHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  BeforeSelectionEvent.$clinit = () =>{};
  BeforeSelectionEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BeforeSelectionEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BeforeSelectionHandler = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BeforeSelectionEvent, 'org.gwtproject.event.logical.shared.BeforeSelectionEvent');

/** @public {Type<BeforeSelectionHandler<?>>} */
BeforeSelectionEvent.f_TYPE__org_gwtproject_event_logical_shared_BeforeSelectionEvent_;

exports = BeforeSelectionEvent; 
//# sourceMappingURL=BeforeSelectionEvent.js.map