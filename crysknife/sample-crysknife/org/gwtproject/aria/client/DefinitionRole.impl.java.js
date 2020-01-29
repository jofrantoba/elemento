goog.module('org.gwtproject.aria.client.DefinitionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class DefinitionRole {
 /**
  * @public
  */
 static $clinit() {
  DefinitionRole.$clinit = () =>{};
  DefinitionRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_DefinitionRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DefinitionRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefinitionRole, 'org.gwtproject.aria.client.DefinitionRole');

DefinitionRole.$markImplementor(/** @type {Function} */ (DefinitionRole));

exports = DefinitionRole; 
//# sourceMappingURL=DefinitionRole.js.map