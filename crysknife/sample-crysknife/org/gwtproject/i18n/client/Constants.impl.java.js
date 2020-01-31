goog.module('org.gwtproject.i18n.client.Constants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizableResource = goog.require('org.gwtproject.i18n.client.LocalizableResource$impl');

/**
 * @interface
 * @extends {LocalizableResource}
 */
class Constants {
 
 static $clinit() {
  Constants.$clinit = () =>{};
  Constants.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LocalizableResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Constants, 'org.gwtproject.i18n.client.Constants');

Constants.$markImplementor(/** @type {Function} */ (Constants));

exports = Constants; 
//# sourceMappingURL=Constants.js.map