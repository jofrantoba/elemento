goog.module('org.gwtproject.aria.client.CommandRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class CommandRole {
 /**
  * @public
  */
 static $clinit() {
  CommandRole.$clinit = () =>{};
  CommandRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_CommandRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_CommandRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CommandRole, 'org.gwtproject.aria.client.CommandRole');

CommandRole.$markImplementor(/** @type {Function} */ (CommandRole));

exports = CommandRole; 
//# sourceMappingURL=CommandRole.js.map