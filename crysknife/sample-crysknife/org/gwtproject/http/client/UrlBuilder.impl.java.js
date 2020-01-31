goog.module('org.gwtproject.http.client.UrlBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let URL = goog.forwardDeclare('org.gwtproject.http.client.URL$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class UrlBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, Array<?string>>}*/
  this.f_listParamMap__org_gwtproject_http_client_UrlBuilder_;
  /**@type {?string}*/
  this.f_protocol__org_gwtproject_http_client_UrlBuilder_;
  /**@type {?string}*/
  this.f_host__org_gwtproject_http_client_UrlBuilder_;
  /**@type {number}*/
  this.f_port__org_gwtproject_http_client_UrlBuilder_ = 0;
  /**@type {?string}*/
  this.f_path__org_gwtproject_http_client_UrlBuilder_;
  /**@type {?string}*/
  this.f_hash__org_gwtproject_http_client_UrlBuilder_;
 }
 /** @return {!UrlBuilder} */
 static $create__() {
  UrlBuilder.$clinit();
  let $instance = new UrlBuilder();
  $instance.$ctor__org_gwtproject_http_client_UrlBuilder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_http_client_UrlBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_http_client_UrlBuilder();
 }
 /** @return {?string} */
 m_buildString__() {
  let url = StringBuilder.$create__();
  url.m_append__java_lang_String(URL.m_encode__java_lang_String(this.f_protocol__org_gwtproject_http_client_UrlBuilder_)).m_append__java_lang_String("://");
  if (!$Equality.$same(this.f_host__org_gwtproject_http_client_UrlBuilder_, null)) {
   url.m_append__java_lang_String(URL.m_encode__java_lang_String(this.f_host__org_gwtproject_http_client_UrlBuilder_));
  }
  if (this.f_port__org_gwtproject_http_client_UrlBuilder_ != UrlBuilder.f_PORT_UNSPECIFIED__org_gwtproject_http_client_UrlBuilder) {
   url.m_append__java_lang_String(":").m_append__int(this.f_port__org_gwtproject_http_client_UrlBuilder_);
  }
  if (!$Equality.$same(this.f_path__org_gwtproject_http_client_UrlBuilder_, null) && !$Equality.$same("", this.f_path__org_gwtproject_http_client_UrlBuilder_)) {
   url.m_append__java_lang_String("/").m_append__java_lang_String(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(URL.m_encode__java_lang_String(this.f_path__org_gwtproject_http_client_UrlBuilder_), "?", "%3F"), "#", "%23"));
  }
  let prefix = 63 /* '?' */;
  for (let $iterator = this.f_listParamMap__org_gwtproject_http_client_UrlBuilder_.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<?string, Array<?string>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   for (let $array = /**@type {Array<?string>}*/ ($Arrays.$castTo(entry.m_getValue__(), j_l_String, 1)), $index = 0; $index < $array.length; $index++) {
    let val = $array[$index];
    url.m_append__char(prefix).m_append__java_lang_String(URL.m_encodeQueryString__java_lang_String(/**@type {?string}*/ ($Casts.$to(entry.m_getKey__(), j_l_String)))).m_append__char(61 /* '=' */);
    if (!$Equality.$same(val, null)) {
     url.m_append__java_lang_String(URL.m_encodeQueryString__java_lang_String(val));
    }
    prefix = 38 /* '&' */;
   }
  }
  if (!$Equality.$same(this.f_hash__org_gwtproject_http_client_UrlBuilder_, null)) {
   url.m_append__java_lang_String("#").m_append__java_lang_String(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(URL.m_encode__java_lang_String(this.f_hash__org_gwtproject_http_client_UrlBuilder_), "#", "%23"));
  }
  return url.toString();
 }
 /** @return {UrlBuilder} */
 m_removeParameter__java_lang_String(/** ?string */ name) {
  this.f_listParamMap__org_gwtproject_http_client_UrlBuilder_.remove(name);
  return this;
 }
 /** @return {UrlBuilder} */
 m_setHash__java_lang_String(/** ?string */ hash) {
  if (!$Equality.$same(hash, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String(hash, "#")) {
   hash = j_l_String.m_substring__java_lang_String__int(hash, 1);
  }
  this.f_hash__org_gwtproject_http_client_UrlBuilder_ = hash;
  return this;
 }
 /** @return {UrlBuilder} */
 m_setHost__java_lang_String(/** ?string */ host) {
  if (!$Equality.$same(host, null) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence(host, ":")) {
   let parts = j_l_String.m_split__java_lang_String__java_lang_String(host, ":");
   if (parts.length > 2) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Host contains more than one colon: " + j_l_String.m_valueOf__java_lang_Object(host)));
   }
   try {
    this.m_setPort__int(Integer.m_parseInt__java_lang_String(parts[1]));
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (NumberFormatException.$isInstance(__$exc)) {
     let e = /**@type {NumberFormatException}*/ (__$exc);
     throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Could not parse port out of host: " + j_l_String.m_valueOf__java_lang_Object(host)));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
   host = parts[0];
  }
  this.f_host__org_gwtproject_http_client_UrlBuilder_ = host;
  return this;
 }
 /** @return {UrlBuilder} */
 m_setParameter__java_lang_String__arrayOf_java_lang_String(/** ?string */ key, /** Array<?string> */ values) {
  this.m_assertNotNullOrEmpty__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_http_client_UrlBuilder(key, "Key cannot be null or empty", false);
  this.m_assertNotNull__java_lang_Object__java_lang_String_$p_org_gwtproject_http_client_UrlBuilder(values, "Values cannot null. Try using removeParameter instead.");
  if (values.length == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Values cannot be empty.  Try using removeParameter instead."));
  }
  this.f_listParamMap__org_gwtproject_http_client_UrlBuilder_.put(key, values);
  return this;
 }
 /** @return {UrlBuilder} */
 m_setPath__java_lang_String(/** ?string */ path) {
  if (!$Equality.$same(path, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String(path, "/")) {
   path = j_l_String.m_substring__java_lang_String__int(path, 1);
  }
  this.f_path__org_gwtproject_http_client_UrlBuilder_ = path;
  return this;
 }
 /** @return {UrlBuilder} */
 m_setPort__int(/** number */ port) {
  this.f_port__org_gwtproject_http_client_UrlBuilder_ = port;
  return this;
 }
 /** @return {UrlBuilder} */
 m_setProtocol__java_lang_String(/** ?string */ protocol) {
  this.m_assertNotNull__java_lang_Object__java_lang_String_$p_org_gwtproject_http_client_UrlBuilder(protocol, "Protocol cannot be null");
  if (j_l_String.m_endsWith__java_lang_String__java_lang_String(protocol, "://")) {
   protocol = j_l_String.m_substring__java_lang_String__int__int(protocol, 0, j_l_String.m_length__java_lang_String(protocol) - 3);
  } else if (j_l_String.m_endsWith__java_lang_String__java_lang_String(protocol, ":/")) {
   protocol = j_l_String.m_substring__java_lang_String__int__int(protocol, 0, j_l_String.m_length__java_lang_String(protocol) - 2);
  } else if (j_l_String.m_endsWith__java_lang_String__java_lang_String(protocol, ":")) {
   protocol = j_l_String.m_substring__java_lang_String__int__int(protocol, 0, j_l_String.m_length__java_lang_String(protocol) - 1);
  }
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(protocol, ":")) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Invalid protocol: " + j_l_String.m_valueOf__java_lang_Object(protocol)));
  }
  this.m_assertNotNullOrEmpty__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_http_client_UrlBuilder(protocol, "Protocol cannot be empty", false);
  this.f_protocol__org_gwtproject_http_client_UrlBuilder_ = protocol;
  return this;
 }
 
 m_assertNotNull__java_lang_Object__java_lang_String_$p_org_gwtproject_http_client_UrlBuilder(/** * */ value, /** ?string */ message) {
  if ($Equality.$same(value, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
  }
 }
 
 m_assertNotNullOrEmpty__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_http_client_UrlBuilder(/** ?string */ value, /** ?string */ message, /** boolean */ isState) {
  if ($Equality.$same(value, null) || j_l_String.m_length__java_lang_String(value) == 0) {
   if (isState) {
    throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(message));
   } else {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
   }
  }
 }
 /** @private */
 $init___$p_org_gwtproject_http_client_UrlBuilder() {
  this.f_listParamMap__org_gwtproject_http_client_UrlBuilder_ = /**@type {!LinkedHashMap<?string, Array<?string>>}*/ (LinkedHashMap.$create__());
  this.f_protocol__org_gwtproject_http_client_UrlBuilder_ = "http";
  this.f_host__org_gwtproject_http_client_UrlBuilder_ = null;
  this.f_port__org_gwtproject_http_client_UrlBuilder_ = UrlBuilder.f_PORT_UNSPECIFIED__org_gwtproject_http_client_UrlBuilder;
  this.f_path__org_gwtproject_http_client_UrlBuilder_ = null;
  this.f_hash__org_gwtproject_http_client_UrlBuilder_ = null;
 }
 
 static $clinit() {
  UrlBuilder.$clinit = () =>{};
  UrlBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UrlBuilder;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  URL = goog.module.get('org.gwtproject.http.client.URL$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(UrlBuilder, 'org.gwtproject.http.client.UrlBuilder');

/**@const {number}*/
UrlBuilder.f_PORT_UNSPECIFIED__org_gwtproject_http_client_UrlBuilder = -2147483648;

exports = UrlBuilder; 
//# sourceMappingURL=UrlBuilder.js.map