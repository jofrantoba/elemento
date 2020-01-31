goog.module('org.gwtproject.aria.client.DialogRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WindowRole = goog.require('org.gwtproject.aria.client.WindowRole$impl');

/**
 * @interface
 * @extends {WindowRole}
 */
class DialogRole {
 
 static $clinit() {
  DialogRole.$clinit = () =>{};
  DialogRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  WindowRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_DialogRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DialogRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DialogRole, 'org.gwtproject.aria.client.DialogRole');

DialogRole.$markImplementor(/** @type {Function} */ (DialogRole));

exports = DialogRole; 
//# sourceMappingURL=DialogRole.js.map