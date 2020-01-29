goog.module('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Constants}
 */
class CurrencyCodeMapConstants {
 /**
  * @abstract
  * @return {Map<?string, ?string>}
  * @public
  */
 m_currencyMap__() {}
 /**
  * @param {?function():Map<?string, ?string>} fn
  * @return {CurrencyCodeMapConstants}
  * @public
  */
 static $adapt(fn) {
  CurrencyCodeMapConstants.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  CurrencyCodeMapConstants.$clinit = () =>{};
  CurrencyCodeMapConstants.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Constants.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CurrencyCodeMapConstants, 'org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants');

CurrencyCodeMapConstants.$markImplementor(/** @type {Function} */ (CurrencyCodeMapConstants));

exports = CurrencyCodeMapConstants; 
//# sourceMappingURL=CurrencyCodeMapConstants.js.map