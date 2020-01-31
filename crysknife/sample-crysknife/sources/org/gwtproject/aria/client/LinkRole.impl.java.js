goog.module('org.gwtproject.aria.client.LinkRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CommandRole = goog.require('org.gwtproject.aria.client.CommandRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {CommandRole}
 */
class LinkRole {
 /** @abstract @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {}
 
 static $clinit() {
  LinkRole.$clinit = () =>{};
  LinkRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CommandRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_LinkRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_LinkRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LinkRole, 'org.gwtproject.aria.client.LinkRole');

LinkRole.$markImplementor(/** @type {Function} */ (LinkRole));

exports = LinkRole; 
//# sourceMappingURL=LinkRole.js.map