goog.module('org.gwtproject.user.cellview.client.TreeNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class TreeNode {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getChildCount__() {}
 /**
  * @abstract
  * @param {number} index
  * @return {*}
  * @public
  */
 m_getChildValue__int(index) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getIndex__() {}
 /**
  * @abstract
  * @return {TreeNode}
  * @public
  */
 m_getParent__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getValue__() {}
 /**
  * @abstract
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildLeaf__int(index) {}
 /**
  * @abstract
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildOpen__int(index) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isDestroyed__() {}
 /**
  * @abstract
  * @param {number} index
  * @param {boolean} open
  * @return {TreeNode}
  * @public
  */
 m_setChildOpen__int__boolean(index, open) {}
 /**
  * @abstract
  * @param {number} index
  * @param {boolean} open
  * @param {boolean} fireEvents
  * @return {TreeNode}
  * @public
  */
 m_setChildOpen__int__boolean__boolean(index, open, fireEvents) {}
 /**
  * @public
  */
 static $clinit() {
  TreeNode.$clinit = () =>{};
  TreeNode.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_TreeNode = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_TreeNode;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeNode, 'org.gwtproject.user.cellview.client.TreeNode');

TreeNode.$markImplementor(/** @type {Function} */ (TreeNode));

exports = TreeNode; 
//# sourceMappingURL=TreeNode.js.map