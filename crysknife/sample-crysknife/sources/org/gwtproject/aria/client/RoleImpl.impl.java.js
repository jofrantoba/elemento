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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_roleName__org_gwtproject_aria_client_RoleImpl_;
 }
 /**
  * @param {?string} roleName
  * @return {!RoleImpl}
  * @public
  */
 static $create__java_lang_String(roleName) {
  RoleImpl.$clinit();
  let $instance = new RoleImpl();
  $instance.$ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName);
  return $instance;
 }
 /**
  * @param {?string} roleName
  * @public
  */
 $ctor__org_gwtproject_aria_client_RoleImpl__java_lang_String(roleName) {
  this.$ctor__java_lang_Object__();
  $Asserts.$assertWithMessage(!$Equality.$same(roleName, null), "Role name cannot be null");
  this.f_roleName__org_gwtproject_aria_client_RoleImpl_ = roleName;
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaAtomicProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaBusyState__org_gwtproject_dom_client_Element(element) {
  return State.f_BUSY__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
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
  * @return {?string}
  * @public
  */
 m_getAriaDescribedbyProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaDisabledState__org_gwtproject_dom_client_Element(element) {
  return State.f_DISABLED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaDropeffectProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaFlowtoProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaGrabbedState__org_gwtproject_dom_client_Element(element) {
  return State.f_GRABBED__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaHaspopupProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaHiddenState__org_gwtproject_dom_client_Element(element) {
  return State.f_HIDDEN__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaInvalidState__org_gwtproject_dom_client_Element(element) {
  return State.f_INVALID__org_gwtproject_aria_client_State.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLabelledbyProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLabelProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_LABEL__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaLiveProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_LIVE__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaOwnsProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_OWNS__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getAriaRelevantProperty__org_gwtproject_dom_client_Element(element) {
  return Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_roleName__org_gwtproject_aria_client_RoleImpl_;
 }
 /**
  * @override
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_getTabindexExtraAttribute__org_gwtproject_dom_client_Element(element) {
  return ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_get__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_remove__org_gwtproject_dom_client_Element(element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  element.removeAttribute(RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaAtomicProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaBusyState__org_gwtproject_dom_client_Element(element) {
  State.f_BUSY__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
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
  * @public
  */
 m_removeAriaDescribedbyProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaDisabledState__org_gwtproject_dom_client_Element(element) {
  State.f_DISABLED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaDropeffectProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaFlowtoProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaGrabbedState__org_gwtproject_dom_client_Element(element) {
  State.f_GRABBED__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaHaspopupProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaHiddenState__org_gwtproject_dom_client_Element(element) {
  State.f_HIDDEN__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaInvalidState__org_gwtproject_dom_client_Element(element) {
  State.f_INVALID__org_gwtproject_aria_client_State.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaLabelledbyProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaLabelProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_LABEL__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaLiveProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_LIVE__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaOwnsProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_OWNS__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeAriaRelevantProperty__org_gwtproject_dom_client_Element(element) {
  Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_removeTabindexExtraAttribute__org_gwtproject_dom_client_Element(element) {
  ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_remove__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_set__org_gwtproject_dom_client_Element(element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  element.setAttribute(RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_, this.f_roleName__org_gwtproject_aria_client_RoleImpl_);
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaAtomicProperty__org_gwtproject_dom_client_Element__boolean(element, value) {
  Property.f_ATOMIC__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaBusyState__org_gwtproject_dom_client_Element__boolean(element, value) {
  State.f_BUSY__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
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
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaDescribedbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {
  Property.f_DESCRIBEDBY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaDisabledState__org_gwtproject_dom_client_Element__boolean(element, value) {
  State.f_DISABLED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<DropeffectValue>} value
  * @public
  */
 m_setAriaDropeffectProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_DropeffectValue(element, value) {
  Property.f_DROPEFFECT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaFlowtoProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {
  Property.f_FLOWTO__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {GrabbedValue} value
  * @public
  */
 m_setAriaGrabbedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_GrabbedValue(element, value) {
  State.f_GRABBED__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<GrabbedValue>} */ ($Arrays.$init([value], GrabbedValue)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaHaspopupProperty__org_gwtproject_dom_client_Element__boolean(element, value) {
  Property.f_HASPOPUP__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {boolean} value
  * @public
  */
 m_setAriaHiddenState__org_gwtproject_dom_client_Element__boolean(element, value) {
  State.f_HIDDEN__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?boolean>} */ ($Arrays.$init([value], Boolean)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {InvalidValue} value
  * @public
  */
 m_setAriaInvalidState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_InvalidValue(element, value) {
  State.f_INVALID__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<InvalidValue>} */ ($Arrays.$init([value], InvalidValue)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaLabelledbyProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {
  Property.f_LABELLEDBY__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {?string} value
  * @public
  */
 m_setAriaLabelProperty__org_gwtproject_dom_client_Element__java_lang_String(element, value) {
  Property.f_LABEL__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<?string>} */ ($Arrays.$init([value], j_l_String)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {LiveValue} value
  * @public
  */
 m_setAriaLiveProperty__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_LiveValue(element, value) {
  Property.f_LIVE__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<LiveValue>} */ ($Arrays.$init([value], LiveValue)));
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<Id>} value
  * @public
  */
 m_setAriaOwnsProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_Id(element, value) {
  Property.f_OWNS__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {Array<RelevantValue>} value
  * @public
  */
 m_setAriaRelevantProperty__org_gwtproject_dom_client_Element__arrayOf_org_gwtproject_aria_client_RelevantValue(element, value) {
  Property.f_RELEVANT__org_gwtproject_aria_client_Property.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, value);
 }
 /**
  * @override
  * @param {Object} element
  * @param {number} value
  * @public
  */
 m_setTabindexExtraAttribute__org_gwtproject_dom_client_Element__int(element, value) {
  ExtraAttribute.f_TABINDEX__org_gwtproject_aria_client_ExtraAttribute.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, /**@type {!Array<Integer>} */ ($Arrays.$init([Integer.m_valueOf__int(value)], Integer)));
 }
 /**
  * @public
  */
 static $clinit() {
  RoleImpl.$clinit = () =>{};
  RoleImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RoleImpl;
 }
 /**
  * @public
  */
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

/** @public {?string} @const */
RoleImpl.f_ATTR_NAME_ROLE__org_gwtproject_aria_client_RoleImpl_ = "role";

exports = RoleImpl; 
//# sourceMappingURL=RoleImpl.js.map