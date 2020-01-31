goog.module('org.gwtproject.aria.client.ScrollbarRole$impl');

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
class ScrollbarRole {
 /** @abstract @return {?string} */
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(/** Object */ element, /** OrientationValue */ value) {}
 
 static $clinit() {
  ScrollbarRole.$clinit = () =>{};
  ScrollbarRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  InputRole.$markImplementor(ctor);
  RangeRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ScrollbarRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ScrollbarRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ScrollbarRole, 'org.gwtproject.aria.client.ScrollbarRole');

ScrollbarRole.$markImplementor(/** @type {Function} */ (ScrollbarRole));

exports = ScrollbarRole; 
//# sourceMappingURL=ScrollbarRole.js.map