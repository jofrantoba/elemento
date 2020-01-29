goog.module('org.gwtproject.event.dom.client.FocusEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let FocusHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<FocusHandler>}
  */
class FocusEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FocusEvent}
  * @public
  */
 static $create__() {
  FocusEvent.$clinit();
  let $instance = new FocusEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_FocusEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_FocusEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<FocusHandler>}
  * @public
  */
 static m_getType__() {
  FocusEvent.$clinit();
  return FocusEvent.f_TYPE__org_gwtproject_event_dom_client_FocusEvent_;
 }
 /**
  * @override
  * @return {Type<FocusHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return FocusEvent.f_TYPE__org_gwtproject_event_dom_client_FocusEvent_;
 }
 /**
  * @param {FocusHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_FocusHandler(handler) {
  handler.m_onFocus__org_gwtproject_event_dom_client_FocusEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_FocusHandler(/**@type {FocusHandler} */ ($Casts.$to(arg0, FocusHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  FocusEvent.$clinit = () =>{};
  FocusEvent.$loadModules();
  DomEvent.$clinit();
  FocusEvent.f_TYPE__org_gwtproject_event_dom_client_FocusEvent_ = /**@type {!Type<FocusHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, FocusEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FocusEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  FocusHandler = goog.module.get('org.gwtproject.event.dom.client.FocusHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FocusEvent, 'org.gwtproject.event.dom.client.FocusEvent');

/** @public {Type<FocusHandler>} */
FocusEvent.f_TYPE__org_gwtproject_event_dom_client_FocusEvent_;

exports = FocusEvent; 
//# sourceMappingURL=FocusEvent.js.map