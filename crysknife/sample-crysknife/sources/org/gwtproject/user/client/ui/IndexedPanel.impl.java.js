goog.module('org.gwtproject.user.client.ui.IndexedPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class IndexedPanel {
 /**
  * @abstract
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getWidgetCount__() {}
 /**
  * @abstract
  * @param {Widget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child) {}
 /**
  * @abstract
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {}
 /**
  * @public
  */
 static $clinit() {
  IndexedPanel.$clinit = () =>{};
  IndexedPanel.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_IndexedPanel = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IndexedPanel;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IndexedPanel, 'org.gwtproject.user.client.ui.IndexedPanel');

IndexedPanel.$markImplementor(/** @type {Function} */ (IndexedPanel));

exports = IndexedPanel; 
//# sourceMappingURL=IndexedPanel.js.map