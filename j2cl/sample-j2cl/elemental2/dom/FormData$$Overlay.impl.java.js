goog.module('elemental2.dom.FormData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.FormData.AppendValueUnionType.$Overlay$impl');
let SetValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.SetValueUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class FormData_$Overlay {
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {Blob} value
  * @param {?string} filename
  * @public
  */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String($thisArg, name, value, filename) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {Blob} value
  * @public
  */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob($thisArg, name, value) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @param {?string} filename
  * @public
  */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String($thisArg, name, value, filename) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String($thisArg, name, value) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {Blob} value
  * @param {?string} filename
  * @public
  */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String($thisArg, name, value, filename) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {Blob} value
  * @public
  */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob($thisArg, name, value) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @param {?string} filename
  * @public
  */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String($thisArg, name, value, filename) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 /**
  * @param {!FormData} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String($thisArg, name, value) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /**
  * @public
  */
 static $clinit() {
  FormData_$Overlay.$clinit = () =>{};
  FormData_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FormData;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(FormData_$Overlay, 'FormData');

exports = FormData_$Overlay; 
//# sourceMappingURL=FormData$$Overlay.js.map