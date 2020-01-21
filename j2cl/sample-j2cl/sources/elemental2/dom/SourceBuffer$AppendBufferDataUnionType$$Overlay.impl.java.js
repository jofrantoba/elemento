goog.module('elemental2.dom.SourceBuffer.AppendBufferDataUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AppendBufferDataUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  AppendBufferDataUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {ArrayBuffer}
  * @public
  */
 static m_asArrayBuffer__$devirt__elemental2_dom_SourceBuffer_AppendBufferDataUnionType($thisArg) {
  AppendBufferDataUnionType_$Overlay.$clinit();
  return /**@type {ArrayBuffer} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ArrayBufferView}
  * @public
  */
 static m_asArrayBufferView__$devirt__elemental2_dom_SourceBuffer_AppendBufferDataUnionType($thisArg) {
  AppendBufferDataUnionType_$Overlay.$clinit();
  return /**@type {ArrayBufferView} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isArrayBuffer__$devirt__elemental2_dom_SourceBuffer_AppendBufferDataUnionType($thisArg) {
  AppendBufferDataUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isArrayBufferView__$devirt__elemental2_dom_SourceBuffer_AppendBufferDataUnionType($thisArg) {
  AppendBufferDataUnionType_$Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  AppendBufferDataUnionType_$Overlay.$clinit = () =>{};
  AppendBufferDataUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = AppendBufferDataUnionType_$Overlay; 
//# sourceMappingURL=SourceBuffer$AppendBufferDataUnionType$$Overlay.js.map