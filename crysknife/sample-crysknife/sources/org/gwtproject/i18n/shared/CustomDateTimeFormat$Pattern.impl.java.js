goog.module('org.gwtproject.i18n.shared.CustomDateTimeFormat.Pattern$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Pattern {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  Pattern.$clinit = () =>{};
  Pattern.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat_Pattern = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat_Pattern;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Pattern, 'org.gwtproject.i18n.shared.CustomDateTimeFormat$Pattern');

Pattern.$markImplementor(/** @type {Function} */ (Pattern));

exports = Pattern; 
//# sourceMappingURL=CustomDateTimeFormat$Pattern.js.map