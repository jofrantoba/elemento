goog.module('org.gwtproject.aria.client.RadiogroupRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SelectRole}
 */
class RadiogroupRole {
 /** @abstract @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 
 static $clinit() {
  RadiogroupRole.$clinit = () =>{};
  RadiogroupRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SelectRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RadiogroupRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RadiogroupRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RadiogroupRole, 'org.gwtproject.aria.client.RadiogroupRole');

RadiogroupRole.$markImplementor(/** @type {Function} */ (RadiogroupRole));

exports = RadiogroupRole; 
//# sourceMappingURL=RadiogroupRole.js.map