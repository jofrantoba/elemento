goog.module('elemental2.dom.URL.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let MediaSource_$Overlay = goog.forwardDeclare('elemental2.dom.MediaSource.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.URL.CreateObjectURLObjUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class URL_$Overlay {
 /**
  * @param {Blob} obj
  * @return {?string}
  * @public
  */
 static m_createObjectURL__elemental2_dom_Blob(obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /**
  * @param {MediaSource} obj
  * @return {?string}
  * @public
  */
 static m_createObjectURL__elemental2_dom_MediaSource(obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /**
  * @param {MediaStream} obj
  * @return {?string}
  * @public
  */
 static m_createObjectURL__elemental2_dom_MediaStream(obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /**
  * @public
  */
 static $clinit() {
  URL_$Overlay.$clinit = () =>{};
  URL_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof URL;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(URL_$Overlay, 'URL');

exports = URL_$Overlay; 
//# sourceMappingURL=URL$$Overlay.js.map