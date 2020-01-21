goog.module('javax.inject.Scope$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Scope.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Scope {
 /**
  * @param {?function():Class<?>} fn
  * @return {Scope}
  * @public
  */
 static $adapt(fn) {
  Scope.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Scope.$clinit = () =>{};
  Scope.$loadModules();
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
  classConstructor.prototype.$implements__javax_inject_Scope = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_inject_Scope;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Scope.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Scope, 'javax.inject.Scope');

Scope.$markImplementor(/** @type {Function} */ (Scope));

exports = Scope; 
//# sourceMappingURL=Scope.js.map