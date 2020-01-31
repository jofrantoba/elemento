goog.module('org.gwtproject.aria.client.TabRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionheadRole = goog.require('org.gwtproject.aria.client.SectionheadRole$impl');
const WidgetRole = goog.require('org.gwtproject.aria.client.WidgetRole$impl');

let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {SectionheadRole}
 * @extends {WidgetRole}
 */
class TabRole {
 /** @abstract @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {}
 
 static $clinit() {
  TabRole.$clinit = () =>{};
  TabRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionheadRole.$markImplementor(ctor);
  WidgetRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TabRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TabRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TabRole, 'org.gwtproject.aria.client.TabRole');

TabRole.$markImplementor(/** @type {Function} */ (TabRole));

exports = TabRole; 
//# sourceMappingURL=TabRole.js.map