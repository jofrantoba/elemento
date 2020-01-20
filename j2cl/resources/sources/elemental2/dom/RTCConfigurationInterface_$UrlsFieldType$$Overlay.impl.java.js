goog.module('elemental2.dom.RTCConfigurationInterface_.UrlsFieldType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class UrlsFieldType_$Overlay {
 /**
  * @return {?}
  * @public
  */
 static m_create__() {
  UrlsFieldType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {?} $thisArg
  * @param {Array<?string>} urls
  * @public
  */
 static m_setUrls__$devirt__elemental2_dom_RTCConfigurationInterface__UrlsFieldType__arrayOf_java_lang_String($thisArg, urls) {
  UrlsFieldType_$Overlay.$clinit();
  $thisArg.urls = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 /**
  * @public
  */
 static $clinit() {
  UrlsFieldType_$Overlay.$clinit = () =>{};
  UrlsFieldType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = UrlsFieldType_$Overlay; 
//# sourceMappingURL=RTCConfigurationInterface_$UrlsFieldType$$Overlay.js.map