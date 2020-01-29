goog.module('org.gwtproject.aria.client.RowheaderRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const RowheaderRole = goog.require('org.gwtproject.aria.client.RowheaderRole$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let SortValue = goog.forwardDeclare('org.gwtproject.aria.client.SortValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {RowheaderRole}
  */
class RowheaderRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!RowheaderRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  RowheaderRoleImpl.$clinit();
  let $instance = new RowheaderRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_RowheaderRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_RowheaderRoleImpl__java_lang_String(roleName) {
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
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_READONLY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
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
  * @return {?string}
  * @public
  */
 m_getAriaSelectedState__org_gwtproject_dom_client_Element(element) {
  return State.f_SELECTED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_READONLY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
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
  * @public
  */
 m_removeAriaSelectedState__org_gwtproject_dom_client_Element(element) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(element, value) {
  Property.f_READONLY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
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
  * @override
  * @param {Object} element
  * @param {SelectedValue} value
  * @public
  */
 m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(element, value) {
  State.f_SELECTED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<SelectedValue>} */ ($Arrays.$init([value], SelectedValue)));
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaSortProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_SORT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaSortProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_SORT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {SortValue} value
  * @public
  */
 m_setAriaSortProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SortValue(element, value) {
  Property.f_SORT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<SortValue>} */ ($Arrays.$init([value], SortValue)));
 }
 /**
  * @public
  */
 static $clinit() {
  RowheaderRoleImpl.$clinit = () =>{};
  RowheaderRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RowheaderRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  SelectedValue = goog.module.get('org.gwtproject.aria.client.SelectedValue$impl');
  SortValue = goog.module.get('org.gwtproject.aria.client.SortValue$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(RowheaderRoleImpl, 'org.gwtproject.aria.client.RowheaderRoleImpl');

RowheaderRole.$markImplementor(RowheaderRoleImpl);

exports = RowheaderRoleImpl; 
//# sourceMappingURL=RowheaderRoleImpl.js.map