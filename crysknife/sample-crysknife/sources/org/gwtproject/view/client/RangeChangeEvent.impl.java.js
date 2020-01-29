goog.module('org.gwtproject.view.client.RangeChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class RangeChangeEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Range} */
  this.f_range__org_gwtproject_view_client_RangeChangeEvent_;
 }
 /**
  * @param {HasRows} source
  * @param {Range} range
  * @public
  */
 static m_fire__org_gwtproject_view_client_HasRows__org_gwtproject_view_client_Range(source, range) {
  RangeChangeEvent.$clinit();
  if (!$Equality.$same(RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_, null)) {
   let event = RangeChangeEvent.$create__org_gwtproject_view_client_Range(range);
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static m_getType__() {
  RangeChangeEvent.$clinit();
  if ($Equality.$same(RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_, null)) {
   RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_ = /**@type {!Type<Handler>} */ (Type.$create__());
  }
  return RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_;
 }
 /**
  * @param {Range} range
  * @return {!RangeChangeEvent}
  * @public
  */
 static $create__org_gwtproject_view_client_Range(range) {
  RangeChangeEvent.$clinit();
  let $instance = new RangeChangeEvent();
  $instance.$ctor__org_gwtproject_view_client_RangeChangeEvent__org_gwtproject_view_client_Range(range);
  return $instance;
 }
 /**
  * @param {Range} range
  * @public
  */
 $ctor__org_gwtproject_view_client_RangeChangeEvent__org_gwtproject_view_client_Range(range) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_range__org_gwtproject_view_client_RangeChangeEvent_ = range;
 }
 /**
  * @override
  * @return {Type<Handler>}
  * @public
  */
 m_getAssociatedType__() {
  return RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_;
 }
 /**
  * @return {Range}
  * @public
  */
 m_getNewRange__() {
  return this.f_range__org_gwtproject_view_client_RangeChangeEvent_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + j_l_String.m_valueOf__java_lang_Object(this.m_getNewRange__());
 }
 /**
  * @param {Handler} handler
  * @public
  */
 m_dispatch__org_gwtproject_view_client_RangeChangeEvent_Handler(handler) {
  handler.m_onRangeChange__org_gwtproject_view_client_RangeChangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_view_client_RangeChangeEvent_Handler(/**@type {Handler} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @public
  */
 static $clinit() {
  RangeChangeEvent.$clinit = () =>{};
  RangeChangeEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RangeChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RangeChangeEvent, 'org.gwtproject.view.client.RangeChangeEvent');

/** @public {Type<Handler>} */
RangeChangeEvent.f_TYPE__org_gwtproject_view_client_RangeChangeEvent_;

exports = RangeChangeEvent; 
//# sourceMappingURL=RangeChangeEvent.js.map