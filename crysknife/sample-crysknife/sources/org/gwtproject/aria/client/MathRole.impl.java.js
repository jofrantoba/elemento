goog.module('org.gwtproject.aria.client.MathRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class MathRole {
 /**
  * @public
  */
 static $clinit() {
  MathRole.$clinit = () =>{};
  MathRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_MathRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MathRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MathRole, 'org.gwtproject.aria.client.MathRole');

MathRole.$markImplementor(/** @type {Function} */ (MathRole));

exports = MathRole; 
//# sourceMappingURL=MathRole.js.map