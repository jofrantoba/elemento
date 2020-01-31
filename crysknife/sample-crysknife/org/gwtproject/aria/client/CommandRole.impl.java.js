goog.module('org.gwtproject.aria.client.CommandRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class CommandRole {
 
 static $clinit() {
  CommandRole.$clinit = () =>{};
  CommandRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_CommandRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_CommandRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CommandRole, 'org.gwtproject.aria.client.CommandRole');

CommandRole.$markImplementor(/** @type {Function} */ (CommandRole));

exports = CommandRole; 
//# sourceMappingURL=CommandRole.js.map