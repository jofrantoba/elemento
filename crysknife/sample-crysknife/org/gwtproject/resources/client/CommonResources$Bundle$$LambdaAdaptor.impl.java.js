goog.module('org.gwtproject.resources.client.CommonResources.Bundle.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Bundle = goog.require('org.gwtproject.resources.client.CommonResources.Bundle$impl');

let InlineBlockStyle = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');

/**
 * @implements {Bundle}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():InlineBlockStyle */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():InlineBlockStyle}*/
  this.f_$$fn__org_gwtproject_resources_client_CommonResources_Bundle_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_CommonResources_Bundle_$LambdaAdaptor__org_gwtproject_resources_client_CommonResources_Bundle_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_resources_client_CommonResources_Bundle_$LambdaAdaptor__org_gwtproject_resources_client_CommonResources_Bundle_$JsFunction(/** ?function():InlineBlockStyle */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_CommonResources_Bundle_$LambdaAdaptor = fn;
 }
 /** @return {InlineBlockStyle} */
 m_inlineBlockStyle__() {
  let /** ?function():InlineBlockStyle */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_CommonResources_Bundle_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.CommonResources$Bundle$$LambdaAdaptor');

Bundle.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CommonResources$Bundle$$LambdaAdaptor.js.map