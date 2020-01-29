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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!PressedValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new PressedValue();
  $instance.$ctor__org_gwtproject_aria_client_PressedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_PressedValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {boolean} value
  * @return {PressedValue}
  * @public
  */
 static m_of__boolean(value) {
  PressedValue.$clinit();
  return value ? PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue : PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
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
 /**
  * @param {string} name
  * @return {!PressedValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  PressedValue.$clinit();
  if ($Equality.$same(PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_, null)) {
   PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_ = $Enums.createMapFromValues(PressedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_);
 }
 /**
  * @return {!Array<!PressedValue>}
  * @public
  */
 static m_values__() {
  PressedValue.$clinit();
  return /**@type {!Array<PressedValue>} */ ($Arrays.$init([PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue, PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue, PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue, PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue], PressedValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {PressedValue} */ ($Casts.$to(arg0, PressedValue)));
 }
 /**
  * @return {!PressedValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue);
 }
 /**
  * @return {!PressedValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue);
 }
 /**
  * @return {!PressedValue}
  * @public
  */
 static get f_MIXED__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue);
 }
 /**
  * @return {!PressedValue}
  * @public
  */
 static get f_UNDEFINED__org_gwtproject_aria_client_PressedValue() {
  return (PressedValue.$clinit(), PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue);
 }
 /**
  * @public
  */
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
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PressedValue;
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
$Util.$setClassMetadataForEnum(PressedValue, 'org.gwtproject.aria.client.PressedValue');

AriaAttributeType.$markImplementor(PressedValue);

/** @private {!PressedValue} */
PressedValue.$f_TRUE__org_gwtproject_aria_client_PressedValue;
/** @private {!PressedValue} */
PressedValue.$f_FALSE__org_gwtproject_aria_client_PressedValue;
/** @private {!PressedValue} */
PressedValue.$f_MIXED__org_gwtproject_aria_client_PressedValue;
/** @private {!PressedValue} */
PressedValue.$f_UNDEFINED__org_gwtproject_aria_client_PressedValue;
/** @public {Map<?string, !PressedValue>} */
PressedValue.f_namesToValuesMap__org_gwtproject_aria_client_PressedValue_;
/** @public {number} @const */
PressedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_PressedValue = 0;
/** @public {number} @const */
PressedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_PressedValue = 1;
/** @public {number} @const */
PressedValue.$ordinal$f_MIXED__org_gwtproject_aria_client_PressedValue = 2;
/** @public {number} @const */
PressedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_PressedValue = 3;

exports = PressedValue; 
//# sourceMappingURL=PressedValue.js.map