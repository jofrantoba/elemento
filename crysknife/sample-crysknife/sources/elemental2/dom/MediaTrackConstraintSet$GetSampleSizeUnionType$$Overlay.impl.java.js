goog.module('elemental2.dom.MediaTrackConstraintSet.GetSampleSizeUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.ConstrainLongRange.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class GetSampleSizeUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  GetSampleSizeUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ConstrainLongRange} */
 static m_asConstrainLongRange__$devirt__elemental2_dom_MediaTrackConstraintSet_GetSampleSizeUnionType(/** ? */ $thisArg) {
  GetSampleSizeUnionType_$Overlay.$clinit();
  return /**@type {ConstrainLongRange}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {number} */
 static m_asInt__$devirt__elemental2_dom_MediaTrackConstraintSet_GetSampleSizeUnionType(/** ? */ $thisArg) {
  GetSampleSizeUnionType_$Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isInt__$devirt__elemental2_dom_MediaTrackConstraintSet_GetSampleSizeUnionType(/** ? */ $thisArg) {
  GetSampleSizeUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  GetSampleSizeUnionType_$Overlay.$clinit = () =>{};
  GetSampleSizeUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = GetSampleSizeUnionType_$Overlay; 
//# sourceMappingURL=MediaTrackConstraintSet$GetSampleSizeUnionType$$Overlay.js.map