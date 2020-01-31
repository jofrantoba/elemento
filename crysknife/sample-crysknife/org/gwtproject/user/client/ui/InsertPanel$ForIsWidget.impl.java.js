goog.module('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');
const InsertPanel = goog.require('org.gwtproject.user.client.ui.InsertPanel$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {InsertPanel}
 * @extends {ForIsWidget}
 */
class InsertPanel_ForIsWidget {
 /** @abstract */
 m_add__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {}
 /** @abstract */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(/** IsWidget */ w, /** number */ beforeIndex) {}
 
 static $clinit() {
  InsertPanel_ForIsWidget.$clinit = () =>{};
  InsertPanel_ForIsWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InsertPanel.$markImplementor(ctor);
  ForIsWidget.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_InsertPanel_ForIsWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_InsertPanel_ForIsWidget;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InsertPanel_ForIsWidget, 'org.gwtproject.user.client.ui.InsertPanel$ForIsWidget');

InsertPanel_ForIsWidget.$markImplementor(/** @type {Function} */ (InsertPanel_ForIsWidget));

exports = InsertPanel_ForIsWidget; 
//# sourceMappingURL=InsertPanel$ForIsWidget.js.map