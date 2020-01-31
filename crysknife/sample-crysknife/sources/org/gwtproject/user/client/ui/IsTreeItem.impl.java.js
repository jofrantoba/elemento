goog.module('org.gwtproject.user.client.ui.IsTreeItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');

/**
 * @interface
 */
class IsTreeItem {
 /** @abstract @return {TreeItem} */
 m_asTreeItem__() {}
 /** @return {IsTreeItem} */
 static $adapt(/** ?function():TreeItem */ fn) {
  IsTreeItem.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsTreeItem.$clinit = () =>{};
  IsTreeItem.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_IsTreeItem = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsTreeItem;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsTreeItem, 'org.gwtproject.user.client.ui.IsTreeItem');

IsTreeItem.$markImplementor(/** @type {Function} */ (IsTreeItem));

exports = IsTreeItem; 
//# sourceMappingURL=IsTreeItem.js.map