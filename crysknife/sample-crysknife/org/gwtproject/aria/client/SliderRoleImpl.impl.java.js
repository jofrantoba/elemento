goog.module('org.gwtproject.aria.client.SliderRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const SliderRole = goog.require('org.gwtproject.aria.client.SliderRole$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let OrientationValue = goog.forwardDeclare('org.gwtproject.aria.client.OrientationValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {SliderRole}
  */
class SliderRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SliderRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  SliderRoleImpl.$clinit();
  let $instance = new SliderRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_SliderRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_SliderRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaOrientationProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaOrientationProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_OrientationValue(/** Object */ element, /** OrientationValue */ value) {
  Property.f_ORIENTATION__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<OrientationValue>}*/ ($Arrays.$init([value], OrientationValue)));
 }
 /** @override @return {?string} */
 m_getAriaValuemaxProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaValueminProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaValuenowProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaValuetextProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaValuemaxProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaValueminProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaValuenowProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaValuetextProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaValuemaxProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {
  Property.f_VALUEMAX__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>}*/ ($Arrays.$init([value], Number)));
 }
 /** @override */
 m_setAriaValueminProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {
  Property.f_VALUEMIN__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>}*/ ($Arrays.$init([value], Number)));
 }
 /** @override */
 m_setAriaValuenowProperty__org_gwtproject_dom_client_Element__java_lang_Number(/** Object */ element, /** (Number|number) */ value) {
  Property.f_VALUENOW__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<(Number|number)>}*/ ($Arrays.$init([value], Number)));
 }
 /** @override */
 m_setAriaValuetextProperty__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ value) {
  Property.f_VALUETEXT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?string>}*/ ($Arrays.$init([value], j_l_String)));
 }
 
 static $clinit() {
  SliderRoleImpl.$clinit = () =>{};
  SliderRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SliderRoleImpl;
 }
 
 static $loadModules() {
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  OrientationValue = goog.module.get('org.gwtproject.aria.client.OrientationValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(SliderRoleImpl, 'org.gwtproject.aria.client.SliderRoleImpl');

SliderRole.$markImplementor(SliderRoleImpl);

exports = SliderRoleImpl; 
//# sourceMappingURL=SliderRoleImpl.js.map