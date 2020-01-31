goog.module('org.gwtproject.aria.client.TabpanelRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class TabpanelRole {
 
 static $clinit() {
  TabpanelRole.$clinit = () =>{};
  TabpanelRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TabpanelRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TabpanelRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TabpanelRole, 'org.gwtproject.aria.client.TabpanelRole');

TabpanelRole.$markImplementor(/** @type {Function} */ (TabpanelRole));

exports = TabpanelRole; 
//# sourceMappingURL=TabpanelRole.js.map