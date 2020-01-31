goog.module('org.gwtproject.user.cellview.client.TreeNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class TreeNode {
 /** @abstract @return {number} */
 m_getChildCount__() {}
 /** @abstract @return {*} */
 m_getChildValue__int(/** number */ index) {}
 /** @abstract @return {number} */
 m_getIndex__() {}
 /** @abstract @return {TreeNode} */
 m_getParent__() {}
 /** @abstract @return {*} */
 m_getValue__() {}
 /** @abstract @return {boolean} */
 m_isChildLeaf__int(/** number */ index) {}
 /** @abstract @return {boolean} */
 m_isChildOpen__int(/** number */ index) {}
 /** @abstract @return {boolean} */
 m_isDestroyed__() {}
 /** @abstract @return {TreeNode} */
 m_setChildOpen__int__boolean(/** number */ index, /** boolean */ open) {}
 /** @abstract @return {TreeNode} */
 m_setChildOpen__int__boolean__boolean(/** number */ index, /** boolean */ open, /** boolean */ fireEvents) {}
 
 static $clinit() {
  TreeNode.$clinit = () =>{};
  TreeNode.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_TreeNode = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_TreeNode;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeNode, 'org.gwtproject.user.cellview.client.TreeNode');

TreeNode.$markImplementor(/** @type {Function} */ (TreeNode));

exports = TreeNode; 
//# sourceMappingURL=TreeNode.js.map