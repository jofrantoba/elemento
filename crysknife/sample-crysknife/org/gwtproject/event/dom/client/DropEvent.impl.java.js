goog.module('org.gwtproject.event.dom.client.DropEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DropHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DropHandler>}
  */
class DropEvent extends DragDropEventBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DropEvent}
  * @public
  */
 static $create__() {
  DropEvent.$clinit();
  let $instance = new DropEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DropEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_DropEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /**
  * @return {Type<DropHandler>}
  * @public
  */
 static m_getType__() {
  DropEvent.$clinit();
  return DropEvent.f_TYPE__org_gwtproject_event_dom_client_DropEvent_;
 }
 /**
  * @override
  * @return {Type<DropHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return DropEvent.f_TYPE__org_gwtproject_event_dom_client_DropEvent_;
 }
 /**
  * @param {DropHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_DropHandler(handler) {
  handler.m_onDrop__org_gwtproject_event_dom_client_DropEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DropHandler(/**@type {DropHandler} */ ($Casts.$to(arg0, DropHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  DropEvent.$clinit = () =>{};
  DropEvent.$loadModules();
  DragDropEventBase.$clinit();
  DropEvent.f_TYPE__org_gwtproject_event_dom_client_DropEvent_ = /**@type {!Type<DropHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DROP__org_gwtproject_dom_client_BrowserEvents, DropEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DropEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DropHandler = goog.module.get('org.gwtproject.event.dom.client.DropHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DropEvent, 'org.gwtproject.event.dom.client.DropEvent');

/** @public {Type<DropHandler>} */
DropEvent.f_TYPE__org_gwtproject_event_dom_client_DropEvent_;

exports = DropEvent; 
//# sourceMappingURL=DropEvent.js.map