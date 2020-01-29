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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!OrientationValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new OrientationValue();
  $instance.$ctor__org_gwtproject_aria_client_OrientationValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_OrientationValue__java_lang_String__int($name, $ordinal) {
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
   case OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue: 
    return "horizontal";
   case OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue: 
    return "vertical";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!OrientationValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  OrientationValue.$clinit();
  if ($Equality.$same(OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_, null)) {
   OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_ = $Enums.createMapFromValues(OrientationValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_);
 }
 /**
  * @return {!Array<!OrientationValue>}
  * @public
  */
 static m_values__() {
  OrientationValue.$clinit();
  return /**@type {!Array<OrientationValue>} */ ($Arrays.$init([OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue, OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue], OrientationValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {OrientationValue} */ ($Casts.$to(arg0, OrientationValue)));
 }
 /**
  * @return {!OrientationValue}
  * @public
  */
 static get f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue() {
  return (OrientationValue.$clinit(), OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue);
 }
 /**
  * @return {!OrientationValue}
  * @public
  */
 static get f_VERTICAL__org_gwtproject_aria_client_OrientationValue() {
  return (OrientationValue.$clinit(), OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue);
 }
 /**
  * @public
  */
 static $clinit() {
  OrientationValue.$clinit = () =>{};
  OrientationValue.$loadModules();
  Enum.$clinit();
  OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue = OrientationValue.$create__java_lang_String__int($Util.$makeEnumName("HORIZONTAL"), OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue);
  OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue = OrientationValue.$create__java_lang_String__int($Util.$makeEnumName("VERTICAL"), OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue);
  OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OrientationValue;
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
$Util.$setClassMetadataForEnum(OrientationValue, 'org.gwtproject.aria.client.OrientationValue');

AriaAttributeType.$markImplementor(OrientationValue);

/** @private {!OrientationValue} */
OrientationValue.$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue;
/** @private {!OrientationValue} */
OrientationValue.$f_VERTICAL__org_gwtproject_aria_client_OrientationValue;
/** @public {Map<?string, !OrientationValue>} */
OrientationValue.f_namesToValuesMap__org_gwtproject_aria_client_OrientationValue_;
/** @public {number} @const */
OrientationValue.$ordinal$f_HORIZONTAL__org_gwtproject_aria_client_OrientationValue = 0;
/** @public {number} @const */
OrientationValue.$ordinal$f_VERTICAL__org_gwtproject_aria_client_OrientationValue = 1;

exports = OrientationValue; 
//# sourceMappingURL=OrientationValue.js.map