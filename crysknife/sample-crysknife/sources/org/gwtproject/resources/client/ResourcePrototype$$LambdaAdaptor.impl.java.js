goog.module('org.gwtproject.resources.client.ResourcePrototype.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @implements {ResourcePrototype}
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
  this.f_$$fn__org_gwtproject_resources_client_ResourcePrototype_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_ResourcePrototype_$LambdaAdaptor__org_gwtproject_resources_client_ResourcePrototype_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_resources_client_ResourcePrototype_$LambdaAdaptor__org_gwtproject_resources_client_ResourcePrototype_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_ResourcePrototype_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getName__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_ResourcePrototype_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.ResourcePrototype$$LambdaAdaptor');

ResourcePrototype.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ResourcePrototype$$LambdaAdaptor.js.map