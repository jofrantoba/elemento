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
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_ = false;
 }
 /** @template S */
 static m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(/** S */ source, /** boolean */ attached) {
  AttachEvent.$clinit();
  if (!$Equality.$same(AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent, null)) {
   let event = AttachEvent.$create__boolean(attached);
   /**@type {HasAttachHandlers}*/ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<Handler>} */
 static m_getType__() {
  AttachEvent.$clinit();
  if ($Equality.$same(AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent, null)) {
   AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent = /**@type {!Type<Handler>}*/ (Type.$create__());
  }
  return AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;
 }
 /** @return {!AttachEvent} */
 static $create__boolean(/** boolean */ attached) {
  AttachEvent.$clinit();
  let $instance = new AttachEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_AttachEvent__boolean(attached);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_AttachEvent__boolean(/** boolean */ attached) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_ = attached;
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;
 }
 /** @return {boolean} */
 m_isAttached__() {
  return this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_;
 }
 /** @override @return {?string} */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + " attached = " + this.f_attached__org_gwtproject_event_logical_shared_AttachEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_AttachEvent_Handler(/** Handler */ handler) {
  handler.m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_AttachEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 /** @return {Type<Handler>} */
 static get f_TYPE__org_gwtproject_event_logical_shared_AttachEvent() {
  return (AttachEvent.$clinit(), AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent);
 }
 
 static set f_TYPE__org_gwtproject_event_logical_shared_AttachEvent(/** Type<Handler> */ value) {
  (AttachEvent.$clinit(), AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent = value);
 }
 
 static $clinit() {
  AttachEvent.$clinit = () =>{};
  AttachEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AttachEvent;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Handler = goog.module.get('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AttachEvent, 'org.gwtproject.event.logical.shared.AttachEvent');

/**@private {Type<Handler>}*/
AttachEvent.$f_TYPE__org_gwtproject_event_logical_shared_AttachEvent;

exports = AttachEvent; 
//# sourceMappingURL=AttachEvent.js.map