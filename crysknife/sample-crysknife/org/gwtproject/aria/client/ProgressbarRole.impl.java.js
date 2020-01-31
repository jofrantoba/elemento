goog.module('org.gwtproject.aria.client.ProgressbarRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RangeRole = goog.require('org.gwtproject.aria.client.RangeRole$impl');

/**
 * @interface
 * @extends {RangeRole}
 */
class ProgressbarRole {
 
 static $clinit() {
  ProgressbarRole.$clinit = () =>{};
  ProgressbarRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RangeRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ProgressbarRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ProgressbarRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ProgressbarRole, 'org.gwtproject.aria.client.ProgressbarRole');

ProgressbarRole.$markImplementor(/** @type {Function} */ (ProgressbarRole));

exports = ProgressbarRole; 
//# sourceMappingURL=ProgressbarRole.js.map