goog.module('org.gwtproject.aria.client.InputRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class InputRole {
 
 static $clinit() {
  InputRole.$clinit = () =>{};
  InputRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_InputRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_InputRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InputRole, 'org.gwtproject.aria.client.InputRole');

InputRole.$markImplementor(/** @type {Function} */ (InputRole));

exports = InputRole; 
//# sourceMappingURL=InputRole.js.map