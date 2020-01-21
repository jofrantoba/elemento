goog.module('elemental2.dom.ScrollToOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ScrollToOptions_$Overlay {
 /**
  * @return {ScrollToOptions}
  * @public
  */
 static m_create__() {
  ScrollToOptions_$Overlay.$clinit();
  return /**@type {ScrollToOptions} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @public
  */
 static $clinit() {
  ScrollToOptions_$Overlay.$clinit = () =>{};
  ScrollToOptions_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ScrollToOptions_$Overlay; 
//# sourceMappingURL=ScrollToOptions$$Overlay.js.map