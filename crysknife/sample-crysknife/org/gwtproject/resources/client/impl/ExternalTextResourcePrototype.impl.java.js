goog.module('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ExternalTextResource = goog.require('org.gwtproject.resources.client.ExternalTextResource$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let JsObject_$Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let RequestBuilder = goog.forwardDeclare('org.gwtproject.http.client.RequestBuilder$impl');
let RequestException = goog.forwardDeclare('org.gwtproject.http.client.RequestException$impl');
let ResourceCallback = goog.forwardDeclare('org.gwtproject.resources.client.ResourceCallback$impl');
let ResourceException = goog.forwardDeclare('org.gwtproject.resources.client.ResourceException$impl');
let TextResource = goog.forwardDeclare('org.gwtproject.resources.client.TextResource$impl');
let ETRCallback = goog.forwardDeclare('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {ExternalTextResource}
  */
class ExternalTextResourcePrototype extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<TextResource>}*/
  this.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
  /**@type {number}*/
  this.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = 0;
  /**@type {?string}*/
  this.f_md5Hash__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
  /**@type {?string}*/
  this.f_name__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
  /**@type {SafeUri}*/
  this.f_url__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
 }
 //Factory method corresponding to constructor 'ExternalTextResourcePrototype(String, SafeUri, TextResource[], int)'.
 /** @return {!ExternalTextResourcePrototype} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int(/** ?string */ name, /** SafeUri */ url, /** Array<TextResource> */ cache, /** number */ index) {
  ExternalTextResourcePrototype.$clinit();
  let $instance = new ExternalTextResourcePrototype();
  $instance.$ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int(name, url, cache, index);
  return $instance;
 }
 //Initialization from constructor 'ExternalTextResourcePrototype(String, SafeUri, TextResource[], int)'.
 
 $ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int(/** ?string */ name, /** SafeUri */ url, /** Array<TextResource> */ cache, /** number */ index) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = name;
  this.f_url__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = url;
  this.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = cache;
  this.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = index;
  this.f_md5Hash__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = null;
 }
 //Factory method corresponding to constructor 'ExternalTextResourcePrototype(String, SafeUri, TextResource[], int, String)'.
 /** @return {!ExternalTextResourcePrototype} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int__java_lang_String(/** ?string */ name, /** SafeUri */ url, /** Array<TextResource> */ cache, /** number */ index, /** ?string */ md5Hash) {
  ExternalTextResourcePrototype.$clinit();
  let $instance = new ExternalTextResourcePrototype();
  $instance.$ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int__java_lang_String(name, url, cache, index, md5Hash);
  return $instance;
 }
 //Initialization from constructor 'ExternalTextResourcePrototype(String, SafeUri, TextResource[], int, String)'.
 
 $ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__arrayOf_org_gwtproject_resources_client_TextResource__int__java_lang_String(/** ?string */ name, /** SafeUri */ url, /** Array<TextResource> */ cache, /** number */ index, /** ?string */ md5Hash) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = name;
  this.f_url__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = url;
  this.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = cache;
  this.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = index;
  this.f_md5Hash__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ = md5Hash;
 }
 /** @return {Object} */
 static m_evalObject__java_lang_String(/** ?string */ data) {
  ExternalTextResourcePrototype.$clinit();
  return JSON.parse(data);
 }
 /** @return {?string} */
 static m_extractString__elemental2_core_JsObject__int(/** Object */ jso, /** number */ index) {
  ExternalTextResourcePrototype.$clinit();
  let array = /**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object(jso), $Overlay));
  if (array.length > index) {
   return /**@type {?string}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(array, index), j_l_String));
  }
  return null;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
 }
 /** @override */
 m_getText__org_gwtproject_resources_client_ResourceCallback(/** ResourceCallback<TextResource> */ callback) {
  if (!$Equality.$same(this.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_[this.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_], null)) {
   callback.m_onSuccess__org_gwtproject_resources_client_ResourcePrototype(this.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_[this.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_]);
   return;
  }
  let rb = RequestBuilder.$create__org_gwtproject_http_client_RequestBuilder_Method__java_lang_String(RequestBuilder.f_GET__org_gwtproject_http_client_RequestBuilder, this.f_url__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_.m_asString__());
  try {
   rb.m_sendRequest__java_lang_String__org_gwtproject_http_client_RequestCallback("", ETRCallback.$create__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__org_gwtproject_resources_client_ResourceCallback(this, callback));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (RequestException.$isInstance(__$exc)) {
    let e = /**@type {RequestException}*/ (__$exc);
    throw $Exceptions.toJs(ResourceException.$create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(this, "Unable to initiate request for external resource", e));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 
 static $clinit() {
  ExternalTextResourcePrototype.$clinit = () =>{};
  ExternalTextResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExternalTextResourcePrototype;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  RequestBuilder = goog.module.get('org.gwtproject.http.client.RequestBuilder$impl');
  RequestException = goog.module.get('org.gwtproject.http.client.RequestException$impl');
  ResourceException = goog.module.get('org.gwtproject.resources.client.ResourceException$impl');
  ETRCallback = goog.module.get('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ExternalTextResourcePrototype, 'org.gwtproject.resources.client.impl.ExternalTextResourcePrototype');

ExternalTextResource.$markImplementor(ExternalTextResourcePrototype);

exports = ExternalTextResourcePrototype; 
//# sourceMappingURL=ExternalTextResourcePrototype.js.map