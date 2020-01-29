goog.module('org.gwtproject.event.dom.client.GestureEndEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<GestureEndHandler>}
  */
class GestureEndEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!GestureEndEvent}
  * @public
  */
 static $create__() {
  GestureEndEvent.$clinit();
  let $instance = new GestureEndEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_GestureEndEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_GestureEndEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<GestureEndHandler>}
  * @public
  */
 static m_getType__() {
  GestureEndEvent.$clinit();
  return GestureEndEvent.f_TYPE__org_gwtproject_event_dom_client_GestureEndEvent_;
 }
 /**
  * @override
  * @return {Type<GestureEndHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return GestureEndEvent.f_TYPE__org_gwtproject_event_dom_client_GestureEndEvent_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getRotation__() {
  return $Overlay.m_getRotation__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @return {number}
  * @public
  */
 m_getScale__() {
  return $Overlay.m_getScale__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @param {GestureEndHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_GestureEndHandler(handler) {
  handler.m_onGestureEnd__org_gwtproject_event_dom_client_GestureEndEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_GestureEndHandler(/**@type {GestureEndHandler} */ ($Casts.$to(arg0, GestureEndHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  GestureEndEvent.$clinit = () =>{};
  GestureEndEvent.$loadModules();
  DomEvent.$clinit();
  GestureEndEvent.f_TYPE__org_gwtproject_event_dom_client_GestureEndEvent_ = /**@type {!Type<GestureEndHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_GESTUREEND__org_gwtproject_dom_client_BrowserEvents, GestureEndEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof GestureEndEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  GestureEndHandler = goog.module.get('org.gwtproject.event.dom.client.GestureEndHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(GestureEndEvent, 'org.gwtproject.event.dom.client.GestureEndEvent');

/** @public {Type<GestureEndHandler>} */
GestureEndEvent.f_TYPE__org_gwtproject_event_dom_client_GestureEndEvent_;

exports = GestureEndEvent; 
//# sourceMappingURL=GestureEndEvent.js.map