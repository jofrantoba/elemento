goog.module('org.gwtproject.aria.client.DialogRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WindowRole = goog.require('org.gwtproject.aria.client.WindowRole$impl');

/**
 * @interface
 * @extends {WindowRole}
 */
class DialogRole {
 /**
  * @public
  */
 static $clinit() {
  DialogRole.$clinit = () =>{};
  DialogRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  WindowRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_DialogRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DialogRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DialogRole, 'org.gwtproject.aria.client.DialogRole');

DialogRole.$markImplementor(/** @type {Function} */ (DialogRole));

exports = DialogRole; 
//# sourceMappingURL=DialogRole.js.map