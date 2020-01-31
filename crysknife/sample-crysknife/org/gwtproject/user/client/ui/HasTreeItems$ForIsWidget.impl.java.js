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
 /** @abstract @return {TreeItem} */
 m_addItem__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {}
 
 static $clinit() {
  ForIsWidget.$clinit = () =>{};
  ForIsWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasTreeItems.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasTreeItems_ForIsWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasTreeItems_ForIsWidget;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.HasTreeItems$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=HasTreeItems$ForIsWidget.js.map