goog.module('org.gwtproject.aria.client.RelevantValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<RelevantValue>}
 * @implements {AriaAttributeType}
  */
class RelevantValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!RelevantValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new RelevantValue();
  $instance.$ctor__org_gwtproject_aria_client_RelevantValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_RelevantValue__java_lang_String__int($name, $ordinal) {
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
   case RelevantValue.$ordinal$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue: 
    return "additions";
   case RelevantValue.$ordinal$f_REMOVALS__org_gwtproject_aria_client_RelevantValue: 
    return "removals";
   case RelevantValue.$ordinal$f_TEXT__org_gwtproject_aria_client_RelevantValue: 
    return "text";
   case RelevantValue.$ordinal$f_ALL__org_gwtproject_aria_client_RelevantValue: 
    return "all";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!RelevantValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  RelevantValue.$clinit();
  if ($Equality.$same(RelevantValue.f_namesToValuesMap__org_gwtproject_aria_client_RelevantValue_, null)) {
   RelevantValue.f_namesToValuesMap__org_gwtproject_aria_client_RelevantValue_ = $Enums.createMapFromValues(RelevantValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, RelevantValue.f_namesToValuesMap__org_gwtproject_aria_client_RelevantValue_);
 }
 /**
  * @return {!Array<!RelevantValue>}
  * @public
  */
 static m_values__() {
  RelevantValue.$clinit();
  return /**@type {!Array<RelevantValue>} */ ($Arrays.$init([RelevantValue.$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue, RelevantValue.$f_REMOVALS__org_gwtproject_aria_client_RelevantValue, RelevantValue.$f_TEXT__org_gwtproject_aria_client_RelevantValue, RelevantValue.$f_ALL__org_gwtproject_aria_client_RelevantValue], RelevantValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {RelevantValue} */ ($Casts.$to(arg0, RelevantValue)));
 }
 /**
  * @return {!RelevantValue}
  * @public
  */
 static get f_ADDITIONS__org_gwtproject_aria_client_RelevantValue() {
  return (RelevantValue.$clinit(), RelevantValue.$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue);
 }
 /**
  * @return {!RelevantValue}
  * @public
  */
 static get f_REMOVALS__org_gwtproject_aria_client_RelevantValue() {
  return (RelevantValue.$clinit(), RelevantValue.$f_REMOVALS__org_gwtproject_aria_client_RelevantValue);
 }
 /**
  * @return {!RelevantValue}
  * @public
  */
 static get f_TEXT__org_gwtproject_aria_client_RelevantValue() {
  return (RelevantValue.$clinit(), RelevantValue.$f_TEXT__org_gwtproject_aria_client_RelevantValue);
 }
 /**
  * @return {!RelevantValue}
  * @public
  */
 static get f_ALL__org_gwtproject_aria_client_RelevantValue() {
  return (RelevantValue.$clinit(), RelevantValue.$f_ALL__org_gwtproject_aria_client_RelevantValue);
 }
 /**
  * @public
  */
 static $clinit() {
  RelevantValue.$clinit = () =>{};
  RelevantValue.$loadModules();
  Enum.$clinit();
  RelevantValue.$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue = RelevantValue.$create__java_lang_String__int($Util.$makeEnumName("ADDITIONS"), RelevantValue.$ordinal$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue);
  RelevantValue.$f_REMOVALS__org_gwtproject_aria_client_RelevantValue = RelevantValue.$create__java_lang_String__int($Util.$makeEnumName("REMOVALS"), RelevantValue.$ordinal$f_REMOVALS__org_gwtproject_aria_client_RelevantValue);
  RelevantValue.$f_TEXT__org_gwtproject_aria_client_RelevantValue = RelevantValue.$create__java_lang_String__int($Util.$makeEnumName("TEXT"), RelevantValue.$ordinal$f_TEXT__org_gwtproject_aria_client_RelevantValue);
  RelevantValue.$f_ALL__org_gwtproject_aria_client_RelevantValue = RelevantValue.$create__java_lang_String__int($Util.$makeEnumName("ALL"), RelevantValue.$ordinal$f_ALL__org_gwtproject_aria_client_RelevantValue);
  RelevantValue.f_namesToValuesMap__org_gwtproject_aria_client_RelevantValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RelevantValue;
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
$Util.$setClassMetadataForEnum(RelevantValue, 'org.gwtproject.aria.client.RelevantValue');

AriaAttributeType.$markImplementor(RelevantValue);

/** @private {!RelevantValue} */
RelevantValue.$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue;
/** @private {!RelevantValue} */
RelevantValue.$f_REMOVALS__org_gwtproject_aria_client_RelevantValue;
/** @private {!RelevantValue} */
RelevantValue.$f_TEXT__org_gwtproject_aria_client_RelevantValue;
/** @private {!RelevantValue} */
RelevantValue.$f_ALL__org_gwtproject_aria_client_RelevantValue;
/** @public {Map<?string, !RelevantValue>} */
RelevantValue.f_namesToValuesMap__org_gwtproject_aria_client_RelevantValue_;
/** @public {number} @const */
RelevantValue.$ordinal$f_ADDITIONS__org_gwtproject_aria_client_RelevantValue = 0;
/** @public {number} @const */
RelevantValue.$ordinal$f_REMOVALS__org_gwtproject_aria_client_RelevantValue = 1;
/** @public {number} @const */
RelevantValue.$ordinal$f_TEXT__org_gwtproject_aria_client_RelevantValue = 2;
/** @public {number} @const */
RelevantValue.$ordinal$f_ALL__org_gwtproject_aria_client_RelevantValue = 3;

exports = RelevantValue; 
//# sourceMappingURL=RelevantValue.js.map