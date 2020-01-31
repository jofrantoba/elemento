goog.module('org.gwtproject.i18n.client.Localizable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Localizable = goog.require('org.gwtproject.i18n.shared.Localizable$impl');

/**
 * @interface
 * @extends {Localizable}
 */
class org_gwtproject_i18n_client_Localizable {
 
 static $clinit() {
  org_gwtproject_i18n_client_Localizable.$clinit = () =>{};
  org_gwtproject_i18n_client_Localizable.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Localizable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Localizable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Localizable;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(org_gwtproject_i18n_client_Localizable, 'org.gwtproject.i18n.client.Localizable');

org_gwtproject_i18n_client_Localizable.$markImplementor(/** @type {Function} */ (org_gwtproject_i18n_client_Localizable));

exports = org_gwtproject_i18n_client_Localizable; 
//# sourceMappingURL=Localizable.js.map