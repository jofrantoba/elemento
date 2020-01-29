goog.module('elemental2.dom.FontFaceSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let FontFace_$Overlay = goog.forwardDeclare('elemental2.dom.FontFace.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class FontFaceSet_$Overlay {
 /**
  * @param {!FontFaceSet} $thisArg
  * @param {?function(FontFace, number, FontFaceSet):*} callback
  * @param {*} selfObj
  * @public
  */
 static m_forEach__$devirt__elemental2_dom_FontFaceSet__elemental2_dom_FontFaceSet_ForEachCallbackFn__java_lang_Object($thisArg, callback, selfObj) {
  FontFaceSet_$Overlay.$clinit();
  $thisArg.forEach(callback, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(selfObj)));
 }
 /**
  * @public
  */
 static $clinit() {
  FontFaceSet_$Overlay.$clinit = () =>{};
  FontFaceSet_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = FontFaceSet_$Overlay; 
//# sourceMappingURL=FontFaceSet$$Overlay.js.map