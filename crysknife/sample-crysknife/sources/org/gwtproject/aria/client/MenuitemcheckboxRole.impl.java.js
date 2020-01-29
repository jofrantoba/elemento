goog.module('org.gwtproject.aria.client.MenuitemcheckboxRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckboxRole = goog.require('org.gwtproject.aria.client.CheckboxRole$impl');
const MenuitemRole = goog.require('org.gwtproject.aria.client.MenuitemRole$impl');

/**
 * @interface
 * @extends {CheckboxRole}
 * @extends {MenuitemRole}
 */
class MenuitemcheckboxRole {
 /**
  * @public
  */
 static $clinit() {
  MenuitemcheckboxRole.$clinit = () =>{};
  MenuitemcheckboxRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CheckboxRole.$markImplementor(classConstructor);
  MenuitemRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_MenuitemcheckboxRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuitemcheckboxRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuitemcheckboxRole, 'org.gwtproject.aria.client.MenuitemcheckboxRole');

MenuitemcheckboxRole.$markImplementor(/** @type {Function} */ (MenuitemcheckboxRole));

exports = MenuitemcheckboxRole; 
//# sourceMappingURL=MenuitemcheckboxRole.js.map