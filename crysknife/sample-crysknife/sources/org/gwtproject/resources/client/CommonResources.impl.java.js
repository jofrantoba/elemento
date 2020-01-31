goog.module('org.gwtproject.resources.client.CommonResources$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Bundle = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.Bundle$impl');
let CommonResources__BundleImpl = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');

class CommonResources extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CommonResources} */
 static $create__() {
  CommonResources.$clinit();
  let $instance = new CommonResources();
  $instance.$ctor__org_gwtproject_resources_client_CommonResources__();
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_CommonResources__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Bundle} */
 static m_ensureResources__() {
  if ($Equality.$same(CommonResources.f_instance__org_gwtproject_resources_client_CommonResources_, null)) {
   CommonResources.f_instance__org_gwtproject_resources_client_CommonResources_ = CommonResources__BundleImpl.$create__();
  }
  return CommonResources.f_instance__org_gwtproject_resources_client_CommonResources_;
 }
 /** @return {?string} */
 static m_getInlineBlockStyle__() {
  CommonResources.$clinit();
  let style = CommonResources.m_ensureResources__().m_inlineBlockStyle__();
  style.m_ensureInjected__();
  return style.m_inlineBlock__();
 }
 
 static $clinit() {
  CommonResources.$clinit = () =>{};
  CommonResources.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CommonResources;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CommonResources__BundleImpl = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');
 }
 
}
$Util.$setClassMetadata(CommonResources, 'org.gwtproject.resources.client.CommonResources');

/**@type {Bundle}*/
CommonResources.f_instance__org_gwtproject_resources_client_CommonResources_;

exports = CommonResources; 
//# sourceMappingURL=CommonResources.js.map