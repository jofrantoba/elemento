goog.module('org.gwtproject.http.client.URL$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsString.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let StringValidator = goog.forwardDeclare('org.gwtproject.http.client.StringValidator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class URL extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {?string} */
 static m_decode__java_lang_String(/** ?string */ encodedURL) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("encodedURL", encodedURL);
  return URL.m_decodeImpl__java_lang_String(encodedURL);
 }
 /** @return {?string} */
 static m_decodePathSegment__java_lang_String(/** ?string */ encodedURLComponent) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("encodedURLComponent", encodedURLComponent);
  return URL.m_decodePathSegmentImpl__java_lang_String(encodedURLComponent);
 }
 /** @return {?string} */
 static m_decodeQueryString__java_lang_String(/** ?string */ encodedURLComponent) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("encodedURLComponent", encodedURLComponent);
  return URL.m_decodeQueryStringImpl__java_lang_String(encodedURLComponent);
 }
 /** @return {?string} */
 static m_encode__java_lang_String(/** ?string */ decodedURL) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("decodedURL", decodedURL);
  return URL.m_encodeImpl__java_lang_String(decodedURL);
 }
 /** @return {?string} */
 static m_encodePathSegment__java_lang_String(/** ?string */ decodedURLComponent) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("decodedURLComponent", decodedURLComponent);
  return URL.m_encodePathSegmentImpl__java_lang_String(decodedURLComponent);
 }
 /** @return {?string} */
 static m_encodeQueryString__java_lang_String(/** ?string */ decodedURLComponent) {
  URL.$clinit();
  StringValidator.m_throwIfNull__java_lang_String__java_lang_Object("decodedURLComponent", decodedURLComponent);
  return URL.m_encodeQueryStringImpl__java_lang_String(decodedURLComponent);
 }
 /** @return {?string} */
 static m_decodeImpl__java_lang_String(/** ?string */ encodedURL) {
  return window.decodeURI(encodedURL);
 }
 /** @return {?string} */
 static m_decodePathSegmentImpl__java_lang_String(/** ?string */ encodedURLComponent) {
  return window.decodeURIComponent(encodedURLComponent);
 }
 /** @return {?string} */
 static m_decodeQueryStringImpl__java_lang_String(/** ?string */ encodedURLComponent) {
  let regexp = new RegExp("\\+", "g");
  return window.decodeURIComponent($Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(/**@type {String}*/ ($Casts.$to(Js.m_cast__java_lang_Object(encodedURLComponent), $Overlay)), regexp, "%20"));
 }
 /** @return {?string} */
 static m_encodeImpl__java_lang_String(/** ?string */ decodedURL) {
  return window.encodeURI(decodedURL);
 }
 /** @return {?string} */
 static m_encodePathSegmentImpl__java_lang_String(/** ?string */ decodedURLComponent) {
  return window.encodeURIComponent(decodedURLComponent);
 }
 /** @return {?string} */
 static m_encodeQueryStringImpl__java_lang_String(/** ?string */ decodedURLComponent) {
  let regexp = new RegExp("%20", "g");
  return $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(/**@type {String}*/ ($Casts.$to(Js.m_cast__java_lang_Object(window.encodeURIComponent(decodedURLComponent)), $Overlay)), regexp, "+");
 }
 /** @return {!URL} */
 static $create__() {
  let $instance = new URL();
  $instance.$ctor__org_gwtproject_http_client_URL__();
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_URL__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  URL.$clinit = () =>{};
  URL.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof URL;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsString.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  StringValidator = goog.module.get('org.gwtproject.http.client.StringValidator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(URL, 'org.gwtproject.http.client.URL');

exports = URL; 
//# sourceMappingURL=URL.js.map