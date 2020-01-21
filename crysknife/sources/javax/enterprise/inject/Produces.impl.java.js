goog.module('javax.enterprise.inject.Produces$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.inject.Produces.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Produces {
 /**
  * @param {?function():Class<?>} fn
  * @return {Produces}
  * @public
  */
 static $adapt(fn) {
  Produces.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Produces.$clinit = () =>{};
  Produces.$loadModules();
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
  classConstructor.prototype.$implements__javax_enterprise_inject_Produces = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Produces;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.inject.Produces.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Produces, 'javax.enterprise.inject.Produces');

Produces.$markImplementor(/** @type {Function} */ (Produces));

exports = Produces; 
//# sourceMappingURL=Produces.js.map