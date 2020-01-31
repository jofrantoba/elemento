goog.module('org.gwtproject.aria.client.WindowRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {Role}
 */
class WindowRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 
 static $clinit() {
  WindowRole.$clinit = () =>{};
  WindowRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Role.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_WindowRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_WindowRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(WindowRole, 'org.gwtproject.aria.client.WindowRole');

WindowRole.$markImplementor(/** @type {Function} */ (WindowRole));

exports = WindowRole; 
//# sourceMappingURL=WindowRole.js.map