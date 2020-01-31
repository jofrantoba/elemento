goog.module('org.gwtproject.i18n.client.LocalizableResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Localizable = goog.require('org.gwtproject.i18n.client.Localizable$impl');

/**
 * @interface
 * @extends {Localizable}
 */
class LocalizableResource {
 
 static $clinit() {
  LocalizableResource.$clinit = () =>{};
  LocalizableResource.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Localizable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocalizableResource, 'org.gwtproject.i18n.client.LocalizableResource');

LocalizableResource.$markImplementor(/** @type {Function} */ (LocalizableResource));

exports = LocalizableResource; 
//# sourceMappingURL=LocalizableResource.js.map