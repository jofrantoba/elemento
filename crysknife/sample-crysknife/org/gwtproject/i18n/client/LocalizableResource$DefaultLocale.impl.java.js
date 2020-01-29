goog.module('org.gwtproject.i18n.client.LocalizableResource.DefaultLocale$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultLocale {
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
  DefaultLocale.$clinit = () =>{};
  DefaultLocale.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultLocale, 'org.gwtproject.i18n.client.LocalizableResource$DefaultLocale');

DefaultLocale.$markImplementor(/** @type {Function} */ (DefaultLocale));

/** @public {?string} @const */
DefaultLocale.f_DEFAULT_LOCALE__org_gwtproject_i18n_client_LocalizableResource_DefaultLocale = "en";

exports = DefaultLocale; 
//# sourceMappingURL=LocalizableResource$DefaultLocale.js.map