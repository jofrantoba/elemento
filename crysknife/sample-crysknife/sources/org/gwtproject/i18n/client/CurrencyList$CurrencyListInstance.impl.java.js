goog.module('org.gwtproject.i18n.client.CurrencyList.CurrencyListInstance$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CurrencyList = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyList$impl');
let CurrencyList__ = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyList_$impl');

class CurrencyListInstance extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CurrencyListInstance}
  * @public
  */
 static $create__() {
  let $instance = new CurrencyListInstance();
  $instance.$ctor__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {CurrencyList}
  * @public
  */
 static get f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_() {
  return (CurrencyListInstance.$clinit(), CurrencyListInstance.$f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_);
 }
 /**
  * @param {CurrencyList} value
  * @public
  */
 static set f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_(value) {
  (CurrencyListInstance.$clinit(), CurrencyListInstance.$f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  CurrencyListInstance.$clinit = () =>{};
  CurrencyListInstance.$loadModules();
  j_l_Object.$clinit();
  CurrencyListInstance.$f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_ = CurrencyList__.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CurrencyListInstance;
 }
 /**
  * @public
  */
 static $loadModules() {
  CurrencyList__ = goog.module.get('org.gwtproject.i18n.client.CurrencyList_$impl');
 }
 
}
$Util.$setClassMetadata(CurrencyListInstance, 'org.gwtproject.i18n.client.CurrencyList$CurrencyListInstance');

/** @private {CurrencyList} */
CurrencyListInstance.$f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_;

exports = CurrencyListInstance; 
//# sourceMappingURL=CurrencyList$CurrencyListInstance.js.map