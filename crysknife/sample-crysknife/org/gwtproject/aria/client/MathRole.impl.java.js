goog.module('org.gwtproject.aria.client.MathRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class MathRole {
 
 static $clinit() {
  MathRole.$clinit = () =>{};
  MathRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MathRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MathRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MathRole, 'org.gwtproject.aria.client.MathRole');

MathRole.$markImplementor(/** @type {Function} */ (MathRole));

exports = MathRole; 
//# sourceMappingURL=MathRole.js.map