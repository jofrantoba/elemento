goog.module('org.gwtproject.user.client.ui.InsertPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IndexedPanel = goog.require('org.gwtproject.user.client.ui.IndexedPanel$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {IndexedPanel}
 */
class InsertPanel {
 /** @abstract */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {}
 /** @abstract */
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ w, /** number */ beforeIndex) {}
 
 static $clinit() {
  InsertPanel.$clinit = () =>{};
  InsertPanel.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  IndexedPanel.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_InsertPanel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_InsertPanel;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InsertPanel, 'org.gwtproject.user.client.ui.InsertPanel');

InsertPanel.$markImplementor(/** @type {Function} */ (InsertPanel));

exports = InsertPanel; 
//# sourceMappingURL=InsertPanel.js.map