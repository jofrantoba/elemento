goog.module('org.gwtproject.aria.client.AlertdialogRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AlertRole = goog.require('org.gwtproject.aria.client.AlertRole$impl');
const DialogRole = goog.require('org.gwtproject.aria.client.DialogRole$impl');

/**
 * @interface
 * @extends {AlertRole}
 * @extends {DialogRole}
 */
class AlertdialogRole {
 
 static $clinit() {
  AlertdialogRole.$clinit = () =>{};
  AlertdialogRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  AlertRole.$markImplementor(ctor);
  DialogRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_AlertdialogRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_AlertdialogRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AlertdialogRole, 'org.gwtproject.aria.client.AlertdialogRole');

AlertdialogRole.$markImplementor(/** @type {Function} */ (AlertdialogRole));

exports = AlertdialogRole; 
//# sourceMappingURL=AlertdialogRole.js.map