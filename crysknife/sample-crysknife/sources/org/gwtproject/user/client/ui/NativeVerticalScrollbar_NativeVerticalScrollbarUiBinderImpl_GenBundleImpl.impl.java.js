goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle}
  */
class NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl} */
 static $create__() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_, null)) {
   NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_.get(name), ResourcePrototype));
 }
 
 static $clinit() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.$clinit = () =>{};
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_ = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl');

NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle.$markImplementor(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl);

/**@type {NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl}*/
NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl_;

exports = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl.js.map