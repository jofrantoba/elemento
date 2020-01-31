goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources.$LambdaAdaptor$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');
let NativeVerticalScrollbar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {Style} */
 m_nativeVerticalScrollbarStyle__() {}
 /** @return {Resources} */
 static $adapt(/** ?function():Style */ fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources = NativeVerticalScrollbar__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources.$LambdaAdaptor$impl');
  NativeVerticalScrollbar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources;

exports = Resources; 
//# sourceMappingURL=NativeVerticalScrollbar$Resources.js.map