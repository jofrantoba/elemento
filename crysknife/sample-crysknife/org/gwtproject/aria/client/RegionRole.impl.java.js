goog.module('org.gwtproject.aria.client.RegionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class RegionRole {
 
 static $clinit() {
  RegionRole.$clinit = () =>{};
  RegionRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RegionRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RegionRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RegionRole, 'org.gwtproject.aria.client.RegionRole');

RegionRole.$markImplementor(/** @type {Function} */ (RegionRole));

exports = RegionRole; 
//# sourceMappingURL=RegionRole.js.map