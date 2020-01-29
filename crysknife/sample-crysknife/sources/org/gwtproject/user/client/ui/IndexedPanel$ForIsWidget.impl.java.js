goog.module('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IndexedPanel = goog.require('org.gwtproject.user.client.ui.IndexedPanel$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {IndexedPanel}
 */
class ForIsWidget {
 /**
  * @abstract
  * @param {IsWidget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(child) {}
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
  IndexedPanel.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_IndexedPanel_ForIsWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IndexedPanel_ForIsWidget;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.IndexedPanel$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=IndexedPanel$ForIsWidget.js.map