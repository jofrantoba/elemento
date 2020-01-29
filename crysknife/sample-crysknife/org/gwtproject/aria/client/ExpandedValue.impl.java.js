goog.module('org.gwtproject.aria.client.ExpandedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ExpandedValue>}
 * @implements {AriaAttributeType}
  */
class ExpandedValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!ExpandedValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new ExpandedValue();
  $instance.$ctor__org_gwtproject_aria_client_ExpandedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_ExpandedValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {boolean} value
  * @return {ExpandedValue}
  * @public
  */
 static m_of__boolean(value) {
  ExpandedValue.$clinit();
  return value ? ExpandedValue.$f_TRUE__org_gwtproject_aria_client_ExpandedValue : ExpandedValue.$f_FALSE__org_gwtproject_aria_client_ExpandedValue;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case ExpandedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_ExpandedValue: 
    return "true";
   case ExpandedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_ExpandedValue: 
    return "false";
   case ExpandedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue: 
    return "undefined";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!ExpandedValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  ExpandedValue.$clinit();
  if ($Equality.$same(ExpandedValue.f_namesToValuesMap__org_gwtproject_aria_client_ExpandedValue_, null)) {
   ExpandedValue.f_namesToValuesMap__org_gwtproject_aria_client_ExpandedValue_ = $Enums.createMapFromValues(ExpandedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ExpandedValue.f_namesToValuesMap__org_gwtproject_aria_client_ExpandedValue_);
 }
 /**
  * @return {!Array<!ExpandedValue>}
  * @public
  */
 static m_values__() {
  ExpandedValue.$clinit();
  return /**@type {!Array<ExpandedValue>} */ ($Arrays.$init([ExpandedValue.$f_TRUE__org_gwtproject_aria_client_ExpandedValue, ExpandedValue.$f_FALSE__org_gwtproject_aria_client_ExpandedValue, ExpandedValue.$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue], ExpandedValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {ExpandedValue} */ ($Casts.$to(arg0, ExpandedValue)));
 }
 /**
  * @return {!ExpandedValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_ExpandedValue() {
  return (ExpandedValue.$clinit(), ExpandedValue.$f_TRUE__org_gwtproject_aria_client_ExpandedValue);
 }
 /**
  * @return {!ExpandedValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_ExpandedValue() {
  return (ExpandedValue.$clinit(), ExpandedValue.$f_FALSE__org_gwtproject_aria_client_ExpandedValue);
 }
 /**
  * @return {!ExpandedValue}
  * @public
  */
 static get f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue() {
  return (ExpandedValue.$clinit(), ExpandedValue.$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue);
 }
 /**
  * @public
  */
 static $clinit() {
  ExpandedValue.$clinit = () =>{};
  ExpandedValue.$loadModules();
  Enum.$clinit();
  ExpandedValue.$f_TRUE__org_gwtproject_aria_client_ExpandedValue = ExpandedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), ExpandedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_ExpandedValue);
  ExpandedValue.$f_FALSE__org_gwtproject_aria_client_ExpandedValue = ExpandedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), ExpandedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_ExpandedValue);
  ExpandedValue.$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue = ExpandedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), ExpandedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue);
  ExpandedValue.f_namesToValuesMap__org_gwtproject_aria_client_ExpandedValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ExpandedValue;
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
$Util.$setClassMetadataForEnum(ExpandedValue, 'org.gwtproject.aria.client.ExpandedValue');

AriaAttributeType.$markImplementor(ExpandedValue);

/** @private {!ExpandedValue} */
ExpandedValue.$f_TRUE__org_gwtproject_aria_client_ExpandedValue;
/** @private {!ExpandedValue} */
ExpandedValue.$f_FALSE__org_gwtproject_aria_client_ExpandedValue;
/** @private {!ExpandedValue} */
ExpandedValue.$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue;
/** @public {Map<?string, !ExpandedValue>} */
ExpandedValue.f_namesToValuesMap__org_gwtproject_aria_client_ExpandedValue_;
/** @public {number} @const */
ExpandedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_ExpandedValue = 0;
/** @public {number} @const */
ExpandedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_ExpandedValue = 1;
/** @public {number} @const */
ExpandedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_ExpandedValue = 2;

exports = ExpandedValue; 
//# sourceMappingURL=ExpandedValue.js.map