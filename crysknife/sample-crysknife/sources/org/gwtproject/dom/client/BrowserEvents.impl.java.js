goog.module('org.gwtproject.dom.client.BrowserEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class BrowserEvents extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BrowserEvents}
  * @public
  */
 static $create__() {
  let $instance = new BrowserEvents();
  $instance.$ctor__org_gwtproject_dom_client_BrowserEvents__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_client_BrowserEvents__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  BrowserEvents.$clinit = () =>{};
  BrowserEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BrowserEvents;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BrowserEvents, 'org.gwtproject.dom.client.BrowserEvents');

/** @public {?string} @const */
BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents = "blur";
/** @public {?string} @const */
BrowserEvents.f_CANPLAYTHROUGH__org_gwtproject_dom_client_BrowserEvents = "canplaythrough";
/** @public {?string} @const */
BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents = "change";
/** @public {?string} @const */
BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents = "click";
/** @public {?string} @const */
BrowserEvents.f_CONTEXTMENU__org_gwtproject_dom_client_BrowserEvents = "contextmenu";
/** @public {?string} @const */
BrowserEvents.f_DBLCLICK__org_gwtproject_dom_client_BrowserEvents = "dblclick";
/** @public {?string} @const */
BrowserEvents.f_DRAG__org_gwtproject_dom_client_BrowserEvents = "drag";
/** @public {?string} @const */
BrowserEvents.f_DRAGEND__org_gwtproject_dom_client_BrowserEvents = "dragend";
/** @public {?string} @const */
BrowserEvents.f_DRAGENTER__org_gwtproject_dom_client_BrowserEvents = "dragenter";
/** @public {?string} @const */
BrowserEvents.f_DRAGLEAVE__org_gwtproject_dom_client_BrowserEvents = "dragleave";
/** @public {?string} @const */
BrowserEvents.f_DRAGOVER__org_gwtproject_dom_client_BrowserEvents = "dragover";
/** @public {?string} @const */
BrowserEvents.f_DRAGSTART__org_gwtproject_dom_client_BrowserEvents = "dragstart";
/** @public {?string} @const */
BrowserEvents.f_DROP__org_gwtproject_dom_client_BrowserEvents = "drop";
/** @public {?string} @const */
BrowserEvents.f_ENDED__org_gwtproject_dom_client_BrowserEvents = "ended";
/** @public {?string} @const */
BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents = "error";
/** @public {?string} @const */
BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents = "focus";
/** @public {?string} @const */
BrowserEvents.f_FOCUSIN__org_gwtproject_dom_client_BrowserEvents = "focusin";
/** @public {?string} @const */
BrowserEvents.f_FOCUSOUT__org_gwtproject_dom_client_BrowserEvents = "focusout";
/** @public {?string} @const */
BrowserEvents.f_GESTURECHANGE__org_gwtproject_dom_client_BrowserEvents = "gesturechange";
/** @public {?string} @const */
BrowserEvents.f_GESTUREEND__org_gwtproject_dom_client_BrowserEvents = "gestureend";
/** @public {?string} @const */
BrowserEvents.f_GESTURESTART__org_gwtproject_dom_client_BrowserEvents = "gesturestart";
/** @public {?string} @const */
BrowserEvents.f_INPUT__org_gwtproject_dom_client_BrowserEvents = "input";
/** @public {?string} @const */
BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents = "keydown";
/** @public {?string} @const */
BrowserEvents.f_KEYPRESS__org_gwtproject_dom_client_BrowserEvents = "keypress";
/** @public {?string} @const */
BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents = "keyup";
/** @public {?string} @const */
BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents = "load";
/** @public {?string} @const */
BrowserEvents.f_LOADEDMETADATA__org_gwtproject_dom_client_BrowserEvents = "loadedmetadata";
/** @public {?string} @const */
BrowserEvents.f_LOSECAPTURE__org_gwtproject_dom_client_BrowserEvents = "losecapture";
/** @public {?string} @const */
BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents = "mousedown";
/** @public {?string} @const */
BrowserEvents.f_MOUSEMOVE__org_gwtproject_dom_client_BrowserEvents = "mousemove";
/** @public {?string} @const */
BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents = "mouseout";
/** @public {?string} @const */
BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents = "mouseover";
/** @public {?string} @const */
BrowserEvents.f_MOUSEUP__org_gwtproject_dom_client_BrowserEvents = "mouseup";
/** @public {?string} @const */
BrowserEvents.f_MOUSEWHEEL__org_gwtproject_dom_client_BrowserEvents = "mousewheel";
/** @public {?string} @const */
BrowserEvents.f_PROGRESS__org_gwtproject_dom_client_BrowserEvents = "progress";
/** @public {?string} @const */
BrowserEvents.f_SCROLL__org_gwtproject_dom_client_BrowserEvents = "scroll";
/** @public {?string} @const */
BrowserEvents.f_TOUCHCANCEL__org_gwtproject_dom_client_BrowserEvents = "touchcancel";
/** @public {?string} @const */
BrowserEvents.f_TOUCHEND__org_gwtproject_dom_client_BrowserEvents = "touchend";
/** @public {?string} @const */
BrowserEvents.f_TOUCHMOVE__org_gwtproject_dom_client_BrowserEvents = "touchmove";
/** @public {?string} @const */
BrowserEvents.f_TOUCHSTART__org_gwtproject_dom_client_BrowserEvents = "touchstart";

exports = BrowserEvents; 
//# sourceMappingURL=BrowserEvents.js.map