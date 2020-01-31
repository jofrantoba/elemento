goog.module('org.gwtproject.aria.client.WidgetRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

/**
 * @interface
 * @extends {Role}
 */
class WidgetRole {
 
 static $clinit() {
  WidgetRole.$clinit = () =>{};
  WidgetRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Role.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_WidgetRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_WidgetRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(WidgetRole, 'org.gwtproject.aria.client.WidgetRole');

WidgetRole.$markImplementor(/** @type {Function} */ (WidgetRole));

exports = WidgetRole; 
//# sourceMappingURL=WidgetRole.js.map