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
 /**
  * @abstract
  * @param {IsWidget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(w) {}
 /**
  * @abstract
  * @param {IsWidget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(w, beforeIndex) {}
 /**
  * @public
  */
 static $clinit() {
  InsertPanel_ForIsWidget.$clinit = () =>{};
  InsertPanel_ForIsWidget.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  InsertPanel.$markImplementor(classConstructor);
  ForIsWidget.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_InsertPanel_ForIsWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_InsertPanel_ForIsWidget;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InsertPanel_ForIsWidget, 'org.gwtproject.user.client.ui.InsertPanel$ForIsWidget');

InsertPanel_ForIsWidget.$markImplementor(/** @type {Function} */ (InsertPanel_ForIsWidget));

exports = InsertPanel_ForIsWidget; 
//# sourceMappingURL=InsertPanel$ForIsWidget.js.map