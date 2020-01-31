goog.module('org.gwtproject.aria.client.TreeRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SelectRole}
 */
class TreeRole {
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
  TreeRole.$clinit = () =>{};
  TreeRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SelectRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TreeRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TreeRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TreeRole, 'org.gwtproject.aria.client.TreeRole');

TreeRole.$markImplementor(/** @type {Function} */ (TreeRole));

exports = TreeRole; 
//# sourceMappingURL=TreeRole.js.map