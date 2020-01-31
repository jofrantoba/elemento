goog.module('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CssResourceBase = goog.require('org.gwtproject.resources.client.CssResourceBase$impl');

/**
 * @implements {CssResourceBase}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor__org_gwtproject_resources_client_CssResourceBase_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor__org_gwtproject_resources_client_CssResourceBase_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_getName__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.CssResourceBase$$LambdaAdaptor');

CssResourceBase.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CssResourceBase$$LambdaAdaptor.js.map