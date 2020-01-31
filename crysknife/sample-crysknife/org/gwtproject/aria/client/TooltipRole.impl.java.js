goog.module('org.gwtproject.aria.client.TooltipRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class TooltipRole {
 
 static $clinit() {
  TooltipRole.$clinit = () =>{};
  TooltipRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TooltipRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TooltipRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TooltipRole, 'org.gwtproject.aria.client.TooltipRole');

TooltipRole.$markImplementor(/** @type {Function} */ (TooltipRole));

exports = TooltipRole; 
//# sourceMappingURL=TooltipRole.js.map