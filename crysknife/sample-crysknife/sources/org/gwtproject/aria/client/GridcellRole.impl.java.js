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
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {SelectedValue} value
  * @public
  */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  GridcellRole.$clinit = () =>{};
  GridcellRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SectionRole.$markImplementor(classConstructor);
  WidgetRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_GridcellRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_GridcellRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GridcellRole, 'org.gwtproject.aria.client.GridcellRole');

GridcellRole.$markImplementor(/** @type {Function} */ (GridcellRole));

exports = GridcellRole; 
//# sourceMappingURL=GridcellRole.js.map