goog.module('org.gwtproject.aria.client.RowgroupRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');

/**
 * @interface
 * @extends {GroupRole}
 */
class RowgroupRole {
 
 static $clinit() {
  RowgroupRole.$clinit = () =>{};
  RowgroupRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  GroupRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RowgroupRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowgroupRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowgroupRole, 'org.gwtproject.aria.client.RowgroupRole');

RowgroupRole.$markImplementor(/** @type {Function} */ (RowgroupRole));

exports = RowgroupRole; 
//# sourceMappingURL=RowgroupRole.js.map