goog.module('javax.annotation.PreDestroy$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.annotation.PreDestroy.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PreDestroy {
 /**
  * @param {?function():Class<?>} fn
  * @return {PreDestroy}
  * @public
  */
 static $adapt(fn) {
  PreDestroy.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  PreDestroy.$clinit = () =>{};
  PreDestroy.$loadModules();
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
  classConstructor.prototype.$implements__javax_annotation_PreDestroy = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_annotation_PreDestroy;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.annotation.PreDestroy.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PreDestroy, 'javax.annotation.PreDestroy');

PreDestroy.$markImplementor(/** @type {Function} */ (PreDestroy));

exports = PreDestroy; 
//# sourceMappingURL=PreDestroy.js.map