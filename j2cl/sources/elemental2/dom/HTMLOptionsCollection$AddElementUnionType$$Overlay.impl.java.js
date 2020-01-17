goog.module('elemental2.dom.HTMLOptionsCollection.AddElementUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AddElementUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  AddElementUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLOptGroupElement}
  * @public
  */
 static m_asHTMLOptGroupElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType($thisArg) {
  AddElementUnionType_$Overlay.$clinit();
  return /**@type {HTMLOptGroupElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLOptionElement}
  * @public
  */
 static m_asHTMLOptionElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType($thisArg) {
  AddElementUnionType_$Overlay.$clinit();
  return /**@type {HTMLOptionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLOptionElement_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLOptGroupElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType($thisArg) {
  AddElementUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLOptionElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddElementUnionType($thisArg) {
  AddElementUnionType_$Overlay.$clinit();
  return HTMLOptionElement_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  AddElementUnionType_$Overlay.$clinit = () =>{};
  AddElementUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = AddElementUnionType_$Overlay; 
//# sourceMappingURL=HTMLOptionsCollection$AddElementUnionType$$Overlay.js.map