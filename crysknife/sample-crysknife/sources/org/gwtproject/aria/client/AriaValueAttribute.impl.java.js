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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'AriaValueAttribute(String, String)'.
  * @template T
  * @param {?string} name
  * @param {?string} defaultValue
  * @return {!AriaValueAttribute<T>}
  * @public
  */
 static $create__java_lang_String__java_lang_String(name, defaultValue) {
  AriaValueAttribute.$clinit();
  let $instance = new AriaValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String__java_lang_String(name, defaultValue);
  return $instance;
 }
 /**
  * Initialization from constructor 'AriaValueAttribute(String, String)'.
  * @param {?string} name
  * @param {?string} defaultValue
  * @public
  */
 $ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String__java_lang_String(name, defaultValue) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, defaultValue);
 }
 /**
  * Factory method corresponding to constructor 'AriaValueAttribute(String)'.
  * @template T
  * @param {?string} name
  * @return {!AriaValueAttribute<T>}
  * @public
  */
 static $create__java_lang_String(name) {
  AriaValueAttribute.$clinit();
  let $instance = new AriaValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String(name);
  return $instance;
 }
 /**
  * Initialization from constructor 'AriaValueAttribute(String)'.
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_aria_client_AriaValueAttribute__java_lang_String(name) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String(name);
 }
 /**
  * @param {T} value
  * @return {?string}
  * @public
  */
 m_getSingleValue__org_gwtproject_aria_client_AriaAttributeType(value) {
  return /**@type {AriaAttributeType} */ (value).m_getAriaValue__();
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {?string}
  * @public
  */
 m_getSingleValue__java_lang_Object(arg0) {
  return this.m_getSingleValue__org_gwtproject_aria_client_AriaAttributeType(/**@type {T} */ ($Casts.$to(arg0, AriaAttributeType)));
 }
 /**
  * @public
  */
 static $clinit() {
  AriaValueAttribute.$clinit = () =>{};
  AriaValueAttribute.$loadModules();
  Attribute.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AriaValueAttribute;
 }
 /**
  * @public
  */
 static $loadModules() {
  AriaAttributeType = goog.module.get('org.gwtproject.aria.client.AriaAttributeType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AriaValueAttribute, 'org.gwtproject.aria.client.AriaValueAttribute');

exports = AriaValueAttribute; 
//# sourceMappingURL=AriaValueAttribute.js.map