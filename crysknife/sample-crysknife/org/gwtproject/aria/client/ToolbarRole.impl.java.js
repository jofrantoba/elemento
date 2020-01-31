goog.module('org.gwtproject.aria.client.ToolbarRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');

/**
 * @interface
 * @extends {GroupRole}
 */
class ToolbarRole {
 
 static $clinit() {
  ToolbarRole.$clinit = () =>{};
  ToolbarRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  GroupRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ToolbarRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ToolbarRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ToolbarRole, 'org.gwtproject.aria.client.ToolbarRole');

ToolbarRole.$markImplementor(/** @type {Function} */ (ToolbarRole));

exports = ToolbarRole; 
//# sourceMappingURL=ToolbarRole.js.map