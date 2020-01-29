goog.module('org.gwtproject.i18n.client.Localizable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Localizable = goog.require('org.gwtproject.i18n.shared.Localizable$impl');

/**
 * @interface
 * @extends {Localizable}
 */
class org_gwtproject_i18n_client_Localizable {
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_i18n_client_Localizable.$clinit = () =>{};
  org_gwtproject_i18n_client_Localizable.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Localizable = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Localizable;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(org_gwtproject_i18n_client_Localizable, 'org.gwtproject.i18n.client.Localizable');

org_gwtproject_i18n_client_Localizable.$markImplementor(/** @type {Function} */ (org_gwtproject_i18n_client_Localizable));

exports = org_gwtproject_i18n_client_Localizable; 
//# sourceMappingURL=Localizable.js.map