goog.module('elemental2.dom.Cache.MatchAllRequestUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MatchAllRequestUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  MatchAllRequestUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {Request}
  * @public
  */
 static m_asRequest__$devirt__elemental2_dom_Cache_MatchAllRequestUnionType($thisArg) {
  MatchAllRequestUnionType_$Overlay.$clinit();
  return /**@type {Request} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_Cache_MatchAllRequestUnionType($thisArg) {
  MatchAllRequestUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isRequest__$devirt__elemental2_dom_Cache_MatchAllRequestUnionType($thisArg) {
  MatchAllRequestUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_Cache_MatchAllRequestUnionType($thisArg) {
  MatchAllRequestUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  MatchAllRequestUnionType_$Overlay.$clinit = () =>{};
  MatchAllRequestUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Request.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = MatchAllRequestUnionType_$Overlay; 
//# sourceMappingURL=Cache$MatchAllRequestUnionType$$Overlay.js.map