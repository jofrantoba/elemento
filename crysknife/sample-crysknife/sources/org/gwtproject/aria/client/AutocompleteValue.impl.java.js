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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!AutocompleteValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new AutocompleteValue();
  $instance.$ctor__org_gwtproject_aria_client_AutocompleteValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_AutocompleteValue__java_lang_String__int($name, $ordinal) {
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
 /**
  * @param {string} name
  * @return {!AutocompleteValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  AutocompleteValue.$clinit();
  if ($Equality.$same(AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_, null)) {
   AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_ = $Enums.createMapFromValues(AutocompleteValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_);
 }
 /**
  * @return {!Array<!AutocompleteValue>}
  * @public
  */
 static m_values__() {
  AutocompleteValue.$clinit();
  return /**@type {!Array<AutocompleteValue>} */ ($Arrays.$init([AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue, AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue], AutocompleteValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {AutocompleteValue} */ ($Casts.$to(arg0, AutocompleteValue)));
 }
 /**
  * @return {!AutocompleteValue}
  * @public
  */
 static get f_INLINE__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue);
 }
 /**
  * @return {!AutocompleteValue}
  * @public
  */
 static get f_LIST__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue);
 }
 /**
  * @return {!AutocompleteValue}
  * @public
  */
 static get f_BOTH__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue);
 }
 /**
  * @return {!AutocompleteValue}
  * @public
  */
 static get f_NONE__org_gwtproject_aria_client_AutocompleteValue() {
  return (AutocompleteValue.$clinit(), AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue);
 }
 /**
  * @public
  */
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
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AutocompleteValue;
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
$Util.$setClassMetadataForEnum(AutocompleteValue, 'org.gwtproject.aria.client.AutocompleteValue');

AriaAttributeType.$markImplementor(AutocompleteValue);

/** @private {!AutocompleteValue} */
AutocompleteValue.$f_INLINE__org_gwtproject_aria_client_AutocompleteValue;
/** @private {!AutocompleteValue} */
AutocompleteValue.$f_LIST__org_gwtproject_aria_client_AutocompleteValue;
/** @private {!AutocompleteValue} */
AutocompleteValue.$f_BOTH__org_gwtproject_aria_client_AutocompleteValue;
/** @private {!AutocompleteValue} */
AutocompleteValue.$f_NONE__org_gwtproject_aria_client_AutocompleteValue;
/** @public {Map<?string, !AutocompleteValue>} */
AutocompleteValue.f_namesToValuesMap__org_gwtproject_aria_client_AutocompleteValue_;
/** @public {number} @const */
AutocompleteValue.$ordinal$f_INLINE__org_gwtproject_aria_client_AutocompleteValue = 0;
/** @public {number} @const */
AutocompleteValue.$ordinal$f_LIST__org_gwtproject_aria_client_AutocompleteValue = 1;
/** @public {number} @const */
AutocompleteValue.$ordinal$f_BOTH__org_gwtproject_aria_client_AutocompleteValue = 2;
/** @public {number} @const */
AutocompleteValue.$ordinal$f_NONE__org_gwtproject_aria_client_AutocompleteValue = 3;

exports = AutocompleteValue; 
//# sourceMappingURL=AutocompleteValue.js.map