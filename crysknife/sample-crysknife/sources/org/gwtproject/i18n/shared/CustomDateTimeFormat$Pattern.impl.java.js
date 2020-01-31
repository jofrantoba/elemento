goog.module('org.gwtproject.i18n.shared.CustomDateTimeFormat.Pattern$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Pattern {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Pattern.$clinit = () =>{};
  Pattern.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat_Pattern = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat_Pattern;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Pattern, 'org.gwtproject.i18n.shared.CustomDateTimeFormat$Pattern');

Pattern.$markImplementor(/** @type {Function} */ (Pattern));

exports = Pattern; 
//# sourceMappingURL=CustomDateTimeFormat$Pattern.js.map