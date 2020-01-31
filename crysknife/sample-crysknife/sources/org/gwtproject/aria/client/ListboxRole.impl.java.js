goog.module('org.gwtproject.aria.client.ListboxRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListRole = goog.require('org.gwtproject.aria.client.ListRole$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {ListRole}
 * @extends {SelectRole}
 */
class ListboxRole {
 /** @abstract @return {?string} */
 m_getAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaMultiselectableProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  ListboxRole.$clinit = () =>{};
  ListboxRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ListRole.$markImplementor(ctor);
  SelectRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ListboxRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ListboxRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ListboxRole, 'org.gwtproject.aria.client.ListboxRole');

ListboxRole.$markImplementor(/** @type {Function} */ (ListboxRole));

exports = ListboxRole; 
//# sourceMappingURL=ListboxRole.js.map