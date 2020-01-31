goog.module('org.gwtproject.aria.client.PrimitiveValueAttribute$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attribute = goog.require('org.gwtproject.aria.client.Attribute$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

/**
 * @template T
 * @extends {Attribute<T>}
  */
class PrimitiveValueAttribute extends Attribute {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'PrimitiveValueAttribute(String)'.
 /** @template T @return {!PrimitiveValueAttribute<T>} */
 static $create__java_lang_String(/** ?string */ name) {
  PrimitiveValueAttribute.$clinit();
  let $instance = new PrimitiveValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String(name);
  return $instance;
 }
 //Initialization from constructor 'PrimitiveValueAttribute(String)'.
 
 $ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String(/** ?string */ name) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String(name);
 }
 //Factory method corresponding to constructor 'PrimitiveValueAttribute(String, String)'.
 /** @template T @return {!PrimitiveValueAttribute<T>} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ defaultValue) {
  PrimitiveValueAttribute.$clinit();
  let $instance = new PrimitiveValueAttribute();
  $instance.$ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String__java_lang_String(name, defaultValue);
  return $instance;
 }
 //Initialization from constructor 'PrimitiveValueAttribute(String, String)'.
 
 $ctor__org_gwtproject_aria_client_PrimitiveValueAttribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ defaultValue) {
  this.$ctor__org_gwtproject_aria_client_Attribute__java_lang_String__java_lang_String(name, defaultValue);
 }
 /** @override @return {?string} */
 m_getSingleValue__java_lang_Object(/** T */ value) {
  return j_l_String.m_valueOf__java_lang_Object(value);
 }
 
 static $clinit() {
  PrimitiveValueAttribute.$clinit = () =>{};
  PrimitiveValueAttribute.$loadModules();
  Attribute.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PrimitiveValueAttribute;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(PrimitiveValueAttribute, 'org.gwtproject.aria.client.PrimitiveValueAttribute');

exports = PrimitiveValueAttribute; 
//# sourceMappingURL=PrimitiveValueAttribute.js.map