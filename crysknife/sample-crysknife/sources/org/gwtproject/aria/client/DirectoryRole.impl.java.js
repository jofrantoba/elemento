goog.module('org.gwtproject.aria.client.DirectoryRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListRole = goog.require('org.gwtproject.aria.client.ListRole$impl');

/**
 * @interface
 * @extends {ListRole}
 */
class DirectoryRole {
 
 static $clinit() {
  DirectoryRole.$clinit = () =>{};
  DirectoryRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ListRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_DirectoryRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DirectoryRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DirectoryRole, 'org.gwtproject.aria.client.DirectoryRole');

DirectoryRole.$markImplementor(/** @type {Function} */ (DirectoryRole));

exports = DirectoryRole; 
//# sourceMappingURL=DirectoryRole.js.map