goog.module('elemental2.dom.HTMLDialogElement.ShowAnchorUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ShowAnchorUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  ShowAnchorUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {Element}
  * @public
  */
 static m_asElement__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType($thisArg) {
  ShowAnchorUnionType_$Overlay.$clinit();
  return /**@type {Element} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {MouseEvent}
  * @public
  */
 static m_asMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType($thisArg) {
  ShowAnchorUnionType_$Overlay.$clinit();
  return /**@type {MouseEvent} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MouseEvent_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isElement__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType($thisArg) {
  ShowAnchorUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType($thisArg) {
  ShowAnchorUnionType_$Overlay.$clinit();
  return MouseEvent_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  ShowAnchorUnionType_$Overlay.$clinit = () =>{};
  ShowAnchorUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ShowAnchorUnionType_$Overlay; 
//# sourceMappingURL=HTMLDialogElement$ShowAnchorUnionType$$Overlay.js.map