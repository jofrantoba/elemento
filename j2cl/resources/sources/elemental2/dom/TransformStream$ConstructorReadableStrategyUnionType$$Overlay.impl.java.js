goog.module('elemental2.dom.TransformStream.ConstructorReadableStrategyUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
let CountQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
let TransformStreamWritableStrategyType_$Overlay = goog.forwardDeclare('elemental2.dom.TransformStream.TransformStreamWritableStrategyType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorReadableStrategyUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {ByteLengthQueuingStrategy}
  * @public
  */
 static m_asByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorReadableStrategyUnionType($thisArg) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return /**@type {ByteLengthQueuingStrategy} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {CountQueuingStrategy}
  * @public
  */
 static m_asCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorReadableStrategyUnionType($thisArg) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return /**@type {CountQueuingStrategy} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CountQueuingStrategy_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {?}
  * @public
  */
 static m_asTransformStreamWritableStrategyType__$devirt__elemental2_dom_TransformStream_ConstructorReadableStrategyUnionType($thisArg) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorReadableStrategyUnionType($thisArg) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorReadableStrategyUnionType($thisArg) {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit();
  return CountQueuingStrategy_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  ConstructorReadableStrategyUnionType_$Overlay.$clinit = () =>{};
  ConstructorReadableStrategyUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
  CountQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorReadableStrategyUnionType_$Overlay; 
//# sourceMappingURL=TransformStream$ConstructorReadableStrategyUnionType$$Overlay.js.map