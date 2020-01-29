goog.module('org.gwtproject.aria.client.SelectedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SelectedValue>}
 * @implements {AriaAttributeType}
  */
class SelectedValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!SelectedValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new SelectedValue();
  $instance.$ctor__org_gwtproject_aria_client_SelectedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_SelectedValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {boolean} value
  * @return {SelectedValue}
  * @public
  */
 static m_of__boolean(value) {
  SelectedValue.$clinit();
  return value ? SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue : SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue: 
    return "true";
   case SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue: 
    return "false";
   case SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue: 
    return "undefined";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!SelectedValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  SelectedValue.$clinit();
  if ($Equality.$same(SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_, null)) {
   SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_ = $Enums.createMapFromValues(SelectedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_);
 }
 /**
  * @return {!Array<!SelectedValue>}
  * @public
  */
 static m_values__() {
  SelectedValue.$clinit();
  return /**@type {!Array<SelectedValue>} */ ($Arrays.$init([SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue, SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue, SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue], SelectedValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {SelectedValue} */ ($Casts.$to(arg0, SelectedValue)));
 }
 /**
  * @return {!SelectedValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue);
 }
 /**
  * @return {!SelectedValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue);
 }
 /**
  * @return {!SelectedValue}
  * @public
  */
 static get f_UNDEFINED__org_gwtproject_aria_client_SelectedValue() {
  return (SelectedValue.$clinit(), SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue);
 }
 /**
  * @public
  */
 static $clinit() {
  SelectedValue.$clinit = () =>{};
  SelectedValue.$loadModules();
  Enum.$clinit();
  SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue = SelectedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue);
  SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SelectedValue;
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
$Util.$setClassMetadataForEnum(SelectedValue, 'org.gwtproject.aria.client.SelectedValue');

AriaAttributeType.$markImplementor(SelectedValue);

/** @private {!SelectedValue} */
SelectedValue.$f_TRUE__org_gwtproject_aria_client_SelectedValue;
/** @private {!SelectedValue} */
SelectedValue.$f_FALSE__org_gwtproject_aria_client_SelectedValue;
/** @private {!SelectedValue} */
SelectedValue.$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue;
/** @public {Map<?string, !SelectedValue>} */
SelectedValue.f_namesToValuesMap__org_gwtproject_aria_client_SelectedValue_;
/** @public {number} @const */
SelectedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_SelectedValue = 0;
/** @public {number} @const */
SelectedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_SelectedValue = 1;
/** @public {number} @const */
SelectedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_SelectedValue = 2;

exports = SelectedValue; 
//# sourceMappingURL=SelectedValue.js.map