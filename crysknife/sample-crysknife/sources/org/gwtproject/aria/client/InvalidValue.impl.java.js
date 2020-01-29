goog.module('org.gwtproject.aria.client.InvalidValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InvalidValue>}
 * @implements {AriaAttributeType}
  */
class InvalidValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!InvalidValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new InvalidValue();
  $instance.$ctor__org_gwtproject_aria_client_InvalidValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_InvalidValue__java_lang_String__int($name, $ordinal) {
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
   case InvalidValue.$ordinal$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue: 
    return "grammar";
   case InvalidValue.$ordinal$f_FALSE__org_gwtproject_aria_client_InvalidValue: 
    return "false";
   case InvalidValue.$ordinal$f_SPELLING__org_gwtproject_aria_client_InvalidValue: 
    return "spelling";
   case InvalidValue.$ordinal$f_TRUE__org_gwtproject_aria_client_InvalidValue: 
    return "true";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!InvalidValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  InvalidValue.$clinit();
  if ($Equality.$same(InvalidValue.f_namesToValuesMap__org_gwtproject_aria_client_InvalidValue_, null)) {
   InvalidValue.f_namesToValuesMap__org_gwtproject_aria_client_InvalidValue_ = $Enums.createMapFromValues(InvalidValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InvalidValue.f_namesToValuesMap__org_gwtproject_aria_client_InvalidValue_);
 }
 /**
  * @return {!Array<!InvalidValue>}
  * @public
  */
 static m_values__() {
  InvalidValue.$clinit();
  return /**@type {!Array<InvalidValue>} */ ($Arrays.$init([InvalidValue.$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue, InvalidValue.$f_FALSE__org_gwtproject_aria_client_InvalidValue, InvalidValue.$f_SPELLING__org_gwtproject_aria_client_InvalidValue, InvalidValue.$f_TRUE__org_gwtproject_aria_client_InvalidValue], InvalidValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {InvalidValue} */ ($Casts.$to(arg0, InvalidValue)));
 }
 /**
  * @return {!InvalidValue}
  * @public
  */
 static get f_GRAMMAR__org_gwtproject_aria_client_InvalidValue() {
  return (InvalidValue.$clinit(), InvalidValue.$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue);
 }
 /**
  * @return {!InvalidValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_InvalidValue() {
  return (InvalidValue.$clinit(), InvalidValue.$f_FALSE__org_gwtproject_aria_client_InvalidValue);
 }
 /**
  * @return {!InvalidValue}
  * @public
  */
 static get f_SPELLING__org_gwtproject_aria_client_InvalidValue() {
  return (InvalidValue.$clinit(), InvalidValue.$f_SPELLING__org_gwtproject_aria_client_InvalidValue);
 }
 /**
  * @return {!InvalidValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_InvalidValue() {
  return (InvalidValue.$clinit(), InvalidValue.$f_TRUE__org_gwtproject_aria_client_InvalidValue);
 }
 /**
  * @public
  */
 static $clinit() {
  InvalidValue.$clinit = () =>{};
  InvalidValue.$loadModules();
  Enum.$clinit();
  InvalidValue.$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue = InvalidValue.$create__java_lang_String__int($Util.$makeEnumName("GRAMMAR"), InvalidValue.$ordinal$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue);
  InvalidValue.$f_FALSE__org_gwtproject_aria_client_InvalidValue = InvalidValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), InvalidValue.$ordinal$f_FALSE__org_gwtproject_aria_client_InvalidValue);
  InvalidValue.$f_SPELLING__org_gwtproject_aria_client_InvalidValue = InvalidValue.$create__java_lang_String__int($Util.$makeEnumName("SPELLING"), InvalidValue.$ordinal$f_SPELLING__org_gwtproject_aria_client_InvalidValue);
  InvalidValue.$f_TRUE__org_gwtproject_aria_client_InvalidValue = InvalidValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), InvalidValue.$ordinal$f_TRUE__org_gwtproject_aria_client_InvalidValue);
  InvalidValue.f_namesToValuesMap__org_gwtproject_aria_client_InvalidValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InvalidValue;
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
$Util.$setClassMetadataForEnum(InvalidValue, 'org.gwtproject.aria.client.InvalidValue');

AriaAttributeType.$markImplementor(InvalidValue);

/** @private {!InvalidValue} */
InvalidValue.$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue;
/** @private {!InvalidValue} */
InvalidValue.$f_FALSE__org_gwtproject_aria_client_InvalidValue;
/** @private {!InvalidValue} */
InvalidValue.$f_SPELLING__org_gwtproject_aria_client_InvalidValue;
/** @private {!InvalidValue} */
InvalidValue.$f_TRUE__org_gwtproject_aria_client_InvalidValue;
/** @public {Map<?string, !InvalidValue>} */
InvalidValue.f_namesToValuesMap__org_gwtproject_aria_client_InvalidValue_;
/** @public {number} @const */
InvalidValue.$ordinal$f_GRAMMAR__org_gwtproject_aria_client_InvalidValue = 0;
/** @public {number} @const */
InvalidValue.$ordinal$f_FALSE__org_gwtproject_aria_client_InvalidValue = 1;
/** @public {number} @const */
InvalidValue.$ordinal$f_SPELLING__org_gwtproject_aria_client_InvalidValue = 2;
/** @public {number} @const */
InvalidValue.$ordinal$f_TRUE__org_gwtproject_aria_client_InvalidValue = 3;

exports = InvalidValue; 
//# sourceMappingURL=InvalidValue.js.map