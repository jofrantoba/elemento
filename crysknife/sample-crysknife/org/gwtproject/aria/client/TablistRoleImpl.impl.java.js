goog.module('org.gwtproject.aria.client.TablistRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const TablistRole = goog.require('org.gwtproject.aria.client.TablistRole$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {TablistRole}
  */
class TablistRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TablistRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  TablistRoleImpl.$clinit();
  let $instance = new TablistRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_TablistRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_TablistRoleImpl__java_lang_String(/** ?string */ roleName) {
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
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_LEVEL__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_LEVEL__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_LEVEL__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 
 static $clinit() {
  TablistRoleImpl.$clinit = () =>{};
  TablistRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TablistRoleImpl;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Id = goog.module.get('org.gwtproject.aria.client.Id$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(TablistRoleImpl, 'org.gwtproject.aria.client.TablistRoleImpl');

TablistRole.$markImplementor(TablistRoleImpl);

exports = TablistRoleImpl; 
//# sourceMappingURL=TablistRoleImpl.js.map