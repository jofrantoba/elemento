goog.module('org.gwtproject.safehtml.shared.SafeUri$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SafeUri {
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
  * @return {SafeUri}
  * @public
  */
 static $adapt(fn) {
  SafeUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeUri.$clinit = () =>{};
  SafeUri.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_SafeUri = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeUri;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeUri, 'org.gwtproject.safehtml.shared.SafeUri');

SafeUri.$markImplementor(/** @type {Function} */ (SafeUri));

exports = SafeUri; 
//# sourceMappingURL=SafeUri.js.map