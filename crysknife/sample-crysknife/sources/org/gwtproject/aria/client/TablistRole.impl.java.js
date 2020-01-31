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
 /** @abstract @return {?string} */
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {}
 
 static $clinit() {
  TablistRole.$clinit = () =>{};
  TablistRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CompositeRole.$markImplementor(ctor);
  DirectoryRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TablistRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TablistRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TablistRole, 'org.gwtproject.aria.client.TablistRole');

TablistRole.$markImplementor(/** @type {Function} */ (TablistRole));

exports = TablistRole; 
//# sourceMappingURL=TablistRole.js.map