goog.module('javax.enterprise.inject.Default$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.inject.Default.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Default {
 /**
  * @param {?function():Class<?>} fn
  * @return {Default}
  * @public
  */
 static $adapt(fn) {
  Default.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Default.$clinit = () =>{};
  Default.$loadModules();
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
  classConstructor.prototype.$implements__javax_enterprise_inject_Default = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Default;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.inject.Default.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Default, 'javax.enterprise.inject.Default');

Default.$markImplementor(/** @type {Function} */ (Default));

exports = Default; 
//# sourceMappingURL=Default.js.map