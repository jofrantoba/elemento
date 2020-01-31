goog.module('org.gwtproject.aria.client.Role$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DropeffectValue = goog.forwardDeclare('org.gwtproject.aria.client.DropeffectValue$impl');
let GrabbedValue = goog.forwardDeclare('org.gwtproject.aria.client.GrabbedValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let InvalidValue = goog.forwardDeclare('org.gwtproject.aria.client.InvalidValue$impl');
let LiveValue = goog.forwardDeclare('org.gwtproject.aria.client.LiveValue$impl');
let RelevantValue = goog.forwardDeclare('org.gwtproject.aria.client.RelevantValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 */
class Role {
 /** @abstract @return {?string} */
 m_getAriaAtomicProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaBusyState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaControlsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaDescribedbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaDisabledState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaDropeffectProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaFlowtoProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaGrabbedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaHaspopupProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaHiddenState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaInvalidState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaLabelledbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaLabelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaLiveProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaOwnsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getAriaRelevantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract @return {?string} */
 m_getName__() {}
 /** @abstract @return {?string} */
 m_getTabindexExtraAttribute__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_remove__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaAtomicProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaBusyState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaControlsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaDescribedbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaDisabledState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaDropeffectProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaFlowtoProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaGrabbedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaHaspopupProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaHiddenState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaInvalidState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLabelledbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLabelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLiveProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaOwnsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaRelevantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeTabindexExtraAttribute__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_set__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaAtomicProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaBusyState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaControlsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {}
 /** @abstract */
 m_setAriaDescribedbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {}
 /** @abstract */
 m_setAriaDisabledState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaDropeffectProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_DropeffectValue(/** Object */ element, /** Array<DropeffectValue> */ value) {}
 /** @abstract */
 m_setAriaFlowtoProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {}
 /** @abstract */
 m_setAriaGrabbedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_GrabbedValue(/** Object */ element, /** GrabbedValue */ value) {}
 /** @abstract */
 m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaHiddenState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {}
 /** @abstract */
 m_setAriaInvalidState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_InvalidValue(/** Object */ element, /** InvalidValue */ value) {}
 /** @abstract */
 m_setAriaLabelledbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {}
 /** @abstract */
 m_setAriaLabelProperty__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ value) {}
 /** @abstract */
 m_setAriaLiveProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_LiveValue(/** Object */ element, /** LiveValue */ value) {}
 /** @abstract */
 m_setAriaOwnsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {}
 /** @abstract */
 m_setAriaRelevantProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_RelevantValue(/** Object */ element, /** Array<RelevantValue> */ value) {}
 /** @abstract */
 m_setTabindexExtraAttribute__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 
 static $clinit() {
  Role.$clinit = () =>{};
  Role.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_aria_client_Role = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_Role;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Role, 'org.gwtproject.aria.client.Role');

Role.$markImplementor(/** @type {Function} */ (Role));

exports = Role; 
//# sourceMappingURL=Role.js.map