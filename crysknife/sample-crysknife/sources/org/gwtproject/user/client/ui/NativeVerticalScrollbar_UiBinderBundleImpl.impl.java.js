goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinderBundle = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let UiStyle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.$1$impl');
let nativeVerticalScrollbarUiInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.nativeVerticalScrollbarUiInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {UiBinderBundle}
  */
class NativeVerticalScrollbar__UiBinderBundleImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NativeVerticalScrollbar__UiBinderBundleImpl}
  * @public
  */
 static $create__() {
  NativeVerticalScrollbar__UiBinderBundleImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__UiBinderBundleImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_nativeVerticalScrollbarUiInitializer___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl() {
  NativeVerticalScrollbar__UiBinderBundleImpl.$f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_ = $1.$create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl(this);
 }
 /**
  * @override
  * @return {UiStyle}
  * @public
  */
 m_nativeVerticalScrollbarUi__() {
  return nativeVerticalScrollbarUiInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_nativeVerticalScrollbarUi__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(NativeVerticalScrollbar__UiBinderBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_, null)) {
   NativeVerticalScrollbar__UiBinderBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   NativeVerticalScrollbar__UiBinderBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_.put("nativeVerticalScrollbarUi", this.m_nativeVerticalScrollbarUi__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(NativeVerticalScrollbar__UiBinderBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {NativeVerticalScrollbar__UiBinderBundleImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_() {
  return (NativeVerticalScrollbar__UiBinderBundleImpl.$clinit(), NativeVerticalScrollbar__UiBinderBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_);
 }
 /**
  * @param {NativeVerticalScrollbar__UiBinderBundleImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_(value) {
  (NativeVerticalScrollbar__UiBinderBundleImpl.$clinit(), NativeVerticalScrollbar__UiBinderBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_ = value);
 }
 /**
  * @return {UiStyle}
  * @public
  */
 static get f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_() {
  return (NativeVerticalScrollbar__UiBinderBundleImpl.$clinit(), NativeVerticalScrollbar__UiBinderBundleImpl.$f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_);
 }
 /**
  * @param {UiStyle} value
  * @public
  */
 static set f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_(value) {
  (NativeVerticalScrollbar__UiBinderBundleImpl.$clinit(), NativeVerticalScrollbar__UiBinderBundleImpl.$f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeVerticalScrollbar__UiBinderBundleImpl.$clinit = () =>{};
  NativeVerticalScrollbar__UiBinderBundleImpl.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__UiBinderBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_ = NativeVerticalScrollbar__UiBinderBundleImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeVerticalScrollbar__UiBinderBundleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.$1$impl');
  nativeVerticalScrollbarUiInitializer = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.nativeVerticalScrollbarUiInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__UiBinderBundleImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl');

UiBinderBundle.$markImplementor(NativeVerticalScrollbar__UiBinderBundleImpl);

/** @private {NativeVerticalScrollbar__UiBinderBundleImpl} */
NativeVerticalScrollbar__UiBinderBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
NativeVerticalScrollbar__UiBinderBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_;
/** @private {UiStyle} */
NativeVerticalScrollbar__UiBinderBundleImpl.$f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_;

exports = NativeVerticalScrollbar__UiBinderBundleImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_UiBinderBundleImpl.js.map