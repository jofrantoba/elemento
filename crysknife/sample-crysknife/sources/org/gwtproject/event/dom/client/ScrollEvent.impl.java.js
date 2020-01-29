goog.module('org.gwtproject.event.dom.client.ScrollEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let ScrollHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ScrollHandler>}
  */
class ScrollEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ScrollEvent}
  * @public
  */
 static $create__() {
  ScrollEvent.$clinit();
  let $instance = new ScrollEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ScrollEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_ScrollEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<ScrollHandler>}
  * @public
  */
 static m_getType__() {
  ScrollEvent.$clinit();
  return ScrollEvent.f_TYPE__org_gwtproject_event_dom_client_ScrollEvent_;
 }
 /**
  * @override
  * @return {Type<ScrollHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return ScrollEvent.f_TYPE__org_gwtproject_event_dom_client_ScrollEvent_;
 }
 /**
  * @param {ScrollHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_ScrollHandler(handler) {
  handler.m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ScrollHandler(/**@type {ScrollHandler} */ ($Casts.$to(arg0, ScrollHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  ScrollEvent.$clinit = () =>{};
  ScrollEvent.$loadModules();
  DomEvent.$clinit();
  ScrollEvent.f_TYPE__org_gwtproject_event_dom_client_ScrollEvent_ = /**@type {!Type<ScrollHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_SCROLL__org_gwtproject_dom_client_BrowserEvents, ScrollEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ScrollEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  ScrollHandler = goog.module.get('org.gwtproject.event.dom.client.ScrollHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ScrollEvent, 'org.gwtproject.event.dom.client.ScrollEvent');

/** @public {Type<ScrollHandler>} */
ScrollEvent.f_TYPE__org_gwtproject_event_dom_client_ScrollEvent_;

exports = ScrollEvent; 
//# sourceMappingURL=ScrollEvent.js.map