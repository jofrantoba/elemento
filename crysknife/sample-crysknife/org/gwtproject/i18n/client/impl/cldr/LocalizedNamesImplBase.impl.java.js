goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImplBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultLocalizedNames = goog.require('org.gwtproject.i18n.client.DefaultLocalizedNames$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');

/**
 * @abstract
  */
class LocalizedNamesImplBase extends DefaultLocalizedNames {
 /** @protected */
 constructor() {
  super();
  /**@type {HashMap<?string, ?string>}*/
  this.f_jsoNameMap__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase_;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase__() {
  this.$ctor__org_gwtproject_i18n_client_DefaultLocalizedNames__();
  this.$init___$p_org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase();
 }
 /** @return {HashMap<?string, ?string>} */
 static m_overrideMap__java_util_HashMap__java_util_HashMap(/** HashMap<?string, ?string> */ original, /** HashMap<?string, ?string> */ override) {
  LocalizedNamesImplBase.$clinit();
  original.putAll(override);
  return original;
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return super.m_loadLikelyRegionCodes__();
 }
 /** @private */
 $init___$p_org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase() {
  this.f_jsoNameMap__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImplBase_ = null;
 }
 
 static $clinit() {
  LocalizedNamesImplBase.$clinit = () =>{};
  LocalizedNamesImplBase.$loadModules();
  DefaultLocalizedNames.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImplBase;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImplBase, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImplBase');

exports = LocalizedNamesImplBase; 
//# sourceMappingURL=LocalizedNamesImplBase.js.map