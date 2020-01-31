goog.module('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasWidgets = goog.require('org.gwtproject.user.client.ui.HasWidgets$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasWidgets}
 */
class ForIsWidget {
 /** @abstract */
 m_add__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {}
 /** @abstract @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {}
 
 static $clinit() {
  ForIsWidget.$clinit = () =>{};
  ForIsWidget.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasWidgets.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasWidgets_ForIsWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWidgets_ForIsWidget;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.HasWidgets$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=HasWidgets$ForIsWidget.js.map