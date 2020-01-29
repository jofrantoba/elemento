goog.module('org.gwtproject.event.dom.client.DragStartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragStartHandler>}
  */
class DragStartEvent extends DragDropEventBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DragStartEvent}
  * @public
  */
 static $create__() {
  DragStartEvent.$clinit();
  let $instance = new DragStartEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragStartEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragStartEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /**
  * @return {Type<DragStartHandler>}
  * @public
  */
 static m_getType__() {
  DragStartEvent.$clinit();
  return DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;
 }
 /**
  * @override
  * @return {Type<DragStartHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;
 }
 /**
  * @param {DragStartHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_DragStartHandler(handler) {
  handler.m_onDragStart__org_gwtproject_event_dom_client_DragStartEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragStartHandler(/**@type {DragStartHandler} */ ($Casts.$to(arg0, DragStartHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DragStartEvent.$clinit = () =>{};
  DragStartEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_ = /**@type {!Type<DragStartHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGSTART__org_gwtproject_dom_client_BrowserEvents, DragStartEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DragStartEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragStartHandler = goog.module.get('org.gwtproject.event.dom.client.DragStartHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragStartEvent, 'org.gwtproject.event.dom.client.DragStartEvent');

/** @public {Type<DragStartHandler>} */
DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;

exports = DragStartEvent; 
//# sourceMappingURL=DragStartEvent.js.map