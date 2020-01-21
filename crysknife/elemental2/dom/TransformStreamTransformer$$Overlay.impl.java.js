goog.module('elemental2.dom.TransformStreamTransformer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TransformStreamTransformer_$Overlay {
 /**
  * @return {TransformStreamTransformer}
  * @public
  */
 static m_create__() {
  TransformStreamTransformer_$Overlay.$clinit();
  return /**@type {TransformStreamTransformer} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @public
  */
 static $clinit() {
  TransformStreamTransformer_$Overlay.$clinit = () =>{};
  TransformStreamTransformer_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TransformStreamTransformer_$Overlay; 
//# sourceMappingURL=TransformStreamTransformer$$Overlay.js.map