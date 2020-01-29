goog.module('org.gwtproject.safecss.shared.SafeStyles$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Serializable}
 */
class SafeStyles {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_asString__() {}
 /**
  * @abstract
  * @param {*} anObject
  * @return {boolean}
  * @public
  */
 equals(anObject) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 hashCode() {}
 /**
  * @param {?function():?string} fn
  * @return {SafeStyles}
  * @public
  */
 static $adapt(fn) {
  SafeStyles.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeStyles.$clinit = () =>{};
  SafeStyles.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Serializable.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_safecss_shared_SafeStyles = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safecss_shared_SafeStyles;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeStyles, 'org.gwtproject.safecss.shared.SafeStyles');

SafeStyles.$markImplementor(/** @type {Function} */ (SafeStyles));

exports = SafeStyles; 
//# sourceMappingURL=SafeStyles.js.map