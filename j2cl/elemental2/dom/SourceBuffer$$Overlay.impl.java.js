goog.module('elemental2.dom.SourceBuffer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.SourceBuffer.AppendBufferDataUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class SourceBuffer_$Overlay {
 /**
  * @param {!SourceBuffer} $thisArg
  * @param {ArrayBuffer} data
  * @public
  */
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBuffer($thisArg, data) {
  SourceBuffer_$Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!SourceBuffer} $thisArg
  * @param {ArrayBufferView} data
  * @public
  */
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBufferView($thisArg, data) {
  SourceBuffer_$Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @public
  */
 static $clinit() {
  SourceBuffer_$Overlay.$clinit = () =>{};
  SourceBuffer_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SourceBuffer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(SourceBuffer_$Overlay, 'SourceBuffer');

exports = SourceBuffer_$Overlay; 
//# sourceMappingURL=SourceBuffer$$Overlay.js.map