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
 /** @abstract @return {?string} */
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(/** Object */ element, /** OrientationValue */ value) {}
 
 static $clinit() {
  SliderRole.$clinit = () =>{};
  SliderRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  RangeRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_SliderRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SliderRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SliderRole, 'org.gwtproject.aria.client.SliderRole');

SliderRole.$markImplementor(/** @type {Function} */ (SliderRole));

exports = SliderRole; 
//# sourceMappingURL=SliderRole.js.map