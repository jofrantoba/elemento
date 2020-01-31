goog.module('org.gwtproject.aria.client.MenuitemRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuitemRole = goog.require('org.gwtproject.aria.client.MenuitemRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

/**
 * @implements {MenuitemRole}
  */
class MenuitemRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MenuitemRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  MenuitemRoleImpl.$clinit();
  let $instance = new MenuitemRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_MenuitemRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_MenuitemRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 
 static $clinit() {
  MenuitemRoleImpl.$clinit = () =>{};
  MenuitemRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuitemRoleImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MenuitemRoleImpl, 'org.gwtproject.aria.client.MenuitemRoleImpl');

MenuitemRole.$markImplementor(MenuitemRoleImpl);

exports = MenuitemRoleImpl; 
//# sourceMappingURL=MenuitemRoleImpl.js.map