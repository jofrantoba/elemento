goog.module('org.gwtproject.user.client.ui.HasOneWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AcceptsOneWidget = goog.require('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {AcceptsOneWidget}
 */
class HasOneWidget {
 /** @abstract @return {Widget} */
 m_getWidget__() {}
 /** @abstract */
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {}
 
 static $clinit() {
  HasOneWidget.$clinit = () =>{};
  HasOneWidget.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  AcceptsOneWidget.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasOneWidget = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasOneWidget;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasOneWidget, 'org.gwtproject.user.client.ui.HasOneWidget');

HasOneWidget.$markImplementor(/** @type {Function} */ (HasOneWidget));

exports = HasOneWidget; 
//# sourceMappingURL=HasOneWidget.js.map