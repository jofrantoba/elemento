goog.module('org.gwtproject.aria.client.ProgressbarRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressbarRole = goog.require('org.gwtproject.aria.client.ProgressbarRole$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {ProgressbarRole}
  */
class ProgressbarRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!ProgressbarRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  ProgressbarRoleImpl.$clinit();
  let $instance = new ProgressbarRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_ProgressbarRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_ProgressbarRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuemaxProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValueminProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuenowProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaValuetextProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaValuemaxProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaValueminProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaValuenowProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaValuetextProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValuemaxProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {
  Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>} */ ($Arrays.$init([value], Number)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValueminProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {
  Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>} */ ($Arrays.$init([value], Number)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {(Number|number)} value
  * @public
  */
 m_setAriaValuenowProperty__org_gwtproject_dom_client_Element__java_lang_Number(element, value) {
  Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>} */ ($Arrays.$init([value], Number)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {?string} value
  * @public
  */
 m_setAriaValuetextProperty__org_gwtproject_dom_client_Element__java_lang_String(element, value) {
  Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?string>} */ ($Arrays.$init([value], j_l_String)));
 }
 /**
  * @public
  */
 static $clinit() {
  ProgressbarRoleImpl.$clinit = () =>{};
  ProgressbarRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ProgressbarRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(ProgressbarRoleImpl, 'org.gwtproject.aria.client.ProgressbarRoleImpl');

ProgressbarRole.$markImplementor(ProgressbarRoleImpl);

exports = ProgressbarRoleImpl; 
//# sourceMappingURL=ProgressbarRoleImpl.js.map