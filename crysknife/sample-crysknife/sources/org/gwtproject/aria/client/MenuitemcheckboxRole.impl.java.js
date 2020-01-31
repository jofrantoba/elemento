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
 
 static $clinit() {
  MenuitemcheckboxRole.$clinit = () =>{};
  MenuitemcheckboxRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CheckboxRole.$markImplementor(ctor);
  MenuitemRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MenuitemcheckboxRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuitemcheckboxRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuitemcheckboxRole, 'org.gwtproject.aria.client.MenuitemcheckboxRole');

MenuitemcheckboxRole.$markImplementor(/** @type {Function} */ (MenuitemcheckboxRole));

exports = MenuitemcheckboxRole; 
//# sourceMappingURL=MenuitemcheckboxRole.js.map