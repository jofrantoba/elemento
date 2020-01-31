goog.module('org.gwtproject.i18n.client.LocalizableResource.DefaultLocale$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultLocale {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  DefaultLocale.$clinit = () =>{};
  DefaultLocale.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultLocale, 'org.gwtproject.i18n.client.LocalizableResource$DefaultLocale');

DefaultLocale.$markImplementor(/** @type {Function} */ (DefaultLocale));

/**@const {?string}*/
DefaultLocale.f_DEFAULT_LOCALE__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale = "en";

exports = DefaultLocale; 
//# sourceMappingURL=LocalizableResource$DefaultLocale.js.map