goog.module('org.gwtproject.regexp.shared.RegExp$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JavaRegExpFactory = goog.forwardDeclare('org.gwtproject.regexp.shared.JavaRegExpFactory$impl');
let MatchResult = goog.forwardDeclare('org.gwtproject.regexp.shared.MatchResult$impl');
let SplitResult = goog.forwardDeclare('org.gwtproject.regexp.shared.SplitResult$impl');

/**
 * @interface
 */
class RegExp {
 /**
  * @param {?string} pattern
  * @return {RegExp}
  * @public
  */
 static m_compile__java_lang_String(pattern) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_compile__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern);
 }
 /**
  * @param {?string} pattern
  * @param {?string} flags
  * @return {RegExp}
  * @public
  */
 static m_compile__java_lang_String__java_lang_String(pattern, flags) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_compile__java_lang_String__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern, flags);
 }
 /**
  * @param {?string} input
  * @return {?string}
  * @public
  */
 static m_quote__java_lang_String(input) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_quote__java_lang_String_$pp_org_gwtproject_regexp_shared(input);
 }
 /**
  * @abstract
  * @param {?string} input
  * @return {MatchResult}
  * @public
  */
 m_exec__java_lang_String(input) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_getGlobal__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_getIgnoreCase__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getLastIndex__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_getMultiline__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getSource__() {}
 /**
  * @abstract
  * @param {?string} input
  * @param {?string} replacement
  * @return {?string}
  * @public
  */
 m_replace__java_lang_String__java_lang_String(input, replacement) {}
 /**
  * @abstract
  * @param {number} lastIndex
  * @public
  */
 m_setLastIndex__int(lastIndex) {}
 /**
  * @abstract
  * @param {?string} input
  * @return {SplitResult}
  * @public
  */
 m_split__java_lang_String(input) {}
 /**
  * @abstract
  * @param {?string} input
  * @param {number} limit
  * @return {SplitResult}
  * @public
  */
 m_split__java_lang_String__int(input, limit) {}
 /**
  * @abstract
  * @param {?string} input
  * @return {boolean}
  * @public
  */
 m_test__java_lang_String(input) {}
 /**
  * @public
  */
 static $clinit() {
  RegExp.$clinit = () =>{};
  RegExp.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_regexp_shared_RegExp = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_RegExp;
 }
 /**
  * @public
  */
 static $loadModules() {
  JavaRegExpFactory = goog.module.get('org.gwtproject.regexp.shared.JavaRegExpFactory$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RegExp, 'org.gwtproject.regexp.shared.RegExp');

RegExp.$markImplementor(/** @type {Function} */ (RegExp));

exports = RegExp; 
//# sourceMappingURL=RegExp.js.map