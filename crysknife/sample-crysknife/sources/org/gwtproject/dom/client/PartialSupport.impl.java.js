goog.module('org.gwtproject.dom.client.PartialSupport$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.client.PartialSupport.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PartialSupport {
 /**
  * @param {?function():Class<?>} fn
  * @return {PartialSupport}
  * @public
  */
 static $adapt(fn) {
  PartialSupport.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  PartialSupport.$clinit = () =>{};
  PartialSupport.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_client_PartialSupport = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_client_PartialSupport;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.client.PartialSupport.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PartialSupport, 'org.gwtproject.dom.client.PartialSupport');

PartialSupport.$markImplementor(/** @type {Function} */ (PartialSupport));

exports = PartialSupport; 
//# sourceMappingURL=PartialSupport.js.map