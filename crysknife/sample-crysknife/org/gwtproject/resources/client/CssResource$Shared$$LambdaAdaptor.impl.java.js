goog.module('org.gwtproject.resources.client.CssResource.Shared.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Shared = goog.require('org.gwtproject.resources.client.CssResource.Shared$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Shared}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_resources_client_CssResource_Shared_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_CssResource_Shared_$LambdaAdaptor__org_gwtproject_resources_client_CssResource_Shared_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_resources_client_CssResource_Shared_$LambdaAdaptor__org_gwtproject_resources_client_CssResource_Shared_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_CssResource_Shared_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_CssResource_Shared_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.CssResource$Shared$$LambdaAdaptor');

Shared.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CssResource$Shared$$LambdaAdaptor.js.map