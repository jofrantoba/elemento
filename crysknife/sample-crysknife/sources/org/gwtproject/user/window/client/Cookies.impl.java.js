goog.module('org.gwtproject.user.window.client.Cookies$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsString_$Overlay = goog.forwardDeclare('elemental2.core.JsString.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let j_u_Date = goog.forwardDeclare('java.util.Date$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Cookies extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {?string} */
 static m_getCookie__java_lang_String(/** ?string */ name) {
  Cookies.$clinit();
  let cookiesMap = Cookies.m_ensureCookies__();
  return /**@type {?string}*/ ($Casts.$to(cookiesMap.get(name), j_l_String));
 }
 /** @return {Collection<?string>} */
 static m_getCookieNames__() {
  Cookies.$clinit();
  return Cookies.m_ensureCookies__().keySet();
 }
 /** @return {boolean} */
 static m_getUriEncode__() {
  Cookies.$clinit();
  return Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_;
 }
 /** @return {boolean} */
 static m_isCookieEnabled__() {
  Cookies.$clinit();
  if (!Cookies.f_isCookieChecked__org_gwtproject_user_window_client_Cookies_) {
   Cookies.f_isCookieChecked__org_gwtproject_user_window_client_Cookies_ = true;
   Cookies.m_setCookie__java_lang_String__java_lang_String("__gwtCookieCheck", "isEnabled");
   Cookies.f_isCookieEnabled__org_gwtproject_user_window_client_Cookies_ = $Equality.$same("isEnabled", Cookies.m_getCookie__java_lang_String("__gwtCookieCheck"));
   Cookies.m_removeCookie__java_lang_String("__gwtCookieCheck");
  }
  return Cookies.f_isCookieEnabled__org_gwtproject_user_window_client_Cookies_;
 }
 
 static m_removeCookie__java_lang_String(/** ?string */ name) {
  Cookies.$clinit();
  if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   name = window.encodeURIComponent(name);
  }
  Cookies.m_removeCookieNative__java_lang_String(name);
 }
 
 static m_removeCookie__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ path) {
  Cookies.$clinit();
  if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   name = window.encodeURIComponent(name);
  }
  Cookies.m_removeCookieNative__java_lang_String__java_lang_String(name, path);
 }
 
 static m_removeCookieNative__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ path) {
  $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.cookie = j_l_String.m_valueOf__java_lang_Object(name) + "=;path=" + j_l_String.m_valueOf__java_lang_Object(path) + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
 }
 
 static m_setCookie__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  Cookies.$clinit();
  Cookies.m_setCookie__java_lang_String__java_lang_String__java_util_Date__java_lang_String__java_lang_String__boolean(name, value, null, null, null, false);
 }
 
 static m_setCookie__java_lang_String__java_lang_String__java_util_Date(/** ?string */ name, /** ?string */ value, /** j_u_Date */ expires) {
  Cookies.$clinit();
  Cookies.m_setCookie__java_lang_String__java_lang_String__java_util_Date__java_lang_String__java_lang_String__boolean(name, value, expires, null, null, false);
 }
 
 static m_setCookie__java_lang_String__java_lang_String__java_util_Date__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ value, /** j_u_Date */ expires, /** ?string */ domain, /** ?string */ path, /** boolean */ secure) {
  Cookies.$clinit();
  if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   name = window.encodeURIComponent(name);
   value = window.encodeURIComponent(value);
  } else if (!Cookies.m_isValidCookieName__java_lang_String(name)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Illegal cookie format: " + j_l_String.m_valueOf__java_lang_Object(name) + " is not a valid cookie name."));
  } else if (!Cookies.m_isValidCookieValue__java_lang_String(value)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Illegal cookie format: " + j_l_String.m_valueOf__java_lang_Object(value) + " is not a valid cookie value."));
  }
  Cookies.m_setCookieImpl__java_lang_String__java_lang_String__double__java_lang_String__java_lang_String__boolean(name, value, $Primitives.$widenLongToDouble($Equality.$same(expires, null) ? $Long.fromInt(0) : expires.m_getTime__()), domain, path, secure);
 }
 
 static m_setUriEncode__boolean(/** boolean */ encode) {
  Cookies.$clinit();
  if (encode != Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_ = encode;
   Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_ = null;
  }
 }
 
 static m_loadCookies__java_util_HashMap(/** HashMap<?string, ?string> */ m) {
  let docCookie = $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.cookie;
  if (Js.m_isTruthy__java_lang_Object(docCookie) && !j_l_String.m_isEmpty__java_lang_String(docCookie)) {
   let crumbs = /**@type {String}*/ ($Casts.$to(Js.m_cast__java_lang_Object(docCookie), JsString_$Overlay)).split("; ");
   for (let i = crumbs.length - 1; i >= 0; --i) {
    let /** ?string */ name, /** ?string */ value;
    let eqIdx = j_l_String.m_indexOf__java_lang_String__int(crumbs[i], 61 /* '=' */);
    if (eqIdx == -1) {
     name = crumbs[i];
     value = "";
    } else {
     name = j_l_String.m_substring__java_lang_String__int__int(crumbs[i], 0, eqIdx);
     value = j_l_String.m_substring__java_lang_String__int(crumbs[i], eqIdx + 1);
    }
    if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
     try {
      name = window.decodeURIComponent(name);
     } catch (__$exc) {}
     try {
      value = window.decodeURIComponent(value);
     } catch (__$exc_1) {}
    }
    m.put(name, value);
   }
  }
 }
 /** @return {HashMap<?string, ?string>} */
 static m_ensureCookies__() {
  if ($Equality.$same(Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_, null) || Cookies.m_needsRefresh__()) {
   let newCachedCookies = /**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__());
   Cookies.m_loadCookies__java_util_HashMap(newCachedCookies);
   Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_ = newCachedCookies;
  }
  return Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_;
 }
 /** @return {boolean} */
 static m_isValidCookieName__java_lang_String(/** ?string */ name) {
  if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   return true;
  } else if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "=") || j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, ";") || j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, ",") || j_l_String.m_startsWith__java_lang_String__java_lang_String(name, "$") || j_l_String.m_matches__java_lang_String__java_lang_String(name, ".*\\s+.*")) {
   return false;
  } else {
   return true;
  }
 }
 /** @return {boolean} */
 static m_isValidCookieValue__java_lang_String(/** ?string */ value) {
  if (Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_) {
   return true;
  }
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(value, "=") || j_l_String.m_contains__java_lang_String__java_lang_CharSequence(value, ";")) {
   return false;
  } else {
   return true;
  }
 }
 /** @return {boolean} */
 static m_needsRefresh__() {
  let docCookie = $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.cookie;
  if (!Objects.m_equals__java_lang_String__java_lang_String(docCookie, Cookies.f_rawCookies__org_gwtproject_user_window_client_Cookies_)) {
   Cookies.f_rawCookies__org_gwtproject_user_window_client_Cookies_ = docCookie;
   return true;
  } else {
   return false;
  }
 }
 
 static m_removeCookieNative__java_lang_String(/** ?string */ name) {
  $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.cookie = j_l_String.m_valueOf__java_lang_Object(name) + "=;expires=Fri, 02-Jan-1970 00:00:00 GMT";
 }
 
 static m_setCookieImpl__java_lang_String__java_lang_String__double__java_lang_String__java_lang_String__boolean(/** ?string */ name, /** ?string */ value, /** number */ expires, /** ?string */ domain, /** ?string */ path, /** boolean */ secure) {
  let c = j_l_String.m_valueOf__java_lang_Object(name) + j_l_String.m_valueOf__char(61 /* '=' */) + j_l_String.m_valueOf__java_lang_Object(value);
  if (Js.m_isTruthy__java_lang_Object(expires)) {
   c = j_l_String.m_valueOf__java_lang_Object(c) + j_l_String.m_valueOf__java_lang_Object((";expires=" + j_l_String.m_valueOf__java_lang_Object(new Date(expires).toGMTString())));
  }
  if (Js.m_isTruthy__java_lang_Object(domain)) {
   c = j_l_String.m_valueOf__java_lang_Object(c) + j_l_String.m_valueOf__java_lang_Object((";domain=" + j_l_String.m_valueOf__java_lang_Object(domain)));
  }
  if (Js.m_isTruthy__java_lang_Object(path)) {
   c = j_l_String.m_valueOf__java_lang_Object(c) + j_l_String.m_valueOf__java_lang_Object((";path=" + j_l_String.m_valueOf__java_lang_Object(path)));
  }
  if (secure) {
   c = j_l_String.m_valueOf__java_lang_Object(c) + ";secure";
  }
  $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.cookie = c;
 }
 /** @return {!Cookies} */
 static $create__() {
  let $instance = new Cookies();
  $instance.$ctor__org_gwtproject_user_window_client_Cookies__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_window_client_Cookies__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Cookies.$clinit = () =>{};
  Cookies.$loadModules();
  j_l_Object.$clinit();
  Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_ = null;
  Cookies.f_isCookieEnabled__org_gwtproject_user_window_client_Cookies_ = false;
  Cookies.f_isCookieChecked__org_gwtproject_user_window_client_Cookies_ = false;
  Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_ = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cookies;
 }
 
 static $loadModules() {
  JsString_$Overlay = goog.module.get('elemental2.core.JsString.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(Cookies, 'org.gwtproject.user.window.client.Cookies');

/**@type {HashMap<?string, ?string>}*/
Cookies.f_cachedCookies__org_gwtproject_user_window_client_Cookies_;
/**@type {?string}*/
Cookies.f_rawCookies__org_gwtproject_user_window_client_Cookies_;
/**@type {boolean}*/
Cookies.f_isCookieEnabled__org_gwtproject_user_window_client_Cookies_ = false;
/**@type {boolean}*/
Cookies.f_isCookieChecked__org_gwtproject_user_window_client_Cookies_ = false;
/**@type {boolean}*/
Cookies.f_uriEncoding__org_gwtproject_user_window_client_Cookies_ = false;

exports = Cookies; 
//# sourceMappingURL=Cookies.js.map