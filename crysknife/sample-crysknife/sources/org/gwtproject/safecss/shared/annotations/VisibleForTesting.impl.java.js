goog.module('org.gwtproject.safecss.shared.annotations.VisibleForTesting$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safecss.shared.annotations.VisibleForTesting.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class VisibleForTesting {
 /**
  * @param {?function():Class<?>} fn
  * @return {VisibleForTesting}
  * @public
  */
 static $adapt(fn) {
  VisibleForTesting.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  VisibleForTesting.$clinit = () =>{};
  VisibleForTesting.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safecss_shared_annotations_VisibleForTesting = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safecss_shared_annotations_VisibleForTesting;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safecss.shared.annotations.VisibleForTesting.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(VisibleForTesting, 'org.gwtproject.safecss.shared.annotations.VisibleForTesting');

VisibleForTesting.$markImplementor(/** @type {Function} */ (VisibleForTesting));

exports = VisibleForTesting; 
//# sourceMappingURL=VisibleForTesting.js.map