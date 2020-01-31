goog.module('org.gwtproject.aria.client.RadioRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckboxRole = goog.require('org.gwtproject.aria.client.CheckboxRole$impl');
const OptionRole = goog.require('org.gwtproject.aria.client.OptionRole$impl');

/**
 * @interface
 * @extends {CheckboxRole}
 * @extends {OptionRole}
 */
class RadioRole {
 
 static $clinit() {
  RadioRole.$clinit = () =>{};
  RadioRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CheckboxRole.$markImplementor(ctor);
  OptionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RadioRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RadioRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RadioRole, 'org.gwtproject.aria.client.RadioRole');

RadioRole.$markImplementor(/** @type {Function} */ (RadioRole));

exports = RadioRole; 
//# sourceMappingURL=RadioRole.js.map