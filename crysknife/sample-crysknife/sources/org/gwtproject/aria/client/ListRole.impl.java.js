goog.module('org.gwtproject.aria.client.ListRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class ListRole {
 
 static $clinit() {
  ListRole.$clinit = () =>{};
  ListRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ListRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ListRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ListRole, 'org.gwtproject.aria.client.ListRole');

ListRole.$markImplementor(/** @type {Function} */ (ListRole));

exports = ListRole; 
//# sourceMappingURL=ListRole.js.map