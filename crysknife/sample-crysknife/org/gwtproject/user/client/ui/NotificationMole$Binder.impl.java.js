goog.module('org.gwtproject.user.client.ui.NotificationMole.Binder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole.Binder.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {UiBinder<HTMLPanel, NotificationMole>}
 */
class Binder {
 /** @return {Binder} */
 static $adapt(/** ?function(NotificationMole):HTMLPanel */ fn) {
  Binder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Binder.$clinit = () =>{};
  Binder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  UiBinder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NotificationMole_Binder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NotificationMole_Binder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NotificationMole.Binder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Binder, 'org.gwtproject.user.client.ui.NotificationMole$Binder');

Binder.$markImplementor(/** @type {Function} */ (Binder));

exports = Binder; 
//# sourceMappingURL=NotificationMole$Binder.js.map