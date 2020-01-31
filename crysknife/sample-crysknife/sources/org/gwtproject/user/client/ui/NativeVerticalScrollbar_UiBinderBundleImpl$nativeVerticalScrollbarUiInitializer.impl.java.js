goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.nativeVerticalScrollbarUiInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UiStyle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');
let NativeVerticalScrollbar__UiBinderBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');

class nativeVerticalScrollbarUiInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!nativeVerticalScrollbarUiInitializer} */
 static $create__() {
  let $instance = new nativeVerticalScrollbarUiInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_nativeVerticalScrollbarUiInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_nativeVerticalScrollbarUiInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {UiStyle} */
 static m_get__() {
  nativeVerticalScrollbarUiInitializer.$clinit();
  return NativeVerticalScrollbar__UiBinderBundleImpl.f_nativeVerticalScrollbarUi__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_;
 }
 
 static $clinit() {
  nativeVerticalScrollbarUiInitializer.$clinit = () =>{};
  nativeVerticalScrollbarUiInitializer.$loadModules();
  j_l_Object.$clinit();
  NativeVerticalScrollbar__UiBinderBundleImpl.f__instance0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_.m_nativeVerticalScrollbarUiInitializer___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof nativeVerticalScrollbarUiInitializer;
 }
 
 static $loadModules() {
  NativeVerticalScrollbar__UiBinderBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');
 }
 
}
$Util.$setClassMetadata(nativeVerticalScrollbarUiInitializer, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$nativeVerticalScrollbarUiInitializer');

exports = nativeVerticalScrollbarUiInitializer; 
//# sourceMappingURL=NativeVerticalScrollbar_UiBinderBundleImpl$nativeVerticalScrollbarUiInitializer.js.map