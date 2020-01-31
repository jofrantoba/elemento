goog.module('org.gwtproject.aria.client.GridcellRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionRole}
 * @extends {WidgetRole}
 */
class GridcellRole {
 /** @abstract @return {?string} */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {}
 
 static $clinit() {
  GridcellRole.$clinit = () =>{};
  GridcellRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_GridcellRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_GridcellRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GridcellRole, 'org.gwtproject.aria.client.GridcellRole');

GridcellRole.$markImplementor(/** @type {Function} */ (GridcellRole));

exports = GridcellRole; 
//# sourceMappingURL=GridcellRole.js.map