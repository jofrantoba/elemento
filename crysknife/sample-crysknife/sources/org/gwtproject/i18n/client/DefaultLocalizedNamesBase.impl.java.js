goog.module('org.gwtproject.i18n.client.DefaultLocalizedNamesBase$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNames = goog.require('org.gwtproject.i18n.client.LocalizedNames$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {LocalizedNames}
  */
class DefaultLocalizedNamesBase extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Array<?string>} */
  this.f_likelyRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase;
  /** @public {Array<?string>} */
  this.f_sortedRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase;
  /** @public {Map<?string, ?string>} */
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DefaultLocalizedNamesBase__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_i18n_client_DefaultLocalizedNamesBase();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_getLikelyRegionCodes__() {
  if ($Equality.$same(this.f_likelyRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase, null)) {
   this.f_likelyRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = this.m_loadLikelyRegionCodes__();
  }
  return this.f_likelyRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase;
 }
 /**
  * @override
  * @param {?string} regionCode
  * @return {?string}
  * @public
  */
 m_getRegionName__java_lang_String(regionCode) {
  if (this.m_needsNameMap__()) {
   this.m_loadNameMap__();
  }
  return this.m_getRegionNameImpl__java_lang_String(regionCode);
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_getSortedRegionCodes__() {
  if ($Equality.$same(this.f_sortedRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase, null)) {
   this.f_sortedRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = this.m_loadSortedRegionCodes__();
  }
  return this.f_sortedRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase;
 }
 /**
  * @param {?string} regionCode
  * @return {?string}
  * @public
  */
 m_getRegionNameImpl__java_lang_String(regionCode) {
  return /**@type {?string} */ ($Casts.$to(this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.get(regionCode), j_l_String));
 }
 /**
  * @return {Array<?string>}
  * @public
  */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$create([0], j_l_String));
 }
 /**
  * @public
  */
 m_loadNameMap__() {
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = /**@type {!HashMap<?string, ?string>} */ (HashMap.$create__());
 }
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {}
 /**
  * @return {boolean}
  * @public
  */
 m_needsNameMap__() {
  return $Equality.$same(this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase, null);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_i18n_client_DefaultLocalizedNamesBase() {
  this.f_likelyRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = null;
  this.f_sortedRegionCodes__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = null;
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase = null;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultLocalizedNamesBase.$clinit = () =>{};
  DefaultLocalizedNamesBase.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultLocalizedNamesBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DefaultLocalizedNamesBase, 'org.gwtproject.i18n.client.DefaultLocalizedNamesBase');

LocalizedNames.$markImplementor(DefaultLocalizedNamesBase);

exports = DefaultLocalizedNamesBase; 
//# sourceMappingURL=DefaultLocalizedNamesBase.js.map