goog.module('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder.TwoWayHashMap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');

/**
 * @template K, V
  */
class TwoWayHashMap extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<K, V>} */
  this.f_keyToValue__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_;
  /** @public {Map<V, K>} */
  this.f_valueToKey__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_;
 }
 /**
  * @template K, V
  * @return {!TwoWayHashMap<K, V>}
  * @public
  */
 static $create__() {
  TwoWayHashMap.$clinit();
  let $instance = new TwoWayHashMap();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap();
 }
 /**
  * @public
  */
 m_clear___$pp_org_gwtproject_user_cellview_client() {
  this.f_keyToValue__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.clear();
  this.f_valueToKey__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.clear();
 }
 /**
  * @param {V} value
  * @return {K}
  * @public
  */
 m_getKey__java_lang_Object_$pp_org_gwtproject_user_cellview_client(value) {
  return this.f_valueToKey__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.get(value);
 }
 /**
  * @param {K} key
  * @return {V}
  * @public
  */
 m_getValue__java_lang_Object_$pp_org_gwtproject_user_cellview_client(key) {
  return this.f_keyToValue__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.get(key);
 }
 /**
  * @param {K} key
  * @param {V} value
  * @public
  */
 m_put__java_lang_Object__java_lang_Object_$pp_org_gwtproject_user_cellview_client(key, value) {
  this.f_keyToValue__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.put(key, value);
  this.f_valueToKey__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_.put(value, key);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap() {
  this.f_keyToValue__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_ = /**@type {!HashMap<K, V>} */ (HashMap.$create__());
  this.f_valueToKey__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_TwoWayHashMap_ = /**@type {!HashMap<V, K>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  TwoWayHashMap.$clinit = () =>{};
  TwoWayHashMap.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TwoWayHashMap;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
 }
 
}
$Util.$setClassMetadata(TwoWayHashMap, 'org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder$TwoWayHashMap');

exports = TwoWayHashMap; 
//# sourceMappingURL=AbstractHeaderOrFooterBuilder$TwoWayHashMap.js.map