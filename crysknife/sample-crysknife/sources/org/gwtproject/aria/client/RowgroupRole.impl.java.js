goog.module('org.gwtproject.aria.client.RowgroupRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');

/**
 * @interface
 * @extends {GroupRole}
 */
class RowgroupRole {
 /**
  * @public
  */
 static $clinit() {
  RowgroupRole.$clinit = () =>{};
  RowgroupRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RowgroupRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowgroupRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowgroupRole, 'org.gwtproject.aria.client.RowgroupRole');

RowgroupRole.$markImplementor(/** @type {Function} */ (RowgroupRole));

exports = RowgroupRole; 
//# sourceMappingURL=RowgroupRole.js.map