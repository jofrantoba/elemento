goog.module('org.gwtproject.user.client.ui.IsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class IsWidget {
 /** @abstract @return {Widget} */
 m_asWidget__() {}
 /** @return {IsWidget} */
 static $adapt(/** ?function():Widget */ fn) {
  IsWidget.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsWidget.$clinit = () =>{};
  IsWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_IsWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsWidget;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsWidget, 'org.gwtproject.user.client.ui.IsWidget');

IsWidget.$markImplementor(/** @type {Function} */ (IsWidget));

exports = IsWidget; 
//# sourceMappingURL=IsWidget.js.map