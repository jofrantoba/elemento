goog.module('org.gwtproject.aria.client.ContentinfoRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ContentinfoRole {
 /**
  * @public
  */
 static $clinit() {
  ContentinfoRole.$clinit = () =>{};
  ContentinfoRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  LandmarkRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ContentinfoRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ContentinfoRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ContentinfoRole, 'org.gwtproject.aria.client.ContentinfoRole');

ContentinfoRole.$markImplementor(/** @type {Function} */ (ContentinfoRole));

exports = ContentinfoRole; 
//# sourceMappingURL=ContentinfoRole.js.map