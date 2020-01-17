goog.module('elemental2.dom.XMLHttpRequest.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let FormData_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.XMLHttpRequest.SendDataUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class XMLHttpRequest_$Overlay {
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {ArrayBuffer} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBuffer($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {ArrayBufferView} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBufferView($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {Blob} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Blob($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {Document} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Document($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {FormData} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_FormData($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!XMLHttpRequest} $thisArg
  * @param {?string} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String($thisArg, data) {
  XMLHttpRequest_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @return {number}
  * @public
  */
 static get f_DONE__elemental2_dom_XMLHttpRequest_$Overlay() {
  return (XMLHttpRequest_$Overlay.$clinit(), XMLHttpRequest_$Overlay.$f_DONE__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return (XMLHttpRequest_$Overlay.$clinit(), XMLHttpRequest_$Overlay.$f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay() {
  return (XMLHttpRequest_$Overlay.$clinit(), XMLHttpRequest_$Overlay.$f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return (XMLHttpRequest_$Overlay.$clinit(), XMLHttpRequest_$Overlay.$f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay() {
  return (XMLHttpRequest_$Overlay.$clinit(), XMLHttpRequest_$Overlay.$f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  XMLHttpRequest_$Overlay.$clinit = () =>{};
  XMLHttpRequest_$Overlay.$loadModules();
  XMLHttpRequest_$Overlay.$f_DONE__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.DONE;
  XMLHttpRequest_$Overlay.$f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.HEADERS_RECEIVED;
  XMLHttpRequest_$Overlay.$f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.LOADING;
  XMLHttpRequest_$Overlay.$f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.OPENED;
  XMLHttpRequest_$Overlay.$f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.UNSENT;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof XMLHttpRequest;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(XMLHttpRequest_$Overlay, 'XMLHttpRequest');

/** @private {number} */
XMLHttpRequest_$Overlay.$f_DONE__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/** @private {number} */
XMLHttpRequest_$Overlay.$f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/** @private {number} */
XMLHttpRequest_$Overlay.$f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/** @private {number} */
XMLHttpRequest_$Overlay.$f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/** @private {number} */
XMLHttpRequest_$Overlay.$f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = 0;

exports = XMLHttpRequest_$Overlay; 
//# sourceMappingURL=XMLHttpRequest$$Overlay.js.map