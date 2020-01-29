goog.module('org.gwtproject.aria.client.TreegridRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GridRole = goog.require('org.gwtproject.aria.client.GridRole$impl');
const TreeRole = goog.require('org.gwtproject.aria.client.TreeRole$impl');

/**
 * @interface
 * @extends {GridRole}
 * @extends {TreeRole}
 */
class TreegridRole {
 /**
  * @public
  */
 static $clinit() {
  TreegridRole.$clinit = () =>{};
  TreegridRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  GridRole.$markImplementor(classConstructor);
  TreeRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_TreegridRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TreegridRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreegridRole, 'org.gwtproject.aria.client.TreegridRole');

TreegridRole.$markImplementor(/** @type {Function} */ (TreegridRole));

exports = TreegridRole; 
//# sourceMappingURL=TreegridRole.js.map