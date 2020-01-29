goog.module('org.gwtproject.aria.client.ProgressbarRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RangeRole = goog.require('org.gwtproject.aria.client.RangeRole$impl');

/**
 * @interface
 * @extends {RangeRole}
 */
class ProgressbarRole {
 /**
  * @public
  */
 static $clinit() {
  ProgressbarRole.$clinit = () =>{};
  ProgressbarRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  RangeRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ProgressbarRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ProgressbarRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ProgressbarRole, 'org.gwtproject.aria.client.ProgressbarRole');

ProgressbarRole.$markImplementor(/** @type {Function} */ (ProgressbarRole));

exports = ProgressbarRole; 
//# sourceMappingURL=ProgressbarRole.js.map