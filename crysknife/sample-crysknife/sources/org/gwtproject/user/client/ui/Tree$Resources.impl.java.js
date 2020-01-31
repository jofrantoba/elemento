goog.module('org.gwtproject.user.client.ui.Tree.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Tree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /** @abstract @return {ImageResource} */
 m_treeClosed__() {}
 /** @abstract @return {ImageResource} */
 m_treeLeaf__() {}
 /** @abstract @return {ImageResource} */
 m_treeOpen__() {}
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_Tree_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_user_client_ui_Tree_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_user_client_ui_Tree_Resources = Tree__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_Tree_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_Tree_Resources;
 }
 
 static $loadModules() {
  Tree__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.user.client.ui.Tree$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_user_client_ui_Tree_Resources;

exports = Resources; 
//# sourceMappingURL=Tree$Resources.js.map