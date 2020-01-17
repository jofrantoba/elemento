goog.module('elemental2.dom.HTMLDocument.LinksHTMLCollectionTypeParameterUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAreaElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LinksHTMLCollectionTypeParameterUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLAnchorElement}
  * @public
  */
 static m_asHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType($thisArg) {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {HTMLAnchorElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLAreaElement}
  * @public
  */
 static m_asHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType($thisArg) {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {HTMLAreaElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLAreaElement_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType($thisArg) {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType($thisArg) {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit();
  return HTMLAreaElement_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$clinit = () =>{};
  LinksHTMLCollectionTypeParameterUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLAreaElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = LinksHTMLCollectionTypeParameterUnionType_$Overlay; 
//# sourceMappingURL=HTMLDocument$LinksHTMLCollectionTypeParameterUnionType$$Overlay.js.map