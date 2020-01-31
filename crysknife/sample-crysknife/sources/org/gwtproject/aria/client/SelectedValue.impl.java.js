goog.module('org.gwtproject.aria.client.SelectedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SelectedValue>}
 * @implements {AriaAttributeType}
  */
class SelectedValue extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SelectedValue} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SelectedValue();
  $instance.$ctor__org_gwtproject_aria_client_SelectedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_SelectedValue__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {SelectedValue} */
 static m_of__boolean(/** boolean */ value) {
  SelectedValue.$clinit();
  return value ? SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue : SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue;
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue: 
    return "true";
   case SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue: 
    return "false";
   case SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue: 
    return "undefined";
  }
  return null;
 }
 /** @return {!SelectedValue} */
 static m_valueOf__java_lang_String(/** string */ name) {
  SelectedValue.$clinit();
  if ($Equality.$same(SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_, null)) {
   SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_ = $Enums.createMapFromValues(SelectedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_);
 }
 /** @return {!Array<!SelectedValue>} */
 static m_values__() {
  SelectedValue.$clinit();
  return /**@type {!Array<SelectedValue>}*/ ($Arrays.$init([SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue, SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue, SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue], SelectedValue));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {SelectedValue}*/ ($Casts.$to(arg0, SelectedValue)));
 }
 /** @return {!SelectedValue} */
 static get f_TRUE__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue);
 }
 /** @return {!SelectedValue} */
 static get f_FALSE__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue);
 }
 /** @return {!SelectedValue} */
 static get f_UNDEFINED__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue);
 }
 
 static $clinit() {
  SelectedValue.$clinit = () =>{};
  SelectedValue.$loadModules();
  Enum.$clinit();
  SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectedValue;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(SelectedValue, 'org.gwtproject.aria.client.SelectedValue');

AriaAttributeType.$markImplementor(SelectedValue);

/**@private {!SelectedValue}*/
SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue;
/**@private {!SelectedValue}*/
SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue;
/**@private {!SelectedValue}*/
SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue;
/**@type {Map<?string, !SelectedValue>}*/
SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_;
/**@const {number}*/
SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue = 0;
/**@const {number}*/
SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue = 1;
/**@const {number}*/
SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue = 2;

exports = SelectedValue; 
//# sourceMappingURL=SelectedValue.js.map