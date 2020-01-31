goog.module('org.gwtproject.aria.client.RoleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Role = goog.require('org.gwtproject.aria.client.Role$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DropeffectValue = goog.forwardDeclare('org.gwtproject.aria.client.DropeffectValue$impl');
let ExtraAttribute = goog.forwardDeclare('org.gwtproject.aria.client.ExtraAttribute$impl');
let GrabbedValue = goog.forwardDeclare('org.gwtproject.aria.client.GrabbedValue$impl');
let Id = goog.forwardDeclare('org.gwtproject.aria.client.Id$impl');
let InvalidValue = goog.forwardDeclare('org.gwtproject.aria.client.InvalidValue$impl');
let LiveValue = goog.forwardDeclare('org.gwtproject.aria.client.LiveValue$impl');
let Property = goog.forwardDeclare('org.gwtproject.aria.client.Property$impl');
let RelevantValue = goog.forwardDeclare('org.gwtproject.aria.client.RelevantValue$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {Role}
  */
class RoleImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_roleName__org_gwtproject_aria_client_RoleImpl_;
 }
 /** @return {!RoleImpl} */
 static $create__java_lang_String(/** ?string */ roleName) {
  RoleImpl.$clinit();
  let $instance = new RoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(/** ?string */ roleName) {
  this.$ctor__java_lang_Object__();
  $Asserts.$assertWithMessage(!$Equality.$same(roleName, null), "Role name cannot be null");
  this.f_roleName__org_gwtproject_aria_client_RoleImpl_ = roleName;
 }
 /** @override @return {?string} */
 m_getAriaAtomicProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaBusyState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_BUSY__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaControlsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaDescribedbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaDisabledState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_DISABLED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaDropeffectProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaFlowtoProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaGrabbedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_GRABBED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaHaspopupProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaHiddenState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_HIDDEN__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaInvalidState__org_gwtproject_dom_client_Element(/** Object */ element) {
  return State.f_INVALID__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaLabelledbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaLabelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_LABEL__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaLiveProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_LIVE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaOwnsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_OWNS__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getAriaRelevantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  return Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_roleName__org_gwtproject_aria_client_RoleImpl_;
 }
 /** @override @return {?string} */
 m_getTabindexExtraAttribute__org_gwtproject_dom_client_Element(/** Object */ element) {
  return ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_get__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_remove__org_gwtproject_dom_client_Element(/** Object */ element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  element.removeAttribute(RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_);
 }
 /** @override */
 m_removeAriaAtomicProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaBusyState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_BUSY__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaControlsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaDescribedbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaDisabledState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_DISABLED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaDropeffectProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaFlowtoProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaGrabbedState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_GRABBED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaHaspopupProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaHiddenState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_HIDDEN__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaInvalidState__org_gwtproject_dom_client_Element(/** Object */ element) {
  State.f_INVALID__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaLabelledbyProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaLabelProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_LABEL__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaLiveProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_LIVE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaOwnsProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_OWNS__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeAriaRelevantProperty__org_gwtproject_dom_client_Element(/** Object */ element) {
  Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_removeTabindexExtraAttribute__org_gwtproject_dom_client_Element(/** Object */ element) {
  ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /** @override */
 m_set__org_gwtproject_dom_client_Element(/** Object */ element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  element.setAttribute(RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_, this.f_roleName__org_gwtproject_aria_client_RoleImpl_);
 }
 /** @override */
 m_setAriaAtomicProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaBusyState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  State.f_BUSY__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaControlsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {
  Property.f_CONTROLS__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaDescribedbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {
  Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaDisabledState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  State.f_DISABLED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaDropeffectProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_DropeffectValue(/** Object */ element, /** Array<DropeffectValue> */ value) {
  Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaFlowtoProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {
  Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaGrabbedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_GrabbedValue(/** Object */ element, /** GrabbedValue */ value) {
  State.f_GRABBED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<GrabbedValue>}*/ ($Arrays.$init([value], GrabbedValue)));
 }
 /** @override */
 m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaHiddenState__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ value) {
  State.f_HIDDEN__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>}*/ ($Arrays.$init([value], Boolean)));
 }
 /** @override */
 m_setAriaInvalidState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_InvalidValue(/** Object */ element, /** InvalidValue */ value) {
  State.f_INVALID__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<InvalidValue>}*/ ($Arrays.$init([value], InvalidValue)));
 }
 /** @override */
 m_setAriaLabelledbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {
  Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaLabelProperty__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ value) {
  Property.f_LABEL__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?string>}*/ ($Arrays.$init([value], j_l_String)));
 }
 /** @override */
 m_setAriaLiveProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_LiveValue(/** Object */ element, /** LiveValue */ value) {
  Property.f_LIVE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<LiveValue>}*/ ($Arrays.$init([value], LiveValue)));
 }
 /** @override */
 m_setAriaOwnsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(/** Object */ element, /** Array<Id> */ value) {
  Property.f_OWNS__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setAriaRelevantProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_RelevantValue(/** Object */ element, /** Array<RelevantValue> */ value) {
  Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /** @override */
 m_setTabindexExtraAttribute__org_gwtproject_dom_client_Element__int(/** Object */ element, /** number */ value) {
  ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 
 static $clinit() {
  RoleImpl.$clinit = () =>{};
  RoleImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RoleImpl;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ExtraAttribute = goog.module.get('org.gwtproject.aria.client.ExtraAttribute$impl');
  GrabbedValue = goog.module.get('org.gwtproject.aria.client.GrabbedValue$impl');
  InvalidValue = goog.module.get('org.gwtproject.aria.client.InvalidValue$impl');
  LiveValue = goog.module.get('org.gwtproject.aria.client.LiveValue$impl');
  Property = goog.module.get('org.gwtproject.aria.client.Property$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(RoleImpl, 'org.gwtproject.aria.client.RoleImpl');

Role.$markImplementor(RoleImpl);

/**@const {?string}*/
RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_ = "role";

exports = RoleImpl; 
//# sourceMappingURL=RoleImpl.js.map