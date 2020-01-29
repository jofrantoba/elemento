goog.module('org.gwtproject.aria.client.PresentationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StructureRole = goog.require('org.gwtproject.aria.client.StructureRole$impl');

/**
 * @interface
 * @extends {StructureRole}
 */
class PresentationRole {
 /**
  * @public
  */
 static $clinit() {
  PresentationRole.$clinit = () =>{};
  PresentationRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  StructureRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_PresentationRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_PresentationRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PresentationRole, 'org.gwtproject.aria.client.PresentationRole');

PresentationRole.$markImplementor(/** @type {Function} */ (PresentationRole));

exports = PresentationRole; 
//# sourceMappingURL=PresentationRole.js.map