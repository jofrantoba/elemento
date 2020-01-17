goog.module('elemental2.dom.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let CanvasRenderingContext2D_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasRenderingContext2D.$Overlay$impl');
let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let DatabaseCallback_$Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.CreateImageBitmapImageUnionType.$Overlay$impl');
let FetchInputUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.FetchInputUnionType.$Overlay$impl');
let ImportScriptsVar__argsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.ImportScriptsVar_argsUnionType.$Overlay$impl');
let OpenDatabaseCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.OpenDatabaseCallbackUnionType.$Overlay$impl');
let PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType.$Overlay$impl');
let PostMessageTargetOriginOrTransferUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.PostMessageTargetOriginOrTransferUnionType.$Overlay$impl');
let RequestIdleCallbackOptionsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');
let SetIntervalCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.SetIntervalCallbackUnionType.$Overlay$impl');
let SetTimeoutCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.SetTimeoutCallbackUnionType.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLDocument_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDocument.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let IdleCallbackOptions_$Overlay = goog.forwardDeclare('elemental2.dom.IdleCallbackOptions.$Overlay$impl');
let IdleDeadline_$Overlay = goog.forwardDeclare('elemental2.dom.IdleDeadline.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let ImageData_$Overlay = goog.forwardDeclare('elemental2.dom.ImageData.$Overlay$impl');
let Location_$Overlay = goog.forwardDeclare('elemental2.dom.Location.$Overlay$impl');
let Navigator_$Overlay = goog.forwardDeclare('elemental2.dom.Navigator.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let RequestInit_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Screen_$Overlay = goog.forwardDeclare('elemental2.dom.Screen.$Overlay$impl');
let TrustedScript_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScript.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let VisualViewport_$Overlay = goog.forwardDeclare('elemental2.dom.VisualViewport.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DomGlobal_$Overlay {
 /**
  * @param {Blob} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {Blob} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {Blob} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_Blob__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {Blob} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_Blob__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {Blob} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_Blob(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {CanvasRenderingContext2D} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {CanvasRenderingContext2D} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {CanvasRenderingContext2D} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {CanvasRenderingContext2D} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {CanvasRenderingContext2D} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {HTMLCanvasElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {HTMLCanvasElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {HTMLCanvasElement} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {HTMLCanvasElement} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {HTMLCanvasElement} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {HTMLImageElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {HTMLImageElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {HTMLImageElement} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {HTMLImageElement} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {HTMLImageElement} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {HTMLVideoElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {HTMLVideoElement} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {HTMLVideoElement} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {HTMLVideoElement} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {HTMLVideoElement} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {ImageBitmap} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {ImageBitmap} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {ImageBitmap} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {ImageBitmap} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {ImageBitmap} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageBitmap(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {ImageData} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double(image, sx, sy, sw, sh) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw, sh);
 }
 /**
  * @param {ImageData} image
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double(image, sx, sy, sw) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy, sw);
 }
 /**
  * @param {ImageData} image
  * @param {number} sx
  * @param {number} sy
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double(image, sx, sy) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx, sy);
 }
 /**
  * @param {ImageData} image
  * @param {number} sx
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageData__double(image, sx) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), sx);
 }
 /**
  * @param {ImageData} image
  * @return {Promise<ImageBitmap>}
  * @public
  */
 static m_createImageBitmap__elemental2_dom_ImageData(image) {
  DomGlobal_$Overlay.$clinit();
  return window.createImageBitmap(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /**
  * @param {Request} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__elemental2_dom_Request__elemental2_dom_RequestInit(input, init) {
  DomGlobal_$Overlay.$clinit();
  return window.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {Request} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__elemental2_dom_Request(input) {
  DomGlobal_$Overlay.$clinit();
  return window.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {?string} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__java_lang_String__elemental2_dom_RequestInit(input, init) {
  DomGlobal_$Overlay.$clinit();
  return window.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {?string} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__java_lang_String(input) {
  DomGlobal_$Overlay.$clinit();
  return window.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {Array<?string>} var_args
  * @public
  */
 static m_importScripts__arrayOf_java_lang_String(var_args) {
  DomGlobal_$Overlay.$clinit();
  window.importScripts(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(var_args)));
 }
 /**
  * @param {Array<TrustedScriptURL>} var_args
  * @public
  */
 static m_importScripts__arrayOf_elemental2_dom_TrustedScriptURL(var_args) {
  DomGlobal_$Overlay.$clinit();
  window.importScripts(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(var_args)));
 }
 /**
  * @param {?string} name
  * @param {?string} version
  * @param {?string} description
  * @param {number} size
  * @param {DatabaseCallback} callback
  * @return {Database}
  * @public
  */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback(name, version, description, size, callback) {
  DomGlobal_$Overlay.$clinit();
  return window.openDatabase(name, version, description, size, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {?string} name
  * @param {?string} version
  * @param {?string} description
  * @param {number} size
  * @param {?function(Database):*} callback
  * @return {Database}
  * @public
  */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DomGlobal_OpenDatabaseCallbackFn(name, version, description, size, callback) {
  DomGlobal_$Overlay.$clinit();
  return window.openDatabase(name, version, description, size, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {?} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {?string} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray(message, targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, targetOriginOrTransfer, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__arrayOf_java_lang_Object(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?} targetOriginOrTransfer
  * @param {?string} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__java_lang_String(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, targetOriginOrTransfer, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?string} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?string} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__java_lang_String__arrayOf_java_lang_Object(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?string} targetOriginOrTransfer
  * @param {?} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /**
  * @param {*} message
  * @param {?string} targetOriginOrTransfer
  * @param {?string} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__java_lang_String__java_lang_String(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {?string} targetOriginOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__java_lang_String(message, targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  window.postMessage(message, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {Array<*>} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__arrayOf_java_lang_Object(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {?} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @param {?string} targetOriginOrPortsOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__java_lang_String(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /**
  * @param {*} message
  * @param {Array<Transferable>} targetOriginOrTransfer
  * @public
  */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable(message, targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 /**
  * @param {?function(IdleDeadline):void} callback
  * @param {IdleCallbackOptions} options
  * @return {number}
  * @public
  */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__elemental2_dom_IdleCallbackOptions(callback, options) {
  DomGlobal_$Overlay.$clinit();
  return window.requestIdleCallback(callback, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @param {?function(IdleDeadline):void} callback
  * @param {number} options
  * @return {number}
  * @public
  */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__int(callback, options) {
  DomGlobal_$Overlay.$clinit();
  return window.requestIdleCallback(callback, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /**
  * @param {?function(...*):void} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {?function(...*):void} callback
  * @return {number}
  * @public
  */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {?string} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setInterval__java_lang_String__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {?string} callback
  * @return {number}
  * @public
  */
 static m_setInterval__java_lang_String(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {TrustedScript} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setInterval__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {TrustedScript} callback
  * @return {number}
  * @public
  */
 static m_setInterval__elemental2_dom_TrustedScript(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setInterval(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {?function(...*):void} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {?function(...*):void} callback
  * @return {number}
  * @public
  */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {?string} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setTimeout__java_lang_String__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {?string} callback
  * @return {number}
  * @public
  */
 static m_setTimeout__java_lang_String(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {TrustedScript} callback
  * @param {number} delay
  * @param {Array<*>} callbackParams
  * @return {number}
  * @public
  */
 static m_setTimeout__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(callback, delay, callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /**
  * @param {TrustedScript} callback
  * @return {number}
  * @public
  */
 static m_setTimeout__elemental2_dom_TrustedScript(callback) {
  DomGlobal_$Overlay.$clinit();
  return window.setTimeout(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @return {HTMLDocument}
  * @public
  */
 static get f_document__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {boolean}
  * @public
  */
 static get f_isSecureContext__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {Location}
  * @public
  */
 static get f_location__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {Navigator}
  * @public
  */
 static get f_navigator__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {Screen}
  * @public
  */
 static get f_screen__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {Window}
  * @public
  */
 static get f_self__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {Window}
  * @public
  */
 static get f_top__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @return {VisualViewport}
  * @public
  */
 static get f_visualViewport__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  DomGlobal_$Overlay.$clinit = () =>{};
  DomGlobal_$Overlay.$loadModules();
  DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay = window.document;
  DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay = window.isSecureContext;
  DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay = window.location;
  DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay = window.navigator;
  DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay = window.screen;
  DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay = window.self;
  DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay = window.top;
  DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay = window.visualViewport;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof window;
 }
 /**
  * @public
  */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DomGlobal_$Overlay, 'window');

/** @private {HTMLDocument} */
DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay;
/** @private {boolean} */
DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay = false;
/** @private {Location} */
DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay;
/** @private {Navigator} */
DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay;
/** @private {Screen} */
DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay;
/** @private {Window} */
DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay;
/** @private {Window} */
DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay;
/** @private {VisualViewport} */
DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay;

exports = DomGlobal_$Overlay; 
//# sourceMappingURL=DomGlobal$$Overlay.js.map