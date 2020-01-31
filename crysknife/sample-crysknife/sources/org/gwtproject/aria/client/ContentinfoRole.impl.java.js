goog.module('org.gwtproject.aria.client.ContentinfoRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ContentinfoRole {
 
 static $clinit() {
  ContentinfoRole.$clinit = () =>{};
  ContentinfoRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ContentinfoRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ContentinfoRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ContentinfoRole, 'org.gwtproject.aria.client.ContentinfoRole');

ContentinfoRole.$markImplementor(/** @type {Function} */ (ContentinfoRole));

exports = ContentinfoRole; 
//# sourceMappingURL=ContentinfoRole.js.map