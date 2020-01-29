goog.module('org.gwtproject.user.client.ui.HasTreeItems.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasTreeItems = goog.require('org.gwtproject.user.client.ui.HasTreeItems$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');

/**
 * @interface
 * @extends {HasTreeItems}
 */
class ForIsWidget {
 /**
  * @abstract
  * @param {IsWidget} w
  * @return {TreeItem}
  * @public
  */
 m_addItem__org_gwtproject_user_client_ui_IsWidget(w) {}
 /**
  * @public
  */
 static $clinit() {
  ForIsWidget.$clinit = () =>{};
  ForIsWidget.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasTreeItems.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasTreeItems_ForIsWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasTreeItems_ForIsWidget;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.HasTreeItems$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=HasTreeItems$ForIsWidget.js.map