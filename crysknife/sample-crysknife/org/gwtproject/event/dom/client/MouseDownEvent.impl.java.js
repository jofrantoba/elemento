goog.module('org.gwtproject.event.dom.client.MouseDownEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseDownHandler>}
  */
class MouseDownEvent extends MouseEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!MouseDownEvent}
  * @public
  */
 static $create__() {
  MouseDownEvent.$clinit();
  let $instance = new MouseDownEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseDownEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseDownEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /**
  * @return {Type<MouseDownHandler>}
  * @public
  */
 static m_getType__() {
  MouseDownEvent.$clinit();
  return MouseDownEvent.f_TYPE__org_gwtproject_event_dom_client_MouseDownEvent_;
 }
 /**
  * @override
  * @return {Type<MouseDownHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return MouseDownEvent.f_TYPE__org_gwtproject_event_dom_client_MouseDownEvent_;
 }
 /**
  * @param {MouseDownHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_MouseDownHandler(handler) {
  handler.m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseDownHandler(/**@type {MouseDownHandler} */ ($Casts.$to(arg0, MouseDownHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  MouseDownEvent.$clinit = () =>{};
  MouseDownEvent.$loadModules();
  MouseEvent.$clinit();
  MouseDownEvent.f_TYPE__org_gwtproject_event_dom_client_MouseDownEvent_ = /**@type {!Type<MouseDownHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents, MouseDownEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MouseDownEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseDownHandler = goog.module.get('org.gwtproject.event.dom.client.MouseDownHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseDownEvent, 'org.gwtproject.event.dom.client.MouseDownEvent');

/** @public {Type<MouseDownHandler>} */
MouseDownEvent.f_TYPE__org_gwtproject_event_dom_client_MouseDownEvent_;

exports = MouseDownEvent; 
//# sourceMappingURL=MouseDownEvent.js.map