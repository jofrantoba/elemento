goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Resources.$LambdaAdaptor$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');
let CustomScrollPanel__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {Style} */
 m_customScrollPanelStyle__() {}
 /** @return {Resources} */
 static $adapt(/** ?function():Style */ fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_CustomScrollPanel_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_CustomScrollPanel_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_CustomScrollPanel_Resources = CustomScrollPanel__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Resources;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel.Resources.$LambdaAdaptor$impl');
  CustomScrollPanel__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.CustomScrollPanel$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_CustomScrollPanel_Resources;

exports = Resources; 
//# sourceMappingURL=CustomScrollPanel$Resources.js.map