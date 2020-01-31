goog.module('org.gwtproject.aria.client.AriaValueAttribute$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attribute = goog.require('org.gwtproject.aria.client.Attribute$impl');

let AriaAttributeType = goog.forwardDeclare('org.gwtproject.aria.client.AriaAttributeType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Attribute<T>}
  */
class AriaValueAttribute extends Attribute {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'AriaValueAttribute(String, String)'.
 /** @template T @return {!AriaValueAttribute<T>} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ defaultValue) {
  AriaValueAttribute.$clinit();
  let $instance = new AriaValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String__java_lang_String(name, defaultValue);
  return $instance;
 }
 //Initialization from constructor 'AriaValueAttribute(String, String)'.
 
 $ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ defaultValue) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, defaultValue);
 }
 //Factory method corresponding to constructor 'AriaValueAttribute(String)'.
 /** @template T @return {!AriaValueAttribute<T>} */
 static $create__java_lang_String(/** ?string */ name) {
  AriaValueAttribute.$clinit();
  let $instance = new AriaValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String(name);
  return $instance;
 }
 //Initialization from constructor 'AriaValueAttribute(String)'.
 
 $ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String(/** ?string */ name) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String(name);
 }
 /** @return {?string} */
 m_getSingleValue__org_gwtproject_aria_client_AriaAttributeType(/** T */ value) {
  return /**@type {AriaAttributeType}*/ (value).m_getAriaValue__();
 }
 //Bridge method.
 /** @override @return {?string} */
 m_getSingleValue__java_lang_Object(/** * */ arg0) {
  return this.m_getSingleValue__org_gwtproject_aria_client_AriaAttributeType(/**@type {T}*/ ($Casts.$to(arg0, AriaAttributeType)));
 }
 
 static $clinit() {
  AriaValueAttribute.$clinit = () =>{};
  AriaValueAttribute.$loadModules();
  Attribute.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AriaValueAttribute;
 }
 
 static $loadModules() {
  AriaAttributeType = goog.module.get('org.gwtproject.aria.client.AriaAttributeType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AriaValueAttribute, 'org.gwtproject.aria.client.AriaValueAttribute');

exports = AriaValueAttribute; 
//# sourceMappingURL=AriaValueAttribute.js.map