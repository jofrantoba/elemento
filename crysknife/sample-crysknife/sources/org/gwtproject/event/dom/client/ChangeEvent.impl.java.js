goog.module('org.gwtproject.event.dom.client.ChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ChangeHandler>}
  */
class ChangeEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ChangeEvent}
  * @public
  */
 static $create__() {
  ChangeEvent.$clinit();
  let $instance = new ChangeEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ChangeEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ChangeEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<ChangeHandler>}
  * @public
  */
 static m_getType__() {
  ChangeEvent.$clinit();
  return ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;
 }
 /**
  * @override
  * @return {Type<ChangeHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;
 }
 /**
  * @param {ChangeHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_ChangeHandler(handler) {
  handler.m_onChange__org_gwtproject_event_dom_client_ChangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ChangeHandler(/**@type {ChangeHandler} */ ($Casts.$to(arg0, ChangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  ChangeEvent.$clinit = () =>{};
  ChangeEvent.$loadModules();
  DomEvent.$clinit();
  ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_ = /**@type {!Type<ChangeHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, ChangeEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  ChangeHandler = goog.module.get('org.gwtproject.event.dom.client.ChangeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ChangeEvent, 'org.gwtproject.event.dom.client.ChangeEvent');

/** @public {Type<ChangeHandler>} */
ChangeEvent.f_TYPE__org_gwtproject_event_dom_client_ChangeEvent_;

exports = ChangeEvent; 
//# sourceMappingURL=ChangeEvent.js.map