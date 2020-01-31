goog.module('org.gwtproject.aria.client.StructureRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

/**
 * @interface
 * @extends {Role}
 */
class StructureRole {
 
 static $clinit() {
  StructureRole.$clinit = () =>{};
  StructureRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Role.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_StructureRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_StructureRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StructureRole, 'org.gwtproject.aria.client.StructureRole');

StructureRole.$markImplementor(/** @type {Function} */ (StructureRole));

exports = StructureRole; 
//# sourceMappingURL=StructureRole.js.map