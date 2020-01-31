goog.module('org.gwtproject.aria.client.ListitemRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListitemRole = goog.require('org.gwtproject.aria.client.ListitemRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {ListitemRole}
  */
class ListitemRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ListitemRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  ListitemRoleImpl.$clinit();
  let $instance = new ListitemRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_ListitemRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_ListitemRoleImpl__java_lang_String(/** ?string */ roleName) {
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
 m_getAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_LEVEL__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_POSINSET__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaLevelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_LEVEL__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_POSINSET__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_LEVEL__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 /** @override */
 m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_POSINSET__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 /** @override */
 m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 
 static $clinit() {
  ListitemRoleImpl.$clinit = () =>{};
  ListitemRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListitemRoleImpl;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(ListitemRoleImpl, 'org.gwtproject.aria.client.ListitemRoleImpl');

ListitemRole.$markImplementor(ListitemRoleImpl);

exports = ListitemRoleImpl; 
//# sourceMappingURL=ListitemRoleImpl.js.map