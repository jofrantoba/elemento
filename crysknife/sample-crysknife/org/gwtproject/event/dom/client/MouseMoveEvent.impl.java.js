goog.module('org.gwtproject.event.dom.client.MouseMoveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseMoveHandler>}
  */
class MouseMoveEvent extends MouseEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!MouseMoveEvent}
  * @public
  */
 static $create__() {
  MouseMoveEvent.$clinit();
  let $instance = new MouseMoveEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseMoveEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseMoveEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /**
  * @return {Type<MouseMoveHandler>}
  * @public
  */
 static m_getType__() {
  MouseMoveEvent.$clinit();
  return MouseMoveEvent.f_TYPE__org_gwtproject_event_dom_client_MouseMoveEvent_;
 }
 /**
  * @override
  * @return {Type<MouseMoveHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return MouseMoveEvent.f_TYPE__org_gwtproject_event_dom_client_MouseMoveEvent_;
 }
 /**
  * @param {MouseMoveHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_MouseMoveHandler(handler) {
  handler.m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseMoveHandler(/**@type {MouseMoveHandler} */ ($Casts.$to(arg0, MouseMoveHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  MouseMoveEvent.$clinit = () =>{};
  MouseMoveEvent.$loadModules();
  MouseEvent.$clinit();
  MouseMoveEvent.f_TYPE__org_gwtproject_event_dom_client_MouseMoveEvent_ = /**@type {!Type<MouseMoveHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEMOVE__org_gwtproject_dom_client_BrowserEvents, MouseMoveEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MouseMoveEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseMoveHandler = goog.module.get('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseMoveEvent, 'org.gwtproject.event.dom.client.MouseMoveEvent');

/** @public {Type<MouseMoveHandler>} */
MouseMoveEvent.f_TYPE__org_gwtproject_event_dom_client_MouseMoveEvent_;

exports = MouseMoveEvent; 
//# sourceMappingURL=MouseMoveEvent.js.map