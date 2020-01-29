goog.module('org.gwtproject.aria.client.CheckedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CheckedValue>}
 * @implements {AriaAttributeType}
  */
class CheckedValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!CheckedValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new CheckedValue();
  $instance.$ctor__org_gwtproject_aria_client_CheckedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_CheckedValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {boolean} value
  * @return {CheckedValue}
  * @public
  */
 static m_of__boolean(value) {
  CheckedValue.$clinit();
  return value ? CheckedValue.$f_TRUE__org_gwtproject_aria_client_CheckedValue : CheckedValue.$f_FALSE__org_gwtproject_aria_client_CheckedValue;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case CheckedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_CheckedValue: 
    return "true";
   case CheckedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_CheckedValue: 
    return "false";
   case CheckedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_CheckedValue: 
    return "mixed";
   case CheckedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue: 
    return "undefined";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!CheckedValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  CheckedValue.$clinit();
  if ($Equality.$same(CheckedValue.f_namesToValuesMap__org_gwtproject_aria_client_CheckedValue_, null)) {
   CheckedValue.f_namesToValuesMap__org_gwtproject_aria_client_CheckedValue_ = $Enums.createMapFromValues(CheckedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CheckedValue.f_namesToValuesMap__org_gwtproject_aria_client_CheckedValue_);
 }
 /**
  * @return {!Array<!CheckedValue>}
  * @public
  */
 static m_values__() {
  CheckedValue.$clinit();
  return /**@type {!Array<CheckedValue>} */ ($Arrays.$init([CheckedValue.$f_TRUE__org_gwtproject_aria_client_CheckedValue, CheckedValue.$f_FALSE__org_gwtproject_aria_client_CheckedValue, CheckedValue.$f_MIXED__org_gwtproject_aria_client_CheckedValue, CheckedValue.$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue], CheckedValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {CheckedValue} */ ($Casts.$to(arg0, CheckedValue)));
 }
 /**
  * @return {!CheckedValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_CheckedValue() {
  return (CheckedValue.$clinit(), CheckedValue.$f_TRUE__org_gwtproject_aria_client_CheckedValue);
 }
 /**
  * @return {!CheckedValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_CheckedValue() {
  return (CheckedValue.$clinit(), CheckedValue.$f_FALSE__org_gwtproject_aria_client_CheckedValue);
 }
 /**
  * @return {!CheckedValue}
  * @public
  */
 static get f_MIXED__org_gwtproject_aria_client_CheckedValue() {
  return (CheckedValue.$clinit(), CheckedValue.$f_MIXED__org_gwtproject_aria_client_CheckedValue);
 }
 /**
  * @return {!CheckedValue}
  * @public
  */
 static get f_UNDEFINED__org_gwtproject_aria_client_CheckedValue() {
  return (CheckedValue.$clinit(), CheckedValue.$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue);
 }
 /**
  * @public
  */
 static $clinit() {
  CheckedValue.$clinit = () =>{};
  CheckedValue.$loadModules();
  Enum.$clinit();
  CheckedValue.$f_TRUE__org_gwtproject_aria_client_CheckedValue = CheckedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), CheckedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_CheckedValue);
  CheckedValue.$f_FALSE__org_gwtproject_aria_client_CheckedValue = CheckedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), CheckedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_CheckedValue);
  CheckedValue.$f_MIXED__org_gwtproject_aria_client_CheckedValue = CheckedValue.$create__java_lang_String__int($Util.$makeEnumName("MIXED"), CheckedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_CheckedValue);
  CheckedValue.$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue = CheckedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), CheckedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue);
  CheckedValue.f_namesToValuesMap__org_gwtproject_aria_client_CheckedValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CheckedValue;
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
$Util.$setClassMetadataForEnum(CheckedValue, 'org.gwtproject.aria.client.CheckedValue');

AriaAttributeType.$markImplementor(CheckedValue);

/** @private {!CheckedValue} */
CheckedValue.$f_TRUE__org_gwtproject_aria_client_CheckedValue;
/** @private {!CheckedValue} */
CheckedValue.$f_FALSE__org_gwtproject_aria_client_CheckedValue;
/** @private {!CheckedValue} */
CheckedValue.$f_MIXED__org_gwtproject_aria_client_CheckedValue;
/** @private {!CheckedValue} */
CheckedValue.$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue;
/** @public {Map<?string, !CheckedValue>} */
CheckedValue.f_namesToValuesMap__org_gwtproject_aria_client_CheckedValue_;
/** @public {number} @const */
CheckedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_CheckedValue = 0;
/** @public {number} @const */
CheckedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_CheckedValue = 1;
/** @public {number} @const */
CheckedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_CheckedValue = 2;
/** @public {number} @const */
CheckedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_CheckedValue = 3;

exports = CheckedValue; 
//# sourceMappingURL=CheckedValue.js.map