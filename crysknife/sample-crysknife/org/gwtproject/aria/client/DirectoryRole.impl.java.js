goog.module('org.gwtproject.aria.client.DirectoryRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListRole = goog.require('org.gwtproject.aria.client.ListRole$impl');

/**
 * @interface
 * @extends {ListRole}
 */
class DirectoryRole {
 /**
  * @public
  */
 static $clinit() {
  DirectoryRole.$clinit = () =>{};
  DirectoryRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ListRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_DirectoryRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DirectoryRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DirectoryRole, 'org.gwtproject.aria.client.DirectoryRole');

DirectoryRole.$markImplementor(/** @type {Function} */ (DirectoryRole));

exports = DirectoryRole; 
//# sourceMappingURL=DirectoryRole.js.map