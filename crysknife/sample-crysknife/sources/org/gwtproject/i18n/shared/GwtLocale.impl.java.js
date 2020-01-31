goog.module('org.gwtproject.i18n.shared.GwtLocale$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @interface
 * @extends {Comparable<GwtLocale>}
 */
class GwtLocale {
 /** @abstract @return {number} */
 m_compareTo__org_gwtproject_i18n_shared_GwtLocale(/** GwtLocale */ o) {}
 /** @abstract @return {List<GwtLocale>} */
 m_getAliases__() {}
 /** @abstract @return {?string} */
 m_getAsString__() {}
 /** @abstract @return {GwtLocale} */
 m_getCanonicalForm__() {}
 /** @abstract @return {List<GwtLocale>} */
 m_getCompleteSearchList__() {}
 /** @abstract @return {List<GwtLocale>} */
 m_getInheritanceChain__() {}
 /** @abstract @return {?string} */
 m_getLanguage__() {}
 /** @abstract @return {?string} */
 m_getLanguageNotNull__() {}
 /** @abstract @return {?string} */
 m_getRegion__() {}
 /** @abstract @return {?string} */
 m_getRegionNotNull__() {}
 /** @abstract @return {?string} */
 m_getScript__() {}
 /** @abstract @return {?string} */
 m_getScriptNotNull__() {}
 /** @abstract @return {?string} */
 m_getVariant__() {}
 /** @abstract @return {?string} */
 m_getVariantNotNull__() {}
 /** @abstract @return {boolean} */
 m_inheritsFrom__org_gwtproject_i18n_shared_GwtLocale(/** GwtLocale */ parent) {}
 /** @abstract @return {boolean} */
 m_isDefault__() {}
 /** @abstract @return {?string} */
 toString() {}
 /** @abstract @return {boolean} */
 m_usesSameScript__org_gwtproject_i18n_shared_GwtLocale(/** GwtLocale */ other) {}
 
 static $clinit() {
  GwtLocale.$clinit = () =>{};
  GwtLocale.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Comparable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_shared_GwtLocale = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_GwtLocale;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GwtLocale, 'org.gwtproject.i18n.shared.GwtLocale');

GwtLocale.$markImplementor(/** @type {Function} */ (GwtLocale));

/**@const {?string}*/
GwtLocale.f_DEFAULT_LOCALE__org_gwtproject_i18n_shared_GwtLocale = "default";

exports = GwtLocale; 
//# sourceMappingURL=GwtLocale.js.map