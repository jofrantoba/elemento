goog.module('org.gwtproject.aria.client.OrientationValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<OrientationValue>}
 * @implements {AriaAttributeType}
  */
class OrientationValue extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!OrientationValue} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new OrientationValue();
  $instance.$ctor__org_gwtproject_aria_client_OrientationValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_OrientationValue__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue: 
    return "horizontal";
   case OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue: 
    return "vertical";
  }
  return null;
 }
 /** @return {!OrientationValue} */
 static m_valueOf__java_lang_String(/** string */ name) {
  OrientationValue.$clinit();
  if ($Equality.$same(OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_, null)) {
   OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_ = $Enums.createMapFromValues(OrientationValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_);
 }
 /** @return {!Array<!OrientationValue>} */
 static m_values__() {
  OrientationValue.$clinit();
  return /**@type {!Array<OrientationValue>}*/ ($Arrays.$init([OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue, OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue], OrientationValue));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {OrientationValue}*/ ($Casts.$to(arg0, OrientationValue)));
 }
 /** @return {!OrientationValue} */
 static get f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue() {
  return (OrientationValue.$clinit(), OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue);
 }
 /** @return {!OrientationValue} */
 static get f_VERTICAL__org_gwtproject_aria_client_OrientationValue() {
  return (OrientationValue.$clinit(), OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue);
 }
 
 static $clinit() {
  OrientationValue.$clinit = () =>{};
  OrientationValue.$loadModules();
  Enum.$clinit();
  OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue = OrientationValue.$create__java_lang_String__int($Util.$makeEnumName("HORIZONTAL"), OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue);
  OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue = OrientationValue.$create__java_lang_String__int($Util.$makeEnumName("VERTICAL"), OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue);
  OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OrientationValue;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(OrientationValue, 'org.gwtproject.aria.client.OrientationValue');

AriaAttributeType.$markImplementor(OrientationValue);

/**@private {!OrientationValue}*/
OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue;
/**@private {!OrientationValue}*/
OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue;
/**@type {Map<?string, !OrientationValue>}*/
OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_;
/**@const {number}*/
OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue = 0;
/**@const {number}*/
OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue = 1;

exports = OrientationValue; 
//# sourceMappingURL=OrientationValue.js.map