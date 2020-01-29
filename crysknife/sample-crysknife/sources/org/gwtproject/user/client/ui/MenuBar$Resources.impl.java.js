goog.module('org.gwtproject.user.client.ui.MenuBar.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar.Resources.$LambdaAdaptor$impl');
let MenuBar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_menuBarSubMenuIcon__() {}
 /**
  * @param {?function():ImageResource} fn
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
 static get f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources);
 }
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources = MenuBar__ResourcesImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_MenuBar_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_MenuBar_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.MenuBar.Resources.$LambdaAdaptor$impl');
  MenuBar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.MenuBar$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/** @private {Resources} */
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources;

exports = Resources; 
//# sourceMappingURL=MenuBar$Resources.js.map