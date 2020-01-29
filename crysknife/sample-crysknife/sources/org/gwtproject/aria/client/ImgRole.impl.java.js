goog.module('org.gwtproject.aria.client.ImgRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class ImgRole {
 /**
  * @public
  */
 static $clinit() {
  ImgRole.$clinit = () =>{};
  ImgRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ImgRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ImgRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImgRole, 'org.gwtproject.aria.client.ImgRole');

ImgRole.$markImplementor(/** @type {Function} */ (ImgRole));

exports = ImgRole; 
//# sourceMappingURL=ImgRole.js.map