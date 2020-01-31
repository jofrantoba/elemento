goog.module('org.treblereel.gwt.crysknife.client.Interceptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Proxy_$Overlay = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Proxy.$Overlay$impl');
let ProxyGetInterceptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.ProxyGetInterceptor$impl');
let ProxySetInterceptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.ProxySetInterceptor$impl');

class Interceptor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Proxy}*/
  this.f_proxy__org_treblereel_gwt_crysknife_client_Interceptor_;
  /**@type {?function(*, ?string, *):*}*/
  this.f_get__org_treblereel_gwt_crysknife_client_Interceptor_;
  /**@type {?function(*, ?string, *):boolean}*/
  this.f_set__org_treblereel_gwt_crysknife_client_Interceptor_;
 }
 /** @return {!Interceptor} */
 static $create__java_lang_Object(/** * */ target) {
  Interceptor.$clinit();
  let $instance = new Interceptor();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_Interceptor__java_lang_Object(target);
  return $instance;
 }
 
 $ctor__org_treblereel_gwt_crysknife_client_Interceptor__java_lang_Object(/** * */ target) {
  this.$ctor__java_lang_Object__();
  this.f_get__org_treblereel_gwt_crysknife_client_Interceptor_ = ProxyGetInterceptor.$create__java_lang_Object(target);
  this.f_set__org_treblereel_gwt_crysknife_client_Interceptor_ = ProxySetInterceptor.$create__java_lang_Object(target);
  let holder = /**@type {Object<string, *>}*/ ($Overlay.m_of__());
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(holder, "get", this.f_get__org_treblereel_gwt_crysknife_client_Interceptor_);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(holder, "set", this.f_set__org_treblereel_gwt_crysknife_client_Interceptor_);
  this.f_proxy__org_treblereel_gwt_crysknife_client_Interceptor_ = new Proxy(target, holder);
 }
 /** @return {Interceptor} */
 m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(/** ?string */ obfuscatedPropertyName, /** BiFunction<*, ?string, *> */ function_1) {
  ProxyGetInterceptor.m_addProperty__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction(this.f_get__org_treblereel_gwt_crysknife_client_Interceptor_, obfuscatedPropertyName, function_1);
  return this;
 }
 /** @return {Interceptor} */
 m_addGetMethodInterceptor__java_lang_String__java_util_function_BiFunction(/** ?string */ obfuscatedPropertyName, /** BiFunction */ function_1) {
  ProxyGetInterceptor.m_addMethod__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction(this.f_get__org_treblereel_gwt_crysknife_client_Interceptor_, obfuscatedPropertyName, function_1);
  return this;
 }
 /** @template T @return {T} */
 m_getProxy__() {
  return /**@type {T}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_proxy__org_treblereel_gwt_crysknife_client_Interceptor_));
 }
 
 static $clinit() {
  Interceptor.$clinit = () =>{};
  Interceptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Interceptor;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  ProxyGetInterceptor = goog.module.get('org.treblereel.gwt.crysknife.client.ProxyGetInterceptor$impl');
  ProxySetInterceptor = goog.module.get('org.treblereel.gwt.crysknife.client.ProxySetInterceptor$impl');
 }
 
}
$Util.$setClassMetadata(Interceptor, 'org.treblereel.gwt.crysknife.client.Interceptor');

exports = Interceptor; 
//# sourceMappingURL=Interceptor.js.map