goog.module('org.gwtproject.i18n.client.LocalizableResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Localizable = goog.require('org.gwtproject.i18n.client.Localizable$impl');

/**
 * @interface
 * @extends {Localizable}
 */
class LocalizableResource {
 /**
  * @public
  */
 static $clinit() {
  LocalizableResource.$clinit = () =>{};
  LocalizableResource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Localizable.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocalizableResource, 'org.gwtproject.i18n.client.LocalizableResource');

LocalizableResource.$markImplementor(/** @type {Function} */ (LocalizableResource));

exports = LocalizableResource; 
//# sourceMappingURL=LocalizableResource.js.map