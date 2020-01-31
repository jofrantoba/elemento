goog.module('org.gwtproject.aria.client.DefinitionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class DefinitionRole {
 
 static $clinit() {
  DefinitionRole.$clinit = () =>{};
  DefinitionRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_DefinitionRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DefinitionRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefinitionRole, 'org.gwtproject.aria.client.DefinitionRole');

DefinitionRole.$markImplementor(/** @type {Function} */ (DefinitionRole));

exports = DefinitionRole; 
//# sourceMappingURL=DefinitionRole.js.map