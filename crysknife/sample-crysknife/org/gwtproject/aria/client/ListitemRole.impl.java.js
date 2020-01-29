goog.module('org.gwtproject.aria.client.ListitemRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class ListitemRole {
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
  * @return {?string}
  * @public
  */
 m_getAriaPosinsetProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaSetsizeProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaPosinsetProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_removeAriaSetsizeProperty__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @abstract
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(element, value) {}
 /**
  * @public
  */
 static $clinit() {
  ListitemRole.$clinit = () =>{};
  ListitemRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SectionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ListitemRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ListitemRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ListitemRole, 'org.gwtproject.aria.client.ListitemRole');

ListitemRole.$markImplementor(/** @type {Function} */ (ListitemRole));

exports = ListitemRole; 
//# sourceMappingURL=ListitemRole.js.map