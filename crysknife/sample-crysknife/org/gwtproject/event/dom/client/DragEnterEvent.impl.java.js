goog.module('org.gwtproject.event.dom.client.DragEnterEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragEnterHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragEnterHandler>}
  */
class DragEnterEvent extends DragDropEventBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DragEnterEvent}
  * @public
  */
 static $create__() {
  DragEnterEvent.$clinit();
  let $instance = new DragEnterEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragEnterEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DragEnterEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /**
  * @return {Type<DragEnterHandler>}
  * @public
  */
 static m_getType__() {
  DragEnterEvent.$clinit();
  return DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;
 }
 /**
  * @override
  * @return {Type<DragEnterHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;
 }
 /**
  * @param {DragEnterHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_DragEnterHandler(handler) {
  handler.m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragEnterHandler(/**@type {DragEnterHandler} */ ($Casts.$to(arg0, DragEnterHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DragEnterEvent.$clinit = () =>{};
  DragEnterEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_ = /**@type {!Type<DragEnterHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGENTER__org_gwtproject_dom_client_BrowserEvents, DragEnterEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DragEnterEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragEnterHandler = goog.module.get('org.gwtproject.event.dom.client.DragEnterHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragEnterEvent, 'org.gwtproject.event.dom.client.DragEnterEvent');

/** @public {Type<DragEnterHandler>} */
DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;

exports = DragEnterEvent; 
//# sourceMappingURL=DragEnterEvent.js.map