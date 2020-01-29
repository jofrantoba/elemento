goog.module('org.gwtproject.aria.client.ListRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class ListRole {
 /**
  * @public
  */
 static $clinit() {
  ListRole.$clinit = () =>{};
  ListRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  RegionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ListRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ListRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ListRole, 'org.gwtproject.aria.client.ListRole');

ListRole.$markImplementor(/** @type {Function} */ (ListRole));

exports = ListRole; 
//# sourceMappingURL=ListRole.js.map