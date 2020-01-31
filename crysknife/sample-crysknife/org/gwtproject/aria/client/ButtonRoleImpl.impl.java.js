goog.module('org.gwtproject.aria.client.ButtonRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ButtonRole = goog.require('org.gwtproject.aria.client.ButtonRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let PressedValue = goog.forwardDeclare('org.gwtproject.aria.client.PressedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {ButtonRole}
  */
class ButtonRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ButtonRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  ButtonRoleImpl.$clinit();
  let $instance = new ButtonRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_ButtonRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_ButtonRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_EXPANDED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaPressedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_PRESSED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaPressedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_PRESSED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(/** Object */ element, /** ExpandedValue */ value) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<ExpandedValue>}*/ ($Arrays.$init([value], ExpandedValue)));
 }
 /** @override */
 m_setAriaPressedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_PressedValue(/** Object */ element, /** PressedValue */ value) {
  State.f_PRESSED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<PressedValue>}*/ ($Arrays.$init([value], PressedValue)));
 }
 
 static $clinit() {
  ButtonRoleImpl.$clinit = () =>{};
  ButtonRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonRoleImpl;
 }
 
 static $loadModules() {
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  PressedValue = goog.module.get('org.gwtproject.aria.client.PressedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(ButtonRoleImpl, 'org.gwtproject.aria.client.ButtonRoleImpl');

ButtonRole.$markImplementor(ButtonRoleImpl);

exports = ButtonRoleImpl; 
//# sourceMappingURL=ButtonRoleImpl.js.map