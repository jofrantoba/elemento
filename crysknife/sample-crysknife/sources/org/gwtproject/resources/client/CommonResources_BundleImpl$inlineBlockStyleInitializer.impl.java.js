goog.module('org.gwtproject.resources.client.CommonResources_BundleImpl.inlineBlockStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let InlineBlockStyle = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');
let CommonResources__BundleImpl = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');

class inlineBlockStyleInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!inlineBlockStyleInitializer} */
 static $create__() {
  let $instance = new inlineBlockStyleInitializer();
  $instance.$ctor__org_gwtproject_resources_client_CommonResources_BundleImpl_inlineBlockStyleInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_CommonResources_BundleImpl_inlineBlockStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {InlineBlockStyle} */
 static m_get__() {
  inlineBlockStyleInitializer.$clinit();
  return CommonResources__BundleImpl.f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_;
 }
 
 static $clinit() {
  inlineBlockStyleInitializer.$clinit = () =>{};
  inlineBlockStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CommonResources__BundleImpl.f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_.m_inlineBlockStyleInitializer___$p_org_gwtproject_resources_client_CommonResources_BundleImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof inlineBlockStyleInitializer;
 }
 
 static $loadModules() {
  CommonResources__BundleImpl = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');
 }
 
}
$Util.$setClassMetadata(inlineBlockStyleInitializer, 'org.gwtproject.resources.client.CommonResources_BundleImpl$inlineBlockStyleInitializer');

exports = inlineBlockStyleInitializer; 
//# sourceMappingURL=CommonResources_BundleImpl$inlineBlockStyleInitializer.js.map