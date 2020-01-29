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
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuemaxProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValueminProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuenowProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuetextProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaValuemaxProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaValueminProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaValuenowProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaValuetextProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValuemaxProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValueminProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValuenowProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {?string} value
  * @public
  */
 m_setAriaValuetextProperty__org_gwtproject_dom_client_Element__java_lang_String(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  RangeRole.$clinit = () =>{};
  RangeRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  WidgetRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RangeRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RangeRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RangeRole, 'org.gwtproject.aria.client.RangeRole');

RangeRole.$markImplementor(/** @type {Function} */ (RangeRole));

exports = RangeRole; 
//# sourceMappingURL=RangeRole.js.map