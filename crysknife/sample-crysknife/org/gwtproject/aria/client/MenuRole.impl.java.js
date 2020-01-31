goog.module('org.gwtproject.aria.client.MenuRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListRole = goog.require('org.gwtproject.aria.client.ListRole$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

/**
 * @interface
 * @extends {ListRole}
 * @extends {SelectRole}
 */
class MenuRole {
 
 static $clinit() {
  MenuRole.$clinit = () =>{};
  MenuRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ListRole.$markImplementor(ctor);
  SelectRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MenuRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MenuRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MenuRole, 'org.gwtproject.aria.client.MenuRole');

MenuRole.$markImplementor(/** @type {Function} */ (MenuRole));

exports = MenuRole; 
//# sourceMappingURL=MenuRole.js.map