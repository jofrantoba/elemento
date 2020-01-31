goog.module('org.gwtproject.aria.client.ButtonRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CommandRole = goog.require('org.gwtproject.aria.client.CommandRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let PressedValue = goog.forwardDeclare('org.gwtproject.aria.client.PressedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {CommandRole}
 */
class ButtonRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaPressedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaPressedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 /** @abstract */
 m_setAriaPressedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_PressedValue(/** Object */ element, /** PressedValue */ value) {}
 
 static $clinit() {
  ButtonRole.$clinit = () =>{};
  ButtonRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CommandRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ButtonRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ButtonRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ButtonRole, 'org.gwtproject.aria.client.ButtonRole');

ButtonRole.$markImplementor(/** @type {Function} */ (ButtonRole));

exports = ButtonRole; 
//# sourceMappingURL=ButtonRole.js.map