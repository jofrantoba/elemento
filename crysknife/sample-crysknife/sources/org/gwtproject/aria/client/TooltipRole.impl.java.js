goog.module('org.gwtproject.aria.client.TooltipRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class TooltipRole {
 /**
  * @public
  */
 static $clinit() {
  TooltipRole.$clinit = () =>{};
  TooltipRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_TooltipRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TooltipRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TooltipRole, 'org.gwtproject.aria.client.TooltipRole');

TooltipRole.$markImplementor(/** @type {Function} */ (TooltipRole));

exports = TooltipRole; 
//# sourceMappingURL=TooltipRole.js.map