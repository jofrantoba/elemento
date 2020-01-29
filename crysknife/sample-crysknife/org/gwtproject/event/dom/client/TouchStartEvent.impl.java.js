goog.module('org.gwtproject.event.dom.client.TouchStartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let TouchStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TouchEvent<TouchStartHandler>}
  */
class TouchStartEvent extends TouchEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!TouchStartEvent}
  * @public
  */
 static $create__() {
  TouchStartEvent.$clinit();
  let $instance = new TouchStartEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchStartEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchStartEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_TouchEvent__();
 }
 /**
  * @return {Type<TouchStartHandler>}
  * @public
  */
 static m_getType__() {
  TouchStartEvent.$clinit();
  return TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;
 }
 /**
  * @override
  * @return {Type<TouchStartHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;
 }
 /**
  * @param {TouchStartHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_TouchStartHandler(handler) {
  handler.m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_TouchStartHandler(/**@type {TouchStartHandler} */ ($Casts.$to(arg0, TouchStartHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  TouchStartEvent.$clinit = () =>{};
  TouchStartEvent.$loadModules();
  TouchEvent.$clinit();
  TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_ = /**@type {!Type<TouchStartHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_TOUCHSTART__org_gwtproject_dom_client_BrowserEvents, TouchStartEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TouchStartEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  TouchStartHandler = goog.module.get('org.gwtproject.event.dom.client.TouchStartHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchStartEvent, 'org.gwtproject.event.dom.client.TouchStartEvent');

/** @public {Type<TouchStartHandler>} */
TouchStartEvent.f_TYPE__org_gwtproject_event_dom_client_TouchStartEvent_;

exports = TouchStartEvent; 
//# sourceMappingURL=TouchStartEvent.js.map