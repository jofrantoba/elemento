goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.$1$impl');
let styleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.styleInitializer$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle}
  */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl}
  * @public
  */
 static $create__() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit();
  let $instance = new NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_styleInitializer___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl(this);
 }
 /**
  * @override
  * @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style}
  * @public
  */
 m_style__() {
  return styleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_style__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_, null)) {
   NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_.put("style", this.m_style__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_() {
  return (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit(), NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_);
 }
 /**
  * @param {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_(value) {
  (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit(), NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_ = value);
 }
 /**
  * @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style}
  * @public
  */
 static get f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_() {
  return (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit(), NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_);
 }
 /**
  * @param {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style} value
  * @public
  */
 static set f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_(value) {
  (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit(), NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$loadModules();
  j_l_Object.$clinit();
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_ = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.$1$impl');
  styleInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.styleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl');

NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle.$markImplementor(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl);

/** @private {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl} */
NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_;
/** @private {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style} */
NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_;

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.js.map