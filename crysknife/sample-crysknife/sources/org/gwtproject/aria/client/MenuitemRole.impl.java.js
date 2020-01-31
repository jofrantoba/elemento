goog.module('org.gwtproject.aria.client.MenuitemRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CommandRole = goog.require('org.gwtproject.aria.client.CommandRole$impl');

/**
 * @interface
 * @extends {CommandRole}
 */
class MenuitemRole {
 
 static $clinit() {
  MenuitemRole.$clinit = () =>{};
  MenuitemRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CommandRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MenuitemRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuitemRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuitemRole, 'org.gwtproject.aria.client.MenuitemRole');

MenuitemRole.$markImplementor(/** @type {Function} */ (MenuitemRole));

exports = MenuitemRole; 
//# sourceMappingURL=MenuitemRole.js.map