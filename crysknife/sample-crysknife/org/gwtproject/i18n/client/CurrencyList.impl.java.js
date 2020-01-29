goog.module('org.gwtproject.i18n.client.CurrencyList$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let CurrencyData = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyData$impl');
let CurrencyListInstance = goog.forwardDeclare('org.gwtproject.i18n.client.CurrencyList.CurrencyListInstance$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterable<CurrencyData>}
  */
class CurrencyList extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HashMap<?string, CurrencyData>} */
  this.f_dataMapJava__org_gwtproject_i18n_client_CurrencyList;
  /** @public {Object} */
  this.f_dataMapNative__org_gwtproject_i18n_client_CurrencyList;
  /** @public {HashMap<?string, ?string>} */
  this.f_namesMapJava__org_gwtproject_i18n_client_CurrencyList;
  /** @public {Object} */
  this.f_namesMapNative__org_gwtproject_i18n_client_CurrencyList;
 }
 /**
  * @return {!CurrencyList}
  * @public
  */
 static $create__() {
  CurrencyList.$clinit();
  let $instance = new CurrencyList();
  $instance.$ctor__org_gwtproject_i18n_client_CurrencyList__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_CurrencyList__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {CurrencyList}
  * @public
  */
 static m_get__() {
  CurrencyList.$clinit();
  return CurrencyListInstance.f_instance__org_gwtproject_i18n_client_CurrencyList_CurrencyListInstance_;
 }
 /**
  * @param {Object} original
  * @param {Object} override
  * @return {Object}
  * @public
  */
 static m_overrideMap__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_core_client_JavaScriptObject(original, override) {
  CurrencyList.$clinit();
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("overrideMap"));
 }
 /**
  * @param {Object} map
  * @param {ArrayList<CurrencyData>} collection
  * @public
  */
 static m_loadCurrencyValuesNative__org_gwtproject_core_client_JavaScriptObject__java_util_ArrayList(map, collection) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("loadCurrencyValuesNative"));
 }
 /**
  * @param {Object} namesMap
  * @param {?string} code
  * @return {?string}
  * @public
  */
 static m_lookupNameNative__org_gwtproject_core_client_JavaScriptObject__java_lang_String(namesMap, code) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("lookupNameNative"));
 }
 /**
  * @param {Object} dataMap
  * @param {?string} code
  * @return {CurrencyData}
  * @public
  */
 static m_lookupNative__org_gwtproject_core_client_JavaScriptObject__java_lang_String(dataMap, code) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("lookupNative"));
 }
 /**
  * @return {CurrencyData}
  * @public
  */
 m_getDefault__() {
  return this.m_getDefaultNative__();
 }
 /**
  * @override
  * @return {Iterator<CurrencyData>}
  * @public
  */
 m_iterator__() {
  return this.m_iterator__boolean(false);
 }
 /**
  * @param {boolean} includeDeprecated
  * @return {Iterator<CurrencyData>}
  * @public
  */
 m_iterator__boolean(includeDeprecated) {
  this.m_ensureCurrencyMap___$p_org_gwtproject_i18n_client_CurrencyList();
  let collection = /**@type {!ArrayList<CurrencyData>} */ (ArrayList.$create__());
  CurrencyList.m_loadCurrencyValuesNative__org_gwtproject_core_client_JavaScriptObject__java_util_ArrayList(this.f_dataMapNative__org_gwtproject_i18n_client_CurrencyList, collection);
  if (!includeDeprecated) {
   let newCollection = /**@type {!ArrayList<CurrencyData>} */ (ArrayList.$create__());
   for (let $iterator = collection.m_iterator__(); $iterator.m_hasNext__(); ) {
    let value = /**@type {CurrencyData} */ ($Casts.$to($iterator.m_next__(), CurrencyData));
    if (!value.m_isDeprecated__()) {
     newCollection.add(value);
    }
   }
   collection = newCollection;
  }
  return /**@type {List<CurrencyData>} */ (Collections.m_unmodifiableList__java_util_List(collection)).m_iterator__();
 }
 /**
  * @param {?string} currencyCode
  * @return {CurrencyData}
  * @public
  */
 m_lookup__java_lang_String(currencyCode) {
  this.m_ensureCurrencyMap___$p_org_gwtproject_i18n_client_CurrencyList();
  return CurrencyList.m_lookupNative__org_gwtproject_core_client_JavaScriptObject__java_lang_String(this.f_dataMapNative__org_gwtproject_i18n_client_CurrencyList, currencyCode);
 }
 /**
  * @param {?string} currencyCode
  * @return {?string}
  * @public
  */
 m_lookupName__java_lang_String(currencyCode) {
  this.m_ensureNamesMap___$p_org_gwtproject_i18n_client_CurrencyList();
  return CurrencyList.m_lookupNameNative__org_gwtproject_core_client_JavaScriptObject__java_lang_String(this.f_namesMapNative__org_gwtproject_i18n_client_CurrencyList, currencyCode);
 }
 /**
  * @return {CurrencyData}
  * @public
  */
 m_getDefaultNative__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getDefaultNative"));
 }
 /**
  * @return {Object}
  * @public
  */
 m_loadCurrencyMapNative__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getDefaultNative"));
 }
 /**
  * @return {HashMap<?string, ?string>}
  * @public
  */
 m_loadNamesMapJava__() {
  let result = /**@type {!HashMap<?string, ?string>} */ (HashMap.$create__());
  result.put("USD", "US Dollar");
  result.put("EUR", "Euro");
  result.put("GBP", "British Pound Sterling");
  result.put("JPY", "Japanese Yen");
  return result;
 }
 /**
  * @return {Object}
  * @public
  */
 m_loadNamesMapNative__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("getDefaultNative"));
 }
 /**
  * @public
  */
 m_ensureCurrencyMap___$p_org_gwtproject_i18n_client_CurrencyList() {
  if ($Equality.$same(this.f_dataMapNative__org_gwtproject_i18n_client_CurrencyList, null)) {
   this.f_dataMapNative__org_gwtproject_i18n_client_CurrencyList = this.m_loadCurrencyMapNative__();
  }
 }
 /**
  * @public
  */
 m_ensureNamesMap___$p_org_gwtproject_i18n_client_CurrencyList() {
  if ($Equality.$same(this.f_namesMapNative__org_gwtproject_i18n_client_CurrencyList, null)) {
   this.f_namesMapNative__org_gwtproject_i18n_client_CurrencyList = this.m_loadNamesMapNative__();
  }
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
  CurrencyList.$clinit = () =>{};
  CurrencyList.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CurrencyList;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CurrencyData = goog.module.get('org.gwtproject.i18n.client.CurrencyData$impl');
  CurrencyListInstance = goog.module.get('org.gwtproject.i18n.client.CurrencyList.CurrencyListInstance$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(CurrencyList, 'org.gwtproject.i18n.client.CurrencyList');

Iterable.$markImplementor(CurrencyList);

exports = CurrencyList; 
//# sourceMappingURL=CurrencyList.js.map