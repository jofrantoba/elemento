goog.module('org.gwtproject.aria.client.SpinbuttonRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputRole = goog.require('org.gwtproject.aria.client.InputRole$impl');
const RangeRole = goog.require('org.gwtproject.aria.client.RangeRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {InputRole}
 * @extends {RangeRole}
 */
class SpinbuttonRole {
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  SpinbuttonRole.$clinit = () =>{};
  SpinbuttonRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_SpinbuttonRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_SpinbuttonRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SpinbuttonRole, 'org.gwtproject.aria.client.SpinbuttonRole');

SpinbuttonRole.$markImplementor(/** @type {Function} */ (SpinbuttonRole));

exports = SpinbuttonRole; 
//# sourceMappingURL=SpinbuttonRole.js.map