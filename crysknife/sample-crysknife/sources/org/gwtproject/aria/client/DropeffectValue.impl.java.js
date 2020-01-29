goog.module('org.gwtproject.aria.client.DropeffectValue$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AriaAttributeType = goog.require('org.gwtproject.aria.client.AriaAttributeType$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DropeffectValue>}
 * @implements {AriaAttributeType}
  */
class DropeffectValue extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!DropeffectValue}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new DropeffectValue();
  $instance.$ctor__org_gwtproject_aria_client_DropeffectValue__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_aria_client_DropeffectValue__java_lang_String__int($name, $ordinal) {
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
   case DropeffectValue.$ordinal$f_COPY__org_gwtproject_aria_client_DropeffectValue: 
    return "copy";
   case DropeffectValue.$ordinal$f_MOVE__org_gwtproject_aria_client_DropeffectValue: 
    return "move";
   case DropeffectValue.$ordinal$f_LINK__org_gwtproject_aria_client_DropeffectValue: 
    return "link";
   case DropeffectValue.$ordinal$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue: 
    return "execute";
   case DropeffectValue.$ordinal$f_POPUP__org_gwtproject_aria_client_DropeffectValue: 
    return "popup";
   case DropeffectValue.$ordinal$f_NONE__org_gwtproject_aria_client_DropeffectValue: 
    return "none";
  }
  return null;
 }
 /**
  * @param {string} name
  * @return {!DropeffectValue}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  DropeffectValue.$clinit();
  if ($Equality.$same(DropeffectValue.f_namesToValuesMap__org_gwtproject_aria_client_DropeffectValue_, null)) {
   DropeffectValue.f_namesToValuesMap__org_gwtproject_aria_client_DropeffectValue_ = $Enums.createMapFromValues(DropeffectValue.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DropeffectValue.f_namesToValuesMap__org_gwtproject_aria_client_DropeffectValue_);
 }
 /**
  * @return {!Array<!DropeffectValue>}
  * @public
  */
 static m_values__() {
  DropeffectValue.$clinit();
  return /**@type {!Array<DropeffectValue>} */ ($Arrays.$init([DropeffectValue.$f_COPY__org_gwtproject_aria_client_DropeffectValue, DropeffectValue.$f_MOVE__org_gwtproject_aria_client_DropeffectValue, DropeffectValue.$f_LINK__org_gwtproject_aria_client_DropeffectValue, DropeffectValue.$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue, DropeffectValue.$f_POPUP__org_gwtproject_aria_client_DropeffectValue, DropeffectValue.$f_NONE__org_gwtproject_aria_client_DropeffectValue], DropeffectValue));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {DropeffectValue} */ ($Casts.$to(arg0, DropeffectValue)));
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_COPY__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_COPY__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_MOVE__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_MOVE__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_LINK__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_LINK__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_EXECUTE__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_POPUP__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_POPUP__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @return {!DropeffectValue}
  * @public
  */
 static get f_NONE__org_gwtproject_aria_client_DropeffectValue() {
  return (DropeffectValue.$clinit(), DropeffectValue.$f_NONE__org_gwtproject_aria_client_DropeffectValue);
 }
 /**
  * @public
  */
 static $clinit() {
  DropeffectValue.$clinit = () =>{};
  DropeffectValue.$loadModules();
  Enum.$clinit();
  DropeffectValue.$f_COPY__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("COPY"), DropeffectValue.$ordinal$f_COPY__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.$f_MOVE__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("MOVE"), DropeffectValue.$ordinal$f_MOVE__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.$f_LINK__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("LINK"), DropeffectValue.$ordinal$f_LINK__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("EXECUTE"), DropeffectValue.$ordinal$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.$f_POPUP__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("POPUP"), DropeffectValue.$ordinal$f_POPUP__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.$f_NONE__org_gwtproject_aria_client_DropeffectValue = DropeffectValue.$create__java_lang_String__int($Util.$makeEnumName("NONE"), DropeffectValue.$ordinal$f_NONE__org_gwtproject_aria_client_DropeffectValue);
  DropeffectValue.f_namesToValuesMap__org_gwtproject_aria_client_DropeffectValue_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DropeffectValue;
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
$Util.$setClassMetadataForEnum(DropeffectValue, 'org.gwtproject.aria.client.DropeffectValue');

AriaAttributeType.$markImplementor(DropeffectValue);

/** @private {!DropeffectValue} */
DropeffectValue.$f_COPY__org_gwtproject_aria_client_DropeffectValue;
/** @private {!DropeffectValue} */
DropeffectValue.$f_MOVE__org_gwtproject_aria_client_DropeffectValue;
/** @private {!DropeffectValue} */
DropeffectValue.$f_LINK__org_gwtproject_aria_client_DropeffectValue;
/** @private {!DropeffectValue} */
DropeffectValue.$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue;
/** @private {!DropeffectValue} */
DropeffectValue.$f_POPUP__org_gwtproject_aria_client_DropeffectValue;
/** @private {!DropeffectValue} */
DropeffectValue.$f_NONE__org_gwtproject_aria_client_DropeffectValue;
/** @public {Map<?string, !DropeffectValue>} */
DropeffectValue.f_namesToValuesMap__org_gwtproject_aria_client_DropeffectValue_;
/** @public {number} @const */
DropeffectValue.$ordinal$f_COPY__org_gwtproject_aria_client_DropeffectValue = 0;
/** @public {number} @const */
DropeffectValue.$ordinal$f_MOVE__org_gwtproject_aria_client_DropeffectValue = 1;
/** @public {number} @const */
DropeffectValue.$ordinal$f_LINK__org_gwtproject_aria_client_DropeffectValue = 2;
/** @public {number} @const */
DropeffectValue.$ordinal$f_EXECUTE__org_gwtproject_aria_client_DropeffectValue = 3;
/** @public {number} @const */
DropeffectValue.$ordinal$f_POPUP__org_gwtproject_aria_client_DropeffectValue = 4;
/** @public {number} @const */
DropeffectValue.$ordinal$f_NONE__org_gwtproject_aria_client_DropeffectValue = 5;

exports = DropeffectValue; 
//# sourceMappingURL=DropeffectValue.js.map