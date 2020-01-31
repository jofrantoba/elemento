goog.module('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.AcceptsOneWidget.$LambdaAdaptor$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 */
class AcceptsOneWidget {
 /** @abstract */
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {}
 /** @return {AcceptsOneWidget} */
 static $adapt(/** ?function(IsWidget):void */ fn) {
  AcceptsOneWidget.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AcceptsOneWidget.$clinit = () =>{};
  AcceptsOneWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_AcceptsOneWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AcceptsOneWidget;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.AcceptsOneWidget.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AcceptsOneWidget, 'org.gwtproject.user.client.ui.AcceptsOneWidget');

AcceptsOneWidget.$markImplementor(/** @type {Function} */ (AcceptsOneWidget));

exports = AcceptsOneWidget; 
//# sourceMappingURL=AcceptsOneWidget.js.map