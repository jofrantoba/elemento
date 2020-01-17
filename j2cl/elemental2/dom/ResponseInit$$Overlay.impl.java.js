goog.module('elemental2.dom.ResponseInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Headers_$Overlay = goog.forwardDeclare('elemental2.dom.Headers.$Overlay$impl');
let GetHeadersUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.ResponseInit.GetHeadersUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ResponseInit_$Overlay {
 /**
  * @return {ResponseInit}
  * @public
  */
 static m_create__() {
  ResponseInit_$Overlay.$clinit();
  return /**@type {ResponseInit} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!ResponseInit} $thisArg
  * @param {Headers} headers
  * @public
  */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_dom_Headers($thisArg, headers) {
  ResponseInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 /**
  * @param {!ResponseInit} $thisArg
  * @param {Array<Array<?string>>} headers
  * @public
  */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray($thisArg, headers) {
  ResponseInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 /**
  * @param {!ResponseInit} $thisArg
  * @param {Object<string, ?string>} headers
  * @public
  */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__jsinterop_base_JsPropertyMap($thisArg, headers) {
  ResponseInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 /**
  * @param {!ResponseInit} $thisArg
  * @param {Array<Array<?string>>} headers
  * @public
  */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__arrayOf_arrayOf_java_lang_String($thisArg, headers) {
  ResponseInit_$Overlay.$clinit();
  ResponseInit_$Overlay.m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray($thisArg, /**@type {Array<Array<?string>>} */ (Js.m_uncheckedCast__java_lang_Object(headers)));
 }
 /**
  * @public
  */
 static $clinit() {
  ResponseInit_$Overlay.$clinit = () =>{};
  ResponseInit_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ResponseInit_$Overlay; 
//# sourceMappingURL=ResponseInit$$Overlay.js.map