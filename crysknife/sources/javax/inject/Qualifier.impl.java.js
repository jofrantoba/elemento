goog.module('javax.inject.Qualifier$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Qualifier.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Qualifier {
 /**
  * @param {?function():Class<?>} fn
  * @return {Qualifier}
  * @public
  */
 static $adapt(fn) {
  Qualifier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Qualifier.$clinit = () =>{};
  Qualifier.$loadModules();
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
  classConstructor.prototype.$implements__javax_inject_Qualifier = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_inject_Qualifier;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Qualifier.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Qualifier, 'javax.inject.Qualifier');

Qualifier.$markImplementor(/** @type {Function} */ (Qualifier));

exports = Qualifier; 
//# sourceMappingURL=Qualifier.js.map