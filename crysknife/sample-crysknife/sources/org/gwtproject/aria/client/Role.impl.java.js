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
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaAtomicProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaBusyState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaControlsProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaDescribedbyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaDisabledState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaDropeffectProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaFlowtoProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaGrabbedState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaHaspopupProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaHiddenState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaInvalidState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLabelledbyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLabelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLiveProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaOwnsProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaRelevantProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName__() {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getTabindexExtraAttribute__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_remove__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaAtomicProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaBusyState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaControlsProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaDescribedbyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaDisabledState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaDropeffectProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaFlowtoProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaGrabbedState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaHaspopupProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaHiddenState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaInvalidState__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaLabelledbyProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaLabelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaLiveProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaOwnsProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaRelevantProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeTabindexExtraAttribute__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_set__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaAtomicProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaBusyState__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaControlsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaDescribedbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaDisabledState__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<DropeffectValue>} value
  * @public
  */
 m_setAriaDropeffectProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_DropeffectValue(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaFlowtoProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {GrabbedValue} value
  * @public
  */
 m_setAriaGrabbedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_GrabbedValue(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaHiddenState__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {InvalidValue} value
  * @public
  */
 m_setAriaInvalidState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_InvalidValue(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaLabelledbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {?string} value
  * @public
  */
 m_setAriaLabelProperty__org_gwtproject_dom_client_Element__java_lang_String(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {LiveValue} value
  * @public
  */
 m_setAriaLiveProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_LiveValue(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaOwnsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {Array<RelevantValue>} value
  * @public
  */
 m_setAriaRelevantProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_RelevantValue(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setTabindexExtraAttribute__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  Role.$clinit = () =>{};
  Role.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_Role = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_Role;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Role, 'org.gwtproject.aria.client.Role');

Role.$markImplementor(/** @type {Function} */ (Role));

exports = Role; 
//# sourceMappingURL=Role.js.map