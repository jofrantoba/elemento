goog.module('elemental2.dom.OffscreenCanvas.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class OffscreenCanvas_$Overlay {
 /**
  * @param {!OffscreenCanvas} $thisArg
  * @param {?string} contextId
  * @param {*} options
  * @return {Object}
  * @public
  */
 static m_getContext__$devirt__elemental2_dom_OffscreenCanvas__java_lang_String__java_lang_Object($thisArg, contextId, options) {
  OffscreenCanvas_$Overlay.$clinit();
  return $thisArg.getContext(contextId, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @public
  */
 static $clinit() {
  OffscreenCanvas_$Overlay.$clinit = () =>{};
  OffscreenCanvas_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OffscreenCanvas;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(OffscreenCanvas_$Overlay, 'OffscreenCanvas');

exports = OffscreenCanvas_$Overlay; 
//# sourceMappingURL=OffscreenCanvas$$Overlay.js.map