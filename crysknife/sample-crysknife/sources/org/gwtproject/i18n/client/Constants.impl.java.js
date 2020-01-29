goog.module('org.gwtproject.i18n.client.Constants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizableResource = goog.require('org.gwtproject.i18n.client.LocalizableResource$impl');

/**
 * @interface
 * @extends {LocalizableResource}
 */
class Constants {
 /**
  * @public
  */
 static $clinit() {
  Constants.$clinit = () =>{};
  Constants.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  LocalizableResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Constants, 'org.gwtproject.i18n.client.Constants');

Constants.$markImplementor(/** @type {Function} */ (Constants));

exports = Constants; 
//# sourceMappingURL=Constants.js.map