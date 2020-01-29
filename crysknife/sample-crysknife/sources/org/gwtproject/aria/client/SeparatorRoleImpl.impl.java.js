goog.module('org.gwtproject.aria.client.SeparatorRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const SeparatorRole = goog.require('org.gwtproject.aria.client.SeparatorRole$impl');

let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {SeparatorRole}
  */
class SeparatorRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!SeparatorRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  SeparatorRoleImpl.$clinit();
  let $instance = new SeparatorRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_SeparatorRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_SeparatorRoleImpl__java_lang_String(roleName) {
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
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
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
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
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
  * @param {OrientationValue} value
  * @public
  */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(element, value) {
  Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<OrientationValue>} */ ($Arrays.$init([value], OrientationValue)));
 }
 /**
  * @public
  */
 static $clinit() {
  SeparatorRoleImpl.$clinit = () =>{};
  SeparatorRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SeparatorRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  OrientationValue = goog.module.get('org.gwtproject.aria.client.OrientationValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(SeparatorRoleImpl, 'org.gwtproject.aria.client.SeparatorRoleImpl');

SeparatorRole.$markImplementor(SeparatorRoleImpl);

exports = SeparatorRoleImpl; 
//# sourceMappingURL=SeparatorRoleImpl.js.map