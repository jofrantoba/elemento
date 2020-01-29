goog.module('org.gwtproject.aria.client.NoteRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class NoteRole {
 /**
  * @public
  */
 static $clinit() {
  NoteRole.$clinit = () =>{};
  NoteRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_NoteRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_NoteRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NoteRole, 'org.gwtproject.aria.client.NoteRole');

NoteRole.$markImplementor(/** @type {Function} */ (NoteRole));

exports = NoteRole; 
//# sourceMappingURL=NoteRole.js.map