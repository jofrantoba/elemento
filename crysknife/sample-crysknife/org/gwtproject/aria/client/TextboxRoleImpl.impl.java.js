goog.module('org.gwtproject.aria.client.TextboxRoleImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RoleImpl = goog.require('org.gwtproject.aria.client.RoleImpl$impl');
const TextboxRole = goog.require('org.gwtproject.aria.client.TextboxRole$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let AutocompleteValue = goog.forwardDeclare('org.gwtproject.aria.client.AutocompleteValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {TextboxRole}
  */
class TextboxRoleImpl extends RoleImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TextboxRoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  TextboxRoleImpl.$clinit();
  let $instance = new TextboxRoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_TextboxRoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_TextboxRoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
 }
 /** @override @return {?string} */
 m_getAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_AUTOCOMPLETE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaMultilineProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_MULTILINE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_READONLY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaActivedescendantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaAutocompleteProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_AUTOCOMPLETE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaMultilineProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_MULTILINE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaReadonlyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_READONLY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaRequiredProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_setAriaActivedescendantProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_Id(/** Object */ element, /** Id */ value) {
  Property.f_ACTIVEDESCENDANT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Id>}*/ ($Arrays.$init([value], Id)));
 }
 /** @override */
 m_setAriaAutocompleteProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_AutocompleteValue(/** Object */ element, /** AutocompleteValue */ value) {
  Property.f_AUTOCOMPLETE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<AutocompleteValue>}*/ ($Arrays.$init([value], AutocompleteValue)));
 }
 /** @override */
 m_setAriaMultilineProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_MULTILINE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaReadonlyProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_READONLY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaRequiredProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_REQUIRED__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 
 static $clinit() {
  TextboxRoleImpl.$clinit = () =>{};
  TextboxRoleImpl.$loadModules();
  RoleImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextboxRoleImpl;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  AutocompleteValue = goog.module.get('org.gwtproject.aria.client.AutocompleteValue$impl');
  Id = goog.module.get('org.gwtproject.aria.client.Id$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(TextboxRoleImpl, 'org.gwtproject.aria.client.TextboxRoleImpl');

TextboxRole.$markImplementor(TextboxRoleImpl);

exports = TextboxRoleImpl; 
//# sourceMappingURL=TextboxRoleImpl.js.map