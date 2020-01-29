goog.module('org.gwtproject.aria.client.MenubarRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuRole = goog.require('org.gwtproject.aria.client.MenuRole$impl');

/**
 * @interface
 * @extends {MenuRole}
 */
class MenubarRole {
 /**
  * @public
  */
 static $clinit() {
  MenubarRole.$clinit = () =>{};
  MenubarRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  MenuRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_MenubarRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenubarRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenubarRole, 'org.gwtproject.aria.client.MenubarRole');

MenubarRole.$markImplementor(/** @type {Function} */ (MenubarRole));

exports = MenubarRole; 
//# sourceMappingURL=MenubarRole.js.map