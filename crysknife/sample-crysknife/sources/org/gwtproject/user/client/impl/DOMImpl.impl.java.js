goog.module('org.gwtproject.user.client.impl.DOMImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let EventListener = goog.forwardDeclare('org.gwtproject.user.client.EventListener$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
  */
class DOMImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_impl_DOMImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {EventListener} */
 static m_getEventListener__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOMImpl.$clinit();
  let _this = Js.m_asPropertyMap__java_lang_Object(elem);
  if ($Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "__listener")) {
   let maybeListener = /**@type {EventListener}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "__listener")));
   return DOMImpl.m_isMyListener__java_lang_Object(maybeListener) ? maybeListener : null;
  }
  return null;
 }
 
 static m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(/** Object */ elem, /** EventListener */ listener) {
  DOMImpl.$clinit();
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(elem), "__listener", listener);
 }
 /** @return {boolean} */
 static m_isMyListener__java_lang_Object(/** * */ object) {
  return EventListener.$isInstance(object);
 }
 
 m_eventCancelBubble__org_gwtproject_user_client_Event__boolean(/** Event */ event, /** boolean */ cancel) {
  if (cancel == false) {
   NativeEvent_$Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  }
 }
 /** @abstract @return {Object} */
 m_eventGetFromElement__org_gwtproject_user_client_Event(/** Event */ evt) {}
 /** @return {boolean} */
 m_eventGetRepeat__org_gwtproject_user_client_Event(/** Event */ evt) {
  return $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(evt), "repeat");
 }
 /** @abstract @return {Object} */
 m_eventGetToElement__org_gwtproject_user_client_Event(/** Event */ evt) {}
 /** @return {number} */
 m_eventGetTypeInt__org_gwtproject_user_client_Event(/** Event */ evt) {
  return this.m_eventGetTypeInt__java_lang_String(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt));
 }
 /** @return {number} */
 m_eventGetTypeInt__java_lang_String(/** ?string */ eventType) {
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object(eventType)) {
   case "blur": 
    return 4096;
   case "change": 
    return 1024;
   case "click": 
    return 1;
   case "dblclick": 
    return 2;
   case "focus": 
    return 2048;
   case "keydown": 
    return 128;
   case "keypress": 
    return 256;
   case "keyup": 
    return 512;
   case "load": 
    return 32768;
   case "losecapture": 
    return 8192;
   case "mousedown": 
    return 4;
   case "mousemove": 
    return 64;
   case "mouseout": 
    return 32;
   case "mouseover": 
    return 16;
   case "mouseup": 
    return 8;
   case "scroll": 
    return 16384;
   case "error": 
    return 65536;
   case "mousewheel": 
    return 131072;
   case "DOMMouseScroll": 
    return 131072;
   case "contextmenu": 
    return 262144;
   case "paste": 
    return 524288;
   case "touchstart": 
    return 1048576;
   case "touchmove": 
    return 2097152;
   case "touchend": 
    return 4194304;
   case "touchcancel": 
    return 8388608;
   case "gesturestart": 
    return 16777216;
   case "gesturechange": 
    return 33554432;
   case "gestureend": 
    return 67108864;
   default: 
    return -1;
  }
 }
 
 m_eventSetKeyCode__org_gwtproject_user_client_Event__char(/** Event */ evt, /** number */ key) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(evt), "keyCode", key);
 }
 /** @abstract @return {Object} */
 m_getChild__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ index) {}
 /** @abstract @return {number} */
 m_getChildCount__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract @return {number} */
 m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child) {}
 /** @return {number} */
 m_getEventsSunk__org_gwtproject_dom_client_Element(/** Object */ elem) {
  if ($Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elem), "__eventBits")) {
   return Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elem), "__eventBits"))).m_intValue__();
  }
  return 0;
 }
 /** @abstract */
 m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(/** Object */ parent, /** Object */ child, /** number */ index) {}
 
 m_maybeInitializeEventSystem__() {
  if (!DOMImpl.$f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl) {
   this.m_initEventSystem__();
   DOMImpl.$f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl = true;
  }
 }
 /** @abstract */
 m_releaseCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract */
 m_setCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract */
 m_sinkBitlessEvent__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ eventTypeName) {}
 /** @abstract */
 m_sinkEvents__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ eventBits) {}
 /** @abstract */
 m_initEventSystem__() {}
 /** @return {boolean} */
 static get f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl() {
  return (DOMImpl.$clinit(), DOMImpl.$f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl);
 }
 
 static set f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl(/** boolean */ value) {
  (DOMImpl.$clinit(), DOMImpl.$f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl = value);
 }
 
 static $clinit() {
  DOMImpl.$clinit = () =>{};
  DOMImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMImpl;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  EventListener = goog.module.get('org.gwtproject.user.client.EventListener$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(DOMImpl, 'org.gwtproject.user.client.impl.DOMImpl');

/**@private {boolean}*/
DOMImpl.$f_eventSystemIsInitialized__org_gwtproject_user_client_impl_DOMImpl = false;

exports = DOMImpl; 
//# sourceMappingURL=DOMImpl.js.map