goog.module('org.gwtproject.aria.client.TablistRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CompositeRole = goog.require('org.gwtproject.aria.client.CompositeRole$impl');
const DirectoryRole = goog.require('org.gwtproject.aria.client.DirectoryRole$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {CompositeRole}
 * @extends {DirectoryRole}
 */
class TablistRole {
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
  TablistRole.$clinit = () =>{};
  TablistRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CompositeRole.$markImplementor(classConstructor);
  DirectoryRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_TablistRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TablistRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TablistRole, 'org.gwtproject.aria.client.TablistRole');

TablistRole.$markImplementor(/** @type {Function} */ (TablistRole));

exports = TablistRole; 
//# sourceMappingURL=TablistRole.js.map