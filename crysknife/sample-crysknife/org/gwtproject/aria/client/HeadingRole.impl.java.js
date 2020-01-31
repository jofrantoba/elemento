goog.module('org.gwtproject.aria.client.HeadingRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionheadRole = goog.require('org.gwtproject.aria.client.SectionheadRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionheadRole}
 */
class HeadingRole {
 /** @abstract @return {?string} */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 
 static $clinit() {
  HeadingRole.$clinit = () =>{};
  HeadingRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionheadRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_HeadingRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_HeadingRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeadingRole, 'org.gwtproject.aria.client.HeadingRole');

HeadingRole.$markImplementor(/** @type {Function} */ (HeadingRole));

exports = HeadingRole; 
//# sourceMappingURL=HeadingRole.js.map