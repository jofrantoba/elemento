goog.module('elemental2.dom.FetchEvent.RespondWithRUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let IThenable_$Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RespondWithRUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  RespondWithRUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {IThenable<Response>}
  * @public
  */
 static m_asIThenable__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType($thisArg) {
  RespondWithRUnionType_$Overlay.$clinit();
  return /**@type {IThenable<Response>} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {Response}
  * @public
  */
 static m_asResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType($thisArg) {
  RespondWithRUnionType_$Overlay.$clinit();
  return /**@type {Response} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType($thisArg) {
  RespondWithRUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  RespondWithRUnionType_$Overlay.$clinit = () =>{};
  RespondWithRUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Response.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = RespondWithRUnionType_$Overlay; 
//# sourceMappingURL=FetchEvent$RespondWithRUnionType$$Overlay.js.map