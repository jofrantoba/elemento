goog.module('org.gwtproject.aria.client.StatusRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const StatusRole = goog.require('org.gwtproject.aria.client.StatusRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {StatusRole}
  */
class StatusRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!StatusRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  StatusRoleImpl.$clinit();
  let $instance = new StatusRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_StatusRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_StatusRoleImpl__java_lang_String(roleName) {
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
  * @public
  */
 m_removeAriaExpandedState__org_gwtproject_dom_client_Element(element) {
  State.f_EXPANDED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
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
  * @public
  */
 static $clinit() {
  StatusRoleImpl.$clinit = () =>{};
  StatusRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StatusRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(StatusRoleImpl, 'org.gwtproject.aria.client.StatusRoleImpl');

StatusRole.$markImplementor(StatusRoleImpl);

exports = StatusRoleImpl; 
//# sourceMappingURL=StatusRoleImpl.js.map