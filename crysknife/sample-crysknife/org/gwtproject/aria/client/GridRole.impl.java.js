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
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaMultiselectableProperty__org_gwtproject_dom_client_Element(element) {}
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
  * @public
  */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaMultiselectableProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaMultiselectableProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  GridRole.$clinit = () =>{};
  GridRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CompositeRole.$markImplementor(classConstructor);
  RegionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_GridRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_GridRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GridRole, 'org.gwtproject.aria.client.GridRole');

GridRole.$markImplementor(/** @type {Function} */ (GridRole));

exports = GridRole; 
//# sourceMappingURL=GridRole.js.map