goog.module('org.gwtproject.aria.client.ListitemRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class ListitemRole {
 /** @abstract @return {?string} */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 /** @abstract */
 m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 /** @abstract */
 m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 
 static $clinit() {
  ListitemRole.$clinit = () =>{};
  ListitemRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ListitemRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ListitemRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ListitemRole, 'org.gwtproject.aria.client.ListitemRole');

ListitemRole.$markImplementor(/** @type {Function} */ (ListitemRole));

exports = ListitemRole; 
//# sourceMappingURL=ListitemRole.js.map