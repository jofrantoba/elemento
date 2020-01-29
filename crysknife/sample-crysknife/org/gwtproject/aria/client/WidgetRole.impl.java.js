goog.module('org.gwtproject.aria.client.WidgetRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

/**
 * @interface
 * @extends {Role}
 */
class WidgetRole {
 /**
  * @public
  */
 static $clinit() {
  WidgetRole.$clinit = () =>{};
  WidgetRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Role.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_WidgetRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_WidgetRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(WidgetRole, 'org.gwtproject.aria.client.WidgetRole');

WidgetRole.$markImplementor(/** @type {Function} */ (WidgetRole));

exports = WidgetRole; 
//# sourceMappingURL=WidgetRole.js.map