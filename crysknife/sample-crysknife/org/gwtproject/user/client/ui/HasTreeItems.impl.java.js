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
 /**
  * @abstract
  * @param {SafeHtml} itemHtml
  * @return {TreeItem}
  * @public
  */
 m_addItem__org_gwtproject_safehtml_shared_SafeHtml(itemHtml) {}
 /**
  * @abstract
  * @param {TreeItem} item
  * @public
  */
 m_addItem__org_gwtproject_user_client_ui_TreeItem(item) {}
 /**
  * @abstract
  * @param {IsTreeItem} isItem
  * @public
  */
 m_addItem__org_gwtproject_user_client_ui_IsTreeItem(isItem) {}
 /**
  * @abstract
  * @param {Widget} widget
  * @return {TreeItem}
  * @public
  */
 m_addItem__org_gwtproject_user_client_ui_Widget(widget) {}
 /**
  * @abstract
  * @param {?string} itemText
  * @return {TreeItem}
  * @public
  */
 m_addTextItem__java_lang_String(itemText) {}
 /**
  * @abstract
  * @param {TreeItem} item
  * @public
  */
 m_removeItem__org_gwtproject_user_client_ui_TreeItem(item) {}
 /**
  * @abstract
  * @param {IsTreeItem} isItem
  * @public
  */
 m_removeItem__org_gwtproject_user_client_ui_IsTreeItem(isItem) {}
 /**
  * @abstract
  * @public
  */
 m_removeItems__() {}
 /**
  * @public
  */
 static $clinit() {
  HasTreeItems.$clinit = () =>{};
  HasTreeItems.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasTreeItems = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasTreeItems;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTreeItems, 'org.gwtproject.user.client.ui.HasTreeItems');

HasTreeItems.$markImplementor(/** @type {Function} */ (HasTreeItems));

exports = HasTreeItems; 
//# sourceMappingURL=HasTreeItems.js.map