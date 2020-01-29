goog.module('elemental2.dom.EventTarget.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AddEventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.EventListenerOptions.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.AddEventListenerOptionsUnionType.$Overlay$impl');
let RemoveEventListenerOptionsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.RemoveEventListenerOptionsUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class EventTarget_$Overlay {
 /**
  * @param {!EventTarget} $thisArg
  * @param {?string} type
  * @param {EventListener} listener
  * @param {AddEventListenerOptions} options
  * @public
  */
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_AddEventListenerOptions($thisArg, type, listener, options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @param {!EventTarget} $thisArg
  * @param {?string} type
  * @param {EventListener} listener
  * @param {boolean} options
  * @public
  */
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean($thisArg, type, listener, options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @param {!EventTarget} $thisArg
  * @param {?string} type
  * @param {EventListener} listener
  * @param {EventListenerOptions} options
  * @public
  */
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_EventListenerOptions($thisArg, type, listener, options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @param {!EventTarget} $thisArg
  * @param {?string} type
  * @param {EventListener} listener
  * @param {boolean} options
  * @public
  */
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean($thisArg, type, listener, options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @public
  */
 static $clinit() {
  EventTarget_$Overlay.$clinit = () =>{};
  EventTarget_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = EventTarget_$Overlay; 
//# sourceMappingURL=EventTarget$$Overlay.js.map