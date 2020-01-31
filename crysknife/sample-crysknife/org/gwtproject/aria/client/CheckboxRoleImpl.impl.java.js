goog.module('org.gwtproject.aria.client.CheckboxRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckboxRole = goog.require('org.gwtproject.aria.client.CheckboxRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let CheckedValue = goog.forwardDeclare('org.gwtproject.aria.client.CheckedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {CheckboxRole}
  */
class CheckboxRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CheckboxRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  CheckboxRoleImpl.$clinit();
  let $instance = new CheckboxRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_CheckboxRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_CheckboxRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_CHECKED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaCheckedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_CHECKED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaCheckedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_CheckedValue(/** Object */ element, /** CheckedValue */ value) {
  State.f_CHECKED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<CheckedValue>}*/ ($Arrays.$init([value], CheckedValue)));
 }
 
 static $clinit() {
  CheckboxRoleImpl.$clinit = () =>{};
  CheckboxRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxRoleImpl;
 }
 
 static $loadModules() {
  CheckedValue = goog.module.get('org.gwtproject.aria.client.CheckedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(CheckboxRoleImpl, 'org.gwtproject.aria.client.CheckboxRoleImpl');

CheckboxRole.$markImplementor(CheckboxRoleImpl);

exports = CheckboxRoleImpl; 
//# sourceMappingURL=CheckboxRoleImpl.js.map