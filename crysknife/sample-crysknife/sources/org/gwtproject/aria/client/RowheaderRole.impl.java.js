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
 /** @abstract @return {?string} */
 m_getAriaSortProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSortProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaSortProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SortValue(/** Object */ element, /** SortValue */ value) {}
 
 static $clinit() {
  RowheaderRole.$clinit = () =>{};
  RowheaderRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  GridcellRole.$markImplementor(ctor);
  SectionheadRole.$markImplementor(ctor);
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RowheaderRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowheaderRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowheaderRole, 'org.gwtproject.aria.client.RowheaderRole');

RowheaderRole.$markImplementor(/** @type {Function} */ (RowheaderRole));

exports = RowheaderRole; 
//# sourceMappingURL=RowheaderRole.js.map