goog.module('org.gwtproject.user.client.ui.InsertPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IndexedPanel = goog.require('org.gwtproject.user.client.ui.IndexedPanel$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {IndexedPanel}
 */
class InsertPanel {
 /**
  * @abstract
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {}
 /**
  * @abstract
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {}
 /**
  * @public
  */
 static $clinit() {
  InsertPanel.$clinit = () =>{};
  InsertPanel.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_InsertPanel = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_InsertPanel;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InsertPanel, 'org.gwtproject.user.client.ui.InsertPanel');

InsertPanel.$markImplementor(/** @type {Function} */ (InsertPanel));

exports = InsertPanel; 
//# sourceMappingURL=InsertPanel.js.map