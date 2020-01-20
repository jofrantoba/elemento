goog.module('org.gwtproject.safehtml.shared.SafeHtml$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Serializable}
 */
class SafeHtml {
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
  * @return {SafeHtml}
  * @public
  */
 static $adapt(fn) {
  SafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeHtml.$clinit = () =>{};
  SafeHtml.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_SafeHtml = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeHtml;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeHtml, 'org.gwtproject.safehtml.shared.SafeHtml');

SafeHtml.$markImplementor(/** @type {Function} */ (SafeHtml));

exports = SafeHtml; 
//# sourceMappingURL=SafeHtml.js.map