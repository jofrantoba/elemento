goog.module('elemental2.dom.URL.CreateObjectURLObjUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let MediaSource_$Overlay = goog.forwardDeclare('elemental2.dom.MediaSource.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CreateObjectURLObjUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {Blob}
  * @public
  */
 static m_asBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return /**@type {Blob} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {MediaSource}
  * @public
  */
 static m_asMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return /**@type {MediaSource} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MediaSource_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {MediaStream}
  * @public
  */
 static m_asMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return /**@type {MediaStream} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MediaStream_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return MediaSource_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType($thisArg) {
  CreateObjectURLObjUnionType_$Overlay.$clinit();
  return MediaStream_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  CreateObjectURLObjUnionType_$Overlay.$clinit = () =>{};
  CreateObjectURLObjUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  MediaSource_$Overlay = goog.module.get('elemental2.dom.MediaSource.$Overlay$impl');
  MediaStream_$Overlay = goog.module.get('elemental2.dom.MediaStream.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = CreateObjectURLObjUnionType_$Overlay; 
//# sourceMappingURL=URL$CreateObjectURLObjUnionType$$Overlay.js.map