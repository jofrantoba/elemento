goog.module('org.gwtproject.i18n.client.CurrencyList_$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CurrencyList = goog.require('org.gwtproject.i18n.client.CurrencyList$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let CurrencyData = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyData$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class CurrencyList__ extends CurrencyList {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CurrencyList__}
  * @public
  */
 static $create__() {
  CurrencyList__.$clinit();
  let $instance = new CurrencyList__();
  $instance.$ctor__org_gwtproject_i18n_client_CurrencyList___();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_CurrencyList___() {
  this.$ctor__org_gwtproject_i18n_client_CurrencyList__();
 }
 /**
  * @override
  * @return {CurrencyData}
  * @public
  */
 m_getDefaultNative__() {
  let arr = /**@type {!Array<?string>} */ ($Arrays.$init(["USD", "US$", "2", "US$", "$"], j_l_String));
  let result = new Array();
  return /**@type {CurrencyData} */ (Js.m_uncheckedCast__java_lang_Object(result.push("USD", "US$", "2", "US$", "$")));
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_loadCurrencyMapNative__() {
  return CurrencyList.m_overrideMap__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_core_client_JavaScriptObject(super.m_loadCurrencyMapNative__(), this.m_loadMyCurrencyMapOverridesNative___$p_org_gwtproject_i18n_client_CurrencyList_());
 }
 /**
  * @return {Object}
  * @public
  */
 m_loadMyCurrencyMapOverridesNative___$p_org_gwtproject_i18n_client_CurrencyList_() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("loadMyCurrencyMapOverridesNative"));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<CurrencyData>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<CurrencyData>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  CurrencyList__.$clinit = () =>{};
  CurrencyList__.$loadModules();
  CurrencyList.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CurrencyList__;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(CurrencyList__, 'org.gwtproject.i18n.client.CurrencyList_');

exports = CurrencyList__; 
//# sourceMappingURL=CurrencyList_.js.map