goog.module('org.gwtproject.regexp.shared.SplitResult$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SplitResult {
 /**
  * @abstract
  * @param {number} index
  * @return {?string}
  * @public
  */
 m_get__int(index) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_length__() {}
 /**
  * @abstract
  * @param {number} index
  * @param {?string} value
  * @public
  */
 m_set__int__java_lang_String(index, value) {}
 /**
  * @public
  */
 static $clinit() {
  SplitResult.$clinit = () =>{};
  SplitResult.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_regexp_shared_SplitResult = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_SplitResult;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SplitResult, 'org.gwtproject.regexp.shared.SplitResult');

SplitResult.$markImplementor(/** @type {Function} */ (SplitResult));

exports = SplitResult; 
//# sourceMappingURL=SplitResult.js.map