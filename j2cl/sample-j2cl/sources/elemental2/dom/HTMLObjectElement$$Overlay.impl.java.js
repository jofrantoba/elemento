goog.module('elemental2.dom.HTMLObjectElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.TSetPropertyValueUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLObjectElement_$Overlay {
 /**
  * @param {!HTMLObjectElement} $thisArg
  * @param {number} target
  * @param {number} property
  * @param {?string} value
  * @public
  */
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__java_lang_String($thisArg, target, property, value) {
  HTMLObjectElement_$Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!HTMLObjectElement} $thisArg
  * @param {number} target
  * @param {number} property
  * @param {number} value
  * @public
  */
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__double($thisArg, target, property, value) {
  HTMLObjectElement_$Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLObjectElement_$Overlay.$clinit = () =>{};
  HTMLObjectElement_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLObjectElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLObjectElement_$Overlay, 'HTMLObjectElement');

exports = HTMLObjectElement_$Overlay; 
//# sourceMappingURL=HTMLObjectElement$$Overlay.js.map