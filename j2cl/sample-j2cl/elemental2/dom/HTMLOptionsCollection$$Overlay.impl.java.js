goog.module('elemental2.dom.HTMLOptionsCollection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionsCollection.AddBeforeUnionType.$Overlay$impl');
let AddElementUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionsCollection.AddElementUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLOptionsCollection_$Overlay {
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {?} element
  * @param {HTMLElement} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionsCollection_AddElementUnionType__elemental2_dom_HTMLElement($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(element, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {?} element
  * @param {number} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionsCollection_AddElementUnionType__double($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(element, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptGroupElement} element
  * @param {?} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), before);
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptGroupElement} element
  * @param {HTMLElement} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__elemental2_dom_HTMLElement($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptGroupElement} element
  * @param {number} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__double($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptGroupElement} element
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement($thisArg, element) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptionElement} element
  * @param {?} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), before);
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptionElement} element
  * @param {HTMLElement} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__elemental2_dom_HTMLElement($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptionElement} element
  * @param {number} before
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__double($thisArg, element, before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!HTMLOptionsCollection} $thisArg
  * @param {HTMLOptionElement} element
  * @public
  */
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement($thisArg, element) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(element)));
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLOptionsCollection_$Overlay.$clinit = () =>{};
  HTMLOptionsCollection_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLOptionsCollection;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLOptionsCollection_$Overlay, 'HTMLOptionsCollection');

exports = HTMLOptionsCollection_$Overlay; 
//# sourceMappingURL=HTMLOptionsCollection$$Overlay.js.map