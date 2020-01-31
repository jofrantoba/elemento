goog.module('org.gwtproject.aria.client.MenuitemradioRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuitemcheckboxRole = goog.require('org.gwtproject.aria.client.MenuitemcheckboxRole$impl');
const RadioRole = goog.require('org.gwtproject.aria.client.RadioRole$impl');

/**
 * @interface
 * @extends {MenuitemcheckboxRole}
 * @extends {RadioRole}
 */
class MenuitemradioRole {
 
 static $clinit() {
  MenuitemradioRole.$clinit = () =>{};
  MenuitemradioRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  MenuitemcheckboxRole.$markImplementor(ctor);
  RadioRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MenuitemradioRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuitemradioRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuitemradioRole, 'org.gwtproject.aria.client.MenuitemradioRole');

MenuitemradioRole.$markImplementor(/** @type {Function} */ (MenuitemradioRole));

exports = MenuitemradioRole; 
//# sourceMappingURL=MenuitemradioRole.js.map