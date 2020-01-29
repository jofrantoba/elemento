goog.module('org.gwtproject.regexp.shared.GwtIncompatible$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.regexp.shared.GwtIncompatible.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GwtIncompatible {
 /**
  * @param {?function():Class<?>} fn
  * @return {GwtIncompatible}
  * @public
  */
 static $adapt(fn) {
  GwtIncompatible.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  GwtIncompatible.$clinit = () =>{};
  GwtIncompatible.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_regexp_shared_GwtIncompatible = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_GwtIncompatible;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.regexp.shared.GwtIncompatible.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GwtIncompatible, 'org.gwtproject.regexp.shared.GwtIncompatible');

GwtIncompatible.$markImplementor(/** @type {Function} */ (GwtIncompatible));

exports = GwtIncompatible; 
//# sourceMappingURL=GwtIncompatible.js.map