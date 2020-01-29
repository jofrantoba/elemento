goog.module('elemental2.dom.Response.ConstructorBodyUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let FormData_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.$Overlay$impl');
let ReadableStream_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableStream.$Overlay$impl');
let URLSearchParams_$Overlay = goog.forwardDeclare('elemental2.dom.URLSearchParams.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorBodyUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {ArrayBuffer}
  * @public
  */
 static m_asArrayBuffer__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {ArrayBuffer} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ArrayBufferView}
  * @public
  */
 static m_asArrayBufferView__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {ArrayBufferView} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {Blob}
  * @public
  */
 static m_asBlob__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {Blob} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {FormData}
  * @public
  */
 static m_asFormData__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {FormData} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), FormData_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ReadableStream}
  * @public
  */
 static m_asReadableStream__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {ReadableStream} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ReadableStream_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {URLSearchParams}
  * @public
  */
 static m_asURLSearchParams__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return /**@type {URLSearchParams} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), URLSearchParams_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isArrayBuffer__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isArrayBufferView__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isBlob__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return Blob_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isFormData__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return FormData_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isReadableStream__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return ReadableStream_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isURLSearchParams__$devirt__elemental2_dom_Response_ConstructorBodyUnionType($thisArg) {
  ConstructorBodyUnionType_$Overlay.$clinit();
  return URLSearchParams_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  ConstructorBodyUnionType_$Overlay.$clinit = () =>{};
  ConstructorBodyUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  FormData_$Overlay = goog.module.get('elemental2.dom.FormData.$Overlay$impl');
  ReadableStream_$Overlay = goog.module.get('elemental2.dom.ReadableStream.$Overlay$impl');
  URLSearchParams_$Overlay = goog.module.get('elemental2.dom.URLSearchParams.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorBodyUnionType_$Overlay; 
//# sourceMappingURL=Response$ConstructorBodyUnionType$$Overlay.js.map