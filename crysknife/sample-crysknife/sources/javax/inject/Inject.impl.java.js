goog.module('javax.inject.Inject$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Inject.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Inject {
 /**
  * @param {?function():Class<?>} fn
  * @return {Inject}
  * @public
  */
 static $adapt(fn) {
  Inject.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Inject.$clinit = () =>{};
  Inject.$loadModules();
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
  classConstructor.prototype.$implements__javax_inject_Inject = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_inject_Inject;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Inject.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Inject, 'javax.inject.Inject');

Inject.$markImplementor(/** @type {Function} */ (Inject));

exports = Inject; 
//# sourceMappingURL=Inject.js.map