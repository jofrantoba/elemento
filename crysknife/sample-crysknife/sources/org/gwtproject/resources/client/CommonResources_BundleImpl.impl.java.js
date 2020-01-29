goog.module('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Bundle = goog.require('org.gwtproject.resources.client.CommonResources.Bundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let InlineBlockStyle = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');
let $1 = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl.$1$impl');
let inlineBlockStyleInitializer = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl.inlineBlockStyleInitializer$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Bundle}
  */
class CommonResources__BundleImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CommonResources__BundleImpl}
  * @public
  */
 static $create__() {
  CommonResources__BundleImpl.$clinit();
  let $instance = new CommonResources__BundleImpl();
  $instance.$ctor__org_gwtproject_resources_client_CommonResources_BundleImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_resources_client_CommonResources_BundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_inlineBlockStyleInitializer___$p_org_gwtproject_resources_client_CommonResources_BundleImpl() {
  CommonResources__BundleImpl.$f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_ = $1.$create__org_gwtproject_resources_client_CommonResources_BundleImpl(this);
 }
 /**
  * @override
  * @return {InlineBlockStyle}
  * @public
  */
 m_inlineBlockStyle__() {
  return inlineBlockStyleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_inlineBlockStyle__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(CommonResources__BundleImpl.f_resourceMap__org_gwtproject_resources_client_CommonResources_BundleImpl_, null)) {
   CommonResources__BundleImpl.f_resourceMap__org_gwtproject_resources_client_CommonResources_BundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   CommonResources__BundleImpl.f_resourceMap__org_gwtproject_resources_client_CommonResources_BundleImpl_.put("inlineBlockStyle", this.m_inlineBlockStyle__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(CommonResources__BundleImpl.f_resourceMap__org_gwtproject_resources_client_CommonResources_BundleImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {CommonResources__BundleImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_() {
  return (CommonResources__BundleImpl.$clinit(), CommonResources__BundleImpl.$f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_);
 }
 /**
  * @param {CommonResources__BundleImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_(value) {
  (CommonResources__BundleImpl.$clinit(), CommonResources__BundleImpl.$f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_ = value);
 }
 /**
  * @return {InlineBlockStyle}
  * @public
  */
 static get f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_() {
  return (CommonResources__BundleImpl.$clinit(), CommonResources__BundleImpl.$f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_);
 }
 /**
  * @param {InlineBlockStyle} value
  * @public
  */
 static set f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_(value) {
  (CommonResources__BundleImpl.$clinit(), CommonResources__BundleImpl.$f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  CommonResources__BundleImpl.$clinit = () =>{};
  CommonResources__BundleImpl.$loadModules();
  j_l_Object.$clinit();
  CommonResources__BundleImpl.$f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_ = CommonResources__BundleImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CommonResources__BundleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl.$1$impl');
  inlineBlockStyleInitializer = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl.inlineBlockStyleInitializer$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CommonResources__BundleImpl, 'org.gwtproject.resources.client.CommonResources_BundleImpl');

Bundle.$markImplementor(CommonResources__BundleImpl);

/** @private {CommonResources__BundleImpl} */
CommonResources__BundleImpl.$f__instance0__org_gwtproject_resources_client_CommonResources_BundleImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
CommonResources__BundleImpl.f_resourceMap__org_gwtproject_resources_client_CommonResources_BundleImpl_;
/** @private {InlineBlockStyle} */
CommonResources__BundleImpl.$f_inlineBlockStyle__org_gwtproject_resources_client_CommonResources_BundleImpl_;

exports = CommonResources__BundleImpl; 
//# sourceMappingURL=CommonResources_BundleImpl.js.map