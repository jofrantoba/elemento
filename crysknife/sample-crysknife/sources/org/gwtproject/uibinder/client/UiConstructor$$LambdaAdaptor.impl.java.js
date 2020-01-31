goog.module('org.gwtproject.uibinder.client.UiConstructor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiConstructor = goog.require('org.gwtproject.uibinder.client.UiConstructor$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {UiConstructor}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_uibinder_client_UiConstructor_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiConstructor_$LambdaAdaptor__org_gwtproject_uibinder_client_UiConstructor_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_uibinder_client_UiConstructor_$LambdaAdaptor__org_gwtproject_uibinder_client_UiConstructor_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiConstructor_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiConstructor_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiConstructor$$LambdaAdaptor');

UiConstructor.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiConstructor$$LambdaAdaptor.js.map