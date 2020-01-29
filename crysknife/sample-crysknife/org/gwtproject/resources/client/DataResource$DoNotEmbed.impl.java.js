goog.module('org.gwtproject.resources.client.DataResource.DoNotEmbed$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.DataResource.DoNotEmbed.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DoNotEmbed {
 /**
  * @param {?function():Class<?>} fn
  * @return {DoNotEmbed}
  * @public
  */
 static $adapt(fn) {
  DoNotEmbed.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DoNotEmbed.$clinit = () =>{};
  DoNotEmbed.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_DataResource_DoNotEmbed = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_DataResource_DoNotEmbed;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.DataResource.DoNotEmbed.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DoNotEmbed, 'org.gwtproject.resources.client.DataResource$DoNotEmbed');

DoNotEmbed.$markImplementor(/** @type {Function} */ (DoNotEmbed));

exports = DoNotEmbed; 
//# sourceMappingURL=DataResource$DoNotEmbed.js.map