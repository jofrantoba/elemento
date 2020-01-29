goog.module('org.gwtproject.resources.client.CommonResources_BundleImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const InlineBlockStyle = goog.require('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let CommonResources__BundleImpl = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');

/**
 * @implements {InlineBlockStyle}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CommonResources__BundleImpl} */
  this.f_$outer_this__org_gwtproject_resources_client_CommonResources_BundleImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_resources_client_CommonResources_BundleImpl_1_ = false;
 }
 /**
  * @param {CommonResources__BundleImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_resources_client_CommonResources_BundleImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_resources_client_CommonResources_BundleImpl_1__org_gwtproject_resources_client_CommonResources_BundleImpl($outer_this);
  return $instance;
 }
 /**
  * @param {CommonResources__BundleImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_resources_client_CommonResources_BundleImpl_1__org_gwtproject_resources_client_CommonResources_BundleImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_resources_client_CommonResources_BundleImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "inlineBlockStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_resources_client_CommonResources_BundleImpl_1_) {
   this.f_injected__org_gwtproject_resources_client_CommonResources_BundleImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return ".MU1SOAB-n-a{position:relative;display:inline-block}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_inlineBlock__() {
  return "MU1SOAB-n-a";
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.resources.client.CommonResources_BundleImpl$1');

InlineBlockStyle.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CommonResources_BundleImpl$1.js.map