goog.module('org.gwtproject.i18n.shared.GwtLocaleFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let GwtLocale = goog.forwardDeclare('org.gwtproject.i18n.shared.GwtLocale$impl');

/**
 * @interface
 */
class GwtLocaleFactory {
 /**
  * @abstract
  * @param {?string} language
  * @param {?string} script
  * @param {?string} region
  * @param {?string} variant
  * @return {GwtLocale}
  * @public
  */
 m_fromComponents__java_lang_String__java_lang_String__java_lang_String__java_lang_String(language, script, region, variant) {}
 /**
  * @abstract
  * @param {?string} localeName
  * @return {GwtLocale}
  * @public
  */
 m_fromString__java_lang_String(localeName) {}
 /**
  * @abstract
  * @return {GwtLocale}
  * @public
  */
 m_getDefault__() {}
 /**
  * @public
  */
 static $clinit() {
  GwtLocaleFactory.$clinit = () =>{};
  GwtLocaleFactory.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_GwtLocaleFactory = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_GwtLocaleFactory;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GwtLocaleFactory, 'org.gwtproject.i18n.shared.GwtLocaleFactory');

GwtLocaleFactory.$markImplementor(/** @type {Function} */ (GwtLocaleFactory));

exports = GwtLocaleFactory; 
//# sourceMappingURL=GwtLocaleFactory.js.map