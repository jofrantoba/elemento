goog.module('org.gwtproject.user.client.Event$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let HandlerManager = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let NativePreviewHandler = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewHandler$impl');
let EventListener = goog.forwardDeclare('org.gwtproject.user.client.EventListener$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Event extends Object {
 /**
  * @public
  */
 constructor() {
  Event.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_Event__();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_Event__() {}
 /**
  * @param {NativePreviewHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addNativePreviewHandler__org_gwtproject_user_client_Event_NativePreviewHandler(handler) {
  Event.$clinit();
  $Asserts.$assertWithMessage(!$Equality.$same(handler, null), "Cannot add a null handler");
  DOM.m_maybeInitializeEventSystem__();
  NativePreviewEvent.m_getType__();
  if ($Equality.$same(Event.$f_handlers__org_gwtproject_user_client_Event, null)) {
   Event.$f_handlers__org_gwtproject_user_client_Event = HandlerManager.$create__java_lang_Object__boolean(null, true);
   NativePreviewEvent.f_singleton__org_gwtproject_user_client_Event_NativePreviewEvent_ = NativePreviewEvent.$create__();
  }
  return Event.$f_handlers__org_gwtproject_user_client_Event.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(NativePreviewEvent.f_TYPE__org_gwtproject_user_client_Event_NativePreviewEvent_, handler);
 }
 /**
  * @param {Object} event
  * @return {Event}
  * @public
  */
 static m_as__org_gwtproject_dom_client_NativeEvent(event) {
  Event.$clinit();
  return /**@type {Event} */ (Js.m_uncheckedCast__java_lang_Object(event));
 }
 /**
  * @param {Object} nativeEvent
  * @return {boolean}
  * @public
  */
 static m_fireNativePreviewEvent__org_gwtproject_dom_client_NativeEvent(nativeEvent) {
  Event.$clinit();
  return NativePreviewEvent.m_fire__org_gwtproject_event_shared_HandlerManager__org_gwtproject_dom_client_NativeEvent(Event.$f_handlers__org_gwtproject_user_client_Event, nativeEvent);
 }
 /**
  * @return {Event}
  * @public
  */
 static m_getCurrentEvent__() {
  Event.$clinit();
  return DOM.m_eventGetCurrentEvent__();
 }
 /**
  * @param {Object} elem
  * @return {EventListener}
  * @public
  */
 static m_getEventListener__org_gwtproject_dom_client_Element(elem) {
  Event.$clinit();
  return DOM.m_getEventListener__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 static m_getEventsSunk__org_gwtproject_dom_client_Element(elem) {
  Event.$clinit();
  return DOM.m_getEventsSunk__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {?string} typeName
  * @return {number}
  * @public
  */
 static m_getTypeInt__java_lang_String(typeName) {
  Event.$clinit();
  return DOM.f_impl__org_gwtproject_user_client_DOM.m_eventGetTypeInt__java_lang_String(typeName);
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_releaseCapture__org_gwtproject_dom_client_Element(elem) {
  Event.$clinit();
  DOM.m_releaseCapture__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_setCapture__org_gwtproject_dom_client_Element(elem) {
  Event.$clinit();
  DOM.m_setCapture__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {Object} elem
  * @param {EventListener} listener
  * @public
  */
 static m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(elem, listener) {
  Event.$clinit();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(elem, listener);
 }
 /**
  * @param {Object} elem
  * @param {number} eventBits
  * @public
  */
 static m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, eventBits) {
  Event.$clinit();
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, eventBits);
 }
 /**
  * @param {boolean} cancel
  * @public
  * @deprecated
  */
 m_cancelBubble__boolean(cancel) {
  DOM.m_eventCancelBubble__org_gwtproject_user_client_Event__boolean(this, cancel);
 }
 /**
  * @return {Object}
  * @public
  * @deprecated
  */
 m_getCurrentTarget__() {
  return /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /**
  * @return {Object}
  * @public
  * @deprecated
  */
 m_getFromElement__() {
  return DOM.m_eventGetFromElement__org_gwtproject_user_client_Event(this);
 }
 /**
  * @return {Object}
  * @public
  * @deprecated
  */
 m_getRelatedTarget__() {
  return /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /**
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_getRepeat__() {
  return DOM.m_eventGetRepeat__org_gwtproject_user_client_Event(this);
 }
 /**
  * @return {Object}
  * @public
  * @deprecated
  */
 m_getTarget__() {
  return /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /**
  * @return {Object}
  * @public
  * @deprecated
  */
 m_getToElement__() {
  return DOM.m_eventGetToElement__org_gwtproject_user_client_Event(this);
 }
 /**
  * @return {HandlerManager}
  * @public
  */
 static get f_handlers__org_gwtproject_user_client_Event() {
  return (Event.$clinit(), Event.$f_handlers__org_gwtproject_user_client_Event);
 }
 /**
  * @param {HandlerManager} value
  * @public
  */
 static set f_handlers__org_gwtproject_user_client_Event(value) {
  (Event.$clinit(), Event.$f_handlers__org_gwtproject_user_client_Event = value);
 }
 /**
  * @public
  */
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Event;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  HandlerManager = goog.module.get('org.gwtproject.event.shared.HandlerManager$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  NativePreviewEvent = goog.module.get('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Event, 'org.gwtproject.user.client.Event');

/** @public {number} @const */
Event.f_ONBLUR__org_gwtproject_user_client_Event = 4096;
/** @public {number} @const */
Event.f_ONCHANGE__org_gwtproject_user_client_Event = 1024;
/** @public {number} @const */
Event.f_ONCLICK__org_gwtproject_user_client_Event = 1;
/** @public {number} @const */
Event.f_ONDBLCLICK__org_gwtproject_user_client_Event = 2;
/** @public {number} @const */
Event.f_ONERROR__org_gwtproject_user_client_Event = 65536;
/** @public {number} @const */
Event.f_ONFOCUS__org_gwtproject_user_client_Event = 2048;
/** @public {number} @const */
Event.f_ONGESTURECHANGE__org_gwtproject_user_client_Event = 33554432;
/** @public {number} @const */
Event.f_ONGESTUREEND__org_gwtproject_user_client_Event = 67108864;
/** @public {number} @const */
Event.f_ONGESTURESTART__org_gwtproject_user_client_Event = 16777216;
/** @public {number} @const */
Event.f_ONKEYDOWN__org_gwtproject_user_client_Event = 128;
/** @public {number} @const */
Event.f_ONKEYPRESS__org_gwtproject_user_client_Event = 256;
/** @public {number} @const */
Event.f_ONKEYUP__org_gwtproject_user_client_Event = 512;
/** @public {number} @const */
Event.f_ONLOAD__org_gwtproject_user_client_Event = 32768;
/** @public {number} @const */
Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event = 8192;
/** @public {number} @const */
Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event = 4;
/** @public {number} @const */
Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event = 64;
/** @public {number} @const */
Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event = 32;
/** @public {number} @const */
Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event = 16;
/** @public {number} @const */
Event.f_ONMOUSEUP__org_gwtproject_user_client_Event = 8;
/** @public {number} @const */
Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event = 131072;
/** @public {number} @const */
Event.f_ONPASTE__org_gwtproject_user_client_Event = 524288;
/** @public {number} @const */
Event.f_ONSCROLL__org_gwtproject_user_client_Event = 16384;
/** @public {number} @const */
Event.f_ONTOUCHCANCEL__org_gwtproject_user_client_Event = 8388608;
/** @public {number} @const */
Event.f_ONTOUCHEND__org_gwtproject_user_client_Event = 4194304;
/** @public {number} @const */
Event.f_ONTOUCHMOVE__org_gwtproject_user_client_Event = 2097152;
/** @public {number} @const */
Event.f_ONTOUCHSTART__org_gwtproject_user_client_Event = 1048576;
/** @public {number} @const */
Event.f_ONCONTEXTMENU__org_gwtproject_user_client_Event = 262144;
/** @public {number} @const */
Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event = 6144;
/** @public {number} @const */
Event.f_KEYEVENTS__org_gwtproject_user_client_Event = 896;
/** @public {number} @const */
Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event = 124;
/** @public {number} @const */
Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event = 15728640;
/** @public {number} @const */
Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event = 117440512;
/** @public {number} @const @deprecated */
Event.f_UNDEFINED__org_gwtproject_user_client_Event = 0;
/** @private {HandlerManager} */
Event.$f_handlers__org_gwtproject_user_client_Event;

exports = Event; 
//# sourceMappingURL=Event.js.map