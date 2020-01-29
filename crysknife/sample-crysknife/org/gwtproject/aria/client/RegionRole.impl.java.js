goog.module('org.gwtproject.aria.client.RegionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class RegionRole {
 /**
  * @public
  */
 static $clinit() {
  RegionRole.$clinit = () =>{};
  RegionRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SectionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RegionRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RegionRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RegionRole, 'org.gwtproject.aria.client.RegionRole');

RegionRole.$markImplementor(/** @type {Function} */ (RegionRole));

exports = RegionRole; 
//# sourceMappingURL=RegionRole.js.map