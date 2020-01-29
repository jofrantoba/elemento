goog.module('org.gwtproject.event.dom.client.GestureChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<GestureChangeHandler>}
  */
class GestureChangeEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!GestureChangeEvent}
  * @public
  */
 static $create__() {
  GestureChangeEvent.$clinit();
  let $instance = new GestureChangeEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_GestureChangeEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_GestureChangeEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {Type<GestureChangeHandler>}
  * @public
  */
 static m_getType__() {
  GestureChangeEvent.$clinit();
  return GestureChangeEvent.f_TYPE__org_gwtproject_event_dom_client_GestureChangeEvent_;
 }
 /**
  * @override
  * @return {Type<GestureChangeHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return GestureChangeEvent.f_TYPE__org_gwtproject_event_dom_client_GestureChangeEvent_;
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
  * @param {GestureChangeHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_GestureChangeHandler(handler) {
  handler.m_onGestureChange__org_gwtproject_event_dom_client_GestureChangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_GestureChangeHandler(/**@type {GestureChangeHandler} */ ($Casts.$to(arg0, GestureChangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  GestureChangeEvent.$clinit = () =>{};
  GestureChangeEvent.$loadModules();
  DomEvent.$clinit();
  GestureChangeEvent.f_TYPE__org_gwtproject_event_dom_client_GestureChangeEvent_ = /**@type {!Type<GestureChangeHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_GESTURECHANGE__org_gwtproject_dom_client_BrowserEvents, GestureChangeEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof GestureChangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  GestureChangeHandler = goog.module.get('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(GestureChangeEvent, 'org.gwtproject.event.dom.client.GestureChangeEvent');

/** @public {Type<GestureChangeHandler>} */
GestureChangeEvent.f_TYPE__org_gwtproject_event_dom_client_GestureChangeEvent_;

exports = GestureChangeEvent; 
//# sourceMappingURL=GestureChangeEvent.js.map