goog.module('org.gwtproject.event.dom.client.ClickEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<ClickHandler>}
  */
class ClickEvent extends MouseEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ClickEvent}
  * @public
  */
 static $create__() {
  ClickEvent.$clinit();
  let $instance = new ClickEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ClickEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ClickEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /**
  * @return {Type<ClickHandler>}
  * @public
  */
 static m_getType__() {
  ClickEvent.$clinit();
  return ClickEvent.f_TYPE__org_gwtproject_event_dom_client_ClickEvent_;
 }
 /**
  * @override
  * @return {Type<ClickHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return ClickEvent.f_TYPE__org_gwtproject_event_dom_client_ClickEvent_;
 }
 /**
  * @param {ClickHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_ClickHandler(handler) {
  handler.m_onClick__org_gwtproject_event_dom_client_ClickEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ClickHandler(/**@type {ClickHandler} */ ($Casts.$to(arg0, ClickHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  ClickEvent.$clinit = () =>{};
  ClickEvent.$loadModules();
  MouseEvent.$clinit();
  ClickEvent.f_TYPE__org_gwtproject_event_dom_client_ClickEvent_ = /**@type {!Type<ClickHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, ClickEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ClickEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  ClickHandler = goog.module.get('org.gwtproject.event.dom.client.ClickHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ClickEvent, 'org.gwtproject.event.dom.client.ClickEvent');

/** @public {Type<ClickHandler>} */
ClickEvent.f_TYPE__org_gwtproject_event_dom_client_ClickEvent_;

exports = ClickEvent; 
//# sourceMappingURL=ClickEvent.js.map