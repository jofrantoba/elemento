goog.module('org.gwtproject.aria.client.CompositeRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {WidgetRole}
 */
class CompositeRole {
 /** @abstract @return {?string} */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(/** Object */ element, /** Id */ value) {}
 
 static $clinit() {
  CompositeRole.$clinit = () =>{};
  CompositeRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_CompositeRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_CompositeRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CompositeRole, 'org.gwtproject.aria.client.CompositeRole');

CompositeRole.$markImplementor(/** @type {Function} */ (CompositeRole));

exports = CompositeRole; 
//# sourceMappingURL=CompositeRole.js.map