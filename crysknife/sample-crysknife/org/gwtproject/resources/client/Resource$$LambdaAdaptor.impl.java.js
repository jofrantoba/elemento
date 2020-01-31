goog.module('org.gwtproject.resources.client.Resource.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resource = goog.require('org.gwtproject.resources.client.Resource$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Resource}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_resources_client_Resource_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_Resource_$LambdaAdaptor__org_gwtproject_resources_client_Resource_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_resources_client_Resource_$LambdaAdaptor__org_gwtproject_resources_client_Resource_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_Resource_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_Resource_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.Resource$$LambdaAdaptor');

Resource.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Resource$$LambdaAdaptor.js.map