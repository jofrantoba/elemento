goog.module('org.treblereel.gwt.crysknife.client.internal.Factory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

/**
 * @template T
 * @implements {Factory<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():T}*/
  this.f_$$fn__org_treblereel_gwt_crysknife_client_internal_Factory_$LambdaAdaptor;
  this.$ctor__org_treblereel_gwt_crysknife_client_internal_Factory_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_internal_Factory_$JsFunction(fn);
 }
 
 $ctor__org_treblereel_gwt_crysknife_client_internal_Factory_$LambdaAdaptor__org_treblereel_gwt_crysknife_client_internal_Factory_$JsFunction(/** ?function():T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_treblereel_gwt_crysknife_client_internal_Factory_$LambdaAdaptor = fn;
 }
 /** @return {T} */
 m_get__() {
  let /** ?function():T */ $function;
  return ($function = this.f_$$fn__org_treblereel_gwt_crysknife_client_internal_Factory_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.treblereel.gwt.crysknife.client.internal.Factory$$LambdaAdaptor');

Factory.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Factory$$LambdaAdaptor.js.map