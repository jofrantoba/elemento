goog.module('org.gwtproject.aria.client.RowheaderRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const GridcellRole = goog.require('org.gwtproject.aria.client.GridcellRole$impl');
const SectionheadRole = goog.require('org.gwtproject.aria.client.SectionheadRole$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let SortValue = goog.forwardDeclare('org.gwtproject.aria.client.SortValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {GridcellRole}
 * @extends {SectionheadRole}
 * @extends {WidgetRole}
 */
class RowheaderRole {
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaSortProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaSortProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {SortValue} value
  * @public
  */
 m_setAriaSortProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SortValue(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  RowheaderRole.$clinit = () =>{};
  RowheaderRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  GridcellRole.$markImplementor(classConstructor);
  SectionheadRole.$markImplementor(classConstructor);
  WidgetRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RowheaderRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowheaderRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowheaderRole, 'org.gwtproject.aria.client.RowheaderRole');

RowheaderRole.$markImplementor(/** @type {Function} */ (RowheaderRole));

exports = RowheaderRole; 
//# sourceMappingURL=RowheaderRole.js.map