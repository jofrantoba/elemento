goog.module('org.gwtproject.user.client.ui.IndexedPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class IndexedPanel {
 /** @abstract @return {Widget} */
 m_getWidget__int(/** number */ index) {}
 /** @abstract @return {number} */
 m_getWidgetCount__() {}
 /** @abstract @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {}
 /** @abstract @return {boolean} */
 m_remove__int(/** number */ index) {}
 
 static $clinit() {
  IndexedPanel.$clinit = () =>{};
  IndexedPanel.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_IndexedPanel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IndexedPanel;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IndexedPanel, 'org.gwtproject.user.client.ui.IndexedPanel');

IndexedPanel.$markImplementor(/** @type {Function} */ (IndexedPanel));

exports = IndexedPanel; 
//# sourceMappingURL=IndexedPanel.js.map