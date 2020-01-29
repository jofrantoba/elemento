goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Resources$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');
let NativeHorizontalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');

/**
 * @interface
 * @extends {Resources}
 */
class ResourcesTransparant {
 /**
  * @abstract
  * @override
  * @return {Style}
  * @public
  */
 m_nativeHorizontalScrollbarStyle__() {}
 /**
  * @param {?function():Style} fn
  * @return {ResourcesTransparant}
  * @public
  */
 static $adapt(fn) {
  ResourcesTransparant.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {ResourcesTransparant}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant() {
  return (ResourcesTransparant.$clinit(), ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant);
 }
 /**
  * @public
  */
 static $clinit() {
  ResourcesTransparant.$clinit = () =>{};
  ResourcesTransparant.$loadModules();
  ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant = NativeHorizontalScrollbar__ResourcesTransparantImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Resources.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');
  NativeHorizontalScrollbar__ResourcesTransparantImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResourcesTransparant, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$ResourcesTransparant');

ResourcesTransparant.$markImplementor(/** @type {Function} */ (ResourcesTransparant));

/** @private {ResourcesTransparant} */
ResourcesTransparant.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant;

exports = ResourcesTransparant; 
//# sourceMappingURL=NativeHorizontalScrollbar$ResourcesTransparant.js.map