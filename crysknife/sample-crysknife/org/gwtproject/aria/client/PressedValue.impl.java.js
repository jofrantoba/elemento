goog.module('org.gwtproject.aria.client.PressedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PressedValue>}
 * @implements {AriaAttributeType}
  */
class PressedValue extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PressedValue} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new PressedValue();
  $instance.$ctor__org_gwtproject_aria_client_PressedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_PressedValue__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {PressedValue} */
 static m_of__boolean(/** boolean */ value) {
  PressedValue.$clinit();
  return value ? PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue : PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue;
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case PressedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_PressedValue: 
    return "true";
   case PressedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_PressedValue: 
    return "false";
   case PressedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_PressedValue: 
    return "mixed";
   case PressedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_PressedValue: 
    return "undefined";
  }
  return null;
 }
 /** @return {!PressedValue} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PressedValue.$clinit();
  if ($Equality.$same(PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_, null)) {
   PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_ = $Enums.createMapFromValues(PressedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_);
 }
 /** @return {!Array<!PressedValue>} */
 static m_values__() {
  PressedValue.$clinit();
  return /**@type {!Array<PressedValue>}*/ ($Arrays.$init([PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue, PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue, PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue, PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue], PressedValue));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {PressedValue}*/ ($Casts.$to(arg0, PressedValue)));
 }
 /** @return {!PressedValue} */
 static get f_TRUE__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue);
 }
 /** @return {!PressedValue} */
 static get f_FALSE__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue);
 }
 /** @return {!PressedValue} */
 static get f_MIXED__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue);
 }
 /** @return {!PressedValue} */
 static get f_UNDEFINED__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue);
 }
 
 static $clinit() {
  PressedValue.$clinit = () =>{};
  PressedValue.$loadModules();
  Enum.$clinit();
  PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue = PressedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), PressedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_PressedValue);
  PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue = PressedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), PressedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_PressedValue);
  PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue = PressedValue.$create__java_lang_String__int($Util.$makeEnumName("MIXED"), PressedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_PressedValue);
  PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue = PressedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), PressedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_PressedValue);
  PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PressedValue;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(PressedValue, 'org.gwtproject.aria.client.PressedValue');

AriaAttributeType.$markImplementor(PressedValue);

/**@private {!PressedValue}*/
PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue;
/**@private {!PressedValue}*/
PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue;
/**@private {!PressedValue}*/
PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue;
/**@private {!PressedValue}*/
PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue;
/**@type {Map<?string, !PressedValue>}*/
PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_;
/**@const {number}*/
PressedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_PressedValue = 0;
/**@const {number}*/
PressedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_PressedValue = 1;
/**@const {number}*/
PressedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_PressedValue = 2;
/**@const {number}*/
PressedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_PressedValue = 3;

exports = PressedValue; 
//# sourceMappingURL=PressedValue.js.map