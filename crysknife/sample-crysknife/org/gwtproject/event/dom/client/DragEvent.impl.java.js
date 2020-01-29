goog.module('org.gwtproject.event.dom.client.DragEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragHandler>}
  */
class DragEvent extends DragDropEventBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DragEvent}
  * @public
  */
 static $create__() {
  DragEvent.$clinit();
  let $instance = new DragEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /**
  * @return {Type<DragHandler>}
  * @public
  */
 static m_getType__() {
  DragEvent.$clinit();
  return DragEvent.f_TYPE__org_gwtproject_event_dom_client_DragEvent_;
 }
 /**
  * @override
  * @return {Type<DragHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return DragEvent.f_TYPE__org_gwtproject_event_dom_client_DragEvent_;
 }
 /**
  * @param {DragHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_DragHandler(handler) {
  handler.m_onDrag__org_gwtproject_event_dom_client_DragEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragHandler(/**@type {DragHandler} */ ($Casts.$to(arg0, DragHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DragEvent.$clinit = () =>{};
  DragEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragEvent.f_TYPE__org_gwtproject_event_dom_client_DragEvent_ = /**@type {!Type<DragHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAG__org_gwtproject_dom_client_BrowserEvents, DragEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DragEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragHandler = goog.module.get('org.gwtproject.event.dom.client.DragHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragEvent, 'org.gwtproject.event.dom.client.DragEvent');

/** @public {Type<DragHandler>} */
DragEvent.f_TYPE__org_gwtproject_event_dom_client_DragEvent_;

exports = DragEvent; 
//# sourceMappingURL=DragEvent.js.map