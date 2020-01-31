goog.module('elemental2.dom.Event.ComposedPathArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let ShadowRoot_$Overlay = goog.forwardDeclare('elemental2.dom.ShadowRoot.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ComposedPathArrayUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Document} */
 static m_asDocument__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return /**@type {Document}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {Element} */
 static m_asElement__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return /**@type {Element}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Element_$Overlay));
 }
 /** @return {ShadowRoot} */
 static m_asShadowRoot__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return /**@type {ShadowRoot}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ShadowRoot_$Overlay));
 }
 /** @return {Window} */
 static m_asWindow__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return /**@type {Window}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Window_$Overlay));
 }
 /** @return {boolean} */
 static m_isDocument__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isElement__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return Element_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isShadowRoot__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return ShadowRoot_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isWindow__$devirt__elemental2_dom_Event_ComposedPathArrayUnionType(/** ? */ $thisArg) {
  ComposedPathArrayUnionType_$Overlay.$clinit();
  return Window_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ComposedPathArrayUnionType_$Overlay.$clinit = () =>{};
  ComposedPathArrayUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  ShadowRoot_$Overlay = goog.module.get('elemental2.dom.ShadowRoot.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ComposedPathArrayUnionType_$Overlay; 
//# sourceMappingURL=Event$ComposedPathArrayUnionType$$Overlay.js.map