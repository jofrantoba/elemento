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
 /** @abstract @return {Map<?string, ?string>} */
 m_currencyMap__() {}
 /** @return {CurrencyCodeMapConstants} */
 static $adapt(/** ?function():Map<?string, ?string> */ fn) {
  CurrencyCodeMapConstants.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CurrencyCodeMapConstants.$clinit = () =>{};
  CurrencyCodeMapConstants.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Constants.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CurrencyCodeMapConstants, 'org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants');

CurrencyCodeMapConstants.$markImplementor(/** @type {Function} */ (CurrencyCodeMapConstants));

exports = CurrencyCodeMapConstants; 
//# sourceMappingURL=CurrencyCodeMapConstants.js.map