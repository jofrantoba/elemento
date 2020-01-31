goog.module('org.gwtproject.aria.client.ImgRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class ImgRole {
 
 static $clinit() {
  ImgRole.$clinit = () =>{};
  ImgRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ImgRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ImgRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImgRole, 'org.gwtproject.aria.client.ImgRole');

ImgRole.$markImplementor(/** @type {Function} */ (ImgRole));

exports = ImgRole; 
//# sourceMappingURL=ImgRole.js.map