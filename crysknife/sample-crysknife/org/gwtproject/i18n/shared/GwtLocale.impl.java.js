goog.module('org.gwtproject.i18n.shared.GwtLocale$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @interface
 * @extends {Comparable<GwtLocale>}
 */
class GwtLocale {
 /**
  * @abstract
  * @param {GwtLocale} o
  * @return {number}
  * @public
  */
 m_compareTo__org_gwtproject_i18n_shared_GwtLocale(o) {}
 /**
  * @abstract
  * @return {List<GwtLocale>}
  * @public
  */
 m_getAliases__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getAsString__() {}
 /**
  * @abstract
  * @return {GwtLocale}
  * @public
  */
 m_getCanonicalForm__() {}
 /**
  * @abstract
  * @return {List<GwtLocale>}
  * @public
  */
 m_getCompleteSearchList__() {}
 /**
  * @abstract
  * @return {List<GwtLocale>}
  * @public
  */
 m_getInheritanceChain__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getLanguage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getLanguageNotNull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getRegion__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getRegionNotNull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getScript__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getScriptNotNull__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getVariant__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getVariantNotNull__() {}
 /**
  * @abstract
  * @param {GwtLocale} parent
  * @return {boolean}
  * @public
  */
 m_inheritsFrom__org_gwtproject_i18n_shared_GwtLocale(parent) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isDefault__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 toString() {}
 /**
  * @abstract
  * @param {GwtLocale} other
  * @return {boolean}
  * @public
  */
 m_usesSameScript__org_gwtproject_i18n_shared_GwtLocale(other) {}
 /**
  * @public
  */
 static $clinit() {
  GwtLocale.$clinit = () =>{};
  GwtLocale.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Comparable.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_GwtLocale = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_GwtLocale;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GwtLocale, 'org.gwtproject.i18n.shared.GwtLocale');

GwtLocale.$markImplementor(/** @type {Function} */ (GwtLocale));

/** @public {?string} @const */
GwtLocale.f_DEFAULT_LOCALE__org_gwtproject_i18n_shared_GwtLocale = "default";

exports = GwtLocale; 
//# sourceMappingURL=GwtLocale.js.map