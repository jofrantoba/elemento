goog.module('org.gwtproject.aria.client.TabpanelRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class TabpanelRole {
 /**
  * @public
  */
 static $clinit() {
  TabpanelRole.$clinit = () =>{};
  TabpanelRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_TabpanelRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TabpanelRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TabpanelRole, 'org.gwtproject.aria.client.TabpanelRole');

TabpanelRole.$markImplementor(/** @type {Function} */ (TabpanelRole));

exports = TabpanelRole; 
//# sourceMappingURL=TabpanelRole.js.map