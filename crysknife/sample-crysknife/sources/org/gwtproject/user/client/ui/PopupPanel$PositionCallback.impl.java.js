goog.module('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.PositionCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class PositionCallback {
 /** @abstract */
 m_setPosition__int__int(/** number */ offsetWidth, /** number */ offsetHeight) {}
 /** @return {PositionCallback} */
 static $adapt(/** ?function(number, number):void */ fn) {
  PositionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PositionCallback.$clinit = () =>{};
  PositionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_PopupPanel_PositionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_PopupPanel_PositionCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.PositionCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PositionCallback, 'org.gwtproject.user.client.ui.PopupPanel$PositionCallback');

PositionCallback.$markImplementor(/** @type {Function} */ (PositionCallback));

exports = PositionCallback; 
//# sourceMappingURL=PopupPanel$PositionCallback.js.map