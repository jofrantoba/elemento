goog.module('org.gwtproject.aria.client.SliderRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');
const RangeRole = goog.require('org.gwtproject.aria.client.RangeRole$impl');

let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 * @extends {RangeRole}
 */
class SliderRole {
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {OrientationValue} value
  * @public
  */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  SliderRole.$clinit = () =>{};
  SliderRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  InputRole.$markImplementor(classConstructor);
  RangeRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_SliderRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SliderRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SliderRole, 'org.gwtproject.aria.client.SliderRole');

SliderRole.$markImplementor(/** @type {Function} */ (SliderRole));

exports = SliderRole; 
//# sourceMappingURL=SliderRole.js.map