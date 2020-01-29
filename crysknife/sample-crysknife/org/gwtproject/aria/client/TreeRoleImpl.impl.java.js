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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!TreeRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  TreeRoleImpl.$clinit();
  let $instance = new TreeRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_TreeRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_TreeRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {Id} value
  * @public
  */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(element, value) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Id>} */ ($Arrays.$init([value], Id)));
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
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaMultiselectableProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaMultiselectableProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaMultiselectableProperty__org_gwtproject_dom_client_Element__boolean(element, value) {
  Property.f_MULTISELECTABLE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(element, value) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @public
  */
 static $clinit() {
  TreeRoleImpl.$clinit = () =>{};
  TreeRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TreeRoleImpl;
 }
 /**
  * @public
  */
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