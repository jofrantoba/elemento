goog.module('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

/**
 * @implements {AriaAttributeType}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():?string} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():?string} */
  this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor;
  this.$ctor__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor__org_gwtproject_aria_client_AriaAttributeType_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor__org_gwtproject_aria_client_AriaAttributeType_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_aria_client_AriaAttributeType_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.aria.client.AriaAttributeType$$LambdaAdaptor');

AriaAttributeType.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AriaAttributeType$$LambdaAdaptor.js.map