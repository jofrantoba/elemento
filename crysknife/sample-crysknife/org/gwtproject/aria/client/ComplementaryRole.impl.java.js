goog.module('org.gwtproject.aria.client.ComplementaryRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ComplementaryRole {
 
 static $clinit() {
  ComplementaryRole.$clinit = () =>{};
  ComplementaryRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ComplementaryRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ComplementaryRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComplementaryRole, 'org.gwtproject.aria.client.ComplementaryRole');

ComplementaryRole.$markImplementor(/** @type {Function} */ (ComplementaryRole));

exports = ComplementaryRole; 
//# sourceMappingURL=ComplementaryRole.js.map