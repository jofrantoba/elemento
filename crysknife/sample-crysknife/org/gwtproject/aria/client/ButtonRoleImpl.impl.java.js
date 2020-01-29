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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!ButtonRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  ButtonRoleImpl.$clinit();
  let $instance = new ButtonRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_ButtonRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_ButtonRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaExpandedState__org_gwtproject_dom_client_Element(element) {
  return State.f_EXPANDED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaPressedState__org_gwtproject_dom_client_Element(element) {
  return State.f_PRESSED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(element) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaPressedState__org_gwtproject_dom_client_Element(element) {
  State.f_PRESSED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {ExpandedValue} value
  * @public
  */
 m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(element, value) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<ExpandedValue>} */ ($Arrays.$init([value], ExpandedValue)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {PressedValue} value
  * @public
  */
 m_setAriaPressedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_PressedValue(element, value) {
  State.f_PRESSED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<PressedValue>} */ ($Arrays.$init([value], PressedValue)));
 }
 /**
  * @public
  */
 static $clinit() {
  ButtonRoleImpl.$clinit = () =>{};
  ButtonRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ButtonRoleImpl;
 }
 /**
  * @public
  */
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