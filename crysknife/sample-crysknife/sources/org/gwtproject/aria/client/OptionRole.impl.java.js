goog.module('org.gwtproject.aria.client.OptionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');

let CheckedValue = goog.forwardDeclare('org.gwtproject.aria.client.CheckedValue$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 */
class OptionRole {
 /** @abstract @return {?string} */
 m_getAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaCheckedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_CheckedValue(/** Object */ element, /** CheckedValue */ value) {}
 /** @abstract */
 m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 /** @abstract */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {}
 /** @abstract */
 m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 
 static $clinit() {
  OptionRole.$clinit = () =>{};
  OptionRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_OptionRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_OptionRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OptionRole, 'org.gwtproject.aria.client.OptionRole');

OptionRole.$markImplementor(/** @type {Function} */ (OptionRole));

exports = OptionRole; 
//# sourceMappingURL=OptionRole.js.map