goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle.$LambdaAdaptor$impl');
let UiStyle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');
let NativeVerticalScrollbar__UiBinderBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class UiBinderBundle {
 /** @abstract @return {UiStyle} */
 m_nativeVerticalScrollbarUi__() {}
 /** @return {UiBinderBundle} */
 static $adapt(/** ?function():UiStyle */ fn) {
  UiBinderBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {UiBinderBundle} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle() {
  return (UiBinderBundle.$clinit(), UiBinderBundle.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle);
 }
 
 static $clinit() {
  UiBinderBundle.$clinit = () =>{};
  UiBinderBundle.$loadModules();
  UiBinderBundle.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle = NativeVerticalScrollbar__UiBinderBundleImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle.$LambdaAdaptor$impl');
  NativeVerticalScrollbar__UiBinderBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiBinderBundle, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$UiBinderBundle');

UiBinderBundle.$markImplementor(/** @type {Function} */ (UiBinderBundle));

/**@private {UiBinderBundle}*/
UiBinderBundle.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle;

exports = UiBinderBundle; 
//# sourceMappingURL=NativeVerticalScrollbar$UiBinderBundle.js.map