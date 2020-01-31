goog.module('org.gwtproject.uibinder.client.UiFactory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiFactory = goog.require('org.gwtproject.uibinder.client.UiFactory$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {UiFactory}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_uibinder_client_UiFactory_$LambdaAdaptor;
  this.$ctor__org_gwtproject_uibinder_client_UiFactory_$LambdaAdaptor__org_gwtproject_uibinder_client_UiFactory_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_uibinder_client_UiFactory_$LambdaAdaptor__org_gwtproject_uibinder_client_UiFactory_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_uibinder_client_UiFactory_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_uibinder_client_UiFactory_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.uibinder.client.UiFactory$$LambdaAdaptor');

UiFactory.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=UiFactory$$LambdaAdaptor.js.map