goog.module('org.gwtproject.aria.client.TreeRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const TreeRole = goog.require('org.gwtproject.aria.client.TreeRole$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {TreeRole}
  */
class TreeRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TreeRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  TreeRoleImpl.$clinit();
  let $instance = new TreeRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_TreeRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_TreeRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(/** Object */ element, /** Id */ value) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Id>}*/ ($Arrays.$init([value], Id)));
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
 m_getAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaMultiselectableProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaMultiselectableProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 
 static $clinit() {
  TreeRoleImpl.$clinit = () =>{};
  TreeRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeRoleImpl;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Id = goog.module.get('org.gwtproject.aria.client.Id$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(TreeRoleImpl, 'org.gwtproject.aria.client.TreeRoleImpl');

TreeRole.$markImplementor(TreeRoleImpl);

exports = TreeRoleImpl; 
//# sourceMappingURL=TreeRoleImpl.js.map