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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!LiveValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new LiveValue();
  $instance.$ctor__org_gwtproject_aria_client_LiveValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_LiveValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
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
 /**
  * @param {string} name
  * @return {!LiveValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  LiveValue.$clinit();
  if ($Equality.$same(LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_, null)) {
   LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_ = $Enums.createMapFromValues(LiveValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_);
 }
 /**
  * @return {!Array<!LiveValue>}
  * @public
  */
 static m_values__() {
  LiveValue.$clinit();
  return /**@type {!Array<LiveValue>} */ ($Arrays.$init([LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue, LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue, LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue], LiveValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {LiveValue} */ ($Casts.$to(arg0, LiveValue)));
 }
 /**
  * @return {!LiveValue}
  * @public
  */
 static get f_OFF__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue);
 }
 /**
  * @return {!LiveValue}
  * @public
  */
 static get f_POLITE__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue);
 }
 /**
  * @return {!LiveValue}
  * @public
  */
 static get f_ASSERTIVE__org_gwtproject_aria_client_LiveValue() {
  return (LiveValue.$clinit(), LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue);
 }
 /**
  * @public
  */
 static $clinit() {
  LiveValue.$clinit = () =>{};
  LiveValue.$loadModules();
  Enum.$clinit();
  LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("OFF"), LiveValue.$ordinal$f_OFF__org_gwtproject_aria_client_LiveValue);
  LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("POLITE"), LiveValue.$ordinal$f_POLITE__org_gwtproject_aria_client_LiveValue);
  LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue = LiveValue.$create__java_lang_String__int($Util.$makeEnumName("ASSERTIVE"), LiveValue.$ordinal$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue);
  LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LiveValue;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(LiveValue, 'org.gwtproject.aria.client.LiveValue');

AriaAttributeType.$markImplementor(LiveValue);

/** @private {!LiveValue} */
LiveValue.$f_OFF__org_gwtproject_aria_client_LiveValue;
/** @private {!LiveValue} */
LiveValue.$f_POLITE__org_gwtproject_aria_client_LiveValue;
/** @private {!LiveValue} */
LiveValue.$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue;
/** @public {Map<?string, !LiveValue>} */
LiveValue.f_namesToValuesMap__org_gwtproject_aria_client_LiveValue_;
/** @public {number} @const */
LiveValue.$ordinal$f_OFF__org_gwtproject_aria_client_LiveValue = 0;
/** @public {number} @const */
LiveValue.$ordinal$f_POLITE__org_gwtproject_aria_client_LiveValue = 1;
/** @public {number} @const */
LiveValue.$ordinal$f_ASSERTIVE__org_gwtproject_aria_client_LiveValue = 2;

exports = LiveValue; 
//# sourceMappingURL=LiveValue.js.map