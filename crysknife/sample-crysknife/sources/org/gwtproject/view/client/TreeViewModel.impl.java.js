goog.module('org.gwtproject.view.client.TreeViewModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');

/**
 * @interface
 */
class TreeViewModel {
 /** @abstract @template T @return {NodeInfo<?>} */
 m_getNodeInfo__java_lang_Object(/** T */ value) {}
 /** @abstract @return {boolean} */
 m_isLeaf__java_lang_Object(/** * */ value) {}
 
 static $clinit() {
  TreeViewModel.$clinit = () =>{};
  TreeViewModel.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_TreeViewModel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_TreeViewModel;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeViewModel, 'org.gwtproject.view.client.TreeViewModel');

TreeViewModel.$markImplementor(/** @type {Function} */ (TreeViewModel));

exports = TreeViewModel; 
//# sourceMappingURL=TreeViewModel.js.map