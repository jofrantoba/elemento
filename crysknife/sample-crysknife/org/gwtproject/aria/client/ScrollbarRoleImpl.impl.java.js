goog.module('org.gwtproject.aria.client.ScrollbarRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const ScrollbarRole = goog.require('org.gwtproject.aria.client.ScrollbarRole$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {ScrollbarRole}
  */
class ScrollbarRoleImpl extends RoleImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} roleName
  * @return {!ScrollbarRoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  ScrollbarRoleImpl.$clinit();
  let $instance = new ScrollbarRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_ScrollbarRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_ScrollbarRoleImpl__java_lang_String(roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaControlsProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaControlsProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaControlsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {
  Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
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
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
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
  ScrollbarRoleImpl.$clinit = () =>{};
  ScrollbarRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ScrollbarRoleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  OrientationValue = goog.module.get('org.gwtproject.aria.client.OrientationValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(ScrollbarRoleImpl, 'org.gwtproject.aria.client.ScrollbarRoleImpl');

ScrollbarRole.$markImplementor(ScrollbarRoleImpl);

exports = ScrollbarRoleImpl; 
//# sourceMappingURL=ScrollbarRoleImpl.js.map