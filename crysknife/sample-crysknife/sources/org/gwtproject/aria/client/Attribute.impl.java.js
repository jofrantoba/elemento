goog.module('org.gwtproject.aria.client.Attribute$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @abstract
 * @template T
  */
class Attribute extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_name__org_gwtproject_aria_client_Attribute;
  /** @public {?string} */
  this.f_defaultValue__org_gwtproject_aria_client_Attribute;
 }
 /**
  * Initialization from constructor 'Attribute(String)'.
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_aria_client_Attribute__java_lang_String(name) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, null);
 }
 /**
  * Initialization from constructor 'Attribute(String, String)'.
  * @param {?string} name
  * @param {?string} defaultValue
  * @public
  */
 $ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, defaultValue) {
  this.$ctor__java_lang_Object__();
  $Asserts.$assertWithMessage(!$Equality.$same(name, null), "Name cannot be null");
  this.f_name__org_gwtproject_aria_client_Attribute = name;
  this.f_defaultValue__org_gwtproject_aria_client_Attribute = defaultValue;
 }
 /**
  * @param {Object} element
  * @return {?string}
  * @public
  */
 m_get__org_gwtproject_dom_client_Element(element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  return $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(element, this.f_name__org_gwtproject_aria_client_Attribute) ? $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(element, this.f_name__org_gwtproject_aria_client_Attribute) : "";
 }
 /**
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_name__org_gwtproject_aria_client_Attribute;
 }
 /**
  * @param {Object} element
  * @public
  */
 m_remove__org_gwtproject_dom_client_Element(element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  element.removeAttribute(this.f_name__org_gwtproject_aria_client_Attribute);
 }
 /**
  * @param {Object} element
  * @param {Array<T>} values
  * @public
  */
 m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(element, values) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  $Asserts.$assert(values.length > 0);
  element.setAttribute(this.f_name__org_gwtproject_aria_client_Attribute, this.m_getAriaValue__arrayOf_java_lang_Object_$p_org_gwtproject_aria_client_Attribute(values));
 }
 /**
  * @param {Array<T>} value
  * @return {?string}
  * @public
  */
 m_getAriaValue__arrayOf_java_lang_Object_$p_org_gwtproject_aria_client_Attribute(value) {
  let buf = StringBuilder.$create__();
  for (let $array = value, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   buf.m_append__java_lang_String(this.m_getSingleValue__java_lang_Object(item)).m_append__java_lang_String(" ");
  }
  return j_l_String.m_trim__java_lang_String(buf.toString());
 }
 /**
  * @abstract
  * @param {T} value
  * @return {?string}
  * @public
  */
 m_getSingleValue__java_lang_Object(value) {}
 /**
  * @param {Object} element
  * @public
  */
 m_setDefault__org_gwtproject_dom_client_Element(element) {
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  $Asserts.$assertWithMessage(!$Equality.$same(this.f_defaultValue__org_gwtproject_aria_client_Attribute, null) && !j_l_String.m_isEmpty__java_lang_String(this.f_defaultValue__org_gwtproject_aria_client_Attribute), "Default value cannot be null.");
  element.setAttribute(this.f_name__org_gwtproject_aria_client_Attribute, this.f_defaultValue__org_gwtproject_aria_client_Attribute);
 }
 /**
  * @public
  */
 static $clinit() {
  Attribute.$clinit = () =>{};
  Attribute.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Attribute;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Attribute, 'org.gwtproject.aria.client.Attribute');

exports = Attribute; 
//# sourceMappingURL=Attribute.js.map