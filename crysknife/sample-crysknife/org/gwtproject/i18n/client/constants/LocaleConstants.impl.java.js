goog.module('org.gwtproject.i18n.client.constants.LocaleConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DateTimeConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');
let NumberConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.NumberConstants$impl');

/**
 * @interface
 */
class LocaleConstants {
 /**
  * @abstract
  * @return {DateTimeConstants}
  * @public
  */
 m_getDateTimeConstants__() {}
 /**
  * @abstract
  * @return {NumberConstants}
  * @public
  */
 m_getNumberConstants__() {}
 /**
  * @public
  */
 static $clinit() {
  LocaleConstants.$clinit = () =>{};
  LocaleConstants.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_LocaleConstants = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_LocaleConstants;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocaleConstants, 'org.gwtproject.i18n.client.constants.LocaleConstants');

LocaleConstants.$markImplementor(/** @type {Function} */ (LocaleConstants));

exports = LocaleConstants; 
//# sourceMappingURL=LocaleConstants.js.map