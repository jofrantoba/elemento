goog.module('org.gwtproject.i18n.shared.GwtLocaleFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let GwtLocale = goog.forwardDeclare('org.gwtproject.i18n.shared.GwtLocale$impl');

/**
 * @interface
 */
class GwtLocaleFactory {
 /** @abstract @return {GwtLocale} */
 m_fromComponents__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ language, /** ?string */ script, /** ?string */ region, /** ?string */ variant) {}
 /** @abstract @return {GwtLocale} */
 m_fromString__java_lang_String(/** ?string */ localeName) {}
 /** @abstract @return {GwtLocale} */
 m_getDefault__() {}
 
 static $clinit() {
  GwtLocaleFactory.$clinit = () =>{};
  GwtLocaleFactory.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_GwtLocaleFactory = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_GwtLocaleFactory;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GwtLocaleFactory, 'org.gwtproject.i18n.shared.GwtLocaleFactory');

GwtLocaleFactory.$markImplementor(/** @type {Function} */ (GwtLocaleFactory));

exports = GwtLocaleFactory; 
//# sourceMappingURL=GwtLocaleFactory.js.map