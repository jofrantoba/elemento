goog.module('org.gwtproject.regexp.shared.MatchResult$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class MatchResult {
 /**
  * @abstract
  * @param {number} index
  * @return {?string}
  * @public
  */
 m_getGroup__int(index) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getGroupCount__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getIndex__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getInput__() {}
 /**
  * @public
  */
 static $clinit() {
  MatchResult.$clinit = () =>{};
  MatchResult.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_regexp_shared_MatchResult = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_MatchResult;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MatchResult, 'org.gwtproject.regexp.shared.MatchResult');

MatchResult.$markImplementor(/** @type {Function} */ (MatchResult));

exports = MatchResult; 
//# sourceMappingURL=MatchResult.js.map