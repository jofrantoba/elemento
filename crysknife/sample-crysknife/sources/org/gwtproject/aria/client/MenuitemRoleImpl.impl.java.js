goog.module('org.gwtproject.aria.client.MenuitemRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuitemRole = goog.require('org.gwtproject.aria.client.MenuitemRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

/**
 * @implements {MenuitemRole}
  */
class MenuitemRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!MenuitemRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  MenuitemRoleImpl.$clinit();
  let $instance = new MenuitemRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_MenuitemRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_MenuitemRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @public
  */
 static $clinit() {
  MenuitemRoleImpl.$clinit = () =>{};
  MenuitemRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MenuitemRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MenuitemRoleImpl, 'org.gwtproject.aria.client.MenuitemRoleImpl');

MenuitemRole.$markImplementor(MenuitemRoleImpl);

exports = MenuitemRoleImpl; 
//# sourceMappingURL=MenuitemRoleImpl.js.map