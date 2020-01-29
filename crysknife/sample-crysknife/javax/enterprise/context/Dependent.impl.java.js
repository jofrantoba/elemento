goog.module('javax.enterprise.context.Dependent$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.context.Dependent.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Dependent {
 /**
  * @param {?function():Class<?>} fn
  * @return {Dependent}
  * @public
  */
 static $adapt(fn) {
  Dependent.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Dependent.$clinit = () =>{};
  Dependent.$loadModules();
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
  classConstructor.prototype.$implements__javax_enterprise_context_Dependent = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_Dependent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.context.Dependent.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Dependent, 'javax.enterprise.context.Dependent');

Dependent.$markImplementor(/** @type {Function} */ (Dependent));

exports = Dependent; 
//# sourceMappingURL=Dependent.js.map