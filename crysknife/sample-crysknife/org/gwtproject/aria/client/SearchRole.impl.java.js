goog.module('org.gwtproject.aria.client.SearchRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class SearchRole {
 
 static $clinit() {
  SearchRole.$clinit = () =>{};
  SearchRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_SearchRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SearchRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SearchRole, 'org.gwtproject.aria.client.SearchRole');

SearchRole.$markImplementor(/** @type {Function} */ (SearchRole));

exports = SearchRole; 
//# sourceMappingURL=SearchRole.js.map