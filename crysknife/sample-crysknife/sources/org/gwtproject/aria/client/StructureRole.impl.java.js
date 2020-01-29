goog.module('org.gwtproject.aria.client.StructureRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

/**
 * @interface
 * @extends {Role}
 */
class StructureRole {
 /**
  * @public
  */
 static $clinit() {
  StructureRole.$clinit = () =>{};
  StructureRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Role.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_StructureRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_StructureRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StructureRole, 'org.gwtproject.aria.client.StructureRole');

StructureRole.$markImplementor(/** @type {Function} */ (StructureRole));

exports = StructureRole; 
//# sourceMappingURL=StructureRole.js.map