goog.module('org.gwtproject.aria.client.GridRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CompositeRole = goog.require('org.gwtproject.aria.client.CompositeRole$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {CompositeRole}
 * @extends {RegionRole}
 */
class GridRole {
 /** @abstract @return {?string} */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 /** @abstract */
 m_setAriaMultiselectableProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  GridRole.$clinit = () =>{};
  GridRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CompositeRole.$markImplementor(ctor);
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_GridRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_GridRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GridRole, 'org.gwtproject.aria.client.GridRole');

GridRole.$markImplementor(/** @type {Function} */ (GridRole));

exports = GridRole; 
//# sourceMappingURL=GridRole.js.map