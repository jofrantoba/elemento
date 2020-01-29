goog.module('org.gwtproject.event.dom.client.EndedEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let EndedHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<EndedHandler>}
  */
class EndedEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!EndedEvent}
  * @public
  */
 static $create__() {
  EndedEvent.$clinit();
  let $instance = new EndedEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_EndedEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_EndedEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<EndedHandler>}
  * @public
  */
 static m_getType__() {
  EndedEvent.$clinit();
  return EndedEvent.f_TYPE__org_gwtproject_event_dom_client_EndedEvent_;
 }
 /**
  * @override
  * @return {Type<EndedHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return EndedEvent.f_TYPE__org_gwtproject_event_dom_client_EndedEvent_;
 }
 /**
  * @param {EndedHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_EndedHandler(handler) {
  handler.m_onEnded__org_gwtproject_event_dom_client_EndedEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_EndedHandler(/**@type {EndedHandler} */ ($Casts.$to(arg0, EndedHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  EndedEvent.$clinit = () =>{};
  EndedEvent.$loadModules();
  DomEvent.$clinit();
  EndedEvent.f_TYPE__org_gwtproject_event_dom_client_EndedEvent_ = /**@type {!Type<EndedHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_ENDED__org_gwtproject_dom_client_BrowserEvents, EndedEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EndedEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  EndedHandler = goog.module.get('org.gwtproject.event.dom.client.EndedHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(EndedEvent, 'org.gwtproject.event.dom.client.EndedEvent');

/** @public {Type<EndedHandler>} */
EndedEvent.f_TYPE__org_gwtproject_event_dom_client_EndedEvent_;

exports = EndedEvent; 
//# sourceMappingURL=EndedEvent.js.map