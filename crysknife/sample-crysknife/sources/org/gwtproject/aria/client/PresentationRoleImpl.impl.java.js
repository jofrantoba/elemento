goog.module('org.gwtproject.aria.client.PresentationRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PresentationRole = goog.require('org.gwtproject.aria.client.PresentationRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

/**
 * @implements {PresentationRole}
  */
class PresentationRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!PresentationRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  PresentationRoleImpl.$clinit();
  let $instance = new PresentationRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_PresentationRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_PresentationRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @public
  */
 static $clinit() {
  PresentationRoleImpl.$clinit = () =>{};
  PresentationRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PresentationRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PresentationRoleImpl, 'org.gwtproject.aria.client.PresentationRoleImpl');

PresentationRole.$markImplementor(PresentationRoleImpl);

exports = PresentationRoleImpl; 
//# sourceMappingURL=PresentationRoleImpl.js.map