goog.module('org.gwtproject.event.dom.client.TouchCancelEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEvent = goog.require('org.gwtproject.event.dom.client.TouchEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let TouchCancelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TouchEvent<TouchCancelHandler>}
  */
class TouchCancelEvent extends TouchEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!TouchCancelEvent}
  * @public
  */
 static $create__() {
  TouchCancelEvent.$clinit();
  let $instance = new TouchCancelEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_TouchCancelEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchCancelEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_TouchEvent__();
 }
 /**
  * @return {Type<TouchCancelHandler>}
  * @public
  */
 static m_getType__() {
  TouchCancelEvent.$clinit();
  return TouchCancelEvent.f_TYPE__org_gwtproject_event_dom_client_TouchCancelEvent_;
 }
 /**
  * @override
  * @return {Type<TouchCancelHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return TouchCancelEvent.f_TYPE__org_gwtproject_event_dom_client_TouchCancelEvent_;
 }
 /**
  * @param {TouchCancelHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_TouchCancelHandler(handler) {
  handler.m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_TouchCancelHandler(/**@type {TouchCancelHandler} */ ($Casts.$to(arg0, TouchCancelHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  TouchCancelEvent.$clinit = () =>{};
  TouchCancelEvent.$loadModules();
  TouchEvent.$clinit();
  TouchCancelEvent.f_TYPE__org_gwtproject_event_dom_client_TouchCancelEvent_ = /**@type {!Type<TouchCancelHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_TOUCHCANCEL__org_gwtproject_dom_client_BrowserEvents, TouchCancelEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TouchCancelEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  TouchCancelHandler = goog.module.get('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TouchCancelEvent, 'org.gwtproject.event.dom.client.TouchCancelEvent');

/** @public {Type<TouchCancelHandler>} */
TouchCancelEvent.f_TYPE__org_gwtproject_event_dom_client_TouchCancelEvent_;

exports = TouchCancelEvent; 
//# sourceMappingURL=TouchCancelEvent.js.map