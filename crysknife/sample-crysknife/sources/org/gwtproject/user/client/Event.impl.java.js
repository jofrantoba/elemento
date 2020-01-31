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
 
 constructor() {
  Event.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_Event__();
 }
 
 $ctor__org_gwtproject_user_client_Event__() {}
 /** @return {HandlerRegistration} */
 static m_addNativePreviewHandler__org_gwtproject_user_client_Event_NativePreviewHandler(/** NativePreviewHandler */ handler) {
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
 /** @return {Event} */
 static m_as__org_gwtproject_dom_client_NativeEvent(/** Object */ event) {
  Event.$clinit();
  return /**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object(event));
 }
 /** @return {boolean} */
 static m_fireNativePreviewEvent__org_gwtproject_dom_client_NativeEvent(/** Object */ nativeEvent) {
  Event.$clinit();
  return NativePreviewEvent.m_fire__org_gwtproject_event_shared_HandlerManager__org_gwtproject_dom_client_NativeEvent(Event.$f_handlers__org_gwtproject_user_client_Event, nativeEvent);
 }
 /** @return {Event} */
 static m_getCurrentEvent__() {
  Event.$clinit();
  return DOM.m_eventGetCurrentEvent__();
 }
 /** @return {EventListener} */
 static m_getEventListener__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Event.$clinit();
  return DOM.m_getEventListener__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} */
 static m_getEventsSunk__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Event.$clinit();
  return DOM.m_getEventsSunk__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} */
 static m_getTypeInt__java_lang_String(/** ?string */ typeName) {
  Event.$clinit();
  return DOM.f_impl__org_gwtproject_user_client_DOM.m_eventGetTypeInt__java_lang_String(typeName);
 }
 
 static m_releaseCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Event.$clinit();
  DOM.m_releaseCapture__org_gwtproject_dom_client_Element(elem);
 }
 
 static m_setCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Event.$clinit();
  DOM.m_setCapture__org_gwtproject_dom_client_Element(elem);
 }
 
 static m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(/** Object */ elem, /** EventListener */ listener) {
  Event.$clinit();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(elem, listener);
 }
 
 static m_sinkEvents__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ eventBits) {
  Event.$clinit();
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, eventBits);
 }
 /** @deprecated */
 m_cancelBubble__boolean(/** boolean */ cancel) {
  DOM.m_eventCancelBubble__org_gwtproject_user_client_Event__boolean(this, cancel);
 }
 /** @return {Object} @deprecated */
 m_getCurrentTarget__() {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /** @return {Object} @deprecated */
 m_getFromElement__() {
  return DOM.m_eventGetFromElement__org_gwtproject_user_client_Event(this);
 }
 /** @return {Object} @deprecated */
 m_getRelatedTarget__() {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /** @return {boolean} @deprecated */
 m_getRepeat__() {
  return DOM.m_eventGetRepeat__org_gwtproject_user_client_Event(this);
 }
 /** @return {Object} @deprecated */
 m_getTarget__() {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this)), Element_$Overlay));
 }
 /** @return {Object} @deprecated */
 m_getToElement__() {
  return DOM.m_eventGetToElement__org_gwtproject_user_client_Event(this);
 }
 /** @return {HandlerManager} */
 static get f_handlers__org_gwtproject_user_client_Event() {
  return (Event.$clinit(), Event.$f_handlers__org_gwtproject_user_client_Event);
 }
 
 static set f_handlers__org_gwtproject_user_client_Event(/** HandlerManager */ value) {
  (Event.$clinit(), Event.$f_handlers__org_gwtproject_user_client_Event = value);
 }
 
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
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

/**@const {number}*/
Event.f_ONBLUR__org_gwtproject_user_client_Event = 4096;
/**@const {number}*/
Event.f_ONCHANGE__org_gwtproject_user_client_Event = 1024;
/**@const {number}*/
Event.f_ONCLICK__org_gwtproject_user_client_Event = 1;
/**@const {number}*/
Event.f_ONDBLCLICK__org_gwtproject_user_client_Event = 2;
/**@const {number}*/
Event.f_ONERROR__org_gwtproject_user_client_Event = 65536;
/**@const {number}*/
Event.f_ONFOCUS__org_gwtproject_user_client_Event = 2048;
/**@const {number}*/
Event.f_ONGESTURECHANGE__org_gwtproject_user_client_Event = 33554432;
/**@const {number}*/
Event.f_ONGESTUREEND__org_gwtproject_user_client_Event = 67108864;
/**@const {number}*/
Event.f_ONGESTURESTART__org_gwtproject_user_client_Event = 16777216;
/**@const {number}*/
Event.f_ONKEYDOWN__org_gwtproject_user_client_Event = 128;
/**@const {number}*/
Event.f_ONKEYPRESS__org_gwtproject_user_client_Event = 256;
/**@const {number}*/
Event.f_ONKEYUP__org_gwtproject_user_client_Event = 512;
/**@const {number}*/
Event.f_ONLOAD__org_gwtproject_user_client_Event = 32768;
/**@const {number}*/
Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event = 8192;
/**@const {number}*/
Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event = 4;
/**@const {number}*/
Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event = 64;
/**@const {number}*/
Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event = 32;
/**@const {number}*/
Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event = 16;
/**@const {number}*/
Event.f_ONMOUSEUP__org_gwtproject_user_client_Event = 8;
/**@const {number}*/
Event.f_ONMOUSEWHEEL__org_gwtproject_user_client_Event = 131072;
/**@const {number}*/
Event.f_ONPASTE__org_gwtproject_user_client_Event = 524288;
/**@const {number}*/
Event.f_ONSCROLL__org_gwtproject_user_client_Event = 16384;
/**@const {number}*/
Event.f_ONTOUCHCANCEL__org_gwtproject_user_client_Event = 8388608;
/**@const {number}*/
Event.f_ONTOUCHEND__org_gwtproject_user_client_Event = 4194304;
/**@const {number}*/
Event.f_ONTOUCHMOVE__org_gwtproject_user_client_Event = 2097152;
/**@const {number}*/
Event.f_ONTOUCHSTART__org_gwtproject_user_client_Event = 1048576;
/**@const {number}*/
Event.f_ONCONTEXTMENU__org_gwtproject_user_client_Event = 262144;
/**@const {number}*/
Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event = 6144;
/**@const {number}*/
Event.f_KEYEVENTS__org_gwtproject_user_client_Event = 896;
/**@const {number}*/
Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event = 124;
/**@const {number}*/
Event.f_TOUCHEVENTS__org_gwtproject_user_client_Event = 15728640;
/**@const {number}*/
Event.f_GESTUREEVENTS__org_gwtproject_user_client_Event = 117440512;
/**@const {number} @deprecated*/
Event.f_UNDEFINED__org_gwtproject_user_client_Event = 0;
/**@private {HandlerManager}*/
Event.$f_handlers__org_gwtproject_user_client_Event;

exports = Event; 
//# sourceMappingURL=Event.js.map