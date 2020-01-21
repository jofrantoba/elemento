goog.module('elemental2.dom.Window.FrameElementUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let HTMLObjectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FrameElementUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  FrameElementUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLIFrameElement}
  * @public
  */
 static m_asHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType($thisArg) {
  FrameElementUnionType_$Overlay.$clinit();
  return /**@type {HTMLIFrameElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLObjectElement}
  * @public
  */
 static m_asHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType($thisArg) {
  FrameElementUnionType_$Overlay.$clinit();
  return /**@type {HTMLObjectElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLObjectElement_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType($thisArg) {
  FrameElementUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType($thisArg) {
  FrameElementUnionType_$Overlay.$clinit();
  return HTMLObjectElement_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  FrameElementUnionType_$Overlay.$clinit = () =>{};
  FrameElementUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
  HTMLObjectElement_$Overlay = goog.module.get('elemental2.dom.HTMLObjectElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = FrameElementUnionType_$Overlay; 
//# sourceMappingURL=Window$FrameElementUnionType$$Overlay.js.map