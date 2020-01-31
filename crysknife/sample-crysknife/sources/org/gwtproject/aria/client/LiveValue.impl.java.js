goog.module('org.gwtproject.aria.client.LiveValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LiveValue>}
 * @implements {AriaAttributeType}
  */
class LiveValue extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LiveValue} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new LiveValue();
  $instance.$ctor__org_gwtproject_aria_client_LiveValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_LiveValue__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case LiveValue.$ordinal$f_OFF__org_gwtproject_aria_client_LiveValue: 
    return "off";
   case LiveValue.$ordinal$f_POLITE__org_gwtproject_aria_client_LiveValue: 
    return "polite";
   case LiveValue.$ordinal$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue: 
    return "assertive";
  }
  return null;
 }
 /** @return {!LiveValue} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LiveValue.$clinit();
  if ($Equality.$same(LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_, null)) {
   LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_ = $Enums.createMapFromValues(LiveValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_);
 }
 /** @return {!Array<!LiveValue>} */
 static m_values__() {
  LiveValue.$clinit();
  return /**@type {!Array<LiveValue>}*/ ($Arrays.$init([LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue, LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue, LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue], LiveValue));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {LiveValue}*/ ($Casts.$to(arg0, LiveValue)));
 }
 /** @return {!LiveValue} */
 static get f_OFF__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue);
 }
 /** @return {!LiveValue} */
 static get f_POLITE__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue);
 }
 /** @return {!LiveValue} */
 static get f_ASSERTIVE__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue);
 }
 
 static $clinit() {
  LiveValue.$clinit = () =>{};
  LiveValue.$loadModules();
  Enum.$clinit();
  LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("OFF"), LiveValue.$ordinal$f_OFF__org_gwtproject_aria_client_LiveValue);
  LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("POLITE"), LiveValue.$ordinal$f_POLITE__org_gwtproject_aria_client_LiveValue);
  LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("ASSERTIVE"), LiveValue.$ordinal$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue);
  LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LiveValue;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(LiveValue, 'org.gwtproject.aria.client.LiveValue');

AriaAttributeType.$markImplementor(LiveValue);

/**@private {!LiveValue}*/
LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue;
/**@private {!LiveValue}*/
LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue;
/**@private {!LiveValue}*/
LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue;
/**@type {Map<?string, !LiveValue>}*/
LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_;
/**@const {number}*/
LiveValue.$ordinal$f_OFF__org_gwtproject_aria_client_LiveValue = 0;
/**@const {number}*/
LiveValue.$ordinal$f_POLITE__org_gwtproject_aria_client_LiveValue = 1;
/**@const {number}*/
LiveValue.$ordinal$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue = 2;

exports = LiveValue; 
//# sourceMappingURL=LiveValue.js.map