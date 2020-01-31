goog.module('org.gwtproject.aria.client.NoteRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class NoteRole {
 
 static $clinit() {
  NoteRole.$clinit = () =>{};
  NoteRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_NoteRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_NoteRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NoteRole, 'org.gwtproject.aria.client.NoteRole');

NoteRole.$markImplementor(/** @type {Function} */ (NoteRole));

exports = NoteRole; 
//# sourceMappingURL=NoteRole.js.map