goog.module('elemental2.dom.LongRange.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class LongRange_$Overlay {
 /**
  * @return {LongRange}
  * @public
  */
 static m_create__() {
  LongRange_$Overlay.$clinit();
  return /**@type {LongRange} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @public
  */
 static $clinit() {
  LongRange_$Overlay.$clinit = () =>{};
  LongRange_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = LongRange_$Overlay; 
//# sourceMappingURL=LongRange$$Overlay.js.map