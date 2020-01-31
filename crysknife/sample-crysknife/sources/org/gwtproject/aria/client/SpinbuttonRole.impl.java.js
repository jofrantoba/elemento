goog.module('org.gwtproject.aria.client.SpinbuttonRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');
const RangeRole = goog.require('org.gwtproject.aria.client.RangeRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 * @extends {RangeRole}
 */
class SpinbuttonRole {
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  SpinbuttonRole.$clinit = () =>{};
  SpinbuttonRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  RangeRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_SpinbuttonRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SpinbuttonRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SpinbuttonRole, 'org.gwtproject.aria.client.SpinbuttonRole');

SpinbuttonRole.$markImplementor(/** @type {Function} */ (SpinbuttonRole));

exports = SpinbuttonRole; 
//# sourceMappingURL=SpinbuttonRole.js.map