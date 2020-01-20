goog.module('elemental2.dom.HTMLOptionsCollection.AddBeforeUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AddBeforeUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  AddBeforeUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {number}
  * @public
  */
 static m_asDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg) {
  AddBeforeUnionType_$Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLElement}
  * @public
  */
 static m_asHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg) {
  AddBeforeUnionType_$Overlay.$clinit();
  return /**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg) {
  AddBeforeUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg) {
  AddBeforeUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  AddBeforeUnionType_$Overlay.$clinit = () =>{};
  AddBeforeUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = AddBeforeUnionType_$Overlay; 
//# sourceMappingURL=HTMLOptionsCollection$AddBeforeUnionType$$Overlay.js.map