goog.module('org.gwtproject.aria.client.DefinitionRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefinitionRole = goog.require('org.gwtproject.aria.client.DefinitionRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {DefinitionRole}
  */
class DefinitionRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefinitionRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  DefinitionRoleImpl.$clinit();
  let $instance = new DefinitionRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_DefinitionRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_DefinitionRoleImpl__java_lang_String(/** ?string */ roleName) {
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
 
 static $clinit() {
  DefinitionRoleImpl.$clinit = () =>{};
  DefinitionRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefinitionRoleImpl;
 }
 
 static $loadModules() {
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DefinitionRoleImpl, 'org.gwtproject.aria.client.DefinitionRoleImpl');

DefinitionRole.$markImplementor(DefinitionRoleImpl);

exports = DefinitionRoleImpl; 
//# sourceMappingURL=DefinitionRoleImpl.js.map