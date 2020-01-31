goog.module('org.gwtproject.aria.client.DocumentRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StructureRole = goog.require('org.gwtproject.aria.client.StructureRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {StructureRole}
 */
class DocumentRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 
 static $clinit() {
  DocumentRole.$clinit = () =>{};
  DocumentRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  StructureRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_DocumentRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_DocumentRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DocumentRole, 'org.gwtproject.aria.client.DocumentRole');

DocumentRole.$markImplementor(/** @type {Function} */ (DocumentRole));

exports = DocumentRole; 
//# sourceMappingURL=DocumentRole.js.map