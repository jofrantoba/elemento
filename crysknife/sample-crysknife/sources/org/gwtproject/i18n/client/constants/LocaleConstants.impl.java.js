goog.module('org.gwtproject.i18n.client.constants.LocaleConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DateTimeConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');
let NumberConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.NumberConstants$impl');

/**
 * @interface
 */
class LocaleConstants {
 /** @abstract @return {DateTimeConstants} */
 m_getDateTimeConstants__() {}
 /** @abstract @return {NumberConstants} */
 m_getNumberConstants__() {}
 
 static $clinit() {
  LocaleConstants.$clinit = () =>{};
  LocaleConstants.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_LocaleConstants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_LocaleConstants;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocaleConstants, 'org.gwtproject.i18n.client.constants.LocaleConstants');

LocaleConstants.$markImplementor(/** @type {Function} */ (LocaleConstants));

exports = LocaleConstants; 
//# sourceMappingURL=LocaleConstants.js.map