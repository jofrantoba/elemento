goog.module('org.gwtproject.user.window.client.Window.Location$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let URL = goog.forwardDeclare('org.gwtproject.http.client.URL$impl');
let UrlBuilder = goog.forwardDeclare('org.gwtproject.http.client.UrlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Window_Location extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_assign__java_lang_String(/** ?string */ newURL) {
  Window_Location.$clinit();
  window.window.location.assign(newURL);
 }
 /** @return {UrlBuilder} */
 static m_createUrlBuilder__() {
  Window_Location.$clinit();
  let builder = UrlBuilder.$create__();
  builder.m_setProtocol__java_lang_String(Window_Location.m_getProtocol__());
  builder.m_setHost__java_lang_String(Window_Location.m_getHost__());
  let path = Window_Location.m_getPath__();
  if (!$Equality.$same(path, null) && j_l_String.m_length__java_lang_String(path) > 0) {
   builder.m_setPath__java_lang_String(path);
  }
  let hash = Window_Location.m_getHash__();
  if (!$Equality.$same(hash, null) && j_l_String.m_length__java_lang_String(hash) > 0) {
   builder.m_setHash__java_lang_String(URL.m_decodeQueryString__java_lang_String(hash));
  }
  let port = Window_Location.m_getPort__();
  if (!$Equality.$same(port, null) && j_l_String.m_length__java_lang_String(port) > 0) {
   builder.m_setPort__int(Integer.m_parseInt__java_lang_String(port));
  }
  let params = Window_Location.m_getParameterMap__();
  for (let $iterator = params.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<?string, List<?string>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   let values = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__java_util_Collection(/**@type {List<?string>}*/ ($Casts.$to(entry.m_getValue__(), List))));
   builder.m_setParameter__java_lang_String__arrayOf_java_lang_String(/**@type {?string}*/ ($Casts.$to(entry.m_getKey__(), j_l_String)), /**@type {Array<?string>}*/ ($Arrays.$castTo(values.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$create([values.size()], j_l_String))), j_l_String, 1)));
  }
  return builder;
 }
 /** @return {?string} */
 static m_getHash__() {
  Window_Location.$clinit();
  return window.window.location.hash;
 }
 /** @return {?string} */
 static m_getHost__() {
  Window_Location.$clinit();
  return window.window.location.host;
 }
 /** @return {?string} */
 static m_getHostName__() {
  Window_Location.$clinit();
  return window.window.location.hostname;
 }
 /** @return {?string} */
 static m_getHref__() {
  Window_Location.$clinit();
  return window.window.location.href;
 }
 /** @return {?string} */
 static m_getParameter__java_lang_String(/** ?string */ name) {
  Window_Location.$clinit();
  Window_Location.m_ensureListParameterMap__();
  let paramsForName = /**@type {List<?string>}*/ ($Casts.$to(Window_Location.f_listParamMap__org_gwtproject_user_window_client_Window_Location_.get(name), List));
  if ($Equality.$same(paramsForName, null)) {
   return null;
  } else {
   return /**@type {?string}*/ ($Casts.$to(paramsForName.getAtIndex(paramsForName.size() - 1), j_l_String));
  }
 }
 /** @return {Map<?string, List<?string>>} */
 static m_getParameterMap__() {
  Window_Location.$clinit();
  Window_Location.m_ensureListParameterMap__();
  return Window_Location.f_listParamMap__org_gwtproject_user_window_client_Window_Location_;
 }
 /** @return {?string} */
 static m_getPath__() {
  Window_Location.$clinit();
  return window.window.location.pathname;
 }
 /** @return {?string} */
 static m_getPort__() {
  Window_Location.$clinit();
  return window.window.location.port;
 }
 /** @return {?string} */
 static m_getProtocol__() {
  Window_Location.$clinit();
  return window.window.location.protocol;
 }
 /** @return {?string} */
 static m_getQueryString__() {
  Window_Location.$clinit();
  return window.window.location.search;
 }
 
 static m_reload__() {
  Window_Location.$clinit();
  window.window.location.reload();
 }
 
 static m_replace__java_lang_String(/** ?string */ newURL) {
  Window_Location.$clinit();
  window.window.location.replace(newURL);
 }
 /** @return {Map<?string, List<?string>>} */
 static m_buildListParamMap__java_lang_String(/** ?string */ queryString) {
  Window_Location.$clinit();
  let out = /**@type {!HashMap<?string, List<?string>>}*/ (HashMap.$create__());
  if (!$Equality.$same(queryString, null) && j_l_String.m_length__java_lang_String(queryString) > 1) {
   let qs = j_l_String.m_substring__java_lang_String__int(queryString, 1);
   for (let $array = j_l_String.m_split__java_lang_String__java_lang_String(qs, "&"), $index = 0; $index < $array.length; $index++) {
    let kvPair = $array[$index];
    let kv = j_l_String.m_split__java_lang_String__java_lang_String__int(kvPair, "=", 2);
    let key = kv[0];
    if (j_l_String.m_isEmpty__java_lang_String(key)) {
     continue;
    }
    let val = kv.length > 1 ? kv[1] : "";
    try {
     val = URL.m_decodeQueryString__java_lang_String(val);
    } catch (__$exc) {}
    let values = /**@type {List<?string>}*/ ($Casts.$to(out.m_computeIfAbsent__java_lang_Object__java_util_function_Function(key, j_u_function_Function.$adapt((k) =>{
     let k_1 = /**@type {?string}*/ ($Casts.$to(k, j_l_String));
     return /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
    })), List));
    values.add(val);
   }
  }
  for (let $iterator = out.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<?string, List<?string>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   entry.m_setValue__java_lang_Object(/**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<?string>}*/ ($Casts.$to(entry.m_getValue__(), List)))));
  }
  out = /**@type {Map<?string, List<?string>>}*/ (Collections.m_unmodifiableMap__java_util_Map(out));
  return out;
 }
 
 static m_ensureListParameterMap__() {
  let currentQueryString = Window_Location.m_getQueryString__();
  if ($Equality.$same(Window_Location.f_listParamMap__org_gwtproject_user_window_client_Window_Location_, null) || !j_l_String.m_equals__java_lang_String__java_lang_Object(Window_Location.f_cachedQueryString__org_gwtproject_user_window_client_Window_Location_, currentQueryString)) {
   Window_Location.f_listParamMap__org_gwtproject_user_window_client_Window_Location_ = Window_Location.m_buildListParamMap__java_lang_String(currentQueryString);
   Window_Location.f_cachedQueryString__org_gwtproject_user_window_client_Window_Location_ = currentQueryString;
  }
 }
 /** @return {!Window_Location} */
 static $create__() {
  let $instance = new Window_Location();
  $instance.$ctor__org_gwtproject_user_window_client_Window_Location__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_window_client_Window_Location__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Window_Location.$clinit = () =>{};
  Window_Location.$loadModules();
  j_l_Object.$clinit();
  Window_Location.f_cachedQueryString__org_gwtproject_user_window_client_Window_Location_ = "";
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window_Location;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  List = goog.module.get('java.util.List$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  URL = goog.module.get('org.gwtproject.http.client.URL$impl');
  UrlBuilder = goog.module.get('org.gwtproject.http.client.UrlBuilder$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Window_Location, 'org.gwtproject.user.window.client.Window$Location');

/**@type {?string}*/
Window_Location.f_cachedQueryString__org_gwtproject_user_window_client_Window_Location_;
/**@type {Map<?string, List<?string>>}*/
Window_Location.f_listParamMap__org_gwtproject_user_window_client_Window_Location_;

exports = Window_Location; 
//# sourceMappingURL=Window$Location.js.map