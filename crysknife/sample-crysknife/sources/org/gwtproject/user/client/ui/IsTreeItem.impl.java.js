goog.module('org.gwtproject.user.client.ui.IsTreeItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');

/**
 * @interface
 */
class IsTreeItem {
 /**
  * @abstract
  * @return {TreeItem}
  * @public
  */
 m_asTreeItem__() {}
 /**
  * @param {?function():TreeItem} fn
  * @return {IsTreeItem}
  * @public
  */
 static $adapt(fn) {
  IsTreeItem.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  IsTreeItem.$clinit = () =>{};
  IsTreeItem.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_IsTreeItem = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsTreeItem;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsTreeItem, 'org.gwtproject.user.client.ui.IsTreeItem');

IsTreeItem.$markImplementor(/** @type {Function} */ (IsTreeItem));

exports = IsTreeItem; 
//# sourceMappingURL=IsTreeItem.js.map