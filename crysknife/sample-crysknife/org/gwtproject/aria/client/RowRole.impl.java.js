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
 /** @abstract @return {?string} */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 /** @abstract */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {}
 
 static $clinit() {
  RowRole.$clinit = () =>{};
  RowRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  GroupRole.$markImplementor(ctor);
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RowRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RowRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RowRole, 'org.gwtproject.aria.client.RowRole');

RowRole.$markImplementor(/** @type {Function} */ (RowRole));

exports = RowRole; 
//# sourceMappingURL=RowRole.js.map