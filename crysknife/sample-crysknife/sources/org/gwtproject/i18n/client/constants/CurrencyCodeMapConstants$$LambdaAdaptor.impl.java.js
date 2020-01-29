goog.module('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CurrencyCodeMapConstants = goog.require('org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');

/**
 * @implements {CurrencyCodeMapConstants}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Map<?string, ?string>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Map<?string, ?string>} */
  this.f_$$fn__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$LambdaAdaptor;
  this.$ctor__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$LambdaAdaptor__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$JsFunction(fn);
 }
 /**
  * @param {?function():Map<?string, ?string>} fn
  * @public
  */
 $ctor__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$LambdaAdaptor__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$LambdaAdaptor = fn;
 }
 /**
  * @return {Map<?string, ?string>}
  * @public
  */
 m_currencyMap__() {
  let /** ?function():Map<?string, ?string> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_i18n_client_constants_CurrencyCodeMapConstants_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.i18n.client.constants.CurrencyCodeMapConstants$$LambdaAdaptor');

CurrencyCodeMapConstants.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CurrencyCodeMapConstants$$LambdaAdaptor.js.map