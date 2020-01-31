goog.module('org.gwtproject.aria.client.Id$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {AriaAttributeType}
  */
class Id extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_id__org_gwtproject_aria_client_Id_;
 }
 //Factory method corresponding to constructor 'Id(Element)'.
 /** @return {!Id} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  let $instance = new Id();
  $instance.$ctor__org_gwtproject_aria_client_Id__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'Id(Element)'.
 
 $ctor__org_gwtproject_aria_client_Id__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__java_lang_Object__();
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null");
  this.m_init__java_lang_String_$p_org_gwtproject_aria_client_Id(element.id);
 }
 //Factory method corresponding to constructor 'Id(String)'.
 /** @return {!Id} */
 static $create__java_lang_String(/** ?string */ elementId) {
  let $instance = new Id();
  $instance.$ctor__org_gwtproject_aria_client_Id__java_lang_String(elementId);
  return $instance;
 }
 //Initialization from constructor 'Id(String)'.
 
 $ctor__org_gwtproject_aria_client_Id__java_lang_String(/** ?string */ elementId) {
  this.$ctor__java_lang_Object__();
  this.m_init__java_lang_String_$p_org_gwtproject_aria_client_Id(elementId);
 }
 /** @return {Id} */
 static m_of__org_gwtproject_dom_client_Element(/** Object */ element) {
  Id.$clinit();
  return Id.$create__org_gwtproject_dom_client_Element(element);
 }
 /** @return {Id} */
 static m_of__java_lang_String(/** ?string */ elementId) {
  Id.$clinit();
  return Id.$create__java_lang_String(elementId);
 }
 
 m_init__java_lang_String_$p_org_gwtproject_aria_client_Id(/** ?string */ elementId) {
  $Asserts.$assertWithMessage(!$Equality.$same(elementId, null) || j_l_String.m_equals__java_lang_String__java_lang_Object(elementId, ""), "Invalid elementId: cannot be null or empty.");
  this.f_id__org_gwtproject_aria_client_Id_ = elementId;
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  return this.f_id__org_gwtproject_aria_client_Id_;
 }
 
 static $clinit() {
  Id.$clinit = () =>{};
  Id.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Id;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Id, 'org.gwtproject.aria.client.Id');

AriaAttributeType.$markImplementor(Id);

exports = Id; 
//# sourceMappingURL=Id.js.map