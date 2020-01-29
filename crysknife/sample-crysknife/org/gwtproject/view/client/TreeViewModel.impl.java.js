goog.module('org.gwtproject.view.client.TreeViewModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');

/**
 * @interface
 */
class TreeViewModel {
 /**
  * @abstract
  * @template T
  * @param {T} value
  * @return {NodeInfo<?>}
  * @public
  */
 m_getNodeInfo__java_lang_Object(value) {}
 /**
  * @abstract
  * @param {*} value
  * @return {boolean}
  * @public
  */
 m_isLeaf__java_lang_Object(value) {}
 /**
  * @public
  */
 static $clinit() {
  TreeViewModel.$clinit = () =>{};
  TreeViewModel.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_TreeViewModel = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_TreeViewModel;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeViewModel, 'org.gwtproject.view.client.TreeViewModel');

TreeViewModel.$markImplementor(/** @type {Function} */ (TreeViewModel));

exports = TreeViewModel; 
//# sourceMappingURL=TreeViewModel.js.map