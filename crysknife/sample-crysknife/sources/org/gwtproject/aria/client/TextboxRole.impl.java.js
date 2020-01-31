goog.module('org.gwtproject.aria.client.TextboxRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');

let AutocompleteValue = goog.forwardDeclare('org.gwtproject.aria.client.AutocompleteValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 */
class TextboxRole {
 /** @abstract @return {?string} */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaMultilineProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaMultilineProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(/** Object */ element, /** Id */ value) {}
 /** @abstract */
 m_setAriaAutocompleteProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_AutocompleteValue(/** Object */ element, /** AutocompleteValue */ value) {}
 /** @abstract */
 m_setAriaMultilineProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  TextboxRole.$clinit = () =>{};
  TextboxRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TextboxRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TextboxRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextboxRole, 'org.gwtproject.aria.client.TextboxRole');

TextboxRole.$markImplementor(/** @type {Function} */ (TextboxRole));

exports = TextboxRole; 
//# sourceMappingURL=TextboxRole.js.map