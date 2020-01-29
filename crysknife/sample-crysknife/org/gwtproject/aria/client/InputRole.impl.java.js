goog.module('org.gwtproject.aria.client.InputRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class InputRole {
 /**
  * @public
  */
 static $clinit() {
  InputRole.$clinit = () =>{};
  InputRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  WidgetRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_InputRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_InputRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InputRole, 'org.gwtproject.aria.client.InputRole');

InputRole.$markImplementor(/** @type {Function} */ (InputRole));

exports = InputRole; 
//# sourceMappingURL=InputRole.js.map