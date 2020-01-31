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
 /** @abstract @return {ImageResource} */
 m_menuBarSubMenuIcon__() {}
 /** @return {Resources} */
 static $adapt(/** ?function():ImageResource */ fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources = MenuBar__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_MenuBar_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_MenuBar_Resources;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.MenuBar.Resources.$LambdaAdaptor$impl');
  MenuBar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.MenuBar_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.MenuBar$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_MenuBar_Resources;

exports = Resources; 
//# sourceMappingURL=MenuBar$Resources.js.map