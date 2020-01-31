goog.module('org.gwtproject.aria.client.TabRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const TabRole = goog.require('org.gwtproject.aria.client.TabRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {TabRole}
  */
class TabRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TabRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  TabRoleImpl.$clinit();
  let $instance = new TabRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_TabRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_TabRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_EXPANDED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<ExpandedValue>}*/ ($Arrays.$init([value], ExpandedValue)));
 }
 /** @override @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_SELECTED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<SelectedValue>}*/ ($Arrays.$init([value], SelectedValue)));
 }
 
 static $clinit() {
  TabRoleImpl.$clinit = () =>{};
  TabRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabRoleImpl;
 }
 
 static $loadModules() {
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  SelectedValue = goog.module.get('org.gwtproject.aria.client.SelectedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(TabRoleImpl, 'org.gwtproject.aria.client.TabRoleImpl');

TabRole.$markImplementor(TabRoleImpl);

exports = TabRoleImpl; 
//# sourceMappingURL=TabRoleImpl.js.map