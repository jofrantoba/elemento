goog.module('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RequestCallback = goog.require('org.gwtproject.http.client.RequestCallback$impl');
const AsyncCallback = goog.require('org.gwtproject.user.client.rpc.AsyncCallback$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Request = goog.forwardDeclare('org.gwtproject.http.client.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.http.client.Response$impl');
let ResourceCallback = goog.forwardDeclare('org.gwtproject.resources.client.ResourceCallback$impl');
let ResourceException = goog.forwardDeclare('org.gwtproject.resources.client.ResourceException$impl');
let TextResource = goog.forwardDeclare('org.gwtproject.resources.client.TextResource$impl');
let ExternalTextResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype$impl');
let $1 = goog.forwardDeclare('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {RequestCallback}
 * @implements {AsyncCallback<Object>}
  */
class ETRCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ExternalTextResourcePrototype}*/
  this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback;
  /**@type {ResourceCallback<TextResource>}*/
  this.f_callback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback;
 }
 /** @return {!ETRCallback} */
 static $create__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__org_gwtproject_resources_client_ResourceCallback(/** ExternalTextResourcePrototype */ $outer_this, /** ResourceCallback<TextResource> */ callback) {
  ETRCallback.$clinit();
  let $instance = new ETRCallback();
  $instance.$ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__org_gwtproject_resources_client_ResourceCallback($outer_this, callback);
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype__org_gwtproject_resources_client_ResourceCallback(/** ExternalTextResourcePrototype */ $outer_this, /** ResourceCallback<TextResource> */ callback) {
  this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_callback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback = callback;
 }
 /** @override */
 m_onError__org_gwtproject_http_client_Request__java_lang_Throwable(/** Request */ request, /** Throwable */ exception) {
  this.m_onFailure__java_lang_Throwable(exception);
 }
 /** @override */
 m_onFailure__java_lang_Throwable(/** Throwable */ exception) {
  this.f_callback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.m_onError__org_gwtproject_resources_client_ResourceException(ResourceException.$create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String__java_lang_Throwable(this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback, "Unable to retrieve external resource", exception));
 }
 /** @override */
 m_onResponseReceived__org_gwtproject_http_client_Request__org_gwtproject_http_client_Response(/** Request */ request, /** Response */ response) {
  let responseText = response.m_getText__();
  let jso = ExternalTextResourcePrototype.m_evalObject__java_lang_String(responseText);
  this.m_onSuccess__elemental2_core_JsObject(jso);
 }
 
 m_onSuccess__elemental2_core_JsObject(/** Object */ jso) {
  if ($Equality.$same(jso, null)) {
   this.f_callback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.m_onError__org_gwtproject_resources_client_ResourceException(ResourceException.$create__org_gwtproject_resources_client_ResourcePrototype__java_lang_String(this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback, "eval() returned null"));
   return;
  }
  let resourceText = ExternalTextResourcePrototype.m_extractString__elemental2_core_JsObject__int(jso, this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_);
  $Arrays.$set(this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_, this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_, $1.$create__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__java_lang_String(this, resourceText));
  this.f_callback__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.m_onSuccess__org_gwtproject_resources_client_ResourcePrototype(this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_cache__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_[this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_index__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_]);
 }
 //Bridge method.
 /** @override */
 m_onSuccess__java_lang_Object(/** * */ arg0) {
  this.m_onSuccess__elemental2_core_JsObject(/**@type {Object}*/ ($Casts.$to(arg0, $Overlay)));
 }
 
 static $clinit() {
  ETRCallback.$clinit = () =>{};
  ETRCallback.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ETRCallback;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsObject.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourceException = goog.module.get('org.gwtproject.resources.client.ResourceException$impl');
  ExternalTextResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ETRCallback, 'org.gwtproject.resources.client.impl.ExternalTextResourcePrototype$ETRCallback');

RequestCallback.$markImplementor(ETRCallback);
AsyncCallback.$markImplementor(ETRCallback);

exports = ETRCallback; 
//# sourceMappingURL=ExternalTextResourcePrototype$ETRCallback.js.map