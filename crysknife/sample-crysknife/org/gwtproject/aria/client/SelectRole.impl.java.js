goog.module('org.gwtproject.aria.client.SelectRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CompositeRole = goog.require('org.gwtproject.aria.client.CompositeRole$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');

/**
 * @interface
 * @extends {CompositeRole}
 * @extends {GroupRole}
 * @extends {InputRole}
 */
class SelectRole {
 /**
  * @public
  */
 static $clinit() {
  SelectRole.$clinit = () =>{};
  SelectRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CompositeRole.$markImplementor(classConstructor);
  GroupRole.$markImplementor(classConstructor);
  InputRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_SelectRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SelectRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SelectRole, 'org.gwtproject.aria.client.SelectRole');

SelectRole.$markImplementor(/** @type {Function} */ (SelectRole));

exports = SelectRole; 
//# sourceMappingURL=SelectRole.js.map