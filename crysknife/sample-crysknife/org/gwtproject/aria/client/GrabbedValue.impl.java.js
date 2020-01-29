goog.module('org.gwtproject.aria.client.GrabbedValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GrabbedValue>}
 * @implements {AriaAttributeType}
  */
class GrabbedValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!GrabbedValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new GrabbedValue();
  $instance.$ctor__org_gwtproject_aria_client_GrabbedValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_GrabbedValue__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {boolean} value
  * @return {GrabbedValue}
  * @public
  */
 static m_of__boolean(value) {
  GrabbedValue.$clinit();
  return value ? GrabbedValue.$f_TRUE__org_gwtproject_aria_client_GrabbedValue : GrabbedValue.$f_FALSE__org_gwtproject_aria_client_GrabbedValue;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {
  switch (this.ordinal()) {
   case GrabbedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_GrabbedValue: 
    return "true";
   case GrabbedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_GrabbedValue: 
    return "false";
   case GrabbedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue: 
    return "undefined";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!GrabbedValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  GrabbedValue.$clinit();
  if ($Equality.$same(GrabbedValue.f_namesToValuesMap__org_gwtproject_aria_client_GrabbedValue_, null)) {
   GrabbedValue.f_namesToValuesMap__org_gwtproject_aria_client_GrabbedValue_ = $Enums.createMapFromValues(GrabbedValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GrabbedValue.f_namesToValuesMap__org_gwtproject_aria_client_GrabbedValue_);
 }
 /**
  * @return {!Array<!GrabbedValue>}
  * @public
  */
 static m_values__() {
  GrabbedValue.$clinit();
  return /**@type {!Array<GrabbedValue>} */ ($Arrays.$init([GrabbedValue.$f_TRUE__org_gwtproject_aria_client_GrabbedValue, GrabbedValue.$f_FALSE__org_gwtproject_aria_client_GrabbedValue, GrabbedValue.$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue], GrabbedValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {GrabbedValue} */ ($Casts.$to(arg0, GrabbedValue)));
 }
 /**
  * @return {!GrabbedValue}
  * @public
  */
 static get f_TRUE__org_gwtproject_aria_client_GrabbedValue() {
  return (GrabbedValue.$clinit(), GrabbedValue.$f_TRUE__org_gwtproject_aria_client_GrabbedValue);
 }
 /**
  * @return {!GrabbedValue}
  * @public
  */
 static get f_FALSE__org_gwtproject_aria_client_GrabbedValue() {
  return (GrabbedValue.$clinit(), GrabbedValue.$f_FALSE__org_gwtproject_aria_client_GrabbedValue);
 }
 /**
  * @return {!GrabbedValue}
  * @public
  */
 static get f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue() {
  return (GrabbedValue.$clinit(), GrabbedValue.$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue);
 }
 /**
  * @public
  */
 static $clinit() {
  GrabbedValue.$clinit = () =>{};
  GrabbedValue.$loadModules();
  Enum.$clinit();
  GrabbedValue.$f_TRUE__org_gwtproject_aria_client_GrabbedValue = GrabbedValue.$create__java_lang_String__int($Util.$makeEnumName("TRUE"), GrabbedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_GrabbedValue);
  GrabbedValue.$f_FALSE__org_gwtproject_aria_client_GrabbedValue = GrabbedValue.$create__java_lang_String__int($Util.$makeEnumName("FALSE"), GrabbedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_GrabbedValue);
  GrabbedValue.$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue = GrabbedValue.$create__java_lang_String__int($Util.$makeEnumName("UNDEFINED"), GrabbedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue);
  GrabbedValue.f_namesToValuesMap__org_gwtproject_aria_client_GrabbedValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof GrabbedValue;
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
$Util.$setClassMetadataForEnum(GrabbedValue, 'org.gwtproject.aria.client.GrabbedValue');

AriaAttributeType.$markImplementor(GrabbedValue);

/** @private {!GrabbedValue} */
GrabbedValue.$f_TRUE__org_gwtproject_aria_client_GrabbedValue;
/** @private {!GrabbedValue} */
GrabbedValue.$f_FALSE__org_gwtproject_aria_client_GrabbedValue;
/** @private {!GrabbedValue} */
GrabbedValue.$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue;
/** @public {Map<?string, !GrabbedValue>} */
GrabbedValue.f_namesToValuesMap__org_gwtproject_aria_client_GrabbedValue_;
/** @public {number} @const */
GrabbedValue.$ordinal$f_TRUE__org_gwtproject_aria_client_GrabbedValue = 0;
/** @public {number} @const */
GrabbedValue.$ordinal$f_FALSE__org_gwtproject_aria_client_GrabbedValue = 1;
/** @public {number} @const */
GrabbedValue.$ordinal$f_UNDEFINED__org_gwtproject_aria_client_GrabbedValue = 2;

exports = GrabbedValue; 
//# sourceMappingURL=GrabbedValue.js.map