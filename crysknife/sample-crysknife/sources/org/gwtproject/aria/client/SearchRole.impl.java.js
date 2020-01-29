goog.module('org.gwtproject.aria.client.SearchRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class SearchRole {
 /**
  * @public
  */
 static $clinit() {
  SearchRole.$clinit = () =>{};
  SearchRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_SearchRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SearchRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SearchRole, 'org.gwtproject.aria.client.SearchRole');

SearchRole.$markImplementor(/** @type {Function} */ (SearchRole));

exports = SearchRole; 
//# sourceMappingURL=SearchRole.js.map