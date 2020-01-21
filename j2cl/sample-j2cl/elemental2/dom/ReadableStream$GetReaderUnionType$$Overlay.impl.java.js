goog.module('elemental2.dom.ReadableStream.GetReaderUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamBYOBReader.$Overlay$impl');
let ReadableStreamDefaultReader_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamDefaultReader.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class GetReaderUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  GetReaderUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {ReadableStreamBYOBReader}
  * @public
  */
 static m_asReadableStreamBYOBReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType($thisArg) {
  GetReaderUnionType_$Overlay.$clinit();
  return /**@type {ReadableStreamBYOBReader} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {ReadableStreamDefaultReader}
  * @public
  */
 static m_asReadableStreamDefaultReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType($thisArg) {
  GetReaderUnionType_$Overlay.$clinit();
  return /**@type {ReadableStreamDefaultReader} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  GetReaderUnionType_$Overlay.$clinit = () =>{};
  GetReaderUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = GetReaderUnionType_$Overlay; 
//# sourceMappingURL=ReadableStream$GetReaderUnionType$$Overlay.js.map