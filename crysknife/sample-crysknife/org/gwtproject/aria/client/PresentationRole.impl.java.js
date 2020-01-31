goog.module('org.gwtproject.aria.client.PresentationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StructureRole = goog.require('org.gwtproject.aria.client.StructureRole$impl');

/**
 * @interface
 * @extends {StructureRole}
 */
class PresentationRole {
 
 static $clinit() {
  PresentationRole.$clinit = () =>{};
  PresentationRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  StructureRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_PresentationRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_PresentationRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PresentationRole, 'org.gwtproject.aria.client.PresentationRole');

PresentationRole.$markImplementor(/** @type {Function} */ (PresentationRole));

exports = PresentationRole; 
//# sourceMappingURL=PresentationRole.js.map