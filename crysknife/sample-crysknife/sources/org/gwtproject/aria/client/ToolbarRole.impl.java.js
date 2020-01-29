goog.module('org.gwtproject.aria.client.ToolbarRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');

/**
 * @interface
 * @extends {GroupRole}
 */
class ToolbarRole {
 /**
  * @public
  */
 static $clinit() {
  ToolbarRole.$clinit = () =>{};
  ToolbarRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  GroupRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ToolbarRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ToolbarRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ToolbarRole, 'org.gwtproject.aria.client.ToolbarRole');

ToolbarRole.$markImplementor(/** @type {Function} */ (ToolbarRole));

exports = ToolbarRole; 
//# sourceMappingURL=ToolbarRole.js.map