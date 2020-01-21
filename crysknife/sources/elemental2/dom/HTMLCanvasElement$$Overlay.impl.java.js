goog.module('elemental2.dom.HTMLCanvasElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLCanvasElement_$Overlay {
 /**
  * @param {!HTMLCanvasElement} $thisArg
  * @param {?string} contextId
  * @param {*} args
  * @return {Object}
  * @public
  */
 static m_getContext__$devirt__elemental2_dom_HTMLCanvasElement__java_lang_String__java_lang_Object($thisArg, contextId, args) {
  HTMLCanvasElement_$Overlay.$clinit();
  return $thisArg.getContext(contextId, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(args)));
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLCanvasElement_$Overlay.$clinit = () =>{};
  HTMLCanvasElement_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLCanvasElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLCanvasElement_$Overlay, 'HTMLCanvasElement');

exports = HTMLCanvasElement_$Overlay; 
//# sourceMappingURL=HTMLCanvasElement$$Overlay.js.map