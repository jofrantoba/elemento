goog.module('org.gwtproject.aria.client.SectionRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StructureRole = goog.require('org.gwtproject.aria.client.StructureRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {StructureRole}
 */
class SectionRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 
 static $clinit() {
  SectionRole.$clinit = () =>{};
  SectionRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  StructureRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_SectionRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SectionRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SectionRole, 'org.gwtproject.aria.client.SectionRole');

SectionRole.$markImplementor(/** @type {Function} */ (SectionRole));

exports = SectionRole; 
//# sourceMappingURL=SectionRole.js.map