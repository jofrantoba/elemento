goog.module('org.gwtproject.user.client.ui.HasTreeItems$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let IsTreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.IsTreeItem$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class HasTreeItems {
 /** @abstract @return {TreeItem} */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ itemHtml) {}
 /** @abstract */
 m_addItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {}
 /** @abstract */
 m_addItem__org_gwtproject_user_client_ui_IsTreeItem(/** IsTreeItem */ isItem) {}
 /** @abstract @return {TreeItem} */
 m_addItem__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {}
 /** @abstract @return {TreeItem} */
 m_addTextItem__java_lang_String(/** ?string */ itemText) {}
 /** @abstract */
 m_removeItem__org_gwtproject_user_client_ui_TreeItem(/** TreeItem */ item) {}
 /** @abstract */
 m_removeItem__org_gwtproject_user_client_ui_IsTreeItem(/** IsTreeItem */ isItem) {}
 /** @abstract */
 m_removeItems__() {}
 
 static $clinit() {
  HasTreeItems.$clinit = () =>{};
  HasTreeItems.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasTreeItems = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasTreeItems;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTreeItems, 'org.gwtproject.user.client.ui.HasTreeItems');

HasTreeItems.$markImplementor(/** @type {Function} */ (HasTreeItems));

exports = HasTreeItems; 
//# sourceMappingURL=HasTreeItems.js.map