goog.module('org.gwtproject.aria.client.OptionRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const OptionRole = goog.require('org.gwtproject.aria.client.OptionRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let CheckedValue = goog.forwardDeclare('org.gwtproject.aria.client.CheckedValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {OptionRole}
  */
class OptionRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!OptionRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  OptionRoleImpl.$clinit();
  let $instance = new OptionRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_OptionRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_OptionRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_CHECKED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_POSINSET__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_SELECTED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_CHECKED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaPosinsetProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_POSINSET__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaSetsizeProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaCheckedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_CheckedValue(/** Object */ element, /** CheckedValue */ value) {
  State.f_CHECKED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<CheckedValue>}*/ ($Arrays.$init([value], CheckedValue)));
 }
 /** @override */
 m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_POSINSET__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 /** @override */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(/** Object */ element, /** SelectedValue */ value) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<SelectedValue>}*/ ($Arrays.$init([value], SelectedValue)));
 }
 /** @override */
 m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  Property.f_SETSIZE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 
 static $clinit() {
  OptionRoleImpl.$clinit = () =>{};
  OptionRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionRoleImpl;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  CheckedValue = goog.module.get('org.gwtproject.aria.client.CheckedValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  SelectedValue = goog.module.get('org.gwtproject.aria.client.SelectedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(OptionRoleImpl, 'org.gwtproject.aria.client.OptionRoleImpl');

OptionRole.$markImplementor(OptionRoleImpl);

exports = OptionRoleImpl; 
//# sourceMappingURL=OptionRoleImpl.js.map