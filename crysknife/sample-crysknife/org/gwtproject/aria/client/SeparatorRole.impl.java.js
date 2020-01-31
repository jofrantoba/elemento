goog.module('org.gwtproject.aria.client.SeparatorRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StructureRole = goog.require('org.gwtproject.aria.client.StructureRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {StructureRole}
 */
class SeparatorRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 /** @abstract */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(/** Object */ element, /** OrientationValue */ value) {}
 
 static $clinit() {
  SeparatorRole.$clinit = () =>{};
  SeparatorRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  StructureRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_SeparatorRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SeparatorRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SeparatorRole, 'org.gwtproject.aria.client.SeparatorRole');

SeparatorRole.$markImplementor(/** @type {Function} */ (SeparatorRole));

exports = SeparatorRole; 
//# sourceMappingURL=SeparatorRole.js.map