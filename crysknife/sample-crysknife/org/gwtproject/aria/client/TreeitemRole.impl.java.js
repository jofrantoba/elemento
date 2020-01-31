goog.module('org.gwtproject.aria.client.TreeitemRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListitemRole = goog.require('org.gwtproject.aria.client.ListitemRole$impl');
const OptionRole = goog.require('org.gwtproject.aria.client.OptionRole$impl');

/**
 * @interface
 * @extends {ListitemRole}
 * @extends {OptionRole}
 */
class TreeitemRole {
 
 static $clinit() {
  TreeitemRole.$clinit = () =>{};
  TreeitemRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ListitemRole.$markImplementor(ctor);
  OptionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TreeitemRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TreeitemRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeitemRole, 'org.gwtproject.aria.client.TreeitemRole');

TreeitemRole.$markImplementor(/** @type {Function} */ (TreeitemRole));

exports = TreeitemRole; 
//# sourceMappingURL=TreeitemRole.js.map