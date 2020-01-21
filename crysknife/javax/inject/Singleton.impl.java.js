goog.module('javax.inject.Singleton$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Singleton.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Singleton {
 /**
  * @param {?function():Class<?>} fn
  * @return {Singleton}
  * @public
  */
 static $adapt(fn) {
  Singleton.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Singleton.$clinit = () =>{};
  Singleton.$loadModules();
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
  classConstructor.prototype.$implements__javax_inject_Singleton = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_inject_Singleton;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Singleton.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Singleton, 'javax.inject.Singleton');

Singleton.$markImplementor(/** @type {Function} */ (Singleton));

exports = Singleton; 
//# sourceMappingURL=Singleton.js.map