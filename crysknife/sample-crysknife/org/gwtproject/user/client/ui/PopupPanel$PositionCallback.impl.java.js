goog.module('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.PositionCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class PositionCallback {
 /**
  * @abstract
  * @param {number} offsetWidth
  * @param {number} offsetHeight
  * @public
  */
 m_setPosition__int__int(offsetWidth, offsetHeight) {}
 /**
  * @param {?function(number, number):void} fn
  * @return {PositionCallback}
  * @public
  */
 static $adapt(fn) {
  PositionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  PositionCallback.$clinit = () =>{};
  PositionCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_PopupPanel_PositionCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_PopupPanel_PositionCallback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.PositionCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PositionCallback, 'org.gwtproject.user.client.ui.PopupPanel$PositionCallback');

PositionCallback.$markImplementor(/** @type {Function} */ (PositionCallback));

exports = PositionCallback; 
//# sourceMappingURL=PopupPanel$PositionCallback.js.map