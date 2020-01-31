goog.module('org.gwtproject.resources.client.CssResource.Strict.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Strict = goog.require('org.gwtproject.resources.client.CssResource.Strict$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Strict}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_resources_client_CssResource_Strict_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_CssResource_Strict_$LambdaAdaptor__org_gwtproject_resources_client_CssResource_Strict_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_resources_client_CssResource_Strict_$LambdaAdaptor__org_gwtproject_resources_client_CssResource_Strict_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_CssResource_Strict_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_CssResource_Strict_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.CssResource$Strict$$LambdaAdaptor');

Strict.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CssResource$Strict$$LambdaAdaptor.js.map