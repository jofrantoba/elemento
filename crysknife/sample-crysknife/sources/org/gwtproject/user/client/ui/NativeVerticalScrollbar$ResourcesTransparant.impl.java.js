goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');
let NativeVerticalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');

/**
 * @interface
 * @extends {Resources}
 */
class ResourcesTransparant {
 /** @abstract @override @return {Style} */
 m_nativeVerticalScrollbarStyle__() {}
 /** @return {ResourcesTransparant} */
 static $adapt(/** ?function():Style */ fn) {
  ResourcesTransparant.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {ResourcesTransparant} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant() {
  return (ResourcesTransparant.$clinit(), ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant);
 }
 
 static $clinit() {
  ResourcesTransparant.$clinit = () =>{};
  ResourcesTransparant.$loadModules();
  ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant = NativeVerticalScrollbar__ResourcesTransparantImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Resources.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');
  NativeVerticalScrollbar__ResourcesTransparantImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResourcesTransparant, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$ResourcesTransparant');

ResourcesTransparant.$markImplementor(/** @type {Function} */ (ResourcesTransparant));

/**@private {ResourcesTransparant}*/
ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant;

exports = ResourcesTransparant; 
//# sourceMappingURL=NativeVerticalScrollbar$ResourcesTransparant.js.map