goog.module('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attribute = goog.require('org.gwtproject.aria.client.Attribute$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

/**
 * @template T
 * @extends {Attribute<T>}
  */
class PrimitiveValueAttribute extends Attribute {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'PrimitiveValueAttribute(String)'.
  * @template T
  * @param {?string} name
  * @return {!PrimitiveValueAttribute<T>}
  * @public
  */
 static $create__java_lang_String(name) {
  PrimitiveValueAttribute.$clinit();
  let $instance = new PrimitiveValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String(name);
  return $instance;
 }
 /**
  * Initialization from constructor 'PrimitiveValueAttribute(String)'.
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String(name) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String(name);
 }
 /**
  * Factory method corresponding to constructor 'PrimitiveValueAttribute(String, String)'.
  * @template T
  * @param {?string} name
  * @param {?string} defaultValue
  * @return {!PrimitiveValueAttribute<T>}
  * @public
  */
 static $create__java_lang_String__java_lang_String(name, defaultValue) {
  PrimitiveValueAttribute.$clinit();
  let $instance = new PrimitiveValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String__java_lang_String(name, defaultValue);
  return $instance;
 }
 /**
  * Initialization from constructor 'PrimitiveValueAttribute(String, String)'.
  * @param {?string} name
  * @param {?string} defaultValue
  * @public
  */
 $ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String__java_lang_String(name, defaultValue) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, defaultValue);
 }
 /**
  * @override
  * @param {T} value
  * @return {?string}
  * @public
  */
 m_getSingleValue__java_lang_Object(value) {
  return j_l_String.m_valueOf__java_lang_Object(value);
 }
 /**
  * @public
  */
 static $clinit() {
  PrimitiveValueAttribute.$clinit = () =>{};
  PrimitiveValueAttribute.$loadModules();
  Attribute.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PrimitiveValueAttribute;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(PrimitiveValueAttribute, 'org.gwtproject.aria.client.PrimitiveValueAttribute');

exports = PrimitiveValueAttribute; 
//# sourceMappingURL=PrimitiveValueAttribute.js.map