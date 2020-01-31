goog.module('org.gwtproject.aria.client.PresentationRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PresentationRole = goog.require('org.gwtproject.aria.client.PresentationRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

/**
 * @implements {PresentationRole}
  */
class PresentationRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PresentationRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  PresentationRoleImpl.$clinit();
  let $instance = new PresentationRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_PresentationRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_PresentationRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 
 static $clinit() {
  PresentationRoleImpl.$clinit = () =>{};
  PresentationRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PresentationRoleImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PresentationRoleImpl, 'org.gwtproject.aria.client.PresentationRoleImpl');

PresentationRole.$markImplementor(PresentationRoleImpl);

exports = PresentationRoleImpl; 
//# sourceMappingURL=PresentationRoleImpl.js.map