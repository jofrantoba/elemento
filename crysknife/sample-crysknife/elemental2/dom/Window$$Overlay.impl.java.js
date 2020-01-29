goog.module('elemental2.dom.Window.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let DatabaseCallback_$Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let RequestInit_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let ScrollToOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollToOptions.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Window.FetchInputUnionType.$Overlay$impl');
let ImportScriptsVar__argsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ImportScriptsVar_argsUnionType.$Overlay$impl');
let OpenDatabaseCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.OpenDatabaseCallbackUnionType.$Overlay$impl');
let ScrollByScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollByScrollToOptionsOrXUnionType.$Overlay$impl');
let ScrollScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollScrollToOptionsOrXUnionType.$Overlay$impl');
let ScrollToScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollToScrollToOptionsOrXUnionType.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Window_$Overlay {
 /**
  * @param {!Window} $thisArg
  * @param {Request} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request__elemental2_dom_RequestInit($thisArg, input, init) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {!Window} $thisArg
  * @param {Request} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request($thisArg, input) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {?string} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String__elemental2_dom_RequestInit($thisArg, input, init) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {!Window} $thisArg
  * @param {?string} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String($thisArg, input) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {Array<?string>} var_args
  * @public
  */
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_java_lang_String($thisArg, var_args) {
  Window_$Overlay.$clinit();
  $thisArg.importScripts(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(var_args)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {Array<TrustedScriptURL>} var_args
  * @public
  */
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_elemental2_dom_TrustedScriptURL($thisArg, var_args) {
  Window_$Overlay.$clinit();
  $thisArg.importScripts(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(var_args)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {?string} name
  * @param {?string} version
  * @param {?string} description
  * @param {number} size
  * @param {DatabaseCallback} callback
  * @return {Database}
  * @public
  */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback($thisArg, name, version, description, size, callback) {
  Window_$Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {?string} name
  * @param {?string} version
  * @param {?string} description
  * @param {number} size
  * @param {?function(Database):*} callback
  * @return {Database}
  * @public
  */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_Window_OpenDatabaseCallbackFn($thisArg, name, version, description, size, callback) {
  Window_$Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {*} message
  * @param {?string} targetOrigin
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__arrayOf_elemental2_core_Transferable($thisArg, message, targetOrigin, transfer) {
  Window_$Overlay.$clinit();
  $thisArg.postMessage(message, targetOrigin, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @public
  */
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scroll__$devirt__elemental2_dom_Window__double__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @public
  */
 static m_scroll__$devirt__elemental2_dom_Window__double($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @public
  */
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollBy__$devirt__elemental2_dom_Window__double__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @public
  */
 static m_scrollBy__$devirt__elemental2_dom_Window__double($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {ScrollToOptions} scrollToOptionsOrX
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @param {number} y
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Window__double__double($thisArg, scrollToOptionsOrX, y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /**
  * @param {!Window} $thisArg
  * @param {number} scrollToOptionsOrX
  * @public
  */
 static m_scrollTo__$devirt__elemental2_dom_Window__double($thisArg, scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 /**
  * @public
  */
 static $clinit() {
  Window_$Overlay.$clinit = () =>{};
  Window_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Window;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Window_$Overlay, 'Window');

exports = Window_$Overlay; 
//# sourceMappingURL=Window$$Overlay.js.map