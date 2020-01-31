goog.module('org.gwtproject.aria.client.RangeRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class RangeRole {
 /** @abstract @return {?string} */
 m_getAriaValuemaxProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaValueminProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaValuenowProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaValuetextProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaValuemaxProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaValueminProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaValuenowProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaValuetextProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaValuemaxProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {}
 /** @abstract */
 m_setAriaValueminProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {}
 /** @abstract */
 m_setAriaValuenowProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {}
 /** @abstract */
 m_setAriaValuetextProperty__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ value) {}
 
 static $clinit() {
  RangeRole.$clinit = () =>{};
  RangeRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_RangeRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RangeRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RangeRole, 'org.gwtproject.aria.client.RangeRole');

RangeRole.$markImplementor(/** @type {Function} */ (RangeRole));

exports = RangeRole; 
//# sourceMappingURL=RangeRole.js.map