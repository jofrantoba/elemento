goog.module('org.gwtproject.aria.client.HeadingRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionheadRole = goog.require('org.gwtproject.aria.client.SectionheadRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionheadRole}
 */
class HeadingRole {
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  HeadingRole.$clinit = () =>{};
  HeadingRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SectionheadRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_HeadingRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_HeadingRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeadingRole, 'org.gwtproject.aria.client.HeadingRole');

HeadingRole.$markImplementor(/** @type {Function} */ (HeadingRole));

exports = HeadingRole; 
//# sourceMappingURL=HeadingRole.js.map