goog.module('org.gwtproject.aria.client.GroupRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class GroupRole {
 /** @abstract @return {?string} */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(/** Object */ element, /** Id */ value) {}
 
 static $clinit() {
  GroupRole.$clinit = () =>{};
  GroupRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_GroupRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_GroupRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GroupRole, 'org.gwtproject.aria.client.GroupRole');

GroupRole.$markImplementor(/** @type {Function} */ (GroupRole));

exports = GroupRole; 
//# sourceMappingURL=GroupRole.js.map