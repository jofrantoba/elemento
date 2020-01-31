goog.module('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

/**
 * @implements {AriaAttributeType}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor;
  this.$ctor__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor__org_gwtproject_aria_client_AriaAttributeType_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor__org_gwtproject_aria_client_AriaAttributeType_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_getAriaValue__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.aria.client.AriaAttributeType$$LambdaAdaptor');

AriaAttributeType.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AriaAttributeType$$LambdaAdaptor.js.map