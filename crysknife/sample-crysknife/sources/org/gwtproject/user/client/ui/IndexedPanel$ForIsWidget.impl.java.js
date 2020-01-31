goog.module('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IndexedPanel = goog.require('org.gwtproject.user.client.ui.IndexedPanel$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {IndexedPanel}
 */
class ForIsWidget {
 /** @abstract @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ child) {}
 
 static $clinit() {
  ForIsWidget.$clinit = () =>{};
  ForIsWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  IndexedPanel.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_IndexedPanel_ForIsWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IndexedPanel_ForIsWidget;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.IndexedPanel$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=IndexedPanel$ForIsWidget.js.map