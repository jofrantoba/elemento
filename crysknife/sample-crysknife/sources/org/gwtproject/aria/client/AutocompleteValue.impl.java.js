goog.module('org.gwtproject.aria.client.AutocompleteValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AutocompleteValue>}
 * @implements {AriaAttributeType}
  */
class AutocompleteValue extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AutocompleteValue} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new AutocompleteValue();
  $instance.$ctor__org_gwtproject_aria_client_AutocompleteValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_AutocompleteValue__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case AutocompleteValue.$ordinal$f_INLINE__org_gwtproject_aria_client_AutocompleteValue: 
    return "inline";
   case AutocompleteValue.$ordinal$f_LIST__org_gwtproject_aria_client_AutocompleteValue: 
    return "list";
   case AutocompleteValue.$ordinal$f_BOTH__org_gwtproject_aria_client_AutocompleteValue: 
    return "both";
   case AutocompleteValue.$ordinal$f_NONE__org_gwtproject_aria_client_AutocompleteValue: 
    return "none";
  }
  return null;
 }
 /** @return {!AutocompleteValue} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AutocompleteValue.$clinit();
  if ($Equality.$same(AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_, null)) {
   AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_ = $Enums.createMapFromValues(AutocompleteValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_);
 }
 /** @return {!Array<!AutocompleteValue>} */
 static m_values__() {
  AutocompleteValue.$clinit();
  return /**@type {!Array<AutocompleteValue>}*/ ($Arrays.$init([AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue], AutocompleteValue));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {AutocompleteValue}*/ ($Casts.$to(arg0, AutocompleteValue)));
 }
 /** @return {!AutocompleteValue} */
 static get f_INLINE__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue);
 }
 /** @return {!AutocompleteValue} */
 static get f_LIST__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue);
 }
 /** @return {!AutocompleteValue} */
 static get f_BOTH__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue);
 }
 /** @return {!AutocompleteValue} */
 static get f_NONE__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue);
 }
 
 static $clinit() {
  AutocompleteValue.$clinit = () =>{};
  AutocompleteValue.$loadModules();
  Enum.$clinit();
  AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue = AutocompleteValue.$create__java_lang_String__int($Util.$makeEnumName("INLINE"), AutocompleteValue.$ordinal$f_INLINE__org_gwtproject_aria_client_AutocompleteValue);
  AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue = AutocompleteValue.$create__java_lang_String__int($Util.$makeEnumName("LIST"), AutocompleteValue.$ordinal$f_LIST__org_gwtproject_aria_client_AutocompleteValue);
  AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue = AutocompleteValue.$create__java_lang_String__int($Util.$makeEnumName("BOTH"), AutocompleteValue.$ordinal$f_BOTH__org_gwtproject_aria_client_AutocompleteValue);
  AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue = AutocompleteValue.$create__java_lang_String__int($Util.$makeEnumName("NONE"), AutocompleteValue.$ordinal$f_NONE__org_gwtproject_aria_client_AutocompleteValue);
  AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AutocompleteValue;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(AutocompleteValue, 'org.gwtproject.aria.client.AutocompleteValue');

AriaAttributeType.$markImplementor(AutocompleteValue);

/**@private {!AutocompleteValue}*/
AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue;
/**@private {!AutocompleteValue}*/
AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue;
/**@private {!AutocompleteValue}*/
AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue;
/**@private {!AutocompleteValue}*/
AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue;
/**@type {Map<?string, !AutocompleteValue>}*/
AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_;
/**@const {number}*/
AutocompleteValue.$ordinal$f_INLINE__org_gwtproject_aria_client_AutocompleteValue = 0;
/**@const {number}*/
AutocompleteValue.$ordinal$f_LIST__org_gwtproject_aria_client_AutocompleteValue = 1;
/**@const {number}*/
AutocompleteValue.$ordinal$f_BOTH__org_gwtproject_aria_client_AutocompleteValue = 2;
/**@const {number}*/
AutocompleteValue.$ordinal$f_NONE__org_gwtproject_aria_client_AutocompleteValue = 3;

exports = AutocompleteValue; 
//# sourceMappingURL=AutocompleteValue.js.map