goog.module('org.gwtproject.aria.client.SortValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SortValue>}
 * @implements {AriaAttributeType}
  */
class SortValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!SortValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new SortValue();
  $instance.$ctor__org_gwtproject_aria_client_SortValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_SortValue__java_lang_String__int($name, $ordinal) {
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
   case SortValue.$ordinal$f_ASCENDING__org_gwtproject_aria_client_SortValue: 
    return "ascending";
   case SortValue.$ordinal$f_DESCENDING__org_gwtproject_aria_client_SortValue: 
    return "descending";
   case SortValue.$ordinal$f_NONE__org_gwtproject_aria_client_SortValue: 
    return "none";
   case SortValue.$ordinal$f_OTHER__org_gwtproject_aria_client_SortValue: 
    return "other";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!SortValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  SortValue.$clinit();
  if ($Equality.$same(SortValue.f_namesToValuesMap__org_gwtproject_aria_client_SortValue_, null)) {
   SortValue.f_namesToValuesMap__org_gwtproject_aria_client_SortValue_ = $Enums.createMapFromValues(SortValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SortValue.f_namesToValuesMap__org_gwtproject_aria_client_SortValue_);
 }
 /**
  * @return {!Array<!SortValue>}
  * @public
  */
 static m_values__() {
  SortValue.$clinit();
  return /**@type {!Array<SortValue>} */ ($Arrays.$init([SortValue.$f_ASCENDING__org_gwtproject_aria_client_SortValue, SortValue.$f_DESCENDING__org_gwtproject_aria_client_SortValue, SortValue.$f_NONE__org_gwtproject_aria_client_SortValue, SortValue.$f_OTHER__org_gwtproject_aria_client_SortValue], SortValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {SortValue} */ ($Casts.$to(arg0, SortValue)));
 }
 /**
  * @return {!SortValue}
  * @public
  */
 static get f_ASCENDING__org_gwtproject_aria_client_SortValue() {
  return (SortValue.$clinit(), SortValue.$f_ASCENDING__org_gwtproject_aria_client_SortValue);
 }
 /**
  * @return {!SortValue}
  * @public
  */
 static get f_DESCENDING__org_gwtproject_aria_client_SortValue() {
  return (SortValue.$clinit(), SortValue.$f_DESCENDING__org_gwtproject_aria_client_SortValue);
 }
 /**
  * @return {!SortValue}
  * @public
  */
 static get f_NONE__org_gwtproject_aria_client_SortValue() {
  return (SortValue.$clinit(), SortValue.$f_NONE__org_gwtproject_aria_client_SortValue);
 }
 /**
  * @return {!SortValue}
  * @public
  */
 static get f_OTHER__org_gwtproject_aria_client_SortValue() {
  return (SortValue.$clinit(), SortValue.$f_OTHER__org_gwtproject_aria_client_SortValue);
 }
 /**
  * @public
  */
 static $clinit() {
  SortValue.$clinit = () =>{};
  SortValue.$loadModules();
  Enum.$clinit();
  SortValue.$f_ASCENDING__org_gwtproject_aria_client_SortValue = SortValue.$create__java_lang_String__int($Util.$makeEnumName("ASCENDING"), SortValue.$ordinal$f_ASCENDING__org_gwtproject_aria_client_SortValue);
  SortValue.$f_DESCENDING__org_gwtproject_aria_client_SortValue = SortValue.$create__java_lang_String__int($Util.$makeEnumName("DESCENDING"), SortValue.$ordinal$f_DESCENDING__org_gwtproject_aria_client_SortValue);
  SortValue.$f_NONE__org_gwtproject_aria_client_SortValue = SortValue.$create__java_lang_String__int($Util.$makeEnumName("NONE"), SortValue.$ordinal$f_NONE__org_gwtproject_aria_client_SortValue);
  SortValue.$f_OTHER__org_gwtproject_aria_client_SortValue = SortValue.$create__java_lang_String__int($Util.$makeEnumName("OTHER"), SortValue.$ordinal$f_OTHER__org_gwtproject_aria_client_SortValue);
  SortValue.f_namesToValuesMap__org_gwtproject_aria_client_SortValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SortValue;
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
$Util.$setClassMetadataForEnum(SortValue, 'org.gwtproject.aria.client.SortValue');

AriaAttributeType.$markImplementor(SortValue);

/** @private {!SortValue} */
SortValue.$f_ASCENDING__org_gwtproject_aria_client_SortValue;
/** @private {!SortValue} */
SortValue.$f_DESCENDING__org_gwtproject_aria_client_SortValue;
/** @private {!SortValue} */
SortValue.$f_NONE__org_gwtproject_aria_client_SortValue;
/** @private {!SortValue} */
SortValue.$f_OTHER__org_gwtproject_aria_client_SortValue;
/** @public {Map<?string, !SortValue>} */
SortValue.f_namesToValuesMap__org_gwtproject_aria_client_SortValue_;
/** @public {number} @const */
SortValue.$ordinal$f_ASCENDING__org_gwtproject_aria_client_SortValue = 0;
/** @public {number} @const */
SortValue.$ordinal$f_DESCENDING__org_gwtproject_aria_client_SortValue = 1;
/** @public {number} @const */
SortValue.$ordinal$f_NONE__org_gwtproject_aria_client_SortValue = 2;
/** @public {number} @const */
SortValue.$ordinal$f_OTHER__org_gwtproject_aria_client_SortValue = 3;

exports = SortValue; 
//# sourceMappingURL=SortValue.js.map