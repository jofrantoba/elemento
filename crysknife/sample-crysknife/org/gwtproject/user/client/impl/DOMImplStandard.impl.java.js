goog.module('org.gwtproject.user.client.impl.DOMImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DOMImpl = goog.require('org.gwtproject.user.client.impl.DOMImpl$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let DOMImplStandardBase = goog.forwardDeclare('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');
let EventMap = goog.forwardDeclare('org.gwtproject.user.client.impl.EventMap$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
  */
class DOMImplStandard extends DOMImpl {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_impl_DOMImplStandard__() {
  this.$ctor__org_gwtproject_user_client_impl_DOMImpl__();
 }
 
 static m_addBitlessEventDispatchers__org_gwtproject_core_client_JavaScriptObject(/** Object */ eventMap) {
  DOMImplStandard.$clinit();
  DOMImplStandard.m_ensureInit__();
  DOMImplStandard.f_bitlessEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_.m_merge__org_gwtproject_core_client_JavaScriptObject(eventMap);
 }
 
 static m_addCaptureEventDispatchers__org_gwtproject_core_client_JavaScriptObject(/** Object */ eventMap) {
  DOMImplStandard.$clinit();
  DOMImplStandard.m_ensureInit__();
  DOMImplStandard.f_captureEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_.m_merge__org_gwtproject_core_client_JavaScriptObject(eventMap);
 }
 
 static m_ensureInit__() {
  if (DOMImpl.f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Event system already initialized"));
  }
  DOMImplStandardBase.$create__();
 }
 
 static m_dispatchEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOMImplStandard.$clinit();
  let element = DOMImplStandard.m_getFirstAncestorWithListener__org_gwtproject_user_client_Event(evt);
  if ($Equality.$same(element, null)) {
   return;
  }
  DOM.m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(evt, element.nodeType != 1 ? null : element, DOMImpl.m_getEventListener__org_gwtproject_dom_client_Element(element));
 }
 /** @return {Object} */
 static m_getFirstAncestorWithListener__org_gwtproject_user_client_Event(/** Event */ evt) {
  let curElem = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  while (!$Equality.$same(curElem, null) && $Equality.$same(DOMImpl.m_getEventListener__org_gwtproject_dom_client_Element(curElem), null)) {
   curElem = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(curElem.parentNode), Element_$Overlay));
  }
  return curElem;
 }
 
 static m_dispatchDragEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
  DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(evt);
 }
 
 static m_dispatchUnhandledEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  let element = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(element, "__gwtLastUnhandledEvent", NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt));
  DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(evt);
 }
 
 static m_dispatchCapturedEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.m_previewEvent__org_gwtproject_user_client_Event(evt);
 }
 
 static m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  let cancelled = !DOM.m_previewEvent__org_gwtproject_user_client_Event(evt);
  if (cancelled || $Equality.$same(DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_, null)) {
   return;
  }
  if (DOM.m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element(evt, DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_)) {
   NativeEvent_$Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
  }
 }
 /** @return {EventMap} */
 static m_getBitlessEventDispatchers__() {
  let eventMap = new EventMap();
  let map = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(eventMap));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "_default_", /**@type {?function(Event):void}*/ ((/** Event */ event) =>{
   DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "dragenter", /**@type {?function(Event):void}*/ ((/** Event */ event_1) =>{
   DOMImplStandard.m_dispatchDragEvent__org_gwtproject_user_client_Event(event_1);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "dragover", /**@type {?function(Event):void}*/ ((/** Event */ event_2) =>{
   DOMImplStandard.m_dispatchDragEvent__org_gwtproject_user_client_Event(event_2);
  }));
  return eventMap;
 }
 /** @return {EventMap} */
 static m_getCaptureEventDispatchers__() {
  let eventMap = new EventMap();
  let map = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(eventMap));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "click", /**@type {?function(Event):void}*/ ((/** Event */ event) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "dblclick", /**@type {?function(Event):void}*/ ((/** Event */ event_1) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_1);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mousedown", /**@type {?function(Event):void}*/ ((/** Event */ event_2) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_2);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mouseup", /**@type {?function(Event):void}*/ ((/** Event */ event_3) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_3);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mousemove", /**@type {?function(Event):void}*/ ((/** Event */ event_4) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_4);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mouseover", /**@type {?function(Event):void}*/ ((/** Event */ event_5) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_5);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mouseout", /**@type {?function(Event):void}*/ ((/** Event */ event_6) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_6);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "mousewheel", /**@type {?function(Event):void}*/ ((/** Event */ event_7) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_7);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "keydown", /**@type {?function(Event):void}*/ ((/** Event */ event_8) =>{
   DOMImplStandard.m_dispatchCapturedEvent__org_gwtproject_user_client_Event(event_8);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "keyup", /**@type {?function(Event):void}*/ ((/** Event */ event_9) =>{
   DOMImplStandard.m_dispatchCapturedEvent__org_gwtproject_user_client_Event(event_9);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "keypress", /**@type {?function(Event):void}*/ ((/** Event */ event_10) =>{
   DOMImplStandard.m_dispatchCapturedEvent__org_gwtproject_user_client_Event(event_10);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "touchstart", /**@type {?function(Event):void}*/ ((/** Event */ event_11) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_11);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "touchend", /**@type {?function(Event):void}*/ ((/** Event */ event_12) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_12);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "touchmove", /**@type {?function(Event):void}*/ ((/** Event */ event_13) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_13);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "touchcancel", /**@type {?function(Event):void}*/ ((/** Event */ event_14) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_14);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "gesturestart", /**@type {?function(Event):void}*/ ((/** Event */ event_15) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_15);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "gestureend", /**@type {?function(Event):void}*/ ((/** Event */ event_16) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_16);
  }));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "gesturechange", /**@type {?function(Event):void}*/ ((/** Event */ event_17) =>{
   DOMImplStandard.m_dispatchCapturedMouseEvent__org_gwtproject_user_client_Event(event_17);
  }));
  return eventMap;
 }
 /** @override @return {Object} */
 m_eventGetFromElement__org_gwtproject_user_client_Event(/** Event */ evt) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt), BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents)) {
   return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt), BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents)) {
   return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  }
  return null;
 }
 /** @override @return {Object} */
 m_eventGetToElement__org_gwtproject_user_client_Event(/** Event */ evt) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt), BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents)) {
   return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt), BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents)) {
   return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
  }
  return null;
 }
 /** @override @return {Object} */
 m_getChild__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ index) {
  let count = 0;
  let child = elem.firstChild;
  while (!$Equality.$same(child, null)) {
   if (child.nodeType == 1) {
    if (index == count) {
     return /**@type {Object}*/ ($Casts.$to(child, Element_$Overlay));
    }
    ++count;
   }
   child = child.nextSibling;
  }
  return null;
 }
 /** @override @return {number} */
 m_getChildCount__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let count = 0;
  let child = elem.firstChild;
  while (!$Equality.$same(child, null)) {
   if (child.nodeType == 1) {
    ++count;
   }
   child = child.nextSibling;
  }
  return count;
 }
 /** @override @return {number} */
 m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ toFind) {
  let count = 0;
  let child = parent.firstChild;
  while (!$Equality.$same(child, null)) {
   if ($Equality.$same(child, toFind)) {
    return count;
   }
   if (child.nodeType == 1) {
    ++count;
   }
   child = child.nextSibling;
  }
  return -1;
 }
 /** @override */
 m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(/** Object */ parent, /** Object */ toAdd, /** number */ index) {
  let count = 0;
  let child = parent.firstChild;
  let before = null;
  while (!$Equality.$same(child, null)) {
   if (child.nodeType == 1) {
    if (count == index) {
     before = child;
     break;
    }
    ++count;
   }
   child = child.nextSibling;
  }
  parent.insertBefore(toAdd, before);
 }
 /** @override */
 m_releaseCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.m_maybeInitializeEventSystem__();
  if ($Equality.$same(DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_, elem)) {
   DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_ = null;
  }
 }
 /** @override */
 m_setCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.m_maybeInitializeEventSystem__();
  DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_ = elem;
 }
 /** @override */
 m_sinkBitlessEvent__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ eventTypeName) {
  this.m_maybeInitializeEventSystem__();
  this.m_sinkBitlessEventImpl__org_gwtproject_dom_client_Element__java_lang_String(elem, eventTypeName);
 }
 /** @override */
 m_sinkEvents__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ bits) {
  this.m_maybeInitializeEventSystem__();
  this.m_sinkEventsImpl__org_gwtproject_dom_client_Element__int(elem, bits);
 }
 /** @override */
 m_initEventSystem__() {
  EventMap.m_foreach__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_user_client_impl_EventMap_FnVarArgs(DOMImplStandard.f_captureEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_, (/** ?string */ elm, /** * */ value) =>{
   EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(window.window, elm, /**@type {EventListener}*/ (Js.m_uncheckedCast__java_lang_Object(value)), true);
  });
 }
 
 m_sinkBitlessEventImpl__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ eventTypeName) {
  let map = Js.m_asPropertyMap__java_lang_Object(DOMImplStandard.f_bitlessEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_);
  let /** * */ dispatcher;
  if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, eventTypeName)) {
   dispatcher = JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, eventTypeName);
  } else {
   dispatcher = JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, "_default_");
  }
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(/**@type {EventTarget}*/ (Js.m_uncheckedCast__java_lang_Object(elem)), eventTypeName, /**@type {EventListener}*/ (Js.m_uncheckedCast__java_lang_Object(dispatcher)), false);
 }
 
 m_sinkEventsImpl__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ bits) {
  let map = Js.m_asPropertyMap__java_lang_Object(elem);
  let chMask = (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, "__eventBits") ? Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, "__eventBits"))).m_intValue__() : 0) ^ bits;
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "__eventBits", bits);
  if ((chMask & 1) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onclick", ((bits & 1) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event);
   }) : null);
  }
  if ((chMask & 2) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ondblclick", ((bits & 2) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_1) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_1);
   }) : null);
  }
  if ((chMask & 4) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmousedown", ((bits & 4) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_2) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_2);
   }) : null);
  }
  if ((chMask & 8) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmouseup", ((bits & 8) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_3) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_3);
   }) : null);
  }
  if ((chMask & 16) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmouseover", ((bits & 16) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_4) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_4);
   }) : null);
  }
  if ((chMask & 32) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmouseout", ((bits & 32) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_5) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_5);
   }) : null);
  }
  if ((chMask & 64) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmousemove", ((bits & 64) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_6) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_6);
   }) : null);
  }
  if ((chMask & 128) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onkeydown", ((bits & 128) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_7) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_7);
   }) : null);
  }
  if ((chMask & 256) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onkeypress", ((bits & 256) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_8) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_8);
   }) : null);
  }
  if ((chMask & 512) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onkeyup", ((bits & 512) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_9) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_9);
   }) : null);
  }
  if ((chMask & 1024) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onchange", ((bits & 1024) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_10) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_10);
   }) : null);
  }
  if ((chMask & 2048) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onfocus", ((bits & 1024) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_11) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_11);
   }) : null);
  }
  if ((chMask & 4096) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onblur", ((bits & 4096) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_12) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_12);
   }) : null);
  }
  if ((chMask & 8192) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onlosecapture", ((bits & 8192) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_13) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_13);
   }) : null);
  }
  if ((chMask & 8192) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onlosecapture", ((bits & 8192) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_14) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_14);
   }) : null);
  }
  if ((chMask & 16384) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onscroll", ((bits & 16384) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_15) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_15);
   }) : null);
  }
  if ((chMask & 32768) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onload", ((bits & 32768) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_16) =>{
    DOMImplStandard.m_dispatchUnhandledEvent__org_gwtproject_user_client_Event(event_16);
   }) : null);
  }
  if ((chMask & 65536) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onerror", ((bits & 65536) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_17) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_17);
   }) : null);
  }
  if ((chMask & 131072) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onmousewheel", ((bits & 131072) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_18) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_18);
   }) : null);
  }
  if ((chMask & 262144) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "oncontextmenu", ((bits & 262144) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_19) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_19);
   }) : null);
  }
  if ((chMask & 524288) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "onpaste", ((bits & 524288) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_20) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_20);
   }) : null);
  }
  if ((chMask & 1048576) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ontouchstart", ((bits & 1048576) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_21) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_21);
   }) : null);
  }
  if ((chMask & 2097152) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ontouchmove", ((bits & 2097152) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_22) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_22);
   }) : null);
  }
  if ((chMask & 4194304) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ontouchend", ((bits & 4194304) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_23) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_23);
   }) : null);
  }
  if ((chMask & 8388608) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ontouchcancel", ((bits & 8388608) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_24) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_24);
   }) : null);
  }
  if ((chMask & 16777216) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ongesturestart", ((bits & 16777216) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_25) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_25);
   }) : null);
  }
  if ((chMask & 33554432) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ongesturechange", ((bits & 33554432) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_26) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_26);
   }) : null);
  }
  if ((chMask & 67108864) != 0) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, "ongestureend", ((bits & 67108864) != 0) ? /**@type {?function(Event):void}*/ ((/** Event */ event_27) =>{
    DOMImplStandard.m_dispatchEvent__org_gwtproject_user_client_Event(event_27);
   }) : null);
  }
 }
 
 static $clinit() {
  DOMImplStandard.$clinit = () =>{};
  DOMImplStandard.$loadModules();
  DOMImpl.$clinit();
  DOMImplStandard.f_bitlessEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_ = DOMImplStandard.m_getBitlessEventDispatchers__();
  DOMImplStandard.f_captureEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_ = DOMImplStandard.m_getCaptureEventDispatchers__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMImplStandard;
 }
 
 static $loadModules() {
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  DOMImplStandardBase = goog.module.get('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');
  EventMap = goog.module.get('org.gwtproject.user.client.impl.EventMap$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(DOMImplStandard, 'org.gwtproject.user.client.impl.DOMImplStandard');

/**@type {Object}*/
DOMImplStandard.f_captureElem__org_gwtproject_user_client_impl_DOMImplStandard_;
/**@type {EventMap}*/
DOMImplStandard.f_bitlessEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_;
/**@type {EventMap}*/
DOMImplStandard.f_captureEventDispatchers__org_gwtproject_user_client_impl_DOMImplStandard_;

exports = DOMImplStandard; 
//# sourceMappingURL=DOMImplStandard.js.map