goog.module('org.gwtproject.aria.client.ComboboxRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

let AutocompleteValue = goog.forwardDeclare('org.gwtproject.aria.client.AutocompleteValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SelectRole}
 */
class ComboboxRole {
 /** @abstract @return {?string} */
 m_getAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaAutocompleteProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_AutocompleteValue(/** Object */ element, /** AutocompleteValue */ value) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  ComboboxRole.$clinit = () =>{};
  ComboboxRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SelectRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ComboboxRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ComboboxRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComboboxRole, 'org.gwtproject.aria.client.ComboboxRole');

ComboboxRole.$markImplementor(/** @type {Function} */ (ComboboxRole));

exports = ComboboxRole; 
//# sourceMappingURL=ComboboxRole.js.map