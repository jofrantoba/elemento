goog.module('org.gwtproject.aria.client.MenuitemRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CommandRole = goog.require('org.gwtproject.aria.client.CommandRole$impl');

/**
 * @interface
 * @extends {CommandRole}
 */
class MenuitemRole {
 /**
  * @public
  */
 static $clinit() {
  MenuitemRole.$clinit = () =>{};
  MenuitemRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CommandRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_MenuitemRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuitemRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuitemRole, 'org.gwtproject.aria.client.MenuitemRole');

MenuitemRole.$markImplementor(/** @type {Function} */ (MenuitemRole));

exports = MenuitemRole; 
//# sourceMappingURL=MenuitemRole.js.map