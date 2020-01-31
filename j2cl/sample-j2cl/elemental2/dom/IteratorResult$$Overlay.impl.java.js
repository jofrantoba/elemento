goog.module('elemental2.dom.IteratorResult.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class IteratorResult_$Overlay {
 /** @return {IteratorResult} */
 static m_create__() {
  IteratorResult_$Overlay.$clinit();
  return /**@type {IteratorResult}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  IteratorResult_$Overlay.$clinit = () =>{};
  IteratorResult_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = IteratorResult_$Overlay; 
//# sourceMappingURL=IteratorResult$$Overlay.js.map