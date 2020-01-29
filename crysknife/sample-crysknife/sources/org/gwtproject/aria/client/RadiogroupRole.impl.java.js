goog.module('org.gwtproject.aria.client.RadiogroupRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SelectRole = goog.require('org.gwtproject.aria.client.SelectRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SelectRole}
 */
class RadiogroupRole {
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
  RadiogroupRole.$clinit = () =>{};
  RadiogroupRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SelectRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_RadiogroupRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_RadiogroupRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(RadiogroupRole, 'org.gwtproject.aria.client.RadiogroupRole');

RadiogroupRole.$markImplementor(/** @type {Function} */ (RadiogroupRole));

exports = RadiogroupRole; 
//# sourceMappingURL=RadiogroupRole.js.map