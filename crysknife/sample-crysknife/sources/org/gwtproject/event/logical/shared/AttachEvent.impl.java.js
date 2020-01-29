goog.module('org.gwtproject.event.logical.shared.AttachEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Handler = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');
let HasAttachHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasAttachHandlers$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class AttachEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_ = false;
 }
 /**
  * @template S
  * @param {S} source
  * @param {boolean} attached
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(source, attached) {
  AttachEvent.$clinit();
  if (!$Equality.$same(AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent, null)) {
   let event = AttachEvent.$create__boolean(attached);
   /**@type {HasAttachHandlers} */ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static m_getType__() {
  AttachEvent.$clinit();
  if ($Equality.$same(AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent, null)) {
   AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent = /**@type {!Type<Handler>} */ (Type.$create__());
  }
  return AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;
 }
 /**
  * @param {boolean} attached
  * @return {!AttachEvent}
  * @public
  */
 static $create__boolean(attached) {
  AttachEvent.$clinit();
  let $instance = new AttachEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_AttachEvent__boolean(attached);
  return $instance;
 }
 /**
  * @param {boolean} attached
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_AttachEvent__boolean(attached) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_ = attached;
 }
 /**
  * @override
  * @return {Type<Handler>}
  * @public
  */
 m_getAssociatedType__() {
  return AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isAttached__() {
  return this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + " attached = " + this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_;
 }
 /**
  * @param {Handler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_AttachEvent_Handler(handler) {
  handler.m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_AttachEvent_Handler(/**@type {Handler} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static get f_TYPE__org_gwtproject_event_logical_shared_AttachEvent() {
  return (AttachEvent.$clinit(), AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent);
 }
 /**
  * @param {Type<Handler>} value
  * @public
  */
 static set f_TYPE__org_gwtproject_event_logical_shared_AttachEvent(value) {
  (AttachEvent.$clinit(), AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent = value);
 }
 /**
  * @public
  */
 static $clinit() {
  AttachEvent.$clinit = () =>{};
  AttachEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AttachEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Handler = goog.module.get('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AttachEvent, 'org.gwtproject.event.logical.shared.AttachEvent');

/** @private {Type<Handler>} */
AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;

exports = AttachEvent; 
//# sourceMappingURL=AttachEvent.js.map