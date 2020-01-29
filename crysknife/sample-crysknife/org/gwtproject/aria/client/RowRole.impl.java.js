goog.module('org.gwtproject.aria.client.RowRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GroupRole = goog.require('org.gwtproject.aria.client.GroupRole$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {GroupRole}
 * @extends {WidgetRole}
 */
class RowRole {
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
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(element) {}
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
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(element) {}
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
  * @param {SelectedValue} value
  * @public
  */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  RowRole.$clinit = () =>{};
  RowRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  GroupRole.$markImplementor(classConstructor);
  WidgetRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RowRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowRole, 'org.gwtproject.aria.client.RowRole');

RowRole.$markImplementor(/** @type {Function} */ (RowRole));

exports = RowRole; 
//# sourceMappingURL=RowRole.js.map