goog.module('org.gwtproject.aria.client.CheckboxRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');

let CheckedValue = goog.forwardDeclare('org.gwtproject.aria.client.CheckedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 */
class CheckboxRole {
 /** @abstract @return {?string} */
 m_getAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaCheckedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_CheckedValue(/** Object */ element, /** CheckedValue */ value) {}
 
 static $clinit() {
  CheckboxRole.$clinit = () =>{};
  CheckboxRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_CheckboxRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_CheckboxRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CheckboxRole, 'org.gwtproject.aria.client.CheckboxRole');

CheckboxRole.$markImplementor(/** @type {Function} */ (CheckboxRole));

exports = CheckboxRole; 
//# sourceMappingURL=CheckboxRole.js.map