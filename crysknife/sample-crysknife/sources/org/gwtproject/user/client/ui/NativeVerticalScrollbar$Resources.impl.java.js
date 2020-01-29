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
 /**
  * @abstract
  * @return {Style}
  * @public
  */
 m_nativeVerticalScrollbarStyle__() {}
 /**
  * @param {?function():Style} fn
  * @return {Resources}
  * @public
  */
 static $adapt(fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {Resources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources);
 }
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources = NativeVerticalScrollbar__ResourcesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources.$LambdaAdaptor$impl');
  NativeVerticalScrollbar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/** @private {Resources} */
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources;

exports = Resources; 
//# sourceMappingURL=NativeVerticalScrollbar$Resources.js.map